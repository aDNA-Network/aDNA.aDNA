---
plan_id: mission_arcade_a3_3_profile_scaffolding
type: plan
title: "Profile scaffolding: placement, template, validator design, and the fold path for Lister M7"
owner: stanley
status: queued
campaign_id: campaign_arcade
campaign: campaign_arcade
campaign_phase: 3
campaign_mission_number: 11
mission_class: implementation
created: '2026-10-15'
updated: 2026-10-15
last_edited_by: agent_rosetta
tags: [plan, campaign, arcade]
executor_tier: opus
executor_lane: hosted
executor_runtime: claude
token_budget_estimated: 60
token_budget_unit: kT_content_load
estimated_sessions: 1
calibrated_sessions: null
estimation_class: content-novel
budget_status: provisional_until_G0_actual
depends_on:
- mission_arcade_a3_2_adr_066_profiles_hash_manifest
blocks:
- mission_arcade_a4_1_standard_v2_6
gate: "G3 — none beyond ADR-066; this mission is scaffolding."
verification_method: "Every claim in the Completion Summary cites a path or a command; counts are derived, never typed; the five-line AAR is present before status: completed (Standing Order 5)."
---

# Mission: Profile scaffolding: placement, template, validator design, and the fold path for Lister M7

**Campaign**: [[campaign_arcade]] (Operation ARCADE — side campaign of [[campaign_garnier]])
**Phase**: P3 — aDNA-Medical seam
**Mission**: 11 of 15

## Goal

Give a profile a home before the first one arrives: what/docs/profiles/<slug>/ placement, a template_profile_spec.md the medical spec can be reshaped into, an adna_validate.py --profile <slug> design note (checks V1–V14 as the first instance), and the documented fold path by which Lister's M7 upstream AAR lands in this vault as a proposal (ADR-055 process).

## Exit Gate

G3 — none beyond ADR-066; this mission is scaffolding.

## Objectives

### 1. Placement + template
- **Status**: planned
- **Session**: 
- **Description**: Directory, AGENTS.md, template with the medical spec's section skeleton generalized.
- **Files**: what/docs/profiles/AGENTS.md · how/templates/template_profile_spec.md
- **Depends on**: none

### 2. Validator design note
- **Status**: planned
- **Session**: 
- **Description**: Interface only (build is a later opus mission); the hash-manifest check reuses ADR-066's algorithm.
- **Files**: what/lattices/tools/README (section) or artifacts/p3/validator_profile_design.md
- **Depends on**: 1

### 3. Fold path
- **Status**: planned
- **Session**: 
- **Description**: One page: from AILedger forge → proposal file in how/backlog/ → ADR → v2.x cut.
- **Files**: artifacts/p3/lister_fold_path.md
- **Depends on**: 2

## Campaign Context

### Previous Mission Outputs
- See [[mission_arcade_a3_2_adr_066_profiles_hash_manifest]].

### Next Mission Inputs
- Feeds [[mission_arcade_a4_1_standard_v2_6]].

## Notes

- Conventions: `campaign_arcade/CLAUDE.md` (GARNIER's by pointer + the four ARCADE rules: memos-not-edits · SR-6 public naming hold · ADR-number qualification · tense labels).
- Provenance tags on every finding — `[D]` observed · `[I]` inferred · `[R]` peer record (re-verify before citing) · `[A]` assumption.

## Completion Summary

*Fill out when setting `status: completed`.*

### Deliverables
-

### Descoped
-

### Key Findings
-

### Scope Changes
-

## AAR

*Mandatory before setting `status: completed`. See `how/templates/template_aar_lightweight.md`.*

- **Worked**:
- **Didn't**:
- **Finding**:
- **Change**:
- **Follow-up**:
