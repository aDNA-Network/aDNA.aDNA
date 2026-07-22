---
plan_id: mission_refit_2_data_currency
type: plan
title: "Refit M2 — Data currency: registry @73, fixtures trued, schema ruling applied"
owner: stanley
status: planned            # activates post-G1 (DP1); mechanically green-tested by Hestia 2026-07-21
campaign_id: campaign_refit
campaign_phase: 1
campaign_mission_number: 2
mission_class: implementation
executor_tier: sonnet      # mechanical regen + fixture refresh; the judgment (DP1) is already ruled at G1
token_budget_estimated: "~50 kT (regen + gate run + 2 fixture touches + 1 reply memo + prose annotations)"
created: 2026-07-21
updated: 2026-07-21
last_edited_by: agent_rosetta
tags: [plan, campaign, refit, data_currency, registry, vaults_json, fixtures, hestia]
---

# Mission: Refit M2 — Data currency

**Campaign**: [[campaign_refit]] · **Phase**: P1 — Settle · **Mission**: 2 of 6

## Goal

Bring the site's registry data and its claim fixtures back to canonical truth: `vaults.json` 68→73 (the site is
two inventory refreshes behind), the G20 claim-trace fixture 54→73, the `verified_paths` re-check closed, and
the DP1 schema ruling applied + transmitted to Hestia so Home's ~46-card backfill can start.

## Exit Gate

`vaults.json` at 73 vaults, committed single-file, with `npm run test:gates` green (gate-21 count + gate-20
claim-trace pass against the refreshed fixture) + the Hestia reply memo committed + A4 closed with evidence.

## Objectives

### 1. A1 — Registry regen 68→73
- **Status**: planned
- **Description**: Run `npm run sync:vaults` (`scripts/build_vaults_data.mjs`) against Home's canonical
  `inventory_vaults.yaml` (re-read at run time — it may have moved past 73). Expect +3 (GOTFN, Datarooms,
  aiLP-Dataroom) −1 (DataRoom archived-absorbed) + note/persona fixes (Obsidian → Seshat; Lab → Jupyter).
  Verify count + edges in the output; commit **single-file** (`git add site/src/data/vaults.json` — plus
  `vaults_graph.mmd`/`subnetworks.json` ONLY if the script regenerates them with real deltas).
- **Files**: `site/src/data/vaults.json` (+ siblings if regenerated)
- **Depends on**: none (Hestia green-tested the mechanism 2026-07-21 then reverted; the regen is our lane)

### 2. A2 — Apply the DP1 schema ruling + reply to Hestia
- **Status**: planned
- **Description**: Per DP1 (`tagline` canonical): annotate the `headline_mission` mentions in this vault's
  storyweave-era prose as retired/aliased (dated, in-place — do NOT re-open the campaign docs' substance), then
  send `coord_*_rosetta_to_hestia_registry_field_ruling.md`: canonical field = `card.tagline` (fallback `note`
  stays); authorize backfill ~46 missing cards + clean 3 stale (ComicForge, RareHarnessOld, science_stanley) +
  add the zeta.aDNA note. Note the regen cadence answer if the operator ruled it at G1.
- **Files**: `who/coordination/coord_*_rosetta_to_hestia_registry_field_ruling.md` · dated annotations in
  storyweave prose mentioning `headline_mission`
- **Depends on**: G1 (DP1)

### 3. A3 — G20 claim-trace fixture 54→73
- **Status**: planned
- **Description**: Refresh the pinned `vault_count` in the G20 fixture
  (`site/tests/gates/fixtures/claim_trace_manifest.json`) to the post-regen count; carry the
  `source_inventory_sha` + a dated note (same discipline as the prior 54→68 note). Run gate-20 to confirm.
- **Files**: `site/tests/gates/fixtures/claim_trace_manifest.json`
- **Depends on**: 1

### 4. A4 — `verified_paths` re-check + close
- **Status**: planned
- **Description**: Re-check `REQUIRED_PATHS` in `scripts/build_install_truth.mjs` against the shipped v8.8
  image (2 post-freeze paths suspected; local `.adna` synced at `3051a2d`). If confirmed: update the generator,
  regen `install_truth.json` (this also clears the standing "install-truth fixture reflects a v8.7 SHA" watch
  item), run the install-truth gate. Close the pt19 §3 Ask-2 thread with a line in the Hestia reply memo.
- **Files**: `scripts/build_install_truth.mjs` · `site/src/data/install_truth.json`
- **Depends on**: none

## Campaign Context

**Previous mission outputs**: G1's DP1 ruling; Hestia's 2026-07-21 memo (the driver — read it first).
**Next mission inputs**: M3/M6 build on gates-green @73; Home's backfill (external) eventually enriches the
graph M6-E2 would extend.

## Notes

Risks: dirty-tree sweep (single-file staging is the rule) · canonical inventory moving between read and commit
(re-read at run time) · gate-21/20 must run immediately post-regen, not at session end.

## Completion Summary

*Fill out when setting `status: completed`.*

## AAR

*Mandatory before `status: completed` (SO-5). Include `token_budget_actual` (SO-11).*

- **Worked**:
- **Didn't**:
- **Finding**:
- **Change**:
- **Follow-up**:
