---
plan_id: mission_champollion_m7_2_campaign_close_retro
type: plan
title: "M7.2 — Campaign close + ops-retro (the M7.x bundle) + telemetry corpus export + G7 render"
owner: stanley
status: planned
campaign_id: campaign_champollion
campaign_phase: 7
campaign_mission_number: 2
mission_class: closeout
executor_tier: fable
token_budget_estimated: "35 kT (fable-led at-tier — the retro judges our own orchestration; runs AFTER M7.1; cumulative campaign tracking ≈+4% over the 700–850 band ceiling — this mission sizes tight and reports the final number honestly)"
token_budget_actual: "TBD"
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
