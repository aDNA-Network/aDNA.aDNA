---
type: backlog_idea
status: accepted
priority: low
finding_id: OBS-UP-11   # Obsidian.aDNA P1 synthesis §5 #11 · drift D1
source_vault: Obsidian.aDNA (Seshat)
source_session: session_stanley_20260610_m06_s1_foundations
routes_to: .adna template (skill_project_fork / fork-time validation)
created: 2026-06-10
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [backlog, idea_upstream, obsidian, lint, orphan_plugin_id, fork_time, adr_007_posture, m06]
related_backlog:
  - aDNA.aDNA/how/backlog/idea_upstream_fork_obsidian_reseed.md
fold_batch: champollion_m6_1_rc
---

# idea_upstream — fork-time lint: reject a `community-plugins.json` id with no matching `plugins/<id>/` folder

**Filed by Obsidian.aDNA** (P1 synthesis §5 #11, drift **D1**; routed per ADR-007, operator-gated at M06).

## The proposal

A tiny fork-time (or setup.sh-time) validation: every id declared in `community-plugins.json` must have a `plugins/<id>/` folder (or be explicitly marked install-pending). This would have caught the **orphan `advanced-canvas` id** at authoring — a declared-but-uninstalled duplicate of `obsidian-advanced-canvas` that shipped a "missing plugin" error to every fork until normalized (ADR-006 §4).

## 2026-06-10 refresh — a check-side implementation exists to borrow

`Obsidian.aDNA/what/code/health_check.py` HC2 (roster materialized: `plugins/<id>/main.js` exists for every declared id) + HC3 (retired ids not declared) is exactly this lint as a read-only post-hoc check, fleet-proven. The upstream ask is to run the equivalent **at fork/authoring time**, where the defect is born.

## Trace

- Obsidian.aDNA `what/context/obsidian_fleet_drift_audit.md` §6 (p1_04) · `health_check.py` HC2/HC3 · synthesis §1 D1 + §5 #11

> **Triage 2026-06-23 (Cornerstone v8.1):** SURVIVES (low) — independent; carry as-is. ([[coord_2026_06_22_seshat_to_rosetta_cornerstone_v81_landing]] reconciliation; [[adr_038_combined_v81_release]]).


## Champollion G0 disposition — F (M1.1, 2026-07-02)

**ACCEPT → template-fold.** Marked `fold_batch: champollion_m6_1_rc` — M6.1 assembles the release candidate from this marker (nothing ships to `.adna/` here). Ratified at Champollion G0 (D2).
