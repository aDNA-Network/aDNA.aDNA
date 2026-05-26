---
type: session
session_id: session_20260525_terminal_harness_contract_doctrine
created: 2026-05-25
updated: 2026-05-25
status: completed
last_edited_by: agent_stanley
tier: 2
tags: [session, ecosystem_spec, terminal_harness_contract, adr_027, cross_vault, tier2]
---

# Session — Terminal↔Harness Contract Doctrine (cross-vault canonicalization)

## Intent

Author the canonical cross-vault **terminal ↔ harness provider contract** as the 5th ecosystem spec in this vault, with a co-signed ADR. Driven by an approved workspace-level plan (`/Users/stanley/.claude/plans/please-read-the-claude-md-compiled-cherny.md`) to let any harness/context system (RareHarnessNeo, LatticeAgent, Claude Code) run as a terminal-driven agent under any terminal (LatticeTerminal, Cmux), resolving the currently-bilateral LT↔LA contract into a multi-terminal canonical.

## Scope declaration (Tier 2)

- **Author**: `what/specs/spec_terminal_harness_contract.md` (new), `what/decisions/adr_027_terminal_harness_contract_canonicalization.md` (new).
- **Amend**: `what/specs/spec_platform_ecosystem.md` (cross-ref + add Cmux to Active Platforms).
- **No other files in this vault.** No phase advance of `campaign_adna_serious_tool_readiness`. Local commit only (no push — operator's call, given the shared GitHub remote).

## Conflict scan

Active campaign is `campaign_adna_serious_tool_readiness` (M5.1, research-class). This session is orthogonal (ecosystem-spec authoring, not that campaign's mission). adr_027 confirmed free (max existing = adr_026; adr_013 taken). No collision.

## Note for operator

These are **standard-level artifacts** authored from a cross-vault execution session rather than a native aDNA.aDNA campaign mission. The operator may wish to fold ADR-027 into `campaign_adna_serious_tool_readiness` (or a dedicated standard-evolution mission) for full native ratification ceremony. Committed locally, not pushed.

## Files touched

- (this session file)
- `what/specs/spec_terminal_harness_contract.md` — created
- `what/decisions/adr_027_terminal_harness_contract_canonicalization.md` — created
- `what/specs/spec_platform_ecosystem.md` — amended
