---
type: campaign_artifact
campaign: campaign_meridian
title: "v8.6 release-candidate — post-v8.5 queue reconciliation + curated v8.6 RC queue (Meridian M5)"
created: 2026-07-06
updated: 2026-07-06
status: active
last_edited_by: agent_rosetta
tags: [meridian, v86, release_candidate]
---

# v8.6 release-candidate — queue reconciliation + curated RC

> **Plain-language header.** **v8.5** (shipped 2026-07-03, commit `05be58e` + tag `v8.5` on `aDNA-Network/aDNA`) was a
> narrow **release-cut-hygiene** slice — it corrected the embedded README to the one-step install (F-CHM-216), swept the
> release-cut leak (F-CHM-217, resolved by *de-linking* 6 ADR citations rather than shipping 5 ADRs that would have dragged
> 21 private wikilinks public), archival-banner-stamped `aDNA_overview.md`, and bumped governance 8.4→8.5 (standard stayed
> **v2.5**). **v8.6** is the *next* maintenance release: it drains what Champollion's handoff §3 called the "v8.5 queue" —
> the deferred deliverables that v8.5's narrow slice did **not** carry — plus the candidates the packet pre-dated (Concord's
> checklist fork-base fold, the dev-vault-name leak sweep, the public-projection sanitizer). **This document is a curated RC
> queue, not a release** — the release itself fires at a **post-campaign operator gate** via `skill_template_release`
> (Meridian scope explicitly excludes firing it; Standing Order 1 — phase gates are human gates).

## 1. How the queue reconciles (read this first)

Three source-of-truth facts drove every disposition below — all python3-verified against the live tree + `.adna/` image on
2026-07-06:

1. **The v8.4 RC IN-set already shipped.** `release_candidate_v8_4.md` split the 34 `fold_batch: champollion_m6_1_rc`
   carriers into an **IN** set (rows **I1–I20 + V1–V5**) and a **DEFER** set (rows **D1–D10**). The IN set shipped in the
   v8.4 image at G6. So ~24 `accepted` `idea_upstream_*` files that still read `status: accepted` are in fact **shipped**
   (their status never flipped post-ship — see §5). **Handoff §3 = the DEFER set (D1–D10) + the late/tooling adjuncts
   (batches E/F/G).** That is the real v8.6 corpus.
2. **`fold_batch` is an unreliable discriminator.** Only **one** file (`idea_state_prompt_shed_on_close`) carries
   `fold_batch: v8_5_next_release`; every other deferred item kept `champollion_m6_1_rc` (never re-stamped when deferred).
   The handoff §3 enumeration — **not** the `fold_batch` field — is authoritative for "deferred from v8.4."
3. **v8.5 shipped only handoff batch G's hygiene subset.** Verified on disk: image `version: "8.5"`, `.adna/README.md`
   one-step install present + dead `cp` two-step gone (F-CHM-216 ✅), `0` clickable `aDNA.aDNA/` links in
   `template_home_claude.md` (F-CHM-217 de-link ✅). **All of handoff batches A/B/C/D/E/F remain unshipped → v8.6.**

## 2. Reconciliation census

**Disposition legend** — `SHIPPED-v8.5` (in the v8.5 ship record) · `QUEUED-v8.6` (in the RC queue below) ·
`BLOCKED` (named gate must fire first) · `DROPPED` (justified no-op) · `DONE-ELSEWHERE` (shipped/handled outside v8.6) ·
`ROUTED` (real work, but not a base-template release item — goes to a vault/fleet lane).

### 2.1 Handoff §3 items (batches A–G)

| Batch | Item | Backlog status | RC-v8.4 row | Disposition | Evidence / note |
|-------|------|----------------|-------------|-------------|-----------------|
| **A** | `idea_upstream_graph_merge_recipe` | accepted | D3 | **QUEUED-v8.6** | new skill; not in the narrow v8.5 slice |
| **A** | `idea_upstream_graph_rename_recipe` | accepted | D4 | **QUEUED-v8.6** | new skill; reconcile overlap w/ base `skill_project_rename` |
| **A** | `idea_upstream_skill_project_archive` | accepted | D5 | **QUEUED-v8.6** | new skill; router already names the Archive-holder convention |
| **A** | `idea_upstream_skill_second_genesis` | accepted | D6 | **QUEUED-v8.6** | new skill |
| **A** | `idea_upstream_skill_workspace_spring_clean` | accepted | D7 | **QUEUED-v8.6** | new skill |
| **A** | **P-5** fork-time `webforge/` scaffold | proposal (RC §1.5) | — | **QUEUED-v8.6** | rides the fork-skill touch; optional-with-degradation constraint recorded |
| **B** | `idea_upstream_claude_md_prune` | accepted | D1 | **QUEUED-v8.6** | *(also flagged as a "post-handoff arrival" — it is **not** new; it is handoff-B/RC-D1)*; restructures every fork's governance surface → own review + adversarial pass |
| **B** | `idea_inner_readme_iii` | accepted | D2 | **QUEUED-v8.6** | full 10-cycle III batch (campaign-shaped); **its F-CHM-216 subset already shipped v8.5** — the full redesign remains queued |
| **C** | `idea_upstream_network_node_mirror_entity_type` | accepted | D9 | **BLOCKED** | gate: next standard-version (**v2.6**) window; needs the extension-registry mechanism decision; a fold now reopens the closed v2.5 cut |
| **C** | `idea_upstream_permission_edge_entity_type` | accepted | D10 | **BLOCKED** | gate: same v2.6 window as D9 |
| **D** | `idea_upstream_obsidian_local_rest_api_seed` | accepted | D8 | **BLOCKED** | gate: **IF** Obsidian T3 opt-in fires (NOT-seeded posture, Obsidian ADR-011) |
| **E** | **P-2** validator `source_vault` rule | proposal (RC §1.5) | — | **QUEUED-v8.6** | rides the next `adna_validate` touch (v8.6 checker window) |
| **E** | **P-8** light STATE-frontmatter convention | proposal (RC §1.5) | — | **QUEUED-v8.6** | rides the next STATE-diet window |
| **F** | `idea_state_prompt_shed_on_close` | accepted | §1.4 excl.→G6-D4 ratified | **QUEUED-v8.6** | the **only** `fold_batch: v8_5_next_release` file; v8.5's narrow slice skipped it → its fold_batch is now stale (belongs to v8.6) |
| **G** | **F-CHM-216** inner-README dead install | — | — | **SHIPPED-v8.5** | one-step install ×2; verified on disk (`.adna/README.md`) |
| **G** | **F-CHM-217** release-cut leak sweep | — | — | **SHIPPED-v8.5** | D-1 resolved = **de-link** (not ship-5-ADRs); 0 clickable `aDNA.aDNA/` links on disk |
| **G** | `aDNA_overview.md` re-stamp | — | RC §5 | **SHIPPED-v8.5** | archival-snapshot banner (not a full refresh) |
| **G** | Validator-docstring currency class (F-CHM-006 / 209a) | standing watch | — | **QUEUED-v8.6** | `compliance_checker.py` + `adna_validate.py` docstrings curried at M6.1; **remaining tool headers** still lag → next validator touch |
| **G** | Context "27 subtopics" vs "28" | — | RC §5 | **DROPPED** | v8.5 census **withdrew** it — 27 is correct (the "28" wrongly counted the root index `context_recipes.md`); false positive, no fix |
| **G** | `STATE.md` / `migrate_v5.2_to_v6.0.md` "22 templates" | — | RC §5 | **DROPPED** | historical records; RC §5 rules **do-not-currency** |

### 2.2 Additional candidates (packet-missed / post-handoff)

| Item | Backlog status | Disposition | Evidence / note |
|------|----------------|-------------|-----------------|
| `idea_upstream_dev_vault_name_leak_sweep` | proposed | **QUEUED-v8.6** | discovered **at the v8.5 fire** (post-handoff); full `skill_iii_setup.md` genericize incl. its wrapper-census table + broader dev-vault-name sweep (`skill_git_remote_setup`, `upgrade_v6_to_v7`, `example_session_customer_research`). **Same class as Concord finding F8** (template-clutter / harness-leak) — merge in the queue |
| **Concord: checklist fork-base upstreaming** | W4 register + [[../../what/decisions/adr_047_governance_doctrine_checklist_ruling\|ADR-047]] | **QUEUED-v8.6** | fold `campaign_w4_governance_doctrine/artifacts/v8_4_adoption_checklist.md` into `.adna/` so **future forks inherit the governance-doctrine checklist at fork-time** (Concord "Change": checklist = the canonical fork-time instrument). Explicitly on "Rosetta's upstream **release lane**" |
| `idea_upstream_public_projection_sanitizer` | accepted (Champollion M1.2) | **QUEUED-v8.6** | upstream the private→public boundary (`publicNote()` sanitizer) into the ADR-023 registry generator so any vault publishing a public site inherits the Rule-4 boundary; framework-level gap, not aDNA.aDNA-only |
| `idea_campaign_reopen_reconciliation_protocol` | accepted (Champollion M3.2) | **QUEUED-v8.6** | methodology touch: a "§reopen" clause in `how/campaigns/AGENTS.md` (or a small `skill_campaign_reopen_reconciliation`) — diff a dormant campaign's terminal target vs the release CHANGELOG before resuming |
| `idea_upstream_template_ratification_record` | accepted | **DONE-ELSEWHERE** | **upstream instrument already shipped in v8.4** (RC row **I3**; `.adna/how/templates/template_ratification_record.md` exists on disk). The Concord follow-up is the **local mirror only** — authored by Meridian **M1 today**; both now exist on disk. The task's "upstream fold = v8.6 item" premise is **superseded** — nothing base-template remains |
| `idea_upstream_platform_spec_refresh` | accepted (Champollion M2.1) | **ROUTED** | vault-currency (rebuild `spec_platform_ecosystem.md` Active-Platforms table + `spec_framework_ecosystem.md` wrapper count from STATE ground truth) → **Meridian M6**, not a `.adna` release fold |
| `idea_upstream_self_reference_exemption` | accepted (Champollion M3.3) | **ROUTED** | amends **Rosetta SO#8** + `skill_self_reference_check.md` — aDNA.aDNA-local governance, not the generic base template; candidate but vault-scoped |
| `idea_fleet_defects_retro_cleanup` | deferred | **BLOCKED** | gate: post-launch standard-maintenance mission (arms B/C, operator per-vault, ~45 live vaults). **Arm A already landed v8.2.** A fleet retro-sweep, not a template-release RC item |
| `idea_cross_vault_coord_stewardship` | deferred | **BLOCKED** | gate: 3rd instance (2 observed) + federation primitives (Network.aDNA P5+). Home shipped a node-local interim detector (health_check S14). Not a v8.6 RC item |

### 2.3 Totals

| Disposition | Count |
|-------------|-------|
| SHIPPED-v8.5 | **3** (F-CHM-216 · F-CHM-217 · aDNA_overview re-stamp) |
| QUEUED-v8.6 | **16** (A:6 · B:2 · E:2 · F:1 · G:2 · additional:3) |
| BLOCKED | **5** (C:2 · D:1 · fleet_defects · cross_vault_coord) |
| DROPPED | **2** (27-subtopics false-positive · historical "22 templates") |
| DONE-ELSEWHERE | **1** (template_ratification_record — v8.4 upstream + M1 local) |
| ROUTED (non-RC) | **2** (platform_spec_refresh → M6 · self_reference_exemption → vault SO#8) |
| **Total dispositioned** | **29 distinct items** |
| *of which NEW candidates (packet-missed / post-handoff)* | **9** (dev_vault_name/F8 · checklist-fork-base · public_projection_sanitizer · reopen_reconciliation · platform_spec_refresh · self_reference_exemption · template_ratification_record · fleet_defects · cross_vault_coord) |

## 3. Curated v8.6 RC queue

Batch letters held stable from handoff §3; new candidates slotted into the batch that matches their shape.
**Effort:** S = single-file / one-clause · M = new-skill authoring, multi-file sweep, or generator touch · L = campaign-shaped
(own review + adversarial pass). Standard stays **v2.5** across this queue (no normative change; the only normative items are
batch C, held for v2.6). Governance stamp **8.5 → 8.6**.

### Batch A — skill / lifecycle authoring (each its own reviewable deliverable)
| Item | Effort | Scope (1 line) | Source |
|------|--------|----------------|--------|
| `skill_graph_merge` | M | pt08b merge-playbook → a `.adna/how/skills/` recipe | `idea_upstream_graph_merge_recipe` (D3) |
| `skill_graph_rename` | M | graph-rename recipe; reconcile overlap w/ base `skill_project_rename` | `idea_upstream_graph_rename_recipe` (D4) |
| `skill_project_archive` | M | Archive-holder move recipe (router already names the convention) | `idea_upstream_skill_project_archive` (D5) |
| `skill_second_genesis` | M | name-continuity re-fork recipe | `idea_upstream_skill_second_genesis` (D6) |
| `skill_workspace_spring_clean` | M | fleet houseclean recipe | `idea_upstream_skill_workspace_spring_clean` (D7) |
| P-5 fork-time `webforge/` scaffold | S | optional-with-degradation wrapper scaffold at fork | RC §1.5 (Berthier bundle) |
| Reopen-reconciliation clause | S | "§reopen" step in `how/campaigns/AGENTS.md` (or `skill_campaign_reopen_reconciliation`) | `idea_campaign_reopen_reconciliation_protocol` |
| Checklist fork-base fold | M | fold `v8_4_adoption_checklist.md` into `.adna/` — forks inherit the doctrine checklist at fork-time | Concord W4 register + ADR-047 |

### Batch B — restructure / campaign-shaped
| Item | Effort | Scope | Source |
|------|--------|-------|--------|
| CLAUDE.md governance-surface prune | L | dedicated prune cycle across every fork's inherited governance surface (own review + adversarial) | `idea_upstream_claude_md_prune` (D1) |
| Inner-README III batch | L | 10-cycle III redesign of `.adna/README.md`; the F-CHM-216 subset already shipped v8.5 | `idea_inner_readme_iii` (D2) |

### Batch C — next standard-version window (BLOCKED → v2.6)
| Item | Effort | Scope | Gate |
|------|--------|-------|------|
| `network-node-mirror` entity type | L | new WHO/WHAT entity type; needs the extension-registry mechanism decision | v2.6 cut (reopens v2.5) |
| `permission-edge` entity type | L | new entity type | v2.6 cut (same window) |

### Batch D — IF-gated (BLOCKED)
| Item | Effort | Scope | Gate |
|------|--------|-------|------|
| Obsidian Local REST API seed | M | seed the REST-API plugin config into the image | **IF** Obsidian T3 opt-in fires (ADR-011) |

### Batch E — tooling-touch triggers
| Item | Effort | Scope | Source |
|------|--------|-------|--------|
| P-2 validator `source_vault` rule | S | new `adna_validate` rule; rides the checker touch | RC §1.5 |
| P-8 STATE-frontmatter convention | S | light STATE frontmatter; rides the STATE-diet window | RC §1.5 |
| Public-projection sanitizer (upstream) | M | fold `publicNote()` boundary into the ADR-023 registry generator + document the Rule-4 public-projection contract | `idea_upstream_public_projection_sanitizer` |

### Batch F — ratified, folded
| Item | Effort | Scope | Source |
|------|--------|-------|--------|
| STATE-prompt shed-on-close | S | shed self-superseded handoff prose **at close** (not quarterly); ratified G6-D4 | `idea_state_prompt_shed_on_close` |

### Batch G — doc-currency / leak-sweep
| Item | Effort | Scope | Source |
|------|--------|-------|--------|
| Validator-docstring currency | S | bring remaining tool-module docstrings / `meta.standard_version` / header strings to v2.5 | F-CHM-006 / 209a standing watch |
| Dev-vault-name / harness-leak sweep | M | full `skill_iii_setup.md` genericize (incl. wrapper-census table) + broader dev-vault-name sweep across shipped surfaces | `idea_upstream_dev_vault_name_leak_sweep` (= Concord **F8**) |

### Routed / not-a-template-RC (tracked here for completeness, executed elsewhere)
- `idea_upstream_platform_spec_refresh` → **Meridian M6** vault-currency (spec ecosystem tables).
- `idea_upstream_self_reference_exemption` → **vault governance** (Rosetta SO#8 + `skill_self_reference_check.md`).
- `idea_fleet_defects_retro_cleanup` (arms B/C) → **fleet-maintenance mission** (operator per-vault, ~45 vaults).
- `idea_cross_vault_coord_stewardship` → **blocked** on 3rd-instance + federation primitives.
- `idea_upstream_template_ratification_record` → **done** (v8.4 upstream I3 + M1 local mirror).

## 4. Recommended cut-line (v8.6 vs v8.7)

Bias applied: ship the **coherent skill batch A** + **doc-currency batch G**; hold standard-window C for a **v2.6** cut;
respect all IF-gates.

- **SHIP in v8.6:** Batch **A** (5 lifecycle skills + P-5 scaffold + reopen-reconciliation clause + checklist fork-base
  fold) — the deferred-since-v8.4 skill-authoring batch is the release's spine; each skill is authored + reviewed
  individually, satisfying the hostile-forker lens (the DEFER rationale forbade batching *unreviewed* skills, not shipping a
  reviewed set).
- **SHIP in v8.6:** Batch **G** doc-currency in full (validator-docstring currency + the dev-vault-name / harness-leak F8
  sweep) — cheap, high-signal, and F8 is already on the release lane.
- **SHIP in v8.6 (cheap riders):** Batch **F** (STATE-prompt shed-on-close, S) and Batch **E** P-2/P-8 **only if** the
  validator + STATE touches land this cycle; the **public-projection sanitizer (E)** is worth pulling in — it closes a real
  private→public leak class for every downstream publisher.
- **HOLD → v8.7 / own cycle:** Batch **B** (both L, campaign-shaped) — the CLAUDE.md prune and the inner-README III batch
  each need a dedicated review + adversarial pass; folding either into a maintenance RC repeats exactly the mistake v8.4's
  DEFER discipline avoided.
- **HOLD → v2.6 standard cut:** Batch **C** (network-node-mirror + permission-edge entity types) — normative; a fold now
  reopens the closed v2.5 cut. These wait for the deliberate next-standard-version window + the extension-registry decision.
- **HOLD (IF-gate unfired):** Batch **D** Obsidian Local REST API seed — stays NOT-seeded until Obsidian T3 opt-in fires.
- **NET:** v8.6 = **governance 8.5→8.6, standard stays v2.5** — a skills-and-currency release, no normative surface touched.

## 5. Stale backlog statuses found (listed, NOT edited)

Per instruction these are **flagged, not changed**. Two classes:

**Class 1 — shipped in v8.4 but still `status: accepted`** (the RC IN-set I1–I20 never got a post-ship status flip; a
systemic close-out that never ran). Representative list (all `fold_batch: champollion_m6_1_rc`, all shipped at G6):
`idea_upstream_per_class_frontmatter_profiles` (I1) · `idea_upstream_lip_0006_network_category_addition` (I1) ·
`idea_upstream_model_tier_mission_fields` (I2) · `idea_upstream_template_ratification_record` (I3) ·
`idea_upstream_state_md_read_hint` (I4) · `idea_upstream_router_node_vault_detection` (I5) ·
`idea_upstream_credential_broker_template_inheritance` (I6) · `idea_upstream_workspace_router_row_discipline` ·
`idea_upstream_shim_window_discipline` · `idea_upstream_archive_category` · `idea_upstream_archive_ledger_schema` (I7) ·
`idea_image_newcomer_currency_fixes` (I8) · `idea_upstream_readme_first_contact_pattern` (I9) ·
`idea_upstream_recon_at_execution_discipline` (I10) · `idea_upstream_askuserquestion_operator_resolution_discipline` (I11) ·
`idea_upstream_health_check_precision` (I12) · `idea_upstream_single_writer_lease_for_inventory` (I13) ·
`idea_upstream_fork_orphan_id_lint` (I14) · `idea_upstream_obsidian_payload_doc_refresh` (I15) ·
`backlog_F_S2_7_template_placeholder_tags` (I17) · `idea_upstream_lattice_home_pattern` (I18) ·
`idea_upstream_node_exemplar_template` · `idea_upstream_home_claude_template` ·
`idea_upstream_project_fork_exemplar_invocation` (I20). → suggest a batch flip to `resolved` (out of Meridian scope).

**Class 2 — individually stale / contradictory:**
- `idea_state_prompt_shed_on_close` — `fold_batch: v8_5_next_release` is now **stale**: v8.5 shipped without it; it belongs
  to v8.6. (Status `accepted` is correct; only the fold_batch pointer lags.)
- `idea_upstream_planning_light_substrate_recon` — **PARTIAL, not clean-accepted:** its recon half shipped (I10) but its
  planning-light half was **DEFER-flipped** at assembly (the `skill_campaign_planning_light_meta_planning.md` did not exist
  image-side). The deferred half is a latent v8.6 candidate *iff* that skill lands image-side.
- `idea_plugin_trimming` — reads `accepted` but was **DEFER-flipped** at v8.4 assembly (I16; needs interactive Obsidian UX
  validation) and routed to the Obsidian-stabilization track — effectively deferred, not shipped.
- `idea_upstream_template_ratification_record` — `accepted`, but the upstream instrument **shipped v8.4** and the local
  mirror **shipped today (M1)**; nothing remains → should be `resolved`.

## 6. Sequencing notes (must precede the v8.6 release)

1. **Author + review batch A before assembly.** The 5 lifecycle skills + reopen clause are new files — they must be authored
   and each pass its own review/adversarial lens before they can be folded into the v8.6 held diff. This is the largest
   pre-release work item; consider a dedicated **skill-authoring mission** (or sub-campaign) upstream of the release.
2. **Checklist fork-base fold** needs its `.adna/` integration point decided (where in the fork path the checklist is
   emitted, and whether it becomes a `skill_project_fork` step) — author before assembly.
3. **Name-leak genericize (batch G / F8)** is a SHIP-DELTA to `.adna/` files (`skill_iii_setup.md` + siblings) — the
   whole-file genericization (incl. the wrapper-census-table decision: delete vs generic note) must be resolved before the
   assembly carries it.
4. **Ratification-record upstream fold is NOT a sequencing item** — it already shipped in v8.4 (verified on disk). Do not
   re-queue it; the only residual (local mirror) is Meridian M1's work, done today.
5. **Standard stays v2.5.** v8.6 is governance/skills/currency only. Do **not** pull batch C into this cut — it reopens the
   v2.5 standard and belongs to a deliberate v2.6 window with the extension-registry mechanism decided first.
6. **The release fires at a post-campaign operator gate** via `skill_template_release` (governance 8.5→8.6; `dry_run` first;
   the 5 version-bump sites + the 7-row smoke per the handoff §2 map). Meridian does **not** fire it.

## Cross-links
- [[../../campaign_champollion/artifacts/handoff_packet_v8_4|Champollion handoff packet §3]] — the queue this reconciles
- [[../../campaign_champollion/artifacts/release_candidate_v8_4|release_candidate_v8_4]] — the IN/DEFER/DROP source of truth
- [[../../../missions/mission_v8_5_release_cut_hygiene|mission_v8_5_release_cut_hygiene]] §11 — the v8.5 ship record
- [[../../campaign_w4_governance_doctrine/campaign_w4_governance_doctrine|Operation Concord]] §Completion Summary — the fork-base / F8 follow-ups
- [[../campaign_meridian|Operation Meridian]] — this campaign (M5)

---

## Addendum (2026-07-06, post-census) — 2 inbound candidates from Hestia (Hearthfire P1)

Filed cross-vault into `how/backlog/` by Home.aDNA (Hestia) the same day as the census, discovered at
Meridian M6 commit-reconciliation (unreported-diff check caught them — the verify-staged-vs-expected
guard working as designed). Both are release-train items → v8.6 RC candidates, Rosetta triage:

| Item | Target | Effort | Disposition |
|------|--------|--------|-------------|
| `idea_upstream_node_manifest_interview_emission` — bootstrap interview additionally emits machine-readable `node_manifest.{yaml,md}` (ADR-015 Tier-3 config-of-record; shape = Home ADR-006) | `skill_node_bootstrap_interview.md` + release train | M | **QUEUED-v8.6 candidate** (batch A adjacency — skill change; consumers: Lighthouse installer, WebForge node_home, Venus transmit) |
| `idea_upstream_state_frontmatter_phase_campaign_keys` — fleet convention: machine-readable `phase:` + `campaigns:` STATE frontmatter keys (derive-where-honest; feeds Home inventory v2 → graph_card) | STATE template (.adna base) | S | **QUEUED-v8.6 candidate** (batch E/F adjacency — template convention; two optional keys, no schema break) |

