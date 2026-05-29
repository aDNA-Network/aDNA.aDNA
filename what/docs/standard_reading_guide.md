---
type: context
title: "aDNA Standard Reading Guide"
created: 2026-03-19
updated: 2026-05-29
status: active
last_edited_by: agent_stanley
tags: [adna, standard, reading-guide, navigation]
token_estimate: 2200
---

# aDNA Standard Reading Guide

The [aDNA Universal Standard](adna_standard.md) is 1,336 lines. You don't need all of them. This guide maps three reading paths by reader intent, provides a section-by-section table of contents, and disambiguates the skill/lattice dual identity.

---

## 1. Reading Paths

Three personas, three curated paths:

| Persona | Goal | Sections | ~Lines | Time |
|---|---|---|---|---|
| <img src="../../site/src/assets/icons/icon_learn.svg" alt="learn" width="16" /> **New adopter** | Get a working vault | §§1-5, §7 | ~350 | 10-15 min |
| <img src="../../site/src/assets/icons/icon_how.svg" alt="how" width="16" /> **Extension builder** | Add entity types, templates, pipelines | New adopter path + §§6, 12, 14, 19 | ~550 | 20-25 min |
| <img src="../../site/src/assets/icons/icon_reference.svg" alt="reference" width="16" /> **Standard contributor** | Understand the full spec | Everything | 1,336 | 45-60 min |

### <img src="../../site/src/assets/icons/icon_learn.svg" alt="learn" width="18" /> New Adopter Path

Read in order — structural foundation to set up and operate an aDNA vault. **§1** Introduction & Scope (what aDNA is, RFC 2119 keywords) → **§2** Terminology (12 key terms) → **§3** Triad Architecture (`who/what/how` ontology, bare vs embedded) → **§4** Governance Files (CLAUDE/MANIFEST/STATE/AGENTS/README) → **§5** Directory Structure → **§7** Frontmatter System. Come back for sessions (§8), missions (§9), and collision prevention (§13) when you need them.

### <img src="../../site/src/assets/icons/icon_how.svg" alt="how" width="18" /> Extension Builder Path

New adopter path plus: **§6** Naming Conventions (`type_descriptive_name.md`, ALLCAPS governance list) → **§12** Template System (Starter/Standard/Full) → **§14** Content-as-Code Pipelines (file location = processing state) → **§19** Optional Extensions (registry, backlog, skills, CI, reference code, ADRs).

### <img src="../../site/src/assets/icons/icon_reference.svg" alt="reference" width="18" /> Standard Contributor Path

Read everything. Appendices (§20) contain the persona framework, aggregation point patterns, deferred topics, and the decision traceability matrix (40 design decisions → spec locations).

---

## 2. Section Map

All 20 sections with one-line summaries, persona tags, and line ranges.

| § | Section | Summary | Personas | Lines |
|---|---|---|---|---|
| 1 | Introduction & Scope | What aDNA is, who it's for, RFC 2119 keywords | All | 19-52 |
| 2 | Terminology | 12 key terms: triad, governance file, bare/embedded, session, SITREP, content-as-code | All | 54-73 |
| 3 | Triad Architecture | `who/what/how` ontology, bare vs embedded forms, classification question test | All | 75-171 |
| 4 | Governance Files | CLAUDE/MANIFEST/STATE/AGENTS/README — purpose, contents, quickstart | All | 173-294 |
| 5 | Directory Structure | Required/recommended/optional subdirectories per triad leg | All | 296-462 |
| 6 | Naming Conventions | Underscores not hyphens, `type_descriptive_name.md`, ALLCAPS list, `type_` prefixes | Extension+ | 464-516 |
| 7 | Frontmatter System | Required base fields, tag conventions | All | 518-570 |
| 8 | Session Model | Bounded units of work — lifecycle, tiers, SITREP, next-session prompt, 75% rule | Operations | 572-664 |
| 9 | Mission System | Multi-session decomposition — objectives, acceptance criteria, handoff | Operations | 666-713 |
| 10 | Context Library | `what/context/` — topic organization, subtypes, token budget awareness | Operations | 715-759 |
| 11 | Coordination Protocol | `who/coordination/` — cross-agent notes, urgency levels, ephemeral by design | Multi-agent | 761-789 |
| 12 | Template System | Starter/Standard/Full sets, naming + conventions | Extension+ | 791-827 |
| 13 | Collision Prevention | Universal (frontmatter), sync (file safety), multi-agent (coordination + scope) | Operations | 829-887 |
| 14 | Content-as-Code Pipelines | File location IS processing state | Extension+ | 889-939 |
| 15 | Archive & Versioning | Archive for sync vs git, retention, CLAUDE.md version tracking | Reference | 941-970 |
| 16 | Tool Integration Tiers | Core (Tier 1), frontmatter querying (Tier 2), environment-specific (Tier 3) | Reference | 972-1028 |
| 17 | Error & Recovery Protocol | Data integrity (STOP), state inconsistency (fix + log), process issues (workaround + backlog) | Operations | 1030-1064 |
| 18 | Success Criteria | Minimum viable, recommended, aspirational | Contributor | 1066-1116 |
| 19 | Optional Extensions | Registry, backlog, skills, CI awareness, reference code, ADRs | Extension+ | 1118-1198 |
| 20 | Appendices | Persona framework, aggregation points, deferred topics, decision traceability (40 decisions) | Contributor | 1200-1336 |

**Persona key**: All / Extension+ / Operations / Multi-agent / Reference / Contributor.

---

## 3. When to Read the Design Document

[`adna_design.md`](adna_design.md) is the "why" companion — rationale, worked examples (standalone, nested, federated), trade-off analysis. The standard tells you **what** to do; the design document tells you **why**. Not required for operational use.

---

## 4. Skill vs Lattice: When to Use Which

aDNA has two "reusable capability" constructs — **skill files** (`how/skills/skill_<name>.md`, Markdown procedural steps, agent-follows) and **skill-type lattices** (`what/lattices/<name>.lattice.yaml`, YAML DAG, runtime-engine-traverses). Skill files are local to the vault and not publishable; lattices are publishable via `latlab lattice publish` and composable with other lattices.

**Decision rule**: **Start with a skill file.** Promote to `lattice_type: skill` via `how/skills/skill_lattice_publish.md` when the procedure needs registry publishing, composition with other lattices, or runtime execution. Examples: "deploy in 5 steps" → skill file; "ESM-2 embedding → clustering → visualization" → lattice (computational pipeline); "review and audit context quality" → skill file; "compose protein design with docking + scoring" → lattice (multi-module DAG).

---

## 5. Quick Reference — "I want to..."

| Goal | Where to look |
|---|---|
| Set up my first vault | §§3-5, or the [README Quick Start](../../README.md#quick-start) |
| Add a new entity type | §§6 + 7 + 19 |
| Track sessions | §8 |
| Run a multi-session project | §9 |
| Write an agent skill | `how/skills/AGENTS.md` + §19.3; then §4 above for lattice promotion |
| Build a pipeline | §14 |
| Evaluate aDNA for my project | [`adna_design.md`](adna_design.md) — the "why" doc |
| Add aDNA to an existing codebase | [`migration_guide.md`](migration_guide.md) |
| Use aDNA without Obsidian | [`agent_first_guide.md`](agent_first_guide.md) |
| Manage multiple aDNA projects | [`projects_folder_pattern.md`](projects_folder_pattern.md) |

---

## Cross-References

- [aDNA Universal Standard](adna_standard.md) — normative spec
- [aDNA Design Document](adna_design.md) — architecture rationale and trade-offs
- [Migration Guide](migration_guide.md) — adding aDNA to existing projects
- [Agent-First Guide](agent_first_guide.md) — terminal-first aDNA setup
- [Projects Folder Pattern](projects_folder_pattern.md) — multi-project workspace
- [Skills Protocol](../../how/skills/AGENTS.md) — skill file conventions and categories
