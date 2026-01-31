// Marquee (Parallax Text) Block for Tilda T123

export const generateMarqueeBlock = () => `
<!-- Aimatic Marquee Block -->
<style>
.aimatic-marquee {
  padding: 2rem 0;
  background: hsla(230, 25%, 8%, 0.5);
  border-top: 1px solid hsl(230, 20%, 18%);
  border-bottom: 1px solid hsl(230, 20%, 18%);
  overflow: hidden;
  font-family: 'Inter', system-ui, sans-serif;
}

.aimatic-marquee-track {
  display: flex;
  white-space: nowrap;
  animation: aimatic-marquee-scroll 30s linear infinite;
}

.aimatic-marquee-content {
  display: flex;
  gap: 2rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: hsla(217, 91%, 60%, 0.2);
  padding-right: 2rem;
}

@keyframes aimatic-marquee-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Pause on hover */
.aimatic-marquee:hover .aimatic-marquee-track {
  animation-play-state: paused;
}
</style>

<div class="aimatic-marquee">
  <div class="aimatic-marquee-track">
    <div class="aimatic-marquee-content">
      <span>AI AGENTS</span>
      <span>•</span>
      <span>AUTOMATION</span>
      <span>•</span>
      <span>MACHINE LEARNING</span>
      <span>•</span>
      <span>NEURAL NETWORKS</span>
      <span>•</span>
      <span>AI AGENTS</span>
      <span>•</span>
      <span>AUTOMATION</span>
      <span>•</span>
      <span>MACHINE LEARNING</span>
      <span>•</span>
      <span>NEURAL NETWORKS</span>
      <span>•</span>
    </div>
    <div class="aimatic-marquee-content">
      <span>AI AGENTS</span>
      <span>•</span>
      <span>AUTOMATION</span>
      <span>•</span>
      <span>MACHINE LEARNING</span>
      <span>•</span>
      <span>NEURAL NETWORKS</span>
      <span>•</span>
      <span>AI AGENTS</span>
      <span>•</span>
      <span>AUTOMATION</span>
      <span>•</span>
      <span>MACHINE LEARNING</span>
      <span>•</span>
      <span>NEURAL NETWORKS</span>
      <span>•</span>
    </div>
  </div>
</div>
`;

export default generateMarqueeBlock;
