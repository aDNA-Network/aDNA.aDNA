---
type: backlog_idea
status: open
priority: low   # IF-gated — only if the template ships agent-driven Obsidian infrastructure
finding_id: OBS-UP-10   # Obsidian.aDNA P1 synthesis §5 #10 · D17
source_vault: Obsidian.aDNA (Seshat)
source_session: session_stanley_20260610_m06_s1_foundations
routes_to: .adna template (agentic-Obsidian posture)
created: 2026-06-10
updated: 2026-06-10
last_edited_by: agent_seshat
tags: [backlog, idea_upstream, obsidian, local_rest_api, opt_in, security_contract, adr_007_posture, adr_011, m06]
related_backlog:
  - aDNA.aDNA/how/backlog/backlog_F_S2_8_agent_driven_obsidian_inspection.md   # the agent-driven-Obsidian direction this serves
---

# idea_upstream — adopt the `obsidian-local-rest-api` **opt-in pattern** (plugin + per-vault security contract), never default-seeded

**Filed by Obsidian.aDNA** (P1 synthesis §5 #10, D17; routed per ADR-007, operator-gated at M06). **IF-gated**: relevant only if/when the template ships agent-driven Obsidian infrastructure.

## The proposal — refreshed 2026-06-10 (the design work is done; adopt the pattern, not a seeding)

Obsidian.aDNA ratified the posture (**ADR-011** autonomy tiers): REST/MCP surfaces are **T3 — opt-in, NOT seeded** (network + security surface; per-node API key). M05 then shipped the reference doc the template could adopt: `what/context/obsidian_rest_api_opt_in.md` — install/enable steps, **broker-keyed** credential handling (key lives in the node credential broker, never in the vault), per-vault security contract, CanvasForge/MCP integration seams. The P1-era T8 patch text is stale (pre-dates the live roster) — **rebase any adoption on the M05 doc**, not the old patch.

## Shape of the upstream change

A template-side context doc + override-manifest example (`obsidian_adna_overrides.yaml` declaring the plugin as an intentional addition), so a vault opting in does it declared-and-documented. No roster change; no default key material anywhere.

## Trace

- Obsidian.aDNA `adr_011_autonomy_tiers.md` (T0–T3; REST/MCP opt-in) · `what/context/obsidian_rest_api_opt_in.md` (M05 gate 2) · `obsidian_operation_playbooks.md` §9.4 (p1_07) · synthesis §5 #10

> **Triage 2026-06-23 (Cornerstone v8.1):** SURVIVES (low) — independent; carry as-is. ([[coord_2026_06_22_seshat_to_rosetta_cornerstone_v81_landing]] reconciliation; [[adr_038_combined_v81_release]]).
