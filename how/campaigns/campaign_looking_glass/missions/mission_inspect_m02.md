---
plan_id: mission_inspect
type: plan
title: "Inspect — run the III across Subject A + B → scored findings register"
owner: stanley
status: planned
campaign_id: campaign_looking_glass
campaign_phase: 2
campaign_mission_number: 2
mission_class: reconnaissance
token_budget_estimated: "~120 kT (80-200 tier): claim-trace audit + full gate run + persona ranker across 2 subjects"
created: 2026-06-27
updated: 2026-06-27
last_edited_by: agent_stanley
tags: [plan, campaign, iii_campaign_pilot, inspect, review, looking_glass]
---

# Mission: Inspect — run the III across Subject A + B

**Campaign**: [[how/campaigns/campaign_looking_glass/campaign_looking_glass|campaign_looking_glass]]
**Phase**: 2 — Review (run the III)
**Mission**: 2 of 6 (M0–M5)

## Goal

Run the built III ([[how/campaigns/campaign_looking_glass/artifacts/scaffolding_spec|scaffolding]]) across both subjects and produce a **scored findings register** — the evidence base for the improvement plan. Measure against the M1 baselines across all three tiers.

## Exit Gate

A complete, scored findings register exists: claim-level (traceable? current? structurally faithful? + craft) for Subject A, and context-level (consistent? correct? representation-ready?) for Subject B, each finding tagged with severity × fidelity-impact × effort.

## Objectives

### 1. Claim-trace audit (Tier 2)
- **Status**: planned
- **Description**: Enumerate site claims across the site-backing slice — **bounded to high-signal claim classes** (quantitative/counts · status/currency · structural/relational), not every sentence; trace each → `what/`; classify drift / fabrication / staleness.
- **Files**: `artifacts/findings_register.md`.
- **Depends on**: none.

### 2. Machine gates (Tier 1)
- **Status**: planned
- **Description**: Run the 281-assertion harness + the 2 new representation-coherence gates + build/axe/Lighthouse; record vs. baseline. Read-only on derived data.
- **Files**: findings_register.md (Tier-1 section).
- **Depends on**: none.

### 3. Persona pass (Tier 3)
- **Status**: planned
- **Description**: Core-reviewer pass + the persona-ranker climax (core + extended + adopter lenses); 0-5 scores on representation quality + craft.
- **Files**: findings_register.md (persona section).
- **Depends on**: none.

### 4. Subject-B context checks
- **Status**: planned
- **Description**: Dual-audience + self-reference + 10-dim compliance on the surfaced context slice; consistency check across the slice; spot-check vs. `adna_standard.md`.
- **Files**: findings_register.md (Subject-B section).
- **Depends on**: none.

### 5. Compile the scored register
- **Status**: planned
- **Description**: Merge all tiers; dedupe; score each finding (severity × fidelity-impact × effort).
- **Files**: findings_register.md.
- **Depends on**: 1, 2, 3, 4.

## Campaign Context

### Previous Mission Outputs
- M1 built the scaffolding + captured baselines + enumerated the site-backing slice.

### Next Mission Inputs
- M3 (Introspect + plan) calibrates and ranks this register into the improvement plan.

## Notes

- Read-only mission for the site/context — **no fixes here** (fixes are M4).
- Instrument: scaffolding-needed + III-primitive-gaps logs; note what gates missed that personas caught.

## AAR

*Mandatory before `status: completed`. See `how/templates/template_aar_lightweight.md`.*
