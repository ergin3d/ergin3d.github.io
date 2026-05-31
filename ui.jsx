// ui.jsx — shared primitives: placeholders, chrome (wordmark / nav / social), glow

// Striped placeholder. Fills a positioned parent (inset:0). Hue tints it per-skill.
function Placeholder({ hue = 205, label, sub, dim = false, scan = false }) {
  const base = `oklch(0.46 0.075 ${hue})`;
  const deep = `oklch(0.24 0.05 ${hue})`;
  return (
    <div className={"ph" + (dim ? " ph-dim" : "")} aria-hidden="true">
      <div
        className="ph-fill"
        style={{
          background:
            `radial-gradient(125% 95% at 50% 18%, ${base} 0%, ${deep} 52%, oklch(0.12 0.03 ${hue}) 100%)`,
        }}
      />
      <div className="ph-stripes" />
      {scan ? <div className="ph-scan" /> : null}
      {label ? (
        <div className="ph-cap">
          <span className="ph-cap-label">{label}</span>
          {sub ? <span className="ph-cap-sub">{sub}</span> : null}
          <span className="ph-cap-tag">[ drop render ]</span>
        </div>
      ) : (
        <div className="ph-cap">
          <span className="ph-cap-tag">[ drop render ]</span>
        </div>
      )}
    </div>
  );
}

// Tile with fixed aspect ratio wrapping a placeholder — for galleries.
function PlaceTile({ hue, label, sub, ratio = "4 / 3", onClick }) {
  return (
    <div className="tile" style={{ aspectRatio: ratio }} onClick={onClick}>
      <Placeholder hue={hue} />
      <div className="tile-grad" />
      <div className="tile-meta">
        <span className="tile-title">{label}</span>
        {sub ? <span className="tile-sub">{sub}</span> : null}
      </div>
    </div>
  );
}

function Wordmark({ onClick, small = false }) {
  return (
    <button className={"wordmark" + (small ? " wordmark-sm" : "")} onClick={onClick}>
      <span className="wordmark-dot" />
      <span className="wordmark-text">ergin<span className="wordmark-3d">3d</span></span>
    </button>
  );
}

function Nav({ current, go, openSkill, skillId, full = true }) {
  const [open, setOpen] = React.useState(false);
  const closeT = React.useRef(null);

  const enter = () => { clearTimeout(closeT.current); setOpen(true); };
  const leave = () => { closeT.current = setTimeout(() => setOpen(false), 140); };
  const workActive = current === "home" || current === "skill";

  return (
    <nav className="topnav">
      {full ? (
        <button
          className={"navlink" + (current === "home" ? " navlink-on" : "")}
          onClick={() => go("home")}
        >
          Home
        </button>
      ) : null}

      {full ? (
        <div className="nav-group" onMouseEnter={enter} onMouseLeave={leave}>
          <button
            className={"navlink nav-trigger" + (workActive ? " navlink-on" : "") + (open ? " nav-trigger-open" : "")}
            onClick={() => setOpen((o) => !o)}
            aria-haspopup="true"
            aria-expanded={open}
          >
            Work <span className="nav-caret" aria-hidden="true" />
          </button>
          <div className={"nav-menu" + (open ? " nav-menu-open" : "")} role="menu">
            {SKILLS.map((s) => (
              <button
                key={s.id}
                role="menuitem"
                className={"nav-menu-item" + (current === "skill" && skillId === s.id ? " nav-menu-item-on" : "")}
                onClick={() => { setOpen(false); openSkill(s.id); }}
              >
                <span className="nav-menu-no">{s.no}</span>
                <span className="nav-menu-label">{s.title}</span>
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <button
        className={"navlink" + (current === "about" ? " navlink-on" : "")}
        onClick={() => go("about")}
      >
        About
      </button>
      <button
        className={"navlink" + (current === "contact" ? " navlink-on" : "")}
        onClick={() => go("contact")}
      >
        Contact
      </button>
    </nav>
  );
}

function Social({ socials }) {
  return (
    <div className="social">
      {socials.map((s) => (
        <a key={s.label} className="social-link" href={s.href} target={s.href === "#" ? undefined : "_blank"} rel="noopener noreferrer" onClick={(e) => { if (s.href === "#") e.preventDefault(); }}>
          {s.label}
        </a>
      ))}
    </div>
  );
}

// Floating chrome over any view. `bare` = transparent (for landing).
function Chrome({ current, go, openSkill, skillId, children }) {
  return (
    <header className="chrome">
      <div className="chrome-left">
        <Wordmark onClick={() => go("home")} />
        <span className="chrome-divider" />
        <Social socials={SITE.socials.filter((s) => s.label !== "WhatsApp")} />
      </div>
      <Nav current={current} go={go} openSkill={openSkill} skillId={skillId} />
    </header>
  );
}

// Real image with cover-crop, falling back to a striped placeholder.
function Media({ src, focus = "50% 50%", hue = 205, label, sub, scan = false, tint = true, fit = "cover", align, wAlign = "center" }) {
  if (!src) return <Placeholder hue={hue} label={label} sub={sub} scan={scan} />;
  const cls =
    fit === "height" ? ("media-h" + (align === "left" ? " media-h-left" : "")) :
    fit === "width" ? "media-w" :
    "media-img";
  const style =
    fit === "cover" ? { objectPosition: focus } :
    fit === "width" ? { objectPosition: wAlign === "top" ? "50% 0%" : "50% 50%" } :
    undefined;
  return (
    <div className="media" aria-hidden="true">
      <img
        className={cls}
        src={src}
        alt=""
        style={style}
      />
      {tint ? (
        <div className="media-tint" style={{ background: `radial-gradient(120% 80% at 50% 30%, oklch(0.5 0.08 ${hue} / 0.18), transparent 70%)` }} />
      ) : null}
      {scan ? <div className="ph-scan" /> : null}
    </div>
  );
}

// YouTube video tile — thumbnail + play button, opens the video in a new tab.
function VideoTile({ id, title, sub, ratio = "16 / 9" }) {
  return (
    <a
      className="tile vtile"
      style={{ aspectRatio: ratio }}
      href={"https://www.youtube.com/watch?v=" + id}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="vtile-thumb" src={"https://img.youtube.com/vi/" + id + "/hqdefault.jpg"} alt="" loading="lazy" />
      <div className="tile-grad" />
      <span className="vtile-play"><span className="vtile-tri" /></span>
      <div className="tile-meta">
        <span className="tile-title">{title}</span>
        {sub ? <span className="tile-sub">{sub}</span> : null}
      </div>
    </a>
  );
}

// Static image tile — thumbnail that opens a lightbox. onOpen receives nothing; parent tracks index.
function ImageTile({ src, title, sub, ratio = "16 / 10", onOpen }) {
  return (
    <button className="tile itile" style={{ aspectRatio: ratio }} onClick={onOpen}>
      <img className="itile-thumb" src={src} alt={title} loading="lazy" />
      <div className="tile-grad" />
      <span className="itile-expand" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
          <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
        </svg>
      </span>
      <div className="tile-meta">
        <span className="tile-title">{title}</span>
        {sub ? <span className="tile-sub">{sub}</span> : null}
      </div>
    </button>
  );
}

Object.assign(window, { Placeholder, PlaceTile, Wordmark, Nav, Social, Chrome, Media, VideoTile, ImageTile });
