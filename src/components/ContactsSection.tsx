import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, Youtube, Newspaper, Loader2 } from "lucide-react";
import MagneticButton from "./MagneticButton";
import FloatingElement from "./FloatingElement";
import { useMousePosition } from "@/hooks/useMousePosition";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const ContactsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { normalizedX, normalizedY } = useMousePosition();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-telegram-notification", {
        body: {
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        },
      });

      if (error) {
        throw error;
      }

      toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Произошла ошибка. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacts" className="relative py-16 sm:py-24">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
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
      </div>


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
                { icon: Phone, label: "Телефон", value: "8 929 384-48-44", href: "tel:+79293844844" },
                { icon: Mail, label: "Email", value: "info@aimaticsoft.ru", href: "mailto:info@aimaticsoft.ru" },
                { icon: MapPin, label: "Адрес", value: "г. Новосибирск", href: null },
              ].map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <FloatingElement intensity={3} rotationIntensity={1} className="overflow-visible">
                    {contact.href ? (
                      <a href={contact.href} className="glass-card-hover flex items-center gap-4 p-6 group overflow-visible">
                        <motion.div className="icon-glow flex-shrink-0" whileHover={{ scale: 1.2, rotate: 10 }}>
                          <contact.icon size={24} className="text-primary" />
                        </motion.div>
                        <div className="min-w-0">
                          <p className="text-sm text-muted-foreground">{contact.label}</p>
                          <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors whitespace-normal break-words sm:whitespace-nowrap">
                            {contact.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="glass-card-hover flex items-center gap-4 p-6 group overflow-visible">
                        <motion.div className="icon-glow flex-shrink-0" whileHover={{ scale: 1.2, rotate: 10 }}>
                          <contact.icon size={24} className="text-primary" />
                        </motion.div>
                        <div className="min-w-0">
                          <p className="text-sm text-muted-foreground">{contact.label}</p>
                          <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors whitespace-normal break-words sm:whitespace-nowrap">
                            {contact.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </FloatingElement>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, type: "spring" }}
            >
              <MagneticButton
                href="https://t.me/aimatic1"
                className="flex-1 btn-neon-outline flex items-center justify-center gap-2 py-3 text-sm sm:text-base"
              >
                <Send size={18} />
                <span>Telegram</span>
              </MagneticButton>
              <MagneticButton
                href="https://www.youtube.com/@AimaticSoft"
                className="flex-1 btn-neon-outline flex items-center justify-center gap-2 py-3 text-sm sm:text-base"
              >
                <Youtube size={18} />
                <span>YouTube</span>
              </MagneticButton>
              <MagneticButton
                href="https://dzen.ru/aimatic"
                className="flex-1 btn-neon-outline flex items-center justify-center gap-2 py-3 text-sm sm:text-base"
              >
                <Newspaper size={18} />
                <span>Дзен</span>
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
                  borderColor: focusedField ? "rgba(59, 130, 246, 0.5)" : "rgba(59, 130, 246, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              />

              <h3 className="text-xl font-semibold text-foreground mb-6">Получить консультацию</h3>

              {[
                { name: "name", label: "Ваше имя", type: "text", placeholder: "Как вас зовут?" },
                { name: "phone", label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__" },
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                >
                  <label className="block text-sm text-muted-foreground mb-2">{field.label}</label>
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
                <label className="block text-sm text-muted-foreground mb-2">Сообщение</label>
                <motion.textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Расскажите о вашем проекте"
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>

              <MagneticButton className="w-full">
                <motion.button
                  type="submit"
                  className="w-full btn-neon flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    "Отправить заявку"
                  )}
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
