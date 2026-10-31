export default {
  path: "/404",
  title: "Page Not Found",
  description: "This page does not exist on Human Improvement Systems.",
  noindex: true,
  body: (ui) => `
<section class="hero hero--page" style="min-height:60vh">
  <div class="wrap">
    ${ui.eyebrow("404 · Off-system")}
    <h1>This page is not part of the system.</h1>
    <p class="lead">The link may be old or mistyped. Reset and pick a direction.</p>
    <div class="actions">
      <a class="btn btn--gold" href="/">Go Home</a>
      <a class="btn btn--outline" href="/his-os-foundations">HIS OS Foundations</a>
      <a class="btn btn--outline" href="/contact">Contact</a>
    </div>
  </div>
</section>
`,
};
