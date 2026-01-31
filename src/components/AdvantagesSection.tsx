import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, TrendingUp, Wallet, Settings2, BarChart3, Zap, Shield, Rocket } from 'lucide-react';

const advantages = [
  {
    icon: Clock,
    title: 'Круглосуточная поддержка',
    description: 'ИИ-агенты работают 24/7, обрабатывая задачи без перерывов и минимизируя упущенные возможности.',
  },
  {
    icon: TrendingUp,
    title: 'Повышение конверсии',
    description: 'Агенты персонализируют рекомендации и анализируют данные в реальном времени, увеличивая продажи на 15–30%.',
  },
  {
    icon: Wallet,
    title: 'Экономия ресурсов',
    description: 'Автоматизация рутины снижает нагрузку на команду до 50%, освобождая время для стратегии.',
  },
  {
    icon: Settings2,
    title: 'Гибкая адаптация',
    description: 'Агенты настраиваются под любые задачи — SMM, аналитика, управление — с интеграцией в системы.',
  },
  {
    icon: BarChart3,
    title: 'Глубокий анализ данных',
    description: 'Агенты проверяют информацию сразу, выдавая отчёты и советы по улучшению работы.',
  },
];

const guarantees = [
  {
    icon: Shield,
    title: 'Персонализация под бизнес-логику',
    description: 'Обучаем ИИ на данных компании: продуктах, услугах, процессах, регламентах, сценариях общения.',
  },
  {
    icon: Zap,
    title: 'Быстрая разработка',
    description: 'MVP — за 7 дней. Финальная версия — за 2–3 недели после тестирования.',
  },
  {
    icon: Rocket,
    title: 'Предсказуемый процесс',
    description: 'Все этапы идут по чёткому регламенту. Вы всегда понимаете, что делается.',
  },
];

const AdvantagesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="advantages" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      
      <div className="relative z-10 section-container" ref={ref}>
        {/* Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">Преимущества</h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Круглосуточная работа, больше продаж, снижение расходов — всё это благодаря ИИ-агентам
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {advantages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="glass-card-hover h-full p-8">
                <div className="icon-glow mb-6">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">Гарантированные результаты</h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Первый рабочий прототип ИИ-агента вы получаете через 7 дней,
            финальная версия за 2–3 недели
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guarantees.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div className="relative glass-card h-full p-8 border-2 border-primary/30 overflow-hidden group hover:border-primary transition-colors">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
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
