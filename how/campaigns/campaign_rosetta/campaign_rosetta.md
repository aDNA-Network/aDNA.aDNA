---
campaign_id: campaign_rosetta
type: campaign
title: "Operation Rosetta — Self-Referential aDNA Context Graph"
owner: stanley
status: active
current_phase: 7
phase_count: 7
mission_count: 35
estimated_sessions: "65-85"
estimation_class: content-novel
priority: high
created: 2026-04-13
updated: 2026-04-24
last_edited_by: agent_rosetta
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
| **3: Website v1** | **Complete** | M09-M12 | site live | AstroJS docs site via SiteForge (full content inventory) |
| **4: The Who** | **Complete** | M13-M15 | 37 files | Community, adopters, glossary |
| **4.5: III Site Improvements** | **Complete** | M20-M23 | site upgrade | Hero, new sections, components, OG images, III review |
| **5: The How** | **Complete** | M16-M18 | 11 files | Publishing, workshops, lattices |
| **6: Website v2** | **Complete** | M19 | 112 pages | How section: 11 new pages + 4 indexes, MDX escaping, OG image |
| **7: 100-Cycle III Loop** | Planned | M24-M35 | site perfection | 100 iterative improvement cycles across 10 themed decadals |

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
| M10 | Site Scaffold & Content Collections | **completed** | Astro 6 project at aDNA.aDNA/site/, clean build | M09 |
| M11 | Content Integration | **completed** | All pages populated, internal links, homepage | M10 |
| M12 | Quality Gates & Launch | **completed** | 10 gates passing, Vercel deploy, live site | M11 |

### Phase 4: The Who

| Mission | Title | Status | Files | Dependencies |
|---------|-------|--------|-------|-------------|
| M13 | Community Architecture | **completed** | 3 community files | Phase 1 |
| M14 | Adopter Personas | **completed** | 5 persona cards | M08 |
| M15 | Glossary + Governance | **completed** | 25 glossary entries + 1 index + 3 governance docs | Phase 1 |

### Phase 4.5: III Site Improvements

| Mission | Title | Status | Deliverables | Dependencies |
|---------|-------|--------|-------------|-------------|
| M20 | Hero & Homepage Redesign | **completed** | Banner hero, 3 new homepage sections, responsive | M12, M14 |
| M21 | New Content Sections | **completed** | 37 new pages (25 glossary, 4 community, 5 adopters, 3 indexes) | M12-M15 |
| M22 | Component Polish & Media Blocking | **completed** | MediaPlaceholder, MermaidDiagram, enhanced Callout/CardGrid | M20 |
| M23 | OG Images & III Review | **completed** | 5 OG images, section-aware selection, III review findings | M20-M22 |

### Phase 5: The How

| Mission | Title | Status | Files | Dependencies |
|---------|-------|--------|-------|-------------|
| M16 | Publishing Pipeline | **completed** | 3 files | Phases 1-4 |
| M17 | Workshop Kits | **completed** | 3 workshops + facilitation guide | Phase 2 |
| M18 | Lattice Definitions + Closeout | **completed** | 4 lattice YAMLs + Phase 5 closeout | All phases |

### Phase 6: Website v2

| Mission | Title | Status | Deliverables | Dependencies |
|---------|-------|--------|-------------|-------------|
| M19 | Website Review & Polish | **completed** | How section: 11 content pages + 4 indexes, MDX escaping, OG image | Phases 4-5 |

### Phase 7: 100-Cycle III Loop

| Mission | Title | Cycles | Status | Description |
|---------|-------|--------|--------|-------------|
| M24 | III Loop Setup & Baseline | — | **completed** | Create skills, cycle tracker, measurement infrastructure, initial baseline |
| M25 | D1: Accessibility Perfection | 1-10 | **completed** | WCAG AA → Lighthouse a11y 100, keyboard nav, screen reader, focus indicators |
| M26 | D2: Content Clarity Sprint | 11-20 | **completed** | Anti-slop, progressive disclosure, reading flow, plain-language openings |
| M27 | D3: Navigation & IA | 21-30 | complete (ranker 4.83) | Information architecture, cross-linking, breadcrumbs, time-to-first-insight |
| M28 | D4: Visual Identity & First-Contact | 31-40 | complete (ranker 4.91) | Nav 7→5, emoji removed, sections 7→4, trust strip, typography, persona accents, meta tags, Reviewer Lens Pass. D4 +0.08 overall. |
| M29 | D5: Mobile Experience | 41-50 | **complete (ranker 4.94)** | Section padding mobile, touch targets 44px, overflow-wrap, PrevNextNav 1-col mobile, CodeBlock copy visible, G9 expanded (42 tests), tap feedback. Delight 4.50→4.71 (+0.21). |
| M30 | D6: Performance & Loading | 51-60 | **complete (ranker 4.96)** | JetBrains Mono optional, AVIF hero (91% smaller), prefetch on nav+CTAs, font preloads, mobile LH 98-100. Delight 4.71→4.81 (+0.10). |
| M31 | D7: SEO & Discoverability | 61-70 | **complete (ranker 4.97)** | JSON-LD 55%→97%, heading hierarchy 45 violations→0, Patterns a11y 98→100, 6 concept→tutorial cross-links. AAR filed. |
| M32 | D8: Interaction Depth | 71-80 | **complete (ranker 4.99)** | Demo/media placeholder replacements, clipboard-copy on CodeBlocks, architecture diagrams on concept pages, "Try this in Claude Code" CTAs, progressive disclosure for glossary. Reviewer Lens Pass: Design Critic + Newcomer Stress-Tester. Delight 4.83→4.99 (+0.16). |
| M33 | D9: Narrative Onboarding | 81-90 | pending | /get-started install pointer + expected output (F-08), onboarding flows, trust signal relocation (F-10). **Reviewer Lens Pass mandatory** (Content Strategist, Information Architect, Newcomer Stress-Tester). |
| M34 | D10: Hardening & Closeout | 91-100 | pending | Regression testing, final audit, measurement dashboard |
| M35 | Phase 7 Closeout & Campaign AAR | — | pending | Final Lighthouse, full persona ranker, campaign-level AAR |

> **Cycle protocol**: Each cycle follows `skill_iii_cycle.md` (7-step: Measure → Orient → Select → Implement → Re-measure → Validate → Record). Every 10th cycle runs `skill_decadal_aar.md` (8-step persona ranker review). Decadal themes focus effort but don't prohibit opportunistic fixes.

> **Phase exit gate**: All 100 cycles completed. Final Lighthouse audit shows no regressions from baseline. All persona ranker dimensions average >= 4.0. Campaign AAR filed.

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
