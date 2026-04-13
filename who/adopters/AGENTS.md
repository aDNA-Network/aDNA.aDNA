---
type: directory_index
created: 2026-04-13
updated: 2026-04-13
last_edited_by: agent_stanley
tags: [directory_index, adopter]
---

# who/adopters/ — Agent Guide

## What's Here

Adopter personas and deployment profiles. Archetypal user portraits that help the project understand its audiences — what they need, how they use aDNA, and what ontology extensions they typically create. Personas complement use cases (which are narrative) with structured profiles (which are reference).

One file per adopter persona.

## Working Rules

- **Naming**: `adopter_{persona_name}.md` (underscores, lowercase)
- **Required frontmatter**: `type: adopter`, `created`, `updated`, `status`, `persona_type` (individual | team | organization), `technical_level` (beginner | intermediate | expert), `domain`, `deployment_form` (bare | embedded), `last_edited_by`, `tags`
- **Structure**: Background → Goals → Pain Points → How They Use aDNA → Typical Ontology Extensions → Related Use Cases
- **Cross-linking**: Link to relevant use cases, tutorials, and concept files
- **Set audit trail**: Update `last_edited_by` and `updated` on every edit

## Load/Skip Decision

**Load this directory when**:
- Creating adopter personas or audience profiles
- Tailoring documentation for a specific audience
- Designing onboarding paths for different user types

**Skip when**:
- Technical concept work
- Operational execution

**Token cost**: ~200 tokens (this AGENTS.md). Individual personas are ~800-1,500 tokens each.
