import { motion, useAnimationFrame } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MessageSquare, Sparkles, Bot, ChevronLeft, ChevronRight } from 'lucide-react';

const demos = [
  {
    title: 'Продавец красок',
    description: 'Получите профессиональные рекомендации по выбору красок для любых поверхностей.',
    link: 'https://t.me/colorshopkraski_bot',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Менеджер автосервиса',
    description: 'ИИ-агент быстро оформит запись на диагностику или ремонт.',
    link: 'https://t.me/FitServiceAI_bot',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Продавец цветов',
    description: 'Поможет выбрать идеальный букет для любого повода.',
    link: 'https://t.me/FlowerBloomAI_bot',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Продавец Apple техники',
    description: 'Экспертные рекомендации по подбору Apple-устройств.',
    link: 'https://t.me/AppleGadget1_bot',
    gradient: 'from-gray-600 to-gray-800',
  },
  {
    title: 'Администратор фитнес клуба',
    description: 'Подберите абонемент и запишитесь на бесплатное пробное занятие.',
    link: 'https://t.me/XfitAi_bot',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Администратор салона красоты',
    description: 'Запишитесь на процедуру к подходящему мастеру.',
    link: 'https://t.me/BeautyGlow777_bot',
    gradient: 'from-purple-500 to-violet-500',
  },
  {
    title: 'Продавец автохимии',
    description: 'Подбор автохимии и аксессуаров под вашу модель автомобиля.',
    link: 'https://t.me/ShineSystems_bot',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Менеджер клининга',
    description: 'Закажите профессиональную уборку за 60 секунд.',
    link: 'https://t.me/CleaningNSK_bot',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    title: 'Менеджер IT услуг',
    description: 'Консультация по IT-решениям и автоматизации бизнеса.',
    link: 'https://t.me/AimaticSoft_bot',
    gradient: 'from-indigo-500 to-blue-500',
  },
];

// AI Agent Avatar component
const AgentAvatar = ({ gradient, isHovered }: { gradient: string; isHovered: boolean }) => (
  <motion.div 
    className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0 overflow-hidden`}
    animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {/* Animated rings */}
    <motion.div 
      className="absolute inset-0 border-2 border-white/20 rounded-2xl"
      animate={isHovered ? { scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] } : {}}
      transition={{ duration: 1, repeat: Infinity }}
    />
    
    {/* Bot icon */}
    <Bot size={24} className="text-white relative z-10" />
    
    {/* Animated dot - "thinking" indicator */}
    <motion.div
      className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-white/90"
      animate={isHovered ? { 
        scale: [1, 1.2, 1],
        opacity: [1, 0.7, 1],
      } : {}}
      transition={{ duration: 0.5, repeat: Infinity }}
    />
  </motion.div>
);

const DemoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Duplicate items for infinite scroll effect
  const duplicatedDemos = [...demos, ...demos, ...demos];
  const visibleCount = 3;
  const itemWidth = 100 / visibleCount;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % demos.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + demos.length) % demos.length);
  };

  // Calculate offset with infinite loop logic
  const getOffset = () => {
    return -(currentIndex + demos.length) * itemWidth;
  };

  return (
    <section id="demo" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px]" />
      
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

        {/* Navigation */}
        <div className="flex justify-end gap-2 mb-6">
          <motion.button
            onClick={prev}
            className="p-3 rounded-xl bg-card border border-border hover:border-primary transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={20} className="text-foreground" />
          </motion.button>
          <motion.button
            onClick={next}
            className="p-3 rounded-xl bg-card border border-border hover:border-primary transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={20} className="text-foreground" />
          </motion.button>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={carouselRef}>
          <motion.div
            className="flex"
            animate={{ x: `${getOffset()}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {duplicatedDemos.map((demo, index) => {
              const realIndex = index % demos.length;
              return (
                <motion.a
                  key={`${demo.title}-${index}`}
                  href={demo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 px-2"
                  style={{ width: `${itemWidth}%` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="glass-card p-6 h-full border border-transparent hover:border-primary/50 transition-all duration-300 group">
                    {/* Animated gradient background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${demo.gradient} opacity-0 rounded-xl`}
                      animate={{ opacity: hoveredIndex === index ? 0.05 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="relative flex items-start gap-4">
                      {/* AI Agent Avatar */}
                      <AgentAvatar 
                        gradient={demo.gradient} 
                        isHovered={hoveredIndex === index} 
                      />
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
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
              );
            })}
          </motion.div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {demos.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentIndex % demos.length ? 'w-8 bg-primary' : 'w-2 bg-border'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
