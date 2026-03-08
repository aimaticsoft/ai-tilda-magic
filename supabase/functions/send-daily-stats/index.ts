import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SECTION_NAMES: Record<string, string> = {
  'about': '💼 О компании',
  'products': '📦 Продукты',
  'services': '⚙️ Услуги',
  'cases': '📁 Кейсы',
  'calculator': '🧮 Калькулятор',
  'demo': '🎯 Демо',
  'advantages': '✅ Преимущества',
  'reviews': '⭐ Отзывы',
  'faq': '❓ FAQ',
  'contacts': '📞 Контакты',
  'target-audience': '👥 Целевая аудитория',
  'how-we-work': '🔧 Как мы работаем',
  'trust-badges': '🏆 Доверие',
  'industry-solutions': '🏭 Отраслевые решения',
  'comparison': '📊 Сравнение',
};

const DEVICE_NAMES: Record<string, string> = {
  'mobile': '📱 Мобильный',
  'tablet': '📱 Планшет',
  'desktop': '🖥 Компьютер',
};

const PERIOD_TITLES: Record<string, string> = {
  'daily': '📊 Ежедневный отчёт',
  'weekly': '📊 Еженедельный отчёт',
  'monthly': '📊 Ежемесячный отчёт',
};

function formatTime(seconds: number): string {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  if (min > 0) return `${min} мин ${sec} сек`;
  return `${sec} сек`;
}

function pluralize(n: number, one: string, few: string, many: string): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 19) return many;
  if (mod10 === 1) return one;
  if (mod10 >= 2 && mod10 <= 4) return few;
  return many;
}

function smartTruncate(str: string, max: number): string {
  if (str.length <= max) return str;
  const lastSpace = str.lastIndexOf(' ', max);
  return (lastSpace > max * 0.5 ? str.slice(0, lastSpace) : str.slice(0, max)) + '…';
}

function getDateRange(period: string): { startUTC: string; endUTC: string; label: string } {
  const now = new Date();
  const todayMSK = new Date(now.getTime() + 3 * 60 * 60 * 1000);

  let start: Date;
  let end: Date;
  let label: string;

  if (period === 'weekly') {
    // Last 7 days
    end = new Date(todayMSK);
    end.setHours(0, 0, 0, 0);
    start = new Date(end);
    start.setDate(start.getDate() - 7);
    end.setMilliseconds(-1); // end of yesterday

    const startLabel = new Date(start).toLocaleDateString('ru-RU');
    const endLabel = new Date(end).toLocaleDateString('ru-RU');
    label = `${startLabel} — ${endLabel}`;
  } else if (period === 'monthly') {
    // Last calendar month
    end = new Date(todayMSK);
    end.setDate(1);
    end.setHours(0, 0, 0, 0);
    end.setMilliseconds(-1); // end of last day of prev month
    start = new Date(end);
    start.setDate(1);
    start.setHours(0, 0, 0, 0);

    const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    label = `${monthNames[start.getMonth()]} ${start.getFullYear()}`;
  } else {
    // Daily - yesterday
    start = new Date(todayMSK);
    start.setDate(start.getDate() - 1);
    start.setHours(0, 0, 0, 0);
    end = new Date(start);
    end.setHours(23, 59, 59, 999);
    label = start.toLocaleDateString('ru-RU');
  }

  return {
    startUTC: new Date(start.getTime() - 3 * 60 * 60 * 1000).toISOString(),
    endUTC: new Date(end.getTime() - 3 * 60 * 60 * 1000).toISOString(),
    label,
  };
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const TELEGRAM_BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN');
    const TELEGRAM_CHAT_ID = Deno.env.get('TELEGRAM_CHAT_ID');
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) throw new Error('Telegram credentials not configured');
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) throw new Error('Supabase credentials not configured');

    // Parse period from body
    let period = 'daily';
    try {
      const body = await req.json();
      if (body?.period && ['daily', 'weekly', 'monthly'].includes(body.period)) {
        period = body.period;
      }
    } catch { /* default to daily */ }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const { startUTC, endUTC, label } = getDateRange(period);

    const { data: visits, error } = await supabase
      .from('site_visits')
      .select('*')
      .gte('entered_at', startUTC)
      .lte('entered_at', endUTC);

    if (error) throw error;

    const totalVisits = visits?.length || 0;
    const title = PERIOD_TITLES[period] || PERIOD_TITLES.daily;

    if (totalVisits === 0) {
      const message = `${title}\n📅 ${label}\n\n❌ Посетителей: 0`;
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
      .slice(0, 7)
      .map(([id, count], i) => {
        const name = SECTION_NAMES[id] || id;
        const avgTime = sectionTotalTime[id] ? formatTime(Math.round(sectionTotalTime[id] / count)) : '';
        const star = i === 0 ? ' ⭐' : '';
        return `  ${i + 1}. ${name} — ${count} ${pluralize(count, 'просмотр', 'просмотра', 'просмотров')}${avgTime ? ` (ср. ${avgTime})` : ''}${star}`;
      })
      .join('\n');

    const topTimeSection = Object.entries(sectionTotalTime)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([id, sec], i) => {
        const name = SECTION_NAMES[id] || id;
        const star = i === 0 ? ' 🔥' : '';
        return `  ${i + 1}. ${name} — ${formatTime(Math.round(sec / totalVisits))}${star}`;
      })
      .join('\n');

    // Click aggregation
    const clickCounts: Record<string, number> = {};
    visits.forEach((v) => {
      const cls = v.clicks as Array<{ text: string; target: string }> || [];
      cls.forEach((c) => {
        const label = c.text || c.target || 'неизвестно';
        clickCounts[label] = (clickCounts[label] || 0) + 1;
      });
    });

    const topClicks = Object.entries(clickCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([text, count]) => {
        const displayText = smartTruncate(text, 80);
        const countStr = ` — ${count} ${pluralize(count, 'раз', 'раза', 'раз')}`;
        return `  • «${displayText}»${countStr}`;
      })
      .join('\n');

    // Device breakdown
    const devices: Record<string, number> = {};
    visits.forEach((v) => {
      const d = v.device || 'unknown';
      devices[d] = (devices[d] || 0) + 1;
    });
    const deviceStr = Object.entries(devices)
      .sort((a, b) => b[1] - a[1])
      .map(([d, c]) => `${DEVICE_NAMES[d] || d}: ${c}`)
      .join(', ');

    // Referrer breakdown
    const referrers: Record<string, number> = {};
    visits.forEach((v) => {
      let ref = v.referrer || 'direct';
      if (ref !== 'direct') {
        try { ref = new URL(ref).hostname; } catch { /* keep as is */ }
      }
      referrers[ref] = (referrers[ref] || 0) + 1;
    });
    const topReferrers = Object.entries(referrers)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([ref, count]) => {
        const name = ref === 'direct' ? 'Прямой заход' : ref;
        return `  • ${name} — ${count}`;
      })
      .join('\n');

    // Insights
    const insights: string[] = [];
    const topSectionEntry = Object.entries(sectionTotalTime).sort((a, b) => b[1] - a[1])[0];
    if (topSectionEntry) {
      const name = (SECTION_NAMES[topSectionEntry[0]] || topSectionEntry[0]).replace(/^[^\s]+ /, '');
      insights.push(`больше всего времени в «${name}»`);
    }
    if (avgDuration > 180) insights.push(`среднее время ${formatTime(avgDuration)}`);
    if (avgScroll > 70) insights.push(`средний скролл ${avgScroll}%`);

    const totalClicks = Object.values(clickCounts).reduce((s, c) => s + c, 0);

    const message = `${title}
📅 ${label}

━━━━━━━━━━━━━━━━━━━━━━━
👥 *ПОСЕТИТЕЛИ*
━━━━━━━━━━━━━━━━━━━━━━━

📈 *Всего:* ${totalVisits} ${pluralize(totalVisits, 'посетитель', 'посетителя', 'посетителей')}
⏱ *Среднее время:* ${formatTime(avgDuration)}
📜 *Средний скролл:* ${avgScroll}%
🖱 *Всего кликов:* ${totalClicks}

📱 *Устройства:* ${deviceStr}

🔗 *Источники:*
${topReferrers || '  нет данных'}

━━━━━━━━━━━━━━━━━━━━━━━
📊 *СЕКЦИИ*
━━━━━━━━━━━━━━━━━━━━━━━

🏆 *По популярности:*
${topSections || '  нет данных'}

⏱ *По времени (в среднем):*
${topTimeSection || '  нет данных'}

━━━━━━━━━━━━━━━━━━━━━━━
🖱 *КЛИКИ*
━━━━━━━━━━━━━━━━━━━━━━━

${topClicks || '  нет данных'}${insights.length > 0 ? `\n\n💡 *Вывод:* ${insights.join(', ')}` : ''}`;

    await sendTelegram(TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, message);

    return new Response(JSON.stringify({ success: true, visits: totalVisits, period }), {
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
