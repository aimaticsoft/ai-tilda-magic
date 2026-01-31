import { motion } from 'framer-motion';
import { ArrowRight, Bot, Cpu, Sparkles } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 animated-grid" />
      <ParticlesBackground />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[128px] animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 section-container py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm mb-8"
          >
            <Sparkles size={16} />
            <span>Полный цикл: от создания до внедрения ИИ-агентов</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heading-primary leading-tight mb-6"
          >
            Разрабатываем и внедряем
            <br />
            <span className="text-white">умных AI-агентов</span>
            <br />
            для автоматизации бизнеса
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            Создаём адаптивных виртуальных агентов, которые автоматизируют рутинные задачи,
            обрабатывают данные и оптимизируют процессы 24/7 — настраиваем под любые нужды
            бизнеса и интегрируем в ваши системы
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://t.me/AimaticSoft"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon group flex items-center gap-2"
            >
              Заказать демо
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#demo"
              className="btn-neon-outline flex items-center gap-2"
            >
              <Bot size={18} />
              Попробовать ИИ-агента
            </a>
          </motion.div>

          {/* Floating icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 flex justify-center gap-8"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card p-4"
            >
              <Bot size={32} className="text-primary" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="glass-card p-4"
            >
              <Cpu size={32} className="text-accent" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="glass-card p-4"
            >
              <Sparkles size={32} className="text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>

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
