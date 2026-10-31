const forWho = [
  "You want discipline without self-hatred.",
  "You want stronger routines and clearer priorities.",
  "You want to respect yourself more through action.",
  "You are tired of shallow motivational content.",
  "You want a serious but approachable upgrade path.",
  "You want your life to feel designed, not drifted.",
];
const benefits = [
  ["Decision quality", "Know what you stand for before pressure arrives."],
  ["Daily discipline", "Translate values into habits and visible behavior."],
  ["Self-respect", "Close the gap between what you say and what you do."],
  ["Direction", "Use the book as a first map into the larger HIS ecosystem."],
];

export default {
  path: "/high-value-living",
  title: "High Value Living Book",
  description:
    "High Value Living is the book and entry point into Human Improvement Systems, built for people who want stronger standards, discipline, clarity, and self-respect.",
  ogImage: "/assets/his/marketing/01_brand_announcement_square.png",
  body: (ui) => `
<section class="hero hero--page">
  <div class="wrap hero__grid">
    <div>
      ${ui.eyebrow("Book · Entry point")}
      <h1>High Value Living</h1>
      <p class="lead" style="color:var(--bone)">Standards. Clarity. Self-respect. A cleaner way to live.</p>
      <p class="muted" style="margin-top:16px">The book that opens the Human Improvement Systems ecosystem. High Value Living is for people who know they are capable of more and want a grounded, direct path toward better standards, better decisions, and stronger internal command.</p>
      <div class="actions">
        <a class="btn btn--gold" href="#book-updates">Get Book Updates</a>
        <a class="btn btn--outline" href="/contact">Ask About the Book</a>
      </div>
      <p class="form-note" style="margin-top:20px">Purchase links are coming soon. Join the list to hear first.</p>
    </div>
    <div class="titlecard" aria-hidden="true">
      <span class="eyebrow">A Human Improvement Systems book</span>
      <strong>High<br>Value<br>Living</strong>
      <p>Standards. Clarity. Self-respect.</p>
    </div>
  </div>
</section>

<section class="section section--bone">
  <div class="wrap split split--top">
    <div data-reveal>
      ${ui.eyebrow("Who it is for")}
      <h2>For readers who want personal standards without performance theater.</h2>
      <p class="lead">The book speaks to people who want to become sharper, steadier, healthier, more disciplined, and more useful.</p>
    </div>
    <ul class="checks" data-reveal>${forWho.map((t) => `<li>${t}</li>`).join("")}</ul>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head" data-reveal>
      ${ui.eyebrow("Benefits")}
      <h2>Clearer standards. Better defaults. Stronger self-command.</h2>
      <p class="lead">High Value Living is designed as a practical starting point, not an identity costume.</p>
    </div>
    <div class="grid grid--4">
      ${benefits.map(([t, d], i) => `<article class="card" data-reveal><span class="num">${String(i + 1).padStart(2, "0")}</span><h3>${t}</h3><p>${d}</p></article>`).join("")}
    </div>
  </div>
</section>

<section class="section section--obsidian cta-band" id="book-updates">
  <div class="wrap" data-reveal>
    ${ui.eyebrow("Book updates")}
    <h2>Get updates when the book is available.</h2>
    <p class="lead">Join the list for High Value Living updates, related systems, and launch notes.</p>
    ${ui.newsletter({ name: "newsletter-high-value-living", source: "high-value-living", page: "/high-value-living", id: "book-newsletter" })}
  </div>
</section>
`,
};
