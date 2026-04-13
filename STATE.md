---
type: state
created: 2026-04-13
updated: 2026-04-13
status: active
last_edited_by: agent_stanley
tags: [state, governance]
---

# Operational State

Dynamic operational snapshot for cold-start orientation. Updated each session.

## Current Phase

**Phase 0 — Scaffold complete.** Project forked from aDNA base template. Governance customized (Rosetta persona, 10 standing orders). Ontology extended with 10 new entity types (concepts, tutorials, patterns, glossary, use_cases, comparisons, community, adopters, workshops, publishing). Campaign Rosetta created with 5-phase structure. Ready for Phase 1 content creation.

## Active Campaign

**Operation Rosetta** (`how/campaigns/campaign_rosetta/`) — build the self-referential aDNA context graph.

| Phase | Status | Missions | Content Files |
|-------|--------|----------|---------------|
| Phase 0: Scaffold | Complete | M00 | 0 content, 10 AGENTS.md, 10 templates, 2 skills |
| Phase 1: Core Content | Next | M01-M05 | 13 concepts + 8 patterns + 5 comparisons |
| Phase 2: Human Path | Planned | M06-M08 | 9 tutorials + 6 use cases |
| Phase 3: The Who | Planned | M09-M11 | Community + adopters + glossary |
| Phase 4: The How | Planned | M12-M14 | Publishing + workshops + lattices |
| Phase 5: Website | Deferred | — | AstroJS site (out of scope) |

## What's Working

- aDNA triad deployed (what/how/who, 5 governance files, 14 base + 10 extension entity types)
- Rosetta persona active (self-referential, dual-audience, spec-citing)
- Inherited: context library (5 topics, 27 subtopics, ~75K tokens), 22 base templates, 13 base skills, lattice tools
- 10 ontology extensions scaffolded (directories + AGENTS.md + templates)
- 2 project-specific skills (dual_audience_review, self_reference_check)
- Campaign Rosetta created with phase structure and mission board
- Self-referential design: vault structure demonstrates aDNA concepts

## Active Blockers

None.

## Next Steps

1. Begin **Phase 1, Mission M01** — Core Concepts: The Triad & Foundations
   - Create `concept_triad.md`, `concept_ontology.md`, `concept_knowledge_graph.md`
   - Load context: `adna_core/paradigm_overview`, `adna_core/entity_definitions`
2. After M01: proceed through M02-M05 (governance concepts, advanced concepts, patterns, comparisons)
3. Phase gate: user approval required before advancing to Phase 2
