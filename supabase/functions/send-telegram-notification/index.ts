import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ClickEntry {
  target: string;
  text: string;
  timestamp: number;
}

interface TrackerData {
  sessionId: string;
  durationSeconds: number;
  maxScrollPercent: number;
  sectionsViewed: string[];
  sectionsTime: Record<string, number>;
  clicks: ClickEntry[];
  device: string;
  referrer: string;
}

interface ContactFormData {
  name: string;
  phone: string;
  message: string;
  tracker?: TrackerData;
}

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

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (mins > 0) return `${mins} мин ${secs} сек`;
  return `${secs} сек`;
}

function pluralize(n: number, one: string, few: string, many: string): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 19) return many;
  if (mod10 === 1) return one;
  if (mod10 >= 2 && mod10 <= 4) return few;
  return many;
}

function buildTrackerBlock(tracker: TrackerData): string {
  const lines: string[] = [];

  lines.push('');
  lines.push('━━━━━━━━━━━━━━━━━━━━━━━');
  lines.push('📈 *АНАЛИТИКА ПОЛЬЗОВАТЕЛЯ*');
  lines.push('━━━━━━━━━━━━━━━━━━━━━━━');
  lines.push('');

  // Basic stats
  lines.push(`⏱ *Время на сайте:* ${formatTime(tracker.durationSeconds)}`);
  lines.push(`📜 *Глубина скролла:* ${tracker.maxScrollPercent}%`);
  lines.push(`${DEVICE_NAMES[tracker.device] || '📱 ' + tracker.device}`);

  const referrer = tracker.referrer || 'direct';
  if (referrer === 'direct') {
    lines.push('🔗 *Источник:* прямой заход');
  } else {
    try {
      const host = new URL(referrer).hostname;
      lines.push(`🔗 *Источник:* ${host}`);
    } catch {
      lines.push(`🔗 *Источник:* ${referrer}`);
    }
  }

  // Sections sorted by time
  if (tracker.sectionsTime && Object.keys(tracker.sectionsTime).length > 0) {
    const sorted = Object.entries(tracker.sectionsTime)
      .filter(([_, sec]) => sec > 0)
      .sort((a, b) => b[1] - a[1]);

    if (sorted.length > 0) {
      const total = sorted.length;
      lines.push('');
      lines.push(`📊 *Просмотренные секции (${total}):*`);
      sorted.forEach(([id, sec], i) => {
        const name = SECTION_NAMES[id] || id;
        const star = i === 0 ? ' ⭐' : '';
        lines.push(`  ${i + 1}. ${name} — ${formatTime(sec)}${star}`);
      });
    }
  } else if (tracker.sectionsViewed && tracker.sectionsViewed.length > 0) {
    lines.push('');
    lines.push(`📊 *Просмотренные секции (${tracker.sectionsViewed.length}):*`);
    tracker.sectionsViewed.forEach((id, i) => {
      const name = SECTION_NAMES[id] || id;
      lines.push(`  ${i + 1}. ${name}`);
    });
  }

  // Clicks grouped and counted
  if (tracker.clicks && tracker.clicks.length > 0) {
    const clickCounts: Record<string, number> = {};
    tracker.clicks.forEach((c) => {
      const label = c.text || c.target || 'неизвестно';
      clickCounts[label] = (clickCounts[label] || 0) + 1;
    });

    const sortedClicks = Object.entries(clickCounts).sort((a, b) => b[1] - a[1]);
    const totalClicks = tracker.clicks.length;

    lines.push('');
    lines.push(`🖱 *Клики (${totalClicks}):*`);
    sortedClicks.slice(0, 8).forEach(([text, count]) => {
      const countStr = count > 1 ? ` — ${count} ${pluralize(count, 'раз', 'раза', 'раз')}` : '';
      lines.push(`  • «${text.slice(0, 40)}»${countStr}`);
    });
  }

  // Auto-summary
  const insights: string[] = [];
  if (tracker.sectionsTime) {
    const sorted = Object.entries(tracker.sectionsTime).sort((a, b) => b[1] - a[1]);
    if (sorted.length > 0) {
      const topId = sorted[0][0];
      const topName = (SECTION_NAMES[topId] || topId).replace(/^[^\s]+ /, '');
      insights.push(`интересуется разделом «${topName}»`);
    }
  }
  if (tracker.durationSeconds > 180) {
    insights.push('провёл более 3 минут');
  }
  if (tracker.maxScrollPercent > 80) {
    insights.push('просмотрел почти всю страницу');
  }
  if (tracker.clicks && tracker.clicks.length > 5) {
    insights.push('активно кликал');
  }

  if (insights.length > 0) {
    lines.push('');
    lines.push(`💡 *Вывод:* ${insights.join(', ')}`);
  }

  return lines.join('\n');
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const TELEGRAM_BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN');
    const TELEGRAM_CHAT_ID = Deno.env.get('TELEGRAM_CHAT_ID');

    if (!TELEGRAM_BOT_TOKEN) throw new Error('TELEGRAM_BOT_TOKEN is not configured');
    if (!TELEGRAM_CHAT_ID) throw new Error('TELEGRAM_CHAT_ID is not configured');

    const { name, phone, message, tracker }: ContactFormData = await req.json();

    if (!name || typeof name !== 'string' || name.trim().length === 0) throw new Error('Invalid name');
    if (!phone || typeof phone !== 'string' || phone.trim().length === 0) throw new Error('Invalid phone');
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 10 || phoneDigits.length > 15) throw new Error('Invalid phone length');

    const sanitizedName = name.trim().slice(0, 100);
    const sanitizedPhone = phone.trim().slice(0, 30);
    const sanitizedMessage = (message || '').trim().slice(0, 1000);

    const trackerBlock = tracker ? buildTrackerBlock(tracker) : '';

    const dateStr = new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' });

    const telegramMessage = `🔔 *Новая заявка с сайта!*

👤 *Имя:* ${sanitizedName}
📱 *Телефон:* ${sanitizedPhone}
${sanitizedMessage ? `💬 *Сообщение:* ${sanitizedMessage}` : ''}

📅 *Дата:* ${dateStr}${trackerBlock}`;

    console.log('Sending Telegram notification...');

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: 'Markdown',
        }),
      }
    );

    const telegramData = await telegramResponse.json();

    if (!telegramResponse.ok) {
      console.error('Telegram API error:', telegramData);
      throw new Error(`Telegram API error: ${JSON.stringify(telegramData)}`);
    }

    console.log('Telegram notification sent successfully');

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    );
  } catch (error: unknown) {
    console.error('Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
