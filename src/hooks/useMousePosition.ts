import { useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

export const useMousePosition = () => {
  const normalizedX = useMotionValue(0);
  const normalizedY = useMotionValue(0);

  useEffect(() => {
    let rafId: number | null = null;
    let latestX = 0;
    let latestY = 0;

    const update = () => {
      normalizedX.set(latestX);
      normalizedY.set(latestY);
      rafId = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      latestX = (e.clientX / window.innerWidth - 0.5) * 2;
      latestY = (e.clientY / window.innerHeight - 0.5) * 2;
      if (rafId === null) {
        rafId = requestAnimationFrame(update);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [normalizedX, normalizedY]);

  return { normalizedX, normalizedY };
};
