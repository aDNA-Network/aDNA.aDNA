---
type: directory_index
created: 2026-04-13
updated: 2026-04-13
last_edited_by: agent_stanley
tags: [directory_index, tutorial]
---

# what/tutorials/ — Agent Guide

## What's Here

Step-by-step learning paths for building with aDNA. Tutorials are executable — the reader produces something concrete by the end. Three difficulty tiers: beginner (navigate and create), intermediate (extend and customize), advanced (optimize and compose).

One file per tutorial.

## Working Rules

- **Naming**: `tutorial_{name}.md` (underscores, lowercase)
- **Required frontmatter**: `type: tutorial`, `created`, `updated`, `status`, `level` (beginner | intermediate | advanced), `prerequisites` (list of concept file references), `estimated_time`, `dual_audience: true`, `last_edited_by`, `tags`
- **Executable**: Every tutorial must produce a concrete outcome — a file, a directory, a validated lattice, a working vault
- **Prerequisites explicit**: List which concept files the reader should understand first
- **Self-reference**: Where possible, use THIS vault as the worked example
- **Cross-linking**: Link to prerequisite concepts and follow-up tutorials
- **Set audit trail**: Update `last_edited_by` and `updated` on every edit

## Load/Skip Decision

**Load this directory when**:
- Creating or reviewing tutorials
- Building learning paths or onboarding flows
- Recommending next steps to a user learning aDNA

**Skip when**:
- Working on concept documentation (tutorials reference concepts, not the reverse)
- Operational work (campaigns, missions, sessions)

**Token cost**: ~300 tokens (this AGENTS.md). Individual tutorials are ~3,000-5,000 tokens each.
