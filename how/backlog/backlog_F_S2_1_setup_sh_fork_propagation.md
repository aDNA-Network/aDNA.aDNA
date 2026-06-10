---
type: backlog_idea
status: open
priority: high
routes_to_campaign: campaign_obsidian_deployment_stabilization
routes_to_track: T1
finding_id: F-S2-1
source_session: session_stanley_20260513_043947_mlwx03_s2
created: 2026-05-13
updated: 2026-05-13
last_edited_by: agent_stanley
tags: [backlog, f_s2_1, setup_sh, fork_propagation, skill_project_fork, fifth_additive_upstream_candidate, lwx_s2_surfaced]
---

# F-S2-1 — `skill_project_fork.md` doesn't propagate `setup.sh` at fork time

## Summary

`skill_project_fork.md` creates a forked `.aDNA/` vault but does NOT copy `.adna/setup.sh` into the new vault. The bootstrap script that installs Obsidian plugin binaries + theme files is absent from forked vaults, breaking the plugin-deployment chain from day one.

## Root cause

The fork skill's exclusion list (`R2-R7` per the M03 `skill_project_fork.md` update) treats `setup.sh` as part of the template-repo cleanup (it's removed from the working clone of `.adna/` after fork). But there's no compensating step to PUT a copy back into the forked vault. Result: forked vaults inherit `.gitignore`'s "plugin binaries are tracked" expectation but have no installer to populate them.

## Routes to

**Successor campaign**: `campaign_obsidian_deployment_stabilization` Track T1 — Fork propagation. **5th-instance candidate for the single-commit additive-upstream pattern** (after ADR-008 + e3b3bcc + 8673383 + 202c9ec).

## Proposed approaches

1. **`skill_project_fork.md` amendment** — add `cp .adna/setup.sh <project>.aDNA/setup.sh` step + `chmod +x`. Single upstream commit to `LatticeProtocol/adna`.
2. **`.adna/setup.sh` self-locating refactor** — make setup.sh runnable from any directory; eliminate the need to copy it into each fork. Operator runs `~/aDNA/.adna/setup.sh --vault <name>.aDNA`. Heavier refactor.
3. **Hybrid** — copy setup.sh at fork time (Option 1) for offline operation; ALSO refactor for self-location (Option 2) for advanced use. Choose later based on what feels right after T2/T3 land.

Recommend Option 1 for the 5th-instance pattern (minimal commit, additive); Option 2 only if T2/T3 surface a clear motivating reason.

## Critical files

- `/Users/stanley/aDNA/.adna/how/skills/skill_project_fork.md` — fork procedure spec
- `/Users/stanley/aDNA/.adna/setup.sh` — upstream installer (230 lines)
- Affected on next fork: any new `<name>.aDNA/` vault

## Source references

- M-LWX-03 S2 cross-graph memo §7: `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/cross_graph_findings_to_v2_from_lattice_workspace_ux.md`
- M-LWX-03 mission AAR §F-S2-1: `aDNA.aDNA/how/campaigns/campaign_lattice_workspace_ux/missions/artifacts/aar_mlwx_03_integration_test_and_closeout.md`
- Plan file (S2 path-α discovery): `/Users/stanley/.claude/plans/please-read-the-claude-md-merry-dewdrop.md`
