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
token_budget_estimated: "~300–450 kT across 2 sessions: 2-scorer re-score + reconciliation + Decade-2 re-plan artifact + gate re-baseline, PLUS the carried P2.5 O0b/O0c (clean-machine TTFS run + cold-read re-test + variant-B transcript). Raised from ~200–300 kT / 1 session when the two objectives were re-homed, 2026-08-19 (ADR-016/SO#11 — a budget that no longer matches its scope is a drifted number)"
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
  - "TTFS measured on a clean machine and recorded with its conditions attached (carried from P2.5 criterion 4); R-34/R-63 discharged by that measurement or revised down — never by copy"
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
| **O0b** | **TTFS instrument + clean-machine run** *(carried from P2.5)* — execute `artifacts/p2_5/ttfs_runbook_fresh_account.md` on a fresh user account; produce the measured TTFS **and** the real session transcript as its by-product | run record + transcript | ⛩ operator (machine) |
| **O0c** | **Synthetic cold-read re-test of the new funnel + D3 re-score** *(carried from P2.5)*; fold the O0b transcript into `/get-started/` as the labelled gap's replacement (variant B) | evidence + page change | — |
| O1 | Two fresh-context scorers + reconciliation vs baseline | scorecard + deltas | — |
| O2 | Decade-2 re-plan (`p2_replan.md`): keep/rescope/merge/drop per P3–P5 mission, with budgets | re-plan | ⛩ operator (DP6) |
| O3 | Gate re-baseline + III cycle-series entry; AAR | records + AAR | — |

## Constraints

Scorer isolation identical to baseline (fresh contexts, evidence-pack-only, sheets committed pre-reconciliation); deltas must cite the mission that moved them (attribution, not vibes).

## Definition of done

The operator ratifies a Decade-2 plan grounded in measured deltas; the provisional flags resolve.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + `evidence/scoring/reconciliation.md`. Execute O0–O1, author O2, halt at DP6 for ratification.

## Carried in from P2.5 (2026-08-19)

P2.5 closed at O1 with **3 of 4** acceptance criteria met. Its criterion 4 — the TTFS instrument plus
one recorded clean-machine run — was never measured, and lands here as **O0b/O0c**.

**Why here and not a new mission.** The charter's `mission_count: 27` sits inside the ratified §7.7
statement; amending ratified text is the operator's act, not an agent's. P2.6 is also the better home
on the merits: it is the mission that *scores* D3, whose baseline 3 is explicitly provisional *"no
TTFS run"*. Folding the measurement into the measuring mission means D3 stops being provisional by
construction instead of being re-scored provisionally a second time.

**What is waiting for it**: `artifacts/p2_5/ttfs_instrument_kit.md` (the reusable protocol, authored
but **never exercised** — it is proven when O0b runs it) and
`artifacts/p2_5/ttfs_runbook_fresh_account.md` (this node's concrete instantiation). Account creation
is an operator action; O0b is machine-gated exactly as P2.5's O2 was.

**Standing constraint**: R-34 (`/network`) and R-63 (`/get-started`) both claim "about five minutes"
and are registered `[A]`/S4 with no recorded run. They are discharged by O0b's measurement **or
revised down then** — never by copy, and never by a runbook.

## Progress

*(at execution)*

## AAR (SO#5)

*(before completed)*
