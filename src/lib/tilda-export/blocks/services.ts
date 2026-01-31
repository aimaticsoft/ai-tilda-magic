// Services Section Block for Tilda T123

export const generateServicesBlock = () => `
<!-- Aimatic Services Section -->
<style>
.aimatic-services {
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
  font-family: 'Inter', system-ui, sans-serif;
  background: hsl(230, 25%, 5%);
}

.aimatic-services-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, hsl(230, 25%, 5%) 0%, hsla(230, 25%, 12%, 0.2) 50%, hsl(230, 25%, 5%) 100%);
}

.aimatic-services-orb {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background: hsla(217, 91%, 60%, 0.05);
  border-radius: 50%;
  filter: blur(150px);
}

.aimatic-services-container {
  position: relative;
  z-index: 10;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .aimatic-services-container { padding: 0 1.5rem; }
}

@media (min-width: 1024px) {
  .aimatic-services-container { padding: 0 2rem; }
}

.aimatic-services-header {
  text-align: center;
  margin-bottom: 4rem;
}

.aimatic-services-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}

.aimatic-services-title-accent {
  background: linear-gradient(135deg, hsl(217, 91%, 60%), hsl(190, 95%, 50%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.aimatic-services-line {
  height: 4px;
  width: 80px;
  background: linear-gradient(135deg, hsl(217, 91%, 60%), hsl(190, 95%, 50%));
  border-radius: 9999px;
  margin: 0 auto 1.5rem;
}

.aimatic-services-subtitle {
  font-size: 1.125rem;
  color: hsl(215, 20%, 55%);
  max-width: 48rem;
  margin: 0 auto;
}

.aimatic-services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .aimatic-services-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .aimatic-services-grid { grid-template-columns: repeat(3, 1fr); }
}

.aimatic-services-card {
  position: relative;
  height: 100%;
  padding: 2rem;
  background: hsla(230, 25%, 8%, 0.4);
  backdrop-filter: blur(24px);
  border: 1px solid hsla(255, 255%, 255%, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.5s ease;
  opacity: 0;
  transform: translateY(60px) rotateX(-15deg);
}

.aimatic-services-card.aimatic-visible {
  opacity: 1;
  transform: translateY(0) rotateX(0);
}

.aimatic-services-card:hover {
  border-color: hsla(217, 91%, 60%, 0.3);
  box-shadow: 0 0 30px hsla(217, 91%, 60%, 0.3);
  transform: translateY(-4px) scale(1.03) rotateY(5deg);
}

.aimatic-services-card-overlay {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.aimatic-services-card:hover .aimatic-services-card-overlay {
  opacity: 0.1;
}

.aimatic-services-card-shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, hsla(255, 255, 255, 0.05), transparent);
  transform: translateX(-100%);
  transition: transform 1s ease;
}

.aimatic-services-card:hover .aimatic-services-card-shine {
  transform: translateX(100%);
}

.aimatic-services-card-icon {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.aimatic-services-card:hover .aimatic-services-card-icon {
  transform: scale(1.2) rotate(10deg);
}

.aimatic-services-card-icon svg {
  width: 28px;
  height: 28px;
  color: #fff;
}

.aimatic-services-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: hsl(210, 40%, 96%);
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;
}

.aimatic-services-card:hover h3 {
  color: hsl(217, 91%, 60%);
}

.aimatic-services-card p {
  color: hsl(215, 20%, 55%);
  margin-bottom: 1.5rem;
}

.aimatic-services-card-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: hsl(217, 91%, 60%);
  font-weight: 500;
  text-decoration: none;
  transition: gap 0.3s ease;
}

.aimatic-services-card-cta:hover {
  gap: 0.75rem;
}

.aimatic-services-card-cta span {
  font-size: 1.125rem;
}

.aimatic-services-card-corner {
  position: absolute;
  top: 0;
  right: 0;
  width: 5rem;
  height: 5rem;
  opacity: 0.1;
  filter: blur(32px);
  transition: opacity 0.3s ease;
}

.aimatic-services-card:hover .aimatic-services-card-corner {
  opacity: 0.3;
}

/* Color variants */
.aimatic-services-card-blue .aimatic-services-card-icon { background: linear-gradient(135deg, #3b82f6, #22d3ee); }
.aimatic-services-card-blue .aimatic-services-card-overlay { background: linear-gradient(135deg, #3b82f6, #22d3ee); }
.aimatic-services-card-blue .aimatic-services-card-corner { background: linear-gradient(225deg, #3b82f6, #22d3ee); }

.aimatic-services-card-purple .aimatic-services-card-icon { background: linear-gradient(135deg, #a855f7, #ec4899); }
.aimatic-services-card-purple .aimatic-services-card-overlay { background: linear-gradient(135deg, #a855f7, #ec4899); }
.aimatic-services-card-purple .aimatic-services-card-corner { background: linear-gradient(225deg, #a855f7, #ec4899); }

.aimatic-services-card-orange .aimatic-services-card-icon { background: linear-gradient(135deg, #f97316, #ef4444); }
.aimatic-services-card-orange .aimatic-services-card-overlay { background: linear-gradient(135deg, #f97316, #ef4444); }
.aimatic-services-card-orange .aimatic-services-card-corner { background: linear-gradient(225deg, #f97316, #ef4444); }

.aimatic-services-card-green .aimatic-services-card-icon { background: linear-gradient(135deg, #22c55e, #10b981); }
.aimatic-services-card-green .aimatic-services-card-overlay { background: linear-gradient(135deg, #22c55e, #10b981); }
.aimatic-services-card-green .aimatic-services-card-corner { background: linear-gradient(225deg, #22c55e, #10b981); }

.aimatic-services-card-yellow .aimatic-services-card-icon { background: linear-gradient(135deg, #eab308, #f59e0b); }
.aimatic-services-card-yellow .aimatic-services-card-overlay { background: linear-gradient(135deg, #eab308, #f59e0b); }
.aimatic-services-card-yellow .aimatic-services-card-corner { background: linear-gradient(225deg, #eab308, #f59e0b); }

.aimatic-services-card-indigo .aimatic-services-card-icon { background: linear-gradient(135deg, #6366f1, #8b5cf6); }
.aimatic-services-card-indigo .aimatic-services-card-overlay { background: linear-gradient(135deg, #6366f1, #8b5cf6); }
.aimatic-services-card-indigo .aimatic-services-card-corner { background: linear-gradient(225deg, #6366f1, #8b5cf6); }
</style>

<section id="services" class="aimatic-services">
  <div class="aimatic-services-bg"></div>
  <div class="aimatic-services-orb"></div>
  
  <div class="aimatic-services-container">
    <!-- Header -->
    <div class="aimatic-services-header aimatic-reveal">
      <h2 class="aimatic-services-title">
        Разработаем вашего совершенного <span class="aimatic-services-title-accent">цифрового агента</span>
      </h2>
      <div class="aimatic-services-line"></div>
      <p class="aimatic-services-subtitle">
        Наш сервис активно разрабатывает и внедряет инновационные ИИ-агенты,
        которые предназначены для оптимизации процессов в бизнесе
      </p>
    </div>

    <!-- Services Grid -->
    <div class="aimatic-services-grid">
      <!-- Card 1 -->
      <div class="aimatic-services-card aimatic-services-card-blue aimatic-reveal">
        <div class="aimatic-services-card-overlay"></div>
        <div class="aimatic-services-card-shine"></div>
        <div class="aimatic-services-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </div>
        <h3>Агент-продавец</h3>
        <p>Предлагает товары и услуги, информирует о ценах и акциях, помогает оформить заказ, передает заявку менеджеру.</p>
        <a href="https://t.me/AimaticSoft" target="_blank" rel="noopener noreferrer" class="aimatic-services-card-cta">
          Заказать <span>→</span>
        </a>
        <div class="aimatic-services-card-corner"></div>
      </div>

      <!-- Card 2 -->
      <div class="aimatic-services-card aimatic-services-card-purple aimatic-reveal">
        <div class="aimatic-services-card-overlay"></div>
        <div class="aimatic-services-card-shine"></div>
        <div class="aimatic-services-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
        <h3>Агент-консультант</h3>
        <p>Отвечает на вопросы клиентов, предоставляет дополнительную информацию о продуктах и услугах.</p>
        <a href="https://t.me/AimaticSoft" target="_blank" rel="noopener noreferrer" class="aimatic-services-card-cta">
          Заказать <span>→</span>
        </a>
        <div class="aimatic-services-card-corner"></div>
      </div>

      <!-- Card 3 -->
      <div class="aimatic-services-card aimatic-services-card-orange aimatic-reveal">
        <div class="aimatic-services-card-overlay"></div>
        <div class="aimatic-services-card-shine"></div>
        <div class="aimatic-services-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
        </div>
        <h3>Агент-SMM</h3>
        <p>Взаимодействует с клиентами в социальных сетях, пишет посты, генерирует фото, выкладывает посты в соц.сети.</p>
        <a href="https://t.me/AimaticSoft" target="_blank" rel="noopener noreferrer" class="aimatic-services-card-cta">
          Заказать <span>→</span>
        </a>
        <div class="aimatic-services-card-corner"></div>
      </div>

      <!-- Card 4 -->
      <div class="aimatic-services-card aimatic-services-card-green aimatic-reveal">
        <div class="aimatic-services-card-overlay"></div>
        <div class="aimatic-services-card-shine"></div>
        <div class="aimatic-services-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <line x1="10" y1="9" x2="8" y2="9"></line>
          </svg>
        </div>
        <h3>Агент-менеджер</h3>
        <p>Автоматизирует рутинные задачи по заполнению договоров, генерирует документы, счета, акты.</p>
        <a href="https://t.me/AimaticSoft" target="_blank" rel="noopener noreferrer" class="aimatic-services-card-cta">
          Заказать <span>→</span>
        </a>
        <div class="aimatic-services-card-corner"></div>
      </div>

      <!-- Card 5 -->
      <div class="aimatic-services-card aimatic-services-card-yellow aimatic-reveal">
        <div class="aimatic-services-card-overlay"></div>
        <div class="aimatic-services-card-shine"></div>
        <div class="aimatic-services-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </div>
        <h3>Агент-ассистент</h3>
        <p>Планирует встречи, напоминает о задачах, отправляет уведомления и выполняет административные функции.</p>
        <a href="https://t.me/AimaticSoft" target="_blank" rel="noopener noreferrer" class="aimatic-services-card-cta">
          Заказать <span>→</span>
        </a>
        <div class="aimatic-services-card-corner"></div>
      </div>

      <!-- Card 6 -->
      <div class="aimatic-services-card aimatic-services-card-indigo aimatic-reveal">
        <div class="aimatic-services-card-overlay"></div>
        <div class="aimatic-services-card-shine"></div>
        <div class="aimatic-services-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
        <h3>Агент-методист</h3>
        <p>Помогает в обучении сотрудников, отвечает и предоставляет информацию о компании по запросу.</p>
        <a href="https://t.me/AimaticSoft" target="_blank" rel="noopener noreferrer" class="aimatic-services-card-cta">
          Заказать <span>→</span>
        </a>
        <div class="aimatic-services-card-corner"></div>
      </div>
    </div>
  </div>
</section>

<script>
(function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('aimatic-visible');
        }, index * 100);
      }
    });
  }, { threshold: 0.1, rootMargin: '-50px' });

  document.querySelectorAll('.aimatic-services .aimatic-reveal').forEach(el => {
    observer.observe(el);
  });
})();
</script>
`;

export default generateServicesBlock;
