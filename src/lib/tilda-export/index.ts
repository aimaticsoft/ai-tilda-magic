// Export all block generators
export { default as generateBaseStyles } from './generateBaseStyles';
export { default as generateHeaderBlock } from './blocks/header';
export { default as generateHeroBlock } from './blocks/hero';
export { default as generateMarqueeBlock } from './blocks/marquee';
export { default as generateAboutBlock } from './blocks/about';
export { default as generateServicesBlock } from './blocks/services';
export { default as generateCasesBlock } from './blocks/cases';
export { default as generateDemoBlock } from './blocks/demo';
export { default as generateAdvantagesBlock } from './blocks/advantages';
export { default as generateReviewsBlock } from './blocks/reviews';
export { default as generateFAQBlock } from './blocks/faq';
export { default as generateContactsBlock } from './blocks/contacts';
export { default as generateFooterBlock } from './blocks/footer';

export const BLOCKS = [
  { id: 'base', name: '⚙️ Базовые стили', description: 'CSS переменные, шрифты, утилиты' },
  { id: 'header', name: '🔝 Header', description: 'Навигация с мобильным меню' },
  { id: 'hero', name: '🚀 Hero', description: 'Главный экран с particles' },
  { id: 'marquee', name: '📜 Marquee', description: 'Бегущая строка' },
  { id: 'about', name: '📋 О компании', description: 'Timeline с этапами' },
  { id: 'services', name: '🛠 Услуги', description: 'Карточки услуг 3x2' },
  { id: 'cases', name: '📁 Кейсы', description: 'Карусель проектов' },
  { id: 'demo', name: '🤖 Демо', description: 'Карусель ИИ-агентов' },
  { id: 'advantages', name: '⭐ Преимущества', description: 'Карточки преимуществ' },
  { id: 'reviews', name: '💬 Отзывы', description: 'Карточки отзывов' },
  { id: 'faq', name: '❓ FAQ', description: 'Аккордеон вопросов' },
  { id: 'contacts', name: '📞 Контакты', description: 'Форма и контакты' },
  { id: 'footer', name: '🔻 Footer', description: 'Подвал сайта' },
];
