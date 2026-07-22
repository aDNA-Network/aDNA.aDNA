---
plan_id: mission_refit_5_vnext_triage
type: plan
title: "Refit M5 — vNext triage: 30 ideas dispositioned → roadmap → seeded release stub"
owner: stanley
status: planned            # activates post-G1; its OUTPUT is ratified at G2 (DP9)
campaign_id: campaign_refit
campaign_phase: 3
campaign_mission_number: 5
mission_class: reconnaissance
executor_tier: opus        # roadmap judgment; the 25-idea light sweep may drop to sonnet if split
token_budget_estimated: "~120 kT (5 ideas deep + ~25 light + roadmap + stub; two-pass seam = sanctioned session split)"
created: 2026-07-21
updated: 2026-07-21
last_edited_by: agent_rosetta
tags: [plan, campaign, refit, vnext, triage, backlog, roadmap, release_stub]
---

# Mission: Refit M5 — vNext triage

**Campaign**: [[campaign_refit]] · **Phase**: P3 — Chart · **Mission**: 5 of 6

## Goal

Convert the accumulated upstream-idea backlog (~30 `proposed` files) into a **vNext roadmap** the operator can
ratify at G2: every idea carries a disposition (adopt-for-vNext / decline-with-reason / defer-with-trigger),
the v8.9-governance-vs-v2.6-standard split is drawn, and the successor release campaign is staged as a stub —
so the next release fires from a chartered queue instead of a pile.

## Exit Gate

All ~30 ideas dispositioned (stamps in each file) + `vnext_roadmap.md` authored (dual-audience, SO-7/8/10) +
the release-campaign stub text staged for G2 + G2 presented. **Dispositions are proposals** — anything
load-bearing escalates to G2, never self-ratifies (§7.7).

## Objectives

### 1. C1–C5 — Deep pass on the 5 hot July ideas
- **Status**: planned
- **Description**: Full adopt/decline/defer analysis each: [[idea_upstream_state_history_graduation]]
  (priority HIGH; STATE_history convention + >100 KB tripwire + candidate skill/template) ·
  [[idea_upstream_path_convention_doctrine]] (docs/prose `~/aDNA/`, execution absolute) ·
  [[idea_upstream_mission_frontmatter_key]] (`mission:` key, 3rd sibling) ·
  [[idea_upstream_fork_kit_agents_enforcement]] (4-file kit gate; 26/73 AGENTS gaps) ·
  [[idea_upstream_state_frontmatter_phase_campaign_keys]] (**verify first**: likely already shipped as v8.7
  riders — if so, close as shipped and note the `mission:` idea as its extension).
- **Files**: the 5 idea files (disposition stamps + analysis)
- **Depends on**: none

### 2. C6 — Light sweep of the ~25 older ideas
- **Status**: planned
- **Description**: One-line disposition each for the 2026-07-06..08 cluster (incl.
  `idea_upstream_visual_inspection_doctrine` [check: folded at v8.7?] ·
  `idea_upstream_single_writer_lease_for_inventory` [pairs with M1's B3-item-5] ·
  `idea_surface_composition_graph_subtype_adr` · `idea_inner_readme_iii` [consumed by v8.8 — close]).
  Defer-with-trigger is first-class; never force a ruling to finish the list.
- **Files**: ~25 idea files (one-line stamps)
- **Depends on**: none (seam: this objective may run as its own session)

### 3. Roadmap — the v8.9 / v2.6 split
- **Status**: planned
- **Description**: Author `artifacts/vnext_roadmap.md`: which adopted items batch as **v8.9 governance**
  (template/governance-layer only) vs which force the **v2.6 standard window** (normative: the `task` entity
  [the B1 answer is the first fixed fact — "candidate for v2.6, not in motion"], the `mission:` frontmatter
  key, base-ontology or conformance changes). Sequenced, budgeted, each item citing its idea file + evidence.
  Include what v8.9 explicitly does NOT carry.
- **Files**: `how/campaigns/campaign_refit/artifacts/vnext_roadmap.md`
- **Depends on**: 1, 2

### 4. Stub — stage the successor release campaign
- **Status**: planned
- **Description**: Stage the charter text for `campaign_v8_9_release` (name per roadmap; the release itself
  fires later as its own campaign via `skill_template_release`, per the v8.6/8.7/8.8 lineage). Created on disk
  at `status: planned` only **after** G2 ratifies.
- **Files**: staged stub text in `artifacts/`; post-G2: `how/campaigns/campaign_v8_9_release/` stub
- **Depends on**: 3; G2 for materialization

## Campaign Context

**Previous mission outputs**: M1's B1 transmission fixes the task-entity fact this roadmap must carry.
**Next mission inputs**: G2's ruling; the stub becomes the vault's next release queue after Refit closes.

## Notes

Risk: 30-file read fatigue → the two-pass seam (objective 1 vs 2) is a sanctioned session split. The light
sweep may run `executor_tier: sonnet` if split out.

## Completion Summary

*Fill out when setting `status: completed`.*

## AAR

*Mandatory before `status: completed` (SO-5). Include `token_budget_actual` (SO-11).*

- **Worked**:
- **Didn't**:
- **Finding**:
- **Change**:
- **Follow-up**:
