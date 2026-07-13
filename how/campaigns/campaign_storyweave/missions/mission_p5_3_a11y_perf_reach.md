---
plan_id: mission_p5_3_a11y_perf_reach
type: plan
title: "P5.3 — A11y + perf + reach (DE-RISKED 'hold, don't fix') + the folded O4 items — the campaign capstone"
campaign: campaign_storyweave
phase: P5
decade: 2
owner: stanley
status: active     # ⛩ plan ratified via ExitPlanMode 2026-07-13 (operator: FULL scope + GRADUATE-at-M5.3-close; M5.1b/R1 = post-graduation follow-up). Build in progress.
mission_class: build
executor_tier: opus     # sonnet-class for OG-audit/legal-page/LH-sweep mechanics; opus for the i18n/low-bandwidth PLAN + the home-touching folded O4 (judgment under the home-Lighthouse gate) + the capstone ranker
token_budget_estimated: "~50–70 kT (folded O4 + gate-19 hold/sweep + OG audit + privacy page + i18n plan + long-tail axe + capstone verify/ship/graduate) across ~1–2 sessions"
created: 2026-07-13
last_edited_by: agent_rosetta
grounded_in: how/campaigns/campaign_storyweave/p5_replan.md   # §M5.3 (ratified 2026-07-12)
tags: [plan, storyweave, decade2, p5, capstone, a11y, perf, reach, graph-cohesion, active]
---

# Mission: P5.3 — A11y + perf + reach (the capstone)

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_storyweave/CLAUDE.md`. Decade-2, phase 5 (the **capstone**) — **the final mission of the final phase**. **This is a BUILD mission** — `site/` edits happen here, shipped live behind an operator gate. **DE-RISKED — "hold, don't fix"**: the live measure ([[measure_summary]]) showed a11y already 100 and perf tight-green, so this is *hold-budget + reach + two folded home-touching follow-ups*, not axe-remediation. Start at **O0** (done — this spec). Grounding: [[p5_replan]] §M5.3 + the [[mission_p5_2_craft_design_system]] AAR follow-ups.

## Why this mission exists

M5.1a shipped the onboarding hero; M5.2 cleared the visible craft debt + hardened the design system, and **deferred its two folded O4 items to M5.3** (both touch home/hero, so they belong under M5.3's home-Lighthouse gate). This mission closes the campaign: it **holds** the a11y/perf budget as a hard gate (the measure proved there is nothing to *fix*, only to *defend*), lands the two folded O4 items (visible hero keyboard-focus; cross-surface graph cohesion), and adds the deferred **reach** surfaces (OG-card coverage, a legal/privacy notice, an i18n/low-bandwidth *plan*). Its successful close at the **capstone ranker ≥ 4.95** graduates Operation Storyweave to `completed`.

**Operator ratification (2026-07-13, via the plan-mode AskUserQuestion gate):**
- **Full ratified scope** — folded O4 + perf-hold + all three reach surfaces + long-tail axe, in one mission.
- **Graduate at M5.3 close** — flip the campaign to `completed` at ranker ≥ 4.95; **M5.1b (the R1 demo screencast) is a post-graduation follow-up** (operator-deferred to the in-person dev-rel session; its budget-fit is pre-designed via lazy-load + poster + no-autoplay, so graduation does not wait on it). The exit gate's *"R1 included"* clause is satisfied *by design* and *re-verified live when R1 lands*.

Register guardrail unchanged: **warm · calm · honest** (~55/45) — more proof + more honesty, never hype; preserve the SS-Ghibli / Tokyo-Night identity.

## Where we are (verified on disk 2026-07-13)

**Baseline to hold (from the M5.2 close):** full `npm run test:gates` = **359 passed**; T0 headless **axe-0 both themes** on all measured surfaces; **home Lighthouse Perf 100 / CLS 0 / TBT 0 / LCP 0.5 s**; `/network`+`/commons` no unintended diff. This mission must not regress any of it.

**Folded O4 — exact on-disk state:**
- **O4a (hero keyboard-focus).** `HomeHero.astro` `.hero-graph-nodelist` (the SR/keyboard deep-link twin of the hero graph) is visually hidden and **revealed on `:focus-within`** as a bordered link panel (L992–1009). Its links (`.hero-graph-nodelist a`, L1014) carry only `color: var(--color-link)` + underline and lean on the **global `:focus-visible` ring** — there is **no dedicated, clearly-visible focus treatment on the revealed panel/links**. That polish is the fix. Keep `gate-13` + `scripts/p3_interactions.mjs` **H1** green.
- **O4b (graph cohesion).** `NetworkDiagram.astro` is **already the same fully-tokenized component** (`var(--color-primary/text)`; only the hub's white-on-primary label text is a deliberate `#ffffff`) rendered on **both** home §1 and `/network` band 1 → the P1.6 #2 "cross-surface cohesion" target is largely **structural-verify**. The broader story: **three** graph renderings with different node counts / visual languages — `NetworkDiagram` (6-node abstract), `hero_graph.svg` (15-node radial, HomeHero), `vaults_graph.svg` (68-node full, `/vaults/graph`) — all built from `vaults.json` by `scripts/build_graph_svg.mjs`. **Latent drift:** HomeHero's decorative `<canvas>` "living network" carries a **hardcoded** 15-node/14-edge array (~L334–351) that must stay in sync with the data-driven `hero_graph.svg`; `sync:graph` updates the SVG but not the canvas array. Under "hold, don't fix," this is **documented as a known constraint** (optionally a lightweight build-time guard), not re-architected.

**Perf (O3):** `gate-19-lighthouse-budget.spec.ts` is **fixture-based** — asserts LCP < 2500 / CLS < 0.1 / Perf ≥ 0.90 against committed JSON in `site/tests/gates/fixtures/` for **`/vaults/graph` + `/learn/concepts/knowledge-graph`** only. Home `/` perf is **manual** (held 100/CLS0/TBT0 at M5.2). Extend the fresh-LH sweep + fixtures to **`/get-started` + `/learn/what-is-adna`** (the node-shell PATH flake is dodged by running LH foreground, explicit `PATH` incl `/opt/homebrew/bin`, absolute `node`/`npx`, one surface).

**Reach — exact on-disk state:**
- **OG imagery (O4-reach) is ALREADY WIRED.** `SEOHead.astro` emits `og:image` + `twitter:image` + `twitter:card=summary_large_image` via an inline `selectOgImage(path)` resolver (L23–33) mapping paths to `public/images/og-*.png` (6 cards: `og-default/learn/how/reference/community/patterns`). → This objective is **audit coverage + verify render (1200×630) + fill gaps** for high-value surfaces (home / `/network` / `/vaults` / `/commons`) if they fall back to `og-default`, **not** build-from-scratch.
- **Analytics: NONE wired** (no `@vercel/analytics`/`speed-insights`/`gtag`/`plausible`/`fathom` in `package.json`) → the privacy notice states the **honest static / zero-tracking** posture (no cookies, no analytics, no personal-data collection). Verify again at build.
- **No `/privacy` (or legal) page exists**; a **`/security` page already exists** (footer-linked) — `/privacy` is its net-new sibling. `Footer.astro` has a clean `footer-links` nav (add `/privacy` there, mirroring M5.2's `/design-system` addition).

## The scope (ship-per-increment, [[p5_replan]] §M5.3)

### Folded O4 *(home-touching; opus judgment under the home-Lighthouse gate)*
Visible hero keyboard-focus ring on `.hero-graph-nodelist` (+ its revealed links) · cross-surface graph-cohesion verify (`/network` + home `NetworkDiagram`) + token alignment across the 3 renderings where cheap + **document the hero-canvas-vs-SVG hardcoded-data drift**.

### Perf hold *(sonnet; the "hold budget" spine)*
Keep `gate-19` a **hard gate**; extend the fresh-LH sweep + fixtures to `/get-started` + `/learn/what-is-adna`; re-confirm home LH (Perf ≥ 99 / CLS 0 / TBT 0) after any HomeHero touch.

### Reach *(sonnet; i18n plan = opus)*
OG-card coverage **audit + fill** · a `/privacy` legal/privacy notice (honest zero-tracking posture; **draft text surfaced for operator confirmation**) + footer link · an **i18n + low-bandwidth *plan* doc** (no site impl) · grind any long-tail axe on surfaces not yet swept (residual near-nil).

### Residual carries (optional; from the M5.2 AAR)
HomeHero canvas/scrim palette → `palette.ts` (gate-25 allowlist residual) · image-palette build check. *(Hero-letterbox PNG re-cut + 51-file frontmatter `<meta>` regen remain asset/imagen + script work — carry only if budget allows; else route forward.)*

## Objectives (phased — operator gate as marked)

| # | Objective | Output | Gate |
|---|-----------|--------|------|
| **O0** | Author this mission; capture the **"hold" baseline** (full `test:gates` = 359 · T0 axe both themes · home LH) | mission spec + baseline record | — |
| **O1** | **Folded O4a — hero keyboard-focus**: visible focus ring on `.hero-graph-nodelist` (+ revealed links); keep gate-13 / `p3_interactions` H1 green | the focus increment | — |
| **O2** | **Folded O4b — graph cohesion**: verify `/network`+home `NetworkDiagram` cohesion; align 3-rendering node/edge tokens where cheap; **document the canvas-vs-SVG drift** | the cohesion increment + a drift note | — |
| **O3** | **Perf hold** — keep gate-19 hard; extend LH sweep + fixtures to `/get-started` + `/learn/what-is-adna`; re-confirm home LH | extended gate-19 | — |
| **O4** | **Reach — OG audit + fill**: verify `selectOgImage` coverage + card render; fill gaps for home/network/vaults/commons if defaulting | OG coverage held | — |
| **O5** | **Reach — privacy notice + i18n plan**: `/privacy` page (zero-tracking; ⛩ text confirmed) + footer link + own axe-0/gate-4 pass; **i18n/low-bandwidth PLAN doc** (opus, no impl) | `/privacy` live-buildable + plan doc | ⛩ operator (notice text) |
| **O6** | **Long-tail axe + residual carries** — grind unswept-surface axe; fold HomeHero canvas/scrim palette → `palette.ts`; image-palette check | polish increment | — |
| **O7** | **Capstone verify + ship** — `npx astro build` → `npm run test:gates` GREEN (all + extended gate-19; axe-0 both themes incl `/privacy`) · T0 both themes before/after · **home LH held Perf ≥99/CLS0/TBT0** · `/network`+`/commons` no unintended diff · **capstone ranker ≥ 4.95** (`skill_decadal_aar` 4-lens) → operator ship-gate → deploy → live T0 | M5.3 live | ⛩ operator |
| **O8** | **Close + graduate** — M5.3 AAR (SO#5) + STATE baton + **campaign Completion Summary + Campaign AAR** + flip `campaign_storyweave` → `completed` + log M5.1b/R1 post-graduation follow-up + push (operator-gated) | campaign graduated | ⛩ operator (push) |

## Constraints & gates (honor; renegotiate only with operator sign-off)

- **Instrument = headless T0** (`scripts/visual_capture.mjs` + `--axe` + Lighthouse) from repo root per [[doctrine_visual_inspection]] — **never assume Chrome**; every visual claim screenshot-cited.
- **`site/` gate-suite** (`npx astro build` → `npm run test:gates`) green each deployable increment. ⚠ **Pre-gate: `lsof -ti:4321 | xargs kill`** (stale preview → false count, M5.1a AAR) + `pgrep -x git` guard.
- **Perf is MANUAL for home** — gate-19 covers only the fixture surfaces. Run `npx lighthouse` on `/` yourself (**foreground, explicit `PATH` incl `/opt/homebrew/bin`, absolute `node`/`npx`, one surface** — dodges the exit-127 flake); hold **Perf ≥ 99 / CLS 0 / TBT 0** vs the M5.2 baseline. **Mandatory whenever HomeHero/home art changes** (O1, O2, O6-palette).
- **Verify gates by ASSERTION, not label** (the M5.2 "gate-14 token-discipline" misnomer trap). A design-system-style showcase surface is a latent-bug detector.
- **Single-source + token discipline** — CSS colors from `--color-*`; canvas/Mermaid palettes from `palette.ts`; never scatter hex. **Additive-extension** — new pages/props optional; `/network`+`/commons` no unintended rendered-diff; never a fork.
- **Register:** warm · calm · honest (~55/45); the Movement-Skeptic gates every copy change **and the privacy-notice text**. Preserve SS-Ghibli / Tokyo-Night — no palette drift.
- **Ship** + operator ship-gate (SO#1); **deploy** `npx astro build` → `VERCEL_TOKEN=$SS_VERCEL_TOKEN vercel --prebuilt --prod` → live T0 re-capture. **Redact secrets with `${VAR:+SET}` only — never a `${VAR:-…}` fallback** (it echoes the value; bit the last two sessions).
- **Routed (non-blocking):** data-currency → Hestia (Home.aDNA); deploy-layer perf/BP → Vitruvius (WebForge.aDNA). Staged coord memos, never silent cross-vault writes.
- **Git:** local-first, explicit-path staging, `pgrep -x git` guard, gitleaks pre-push, **push operator-gated** (SO-11).
- **AAR at mission close** (SO#5); token budget above (SO#11); per-increment ranker ≥ 4.0 → **capstone ≥ 4.95**.

## Definition of done

The two folded O4 items land under a held home-Lighthouse gate (a visible hero focus ring; graph cohesion verified + the canvas-vs-SVG drift documented), `gate-19` holds as a hard budget with its sweep extended to `/get-started` + `/learn/what-is-adna`, and the three reach surfaces land (OG coverage audited + filled, an honest zero-tracking `/privacy` notice, an i18n/low-bandwidth plan doc). All **axe-0 both themes** (incl `/privacy`), **home Perf ≥99/CLS0/TBT0 held**, `/network`+`/commons` unchanged, full gate suite green. The **capstone ranker ≥ 4.95** flips `campaign_storyweave` to `completed` with a Completion Summary + Campaign AAR; **M5.1b/R1 is logged as a budget-pre-designed post-graduation follow-up.** Ships live behind the single operator ship-gate.

## Progress (2026-07-13)

**O0 ✅ — mission authored + hold baseline captured.**
- Spec authored (this file).
- **Baseline reproduced:** `npx astro build` clean (197 pages) → `npm run test:gates` = **359 passed** (1.6m) — environment matches M5.2's close exactly.
- **axe-0 both themes + home LH Perf 100/CLS0/TBT0** inherited from the M5.2 close (`50e1e7b`) — the working tree is byte-identical (git-verified: only untracked evidence PNGs differ), so those baselines hold by definition. Fresh axe + home-LH runs land at the O1+O2 home-touching increment close + O7 (capstone), where a regression would actually surface.

**O1 ✅ — folded O4a (hero keyboard-focus) built + verified.**
- Added `.hero-graph-nodelist a:focus-visible` in `HomeHero.astro` — the system focus treatment (`--color-primary` 2px outline + 2px offset + `radius-sm` + 4px `color-mix` box-shadow ring), matching `global.css .btn:focus-visible`. **Additive CSS only** — no markup/DOM change.
- **Verified 3 ways:** (1) computed style on the keyboard-focused link = `outline: 2px solid rgb(157,124,216)` + `box-shadow: 0 0 0 4px …/0.25` (both captures); (2) screenshot `o1_capture/hero_nodelist_focus__{dark,light}.png` shows a clear rounded ring on the focused "aDNA" link inside the revealed panel; (3) `p3_interactions.mjs` **H1 PASS** — nodelist present with 15 `/vaults/<slug>/` deep-links, first resolves 200.
- **Finding — the hero is always-dark by design.** HomeHero's `<section>` always carries `.dark` (L367: *"the home hero is dark-first … panel + tokens stay [dark]"*), so the nodelist panel renders with dark tokens in **both** page themes → the dark & light focus captures are **byte-identical, expectedly**. The ring's only render context is the dark hero ground, where `#9d7cd8` on `~#1a1b26` clears the 3:1 focus-indicator bar comfortably. No both-theme divergence to test for this component.

**O2 ✅ — folded O4b (graph cohesion) verified + drift documented.**
- **Cross-surface cohesion is structurally guaranteed.** `NetworkDiagram.astro` is invoked `<NetworkDiagram />` with no props on **both** home §1 (`index.astro:107`) and `/network` band 1 (`network.astro:73`) — one shared, fully-tokenized component. Captured both × both themes (`o2_capture/`): **identical** — home/dark ≡ network/dark (6 dots, 6 edges, labels `[Astro, III, RareHarness, wga, RareArchive, Home]`, `nd-dot` fill `#9d7cd8`); home/light ≡ network/light (`#6d4bb8`). Properly theme-adaptive; the P1.6 #2 target is met **with no change needed**.
- **The 3 graph renderings are intentionally distinct visual languages** — `NetworkDiagram` (6-node purple `--color-primary` hub-and-spoke = the abstract "federate around the core" marquee) vs the `build_graph_svg.mjs` outputs `hero_graph.svg` (15-node) + `vaults_graph.svg` (68-node), a neutral-chip + cyan-accent **literal** topology (≤2-hue gate-18 restraint). Homogenizing them would erase a deliberate rhetorical distinction → **held, not "fixed."**
- **Documented the canvas-vs-SVG drift** (the real latent item): HomeHero's decorative `<canvas>` carries a hardcoded 15-node/14-edge array (`N`/`E`, L334–351) parallel to the data-driven `hero_graph.svg`; `sync:graph` regenerates the SVG + deep-link nodelist but not the array. Added a `⚠ COHESION / DRIFT NOTE` code comment: severity is LOW (canvas is `aria-hidden` decorative; the SSR SVG + nodelist deep-links stay the authoritative data-driven layer) → document + hand-sync, with a post-capstone single-source follow-up (touches LCP-critical hero init, out of M5.3 scope).

**O1+O2 home-touching increment — verification GREEN (baseline held):**
- **axe-0 both themes** on home + `/network` (fresh T0, `o1o2_axe/capture_report.json`: `axeViolations: 0`, zero console errors, loads ~0.54 s).
- **home Lighthouse held Perf 100 / LCP 0.49 s / CLS 0 / TBT 0** — matches the M5.2 baseline exactly. ⚠ **Gotcha recorded: run home LH with `--preset=desktop`.** Default LH (mobile emulation + 4× CPU + slow-4G throttle) reproducibly gives Perf 97 / LCP 2.26 s — a **config artifact, not a regression** (3× stable). The campaign baseline + gate-19 fixtures are unthrottled/desktop (fixture perf score 1.0, LCP ~446 ms). Both O1/O2 changes are provably inert at initial paint (a `:focus-visible` rule never applies at load; a comment is stripped at build), consistent with the byte-identical desktop result.
