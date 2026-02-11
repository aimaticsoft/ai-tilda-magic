import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import logo from '@/assets/logo.png';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations, t } from '@/i18n/translations';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  const navItems = [
    { label: t(translations.nav.about, lang), href: '#about' },
    { label: t(translations.nav.services, lang), href: '#services' },
    { label: t(translations.nav.cases, lang), href: '#cases' },
    { label: t(translations.nav.demo, lang), href: '#demo' },
    { label: t(translations.nav.advantages, lang), href: '#advantages' },
    { label: t(translations.nav.reviews, lang), href: '#reviews' },
    { label: t(translations.nav.contacts, lang), href: '#contacts' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Aimatic Logo" className="w-10 h-10 rounded-xl object-cover" />
            <span className="text-xl font-bold text-gradient">Aimatic</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right side: Language switch + CTA */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <motion.button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card/50 hover:border-primary/50 transition-all text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe size={14} className="text-primary" />
              <span className="font-medium text-foreground uppercase">{lang}</span>
            </motion.button>

            {/* CTA Button */}
            <a
              href="https://t.me/AimaticSoft"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex btn-neon text-sm py-3 px-6 items-center gap-2"
            >
              <span className="relative z-10">{t(translations.nav.orderDemo, lang)}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="section-container py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://t.me/AimaticSoft"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon text-center mt-4"
              >
                {t(translations.nav.orderDemo, lang)}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
