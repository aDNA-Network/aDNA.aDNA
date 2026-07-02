---
type: glossary_entry
created: 2026-07-02
updated: 2026-07-02
status: active
term: "Standard Registers"
spec_section: "§15.4"
see_also: [aDNA, conformance level, frontmatter]
last_edited_by: agent_rosetta
tags: [glossary, governance, disambiguation, versioning]
---

# Standard Registers

## Plain-Language Definition

In this workspace the word "standard" gets used for five different things. When someone says "this touches the standard," the first question is always *which* one — the published spec? the rules for building one kind of software? the workspace's house rules? Each lives in a different place and is versioned differently. This entry is the decoder ring: it names the five registers so a reader never confuses "we cut a new version of the spec" with "we changed a house rule." (This is the fix for audit finding F-CHM-204, which flagged the word as overloaded.)

## Technical Definition

Five distinct referents of "standard" in the aDNA workspace:

| Register | Lives at | Versioned by |
|----------|----------|--------------|
| **Universal Standard doc** | `what/docs/adna_standard.md` | semver `v2.x` track (currently v2.4) |
| **Ecosystem spec corpus** | `what/specs/spec_*_ecosystem.md` | per-spec, prose-dated |
| **Workspace Standing Rules** | root `CLAUDE.md` (router) | governance-version + git history |
| **Governance version track** | `CLAUDE.md` `version:` + `CHANGELOG.md` | governance semver (currently 6.0) |
| **Scoped rubrics / exemplar standards** | e.g. ADR-040 "Obsidian Node Exemplar Standard" | their own ADR/rubric scope |

**Two-track versioning** (`adna_standard.md` §15.4, ADR-011): the *written standard* (the doc's semver, v2.4) and the *reference instance* (this vault) advance on separate tracks — the instance may lead the written text, which catches up at a version cut. That is exactly why a ratified refinement like ADR-044 can be live in the instance while v2.4's prose is still stricter, folding in only at the *proposed* v2.5 cut (ADR-046, pending the G2 operator gate).

**Rule of thumb:** when an ADR or memo says it "touches the standard," check which register — a spec-doc change bumps the `v2.x` semver, a house-rule change is governance-versioned, and a rubric change touches only its own scope.

## Usage Examples

- "The v2.5 cut" means the Universal Standard doc's semver track — not the governance `version: 6.0` in CLAUDE.md, which tracks the *workspace router's* own history.
- ADR-044 refines the [[what/glossary/glossary_frontmatter|frontmatter]] rule in the reference instance; only the Universal Standard doc register folds it in, at v2.5.

## See Also

- [[what/glossary/glossary_adna|aDNA]]
- [[what/glossary/glossary_conformance_level|Conformance Level]]
- [[what/glossary/glossary_frontmatter|Frontmatter]]
