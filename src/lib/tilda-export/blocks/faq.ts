// FAQ Section Block for Tilda T123

export const generateFAQBlock = () => `
<!-- Aimatic FAQ Section -->
<style>
.aimatic-faq {
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
  font-family: 'Inter', system-ui, sans-serif;
  background: hsl(230, 25%, 5%);
}

.aimatic-faq-grid-bg {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

.aimatic-faq-container {
  position: relative;
  z-index: 10;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .aimatic-faq-container { padding: 0 1.5rem; }
}

@media (min-width: 1024px) {
  .aimatic-faq-container { padding: 0 2rem; }
}

.aimatic-faq-header {
  text-align: center;
  margin-bottom: 4rem;
}

.aimatic-faq-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}

.aimatic-faq-line {
  height: 4px;
  width: 80px;
  background: linear-gradient(135deg, hsl(217, 91%, 60%), hsl(190, 95%, 50%));
  border-radius: 9999px;
  margin: 0 auto 1.5rem;
}

.aimatic-faq-subtitle {
  font-size: 1.125rem;
  color: hsl(215, 20%, 55%);
  max-width: 48rem;
  margin: 0 auto;
}

.aimatic-faq-list {
  max-width: 48rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.aimatic-faq-item {
  background: hsla(230, 25%, 8%, 0.4);
  backdrop-filter: blur(24px);
  border: 1px solid hsla(255, 255%, 255%, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateX(-50px);
}

.aimatic-faq-item:nth-child(even) {
  transform: translateX(50px);
}

.aimatic-faq-item.aimatic-visible {
  opacity: 1;
  transform: translateX(0);
}

.aimatic-faq-item:hover {
  transform: scale(1.01);
}

.aimatic-faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.3s ease;
  color: hsl(210, 40%, 96%);
}

.aimatic-faq-question:hover {
  background: hsla(217, 91%, 60%, 0.05);
}

.aimatic-faq-question-text {
  font-weight: 500;
  padding-right: 1rem;
}

.aimatic-faq-question-icon {
  flex-shrink: 0;
  color: hsl(217, 91%, 60%);
  transition: transform 0.3s ease;
}

.aimatic-faq-question-icon svg {
  width: 20px;
  height: 20px;
}

.aimatic-faq-item.open .aimatic-faq-question-icon {
  transform: rotate(180deg);
}

.aimatic-faq-item.open .aimatic-faq-question-icon .icon-plus {
  display: none;
}

.aimatic-faq-item.open .aimatic-faq-question-icon .icon-minus {
  display: block;
}

.aimatic-faq-question-icon .icon-minus {
  display: none;
}

.aimatic-faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease;
}

.aimatic-faq-item.open .aimatic-faq-answer {
  max-height: 300px;
}

.aimatic-faq-answer-content {
  padding: 0 1.5rem 1.5rem;
  color: hsl(215, 20%, 55%);
}
</style>

<section class="aimatic-faq">
  <div class="aimatic-faq-grid-bg"></div>
  
  <div class="aimatic-faq-container">
    <!-- Header -->
    <div class="aimatic-faq-header aimatic-reveal">
      <h2 class="aimatic-faq-title">Часто задаваемые вопросы</h2>
      <div class="aimatic-faq-line"></div>
      <p class="aimatic-faq-subtitle">
        Ответы на самые частые вопросы о внедрении искусственного интеллекта в бизнес
      </p>
    </div>

    <!-- FAQ List -->
    <div class="aimatic-faq-list">
      <!-- FAQ 1 -->
      <div class="aimatic-faq-item aimatic-reveal open">
        <button class="aimatic-faq-question">
          <span class="aimatic-faq-question-text">Сколько стоит внедрение искусственного интеллекта в бизнес?</span>
          <span class="aimatic-faq-question-icon">
            <svg class="icon-plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <svg class="icon-minus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </span>
        </button>
        <div class="aimatic-faq-answer">
          <div class="aimatic-faq-answer-content">
            Стоимость зависит от сложности и числа функций — базовые решения начинаются от 30 000 ₽, а комплексные системы могут стоить до 150 000 ₽.
          </div>
        </div>
      </div>

      <!-- FAQ 2 -->
      <div class="aimatic-faq-item aimatic-reveal">
        <button class="aimatic-faq-question">
          <span class="aimatic-faq-question-text">Сколько времени занимает разработка и настройка?</span>
          <span class="aimatic-faq-question-icon">
            <svg class="icon-plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <svg class="icon-minus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </span>
        </button>
        <div class="aimatic-faq-answer">
          <div class="aimatic-faq-answer-content">
            В среднем от 3 дней до 1 месяца — всё зависит от масштабов и количества интеграций.
          </div>
        </div>
      </div>

      <!-- FAQ 3 -->
      <div class="aimatic-faq-item aimatic-reveal">
        <button class="aimatic-faq-question">
          <span class="aimatic-faq-question-text">Безопасно ли использовать ИИ с клиентскими данными?</span>
          <span class="aimatic-faq-question-icon">
            <svg class="icon-plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <svg class="icon-minus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </span>
        </button>
        <div class="aimatic-faq-answer">
          <div class="aimatic-faq-answer-content">
            Да, мы шифруем все персональные данные, а при необходимости можем разработать и подключить ИИ к вашему локальному серверу — без передачи информации в облако.
          </div>
        </div>
      </div>

      <!-- FAQ 4 -->
      <div class="aimatic-faq-item aimatic-reveal">
        <button class="aimatic-faq-question">
          <span class="aimatic-faq-question-text">Какие задачи можно автоматизировать с помощью ИИ?</span>
          <span class="aimatic-faq-question-icon">
            <svg class="icon-plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <svg class="icon-minus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </span>
        </button>
        <div class="aimatic-faq-answer">
          <div class="aimatic-faq-answer-content">
            ИИ берёт на себя продажи, консультации, обработку заявок, аналитику, работу с CRM и другие рутинные процессы.
          </div>
        </div>
      </div>

      <!-- FAQ 5 -->
      <div class="aimatic-faq-item aimatic-reveal">
        <button class="aimatic-faq-question">
          <span class="aimatic-faq-question-text">Нужны ли специальные знания для работы с ИИ?</span>
          <span class="aimatic-faq-question-icon">
            <svg class="icon-plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <svg class="icon-minus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </span>
        </button>
        <div class="aimatic-faq-answer">
          <div class="aimatic-faq-answer-content">
            Нет, всё настраивается под ваш бизнес, а управление простое — через привычные мессенджеры/админ панель или CRM.
          </div>
        </div>
      </div>

      <!-- FAQ 6 -->
      <div class="aimatic-faq-item aimatic-reveal">
        <button class="aimatic-faq-question">
          <span class="aimatic-faq-question-text">Как понять, что моему бизнесу действительно нужен искусственный интеллект?</span>
          <span class="aimatic-faq-question-icon">
            <svg class="icon-plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <svg class="icon-minus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </span>
        </button>
        <div class="aimatic-faq-answer">
          <div class="aimatic-faq-answer-content">
            Если вы тратите много времени на рутину, теряете заявки или хотите масштабироваться без увеличения штата — значит, пора внедрять ИИ.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
(function() {
  // Scroll animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('aimatic-visible');
        }, index * 100);
      }
    });
  }, { threshold: 0.1, rootMargin: '-50px' });

  document.querySelectorAll('.aimatic-faq .aimatic-reveal').forEach(el => {
    observer.observe(el);
  });

  // Accordion functionality
  document.querySelectorAll('.aimatic-faq-question').forEach(button => {
    button.addEventListener('click', function() {
      const item = this.closest('.aimatic-faq-item');
      const isOpen = item.classList.contains('open');
      
      // Close all items
      document.querySelectorAll('.aimatic-faq-item').forEach(i => {
        i.classList.remove('open');
      });
      
      // Open clicked item if it wasn't open
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
})();
</script>
`;

export default generateFAQBlock;
