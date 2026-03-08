-- Allow anonymous updates for upsert to work
CREATE POLICY "Allow anonymous updates" ON public.site_visits
FOR UPDATE TO anon
USING (true)
WITH CHECK (true);

-- Enable pg_cron and pg_net for scheduled functions
CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA pg_catalog;
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;