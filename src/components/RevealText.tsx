import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
}

const RevealText = ({ children, className = '', delay = 0 }: RevealTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const words = children.split(' ');

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block py-[0.1em]"
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.05,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default RevealText;
