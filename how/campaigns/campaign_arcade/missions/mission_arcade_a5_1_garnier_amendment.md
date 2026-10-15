---
plan_id: mission_arcade_a5_1_garnier_amendment
type: plan
title: "GARNIER amendment at DP3 — the four relations enter the claims lanes; docs tranches re-scoped; VITRINE dispositioned"
owner: stanley
status: queued
campaign_id: campaign_arcade
campaign: campaign_arcade
campaign_phase: 5
campaign_mission_number: 14
mission_class: integration
created: '2026-10-15'
updated: 2026-10-15
last_edited_by: agent_rosetta
tags: [plan, campaign, arcade]
executor_tier: fable
executor_lane: hosted
executor_runtime: claude
token_budget_estimated: 50
token_budget_unit: kT_content_load
estimated_sessions: 1
calibrated_sessions: null
estimation_class: content-novel
budget_status: provisional_until_G0_actual
depends_on:
- mission_arcade_a4_2_image_v8_13
blocks:
- mission_arcade_a5_2_aar_close
gate: "G5 — DP3 (operator) rules the amendment."
verification_method: "Every claim in the Completion Summary cites a path or a command; counts are derived, never typed; the five-line AAR is present before status: completed (Standing Order 5)."
---

# Mission: GARNIER amendment at DP3 — the four relations enter the claims lanes; docs tranches re-scoped; VITRINE dispositioned

**Campaign**: [[campaign_arcade]] (Operation ARCADE — side campaign of [[campaign_garnier]])
**Phase**: P5 — GARNIER adjustment and close
**Mission**: 14 of 15

## Goal

Carry this campaign's outputs into the parent at its own gate: DP3 item (i) ruled; the P2.3 docs tranches re-scoped to cover the access-point docs and the profile page; the public-face account (A2.3) handed to the claim register; the Exchange/Terminal registry cards; and campaign_vitrine dispositioned (fold its §1 Exchange brief into A2.3's record, or close it) — all as proposed amendments, ruled by the operator.

## Exit Gate

G5 — DP3 (operator) rules the amendment.

## Objectives

### 1. Amendment record
- **Status**: planned
- **Session**: 
- **Description**: campaign_garnier/artifacts/amendments/ + rolling_closure_ledger rows; mission frontmatters touched only on ruling.
- **Files**: how/campaigns/campaign_garnier/artifacts/amendments/*.md
- **Depends on**: none

### 2. VITRINE disposition
- **Status**: planned
- **Session**: 
- **Description**: status flip only on ruling; history retained.
- **Files**: how/campaigns/campaign_vitrine/campaign_vitrine.md
- **Depends on**: 1

## Campaign Context

### Previous Mission Outputs
- See [[mission_arcade_a4_2_image_v8_13]].

### Next Mission Inputs
- Feeds [[mission_arcade_a5_2_aar_close]].

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
