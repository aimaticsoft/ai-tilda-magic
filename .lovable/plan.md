

## Аналитика пользователей в Telegram

### Что сделаем

Две функциональности:
1. **При заявке** — вместе с формой отправлять данные о поведении пользователя на сайте
2. **Ежедневный отчёт** — в 8:00 МСК отправлять сводку за прошедший день

### Архитектура

#### 1. Клиентский трекер поведения

Создадим `src/hooks/useUserTracker.ts` — хук, который собирает данные о сессии пользователя:
- Время входа на сайт и общее время на сайте
- Какие секции были видны (через IntersectionObserver)
- На какие кнопки/ссылки кликали
- Скролл — до какой глубины страницы дошёл
- Какие секции смотрел дольше всего

Данные хранятся в памяти (без БД) и передаются при отправке формы.

#### 2. Таблица `site_visits` в БД

Для ежедневной статистики нужно сохранять данные каждого визита:

```sql
CREATE TABLE public.site_visits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  entered_at timestamptz DEFAULT now(),
  duration_seconds integer DEFAULT 0,
  max_scroll_percent integer DEFAULT 0,
  sections_viewed text[] DEFAULT '{}',
  sections_time jsonb DEFAULT '{}',
  clicks jsonb DEFAULT '[]',
  device text,
  referrer text,
  user_agent text
);

ALTER TABLE public.site_visits ENABLE ROW LEVEL SECURITY;

-- Публичная вставка (анонимные пользователи)
CREATE POLICY "Allow anonymous inserts" ON public.site_visits
  FOR INSERT TO anon WITH CHECK (true);

-- Только сервис может читать
CREATE POLICY "Service role can read" ON public.site_visits
  FOR SELECT TO service_role USING (true);
```

#### 3. Сохранение визитов

При уходе со страницы (`beforeunload`) или каждые 30 секунд отправлять данные сессии в `site_visits` через `supabase.from('site_visits').insert(...)`.

#### 4. Обновление `send-telegram-notification`

При отправке формы передавать собранные данные трекера. В Telegram-сообщении добавятся поля:

```
⏱ Время на сайте: 3 мин 42 сек
📊 Просмотренные секции: О нас, Услуги, Кейсы, Контакты
🔥 Больше всего времени: Кейсы (1 мин 20 сек)
📜 Глубина скролла: 85%
🖱 Клики: «Получить консультацию» (2), «Калькулятор» (1)
```

#### 5. Edge-функция `send-daily-stats`

Новая функция, которая:
- Читает `site_visits` за вчера (по `entered_at`)
- Считает: кол-во визитов, среднее время, популярные секции, топ кликов, средний скролл
- Формирует красивое Telegram-сообщение и отправляет

#### 6. Cron-задача для ежедневной отправки

Через `pg_cron` + `pg_net` запускать `send-daily-stats` каждый день в 05:00 UTC (= 08:00 МСК):

```sql
SELECT cron.schedule(
  'daily-stats-report',
  '0 5 * * *',
  $$ SELECT net.http_post(...) $$
);
```

### Файлы

| Файл | Действие |
|------|----------|
| `src/hooks/useUserTracker.ts` | Новый — трекер поведения |
| `src/pages/Index.tsx` | Подключить трекер |
| `src/components/ContactsSection.tsx` | Передавать данные трекера при отправке формы |
| `supabase/functions/send-telegram-notification/index.ts` | Добавить вывод поведенческих данных |
| `supabase/functions/send-daily-stats/index.ts` | Новая — ежедневный отчёт |
| `supabase/config.toml` | Зарегистрировать `send-daily-stats` |
| DB migration | Таблица `site_visits` + RLS |
| DB insert (pg_cron) | Cron-задача на 08:00 МСК |

