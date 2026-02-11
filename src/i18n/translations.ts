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
    badge: { ru: 'Полный цикл: от создания до внедрения ИИ-агентов', en: 'Full cycle: from creation to deployment of AI agents' },
    heading1: { ru: 'Разрабатываем и внедряем', en: 'We develop and deploy' },
    heading2: { ru: 'умных AI-агентов', en: 'smart AI agents' },
    heading3: { ru: 'для автоматизации бизнеса', en: 'for business automation' },
    subtitle: {
      ru: 'Создаём AI-агентов, которые автоматизируют рутинные задачи, обрабатывают данные и оптимизируют процессы 24/7 — настраиваем под любые нужды бизнеса и интегрируем в ваши системы',
      en: 'We create AI agents that automate routine tasks, process data and optimize processes 24/7 — customized for any business needs and integrated into your systems',
    },
    cta1: { ru: 'Заказать демо', en: 'Order Demo' },
    cta2: { ru: 'Попробовать ИИ-агента', en: 'Try AI Agent' },
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
    ],
  },

  // Services
  services: {
    title1: { ru: 'Разработаем вашего совершенного', en: 'We will develop your perfect' },
    title2: { ru: ' цифрового агента', en: ' digital agent' },
    subtitle: {
      ru: 'Наш сервис активно разрабатывает и внедряет инновационные ИИ-агенты, которые предназначены для оптимизации процессов в бизнесе',
      en: 'Our service actively develops and deploys innovative AI agents designed to optimize business processes',
    },
    order: { ru: 'Заказать', en: 'Order' },
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
    guaranteesTitle: { ru: 'Гарантированные результаты', en: 'Guaranteed Results' },
    guaranteesSubtitle: { ru: 'Первый рабочий прототип ИИ-агента вы получаете через 7 дней, финальная версия за 2–3 недели', en: 'You receive the first working AI agent prototype in 7 days, final version in 2-3 weeks' },
    items: [
      { title: { ru: 'Круглосуточная поддержка', en: '24/7 Support' }, description: { ru: 'ИИ-агенты работают 24/7, обрабатывая задачи без перерывов и минимизируя упущенные возможности.', en: 'AI agents work 24/7, processing tasks without breaks and minimizing missed opportunities.' } },
      { title: { ru: 'Повышение конверсии', en: 'Conversion Boost' }, description: { ru: 'Агенты персонализируют рекомендации и анализируют данные в реальном времени, увеличивая продажи на 15–30%.', en: 'Agents personalize recommendations and analyze data in real time, increasing sales by 15-30%.' } },
      { title: { ru: 'Экономия ресурсов', en: 'Resource Savings' }, description: { ru: 'Автоматизация рутины снижает нагрузку на команду до 50%, освобождая время для стратегии.', en: 'Routine automation reduces team workload by up to 50%, freeing time for strategy.' } },
      { title: { ru: 'Гибкая адаптация', en: 'Flexible Adaptation' }, description: { ru: 'Агенты настраиваются под любые задачи — SMM, аналитика, управление — с интеграцией в системы.', en: 'Agents are customized for any task — SMM, analytics, management — with system integration.' } },
      { title: { ru: 'Глубокий анализ данных', en: 'Deep Data Analysis' }, description: { ru: 'Агенты проверяют информацию сразу, выдавая отчёты и советы по улучшению работы.', en: 'Agents check information instantly, providing reports and improvement recommendations.' } },
      { title: { ru: 'Масштабируемость', en: 'Scalability' }, description: { ru: 'Легко увеличивайте мощность агентов под рост бизнеса без дополнительных затрат на персонал.', en: 'Easily scale agent capacity for business growth without additional staff costs.' } },
    ],
    guarantees: [
      { title: { ru: 'Персонализация под бизнес-логику', en: 'Business Logic Personalization' }, description: { ru: 'Обучаем ИИ на данных компании: продуктах, услугах, процессах, регламентах, сценариях общения.', en: 'We train AI on company data: products, services, processes, regulations, communication scenarios.' } },
      { title: { ru: 'Быстрая разработка', en: 'Fast Development' }, description: { ru: 'MVP — за 7 дней. Финальная версия — за 2–3 недели после тестирования.', en: 'MVP — in 7 days. Final version — in 2-3 weeks after testing.' } },
      { title: { ru: 'Предсказуемый процесс', en: 'Predictable Process' }, description: { ru: 'Все этапы идут по чёткому регламенту. Вы всегда понимаете, что делается.', en: 'All stages follow a clear workflow. You always know what\'s being done.' } },
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
  },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(obj: { ru: string; en: string }, lang: Language): string {
  return obj[lang];
}
