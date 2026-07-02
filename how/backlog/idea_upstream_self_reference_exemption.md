---
type: backlog
idea_type: upstream
created: 2026-06-21
updated: 2026-07-02
status: accepted
last_edited_by: agent_rosetta
tags: [backlog, upstream, self_reference, standing_order, governance]
champollion_mission: M3.3
---

# idea (upstream): Standing Order #8 should admit a documented self-reference exemption

## Observation

Rosetta Standing Order #8 ("Self-reference is mandatory" — every artifact must demonstrate its concept against the
vault's own structure) has no escape hatch for artifacts whose concept genuinely does not apply to a
documentation/standard vault.

## Context

Surfaced in `campaign_feedback_loop` M2: [[how/skills/skill_telemetry_wrapper_integration|skill_telemetry_wrapper_integration]]
installs a `feedback/` wrapper into a `<Software>.aDNA` deployment graph. `aDNA.aDNA` governs no software surface, so a
literal self-demo (a live wrapper here) would be the exact ambient-channel anti-pattern the
[[what/patterns/pattern_software_graph_telemetry_feedback|pattern]] forbids. The honest outcome was a **documented
exemption** (self-reference satisfied upstream by the pattern's twice-over self-reference), which sits awkwardly against
SO#8's absolute wording.

## Suggested improvement

Amend SO#8 (and `how/skills/skill_self_reference_check.md`) to recognize a **documented-exemption branch**: when an
artifact's concept does not apply to a docs/standard vault, a recorded exemption **plus** an upstream self-reference
(in a related artifact that *does* apply) satisfies the order. Keeps the discipline strict while admitting the genuine
edge case.

## Affected

- `who/governance/` (Standing Orders) · `how/skills/skill_self_reference_check.md` · the dual-audience / self-reference doctrine.

## Provenance

`campaign_feedback_loop` M02 AAR (2026-06-21).


## Champollion G0 disposition — M (M1.1, 2026-07-02)

**ACCEPT → fix/mission.** Owning mission: `M3.3` (see `champollion_mission`). Not executed inline (M1.1 is a pure disposition sweep). Ratified at Champollion G0 (D2).
