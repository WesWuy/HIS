export default {
  path: "/audio",
  title: "Audio and Music",
  description:
    "Future Human Improvement Systems audio for personal development, faith-inspired electronic music, meditative tracks, and high-energy training.",
  ogImage: "/assets/his/marketing/05_podcast_audio_artwork.png",
  body: (ui) => `
<section class="hero hero--page">
  <div class="wrap">
    ${ui.eyebrow("Audio · Music")}
    <h1>Sound for focus, conviction, recovery, and movement.</h1>
    <p class="lead">A future home for personal development audio, faith-inspired electronic music, meditative tracks, and high-energy training releases.</p>
  </div>
</section>

<section class="section section--obsidian">
  <div class="wrap split">
    <div class="frame" data-reveal>
      <img src="/assets/img/audio-art-560.webp" srcset="/assets/img/audio-art-560.webp 560w, /assets/img/audio-art-1120.webp 1120w" sizes="(max-width: 860px) 100vw, 540px" width="560" height="560" loading="lazy" alt="Human Improvement Systems Audio artwork: focused soundscapes, spoken frameworks, and training tools.">
    </div>
    <div data-reveal>
      ${ui.eyebrow("Release lanes")}
      <h2>Audio products will serve different states.</h2>
      <p class="lead">The catalog can grow into spoken systems, guided sessions, playlists, and original tracks.</p>
      <div class="stack" style="margin-top:24px">
        <article class="card"><span class="num">01</span><h3>Clarity Audio</h3><p>Short spoken tracks for standards, planning, and emotional steadiness.</p></article>
        <article class="card"><span class="num">02</span><h3>Meditative Sessions</h3><p>Lower-intensity sound for prayer, reflection, breath, and recovery.</p></article>
        <article class="card"><span class="num">03</span><h3>High-Energy Tracks</h3><p>Electronic music for training, work sprints, and disciplined momentum.</p></article>
      </div>
    </div>
  </div>
</section>

<section class="section cta-band">
  <div class="wrap" data-reveal>
    ${ui.eyebrow("Releases · Playlists")}
    <h2>First releases are coming. Get notified when they go live.</h2>
    <p class="lead">Join for audio drops, playlists, and future training programs.</p>
    ${ui.newsletter({ name: "newsletter-audio", source: "audio", page: "/audio", id: "audio-newsletter" })}
  </div>
</section>
`,
};
