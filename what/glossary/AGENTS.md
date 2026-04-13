---
type: directory_index
created: 2026-04-13
updated: 2026-04-13
last_edited_by: agent_stanley
tags: [directory_index, glossary_entry]
---

# what/glossary/ — Agent Guide

## What's Here

Canonical term definitions for the aDNA standard. Each file defines one term with both a plain-language definition (accessible to newcomers) and a technical definition (spec-precise with section references). A `glossary_index.md` file provides a quick-reference lookup table.

One file per term, plus one index file.

## Working Rules

- **Naming**: `glossary_{term}.md` (underscores, lowercase). Use the most common form of the term.
- **Required frontmatter**: `type: glossary_entry`, `created`, `updated`, `status`, `term` (canonical form), `spec_section` (reference to adna_standard.md), `see_also` (list of related terms), `last_edited_by`, `tags`
- **Structure**: Term → Plain-Language Definition → Technical Definition → Usage Examples → See Also
- **Keep entries concise**: ~200-400 tokens per entry. Depth lives in concept files — glossary entries link there.
- **Index file**: Maintain `glossary_index.md` as a single-page quick-reference table
- **Set audit trail**: Update `last_edited_by` and `updated` on every edit

## Load/Skip Decision

**Load this directory when**:
- Defining or looking up aDNA terminology
- Writing content that uses aDNA-specific terms (check for canonical form)
- Building search or navigation features

**Skip when**:
- Working on operational tasks where terminology is already understood
- Deep concept exploration (load `what/concepts/` instead)

**Token cost**: ~200 tokens (this AGENTS.md). Individual entries are ~200-400 tokens. Full glossary (index): ~2,000-4,000 tokens.
