import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations, t } from '@/i18n/translations';

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const { lang } = useLanguage();

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && !hasShown) {
      const alreadyShown = sessionStorage.getItem('exitIntentShown');
      if (!alreadyShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    }
  }, [hasShown]);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('exitIntentShown');
    if (alreadyShown) setHasShown(true);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [handleMouseLeave]);

  const handleClose = () => setIsVisible(false);
  const handleClaim = () => {
    window.open('https://t.me/AimaticSoft?text=Хочу%20получить%20бесплатную%20консультацию!', '_blank');
    setIsVisible(false);
  };

  const ep = translations.exitPopup;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleClose} className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" />
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ type: 'spring', damping: 25, stiffness: 300 }} className="fixed inset-0 z-[101] flex items-center justify-center p-4">
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-primary/30 bg-card p-6 sm:p-8 shadow-2xl">
              <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
              <button onClick={handleClose} className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"><X className="h-5 w-5" /></button>
              <div className="relative z-10 text-center">
                <motion.div animate={{ rotate: [0, -10, 10, -10, 0], scale: [1, 1.1, 1] }} transition={{ duration: 0.6, delay: 0.3 }} className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                  <Gift className="h-8 w-8 text-primary-foreground" />
                </motion.div>
                <h3 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">{t(ep.title, lang)}</h3>
                <p className="mb-6 text-muted-foreground">
                  {t(ep.subtitle1, lang)}<span className="font-semibold text-primary">{t(ep.subtitle2, lang)}</span>{t(ep.subtitle3, lang)}
                </p>
                <div className="mb-6 space-y-2 text-left">
                  <div className="flex items-center gap-2 text-sm text-foreground"><Sparkles className="h-4 w-4 text-primary" /><span>{t(ep.bonus1, lang)}</span></div>
                  <div className="flex items-center gap-2 text-sm text-foreground"><Sparkles className="h-4 w-4 text-primary" /><span>{t(ep.bonus2, lang)}</span></div>
                  <div className="flex items-center gap-2 text-sm text-foreground"><Sparkles className="h-4 w-4 text-primary" /><span>{t(ep.bonus3, lang)}</span></div>
                </div>
                <Button onClick={handleClaim} className="w-full bg-gradient-to-r from-primary to-accent py-6 text-lg font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/25">
                  {t(ep.cta, lang)}
                </Button>
                <button onClick={handleClose} className="mt-4 text-sm text-muted-foreground transition-colors hover:text-foreground">{t(ep.dismiss, lang)}</button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
