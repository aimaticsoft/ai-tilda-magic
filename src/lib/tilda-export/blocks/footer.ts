// Footer Block for Tilda T123

export const generateFooterBlock = () => `
<!-- Aimatic Footer Block -->
<style>
.aimatic-footer {
  position: relative;
  padding: 3rem 0;
  font-family: 'Inter', system-ui, sans-serif;
  background: hsl(230, 25%, 5%);
  border-top: 1px solid hsl(230, 20%, 18%);
}

.aimatic-footer-bg {
  position: absolute;
  inset: 0;
  background: hsla(230, 25%, 8%, 0.5);
}

.aimatic-footer-container {
  position: relative;
  z-index: 10;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .aimatic-footer-container { padding: 0 1.5rem; }
}

@media (min-width: 1024px) {
  .aimatic-footer-container { padding: 0 2rem; }
}

.aimatic-footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .aimatic-footer-content {
    flex-direction: row;
  }
}

.aimatic-footer-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.aimatic-footer-logo-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, hsl(217, 91%, 60%), hsl(190, 95%, 50%));
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px hsla(217, 91%, 60%, 0.3);
}

.aimatic-footer-logo-icon span {
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
}

.aimatic-footer-logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  background: linear-gradient(135deg, hsl(217, 91%, 60%), hsl(190, 95%, 50%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.aimatic-footer-copyright {
  font-size: 0.875rem;
  color: hsl(215, 20%, 55%);
  text-align: center;
}

.aimatic-footer-links {
  display: flex;
  gap: 1.5rem;
}

.aimatic-footer-link {
  font-size: 0.875rem;
  color: hsl(215, 20%, 55%);
  text-decoration: none;
  transition: color 0.3s ease;
}

.aimatic-footer-link:hover {
  color: hsl(217, 91%, 60%);
}
</style>

<footer class="aimatic-footer">
  <div class="aimatic-footer-bg"></div>
  
  <div class="aimatic-footer-container">
    <div class="aimatic-footer-content">
      <!-- Logo -->
      <a href="#" class="aimatic-footer-logo">
        <div class="aimatic-footer-logo-icon">
          <span>A</span>
        </div>
        <span class="aimatic-footer-logo-text">Aimatic</span>
      </a>

      <!-- Copyright -->
      <p class="aimatic-footer-copyright">
        © 2025 Aimatic. Все права защищены.
      </p>

      <!-- Links -->
      <div class="aimatic-footer-links">
        <a href="https://t.me/aimatic1" target="_blank" rel="noopener noreferrer" class="aimatic-footer-link">
          Telegram
        </a>
        <a href="https://wa.me/79293844844" target="_blank" rel="noopener noreferrer" class="aimatic-footer-link">
          WhatsApp
        </a>
        <a href="https://vk.com/aimatic1" target="_blank" rel="noopener noreferrer" class="aimatic-footer-link">
          VK
        </a>
      </div>
    </div>
  </div>
</footer>
`;

export default generateFooterBlock;
