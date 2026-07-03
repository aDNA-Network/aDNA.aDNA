---
plan_id: mission_champollion_m7_2_campaign_close_retro
type: plan
title: "M7.2 — Campaign close + ops-retro (the M7.x bundle) + telemetry corpus export + G7 render"
owner: stanley
status: completed
campaign_id: campaign_champollion
campaign_phase: 7
campaign_mission_number: 2
mission_class: closeout
executor_tier: fable
token_budget_estimated: "35 kT (fable-led at-tier — the retro judges our own orchestration; runs AFTER M7.1; cumulative campaign tracking ≈+4% over the 700–850 band ceiling — this mission sizes tight and reports the final number honestly)"
token_budget_actual: "~45 kT (+29% vs 35 est — the P7 closeout-underpriced pattern continues: 6 synthesis writes [pattern §2.6 fold · ops-retro · telemetry export · campaign AAR · charter §Completion · G7 render]; ran as an operator-authorized opus substitute, fable rate-limited)"
created: 2026-07-03
updated: 2026-07-03
last_edited_by: agent_rosetta
tags: [plan, campaign, champollion, p7, closeout, retro, telemetry, g7, m7_2]
---

# Mission M7.2 — Campaign close + ops-retro

**Campaign**: [[../campaign_champollion|campaign_champollion]] · **Executor: FABLE at-tier direct** (closeout judgment; M6.3 precedent) · runs **after M7.1**.

## Objective

Close Operation Champollion: the **ops-retro** (the accumulated M7.x bundle), the **full telemetry corpus export** (the per-campaign shape offered to Prometheus at datapoint #1), the **campaign AAR + close splash**, and the **G7 render** (campaign-close gate — operator; do NOT auto-advance).

## Work

1. **Ops-retro** (the M7.x bundle, accumulated across gates): (a) **twin-builder hazard** (P4 — one dispatch, two live builders; the TaskStop+quiescence rule) · (b) **builder surface-selection failure mode** (M6.3 F1 — same-named files at two levels; the finding-side verification rule) · (c) **aggregate-halt-line accounting** (M6.1 — two in-band dispatches summing past the mission halt; where should the aggregate check live?) · (d) M5.2 silent halt-line pass (builder-side) · (e) Mode-B pattern §2.5/§Mode-B updates from all of the above → fold the durable rules into `pattern_model_tiered_campaign_execution` + the Mode-B review checklist.
2. **Telemetry corpus export**: consolidate datapoints #1–#7 (P1–P7) into the per-campaign export shape (join keys `tier_planned × model_actual × budget_est × budget_actual`); final cumulative number vs the 700–850 band, honest; stage the Prometheus memo annotation/handoff.
3. **Campaign AAR** (template_aar, full) + **close splash** (`skill_campaign_sitrep_splash`) + charter §Completion fill.
4. **G7 render** — the campaign-close gate: decisions (campaign → completed · residual-thread routing [v8.5 queue owner + trigger · P7-close fleet re-seed note from G0-D5 · anything M7.1 flagged] · final push batch). **Operator gate; do NOT auto-advance.**

## Acceptance criteria

- [ ] Retro artifact complete; durable rules folded into the pattern (not just narrated).
- [ ] Corpus export covers all 7 phases; final numbers reconcile against the per-gate datapoints.
- [ ] Campaign AAR + splash + charter completion; G7 rendered pending.
- [ ] `adna_validate` FULL + `--governance` zero drift; explicit-path commit (no push — G7-D decides).

## Guardrails

Fable-led, no builder dispatch · SO-6 archive-never-delete on all campaign records · NAMES-ONLY.

## Escalation triggers

- A retro finding that implies a standing-rule change beyond the pattern's scope → G7 input, not unilateral doctrine edits.
- Budget > 45 kT → halt and report.

## AAR (M7.2 — 2026-07-03)

- **Worked**: closed Champollion cleanly — DoD audited **MET** ([[../artifacts/aar_champollion|campaign AAR]] §3); the durable Mode-B rules **FOLDED into [[../../../what/patterns/pattern_model_tiered_campaign_execution|pattern §2.6]]** (7 hazards + the review-bookend checklist — folded, not just narrated); telemetry corpus #1–7 consolidated with the load-bearing finding (drift was **SIZING, not routing** — 24/24 at-tier, 0 escalations all campaign); G7 rendered pending.
- **Didn't**: ran as an operator-authorized **opus substitute** (fable rate-limited) — the first live exercise of the very substitution rule it was folding (§2.6 rule 7); ~45/35 (+29%, the P7 closeout-underpriced pattern).
- **Finding**: the honest final number is **+7% (~957/897 kT), ~13% over the 700–850 band** — but concentrated in ONE **estimator class** (per-unit costs hidden inside mission-shaped estimates: cross-graph reads · N-row batches · multi-dispatch verification), fixable by the §2.6 rule-5 per-unit pricing, **not** a re-tiering. Routing was sound end to end.
- **Change**: pattern §2.6 is now the durable Mode-B doctrine + checklist; the estimator-class pricing is the corpus's headline for Prometheus.
- **Follow-up**: **G7 is the operator gate** (campaign → completed + push + residual routing — do NOT auto-advance); DP4 operator-fires; post-launch fleet re-seed (G0-D5, Rosetta+Hestia); v8.5 queue owner = Rosetta.
