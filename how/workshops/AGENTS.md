---
type: directory_index
created: 2026-04-13
updated: 2026-04-13
last_edited_by: agent_stanley
tags: [directory_index, workshop]
---

# how/workshops/ — Agent Guide

## What's Here

Workshop kits for teaching aDNA to groups. Each file is a complete facilitation plan — goals, agenda, exercises, materials list, and facilitator notes. Designed for mixed technical/non-technical audiences. A standalone facilitation guide provides meta-advice for running any aDNA workshop.

One file per workshop kit, plus one facilitation guide.

## Working Rules

- **Naming**: `workshop_{name}.md` (underscores, lowercase)
- **Required frontmatter**: `type: workshop`, `created`, `updated`, `status`, `duration` (e.g., "90 minutes"), `audience` (description), `difficulty` (beginner | intermediate | mixed), `prerequisites` (list), `last_edited_by`, `tags`
- **Structure**: Workshop Goals → Agenda (with time blocks) → Facilitator Notes → Materials / Prerequisites → Exercises → Assessment / Feedback
- **Cross-linking**: Reference tutorials as pre-work or in-workshop activities
- **Set audit trail**: Update `last_edited_by` and `updated` on every edit

## Load/Skip Decision

**Load this directory when**:
- Creating or reviewing workshop plans
- Planning aDNA training events
- Building community education programs

**Skip when**:
- Writing concepts, patterns, or tutorials
- Operational execution

**Token cost**: ~200 tokens (this AGENTS.md). Individual workshop kits are ~3,000-5,000 tokens each.
