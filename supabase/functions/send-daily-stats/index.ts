import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const TELEGRAM_BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN');
    const TELEGRAM_CHAT_ID = Deno.env.get('TELEGRAM_CHAT_ID');
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      throw new Error('Telegram credentials not configured');
    }
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error('Supabase credentials not configured');
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Get yesterday's date range (MSK = UTC+3)
    const now = new Date();
    const todayMSK = new Date(now.getTime() + 3 * 60 * 60 * 1000);
    const yesterdayStart = new Date(todayMSK);
    yesterdayStart.setDate(yesterdayStart.getDate() - 1);
    yesterdayStart.setHours(0, 0, 0, 0);
    const yesterdayEnd = new Date(yesterdayStart);
    yesterdayEnd.setHours(23, 59, 59, 999);

    // Convert back to UTC for query
    const startUTC = new Date(yesterdayStart.getTime() - 3 * 60 * 60 * 1000).toISOString();
    const endUTC = new Date(yesterdayEnd.getTime() - 3 * 60 * 60 * 1000).toISOString();

    const { data: visits, error } = await supabase
      .from('site_visits')
      .select('*')
      .gte('entered_at', startUTC)
      .lte('entered_at', endUTC);

    if (error) throw error;

    const totalVisits = visits?.length || 0;

    if (totalVisits === 0) {
      const message = `📊 *Ежедневный отчёт*\n📅 ${yesterdayStart.toLocaleDateString('ru-RU')}\n\n❌ Посетителей за вчера: 0`;
      await sendTelegram(TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, message);
      return new Response(JSON.stringify({ success: true, visits: 0 }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Aggregate stats
    const avgDuration = Math.round(visits.reduce((s, v) => s + (v.duration_seconds || 0), 0) / totalVisits);
    const avgScroll = Math.round(visits.reduce((s, v) => s + (v.max_scroll_percent || 0), 0) / totalVisits);

    // Section popularity
    const sectionCounts: Record<string, number> = {};
    const sectionTotalTime: Record<string, number> = {};
    visits.forEach((v) => {
      (v.sections_viewed || []).forEach((s: string) => {
        sectionCounts[s] = (sectionCounts[s] || 0) + 1;
      });
      const st = v.sections_time as Record<string, number> || {};
      Object.entries(st).forEach(([s, t]) => {
        sectionTotalTime[s] = (sectionTotalTime[s] || 0) + (t as number);
      });
    });

    const topSections = Object.entries(sectionCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, count]) => `  • ${name}: ${count} просм.`)
      .join('\n');

    const topTimeSection = Object.entries(sectionTotalTime)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([name, sec]) => `  • ${name}: ${formatTime(Math.round(sec / totalVisits))}`)
      .join('\n');

    // Click aggregation
    const clickCounts: Record<string, number> = {};
    visits.forEach((v) => {
      const cls = v.clicks as Array<{ text: string }> || [];
      cls.forEach((c) => {
        if (c.text) {
          clickCounts[c.text] = (clickCounts[c.text] || 0) + 1;
        }
      });
    });

    const topClicks = Object.entries(clickCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([text, count]) => `  • «${text}»: ${count}`)
      .join('\n');

    // Device breakdown
    const devices: Record<string, number> = {};
    visits.forEach((v) => {
      const d = v.device || 'unknown';
      devices[d] = (devices[d] || 0) + 1;
    });
    const deviceStr = Object.entries(devices)
      .map(([d, c]) => `${d}: ${c}`)
      .join(', ');

    const message = `📊 *Ежедневный отчёт*
📅 ${yesterdayStart.toLocaleDateString('ru-RU')}

👥 *Посетителей:* ${totalVisits}
⏱ *Среднее время:* ${formatTime(avgDuration)}
📜 *Средний скролл:* ${avgScroll}%
📱 *Устройства:* ${deviceStr}

🏆 *Популярные секции:*
${topSections || '  нет данных'}

🔥 *Больше всего времени (в среднем):*
${topTimeSection || '  нет данных'}

🖱 *Популярные клики:*
${topClicks || '  нет данных'}`;

    await sendTelegram(TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, message);

    return new Response(JSON.stringify({ success: true, visits: totalVisits }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error('Error:', error);
    const msg = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ success: false, error: msg }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});

function formatTime(seconds: number): string {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  if (min > 0) return `${min} мин ${sec} сек`;
  return `${sec} сек`;
}

async function sendTelegram(token: string, chatId: string, text: string) {
  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'Markdown' }),
  });
  if (!res.ok) {
    const data = await res.json();
    throw new Error(`Telegram error: ${JSON.stringify(data)}`);
  }
}
