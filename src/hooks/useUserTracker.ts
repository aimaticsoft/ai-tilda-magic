import { useEffect, useRef, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface ClickEntry {
  target: string;
  text: string;
  timestamp: number;
}

export interface TrackerData {
  sessionId: string;
  durationSeconds: number;
  maxScrollPercent: number;
  sectionsViewed: string[];
  sectionsTime: Record<string, number>;
  clicks: ClickEntry[];
  device: string;
  referrer: string;
}

const SESSION_ID = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

const SECTION_IDS = [
  'about', 'products', 'services', 'cases', 'calculator',
  'demo', 'advantages', 'reviews', 'faq', 'contacts',
  'target-audience', 'how-we-work', 'trust-badges',
  'industry-solutions', 'comparison',
];

const getDevice = () => {
  const w = window.innerWidth;
  if (w < 768) return 'mobile';
  if (w < 1024) return 'tablet';
  return 'desktop';
};

export const useUserTracker = () => {
  const startTime = useRef(Date.now());
  const sectionsTime = useRef<Record<string, number>>({});
  const sectionsVisible = useRef<Record<string, number>>({});
  const sectionsViewed = useRef<Set<string>>(new Set());
  const clicks = useRef<ClickEntry[]>([]);
  const maxScroll = useRef(0);
  const savedRef = useRef(false);
  const observedIds = useRef<Set<string>>(new Set());
  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

  const getTrackerData = useCallback((): TrackerData => {
    const now = Date.now();
    for (const [id, visibleSince] of Object.entries(sectionsVisible.current)) {
      sectionsTime.current[id] = (sectionsTime.current[id] || 0) + (now - visibleSince);
      sectionsVisible.current[id] = now;
    }

    const timeInSeconds: Record<string, number> = {};
    for (const [id, ms] of Object.entries(sectionsTime.current)) {
      timeInSeconds[id] = Math.round(ms / 1000);
    }

    return {
      sessionId: SESSION_ID,
      durationSeconds: Math.floor((now - startTime.current) / 1000),
      maxScrollPercent: maxScroll.current,
      sectionsViewed: Array.from(sectionsViewed.current),
      sectionsTime: timeInSeconds,
      clicks: clicks.current.slice(-50),
      device: getDevice(),
      referrer: document.referrer || 'direct',
    };
  }, []);

  const saveVisit = useCallback(async () => {
    if (savedRef.current) return;
    savedRef.current = true;

    const data = getTrackerData();
    try {
      await supabase.from('site_visits').upsert(
        {
          session_id: data.sessionId,
          duration_seconds: data.durationSeconds,
          max_scroll_percent: data.maxScrollPercent,
          sections_viewed: data.sectionsViewed,
          sections_time: data.sectionsTime,
          clicks: data.clicks as any,
          device: data.device,
          referrer: data.referrer,
          user_agent: navigator.userAgent,
        },
        { onConflict: 'session_id' }
      );
    } catch (e) {
      console.error('Failed to save visit:', e);
    }
    setTimeout(() => { savedRef.current = false; }, 5000);
  }, [getTrackerData]);

  useEffect(() => {
    // IntersectionObserver for section visibility
    const io = new IntersectionObserver(
      (entries) => {
        const now = Date.now();
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (!id) return;
          if (entry.isIntersecting) {
            sectionsViewed.current.add(id);
            sectionsVisible.current[id] = now;
          } else if (sectionsVisible.current[id]) {
            sectionsTime.current[id] = (sectionsTime.current[id] || 0) + (now - sectionsVisible.current[id]);
            delete sectionsVisible.current[id];
          }
        });
      },
      { threshold: 0.3 }
    );
    intersectionObserverRef.current = io;

    // Try to observe a section by ID
    const tryObserve = (id: string) => {
      if (observedIds.current.has(id)) return;
      const el = document.getElementById(id);
      if (el) {
        io.observe(el);
        observedIds.current.add(id);
      }
    };

    // Initial scan
    SECTION_IDS.forEach(tryObserve);

    // MutationObserver to catch lazy-loaded sections
    const mo = new MutationObserver(() => {
      SECTION_IDS.forEach(tryObserve);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // Retry after delays for extra safety
    const retryTimers = [1000, 3000, 6000].map(ms =>
      setTimeout(() => SECTION_IDS.forEach(tryObserve), ms)
    );

    // Scroll tracking
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const percent = Math.round((window.scrollY / scrollHeight) * 100);
        if (percent > maxScroll.current) maxScroll.current = percent;
      }
    };

    // Click tracking with smart text extraction
    const smartTruncate = (str: string, max: number): string => {
      if (str.length <= max) return str;
      const truncated = str.slice(0, max);
      const lastSpace = truncated.lastIndexOf(' ');
      return (lastSpace > max * 0.5 ? truncated.slice(0, lastSpace) : truncated) + '…';
    };

    const getClickText = (el: Element): string => {
      // Try textContent first
      let text = (el.textContent || '').replace(/\s+/g, ' ').trim();
      if (text.length > 3) return smartTruncate(text, 100);

      // Fallback: aria-label, title, alt
      const ariaLabel = el.getAttribute('aria-label');
      if (ariaLabel) return smartTruncate(ariaLabel, 100);

      const title = el.getAttribute('title');
      if (title) return smartTruncate(title, 100);

      // For links, show hostname
      const href = el.getAttribute('href');
      if (href) {
        try {
          const url = new URL(href, window.location.origin);
          if (url.hostname !== window.location.hostname) return url.hostname;
          return url.pathname;
        } catch {
          return href.slice(0, 60);
        }
      }

      // Last resort: tag + class
      const tag = el.tagName.toLowerCase();
      const cls = el.className ? `.${String(el.className).split(' ')[0]}` : '';
      return `${tag}${cls}`;
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest('button, a, [role="button"]');
      if (button) {
        const text = getClickText(button);
        const tag = button.tagName.toLowerCase();
        const href = button.getAttribute('href') || '';
        let targetLabel = tag;
        if (href) {
          try {
            const url = new URL(href, window.location.origin);
            targetLabel = url.hostname !== window.location.hostname ? `${tag}[${url.hostname}]` : `${tag}[${url.pathname}]`;
          } catch {
            targetLabel = `${tag}[${href.slice(0, 50)}]`;
          }
        }
        clicks.current.push({
          target: targetLabel,
          text,
          timestamp: Math.floor((Date.now() - startTime.current) / 1000),
        });
      }
    };

    const interval = setInterval(() => saveVisit(), 30000);
    const handleUnload = () => saveVisit();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });
    window.addEventListener('beforeunload', handleUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('beforeunload', handleUnload);
      clearInterval(interval);
      retryTimers.forEach(clearTimeout);
      io.disconnect();
      mo.disconnect();
    };
  }, [saveVisit]);

  return { getTrackerData };
};
