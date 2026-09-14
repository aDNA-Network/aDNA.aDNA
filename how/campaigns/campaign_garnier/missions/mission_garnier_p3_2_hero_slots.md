---
plan_id: mission_garnier_p3_2_hero_slots
type: plan
title: Craft the hero and illustration slots
owner: stanley
status: queued
campaign_id: campaign_garnier
campaign: campaign_garnier
campaign_phase: 3
campaign_mission_number: 12
mission_class: implementation
created: '2026-09-14'
updated: '2026-09-14'
last_edited_by: agent_codex
tags:
- plan
- campaign
- garnier
executor_tier: opus
executor_runtime: codex
token_budget_estimated: 70
token_budget_unit: kT_content_load
estimated_sessions: 1
calibrated_sessions: 1
estimation_class: content-novel
decade_status: provisional_until_DP4
vitruvius_dimensions:
- D1
- D5
- D11
webforge_patterns:
- how/federation/webforge/
patterns_to_author:
- five-slot responsive art composition
depends_on:
- mission_garnier_p3_1_design_system
blocks:
- mission_garnier_p3_3_diagram_code
acceptance_criteria:
- slot_contact_sheet.md and asset provenance ledger is complete and internally consistent
- Inspect all six viewports in both themes, at 200/400% reflow, with art disabled;
  the same mechanism and task remain available as text.
- Protected paths, gates, accessibility consequences and AAR are verified
verification_method:
- surface: slot_contact_sheet.md and asset provenance ledger
  method: Inspect artifact against objectives and linked evidence
  red_test: A deliberately cropped key label or missing meaningful alt must fail review;
    decorative alt remains empty where justified.
- surface: Apply the ratified hierarchy to home and the five approved illustration
    slots. Abstract-only generated assets if authorized; no fabricated people, institutions
    or implied deployments. Preserve origin/credit and alt decisions.
  method: Inspect all six viewports in both themes, at 200/400% reflow, with art disabled;
    the same mechanism and task remain available as text.
  red_test: A deliberately cropped key label or missing meaningful alt must fail review;
    decorative alt remains empty where justified.
- surface: git diff, capture/evidence manifest and mission AAR
  method: Explicit-path scope review and applicable protected-invariant checks
  red_test: Introduce a reserved-path change in a disposable diff; scope review rejects
    it
human_gate: DP5 phase exit; DP1 charter prerequisite
verification_surface: agent
verification_check_set: custom
---

# P3.2 — Craft the hero and illustration slots

> **Read cold.** Act as Rosetta's executor for Stanley through Berthier. Read root and [[../CLAUDE|campaign governance]], [[campaign_garnier]], [[instrument_boundary]] and this mission before claiming a session. Status queued is not authorization to cross a human gate.

## Why

[I] Apply the ratified hierarchy to home and the five approved illustration slots. Abstract-only generated assets if authorized; no fabricated people, institutions or implied deployments. Preserve origin/credit and alt decisions.

## Where we are

[D] Genesis on 2026-09-14 built 229 pages and 226 twins; full gates passed 698 with one existing skip, container snapshots 26. Live identity and limitations are in [[situation_report]]. These are dated starting evidence, not a promise that the tree is unchanged when this mission opens. Refresh the relevant pin before work. Dependencies: [[mission_garnier_p3_1_design_system]].

## Scope

Apply the ratified hierarchy to home and the five approved illustration slots. Abstract-only generated assets if authorized; no fabricated people, institutions or implied deployments. Preserve origin/credit and alt decisions.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| 1 | Establish scope, pins and method before mutation | Input manifest and disposable negative control | ⛩ prior phase and authority confirmed |
| 2 | Deliver the bounded mission | slot_contact_sheet.md and asset provenance ledger | P3.2 acceptance review |
| 3 | Reach the actual surface, reconcile and close | Evidence, SITREP, five-line AAR | ⛩ phase exit remains human |

## Constraints & gates

[I] Any aesthetic adjustment must preserve semantic reading order, body readability, focus visibility, reduced-motion parity and text equivalents, verified on the touched routes at six viewports in both themes. If the mission has no aesthetic change, record not applicable with its scope; do not imply a visual pass.

No edits to `site/src/data/vaults.json`, `.adna/`, HAUSSMANN/VITRINE files or peer vaults. Registry requests go to Hestia by staged memo. Missing provider patterns go to Vitruvius through the consumer wrapper, never a local fork. No publish or push from an implementation or measurement mission. P5.3 prepares the separate publication decision. Respect G4/counsel, the panel freeze, ADR-048/049/053/057/059 and Operations ADR-025 §D5. Check the single-writer lease before each shared-file mutation.

## Goal and exit gate

Inspect all six viewports in both themes, at 200/400% reflow, with art disabled; the same mechanism and task remain available as text.

## Verification and convention-13 pair audit

V1 reads the named output and reconciles it with objective 2. V2 reaches the stated execution surface: Inspect all six viewports in both themes, at 200/400% reflow, with art disabled; the same mechanism and task remain available as text. V3 reads the actual diff, evidence manifest and AAR for scope/closure. C1 is complete output, C2 is behavioral/evidence acceptance, C3 is protection and closure.

Checked pairs: V1×C1 yes, all named outputs; V1×C2 insufficient alone, requires V2; V1×C3 insufficient alone, requires V3. V2×C1 supplies evidence but does not prove document completeness; V2×C2 yes, the named surface is the claimed surface; V2×C3 checks applicable runtime protections but cannot establish authorization. V3×C1 verifies listed paths exist, not their truth; V3×C2 cannot replace execution; V3×C3 yes, reserved-path diff plus gate/AAR records. The three methods together cover all three criteria. This avoids accepting a green source scan as a rendered or human result.

Negative control to run before trusting V2: **A deliberately cropped key label or missing meaningful alt must fail review; decorative alt remains empty where justified.** V1 must reject an output with one promised section removed; V3 must reject a disposable reserved-path diff. Controls are isolated, never planted into production or peer files.

## Budget

[I] ADR-016: 23 kT transition + 47 kT bounded work = **70 kT content-load**, one context window proposed. Re-estimate on entry. At a projected >80 kT, split or narrow at a recorded gate; never mark unreviewed pages reviewed. API-billing actuals are a separate measurement, not inferred from this figure.

## Definition of done

All three objectives are satisfied, the named artifacts exist with provenance and linked evidence, V1/V2/V3 and their controls have been run on the declared surfaces, the touched-site checks and accessibility consequences are recorded, no protected path or prerequisite was bypassed, and the session SITREP, next prompt and five-line AAR are filed. A human-only activity remains owed until a human actually performs it. The mission may recommend phase exit but cannot sign it.

## Campaign Context

Previous outputs: [[mission_garnier_p3_1_design_system]]. Next inputs: [[mission_garnier_p3_3_diagram_code]]. Detailed phases and risks are in [[campaign_architecture]].

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
