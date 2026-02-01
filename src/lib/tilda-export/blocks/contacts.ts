// Contacts Section Block for Tilda T123

export const generateContactsBlock = () => `
<!-- Aimatic Contacts Section -->
<style>
.aimatic-contacts {
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
  font-family: 'Inter', system-ui, sans-serif;
  background: hsl(230, 25%, 5%);
}

.aimatic-contacts-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, hsl(230, 25%, 5%) 0%, hsla(230, 25%, 12%, 0.2) 50%, hsl(230, 25%, 5%) 100%);
}

.aimatic-contacts-orb-1 {
  position: absolute;
  bottom: 0;
  left: 25%;
  width: 24rem;
  height: 24rem;
  background: hsla(217, 91%, 60%, 0.1);
  border-radius: 50%;
  filter: blur(150px);
}

.aimatic-contacts-orb-2 {
  position: absolute;
  top: 0;
  right: 25%;
  width: 20rem;
  height: 20rem;
  background: hsla(190, 95%, 50%, 0.1);
  border-radius: 50%;
  filter: blur(150px);
}

.aimatic-contacts-container {
  position: relative;
  z-index: 10;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .aimatic-contacts-container { padding: 0 1.5rem; }
}

@media (min-width: 1024px) {
  .aimatic-contacts-container { padding: 0 2rem; }
}

.aimatic-contacts-header {
  text-align: center;
  margin-bottom: 4rem;
}

.aimatic-contacts-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}

.aimatic-contacts-line {
  height: 4px;
  width: 80px;
  background: linear-gradient(135deg, hsl(217, 91%, 60%), hsl(190, 95%, 50%));
  border-radius: 9999px;
  margin: 0 auto 1.5rem;
}

.aimatic-contacts-subtitle {
  font-size: 1.125rem;
  color: hsl(215, 20%, 55%);
  max-width: 48rem;
  margin: 0 auto;
}

.aimatic-contacts-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 1024px) {
  .aimatic-contacts-grid { grid-template-columns: 1fr 1fr; }
}

.aimatic-contacts-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.aimatic-contacts-cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.aimatic-contacts-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: hsla(230, 25%, 8%, 0.4);
  backdrop-filter: blur(24px);
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  border-radius: 1rem;
  text-decoration: none;
  transition: all 0.5s ease;
  opacity: 0;
  transform: translateX(-40px);
}

.aimatic-contacts-card.aimatic-visible {
  opacity: 1;
  transform: translateX(0);
}

.aimatic-contacts-card:hover {
  border-color: hsla(217, 91%, 60%, 0.3);
  box-shadow: 0 0 30px hsla(217, 91%, 60%, 0.3);
  transform: scale(1.02) translateX(10px);
}

.aimatic-contacts-card-icon {
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

.aimatic-contacts-card:hover .aimatic-contacts-card-icon {
  transform: scale(1.2) rotate(10deg);
}

.aimatic-contacts-card-icon svg {
  width: 24px;
  height: 24px;
  color: hsl(217, 91%, 60%);
}

.aimatic-contacts-card-label {
  font-size: 0.875rem;
  color: hsl(215, 20%, 55%);
}

.aimatic-contacts-card-value {
  font-size: 1.125rem;
  font-weight: 600;
  color: hsl(210, 40%, 96%);
  transition: color 0.3s ease;
}

.aimatic-contacts-card:hover .aimatic-contacts-card-value {
  color: hsl(217, 91%, 60%);
}

.aimatic-contacts-social {
  display: flex;
  gap: 1rem;
}

.aimatic-contacts-social-btn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: transparent;
  color: hsl(217, 91%, 60%);
  font-weight: 600;
  border-radius: 0.75rem;
  border: 2px solid hsl(217, 91%, 60%);
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px hsla(217, 91%, 60%, 0.2);
}

.aimatic-contacts-social-btn:hover {
  background: hsla(217, 91%, 60%, 0.1);
  transform: scale(1.05);
  box-shadow: 0 0 30px hsla(217, 91%, 60%, 0.3);
}

.aimatic-contacts-social-btn svg {
  width: 20px;
  height: 20px;
}

.aimatic-contacts-form-wrapper {
  opacity: 0;
  transform: translateX(60px) rotateY(-10deg);
  transition: all 0.8s ease;
}

.aimatic-contacts-form-wrapper.aimatic-visible {
  opacity: 1;
  transform: translateX(0) rotateY(0);
}

.aimatic-contacts-form {
  position: relative;
  padding: 2rem;
  background: hsla(230, 25%, 8%, 0.4);
  backdrop-filter: blur(24px);
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.aimatic-contacts-form:hover {
  transform: scale(1.01);
}

.aimatic-contacts-form-border {
  position: absolute;
  inset: 0;
  border: 2px solid hsla(217, 91%, 60%, 0.2);
  border-radius: 0.75rem;
  pointer-events: none;
  transition: border-color 0.3s ease;
}

.aimatic-contacts-form:focus-within .aimatic-contacts-form-border {
  border-color: hsla(217, 91%, 60%, 0.5);
}

.aimatic-contacts-form h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: hsl(210, 40%, 96%);
  margin-bottom: 1.5rem;
}

.aimatic-contacts-field {
  margin-bottom: 1.5rem;
}

.aimatic-contacts-field label {
  display: block;
  font-size: 0.875rem;
  color: hsl(215, 20%, 55%);
  margin-bottom: 0.5rem;
}

.aimatic-contacts-field input,
.aimatic-contacts-field textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  background: hsl(230, 25%, 5%);
  border: 1px solid hsl(230, 20%, 18%);
  border-radius: 0.75rem;
  color: hsl(210, 40%, 96%);
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
  outline: none;
}

.aimatic-contacts-field input:focus,
.aimatic-contacts-field textarea:focus {
  border-color: hsl(217, 91%, 60%);
  box-shadow: 0 0 0 2px hsla(217, 91%, 60%, 0.2);
  transform: scale(1.01);
}

.aimatic-contacts-field input::placeholder,
.aimatic-contacts-field textarea::placeholder {
  color: hsl(215, 20%, 40%);
}

.aimatic-contacts-field textarea {
  resize: none;
  min-height: 100px;
}

.aimatic-contacts-submit {
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, hsl(217, 91%, 60%), hsl(190, 95%, 50%));
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 30px hsla(217, 91%, 60%, 0.3);
}

.aimatic-contacts-submit:hover {
  transform: scale(1.02);
  box-shadow: 0 0 60px hsla(217, 91%, 60%, 0.4);
}

.aimatic-contacts-submit:active {
  transform: scale(0.98);
}

.aimatic-contacts-disclaimer {
  margin-top: 1rem;
  font-size: 0.75rem;
  color: hsl(215, 20%, 55%);
  text-align: center;
}
</style>

<section id="contacts" class="aimatic-contacts">
  <div class="aimatic-contacts-bg"></div>
  <div class="aimatic-contacts-orb-1"></div>
  <div class="aimatic-contacts-orb-2"></div>
  
  <div class="aimatic-contacts-container">
    <!-- Header -->
    <div class="aimatic-contacts-header aimatic-reveal">
      <h2 class="aimatic-contacts-title">Свяжитесь с нами</h2>
      <div class="aimatic-contacts-line"></div>
      <p class="aimatic-contacts-subtitle">
        Свяжитесь с нами для обсуждения вашего проекта по внедрению ИИ-агентов
      </p>
    </div>

    <!-- Grid -->
    <div class="aimatic-contacts-grid">
      <!-- Info Column -->
      <div class="aimatic-contacts-info">
        <div class="aimatic-contacts-cards">
          <!-- Phone -->
          <a href="tel:+79293844844" class="aimatic-contacts-card aimatic-reveal">
            <div class="aimatic-contacts-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div>
              <p class="aimatic-contacts-card-label">Телефон</p>
              <p class="aimatic-contacts-card-value">8 929 384-48-44</p>
            </div>
          </a>

          <!-- Email -->
          <a href="mailto:aimatic@yandex.ru" class="aimatic-contacts-card aimatic-reveal">
            <div class="aimatic-contacts-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div>
              <p class="aimatic-contacts-card-label">Email</p>
              <p class="aimatic-contacts-card-value">aimatic@yandex.ru</p>
            </div>
          </a>

          <!-- Address -->
          <div class="aimatic-contacts-card aimatic-reveal">
            <div class="aimatic-contacts-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div>
              <p class="aimatic-contacts-card-label">Адрес</p>
              <p class="aimatic-contacts-card-value">г. Новосибирск</p>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="aimatic-contacts-social aimatic-reveal">
          <a href="https://t.me/aimatic1" target="_blank" rel="noopener noreferrer" class="aimatic-contacts-social-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
            Telegram
          </a>
          <a href="https://wa.me/79293844844" target="_blank" rel="noopener noreferrer" class="aimatic-contacts-social-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            WhatsApp
          </a>
          <a href="https://vk.com/aimatic1" target="_blank" rel="noopener noreferrer" class="aimatic-contacts-social-btn">
            VK
          </a>
        </div>
      </div>

      <!-- Form Column -->
      <div class="aimatic-contacts-form-wrapper aimatic-reveal">
        <form class="aimatic-contacts-form" id="aimatic-contact-form">
          <div class="aimatic-contacts-form-border"></div>
          
          <h3>Получить консультацию</h3>

          <div class="aimatic-contacts-field">
            <label for="contact-name">Ваше имя</label>
            <input type="text" id="contact-name" name="name" placeholder="Как вас зовут?" required>
          </div>

          <div class="aimatic-contacts-field">
            <label for="contact-phone">Телефон</label>
            <input type="tel" id="contact-phone" name="phone" placeholder="+7 (___) ___-__-__" required>
          </div>

          <div class="aimatic-contacts-field">
            <label for="contact-message">Сообщение</label>
            <textarea id="contact-message" name="message" placeholder="Расскажите о вашем проекте" rows="4"></textarea>
          </div>

          <button type="submit" class="aimatic-contacts-submit">
            Отправить заявку
          </button>

          <p class="aimatic-contacts-disclaimer">
            Нажимая на кнопку, вы даете согласие на обработку персональных данных
          </p>
        </form>
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

  document.querySelectorAll('.aimatic-contacts .aimatic-reveal').forEach(el => {
    observer.observe(el);
  });

  // Form submission
  const form = document.getElementById('aimatic-contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('contact-name').value;
      const phone = document.getElementById('contact-phone').value;
      const message = document.getElementById('contact-message').value;
      
      const text = encodeURIComponent(
        'Здравствуйте! Меня зовут ' + name + '.\\n\\n' + 
        (message || 'Хочу узнать подробнее об услугах') + 
        '\\n\\nМой телефон: ' + phone
      );
      
      window.open('https://wa.me/79293844844?text=' + text, '_blank');
    });
  }
})();
</script>
`;

export default generateContactsBlock;
