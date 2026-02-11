import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations, t } from '@/i18n/translations';

const caseLinks = [
  'https://drive.google.com/file/d/1iHRMtmOmxsFIreEWdKV_ghSP67ONe0h0/view',
  'https://drive.google.com/file/d/1r98e5SuihFIpzbH51EVPC331S32JXaZm/view',
  'https://drive.google.com/file/d/1yrfBVi0Qf8-CIloXWpAUbFpJlKjmOs25/view',
  'https://drive.google.com/file/d/1JE0R_yaeWQFKChngJ-qxdofw4gVdGAAF/view',
  'https://drive.google.com/file/d/10usGwCQU9tHjHMiYhARXDIVO_2b4Wzkv/view',
  'https://drive.google.com/file/d/1grIrzMZ_xmbjbKDQ5slDxHNhFj4fEnLW/view',
  'https://drive.google.com/file/d/1ZXiFBaXEHL3xWajkSR2GBuRpWjeRYvg5/view',
  'https://drive.google.com/file/d/1qI9BQik6dr8dFvexTBEraCha6R1lrrxf/view',
];

const CasesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { lang } = useLanguage();
  
  const cases = translations.cases.items.map((item, i) => ({
    title: t(item.title, lang),
    description: t(item.description, lang),
    result: t(item.result, lang),
    link: caseLinks[i],
  }));

  const [visibleCases, setVisibleCases] = React.useState(3);
  
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCases(1);
      else if (window.innerWidth < 1024) setVisibleCases(2);
      else setVisibleCases(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const duplicatedCases = [...cases, ...cases, ...cases];
  const itemWidth = 100 / visibleCases;

  const next = () => setCurrentIndex((prev) => (prev + 1) % cases.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  const getOffset = () => -(currentIndex + cases.length) * itemWidth;

  return (
    <section id="cases" className="relative py-16 sm:py-24">
      <div className="relative z-10 section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            {t(translations.cases.title1, lang)}<span className="text-gradient">{t(translations.cases.title2, lang)}</span>
          </h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            {t(translations.cases.subtitle, lang)}
          </p>
        </motion.div>

        <div className="relative">
          <div className="relative z-20 flex justify-end gap-2 mb-6">
            <motion.button onClick={prev} className="p-3 rounded-xl bg-card border border-border hover:border-primary transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button onClick={next} className="p-3 rounded-xl bg-card border border-border hover:border-primary transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ChevronRight size={20} />
            </motion.button>
          </div>

          <div className="px-4 -mx-4">
            <div className="overflow-x-hidden overflow-y-visible py-12">
              <motion.div className="flex" animate={{ x: `${getOffset()}%` }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
                {duplicatedCases.map((caseItem, index) => (
                  <div key={`${caseItem.title}-${index}`} className="flex-shrink-0 px-3" style={{ width: `${itemWidth}%` }}>
                    <motion.div
                      className="relative h-full"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div className="absolute -inset-3 bg-primary/30 rounded-2xl blur-xl" initial={{ opacity: 0 }} animate={{ opacity: hoveredIndex === index ? 1 : 0 }} transition={{ duration: 0.3 }} />
                      <div className="relative glass-card h-full p-6 flex flex-col border border-transparent hover:border-primary/50 transition-all duration-300">
                        <motion.div className="inline-flex self-start items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4" animate={hoveredIndex === index ? { scale: 1.05 } : { scale: 1 }}>
                          {caseItem.result}
                        </motion.div>
                        <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">{caseItem.title}</h3>
                        <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-3">{caseItem.description}</p>
                        <motion.a href={caseItem.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-medium transition-all" animate={hoveredIndex === index ? { x: 5 } : { x: 0 }}>
                          {t(translations.cases.details, lang)}
                          <ExternalLink size={16} />
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {cases.map((_, i) => (
              <motion.button key={i} onClick={() => setCurrentIndex(i)} className={`h-2 rounded-full transition-all ${i === currentIndex % cases.length ? 'w-8 bg-primary' : 'w-2 bg-border'}`} whileHover={{ scale: 1.2 }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
