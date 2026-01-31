import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Code2, Link, GraduationCap, Settings } from 'lucide-react';
import FloatingElement from './FloatingElement';

const steps = [
  {
    icon: Search,
    title: 'Анализ и проектирование',
    description: 'Проводим аудит ваших текущих процессов, выявляя ключевые точки взаимодействия. На основе анализа проектируем логику ИИ-агента для максимальной эффективности.',
    stat: 'до 30%',
    statLabel: 'экономия времени',
  },
  {
    icon: Code2,
    title: 'Разработка и настройка',
    description: 'Создаём ИИ-агента на базе современных моделей, интегрируя вашу базу знаний и бизнес-правила. Настраиваем персонализацию под специфику отрасли.',
    stat: '24/7',
    statLabel: 'автономная работа',
  },
  {
    icon: Link,
    title: 'Интеграция с системами',
    description: 'Подключаем агента к вашим CRM, мессенджерам, API и базам данных. Тестируем на безопасность и нагрузку.',
    stat: '100%',
    statLabel: 'автоматизация',
  },
  {
    icon: GraduationCap,
    title: 'Обучение и адаптация',
    description: 'Обучаем агента на ваших реальных диалогах и данных. Адаптируем стиль общения под бренд с A/B-тестами.',
    stat: '+25%',
    statLabel: 'эффективность',
  },
  {
    icon: Settings,
    title: 'Поддержка и оптимизация',
    description: 'Мониторим метрики работы агента, внося обновления на основе аналитики. Оптимизируем для роста ROI.',
    stat: '∞',
    statLabel: 'развитие',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="about" ref={containerRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      
      <div className="relative z-10 section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            Полный цикл: от создания до внедрения
          </h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Мы предлагаем полный цикл услуг по созданию, обучению и внедрению ИИ-агентов,
            которые упростят ваш бизнес и сделают его эффективнее. Снижение нагрузки на команду
            до 50%, рост производительности и экономию времени.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Animated connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/30 hidden lg:block">
            <motion.div 
              className="w-full bg-gradient-to-b from-primary via-accent to-primary"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, rotateY: index % 2 === 0 ? -10 : 10 }}
                animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <FloatingElement intensity={5} rotationIntensity={2}>
                  <div className={`glass-card-hover p-8 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16 lg:col-start-2'}`}>
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="icon-glow shrink-0"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <step.icon size={24} className="text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {step.description}
                        </p>
                        <div className="flex items-baseline gap-2">
                          <motion.span 
                            className="text-3xl font-bold text-gradient"
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : {}}
                            transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                          >
                            {step.stat}
                          </motion.span>
                          <span className="text-sm text-muted-foreground">{step.statLabel}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </FloatingElement>

                {/* Step number - visible on desktop */}
                <div className={`hidden lg:flex items-center justify-center ${
                  index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'
                }`}>
                  <motion.div 
                    className="relative"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                  >
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                    <motion.div 
                      className="relative w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center text-2xl font-bold text-primary"
                      whileHover={{ scale: 1.2, borderWidth: 4 }}
                    >
                      {index + 1}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
