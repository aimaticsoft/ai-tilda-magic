import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Code2, Link, GraduationCap, Settings } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations, t } from '@/i18n/translations';

const icons = [Search, Code2, Link, GraduationCap, Settings];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  const steps = translations.about.steps.map((step, i) => ({
    icon: icons[i],
    title: t(step.title, lang),
    description: t(step.description, lang),
    stat: t(step.stat, lang),
    statLabel: t(step.statLabel, lang),
  }));

  return (
    <section id="about" ref={containerRef} className="relative py-16 sm:py-24">
      <div className="relative z-10 section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            {t(translations.about.title, lang)}
          </h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            {t(translations.about.subtitle, lang)}
          </p>
        </motion.div>

        <div className="relative">
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
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`glass-card-hover p-8 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16 lg:col-start-2'}`}>
                  <div className="flex items-start gap-4">
                    <div className="icon-glow shrink-0">
                      <step.icon size={24} className="text-primary" />
                    </div>
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

                <div className={`hidden lg:flex items-center justify-center ${
                  index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'
                }`}>
                  <motion.div 
                    className="relative"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                  >
                    <div className="relative w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center text-2xl font-bold text-primary">
                      {index + 1}
                    </div>
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
