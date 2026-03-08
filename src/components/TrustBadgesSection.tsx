import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

import cleanproLogo from "@/assets/logos/cleanpro.png";
import travelmarketLogo from "@/assets/logos/travelmarket.png";
import sibteLogo from "@/assets/logos/sibte.png";
import novatechLogo from "@/assets/logos/novatech.png";
import brightwaveLogo from "@/assets/logos/brightwave.png";
import kristallLogo from "@/assets/logos/kristall.png";
import skylineproLogo from "@/assets/logos/skylinepro.png";
import impulsLogo from "@/assets/logos/impuls.png";

const clients = [
  { name: "CleanPro", logo: cleanproLogo },
  { name: "TravelMarket", logo: travelmarketLogo },
  { name: "СИБТЭ", logo: sibteLogo },
  { name: "NovaTech", logo: novatechLogo },
  { name: "BrightWave", logo: brightwaveLogo },
  { name: "Кристалл", logo: kristallLogo },
  { name: "SkyLine Pro", logo: skylineproLogo },
  { name: "Импульс", logo: impulsLogo },
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

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-6"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/60 border border-border/50 whitespace-nowrap shrink-0"
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-8 h-8 object-contain rounded"
                    loading="lazy"
                  />
                  <span className="text-sm font-medium text-foreground">{client.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

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
