---
type: adr
adr_number: 005
title: "Three-way vault boundary: node.aDNA / aDNA.aDNA / lattice-labs"
status: accepted
created: 2026-05-07
updated: 2026-05-08
last_edited_by: agent_stanley
supersedes:
superseded_by:
tags: [adr, decision, vault_boundary, node_adna, adna_adna, lattice_labs, governance]
---

# ADR-005: Three-way vault boundary — `node.aDNA/` / `aDNA.aDNA/` / `lattice-labs/`

## Status

Accepted at Stage 2 Session 1 of `campaign_adna_v2_infrastructure`, 2026-05-08 (proposed 2026-05-07; promoted by operator at session start per Stage 1 refinement-log recommendation).

## Context

`campaign_adna_v2_infrastructure` introduces a new vault, `node.aDNA/` (designed in M04). The workspace already hosts two adjacent governance vaults: `aDNA.aDNA/` (Operation Rosetta — the self-referential aDNA documentation vault) and `lattice-labs/` (the Lattice Labs operational HQ). These three vaults overlap in apparent purpose if read superficially:

- All three are governance vaults.
- All three have CLAUDE.md, MANIFEST.md, STATE.md, and host campaigns.
- All three sit in the same `~/aDNA/` workspace.

A cold reader (especially a new aDNA operator who is not Stanley) would reasonably ask: *Why three vaults? When do I read which one? Which one do I fork to my own machine?*

M01 originally framed `node.aDNA/` as "Distinct from `lattice-labs/`" but did not satisfy the dual-audience test (Standing Order #1) — i.e., the differentiation was not legible to a new operator. The operator clarified the boundary during plan review (2026-05-07).

## Decision

The three vaults are differentiated by **scope** and **who has one**, not by structure:

| Vault | Scope | Who has one |
|---|---|---|
| `node.aDNA/` | Per-node config / operations / permissions / state of *this particular node* in the broader operational context of the local lattices / context-networks it participates in | Most aDNA users (one per node) |
| `aDNA.aDNA/` | Development vault for the aDNA project / ecosystem / **standard** itself — patterns, governance, the standard's own evolution | Anyone working on the standard (this vault hosts campaigns about aDNA) |
| `lattice-labs/` | Context vault/graph for the **Lattice Labs org/team/community** that develops lattice-protocol, latlab, the aDNA standard, etc. | Only Lattice Labs itself (most users do *not* have a fork) |

**Decision rules** (canonical answer to "which vault?"):

1. **Is the work about the operator's own node?** (Tool versions, lattice memberships, this-machine-specific permissions, local cross-project campaigns that don't change the standard.) → `node.aDNA/`.
2. **Is the work about the aDNA standard / patterns / repo / template?** (Skills, ontology, frontmatter schema, CLAUDE.md format, version policy, this campaign.) → `aDNA.aDNA/`.
3. **Is the work about Lattice Labs as an organization?** (lattice-protocol roadmap, latlab decisions, partner relations, the org's own missions.) → `lattice-labs/` (most readers will not have this fork).

**Cross-references in CLAUDE.md routing**:
- `lattice/CLAUDE.md` (workspace router) lists all three with clear scope — already does so for aDNA.aDNA and lattice-labs; M04 adds the `node.aDNA/` row.
- `node.aDNA/CLAUDE.md` (M04 deliverable) carries a forward reference to `aDNA.aDNA/how/campaigns/` ("aDNA-standard development campaigns live here, not in this vault").
- `aDNA.aDNA/CLAUDE.md` Project Map gains a brief note (as part of M07 simplification) describing the three-way boundary.

## Consequences

### Positive
- A new operator can answer "which vault?" deterministically, without reading three CLAUDE.md files.
- Self-reference is preserved: campaigns about aDNA live in aDNA.aDNA, demonstrating the standard. Per-node operations live in the node-operator's own vault, demonstrating per-node sovereignty.
- The boundary scales: new vaults that emerge later (e.g., `LatticeScope.aDNA/`, `RareHarness.aDNA/`) are evaluated against the same three categories — *or* are seen as belonging to a separate ecosystem family (Forge.aDNA / Platform.aDNA / Org-Vault.aDNA) per `lattice/CLAUDE.md`.
- `lattice-labs/` is correctly framed as an org-internal vault, not a generic operational hub. Most aDNA users will never have one.

### Negative
- Some campaigns straddle the boundary (e.g., a campaign that changes the standard *and* requires per-node migration steps). For those, host in the primary-subject vault and cross-link from the others.
- Operators must learn three vault names and three scopes. We mitigate by making `lattice/CLAUDE.md` the routing table and keeping each vault's CLAUDE.md short on the boundary question.

### Neutral
- This ADR was triggered by M04 (`node.aDNA/` design) but applies more broadly. It sets the canonical reference for any future "which vault should this go in?" question at the aDNA level.
- Companion to ADR-004 (campaign home for `campaign_adna_v2_infrastructure`).
