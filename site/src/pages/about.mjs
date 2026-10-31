const values = [
  ["Systems", "Make the right action easier to repeat."],
  ["Discipline", "Keep promises when motivation gets quiet."],
  ["Energy", "Protect the physical base of your thinking."],
  ["Clarity", "Decide what matters before the world decides for you."],
  ["Service", "Become stronger for something larger than ego."],
  ["Sovereignty", "Own your inputs, standards, responses, and direction."],
];

export default {
  path: "/about",
  title: "About Human Improvement Systems",
  description:
    "Learn the mission and philosophy behind Human Improvement Systems, the umbrella brand for High Value Living and future personal operating system products.",
  body: (ui) => `
<section class="hero hero--page">
  <div class="wrap">
    ${ui.eyebrow("About")}
    <h1>Human Improvement Systems turns intention into architecture.</h1>
    <p class="lead">The mission is simple: help people become stronger, clearer, more disciplined, and more useful through systems they can actually live.</p>
  </div>
</section>

<section class="section section--obsidian">
  <div class="wrap split split--top">
    <div data-reveal>
      ${ui.eyebrow("Founder story")}
      <h2>Built by Wes, also known as Captain Wes.</h2>
      <p class="statement" style="font-size:1.3rem;color:var(--gold)">Standards without theatrics. Ambition without emptiness.</p>
    </div>
    <div data-reveal>
      <p class="lead">This is a brand for people who want standards without theatrics, ambition without emptiness, and self-improvement that survives contact with real pressure.</p>
      <p class="muted">Human Improvement Systems grew from the idea that most people do not need more vague motivation. They need a better operating environment: clearer defaults, cleaner incentives, disciplined rhythms, honest feedback, and practical tools that make the next right action easier.</p>
      <p class="muted">High Value Living introduces the standards. HIS OS Foundations is the first guided implementation path. Human Improvement Systems is the larger umbrella for books, courses, audio programs, workbooks, templates, coaching, consulting, and future digital products.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head" data-reveal>
      ${ui.eyebrow("Philosophy")}
      <h2>Systems, discipline, energy, clarity, service, and personal sovereignty.</h2>
      <p class="lead">The brand is not built around hacks. It is built around an adult relationship with attention, standards, meaning, and responsibility.</p>
    </div>
    <div class="grid grid--3">
      ${values.map(([t, d], i) => `<article class="card" data-reveal><span class="num">${String(i + 1).padStart(2, "0")}</span><h3>${t}</h3><p>${d}</p></article>`).join("")}
    </div>
    <div class="actions" style="margin-top:40px">
      <a class="btn btn--gold" href="/high-value-living">Read About High Value Living</a>
      <a class="btn btn--outline" href="/systems">Explore the Systems</a>
      <a class="btn btn--outline" href="/contact">Get in Touch</a>
    </div>
  </div>
</section>
`,
};
