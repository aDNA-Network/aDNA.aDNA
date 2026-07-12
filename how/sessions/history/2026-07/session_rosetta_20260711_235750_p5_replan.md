---
type: session
session_id: session_rosetta_20260711_235750_p5_replan
user: rosetta
started: 2026-07-11T23:57:50
completed: 2026-07-12T00:22:00
status: completed
tier: 1
intent: "Storyweave P5 re-plan — the charter's measure-before-re-plan gate. (1) Live headless measure of the shipped P4 surfaces + onboarding/home baseline against adna.network (T0 visual_capture --axe + T1 p3_interactions + Lighthouse); (2) fold in the captured Hermes onboarding reference (R1 demo-as-proof + R2 hero-install) + the P4 measure; (3) author the ratifiable P5 re-plan + surface the operator ratification gate. PLANNING ONLY — no site/ code, no deploy, no build. Model = opus."
files_created:
  - how/campaigns/campaign_storyweave/missions/mission_p5_replan.md
  - how/campaigns/campaign_storyweave/p5_replan.md
  - how/missions/artifacts/storyweave_p5_measure/measure_summary.md
  - how/missions/artifacts/storyweave_p5_measure/ (capture_report.json + lighthouse/lh_home.json + 24 PNGs — PNGs local)
files_modified:
  - STATE.md (frontmatter running-log + ⏭ QUEUED banner)
  - how/campaigns/campaign_storyweave/p4p5_replan.md (§Phase 5 → forward-pointer to p5_replan)
  - how/campaigns/campaign_storyweave/artifacts/onboarding_references/synthesis_onboarding_guidance.md (P5-gate outcome annotation)
tags: [session, storyweave, decade2, p5, replan, measure, gate]
---

# Session — Storyweave P5 re-plan (measure-before-re-plan gate)

**Campaign:** [[campaign_storyweave]] (active; **P4 CLOSED + live**, P5 = provisional capstone). **Persona:** Rosetta.
**Not a build session** — no `site/` code, no gates-as-CI, no deploy. Measure + fold + re-plan authoring + operator gate. Picks up the baton from [[session_rosetta_20260711_233758_hermes_ref_windown|the wind-down session]].

## Plan (this session)
- **O0** — session + `mission_p5_replan.md` (this file's mission). Git verified clean (0 unpushed; HEAD == origin/main == `66a6e30`).
- **O1** — live headless measure: `scripts/visual_capture.mjs --axe` (home · `/get-started` · P4 docs-IA surfaces) + `scripts/p3_interactions.mjs` + Lighthouse → `scripts/lh_summarize.mjs`, `--base https://adna.network`. Confirm P4 held (axe-0 both themes) + capture onboarding/home baseline.
- **O2** — fold Hermes R1–R5 + the measure into P5 scope; record the durable-doctrine sub-decision.
- **O3** — author the ratifiable P5 re-plan (`p5_replan.md`): onboarding increment (R1/R2 lead) + M5.1 craft/design-system + M5.2 a11y/perf/reach.
- **O4** — operator ratification gate (measure-before-re-plan). Do NOT auto-advance into building P5.
- **O5** — AAR + STATE + memory + session → history.

## Activity Log
- 23:58 — Reconciled git-HEAD vs memory: the `66a6e30` "wind-down" is a *session* wind-down that folded the Hermes onboarding candidate into P5 — **campaign active, P5 the open capstone**. Verified clean tree (0 unpushed). Harness smoke-test green (Node 24.3, Playwright+axe OK, adna.network HTTP 200).
- 00:05 — **O1 measure.** T0 `visual_capture --axe` (6 surfaces ×2vp ×2themes): all **axe-0**, 0 console err, loads <1s; **P4 held** (`/learn` 798/0h2→2526/5h2, `what-is-adna` 8492→6411, `/reference` spec-led). T1 `p3_interactions` **21/21**. Lighthouse home **99/CLS0/TBT0** (foreground w/ explicit PATH; background LH + 2 surfaces hit the node-shell flake → deferred). Evidence + `measure_summary.md` → `storyweave_p5_measure/`.
- 00:14 — **O2/O3.** Confirmed the onboarding gap live (no demo; hero has no install). Authored [[p5_replan]] — capstone: M5.1 onboarding (R2/R3 first, R1 gated) · M5.2 craft · M5.3 a11y/perf/reach (de-risked); exit ranker ≥4.95.
- 00:20 — **O4 ratified.** Operator (AskUserQuestion gate): **ratify as authored** + **gate R1 behind a ≥6-exemplar pass**. Stamped `p5_replan` `accepted` §7.7; [[mission_p5_replan]] COMPLETED+AAR; STATE + p4p5_replan + synthesis annotated.

## SITREP
- **Completed.** The measure-before-re-plan gate, one session, planning-only (zero `site/` edits). Measured live (T0 6-surf axe-0 / P4 held · T1 21/21 · home LH 99/CLS0/TBT0 → [[measure_summary]]). Authored + **ratified** the P5 capstone re-plan ([[p5_replan]] `accepted`); [[mission_p5_replan]] COMPLETED+AAR. STATE + source docs updated. Local commit; **nothing pushed** (SO-11).
- **In progress.** None.
- **Next up.** **Author `mission_p5_1_onboarding`** (a fresh session) — the P5 **build** begins there, M5.1a first (R2 hero-install + R3 MIT eyebrow, single-sourced). **R1 (M5.1b) is gated** behind a ≥6-exemplar install-forward reference pass (Val Town·Raycast·Bun·Vercel·Astro, via `skill_reference_inspection`) before any demo-asset build. M5.2 craft + M5.3 a11y/perf/reach follow. Ship-and-measure per increment; capstone ranker ≥4.95 graduates the campaign.
- **Blockers.** None. (The node-shell PATH flake blocked fresh LH on 2/3 surfaces — non-blocking; P3 baseline + T0 loads <1s cover them. Reliable LH path noted in the AAR.)
- **Files touched.** See frontmatter. No `site/` code.

## Next Session Prompt

Storyweave P5 (the capstone) is **ratified** ([[p5_replan]], `accepted` 2026-07-12) and P4 is verified live-held. **Do this next, on Opus:** author **`mission_p5_1_onboarding`** (a P5 BUILD mission, `template_campaign_mission`) and build **M5.1a** — surface the single-sourced `install_truth.json` one-liner + a copy-button in the home hero (`site/src/components/sections/HomeHero.astro`, reusing `TryInClaudeCode.astro`; **never hardcode** — gate-12) and add an "Open standard · MIT" eyebrow single-sourced from `standard.ts` `STANDARD_LICENSE` (already a home stat). Keep `Get Started` as the secondary CTA. **Do NOT build R1 (the demo screencast) yet** — it is gated behind a lightweight ≥6-exemplar install-forward reference pass (Val Town·Raycast·Bun·Vercel·Astro via `skill_reference_inspection`) to de-risk the format + promote the candidate rules → durable doctrine. Honor the campaign guardrails: `npm run test:gates` green + the Lighthouse budget (home **CLS 0 / TBT 0 / Perf ≥99** — R2/R3 are static so CLS-safe) + warm·calm·honest register + the planning→build boundary (ship behind an operator gate; push operator-gated SO-11). Read `p5_replan.md` + `measure_summary.md` first. Residuals (non-blocking): untracked P4 evidence, the parked Exchange→Rosetta coord memo, a candidate upstream `.prose`-table a11y idea, Hestia data-currency (`zeta.aDNA` purpose line).
