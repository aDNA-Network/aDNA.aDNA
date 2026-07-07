---
campaign_id: campaign_v8_6_release
type: campaign
title: "Operation Ouroboros — the v8.6 template release (graph-lifecycle skills + doc-currency)"
owner: stanley
status: completed
phase_count: 4
mission_count: 3
estimated_sessions: "4-6"
calibrated_sessions: "4-6"
estimation_class: "governance-broad"
executor_tier: opus
priority: high
created: 2026-07-06
updated: 2026-07-06
last_edited_by: agent_rosetta
tags: [campaign, v8_6_release, ouroboros, skill_authoring, template_release, lifecycle_skills]
---

# Campaign: Operation Ouroboros — the v8.6 template release

## Goal

Ship **v8.6** of the aDNA standard to the public face `aDNA-Network/aDNA` — a **skills-and-currency
release** (governance `8.5 → 8.6`; **standard stays v2.5**, no normative surface touched). Its spine is
**Batch A: five new graph-lifecycle skills** that codify playbooks this workspace has already run — the full
circle a `<Name>.aDNA` graph travels: fork → **rename** → **merge** → **archive** → **second-genesis**
(hence *Ouroboros*, the serpent that eats its own tail). When the campaign closes, the standard finally
teaches vault *death* and *rebirth*, not just birth.

## Context

Operation Meridian closed 2026-07-06 (same day), draining Operation Concord's follow-up register and
producing a curated **v8.6 release candidate** at
[[../campaign_meridian/artifacts/v8_6_release_candidate|v8_6_release_candidate.md]] (29 items dispositioned;
cut-line in §4). "Continue the campaign" resolved to Meridian's post-campaign residuals; the operator picked
the highest-leverage one — **ship v8.6** — and, on learning the spine was unauthored, chose **Full (spine
in)** over a lean currency-only cut. This campaign is the "dedicated skill-authoring mission (or
sub-campaign) upstream of the release" the RC §6 sequencing notes call for.

**Why a campaign, not a lone mission**: the work spans multiple sessions and carries **two distinct operator
gates** (P2 ratify, P3 fire) — matching the Champollion / Meridian / Concord precedent. The RC calls Batch A
"the largest pre-release work item."

Prior release precedent (execution gotchas): [[../../../reference|reference_skill_template_release_execution]]
(memory) · v8.5 shipped 2026-07-03 (`05be58e`, tag `v8.5`) · v8.4 image at Champollion G6.

## Scope

### In Scope

- **Batch A — 5 lifecycle skills** (each authored + self-reviewed as its own deliverable):
  `skill_project_archive` (leaf primitive) · `skill_graph_merge` · `skill_graph_rename` ·
  `skill_second_genesis` · `skill_workspace_spring_clean`.
- **Batch A non-skill deltas**: reopen-reconciliation `§reopen` clause in `how/campaigns/AGENTS.md`;
  P-5 optional-with-degradation `webforge/` fork-time scaffold riding `skill_project_fork`.
- **Checklist fork-base fold** — `campaign_w4_governance_doctrine/artifacts/v8_4_adoption_checklist.md` →
  `.adna/` so forks inherit the governance-doctrine checklist at fork-time (Concord ADR-047).
- **Batch G doc-currency** — validator-docstring currency + the dev-vault-name / harness-leak sweep (F8).
- **Cheap riders (conditional on their trigger surface being touched)**: Batch F STATE-prompt shed-on-close
  clause; Batch E P-2/P-8 (validator `source_vault` rule + light STATE frontmatter); public-projection sanitizer.
- **The release fire** (P3): `skill_template_release` — dry-run → operator gate → assemble → tag `v8.6` →
  push → local `~/aDNA/.adna` sync → 7-row smoke.

### Out of Scope

- **Batch B** (CLAUDE.md governance prune + inner-README III batch) — campaign-shaped (each L, needs its own
  review + adversarial pass) → **v8.7 / own cycle**.
- **Batch C** (network-node-mirror + permission-edge entity types) — normative; a fold reopens the closed
  v2.5 cut → **v2.6 standard window** (needs the extension-registry decision first).
- **Batch D** (Obsidian Local REST API seed) — IF-gated on Obsidian T3 opt-in (ADR-011); stays NOT-seeded.
- Firing the release without the ratify gate; touching any normative standard surface.

### Subsumes

| Plan/Mission | Status at Subsumption | Tasks Absorbed By |
|-------------|----------------------|-------------------|
| RC queue `v8_6_release_candidate.md` (Meridian M5 artifact) | active (curated, not executed) | This campaign (P1–P3) |

## Phases & Missions

### Phase 0: Charter *(this session)*

Create the campaign scaffold + seed the RC cut-line + author the P1 mission. **Done when** the campaign dir,
charter, CLAUDE.md, and `mission_v8_6_p1_batch_a_authoring.md` exist and STATE reflects the open campaign.

### Phase 1: Author

| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| P1 | Batch A authoring (5 skills + reopen clause + P-5 scaffold) + checklist fold + Batch G sweep | 3-4 (actual: 2) | — | ✅ **COMPLETE** (P2-ready; Completion Summary + AAR filed) |

**Author order** (the composition graph dictates it): `skill_project_archive` (leaf) → `skill_graph_merge` →
`skill_graph_rename` → `skill_second_genesis` → `skill_workspace_spring_clean` → non-skill deltas → checklist
fold → Batch G. Each skill passes `skill_dual_audience_review` + `skill_self_reference_check`.

**Phase exit gate**: every in-scope deliverable authored + self-reviewed; the `proposed`-status items (Batch G
name-leak sweep + the 2 Hestia addenda) triaged with an accept/hold recommendation for P2; `adna_validate
--governance` zero-drift; a P1 AAR filed.

### Phase 2: Ratify *(OPERATOR GATE)*

Operator reviews the authored batch and **signs** it (§7.7 decision-ratification discipline) — including an
explicit accept/hold on the `proposed`-source items. **Phase exit gate**: operator ratification recorded; the
final v8.6 ship-set frozen.

### Phase 3: Fire *(OPERATOR GATE)*

Run `skill_template_release`: `dry_run` first → operator confirms → assemble the ratified delta into a fresh
clone's `.adna/` → annotated tag `v8.6` + push `main` → sync local `~/aDNA/.adna` → 7-row fresh-clone smoke →
campaign close + AAR. **Phase exit gate**: tag `v8.6` live on `aDNA-Network/aDNA`; 7/7 smoke green; local
`.adna` synced; STATE + memory updated.

## Decision Points

| # | When | Decision | Status |
|---|------|----------|--------|
| DP0 | (pre-campaign) | Ship v8.6? | ✅ resolved — yes (operator, this session) |
| DP1 | (pre-campaign) | Full spine-in vs lean currency-only? | ✅ resolved — Full spine-in (operator) |
| DP2 | P1 close | Accept/hold the 3 `proposed`-source items (name-leak sweep; 2 Hestia addenda) | ✅ resolved 2026-07-06 (P2) — accept Batch G (D-2); defer both Hestia addenda → v8.7 (D-4) |
| DP3 | P1 (authoring) | reopen-reconciliation: `§reopen` clause vs standalone skill | ✅ resolved — `§6 Reopen` clause authored (P1) |
| DP4 | P1 (Batch G) | `skill_iii_setup.md` census-table disposition (delete vs generic note); ship-at-all? | ✅ resolved 2026-07-06 (P2) — census → generic note (D-3); ship Batch G = yes (D-2) |
| DP5 | P2 | Ratify the authored batch (§7.7) + freeze the ship-set | ✅ **resolved 2026-07-06** — ratified: Recommended cut (`artifacts/p2_ratification_record.md`) |
| DP6 | P3 | Fire the release (post dry-run) | ✅ **resolved 2026-07-06** — operator go; v8.6 pushed (`32d4dd5` + tag `v8.6`) → `aDNA-Network/aDNA`; 7/7 smoke green |

## Risk Register

| Risk | Severity | Mitigation |
|------|----------|------------|
| A leaked private wikilink/path ships into the public image (v8.5 near-miss: 21 links) | High | Grep the FULL outbound link set (`](…)` + `[[…]]`) of every dev artifact before assembly; diff-based copy of ratified delta only |
| Batch A skills ship as an unreviewed batch (the exact mistake v8.4 DEFER discipline avoided) | High | Each skill authored + self-reviewed individually; P2 ratifies the set |
| Count-surface drift (skills 50→55) fails `adna_validate --governance` | Medium | Update all 4 surfaces in lock-step per session; validate green at each session close |
| Composition incoherence (5 skills that overlap/contradict) | Medium | Author the leaf primitive (`skill_project_archive`) first; explicit cross-references; delegate self-ref sweep to existing `skill_project_rename` |
| Two releases in 4 days (v8.5 → v8.6) reads as churn | Low | v8.6 is the substantive skills release v8.5's narrow hygiene slice deferred; documented in the RC |
| `.adna` case-insensitive `.gitignore` regression drops the standard tree | Medium | `skill_template_release` step (c) gotcha + smoke check 4 |

## Verification Strategy

Per-mission: SITREP + 5-step AAR + deliverables validated + git clean (path-scoped commits). Per-skill:
`skill_dual_audience_review` + `skill_self_reference_check`. Release (P3): the 7-row fresh-clone smoke from
`skill_template_release` step (f) — a red row reverts the decision to the operator (never auto-remediate a
pushed tag).

## Timeline

| Phase | Missions | Sessions |
|-------|----------|----------|
| P0 Charter | — | 0 (rides P1 session 1) |
| P1 Author | P1 | 3-4 |
| P2 Ratify | (gate) | 0 (operator) |
| P3 Fire | (release) | 1 |
| **Total** | **1 mission + 2 gates** | **4-6 sessions** |

## Notes

- **Author into the dev graph** `how/skills/` — base skills are dev-canonical (e.g. `skill_project_rename.md`
  lives here); `skill_template_release` (P3) folds the ratified delta into `.adna/how/skills/`.
- **skill_type refinement**: the 3 atomic skills (archive/merge/rename) are `agent` (siblings of
  `skill_project_fork`/`skill_project_rename`); the 2 campaign-orchestrating skills (second_genesis/
  spring_clean) are `process` (like `skill_template_release`).
- **`proposed` vs `accepted`**: Batch A ideas 1-6 are `accepted` (confirmed spine); the Batch G name-leak
  sweep + the 2 Hestia addenda are `proposed` → they need P2 acceptance before they ship (DP2).
- Source ideas: `how/backlog/idea_upstream_{graph_merge_recipe,graph_rename_recipe,skill_project_archive,
  skill_second_genesis,skill_workspace_spring_clean}.md` + `idea_campaign_reopen_reconciliation_protocol.md`.
- Canonical playbooks (read-only, in Home.aDNA): `pt08b_merge_playbook.md` · `pt04b_rename_ref_sweep_playbook.md`
  · `campaign_workspace_houseclean/` (+ `disposition_ledger_v2.md`) · `how/skills/skill_second_genesis.md` v0.1.0.

## Completion Summary

**Shipped 2026-07-06** — v8.6 live on `aDNA-Network/aDNA` (`32d4dd5` + annotated tag `v8.6`); local `~/aDNA/.adna` synced (`916ca5d`); 7/7 fresh-clone smoke green; `adna_validate --governance` Zero drift on the pushed image. Executed in 1 session (P2 ratify + P3 assemble/fire); dry-run-then-pause boundary honored.

### Deliverables
- **5 graph-lifecycle base skills** — `skill_project_archive` · `skill_second_genesis` · `skill_graph_merge` · `skill_graph_rename` · `skill_workspace_spring_clean`. The standard now teaches vault **death + rebirth**, closing the loop (fork→rename→merge→archive→second-genesis).
- **2 operational templates** — `template_second_genesis_dossier` · `template_disposition_ledger`.
- **Governance-doctrine adoption checklist** (`.adna/what/docs/governance_doctrine_adoption_checklist.md`, D-1) + a fork-time reference from `skill_project_fork`.
- **§B deltas** — §6 Reopen clause (`how/campaigns/AGENTS.md`, Abandonment→§7) + optional webforge fork scaffold.
- **Batch G doc-currency** — `skill_iii_setup` census→generic wrapper-shape table (D-3); `skill_git_remote_setup` genericized.
- Governance **8.5→8.6**; standard stays **v2.5**; image counts re-trued to **30 templates / 32 skills**.

### Descoped (→ v8.7)
- Both Hestia addenda (D-4): node_manifest interview emission (M-effort, ADR-015 Tier-3 gated) + STATE `phase:`/`campaigns:` frontmatter keys.

### Key Findings
- **D-5 was already satisfied** — the ratification-record mirror happened at Meridian M1 (`d6e9179`); the ledger's "+1→45" premise was stale (dev count stays **44**). A ratification-time live-tree check caught it before a wrong edit.
- **Dev sources diverge from `.adna` in unratified ways** (dev's `skill_project_fork` was *older* than the image in several sections) → wholesale-copy would regress; the diff-based, delta-only fold is mandatory.
- **`.adna` uses flat wrapper placement** (no ADR-045 `how/federation/`) → webforge folded flat for image consistency.
- 2 dangling wikilinks (`skill_create_iss`, `adr_042`) de-linked (v8.5 precedent); leak scan otherwise clean (0 private tokens across +1255 lines).

### Scope Changes
- Corrected a pre-existing P1-miss count drift in the dev vault (glossary:25 + MANIFEST:112, 42→44) while re-truing — honest-accounting, out-of-band from the release.

### Follow-Up Campaigns
- v8.7 queue (routed, not campaign work): the 2 Hestia addenda; image `how/templates/AGENTS.md` pre-existing incompleteness; a pre-existing non-conformant-repo-names example in `skill_git_remote_setup`.

## Campaign AAR

- **Worked**: dry-run-then-pause in a throwaway clone produced a real reviewable diff + full validation (leak scan, `adna_validate`, persona test) *before* any outward action; the diff-based delta-only fold kept the image exactly the 15-file ratified delta (0 leaks, Zero drift, 7/7 smoke).
- **Didn't**: the staging ledger's D-5 premise + the "44→45" count were stale — cost a reverted cp + a re-scope; zsh word-splitting silently no-op'd the first delta-copy loop (0 files) before a `while read` fix.
- **Finding**: ratification-time is a live-tree checkpoint — verify each ledger claim against disk before acting; base-image counts are a separate surface from dev counts, re-trued at assembly (image 32/30 ≠ dev 55/44).
- **Change**: `skill_iii_setup` census → a generic *wrapper-shape* table (organized by shape) — more useful than the row-by-row genericize DP4 rejected.
- **Follow-up**: v8.7 queue above; the dev-vault-name-leak-sweep learnings continue upstream (`idea_upstream_dev_vault_name_leak_sweep`).
