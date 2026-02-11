import { motion, useInView } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { MessageSquare, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import AgentAvatar, { type AgentAvatarVariant } from '@/components/agents/AgentAvatar';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations, t } from '@/i18n/translations';

const demoLinks = [
  'https://t.me/colorshopkraski_bot',
  'https://t.me/FitServiceAI_bot',
  'https://t.me/FlowerBloomAI_bot',
  'https://t.me/AppleGadget1_bot',
  'https://t.me/XfitAi_bot',
  'https://t.me/BeautyGlow777_bot',
  'https://t.me/ShineSystems_bot',
  'https://t.me/CleaningNSK_bot',
  'https://t.me/AimaticSoft_bot',
];

const demoGradients = [
  'from-orange-500 to-red-500',
  'from-blue-500 to-cyan-500',
  'from-pink-500 to-rose-500',
  'from-gray-600 to-gray-800',
  'from-green-500 to-emerald-500',
  'from-purple-500 to-violet-500',
  'from-yellow-500 to-orange-500',
  'from-teal-500 to-cyan-500',
  'from-indigo-500 to-blue-500',
];

const demoAvatars: AgentAvatarVariant[] = [
  'paint_seller', 'autoservice_manager', 'flowers_seller', 'apple_seller',
  'fitness_admin', 'beauty_admin', 'autochem_seller', 'cleaning_manager', 'it_manager',
];

const DemoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { lang } = useLanguage();
  
  const demos = translations.demo.items.map((item, i) => ({
    title: t(item.title, lang),
    description: t(item.description, lang),
    link: demoLinks[i],
    gradient: demoGradients[i],
    avatar: demoAvatars[i],
  }));

  const [visibleCount, setVisibleCount] = React.useState(3);
  
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const duplicatedDemos = [...demos, ...demos, ...demos];
  const itemWidth = 100 / visibleCount;

  const next = () => setCurrentIndex((prev) => (prev + 1) % demos.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + demos.length) % demos.length);
  const getOffset = () => -(currentIndex + demos.length) * itemWidth;

  return (
    <section id="demo" className="relative py-16 sm:py-24">
      <div className="relative z-10 section-container" ref={ref}>
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
            <span>{t(translations.demo.badge, lang)}</span>
          </motion.div>
          <h2 className="heading-secondary mb-4">
            {t(translations.demo.title1, lang)}<span className="text-gradient">{t(translations.demo.title2, lang)}</span>{t(translations.demo.title3, lang)}
          </h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            {t(translations.demo.subtitle, lang)}
          </p>
        </motion.div>

        <div className="relative z-20 flex justify-end gap-2 mb-6">
          <motion.button onClick={prev} className="p-3 rounded-xl bg-card border border-border hover:border-primary transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <ChevronLeft size={20} className="text-foreground" />
          </motion.button>
          <motion.button onClick={next} className="p-3 rounded-xl bg-card border border-border hover:border-primary transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <ChevronRight size={20} className="text-foreground" />
          </motion.button>
        </div>

        <div className="px-4 -mx-4">
          <div className="overflow-x-hidden overflow-y-visible py-12">
            <motion.div className="flex" animate={{ x: `${getOffset()}%` }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
              {duplicatedDemos.map((demo, index) => (
                <div key={`${demo.title}-${index}`} className="flex-shrink-0 px-2" style={{ width: `${itemWidth}%` }}>
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
                    <motion.div className={`absolute -inset-3 bg-gradient-to-br ${demo.gradient} rounded-2xl blur-xl`} initial={{ opacity: 0 }} animate={{ opacity: hoveredIndex === index ? 0.3 : 0 }} transition={{ duration: 0.3 }} />
                    <div className="relative glass-card p-6 h-full border border-transparent hover:border-primary/50 transition-all duration-300 group">
                      <div className="flex items-start gap-4">
                        <AgentAvatar gradient={demo.gradient} isHovered={hoveredIndex === index} variant={demo.avatar} />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{demo.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{demo.description}</p>
                          <motion.div className="flex items-center gap-2 mt-3 text-primary text-sm font-medium" animate={hoveredIndex === index ? { x: 5 } : { x: 0 }}>
                            <MessageSquare size={16} />
                            {t(translations.demo.chat, lang)}
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {demos.map((_, i) => (
            <motion.button key={i} onClick={() => setCurrentIndex(i)} className={`h-2 rounded-full transition-all ${i === currentIndex % demos.length ? 'w-8 bg-primary' : 'w-2 bg-border'}`} whileHover={{ scale: 1.2 }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
