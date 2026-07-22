---
plan_id: mission_refit_6_dev_readiness
type: plan
title: "Refit M6 — Dev-readiness: contributor pathway complete (+ graph-edge stretch)"
owner: stanley
status: planned            # activates post-G1 (DP8); may run pre-G2 (independent of the roadmap ruling)
campaign_id: campaign_refit
campaign_phase: 4
campaign_mission_number: 6
mission_class: implementation
executor_tier: opus        # public-repo surfaces = highest blast radius in the campaign
token_budget_estimated: "~80 kT + 40 stretch (audit 3 surfaces · author CONTRIBUTING/process docs · stage image-side · E2 edge derivation)"
created: 2026-07-21
updated: 2026-07-21
last_edited_by: agent_rosetta
tags: [plan, campaign, refit, dev_readiness, contributing, community, graph_edges]
---

# Mission: Refit M6 — Dev-readiness

**Campaign**: [[campaign_refit]] · **Phase**: P4 — Ready · **Mission**: 6 of 6

## Goal

Close the "ready for development" gap: a would-be contributor arriving at either public repo
(`aDNA-Network/aDNA` image · `aDNA-Network/aDNA.aDNA` dev vault) or the site's community/get-started surfaces
finds a complete pathway — how to propose a change to the standard, how to contribute a vault/pattern/idea,
where discussion happens — with anything image-side staged DE-LINKed for the next release, never edited direct.

## Exit Gate

Contributor-pathway audit artifact complete (per-surface: present / gap / filled) + dev-vault-side gaps filled +
image-side fills staged DE-LINKed in `artifacts/` + site gates green if site surfaces changed + (stretch) E2
edges derived data-driven with gate-21/22 green — or E2 explicitly cut with a line of reasoning.

## Objectives

### 1. E1a — Audit the three surfaces
- **Status**: planned
- **Description**: Audit contributor-pathway coverage across: (a) `aDNA-Network/aDNA` (image repo — README,
  CONTRIBUTING?, issue templates?, change-proposal process?); (b) `aDNA-Network/aDNA.aDNA` (this repo's public
  mirror — same set); (c) the site (`/community`, `/get-started`, `/commons` — does any surface tell a
  developer HOW to propose a change to the standard? The upstream-contribution skill exists vault-side
  [[skill_upstream_contribution]] — is it surfaced publicly?). Produce the audit artifact with a per-surface
  verdict.
- **Files**: `how/campaigns/campaign_refit/artifacts/dev_readiness_audit.md`
- **Depends on**: none

### 2. E1b — Fill the gaps
- **Status**: planned
- **Description**: Dev-vault-side: author what's missing (e.g. `CONTRIBUTING.md` for `aDNA.aDNA`; a
  change-proposal ("propose an upstream idea") doc; site copy edits). **Image-side: staged DE-LINKed artifacts
  only** (hard constraint 5) — they ship via the successor release campaign. Site edits ride the gates
  (gate-24 copy; Movement-Skeptic honesty — no invented community).
- **Files**: `CONTRIBUTING.md` (dev vault) · site community/get-started surfaces · staged image-side artifacts
  in `artifacts/`
- **Depends on**: 1

### 3. E2 (stretch, per DP8) — Graph-edge enrichment
- **Status**: planned
- **Description**: Derive additional vault-graph edges from `federation_ref` blocks across the fleet in
  `scripts/build_vaults_data.mjs` (current graph: 14 edges / 73 vaults). **Data-driven only** (no hand-authored
  edges); regen; gate-21 + gate-22 (graph SSR) green; visual T0 spot-check of `/vaults/graph`. **First cut on
  overrun.**
- **Files**: `scripts/build_vaults_data.mjs` · `site/src/data/vaults.json` (+ graph siblings)
- **Depends on**: M2 complete (baseline @73)

## Campaign Context

**Previous mission outputs**: M2's @73 baseline; M5's roadmap (E1 docs should point contributors at the *real*
proposal channel the roadmap formalizes).
**Next mission inputs**: P5 close — this mission's audit artifact is the "ready for development" evidence row.

## Notes

Highest-blast-radius mission: public-repo surface changes stay staged-not-pushed; the push (and any deploy) is
a G3 operator election.

## Completion Summary

*Fill out when setting `status: completed`.*

## AAR

*Mandatory before `status: completed` (SO-5). Include `token_budget_actual` (SO-11).*

- **Worked**:
- **Didn't**:
- **Finding**:
- **Change**:
- **Follow-up**:
