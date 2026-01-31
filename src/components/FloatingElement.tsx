import { motion } from 'framer-motion';
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

  return (
    <motion.div
      className={className}
      animate={{
        x: normalizedX * intensity,
        y: normalizedY * intensity,
        rotateX: normalizedY * -rotationIntensity,
        rotateY: normalizedX * rotationIntensity,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
      }}
      style={{ perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
