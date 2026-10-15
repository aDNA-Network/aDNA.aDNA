---
plan_id: mission_arcade_a3_2_adr_066_profiles_hash_manifest
type: plan
title: "ADR-066 — conformance profiles + release-integrity hash manifest (U23), with U15 · U18 · U19"
owner: stanley
status: queued
campaign_id: campaign_arcade
campaign: campaign_arcade
campaign_phase: 3
campaign_mission_number: 10
mission_class: implementation
created: '2026-10-15'
updated: 2026-10-15
last_edited_by: agent_rosetta
tags: [plan, campaign, arcade]
executor_tier: fable
executor_lane: hosted
executor_runtime: claude
token_budget_estimated: 80
token_budget_unit: kT_content_load
estimated_sessions: 1
calibrated_sessions: null
estimation_class: content-novel
budget_status: provisional_until_G0_actual
depends_on:
- mission_arcade_a3_1_lister_reading
blocks:
- mission_arcade_a3_3_profile_scaffolding
gate: "G3 — ADR-066 §7.7 (four lines)."
verification_method: "Every claim in the Completion Summary cites a path or a command; counts are derived, never typed; the five-line AAR is present before status: completed (Standing Order 5)."
---

# Mission: ADR-066 — conformance profiles + release-integrity hash manifest (U23), with U15 · U18 · U19

**Campaign**: [[campaign_arcade]] (Operation ARCADE — side campaign of [[campaign_garnier]])
**Phase**: P3 — aDNA-Medical seam
**Mission**: 10 of 15

## Goal

The one normative change that lets aDNA-Medical be a profile OF the standard rather than a private fork: a named overlay (adna_conformance: <level>+<profile>) stacked on a conformance level with its own MUSTs (§5.5 new subsection), and a deterministic content-hash manifest so any release or instance can prove unmodified rules (new §-level Release integrity, §15.4 bound). Ride the three small seams with it: who/coordination/ optional at Starter (U15), an optional base data_class field (U19), and a purge carve-out from archive-never-delete for regulated data and secrets (U18).

## Exit Gate

G3 — ADR-066 §7.7 (four lines).

## Objectives

### 1. ADR-066 (proposed, for v2.6)
- **Status**: planned
- **Session**: 
- **Description**: Four clauses, each with its own §7.7 line (independent); LinkML.aDNA's profile_v0_1 and compliance_slots cited as the schema side; LP lattice_core DataTier cited.
- **Files**: what/decisions/adr_066_conformance_profiles_release_integrity.md · adr_index.md
- **Depends on**: none

### 2. Standard text drafted, not applied
- **Status**: planned
- **Session**: 
- **Description**: The §5.5 / §15.4 / §7.2 deltas as a diff file for A4.1; adna_standard.md byte-unchanged until the cut.
- **Files**: artifacts/p3/standard_deltas_adr_066.diff.md
- **Depends on**: 1

## Campaign Context

### Previous Mission Outputs
- See [[mission_arcade_a3_1_lister_reading]].

### Next Mission Inputs
- Feeds [[mission_arcade_a3_3_profile_scaffolding]].

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
