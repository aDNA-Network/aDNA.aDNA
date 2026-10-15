---
plan_id: mission_arcade_a4_1_standard_v2_6
type: plan
title: "Assemble the standard v2.6 cut for the operator's gate"
owner: stanley
status: queued
campaign_id: campaign_arcade
campaign: campaign_arcade
campaign_phase: 4
campaign_mission_number: 12
mission_class: implementation
created: '2026-10-15'
updated: 2026-10-15
last_edited_by: agent_rosetta
tags: [plan, campaign, arcade]
executor_tier: fable
executor_lane: hosted
executor_runtime: claude
token_budget_estimated: 150
token_budget_unit: kT_content_load
estimated_sessions: 2
calibrated_sessions: null
estimation_class: content-novel
budget_status: provisional_until_G0_actual
depends_on:
- mission_arcade_a3_3_profile_scaffolding
blocks:
- mission_arcade_a4_2_image_v8_13
gate: "G4 — the v2.6 cut (operator)."
verification_method: "Every claim in the Completion Summary cites a path or a command; counts are derived, never typed; the five-line AAR is present before status: completed (Standing Order 5)."
---

# Mission: Assemble the standard v2.6 cut for the operator's gate

**Campaign**: [[campaign_arcade]] (Operation ARCADE — side campaign of [[campaign_garnier]])
**Phase**: P4 — The cut
**Mission**: 12 of 15

## Goal

One sitting per §15.4: fold the ratified decisions into adna_standard.md and cut v2.6 only when the operator signs. Queue: ADR-063 errata (two §7.7 lines) · ADR-062 annex path (Noether 10-10: lattice_core at LatticeProtocol.aDNA/what/schemas/) · the LinkML frontmatter master's five rulings (ISS gate authored from Noether 10-03/10-07) · ADR-066 profiles + release integrity · spec_graph_exchange cross-reference in §5.3/§19 · the campaign layer codified (idea_upstream_standard_codify_campaign_layer) · the four-surface version-cut checklist.

## Exit Gate

G4 — the v2.6 cut (operator).

## Objectives

### 1. ISS gate for the standard rulings
- **Status**: planned
- **Session**: 
- **Description**: skill_create_iss; every ratification line empty until signed.
- **Files**: how/gates/arcade_v2_6_gate.md
- **Depends on**: none

### 2. Fold + cut
- **Status**: planned
- **Session**: 
- **Description**: adna_standard.md v2.6 on signature only; frontmatter title · updated · header changelog · footer all move together.
- **Files**: what/docs/adna_standard.md · CHANGELOG.md
- **Depends on**: 1

### 3. Replies to Noether
- **Status**: planned
- **Session**: 
- **Description**: Three ack_required memos answered in one (10-07 · 10-08 · 10-10) — outbound_ready.
- **Files**: who/coordination/coord_*_rosetta_to_noether_*.md
- **Depends on**: 2

## Campaign Context

### Previous Mission Outputs
- See [[mission_arcade_a3_3_profile_scaffolding]].

### Next Mission Inputs
- Feeds [[mission_arcade_a4_2_image_v8_13]].

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
