export default {
  path: "/",
  title: "Build Your Personal Operating System | Human Improvement Systems",
  description:
    "Human Improvement Systems helps people upgrade discipline, energy, clarity, and self-control through practical personal systems.",
  scripts: ["/assets/hero.js"],
  // Hero background is a CSS image (the LCP element); preload it so it isn't discovered only after site.css.
  // Breakpoint matches the .hero--live::before media query in site.css.
  preloadImages: [
    { href: "/assets/img/hero-bg-ascent-1344.webp", media: "(min-width: 901px)" },
    { href: "/assets/img/hero-bg-ascent-768.webp", media: "(max-width: 900px)" },
  ],
  body: (ui) => `
<section class="hero hero--live">
  <canvas class="hero__canvas" data-hero-canvas aria-hidden="true"></canvas>
  <div class="wrap hero__grid">
    <div>
      ${ui.eyebrow("Human Improvement Systems")}
      <h1>Build your personal <span class="hero__shine">operating system.</span></h1>
      <p class="lead">Upgrade discipline, energy, clarity, and self-control with systems for becoming stronger, clearer, and more useful.</p>
      ${ui.newsletter({ name: "newsletter-home-hero", source: "home-hero", page: "/", id: "home-newsletter" })}
      <div class="hero__pillars" aria-label="Core focus areas">
        <div><span>01</span><strong>Discipline</strong></div>
        <div><span>02</span><strong>Energy</strong></div>
        <div><span>03</span><strong>Clarity</strong></div>
        <div><span>04</span><strong>Self-control</strong></div>
      </div>
    </div>
    <aside class="console" aria-label="HIS OS Foundations at a glance">
      <div class="console__bar">${ui.mark(24)}<span>HIS OS · Foundations</span><span><i class="console__live" aria-hidden="true"></i>28 days</span></div>
      <ol class="console__rows">
        <li><small>Week 1</small><strong>Identity System</strong><p>Standards, rules, direction, decision filters.</p></li>
        <li><small>Week 2</small><strong>Energy System</strong><p>Inputs, minimum standards, environment, recovery.</p></li>
        <li><small>Week 3</small><strong>Focus System</strong><p>Attention boundaries, distraction friction, deep work.</p></li>
        <li><small>Week 4</small><strong>Execution System</strong><p>Weekly commands, daily rhythm, scorecard, reset.</p></li>
      </ol>
      <div class="console__foot"><span>Founding cohort</span><strong>$297 <small class="muted">USD</small></strong><a class="link-arrow" href="/his-os-foundations">Details →</a></div>
    </aside>
  </div>
</section>

<section class="section section--obsidian">
  <div class="wrap">
    <div class="section-head" data-reveal>
      ${ui.eyebrow("Positioning")}
      <h2>Intention is not enough. Build architecture.</h2>
      <p class="lead">Human Improvement Systems helps people turn ambition into repeatable structures: the routines, defaults, environments, beliefs, and decisions that shape a stronger life.</p>
    </div>
    <div class="grid grid--4">
      <article class="card" data-reveal><span class="num">01</span><h3>Systems</h3><p>Architecture beats vague intention. Build repeatable structures for behavior.</p></article>
      <article class="card" data-reveal><span class="num">02</span><h3>Self-Control</h3><p>Freedom grows when your impulses stop running the operating room.</p></article>
      <article class="card" data-reveal><span class="num">03</span><h3>Clarity</h3><p>A clear mind makes cleaner decisions, stronger commitments, and calmer action.</p></article>
      <article class="card" data-reveal><span class="num">04</span><h3>Usefulness</h3><p>Personal development matters most when it makes you stronger for service.</p></article>
    </div>
  </div>
</section>

<section class="section" id="his-os-foundations">
  <div class="wrap split">
    <div data-reveal>
      ${ui.eyebrow("The first HIS implementation sprint")}
      <h2>Build Your Personal Operating System in 28 Days</h2>
      <p class="lead">HIS OS Foundations is a four-week guided implementation sprint for people who are done relying on motivation. Build practical systems for identity, energy, focus, and execution, then install a reset rhythm that helps you recover when life knocks you off course.</p>
      <div class="actions">
        <a class="btn btn--gold" href="/his-os-foundations#founding-cohort" data-track-event="cohort_cta_click">Join the Founding Cohort List</a>
        <a class="btn btn--outline" href="/his-os-foundations#systems">See What You’ll Build</a>
      </div>
    </div>
    <div class="price" data-reveal>
      ${ui.eyebrow("Founding cohort")}
      <p class="price__amount">$297<span>USD</span></p>
      <p class="muted">Future cohorts are planned at $497 USD.</p>
      <ul class="checks">
        <li>Four weekly live implementation sessions</li>
        <li>Worksheets and system templates</li>
        <li>Recordings and private implementation space</li>
        <li>Functional audio for focus, reset, and recovery</li>
      </ul>
    </div>
  </div>
</section>

<section class="section section--obsidian" id="diy-os">
  <div class="wrap split">
    <figure class="cover" style="margin:0" data-reveal>
      <a href="/diy-os" data-track-event="home_diy_os_click"><img src="/assets/img/diy-os-cover-440.webp" srcset="/assets/img/diy-os-cover-440.webp 440w, /assets/img/diy-os-cover-880.webp 880w" sizes="(max-width: 860px) 80vw, 400px" width="440" height="570" loading="lazy" alt="Cover of DIY OS, The HIS Self-Install Manual."></a>
    </figure>
    <div data-reveal>
      ${ui.eyebrow(ui.site.diyOs.checkoutUrl ? "New · Self-install edition" : "Coming soon · Self-install edition")}
      <h2>DIY OS: build it on your own schedule.</h2>
      <p class="lead">The Foundations method as a printable 34-page manual. The same four systems, 15 worksheets, and a 28-day install. No calls and no cohort: you build it on your own time.</p>
      <ul class="checks">
        <li>Identity, energy, focus, and execution systems</li>
        <li>One-page OS Blueprint and 28-day scorecard</li>
        <li>About 90 minutes a week plus 5 minutes a day</li>
      </ul>
      <div class="actions">
        <a class="btn btn--gold" href="/diy-os#get-diy-os" data-track-event="home_diy_os_click">${ui.site.diyOs.checkoutUrl ? `Get DIY OS · $${ui.site.diyOs.price}` : "Get Notified at Launch"}</a>
        <a class="btn btn--outline" href="/diy-os#inside">Look Inside</a>
      </div>
      <p class="form-note" style="margin-top:16px">$${ui.site.diyOs.price} USD, one-time · instant PDF download${ui.site.diyOs.checkoutUrl ? "" : " when checkout opens"}</p>
    </div>
  </div>
</section>

<section class="section section--bone">
  <div class="wrap split">
    <div class="titlecard" data-reveal aria-hidden="true">
      <span class="eyebrow">A Human Improvement Systems book</span>
      <strong>High<br>Value<br>Living</strong>
      <p>Standards. Clarity. Self-respect.</p>
    </div>
    <div data-reveal>
      ${ui.eyebrow("Book / Entry point")}
      <h2 style="font-size:clamp(1.8rem,3.2vw,2.5rem)">High Value Living introduces the standards. Human Improvement Systems builds the architecture.</h2>
      <p class="lead">A direct, credible book for people who want stronger self-respect, cleaner habits, better decisions, and a more intentional life. No guru theater. Just standards, clarity, and practical personal upgrade work.</p>
      <div class="actions">
        <a class="btn btn--gold" href="/high-value-living">Explore the Book</a>
        <a class="btn btn--outline" href="/his-os-foundations">Explore HIS OS Foundations</a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head" data-reveal>
      ${ui.eyebrow("Ecosystem")}
      <h2>One operating system. Several ways to build it.</h2>
      <p class="lead">Start with HIS OS Foundations or DIY OS, then use books, audio, or custom support as your work deepens.</p>
    </div>
    <div class="grid grid--3">
      <a class="card card--link" href="/his-os-foundations" data-reveal style="text-decoration:none"><span class="num">01</span><h3>HIS OS Foundations cohort</h3><p>The guided 28-day sprint. The first practical doorway.</p><span class="link-arrow">Explore →</span></a>
      <a class="card card--link" href="/diy-os" data-reveal style="text-decoration:none"><span class="num">02</span><h3>DIY OS self-install manual</h3><p>The Foundations method as a printable manual, built on your own schedule.</p><span class="link-arrow">Explore DIY OS →</span></a>
      <a class="card card--link" href="/audio" data-reveal style="text-decoration:none"><span class="num">03</span><h3>Audio programs and training music</h3><p>Sound for focus, reset, recovery, and movement.</p><span class="link-arrow">Explore audio →</span></a>
      <a class="card card--link" href="/high-value-living" data-reveal style="text-decoration:none"><span class="num">04</span><h3>Workbooks and field guides</h3><p>Starting with High Value Living.</p><span class="link-arrow">Explore the book →</span></a>
      <a class="card card--link" href="/services" data-reveal style="text-decoration:none"><span class="num">05</span><h3>Custom HIS OS builds</h3><p>Deeper diagnosis, design, and direct support.</p><span class="link-arrow">See services →</span></a>
      <a class="card card--link" href="/contact" data-reveal style="text-decoration:none"><span class="num">06</span><h3>Talk to us</h3><p>Questions about the cohort, books, audio, or speaking.</p><span class="link-arrow">Contact →</span></a>
    </div>
  </div>
</section>

<section class="section section--obsidian">
  <div class="wrap split split--top">
    <div data-reveal>
      ${ui.eyebrow("Founder")}
      <h2>Wes / Captain Wes</h2>
      <p class="statement">The brand is built for people who want to become more disciplined without becoming fake, more ambitious without losing their soul, and more capable without turning life into a performance.</p>
    </div>
    <div data-reveal>
      <h3 class="h3">Serious personal development for people who still live in the real world.</h3>
      <p class="muted">The work combines systems thinking, psychology, AI, faith-informed discipline, emotional steadiness, and practical life architecture. The goal is not to look optimized. The goal is to become more sovereign, more useful, and harder to knock off course.</p>
      <div class="actions">
        <a class="btn btn--outline" href="/about">Read the Mission</a>
        <a class="btn btn--outline" href="/systems">Explore the Framework</a>
      </div>
    </div>
  </div>
</section>

<section class="section cta-band">
  <div class="wrap" data-reveal>
    ${ui.eyebrow("Field notes")}
    <h2>Start with the signal. Build the system next.</h2>
    <p class="lead">Join the list for field notes, system releases, audio drops, and founding-cohort updates.</p>
    ${ui.newsletter({ name: "newsletter-home-final", source: "home-final", page: "/", id: "home-final-newsletter" })}
    <p class="form-note" style="margin-top:20px">Prefer email? Write to ${ui.emailLink("gold")}</p>
  </div>
</section>
`,
};
