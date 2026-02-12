import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShoppingCart, MessageCircle, Share2, FileText, Calendar, Users } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations, t } from '@/i18n/translations';

const serviceIcons = [ShoppingCart, MessageCircle, Share2, FileText, Calendar, Users];
const serviceColors = [
  'from-blue-500 to-cyan-400',
  'from-purple-500 to-pink-400',
  'from-orange-500 to-red-400',
  'from-green-500 to-emerald-400',
  'from-yellow-500 to-amber-400',
  'from-indigo-500 to-violet-400',
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();

  const services = translations.services.items.map((item, i) => ({
    icon: serviceIcons[i],
    title: t(item.title, lang),
    description: t(item.description, lang),
    color: serviceColors[i],
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group"
            >
              <div className="glass-card-hover h-full p-8 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div 
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                >
                  <service.icon size={28} className="text-white" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <MagneticButton
                  href="https://t.me/AimaticSoft"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  {t(translations.services.order, lang)}
                  <span className="text-lg">→</span>
                </MagneticButton>

                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${service.color} opacity-10 blur-2xl group-hover:opacity-30 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
