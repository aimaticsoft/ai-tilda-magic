import { motion } from 'framer-motion';
import { Calculator } from './Calculator/Calculator';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations, t } from '@/i18n/translations';

const CalculatorSection = () => {
  const { lang } = useLanguage();

  return (
    <section id="calculator" className="py-20 lg:py-32 relative">
      <div className="section-container relative z-10">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm mb-6">
            {t(translations.calculator.badge, lang)}
          </span>
          <h2 className="heading-secondary heading-glow mb-4">
            {t(translations.calculator.title, lang)}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(translations.calculator.subtitle, lang)}
          </p>
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Calculator />
        </motion.div>
      </div>
    </section>
  );
};

export default CalculatorSection;
