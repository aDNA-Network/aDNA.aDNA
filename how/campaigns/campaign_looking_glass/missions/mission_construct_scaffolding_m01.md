---
plan_id: mission_construct_scaffolding
type: plan
title: "Construct — build the III scaffolding + capture baselines"
owner: stanley
status: planned
campaign_id: campaign_looking_glass
campaign_phase: 1
campaign_mission_number: 1
mission_class: implementation
token_budget_estimated: "~140 kT (80-200 tier): build net-new pack + persona + 2 gates + baselines + slice enumeration; content-novel"
created: 2026-06-27
updated: 2026-06-27
last_edited_by: agent_stanley
tags: [plan, campaign, iii_campaign_pilot, construct, looking_glass]
---

# Mission: Construct — build the III scaffolding + capture baselines

**Campaign**: [[how/campaigns/campaign_looking_glass/campaign_looking_glass|campaign_looking_glass]]
**Phase**: 1 — Construct (build the III)
**Mission**: 1 of 6 (M0–M5)

## Goal

Turn the proposed [[how/campaigns/campaign_looking_glass/artifacts/scaffolding_spec|scaffolding spec]] into a *built, ready-to-run* III: confirm the pack/persona selection, author what's net-new, extend the gate harness, and capture baselines for both subjects. This is the **novel step** the III-campaign pattern formalizes — its quality gates the whole review.

## Exit Gate (= Decision Point 2)

The scaffolding (packs · persona roster · process · measurement model) is built and good enough to drive the review, and baselines for Subject A (site) + Subject B (site-backing context slice) are captured. Operator GO at DP2.

## Objectives

### 1. Confirm pack + persona selection
- **Status**: planned
- **Description**: Read the 5 reuse packs + the 5 core reviewer files in full; confirm or adjust the [[how/campaigns/campaign_looking_glass/artifacts/scaffolding_spec|spec]]'s roster against the live assets.
- **Files**: scaffolding_spec.md (update Open-items §1).
- **Depends on**: none.

### 2. Author the net-new `representation_coherence` pack
- **Status**: planned
- **Description**: Claim-tracing procedure · currency/drift checks · structural-fidelity mapping · the "does justice" rubric. Author **campaign-local** under `artifacts/` (NOT in III.aDNA — Standing Order 3); instrument as a graduation candidate.
- **Files**: `artifacts/packs/pack_representation_coherence.md`.
- **Depends on**: 1.

### 3. Author the net-new claim-tracer persona
- **Status**: planned
- **Description**: The fidelity reviewer that traces each site claim → vault source (the gap no existing persona fills). Author campaign-local; graduation candidate.
- **Files**: `artifacts/personas/reviewer_claim_tracer.md`.
- **Depends on**: 1.

### 4. Implement + wire the representation-coherence gates
- **Status**: planned
- **Description**: The claim-trace gate + the currency gate (read-only diff vs. vault ground-truth; **never `sync:vaults`**), building on `gate-14-single-source` + `gate-15-credibility`. Portable-first; respect `site/tests/gates/` conventions.
- **Files**: `site/tests/gates/` (new spec[s]).
- **Depends on**: 2.

### 5. Enumerate the site-backing slice
- **Status**: planned
- **Description**: Precisely list the `what/` files + pt19-derived data the site surfaces/claims about (the Subject-B boundary).
- **Files**: `artifacts/site_backing_slice.md`.
- **Depends on**: none.

### 6. Capture baselines + set thresholds
- **Status**: planned
- **Description**: Snapshot site claim inventory · 281-gate green count · Lighthouse/axe · surfaced-context 10-dim compliance · persona baseline. Set the A4 persona + B3 compliance thresholds numerically.
- **Files**: `artifacts/baseline_snapshot.md`.
- **Depends on**: 3, 4, 5.

### 7. Coordination heads-up (deconflict the Websites carve)
- **Status**: planned
- **Description**: Stage a courtesy coord memo to `Websites.aDNA` / Hestia that Operation Looking Glass is `active` and will touch the live site at M4 — so the in-flight Websites carve (B→C→A) and this pilot deconflict early. Confirm who owns the deploy pipeline post-[[what/decisions/adr_041_build_scale_role_graph_subtype|ADR-041]].
- **Files**: `who/coordination/coord_<date>_rosetta_to_vitruvius_looking_glass_active.md`.
- **Depends on**: none.

### 8. Instrumentation ledger
- **Status**: planned
- **Description**: Create the pilot's instrumentation ledger — the 4 logs (scaffolding-needed · reusable-vs-bespoke · III-primitive-gaps · measurement-model retro) the terminal AAR extracts the pattern from. Append through M2–M5.
- **Files**: `artifacts/instrumentation_log.md`.
- **Depends on**: none.

## Campaign Context

### Previous Mission Outputs
- M0 (planning) produced the charter + this scaffolding spec (proposal altitude) + the measurement model.

### Next Mission Inputs
- M2 (Inspect) runs the built scaffolding against the captured baselines.

## Notes

- **pt19 / Websites carve**: read-only on `vaults.json`/`install_truth.json`; coordinate any `site/` touch by memo.
- **Instrument**: log every reuse-vs-bespoke decision + any scaffolding gap (charter §Pilot instrumentation; ledger = Objective 8).
- **Graceful degradation (lean)**: if the full `representation_coherence` pack proves heavy, fall back to a minimal-viable claim-fidelity checklist — DP2 still gates "good enough to drive the review," not "complete."

## AAR

*Mandatory before `status: completed`. See `how/templates/template_aar_lightweight.md`.*
