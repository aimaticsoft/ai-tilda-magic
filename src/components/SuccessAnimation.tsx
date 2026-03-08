import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotation: number;
}

const colors = [
  "hsl(217, 91%, 60%)",
  "hsl(190, 95%, 50%)",
  "hsl(270, 91%, 65%)",
  "hsl(45, 100%, 60%)",
  "hsl(140, 70%, 50%)",
];

const SuccessAnimation = ({ show, onComplete }: { show: boolean; onComplete: () => void }) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const { lang } = useLanguage();

  useEffect(() => {
    if (show) {
      const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 300,
        y: (Math.random() - 0.5) * 300 - 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        rotation: Math.random() * 720 - 360,
      }));
      setParticles(newParticles);

      const timer = setTimeout(() => {
        onComplete();
        setParticles([]);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [show, onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/60 backdrop-blur-sm"
        >
          {/* Confetti */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ x: 0, y: 0, scale: 0, rotate: 0, opacity: 1 }}
              animate={{
                x: p.x,
                y: p.y,
                scale: [0, 1.5, 1],
                rotate: p.rotation,
                opacity: [1, 1, 0],
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute rounded-sm"
              style={{
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
              }}
            />
          ))}

          {/* Content */}
          <div className="flex flex-col items-center text-center gap-5">
            {/* Checkmark */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center"
            >
              <motion.div
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <Check size={48} className="text-primary" strokeWidth={3} />
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
              className="space-y-2"
            >
              <h3 className="text-2xl font-bold text-foreground">
                {t(translations.contacts.successTitle, lang)}
              </h3>
              <p className="text-muted-foreground text-lg max-w-sm">
                {t(translations.contacts.successMessage, lang)}
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessAnimation;
