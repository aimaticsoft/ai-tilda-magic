import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const CleanProLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 3C14 3 8 10 8 16C8 19.3 10.7 22 14 22C17.3 22 20 19.3 20 16C20 10 14 3 14 3Z" fill="#22C55E" fillOpacity="0.2" stroke="#22C55E" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M14 18V12" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/>
    <path d="M11 15L14 12L17 15" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TravelMarketLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="11" stroke="#3B82F6" strokeWidth="2"/>
    <ellipse cx="14" cy="14" rx="5" ry="11" stroke="#3B82F6" strokeWidth="1.5"/>
    <path d="M3 14H25" stroke="#3B82F6" strokeWidth="1.5"/>
    <path d="M5 8H23" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5"/>
    <path d="M5 20H23" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5"/>
  </svg>
);

const SibteLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2L16 10H24L18 15L20 23L14 18L8 23L10 15L4 10H12L14 2Z" fill="#F59E0B" fillOpacity="0.2" stroke="#F59E0B" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const NovaTechLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 24V4L14 18L24 4V24" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BrightWaveLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 18C5 18 5 10 8 10C11 10 11 18 14 18C17 18 17 10 20 10C23 10 23 18 26 18" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M2 22C5 22 5 16 8 16C11 16 11 22 14 22" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4"/>
  </svg>
);

const KristallLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2L26 14L14 26L2 14Z" fill="#EC4899" fillOpacity="0.15" stroke="#EC4899" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M14 8L20 14L14 20L8 14Z" stroke="#EC4899" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const SkyLineProLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="12" width="6" height="14" fill="#6366F1" fillOpacity="0.15" stroke="#6366F1" strokeWidth="2" rx="1"/>
    <rect x="11" y="6" width="6" height="20" fill="#6366F1" fillOpacity="0.15" stroke="#6366F1" strokeWidth="2" rx="1"/>
    <rect x="19" y="2" width="6" height="24" fill="#6366F1" fillOpacity="0.15" stroke="#6366F1" strokeWidth="2" rx="1"/>
  </svg>
);

const ImpulseLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2L6 16H14L12 26L22 12H14L16 2Z" fill="#EF4444" fillOpacity="0.2" stroke="#EF4444" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const clients = [
  { name: "CleanPro", Logo: CleanProLogo },
  { name: "TravelMarket", Logo: TravelMarketLogo },
  { name: "СИБТЭ", Logo: SibteLogo },
  { name: "NovaTech", Logo: NovaTechLogo },
  { name: "BrightWave", Logo: BrightWaveLogo },
  { name: "Кристалл", Logo: KristallLogo },
  { name: "SkyLine Pro", Logo: SkyLineProLogo },
  { name: "Импульс", Logo: ImpulseLogo },
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
                  className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card/60 border border-border/50 whitespace-nowrap shrink-0"
                >
                  <client.Logo />
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
