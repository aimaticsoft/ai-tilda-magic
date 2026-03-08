import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const clients = [
  { name: "CleanPro", icon: "🧹" },
  { name: "TravelMarket", icon: "✈️" },
  { name: "СИБТЭ", icon: "🏭" },
  { name: "Apple Store", icon: "🍎" },
  { name: "Мебельная компания", icon: "🪑" },
  { name: "Салон красоты", icon: "💇" },
  { name: "Автосервис", icon: "🔧" },
  { name: "Магазин одежды", icon: "👗" },
];

const TrustBadgesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { lang } = useLanguage();

  return (
    <section aria-label={t(translations.trustBadges.ariaLabel, lang)} className="py-10 sm:py-14 relative overflow-hidden">
      <div className="section-container" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-8"
        >
          {t(translations.trustBadges.title, lang)}
        </motion.p>

        {/* Scrolling marquee of client badges */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-6 animate-marquee"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card/60 border border-border/50 whitespace-nowrap shrink-0"
                >
                  <span className="text-2xl">{client.icon}</span>
                  <span className="text-sm font-medium text-foreground/80">{client.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-8 text-center"
        >
          {translations.trustBadges.stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-primary">{t(stat.value, lang)}</span>
              <span className="text-xs sm:text-sm text-muted-foreground">{t(stat.label, lang)}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;
