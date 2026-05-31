// pages.jsx — skill detail, about, contact

function SkillDetail({ skill, go, openSkill }) {
  const others = SKILLS.filter((s) => s.id !== skill.id);
  const imgProjects = (skill.projects || []).filter((p) => p.img);
  const [lightbox, setLightbox] = React.useState(null); // index into imgProjects

  const openAt = (proj) => {
    const idx = imgProjects.indexOf(proj);
    if (idx >= 0) setLightbox(idx);
  };

  return (
    <div className="page detail">
      <div className="detail-hero">
        <div className="detail-hero-img">
          <Media src={skill.img} focus={skill.focus} hue={skill.hue} label={skill.reel ? skill.reel.label : null} sub={skill.reel ? skill.reel.sub : null} scan />
          <div className="detail-hero-grad" />
        </div>
        <div className="detail-hero-body">
          <div className="detail-no">{skill.no} / 04</div>
          <h1 className="detail-title">{skill.title}</h1>
          <div className="detail-disc">{skill.discipline}</div>
          <p className="detail-blurb">{skill.blurb}</p>
          <div className="detail-tools" style={{ marginBottom: skill.stores ? 22 : 0 }}>
            {skill.tools.map((t) => (
              <span key={t} className="tool-chip">{t}</span>
            ))}
          </div>
          {skill.stores ? (
            <div className="store-row">
              <span className="store-label">Models for sale</span>
              <div className="store-btns">
                {skill.stores.map((st) => (
                  <a key={st.label} className="store-btn" href={st.href} target="_blank" rel="noopener noreferrer">
                    {st.label} <span className="store-arrow">↗</span>
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="detail-section">
        <div className="section-head">
          <span className="section-kicker">Selected work</span>
          <span className="section-rule" />
        </div>
        {skill.cards ? (
          <div className="gcards">
            {skill.cards.map((c, i) => (
              <GameCard key={i} card={c} />
            ))}
          </div>
        ) : (
        <div className="gallery">
          {skill.projects.map((p, i) => (
            p.img ? (
              <ImageTile key={i} src={p.img} title={p.title} sub={p.meta} onOpen={() => openAt(p)} />
            ) : p.yt ? (
              <VideoTile key={i} id={p.yt} title={p.title} sub={p.meta} />
            ) : (
              <PlaceTile
                key={i}
                hue={skill.hue + (i % 3) * 6 - 6}
                label={p.title}
                sub={p.meta}
                ratio={i % 5 === 0 ? "16 / 10" : "4 / 3"}
              />
            )
          ))}
        </div>
        )}
      </div>

      <div className="detail-next">
        <span className="next-kicker">Explore another discipline</span>
        <div className="next-row">
          {others.map((s) => (
            <button key={s.id} className="next-pill" onClick={() => openSkill(s.id)}>
              <span className="next-no">{s.no}</span>
              <span className="next-name">{s.title}</span>
              <span className="next-arrow">→</span>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null ? (
        <Lightbox
          items={imgProjects}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onIndex={setLightbox}
        />
      ) : null}
    </div>
  );
}

function Lightbox({ items, index, onClose, onIndex }) {
  const item = items[index];
  const prev = () => onIndex((index - 1 + items.length) % items.length);
  const next = () => onIndex((index + 1) % items.length);

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  return ReactDOM.createPortal(
    <div className="lb" onClick={onClose}>
      <button className="lb-close" onClick={onClose} aria-label="Close">✕</button>
      <button className="lb-nav lb-prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">‹</button>
      <figure className="lb-figure" onClick={(e) => e.stopPropagation()}>
        <img className="lb-img" src={item.img} alt={item.title} />
        <figcaption className="lb-cap">
          <span className="lb-title">{item.title}</span>
          <span className="lb-sub">{item.meta}</span>
          <span className="lb-count">{index + 1} / {items.length}</span>
        </figcaption>
      </figure>
      <button className="lb-nav lb-next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">›</button>
    </div>,
    document.body
  );
}

function GameCard({ card }) {
  return (
    <div className="gcard">
      <a className="gcard-media" href={"https://www.youtube.com/watch?v=" + card.yt} target="_blank" rel="noopener noreferrer">
        <img className="gcard-thumb" src={"https://img.youtube.com/vi/" + card.yt + "/hqdefault.jpg"} alt={card.title} loading="lazy" />
        <div className="tile-grad" />
        <span className="vtile-play"><span className="vtile-tri" /></span>
      </a>
      <div className="gcard-body">
        <div className="gcard-head">
          <h3 className="gcard-title">{card.title}</h3>
          <span className="gcard-meta">{card.meta}</span>
        </div>
        <div className="gcard-cols">
          <div className="gcard-block">
            <span className="gcard-kicker">What I did</span>
            <ul className="gcard-list">
              {card.did.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
          <div className="gcard-block">
            <span className="gcard-kicker">How</span>
            <ul className="gcard-list">
              {card.how.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </div>
        </div>
        <div className="gcard-links">
          {card.links.map((l) => (
            <a key={l.label} className={"gcard-link" + (l.primary ? " gcard-link-primary" : "")} href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label} <span className="gcard-link-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function About({ go }) {
  return (
    <div className="page about">
      <div className="about-grid">
        <div className="about-portrait">
          <Media src="assets/portrait.png" focus="50% 28%" hue={210} />
          <div className="about-portrait-grad" />
        </div>
        <div className="about-body">
          <span className="kicker">About</span>
          <h1 className="about-heading">{ABOUT.heading}</h1>
          {ABOUT.body.map((p, i) => (
            <p key={i} className="about-para">{p}</p>
          ))}
          <div className="about-stats">
            {ABOUT.stats.map((s) => (
              <div key={s.v} className="stat">
                <span className="stat-k">{s.k}</span>
                <span className="stat-v">{s.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-timeline">
        <div className="section-head">
          <span className="section-kicker">Journey</span>
          <span className="section-rule" />
        </div>
        <div className="timeline">
          {ABOUT.timeline.map((it) => (
            <div key={it.year} className="tl-item">
              <span className="tl-year">{it.year}</span>
              <div className="tl-body">
                <span className="tl-title">{it.title}</span>
                <p className="tl-text">{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-stack">
        <div className="section-head">
          <span className="section-kicker">Stack</span>
          <span className="section-rule" />
        </div>
        <div className="stack-grid">
          {ABOUT.stack.map((t) => (
            <span key={t} className="stack-item">{t}</span>
          ))}
        </div>
      </div>

      <div className="about-cta">
        <span className="about-cta-text">Looking for a generalist to hire?</span>
        <button className="big-btn" onClick={() => go("contact")}>
          Start a conversation <span className="big-arrow">→</span>
        </button>
      </div>
    </div>
  );
}

function Contact({ go }) {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", email: "", msg: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const valid = form.name.trim() && /\S+@\S+\.\S+/.test(form.email) && form.msg.trim();

  return (
    <div className="page contact">
      <div className="contact-grid">
        <div className="contact-left">
          <span className="kicker">Contact</span>
          <h1 className="contact-heading">Let's make something<br />that doesn't exist yet.</h1>
          <a className="contact-email" href={"mailto:" + SITE.email}>
            {SITE.email}
          </a>
          <div className="contact-socials">
            {SITE.socials.map((s) => (
              <a key={s.label} className="contact-social" href={s.href} target={s.href === "#" ? undefined : "_blank"} rel="noopener noreferrer" onClick={(e) => { if (s.href === "#") e.preventDefault(); }}>
                <span className="contact-social-name">{s.label}</span>
                <span className="contact-social-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-right">
          {sent ? (
            <div className="contact-sent">
              <div className="sent-check">✓</div>
              <h2 className="sent-title">Message sent</h2>
              <p className="sent-sub">Thanks, {form.name.split(" ")[0] || "there"} — I'll get back to you soon.</p>
              <button className="ghost-btn" onClick={() => { setSent(false); setForm({ name: "", email: "", msg: "" }); }}>
                Send another
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); if (valid) setSent(true); }}>
              <label className="field">
                <span className="field-label">Name</span>
                <input className="field-input" value={form.name} onChange={set("name")} placeholder="Your name" />
              </label>
              <label className="field">
                <span className="field-label">Email</span>
                <input className="field-input" value={form.email} onChange={set("email")} placeholder="you@studio.com" />
              </label>
              <label className="field">
                <span className="field-label">Project</span>
                <textarea className="field-input field-area" value={form.msg} onChange={set("msg")} rows={4} placeholder="What are you building?" />
              </label>
              <button className={"submit-btn" + (valid ? "" : " submit-off")} type="submit">
                Send message <span className="big-arrow">→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { SkillDetail, About, Contact });
