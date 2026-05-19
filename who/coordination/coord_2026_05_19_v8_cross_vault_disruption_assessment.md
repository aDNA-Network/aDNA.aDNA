---
type: coordination
created: 2026-05-19
updated: 2026-05-19
last_edited_by: agent_stanley
direction: internal  # aDNA.aDNA-side posture memo; documents standard-owner's read of cross-vault v8 exposure
status: filed
scope: cross_vault
counterparts:
  - LatticeLabs.aDNA   # Berthier — Org-Vault.aDNA successor to lattice-labs
  - LatticeNetwork.aDNA # Venus — Network.aDNA (provisional, 6th category)
  - LatticeAgent.aDNA  # Stanley — Platform.aDNA (context harness)
  - LatticeTerminal.aDNA # Spock — Platform.aDNA (terminal substrate)
  - CakeHealth.aDNA    # Berthier — Org-Graph.aDNA (Operation CAKE)
  - MoleculeForge.aDNA # Franklin — Forge.aDNA (genesis Phase 0)
  - RareHarness.aDNA   # Asclepius — Platform.aDNA (rare-disease clinical runtime)
  - III.aDNA           # Argus Panoptes — Framework.aDNA
  - WilhelmAI.aDNA     # Hygieia — Org-Vault.aDNA (AI4U umbrella)
campaign: campaign_adna_serious_tool_readiness
phase: 2
mission: post_m21_s1  # filed in interstitial session between M2.1 S1 close and M2.1 S2 entry; same pattern as 2026-05-19 M1.5 seeding memo
durable: true
countersign_required: false  # informational; documents aDNA.aDNA's posture without binding peer-vault decisions
tags: [coordination, internal, cross_vault, v8, p2, post_m21_s1, disruption_assessment, refactor_campaign_decision, m15_timing, v3_ec_seed, lip_0006, network_node_mirror, permission_edge, lip_0007_retracted, additive_not_breaking]
---

# Cross-vault v8 disruption assessment — post-M2.1-S1 posture

> **From**: Rosetta (aDNA.aDNA standard owner) **To**: own future-self (aDNA.aDNA) + cross-readable by Berthier (LatticeLabs.aDNA + lattice-labs) + Venus (LatticeNetwork.aDNA) + Stanley (LatticeAgent.aDNA) + Spock (LatticeTerminal.aDNA) + the 5 minor-vault personas. Filed in the interstitial session between `campaign_adna_serious_tool_readiness` M2.1 S1 close (`109871f`) and M2.1 S2 entry. **Not a countersign discharge** — this is aDNA.aDNA's own read of cross-vault v8 exposure; documents posture; recommends timing. M1.5 coord-network discharges the network-architecture slice formally.
>
> **Operator question that prompted this memo**: *"Are we going to be able to make these changes to the aDNA standard without disrupting those vaults? Do we need to create/enact an upgrade or refactor campaign for our existing aDNA vaults?"*
>
> **Short answer**: **YES we can, and NO we don't need a new campaign.** v8 work is mostly additive; ecosystem propagation gates at v8 P6 close. The existing `campaign_adna_v3_ecosystem_compliance` seed (per-vault application of v8.0) + the queued M1.5 coord-network discharge are sufficient coverage. **One timing-critical action**: M1.5 should open within 1-2 sessions to maintain a 1-week buffer before assumed v8 P3 entry (~2026-06-02).

## §1 — Subject

aDNA.aDNA's assessment of disruption risk to in-flight peer-vault campaigns from the v8 changes being authored under `campaign_adna_serious_tool_readiness`. Complements [[coord_2026_05_19_v8_cross_vault_network_coordination.md|the M1.5 seeding memo]] (network-arch-specific scope; filed earlier today) with the broader cross-vault sweep that the operator asked for.

**What v8 changes (per v8 master Phase 1-6)**:

| Phase | Work | Upstream `.adna/` impact? |
|---|---|---|
| **P0** Planning | Campaign master + ADRs ratified | NO (governance) |
| **P1** Foundation | v2 M05/M06 close + v7.0 tag (DONE) + token audit M1.3 + LatticeScope schema M1.4 + cross-vault network coord M1.5 | NO (vault-local doctrine + measurement infrastructure at `~/.adna/measurement/`) |
| **P2** Context architecture | M2.1 STATE.md split + Op 2 AGENTS.md hint + Op 3 auto-archive convention + M2.2 ADR-016 + M2.3 cross-campaign retrospective + M2.4 AGENTS.md heat map | NO (vault-local at aDNA.aDNA; doctrine documented for v3-EC propagation) |
| **P3** Forge ecosystem hardening | Obsidian deployment T1-T8 + Bases-HOME + airlock streamline + modular III | NO (forge-vault-side; aDNA.aDNA designs + receives backlog placeholders for v8 P6 propagation) |
| **P4** Installer + binary | LatticeTerminal co-design + ADR-015 packaging + curl-bash + .ps1 | LIMITED — LatticeTerminal.aDNA Phase 4 partner work; coord-memo handshake at M4.1 |
| **P5** Public readiness | Research + new decadal personas + 80-cycle readme + Rosetta Phase 8 absorbed | NO (website + readme; not standard) |
| **P6** Tag v8.0 + announce + v3-EC seed | **v8.0 tag fires** at `LatticeProtocol/aDNA` repo + propagation receipts + v3-EC opens | **YES — but additive only.** New entity types + new conventions + new skills; no breaking changes to v7.0 base ontology |

**Key invariant**: per Campaign Standing Order #14 + #16, **zero `.adna/` upstream touches between v7.0 tag (DONE) and v8.0 tag (P6 close)**. All upstream propagation is batched at v8 P6.

## §2 — Active campaign inventory (9 campaigns; v7.0 baseline)

| # | Vault | Persona | Campaign | Current phase | Latest mission close |
|---|---|---|---|---|---|
| 1 | **LatticeLabs.aDNA** | Berthier | `campaign_latticelabs_genesis` "Operation Continuity" | **Phase 3 (Extraction) OPEN** | Session 12 `mission_phase3_pre_e1_scope_addendum` ✅ 2026-05-19; ADR-002 ratified; LIP-0007 RETRACTED courtesy |
| 2 | **LatticeNetwork.aDNA** | Venus | `campaign_alphalattice_genesis` "Operation Constellation" | **Phase 3 (Skeleton) OPEN — skel_01 CLOSED** | Session 17 skel_01 ✅ 2026-05-19; first stanley_l1 mirror live; skel_02 + skel_03 pending |
| 3 | **LatticeAgent.aDNA** | Stanley | `campaign_latticeagent_cartograph` "Operation Cartograph" | **Phase-Skeleton ACTIVE; `skel_01` in_progress** | OODA #22 2026-05-18; spec-first then scaffold; Python + Apache-2.0 ratified |
| 4 | **LatticeTerminal.aDNA** | Spock | `campaign_terminal_genesis` | **Phase 3 (Compose) OPEN — M3.3 visual renderer ✅** | M3.3 ✅ 2026-05-19; 4.7 MB binary; 47 tests; M3.4 TBD |
| 5 | **CakeHealth.aDNA** | Berthier | `campaign_adna_compliance_v7` | Phase 0→Phase 1 transition | M00 charter committed; M01-M06 sequenced |
| 6 | **MoleculeForge.aDNA** | Franklin | `campaign_moleculeforge_genesis` "Operation Synthesis" | Phase 0 OPEN | Meta-planning mission queued; persona pinned 2026-05-19 |
| 7 | **RareHarness.aDNA** | Asclepius | `campaign_rareharness_argus_loop` MP2-CHAT track + safety v0.2 | P2 active | MP2-2a closed; MP2-2b/c CHAT in flight |
| 8 | **III.aDNA** | Argus Panoptes | Campaign C P2 partial | P2 partial | MC-3 ✅ 2026-05-11 (AIRLOCK.md v0.2.0); MC-4 next |
| 9 | **WilhelmAI.aDNA** | Hygieia | AI4U umbrella P0 active | P0 active | Charter + Council framework v0.5 |

All 9 vaults forked from / aligned to `.adna/` v7.0 tag (`27e6395`).

## §3 — v8 change categories (5 buckets, by ecosystem impact)

| # | Bucket | Example | Impact on in-flight vaults |
|---|---|---|---|
| **a** | **Vault-local doctrine** (only this vault changes) | M2.1 Op 1 STATE.md split; Op 3 auto-archive convention | NONE on peer vaults; each vault adopts at operator discretion |
| **b** | **Ecosystem-template additions** (lands in `.adna/` at v8 P6) | Op 2 Heavy-File Read Convention; `template_state_archive.md`; new AGENTS.md sections | LOW — additive only; peer vaults pull at next `git -C .adna pull` post-v8.0 tag; non-breaking |
| **c** | **New entity types** (extends base ontology of 14 → 14 + N) | `network_node_mirror` (S11 LatticeNetwork); `permission_edge` (S13 LatticeNetwork); parallel-discharge at M1.5 per ADR-005 rule 6 | LOW for unaware vaults (entity types are opt-in); **HIGH-touch for LatticeNetwork.aDNA** (its Phase-3 skeleton exercises these entity-type contracts; M1.5 timing matters) |
| **d** | **New skills** (lands in `.adna/how/skills/` at v8 P6) | `skill_iii_setup.md` already published (MB-6); `skill_campaign_close_archive.md` deferred to 3rd rotation per M2.1 Obj 4 | LOW — opt-in; skills graduate after ≥ 3 instances |
| **e** | **New ADRs** (governance, not standard-template) | ADR-007 schema-bump (MLS-2); ADR-016 per-mission context budget (M2.2); ADR-011 semver discipline (already ratified) | LOW — vault-local governance |

**Categorical summary**: v8 is **mostly additive**. The ONLY structural addition with cross-vault exercise is bucket (c) — the 2 entity types from LatticeNetwork.aDNA. Everything else is doctrine, conventions, or vault-local governance.

## §4 — Per-campaign disruption matrix

| # | Vault / campaign | v7.0-dependent surfaces | v8-change exposure | Risk score | Recommended action |
|---|---|---|---|---|---|
| 1 | **LatticeLabs.aDNA** / Continuity | ADR-001/002 selective-filter; CHARTER pattern; 6-spec-layer arch foundation; cross-vault link conventions; campaign master template | Phase-3 extraction may surface upstream contributions at later sessions (SpeechForge.aDNA cascading-genesis; AutoimmuneBinder/Domain.aDNA via MoleculeForge subsumption); LIP-0007 RETRACTED simplifies. v8.0 P6 cutover seam (TP-6) at Phase 6. | **MEDIUM** | Monitor Phase-3 extraction missions for any upstream-contribution candidates; route through aDNA.aDNA backlog placeholders (precedent: `idea_upstream_*.md`); v3-EC handles ecosystem adoption post-v8.0 |
| 2 | **LatticeNetwork.aDNA** / Constellation | 13 ADRs (ADR-002 entity types; ADR-005 standard-overlay rules; ADR-008 permission_edge); 4 architect specs; `network_` namespace; transmission protocol; carry inventory (C1 LIP-0006 + C2 entity-types + C3 EPs) | **2 entity-type proposals in flight** (`network_node_mirror` + `permission_edge`); LIP-0006 countersign queued; **Phase-3 skel_02 + skel_03 exercise the contracts**; v8.0 standard inclusion needed before retroactive amendment risk | **HIGH** | **OPEN M1.5 within 1-2 sessions** (target ≤ 2026-05-26); ratify LIP-0006 + entity-types per ADR-005 rule 6 parallel-discharge invariant; decide context_traversal ↔ permission_edge semantic overlap; pre-empt v8 P3 entry pressure |
| 3 | **LatticeAgent.aDNA** / Cartograph | ADR-001 code-as-WHAT-object; ADR-002 counsel-wall advisory; ADR-018 Python; clean-room discipline; harness-agnostic provider contract | Phase-Skeleton in-progress; no upstream proposals; `harness.adna.provider.v1` descriptor stays vault-local (HARNESS-CONTRACT shared with LatticeTerminal); v8 P4 installer co-design at far-future M4.1 | **LOW** | Status quo; Phase-Skeleton execution proceeds independently; v3-EC post-v8.0 handles any incidental updates |
| 4 | **LatticeTerminal.aDNA** / Genesis | 19 ADRs (immutable anchors: campaign slug + M0.x ids); HARNESS-CONTRACT pinned w/ LatticeAgent; PROVIDER-CONTRACT authoritative; VISUAL-LAYER-SPEC §1/§2/§3/§5; M3.3 visual renderer live | Phase 3 Compose executing; no upstream proposals; v8 P4 installer co-design at far-future M4.1 (coord-memo handshake) | **LOW** | Status quo; M3.4-M3.x execution proceeds independently; v8 P4 co-design coord-memo flows through M4.1 handshake mission per master Phase 4 plan |
| 5 | **CakeHealth.aDNA** / v7 Compliance | v7.0 template (forked clean); Berthier persona; Org-Graph.aDNA pattern (LIP-0005) | Phase 0→1; no upstream proposals; domain-app-specific work | **LOW** | Status quo; v3-EC post-v8.0 |
| 6 | **MoleculeForge.aDNA** / Synthesis | Phase 0 meta-planning; persona Franklin pinned at fork; Forge.aDNA pattern | No code yet; no upstream proposals; potential Day-1 consumers (AutoimmuneBinder via LatticeLabs absorption; RareHarness; WilhelmAI) | **LOW** | Status quo; meta-planning informs scope before Phase-1 recon |
| 7 | **RareHarness.aDNA** / Argus Loop | Asclepius persona; MP2-CHAT track; CDS Core User Loop spec v0.1-draft; safety framework v0.2 | Domain-app; shares LatticeAgent integration posture (Option-Y in LatticeLabs ADR-002 §3) | **LOW** | Status quo; MP2 continues; cross-vault coord with LatticeAgent via Asclepius's own backlog |
| 8 | **III.aDNA** / Campaign C P2 | Argus persona; airlock-standard v0.2.0; 6 consumer wrappers; 7-pack consumer registry | Campaign C P2 partial; no upstream proposals | **LOW** | Status quo; MC-4 continues |
| 9 | **WilhelmAI.aDNA** / AI4U P0 | Hygieia persona; AI4U umbrella charter; Council framework v0.5 | P0 isolated R&D; no cross-vault dependencies recorded; pillar coord via co-signed ADRs | **LOW** | Status quo; AI4U Council framework deferred to DG0 |

**Synthesis**: 1 HIGH-risk vault (LatticeNetwork.aDNA — entity-type ratification timing); 1 MEDIUM-risk vault (LatticeLabs.aDNA — Phase-3 extraction may surface late contributions); 7 LOW-risk vaults.

## §5 — Coordination touchpoints already in flight

| # | Touchpoint | Status | Scope | Discharge |
|---|---|---|---|---|
| **TP-A** | M1.5 coord-network discharge in v8 P1 | **PLANNED/SEEDED 2026-05-19** | LIP-0006 ratification + `network_node_mirror` + `permission_edge` parallel-discharge per ADR-005 rule 6 + decide context_traversal ↔ permission_edge semantic overlap + 5 open Qs | Non-blocking on P1→P2 phase gate; opens at operator discretion; **memo §6 recommendation: within 1-2 sessions** |
| **TP-B** | `campaign_adna_v3_ecosystem_compliance` seed | **PLANNED** (seeded 2026-05-08; opens at v8 P6 close) | Per-vault application of v8.0 across 19+ partner vaults; M08b-style propagation receipts pattern | v8 P6 close fires `campaign_adna_v3_ecosystem_compliance` open; 19+ vault adopters; partner-discretionary pull cadence |
| **TP-C** | 17 partner-vault v7.0 migration coord memos | **DELIVERED** at v2 M08a; unfrozen at v7.0 tag firing 2026-05-18 | 13 LP-internal `ready` + 4 partner-gated `draft` (Wilhelm × 2 ADR-010-held + SuperLeague + SIP operator-approval-held); partner pull-cadence discretionary | Each partner pulls when ready; no aDNA.aDNA action; embargo memos stay `status: draft` per D5 passive |
| **TP-D** | v8 P4 LatticeTerminal co-design (M4.1 coord-memo handshake) | **STUB-SEEDED** at v8 P0 (`coord_2026_05_17_v8_campaign_open_latticeterminal.md`) | Installer + binary distribution co-design with Spock; Phase 4 entry coord-memo + paired read of LatticeTerminal STATE.md | M4.1 opens at v8 P3 close (operator-gated); LatticeTerminal partner signs off via coord memo per master P4 exit gate |
| **TP-E** | LatticeLabs.aDNA Phase-6 cutover seam | **DEFINED** (arch_04 §6) | LatticeNetwork.aDNA Phase 6 ingests `campaign_federation_beta_planning` from lattice-labs FIRST; LatticeLabs.aDNA Phase 6 sweeps non-federation content AFTER; v8 P6 fires v8.0 tag at aDNA standard level | Far-future; coordinated cutover; no immediate aDNA.aDNA action |

**Coverage assessment**: the 5 touchpoints together cover the full surface of v8 ecosystem impact. The single timing-critical action is TP-A (M1.5 opening); the others are deferred to natural phase boundaries.

## §6 — Conclusion: do we need a new refactor campaign?

**Answer: NO.** The existing coordination architecture is sufficient.

**Reasoning**:

1. **v8 is additive, not breaking** (per §3 + §4). No v7.0-formed vault becomes invalid after v8.0 ships. Migration is pull-when-ready, not fix-or-fail.
2. **v3-EC seed already exists** (TP-B above). It opens at v8 P6 close and runs per-vault application across the ecosystem. No need to duplicate that.
3. **M1.5 covers the network-arch slice** (TP-A above). The 2 in-flight entity types are the only structural additions; M1.5 ratifies them via parallel-discharge per ADR-005 rule 6.
4. **Per-partner v7.0 coord memos already delivered** (TP-C above). Partners pull at their own cadence; aDNA.aDNA does NOT push.
5. **Co-design seams already wired** (TP-D + TP-E). v8 P4 + v8 P6 + LatticeNetwork.aDNA Phase 6 + LatticeLabs.aDNA Phase 6 all have explicit coord-memo handshakes.

**Recommendation**:

- **OPEN M1.5 within 1-2 sessions** (target ≤ 2026-05-26). Maintains 1-week buffer before assumed v8 P3 entry (~2026-06-02 by master timeline forecast). Discharges C1 + C2 + the entity-type parallel-discharge invariant. Non-blocking on P1 → P2 phase gate (already approved); operator-gated entry per Standing Order #1.
- **Monitor LatticeLabs.aDNA Phase-3 extraction missions** (SpeechForge.aDNA cascading-genesis at Session 13; AutoimmuneBinder via MoleculeForge subsumption) for any new upstream-contribution candidates. Route through aDNA.aDNA `how/backlog/idea_upstream_*.md` per ADR-005 rule 3 (zero `.adna/` touches until v8 P6).
- **Status quo for the other 7 vaults** (LatticeAgent · LatticeTerminal · CakeHealth · MoleculeForge · RareHarness · III · WilhelmAI). Their work is governance-local OR domain-app-specific OR Phase-0; no v8 standard exposure.
- **Do NOT open a new proactive coord campaign.** The strategic-context-coordination overhead is paid by this memo + M1.5 + v3-EC seed; opening another campaign would duplicate without adding signal.

## §7 — Sequencing

```
Now ─────────────────────────────────────────────────────────────────────────
  M2.1 S1 ✅ (this conversation, commit 109871f)
       │
       ▼
  This memo (interstitial; no mission open)
       │
       │   Operator decides among 3 next-tracks:
       │
       ├─── (a) M2.1 S2 destructive (STATE.md split + AGENTS.md/MEMORY.md/backlog)
       │           │
       │           ▼
       │       M2.1 S3 close → M2.2/M2.3/M2.4 cohort entry
       │
       ├─── (b) M1.5 coord-network discharge ◄── RECOMMENDED within 1-2 sessions
       │           │
       │           ├── ratifies LIP-0006 + entity-types parallel-discharge
       │           ├── decides context_traversal ↔ permission_edge overlap
       │           └── unblocks LatticeNetwork.aDNA skel_02 + skel_03 with confidence
       │
       └─── (c) M2.x parallel cohort (M2.2 ADR-016 / M2.3 retrospective / M2.4 heat map)
                   any combination of these per operator discretion
                   ↓
       v8 P2 close → P3 forge hardening → P4 installer (LatticeTerminal co-design)
                   → P5 public readiness → P6 v8.0 tag fires → v3-EC opens

  In parallel during v8 P2-P6:
       ─── LatticeLabs.aDNA Phase-3 extraction (E1 → E2 → E3); cascading-genesis exercises
       ─── LatticeNetwork.aDNA Phase-3 skeleton (skel_02 + skel_03); Phase-4-7 build-out
       ─── LatticeAgent.aDNA Phase-Skeleton execution (skel_01 + skel_02 + ...)
       ─── LatticeTerminal.aDNA Phase-3 Compose (M3.4 + ...); Phase 4+ build
       ─── 5 minor vaults proceed at their own pace
─────────────────────────────────────────────────────────────────────────────
```

## §8 — Open questions queued (not requiring action this memo)

1. **Q1**: Should the Op 2 Heavy-File Read Convention (M2.1 Obj 3 design) propagate as part of M1.5 (since LatticeNetwork.aDNA + LatticeLabs.aDNA both have STATE.md sizes approaching the 200 KB router-split threshold — LatticeLabs at 116 KB; LatticeTerminal at 103 KB) — OR stay separate (M2.1 Op 2 lands first; convention propagates via v8 P6)? **Default**: stay separate (cleaner phase-boundary; v3-EC handles per-vault adoption).
2. **Q2**: Is LatticeAgent.aDNA's `harness.adna.provider.v1` descriptor a v8.0 upstream candidate (becomes part of the standard) OR stays vault-local (consumer wrappers per the forge pattern)? **Default**: stays vault-local at v8.0; promotes to standard at v9 or later if a second Platform.aDNA implements the same descriptor.
3. **Q3**: Should LatticeLabs.aDNA Phase-3 extraction be temporally paced to land BEFORE v8 P6 (to avoid retroactive amendment risk on any late upstream contributions) OR continue at Berthier's discretion? **Default**: Berthier's discretion (extraction missions are governance-local; any contributions route through aDNA.aDNA backlog per TP-C precedent).
4. **Q4**: When `skill_campaign_close_archive.md` graduates (after 3 instances per M2.1 Obj 4 design), does it propagate to `.adna/how/skills/` at v8 P6 OR wait for a separate skills-promotion batch? **Default**: v8 P6 batch (matches the proven `skill_iii_setup.md` precedent — published at MB-6).
5. **Q5**: Does the LatticeTerminal.aDNA HARNESS-CONTRACT influence v8 P4 installer design beyond the M4.1 coord-memo handshake? **Default**: M4.1 handles all integration design; no mid-phase coupling.

All 5 Qs are deferrable; none gate v8 P2 progression OR M1.5 opening.

## §9 — Hard constraints honored at this filing

- **Zero `.adna/` upstream touches** (v7.0 frozen at `LatticeProtocol/aDNA@27e6395`); all 5 v8-change categories (§3) honor the freeze through v8 P6.
- **Zero writes into peer vaults** — all references to LatticeLabs / LatticeNetwork / LatticeAgent / LatticeTerminal / minor vaults are READ-ONLY (memo is aDNA.aDNA-side posture; cross-vault writes happen at M1.5 + future mission entries via proper coord-memo handshakes).
- **Zero partner-vault contact** — 4 embargo memos preserved (2 Wilhelm ADR-010-held + 1 SuperLeague + 1 SIP).
- **Zero `~/.claude/settings.json` modifications**.
- **No new ADR drafts** at this filing (Campaign Standing Order #14 — ADR-016 ratifies at M2.2; ADR-007 at MLS-2; no others pending).
- **No new mission openings** (this memo INFORMS the M1.5 timing decision but does not pre-empt it; operator decides M1.5 entry per Standing Order #1).
- **No M2.1 S2 destructive work** (operator-gated; separate session).
- **No M2.1 mission state mutation** (M2.1 stays `in_progress`; this memo is interstitial).
- **Hestia (node.aDNA) untouched** — local-only per workspace router Standing Rule 4.
- **Berthier / Venus / Stanley / Spock / 5 minor personas** — all read-only; this memo is filed at aDNA.aDNA-side without binding peer vaults.

## §10 — Read-back / verification

A fresh agent loading this memo cold should be able to:

- Locate the recommendation in §6 (open M1.5 within 1-2 sessions; no new campaign needed).
- Read §4 disruption matrix to see all 9 active campaigns at a glance.
- Trace the 5 coordination touchpoints in §5 to their respective memos / phases.
- Understand timing-criticality of M1.5 entry via §7 sequencing diagram.
- Find the rationale for "additive not breaking" in §3 (v8 change categories).

If the fresh agent needs to act on the memo's recommendation, the natural next-step is: open M1.5 via a plan-mode session with M1.5 mission spec authoring as scope (the M1.5 row in v8 master already has scope + 5 open Qs queued).

## §11 — Cross-references

**Companion memo (network-arch slice; filed 2026-05-19 earlier today)**:
- [[coord_2026_05_19_v8_cross_vault_network_coordination.md|coord_2026_05_19_v8_cross_vault_network_coordination.md]] — M1.5 seeding memo; structural precedent for this memo

**v8 campaign master (this campaign)**:
- [[../how/campaigns/campaign_adna_serious_tool_readiness/campaign_adna_serious_tool_readiness.md|campaign_adna_serious_tool_readiness.md]] §Phase 1 M1.5 row · §Phase 2 M2.1 row · §Phase 6 v8.0 tag + v3-EC seed

**Predecessor campaigns**:
- `campaign_adna_v3_ecosystem_compliance` (seeded 2026-05-08 at v3-EC tree; opens at v8 P6 close)
- v2 M08a partner v7.0 migration coord memos (17 vaults; delivered)

**Peer-vault sources read at memo authoring time (read-only)**:
- `LatticeLabs.aDNA/STATE.md` (top sections; Phase 3 extraction status; ADR-002 ratification; LIP-0007 retraction)
- `LatticeNetwork.aDNA/STATE.md` (Phase 3 skeleton status; skel_01 close; entity-type parallel-discharge invariant)
- `LatticeAgent.aDNA/STATE.md` (Phase-Skeleton ACTIVE — note: project router CLAUDE.md "PLANNED awaiting human review" reading is stale; campaign opened 2026-05-18)
- `LatticeTerminal.aDNA/STATE.md` (Phase 3 Compose; M3.3 ✅ 2026-05-19)
- Plus 5 minor-vault STATE.md tops (briefly scanned via Explore agent sweep 2026-05-19)

**M2.1 S1 outputs (this conversation's prior turn; informs the v8 P2 trajectory)**:
- [[../how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p2_m21_context_audit_split.md|mission_adna_str_p2_m21_context_audit_split.md]] — mission spec
- [[../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m21_obj2_state_split_design.md|m21_obj2_state_split_design.md]] — Op 1 STATE.md split design
- [[../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m21_obj3_agents_md_hint_design.md|m21_obj3_agents_md_hint_design.md]] — Op 2 Heavy-File Read Convention design
- [[../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m21_obj4_archive_convention_design.md|m21_obj4_archive_convention_design.md]] — Op 3 auto-archive convention

**Standing references**:
- [[../how/campaigns/campaign_adna_serious_tool_readiness/CLAUDE.md|v8 campaign CLAUDE.md]] — Standing Orders 11-19
- [[../CLAUDE.md|project CLAUDE.md]] — Standing Orders 1-10
- `node.aDNA/what/context/token_baselines.md` v0.1.1 — canonical measurement baseline (M1.4 S3 output)

## §12 — Memo provenance

- **Authored by**: Rosetta (aDNA.aDNA), in the interstitial session between M2.1 S1 close (`109871f` 2026-05-19T20:30Z+) and M2.1 S2 entry (operator-discretionary; not yet open).
- **Session**: `session_stanley_20260519T205033Z_v8_post_m21s1_xvault_assessment` (Tier 1; light coord/posture; non-destructive).
- **Plan**: `/Users/stanley/.claude/plans/please-read-the-claude-md-fluffy-stream.md` (cross-vault disruption assessment scope; ratified at plan approval).
- **Indexed at**: this memo file path (`aDNA.aDNA/who/coordination/coord_2026_05_19_v8_cross_vault_disruption_assessment.md`).
- **Pre-plan investigation**: Explore agent sweep across `LatticeLabs.aDNA/STATE.md` + `LatticeNetwork.aDNA/STATE.md` + `LatticeAgent.aDNA/STATE.md` + `LatticeTerminal.aDNA/STATE.md` + 5 minor vaults (one-line summaries); findings synthesized in §4 disruption matrix.
- **Hard-constraint discipline**: zero cross-vault writes; all peer-vault references are read-only; partner-vault contact zero (4 embargo memos preserved); no settings.json touched; no ADR drafts.
