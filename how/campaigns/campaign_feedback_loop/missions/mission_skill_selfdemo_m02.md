---
plan_id: mission_skill_selfdemo_m02
type: plan
title: "Integration Skill + Self-Demonstration"
owner: stanley
status: completed
campaign_id: campaign_feedback_loop
campaign_phase: 2
campaign_mission_number: 2
mission_class: implementation
token_budget_estimated: 50
token_budget_actual: ~55 (skill authoring + exemption + inventory row + this record)
created: 2026-06-20
updated: 2026-06-20
last_edited_by: agent_stanley
tags: [plan, campaign, feedback_loop]
---

# Mission: Integration Skill + Self-Demonstration

**Campaign**: [[how/campaigns/campaign_feedback_loop/campaign_feedback_loop|campaign_feedback_loop]]
**Phase**: 2 — Integration Skill + Self-Demonstration
**Mission**: 2 of 5

## Goal

Author the `skill_telemetry_wrapper_integration` consumer-onboarding skill (in the image of `skill_iii_setup`) so any
`<Software>.aDNA` deployment graph can stand up a `feedback/` wrapper, and satisfy Standing Order #8
self-demonstration — by a **documented exemption**, since `aDNA.aDNA` governs no software surface.

## Exit Gate

Skill exists in the image of [[../../III.aDNA/how/skills/skill_iii_setup|`skill_iii_setup`]]; SO#8 self-demonstration
satisfied or exemption recorded. **Met** (exemption recorded).

## Objectives

### 1. Author the integration skill
- **Status**: completed
- **Session**: session_2026_06_20_feedback_loop_gate_p2
- **Description**: [[how/skills/skill_telemetry_wrapper_integration|skill_telemetry_wrapper_integration]] — 8-step
  procedure (confirm-software-surface + pin → author `feedback/CLAUDE.md` → consent record default-OFF → seed empty
  capture store + tighten-only overrides → root Standing Order → verify privacy spine → downstream-safety → register
  consumer). Instantiates the spec's `federation_ref` schema **verbatim** (consume-by-reference, not restated).
- **Files**: `how/skills/skill_telemetry_wrapper_integration.md`

### 2. Self-demonstration (documented exemption)
- **Status**: completed
- **Session**: session_2026_06_20_feedback_loop_gate_p2
- **Description**: `aDNA.aDNA` (Rosetta) is a documentation/standard vault with **no installable software surface**, so
  it is not a `<Software>.aDNA` consumer and carries **no live `feedback/` wrapper** — a live one would be the exact
  ambient-channel anti-pattern the design forbids. SO#8 self-reference is satisfied upstream: the
  [[what/patterns/pattern_software_graph_telemetry_feedback|pattern]] uses this vault as its worked example twice over
  (the VISION compass + the `iii/` wrapper). Exemption recorded in the skill's § Self-Demonstration Exemption.
- **Depends on**: 1

### 3. Register the skill
- **Status**: completed
- **Session**: session_2026_06_20_feedback_loop_gate_p2
- **Description**: Added `skill_telemetry_wrapper_integration` to the Skills-inventory table in `aDNA.aDNA/CLAUDE.md`.
- **Files**: `CLAUDE.md`
- **Depends on**: 1

## Campaign Context

### Previous Mission Outputs
- M1: the pattern + spec (`federation_ref` schema + §AAR sub-pattern) the skill instantiates.

### Next Mission Inputs
- M3 (P3, **gated**) structures the cross-vault consumer missions (Bitwarden + Keystone native, Warp staged memo,
  Lighthouse, rollout backlog) — **not executed this session**; awaits the P2→P3 operator gate.

## Completion Summary

The integration skill ships `active`, registered in the inventory, modeled faithfully on `skill_iii_setup`, and
instantiates the normative spec by reference. Self-demonstration is satisfied by a recorded exemption. P2 is complete;
the campaign parks at the P2→P3 human gate.

## AAR

- **Worked**: Modeling the skill on `skill_iii_setup` meant the 8 steps wrote themselves — the `feedback/` wrapper is
  a structural twin of `iii/`, so an operator who has done one recognizes the other immediately.
- **Didn't**: The "self-demonstration" Standing Order assumes the artifact's concept *applies* to this vault; for an
  install skill aimed at software vaults, it doesn't — the honest answer was an exemption, which is slightly awkward
  against SO#8's literal wording.
- **Finding**: A skill that *instantiates a spec by reference* (rather than restating its schema) is itself a live
  demonstration of the pattern's consume-by-reference discipline — the medium reinforces the message.
- **Change**: SO#8 should explicitly admit a "documented exemption" branch for artifacts whose concept doesn't apply to
  a docs/standard vault — candidate `idea_upstream_*` (self-reference exemptions).
- **Follow-up**: P2→P3 operator gate. P3 (cross-vault structuring) is out of scope until cleared.
