---
type: coordination
created: 2026-05-19
updated: 2026-05-19
last_edited_by: agent_stanley
direction: internal  # aDNA.aDNA-side coord memo capturing posture toward LatticeNetwork.aDNA + LatticeLabs.aDNA + node.aDNA
status: filed
scope: cross_vault
counterparts:
  - LatticeNetwork.aDNA  # Venus
  - LatticeLabs.aDNA     # Berthier
  - node.aDNA            # Hestia
  - lattice-labs         # Berthier (legacy, dual-home through Phase-6)
campaign: campaign_adna_serious_tool_readiness
phase: 1
mission: post_m14_s2  # filed between M1.4 S2 close and M1.4 S3 entry; seeds M1.5
durable: true
countersign_required: false  # this memo is informational; it acknowledges 3 outbound carries from Venus + queues their discharge at M1.5
tags: [coordination, internal, cross_vault, v8, p1, m14_s2_postmortem, m15_coord_network_seed, lip_0006, network_node_mirror, permission_edge, transmission_protocol, node_upgrade_planning]
---

# Cross-vault network-architecture coordination — post-M1.4 S2 posture

> **From**: Rosetta (aDNA.aDNA standard owner) **To**: own future-self (aDNA.aDNA) + cross-readable by Venus (LatticeNetwork.aDNA) + Berthier (LatticeLabs.aDNA + lattice-labs) + Hestia (node.aDNA). Filed at the close of `campaign_adna_serious_tool_readiness` M1.4 S2 (commit `69807f4`) to capture aDNA.aDNA's posture toward the broader network architecture in flight at peer vaults. **Not a countersign discharge** — that lands at the M1.5 coord-network mission (queued; opens at operator discretion after M1.4 S3 close).

## §1 — Subject

aDNA.aDNA's coordination posture toward the four in-flight network-architecture workstreams:

1. **`AlphaLattice.aDNA` → `LatticeNetwork.aDNA`** transition (`campaign_alphalattice_genesis` "Operation Constellation"; Phase 2 CLOSED 2026-05-19 — all 4 arch specs + 11 ADRs accepted).
2. **`lattice-labs/` → `LatticeLabs.aDNA/`** transition (`campaign_latticelabs_genesis` "Operation Continuity"; Phase 2 CLOSED 2026-05-19 — all 7 architect specs + Phase-6 cutover coupling defined).
3. **node-transmission protocol** spec now canonical at `LatticeNetwork.aDNA/what/specs/spec_node_adna_transmission_registration.md` (arch_02 / Session 12; 710 ln; ADR-004 + ADR-005 binding).
4. **Existing-node upgrade** to the new transmission form (stanley L1 master + Carly L1 + Herb L1 + exxact3 L2 + partner L1s + L0 tier).

## §2 — Carries received (3 outbound from Venus + 1 cumulative from Phase-2 close)

| ID | Memo | Filed | Status | Discharge target |
|---|---|---|---|---|
| **C1** | `LatticeNetwork.aDNA/who/coordination/coord_2026_05_18_adna_standard_network_category.md` — LIP-0006 countersign on Network.aDNA pattern category | 2026-05-18 (recon_00 close) | **ACK; queued for M1.5** | M1.5 coord-network in v8 P1 (operator-discretionary opening) |
| **C2** | `LatticeNetwork.aDNA/who/coordination/coord_2026_05_18_adna_standard_interop.md` — `network_` namespace claim + `network_node_mirror` + `permission_edge` entity-types | 2026-05-18 (recon_02 close) | **ACK; queued for M1.5** | M1.5 coord-network in v8 P1 (parallel-discharge per ADR-005 rule 6 + ADR-008 §f) |
| **C3** | `LatticeNetwork.aDNA/who/coordination/coord_2026_05_18_latticeprotocol_interop.md` — 4 EPs (LIP-0003 v1.1 Membership + per-key-purpose split + state-reconciliation hook + NodeStatus enum) | 2026-05-18 (recon_02 close) | informational (not aDNA-standard scope) | lattice-protocol-side; no aDNA.aDNA action |
| **P2-close** | `LatticeNetwork.aDNA/who/coordination/coord_2026_05_19_phase2_close_adna_standard.md` — Phase-2 register filing for Phase-7 cross-check-in | 2026-05-19 (arch_04 close) | **ACK; queued for M1.5 + v8 P6 fold-in** | M1.5 for entity-type ratification queue; v8 P6 for v8.0 standard-tag upstream propagation |

**Pre-discharge filings already at aDNA.aDNA**:
- `aDNA.aDNA/how/backlog/idea_upstream_permission_edge_entity_type.md` (committed 5644db5 2026-05-18; filed at LatticeNetwork.aDNA Session 13 / arch_03 close)
- `aDNA.aDNA/how/backlog/idea_upstream_network_node_mirror_entity_type.md` (filed retroactively at LatticeNetwork.aDNA Session 15 / arch_04 pre-flight 2026-05-19 per F-S13-02 cleanup; **committed at `8308096` 2026-05-19T18:25:55-07:00** — peer-vault write per ADR-005 rule 3)

Both placeholders carry `assumes_draft: true` per ADR-003 rule 2; both await v8.0+ standard ratification. Parallel-discharge invariant per ADR-005 rule 6 means BOTH must ratify (or counter-propose) together at the discharge mission.

## §3 — Coordination map (6 touch points; mission slate per vault)

### TP-1 — aDNA.aDNA discharges 2 countersigns + decides `context_traversal` ↔ `permission_edge` semantic overlap

**Where**: New mission **M1.5 coord-network** in v8 P1, after M1.4 S3 close.

**What**:
- Ratify LIP-0006 (Network.aDNA = 6th pattern category, provisional → accepted at aDNA standard level)
- Ratify `network_` namespace claim
- Ratify `network_node_mirror` + `permission_edge` entity-types (parallel discharge)
- Decide whether Amendment B `context_traversal` rows (M1.4 S2 column) ARE a flavor of `permission_edge` (Carry 2) or a distinct concept — semantic-overlap question seeded by the convergence of M1.4 cross-vault traversal observability + ADR-008 permission-edge declaration

**When**: After M1.4 S3 close. 0-1 session. Non-blocking on P1 → P2 phase gate. All inputs already in aDNA.aDNA.

**Output (M1.5)**: Counter-sign artifact at `aDNA.aDNA/who/coordination/` + ontology / standard-log entry updating namespace registry + ADR (or one-line ADR pointing at LIP-0006 + ADR-005) + posture memo back to Venus.

### TP-2 — node.aDNA implements the transmission protocol

**Where**: New backlog idea at `node.aDNA/how/backlog/idea_node_transmission_implementation.md` (seeded at this memo's commit). Graduates to a node.aDNA mission (`how/missions/mission_node_transmission_implementation.md` or under a small new `campaign_node_network_readiness/`) at operator-gated entry.

**What** (per arch_02 §2-§4 + ADR-004 contract):
- Author `how/skills/skill_node_transmit_to_master.md` (5-phase ceremony: serialize → sign → transmit → verify → place at master's `what/network/nodes/<nodename>.aDNA/` mirror)
- Author `how/skills/skill_node_state_refresh.md` (periodic refresh per lattice config; revocation handling)
- `who/identity/identity_node.yaml` extensions (per-key-purpose key blocks per arch_02 §3 + §4)
- Transmission-config block (which lattice + what subset to transmit + frequency + mechanism direct/DLT per per-lattice config)

**When**: Spec authoring + skills + dry-run can start NOW (arch_02 spec is canonical). Cannot fully exercise live transmission until **LatticeNetwork.aDNA arch_04 closed 2026-05-19 (now done!) + Phase 3 Skeleton E2E** opens. Estimated 2-3 sessions.

### TP-3 — Team-node bootstraps (Carly L1 + Herb L1)

**Where**: Coord-memo dispatch from `aDNA.aDNA/who/coordination/` to `lattice-labs/who/coordination/` (Berthier) for team-member assignment. Actual bootstrap work happens on each team member's machine (per-member operator-side action). Pattern precedent: `campaign_validation_node_adna_lwx_outputs` in lattice-labs (validation-as-dispatched-campaign).

**What** (per team-member):
- Stanley local: invoke `skill_project_fork` + `skill_node_bootstrap_interview` + `skill_inventory_refresh` (already lives in node.aDNA at this host)
- Carly + Herb: clone the workspace; bootstrap their own `node.aDNA/`; populate identity + inventory + memberships; transmit per TP-2 once dry-run-PASS

**When**: Opens AFTER (a) TP-2 reaches dry-run-PASS AND (b) LatticeNetwork.aDNA Phase 3 Skeleton E2E completes (first real mirror landing). Each: 1 session for bootstrap + 1 session for first transmission.

### TP-4 — Partner-L1 + exxact3 L2 bootstraps (DEFERRED to Phase 4)

**Where**: Each partner runs their own bootstrap; coordination via per-partner coord memos. exxact3 bootstrap happens on the LSU server (Stanley + LSU CCT access).

**Nodes**: KINN L1 · SwS L1 · MP (Magna-Petra) L1 · Percy L1 (already has pre-transmission dossier prototype at `LatticeNetwork.aDNA/what/network/nodes/percy_l1.aDNA/dossier.md` from recon_03) · WGA L1 · exxact3 L2.

**When**: DEFER all to **LatticeNetwork.aDNA Phase 4 (fleet build-out)**. Partner-side is also embargo-bound per v2 M06 D5 (4 embargo memos preserved: Wilhelm × 2 + SuperLeague + SIP). No aDNA.aDNA-side mission needed; flagged here as dependency only.

### TP-5 — L0 tier (subscriber users)

**Where**: Lattice-config-level decision; per-lattice operator chooses opt-in policy.

**When**: DEFER to v8 P5 (community readiness) or LatticeNetwork.aDNA Phase 7 (eval + federation). No aDNA.aDNA-side mission needed now. Per `LatticeNetwork.aDNA/what/specs/spec_migration_cutover.md §8` (L0 onboarding contract) declaration of carry-forward to LIP-0006 v1.1 (post-Phase-6 separate lattice-labs LIP cycle).

### TP-6 — v8 P6 ↔ LatticeNetwork.aDNA Phase 6 ↔ LatticeLabs.aDNA Phase 6 cutover seam

**Where**: Tracked in v8 P6 mission slate (mostly stubbed); coordinated with both genesis campaigns' Phase-6 cutover.

**Sequence** (per LatticeNetwork.aDNA `arch_04` + `arch_00` of LatticeLabs.aDNA):
1. LatticeNetwork.aDNA Phase 6 ingests `campaign_federation_beta_planning` from `lattice-labs/` FIRST
2. LatticeLabs.aDNA Phase 6 sweeps non-federation content AFTER LatticeNetwork.aDNA Phase 6 closes
3. v8 P6 fires v8.0 tag at aDNA standard level (`LatticeProtocol/aDNA` repo) — `network_node_mirror` + `permission_edge` propagate from vault-local-extension to upstream-template at this point per ADR-003 §discharge log + ADR-005 rule 6

**When**: Far out. No immediate aDNA.aDNA action.

## §4 — Sequencing

```
Now ─────────────────────────────────────────────────────────────────────────
  M1.4 S2 ✅ (this commit)
       │
       ▼
  M1.4 S3 (validation + AAR + token_baselines refresh + close)
       │
       ▼
  M1.5 coord-network (TP-1) ◄────── C1 + C2 + P2-close discharge
       │                            ratifies LIP-0006 + entity-types
       │                            decides context_traversal ↔ permission_edge
       │
       ▼
  v8 P1 → P2 phase gate (operator-gated)
       │
       ▼
  M2.x cohort (P2: context audit, ADR-016, validation, heatmap)
       │
       │   (parallel track, operator-gated)
       │   ─── node.aDNA M-NODE-TRANSMISSION (TP-2) ◄── arch_02 spec ready
       │           │
       │           ▼
       │       dry-run-PASS + Stanley L1 first transmission
       │           │
       │           ▼ (gated on LatticeNetwork.aDNA Phase 3 Skeleton E2E)
       │       Carly + Herb L1 bootstrap dispatch (TP-3)
       │
       ▼
  v8 P3-P5 (forge hardening · installer · community readiness)
       │
       │   (parallel track)
       │   ─── LatticeNetwork.aDNA Phase 4 fleet build-out (TP-4)
       │       partner L1s + exxact3 + L0 tier
       │
       ▼
  v8 P6 (v8.0 tag) ◄──── coordinated with LatticeNetwork.aDNA Phase 6 + LatticeLabs.aDNA Phase 6 (TP-6)
       │                  network_node_mirror + permission_edge propagate to .adna/ upstream
       │
       ▼
  v8.0 tag fires; Stanley L1 + Carly + Herb + Percy + exxact3 + partner L1s all transmitting
─────────────────────────────────────────────────────────────────────────────
```

## §5 — Open questions raised at this memo (queued for M1.5 + later)

1. **Q-M15-1**: `context_traversal` (M1.4 S2 column) vs `permission_edge` (Carry 2 entity-type) — semantic overlap? Same concept, different lens? Or distinct (traversal = read-event log; edge = policy declaration)? M1.5 ratifies the relationship.
2. **Q-M15-2**: For the `network_` namespace registry, does aDNA.aDNA prefer per-extension upstream placeholder files (existing precedent at `idea_upstream_inventory_entity_type.md` + `idea_upstream_identity_entity_type.md` + the 2 new Carry-2 placeholders) OR a single rolled-up `extensions_pending.md` registry artifact? (Asked by Venus at C2 §5 Q-S1.)
3. **Q-M15-3**: When v8.0 base ontology lands at v8 P6, do `inventory` + `identity` + `network_node_mirror` + `permission_edge` all promote together OR per-extension on their own ratification cadence? (Asked by Venus at C2 §5 Q-S2.) Affects how Network.aDNA tracks the upstream dependency.
4. **Q-TP2-1**: Should node.aDNA seed a small new campaign `campaign_node_network_readiness/` for the transmission-implementation work, OR run as a standalone mission outside a campaign? Decision at TP-2 graduation (idea → mission).
5. **Q-TP6-1**: At v8 P6, does the v8.0 tag include both entity-types as base ontology, OR keep them in an "extensions" registry indefinitely? Affects long-tail propagation cost across all aDNA-consuming vaults. Decision at v8 P6 entry.

## §6 — Hard constraints honored at this filing

- **Zero `.adna/` upstream touches** (v7.0 frozen at `LatticeProtocol/aDNA@27e6395`); both entity-types stay vault-local-extension until v8 P6.
- **Zero partner-vault contact** (4 embargo memos preserved: Wilhelm × 2 + SuperLeague + SIP). Partner-L1 bootstraps (TP-4) DEFERRED.
- **Zero writes to `LatticeNetwork.aDNA/` or `LatticeLabs.aDNA/`** from this aDNA.aDNA-side memo. All cross-vault writes are confined to:
  - `aDNA.aDNA/who/coordination/` (this memo)
  - `aDNA.aDNA/how/campaigns/.../campaign_adna_serious_tool_readiness.md` (M1.5 row + amendments)
  - (already committed at `8308096` by peer-vault write — no aDNA.aDNA-side action needed at this filing)
  - `aDNA.aDNA/STATE.md` (top-bullet)
  - `node.aDNA/how/backlog/idea_node_transmission_implementation.md` (LIGHT seed; no governance edits)
- **No new ADR drafts** at this filing — M1.5 will ratify LIP-0006 + entity-types when it opens; this memo only queues the discharge.
- **Hestia (node.aDNA) write is LIGHT** — single backlog idea file; no STATE.md / MANIFEST.md / governance-level edits in this Stage A.
- **Berthier (LatticeLabs.aDNA + lattice-labs) writes ZERO** — coord memo references the in-flight Berthier work but does not write into Berthier-owned vaults.
- **Venus (LatticeNetwork.aDNA) writes ZERO** — coord memo acknowledges the 3 outbound carries + P2-close memo and queues the discharge in M1.5; no writes into LatticeNetwork.aDNA.

## §7 — Read-back / verification

For a fresh agent loading `aDNA.aDNA/STATE.md` at next session start:
- STATE.md top bullet references this memo
- v8 master M1.5 row is visible in Phase-1 table
- Memo wikilinks resolve to all 3 LatticeNetwork.aDNA outbound memos (3 Phase-1 carries + 1 Phase-2 close)
- Memo wikilinks resolve to both backlog placeholders (`idea_upstream_network_node_mirror_entity_type.md` + `idea_upstream_permission_edge_entity_type.md`)
- Sequencing diagram in §4 is legible without needing to traverse to LatticeNetwork.aDNA

## §8 — Memo provenance

- **Authored by**: Rosetta (aDNA.aDNA), in the same session that closed M1.4 S2 (`session_stanley_20260519T174844Z_v8_m14_s2`).
- **M1.4 S2 commit**: `69807f4` (schema v0.1.1 LIVE + Amendments D+E+A+B+C + 48-jsonl backfill).
- **Plan**: `/Users/stanley/.claude/plans/please-read-the-claude-md-cheerful-sunrise.md` (revised for cross-vault coord planning Stage A; light scope per operator approval).
- **Indexed at**: this memo file (`aDNA.aDNA/who/coordination/coord_2026_05_19_v8_cross_vault_network_coordination.md`).

## Cross-references

- **Inbound carries** (LatticeNetwork.aDNA):
  - `LatticeNetwork.aDNA/who/coordination/coord_2026_05_18_adna_standard_network_category.md` (C1 LIP-0006)
  - `LatticeNetwork.aDNA/who/coordination/coord_2026_05_18_adna_standard_interop.md` (C2 entity-types)
  - `LatticeNetwork.aDNA/who/coordination/coord_2026_05_19_phase2_close_adna_standard.md` (Phase-2 register)
- **Genesis campaigns**:
  - `LatticeNetwork.aDNA/how/campaigns/campaign_alphalattice_genesis/` (Operation Constellation; 8 phases; Phase 2 CLOSED 2026-05-19)
  - `LatticeLabs.aDNA/how/campaigns/campaign_latticelabs_genesis/` (Operation Continuity; 7 phases; Phase 2 CLOSED 2026-05-19)
- **Transmission spec** (canonical input for TP-2): `LatticeNetwork.aDNA/what/specs/spec_node_adna_transmission_registration.md`
- **Migration cutover spec** (Phase-6 coupling input): `LatticeNetwork.aDNA/what/specs/spec_migration_cutover.md`
- **Backlog placeholders** (parallel-discharge ready):
  - `aDNA.aDNA/how/backlog/idea_upstream_permission_edge_entity_type.md`
  - `aDNA.aDNA/how/backlog/idea_upstream_network_node_mirror_entity_type.md`
- **v8 master**: `aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/campaign_adna_serious_tool_readiness.md` (M1.5 row added at this commit)
- **Workspace router**: `/Users/stanley/lattice/CLAUDE.md` (Network Ecosystem + Org-Vault Ecosystem sections describe LatticeNetwork.aDNA + LatticeLabs.aDNA states)
