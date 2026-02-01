// Advantages Section Block for Tilda T123

export const generateAdvantagesBlock = () => `
<!-- Aimatic Advantages Section -->
<style>
.aimatic-advantages {
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
  font-family: 'Inter', system-ui, sans-serif;
  background: hsl(230, 25%, 5%);
}

.aimatic-advantages-grid-bg {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

.aimatic-advantages-container {
  position: relative;
  z-index: 10;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .aimatic-advantages-container { padding: 0 1.5rem; }
}

@media (min-width: 1024px) {
  .aimatic-advantages-container { padding: 0 2rem; }
}

.aimatic-advantages-header {
  text-align: center;
  margin-bottom: 4rem;
}

.aimatic-advantages-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}

.aimatic-advantages-line {
  height: 4px;
  width: 80px;
  background: linear-gradient(135deg, hsl(217, 91%, 60%), hsl(190, 95%, 50%));
  border-radius: 9999px;
  margin: 0 auto 1.5rem;
}

.aimatic-advantages-subtitle {
  font-size: 1.125rem;
  color: hsl(215, 20%, 55%);
  max-width: 48rem;
  margin: 0 auto;
}

.aimatic-advantages-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 6rem;
}

@media (min-width: 768px) {
  .aimatic-advantages-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .aimatic-advantages-grid { grid-template-columns: repeat(3, 1fr); }
}

.aimatic-advantages-card {
  height: 100%;
  padding: 2rem;
  background: hsla(230, 25%, 8%, 0.4);
  backdrop-filter: blur(24px);
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  border-radius: 1rem;
  transition: all 0.5s ease;
  opacity: 0;
  transform: translateY(50px) scale(0.9);
}

.aimatic-advantages-card.aimatic-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.aimatic-advantages-card:hover {
  border-color: hsla(217, 91%, 60%, 0.3);
  box-shadow: 0 0 30px hsla(217, 91%, 60%, 0.3);
  transform: scale(1.05) translateY(-10px);
}

.aimatic-advantages-card-icon {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 0.75rem;
  background: hsla(217, 91%, 60%, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  box-shadow: inset 0 0 20px hsla(217, 91%, 60%, 0.1);
  transition: all 0.3s ease;
}

.aimatic-advantages-card:hover .aimatic-advantages-card-icon {
  transform: scale(1.2) rotate(15deg);
}

.aimatic-advantages-card-icon svg {
  width: 24px;
  height: 24px;
  color: hsl(217, 91%, 60%);
}

.aimatic-advantages-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: hsl(210, 40%, 96%);
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;
}

.aimatic-advantages-card:hover h3 {
  color: hsl(217, 91%, 60%);
}

.aimatic-advantages-card p {
  color: hsl(215, 20%, 55%);
}

/* Guarantees section */
.aimatic-guarantees-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .aimatic-guarantees-grid { grid-template-columns: repeat(3, 1fr); }
}

.aimatic-guarantees-card {
  position: relative;
  height: 100%;
  padding: 2rem;
  background: hsla(230, 25%, 8%, 0.4);
  backdrop-filter: blur(24px);
  border: 2px solid hsla(217, 91%, 60%, 0.3);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.5s ease;
  opacity: 0;
  transform: translateY(60px) rotateY(-20deg);
}

.aimatic-guarantees-card.aimatic-visible {
  opacity: 1;
  transform: translateY(0) rotateY(0);
}

.aimatic-guarantees-card:hover {
  border-color: hsl(217, 91%, 60%);
  transform: scale(1.05) translateY(-15px) rotateY(5deg);
}

.aimatic-guarantees-card-bg {
  position: absolute;
  inset: 0;
  background: hsla(217, 91%, 60%, 0.05);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.aimatic-guarantees-card:hover .aimatic-guarantees-card-bg {
  opacity: 0.15;
}

.aimatic-guarantees-card-glow {
  position: absolute;
  inset: 0;
  border: 2px solid hsla(217, 91%, 60%, 0.5);
  border-radius: 0.75rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  animation: aimatic-glow-pulse 2s ease-in-out infinite;
}

.aimatic-guarantees-card:hover .aimatic-guarantees-card-glow {
  opacity: 1;
}

@keyframes aimatic-glow-pulse {
  0%, 100% { box-shadow: 0 0 20px hsla(217, 91%, 60%, 0); }
  50% { box-shadow: 0 0 40px hsla(217, 91%, 60%, 0.3); }
}

.aimatic-guarantees-card-content {
  position: relative;
}

.aimatic-guarantees-card-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, hsl(217, 91%, 60%), hsl(190, 95%, 50%));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.aimatic-guarantees-card:hover .aimatic-guarantees-card-icon {
  transform: scale(1.2) rotate(10deg);
}

.aimatic-guarantees-card-icon svg {
  width: 28px;
  height: 28px;
  color: #fff;
}

.aimatic-guarantees-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: hsl(210, 40%, 96%);
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;
}

.aimatic-guarantees-card:hover h3 {
  color: hsl(217, 91%, 60%);
}

.aimatic-guarantees-card p {
  color: hsl(215, 20%, 55%);
}
</style>

<section id="advantages" class="aimatic-advantages">
  <div class="aimatic-advantages-grid-bg"></div>
  
  <div class="aimatic-advantages-container">
    <!-- Advantages Header -->
    <div class="aimatic-advantages-header aimatic-reveal">
      <h2 class="aimatic-advantages-title">Преимущества</h2>
      <div class="aimatic-advantages-line"></div>
      <p class="aimatic-advantages-subtitle">
        Круглосуточная работа, больше продаж, снижение расходов — всё это благодаря ИИ-агентам
      </p>
    </div>

    <!-- Advantages Grid -->
    <div class="aimatic-advantages-grid">
      <!-- Advantage 1 -->
      <div class="aimatic-advantages-card aimatic-reveal">
        <div class="aimatic-advantages-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        </div>
        <h3>Круглосуточная поддержка</h3>
        <p>ИИ-агенты работают 24/7, обрабатывая задачи без перерывов и минимизируя упущенные возможности.</p>
      </div>

      <!-- Advantage 2 -->
      <div class="aimatic-advantages-card aimatic-reveal">
        <div class="aimatic-advantages-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
            <polyline points="17 6 23 6 23 12"></polyline>
          </svg>
        </div>
        <h3>Повышение конверсии</h3>
        <p>Агенты персонализируют рекомендации и анализируют данные в реальном времени, увеличивая продажи на 15–30%.</p>
      </div>

      <!-- Advantage 3 -->
      <div class="aimatic-advantages-card aimatic-reveal">
        <div class="aimatic-advantages-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
            <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
            <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
          </svg>
        </div>
        <h3>Экономия ресурсов</h3>
        <p>Автоматизация рутины снижает нагрузку на команду до 50%, освобождая время для стратегии.</p>
      </div>

      <!-- Advantage 4 -->
      <div class="aimatic-advantages-card aimatic-reveal">
        <div class="aimatic-advantages-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </div>
        <h3>Гибкая адаптация</h3>
        <p>Агенты настраиваются под любые задачи — SMM, аналитика, управление — с интеграцией в системы.</p>
      </div>

      <!-- Advantage 5 -->
      <div class="aimatic-advantages-card aimatic-reveal">
        <div class="aimatic-advantages-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 3v18h18"></path>
            <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
          </svg>
        </div>
        <h3>Глубокий анализ данных</h3>
        <p>Агенты проверяют информацию сразу, выдавая отчёты и советы по улучшению работы.</p>
      </div>
    </div>

    <!-- Guarantees Header -->
    <div class="aimatic-advantages-header aimatic-reveal">
      <h2 class="aimatic-advantages-title">Гарантированные результаты</h2>
      <div class="aimatic-advantages-line"></div>
      <p class="aimatic-advantages-subtitle">
        Первый рабочий прототип ИИ-агента вы получаете через 7 дней,
        финальная версия за 2–3 недели
      </p>
    </div>

    <!-- Guarantees Grid -->
    <div class="aimatic-guarantees-grid">
      <!-- Guarantee 1 -->
      <div class="aimatic-guarantees-card aimatic-reveal">
        <div class="aimatic-guarantees-card-bg"></div>
        <div class="aimatic-guarantees-card-glow"></div>
        <div class="aimatic-guarantees-card-content">
          <div class="aimatic-guarantees-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h3>Персонализация под бизнес-логику</h3>
          <p>Обучаем ИИ на данных компании: продуктах, услугах, процессах, регламентах, сценариях общения.</p>
        </div>
      </div>

      <!-- Guarantee 2 -->
      <div class="aimatic-guarantees-card aimatic-reveal">
        <div class="aimatic-guarantees-card-bg"></div>
        <div class="aimatic-guarantees-card-glow"></div>
        <div class="aimatic-guarantees-card-content">
          <div class="aimatic-guarantees-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          </div>
          <h3>Быстрая разработка</h3>
          <p>MVP — за 7 дней. Финальная версия — за 2–3 недели после тестирования.</p>
        </div>
      </div>

      <!-- Guarantee 3 -->
      <div class="aimatic-guarantees-card aimatic-reveal">
        <div class="aimatic-guarantees-card-bg"></div>
        <div class="aimatic-guarantees-card-glow"></div>
        <div class="aimatic-guarantees-card-content">
          <div class="aimatic-guarantees-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
            </svg>
          </div>
          <h3>Предсказуемый процесс</h3>
          <p>Все этапы идут по чёткому регламенту. Вы всегда понимаете, что делается.</p>
        </div>
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

  document.querySelectorAll('.aimatic-advantages .aimatic-reveal').forEach(el => {
    observer.observe(el);
  });
})();
</script>
`;

export default generateAdvantagesBlock;
