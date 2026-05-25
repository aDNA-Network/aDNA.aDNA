---
type: adr
adr_number: 026
title: "Ledger-Observation-as-Shared-Primitive — canonical poller at III.aDNA + M3.6 P3 skeleton as fallback + airlock federation transport"
status: accepted   # ratified at M3.7 S2 close 2026-05-25 per Campaign SO #14 in-phase exception clause D2=A operator-ratified at S2-entry plan G2 Path A optional ADR — 5th invocation in v8 after ADR-014 + ADR-023 + ADR-024 + ADR-025 (twin with ADR-025 same session); fires because M3.7 design spec §2 P4 ledger-observation consumer contract is load-bearing for Decision 4 hybrid path
created: 2026-05-25
updated: 2026-05-25
last_edited_by: agent_stanley
supersedes:
superseded_by:
campaign: campaign_adna_serious_tool_readiness
mission: mission_adna_str_p3_m37_modular_iii_for_obsidian
objective: 5   # ADR-026 ratification objective within M3.7 close cascade (path A optional Clause B)
decision_letter: A   # M3.7 D2=A operator-ratified at S2-entry plan G2 AskUserQuestion (Campaign SO #14 in-phase exception clause 5th invocation in v8; ADR-026 twin with ADR-025 fired at same M3.7 S2 close)
ratification_phase: M37_S2_close_via_campaign_so_14_in_phase_exception_clause_load_bearing_for_iii_adna_canonical_poller_anchor_plus_m36_p3_fallback_skeleton_plus_airlock_federation_transport
ratified: 2026-05-25
ratified_session: session_stanley_20260525T163023Z_v8_m37_s2
deciders: [agent_stanley, operator_stanley]
informed: [argus, venus, spock, mentor, berthier, hermes, iris, mnemosyne, hygieia, asclepius, daedalus, hestia, franklin, ariadne, robert_kennedy, thoth]   # argus first (III owner; canonical-poller-location authority per Clause A); venus second (LN owner; federation-transport substrate authority); all personas with III + federation obligations
related_decisions: [adr_008_airlock_template_stub, adr_013_membership_manifest_signing_pubkey, adr_014_verification_handoff_topology, adr_015_membership_manifest_per_purpose_slot, adr_016_per_mission_context_budget, adr_023_registry_data_projection_contract, adr_024_airlock_streamline_contract, adr_025_iii_decadal_coordination]
related_specs: [m37_modular_iii_design_spec, m36_streamline_design_spec, iii_airlock_standard_spec_v0_3_at_iii_adna]
related_skills: [skill_iii_modular_cycle, skill_airlock_activation]   # both deferred-authoring per D-GRAD precedent
tags: [adr, decision, adr_026, campaign_adna_serious_tool_readiness, m37, v8, p3, ledger_observation_as_shared_primitive, canonical_poller_at_iii_adna, m36_p3_skeleton_as_fallback, airlock_federation_transport, campaign_so_14_in_phase_exception_clause_invoked_5th_v8, substrate_inversion_with_adr_variant_post_graduation_reinforcement, skill_in_phase_adr_ratification_post_graduation_reinforcement_5th, decision_4_hybrid_path_explicit_contract, adr_025_twin, federation_substrate_awareness_iii_airlock_v0_3, ledger_polling_skeleton_appendix_a_m36, rosetta]
---

# ADR-026: Ledger-Observation-as-Shared-Primitive — canonical poller at III.aDNA + M3.6 P3 skeleton as fallback + airlock federation transport

## Status

**Accepted** at M3.7 S2 close 2026-05-25 (`session_stanley_20260525T163023Z_v8_m37_s2`). Drafted at M3.7 S2-entry 2026-05-25 (this session; twin with ADR-025) per Campaign SO #14 in-phase exception clause D2=A operator-ratified at M3.7 S2-entry plan G2 AskUserQuestion (Path A with optional ADR-026 fires because M3.7 design spec §2 P4 ledger-observation consumer contract is load-bearing for Decision 4 hybrid path). Campaign SO #14 in-phase exception clause invocation — **5th invocation in v8** after M3.4 ADR-014 + M3.5 ADR-023 + M3.6 ADR-024 + M3.7 ADR-025 (same S2 close as ADR-025; twin ratification).

### Twin-ratification with ADR-025

ADR-026 is the **twin ADR** of ADR-025 at M3.7 S2 close. Both are drafted at M3.7 S2-entry + ratified at M3.7 S2-close as part of Path A scope. Twin-ratification at same close is the **2nd canonical instance** of dual-ADR-at-mission-close pattern (the 1st was M3.5 S3 close ratifying ADR-023 alone — single not dual; ADR-026 being the 2nd ADR at same close as ADR-025 introduces the dual-ADR pattern). The twin pattern's eligibility criterion: two ADRs share a tightly-coupled load-bearing decision surface (here: III-decadal coordination + ledger-observation-primitive are co-dependent for v8 P5 + III.aDNA Campaign E consumer-contract readiness). Future twin-ratification: a 3rd canonical instance would graduate `skill_twin_adr_ratification.md` per ≥ 3 instances rubric (graduation candidate SEEDED at 1 of 3 at this M3.7 close).

### Substrate-inversion-with-ADR variant reinforcement (this ADR)

ADR-026 ratification at M3.7 S2 close serves as a **post-graduation reinforcement** of substrate-inversion-with-ADR variant. The variant graduates at ADR-025 (3rd canonical instance; ≥ 3 instances rubric satisfied); ADR-026 fires within the same close as the supplementary load-bearing ADR (4th instance within same mission). `skill_substrate_inversion_with_adr.md` graduated at ADR-025; ADR-026 strengthens at 4/3+. `skill_in_phase_adr_ratification.md` post-graduation reinforcement at 5/3+ at this twin-close.

### Ratification (at M3.7 S2 close)

Status transitioned `draft → accepted` at M3.7 S2 close commit 2026-05-25 alongside close cascade (design spec finalize + ADR-025 ratify + ADR-026 ratify together + AAR finalization + mission spec close + campaign master close + STATE Op 3 21st canonical instance + session moves + push). The 3 clauses A=canonical-poller-location-iii.aDNA + B=consumer-fallback-pattern-m36-p3-skeleton + C=federation-transport-airlock-or-direct-file-read are operational from this S2 ratify. **Downstream consumers** — III.aDNA Campaign E or successor (consumes the canonical-poller-location contract for authoring the III.aDNA-side ledger poller) + v8 P5 100-III-loops capstone (consumes the fallback-pattern contract for operator-side cycle execution under degraded conditions) + cross-vault III observability consumers + LatticeAgent.aDNA federation surfaces — may cite this ADR as canonical doctrine immediately upon ratification. v8 P6 ecosystem propagation will land the upstream-promotion candidate (ADR-026 itself) at `LatticeProtocol/aDNA` per design-at-P3-propagation-at-P6 pattern.

### Elevation chain — slot continuation

ADR-026 continues the **multi-step forward-only ADR slot reassignment chain** unbroken from M2.4 (ADR-007 → ADR-019 → ADR-022) → M3.5 (ending at ADR-023) → M3.6 (direct to ADR-024) → M3.7 (direct to ADR-025 + ADR-026). At M3.7, no new reassignment was needed — ADR-026 is simply the next clear unreserved slot beyond ADR-025; ADR-019's prior reservation absorbed into ADR-025 + ADR-026 pair as noted at ADR-025 elevation chain table.

## Context

The III v0.3.0 airlock spec (`iii_airlock_standard_spec.md` v0.3 ratified at III.aDNA MD-A1 close 2026-05-21 + impl-doc v0.3 ratified at MD-A2 close 2026-05-21 + Federation-Substrate Awareness §5 added at MD-A1) introduces ledger observation as an opt-in primitive at §5.3. The polling contract (60s interval; canonical observation root `~/.lattice/ledger/<node_id>/<YYYY-MM>/`; event taxonomy `airlock_activation` + `secrets_preflight` + `idempotency_check` + `federation_sigverify`) is specified but the **canonical poller IMPLEMENTATION** is not yet authored.

M3.6 ADR-024 Cluster 3 P3 "Ledger polling reference skeleton" (Appendix A in `m36_streamline_design_spec.md`) provides ~20 lines of pseudocode + non-executable bash stub implementing the polling contract per Campaign C R3 documentation-grade discipline. The skeleton is consumer-readable + scope-bounded to documenting the polling contract; it is NOT the canonical implementation but serves as the activation-cost-amortization primitive for any consumer wanting to activate ledger observation locally.

M3.7 design spec §2 P4 "Ledger-observation consumer contract" names **Decision 4** of 6 open integration-shape decisions: *Ledger-observation primitive location*. Three options: (a) aDNA.aDNA-only / (b) III.aDNA-only / (c) hybrid. Operator confirmed hybrid (recommended in S1 substrate report §6.4) — III.aDNA-side canonical + M3.6 P3 skeleton as aDNA.aDNA-side fallback.

**Three motivations for in-phase ADR-026 ratification** (per Campaign SO #14 in-phase exception clause):

1. **Load-bearing for III.aDNA Campaign E authoring authority over canonical poller**: III.aDNA Campaign E opens with M3.7 design spec §2 P4 as primary substrate. Without ADR-026 Clause A naming III.aDNA as canonical-poller-location authority, III.aDNA Campaign E might re-derive the authority boundary OR fragment poller implementations across multiple vaults.
2. **Load-bearing for fallback-pattern consumer-contract clarity**: when III.aDNA is unreachable (network partition; III.aDNA offline; advisory-mode-only), aDNA.aDNA-side cycles need a documented fallback path. ADR-026 Clause B names M3.6 P3 skeleton as canonical fallback + scopes the activation trigger (offline / degraded / operator-discretionary).
3. **Load-bearing for federation-transport disambiguation**: III v0.3.0 spec §5 Federation-Substrate Awareness allows multiple federation transports (airlock cross-vault request + direct file-read via federation channels). ADR-026 Clause C names the dual-transport contract for ledger observation specifically + maps each transport to consumer scenarios.

**Stabilization rationale**: ADR-026 fires as twin with ADR-025 because Decision 4 hybrid path requires explicit contract specification (vs. Decision 3 distributed-but-coordinated which suffices with ADR-025 Clauses A+B+C alone). The twin pair (ADR-025 + ADR-026) covers the full III-decadal coordination + ledger-observation surface for v8 P5 + III.aDNA Campaign E consumer-contract readiness.

## Decision

### Clause A — Canonical-poller-location: III.aDNA

**The canonical ledger-observation poller is authored at III.aDNA**. Specifically:

- **Canonical poller path** (at III.aDNA): `III.aDNA/what/runtime/ledger_observation_poller/<poller-impl>.{py,sh,md}` (path is III.aDNA-author-discretionary; file authoring DEFERRED to III.aDNA Campaign E per ADR-025 Clause B authority).
- **Canonical poller contract**: implements III airlock v0.3 spec §5.3 polling discipline (60s interval default; canonical observation root `~/.lattice/ledger/<node_id>/<YYYY-MM>/`; event taxonomy `airlock_activation` + `secrets_preflight` + `idempotency_check` + `federation_sigverify`).
- **Authority boundary**: III.aDNA Argus owns canonical poller authoring + maintenance + version evolution. Consumer vaults consume read-only via federation transport per Clause C.

**Sub-clause A.1 — Canonical poller availability mode**: III.aDNA may declare canonical poller in one of 4 modes:

| Mode | Definition | Consumer behavior |
|------|------------|-------------------|
| `live` | Poller running + reachable + publishing observed events | Consumers consume primary surface; no fallback needed |
| `advisory` | Poller running but in advisory-mode-only (no enforcement; may emit observed events but downstream consumption opt-in) | Consumers may consume; fallback OPTIONAL per consumer policy |
| `degraded` | Poller intermittently unreachable OR slow OR partial event coverage | Consumers should fallback per Clause B for affected event types |
| `offline` | Poller down OR III.aDNA unreachable OR poller not yet implemented | Consumers MUST fallback per Clause B for any ledger-observation-dependent cycle |

Mode advertised via III.aDNA `STATE.md` Active Campaigns block OR via federation channel (per Clause C federation-transport).

**Sub-clause A.2 — Pre-implementation state**: at M3.7 S2 close (this ratify), canonical poller is in **`offline` mode** because III.aDNA Campaign E (or successor; canonical poller authoring authority) has not yet opened. All ledger-observation-dependent operator-side cycles run under Clause B fallback until III.aDNA promotes canonical poller to `live` or `advisory`.

### Clause B — Consumer-fallback-pattern: M3.6 P3 skeleton

**The M3.6 ADR-024 Cluster 3 P3 "Ledger polling reference skeleton" (Appendix A at `m36_streamline_design_spec.md`) IS the canonical aDNA.aDNA-side fallback**. Specifically:

- **Fallback path**: aDNA.aDNA `how/skills/skill_iii_modular_cycle.md` Step 4 (deferred for authoring per D-GRAD precedent) invokes the M3.6 P3 polling skeleton when canonical poller is `offline` OR `degraded` OR operator-discretionary offline-mode override fired.
- **Fallback scope**: same polling contract as canonical (60s interval; canonical observation root; same event taxonomy). The fallback is functionally equivalent + documentation-grade-validated against the same spec §5.3.
- **Fallback caveats**: fallback skeleton is per-vault-local (no cross-vault aggregation OR federation transport per Clause C); operator-side cycle results from fallback are marked `cycle_observation_source: fallback` in vault_card `iii_target.*.notes` field for audit transparency.

**Sub-clause B.1 — Fallback activation trigger**: fallback activates when any of:
- (a) Canonical poller mode = `offline` per Clause A.1 (Sub-clause A.2 baseline at M3.7 ratify)
- (b) Canonical poller mode = `degraded` AND the event type the cycle depends on is in the degraded coverage set
- (c) Operator-discretionary override via `--fallback` CLI flag (or skill_iii_modular_cycle equivalent) at cycle invocation
- (d) Federation transport unreachable per Clause C (cross-vault federation channels unreachable for ledger event federation)

**Sub-clause B.2 — Fallback-result transparency**: any cycle result derived from fallback observation includes:
- `cycle_observation_source: fallback` field in vault_card `iii_target.<dim>.notes`
- Coord memo (per ADR-025 Clause C) frontmatter flags `observation_source: fallback` + names trigger (per B.1 enumeration)
- Aggregations (per M3.7 P6) include `fallback_cycles_in_window: N` count for audit traceability

**Sub-clause B.3 — Fallback supersession path**: when canonical poller graduates from `offline` to `live` (III.aDNA Campaign E publishes canonical poller + Argus promotes per ADR-025 Clause B authority), consumer vaults SHOULD migrate from fallback to canonical at next III-decadal cycle (operator-discretionary; migration NOT auto-forced). vault_card `iii_target.*.notes` field carries migration timestamp in next-cycle result.

### Clause C — Federation-transport: airlock cross-vault request OR direct file-read via federation channels

**Cross-vault ledger event federation MAY use one of two transports**, per III airlock v0.3 spec §5 Federation-Substrate Awareness:

1. **PRIMARY (post-v8-P6): Airlock cross-vault request contract** per ADR-008 v0.3 re-pin (proposed at M3.6 design spec §4.3 for v8 P6 propagation; once landed, becomes canonical transport). Federation request frontmatter includes `request_type: ledger_observation_pull` + scope (`vault_id` + `event_type` + time window) + canonical-JSON sig per III impl-doc §4.2.
2. **FALLBACK (pre-v8-P6): Direct file-read via federation channels** per III v0.3 spec §5.1 — Tailscale + Nebula federation substrates expose `~/.lattice/ledger/` paths read-accessible cross-vault (per LN.aDNA pc_01 Phase A federation substrate live state at M3.7 S2 close). Consumer reads remote `~/.lattice/ledger/<node_id>/<YYYY-MM>/<event-type>.jsonl` directly without explicit airlock request.

**Sub-clause C.1 — Transport-mode advertisement**: III.aDNA Campaign E (or successor canonical-poller author) advertises which federation transport(s) the canonical poller supports:
- `airlock_only` — only airlock cross-vault request transport supported
- `file_read_only` — only direct file-read via federation channels supported (typical pre-v8-P6 state)
- `dual` — both transports supported; consumer chooses per scenario

At M3.7 S2 close (this ratify), pre-v8-P6 baseline = `file_read_only` is canonical baseline; airlock cross-vault request transport opens at ADR-008 v0.3 re-pin landing at v8 P6 propagation cycle.

**Sub-clause C.2 — Cross-vault privacy preservation**: federation transport scope is limited per III v0.3 spec §5.4 Federation-Substrate Privacy. Specifically:
- Federation requests OR file reads include event metadata only (event type + outcome + timestamp + minimal context)
- Per-event `payload` fields stay vault-local (NOT federated)
- Cross-vault aggregations consume metadata only (per ADR-024 Cluster 3 P9 federated-reader privacy contract)

**Sub-clause C.3 — Federation-transport degradation**: if federation transport unreachable (Tailscale OR Nebula substrate down OR remote node offline), consumer cycles MUST fallback per Clause B (treating remote vault as `offline` mode equivalent). Federation-transport reachability is checked at each cycle invocation (NOT cached) to avoid stale-state inference.

**Sub-clause C.4 — Amendment discipline**: ADR-026 amendments per same discipline as ADR-025 Sub-clause C.3 — per-amendment table (trigger + date + author + scope); preserves canonical-poller-at-iii.aDNA invariant per Clause A.

## Consequences

### Positive

- **Canonical poller location decided + bounded**: III.aDNA Campaign E opens with a known canonical-poller-location authority + responsibility. Other vaults consume read-only via federation channels. No fragmentation across vaults.
- **Fallback path preserves operator-side cycle execution under degraded conditions**: M3.6 P3 skeleton already exists as documentation-grade-validated text; aDNA.aDNA-side cycles can fall back without re-deriving the polling discipline. Mitigates III.aDNA Campaign E timing risk.
- **Federation transport dual-mode preserves pre/post-v8-P6 continuity**: pre-v8-P6 baseline (direct file-read) is operationable today; airlock cross-vault request transport opens at ADR-008 v0.3 re-pin at v8 P6. Consumers can stay-current across the transition.
- **Cross-vault privacy preservation**: event metadata federated; per-event payload stays vault-local. Mirrors ADR-024 Cluster 3 P9 privacy contract for activation events.
- **Substrate-inversion-with-ADR post-graduation reinforcement at 4th canonical instance** (ADR-025 graduated at 3rd; ADR-026 at 4th within same M3.7 close); `skill_in_phase_adr_ratification.md` post-graduation reinforcement at 5/3+.
- **Twin-ADR pattern seeds new graduation candidate**: `skill_twin_adr_ratification.md` candidate at 1 of 3 instances; eligibility = two ADRs share tightly-coupled load-bearing decision surface within single mission close.

### Negative

- **Pre-implementation `offline` baseline at ratify**: canonical poller is in Mode `offline` at M3.7 S2 close because III.aDNA Campaign E has not yet opened. All ledger-observation-dependent cycles run under fallback until III.aDNA Campaign E publishes canonical poller. Mitigation: Clause B fallback skeleton is documentation-grade-validated + operationable today; aDNA.aDNA-side cycles do NOT block on III.aDNA Campaign E timing.
- **Mode-advertisement channel unresolved**: III.aDNA advertises canonical poller mode (`live` / `advisory` / `degraded` / `offline`) via `STATE.md` OR federation channel — neither pinned at ratify. Mitigation: III.aDNA Campaign E entry mission ratifies advertisement channel as Campaign E pre-flight.
- **Fallback ↔ canonical migration is operator-discretionary**: when canonical poller graduates to `live`, consumer vaults migrate at next III-decadal cycle (NOT auto-forced). Some vaults may lag indefinitely if operator doesn't trigger migration. Mitigation: Sub-clause B.3 names migration discipline; coord memos per ADR-025 Clause C can include migration prompts.
- **Federation-transport choice complexity**: consumers must choose between airlock cross-vault request OR direct file-read (Clause C); dual-mode (Sub-clause C.1 `dual`) adds further choice complexity. Mitigation: III.aDNA Campaign E advertises canonical poller's supported transport(s); consumer choice scoped to supported set.
- **Twin-ADR ratification doubles ratification scope at close cascade**: M3.7 S2 close cascade carries both ADR-025 + ADR-026 ratification + AAR + close cascade in same session. Mitigation: 2-session implementation-class shape (M3.7 = 2nd canonical instance after M3.6 1st) accommodates the load; close cascade discipline is well-rehearsed at 4 prior implementation-mission closes (M3.4 + M3.5 + M3.6 + M3.7).

### Neutral

- **No new skills authored at M3.7**: skill file authoring for `skill_iii_modular_cycle.md` (Step 4 fallback invocation per Clause B) + `skill_airlock_activation.md` updates (Step 7 federation-transport advertisement per Clause C) deferred per D-GRAD inherited. Backlog idea file extends with M3.7 entries at close cascade.
- **No new ADRs for individual federation transports**: airlock cross-vault request transport stays under ADR-008 v0.3 re-pin proposal scope at v8 P6; direct file-read transport stays under III v0.3 spec §5.1 Federation-Substrate Awareness scope. ADR-026 Clause C references both without creating parallel ADRs.

## Alternatives considered

### Alternative 1 — No ADR-026; rely on M3.7 design spec §2 P4 prose only (Path B variant)

Considered at M3.7 S2-entry plan G2 AskUserQuestion (path A optional element). Operator chose Path A with ADR-026 firing because Decision 4 hybrid path is load-bearing. **Why not B**: without ADR-026, the canonical-poller-location authority + fallback-pattern + federation-transport contract would live as design-spec prose; III.aDNA Campaign E + v8 P5 + cross-vault consumers would have no canonical doctrinal anchor for ledger observation specifically. Also forecloses 5th Campaign SO #14 invocation reinforcement.

### Alternative 2 — Canonical poller at aDNA.aDNA (not III.aDNA)

Considered at design phase. **Why rejected**: aDNA.aDNA carries operator-vault-personalization scope; canonical poller is framework infrastructure (not personalization-bound). III.aDNA's role as canonical framework is the natural home for canonical infrastructure. Mirrors ADR-025 Clause B dimension-definition-ownership-at-iii.aDNA rationale.

### Alternative 3 — Centralized poller at LN.aDNA (alongside the ledger itself)

Considered at design phase. **Why rejected**: LN.aDNA owns the canonical ledger infrastructure (`~/.lattice/ledger/<node_id>/<YYYY-MM>/` is LN-defined per ADR-013/-014/-015). The poller is a CONSUMER of the ledger; consumer naturally lives at the consumer side (III.aDNA framework). LN.aDNA hosts the ledger infrastructure; III.aDNA hosts the poller consumer. Clean separation.

### Alternative 4 — Multiple ADRs (Clause A + B + C as separate ADRs; split-trigger M3.7.5)

Considered at design phase. **Why rejected**: the 3 clauses compose cleanly as one ADR (mirrors ADR-024 + ADR-025 3-clause pattern). Splitting into 3 ADRs would fragment the canonical doctrine surface + double the twin-ratification load to a 4-ADR sextuple at M3.7 S2 close. The single ADR with 3 clauses is cleaner; M3.7.5 split-trigger reserved for future cases with > 2 load-bearing decisions.

### Alternative 5 — Defer ADR-026 to v8 P5 ratification (Path B variant)

Considered at design phase. **Why not deferred**: v8 P5 opens with III-decadal cycles needing ledger observation. Without ADR-026 in hand, v8 P5 first cycle would run under under-specified ledger-observation contract; fallback ↔ canonical migration risk. Ratifying at M3.7 S2 close means v8 P5 opens with ready ledger-observation contract; fallback paths are pre-authorized; III.aDNA Campaign E entry mission has a known canonical-poller-authoring authority.

## Amendments

(Future amendments per Clause C.4 amendment discipline land here as table rows.)

| Date | Trigger | Author | Amendment |
|------|---------|--------|-----------|
| — | — | — | (no amendments yet; first amendment expected at III.aDNA Campaign E publishes canonical poller + transitions mode `offline` → `live` OR at ADR-008 v0.3 re-pin landing at v8 P6 propagation cycle) |

## Notes

- **Standing Order #8 self-reference** — ADR-026 is itself a ledger-observation-as-shared-primitive artifact at the meta level: the ADR's authoring discipline (drafted as twin with ADR-025 at M3.7 S2 entry per Campaign SO #14 in-phase exception clause; ratified at M3.7 S2 close alongside 5-other-deliverables close cascade per `skill_implementation_mission_close.md` already-graduated pattern; coord-memo discipline at close cascade per ADR-025 Clause C — to which ADR-026 is a consumer-interface companion). 24th tactical invocation in v8 P3 at S2 close (the 23rd was at design spec §2 P3 III-decadal cycle orchestration self-reference; the 22nd was at M3.7 S1 mission spec frontmatter referencing M3.6 §6).
- **Twin-ADR pattern at M3.7 S2 close**: 1st canonical instance of dual-ADR-at-same-mission-close (M3.5 was single ADR-023; M3.6 was single ADR-024; M3.7 is dual ADR-025 + ADR-026). Pattern eligibility: two ADRs share tightly-coupled load-bearing decision surface within single mission close. `skill_twin_adr_ratification.md` graduation candidate SEEDED at 1 of 3 instances. Graduates at 3rd instance if M3.8 or later applies.
- **Substrate-inversion-with-ADR variant**: M3.7 graduates at ADR-025 (3rd canonical instance); ADR-026 strengthens at 4/3+ within same mission close as supplementary load-bearing ADR.
- **`skill_in_phase_adr_ratification.md` post-graduation reinforcement at 5th canonical instance**: ADR-014 (M3.4) + ADR-023 (M3.5) + ADR-024 (M3.6) + ADR-025 (M3.7 first) + ADR-026 (M3.7 second twin) = 5 cumulative invocations. Graduated at M3.6 (3rd); post-graduation reinforcement at ADR-025 (4th) + ADR-026 (5th) at this M3.7 close.
- **Pre-implementation `offline` baseline**: at M3.7 S2 close, canonical poller is in Mode `offline` (Sub-clause A.2). All ledger-observation-dependent cycles run under Clause B fallback. III.aDNA Campaign E entry mission ratifies the mode advertisement channel + publishes initial canonical poller; first cycle promotion expected `offline` → `live` at III.aDNA Campaign E first canonical-poller release.
- **Cross-references to M3.7 design spec § integration**: this ADR Clauses A + B + C directly consumed by M3.7 design spec §2 P4 (ledger-observation consumer contract: PRIMARY = ADR-026 Clause A canonical poller; FALLBACK = ADR-026 Clause B M3.6 P3 skeleton; transport = ADR-026 Clause C dual-mode). P3 III-decadal cycle orchestration skill (deferred authoring) invokes fallback per Sub-clause B.1 trigger; coord memo per ADR-025 Clause C carries Sub-clause B.2 transparency flag.
