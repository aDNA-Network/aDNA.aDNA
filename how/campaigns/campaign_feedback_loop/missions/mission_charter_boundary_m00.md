---
plan_id: mission_charter_boundary_m00
type: plan
title: "Charter, Naming & Boundary"
owner: stanley
status: active
campaign_id: campaign_feedback_loop
campaign_phase: 0
campaign_mission_number: 0
mission_class: implementation
token_budget_estimated: 55
created: 2026-06-20
updated: 2026-06-20
last_edited_by: agent_stanley
tags: [plan, campaign, feedback_loop]
---

# Mission: Charter, Naming & Boundary

**Campaign**: [[how/campaigns/campaign_feedback_loop/campaign_feedback_loop|campaign_feedback_loop]]
**Phase**: 0 — Charter, Naming & Boundary
**Mission**: 0 of 5

## Goal

Ratify the names, the signal taxonomy, and the Context.aDNA boundary, and record them in a proposed ADR — so Phase 1 can author the pattern + spec the rest of Operation Feedback Loop (and the Keystone cohort) consume. This mission produces the charter scaffold and the boundary decision; it does **not** author the normative pattern/spec (that is M1, after the operator gate).

## Exit Gate

Operator ratifies, at the P0→P1 human gate (Standing Order #1):
1. Wrapper directory name — **`feedback/`** (recommended, compass-aligned) vs `telemetry/` (order's working name).
2. The four signal classes — `deploy_outcome`, `config_drift`, `install_friction`, `shared_aar`.
3. The Context.aDNA consume-by-reference boundary, as recorded in [[what/decisions/adr_036_software_graph_feedback_boundary|ADR-036]].

## Objectives

### 1. Campaign scaffold
- **Status**: completed
- **Session**: session_2026_06_20_feedback_loop_p0
- **Description**: Campaign master + per-campaign CLAUDE.md via templates.
- **Files**: `campaign_feedback_loop.md`, `CLAUDE.md`
- **Depends on**: none

### 2. ADR-036 (proposed) — boundary, privacy, naming
- **Status**: completed
- **Session**: session_2026_06_20_feedback_loop_p0
- **Description**: Record the Context.aDNA consume-by-reference boundary; Rule-6 privacy constraints; opt-in-default-off; wrapper name choice; wrapper-federation over base-template baking.
- **Files**: `what/decisions/adr_036_software_graph_feedback_boundary.md`
- **Depends on**: 1

### 3. Prometheus coordination memo
- **Status**: completed
- **Session**: session_2026_06_20_feedback_loop_p0
- **Description**: Stage a coord memo to Context.aDNA (Prometheus) recording the seam: Context owns transport/economics, this pattern consumes by reference and owns deploy/operate/install semantics. Ack-pending, non-blocking (Standing Rule 10).
- **Files**: `who/coordination/coord_2026_06_20_feedback_loop_to_prometheus.md`
- **Depends on**: 2

### 4. Operator gate
- **Status**: blocked (human gate)
- **Description**: Present the three ratification items above. Do not advance to M1 until cleared (Standing Order #1).
- **Depends on**: 2, 3

## Campaign Context

### Previous Mission Outputs
- None (first mission).

### Next Mission Inputs
- M1 (Pattern + Spec) consumes: the ratified wrapper name, the four signal classes, and ADR-036's boundary + privacy spine.

## Notes

Authored ahead of the gate per the order's allowance that P0 scaffold + the proposed ADR may be written; only **ratification** and the **P1 normative artifacts** wait for the human gate. The pattern + spec (`what/patterns/`, `what/specs/`) were drafted in the same session as dependency-unblocking artifacts for WS-B/WS-D, carrying the `feedback/` working name; they are revisable at the gate.

## Completion Summary

*Fill out when setting `status: completed`.*

## AAR

*Mandatory before setting `status: completed`. See `how/templates/template_aar_lightweight.md`.*

- **Worked**: [tbd]
- **Didn't**: [tbd]
- **Finding**: [tbd]
- **Change**: [tbd]
- **Follow-up**: [tbd]
