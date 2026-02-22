/* ============================================
   No Box Dev
   Nav, scroll reveals, hero variants, form
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(pointer: coarse)').matches;

  // --- Sticky Nav ---
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --- Mobile Nav Toggle ---
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const backdrop = document.querySelector('.nav-backdrop');

  function closeNav() {
    if (!toggle || !navLinks) return;
    toggle.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.classList.remove('nav-open');
    if (nav) nav.classList.remove('nav-open');
    if (backdrop) backdrop.classList.remove('active');
  }

  function openNav() {
    if (!toggle || !navLinks) return;
    toggle.classList.add('open');
    navLinks.classList.add('open');
    document.body.classList.add('nav-open');
    if (nav) nav.classList.add('nav-open');
    if (backdrop) backdrop.classList.add('active');
  }

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.contains('open') ? closeNav() : openNav();
    });
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
    if (backdrop) backdrop.addEventListener('click', closeNav);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) closeNav();
    });
  }

  // --- Active Nav Link ---
  const path = location.pathname.replace(/\/+$/, '') || '/';
  document.querySelectorAll('.nav-links a:not(.btn)').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === '/')) a.classList.add('active');
  });

  // --- Scroll Reveal ---
  const reveals = document.querySelectorAll('.reveal, .reveal-stagger');
  if (reveals.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => obs.observe(el));
  }

  // --- Step Highlighting ---
  const steps = document.querySelectorAll('.step-item');
  if (steps.length) {
    function hlSteps() {
      const mid = window.innerHeight * 0.6;
      steps.forEach(s => {
        const r = s.getBoundingClientRect();
        s.classList.toggle('active', r.top < mid && r.bottom > mid * 0.3);
      });
    }
    window.addEventListener('scroll', hlSteps, { passive: true });
    hlSteps();
  }

  // --- Contact Form ---
  const form = document.querySelector('#contact-form');
  const formOk = document.querySelector('.form-success');
  if (form) {
    form.addEventListener('submit', () => {
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Sending...';
      btn.disabled = true;
      if (formOk) setTimeout(() => { form.style.display = 'none'; formOk.classList.add('show'); }, 1000);
    });
  }

  // ============================================
  //  HERO SYSTEM — 10 Variants + Selector
  // ============================================
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // --- Word Rotation (shared across all variants) ---
  const rotator = document.getElementById('hero-rotate');
  if (rotator && !reducedMotion) {
    const words = rotator.querySelectorAll('.hero-rotate-word');
    let cur = 0;
    setInterval(() => {
      const prev = words[cur];
      cur = (cur + 1) % words.length;
      const next = words[cur];
      prev.classList.add('exit');
      prev.classList.remove('active');
      next.classList.add('active');
      next.classList.remove('exit');
      setTimeout(() => prev.classList.remove('exit'), 600);
    }, 3000);
  }

  // --- Canvas setup ---
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;

  function resize() {
    canvas.width = hero.offsetWidth * dpr;
    canvas.height = hero.offsetHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  const W = () => hero.offsetWidth;
  const H = () => hero.offsetHeight;

  let mouseX = W() / 2, mouseY = H() / 2, mouseIn = false;
  if (!isTouch) {
    hero.addEventListener('mousemove', e => {
      const r = hero.getBoundingClientRect();
      mouseX = e.clientX - r.left;
      mouseY = e.clientY - r.top;
      mouseIn = true;
    });
    hero.addEventListener('mouseleave', () => { mouseIn = false; });
  }

  // Colors
  const CORAL = '254,121,93';
  const PURPLE = '155,120,244';

  // Animation state
  let animId = null;
  let variantState = {};

  function stopAnim() {
    if (animId) cancelAnimationFrame(animId);
    animId = null;
    variantState = {};
  }

  // --- Variant Selector ---
  const selBtns = document.querySelectorAll('.hero-sel-btn');
  let activeVariant = 'particles';

  selBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const v = btn.dataset.variant;
      if (v === activeVariant) return;
      selBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      switchVariant(v);
    });
  });

  function switchVariant(v) {
    stopAnim();
    activeVariant = v;
    hero.dataset.variant = v;
    ctx.clearRect(0, 0, W(), H());
    if (!reducedMotion) initVariant(v);
  }

  function initVariant(v) {
    switch (v) {
      case 'particles': initParticles(); break;
      case 'flow': initFlowField(); break;
      case 'waves': initWaves(); break;
      case 'constellation': initConstellation(); break;
      case 'aurora': initAurora(); break;
      case 'bubbles': initBubbles(); break;
      case 'rings': initRings(); break;
      case 'morph': initMorph(); break;
      case 'grid': initGridWarp(); break;
      case 'comet': initComets(); break;
    }
  }

  // =============================================
  //  1. PARTICLES — Magnetic connected dots
  // =============================================
  function initParticles() {
    const COUNT = isTouch ? 35 : 60;
    const pts = [];
    for (let i = 0; i < COUNT; i++) {
      pts.push({
        x: Math.random() * W(), y: Math.random() * H(),
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2 + 1.5,
        color: Math.random() > 0.5 ? CORAL : PURPLE
      });
    }
    variantState.pts = pts;

    function draw() {
      ctx.clearRect(0, 0, W(), H());
      const { pts } = variantState;

      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -10) p.x = W() + 10;
        if (p.x > W() + 10) p.x = -10;
        if (p.y < -10) p.y = H() + 10;
        if (p.y > H() + 10) p.y = -10;

        if (mouseIn) {
          const dx = mouseX - p.x, dy = mouseY - p.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 200 && d > 1) {
            const f = (1 - d / 200) * 0.02;
            p.vx += dx / d * f;
            p.vy += dy / d * f;
          }
        }
        p.vx *= 0.995; p.vy *= 0.995;
      });

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 140) {
            ctx.strokeStyle = `rgba(${pts[i].color},${(1 - d / 140) * 0.12})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      pts.forEach(p => {
        ctx.fillStyle = `rgba(${p.color},0.06)`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = `rgba(${p.color},0.5)`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    }
    draw();
  }

  // =============================================
  //  2. FLOW FIELD — Particles following noise
  // =============================================
  function initFlowField() {
    // Simple noise via sine combinations
    function noise(x, y, t) {
      return Math.sin(x * 0.01 + t) * Math.cos(y * 0.012 - t * 0.7) +
             Math.sin((x + y) * 0.008 + t * 0.5) * 0.5;
    }

    const COUNT = isTouch ? 200 : 400;
    const pts = [];
    for (let i = 0; i < COUNT; i++) {
      pts.push({
        x: Math.random() * W(), y: Math.random() * H(),
        prevX: 0, prevY: 0,
        speed: Math.random() * 1.5 + 0.5,
        color: Math.random() > 0.5 ? CORAL : PURPLE,
        alpha: Math.random() * 0.3 + 0.1,
        life: Math.random() * 200
      });
    }
    variantState = { pts, time: 0 };

    function draw() {
      // Fade trail
      ctx.fillStyle = 'rgba(250,250,248,0.06)';
      ctx.fillRect(0, 0, W(), H());
      variantState.time += 0.008;
      const t = variantState.time;

      variantState.pts.forEach(p => {
        p.prevX = p.x; p.prevY = p.y;
        const angle = noise(p.x, p.y, t) * Math.PI * 2;
        p.x += Math.cos(angle) * p.speed;
        p.y += Math.sin(angle) * p.speed;
        p.life++;

        if (p.x < 0 || p.x > W() || p.y < 0 || p.y > H() || p.life > 300) {
          p.x = Math.random() * W();
          p.y = Math.random() * H();
          p.prevX = p.x; p.prevY = p.y;
          p.life = 0;
        }

        ctx.strokeStyle = `rgba(${p.color},${p.alpha})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(p.prevX, p.prevY);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      });

      animId = requestAnimationFrame(draw);
    }

    // Clear first
    ctx.fillStyle = 'rgba(250,250,248,1)';
    ctx.fillRect(0, 0, W(), H());
    draw();
  }

  // =============================================
  //  3. WAVES — Layered flowing sine waves
  // =============================================
  function initWaves() {
    variantState.time = 0;

    function draw() {
      ctx.clearRect(0, 0, W(), H());
      variantState.time += 0.015;
      const t = variantState.time;
      const w = W(), h = H();
      const mid = h * 0.55;

      const layers = [
        { color: CORAL, alpha: 0.08, amp: 60, freq: 0.003, speed: 1, yOff: 0 },
        { color: PURPLE, alpha: 0.06, amp: 45, freq: 0.004, speed: -0.7, yOff: 30 },
        { color: CORAL, alpha: 0.05, amp: 35, freq: 0.005, speed: 1.3, yOff: 60 },
        { color: PURPLE, alpha: 0.04, amp: 50, freq: 0.002, speed: -0.5, yOff: -20 },
        { color: CORAL, alpha: 0.07, amp: 25, freq: 0.006, speed: 0.9, yOff: 90 },
      ];

      layers.forEach(l => {
        ctx.fillStyle = `rgba(${l.color},${l.alpha})`;
        ctx.beginPath();
        ctx.moveTo(0, h);

        for (let x = 0; x <= w; x += 3) {
          const y = mid + l.yOff +
            Math.sin(x * l.freq + t * l.speed) * l.amp +
            Math.sin(x * l.freq * 2.3 + t * l.speed * 0.7) * l.amp * 0.3;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(w, h);
        ctx.closePath();
        ctx.fill();
      });

      // Mouse ripple
      if (mouseIn) {
        ctx.strokeStyle = `rgba(${CORAL},0.15)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let x = 0; x <= w; x += 3) {
          const dx = x - mouseX;
          const dist = Math.abs(dx);
          const influence = Math.max(0, 1 - dist / 200);
          const y = mid + Math.sin(x * 0.005 + t) * 40 - influence * 50 * Math.sin(t * 3);
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animId = requestAnimationFrame(draw);
    }
    draw();
  }

  // =============================================
  //  4. CONSTELLATION — Interactive star mesh
  // =============================================
  function initConstellation() {
    const COUNT = isTouch ? 60 : 100;
    const stars = [];
    for (let i = 0; i < COUNT; i++) {
      stars.push({
        x: Math.random() * W(), y: Math.random() * H(),
        vx: (Math.random() - 0.5) * 0.15, vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.5 + 0.5,
        brightness: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.005
      });
    }
    variantState = { stars, time: 0 };

    function draw() {
      ctx.clearRect(0, 0, W(), H());
      variantState.time += 1;
      const { stars, time } = variantState;

      stars.forEach(s => {
        s.x += s.vx; s.y += s.vy;
        if (s.x < 0) s.x = W(); if (s.x > W()) s.x = 0;
        if (s.y < 0) s.y = H(); if (s.y > H()) s.y = 0;
      });

      // Connections — brighter near mouse
      const connDist = 120;
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x, dy = stars[i].y - stars[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < connDist) {
            let alpha = (1 - d / connDist) * 0.08;
            // Boost near mouse
            if (mouseIn) {
              const mx = (stars[i].x + stars[j].x) / 2;
              const my = (stars[i].y + stars[j].y) / 2;
              const md = Math.sqrt((mx - mouseX) ** 2 + (my - mouseY) ** 2);
              if (md < 200) alpha += (1 - md / 200) * 0.15;
            }
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw stars
      stars.forEach(s => {
        const twinkle = (Math.sin(time * s.twinkleSpeed) + 1) / 2;
        let alpha = 0.3 + twinkle * 0.5;
        let glow = 0;

        // Brighten near mouse
        if (mouseIn) {
          const md = Math.sqrt((s.x - mouseX) ** 2 + (s.y - mouseY) ** 2);
          if (md < 180) {
            const boost = (1 - md / 180);
            alpha = Math.min(1, alpha + boost * 0.5);
            glow = boost * 15;
          }
        }

        if (glow > 0) {
          ctx.fillStyle = `rgba(${CORAL},${alpha * 0.15})`;
          ctx.beginPath(); ctx.arc(s.x, s.y, s.r + glow, 0, Math.PI * 2); ctx.fill();
        }

        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    }
    draw();
  }

  // =============================================
  //  5. AURORA — Flowing gradient bands
  // =============================================
  function initAurora() {
    variantState.time = 0;

    function draw() {
      ctx.clearRect(0, 0, W(), H());
      variantState.time += 0.005;
      const t = variantState.time;
      const w = W(), h = H();

      const bands = [
        { color1: [254, 121, 93], color2: [155, 120, 244], y: 0.3, width: 0.25, speed: 1 },
        { color1: [155, 120, 244], color2: [100, 180, 255], y: 0.45, width: 0.2, speed: -0.7 },
        { color1: [254, 121, 93], color2: [255, 180, 100], y: 0.55, width: 0.15, speed: 1.2 },
        { color1: [155, 120, 244], color2: [254, 121, 93], y: 0.65, width: 0.2, speed: -0.5 },
      ];

      bands.forEach(band => {
        const baseY = h * band.y;
        const bw = h * band.width;

        for (let x = 0; x < w; x += 2) {
          const wave = Math.sin(x * 0.003 + t * band.speed) * 40 +
                       Math.sin(x * 0.007 + t * band.speed * 1.5) * 20;
          const y = baseY + wave;
          const intensity = Math.sin(x * 0.002 + t * 0.3) * 0.5 + 0.5;

          const r = band.color1[0] + (band.color2[0] - band.color1[0]) * intensity;
          const g = band.color1[1] + (band.color2[1] - band.color1[1]) * intensity;
          const b = band.color1[2] + (band.color2[2] - band.color1[2]) * intensity;

          const grad = ctx.createLinearGradient(x, y - bw / 2, x, y + bw / 2);
          grad.addColorStop(0, `rgba(${r},${g},${b},0)`);
          grad.addColorStop(0.5, `rgba(${r},${g},${b},0.12)`);
          grad.addColorStop(1, `rgba(${r},${g},${b},0)`);

          ctx.fillStyle = grad;
          ctx.fillRect(x, y - bw / 2, 3, bw);
        }
      });

      animId = requestAnimationFrame(draw);
    }
    draw();
  }

  // =============================================
  //  6. BUBBLES — Soft floating circles
  // =============================================
  function initBubbles() {
    const COUNT = isTouch ? 12 : 20;
    const bubbles = [];
    for (let i = 0; i < COUNT; i++) {
      bubbles.push({
        x: Math.random() * W(), y: Math.random() * H(),
        r: Math.random() * 80 + 30,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3 - 0.1,
        color: Math.random() > 0.5 ? CORAL : PURPLE,
        alpha: Math.random() * 0.08 + 0.03,
        phase: Math.random() * Math.PI * 2
      });
    }
    variantState = { bubbles, time: 0 };

    function draw() {
      ctx.clearRect(0, 0, W(), H());
      variantState.time += 0.01;
      const t = variantState.time;

      variantState.bubbles.forEach(b => {
        b.x += b.vx + Math.sin(t + b.phase) * 0.3;
        b.y += b.vy + Math.cos(t * 0.7 + b.phase) * 0.2;

        // Wrap
        if (b.y < -b.r * 2) { b.y = H() + b.r; b.x = Math.random() * W(); }
        if (b.x < -b.r * 2) b.x = W() + b.r;
        if (b.x > W() + b.r * 2) b.x = -b.r;

        // Mouse push
        if (mouseIn) {
          const dx = b.x - mouseX, dy = b.y - mouseY;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 150 + b.r && d > 1) {
            b.vx += dx / d * 0.08;
            b.vy += dy / d * 0.08;
          }
        }

        b.vx *= 0.99; b.vy *= 0.99;

        const pulse = 1 + Math.sin(t * 2 + b.phase) * 0.05;
        const r = b.r * pulse;

        // Gradient fill
        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, r);
        grad.addColorStop(0, `rgba(${b.color},${b.alpha * 2})`);
        grad.addColorStop(0.6, `rgba(${b.color},${b.alpha})`);
        grad.addColorStop(1, `rgba(${b.color},0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, r, 0, Math.PI * 2);
        ctx.fill();

        // Rim
        ctx.strokeStyle = `rgba(${b.color},${b.alpha * 1.5})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(b.x, b.y, r * 0.85, 0, Math.PI * 2);
        ctx.stroke();
      });

      animId = requestAnimationFrame(draw);
    }
    draw();
  }

  // =============================================
  //  7. RINGS — Concentric pulsing rings
  // =============================================
  function initRings() {
    variantState.time = 0;

    function draw() {
      ctx.clearRect(0, 0, W(), H());
      variantState.time += 0.008;
      const t = variantState.time;
      const cx = W() / 2, cy = H() / 2;
      const maxR = Math.max(W(), H()) * 0.6;
      const ringCount = 12;

      // Mouse offset
      let ox = 0, oy = 0;
      if (mouseIn) {
        ox = (mouseX - cx) * 0.05;
        oy = (mouseY - cy) * 0.05;
      }

      for (let i = 0; i < ringCount; i++) {
        const progress = i / ringCount;
        const r = progress * maxR + Math.sin(t + i * 0.5) * 15;
        const wobble = Math.sin(t * 2 + i) * 3;

        const color = i % 2 === 0 ? CORAL : PURPLE;
        const alpha = (1 - progress) * 0.12 + Math.sin(t + i * 0.8) * 0.03;

        ctx.strokeStyle = `rgba(${color},${Math.max(0, alpha)})`;
        ctx.lineWidth = 1.5 - progress * 0.8;
        ctx.beginPath();
        ctx.ellipse(
          cx + ox + wobble,
          cy + oy + wobble * 0.5,
          r,
          r * (0.85 + Math.sin(t + i) * 0.05),
          Math.sin(t * 0.3 + i * 0.2) * 0.1,
          0, Math.PI * 2
        );
        ctx.stroke();
      }

      // Center glow
      const grad = ctx.createRadialGradient(cx + ox, cy + oy, 0, cx + ox, cy + oy, 120);
      grad.addColorStop(0, `rgba(${CORAL},0.08)`);
      grad.addColorStop(0.5, `rgba(${PURPLE},0.04)`);
      grad.addColorStop(1, `rgba(${PURPLE},0)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W(), H());

      animId = requestAnimationFrame(draw);
    }
    draw();
  }

  // =============================================
  //  8. MORPH — Organic morphing blob shapes
  // =============================================
  function initMorph() {
    variantState.time = 0;

    function blobPath(cx, cy, r, points, t, speed, wobble) {
      ctx.beginPath();
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const offset = Math.sin(angle * 3 + t * speed) * wobble +
                       Math.cos(angle * 2 - t * speed * 0.7) * wobble * 0.6;
        const pr = r + offset;
        const x = cx + Math.cos(angle) * pr;
        const y = cy + Math.sin(angle) * pr;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
    }

    function draw() {
      ctx.clearRect(0, 0, W(), H());
      variantState.time += 0.008;
      const t = variantState.time;
      const w = W(), h = H();

      const blobs = [
        { cx: w * 0.7, cy: h * 0.35, r: 200, color: CORAL, alpha: 0.12, pts: 80, speed: 0.8, wobble: 40 },
        { cx: w * 0.3, cy: h * 0.6, r: 180, color: PURPLE, alpha: 0.10, pts: 80, speed: -0.6, wobble: 35 },
        { cx: w * 0.5, cy: h * 0.4, r: 140, color: CORAL, alpha: 0.06, pts: 80, speed: 1.1, wobble: 30 },
      ];

      // Mouse influence
      if (mouseIn) {
        blobs[0].cx += (mouseX - w * 0.7) * 0.08;
        blobs[0].cy += (mouseY - h * 0.35) * 0.08;
        blobs[1].cx += (mouseX - w * 0.3) * -0.05;
        blobs[1].cy += (mouseY - h * 0.6) * -0.05;
      }

      blobs.forEach(b => {
        // Blur effect via multiple layers
        for (let layer = 3; layer >= 0; layer--) {
          const lr = b.r + layer * 20;
          const la = b.alpha * (1 - layer * 0.25);
          ctx.fillStyle = `rgba(${b.color},${la})`;
          blobPath(b.cx, b.cy, lr, b.pts, t, b.speed, b.wobble + layer * 8);
          ctx.fill();
        }
      });

      animId = requestAnimationFrame(draw);
    }
    draw();
  }

  // =============================================
  //  9. GRID WARP — Dot grid that distorts
  // =============================================
  function initGridWarp() {
    const spacing = isTouch ? 40 : 30;
    variantState.time = 0;

    function draw() {
      ctx.clearRect(0, 0, W(), H());
      variantState.time += 0.01;
      const t = variantState.time;
      const w = W(), h = H();
      const cols = Math.ceil(w / spacing) + 2;
      const rows = Math.ceil(h / spacing) + 2;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          let x = col * spacing;
          let y = row * spacing;

          // Ambient wave
          x += Math.sin(y * 0.02 + t) * 5;
          y += Math.cos(x * 0.02 + t * 0.7) * 5;

          // Mouse warp
          let warpStrength = 0;
          if (mouseIn) {
            const dx = x - mouseX, dy = y - mouseY;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 200 && d > 1) {
              const push = (1 - d / 200) * 25;
              x += dx / d * push;
              y += dy / d * push;
              warpStrength = 1 - d / 200;
            }
          }

          const baseAlpha = 0.1 + Math.sin(col * 0.3 + row * 0.3 + t) * 0.04;
          const alpha = baseAlpha + warpStrength * 0.4;
          const r = 1.5 + warpStrength * 2.5;
          const color = (col + row) % 3 === 0 ? CORAL : PURPLE;

          ctx.fillStyle = `rgba(${color},${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw some connecting lines near mouse
      if (mouseIn) {
        for (let row = 0; row < rows - 1; row++) {
          for (let col = 0; col < cols - 1; col++) {
            let x1 = col * spacing + Math.sin(row * spacing * 0.02 + t) * 5;
            let y1 = row * spacing + Math.cos(col * spacing * 0.02 + t * 0.7) * 5;
            const dx1 = x1 - mouseX, dy1 = y1 - mouseY;
            const d1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);

            if (d1 < 120) {
              let x2 = (col + 1) * spacing + Math.sin((row) * spacing * 0.02 + t) * 5;
              let y2 = row * spacing + Math.cos((col + 1) * spacing * 0.02 + t * 0.7) * 5;
              let x3 = col * spacing + Math.sin((row + 1) * spacing * 0.02 + t) * 5;
              let y3 = (row + 1) * spacing + Math.cos(col * spacing * 0.02 + t * 0.7) * 5;

              const a = (1 - d1 / 120) * 0.1;
              ctx.strokeStyle = `rgba(${CORAL},${a})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
              ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x3, y3); ctx.stroke();
            }
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }
    draw();
  }

  // =============================================
  //  10. COMETS — Particles with trailing tails
  // =============================================
  function initComets() {
    const COUNT = isTouch ? 8 : 15;
    const comets = [];
    for (let i = 0; i < COUNT; i++) {
      comets.push(makeComet());
    }
    variantState = { comets, time: 0 };

    function makeComet() {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2 + 0.8;
      return {
        x: Math.random() * W(), y: Math.random() * H(),
        vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
        trail: [],
        maxTrail: Math.floor(Math.random() * 25) + 15,
        r: Math.random() * 3 + 2,
        color: Math.random() > 0.5 ? CORAL : PURPLE,
        curve: (Math.random() - 0.5) * 0.01
      };
    }

    function draw() {
      ctx.clearRect(0, 0, W(), H());
      variantState.time += 0.01;

      variantState.comets.forEach(c => {
        // Slight curve
        const angle = Math.atan2(c.vy, c.vx) + c.curve;
        const speed = Math.sqrt(c.vx * c.vx + c.vy * c.vy);
        c.vx = Math.cos(angle) * speed;
        c.vy = Math.sin(angle) * speed;

        // Mouse attraction
        if (mouseIn) {
          const dx = mouseX - c.x, dy = mouseY - c.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 250 && d > 1) {
            c.vx += dx / d * 0.05;
            c.vy += dy / d * 0.05;
          }
        }

        c.x += c.vx;
        c.y += c.vy;

        c.trail.unshift({ x: c.x, y: c.y });
        if (c.trail.length > c.maxTrail) c.trail.pop();

        // Reset if off screen
        if (c.x < -50 || c.x > W() + 50 || c.y < -50 || c.y > H() + 50) {
          Object.assign(c, makeComet());
          // Enter from edge
          const side = Math.floor(Math.random() * 4);
          if (side === 0) { c.x = -10; c.y = Math.random() * H(); }
          else if (side === 1) { c.x = W() + 10; c.y = Math.random() * H(); }
          else if (side === 2) { c.y = -10; c.x = Math.random() * W(); }
          else { c.y = H() + 10; c.x = Math.random() * W(); }
          c.trail = [];
        }

        // Draw trail
        for (let i = 1; i < c.trail.length; i++) {
          const alpha = (1 - i / c.trail.length) * 0.4;
          const width = (1 - i / c.trail.length) * c.r;
          ctx.strokeStyle = `rgba(${c.color},${alpha})`;
          ctx.lineWidth = width;
          ctx.beginPath();
          ctx.moveTo(c.trail[i - 1].x, c.trail[i - 1].y);
          ctx.lineTo(c.trail[i].x, c.trail[i].y);
          ctx.stroke();
        }

        // Head glow
        ctx.fillStyle = `rgba(${c.color},0.15)`;
        ctx.beginPath(); ctx.arc(c.x, c.y, c.r * 4, 0, Math.PI * 2); ctx.fill();

        // Head
        ctx.fillStyle = `rgba(${c.color},0.8)`;
        ctx.beginPath(); ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2); ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    }
    draw();
  }

  // --- Initialize default ---
  if (!reducedMotion) initVariant(activeVariant);

});
