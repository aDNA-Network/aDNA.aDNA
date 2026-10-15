---
plan_id: mission_arcade_a3_1_lister_reading
type: plan
title: "Rosetta's reading of Operation Lister Phase 1: U1–U25 dispositioned, §16 answered, memo to Jake's desk"
owner: stanley
status: queued
campaign_id: campaign_arcade
campaign: campaign_arcade
campaign_phase: 3
campaign_mission_number: 9
mission_class: reconnaissance
created: '2026-10-15'
updated: 2026-10-15
last_edited_by: agent_rosetta
tags: [plan, campaign, arcade]
executor_tier: fable
executor_lane: hosted
executor_runtime: claude
token_budget_estimated: 90
token_budget_unit: kT_content_load
estimated_sessions: 1
calibrated_sessions: null
estimation_class: content-novel
budget_status: provisional_until_G0_actual
depends_on:
- mission_arcade_a2_3_public_face_account
blocks:
- mission_arcade_a3_2_adr_066_profiles_hash_manifest
gate: "G3 — memo GO; Lister Gate 1/2/3 stay Jake + Stanley's."
verification_method: "Every claim in the Completion Summary cites a path or a command; counts are derived, never typed; the five-line AAR is present before status: completed (Standing Order 5)."
---

# Mission: Rosetta's reading of Operation Lister Phase 1: U1–U25 dispositioned, §16 answered, memo to Jake's desk

**Campaign**: [[campaign_arcade]] (Operation ARCADE — side campaign of [[campaign_garnier]])
**Phase**: P3 — aDNA-Medical seam
**Mission**: 9 of 15

## Goal

Read the three Lister artifacts (spec v0.1.0-draft · disposition ledger · upstream candidates) from the standard's side and answer: which of U1–U25 the standard accepts now, at v2.6, at v3.0, or declines, each with its target section; and what the standard says to the eleven §16 Gate-1 questions. The reading is advisory to Gate 1 (Jake + Stanley sign it, not Rosetta) and is the input ADR-066 builds on.

## Exit Gate

G3 — memo GO; Lister Gate 1/2/3 stay Jake + Stanley's.

## Objectives

### 1. U1–U25 disposition table
- **Status**: planned
- **Session**: 
- **Description**: accept-now / v2.6 / v3.0 / decline · target § · size · risk; the primer's I-rows cross-referenced where they coincide (U9, U14).
- **Files**: artifacts/p3/lister_upstream_disposition.md
- **Depends on**: none

### 2. §16 answers
- **Status**: planned
- **Session**: 
- **Description**: Eleven rows; D1 placement answered from ADR-065's reading (profile authored in the company graph, published to the standard at release as an official profile).
- **Files**: same
- **Depends on**: 1

### 3. Memo to Lannes/Jake
- **Status**: planned
- **Session**: 
- **Description**: outbound_ready; names-only; carries the two files by path.
- **Files**: who/coordination/coord_*_rosetta_to_lannes_*.md
- **Depends on**: 2

## Campaign Context

### Previous Mission Outputs
- See [[mission_arcade_a2_3_public_face_account]].

### Next Mission Inputs
- Feeds [[mission_arcade_a3_2_adr_066_profiles_hash_manifest]].

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
