---
plan_id: mission_haussmann_p2_6_midscore
type: plan
title: "P2.6 — Mid-campaign re-score + Decade-2 recalibration"
campaign: campaign_haussmann
phase: P2
decade: 1
owner: stanley
status: queued
mission_class: verification
executor_tier: fable
token_budget_estimated: "~200–300 kT in 1 session: 2-scorer re-score + reconciliation + Decade-2 re-plan artifact + gate re-baseline (ADR-016)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["scoring/reconciliation.md (baseline 51.6 + method)", "campaign decade framing", "Storyweave replan precedent (p5_replan.md shape)"]
vitruvius_dimensions: [D1, D2, D3, D4, D5, D6, D7, D8, D9, D10, D11, D12]
decade_theme: credibility
webforge_patterns: []
patterns_to_author: []
depends_on: [mission_haussmann_p1_1_claim_purge, mission_haussmann_p1_2_state_of_network, mission_haussmann_p1_3_registry_truth, mission_haussmann_p1_4_mobile_integrity, mission_haussmann_p2_1_url_normalization, mission_haussmann_p2_2_ia_consolidation, mission_haussmann_p2_3_docs_freshness, mission_haussmann_p2_4_registry_redesign, mission_haussmann_p2_5_onboarding_paths]
blocks: [mission_haussmann_p3_1_md_twins, mission_haussmann_p3_2_registry_json, mission_haussmann_p3_3_mcp_server, mission_haussmann_p3_4_flux_integration, mission_haussmann_p3_5_proposal_process]
acceptance_criteria:
  - "Fresh two-scorer VITRUVIUS pass (same isolation protocol as baseline; new evidence captures) + reconciliation vs the 51.6 baseline, per-dimension deltas explained"
  - "Decade-2 re-plan artifact (p2_replan.md): P3–P5 mission scopes/budgets/order recalibrated on the deltas; provisional flags lifted only by operator ratification"
  - "Gate/audit route re-baseline complete (post-IA-change fixture truth)"
verification_method: "reconciled scorecard + operator ratification of the re-plan (Decade-2 activation gate)"
human_gate: true
tags: [plan, haussmann, p2, rescore, replan]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The measure-before-re-plan gate: Decade 2 opens on evidence, not momentum.

## Why this mission exists

The decade framing commits P0–P2 and holds P3–P5 provisional. This is the pivot: re-measure everything (the credibility stratum should have moved most — D6/D7/D8/D9 were the 2-band), re-derive what P3–P5 should be, and put the re-plan under operator ratification (Storyweave's proven pattern).

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Fresh evidence refresh (T0 captures of changed surfaces; claim-register re-verify; machine-eye delta) | evidence | — |
| O1 | Two fresh-context scorers + reconciliation vs baseline | scorecard + deltas | — |
| O2 | Decade-2 re-plan (`p2_replan.md`): keep/rescope/merge/drop per P3–P5 mission, with budgets | re-plan | ⛩ operator (DP6) |
| O3 | Gate re-baseline + III cycle-series entry; AAR | records + AAR | — |

## Constraints

Scorer isolation identical to baseline (fresh contexts, evidence-pack-only, sheets committed pre-reconciliation); deltas must cite the mission that moved them (attribution, not vibes).

## Definition of done

The operator ratifies a Decade-2 plan grounded in measured deltas; the provisional flags resolve.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + `evidence/scoring/reconciliation.md`. Execute O0–O1, author O2, halt at DP6 for ratification.

## Progress

*(at execution)*

## AAR (SO#5)

*(before completed)*
