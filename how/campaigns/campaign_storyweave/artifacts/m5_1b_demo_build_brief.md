---
type: build_brief
artifact_class: mission_build_brief
campaign: campaign_storyweave
mission: mission_p5_1_onboarding
objective: O4
phase: P5
increment: M5.1b
status: ready            # turnkey for the in-person dev-rel build session (week of 2026-07-13)
persona: rosetta
executor_tier: opus      # highest-risk, art-direction/honesty-heavy increment (mission-declared)
created: 2026-07-12
updated: 2026-07-12
last_edited_by: agent_rosetta
tags: [build_brief, storyweave, p5, m5_1b, demo_as_proof, r1, onboarding, in_person, dev_rel]
---

# M5.1b — Demo-as-proof (R1): in-person build brief + recording runbook

> **Turnkey brief for the in-person dev-rel build session** (week of 2026-07-13). M5.1b builds the **R1 "demo-as-proof"** — a real ~30–60 s screencast of the agent orienting in a vault and doing one task. R1 is **durable doctrine** ([[front_page_doctrine]] §10, ratified 2026-07-12 at the O3 gate). This brief carries everything the build needs so the session doesn't re-derive placement, patterns, or gate constraints. **Model: `opus`** (the campaign's highest-risk item). Every `site/` fact below was verified by headless exploration on 2026-07-12; line numbers may drift — confirm before editing.

## 0. What R1 is + the honesty gate

- **R1** ([[front_page_doctrine]] §10): *one real, light, honest product-in-action.* The ratified **format class**: an **`asciinema`-style terminal cast** OR an **optimized muted-lazy `<video muted playsinline>`/GIF**; **poster = the existing ASCII mock**; lazy-loaded **below LCP**; **never autoplay-with-sound**.
- **Movement-Skeptic gate (non-negotiable):** a **REAL recording, never staged.** No fabricated output, no cut that misrepresents what happened.
- **Why de-risked this way (O3 evidence, [[_reference_set]] §Install-forward synthesis):** across the 6 install-forward exemplars, *no one autoplays video-with-sound*; the CLI peers (Bun/Astro) hero benchmark+code with **no video at all**, and only **Hermes** (an agent product) heroes a "video of usage" — the sole but exact precedent. So R1 = the *lightest honest* product-in-action, capped in weight.

## 1. Placement (settled — do not relitigate)

- **HOME → the "How it Works" section** (`site/src/pages/index.astro`, the `<section class="how-it-works">` ~137–186, which renders the three `.step-demo` ASCII terminal mocks from `site/src/data/home.ts`). The demo **leads/augments this section**; the three ASCII mocks stay as the annotated Structure/Orient/Execute breakdown **and** the demo's poster / no-JS fallback (step 01's mock already shows the `STATE.md` orientation beat).
- **/get-started** (`site/src/pages/get-started.astro`): the `$ claude` interview `<pre>` (~lines 69–76) becomes the poster; the demo leads/augments there.
- **NOT the hero.** The ratified **P1.6 living-network graph stays the single hero focus** (the §1 one-focus law). Do not put the demo in `HomeHero`.
- **Home-only by construction:** the "How it Works" section lives in `index.astro`, and a new player component would be used only there → **`/network` + `/commons` are zero-diff automatically.** (Verify anyway by diffing `dist/`.)

## 2. The pattern to mirror (the P1.6 progressive enhancement — copy it verbatim in spirit)

The site already ships the exact **no-JS-floor + JS-enhancement + zero-CLS** pattern in `site/src/components/sections/HomeHero.astro` (the Canvas-over-SVG constellation). Mirror it 1:1:

- **ASCII mock = the SSR no-JS/a11y floor.** It stays literal DOM, **sizes the box (→ CLS 0)**, stays in the a11y tree. *(maps to `.hero-graph-svg-wrap`)*
- **The player = the enhancement.** **Opacity cross-fade — NEVER `display:none`.** Init via **`requestIdleCallback` + `IntersectionObserver`**, off the LCP path. **`prefers-reduced-motion` → hold the static poster** (one frame), never autoplay. *(maps to `.hero-graph-canvas` + its init script)*
- **Reference code to lift** (HomeHero.astro): init ~314–330 · lazy/reduced-motion/IntersectionObserver ~466–491 · opacity cross-fade CSS ~946–973. Secondary precedents: `NetworkDiagram.astro` (`data-armed` only when JS runs → the no-JS render is the finished state) · `islands/MermaidDiagram.astro` (`<noscript><pre>` fallback) · `BaseLayout.astro` (`html.no-js` class you can style against).

## 3. Constraint checklist — every gate/CSP/perf the build MUST pass

| # | Constraint | What it demands of the demo |
|---|-----------|------------------------------|
| **gate-4 axe (BOTH themes)** — *the sharpest* | A bare `<video>` trips `video-caption` (WCAG 2.0 A) → RED. | Use an **asciinema/`<pre>` player** (no `<video>` → clean), **or** a muted `<video aria-hidden="true">` **non-focusable** (the ASCII poster carries the semantics), **or** ship a `<track kind="captions">`. Any control needs an accessible name (mirror `aria-label="Copy install command"`); overlaid-control contrast AA in both themes. |
| **gate-11** | `/` must have exactly **one** visible `img.hero-stage-img`. | The demo poster **must NOT** use class `hero-stage-img` (a second one → count 2 → RED). Use a distinct class; never `display:none` the hero image. |
| **gate-10** | No render-blocking external `<script src>` in `<head>`. | Player JS must be **Astro-bundled (deferred module)** or **inline-without-`src`**. **No CDN `<script src>`.** |
| **gate-9** | No overflow 320–1440. | Width-contain the media: `max-width:100%; width:100%; box-sizing:border-box` (like the `.hero-install` pill). |
| **gate-12** | Install-truth verbatim + no legacy strings on `/`, `/get-started/`. | Any on-page command text (poster/caption) stays **single-sourced from `install_truth.json`** (`one_liner`/`commands.*`); avoid legacy forms (`Agentic-DNA.git`, `~/lattice`, `LatticeProtocol/adna`, …). The `.cast`/`.webm` is **not** frame-scanned — only rendered DOM text. |
| **gate-23** | `.hero-lead` phrases intact + NetworkDiagram no-JS SVG survives. | Don't touch `.hero-lead`; don't break the §1 no-JS SVG. |
| **CSP** (`site/vercel.json`: `default-src 'self'`; `script-src 'self' 'unsafe-inline'`; `connect-src 'self'`; **no `media-src`**) | Everything self-hosted. | Put `.cast`/`.webm`/`.gif` under **`site/public/demo/`** (same-origin). **No CDN.** `data:`/`blob:` media are **BLOCKED**. ⚠ **`asciinema-player` v3 may spin a `blob:` Web Worker → BLOCKED** (no `worker-src` → falls to `default-src 'self'`). **Preflight** the chosen player build; if it needs a worker, pick a worker-free build / vendor a minimal player, **or** add a contained `worker-src 'self'` to `vercel.json` (document it in the commit). |
| **Home perf — MANUAL** | gate-19 (Lighthouse) covers only `/vaults/graph` + a concept page, **NOT `/`**. | Run **`npx lighthouse` on `/` FOREGROUND**, explicit `PATH` incl `/opt/homebrew/bin`, absolute `node`/`npx`, **one surface** (dodges the exit-127 node-shell flake). **Hold Perf ≥99 / CLS 0 / TBT 0** vs the M5.1a baseline (home was Perf 100 / CLS 0 / TBT 0 post-M5.1a; committed fixture `how/missions/artifacts/storyweave_p5_measure/lighthouse/lh_home.json` = mobile-simulate Perf 0.99 — pick a form factor, be consistent). **Kill any stray `:4321` preview first** (`lsof -ti:4321 \| xargs kill`). |

> **No bundle-size gate exists** (gate-10 only checks render-blocking) — but the effective JS cap **is** the manual home **TBT-0** budget. Keep player JS minimal and off the LCP path.

## 4. Recommended demo script (the "one real task")

*clone → `claude` → the agent orients from `STATE.md` → answers **"what's the state of this project?"*** (or does one small real action). ~30–60 s.

- **Why:** this **is** the onboarding value prop — instant orientation from the aDNA structure — and it's literally what the three `.step-demo` mocks depict (Structure / Orient / Execute; `STATE.md` is in step 01's tree, `CLAUDE.md` in step 02). The demo makes the static mock *move*.
- The dev-rel contributors refine the exact task / framing / which vault. Keep it **honest** (real output; no misrepresenting cut) — the Movement-Skeptic gates this.

## 5. Recording runbook — BOTH paths (pick the format live)

**Preflight (both):** a fresh clone of the public image — `git clone https://github.com/aDNA-Network/aDNA.git ~/adna-demo && cd ~/adna-demo` (the `install_truth` one-liner). Confirm the `claude` CLI is present + authed on the recording machine. Decide the exact task and do a dry run.

### Path A — `asciinema` cast  *(lightest; terminal-native; R4-consistent; no `<video>` a11y risk)*
1. `brew install asciinema` (if absent).
2. Record a **real** run: `asciinema rec site/public/demo/adna-demo.cast -c "cd ~/adna-demo && claude"` then drive the session — or `-c "claude -p 'what is the state of this project?'"` for a scripted headless capture. Keep it ~30–60 s.
3. Trim/curate (asciinema `--idle-time-limit` compresses dead air). **Never fabricate output.**
4. Player: add `asciinema-player` as an npm dep (Astro bundles it `'self'` → CSP-ok) **or** vendor a minimal player into `src/`. ⚠ **Preflight the `blob:` worker** (§3 CSP).
5. Mount + init: a `<div class="demo-player" data-demo-cast="/demo/adna-demo.cast">` with the ASCII mock as the **in-DOM poster/fallback**; init via `requestIdleCallback` + `IntersectionObserver` (mirror HomeHero); `prefers-reduced-motion` → don't autoplay, show the poster.
6. Verify **TBT 0** (the `.cast` is tiny; player JS is the weight).

### Path B — muted `<video>`  *(richest real-TUI; CSP-clean; no player dependency)*
1. Screen-record a **real** Claude Code TUI session (QuickTime, or `ffmpeg -f avfoundation`). Real, no misrepresenting cut.
2. Optimize: `ffmpeg -i raw.mov -an -vf "scale=…" -c:v libvpx-vp9 -b:v <low> site/public/demo/adna-demo.webm` (**`-an` = muted**, short, low-bitrate; add an mp4 fallback if needed). Generate a **poster still** (a frame, or the ASCII mock rasterized via the `site/scripts/generate-og-images.mjs` `@resvg` precedent).
3. Markup inside the `.step-demo` shell: `<video class="demo-video" muted playsinline loading="lazy" preload="none" poster="/demo/adna-demo-poster.png" aria-hidden="true"><source src="/demo/adna-demo.webm" type="video/webm"></video>` — **`aria-hidden` decorative** (ASCII `<pre>` carries semantics) → dodges gate-4 `video-caption`. Play-on-visible (IntersectionObserver) or a click-to-play control (accessible name); `prefers-reduced-motion` → poster only.
4. Verify the asset weight fits the home budget (target a few hundred KB max; then measure home Perf/CLS/TBT).

### Common to both
- **Reserve the box** (`aspect-ratio` on the `.step-demo` frame) so the lazy swap never shifts layout (**CLS 0**).
- Keep the demo **below the LCP element** (the hero image/title stay LCP).
- **Never autoplay-with-sound.** Muted autoplay-on-visible is acceptable; reduced-motion halts it to the poster.

## 6. Turnkey build steps

1. **`site/src/data/home.ts`** — add an optional field to `HomeStep` (e.g. `demoCast?: string` / `demoVideo?: string`) **or** a single section-level demo prop. Home-only.
2. **`site/src/pages/index.astro`** — the demo player as the **"How it Works" section lead** (before/around the steps loop ~155–164); the `.step-demo` shell (scoped CSS ~420–472) becomes the poster frame. Prefer a **new `site/src/components/sections/DemoPlayer.astro`** used only in `index.astro` → home-only by construction.
3. **`site/src/pages/get-started.astro`** — drop the player after the intro `<p>` (~line 35), or wrap the `$ claude` interview `<pre>` (~69–76) as the poster.
4. **Asset(s)** in `site/public/demo/`.
5. Player dep **bundled, not CDN**; run the **CSP worker preflight** (§3).
6. **Reduced-motion + IntersectionObserver + `requestIdleCallback`** init (mirror HomeHero).

## 7. Verification (the in-person build's ship-gate)

- Kill stray `:4321` (`lsof -ti:4321 | xargs kill`), then `npx astro build` → `npm run test:gates` **GREEN** (esp. **gate-4 axe-0 BOTH themes**, gate-9/10/11/12/23).
- **T0 headless** before/after (`scripts/visual_capture.mjs --axe`, both themes).
- **Manual home Lighthouse** (foreground, one surface, PATH hygiene): **Perf ≥99 / CLS 0 / TBT 0**.
- **`/network` + `/commons` zero rendered-diff** (diff `dist/`).
- **Ranker ≥ 4.0** (Newcomer + Adopter + **Movement-Skeptic** — the Skeptic gates the demo's honesty).
- **Operator ship-gate** → deploy (`npx astro build` → `VERCEL_TOKEN=$SS_VERCEL_TOKEN vercel --prebuilt --prod`, **redact the token**) → live T0 re-capture.
- Then **M5.1c** (R4/R5 adjacents) can ride; **M5.2** craft follows; campaign exit = **capstone ranker ≥ 4.95**.

## 8. Open decisions for the in-person session

- **Format** — Path A (`asciinema`) vs Path B (muted `<video>`). *Rosetta's lean:* **asciinema** — lightest for the hard perf budget, terminal-native (R4-consistent), no `<video>` a11y risk; **but** muted-video shows the richer real TUI. Decide with the dev-rel contributors **after** the CSP worker preflight (§3).
- **The exact task** the demo shows (§4 recommends the `STATE.md` orientation).
- **Who records**, on what machine.

## Provenance & links

- R1 = durable doctrine: [[front_page_doctrine]] §10 (ratified at the O3 gate, 2026-07-12).
- Format de-risk evidence: [[_reference_set]] §Install-forward synthesis (the 6-exemplar pass).
- Mission: [[mission_p5_1_onboarding]] (O4 / M5.1b). Re-plan: [[p5_replan]] §M5.1b.
- Instrument doctrine: [[doctrine_visual_inspection]] (headless-first, `scripts/visual_capture.mjs`).
