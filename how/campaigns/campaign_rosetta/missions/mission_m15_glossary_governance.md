---
mission_id: m15
type: mission
title: "Glossary + Governance"
campaign: campaign_rosetta
status: completed
priority: high
created: 2026-04-14
updated: 2026-04-14
last_edited_by: agent_stanley
tags: [mission, rosetta, glossary, governance, phase-4]
---

# M15 — Glossary + Governance

## Mission Brief

Build the canonical glossary for the aDNA standard and complete the governance documentation layer. The glossary provides concise, dual-audience term definitions that serve as the lookup layer for the vault — each entry links to deeper concept files. The governance docs complete the community infrastructure needed for M13 (Community Architecture).

**Execution order note**: M15 executes first in Phase 4 (before M13 and M14) because glossary terms and governance docs are foundational references that downstream files will wikilink to.

## Objectives

### O1: Glossary Foundation (13 entries) — Session 1

Create glossary entries for core aDNA terminology from adna_standard.md §2 + structural terms:

| # | File | Term | Spec § |
|---|------|------|--------|
| 1 | `glossary_adna.md` | aDNA | §1.1 |
| 2 | `glossary_triad.md` | Triad | §3.1 |
| 3 | `glossary_what.md` | what/ | §3.1, §5.1 |
| 4 | `glossary_how.md` | how/ | §3.1, §5.3 |
| 5 | `glossary_who.md` | who/ | §3.1, §5.2 |
| 6 | `glossary_governance_file.md` | Governance file | §4.1 |
| 7 | `glossary_bare_triad.md` | Bare triad | §3.2 |
| 8 | `glossary_embedded_triad.md` | Embedded triad | §3.3 |
| 9 | `glossary_deployment_form.md` | Deployment form | §3.4 |
| 10 | `glossary_session.md` | Session | §8.1 |
| 11 | `glossary_sitrep.md` | SITREP | §8.4 |
| 12 | `glossary_content_as_code.md` | Content-as-code | §14.1 |
| 13 | `glossary_agents_md.md` | AGENTS.md | §4.5 |

### O2: Remaining Glossary + Index (12 entries + index) — Session 2

| # | File | Term | Spec § |
|---|------|------|--------|
| 14 | `glossary_readme_md.md` | README.md | §4.6 |
| 15 | `glossary_conformance_level.md` | Conformance level | §5.5 |
| 16 | `glossary_conformant_instance.md` | Conformant instance | §5.5 |
| 17 | `glossary_mission.md` | Mission | §9.1 |
| 18 | `glossary_frontmatter.md` | Frontmatter | §7.1-7.2 |
| 19 | `glossary_context_library.md` | Context library | §10.1 |
| 20 | `glossary_coordination_note.md` | Coordination note | §11.1 |
| 21 | `glossary_collision_prevention.md` | Collision prevention | §13.1 |
| 22 | `glossary_template.md` | Template | §12.1 |
| 23 | `glossary_question_test.md` | Question test | §3.1 |
| 24 | `glossary_skill.md` | Skill | §19.3 |
| 25 | `glossary_ontology_extension.md` | Ontology extension | §5.1 |
| 26 | `glossary_index.md` | (index) | — |

### O3: Governance Documents (3 files) — Session 2

| File | Focus |
|------|-------|
| `governance_code_of_conduct.md` | Contributor Covenant adapted to aDNA context |
| `governance_contribution_standards.md` | How to submit improvements, naming rules, quality gates |
| `governance_conflict_resolution.md` | Escalation & dispute resolution |

## Quality Gates

- [ ] Every glossary entry: 200-400 tokens
- [ ] Every entry: plain-language def + technical def with §reference
- [ ] Every file: 2+ wikilinks
- [ ] Every file: self-reference to THIS vault
- [ ] Every file: complete frontmatter per template
- [ ] Glossary index covers all 25 terms

## Dependencies

- **Depends on**: adna_standard.md (§2, §3-§14), concept files (for see_also links)
- **Blocks**: M13 (governance docs needed), M14 (glossary terms needed)

## AAR (After Action Review)

- **Worked**: Executing M15 first (before M13/M14) maximized cross-link density. Template-driven glossary entries were fast to produce consistently. Organizing the index by semantic category (Architecture, Governance, Operations, Knowledge) aids scanning.
- **Didn't**: Nothing blocked; all objectives completed in a single session.
- **Finding**: 25 terms fully covers the adna_standard.md §2 table plus key operational terms. Additional terms (e.g., campaign, AAR, OODA) could be added later as a backlog item.
- **Change**: Future glossary batches should follow the same spec-section-first approach — reading the normative definition before writing the dual-audience version.
- **Follow-up**: Phase 5 publishing pipeline should include glossary as a dedicated site section (Website v2, M19).
