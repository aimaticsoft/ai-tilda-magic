import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, TrendingUp, Wallet, Settings2, BarChart3, Zap, Shield, Rocket, Layers } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const advantageIcons = [Clock, TrendingUp, Wallet, Settings2, BarChart3, Layers];
const guaranteeIcons = [Shield, Zap, Rocket];

const AdvantagesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();

  const advantages = translations.advantages.items.map((item, i) => ({
    icon: advantageIcons[i],
    title: t(item.title, lang),
    description: t(item.description, lang),
  }));

  const guarantees = translations.advantages.guarantees.map((item, i) => ({
    icon: guaranteeIcons[i],
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

        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }} className="text-center mb-16">
          <h2 className="heading-secondary mb-4">{t(translations.advantages.guaranteesTitle, lang)}</h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">{t(translations.advantages.guaranteesSubtitle, lang)}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {guarantees.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
              className="hover:translate-y-[-4px] transition-transform duration-300"
            >
              <div className="relative glass-card h-full p-8 border-2 border-primary/30 overflow-hidden group hover:border-primary transition-all">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
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
