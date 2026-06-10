---
type: adr
adr_number: 014
title: "Verification Handoff Topology — agent-side surface + operator-side surface + dispatch connector + agent-driven branch as canonical doctrine"
status: accepted   # ratified at M3.4 S3 close per Campaign SO #14 in-phase exception clause
created: 2026-05-24
updated: 2026-05-24
last_edited_by: agent_stanley
supersedes:
superseded_by:
campaign: campaign_adna_serious_tool_readiness
mission: mission_adna_str_p3_m34_verification_handoff_and_agent_inspection
objective: 7
decision_letter: A   # M3.4 D2=A operator-default ratified at S1 plan approval (Campaign SO #14 in-phase exception clause invocation)
ratification_phase: M34_S3_close_via_campaign_so_14_in_phase_exception_clause_load_bearing_for_m35_m37_consumers
ratified: 2026-05-24   # set at S3 close
ratified_session: session_stanley_20260524T044150Z_v8_m34_s3   # set at S3 close
deciders: [agent_stanley, operator_stanley]
informed: [berthier, argus, hermes, spock, mnemosyne, hygieia, asclepius, daedalus, iris, mentor]   # all personas with verification responsibilities across the lattice
related_decisions: [adr_016_per_mission_context_budget, adr_017_network_adna_pattern_category_and_namespace_ratification, adr_022_tool_use_logging]
related_specs: [m34_obj3_t7_design_spec, m34_obj4_t8_design_spec]
related_skills: [skill_verification_handoff, skill_obsidian_agent_inspect, skill_obsidian_integration_test]
tags: [adr, decision, adr_014, campaign_adna_serious_tool_readiness, m34, v8, p3, verification_handoff_topology, dispatch_decision_tree, consumer_mission_obligations, t7, architectural_primitive, campaign_so_14_in_phase_exception_clause_invoked, cross_vault_consumer_obligation, m3_5_consumer, m3_7_consumer, latticelabs_adna_consumer, latticenetwork_adna_consumer, siteforge_adna_consumer, rareharness_adna_consumer, wilhelmai_adna_consumer, first_behavioral_primitive_paired_with_operational_skill, rosetta]
---

# ADR-014: Verification Handoff Topology — agent-side surface + operator-side surface + dispatch connector + agent-driven branch as canonical doctrine

## Status

**Accepted** at M3.4 S3 close 2026-05-24 (`session_stanley_20260524T044150Z_v8_m34_s3`). Drafted at M3.4 S2 2026-05-24 (`session_stanley_20260524T035548Z_v8_m34_s2`) alongside T7 design spec + T7 skill (`skill_verification_handoff.md`) per Campaign SO #14 in-phase exception clause D2=A operator-ratified at M3.4 S1 plan approval. **Ratification confirmed at M3.4 S3 close** after T7 skill (`skill_verification_handoff.md`) + T8d skill (`skill_obsidian_agent_inspect.md`) shipped as operational primitives at S2, T7 + T8 design specs landed as proposed-patch substrate, and the S3 AAR (`missions/artifacts/aar_m34_verification_handoff_and_agent_inspection.md`) documents the load-bearing rationale — acceptance scorecard row 5 confirms ratification preconditions met. Campaign SO #14 in-phase exception clause invocation completes per D2=A.

### Ratification

Status transitions `draft → accepted` at M3.4 S3 close commit. The 3 clauses A topology-definition + B dispatch-decision-tree + C consumer-mission obligations are operational from this commit forward. **Downstream consumers** (M3.5 HOME-polish + M3.7 modular III for Obsidian + cross-vault propagation via federation_ref to LatticeLabs.aDNA / LatticeNetwork.aDNA / SiteForge.aDNA / RareHarness.aDNA / WilhelmAI.aDNA) may cite this ADR as canonical doctrine immediately. v8 P6 ecosystem propagation will land the upstream-promotion candidate (ADR-014 itself + the operational skill `skill_verification_handoff.md`) at `LatticeProtocol/aDNA` per the design-at-P3-propagation-at-P6 pattern.

### Elevation chain

1. **Forecast at campaign master** (line 310 of `campaign_adna_serious_tool_readiness.md` — ADR roadmap row: "ADR-014 forecast for verification-handoff topology (P3 M3.4)"; named-forecast slot reserved pre-M3.4 entry).
2. **Provisional at M3.3 close** (2026-05-23T05:29:27Z; M3.3 AAR PRIMARY load-bearing finding implicit substrate — cross-skill primitive composition pattern implicitly relies on verification-handoff topology that T7 codifies; M3.3 close routed ADR-014 forecast to M3.4 entry per Phase 3 table line 168).
3. **Drafted at M3.4 S2** (this session) — T7 design spec body cites this ADR; T7 skill body cites this ADR; T8 design spec body cites this ADR; T8d skill body cites this ADR.
4. **Ratification at M3.4 S3 close** (forecast; pending S3 session) — `status: draft → accepted` after T7 skill operational ratification + AAR documents the load-bearing rationale.

### Campaign SO #14 in-phase exception clause invocation

Campaign Standing Order #14 default = ADR ratification at phase exit. **In-phase exception clause** explicitly permits ratification mid-phase when load-bearing for in-phase consumers. ADR-014 invocation rationale:

- **M3.5 (HOME-polish mission) consumes T7 dispatch topology** for HOME-polish verification dispatch decisions (operator-side O1-O7 vs agent-driven O1-O5+O7 vs dispatched to per-vault personas)
- **M3.7 (modular III for Obsidian) consumes T7 + T8 substrate** for agent/operator surface split decisions per III module verification needs
- **Cross-vault propagation (LatticeLabs.aDNA / LatticeNetwork.aDNA / SiteForge.aDNA / RareHarness.aDNA / WilhelmAI.aDNA)** consumes ADR-014 doctrine when their own implementation-class missions ship + declare `verification_surface:` in mission frontmatter

All three consumer classes block on ADR-014 ratification if it defers to P3 → P4 phase-exit gate. D2=A invokes the exception clause + documents it here + in the mission spec body + in the S3 AAR.

**Precedent**: ADR-016 + ADR-017 + ADR-022 each ratified at the implementation mission that produced their substrate (not at phase exit). ADR-014 inherits this precedent and extends it to the first **behavioral-primitive-paired-with-operational-skill** architectural pattern in v8 (ADR-016 ratifies a measurement convention; ADR-017 ratifies a structural extension; ADR-022 ratifies a hook contract; ADR-014 ratifies a behavioral primitive **paired with a skill**, establishing the skill-+-ADR-pairing pattern for future architectural primitives).

## Context

The **verification-handoff topology** — the architectural primitive that decides who verifies what, when the agent dispatches, and what surfaces are agent-side vs operator-side — was discovered + proven during the LWX mini-campaign (closed 2026-05-13) but never codified as a reusable doctrine until M3.4. The topology has 4 components:

1. **Agent-side surface** — checks executable in agent context without operator intervention (vault loads, frontmatter parses, file present, REST API responds)
2. **Operator-side surface** — checks requiring operator visual judgment (theme aesthetics, UX-feel, "easy/fluid" qualitative read per north-star UX goal)
3. **Dispatch connector** — coord memo + partner-persona handoff when operator-side surface is needed at scale OR for partner-vaults; canonical exemplar: Berthier coord memo → Carly+Herb in lattice-labs absorbed 4 of 7 O1-O7 checks for node.aDNA at M-LWX-03 close
4. **Agent-driven branch** — agent executes operator-side-equivalent checks via REST API + MCP when infrastructure is wired (M3.4 T8d skill operationalizes this branch)

**Operational gap before ADR-014**: every M3.x implementation-class mission has re-invented the dispatch story (M3.1 + M3.2 + M3.3 each independently decided whether their deliverables needed operator-side verification; M3.3's T6 skill explicitly forecasts a `mode: agent_driven | hybrid | operator_side` profile field as a T8 forward-reference stub, implicitly assuming the topology — but the topology has no name). Each new partner-vault implementation-class mission re-invents the dispatch story OR copy-pastes from M3.x ad hoc. Three consequences:

1. **No canonical mission spec frontmatter contract**: consumer-missions can declare `verification_surface:` ad-hoc but no normative rule says they MUST; cross-vault propagation has no typed contract.
2. **No operational dispatch primitive**: the dispatch decision is operator-stated at each handoff; no skill consults a decision tree based on mission_class + risk_profile + check_set + cross_vault_impact; agents reading the campaign trail in 6 months would have to reconstruct the topology from operational evidence.
3. **No doctrinal anchor for partner-vault adoption**: LatticeLabs.aDNA / LatticeNetwork.aDNA / SiteForge.aDNA / etc. authoring their own implementation-class missions cannot cite a canonical reference; they invent per-vault dispatch logic OR copy-paste from M3.x.

ADR-014 fills these three gaps by ratifying three composing clauses (A topology-definition + B dispatch-decision-tree + C consumer-mission obligations) that codify the operational evidence at M-LWX-03 + M3.x as canonical doctrine.

## Decision

Three doctrine clauses ratify together. They compose; none conflicts with the others. All three apply at-current-runtime — `skill_verification_handoff.md` (M3.4 Obj 5) is the operational consumer; consumer-missions declaring `verification_surface:` in frontmatter become operational immediately upon ADR-014 ratification.

### Clause A — Topology Definition

The **verification-handoff topology** comprises 4 canonical surfaces:

1. **Agent-side surface** (`surface: agent`) — verification executes in agent context without operator intervention. Applicable when:
   - Mission deliverables are agent-reviewable artifacts (specs, ADRs, skill files; no runtime UX surface)
   - Risk profile is low (mission_class in {reconnaissance, closeout, planning})
   - No cross-vault impact

2. **Operator-side surface** (`surface: operator`) — verification requires operator visual judgment. Applicable when:
   - Mission deliverables are runtime UX surfaces (HOME.md polish, theme + accent, qualitative "easy/fluid" judgments)
   - Mission spec frontmatter declares `verification_check_set: T6` AND mission_class = implementation
   - No cross-vault impact

3. **Dispatch connector** (`surface: dispatch`) — verification dispatches to a partner-vault persona via coord memo. Applicable when:
   - Mission cross_vault_impact array is non-empty (partner-vault deliverables exist)
   - Operator bandwidth is constrained AND verification scale exceeds operator-side capacity (LWX dispatch model)
   - Mission deliverables span multiple vaults and per-vault verification is appropriate

4. **Agent-driven branch** (`surface: agent` with `mode: agent_driven`) — agent executes operator-side-equivalent checks via REST API + MCP infrastructure (M3.4 T8 wiring). Applicable when:
   - REST API + MCP infrastructure is wired (T8a + T8b + T8c per M3.4 T8 design spec)
   - Check-set covers mechanically-inspectable dimensions (O1+O2+O3+O5+O7 of the M3.3 T6 O1-O7 framework)
   - Operator visual checks (O6 external links via curl + theme aesthetics judgment) stay deferred-to-operator OR T6-curl

**Source evidence**: the 4 surfaces emerged operationally at M-LWX-02 + M-LWX-03 + M-VNAL-01 (LWX mini-campaign closed 2026-05-13). Berthier coord memo → Carly+Herb absorbed 4 of 7 O1-O7 checks for node.aDNA at M-LWX-03 close = canonical dispatch-connector exemplar. M3.3 T6 skill ratified the operator-side surface as a vault-agnostic check-set with `--profile` slot. M3.4 T8 wires the agent-driven branch via REST API + MCP. ADR-014 lifts the topology to canonical status; M3.4 T7 skill is the operational consumer.

### Clause B — Dispatch Decision Tree

Consumer-missions resolve their `verification_surface:` declaration (or omit it for auto-resolution) via the following decision tree, executed by `skill_verification_handoff.md`:

```
1. Read mission spec frontmatter; extract:
   - mission_class (required: reconnaissance | implementation | verification | integration | closeout | planning)
   - verification_surface (optional: agent | operator | dispatch | auto)
   - verification_check_set (optional: T6 | custom)
   - cross_vault_impact (optional: list of partner vaults; default [])
   - risk_profile (optional: low | medium | high; inferred if absent — see Step 3)

2. If verification_surface is declared in frontmatter → use declared (operator's explicit choice supersedes auto-resolution)

3. Else if verification_surface = auto OR undeclared → apply decision tree:
   3a. mission_class = implementation AND risk_profile = high → DISPATCH (operator + partner-persona via coord memo)
   3b. mission_class = implementation AND risk_profile = medium AND check_set = T6 → DISPATCH (operator only; no partner-persona)
   3c. mission_class = implementation AND risk_profile = low AND check_set = custom-none → AGENT (no handoff)
   3d. mission_class in {reconnaissance, closeout} → AGENT (no handoff)
   3e. mission_class = planning → AGENT (operator AAR review only)
   3f. cross_vault_impact != [] → DISPATCH (partner-persona via coord memo; supersedes risk_profile in classes 3a-3c)
   3g. mission_class in {verification, integration} → DISPATCH (default; consumer-mission overrides via explicit declaration)
   3h. (fallthrough) → AGENT with WARN (consumer-mission SHOULD declare verification_surface per Clause C)

4. Risk profile inference (when not declared in frontmatter):
   - low: deliverables are agent-reviewable artifacts (specs, docs); no runtime UX surface
   - medium: deliverables are operational primitives (skills, hooks, config) with runtime impact but bounded blast radius
   - high: deliverables affect cross-vault federation OR runtime UX OR data persistence at scale

5. Verdict + handoff coordinates:
   - PASS: surface resolved; check-set executed; all checks pass (or no checks required for agent surface)
   - FAIL: surface resolved; check-set executed; at least one check failed
   - DISPATCHED: surface = dispatch; coord memo template emitted at <vault>/who/coordination/coord_<date>_t7_dispatch_<mission_id>.md
   - PREFLIGHT_FAIL: mission spec or ADR-014 reference missing; cross-skill dependency unmet
   - AUTO: resolved via decision tree; sub-verdict (AGENT|OPERATOR|DISPATCH) appended; warn if mission spec lacks declaration
```

**Implementation**: `skill_verification_handoff.md` body §Dispatch decision tree implements this Clause B verbatim. See [[../../how/skills/skill_verification_handoff.md|skill_verification_handoff.md]] §Implementation for the canonical bash sketch.

### Clause C — Consumer-Mission Obligations

Every consumer-mission spec MUST declare `verification_surface:` in frontmatter per the following normative rules:

1. **Implementation-class missions** MUST declare `verification_surface: <agent | operator | dispatch | auto>` and `verification_check_set: <T6 | custom>` in frontmatter. Declaration is validated against Clause B decision tree at mission entry (skill invocation OR human review).

2. **Cross-vault missions** (those with non-empty `cross_vault_impact:`) MUST consult `skill_verification_handoff.md` before assigning dispatch; coord memo template at `<vault>/who/coordination/coord_<date>_t7_dispatch_<mission_id>.md` is the canonical handoff artifact.

3. **M4.x+ installer-class missions** MUST plan their verification phase per Clause B (installer missions are implementation-class with high risk_profile per Campaign SO #16 doctrine; default surface = DISPATCH).

4. **Existing missions migrate at next mission-spec-touch cadence**: no retroactive sweep required. Missions touched after ADR-014 ratification add the `verification_surface:` field; missions untouched continue without (lint warning at skill invocation but no failure).

5. **Reconnaissance + closeout + planning missions** MAY omit the declaration; default = AGENT per Clause B 3d/3e.

6. **Verification + integration missions** MAY omit the declaration but SHOULD declare explicitly to bypass Clause B 3g default dispatch.

7. **Partner-vault missions** declare their own `verification_surface:` per per-vault conventions; ADR-014 doctrine applies via wikilink reference + `skill_verification_handoff.md` invocation (no per-vault ADR copy required; the doctrine federates by reference).

8. **Consumer-mission AAR** SHOULD document the actual surface used (post-execution) vs the declared surface (pre-execution); drift > 0 cases trigger retrospective per Project SO #11 + Campaign SO #11 budget-drift retrospective trigger pattern.

## Consequences

### Positive

1. **Cross-vault propagation has canonical reference**: LatticeLabs.aDNA / LatticeNetwork.aDNA / SiteForge.aDNA / RareHarness.aDNA / WilhelmAI.aDNA / etc. cite ADR-014 + invoke `skill_verification_handoff.md` rather than re-inventing dispatch logic per-vault.
2. **Consumer-mission frontmatter contract is typed**: `verification_surface:` is a declarative field with canonical reference; future agents reading the campaign trail can resolve dispatch without reconstruction.
3. **Operational primitive paired with doctrinal anchor**: skill-+-ADR-pairing pattern establishes the first behavioral-primitive doctrine in v8; future architectural primitives (context-budget two-metric reporting, campaign-archive-on-close, cross-skill primitive composition itself) may follow the same pattern.
4. **M3.5 + M3.7 in-phase consumers unblocked**: ratification at M3.4 S3 close (per SO #14 in-phase exception clause) means M3.5 + M3.7 author their own specs with ADR-014 doctrine in hand rather than waiting for P3 → P4 phase-exit gate.
5. **Validation-as-dispatched-campaign pattern reinforced**: `campaign_validation_node_adna_lwx_outputs` (lattice-labs; Berthier + Carly + Herb) consumes T7 skill as the canonical dispatch primitive; ad-hoc per-mission dispatch prose replaced with single reusable invocation.
6. **Cross-skill primitive composition pattern graduates at M3.4 close**: T7 skill DELEGATES to T6 (2nd use instance) + T8d skill DELEGATES to T6+T7+M3.2 (3rd use instance via TRIPLE DELEGATION) = 3 of 3 use instances; `skill_cross_skill_primitive_composition.md` graduates at S3 AAR.

### Negative

1. **Consumer-mission frontmatter expansion**: implementation-class missions gain a new MANDATORY field (`verification_surface:`); migration cost = 1 field per mission spec at next mission-spec-touch cadence. Mitigation: existing missions don't break (Clause C §4); lint warning is non-fatal.
2. **Skill + ADR pairing doubles the artifact count for architectural primitives**: future primitives that follow this pattern produce 2 artifacts (skill + ADR) instead of 1. Mitigation: the pairing IS the value — operational consumer + doctrinal anchor are co-equal and both are needed.
3. **Cross-vault propagation lag**: ADR-014 is canonical at aDNA.aDNA from M3.4 S3 close; partner-vaults adopt at their next implementation-class mission cycle (could be weeks or months per partner). Mitigation: federation discipline — ADR doctrine federates by wikilink reference; no per-vault ADR copy required.
4. **In-phase ratification breaches default SO #14 discipline**: ratifying mid-phase is the exception, not the rule. Mitigation: D2=A explicitly invokes the exception clause; rationale documented here + in mission spec + in S3 AAR. Future ADRs follow default phase-exit ratification unless load-bearing for in-phase consumers (same exception clause re-invokable on a case-by-case basis).

### Cross-vault propagation

ADR-014 doctrine federates by **reference**, not by copy. Partner-vaults cite via:

```markdown
**Verification surface**: per [[../../aDNA.aDNA/what/decisions/adr_014_verification_handoff_topology.md|ADR-014]] Clause C consumer-mission obligation.
```

Cross-vault `skill_verification_handoff.md` invocations work without partner-vault adopting the skill locally — operators run from aDNA.aDNA with `--vault <partner-vault-path>` slot. Per-vault adoption (cp skill into partner vault's `how/skills/`) is operator-discretionary at v8 P6 entry or later cross-vault propagation cycles.

## Alternatives Considered

### Alternative 1: Defer ADR-014 to P3 → P4 phase-exit gate (rejected)

Default Campaign SO #14 discipline. Rejected because M3.5 + M3.7 in-phase consumers + cross-vault propagation cannot wait for phase exit; deferral would block 3 known consumer classes.

### Alternative 2: Skill alone without ADR (rejected — T7 spec Option 2)

Author `skill_verification_handoff.md` without paired ADR-014. Rejected because operational primitive without doctrinal anchor fails the dual-audience test (Project SO #7) — partner-vault adopters need the doctrine to anchor their `verification_surface:` declaration as a typed contract. Skill alone provides invocation surface; ADR alone provides canonical status; both are needed.

### Alternative 3: ADR alone without skill (rejected — T7 spec Option 3)

Author ADR-014 doctrine without paired skill. Rejected because doctrine without operational consumer is too thin — consumer-mission authors would have to reconstruct the dispatch logic per-invocation. The skill IS the consumer surface; the ADR IS the canonical reference; both compose.

### Alternative 4: Single ADR with multiple inline clauses + embedded skill body (rejected)

Combine the ADR + skill into a single document. Rejected because it confuses the operator surface — `what/decisions/` is for doctrinal references; `how/skills/` is for operational primitives. Conflating them breaks the WHAT/HOW triad-leg discipline established at project level (see `aDNA.aDNA/CLAUDE.md` Project Map).

### Alternative 5: Embed verification surface declaration in mission spec template + skip ADR (rejected — T7 spec Option 5)

Modify `template_mission_spec.md` to require `verification_surface:` field; provide guidance prose in the template; no skill or ADR. Rejected — declarative-only without executable consumer; mission authors would declare `verification_surface: dispatch` without a tool to consult on whether dispatch is appropriate for their mission's risk profile + check-set + partner-vault availability. Template prose isn't a primitive; it's reference material. ADR-014 + skill pairing IS the primitive; template update is a downstream v8 P6 cycle item once ADR-014 ratifies.

## References

### Source artifacts (substrate)

- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m34_obj3_t7_design_spec.md|T7 design spec]] — substrate for this ADR's body content; ratified by this ADR at S3 close
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m34_obj4_t8_design_spec.md|T8 design spec]] — sibling design spec (T8 covers the agent-driven branch infrastructure that Clause A §4 references)
- [[../../how/skills/skill_verification_handoff.md|T7 skill]] — operational primitive cited at ratification (skill body §Implementation implements Clause B decision tree verbatim)
- [[../../how/skills/skill_obsidian_agent_inspect.md|T8d skill]] — operational primitive for Clause A §4 (`mode: agent_driven` branch)
- [[../../how/skills/skill_obsidian_integration_test.md|M3.3 T6 skill]] — operational primitive for Clause A §2 (operator-side surface via O1-O7 check-set)
- [[../../how/campaigns/campaign_lattice_workspace_ux/missions/artifacts/aar_campaign_lattice_workspace_ux.md|LWX mini-campaign AAR]] — verification-handoff topology origin (M-LWX-02 → M-LWX-03 → M-VNAL-01 dispatch model; canonical exemplar for Clause A §3 dispatch connector)

### Doctrinal precedents

- [[adr_016_per_mission_context_budget.md|ADR-016]] — per-mission context budget (precedent: ratification-at-implementation-mission-close pattern; ADR-014 inherits)
- [[adr_017_network_adna_pattern_category_and_namespace_ratification.md|ADR-017]] — Network.aDNA pattern category (precedent: ratification-at-implementation-mission-close pattern)
- [[adr_022_tool_use_logging.md|ADR-022]] — PostToolUse hook tool-use logging (precedent: behavioral-primitive ADR; ADR-014 extends to dispatch-primitive ADR + first **skill-+-ADR-pairing** instance)

### Governance references

- [[../../how/campaigns/campaign_adna_serious_tool_readiness/campaign_adna_serious_tool_readiness.md|Campaign master]] — ADR roadmap line 310 (ADR-014 forecast slot)
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/CLAUDE.md|Campaign CLAUDE.md]] — Standing Order #14 in-phase exception clause + Standing Order #16 v7.0 tag dependency hard
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p3_m34_verification_handoff_and_agent_inspection.md|M3.4 mission spec]] — parent mission; D2=A operator-ratification recorded at S1 plan ratification 2026-05-24
- [[../../CLAUDE.md|Project CLAUDE.md]] — Project Standing Orders + persona (Rosetta)
- [[../../how/campaigns/campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md|Absorbed campaign master]] — Track 7 substrate (line 64-66 verbatim)
- [[../../how/backlog/backlog_F_S2_8_agent_driven_obsidian_inspection.md|F-S2-8 backlog file]] — agent-driven inspection substrate (T8 source)

### Cross-vault future consumers (informed personas)

- LatticeLabs.aDNA (Berthier) — implementation-class missions across Phase 4+
- LatticeNetwork.aDNA (Venus) — implementation-class missions across all phases
- SiteForge.aDNA (SiteForge persona) — implementation-class missions when cross-vault propagation cycles
- RareHarness.aDNA (Asclepius) — implementation-class missions in P2 + P3 cohorts
- WilhelmAI.aDNA (Hygieia) — implementation-class missions in P0 + future phases
- ScienceStanley.aDNA (Stanley brand persona) — content-generation missions with operator visual verification needs
- CanvasForge.aDNA (Hermes) — canvas-substrate missions with operator UX-feel verification
- VideoForge.aDNA (Iris) — video-production missions with multi-platform output verification
- ContextCommons.aDNA — community-driven missions with multi-stakeholder verification
- All other 19+ partner-vaults per `~/aDNA/CLAUDE.md` Project Discovery table

### Status transition path

```diff
@@ -7,1 +7,1 @@ at M3.4 S3 close
-status: draft
+status: accepted
@@ -10,1 +10,1 @@
-updated: 2026-05-24
+updated: 2026-05-25   # or actual S3 close date
@@ ratified frontmatter at S3 close
+ratified: 2026-05-25
+ratified_session: session_stanley_<S3_timestamp>_v8_m34_s3
```

Fires at M3.4 S3 close after T7 skill has landed as operational primitive (Obj 5 already at S2; ratified by smoke test in S3 AAR scorecard) + S3 AAR cites the ratification + campaign master amendments-table records the status transition + STATE.md Op 3 archive-on-close 15th canonical instance refresh.

## Self-reference note

This ADR ratifies the verification-handoff topology via the very skill it produces — `skill_verification_handoff.md` IS the doctrine that ADR-014 ratifies. Mutual self-reference: invoking the skill consults the ADR (Clause B for the decision tree); the ADR's Clause C names this skill as the canonical dispatch primitive. The recursive coupling is intentional — the topology and its operational consumer are co-equal artifacts (Patch A + Patch B in M3.4 T7 design spec §5).

**First behavioral-primitive-paired-with-operational-skill ADR in v8.** Future architectural primitives (context-budget two-metric reporting, campaign-archive-on-close, cross-skill primitive composition itself) may follow the same skill-+-ADR-pairing pattern. The pairing IS the value.

**Standing Order #8 self-reference — 16th tactical invocation candidate in v8** (jointly with T7 skill at Obj 5). The ADR codifies the topology that the very mission producing it (M3.4) uses to verify its own deliverables. Recursive self-application: the M3.4 mission spec itself may declare `verification_surface:` in its frontmatter post-ratification (operator-discretionary; M3.4 acceptance criteria don't require it but consumer-mission authors may add it for audit consistency).
