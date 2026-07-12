---
plan_id: mission_p5_replan
type: plan
title: "P4 measure → P5 re-plan (the measure-before-re-plan gate)"
campaign: campaign_storyweave
phase: "P4→P5 gate"
decade: 2
owner: stanley
status: completed          # ⛩ O4 RATIFIED 2026-07-12 — P5 accepted; onboarding leads, R1 gated behind ≥6-exemplar pass; measure + re-plan in one session
mission_class: planning        # measure + fold + re-plan authoring — NO site/ edits (planning→build boundary)
executor_tier: opus            # judgment-heavy: verify-live measure + onboarding-doctrine weigh + P5 re-plan authoring
token_budget_estimated: "~110 kT one session: T0 static +--axe + T1 interactive + Lighthouse measure → verify P4 held → fold Hermes R1–R5 → author the P5 re-plan → operator gate"
created: 2026-07-11
last_edited_by: agent_rosetta
grounded_in: how/campaigns/campaign_storyweave/artifacts/onboarding_references/synthesis_onboarding_guidance.md
tags: [plan, storyweave, decade2, measure, replan, p5, onboarding, gate]
---

# Mission: P4 measure → P5 re-plan

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_storyweave/CLAUDE.md`. This is the **charter's measure-before-re-plan gate**, one decade-turn on from [[mission_p4p5_replan]] — P4 (Docs IA) shipped + is live (M4.1 `8fe4eee` + M4.2 `a08fc79`); before P5 (the capstone) is authored for build, the *shipped* site is measured live and the provisional P5 arc is reconciled against the evidence + the operator-surfaced onboarding reference. **This is a PLANNING mission** — no `site/` edits, no deploy, no push. Ends at the O4 operator ratification gate.

## Why this mission exists

The charter gates each Decade-2 phase behind *"ship + measure before the next phase is re-planned."* P3 shipped + was measured → P4 authorized ([[mission_p4p5_replan]]). **P4 has now shipped + is live + closed** ([[mission_p4_docs_ia]]). P5 stands **provisional** ([[p4p5_replan]] §Phase 5), now carrying a **folded onboarding candidate** (R1 demo-as-proof + R2 hero-install) surfaced at the [[session_rosetta_20260711_233758_hermes_ref_windown|wind-down]] from an operator review of the Nous **Hermes agent** landing page. This mission measures the live post-P4 site, verifies P4 held, folds the onboarding reference + the measure into a finalized P5 scope, and **stops at the operator ratification gate.** It does not begin P5. *(Backlog: B9/B11 craft + P1.6/P3 held follow-ups → M5.1; B13 + hold-budget → M5.2; the Hermes onboarding candidate → a new onboarding increment.)*

## Objectives (planning — operator gate as marked)

| # | Objective | Output | Gate |
|---|-----------|--------|------|
| **O1** | **Measure P4 live** — T0 static (home · `/get-started` · the P4 docs-IA surfaces `/learn/what-is-adna`,`/reference`,`/learn`,`/compliance` · ×2 vp ×2 themes +`--axe`) → confirm **P4 held** (axe-0 both themes; `/learn`/`/reference` IA landed) + capture the **onboarding/home baseline** the R1/R2 increment changes against; T1 interactive (`p3_interactions.mjs` — the shipped registry/hero/TOC client features still behave); Lighthouse/CWV on key surfaces (hold-the-budget baseline for M5.2) | `capture_report.json` · `p3_interactions` result · `lh_*.json` + `lh_summarize` roll-up | — |
| **O2** | **Fold Hermes candidate + measure into P5** — weigh R1–R5 ([[synthesis_onboarding_guidance]]) against the live baseline; confirm the onboarding gap (no demo anywhere; install only in `/get-started`). **Record the durable-doctrine sub-decision:** keep R1/R2 on the current 1-exemplar candidate basis, **or** commission a ≥6-exemplar install-forward comparator set (`skill_reference_inspection`) before building | fold note (in the re-plan) | — |
| **O3** | **Author the P5 re-plan** — grounded in O1+O2; finalize the capstone arc: an **onboarding increment** (R1 screencast + R2 hero-install, R3–R5 adjacents) sequenced with **M5.1 craft/design-system** (B9/B11 + held follow-ups) + **M5.2 a11y/perf/reach** (hold-budget/OG/i18n-plan/legal); each item traced to a measured observation or a provenance-tagged rule; per-mission `token_budget` + `executor_tier`; exit gate **capstone ranker ≥ 4.95** | `p5_replan.md` (`status: proposed`) | — |
| **O4** | **Operator ratification gate** — present the re-plan (measure result · R1/R2 lead · durable-doctrine sub-choice · M5.1/M5.2 scope); on ratify → `accepted`, STATE baton advance, P5 build unlocks (a **separate** future session). **Do NOT auto-advance to P5 build.** | ratified arc | ⛩ operator |
| **O5** | Close + AAR (5-line); STATE update; memory; session → history | mission close | — |

## Constraints & gates (honor)

- **Instrument = headless T0/T1 + Lighthouse** (`scripts/visual_capture.mjs` + `scripts/p3_interactions.mjs` + `npx lighthouse` → `scripts/lh_summarize.mjs`), live `--base https://adna.network`, per [[doctrine_visual_inspection]] — **never assume Chrome**; every visual claim screenshot- or assertion-cited.
- **Planning→build boundary (campaign CLAUDE.md §4):** this mission writes **only** md/artifacts — **zero `site/` edits.**
- **No deploy / no push.** P4 is already live; the working tree is clean (0 unpushed; any new planning-doc commit stays operator-gated, SO-11).
- **Register (for the re-plan copy):** warm · calm · honest (~55/45); the remedy is more proof + more honesty. Movement-Skeptic gates the R1 demo (a **real** recording, never staged).
- **Hard stop at O4.** P5 lands `status: proposed`; ratification is the operator's.
- **AAR at close** (SO#5); token budget above (SO#11); model tier `opus` (Gov Doctrine).

## Definition of done

The live post-P4 site is measured (static + interactive + perf) with evidence on disk; P4 is verified held (or any regression logged, not glossed); the onboarding/home baseline is captured; `p5_replan.md` finalizes the capstone arc grounded item-by-item in that evidence + the provenance-tagged onboarding rules, sits `status: proposed` at the operator gate; the durable-doctrine sub-decision is recorded. No `site/` change, no deploy, no push; the mission ends **before** any P5 building.

## AAR (2026-07-12 — measure + re-plan delivered in one session)

- **Worked:** The measure-before-re-plan gate ran clean end-to-end in one session — **T0** (6 surfaces ×2vp ×2themes +`--axe`: all **axe-0**, zero console errors, loads < 1 s; **P4 held + landed** — `/learn` 798/0h2 → **2526/5h2**, `what-is-adna` **8492 → 6411**, `/reference` spec-led), **T1** (**21/21** interactive — registry/deep-link-twins/on-ramps all behave), **Lighthouse** home **99 / CLS 0 / TBT 0**. Re-plan authored → **ratified (O4)**; the R1 sub-decision resolved (gate behind a ≥6-exemplar pass). **Zero `site/` edits** — the planning→build boundary held.
- **Didn't (as planned):** Fresh Lighthouse for `/get-started` + `what-is-adna` was blocked by the intermittent node-shell PATH flake (exit 127) after 3 attempts → deferred, non-blocking (P3 baseline 99–100 + T0 loads < 1 s + P4-was-docs-IA cover them). The one live data gap — `zeta.aDNA` purpose line (67/68) — is the known Hestia `headline_mission` thread, not a P5 miss.
- **Finding:** Unlike the P3→P4 gate (which *sharpened* two phases), this measure **confirmed** the plan — P4 held cleanly and the onboarding gap was exactly as the wind-down predicted (no demo; hero has no install). The one real sharpening was governance, not scope: the onboarding rules are **1-exemplar candidate-basis**, so the biggest bet (R1 demo) was **gated behind a ≥6-exemplar reference pass** rather than built on faith — R2/R3 (which only surface existing single-sourced data) ship now.
- **Change (for next time):** The node-shell flake makes **background** Lighthouse unreliable (PATH loss → `node`/`tail`/`npx` "command not found"). Reliable path: **foreground, explicit `PATH` export incl. `/opt/homebrew/bin`, absolute `node`/`npx`, one surface per invocation.** The T0 harness + `p3_interactions` + `lh_summarize` themselves were rock-solid.
- **Follow-up:** **P5 accepted** → author `mission_p5_1_onboarding` (M5.1a R2 hero-install + R3 MIT eyebrow first) in a **fresh session**; **R1 (M5.1b) gated** behind the ≥6-exemplar install-forward pass (Val Town·Raycast·Bun·Vercel·Astro, via `skill_reference_inspection`); M5.2 craft + M5.3 a11y/perf/reach follow. Residuals unchanged/non-blocking: untracked P4 evidence, parked Exchange→Rosetta coord memo, candidate upstream `.prose`-table a11y idea, Hestia data-currency. ****Pushed `6f35fbb` → origin/main at wind-down** (gitleaks pre-push clean; operator-authorized SO-11).**

**Token budget:** estimated ~110 kT; **actual ≈ one session**, within envelope (no > 2× drift). **Executor tier:** `opus` as planned (verify-live measure + onboarding-doctrine weigh + re-plan authoring).
