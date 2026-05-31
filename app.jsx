// app.jsx — routing + cinematic transitions

function App() {
  const [view, setView] = React.useState("home");     // home | skill | about | contact
  const [skillId, setSkillId] = React.useState(null);
  const [phase, setPhase] = React.useState("in");     // in | out  (for crossfade)

  // Idle skill labels render horizontally.
  window.__tweakLabelStyle = "horizontal";

  const scrollerRef = React.useRef(null);

  // Transition helper: fade out current, swap, fade in.
  const navigate = (next) => {
    setPhase("out");
    setTimeout(() => {
      next();
      if (scrollerRef.current) scrollerRef.current.scrollTop = 0;
      setPhase("in");
    }, 340);
  };

  const go = (v) => {
    if (v === view && v !== "skill") return;
    navigate(() => { setView(v); if (v !== "skill") setSkillId(null); });
  };
  const openSkill = (id) => navigate(() => { setSkillId(id); setView("skill"); });

  const skill = SKILLS.find((s) => s.id === skillId);
  const isHome = view === "home";

  return (
    <div className={"app" + (isHome ? " app-home" : " app-inner")}>
      <div className="bg-aura" />

      {!isHome ? <Chrome current={view} go={go} openSkill={openSkill} skillId={skillId} /> : (
        <header className="chrome chrome-home">
          <div className="chrome-left">
            <Wordmark onClick={() => go("home")} />
            <span className="chrome-divider" />
            <Social socials={SITE.socials.filter((s) => s.label !== "WhatsApp")} />
          </div>
          <Nav current={view} go={go} openSkill={openSkill} skillId={skillId} full={false} />
        </header>
      )}

      <main
        ref={scrollerRef}
        className={"stage" + (isHome ? " stage-home" : " stage-scroll") + " phase-" + phase}
      >
        {isHome && <Landing go={go} openSkill={openSkill} />}
        {view === "skill" && skill && <SkillDetail skill={skill} go={go} openSkill={openSkill} />}
        {view === "about" && <About go={go} />}
        {view === "contact" && <Contact go={go} />}

        {!isHome && (
          <footer className="foot">
            <span className="foot-copy">© {new Date().getFullYear()} Gökhan Ergin ERYILDIR (ergin3d) — all worlds reserved</span>
          </footer>
        )}
      </main>

      {isHome && (
        <footer className="foot foot-home">
          <span className="foot-copy">© {new Date().getFullYear()} Gökhan Ergin ERYILDIR · ergin3d</span>
        </footer>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
