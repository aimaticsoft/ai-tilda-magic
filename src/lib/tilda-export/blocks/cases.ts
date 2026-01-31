// Cases Section Block for Tilda T123

export const generateCasesBlock = () => `
<!-- Aimatic Cases Section -->
<style>
.aimatic-cases {
  position: relative;
  padding: 6rem 0;
  font-family: 'Inter', system-ui, sans-serif;
  background: hsl(230, 25%, 5%);
}

.aimatic-cases-bg {
  position: absolute;
  inset: 0;
  background: hsla(230, 25%, 12%, 0.3);
}

.aimatic-cases-grid-bg {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

.aimatic-cases-container {
  position: relative;
  z-index: 10;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .aimatic-cases-container { padding: 0 1.5rem; }
}

@media (min-width: 1024px) {
  .aimatic-cases-container { padding: 0 2rem; }
}

.aimatic-cases-header {
  text-align: center;
  margin-bottom: 4rem;
}

.aimatic-cases-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}

.aimatic-cases-title-accent {
  background: linear-gradient(135deg, hsl(217, 91%, 60%), hsl(190, 95%, 50%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.aimatic-cases-line {
  height: 4px;
  width: 80px;
  background: linear-gradient(135deg, hsl(217, 91%, 60%), hsl(190, 95%, 50%));
  border-radius: 9999px;
  margin: 0 auto 1.5rem;
}

.aimatic-cases-subtitle {
  font-size: 1.125rem;
  color: hsl(215, 20%, 55%);
  max-width: 48rem;
  margin: 0 auto;
}

.aimatic-cases-nav {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.aimatic-cases-nav-btn {
  padding: 0.75rem;
  background: hsl(230, 25%, 8%);
  border: 1px solid hsl(230, 20%, 18%);
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: hsl(210, 40%, 96%);
}

.aimatic-cases-nav-btn:hover {
  border-color: hsl(217, 91%, 60%);
  transform: scale(1.05);
}

.aimatic-cases-nav-btn svg {
  width: 20px;
  height: 20px;
}

.aimatic-cases-carousel {
  overflow: hidden;
  padding: 1rem 0;
}

.aimatic-cases-track {
  display: flex;
  transition: transform 0.5s ease;
}

.aimatic-cases-slide {
  flex: 0 0 33.333%;
  padding: 0 0.75rem;
}

@media (max-width: 1023px) {
  .aimatic-cases-slide { flex: 0 0 50%; }
}

@media (max-width: 767px) {
  .aimatic-cases-slide { flex: 0 0 100%; }
}

.aimatic-cases-card {
  position: relative;
  height: 100%;
  padding: 1.5rem;
  background: hsla(230, 25%, 8%, 0.4);
  backdrop-filter: blur(24px);
  border: 1px solid transparent;
  border-radius: 1rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.aimatic-cases-card:hover {
  border-color: hsla(217, 91%, 60%, 0.5);
  transform: translateY(-8px);
}

.aimatic-cases-card-glow {
  position: absolute;
  inset: -12px;
  background: hsla(217, 91%, 60%, 0.3);
  border-radius: 1rem;
  filter: blur(20px);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.aimatic-cases-card:hover .aimatic-cases-card-glow {
  opacity: 1;
}

.aimatic-cases-card-badge {
  display: inline-flex;
  align-self: flex-start;
  padding: 0.25rem 0.75rem;
  background: hsla(217, 91%, 60%, 0.1);
  border: 1px solid hsla(217, 91%, 60%, 0.3);
  border-radius: 9999px;
  color: hsl(217, 91%, 60%);
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.aimatic-cases-card:hover .aimatic-cases-card-badge {
  transform: scale(1.05);
}

.aimatic-cases-card h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: hsl(210, 40%, 96%);
  margin-bottom: 0.75rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.aimatic-cases-card p {
  font-size: 0.875rem;
  color: hsl(215, 20%, 55%);
  margin-bottom: 1.5rem;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.aimatic-cases-card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: hsl(217, 91%, 60%);
  font-weight: 500;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.aimatic-cases-card:hover .aimatic-cases-card-link {
  transform: translateX(5px);
}

.aimatic-cases-card-link svg {
  width: 16px;
  height: 16px;
}

.aimatic-cases-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.aimatic-cases-dot {
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background: hsl(230, 20%, 18%);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.aimatic-cases-dot.active {
  width: 32px;
  background: hsl(217, 91%, 60%);
}

.aimatic-cases-dot:hover {
  transform: scale(1.2);
}
</style>

<section id="cases" class="aimatic-cases">
  <div class="aimatic-cases-bg"></div>
  <div class="aimatic-cases-grid-bg"></div>
  
  <div class="aimatic-cases-container">
    <!-- Header -->
    <div class="aimatic-cases-header aimatic-reveal">
      <h2 class="aimatic-cases-title">
        Реальные проекты <span class="aimatic-cases-title-accent">Aimatic</span>
      </h2>
      <div class="aimatic-cases-line"></div>
      <p class="aimatic-cases-subtitle">
        Мы не говорим о будущем — мы создаём его. Каждый кейс — это реальный проект,
        где ИИ уже заменяет рутину и ускоряет продажи
      </p>
    </div>

    <!-- Navigation -->
    <div class="aimatic-cases-nav">
      <button class="aimatic-cases-nav-btn" id="cases-prev">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button class="aimatic-cases-nav-btn" id="cases-next">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>

    <!-- Carousel -->
    <div class="aimatic-cases-carousel">
      <div class="aimatic-cases-track" id="cases-track">
        <!-- Case 1 -->
        <div class="aimatic-cases-slide">
          <div class="aimatic-cases-card">
            <div class="aimatic-cases-card-glow"></div>
            <span class="aimatic-cases-card-badge">+40% конверсия</span>
            <h3>Интеллектуальный консультант по продажам для магазина Apple</h3>
            <p>Автоматизированный консультант интегрирован в Avito, Telegram и WhatsApp, предоставляет клиентам рекомендации по моделям.</p>
            <a href="https://drive.google.com/file/d/1iHRMtmOmxsFIreEWdKV_ghSP67ONe0h0/view" target="_blank" rel="noopener noreferrer" class="aimatic-cases-card-link">
              Подробнее
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>

        <!-- Case 2 -->
        <div class="aimatic-cases-slide">
          <div class="aimatic-cases-card">
            <div class="aimatic-cases-card-glow"></div>
            <span class="aimatic-cases-card-badge">0 часов SMM работы</span>
            <h3>Автоматизированный SMM-координатор для мебельной компании</h3>
            <p>ИИ полностью автоматизирует работу с контентом: пишет посты, генерирует фото и видео, публикует их в Instagram.</p>
            <a href="https://drive.google.com/file/d/1r98e5SuihFIpzbH51EVPC331S32JXaZm/view" target="_blank" rel="noopener noreferrer" class="aimatic-cases-card-link">
              Подробнее
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>

        <!-- Case 3 -->
        <div class="aimatic-cases-slide">
          <div class="aimatic-cases-card">
            <div class="aimatic-cases-card-glow"></div>
            <span class="aimatic-cases-card-badge">-70% нагрузка</span>
            <h3>Цифровой администратор салона красоты</h3>
            <p>ИИ-администратор консультирует клиентов по услугам и ценам, осуществляет онлайн-запись, отправляет напоминания.</p>
            <a href="https://drive.google.com/file/d/1yrfBVi0Qf8-CIloXWpAUbFpJlKjmOs25/view" target="_blank" rel="noopener noreferrer" class="aimatic-cases-card-link">
              Подробнее
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>

        <!-- Case 4 -->
        <div class="aimatic-cases-slide">
          <div class="aimatic-cases-card">
            <div class="aimatic-cases-card-glow"></div>
            <span class="aimatic-cases-card-badge">5★ рейтинг</span>
            <h3>Интеллектуальный менеджер маркетплейсов</h3>
            <p>Решение анализирует все входящие отзывы и вопросы покупателей на Ozon и Wildberries, формирует ответы автоматически.</p>
            <a href="https://drive.google.com/file/d/1JE0R_yaeWQFKChngJ-qxdofw4gVdGAAF/view" target="_blank" rel="noopener noreferrer" class="aimatic-cases-card-link">
              Подробнее
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>

        <!-- Case 5 -->
        <div class="aimatic-cases-slide">
          <div class="aimatic-cases-card">
            <div class="aimatic-cases-card-glow"></div>
            <span class="aimatic-cases-card-badge">+50% качество</span>
            <h3>Интерактивный помощник клининговых специалистов</h3>
            <p>Многофункциональная система с визуальным анализом фото загрязнений, подбором химии и контролем качества уборки.</p>
            <a href="https://drive.google.com/file/d/10usGwCQU9tHjHMiYhARXDIVO_2b4Wzkv/view" target="_blank" rel="noopener noreferrer" class="aimatic-cases-card-link">
              Подробнее
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>

        <!-- Case 6 -->
        <div class="aimatic-cases-slide">
          <div class="aimatic-cases-card">
            <div class="aimatic-cases-card-glow"></div>
            <span class="aimatic-cases-card-badge">0 потерянных заявок</span>
            <h3>Интеллектуальный менеджер продаж для установки окон</h3>
            <p>Решение объединяет WhatsApp, Telegram, сайт, Avito и Bitrix24, консультирует клиентов и оформляет лиды.</p>
            <a href="https://drive.google.com/file/d/1grIrzMZ_xmbjbKDQ5slDxHNhFj4fEnLW/view" target="_blank" rel="noopener noreferrer" class="aimatic-cases-card-link">
              Подробнее
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>

        <!-- Case 7 -->
        <div class="aimatic-cases-slide">
          <div class="aimatic-cases-card">
            <div class="aimatic-cases-card-glow"></div>
            <span class="aimatic-cases-card-badge">2 мин вместо 2 часов</span>
            <h3>Аналитическая система для сети магазинов одежды</h3>
            <p>ИИ-модуль анализирует данные по 30 торговым точкам и 50 показателям, формирует отчёт за 2 минуты.</p>
            <a href="https://drive.google.com/file/d/1ZXiFBaXEHL3xWajkSR2GBuRpWjeRYvg5/view" target="_blank" rel="noopener noreferrer" class="aimatic-cases-card-link">
              Подробнее
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>

        <!-- Case 8 -->
        <div class="aimatic-cases-slide">
          <div class="aimatic-cases-card">
            <div class="aimatic-cases-card-glow"></div>
            <span class="aimatic-cases-card-badge">1000 контактов/день</span>
            <h3>Автоматизированный HR-координатор</h3>
            <p>Система ведёт коммуникацию с кандидатами через WhatsApp, собирает данные и планирует собеседования.</p>
            <a href="https://drive.google.com/file/d/1qI9BQik6dr8dFvexTBEraCha6R1lrrxf/view" target="_blank" rel="noopener noreferrer" class="aimatic-cases-card-link">
              Подробнее
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Dots -->
    <div class="aimatic-cases-dots" id="cases-dots">
      <button class="aimatic-cases-dot active" data-index="0"></button>
      <button class="aimatic-cases-dot" data-index="1"></button>
      <button class="aimatic-cases-dot" data-index="2"></button>
      <button class="aimatic-cases-dot" data-index="3"></button>
      <button class="aimatic-cases-dot" data-index="4"></button>
      <button class="aimatic-cases-dot" data-index="5"></button>
      <button class="aimatic-cases-dot" data-index="6"></button>
      <button class="aimatic-cases-dot" data-index="7"></button>
    </div>
  </div>
</section>

<script>
(function() {
  const track = document.getElementById('cases-track');
  const prevBtn = document.getElementById('cases-prev');
  const nextBtn = document.getElementById('cases-next');
  const dots = document.querySelectorAll('#cases-dots .aimatic-cases-dot');
  
  if (!track) return;
  
  let currentIndex = 0;
  const totalSlides = 8;
  
  function getVisibleSlides() {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }

  function updateCarousel() {
    const visibleSlides = getVisibleSlides();
    const maxIndex = totalSlides - visibleSlides;
    
    if (currentIndex > maxIndex) currentIndex = 0;
    if (currentIndex < 0) currentIndex = maxIndex;
    
    const slideWidth = 100 / visibleSlides;
    track.style.transform = 'translateX(' + (-currentIndex * slideWidth) + '%)';
    
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  prevBtn.addEventListener('click', function() {
    currentIndex--;
    updateCarousel();
  });

  nextBtn.addEventListener('click', function() {
    currentIndex++;
    updateCarousel();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', function() {
      currentIndex = i;
      updateCarousel();
    });
  });

  window.addEventListener('resize', updateCarousel);
  
  // Scroll animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aimatic-visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.aimatic-cases .aimatic-reveal').forEach(el => {
    observer.observe(el);
  });
})();
</script>
`;

export default generateCasesBlock;
