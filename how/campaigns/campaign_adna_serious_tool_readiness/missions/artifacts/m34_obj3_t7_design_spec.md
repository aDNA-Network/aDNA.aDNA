---
type: design_spec
artifact_type: design_spec
spec_class: proposed_patch
mission_id: mission_adna_str_p3_m34_verification_handoff_and_agent_inspection
campaign: campaign_adna_serious_tool_readiness
phase: 3
mission_number: 3.4
obj: 3
track: T7
finding_id: [F-S2-3]
status: proposed   # design at P3; ratification + landing deferred to v8 P6 for skill upstream-promotion; ADR-014 ratifies at S3 close per Campaign SO #14 in-phase exception clause
upstream_target: ".adna/ (LatticeProtocol/aDNA@27e6395; v7.0 frozen) + aDNA.aDNA/how/skills/ (local landing at Obj 5 this same mission) + aDNA.aDNA/what/decisions/ (ADR-014 draft at Obj 7 this same mission)"
upstream_state_at_authoring: "v7.0 frozen at 27e6395 (post-M06 S2 pre-tag commit); post-M3.2-close addendum at 5861133 operator-override NOT precedent"
created: 2026-05-24
updated: 2026-05-24
last_edited_by: agent_stanley
tags: [design_spec, proposed_patch, m3_4, obj_3, t7, verification_handoff, dispatch_topology, agent_side_surface, operator_side_surface, dispatch_connector, agent_driven_branch, cross_skill_delegation, six_section_structure_6th_canonical_instance, t8_forward_reference_stub_2nd_use_instance, v8_p6_propagation_queue, adr_014_in_phase_exception_clause_invoked, rosetta, standing_order_8_16th_tactical_invocation_candidate, m245_routing_layer_3rd_behavioral_test]
---

# T7 Design Spec — Verification handoff topology codification (`skill_verification_handoff.md` + ADR-014)

> **What this is**: a proposed-patch artifact for **one NEW skill** at `aDNA.aDNA/how/skills/skill_verification_handoff.md` (local landing at M3.4 Obj 5 this same mission; v8 P6 candidate for upstream promotion to `.adna/how/skills/`) and **one NEW ADR** at `aDNA.aDNA/what/decisions/adr_014_verification_handoff_topology.md` (draft at M3.4 Obj 7 this same session per D2=A; ratification at S3 close per Campaign SO #14 in-phase exception clause). The fix codifies the **verification-handoff topology** discovered + proven at LWX M-LWX-03 + M-VNAL-01 but never given canonical status as a reusable doctrine.
>
> **Design-at-P3, propagation-at-P6**: the NEW skill ships LOCALLY at this same M3.4 S2 session (Obj 5 — operational consumer of this design spec; mirrors M3.2 D2 + M3.3 D-canon precedent). The NEW ADR drafts at S2 + ratifies at S3 close (per D2=A) — Campaign SO #14 in-phase exception clause invoked because ADR-014 is load-bearing for M3.5 (HOME-polish mission's dispatch criteria) + M3.7 (modular-III mission's agent/operator surface split) + cross-vault propagation (LatticeLabs.aDNA / LatticeNetwork.aDNA / SiteForge.aDNA all consume the topology when their own implementation-class missions ship). v8 P6 owns the skill upstream-promotion candidacy + ADR-014 ecosystem propagation.
>
> **Cross-skill primitive composition (2nd use instance — graduates at M3.4 close)**: T7 skill DELEGATES the binary-presence check primitive to M3.3's `skill_obsidian_integration_test.md` (T6) when the dispatch resolves to operator-side verification with O1-O7 check-set. This is the **2nd explicit cross-skill primitive consumption across the M3.x cohort** (after M3.3 T6 → M3.2 skill at depth 1); the precedent ratified at M3.3 PRIMARY load-bearing finding now extends to M3.4 T7+T8d sibling consumers, advancing the graduation candidate `skill_cross_skill_primitive_composition.md` from 1 → 2 of 3 use instances (Obj 6 T8d skill provides the 3rd; graduates at M3.4 close).
>
> **Hard constraint**: this spec does NOT mutate any file under `/Users/stanley/lattice/.adna/`. All patch text is literal content for v8 P6 (skill upstream-promotion + ADR-014 ecosystem cycle) and Obj 5 + Obj 7 (the new skill + new ADR) to apply.
>
> **Standing Order #8 self-reference** — **16th tactical invocation candidate** in v8 (after 15 prior in P2 + M3.1 + M3.2 + M3.3). The deliverable skill at Obj 5 is the **3rd behavioral test** of M2.4.5-hardened `how/skills/AGENTS.md` routing layer for new-skill discoverability (after M3.2's `skill_obsidian_canonicalize.md` + M3.3's `skill_obsidian_integration_test.md`); the deliverable ADR-014 codifies the verification-handoff topology via the very skill it produces (recursive self-reference).

## 1. Finding statement (F-S2-3)

The verification-handoff topology — **the architectural primitive that decides who verifies what, when the agent dispatches, and what surfaces are agent-side vs operator-side** — was discovered + proven during the LWX mini-campaign (closed 2026-05-13) but never codified as a reusable doctrine. Each subsequent verification handoff has invented its own dispatch story; agents reading the campaign trail in 6 months won't know whether to invent or to consult.

> **F-S2-3 (architectural primitive without canonical status; load-bearing)**: M-LWX-02 → M-LWX-03 → M-VNAL-01 produced the topology operationally — agent-side smoke (vault loads, frontmatter parses, file present), operator-side runtime (UI launches, theme applies, wikilinks navigate), and the dispatch connector (Berthier coord memo → Carly+Herb in lattice-labs absorbed 4 of 7 O1-O7 checks for node.aDNA at M-LWX-03 close). The dispatch decision itself was operator-stated at each handoff: "this check requires a running Obsidian + visual judgment → dispatch to operator with a partner persona." But the decision logic never landed as a skill or ADR. Every M3.x implementation-class mission has re-invented the dispatch story (M3.1 + M3.2 + M3.3 each independently decided whether their deliverables needed operator-side verification; M3.3's T6 skill explicitly forecasts a `mode: agent_driven | hybrid | operator_side` profile field as a T8 forward-reference stub, implicitly assuming the topology — but the topology has no name).
>
> — [[../../../campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md|`campaign_obsidian_deployment_stabilization.md`]] Track 7 line 64-66 (absorbed-campaign verbatim source) + [[../../../campaign_lattice_workspace_ux/missions/artifacts/aar_campaign_lattice_workspace_ux.md|LWX mini-campaign AAR]] (verification-handoff topology load-bearing finding source)

**Verification status at M3.4 S1 recon (2026-05-24T01:19:08Z; inherited from M3.1+M3.2+M3.3 substrate)**: confirmed via static analysis — `aDNA.aDNA/how/skills/` contains 18 skill files at M3.3 close baseline + 1 added at M3.4 S2 forecast (this skill = T7); none of the existing 18 codifies the dispatch decision tree. `aDNA.aDNA/what/decisions/` contains 16 ADRs at M3.3 close (ADR-001 through ADR-013 + ADR-016 + ADR-017 + ADR-022; ADR-014 + ADR-015 are reserved-but-unauthored slots per ADR-roadmap forecast at campaign master line 310); ADR-014 was forecast for P3/M3.4 — exactly this mission. The forecast lands here.

**Why this is the right scope for T7**: the topology IS the architectural primitive that unlocks cross-vault implementation-class missions across the lattice (LatticeLabs.aDNA Phase 4+ + LatticeNetwork.aDNA Phase 4+ + RareHarness.aDNA + WilhelmAI.aDNA + SiteForge.aDNA all need the topology when they author their own implementation-class missions and decide which deliverables route to operator-side validation). Until M3.4 codifies it, each vault's implementation-class missions re-invent the dispatch story OR copy-paste from M3.x ad hoc. Once T7 ships as a skill + ADR-014 ratifies it as doctrine, every consumer-mission spec frontmatter can declare `verification_surface: agent | operator | dispatched` as a typed field with canonical reference; every cross-vault mission can `bash <vault>/how/skills/skill_verification_handoff.md --mission <id>` and get a typed dispatch verdict.

## 2. Root cause

Three layered causes explain why the verification-handoff topology does not yet have canonical status:

1. **LWX mini-campaign was scope-bounded to a single integration test.** M-LWX-02 → M-LWX-03 → M-VNAL-01 (~5 sessions over 2 days) produced the **operational** dispatch — Berthier coord memo + Carly+Herb partner-vault absorption of 4 of 7 O1-O7 checks. The mini-campaign was scoped to **prove the loop works**, not to codify the topology as reusable doctrine. M-LWX-03 closed 2026-05-13 with the dispatch result documented but the topology unrecognized as a primitive worth naming. The AAR's load-bearing-finding routing flagged the topology for "successor campaign work" but the successor (`campaign_obsidian_deployment_stabilization`) absorbed it as Track 7 in the planned-but-not-opened backlog.

2. **The absorbing campaign sat in the backlog for 11 days while M3.1/M3.2/M3.3 did upstream work.** v8 `campaign_adna_serious_tool_readiness` absorbed `campaign_obsidian_deployment_stabilization` 2026-05-17. Tracks T1-T6 fit naturally into M3.1+M3.2+M3.3 (each is a 2-3 session mission producing 1-2 design specs + optional skill). Track T7 (architectural primitive) and Track T8 (5-sub-track agent-driven inspection) waited until M3.4 because they require T6 (M3.3) to be in place — T7 dispatches between agent-side and operator-side surfaces and needs O1-O7 as the operator-side check-set; T8 introduces the agent-side surface that T7's `agent_driven` branch routes to. M3.4 is the natural confluence; T7 + T8 together close the dispatch story.

3. **No skill template or ADR exists for "architectural-primitive codification as both operational skill AND doctrinal ADR."** ADR-016 (per-mission context budget) is the closest precedent — it ratifies a measurement convention; it's not a dispatch primitive. ADR-017 (Network.aDNA pattern category) ratifies a vault-category extension; it's structural, not behavioral. ADR-022 (PostToolUse hook tool-use logging) ratifies a hook contract; it's a side-channel telemetry primitive. ADR-014 (verification-handoff topology) is the **first behavioral-primitive-as-ADR** in v8 — it ratifies a decision tree that operates at mission spec frontmatter time + at session-time dispatch time. The skill `skill_verification_handoff.md` is the operational consumer; the ADR is the doctrinal wrapper that gives the topology canonical status across vaults. The pairing — skill + ADR — is itself the architectural primitive M3.4 establishes. M3.4's S2 mix (spec + skill + ADR) is the canonical 3-session implementation-class shape's 9th instance candidate that absorbs ADR drafts cleanly alongside specs+skills — substrate-inversion-with-ADR variant of the substrate-inversion narrative.

The compounding produces today's state: every implementation-class mission re-invents dispatch decisions; cross-vault propagation has no canonical reference; agents reading the campaign trail in 6 months would have to reconstruct the topology from operational evidence rather than reading a single skill + ADR. T7 closes this by lifting the topology to (a) a vault-agnostic skill with `--mission <mission_id>` + `--surface <agent | operator | dispatch>` + `--check-set <T6 | custom>` slots that any consumer-mission invokes, and (b) an ADR that establishes the topology as the canonical decision framework for verification surfaces across the lattice.

## 3. Option matrix

| # | Option | Diff surface | Operator surface | Behavior change | Failure modes / Trade-offs |
|---|---|---|---|---|---|
| 1 | **NEW skill at `aDNA.aDNA/how/skills/skill_verification_handoff.md` + NEW ADR-014 at `aDNA.aDNA/what/decisions/adr_014_verification_handoff_topology.md`** (RECOMMENDED — pairs operational consumer surface with doctrinal canonical status). Skill provides dispatch decision tree + `--surface` slot + DELEGATES binary-presence to M3.3 T6 skill for operator-side O1-O7 check-set. ADR-014 ratifies the topology as canonical: 3 clauses A topology-definition + B dispatch-decision-tree + C consumer-mission obligations. | NEW skill file ~600-800 LOC markdown + NEW ADR-014 file ~250-350 LOC markdown | Two new artifacts; skill is operator-facing CLI; ADR is doctrinal reference | Implementation-class missions across all vaults gain typed `verification_surface:` frontmatter field + canonical dispatch CLI; cross-vault propagation has single reference | Adds 1 cross-skill dependency (T6 skill for O1-O7 check-set); requires Campaign SO #14 in-phase exception clause invocation for ADR-014 ratification at S3 close. Mitigation: SO #14 exception clause explicitly permits ratification mid-phase when load-bearing for in-phase consumers — D2=A invokes this. |
| 2 | **NEW skill only without ADR** (rejected). Same skill structure as Option 1; ADR-014 deferred to phase exit OR not authored. | NEW skill file only ~600-800 LOC | One new artifact; skill operator-facing | Implementation-class missions consume skill for dispatch; no canonical doctrine for cross-vault propagation | **Rejected**: load-bearing for M3.5 (HOME-polish dispatch criteria) + M3.7 (modular-III agent/operator split) + cross-vault propagation (LatticeLabs.aDNA / LatticeNetwork.aDNA / SiteForge.aDNA need ADR-014 status to anchor their own implementation-class mission specs). Skill alone provides the operational surface but lacks the doctrinal anchor — partner-vault authors would invoke the skill without knowing they should declare `verification_surface:` in their mission frontmatter; the doctrine is what makes the field a typed contract rather than an ad-hoc string. **Phase-exit deferral would push ADR-014 ratification to P3 → P4 gate, blocking M3.5/M3.7 from citing it.** |
| 3 | **NEW ADR-014 only without skill** (rejected). Topology codified as ADR doctrine; no operational CLI consumer. | NEW ADR-014 only ~300-400 LOC | One new doctrinal artifact; no operator-facing CLI | Consumer-missions consult ADR doctrine; no automated dispatch invocation | **Rejected**: operational consumers need the skill API. ADR alone is too thin — partner-vault implementation-class missions would have to read ADR-014's 3 clauses + reconstruct the dispatch logic per-invocation. The 6-month-out-agent who reads the campaign trail would find the doctrine but not the executable primitive. **Doctrine without an operational consumer fails the dual-audience test** (Project SO #7) — developers need the skill API, newcomers need the prose; ADR alone serves neither audience optimally. M3.3 T6 + skill pairing is the precedent; T7 ADR-014 + skill pairing extends it. |
| 4 | **Split into agent-side skill + operator-side skill** (rejected). Two skills: one for agent-side smoke + one for operator-side runtime; dispatch logic distributed across both. | NEW: 2 skill files ~400+400 LOC + ADR-014 | Two operator-facing skills; one for each surface | Agent and operator have separate invocation entrypoints | **Rejected**: same topology; two skills double the discoverability surface (which one does the agent invoke first? where does the dispatch decision live?). LWX dispatch model treats both surfaces as ONE decision tree with branches — the skill IS the tree; splitting violates the architectural lesson the LWX dispatch proved (single dispatch decision; two execution branches). Per `how/skills/AGENTS.md` routing layer (M2.4.5-hardened), 2 skills for one concept dilutes the routing layer's signal. **Single skill with `--surface` slot is the right shape.** |
| 5 | **Embed dispatch logic in mission spec template + skip skill** (rejected). Modify `template_mission_spec.md` to require `verification_surface:` field; provide guidance prose in the template; no skill or ADR. | Template modification ~+50 LOC | No new operator-facing skill | Implementation-class missions declare surface in frontmatter; no executable dispatch | **Rejected**: declarative-only without executable consumer. Mission authors would declare `verification_surface: dispatch` without a tool to consult on whether dispatch is appropriate for their mission's risk profile + check-set + partner-vault availability. Template prose isn't a primitive; it's reference material. **Template can still cite ADR-014** as the canonical reference — Option 1 doesn't preclude this; template update can be queued as a v8 P6 cycle item once ADR-014 is ratified. |

## 4. Recommendation

**Option 1 — NEW skill + NEW ADR-014 paired** — is recommended, matching the absorbed-source verbatim at [[../../../campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md|`campaign_obsidian_deployment_stabilization.md`]] line 64-66 ("*Author `skill_verification_handoff.md` that codifies the M-LWX-02 → M-LWX-03 → M-VNAL-01 dispatch model as a reusable verification topology. Defines agent-side surface + operator-side surface + dispatch connector vs agent-driven branch. **This is the architectural primitive codified at M-LWX-03 close**; T7 makes it a documented skill.*") and Campaign SO #16 ("v7.0 tag dependency hard" — implies T7 codification at M3.4 is part of the v8 P3 phase-exit bricks for the agent-autonomy prong; ADR-014 is the canonical doctrine that satisfies SO #16's documented-skill requirement).

### Rationale

- **Skill + ADR pairing is the right primitive shape for architectural decisions that span both operational invocation AND doctrinal status.** The skill is the operational consumer surface (consumer-missions invoke it to dispatch); the ADR is the doctrine wrapper that gives the topology canonical status across vaults. M3.3 T6 (operational skill alone, no ADR) was the precedent for operational-primitive-only; ADR-016/-017/-022 (doctrinal ADRs without paired skills) were the precedent for doctrine-alone. T7 + ADR-014 is the FIRST instance of operational-primitive-paired-with-doctrinal-ADR in v8 — establishing the pattern for future architectural primitives (e.g., future ADR for "context-budget two-metric reporting" could pair with a `skill_context_budget_report.md`; future ADR for "campaign-archive-on-close" could pair with `skill_campaign_close_archive.md` already at 14 canonical instances).
- **Campaign SO #14 in-phase exception clause invocation is load-bearing-justified.** SO #14 default = ADR ratification at phase exit; in-phase exception clause permits ratification mid-phase when load-bearing for in-phase consumers. M3.5 (HOME polish) consumes T7 dispatch topology for HOME-polish verification dispatch decisions; M3.7 (modular III for Obsidian) consumes T7 + T8 for agent/operator surface split. Both M3.5 + M3.7 sit in P3 and would block on ADR-014 if it deferred to P3 → P4 gate. D2=A invokes the exception clause + documents it in mission spec + AAR + ADR-014 body. Mirrors ADR-016/-017/-022 ratification-at-implementation-mission-close pattern (each ADR ratified at the implementation mission that produced its substrate, not at phase exit).
- **Cross-skill primitive composition (2nd use instance — graduates at M3.4 close)**: T7 skill DELEGATES the binary-presence + O1-O7 check-set primitive to M3.3's `skill_obsidian_integration_test.md` (T6) when dispatch resolves to operator-side OR dispatched surface with O1-O7 check-set. This is the 2nd explicit cross-skill primitive consumption (after M3.3 T6 → M3.2 skill at depth 1). The pattern: T7 skill → T6 skill → M3.2 skill → T3 `setup.sh --verify` → Obsidian state. Chain depth 4. Combined with Obj 6 T8d skill (which adds T8d → T6 + T8d → T7 + T8d → M3.2 at depth 3), the cross-skill primitive composition pattern graduates from 1 → 3 of 3 use instances at M3.4 close.
- **Vault-agnostic via `--mission <mission_id>` + `--surface <agent | operator | dispatch>` + `--check-set <T6 | custom>` slots mirrors M3.3 T6 precedent.** T6 skill uses `--vault <path>` + `--profile <profile>`; T7 skill uses `--mission <mission_id>` + `--surface` + `--check-set`. Both follow the M3.x slot-based vault-agnostic invocation convention. Any aDNA vault's implementation-class mission can invoke T7's skill against its own mission spec.
- **T8 forward-reference stub (M3.5 + M3.7 stubs in spec body + skill body)** — D4 inheritance from M3.3 mandates stub-only references. T7 design spec body §5 includes `## Forward integration with M3.5` + `## Forward integration with M3.7` stub paragraphs; T7 skill at Obj 5 includes both stubs in its body. M3.5 + M3.7 consumer-missions cite this spec + this skill at their own design-spec authoring; no implementation by T7 of M3.5/M3.7-specific dispatch logic.
- **Per-mission-class self-reference (Standing Order #8 — 16th tactical invocation candidate in v8)**: T7 skill is the 3rd new-skill drop at `aDNA.aDNA/how/skills/` in the M3.x cohort (after M3.2's `skill_obsidian_canonicalize.md` + M3.3's `skill_obsidian_integration_test.md`). M2.4.5 hardened `how/skills/AGENTS.md` for new-skill discoverability; T7's skill IS the 3rd behavioral test. ADR-014 ratifies the verification-handoff topology via the very skill it codifies (recursive self-reference). The mission spec follows the 6-section structure ratified at M3.1 close (6th canonical instance at this T7 design spec; T8 = 7th).

### Acceptance smoke test (post-Obj 5 + Obj 7 landing + v8 P6 skill upstream-promotion)

```bash
# Scenario A: invoke T7 skill on M3.4 itself (recursive self-test — the skill's authoring mission consults the skill)
cd ~/lattice/aDNA.aDNA/
./how/skills/skill_verification_handoff.md --mission mission_adna_str_p3_m34_verification_handoff_and_agent_inspection --surface dispatch --check-set T6
# Expect: dispatch verdict PASS (M3.4 is implementation-class; produces 4 destructive artifacts; risk profile = medium; check-set T6 covers O1-O7 operator-side; topology resolves to "dispatch" because some artifacts (T7+T8 design specs) are agent-side reviewable + others (skill_verification_handoff + skill_obsidian_agent_inspect) require operator-side smoke per O1-O7)
# Output: "Verification verdict: DISPATCHED; handoff coordinates: M3.4 S3 close + AAR section §Acceptance scorecard; check-set T6; DELEGATES to skill_obsidian_integration_test.md --vault ~/lattice/aDNA.aDNA/ --profile default"
# Exit 0

# Scenario B: invoke T7 skill on a hypothetical agent-side-only mission (e.g., M3.0.5 decision-surface capability)
./how/skills/skill_verification_handoff.md --mission mission_adna_str_p3_m305_interactive_decision_surface --surface agent --check-set custom
# Expect: dispatch verdict PASS (M3.0.5 is implementation-class; produces 1-2 artifacts entirely in agent context; risk profile = low; check-set custom = none-required because deliverables are decision-surface capability per the planned-stub backlog idea)
# Output: "Verification verdict: PASS; surface: agent; check-set: custom (none); no delegation required"
# Exit 0

# Scenario C: invoke T7 skill on a hypothetical operator-side-only mission (e.g., M3.5 HOME polish)
./how/skills/skill_verification_handoff.md --mission mission_adna_str_p3_m35_home_polish_and_per_vault_info_pages --surface operator --check-set T6
# Expect: dispatch verdict PASS (M3.5 is implementation-class; produces HOME.md + per-vault info pages; risk profile = medium; check-set T6 covers O1-O7 operator-side smoke including theme + accent + UX-feel; surface resolves to operator-side because polishing HOME.md requires operator visual inspection for "easy/fluid" qualitative read per north-star UX goal)
# Output: "Verification verdict: PASS; surface: operator; check-set: T6 (DELEGATES to skill_obsidian_integration_test.md); operator handoff = M3.5 S3 close per Project SO #1"
# Exit 0

# Scenario D: invoke T7 skill on a cross-vault implementation-class mission (e.g., SiteForge.aDNA M-SF-P5p.3)
./how/skills/skill_verification_handoff.md --mission mission_siteforge_p5p3_canvas_substrate_landing --surface dispatch --check-set T6
# Expect: dispatch verdict PASS (cross-vault dispatch model; partner-persona handoff via coord memo to Stanley/Carly/Herb)
# Output: "Verification verdict: DISPATCHED; partner-vault: SiteForge.aDNA; partner-persona: SiteForge_LWX_or_designate; coord-memo template: ../../../who/coordination/coord_<date>_t7_dispatch_<mission>.md; check-set T6 DELEGATES to skill_obsidian_integration_test.md against SiteForge vault"
# Exit 0

# Scenario E: invoke T7 skill with --check-set custom + mission frontmatter declares verification_surface field
./how/skills/skill_verification_handoff.md --mission mission_adna_str_p3_m34_verification_handoff_and_agent_inspection --surface dispatch --check-set custom
# Expect: skill reads mission spec frontmatter for `verification_surface:` declaration + `verification_check_set:` declaration; if declared, uses those; else falls back to operator-side O1-O7 dispatch
# Output: "Mission frontmatter declares verification_surface: dispatch + check-set: custom (T7 + T8d operational primitives + ADR-014 ratification); dispatch verdict DISPATCHED to AAR scorecard for ratification"
# Exit 0

# Scenario F: invoke T7 skill against a mission spec that does NOT declare verification_surface (legacy mission spec)
./how/skills/skill_verification_handoff.md --mission mission_legacy_no_surface_declaration --surface auto
# Expect: skill falls back to dispatch-decision-tree per ADR-014 Clause B; auto-routes based on mission_class + risk-profile + check-set availability
# Output: "Verification verdict: AUTO; routed to dispatch per ADR-014 Clause B; mission_class: <inferred>; check-set: T6 default; operator-handoff coordinates: <inferred mission AAR section>"
# Exit 0 (with warning that mission spec should declare verification_surface field per ADR-014 Clause C)
```

Expected: PASS on scenarios A-F at Obj 5 + Obj 7 landing in M3.4 S2 + S3 ratification. Cross-vault scenarios (D) PASS at v8 P6 ecosystem propagation cycle when partner-vaults adopt T7 skill + ADR-014 doctrine.

## 5. Literal patch text

### Patch A — NEW `aDNA.aDNA/how/skills/skill_verification_handoff.md` (full skill file)

The full skill body is delivered as **Obj 5 of M3.4 in this same S2 session** — the skill IS the design's operational ratification (mirrors M3.2 D2 + M3.3 D-canon precedent where the skill shipped at S2 ratifying its own design spec end-to-end). v8 P6 may consume this same skill file content as the upstream-promotion candidate (subject to operator decision at P6 entry whether to promote to `.adna/how/skills/`).

**Skill shape summary** (the full file lands at `aDNA.aDNA/how/skills/skill_verification_handoff.md` as Obj 5; this section summarizes the contract to keep the design spec self-contained):

```yaml
---
type: skill
skill_type: agent
created: 2026-05-24
updated: 2026-05-24
status: active
category: verification_dispatch
trigger: "Decide verification surface for an implementation-class mission. Returns dispatch verdict (PASS / FAIL / DISPATCHED) + handoff coordinates. Vault-agnostic via --mission <mission_id> slot + --surface <agent | operator | dispatch | auto> + --check-set <T6 | custom>. DELEGATES binary-presence + O1-O7 check-set to skill_obsidian_integration_test.md (T6) for operator-side and dispatched surfaces. Ratified by ADR-014 (Verification Handoff Topology)."
last_edited_by: agent_stanley
graduated_from: aDNA.aDNA@m34_obj5
graduated_at: 2026-05-24
graduated_via: campaign_adna_serious_tool_readiness M3.4 S2
tags: [skill, verification, dispatch, topology, cross_skill_delegation, t7, m3_4, design_at_p3_propagation_at_p6, adr_014_consumer, t8_forward_reference_stub, m3_5_forward_reference_stub, m3_7_forward_reference_stub, standing_order_8_16th_tactical_invocation_candidate, m245_routing_layer_3rd_behavioral_test, rosetta]

requirements:
  tools: [bash 3.2+ portable, python3 (yaml + json modules), grep]
  context:
    - <mission_spec_path>                                         # target mission spec (--mission resolves to this)
    - <vault>/what/decisions/adr_014_verification_handoff_topology.md  # ADR-014 doctrine reference (HARD; consults Clause B for dispatch tree)
    - <vault>/how/skills/skill_obsidian_integration_test.md       # T6 skill (cross-skill dependency for O1-O7 check-set; HARD when --check-set T6)
    - <vault>/who/coordination/                                   # for partner-vault dispatch memo template (SOFT)
  permissions:
    - read mission spec frontmatter (yaml parse for verification_surface + verification_check_set + mission_class)
    - invoke ./how/skills/skill_obsidian_integration_test.md as subprocess (T6 delegation when --check-set T6)
    - write coord memo to who/coordination/ when --surface dispatch (file creation only; no destructive mutation)
    - read-only on mission spec + ADR-014 (consults; does not mutate)
---
```

**Invocation contract**:

| Parameter | Source | Required | Default |
|---|---|---|---|
| `--mission <mission_id>` | CLI | Yes | n/a — required |
| `--surface <agent \| operator \| dispatch \| auto>` | CLI | No | `auto` (reads mission frontmatter `verification_surface:` field; falls back to ADR-014 Clause B decision tree) |
| `--check-set <T6 \| custom>` | CLI | No | `T6` (operator-side O1-O7 default) |
| `--vault <path>` | CLI | No | Vault containing this skill |
| `--coord-memo-target <persona>` | CLI | No | `auto` (resolves from mission spec cross_vault_impact field) |
| `--verbose` | CLI flag | No | false |

**Dispatch decision tree (ratified by ADR-014 Clause B)**:

```
1. Read mission_spec frontmatter; extract mission_class + verification_surface + verification_check_set
2. If --surface=auto AND mission_spec.verification_surface declared → use declared
3. Else if --surface=auto AND mission_spec.verification_surface undeclared → ADR-014 Clause B decision tree:
   3a. mission_class=implementation + risk_profile=high → DISPATCH (operator + partner-persona)
   3b. mission_class=implementation + risk_profile=medium + check_set=T6 → DISPATCH (operator only)
   3c. mission_class=implementation + risk_profile=low + check_set=custom-none → AGENT (no handoff)
   3d. mission_class=reconnaissance OR closeout → AGENT (no handoff)
   3e. mission_class=planning → AGENT (operator AAR review only)
   3f. cross_vault_impact != [] → DISPATCH (partner-persona via coord memo)
4. If --surface=operator OR --surface=dispatch AND --check-set=T6:
   4a. DELEGATE to skill_obsidian_integration_test.md --vault <vault> --profile <profile from mission frontmatter; default=default>
   4b. Consume T6 exit code; report PASS/FAIL with O1-O7 breakdown
5. If --surface=dispatch:
   5a. Write coord memo template to <vault>/who/coordination/coord_<date>_t7_dispatch_<mission_id>.md
   5b. Report DISPATCHED with handoff coordinates
6. Output verification verdict + summary
```

**Outputs (verification verdict)**:

| Verdict | Meaning | Exit code |
|---|---|---|
| `PASS` | Verification surface resolved; check-set executed; all checks pass (or no checks required for `surface: agent`) | 0 |
| `FAIL` | Verification surface resolved; check-set executed; at least one check failed | 1 |
| `DISPATCHED` | Verification surface resolved to operator-side or partner-vault; handoff coordinates emitted; check-set deferred to handoff target | 0 (dispatch is success at dispatch time; final verdict at handoff target) |
| `PREFLIGHT_FAIL` | Mission spec path invalid; ADR-014 doctrine reference missing; T6 skill missing when `--check-set T6` and `--surface != agent` | 2 |
| `AUTO` | `--surface auto` resolved via ADR-014 Clause B decision tree; routed to one of {AGENT, OPERATOR, DISPATCH}; sub-verdict appended | 0 (with warning if mission spec lacks `verification_surface:` declaration) |

**Cross-skill delegation contract (T6 check-set)**:

```bash
# Inside T7 skill, when --check-set T6 AND --surface in {operator, dispatch}:
if [ -f "$VAULT_DIR/how/skills/skill_obsidian_integration_test.md" ]; then
    bash "$VAULT_DIR/how/skills/skill_obsidian_integration_test.md" --vault "$VAULT_DIR" --profile "${PROFILE:-default}"
    delegate_exit=$?
    # Pass-through summary + map exit code
    if [ "$delegate_exit" -eq 0 ]; then
        report "check-set T6" "PASS" "O1-O7 DELEGATE → integration_test exit 0"
    elif [ "$delegate_exit" -eq 1 ]; then
        report "check-set T6" "FAIL" "O1-O7 DELEGATE → integration_test exit 1 (at least one O failed)"
    else
        report "check-set T6" "PREFLIGHT_FAIL" "O1-O7 DELEGATE preflight failed (exit $delegate_exit; see integration_test output)"
    fi
else
    report "check-set T6" "SKIP_WITH_HINT" "skill_obsidian_integration_test.md not present at $VAULT_DIR/how/skills/; install M3.3 T6 skill OR invoke T7 with --check-set custom"
fi
```

**`## Forward integration with M3.5` stub section in the new skill**:

> Forward integration with M3.5 — DEFERRED STUB
>
> M3.5 (Bases-driven HOME.md + per-vault info pages) ships HOME.md polish + per-vault info pages as operator-facing UX deliverables. T7 skill provides M3.5 with the dispatch decision primitive: when M3.5 mission spec frontmatter declares `verification_surface: operator` + `verification_check_set: T6`, T7 skill delegates to M3.3 T6 skill against the polished HOME.md + per-vault info pages; T6's O1-O7 check-set covers home page renders + theme + accent + cross-vault links (the very surfaces M3.5 polishes). M3.5 design spec cites this skill + ADR-014; M3.5 consumer mission frontmatter declares `verification_surface:` per ADR-014 Clause C consumer-mission obligation.

**`## Forward integration with M3.7` stub section in the new skill**:

> Forward integration with M3.7 — DEFERRED STUB
>
> M3.7 (modular III for Obsidian) ships III-on-Obsidian as an agent-driven inspection runtime (consuming T8 substrate from M3.4 Obj 4 + Obj 6). T7 skill provides M3.7 with the agent-vs-operator surface split decision primitive: M3.7's III modules each declare `verification_surface:` per ADR-014 Clause C; T7 skill resolves each module's dispatch verdict. The III-on-Obsidian runtime invokes T7 skill on demand for runtime verification decisions (e.g., "should III's NN-fix module run agent-driven via T8d, or dispatch to operator for visual confirmation?"). M3.7 design spec cites this skill + ADR-014 + T8 substrate; M3.7 implementation-class missions declare `verification_surface:` per ADR-014 Clause C.

**Cross-references (≥ 3 prior skills + LWX AAR + ADR-014 + this design spec per Project SO #10)**:

- [[skill_obsidian_integration_test.md|skill_obsidian_integration_test.md]] — M3.3 T6 deliverable; T7 DELEGATES O1-O7 check-set to this skill (cross-skill primitive composition pattern 2nd use instance)
- [[skill_obsidian_canonicalize.md|skill_obsidian_canonicalize.md]] — M3.2 T4 deliverable; T7 reaches it at delegation depth 3 (T7 → T6 → M3.2 skill)
- [[../../.adna/how/skills/skill_node_health_check.md|skill_node_health_check.md]] — closest pre-existing primitive (health-check pattern; T7 is the verification-dispatch sibling)
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m34_obj3_t7_design_spec.md|T7 design spec]] — this spec; ratifies skill's design + dispatch tree
- [[../campaigns/campaign_lattice_workspace_ux/missions/artifacts/aar_campaign_lattice_workspace_ux.md|LWX mini-campaign AAR]] — verification-handoff topology load-bearing finding source (M-LWX-02 → M-LWX-03 → M-VNAL-01 dispatch model)
- [[../../what/decisions/adr_014_verification_handoff_topology.md|ADR-014]] — doctrinal ratification of the topology (drafted alongside this skill at S2; ratifies at S3 close)

### Patch B — NEW `aDNA.aDNA/what/decisions/adr_014_verification_handoff_topology.md` (full ADR file)

The full ADR body is delivered as **Obj 7 of M3.4 in this same S2 session** (draft state) — ratifies at S3 close per Campaign SO #14 in-phase exception clause. This section summarizes the ADR contract to keep the design spec self-contained.

**ADR shape summary** (the full file lands at `aDNA.aDNA/what/decisions/adr_014_verification_handoff_topology.md` as Obj 7; status `draft` at S2; status `accepted` at S3 close):

```yaml
---
type: decision
adr_id: "014"
title: "Verification Handoff Topology"
status: draft   # ratifies at M3.4 S3 close per Campaign SO #14 in-phase exception clause
supersedes: null
superseded_by: null
created: 2026-05-24
updated: 2026-05-24
last_edited_by: agent_stanley
deciders: [stanley, rosetta]
informed: [berthier, argus, hermes, spock, mnemosyne, hygieia, asclepius, daedalus, iris]   # all personas with verification responsibilities across the lattice
campaign: campaign_adna_serious_tool_readiness
mission: mission_adna_str_p3_m34_verification_handoff_and_agent_inspection
related_adrs: ["016", "017", "022"]   # 016 = per-mission context budget; 017 = Network.aDNA pattern category; 022 = PostToolUse hook
related_specs: [m34_obj3_t7_design_spec, m34_obj4_t8_design_spec]
related_skills: [skill_verification_handoff, skill_obsidian_agent_inspect, skill_obsidian_integration_test]
tags: [decision, adr, adr_014, verification, dispatch, topology, architectural_primitive, t7, m3_4, campaign_so_14_in_phase_exception_clause, cross_vault_consumer_obligation, m3_5_consumer, m3_7_consumer, latticelabs_adna_consumer, latticenetwork_adna_consumer, rosetta]
---
```

**ADR body 3-clause structure**:

- **Clause A — Topology Definition**: defines the 4 surfaces (agent-side smoke + operator-side runtime + dispatch connector + agent-driven branch); cites M-LWX-02 + M-LWX-03 + M-VNAL-01 dispatch precedent; cites T6 skill as the operator-side check-set primitive; cites T8d skill (M3.4 Obj 6) as the agent-driven branch primitive
- **Clause B — Dispatch Decision Tree**: codifies the 5-step decision tree from the skill's body (mission_class + risk_profile + check_set + cross_vault_impact + frontmatter declaration); names the 6 possible verdicts (PASS / FAIL / DISPATCHED / PREFLIGHT_FAIL / AUTO / DEFERRED); names the auto-resolution logic when mission spec lacks `verification_surface:` declaration
- **Clause C — Consumer-Mission Obligations**: every implementation-class mission spec MUST declare `verification_surface: <agent | operator | dispatch | auto>` in frontmatter (validated against ADR-014 Clause B decision tree); every cross-vault mission spec MUST consult `skill_verification_handoff.md` before assigning dispatch (coord memo template provided); every M4.x+ installer-class mission MUST plan its verification phase per Clause B; existing missions migrate `verification_surface:` field at next mission-spec-touch cadence (no retroactive sweep required)

**Cross-references (≥ 3 prior ADRs + T7 spec + T7 skill + LWX AAR + Campaign SO #14 + SO #16 per Project SO #10)**:

- [[adr_016_per_mission_context_budget.md|ADR-016]] — per-mission context budget (precedent: ratification-at-implementation-mission-close pattern; ADR-014 inherits this)
- [[adr_017_network_adna_pattern_category_and_namespace_ratification.md|ADR-017]] — Network.aDNA pattern category (precedent: ratification-at-implementation-mission-close pattern)
- [[adr_022_tool_use_logging.md|ADR-022]] — PostToolUse hook tool-use logging (precedent: behavioral-primitive ADR; ADR-014 extends to dispatch-primitive ADR)
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m34_obj3_t7_design_spec.md|T7 design spec]] — substrate for ADR-014 body content
- [[../../how/skills/skill_verification_handoff.md|T7 skill]] — operational primitive cited at ratification (S3 close)
- [[../../how/campaigns/campaign_lattice_workspace_ux/missions/artifacts/aar_campaign_lattice_workspace_ux.md|LWX AAR]] — verification-handoff topology origin (M-LWX-02 → M-LWX-03 → M-VNAL-01 dispatch model)
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/CLAUDE.md|Campaign SO #14 in-phase exception clause + SO #16 v7.0 tag dependency hard]]

**Status transition** (draft → accepted):

```diff
@@ -7,1 +7,1 @@
-status: draft
+status: accepted
@@ -10,1 +10,1 @@
-updated: 2026-05-24
+updated: 2026-05-25   # or actual S3 close date
```

Fires at M3.4 S3 close after T7 skill has landed as operational primitive + AAR cites the ratification + campaign master amendments-table records the status transition + STATE.md Op 3 archive-on-close 15th canonical instance refresh.

## 6. v8 P6 propagation contract

| Stage | Action | Authority | Verification |
|---|---|---|---|
| **P6 entry gate** | Operator ratifies P5 → P6 phase transition per Campaign SO #19. v8 P6 propagation queue includes T7's two propagation candidates: (a) **T7 skill upstream-promotion** (`aDNA.aDNA/how/skills/skill_verification_handoff.md` → `.adna/how/skills/skill_verification_handoff.md`) so fresh forks inherit it via `cp -r .adna/`; (b) **ADR-014 ecosystem propagation** — partner vaults adopt the topology + declare `verification_surface:` in their implementation-class mission frontmatter. Both are part of the post-M3.4-close queue growth (12-14 → ~17-20 per campaign master). | Operator + Rosetta | Plan ratification at P5 → P6 entry session |
| **P6 pre-step: patch verification against upstream HEAD** | Re-run §4 acceptance smoke test scenarios A-F against the current `.adna/` HEAD at P6 entry. Skill body was authored against `aDNA.aDNA/how/skills/`; v8 P6 promotion to `.adna/how/skills/` requires re-running cross-vault smoke (Scenarios A + B + C + D) to confirm `--mission` slot resolves correctly from the new location. ADR-014 doctrine doesn't move (lives in `.adna/what/decisions/` only if operator promotes; default = stays at `aDNA.aDNA/what/decisions/` and partner vaults cite via wikilink). | Rosetta + operator confirmation | `git -C .adna log -1 --oneline` matches `upstream_state_at_authoring` frontmatter OR refresh memo in `missions/artifacts/` |
| **P6 commit decision: bundle vs. separate** | Choose: **(a)** single commit "T7 verification-handoff skill + ADR-014 doctrine (T7 per M3.4; F-S2-3)" combining the skill promotion + ADR-014 reference doctrine; **(b)** separate commits — one for skill promotion, one for ADR-014 ecosystem cycle (preserves independence — operator may want to land only the skill, deferring ADR-014 to later); **(c)** bundle with T6 + T8d skills as a single "M3.3+M3.4 skills landing" commit covering all 3 skills. **Default**: option (b) per-component — preserves T7 skill's identity as a vault-agnostic primitive distinct from ADR-014 ecosystem cycle. | Operator decision at P6 entry; Rosetta drafts commit messages | Commit message names T7 + F-S2-3 + cites this spec path + cites ADR-014 |
| **P6 commit** | Apply skill promotion (cp `aDNA.aDNA/how/skills/skill_verification_handoff.md` → `.adna/how/skills/skill_verification_handoff.md`) + optionally ADR-014 wikilink updates across partner vault mission spec frontmatter. Commit message template: `v7.x: add skill_verification_handoff.md (verification dispatch topology + cross-skill DELEGATES to integration_test) + ADR-014 ecosystem propagation (T7 per M3.4; F-S2-3; Nth instance of single-commit additive-upstream pattern)`. **T7 IS an instance candidate** (NEW skill file addition = additive-upstream class; counts alongside T1+T3+T4+T6+T8a as instance count growth at P6 entry). | Operator pushes; Rosetta drafts commit | `git -C .adna log -1 --oneline` shows the new commit; smoke test (§4) passes |
| **P6 post-commit smoke** | Run §4 acceptance smoke test scenarios A-F on a fresh fork created via the updated `skill_project_fork.md`. Confirm T7 skill is present at `<new-fork>/how/skills/skill_verification_handoff.md` and resolves the cross-skill dependency (T6 skill must also be co-resident — if T6 skill is not yet upstream-promoted, T7 `--check-set T6` reports SKIP_WITH_HINT). | Rosetta or dispatched validator (Carly+Herb per Campaign SO #15) | PASS on Scenarios A-F |
| **P6 ecosystem propagation** | Notify the 19+ partner vaults that v7.x ships T7 skill + ADR-014; partner forks made between v7.0 and v7.x can opt-in by adopting `verification_surface:` frontmatter field in their implementation-class missions (additive; no destructive migration). Cross-vault validation campaigns (e.g., `campaign_validation_node_adna_lwx_outputs`) consume T7 skill as the canonical dispatch primitive. | Berthier coord memos (Lattice Labs); per-vault Personas ack | Coord memos in `who/coordination/archive/` with `status: acknowledged` |

**P6 verification expectation**: zero regressions against v7.0 (existing skills + ADRs continue unchanged; new T7 skill + ADR-014 are additive); fresh forks gain T7 skill at `how/skills/`; F-S2-3 closed at the skill + ADR layer; the validation-as-dispatched-campaign pattern (`campaign_validation_node_adna_lwx_outputs`) gains the canonical dispatch primitive; partner-vault implementation-class missions adopt `verification_surface:` declaration at next mission-spec-touch cadence.

**P6 rollback path**: if smoke test fails, revert via `git revert`. Skill removal: restore `.adna/how/skills/` to pre-T7 state (the skill stays at `aDNA.aDNA/how/skills/` as the v8 P6 source-of-truth; rollback removes only the `.adna/` propagated copy). ADR-014 rollback: status flips `accepted → rescinded` with successor ADR pointer (highly unlikely; ADR-014 is load-bearing for M3.5/M3.7 + cross-vault; rescission would block cross-vault propagation).

## Cross-references

- [[../mission_adna_str_p3_m34_verification_handoff_and_agent_inspection.md|M3.4 mission spec]] — parent mission (Objective 3)
- [[../../../campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md|absorbed campaign master]] — T7 track substrate (line 64-66)
- [[../../../campaign_lattice_workspace_ux/missions/artifacts/aar_campaign_lattice_workspace_ux.md|LWX mini-campaign AAR]] — verification-handoff topology load-bearing finding source (M-LWX-02 → M-LWX-03 → M-VNAL-01 dispatch model)
- [[m34_obj4_t8_design_spec.md|T8 design spec]] — sibling at this mission (T7 = dispatch decision tree; T8 = agent-driven branch primitive that T7 routes to)
- [[m33_obj4_t6_design_spec.md|M3.3 T6 design spec]] — substrate (T6 O1-O7 check-set primitive that T7 DELEGATES to; 6-section structural template inherited)
- [[m33_obj3_t5_design_spec.md|M3.3 T5 design spec]] — substrate (6-section structural template; first-open hazard prevention model parallel to T7's dispatch decision tree model)
- [[m32_obj3_t3_design_spec.md|M3.2 T3 design spec]] — substrate at delegation depth 3 (`setup.sh --verify` primitive that flows through T6 into T7 O4-equivalent check)
- [[../../../../how/skills/skill_obsidian_integration_test.md|M3.3 T6 skill]] — cross-skill delegation target (T7 DELEGATES O1-O7 check-set to this skill)
- [[../../../../how/skills/skill_obsidian_canonicalize.md|M3.2 T4 skill]] — depth-3 delegation target via T6 chain
- [[../campaign_adna_serious_tool_readiness.md|campaign master]] — v8 P6 propagation queue ownership + ADR-014 forecast row line 310
- [[../../../../what/decisions/adr_014_verification_handoff_topology.md|ADR-014]] — paired doctrinal artifact (drafted at Obj 7 this same session)
- [[../../../../what/decisions/adr_016_per_mission_context_budget.md|ADR-016]] — token budget two-metric + Heavy-File Read Convention + ratification-at-implementation-mission-close precedent
- [[../../../../what/decisions/adr_017_network_adna_pattern_category_and_namespace_ratification.md|ADR-017]] — ratification-at-implementation-mission-close precedent
- [[../../../../what/decisions/adr_022_tool_use_logging.md|ADR-022]] — behavioral-primitive ADR precedent
- [[../CLAUDE.md|campaign CLAUDE.md]] — Campaign SO #14 in-phase exception clause + #16 v7.0 tag dependency hard

## Prior-instance + bundle citation (additive-upstream lineage)

| # | Instance | Commit / Ratification | Type | Authored |
|---|---|---|---|---|
| 1-4 | (additive-upstream instances 1-4 — ADR-008 + e3b3bcc + 8673383 + 202c9ec) | ratified pre-M3.x | Single-commit additive-upstream lineage | M03 + M04 + M-LWX-01 + M-LWX-03 |
| 5 | T1 — preserve setup.sh in skill_project_fork.md | v8 P6 candidate (M3.1 T1 design spec) | Single line removal + comment update | M3.1 |
| 6 | T3 — `setup.sh --verify` mode + health-check + fork-time gate | v8 P6 candidate (M3.2 T3 design spec) | 3-file additive | M3.2 |
| 7 | T4 — `skill_obsidian_canonicalize.md` orchestrator + setup.sh `--reset-layout` + NN data.json shipping + .obsidianignore extension | v8 P6 candidate (M3.2 T4 design spec — bundled F-S2-5/6/7) | Combined 4-file additive | M3.2 |
| 8 | T6 — `skill_obsidian_integration_test.md` (vault-agnostic O1-O7 + per-vault profile + cross-skill delegation to canonicalize --verify) + optional setup.sh --test hook | v8 P6 candidate (M3.3 T6 design spec) | NEW skill file + optional setup.sh delegation arm | M3.3 |
| **9 (or bundled w/ T8a)** | **T7 — `skill_verification_handoff.md` (verification dispatch topology + cross-skill DELEGATES to integration_test) + ADR-014 ecosystem propagation** | **v8 P6 candidate (this spec)** | **NEW skill file + ADR-014 ecosystem cycle** | **M3.4 (this mission)** |

**Note on instance counting**: T7 IS an instance candidate of the single-commit additive-upstream pattern (NEW skill file addition; counts alongside T1+T3+T4+T6+T8a). T8b/T8c/T8d/T8e have their own instance accounting at T8 design spec (Obj 4). The instance counter post-T7+T8 lands depends on v8 P6 bundle decisions; if T7+T6+T1+T3+T4 land as 5 separate commits, T7 is the 9th instance; if bundled, the counter may land lower. Standing Order #5 (absorbed-campaign) lineage applies — operator decides at P6 entry.

## Notes

- **Patch A + Patch B are both load-bearing.** Patch A is the operational primitive; Patch B is the doctrinal anchor. Neither alone serves both audiences (developer + newcomer per Project SO #7) and both stakeholder classes (operator-side consumer-missions + cross-vault partner-vault consumers).
- **Cross-skill primitive composition is the load-bearing architectural primitive** of M3.4 (graduating from 1 → 3 of 3 use instances). T7 skill → T6 skill → M3.2 skill → T3 `setup.sh --verify` → Obsidian state. Chain depth 4. Each layer adds scope; no layer reimplements another's primitive. This is the cross-skill primitive composition discipline that the M3.x cohort ratifies for M3.5+ and beyond (M3.5/M3.7 consumers will DELEGATE to T7 + T6 + T8d skills via the same composition pattern).
- **ADR-014 in-phase ratification is the FIRST instance of Campaign SO #14 in-phase exception clause invocation in v8.** D2=A explicitly invokes the clause; this spec + ADR-014 body + AAR document the load-bearing rationale. Future architectural-primitive ADRs may invoke the same clause when load-bearing for in-phase consumers (template: explicit clause invocation + load-bearing rationale + consumer-mission evidence).
- **T8 forward-reference stubs in this spec (`## Forward integration with M3.5` + `## Forward integration with M3.7`)** are intentionally narrative (≥ 1 paragraph each) and NOT implementation. The stubs commit to the architectural shape (M3.5 dispatch criteria + M3.7 agent/operator surface split) without front-running M3.5/M3.7's decision-making. T8 forward-reference-stub discipline (M3.3 STRONG-EXTENDED finding) graduates from 1 → 2 of 3 use instances at this T7 spec; Obj 4 T8 spec provides the 3rd; graduates at M3.4 close.
- **Per-mission-class self-reference (Standing Order #8 — 16th tactical invocation candidate in v8)**: this spec lives at `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/` — a directory whose `AGENTS.md` was top-12 hardened at M2.4.5. The deliverable skill at Obj 5 IS the 3rd behavioral test of the M2.4.5-hardened `how/skills/AGENTS.md` routing layer (after M3.2's first behavioral test + M3.3's second). The deliverable ADR-014 codifies the verification-handoff topology via the very skill it produces (recursive self-reference). Formal Q2 SQL re-measurement at M3.x ≥ 20-session corpus per `m245_obj3_measurement_contract.md` §6.
- **`skill_design_spec_authoring.md` graduation** advances from 6 (with T6 at M3.3 close) to 7 (this spec) of 3+ use instances; M3.4 Obj 4 T8 spec provides 8th instance. Graduation already ratified at M3.2 close; T5+T6+T7+T8 add post-ratification reinforcement.
- **`skill_cross_skill_primitive_composition.md` graduation candidate** advances 1 → 2 of 3 use instances at this T7 spec (T7 → T6 DELEGATION evidence); Obj 6 T8d skill provides the 3rd instance via T8d → T6 + T8d → T7 + T8d → M3.2 at depth 3 (TRIPLE DELEGATION evidence within one skill); graduates at M3.4 close.
- **`skill_forward_reference_stub_design.md` graduation candidate** advances 1 → 2 of 3 use instances at this T7 spec (M3.5 + M3.7 forward stubs in spec body + skill body); Obj 4 T8 spec provides the 3rd; graduates at M3.4 close.
- **Validation-as-dispatched-campaign pattern reinforcement**: T7 skill is the canonical dispatch primitive that `campaign_validation_node_adna_lwx_outputs` (lattice-labs; Berthier + Carly + Herb) and any successor cross-vault validation campaign consumes. The skill replaces ad-hoc per-mission dispatch prose with a single reusable invocation; ADR-014 Clause C makes the consumer-mission obligation typed.
- **Dual-audience note**: a newcomer reading the spec finds Option 1 explained in plain language ("codify the topology as both an operational skill AND a doctrinal ADR — agents invoke the skill; humans cite the ADR") + the smoke-test scenarios A-F as concrete commands + the §3 option-matrix rejected reasons in narrative form. A developer reads the §5 skill body summary + the dispatch decision tree pseudocode + the §6 propagation contract for the v8 P6 cycle + ADR-014's 3-clause structure. Both audiences land on the same skill invocation surface + the same ADR-014 doctrinal reference.

## Completion Summary

T7 design spec landed at M3.4 S2; T7 skill ships at M3.4 Obj 5 (this same S2 session); ADR-014 drafts at M3.4 Obj 7 (this same S2 session) and ratifies at M3.4 S3 close per Campaign SO #14 in-phase exception clause. v8 P6 propagation queue grows by 1-2 items (T7 skill upstream-promotion + ADR-014 ecosystem propagation). Cross-skill primitive composition pattern advances 1 → 2 of 3 use instances; T8 forward-reference-stub discipline advances 1 → 2 of 3 use instances. M3.4 close (after S3 AAR) graduates both candidates at 3 of 3 use instances + closes 4 of 4 P3 phase-exit bricks for the agent-autonomy prong.
