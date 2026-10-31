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
redeploy. The buy buttons then point there; while it's unset, the page shows the notify-me form.
The PDF itself is the paid product and is **not** stored in this public repo.

## Email
`hello@humanimprovementsystems.com` is hosted by Zoho Mail (MX records point to Zoho).
Forwarding to Gmail, if wanted, is set in Zoho Mail → Settings → Mail Forwarding.

## Deploying
Until Netlify is linked to this GitHub repo, deploy from this folder with the Netlify CLI
(or the Netlify MCP `deploy-site` command). Once linked (Project configuration → Build & deploy →
Link repository; base directory `site`), every push to `main` deploys automatically.
