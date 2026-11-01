// Home hero animation: the HIS mark's circuit lattice, alive.
// Gold signals climb the grid (always trending upward, like the mark's arrow), light the
// nodes they pass, and the pointer energises nearby nodes. Draws one still frame when the
// visitor prefers reduced motion, and pauses while off-screen or in a hidden tab.
(() => {
  const canvas = document.querySelector("[data-hero-canvas]");
  // Without the hero CSS the canvas sits in flow, and sizing it to the hero would grow both forever.
  if (!canvas || !canvas.getContext || getComputedStyle(canvas).position !== "absolute") return;
  const hero = canvas.parentElement;
  const ctx = canvas.getContext("2d");
  const still = window.matchMedia("(prefers-reduced-motion: reduce)");

  const CELL = 64; // matches the CSS grid in .hero::after so nodes sit on its intersections
  const GOLD = [217, 175, 88];
  const GOLD_HI = [255, 226, 160];

  let w = 0, h = 0, cols = 0, rows = 0, dpr = 1;
  let glow = new Float32Array(0); // per-node brightness, decays every frame
  let pulses = [];
  let pointer = null;
  let running = false, visible = true, raf = 0, last = 0, spawnIn = 0;

  const rand = (a, b) => a + Math.random() * (b - a);
  const idx = (c, r) => r * (cols + 1) + c;
  const rgba = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;

  function resize() {
    const box = hero.getBoundingClientRect();
    w = box.width; h = box.height;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(w / CELL); rows = Math.ceil(h / CELL);
    glow = new Float32Array((cols + 1) * (rows + 1));
    pulses = [];
    if (still.matches) freeze();
    if (!running) frame(performance.now(), true);
  }

  // Reduced motion: a few lit paths frozen mid-climb. Glow is held, not decayed.
  function freeze() {
    pulses = Array.from({ length: spawnCount() }, () => makePulse(undefined, Math.floor(rand(rows * 0.4, rows + 1))));
    for (const p of pulses) {
      p.t = rand(3, p.path.length - 1);
      for (let i = 0; i <= Math.floor(p.t); i++) glow[idx(...p.path[i])] = 0.25 + (0.75 * i) / p.t;
    }
  }

  // A signal is a Manhattan path along grid lines that mostly climbs, sometimes steps sideways.
  function makePulse(startC, startR) {
    let c = startC ?? Math.floor(rand(cols * 0.3, cols + 1));
    let r = startR ?? rows;
    const path = [[c, r]];
    const len = Math.floor(rand(7, 16));
    let dir = 0; // -1 left, 1 right, 0 up
    for (let i = 0; i < len && r > 0; i++) {
      if (dir === 0 && Math.random() < 0.28) dir = Math.random() < 0.5 ? -1 : 1;
      else if (dir !== 0 && Math.random() < 0.6) dir = 0;
      if (dir !== 0 && (c + dir < 0 || c + dir > cols)) dir = 0;
      if (dir === 0) r -= 1; else c += dir;
      path.push([c, r]);
    }
    return { path, t: 0, speed: rand(3.2, 6.5), tail: rand(2.5, 4.5), lit: 0 };
  }

  function spawnCount() {
    return w < 640 ? 4 : w < 1100 ? 7 : 10;
  }

  function drawLattice() {
    // Faint trace segments near the pointer, so the grid feels wired, not just ruled.
    for (let r = 0; r <= rows; r++) {
      for (let c = 0; c <= cols; c++) {
        const g = glow[idx(c, r)];
        const x = c * CELL, y = r * CELL;
        let p = 0;
        if (pointer) {
          const d = Math.hypot(pointer.x - x, pointer.y - y);
          p = Math.max(0, 1 - d / 220);
        }
        const a = Math.min(1, 0.1 + g * 0.9 + p * 0.55);
        const rad = 1.3 + g * 2.2 + p * 1.4;
        if (g > 0.05 || p > 0.05) {
          ctx.fillStyle = rgba(GOLD, a * 0.18);
          ctx.beginPath(); ctx.arc(x, y, rad * 4, 0, Math.PI * 2); ctx.fill();
        }
        ctx.fillStyle = rgba(g > 0.5 ? GOLD_HI : GOLD, a);
        ctx.beginPath(); ctx.arc(x, y, rad, 0, Math.PI * 2); ctx.fill();
      }
    }
  }

  function pointAt(path, t) {
    const i = Math.min(Math.floor(t), path.length - 2);
    const f = Math.min(1, t - i);
    const [c0, r0] = path[i], [c1, r1] = path[i + 1];
    return [(c0 + (c1 - c0) * f) * CELL, (r0 + (r1 - r0) * f) * CELL];
  }

  function drawPulse(p) {
    const end = p.path.length - 1;
    const head = Math.min(p.t, end);
    const from = Math.max(0, head - p.tail);
    // Fade out once the head reaches the end of its path.
    const fade = p.t > end ? Math.max(0, 1 - (p.t - end) / p.tail) : 1;
    const steps = 18;
    ctx.lineCap = "round";
    let prev = pointAt(p.path, from);
    for (let s = 1; s <= steps; s++) {
      const tt = from + ((head - from) * s) / steps;
      const pt = pointAt(p.path, tt);
      const k = s / steps;
      ctx.strokeStyle = rgba(GOLD, 0.85 * k * k * fade);
      ctx.lineWidth = 0.6 + 1.6 * k;
      ctx.beginPath(); ctx.moveTo(prev[0], prev[1]); ctx.lineTo(pt[0], pt[1]); ctx.stroke();
      prev = pt;
    }
    const [hx, hy] = pointAt(p.path, head);
    const halo = ctx.createRadialGradient(hx, hy, 0, hx, hy, 18);
    halo.addColorStop(0, rgba(GOLD_HI, 0.9 * fade));
    halo.addColorStop(1, rgba(GOLD, 0));
    ctx.fillStyle = halo;
    ctx.beginPath(); ctx.arc(hx, hy, 18, 0, Math.PI * 2); ctx.fill();
  }

  function frame(now, once = false) {
    const dt = Math.min(0.05, (now - (last || now)) / 1000);
    last = now;
    ctx.clearRect(0, 0, w, h);

    if (!once) {
      for (let i = 0; i < glow.length; i++) glow[i] *= Math.pow(0.66, dt); // ~1.7s half-life
      spawnIn -= dt;
      if (spawnIn <= 0 && pulses.length < spawnCount()) {
        pulses.push(makePulse());
        spawnIn = rand(0.25, 0.9);
      }
      for (const p of pulses) {
        p.t += p.speed * dt;
        const reached = Math.min(Math.floor(p.t), p.path.length - 1);
        while (p.lit <= reached) { const [c, r] = p.path[p.lit++]; glow[idx(c, r)] = 1; }
      }
      pulses = pulses.filter((p) => p.t < p.path.length - 1 + p.tail);
    }

    drawLattice();
    for (const p of pulses) drawPulse(p);

    if (!once && running) raf = requestAnimationFrame(frame);
  }

  function start() {
    if (running || still.matches || !visible || document.hidden) return;
    running = true; last = 0;
    raf = requestAnimationFrame(frame);
  }
  function stop() { running = false; cancelAnimationFrame(raf); }

  hero.addEventListener("pointermove", (e) => {
    const box = hero.getBoundingClientRect();
    pointer = { x: e.clientX - box.left, y: e.clientY - box.top };
    if (!running) frame(performance.now(), true);
  });
  hero.addEventListener("pointerleave", () => { pointer = null; if (!running) frame(performance.now(), true); });
  // A tap or click sends a burst of signals up from that spot.
  hero.addEventListener("pointerdown", (e) => {
    if (still.matches || e.target.closest("a, button, input, label, form")) return;
    const box = hero.getBoundingClientRect();
    const c = Math.round((e.clientX - box.left) / CELL), r = Math.round((e.clientY - box.top) / CELL);
    for (let i = 0; i < 3; i++) pulses.push(makePulse(c, r));
  });

  new ResizeObserver(resize).observe(hero);
  new IntersectionObserver(([en]) => { visible = en.isIntersecting; visible ? start() : stop(); }).observe(hero);
  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
  still.addEventListener("change", () => { stop(); resize(); start(); });

  resize();
  start();
})();
