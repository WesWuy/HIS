# humanimprovementsystems.com

Source for the Human Improvement Systems website (Netlify project `humanimprovementsystems`).
Rebuilt 2026-10-31 from the live site, which had previously been uploaded by hand with no source kept.

- **Build:** `node build.mjs` (no dependencies) → `dist/`. Netlify runs this using `netlify.toml`.
- **Pages:** `src/pages/*.mjs` (one file per page: path, title, description, body).
- **Shared layout, header, footer, email address:** `src/layout.mjs` (`site.email`).
- **Styles / script / images / fonts:** `public/assets/`.
- **Preview locally:** `node build.mjs && cd dist && python3 -m http.server 8000`.

## Forms (Netlify Forms)
Form `name`s must not change; Netlify stores submissions per name:
`contact`, `waitlist-his-os-foundations`, `newsletter-home-hero`, `newsletter-home-final`, `newsletter-footer`,
`newsletter-systems`, `newsletter-high-value-living`, `newsletter-audio`, `newsletter-contact`,
`newsletter-diy-os` (DIY OS notify-me list; shown only while no checkout link is set).
Who gets emailed on each submission is set in Netlify → Forms → Form notifications.

## DIY OS checkout
`/diy-os` sells the DIY OS PDF through an external storefront. Set `DIY_OS_CHECKOUT_URL`
(Netlify → Project configuration → Environment variables) to the storefront's checkout link and
redeploy. The buy buttons then point there; while it's unset, `/diy-os` shows the notify-me form
and the home page labels DIY OS "Coming soon". Price and checkout URL live in `site.diyOs`
(`src/layout.mjs`).
The PDF itself is the paid product and is **not** stored in this public repo.

## Analytics
Cloudflare Web Analytics (cookieless, no consent banner needed). In Cloudflare → Analytics & Logs →
Web Analytics, add `humanimprovementsystems.com` and copy the site token (DNS is grey-cloud, so use the
JS snippet option, not automatic setup). Set `CF_WEB_ANALYTICS_TOKEN` in Netlify → Environment variables
and redeploy. The beacon then loads on every page, the CSP in `netlify.toml` already allows it, and
`/privacy` switches its analytics wording on. The `data-track-event` click hooks in `site.js` only
forward to gtag/Meta/TikTok if one of those is ever installed.

## Privacy policy
`/privacy` (`src/pages/privacy.mjs`) describes what the forms collect and who processes it
(Netlify, Zoho, Cloudflare, the DIY OS checkout provider). Update it whenever a form field,
processor, or tracking tool changes.

## Waitlist consent
The Foundations waitlist has an optional `consent` checkbox (`value="yes"`; absent when unticked).
Zoho Flow "HIS Waitlist to CRM Lead" branches on `data.consent equals "yes"` to set `Consent_to_Email`.

## Email
`hello@humanimprovementsystems.com` is hosted by Zoho Mail (MX records point to Zoho).
Forwarding to Gmail, if wanted, is set in Zoho Mail → Settings → Mail Forwarding.

## Deploying
Netlify is linked to this GitHub repo (base directory `site`). Every merge to `main` deploys to
production automatically, and every pull request gets a deploy preview.
