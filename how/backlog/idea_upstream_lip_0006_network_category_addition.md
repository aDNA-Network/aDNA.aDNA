---
type: backlog
status: pending_v8_p6_batch
created: 2026-05-20
last_edited_by: agent_stanley
originating_vault: aDNA.aDNA  # this placeholder is filed at the standard-owner side; tracks v8 P6 propagation of an aDNA.aDNA-owned ratification (ADR-017 Clause A) to the `.adna/` upstream template
originating_session: session_stanley_20260520T031453Z_v8_m15_s1
ratification_target_version: "v8.0"  # v8.0 batch propagation per ADR-017 §Decisions D5 + D8
upstream_target: adna_v8_lip_0006_network_category_addition_to_base_template
fold_in_checkpoint: v8_p6_ecosystem_propagation  # v8 P6 close mission set (M6.1-M6.4); CHANGELOG entry + ecosystem coord memos per M08b precedent
source_decision: adr_017_network_adna_pattern_category_and_namespace_ratification  # ADR-017 §Decision Clause A (LIP-0006 countersign)
source_lip: lattice-labs/how/governance/lips/lip_0006_network_adna_pattern_category.md  # canonical LIP file (in lattice-labs, not this vault)
parallel_with:
  - idea_upstream_permission_edge_entity_type.md      # ratified at M1.5; same v8 P6 batch
  - idea_upstream_network_node_mirror_entity_type.md  # ratified at M1.5; same v8 P6 batch
tags: [backlog, upstream_proposal, v8_p6_batch, lip_0006, network_adna, pattern_category, batch_promotion, additive_not_breaking, base_ontology_destination, m15_consumer, adr_017_consumer]
---

# Upstream proposal — LIP-0006 Network.aDNA pattern category addition to `.adna/` template (v8 P6 batch)

> **Standard-owner-side placeholder** filed at `aDNA.aDNA/how/backlog/` at M1.5 S1 close 2026-05-20. Tracks v8.0 P6 batch propagation of the LIP-0006 ratification (ADR-017 Clause A) from aDNA.aDNA-side ontology + workspace router to the canonical upstream template at `LatticeProtocol/aDNA` (the `.adna/` clone). **Distinct from** the 2 sibling entity-type placeholders (which track per-entity-type promotion); this one tracks the **category-level** addition.

## Proposal summary

LIP-0006 ratifies Network.aDNA as the 6th canonical aDNA pattern category (joining Forge + Platform + Framework + Org-Vault + Org-Graph; ratified at aDNA.aDNA-side via ADR-017 §Clause A at M1.5 S1 close 2026-05-20). At v8.0 P6 (M6.1-M6.4 mission set in `campaign_adna_serious_tool_readiness`), the category addition propagates from the standard-owner vault to the canonical upstream template repo (`github.com/LatticeProtocol/aDNA`; mirrored as `.adna/` clone in operator workspaces post-M03 flatten).

## Per ADR-005 rule 3 minimum content (category-level)

| Field | Content |
|---|---|
| **Type** | Pattern-category addition (not an entity-type addition; distinct from rule 3 entity-type discipline but follows the same v8 P6 batch propagation mechanism) |
| **Category name** | Network.aDNA |
| **Joins canonical list of** | Forge + Platform + Framework + Org-Vault + Org-Graph (5 → 6 categories) |
| **Distinguishing test source** | LIP-0006 §2 (peer file at `lattice-labs/how/governance/lips/lip_0006_network_adna_pattern_category.md`) |
| **First instance** | `LatticeNetwork.aDNA` (display name Alpha Lattice; persona Venus; master/Einstein-node graph of the Alpha Lattice federated lattice network) |
| **Ratification target version** | aDNA v8.0 (batch with 2 entity-type placeholders per ADR-017 §Decisions D5 + D8) |
| **Originating ratification** | aDNA.aDNA `adr_017_network_adna_pattern_category_and_namespace_ratification.md` §Clause A; M1.5 S1 close 2026-05-20 |

## Propagation sites (at v8 P6)

| Site | Path | Edit |
|---|---|---|
| **Workspace router** | `/Users/stanley/lattice/.adna/CLAUDE.md` (post-M03 flatten direct repo at `LatticeProtocol/aDNA`) | Mirror the `aDNA.aDNA/CLAUDE.md` Network Ecosystem section (currently provisional; ratified post-M1.5 — but `.adna/` is v7.0 frozen at `27e6395` until v8 P6) |
| **Base-ontology table** | `aDNA.aDNA/what/docs/adna_standard.md` (also mirrored to `.adna/what/docs/adna_standard.md` at v8 P6 batch) | Add Network.aDNA row alongside Forge/Platform/Framework/Org-Vault/Org-Graph; reference LIP-0006 + ADR-017 |
| **Pattern categories doctrine** (if exists at standard) | `aDNA.aDNA/what/docs/` (any doctrine file enumerating canonical categories — check at v8 P6 prep) | Add Network.aDNA |
| **CHANGELOG entry** | `aDNA.aDNA/CHANGELOG.md` (at v8 P6 batch — M6.1 prep) | Add v8.0 entry mentioning Network.aDNA category addition + ADR-017 link + LIP-0006 link |
| **Workspace ontology.md** | (already updated at M1.5 deliverable 3) | NO further action at v8 P6; current `aDNA.aDNA/what/ontology.md` §Network.aDNA Extensions subsection is canonical post-M1.5 |
| **Workspace router (this vault)** | `/Users/stanley/lattice/CLAUDE.md` | Already mentions Network.aDNA Ecosystem post-LatticeNetwork.aDNA rename 2026-05-18; verify section heading is still in place at v8 P6 |

## Lifecycle binding

- **Source ratification**: ADR-017 §Clause A (this vault; M1.5 2026-05-20) — establishes the standard-owner-side category ratification.
- **LIP source**: `lattice-labs/how/governance/lips/lip_0006_network_adna_pattern_category.md` — LIP-0006 itself; stays `accepted` at lattice-labs; aDNA.aDNA references via ADR-017 Clause A.
- **Workspace router**: `/Users/stanley/lattice/CLAUDE.md` — already categorizes LatticeNetwork.aDNA as Network.aDNA (provisional pre-M1.5; ratified post-M1.5 via ADR-017).
- **Upstream template propagation** (this placeholder): waits for v8 P6 batch.

This placeholder is **category-scope** (single canonical addition to the pattern-category enumeration); the 2 sibling entity-type placeholders are **entity-type-scope** (per-entity-type extensions added to the ontology table). All 3 placeholders ratify at the same v8 P6 batch.

## Cross-vault binding sites

| Site | Path | Role at v8 P6 |
|---|---|---|
| `.adna/CLAUDE.md` workspace router | upstream template | Mirror the Network Ecosystem section from `aDNA.aDNA/CLAUDE.md` (or workspace router CLAUDE.md if it lives there) |
| `.adna/what/docs/adna_standard.md` | upstream template | Add Network.aDNA row to base-category table; reference LIP-0006 + ADR-017 |
| `LatticeNetwork.aDNA/MANIFEST.md` | first-instance vault | No edit needed at v8 P6 (LatticeNetwork.aDNA already operates as Network.aDNA per its own genesis) |
| v3-EC follow-up campaign | `aDNA.aDNA/how/campaigns/campaign_adna_v3_ecosystem_compliance/` | Ecosystem-wide v8.0 application — 19+ partner vaults receive the standard-spec update + workspace-router refresh at v3-EC mission set |

## Action requested at v8 P6 mission entry

1. **M6.1 (v8.0 tag prep)** — verify `.adna/CLAUDE.md` workspace router + `.adna/what/docs/adna_standard.md` base-category table both have Network.aDNA row.
2. **M6.2 (v8.0 tag fire)** — single commit pushes v8.0 tag with Network.aDNA category in upstream template.
3. **M6.3 (ecosystem coord memos)** — v8.0 propagation receipts to 19+ partner vaults; each receives v8.0 standard-spec update mentioning new pattern category.
4. **M6.4 (campaign AAR + v3-EC mission tree finalize)** — Network.aDNA category addition recorded in v8.0 ship audit.

## Cross-references

- **Source ratification** (this vault): [[../../what/decisions/adr_017_network_adna_pattern_category_and_namespace_ratification.md|adr_017_network_adna_pattern_category_and_namespace_ratification.md]] §Decision Clause A
- **Source LIP** (lattice-labs): `lattice-labs/how/governance/lips/lip_0006_network_adna_pattern_category.md` (peer vault READ-only at M1.5)
- **First instance vault**: `LatticeNetwork.aDNA/CLAUDE.md` + `LatticeNetwork.aDNA/MANIFEST.md` (peer vault READ-only at M1.5)
- **Sibling placeholders** (parallel ratification at M1.5; same v8 P6 batch):
  - [[idea_upstream_permission_edge_entity_type.md|`idea_upstream_permission_edge_entity_type.md`]] — `network_` namespace co-claim entity-type (peer ADR-008)
  - [[idea_upstream_network_node_mirror_entity_type.md|`idea_upstream_network_node_mirror_entity_type.md`]] — `network_` namespace first-claim entity-type (peer ADR-002)
- **M1.5 mission spec**: [[../campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p1_m15_coord_network.md|`mission_adna_str_p1_m15_coord_network.md`]]
- **Response memo to Venus**: [[../../who/coordination/coord_2026_05_19_v8_m15_latticenetwork_ratification_response.md|`coord_2026_05_19_v8_m15_latticenetwork_ratification_response.md`]] §2
- **Workspace router** (post-rename 2026-05-18): `/Users/stanley/lattice/CLAUDE.md` §Network Ecosystem
- **v3-EC follow-up campaign** (planned successor; opens at v8 P6 close): [[../campaigns/campaign_adna_v3_ecosystem_compliance/campaign_adna_v3_ecosystem_compliance.md|campaign_adna_v3_ecosystem_compliance.md]]
