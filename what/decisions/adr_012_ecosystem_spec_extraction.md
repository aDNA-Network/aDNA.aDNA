---
adr_id: adr_012
type: decision
title: "Workspace-router ecosystem detail extracted to aDNA.aDNA/what/specs/"
status: proposed
created: 2026-05-20
updated: 2026-05-20
co_signers: [agent_stanley (node.aDNA Hestia), agent_stanley (aDNA.aDNA Rosetta), agent_berthier (lattice-labs)]
campaign_id: campaign_lattice_compliance_upgrade
mission_id: mission_lattice_comp_m01_claude_md_prune
supersedes: []
last_edited_by: agent_stanley
tags: [adr, ecosystem, spec, claude_md_prune, router_token_budget]
---

# ADR 012 — Workspace-Router Ecosystem Detail Extracted to `aDNA.aDNA/what/specs/`

> Renumbered from ADR-009 to ADR-012 at apply time (compliance M01 Obj 6) — ADR-009 was concurrently claimed by `adr_009_aDNA_naming_convention.md` (committed `dfb5d2c` 2026-05 at P0→P1 gate of campaign_adna_v2_infrastructure). 012 was the lowest unused slot at apply time.

## Context

The workspace router (`~/lattice/CLAUDE.md`) carries the canonical descriptions of all six aDNA-pattern ecosystems (Forge / Platform / Framework / Org-Vault / Org-Graph / Network). At `campaign_lattice_compliance_upgrade` M01 baseline (2026-05-20), these six section bodies account for ~18,400 chars (~4,600 tokens; ~40% of the 43,525-char file).

Every session that opens in any project loads the workspace router at Step 1. The full ecosystem detail is rarely read in-router — its function is referential. Long descriptions belong in canonical spec files; the router belongs to short pointers.

## Decision

Extract the four ecosystem detail sections to `aDNA.aDNA/what/specs/`:

1. `spec_forge_ecosystem.md`
2. `spec_platform_ecosystem.md`
3. `spec_framework_ecosystem.md`
4. `spec_org_pattern_ecosystem.md` (combines Org-Vault + Org-Graph + Network — they share the diagnostic-test family)

The workspace router replaces each section with a 3-5 line pointer (persona+scope+spec-link).

`aDNA.aDNA/` is the standard's home; ecosystem definitions are part of the standard. The specs become first-class reference material discoverable to any agent that touches `aDNA.aDNA/what/specs/`.

## Consequences

- **Router token budget**: ~3,000-4,000 tokens saved per session that loads the router (every session in every project).
- **Discoverability**: agents touching `aDNA.aDNA/` see specs as proper artifacts; cross-vault searches find them.
- **Update discipline**: future ecosystem changes (new pattern category, table-row additions) edit the spec file, not the router. Router pointers stable.
- **Risk: split-brain**: if a new ecosystem-pattern category emerges and only updates the router, the spec becomes stale. Mitigation: cross-link router pointer text says "spec is authoritative — see there for active members + maturity."
- **Cross-vault touches**: 5 new files in `aDNA.aDNA/` (4 specs + this ADR). Counted at M01 sign-off in dossier §Cross-Vault Touches.

## Co-signers

- **Hestia** (`node.aDNA`) — author of `campaign_lattice_compliance_upgrade`; extraction discipline.
- **Rosetta** (`aDNA.aDNA`) — owner of the standard + `what/specs/` directory.
- **Berthier** (`lattice-labs`) — coord for lattice-labs row impact (LatticeLabs.aDNA mentioned in Org-Vault spec).

## Provenance

Drafted at `campaign_lattice_compliance_upgrade` M01 (2026-05-20). Applied at M01 Obj 6 (Stanley D3 = aggressive default sub-picks for `~/lattice/CLAUDE.md`).
