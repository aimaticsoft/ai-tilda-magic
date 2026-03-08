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

export const useTracker = () => {
  const ctx = useContext(TrackerContext);
  if (!ctx) throw new Error('useTracker must be used within TrackerProvider');
  return ctx;
};
