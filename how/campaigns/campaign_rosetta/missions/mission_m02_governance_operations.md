---
type: plan
plan_id: mission_m02
campaign_id: campaign_rosetta
title: "M02 — Core Concepts: Governance & Operations"
status: completed
phase: 1
created: 2026-04-13
updated: 2026-04-13
last_edited_by: agent_stanley
tags: [mission, rosetta, phase1, concepts, governance, operations]
context_budget: "~15K tokens domain context + ~5K campaign context"
---

# Mission M02 — Core Concepts: Governance & Operations

## Intent

Write 4 concept files covering aDNA's governance mechanisms and operational principles. These concepts resolve the forward references planted in M01 (concept_triad, concept_ontology, concept_knowledge_graph) and explain HOW the architecture operates — governance files, token selection, convergent narrowing, and dual-audience writing.

## Objectives

| # | Objective | File | Status |
|---|-----------|------|--------|
| 1 | Write the governance files concept (CLAUDE.md, AGENTS.md, MANIFEST.md, STATE.md, README.md) | `what/concepts/concept_governance_files.md` | completed |
| 2 | Write the token/context selection concept | `what/concepts/concept_token_selection.md` | completed |
| 3 | Write the convergence model concept | `what/concepts/concept_convergence.md` | completed |
| 4 | Write the dual-audience writing concept | `what/concepts/concept_dual_audience.md` | completed |

## Context Dependencies

Load before writing:
- `what/context/adna_core/context_adna_core_paradigm_overview.md` — governance files, cold-start path
- `what/context/adna_core/context_adna_core_convergence_model.md` — convergent narrowing, token budgets
- `what/context/adna_core/context_adna_core_context_engineering.md` — context file design, token efficiency
- `what/context/adna_core/context_adna_core_entity_definitions.md` — entity type details
- M01 concepts (concept_triad, concept_ontology, concept_knowledge_graph) — cross-linking targets

## Quality Gates

Every file must pass all 6 campaign gates before marking objective complete:
1. Dual audience test — developer + non-developer legibility
2. Self-reference check — cites concrete vault examples
3. Spec citation — normative claims reference adna_standard.md sections
4. Cross-linking — 2+ wikilinks to related files
5. Frontmatter complete — all required fields populated
6. Plain-language opening — 1-3 sentences a 14-year-old could follow

## Dependencies

- M01 (completed) — forward references from concept_triad, concept_ontology, concept_knowledge_graph

## Handoff Notes

These files resolve the forward references from M01. After M02, concept_governance_files is referenced by concept_triad and concept_ontology; concept_convergence is referenced by concept_ontology and concept_knowledge_graph. M03 concepts can build on all 7 completed concepts.

## After-Action Review (AAR)

- **Worked**: The layered-depth structure (Overview → Why → How → See It → Related) scaled naturally to all four topics. Context loading was efficient — the four adna_core subtopics plus M01 concepts provided sufficient domain grounding. Forward references from M01 resolved cleanly.
- **Didn't work**: Nothing blocked. The four files fit naturally into a single session.
- **Finding**: Governance files, token selection, convergence, and dual audience are deeply interlinked — each concept references 2-3 of the others. This density validates the decision to group them in one mission. Separating them would have created unresolvable forward references.
- **Change**: No process changes. The concept template + quality gate workflow established in M01 continues to work well.
- **Follow-up**: M03 (Advanced Concepts — 6 files) can now build on a 7-concept foundation. The concept graph is becoming dense enough that M03 files will have rich cross-linking targets. Consider whether `concept_context_optimization` and `concept_lattice_composition` need additional context subtopics beyond adna_core.
