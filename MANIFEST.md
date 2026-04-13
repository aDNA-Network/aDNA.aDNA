---
type: manifest
created: 2026-04-13
updated: 2026-04-13
last_edited_by: agent_stanley
tags: [manifest, governance]
---

# aDNA.aDNA — Project Manifest

## Project Identity

**aDNA.aDNA** — A self-referential knowledge architecture that teaches the aDNA (Agentic DNA) standard by using the aDNA standard itself. The structure IS the lesson: every directory, governance file, and content entity is both a working example of aDNA and an explanation of aDNA.

This project serves two audiences simultaneously: **developers** building with aDNA get spec-precise technical depth, integration patterns, and lattice composition guidance. **Non-developers** exploring aDNA get plain-language explanations, visual metaphors, and a clear on-ramp to agentic literacy. Both audiences navigate the same vault — progressive disclosure handles the rest.

**Upstream source of truth**: [github.com/LatticeProtocol/Agentic-DNA](https://github.com/LatticeProtocol/Agentic-DNA) (MIT license). This vault demonstrates and explains aDNA; the upstream repo defines it.

## Architecture

This project uses the **aDNA** knowledge architecture — a bare triad deployment with 10 domain-specific ontology extensions.

```
aDNA.aDNA/
├── what/           # WHAT — Concepts, tutorials, patterns, glossary, use cases, comparisons
│   ├── concepts/       [EXT] Core aDNA concepts (dual-audience)
│   ├── tutorials/      [EXT] Learning paths (beginner → advanced)
│   ├── patterns/       [EXT] Reusable aDNA patterns
│   ├── glossary/       [EXT] Term definitions with spec refs
│   ├── use_cases/      [EXT] Adoption narratives by domain
│   ├── comparisons/    [EXT] aDNA vs. other systems
│   ├── context/        Agent context library (5 topics, 27 subtopics)
│   ├── decisions/      ADRs
│   ├── docs/           Specification documents
│   └── lattices/       Lattice YAML tools, schema, examples
├── how/            # HOW — Campaigns, workshops, publishing, operations
│   ├── workshops/      [EXT] Workshop kits + facilitation
│   ├── publishing/     [EXT] Vault-to-web pipeline
│   ├── campaigns/      Strategic initiatives (campaign_rosetta active)
│   ├── templates/      32 templates (22 base + 10 extensions)
│   ├── skills/         15 skills (13 base + 2 project-specific)
│   ├── sessions/       Session tracking
│   ├── missions/       Multi-session task decomposition
│   ├── pipelines/      Content-as-code workflows
│   ├── backlog/        Ideation
│   └── quests/         Community validation experiments
├── who/            # WHO — Community, adopters, governance
│   ├── community/      [EXT] Community roles + contribution paths
│   ├── adopters/       [EXT] Adopter personas + profiles
│   ├── coordination/   Cross-agent sync notes
│   └── governance/     Roles, policies, VISION.md
```

### Base Ontology (14 types)

WHO (3: governance, team, coordination), WHAT (4: context, decisions, modules, lattices), HOW (7: campaigns, missions, sessions, templates, skills, pipelines, backlog). Full table: CLAUDE.md § Domain Knowledge.

### Extended Ontology (10 Rosetta types)

| Triad | Entity | Directory | Purpose |
|-------|--------|-----------|---------|
| WHAT | `concept` | `what/concepts/` | Core aDNA concepts — dual-audience depth |
| WHAT | `tutorial` | `what/tutorials/` | Step-by-step learning paths (beginner → advanced) |
| WHAT | `pattern` | `what/patterns/` | Reusable aDNA architectural patterns |
| WHAT | `glossary_entry` | `what/glossary/` | Canonical term definitions with spec references |
| WHAT | `use_case` | `what/use_cases/` | Narrative adoption stories by domain |
| WHAT | `comparison` | `what/comparisons/` | aDNA vs. other knowledge architectures |
| WHO | `community` | `who/community/` | Community roles, contribution paths, governance |
| WHO | `adopter` | `who/adopters/` | Adopter personas and deployment profiles |
| HOW | `workshop` | `how/workshops/` | Workshop kits and facilitation guides |
| HOW | `publishing` | `how/publishing/` | Vault-to-web content publishing pipeline |

## Entry Points

| Audience | Start Here | Then |
|----------|-----------|------|
| **Developers learning aDNA** | `what/concepts/` | `what/patterns/` → `what/tutorials/` → `what/lattices/` |
| **Non-developers exploring** | `what/tutorials/` | `what/glossary/` → `what/concepts/` → `what/use_cases/` |
| **Workshop facilitators** | `how/workshops/` | facilitation guide → participant tutorials |
| **Agents** | `CLAUDE.md` (auto-loaded) | `STATE.md` → `how/campaigns/campaign_rosetta/` → work |
| **Humans browsing** | `README.md` | `MANIFEST.md` → browse triad → `STATE.md` |

## Key Components

### Context Library (inherited)

| Topic | Subtopics | Tokens | Location |
|-------|-----------|--------|----------|
| Prompt Engineering | 7 | ~21K | `what/context/prompt_engineering/` |
| aDNA Core | 13 | ~35K | `what/context/adna_core/` |
| Claude Code | 4 | ~12K | `what/context/claude_code/` |
| Lattice Basics | 2 | ~4.5K | `what/context/lattice_basics/` |
| Object Standards | 1 | ~3K | `what/context/object_standards/` |

Cross-topic recipes: `what/context/context_recipes.md` (6 domain-neutral recipes, 3-tier budget system).

### Lattice YAML Tools

| Tool | Location | Purpose |
|------|----------|---------|
| `lattice_validate.py` | `what/lattices/tools/` | Validate `.lattice.yaml` against JSON Schema |
| `lattice2canvas.py` | `what/lattices/tools/` | Convert lattice YAML → Obsidian canvas |
| `canvas2lattice.py` | `what/lattices/tools/` | Convert Obsidian canvas → lattice YAML |
| `lattice_yaml_schema.json` | `what/lattices/` | JSON Schema for lattice definitions |

### Templates (32)

22 base templates (inherited) + 10 extension templates:

| Extension Template | Target Directory |
|-------------------|-----------------|
| `template_concept.md` | `what/concepts/` |
| `template_tutorial.md` | `what/tutorials/` |
| `template_pattern.md` | `what/patterns/` |
| `template_glossary_entry.md` | `what/glossary/` |
| `template_use_case.md` | `what/use_cases/` |
| `template_comparison.md` | `what/comparisons/` |
| `template_community_role.md` | `who/community/` |
| `template_adopter.md` | `who/adopters/` |
| `template_workshop.md` | `how/workshops/` |
| `template_publishing_task.md` | `how/publishing/` |

### Skills (15)

13 base skills (inherited) + 2 project-specific:

| Skill | Type | Purpose |
|-------|------|---------|
| `skill_dual_audience_review` | agent | Review content against dual-audience test |
| `skill_self_reference_check` | agent | Verify self-referential vault citations |

## Active Builds

| Component | Status | Description |
|-----------|--------|-------------|
| Phase 0: Scaffold | Complete | Fork, governance customization, 10 ontology extensions, campaign_rosetta |
| Phase 1: Core Content | Planned | 13 concept files, 8 pattern files, 5 comparison files |
| Phase 2: Human Path | Planned | 9 tutorials, 6 use case narratives |
| Phase 3: The Who | Planned | Community architecture, adopter personas, glossary |
| Phase 4: The How | Planned | Publishing pipeline, workshop kits, lattice definitions |
| Phase 5: Website | Deferred | AstroJS documentation site |

### Inherited Infrastructure (from base template)

| Component | Status | Description |
|-----------|--------|-------------|
| aDNA Standard v2.2 | Inherited | Core specification — triad, ontology, sessions, missions, campaigns |
| Context library | Inherited | 5 topics, 27 subtopics, ~75K tokens |
| Lattice YAML tools | Inherited | Validate, convert (YAML↔canvas), JSON Schema, 15 examples |
| 22 base templates | Inherited | Full operational template set |
| 13 base skills | Inherited | Onboarding, fork, entity type, quality audit, etc. |
| Execution hierarchy v2 | Inherited | OODA cascade, AAR protocol, escalation cascade |
| Quality framework | Inherited | 10-dimension compliance rubric |

See `how/campaigns/campaign_rosetta/campaign_rosetta.md` for the full campaign brief and `STATE.md` for current operational state.
