---
type: directory_index
created: 2026-04-13
updated: 2026-04-13
last_edited_by: agent_stanley
tags: [directory_index, concept]
---

# what/concepts/ — Agent Guide

## What's Here

Core aDNA concepts explained at dual-audience depth. Each file documents one architectural element of the aDNA standard — the triad, governance files, convergence model, ontology, lattice composition, etc. — with both plain-language clarity (for newcomers) and technical precision (for developers).

One file per concept. This is the vault's primary knowledge layer for *understanding* aDNA.

## Working Rules

- **Naming**: `concept_{name}.md` (underscores, lowercase)
- **Required frontmatter**: `type: concept`, `created`, `updated`, `status`, `difficulty` (foundational | intermediate | advanced), `spec_section` (reference to adna_standard.md section), `dual_audience: true`, `last_edited_by`, `tags`
- **Dual audience mandatory**: Every concept must include a plain-language opening (no jargon, a 14-year-old could follow) AND a technical specification section (spec-precise, referenceable)
- **Self-reference mandatory**: Every concept must cite a concrete example from THIS vault demonstrating the concept in action
- **Cross-linking**: Minimum 2 wikilinks to related concepts, patterns, or tutorials
- **Check before overwriting**: Read `updated` field — if edited today by someone else, confirm with user
- **Set audit trail**: Update `last_edited_by` and `updated` on every edit

## Load/Skip Decision

**Load this directory when**:
- Creating or reviewing concept documentation
- Building learning paths or tutorials (concepts are prerequisites)
- Cross-referencing from patterns, comparisons, or use cases
- Answering questions about how aDNA works

**Skip when**:
- Working on operational infrastructure (sessions, campaigns, pipelines)
- Writing workshop kits or publishing pipeline docs
- Concept content is not relevant to current session

**Token cost**: ~300 tokens (this AGENTS.md). Individual concept files are ~2,000-3,000 tokens each.
