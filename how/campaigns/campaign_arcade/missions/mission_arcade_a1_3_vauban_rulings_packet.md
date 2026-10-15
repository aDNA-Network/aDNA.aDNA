---
plan_id: mission_arcade_a1_3_vauban_rulings_packet
type: plan
title: "Disposition Vauban's thirteen template and pattern asks; operator rules; reply delivered"
owner: stanley
status: queued
campaign_id: campaign_arcade
campaign: campaign_arcade
campaign_phase: 1
campaign_mission_number: 4
mission_class: integration
created: '2026-10-15'
updated: 2026-10-15
last_edited_by: agent_rosetta
tags: [plan, campaign, arcade]
executor_tier: fable
executor_lane: hosted
executor_runtime: claude
token_budget_estimated: 60
token_budget_unit: kT_content_load
estimated_sessions: 1
calibrated_sessions: null
estimation_class: content-novel
budget_status: provisional_until_G0_actual
depends_on:
- mission_arcade_a1_2_terminal_platform_specs
blocks:
- mission_arcade_a1_4_registry_truth
gate: "G1 — rulings taken; reply GO."
verification_method: "Every claim in the Completion Summary cites a path or a command; counts are derived, never typed; the five-line AAR is present before status: completed (Standing Order 5)."
---

# Mission: Disposition Vauban's thirteen template and pattern asks; operator rules; reply delivered

**Campaign**: [[campaign_arcade]] (Operation ARCADE — side campaign of [[campaign_garnier]])
**Phase**: P1 — Access points
**Mission**: 4 of 15

## Goal

Answer Terminal's two unanswered memos (10-06: nine Bastide conventions; 10-07: four boundary-AAR template asks) with one rulings packet — each row accept / amend / decline with the target template or pattern named — put to the operator as an AskUserQuestion or ISS gate, then applied to the templates that are ours (the accepted rows ride the v8.13 image via A4.2) and replied to Vauban.

## Exit Gate

G1 — rulings taken; reply GO.

## Objectives

### 1. Packet of 13 rows
- **Status**: planned
- **Session**: 
- **Description**: Each row: the ask · the object it would change · Rosetta's recommendation · risk · the v8.13 lane if accepted.
- **Files**: artifacts/p1/vauban_rulings_packet.md
- **Depends on**: none

### 2. Operator rulings
- **Status**: planned
- **Session**: 
- **Description**: AskUserQuestion (bounded) or skill_create_iss (if richer); resolutions recorded on each row.
- **Files**: same
- **Depends on**: 1

### 3. Apply + reply
- **Status**: planned
- **Session**: 
- **Description**: Accepted rows land in how/templates/ and what/patterns/ as proposed amendments; reply to Vauban outbound_ready; Terminal ROADMAP row 17 can close on it.
- **Files**: how/templates/* · what/patterns/pattern_iss_operator_gate.md · who/coordination/coord_*_rosetta_to_vauban_*.md
- **Depends on**: 2

## Campaign Context

### Previous Mission Outputs
- See [[mission_arcade_a1_2_terminal_platform_specs]].

### Next Mission Inputs
- Feeds [[mission_arcade_a1_4_registry_truth]].

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
