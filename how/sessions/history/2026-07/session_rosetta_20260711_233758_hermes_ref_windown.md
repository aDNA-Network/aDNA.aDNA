---
type: session
session_id: session_rosetta_20260711_233758_hermes_ref_windown
user: rosetta
started: 2026-07-11T23:37:58
completed: 2026-07-11T23:50:00
status: completed
tier: 1
intent: "Storyweave wind-down: review the Nous Hermes agent landing page as an onboarding/install-UX reference for adna.network; capture it into the campaign's reference machinery; fold an onboarding demo-as-proof + install thread into P5 as a prioritized candidate; wind down the working context + set the next-session prompt; recommend a model. Planning/reference/docs only — no site/ code, no deploy."
files_created:
  - how/campaigns/campaign_storyweave/artifacts/onboarding_references/_reference_set.md
  - how/campaigns/campaign_storyweave/artifacts/onboarding_references/synthesis_onboarding_guidance.md
  - how/campaigns/campaign_storyweave/artifacts/onboarding_references/hermes_capture/ (headless frames — local evidence)
files_modified:
  - what/exemplars/sites/site_hermes.md (onboarding-UX lens pointer)
  - how/campaigns/campaign_storyweave/p4p5_replan.md (§Phase 5 candidate thread)
  - STATE.md (⏭ QUEUED block + updated: line)
tags: [session, storyweave, reference, hermes, onboarding, p5, wind-down]
---

# Session — Storyweave wind-down + Hermes onboarding reference

**Campaign:** [[campaign_storyweave]] (active; **P4 CLOSED**, P5 = provisional). **Persona:** Rosetta.
**Not a build session** — no `site/` code, no gates, no deploy. Reference-capture + planning + wind-down.

## Activity Log
- 23:38 — Reviewed `hermes-agent.nousresearch.com` (operator reference: usage video + direct install). WebFetch (structure/install copy) + **headless capture** `scripts/visual_capture.mjs` (desktop+mobile, dark) — the capture resolved the WebFetch video gap: the "video of usage" is a large **"HERMES DESKTOP — BETA PREVIEW"** product panel (agent drafting release notes → committing → opening a PR); install is **hero-level** (button + `curl … | bash` one-liner). Frames: `onboarding_references/hermes_capture/` (local).
- 23:42 — Mapped the gap: adna.network has **no video/GIF** (only static ASCII mocks) + its one-liner install lives **only in `/get-started`**. The demo-as-proof idea is already **doctrine** ([[front_page_doctrine]] "one demo") but was **never built** — net-new P5 candidate, not new invention.
- 23:45 — Wrote the campaign-scoped reference set + synthesis ([[synthesis_onboarding_guidance]], 5 provenance-tagged candidate rules); pointered the durable [[site_hermes]]; folded an **Onboarding demo-as-proof + install** candidate into [[p4p5_replan]] §Phase 5 with CWV/no-JS/honesty guardrails.
- 23:49 — STATE + memory updated; session closed. Model rec = **opus** for the next (P5 re-plan) session.

## SITREP
- **Completed.** Hermes reviewed (headless-confirmed) + captured into the reference machinery; onboarding demo/install thread folded into P5 as a prioritized candidate; STATE + memory + durable exemplar updated. Model recommendation delivered.
- **In progress.** None.
- **Next up.** **Storyweave P5 re-plan** (a fresh session) — the charter's *measure-before-re-plan* gate: run a live headless measure of the shipped P4 surfaces, fold in this Hermes onboarding reference + the P4 measure, then re-plan + ratify P5 (which now leads with the demo-as-proof + hero-install thread). **Model = opus.** Do NOT auto-advance into building P5.
- **Blockers.** None. (The untracked Exchange→Rosetta conformance-spec coord memo from the prior session is still parked — operator-held, not this session's concern.)
- **Files touched.** See frontmatter. No `site/` code.

## Next Session Prompt

Storyweave P4 (Docs IA) is CLOSED + live; P5 is the next phase but stays **provisional** pending the charter's **measure-before-re-plan** gate. **Do this next, on Opus:** (1) run a live headless measure of the shipped P4 surfaces against adna.network — T0 `scripts/visual_capture.mjs --axe` (+ `scripts/p3_interactions.mjs` if any P4 interaction needs it) + Lighthouse — to confirm P4 held (perf/axe) and capture the current onboarding/home baseline; (2) fold in the **Hermes onboarding reference** already captured this session — `how/campaigns/campaign_storyweave/artifacts/onboarding_references/{_reference_set.md, synthesis_onboarding_guidance.md}` + the §Phase 5 candidate in `p4p5_replan.md` — whose two priority rules are **R1 a real demo-as-proof screencast** (agent navigating a vault, replacing the static ASCII mocks) and **R2 hero-level install prominence** (surface the single-sourced `install_truth.json` one-liner + copy-button on the home hero); (3) **re-plan P5** from the measure + the reference, deciding the mission breakdown (R1+R2 likely lead an onboarding increment; M5.1 craft/B9/B11 + M5.2 hold-budget/OG/i18n-plan/legal remain), and author it for operator ratification — **planning only, do NOT build**. Guardrails a demo video must respect: CWV budget (lazy-load + poster + no autoplay-sound, hold `/` Perf 1.00), no-JS/a11y baseline, and a REAL recording (honesty). Read `p4p5_replan.md` + the two onboarding-reference files first. Operator gates ship + push (SO-11) as always.
