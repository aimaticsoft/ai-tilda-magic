import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ShoppingCart, Building, Stethoscope, GraduationCap, Truck, Utensils } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const industryIcons = [ShoppingCart, Building, Stethoscope, GraduationCap, Truck, Utensils];

const IndustrySolutionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const industries = translations.industrySolutions.industries;

  return (
    <section id="industries" aria-label={t(translations.industrySolutions.ariaLabel, lang)} className="relative py-16 sm:py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm mb-6">
            {t(translations.industrySolutions.badge, lang)}
          </div>
          <h2 className="heading-secondary mb-4">{t(translations.industrySolutions.title, lang)}</h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            {t(translations.industrySolutions.subtitle, lang)}
          </p>
        </motion.div>

        {/* Tab buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
        >
          {industries.map((industry, i) => {
            const Icon = industryIcons[i];
            return (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === i
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-card/60 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                <Icon size={16} />
                {t(industry.name, lang)}
              </button>
            );
          })}
        </motion.div>

        {/* Active tab content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card p-6 sm:p-10"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                {t(industries[activeTab].name, lang)}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t(industries[activeTab].description, lang)}
              </p>
              <ul className="space-y-3">
                {industries[activeTab].tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </span>
                    <span className="text-foreground/90 text-sm">{t(task, lang)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-4">
                {industries[activeTab].results.map((result, i) => (
                  <div key={i} className="p-4 rounded-xl bg-card/80 border border-border/50 text-center">
                    <span className="text-2xl font-bold text-primary block mb-1">{t(result.value, lang)}</span>
                    <span className="text-xs text-muted-foreground">{t(result.label, lang)}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://t.me/AimaticSoft"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon mt-6 text-center text-sm px-6 py-3"
              >
                {t(translations.industrySolutions.cta, lang)}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustrySolutionsSection;
