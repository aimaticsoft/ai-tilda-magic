import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MessageSquare, Sparkles } from 'lucide-react';
import { useMousePosition } from '@/hooks/useMousePosition';

const demos = [
  {
    title: 'Продавец красок',
    description: 'Получите профессиональные рекомендации по выбору красок для любых поверхностей.',
    link: 'https://t.me/colorshopkraski_bot',
    emoji: '🎨',
  },
  {
    title: 'Менеджер автосервиса',
    description: 'ИИ-агент быстро оформит запись на диагностику или ремонт.',
    link: 'https://t.me/FitServiceAI_bot',
    emoji: '🚗',
  },
  {
    title: 'Продавец цветов',
    description: 'Поможет выбрать идеальный букет для любого повода.',
    link: 'https://t.me/FlowerBloomAI_bot',
    emoji: '💐',
  },
  {
    title: 'Продавец Apple техники',
    description: 'Экспертные рекомендации по подбору Apple-устройств.',
    link: 'https://t.me/AppleGadget1_bot',
    emoji: '📱',
  },
  {
    title: 'Администратор фитнес клуба',
    description: 'Подберите абонемент и запишитесь на бесплатное пробное занятие.',
    link: 'https://t.me/XfitAi_bot',
    emoji: '💪',
  },
  {
    title: 'Администратор салона красоты',
    description: 'Запишитесь на процедуру к подходящему мастеру.',
    link: 'https://t.me/BeautyGlow777_bot',
    emoji: '💇',
  },
  {
    title: 'Продавец автохимии',
    description: 'Подбор автохимии и аксессуаров под вашу модель автомобиля.',
    link: 'https://t.me/ShineSystems_bot',
    emoji: '✨',
  },
  {
    title: 'Менеджер клининга',
    description: 'Закажите профессиональную уборку за 60 секунд.',
    link: 'https://t.me/CleaningNSK_bot',
    emoji: '🧹',
  },
  {
    title: 'Менеджер IT услуг',
    description: 'Консультация по IT-решениям и автоматизации бизнеса.',
    link: 'https://t.me/AimaticSoft_bot',
    emoji: '💻',
  },
];

const DemoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { x, y } = useMousePosition();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="demo" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <motion.div 
        className="absolute w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px] pointer-events-none"
        animate={{
          x: x - 300,
          y: y - 300,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 50 }}
        style={{ position: 'fixed' }}
      />
      
      <div className="relative z-10 section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles size={16} className="animate-pulse" />
            <span>Попробуйте прямо сейчас</span>
          </motion.div>
          <h2 className="heading-secondary mb-4">
            Попробуйте наших <span className="text-gradient">ИИ-агентов</span> в действии
          </h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Пообщайтесь с демонстрационными ИИ-агентами и оцените их возможности в реальном времени.
            В вашем проекте мы полностью настроим под ваш бизнес.
          </p>
        </motion.div>

        {/* Demo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {demos.map((demo, index) => (
            <motion.a
              key={demo.title}
              href={demo.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="glass-card p-6 h-full border border-transparent hover:border-primary/50 transition-all duration-300 hover:glow-primary relative overflow-hidden">
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0"
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative flex items-start gap-4">
                  {/* Emoji with bounce */}
                  <motion.div 
                    className="text-4xl shrink-0"
                    animate={hoveredIndex === index ? { 
                      scale: [1, 1.3, 1],
                      rotate: [0, 10, -10, 0],
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {demo.emoji}
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                      {demo.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {demo.description}
                    </p>
                    
                    {/* CTA */}
                    <motion.div 
                      className="flex items-center gap-2 mt-3 text-primary text-sm font-medium"
                      animate={hoveredIndex === index ? { x: 5 } : { x: 0 }}
                    >
                      <MessageSquare size={16} />
                      Пообщаться
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
