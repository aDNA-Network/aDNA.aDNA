---
type: backlog
status: accepted
created: 2026-05-18
filed_retroactively: 2026-05-19
updated: 2026-07-02
last_edited_by: agent_rosetta
originating_vault: "LatticeNetwork.aDNA (display: Alpha Lattice)"
originating_session: session_stanley_20260518_143528_arch_01_spec_body
originating_commit: b6e510d
retroactive_filing_session: session_stanley_20260519_arch_04_spec_body
retroactive_filing_finding: F-S13-02 (Session 13 process finding — placeholder not created at arch_01 close 2026-05-18; surfaced at arch_03 close; discharged 2026-05-19 at arch_04 / Session 15 pre-flight)
ratification_target_version: "v8.0+"
upstream_target: adna_v8_namespace_network_node_mirror_extension
fold_in_checkpoint: phase_7_cross_check_in_to_adna_adna
carry_ref: LatticeNetwork.aDNA/who/coordination/coord_2026_05_18_adna_standard_interop.md
parallel_discharge_with: idea_upstream_permission_edge_entity_type.md  # same namespace claim; same upstream contract; ADR-005 rule 6 + ADR-008 §f parallel discharge
ratification_log:
  - ratified_at: 2026-05-20  # M1.5 S1 close UTC (filled at commit)
    ratified_session: session_stanley_20260520T031453Z_v8_m15_s1
    via_adr: adr_017_network_adna_pattern_category_and_namespace_ratification
    via_ontology_update: what/ontology.md  # §Network.aDNA Extensions (2 Entity Types) subsection
    via_response_memo: who/coordination/coord_2026_05_19_v8_m15_latticenetwork_ratification_response.md
    commit_hash: <filled at commit>
    parallel_discharge_sibling_status: ratified_local  # idea_upstream_permission_edge_entity_type.md flipped together per ADR-005 rule 6
    v8_p6_promotion_target: base_ontology  # per ADR-017 §Decisions D8=A
tags: [backlog, upstream_proposal, vault_local_extension, network_, network_node_mirror, network_adna, latticenetwork, alphalattice, ratified_local, adr_017, parallel_discharge_complete]
fold_batch: champollion_m6_1_rc
---

# Upstream proposal — `network_node_mirror` entity-type (namespace `network_`)

> **Bounded peer-vault placeholder file** filed at `aDNA.aDNA/how/backlog/` per `LatticeNetwork.aDNA/who/governance/adr_005_vault_local_entity_type_ratification_protocol.md` Rule 3 + `LatticeNetwork.aDNA/who/governance/adr_002_network_adna_graph_schema.md §a`. ONLY this file is created at this peer-vault write; no other aDNA.aDNA content modified. **Retroactive filing**: this placeholder should have been created at Session 11 (arch_01 close, 2026-05-18); the omission was surfaced at Session 13 as finding F-S13-02 (`how/missions/artifacts/aar_arch_03_spec_body.md`) and discharged at Session 15 (arch_04 / Phase-2 CLOSE pre-flight, 2026-05-19). The sibling `idea_upstream_permission_edge_entity_type.md` was filed on-time at Session 13 close.

## Proposal summary

LatticeNetwork.aDNA (the master/Einstein-node graph of the Alpha Lattice network; Network.aDNA pattern category per LIP-0006) declares a vault-local extension entity-type `network_node_mirror` at namespace `network_` — the first claim of the namespace (per ADR-002 §a; co-claimed by `permission_edge` at ADR-008 per ADR-005 rule 2(c) at Session 13). The declaration follows ADR-005 protocol rules 1-6; awaiting upstream aDNA-standard countersign at Phase-7 cross-check-in. **Parallel discharge** with `permission_edge` per ADR-005 rule 6 — both entity-types co-target the same `network_` namespace claim under the single Carry 2 PRIMARY coord memo.

## Per ADR-005 rule 3 minimum content

| Field | Content |
|---|---|
| **Type name** | `network_node_mirror` |
| **Namespace** | `network_` (first claim per ADR-002 §a; `permission_edge` co-claims per ADR-005 rule 2(c) at ADR-008) |
| **Triad leg** | WHAT |
| **Directory in consumer vault** | `what/network/nodes/<hostname>.aDNA/` (one mirror directory per ingested node; one node, one mirror; SO-7 read-mostly invariant) |
| **Ratification target version** | aDNA v8.0+ (parallel with `permission_edge`; same Carry 2 PRIMARY memo) |
| **Originating vault** | LatticeNetwork.aDNA (display: Alpha Lattice) |
| **Originating session** | session_stanley_20260518_143528_arch_01_spec_body (Phase-2 mission 1 of 4 — `mission_arch_01_spec_network_adna_structure`) |
| **First binding reference** | `LatticeNetwork.aDNA/what/specs/spec_network_adna_structure.md §3` (subdirectory binding contract — `what/network/nodes/` row) + `LatticeNetwork.aDNA/who/governance/adr_002_network_adna_graph_schema.md §a` (decision-level declaration with 5-point rationale) |

## Body schema (mirror semantics)

`network_node_mirror` is a **directory entity-type**, not a single-file entity-type. The mirror directory at `what/network/nodes/<hostname>.aDNA/` is a structural copy of the source node's `node.aDNA/` content tree, ingested + verified per the transmission contract at `LatticeNetwork.aDNA/what/specs/spec_node_adna_transmission_registration.md` (ADR-004).

| Aspect | Content |
|---|---|
| **Authoritative source** | Each node's own `node.aDNA` (transmitted + signature-verified per ADR-004) |
| **Editability invariant** | SO-7 read-mostly: never hand-edit a mirror to assert state the node has not transmitted; re-request transmission instead |
| **Lifecycle** | Created at first verified transmission (Phase-3+ ingestion); refreshed on cadence per arch_02 transmission protocol; tombstoned on revocation (SO-6 archive-never-delete) |
| **Distinction from `context`** | The `network_node_mirror` entity-type CANNOT collapse into base `context` because editability invariants differ — `context` files are vault-author-editable; mirrors are source-node-authoritative |
| **Distinction from `node.aDNA` extensions (`inventory`/`identity`)** | Same content shape, different ownership + lifecycle: `inventory`/`identity` sit source-side (per-node); `network_node_mirror` sits aggregator-side (master-graph) |

## Cross-vault binding sites

| Site | Path | Role |
|---|---|---|
| MANIFEST row | `LatticeNetwork.aDNA/MANIFEST.md` `### Vault-local extension entity types` table row 1 | Vault-level declaration record |
| Spec body | `LatticeNetwork.aDNA/what/specs/spec_network_adna_structure.md §3` | Subdirectory binding contract — `what/network/nodes/` row binds to this entity-type |
| ADR | `LatticeNetwork.aDNA/who/governance/adr_002_network_adna_graph_schema.md §a` | Entity-type-level decision with 5-point rationale (ADR-005 rules 1-6 applied) |
| AGENTS.md | `LatticeNetwork.aDNA/what/network/nodes/AGENTS.md` | Subdir scope + populate-at-Phase-3+ note; genesis prototype exemplar `percy_l1.aDNA/` |

All 4 sites carry `assumes_draft: true` per ADR-003 rule 2 (Carry 2 PRIMARY upstream-aDNA-standard countersign).

## Genesis prototype exemplar

`what/network/nodes/percy_l1.aDNA/` (created at Session 7 recon_03) is the genesis prototype exemplar — a pre-transmission dossier with SO-8 disclaimer (frontmatter + body). It is NOT a verified mirror; the directory placement is for **adjacency** to the eventual mirror. When Percy transmits per arch_02 contract, the mirror lands as a sibling of the dossier; the dossier persists as the pre-transmission planning artifact (not replaced).

This pattern — pre-transmission dossier + post-transmission mirror co-located — may inform the v8.0+ entity-type pattern (see Action item 5 below).

## Lifecycle binding to LIP-0003 events

Mirror lifecycle (creation/refresh/tombstone) emits Tier-1 ledger events at the arch_01 §6.4 call-site 1 (`node-mirror-ingested` and `node-mirror-tombstoned` under `node_id = alpha_lattice_einstein` at Network.aDNA-side). When LIP-0003 v1.1 Membership tier lands (Carry 3 EP-1 at lattice-protocol/), `MEMBERSHIP_ADMIT` + `MEMBERSHIP_REVOKE` events at the source-node side may bind to mirror lifecycle at the aggregator side; the directory schema is unchanged.

## Parallel-discharge mechanics

When Carry 2 PRIMARY (`LatticeNetwork.aDNA/who/coordination/coord_2026_05_18_adna_standard_interop.md`) returns with aDNA-standard countersign on `network_` namespace + both entity-types:

1. Both placeholder files (this one + `idea_upstream_permission_edge_entity_type.md`) update `Upstream proposal` columns to point to the ratified namespace registry entry
2. Both MANIFEST.md rows update `Standard?` columns to "Ratified at aDNA v<N> (commit <hash>)"
3. All binding-site `assumes_draft: true` flags flip to `false` per ADR-003 rule 4
4. ADR-005 §Ratification log gets 2 entries (one per entity-type)
5. ADR-003 §Discharge log gets per-binding-site entries
6. CHANGELOG entry records the parallel discharge

Per ADR-005 rule 6 + ADR-008 §f, partial discharge (one entity-type but not the other) is NOT permitted without ADR-003 rule 5 escalation. Per ADR-005 rule 2(c), the namespace `network_` is a single co-claim; partial namespace rename invalidates the co-claim inheritance.

## Action requested from aDNA.aDNA owner

1. Review the entity-type declaration + 5-point rationale (ADR-002 §a) for compatibility with v8.0+ extension entity-type pattern
2. Confirm namespace `network_` reservation (first claim, then `permission_edge` co-claims)
3. Countersign at Phase-7 cross-check-in OR file counter-proposal per ADR-005 rule 6 escalation
4. If counter-proposing namespace rename (e.g., to `mirror_` instead of `network_`), apply rename to BOTH entity-types in parallel; partial rename invalidates the rule 2(c) co-claim inheritance
5. Consider whether the pre-transmission-dossier-plus-post-transmission-mirror co-location pattern (genesis prototype `percy_l1.aDNA/`) warrants explicit v8.0+ documentation as a sibling pattern

## Ratification log

| Field | Value |
|---|---|
| **Ratified** | 2026-05-20 (M1.5 S1 close) |
| **Ratified-session** | `session_stanley_20260520T031453Z_v8_m15_s1` |
| **Via ADR** | [[../../what/decisions/adr_017_network_adna_pattern_category_and_namespace_ratification.md\|ADR-017]] §Decision Clause C |
| **Via ontology update** | [[../../what/ontology.md\|`aDNA.aDNA/what/ontology.md`]] `### Network.aDNA Extensions (2 Entity Types)` subsection — `network_node_mirror` row 25 |
| **Via response memo** | [[../../who/coordination/coord_2026_05_19_v8_m15_latticenetwork_ratification_response.md\|`coord_2026_05_19_v8_m15_latticenetwork_ratification_response.md`]] §3.2 |
| **Commit hash** | `<filled at commit>` |
| **Parallel-discharge sibling status** | `idea_upstream_permission_edge_entity_type.md` — also `ratified_local` (flipped in same commit per peer ADR-005 rule 6 + ADR-008 §f) |
| **v8 P6 promotion target** | base ontology (14 → 14+2 base types at v8.0 tag per ADR-017 §Decisions D5 + D8) |

**Status transition**: `pending_upstream_review → ratified_local`. Vault-local namespace + entity-type now recognized at the aDNA standard-owner level; v8.0 P6 batch propagation to `.adna/` upstream template + base-ontology table queued per Campaign S.O. #14 + ADR-005 rule 3.

**F-S13-02 finding fully discharged**: this placeholder was created retroactively 2026-05-19 (Session 15 / arch_04 pre-flight) per F-S13-02 cleanup; ratification at M1.5 closes the F-S13-02 lifecycle. Both sibling placeholders now ratified together — the parallel-discharge invariant holds even though the placeholders were filed asymmetrically (sibling filed 2026-05-18; this one filed 2026-05-19 retroactively).

**Peer-vault flips pending at Venus's next session** (out of M1.5 scope per Hard Constraint zero-writes-into-peer-vaults — Venus reads ADR-017 via git-as-coordination-bus + applies):

- `LatticeNetwork.aDNA/MANIFEST.md` `### Vault-local extension entity types` table row 1 `Standard?` column update.
- `LatticeNetwork.aDNA/what/specs/spec_network_adna_structure.md §3` `assumes_draft: true → false` flip per peer ADR-003 rule 4.
- `LatticeNetwork.aDNA/who/governance/adr_002_network_adna_graph_schema.md §a` `assumes_draft: true → false` flip.
- `LatticeNetwork.aDNA/who/governance/adr_005_vault_local_entity_type_ratification_protocol.md` §Ratification log entry.
- `LatticeNetwork.aDNA/what/network/nodes/AGENTS.md` `assumes_draft: true → false` flip; genesis prototype exemplar `percy_l1.aDNA/` SO-8 disclaimer can stay (pre-transmission dossier; not a verified mirror — distinct from `network_node_mirror` ratification).
- `LatticeNetwork.aDNA/CHANGELOG.md` entry recording the parallel discharge.

## Cross-references

- **Bound spec**: `LatticeNetwork.aDNA/what/specs/spec_network_adna_structure.md` (Session 11 deliverable; arch_01 close 2026-05-18)
- **Declaration ADR**: `LatticeNetwork.aDNA/who/governance/adr_002_network_adna_graph_schema.md` (§a + §b row 1)
- **Protocol ADR**: `LatticeNetwork.aDNA/who/governance/adr_005_vault_local_entity_type_ratification_protocol.md` (rules 1-6 applied verbatim)
- **Annotation pattern**: `LatticeNetwork.aDNA/who/governance/adr_003_assumes_draft_true_pattern.md` (clause-level annotations at 4 binding sites)
- **Co-claim sibling**: `idea_upstream_permission_edge_entity_type.md` (this directory; filed Session 13 / arch_03 close)
- **Carry 2 PRIMARY memo**: `LatticeNetwork.aDNA/who/coordination/coord_2026_05_18_adna_standard_interop.md`
- **Path β waiver**: `LatticeNetwork.aDNA/who/coordination/coord_2026_05_18_phase1_close_with_carry_waiver.md §4`
- **Genesis prototype exemplar**: `LatticeNetwork.aDNA/what/network/nodes/percy_l1.aDNA/dossier.md` (recon_03 pre-transmission dossier; SO-8 disclaimer)
- **Retroactive-filing finding**: F-S13-02 (Session 13 process finding — placeholder omission at Session 11 / arch_01 close; surfaced at Session 13 / arch_03 close; discharged at Session 15 / arch_04 pre-flight)


## Champollion G0 disposition — F (M1.1, 2026-07-02)

**ACCEPT → template-fold.** Marked `fold_batch: champollion_m6_1_rc` — M6.1 assembles the release candidate from this marker (nothing ships to `.adna/` here). Ratified at Champollion G0 (D2).
