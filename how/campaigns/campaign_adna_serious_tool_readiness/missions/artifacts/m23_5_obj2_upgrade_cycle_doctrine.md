---
type: artifact
artifact_type: doctrine_memo
mission: mission_adna_str_p2_m23_5_push_readiness_review
campaign: campaign_adna_serious_tool_readiness
phase: 2
objective: 3
created: 2026-05-20
updated: 2026-05-20
status: complete
last_edited_by: agent_stanley
purpose: "Codify operational doctrine for aDNA upgrade cycles. Answers the operator's specific question 'where does it run from?' explicitly with a 5-anchor topology. Back-fills the v8 P6 propagation mechanism under-specification identified by the Explore-agent inventory."
sources:
  - "/Users/stanley/lattice/.adna/how/docs/upgrade_v6_to_v7.md (canonical v6→v7 reference; 422 lines)"
  - aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj6_version_bump_checklist.md  # §0 preconditions + §7 verification harness
  - aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj0_ecosystem_matrix.md         # per-change blast-radius pattern
  - aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj2_migration_runbook.md         # flat/in-place migration + 13-step rollback
  - aDNA.aDNA/what/decisions/adr_005_three_way_vault_boundary.md    # vault-scope reasoning anchor
  - aDNA.aDNA/what/decisions/adr_011_aDNA_semver_discipline.md      # two-track semver policy
  - "/Users/stanley/lattice/CLAUDE.md (workspace router; cross-vault topology)"
  - "/Users/stanley/lattice/lattice-labs/who/coordination/coord_2026_05_08_publish_rewrite.md (Daedalus coord memo prototype)"
  - "skills: skill_l1_upgrade.md + skill_workspace_upgrade.md + skill_vault_publish.md + skill_git_remote_setup.md + skill_deploy.md"
tags: [artifact, m23_5, doctrine_memo, upgrade_cycle_doctrine, 5_anchor_topology, 5_phase_model, where_does_it_run_from, v8_p6_back_fill, skill_graduation_deferred, doctrine_as_design_memo, standing_order_14, future_skill_adna_upgrade_cycle]
related_artifacts:
  - ../mission_adna_str_p2_m23_5_push_readiness_review.md
  - m23_5_obj1_push_readiness_review.md    # sibling; consumes §2 + §3 reasoning
  - m23_5_obj3_push_readiness_checklist.md  # sibling; instantiates §3 Verify phase
  - aar_m23_5_push_readiness_review.md      # close artifact
doctrine_class: design_memo   # NOT an ADR (Standing Order #14; D3=B default — graduates to skill_aDNA_upgrade_cycle.md at ≥ 3 instances per m21_obj4 rubric)
ratifies_at: future_skill_graduation   # v8→v9 OR v3-EC application = 3rd instance threshold
---

# M2.3.5 Obj 2 — Upgrade-Cycle Doctrine Memo (5-anchor topology + 5-phase model)

> **Deliverable 3 of M2.3.5** (S1). Codifies the operational doctrine for how aDNA upgrade cycles work across the workspace topology. Answers the operator's specific question: **where does an upgrade cycle run from?** Documents the 5-anchor topology + 5-phase model + coordination protocol + tool support + future graduation path.
>
> **Doctrine-as-design-memo** (per Standing Order #14; D3=B default). NOT an ADR; does not codify executable skill. Future graduation to `skill_aDNA_upgrade_cycle.md` at ≥ 3 distinct upgrade-cycle instances per the `m21_obj4_archive_convention_design.md` §rubric (v6→v7 = 1st instance; v7→v8 in flight = 2nd; v8→v9 OR v3-EC application = 3rd).

## §1 Definition + trigger conditions

### 1.1 What is an aDNA upgrade cycle?

An **aDNA upgrade cycle** is a coordinated sequence of authoring, propagation, and consumption events that flow a change from one anchor point to the rest of the lattice topology. Per ADR-011 (semver discipline), upgrade cycles fall into two tracks:

- **Major Governance bump** (`vN.0` tag at `LatticeProtocol/adna`): codifies governance changes (ADRs, Standing Orders, ontology extensions, naming conventions). Breaking changes are permitted but documented in `upgrade_v(N-1)_to_vN.md`. Tag fires at campaign-master close (e.g., v7.0 at v2 M06 close 2026-05-18; v8.0 forecasted at v8 M6.2 close).
- **Standard track refresh** (`x.y` minor bumps at module/lattice/dataset object schemas): no governance change; opt-in adoption per vault.

This memo covers Major Governance upgrade cycles (the load-bearing case). Standard-track refreshes follow a simpler subset.

### 1.2 Trigger conditions

A Major Governance upgrade cycle fires when ANY of:

1. **Campaign close at vault-level scope**: e.g., v8 campaign closes at v8 M6.2 (forecasted); v8.0 tag fires at that moment per Campaign Standing Order #16.
2. **Load-bearing decision ratification** (ADR with operator-override per Standing Order #14): mid-campaign ADR ratifications (M2.2 ADR-016; M1.5 ADR-017) are *interim* governance changes that compose into the next Major bump.
3. **Cross-vault parallel-discharge event** (per ADR-005 rule 6 + ADR-008 §f; first instance at M1.5): a peer vault's ratification triggers the standard-owner-side discharge.

This memo focuses on case 1 (campaign-close tag firing); cases 2 + 3 are *components* of the cycle, not whole cycles.

### 1.3 Two-track policy from ADR-011

| Track | Bump | Frequency | Audience |
|---|---|---|---|
| **Governance (Major)** | `vN.0` | ~ every 4-6 months | All 36-vault ecosystem + downstream operators + community |
| **Standard (minor)** | `vN.x` | Per-object as needed | Module/lattice/dataset publishers |

Governance bumps consolidate everything since the prior governance tag. v7.0 = 2026-05-18 (v2 campaign close); v8.0 = forecast (v8 M6.2 close ~ 2026-07-15±2w per campaign master forecast).

## §2 Where does an upgrade cycle run from? (5-anchor topology)

**Direct answer to the operator's question**: An aDNA upgrade cycle runs from **5 distinct anchor points**, each with a specific role. No single anchor is "the" upgrade-cycle home. The topology distributes responsibility per ADR-005 (three-way vault boundary) extended with two additional anchor types.

### 2.1 Anchor 1: `.adna/` upstream (template repo at `LatticeProtocol/adna`)

**Role**: The **template** anchor. Standard-level changes (new template files, new skills, new docs, ontology base) land here. This is what 19+ ecosystem vaults consume via `git -C .adna pull` (the upgrade mechanism for the template).

**Who writes**: aDNA.aDNA campaign work writes here at the **v8 P6 propagation event** (Campaign Standing Order #14 + ADR-005 rule 3). During a campaign, `.adna/` is **frozen** (zero touches end-to-end through v8 P2 + P3 + P4 + P5; the campaign-internal work stays in `aDNA.aDNA`).

**Who reads**: All 19+ ecosystem vaults pull from `LatticeProtocol/adna` (or upstream fork) to refresh their template baseline.

**Lifecycle states**:
- Frozen during campaign: `.adna/@27e6395` (v7.0) is the current frozen state
- Thawed at campaign close: v8 P6 lifts amendments + Standing Order refinements + ontology extensions + new ADRs from `aDNA.aDNA` into `.adna/`, then tags v8.0
- Re-frozen after tag: next campaign begins; cycle repeats

### 2.2 Anchor 2: `aDNA.aDNA/` (self-referential teaching vault; Rosetta persona)

**Role**: The **demonstration + governance** anchor. ADRs first ratify here; Standing Orders first refine here; ontology extensions first land here. The vault teaches the standard by using the standard, so changes that will eventually propagate to `.adna/` live here first.

**Who writes**: aDNA.aDNA persona (Rosetta; via campaign work). Operator approves mid-phase ADRs via Standing Order #14 operator-override.

**Who reads**: Downstream operators clone `LatticeProtocol/aDNA.aDNA` as a teaching reference. v8 P6 propagation lifts changes from here to `.adna/` upstream.

**Lifecycle states**:
- Active throughout campaign: every mission writes here
- Pushed to `LatticeProtocol/aDNA.aDNA` at campaign-internal cadence (M2.3.5 = first explicit pre-push gate; future cycles may push at multiple points within a campaign)
- v8 P6 lifts subset to `.adna/`; everything else stays as aDNA.aDNA-internal (mission specs, AARs, session histories, campaign masters)

### 2.3 Anchor 3: `node.aDNA/` (per-node operational vault; Hestia persona)

**Role**: The **local-operator** anchor. Receives empirical baselines (e.g., `token_baselines.md` measured by aDNA.aDNA campaigns); receives per-node inventory + lattice memberships + machine state. **Local-only by default per workspace router Standing Rule #4.**

**Who writes**: aDNA.aDNA campaign work writes baselines here (bounded per mission spec §Cross-vault impact — e.g., M2.3 bounded to 3 files: `token_baselines.md` + `.yaml` + `inventory_vaults.yaml` row). Hestia persona (the node's local operator) writes inventory + memberships.

**Who reads**: The local operator + agents running on this node. **Never pushed to a public remote** unless the operator explicitly configures one.

**Lifecycle states**:
- Receives writes during campaign (e.g., M2.1 + M2.3 propagation to `token_baselines.md`)
- Committed locally; never pushed (per Standing Rule #4)
- Survives campaigns across version bumps; v0.1.x baseline becomes v0.2.x at next M2.3-class retrospective

**This is NOT where the upgrade cycle runs from** — node.aDNA *receives* propagation; it doesn't *initiate* it.

### 2.4 Anchor 4: `lattice-labs/` (operational vault; Berthier persona) + future `LatticeLabs.aDNA/`

**Role**: The **cross-vault coordination** anchor. Coord memos for partner-vault notification; receipt collection; embargo state management. The vault that *coordinates* the ecosystem rollout (M08b receipts pattern; Daedalus co-sign pattern).

**Who writes**: Berthier (lattice-labs operational); operator-confirmed for partner-vault dispatch decisions.

**Who reads**: Berthier + partner-vault personas (Daedalus / Asclepius / Hermes / Spock / Hygieia / etc.) reading their respective coord memos.

**Lifecycle states**:
- Active during campaign for cross-vault coordination
- v2 M08b parallel-runs informationally; M6.3 of v8 dispatches `~ 19 ecosystem coord memos` at v8.0 tag firing
- Receipts collected manually until receipt format is codified (gap identified in Explore-agent inventory)
- Transition note: `lattice-labs/` is being migrated to `LatticeLabs.aDNA/` via `campaign_latticelabs_genesis`; war + federation work stays in `lattice-labs/` until Phase-6 cutover

### 2.5 Anchor 5: Each consuming vault (19+ ecosystem .aDNA vaults)

**Role**: The **consumption** anchor. Each vault opts in to v8.0 changes at its own pace; pulls via `git -C .adna pull` (template-level) or per-vault `git pull` (vault-internal updates from origin).

**Who writes**: Each vault's own persona (Spock for LatticeTerminal; Asclepius for RareHarness; Hermes for CanvasForge; Argus for III; etc.); applies v8.0 changes to local CLAUDE.md / skills / templates / ADRs as needed per the new template baseline.

**Who reads**: The consuming vault's own operator + agents.

**Lifecycle states**:
- Pre-v8.0 baseline: vault is at v7.0 baseline (frozen at `27e6395`)
- v8.0 tag fires upstream → consuming vault becomes eligible to upgrade
- Per-vault opt-in pull: operator runs `skill_workspace_upgrade.md` (refreshes `.adna/` template) → CLAUDE.md / templates / skills update → vault re-runs first-session protocol
- Per-vault application: `campaign_adna_v3_ecosystem_compliance` mission tree handles the 19-vault per-vault application (M01-EC audit → M02-EC skills → M03-EC remotes → ... → M07-EC final audit)

### 2.6 Summary table — anchor responsibilities

| Anchor | Role | Writes during campaign? | Pushed to public remote? | When does it act? |
|---|---|---|---|---|
| `.adna/` upstream | Template | NO (frozen per Campaign S.O. #14) | YES (at v8 P6 lift) | At campaign-close P6 propagation |
| `aDNA.aDNA/` | Demonstration + governance | YES (every mission) | YES (at vault-internal cadence; M2.3.5 = first pre-push gate) | Throughout campaign |
| `node.aDNA/` | Local-operator (Hestia) | YES (bounded propagation; e.g., 3 files at M2.3 S3) | NO (Standing Rule #4 local-only) | When aDNA.aDNA campaign propagates baselines |
| `lattice-labs/` | Cross-vault coordination (Berthier) | YES (coord memos) | YES (when configured; not v8-blocking) | Throughout campaign + at M6.3 dispatch |
| Each consuming vault | Consumption (per-persona) | YES (per-vault work; not v8-related) | YES (each vault's own remote) | At v3-EC application post-v8.0 tag |

**The upgrade cycle does NOT run from `node.aDNA/`** — node.aDNA is the *receiving* end of cross-vault propagation, not the *initiating* end. node.aDNA contains the empirical baselines (`token_baselines.md`) and per-node operational state; the doctrine itself lives at `aDNA.aDNA/` (and propagates to `.adna/` at v8 P6).

## §3 Phases of an upgrade cycle (5-phase model)

The cycle has 5 phases. Each phase has an initiator, an actor, an artifact moved, and a verification.

### 3.1 Phase A — Author (within aDNA.aDNA)

| Field | Value |
|---|---|
| **Initiator** | Campaign mission (e.g., M2.2 ratifies ADR-016; M2.3 amends Clause C) |
| **Actor** | aDNA.aDNA persona (Rosetta) with operator approval |
| **Artifacts moved** | New ADRs / amended ADRs / new Standing Orders / ontology extensions / new mission specs / AARs / artifacts |
| **Verification** | Mission spec acceptance criteria (e.g., M2.3 = 15/15 PASS); Standing-Order discharge table; per-mission token budget reported in AAR per ratified Clause C |
| **Hard constraint** | Zero `.adna/` touches (per Campaign S.O. #14); zero partner-vault contact (4 embargo memos preserved); cross-vault writes bounded per mission spec §Cross-vault impact |
| **Output** | aDNA.aDNA HEAD advances; commits land locally |

### 3.2 Phase B — Push (aDNA.aDNA → `LatticeProtocol/aDNA.aDNA`)

| Field | Value |
|---|---|
| **Initiator** | Operator at vault-internal cadence; first explicit pre-push gate = M2.3.5 (this mission) |
| **Actor** | Operator runs `git push origin main` from aDNA.aDNA after pre-push checklist GO |
| **Artifacts moved** | aDNA.aDNA HEAD → `LatticeProtocol/aDNA.aDNA` origin/main |
| **Verification** | Pre-push checklist (obj3; ~ 12 items adapted from M06 10-check post-tag harness) returns GO; post-push: `git log -1 origin/main` matches HEAD |
| **Hard constraint** | Push only after checklist GO + operator confirmation; no force-push; no premature partner-vault notification |
| **Output** | Public remote reflects vault state; downstream cloners can fetch |

### 3.3 Phase C — Propagate (`aDNA.aDNA` → `.adna/` upstream; only at campaign close)

| Field | Value |
|---|---|
| **Initiator** | Campaign close (v8 P6 — M6.1 tag prep) |
| **Actor** | aDNA.aDNA campaign work lifts amendments + Standing Order refinements + ontology extensions + new ADRs from aDNA.aDNA into `.adna/` template per ADR-005 rule 3 |
| **Artifacts moved** | Subset of aDNA.aDNA changes lifted to `.adna/` (governance objects; not mission specs / AARs / session histories) |
| **Verification** | M06's 10-check post-tag verification harness (adapted from v2 M06 close 2026-05-18 v7.0 tag firing) |
| **Hard constraint** | Phase C does NOT fire during the campaign; only at P6 (Campaign S.O. #14); backlog placeholder mechanism queues lifts during the campaign |
| **Output** | `.adna/` template reflects v8.0; `LatticeProtocol/adna` v8.0 tag fires |

### 3.4 Phase D — Consume (each consuming vault pulls v8.0)

| Field | Value |
|---|---|
| **Initiator** | Each vault's operator (opt-in; per-vault cadence) |
| **Actor** | Operator runs `skill_workspace_upgrade.md` (refreshes `.adna/` template); per-vault work follows in `campaign_adna_v3_ecosystem_compliance` mission tree (M01-EC through M07-EC) |
| **Artifacts moved** | `.adna/@v8.0` → each vault's local `.adna/` clone; per-vault CLAUDE.md / skills / templates / ADRs update |
| **Verification** | Per-vault acceptance: vault's own CLAUDE.md first-session protocol verifies the upgrade; M01-EC audit confirms |
| **Hard constraint** | Per-vault opt-in (no forced upgrades); each vault times its own consumption |
| **Output** | Consuming vault is now v8.0-baseline; ready for application of v8.0 governance changes per v3-EC mission tree |

### 3.5 Phase E — Verify (post-consumption; each vault confirms v8.0 application)

| Field | Value |
|---|---|
| **Initiator** | Berthier (lattice-labs) collects receipts; Carly + Herb dispatch for operator-side validation per `campaign_validation_node_adna_lwx_outputs` pattern |
| **Actor** | Per-vault operator + persona; validation-as-dispatched-campaign mechanism |
| **Artifacts moved** | Receipt memos `coord_<date>_v8_<vault>_receipt.md` filed at lattice-labs |
| **Verification** | Receipts collected = v8.0 propagation complete at ecosystem level; M06 10-check harness runs at each vault |
| **Hard constraint** | Verification is *per-vault opt-in* (not forced); receipt format codification still gap (Explore-agent inventory) |
| **Output** | Ecosystem-wide v8.0 adoption status visible; v8 campaign close complete; v3-EC campaign opens |

### 3.6 Phase mapping to v8 campaign structure

| v8 phase | Upgrade-cycle phase | Mission scope |
|---|---|---|
| **P1-P5** | A (Author within aDNA.aDNA) | M1.3-M5.5 missions; everything lands in aDNA.aDNA-internal |
| **P2 M2.3.5** | B (first pre-push gate) | M2.3.5 (this mission; introduces the gate doctrine + first instance) |
| **P6 M6.1** | C entry (propagation) | M6.1 tag prep + push to `.adna/` |
| **P6 M6.2** | C exit (tag fires) | M6.2 v8.0 tag at `LatticeProtocol/adna` |
| **P6 M6.3** | D + E initiation (consume + verify dispatch) | M6.3 coord memos to ~ 19 partner vaults |
| **v3-EC** | D + E execution (per-vault application + receipt) | M01-EC through M07-EC successor campaign |

## §4 Coordination protocol

### 4.1 Coord memo pattern (Daedalus prototype)

Reference: `/Users/stanley/lattice/lattice-labs/who/coordination/coord_2026_05_08_publish_rewrite.md` (Daedalus co-sign memo for v7.0 publish-skill rewrite; M01 Obj 8 template basis).

**Format template** (adapted; future v8 P6 receipts use this):

```yaml
---
type: coordination
artifact_type: upgrade_cycle_receipt   # OR: cross_vault_dispatch / cross_vault_ack
upgrade_cycle: v7_to_v8
source_vault: aDNA.aDNA
target_vault: <consuming_vault>
target_persona: <persona_name>
status: dispatched   # OR: acknowledged / completed / blocked
dispatched_at: <ISO timestamp>
dispatched_by: <agent_id>
acknowledged_at:
acknowledged_by:
---

# Coord — <Upgrade cycle> <target vault>

## §1 Dispatch
[What's changing in this upgrade cycle that affects target vault]

## §2 Action expected from target vault
[Concrete steps target persona takes]

## §3 Deadline / cadence
[Optional; opt-in for partner vaults]

## §4 Receipt expected
[What target vault sends back; OR null if informational]

## §5 Cross-references
[ADRs ratified; mission AARs; obj artifacts]
```

### 4.2 Receipt collection (M08b pattern; gap remains)

Receipt collection during v2 M08b ran informally — 17 partner-vault v7.0 migration memos were filed at `lattice-labs/who/coordination/` but receipts back were manual. M2.3.5 obj2 §6 future-graduation rubric specifies codification of receipt format as part of `skill_aDNA_upgrade_cycle.md` graduation (≥ 3 instances).

**Current status**: informal. **Risk**: v8 M6.3 dispatch needs codified receipt format before sending 19+ coord memos. **Mitigation**: M6.3 mission spec authors the format inline; v3-EC inherits as canonical.

### 4.3 Embargo state machine

For partner vaults with embargo conditions (e.g., 4 partner-affiliated embargo memos preserved through v8 P2: Wilhelm × 2 ADR-010-window + SuperLeague + SIP operator-approval):

States: `draft` (not yet sent) → `dispatched` (sent; acknowledgment pending) → `acknowledged` (partner has confirmed receipt) → `completed` (partner has applied change AND filed receipt).

Embargo memos stay `status: draft` during a campaign; dispatch fires at v8.0 tag firing OR earlier if operator-approved.

## §5 Tool support (skills by phase)

### Phase A — Author

| Skill | File | Use |
|---|---|---|
| (vault-internal authoring; no dedicated skill) | n/a | Mission specs + ADRs + AARs authored per Standing Order #5 + per-mission token budget per ADR-016 Clause A |

### Phase B — Push

| Skill | File | Use |
|---|---|---|
| `skill_vault_publish.md` | `~/lattice/.adna/how/skills/skill_vault_publish.md` | Push vault to GitHub remote (M05 v7.0 deliverable; LIVE) |
| `skill_git_remote_setup.md` | `~/lattice/.adna/how/skills/skill_git_remote_setup.md` | Configure GitHub origin + naming convention lint (M05 v7.0 deliverable) |
| `skill_deploy.md` | `~/lattice/.adna/how/skills/skill_deploy.md` | Pre-push sanitization hook installer (M05 v7.0 deliverable) |
| **`m23_5_obj3_push_readiness_checklist.md`** (THIS mission) | sibling artifact | Pre-push gate (M06 post-tag adapted; M2.3.5 = first instance) |

### Phase C — Propagate

| Skill | File | Use |
|---|---|---|
| `skill_workspace_upgrade.md` | `~/lattice/.adna/how/skills/skill_workspace_upgrade.md` | Re-pull `.adna/` template at consumer vaults |
| `skill_upstream_contribution.md` | `~/lattice/.adna/how/skills/skill_upstream_contribution.md` | Template-level contributor workflow |
| (v8 P6 mission specs; not yet authored) | M6.1-M6.4 forthcoming | aDNA.aDNA → `.adna/` lift mechanism |

### Phase D — Consume

| Skill | File | Use |
|---|---|---|
| `skill_l1_upgrade.md` | `~/lattice/.adna/how/skills/skill_l1_upgrade.md` | L0 → L1 path; node.aDNA refresh |
| `skill_workspace_upgrade.md` | (above) | Per-vault template refresh |

### Phase E — Verify

| Skill | File | Use |
|---|---|---|
| `m01_obj6_version_bump_checklist.md` §7 | `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj6_version_bump_checklist.md` | M06's 10-check post-tag verification harness (adapted from post-tag to general post-push at M2.3.5 obj3) |
| (v3-EC mission tree; pending finalization) | `campaign_adna_v3_ecosystem_compliance` | Per-vault verification dispatched to Carly + Herb |

## §6 Future graduation (skill_aDNA_upgrade_cycle.md candidate)

**Graduation rubric**: ≥ 3 distinct upgrade-cycle instances per `m21_obj4_archive_convention_design.md` §rubric.

**Instance count at M2.3.5**:
1. **v6→v7**: Complete (v2 M06 2026-05-18; `.adna/how/docs/upgrade_v6_to_v7.md` published; 17 partner-vault migrations unfrozen)
2. **v7→v8**: In flight (v8 campaign; this M2.3.5 introduces the pre-push gate; v8.0 tag forecasted ~ 2026-07-15±2w)
3. **v8→v9 OR v3-EC ecosystem-wide application**: Future; rubric met when this lands

**Trigger for graduation**: When the 3rd instance closes, this memo's §3 phases + §4 coord protocol + §5 tool support consolidate into `skill_aDNA_upgrade_cycle.md` per Standing Order #14 + the `m21_obj4` doctrine-to-skill graduation pattern.

**Until then**: doctrine-as-design-memo per D3=B default at M2.3.5; M3.x / M4.x / M5.x / M6.x missions reference this artifact verbatim rather than re-deriving.

## §7 Cross-references

### Doctrine inheritance

- [[../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj6_version_bump_checklist.md|m01_obj6_version_bump_checklist.md]] — executable v7.0 tag runbook (M06 ran this; obj3 adapts §7 to pre-push gate)
- [[../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj0_ecosystem_matrix.md|m01_obj0_ecosystem_matrix.md]] — per-change blast-radius template (obj1 §3 adapts)
- [[../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj2_migration_runbook.md|m01_obj2_migration_runbook.md]] — flat/in-place migration + 13-step rollback (Phase D + E reference)
- `~/lattice/.adna/how/docs/upgrade_v6_to_v7.md` — canonical v6→v7 reference (Phase A + Phase B precedent; published path)

### Decisional anchors

- [[../../../what/decisions/adr_005_three_way_vault_boundary.md|ADR-005 three-way vault boundary]] — vault-scope-by-vault-scope reasoning (§2 5-anchor topology derives from this)
- [[../../../what/decisions/adr_011_aDNA_semver_discipline.md|ADR-011 semver discipline]] — two-track Major.Minor policy (§1.3)
- [[../../../what/decisions/adr_016_per_mission_context_budget.md|ADR-016 per-mission context budget (amended)]] — Phase A discipline (per-mission budget enforcement)
- [[../../../what/decisions/adr_017_network_adna_pattern_category_and_namespace_ratification.md|ADR-017 Network.aDNA category + namespace]] — cross-vault parallel-discharge example (Phase A + cross-vault component)

### Skill inventory

- `~/lattice/.adna/how/skills/skill_l1_upgrade.md` — Phase D (consume; L0→L1)
- `~/lattice/.adna/how/skills/skill_workspace_upgrade.md` — Phase C + D (propagate + consume; `.adna/` template refresh)
- `~/lattice/.adna/how/skills/skill_vault_publish.md` — Phase B (push)
- `~/lattice/.adna/how/skills/skill_git_remote_setup.md` — Phase B (push; first-time remote config)
- `~/lattice/.adna/how/skills/skill_deploy.md` — Phase B (push; pre-push hook)
- `~/lattice/.adna/how/skills/skill_upstream_contribution.md` — Phase C (template-level contributor workflow)

### Coordination prototypes

- `~/lattice/lattice-labs/who/coordination/coord_2026_05_08_publish_rewrite.md` — Daedalus co-sign memo (§4.1 coord memo template basis)
- `~/lattice/aDNA.aDNA/who/coordination/coord_2026_05_19_v8_m15_latticenetwork_ratification_response.md` — Venus response memo (M1.5 cross-vault dispatch example)

### Workspace topology

- `~/lattice/CLAUDE.md` — workspace router (24-project enumeration; Standing Rule #4 node.aDNA local-only)
- `~/lattice/node.aDNA/what/inventory/inventory_vaults.yaml` — 36-vault canonical inventory (post-M2.3 fold-in)

### Sibling artifacts at M2.3.5

- [[m23_5_obj1_push_readiness_review.md|m23_5_obj1_push_readiness_review.md]] — push-readiness review for the immediate push (consumes §2 + §3 reasoning)
- [[m23_5_obj3_push_readiness_checklist.md|m23_5_obj3_push_readiness_checklist.md]] — concrete GO/NO-GO gate (instantiates §3 Verify phase + §5 Phase B tool support)
- [[aar_m23_5_push_readiness_review.md|aar_m23_5_push_readiness_review.md]] — M2.3.5 AAR (close artifact)
