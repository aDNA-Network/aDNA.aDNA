---
type: plan
plan_id: mission_m03
campaign_id: campaign_rosetta
title: "M03 — Core Concepts: Advanced"
status: completed
phase: 1
created: 2026-04-13
updated: 2026-04-13
last_edited_by: agent_stanley
tags: [mission, rosetta, phase1, concepts, advanced]
context_budget: "~15K tokens domain context + ~5K campaign context"
---

# Mission M03 — Core Concepts: Advanced

## Intent

Write 6 advanced concept files completing the concept library. These concepts cover aDNA's deeper architectural patterns: context optimization, lattice composition, open standard positioning, agentic literacy, context commons, and FAIR metadata. Together with the 7 concepts from M01-M02, these 13 files form the complete concept layer of the vault.

## Objectives

| # | Objective | File | Status |
|---|-----------|------|--------|
| 1 | Write the context optimization concept (designing context for token efficiency) | `what/concepts/concept_context_optimization.md` | completed |
| 2 | Write the lattice composition concept (composing lattices from modules) | `what/concepts/concept_lattice_composition.md` | completed |
| 3 | Write the FAIR metadata concept (Findable, Accessible, Interoperable, Reusable) | `what/concepts/concept_fair_metadata.md` | completed |
| 4 | Write the open standard concept (aDNA as extensible, community-governed standard) | `what/concepts/concept_open_standard.md` | completed |
| 5 | Write the agentic literacy concept (literacy for AI-augmented knowledge work) | `what/concepts/concept_agentic_literacy.md` | completed |
| 6 | Write the context commons concept (community-shared context as public good) | `what/concepts/concept_context_commons.md` | completed |

## Context Dependencies

Load before writing:
- `what/context/adna_core/context_adna_core_paradigm_overview.md` — general grounding
- `what/context/adna_core/context_adna_core_context_engineering.md` — for context_optimization
- `what/context/adna_core/context_adna_core_lattice_design.md` — for lattice_composition
- `what/context/adna_core/context_adna_core_federation.md` — for lattice_composition, open_standard, context_commons
- `what/context/adna_core/context_adna_core_fair_mapping.md` — for fair_metadata, context_commons
- `what/context/object_standards/context_object_standards_overview.md` — for fair_metadata, lattice_composition
- M01+M02 concepts (all 7) — cross-linking targets

## Quality Gates

Every file must pass all 6 campaign gates before marking objective complete:
1. Dual audience test — developer + non-developer legibility
2. Self-reference check — cites concrete vault examples
3. Spec citation — normative claims reference adna_standard.md sections
4. Cross-linking — 2+ wikilinks to related files
5. Frontmatter complete — all required fields populated
6. Plain-language opening — 1-3 sentences a 14-year-old could follow

## Dependencies

- M01 (completed) — foundational concepts: triad, ontology, knowledge_graph
- M02 (completed) — governance concepts: governance_files, token_selection, convergence, dual_audience

## Handoff Notes

M03 completes the concept library (13 total files). After M03, the vault has a dense cross-linked concept layer for M04 (pattern library) and M05 (comparisons) to build on. The advanced concepts introduce new cross-linking targets not available in M01-M02: lattice composition, FAIR metadata, and federation/commons themes.

## After-Action Review (AAR)

- **Worked**: The concept template and workflow established in M01-M02 scaled cleanly to 6 advanced topics. Context loading was efficient — 6 adna_core subtopics plus object_standards overview (~6K tokens) provided sufficient domain grounding for all concepts. Cross-linking density improved significantly: each M03 file links to 3-4 other concepts, and several M03 concepts cross-link each other (fair_metadata ↔ lattice_composition ↔ open_standard ↔ context_commons).
- **Didn't work**: Three concepts (open_standard, agentic_literacy, context_commons) had no dedicated context file — they required synthesis from multiple sources and vault-level knowledge. This worked but required more creative authoring than the other three.
- **Finding**: The 6 M03 concepts naturally split into two groups: "technical" (context_optimization, lattice_composition, fair_metadata) and "vision" (open_standard, agentic_literacy, context_commons). The technical concepts were grounded in specific context files; the vision concepts were grounded in the vault's own design philosophy and the spec's introduction. Both groups benefited from the self-referential vault structure.
- **Change**: No process changes needed. The dual-audience + self-reference + spec-citation quality gates continue to enforce consistent quality.
- **Follow-up**: The concept library is now complete (13 files). M04 (pattern library — 8 files) and M05 (comparisons — 5 files) can build on a dense concept graph. Patterns should reference concepts by wikilink; comparisons should contrast aDNA against alternatives using the concepts as the vocabulary for aDNA's position.
