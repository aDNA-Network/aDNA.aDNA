---
type: plan
plan_id: mission_m04
campaign_id: campaign_rosetta
title: "M04 — Pattern Library"
status: completed
phase: 1
created: 2026-04-14
updated: 2026-04-14
last_edited_by: agent_stanley
tags: [mission, rosetta, phase1, patterns]
context_budget: "~10K tokens domain context + ~5K campaign context"
---

# Mission M04 — Pattern Library

## Intent

Write 8 pattern files documenting reusable aDNA architectural patterns across all four categories (structural, operational, content, federation). Patterns are the "how to think about it" complement to the concept library's "what it is." Each pattern follows the Problem → Solution → When to Use → Example → Anti-Pattern structure.

## Objectives

| # | Objective | File | Category | Status |
|---|-----------|------|----------|--------|
| 1 | Question test — sorting content into the triad | `what/patterns/pattern_question_test.md` | structural | completed |
| 2 | AGENTS.md routing — directory-level load/skip decisions | `what/patterns/pattern_agents_md.md` | structural | completed |
| 3 | Base/extension — extending ontology without breaking core | `what/patterns/pattern_base_extension.md` | structural | completed |
| 4 | Mission decomposition — breaking work into claimable objectives | `what/patterns/pattern_mission_decomposition.md` | operational | completed |
| 5 | Context recipe — pre-defined multi-topic assemblies | `what/patterns/pattern_context_recipe.md` | operational | completed |
| 6 | Dual-audience writing — serving developers and newcomers simultaneously | `what/patterns/pattern_dual_audience.md` | content | completed |
| 7 | FAIR envelope — metadata for findability and reuse | `what/patterns/pattern_fair_envelope.md` | federation | completed |
| 8 | Federation readiness — preparing lattices for cross-instance sharing | `what/patterns/pattern_federation_readiness.md` | federation | completed |

## Context Dependencies

- M01-M03 concepts (all 13) — cross-linking targets and domain grounding
- `what/context/adna_core/context_adna_core_paradigm_overview.md` — triad, governance
- `what/context/adna_core/context_adna_core_context_engineering.md` — context recipes, quality
- `what/context/adna_core/context_adna_core_federation.md` — federation, composition
- `what/context/adna_core/context_adna_core_fair_mapping.md` — FAIR fields
- Campaign CLAUDE.md — quality gates, token budgets (1,500-2,500 per pattern)

## Quality Gates

Same 6 gates as all campaign content:
1. Dual audience test
2. Self-reference check (Example section uses THIS vault)
3. Spec citation
4. Cross-linking (2+ wikilinks)
5. Frontmatter complete
6. Plain-language problem statement

## Dependencies

- M01-M03 (completed) — concept library provides cross-linking targets and vocabulary

## After-Action Review (AAR)

- **Worked**: The Problem → Solution → When to Use → Example → Anti-Pattern template produced consistent, scannable files. Patterns are more compact than concepts (~80-100 lines vs. ~90-120 lines) because they focus on a single decision/technique rather than explaining a broad concept. Cross-linking between patterns and concepts is dense — every pattern references 2-3 concepts and 1-2 sibling patterns.
- **Didn't work**: Nothing blocked. The 8 patterns were independent enough to write sequentially without dependency issues.
- **Finding**: Patterns naturally cluster by category — structural (question_test, agents_md, base_extension), operational (mission_decomposition, context_recipe), content (dual_audience), federation (fair_envelope, federation_readiness). This categorization maps cleanly to the `pattern_category` frontmatter field and will help agents navigate the pattern library.
- **Change**: No process changes. The quality gates applied seamlessly to the pattern template.
- **Follow-up**: M05 (comparisons — 5 files) is the final Phase 1 mission. Comparisons should use both concepts and patterns as vocabulary for positioning aDNA against alternatives. After M05, Phase 1 is complete and requires user approval before advancing to Phase 2.
