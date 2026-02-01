import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Bot, Cpu, Sparkles } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import FloatingElement from "./FloatingElement";
import MagneticButton from "./MagneticButton";
import RevealText from "./RevealText";
import { useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 animated-grid" />
      <ParticlesBackground />

      {/* Gradient orbs with parallax */}
      <FloatingElement intensity={30} className="absolute top-1/4 left-1/4">
        <div className="w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
      </FloatingElement>
      <FloatingElement intensity={-20} className="absolute bottom-1/4 right-1/4">
        <div className="w-80 h-80 bg-accent/20 rounded-full blur-[128px] animate-pulse delay-1000" />
      </FloatingElement>

      {/* Content */}
      <motion.div style={{ scale, opacity }} className="relative z-10 section-container py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm mb-8"
          >
            <Sparkles size={16} className="animate-pulse" />
            <span>Полный цикл: от создания до внедрения ИИ-агентов</span>
          </motion.div>

          {/* Main heading with reveal animation */}
          <h1 className="heading-primary leading-tight mb-6">
            <RevealText delay={0.2}>Разрабатываем и внедряем</RevealText>
            <br />
            <span className="text-white">
              <RevealText delay={0.4}>умных AI-агентов</RevealText>
            </span>
            <br />
            <RevealText delay={0.6}>для автоматизации бизнеса</RevealText>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            Создаём AI-агентов, которые автоматизируют рутинные задачи, обрабатывают данные и оптимизируют процессы 24/7
            — настраиваем под любые нужды бизнеса и интегрируем в ваши системы
          </motion.p>

          {/* CTA Buttons with magnetic effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton href="https://t.me/AimaticSoft" className="btn-neon group flex items-center gap-2">
              Заказать демо
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <MagneticButton href="#demo" className="btn-neon-outline flex items-center gap-2">
              <Bot size={18} />
              Попробовать ИИ-агента
            </MagneticButton>
          </motion.div>

          {/* Floating icons with mouse interaction */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-20 flex justify-center gap-8"
          >
            <FloatingElement intensity={15} rotationIntensity={5}>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="glass-card p-4 hover:scale-110 transition-transform cursor-pointer"
              >
                <Bot size={32} className="text-primary" />
              </motion.div>
            </FloatingElement>
            <FloatingElement intensity={-10} rotationIntensity={8}>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="glass-card p-4 hover:scale-110 transition-transform cursor-pointer"
              >
                <Cpu size={32} className="text-accent" />
              </motion.div>
            </FloatingElement>
            <FloatingElement intensity={20} rotationIntensity={6}>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="glass-card p-4 hover:scale-110 transition-transform cursor-pointer"
              >
                <Sparkles size={32} className="text-primary" />
              </motion.div>
            </FloatingElement>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
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
