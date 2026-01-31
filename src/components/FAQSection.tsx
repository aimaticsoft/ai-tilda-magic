import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      
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
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
                >
                  <span className="font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-primary transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
