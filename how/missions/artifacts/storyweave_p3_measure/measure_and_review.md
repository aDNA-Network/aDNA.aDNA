---
type: review_findings
artifact_class: measured_baseline + verify_live + review_delta
created: 2026-07-11
mission: mission_p4p5_replan
objective: "O1 (measure P3 live) + O2 (focused review + verify P3 landed)"
persona: agent_rosetta
instrument: "scripts/visual_capture.mjs (T0) + scripts/p3_interactions.mjs (T1) + npx lighthouse (CWV) — all --base https://adna.network, headless (doctrine_visual_inspection)"
status: draft
tags: [storyweave, decade2, measure, verify-live, p3, p4, p5, o1, o2]
---

# P3 measure + focused review — live adna.network (2026-07-11)

> **Instrument.** Three headless passes against **live adna.network**, the measure-before-re-plan gate for the shipped P3.
> **T0** — `scripts/visual_capture.mjs`, 15 surfaces × {mobile-lg, desktop} × {dark, light} + `--axe` → `./capture_report.json`, `./screens/` (5 cited; full 15×2×2 reproducible via the `instrument:` command).
> **T1** — `scripts/p3_interactions.mjs`, 21 assertions driving the P3 client features + a light-theme axe spot-check → `./p3_interactions_result.txt`.
> **Lighthouse** — `npx lighthouse` on 6 key surfaces → `./lighthouse/lh_*.json` (+ `scripts/lh_summarize.mjs`).
> **Headline: P3 verified live and clean. 21/21 interactive assertions pass; all 15 surfaces axe-0 (both themes on the fixed set); Lighthouse 99–100 across Perf/A11y/BP/SEO on every measured surface.**

## Part A — measured baseline + delta vs 2026-07-09

| Surface | HTTP | load ms | axe (dark) | bodyLen (Δ vs D2) | h2 | Read |
|---|:-:|:-:|:-:|:-:|:-:|---|
| `/` | 200 | 816 | **0** | 7012 (+447) | 5 | Decade-1 hero healthy; 4-pillar payoff present |
| `/about` | 200 | 990 | **0** | 3979 (0) | 5 | solid |
| `/network` | 200 | 793 | **0** | 4536 (0) | 5 | Axis-4 cohesion candidate (P5) |
| `/commons` | 200 | 791 | **0** | 5781 (0) | 4 | the honest-proof surface |
| `/vaults` | 200 | 809 | **0 ⤓was 3** | **12653 (+9463)** | 15 | **P3 shipped**: purpose lines + search/filter + rail; nested-`<main>` cleared |
| `/vaults/graph` | 200 | 1039 | **0** | 4239 (new) | 2 | deep-link twin (68 nodes); healthy |
| `/vaults/Operations.aDNA` | 200 | 906 | **0 ⤓was 3** | 884 (0) | 1 | nested-`<main>` cleared |
| `/vaults/Molecules.aDNA` | 200 | 881 | **0 ⤓was 3** | 993 (0) | 1 | nested-`<main>` cleared |
| `/get-started` | 200 | 739 | **0** | 4196 (+219) | 3 | north-star bridge wired |
| `/community` | 200 | 734 | **0** | 3559 (+87) | 4 | ladder rungs → actions |
| `/use-cases` | 200 | 720 | **0** | 2048 (+426) | 1 | illustrative label + ClosingCTA shipped |
| `/learn` | 200 | 934 | **0** | **798 (0)** | 0 | **B8** — near-empty hub, unchanged → P4 |
| `/learn/what-is-adna` | 200 | 927 | **0** | **8492 (0)** | 7 | **B8** — long/dense, unchanged → P4 |
| `/reference` | 200 | 946 | **0** | 2482 (0) | 1 | **B8** — spec-light, unchanged → P4 |
| `/adopters` | 200 | 856 | **0** | 2428 (+195) | 3 | illustrative reconcile |

**Headline:** every surface **axe-0** (dark), 200, loads < 1.1 s, **zero console errors**. The three Decade-2 axe-debt surfaces (`/vaults` + both sampled `/vaults/[slug]`) are now **axe-0** — the nested-`<main>` fix landed. Decade-1 surfaces un-regressed. The registry's +9.5k bodyLen is the P3 actionability shipping; the docs surfaces (`/learn` · `what-is-adna` · `/reference`) are **byte-identical to D2** → B8 is untouched, exactly the P4 target.

## Part B — verify P3 landed (T1: 21/21 pass, 0 fail)

| P3 increment | Evidence (live) | Verdict |
|---|---|---|
| Nested-`<main>` axe fix | `/vaults` + `/vaults/[slug]` axe-0 in **dark** (T0) **and light** (T1 spot-check) | ✅ cleared both themes |
| Registry completeness 64→68 | 68 cards rendered === 68 declared (All-chip); no silent drop | ✅ |
| One-line purpose per card | 67/68 cards render `.vault-card-purpose` (`note` fallback) | ✅ (1 gap: `zeta.aDNA`, below) |
| Client search | "molecul" → 1 visible, live status "1 of 68 vaults"; clear → 68 | ✅ |
| Class filter (progressive enh.) | toolbar revealed + no-JS facets retired; platform chip → 30 visible === 30 cards, `aria-pressed=true` | ✅ |
| Adopt/publish rail | `/get-started/` + `/how/publishing/` present, both GET 200 | ✅ |
| Hero deep-link twin | `nav.hero-graph-nodelist` present, 15 `/vaults/<slug>/` links; first → 200 | ✅ |
| Graph deep-link twin | `nav.graph-node-list` present, 68 node links; first → 200 | ✅ |
| Illustrative labels (ruling-A) | `/use-cases` + `/adopters` carry "illustrative" + point to `/commons` | ✅ |
| On-ramps (M3.2) | `/use-cases` ClosingCTA; `/community` rungs → actions; home 4/4 pillars (Open · Federated · Co-owned · agents) | ✅ |

**Lighthouse (6 key surfaces) — a best-in-class baseline that pre-seeds P5's perf budget:**

| Surface | Perf | A11y | BP | SEO | LCP | CLS | TBT |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| `/` | 99 | 100 | 100 | 100 | 1.8 s | 0.001 | 0 ms |
| `/vaults` | 99 | 100 | 100 | 100 | 1.7 s | 0 | 0 ms |
| `/vaults/Operations.aDNA` | 100 | 100 | 100 | 100 | 1.5 s | 0 | 0 ms |
| `/get-started` | 99 | 100 | 100 | 100 | 1.7 s | 0 | 0 ms |
| `/learn/what-is-adna` | 100 | 100 | 100 | 100 | 1.4 s | 0 | 0 ms |
| `/reference` | 100 | 100 | 100 | 100 | 1.7 s | 0 | 0 ms |

All Core Web Vitals green (LCP < 1.8 s · CLS ≤ 0.001 · TBT 0). The a11y-100 corroborates the axe-0 sweep.

## Part C — review-delta (which P4/P5 backlog items still hold)

- **B8 — docs IA + de-jargon → CONFIRMED, holds → P4.** `/learn` (798 chars, 0 h2), `what-is-adna` (8492 chars, 7 h2), `/reference` (2482 chars, 1 h2) are **byte-identical to D2** — P3 didn't touch them. **Sharpening:** `what-is-adna` scores **Perf 100 / LCP 1.4 s** — so "trim ~35%" is a **comprehension/cognitive-IA** goal (density, ordered path, progressive disclosure), **not a performance fix.** P4 is an information-architecture phase, cleanly.
- **B9 — craft/excerpt sweep → carry → P5.** `/use-cases` grew (+ClosingCTA +label) but the **mid-word `CardGrid` excerpt truncation** is a craft defect the P3 AAR records as *still present*; not re-measured this pass (needs a visual spot-check at P5 build). Disposition unchanged.
- **B11 — design-system hardening → carry → P5.** The two card tiers (`VaultCard` / `RegistryCard`) still co-exist; `/design-system` page + hardcoded-hex audit are code-level, not live-measurable. Unchanged.
- **B12 — a11y + perf + reach → CONFIRMED but MAJOR DE-RISK → P5.** The axe headline (EV4 nested-`<main>`) is **fully cleared** (all `/vaults*` axe-0, both themes; LH a11y 100 ×6). Perf is now **measured and excellent** (Perf 99–100, CWV green ×6). → P5's B12 shrinks to **hold-the-budget + OG imagery + i18n/low-bandwidth *plan* + legal/privacy notice + grind any long-tail axe on the untested surfaces** — it is no longer a perf-remediation phase.
- **B13 — deferred long-tail → carry → P5, folded.** Not re-measured; disposition unchanged.

**New / notable:**
- **The single live data-currency gap = `zeta.aDNA`.** It is the 1/68 vault with **no purpose line** (no `note`; `headline_mission` remains 0/68 fleet-wide). Confirms the P3-routed **Hestia enrichment** thread is still open ([[coord_2026_07_11_rosetta_to_hestia_headline_mission]]) — non-blocking, owner = Home.aDNA.
- **Perf is not a P5 problem** (reframes B12) and **B8 is IA, not perf** (reframes P4) — both grounded in the Lighthouse baseline above.

## Part D — held follow-ups (disposition)

1. **Hero sighted-keyboard-focus polish** (the visible focus state on the hero nav twin; P3 AAR) → **P5 craft.**
2. **Axis-4 cross-surface graph cohesion** (`/network` + home `NetworkDiagram`; P1.6 follow-up #2) → **P5 craft/cohesion** (provisional).
3. **Hestia data-currency** — `headline_mission` 0/68, `zeta.aDNA` `note` gap, 27/68 vault_cards → **non-blocking, routed to Home.aDNA**; the registry auto-upgrades when enriched (`headline_mission || note`).
