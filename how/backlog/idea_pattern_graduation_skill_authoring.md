---
type: backlog_idea
created: 2026-05-24
updated: 2026-05-24
status: active
last_edited_by: agent_stanley
tags: [backlog, idea, pattern_graduation, skill_authoring_deferred, cross_skill_primitive_composition, t8_forward_reference_stub_discipline, m3_4_close_carry, d_grad_ratify_as_finding_defer_skill_authoring, follow_up_session_pickup, rosetta]
source_mission: mission_adna_str_p3_m34_verification_handoff_and_agent_inspection
source_aar: aar_m34_verification_handoff_and_agent_inspection
graduation_date: 2026-05-24
priority: medium
estimated_sessions: 1-2
---

# Pattern graduation — skill file authoring deferred (combined memo)

## Context

At M3.4 S3 close (2026-05-24), two patterns reached **≥ 3 use instances per `m21_obj4` rubric** and **graduated** as documented findings in the M3.4 AAR. Per operator decision **D-GRAD = ratify-as-finding-only; defer skill authoring** (chosen at plan ratification 2026-05-24T04:30Z+ at `/Users/stanley/.claude/plans/please-read-the-claude-md-soft-dongarra.md`), the corresponding skill files were NOT authored inline at M3.4 S3 — they are deferred to a follow-up session pickup.

This backlog idea memorializes both graduations together (per operator's combined-file preference at the AskUserQuestion) so the next session has a single substrate to consume.

## Graduated patterns

### 1. Cross-skill primitive composition pattern

**Skill candidate**: `aDNA.aDNA/how/skills/skill_cross_skill_primitive_composition.md`

**Use instances ratified at M3.4 close (3 of 3 per rubric)**:

| # | Instance | Mission | Shape | Evidence |
|---|---|---|---|---|
| 1 | T6 → M3.2 skill | M3.3 | linear 4-layer chain | T6 skill O4 DELEGATES to `skill_obsidian_canonicalize.md --verify` → setup.sh `--verify` → Obsidian state |
| 2 | T7 → T6 skill | M3.4 | linear 5-layer chain | T7 skill DELEGATES to T6 for binary-presence verification → inherits M3.3 chain → reaches setup.sh at depth 4 + Obsidian state at depth 5 |
| 3 | T8d → T6 + T7 + M3.2 skill | M3.4 | branching graph; 3 paths within single skill body | T8d skill TRIPLE DELEGATION: path A T8d → T6 → M3.2 skill → setup.sh (4 layers via T6); path B T8d → T7 (1 layer dispatch); path C T8d → T6 (2 layers operator_side fallback in degradation cascade) |

**What the skill should codify** (forward-reference for next-session author):

- **Core discipline**: when a new skill needs an existing skill's primitive, DELEGATE (cite + invoke) — never REIMPLEMENT. Document chain depth. Name responsibility boundary at each layer.
- **Operator-traceable ceiling**: ≤ 5-6 layers per M3.3-set precedent; 5+ layers should trigger refactor consideration.
- **Branching graphs**: for skills with multiple delegation paths (like T8d's triple), document each path independently with depth annotation; explicit **degradation cascade** (e.g., `agent_driven → hybrid → operator_side` per T8d) is the safety net when one delegation path becomes unavailable.
- **2nd-order discipline (emerged at M3.4)**: any skill with ≥ 2 delegation paths SHOULD document a degradation cascade per path.
- **Cross-vault propagation**: each downstream vault's implementation-class mission may delegate to aDNA.aDNA primitives via federation_ref; the pattern compounds across the lattice.
- **Section structure** (forward-reference; finalize at authoring): (i) discipline statement + when to apply; (ii) chain documentation template (table with columns: layer | skill | responsibility | exit-code semantics); (iii) degradation cascade contract template; (iv) operator-traceable ceiling rationale; (v) ≥ 3 worked examples (M3.3 T6 + M3.4 T7 + M3.4 T8d); (vi) cross-vault propagation contract.

### 2. T8 forward-reference-stub discipline

**Skill candidate**: `aDNA.aDNA/how/skills/skill_forward_reference_stub_design.md`

**Use instances ratified at M3.4 close (3 of 3 per rubric)**:

| # | Instance | Mission | Stub location | Forecast content |
|---|---|---|---|---|
| 1 | T6 spec + new skill T8 stubs | M3.3 | T6 design spec lines 256-269 + `skill_obsidian_integration_test.md` lines 585-601 | named Local REST API + MCP + profile flag `mode` forecast |
| 2 | T7 spec + T7 skill M3.5/M3.7 stubs | M3.4 | T7 design spec + `skill_verification_handoff.md` `## Forward integration with M3.5/M3.7` sections | named HOME-polish dispatch criteria + modular-III agent/operator surface split |
| 3 | T8 spec + T8d skill M3.5/M3.7 stubs | M3.4 | T8 design spec + `skill_obsidian_agent_inspect.md` `## Forward integration with M3.5/M3.7` sections | named modular-III auto-inspection criteria + HOME-polish first-contact verification surface |

**What the skill should codify** (forward-reference for next-session author):

- **Core discipline**: when a design spec produces an artifact that the next mission will consume, include `## Forward integration with <next mission>` stub section in BOTH the design spec AND any new skill it produces. Each stub is ≥ 1 paragraph.
- **Deferral discipline (the value-source)**: name the WHO + WHAT touch points; defer the WHEN + HOW + WHY to the consumer mission. The pattern's value is in the *deferral*, not the forecasting prose — across 3 instances, zero stubs grew into implementation work prematurely.
- **Symmetry**: producer mission stubs the forward integration; consumer mission cites the stub as substrate via `prerequisite_artifacts:` frontmatter field. Forms a producer/consumer reference pair.
- **Reduces consumer-mission entry-cost**: at the consumer mission's S1, the spec author already has the integration points scoped (no fresh re-discovery work).
- **Preserves design-at-P3-propagation-at-P6 pattern integrity**: a naive forward-reference might pull consumer-mission implementation work into the producer mission ("might as well sketch the API while we're here") — violating substrate-pure mission boundary. The stub convention's deferral discipline says NO.
- **Section structure** (forward-reference; finalize at authoring): (i) discipline statement + when to apply; (ii) producer/consumer stub template; (iii) deferral discipline rationale (name vs implement; WHO+WHAT vs WHEN+HOW+WHY); (iv) symmetry with `prerequisite_artifacts:` field; (v) ≥ 3 worked examples (M3.3 T6 + M3.4 T7 + M3.4 T8); (vi) anti-patterns (premature implementation; missing stub; stub-as-implementation drift).

## Why deferred to follow-up

Per D-GRAD operator choice at M3.4 S3 plan ratification: ratify-as-finding-only keeps S3 close non-destructive (preserves ~80-115 kT content-load forecast budget). Authoring both skill files inline would have pushed S3 toward S3-with-carry sub-mode (+~50-70 kT). Both patterns are now formally graduated as documented findings in the M3.4 AAR — the skill files are operationalizations of already-ratified doctrine, not new doctrine themselves.

## Estimated authoring effort

**Single-session** authoring class: 1 session, ~50-80 kT content-load (both skills together). Substrate is fully captured in this backlog idea + the M3.4 AAR + the M3.3 AAR + the T7+T8 design specs + the 4 skill files (`skill_obsidian_canonicalize.md` + `skill_obsidian_integration_test.md` + `skill_verification_handoff.md` + `skill_obsidian_agent_inspect.md`). No fresh research needed — both skills are pure documentation of ratified patterns.

## Pickup criteria

When the next session has spare context budget (e.g., interstitial between M3.5/M3.6/M3.7 work; OR a dedicated graduation-skills-batch session), an agent can pick up this idea by:

1. Reading this file (substrate is here)
2. Reading the M3.4 AAR §Pattern graduation block (`missions/artifacts/aar_m34_verification_handoff_and_agent_inspection.md`) for the canonical evidence tables
3. Reading the 4 example skills (M3.2 + M3.3 + 2× M3.4) for the empirical patterns
4. Authoring both skill files following the section-structure forecasts above
5. Cross-linking back to this file + AAR + example skills + `m21_obj4` graduation rubric
6. Filing graduation-complete AAR-snippet at the next session's SITREP

## M3.7 close extension (2026-05-25)

M3.7 S2 close ratifies 1 additional graduation + seeds 2 new candidates + reinforces 9 post-graduation. Skill file authoring stays deferred per D-GRAD precedent inherited (M3.4 + M3.5 + M3.6 + M3.7 all defer). The combined backlog extends:

**1 new GRADUATION at M3.7 (skill file authoring deferred)**:
- `skill_substrate_inversion_with_adr.md` — GRADUATES at 3rd canonical instance (M3.4 ADR-014 1st + M3.6 ADR-024 2nd + M3.7 ADR-025+ADR-026 twin 3rd; per ≥ 3 instances rubric). Variant stabilizes as canonical-for-implementation-class-missions-that-design-cross-vault-contracts-with-load-bearing-decisions. Section-structure forecast: 5-section skill (when-to-use + invariants + step-by-step ADR drafting + close-cascade ratify ceremony + cross-references); evidence table cites M3.4 + M3.6 + M3.7 + ADR-014 + ADR-024 + ADR-025 + ADR-026 + M3.4/M3.6/M3.7 AAR pattern graduation blocks.

**2 NEW SEEDS at M3.7 (authoring deferred until graduation)**:
- `skill_twin_adr_ratification.md` — NEW SEED at 1 of 3 instances (M3.7 ADR-025 + ADR-026 twin = 1st canonical instance). Eligibility = two ADRs share tightly-coupled load-bearing decision surface within single mission close. Section-structure forecast: 5-section skill (when-to-use [eligibility criterion] + invariants + step-by-step twin drafting + close-cascade twin-ratify ceremony + cross-references). Graduates at 3rd instance if M3.8 or later applies.
- `skill_modular_iii_consumer_interface_design.md` — NEW SEED at 1 of 3 instances (M3.7 design spec is 1st cross-vault modular III consumer-interface design). Eligibility = aDNA-Forge-Platform.aDNA consumer adopting III modular framework with consumer-interface contracts only. Section-structure forecast: 5-section skill (when-to-use + invariants [zero internal modular-III touches; consumer-interface contracts only] + step-by-step design-spec + ADR + AAR ceremony + cross-references). Graduates at 3rd instance if future cross-vault III consumer applies.

**9 post-graduation reinforcement updates at M3.7**:
- `skill_in_phase_adr_ratification.md` — post-graduation reinforcement at 5/3+ (4th + 5th invocations via ADR-025 + ADR-026 twin at M3.7 close); already-GRADUATED at M3.6
- `skill_implementation_mission_close.md` — post-graduation reinforcement at 4/3+ (M3.7 S2 close cascade matches M3.4 + M3.5 + M3.6 close shape); already-GRADUATED at M3.6
- `skill_design_spec_authoring.md` — post-graduation reinforcement at 14/3+ (4.7× margin; M3.7 design spec is 14th canonical instance of 6-section structure); already-GRADUATED at M3.4
- `skill_campaign_close_archive.md` — post-graduation reinforcement at 21/3+ (7× margin; Op 3 archive-on-close 20th + 21st canonical instances at M3.7 S1 + S2 STATE refreshes); already-GRADUATED at M3.4-or-earlier
- `skill_substrate_pure_separation.md` — post-graduation reinforcement at 9/3 (8th canonical instance pre-S1 `173516e` SiteForge C-D6-1 carry-forward + 9th canonical instance pre-S2 `f390a0b` SiteForge D7 carry-forward); already-GRADUATED at M3.4-or-earlier
- `skill_substrate_gathering_subagent_dispatch.md` — graduation candidate ADVANCES 1 → 2 of 3 (M3.6 1st + M3.7 2nd Explore subagent dispatch at S1 entry per ADR-016 Clause B); graduates at 3rd instance
- `skill_two_session_close_cascade.md` — graduation candidate ADVANCES 1 → 2 of 3 (M3.6 1st + M3.7 2nd canonical 2-session implementation-class shape); graduates at 3rd instance if M3.8 or later applies
- `skill_forward_reference_stub_design.md` — post-graduation reinforcement at 11/3+ (T8 forward-reference-stub discipline; M3.7 design spec §6 forward-integration stub names v8 P5 + III.aDNA Campaign E); already-GRADUATED at M3.4
- `skill_cross_skill_primitive_composition.md` — HOLD at 5/5 (M3.7 produced no new operational skill at S2; path A scope; M3.4 graduated at 3/3; M3.5 reinforced 4-5); future cross-skill chain at v8 P5 100-III-loops capstone may add 6th instance

## Cross-references

- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m34_verification_handoff_and_agent_inspection.md|M3.4 AAR]] — Pattern graduation block + 3 of 3 evidence tables
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m33_obsidian_stabilization_ux_and_tests.md|M3.3 AAR]] — PRIMARY cross-skill primitive composition source (1st instance) + STRONG-EXTENDED T8 forward-reference-stub discipline source (1st instance)
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p2_m21_context_audit_split.md|M2.1 mission spec]] — `m21_obj4` graduation rubric source (≥ 3 use instances)
- [[../skills/skill_obsidian_canonicalize.md|skill_obsidian_canonicalize.md]] — M3.2 skill; intra-skill multi-mode (precedent for single-skill composition)
- [[../skills/skill_obsidian_integration_test.md|skill_obsidian_integration_test.md]] — M3.3 T6 skill; 1st cross-skill DELEGATION instance
- [[../skills/skill_verification_handoff.md|skill_verification_handoff.md]] — M3.4 T7 skill; 2nd cross-skill DELEGATION instance + 2nd T8-forward-reference-stub instance
- [[../skills/skill_obsidian_agent_inspect.md|skill_obsidian_agent_inspect.md]] — M3.4 T8d skill; 3rd cross-skill DELEGATION instance (TRIPLE DELEGATION; branching graph) + 3rd T8-forward-reference-stub instance + degradation cascade contract
