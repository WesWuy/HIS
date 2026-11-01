// DIY OS: the self-install PDF edition of HIS OS Foundations.
// Checkout URL and price live in `site.diyOs` (layout.mjs); while the URL is unset the page
// shows the notify-me form instead of the buy button.
import { site as siteConfig } from "../layout.mjs";

const { checkoutUrl, price } = siteConfig.diyOs;
const pages = 34;
const worksheets = 15;

const cta = checkoutUrl
  ? { href: checkoutUrl, label: `Get DIY OS · $${price}`, event: "diy_os_buy_click" }
  : { href: "#get-diy-os", label: "Get Notified at Launch", event: "diy_os_cta_click" };

// Rendered as the visible FAQ and as FAQPage structured data, so the two always match.
const faqs = [
  ["What exactly do I get?", `A ${pages}-page printable PDF: the four HIS systems (identity, energy, focus, execution), ${worksheets} worksheets, a one-page OS Blueprint, a 28-day scorecard, a Day 28 review and continuation plan, and five AI operator prompts. It downloads instantly after purchase.`],
  ["How is this different from HIS OS Foundations?", "DIY OS is the self-guided, abridged method: the same four systems and core worksheets, on your own schedule. Foundations adds weekly live implementation sessions, real-time feedback on your system, cohort accountability, the full build packs, and HIS functional audio."],
  ["How much time does it take?", "About 90 minutes at the start of each week to build that week’s system, plus five minutes a day on the scorecard. Most people finish the install in 28 days."],
  ["Can I upgrade to the cohort later?", "Yes. DIY OS owners get the price of the manual credited toward HIS OS Foundations. Reply to your purchase email or mention DIY OS when you enroll."],
  ["What if it is not useful?", "Do the Week 1 build. If it is not useful, email us within 30 days of purchase for a full refund."],
  ["Is this therapy or medical advice?", "No. DIY OS is an educational self-improvement framework. It does not diagnose, treat, or replace medical, mental-health, or other professional care."],
];

const samples = [
  ["diy-os-failure-audit", "Failure Pattern Audit worksheet from DIY OS.", "Worksheet 1.1 · Failure Pattern Audit"],
  ["diy-os-daily-card", "Daily Command Card worksheet from DIY OS.", "Worksheet 4.2 · Daily Command Card"],
  ["diy-os-blueprint", "One-page OS Blueprint from DIY OS.", "Install · My OS Blueprint"],
];

const comparison = [
  ["The four systems and core worksheets", "Yes", "Yes, full build packs"],
  ["Run it on your own schedule", "Yes", "Recordings included"],
  ["Weekly live implementation sessions", "—", "Yes"],
  ["Real-time feedback on your system", "—", "Yes"],
  ["Cohort accountability and private space", "—", "Yes"],
  ["HIS functional audio for focus, reset, recovery", "—", "Yes"],
];

const site = "https://humanimprovementsystems.com";

export default {
  path: "/diy-os",
  title: "DIY OS: Build Your Personal Operating System on Your Own",
  description: `DIY OS is the self-install edition of HIS OS Foundations: a printable ${pages}-page manual for building your identity, energy, focus, and execution systems in 28 days, on your own schedule.`,
  jsonLd: [
    {
      "@type": "Product",
      "@id": `${site}/diy-os#product`,
      name: "DIY OS: The HIS Self-Install Manual",
      description: `A printable ${pages}-page self-install manual for building a personal operating system in 28 days.`,
      url: `${site}/diy-os`,
      image: `${site}/assets/img/diy-os-cover-880.webp`,
      brand: { "@type": "Brand", name: "Human Improvement Systems" },
      offers: {
        "@type": "Offer",
        price: String(price),
        priceCurrency: "USD",
        availability: checkoutUrl ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
        url: `${site}/diy-os`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${site}/diy-os#faq`,
      mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    },
  ],
  body: (ui) => `
<section class="hero hero--page">
  <div class="wrap hero__grid">
    <div>
      ${ui.eyebrow("DIY OS · Self-install edition")}
      <h1>Program the operating system you run your life on.</h1>
      <p class="lead">The HIS OS Foundations method in a printable manual. Four systems (identity, energy, focus, execution) built in 28 days on your schedule. No calls. No cohort. Just the build.</p>
      <div class="actions">
        <a class="btn btn--gold" href="${ui.esc(cta.href)}" data-track-event="${cta.event}">${cta.label}</a>
        <a class="btn btn--outline" href="#inside">Look Inside</a>
      </div>
      <p class="form-note" style="margin-top:20px">${pages} printable pages · ${worksheets} worksheets · About 90 minutes a week plus 5 minutes a day</p>
    </div>
    <figure class="cover" style="margin:0">
      <img src="/assets/img/diy-os-cover-440.webp" srcset="/assets/img/diy-os-cover-440.webp 440w, /assets/img/diy-os-cover-880.webp 880w" sizes="(max-width: 900px) 80vw, 400px" width="440" height="570" alt="Cover of DIY OS, The HIS Self-Install Manual.">
      <figcaption><span class="price__amount">$${price}<span>USD</span></span><span class="form-note">One-time payment · instant PDF download</span></figcaption>
    </figure>
  </div>
</section>

<section class="section section--bone">
  <div class="wrap split split--top">
    <div data-reveal>
      ${ui.eyebrow("Architecture over motivation")}
      <h2>Motivation decays. Architecture doesn’t.</h2>
    </div>
    <div data-reveal>
      <p class="lead">Most people don’t fail for lack of potential. They fail because their life runs on scattered inputs, weak defaults, and decisions made on mood. More motivation doesn’t fix that.</p>
      <p class="muted">DIY OS walks you through replacing those defaults with a system: standards you can observe, rules that end the daily negotiation, and a reset path for when you fall off. It’s all written down and built to survive your worst week, not just your best one.</p>
      <p class="statement" style="font-size:1.35rem;margin-top:24px">The same method as our cohort, abridged and self-guided, for people who want to start building now.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head" data-reveal>
      ${ui.eyebrow("What you build")}
      <h2>One system a week. One page to run your life on.</h2>
      <p class="lead">Build each system at the start of the week, run it for the rest of the week, and fix what breaks. Each one takes its targets from the system before it.</p>
    </div>
    <div class="timeline" data-reveal>
      <div><small>Week 1</small><h3>Identity</h3><p>Failure-pattern audit, standards, non-negotiables, personal rules, and a reset script.</p></div>
      <div><small>Week 2</small><h3>Energy</h3><p>Energy floors, morning and shutdown protocols, environment redesign, a 15-minute reset.</p></div>
      <div><small>Week 3</small><h3>Focus</h3><p>Distraction audit, friction redesign, protected focus blocks, and a focus protocol.</p></div>
      <div><small>Week 4</small><h3>Execution</h3><p>Weekly command plan, daily command card, and a recovery-after-failure protocol.</p></div>
    </div>
    <p class="muted" style="margin-top:24px"><strong class="gold">Day 28 · Install:</strong> a one-page OS Blueprint, a 28-day scorecard, and a 30-day continuation plan.</p>
  </div>
</section>

<section class="section section--obsidian" id="inside">
  <div class="wrap">
    <div class="section-head" data-reveal>
      ${ui.eyebrow("Look inside")}
      <h2>A build manual, not a book.</h2>
      <p class="lead">Every system starts with a short explanation of the idea and the research behind it, then goes straight to worksheets you write on.</p>
    </div>
    <div class="grid grid--3">
      ${samples
        .map(
          ([img, alt, label]) => `<figure class="sample" data-reveal>
        <img src="/assets/img/${img}-400.webp" srcset="/assets/img/${img}-400.webp 400w, /assets/img/${img}-800.webp 800w" sizes="(max-width: 620px) 90vw, (max-width: 960px) 45vw, 360px" width="400" height="518" loading="lazy" alt="${alt}">
        <figcaption>${label}</figcaption>
      </figure>`
        )
        .join("\n      ")}
    </div>
    <div class="grid grid--4" style="margin-top:clamp(32px,5vw,56px)">
      <div class="card" data-reveal><span class="num">${pages}</span><p>printable pages, designed to be written on</p></div>
      <div class="card" data-reveal><span class="num">${worksheets}</span><p>worksheets across four systems</p></div>
      <div class="card" data-reveal><span class="num">28</span><p>day scorecard with a Day 0 baseline and a Day 28 re-score</p></div>
      <div class="card" data-reveal><span class="num">5</span><p>AI operator prompts to use any assistant as a build partner</p></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head" data-reveal>
      ${ui.eyebrow("DIY or guided")}
      <h2>Start on your own. Go deeper when you’re ready.</h2>
      <p class="lead">DIY OS gives you the method. HIS OS Foundations gives you the method with people in the room.</p>
    </div>
    <div class="compare" data-reveal>
      <table>
        <thead><tr><th scope="col"><span class="sr-only">Feature</span></th><th scope="col" class="gold">DIY OS · $${price}</th><th scope="col">HIS OS Foundations</th></tr></thead>
        <tbody>
          ${comparison.map(([f, d, c]) => `<tr><th scope="row">${f}</th><td>${d}</td><td>${c}</td></tr>`).join("\n          ")}
        </tbody>
      </table>
    </div>
    <p class="muted" style="margin-top:20px">Already own DIY OS? The price of the manual is credited toward <a class="gold" href="/his-os-foundations">HIS OS Foundations</a>.</p>
  </div>
</section>

<section class="section section--obsidian">
  <div class="wrap" style="max-width:860px" data-reveal>
    ${ui.eyebrow("The Week One guarantee")}
    <h2>Do the Week 1 build. Then decide.</h2>
    <p class="lead">Work through the Identity System. If it isn’t useful, email us within 30 days of purchase and we refund you in full. No exit interview.</p>
  </div>
</section>

<section class="section section--bone" id="get-diy-os">
  <div class="wrap split">
    <div data-reveal>
      ${ui.eyebrow("Get DIY OS")}
      <h2>Stop improvising. Start building.</h2>
      <p class="lead">${pages} printable pages, ${worksheets} worksheets, and a 28-day install you can start tonight.</p>
    </div>
    <div data-reveal>
      ${
        checkoutUrl
          ? `<div class="price">
        <p class="price__amount">$${price}<span>USD</span></p>
        <p class="muted">One-time payment · instant PDF download</p>
        <a class="btn btn--gold" style="width:100%" href="${ui.esc(checkoutUrl)}" data-track-event="diy_os_buy_click">Get DIY OS</a>
      </div>`
          : `<p class="muted">Checkout opens soon. Join the list and we’ll email you the moment DIY OS is available.</p>
      ${ui.newsletter({ name: "newsletter-diy-os", source: "diy-os", page: "/diy-os", id: "diy-os-notify", button: "Notify Me" })}`
      }
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap" style="max-width:860px">
    <div class="section-head" data-reveal>
      ${ui.eyebrow("Frequently asked questions")}
      <h2>Know what you’re getting.</h2>
    </div>
    <div class="faq" data-reveal>
      ${faqs.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("\n      ")}
    </div>
  </div>
</section>
`,
};
