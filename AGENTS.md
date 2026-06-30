---
type: directory_index
created: 2026-04-13
updated: 2026-06-29
last_edited_by: agent_rosetta
tags: [directory_index, root]
---

# aDNA.aDNA — Agent Guide

## Purpose

This is the root agent reference for **aDNA.aDNA** — a self-referential knowledge architecture that teaches the aDNA standard by using the aDNA standard itself. It routes agents to the appropriate triad leg (what/how/who) and provides learning-path navigation for different audiences.

## Quick Orientation

| Document | What You'll Find |
|----------|-----------------|
| **CLAUDE.md** | Agent operating context — Rosetta persona, safety rules, 10 standing orders, extended ontology |
| **MANIFEST.md** | Project overview — architecture (16 base + 11 extension entity types), entry points, active builds |
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
│   ├── templates/      41 templates (25 base + 11 extension + 5 operational)
│   ├── skills/         45 skills (21 base + 24 project-specific)
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

## Load/Skip Decision

**Load this directory when**:
- Cold-start orientation — confirming Rosetta persona, project structure, learning paths
- Routing decision before drilling into a specific triad leg
- Reviewing safety rules + heavy-file convention before destructive work

**Skip when**:
- Already oriented mid-session and drilling into a specific subdirectory
- The task is local to a single triad leg and the leg's AGENTS.md is loaded

**Token cost**: ~700 tokens (this AGENTS.md)

## Safety Rules

- **Read before write** — always read current content before modifying
- **Check `updated` field** — if updated today by someone else, confirm before overwriting
- **Set `last_edited_by` and `updated`** — on every modification
- **New files are safe** — creating new files has no collision risk

## Archive Cross-Reference (Op 3 — router-vs-archive)

The canonical instance of the **Op 3 archive-on-close** pattern at this vault is the `STATE.md` ↔ [[STATE_archive.md|STATE_archive.md]] split (ratified at M2.1 S2 2026-05-19; refreshed at every mission close via the Op 3 archive convention). The router (`STATE.md`) holds the most-recent live session block + Next Session Prompt; historical session prose accumulates in the archive. When you need to load operational state, default to the router; consult the archive only for audit / historical investigation.

## Heavy-File Read Convention

For any file ≥ ~ 50 kT content-load OR ≥ 200 KB byte size, default to `offset` + `limit` parameters on Read. Typical heavy files: `STATE.md` (this vault and others), campaign masters (e.g., `how/campaigns/campaign_adna_serious_tool_readiness/campaign_adna_serious_tool_readiness.md`), mission files at S3 close, large AAR aggregates. The router-vs-archive pattern (see [[STATE_archive.md|STATE_archive.md]] for the canonical instance) splits heavy files into a live router + an audit archive; even the router benefits from partial Reads when only the top bullet is needed. See `node.aDNA/what/context/token_baselines.md` v0.1.3 for measured costs + Appendix B per-directory AGENTS.md invariants spec.

**Rule of thumb**: if Read returns `File content exceeds maximum`, that's a router-vs-archive split candidate — flag for backlog if not already split.

## Priority Hierarchy

1. **Data integrity** — never corrupt or lose existing data
2. **User-requested tasks** — explicit instructions from current user
3. **Operational maintenance** — session tracking, plan updates
4. **Exploration** — research, audits, improvements
