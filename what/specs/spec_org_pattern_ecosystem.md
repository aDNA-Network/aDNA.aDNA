---
type: spec
kind: ecosystem_spec
name: org_pattern_ecosystem
created: 2026-05-20
updated: 2026-05-20
version: "0.1"
status: active
last_edited_by: agent_stanley
tags: [spec, ecosystem, org_vault, org_graph, network, aDNA_pattern]
extraction_source: ~/lattice/CLAUDE.md lines 204-252 (extracted at compliance campaign M01)
co_signed_adr: aDNA.aDNA/what/decisions/adr_012_ecosystem_spec_extraction.md
covers_categories: [Org-Vault.aDNA, Org-Graph.aDNA, Network.aDNA]
---

# Org-Pattern Ecosystem

Authoritative reference for three related aDNA pattern categories that all model organizational structure: **Org-Vault** (Inside-Out: org governs itself via the vault), **Org-Graph** (Outside-In: WE model an outside org), **Network** (live aggregate of nodes transmitting their own `node.aDNA` into this vault).

## Org-Vault Ecosystem

**Org-Vaults** are governance vaults that serve as the operational home of a project or organization. Unlike Forges (artifact producers) or Platforms (runtime producers), an org-vault owns **everything the project does**: strategy, governance, research, partner relations, publishing coordination, daily operations. Code — when it exists — lives in a separate partner-org repo or sibling code repo; the vault governs, the code executes.

### Lineage — not a new aDNA pattern category

Org-Vaults inherit from the `lattice-labs/` + `wga.aDNA/` + `ContextCommons.aDNA/` lineage. The pattern is defined by what every live org-vault implements: (1) foundational identity document (CHARTER), (2) delegated authority (council/stewards), (3) documented decision process + registry (ADRs/LIPs/minutes), (4) conduct standards (principle + infrastructure-enforced), (5) execution hierarchy with OODA feedback (War/Campaign/Mission/Session OR council-review cycles).

### Active Org-Vaults

| Org-Vault | Persona | Project scope | Code repo | Governance body | Maturity |
|-----------|---------|--------------|-----------|------------------|----------|
| `lattice-labs/` | Berthier (in-residence until cutover) | Lattice Protocol operation — **predecessor to `LatticeLabs.aDNA/` as of 2026-05-18; operationally authoritative until `campaign_latticelabs_genesis` Phase-6 cutover** | `lattice-protocol/` + `latlab/` + `.adna/` | Lattice Council (5 Stewards + FA veto) | **Predecessor** (operationally authoritative until Phase-6 cutover) |
| `LatticeLabs.aDNA/` | Berthier | Lattice Protocol operation (at-current-standard successor to `lattice-labs/`) | `lattice-protocol/` + `latlab/` + `.adna/` | Lattice Council (5 Stewards + FA veto) — inherits | **Genesis** — `campaign_latticelabs_genesis` ("Operation Continuity") Phase 1 in progress (5+1 parallel-recon); Phase-6 coordinated w/ LatticeNetwork.aDNA Phase 6 |
| `wga.aDNA/` | — | World Genome Academy | — (buildpack + site) | 5 Councils (Ed / Ag / Res / Indigenous-veto / Tech) + Director | **Operational** |
| `ContextCommons.aDNA/` | — | Agentic literacy / enablement / support | — | Curriculum Council (7-11) + Community Stewards | **Operational** |
| `science_stanley.aDNA/` | — | Science Stanley brand | — (publishes via SiteForge/ComfyForge/CanvasForge) | Single-operator + Voice Bible | **Active** |
| `RareArchive.aDNA` | Mnemosyne | Rare Archive OSS rare-disease AI (diagnosis-acceleration pillar of AI4U) | `github.com/Wilhelm-Foundation/rare-archive` (partner-org canonical per ADR 001) | Steward Council 5 seats (composition pending) | **Genesis planning** (P0 paused for AI4U repositioning) |
| `WilhelmAI.aDNA` | Hygieia | AI4U — Wilhelm AI Initiative for the Undiagnosed; umbrella over 4 PLWUD-impact initiatives | — (initiatives have own code repos) | AI4U Steward Council framework (composition deferred to DG0) | **P0 active under website-first pivot** |

### Sibling-Coupling Pairs

Some org-vaults pair with a sibling Platform.aDNA vault for architectural coupling without governance entanglement. Example: `RareArchive.aDNA` ↔ `RareHarness.aDNA` (rod-serpent — memory supplies, healing applies). Each vault seats its own council; publishing contracts (ADR 007, co-signed) govern the handoff.

### Umbrella-Pillar Relationships

An org-vault may sit under an org-vault umbrella that holds program-level frame across sibling initiatives. Example: `WilhelmAI.aDNA` (AI4U umbrella, Hygieia) holds program identity over four initiatives, of which `RareArchive.aDNA` (Mnemosyne) is the diagnosis-acceleration pillar. Each pillar's vault is canonical for its own scope; the umbrella vault is canonical for AI4U brand, attribution, and cross-initiative coordination. Cross-graph coord memos coordinate time-bounded cross-vault efforts; co-signed ADRs codify persistent coupling.

---

## Org-Graph Ecosystem

**Org-Graphs** are aDNA-shaped vaults whose primary content is *our structured model of an organization that is NOT the operating org* — Outside-In modeling, where OUR org operates from outside and the modeled org is a subject. Unlike Org-Vaults (Inside-Out: the org governs itself via the vault), an Org-Graph captures the modeled org's identity, structure, processes, decisions, history, and external relationships for agentic understanding and downstream synthesis. Engagement work performed against the modeled org may be co-located as an optional sub-surface (`who/engagement/`), but the primary deliverable is the graph itself (`who/client/`).

**Ratified as 5th aDNA pattern category at lattice-labs M-H.1.4 2026-05-15** via [LIP-0005](../../../lattice-labs/how/governance/lips/lip_0005_org_graph_adna_pattern_category.md). Long-form doctrine: [doctrine_org_graph_pattern.md](../../../lattice-labs/how/doctrine/doctrine_org_graph_pattern.md). Provenance: Stanley hypothesis 2026-05-14 + Berthier opinion `note_2026_05_14_berthier_opinion_orggraph_pattern.md` Option B fold-in; supersedes prior "Engagement.aDNA" + "Domain-Partner Percy-class" framings.

### Diagnostic Test

> *"Whose vault is this — theirs or ours-modeling-them?"* If theirs, Org-Vault. If ours-modeling-them, Org-Graph.

### Active Org-Graphs

| Org-Graph | Persona | Modeled org | Engagement scope | Repo | Maturity |
|-----------|---------|-------------|------------------|------|----------|
| `SuperLeague.aDNA` | TBD | SuperLeague-the-company | TBD (Carly + Herb partner-clone work in progress; Stanley not yet cloned) | `LatticeProtocol/SuperLeague.aDNA` (partner-cloned by Carly + Herb 2026-05-13) | **Reclassified Org-Graph.aDNA 2026-05-15** (LIP-0005) |
| `CakeHealth.aDNA` | Berthier | Dr. Ami Mac's clinical practice + the emerging CAKE Health vision (Operation CAKE) | Operation CAKE M00-M08 missions (M01 partial; M02-M08 planned) | `https://github.com/LatticeProtocol/CakeHealth.aDNA` (private; Stanley + Herb local clones) | **Reclassified Org-Graph.aDNA 2026-05-15** (LIP-0005) |
| `PercySleep.aDNA` | TBD | Percy's sleep-research org | TBD (Herb's machine) | Herb-local | **Reclassified Org-Graph.aDNA 2026-05-15** (LIP-0005) |

### Cross-Vault Federation Posture

Org-Graphs typically federate with lattice-labs (the operating org) as **sub-context** (OUR-confidential at v1); the modeled org generally does NOT read its Org-Graph at v1 (would require trust ceremony for opt-in disclosure; deferred to v2). Engagement contracts on a per-vault basis may override (some engagements explicitly include the model as a deliverable).

### Forge Angle

A future **GraphForge.aDNA** could produce canvas-visualizations of Org-Graphs (org charts, decision timelines, stakeholder maps). For now, CanvasForge.aDNA serves Org-Graph consumers directly via existing wrapper pattern. **GraphForge.aDNA creation deferred until ≥3 Org-Graph instances actively use canvas patterns** (LIP-0005 §4; anti-premature-universality).

---

## Network Ecosystem

**Networks** are a candidate 6th aDNA pattern category (**provisional** — [LIP-0006](../../../lattice-labs/how/governance/lips/lip_0006_network_adna_pattern_category.md) draft; ratified at `LatticeNetwork.aDNA` genesis `recon_00`). A Network.aDNA vault is the live state/membership/operations graph of a federated lattice network: it ingests each participating node's transmitted `node.aDNA` object (mirrored under `what/network/nodes/<nodename>.aDNA/`) and memorializes topology, permissions, ledger events, and per-node state as native aDNA primitives, interoperating with the aDNA standard and the Lattice Protocol. The authoritative source of any node's truth remains that node's own `node.aDNA`; the Network vault is a read-mostly mirror + memorialization layer. Directory naming follows the canonical `LatticeNetwork.aDNA` form per ADR-001; the network's proper name lives in `MANIFEST.display_name`.

### Diagnostic Test

> *"Does this vault hold an org's operations (Org-Vault), our model of an outside org (Org-Graph), or the live aggregated state of a running network whose nodes transmit into it (Network)?"*

### Active Networks

| Network | Display name | Persona | Scope | Repo | Maturity |
|---------|---|---------|-------|------|----------|
| `LatticeNetwork.aDNA` | Alpha Lattice | Venus | Master/Einstein-node graph of the Alpha Lattice (Stanley L1 master · exxact3 L2 · team L1s Carly/Herb · partner L1s KINN/SwS/MP/Percy/WGA · L0 tier) | local (forked 2026-05-17 as AlphaLattice.aDNA; renamed 2026-05-18 per ADR-001; remote TBD) | **Genesis** — `campaign_alphalattice_genesis` "Operation Constellation" (8 phases; Phase 0 closed 2026-05-18). Genesis-first migration of federation work from lattice-labs at Phase 6. |

### Relationship to node.aDNA

`node.aDNA/` (Hestia) is the *per-node* operational vault; Network.aDNA is its *aggregation* counterpart. The transmission contract (serialize → sign → transmit → verify → rename `<nodename>.aDNA` → place; refresh; revoke) is co-negotiated between the two plus `lattice-protocol` at genesis Phase-Architect.

### Visualization-Forge Angle

Deferred until ≥2 Network.aDNA instances (anti-premature-universality, same posture as LIP-0005 §4).

## Provenance

Extracted from `~/lattice/CLAUDE.md` at `campaign_lattice_compliance_upgrade` M01 (2026-05-20). Pre-extraction location: workspace-router §§ Org-Vault / Org-Graph / Network (lines 204-252). Co-signed ADR: `aDNA.aDNA/what/decisions/adr_009_ecosystem_spec_extraction.md`.
