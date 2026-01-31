import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MessageSquare, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import AgentAvatar, { type AgentAvatarVariant } from '@/components/agents/AgentAvatar';

interface DemoItem {
  title: string;
  description: string;
  link: string;
  gradient: string;
  avatar: AgentAvatarVariant;
}

const demos: DemoItem[] = [
  {
    title: 'Продавец красок',
    description: 'Получите профессиональные рекомендации по выбору красок для любых поверхностей.',
    link: 'https://t.me/colorshopkraski_bot',
    gradient: 'from-orange-500 to-red-500',
    avatar: 'paint_seller',
  },
  {
    title: 'Менеджер автосервиса',
    description: 'ИИ-агент быстро оформит запись на диагностику или ремонт.',
    link: 'https://t.me/FitServiceAI_bot',
    gradient: 'from-blue-500 to-cyan-500',
    avatar: 'autoservice_manager',
  },
  {
    title: 'Продавец цветов',
    description: 'Поможет выбрать идеальный букет для любого повода.',
    link: 'https://t.me/FlowerBloomAI_bot',
    gradient: 'from-pink-500 to-rose-500',
    avatar: 'flowers_seller',
  },
  {
    title: 'Продавец Apple техники',
    description: 'Экспертные рекомендации по подбору Apple-устройств.',
    link: 'https://t.me/AppleGadget1_bot',
    gradient: 'from-gray-600 to-gray-800',
    avatar: 'apple_seller',
  },
  {
    title: 'Администратор фитнес клуба',
    description: 'Подберите абонемент и запишитесь на бесплатное пробное занятие.',
    link: 'https://t.me/XfitAi_bot',
    gradient: 'from-green-500 to-emerald-500',
    avatar: 'fitness_admin',
  },
  {
    title: 'Администратор салона красоты',
    description: 'Запишитесь на процедуру к подходящему мастеру.',
    link: 'https://t.me/BeautyGlow777_bot',
    gradient: 'from-purple-500 to-violet-500',
    avatar: 'beauty_admin',
  },
  {
    title: 'Продавец автохимии',
    description: 'Подбор автохимии и аксессуаров под вашу модель автомобиля.',
    link: 'https://t.me/ShineSystems_bot',
    gradient: 'from-yellow-500 to-orange-500',
    avatar: 'autochem_seller',
  },
  {
    title: 'Менеджер клининга',
    description: 'Закажите профессиональную уборку за 60 секунд.',
    link: 'https://t.me/CleaningNSK_bot',
    gradient: 'from-teal-500 to-cyan-500',
    avatar: 'cleaning_manager',
  },
  {
    title: 'Менеджер IT услуг',
    description: 'Консультация по IT-решениям и автоматизации бизнеса.',
    link: 'https://t.me/AimaticSoft_bot',
    gradient: 'from-indigo-500 to-blue-500',
    avatar: 'it_manager',
  },
];

const DemoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
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
    <section id="demo" className="relative py-24">
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

        {/* Carousel wrapper (internal padding prevents hover/glow clipping) */}
        <div className="px-4 -mx-4">
          <div className="overflow-hidden py-8 -my-8">
            <motion.div
              className="flex"
              animate={{ x: `${getOffset()}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {duplicatedDemos.map((demo, index) => {
                return (
                  <div
                    key={`${demo.title}-${index}`}
                    className="flex-shrink-0 px-2"
                    style={{ width: `${itemWidth}%` }}
                  >
                    <motion.a
                      href={demo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Glow effect */}
                      <motion.div
                        className={`absolute -inset-3 bg-gradient-to-br ${demo.gradient} rounded-2xl blur-xl`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredIndex === index ? 0.3 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <div className="relative glass-card p-6 h-full border border-transparent hover:border-primary/50 transition-all duration-300 group">
                        <div className="flex items-start gap-4">
                          {/* AI Agent Avatar */}
                          <AgentAvatar 
                            gradient={demo.gradient} 
                            isHovered={hoveredIndex === index}
                             variant={demo.avatar}
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
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-4">
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
