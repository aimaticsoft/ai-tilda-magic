import { motion } from 'framer-motion';
import { Calculator } from './Calculator/Calculator';
import AnimatedSection from './AnimatedSection';

const CalculatorSection = () => {
  return (
    <section id="calculator" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-hero-gradient opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[128px]" />
      
      <div className="section-container relative z-10">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm mb-6">
            💰 Прозрачное ценообразование
          </span>
          <h2 className="heading-secondary heading-glow mb-4">
            Рассчитайте стоимость вашего проекта
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выберите нужные функции и получите предварительную оценку стоимости разработки ИИ-агента для вашего бизнеса
          </p>
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Calculator />
        </motion.div>
      </div>
    </section>
  );
};

export default CalculatorSection;
