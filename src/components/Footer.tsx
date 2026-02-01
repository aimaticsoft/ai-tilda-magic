import { motion } from 'framer-motion';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="absolute inset-0 bg-card/50" />
      
      <div className="relative z-10 section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Aimatic Logo" className="w-10 h-10 rounded-xl object-cover" />
            <span className="text-xl font-bold text-gradient">Aimatic</span>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            © 2025 Aimatic. Все права защищены.
          </p>

          {/* Links */}
          <div className="flex gap-6">
            <a
              href="https://t.me/aimatic1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Telegram
            </a>
            <a
              href="https://www.youtube.com/@AimaticSoft"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              YouTube
            </a>
            <a
              href="https://dzen.ru/aimatic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Дзен
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
