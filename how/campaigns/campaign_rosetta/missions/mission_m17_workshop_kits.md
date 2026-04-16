---
mission_id: m17
type: mission
title: "Workshop Kits"
campaign: campaign_rosetta
status: completed
priority: high
created: 2026-04-16
updated: 2026-04-16
last_edited_by: agent_stanley
tags: [mission, rosetta, phase-5, workshops]
---

# M17 — Workshop Kits

## Mission Brief

Create three workshop kits spanning the skill ladder (beginner through advanced) plus a standalone facilitation guide. Each workshop uses this vault as the primary teaching material, cross-references existing tutorials as pre-work, and includes timed agendas, exercises, and facilitator notes.

## Objectives

### O1: Vault Exploration Workshop (completed 2026-04-16)

- [x] Created `how/workshops/workshop_vault_exploration.md`
- [x] 60-minute workshop for mixed audiences — 4 exercises: Triad Walk, AGENTS.md Chain, Question Test, Governance Trio
- [x] Pre-work linked: `tutorial_navigate_a_vault`, `tutorial_question_test`
- [x] Self-reference: exercises point at real files in this vault

### O2: Build Your First Vault Workshop (completed 2026-04-16)

- [x] Created `how/workshops/workshop_build_your_first_vault.md`
- [x] 90-minute workshop for developers — 4 exercises: Fork, CLAUDE.md, Extend Ontology, First Mission
- [x] Pre-work linked: `tutorial_first_claude_md`, `tutorial_extend_the_ontology`
- [x] Self-reference: participants follow the exact Phase 0 process of aDNA.aDNA

### O3: Lattice Design Workshop (completed 2026-04-16)

- [x] Created `how/workshops/workshop_lattice_design.md`
- [x] 120-minute workshop for developers — 4 exercises: Sketch, Build YAML, Validate, Compose
- [x] Pre-work linked: `tutorial_build_a_lattice`
- [x] Self-reference: uses `hello_world.lattice.yaml` and `composed_therapeutics.lattice.yaml` from this vault

### O4: Facilitation Guide (completed 2026-04-16)

- [x] Created `how/workshops/workshop_facilitation_guide.md`
- [x] Covers audience assessment, room setup, pre-installation, pacing, mixed-audience management, FAQ, follow-up
- [x] References all three workshops with routing table

## Dependencies

- Depends on: Phase 2 complete (tutorials exist for pre-work references)
- No blocking dependencies on M16 or M18

## AAR

- **Worked**: Structuring each workshop with consistent sections (Goals, Agenda, Facilitator Notes, Exercises, Assessment) made production fast. The template enforced completeness.
- **Didn't**: Nothing blocked. The facilitation guide is the only file without timed exercises, which makes it feel lighter — but that's correct for a meta-guide.
- **Finding**: The workshop series naturally mirrors the tutorial difficulty ladder (beginner/intermediate/advanced), which reinforces the learning path. Cross-linking pre-work tutorials creates a dependency chain: workshops build on tutorials, which build on concepts.
- **Change**: Future workshops could include printable handouts as separate files rather than inline descriptions. Consider a `how/workshops/materials/` subdirectory for downloadable assets.
- **Follow-up**: M19 should add workshop pages to the site. The facilitation guide and workshop kits are strong candidates for a new `/workshops/` site section.
