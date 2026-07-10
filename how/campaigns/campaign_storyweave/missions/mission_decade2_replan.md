---
plan_id: mission_decade2_replan
type: plan
title: "Storyweave Decade-2 (P3–P5) re-planning gate — measure → focused review → re-plan → author P3"
campaign: campaign_storyweave
phase: "Decade-2 re-plan (pre-P3)"
owner: stanley
status: completed   # Decade-2 re-plan + P3 ratified 2026-07-09; AAR at end
mission_class: planning
executor_tier: opus
token_budget_estimated: "~50–80 kT (medium): live-site measure (headless capture + Lighthouse + axe) + a focused review of the conversion/docs surfaces + backlog reconciliation + author one phase mission. Judgment-heavy (review + authoring) → opus; no build, no mechanical sweep."
created: 2026-07-09
updated: 2026-07-09
last_edited_by: agent_rosetta
tags: [plan, storyweave, decade2, replan, measure, review, p3, planning]
---

# Mission: Storyweave Decade-2 (P3–P5) re-planning gate

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_storyweave/CLAUDE.md`. This is a **PLANNING mission** — measure the live site, focus-review the Decade-2 surfaces, re-plan the P3–P5 arc, author the P3 mission, and stop at an operator ratification gate. **Zero `site/` edits; nothing deploys.**

## Why this mission exists

The charter uses a deliberate **ship-and-measure** framing and gates Decade-2 explicitly:
> *"Decade 1 — firmly committed = P0 · P0.5 · P1 · P2. Decade 2 — provisional, re-planned after Decade 1 deploys + is measured = P3 · P4 · P5. Improvements ship live per phase, not at the end."*
> *"Decade 1 (P0–P2) ships + is measured **before** Decade 2 (P3–P5) is re-planned."*

**Decade-1 is fully shipped + LIVE** on adna.network (P0–P2 + the P1.5/P1.6 hero; verified 2026-07-08 — 313 gates green · Lighthouse `/` Perf 1.00 · LCP 489ms · CLS 0.000 · axe-0). This mission is the re-planning gate that precedes any Decade-2 build. **Operator depth-pick: "Measure + focused review"** (charter-prescribed; moderate cost — not a full O1–O8 repeat, not a blind trust-the-backlog).

## Where we are (state at authoring, 2026-07-09)

- Decade-1 live; no active build. The Decade-2 phases are already **specified** in the charter (Phases & Missions, P3/P4/P5) and the backlog is already sequenced (**B6–B13** in `how/missions/artifacts/storyweave_review/o6_synthesis_backlog.md`). So this pass is **reconcile + confirm + author**, not a from-scratch re-derivation.
- **Held Decade-2 follow-ups from P1.6** (mission AAR): (1) per-vault deep-links on hero node-click (currently → `/vaults`); (2) cross-surface graph-language cohesion — apply the orb+arc language to `/network` + the home `NetworkDiagram` (Axis 4); (3) the T1/T3 comps stay as a tier-decision record (no action). Fold (1)+(2) into the re-plan; (3) is archival.

## Decade-2 backlog (the raw material — from o6 + the charter)

| B | Item (condensed) | Sev/Imp/Eff | Charter phase |
|---|---|---|---|
| **B6** | Registry actionability — one-line purpose/card · search/filter · adopt/publish rail · reconcile `/adopters` archetype→proof | ★★★/★★/M | **P3** (M3.1) |
| **B7** | Onboarding hardening — get-started overflow (desktop+mobile) · buried prereq → Step 0 · bridge to north-star | ★★/★★/L | **P3** (M3.2) |
| **B10** | Wire the on-ramps — community ladder→actions · use-cases "start like X"+outcomes · commons non-dev "follow along" · N-pillar payoff on home §1 | ★★/★★/L | **P3** (M3.2) |
| **B8** | Docs IA + de-jargon — what-is-adna (reframe/−35%/sticky TOC/inline gloss) · `/reference` (lead-with-spec + version stamp EV6 · group by genre) · `/learn` (reconcile navs · mobile reflow · ordered path) · EV7 `/compliance`→named regime | ★★/★★/M | **P4** (M4.1+M4.2) |
| **B9** | Craft + excerpt sweep — truncation defects · hero letterbox · typos · card-grid mobile reflow | ★★/★/L | **P5** (M5.1) |
| **B11** | Design-system hardening — `/design-system` page · kill hardcoded hex · harmonize card tiers · font-weight discipline · image-palette build check | ★/★/M | **P5** (M5.1) |
| **B12** | A11y + perf + reach — real axe remediation (incl. EV4 vault-detail 3× ≈40 pages) · CLS/perf budget · OG imagery · i18n + low-bandwidth posture (plan) · site legal/privacy notice | ★★/★/M–H | **P5** (M5.2) |
| **B13** | Deferred long-tail (dossier §3) — A-08 nav-span · A-13 problem redundancy · A-17 educator rubric · A-18 node-operator path · A-19 SPDX | ★/★/L–M | **P5** (M5.2, folded) |

## Objectives (gate with the operator at O5)

| # | Objective | Output | Gate |
|---|-----------|--------|------|
| **O0** | Orient — read charter + governance + o6 backlog + P1.6 AAR; open session + this mission; confirm the planning→build boundary | shared understanding + session/mission files | — |
| **O1** | **Measure live Decade-1** — run the T0 headless harness (`scripts/visual_capture.mjs` + `viewports.json`, desktop+mobile) + a Lighthouse pass + `--axe` against **live adna.network** across the Decade-2 surfaces (`/` · `/about` · `/network` · `/commons` · `/vaults` · 2× `/vaults/[slug]` · `/get-started` · `/community` · `/use-cases` · `/what-is-adna` · `/reference` · `/learn`). Record CWV + axe counts per surface | `artifacts/storyweave_decade2_measure/` (captures + a measured-baseline note) | — |
| **O2** | **Focused Decade-2 review** — walk the conversion + docs surfaces (the ones the first red-team reached its verdict *without opening*) against the persona/skeptic + register lens (`skill_reference_inspection`; `scripts/reading_level.mjs` for the P4 de-jargon read). Which B6–B13 items still hold? what changed / was incidentally fixed in Decade-1? what's new? | a review-delta note (in the measure dir) | — |
| **O3** | **Refresh backlog + re-plan the P3–P5 arc** — reconcile B6–B13 with O1/O2; fold the 2 held P1.6 follow-ups; re-confirm P3/P4/P5 boundaries + exit gates; adjust severity/scope where the live evidence moved | `decade2_replan.md` (the re-planned arc; P4/P5 stay provisional) | — |
| **O4** | **Author the P3 mission** — `mission_p3_actionability.md` (`status: proposed`): M3.1 registry actionability (B6) + M3.2 onboarding + on-ramps (B7/B10); DoD · per-phase ranker gate (≥4.0) · III-cycle + `site/` gate-suite plan · ship-per-phase deploy cadence · `token_budget_estimated` · `executor_tier` | the ratifiable P3 mission | — |
| **O5** | **Operator ratification gate** — surface the re-planned Decade-2 arc + the P3 mission for sign-off (`skill_create_iss`, or AskUserQuestion if lighter fits). **STOP — the build is a separate, later session, only after ratification** | ratified (or revised) Decade-2 plan | ⛩ operator |

## Constraints & standing-order compliance

- **Planning→build boundary (campaign convention 4):** `site/` edits happen only inside a *ratified* build mission. This mission produces **zero `site/` diff** — verify `git status` on `site/` stays clean throughout. If a `site/` change appears, stop: scope leaked.
- **Instrument = headless T0 harness** (`scripts/visual_capture.mjs` + `--axe` + Lighthouse), run **from the repo root** (known resolver quirk) per `[[doctrine_visual_inspection]]` — **never assume Chrome**. Every visual finding cites a screenshot.
- **Register guardrail:** warm · calm · honest (~55/45). The remedy is *more proof + more honesty*, never hype/invented people/inflated community. Preserve the SS-Ghibli identity + radical-honesty voice.
- **Scope boundaries (route, don't block):** data-currency → Hestia (Home.aDNA); deploy-layer perf/BP → Vitruvius (WebForge.aDNA); defer full i18n + the social layer (Venus horizon). Staged coord memos, never silent cross-vault writes (Rule 10).
- **Git:** local-first, explicit-path staging, `pgrep -x git` guard, push operator-gated (SO-11).
- **AAR at mission close** (SO#5); operator gate at O5 (SO#1); token budget declared above (SO#11).

## Definition of done

A **ratifiable Decade-2 plan**: (a) a measured live-Decade-1 baseline (CWV + axe per surface, screenshot-cited); (b) a focused review-delta confirming which B6–B13 items hold + what's new; (c) `decade2_replan.md` — the reconciled P3–P5 arc (P4/P5 provisional); (d) `mission_p3_actionability.md` at `status: proposed`; (e) surfaced at an operator ratification gate. **No `site/` edits, no deploy, no P3 execution** — those follow ratification, in a fresh session.

## AAR (2026-07-09 — re-plan ratified, P3 authorized)

- **Worked:** the measure-before-re-plan gate earned its keep. One live headless pass (14 surfaces × 2 vp × 2 themes + `--axe`) confirmed the o6 backlog **verbatim** at the conversion surfaces the first red-team never opened — and surfaced two scope-movers no desk-review would have. Measure → focused review → re-plan → P3 authored → operator-ratified, all one session, on the charter-prescribed depth.
- **Didn't:** no per-surface Lighthouse/CWV sweep — deferred to P5 (the harness gives status/load/axe/console; a full perf budget is P5/B12's job, not a re-plan blocker). Known, intentional gap.
- **Finding:** the two highest-leverage P3 items are cheaper than the backlog assumed. **(1)** "one-line purpose per card" is **rendering an existing field** (`headline_mission` in `vaults.json`), not authoring 68 strings. **(2)** EV4/B12's "vault-detail 3× ≈40 pages" is **one nested-`<main>` bug in two components**, both themes — not ~120 violations. Measurement, not assumption, found both.
- **Change:** folded the axe fix + the P1.6 hero deep-links into **P3/M3.1** (was P5); downgraded **B7** (onboarding prereq already surfaced, no mobile overflow); ruled the `/use-cases`+`/adopters` honesty posture **up front** (A = label-as-illustrative) so P3 needs no story-sourcing.
- **Follow-up:** execute [[mission_p3_actionability]] from O0 in a fresh session; re-plan **P4/P5** after P3 deploys + is measured (ship-and-measure); the 3 axe rules are named for M5.2's residual re-measure. **Token budget:** est 50–80 kT; actual ~mid-high (screenshot reads the main cost) — on-budget, no > 2× drift.
