

## SEO-оптимизация: что уже есть и что добавим

### Уже реализовано
Мета-теги, Open Graph, Twitter Cards, Schema.org (Organization, WebSite, FAQPage, SoftwareApplication), sitemap.xml, robots.txt, hreflang.

### Что добавим

**1. Семантическая HTML-разметка всех секций**
Сейчас секции — это просто `<section>` без семантики. Добавим `aria-label` на каждую секцию, чтобы поисковики лучше понимали структуру страницы.

Файлы: `AboutSection.tsx`, `ProductsSection.tsx`, `ServicesSection.tsx`, `TargetAudienceSection.tsx`, `HowWeWorkSection.tsx`, `CasesSection.tsx`, `CalculatorSection.tsx`, `DemoSection.tsx`, `AdvantagesSection.tsx`, `ReviewsSection.tsx`, `FAQSection.tsx`, `ContactsSection.tsx`, `HeroSection.tsx`

**2. Расширение ключевых слов в `index.html`**
Добавим больше целевых запросов в meta keywords и description — длиннохвостые фразы на русском, по которым ищут ИИ-решения для бизнеса.

**3. Schema.org Service разметка**
Добавим JSON-LD типа `Service` для основных услуг компании (создание ИИ-агентов, интеграция, обучение) — это улучшит появление в расширенных сниппетах Google/Yandex.

**4. Атрибуты alt и aria-label на изображения и ссылки**
Добавим осмысленные `alt` и `aria-label` на логотипы, кнопки соцсетей в Footer и Header для лучшей индексации и доступности.

**5. Расширение `sitemap.xml`**
Добавим `lastmod` с актуальной датой.

### Файлы для изменений
- `index.html` — расширить keywords, добавить Service schema
- `public/sitemap.xml` — обновить lastmod
- `src/components/Header.tsx` — aria-label на навигацию
- `src/components/Footer.tsx` — aria-label на ссылки, alt на логотип
- `src/components/HeroSection.tsx` — aria-label на секцию
- Все секции (~12 файлов) — aria-label на `<section>`

