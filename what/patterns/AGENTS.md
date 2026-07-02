---
type: directory_index
created: 2026-04-13
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [directory_index, pattern]
---

# what/patterns/ — Agent Guide

## What's Here

Reusable aDNA architectural and content patterns. Each file documents a pattern that appears across aDNA projects — progressive disclosure, ontology extension, context narrowing, session handoff, etc. Patterns are the "how to think about it" complement to concepts' "what it is."

One file per pattern.

## Working Rules

- **Naming**: `pattern_{name}.md` (underscores, lowercase)
- **Required frontmatter**: `type: pattern`, `created`, `updated`, `status`, `pattern_category` (structural | operational | content | federation), `applies_to` (list of entity types this pattern involves), `last_edited_by`, `tags`
- **Instance counting** (ratified Champollion G3, 2026-07-02): `instances:` counts **vault/campaign-level adoptions** — multiple records of one seam in one vault are ONE adoption (records ≠ adoptions) — verified by a fresh filesystem census, never inherited from governance prose. `status: draft` below 3 adoptions; graduation past 3 ratifies at an operator gate. **Semantic-census corollary** (M4.3 review, 2026-07-02): census the unit the CLAIM names, not the directory listing — "15 example lattice definitions" counts `*.lattice.yaml`, not files-in-dir (AGENTS.md/READMEs/schemas are not instances of anything). And re-verification must vary the METHOD: re-running the same count is replication, not independence (the M4.1 N-02 lesson — builder and verifier both counted files, both wrong together).
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
