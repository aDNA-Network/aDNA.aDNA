---
type: backlog_idea
status: open
priority: medium-high  # closes verification-handoff topology to agent-driven half
routes_to_campaign: campaign_obsidian_deployment_stabilization
routes_to_track: T8  # NEW track — agent-driven Obsidian inspection
finding_id: F-S2-8
source_session: session_stanley_20260513_043947_mlwx03_s2
created: 2026-05-13
updated: 2026-05-13
last_edited_by: agent_stanley
tags: [backlog, f_s2_8, agent_driven_obsidian, local_rest_api, mcp_server, sixth_additive_upstream_candidate, easy_fluid_context_graphs, lwx_s2_surfaced]
---

# F-S2-8 — Agent-driven Obsidian inspection (Local REST API + MCP)

## Summary

Currently the agent (Claude Code via Rosetta/Hestia/etc.) cannot drive/inspect/validate Obsidian without operator intermediation. All Obsidian-runtime properties (plugin loads, theme renders, click navigation, layout) require an operator to launch Obsidian + report observations. This bottlenecks the verification-handoff topology (F-S2-3) at the operator-side surface — operator-validation bandwidth becomes the gating constraint.

## Strategic significance

Directly serves the saved north-star UX metric: *"easy and fluid way to build/operate/utilize context graphs"* (memory `project_adna_lattice_ux_goal.md`). The agent being able to inspect Obsidian closes one half of the verification-handoff topology and reduces operator-validation bandwidth burden on Carly+Herb (per the `campaign_validation_node_adna_lwx_outputs` dispatch model). Operator-side handoff persists for genuinely visual/UX-feel checks (theme aesthetics, "easy/fluid" qualitative judgment) — those don't automate well; runtime functional checks DO.

## Routes to

**Successor campaign**: `campaign_obsidian_deployment_stabilization` Track T8 — Agent-driven Obsidian inspection. **NEW track** added 2026-05-13 at M-LWX-03 S2 reframe.

## Proposed approach (T8 sub-tracks)

**T8a — Obsidian Local REST API plugin to `.adna/setup.sh` PLUGIN_IDS**
- Add `obsidian-local-rest-api` (coddingtonbear/obsidian-local-rest-api; MIT) to setup.sh's PLUGIN_IDS array
- **6th-instance candidate for the single-commit additive-upstream pattern** (after ADR-008 + e3b3bcc + 8673383 + 202c9ec + the planned 5th instance for setup.sh propagation per F-S2-1)
- Reference: already installed in `~/Projects/lattice-labs/.obsidian/plugins/obsidian-local-rest-api/` so its data.json structure is known

**T8b — Per-vault `data.json` template with operator-supplied API key**
- Ship `.adna/.obsidian/plugins/obsidian-local-rest-api/data.json` template with `API_KEY: "{{LOCAL_REST_API_KEY}}"`
- `setup.sh` generates a per-vault key on first run; stores in `.gitignore`'d local `.obsidian/local-rest-api-key.txt`
- Per-vault key isolates blast radius if any single vault's key is exposed

**T8c — Obsidian MCP server selection + configuration**
- Evaluate community MCP servers: `MarkusPfundstein/mcp-obsidian` (most common); others as they emerge
- Add chosen server to `~/.claude.json` mcpServers OR workspace `.mcp.json` (operator-discretionary scope)
- Restart Claude Code session activates `mcp__obsidian__*` tools (get_file, list_files, run_command, search_by_tag, etc.)

**T8d — `skill_obsidian_agent_inspect.md`**
- Canonical agent-facing skill documenting the verification workflow
- Security boundaries (per-vault key; localhost-only HTTPS; vault opt-in)
- When to use agent-driven vs operator-side dispatch (e.g., theme rendering still goes to operator; file content + frontmatter + tag queries go to agent)

**T8e — Update T6 (integration test framework) to use agent-driven where feasible**
- M-LWX-03's manual O-checks become agent-callable subroutines for vault-deployment validation
- E.g., agent can verify HOME.md rendered correctly by GET'ing `/active/` and parsing the response; eliminates O2 from operator's plate

## Critical files

- `/Users/stanley/lattice/.adna/setup.sh` PLUGIN_IDS array
- NEW (template): `.adna/.obsidian/plugins/obsidian-local-rest-api/data.json` — operator-key-substituted
- `~/.claude.json` mcpServers field OR `~/lattice/.mcp.json` (TBD)
- NEW (skill): `aDNA.aDNA/how/skills/skill_obsidian_agent_inspect.md`
- T6 integration test skill cross-link

## Security model considerations

- API key per-vault (not shared across vaults)
- Localhost-only by default (Local REST API plugin default behavior)
- Operator opt-in per vault (plugin can be disabled in any vault that doesn't want agent inspection)
- Audit log: agent queries logged via MCP server stdout where applicable

## Source references

- M-LWX-03 S2 strategic-question section in plan file: `/Users/stanley/.claude/plans/please-read-the-claude-md-merry-dewdrop.md`
- M-LWX-03 S2 cross-graph memo §7 F-S2-8 + §8 dispatch model
- Operator's framing: "Is there any way we can set you up to be able to run/inspect/navigate Obsidian yourself for these confirmation / validation passes?" (2026-05-13T06:05Z+)
