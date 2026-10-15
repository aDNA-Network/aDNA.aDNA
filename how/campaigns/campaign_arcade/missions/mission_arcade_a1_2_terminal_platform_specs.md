---
plan_id: mission_arcade_a1_2_terminal_platform_specs
type: plan
title: "Re-anchor the terminal contract, refresh the platform spec, retire the dead CLI prose"
owner: stanley
status: queued
campaign_id: campaign_arcade
campaign: campaign_arcade
campaign_phase: 1
campaign_mission_number: 3
mission_class: implementation
created: '2026-10-15'
updated: 2026-10-15
last_edited_by: agent_rosetta
tags: [plan, campaign, arcade]
executor_tier: opus
executor_lane: hosted
executor_runtime: claude
token_budget_estimated: 70
token_budget_unit: kT_content_load
estimated_sessions: 1
calibrated_sessions: null
estimation_class: content-novel
budget_status: provisional_until_G0_actual
depends_on:
- mission_arcade_a1_1_spec_graph_exchange
blocks:
- mission_arcade_a1_3_vauban_rulings_packet
gate: "G1 — specs §7.7."
verification_method: "Every claim in the Completion Summary cites a path or a command; counts are derived, never typed; the five-line AAR is present before status: completed (Standing Order 5)."
---

# Mission: Re-anchor the terminal contract, refresh the platform spec, retire the dead CLI prose

**Campaign**: [[campaign_arcade]] (Operation ARCADE — side campaign of [[campaign_garnier]])
**Phase**: P1 — Access points
**Mission**: 3 of 15

## Goal

Bring the standard's two product-facing specs to the launch posture of the products they describe: spec_terminal_harness_contract v0.2 re-anchored to ACP / A2A v1.0 / MCP and the rehomed Harness paths (the accepted rows of idea_terminal_harness_contract_reanchor, blob SHAs verified unchanged where the §8 no-drift case applies); spec_platform_ecosystem v0.4 naming Exchange + Terminal as the network's access points with the recommended-default paper note (idea_default_terminal_harness_standard_touch, paper row only — the hook waits on Terminal's threat-model mission); and the ~19 files in this vault that still name the retired aDNA / lattice CLI struck-not-deleted with the adnaterm successor named.

## Exit Gate

G1 — specs §7.7.

## Objectives

### 1. spec_terminal_harness_contract.md v0.2
- **Status**: planned
- **Session**: 
- **Description**: Five stale spots re-anchored; §8 provenance records SHA-unchanged clauses; ADR-027 (ours — qualify!) ratification bundled or left for its own ceremony per the operator.
- **Files**: what/specs/spec_terminal_harness_contract.md
- **Depends on**: none

### 2. spec_platform_ecosystem.md v0.4
- **Status**: planned
- **Session**: 
- **Description**: §Access points subsection: Exchange (Registry · Commons · Market) + Terminal (console) with their launch posture and the one spec each cites; recommended-not-required note.
- **Files**: what/specs/spec_platform_ecosystem.md
- **Depends on**: 1

### 3. CLI prose sweep
- **Status**: planned
- **Session**: 
- **Description**: grep -rl for the retired verbs in this vault (excluding history/archive); strike + successor line; a derived count in the AAR, never typed.
- **Files**: ~19 files (derived at the sitting)
- **Depends on**: 2

## Campaign Context

### Previous Mission Outputs
- See [[mission_arcade_a1_1_spec_graph_exchange]].

### Next Mission Inputs
- Feeds [[mission_arcade_a1_3_vauban_rulings_packet]].

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
