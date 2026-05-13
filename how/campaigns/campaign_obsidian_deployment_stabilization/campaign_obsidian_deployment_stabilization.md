---
type: campaign
campaign_id: campaign_obsidian_deployment_stabilization
title: "Obsidian deployment stabilization — stable, standard, self-stabilizing across all aDNA vaults"
owner: rosetta  # aDNA.aDNA persona
status: planned
phase: -1  # not yet open; opens at operator discretion post-M-LWX-03 close
phase_count: 3  # P0 planning + P1 implementation + P2 integration
track_count: 8  # T1-T8 anticipated; finalized at planning mission
predecessor: campaign_lattice_workspace_ux  # mini-campaign closed 2026-05-13T07:00Z+; this campaign drives F-S2-1..8 to resolution
sibling_validation_campaign: campaign_validation_node_adna_lwx_outputs  # in lattice-labs (Berthier + Carly + Herb); ships in parallel
mission_count: tbd  # finalized at planning mission
estimated_sessions: "10-15"  # rough cut; calibrated at planning mission
priority: medium  # not blocking v2 M05 critical path; can run interleaved
created: 2026-05-13
updated: 2026-05-13
last_edited_by: agent_stanley
opens_at: "operator authorization post M-LWX-03 close (Standing Order #1)"
backlog_sources: [F-S2-1, F-S2-2, F-S2-3, F-S2-4, F-S2-5, F-S2-6, F-S2-7, F-S2-8]
north_star_metric: "easy and fluid way to build/operate/utilize context graphs"  # saved 2026-05-13 to memory project_adna_lattice_ux_goal.md
tags: [campaign, planned, obsidian_deployment, stabilization, lwx_successor, rosetta, f_s2_target, easy_fluid_context_graphs, fifth_additive_upstream_candidate, agent_driven_inspection]
---

# Campaign — Obsidian Deployment Stabilization

> **Status: planned.** Opens at operator discretion post-mini-campaign-`campaign_lattice_workspace_ux` close (closed 2026-05-13T07:00Z+). Mission tree finalized at the campaign's own planning mission.

## Goal

Make the Obsidian deployment of every aDNA vault **stable, standard, and self-stabilizing**. Eliminate destructive first-open behaviors; propagate `setup.sh` through `skill_project_fork.md`; add idempotent re-canonicalization tooling so operators can recover the intended UX with a single command. Codify the **verification-handoff topology** (agent-side smoke + operator-side runtime smoke + dispatch connector OR agent-driven inspection) as a reusable architectural pattern across the forge ecosystem.

## Why this campaign exists

`campaign_lattice_workspace_ux` (mini-campaign in `aDNA.aDNA/`) surfaced 8 architectural findings at its M-LWX-03 S2 plugin-bootstrap moment (F-S2-1..8) that share a common theme: the Obsidian deployment layer is fragile in ways that block the strategic UX goal *"easy and fluid way to build/operate/utilize context graphs"* (operator-stated 2026-05-13; saved to memory). This campaign drives all 8 findings to resolution + establishes the verification-handoff topology as a documented pattern.

Companion campaign: `campaign_validation_node_adna_lwx_outputs` in `lattice-labs/` — same-day successor; provides the operational dispatch model that this campaign documents at T7. Both campaigns ship in parallel.

## Scope (8 tracks)

### Track 1 — Fork propagation (F-S2-1)

`skill_project_fork.md` copies `.adna/setup.sh` → `<project>.aDNA/setup.sh` at fork time. Currently the script isn't propagated, so first-open vaults have no plugin/theme installer. **5th-instance candidate for single-commit additive-upstream pattern** (after ADR-008 + e3b3bcc + 8673383 + 202c9ec). Could also be implemented at the `.adna/` template level by making setup.sh self-locating (operator runs from anywhere).

### Track 2 — Workspace layout idempotency (F-S2-4)

`setup.sh` adds `--reset-layout` flag that forces `cp workspace.default.json workspace.json` regardless of existing state. Currently the workspace-copy block (`.adna/setup.sh:175-184`) only copies when workspace.json doesn't exist — Obsidian's destructive first-open then erases the intended layout. Document the "rehydrate" recipe in `skill_workspace_upgrade.md` or `skill_onboarding.md`.

### Track 3 — Plugin-binary install validation (F-S2-2)

Add `setup.sh --verify` mode that reports installed vs enabled plugin mismatch (reads `community-plugins.json` + checks each entry has a populated `.obsidian/plugins/<id>/` with main.js + manifest.json). Integrate into `skill_node_health_check.md` as a sub-check. Silent failure mode disappears; operator gets a clear signal.

### Track 4 — Obsidian config canonicalization (F-S2-5 + F-S2-6 + F-S2-7)

Author `skill_obsidian_canonicalize.md` — reads upstream `.obsidian/*.json` from `.adna/` template, diffs against local, surfaces drift, offers re-canonicalize. Also extends to **plugin-data layer** (F-S2-6 NN data.json with triad colors) + **template tag pollution** (F-S2-7 `.obsidianignore` extension for `how/templates/`).

### Track 5 — First-open UX standardization (F-O1-1 + F-S2-4)

Document the canonical "first open" runbook for operators: quit Obsidian before plugin install, run setup.sh from vault root, then open via File → Open Vault (NOT URL scheme on first run). Integrate into `skill_onboarding.md` for the standalone-project case + `skill_project_fork.md` post-fork message. Add the URL-scheme-requires-prior-registration note as operator-facing onboarding context.

### Track 6 — Integration test framework (F-Obj2-1 + F-Obj2-3 carried from M-LWX-03 S1)

Generalize M-LWX-03 Obj 2's operator-side O1-O7 into a reusable skill `skill_obsidian_integration_test.md` that any vault can run post-fork to validate deployment integrity. Vault-agnostic check list + per-vault customization slots + integration with T8 agent-driven inspection where possible.

### Track 7 — Verification handoff documentation (F-S2-3) — **load-bearing**

Author `skill_verification_handoff.md` that codifies the M-LWX-02 → M-LWX-03 → M-VNAL-01 dispatch model as a reusable verification topology. Defines agent-side surface + operator-side surface + dispatch connector vs agent-driven branch. **This is the architectural primitive codified at M-LWX-03 close**; T7 makes it a documented skill.

### Track 8 — Agent-driven Obsidian inspection (F-S2-8) — **new pattern**

Closes the operator-side surface to agent-driven where possible. Sub-tracks:
- T8a: Add `obsidian-local-rest-api` (coddingtonbear/obsidian-local-rest-api, MIT) to `.adna/setup.sh` PLUGIN_IDS — would be 6th-instance additive-upstream candidate
- T8b: Ship default `.obsidian/plugins/obsidian-local-rest-api/data.json` template with operator-supplied API key (security: generate per-vault key on first run)
- T8c: Evaluate community MCP servers for Obsidian (e.g., `MarkusPfundstein/mcp-obsidian`) + select + add to `~/.claude.json` mcpServers OR workspace `.mcp.json`
- T8d: Author `skill_obsidian_agent_inspect.md` documenting the agent-side verification workflow + security boundaries
- T8e: Update T6 integration-test skill to use agent-driven where feasible

Operator-side handoff persists for visual/UX-feel checks (theme aesthetics, "easy/fluid" qualitative read).

## Phases (anticipated; finalized at planning mission)

### Phase 0 — Planning

Author the campaign's own planning mission (mission tree + decision points + estimation calibration). Same pattern as v2 M01 / M04b.

### Phase 1 — Implementation

Execute tracks T1-T8 as missions. Some tracks may share missions (e.g., T1 + T5 + T6 all touch fork-time UX, could bundle). Mission tree finalized at Phase 0.

### Phase 2 — Integration

Final acceptance + ecosystem propagation (apply the stabilization patterns to all 21 existing `.aDNA/` vaults at operator discretion). Coord memos to vault operators if cross-vault sweeps required.

## Cross-references

- Predecessor mini-campaign: `aDNA.aDNA/how/campaigns/campaign_lattice_workspace_ux/`
- Predecessor AAR: `aDNA.aDNA/how/campaigns/campaign_lattice_workspace_ux/missions/artifacts/aar_campaign_lattice_workspace_ux.md`
- Cross-graph findings memo: `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/cross_graph_findings_to_v2_from_lattice_workspace_ux.md` §7 (F-S2-1..8)
- Sibling validation campaign: `lattice-labs/how/campaigns/campaign_validation_node_adna_lwx_outputs/`
- Backlog source files: `aDNA.aDNA/how/backlog/backlog_F_S2_1..8_*.md` (8 files)
- North-star UX metric memory: `~/.claude/projects/-Users-stanley-lattice-aDNA-aDNA/memory/project_adna_lattice_ux_goal.md`
- 4-instance settled pattern (additive-upstream): ADR-008 + commit `e3b3bcc` + commit `8673383` + commit `202c9ec`
- Persona context: Rosetta lives in `aDNA.aDNA/CLAUDE.md` §Identity & Personality
- Standing orders inherited: `aDNA.aDNA/CLAUDE.md` §Standing Orders 1-10

## Persona

**Rosetta** continues — this campaign is governed by `aDNA.aDNA/` per ADR-004 (campaign home stays here). Implementation work that touches `node.aDNA/`, `science_stanley.aDNA/`, etc. is invoked by each vault's persona at runtime; Rosetta authors and ships the implementation.

## Notes

- This campaign is **not on the critical path of v2 M05**. M05 (publish-skill family rewrite) is unblocked by mini-campaign close; this campaign can run interleaved or after M05 at operator discretion.
- The 8-track scope is generous; the actual mission count is likely smaller (4-7 missions, with multiple tracks bundled into some missions).
- T8 (agent-driven inspection) is the most architecturally interesting track and directly serves the strategic UX goal. Operator may want to prioritize it for early execution.
- Successor-of-this-campaign considerations: if the verification-handoff topology generalizes well, the pattern may need extracting to `aDNA.aDNA/what/patterns/` or an ADR as the canonical reference.

## Completion Summary

*Filled when status flips to `completed`.*

## Campaign AAR

*Mandatory before setting `status: completed`. See `how/templates/template_aar_lightweight.md`.*
