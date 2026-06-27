// data.jsx — site content for ergin3d
// Hue values tint each skill's placeholder so bars read distinct even before real renders land.

const SITE = {
  name: "ergin3d",
  tagline: "3D Artist · Vibe Coder · Game Developer",
  email: "ergineryildir@gmail.com",
  socials: [
    { label: "ArtStation", href: "https://www.artstation.com/gee-1" },
    { label: "TurboSquid", href: "https://www.turbosquid.com/Search/Artists/ergin3d" },
    { label: "GitHub", href: "https://github.com/ergin3d" },
    { label: "DeviantArt", href: "https://www.deviantart.com/ergin3d" },
    { label: "WhatsApp", href: "https://wa.me/905442089278" },
  ],
};

const SKILLS = [
  {
    id: "modeling",
    no: "01",
    title: "3D Modeling",
    discipline: "Hard-surface & organic",
    hue: 205,
    img: "assets/modeling.jpg",
    ar: 1.0,
    focus: "50% 45%",
    blurb:
      "Three decades of turning reference and intent into clean, production-ready meshes — hard-surface, organic, and everything between. Topology built to deform, unwrap and survive both a cinematic render and a tight real-time budget.",
    tools: ["3ds Max", "ZBrush", "Substance", "V-Ray"],
    stores: [
      { label: "TurboSquid", href: "https://www.turbosquid.com/Search/Artists/ergin3d" },
      { label: "Sketchfab", href: "https://sketchfab.com/ergin3d.com" },
    ],
    projects: [
      { title: "Crusader", meta: "Game character · 3 colorways", img: "assets/modeling/crusader.png" },
      { title: "King Penguin", meta: "Creature · rig + UV unwrap", img: "assets/modeling/king-penguin.jpg" },
      { title: "City Raiders · Centauro", meta: "Military vehicle · real-time", img: "assets/modeling/city-raiders.jpg" },
      { title: "Safari Cruiser", meta: "Open-top 4×4 · concept", img: "assets/modeling/safari-cruiser.jpg" },
      { title: "Browning M2", meta: ".30 cal · hi-poly + wireframe", img: "assets/modeling/m2-browning.jpg" },
      { title: "Combat Boots", meta: "Hard-surface · PBR + UV", img: "assets/modeling/combat-boots.jpg" },
      { title: "Pinocchio", meta: "Character · rigged", img: "assets/modeling/pinocchio.jpg" },
      { title: "Head Pipeline", meta: "ZBrush → 3ds Max → V-Ray", img: "assets/modeling/head-pipeline.jpg" },
      { title: "Male Base Mesh", meta: "Realistic anatomy · base mesh", img: "assets/modeling/male-basemesh.jpg" },
      { title: "Human Portrait", meta: "Realistic skin · V-Ray", img: "assets/modeling/human-portrait.jpg" },
      { title: "Gun Truck", meta: "Military pickup · wireframe", img: "assets/modeling/gun-truck.jpg" },
      { title: "King Foe", meta: "Military scene · 3ds Max", img: "assets/modeling/king-foe.jpg" },
      { title: "Maglev Locomotive", meta: "Hard-surface · concept", img: "assets/modeling/maglev.jpg" },
      { title: "Period Costume", meta: "Marvelous Designer · cloth", img: "assets/modeling/period-costume.png" },
      { title: "Hillside Villa", meta: "Architectural visualization", img: "assets/modeling/hillside-villa.jpg" },
      { title: "ERG Headquarters", meta: "Office interiors · archviz", img: "assets/modeling/erg-offices.jpg" },
      { title: "Green Residence", meta: "Residence interiors · archviz", img: "assets/modeling/green-residence.jpg" },
      { title: "Sunlit Living Room", meta: "Interior · V-Ray", img: "assets/modeling/living-room.jpg" },
      { title: "Master Bedroom", meta: "Interior · V-Ray", img: "assets/modeling/master-bedroom.jpg" },
    ],
  },
  {
    id: "animation",
    no: "02",
    title: "3D Animation",
    discipline: "Performance & motion",
    hue: 178,
    img: "assets/animation.png",
    ar: 1.574,
    focus: "50% 30%",
    blurb:
      "From national broadcast commercials to realistic medical visualization — motion that reads at a glance and holds up frame by frame. Character performance, exacting mechanical motion, and rigs an animator actually wants to touch.",
    tools: ["3ds Max", "V-Ray", "Unreal", "Unity"],
    reel: { label: "Military animation", sub: "Pavelsis · 2024 · 3devi", url: "https://www.youtube.com/watch?v=uM6xgQLXXEY" },
    cards: [
      {
        title: "Pavelsis",
        meta: "Military Animation · 2024 · 3devi",
        yt: "uM6xgQLXXEY",
        did: [
          "Produced a defence-industry 3D animation — modeling, motion, lighting and final render.",
          "Staged the hardware and camera work so the system reads clearly in motion.",
        ],
        how: [
          "Created at 3devi in 2024.",
          "Rendered in Unreal Engine 5 with Lumen.",
        ],
        links: [
          { label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=uM6xgQLXXEY", primary: true },
        ],
      },
      {
        title: "ATAÇ",
        meta: "Industrial Animation · 2023 · 3devi",
        yt: "jX7OZzFz0-0",
        did: [
          "Produced an industrial 3D animation showing how the product works — modeling, mechanical motion, lighting and render.",
          "Choreographed the mechanical sequence so each step of the process is easy to follow.",
          "Handled character modeling and animation for the spot.",
        ],
        how: [
          "Created at 3devi in 2023.",
          "Rendered with 3ds Max and V-Ray.",
        ],
        links: [
          { label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=jX7OZzFz0-0", primary: true },
        ],
      },
      {
        title: "Alba Storage",
        meta: "Industrial Animation · 2022 · 3devi",
        yt: "nzCXitkFvTg",
        did: [
          "Produced an industrial 3D animation of the storage system — modeling, mechanical motion, lighting and render.",
          "Built the environment and animated the system in operation for a clear product story.",
          "Handled character modeling and animation for the spot.",
        ],
        how: [
          "Created at 3devi in 2022.",
          "Rendered with 3ds Max and V-Ray.",
        ],
        links: [
          { label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=nzCXitkFvTg", primary: true },
        ],
      },
      {
        title: "Siber Yazılım",
        meta: "Infographic · 2020 · 3devi",
        yt: "i_UNuHkoCUg",
        did: [
          "Produced an animated infographic — motion graphics paired with 3D elements to explain the product.",
          "Designed the pacing and visual storytelling so the information lands at a glance.",
        ],
        how: [
          "Created at 3devi in 2020.",
          "Rendered with 3ds Max and V-Ray.",
        ],
        links: [
          { label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=i_UNuHkoCUg", primary: true },
        ],
      },
      {
        title: "Novabone",
        meta: "Medical Animation · 2019 · 3devi",
        yt: "PD0dDOmWFq8",
        did: [
          "Produced a realistic medical 3D animation — anatomy and product visualization, lighting and render.",
          "Modeled and animated the clinical sequence with the accuracy the subject demands.",
        ],
        how: [
          "Created at 3devi in 2019.",
          "Rendered with 3ds Max and V-Ray.",
        ],
        links: [
          { label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=PD0dDOmWFq8", primary: true },
        ],
      },
      {
        title: "Roya Nova",
        meta: "TV Commercial · 2019 · 3devi",
        yt: "PbGSgKzlezY",
        did: [
          "Created a broadcast 3D commercial — modeling, product/character animation, lighting and render.",
          "Camera-tracked the live footage and color-matched the CG to seat it seamlessly into the plate.",
        ],
        how: [
          "Created at 3devi in 2019.",
          "Rendered with 3ds Max and V-Ray; broadcast on TV.",
        ],
        links: [
          { label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=PbGSgKzlezY", primary: true },
        ],
      },
      {
        title: "Dippo",
        meta: "TV Commercial · 2018 · 3devi",
        yt: "ARFaWSNqJj4",
        did: [
          "Created a broadcast 3D commercial — modeling, animation, lighting and render.",
          "Shaped the motion and timing to fit a tight on-air edit.",
        ],
        how: [
          "Created at 3devi in 2018.",
          "Rendered with 3ds Max and V-Ray; broadcast on TV.",
        ],
        links: [
          { label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=ARFaWSNqJj4", primary: true },
        ],
      },
      {
        title: "Ankaferd",
        meta: "Medical Animation · 2017 · 3devi",
        yt: "wtO_lDBMyVY",
        did: [
          "Produced a medical 3D animation — character modeling and animation, lighting and render.",
          "Simulated a car in motion and the accident sequence, plus a fluid simulation for blood.",
        ],
        how: [
          "Created at 3devi in 2017.",
          "Rendered with 3ds Max and V-Ray.",
        ],
        links: [
          { label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=wtO_lDBMyVY", primary: true },
        ],
      },
      {
        title: "Grand Culture Quiz",
        meta: "Game Animation · 2016 · Personal",
        yt: "_kN-SBA12Nw",
        did: [
          "Created the 3D animation for Grand Culture Quiz, an Android game I also developed myself.",
          "Modeled and animated the in-game characters and motion to give the quiz its own personality.",
        ],
        how: [
          "Produced in 2016 as a personal project.",
          "Rendered with 3ds Max and V-Ray.",
        ],
        links: [
          { label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=_kN-SBA12Nw", primary: true },
        ],
      },
      {
        title: "Kale Kilit",
        meta: "Training Animation · 2015 · Tooneffects",
        yt: "JLkXopSkybI",
        did: [
          "Produced a training animation explaining the product and its use — modeling, animation and render.",
          "Broke the process into clear, easy-to-follow animated steps.",
        ],
        how: [
          "Created at Tooneffects in 2015.",
          "Modeled and rendered in 3ds Max.",
        ],
        links: [
          { label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=JLkXopSkybI", primary: true },
        ],
      },
      {
        title: "DOF Robotics",
        meta: "5D Animation · 2011 · Moss Animation",
        yt: "NwLxcvruYyg",
        did: [
          "Created a 5D motion-ride animation built for synced-motion cinema — fast-paced camera work, modeling and render.",
          "Designed the ride sequence around the platform's motion cues for an immersive experience.",
        ],
        how: [
          "Created at Moss Animation in 2011.",
          "Modeled and rendered in 3ds Max.",
        ],
        links: [
          { label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=NwLxcvruYyg", primary: true },
        ],
      },
      {
        title: "Tooneffects",
        meta: "Commercial · 2010",
        yt: "Mig7mec-KnQ",
        did: [
          "Created a 3D commercial — modeling, animation, lighting and render.",
          "Handled the look and motion end to end.",
        ],
        how: [
          "Produced in 2010 under the Tooneffects banner.",
          "Modeled and rendered in 3ds Max.",
        ],
        links: [
          { label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=Mig7mec-KnQ", primary: true },
        ],
      },
      {
        title: "Karaca",
        meta: "TV Commercial · 2008 · Tooneffects",
        yt: "tokgb-Ofhgo",
        did: [
          "Created a broadcast 3D commercial — modeling, product animation, lighting and render.",
          "Directed the look and motion for an on-air spot.",
        ],
        how: [
          "Created at Tooneffects in 2008.",
          "Modeled and rendered in 3ds Max; broadcast on TV.",
        ],
        links: [
          { label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=tokgb-Ofhgo", primary: true },
        ],
      },
      {
        title: "Penguen Gıda",
        meta: "TV Commercial · 2008 · Tooneffects",
        yt: "Jnr6wZzCjLs",
        did: [
          "Created a broadcast 3D commercial — modeling, animation, lighting and render.",
          "Shaped the motion and timing for an on-air food spot.",
        ],
        how: [
          "Created at Tooneffects in 2008.",
          "Modeled and rendered in 3ds Max; broadcast on TV.",
        ],
        links: [
          { label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=Jnr6wZzCjLs", primary: true },
        ],
      },
    ],
  },
  {
    id: "gamedev",
    no: "03",
    title: "Game Development",
    discipline: "Systems & shipping",
    hue: 268,
    img: "assets/gamedev.jpg",
    ar: 0.707,
    focus: "50% 0%",
    blurb:
      "Titles shipped on Steam, Meta VR and mobile — most of the art and most of the code by the same pair of hands. Full-loop development across Unreal and Unity: gameplay systems, game feel, and the hundred small details that make a build worth finishing.",
    tools: ["Unreal Engine", "Unity", "C#", "Blueprint"],
    cards: [
      {
        title: "Despot Zombie",
        meta: "PC · Steam · 3devi",
        yt: "N5SMYnAzQx8",
        did: [
          "Led the game design — core loop, combat feel, enemy waves, pacing and progression.",
          "Built the level design, wrote the story and direction, and produced the concept art.",
          "Modeled and textured custom characters, environments, weapons and props where the game needed its own identity.",
        ],
        how: [
          "To move fast, we built on a licensed third-person shooter kit — I reworked its gameplay Blueprints to fit our mechanics.",
          "Mixed in purchased assets from Fab and free Unreal content, including MetaHuman, alongside our own art.",
          "Developed and shipped at 3devi; published on Steam.",
        ],
        links: [
          { label: "View on Steam", href: "https://store.steampowered.com/app/2825520/Despot_Zombie/", primary: true },
          { label: "Watch trailer", href: "https://www.youtube.com/watch?v=SKzO3fzk3GU" },
        ],
      },
      {
        title: "Castle Capture: Topkapi",
        meta: "PC · Steam · 3devi",
        yt: "tMQMeGEDvzE",
        did: [
          "Designed a 32-player medieval battle — Ottomans vs Crusaders, two factions with three soldier classes each.",
          "Modeled almost everything myself: characters, weapons, castles, houses, props and trees.",
          "Built the level design and combat around large-scale online sieges.",
        ],
        how: [
          "Made in Unity, gameplay and systems written in C#.",
          "Networked multiplayer powered by the Photon engine.",
          "Developed and shipped at 3devi; published on Steam.",
        ],
        links: [
          { label: "View on Steam", href: "https://store.steampowered.com/app/2250290/Castle_Capture_Topkapi/", primary: true },
        ],
      },
      {
        title: "Castle Capture VR",
        meta: "Meta Quest · PC VR · 3devi",
        yt: "s1gcPqbZdHU",
        did: [
          "Reimagined Castle Capture as a single-player VR campaign — a ground-up Quest title, not a port.",
          "Rebuilt the same world — characters, castles and environments — re-optimised for standalone VR.",
          "Designed the campaign, levels and combat around room-scale presence and comfort.",
        ],
        how: [
          "Made in Unity, written in C#, targeting the Meta Quest 2.",
          "Heavily optimised geometry, textures and draw calls to hold a steady VR framerate.",
          "Developed and shipped at 3devi; published on the Meta Store.",
        ],
        links: [
          { label: "Meta Store (Quest)", href: "https://www.meta.com/experiences/castle-capture/7267692936634309/", primary: true },
          { label: "Meta Store (Rift)", href: "https://www.meta.com/experiences/pcvr/castle-capture/5010778062335211/" },
        ],
      },
      {
        title: "Pro Bowling Social",
        meta: "Meta Quest · Multiplayer · 3devi",
        yt: "zJTPuNW6R_I",
        did: [
          "Designed a social multiplayer VR bowling game — play and hang out together in the same lane.",
          "Tuned the throw mechanic, alley physics and scoring for natural, room-scale motion.",
          "Built the venue, UI and online flow around easy drop-in play.",
        ],
        how: [
          "Made in Unity, written in C#, with networked multiplayer for VR.",
          "Assembled largely from stock models, art-directed and optimised into one cohesive scene.",
          "Developed and shipped at 3devi; published on the Meta Store.",
        ],
        links: [
          { label: "Meta Store (Quest)", href: "https://www.meta.com/experiences/pro-bowling-social/2379075352124947", primary: true },
        ],
      },
      {
        title: "Grand Culture Quiz",
        meta: "Android · Multiplayer · Personal",
        yt: "_kN-SBA12Nw",
        did: [
          "Designed a trivia game with simulated multiplayer — every player feels like a live opponent, with no wait.",
          "Shaped the question flow, scoring and match pacing to keep rounds quick and fun.",
          "Built the UI, presentation and the asynchronous match system around mobile play.",
        ],
        how: [
          "Made in Unity, written in C#.",
          "Records each player's run to a SQL database, then pits the next player against that stored performance — whose own run is saved to challenge someone else.",
          "Released on Android — a personal project, start to finish.",
        ],
        links: [
          { label: "Watch gameplay", href: "https://www.youtube.com/watch?v=_kN-SBA12Nw", primary: true },
        ],
      },
      {
        title: "Zombie Hunter Mike",
        meta: "Android · iOS · Personal",
        yt: "Mt5ePbWY_p4",
        did: [
          "Designed a 3D side-scrolling action game — run, gun and survive waves of zombies.",
          "Shaped the level progression, enemy variety and difficulty curve for pick-up-and-play mobile sessions.",
          "Built the characters, environments and UI, then tuned game feel for touch controls.",
        ],
        how: [
          "Made in Unity, written in C#.",
          "Released on Android and iOS.",
          "A personal project, start to finish.",
        ],
        links: [
          { label: "Watch gameplay", href: "https://www.youtube.com/watch?v=Mt5ePbWY_p4", primary: true },
        ],
      },
    ],
  },
  {
    id: "arvr",
    no: "04",
    title: "AR / VR",
    discipline: "Immersive & spatial",
    hue: 150,
    img: "assets/arvr.png",
    ar: 1.896,
    align: "left",
    focus: "45% 45%",
    blurb:
      "Client VR built around presence — educational, medical, architectural and industrial-safety experiences where being inside the scene is the whole point. Comfortable locomotion, hand-tracked interaction and frame budgets tuned to hold smooth on standalone headsets.",
    tools: ["Unity", "C#", "Oculus", "Meta Quest"],
    reel: { label: "Immersive VR reel", sub: "Unity · C# · Oculus" },
    cards: [
      {
        title: "Cholera VR",
        meta: "Oculus · Educational · 3devi",
        yt: "MSpRA0YTusw",
        did: [
          "Built an interactive educational VR experience about cholera — how it spreads and how to prevent it.",
          "Created the scene, environments and props, and shaped the interactions for headset comfort.",
          "Designed the learning flow so the science reads clearly from inside first-person presence.",
        ],
        how: [
          "Made in Unity, written in C#, targeting Oculus headsets.",
          "Developed at 3devi for client VRB.",
        ],
        links: [
          { label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=MSpRA0YTusw", primary: true },
        ],
      },
      {
        title: "Fruit Pickup VR",
        meta: "VR · Event Game · VR Otto",
        yt: "8Iu0gWxeW7Q",
        did: [
          "A fruit-picking VR game built as a live-event attraction — grab and collect produce against the clock.",
          "Built the scene and art end to end: environments, models and props assembled into one cohesive, event-ready experience.",
        ],
        how: [
          "Made in Unity at VR Otto; the gameplay code was handled by other programmers.",
          "Created for the Mediterranean Exporters' Association.",
        ],
        links: [
          { label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=8Iu0gWxeW7Q", primary: true },
        ],
      },
      {
        title: "Architectural Walkthrough VR",
        meta: "VR · Archviz · 3devi",
        yt: "cjziGa-BXz4",
        did: [
          "An immersive VR walkthrough that lets clients explore an architectural space at 1:1 scale before it's built.",
          "Built the environment, lighting and props, with comfortable locomotion for free exploration.",
        ],
        how: [
          "Made in Unity, written in C#.",
          "Developed at 3devi for client VRB.",
        ],
        links: [
          { label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=cjziGa-BXz4", primary: true },
        ],
      },
      {
        title: "Medical VR Study",
        meta: "Oculus · Research · VR Otto",
        yt: "KZowctGvQzo",
        did: [
          "Developed a VR application for a medical doctor as part of a published research paper.",
          "Built the scene and interactions around the study's clinical requirements.",
        ],
        how: [
          "Made in Unity, written in C#, targeting Oculus.",
          "Developed at VR Otto in collaboration with the researching doctor.",
        ],
        links: [
          { label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=KZowctGvQzo", primary: true },
        ],
      },
      {
        title: "Job Safety VR",
        meta: "VR · Safety Training · 3devi",
        yt: "aUJS5kSiGc4",
        did: [
          "A workplace job-safety VR animation that puts trainees inside hazardous factory scenarios — safely.",
          "Built the scene, environment and the animated safety sequence.",
        ],
        how: [
          "Made in Unity at 3devi.",
          "Developed for Ford Motor Company.",
        ],
        links: [
          { label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=aUJS5kSiGc4", primary: true },
        ],
      },
      {
        title: "Castle Capture VR · Prototype",
        meta: "Unreal · Oculus · 3devi · 2018",
        yt: "nEnufKP1Sb0",
        did: [
          "Built the original VR prototype of Castle Capture — the first attempt to bring the medieval siege into a headset.",
          "Created the scene, environments and combat staging to test presence and scale in VR.",
        ],
        how: [
          "Made in Unreal Engine at 3devi in 2018, for what was then the Oculus Store (pre-Meta).",
          "High-res geometry couldn't hold framerate on standalone hardware, so we moved the project to Unity with low-poly models to support Quest — this Unreal build never reached the market.",
        ],
        links: [
          { label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=nEnufKP1Sb0", primary: true },
        ],
      },
    ],
  },
];

const ABOUT = {
  heading: "I build worlds, the things that live in them, and the tools that make them.",
  body: [
    "I'm Gökhan Ergin ERYILDIR — ergin3d to most of the internet — a 3D artist and developer who has spent thirty years refusing to specialize. Since my first renders in 3D Studio for DOS in 1994, the work has moved through architectural visualization, broadcast commercials, industrial design, medical and defence animation, and games shipped on Steam, Meta VR and mobile — most of them modeled, animated, lit and coded by the same pair of hands.",
    "That range is the whole point, not a detour. Modeling sharpens how I animate; animating shapes how I design a game; shipping a game teaches me what to build next. The disciplines on the home page were never separate careers — they're one continuous pipeline, and I've run every stage of it, from the first polygon to the final build.",
  ],
  stats: [
    { k: "1994", v: "creating in 3D since" },
    { k: "5", v: "Steam & Meta VR titles" },
    { k: "30+", v: "years in production" },
  ],
  timeline: [
    { year: "1994", title: "First renders in 3D", text: "Architectural visualization and animation in 3D Studio for DOS." },
    { year: "1998", title: "Junior asset creator", text: "Built parametric architectural elements — windows, doors, stairs — with in-house tools at a software company, and wrote the documentation." },
    { year: "2001", title: "First broadcast commercial", text: "Created my first 3D animation commercial — broadcast on all major TV channels." },
    { year: "2004", title: "Multimedia DVDs", text: "Began producing interactive multimedia DVDs." },
    { year: "2006", title: "Industrial design", text: "Modeling and rendering for industrial design — and my first-ever 3D print, shown at Istanbul Design Week, long before 3D printing was practiced in Turkey." },
    { year: "2008", title: "Animation & commercials", text: "Switched focus to animation, creating many 3D TV commercials for brands like Karaca." },
    { year: "2009", title: "Mentor", text: "Began teaching V-Ray and 3ds Max at Bilişim Eğitim Merkezi." },
    { year: "2010s", title: "3D animation specialist", text: "Worked as a 3D animation specialist across studio and film projects." },
    { year: "2013", title: "TurboSquid CheckMate", text: "Featured in TurboSquid’s CheckMate Industry Standard program — kept on the front page for years, alongside just five other artists." },
    { year: "2017", title: "Lead game designer", text: "Led design across game, animation and software studios — hand-crafting most of the art and the code myself with Unreal Blueprints and Unity (C#), long before “vibe coding” had a name. Shipped 2 Steam games, 3 Meta VR games, and many Android and iOS titles." },
    { year: "2020", title: "Medical animation", text: "Produced hours of realistic 3D medical animation." },
    { year: "2024", title: "Defence industry", text: "Created 3D animations for the defence industry." },
    { year: "2026", title: "Creative developer", text: "Creative developer — bringing three decades full circle, back to architectural software." }
  ],
  stack: [
    "3ds Max", "V-Ray", "ZBrush", "Substance",
    "Unreal Engine", "Unity", "C#", "Blueprint", "WebXR",
  ],
};

window.SITE = SITE;
window.SKILLS = SKILLS;
window.ABOUT = ABOUT;
