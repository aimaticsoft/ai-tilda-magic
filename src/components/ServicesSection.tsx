import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShoppingCart, MessageCircle, Share2, FileText, Calendar, Users } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { useMousePosition } from '@/hooks/useMousePosition';

const services = [
  {
    icon: ShoppingCart,
    title: 'Агент-продавец',
    description: 'Предлагает товары и услуги, информирует о ценах и акциях, помогает оформить заказ, передает заявку менеджеру.',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: MessageCircle,
    title: 'Агент-консультант',
    description: 'Отвечает на вопросы клиентов, предоставляет дополнительную информацию о продуктах и услугах.',
    color: 'from-purple-500 to-pink-400',
  },
  {
    icon: Share2,
    title: 'Агент-SMM',
    description: 'Взаимодействует с клиентами в социальных сетях, пишет посты, генерирует фото, выкладывает посты в соц.сети.',
    color: 'from-orange-500 to-red-400',
  },
  {
    icon: FileText,
    title: 'Агент-менеджер',
    description: 'Автоматизирует рутинные задачи по заполнению договоров, генерирует документы, счета, акты.',
    color: 'from-green-500 to-emerald-400',
  },
  {
    icon: Calendar,
    title: 'Агент-ассистент',
    description: 'Планирует встречи, напоминает о задачах, отправляет уведомления и выполняет административные функции.',
    color: 'from-yellow-500 to-amber-400',
  },
  {
    icon: Users,
    title: 'Агент-методист',
    description: 'Помогает в обучении сотрудников, отвечает и предоставляет информацию о компании по запросу.',
    color: 'from-indigo-500 to-violet-400',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { normalizedX, normalizedY } = useMousePosition();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: { 
      opacity: 1,
      y: 0, 
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      }
    },
  } as const;

  return (
    <section id="services" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* Animated background orb */}
      <motion.div 
        className="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]"
        animate={{
          x: normalizedX * 100,
          y: normalizedY * 100,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
        style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
      />
      
      <div className="relative z-10 section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            Разработаем вашего совершенного
            <span className="text-gradient"> цифрового агента</span>
          </h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Наш сервис активно разрабатывает и внедряет инновационные ИИ-агенты,
            которые предназначены для оптимизации процессов в бизнесе
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group perspective-1000"
              whileHover={{ 
                scale: 1.03, 
                rotateY: 5,
                rotateX: 5,
                z: 50,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="glass-card-hover h-full p-8 relative overflow-hidden transform-gpu">
                {/* Gradient overlay on hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                />
                
                {/* Icon */}
                <motion.div 
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <service.icon size={28} className="text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* CTA */}
                <MagneticButton
                  href="https://t.me/AimaticSoft"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Заказать
                  <motion.span 
                    className="text-lg"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </MagneticButton>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${service.color} opacity-10 blur-2xl group-hover:opacity-30 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
