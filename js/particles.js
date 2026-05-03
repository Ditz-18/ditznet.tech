/* ============================================================
   DITZNET TECHNOLOGY — Particles Animation
   ============================================================ */

(function () {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, particles = [], animId;

  const CONFIG = {
    count: window.innerWidth < 768 ? 35 : 70,
    colors: ['rgba(0,212,255,', 'rgba(26,111,255,', 'rgba(124,58,237,'],
    minSize: 1,
    maxSize: 2.5,
    minSpeed: 0.1,
    maxSpeed: 0.4,
    connectDist: 120,
    connectOpacity: 0.08,
    mouseRadius: 150,
    mouseForce: 0.02,
  };

  let mouse = { x: -9999, y: -9999 };

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * (CONFIG.maxSpeed - CONFIG.minSpeed) + CONFIG.minSpeed * Math.sign(Math.random() - 0.5),
      vy: (Math.random() - 0.5) * (CONFIG.maxSpeed - CONFIG.minSpeed) + CONFIG.minSpeed * Math.sign(Math.random() - 0.5),
      size: Math.random() * (CONFIG.maxSize - CONFIG.minSize) + CONFIG.minSize,
      color: CONFIG.colors[Math.floor(Math.random() * CONFIG.colors.length)],
      opacity: Math.random() * 0.5 + 0.2,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: (Math.random() * 0.02 + 0.01),
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: CONFIG.count }, createParticle);
  }

  function drawParticle(p) {
    p.pulsePhase += p.pulseSpeed;
    const opacity = p.opacity * (0.7 + 0.3 * Math.sin(p.pulsePhase));
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.color + opacity + ')';
    ctx.fill();
  }

  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONFIG.connectDist) {
          const opacity = CONFIG.connectOpacity * (1 - dist / CONFIG.connectDist);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,212,255,${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function updateParticle(p) {
    // Mouse interaction
    const mdx = mouse.x - p.x;
    const mdy = mouse.y - p.y;
    const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
    if (mdist < CONFIG.mouseRadius) {
      const force = (1 - mdist / CONFIG.mouseRadius) * CONFIG.mouseForce;
      p.vx -= mdx * force;
      p.vy -= mdy * force;
    }

    // Dampen velocity
    p.vx *= 0.999;
    p.vy *= 0.999;

    // Clamp speed
    const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
    if (speed > CONFIG.maxSpeed) {
      p.vx = (p.vx / speed) * CONFIG.maxSpeed;
      p.vy = (p.vy / speed) * CONFIG.maxSpeed;
    }
    if (speed < CONFIG.minSpeed * 0.5) {
      p.vx += (Math.random() - 0.5) * 0.05;
      p.vy += (Math.random() - 0.5) * 0.05;
    }

    p.x += p.vx;
    p.y += p.vy;

    // Wrap edges
    if (p.x < -10) p.x = W + 10;
    if (p.x > W + 10) p.x = -10;
    if (p.y < -10) p.y = H + 10;
    if (p.y > H + 10) p.y = -10;
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(updateParticle);
    connectParticles();
    particles.forEach(drawParticle);
    animId = requestAnimationFrame(animate);
  }

  // Events
  window.addEventListener('resize', () => {
    resize();
    // Adjust count on resize
    if (particles.length < CONFIG.count) {
      while (particles.length < CONFIG.count) particles.push(createParticle());
    }
  }, { passive: true });

  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  // Pause when tab is hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animId);
    } else {
      animate();
    }
  });

  init();
  animate();
})();
