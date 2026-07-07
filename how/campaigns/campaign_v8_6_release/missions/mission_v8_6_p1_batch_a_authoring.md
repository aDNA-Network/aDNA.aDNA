---
plan_id: mission_v8_6_p1_batch_a_authoring
type: plan
title: "v8.6 P1 — Batch A authoring (lifecycle skills + reopen clause + folds + Batch G)"
owner: stanley
status: completed
campaign_id: campaign_v8_6_release
campaign_phase: 1
campaign_mission_number: 1
mission_class: implementation
token_budget_estimated: 120
token_budget_actual: 170   # rough (ADR-016 §C) — 2 sessions: P0+2 skills; then 3 skills+template+deltas+Batch G+triage+close
executor_tier: opus
created: 2026-07-06
updated: 2026-07-06
last_edited_by: agent_rosetta
tags: [plan, campaign, v8_6_release, skill_authoring, ouroboros]
---

# Mission: v8.6 P1 — Batch A authoring

**Campaign**: [[how/campaigns/campaign_v8_6_release/campaign_v8_6_release|campaign_v8_6_release]] (Operation Ouroboros)
**Phase**: 1 — Author
**Mission**: 1 of 1 (P2/P3 are operator gates, not missions)

## Goal

Author every in-scope v8.6 deliverable so the release can assemble at P3: the **five Batch A lifecycle
skills** (each self-reviewed), the reopen-reconciliation clause + P-5 fork scaffold, the checklist fork-base
fold, and the Batch G doc-currency/name-leak sweep. Each skill **codifies an already-executed playbook** into
a generic base recipe — authored into the dev graph `how/skills/`, folded to `.adna/` at P3. On close, triage
the `proposed`-source items with an accept/hold recommendation for the P2 gate.

## Exit Gate

Every in-scope deliverable authored + self-reviewed (`skill_dual_audience_review` + `skill_self_reference_check`);
the 3 `proposed`-source items (Batch G name-leak sweep + 2 Hestia addenda) triaged for P2 (DP2); count
surfaces bumped 50→55 with `adna_validate --governance` zero-drift; a P1 AAR filed. **No release fire**
(that is P3, an operator gate).

## Objectives

*Author order follows the composition graph — the leaf primitive first, then the composers.*

### 1. skill_project_archive (leaf primitive)
- **Status**: ✅ completed (session 1, 2026-07-06)
- **Session**: session_stanley_20260706T210241Z_v8_6_release_p0_charter_p1_start
- **Description**: Codify the 8-step Archive-holder convention (`idea_upstream_skill_project_archive` +
  `Archive.aDNA/CLAUDE.md` + `disposition_ledger_v2.md` §C) into `how/skills/skill_project_archive.md`
  (`skill_type: agent`). The shared primitive `skill_graph_merge` + `skill_second_genesis` call. Self-review.
- **Files**: `how/skills/skill_project_archive.md` ✅
- **Depends on**: none

### 2. skill_second_genesis (promote draft)
- **Status**: ✅ completed (session 1, 2026-07-06) — + shipped `template_second_genesis_dossier.md`
- **Session**: session_stanley_20260706T210241Z_v8_6_release_p0_charter_p1_start
- **Description**: Promote + genericize the Home.aDNA v0.1.0 draft into
  `how/skills/skill_second_genesis.md` (`skill_type: process`). Strip node-specific refs; convert to standard
  skill format; keep the 9-section dossier schema + P0–P5 flow + guardrails; ship
  `how/templates/template_second_genesis_dossier.md`. Calls `skill_project_archive` (P1 archive-old-first) +
  `skill_project_fork`. Self-review.
- **Files**: `how/skills/skill_second_genesis.md`, `how/templates/template_second_genesis_dossier.md`
- **Depends on**: 1

### 3. skill_graph_merge
- **Status**: ✅ completed (session 2, 2026-07-06)
- **Description**: Codify `pt08b_merge_playbook.md` (drain→absorb→re-anchor→archive) into
  `how/skills/skill_graph_merge.md` (`skill_type: agent`). Ends by calling `skill_project_archive`. Self-review.
- **Files**: `how/skills/skill_graph_merge.md`
- **Depends on**: 1

### 4. skill_graph_rename
- **Status**: ✅ completed (session 2, 2026-07-06)
- **Description**: Codify `pt04b_rename_ref_sweep_playbook.md` (dir move + shim + router row + wrapper
  refederation) into `how/skills/skill_graph_rename.md` (`skill_type: agent`); **delegate the self-reference
  sweep to the existing `skill_project_rename`**; carry the ~3× wrapper-undercount clause. Self-review.
- **Files**: `how/skills/skill_graph_rename.md`
- **Depends on**: none (references skill_project_rename)

### 5. skill_workspace_spring_clean
- **Status**: ✅ completed (session 2, 2026-07-06)
- **Description**: Codify the houseclean campaign (`campaign_workspace_houseclean/` + `disposition_ledger_v2.md`
  §A–G + Standing Rule 9) into `how/skills/skill_workspace_spring_clean.md` (`skill_type: process`) —
  audit-first → ONE operator gate → tiered waves. Orchestrates 1–4 + shim-window discipline; ships a
  disposition-ledger template. Self-review.
- **Files**: `how/skills/skill_workspace_spring_clean.md`, `how/templates/template_disposition_ledger.md`
- **Depends on**: 1, 2, 3, 4

### 6. Non-skill Batch A deltas
- **Status**: ✅ completed (session 2, 2026-07-06)
- **Description**: reopen-reconciliation `§reopen` clause in `how/campaigns/AGENTS.md` (DP3 default:
  clause-not-skill); P-5 optional-with-degradation `webforge/` scaffold note riding `skill_project_fork`.
- **Files**: `how/campaigns/AGENTS.md`, `how/skills/skill_project_fork.md`
- **Depends on**: none

### 7. Checklist fork-base fold
- **Status**: ✅ completed (session 2, 2026-07-06)
- **Description**: Stage the fold of `campaign_w4_governance_doctrine/artifacts/v8_4_adoption_checklist.md`
  into the `.adna/` fork path (author the integration point; the physical fold rides P3 assembly).
- **Files**: (release-delta; staged in artifacts)
- **Depends on**: none

### 8. Batch G doc-currency + name-leak sweep
- **Status**: ✅ completed (session 2, 2026-07-06)
- **Description**: Validator-docstring currency; the `skill_iii_setup.md` genericize + dev-vault-name sweep
  (DP4 census-table disposition). The name-leak idea is `proposed` → triage for P2 (DP2).
- **Files**: (release-delta; `.adna/`-side, staged in artifacts)
- **Depends on**: none

### 9. Count surfaces + triage close
- **Status**: ✅ completed (session 2, 2026-07-06)
- **Description**: Per session, bump the 4 count surfaces to match authored skills + `adna_validate
  --governance` zero-drift. At mission close: triage the 3 `proposed` items (DP2) + file the P1 AAR.
- **Files**: `CLAUDE.md`, `MANIFEST.md`, `AGENTS.md`, `what/glossary/glossary_skill.md`
- **Depends on**: 1-8

## Campaign Context

### Previous Mission Outputs
- Meridian M5 produced the RC (`v8_6_release_candidate.md`) — the authoritative ship-set + cut-line.

### Next Mission Inputs
- P2 (ratify gate) needs: the fully authored + self-reviewed batch + the DP2/DP4 triage recommendations.
- P3 (fire) needs: the ratified ship-set frozen + the checklist-fold + Batch-G deltas staged for assembly.

## Notes

- Session 1 (this) realistic scope = objectives **1 + 2** (archive + second_genesis), each M-effort + review.
  Objectives 3-9 continue across follow-on sessions.
- `token_budget_estimated: 120` kT is the whole P1 mission (governance-broad, multi-session); a single session
  logs its own `token_budget_actual`.

## Completion Summary

Completed across 2 sessions (P0+2 skills, then 3 skills + deltas + Batch G + triage + close). P1 exit gate met;
the batch sits **P2-ready**.

### Deliverables
- **5 Batch A lifecycle skills** (all base): `skill_project_archive` · `skill_second_genesis` (S1);
  `skill_graph_merge` · `skill_graph_rename` (delegates to `skill_project_rename`) ·
  `skill_workspace_spring_clean` (orchestrator) (S2). Each self-reviewed (dual-audience + self-reference), generic.
- **2 templates**: `template_second_genesis_dossier` (S1) · `template_disposition_ledger` (§A–H, S2).
- **Non-skill deltas**: `§6 Reopen` clause in `how/campaigns/AGENTS.md` (Abandonment → §7); optional
  `how/federation/webforge/` scaffold in `skill_project_fork.md` Step 4.5(4).
- **`release_staging_ledger.md`** — the P3 assembly manifest + P2 gate packet (records the checklist fork-base
  fold decision, Batch G staging, gov 8.5→8.6 / std stays v2.5, the fire sequence).
- **`triage_proposed_items.md`** — DP2 recommendations for the 3 `proposed` items.
- **Batch G**: validator docstrings **verified current** (v2.5); `skill_iii_setup` name-leak **staged**
  (`.adna/`-side, P3/P2-gated).
- **Counts** trued 52→55 skills (23→26 base) / 43→44 templates (7→8 operational) across 7 surfaces;
  `adna_validate --governance` **Zero drift**.

### Descoped *(deferred, not dropped)*
- `skill_iii_setup` name-leak **execution** → P3 assembly (`.adna/`-side, Standing Rule 1) + P2-gated (§D-2/D-3).
- `node_manifest` interview emission → Hestia mission / v8.7 (M-effort, cross-persona).
- STATE `phase:`/`campaigns:` keys → v8.7 (operator timing call; cheap rider).

### Key Findings
- The composition graph held: authoring leaf→composers kept cross-refs coherent; `skill_graph_rename`
  cleanly **delegates** the self-routing sweep to `skill_project_rename` (no duplication).
- `skill_iii_setup` is **`.adna/`-only** (no dev source) → its sweep is a P3-assembly task, not a P1 edit (SR1).
- Surfaced **D-5**: `template_ratification_record` self-drift (dev vault ships it in `.adna/` but lacks a local
  copy; its own §7.7 doctrine + the adoption checklist both cite it) — recommend mirror.

### Scope Changes
- DP3 confirmed = reopen **clause** (not a standalone skill).
- The "P-5 webforge scaffold" landed as an addition to `skill_project_fork` Step 4.5(4), not a separate step.
- Checklist fork-base fold recorded as an **integration decision** (ledger §B/§D-1); the physical `.adna/` fold
  rides P3 assembly.

## AAR

- **Worked**: composition-order authoring (leaf→composers) kept cross-references coherent; batching the 3-skill
  count-bump into one green commit avoided intra-commit drift; the staging ledger doubles as the P2 packet + P3
  manifest.
- **Didn't**: `token_budget_actual` is a rough estimate (no precise per-session meter); the checklist's exact
  `.adna/` target + filename is left to the operator (D-1).
- **Finding**: a Batch-A item that exists only in `.adna/` (`skill_iii_setup`) can't be swept at P1 under
  Standing Rule 1 — the fix is a P3-assembly instruction, which the staging ledger now carries.
- **Change**: authored a reusable `release_staging_ledger` pattern (dev-source → `.adna/`-target manifest +
  open-decisions) — a clean P2/P3 gate surface for every future template release.
- **Follow-up**: **P2 ratify** (DP2 — 5 decisions incl. D-5 mirror) → **P3 fire** (`skill_template_release`);
  `node_manifest` + STATE-keys routed per the triage.
