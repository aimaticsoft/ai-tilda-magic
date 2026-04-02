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

const SECTION_SHORT: Record<string, string> = {
  'about': 'О компании',
  'products': 'Продукты',
  'services': 'Услуги',
  'cases': 'Кейсы',
  'calculator': 'Калькулятор',
  'demo': 'Демо',
  'advantages': 'Преимущества',
  'reviews': 'Отзывы',
  'faq': 'FAQ',
  'contacts': 'Контакты',
  'target-audience': 'ЦА',
  'how-we-work': 'Как работаем',
  'trust-badges': 'Доверие',
  'industry-solutions': 'Отрасли',
  'comparison': 'Сравнение',
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

const FUNNEL_SECTIONS = ['about', 'services', 'cases', 'calculator', 'demo', 'contacts'];

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
  let start: Date, end: Date, label: string;

  if (period === 'weekly') {
    end = new Date(todayMSK); end.setHours(0, 0, 0, 0);
    start = new Date(end); start.setDate(start.getDate() - 7);
    end.setMilliseconds(-1);
    label = `${new Date(start).toLocaleDateString('ru-RU')} — ${new Date(end).toLocaleDateString('ru-RU')}`;
  } else if (period === 'monthly') {
    end = new Date(todayMSK); end.setDate(1); end.setHours(0, 0, 0, 0); end.setMilliseconds(-1);
    start = new Date(end); start.setDate(1); start.setHours(0, 0, 0, 0);
    const monthNames = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
    label = `${monthNames[start.getMonth()]} ${start.getFullYear()}`;
  } else {
    start = new Date(todayMSK); start.setDate(start.getDate() - 1); start.setHours(0, 0, 0, 0);
    end = new Date(start); end.setHours(23, 59, 59, 999);
    label = start.toLocaleDateString('ru-RU');
  }
  return {
    startUTC: new Date(start.getTime() - 3 * 60 * 60 * 1000).toISOString(),
    endUTC: new Date(end.getTime() - 3 * 60 * 60 * 1000).toISOString(),
    label,
  };
}

function getPrevDateRange(period: string): { startUTC: string; endUTC: string } {
  const now = new Date();
  const todayMSK = new Date(now.getTime() + 3 * 60 * 60 * 1000);
  let start: Date, end: Date;

  if (period === 'weekly') {
    end = new Date(todayMSK); end.setHours(0, 0, 0, 0); end.setDate(end.getDate() - 7); end.setMilliseconds(-1);
    start = new Date(end); start.setHours(0, 0, 0, 0); start.setDate(start.getDate() - 6);
  } else if (period === 'monthly') {
    const realEnd = new Date(todayMSK); realEnd.setDate(1); realEnd.setHours(0, 0, 0, 0);
    realEnd.setMonth(realEnd.getMonth() - 1); realEnd.setMilliseconds(-1);
    end = realEnd; start = new Date(end); start.setDate(1); start.setHours(0, 0, 0, 0);
  } else {
    start = new Date(todayMSK); start.setDate(start.getDate() - 2); start.setHours(0, 0, 0, 0);
    end = new Date(start); end.setHours(23, 59, 59, 999);
  }
  return {
    startUTC: new Date(start.getTime() - 3 * 60 * 60 * 1000).toISOString(),
    endUTC: new Date(end.getTime() - 3 * 60 * 60 * 1000).toISOString(),
  };
}

function filterLovableVisits(rawVisits: any[]): any[] {
  return (rawVisits || []).filter((v) => {
    try {
      if (!v.referrer || v.referrer === 'direct') return true;
      const hostname = new URL(v.referrer).hostname;
      return !hostname.includes('lovable.dev') && !hostname.includes('lovable.app');
    } catch { return true; }
  });
}

function changeIndicator(current: number, previous: number): string {
  if (previous === 0) return current > 0 ? ' ↑' : '';
  const pct = Math.round(((current - previous) / previous) * 100);
  if (pct > 0) return ` ↑${pct}%`;
  if (pct < 0) return ` ↓${Math.abs(pct)}%`;
  return ' →';
}

function scrollBar(count: number, total: number): string {
  const pct = Math.round((count / total) * 100);
  const filled = Math.round(pct / 10);
  return '▓'.repeat(filled) + '░'.repeat(10 - filled) + ` ${pct}%`;
}

function getClickCount(v: any): number {
  const cls = v.clicks as Array<any> || [];
  return cls.length;
}

// ── Main ──

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

    let period = 'daily';
    try {
      const body = await req.json();
      if (body?.period && ['daily', 'weekly', 'monthly'].includes(body.period)) period = body.period;
    } catch { /* default */ }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const { startUTC, endUTC, label } = getDateRange(period);
    const prev = getPrevDateRange(period);

    const [currentRes, prevRes] = await Promise.all([
      supabase.from('site_visits').select('*').gte('entered_at', startUTC).lte('entered_at', endUTC),
      supabase.from('site_visits').select('*').gte('entered_at', prev.startUTC).lte('entered_at', prev.endUTC),
    ]);
    if (currentRes.error) throw currentRes.error;

    const visits = filterLovableVisits(currentRes.data);
    const prevVisits = filterLovableVisits(prevRes.data || []);
    const totalVisits = visits.length;
    const prevTotal = prevVisits.length;
    const title = PERIOD_TITLES[period] || PERIOD_TITLES.daily;

    if (totalVisits === 0) {
      const message = `${title}\n📅 ${label}\n\n❌ Посетителей: 0${prevTotal > 0 ? ` (пред.: ${prevTotal})` : ''}`;
      await sendTelegram(TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, message);
      return jsonResp({ success: true, visits: 0 });
    }

    // ── Basic stats ──
    const avgDuration = Math.round(visits.reduce((s, v) => s + (v.duration_seconds || 0), 0) / totalVisits);
    const avgScroll = Math.round(visits.reduce((s, v) => s + (v.max_scroll_percent || 0), 0) / totalVisits);
    const prevAvgDuration = prevTotal > 0 ? Math.round(prevVisits.reduce((s, v) => s + (v.duration_seconds || 0), 0) / prevTotal) : 0;
    const prevAvgScroll = prevTotal > 0 ? Math.round(prevVisits.reduce((s, v) => s + (v.max_scroll_percent || 0), 0) / prevTotal) : 0;

    // ── Engagement & Bounce ──
    const bounceVisits = visits.filter(v => (v.duration_seconds || 0) < 15).length;
    const engagedVisits = visits.filter(v => (v.duration_seconds || 0) > 60 && (v.max_scroll_percent || 0) > 50).length;
    const bounceRate = Math.round((bounceVisits / totalVisits) * 100);
    const engagementRate = Math.round((engagedVisits / totalVisits) * 100);

    // ── Total clicks ──
    const clickCounts: Record<string, number> = {};
    let totalClicksNum = 0;
    visits.forEach((v) => {
      const cls = v.clicks as Array<{ text: string; target: string }> || [];
      totalClicksNum += cls.length;
      cls.forEach((c) => {
        const lbl = c.text || c.target || 'неизвестно';
        clickCounts[lbl] = (clickCounts[lbl] || 0) + 1;
      });
    });
    const avgClicksPerVisit = (totalClicksNum / totalVisits).toFixed(1);

    // ── Peak hours (MSK) ──
    const hourCounts: Record<number, number> = {};
    visits.forEach(v => {
      if (!v.entered_at) return;
      const mskHour = (new Date(v.entered_at).getUTCHours() + 3) % 24;
      hourCounts[mskHour] = (hourCounts[mskHour] || 0) + 1;
    });
    const peakHours = Object.entries(hourCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([h, c]) => `  🕐 ${String(h).padStart(2, '0')}:00 — ${c} ${pluralize(c, 'визит', 'визита', 'визитов')}`)
      .join('\n');

    // ── Scroll depth ──
    const scrollBuckets = [0, 0, 0, 0];
    visits.forEach(v => {
      const s = v.max_scroll_percent || 0;
      if (s >= 75) scrollBuckets[3]++;
      else if (s >= 50) scrollBuckets[2]++;
      else if (s >= 25) scrollBuckets[1]++;
      else scrollBuckets[0]++;
    });
    const scrollDepth = [
      `  0-25%   ${scrollBar(scrollBuckets[0], totalVisits)}`,
      `  25-50%  ${scrollBar(scrollBuckets[1], totalVisits)}`,
      `  50-75%  ${scrollBar(scrollBuckets[2], totalVisits)}`,
      `  75-100% ${scrollBar(scrollBuckets[3], totalVisits)}`,
    ].join('\n');

    // ── Section funnel ──
    const funnelStr = FUNNEL_SECTIONS
      .map(id => {
        const reached = visits.filter(v => (v.sections_viewed || []).includes(id)).length;
        const pct = Math.round((reached / totalVisits) * 100);
        const name = SECTION_NAMES[id] || id;
        const bar = '▓'.repeat(Math.round(pct / 10)) + '░'.repeat(10 - Math.round(pct / 10));
        return `  ${name} ${bar} ${pct}%`;
      })
      .join('\n');

    // ── Traffic quality ──
    const refGroups: Record<string, any[]> = {};
    visits.forEach(v => {
      let ref = v.referrer || 'direct';
      if (ref !== 'direct') { try { ref = new URL(ref).hostname; } catch {} }
      if (!refGroups[ref]) refGroups[ref] = [];
      refGroups[ref].push(v);
    });
    const trafficQuality = Object.entries(refGroups)
      .sort((a, b) => b[1].length - a[1].length)
      .slice(0, 5)
      .map(([ref, vsts]) => {
        const name = ref === 'direct' ? 'Прямой заход' : ref;
        const cnt = vsts.length;
        const aTime = Math.round(vsts.reduce((s, v) => s + (v.duration_seconds || 0), 0) / cnt);
        const aScroll = Math.round(vsts.reduce((s, v) => s + (v.max_scroll_percent || 0), 0) / cnt);
        return `  • ${name} — ${cnt} ${pluralize(cnt, 'визит', 'визита', 'визитов')}, ср. ${formatTime(aTime)}, скролл ${aScroll}%`;
      })
      .join('\n');

    // ── Device breakdown ──
    const deviceGroups: Record<string, any[]> = {};
    visits.forEach(v => {
      const d = v.device || 'unknown';
      if (!deviceGroups[d]) deviceGroups[d] = [];
      deviceGroups[d].push(v);
    });
    const deviceBreakdown = Object.entries(deviceGroups)
      .sort((a, b) => b[1].length - a[1].length)
      .map(([d, vsts]) => {
        const name = DEVICE_NAMES[d] || d;
        const cnt = vsts.length;
        const aTime = Math.round(vsts.reduce((s, v) => s + (v.duration_seconds || 0), 0) / cnt);
        const aScroll = Math.round(vsts.reduce((s, v) => s + (v.max_scroll_percent || 0), 0) / cnt);
        const aClicks = (vsts.reduce((s, v) => s + getClickCount(v), 0) / cnt).toFixed(1);
        return `  ${name}: ${cnt} — ср. ${formatTime(aTime)}, скролл ${aScroll}%, клики ${aClicks}`;
      })
      .join('\n');

    // ── User journeys ──
    const journeyMap: Record<string, number> = {};
    visits.forEach(v => {
      const sections = v.sections_viewed as string[] || [];
      if (sections.length < 2) return;
      const key = sections.map(s => SECTION_SHORT[s] || s).join(' → ');
      journeyMap[key] = (journeyMap[key] || 0) + 1;
    });
    const topJourneys = Object.entries(journeyMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([path, cnt], i) => {
        const truncated = smartTruncate(path, 100);
        return `  ${i + 1}. ${truncated} (${cnt})`;
      })
      .join('\n');

    // ── Drop-off points ──
    const dropOffMap: Record<string, number> = {};
    visits.forEach(v => {
      const sections = v.sections_viewed as string[] || [];
      if (sections.length === 0) return;
      const last = sections[sections.length - 1];
      dropOffMap[last] = (dropOffMap[last] || 0) + 1;
    });
    const dropOffStr = Object.entries(dropOffMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([id, cnt]) => {
        const name = SECTION_NAMES[id] || id;
        const pct = Math.round((cnt / totalVisits) * 100);
        return `  ${name} — ${pct}% (${cnt} ${pluralize(cnt, 'чел', 'чел', 'чел')})`;
      })
      .join('\n');

    // ── Section popularity ──
    const sectionCounts: Record<string, number> = {};
    const sectionTotalTime: Record<string, number> = {};
    visits.forEach((v) => {
      (v.sections_viewed || []).forEach((s: string) => { sectionCounts[s] = (sectionCounts[s] || 0) + 1; });
      const st = v.sections_time as Record<string, number> || {};
      Object.entries(st).forEach(([s, t]) => { sectionTotalTime[s] = (sectionTotalTime[s] || 0) + (t as number); });
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

    // ── Top clicks ──
    const topClicks = Object.entries(clickCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([text, count]) => `  • «${smartTruncate(text, 80)}» — ${count} ${pluralize(count, 'раз', 'раза', 'раз')}`)
      .join('\n');

    // ── Insights ──
    const insights: string[] = [];
    const topSectionEntry = Object.entries(sectionTotalTime).sort((a, b) => b[1] - a[1])[0];
    if (topSectionEntry) {
      const name = (SECTION_NAMES[topSectionEntry[0]] || topSectionEntry[0]).replace(/^[^\s]+ /, '');
      insights.push(`больше всего времени в «${name}»`);
    }
    if (bounceRate > 50) insights.push(`⚠️ высокий bounce rate (${bounceRate}%)`);
    if (engagementRate > 40) insights.push(`🎉 отличная вовлечённость (${engagementRate}%)`);

    // Mobile vs desktop comparison
    const mobileVsts = deviceGroups['mobile'] || [];
    const desktopVsts = deviceGroups['desktop'] || [];
    if (mobileVsts.length > 0 && desktopVsts.length > 0) {
      const mAvg = Math.round(mobileVsts.reduce((s, v) => s + (v.duration_seconds || 0), 0) / mobileVsts.length);
      const dAvg = Math.round(desktopVsts.reduce((s, v) => s + (v.duration_seconds || 0), 0) / desktopVsts.length);
      if (dAvg > mAvg * 1.5) insights.push(`🖥 десктоп вовлечённее мобильных в ${(dAvg / mAvg).toFixed(1)}x`);
      if (mAvg > dAvg * 1.5) insights.push(`📱 мобильные вовлечённее десктопа в ${(mAvg / dAvg).toFixed(1)}x`);
    }

    // Best/worst traffic source
    const qualitySorted = Object.entries(refGroups)
      .filter(([, v]) => v.length >= 2)
      .map(([ref, vsts]) => ({
        ref: ref === 'direct' ? 'Прямой заход' : ref,
        score: vsts.reduce((s, v) => s + (v.duration_seconds || 0), 0) / vsts.length,
      }))
      .sort((a, b) => b.score - a.score);
    if (qualitySorted.length >= 2) {
      insights.push(`лучший трафик: ${qualitySorted[0].ref}`);
    }

    // Peak hour recommendation
    const topHourEntry = Object.entries(hourCounts).sort((a, b) => b[1] - a[1])[0];
    if (topHourEntry) {
      insights.push(`📣 лучшее время для рекламы: ${String(topHourEntry[0]).padStart(2, '0')}:00 МСК`);
    }

    const contactsReached = visits.filter(v => (v.sections_viewed || []).includes('contacts')).length;
    const contactsPct = Math.round((contactsReached / totalVisits) * 100);
    if (contactsPct < 20) insights.push(`⚠️ только ${contactsPct}% доходят до контактов`);

    // ── Build message ──
    const message = `${title}
📅 ${label}

━━━━━━━━━━━━━━━━━━━━━━━
👥 *ПОСЕТИТЕЛИ*
━━━━━━━━━━━━━━━━━━━━━━━

📈 *Всего:* ${totalVisits} ${pluralize(totalVisits, 'посетитель', 'посетителя', 'посетителей')}${changeIndicator(totalVisits, prevTotal)}
⏱ *Среднее время:* ${formatTime(avgDuration)}${changeIndicator(avgDuration, prevAvgDuration)}
📜 *Средний скролл:* ${avgScroll}%${changeIndicator(avgScroll, prevAvgScroll)}
🖱 *Кликов:* ${totalClicksNum} (ср. ${avgClicksPerVisit}/визит)

🚪 *Bounce rate:* ${bounceRate}% (< 15 сек)
🔥 *Вовлечённость:* ${engagementRate}% (> 60 сек + > 50% скролл)

━━━━━━━━━━━━━━━━━━━━━━━
🕐 *ПИКОВЫЕ ЧАСЫ (МСК)*
━━━━━━━━━━━━━━━━━━━━━━━

${peakHours || '  нет данных'}

━━━━━━━━━━━━━━━━━━━━━━━
📏 *ГЛУБИНА ПРОСМОТРА*
━━━━━━━━━━━━━━━━━━━━━━━

${scrollDepth}

━━━━━━━━━━━━━━━━━━━━━━━
🔄 *ВОРОНКА СЕКЦИЙ*
━━━━━━━━━━━━━━━━━━━━━━━

${funnelStr}

━━━━━━━━━━━━━━━━━━━━━━━
🔗 *КАЧЕСТВО ТРАФИКА*
━━━━━━━━━━━━━━━━━━━━━━━

${trafficQuality || '  нет данных'}

━━━━━━━━━━━━━━━━━━━━━━━
📱 *УСТРОЙСТВА*
━━━━━━━━━━━━━━━━━━━━━━━

${deviceBreakdown || '  нет данных'}

━━━━━━━━━━━━━━━━━━━━━━━
🗺 *ПУТЬ ПОЛЬЗОВАТЕЛЯ*
━━━━━━━━━━━━━━━━━━━━━━━

${topJourneys || '  нет данных'}

━━━━━━━━━━━━━━━━━━━━━━━
🚪 *ТОЧКА ПОТЕРИ*
━━━━━━━━━━━━━━━━━━━━━━━

${dropOffStr || '  нет данных'}

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

    return jsonResp({ success: true, visits: totalVisits, period });
  } catch (error: unknown) {
    console.error('Error:', error);
    const msg = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ success: false, error: msg }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});

function jsonResp(data: any) {
  return new Response(JSON.stringify(data), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
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
