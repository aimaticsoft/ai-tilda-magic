import logo from '@/assets/logo.png';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations, t } from '@/i18n/translations';

const Footer = () => {
  const { lang } = useLanguage();

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="absolute inset-0 bg-card/50" />
      <div className="relative z-10 section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Aimatic Logo" className="w-10 h-10 rounded-xl object-cover" loading="lazy" />
            <span className="text-xl font-bold text-gradient">Aimatic</span>
          </div>
          <p className="text-muted-foreground text-sm text-center">
            {t(translations.footer.copyright, lang)}
          </p>
          <div className="flex gap-6">
            <a href="https://t.me/aimatic1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Telegram</a>
            <a href="https://www.youtube.com/@AimaticSoft" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">YouTube</a>
            <a href="https://dzen.ru/aimatic" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">{lang === 'ru' ? 'Дзен' : 'Dzen'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
