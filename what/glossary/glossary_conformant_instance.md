---
type: glossary_entry
created: 2026-04-14
updated: 2026-04-14
status: active
term: "Conformant Instance"
spec_section: "§5.5"
see_also: [conformance level, aDNA, triad]
last_edited_by: agent_stanley
tags: [glossary, architecture, conformance]
---

# Conformant Instance

## Plain-Language Definition

A conformant instance is any project directory that meets the requirements for at least the Starter level of the aDNA standard. It has the right folders, the right governance files, and properly formatted metadata. It is a working aDNA project, not just files in a directory.

## Technical Definition

A directory tree that satisfies all MUST requirements for at least the Starter [[what/glossary/glossary_conformance_level|conformance level]] defined in §5.5. At minimum: CLAUDE.md, MANIFEST.md, and README.md at root; `what/`, `how/`, `who/` triad directories; required subdirectories (`what/context/`, `how/missions/`, `how/sessions/`, `how/templates/`, `who/coordination/`, `who/governance/`); and base frontmatter fields on all content files. (aDNA Standard §5.5)

## Usage Examples

- This vault is a conformant instance at Full level. You can verify conformance programmatically using `what/lattices/tools/compliance_checker.py`.
- An instance that does not declare a conformance level in MANIFEST.md is assumed to be unverified — it may conform, but hasn't been checked.

## See Also

- [[what/glossary/glossary_conformance_level|Conformance Level]]
- [[what/glossary/glossary_adna|aDNA]]
- [[what/glossary/glossary_triad|Triad]]
