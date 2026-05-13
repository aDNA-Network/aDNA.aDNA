---
type: backlog_idea
status: open
priority: high
routes_to_campaign: campaign_obsidian_deployment_stabilization
routes_to_track: T3
finding_id: F-S2-2
source_session: session_stanley_20260513_043947_mlwx03_s2
created: 2026-05-13
updated: 2026-05-13
last_edited_by: agent_stanley
tags: [backlog, f_s2_2, config_binary_asymmetry, silent_failure, plugin_install_verify, lwx_s2_surfaced]
---

# F-S2-2 — `community-plugins.json` enabled list ≠ installed binaries (silent failure mode)

## Summary

Obsidian's `community-plugins.json` lists ENABLED plugins, but Obsidian does NOT auto-download from this list. If `.obsidian/plugins/<plugin-id>/` is missing for an entry, Obsidian silently shows empty navigation — no error toast, no warning. Operator can't tell whether plugins are "broken" or "not installed" from the UI.

## Root cause

Obsidian's design: `community-plugins.json` is the post-install enable manifest; binaries must already exist in `.obsidian/plugins/<id>/` for Obsidian to load them. There's no auto-fetch from GitHub releases on first sight of an enabled-but-missing plugin. This is sensible for security (no auto-downloads of arbitrary code) but creates a silent failure mode when `setup.sh` hasn't run (see F-S2-1) or has failed partially.

## Routes to

**Successor campaign**: `campaign_obsidian_deployment_stabilization` Track T3 — Plugin-binary install validation. Integrate into `skill_node_health_check.md` as a sub-check.

## Proposed approaches

1. **`setup.sh --verify` mode** — reads `community-plugins.json`, checks each enabled plugin has a populated `.obsidian/plugins/<id>/` with `main.js` + `manifest.json`. Reports mismatch as `MISSING_BINARY` for each gap. Exit code non-zero on any mismatch.
2. **`skill_node_health_check.md` sub-check** — invokes `setup.sh --verify` (or implements the check inline) + surfaces as a health-check item alongside disk-space + git-state checks.
3. **Per-vault smoke at fork time** — `skill_project_fork.md` end-of-fork message could run setup.sh --verify automatically + warn operator before declaring fork complete.

Recommend implementing all 3 — they layer (verify primitive → health check integration → fork-time gate).

## Critical files

- `/Users/stanley/lattice/.adna/setup.sh` — add `--verify` mode (~30 lines of bash)
- `/Users/stanley/lattice/.adna/how/skills/skill_node_health_check.md` OR `node.aDNA/how/skills/skill_node_health_check.md` — depending on upstream-vs-local decision
- `/Users/stanley/lattice/.adna/how/skills/skill_project_fork.md` — optional post-fork verify gate

## Source references

- M-LWX-03 S2 cross-graph memo §7 F-S2-2
- M-LWX-03 S2 architectural discovery: operator's first-open reported "doesn't seem to have Notebook Navigator installed" with no error toast — F-S2-2's symptom precisely
