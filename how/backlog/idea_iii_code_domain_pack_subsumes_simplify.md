---
type: backlog_idea
status: proposed
priority: low
created: 2026-05-24
last_edited_by: agent_stanley
tags: [backlog, idea, cross_framework, iii, code_domain_pack, advisory, contextcompass_origin]
---

# Idea — III Code-Domain Pack Subsumes `/simplify`-Like Behavior (Advisory to III)

## Problem / Opportunity

ContextCompass's strategic-review artifact §4 (post-planning, 2026-05-24) evaluated 4 composition shapes for the `/simplify` (`code-simplifier` harness subagent) × CC × III scope-overlap problem. Shape (iv) — CC absorbing `/simplify`-like code-simplification heuristics — was REJECTED because it would amend ADR-000 §Decision 3 (CC scope = topology of context graphs, NOT code semantics).

The CC strategic-review artifact §4.4 names a **long-term advisory architecture** as the cleanest replacement: **III INSPECT extends with a code-domain pack** absorbing `/simplify`-like heuristics. Rationale:

- III's modality framework already supports code modality (per III's ADR-000 + the established 4-modality split: text + code + visual + data).
- III's pack pattern is established (MD-B4 7-pack pilot validated in 2026-05-23).
- The constitutional cost is zero (III's scope already includes code modality; no III ADR amendment needed).
- CC stays topology-only permanently per ADR-000 §Decision 3; `/simplify` continues as a harness-level convenience skill.

## Proposed Solution (Advisory to III)

A future III pack — provisional name `code_simplification` — that subsumes the kind of clarity-and-maintainability heuristics the `code-simplifier` subagent applies. Sketch:

- Inputs: code files (any of III's existing code-modality scope: .py, .ts, .go, etc.).
- Heuristics: variable naming clarity, function decomposition opportunities, dead-code identification, redundant-conditional simplification, etc. (broadly the `/simplify` family.)
- Outputs: per-file findings with the standard III INSPECT score + confidence + suggested replacement.
- Composition: orthogonal to other III packs (text-prose-quality, visual-diagram-quality, dataset-quality, etc.); composes naturally on a target carrying both `iii/` wrapper + code files.

## Discussion

- 2026-05-24 (agent_stanley): Filed at ContextCompass S16 ceremony (R9 promotion) per strategic-review artifact §5 R9 + §4.4. **CC has no work in this** — the advisory is to III's roadmap. Operator-discretionary for III to consider.
- **Path note**: The CC strategic-review artifact §5 R9 literally named path `aDNA.aDNA/how/backlog/idea_iii_code_domain_pack_subsumes_simplify.md`; STATE.md Next Steps #2 colloquially said "filed at III backlog". Filed here at `aDNA.aDNA/how/backlog/` per the artifact's literal path (operator-approved plan default); III's owners may prefer to move to `III.aDNA/how/backlog/` for more direct roadmap visibility.
- Cross-framework relationship: today CC + III + `/simplify` are three tools with orthogonal scopes (topology / content-across-modality / code-clarity). The long-term picture collapses to two (CC topology + III content-across-modality including code via this proposed pack); `/simplify` remains as a harness convenience skill but is no longer the canonical code-quality entry point.

## Cross-references

- ContextCompass `how/missions/artifacts/strategic_review_post_planning_2026_05_24.md` §4.4 (long-term composition picture) + §5 R9 (this advisory)
- ContextCompass `what/decisions/adr_000_project_identity.md` §Decision 3 (CC out-of-scope clause naming "Style linter" and "Content optimizer")
- III.aDNA latest pack-pilot precedent: MD-B4 7-pack pilot (2026-05-23) — composite scoring rubric per ADR-007 §3 6-axis (graduation_yield axis caveat per MB4-2)
- III.aDNA `iii/` modular framework — extension surface for new packs

## Origin

ContextCompass post-planning strategic-review S16 ceremony 2026-05-24 — R9 promotion per artifact §5. **CC has no work**; advisory only.

## When to integrate

Operator-discretionary on III's side. CC consumes nothing from this; CC's v0.1.0 release does NOT depend on III adopting this advisory. If III adopts, the future CC composition memo (per CC R4 `idea_simplify_composition_memo.md`) can be updated to point the code-quality scope at III's new pack instead of at `/simplify`.
