---
type: artifact
artifact_id: release_candidate_v8_4
campaign_id: campaign_champollion
mission_id: mission_champollion_m6_1_template_release_candidate
title: "Release candidate v8.4 — curation table · assembly manifest · dry-run report · release notes (HELD at G6)"
status: active
created: 2026-07-03
updated: 2026-07-03
last_edited_by: agent_rosetta
tags: [artifact, champollion, m6_1, release_candidate, v8_4, curation, dry_run]
---

# Release candidate v8.4 — HELD at G6

> **Standing rule of this artifact**: the RC is a **held diff**. `.adna/` and `aDNA-Network/aDNA` remain untouched; nothing here ships until the operator fires G6 (`skill_template_release` step (d) onward). Every IN row traces to a ratified decision (§7.7 applied to our own release).

## 1. Curation table (fable ruling — G5-D1 delegated composition)

**Corpus reconciliation (recon-at-execution, M1.1 lesson)**: the live tree holds **34 frontmatter carriers** of `fold_batch: champollion_m6_1_rc` + **2 prose-rerouted members** (`backlog_F_S2_7_template_placeholder_tags`, `idea_plugin_trimming` — both `accepted`, rerouted to the RC by M4.2-era disposition notes) + **1 prose-mention non-member** (`idea_state_prompt_shed_on_close` — `status: proposed`, see §1.4). Brief's "~31" = the M1.1 ledger count before the P3/P4-era additions. ⚠ Node gotcha re-confirmed: `grep -r` silently returned 0 on this corpus; **python enumeration is authoritative** (37 files matched).

**Image-gap verification (pre-dispatch, against local `.adna/` v8.3 sync)**: `template_ratification_record.md` MISSING · `AGENTS.md` Heavy-File section ABSENT · `CLAUDE.md` Step-0 node-vault detection ABSENT · credential-broker snippet ABSENT · image `adna_standard.md` has **no §7.7 and zero `federation/` mentions** (pre-v2.5 confirmed) · Hearthstone trio (`HOME.md` · `template_home_claude.md` · `template_node_adna_exemplar/`) **already shipped** → verify-delta only.

### 1.1 IN — vault-side unit (Dispatch A; these land as normal vault commits AND become RC sources)

| # | Item | Ratification trace | Fold shape |
|---|------|--------------------|------------|
| V1 | **Checker unit** | G3-D5 (F-CHM-209 rider) + G5-D4b (GI-1 tool-generalizes) | `compliance_checker.py`: version `"2.4"`→`"2.5"` · context type-set · skill NA_MAP per EXEMPT-AS-POLICY · lattice-companion semantics. `adna_validate.py`: generalize nested-instance detection (auto-exclude any subtree carrying its own `.git` + governance files; keep the two hardcoded reference paths as fallback). Verify: false-positive collapse on LatticeProtocol.aDNA **read-only**. |
| V2 | **F-CHM-214 ×3-source harmonization** | G5-D1 (brief item 6) | Reconcile readiness-check lists in `CLAUDE.md` §Registry Awareness · `what/concepts/concept_lattice_composition.md` · `check_federation_readiness` docstring ← **`how/skills/skill_lattice_publish.md` authoritative**. |
| V3 | **Codepin file** | G5-D5.3 (ruled IN) | `what/context/codepin.md` — our LP consumption pin `8cb6e1e`, LP-shape fields (pinned_sha · verify · refresh_protocol · consumers). |
| V4 | **C6 vault-side** | G3-D2a (`accepted`) | `how/templates/template_mission.md`: `executor_tier` + `token_budget_estimated`/`token_budget_actual` fields (reconcile the template_mission-vs-plan naming note in the idea). |
| V5 | **Site-currency unit** | G4-D4.1/4.2 + G5-D1 (M5.3 rider) | `site/src/content/reference/specification.mdx` v2.5 re-mirror (**body, not just header**) · `site/src/components/sections/NetworkDiagram.astro` stale `SiteForge.aDNA` label → `Astro.aDNA` · tutorial-mirror for `tutorial_exchange_adoption_path` per the M5.3-documented machinery (`.mdx` + `seoSchema` + `section` + wikilink→route; see `artifacts/adoption_story_record.md`). Gate: `npx astro build` green. |

### 1.2 IN — image-side RC unit (Dispatch B; assembled as the held diff in the skill's working area)

| # | Item | Ratification trace | Fold shape |
|---|------|--------------------|------------|
| I1 | **Image v2.5 standard fold** | G2-D2 (ADR-046; v2.5 CUT) | Vault `what/docs/adna_standard.md` → image copy (carries §7.2 profile · §5.5 walk-scope · §7.7 ratification discipline · §5.3 `federation/` row · §15.4). Subsumes `idea_upstream_per_class_frontmatter_profiles` (§7.2/§5.5 = ADR-044 refinement, in the cut) + `idea_upstream_lip_0006_network_category_addition` (verify category list current in folded text + image CLAUDE.md). |
| I2 | **C6 image-side** | G3-D2a | Mirror V4 into image `template_mission.md`. |
| I3 | **`template_ratification_record.md`** (NEW) | G0-D3(b) + M1.2 spec-only install + M1.1 fold class | Author from the spec in `idea_upstream_template_ratification_record` (4-field block: Ratifier/gate-ref/date/scope · agents-set-`proposed`-only · batch variant); the instrument of the v2.5 §7.7 discipline. |
| I4 | **AGENTS.md Heavy-File Read Convention** | M1.1 fold class (`idea_upstream_state_md_read_hint`) | New section in image `AGENTS.md` (source: idea's specced text + vault AGENTS.md precedent). |
| I5 | **CLAUDE.md Step-0 node-vault detection** | Hearthstone P0 ratified 2026-06-18 (`idea_upstream_router_node_vault_detection`) | Genericize root CLAUDE.md Step 0 into image `CLAUDE.md` + `template_workspace_claude.md`. |
| I6 | **Credential-broker snippet inheritance** | M1.1 fold class (`idea_upstream_credential_broker_template_inheritance`; workspace Rule 6 forward-cites) | Canonical snippet (doctrine_credential_handling §7) genericized into image CLAUDE.md/fork path. |
| I7 | **Router-template rules unit** | M1.1 fold class ×3 (`workspace_router_row_discipline` + `shim_window_discipline` + `archive_category`) + `archive_ledger_schema` row-schema block | Fold into image-only `template_workspace_claude.md`: row-discipline rule (live Rule 7 text) · shim-window rule (live Rule 9 text, with the ledger row-schema block) · Archive-holder naming. |
| I8 | **Image newcomer currency fixes** | M4.1 → G3/G4 (`idea_image_newcomer_currency_fixes`; F-CHM-211) | The 5 live fixes (item 2 RETRACTED at M4.3): README badges (→ v8.4/v2.5 in the held diff) · router counts semantic-censused · onboarding persona line · image-side learn-pointer · remaining row per idea. Version-bump sites flagged for step (d) in the dry-run report. |
| I9 | **README first-contact fold** (bounded) | M4.3 pattern + M1.1 fold class (`readme_first_contact_pattern`) | Top-of-doc ToC + content-class restructure per the pattern on image `README.md`; coordinate with I8 badge edits. NOT a full III campaign (that's DEFER D2). |
| I10 | **Recon-at-execution + planning-light recon clauses** | M1.1 fold class ×2 | Clause text into image campaign-protocol surface; planning-light half lands ONLY if `skill_campaign_planning_light_meta_planning.md` exists image-side (else that half flips DEFER, recorded). |
| I11 | **AskUserQuestion operator-resolution discipline** | M1.1 fold class | Doctrine block into image agent-protocol surface (`CLAUDE.md` Agent Protocol section or governance spec file). |
| I12 | **Health-check allowlist rule** | M1.1 fold class (`health_check_precision`) | Allowlist-not-pattern census rule into image `skill_node_health_check.md` (exists image-side). |
| I13 | **Single-writer-lease rule** | M1.1 fold class | Rule text into image `AGENTS.md` safety rules + `skill_inventory_refresh.md` (exists image-side). |
| I14 | **Fork orphan-id lint** | M1.1 fold class (filed by Obsidian.aDNA, routed per its ADR-007) | One lint step in image `skill_project_fork.md`: every `community-plugins.json` id must have `plugins/<id>/` or an install-pending marker. |
| I15 | **Obsidian payload doc refresh** | M1.1 fold class (Obsidian.aDNA D2+D3) | Fix phantom-plugin roster + stale rows in `.adna/.obsidian/README.md` + `OBSIDIAN_CLAUDE.md` per the idea's enumerated drift list. |
| I16 | **Obsidian plugin trimming** (conditional) | M4.2-era reroute (`idea_plugin_trimming`, accepted) | Apply ONLY if the idea carries a concrete trim roster; under-specced → flip DEFER at assembly with reason recorded. Must stay consistent with I15's doc truth. |
| I17 | **Template placeholder-tags fix** | M4.2-era reroute (`backlog_F_S2_7`, accepted) | Placeholder tags in `template_prd.md` + sibling templates stop leaking into the vault tag index (idea's specced fix). |
| I18 | **Lattice-home pattern promote** (copy-class) | M1.1 fold class (`lattice_home_pattern`) | Copy-adapt vault `pattern_lattice_home` + `template_lattice_home_render.md` + `skill_lattice_home_install.md` → image; HOME.md pointer note (HOME.md already image-side). |
| I19 | **F-CHM-214 image mirror** | G5-D1 (brief item 6) | If image CLAUDE.md carries a Registry-Awareness readiness list → align to the V2 authoritative text. |
| I20 | **Hearthstone verify-delta trio** | Hearthstone P0 2026-06-18 (already materialized at Hearthstone P5) | `template_home_claude.md` · `template_node_adna_exemplar/` · fork exemplar-invocation wiring: verify image copies current vs vault/node sources; fold **delta only**; if current → row = ALREADY-SHIPPED (discharged). |

### 1.3 DEFER (named next-release triggers; KEEP-when-ambiguous honored — zero DROP)

| # | Item | Trigger |
|---|------|---------|
| D1 | `idea_upstream_claude_md_prune` | **v8.5 dedicated prune cycle** — restructures the inherited governance surface of every fork; needs its own review + adversarial pass, not an RC rider. |
| D2 | `idea_inner_readme_iii` | **Post-launch III batch** (P7-successor) — 10 review cycles = campaign-shaped, not assembleable. |
| D3 | `idea_upstream_graph_merge_recipe` | **v8.5 skill-authoring batch** (sources: pt08b merge playbook). |
| D4 | `idea_upstream_graph_rename_recipe` | **v8.5 skill-authoring batch** + reconcile overlap with existing base `skill_project_rename`. |
| D5 | `idea_upstream_skill_project_archive` | **v8.5 skill-authoring batch** (workspace router already names the convention). |
| D6 | `idea_upstream_skill_second_genesis` | **v8.5 skill-authoring batch**. |
| D7 | `idea_upstream_skill_workspace_spring_clean` | **v8.5 skill-authoring batch**. |
| D8 | `idea_upstream_obsidian_local_rest_api_seed` | **IF-gate unfired** (image ships agent-driven Obsidian infra; T3 opt-in NOT-seeded posture per Obsidian ADR-011). |
| D9 | `idea_upstream_network_node_mirror_entity_type` | **Next standard version window** — post-v2.5-cut discipline; entity-type registration needs the extension-registry mechanism decision, not an RC rider. |
| D10 | `idea_upstream_permission_edge_entity_type` | Same window as D9. |

**DEFER rationale class**: D3–D7 are new-skill authorship (each a reviewable deliverable of its own — batching 5 unreviewed skills into a launch RC fails the M6.3 hostile-forker lens by construction); D1/D2 are restructure/campaign-shaped; D8 is explicitly IF-gated by its filer; D9/D10 would re-open the closed v2.5 cut.

### 1.4 Excluded-unratified (not DROP — no gate has ruled them into the fold)

| Item | Status | Routing |
|------|--------|---------|
| `idea_state_prompt_shed_on_close` | `proposed` — its body says "ratification queued at G3" but no G3 decision fired it | **G6-D4 adjudication input** (§7.7: an unratified item cannot enter the RC). |

### 1.5 Routed-not-RC — inbound proposals (recorded for the M6.3 standards-lawyer lens)

The post-G5 Berthier bundle (`1e3e422`): **P-1** layer-ruling clause · **P-2** validator `source_vault` rule · **P-3** naming-rule clause (+ **W-2** dir-naming ask) · **P-5** fork-time `webforge/` scaffold · **P-6** ADR-015 pattern-pointer · **P-7** `GIT_OPTIONAL_LOCKS=0` probe discipline · **P-8** STATE-frontmatter convention — all `proposal-not-install`, none ratified our-side → **all route to G6-D4** (P-3 adjudicates paired with the held P-4 provider-forge clause). P-2 adjacency note: if accepted at G6 it rides the **next** checker touch, not this RC.

## 2. Assembly manifest (Dispatch A + B)

### 2.1 Dispatch A — vault-side unit (opus builder; DONE 2026-07-03; fable review PASS + 2 review-fixes)

| Row | Files | Outcome |
|-----|-------|---------|
| V1a | `what/lattices/tools/compliance_checker.py` | v2.5 (docstring + `meta.standard_version`) · `CONTEXT_TYPES` + subtype-accepting d01 (F-CHM-209b) · skill NA_MAP += d04/d07/d08 per G3-D5 EXEMPT-AS-POLICY · self-describing YAML-lattice companion=3 (F-CHM-209d; clears spurious G-002) · G-003 dormancy generalized on d08-N/A. Full-vault: **98 obj · 99.6% · 0 gaps** (was 95 @ 83.1% at the M3.3 baseline). |
| V1b | `what/lattices/tools/adna_validate.py` | `_is_nested_instance()` — own `.git` (dir or file) + own `CLAUDE.md`/`MANIFEST.md` → subtree pruned; two hardcoded paths kept as documented fallback (F-CHM-215/GI-1). **LP read-only verify: 422 → 161** — the 261-FP `what/latticeprotocol` code-as-WHAT tree → **0**; residual = LP's genuine vault content (real signal, correctly unsuppressed) + `what/whitepaper` (AGENTS-only, no `.git` — outside the rule by design). Review-fix: module docstring v2.4→v2.5. |
| V2 | `what/concepts/concept_lattice_composition.md` · `what/lattices/tools/lattice_validate.py` | Harmonized to `skill_lattice_publish` authoritative. **Root finding: F-CHM-214 was TWO distinct 6-check gates conflated** (registry publish-readiness [skill/CLAUDE.md] vs federation-block check [`lattice_federation.md` §2.3 / code]); concept aligned + seam note; docstring made truthful with authority pointer (not made to lie about the code it documents); CLAUDE.md verify-only (already correct). |
| V3 | `what/context/codepin.md` (NEW) | LP consumption pin `8cb6e1e` (surface `what/latticeprotocol/.agentic/specs/`); verify cmd + pin-follow refresh protocol per `pattern_cross_graph_codepin`; consumers = `tutorial_exchange_adoption_path` + M5.2 conformance record. |
| V4 | `how/templates/template_mission.md` | `executor_tier` + `token_budget_estimated`/`token_budget_actual` fields (C6, G3-D2a) with pattern/ADR-016 comments; no file rename. |
| V5 | `site/src/content/reference/specification.mdx` · `site/src/components/sections/NetworkDiagram.astro` · `site/src/content/guides/exchange-adoption-path.mdx` (NEW) | Spec mirror = full v2.5 body port (§5.3/§5.5/§7.2/§7.7/§15.4 present; end-line v2.5); `SiteForge.aDNA`→`Astro.aDNA` slot label (old slug absent from vaults.json — node was silently dropped, now restored); tutorial mirror per the M5.3-documented machinery. **Build green ×2 (builder + review): 181 pages.** |

**Review (fable)**: quiescence clean (TaskStop → already terminated; porcelain == manifest exactly); validate FULL + zero drift re-run; LP collapse re-verified by line-count method (162 lines, 0 `what/latticeprotocol` hits); build re-run green. Review-fixes: validator module docstring v2.4→v2.5 (builder-flagged, in-unit currency) + findings-ledger resolution annotations F-CHM-209/214/215 (builder executed but didn't record — ledger-recording now in Dispatch-B's brief explicitly). **Concurrent-intake event**: `coord_2026_07_02_berthier_to_rosetta_adr022_cosign.md` (ADR-022 authority-envelope co-sign ask) arrived mid-build sans 2 frontmatter fields — builder repaired mechanically (F-CHM-001 class, content untouched) → **routes to G6-D4** with the P-batch.

### 2.2 Dispatch B — image-side RC unit

*(pending)*

## 3. Dry-run report (`skill_template_release` (a)→(c), STOPPED before (d))

*(pending — the gate-fire point is step (d) version-bump+commit+tag+push; nothing executes past (c))*

## 4. Release-notes draft (v8.4)

*(pending)*

## 5. Out-of-scope hits (standing sweep clause)

*(pending)*
