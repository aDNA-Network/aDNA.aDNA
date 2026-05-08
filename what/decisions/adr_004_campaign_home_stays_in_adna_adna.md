---
type: adr
adr_number: 004
title: "campaign_adna_v2_infrastructure home stays in aDNA.aDNA (does not migrate to node.aDNA)"
status: accepted
created: 2026-05-07
updated: 2026-05-08
last_edited_by: agent_stanley
supersedes:
superseded_by:
tags: [adr, decision, campaign_adna_v2_infrastructure, governance, vault_boundary]
---

# ADR-004: `campaign_adna_v2_infrastructure` home stays in `aDNA.aDNA/`

## Status

Accepted at Stage 2 Session 1 of `campaign_adna_v2_infrastructure`, 2026-05-08 (proposed 2026-05-07; promoted by operator at session start per Stage 1 refinement-log recommendation).

## Context

`campaign_adna_v2_infrastructure` was seeded 2026-05-07 at `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/`. Its M04 mission designs a new vault, `node.aDNA/`, which is explicitly framed as the future home for global cross-project / cross-vault campaigns.

This raised a self-reference question during Stage 1 review: **once `node.aDNA/` exists, should this campaign migrate there?** Either answer is defensible. Without an explicit decision, future agents would have to re-derive the boundary.

The operator clarified the boundary during plan review (2026-05-07):

| Vault | Scope | Who has one |
|---|---|---|
| `node.aDNA/` | Per-node config / operations / permissions / state of *this particular node* in the broader operational context of the local lattices / context-networks it participates in | Most aDNA users (one per node) |
| `aDNA.aDNA/` | Development vault for the aDNA project / ecosystem / **standard** itself — patterns, governance, the standard's own evolution | Anyone working on the standard |
| `lattice-labs/` | Context vault/graph for the **Lattice Labs org/team/community** that develops lattice-protocol, latlab, the aDNA standard, etc. | Only Lattice Labs itself (most users do *not* have a fork) |

## Decision

`campaign_adna_v2_infrastructure` lives at `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/` for the duration of its lifecycle (planning, execution, closeout, archive). It does **not** migrate to `node.aDNA/` even after M04 bootstraps that vault.

**Rationale**: The campaign concerns the aDNA standard, repo, patterns, and template version — that is the development scope of `aDNA.aDNA/`. `node.aDNA/` would be the right home for a *node-operational* campaign (e.g., "upgrade my node's tool-chain", "audit my node's lattice memberships"), not for a campaign about the standard itself.

This decision generalizes: **campaigns that evolve the aDNA standard belong in `aDNA.aDNA/`. Campaigns about a particular node's operational state belong in `node.aDNA/`. Campaigns about Lattice Labs as an org belong in `lattice-labs/`.**

## Consequences

### Positive
- Clear, durable boundary: future campaigns route to the right vault by their *subject*, not by the vault that happens to exist first.
- `aDNA.aDNA/` stays self-referential — campaigns that change aDNA are governed by aDNA, demonstrating Standing Order #2 (self-reference).
- `node.aDNA/` retains a tight, operational identity — it does not absorb development-scope work.

### Negative
- Future operators reading `node.aDNA/` may wonder where global aDNA-development campaigns live; we mitigate via a forward reference in `node.aDNA/CLAUDE.md` pointing to `aDNA.aDNA/how/campaigns/`.
- Some cross-vault work may not have a clean home (e.g., campaigns that touch *both* the standard and a particular node's operations). For those, prefer `aDNA.aDNA/` if the standard is the primary subject, `node.aDNA/` otherwise; cross-link when ambiguous.

### Neutral
- This ADR is part of `campaign_adna_v2_infrastructure` planning; it sets a pattern but is not a policy beyond aDNA-development campaigns.
- See ADR-005 for the canonical three-way vault boundary that this decision rests on.
