import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import FloatingElement from './FloatingElement';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
      }
    },
  } as const;

  return (
    <section id="reviews" className="relative py-16 sm:py-24">
      
      
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
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.company}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03, 
                rotateY: 5,
                y: -10,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FloatingElement intensity={3} rotationIntensity={1}>
                <div className="glass-card-hover h-full p-8 relative overflow-hidden group">
                  {/* Animated quote icon */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Quote size={40} className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors" />
                  </motion.div>
                  
                  {/* Rating with stagger animation */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                        transition={{ delay: index * 0.2 + i * 0.1, type: "spring" }}
                      >
                        <Star size={18} className="fill-accent text-accent" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Company & Project */}
                  <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {review.company}
                  </h3>
                  <p className="text-primary text-sm mb-4">
                    {review.project}
                  </p>

                  {/* Text */}
                  <p className="text-muted-foreground italic">
                    "{review.text}"
                  </p>
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  />
                </div>
              </FloatingElement>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
