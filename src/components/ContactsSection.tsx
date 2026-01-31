import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

const ContactsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

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
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[150px]" />
      
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
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact cards */}
            <div className="space-y-4">
              <a
                href="tel:+79293844844"
                className="glass-card-hover flex items-center gap-4 p-6"
              >
                <div className="icon-glow">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Телефон</p>
                  <p className="text-lg font-semibold text-foreground">8 929 384-48-44</p>
                </div>
              </a>

              <a
                href="mailto:aimatic@yandex.ru"
                className="glass-card-hover flex items-center gap-4 p-6"
              >
                <div className="icon-glow">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-lg font-semibold text-foreground">aimatic@yandex.ru</p>
                </div>
              </a>

              <div className="glass-card flex items-center gap-4 p-6">
                <div className="icon-glow">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Адрес</p>
                  <p className="text-lg font-semibold text-foreground">г. Новосибирск</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="https://t.me/aimatic1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-neon-outline flex items-center justify-center gap-2 py-3"
              >
                <Send size={20} />
                Telegram
              </a>
              <a
                href="https://wa.me/79293844844"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-neon-outline flex items-center justify-center gap-2 py-3"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
              <a
                href="https://vk.com/aimatic1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-neon-outline flex items-center justify-center gap-2 py-3"
              >
                VK
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Получить консультацию
              </h3>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="Как вас зовут?"
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                  placeholder="Расскажите о вашем проекте"
                />
              </div>

              <button type="submit" className="w-full btn-neon">
                Отправить заявку
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Нажимая на кнопку, вы даете согласие на обработку персональных данных
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
