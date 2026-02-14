import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Bot, Code2, Image, GraduationCap, CheckCircle2, ChevronDown, ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations, t } from '@/i18n/translations';

const categoryIcons = [Bot, Code2, Image, GraduationCap];
const categoryGradients = [
  'from-blue-500 to-cyan-400',
  'from-purple-500 to-pink-400',
  'from-orange-500 to-amber-400',
  'from-green-500 to-emerald-400',
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const categories = translations.services.categories;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1, y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    },
  } as const;

  return (
    <section id="services" className="relative py-16 sm:py-24">
      <div className="relative z-10 section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            {t(translations.services.title1, lang)}
            <span className="text-gradient">{t(translations.services.title2, lang)}</span>
          </h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            {t(translations.services.subtitle, lang)}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {categories.map((category, index) => {
            const Icon = categoryIcons[index];
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group"
              >
                <div className="glass-card-hover h-full relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${categoryGradients[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Header */}
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="w-full p-6 pb-4 flex items-start gap-4 text-left"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${categoryGradients[index]} flex items-center justify-center shrink-0`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                        {t(category.title, lang)}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t(category.description, lang)}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 mt-1"
                    >
                      <ChevronDown size={20} className="text-muted-foreground" />
                    </motion.div>
                  </button>

                  {/* Expandable content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? 'auto' : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 space-y-4">
                      {/* Sub-items */}
                      <div className="space-y-2">
                        {category.items.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isExpanded ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-start gap-2 text-sm"
                          >
                            <span className="text-primary mt-0.5 shrink-0">•</span>
                            <span className="text-foreground/80">{t(item, lang)}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Results */}
                      <div className="pt-3 border-t border-border/50 space-y-2">
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                          {lang === 'ru' ? 'Результат' : 'Result'}
                        </p>
                        {category.results.map((result, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 size={14} className="text-green-500 shrink-0" />
                            <span className="text-foreground/90">{t(result, lang)}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <MagneticButton
                        href="https://t.me/AimaticSoft"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all text-sm pt-2"
                      >
                        {t(translations.services.order, lang)}
                        <ArrowRight size={16} />
                      </MagneticButton>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
