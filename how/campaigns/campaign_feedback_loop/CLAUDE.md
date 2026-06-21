---
type: governance
subtype: campaign_claude
created: 2026-06-20
updated: 2026-06-20
last_edited_by: agent_stanley
tags: [governance, campaign, feedback_loop]
---

# CLAUDE.md — Campaign: Operation Feedback Loop

## Campaign Identity

| Field | Value |
|-------|-------|
| Campaign | `campaign_feedback_loop` |
| Owner | stanley |
| Status | active |
| Current Phase | Parked at the P2→P3 gate — P0 / P1 / P2 closed 2026-06-20; P3 (cross-vault structuring) awaits the operator gate |
| Persona | Rosetta (this vault) |

## Quick Start

1. Read this file (auto-loaded).
2. Read [[campaign_feedback_loop|campaign_feedback_loop.md]] — master campaign doc.
3. Read [[what/decisions/adr_036_software_graph_feedback_boundary|ADR-036]] — the boundary + privacy + naming decision (the load-bearing constraints).
4. Check current mission status in the master phase table.
5. Claim next unclaimed objective; create a session file in `how/sessions/active/`; begin work.

## Key Files

| File | Purpose |
|------|---------|
| `campaign_feedback_loop.md` | Master — phases, missions, scope, risk register |
| `missions/mission_charter_boundary_m00.md` | P0 mission (active) |
| `what/decisions/adr_036_software_graph_feedback_boundary.md` | Boundary / privacy / naming decision |
| `what/patterns/pattern_software_graph_telemetry_feedback.md` | The pattern (P1) |
| `what/specs/spec_telemetry_feedback_ecosystem.md` | Normative spec + `federation_ref` (P1) |
| `who/coordination/coord_2026_06_20_feedback_loop_to_prometheus.md` | Staged memo to Context.aDNA |

## Standing Orders (campaign-specific)

1. **Default-OFF is doctrine.** Every artifact authored here defaults the channel to OFF, operator-granted, revocable. Never describe always-on collection.
2. **Secrets never transit; values never live here.** Names-only, redaction-before-transmission (Standing Rule 6). If an example would show a secret-shaped token, redact it in the example.
3. **Consume Context.aDNA by reference.** This campaign owns deploy/operate/install **semantics**; Prometheus owns transport + economics. Never author transport here.
4. **Align to the compass.** [[who/governance/VISION.md|VISION]] says "no telemetry / never takes custody." Frame every artifact as the *operationalization* of the compass's opt-in sensing-network, not a contradiction of it.
5. **Structure cross-vault work; do not execute it.** P3 produces coord memos + one rollout backlog. Zero writes into other vaults' trees (Standing Rule 10).
6. **Rosetta SO#7/#8/#9/#10/#11 apply to every file.** Dual-audience, self-reference, cite-spec, ≥2 wikilinks, per-mission `token_budget_estimated`.

## Context Loading

| Subtopic / file | When |
|----------|------|
| [[who/governance/VISION.md|VISION]] | Always (compass alignment) |
| `III.aDNA/what/decisions/adr_002_consumer_federation_contract.md` | M1 (federation_ref shape) |
| `III.aDNA/how/skills/skill_iii_setup.md` | M2 (integration skill template) |
| [[how/campaigns/campaign_keystone/campaign_keystone|Operation Keystone]] | M3 (the cohort that consumes this) |

## Delegation Notes

P0 authored 2026-06-20 (session `session_2026_06_20_feedback_loop_p0`). The wrapper directory name was chosen `feedback/` (not `telemetry/`) to align with the VISION compass; the order's compound filenames (`*_telemetry_feedback_*`) are retained for findability. **The `feedback/` name was ratified at the P0→P1 gate 2026-06-20 — no override, no rename needed; ADR-036 is `accepted` and the pattern + spec are `active`.** Boundary, persona (Cerberus for Bitwarden), cohort scope (wide), and recipe seam (quarry→home) were operator-ratified 2026-06-20.
