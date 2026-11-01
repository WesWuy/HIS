// Plain-language privacy policy. Keep it true to what the site actually does:
// update it when adding a form, a processor, analytics, or the DIY OS storefront.
const updated = "November 1, 2026";

export default {
  path: "/privacy",
  title: "Privacy Policy",
  description:
    "How Human Improvement Systems collects, uses, and protects the information you share through this website, and how to have it corrected or deleted.",
  body: (ui) => `
<section class="hero hero--page">
  <div class="wrap">
    ${ui.eyebrow("Privacy")}
    <h1>Privacy policy</h1>
    <p class="lead">Short version: we collect only what you type into our forms, use it only to reply to you and send what you asked for, never sell it, and delete it when you ask.</p>
    <p class="form-note">Last updated ${updated}</p>
  </div>
</section>

<section class="section section--tight" style="padding-top:0">
  <div class="wrap"><div class="prose">
    <h2 class="h3">Who we are</h2>
    <p>This website is run by ${ui.site.name} (“HIS”, “we”). Questions about this policy or your information go to ${ui.emailLink("gold")}.</p>

    <h2 class="h3">What we collect</h2>
    <ul>
      <li><strong>Newsletter sign-ups:</strong> your email address and which page you signed up on.</li>
      <li><strong>The HIS OS Foundations waitlist:</strong> your name, email address, your optional answer about what needs the most work, and whether you ticked the box to receive Field Notes.</li>
      <li><strong>The contact form:</strong> your name, email address, topic, and message.</li>
      <li><strong>Emails you send us</strong> at ${ui.site.email}.</li>
    </ul>
    <p>This site sets no cookies and runs no advertising or cross-site tracking. ${
      ui.site.analytics.cfToken
        ? "We use Cloudflare Web Analytics to count visits. It is cookieless and does not identify or follow individual visitors."
        : "We do not currently run website analytics."
    } Our hosting provider keeps standard technical logs (such as IP address and browser type) for security and reliability.</p>

    <h2 class="h3">How we use it</h2>
    <ul>
      <li>To reply to your message.</li>
      <li>To send the newsletter, cohort, and product updates you signed up for.</li>
      <li>For the waitlist: to send you the cohort opening date and enrollment details, and to understand what people need from the program.</li>
    </ul>
    <p>We do not sell, rent, or trade your information. Every email we send includes a way to unsubscribe, or you can reply and ask.</p>

    <h2 class="h3">Who processes it for us</h2>
    <ul>
      <li><strong>Netlify</strong> hosts this website and receives and stores form submissions.</li>
      <li><strong>Zoho</strong> (Zoho Mail and Zoho CRM) handles our email and keeps our contact list.</li>
      <li><strong>Cloudflare</strong> provides our domain name service${ui.site.analytics.cfToken ? " and website analytics" : ""}.</li>
      <li>When you buy a product such as DIY OS, the purchase is handled by the checkout provider named on the checkout page. We receive your name, email, and order details, never your card details.</li>
    </ul>
    <p>These providers may store data outside your country, including in the United States.</p>

    <h2 class="h3">How long we keep it</h2>
    <p>We keep your information while you are on our list or we are in touch, and delete it when you unsubscribe and ask us to, or when it is no longer needed. Purchase records are kept as long as tax and accounting rules require.</p>

    <h2 class="h3">Your choices and rights</h2>
    <p>You can ask us at any time to show you, correct, or delete the information we hold about you, or to stop emailing you. Email ${ui.emailLink("gold")} and we will act on it promptly. Depending on where you live, you may also have the right to complain to your local data-protection authority.</p>

    <h2 class="h3">Children</h2>
    <p>This website and our programs are meant for adults. We do not knowingly collect information from anyone under 16.</p>

    <h2 class="h3">Changes</h2>
    <p>If we change how we handle your information, we will update this page and the date at the top.</p>
  </div></div>
</section>
`,
};
