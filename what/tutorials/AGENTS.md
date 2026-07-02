---
type: directory_index
created: 2026-04-13
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [directory_index, tutorial]
---

# what/tutorials/ — Agent Guide

## What's Here

Step-by-step learning paths for building with aDNA. Tutorials are executable — the reader produces something concrete by the end. Three difficulty tiers: beginner (navigate and create), intermediate (extend and customize), advanced (optimize and compose).

One file per tutorial.

## Designated First Tutorial

**Start newcomers at [[tutorial_navigate_a_vault|Navigate an aDNA Vault]].** Of the three `level: beginner` tutorials, it is the designated entry point because it is the only one with **no prerequisites** (a read-only guided tour), where the other two teach *producing* a file after the reader can already *read* a vault. Recommended beginner order: **navigate_a_vault → first_claude_md → question_test**. This mirrors the site learning path at `adna.network/learn/tutorials` and the "Your First 10 Minutes" on-ramp in the root `README.md`.

| Order | Tutorial | Level | Prerequisites |
|-------|----------|-------|---------------|
| 1 (entry) | `tutorial_navigate_a_vault` | beginner | none |
| 2 | `tutorial_first_claude_md` | beginner | concept_triad, concept_governance_files |
| 3 | `tutorial_question_test` | beginner | concept_triad, concept_ontology |

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
