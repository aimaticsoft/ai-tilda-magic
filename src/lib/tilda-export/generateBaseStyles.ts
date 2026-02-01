// Base CSS for Tilda T123 blocks
// Insert this in the first T123 block or in Tilda Site Settings -> Additional CSS

export const generateBaseStyles = () => `
<!-- Aimatic Base Styles for Tilda -->
<style>
/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

/* CSS Variables */
:root {
  /* Base colors - Deep dark space */
  --aimatic-background: hsl(230, 25%, 5%);
  --aimatic-foreground: hsl(210, 40%, 96%);
  --aimatic-card: hsl(230, 25%, 8%);
  --aimatic-card-foreground: hsl(210, 40%, 96%);
  
  /* Primary - Neon Blue */
  --aimatic-primary: hsl(217, 91%, 60%);
  --aimatic-primary-foreground: hsl(0, 0%, 100%);
  
  /* Secondary */
  --aimatic-secondary: hsl(230, 25%, 12%);
  --aimatic-secondary-foreground: hsl(210, 40%, 96%);
  
  /* Muted */
  --aimatic-muted: hsl(230, 20%, 15%);
  --aimatic-muted-foreground: hsl(215, 20%, 55%);
  
  /* Accent - Cyan Glow */
  --aimatic-accent: hsl(190, 95%, 50%);
  --aimatic-accent-foreground: hsl(230, 25%, 5%);
  
  --aimatic-border: hsl(230, 20%, 18%);
  --aimatic-ring: hsl(217, 91%, 60%);
  --aimatic-radius: 0.75rem;
  
  /* Neon colors */
  --aimatic-neon-blue: hsl(217, 91%, 60%);
  --aimatic-neon-cyan: hsl(190, 95%, 50%);
  --aimatic-neon-purple: hsl(270, 91%, 65%);
  
  /* Shadows & Glows */
  --aimatic-shadow-glow: 0 0 30px hsla(217, 91%, 60%, 0.3);
  --aimatic-shadow-glow-lg: 0 0 60px hsla(217, 91%, 60%, 0.4);
  --aimatic-shadow-cyan: 0 0 30px hsla(190, 95%, 50%, 0.3);
  --aimatic-shadow-soft: 0 10px 40px hsla(230, 25%, 5%, 0.5);
}

/* Base Styles */
.aimatic-section {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: var(--aimatic-foreground);
  line-height: 1.6;
  box-sizing: border-box;
}

.aimatic-section *, 
.aimatic-section *::before, 
.aimatic-section *::after {
  box-sizing: border-box;
}

.aimatic-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .aimatic-container { padding: 0 1.5rem; }
}

@media (min-width: 1024px) {
  .aimatic-container { padding: 0 2rem; }
}

/* Typography */
.aimatic-heading-primary {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  background: linear-gradient(135deg, #fff, var(--aimatic-primary), var(--aimatic-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
}

.aimatic-heading-secondary {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
}

.aimatic-text-gradient {
  background: linear-gradient(135deg, var(--aimatic-primary), var(--aimatic-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.aimatic-text-muted {
  color: var(--aimatic-muted-foreground);
}

/* Accent line */
.aimatic-accent-line {
  height: 4px;
  width: 80px;
  background: linear-gradient(135deg, var(--aimatic-primary), var(--aimatic-accent));
  border-radius: 9999px;
  margin: 0 auto;
}

/* Cards */
.aimatic-glass-card {
  background: hsla(230, 25%, 8%, 0.4);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  border-radius: 1rem;
  box-shadow: var(--aimatic-shadow-soft);
}

.aimatic-glass-card-hover {
  background: hsla(230, 25%, 8%, 0.4);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  border-radius: 1rem;
  box-shadow: var(--aimatic-shadow-soft);
  transition: all 0.5s ease;
}

.aimatic-glass-card-hover:hover {
  border-color: hsla(217, 91%, 60%, 0.3);
  box-shadow: var(--aimatic-shadow-glow);
  transform: translateY(-4px);
}

/* Buttons */
.aimatic-btn-neon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--aimatic-primary), var(--aimatic-accent));
  color: #fff;
  font-weight: 600;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: var(--aimatic-shadow-glow);
}

.aimatic-btn-neon:hover {
  transform: scale(1.05);
  box-shadow: var(--aimatic-shadow-glow-lg);
}

.aimatic-btn-neon-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: transparent;
  color: var(--aimatic-primary);
  font-weight: 600;
  border-radius: 0.75rem;
  border: 2px solid var(--aimatic-primary);
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px hsla(217, 91%, 60%, 0.2);
}

.aimatic-btn-neon-outline:hover {
  background: hsla(217, 91%, 60%, 0.1);
  transform: scale(1.05);
  box-shadow: var(--aimatic-shadow-glow);
}

/* Icon container */
.aimatic-icon-glow {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 0.75rem;
  background: hsla(217, 91%, 60%, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 20px hsla(217, 91%, 60%, 0.1);
}

/* Grid background */
.aimatic-grid-bg {
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

.aimatic-animated-grid {
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
  background-size: 80px 80px;
  animation: aimatic-gridMove 20s linear infinite;
}

/* Keyframes */
@keyframes aimatic-fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes aimatic-fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes aimatic-scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes aimatic-float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes aimatic-pulseGlow {
  0%, 100% { 
    box-shadow: 0 0 20px hsla(217, 91%, 60%, 0.3);
  }
  50% { 
    box-shadow: 0 0 40px hsla(217, 91%, 60%, 0.6);
  }
}

@keyframes aimatic-gridMove {
  0% { background-position: 0 0; }
  100% { background-position: 80px 80px; }
}

@keyframes aimatic-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes aimatic-marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes aimatic-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Animation classes */
.aimatic-animate-fade-up {
  animation: aimatic-fadeUp 0.8s ease-out forwards;
  opacity: 0;
}

.aimatic-animate-float {
  animation: aimatic-float 6s ease-in-out infinite;
}

.aimatic-animate-pulse {
  animation: aimatic-pulse 2s ease-in-out infinite;
}

.aimatic-animate-pulse-glow {
  animation: aimatic-pulseGlow 2s ease-in-out infinite;
}

/* Delay utilities */
.aimatic-delay-100 { animation-delay: 100ms; }
.aimatic-delay-200 { animation-delay: 200ms; }
.aimatic-delay-300 { animation-delay: 300ms; }
.aimatic-delay-400 { animation-delay: 400ms; }
.aimatic-delay-500 { animation-delay: 500ms; }
.aimatic-delay-600 { animation-delay: 600ms; }

/* Intersection Observer animation trigger */
.aimatic-reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease-out;
}

.aimatic-reveal.aimatic-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Utility classes */
.aimatic-flex { display: flex; }
.aimatic-flex-col { flex-direction: column; }
.aimatic-items-center { align-items: center; }
.aimatic-justify-center { justify-content: center; }
.aimatic-justify-between { justify-content: space-between; }
.aimatic-gap-2 { gap: 0.5rem; }
.aimatic-gap-4 { gap: 1rem; }
.aimatic-gap-6 { gap: 1.5rem; }
.aimatic-gap-8 { gap: 2rem; }
.aimatic-text-center { text-align: center; }
.aimatic-text-sm { font-size: 0.875rem; }
.aimatic-text-lg { font-size: 1.125rem; }
.aimatic-text-xl { font-size: 1.25rem; }
.aimatic-font-semibold { font-weight: 600; }
.aimatic-font-bold { font-weight: 700; }
.aimatic-mb-4 { margin-bottom: 1rem; }
.aimatic-mb-6 { margin-bottom: 1.5rem; }
.aimatic-mb-8 { margin-bottom: 2rem; }
.aimatic-mb-16 { margin-bottom: 4rem; }
.aimatic-py-24 { padding-top: 6rem; padding-bottom: 6rem; }
.aimatic-relative { position: relative; }
.aimatic-absolute { position: absolute; }
.aimatic-inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
.aimatic-z-10 { z-index: 10; }
.aimatic-overflow-hidden { overflow: hidden; }
.aimatic-w-full { width: 100%; }
.aimatic-h-full { height: 100%; }
.aimatic-rounded-xl { border-radius: 0.75rem; }
.aimatic-rounded-2xl { border-radius: 1rem; }

/* Grid layouts */
.aimatic-grid { display: grid; }
.aimatic-grid-cols-1 { grid-template-columns: repeat(1, 1fr); }

@media (min-width: 768px) {
  .aimatic-md-grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
  .aimatic-md-grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 1024px) {
  .aimatic-lg-grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
}
</style>

<script>
// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aimatic-visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '-50px'
  });

  document.querySelectorAll('.aimatic-reveal').forEach(el => {
    observer.observe(el);
  });
});
</script>
`;

export default generateBaseStyles;
