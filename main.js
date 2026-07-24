/* =============================================================
   Site engine. You normally don't need to touch this file —
   edit data.js instead.

   This is a MULTI-PAGE site: every page loads this same file.
   It injects the shared nav + footer, then fills in whichever
   section happens to live on the current page.
   ============================================================= */

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, c =>
  ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));

/* ---------- the pages, in order ---------- */
const PAGES = [
  { id: "home",         label: "Home",         file: "index.html" },
  { id: "experience",   label: "Experience",   file: "experience.html" },
  { id: "education",    label: "Education",     file: "education.html" },
  { id: "skills",       label: "Skills",        file: "skills.html" },
  { id: "projects",     label: "Projects",      file: "projects.html" },
  { id: "certificates", label: "Certificates",  file: "certificates.html" },
  { id: "contact",      label: "Contact",       file: "contact.html" },
];

/* ---------- icons ---------- */
const I = {
  pin:  '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  mail: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/></svg>',
  phone:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .3 1.9.6 2.8a2 2 0 01-.4 2.1L8 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.5 2.8.6a2 2 0 011.8 2z"/></svg>',
  cal:  '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  git:  '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7 0-.7 0-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17 4.7 18 5 18 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3"/></svg>',
  in:   '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1a3.7 3.7 0 013.3-1.8c3.6 0 4.2 2.3 4.2 5.4v6.2zM5.3 7.4a2 2 0 110-4.1 2 2 0 010 4.1zM7.1 20.4H3.6V9h3.5v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 1 .8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7c0-.9-.8-1.7-1.8-1.7z"/></svg>',
  code: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>',
  branch:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 01-9 9"/></svg>',
  ext:  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6M10 14L21 3"/></svg>',
};

/* which page are we on? set via <body data-page="..."> */
const CURRENT = document.body.dataset.page || "home";

/* social links row, reused in a few places */
function socialHTML() {
  const d = DATA;
  const social = [
    d.links?.linkedin && [d.links.linkedin, I.in, "LinkedIn"],
    d.links?.github   && [d.links.github, I.git, "GitHub"],
    d.email           && [`mailto:${d.email}`, I.mail.replace(/15/g,"20"), "Email"],
  ].filter(Boolean);
  return social
    .map(([href, ic, lbl]) => `<a href="${esc(href)}" target="_blank" rel="noopener" aria-label="${lbl}">${ic}</a>`)
    .join("");
}

function tagRow(tags, flat) {
  if (!tags?.length) return "";
  return `<div class="tags"${flat ? ' style="margin-top:0"' : ""}>` +
    tags.map(t => `<span class="tag">${esc(t)}</span>`).join("") + "</div>";
}

/* project tags: show the first few, collapse the rest behind a "+N" pill */
function projectTags(tags, max = 3) {
  if (!tags?.length) return "";
  const shown = tags.slice(0, max), rest = tags.slice(max);
  return `<div class="tags">` +
    shown.map(t => `<span class="tag">${esc(t)}</span>`).join("") +
    rest.map(t => `<span class="tag tag-extra" hidden>${esc(t)}</span>`).join("") +
    (rest.length ? `<button class="tag-more" type="button" aria-label="Show ${rest.length} more">+${rest.length}</button>` : "") +
    `</div>`;
}

/* ============================================================
   SHARED CHROME — nav + progress bar + footer on every page
   ============================================================ */
function buildChrome() {
  const d = DATA;
  document.title = `${d.name} — ${PAGES.find(p => p.id === CURRENT)?.label || "Portfolio"}`;

  // progress bar
  const prog = document.createElement("div");
  prog.id = "progress";
  document.body.insertAdjacentElement("afterbegin", prog);

  // nav
  const nav = document.createElement("nav");
  nav.id = "nav";
  nav.innerHTML = `
    <div class="nav-inner">
      <a href="index.html" class="brand">${esc(d.name)}</a>
      <div class="nav-links" id="navLinks">${PAGES.map(p =>
        `<a href="${p.file}"${p.id === CURRENT ? ' class="active"' : ""}>${p.label}</a>`).join("")}</div>
      <div class="nav-tools">
        <button class="icon-btn" id="theme" aria-label="Switch theme">🌙</button>
        <button class="icon-btn" id="burger" aria-label="Open menu">☰</button>
      </div>
    </div>`;
  document.body.insertBefore(nav, document.body.children[1] || null);

  // footer
  const foot = document.createElement("footer");
  foot.innerHTML = `
    <div class="foot-grid">
      <div>
        <h4>Social links</h4>
        <div class="foot-socials">${socialHTML()}</div>
      </div>
      <div>
        <h4>Quick links</h4>
        <div class="quick">${PAGES.map(p =>
          `<a href="${p.file}">${p.label}</a>`).join("")}</div>
      </div>
    </div>
    <div class="copy">© ${new Date().getFullYear()} ${esc(d.name)}. All rights reserved.</div>`;
  document.body.appendChild(foot);
}

/* ============================================================
   PER-SECTION RENDERERS — each runs only if its host page
   contains the matching container.
   ============================================================ */
function renderHome() {
  if (!$("#heroName")) return;
  const d = DATA;
  $("#heroName").textContent = d.name;
  $("#heroRole").textContent = d.role;
  $("#heroBio").textContent  = d.bio;
  $("#avatar").src = d.photo;
  $("#avatar").alt = d.name;

  $("#heroMeta").innerHTML = [
    d.location && `<span>${I.pin}${esc(d.location)}</span>`,
    d.email && `<span>${I.mail}<a href="mailto:${esc(d.email)}">${esc(d.email)}</a></span>`,
    d.phone && `<span>${I.phone}<a href="tel:${esc(d.phone).replace(/\s/g,"")}">${esc(d.phone)}</a></span>`,
  ].filter(Boolean).join("");

  $("#heroSocials").innerHTML = socialHTML();
}

function renderExperience() {
  if (!$("#expList")) return;
  const d = DATA, s = d.subtitles || {};
  $("#expSub").textContent = s.experience || "";
  $("#expList").innerHTML = (d.experience || []).map(e => `
    <div class="tl-item reveal">
      <article class="card">
        <div class="card-top">
          ${e.logo ? `<img class="logo" src="${esc(e.logo)}" alt="" onerror="this.style.display='none'">` : ""}
          <div>
            <h3>${esc(e.role)}</h3>
            <div class="org">${esc(e.company)}</div>
          </div>
        </div>
        <div class="sub">
          ${e.date ? `<span>${I.cal}${esc(e.date)}</span>` : ""}
          ${e.place ? `<span>${I.pin}${esc(e.place)}</span>` : ""}
        </div>
        ${(e.points || []).map(p => `<p>${esc(p)}</p>`).join("")}
        ${tagRow(e.tags)}
      </article>
    </div>`).join("");
}

function renderEducation() {
  if (!$("#eduList")) return;
  const d = DATA, s = d.subtitles || {};
  $("#eduSub").textContent = s.education || "";
  $("#eduList").innerHTML = (d.education || []).map(e => `
    <div class="tl-item reveal">
      <article class="card">
        <div class="card-top">
          ${e.logo ? `<img class="logo" src="${esc(e.logo)}" alt="" onerror="this.style.display='none'">` : ""}
          <div>
            <h3>${esc(e.degree)}</h3>
            <div class="org">${esc(e.school)}</div>
          </div>
        </div>
        <div class="sub">
          ${e.date ? `<span>${I.cal}${esc(e.date)}</span>` : ""}
          ${e.place ? `<span>${I.pin}${esc(e.place)}</span>` : ""}
        </div>
        <ul>${(e.points || []).map(p => `<li>${esc(p)}</li>`).join("")}</ul>
      </article>
    </div>`).join("");
}

function renderSkills() {
  if (!$("#skillList")) return;
  const d = DATA, s = d.subtitles || {};
  $("#skillSub").textContent = s.skills || "";
  $("#skillList").innerHTML = (d.skills || []).map(k => `
    <article class="card skill-card reveal">
      <div class="skill-head">
        ${k.icon ? `<img class="skill-icon" src="${esc(k.icon)}" alt="" onerror="this.style.display='none'">` : ""}
        <div class="skill-title">
          <h3>${esc(k.name)}</h3>
          <span class="pct">${Number(k.level) || 0}%</span>
        </div>
      </div>
      <div class="bar"><i data-level="${Number(k.level) || 0}"></i></div>
      <p>${esc(k.note)}</p>
    </article>`).join("");
}

function renderProjects() {
  if (!$("#projList")) return;
  const d = DATA, s = d.subtitles || {};
  $("#projSub").textContent = s.projects || "";
  if ($("#ghAll")) $("#ghAll").href = d.links?.github || "#";

  const cats = ["All", ...(d.projectFilters || [])];
  $("#filters").innerHTML = cats
    .map((c, i) => `<button class="filter${i === 0 ? " on" : ""}" data-cat="${esc(c)}">${esc(c)}</button>`)
    .join("");
  paintProjects("All");

  $("#filters").addEventListener("click", e => {
    const b = e.target.closest(".filter");
    if (!b) return;
    document.querySelectorAll(".filter").forEach(x => x.classList.remove("on"));
    b.classList.add("on");
    paintProjects(b.dataset.cat);
  });

  // "+N" pill reveals the hidden tags on its card
  $("#projList").addEventListener("click", e => {
    const more = e.target.closest(".tag-more");
    if (!more) return;
    more.parentElement.querySelectorAll(".tag-extra").forEach(t => t.hidden = false);
    more.remove();
  });
}

function paintProjects(cat) {
  const list = (DATA.projects || []).filter(p => cat === "All" || p.category === cat);
  $("#projList").innerHTML = list.map(p => `
    <article class="proj reveal">
      ${p.image ? `<img class="thumb" src="${esc(p.image)}" alt="" onerror="this.style.display='none'">` : ""}
      <div class="proj-body">
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.description)}</p>
        ${projectTags(p.tags)}
        <div class="proj-links">
          ${p.code ? `<a class="btn btn-ghost" href="${esc(p.code)}" target="_blank" rel="noopener">${I.branch} Code</a>` : ""}
          ${p.demo ? `<a class="btn btn-ghost" href="${esc(p.demo)}" target="_blank" rel="noopener">${I.ext} Live demo</a>` : ""}
        </div>
      </div>
    </article>`).join("") || `<p style="color:var(--text-dim)">Nothing here yet.</p>`;
  observeReveals();
}

function renderCertificates() {
  if (!$("#certList")) return;
  const d = DATA, s = d.subtitles || {};
  $("#certSub").textContent  = s.certificates || "";
  $("#certBlurb").textContent = s.certBlurb || "";
  $("#certCount").textContent = (d.certificates || []).length;
  $("#certList").innerHTML = (d.certificates || []).map(c => `
    <article class="proj reveal">
      ${c.image ? `<img class="thumb cert-thumb" src="${esc(c.image)}" alt="${esc(c.title)}" data-full="${esc(c.image)}" title="Click to view" onerror="this.style.display='none'">` : ""}
      <div class="cert-body">
        <h3>${esc(c.title)}</h3>
        <div class="org">${esc(c.issuer)}</div>
        ${c.date ? `<div class="sub"><span>${I.cal}${esc(c.date)}</span></div>` : ""}
        <p style="color:var(--text-dim);font-size:.92rem">${esc(c.note)}</p>
        ${c.skills?.length ? `<div class="small-label">Skills</div>${tagRow(c.skills, true)}` : ""}
        ${c.link ? `<div class="proj-links"><a class="btn" style="width:100%;justify-content:center" href="${esc(c.link)}" target="_blank" rel="noopener">${I.ext} View certificate</a></div>` : ""}
      </div>
    </article>`).join("");
}

function renderContact() {
  if (!$("#contactList")) return;
  const d = DATA, s = d.subtitles || {};
  $("#contactSub").textContent   = s.contact || "";
  $("#contactBlurb").textContent = s.contactBlurb || "";
  $("#contactSocials").innerHTML = socialHTML();

  $("#contactList").innerHTML = [
    d.email && ["Email", d.email, I.mail, `mailto:${d.email}`],
    d.phone && ["Phone", d.phone, I.phone, `tel:${d.phone.replace(/\s/g,"")}`],
    d.location && ["Location", d.location, I.pin, null],
  ].filter(Boolean).map(([lbl, val, ic, href]) => `
    <div class="ci">
      <div class="ci-icon">${ic}</div>
      <div><b>${lbl}</b><span>${href ? `<a href="${esc(href)}">${esc(val)}</a>` : esc(val)}</span></div>
    </div>`).join("");

  $("#form").addEventListener("submit", e => {
    e.preventDefault();
    const body = `From: ${$("#f-name").value} <${$("#f-email").value}>\n\n${$("#f-msg").value}`;
    location.href = `mailto:${DATA.email}` +
      `?subject=${encodeURIComponent($("#f-subject").value)}` +
      `&body=${encodeURIComponent(body)}`;
  });
}

/* ============================================================
   INTERACTIONS shared by all pages
   ============================================================ */
let io;
function observeReveals() {
  if (!io) {
    io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        en.target.querySelectorAll(".bar i").forEach(b => {
          b.style.width = b.dataset.level + "%";
        });
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
  }
  document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
}

/* click any [data-full] image to open it full-size in an overlay */
function setupLightbox() {
  if ($("#lightbox")) return;
  const ov = document.createElement("div");
  ov.id = "lightbox";
  ov.className = "lightbox";
  ov.innerHTML = `<button class="lightbox-close" aria-label="Close">&times;</button><img alt="">`;
  document.body.appendChild(ov);
  const img = ov.querySelector("img");

  const open = (src, alt) => {
    img.src = src; img.alt = alt || "";
    ov.classList.add("open");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    ov.classList.remove("open");
    document.body.style.overflow = "";
    img.src = "";
  };

  document.addEventListener("click", e => {
    const t = e.target.closest("[data-full]");
    if (t) { e.preventDefault(); open(t.getAttribute("data-full"), t.alt); }
  });
  ov.addEventListener("click", e => {
    if (e.target === ov || e.target.classList.contains("lightbox-close")) close();
  });
  addEventListener("keydown", e => { if (e.key === "Escape") close(); });
}

function setTheme(t) {
  document.documentElement.dataset.theme = t;
  $("#theme").textContent = t === "dark" ? "🌙" : "☀️";
  try { localStorage.setItem("theme", t); } catch (e) {}
}

function init() {
  buildChrome();

  renderHome();
  renderExperience();
  renderEducation();
  renderSkills();
  renderProjects();
  renderCertificates();
  renderContact();

  observeReveals();
  setupLightbox();

  // saved theme, else system preference
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  setTheme(saved || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));

  $("#theme").onclick = () =>
    setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");

  // mobile menu
  const links = $("#navLinks");
  $("#burger").onclick = () => links.classList.toggle("open");
  links.addEventListener("click", e => {
    if (e.target.tagName === "A") links.classList.remove("open");
  });

  // scroll progress bar for the current page
  const onScroll = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    $("#progress").style.width = (max > 0 ? (h.scrollTop / max * 100) : 0) + "%";
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

document.addEventListener("DOMContentLoaded", init);
