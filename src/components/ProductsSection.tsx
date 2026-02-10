import { motion } from 'framer-motion';
import { ExternalLink, Target, Image, Sparkles, TrendingUp } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import aimsalesLogo from '@/assets/aimsales-logo.png';
import aimvisualLogo from '@/assets/aimvisual-logo.jpg';

const products = [
  {
    id: 'aimsales',
    name: 'AimSales',
    description: 'Интерактивная платформа для тренировки менеджеров в продажах. Практикуйтесь с AI-клиентами, получайте обратную связь и улучшайте результаты.',
    link: 'https://aimsales.aimaticsoft.ru/',
    icon: Target,
    logo: aimsalesLogo,
    gradient: 'from-primary to-blue-400',
    features: ['AI-тренажёр', 'Обратная связь', 'Аналитика'],
  },
  {
    id: 'aimvisual',
    name: 'AimVisual',
    description: 'Профессиональная генерация изображений для бизнеса: одежда, авто, интерьер, товары, логотипы и многое другое — без сложных настроек.',
    link: 'https://aimvisual.aimaticsoft.ru/',
    icon: Image,
    logo: aimvisualLogo,
    gradient: 'from-accent to-cyan-400',
    features: ['Генерация фото', 'Для бизнеса', 'Без настроек'],
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <AnimatedSection>
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Наши продукты</span>
            </motion.div>
            
            <h2 className="heading-primary mb-4">
              Готовые AI-решения
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Веб-приложения на базе искусственного интеллекта, готовые к использованию
            </p>
          </div>
        </AnimatedSection>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <AnimatedSection key={product.id}>
              <motion.a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative block h-full"
              >
                {/* Card */}
                <div className="relative h-full glass-card-hover p-8 rounded-2xl overflow-hidden">
                  {/* Gradient border on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`relative z-10 w-16 h-16 rounded-xl bg-gradient-to-br ${product.gradient} p-0.5 mb-6`}>
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                      <product.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-gradient transition-colors">
                        {product.name}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features tags */}
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover arrow indicator */}
                  <motion.div
                    className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                </div>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground">
              Нужно индивидуальное решение?{' '}
              <a href="#contacts" className="text-primary hover:underline">
                Свяжитесь с нами
              </a>
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProductsSection;
