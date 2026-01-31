import { motion } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';

const CursorGlow = () => {
  const { x, y } = useMousePosition();

  return (
    <>
      {/* Main glow */}
      <motion.div
        className="pointer-events-none fixed z-[100] w-[600px] h-[600px] rounded-full"
        animate={{
          x: x - 300,
          y: y - 300,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
        style={{
          background: 'radial-gradient(circle, hsla(var(--primary) / 0.15) 0%, transparent 70%)',
        }}
      />
      
      {/* Secondary smaller glow */}
      <motion.div
        className="pointer-events-none fixed z-[100] w-[200px] h-[200px] rounded-full"
        animate={{
          x: x - 100,
          y: y - 100,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.3,
        }}
        style={{
          background: 'radial-gradient(circle, hsla(var(--accent) / 0.2) 0%, transparent 70%)',
        }}
      />
    </>
  );
};

export default CursorGlow;
