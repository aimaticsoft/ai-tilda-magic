import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactFormData {
  name: string;
  phone: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const TELEGRAM_BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN');
    const TELEGRAM_CHAT_ID = Deno.env.get('TELEGRAM_CHAT_ID');

    if (!TELEGRAM_BOT_TOKEN) {
      console.error('TELEGRAM_BOT_TOKEN is not configured');
      throw new Error('TELEGRAM_BOT_TOKEN is not configured');
    }

    if (!TELEGRAM_CHAT_ID) {
      console.error('TELEGRAM_CHAT_ID is not configured');
      throw new Error('TELEGRAM_CHAT_ID is not configured');
    }

    const { name, phone, message }: ContactFormData = await req.json();

    // Validate inputs
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      throw new Error('Invalid name provided');
    }
    if (!phone || typeof phone !== 'string' || phone.trim().length === 0) {
      throw new Error('Invalid phone provided');
    }

    // Sanitize and limit input lengths
    const sanitizedName = name.trim().slice(0, 100);
    const sanitizedPhone = phone.trim().slice(0, 30);
    const sanitizedMessage = (message || '').trim().slice(0, 1000);

    const telegramMessage = `🔔 *Новая заявка с сайта!*

👤 *Имя:* ${sanitizedName}
📱 *Телефон:* ${sanitizedPhone}
${sanitizedMessage ? `💬 *Сообщение:* ${sanitizedMessage}` : ''}

📅 *Дата:* ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}`;

    console.log('Sending Telegram notification...');

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
      JSON.stringify({ success: true, message: 'Notification sent successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error: unknown) {
    console.error('Error sending Telegram notification:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
