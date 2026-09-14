---
plan_id: mission_garnier_p6_4_graph_updates
type: plan
title: Prepare the graph-update wave
owner: stanley
status: queued
campaign_id: campaign_garnier
campaign: campaign_garnier
campaign_phase: 6
campaign_mission_number: 24
mission_class: closeout
created: '2026-09-14'
updated: '2026-09-14'
last_edited_by: agent_codex
tags:
- plan
- campaign
- garnier
executor_tier: opus
executor_runtime: codex
token_budget_estimated: 57
token_budget_unit: kT_content_load
estimated_sessions: 1
calibrated_sessions: 1
estimation_class: governance-tight
decade_status: provisional_until_DP4
vitruvius_dimensions:
- D7
- D10
webforge_patterns:
- how/federation/webforge/
patterns_to_author: []
depends_on:
- mission_garnier_p6_3_graduation
blocks:
- mission_garnier_p6_5_followup
acceptance_criteria:
- artifacts/p6/graph_update_ledger.md and staged memos is complete and internally
  consistent
- Every required graph has a row, each actionable row has a concrete proposed diff
  or memo and destination, and no peer tree was modified.
- Protected paths, gates, accessibility consequences and AAR are verified
verification_method:
- surface: artifacts/p6/graph_update_ledger.md and staged memos
  method: Inspect artifact against objectives and linked evidence
  red_test: An omitted graph, unowned row or direct peer-write proposal must fail
    ledger review.
- surface: For every named related graph, record concrete lessons, changes, owners,
    gates and local-versus-memo disposition. Stage all peer memos inside this vault;
    deliver none without authority.
  method: Every required graph has a row, each actionable row has a concrete proposed
    diff or memo and destination, and no peer tree was modified.
  red_test: An omitted graph, unowned row or direct peer-write proposal must fail
    ledger review.
- surface: git diff, capture/evidence manifest and mission AAR
  method: Explicit-path scope review and applicable protected-invariant checks
  red_test: Introduce a reserved-path change in a disposable diff; scope review rejects
    it
human_gate: DP8 phase exit; DP1 charter prerequisite
verification_surface: agent
verification_check_set: custom
---

# P6.4 — Prepare the graph-update wave

> **Read cold.** Act as Rosetta's executor for Stanley through Berthier. Read root and [[../CLAUDE|campaign governance]], [[campaign_garnier]], [[instrument_boundary]] and this mission before claiming a session. Status queued is not authorization to cross a human gate.

## Why

[I] For every named related graph, record concrete lessons, changes, owners, gates and local-versus-memo disposition. Stage all peer memos inside this vault; deliver none without authority.

## Where we are

[D] Genesis on 2026-09-14 built 229 pages and 226 twins; full gates passed 698 with one existing skip, container snapshots 26. Live identity and limitations are in [[situation_report]]. These are dated starting evidence, not a promise that the tree is unchanged when this mission opens. Refresh the relevant pin before work. Dependencies: [[mission_garnier_p6_3_graduation]].

## Scope

For every named related graph, record concrete lessons, changes, owners, gates and local-versus-memo disposition. Stage all peer memos inside this vault; deliver none without authority.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| 1 | Establish scope, pins and method before mutation | Input manifest and disposable negative control | ⛩ prior phase and authority confirmed |
| 2 | Deliver the bounded mission | artifacts/p6/graph_update_ledger.md and staged memos | P6.4 acceptance review |
| 3 | Reach the actual surface, reconcile and close | Evidence, SITREP, five-line AAR | ⛩ phase exit remains human |

## Constraints & gates

[I] Any aesthetic adjustment must preserve semantic reading order, body readability, focus visibility, reduced-motion parity and text equivalents, verified on the touched routes at six viewports in both themes. If the mission has no aesthetic change, record not applicable with its scope; do not imply a visual pass.

No edits to `site/src/data/vaults.json`, `.adna/`, HAUSSMANN/VITRINE files or peer vaults. Registry requests go to Hestia by staged memo. Missing provider patterns go to Vitruvius through the consumer wrapper, never a local fork. No publish or push from an implementation or measurement mission. P5.3 prepares the separate publication decision. Respect G4/counsel, the panel freeze, ADR-048/049/053/057/059 and Operations ADR-025 §D5. Check the single-writer lease before each shared-file mutation.

## Goal and exit gate

Every required graph has a row, each actionable row has a concrete proposed diff or memo and destination, and no peer tree was modified.

## Verification and convention-13 pair audit

V1 reads the named output and reconciles it with objective 2. V2 reaches the stated execution surface: Every required graph has a row, each actionable row has a concrete proposed diff or memo and destination, and no peer tree was modified. V3 reads the actual diff, evidence manifest and AAR for scope/closure. C1 is complete output, C2 is behavioral/evidence acceptance, C3 is protection and closure.

Checked pairs: V1×C1 yes, all named outputs; V1×C2 insufficient alone, requires V2; V1×C3 insufficient alone, requires V3. V2×C1 supplies evidence but does not prove document completeness; V2×C2 yes, the named surface is the claimed surface; V2×C3 checks applicable runtime protections but cannot establish authorization. V3×C1 verifies listed paths exist, not their truth; V3×C2 cannot replace execution; V3×C3 yes, reserved-path diff plus gate/AAR records. The three methods together cover all three criteria. This avoids accepting a green source scan as a rendered or human result.

Negative control to run before trusting V2: **An omitted graph, unowned row or direct peer-write proposal must fail ledger review.** V1 must reject an output with one promised section removed; V3 must reject a disposable reserved-path diff. Controls are isolated, never planted into production or peer files.

## Budget

[I] ADR-016: 23 kT transition + 34 kT bounded work = **57 kT content-load**, one context window proposed. Re-estimate on entry. At a projected >80 kT, split or narrow at a recorded gate; never mark unreviewed pages reviewed. API-billing actuals are a separate measurement, not inferred from this figure.

## Definition of done

All three objectives are satisfied, the named artifacts exist with provenance and linked evidence, V1/V2/V3 and their controls have been run on the declared surfaces, the touched-site checks and accessibility consequences are recorded, no protected path or prerequisite was bypassed, and the session SITREP, next prompt and five-line AAR are filed. A human-only activity remains owed until a human actually performs it. The mission may recommend phase exit but cannot sign it.

## Campaign Context

Previous outputs: [[mission_garnier_p6_3_graduation]]. Next inputs: [[mission_garnier_p6_5_followup]]. Detailed phases and risks are in [[campaign_architecture]].

## Progress

Queued; no campaign work executed during genesis. No acceptance criterion is claimed met by authoring this file.

## Completion Summary

Deliverables: pending. Descoped: none approved. Key findings: pending execution. Scope changes: none approved.

## AAR

- **Worked:** pending execution.
- **Did not:** pending execution.
- **Finding:** pending execution.
- **Change:** pending execution.
- **Follow-up:** pending execution.
