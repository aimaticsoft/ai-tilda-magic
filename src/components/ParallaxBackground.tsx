import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxBackground = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Layer 1 — slow large orbs */}
      <motion.div
        style={{ y: y3 }}
        className="absolute -top-20 -left-32 w-[500px] h-[500px] rounded-full bg-primary/[0.07] blur-[80px]"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[60%] -right-40 w-[600px] h-[600px] rounded-full bg-accent/[0.06] blur-[80px]"
      />

      {/* Layer 2 — faster small dots */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[30%] left-[20%] w-3 h-3 rounded-full bg-primary/30"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[45%] right-[25%] w-2 h-2 rounded-full bg-accent/40"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[70%] left-[60%] w-2 h-2 rounded-full bg-primary/25"
      />
    </div>
  );
};

export default ParallaxBackground;
