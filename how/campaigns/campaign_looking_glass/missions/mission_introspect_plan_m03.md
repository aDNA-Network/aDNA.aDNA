---
plan_id: mission_introspect_plan
type: plan
title: "Introspect + plan — calibrate the III; produce the ranked improvement plan"
owner: stanley
status: planned
campaign_id: campaign_looking_glass
campaign_phase: 2
campaign_mission_number: 3
mission_class: integration
token_budget_estimated: "~80 kT (80-200 tier, low end): calibrate + rank + author improvement plan"
created: 2026-06-27
updated: 2026-06-27
last_edited_by: agent_stanley
tags: [plan, campaign, iii_campaign_pilot, introspect, plan, looking_glass]
---

# Mission: Introspect + plan — calibrate; produce the ranked improvement plan

**Campaign**: [[how/campaigns/campaign_looking_glass/campaign_looking_glass|campaign_looking_glass]]
**Phase**: 2 — Review (run the III)
**Mission**: 3 of 6 (M0–M5)

## Goal

Calibrate the III (did the scaffolding measure the right things?) and turn the [[how/campaigns/campaign_looking_glass/missions/mission_inspect_m02|findings register]] into a **ranked, evidence-backed improvement plan** — the bounded set (lean disposition) the operator approves at DP3.

## Exit Gate (= Decision Point 3)

A ranked improvement plan exists, each item with evidence + a chosen fix-side (site vs. source) + effort, scoped to the lean bounded set; presented for operator approval.

## Objectives

### 1. Introspect / calibrate
- **Status**: planned
- **Description**: Per `introspect_checks`: did the packs/personas/measures catch the right things? what did Tier 1 miss that Tier 3 caught (and vice versa)? Update the instrumentation logs + the measurement-model retro.
- **Files**: `artifacts/introspection_notes.md`; instrumentation logs.
- **Depends on**: none.

### 2. Rank findings → bounded set
- **Status**: planned
- **Description**: Score severity × fidelity-impact × effort; select the lean bounded improvement set; defer long-tail (record as out-of-scope follow-on).
- **Files**: `artifacts/improvement_plan.md`.
- **Depends on**: 1.

### 3. Decide fix-side per finding
- **Status**: planned
- **Description**: For each item, decide: correct the site (Subject A), or fix the source `what/` the site faithfully-but-wrongly mirrors (Subject B). The decision is itself recorded.
- **Files**: improvement_plan.md.
- **Depends on**: 2.

### 4. Present for DP3
- **Status**: planned
- **Description**: Render the plan for operator approval.
- **Files**: improvement_plan.md.
- **Depends on**: 3.

## Campaign Context

### Previous Mission Outputs
- M2 produced the scored findings register.

### Next Mission Inputs
- M4 (Improve) executes the approved bounded set.

## Notes

- Lean: prefer the highest fidelity-impact-per-effort items; this is a pilot, not an exhaustive cleanup.

## AAR

*Mandatory before `status: completed`. See `how/templates/template_aar_lightweight.md`.*
