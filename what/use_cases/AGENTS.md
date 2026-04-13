---
type: directory_index
created: 2026-04-13
updated: 2026-04-13
last_edited_by: agent_stanley
tags: [directory_index, use_case]
---

# what/use_cases/ — Agent Guide

## What's Here

Narrative aDNA adoption stories organized by domain. Each file presents a named persona, their challenge, and a walkthrough of how aDNA solves it — including what their vault structure looks like. Use cases make aDNA concrete for people who learn by seeing real-world applications.

One file per use case.

## Working Rules

- **Naming**: `use_case_{name}.md` (underscores, lowercase)
- **Required frontmatter**: `type: use_case`, `created`, `updated`, `status`, `domain` (research | startup | enterprise | education | personal | community), `persona` (named character), `deployment_form` (bare | embedded), `last_edited_by`, `tags`
- **Structure**: Persona → Challenge → How aDNA Helps → Implementation Sketch → What Their Vault Looks Like (example directory tree) → Outcome
- **Story-driven**: Write as narrative, not documentation. The reader should relate to the persona.
- **Cross-linking**: Link to relevant concepts, tutorials, and patterns
- **Set audit trail**: Update `last_edited_by` and `updated` on every edit

## Load/Skip Decision

**Load this directory when**:
- Creating or reviewing use case narratives
- Recommending aDNA to a specific audience (match their domain)
- Building marketing or outreach content

**Skip when**:
- Technical concept work
- Operational execution

**Token cost**: ~250 tokens (this AGENTS.md). Individual use cases are ~2,000-3,500 tokens each.
