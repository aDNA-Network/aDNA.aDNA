---
plan_id: mission_pattern_spec_m01
type: plan
title: "Pattern + Spec + federation_ref contract + AAR sub-pattern"
owner: stanley
status: completed
campaign_id: campaign_feedback_loop
campaign_phase: 1
campaign_mission_number: 1
mission_class: implementation
token_budget_estimated: 70
token_budget_actual: ~40 (authored within the M0 session; this file is the bookkeeping record)
created: 2026-06-20
updated: 2026-06-20
last_edited_by: agent_stanley
tags: [plan, campaign, feedback_loop]
---

# Mission: Pattern + Spec + federation_ref contract + AAR sub-pattern

**Campaign**: [[how/campaigns/campaign_feedback_loop/campaign_feedback_loop|campaign_feedback_loop]]
**Phase**: 1 — Pattern + Spec + Contract
**Mission**: 1 of 5

## Goal

Author the two consumable artifacts the rest of Operation Feedback Loop (and the Keystone cohort + Bitwarden.aDNA)
depend on: the dual-audience **pattern** and the normative **spec** carrying the `federation_ref` contract and the
first-class **§AAR-Contribution sub-pattern**.

> **Provenance note.** Both deliverables were drafted during the M0 session (`session_2026_06_20_feedback_loop_p0`)
> ahead of the P0→P1 gate, as dependency-unblockers for WS-B/WS-D, carrying the `feedback/` working name and an
> explicit "draft pending ratification" mark. They were ratified **active** at the P0→P1 gate (2026-06-20) with no
> clause changes. This mission file is the retroactive audit record that closes P1.

## Exit Gate

`pattern_*` and `spec_*` exist, pass dual-audience + self-reference checks, cite the upstream standard, and carry
≥2 wikilinks (Rosetta SO#7/#8/#9/#10). **Met.**

## Objectives

### 1. The pattern
- **Status**: completed
- **Session**: session_2026_06_20_feedback_loop_p0 (authored) · gate_p2 (ratified active)
- **Description**: [[what/patterns/pattern_software_graph_telemetry_feedback|pattern_software_graph_telemetry_feedback]] —
  dual-audience opening, Problem/Solution (4 moving parts: local capture → operator review → opt-in submission → growth
  loop), When to Use, self-referential "Example: This Vault" (×2 — the VISION compass + the `iii/` wrapper both live
  in this vault), Anti-Pattern, 5 wikilinks. `status: active`.
- **Files**: `what/patterns/pattern_software_graph_telemetry_feedback.md`

### 2. The spec + federation_ref contract + AAR sub-pattern
- **Status**: completed
- **Session**: session_2026_06_20_feedback_loop_p0 (authored) · gate_p2 (ratified active)
- **Description**: [[what/specs/spec_telemetry_feedback_ecosystem|spec_telemetry_feedback_ecosystem]] — NORMATIVE
  (MUST/MUST NOT/SHOULD/MAY), Consumer Integration Pattern (the `feedback/` wrapper layout), the `federation_ref`
  schema (consent-default-off, signal_classes, redaction_profile, transport-by-reference), the four signal classes
  table, the first-class **§AAR-Contribution sub-pattern** (contributable fields, `software_graph_default`
  sanitization pass, structured submission schema, contributed-AAR → candidate-pattern-update mapping), and Local
  extensions (tighten-only). `status: active`.
- **Files**: `what/specs/spec_telemetry_feedback_ecosystem.md`
- **Depends on**: 1

## Campaign Context

### Previous Mission Outputs
- M0: ratified wrapper name `feedback/`, the four signal classes, and the Context.aDNA consume-by-reference boundary
  ([[what/decisions/adr_036_software_graph_feedback_boundary|ADR-036]], accepted).

### Next Mission Inputs
- M2 (`skill_telemetry_wrapper_integration`) consumes the spec's `federation_ref` schema verbatim and the `feedback/`
  wrapper layout.

## Completion Summary

Both deliverables complete and ratified `active`. The spec's `federation_ref` schema and §AAR sub-pattern are the
contract M2's integration skill instantiates and that Bitwarden.aDNA + the Keystone cohort wire at genesis (P3).

## AAR

- **Worked**: The spec's §AAR-Contribution sub-pattern fell straight out of Standing Order #5's existing scorecard-AAR
  practice — this federates an *existing* practice outward rather than inventing one, which kept the artifact grounded,
  self-referential, and short.
- **Didn't**: The P1 record was reconstructed retroactively — the deliverables were authored in the M0 session ahead of
  the gate, so the 1-mission-per-phase model left P1 without a contemporaneous mission file until now.
- **Finding**: A consumer-wrapper spec is far easier to make normative when it pins to a proven sibling contract — the
  `feedback/` `federation_ref` is a near-twin of III's ADR-002, so a reviewer verifies it by analogy.
- **Change**: When drafting gated P1 artifacts during a P0 session, stub the P1 mission file at the same time
  (`status: in_progress`) so the audit trail stays continuous rather than retroactive.
- **Follow-up**: M2 — `skill_telemetry_wrapper_integration` + documented self-demo exemption — proceeding this session.
