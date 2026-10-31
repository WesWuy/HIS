(() => {
  document.documentElement.classList.add("js");

  // Analytics hook: forwards events to gtag / Meta / TikTok only if one is installed later.
  window.hisTrack = (eventName, params = {}) => {
    if (!eventName) return;
    if (typeof window.gtag === "function") window.gtag("event", eventName, params);
    if (typeof window.fbq === "function") window.fbq("trackCustom", eventName, params);
    if (window.ttq && typeof window.ttq.track === "function") window.ttq.track(eventName, params);
  };
  document.addEventListener("click", (e) => {
    const t = e.target instanceof Element ? e.target.closest("[data-track-event]") : null;
    if (t && t.tagName !== "FORM") window.hisTrack(t.dataset.trackEvent, { href: t.getAttribute("href") || undefined });
  });
  document.addEventListener("submit", (e) => {
    const f = e.target;
    if (f instanceof HTMLFormElement) window.hisTrack(f.dataset.trackEvent || "form_submit", { form: f.getAttribute("name") });
  });

  // Close the mobile menu after choosing a link (same-page anchors otherwise leave it open).
  const menu = document.querySelector(".mnav");
  if (menu) {
    menu.addEventListener("click", (e) => { if (e.target instanceof Element && e.target.closest("a")) menu.open = false; });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") menu.open = false; });
  }

  // Gentle reveal on scroll.
  const items = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && items.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add("is-in"));
  }
})();
