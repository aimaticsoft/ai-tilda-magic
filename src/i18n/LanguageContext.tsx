import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { type Language } from './translations';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'ru',
  toggleLang: () => {},
  setLang: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('aimatic_lang');
    return (saved === 'en' ? 'en' : 'ru') as Language;
  });

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'ru' ? 'en' : 'ru';
      localStorage.setItem('aimatic_lang', next);
      return next;
    });
  }, []);

  const setLangAndSave = useCallback((newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('aimatic_lang', newLang);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang: setLangAndSave }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
