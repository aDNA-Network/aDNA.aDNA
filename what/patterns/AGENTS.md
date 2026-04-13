---
type: directory_index
created: 2026-04-13
updated: 2026-04-13
last_edited_by: agent_stanley
tags: [directory_index, pattern]
---

# what/patterns/ — Agent Guide

## What's Here

Reusable aDNA architectural and content patterns. Each file documents a pattern that appears across aDNA projects — progressive disclosure, ontology extension, context narrowing, session handoff, etc. Patterns are the "how to think about it" complement to concepts' "what it is."

One file per pattern.

## Working Rules

- **Naming**: `pattern_{name}.md` (underscores, lowercase)
- **Required frontmatter**: `type: pattern`, `created`, `updated`, `status`, `pattern_category` (structural | operational | content | federation), `applies_to` (list of entity types this pattern involves), `last_edited_by`, `tags`
- **Structure**: Problem → Solution → When to Use → Example (from THIS vault) → Anti-Pattern
- **Self-reference mandatory**: The "Example" section must cite a concrete instance of this pattern in the aDNA.aDNA vault
- **Cross-linking**: Link to related concepts and other patterns
- **Set audit trail**: Update `last_edited_by` and `updated` on every edit

## Load/Skip Decision

**Load this directory when**:
- Documenting or reviewing architectural patterns
- Designing new entity types or vault structures
- Advising on aDNA project architecture

**Skip when**:
- Writing beginner tutorials (patterns are intermediate+ content)
- Operational execution (sessions, missions)

**Token cost**: ~250 tokens (this AGENTS.md). Individual pattern files are ~1,500-2,500 tokens each.
