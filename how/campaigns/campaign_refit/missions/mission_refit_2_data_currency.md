---
plan_id: mission_refit_2_data_currency
type: plan
title: "Refit M2 — Data currency: registry @73, fixtures trued, schema ruling applied"
owner: stanley
status: completed          # EXECUTED in the chartering session 2026-07-21 (G1 "ratify + fire quick wins"); all 4 objectives done; 371/371 gates green; commit = the "Refit M2 (data currency)" commit
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
- **Status**: completed (2026-07-21, session_stanley_20260721_192321_refit_charter)
- **Description**: Run `npm run sync:vaults` (`scripts/build_vaults_data.mjs`) against Home's canonical
  `inventory_vaults.yaml` (re-read at run time — it may have moved past 73). Expect +3 (GOTFN, Datarooms,
  aiLP-Dataroom) −1 (DataRoom archived-absorbed) + note/persona fixes (Obsidian → Seshat; Lab → Jupyter).
  Verify count + edges in the output; commit **single-file** (`git add site/src/data/vaults.json` — plus
  `vaults_graph.mmd`/`subnetworks.json` ONLY if the script regenerates them with real deltas).
- **Files**: `site/src/data/vaults.json` (+ siblings if regenerated)
- **Depends on**: none (Hestia green-tested the mechanism 2026-07-21 then reverted; the regen is our lane)

### 2. A2 — Apply the DP1 schema ruling + reply to Hestia
- **Status**: completed (2026-07-21, session_stanley_20260721_192321_refit_charter)
- **Description**: Per DP1 (`tagline` canonical): annotate the `headline_mission` mentions in this vault's
  storyweave-era prose as retired/aliased (dated, in-place — do NOT re-open the campaign docs' substance), then
  send `coord_*_rosetta_to_hestia_registry_field_ruling.md`: canonical field = `card.tagline` (fallback `note`
  stays); authorize backfill ~46 missing cards + clean 3 stale (ComicForge, RareHarnessOld, science_stanley) +
  add the zeta.aDNA note. Note the regen cadence answer if the operator ruled it at G1.
- **Files**: `who/coordination/coord_*_rosetta_to_hestia_registry_field_ruling.md` · dated annotations in
  storyweave prose mentioning `headline_mission`
- **Depends on**: G1 (DP1)

### 3. A3 — G20 claim-trace fixture 54→73
- **Status**: completed (2026-07-21, session_stanley_20260721_192321_refit_charter)
- **Description**: Refresh the pinned `vault_count` in the G20 fixture
  (`site/tests/gates/fixtures/claim_trace_manifest.json`) to the post-regen count; carry the
  `source_inventory_sha` + a dated note (same discipline as the prior 54→68 note). Run gate-20 to confirm.
- **Files**: `site/tests/gates/fixtures/claim_trace_manifest.json`
- **Depends on**: 1

### 4. A4 — `verified_paths` re-check + close
- **Status**: completed (2026-07-21, session_stanley_20260721_192321_refit_charter)
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

### Deliverables
- `vaults.json` 68→73 vaults / 14 edges (`source_inventory_sha 59058a4ec1e65d3c`) + real-delta `vaults_graph.mmd`;
  `subnetworks.json` date-only churn restored-not-committed (the known gotcha).
- DP1 applied: `VaultCard.astro` purpose chain `headline_mission||note` → **`tagline||note`** (the ruling made
  renderable — Home's backfill now surfaces on next regen with zero further site change); Hestia reply memo
  (`coord_2026_07_21_rosetta_to_hestia_registry_field_ruling.md`) with backfill authorization.
- G20 fixture 68→73 (Ring-A refresh discipline, owner untouched, new sha recorded).
- `REQUIRED_PATHS` +2 v8.0 paths (`template_home_claude.md` · `template_node_adna_exemplar`) →
  `install_truth.json` **6/6 verified @ `template_sha 3051a2d`** (v8.8 sync) — closes pt19 §3 Ask-2 AND the
  stale-SHA watch item (the fixture was carrying `74cb761`, the frozen-legacy SHA — older than the watch item
  believed).
- Verification: **371/371 `npm run test:gates` green** (gate-20 claim-trace + gate-21 currency pass at 73).

### Descoped
- Prose annotation of `headline_mission` mentions in closed-campaign docs: ruled **historical-record, leave
  as-is** (same policy as stale paths in immutable ADRs — the QA-clean precedent). The retirement is recorded
  where it binds: the ruling record, the consumer code comment, and the Hestia memo. The `[slug].astro`
  optional `headline_mission` block (renders only-if-present; 0/73 = never) rides M3's site pass for removal.

### Key Findings
- The wiring was **split-brained**: the build projected `card.tagline` AND `card.headline_mission`; the card
  component preferred `headline_mission` (never populated) — so even a completed tagline backfill would not
  have rendered. The DP1 ruling surfaced a latent defect neither side had seen whole.
- `install_truth.json` on disk predated even v8.7 (`template_sha 74cb761` = the frozen legacy) — fixture-
  staleness watch items understate; regen-at-next-touch rules work better than dated observations.

## AAR

- **Worked**: Hestia's green spot-run + revert made the regen a zero-surprise single-file commit; ruling-first
  (G1) then execute made every edit mechanical.
- **Didn't**: the mission spec assumed annotation work in storyweave prose that historical-record policy
  correctly descopes — spec'd before checking where the field actually lived (2 site components, not prose).
- **Finding**: the split-brained wiring (build writes `tagline`, card reads `headline_mission`) — a schema
  ruling without a consumer-trace is incomplete; always trace field → projection → render before ruling.
- **Change**: M5's roadmap should consider a registry-regen cadence rule (the site sat 2 refreshes behind
  because consumption had no trigger).
- **Follow-up**: `[slug].astro` dead `headline_mission` block removal → M3; Home backfill lands externally →
  regen on Hestia's flag. `token_budget_actual`: ~40 kT (under the ~50 estimate; pre-verified mechanism).
