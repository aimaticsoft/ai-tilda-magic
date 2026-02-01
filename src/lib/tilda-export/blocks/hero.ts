// Hero Section Block for Tilda T123

export const generateHeroBlock = () => `
<!-- Aimatic Hero Section -->
<style>
.aimatic-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, hsl(230, 25%, 5%) 0%, hsl(230, 25%, 10%) 50%, hsl(230, 25%, 5%) 100%);
}

.aimatic-hero-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
  background-size: 80px 80px;
  animation: aimatic-gridMove 20s linear infinite;
}

.aimatic-hero-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.6;
}

.aimatic-hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(128px);
  animation: aimatic-float 6s ease-in-out infinite;
}

.aimatic-hero-orb-1 {
  top: 25%;
  left: 25%;
  width: 24rem;
  height: 24rem;
  background: hsla(217, 91%, 60%, 0.2);
}

.aimatic-hero-orb-2 {
  bottom: 25%;
  right: 25%;
  width: 20rem;
  height: 20rem;
  background: hsla(190, 95%, 50%, 0.2);
  animation-delay: 1s;
}

.aimatic-hero-content {
  position: relative;
  z-index: 10;
  max-width: 1280px;
  margin: 0 auto;
  padding: 8rem 1rem;
  text-align: center;
}

@media (min-width: 640px) {
  .aimatic-hero-content { padding: 8rem 1.5rem; }
}

@media (min-width: 1024px) {
  .aimatic-hero-content { padding: 8rem 2rem; }
}

.aimatic-hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  background: hsla(217, 91%, 60%, 0.1);
  border: 1px solid hsla(217, 91%, 60%, 0.3);
  color: hsl(217, 91%, 60%);
  font-size: 0.875rem;
  margin-bottom: 2rem;
  animation: aimatic-fadeUp 0.6s ease-out forwards;
}

.aimatic-hero-badge svg {
  animation: aimatic-pulse 2s ease-in-out infinite;
}

.aimatic-hero-title {
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.aimatic-hero-title-gradient {
  background: linear-gradient(135deg, #fff, hsl(217, 91%, 60%), hsl(190, 95%, 50%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.aimatic-hero-title-white {
  color: #fff;
}

.aimatic-hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: hsl(215, 20%, 55%);
  max-width: 48rem;
  margin: 0 auto 2.5rem;
  animation: aimatic-fadeUp 0.8s ease-out 0.8s forwards;
  opacity: 0;
}

.aimatic-hero-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  animation: aimatic-fadeUp 0.8s ease-out 1s forwards;
  opacity: 0;
}

@media (min-width: 640px) {
  .aimatic-hero-buttons {
    flex-direction: row;
  }
}

.aimatic-hero-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, hsl(217, 91%, 60%), hsl(190, 95%, 50%));
  color: #fff;
  font-weight: 600;
  border-radius: 0.75rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 0 30px hsla(217, 91%, 60%, 0.3);
}

.aimatic-hero-btn-primary:hover {
  transform: scale(1.05);
  box-shadow: 0 0 60px hsla(217, 91%, 60%, 0.4);
}

.aimatic-hero-btn-primary svg {
  transition: transform 0.3s ease;
}

.aimatic-hero-btn-primary:hover svg {
  transform: translateX(4px);
}

.aimatic-hero-btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: transparent;
  color: hsl(217, 91%, 60%);
  font-weight: 600;
  border: 2px solid hsl(217, 91%, 60%);
  border-radius: 0.75rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px hsla(217, 91%, 60%, 0.2);
}

.aimatic-hero-btn-secondary:hover {
  background: hsla(217, 91%, 60%, 0.1);
  transform: scale(1.05);
  box-shadow: 0 0 30px hsla(217, 91%, 60%, 0.3);
}

.aimatic-hero-icons {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 5rem;
  animation: aimatic-fadeUp 1s ease-out 1.2s forwards;
  opacity: 0;
}

.aimatic-hero-icon-box {
  padding: 1rem;
  background: hsla(230, 25%, 8%, 0.4);
  backdrop-filter: blur(24px);
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  border-radius: 1rem;
  animation: aimatic-float 4s ease-in-out infinite;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.aimatic-hero-icon-box:nth-child(2) {
  animation-delay: 0.5s;
}

.aimatic-hero-icon-box:nth-child(3) {
  animation-delay: 1s;
}

.aimatic-hero-icon-box:hover {
  transform: scale(1.1);
}

.aimatic-hero-icon-box svg {
  width: 32px;
  height: 32px;
}

.aimatic-hero-icon-primary {
  color: hsl(217, 91%, 60%);
}

.aimatic-hero-icon-accent {
  color: hsl(190, 95%, 50%);
}

.aimatic-hero-scroll {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  animation: aimatic-fadeIn 0.6s ease-out 1.5s forwards;
  opacity: 0;
}

.aimatic-hero-scroll-indicator {
  width: 24px;
  height: 40px;
  border: 2px solid hsla(217, 91%, 60%, 0.5);
  border-radius: 9999px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 8px;
  animation: aimatic-bounce 1.5s ease-in-out infinite;
}

.aimatic-hero-scroll-dot {
  width: 4px;
  height: 8px;
  background: hsl(217, 91%, 60%);
  border-radius: 9999px;
}

@keyframes aimatic-fadeUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes aimatic-fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes aimatic-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes aimatic-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}

@keyframes aimatic-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes aimatic-gridMove {
  0% { background-position: 0 0; }
  100% { background-position: 80px 80px; }
}
</style>

<section class="aimatic-hero">
  <div class="aimatic-hero-grid"></div>
  <canvas class="aimatic-hero-particles" id="aimatic-particles"></canvas>
  
  <div class="aimatic-hero-orb aimatic-hero-orb-1"></div>
  <div class="aimatic-hero-orb aimatic-hero-orb-2"></div>

  <div class="aimatic-hero-content">
    <!-- Badge -->
    <div class="aimatic-hero-badge">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
      <span>Полный цикл: от создания до внедрения ИИ-агентов</span>
    </div>

    <!-- Title -->
    <h1 class="aimatic-hero-title">
      <span class="aimatic-hero-title-gradient">Разрабатываем и внедряем</span>
      <br>
      <span class="aimatic-hero-title-white">умных AI-агентов</span>
      <br>
      <span class="aimatic-hero-title-gradient">для автоматизации бизнеса</span>
    </h1>

    <!-- Subtitle -->
    <p class="aimatic-hero-subtitle">
      Создаём адаптивных виртуальных агентов, которые автоматизируют рутинные задачи,
      обрабатывают данные и оптимизируют процессы 24/7 — настраиваем под любые нужды
      бизнеса и интегрируем в ваши системы
    </p>

    <!-- CTA Buttons -->
    <div class="aimatic-hero-buttons">
      <a href="https://t.me/AimaticSoft" target="_blank" rel="noopener noreferrer" class="aimatic-hero-btn-primary">
        Заказать демо
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
      <a href="#demo" class="aimatic-hero-btn-secondary">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
        </svg>
        Попробовать ИИ-агента
      </a>
    </div>

    <!-- Floating Icons -->
    <div class="aimatic-hero-icons">
      <div class="aimatic-hero-icon-box">
        <svg class="aimatic-hero-icon-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
        </svg>
      </div>
      <div class="aimatic-hero-icon-box">
        <svg class="aimatic-hero-icon-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
          <rect x="9" y="9" width="6" height="6"></rect>
          <line x1="9" y1="1" x2="9" y2="4"></line>
          <line x1="15" y1="1" x2="15" y2="4"></line>
          <line x1="9" y1="20" x2="9" y2="23"></line>
          <line x1="15" y1="20" x2="15" y2="23"></line>
          <line x1="20" y1="9" x2="23" y2="9"></line>
          <line x1="20" y1="14" x2="23" y2="14"></line>
          <line x1="1" y1="9" x2="4" y2="9"></line>
          <line x1="1" y1="14" x2="4" y2="14"></line>
        </svg>
      </div>
      <div class="aimatic-hero-icon-box">
        <svg class="aimatic-hero-icon-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      </div>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="aimatic-hero-scroll">
    <div class="aimatic-hero-scroll-indicator">
      <div class="aimatic-hero-scroll-dot"></div>
    </div>
  </div>
</section>

<script>
(function() {
  // Particles animation
  const canvas = document.getElementById('aimatic-particles');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let particles = [];
  let animationId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = [];
    const count = Math.floor((canvas.width * canvas.height) / 15000);
    
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(59, 130, 246, ' + p.opacity + ')';
      ctx.fill();

      particles.forEach((p2, j) => {
        if (i === j) return;
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = 'rgba(59, 130, 246, ' + (0.1 * (1 - dist / 150)) + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
    });

    animationId = requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();

  window.addEventListener('resize', function() {
    resize();
    createParticles();
  });
})();
</script>
`;

export default generateHeroBlock;
