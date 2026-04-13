---
type: directory_index
created: 2026-04-13
updated: 2026-04-13
last_edited_by: agent_stanley
tags: [directory_index, root]
---

# aDNA.aDNA — Agent Guide

## Purpose

This is the root agent reference for **aDNA.aDNA** — a self-referential knowledge architecture that teaches the aDNA standard by using the aDNA standard itself. It routes agents to the appropriate triad leg (what/how/who) and provides learning-path navigation for different audiences.

## Quick Orientation

| Document | What You'll Find |
|----------|-----------------|
| **CLAUDE.md** | Agent operating context — Rosetta persona, safety rules, 10 standing orders, extended ontology |
| **MANIFEST.md** | Project overview — architecture (14 base + 10 extension entity types), entry points, active builds |
| **STATE.md** | Current operational state — campaign_rosetta progress, next mission |
| **README.md** | Human-readable getting-started guide |

## Project Structure

```
aDNA.aDNA/
├── what/           # WHAT — Concepts, tutorials, patterns, glossary, use cases, comparisons
│   ├── concepts/       Core aDNA concepts (dual-audience)
│   ├── tutorials/      Learning paths (beginner → advanced)
│   ├── patterns/       Reusable aDNA patterns
│   ├── glossary/       Term definitions
│   ├── use_cases/      Adoption narratives
│   ├── comparisons/    aDNA vs. other systems
│   ├── context/        Agent context library (5 topics, 27 subtopics)
│   ├── decisions/      ADRs
│   ├── docs/           Specification documents
│   └── lattices/       Lattice YAML tools + examples
├── how/            # HOW — Campaigns, workshops, publishing, operations
│   ├── workshops/      Workshop kits + facilitation
│   ├── publishing/     Vault-to-web pipeline
│   ├── campaigns/      Strategic initiatives (campaign_rosetta active)
│   ├── templates/      32 templates (22 base + 10 extensions)
│   ├── skills/         15 skills (13 base + 2 project-specific)
│   ├── sessions/       Session tracking
│   ├── missions/       Multi-session tasks
│   ├── pipelines/      Content-as-code workflows
│   └── backlog/        Ideation
└── who/            # WHO — Community, adopters, governance
    ├── community/      Community roles + contribution paths
    ├── adopters/       Adopter personas
    ├── coordination/   Cross-agent sync notes
    └── governance/     Roles, policies, VISION.md
```

## Learning Paths

| Audience | Start | Then | Goal |
|----------|-------|------|------|
| **Developer learning aDNA** | `what/concepts/` AGENTS.md | concept_triad → concept_governance_files → concept_ontology | Understand aDNA architecture |
| **Non-developer exploring** | `what/tutorials/` AGENTS.md | tutorial_your_first_vault → tutorial_your_first_project | Navigate and create in aDNA |
| **Pattern reference** | `what/patterns/` AGENTS.md | Browse by category | Find reusable approaches |
| **Workshop facilitator** | `how/workshops/` AGENTS.md | Pick a workshop kit → facilitation guide | Deliver aDNA training |
| **Comparing systems** | `what/comparisons/` AGENTS.md | Pick comparison by system name | Position aDNA vs. alternatives |

## Agent Startup

1. **CLAUDE.md** — auto-loaded; confirms Rosetta persona and project rules
2. **STATE.md** — operational snapshot: campaign_rosetta progress, next mission
3. **`how/sessions/active/`** — check for conflicting sessions
4. **`who/coordination/`** — read any urgent cross-agent notes
5. **`how/campaigns/campaign_rosetta/`** — check active campaign status
6. **Create session file** in `how/sessions/active/` and begin work

## Layer References

- [what/AGENTS](what/AGENTS.md) — Knowledge objects (WHAT) — concepts, tutorials, patterns, glossary, use cases, comparisons, context library, docs, lattices
- [how/AGENTS](how/AGENTS.md) — Operations (HOW) — campaigns, workshops, publishing, missions, sessions, templates, skills, pipelines
- [who/AGENTS](who/AGENTS.md) — Organization (WHO) — community, adopters, coordination, governance

## Safety Rules

- **Read before write** — always read current content before modifying
- **Check `updated` field** — if updated today by someone else, confirm before overwriting
- **Set `last_edited_by` and `updated`** — on every modification
- **New files are safe** — creating new files has no collision risk

## Priority Hierarchy

1. **Data integrity** — never corrupt or lose existing data
2. **User-requested tasks** — explicit instructions from current user
3. **Operational maintenance** — session tracking, plan updates
4. **Exploration** — research, audits, improvements
