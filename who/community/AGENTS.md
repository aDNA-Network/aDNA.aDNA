---
type: directory_index
created: 2026-04-13
updated: 2026-04-13
last_edited_by: agent_stanley
tags: [directory_index, community]
---

# who/community/ — Agent Guide

## What's Here

Community architecture for aDNA adopters and contributors. Documents the roles, contribution paths, and governance structures that enable the aDNA open-source community to grow. Includes the connection to the Context Commons program.

One file per community structure or role definition.

## Working Rules

- **Naming**: `community_{topic}.md` (underscores, lowercase)
- **Required frontmatter**: `type: community`, `created`, `updated`, `status`, `community_type` (role | structure | process), `last_edited_by`, `tags`
- **Structure**: varies by type — role definitions have responsibilities + permissions + progression; process docs have steps + governance
- **Cross-linking**: Link to relevant governance files and concept docs
- **Set audit trail**: Update `last_edited_by` and `updated` on every edit

## Load/Skip Decision

**Load this directory when**:
- Documenting community roles or contribution paths
- Answering questions about how to participate in aDNA
- Writing about the Context Commons connection

**Skip when**:
- Technical concept work
- Operational execution within the vault

**Token cost**: ~200 tokens (this AGENTS.md). Individual files are ~1,000-2,000 tokens each.
