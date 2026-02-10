import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxBackground = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Different speeds for depth layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -450]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 1.3]);

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Layer 1 — slow large orbs */}
      <motion.div
        style={{ y: y3, scale: scale2 }}
        className="absolute -top-20 -left-32 w-[500px] h-[500px] rounded-full bg-primary/[0.07] blur-[100px]"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[60%] -right-40 w-[600px] h-[600px] rounded-full bg-accent/[0.06] blur-[120px]"
      />

      {/* Layer 2 — medium speed */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-[20%] right-[15%] w-72 h-72 rounded-full border border-primary/[0.08]"
      />
      <motion.div
        style={{ y: y1, rotate: rotate2 }}
        className="absolute top-[55%] left-[10%] w-48 h-48 rounded-full border border-accent/[0.08]"
      />

      {/* Layer 3 — fast small elements */}
      <motion.div
        style={{ y: y2, scale: scale1 }}
        className="absolute top-[30%] left-[20%] w-3 h-3 rounded-full bg-primary/30"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[45%] right-[25%] w-2 h-2 rounded-full bg-accent/40"
      />
      <motion.div
        style={{ y: y4 }}
        className="absolute top-[70%] left-[60%] w-2 h-2 rounded-full bg-primary/25"
      />
      <motion.div
        style={{ y: y4 }}
        className="absolute top-[15%] left-[75%] w-1.5 h-1.5 rounded-full bg-accent/30"
      />

      {/* Layer 4 — decorative gradient lines */}
      <motion.div
        style={{ y: y2, rotate: rotate1 }}
        className="absolute top-[40%] left-[5%] w-40 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
      />
      <motion.div
        style={{ y: y4, rotate: rotate2 }}
        className="absolute top-[75%] right-[10%] w-56 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent"
      />

      {/* Animated grid overlay — slow parallax */}
      <motion.div
        style={{ y: y3 }}
        className="absolute inset-0 animated-grid opacity-40"
      />
    </div>
  );
};

export default ParallaxBackground;
