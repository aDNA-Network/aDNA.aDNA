---
type: session
session_id: session_2026-07-12_p5_1_onboarding_m5_1a
created: 2026-07-12
updated: 2026-07-12
status: completed
tier: 2
last_edited_by: agent_rosetta
campaign: campaign_storyweave
mission: mission_p5_1_onboarding
persona: Rosetta
machine: Dyrnwyn
token_budget_estimated: "~80–120 kT: author mission_p5_1_onboarding → build M5.1a (hero install pill + MIT eyebrow, single-sourced) into HomeHero.astro/index.astro → gates + T0/T1 + home Lighthouse → operator ship-gate (stop; deploy/push gated)"
executor_tier: opus
scope:
  directories:
    - site/src/components/sections/
    - site/src/pages/
    - site/tests/gates/
    - how/campaigns/campaign_storyweave/missions/
  files:
    - site/src/components/sections/HomeHero.astro
    - site/src/pages/index.astro
    - site/tests/gates/gate-12-install-truth.spec.ts
    - how/campaigns/campaign_storyweave/missions/mission_p5_1_onboarding.md
heartbeat: 2026-07-12T23:32:06Z
started: 2026-07-12T23:32:06Z
intent: "Operation Storyweave P5: author mission_p5_1_onboarding, then build + verify + ship-gate M5.1a (single-sourced hero install one-liner + 'Open standard · MIT' eyebrow on the home hero). M5.1b (R1 demo) + M5.1c deferred."
files_modified:
  - site/src/components/sections/HomeHero.astro
  - site/src/pages/index.astro
  - site/tests/gates/gate-12-install-truth.spec.ts
  - STATE.md
files_created:
  - how/campaigns/campaign_storyweave/missions/mission_p5_1_onboarding.md
completed:
  - Authored mission_p5_1_onboarding (M5.1 spec; R1–R5 + M5.1b ≥6-exemplar gate encoded)
  - Built M5.1a — hero install copy-pill (single-sourced) + "Open standard · MIT" eyebrow + gate-12 `/` extension
  - Verified 315/315 gates · T0 axe-0 · p3_interactions 21/21 · Lighthouse home 100/CLS0/TBT0 · /network+/commons zero-diff
  - Shipped + live-verified on adna.network (deploy dpl_72iABbW); operator GO at ship-gate
tags: [session, storyweave, p5, onboarding, m5_1a, install, eyebrow, build]
---

# Session — P5.1 onboarding (M5.1a: hero install one-liner + MIT eyebrow)

## Intent
Fresh BUILD session opened at the ratified P5 handoff ([[p5_replan]] `accepted` 2026-07-12; [[mission_p5_replan]] O4). Author [[mission_p5_1_onboarding]], then build the **ship-first, low-risk M5.1a** increment — surface the single-sourced `install_truth.json` one-liner + copy-button in the home hero and add an **"Open standard · MIT"** eyebrow single-sourced from `standard.ts` `STANDARD_LICENSE`. Verify through the full gate suite + T0/T1 headless + the manual home Lighthouse budget (Perf ≥99 / CLS 0 / TBT 0). **Stop at the operator ship-gate** — deploy + push are operator-gated (SO-11). **M5.1b (R1 demo-as-proof)** stays gated behind the ≥6-exemplar reference pass (its own future session); **M5.1c (adjacents)** deferred.

## Activity Log

- 16:32 — Session started; tree clean (only untracked pre-existing evidence PNGs), 0 unpushed. Plan ratified (plan mode) + scope confirmed (author + build M5.1a to ship-gate; M5.1c + R1 deferred).
- 16:40 — Mission authored (3 Explore agents mapped build target / gate-harness / mission-template first).
- 16:44 — M5.1a built (HomeHero props + eyebrow + install pill + copy script; index.astro wiring; gate-12 `/`).
- 16:55 — Verify: 315/315 gates (after killing a stale :4321 preview that first gave 169), T0 axe-0, p3 21/21, LH home 100/CLS0/TBT0; mobile pill text-align refined.
- 17:05 — Operator GO at ship-gate → deploy `dpl_72iABbW` → aliased adna.network 200, live-verified. Close artifacts written.

## SITREP

**Completed**: Authored [[mission_p5_1_onboarding]]; built + verified + **shipped M5.1a** (hero install one-liner copy-pill + "Open standard · MIT" eyebrow, both single-sourced; gate-12 extended to `/`); live on adna.network (`dpl_72iABbW`). 315/315 gates · axe-0 · LH home 100/CLS0/TBT0 · zero-diff on /network+/commons · ranker ≈4.3.
**In progress**: — (increment closed)
**Next up**: **O3** — the R1 ≥6-exemplar install-forward reference pass (Val Town·Raycast·Bun·Vercel·Astro + Hermes, via `skill_reference_inspection`) — a **separate session**; it gates M5.1b (demo-as-proof). Alternatively M5.1c adjacents or M5.2 craft at operator direction.
**Blockers**: none.
**Files touched**: HomeHero.astro · index.astro · gate-12-install-truth.spec.ts · mission_p5_1_onboarding.md (new) · STATE.md · this session.

## Next Session Prompt

Operation Storyweave P5 capstone — M5.1a (hero install one-liner + "Open standard · MIT" eyebrow) is **shipped + live** on adna.network ([[mission_p5_1_onboarding]] O0–O2 ✅, deploy `dpl_72iABbW`). The next increment is **O3 = the R1 gate**: run the **≥6-exemplar install-forward reference pass** (`skill_reference_inspection`) over **Val Town · Raycast · Bun · Vercel · Astro** (+ the existing Hermes exemplar = 6) — curate → inspect each to the fixed rubric (Tier-A fully populated, esp. `demo_as_proof` + install/hero treatment) → synthesize range+clustering → **promote R1–R5 candidate rules into durable [[front_page_doctrine]]** with provenance. This de-risks the M5.1b demo *format* (GIF vs asciinema cast vs muted-video) before any hero-asset is committed. Only after O3 clears does **M5.1b (the ~30–60s screencast)** build (hard perf/CLS gate + no-JS/a11y + real-recording, Movement-Skeptic). Read [[p5_replan]] §M5.1 + [[synthesis_onboarding_guidance]] first. Instrument headless (T0 `scripts/visual_capture.mjs`); persona = Rosetta; per-increment ranker ≥4.0 → capstone ≥4.95. GOTCHA: kill any stray `:4321` preview before a gate run (`lsof -ti:4321 | xargs kill`) — `reuseExistingServer` binds stale builds.
