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

CREATE POLICY "Allow anonymous inserts" ON public.site_visits
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Service role can read" ON public.site_visits
  FOR SELECT TO service_role USING (true);