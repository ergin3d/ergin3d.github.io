# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`ergin3d` — a single-page portfolio site for Gökhan Ergin ERYILDIR (3D artist, game developer). Dark/cinematic aesthetic, four skill disciplines (3D Modeling, 3D Animation, Game Development, AR/VR), with detail pages, an About timeline, and a contact form.

## Architecture — read this first

This is a **buildless** React app. There is no bundler, no `package.json`, no `node_modules`, no transpile step on disk, and no tests or linter. Understanding the runtime model is essential before editing anything:

- **React 18.3.1, ReactDOM, and `@babel/standalone` are loaded from the unpkg CDN** as UMD globals in `index.html` (with SRI `integrity` hashes).
- **JSX is transpiled in the browser at load time.** Each `.jsx` file is included as a separate `<script type="text/babel" src="...">`; Babel Standalone fetches and compiles it client-side. There is no ES module system here — **no `import`/`export`**.
- **Files communicate through the global `window` object.** Each file defines its components/data and then publishes them with `Object.assign(window, {...})` (or `window.X = X`). Later files reference earlier globals directly (`React`, `ReactDOM`, `SITE`, `SKILLS`, `ABOUT`, `Media`, `Chrome`, etc.).

### Load order is load-bearing
The `<script>` order in `index.html` defines dependency order. A file may only use globals published by a file loaded before it:

1. `data.jsx` — content/data: publishes `SITE`, `SKILLS`, `ABOUT`
2. `ui.jsx` — shared primitives: `Placeholder`, `PlaceTile`, `Wordmark`, `Nav`, `Social`, `Chrome`, `Media`, `VideoTile`, `ImageTile`
3. `landing.jsx` — home page: `Landing`, `Bar`
4. `pages.jsx` — `SkillDetail`, `About`, `Contact` (plus `Lightbox`, `GameCard`)
5. `app.jsx` — `App` root + `ReactDOM.createRoot(...).render(<App/>)`

**When you add a new component file, you must (a) publish its exports onto `window`, and (b) add a `<script type="text/babel" src="...">` tag to `index.html` at the correct position in this order.** Forgetting either is the most common way to break the app.

### Routing & transitions (`app.jsx`)
There is no router and no URLs/history. `App` holds a `view` state machine (`home | skill | about | contact`) plus `skillId`. Navigation goes through `go(view)` and `openSkill(id)`, which are threaded down as props to every page. `navigate()` runs a crossfade: set `phase: "out"`, wait **340ms**, swap the view, set `phase: "in"`.

> The `340` ms timeout in `app.jsx` is coupled to the `.stage { transition: ... 0.34s ... }` rule in `styles.css` (lines ~154–156). Change one and you must change the other, or the fade and the content swap desync.

### Content vs. components
All portfolio content lives in `data.jsx` as plain data structures. **Adding/editing projects means editing `data.jsx`, not the page components.** Each entry in `SKILLS` renders one of two ways in `SkillDetail`:

- A skill with a **`cards`** array → grid of `GameCard` (thumbnail + "What I did" / "How" + links). Used by animation, gamedev, arvr.
- A skill with a **`projects`** array → `gallery` of `ImageTile` / `VideoTile` / `PlaceTile`, with a keyboard-navigable `Lightbox`. Used by modeling.

Images come from `assets/`. `Media` cover-crops a real image and **falls back to a striped `Placeholder` when `src` is missing/absent** — so referencing an asset that doesn't exist yet degrades gracefully rather than breaking layout. YouTube items are thumbnail tiles that link out (`img.youtube.com/vi/<id>/hqdefault.jpg`); there are no embeds.

### Landing mechanic (`landing.jsx`)
The home page is N expanding bars sized in JS, not CSS. It measures its container with a `ResizeObserver` and computes each bar's main-axis size: landscape → bars are vertical columns (size = width); portrait/square (`dim.w/dim.h < 1.2`) → bars stack as horizontal rows (size = height). Hover expands the active bar and shrinks the rest. `window.__tweakLabelStyle` (set to `"horizontal"` in `app.jsx`) tweaks label rendering.

### Styling (`styles.css`)
One global stylesheet. Design tokens are CSS custom properties in `:root` (`--bg-0`, `--accent: #00e5ff`, `--ease` cubic-bezier, `--glow`, `--grain`, fonts). Heavy use of `oklch()`, `color-mix()`, and `clamp()` for fluid sizing. Class naming is flat/BEM-ish (`.bar`, `.bar-active`, `.detail-hero`, `.gcard-title`); **component state is expressed by string-concatenating modifier classes in JSX** (e.g. `"bar" + (active ? " bar-active" : "")`), so style changes often pair a CSS rule with a class toggle in the component.

## Running locally

There is no build or dev script. Serve the directory over **HTTP** — do not open `index.html` via `file://`, because Babel Standalone fetches the `.jsx` files with XHR and the browser blocks that under the `file://` origin.

```powershell
python -m http.server 8000      # then open http://localhost:8000
# or: npx serve
```

Then hard-reload after edits (in-browser Babel results are cached; there is no HMR). JSX syntax errors surface only at runtime in the browser console, not at edit time.

## Gotchas

- No tests, no lint, no typechecking, no CI. Verify changes by loading the page in a browser and checking the console.
- Bumping a CDN library version in `index.html` requires updating its `integrity` SRI hash too, or the script will be blocked.
- This is not a git repository.
