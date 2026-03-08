import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Search, Cog, BarChart3 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const stepIcons = [FileText, Search, Cog, BarChart3];

const HowWeWorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();

  const steps = translations.howWeWork.steps.map((step, i) => ({
    icon: stepIcons[i],
    number: `0${i + 1}`,
    title: t(step.title, lang),
    description: t(step.description, lang),
  }));

  return (
    <section id="how-we-work" className="relative py-16 sm:py-24">
      <div className="relative z-10 section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            {t(translations.howWeWork.title, lang)}
          </h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            {t(translations.howWeWork.subtitle, lang)}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.15, type: "spring", stiffness: 100 }}
                  className="relative"
                >
                  <div className="glass-card p-6 text-center h-full flex flex-col items-center relative group hover:border-primary/30 transition-colors">
                    {/* Step number */}
                    <span className="text-5xl font-black text-primary/10 absolute top-3 right-4 select-none group-hover:text-primary/20 transition-colors">
                      {step.number}
                    </span>

                    {/* Icon */}
                    <motion.div
                      className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 relative z-10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon size={28} className="text-primary" />
                    </motion.div>

                    {/* Arrow between steps - mobile/tablet */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-primary text-lg">→</span>
                        </div>
                      </div>
                    )}

                    <h3 className="text-lg font-semibold text-foreground mb-2 relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
