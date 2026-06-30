---
type: manifest
created: 2026-04-13
updated: 2026-06-29
last_edited_by: agent_rosetta
tags: [manifest, governance]
---

# aDNA.aDNA — Project Manifest

## Project Identity

**aDNA.aDNA** — A self-referential knowledge architecture that teaches the aDNA (Agentic DNA) standard by using the aDNA standard itself. The structure IS the lesson: every directory, governance file, and content entity is both a working example of aDNA and an explanation of aDNA.

This project serves two audiences simultaneously: **developers** building with aDNA get spec-precise technical depth, integration patterns, and lattice composition guidance. **Non-developers** exploring aDNA get plain-language explanations, visual metaphors, and a clear on-ramp to agentic literacy. Both audiences navigate the same vault — progressive disclosure handles the rest.

**Public face**: [github.com/aDNA-Network/aDNA](https://github.com/aDNA-Network/aDNA) (MIT license) — the released clone-and-run workspace image of the standard (ADR-034; predecessor `LatticeProtocol/aDNA` archived as [`aDNA-Network/adna-legacy`](https://github.com/aDNA-Network/adna-legacy)). This vault is the standard's **dev graph**: it develops, demonstrates, and explains aDNA; manual gate-fired releases publish it (`how/skills/skill_template_release.md`).

> **Dev-graph repo visibility** (Git.aDNA P6 Wave 2 canary, 2026-06-22): this vault's *own* repo `github.com/aDNA-Network/aDNA.aDNA` is now **GitHub-public**, class **P-released**, under Git.aDNA governance — visibility-flipped private→public via the agnostic `gitops_set_visibility` verb (the standard's docs face is public-by-intent). Distinct from the separately-released MIT image above. Git-ops declaration: `git/CLAUDE.md`; doctrine: `CLAUDE.md` → `## Git-Ops`. *(STATE.md host-fact deferred to avoid churning the active Operation-aDNA state — fold at next aDNA session.)*

## Architecture

This project uses the **aDNA** knowledge architecture — a bare triad deployment with 11 domain-specific ontology extensions.

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
│   ├── templates/      41 templates (25 base + 11 extension + 5 operational)
│   ├── skills/         15 skills (13 base + 2 project-specific)
│   ├── sessions/       Session tracking
│   ├── missions/       Multi-session task decomposition
│   ├── pipelines/      Content-as-code workflows
│   ├── backlog/        Ideation
│   └── quests/         Community validation experiments
├── who/            # WHO — Community, adopters, reviewers, governance
│   ├── community/      [EXT] Community roles + contribution paths
│   ├── adopters/       [EXT] Adopter personas + profiles
│   ├── reviewers/      [EXT] Reviewer personas (decadal AAR lens)
│   ├── coordination/   Cross-agent sync notes
│   └── governance/     Roles, policies, VISION.md
```

### Base Ontology (16 types)

WHO (4: governance, team, coordination, identity), WHAT (5: context, decisions, modules, lattices, inventory), HOW (7: campaigns, missions, sessions, templates, skills, pipelines, backlog). Full table: CLAUDE.md § Domain Knowledge. *(`inventory` + `identity` promoted to base per ADR-035, standard v2.3; dev-graph authored at Hearthstone P1, materialized to `.adna/` at P5.)*

### Extended Ontology (11 Rosetta types)

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
| WHO | `reviewer` | `who/reviewers/` | Specialist UX/design reviewer personas (decadal AAR lens) |
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

### Templates (41)

**25 base** (inherited from `.adna` — 12 auto-triggered + 13 manual-apply; full index: `how/templates/AGENTS.md`) + **11 extension** + **5 operational** = the 16 Rosetta-local templates below:

| Local Template | Class | Target Directory |
|----------------|-------|-----------------|
| `template_concept.md` | extension | `what/concepts/` |
| `template_tutorial.md` | extension | `what/tutorials/` |
| `template_pattern.md` | extension | `what/patterns/` |
| `template_glossary_entry.md` | extension | `what/glossary/` |
| `template_use_case.md` | extension | `what/use_cases/` |
| `template_comparison.md` | extension | `what/comparisons/` |
| `template_community_role.md` | extension | `who/community/` |
| `template_adopter.md` | extension | `who/adopters/` |
| `template_reviewer.md` | extension | `who/reviewers/` |
| `template_workshop.md` | extension | `how/workshops/` |
| `template_publishing_task.md` | extension | `how/publishing/` |
| `template_campaign_open_splash.md` | operational | `how/campaigns/campaign_*/` |
| `template_campaign_close_splash.md` | operational | `how/campaigns/campaign_*/` |
| `template_drift_report.md` | operational | upstream drift-watch reports |
| `template_lattice_home_render.md` | operational | `Home.aDNA/` render |
| `template_software_graph_stub.md` | operational | new `<Software>.aDNA/` genesis |

### Skills (17)

13 base skills (inherited) + 4 project-specific:

| Skill | Type | Purpose |
|-------|------|---------|
| `skill_dual_audience_review` | agent | Review content against dual-audience test |
| `skill_self_reference_check` | agent | Verify self-referential vault citations |
| `skill_iii_cycle` | agent | Single III improvement cycle (7-step: measure → implement → validate) |
| `skill_decadal_aar` | agent | Decadal AAR with 5-persona ranker review (every 10 cycles) |

## Active Builds

| Component | Status | Description |
|-----------|--------|-------------|
| Phase 0: Scaffold | Complete | Fork, governance customization, 10 ontology extensions, campaign_rosetta |
| Phase 1: Core Content | Complete | 13 concept files, 8 pattern files, 5 comparison files |
| Phase 2: Human Path | Complete | 9 tutorials, 6 use case narratives |
| Phase 3: Website v1 | Complete | AstroJS docs site via SiteForge at `site/`, Vercel deploy |
| Phase 4: The Who | Complete | 25 glossary entries + index, 3 governance docs, 3 community files, 5 adopter personas |
| Phase 4.5: III Site Improvements | Complete | Hero redesign, 37 new site pages, components, OG images, III review |
| Phase 5: The How | Complete | 3 publishing docs, 4 workshop kits, 4 self-referential lattice YAMLs |
| Phase 6: Website v2 | Complete | How section: 11 new pages + 4 indexes, MDX escaping, OG image (112 total pages) |
| Phase 7: 100-Cycle III Loop | Planned | 100 iterative improvement cycles (10 themed decadals) + persona ranker AARs |

### Inherited Infrastructure (from base template)

| Component | Status | Description |
|-----------|--------|-------------|
| aDNA Standard v2.2 | Inherited | Core specification — triad, ontology, sessions, missions, campaigns |
| Context library | Inherited | 5 topics, 27 subtopics, ~75K tokens |
| Lattice YAML tools | Inherited | Validate, convert (YAML↔canvas), JSON Schema, 19 examples |
| 25 base templates | Inherited | Full operational set (12 auto-triggered + 13 manual-apply) |
| 13 base skills | Inherited | Onboarding, fork, entity type, quality audit, etc. |
| Execution hierarchy v2 | Inherited | OODA cascade, AAR protocol, escalation cascade |
| Quality framework | Inherited | 10-dimension compliance rubric |

See `how/campaigns/campaign_rosetta/campaign_rosetta.md` for the full campaign brief and `STATE.md` for current operational state.
