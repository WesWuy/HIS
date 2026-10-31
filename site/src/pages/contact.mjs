const topics = [
  "HIS OS Foundations",
  "Custom HIS OS Build",
  "Book or product question",
  "Audio or music",
  "Speaking, coaching, or consulting",
  "Other",
];

export default {
  path: "/contact",
  title: "Contact Human Improvement Systems",
  description:
    "Contact Human Improvement Systems by email at hello@humanimprovementsystems.com or the contact form: HIS OS Foundations, books, audio, speaking, custom system builds, or general inquiries.",
  ogImage: "/assets/his/marketing/04_social_post_white.png",
  body: (ui) => `
<section class="hero hero--page">
  <div class="wrap">
    ${ui.eyebrow("Contact")}
    <h1>Send the signal.</h1>
    <p class="lead">Email us directly or use the form for HIS OS Foundations, custom system builds, books, audio, speaking, partnerships, or general Human Improvement Systems inquiries.</p>
  </div>
</section>

<section class="section section--tight" style="padding-top:0">
  <div class="wrap split split--top">
    <form name="contact" id="contact-form" method="post" action="/thank-you" class="form-card"
      data-netlify="true" netlify-honeypot="company" data-form-kind="contact" data-track-event="contact_form_submit">
      <input type="hidden" name="form-name" value="contact">
      <input type="hidden" name="source" value="contact-page">
      <input type="hidden" name="page" value="/contact">
      <p class="hp" aria-hidden="true"><label>Company <input type="text" name="company" tabindex="-1" autocomplete="off"></label></p>
      <div class="grid grid--2">
        <div class="field"><label for="c-name">Name</label><input id="c-name" type="text" name="name" required autocomplete="name"></div>
        <div class="field"><label for="c-email">Email</label><input id="c-email" type="email" name="email" required autocomplete="email"></div>
      </div>
      <div class="field"><label for="c-topic">Topic</label>
        <select id="c-topic" name="topic">${topics.map((t) => `<option>${t}</option>`).join("")}</select>
      </div>
      <div class="field"><label for="c-message">Message</label><textarea id="c-message" name="message" required></textarea></div>
      <button type="submit" class="btn btn--gold">Send Message</button>
    </form>

    <div class="stack">
      <div class="contact-card">
        <span class="eyebrow">Email</span>
        <a class="email" href="mailto:${ui.site.email}" data-track-event="email_click">${ui.site.email}</a>
        <p class="muted" style="margin:12px 0 0;font-size:.95rem">Write directly any time, or use the form.</p>
      </div>
      <div class="card">
        <h2 class="h4">Newsletter</h2>
        <p>Join for field notes, book updates, course releases, and audio drops.</p>
        ${ui.newsletter({ name: "newsletter-contact", source: "contact", page: "/contact", id: "contact-newsletter", compact: true })}
      </div>
      <div class="card">
        <h2 class="h4">Looking for the cohort?</h2>
        <p>The founding-cohort list for HIS OS Foundations has its own sign-up.</p>
        <a class="link-arrow" href="/his-os-foundations#founding-cohort">Join the Founding Cohort List →</a>
      </div>
    </div>
  </div>
</section>
`,
};
