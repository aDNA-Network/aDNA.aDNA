---
type: skill
skill_type: agent
created: 2026-06-30
updated: 2026-06-30
status: active
category: operations
trigger: "An implementation-class mission whose substrate session (S2) produces a design spec + skill AND surfaces a load-bearing decision that deserves doctrinal status — draft an ADR alongside the spec+skill and ratify it in the close cascade."
last_edited_by: agent_stanley
tags: [skill, graduation, substrate_inversion, adr, implementation_class, in_phase_ratification, rosetta]

requirements:
  tools: []
  context: ["how/skills/AGENTS.md", "the mission spec", "the ADR template + an exemplar ADR"]
  permissions: ["write files"]
---

# Skill: Substrate Inversion with ADR

## Overview

An implementation-class mission's substrate session (S2) **inverts** from execution to producing durable substrate — a design spec plus an operational skill the downstream consumes. The **with-ADR variant** adds a third artifact (an ADR draft) to that S2 mix **when, and only when, a load-bearing decision deserves doctrinal status**. The ADR pairs a behavioral/architectural primitive with its operational skill, is drafted in S2, and is ratified in-phase during the S3 close cascade.

Graduated **2026-05-25 at M3.7** as the 3rd canonical instance (M3.4 ADR-014 1st + M3.6 ADR-024 2nd + M3.7 ADR-025/026 twin 3rd) per the `m21_obj4` ≥-3-instances rubric. Substrate: [[how/backlog/idea_pattern_graduation_skill_authoring|idea_pattern_graduation_skill_authoring]] + the [[how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m34_verification_handoff_and_agent_inspection|M3.4 AAR]] (definitional).

## Trigger

Selected at **S1 plan ratification** as a D2-class decision. Two canonical S2 shapes exist for implementation-class missions consuming absorbed-upstream substrate:

- **spec + skill** (default) — no decision rises to doctrinal status.
- **spec + skill + ADR** (this variant) — a decision is **load-bearing for downstream consumers + cross-vault propagation**.

Choose the ADR variant when the decision would otherwise sit implicit inside the deliverable and a future mission/vault would have to re-derive it.

## Invariants

1. **Draft in S2, ratify in S3.** The ADR is authored in the substrate session next to the spec+skill — never bolted on after the fact. It ratifies in-phase at the close cascade (Campaign SO #14 in-phase exception clause; the `skill_in_phase_adr_ratification` pattern).
2. **Skill-+-ADR pairing.** The ADR codifies the behavioral/architectural primitive; the skill operationalizes it. They ship as a pair.
3. **Substrate-pure.** The ADR carries the decision + rationale + clause structure (the standard 3-clause shape), not execution detail. The deliverable references the ADR; the ADR does not reference mission execution.
4. **Budget ~13% S2 overhead.** Adding an ADR draft to a spec+skill S2 costs ~10–15% above the spec+skill baseline — the marginal cost is the draft + its cross-references, not a full ADR substrate (ADR templates + frontmatter + clause structure are heavily reusable).
5. **Twin sub-variant.** If two ADRs share a tightly-coupled load-bearing decision surface at a single close, ratify them as a twin (the `skill_twin_adr_ratification` seed — M3.7 ADR-025+ADR-026).

## Step-by-step (S2 — drafting)

1. **Spot the load-bearing decision** in the spec/skill work — a contract, topology, or ownership boundary that downstream consumes.
2. **Confirm doctrinal status** — does it cascade ≥ 2 missions or commit cross-vault substrate? If not, leave it in the deliverable (use the default spec+skill shape).
3. **Draft the ADR** at `status: proposed` — reuse the ADR template + frontmatter conventions + the 3-clause structure; assign the next forward-only ADR number.
4. **Pair it to the skill** — the skill cites the ADR as its decision-of-record; the ADR names the operational skill.

## Step-by-step (S3 — close-cascade ratify ceremony)

1. **Ratify in-phase** — flip the ADR `proposed → accepted` at the S3 close (Campaign SO #14 exception; do not defer to a separate phase).
2. **Record in the AAR** pattern-graduation block (instance count, evidence).
3. **Update STATE.md** + queue any upstream-propagation item for the next release gate.

## Worked examples (3 of 3 ratified)

| # | Instance | Mission | ADR(s) | Decision lifted to doctrine |
|---|----------|---------|--------|------------------------------|
| 1 | M3.4 | spec+skill+ADR | [[what/decisions/adr_014_verification_handoff_topology|ADR-014]] | verification-handoff topology (behavioral-primitive-paired-with-skill) |
| 2 | M3.6 | spec+skill+ADR | [[what/decisions/adr_024_airlock_streamline_contract|ADR-024]] | airlock streamline contract |
| 3 | M3.7 | spec+skill+twin-ADR | [[what/decisions/adr_025_iii_decadal_coordination|ADR-025]] + [[what/decisions/adr_026_ledger_observation_shared_primitive|ADR-026]] | III-decadal coordination + ledger-observation shared primitive |

## Related

- [[how/backlog/idea_pattern_graduation_skill_authoring|idea_pattern_graduation_skill_authoring]] — graduation substrate (M3.7 extension block)
- [[how/skills/skill_cross_skill_primitive_composition|skill_cross_skill_primitive_composition]] · [[how/skills/skill_forward_reference_stub_design|skill_forward_reference_stub_design]] — sibling graduations from the same arc
- [[how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p2_m21_context_audit_split|mission_adna_str_p2_m21]] — the `m21_obj4` graduation rubric (≥ 3 instances)
- Related patterns documented-not-yet-authored: `skill_in_phase_adr_ratification`, `skill_twin_adr_ratification` (seeds in the backlog idea above)
- **Skills Protocol**: `how/skills/AGENTS.md`
