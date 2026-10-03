---
type: artifact
mission_id: mission_primer_adna_for_data_engineers
objective: O0
title: "Primer source pack — ranked sources per outline section, sizes measured on disk 2026-10-03; read ≥ 60 KB files with offset/limit"
created: 2026-10-03
updated: 2026-10-03
status: active
last_edited_by: agent_rosetta
executor_tier: fable
executor_runtime: claude
session: session_stanley_20261003_213535_garnier_rulings_and_lanes
tags: [artifact, primer, o0, data_engineer]
---

# Source pack — Operation Primer O0

[D] Every path below was probed on 2026-10-03 (`wc -c`; exists unless marked). Sizes are bytes. Files ≥ 60 KB are marked ⚠ and must be read with offset/limit (heavy-file convention). Rank = the order O1 reads them for that section; **R1** is the authority, later ranks fill gaps. Paths are from this vault's root unless prefixed `~/aDNA/`.

**Primary authority for every normative claim:** `what/docs/adna_standard.md` — 69,247 B, **1,522 lines** ⚠ (v2.5). §3 Triad (line 84) · §3.1 ontology (line 90, "Any piece of project knowledge belongs in exactly one of the three legs", line 100) · §9 Mission System (line 811) · Appendix C gaps (G10 = capability declaration, deferred). **The word "campaign" appears once (ER diagram, line 406)** — the campaign layer is *practice*, not standard (SITREP S3); Appendix A of the primer rests on this fact.

## §0 In one paragraph · §1 The problem
| Rank | Source | Bytes | Why |
|---|---|---|---|
| R1 | `README.md` | 24,393 | the vault's own cold-start voice; quick-start register |
| R2 | `~/aDNA/.adna/what/docs/aDNA_overview.md` | 49,051 | the pre-v7 fork-copy overview (`updated: 2026-07-03`); **not present in this vault's `what/docs/`** — use for shape, verify every claim against R1-authority |
| R3 | `~/aDNA/Canvas.aDNA/what/docs/canvas_standard_explainer.md` | 7,014 | the shape precedent: "the spec is the contract; this is the *why*" |
| R4 | site `/learn/what-is-adna` + `site/src/content/learn/course/` | — | the most polished outsider prose; read rendered or from `site/src/content/learn/` |
| R5 | `what/concepts/concept_agentic_literacy.md` · `concept_context_commons.md` | — | the "context is a data problem" framing |

## §2 The vault standard
| Rank | Source | Bytes | Why |
|---|---|---|---|
| R1 | `what/docs/adna_standard.md` §3–§7 | ⚠ 69,247 | normative: triad, 16 base types (ADR-035), governance files, frontmatter, naming |
| R2 | `what/ontology.md` | 18,771 | the vault's own ontology (`entity_count: 26` = 16 base + 10 ext? — see inconsistencies I-01) |
| R3 | `what/context/adna_core/context_adna_core_entity_definitions.md` · `context_adna_core_ontology_design.md` · `context_adna_core_paradigm_overview.md` | — | plain definitions of each type |
| R4 | `what/concepts/concept_triad.md` · `concept_governance_files.md` · `concept_ontology.md` · `concept_open_standard.md` (13 concepts total, `what/concepts/`) | — | dual-audience explanations already written |
| R5 | `what/glossary/` (30 entries) | — | one-line definitions for the primer's §9 |
| R6 | `what/decisions/adr_035_inventory_identity_base_entity_types.md` | — | why 16 and not 14 |
| R7 | `how/skills/skill_project_fork.md` (in `.adna/`) · `how/skills/skill_state_graduation.md` (10,486) | — | fork model; archive-never-delete in practice |

## §3 Work as data
| Rank | Source | Bytes | Why |
|---|---|---|---|
| R1 | `what/docs/adna_standard.md` §9 (line 811) | ⚠ | the only normative text on missions |
| R2 | `how/campaigns/AGENTS.md` (11,751) · `how/missions/AGENTS.md` (6,526) · `how/sessions/AGENTS.md` (5,685) | — | the campaign → mission → objective protocol as practiced |
| R3 | `what/decisions/adr_016_per_mission_context_budget.md` | — | content-load unit, bands, transition tax, Clause C billing companion |
| R4 | `what/context/adna_core/context_adna_core_convergence_model.md` (4,287) · `what/context/prompt_engineering/context_prompt_engineering_convergence_model.md` (14,272) · `what/concepts/concept_convergence.md` | — | the convergence model |
| R5 | `what/context/adna_core/context_adna_core_ooda_cascade.md` (7,857) · `context_adna_core_campaign_dispatch.md` (8,551) | — | OODA cascade; dispatch |
| R6 | `what/patterns/pattern_model_tiered_campaign_execution.md` (29,065) | — | `executor_tier` doctrine (**fable = judgment · opus = build · sonnet = opt-down**; the inverted line was corrected 2026-09-24 — quote the pattern, not older prose) |
| R7 | `what/context/context_recipes.md` (7,965) · `how/templates/template_aar_lightweight.md` (1,190) | — | recipes; the 5-line AAR |
| R8 | `CLAUDE.md` §Standing Orders · §Governance Doctrine (§7.7 ratification) | — | phase gates are human gates; agents author, operators ratify |

## §4 How agents coordinate
| Rank | Source | Bytes | Why |
|---|---|---|---|
| R1 | `what/doctrine/doctrine_coordination_dropbox.md` (18,798) · `who/coordination/inbox/README.md` · `what/decisions/adr_061_three_valued_memo_authorship.md` (3,830) | — | memos, drop-boxes, receipts, three-valued authorship |
| R2 | `CLAUDE.md` §Single-Writer Lease · `how/sessions/AGENTS.md` (Tier 2 scope + heartbeat) | — | leases and session locks |
| R3 | `~/aDNA/Operations.aDNA/what/ontology/task-entity.md` (12,832; `fencing_token` at :103) · `what/doctrine/doctrine_dispatch_role.md` (7,246) · `Operations.aDNA/AGENTS.md` (21,104) | — | claim-lease with fencing tokens |
| R4 | `~/aDNA/III.aDNA/what/artifacts/iii_airlock_standard_spec.md` ⚠ 66,988 | — | **airlock (1): vault-to-vault traffic contract** |
| R5 | `~/aDNA/RemoteControl.aDNA/how/doctrine/AIRLOCK.md` (25,565) | — | **airlock (2): action-mediation gate** — the word is overloaded (SITREP S6); the primer says so |
| R6 | `~/aDNA/Terminal.aDNA/what/research/v6/R5_protocols.md` ⚠ 65,718 (ruling at :15: "ACP hosts local agents · A2A between graphs, one signed card per node · MCP for tools") | — | A2A cards (**provisional** — mark as such) |
| R7 | `~/aDNA/Automator.aDNA/CLAUDE.md` (14,572) · `~/aDNA/TappProtocol.aDNA/CLAUDE.md` (34,515) | — | the between-missions loop; the advisor-handoff broker |
| R8 | `what/doctrine/doctrine_credential_handling.md` (57,251) §7 | — | names-only credential routing (the primer describes, never names a credential) |

## §5 The network of graphs
| Rank | Source | Bytes | Why |
|---|---|---|---|
| R1 | `~/aDNA/CLAUDE.md` (workspace router) §aDNA Paradigm · §Forge/Platform/Framework/Org-Pattern ecosystems | — | the categories as routed; **router rows are routing identity only** |
| R2 | `what/specs/spec_forge_ecosystem.md` (8,380) · `spec_platform_ecosystem.md` (10,240) · `spec_framework_ecosystem.md` (4,360) · `spec_org_pattern_ecosystem.md` (11,880) | — | the category definitions |
| R3 | `what/patterns/pattern_software_element_context_graph.md` (12,892) · `what/decisions/adr_039_software_element_context_graph_umbrella.md` (5,648) · `adr_045_wrapper_placement_in_triad.md` | — | wrapper + `federation_ref`, "consumer, never fork" |
| R4 | `~/aDNA/Home.aDNA/CLAUDE.md` (28,034) · `~/aDNA/Network.aDNA/CLAUDE.md` ⚠ 100,221 · `~/aDNA/Exchange.aDNA/CLAUDE.md` (26,764) · `~/aDNA/Lighthouse.aDNA/CLAUDE.md` (6,026) | — | node → network → Exchange → lighthouse |
| R5 | `what/lattices/lattice_yaml_schema.json` (11,016) · `how/skills/skill_lattice_publish.md` (7,015) · `what/context/adna_core/context_adna_core_lattice_design.md` · `context_adna_core_type_vocabulary.md` · `context_adna_core_fair_mapping.md` · `concept_lattice_composition.md` · `concept_fair_metadata.md` | — | lattices, 19 I/O types, FAIR, registry |
| R6 | `what/docs/lattice_federation.md` (36,982; dated 02-19) · `federation_walkthrough.md` (5,344; 03-20) · `context_adna_core_federation.md` | — | **stale** pre-Network/Exchange (SITREP S7) — read for mechanism, not current topology |
| R7 | `CLAUDE.md` §Compute Tiers (L0–L3) | — | tiers |

## §6 Why it holds up · §7 Crossmap · §8 Getting started · §9 Glossary
| Rank | Source | Bytes | Why |
|---|---|---|---|
| R1 | `how/campaigns/campaign_haussmann/CLAUDE.md` §Standing conventions (1 honesty · 2 provenance tags · 14 instruments · 19 derive) | — | the conventions in their full form |
| R2 | `what/decisions/adr_062_linkml_adoption.md` (6,867; **accepted 2026-10-03**) | — | crossmap: schema registry ↔ frontmatter + LinkML — *not* "proposed" any more; the mission text predates the signature |
| R3 | `how/skills/skill_state_graduation.md` | — | crossmap: append-only log ↔ STATE graduation |
| R4 | `~/aDNA/Operations.aDNA/what/ontology/task-entity.md` | — | crossmap: lease + fencing token |
| R5 | `~/aDNA/CLAUDE.md` Standing Rule 1 (clone one-liner) · site `/get-started/what-your-agent-reads` | — | §8 |
| R6 | `what/glossary/` (30) · `what/docs/standard_reading_guide.md` (7,585; says **1,336 lines**, standard is 1,522 — I-05) | — | §9 glossary + reading paths |

## Reader context (not a source for claims)
`~/aDNA/LAVentureGraph.aDNA/who/contacts/contact_andy_zhang.md` `[R]` · `~/aDNA/RiemannCommons.aDNA/README.md` (register precedent) · `~/aDNA/RiemannCommons.aDNA/what/write_gate_checklist.md` (884 B; the scrub's parent).

## Reading budget for O1
Heavy (⚠, offset/limit): the standard · III airlock spec · Terminal R5 · Network CLAUDE. Everything else fits whole. Estimated O1 read load ≈ 60–75 kT before writing; the 120 kT O1 estimate holds.
