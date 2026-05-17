/* =========================================================
   Walter Fresh — app.js
   ========================================================= */

(function () {
  "use strict";

  /* ---------- TRANSLATIONS ---------- */
  const I18N = {
    es: {
      "nav.home": "Inicio",
      "nav.about": "Sobre Mí",
      "nav.upcoming": "Próximos",
      "nav.music": "Discografía",
      "nav.social": "Sólo en Redes",
      "nav.covers": "Covers",
      "nav.inedito": "Inéditos",
      "nav.contact": "Contacto",
      "hero.eyebrow": "Productor • DJ • Argentina",
      "hero.lede": "Música que conecta, melodías que se sienten. Beats que se quedan en la memoria.",
      "hero.cta.listen": "Escuchar en Spotify",
      "hero.cta.latest": "Último Lanzamiento",
      "hero.scroll": "Desliza",
      "about.eyebrow": "Sobre Mí",
      "about.title.l1": "Melodías que te hablan.",
      "about.title.l2": "Grooves que te",
      "about.title.l3": "elevan",
      "about.lede": "Creo canciones para quienes sienten demasiado y dicen poco.",
      "about.p1": "Walter Fresh es productor y artista de Deep House melódico y R&B emocional. Empecé produciendo y subiendo mezclas de todo tipo — canciones en inglés, bilingües, tech-engue, lentos, baladas — hasta que fui conociendo a mi público y empecé a acompañar su sentir.",
      "about.p2": "Su música combina emociones reales con atmósferas profundas y beats que conectan: noches que todavía siguen vivas en la memoria, historias contadas a través de groove, melodía y silencio. Cada tema es una atmósfera. Cada atmósfera, una parte de lo que alguna vez dolió, sanó o se quedó.",
      "about.quote": "Cada tema es una historia, una atmósfera y una parte de lo que alguna vez dolió.",
      "stats.releases": "Lanzamientos",
      "stats.years": "Creando desde",
      "stats.countries": "Países alcanzados",
      "social.eyebrow": "Sólo en Redes",
      "social.title.l1": "Temas exclusivos",
      "social.title.em": "para vos",
      "social.sub": "Temas que estrenaron en mis redes — ahora podés escucharlos completos acá, sin recortes. Reproducción sólo en streaming. Cuando lleguen a Spotify y Apple Music, vas a ser de los primeros en saberlo.",
      "social.listen": "Ver en",
      "social.note": "Temas que viven en redes · pronto disponibles en Spotify y otras plataformas. Mientras tanto, esta web es el único lugar donde podés escucharlos enteros.",
      "covers.eyebrow": "Covers",
      "covers.title.l1": "Versiones que",
      "covers.title.em": "reinterpreto",
      "covers.sub": "Canciones que me marcaron, reinterpretadas a mi forma. Sólo para escuchar — los derechos pertenecen a sus autores originales.",
      "covers.original": "Original",
      "covers.empty": "Pronto disponible. Estoy preparando las versiones para vos.",
      "covers.note": "Reproducción sólo en streaming · Derechos de los autores originales",
      "inedito.eyebrow": "Inéditos",
      "inedito.title.l1": "Votá cuál",
      "inedito.title.em": "te llega",
      "inedito.sub": "Temas inéditos, sin lanzar. Escuchá el estribillo, sentí cuál te toca y dejá tu voto. Lo que digan los fans decide cuál sale primero.",
      "inedito.banner": "<strong>Tu voto cuenta.</strong> Marcá los inéditos que más te lleguen — los que más voten se lanzan primero.",
      "inedito.total": "Votos totales",
      "inedito.vote": "Me llega",
      "inedito.voted": "Tu voto ✓",
      "inedito.badge": "Inédito",
      "upcoming.eyebrow": "Próximos Lanzamientos",
      "upcoming.title.l1": "Lo que viene.",
      "upcoming.title.l2": "Estribillos en exclusiva.",
      "upcoming.sub": "Adelantos visuales con un fragmento del estribillo. Dale play para escucharlo entero, y guardá el pre-save para que te llegue el día del lanzamiento.",
      "upcoming.preview": "Preview directo en Spotify",
      "disco.eyebrow": "Discografía",
      "disco.title.l1": "Catálogo",
      "disco.title.l2": "completo",
      "disco.sub": "Todos los lanzamientos disponibles en Spotify. Pulsa cualquier portada para reproducir, o el botón Escuchar para abrir el tema en Spotify.",
      "disco.filter.all": "Todo",
      "disco.filter.album": "Álbumes",
      "disco.filter.ep": "EPs",
      "disco.filter.single": "Singles",
      "disco.filter.latest": "2026",
      "disco.listen": "Escuchar",
      "news.eyebrow": "Mantente Cerca",
      "news.title.l1": "Únete al",
      "news.title.em": "viaje",
      "news.p": "Recibe lanzamientos exclusivos, versiones especiales antes que nadie y sesiones íntimas en tu correo.",
      "news.placeholder": "Tu email",
      "news.cta": "Suscribirme",
      "news.note": "Sin spam. Sólo música y momentos.",
      "contact.eyebrow": "Contacto",
      "contact.title.l1": "Hablemos.",
      "contact.title.em": "Conectemos.",
      "contact.sub": "Booking, colaboraciones, prensa o simplemente decirme qué tema te llegó.",
      "contact.email": "Email",
      "contact.booking": "Booking & Prensa",
      "contact.follow": "Sígueme",
      "footer.nav": "Navegación",
      "footer.music": "Música",
      "footer.info": "Info",
      "footer.follow": "Seguir",
      "footer.rights": "Todos los derechos reservados.",
      "footer.tagline": "Deep House • R&B • Melodic • Emotional",
      "type.Single": "Single",
      "type.EP": "EP",
      "type.Álbum": "Álbum"
    },
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.upcoming": "Upcoming",
      "nav.music": "Discography",
      "nav.social": "Socials Only",
      "nav.covers": "Covers",
      "nav.inedito": "Unreleased",
      "nav.contact": "Contact",
      "hero.eyebrow": "Producer • DJ • Argentina",
      "hero.lede": "Music that connects, melodies you can feel. Beats that stay in your memory.",
      "hero.cta.listen": "Listen on Spotify",
      "hero.cta.latest": "Latest Release",
      "hero.scroll": "Scroll",
      "about.eyebrow": "About",
      "about.title.l1": "Melodies that speak.",
      "about.title.l2": "Grooves that",
      "about.title.l3": "lift you",
      "about.lede": "I make songs for those who feel too much and say very little.",
      "about.p1": "Walter Fresh is a producer and artist of melodic Deep House and emotional R&B. I started producing and uploading mixes of all kinds — English songs, bilingual tracks, tech-engue, slow tunes, ballads — until I got to know my audience and started accompanying their feelings.",
      "about.p2": "His music blends real emotions with deep atmospheres and beats that connect: nights still alive in memory, stories told through groove, melody and silence. Every track is an atmosphere. Every atmosphere, a piece of what once hurt, healed or stayed.",
      "about.quote": "Every track is a story, an atmosphere and a part of what once hurt.",
      "stats.releases": "Releases",
      "stats.years": "Creating since",
      "stats.countries": "Countries reached",
      "social.eyebrow": "Web Exclusive",
      "social.title.l1": "Exclusive tracks",
      "social.title.em": "for you",
      "social.sub": "Tracks that debuted on my socials — now you can hear them in full right here, uncut. Streaming only. When they reach Spotify and Apple Music, you'll be the first to know.",
      "social.listen": "Watch on",
      "social.note": "Tracks living on socials · coming soon to Spotify and other platforms. For now, this website is the only place where you can hear them in full.",
      "covers.eyebrow": "Covers",
      "covers.title.l1": "Songs I",
      "covers.title.em": "reimagine",
      "covers.sub": "Songs that shaped me, reimagined in my own voice. Streaming only — rights belong to the original authors.",
      "covers.original": "Original",
      "covers.empty": "Coming soon. I'm preparing the versions for you.",
      "covers.note": "Streaming only · Rights of the original authors",
      "inedito.eyebrow": "Unreleased",
      "inedito.title.l1": "Vote the one",
      "inedito.title.em": "that hits",
      "inedito.sub": "Unreleased tracks. Read the chorus, feel which one moves you and cast your vote. What fans choose decides what drops next.",
      "inedito.banner": "<strong>Your vote matters.</strong> Mark the unreleased tracks that hit you — the most-voted ones drop first.",
      "inedito.total": "Total votes",
      "inedito.vote": "Hits me",
      "inedito.voted": "Voted ✓",
      "inedito.badge": "Unreleased",
      "upcoming.eyebrow": "Upcoming Releases",
      "upcoming.title.l1": "What's next.",
      "upcoming.title.l2": "Exclusive choruses.",
      "upcoming.sub": "Visual previews with a fragment of the chorus. Press play to hear it in full, and pre-save it to get it on release day.",
      "upcoming.preview": "Live preview from Spotify",
      "disco.eyebrow": "Discography",
      "disco.title.l1": "Full",
      "disco.title.l2": "catalogue",
      "disco.sub": "All releases available on Spotify. Tap any cover to play, or the Listen button to open the track on Spotify.",
      "disco.filter.all": "All",
      "disco.filter.album": "Albums",
      "disco.filter.ep": "EPs",
      "disco.filter.single": "Singles",
      "disco.filter.latest": "2026",
      "disco.listen": "Listen",
      "news.eyebrow": "Stay Close",
      "news.title.l1": "Join the",
      "news.title.em": "journey",
      "news.p": "Get exclusive releases, special versions before anyone else and intimate sessions delivered to your inbox.",
      "news.placeholder": "Your email",
      "news.cta": "Subscribe",
      "news.note": "No spam. Only music and moments.",
      "contact.eyebrow": "Contact",
      "contact.title.l1": "Let's talk.",
      "contact.title.em": "Let's connect.",
      "contact.sub": "Bookings, collaborations, press — or just tell me which track reached you.",
      "contact.email": "Email",
      "contact.booking": "Booking & Press",
      "contact.follow": "Follow me",
      "footer.nav": "Navigate",
      "footer.music": "Music",
      "footer.info": "Info",
      "footer.follow": "Follow",
      "footer.rights": "All rights reserved.",
      "footer.tagline": "Deep House • R&B • Melodic • Emotional",
      "type.Single": "Single",
      "type.EP": "EP",
      "type.Álbum": "Album"
    }
  };

  let LANG = localStorage.getItem("wf_lang") || "es";

  function applyLang(lang) {
    LANG = lang;
    localStorage.setItem("wf_lang", lang);
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (I18N[lang][key]) el.textContent = I18N[lang][key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (I18N[lang][key]) el.innerHTML = I18N[lang][key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (I18N[lang][key]) el.placeholder = I18N[lang][key];
    });
    document.querySelectorAll(".lang-toggle span").forEach((s) => {
      s.classList.toggle("on", s.dataset.lang === lang);
    });
  }

  /* ---------- DISCO RENDER ---------- */
  /* ---------- SOCIAL-ONLY RENDER ---------- */
  function platformIcon(p) {
    if (p === "Instagram") return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>';
    return '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-9h3l.5-3.5h-3.5V7.2c0-1 .3-1.7 1.7-1.7H17V2.3c-.4-.1-1.5-.2-2.7-.2-2.7 0-4.5 1.6-4.5 4.6V9.5H7V13h2.8v9h3.7z"/></svg>';
  }
  function renderSocial() {
    const host = document.getElementById("social-grid");
    if (!host || !window.WF_SOCIAL_ONLY) return;
    host.innerHTML = window.WF_SOCIAL_ONLY.map((s, i) => {
      const cov = s.cover && s.cover.image
        ? `<img class="social-cover-img" src="${s.cover.image}" alt="${s.title}" loading="lazy">`
        : `<div class="tone-cover tone-${s.cover.tone}"><span>${s.cover.initials}</span></div>`;
      return `
      <article class="social-card reveal delay-${i % 4}" data-idx="${i}">
        <div class="social-cover">
          <span class="social-platform-badge">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0zM10 8.5v7l6-3.5-6-3.5z"/></svg>
            <span>Solo en redes · Web</span>
          </span>
          ${cov}
          <button class="social-play" aria-label="Play ${s.title}">
            <svg class="ic-play" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            <svg class="ic-pause" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>
          </button>
        </div>
        <div class="social-body">
          <h3>${s.title}</h3>
          <div class="blurb">${s.blurb}</div>

          <div class="social-progress">
            <div class="bar"><div class="fill"></div></div>
            <div class="times">
              <span class="now">0:00</span>
              <span class="dur">—:——</span>
            </div>
          </div>
        </div>
        <audio preload="metadata" controlslist="nodownload noplaybackrate" oncontextmenu="return false" src="${s.file}"></audio>
      </article>
    `;}).join("");
    bindSocial();
  }

  function bindSocial() {
    const cards = document.querySelectorAll(".social-card");
    cards.forEach((card) => {
      const audio = card.querySelector("audio");
      const btn = card.querySelector(".social-play");
      const fill = card.querySelector(".social-progress .fill");
      const bar = card.querySelector(".social-progress .bar");
      const nowEl = card.querySelector(".social-progress .now");
      const durEl = card.querySelector(".social-progress .dur");

      audio.addEventListener("loadedmetadata", () => {
        durEl.textContent = fmtTime(audio.duration);
      });
      audio.addEventListener("timeupdate", () => {
        const pct = (audio.currentTime / (audio.duration || 1)) * 100;
        fill.style.width = pct + "%";
        nowEl.textContent = fmtTime(audio.currentTime);
      });
      audio.addEventListener("ended", () => {
        card.classList.remove("playing");
        fill.style.width = "0%";
        nowEl.textContent = "0:00";
      });

      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isPlaying = !audio.paused;
        // pause all other social cards AND covers AND upcoming
        document.querySelectorAll(".social-card audio, .cover-row audio, .upcoming-card video").forEach((m) => {
          if (m !== audio) {
            m.pause();
            if (m.tagName === "VIDEO") m.muted = true;
          }
        });
        document.querySelectorAll(".social-card, .cover-row, .upcoming-card").forEach((c) => {
          if (c !== card) c.classList.remove("playing", "playing-audio");
        });
        if (isPlaying) {
          audio.pause();
          card.classList.remove("playing");
        } else {
          audio.play().catch(() => {});
          card.classList.add("playing");
        }
      });

      bar.addEventListener("click", (e) => {
        const rect = bar.getBoundingClientRect();
        const pct = (e.clientX - rect.left) / rect.width;
        if (isFinite(audio.duration)) audio.currentTime = audio.duration * pct;
      });
    });
  }

  /* ---------- COVERS PLAYER ---------- */
  function fmtTime(s) {
    if (!isFinite(s) || s < 0) s = 0;
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, "0");
    return m + ":" + sec;
  }
  function renderCovers() {
    const host = document.getElementById("covers-wrap");
    const noteEl = document.getElementById("covers-note");
    if (!host) return;
    const list = window.WF_COVERS || [];
    if (!list.length) {
      host.outerHTML = `<div class="covers-empty reveal" id="covers-wrap"><span class="gold">Coming soon</span><span data-i18n="covers.empty">${I18N[LANG]["covers.empty"]}</span></div>`;
      if (noteEl) noteEl.style.display = "none";
      return;
    }
    host.innerHTML = list.map((c, i) => `
      <div class="cover-row reveal delay-${i % 4}" data-idx="${i}">
        <div class="cover-thumb">
          <div class="tone-cover tone-${c.tone || "warm"}"><span>${c.initials || (i+1).toString().padStart(2,"0")}</span></div>
        </div>
        <div class="cover-info">
          <h3 class="cover-title">${c.title}</h3>
          ${c.subtitle ? `<div class="cover-original">${c.subtitle}</div>` : (c.original ? `<div class="cover-original"><em>${I18N[LANG]["covers.original"] || "Original"}</em>${c.original}</div>` : "")}
        </div>
        <div class="cover-controls">
          <span class="cover-time"><span class="now">0:00</span><span class="sep">/</span><span class="dur">—:——</span></span>
          <button class="cover-play" data-play="${i}" aria-label="Play">
            <svg class="play-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            <svg class="pause-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>
          </button>
        </div>
        <div class="cover-progress"><div class="bar"></div></div>
        <audio preload="metadata" controlslist="nodownload noplaybackrate" oncontextmenu="return false" src="${c.file}"></audio>
      </div>
    `).join("");
    bindCovers();
  }
  function bindCovers() {
    const rows = document.querySelectorAll(".cover-row");
    rows.forEach((row) => {
      const audio = row.querySelector("audio");
      const btn = row.querySelector(".cover-play");
      const bar = row.querySelector(".cover-progress .bar");
      const nowEl = row.querySelector(".now");
      const durEl = row.querySelector(".dur");
      const progressBg = row.querySelector(".cover-progress");

      audio.addEventListener("loadedmetadata", () => {
        durEl.textContent = fmtTime(audio.duration);
      });
      audio.addEventListener("timeupdate", () => {
        const pct = (audio.currentTime / (audio.duration || 1)) * 100;
        bar.style.width = pct + "%";
        nowEl.textContent = fmtTime(audio.currentTime);
      });
      audio.addEventListener("ended", () => {
        row.classList.remove("playing");
        bar.style.width = "0%";
        nowEl.textContent = "0:00";
      });

      btn.addEventListener("click", () => {
        const isPlaying = !audio.paused;
        // pause all others
        rows.forEach((r) => {
          if (r !== row) {
            const a = r.querySelector("audio");
            a.pause();
            r.classList.remove("playing");
          }
        });
        if (isPlaying) {
          audio.pause();
          row.classList.remove("playing");
        } else {
          audio.play().catch(() => {});
          row.classList.add("playing");
        }
      });

      progressBg.addEventListener("click", (e) => {
        const rect = progressBg.getBoundingClientRect();
        const pct = (e.clientX - rect.left) / rect.width;
        if (isFinite(audio.duration)) audio.currentTime = audio.duration * pct;
      });
    });
  }

  /* ---------- INÉDITOS RENDER + VOTES ---------- */
  const VOTES_KEY = "wf_inedito_votes_v1";
  function loadVotes() {
    try { return JSON.parse(localStorage.getItem(VOTES_KEY) || "{}"); }
    catch (e) { return {}; }
  }
  function saveVotes(v) {
    try { localStorage.setItem(VOTES_KEY, JSON.stringify(v)); } catch (e) {}
  }
  function renderInedito() {
    const host = document.getElementById("inedito-grid");
    if (!host || !window.WF_INEDITOS) return;
    const votes = loadVotes();
    host.innerHTML = window.WF_INEDITOS.map((t, i) => {
      const voted = !!votes[t.id];
      const count = t.baseVotes + (voted ? 1 : 0);
      return `
      <article class="inedito-card reveal delay-${i % 3} ${voted ? "voted" : ""}" data-id="${t.id}">
        <div class="inedito-cover">
          <span class="badge">${I18N[LANG]["inedito.badge"] || "Inédito"}</span>
          <div class="tone-cover tone-${t.cover.tone}"><span>${t.cover.initials}</span></div>
        </div>
        <div class="inedito-body">
          <h3>${t.title}</h3>
          ${t.genres ? `<div class="inedito-genres">${t.genres.map(g => `<span>${g}</span>`).join("")}</div>` : ""}
          <div class="inedito-chorus">${t.chorus}</div>
          <div class="vote-bar">
            <button class="vote-btn ${voted ? "voted" : ""}" data-vote="${t.id}">
              <svg viewBox="0 0 24 24"><path d="M12 21s-7-4.5-9.3-9C1 8.5 3 5 6.5 5c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3 3.5 0 5.5 3.5 4 7-2.3 4.5-9.3 9-9.3 9z"/></svg>
              <span>${voted ? (I18N[LANG]["inedito.voted"] || "Tu voto ✓") : (I18N[LANG]["inedito.vote"] || "Me llega")}</span>
            </button>
            <span class="vote-count" data-count-for="${t.id}">${count}</span>
          </div>
        </div>
      </article>
    `;
    }).join("");
    bindVoteButtons();
    updateTotal();
  }
  function bindVoteButtons() {
    document.querySelectorAll(".vote-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const id = btn.dataset.vote;
        const votes = loadVotes();
        const wasVoted = !!votes[id];
        if (wasVoted) { delete votes[id]; }
        else { votes[id] = Date.now(); }
        saveVotes(votes);

        const card = btn.closest(".inedito-card");
        const countEl = card.querySelector(".vote-count");
        const track = window.WF_INEDITOS.find((x) => x.id === id);
        const newCount = track.baseVotes + (votes[id] ? 1 : 0);

        btn.classList.toggle("voted", !!votes[id]);
        card.classList.toggle("voted", !!votes[id]);
        btn.querySelector("span").textContent = votes[id]
          ? (I18N[LANG]["inedito.voted"] || "Tu voto ✓")
          : (I18N[LANG]["inedito.vote"] || "Me llega");
        countEl.textContent = newCount;
        countEl.classList.remove("bump");
        void countEl.offsetWidth;
        countEl.classList.add("bump");
        updateTotal();
      });
    });
  }
  function updateTotal() {
    const votes = loadVotes();
    const total = window.WF_INEDITOS.reduce((sum, t) => sum + t.baseVotes + (votes[t.id] ? 1 : 0), 0);
    const el = document.getElementById("inedito-total");
    if (el) el.textContent = total.toLocaleString("es-AR");
  }

  function updateStats() {
    const total = (window.WF_RELEASES || []).length;
    document.querySelectorAll(".stat .num[data-count]").forEach((n) => {
      if (n.dataset.statKey === "releases") n.dataset.count = total;
    });
  }
  function renderUpcoming() {
    const host = document.getElementById("upcoming-row");
    if (!host || !window.WF_UPCOMING) return;
    host.innerHTML = window.WF_UPCOMING.map((r, i) => {
      const confirmed = r.status === "confirmed";
      const featured = confirmed; // featured class for the 2 confirmed
      return `
      <article class="upcoming-card reveal delay-${i % 4} ${featured ? "featured" : "tba"}" data-idx="${i}">
        <div class="upcoming-media">
          <video
            preload="metadata"
            playsinline
            muted
            loop
            controlslist="nodownload noplaybackrate"
            oncontextmenu="return false"
            src="${r.video}"></video>
          <button class="upcoming-play" aria-label="Play preview">
            <svg class="ic-play" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            <svg class="ic-pause" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>
          </button>
          <div class="upcoming-status">
            ${confirmed
              ? `<span class="badge-date"><span class="d-day">${r.dateShort || r.date}</span><span class="d-label">${LANG === "en" ? "Drops" : "Sale"} 2026</span></span>`
              : `<span class="badge-tba">${LANG === "en" ? "Coming Soon" : "Próximamente"}</span>`}
          </div>
        </div>

        <div class="upcoming-body">
          <div class="upcoming-tagline">
            <span>${r.type}</span>
            ${confirmed ? `<span class="sep">·</span><span class="confirmed-date">${r.date}</span>` : ""}
          </div>
          <h3>${r.title}</h3>
          ${r.subtitle ? `<div class="upcoming-sub">${r.subtitle}</div>` : ""}

          ${r.tracklist ? `
            <ol class="upcoming-tracklist">
              ${r.tracklist.map((t, idx) => `
                <li><span class="t-num">${String(idx+1).padStart(2,"0")}</span><span class="t-name">${t}</span></li>
              `).join("")}
            </ol>
          ` : ""}

          <div class="upcoming-actions">
            ${r.presave ? `
              <a class="up-btn primary" href="${r.presave}" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"/></svg>
                <span>${LANG === "en" ? "Pre-save" : "Pre-Save"}</span>
              </a>
              <a class="up-btn ghost" href="${r.presave}" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 17h5l-1.4-1.4A7 7 0 003 14a7 7 0 0014 1.5"/><path d="M9 11l3 3 5-5"/></svg>
                <span>${LANG === "en" ? "Remind me" : "Avisame"}</span>
              </a>
            ` : `
              <button class="up-btn ghost" data-notify="${r.title}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 17h5l-1.4-1.4A7 7 0 003 14a7 7 0 0014 1.5"/><path d="M9 11l3 3 5-5"/></svg>
                <span>${LANG === "en" ? "Notify me" : "Avisame cuando salga"}</span>
              </button>
            `}
          </div>
        </div>
      </article>
    `;}).join("");
    bindUpcoming();
  }

  function bindUpcoming() {
    const cards = document.querySelectorAll(".upcoming-card");
    cards.forEach((card) => {
      const video = card.querySelector("video");
      const btn = card.querySelector(".upcoming-play");
      if (!video || !btn) return;

      // Autoplay muted preview on hover (desktop only)
      card.addEventListener("mouseenter", () => {
        if (matchMedia("(hover: none)").matches) return;
        if (!card.classList.contains("playing-audio")) {
          video.muted = true;
          video.play().catch(() => {});
        }
      });
      card.addEventListener("mouseleave", () => {
        if (matchMedia("(hover: none)").matches) return;
        if (!card.classList.contains("playing-audio")) {
          video.pause();
          video.currentTime = 0;
        }
      });

      // Click play button → full audio
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isAudio = card.classList.contains("playing-audio");
        // pause others
        cards.forEach((c) => {
          if (c !== card) {
            const v = c.querySelector("video");
            v.pause();
            v.muted = true;
            v.currentTime = 0;
            c.classList.remove("playing-audio");
          }
        });
        if (isAudio) {
          video.pause();
          video.muted = true;
          card.classList.remove("playing-audio");
        } else {
          video.muted = false;
          video.currentTime = 0;
          video.play().catch(() => {});
          card.classList.add("playing-audio");
        }
      });

      video.addEventListener("ended", () => {
        card.classList.remove("playing-audio");
        video.muted = true;
      });
    });

    // Notify-me buttons (TBA tracks) — open mailto
    document.querySelectorAll("[data-notify]").forEach((b) => {
      b.addEventListener("click", () => {
        const title = b.dataset.notify;
        const subject = encodeURIComponent("Avisame cuando salga: " + title);
        const body = encodeURIComponent("Hola Walter! Quiero que me avises cuando salga \"" + title + "\".\n\nGracias!");
        window.location.href = `mailto:frescowalteresteban@gmail.com?subject=${subject}&body=${body}`;
      });
    });
  }

  function typeKey(type) {
    return type === "Álbum" ? "album" : type === "EP" ? "ep" : "single";
  }

  let currentFilter = "all";
  function renderDisco() {
    const host = document.getElementById("disco-grid");
    if (!host || !window.WF_RELEASES) return;
    const list = window.WF_RELEASES.filter((r) => {
      if (currentFilter === "all") return true;
      if (currentFilter === "latest") return r.year === "2026";
      return typeKey(r.type) === currentFilter;
    });
    host.innerHTML = list.map((r, i) => {
      const hasId = !!r.id;
      const searchQ = encodeURIComponent("Walter Fresh " + r.title);
      const openUrl = hasId
        ? `https://open.spotify.com/album/${r.id}`
        : `https://open.spotify.com/search/${searchQ}`;
      const tone = r.tone || "warm";
      const initials = r.title.split(/\s+/).filter(w => /^[A-Za-zÁÉÍÓÚáéíóúÑñ¿]/.test(w)).slice(0, 2).map(w => w[0].toUpperCase()).join("");
      const cover = hasId
        ? `<iframe
            src="https://open.spotify.com/embed/album/${r.id}?utm_source=walterfresh&theme=0"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowtransparency="true"
            title="${r.title} — Spotify"></iframe>`
        : `<div class="tone-cover tone-${tone}"><span style="font-size:38px;font-family:var(--font-script);">${initials}</span></div>
           <div class="disco-cover-title">
             <div class="t-mini">Walter Fresh</div>
             <div class="t-title">${r.title}</div>
             ${r.special ? `<div class="t-badge">Special Version</div>` : ""}
           </div>`;
      return `
      <article class="album reveal delay-${i % 4}" data-id="${r.id || ""}">
        <div class="album-cover ${hasId ? "" : "no-embed"}">${cover}</div>
        <div class="album-meta">
          <h3 class="album-title">${r.title}</h3>
          <span class="album-tag">${I18N[LANG]["type." + r.type] || r.type} · ${r.year}</span>
        </div>
        <a class="album-listen" href="${openUrl}" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.5 17.32a.75.75 0 01-1.03.25c-2.82-1.72-6.37-2.11-10.55-1.16a.75.75 0 11-.33-1.46c4.57-1.04 8.5-.59 11.66 1.34.36.22.47.69.25 1.03zm1.47-3.28a.94.94 0 01-1.29.31c-3.23-1.99-8.16-2.56-11.99-1.4a.94.94 0 11-.55-1.8c4.38-1.33 9.81-.69 13.52 1.6.44.28.58.86.31 1.29zm.13-3.41C15.31 8.66 8.71 8.43 4.92 9.58a1.13 1.13 0 11-.66-2.16c4.35-1.32 11.63-1.06 16.21 1.66a1.13 1.13 0 01-1.16 1.94z"/></svg>
          <span>${hasId ? (I18N[LANG]["disco.listen"] || "Escuchar") : (LANG === "en" ? "Search on Spotify" : "Buscar en Spotify")}</span>
        </a>
      </article>
    `;}).join("");
    bindReveal();
  }

  function bindFilters() {
    document.querySelectorAll(".chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        currentFilter = chip.dataset.filter;
        document.querySelectorAll(".chip").forEach((c) => c.classList.toggle("on", c === chip));
        renderDisco();
      });
    });
  }

  /* ---------- REVEAL ON SCROLL ---------- */
  let revealObserver;
  function bindReveal() {
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            revealObserver.unobserve(e.target);
          }
        });
      }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });
    }
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => revealObserver.observe(el));
  }

  /* ---------- NAV SCROLL STATE + ACTIVE LINK ---------- */
  function bindNavScroll() {
    const nav = document.querySelector(".nav");
    const sections = ["#home", "#about", "#upcoming", "#music", "#social", "#covers", "#inedito", "#contact"];
    const links = document.querySelectorAll(".nav-links a[data-section]");
    function update() {
      if (window.scrollY > 40) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");

      let active = "#home";
      for (const id of sections) {
        const el = document.querySelector(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) active = id;
      }
      links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === active));
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  /* ---------- COUNTER ANIMATION ---------- */
  function animateCounter(el, target, suffix = "", duration = 1800) {
    const noFormat = el.dataset.noFormat === "true";
    const start = performance.now();
    function step(now) {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.floor(target * eased);
      el.firstChild.nodeValue = noFormat ? String(val) : val.toLocaleString("es-AR");
      if (p < 1) requestAnimationFrame(step);
      else el.firstChild.nodeValue = noFormat ? String(target) : target.toLocaleString("es-AR");
    }
    requestAnimationFrame(step);
  }

  function bindCounters() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const num = e.target;
          const target = parseInt(num.dataset.count, 10);
          animateCounter(num, target);
          observer.unobserve(num);
        }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll(".stat .num").forEach((n) => {
      // make first child a text node so we can replace
      const suffix = n.querySelector(".suffix");
      const text = document.createTextNode("0");
      if (suffix) n.insertBefore(text, suffix);
      else n.insertBefore(text, n.firstChild);
      // remove old static
      [...n.childNodes].forEach((ch) => { if (ch.nodeType === 3 && ch !== text) ch.remove(); });
      observer.observe(n);
    });
  }

  /* ---------- CUSTOM CURSOR ---------- */
  function bindCursor() {
    if (matchMedia("(hover: none)").matches) return;
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    document.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
    });
    function loop() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    }
    loop();
    document.querySelectorAll("a, button, .album-cover, .chip, .upcoming-card, input").forEach((el) => {
      el.addEventListener("mouseenter", () => ring.classList.add("hover"));
      el.addEventListener("mouseleave", () => ring.classList.remove("hover"));
    });
  }

  /* ---------- MOBILE MENU ---------- */
  function bindMobile() {
    const btn = document.querySelector(".hamburger");
    const menu = document.querySelector(".mobile-menu");
    if (!btn) return;
    btn.addEventListener("click", () => menu.classList.add("open"));
    menu.querySelector(".close").addEventListener("click", () => menu.classList.remove("open"));
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => menu.classList.remove("open")));
  }

  /* ---------- LANG TOGGLE ---------- */
  function bindLang() {
    document.querySelectorAll(".lang-toggle span").forEach((s) => {
      s.addEventListener("click", () => applyLang(s.dataset.lang));
    });
  }

  /* ---------- TWEAKS ---------- */
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "accent": "gold",
    "font": "great-vibes",
    "animations": true
  }/*EDITMODE-END*/;

  const ACCENT_MAP = {
    gold:   { gold: "#d4b882", gold2: "#e8d2a3", deep: "#a88a52" },
    copper: { gold: "#c87f4a", gold2: "#e09c66", deep: "#8a4a26" },
    silver: { gold: "#cfd2d6", gold2: "#eef0f3", deep: "#8a8e94" },
    blue:   { gold: "#7faad8", gold2: "#a8c4e4", deep: "#4a73a0" }
  };
  const FONT_CLASS = {
    "great-vibes": "",
    "allura": "font-allura",
    "pinyon": "font-pinyon",
    "dancing": "font-dancing"
  };

  let tweaks = { ...TWEAK_DEFAULTS };
  function applyTweaks() {
    const a = ACCENT_MAP[tweaks.accent] || ACCENT_MAP.gold;
    document.documentElement.style.setProperty("--gold", a.gold);
    document.documentElement.style.setProperty("--gold-2", a.gold2);
    document.documentElement.style.setProperty("--gold-deep", a.deep);

    document.body.classList.remove("font-allura", "font-pinyon", "font-dancing");
    if (FONT_CLASS[tweaks.font]) document.body.classList.add(FONT_CLASS[tweaks.font]);

    document.body.classList.toggle("no-anim", !tweaks.animations);

    document.querySelectorAll(".tw-swatch").forEach((el) => {
      el.classList.toggle("on", el.dataset.accent === tweaks.accent);
    });
    document.querySelectorAll(".tw-opt").forEach((el) => {
      el.classList.toggle("on", el.dataset.font === tweaks.font);
    });
    document.querySelectorAll(".tw-switch").forEach((el) => {
      el.classList.toggle("on", tweaks[el.dataset.toggle]);
    });
  }
  function setTweak(key, val) {
    tweaks[key] = val;
    applyTweaks();
    try {
      window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [key]: val } }, "*");
    } catch (e) {}
  }

  function bindTweaks() {
    const panel = document.querySelector(".tweaks-panel");
    if (!panel) return;

    window.addEventListener("message", (e) => {
      if (!e.data) return;
      if (e.data.type === "__activate_edit_mode") panel.classList.add("open");
      if (e.data.type === "__deactivate_edit_mode") panel.classList.remove("open");
    });
    try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch (e) {}

    panel.querySelector(".tweaks-close").addEventListener("click", () => {
      panel.classList.remove("open");
      try { window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*"); } catch (e) {}
    });
    panel.querySelectorAll(".tw-swatch").forEach((el) => {
      el.addEventListener("click", () => setTweak("accent", el.dataset.accent));
    });
    panel.querySelectorAll(".tw-opt").forEach((el) => {
      el.addEventListener("click", () => setTweak("font", el.dataset.font));
    });
    panel.querySelectorAll(".tw-switch").forEach((el) => {
      el.addEventListener("click", () => setTweak(el.dataset.toggle, !tweaks[el.dataset.toggle]));
    });

    applyTweaks();
  }

  /* ---------- NEWSLETTER ---------- */
  function bindNewsletter() {
    const form = document.getElementById("newsletter-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input");
      const btn = form.querySelector("button");
      const original = btn.textContent;
      btn.textContent = LANG === "en" ? "Thanks ✓" : "Gracias ✓";
      btn.style.background = "#c9a76a";
      input.value = "";
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = "";
      }, 2600);
    });
  }

  /* ---------- INIT ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    applyLang(LANG);
    updateStats();
    renderUpcoming();
    renderDisco();
    renderSocial();
    renderCovers();
    renderInedito();
    bindFilters();
    bindReveal();
    bindNavScroll();
    bindCounters();
    bindCursor();
    bindMobile();
    bindLang();
    bindTweaks();
    bindNewsletter();
  });
})();
