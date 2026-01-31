import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    company: 'CleanPro',
    project: 'Внедрение AI-помощника',
    text: 'Внедрение ИИ-помощника в нашу клининговую компанию превзошло все ожидания. Данный продукт был идеально адаптирован под наши потребности: сотрудники теперь тратят меньше времени на поиск информации.',
    rating: 5,
  },
  {
    company: 'TravelMarket',
    project: 'Внедрение AI-SMM',
    text: 'Существенно сократилось время на написание и публикацию постов сразу в 3 соц.сети. Тексты получаются быстрее, точнее и в нужном стиле.',
    rating: 5,
  },
  {
    company: 'ООО "СИБТЭ"',
    project: 'Внедрение AI-продавца',
    text: 'Внедрили AI-менеджера для общения с клиентами на авито, сайт и Max. Конверсия выросла, ответы стали мгновенными, менеджеры тратят на 80% меньше времени.',
    rating: 5,
  },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      
      <div className="relative z-10 section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            Отзывы <span className="text-gradient">наших клиентов</span>
          </h2>
          <div className="accent-line mx-auto" />
        </motion.div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.company}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="glass-card-hover h-full p-8 relative">
                {/* Quote icon */}
                <Quote size={40} className="absolute top-6 right-6 text-primary/10" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-accent text-accent" />
                  ))}
                </div>

                {/* Company & Project */}
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {review.company}
                </h3>
                <p className="text-primary text-sm mb-4">
                  {review.project}
                </p>

                {/* Text */}
                <p className="text-muted-foreground italic">
                  "{review.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
