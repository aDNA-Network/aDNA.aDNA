---
plan_id: mission_p5_2_craft_design_system
type: plan
title: "P5.2 — Craft + design-system: excerpt/craft sweep (B9) + design-system hardening (B11)"
campaign: campaign_storyweave
phase: P5
decade: 2
owner: stanley
status: active        # O0–O4 ✅ built + committed local (b3a396d·5b9d0c3·81d74dd·542a989); O4 folded→M5.3; O5 verification GREEN (359 gates, axe-0 both, home Perf 100/CLS0/TBT0) → AT THE OPERATOR SHIP-GATE; O6 (AAR+baton) follows the ship
mission_class: build
executor_tier: sonnet     # mechanical craft/typo/hex/reflow = sonnet-class; the /design-system page design + the canvas/Mermaid palette single-sourcing = opus judgment (run under opus)
token_budget_estimated: "~60–90 kT (B9 sweep + B11 hardening + /design-system page + 2 new gates + folded items + gate/T0/home-Lighthouse + ship-gate) across ~1–2 sessions"
created: 2026-07-12
last_edited_by: agent_rosetta
grounded_in: how/campaigns/campaign_storyweave/p5_replan.md
tags: [plan, storyweave, decade2, p5, craft, design-system, b9, b11, active]
---

# Mission: P5.2 — Craft + design-system

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_storyweave/CLAUDE.md`. Decade-2, phase 5 (the **capstone**). **This is a BUILD mission** — `site/` edits happen here, shipped live behind an operator gate. Sequenced **home-safe first (B9), then the design-system hardening (B11), then the new page**. Start at **O0** (done — this spec). Grounding: [[p5_replan]] §M5.2 · [[o6_synthesis_backlog]] **B9** + **B11**.

## Why this mission exists

M5.1a shipped the onboarding hero (install one-liner + MIT eyebrow); M5.1b (the demo screencast) is **operator-deferred to the in-person dev-rel session (week of 2026-07-13)**. The operator advanced **M5.2** — the highest-value fully solo-able work — which directly clears the capstone exit criterion **"craft debt cleared."** M5.2 fixes the visible craft debt the review found (excerpt/truncation defects, copy artifacts, a mobile-reflow clip, letterboxed hero art) and hardens the design system (kill scattered hex, harmonize the two card tiers, tokenize font-weights, a `/design-system` reference page), **each fix locked behind a new durable gate**. It carries two folded held follow-ups (cross-surface graph cohesion; hero keyboard-focus). Register guardrail unchanged: **warm · calm · honest** — the remedy is *more polish and more honesty*, never hype; preserve the SS-Ghibli / Tokyo-Night identity.

## Where we are (verified on disk 2026-07-12 — mine + the Plan-agent B9 diagnosis)

**Governance / gate reality:**
- **`gate-14` is NOT a hex/token gate.** It is a single-source **repo/publisher-drift** lint (`gate-14-single-source.spec.ts`: forbids `aDNA-Network/aDNA.aDNA`, `github.com/LatticeProtocol`). The p5_replan's *"kill hardcoded hex (gate-14 token discipline)"* label is a **misnomer**; M5.1a confirmed *"no automated hex gate → verify by hand."* → **hardcoded hex has no gate today** → author **gate-25-token-discipline** (this mission).
- **`gate-18-categorical-color`** is narrow: it lints only `src/data/vaults_graph.mmd` `classDef` fills for ≤2 accent hues. It cannot host a general hex check. Keep it green if Mermaid fills are touched.
- **Gate naming**: this mission adds **gate-24-copy-craft** (B9) + **gate-25-token-discipline** (B11), and **extends gate-9-responsive** (adds the missing index pages + a per-card `scrollWidth` assertion).

**B9 — craft defects (Plan-agent diagnosis, exact):**
- **Excerpt truncation.** Frontmatter `description` fields are the first paragraph hard-cut to ~140 chars + **ASCII `...`**, baked into `.mdx`, consumed verbatim (`CardGrid` does **not** clamp — no `-webkit-line-clamp` in the repo) AND pushed into `<meta name="description">`/`og:`/`twitter:` via `SEOHead.astro:42/51/59`. **51** descriptions end in ASCII `...`; ~11 index pages map `doc.data.description → CardGrid`. use-cases = 6/6 mid-word; reference = 5 mid-word + 1 raw-dash = **6/10**. The correct pattern already exists: `src/data/glossary.ts:27-38` `firstSentence()` (sentence-first, word-boundary fallback), used only by the glossary index today.
- **Copy 2a — "before you back you"** is a **loose transcription**, not a literal string (pickaxe-confirmed absent). Maps to `commons.astro:148-149` **"…covers what to check / before you share back."** (ambiguous — share what, to whom).
- **Copy 2b — raw-markdown dashes**: `content/reference/tool-setup.mdx:3` is a flattened Markdown list (` - ` bullets render as literal dashes). `content/reference/design-rationale.mdx:3` ends `…A third piece —...` (em-dash + `...` artifact).
- **Hero letterbox is an ASSET defect, not CSS.** `.doc-hero` CSS is correct (`DocumentationLayout.astro:184-193` — `aspect-ratio:16/9; object-fit:cover`); all hero PNGs are 1408×792 (16:9). The **black bars are baked into the pixel art** on `hero_reference/patterns/how/get_started.png` (4 of 5 doc-heroes; `hero_learn.png` is clean). `gate-11` passes them (bars inside the 16:9 canvas → aspect check blind). Fix = **re-cut the 4 PNGs full-bleed**, not a CSS crop. ⚠ **Spot-check `hero_adna_helix.png` (the home hero)** — a home re-cut needs a home-Lighthouse re-measure.
- **Card-grid mobile reflow.** `CardGrid.astro:38-44` `cols-2 = minmax(280px,1fr)`. On a doc page at 320px the inner width is 320 − `var(--space-6)`×2 (24×2) = **272px < 280px track** → the card overflows and is **clipped** by `.doc-content{overflow-x:hidden}`. Visible on `/learn`, `/use-cases`, `/reference`. Fix = `minmax(min(280px,100%),1fr)` (CLS-neutral, CSS-only). **Home does NOT import `CardGrid`** (uses `RegistryCard` + inline grids) → home-safe.

**B11 — design-system debt:**
- **Hex is two problems.** (a) **CSS-declaration hex** (badges/scrim/borders) → tokenize to `var(--color-*)`. (b) **Runtime-JS palettes** that can't use `var()`: `MermaidDiagram.astro` `themeVariables` (14 hex — `#24283b`/`#7dcfff`/`#9d7cd8`…) + `HomeHero.astro` `<canvas>` `fillStyle`/gradient stops (12 hex — mostly canvas-legit) → single-source into a **palette-constants module** (`src/styles/palette.ts`) mirroring `tokens.css`; document as the canonical hex mirror. **gate-25 scopes to CSS `<style>` hex + allowlists `palette.ts`.**
- **Hex hotspots** (`rg -c`): `org-context-graphs.astro` **84** (⚠ the flagged **orphan**, B1 — allowlist pending its B1 disposition; do not sink effort) · `MermaidDiagram.astro` 14 · `HomeHero.astro` 12 · `global.css` 9 · `index.astro` 8 · `vaults/graph.astro` 5. `tokens.css` + `branding.css` = legit token defs (exclude).
- **VaultCard ↔ RegistryCard** (`src/components/sections/`): `VaultCard` uses `padding: 1rem` (**hardcoded**) + `--color-link` (blue) hover + no shadow/lift; `RegistryCard` is fully tokenized `--space-*` + `--color-primary` hover + `--shadow-md` + `translateY(-2px)`. **Status pills already harmonized** (shared AA-safe `color-mix`). Density difference is deliberate — align tokens/hover, keep density.
- **Font-weights not tokenized** (hardcoded `700`/`600`/`500`) → add `--font-weight-{regular,medium,semibold,bold}` to `tokens.css`.
- **Tokens available** (`tokens.css`): `--font-{display,body,mono}` · `--text-xs..4xl` (fluid clamp) · `--space-1..32` · `--radius-{sm,md,lg,xl,full}` · `--transition-{fast,base,slow}` · `--color-*` (hsl). Exactly the `/design-system` page's content.

## The scope (ship-per-increment, [[p5_replan]] §M5.2)

### B9 — Craft + excerpt sweep *(home-safe; sonnet)*
Word-safe excerpts (new `src/utils/excerpt.ts`, generalizing `firstSentence()`; Unicode `…` never ASCII `...`) applied at the ~11 `CardGrid` index pages + data-cleanup of the named `.mdx` descriptions · `CardGrid` `min()` reflow fix + gate-9 extension · `commons.astro` clause rewrite (Movement-Skeptic) · `tool-setup.mdx` + `design-rationale.mdx` data rewrite · **gate-24-copy-craft** (assert no ASCII `...`, no ` - ` list-run, no literal `**` in card text + `<meta>`) · hero-letterbox PNG re-cut (asset; spot-check home hero).

### B11 — Design-system hardening *(sonnet; /design-system = opus)*
CSS hex → tokens · `palette.ts` single-source for canvas/Mermaid · VaultCard/RegistryCard harmonize · `--font-weight-*` tokens · **gate-25-token-discipline** · a `/design-system` page (BaseLayout, footer-linked; own axe-0 pass) · lightweight image-palette check (script/plan).

### Folded held follow-ups *(smaller; deferrable to M5.3 if budget tight)*
Axis-4 graph cohesion (`/network` + home `NetworkDiagram` shared token treatment; P1.6 #2) · hero sighted-keyboard-focus polish (visible focus ring on `HomeHero` `nav.hero-graph-nodelist`; keep gate-13/`p3_interactions` H1 green; P3 AAR held).

## Objectives (phased — operator gates as marked)

| # | Objective | Output | Gate |
|---|-----------|--------|------|
| **O0** | Author this mission; re-orient (plan ratified via ExitPlanMode; B9 Plan-agent diagnosis folded) | mission spec | — |
| **O1** | **B9 craft sweep** — `excerpt()` util + apply on index pages; `CardGrid` `min()` reflow + gate-9 extension; `commons`/`tool-setup`/`design-rationale` copy fixes; **gate-24-copy-craft**; hero-letterbox re-cut (+ home-hero spot-check) | the craft increment | — |
| **O2** | **B11 hardening** — CSS hex→tokens; `palette.ts` single-source; VaultCard/RegistryCard harmonize; `--font-weight-*`; **gate-25-token-discipline** | the design-system increment | — |
| **O3** | **/design-system page** (opus) + image-palette check | `/design-system` live-buildable | — |
| **O4** | **Folded** — Axis-4 graph cohesion + hero keyboard-focus (or defer → M5.3) | folded items | — |
| **O5** | **Gate + ship** — `npx astro build` → `npm run test:gates` GREEN (all + gate-24 + gate-25 + extended gate-9; axe-0 both themes incl `/design-system`; gate-18 ≤2 hues if Mermaid touched; gate-9 no overflow; gate-11/10/23 if HomeHero touched) · T0 both themes before/after · **home Lighthouse held Perf ≥99/CLS0/TBT0** (mandatory if HomeHero touched) · `/network`+`/commons` zero rendered-diff · ranker ≥4.0 → operator ship-gate → deploy → live T0 | M5.2 live | ⛩ operator |
| **O6** | Increment AAR (SO#5) + STATE baton → M5.3 (a11y/perf/reach) | M5.2 close | — |

## Constraints & gates (honor; renegotiate only with operator sign-off)

- **Instrument = headless T0** (`scripts/visual_capture.mjs` + `--axe` + Lighthouse) from repo root per [[doctrine_visual_inspection]] — never assume Chrome; every visual claim screenshot-cited.
- **`site/` gate-suite** (`npx astro build` → `npm run test:gates`) green each deployable increment. ⚠ **Pre-gate: `lsof -ti:4321 | xargs kill`** (stale preview → false count, M5.1a AAR) + `pgrep -x git` guard.
- **Perf is MANUAL for home** — gate-19 covers only `/vaults/graph` + a concept page. Run `npx lighthouse` on `/` yourself (foreground, explicit `PATH` incl `/opt/homebrew/bin`, absolute `node`/`npx`, one surface — dodges exit-127 flake); hold **Perf ≥99 / CLS 0 / TBT 0** vs the M5.1a baseline. **Only strictly required if HomeHero/home art changes.**
- **Single-source + token discipline** — CSS colors from `--color-*`; canvas/Mermaid palettes from `palette.ts`; **never scatter hex**. **Additive-extension** — new props/pages optional, `/network`+`/commons` zero rendered-diff, never a fork.
- **Register:** warm · calm · honest (~55/45); the Movement-Skeptic gates every copy change. Preserve SS-Ghibli / Tokyo-Night — no palette drift.
- **Ship per increment** + operator ship-gate (SO#1); **deploy** `npx astro build` → `VERCEL_TOKEN=$SS_VERCEL_TOKEN vercel --prebuilt --prod` (redact) → live T0 re-capture.
- **Routed (non-blocking):** data-currency → Hestia; deploy-layer perf/BP → Vitruvius. Staged coord memos, never silent cross-vault writes.
- **Git:** local-first, explicit-path staging, `pgrep -x git` guard, gitleaks pre-push, **push operator-gated** (SO-11).
- **AAR at increment close** (SO#5); token budget above (SO#11); per-increment ranker ≥ 4.0 → **capstone ≥ 4.95**.

## Definition of done

The visible craft debt is cleared — no mid-word/ASCII-`...` excerpts, no raw-markdown artifacts in card text or meta, no clipped card at 320px, no letterboxed doc-hero — and the design system is hardened: CSS hex tokenized, canvas/Mermaid palettes single-sourced, the two card tiers harmonized, font-weights tokenized, and a `/design-system` reference page live. Both fixes are **locked behind new gates** (gate-24 copy-craft, gate-25 token-discipline) + the extended gate-9. All **axe-0 both themes**, **home Perf ≥99/CLS0/TBT0 held**, `/network`+`/commons` unchanged. Ships live behind the operator ship-gate; per-increment ranker ≥ 4.0 building to the **capstone ≥ 4.95**.

## Progress (2026-07-12)

**O0–O4 ✅ built + locally committed; O5 verification GREEN; at the operator ship-gate.**

- **O0** (`b3a396d`) — mission authored.
- **O1 — B9 craft sweep** (`5b9d0c3`): `excerpt()` util (word-boundary-only, idempotent on clean text — `AGENTS.md`/`3.8+` internal dots preserved) applied in `CardGrid` → all 11 index pages' card excerpts word-safe (Unicode `…`, never ASCII `...`; use-cases 6/6 + reference mid-word cuts cleaned, visually confirmed). `CardGrid` `minmax(min(track,100%),1fr)` → no 320px card clip. Copy: commons "share back" clause clarified; `tool-setup.mdx` list→prose; `design-rationale.mdx` truncation artifact removed. **gate-24-copy-craft** (11 index pages) + **gate-9 extended** (5 index pages + per-card overflow check catching the `overflow-x:hidden`-masked clip).
- **O2 — B11 hardening** (`81d74dd`): `--font-weight-*` tokens (literal 700/600/500 → tokens, zero visual change). VaultCard harmonized (padding `1rem`→`var(--space-4)`; hover `--color-link`→`--color-primary`; density kept). `palette.ts` single-sources the Mermaid Tokyo-Night palette (both themes verified byte-identical via T0). **gate-25-token-discipline** inventories + locks every deliberate hardcoded hex behind a dated allowlist. *Finding: residual hex is all deliberate (terminal chrome, macOS traffic lights, AA-tuned status/btn, hero scrim, B1 orphan) — a non-regression fence, not a drift-cleanup.*
- **O3 — /design-system page** (`542a989`): token-driven living reference (swatches · type scale · fonts + weights · spacing · radius/shadow · component samples); footer-linked; noindex; passes its own gate-25 + gate-4 both themes; self-referential (SO#8). **Latent AA bug FIXED**: CardGrid badges `updated/deprecated/experimental` used raw `--color-info/warning/accent` as text on a 15% tint → 1.9–2.45:1 in light mode (FAIL); the 2 index pages that wire `badge:` render these live → darkened toward `--color-text` via the proven status-pill pattern → AA both modes.
- **O4 — folded items → DEFERRED to M5.3**: both (Axis-4 graph cohesion; hero keyboard-focus) touch home/hero surfaces; deferring keeps M5.2 a clean home-safe increment and lets M5.3 (the home-touching a11y/perf mission) carry them under its home-Lighthouse gate.

**O5 verification (GREEN):** full `npm run test:gates` **359 passed** (315 M5.1a baseline + 44: gate-24, extended gate-9, gate-4 design-system ×2, gate-25). T0 headless both themes on `/use-cases · /reference · /vaults · /learn · /design-system · knowledge-graph` → **axe-0**. **Home Lighthouse Perf 100 / CLS 0 / TBT 0 / LCP 0.5s** (budget held; home structurally untouched — only +4 unused-on-home token lines + the global footer link). `/network` diff = the intended footer "Design system" link only.

> **Note on "zero rendered-diff":** unlike M5.1a's additive-optional-prop pattern, M5.2 intentionally changes **global** surfaces (footer link + token defs on every page + the badge AA fix on the 2 badge-wiring index pages). The verification is "no *unintended* diff," not byte-identical `/network`+`/commons`.

**Residuals (documented, non-blocking):** hero-letterbox PNG re-cut (asset work — baked-in bars on 4 doc-hero PNGs; needs the imagen pipeline / crop-rescale) · 51-file frontmatter meta regen (`scripts/transform-content.mjs` — cleans detail-page `<meta>` too) · HomeHero canvas/scrim palette single-source + stability-color token dedup (in the gate-25 allowlist) · image-palette build check (→ M5.3-adjacent).

## AAR (SO#5) — M5.2 close

_(appended at O6, after the operator ship-gate)_
