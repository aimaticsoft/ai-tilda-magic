// About Section Block for Tilda T123

export const generateAboutBlock = () => `
<!-- Aimatic About Section -->
<style>
.aimatic-about {
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
  font-family: 'Inter', system-ui, sans-serif;
  background: hsl(230, 25%, 5%);
}

.aimatic-about-grid-bg {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

.aimatic-about-container {
  position: relative;
  z-index: 10;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .aimatic-about-container { padding: 0 1.5rem; }
}

@media (min-width: 1024px) {
  .aimatic-about-container { padding: 0 2rem; }
}

.aimatic-about-header {
  text-align: center;
  margin-bottom: 4rem;
}

.aimatic-about-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}

.aimatic-about-line {
  height: 4px;
  width: 80px;
  background: linear-gradient(135deg, hsl(217, 91%, 60%), hsl(190, 95%, 50%));
  border-radius: 9999px;
  margin: 0 auto 1.5rem;
}

.aimatic-about-subtitle {
  font-size: 1.125rem;
  color: hsl(215, 20%, 55%);
  max-width: 48rem;
  margin: 0 auto;
}

.aimatic-about-timeline {
  position: relative;
}

.aimatic-about-timeline-line {
  display: none;
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: hsla(230, 20%, 18%, 0.3);
}

@media (min-width: 1024px) {
  .aimatic-about-timeline-line { display: block; }
}

.aimatic-about-timeline-line-fill {
  width: 100%;
  background: linear-gradient(180deg, hsl(217, 91%, 60%), hsl(190, 95%, 50%), hsl(217, 91%, 60%));
  height: 0;
  transition: height 1s ease-out;
}

.aimatic-about-steps {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

@media (min-width: 1024px) {
  .aimatic-about-steps { gap: 0; }
}

.aimatic-about-step {
  display: grid;
  gap: 1.5rem;
  align-items: center;
  opacity: 0;
  transform: translateX(-80px);
  transition: all 0.8s ease-out;
}

@media (min-width: 1024px) {
  .aimatic-about-step {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
}

.aimatic-about-step.aimatic-visible {
  opacity: 1;
  transform: translateX(0);
}

.aimatic-about-step:nth-child(even) {
  transform: translateX(80px);
}

.aimatic-about-step:nth-child(even).aimatic-visible {
  transform: translateX(0);
}

.aimatic-about-step-card {
  background: hsla(230, 25%, 8%, 0.4);
  backdrop-filter: blur(24px);
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.5s ease;
}

.aimatic-about-step-card:hover {
  border-color: hsla(217, 91%, 60%, 0.3);
  box-shadow: 0 0 30px hsla(217, 91%, 60%, 0.3);
  transform: translateY(-4px);
}

.aimatic-about-step-content {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.aimatic-about-step-icon {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 0.75rem;
  background: hsla(217, 91%, 60%, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: inset 0 0 20px hsla(217, 91%, 60%, 0.1);
  transition: all 0.3s ease;
}

.aimatic-about-step-card:hover .aimatic-about-step-icon {
  transform: scale(1.2) rotate(10deg);
}

.aimatic-about-step-icon svg {
  width: 24px;
  height: 24px;
  color: hsl(217, 91%, 60%);
}

.aimatic-about-step-info h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: hsl(210, 40%, 96%);
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.aimatic-about-step-card:hover .aimatic-about-step-info h3 {
  color: hsl(217, 91%, 60%);
}

.aimatic-about-step-info p {
  color: hsl(215, 20%, 55%);
  margin-bottom: 1rem;
}

.aimatic-about-step-stat {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.aimatic-about-step-stat-value {
  font-size: 1.875rem;
  font-weight: 700;
  background: linear-gradient(135deg, hsl(217, 91%, 60%), hsl(190, 95%, 50%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.aimatic-about-step-stat-label {
  font-size: 0.875rem;
  color: hsl(215, 20%, 55%);
}

.aimatic-about-step-number {
  display: none;
  align-items: center;
  justify-content: center;
}

@media (min-width: 1024px) {
  .aimatic-about-step-number { display: flex; }
  
  .aimatic-about-step:nth-child(even) .aimatic-about-step-card {
    order: 2;
  }
  
  .aimatic-about-step:nth-child(even) .aimatic-about-step-number {
    order: 1;
  }
}

.aimatic-about-step-number-inner {
  position: relative;
}

.aimatic-about-step-number-glow {
  position: absolute;
  inset: 0;
  background: hsla(217, 91%, 60%, 0.2);
  border-radius: 50%;
  filter: blur(20px);
  animation: aimatic-pulse 2s ease-in-out infinite;
}

.aimatic-about-step-number-circle {
  position: relative;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: hsl(230, 25%, 8%);
  border: 2px solid hsl(217, 91%, 60%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: hsl(217, 91%, 60%);
  transition: all 0.3s ease;
}

.aimatic-about-step:hover .aimatic-about-step-number-circle {
  transform: scale(1.2);
  border-width: 4px;
}

@keyframes aimatic-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>

<section id="about" class="aimatic-about">
  <div class="aimatic-about-grid-bg"></div>
  
  <div class="aimatic-about-container">
    <!-- Header -->
    <div class="aimatic-about-header aimatic-reveal">
      <h2 class="aimatic-about-title">Полный цикл: от создания до внедрения</h2>
      <div class="aimatic-about-line"></div>
      <p class="aimatic-about-subtitle">
        Мы предлагаем полный цикл услуг по созданию, обучению и внедрению ИИ-агентов,
        которые упростят ваш бизнес и сделают его эффективнее. Снижение нагрузки на команду
        до 50%, рост производительности и экономию времени.
      </p>
    </div>

    <!-- Timeline -->
    <div class="aimatic-about-timeline">
      <div class="aimatic-about-timeline-line">
        <div class="aimatic-about-timeline-line-fill" id="timeline-fill"></div>
      </div>

      <div class="aimatic-about-steps">
        <!-- Step 1 -->
        <div class="aimatic-about-step aimatic-reveal">
          <div class="aimatic-about-step-card">
            <div class="aimatic-about-step-content">
              <div class="aimatic-about-step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
              <div class="aimatic-about-step-info">
                <h3>Анализ и проектирование</h3>
                <p>Проводим аудит ваших текущих процессов, выявляя ключевые точки взаимодействия. На основе анализа проектируем логику ИИ-агента для максимальной эффективности.</p>
                <div class="aimatic-about-step-stat">
                  <span class="aimatic-about-step-stat-value">до 30%</span>
                  <span class="aimatic-about-step-stat-label">экономия времени</span>
                </div>
              </div>
            </div>
          </div>
          <div class="aimatic-about-step-number">
            <div class="aimatic-about-step-number-inner">
              <div class="aimatic-about-step-number-glow"></div>
              <div class="aimatic-about-step-number-circle">1</div>
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="aimatic-about-step aimatic-reveal">
          <div class="aimatic-about-step-card">
            <div class="aimatic-about-step-content">
              <div class="aimatic-about-step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div class="aimatic-about-step-info">
                <h3>Разработка и настройка</h3>
                <p>Создаём ИИ-агента на базе современных моделей, интегрируя вашу базу знаний и бизнес-правила. Настраиваем персонализацию под специфику отрасли.</p>
                <div class="aimatic-about-step-stat">
                  <span class="aimatic-about-step-stat-value">24/7</span>
                  <span class="aimatic-about-step-stat-label">автономная работа</span>
                </div>
              </div>
            </div>
          </div>
          <div class="aimatic-about-step-number">
            <div class="aimatic-about-step-number-inner">
              <div class="aimatic-about-step-number-glow"></div>
              <div class="aimatic-about-step-number-circle">2</div>
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="aimatic-about-step aimatic-reveal">
          <div class="aimatic-about-step-card">
            <div class="aimatic-about-step-content">
              <div class="aimatic-about-step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </div>
              <div class="aimatic-about-step-info">
                <h3>Интеграция с системами</h3>
                <p>Подключаем агента к вашим CRM, мессенджерам, API и базам данных. Тестируем на безопасность и нагрузку.</p>
                <div class="aimatic-about-step-stat">
                  <span class="aimatic-about-step-stat-value">100%</span>
                  <span class="aimatic-about-step-stat-label">автоматизация</span>
                </div>
              </div>
            </div>
          </div>
          <div class="aimatic-about-step-number">
            <div class="aimatic-about-step-number-inner">
              <div class="aimatic-about-step-number-glow"></div>
              <div class="aimatic-about-step-number-circle">3</div>
            </div>
          </div>
        </div>

        <!-- Step 4 -->
        <div class="aimatic-about-step aimatic-reveal">
          <div class="aimatic-about-step-card">
            <div class="aimatic-about-step-content">
              <div class="aimatic-about-step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <div class="aimatic-about-step-info">
                <h3>Обучение и адаптация</h3>
                <p>Обучаем агента на ваших реальных диалогах и данных. Адаптируем стиль общения под бренд с A/B-тестами.</p>
                <div class="aimatic-about-step-stat">
                  <span class="aimatic-about-step-stat-value">+25%</span>
                  <span class="aimatic-about-step-stat-label">эффективность</span>
                </div>
              </div>
            </div>
          </div>
          <div class="aimatic-about-step-number">
            <div class="aimatic-about-step-number-inner">
              <div class="aimatic-about-step-number-glow"></div>
              <div class="aimatic-about-step-number-circle">4</div>
            </div>
          </div>
        </div>

        <!-- Step 5 -->
        <div class="aimatic-about-step aimatic-reveal">
          <div class="aimatic-about-step-card">
            <div class="aimatic-about-step-content">
              <div class="aimatic-about-step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <div class="aimatic-about-step-info">
                <h3>Поддержка и оптимизация</h3>
                <p>Мониторим метрики работы агента, внося обновления на основе аналитики. Оптимизируем для роста ROI.</p>
                <div class="aimatic-about-step-stat">
                  <span class="aimatic-about-step-stat-value">∞</span>
                  <span class="aimatic-about-step-stat-label">развитие</span>
                </div>
              </div>
            </div>
          </div>
          <div class="aimatic-about-step-number">
            <div class="aimatic-about-step-number-inner">
              <div class="aimatic-about-step-number-glow"></div>
              <div class="aimatic-about-step-number-circle">5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
(function() {
  // Scroll animation for timeline
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aimatic-visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '-50px' });

  document.querySelectorAll('.aimatic-about .aimatic-reveal').forEach(el => {
    observer.observe(el);
  });

  // Timeline fill animation
  const timelineFill = document.getElementById('timeline-fill');
  if (timelineFill) {
    window.addEventListener('scroll', function() {
      const section = document.querySelector('.aimatic-about-timeline');
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      if (rect.top < viewHeight && rect.bottom > 0) {
        const progress = Math.min(1, Math.max(0, (viewHeight - rect.top) / (rect.height + viewHeight)));
        timelineFill.style.height = (progress * 100) + '%';
      }
    });
  }
})();
</script>
`;

export default generateAboutBlock;
