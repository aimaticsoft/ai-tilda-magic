import { motion, useTransform } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';
import { ReactNode } from 'react';

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  rotationIntensity?: number;
}

const FloatingElement = ({ 
  children, 
  className = '', 
  intensity = 20,
  rotationIntensity = 10 
}: FloatingElementProps) => {
  const { normalizedX, normalizedY } = useMousePosition();

  const x = useTransform(normalizedX, (v) => v * intensity);
  const y = useTransform(normalizedY, (v) => v * intensity);
  const rotateX = useTransform(normalizedY, (v) => v * -rotationIntensity);
  const rotateY = useTransform(normalizedX, (v) => v * rotationIntensity);

  return (
    <motion.div
      className={className}
      style={{ x, y, rotateX, rotateY, perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
