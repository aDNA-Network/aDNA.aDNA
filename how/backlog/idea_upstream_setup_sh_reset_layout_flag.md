---
type: backlog_idea
status: open
priority: medium
finding_id: OBS-UP-7   # Obsidian.aDNA P1 synthesis §5 #7
source_vault: Obsidian.aDNA (Seshat)
source_session: session_stanley_20260610_m06_s1_foundations
routes_to: .adna template (setup.sh)
created: 2026-06-10
updated: 2026-06-10
last_edited_by: agent_seshat
tags: [backlog, idea_upstream, obsidian, setup_sh, reset_layout, workspace_json, adr_007_posture, m06]
related_backlog:
  - aDNA.aDNA/how/backlog/backlog_F_S2_4_obsidian_workspace_clobber.md   # the first-open clobber finding this mitigates
---

# idea_upstream — adopt the M3.1 T2 `--reset-layout` flag + first-open runbook into `.adna/setup.sh`

**Filed by Obsidian.aDNA** (P1 synthesis §5 #7, from p1_07 §9.3; routed per ADR-007, operator-gated at M06).

## The proposal

The M3.1 T2 work (LatticeHome-era) produced a proven `--reset-layout` pattern — copy `workspace.default.json` → `workspace.json` deliberately, backup-first, with a first-open runbook (open order, plugin-trust prompt, layout settle) — that directly mitigates **F-S2-4** (Obsidian's first-open destructively compacts a template layout whose plugins aren't loaded yet). Adopt the flag + runbook into `.adna/setup.sh` so a fresh fork can recover/assert the intended layout after binaries land.

## Context worth carrying (2026-06-10)

Obsidian.aDNA's reseed discipline treats `workspace.json` as **never-clobber device state** (the seed ships `workspace.default.json` only as an operator-invoked reset template — `spec_reseed_skill`, ADR-003). The upstream flag should keep that shape: reset is **explicit + backup-first**, never part of a default reseed. M03/M04 rollouts also documented the first-open gauntlet (plugin-trust prompt; `obsidian://` external-action prompt) the runbook should mention.

## Trace

- Obsidian.aDNA `what/context/obsidian_operation_playbooks.md` §9.3 (p1_07) · `seed/seed.md` never-clobber invariant · synthesis §5 #7
