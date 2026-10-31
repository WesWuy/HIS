const layers = [
  ["Discipline System", "Convert standards into repeatable actions, clean defaults, and visible commitments."],
  ["Energy System", "Protect sleep, training, food, recovery, and attention so output has a stable base."],
  ["Focus System", "Reduce noise, define priorities, and build a day that gives deep work a real chance."],
  ["Identity System", "Align self-image, language, and behavior so change becomes normal instead of forced."],
  ["Environment System", "Shape physical, digital, and social surroundings to make the right action easier."],
  ["Relationship System", "Build stronger bonds through service, standards, communication, and clear boundaries."],
  ["Spiritual / Mission System", "Anchor ambition in meaning, usefulness, faith, contribution, and a larger purpose."],
];

export default {
  path: "/systems",
  title: "The HIS Framework: Seven Personal Operating Systems",
  description:
    "The Human Improvement Systems framework organizes personal development into seven systems you can observe, repair, and improve: discipline, energy, focus, identity, environment, relationships, and mission.",
  body: (ui) => `
<section class="hero hero--page">
  <div class="wrap">
    ${ui.eyebrow("Framework")}
    <h1>A practical framework for building a stronger life.</h1>
    <p class="lead">The Human Improvement Systems framework organizes personal development into systems you can observe, repair, and improve.</p>
  </div>
</section>

<section class="section section--obsidian">
  <div class="wrap">
    <div class="section-head" data-reveal>
      ${ui.eyebrow("Operating layers")}
      <h2>Seven systems that shape daily behavior.</h2>
      <p class="lead">Each system has inputs, defaults, friction points, feedback loops, and maintenance rhythms.</p>
    </div>
    <div class="grid grid--3">
      ${layers
        .map(([t, d], i) => `<article class="card" data-reveal><span class="num">${String(i + 1).padStart(2, "0")}</span><h3>${t}</h3><p>${d}</p></article>`)
        .join("")}
      <a class="card card--link" href="/his-os-foundations" data-reveal style="text-decoration:none;border-color:var(--line)"><span class="num">Start</span><h3>Build four of them in 28 days</h3><p>HIS OS Foundations installs identity, energy, focus, and execution as one working rhythm.</p><span class="link-arrow">Explore Foundations →</span></a>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap split split--top">
    <div data-reveal>
      ${ui.eyebrow("Method")}
      <h2>Diagnose the system before blaming the person.</h2>
    </div>
    <div data-reveal>
      <p class="lead">When behavior breaks, the useful question is not only “What is wrong with me?” It is also “What structure keeps producing this outcome?”</p>
      <p class="muted">A personal operating system includes routines, beliefs, relationships, environments, incentives, digital inputs, recovery rhythms, and spiritual orientation. When those pieces are aligned, the right action becomes more natural.</p>
      <p class="muted">The framework stays approachable on purpose. You do not need to become a machine. You need a cleaner relationship with your attention, energy, commitments, and mission.</p>
    </div>
  </div>
</section>

<section class="section section--obsidian cta-band">
  <div class="wrap" data-reveal>
    ${ui.eyebrow("Systems notes")}
    <h2>Get the framework as it expands.</h2>
    <p class="lead">Join for field notes, templates, workbooks, and HIS OS Foundations cohort updates.</p>
    ${ui.newsletter({ name: "newsletter-systems", source: "systems", page: "/systems", id: "systems-newsletter" })}
  </div>
</section>
`,
};
