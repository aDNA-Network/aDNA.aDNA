---
type: plan
plan_id: mission_m01
campaign_id: campaign_rosetta
title: "M01 — Core Concepts: Triad & Foundations"
status: completed
phase: 1
created: 2026-04-13
updated: 2026-04-13
last_edited_by: agent_stanley
tags: [mission, rosetta, phase1, concepts, foundational]
context_budget: "~15K tokens domain context + ~5K campaign context"
---

# Mission M01 — Core Concepts: Triad & Foundations

## Intent

Write the first 3 concept files that form the knowledge foundation for all subsequent Rosetta content. These files explain the most fundamental aDNA ideas — the triad, the ontology, and the knowledge graph — at dual-audience depth, with self-referential examples drawn from this vault.

## Objectives

| # | Objective | File | Status |
|---|-----------|------|--------|
| 1 | Write the What/How/Who triad concept | `what/concepts/concept_triad.md` | completed |
| 2 | Write the ontology / entity type system concept | `what/concepts/concept_ontology.md` | completed |
| 3 | Write the knowledge graph concept | `what/concepts/concept_knowledge_graph.md` | completed |

## Context Dependencies

- `what/context/adna_core/context_adna_core_paradigm_overview.md` — paradigm overview
- `what/context/adna_core/context_adna_core_entity_definitions.md` — entity type definitions
- `what/docs/adna_standard.md` — upstream spec (§3 Triad, §4 Governance, §5 Directory Structure)
- `how/campaigns/campaign_rosetta/CLAUDE.md` — quality gates, voice guide, token budgets
- `how/templates/template_concept.md` — structural template

## Quality Gates (per campaign CLAUDE.md)

1. Dual audience test — plain-language opening + technical depth
2. Self-reference check — cites concrete vault example from THIS vault
3. Spec citation — normative claims reference `adna_standard.md` section numbers
4. Cross-linking — minimum 2 wikilinks per file
5. Frontmatter complete — all required fields populated
6. Token budget — ~2,000-3,000 tokens per file

## Completion Criteria

All 3 objectives complete, all quality gates passed, mission status set to `completed`, AAR appended.

## AAR (After Action Review)

- **Worked**: Dependency ordering (triad → ontology → knowledge graph) let each file reference its predecessors naturally. Loading paradigm overview + entity definitions context before writing gave strong domain grounding. The dual-audience format (metaphor-first, then spec-precise) worked well for all three topics.
- **Didn't work**: Nothing blocked. Token budget estimate was slightly conservative — files came in at the lower end of the 2K-3K range but are content-complete.
- **Finding**: Forward references to not-yet-written concepts (governance_files, convergence) are necessary at this stage — they'll resolve as M02/M03 files are written.
- **Change**: No process changes needed. The concept template + quality gates workflow is solid for Phase 1 content.
- **Follow-up**: M02 (governance concepts) should resolve the forward references from these 3 files. Consider adding inline wikilinks in body text (not just Related section) for richer graph connectivity.
