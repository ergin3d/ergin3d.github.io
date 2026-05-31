// landing.jsx — the 5 expanding skill bars (JS-computed widths, no image scaling)

function Bar({ skill, idx, active, dimmed, labelStyle, size, vertical, onEnter, onLeave, onOpen }) {
  return (
    <button
      className={
        "bar" +
        (active ? " bar-active" : "") +
        (dimmed ? " bar-dim" : "") +
        (vertical ? " bar-vert" : "") +
        (labelStyle === "horizontal" ? " bar-lh" : "")
      }
      style={
        size != null
          ? (vertical ? { height: `${size}px`, width: "100%" } : { width: `${size}px` })
          : undefined
      }
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onClick={onOpen}
    >
      <div className="bar-img">
        <Media src={skill.img} hue={skill.hue} scan={active} fit={vertical ? "width" : "height"} align={skill.align} wAlign={skill.id === "animation" || skill.id === "gamedev" ? "top" : "center"} />
      </div>
      <div className="bar-grad" />
      <div className="bar-line" />

      {labelStyle !== "horizontal" && !vertical ? (
        <div className="bar-vlabel">{skill.title}</div>
      ) : null}

      <div className="bar-hlabel">
        <span className="bar-disc">{skill.discipline}</span>
        <span className="bar-title">{skill.title}</span>
        <span className="bar-cta">
          View work <span className="bar-arrow">→</span>
        </span>
      </div>
    </button>
  );
}

function Landing({ go, openSkill }) {
  const [hover, setHover] = React.useState(null);
  const [armed, setArmed] = React.useState(false);
  const [dim, setDim] = React.useState({ w: 0, h: 0 });
  const [introX, setIntroX] = React.useState(0);
  const barsRef = React.useRef(null);
  const labelStyle = window.__tweakLabelStyle || "crossfade";

  // Intro block slides horizontally away from the cursor (x-axis only).
  const onMove = (e) => {
    const w = window.innerWidth || 1;
    const dx = (e.clientX - w / 2) / (w / 2); // -1 (left) .. 1 (right)
    setIntroX(-dx * 90); // run away from the mouse, capped at ~90px
  };

  // Measure the strip container so we can size each strip to its image's width.
  React.useEffect(() => {
    const el = barsRef.current;
    if (!el) return;
    const measure = () => setDim({ w: el.clientWidth, h: el.clientHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Compute strip sizes along the main axis. Landscape → strips laid out as
  // vertical columns (size = width). Square/portrait → strips stack as horizontal
  // rows (size = height) so the images stay viewable. Idle = equal; hover = the
  // active strip opens and the rest share the remainder.
  const n = SKILLS.length;
  const EXPAND_AR = 0.707; // ≈ Game Development poster ratio — uniform expand width
  const vertical = dim.w > 0 && dim.h > 0 && dim.w / dim.h < 1.2;
  let sizes = null;
  if (dim.w > 0 && dim.h > 0) {
    const total = vertical ? dim.h : dim.w;
    if (hover === null) {
      sizes = SKILLS.map(() => total / n);
    } else {
      const active = vertical
        ? Math.min(dim.w * 0.78, dim.h * 0.46)
        : Math.min(EXPAND_AR * dim.h, dim.w * 0.72);
      const other = (total - active) / (n - 1);
      sizes = SKILLS.map((_, i) => (i === hover ? active : other));
    }
  }

  // Hide the centre block only when an inner (centre) bar is hovered — the edge
  // bars (3D Modeling, AR/VR) sit clear of it, so keep it visible for those.
  // In stacked (portrait) mode the rows carry their own labels, so hide it.
  const introHidden = vertical || (hover !== null && hover !== 0 && hover !== SKILLS.length - 1);

  return (
    <div className={"landing" + (vertical ? " landing-vert" : "")}>
      <div
        className={"bars" + (armed ? " armed" : "") + (vertical ? " bars-vert" : "")}
        ref={barsRef}
        onMouseEnter={() => setArmed(true)}
        onMouseMove={onMove}
        onMouseLeave={() => { setHover(null); setIntroX(0); }}
      >
        {SKILLS.map((s, i) => (
          <Bar
            key={s.id}
            skill={s}
            idx={i}
            active={hover === i}
            dimmed={hover !== null && hover !== i}
            labelStyle={labelStyle}
            size={sizes ? sizes[i] : null}
            vertical={vertical}
            onEnter={() => setHover(i)}
            onLeave={() => {}}
            onOpen={() => openSkill(s.id)}
          />
        ))}
      </div>

      <div
        className={"landing-intro" + (introHidden ? " landing-intro-hidden" : "")}
        style={{ transform: `translate(${introHidden ? 0 : introX}px, -50%)` }}
      >
        <div className="landing-scrim" aria-hidden="true" />
        <span className="landing-name">Gökhan Ergin ERYILDIR</span>
        <h1 className="landing-tag">
          3D Artist <span className="sep">·</span> Vibe Coder <span className="sep">·</span> Game Developer
        </h1>
        <p className="landing-hint">
          <span className="hint-dot" /> Explore 3D modeling, animation, game development &amp; AR/VR
        </p>
      </div>
    </div>
  );
}

Object.assign(window, { Landing, Bar });
