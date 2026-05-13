---
type: backlog_idea
status: open
priority: medium-high
routes_to_campaign: campaign_obsidian_deployment_stabilization
routes_to_track: T2  # workspace layout idempotency
finding_id: F-S2-4
source_session: session_stanley_20260513_043947_mlwx03_s2
created: 2026-05-13
updated: 2026-05-13
last_edited_by: agent_stanley
tags: [backlog, f_s2_4, obsidian_first_open, workspace_json_clobber, setup_sh_reset_layout, lwx_s2_surfaced]
---

# F-S2-4 — Obsidian first-open destructively rewrites workspace.json

## Summary

When operator first opens a vault in Obsidian, Obsidian saves a stripped `workspace.json` that overwrites the M-LWX-02-shipped layout (NN pinned as first left-pane tab). Within seconds of open, the intended layout is GONE — replaced with whatever Obsidian's default-on-startup decided. `workspace.default.json` (the template) is untouched but Obsidian prefers `workspace.json` on subsequent opens.

## Root cause

Obsidian's normal save-on-close behavior treats `workspace.json` as live state and writes on every layout change + shutdown. It has no awareness of "this is a template-derived initial layout that should be preserved if the vault is plugin-deficient." The destructive behavior is logical from Obsidian's perspective; it becomes a problem when the vault was offline-prepared by `setup.sh` but plugin binaries weren't installed yet (NN plugin not loaded → NN tab fails to instantiate → Obsidian compacts the layout removing the NN tab → saves the compacted version).

## Routes to

**Successor campaign**: `campaign_obsidian_deployment_stabilization` Track T2 — Workspace layout idempotency.

## Proposed approaches

1. **`setup.sh --reset-layout` flag** — adds a mode that forces `cp workspace.default.json workspace.json` regardless of existing state. Currently the workspace-copy block (`.adna/setup.sh:175-184`) only copies when workspace.json doesn't exist.
2. **`setup.sh --force` extension** — make `--force` also reset workspace.json (currently `--force` only re-downloads plugins; not layouts). Most aggressive option but matches operator expectation.
3. **First-open runbook documentation** — update `skill_project_fork.md` end-of-fork message + `skill_onboarding.md` to instruct operator: "Run `./setup.sh --force --reset-layout` from `node.aDNA/` BEFORE opening in Obsidian for the first time."
4. **`skill_obsidian_canonicalize.md`** (T4) cross-cut — the rehydration skill that re-applies template defaults could include workspace.json restoration as part of its idempotent "reset to canonical state" flow.

Recommend Option 1 (add `--reset-layout` flag as distinct mode; keeps `--force` semantics clean) + Option 3 (documentation update for first-open workflow).

## Critical files

- `/Users/stanley/lattice/.adna/setup.sh` lines 175-184 — workspace-copy block
- `/Users/stanley/lattice/.adna/how/skills/skill_project_fork.md` — post-fork message
- `/Users/stanley/lattice/.adna/how/skills/skill_onboarding.md` — first-open runbook

## Source references

- M-LWX-03 S2 NEW FINDING F-S2-4 section in plan file
- M-LWX-03 S2 architectural discovery: operator's first Obsidian open clobbered workspace.json (verified by `grep -c notebook-navigator workspace.json` returning 0 vs workspace.default.json returning 3)
- Path α workspace.json restoration mid-S2 was the operator-facing fix; T2 generalizes it
