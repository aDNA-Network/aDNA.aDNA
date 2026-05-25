---
type: session
session_id: session_stanley_20260525T012134Z_v8_m35_s2
agent: stanley
persona: rosetta
tier: 1
created: 2026-05-24
updated: 2026-05-24
status: active
intent: "M3.5 S2 — substrate-landing destructive session per /Users/stanley/.claude/plans/please-read-the-claude-md-lexical-hippo.md. 6 of 8 cumulative deliverables target this session: T9 + T10 + T11 + T12 design specs (sequential per operator AskUserQuestion 2026-05-24 Q2=T9→T10→T11→T12 source-of-truth order) + 2 NEW skills (skill_home_polish + skill_vault_card_authoring) + populate-apply pass (node.aDNA HOME line 42 rewrite + vault_gallery.base + ~16 elaborations + ~15 NEW vault_cards + Astro /vaults/ routes + projection script + package.json wire) + ADR-023 draft. Single-S2-with-mid-checkpoint-trigger shape per operator AskUserQuestion 2026-05-24 Q1=Single (4-session escape valve fires post-Step-5 if ≥155 kT burned AND ≤4/8 deliverables landed). Pre-S2 substrate-pure absorption HEAD = 45b2aeb (skill_create_iss.md visual-artifact discipline section; 2nd canonical instance of substrate-pure separation discipline within M3.5 lifecycle after pre-S1 6e4c703). S1 stays active/ per canonical 3-session shape (3 files move active/→history/ together at S3 close)."
campaign: campaign_adna_serious_tool_readiness
mission: mission_adna_str_p3_m35_home_polish_and_per_vault_info_pages
phase: 3
mission_number: 3.5
session_number: 2
files_touched_planned:
  - aDNA.aDNA/how/sessions/active/session_stanley_20260525T012134Z_v8_m35_s2.md  # this file
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m35_obj3_t9_design_spec.md  # NEW T9
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m35_obj4_t10_design_spec.md  # NEW T10
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m35_obj5_t11_design_spec.md  # NEW T11
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m35_obj6_t12_design_spec.md  # NEW T12
  - aDNA.aDNA/how/skills/skill_home_polish.md                                                                      # NEW skill
  - aDNA.aDNA/how/skills/skill_vault_card_authoring.md                                                              # NEW skill
  - /Users/stanley/lattice/node.aDNA/HOME.md                                                                        # EDIT line 42 only (Gallery section); preserve everything else verbatim
  - /Users/stanley/lattice/node.aDNA/what/inventory/vault_gallery.base                                              # NEW Bases definition file
  - /Users/stanley/lattice/node.aDNA/what/vault_cards/the_*.aDNA.md (~16 EDIT + ~15 NEW)                            # elaborate existing per T10 v0.2 + author new per skill_vault_card_authoring
  - aDNA.aDNA/scripts/build_vaults_data.mjs                                                                         # NEW prebuild projection script (project-root scripts/)
  - aDNA.aDNA/site/src/data/vaults.json                                                                             # NEW projected data
  - aDNA.aDNA/site/src/data/vaults.schema.json                                                                      # NEW JSON Schema
  - aDNA.aDNA/site/src/data/vaults_graph.mmd                                                                        # NEW Mermaid DSL
  - aDNA.aDNA/site/src/pages/vaults/index.astro                                                                     # NEW faceted index
  - aDNA.aDNA/site/src/pages/vaults/[slug].astro                                                                    # NEW per-vault detail
  - aDNA.aDNA/site/src/pages/vaults/graph.astro                                                                     # NEW full relationship graph
  - aDNA.aDNA/site/src/components/sections/VaultCard.astro                                                          # NEW component
  - aDNA.aDNA/site/src/components/sections/VaultClassFacet.astro                                                    # NEW component
  - aDNA.aDNA/site/src/components/sections/VaultRelationshipBlock.astro                                             # NEW component
  - aDNA.aDNA/site/package.json                                                                                     # EDIT add prebuild + sync:vaults scripts
  - aDNA.aDNA/what/decisions/adr_023_registry_data_projection_contract.md                                           # NEW ADR draft (status: draft at S2; accepted at S3)
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p3_m35_home_polish_and_per_vault_info_pages.md  # EDIT Objective status pending→landed for Obj 3-9
tags: [session, v8, p3, m35, s2, rosetta, substrate_landing, four_design_specs, t9_bases_home, t10_vault_card_schema_v0_2, t11_astro_vaults_registry, t12_iii_target_forward_stub, skill_home_polish_new, skill_vault_card_authoring_new, populate_apply_pass, node_adna_home_line_42_rewrite, vault_gallery_base_new, sixteen_elaborations, fifteen_new_vault_cards, astro_vaults_routes_three, build_vaults_data_mjs_new, vaults_json_committed, mermaid_relationship_graph, adr_023_registry_data_projection_contract_draft, substrate_inversion_with_apply_pass_3rd_sub_pattern_candidate, six_section_design_spec_structure_8th_to_11th_canonical_instances, cross_skill_primitive_composition_post_graduation_reinforcement_4th_5th, t8_forward_reference_stub_discipline_post_graduation_first_consumer, standing_order_8_18th_19th_tactical_invocations, single_s2_with_midcheckpoint_trigger, t9_t10_t11_t12_sequential_order]
---

# Session — M3.5 S2 — Substrate landing (4 design specs + 2 new skills + populate-apply + ADR-023 draft)

## Intent

Land the M3.5 substrate per plan `/Users/stanley/.claude/plans/please-read-the-claude-md-lexical-hippo.md` (approved 2026-05-25T01:25Z). S2 is destructive — 6 of 8 cumulative deliverables target this session:

1. **T9 design spec** — Bases-driven HOME.md template with 3-tier render fallback (Bases primary + Dataview JS fallback + plain markdown last-resort); literal patch for `node.aDNA/HOME.md` line 42
2. **T10 design spec** — per-vault info-page schema canonical v0.2 (22-field frontmatter + 9-section H2 body + 9 per-vault-class variants + backwards-compat clause)
3. **T11 design spec** — Astro `/vaults/` registry surface (faceted index + per-vault detail + Mermaid relationship graph + build-time projection script + CI/Vercel fallback)
4. **T12 design spec** — III-target forward-reference (5 ranker dimensions: persona_growth_v0 + research_context_generation_v0 + cross-vault-relationship-fidelity + vault-card-completeness + registry-freshness; forward-stub-only)
5. **NEW skill** `skill_home_polish.md` (Hestia-class HOME generator/refresh; DELEGATES T7→T6→M3.2)
6. **NEW skill** `skill_vault_card_authoring.md` (vault-card authoring + audit; 9 per-vault-class template branches)
7. **Populate-apply pass** (live mutations) — node.aDNA HOME rewrite + vault_gallery.base + ~16 elaborations + ~15 NEW vault_cards + 3 Astro routes + 3 section components + projection script + package.json wire
8. **ADR-023 draft** (`adr_023_registry_data_projection_contract.md`; status `draft` at S2 → `accepted` at S3 per Campaign SO #14 in-phase exception clause D2=A)

## Pre-S2 carry-forward

- Pre-S2 substrate-pure absorption HEAD `45b2aeb` — `skill_create_iss.md` "Visual artifact discipline (interim — pre-P3p.8)" section landed (2nd canonical instance of substrate-pure separation discipline within M3.5 lifecycle after pre-S1 `6e4c703`)
- S1 bundle HEAD `3ce86d7` (mission spec + governance bundle + STATE Op 3 16th canonical instance)
- Pre-S1 substrate-pure HEAD `6e4c703` (SiteForge sis→iss rename + sentinel-naming doc fix)
- M3.4 close HEAD `e62bfee` (M3.4 frontmatter status fix)

## Execution sequence (plan steps 0-10)

| Step | Status | Description |
|---|---|---|
| 0 | ✅ S2 session file open (this file) | |
| 1 | in_progress | Substrate parallel reads — T7 spec + T7 skill + T8 spec + T8d skill + T6 skill + ADR-014 + inventory_vaults.yaml + 4-5 sample vault_cards + HOME.md + Astro config + MermaidDiagram island |
| 2 | pending | T9 design spec (Bases-driven HOME.md 3-tier fallback) |
| 3 | pending | T10 design spec (vault_card schema v0.2 — 22-field + 9-section + 9 variants + backwards-compat) |
| 4 | pending | T11 design spec (Astro /vaults/ registry surface — projection script + 3 routes + 3 components + CI fallback) |
| 5 | pending | T12 design spec (III-target forward-reference — 5 dimensions) |
| — | pending | **Mid-checkpoint**: trigger S2a/S2b split if ≥155 kT burned AND ≤4/8 deliverables landed |
| 6 | pending | NEW skill `skill_home_polish.md` |
| 7 | pending | NEW skill `skill_vault_card_authoring.md` |
| 8 | pending | Populate-apply pass (HOME + vault_cards + Astro + projection script + package.json) |
| 9 | pending | ADR-023 draft |
| 10 | pending | S2 close — SITREP + mission file Objective status flips + commit S2 bundle |

## Heartbeat

Started 2026-05-25T01:21:34Z. Will close at S2 bundle commit.
