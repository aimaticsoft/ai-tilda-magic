import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, Youtube, Newspaper } from 'lucide-react';
import MagneticButton from './MagneticButton';
import FloatingElement from './FloatingElement';
import { useMousePosition } from '@/hooks/useMousePosition';

const ContactsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { normalizedX, normalizedY } = useMousePosition();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to WhatsApp with message
    const text = encodeURIComponent(
      `Здравствуйте! Меня зовут ${formData.name}.\n\n${formData.message}\n\nМой телефон: ${formData.phone}`
    );
    window.open(`https://wa.me/79293844844?text=${text}`, '_blank');
  };

  return (
    <section id="contacts" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* Animated background orbs */}
      <motion.div 
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]"
        animate={{
          x: normalizedX * 50,
          y: normalizedY * 50,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 30 }}
      />
      <motion.div 
        className="absolute top-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[150px]"
        animate={{
          x: normalizedX * -30,
          y: normalizedY * -30,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 30 }}
      />
      
      <div className="relative z-10 section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">Свяжитесь с нами</h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Свяжитесь с нами для обсуждения вашего проекта по внедрению ИИ-агентов
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="space-y-8"
          >
            {/* Contact cards */}
            <div className="space-y-4">
              {[
                { icon: Phone, label: 'Телефон', value: '8 929 384-48-44', href: 'tel:+79293844844' },
                { icon: Mail, label: 'Email', value: 'aimatic@yandex.ru', href: 'mailto:aimatic@yandex.ru' },
                { icon: MapPin, label: 'Адрес', value: 'г. Новосибирск', href: null },
              ].map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <FloatingElement intensity={3} rotationIntensity={1}>
                    {contact.href ? (
                      <a href={contact.href} className="glass-card-hover flex items-center gap-4 p-6 group">
                        <motion.div 
                          className="icon-glow"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                        >
                          <contact.icon size={24} className="text-primary" />
                        </motion.div>
                        <div>
                          <p className="text-sm text-muted-foreground">{contact.label}</p>
                          <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {contact.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="glass-card flex items-center gap-4 p-6">
                        <div className="icon-glow">
                          <contact.icon size={24} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{contact.label}</p>
                          <p className="text-lg font-semibold text-foreground">{contact.value}</p>
                        </div>
                      </div>
                    )}
                  </FloatingElement>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, type: "spring" }}
            >
              <MagneticButton
                href="https://t.me/aimatic1"
                className="flex-1 btn-neon-outline flex items-center justify-center gap-2 py-3"
              >
                <Send size={20} />
                Telegram
              </MagneticButton>
              <MagneticButton
                href="https://www.youtube.com/@AimaticSoft"
                className="flex-1 btn-neon-outline flex items-center justify-center gap-2 py-3"
              >
                <Youtube size={20} />
                YouTube
              </MagneticButton>
              <MagneticButton
                href="https://dzen.ru/aimatic"
                className="flex-1 btn-neon-outline flex items-center justify-center gap-2 py-3"
              >
                <Newspaper size={20} />
                Дзен
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -10 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="glass-card p-8 space-y-6 relative overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 border-2 border-primary/20 rounded-xl pointer-events-none"
                animate={{
                  borderColor: focusedField ? 'rgba(59, 130, 246, 0.5)' : 'rgba(59, 130, 246, 0.2)',
                }}
                transition={{ duration: 0.3 }}
              />
              
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Получить консультацию
              </h3>

              {[
                { name: 'name', label: 'Ваше имя', type: 'text', placeholder: 'Как вас зовут?' },
                { name: 'phone', label: 'Телефон', type: 'tel', placeholder: '+7 (___) ___-__-__' },
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                >
                  <label className="block text-sm text-muted-foreground mb-2">
                    {field.label}
                  </label>
                  <motion.input
                    type={field.type}
                    required
                    value={formData[field.name as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder={field.placeholder}
                    whileFocus={{ scale: 1.01 }}
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7, type: "spring" }}
              >
                <label className="block text-sm text-muted-foreground mb-2">
                  Сообщение
                </label>
                <motion.textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Расскажите о вашем проекте"
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>

              <MagneticButton className="w-full">
                <motion.button 
                  type="submit" 
                  className="w-full btn-neon"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Отправить заявку
                </motion.button>
              </MagneticButton>

              <p className="text-xs text-muted-foreground text-center">
                Нажимая на кнопку, вы даете согласие на обработку персональных данных
              </p>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
