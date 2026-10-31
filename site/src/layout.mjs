// Shared layout, site settings and small UI helpers.
export const site = {
  name: "Human Improvement Systems",
  short: "HIS",
  url: "https://humanimprovementsystems.com",
  email: "hello@humanimprovementsystems.com",
  tagline: "Personal operating systems",
  summary:
    "Human Improvement Systems helps people turn intention into architecture through discipline, energy, clarity, self-control, and practical personal systems.",
  defaultOg: "/assets/his/marketing/02_website_hero_banner.png",
};

const nav = [
  ["/", "Home"],
  ["/his-os-foundations", "Foundations"],
  ["/systems", "Systems"],
  ["/services", "Services"],
  ["/about", "About"],
  ["/contact", "Contact"],
];

export const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const mark = (size = 40) =>
  `<img src="/assets/img/his-mark-96.webp" width="${size}" height="${size}" alt="" class="mark">`;

export const ui = {
  site,
  mark,
  esc,
  emailLink: (cls = "") =>
    `<a class="${cls}" href="mailto:${site.email}" data-track-event="email_click">${site.email}</a>`,

  eyebrow: (text) => `<p class="eyebrow">${text}</p>`,

  // Netlify form. Keep `name` values unchanged: Netlify stores submissions per form name.
  newsletter: ({ name, source, page, id, button = "Join the List", compact = false }) => `
<form name="${name}" id="${id}" method="post" action="/thank-you" class="signup${compact ? " signup--compact" : ""}"
  data-netlify="true" netlify-honeypot="website" data-form-kind="newsletter" data-track-event="newsletter_signup">
  <input type="hidden" name="form-name" value="${name}">
  <input type="hidden" name="source" value="${source}">
  <input type="hidden" name="page" value="${page}">
  <p class="hp" aria-hidden="true"><label>Website <input type="text" name="website" tabindex="-1" autocomplete="off"></label></p>
  <label class="sr-only" for="${id}-email">Email address</label>
  <input id="${id}-email" type="email" name="email" required autocomplete="email" placeholder="Email address">
  <button type="submit" class="btn btn--gold">${button}</button>
</form>`,
};

export function layout(page, body) {
  const url = site.url + (page.path === "/" ? "/" : page.path);
  const og = site.url + (page.ogImage || site.defaultOg);
  const fullTitle = page.path === "/" ? page.title : `${page.title} | ${site.name}`;
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#org`,
        name: site.name,
        url: site.url,
        logo: `${site.url}/assets/his/logos/00_chosen_icon_reference.png`,
        email: site.email,
        description: site.summary,
        founder: { "@type": "Person", name: "Wes", alternateName: "Captain Wes" },
        brand: [{ "@type": "Brand", name: "High Value Living", url: `${site.url}/high-value-living` }],
        contactPoint: { "@type": "ContactPoint", contactType: "customer support", email: site.email, url: `${site.url}/contact` },
      },
      { "@type": "WebPage", "@id": url, url, name: fullTitle, description: page.description, isPartOf: { "@type": "WebSite", name: site.name, url: site.url } },
      // Optional page-specific nodes (Product, FAQPage, …).
      ...(page.jsonLd || []),
    ],
  };
  const navLinks = (cls) =>
    nav
      .map(([href, label]) => `<a href="${href}"${href === page.path ? ' aria-current="page"' : ""} class="${cls}">${label}</a>`)
      .join("");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(page.description)}">
<meta name="robots" content="${page.noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}">
<link rel="canonical" href="${url}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/assets/his/logos/00_chosen_icon_reference.png" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta name="theme-color" content="#050505">
<meta property="og:title" content="${esc(page.ogTitle || fullTitle)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:type" content="website">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${og}">
<meta property="og:site_name" content="${site.name}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.ogTitle || fullTitle)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${og}">
<link rel="preload" href="/assets/fonts/manrope-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/site.css">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
<script src="/assets/site.js" defer></script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="topbar">
  <div class="wrap topbar__inner">
    <a href="/" class="brand" aria-label="${site.name} home">${mark(40)}<span><strong>${site.name}</strong><small>${site.tagline}</small></span></a>
    <nav class="nav" aria-label="Main">${navLinks("nav__link")}</nav>
    <a href="/his-os-foundations#founding-cohort" class="btn btn--outline btn--sm topbar__cta" data-track-event="nav_cohort_click">Join the Cohort List</a>
    <details class="mnav">
      <summary aria-label="Menu"><span class="mnav__bars" aria-hidden="true"></span><span class="mnav__label">Menu</span></summary>
      <nav class="mnav__panel" aria-label="Mobile">${navLinks("mnav__link")}<a href="/his-os-foundations#founding-cohort" class="btn btn--gold">Join the Cohort List</a></nav>
    </details>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="footer">
  <div class="wrap footer__grid">
    <div class="footer__brand">
      <a href="/" class="brand">${mark(40)}<span><strong>${site.name}</strong><small>${site.tagline}</small></span></a>
      <p>${site.summary}</p>
      <p class="footer__email"><span class="eyebrow">Email</span>${ui.emailLink()}</p>
    </div>
    <nav class="footer__nav" aria-label="Footer">
      ${nav.map(([h, l]) => `<a href="${h}">${l}</a>`).join("")}
      <a href="/diy-os">DIY OS</a>
      <a href="/high-value-living">High Value Living</a>
      <a href="/audio">Audio</a>
    </nav>
    <div class="footer__signup">
      <h2 class="h4">Field Notes</h2>
      <p>Direct systems for discipline, energy, clarity, and self-control.</p>
      ${ui.newsletter({ name: "newsletter-footer", source: "footer", page: page.path, id: "footer-newsletter", compact: true })}
    </div>
  </div>
  <div class="wrap footer__legal">
    <p>© ${new Date().getFullYear()} ${site.name}. All rights reserved.</p>
    <p><a href="/contact">Contact</a> · <a href="mailto:${site.email}">${site.email}</a></p>
  </div>
</footer>
</body>
</html>
`;
}
