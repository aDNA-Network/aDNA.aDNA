---
type: measure
mission: mission_p4_docs_ia
increment: M4.2
phase: P4
created: 2026-07-11
last_edited_by: agent_rosetta
grounded_in: how/missions/artifacts/storyweave_p3_measure/measure_and_review.md
tags: [measure, storyweave, p4, m42, docs, ia, evidence]
---

# M4.2 measure — `/reference` + `/learn` IA + nav reconcile + `/compliance` regime bridge

**Instrument:** headless T0 harness (`scripts/visual_capture.mjs --axe`, `@axe-core/playwright`, live Lighthouse 13.4.0), per [[doctrine_visual_inspection]] — no Chrome, no login.

> **Evidence note.** The metrics record `m42_capture/capture_report.json` is committed. The raw PNG captures (`m42_capture/*.png`, ~14 MB) and the raw Lighthouse JSONs (`lighthouse/lh_*.json`, ~2 MB) are kept **local-only** (reproducible via `visual_capture.mjs` + `lighthouse` against the preview server, matching the gate-19 `site/evidence/` local-archive convention). All numbers below are transcribed here + in the report JSON.

## What shipped (O3)

| Item | File(s) | Result |
|------|---------|--------|
| `/learn` → ordered path | `site/src/pages/learn/index.astro` | 4-card hub → Start here · 1·Understand · 2·Practice · 3·Compare · Where to next (+ sticky TOC) |
| `/reference` → lead-with-spec + version stamp | `site/src/pages/reference/index.astro` | "The specification" lead callout + `Standard v2.5` (from `STANDARD_VERSION`) |
| Group `/reference` by genre + single-source order | `site/src/data/reference-ia.ts` (NEW), `navigation.ts` | Specification / Rationale & guides / Governance & quality / Craft; index + sidebar share one list |
| 8-vs-10 drift resolved | `reference-ia.ts` → sidebar | the 2 orphans (Writing Guidelines, Visual Identity v3) now surfaced under **Craft** |
| Reconcile the two docs-shell navs | `navigation.ts` (`topNav`), `Header.astro` | header single-sources `topNav`; **"More ▾"** discloses Reference/Glossary/Guides/For-you |
| `/compliance` → named-regime bridge (EV7) | `compliance/index.astro`, `data/compliance.ts` | honest caveat + SOC 2 / ISO 27001 / EU AI Act mapping table |
| Mobile reflow | (design) | More panel `position:absolute`; hamburger carries all 11 links |

## Before → after (structure + density)

| Surface | Before (P3 measure) | After (M4.2, T0 `bodyLen`/`h2count`) | Read |
|---------|--------------------|--------------------------------------|------|
| `/learn` | 798 chars · **0 h2** (near-empty hub) | 2287 chars · **5 h2** | density *up by design* — a near-empty hub became an ordered, signposted path (wayfinding, not prose bloat) |
| `/reference` | 2482 chars · **1 h2** | 2695 chars · **5 h2** | lead-with-spec + 4 genre sections; +213 chars for genre blurbs, +4 h2 of structure |
| `/compliance` | (not a P3-measured surface) | 8153 chars · **9 h2** | +1 section (named-regime bridge) with honest caveat + 3×3 mapping table |

> The `/learn` density **increase** is the intended transformation for M4.2 (its job was to *add an ordered path*, not trim — the trim job was M4.1 on `/learn/what-is-adna`). Every added line is a short orientation sentence or a card description that moves a newcomer forward.

## Gate + a11y + perf (the O4 ship-gate evidence)

- **`npm run test:gates`: 313/313 PASS** (run twice — once after the build, once after the `/compliance` a11y fix). gate-13 (nav-surfacing) green: Commons stays a flat desktop `<a>`, the row fits at 1024, "For you" ordering preserved. gate-9 (responsive 320–1440), gate-11 (heroes on `/learn` + `/reference`), gate-15/16 (jsonLD/proofLinks/meta), gate-19 (LH fixtures — guarded routes untouched), gate-20 (claim-trace source-side) all green.
- **Full-axe (T0, complete ruleset incl. best-practice): 0 violations** across **5 surfaces × 2 viewports × 2 themes = 20 runs**. (The gates' WCAG-AA-filtered axe was green from the first pass; the T0 full ruleset surfaced **1 finding the gates do not check** — see below.)
- **Lighthouse (desktop, live): 100 / 100 / 100 / 100** (perf / a11y / BP / SEO) on `/learn`, `/reference`, `/compliance`; LCP 0.3–0.5 s, CLS 0, TBT 0 ms. **Perf budget held** (no JS island added — the More menu + all disclosures are native `<details>` + CSS).

### The full-axe catch (verify-before-ship, again)

The gate suite passed 313/313, but the T0 full-axe (which the gates' WCAG-AA tag filter excludes) caught **`scrollable-region-focusable` [serious] on the `/compliance` regime table at 375px, both themes**. Root cause: the global `.prose` stylesheet gives wide tables `overflow-x: auto` (the *table itself* is the scroll container, `scrollWidth 206 > clientWidth 186`), and a scrollable region must be keyboard-reachable. Fix: `tabindex="0"` + `aria-label` on the table (matching the `<pre>` precedent in `DocumentationLayout.astro:88-90`) + a `:focus-visible` ring — no `role` override, so table semantics are preserved. Re-verified: **0 violations, gates still 313/313.** *(Lesson echo: the gate suite is necessary but not sufficient; the T0 full-axe pass is what makes the a11y claim honest.)*

## Nav reconciliation — functional verification

- **Desktop:** `.nav-more` disclosure opens (native `<details>`, no JS); panel overlays without widening the row; links = `["Reference","Glossary","Guides","For you"]`; "More" carries the active state on `/reference`. Screenshot: `m42_capture/more-panel-clip__desktop__dark.png`.
- **Mobile:** hamburger renders all 11 links (7 flat + "More" separator + the 4 doc-only entries). Screenshot: `m42_capture/header-mobile-open__mobile.png`.
- **Single-source:** `Header.astro` now renders `topNav` (utils/navigation.ts); the drift-prone inline array is gone. Add a group to the model → it appears in the header with zero header edits.

## Persona ranker (O4 gate: ≥ 4.0; Educator + Framework-Docs + Newcomer must pass)

| Lens | Score | Rationale |
|------|-------|-----------|
| **Newcomer** | **4.4** | `/learn` now says "New to aDNA? Work through this path top to bottom" and leads the single next action (What is aDNA?); the old undifferentiated 4-card hub is gone. `/reference` leads "start with the specification — when in doubt, it is authoritative." |
| **Educator** | **4.3** | The ordered path *is* a curriculum (overview → concepts → tutorials → compare); `/reference` genre grouping makes the doc set teachable (spec vs rationale vs governance vs craft). |
| **Framework-Docs** | **4.3** | `/reference` leads with spec + a `v2.5` currency stamp; the 8-vs-10 drift is resolved; the header now exposes the full doc IA (Glossary/Guides/For-you via More), single-sourced with the sidebar; `/compliance` bridges to named regimes honestly. |

**Average 4.33 — all three ≥ 4.0. PASS.** Movement-Skeptic: every copy change is proof/clarity, not hype; the `/compliance` caveat is maximally honest ("not a certified product… certification is granted by accredited assessors"). **Cognitive-a11y: lifts from "C+" → ~B/B+** (ordered path + two new sticky TOCs + genre grouping + reconciled/complete nav + preserved breadcrumbs).

## Verdict

O3 (build) complete; all constraints met. **Awaiting the O4 ⛩ operator ship-gate** before `npx astro build` → Vercel deploy. Push is separately operator-gated (SO-11).
