import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, TrendingUp, Wallet, Settings2, BarChart3, Zap, Layers, Calculator, Rocket, Heart, Code2, TrendingDown, Timer } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const advantageIcons = [Clock, TrendingUp, Wallet, Settings2, BarChart3, Layers];
const whyUsIcons = [Calculator, Zap, Rocket, Heart, Code2];
const resultIcons = [TrendingUp, TrendingDown, Timer, Zap];

const AdvantagesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();

  const advantages = translations.advantages.items.map((item, i) => ({
    icon: advantageIcons[i],
    title: t(item.title, lang),
    description: t(item.description, lang),
  }));

  const whyUs = translations.advantages.whyUs.map((item, i) => ({
    icon: whyUsIcons[i],
    title: t(item.title, lang),
    description: t(item.description, lang),
  }));

  const results = translations.advantages.guarantees.map((item, i) => ({
    icon: resultIcons[i],
    title: t(item.title, lang),
    description: t(item.description, lang),
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
  } as const;

  return (
    <section id="advantages" className="relative py-16 sm:py-24">
      <div className="relative z-10 section-container" ref={ref}>
        {/* Main advantages */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="heading-secondary mb-4">{t(translations.advantages.title, lang)}</h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">{t(translations.advantages.subtitle, lang)}</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-24" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {advantages.map((item) => (
            <motion.div key={item.title} variants={itemVariants} className="hover:translate-y-[-4px] transition-transform duration-300">
              <div className="glass-card-hover h-full p-8 group">
                <div className="icon-glow mb-6">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why choose us */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="text-center mb-16">
          <h2 className="heading-secondary mb-4">{t(translations.advantages.whyUsTitle, lang)}</h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">{t(translations.advantages.whyUsSubtitle, lang)}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 mb-16 sm:mb-24">
          {whyUs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="hover:translate-y-[-4px] transition-transform duration-300"
            >
              <div className="glass-card h-full p-6 border border-primary/20 hover:border-primary/40 transition-all group text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client results */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }} className="text-center mb-16">
          <h2 className="heading-secondary mb-4">{t(translations.advantages.guaranteesTitle, lang)}</h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">{t(translations.advantages.guaranteesSubtitle, lang)}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {results.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1, type: "spring" }}
              className="hover:translate-y-[-4px] transition-transform duration-300"
            >
              <div className="relative glass-card h-full p-8 border-2 border-primary/30 overflow-hidden group hover:border-primary transition-all text-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gradient mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
