---
type: glossary_entry
created: 2026-04-14
updated: 2026-07-02
status: active
term: "Conformant Instance"
spec_section: "§5.5"
see_also: [conformance level, aDNA, triad, standard registers]
last_edited_by: agent_rosetta
tags: [glossary, architecture, conformance]
---

# Conformant Instance

## Plain-Language Definition

A conformant instance is any project directory that meets the requirements for at least the Starter level of the aDNA standard. It has the right folders, the right governance files, and properly formatted metadata. It is a working aDNA project, not just files in a directory.

## Technical Definition

A directory tree that satisfies all MUST requirements for at least the Starter [[what/glossary/glossary_conformance_level|conformance level]] defined in §5.5. At minimum: CLAUDE.md, MANIFEST.md, and README.md at root; `what/`, `how/`, `who/` triad directories; required subdirectories (`what/context/`, `how/missions/`, `how/sessions/`, `how/templates/`, `who/coordination/`, `who/governance/`); and base frontmatter fields on all content files. (aDNA Standard §5.5) Per ADR-044 (accepted 2026-06-30), `status` is optional on `type: directory_index` and `type: coordination` files, and the conformance walk excludes embedded instance trees — the reference instance leads the written v2.4 text here, which folds at the *proposed* v2.5 cut ([[what/glossary/glossary_standard_registers|Standard Registers]]).

## Usage Examples

- This vault is a conformant instance at Full level. You can verify conformance programmatically using `what/lattices/tools/compliance_checker.py`.
- An instance that does not declare a conformance level in MANIFEST.md is assumed to be unverified — it may conform, but hasn't been checked.

## See Also

- [[what/glossary/glossary_conformance_level|Conformance Level]]
- [[what/glossary/glossary_adna|aDNA]]
- [[what/glossary/glossary_triad|Triad]]
- [[what/glossary/glossary_standard_registers|Standard Registers]]
