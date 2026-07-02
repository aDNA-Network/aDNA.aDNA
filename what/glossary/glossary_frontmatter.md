---
type: glossary_entry
created: 2026-04-14
updated: 2026-07-02
status: active
term: "Frontmatter"
spec_section: "§7.1-§7.2"
see_also: [collision prevention, governance file, template, standard registers]
last_edited_by: agent_rosetta
tags: [glossary, metadata]
---

# Frontmatter

## Plain-Language Definition

Frontmatter is the structured metadata block at the top of every aDNA file, wrapped in `---` fences. It records what type of content the file is, when it was created and updated, who last edited it, and what tags apply. It is the file's ID card — agents read it to understand what they are looking at before reading the content.

## Technical Definition

YAML metadata required at the top of every content file inside the triad. Base fields (MUST on all files): `type`, `status`, `created`, `updated`, `last_edited_by`, `tags`. **Ratified refinement (ADR-044, accepted 2026-06-30):** `status` is OPTIONAL on `type: directory_index` and `type: coordination` files, and the conformance walk excludes embedded instance trees — here the reference instance leads the written standard (v2.4's text still reads status-on-all), folding into the doc at the *proposed* v2.5 cut (ADR-046, pending the G2 operator gate; see [[what/glossary/glossary_standard_registers|Standard Registers]] on the two-track version). Extended fields (type-specific): vary by content type and are defined in [[what/glossary/glossary_template|templates]]. The `last_edited_by` and `updated` fields MUST be updated on every modification as part of [[what/glossary/glossary_collision_prevention|collision prevention]] (Tier 1). (aDNA Standard §7.1-§7.2)

## Usage Examples

- This glossary entry's own frontmatter (visible at the top of this file) demonstrates the pattern: `type: glossary_entry`, `term: "Frontmatter"`, `spec_section: "§7.1-§7.2"`, `see_also: [...]`.
- The `status` field enables content lifecycle management: `draft` → `active` → `archived`.

## See Also

- [[what/glossary/glossary_collision_prevention|Collision Prevention]]
- [[what/glossary/glossary_template|Template]]
- [[what/glossary/glossary_standard_registers|Standard Registers]]
- [[what/concepts/concept_governance_files|Governance Files (concept)]]
