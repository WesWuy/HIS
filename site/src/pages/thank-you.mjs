export default {
  path: "/thank-you",
  title: "Thank You",
  description: "Your submission has been received by Human Improvement Systems.",
  noindex: true,
  body: (ui) => `
<section class="hero hero--page" style="min-height:60vh">
  <div class="wrap">
    ${ui.eyebrow("Received")}
    <h1>Thank you. The signal came through.</h1>
    <p class="lead">Your submission has been received. Continue exploring the Human Improvement Systems ecosystem.</p>
    <div class="actions">
      <a class="btn btn--gold" href="/">Return Home</a>
      <a class="btn btn--outline" href="/systems">Explore Systems</a>
    </div>
    <p class="form-note" style="margin-top:24px">Anything else? Email ${ui.emailLink("gold")}</p>
  </div>
</section>
`,
};
