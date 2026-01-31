// Reviews Section Block for Tilda T123

export const generateReviewsBlock = () => `
<!-- Aimatic Reviews Section -->
<style>
.aimatic-reviews {
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
  font-family: 'Inter', system-ui, sans-serif;
  background: hsl(230, 25%, 5%);
}

.aimatic-reviews-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, hsla(230, 25%, 12%, 0.3) 0%, hsl(230, 25%, 5%) 100%);
}

.aimatic-reviews-container {
  position: relative;
  z-index: 10;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .aimatic-reviews-container { padding: 0 1.5rem; }
}

@media (min-width: 1024px) {
  .aimatic-reviews-container { padding: 0 2rem; }
}

.aimatic-reviews-header {
  text-align: center;
  margin-bottom: 4rem;
}

.aimatic-reviews-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}

.aimatic-reviews-title-accent {
  background: linear-gradient(135deg, hsl(217, 91%, 60%), hsl(190, 95%, 50%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.aimatic-reviews-line {
  height: 4px;
  width: 80px;
  background: linear-gradient(135deg, hsl(217, 91%, 60%), hsl(190, 95%, 50%));
  border-radius: 9999px;
  margin: 0 auto;
}

.aimatic-reviews-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .aimatic-reviews-grid { grid-template-columns: repeat(3, 1fr); }
}

.aimatic-reviews-card {
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
  transform: translateY(80px) rotateX(-20deg);
}

.aimatic-reviews-card.aimatic-visible {
  opacity: 1;
  transform: translateY(0) rotateX(0);
}

.aimatic-reviews-card:hover {
  border-color: hsla(217, 91%, 60%, 0.3);
  box-shadow: 0 0 30px hsla(217, 91%, 60%, 0.3);
  transform: scale(1.03) rotateY(5deg) translateY(-10px);
}

.aimatic-reviews-card-quote {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  color: hsla(217, 91%, 60%, 0.1);
  transition: color 0.3s ease;
}

.aimatic-reviews-card:hover .aimatic-reviews-card-quote {
  color: hsla(217, 91%, 60%, 0.2);
}

.aimatic-reviews-card-quote svg {
  width: 40px;
  height: 40px;
}

.aimatic-reviews-card-stars {
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
}

.aimatic-reviews-card-star {
  color: hsl(190, 95%, 50%);
  opacity: 0;
  transform: scale(0) rotate(-180deg);
  transition: all 0.3s ease;
}

.aimatic-reviews-card.aimatic-visible .aimatic-reviews-card-star {
  opacity: 1;
  transform: scale(1) rotate(0);
}

.aimatic-reviews-card-star:nth-child(1) { transition-delay: 0.1s; }
.aimatic-reviews-card-star:nth-child(2) { transition-delay: 0.2s; }
.aimatic-reviews-card-star:nth-child(3) { transition-delay: 0.3s; }
.aimatic-reviews-card-star:nth-child(4) { transition-delay: 0.4s; }
.aimatic-reviews-card-star:nth-child(5) { transition-delay: 0.5s; }

.aimatic-reviews-card-star svg {
  width: 18px;
  height: 18px;
  fill: currentColor;
}

.aimatic-reviews-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: hsl(210, 40%, 96%);
  margin-bottom: 0.25rem;
  transition: color 0.3s ease;
}

.aimatic-reviews-card:hover h3 {
  color: hsl(217, 91%, 60%);
}

.aimatic-reviews-card-project {
  font-size: 0.875rem;
  color: hsl(217, 91%, 60%);
  margin-bottom: 1rem;
}

.aimatic-reviews-card-text {
  color: hsl(215, 20%, 55%);
  font-style: italic;
}

.aimatic-reviews-card-shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, hsla(255, 255, 255, 0.05), transparent);
  transform: translateX(-100%);
  transition: transform 1s ease;
}

.aimatic-reviews-card:hover .aimatic-reviews-card-shine {
  transform: translateX(100%);
}
</style>

<section id="reviews" class="aimatic-reviews">
  <div class="aimatic-reviews-bg"></div>
  
  <div class="aimatic-reviews-container">
    <!-- Header -->
    <div class="aimatic-reviews-header aimatic-reveal">
      <h2 class="aimatic-reviews-title">
        Отзывы <span class="aimatic-reviews-title-accent">наших клиентов</span>
      </h2>
      <div class="aimatic-reviews-line"></div>
    </div>

    <!-- Reviews Grid -->
    <div class="aimatic-reviews-grid">
      <!-- Review 1 -->
      <div class="aimatic-reviews-card aimatic-reveal">
        <div class="aimatic-reviews-card-quote">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>
        
        <div class="aimatic-reviews-card-stars">
          <span class="aimatic-reviews-card-star"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
          <span class="aimatic-reviews-card-star"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
          <span class="aimatic-reviews-card-star"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
          <span class="aimatic-reviews-card-star"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
          <span class="aimatic-reviews-card-star"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
        </div>

        <h3>CleanPro</h3>
        <p class="aimatic-reviews-card-project">Внедрение AI-помощника</p>
        <p class="aimatic-reviews-card-text">
          "Внедрение ИИ-помощника в нашу клининговую компанию превзошло все ожидания. Данный продукт был идеально адаптирован под наши потребности: сотрудники теперь тратят меньше времени на поиск информации."
        </p>
        
        <div class="aimatic-reviews-card-shine"></div>
      </div>

      <!-- Review 2 -->
      <div class="aimatic-reviews-card aimatic-reveal">
        <div class="aimatic-reviews-card-quote">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>
        
        <div class="aimatic-reviews-card-stars">
          <span class="aimatic-reviews-card-star"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
          <span class="aimatic-reviews-card-star"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
          <span class="aimatic-reviews-card-star"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
          <span class="aimatic-reviews-card-star"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
          <span class="aimatic-reviews-card-star"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
        </div>

        <h3>TravelMarket</h3>
        <p class="aimatic-reviews-card-project">Внедрение AI-SMM</p>
        <p class="aimatic-reviews-card-text">
          "Существенно сократилось время на написание и публикацию постов сразу в 3 соц.сети. Тексты получаются быстрее, точнее и в нужном стиле."
        </p>
        
        <div class="aimatic-reviews-card-shine"></div>
      </div>

      <!-- Review 3 -->
      <div class="aimatic-reviews-card aimatic-reveal">
        <div class="aimatic-reviews-card-quote">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>
        
        <div class="aimatic-reviews-card-stars">
          <span class="aimatic-reviews-card-star"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
          <span class="aimatic-reviews-card-star"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
          <span class="aimatic-reviews-card-star"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
          <span class="aimatic-reviews-card-star"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
          <span class="aimatic-reviews-card-star"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
        </div>

        <h3>ООО "СИБТЭ"</h3>
        <p class="aimatic-reviews-card-project">Внедрение AI-продавца</p>
        <p class="aimatic-reviews-card-text">
          "Внедрили AI-менеджера для общения с клиентами на авито, сайт и Max. Конверсия выросла, ответы стали мгновенными, менеджеры тратят на 80% меньше времени."
        </p>
        
        <div class="aimatic-reviews-card-shine"></div>
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
        }, index * 200);
      }
    });
  }, { threshold: 0.1, rootMargin: '-50px' });

  document.querySelectorAll('.aimatic-reviews .aimatic-reveal').forEach(el => {
    observer.observe(el);
  });
})();
</script>
`;

export default generateReviewsBlock;
