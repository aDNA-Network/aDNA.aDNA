---
mission_id: m14
type: mission
title: "Adopter Personas"
campaign: campaign_rosetta
status: completed
priority: high
created: 2026-04-14
updated: 2026-04-14
last_edited_by: agent_stanley
tags: [mission, rosetta, adopters, phase-4]
---

# M14 — Adopter Personas

## Mission Brief

Create 5 structured adopter persona cards that serve as quick-reference profiles for the vault's target audiences. Each persona extracts structured data from the corresponding narrative use case — the use case tells a story; the persona card provides a lookup reference.

## Objectives

### O1: 5 Adopter Persona Cards

| File | Source | persona_type | technical_level | deployment_form |
|------|--------|-------------|----------------|----------------|
| `adopter_solo_developer.md` | use_case_solo_developer | individual | intermediate | bare |
| `adopter_enterprise_team.md` | use_case_enterprise_team | team | expert | embedded |
| `adopter_educator.md` | use_case_educator | individual | beginner | bare |
| `adopter_startup.md` | use_case_startup | team | intermediate | bare |
| `adopter_researcher.md` | use_case_research_lab | team | expert | bare |

## Quality Gates

- [ ] Every file: complete frontmatter per template_adopter.md
- [ ] Every file: 2+ wikilinks
- [ ] Every file: self-reference to THIS vault
- [ ] Every file: Typical Ontology Extensions table
- [ ] Every file: cross-link to source use case + recommended tutorial

## Dependencies

- **Depends on**: M08 (use cases as source material), M15 (glossary terms), M13 (community roles)

## AAR (After Action Review)

- **Worked**: Extracting structured personas from narrative use cases was clean — the use cases had consistent character-driven structure. Ontology Extensions tables add concrete value absent from narratives. Self-reference patterns (citing this vault's own structure as examples) were natural and non-forced.
- **Didn't**: The 6th use case (open_source_project) was intentionally omitted — its content overlaps with community_roles.md and community_processes.md from M13.
- **Finding**: Enterprise team persona revealed the embedded triad as the natural fit for code-first teams — all other personas use bare. This distinction is worth highlighting in tutorials.
- **Change**: None needed. 5 personas cover the audience spectrum well.
- **Follow-up**: Website v2 (M19) should add an "Adopters" section alongside the existing concept/tutorial/pattern navigation.
