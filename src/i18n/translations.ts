export type Language = 'ru' | 'en';

export const translations = {
  // Header nav
  nav: {
    about: { ru: 'О компании', en: 'About' },
    services: { ru: 'Услуги', en: 'Services' },
    cases: { ru: 'Кейсы', en: 'Cases' },
    demo: { ru: 'Демо', en: 'Demo' },
    advantages: { ru: 'Преимущества', en: 'Advantages' },
    reviews: { ru: 'Отзывы', en: 'Reviews' },
    contacts: { ru: 'Контакты', en: 'Contacts' },
    orderDemo: { ru: 'Заказать демо', en: 'Order Demo' },
  },

  // Hero
  hero: {
    badge: { ru: 'Внедряем ИИ, который приносит деньги', en: 'We implement AI that makes money' },
    heading1: { ru: 'Разрабатываем и внедряем', en: 'We develop and deploy' },
    heading2: { ru: 'умных AI-агентов', en: 'smart AI agents' },
    heading3: { ru: 'для автоматизации бизнеса', en: 'for business automation' },
    subtitle: {
      ru: 'Не ради моды. Не ради «чтобы было». Либо ИИ увеличивает прибыль, либо сокращает издержки. Создаём и внедряем решения на базе искусственного интеллекта для бизнеса.',
      en: 'Not for trends. Not just to have it. Either AI increases profit or cuts costs. We build and implement AI solutions for business.',
    },
    cta1: { ru: 'Заказать демо', en: 'Order Demo' },
    cta2: { ru: 'Попробовать ИИ-агента', en: 'Try AI Agent' },
    stats: {
      clients: { ru: 'компаний-клиентов', en: 'client companies' },
      agents: { ru: 'ИИ-агентов', en: 'AI agents' },
      saas: { ru: 'SaaS-решений', en: 'SaaS products' },
      messages: { ru: 'сообщений', en: 'messages' },
    },
  },

  // Marquee
  marquee: {
    text: { ru: 'AI AGENTS • АВТОМАТИЗАЦИЯ • MACHINE LEARNING • НЕЙРОННЫЕ СЕТИ •', en: 'AI AGENTS • AUTOMATION • MACHINE LEARNING • NEURAL NETWORKS •' },
  },

  // About
  about: {
    title: { ru: 'Полный цикл: от создания до внедрения', en: 'Full cycle: from creation to deployment' },
    subtitle: {
      ru: 'Мы предлагаем полный цикл услуг по созданию, обучению и внедрению ИИ-агентов, которые упростят ваш бизнес и сделают его эффективнее. Снижение нагрузки на команду до 50%, рост производительности и экономию времени.',
      en: 'We offer a full cycle of services for creating, training and deploying AI agents that will simplify your business and make it more efficient. Reducing team workload by up to 50%, increasing productivity and saving time.',
    },
    steps: [
      {
        title: { ru: 'Анализ и проектирование', en: 'Analysis & Design' },
        description: {
          ru: 'Проводим аудит ваших текущих процессов, выявляя ключевые точки взаимодействия. На основе анализа проектируем логику ИИ-агента для максимальной эффективности.',
          en: 'We audit your current processes, identifying key interaction points. Based on the analysis, we design AI agent logic for maximum efficiency.',
        },
        stat: { ru: 'до 30%', en: 'up to 30%' },
        statLabel: { ru: 'экономия времени', en: 'time savings' },
      },
      {
        title: { ru: 'Разработка и настройка', en: 'Development & Setup' },
        description: {
          ru: 'Создаём ИИ-агента на базе современных моделей, интегрируя вашу базу знаний и бизнес-правила. Настраиваем персонализацию под специфику отрасли.',
          en: 'We create an AI agent based on modern models, integrating your knowledge base and business rules. We customize personalization for industry specifics.',
        },
        stat: { ru: '24/7', en: '24/7' },
        statLabel: { ru: 'автономная работа', en: 'autonomous operation' },
      },
      {
        title: { ru: 'Интеграция с системами', en: 'System Integration' },
        description: {
          ru: 'Подключаем агента к вашим CRM, мессенджерам, API и базам данных. Тестируем на безопасность и нагрузку.',
          en: 'We connect the agent to your CRM, messengers, APIs and databases. We test for security and load.',
        },
        stat: { ru: '100%', en: '100%' },
        statLabel: { ru: 'автоматизация', en: 'automation' },
      },
      {
        title: { ru: 'Обучение и адаптация', en: 'Training & Adaptation' },
        description: {
          ru: 'Обучаем агента на ваших реальных диалогах и данных. Адаптируем стиль общения под бренд с A/B-тестами.',
          en: 'We train the agent on your real dialogues and data. We adapt the communication style to your brand with A/B tests.',
        },
        stat: { ru: '+25%', en: '+25%' },
        statLabel: { ru: 'эффективность', en: 'efficiency' },
      },
      {
        title: { ru: 'Поддержка и оптимизация', en: 'Support & Optimization' },
        description: {
          ru: 'Мониторим метрики работы агента, внося обновления на основе аналитики. Оптимизируем для роста ROI.',
          en: 'We monitor agent performance metrics, making updates based on analytics. We optimize for ROI growth.',
        },
        stat: { ru: '∞', en: '∞' },
        statLabel: { ru: 'развитие', en: 'growth' },
      },
    ],
  },

  // Products
  products: {
    badge: { ru: 'Наши продукты', en: 'Our Products' },
    title: { ru: 'Готовые AI-решения', en: 'Ready-made AI Solutions' },
    subtitle: { ru: 'Веб-приложения на базе искусственного интеллекта, готовые к использованию', en: 'Web applications powered by artificial intelligence, ready to use' },
    customCta: { ru: 'Нужно индивидуальное решение?', en: 'Need a custom solution?' },
    contactUs: { ru: 'Свяжитесь с нами', en: 'Contact us' },
    items: [
      {
        name: { ru: 'AimSales', en: 'AimSales' },
        description: {
          ru: 'Интерактивная платформа для тренировки менеджеров в продажах. Практикуйтесь с AI-клиентами, получайте обратную связь и улучшайте результаты.',
          en: 'Interactive platform for training sales managers. Practice with AI clients, get feedback and improve results.',
        },
        features: {
          ru: ['AI-тренажёр', 'Обратная связь', 'Аналитика'],
          en: ['AI Trainer', 'Feedback', 'Analytics'],
        },
      },
      {
        name: { ru: 'AimVisual', en: 'AimVisual' },
        description: {
          ru: 'Профессиональная генерация изображений для бизнеса: одежда, авто, интерьер, товары, логотипы и многое другое — без сложных настроек.',
          en: 'Professional image generation for business: clothing, cars, interiors, products, logos and more — without complex setup.',
        },
        features: {
          ru: ['Генерация фото', 'Для бизнеса', 'Без настроек'],
          en: ['Photo Generation', 'For Business', 'No Setup'],
        },
      },
      {
        name: { ru: 'AimSeller', en: 'AimSeller' },
        description: {
          ru: 'Платформа для продавцов на маркетплейсах: отслеживайте продажи, анализируйте данные и получайте советы от встроенного ИИ, который знает всё о вашем личном кабинете.',
          en: 'Platform for marketplace sellers: track sales, analyze data and get advice from the built-in AI that knows everything about your account.',
        },
        features: {
          ru: ['Аналитика продаж', 'ИИ-помощник', 'Маркетплейсы'],
          en: ['Sales Analytics', 'AI Assistant', 'Marketplaces'],
        },
      },
      {
        name: { ru: 'AimAcademy', en: 'AimAcademy' },
        description: {
          ru: 'Платформа для обучения и адаптации сотрудников: руководители создают курсы из своих материалов, а сотрудники проходят обучение в удобном формате. Снижает нагрузку, ускоряет онбординг и сохраняет знания внутри компании.',
          en: 'Employee training and onboarding platform: managers create courses from their materials, and employees learn at their own pace. Reduces workload, speeds up onboarding and retains knowledge within the company.',
        },
        features: {
          ru: ['Создание курсов', 'Онбординг', 'База знаний'],
          en: ['Course Creation', 'Onboarding', 'Knowledge Base'],
        },
      },
    ],
  },

  // Services
  services: {
    title1: { ru: 'Наши ', en: 'Our ' },
    title2: { ru: 'направления', en: 'services' },
    subtitle: {
      ru: 'Четыре ключевых направления, где ИИ уже приносит реальные деньги и экономит ресурсы',
      en: 'Four key areas where AI already generates real money and saves resources',
    },
    order: { ru: 'Заказать', en: 'Order' },
    categories: [
      {
        title: { ru: 'Разработка ИИ-агентов для бизнеса', en: 'AI Agents for Business' },
        description: { ru: 'Умные помощники, которые общаются с клиентами, продают, консультируют и обрабатывают заявки — без перерывов и выходных', en: 'Smart assistants that communicate with clients, sell, consult and process requests — without breaks or days off' },
        items: [
          { ru: 'ИИ-продавцы — автоматические продажи через Telegram, WhatsApp, Avito, сайт и CRM', en: 'AI sellers — automatic sales via Telegram, WhatsApp, Avito, website and CRM' },
          { ru: 'ИИ для маркетплейсов — автоматические ответы на отзывы и вопросы на Wildberries и Ozon', en: 'AI for marketplaces — automatic responses to reviews and questions on Wildberries and Ozon' },
          { ru: 'ИИ-SMM — автопостинг с генерацией текста и фото в ВК, Instagram, Telegram, Дзен', en: 'AI-SMM — auto-posting with text and photo generation for VK, Instagram, Telegram, Dzen' },
          { ru: 'ИИ-консультант — мгновенные ответы на вопросы клиентов по вашей базе знаний', en: 'AI consultant — instant answers to client questions based on your knowledge base' },
          { ru: 'ИИ-аналитика — автоматические отчёты и анализ данных вместо ручной работы', en: 'AI analytics — automatic reports and data analysis instead of manual work' },
          { ru: 'HR-агент — автоматический подбор и первичное общение с кандидатами', en: 'HR agent — automatic recruitment and initial communication with candidates' },
        ],
        results: [
          { ru: 'Быстрые ответы клиентам → рост конверсии на 30–40%', en: 'Fast client responses → 30-40% conversion growth' },
          { ru: 'Экономия 30–50% времени на рутинных задачах', en: 'Saving 30-50% time on routine tasks' },
          { ru: 'Круглосуточная обработка заявок без пропусков', en: '24/7 request processing without gaps' },
        ],
        icon: 'bot',
      },
      {
        title: { ru: 'SaaS и веб-разработка с ИИ', en: 'SaaS & Web Development with AI' },
        description: { ru: 'Создаём веб-приложения, платформы и сервисы со встроенным искусственным интеллектом — от идеи до запуска', en: 'We build web apps, platforms and services with built-in AI — from idea to launch' },
        items: [
          { ru: 'SaaS-платформы — готовые онлайн-сервисы под ваш бизнес с подпиской', en: 'SaaS platforms — ready-made online services for your business with subscriptions' },
          { ru: 'Веб-приложения и CRM — удобные системы управления клиентами и процессами', en: 'Web apps and CRM — convenient client and process management systems' },
          { ru: 'Сервисы генерации — платформы для создания фото, видео и контента с ИИ', en: 'Generation services — platforms for creating photos, video and content with AI' },
          { ru: 'Telegram-боты и Mini App — автоматизация прямо в мессенджере', en: 'Telegram bots and Mini Apps — automation right in the messenger' },
          { ru: 'Корпоративные порталы — личные кабинеты, дашборды, внутренние инструменты', en: 'Corporate portals — dashboards, personal accounts, internal tools' },
          { ru: 'Лендинги и сайты — современные, быстрые, адаптивные', en: 'Landing pages and websites — modern, fast, responsive' },
        ],
        results: [
          { ru: 'Новый цифровой продукт как источник дохода', en: 'New digital product as a revenue source' },
          { ru: 'Автоматизация внутренних процессов компании', en: 'Company internal process automation' },
          { ru: 'Цифровой актив, который растёт в цене', en: 'Digital asset that grows in value' },
        ],
        icon: 'code',
      },
      {
        title: { ru: 'Генерация контента и AI-медиа', en: 'Content Generation & AI Media' },
        description: { ru: 'Профессиональный визуал, видео и тексты за минуты — дешевле фотостудии, быстрее фрилансера', en: 'Professional visuals, video and text in minutes — cheaper than a studio, faster than a freelancer' },
        items: [
          { ru: 'Фото для маркетинга — качественные изображения для рекламы и соцсетей', en: 'Marketing photos — quality images for ads and social media' },
          { ru: 'Генерация товаров — одежда на моделях, интерьеры, предметная съёмка без студии', en: 'Product generation — clothing on models, interiors, product shots without a studio' },
          { ru: 'Рекламные видео — ролики и ИИ-аватары для продвижения', en: 'Promotional videos — clips and AI avatars for promotion' },
          { ru: 'Озвучка и голос — синтез речи для видео, подкастов, обучения', en: 'Voiceover — speech synthesis for video, podcasts, training' },
          { ru: 'Презентации — автоматическое оформление слайдов и отчётов', en: 'Presentations — automatic slide and report design' },
          { ru: 'Логотипы и дизайн — айдентика и графика за часы, а не недели', en: 'Logos and design — identity and graphics in hours, not weeks' },
        ],
        results: [
          { ru: 'Контент в 5–10 раз дешевле классического продакшена', en: 'Content 5-10x cheaper than traditional production' },
          { ru: 'Быстрое тестирование гипотез без больших бюджетов', en: 'Fast hypothesis testing without big budgets' },
          { ru: 'Рост конверсии за счёт качественного визуала', en: 'Conversion growth through quality visuals' },
        ],
        icon: 'image',
      },
      {
        title: { ru: 'Обучение искусственному интеллекту', en: 'AI Training & Education' },
        description: { ru: 'Научим вашу команду эффективно работать с ИИ — от основ до создания собственных агентов и сервисов', en: 'We will teach your team to work effectively with AI — from basics to building your own agents and services' },
        items: [
          { ru: 'Основы ИИ — что такое нейросети, какие инструменты использовать и зачем', en: 'AI basics — what neural networks are, what tools to use and why' },
          { ru: 'Промпт-инжиниринг — как правильно формулировать запросы и ускорить работу в 2–3 раза', en: 'Prompt engineering — how to formulate queries correctly and boost productivity 2-3x' },
          { ru: 'Создание ИИ-агентов — от простого бота до полноценного помощника с CRM-интеграцией', en: 'Building AI agents — from simple bot to full assistant with CRM integration' },
          { ru: 'Архитектура AI-решений — как проектировать сложные ИИ-системы', en: 'AI solution architecture — how to design complex AI systems' },
          { ru: 'Разработка AI-сервисов — создание собственных продуктов на базе ИИ', en: 'Building AI services — creating your own AI-powered products' },
          { ru: 'Форматы — индивидуальное, групповое или корпоративное обучение', en: 'Formats — individual, group or corporate training' },
        ],
        results: [
          { ru: 'Команда самостоятельно использует ИИ в ежедневной работе', en: 'Team independently uses AI in daily work' },
          { ru: 'Снижение затрат на подрядчиков и внешние сервисы', en: 'Reduced costs for contractors and external services' },
          { ru: 'Ощутимый рост продуктивности каждого сотрудника', en: 'Tangible productivity growth for each employee' },
        ],
        icon: 'graduation',
      },
    ],
    // Keep old items for backward compatibility
    items: [
      { title: { ru: 'Агент-продавец', en: 'Sales Agent' }, description: { ru: 'Предлагает товары и услуги, информирует о ценах и акциях, помогает оформить заказ, передает заявку менеджеру.', en: 'Offers products and services, informs about prices and promotions, helps place an order, transfers the request to a manager.' } },
      { title: { ru: 'Агент-консультант', en: 'Consultant Agent' }, description: { ru: 'Отвечает на вопросы клиентов, предоставляет дополнительную информацию о продуктах и услугах.', en: 'Answers customer questions, provides additional information about products and services.' } },
      { title: { ru: 'Агент-SMM', en: 'SMM Agent' }, description: { ru: 'Взаимодействует с клиентами в социальных сетях, пишет посты, генерирует фото, выкладывает посты в соц.сети.', en: 'Interacts with clients on social media, writes posts, generates photos, publishes posts on social networks.' } },
      { title: { ru: 'Агент-менеджер', en: 'Manager Agent' }, description: { ru: 'Автоматизирует рутинные задачи по заполнению договоров, генерирует документы, счета, акты.', en: 'Automates routine tasks for filling out contracts, generates documents, invoices, acts.' } },
      { title: { ru: 'Агент-ассистент', en: 'Assistant Agent' }, description: { ru: 'Планирует встречи, напоминает о задачах, отправляет уведомления и выполняет административные функции.', en: 'Schedules meetings, reminds about tasks, sends notifications and performs administrative functions.' } },
      { title: { ru: 'Агент-методист', en: 'Training Agent' }, description: { ru: 'Помогает в обучении сотрудников, отвечает и предоставляет информацию о компании по запросу.', en: 'Helps in training employees, answers and provides company information on request.' } },
    ],
  },

  // Cases
  cases: {
    title1: { ru: 'Реальные проекты ', en: 'Real projects by ' },
    title2: { ru: 'Aimatic', en: 'Aimatic' },
    subtitle: {
      ru: 'Мы не говорим о будущем — мы создаём его. Каждый кейс — это реальный проект, где ИИ уже заменяет рутину и ускоряет продажи',
      en: 'We don\'t talk about the future — we create it. Each case is a real project where AI already replaces routine and accelerates sales',
    },
    details: { ru: 'Подробнее', en: 'Learn more' },
    items: [
      { title: { ru: 'Интеллектуальный консультант по продажам для магазина Apple', en: 'Intelligent sales consultant for Apple store' }, description: { ru: 'Автоматизированный консультант интегрирован в Avito, Telegram и WhatsApp, предоставляет клиентам рекомендации по моделям, характеристикам и акциям.', en: 'Automated consultant integrated into Avito, Telegram and WhatsApp, provides clients with recommendations on models, specifications and promotions.' }, result: { ru: '+40% конверсия', en: '+40% conversion' } },
      { title: { ru: 'Автоматизированный SMM-координатор для мебельной компании', en: 'Automated SMM coordinator for furniture company' }, description: { ru: 'ИИ полностью автоматизирует работу с контентом: пишет посты, генерирует фото и видео, публикует их в Instagram, ВКонтакте и Telegram.', en: 'AI fully automates content work: writes posts, generates photos and videos, publishes them on Instagram, VKontakte and Telegram.' }, result: { ru: '0 часов SMM работы', en: '0 hours SMM work' } },
      { title: { ru: 'Цифровой администратор салона красоты', en: 'Digital beauty salon administrator' }, description: { ru: 'ИИ-администратор консультирует клиентов по услугам и ценам, осуществляет онлайн-запись, отправляет напоминания через чат.', en: 'AI administrator consults clients on services and prices, makes online bookings, sends reminders via chat.' }, result: { ru: '-70% нагрузка на персонал', en: '-70% staff workload' } },
      { title: { ru: 'Интеллектуальный менеджер маркетплейсов', en: 'Intelligent marketplace manager' }, description: { ru: 'Решение анализирует все входящие отзывы и вопросы покупателей на Ozon и Wildberries, формирует ответы автоматически.', en: 'The solution analyzes all incoming reviews and buyer questions on Ozon and Wildberries, generates responses automatically.' }, result: { ru: '5★ рейтинг товаров', en: '5★ product rating' } },
      { title: { ru: 'Интерактивный помощник клининговых специалистов', en: 'Interactive cleaning specialist assistant' }, description: { ru: 'Многофункциональная система с визуальным анализом фото загрязнений, подбором химии и контролем качества уборки.', en: 'Multifunctional system with visual analysis of contamination photos, chemistry selection and cleaning quality control.' }, result: { ru: '+50% качество работ', en: '+50% work quality' } },
      { title: { ru: 'Интеллектуальный менеджер продаж для установки окон', en: 'Intelligent sales manager for window installation' }, description: { ru: 'Решение объединяет WhatsApp, Telegram, сайт, Avito и Bitrix24, консультирует клиентов и оформляет лиды.', en: 'The solution unites WhatsApp, Telegram, website, Avito and Bitrix24, consults clients and processes leads.' }, result: { ru: '0 потерянных заявок', en: '0 lost leads' } },
      { title: { ru: 'Аналитическая система для сети магазинов одежды', en: 'Analytics system for clothing store chain' }, description: { ru: 'ИИ-модуль анализирует данные по 30 торговым точкам и 50 показателям, формирует отчёт за 2 минуты.', en: 'AI module analyzes data across 30 retail locations and 50 metrics, generates a report in 2 minutes.' }, result: { ru: '2 мин вместо 2 часов', en: '2 min instead of 2 hours' } },
      { title: { ru: 'Автоматизированный HR-координатор', en: 'Automated HR coordinator' }, description: { ru: 'Система ведёт коммуникацию с кандидатами через WhatsApp, собирает данные и планирует собеседования.', en: 'The system communicates with candidates via WhatsApp, collects data and schedules interviews.' }, result: { ru: '1000 контактов/день', en: '1000 contacts/day' } },
    ],
  },

  // Demo
  demo: {
    badge: { ru: 'Попробуйте прямо сейчас', en: 'Try it right now' },
    title1: { ru: 'Попробуйте наших ', en: 'Try our ' },
    title2: { ru: 'ИИ-агентов', en: 'AI agents' },
    title3: { ru: ' в действии', en: ' in action' },
    subtitle: {
      ru: 'Пообщайтесь с демонстрационными ИИ-агентами и оцените их возможности в реальном времени. В вашем проекте мы полностью настроим под ваш бизнес.',
      en: 'Chat with demo AI agents and evaluate their capabilities in real time. In your project, we will fully customize for your business.',
    },
    chat: { ru: 'Пообщаться', en: 'Chat' },
    items: [
      { title: { ru: 'Продавец красок', en: 'Paint Seller' }, description: { ru: 'Получите профессиональные рекомендации по выбору красок для любых поверхностей.', en: 'Get professional recommendations for choosing paints for any surfaces.' } },
      { title: { ru: 'Менеджер автосервиса', en: 'Auto Service Manager' }, description: { ru: 'ИИ-агент быстро оформит запись на диагностику или ремонт.', en: 'AI agent will quickly schedule diagnostics or repairs.' } },
      { title: { ru: 'Продавец цветов', en: 'Flower Seller' }, description: { ru: 'Поможет выбрать идеальный букет для любого повода.', en: 'Will help choose the perfect bouquet for any occasion.' } },
      { title: { ru: 'Продавец Apple техники', en: 'Apple Tech Seller' }, description: { ru: 'Экспертные рекомендации по подбору Apple-устройств.', en: 'Expert recommendations for choosing Apple devices.' } },
      { title: { ru: 'Администратор фитнес клуба', en: 'Fitness Club Admin' }, description: { ru: 'Подберите абонемент и запишитесь на бесплатное пробное занятие.', en: 'Choose a membership and sign up for a free trial class.' } },
      { title: { ru: 'Администратор салона красоты', en: 'Beauty Salon Admin' }, description: { ru: 'Запишитесь на процедуру к подходящему мастеру.', en: 'Book a procedure with the right specialist.' } },
      { title: { ru: 'Продавец автохимии', en: 'Auto Chemistry Seller' }, description: { ru: 'Подбор автохимии и аксессуаров под вашу модель автомобиля.', en: 'Selection of auto chemistry and accessories for your car model.' } },
      { title: { ru: 'Менеджер клининга', en: 'Cleaning Manager' }, description: { ru: 'Закажите профессиональную уборку за 60 секунд.', en: 'Order professional cleaning in 60 seconds.' } },
      { title: { ru: 'Менеджер IT услуг', en: 'IT Services Manager' }, description: { ru: 'Консультация по IT-решениям и автоматизации бизнеса.', en: 'Consultation on IT solutions and business automation.' } },
    ],
  },

  // Advantages
  advantages: {
    title: { ru: 'Преимущества', en: 'Advantages' },
    subtitle: { ru: 'Круглосуточная работа, больше продаж, снижение расходов — всё это благодаря ИИ-агентам', en: '24/7 operation, more sales, reduced costs — all thanks to AI agents' },
    whyUsTitle: { ru: 'Почему выбирают нас', en: 'Why Choose Us' },
    whyUsSubtitle: { ru: 'Мы — технические специалисты, а не инфобизнес', en: 'We are technical specialists, not infobusiness' },
    guaranteesTitle: { ru: 'Типичные результаты наших клиентов', en: 'Typical Client Results' },
    guaranteesSubtitle: { ru: 'Реальные цифры из реальных проектов', en: 'Real numbers from real projects' },
    items: [
      { title: { ru: 'Круглосуточная поддержка', en: '24/7 Support' }, description: { ru: 'ИИ-агенты работают 24/7, обрабатывая задачи без перерывов и минимизируя упущенные возможности.', en: 'AI agents work 24/7, processing tasks without breaks and minimizing missed opportunities.' } },
      { title: { ru: 'Повышение конверсии', en: 'Conversion Boost' }, description: { ru: 'Агенты персонализируют рекомендации и анализируют данные в реальном времени, увеличивая продажи на 15–30%.', en: 'Agents personalize recommendations and analyze data in real time, increasing sales by 15-30%.' } },
      { title: { ru: 'Экономия ресурсов', en: 'Resource Savings' }, description: { ru: 'Автоматизация рутины снижает нагрузку на команду до 50%, освобождая время для стратегии.', en: 'Routine automation reduces team workload by up to 50%, freeing time for strategy.' } },
      { title: { ru: 'Гибкая адаптация', en: 'Flexible Adaptation' }, description: { ru: 'Агенты настраиваются под любые задачи — SMM, аналитика, управление — с интеграцией в системы.', en: 'Agents are customized for any task — SMM, analytics, management — with system integration.' } },
      { title: { ru: 'Глубокий анализ данных', en: 'Deep Data Analysis' }, description: { ru: 'Агенты проверяют информацию сразу, выдавая отчёты и советы по улучшению работы.', en: 'Agents check information instantly, providing reports and improvement recommendations.' } },
      { title: { ru: 'Масштабируемость', en: 'Scalability' }, description: { ru: 'Легко увеличивайте мощность агентов под рост бизнеса без дополнительных затрат на персонал.', en: 'Easily scale agent capacity for business growth without additional staff costs.' } },
    ],
    whyUs: [
      { title: { ru: 'Считаем экономику проекта', en: 'We calculate project economics' }, description: { ru: 'Каждое решение обосновано цифрами — ROI, окупаемость, реальная экономия.', en: 'Every solution is backed by numbers — ROI, payback, real savings.' } },
      { title: { ru: 'Не обещаем «магии»', en: 'No "magic" promises' }, description: { ru: 'Мы внедряем систему, а не продаём мечту. Конкретные результаты в конкретные сроки.', en: 'We implement systems, not sell dreams. Concrete results in concrete timeframes.' } },
      { title: { ru: 'Делаем MVP и масштабируем', en: 'We build MVP and scale' }, description: { ru: 'Начинаем с быстрого прототипа, тестируем и масштабируем только то, что работает.', en: 'Start with a quick prototype, test and scale only what works.' } },
      { title: { ru: 'Сопровождаем и обучаем', en: 'We support and train' }, description: { ru: 'Не бросаем после запуска — обучаем команду и поддерживаем решение.', en: 'We don\'t abandon after launch — we train the team and support the solution.' } },
      { title: { ru: 'Технические специалисты', en: 'Technical specialists' }, description: { ru: 'Мы — разработчики и инженеры, а не инфобизнес. Работаем с кодом, а не с хайпом.', en: 'We are developers and engineers, not infobusiness. We work with code, not hype.' } },
    ],
    guarantees: [
      { title: { ru: '+15–40% конверсия', en: '+15-40% conversion' }, description: { ru: 'Рост конверсии благодаря мгновенным персонализированным ответам и круглосуточной обработке заявок.', en: 'Conversion growth through instant personalized responses and 24/7 request processing.' } },
      { title: { ru: '-30–50% рутины', en: '-30-50% routine' }, description: { ru: 'Сокращение ручной рутинной работы за счёт автоматизации повторяющихся бизнес-процессов.', en: 'Reduction of manual routine work through automation of repetitive business processes.' } },
      { title: { ru: 'Окупаемость 1–3 мес', en: 'Payback 1-3 months' }, description: { ru: 'В зависимости от ниши, инвестиции окупаются за 1–3 месяца.', en: 'Depending on the niche, investments pay back in 1-3 months.' } },
      { title: { ru: '×5–10 скорость', en: '×5-10 speed' }, description: { ru: 'Ускорение обработки заявок в 5–10 раз по сравнению с ручной обработкой.', en: '5-10x faster request processing compared to manual handling.' } },
    ],
  },

  // Reviews
  reviews: {
    title1: { ru: 'Отзывы ', en: 'Reviews from ' },
    title2: { ru: 'наших клиентов', en: 'our clients' },
    items: [
      { company: 'CleanPro', project: { ru: 'Внедрение AI-помощника', en: 'AI Assistant Integration' }, text: { ru: 'Внедрение ИИ-помощника в нашу клининговую компанию превзошло все ожидания. Данный продукт был идеально адаптирован под наши потребности: сотрудники теперь тратят меньше времени на поиск информации.', en: 'The integration of the AI assistant into our cleaning company exceeded all expectations. The product was perfectly adapted to our needs: employees now spend less time searching for information.' } },
      { company: 'TravelMarket', project: { ru: 'Внедрение AI-SMM', en: 'AI-SMM Integration' }, text: { ru: 'Существенно сократилось время на написание и публикацию постов сразу в 3 соц.сети. Тексты получаются быстрее, точнее и в нужном стиле.', en: 'Time for writing and publishing posts to 3 social networks at once has been significantly reduced. Texts are produced faster, more accurately and in the right style.' } },
      { company: 'ООО "СИБТЭ"', project: { ru: 'Внедрение AI-продавца', en: 'AI Seller Integration' }, text: { ru: 'Внедрили AI-менеджера для общения с клиентами на авито, сайт и Max. Конверсия выросла, ответы стали мгновенными, менеджеры тратят на 80% меньше времени.', en: 'We integrated an AI manager for customer communication on Avito, website and Max. Conversion increased, responses became instant, managers spend 80% less time.' } },
    ],
  },

  // FAQ
  faq: {
    title: { ru: 'Часто задаваемые вопросы', en: 'Frequently Asked Questions' },
    subtitle: { ru: 'Ответы на самые частые вопросы о внедрении искусственного интеллекта в бизнес', en: 'Answers to the most common questions about implementing AI in business' },
    items: [
      { question: { ru: 'Сколько стоит внедрение искусственного интеллекта в бизнес?', en: 'How much does it cost to implement AI in business?' }, answer: { ru: 'Стоимость зависит от сложности и числа функций — базовые решения начинаются от 30 000 ₽, а комплексные системы могут стоить до 150 000 ₽.', en: 'The cost depends on complexity and number of features — basic solutions start from $350, and complex systems can cost up to $1,800.' } },
      { question: { ru: 'Сколько времени занимает разработка и настройка?', en: 'How long does development and setup take?' }, answer: { ru: 'В среднем от 3 дней до 1 месяца — всё зависит от масштабов и количества интеграций.', en: 'On average from 3 days to 1 month — it all depends on the scale and number of integrations.' } },
      { question: { ru: 'Безопасно ли использовать ИИ с клиентскими данными?', en: 'Is it safe to use AI with client data?' }, answer: { ru: 'Да, мы шифруем все персональные данные, а при необходимости можем разработать и подключить ИИ к вашему локальному серверу — без передачи информации в облако.', en: 'Yes, we encrypt all personal data, and if necessary, we can develop and connect AI to your local server — without transferring information to the cloud.' } },
      { question: { ru: 'Какие задачи можно автоматизировать с помощью ИИ?', en: 'What tasks can be automated with AI?' }, answer: { ru: 'ИИ берёт на себя продажи, консультации, обработку заявок, аналитику, работу с CRM и другие рутинные процессы.', en: 'AI handles sales, consultations, request processing, analytics, CRM management and other routine processes.' } },
      { question: { ru: 'Нужны ли специальные знания для работы с ИИ?', en: 'Do I need special knowledge to work with AI?' }, answer: { ru: 'Нет, всё настраивается под ваш бизнес, а управление простое — через привычные мессенджеры/админ панель или CRM.', en: 'No, everything is customized for your business, and management is simple — through familiar messengers/admin panel or CRM.' } },
      { question: { ru: 'Как понять, что моему бизнесу действительно нужен искусственный интеллект?', en: 'How do I know if my business really needs AI?' }, answer: { ru: 'Если вы тратите много времени на рутину, теряете заявки или хотите масштабироваться без увеличения штата — значит, пора внедрять ИИ.', en: 'If you spend a lot of time on routine, lose leads or want to scale without increasing staff — it\'s time to implement AI.' } },
    ],
  },

  // Contacts
  contacts: {
    title: { ru: 'Свяжитесь с нами', en: 'Contact Us' },
    subtitle: { ru: 'Свяжитесь с нами для обсуждения вашего проекта по внедрению ИИ-агентов', en: 'Contact us to discuss your AI agent implementation project' },
    phone: { ru: 'Телефон', en: 'Phone' },
    email: { ru: 'Email', en: 'Email' },
    address: { ru: 'Адрес', en: 'Address' },
    addressValue: { ru: 'г. Новосибирск', en: 'Novosibirsk, Russia' },
    formTitle: { ru: 'Получить консультацию', en: 'Get Consultation' },
    nameLabel: { ru: 'Ваше имя', en: 'Your Name' },
    namePlaceholder: { ru: 'Как вас зовут?', en: 'What is your name?' },
    phoneLabel: { ru: 'Телефон', en: 'Phone' },
    phonePlaceholder: { ru: '+7 (___) ___-__-__', en: '+1 (___) ___-____' },
    messageLabel: { ru: 'Сообщение', en: 'Message' },
    messagePlaceholder: { ru: 'Расскажите о вашем проекте', en: 'Tell us about your project' },
    submit: { ru: 'Отправить заявку', en: 'Submit Request' },
    submitting: { ru: 'Отправка...', en: 'Sending...' },
    consent: { ru: 'Нажимая на кнопку, вы даете согласие на обработку персональных данных', en: 'By clicking the button, you consent to the processing of personal data' },
    successToast: { ru: 'Заявка отправлена! Мы свяжемся с вами в ближайшее время.', en: 'Request sent! We will contact you shortly.' },
    errorToast: { ru: 'Произошла ошибка. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую.', en: 'An error occurred. Please try again later or contact us directly.' },
    successTitle: { ru: 'Заявка отправлена!', en: 'Request sent!' },
    successMessage: { ru: 'Наш менеджер скоро свяжется с вами. Спасибо!', en: 'Our manager will contact you shortly. Thank you!' },
  },

  // Calculator
  calculator: {
    badge: { ru: '💰 Прозрачное ценообразование', en: '💰 Transparent Pricing' },
    title: { ru: 'Рассчитайте стоимость вашего проекта', en: 'Calculate the cost of your project' },
    subtitle: { ru: 'Выберите нужные функции и получите предварительную оценку стоимости разработки ИИ-агента для вашего бизнеса', en: 'Select the features you need and get a preliminary estimate of AI agent development costs for your business' },
    calcTitle: { ru: 'Калькулятор стоимости ИИ-решений', en: 'AI Solutions Cost Calculator' },
    discountLabel: { ru: '🔥 Скидка 10% при заказе:', en: '🔥 10% discount when ordering:' },
    reset: { ru: 'Сбросить', en: 'Reset' },
    checkFeatures: { ru: 'Отметьте нужные функции галочками', en: 'Check the features you need' },
    functions: { ru: 'функций', en: 'features' },
    // ProjectSettings
    bizParams: { ru: 'Параметры вашего бизнеса', en: 'Your business parameters' },
    bizParamsTooltip: { ru: 'Укажите параметры для расчёта экономии и выгоды от внедрения ИИ-ассистента', en: 'Specify parameters to calculate savings and benefits from AI assistant implementation' },
    managers: { ru: '👥 Менеджеров в команде', en: '👥 Team managers' },
    leads: { ru: '📩 Заявок в месяц', en: '📩 Leads per month' },
    avgCheck: { ru: '💰 Средний чек', en: '💰 Average check' },
    // ResultsPanel
    selectFeatures: { ru: 'Выберите функции слева', en: 'Select features on the left' },
    selectFeaturesHint: { ru: 'Отметьте галочками нужные возможности, и мы рассчитаем стоимость', en: 'Check the capabilities you need and we will calculate the cost' },
    approxCost: { ru: 'Приблизительная стоимость', en: 'Approximate cost' },
    discountApplied: { ru: 'Скидка 10% применена!', en: '10% discount applied!' },
    orMonthly: { ru: 'или', en: 'or' },
    perMonth: { ru: '₽/мес', en: '$/mo' },
    devHours: { ru: 'часов разработки', en: 'development hours' },
    managersLabel: { ru: 'менеджеров', en: 'managers' },
    yearlyBenefit: { ru: 'Ваша выгода за год', en: 'Your yearly benefit' },
    savingsOn: { ru: '💼 Экономия на', en: '💼 Savings on' },
    managersWord: { ru: 'менеджерах', en: 'managers' },
    conversionRevenue: { ru: '📈 Доход от конверсии +20%', en: '📈 Revenue from +20% conversion' },
    totalBenefitYear: { ru: 'Итого выгода/год', en: 'Total benefit/year' },
    payback: { ru: '⚡ Окупаемость за', en: '⚡ Payback in' },
    months: { ru: 'мес.', en: 'mo.' },
    breakdown: { ru: '📊 Детализация расчёта', en: '📊 Calculation breakdown' },
    noDiscount: { ru: 'Без скидки', en: 'Without discount' },
    withDiscount: { ru: 'Со скидкой 10%', en: 'With 10% discount' },
    orderDev: { ru: '🚀 Заказать разработку', en: '🚀 Order development' },
    baseDev: { ru: '⚙️ Базовая разработка', en: '⚙️ Base development' },
    complexity: {
      typical: { ru: 'Типовой', en: 'Typical' },
      medium: { ru: 'Средний', en: 'Medium' },
      complex: { ru: 'Сложный', en: 'Complex' },
      high: { ru: 'Высокий', en: 'High' },
    },
  },

  // Exit popup
  exitPopup: {
    title: { ru: 'Подождите! 🎁', en: 'Wait! 🎁' },
    subtitle1: { ru: 'Получите ', en: 'Get a ' },
    subtitle2: { ru: 'бесплатную консультацию', en: 'free consultation' },
    subtitle3: { ru: ' по внедрению AI-агентов в ваш бизнес', en: ' on implementing AI agents in your business' },
    bonus1: { ru: 'Анализ ваших бизнес-процессов', en: 'Analysis of your business processes' },
    bonus2: { ru: 'Рекомендации по автоматизации', en: 'Automation recommendations' },
    bonus3: { ru: 'Расчёт экономии времени и бюджета', en: 'Time and budget savings calculation' },
    cta: { ru: 'Получить консультацию', en: 'Get Consultation' },
    dismiss: { ru: 'Нет, спасибо', en: 'No, thanks' },
  },

  // Footer
  footer: {
    copyright: { ru: '© 2025 Aimatic. Все права защищены.', en: '© 2025 Aimatic. All rights reserved.' },
  },

  // Pricing data translations
  pricingData: {
    categories: {
      messengers: { ru: 'Мессенджеры и каналы связи', en: 'Messengers & Channels' },
      marketplaces: { ru: 'Маркетплейсы', en: 'Marketplaces' },
      crm: { ru: 'CRM и базы данных', en: 'CRM & Databases' },
      files: { ru: 'Работа с файлами', en: 'File Processing' },
      content: { ru: 'Генерация контента', en: 'Content Generation' },
      sales: { ru: 'Продажи и консультации', en: 'Sales & Consulting' },
      automation: { ru: 'Автоматизация', en: 'Automation' },
      advanced: { ru: 'Продвинутые функции', en: 'Advanced Features' },
      extra: { ru: 'Дополнительный функционал', en: 'Extra Features' },
    },
    baseDev: {
      analysis: { ru: 'Анализ и сбор требований', en: 'Analysis & Requirements' },
      specification: { ru: 'Составление ТЗ', en: 'Specification Writing' },
      logic: { ru: 'Проектирование логики', en: 'Logic Design' },
      core: { ru: 'Разработка ядра', en: 'Core Development' },
      prompts: { ru: 'Написание промптов', en: 'Prompt Writing' },
      training: { ru: 'Первичное обучение', en: 'Initial Training' },
      model: { ru: 'Подбор модели', en: 'Model Selection' },
      testing: { ru: 'Тестирование', en: 'Testing' },
      corrections: { ru: 'Корректировка', en: 'Corrections' },
      finalTesting: { ru: 'Финальное тестирование', en: 'Final Testing' },
    },
    items: {
      telegram: { name: { ru: 'Telegram', en: 'Telegram' }, description: { ru: 'Интеграция с Telegram-ботом для общения с клиентами', en: 'Telegram bot integration for customer communication' } },
      whatsapp: { name: { ru: 'WhatsApp', en: 'WhatsApp' }, description: { ru: 'Подключение WhatsApp Business для автоматизации переписки', en: 'WhatsApp Business connection for messaging automation' } },
      vk: { name: { ru: 'ВКонтакте', en: 'VKontakte' }, description: { ru: 'Интеграция с сообществом ВКонтакте', en: 'VKontakte community integration' } },
      instagram: { name: { ru: 'Instagram', en: 'Instagram' }, description: { ru: 'Автоматизация ответов в Instagram', en: 'Instagram response automation' } },
      website: { name: { ru: 'Виджет на сайт', en: 'Website Widget' }, description: { ru: 'Чат-виджет для вашего сайта', en: 'Chat widget for your website' } },
      avito: { name: { ru: 'Авито', en: 'Avito' }, description: { ru: 'Автоматические ответы на Авито', en: 'Automatic replies on Avito' } },
      ozon: { name: { ru: 'Ozon', en: 'Ozon' }, description: { ru: 'Интеграция с Ozon для работы с заказами и отзывами', en: 'Ozon integration for orders and reviews' } },
      wildberries: { name: { ru: 'Wildberries', en: 'Wildberries' }, description: { ru: 'Автоматизация работы с WB', en: 'Wildberries workflow automation' } },
      reviews: { name: { ru: 'Автоответы на отзывы', en: 'Auto-replies to Reviews' }, description: { ru: 'ИИ отвечает на отзывы клиентов', en: 'AI responds to customer reviews' } },
      questions: { name: { ru: 'Автоответы на вопросы', en: 'Auto-replies to Questions' }, description: { ru: 'ИИ отвечает на вопросы покупателей', en: 'AI answers buyer questions' } },
      bitrix: { name: { ru: 'Битрикс24', en: 'Bitrix24' }, description: { ru: 'Интеграция с Битрикс24: лиды, сделки, контакты', en: 'Bitrix24 integration: leads, deals, contacts' } },
      amocrm: { name: { ru: 'AmoCRM', en: 'AmoCRM' }, description: { ru: 'Интеграция с AmoCRM для управления продажами', en: 'AmoCRM integration for sales management' } },
      'google-sheets': { name: { ru: 'Google Таблицы', en: 'Google Sheets' }, description: { ru: 'Запись данных в Google Sheets', en: 'Data entry to Google Sheets' } },
      airtable: { name: { ru: 'Airtable', en: 'Airtable' }, description: { ru: 'Работа с базой данных Airtable', en: 'Airtable database management' } },
      'custom-db': { name: { ru: 'Своя база данных', en: 'Custom Database' }, description: { ru: 'Создание и настройка собственной БД', en: 'Custom database creation and setup' } },
      'send-files': { name: { ru: 'Отправка файлов', en: 'File Sending' }, description: { ru: 'ИИ отправляет документы, прайсы, КП клиентам', en: 'AI sends documents, price lists, proposals to clients' } },
      'photo-analysis': { name: { ru: 'Анализ фото', en: 'Photo Analysis' }, description: { ru: 'Распознавание и анализ изображений', en: 'Image recognition and analysis' } },
      'document-recognition': { name: { ru: 'Распознавание документов', en: 'Document Recognition' }, description: { ru: 'OCR и извлечение данных из документов', en: 'OCR and data extraction from documents' } },
      'excel-reports': { name: { ru: 'Excel-отчёты', en: 'Excel Reports' }, description: { ru: 'Генерация отчётов в формате Excel', en: 'Excel format report generation' } },
      'pdf-generation': { name: { ru: 'Генерация PDF', en: 'PDF Generation' }, description: { ru: 'Создание PDF-документов и счетов', en: 'PDF document and invoice creation' } },
      'generate-kp': { name: { ru: 'Создание КП и договоров', en: 'Proposals & Contracts' }, description: { ru: 'Автоматическая генерация коммерческих предложений', en: 'Automatic commercial proposal generation' } },
      'generate-images': { name: { ru: 'Генерация изображений', en: 'Image Generation' }, description: { ru: 'Создание картинок с помощью ИИ', en: 'AI-powered image creation' } },
      'generate-video': { name: { ru: 'Генерация видео', en: 'Video Generation' }, description: { ru: 'Создание видео-контента', en: 'Video content creation' } },
      autoposting: { name: { ru: 'Автопостинг в соцсети', en: 'Social Media Autoposting' }, description: { ru: 'Автоматическая публикация контента', en: 'Automatic content publishing' } },
      'seo-texts': { name: { ru: 'SEO-тексты', en: 'SEO Texts' }, description: { ru: 'Генерация оптимизированных текстов для сайта', en: 'Optimized website text generation' } },
      'knowledge-base': { name: { ru: 'Консультации по базе знаний', en: 'Knowledge Base Consulting' }, description: { ru: 'ИИ отвечает на вопросы из вашей базы знаний', en: 'AI answers questions from your knowledge base' } },
      'sales-script': { name: { ru: 'Работа по скрипту продаж', en: 'Sales Script Execution' }, description: { ru: 'Ведение диалога по вашему сценарию', en: 'Dialog management following your scenario' } },
      calculator: { name: { ru: 'Расчёт стоимости', en: 'Cost Calculation' }, description: { ru: 'ИИ рассчитывает цену по вашему прайсу', en: 'AI calculates price based on your price list' } },
      'lead-form': { name: { ru: 'Сбор заявок', en: 'Lead Collection' }, description: { ru: 'Отправка лидов в Telegram, CRM или таблицу', en: 'Sending leads to Telegram, CRM or spreadsheet' } },
      upsell: { name: { ru: 'Допродажи', en: 'Upselling' }, description: { ru: 'ИИ предлагает дополнительные товары и услуги', en: 'AI suggests additional products and services' } },
      reminders: { name: { ru: 'Напоминания клиентам', en: 'Client Reminders' }, description: { ru: 'Автоматические напоминания о встречах, оплатах', en: 'Automatic reminders for meetings, payments' } },
      notifications: { name: { ru: 'Уведомления менеджерам', en: 'Manager Notifications' }, description: { ru: 'Оповещения команды о новых заявках', en: 'Team notifications about new requests' } },
      payments: { name: { ru: 'Приём платежей', en: 'Payment Processing' }, description: { ru: 'Интеграция с платёжными системами', en: 'Payment system integration' } },
      workflows: { name: { ru: 'Автосценарии', en: 'Auto Workflows' }, description: { ru: 'Создание автоматических цепочек действий', en: 'Automatic action chain creation' } },
      'task-management': { name: { ru: 'Управление задачами', en: 'Task Management' }, description: { ru: 'Автоматическое создание и назначение задач', en: 'Automatic task creation and assignment' } },
      'multi-language': { name: { ru: 'Мультиязычность', en: 'Multi-language' }, description: { ru: 'ИИ общается на нескольких языках', en: 'AI communicates in multiple languages' } },
      analytics: { name: { ru: 'Аналитика диалогов', en: 'Dialog Analytics' }, description: { ru: 'Анализ и статистика общения', en: 'Communication analysis and statistics' } },
      'self-learning': { name: { ru: 'Самообучение', en: 'Self-learning' }, description: { ru: 'ИИ улучшается на основе диалогов', en: 'AI improves based on conversations' } },
      'multi-agent': { name: { ru: 'Несколько ИИ-агентов', en: 'Multi-agent System' }, description: { ru: 'Система из нескольких взаимодействующих агентов', en: 'System of multiple interacting agents' } },
      sentiment: { name: { ru: 'Анализ настроений', en: 'Sentiment Analysis' }, description: { ru: 'Определение эмоций клиента в диалоге', en: 'Client emotion detection in conversations' } },
      'api-integration': { name: { ru: 'Интеграция по API', en: 'API Integration' }, description: { ru: 'Подключение сторонних сервисов через API', en: 'Third-party service connection via API' } },
      'custom-code': { name: { ru: 'Кастомный код', en: 'Custom Code' }, description: { ru: 'Написание индивидуального кода под задачи', en: 'Custom code for specific tasks' } },
      'llm-models': { name: { ru: 'Подключение LLM-моделей', en: 'LLM Model Integration' }, description: { ru: 'Интеграция GPT, Claude и других моделей', en: 'GPT, Claude and other model integration' } },
      'document-automation': { name: { ru: 'Автоматизация документооборота', en: 'Document Automation' }, description: { ru: 'Автоматическое создание и обработка документов', en: 'Automatic document creation and processing' } },
      'statistics-dashboards': { name: { ru: 'Дашборды статистики', en: 'Statistics Dashboards' }, description: { ru: 'Визуализация данных и отчётов', en: 'Data and report visualization' } },
    } as Record<string, { name: { ru: string; en: string }; description: { ru: string; en: string } }>,
  },

  // How We Work
  howWeWork: {
    title: { ru: 'Как мы работаем', en: 'How We Work' },
    subtitle: { ru: 'Прозрачный процесс от заявки до результата — вы всегда знаете, что происходит', en: 'Transparent process from request to result — you always know what\'s happening' },
    steps: [
      {
        title: { ru: 'Заявка и аудит', en: 'Request & Audit' },
        description: { ru: 'Вы оставляете заявку — мы проводим бесплатный аудит бизнес-процессов и находим точки роста', en: 'You submit a request — we conduct a free audit of business processes and find growth points' },
      },
      {
        title: { ru: 'Проектирование', en: 'Design' },
        description: { ru: 'Проектируем архитектуру решения, согласовываем ТЗ и сроки. Вы видите план до старта', en: 'We design the solution architecture, agree on specs and timeline. You see the plan before start' },
      },
      {
        title: { ru: 'Внедрение', en: 'Implementation' },
        description: { ru: 'Разрабатываем, интегрируем и обучаем ИИ-агента на ваших данных. Тестируем вместе', en: 'We develop, integrate and train the AI agent on your data. We test together' },
      },
      {
        title: { ru: 'Результат', en: 'Results' },
        description: { ru: 'Запускаем в работу, обучаем команду и сопровождаем. Вы получаете измеримый результат', en: 'We launch, train your team and provide support. You get measurable results' },
      },
    ],
  },

  // Trust Badges
  trustBadges: {
    ariaLabel: { ru: 'Нам доверяют — клиенты Aimatic', en: 'Trusted by — Aimatic clients' },
    title: { ru: 'Нам уже доверяют', en: 'Already trusted by' },
    stats: [
      { value: { ru: '50+', en: '50+' }, label: { ru: 'проектов реализовано', en: 'projects delivered' } },
      { value: { ru: '8+', en: '8+' }, label: { ru: 'отраслей', en: 'industries' } },
      { value: { ru: '1M+', en: '1M+' }, label: { ru: 'сообщений обработано', en: 'messages processed' } },
      { value: { ru: '24/7', en: '24/7' }, label: { ru: 'поддержка клиентов', en: 'client support' } },
    ],
  },

  // Industry Solutions
  industrySolutions: {
    ariaLabel: { ru: 'Отраслевые ИИ-решения для бизнеса', en: 'Industry AI solutions for business' },
    badge: { ru: '🏢 Отраслевые решения', en: '🏢 Industry Solutions' },
    title: { ru: 'ИИ для вашей отрасли', en: 'AI for your industry' },
    subtitle: { ru: 'Мы знаем специфику каждой ниши и создаём решения, которые учитывают особенности вашего бизнеса', en: 'We know the specifics of every niche and build solutions that account for your business needs' },
    cta: { ru: 'Обсудить решение для вашей отрасли', en: 'Discuss a solution for your industry' },
    industries: [
      {
        name: { ru: 'Ритейл и e-commerce', en: 'Retail & E-commerce' },
        description: { ru: 'Автоматизация продаж, обработка заявок и консультации покупателей на маркетплейсах и в мессенджерах', en: 'Sales automation, request processing and buyer consultations on marketplaces and messengers' },
        tasks: [
          { ru: 'ИИ-продавец на Avito, Telegram, WhatsApp', en: 'AI seller on Avito, Telegram, WhatsApp' },
          { ru: 'Автоответы на отзывы Ozon и Wildberries', en: 'Auto-replies to Ozon and Wildberries reviews' },
          { ru: 'Персонализированные рекомендации товаров', en: 'Personalized product recommendations' },
          { ru: 'Автоматический расчёт стоимости и допродажи', en: 'Automatic cost calculation and upselling' },
        ],
        results: [
          { value: { ru: '+40%', en: '+40%' }, label: { ru: 'конверсия', en: 'conversion' } },
          { value: { ru: '24/7', en: '24/7' }, label: { ru: 'обработка заявок', en: 'request processing' } },
          { value: { ru: '-80%', en: '-80%' }, label: { ru: 'нагрузка на менеджеров', en: 'manager workload' } },
          { value: { ru: '×5', en: '×5' }, label: { ru: 'скорость ответа', en: 'response speed' } },
        ],
      },
      {
        name: { ru: 'Недвижимость', en: 'Real Estate' },
        description: { ru: 'Квалификация лидов, подбор объектов и автоматизация коммуникации с клиентами', en: 'Lead qualification, property matching and client communication automation' },
        tasks: [
          { ru: 'Автоматическая квалификация входящих заявок', en: 'Automatic incoming lead qualification' },
          { ru: 'Подбор объектов по параметрам клиента', en: 'Property selection by client criteria' },
          { ru: 'Запись на просмотры и напоминания', en: 'Viewing bookings and reminders' },
          { ru: 'Интеграция с CRM и базами объектов', en: 'CRM and property database integration' },
        ],
        results: [
          { value: { ru: '0', en: '0' }, label: { ru: 'потерянных заявок', en: 'lost leads' } },
          { value: { ru: '-60%', en: '-60%' }, label: { ru: 'время на рутину', en: 'routine time' } },
          { value: { ru: '+25%', en: '+25%' }, label: { ru: 'конверсия в сделки', en: 'deal conversion' } },
          { value: { ru: '2 мин', en: '2 min' }, label: { ru: 'время ответа', en: 'response time' } },
        ],
      },
      {
        name: { ru: 'Медицина и красота', en: 'Healthcare & Beauty' },
        description: { ru: 'Онлайн-запись, консультации по услугам и автоматизация работы администратора', en: 'Online booking, service consultations and administrator workflow automation' },
        tasks: [
          { ru: 'ИИ-администратор для записи клиентов', en: 'AI administrator for client bookings' },
          { ru: 'Консультации по услугам и ценам', en: 'Service and price consultations' },
          { ru: 'Напоминания о визитах и акциях', en: 'Visit and promotion reminders' },
          { ru: 'Сбор обратной связи после визита', en: 'Post-visit feedback collection' },
        ],
        results: [
          { value: { ru: '-70%', en: '-70%' }, label: { ru: 'нагрузка на персонал', en: 'staff workload' } },
          { value: { ru: '+30%', en: '+30%' }, label: { ru: 'повторные визиты', en: 'return visits' } },
          { value: { ru: '0', en: '0' }, label: { ru: 'пропущенных звонков', en: 'missed calls' } },
          { value: { ru: '60 сек', en: '60 sec' }, label: { ru: 'время записи', en: 'booking time' } },
        ],
      },
      {
        name: { ru: 'Образование', en: 'Education' },
        description: { ru: 'Обучение сотрудников, тренажёры и автоматизация онбординга', en: 'Employee training, simulators and onboarding automation' },
        tasks: [
          { ru: 'Платформа обучения из ваших материалов', en: 'Training platform from your materials' },
          { ru: 'ИИ-тренажёр для отработки навыков', en: 'AI simulator for skill practice' },
          { ru: 'Автоматическое тестирование знаний', en: 'Automated knowledge testing' },
          { ru: 'Адаптация новых сотрудников', en: 'New employee onboarding' },
        ],
        results: [
          { value: { ru: '×3', en: '×3' }, label: { ru: 'скорость онбординга', en: 'onboarding speed' } },
          { value: { ru: '-50%', en: '-50%' }, label: { ru: 'нагрузка на HR', en: 'HR workload' } },
          { value: { ru: '+40%', en: '+40%' }, label: { ru: 'усвоение материала', en: 'material retention' } },
          { value: { ru: '24/7', en: '24/7' }, label: { ru: 'доступ к обучению', en: 'training access' } },
        ],
      },
      {
        name: { ru: 'Логистика и доставка', en: 'Logistics & Delivery' },
        description: { ru: 'Отслеживание заказов, коммуникация с клиентами и оптимизация маршрутов', en: 'Order tracking, client communication and route optimization' },
        tasks: [
          { ru: 'Автоматические статусы доставки клиентам', en: 'Automatic delivery status updates to clients' },
          { ru: 'Обработка входящих заявок на доставку', en: 'Incoming delivery request processing' },
          { ru: 'Расчёт стоимости и сроков', en: 'Cost and timeline calculation' },
          { ru: 'Интеграция с системами учёта', en: 'Accounting system integration' },
        ],
        results: [
          { value: { ru: '-40%', en: '-40%' }, label: { ru: 'звонков в поддержку', en: 'support calls' } },
          { value: { ru: '×10', en: '×10' }, label: { ru: 'скорость обработки', en: 'processing speed' } },
          { value: { ru: '0', en: '0' }, label: { ru: 'потерянных заказов', en: 'lost orders' } },
          { value: { ru: '+20%', en: '+20%' }, label: { ru: 'лояльность клиентов', en: 'client loyalty' } },
        ],
      },
      {
        name: { ru: 'HoReCa', en: 'HoReCa' },
        description: { ru: 'Бронирование, работа с отзывами и автоматизация общения с гостями', en: 'Booking, review management and guest communication automation' },
        tasks: [
          { ru: 'Бронирование столиков и номеров через мессенджеры', en: 'Table and room booking via messengers' },
          { ru: 'Автоматические ответы на отзывы', en: 'Automatic review responses' },
          { ru: 'Меню и спецпредложения в чат-боте', en: 'Menu and special offers in chatbot' },
          { ru: 'Сбор обратной связи от гостей', en: 'Guest feedback collection' },
        ],
        results: [
          { value: { ru: '+35%', en: '+35%' }, label: { ru: 'бронирований', en: 'bookings' } },
          { value: { ru: '5★', en: '5★' }, label: { ru: 'рейтинг на площадках', en: 'platform rating' } },
          { value: { ru: '-50%', en: '-50%' }, label: { ru: 'нагрузка на хостес', en: 'hostess workload' } },
          { value: { ru: '30 сек', en: '30 sec' }, label: { ru: 'время ответа', en: 'response time' } },
        ],
      },
    ],
  },

  // Comparison
  comparison: {
    ariaLabel: { ru: 'Сравнение Aimatic с традиционным подходом', en: 'Aimatic vs traditional approach comparison' },
    title: { ru: 'Aimatic vs Традиционный подход', en: 'Aimatic vs Traditional Approach' },
    subtitle: { ru: 'Почему бизнесы выбирают нас вместо штатных разработчиков и фрилансеров', en: 'Why businesses choose us over in-house developers and freelancers' },
    parameter: { ru: 'Параметр', en: 'Parameter' },
    traditional: { ru: 'Традиционный подход', en: 'Traditional Approach' },
    priceFrom: { ru: 'от 30 000 ₽', en: 'from $350' },
    priceLabel: { ru: 'стоимость базового ИИ-агента', en: 'basic AI agent cost' },
    priceNote: { ru: 'внедрение от 3 дней', en: 'deployment from 3 days' },
    cta: { ru: 'Получить бесплатный аудит', en: 'Get a Free Audit' },
    rows: [
      { param: { ru: 'Сроки запуска', en: 'Launch timeline' }, traditional: { ru: '2–6 месяцев', en: '2-6 months' }, aimatic: { ru: '3–14 дней', en: '3-14 days' }, traditionalBad: true },
      { param: { ru: 'Стоимость', en: 'Cost' }, traditional: { ru: 'от 500 000 ₽', en: 'from $6,000' }, aimatic: { ru: 'от 30 000 ₽', en: 'from $350' }, traditionalBad: true },
      { param: { ru: 'Экспертиза в ИИ', en: 'AI expertise' }, traditional: { ru: 'Нужно искать специалистов', en: 'Need to find specialists' }, aimatic: { ru: '150+ агентов уже создано', en: '150+ agents already built' }, traditionalBad: true },
      { param: { ru: 'Поддержка', en: 'Support' }, traditional: { ru: 'Отдельный договор', en: 'Separate contract' }, aimatic: { ru: 'Включена в проект', en: 'Included in project' }, traditionalBad: true },
      { param: { ru: 'Масштабирование', en: 'Scalability' }, traditional: { ru: 'Каждый раз с нуля', en: 'From scratch each time' }, aimatic: { ru: 'Гибкое и быстрое', en: 'Flexible and fast' }, traditionalBad: true },
      { param: { ru: 'Гарантия результата', en: 'Result guarantee' }, traditional: { ru: 'Нет', en: 'No' }, aimatic: { ru: 'Пилот за 7 дней', en: 'Pilot in 7 days' }, traditionalBad: true },
      { param: { ru: 'Обучение команды', en: 'Team training' }, traditional: { ru: 'Не входит', en: 'Not included' }, aimatic: { ru: 'Обучаем и сопровождаем', en: 'We train and support' }, traditionalBad: true },
    ],
  },

  // Target Audience
  targetAudience: {
    badge: { ru: 'Для кого', en: 'Who it\'s for' },
    title: { ru: 'Кому подходят наши ИИ-агенты', en: 'Who our AI agents are for' },
    subtitle: {
      ru: 'Мы работаем с бизнесами любого масштаба — от локальных компаний до федеральных сетей',
      en: 'We work with businesses of any scale — from local companies to national chains',
    },
    cta: { ru: 'Обсудить проект', en: 'Discuss project' },
    items: [
      {
        title: { ru: 'Интернет-магазины', en: 'E-commerce' },
        description: { ru: 'Автоматизация консультаций, обработка заказов, ответы на отзывы на маркетплейсах', en: 'Automated consultations, order processing, marketplace review responses' },
        icon: 'shopping-cart',
      },
      {
        title: { ru: 'Салоны красоты', en: 'Beauty Salons' },
        description: { ru: 'Онлайн-запись, напоминания клиентам, консультации по услугам и ценам', en: 'Online booking, client reminders, service and price consultations' },
        icon: 'scissors',
      },
      {
        title: { ru: 'Автосервисы', en: 'Auto Services' },
        description: { ru: 'Запись на диагностику, расчёт стоимости ремонта, статус заказ-наряда', en: 'Diagnostics booking, repair cost estimation, work order status' },
        icon: 'wrench',
      },
      {
        title: { ru: 'Клининговые компании', en: 'Cleaning Companies' },
        description: { ru: 'Приём заявок, подбор химии по фото, контроль качества уборки', en: 'Request intake, chemistry selection by photo, cleaning quality control' },
        icon: 'sparkles',
      },
      {
        title: { ru: 'Образование', en: 'Education' },
        description: { ru: 'Обучение сотрудников, тренажёры продаж, тестирование знаний', en: 'Employee training, sales simulators, knowledge testing' },
        icon: 'graduation-cap',
      },
      {
        title: { ru: 'Недвижимость', en: 'Real Estate' },
        description: { ru: 'Подбор объектов, квалификация лидов, автоматические показы', en: 'Property matching, lead qualification, automated showings' },
        icon: 'building',
      },
    ],
  },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(obj: { ru: string; en: string }, lang: Language): string {
  return obj[lang];
}
