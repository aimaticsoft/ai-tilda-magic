// Demo Section Block for Tilda T123

export const generateDemoBlock = () => `
<!-- Aimatic Demo Section -->
<style>
.aimatic-demo {
  position: relative;
  padding: 6rem 0;
  font-family: 'Inter', system-ui, sans-serif;
  background: hsl(230, 25%, 5%);
}

.aimatic-demo-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, hsl(230, 25%, 5%) 0%, hsl(230, 25%, 8%) 50%, hsl(230, 25%, 5%) 100%);
}

.aimatic-demo-orb {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: hsla(217, 91%, 60%, 0.1);
  border-radius: 50%;
  filter: blur(200px);
}

.aimatic-demo-container {
  position: relative;
  z-index: 10;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .aimatic-demo-container { padding: 0 1.5rem; }
}

@media (min-width: 1024px) {
  .aimatic-demo-container { padding: 0 2rem; }
}

.aimatic-demo-header {
  text-align: center;
  margin-bottom: 4rem;
}

.aimatic-demo-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: hsla(190, 95%, 50%, 0.1);
  border: 1px solid hsla(190, 95%, 50%, 0.3);
  border-radius: 9999px;
  color: hsl(190, 95%, 50%);
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  animation: aimatic-pulse 2s ease-in-out infinite;
}

.aimatic-demo-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}

.aimatic-demo-title-accent {
  background: linear-gradient(135deg, hsl(217, 91%, 60%), hsl(190, 95%, 50%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.aimatic-demo-line {
  height: 4px;
  width: 80px;
  background: linear-gradient(135deg, hsl(217, 91%, 60%), hsl(190, 95%, 50%));
  border-radius: 9999px;
  margin: 0 auto 1.5rem;
}

.aimatic-demo-subtitle {
  font-size: 1.125rem;
  color: hsl(215, 20%, 55%);
  max-width: 48rem;
  margin: 0 auto;
}

.aimatic-demo-nav {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.aimatic-demo-nav-btn {
  padding: 0.75rem;
  background: hsl(230, 25%, 8%);
  border: 1px solid hsl(230, 20%, 18%);
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: hsl(210, 40%, 96%);
}

.aimatic-demo-nav-btn:hover {
  border-color: hsl(217, 91%, 60%);
  transform: scale(1.05);
}

.aimatic-demo-nav-btn svg {
  width: 20px;
  height: 20px;
}

.aimatic-demo-carousel {
  overflow: hidden;
  padding: 1rem 0;
}

.aimatic-demo-track {
  display: flex;
  transition: transform 0.5s ease;
}

.aimatic-demo-slide {
  flex: 0 0 33.333%;
  padding: 0 0.5rem;
}

@media (max-width: 1023px) {
  .aimatic-demo-slide { flex: 0 0 50%; }
}

@media (max-width: 767px) {
  .aimatic-demo-slide { flex: 0 0 100%; }
}

.aimatic-demo-card {
  display: block;
  position: relative;
  padding: 1.5rem;
  background: hsla(230, 25%, 8%, 0.4);
  backdrop-filter: blur(24px);
  border: 1px solid transparent;
  border-radius: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.aimatic-demo-card:hover {
  border-color: hsla(217, 91%, 60%, 0.5);
  transform: translateY(-8px);
}

.aimatic-demo-card-glow {
  position: absolute;
  inset: -12px;
  border-radius: 1rem;
  filter: blur(20px);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.aimatic-demo-card:hover .aimatic-demo-card-glow {
  opacity: 0.3;
}

.aimatic-demo-card-content {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.aimatic-demo-card-avatar {
  position: relative;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.aimatic-demo-card:hover .aimatic-demo-card-avatar {
  transform: scale(1.1);
}

.aimatic-demo-card-avatar-ring {
  position: absolute;
  inset: 0;
  border: 2px solid hsla(255, 255, 255, 0.2);
  border-radius: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.aimatic-demo-card:hover .aimatic-demo-card-avatar-ring {
  opacity: 1;
  animation: aimatic-ring-pulse 1s ease-in-out infinite;
}

@keyframes aimatic-ring-pulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.3); opacity: 0; }
}

.aimatic-demo-card-avatar svg {
  width: 28px;
  height: 28px;
  color: hsla(255, 255, 255, 0.9);
}

.aimatic-demo-card-dot {
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 1rem;
  height: 1rem;
  background: #4ade80;
  border: 2px solid hsl(230, 25%, 8%);
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.aimatic-demo-card:hover .aimatic-demo-card-dot {
  animation: aimatic-dot-pulse 0.5s ease-in-out infinite;
}

@keyframes aimatic-dot-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

.aimatic-demo-card-info {
  flex: 1;
  min-width: 0;
}

.aimatic-demo-card h3 {
  font-weight: 600;
  color: hsl(210, 40%, 96%);
  transition: color 0.3s ease;
}

.aimatic-demo-card:hover h3 {
  color: hsl(217, 91%, 60%);
}

.aimatic-demo-card-desc {
  font-size: 0.875rem;
  color: hsl(215, 20%, 55%);
  margin-top: 0.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.aimatic-demo-card-cta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
  color: hsl(217, 91%, 60%);
  font-size: 0.875rem;
  font-weight: 500;
  transition: transform 0.3s ease;
}

.aimatic-demo-card:hover .aimatic-demo-card-cta {
  transform: translateX(5px);
}

.aimatic-demo-card-cta svg {
  width: 16px;
  height: 16px;
}

.aimatic-demo-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.aimatic-demo-dot {
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background: hsl(230, 20%, 18%);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.aimatic-demo-dot.active {
  width: 32px;
  background: hsl(217, 91%, 60%);
}

.aimatic-demo-dot:hover {
  transform: scale(1.2);
}

/* Gradient variants */
.aimatic-demo-gradient-orange { background: linear-gradient(135deg, #f97316, #ef4444); }
.aimatic-demo-gradient-blue { background: linear-gradient(135deg, #3b82f6, #22d3ee); }
.aimatic-demo-gradient-pink { background: linear-gradient(135deg, #ec4899, #f43f5e); }
.aimatic-demo-gradient-gray { background: linear-gradient(135deg, #4b5563, #1f2937); }
.aimatic-demo-gradient-green { background: linear-gradient(135deg, #22c55e, #10b981); }
.aimatic-demo-gradient-purple { background: linear-gradient(135deg, #a855f7, #8b5cf6); }
.aimatic-demo-gradient-yellow { background: linear-gradient(135deg, #eab308, #f97316); }
.aimatic-demo-gradient-teal { background: linear-gradient(135deg, #14b8a6, #22d3ee); }
.aimatic-demo-gradient-indigo { background: linear-gradient(135deg, #6366f1, #3b82f6); }

@keyframes aimatic-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}
</style>

<section id="demo" class="aimatic-demo">
  <div class="aimatic-demo-bg"></div>
  <div class="aimatic-demo-orb"></div>
  
  <div class="aimatic-demo-container">
    <!-- Header -->
    <div class="aimatic-demo-header">
      <div class="aimatic-demo-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
        <span>Попробуйте прямо сейчас</span>
      </div>
      <h2 class="aimatic-demo-title">
        Попробуйте наших <span class="aimatic-demo-title-accent">ИИ-агентов</span> в действии
      </h2>
      <div class="aimatic-demo-line"></div>
      <p class="aimatic-demo-subtitle">
        Пообщайтесь с демонстрационными ИИ-агентами и оцените их возможности в реальном времени.
        В вашем проекте мы полностью настроим под ваш бизнес.
      </p>
    </div>

    <!-- Navigation -->
    <div class="aimatic-demo-nav">
      <button class="aimatic-demo-nav-btn" id="demo-prev">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button class="aimatic-demo-nav-btn" id="demo-next">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>

    <!-- Carousel -->
    <div class="aimatic-demo-carousel">
      <div class="aimatic-demo-track" id="demo-track">
        <!-- Demo 1 -->
        <div class="aimatic-demo-slide">
          <a href="https://t.me/colorshopkraski_bot" target="_blank" rel="noopener noreferrer" class="aimatic-demo-card">
            <div class="aimatic-demo-card-glow aimatic-demo-gradient-orange"></div>
            <div class="aimatic-demo-card-content">
              <div class="aimatic-demo-card-avatar aimatic-demo-gradient-orange">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <rect x="6" y="7" width="12" height="12" rx="3"/>
                  <path d="M12 7V4"/><circle cx="12" cy="3" r="1"/>
                  <path d="M9.2 12h1.6"/><path d="M13.2 12h1.6"/>
                  <path d="M10 15c1.2 1 2.8 1 4 0"/>
                </svg>
                <div class="aimatic-demo-card-dot"></div>
              </div>
              <div class="aimatic-demo-card-info">
                <h3>Продавец красок</h3>
                <p class="aimatic-demo-card-desc">Получите профессиональные рекомендации по выбору красок для любых поверхностей.</p>
                <div class="aimatic-demo-card-cta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  Пообщаться
                </div>
              </div>
            </div>
          </a>
        </div>

        <!-- Demo 2 -->
        <div class="aimatic-demo-slide">
          <a href="https://t.me/FitServiceAI_bot" target="_blank" rel="noopener noreferrer" class="aimatic-demo-card">
            <div class="aimatic-demo-card-glow aimatic-demo-gradient-blue"></div>
            <div class="aimatic-demo-card-content">
              <div class="aimatic-demo-card-avatar aimatic-demo-gradient-blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <rect x="6" y="7" width="12" height="12" rx="3"/>
                  <path d="M9 7V5"/><circle cx="9" cy="4" r="0.85"/>
                  <path d="M15 7V5"/><circle cx="15" cy="4" r="0.85"/>
                  <rect x="9" y="11" width="2" height="2" rx="0.4"/>
                  <rect x="13" y="11" width="2" height="2" rx="0.4"/>
                  <path d="M10 15h4"/>
                </svg>
                <div class="aimatic-demo-card-dot"></div>
              </div>
              <div class="aimatic-demo-card-info">
                <h3>Менеджер автосервиса</h3>
                <p class="aimatic-demo-card-desc">ИИ-агент быстро оформит запись на диагностику или ремонт.</p>
                <div class="aimatic-demo-card-cta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  Пообщаться
                </div>
              </div>
            </div>
          </a>
        </div>

        <!-- Demo 3 -->
        <div class="aimatic-demo-slide">
          <a href="https://t.me/FlowerBloomAI_bot" target="_blank" rel="noopener noreferrer" class="aimatic-demo-card">
            <div class="aimatic-demo-card-glow aimatic-demo-gradient-pink"></div>
            <div class="aimatic-demo-card-content">
              <div class="aimatic-demo-card-avatar aimatic-demo-gradient-pink">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <rect x="6" y="7" width="12" height="12" rx="3"/>
                  <path d="M12 7V4"/><circle cx="12" cy="3" r="1"/>
                  <circle cx="10" cy="12" r="0.9"/><circle cx="14" cy="12" r="0.9"/>
                  <path d="M10 15c1.2 1 2.8 1 4 0"/>
                </svg>
                <div class="aimatic-demo-card-dot"></div>
              </div>
              <div class="aimatic-demo-card-info">
                <h3>Продавец цветов</h3>
                <p class="aimatic-demo-card-desc">Поможет выбрать идеальный букет для любого повода.</p>
                <div class="aimatic-demo-card-cta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  Пообщаться
                </div>
              </div>
            </div>
          </a>
        </div>

        <!-- Demo 4 -->
        <div class="aimatic-demo-slide">
          <a href="https://t.me/AppleGadget1_bot" target="_blank" rel="noopener noreferrer" class="aimatic-demo-card">
            <div class="aimatic-demo-card-glow aimatic-demo-gradient-gray"></div>
            <div class="aimatic-demo-card-content">
              <div class="aimatic-demo-card-avatar aimatic-demo-gradient-gray">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <rect x="6" y="7" width="12" height="12" rx="3"/>
                  <path d="M9 12h6"/>
                  <path d="M10 15h4"/>
                </svg>
                <div class="aimatic-demo-card-dot"></div>
              </div>
              <div class="aimatic-demo-card-info">
                <h3>Продавец Apple техники</h3>
                <p class="aimatic-demo-card-desc">Экспертные рекомендации по подбору Apple-устройств.</p>
                <div class="aimatic-demo-card-cta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  Пообщаться
                </div>
              </div>
            </div>
          </a>
        </div>

        <!-- Demo 5 -->
        <div class="aimatic-demo-slide">
          <a href="https://t.me/XfitAi_bot" target="_blank" rel="noopener noreferrer" class="aimatic-demo-card">
            <div class="aimatic-demo-card-glow aimatic-demo-gradient-green"></div>
            <div class="aimatic-demo-card-content">
              <div class="aimatic-demo-card-avatar aimatic-demo-gradient-green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <rect x="6" y="7" width="12" height="12" rx="3"/>
                  <path d="M9 7V5"/><circle cx="9" cy="4" r="0.85"/>
                  <path d="M15 7V5"/><circle cx="15" cy="4" r="0.85"/>
                  <path d="M9.2 12h1.6"/><path d="M13.2 12h1.6"/>
                  <circle cx="11" cy="15" r="0.55"/><circle cx="13" cy="15" r="0.55"/>
                </svg>
                <div class="aimatic-demo-card-dot"></div>
              </div>
              <div class="aimatic-demo-card-info">
                <h3>Администратор фитнес клуба</h3>
                <p class="aimatic-demo-card-desc">Подберите абонемент и запишитесь на бесплатное пробное занятие.</p>
                <div class="aimatic-demo-card-cta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  Пообщаться
                </div>
              </div>
            </div>
          </a>
        </div>

        <!-- Demo 6 -->
        <div class="aimatic-demo-slide">
          <a href="https://t.me/BeautyGlow777_bot" target="_blank" rel="noopener noreferrer" class="aimatic-demo-card">
            <div class="aimatic-demo-card-glow aimatic-demo-gradient-purple"></div>
            <div class="aimatic-demo-card-content">
              <div class="aimatic-demo-card-avatar aimatic-demo-gradient-purple">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <rect x="6" y="7" width="12" height="12" rx="3"/>
                  <circle cx="10" cy="12" r="0.9"/><circle cx="14" cy="12" r="0.9"/>
                  <path d="M10 15c1.2 1 2.8 1 4 0"/>
                </svg>
                <div class="aimatic-demo-card-dot"></div>
              </div>
              <div class="aimatic-demo-card-info">
                <h3>Администратор салона красоты</h3>
                <p class="aimatic-demo-card-desc">Запишитесь на процедуру к подходящему мастеру.</p>
                <div class="aimatic-demo-card-cta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  Пообщаться
                </div>
              </div>
            </div>
          </a>
        </div>

        <!-- Demo 7 -->
        <div class="aimatic-demo-slide">
          <a href="https://t.me/ShineSystems_bot" target="_blank" rel="noopener noreferrer" class="aimatic-demo-card">
            <div class="aimatic-demo-card-glow aimatic-demo-gradient-yellow"></div>
            <div class="aimatic-demo-card-content">
              <div class="aimatic-demo-card-avatar aimatic-demo-gradient-yellow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <rect x="6" y="7" width="12" height="12" rx="3"/>
                  <path d="M12 7V4"/><circle cx="12" cy="3" r="1"/>
                  <rect x="9" y="11" width="2" height="2" rx="0.4"/>
                  <rect x="13" y="11" width="2" height="2" rx="0.4"/>
                  <circle cx="11" cy="15" r="0.55"/><circle cx="13" cy="15" r="0.55"/>
                </svg>
                <div class="aimatic-demo-card-dot"></div>
              </div>
              <div class="aimatic-demo-card-info">
                <h3>Продавец автохимии</h3>
                <p class="aimatic-demo-card-desc">Подбор автохимии и аксессуаров под вашу модель автомобиля.</p>
                <div class="aimatic-demo-card-cta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  Пообщаться
                </div>
              </div>
            </div>
          </a>
        </div>

        <!-- Demo 8 -->
        <div class="aimatic-demo-slide">
          <a href="https://t.me/CleaningNSK_bot" target="_blank" rel="noopener noreferrer" class="aimatic-demo-card">
            <div class="aimatic-demo-card-glow aimatic-demo-gradient-teal"></div>
            <div class="aimatic-demo-card-content">
              <div class="aimatic-demo-card-avatar aimatic-demo-gradient-teal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <rect x="6" y="7" width="12" height="12" rx="3"/>
                  <path d="M12 7V4"/><circle cx="12" cy="3" r="1"/>
                  <path d="M9 12h6"/>
                  <path d="M10 15c1.2 1 2.8 1 4 0"/>
                </svg>
                <div class="aimatic-demo-card-dot"></div>
              </div>
              <div class="aimatic-demo-card-info">
                <h3>Менеджер клининга</h3>
                <p class="aimatic-demo-card-desc">Закажите профессиональную уборку за 60 секунд.</p>
                <div class="aimatic-demo-card-cta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  Пообщаться
                </div>
              </div>
            </div>
          </a>
        </div>

        <!-- Demo 9 -->
        <div class="aimatic-demo-slide">
          <a href="https://t.me/AimaticSoft_bot" target="_blank" rel="noopener noreferrer" class="aimatic-demo-card">
            <div class="aimatic-demo-card-glow aimatic-demo-gradient-indigo"></div>
            <div class="aimatic-demo-card-content">
              <div class="aimatic-demo-card-avatar aimatic-demo-gradient-indigo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <rect x="6" y="7" width="12" height="12" rx="3"/>
                  <path d="M9 7V5"/><circle cx="9" cy="4" r="0.85"/>
                  <path d="M15 7V5"/><circle cx="15" cy="4" r="0.85"/>
                  <path d="M9 12h6"/>
                  <path d="M10 15h4"/>
                </svg>
                <div class="aimatic-demo-card-dot"></div>
              </div>
              <div class="aimatic-demo-card-info">
                <h3>Менеджер IT услуг</h3>
                <p class="aimatic-demo-card-desc">Консультация по IT-решениям и автоматизации бизнеса.</p>
                <div class="aimatic-demo-card-cta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  Пообщаться
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- Dots -->
    <div class="aimatic-demo-dots" id="demo-dots">
      <button class="aimatic-demo-dot active" data-index="0"></button>
      <button class="aimatic-demo-dot" data-index="1"></button>
      <button class="aimatic-demo-dot" data-index="2"></button>
      <button class="aimatic-demo-dot" data-index="3"></button>
      <button class="aimatic-demo-dot" data-index="4"></button>
      <button class="aimatic-demo-dot" data-index="5"></button>
      <button class="aimatic-demo-dot" data-index="6"></button>
      <button class="aimatic-demo-dot" data-index="7"></button>
      <button class="aimatic-demo-dot" data-index="8"></button>
    </div>
  </div>
</section>

<script>
(function() {
  const track = document.getElementById('demo-track');
  const prevBtn = document.getElementById('demo-prev');
  const nextBtn = document.getElementById('demo-next');
  const dots = document.querySelectorAll('#demo-dots .aimatic-demo-dot');
  
  if (!track) return;
  
  let currentIndex = 0;
  const totalSlides = 9;
  
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
})();
</script>
`;

export default generateDemoBlock;
