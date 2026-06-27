---
plan_id: mission_improve_remeasure
type: plan
title: "Improve + re-measure — execute the bounded set; validate; stage deploy"
owner: stanley
status: planned
campaign_id: campaign_looking_glass
campaign_phase: 3
campaign_mission_number: 4
mission_class: implementation
token_budget_estimated: "~130 kT (80-200 tier): execute bounded fixes both sides + re-measure + stage deploy"
created: 2026-06-27
updated: 2026-06-27
last_edited_by: agent_stanley
tags: [plan, campaign, iii_campaign_pilot, improve, looking_glass]
---

# Mission: Improve + re-measure

**Campaign**: [[how/campaigns/campaign_looking_glass/campaign_looking_glass|campaign_looking_glass]]
**Phase**: 3 — Improve (act + extract)
**Mission**: 4 of 6 (M0–M5)

## Goal

Execute the approved [[how/campaigns/campaign_looking_glass/missions/mission_introspect_plan_m03|bounded improvement set]] on website + site-backing context, re-measure against baselines, validate no regressions, and stage the site deploy through the gated, pt19-respecting path.

## Exit Gate

Improvements committed + validated (gate harness ≥ baseline, claim-trace clean, no regressions on any tier); site deploy **staged** through the gated path (operator-approved, sequenced around the Websites carve).

## Objectives

### 1. Site-side fixes (Subject A)
- **Status**: planned
- **Description**: Execute the approved site corrections. Respect the Websites carve; coordinate `site/` touches by memo; never `sync:vaults`.
- **Files**: `site/` (per plan).
- **Depends on**: none.

### 2. Source-side fixes (Subject B)
- **Status**: planned
- **Description**: Fix drift at the source — the `what/` files the site mirrors. Honor Standing Orders 7/8/9/10 (dual-audience, self-reference, cite spec, cross-link).
- **Files**: `what/` (per plan).
- **Depends on**: none.

### 3. Re-measure + validate
- **Status**: planned
- **Description**: Re-run Tier 1 + the claim-trace audit; confirm thresholds met (A1–A4, B1–B3) vs. baseline; catch regressions.
- **Files**: `artifacts/remeasure_snapshot.md`.
- **Depends on**: 1, 2.

### 4. Stage deploy (gated)
- **Status**: planned
- **Description**: Stage the site deploy via the pt19-respecting path; operator-approved; sequenced (B→C→A). Do not deploy out of sequence.
- **Files**: deploy staging notes; coord memo to Websites/Hestia if needed.
- **Depends on**: 3.

### 5. Live-verify (post-deploy, read-only)
- **Status**: planned
- **Description**: Once the gated deploy lands, confirm **read-only** that live adna.network reflects the improvements (claims corrected; no regressions); respect pt19 (never `sync:vaults`). If deploy is deferred past this mission, carry the live-verify to M5.
- **Files**: `artifacts/remeasure_snapshot.md` (live-verify section).
- **Depends on**: 4.

## Campaign Context

### Previous Mission Outputs
- M3 produced the approved, ranked improvement plan (DP3).

### Next Mission Inputs
- M5 (Closeout) files the campaign AAR + the III.aDNA handoff from the validated outcome.

## Notes

- **Deploy is operator-gated** and sequenced around `campaign_websites_genesis` (B→C→A); honor pt19.
- Any new untraceable/stale claim or dropped gate = regression → block close until resolved.

## AAR

*Mandatory before `status: completed`. See `how/templates/template_aar_lightweight.md`.*
