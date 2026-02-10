import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Сколько стоит внедрение искусственного интеллекта в бизнес?',
    answer: 'Стоимость зависит от сложности и числа функций — базовые решения начинаются от 30 000 ₽, а комплексные системы могут стоить до 150 000 ₽.',
  },
  {
    question: 'Сколько времени занимает разработка и настройка?',
    answer: 'В среднем от 3 дней до 1 месяца — всё зависит от масштабов и количества интеграций.',
  },
  {
    question: 'Безопасно ли использовать ИИ с клиентскими данными?',
    answer: 'Да, мы шифруем все персональные данные, а при необходимости можем разработать и подключить ИИ к вашему локальному серверу — без передачи информации в облако.',
  },
  {
    question: 'Какие задачи можно автоматизировать с помощью ИИ?',
    answer: 'ИИ берёт на себя продажи, консультации, обработку заявок, аналитику, работу с CRM и другие рутинные процессы.',
  },
  {
    question: 'Нужны ли специальные знания для работы с ИИ?',
    answer: 'Нет, всё настраивается под ваш бизнес, а управление простое — через привычные мессенджеры/админ панель или CRM.',
  },
  {
    question: 'Как понять, что моему бизнесу действительно нужен искусственный интеллект?',
    answer: 'Если вы тратите много времени на рутину, теряете заявки или хотите масштабироваться без увеличения штата — значит, пора внедрять ИИ.',
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-16 sm:py-24">
      
      
      <div className="relative z-10 section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">Часто задаваемые вопросы</h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Ответы на самые частые вопросы о внедрении искусственного интеллекта в бизнес
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
            >
              <motion.div 
                className="glass-card overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                    className="shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus size={20} className="text-primary" />
                    ) : (
                      <Plus size={20} className="text-primary" />
                    )}
                  </motion.div>
                </motion.button>
                
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div 
                        className="px-6 pb-6 pt-0"
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
