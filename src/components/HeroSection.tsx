import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Bot, Cpu, Sparkles, Users, MessageSquare, TrendingDown } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import FloatingElement from "./FloatingElement";
import MagneticButton from "./MagneticButton";
import RevealText from "./RevealText";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const AnimatedCounter = ({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const stats = [
    { icon: Users, value: 50, suffix: "+", label: t(translations.hero.stats.clients, lang) },
    { icon: Bot, value: 150, suffix: "+", label: t(translations.hero.stats.agents, lang) },
    { icon: MessageSquare, value: 1, suffix: "M+", label: t(translations.hero.stats.messages, lang) },
    { icon: TrendingDown, value: 60, suffix: "%", label: t(translations.hero.stats.savings, lang) },
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 animated-grid" />
      <ParticlesBackground />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[80px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[80px]" />

      <motion.div style={{ scale, opacity }} className="relative z-10 section-container py-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm mb-8"
          >
            <Sparkles size={16} className="animate-pulse" />
            <span>{t(translations.hero.badge, lang)}</span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent leading-tight mb-6">
            <RevealText delay={0.2}>{t(translations.hero.heading1, lang)}</RevealText>
            <br />
            <span className="text-white">
              <RevealText delay={0.4}>{t(translations.hero.heading2, lang)}</RevealText>
            </span>
            <br />
            <RevealText delay={0.6}>{t(translations.hero.heading3, lang)}</RevealText>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-10 px-4 sm:px-0"
          >
            {t(translations.hero.subtitle, lang)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton href="https://t.me/AimaticSoft" className="btn-neon group flex items-center gap-2 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
              <span className="relative z-10 flex items-center gap-2">
                {t(translations.hero.cta1, lang)}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </MagneticButton>
            <MagneticButton href="#demo" className="btn-neon-outline flex items-center gap-2 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
              <Bot size={18} />
              {t(translations.hero.cta2, lang)}
            </MagneticButton>
          </motion.div>

          {/* Social Proof Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-card/30 border border-border/50"
              >
                <stat.icon size={20} className="text-primary" />
                <span className="text-2xl md:text-3xl font-bold text-foreground">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-xs md:text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
