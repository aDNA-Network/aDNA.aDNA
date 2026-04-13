---
type: directory_index
created: 2026-04-13
updated: 2026-04-13
last_edited_by: agent_stanley
tags: [directory_index, publishing]
---

# how/publishing/ — Agent Guide

## What's Here

Publishing pipeline for distributing aDNA.aDNA vault content to the web and other channels. Documents the flow from vault content (concepts, tutorials, patterns) to published web pages on the documentation site. Includes style guides, site architecture mapping, and publishing task tracking.

## Working Rules

- **Naming**: `publishing_{topic}.md` (underscores, lowercase)
- **Required frontmatter**: `type: publishing`, `created`, `updated`, `status`, `target` (website | docs | social), `last_edited_by`, `tags`
- **Pipeline model**: Content flows through stages — draft → review → publish. File location in a stage directory indicates processing state.
- **Cross-linking**: Reference the vault content files being published
- **Set audit trail**: Update `last_edited_by` and `updated` on every edit

## Load/Skip Decision

**Load this directory when**:
- Planning or executing content publication
- Designing the documentation website structure
- Reviewing content for web readiness

**Skip when**:
- Writing vault content (publish after content is complete)
- Operational execution within the vault

**Token cost**: ~200 tokens (this AGENTS.md). Individual files are ~1,000-2,000 tokens each.
