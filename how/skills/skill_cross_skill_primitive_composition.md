---
type: skill
skill_type: agent
created: 2026-06-30
updated: 2026-06-30
status: active
category: operations
trigger: "Authoring a new skill (or design spec) that needs a capability an existing skill already provides — delegate to the primitive rather than reimplement it, and document the delegation chain + degradation cascade."
last_edited_by: agent_stanley
tags: [skill, graduation, cross_skill_composition, delegation, degradation_cascade, rosetta]

requirements:
  tools: []
  context: ["how/skills/AGENTS.md", "the existing skill whose primitive is being reused"]
  permissions: ["write files"]
---

# Skill: Cross-Skill Primitive Composition

## Overview

When a new skill needs a capability that an existing skill already implements, **DELEGATE (cite + invoke) — never REIMPLEMENT**. Composing skills from each other's primitives keeps each capability single-sourced: a fix to the primitive propagates to every consumer, and the responsibility boundary at each layer stays legible to an operator reading the chain.

This skill graduated **2026-05-24 at M3.4** (3 of 3 use instances per the `m21_obj4` rubric) and was reinforced to 5/5 by M3.7. It documents ratified doctrine — see [[how/backlog/idea_pattern_graduation_skill_authoring|idea_pattern_graduation_skill_authoring]] for the full graduation substrate.

## Trigger

Invoke when authoring a skill or design spec and you reach a step whose capability already lives in another skill (verification, canonicalization, dispatch, polish, …). The temptation is to inline a copy "because it's small." Don't — delegate.

## The discipline

1. **Delegate, don't reimplement.** Cite the upstream skill and invoke it (`DELEGATES to skill_X`); do not copy its steps.
2. **Document the chain.** Record every layer the delegation reaches, with the responsibility owned at each layer (table below).
3. **≥ 2 delegation paths → degradation cascade.** Any skill with two or more delegation paths SHOULD document a per-path degradation cascade (the 2nd-order discipline that emerged at M3.4).
4. **Respect the operator-traceable ceiling.** Keep chains ≤ 5–6 layers; a 5th+ layer should trigger refactor consideration.

## Chain documentation template

| Layer | Skill | Responsibility | Exit-code semantics |
|-------|-------|----------------|---------------------|
| 1 | `skill_new` | orchestration + the new capability | 0 = pass; non-0 = which sub-step failed |
| 2 | `skill_delegated` | the reused primitive | propagates upstream verbatim |
| … | … | … | … |

State the **responsibility boundary** at each layer in one clause — what that layer owns and what it hands off.

## Degradation cascade contract

For each delegation path, name the fallback sequence when the preferred path is unavailable:

```
agent_driven  →  hybrid  →  operator_side
```

Each arrow is a documented downgrade (e.g. MCP-driven inspection → REST probe → operator runs the check by hand). The cascade is the safety net that keeps the skill usable when one delegation path goes dark.

## Operator-traceable ceiling

A human reading the chain must be able to follow it end-to-end. Past ~5–6 layers the chain stops being traceable and becomes a refactor signal — collapse intermediate layers or extract a shared primitive.

## Worked examples (3 of 3 ratified at M3.4)

| # | Instance | Mission | Shape | Chain |
|---|----------|---------|-------|-------|
| 1 | T6 → M3.2 skill | M3.3 | linear 4-layer | `skill_obsidian_integration_test` O4 DELEGATES to `skill_obsidian_canonicalize --verify` → `setup.sh --verify` → Obsidian state |
| 2 | T7 → T6 skill | M3.4 | linear 5-layer | `skill_verification_handoff` DELEGATES to T6 for binary-presence verification → inherits the M3.3 chain (depth 4) → Obsidian state (depth 5) |
| 3 | T8d → T6 + T7 + M3.2 | M3.4 | branching graph (3 paths) | `skill_obsidian_agent_inspect` TRIPLE DELEGATION: path A → T6 → M3.2 → setup.sh; path B → T7 (dispatch); path C → T6 (operator-side fallback in the degradation cascade) |

## Cross-vault propagation

Each downstream vault's implementation-class mission may delegate to aDNA.aDNA primitives via a `federation_ref` block — the composition compounds across the lattice without re-sourcing the primitive.

## Related

- [[how/backlog/idea_pattern_graduation_skill_authoring|idea_pattern_graduation_skill_authoring]] — graduation substrate + evidence tables
- [[how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m34_verification_handoff_and_agent_inspection|M3.4 AAR]] — ratification (3/3) + the branching-graph instance
- [[how/skills/skill_obsidian_integration_test|skill_obsidian_integration_test]] · [[how/skills/skill_verification_handoff|skill_verification_handoff]] · [[how/skills/skill_obsidian_agent_inspect|skill_obsidian_agent_inspect]] — the three worked instances
- [[how/skills/skill_forward_reference_stub_design|skill_forward_reference_stub_design]] — sibling graduation (producer/consumer mission seams)
- **Skills Protocol**: `how/skills/AGENTS.md`
