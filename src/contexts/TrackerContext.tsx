import { createContext, useContext, ReactNode } from 'react';
import { useUserTracker, TrackerData } from '@/hooks/useUserTracker';

interface TrackerContextType {
  getTrackerData: () => TrackerData;
}

const TrackerContext = createContext<TrackerContextType | null>(null);

export const TrackerProvider = ({ children }: { children: ReactNode }) => {
  const { getTrackerData } = useUserTracker();
  return (
    <TrackerContext.Provider value={{ getTrackerData }}>
      {children}
    </TrackerContext.Provider>
  );
};

const fallbackTracker: TrackerContextType = {
  getTrackerData: () => ({
    sessionId: '',
    duration: 0,
    maxScroll: 0,
    sectionsViewed: [],
    sectionsTime: {},
    clicks: [],
    device: 'unknown',
    referrer: '',
  }),
};

export const useTracker = () => {
  const ctx = useContext(TrackerContext);
  return ctx ?? fallbackTracker;
};
