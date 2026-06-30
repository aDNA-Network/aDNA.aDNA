---
type: artifact
mission: m09
campaign: campaign_rosetta
title: "Site Information Architecture"
created: 2026-04-14
updated: 2026-04-14
last_edited_by: agent_stanley
tags: [artifact, ia, website, sitemap, navigation]
status: completed
---

# Site Information Architecture

Information architecture for the aDNA documentation site at `aDNA.aDNA/site/`. Built on the SiteForge `documentation` archetype (Astro 6, 3-column layout).

## Sitemap

```
/                                    Homepage (hero + value prop + CTA)
│
├── /learn/                          Learn index (card grid)
│   ├── /learn/what-is-adna          What is aDNA? (overview page) [NEW]
│   │
│   ├── /learn/concepts/             Concepts index (card grid)
│   │   ├── /learn/concepts/triad
│   │   ├── /learn/concepts/ontology
│   │   ├── /learn/concepts/knowledge-graph
│   │   ├── /learn/concepts/governance-files
│   │   ├── /learn/concepts/token-selection
│   │   ├── /learn/concepts/convergence
│   │   ├── /learn/concepts/dual-audience
│   │   ├── /learn/concepts/context-optimization
│   │   ├── /learn/concepts/lattice-composition
│   │   ├── /learn/concepts/open-standard
│   │   ├── /learn/concepts/agentic-literacy
│   │   ├── /learn/concepts/context-commons
│   │   └── /learn/concepts/fair-metadata
│   │
│   ├── /learn/tutorials/            Tutorials index (grouped by difficulty)
│   │   ├── /learn/tutorials/first-claude-md          [beginner, 20 min]
│   │   ├── /learn/tutorials/navigate-a-vault         [beginner, 15 min]
│   │   ├── /learn/tutorials/question-test             [beginner, 15 min]
│   │   ├── /learn/tutorials/write-a-context-file     [intermediate, 30 min]
│   │   ├── /learn/tutorials/design-a-mission         [intermediate, 25 min]
│   │   ├── /learn/tutorials/extend-the-ontology      [intermediate, 25 min]
│   │   ├── /learn/tutorials/build-a-lattice          [advanced, 30 min]
│   │   ├── /learn/tutorials/run-a-campaign           [advanced, 30 min]
│   │   └── /learn/tutorials/federate-a-vault         [advanced, 30 min]
│   │
│   └── /learn/comparisons/         Comparisons index (card grid)
│       ├── /learn/comparisons/adna-vs-para
│       ├── /learn/comparisons/adna-vs-zettelkasten
│       ├── /learn/comparisons/adna-vs-notion
│       ├── /learn/comparisons/adna-vs-johnny-decimal
│       └── /learn/comparisons/adna-vs-plain-markdown
│
├── /use-cases/                      Use Cases index (card grid)
│   ├── /use-cases/solo-developer
│   ├── /use-cases/startup
│   ├── /use-cases/research-lab
│   ├── /use-cases/enterprise-team
│   ├── /use-cases/educator
│   └── /use-cases/open-source-project
│
├── /patterns/                       Patterns index (card grid)
│   ├── /patterns/question-test
│   ├── /patterns/agents-md
│   ├── /patterns/dual-audience
│   ├── /patterns/base-extension
│   ├── /patterns/context-recipe
│   ├── /patterns/fair-envelope
│   ├── /patterns/mission-decomposition
│   └── /patterns/federation-readiness
│
├── /reference/                      Reference index (card grid)
│   ├── /reference/specification             (adna_standard.md)
│   ├── /reference/design-rationale          (adna_design.md)
│   ├── /reference/reading-guide             (standard_reading_guide.md)
│   ├── /reference/agent-first-guide         (agent_first_guide.md)
│   ├── /reference/migration-guide           (migration_guide.md)
│   ├── /reference/tool-setup                (tool_setup_guide.md)
│   ├── /reference/governance-model          (standard_governance.md)
│   └── /reference/quality-rubric            (context_quality_rubric.md)
│
├── /get-started                     Get Started quickstart [NEW]
└── /404                             404 page [NEW]
```

**Total pages**: 48 content pages + 6 index pages + homepage + get-started + 404 = **57 pages**

## Sidebar Navigation

The sidebar uses the SiteForge `SidebarNav.astro` component. Groups and ordering:

### Group: Learn

| Order | Page | Label |
|-------|------|-------|
| 1 | /learn/what-is-adna | What is aDNA? |
| — | **Concepts** (subgroup) | |
| 2 | /learn/concepts/triad | The Triad |
| 3 | /learn/concepts/ontology | The Ontology |
| 4 | /learn/concepts/knowledge-graph | The Knowledge Graph |
| 5 | /learn/concepts/governance-files | Governance Files |
| 6 | /learn/concepts/token-selection | Token Selection |
| 7 | /learn/concepts/convergence | The Convergence Model |
| 8 | /learn/concepts/dual-audience | Dual Audience |
| 9 | /learn/concepts/context-optimization | Context Optimization |
| 10 | /learn/concepts/lattice-composition | Lattice Composition |
| 11 | /learn/concepts/open-standard | Open Standard |
| 12 | /learn/concepts/agentic-literacy | Agentic Literacy |
| 13 | /learn/concepts/context-commons | Context Commons |
| 14 | /learn/concepts/fair-metadata | FAIR Metadata |
| — | **Tutorials** (subgroup) | |
| 15 | /learn/tutorials/first-claude-md | Create Your First CLAUDE.md |
| 16 | /learn/tutorials/navigate-a-vault | Navigate an aDNA Vault |
| 17 | /learn/tutorials/question-test | Apply the Question Test |
| 18 | /learn/tutorials/write-a-context-file | Write a Context File |
| 19 | /learn/tutorials/design-a-mission | Design a Mission |
| 20 | /learn/tutorials/extend-the-ontology | Extend the Ontology |
| 21 | /learn/tutorials/build-a-lattice | Build a Lattice |
| 22 | /learn/tutorials/run-a-campaign | Run a Campaign |
| 23 | /learn/tutorials/federate-a-vault | Federate a Vault |
| — | **Comparisons** (subgroup) | |
| 24 | /learn/comparisons/adna-vs-para | aDNA vs. PARA |
| 25 | /learn/comparisons/adna-vs-zettelkasten | aDNA vs. Zettelkasten |
| 26 | /learn/comparisons/adna-vs-notion | aDNA vs. Notion |
| 27 | /learn/comparisons/adna-vs-johnny-decimal | aDNA vs. Johnny.Decimal |
| 28 | /learn/comparisons/adna-vs-plain-markdown | aDNA vs. Plain Markdown |

### Group: Use Cases

| Order | Page | Label |
|-------|------|-------|
| 1 | /use-cases/solo-developer | Solo Developer |
| 2 | /use-cases/startup | Startup |
| 3 | /use-cases/research-lab | Research Lab |
| 4 | /use-cases/enterprise-team | Enterprise Team |
| 5 | /use-cases/educator | Educator |
| 6 | /use-cases/open-source-project | Open Source Project |

### Group: Patterns

| Order | Page | Label |
|-------|------|-------|
| 1 | /patterns/question-test | The Question Test |
| 2 | /patterns/agents-md | AGENTS.md Routing |
| 3 | /patterns/dual-audience | Dual-Audience Writing |
| 4 | /patterns/base-extension | Base/Extension |
| 5 | /patterns/context-recipe | Context Recipe |
| 6 | /patterns/fair-envelope | FAIR Envelope |
| 7 | /patterns/mission-decomposition | Mission Decomposition |
| 8 | /patterns/federation-readiness | Federation Readiness |

### Group: Reference

| Order | Page | Label |
|-------|------|-------|
| 1 | /reference/specification | Specification |
| 2 | /reference/design-rationale | Design Rationale |
| 3 | /reference/reading-guide | Reading Guide |
| 4 | /reference/agent-first-guide | Agent-First Guide |
| 5 | /reference/migration-guide | Migration Guide |
| 6 | /reference/tool-setup | Tool Setup |
| 7 | /reference/governance-model | Governance Model |
| 8 | /reference/quality-rubric | Quality Rubric |

## Collection Mapping

SiteForge `documentation` archetype provides 4 Astro content collections. Vault content maps as follows:

| Collection | Content types | Section field | Count |
|------------|--------------|---------------|-------|
| `docs` | Concepts, Patterns, Comparisons, Use Cases | `concepts`, `patterns`, `comparisons`, `use-cases` | 32 |
| `guides` | Tutorials | — (uses `difficulty` enum) | 9 |
| `reference` | Upstream spec docs | — | 8 |
| `changelog` | (none for v1) | — | 0 |

**Standalone Astro pages** (not in collections):
- `/` — Homepage (index.astro)
- `/learn/what-is-adna` — Overview page
- `/get-started` — Quickstart page
- `/404` — Error page
- `/learn/` — Learn index
- `/learn/concepts/` — Concepts index
- `/learn/tutorials/` — Tutorials index
- `/learn/comparisons/` — Comparisons index
- `/use-cases/` — Use Cases index
- `/patterns/` — Patterns index
- `/reference/` — Reference index

## URL Conventions

- Hyphens in URLs (vault underscores → site hyphens)
- Strip entity type prefix: `concept_triad.md` → `triad`
- Strip comparison prefix: `comparison_adna_vs_para.md` → `adna-vs-para`
- Strip use_case prefix: `use_case_solo_developer.md` → `solo-developer`
- Tutorials and patterns: strip prefix, underscores → hyphens

## Concept Ordering Rationale

Concepts are ordered in a learning progression:
1. **Triad** — the foundational structure (who/what/how)
2. **Ontology** — entity types that populate the triad
3. **Knowledge Graph** — how entities connect
4. **Governance Files** — the 5 orientation documents
5. **Token Selection** — how agents choose what to load
6. **Convergence** — context narrowing through execution hierarchy
7. **Dual Audience** — writing for developers and everyone else
8. **Context Optimization** — making every token count
9. **Lattice Composition** — building workflows from parts
10. **Open Standard** — why aDNA is a standard, not a product
11. **Agentic Literacy** — learning to work with AI
12. **Context Commons** — shared knowledge as public good
13. **FAIR Metadata** — findability and reuse

This moves from concrete (what you see) → operational (how it works) → philosophical (why it matters).

## Deferred to Phase 6 (Website v2)

12 upstream docs deferred from v1 Reference section:
- `adna_bridge_patterns.md` — multi-instance composition (specialized)
- `federation_walkthrough.md` — detailed federation steps
- `lattice_federation.md` — federation protocol spec
- `lattice_interop.md` — interop spec
- `ontology_unification.md` — ontology merge rules
- `mathematical_language_standards.md` — notation conventions
- `migration_safety_framework.md` — migration safety
- `projects_folder_pattern.md` — workspace pattern
- `start_kit_prd.md` — internal PRD
- `side_quest_guide.md` — community experiments
- `tutorial_lattice_publishing.md` — registry publishing
- `version_migration_guide.md` — version migration

These will be reviewed for inclusion after Phase 4-5 content is complete.
