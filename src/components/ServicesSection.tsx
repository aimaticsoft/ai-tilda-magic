import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShoppingCart, MessageCircle, Share2, FileText, Calendar, Users } from 'lucide-react';

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

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card-hover h-full p-8 relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={28} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* CTA */}
                <a
                  href="https://t.me/AimaticSoft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Заказать
                  <span className="text-lg">→</span>
                </a>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${service.color} opacity-10 blur-2xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
