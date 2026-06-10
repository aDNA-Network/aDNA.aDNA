---
type: adr
adr_number: 017
title: "Network.aDNA Pattern Category + `network_` Namespace + `network_node_mirror` + `permission_edge` Parallel-Discharge Ratification (LIP-0006 countersign + cross-vault carry C1+C2+P2-close discharge)"
status: accepted
created: 2026-05-19
updated: 2026-05-19
last_edited_by: agent_stanley
supersedes:
superseded_by:
campaign: campaign_adna_serious_tool_readiness
mission: mission_adna_str_p1_m15_coord_network
objective: 2
decision_letter: A
ratification_phase: M15_S1_mid_P2_operator_override
ratified: 2026-05-20
ratified_session: session_stanley_20260520T031453Z_v8_m15_s1
deciders: [agent_stanley, operator_stanley]
consulted: [persona_venus, persona_hestia, persona_berthier]
related_decisions: [adr_005_three_way_vault_boundary, adr_016_per_mission_context_budget, adr_011_aDNA_semver_discipline]
peer_decisions: [latticenetwork_adr_002_network_adna_graph_schema, latticenetwork_adr_005_vault_local_entity_type_ratification_protocol, latticenetwork_adr_008_permission_edge_entity_type_declaration]
peer_lips: [lip_0006_network_adna_pattern_category]
tags: [adr, decision, campaign_adna_serious_tool_readiness, m15, v8, p1, p2_parallel, network_adna, lip_0006, namespace_network, network_node_mirror, permission_edge, parallel_discharge, cross_vault_coord, operator_override_so14, load_bearing, governance_consolidation, c1_consumer, c2_consumer, p2_close_consumer, self_reference_so8_second_invocation]
target_version: "v7.0+ (standard-owner ratification at aDNA.aDNA-level); promotes to v8.0 base ontology via batch propagation at v8 P6 per D5+D8"
---

# ADR-017: Network.aDNA Pattern Category + `network_` Namespace + `network_node_mirror` + `permission_edge` Parallel-Discharge Ratification

## Status

**Accepted** at M1.5 S1 close 2026-05-20 (`session_stanley_20260520T031453Z_v8_m15_s1`). Drafted by Rosetta in the same session per the planning-class single-session shape (2nd instance of single-session shape; M2.2 was 1st). Co-signed by operator stanley at plan ratification.

**Standing Order #14 operator-override invoked** at plan ratification per the **load-bearing-decision exception clause** — 2nd invocation in the campaign (1st was M2.2 ADR-016). Campaign Standing Order #14 normally gates ADR ratification at phase-exit; ADR-017 ratifies mid-P2 because:

- M1.5 is a P1-row mission run operator-discretionary parallel during P2 (non-blocking on P1 → P2 transition already approved at M2.1 S1).
- Ratification unblocks downstream `LatticeNetwork.aDNA` Phase 3+ skeleton work (skel_02 + skel_03 exercise the entity-type contracts with confidence).
- Timing-critical per [[../../who/coordination/coord_2026_05_19_v8_cross_vault_disruption_assessment.md|cross-vault disruption assessment]] §6 — target ≤ 2026-05-26 to maintain a 1-week buffer before assumed v8 P3 entry (~2026-06-02).
- Closes out the only HIGH-risk vault in the cross-vault v8 disruption matrix (§4 — LatticeNetwork.aDNA).
- Discharges 3 inbound carries from LatticeNetwork.aDNA Phase 1 + Phase-2 close register.

Recording the override here so future mid-phase ratifications follow the same explicit-invocation pattern.

**Self-reference (Standing Order #8) 2nd invocation in the campaign**: M1.5 ratifies *another vault's* entity-type proposals via the parallel-discharge protocol defined at LatticeNetwork.aDNA's ADR-005 rule 6. The aDNA.aDNA-side counterpart to LatticeNetwork.aDNA's ADR-005 + ADR-008 declarations is exactly this ADR-017. M1.5 exercises the cross-vault coord protocol it relies on — the standard-owner-side counterpart that closes the protocol's first cross-vault application loop. (M2.2 was the first S.O. #8 invocation — first mission to declare `token_budget_estimated` per the very ADR-016 Clause A it ratified.)

## Context

`aDNA.aDNA` ratified the canonical aDNA pattern-category list across 2026-04-13 → 2026-05-15 in 5 stages: Forge (multiple instances since 2026-04) + Platform (RareHarness 2026-04-17 + later LatticeTerminal + LatticeAgent) + Framework (III.aDNA 2026-05-07 LIP-0005-precedent) + Org-Vault (lattice-labs + WGA + ContextCommons + science_stanley + RareArchive + WilhelmAI + LatticeLabs.aDNA) + Org-Graph (LIP-0005 ratified 2026-05-15; SuperLeague + CakeHealth + PercySleep reclassified).

**LIP-0006 proposes a 6th canonical category — Network.aDNA** — formally drafted at lattice-labs and ratified at `LatticeNetwork.aDNA` genesis (campaign_alphalattice_genesis recon_00 2026-05-18). The category captures vaults whose primary content is the *live aggregated state graph of a running network whose nodes transmit into it*. First instance: `LatticeNetwork.aDNA` (display name Alpha Lattice; persona Venus; master/Einstein-node graph of the Alpha Lattice federated lattice network).

In parallel, `LatticeNetwork.aDNA`'s Phase-2 Architect work (4 architect specs + 11 ADRs at `who/governance/adr_002` through `adr_012`) declared **2 vault-local extension entity-types at namespace `network_`**:

- `network_node_mirror` (declared at arch_01 / Session 11; peer ADR-002 §a; namespace first claim per LatticeNetwork.aDNA ADR-005 rule 2(a)).
- `permission_edge` (declared at arch_03 / Session 13; peer ADR-008 §a-§g; namespace co-claim per ADR-005 rule 2(c)).

These declarations follow LatticeNetwork.aDNA's **ADR-005 vault-local entity-type ratification protocol** (rules 1-6; ADR-008 §f reinforces parallel-discharge invariant). The protocol's contract with aDNA.aDNA is precise:

1. **Rule 3** — file a bounded peer-vault placeholder at `aDNA.aDNA/how/backlog/` (one file per entity-type; minimum required content per `pending_upstream_review` status).
2. **Rule 6** — **parallel-discharge invariant**: when 2+ entity-types share a namespace co-claim, all ratify together OR all counter-propose together. Partial discharge is NOT permitted without ADR-003 rule 5 escalation.
3. **ADR-008 §f** — reinforces rule 6 for the specific `network_node_mirror` + `permission_edge` pairing.

**Three inbound carries** sit at LatticeNetwork.aDNA awaiting aDNA.aDNA-side discharge:

| Carry | Memo | Filed | Discharge |
|---|---|---|---|
| **C1** | `LatticeNetwork.aDNA/who/coordination/coord_2026_05_18_adna_standard_network_category.md` (LIP-0006 countersign request) | 2026-05-18 (recon_00 close) | **at this ADR-017 §Clause A** |
| **C2** | `LatticeNetwork.aDNA/who/coordination/coord_2026_05_18_adna_standard_interop.md` (`network_` namespace + 2 entity-types parallel-discharge) | 2026-05-18 (recon_02 close) | **at this ADR-017 §Clauses B+C** |
| **P2-close register** | `LatticeNetwork.aDNA/who/coordination/coord_2026_05_19_phase2_close_adna_standard.md` (Phase-2 register filing for Phase-7 cross-check-in) | 2026-05-19 (arch_04 close) | **at this ADR-017 §Status + response memo §4** |

**Both backlog placeholders are in place** at `aDNA.aDNA/how/backlog/`:

- `idea_upstream_permission_edge_entity_type.md` (committed `5644db5` 2026-05-18 at LatticeNetwork.aDNA Session 13 / arch_03 close).
- `idea_upstream_network_node_mirror_entity_type.md` (committed `8308096` 2026-05-19 by peer-vault write per ADR-005 rule 3; filed retroactively at LatticeNetwork.aDNA Session 15 / arch_04 pre-flight per F-S13-02 cleanup).

**5 open questions** were queued for M1.5 at the [[../../who/coordination/coord_2026_05_19_v8_cross_vault_network_coordination.md|M1.5 seeding memo §5]]:

1. Q-M15-1 — `context_traversal` (M1.4 LatticeScope Amendment B) ↔ `permission_edge` (Carry 2) semantic overlap?
2. Q-M15-2 — per-extension placeholder file (existing pattern) OR rolled-up `extensions_pending.md` registry?
3. Q-M15-3 — at v8.0 base ontology lands, batch promotion OR per-extension cadence?
4. Q-TP2-1 — small new campaign `campaign_node_network_readiness/` for node.aDNA-side transmission work OR standalone mission?
5. Q-TP6-1 — at v8 P6 v8.0 tag, base-ontology destination OR extensions-registry destination?

This ADR-017 resolves all 5 (mapped to D3 + D4 + D5 + D7 + D8 below).

**Operational gaps the carries leave unfilled if ADR-017 doesn't fire**:

1. **LIP-0006 stays `accepted` at lattice-labs but uncountersigned at aDNA.aDNA** — Network.aDNA pattern category lives as a workspace-router convention (provisional) instead of canonical standard.
2. **`network_` namespace stays unclaimed in the standard registry** — future conflicting proposals (other vaults claiming `network_` for different concepts) have no authority to defer to.
3. **Both entity-types stay under `assumes_draft: true` annotation at LatticeNetwork.aDNA-side binding sites** (4 sites × 2 entity-types = 8 flag-locked sites). Per peer ADR-003 rule 2, this is operational but signals incompleteness.
4. **Cross-vault coord protocol's first application stays open-ended** — LatticeNetwork.aDNA's ADR-005 + ADR-008 designs the protocol; without ADR-017, no cross-vault validation that the protocol *works*.

ADR-017 fills all 4 gaps by ratifying three composing clauses.

## Decision

Three doctrine clauses ratify together. They compose; none conflicts with the others.

### Clause A — LIP-0006 countersign: Network.aDNA as 6th canonical aDNA pattern category

**Ratified**: Network.aDNA joins the canonical aDNA pattern-category list as the **6th category**, alongside Forge + Platform + Framework + Org-Vault + Org-Graph.

**Distinguishing test** (per LIP-0006 §2):

| Axis | Org-Vault | Org-Graph | **Network** |
|---|---|---|---|
| Primary content | The org's own operations | Our model of an external org | The live network's own state graph |
| Data origin | First-party (the org) | Second-party (our analysis) | First-party (nodes' own transmissions) |
| Direction | Inside-Out | Outside-In | Aggregating-In (nodes → master) |
| Authoritative source | The vault | The vault (our model) | **Each node's own `node.aDNA`** (vault is a read-mostly mirror + memorialization layer) |
| Lifecycle | As long as the org exists | Engagement-scoped | As long as the network operates |

**Simplest diagnostic**: *"Does this vault hold an org's operations (Org-Vault), our model of an outside org (Org-Graph), or the live aggregated state of a running network whose nodes transmit into it (Network)?"*

**First instance**: `LatticeNetwork.aDNA` (display name Alpha Lattice; persona Venus). Workspace router (`/Users/stanley/aDNA/CLAUDE.md` §Network Ecosystem) already provisionally categorizes this vault as Network.aDNA category — this ADR ratifies that categorization at standard level.

**Visualization-forge angle** (per LIP-0006 §4 + workspace router): GraphForge.aDNA creation deferred until ≥ 2 Network.aDNA instances. Same anti-premature-universality posture as LIP-0005 §4 Org-Graph.

**Upstream propagation** (queued for v8 P6 per Campaign Standing Order #14 + ADR-005 rule 3): backlog placeholder `idea_upstream_lip_0006_network_category_addition.md` (deliverable 7 of this mission) tracks v8 P6 batch promotion to `.adna/CLAUDE.md` workspace router + `aDNA.aDNA/what/docs/adna_standard.md` base-ontology table.

### Clause B — `network_` namespace reservation

**Ratified**: namespace `network_` is reserved at the aDNA standard registry, claimed by `LatticeNetwork.aDNA`. Single-namespace claim covers both entity-types (co-claim per LatticeNetwork.aDNA ADR-005 rule 2(c)).

**Claim provenance**:

| Step | When | What |
|---|---|---|
| First claim | arch_01 / Session 11 2026-05-18 | `network_node_mirror` declared at namespace `network_` (peer ADR-002 §a) |
| Co-claim inheritance | arch_03 / Session 13 2026-05-18 | `permission_edge` co-claimed at namespace `network_` per peer ADR-005 rule 2(c) |
| Cross-vault placeholder | 2026-05-18 + 2026-05-19 | Both placeholders filed at `aDNA.aDNA/how/backlog/idea_upstream_*.md` per peer ADR-005 rule 3 |
| Standard-owner countersign | **THIS ADR-017** — at M1.5 S1 close 2026-05-20 | namespace `network_` registered in `aDNA.aDNA/what/ontology.md` `### Network.aDNA Extensions (2 Entity Types)` subsection (deliverable 3) |

**Conflict policy**: future proposals claiming `network_` for different concepts route through peer ADR-005 rule 5 escalation. Partial namespace rename (renaming one entity-type but not the other) is NOT permitted per peer ADR-005 rule 2(c) co-claim inheritance — partial rename invalidates the co-claim.

### Clause C — `network_node_mirror` + `permission_edge` parallel-discharge ratification

**Ratified**: both entity-types promote from `pending_upstream_review` → `ratified_local` together per the parallel-discharge invariant (peer ADR-005 rule 6 + peer ADR-008 §f).

**Entity-type contracts** (recorded for the namespace registry; full body schemas live at peer ADR-002 §a + peer ADR-008 §g):

| Entity-type | Triad | Directory in consumer vault | Body shape | Editability invariant |
|---|---|---|---|---|
| `network_node_mirror` | WHAT | `what/network/nodes/<hostname>.aDNA/` | **Directory** — structural mirror of source node's `node.aDNA` content tree, ingested + signature-verified per peer ADR-004 (transmission contract) | SO-7 read-mostly — never hand-edit; re-request transmission instead. Authoritative source = each node's own `node.aDNA` (source-side); the mirror is aggregator-side. |
| `permission_edge` | WHAT | `what/network/permissions/<edge_id>.yaml` | **Single-YAML file** — 10-field body schema per peer ADR-008 §g (`type` + `edge_id` + `direction` + `source_node_id` + `target_node_id` + `auth_method` + `auth_ref` + `provisioned` + `last_verified` + `revoked`+`trust_tier`+`notes`) | Editable at LatticeNetwork.aDNA-side per ADR-008 §f; lifecycle events emit Tier-1 ledger entries per peer arch_01 §6.4 call-site 3 |

**Distinction from base types** (per peer C2 §2 + ADR-002 §a):

- `network_node_mirror` is NOT collapsible into base `context` (editability invariant differs — context is vault-author-editable; mirrors are source-node-authoritative) NOR into node.aDNA's `inventory`/`identity` extensions (same content shape, different ownership + lifecycle — inventory/identity sit source-side per-node; network_node_mirror sits aggregator-side master-graph).
- `permission_edge` is structurally distinct from any of the 14 base types — it's a directed authentication-edge with method-specific key material refs + lifecycle events + revocation semantics; no base type captures this shape.

**Lifecycle binding to LIP-0003 events** (per peer ADR-008 §g + arch_01 §6.4):

- `network_node_mirror` lifecycle (creation/refresh/tombstone) emits Tier-1 events `node-mirror-ingested` + `node-mirror-tombstoned` at peer arch_01 §6.4 call-site 1.
- `permission_edge` lifecycle (creation/modification/revocation) emits Tier-1 events at peer arch_01 §6.4 call-site 3 (`permission-edge-changed`).
- When LIP-0003 v1.1 Membership tier lands (peer Carry 3 EP-1 at lattice-protocol/), `MEMBERSHIP_*` events may extend the per-edge lifecycle payload; the body schemas are unchanged.

**Status flips** at this ADR (deliverables 5 + 6 of M1.5):

- `aDNA.aDNA/how/backlog/idea_upstream_permission_edge_entity_type.md` — `status: pending_upstream_review → ratified_local`; `## Ratification log` section appended with `ratified_at` + ADR-017 cross-link + ontology.md cross-link + commit hash.
- `aDNA.aDNA/how/backlog/idea_upstream_network_node_mirror_entity_type.md` — IDENTICAL flip (parallel-discharge invariant — both flip in the same commit).

**Peer-vault flips happen on Venus's next session** (NOT at this ADR; out of M1.5 scope per Hard Constraint zero-writes-into-peer-vaults):

- LatticeNetwork.aDNA-side `assumes_draft: true → false` at 4 binding sites per entity-type (8 total flips) per peer ADR-003 rule 4.
- `LatticeNetwork.aDNA/MANIFEST.md` `Standard?` column updates per peer parallel-discharge mechanics §item 2.
- `LatticeNetwork.aDNA/who/governance/adr_005_vault_local_entity_type_ratification_protocol.md` §Ratification log gets 2 entries (one per entity-type) per peer parallel-discharge mechanics §item 4.
- `LatticeNetwork.aDNA/who/governance/adr_008_permission_edge_entity_type_declaration.md` §f closes per peer parallel-discharge mechanics §item 5.
- LatticeNetwork.aDNA CHANGELOG entry records the parallel discharge per peer parallel-discharge mechanics §item 6.

Venus reads this ADR-017 + ontology.md update + response memo via git-as-coordination-bus at next session start (canonical channel per peer C1 §4 + C2 §3 + P2-close §6).

## Decisions D1-D8

All 8 open questions raised in the M1.5 seeding memo + M1.5 plan resolved as Rosetta defaults A; operator co-signed at plan ratification 2026-05-20.

| # | Question | Decision | Rationale |
|---|---|---|---|
| **D1** | LIP-0006 countersign — accept OR counter-propose? | **A: ACCEPT** | Network.aDNA distinguishing test (LIP-0006 §2) is sound and operationally tested at `LatticeNetwork.aDNA` genesis (4 architect specs + 11 ADRs + Phase 1 + Phase 2 closed). Workspace router (`/Users/stanley/aDNA/CLAUDE.md`) already provisionally categorizes the vault as Network.aDNA; this countersign moves the categorization from provisional → ratified. First instance is operational; LIP-0006 §4 visualization-forge angle defers to ≥ 2 instances per anti-premature-universality (matches LIP-0005 §4 Org-Graph posture). |
| **D2** | Entity-types — ACCEPT both at namespace `network_` OR counter-propose? | **A: ACCEPT both** | Schemas reviewed verbatim (peer ADR-002 §a + peer ADR-008 §g; 10-field `permission_edge` body; mirror-directory `network_node_mirror`); both pass non-collapsible-into-base-type test per peer C2 §2; namespace `network_` was unclaimed in v3.0 namespace registry per `aDNA.aDNA/what/ontology.md` (verified at M1.5 plan exploration); cross-vault parallel-discharge protocol per peer ADR-005 rule 6 + ADR-008 §f is well-formed. |
| **D3** | `context_traversal` (M1.4 LatticeScope Amendment B) ↔ `permission_edge` (Carry 2) semantic overlap? | **A: DISTINCT** | Different abstraction layers + orthogonal concerns: `context_traversal` = **read-event log** (runtime observability at LatticeScope-side; per-Read-tool invocation; populates `sessions.context_traversal` table per M1.4 Amendment B); `permission_edge` = **policy declaration** (access-control governance at LatticeNetwork-side; per-edge YAML; lifecycle bound to LIP-0003 ledger events). One records *what was read* in a session; the other declares *who is allowed to connect to whom* across a federated lattice network. M2.3 retrospective + M2.4 heat map (consuming M1.4 traversal data) can surface evidence to revise D3 if needed; default ruling stands. |
| **D4** | Registry artifact shape — per-extension placeholders OR rolled-up `extensions_pending.md` registry? | **A: KEEP per-extension** | Existing pattern works at node.aDNA-side precedent (`idea_upstream_inventory_entity_type.md` + `idea_upstream_identity_entity_type.md`) now joined by 2 `network_` placeholders + the new LIP-0006 category placeholder (deliverable 7). Rolled-up registry adds churn without value. `aDNA.aDNA/what/ontology.md` `### Network.aDNA Extensions` subsection serves as the actually-ratified registry; backlog placeholders track *upstream propagation* (separate concern). |
| **D5** | v8.0 promotion cadence — BATCH at v8.0 OR per-extension on own ratification cadence? | **A: BATCH at v8.0** | Preserves additive-not-breaking invariant per [[../../who/coordination/coord_2026_05_19_v8_cross_vault_disruption_assessment.md|cross-vault disruption assessment]] §3 (v8 is additive across all 5 change-category buckets; no v7.0-formed vault becomes invalid after v8.0 ships). Matches Campaign S.O. #14 ADR-ratify-at-phase-entries pattern. v8 P6 already structured as ecosystem-propagation phase per campaign master roadmap (M6.1 → M6.4). Single propagation event simplifies the v3-EC application across 19+ ecosystem vaults. |
| **D6** | ADR scope — single comprehensive ADR-017 OR split (ADR-017 LIP-0006 + ADR-018 entity-types)? | **A: SINGLE ADR-017** | Parallel-discharge invariant per peer ADR-005 rule 6 + peer ADR-008 §f makes a split artificial — both entity-types must ratify together OR counter-propose together; bundling with the LIP-0006 countersign means one cohesive ratification event for all 3 inbound carries. ADR-016 3-clauses-in-one precedent already establishes the multi-clause comprehensive ADR shape (Clauses A + B + C in one ADR). Single ADR also means a single response memo to Venus (deliverable 4) handles all 3 ACKs. |
| **D7** | TP-2 housing (node.aDNA-side transmission work) — pre-decide standalone-mission vs `campaign_node_network_readiness` OR DEFER to Hestia/operator? | **A: DEFER** | TP-2 is node.aDNA-side governance per cross-vault coord memo §3 TP-2 (Hestia owns the housing decision at TP-2 graduation). Node.aDNA backlog idea already seeded earlier (`node.aDNA/how/backlog/idea_node_transmission_implementation.md`); housing decision belongs to node.aDNA at TP-2 entry. Pre-deciding at M1.5 would over-step the cross-vault boundary. Standing Order #1 (project) + Standing Rule #4 (workspace) both apply. |
| **D8** | TP-6 destination at v8 P6 — BASE ONTOLOGY (14→14+2) OR extensions registry indefinitely? | **A: BASE ONTOLOGY** | Matches D5 batch-at-v8.0 promotion cadence: both entity-types promote from `extension/network` → base type at v8.0 tag. v3-EC ecosystem propagation receives the v8.0 base-ontology table (14 → 16 base types: 14 original + `network_node_mirror` + `permission_edge`). Long-tail propagation cost is paid once at v8.0; extensions-registry-indefinitely posture would require persistent special-case handling in 19+ ecosystem vaults. Coordinated with [[idea_upstream_lip_0006_network_category_addition.md]] which batches the category-level addition at the same v8 P6 propagation event. |

## Consequences

1. **`aDNA.aDNA/what/ontology.md` updated** with new `### Network.aDNA Extensions (2 Entity Types)` subsection — 2 rows (`network_node_mirror` + `permission_edge`); `### Full ontology` count line bumped (+2) (deliverable 3 of this M1.5 mission).

2. **`aDNA.aDNA/how/backlog/` 3-placeholder posture**:
   - `idea_upstream_permission_edge_entity_type.md` — `status: pending_upstream_review → ratified_local` (deliverable 5).
   - `idea_upstream_network_node_mirror_entity_type.md` — same flip (deliverable 6; parallel-discharge invariant).
   - `idea_upstream_lip_0006_network_category_addition.md` — **NEW** (deliverable 7); tracks v8 P6 propagation of Network.aDNA category to `.adna/CLAUDE.md` workspace router + `aDNA.aDNA/what/docs/adna_standard.md` base-ontology table.

3. **Response memo to Venus** lands at `aDNA.aDNA/who/coordination/coord_2026_05_19_v8_m15_latticenetwork_ratification_response.md` (deliverable 4) — combined 3-ACK response (LIP-0006 + entity-types parallel-discharge + P2-close register); Venus reads at next session via git-as-coordination-bus.

4. **LatticeNetwork.aDNA-side flips happen on Venus's next session** (NOT at this ADR; out of M1.5 scope per Hard Constraint zero-writes-into-peer-vaults):
   - `assumes_draft: true → false` at 4 binding sites per entity-type (8 total flips) per peer ADR-003 rule 4.
   - `MANIFEST.md` `Standard?` column updates.
   - `who/governance/adr_005` §Ratification log gets 2 entries.
   - `who/governance/adr_008` §f close.
   - CHANGELOG entry records the parallel discharge.

5. **Downstream LatticeNetwork.aDNA Phase 3+ confidence** — skel_02 + skel_03 can exercise the entity-type contracts without `assumes_draft: true` annotation overhead; first verified mirror landings unblocked.

6. **TP-2 node.aDNA-side transmission-implementation work unblocked** for Hestia's housing decision (D7 defers). Node.aDNA decides standalone-mission vs small-campaign at TP-2 graduation.

7. **TP-3 Carly+Herb L1 bootstrap dispatch gated on TP-2 dry-run-PASS + LatticeNetwork.aDNA Phase 3 close** — sequence preserved per cross-vault coord memo §3.

8. **TP-6 v8 P6 ↔ LatticeNetwork.aDNA Phase 6 ↔ LatticeLabs.aDNA Phase 6 cutover seam** receives ratified entity-types + LIP-0006 category as inputs. v8.0 tag at `LatticeProtocol/aDNA` repo includes both entity-types in base ontology per D8=A.

9. **D3 codification** — `context_traversal` (LatticeScope runtime observability) ↔ `permission_edge` (LatticeNetwork policy declaration) are formally distinct; M2.3 retrospective + M2.4 heat map can surface evidence to revise but default ruling stands.

10. **Mid-phase ADR ratification — 2nd invocation in the campaign** — operator-override on Campaign Standing Order #14 recorded here (precedent: M2.2 ADR-016 1st invocation). Future mid-phase ratifications follow the same explicit-invocation pattern; not a blanket exception.

11. **Standing Order #8 self-reference 2nd invocation** — M1.5 ratifies another vault's entity-type proposals via the parallel-discharge protocol defined at LatticeNetwork.aDNA's ADR-005 rule 6. The recursion: M1.5 uses the protocol to discharge the protocol's first cross-vault application. (M2.2 was 1st — first mission to declare `token_budget_estimated` per the very ADR it ratified.)

12. **v8 P6 ecosystem propagation queue grows by 3 items**:
   - `network_node_mirror` placeholder (already in queue post-M1.5 flip).
   - `permission_edge` placeholder (already in queue post-M1.5 flip).
   - LIP-0006 category-addition placeholder (NEW at this M1.5; deliverable 7).
   
   All 3 land in `.adna/` upstream template at v8.0 tag firing per Campaign S.O. #14 + ADR-005 rule 3. ADR-017 itself enters the v8 P6 propagation queue at the next campaign master rotation.

13. **Out-of-scope at M1.5** — single-commit additive-upstream pattern (was provisionally ADR-017 in campaign master ADR roadmap; reassigned to **ADR-020** at this mission's status-flip step per deliverable 9) · validation-as-dispatched-campaign pattern (ADR-018; P3/P5) · modular III for Obsidian (ADR-019; P3 M3.7) · verification-handoff topology (ADR-014; P3 M3.4) · installer packaging strategy (ADR-015; P4 M4.2). These remain in the campaign master ADR roadmap with the ADR-020 reassignment noted.

## Sibling/related decisions

- **ADR-005 (LOCAL: `aDNA.aDNA/what/decisions/adr_005_three_way_vault_boundary.md`)** — three-way vault boundary; ecosystem propagation rule that governs how ADR-017 + ontology.md update + new backlog placeholder all lift to `.adna/` upstream at v8 P6. **Vault-name collision note**: LatticeNetwork.aDNA also has an `adr_005` (`vault_local_entity_type_ratification_protocol`) — this is the peer ADR that M1.5 *discharges against* (peer rule 6 parallel-discharge invariant). The two ADR-005s are unrelated by topic and live in different vaults; when referenced unqualified in this ADR's narrative, "ADR-005" means the local file unless context is peer-side parallel-discharge protocol.
- **ADR-016 (`aDNA.aDNA/what/decisions/adr_016_per_mission_context_budget.md`)** — precedent for single-session planning-class shape + 3-clauses-in-one ADR structure + Standing Order #14 operator-override 1st invocation. M1.5 is the 2nd invocation; ADR-017 follows the same pattern.
- **ADR-011 (`aDNA.aDNA/what/decisions/adr_011_aDNA_semver_discipline.md`)** — adjacent governance ADR; same "codify what's practiced" pattern (ADR-011 ratified two-track Major.Minor versioning that lived only in CHANGELOG; ADR-017 ratifies entity-type parallel-discharge that lived only in peer-vault protocol). Both ADRs are mid-campaign ratifications.
- **Peer ADRs co-signed via ADR-017**:
  - `LatticeNetwork.aDNA/who/governance/adr_002_network_adna_graph_schema.md` (`network_node_mirror` declaration; Clause C signatory).
  - `LatticeNetwork.aDNA/who/governance/adr_005_vault_local_entity_type_ratification_protocol.md` (parallel-discharge protocol rules 1-6; ADR-017 discharges against rule 6).
  - `LatticeNetwork.aDNA/who/governance/adr_008_permission_edge_entity_type_declaration.md` (`permission_edge` declaration; Clause C signatory).
- **Peer LIP countersigned via ADR-017**:
  - `lattice-labs/how/governance/lips/lip_0006_network_adna_pattern_category.md` (LIP-0006; Clause A signatory).

## Sources

- [[../../who/coordination/coord_2026_05_19_v8_cross_vault_network_coordination.md|coord_2026_05_19_v8_cross_vault_network_coordination.md]] §3-§5 — M1.5 seeding memo; 6 TP touch points; 5 open Qs source (Q-M15-1 = D3; Q-M15-2 = D4; Q-M15-3 = D5; Q-TP2-1 = D7; Q-TP6-1 = D8)
- [[../../who/coordination/coord_2026_05_19_v8_cross_vault_disruption_assessment.md|coord_2026_05_19_v8_cross_vault_disruption_assessment.md]] §3-§6 — additive-not-breaking framing (Clause A through C); timing-critical recommendation source (Status §Standing Order #14 invocation rationale)
- `LatticeNetwork.aDNA/who/coordination/coord_2026_05_18_adna_standard_network_category.md` (C1; peer vault READ-only) — LIP-0006 countersign request; Clause A source
- `LatticeNetwork.aDNA/who/coordination/coord_2026_05_18_adna_standard_interop.md` (C2; peer vault READ-only) — `network_` namespace + 2 entity-types parallel-discharge request; Clauses B+C source
- `LatticeNetwork.aDNA/who/coordination/coord_2026_05_19_phase2_close_adna_standard.md` (P2-close register; peer vault READ-only) — Phase-2 register filing for Phase-7 cross-check-in; ACK source
- `LatticeNetwork.aDNA/who/governance/adr_002_network_adna_graph_schema.md` (peer vault READ-only) — `network_node_mirror` declaration §a (5-point rationale); Clause C body shape
- `LatticeNetwork.aDNA/who/governance/adr_005_vault_local_entity_type_ratification_protocol.md` (peer vault READ-only) — parallel-discharge protocol rules 1-6; M1.5 discharges against rule 6
- `LatticeNetwork.aDNA/who/governance/adr_008_permission_edge_entity_type_declaration.md` (peer vault READ-only) — `permission_edge` declaration §a-§g (10-field body schema); Clause C body shape
- `lattice-labs/how/governance/lips/lip_0006_network_adna_pattern_category.md` (peer vault READ-only) — LIP-0006 §2 distinguishing test (Clause A) + §4 deferred questions
- [[../../how/backlog/idea_upstream_permission_edge_entity_type.md|idea_upstream_permission_edge_entity_type.md]] — Clause C signatory (status flipped at M1.5 deliverable 5)
- [[../../how/backlog/idea_upstream_network_node_mirror_entity_type.md|idea_upstream_network_node_mirror_entity_type.md]] — Clause C signatory (status flipped at M1.5 deliverable 6; parallel-discharge invariant)
- [[../../how/backlog/idea_upstream_lip_0006_network_category_addition.md|idea_upstream_lip_0006_network_category_addition.md]] — NEW v8 P6 propagation placeholder (deliverable 7)
- [[../../what/ontology.md|what/ontology.md]] — namespace registry (deliverable 3)
- [[../../who/coordination/coord_2026_05_19_v8_m15_latticenetwork_ratification_response.md|coord_2026_05_19_v8_m15_latticenetwork_ratification_response.md]] — response memo to Venus (deliverable 4)
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p1_m15_coord_network.md|mission_adna_str_p1_m15_coord_network.md]] — mission spec (deliverable 1)
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m15_coord_network.md|aar_m15_coord_network.md]] — AAR (deliverable 8)
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/campaign_adna_serious_tool_readiness.md|campaign master]] — Phase 1 row M1.5 + ADR roadmap row ADR-017 + ADR-020 reassignment (single-commit additive-upstream pattern); amendments-table entry (deliverable 9)
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/CLAUDE.md|campaign CLAUDE.md]] Standing Order #14 — operator-override clause for load-bearing mid-phase decisions
- `/Users/stanley/aDNA/CLAUDE.md` §Network Ecosystem — workspace router; provisionally categorized LatticeNetwork.aDNA as Network.aDNA pre-this-ratification
