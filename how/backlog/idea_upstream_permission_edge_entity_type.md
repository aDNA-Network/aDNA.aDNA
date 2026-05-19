---
type: backlog
status: pending_upstream_review
created: 2026-05-18
last_edited_by: agent_stanley
originating_vault: LatticeNetwork.aDNA (display: Alpha Lattice)
originating_session: session_stanley_20260518_165918_arch_03_spec_body
originating_commit: <to be filled at session close>
ratification_target_version: "v8.0+"
upstream_target: adna_v8_namespace_network_permission_edge_extension
fold_in_checkpoint: phase_7_cross_check_in_to_adna_adna
carry_ref: LatticeNetwork.aDNA/who/coordination/coord_2026_05_18_adna_standard_interop.md
parallel_discharge_with: idea_upstream_network_node_mirror_entity_type.md  # same namespace claim; same upstream contract; ADR-005 rule 6 + ADR-008 §f parallel discharge
tags: [backlog, upstream_proposal, vault_local_extension, network_, permission_edge, network_adna, latticenetwork, alphalattice, awaiting_countersign]
---

# Upstream proposal — `permission_edge` entity-type (namespace `network_`)

> **Bounded peer-vault placeholder file** filed at `aDNA.aDNA/how/backlog/` per `LatticeNetwork.aDNA/who/governance/adr_005_vault_local_entity_type_ratification_protocol.md` Rule 3 + `LatticeNetwork.aDNA/who/governance/adr_008_permission_edge_entity_type_declaration.md` §c. ONLY this file is created at this peer-vault write; no other aDNA.aDNA content modified. Separate commit in aDNA.aDNA repo per LatticeNetwork.aDNA Session 13 close.

## Proposal summary

LatticeNetwork.aDNA (the master/Einstein-node graph of the Alpha Lattice network; Network.aDNA pattern category per LIP-0006) declares a vault-local extension entity-type `permission_edge` at namespace `network_` (co-claim with `network_node_mirror`, declared at arch_01 Session 11). The declaration follows ADR-005 protocol rules 1-6; awaiting upstream aDNA-standard countersign at Phase-7 cross-check-in. **Parallel discharge** with `network_node_mirror` per ADR-005 rule 6 — both entity-types co-target the same `network_` namespace claim under the single Carry 2 PRIMARY coord memo.

## Per ADR-005 rule 3 minimum content

| Field | Content |
|---|---|
| **Type name** | `permission_edge` |
| **Namespace** | `network_` (co-claim inheritance per ADR-005 rule 2(c); first claimed at arch_01 for `network_node_mirror`) |
| **Triad leg** | WHAT |
| **Directory in consumer vault** | `what/network/permissions/<edge_id>.yaml` (one YAML file per directed edge; file convention per recon-02 default Q4) |
| **Ratification target version** | aDNA v8.0+ (parallel with `network_node_mirror`; same Carry 2 PRIMARY memo) |
| **Originating vault** | LatticeNetwork.aDNA (display: Alpha Lattice) |
| **Originating session** | session_stanley_20260518_165918_arch_03_spec_body (Phase-2 mission 3 of 4 — `mission_arch_03_spec_ledger_state_testnet_interop`) |
| **First binding reference** | `LatticeNetwork.aDNA/what/specs/spec_ledger_state_testnet_interop.md §12` (10-field per-edge YAML body schema; ratified verbatim from `lattice-labs/who/coordination/coord_2026_05_17_partner_node_pubkey_sharing_and_memorialization.md §4 Layer-2` operator-blessed schema) + `LatticeNetwork.aDNA/who/governance/adr_008_permission_edge_entity_type_declaration.md §g` (decision-level summary) |

## Body schema (10 fields; per recon-02 default Q4 + lattice-labs `coord_2026_05_17 §4 Layer-2`)

| # | Field | Type | Description |
|---|---|---|---|
| 1 | `type` | string | Literal `permission_edge` |
| 2 | `edge_id` | string | Directed edge identifier `<source_hostname>→<target_hostname>` |
| 3 | `direction` | enum | `outbound` \| `inbound` \| `bidirectional` |
| 4 | `source_node_id` | string | Source DID OR `<hostname>` slug |
| 5 | `target_node_id` | string | Target DID OR `<hostname>` slug |
| 6 | `auth_method` | enum | `ssh_pubkey` \| `nebula_cert` \| `dlt_signing` \| `hmac_key_id` |
| 7 | `auth_ref` | object | Method-specific key material reference |
| 8 | `provisioned` | datetime | ISO-8601 provisioning timestamp (+ `provisioned_by`) |
| 9 | `last_verified` | datetime \| null | ISO-8601 last-verify timestamp |
| 10 | `revoked` + `trust_tier` + `notes` | (composite) | revoked: datetime\|null (tombstone per SO-6); trust_tier: master\|team\|research_partner\|external; notes: free-text |

## Cross-vault binding sites

| Site | Path | Role |
|---|---|---|
| MANIFEST row | `LatticeNetwork.aDNA/MANIFEST.md` `### Vault-local extension entity types` table row 2 | Vault-level declaration record |
| Spec body | `LatticeNetwork.aDNA/what/specs/spec_ledger_state_testnet_interop.md §12` | 10-field schema body contract |
| ADR | `LatticeNetwork.aDNA/who/governance/adr_008_permission_edge_entity_type_declaration.md` | Entity-type-level decision (ADR-005 rules 1-6 applied) |
| AGENTS.md | `LatticeNetwork.aDNA/what/network/permissions/AGENTS.md` | Subdir scope + populate-at-Phase-3+ note |

All 4 sites carry `assumes_draft: true` per ADR-003 rule 2 (Carry 2 PRIMARY upstream-aDNA-standard countersign).

## Lifecycle binding to LIP-0003 events

`permission_edge` row lifecycle (creation/modification/revocation) emits Tier-1 ledger events at the existing arch_01 §6.4 call-site 3 (`permission-edge-changed` under `node_id = alpha_lattice_einstein` at Network.aDNA-side). When LIP-0003 v1.1 Membership tier lands (Carry 3 EP-1 at lattice-protocol/), `MEMBERSHIP_KEY_PROVISIONED` + `MEMBERSHIP_KEY_REVOKED` + `MEMBERSHIP_KEY_ROTATED` events may extend the per-edge lifecycle payload at consuming sites; the body schema is unchanged.

## Parallel-discharge mechanics

When Carry 2 PRIMARY (`LatticeNetwork.aDNA/who/coordination/coord_2026_05_18_adna_standard_interop.md`) returns with aDNA-standard countersign on `network_` namespace + both entity-types:

1. Both placeholder files (this one + `idea_upstream_network_node_mirror_entity_type.md` — TBD; sibling placeholder filing pending separate session) update `Upstream proposal` columns to point to the ratified namespace registry entry
2. Both MANIFEST.md rows update `Standard?` columns to "Ratified at aDNA v<N> (commit <hash>)"
3. All binding-site `assumes_draft: true` flags flip to `false` per ADR-003 rule 4
4. ADR-005 §Ratification log gets 2 entries (one per entity-type)
5. ADR-003 §Discharge log gets per-binding-site entries
6. CHANGELOG entry records the parallel discharge

Per ADR-005 rule 6 + ADR-008 §f, partial discharge (one entity-type but not the other) is NOT permitted without ADR-003 rule 5 escalation.

## Action requested from aDNA.aDNA owner

1. Review the body schema (above) for compatibility with v8.0+ extension entity-type pattern
2. Confirm namespace `network_` reservation (joins `network_node_mirror` from arch_01)
3. Countersign at Phase-7 cross-check-in OR file counter-proposal per ADR-005 rule 6 escalation
4. If counter-proposing namespace rename (e.g., to `permission_` instead of `network_`), apply rename to BOTH entity-types in parallel; partial rename invalidates the rule 2(c) co-claim inheritance

## Cross-references

- **Bound spec**: `LatticeNetwork.aDNA/what/specs/spec_ledger_state_testnet_interop.md` (Session 13 deliverable; arch_03 close 2026-05-18)
- **Declaration ADR**: `LatticeNetwork.aDNA/who/governance/adr_008_permission_edge_entity_type_declaration.md`
- **Protocol ADR**: `LatticeNetwork.aDNA/who/governance/adr_005_vault_local_entity_type_ratification_protocol.md` (rules 1-6 applied verbatim)
- **Annotation pattern**: `LatticeNetwork.aDNA/who/governance/adr_003_assumes_draft_true_pattern.md` (clause-level annotations at 4 binding sites)
- **Co-claim sibling**: `idea_upstream_network_node_mirror_entity_type.md` (TBD at aDNA.aDNA backlog; parallel discharge sibling)
- **Carry 2 PRIMARY memo**: `LatticeNetwork.aDNA/who/coordination/coord_2026_05_18_adna_standard_interop.md`
- **Path β waiver**: `LatticeNetwork.aDNA/who/coordination/coord_2026_05_18_phase1_close_with_carry_waiver.md §4`
- **Operator-blessed schema source**: `lattice-labs/who/coordination/coord_2026_05_17_partner_node_pubkey_sharing_and_memorialization.md §4 Layer-2`
