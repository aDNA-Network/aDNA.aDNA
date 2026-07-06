---
type: glossary_entry
created: 2026-04-14
updated: 2026-07-06
status: active
term: "Template"
spec_section: "§12.1"
see_also: [how, frontmatter, conformance level, derived index]
last_edited_by: agent_rosetta
tags: [glossary, operations]
---

# Template

## Plain-Language Definition

A template is a reusable blueprint for creating new files of a specific type. Instead of starting from scratch, agents copy the template and fill in the blanks. Templates ensure every file of the same type has consistent structure and metadata — like a form with pre-printed field labels.

## Technical Definition

Reusable file structures stored in `how/templates/`, following the naming pattern `template_{type}.md`. Templates MUST include [[what/glossary/glossary_frontmatter|frontmatter]] with all base fields plus type-specific fields pre-populated. Three graduated sets: Starter (session, mission, context — MUST exist), Standard (adds coordination, backlog, ADR — SHOULD exist), Full (adds domain-specific types — MAY exist). A template index is RECOMMENDED for projects with 5+ templates. (aDNA Standard §12.1-§12.2)

## Usage Examples

- This vault has 42 templates (25 base + 11 extension + 6 operational). The glossary entries you are reading were created from `how/templates/template_glossary_entry.md`, which pre-defines the frontmatter fields (`term`, `spec_section`, `see_also`) and section structure (Plain-Language Definition, Technical Definition, Usage Examples, See Also).
- Every content type used in the vault has a matching template — this is a Full [[what/glossary/glossary_conformance_level|conformance]] requirement.

## See Also

- [[what/glossary/glossary_frontmatter|Frontmatter]]
- [[what/glossary/glossary_how|how/]]
- [[what/glossary/glossary_conformance_level|Conformance Level]]
- [[what/glossary/glossary_derived_index|Derived Index]]
