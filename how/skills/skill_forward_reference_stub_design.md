---
type: skill
skill_type: agent
created: 2026-06-30
updated: 2026-06-30
status: active
category: operations
trigger: "Authoring a design spec or skill whose artifact a later mission will consume — add a '## Forward integration with <next mission>' stub that names the WHO + WHAT and defers the WHEN + HOW + WHY to the consumer."
last_edited_by: agent_stanley
tags: [skill, graduation, forward_reference, stub_design, deferral_discipline, substrate_boundary, rosetta]

requirements:
  tools: []
  context: ["how/skills/AGENTS.md", "the producing design spec / skill"]
  permissions: ["write files"]
---

# Skill: Forward-Reference Stub Design

## Overview

When a design spec produces an artifact that a **later** mission will consume, include a `## Forward integration with <next mission>` stub — in **both** the design spec **and** any new skill it produces. The stub names the integration's WHO + WHAT and **defers** the WHEN + HOW + WHY to the consumer mission. The value is in the *deferral*, not the forecasting prose: across the 3 ratified instances, **zero stubs grew into premature implementation work**.

Graduated **2026-05-24 at M3.4** (3 of 3 instances per `m21_obj4`); reinforced to 11/3+ by M3.7. Substrate: [[how/backlog/idea_pattern_graduation_skill_authoring|idea_pattern_graduation_skill_authoring]].

## Trigger

Invoke at design-spec authoring time whenever the artifact you are producing has a named downstream consumer mission. Write the stub before you are tempted to "just sketch the integration while it's fresh."

## Producer / consumer stub template

**Producer mission** (the spec/skill being authored) adds:

```markdown
## Forward integration with <next mission>

- **WHO** — <which surface/persona/vault consumes this>
- **WHAT** — <the specific touch points / artifacts handed off>
- _(WHEN / HOW / WHY deferred to <next mission>)_
```

**Consumer mission** cites the stub as substrate via a frontmatter field:

```yaml
prerequisite_artifacts:
  - <path to the producer spec/skill> §Forward integration
```

This forms a producer/consumer **reference pair** — symmetric, so the seam is discoverable from either end.

## Deferral discipline (the value-source)

| Name it (producer) | Defer it (consumer) |
|--------------------|---------------------|
| **WHO** — the consuming surface | **WHEN** — sequencing/trigger |
| **WHAT** — the touch points | **HOW** — implementation |
| | **WHY** — the design rationale at consume-time |

Naming WHO + WHAT scopes the consumer's S1 entry (no fresh re-discovery). Deferring WHEN + HOW + WHY preserves the **substrate-pure mission boundary** — it keeps consumer-mission implementation work out of the producer mission, honoring the design-at-P3 / propagate-at-P6 pattern.

## Worked examples (3 of 3 ratified at M3.4)

| # | Instance | Mission | Stub location | Forecast content (WHO+WHAT) |
|---|----------|---------|---------------|------------------------------|
| 1 | T6 spec + new skill | M3.3 | T6 design spec + `skill_obsidian_integration_test` | named Local REST API + MCP + profile flag `mode` |
| 2 | T7 spec + T7 skill | M3.4 | T7 spec + `skill_verification_handoff` §Forward integration | named HOME-polish dispatch criteria + modular-III agent/operator split |
| 3 | T8 spec + T8d skill | M3.4 | T8 spec + `skill_obsidian_agent_inspect` §Forward integration | named modular-III auto-inspection criteria + HOME-polish first-contact surface |

## Anti-patterns

- **Premature implementation** — "might as well sketch the API while we're here." NO; that pulls consumer work into the producer mission.
- **Missing stub** — the consumer mission re-discovers the seam from scratch at S1 (entry-cost regression).
- **Stub-as-implementation drift** — a stub that quietly accretes HOW/WHY until it is a de-facto spec for the consumer. Keep it to WHO + WHAT, ≥ 1 paragraph, no more.

## Related

- [[how/backlog/idea_pattern_graduation_skill_authoring|idea_pattern_graduation_skill_authoring]] — graduation substrate + evidence tables
- [[how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m33_obsidian_stabilization_ux_and_tests|M3.3 AAR]] — 1st instance (T6)
- [[how/skills/skill_verification_handoff|skill_verification_handoff]] · [[how/skills/skill_obsidian_agent_inspect|skill_obsidian_agent_inspect]] — instances 2 & 3 (the `## Forward integration` sections)
- [[how/skills/skill_cross_skill_primitive_composition|skill_cross_skill_primitive_composition]] — sibling graduation (delegation chains)
- **Skills Protocol**: `how/skills/AGENTS.md`
