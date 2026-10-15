---
plan_id: mission_arcade_a1_4_registry_truth
type: plan
title: "Registry truth for Exchange and Terminal: memo to Hestia, gated sync"
owner: stanley
status: queued
campaign_id: campaign_arcade
campaign: campaign_arcade
campaign_phase: 1
campaign_mission_number: 5
mission_class: integration
created: '2026-10-15'
updated: 2026-10-15
last_edited_by: agent_rosetta
tags: [plan, campaign, arcade]
executor_tier: sonnet
executor_lane: hosted
executor_runtime: claude
token_budget_estimated: 25
token_budget_unit: kT_content_load
estimated_sessions: 1
calibrated_sessions: null
estimation_class: content-novel
budget_status: provisional_until_G0_actual
depends_on:
- mission_arcade_a1_3_vauban_rulings_packet
blocks:
- mission_arcade_a2_1_adr_065_estate_position
gate: "G1 — memo GO; the sync is its own operator GO."
verification_method: "Every claim in the Completion Summary cites a path or a command; counts are derived, never typed; the five-line AAR is present before status: completed (Standing Order 5)."
---

# Mission: Registry truth for Exchange and Terminal: memo to Hestia, gated sync

**Campaign**: [[campaign_arcade]] (Operation ARCADE — side campaign of [[campaign_garnier]])
**Phase**: P1 — Access points
**Mission**: 5 of 15

## Goal

The adna.network registry rows for Exchange.aDNA and Terminal.aDNA read status: genesis, last_synced 2026-08-29, and Terminal's still describes a soft-fork of cmux. The inventory is Hestia's; the regeneration is pt19-gated. Draft the per-row corrections from each vault's own STATE/MANIFEST, send them to Hestia as names-only data, and queue the sync:vaults GO as a DP3-class disposition item (the site diverges from the stimulus again).

## Exit Gate

G1 — memo GO; the sync is its own operator GO.

## Objectives

### 1. Corrections table
- **Status**: planned
- **Session**: 
- **Description**: Two rows × (status · phase · persona · purpose line · github_url) derived from the vaults, not typed.
- **Files**: artifacts/p1/registry_corrections_exchange_terminal.md
- **Depends on**: none

### 2. Memo to Hestia
- **Status**: planned
- **Session**: 
- **Description**: outbound_ready; cites ADR-052 §admission; asks the inventory write only.
- **Files**: who/coordination/coord_*_rosetta_to_hestia_*.md
- **Depends on**: 1

### 3. sync:vaults GO queued
- **Status**: planned
- **Session**: 
- **Description**: STATE §Pending Manual Actions row; GARNIER DP3 item appended when it runs.
- **Files**: STATE.md
- **Depends on**: 2

## Campaign Context

### Previous Mission Outputs
- See [[mission_arcade_a1_3_vauban_rulings_packet]].

### Next Mission Inputs
- Feeds [[mission_arcade_a2_1_adr_065_estate_position]].

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
