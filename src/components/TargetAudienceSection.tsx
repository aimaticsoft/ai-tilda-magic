import { motion } from 'framer-motion';
import { ShoppingCart, Scissors, Wrench, Sparkles, GraduationCap, Building2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations, t } from '@/i18n/translations';

const iconMap: Record<string, React.ElementType> = {
  'shopping-cart': ShoppingCart,
  'scissors': Scissors,
  'wrench': Wrench,
  'sparkles': Sparkles,
  'graduation-cap': GraduationCap,
  'building': Building2,
};

const TargetAudienceSection = () => {
  const { lang } = useLanguage();
  const section = translations.targetAudience;

  return (
    <section id="audience" className="py-20 relative">
      <div className="section-container">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm mb-6">
              {t(section.badge, lang)}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t(section.title, lang)}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(section.subtitle, lang)}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {section.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="group relative p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/40 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {t(item.title, lang)}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t(item.description, lang)}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="mt-12 text-center">
            <a
              href="https://t.me/AimaticSoft"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon inline-flex items-center gap-2 text-sm px-8 py-3"
            >
              <span className="relative z-10">{t(section.cta, lang)}</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
