import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

const DISCOUNT_DURATION = 3 * 60 * 60; // 3 hours in seconds

const DiscountTimer = () => {
  const [secondsLeft, setSecondsLeft] = useState(DISCOUNT_DURATION);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : DISCOUNT_DURATION));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/30"
      animate={{ scale: [1, 1.02, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <Flame size={18} className="text-destructive" />
      <span className="text-sm text-foreground">
        Скидка 10% при заказе:
      </span>
      <span className="font-mono font-bold text-destructive">
        {pad(hours)}:{pad(minutes)}:{pad(seconds)}
      </span>
    </motion.div>
  );
};

export default DiscountTimer;
