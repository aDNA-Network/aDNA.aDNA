---
campaign_id: campaign_rosetta
type: campaign
title: "Operation Rosetta — Self-Referential aDNA Context Graph"
owner: stanley
status: active
current_phase: 3
phase_count: 6
mission_count: 19
estimated_sessions: "30-40"
estimation_class: content-novel
priority: high
created: 2026-04-13
updated: 2026-04-14
last_edited_by: agent_stanley
tags: [campaign, rosetta, adna, documentation, education, website]
---

# Operation Rosetta

Build the self-referential aDNA context graph at `aDNA.aDNA/` — a vault that teaches the aDNA standard by using the aDNA standard. The structure IS the lesson.

## Strategic Intent

1. **Self-demonstrating** — a visitor learns aDNA by navigating aDNA
2. **Dual-audience** — developers get technical depth; lay users get plain-language clarity
3. **Web-publishable** — content feeds an AstroJS documentation site (Phase 5, deferred)
4. **Ecosystem-situated** — references the broader Lattice Protocol ecosystem

## Phase Structure

| Phase | Status | Missions | Content | Description |
|-------|--------|----------|---------|-------------|
| **0: Scaffold** | Complete | M00 | 0 content | Fork, governance, ontology extension, campaign setup |
| **1: Core Content** | **Complete** | M01-M05 | 26/26 files | Concepts, patterns, comparisons |
| **2: Human Path** | **Complete** | M06-M08 | 15/15 files | Tutorials, use cases |
| **3: Website v1** | **Active** | M09-M12 | site build | AstroJS docs site via SiteForge (full content inventory) |
| **4: The Who** | Planned | M13-M15 | ~33 files | Community, adopters, glossary |
| **5: The How** | Planned | M16-M18 | ~12 files | Publishing, workshops, lattices |
| **6: Website v2** | Planned | M19 | site polish | Final content sync, quality pass, brand refinement |

> **Restructured 2026-04-14**: Website moved from deferred Phase 5 to active Phase 3. Content graph phases (Who, How) slide to Phases 4-5. New Phase 6 adds a final website polish pass after all content is complete.

## Mission Board

### Phase 1: Core Content — The What

| Mission | Title | Status | Files | Dependencies |
|---------|-------|--------|-------|-------------|
| M01 | Core Concepts: Triad & Foundations | **completed** | concept_triad, concept_ontology, concept_knowledge_graph | Phase 0 |
| M02 | Core Concepts: Governance & Operations | **completed** | concept_governance_files, concept_token_selection, concept_convergence, concept_dual_audience | M01 |
| M03 | Core Concepts: Advanced | **completed** | concept_context_optimization, concept_lattice_composition, concept_open_standard, concept_agentic_literacy, concept_context_commons, concept_fair_metadata | M01, M02 |
| M04 | Pattern Library | **completed** | 8 pattern files | M01, M02 |
| M05 | Comparisons | **completed** | 5 comparison files (vs PARA, Zettelkasten, Notion, Johnny.Decimal, plain markdown) | M01-M03 |

### Phase 2: Human Path

| Mission | Title | Status | Files | Dependencies |
|---------|-------|--------|-------|-------------|
| M06 | Beginner Tutorials | **completed** | 3 tutorials | Phase 1 |
| M07 | Intermediate Tutorials | **completed** | 3 tutorials | M06 |
| M08 | Advanced Tutorials + Use Cases | **completed** | 3 tutorials + 6 use cases | M07 |

### Phase 3: Website v1

| Mission | Title | Status | Deliverables | Dependencies |
|---------|-------|--------|-------------|-------------|
| M09 | Website Architecture & Branding | **completed** | branding.json, site IA, content mapping, gap list | Phase 2 |
| M10 | Site Scaffold & Content Collections | pending | Astro 6 project at aDNA.aDNA/site/, clean build | M09 |
| M11 | Content Integration | pending | All pages populated, internal links, homepage | M10 |
| M12 | Quality Gates & Launch | pending | 10 gates passing, Vercel deploy, live site | M11 |

### Phase 4: The Who

| Mission | Title | Status | Files | Dependencies |
|---------|-------|--------|-------|-------------|
| M13 | Community Architecture | pending | 3 community files | Phase 1 |
| M14 | Adopter Personas | pending | 5 persona cards | M08 |
| M15 | Glossary + Governance | pending | ~25 glossary entries + 3 governance docs | Phase 1 |

### Phase 5: The How

| Mission | Title | Status | Files | Dependencies |
|---------|-------|--------|-------|-------------|
| M16 | Publishing Pipeline | pending | 3 files | Phases 1-4 |
| M17 | Workshop Kits | pending | 3 workshops + facilitation guide | Phase 2 |
| M18 | Lattice Definitions + Closeout | pending | 4 lattice YAMLs + campaign AAR | All phases |

### Phase 6: Website v2

| Mission | Title | Status | Deliverables | Dependencies |
|---------|-------|--------|-------------|-------------|
| M19 | Website Review & Polish | pending | Phase 4-5 content synced, glossary section, quality re-run | Phases 4-5 |

## Quality Gates

Every content file must pass before marking its mission objective complete:

1. **Dual audience test** — legible to both developers and non-developers (`skill_dual_audience_review`)
2. **Self-reference check** — cites concrete vault example (`skill_self_reference_check`)
3. **Spec citation** — normative claims reference `adna_standard.md` section numbers
4. **Cross-linking** — minimum 2 wikilinks to related files
5. **Frontmatter complete** — all required fields populated per entity template

## Token Budget

- **Campaign context** (this doc + campaign CLAUDE.md): ~5K tokens
- **Active mission context**: ~2-3K tokens per mission
- **Domain context per session**: ~15K tokens (loaded from `what/context/adna_core/`)

## Success Criteria

1. A new user can clone aDNA.aDNA/, open in Obsidian, and understand aDNA within 30 minutes
2. A developer can find the technical spec for any aDNA concept within 2 clicks from root
3. A non-technical user can explain what aDNA does after reading 3 concept files
4. The vault validates against its own standard — AGENTS.md present, frontmatter populated, concepts interlinked
5. The project itself is a reference implementation other aDNA projects can study
