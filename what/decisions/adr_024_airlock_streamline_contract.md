---
type: adr
adr_number: 024
title: "Airlock Streamline Contract — additive-only streamline primitives for III v0.3.0 airlock surface + opt-in via spec version note + v8 P6 propagation channel as canonical doctrine"
status: accepted   # ratified at M3.6 S2 close 2026-05-25 per Campaign SO #14 in-phase exception clause D2=A — 3rd invocation in v8 after M3.4 ADR-014 + M3.5 ADR-023; canonical-for-load-bearing-decisions-that-block-cross-vault-propagation variant GRADUATES per ≥ 3 instances rubric; skill_in_phase_adr_ratification.md graduation candidate ADVANCES 2 → 3 of 3 = GRADUATES at this S2 ratify
created: 2026-05-25
updated: 2026-05-25
last_edited_by: agent_stanley
supersedes:
superseded_by:
campaign: campaign_adna_serious_tool_readiness
mission: mission_adna_str_p3_m36_airlock_aar_and_streamline
objective: 5
decision_letter: A   # M3.6 D2=A operator-ratified at S1 mid-checkpoint G2 AskUserQuestion (Campaign SO #14 in-phase exception clause invocation — 3rd in v8)
ratification_phase: M36_S2_close_via_campaign_so_14_in_phase_exception_clause_load_bearing_for_5_consumer_wrappers_plus_iii_v0_4_forward_pointer
ratified: 2026-05-25
ratified_session: session_stanley_20260525T062446Z_v8_m36_s2
deciders: [agent_stanley, operator_stanley]
informed: [argus, berthier, hermes, iris, spock, mnemosyne, hygieia, asclepius, daedalus, mentor, venus, hestia, franklin, ariadne, robert_kennedy]   # argus first (III owner); all personas with airlock activation obligations across the lattice
related_decisions: [adr_008_airlock_template_stub, adr_014_verification_handoff_topology, adr_016_per_mission_context_budget, adr_022_tool_use_logging, adr_023_registry_data_projection_contract]
related_specs: [m36_streamline_design_spec]
related_skills: [skill_airlock_activation]
tags: [adr, decision, adr_024, campaign_adna_serious_tool_readiness, m36, v8, p3, airlock_streamline_contract, additive_only_invariant, opt_in_via_spec_version_note, v8_p6_propagation_channel, 9_primitives_3_clusters, operator_friction_reduction, reply_memo_discipline, tooling_skeletons, campaign_so_14_in_phase_exception_clause_invoked_3rd_v8, canonical_for_load_bearing_decisions_that_block_cross_vault_propagation_variant_graduates_at_3rd_invocation, slot_reassignment_chain_continuation_adr_023_to_adr_024, skill_in_phase_adr_ratification_graduation_candidate_3_of_3, siteforge_consumer, videoforge_consumer, canvasforge_consumer, wga_consumer, lpwhitepaper_consumer, iii_v0_4_forward_pointer, m3_7_modular_iii_consumer, rosetta]
---

# ADR-024: Airlock Streamline Contract — additive-only streamline primitives for III v0.3.0 airlock surface + opt-in via spec version note + v8 P6 propagation channel as canonical doctrine

## Status

**Accepted** at M3.6 S2 close 2026-05-25 (`session_stanley_20260525T062446Z_v8_m36_s2`). Drafted at M3.6 S1-end 2026-05-25 (`session_stanley_20260525T052048Z_v8_m36_s1`) per Campaign SO #14 in-phase exception clause D2=A operator-ratified at M3.6 S1 mid-checkpoint G2 AskUserQuestion. Campaign SO #14 in-phase exception clause invocation — **3rd invocation in v8** after M3.4 ADR-014 (verification handoff topology; 2026-05-24) + M3.5 ADR-023 (registry data-projection contract; 2026-05-25). **At 3rd invocation the canonical-for-load-bearing-decisions-that-block-cross-vault-propagation variant GRADUATES per ≥ 3 instances rubric**; `skill_in_phase_adr_ratification.md` graduation candidate ADVANCES 2 → 3 of 3 = **GRADUATES** at this S2 ratify (skill file authoring deferred per D-GRAD=ratify-as-finding-defer-skill-authoring inherited from M3.4 + M3.5 precedent).

### Ratification (at M3.6 S2 close)

Status transitioned `draft → accepted` at M3.6 S2 close commit 2026-05-25 alongside close cascade (AAR finalization + mission spec close + campaign master close + STATE Op 3 19th canonical instance + session moves + push). The 3 clauses A=streamline-primitive-additive-only-invariant + B=opt-in-via-spec-version-note + C=v8-P6-propagation-channel are operational from this S2 ratify. **Downstream consumers** — 5 live III v0.3.0 consumer wrappers (SiteForge.aDNA + VideoForge.aDNA + CanvasForge.aDNA + wga.aDNA + LPWhitepaper.aDNA; all pinned at commit `a309ad4`) + future III v0.4 minor-bump (which may absorb streamline primitives as v0.4-baseline) + M3.7 modular III for Obsidian (first cross-mission consumer per `m36_streamline_design_spec.md` §6 forward-integration stub) — may cite this ADR as canonical doctrine immediately upon ratification. v8 P6 ecosystem propagation will land the upstream-promotion candidate (ADR-024 itself + ADR-008 v0.3 re-pin proposal per design spec §4.3 + AIRLOCK.md template P1+P7 sections + impl-doc Appendices A+B + impl-doc §1.5 consolidated rejection-reason enum + spec §4.3.1 sig field defaults table + spec §6 minimal v0.3-era worked example) at `LatticeProtocol/aDNA` per the design-at-P3-propagation-at-P6 pattern (5th survival test passed via M3.5 + 6th survival test via M3.6 inheritance).

**At 3rd invocation in v8, Campaign SO #14 in-phase exception clause GRADUATES the canonical-for-load-bearing-decisions-that-block-cross-vault-propagation variant per ≥ 3 instances rubric.** All three invocations (M3.4 ADR-014 + M3.5 ADR-023 + M3.6 ADR-024) cite the same trigger — load-bearing for in-phase consumers + cross-vault propagation that would otherwise stall on phase-exit gating. `skill_in_phase_adr_ratification.md` graduation candidate advances **2 → 3 of 3 use instances = GRADUATES** at M3.6 S2 ratify per AAR §Pattern graduation block.

### Elevation chain — slot continuation

ADR-024 continues the **multi-step forward-only ADR slot reassignment chain** that began at M2.4 (ADR-007 → ADR-019 → ADR-022) and extended at M3.5 (7-step chain ending at ADR-023). At M3.6, no new reassignment was needed — ADR-024 is simply the next clear unreserved slot beyond ADR-023:

| Slot | Status | Reserve | Notes |
|---|---|---|---|
| ADR-015 | reserved-P4-M4.2 | installer packaging | per M3.5 chain |
| ADR-016 | accepted | per-mission context budget | M2.2 |
| ADR-017 | accepted | network.aDNA pattern category + namespace | M1.5 |
| ADR-018 | reserved-P3-M3.4-or-P5 | TBD (M3.4 verification-handoff topology took ADR-014 instead) | per M3.5 chain |
| ADR-019 | reserved-P3-M3.7 | modular III for Obsidian | per M3.5 chain |
| ADR-020 | reserved-P6-close | single-commit additive-upstream pattern (was ADR-017 forecast) | per M1.5 chain |
| ADR-021 | gap-skip | conservative; may fill by earlier mission | per M3.5 chain |
| ADR-022 | accepted | tool-use logging — PostToolUse hook + SQLite schema + analysis dispatch | M2.4 |
| ADR-023 | accepted | registry data-projection contract | M3.5 |
| **ADR-024** | **draft → accepted at M3.6 S2** | **airlock streamline contract** | **M3.6** |

The slot reassignment discipline holds without re-extension at M3.6 — direct continuation. `skill_adr_slot_reassignment_forward_only.md` graduation candidate stays at 2 of 3 (no new reassignment instance at M3.6; graduates if M3.7 surfaces another forward-only reassignment).

## Context

III.aDNA airlock v0.3.0 (`iii_airlock_standard_spec.md` + `iii_airlock_substrate_implementation.md` + `iii_airlock_request_schema.yaml` + `skill_airlock_activation.md`) shipped a federation-aware third surface (Ed25519 + ledger observation + substrate-pluralism + COMPLIANCE_AUDIT) on 2026-05-21 (MD-A1 + MD-A2 + MD-A3 close at III.aDNA). The MD-A4 5-consumer-wrapper sweep landed `SiteForge.aDNA + VideoForge.aDNA + CanvasForge.aDNA + wga.aDNA + LPWhitepaper.aDNA` at v0.3.0 commit `a309ad4` on 2026-05-22. The MD-A5 documentation-grade end-to-end validation (Track D1 close) green-lit the v0.3 contract on 2026-05-24 — 16/16 v0.2 coverage-map rows still conform under v0.3 with same 2 additive deltas; ledger observability + Ed25519 preflight + membership-manifest pubkey monotonicity all verified by inspection.

M3.6 (Airlock AAR + streamline — concern #3 of v8's 6 strategic concerns) authored a cross-ecosystem AAR (`aar_airlock_ecosystem_m36.md`) + streamline design spec (`m36_streamline_design_spec.md`) synthesizing across III v0.3.0 + 5 consumer wrappers + lattice-labs `campaign_comic_pipeline_canvas` M0-M1 operational learnings + aDNA.aDNA ADR-008 template-stub doctrine. The design spec surfaced **9 streamline primitives organized into 3 clusters** (operator-friction reduction + reply-memo discipline + tooling skeletons; 1 additional candidate P5 membership-manifest schema consolidation flagged as LN-side out-of-scope).

**Three motivations for in-phase ADR-024 ratification** (per Campaign SO #14 in-phase exception clause):

1. **Load-bearing for 5 consumer wrappers**: each of the 9 primitives is opt-in additive per consumer wrapper at next minor-bump sweep; without an ADR defining the additive-only invariant + opt-in-via-spec-version-note mechanism + v8 P6 propagation channel, each consumer wrapper would re-derive the adoption discipline ad-hoc.
2. **Cross-vault propagation surface**: the streamline primitives target III canonical artifacts (spec + impl-doc + activation skill + `.adna/` AIRLOCK.md template); without an ADR establishing the upstream-promotion path through v8 P6 single-commit-per-patch, the primitives would land as one-off design-spec text without a propagation contract that downstream consumers can predict.
3. **Variant stabilization**: this is the 3rd invocation of Campaign SO #14 in-phase exception clause in v8 (after ADR-014 + ADR-023). Per ≥ 3 instances rubric, the variant graduates `skill_in_phase_adr_ratification.md` as canonical-for-load-bearing-decisions-that-block-cross-vault-propagation; without ADR-024 ratifying as the 3rd instance, the variant stays at 2 of 3 and the graduation defers indefinitely.

## Decision

### Clause A — Streamline-primitive additive-only invariant

**Every airlock streamline primitive proposed via this ADR-024 contract MUST be additive (not breaking) relative to airlock v0.3.0**. Existing v0.3.0 consumers MUST continue to work without changes after primitive adoption by other consumers. Primitive proposals that would alter v0.3.0 semantics (e.g., changing field types, renaming required fields, modifying request lifecycle states) are REJECTED under this clause and routed to a III v0.4 minor-bump proposal instead.

**Acceptance test**: for any proposed primitive P_n, a v0.3.0-baseline consumer wrapper that does NOT adopt P_n MUST parse-check clean against any artifact authored by a v0.3-streamlined consumer wrapper that DOES adopt P_n. Validation discipline = documentation-grade per Campaign C R3 (no executable substrate enforcement; first executable runtime deferred to Platform.aDNA integration).

**Sub-clause A.1 — Initial primitive set**: the 9 primitives in `m36_streamline_design_spec.md` §2 are the v0.3-streamlined baseline at ratification. Future primitives MAY be appended to the contract via ADR-024 amendments (per amendment discipline below). The 9 primitives are organized into 3 clusters of 3:

| Cluster | Primitives | Target artifacts |
|---------|-----------|------------------|
| Operator-friction reduction | P1 Advisory-Mode Lifecycle decision tree + P7 Spec Version Notes section + P10 Minimal v0.3-era worked example | AIRLOCK.md template + spec §6 |
| Reply-memo discipline | P2 Consolidated Acceptance Checks block + P6 Sig field defaults disambiguation table + P8 Canonical rejection-reason enum with preflight-source mapping | impl-doc §6.1 + spec §4.3.1 + impl-doc §1.5 |
| Tooling skeletons | P3 Ledger polling reference skeleton + P4 Canonical-JSON test fixture + P9 `airlock_activation` audit event-type | impl-doc Appendix A + impl-doc Appendix B + impl-doc §6.4 + activation skill Step 6.5 |

**Sub-clause A.2 — Out-of-scope flagging**: candidate P5 (Membership-manifest schema consolidation) is flagged as LN-side out-of-scope at design spec §3 + AAR §3.4. Future primitive proposals that target LN.aDNA canonical artifacts MUST route via LN persona Venus rather than this ADR-024 contract.

### Clause B — Opt-in via spec version note

**Consumer wrappers adopt streamline primitives via opt-in spec version note** in their AIRLOCK.md activation file. Two valid version note values at ratification:
- `Spec version: v0.3.0` (baseline; no streamline primitives adopted; existing v0.3.0 conformance)
- `Spec version: v0.3-streamlined` (baseline + N of 9 primitives adopted; consumer indicates which primitives via Spec Version Notes section per P7)

**Rolling adoption pathway**: no forced cutover; each consumer wrapper opts-in at its own pace per v8 P6 propagation single-commit-per-patch cycle (or operator-discretionary earlier). The opt-in mechanism itself is one of the streamline primitives (P7 Spec Version Notes); consumers may indicate per-primitive adoption granularity (not all-or-nothing).

**Sub-clause B.1 — Reply-memo authors honor opt-in state**: reply-memo authors querying a consumer wrapper's contract surface check the AIRLOCK.md Spec Version Notes section to determine which primitives are live at that wrapper. Authors who reference a primitive that the target wrapper has NOT opted into MUST disambiguate (e.g., "this reply-memo uses P2 Consolidated Acceptance Checks block per ADR-024 Clause A; target wrapper has not opted into P2, so this memo also includes the legacy 3-subsection form for backward compatibility per Clause A invariant").

**Sub-clause B.2 — Per-primitive adoption indicator format**: AIRLOCK.md Spec Version Notes section uses the format `Streamline primitives adopted: [P1, P7, P10]` (comma-separated list of primitive identifiers from §2 of `m36_streamline_design_spec.md`). Adoption indicator MAY be empty `[]` for a `v0.3-streamlined` consumer that hasn't yet adopted any primitives (transitional state during sweep).

### Clause C — v8 P6 propagation channel

**Streamline primitive upstream-promotion to III canonical artifacts** + **`.adna/` template re-pin proposals** MUST propagate via the v8 P6 single-commit-per-patch ecosystem cycle. Specifically:

1. **III canonical artifacts** (spec + impl-doc + activation skill): upstream-promotion candidates land as proposals at v8 P6; III persona Argus owns acceptance/rejection per `III.aDNA` governance. ADR-024 primitives are recommendations, not directives — III owns the canonical surface.
2. **`.adna/how/airlock/AIRLOCK.md` template re-pin** (currently pinned at v0.2.0 per ADR-008; M3.6 design spec §4.3 proposes v0.3 re-pin with P1 + P7 sections embedded): upstream-promotion candidate lands at v8 P6 per ADR-008 amendment discipline; if accepted, ADR-008 receives amendment row (or supersession by future-ADR).
3. **Consumer-wrapper backlog placeholders**: 1 composite placeholder file `how/backlog/idea_v8_p6_propagation_airlock_streamlined.md` covers all 45 migration-matrix cells (5 wrappers × 9 primitives) per design spec §4.2. v8 P6 cycle reads this composite to drive per-wrapper sweeps.

**Sub-clause C.1 — Wrapper opt-in does not require upstream III acceptance**: per Clause A additive-only invariant, a consumer wrapper MAY adopt a primitive locally (e.g., add P7 Spec Version Notes section to its own AIRLOCK.md) without waiting for III canonical upstream-promotion. Local adoption is operator-discretionary per Standing Rule #1 (Project SO #1 phase-gates-are-human-gates).

**Sub-clause C.2 — III v0.4 minor-bump may absorb primitives as v0.4-baseline**: when III releases v0.4 (timeline TBD per III governance), primitives that prove out via consumer adoption at v0.3-streamlined MAY be absorbed into v0.4-baseline (i.e., the opt-in becomes always-on at v0.4). Absorption discipline: a primitive that ≥ 3 of 5 consumer wrappers have adopted at v0.3-streamlined is a candidate for v0.4-baseline absorption; ADR-024 amendment documents which primitives were absorbed when v0.4 ships.

**Sub-clause C.3 — Amendment discipline**: ADR-024 amendments append rows to a per-amendment table documenting (a) the amendment trigger (operator decision / III v0.4 absorption / new primitive proposal / sub-clause refinement); (b) the amendment date; (c) the amendment author (agent + operator). Amendments preserve the additive-only invariant per Clause A. Amendments do NOT supersede ADR-024 unless a follow-up ADR explicitly does so.

## Consequences

### Positive

- **Activation cost amortization**: 5 consumer wrappers (and N future consumers) consume the canonical streamline primitives rather than re-deriving discipline per wrapper per minor-bump sweep. Decision cost compounds DOWN not UP across wrappers.
- **Reply-memo author mistakes reduce**: consolidated rejection-reason enum + Acceptance Checks block + sig-field-defaults table give authors a single source of truth for the 11-enum + 3-preflight-gate + sig-mode-disambiguation friction surfaces.
- **Implementation drift prevention**: canonical-JSON test fixture (P4) lets implementers validate their algorithm against a known byte-identical output BEFORE v0.4 round-trip-testing landing. Caught-drift surface reduces.
- **Activation auditability**: `airlock_activation` audit event-type (P9) makes wrapper activation completeness visible across the lattice via JSONL log; modular III (M3.7) can auto-detect activation state without per-wrapper manual audit.
- **Cross-mission graduation**: 3rd Campaign SO #14 invocation graduates `skill_in_phase_adr_ratification.md` as canonical-for-load-bearing-decisions-that-block-cross-vault-propagation variant (≥ 3 instances rubric satisfied).
- **Federation-friendly forward path**: substrate-pluralism + per-purpose-slot pubkey + multi-substrate identity primitives (already in v0.3) get a streamlined reception layer that future federation participants benefit from.

### Negative

- **Per-primitive opt-in cognitive load**: consumer wrappers + reply-memo authors must now track which primitives are adopted at which wrapper; B.2 per-primitive adoption indicator format is unique-to-airlock (other contracts don't use this pattern yet). Mitigation: P7 Spec Version Notes section centralizes the indicator at one place per wrapper.
- **Documentation surface growth**: AIRLOCK.md template + spec + impl-doc + activation skill all gain new sections at adoption; first-time auditors see more text. Mitigation: P10 minimal v0.3-era worked example + P7 Spec Version Notes prioritize first-glance scannability.
- **ADR-008 re-pin proposal is hostage to v8 P6 timing**: AIRLOCK.md template stays at v0.2.0 per ADR-008 pin until v8 P6 single-commit-per-patch cycle lands ADR-008 amendment. Mitigation: consumer wrappers can adopt P1 + P7 locally per Sub-clause C.1 without waiting.
- **Per-amendment governance overhead**: Clause C.3 amendment discipline adds ADR maintenance surface; if many primitives churn, the per-amendment table grows. Mitigation: III v0.4 absorption (Sub-clause C.2) provides escape valve — primitives can graduate out of ADR-024 into III canonical and the amendment table stabilizes.

### Neutral

- **No new ADRs for individual primitives**: the 9 primitives all live under ADR-024's umbrella. Individual primitives that need their own ADR (e.g., if P4 canonical-JSON test fixture grows into a v0.4 round-trip-test contract) are routed to III canonical via Clause C, not via parallel aDNA.aDNA ADRs.
- **No new skills authored at M3.6**: skill update for `skill_airlock_activation.md` Step 6.5 (P9 event emission) lives as a design spec patch text per Clause C; III owns the skill canonical surface. M3.6 does NOT author new aDNA.aDNA-resident skills (mission stays at substrate-inversion-with-ADR variant per M3.4 sub-pattern, not substrate-inversion-with-skill).

## Alternatives considered

### Alternative 1 — No ADR; streamline as design-spec text only (Path B)

Considered at M3.6 S1 mid-checkpoint G2 AskUserQuestion. Operator chose Path A (this ADR). **Why not B**: without ADR-024, the additive-only invariant + opt-in mechanism + v8 P6 propagation channel would live as design-spec prose; consumer wrappers + reply-memo authors would have no canonical doctrinal anchor; cross-vault propagation would lack a predictable channel. Also forecloses 3rd Campaign SO #14 invocation graduation candidate.

### Alternative 2 — Multiple ADRs (Path C: ADR-024 invariant + ADR-025 opt-in mechanism + ADR-026 propagation channel)

Considered at M3.6 S1 mid-checkpoint G2. Operator chose Path A. **Why not C**: the 3 clauses (invariant + opt-in + propagation) compose cleanly as one ADR; splitting into 3 ADRs would fragment the canonical doctrine surface and increase coord overhead per consumer wrapper. The 3-clause ADR is a stronger pattern than 3 separate ADRs.

### Alternative 3 — Wait for III v0.4 to absorb streamline primitives as v0.4-baseline (defer ADR to v8 P5 or later)

Considered implicitly via the design-at-P3-propagation-at-P6 doctrine. **Why not deferred**: III v0.4 timeline is TBD per III governance; the 5 consumer wrappers benefit NOW from streamlined activation cost reduction + reply-memo discipline + tooling skeletons. Waiting indefinitely forecloses near-term ecosystem value. Sub-clause C.2 preserves the absorption escape valve for v0.4 if/when it lands.

## Amendments

(Future amendments per Clause C.3 amendment discipline land here as table rows.)

| Date | Trigger | Author | Amendment |
|------|---------|--------|-----------|
| — | — | — | (no amendments yet; first amendment expected at v8 P6 cycle close OR III v0.4 ship if it lands first) |
