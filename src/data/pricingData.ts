// Типы
export interface PricingItem {
  id: string;
  name: string;
  description: string;
  pricePerHour: number;
  baseHours: number;
}

export interface PricingCategory {
  id: string;
  name: string;
  icon: string;
  items: PricingItem[];
}

export type BusinessScale = "small" | "medium" | "large";

export interface Tariff {
  id: string;
  name: string;
  price: number;
  minPrice: number;
  maxPrice: number;
  description: string;
  features: string[];
}

// Коэффициенты масштаба бизнеса
export const businessScaleMultipliers: Record<BusinessScale, number> = {
  small: 1,
  medium: 1.5,
  large: 2,
};

export const businessScaleLabels: Record<BusinessScale, string> = {
  small: "Малый бизнес",
  medium: "Средний бизнес",
  large: "Крупный бизнес",
};

// Базовая стоимость разработки (всегда включена)
interface BaseDevelopmentItem {
  name: string;
  hours: number;
  pricePerHour: number;
}

export const baseDevelopmentCost: Record<string, BaseDevelopmentItem> = {
  analysis: { name: "Анализ и сбор требований", hours: 3, pricePerHour: 1040 },
  specification: { name: "Составление ТЗ", hours: 2, pricePerHour: 910 },
  logic: { name: "Проектирование логики", hours: 3, pricePerHour: 1040 },
  core: { name: "Разработка ядра", hours: 6, pricePerHour: 910 },
  prompts: { name: "Написание промптов", hours: 3, pricePerHour: 780 },
  training: { name: "Первичное обучение", hours: 2, pricePerHour: 780 },
  model: { name: "Подбор модели", hours: 2, pricePerHour: 910 },
  testing: { name: "Тестирование", hours: 3, pricePerHour: 650 },
  corrections: { name: "Корректировка", hours: 2, pricePerHour: 780 },
  finalTesting: { name: "Финальное тестирование", hours: 2, pricePerHour: 650 },
};

// Упрощённые категории для клиента
export const pricingCategories: PricingCategory[] = [
  {
    id: "messengers",
    name: "Мессенджеры и каналы связи",
    icon: "💬",
    items: [
      {
        id: "telegram",
        name: "Telegram",
        description: "Интеграция с Telegram-ботом для общения с клиентами",
        pricePerHour: 780,
        baseHours: 4,
      },
      {
        id: "whatsapp",
        name: "WhatsApp",
        description: "Подключение WhatsApp Business для автоматизации переписки",
        pricePerHour: 780,
        baseHours: 5,
      },
      {
        id: "vk",
        name: "ВКонтакте",
        description: "Интеграция с сообществом ВКонтакте",
        pricePerHour: 780,
        baseHours: 4,
      },
      {
        id: "instagram",
        name: "Instagram",
        description: "Автоматизация ответов в Instagram",
        pricePerHour: 780,
        baseHours: 5,
      },
      {
        id: "website",
        name: "Виджет на сайт",
        description: "Чат-виджет для вашего сайта",
        pricePerHour: 780,
        baseHours: 3,
      },
    ],
  },
  {
    id: "marketplaces",
    name: "Маркетплейсы",
    icon: "🛒",
    items: [
      { id: "avito", name: "Авито", description: "Автоматические ответы на Авито", pricePerHour: 845, baseHours: 5 },
      {
        id: "ozon",
        name: "Ozon",
        description: "Интеграция с Ozon для работы с заказами и отзывами",
        pricePerHour: 845,
        baseHours: 6,
      },
      {
        id: "wildberries",
        name: "Wildberries",
        description: "Автоматизация работы с WB",
        pricePerHour: 845,
        baseHours: 6,
      },
      {
        id: "reviews",
        name: "Автоответы на отзывы",
        description: "ИИ отвечает на отзывы клиентов",
        pricePerHour: 780,
        baseHours: 4,
      },
      {
        id: "questions",
        name: "Автоответы на вопросы",
        description: "ИИ отвечает на вопросы покупателей",
        pricePerHour: 780,
        baseHours: 4,
      },
    ],
  },
  {
    id: "crm",
    name: "CRM и базы данных",
    icon: "📊",
    items: [
      {
        id: "bitrix",
        name: "Битрикс24",
        description: "Интеграция с Битрикс24: лиды, сделки, контакты",
        pricePerHour: 910,
        baseHours: 7,
      },
      {
        id: "amocrm",
        name: "AmoCRM",
        description: "Интеграция с AmoCRM для управления продажами",
        pricePerHour: 910,
        baseHours: 6,
      },
      {
        id: "google-sheets",
        name: "Google Таблицы",
        description: "Запись данных в Google Sheets",
        pricePerHour: 780,
        baseHours: 3,
      },
      {
        id: "airtable",
        name: "Airtable",
        description: "Работа с базой данных Airtable",
        pricePerHour: 780,
        baseHours: 4,
      },
      {
        id: "custom-db",
        name: "Своя база данных",
        description: "Создание и настройка собственной БД",
        pricePerHour: 910,
        baseHours: 6,
      },
    ],
  },
  {
    id: "files",
    name: "Работа с файлами",
    icon: "📁",
    items: [
      {
        id: "send-files",
        name: "Отправка файлов",
        description: "ИИ отправляет документы, прайсы, КП клиентам",
        pricePerHour: 715,
        baseHours: 3,
      },
      {
        id: "photo-analysis",
        name: "Анализ фото",
        description: "Распознавание и анализ изображений",
        pricePerHour: 780,
        baseHours: 5,
      },
      {
        id: "document-recognition",
        name: "Распознавание документов",
        description: "OCR и извлечение данных из документов",
        pricePerHour: 910,
        baseHours: 6,
      },
      {
        id: "excel-reports",
        name: "Excel-отчёты",
        description: "Генерация отчётов в формате Excel",
        pricePerHour: 780,
        baseHours: 4,
      },
      {
        id: "pdf-generation",
        name: "Генерация PDF",
        description: "Создание PDF-документов и счетов",
        pricePerHour: 780,
        baseHours: 3,
      },
    ],
  },
  {
    id: "content",
    name: "Генерация контента",
    icon: "✨",
    items: [
      {
        id: "generate-kp",
        name: "Создание КП и договоров",
        description: "Автоматическая генерация коммерческих предложений",
        pricePerHour: 910,
        baseHours: 5,
      },
      {
        id: "generate-images",
        name: "Генерация изображений",
        description: "Создание картинок с помощью ИИ",
        pricePerHour: 780,
        baseHours: 4,
      },
      {
        id: "generate-video",
        name: "Генерация видео",
        description: "Создание видео-контента",
        pricePerHour: 910,
        baseHours: 6,
      },
      {
        id: "autoposting",
        name: "Автопостинг в соцсети",
        description: "Автоматическая публикация контента",
        pricePerHour: 845,
        baseHours: 5,
      },
      {
        id: "seo-texts",
        name: "SEO-тексты",
        description: "Генерация оптимизированных текстов для сайта",
        pricePerHour: 780,
        baseHours: 4,
      },
    ],
  },
  {
    id: "sales",
    name: "Продажи и консультации",
    icon: "💼",
    items: [
      {
        id: "knowledge-base",
        name: "Консультации по базе знаний",
        description: "ИИ отвечает на вопросы из вашей базы знаний",
        pricePerHour: 715,
        baseHours: 5,
      },
      {
        id: "sales-script",
        name: "Работа по скрипту продаж",
        description: "Ведение диалога по вашему сценарию",
        pricePerHour: 1040,
        baseHours: 6,
      },
      {
        id: "calculator",
        name: "Расчёт стоимости",
        description: "ИИ рассчитывает цену по вашему прайсу",
        pricePerHour: 845,
        baseHours: 5,
      },
      {
        id: "lead-form",
        name: "Сбор заявок",
        description: "Отправка лидов в Telegram, CRM или таблицу",
        pricePerHour: 780,
        baseHours: 3,
      },
      {
        id: "upsell",
        name: "Допродажи",
        description: "ИИ предлагает дополнительные товары и услуги",
        pricePerHour: 910,
        baseHours: 4,
      },
    ],
  },
  {
    id: "automation",
    name: "Автоматизация",
    icon: "⚡",
    items: [
      {
        id: "reminders",
        name: "Напоминания клиентам",
        description: "Автоматические напоминания о встречах, оплатах",
        pricePerHour: 910,
        baseHours: 4,
      },
      {
        id: "notifications",
        name: "Уведомления менеджерам",
        description: "Оповещения команды о новых заявках",
        pricePerHour: 780,
        baseHours: 3,
      },
      {
        id: "payments",
        name: "Приём платежей",
        description: "Интеграция с платёжными системами",
        pricePerHour: 910,
        baseHours: 6,
      },
      {
        id: "workflows",
        name: "Автосценарии",
        description: "Создание автоматических цепочек действий",
        pricePerHour: 975,
        baseHours: 6,
      },
      {
        id: "task-management",
        name: "Управление задачами",
        description: "Автоматическое создание и назначение задач",
        pricePerHour: 845,
        baseHours: 4,
      },
    ],
  },
  {
    id: "advanced",
    name: "Продвинутые функции",
    icon: "🚀",
    items: [
      {
        id: "multi-language",
        name: "Мультиязычность",
        description: "ИИ общается на нескольких языках",
        pricePerHour: 975,
        baseHours: 5,
      },
      {
        id: "analytics",
        name: "Аналитика диалогов",
        description: "Анализ и статистика общения",
        pricePerHour: 910,
        baseHours: 5,
      },
      {
        id: "self-learning",
        name: "Самообучение",
        description: "ИИ улучшается на основе диалогов",
        pricePerHour: 910,
        baseHours: 7,
      },
      {
        id: "multi-agent",
        name: "Несколько ИИ-агентов",
        description: "Система из нескольких взаимодействующих агентов",
        pricePerHour: 1170,
        baseHours: 12,
      },
      {
        id: "sentiment",
        name: "Анализ настроений",
        description: "Определение эмоций клиента в диалоге",
        pricePerHour: 845,
        baseHours: 4,
      },
    ],
  },
  {
    id: "extra",
    name: "Дополнительный функционал",
    icon: "🔧",
    items: [
      {
        id: "api-integration",
        name: "Интеграция по API",
        description: "Подключение сторонних сервисов через API",
        pricePerHour: 1040,
        baseHours: 6,
      },
      {
        id: "custom-code",
        name: "Кастомный код",
        description: "Написание индивидуального кода под задачи",
        pricePerHour: 1170,
        baseHours: 8,
      },
      {
        id: "llm-models",
        name: "Подключение LLM-моделей",
        description: "Интеграция GPT, Claude и других моделей",
        pricePerHour: 975,
        baseHours: 5,
      },
      {
        id: "document-automation",
        name: "Автоматизация документооборота",
        description: "Автоматическое создание и обработка документов",
        pricePerHour: 910,
        baseHours: 6,
      },
      {
        id: "statistics-dashboards",
        name: "Дашборды статистики",
        description: "Визуализация данных и отчётов",
        pricePerHour: 910,
        baseHours: 5,
      },
    ],
  },
];

// Тарифы
export const tariffs: Tariff[] = [
  {
    id: "lite",
    name: "Лайт",
    price: 30000,
    minPrice: 0,
    maxPrice: 40000,
    description: "Для малого бизнеса и тестирования",
    features: [
      "Консультация по базе знаний",
      "Отправка заявки в таблицу или Telegram",
      "Работа с возражениями",
      "Telegram-бот или виджет на сайт",
    ],
  },
  {
    id: "economy",
    name: "Эконом",
    price: 50000,
    minPrice: 40001,
    maxPrice: 70000,
    description: "Для продаж и первичных консультаций",
    features: [
      "Консультации по базе знаний",
      "Работа по скрипту продаж",
      "Расчёт цены по калькулятору и прайсу",
      "Отправка КП или презентации",
      "До 2 мессенджеров",
    ],
  },
  {
    id: "standard",
    name: "Стандарт",
    price: 100000,
    minPrice: 70001,
    maxPrice: 150000,
    description: "Полноценный ИИ-агент для отдела продаж",
    features: [
      "База знаний любого объёма",
      "Работа по скриптам продаж",
      "Создание калькулятора включено",
      "Отправка заявок в Telegram, CRM или таблицу",
      "Индивидуальные КП, договоры и счета",
      "До 3 мессенджеров",
    ],
  },
  {
    id: "premium",
    name: "Премиум",
    price: 200000,
    minPrice: 150001,
    maxPrice: 300000,
    description: "Интеллектуальный агент с глубокой интеграцией",
    features: [
      "Несколько баз знаний и продуктов",
      "Создание скриптов продаж",
      "Настройка CRM и напоминаний",
      "Индивидуальные КП, договоры и счета",
      "Система автоматических напоминаний",
      "Индивидуальная разработка",
      "Неограниченное число мессенджеров",
    ],
  },
  {
    id: "vip",
    name: "VIP",
    price: 400000,
    minPrice: 300001,
    maxPrice: 999999999,
    description: "Полный корпоративный ИИ-комплекс",
    features: [
      "Несколько баз знаний и продуктов",
      "Видео-презентации нейросетями",
      "Автоматизация документооборота",
      "Система напоминаний по этапам воронки",
      "Интеграции по API, кастомный код",
      "Подключение LLM-моделей",
      "Мультиагентная система",
    ],
  },
];

// Функция автоопределения сложности проекта
export const calculateComplexity = (selectedCount: number, integrationsCount: number): number => {
  let complexity = 1;

  if (selectedCount >= 10) {
    complexity = 2;
  } else if (selectedCount >= 7) {
    complexity = 1.6;
  } else if (selectedCount >= 4) {
    complexity = 1.3;
  }

  if (integrationsCount >= 5) {
    complexity = Math.max(complexity, 1.6);
  } else if (integrationsCount >= 3) {
    complexity = Math.max(complexity, 1.3);
  }

  return complexity;
};

// Функция расчёта базовой разработки на основе сложности
export const calculateBaseDevelopmentHours = (complexity: number): number => {
  const baseHours = Object.values(baseDevelopmentCost).reduce((sum, item) => sum + item.hours, 0);
  return Math.round(baseHours * complexity);
};

export const calculateBaseDevelopmentPrice = (complexity: number): number => {
  let total = 0;
  Object.values(baseDevelopmentCost).forEach((item) => {
    total += item.hours * item.pricePerHour * complexity;
  });
  return Math.round(total);
};
