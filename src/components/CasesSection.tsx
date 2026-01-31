import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const cases = [
  {
    title: 'Интеллектуальный консультант по продажам для магазина Apple',
    description: 'Автоматизированный консультант интегрирован в Avito, Telegram и WhatsApp, предоставляет клиентам рекомендации по моделям, характеристикам и акциям.',
    result: '+40% конверсия',
    link: 'https://drive.google.com/file/d/1iHRMtmOmxsFIreEWdKV_ghSP67ONe0h0/view',
  },
  {
    title: 'Автоматизированный SMM-координатор для мебельной компании',
    description: 'ИИ полностью автоматизирует работу с контентом: пишет посты, генерирует фото и видео, публикует их в Instagram, ВКонтакте и Telegram.',
    result: '0 часов SMM работы',
    link: 'https://drive.google.com/file/d/1r98e5SuihFIpzbH51EVPC331S32JXaZm/view',
  },
  {
    title: 'Цифровой администратор салона красоты',
    description: 'ИИ-администратор консультирует клиентов по услугам и ценам, осуществляет онлайн-запись, отправляет напоминания через чат.',
    result: '-70% нагрузка на персонал',
    link: 'https://drive.google.com/file/d/1yrfBVi0Qf8-CIloXWpAUbFpJlKjmOs25/view',
  },
  {
    title: 'Интеллектуальный менеджер маркетплейсов',
    description: 'Решение анализирует все входящие отзывы и вопросы покупателей на Ozon и Wildberries, формирует ответы автоматически.',
    result: '5★ рейтинг товаров',
    link: 'https://drive.google.com/file/d/1JE0R_yaeWQFKChngJ-qxdofw4gVdGAAF/view',
  },
  {
    title: 'Интерактивный помощник клининговых специалистов',
    description: 'Многофункциональная система с визуальным анализом фото загрязнений, подбором химии и контролем качества уборки.',
    result: '+50% качество работ',
    link: 'https://drive.google.com/file/d/10usGwCQU9tHjHMiYhARXDIVO_2b4Wzkv/view',
  },
  {
    title: 'Интеллектуальный менеджер продаж для установки окон',
    description: 'Решение объединяет WhatsApp, Telegram, сайт, Avito и Bitrix24, консультирует клиентов и оформляет лиды.',
    result: '0 потерянных заявок',
    link: 'https://drive.google.com/file/d/1grIrzMZ_xmbjbKDQ5slDxHNhFj4fEnLW/view',
  },
  {
    title: 'Аналитическая система для сети магазинов одежды',
    description: 'ИИ-модуль анализирует данные по 30 торговым точкам и 50 показателям, формирует отчёт за 2 минуты.',
    result: '2 мин вместо 2 часов',
    link: 'https://drive.google.com/file/d/1ZXiFBaXEHL3xWajkSR2GBuRpWjeRYvg5/view',
  },
  {
    title: 'Автоматизированный HR-координатор',
    description: 'Система ведёт коммуникацию с кандидатами через WhatsApp, собирает данные и планирует собеседования.',
    result: '1000 контактов/день',
    link: 'https://drive.google.com/file/d/1qI9BQik6dr8dFvexTBEraCha6R1lrrxf/view',
  },
];

const CasesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const visibleCases = 3;
  const duplicatedCases = [...cases, ...cases, ...cases];
  const itemWidth = 100 / visibleCases;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const getOffset = () => {
    return -(currentIndex + cases.length) * itemWidth;
  };

  return (
    <section id="cases" className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 grid-bg" />
      
      <div className="relative z-10 section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            Реальные проекты <span className="text-gradient">Aimatic</span>
          </h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Мы не говорим о будущем — мы создаём его. Каждый кейс — это реальный проект,
            где ИИ уже заменяет рутину и ускоряет продажи
          </p>
        </motion.div>

        {/* Cases Carousel */}
        <div className="relative">
          {/* Navigation buttons */}
          <div className="flex justify-end gap-2 mb-6">
            <motion.button
              onClick={prev}
              className="p-3 rounded-xl bg-card border border-border hover:border-primary transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={next}
              className="p-3 rounded-xl bg-card border border-border hover:border-primary transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          {/* Carousel wrapper (internal padding prevents hover/glow clipping) */}
          <div className="px-4 -mx-4">
            <div className="overflow-hidden py-8 -my-8">
              <motion.div
                className="flex"
                animate={{ x: `${getOffset()}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {duplicatedCases.map((caseItem, index) => {
                  return (
                    <div
                      key={`${caseItem.title}-${index}`}
                      className="flex-shrink-0 px-3"
                      style={{ width: `${itemWidth}%` }}
                    >
                      <motion.div
                        className="relative h-full"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {/* Glow effect */}
                        <motion.div
                          className="absolute -inset-3 bg-primary/30 rounded-2xl blur-xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        
                        {/* Card */}
                        <div className="relative glass-card h-full p-6 flex flex-col border border-transparent hover:border-primary/50 transition-all duration-300">
                          {/* Result badge */}
                          <motion.div 
                            className="inline-flex self-start items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4"
                            animate={hoveredIndex === index ? { scale: 1.05 } : { scale: 1 }}
                          >
                            {caseItem.result}
                          </motion.div>

                          {/* Title */}
                          <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
                            {caseItem.title}
                          </h3>

                          {/* Description */}
                          <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-3">
                            {caseItem.description}
                          </p>

                          {/* Link */}
                          <motion.a
                            href={caseItem.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary font-medium transition-all"
                            animate={hoveredIndex === index ? { x: 5 } : { x: 0 }}
                          >
                            Подробнее
                            <ExternalLink size={16} />
                          </motion.a>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {cases.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex % cases.length ? 'w-8 bg-primary' : 'w-2 bg-border'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
