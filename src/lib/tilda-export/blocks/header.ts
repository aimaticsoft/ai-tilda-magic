// Header Block for Tilda T123

export const generateHeaderBlock = () => `
<!-- Aimatic Header Block -->
<style>
.aimatic-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  font-family: 'Inter', system-ui, sans-serif;
  transition: all 0.3s ease;
}

.aimatic-header.scrolled {
  background: hsla(230, 25%, 5%, 0.8);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid hsl(230, 20%, 18%);
}

.aimatic-header-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .aimatic-header-container { padding: 0 1.5rem; }
}

@media (min-width: 1024px) {
  .aimatic-header-container { padding: 0 2rem; }
}

.aimatic-header-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

.aimatic-header-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.aimatic-header-logo-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, hsl(217, 91%, 60%), hsl(190, 95%, 50%));
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px hsla(217, 91%, 60%, 0.3);
}

.aimatic-header-logo-icon span {
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
}

.aimatic-header-logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  background: linear-gradient(135deg, hsl(217, 91%, 60%), hsl(190, 95%, 50%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.aimatic-header-links {
  display: none;
  align-items: center;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .aimatic-header-links { display: flex; }
}

.aimatic-header-link {
  font-size: 0.875rem;
  color: hsl(215, 20%, 55%);
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}

.aimatic-header-link:hover {
  color: hsl(217, 91%, 60%);
}

.aimatic-header-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: hsl(217, 91%, 60%);
  transition: width 0.3s ease;
}

.aimatic-header-link:hover::after {
  width: 100%;
}

.aimatic-header-cta {
  display: none;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, hsl(217, 91%, 60%), hsl(190, 95%, 50%));
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 0 30px hsla(217, 91%, 60%, 0.3);
}

@media (min-width: 768px) {
  .aimatic-header-cta { display: block; }
}

.aimatic-header-cta:hover {
  transform: scale(1.05);
  box-shadow: 0 0 60px hsla(217, 91%, 60%, 0.4);
}

.aimatic-header-mobile-btn {
  display: block;
  padding: 0.5rem;
  background: transparent;
  border: none;
  color: hsl(210, 40%, 96%);
  cursor: pointer;
}

@media (min-width: 1024px) {
  .aimatic-header-mobile-btn { display: none; }
}

.aimatic-header-mobile-menu {
  display: none;
  background: hsla(230, 25%, 5%, 0.95);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid hsl(230, 20%, 18%);
}

.aimatic-header-mobile-menu.open {
  display: block;
}

@media (min-width: 1024px) {
  .aimatic-header-mobile-menu { display: none !important; }
}

.aimatic-header-mobile-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.aimatic-header-mobile-link {
  color: hsl(210, 40%, 96%);
  text-decoration: none;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
}

.aimatic-header-mobile-link:hover {
  color: hsl(217, 91%, 60%);
}

.aimatic-header-mobile-cta {
  margin-top: 1rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, hsl(217, 91%, 60%), hsl(190, 95%, 50%));
  color: #fff;
  font-weight: 600;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  box-shadow: 0 0 30px hsla(217, 91%, 60%, 0.3);
}
</style>

<header class="aimatic-header" id="aimatic-header">
  <div class="aimatic-header-container">
    <nav class="aimatic-header-nav">
      <!-- Logo -->
      <a href="#" class="aimatic-header-logo">
        <div class="aimatic-header-logo-icon">
          <span>A</span>
        </div>
        <span class="aimatic-header-logo-text">Aimatic</span>
      </a>

      <!-- Desktop Navigation -->
      <div class="aimatic-header-links">
        <a href="#about" class="aimatic-header-link">О компании</a>
        <a href="#services" class="aimatic-header-link">Услуги</a>
        <a href="#cases" class="aimatic-header-link">Кейсы</a>
        <a href="#demo" class="aimatic-header-link">Демо</a>
        <a href="#advantages" class="aimatic-header-link">Преимущества</a>
        <a href="#reviews" class="aimatic-header-link">Отзывы</a>
        <a href="#contacts" class="aimatic-header-link">Контакты</a>
      </div>

      <!-- CTA Button -->
      <a href="https://t.me/AimaticSoft" target="_blank" rel="noopener noreferrer" class="aimatic-header-cta">
        Заказать демо
      </a>

      <!-- Mobile Menu Button -->
      <button class="aimatic-header-mobile-btn" id="aimatic-mobile-toggle" aria-label="Меню">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </nav>
  </div>

  <!-- Mobile Menu -->
  <div class="aimatic-header-mobile-menu" id="aimatic-mobile-menu">
    <div class="aimatic-header-mobile-content">
      <a href="#about" class="aimatic-header-mobile-link">О компании</a>
      <a href="#services" class="aimatic-header-mobile-link">Услуги</a>
      <a href="#cases" class="aimatic-header-mobile-link">Кейсы</a>
      <a href="#demo" class="aimatic-header-mobile-link">Демо</a>
      <a href="#advantages" class="aimatic-header-mobile-link">Преимущества</a>
      <a href="#reviews" class="aimatic-header-mobile-link">Отзывы</a>
      <a href="#contacts" class="aimatic-header-mobile-link">Контакты</a>
      <a href="https://t.me/AimaticSoft" target="_blank" rel="noopener noreferrer" class="aimatic-header-mobile-cta">
        Заказать демо
      </a>
    </div>
  </div>
</header>

<script>
(function() {
  const header = document.getElementById('aimatic-header');
  const mobileToggle = document.getElementById('aimatic-mobile-toggle');
  const mobileMenu = document.getElementById('aimatic-mobile-menu');
  
  // Scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  mobileToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('open');
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('open');
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
</script>
`;

export default generateHeaderBlock;
