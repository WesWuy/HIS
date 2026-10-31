export default {
  path: "/services",
  title: "Services and Programs",
  description: "Explore HIS OS Foundations, books, functional audio, and custom Human Improvement Systems engagements.",
  body: (ui) => `
<section class="hero hero--page">
  <div class="wrap hero__grid">
    <div>
      ${ui.eyebrow("Start here")}
      <h1>Build the system behind the person you are becoming.</h1>
      <p class="lead">Human Improvement Systems turns personal development into practical architecture. Start with HIS OS Foundations, a 28-day guided sprint for building the systems behind identity, energy, focus, discipline, and execution.</p>
      <div class="actions">
        <a class="btn btn--gold" href="/his-os-foundations#founding-cohort" data-track-event="cohort_cta_click">Join the Founding Cohort List</a>
        <a class="btn btn--outline" href="/his-os-foundations">Explore the Program</a>
      </div>
    </div>
    <div class="price">
      ${ui.eyebrow("Flagship sprint")}
      <h2 class="h3" style="font-size:1.6rem;margin-bottom:4px">HIS OS Foundations</h2>
      <p class="muted">Build Your Personal Operating System in 28 Days</p>
      <p class="price__amount">$297<span>USD</span></p>
      <p class="muted">Future cohorts are planned at $497 USD.</p>
      <p style="margin:0">Four weekly live sessions, system templates, recordings, a private implementation space, and functional audio tools.</p>
    </div>
  </div>
</section>

<section class="section section--obsidian">
  <div class="wrap">
    <div class="section-head" data-reveal>
      ${ui.eyebrow("The wider ecosystem")}
      <h2>Use the level of support the work requires.</h2>
    </div>
    <div class="grid grid--2">
      <article class="card card--link" data-reveal><span class="num">01 · Guided sprint</span><h3>HIS OS Foundations</h3><p>The first practical doorway: build four connected personal systems across a guided 28-day sprint.</p><a class="link-arrow" href="/his-os-foundations">Explore Foundations →</a></article>
      <article class="card card--link" data-reveal><span class="num">02 · Books</span><h3>Frameworks for deliberate living</h3><p>Durable ideas and reference material for stronger standards, cleaner decisions, and deliberate action.</p><a class="link-arrow" href="/high-value-living">Explore High Value Living →</a></article>
      <article class="card card--link" data-reveal><span class="num">03 · Audio</span><h3>Functional audio tools</h3><p>Audio designed to support focus, reset, recovery, discipline, and calm intensity.</p><a class="link-arrow" href="/audio">Explore Audio →</a></article>
      <article class="card card--link" data-reveal style="border-color:var(--line)"><span class="num">04 · Custom build</span><h3>Custom HIS OS Build</h3><p>A bespoke coaching and implementation path for people who need deeper diagnosis, design, and direct support. Engagements begin at $2,500 USD.</p><a class="link-arrow" href="/contact">Ask About a Custom Build →</a></article>
    </div>
  </div>
</section>

<section class="section cta-band">
  <div class="wrap" data-reveal>
    ${ui.eyebrow("Not sure where to start?")}
    <h2>Ask directly.</h2>
    <p class="lead">Tell us where your system breaks down and we’ll point you to the right starting place.</p>
    <div class="actions" style="justify-content:center">
      <a class="btn btn--gold" href="/contact">Send a Message</a>
      <a class="btn btn--outline" href="mailto:${ui.site.email}" data-track-event="email_click">${ui.site.email}</a>
    </div>
  </div>
</section>
`,
};
