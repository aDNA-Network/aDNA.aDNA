---
type: glossary_entry
created: 2026-07-02
updated: 2026-07-02
status: active
term: "Derived Index"
spec_section: ""
see_also: [template, governance file, ratification record]
last_edited_by: agent_rosetta
tags: [glossary, governance, tooling]
---

# Derived Index

## Plain-Language Definition

A derived index is a summary file that is *generated* from other files rather than written by hand — like a table of contents a program builds by scanning every chapter. Because it is generated, you fix it by re-running the generator, not by editing the summary directly. Hand-edit it and your change gets wiped the next time it regenerates — and until then it quietly disagrees with the source it is supposed to mirror.

## Technical Definition

An index file whose rows are produced from a set of source-of-truth files by a regeneration step — never hand-edited. The reference instance is `what/decisions/adr_index.md`, generated from the `adr_*.md` files. A drift check confirms integrity: **row count == source-file count − 1**, because the index file's own name (`adr_index.md`) matches the `adr_*.md` glob and must be subtracted. Regenerate-don't-hand-edit is the operating rule; the tally also carries status discipline (e.g. *39 accepted · 1 amended · 1 proposed* across 41 rows). Contrast a [[what/glossary/glossary_template|template]] (a blueprint you fill in) with a derived index (an artifact you regenerate).

## Usage Examples

- `adr_index.md` shows 41 rows against 42 `adr_*.md` files — the difference is the index self-matching its own glob, not a missing ADR.
- After a new ADR is ratified (see [[what/glossary/glossary_ratification_record|ratification record]]), you regenerate the index rather than appending a row by hand, so the accepted/proposed tally stays honest.

## See Also

- [[what/glossary/glossary_template|Template]]
- [[what/glossary/glossary_governance_file|Governance File]]
- [[what/glossary/glossary_ratification_record|Ratification Record]]
