---
plan_id: mission_cross_vault_structuring_m03
type: plan
title: "Cross-Vault Integration Missions (Structure; do not execute)"
owner: stanley
status: completed
campaign_id: campaign_feedback_loop
campaign_phase: 3
campaign_mission_number: 3
mission_class: implementation
token_budget_estimated: 45
token_budget_actual: ~40
created: 2026-06-21
updated: 2026-06-21
last_edited_by: agent_stanley
tags: [plan, campaign, feedback_loop]
---

# Mission: Cross-Vault Integration Missions (Structure)

**Campaign**: [[how/campaigns/campaign_feedback_loop/campaign_feedback_loop|campaign_feedback_loop]]
**Phase**: 3 — Cross-Vault Integration Missions
**Mission**: 3 of 5

## Goal

Structure how consumers adopt the `feedback/` wrapper — as staged coord memos + one enumerated rollout backlog —
**without writing into any other vault** (Standing Rule 10). All outputs live in aDNA.aDNA; cross-vault touches are
`staged_ack_pending`, non-blocking.

> **Interlock note (load-bearing).** The sibling campaign Operation Keystone bakes `feedback/` into its
> `template_software_graph_stub` (one of four standard wrappers), so the cohort adopts `feedback/` **natively** via
> the template. This mission therefore does **not** author per-graph wiring — it records the interlock and structures
> the special cases + rollout. (Keystone's WS-D work was committed as `b1c2403` and read for the cohort roster.)

## Exit Gate

Every cross-vault touch is a staged coord memo or one enumerated backlog; zero writes into other vaults' trees. **Met.**

## Objectives

### 1. Keystone interlock note
- **Status**: completed · **Session**: session_2026_06_21_feedback_loop_p3_close
- **File**: `who/coordination/coord_2026_06_20_feedback_loop_keystone_interlock.md` — the seam between WS-A (owns the
  `feedback/` contract) and WS-D (owns the cohort + template that carries it); conformance ask that the template
  instantiate the spec's `federation_ref` by reference.

### 2. Warp staged coord memo (Decision Point #2)
- **Status**: completed · **File**: `who/coordination/coord_2026_06_20_feedback_loop_to_escoffier.md`
  (`staged_ack_pending`) — Warp (ENRICH, genesis P3b) adopts `feedback/` per the skill; default-OFF, names-only.
  **Operator clears this draft before placement** (DP#2).

### 3. Lighthouse coord note
- **Status**: completed · **File**: `who/coordination/coord_2026_06_20_feedback_loop_to_lighthouse.md`
  (`staged_ack_pending`) — Lighthouse *composes* cohort graphs that already carry `feedback/`; its composition
  manifest should surface each member's consent posture (no own wrapper — it is a composer).

### 4. Rollout backlog
- **Status**: completed · **File**: `how/backlog/idea_telemetry_wrapper_rollout.md` — the single enumerated
  `feedback/`-adoption plan across the cohort (SEED via template; ENRICH via skill), complementary to Keystone's
  four-wrapper retrofit backlog. Prove on Lab.aDNA first.

## Completion Summary

P3 structured: 1 interlock note + 2 staged cross-vault memos (Warp, Lighthouse) + 1 rollout backlog. Zero writes into
other vaults. DP#2's Warp memo is staged, awaiting operator clearance to place (non-blocking). Campaign advances to P4
(close).

## AAR

- **Worked**: The Keystone de-confliction ledger made P3 nearly mechanical — the cohort roster + dispositions were
  already enumerated, so feedback_loop only had to reference the delivery mechanism (the template) and stage the
  special cases.
- **Didn't**: Keystone's `b1c2403` landed an overlapping retrofit backlog (`idea_keystone_existing_graph_retrofit`); I
  had to scope my rollout backlog as `feedback/`-specific and *complementary*, discovered only by reading the committed
  Keystone work mid-session.
- **Finding**: When a sibling campaign bakes your wrapper into its template, your "cross-vault rollout" collapses to an
  interlock note + special-case memos — the template **is** the rollout for the SEED set.
- **Change**: Record cross-campaign wrapper interlocks as an explicit interlock memo (done) so neither campaign
  re-authors the other's contract.
- **Follow-up**: P4 close (this session). The 3 staged memos await operator placement (non-blocking).
