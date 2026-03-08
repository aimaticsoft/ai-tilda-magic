import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, Zap } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const ComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();

  const rows = translations.comparison.rows;

  return (
    <section id="comparison" aria-label={t(translations.comparison.ariaLabel, lang)} className="relative py-16 sm:py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary mb-4">{t(translations.comparison.title, lang)}</h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            {t(translations.comparison.subtitle, lang)}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                <th className="text-left p-4 text-sm text-muted-foreground font-medium">{t(translations.comparison.parameter, lang)}</th>
                <th className="p-4 text-sm text-muted-foreground font-medium text-center">{t(translations.comparison.traditional, lang)}</th>
                <th className="p-4 text-sm font-bold text-center">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary">
                    <Zap size={14} />
                    Aimatic
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="border-t border-border/50"
                >
                  <td className="p-4 text-sm text-foreground font-medium">{t(row.param, lang)}</td>
                  <td className="p-4 text-center">
                    <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                      {row.traditionalBad && <X size={14} className="text-destructive" />}
                      {t(row.traditional, lang)}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="inline-flex items-center gap-1.5 text-sm text-primary font-medium">
                      <Check size={14} className="text-primary" />
                      {t(row.aimatic, lang)}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Price anchor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-primary/10 border border-primary/30">
            <span className="text-3xl font-bold text-primary">{t(translations.comparison.priceFrom, lang)}</span>
            <div className="text-left">
              <span className="text-xs text-muted-foreground block">{t(translations.comparison.priceLabel, lang)}</span>
              <span className="text-xs text-muted-foreground">{t(translations.comparison.priceNote, lang)}</span>
            </div>
          </div>
          <a
            href="https://t.me/AimaticSoft"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon text-sm px-8 py-3"
          >
            {t(translations.comparison.cta, lang)}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
