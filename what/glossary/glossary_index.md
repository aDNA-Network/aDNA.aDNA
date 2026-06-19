---
type: glossary_entry
created: 2026-04-14
updated: 2026-04-14
status: active
term: "Glossary Index"
spec_section: ""
see_also: []
last_edited_by: agent_stanley
tags: [glossary, index]
---

# aDNA Glossary — Quick Reference

A single-page lookup table for all aDNA terms. Each entry links to its full definition with plain-language and technical explanations.

## Core Architecture

| Term | Plain-Language Summary | Full Entry |
|------|----------------------|------------|
| **aDNA** | Knowledge architecture standard for AI-native projects | [[what/glossary/glossary_adna|glossary_adna]] |
| **Triad** | The `what/how/who` folder structure | [[what/glossary/glossary_triad|glossary_triad]] |
| **what/** | Knowledge layer — what the project knows | [[what/glossary/glossary_what|glossary_what]] |
| **how/** | Operations layer — how the project works | [[what/glossary/glossary_how|glossary_how]] |
| **who/** | Organization layer — who is involved | [[what/glossary/glossary_who|glossary_who]] |
| **Question Test** | "Is this WHAT/HOW/WHO?" classification method | [[what/glossary/glossary_question_test|glossary_question_test]] |
| **Bare Triad** | Triad folders at project root | [[what/glossary/glossary_bare_triad|glossary_bare_triad]] |
| **Embedded Triad** | Triad folders inside `.agentic/` | [[what/glossary/glossary_embedded_triad|glossary_embedded_triad]] |
| **Deployment Form** | How the triad is physically instantiated (bare or embedded) | [[what/glossary/glossary_deployment_form|glossary_deployment_form]] |
| **Ontology Extension** | Adding domain-specific entity types beyond the base 16 | [[what/glossary/glossary_ontology_extension|glossary_ontology_extension]] |

## Governance & Metadata

| Term | Plain-Language Summary | Full Entry |
|------|----------------------|------------|
| **Governance File** | Root-level ALLCAPS files (CLAUDE, MANIFEST, STATE, AGENTS, README) | [[what/glossary/glossary_governance_file|glossary_governance_file]] |
| **AGENTS.md** | Per-directory guide written for agents | [[what/glossary/glossary_agents_md|glossary_agents_md]] |
| **README.md** | Per-directory guide written for humans | [[what/glossary/glossary_readme_md|glossary_readme_md]] |
| **Frontmatter** | YAML metadata block at the top of every content file | [[what/glossary/glossary_frontmatter|glossary_frontmatter]] |
| **Conformance Level** | Starter/Standard/Full tiers of aDNA compliance | [[what/glossary/glossary_conformance_level|glossary_conformance_level]] |
| **Conformant Instance** | A directory tree meeting at least Starter requirements | [[what/glossary/glossary_conformant_instance|glossary_conformant_instance]] |

## Operations

| Term | Plain-Language Summary | Full Entry |
|------|----------------------|------------|
| **Session** | One bounded stretch of agent work | [[what/glossary/glossary_session|glossary_session]] |
| **SITREP** | Structured status report at session close | [[what/glossary/glossary_sitrep|glossary_sitrep]] |
| **Mission** | Multi-session work decomposition (Campaign → Mission → Objective) | [[what/glossary/glossary_mission|glossary_mission]] |
| **Template** | Reusable file blueprint in `how/templates/` | [[what/glossary/glossary_template|glossary_template]] |
| **Skill** | Reusable agent procedure in `how/skills/` | [[what/glossary/glossary_skill|glossary_skill]] |
| **Content-as-Code** | Folder-based workflow where location = processing state | [[what/glossary/glossary_content_as_code|glossary_content_as_code]] |

## Knowledge & Coordination

| Term | Plain-Language Summary | Full Entry |
|------|----------------------|------------|
| **Context Library** | Structured knowledge store in `what/context/` | [[what/glossary/glossary_context_library|glossary_context_library]] |
| **Coordination Note** | Ephemeral agent-to-agent message in `who/coordination/` | [[what/glossary/glossary_coordination_note|glossary_coordination_note]] |
| **Collision Prevention** | Tiered system protecting against concurrent edit conflicts | [[what/glossary/glossary_collision_prevention|glossary_collision_prevention]] |
