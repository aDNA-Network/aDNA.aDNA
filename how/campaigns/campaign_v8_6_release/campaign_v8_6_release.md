---
campaign_id: campaign_v8_6_release
type: campaign
title: "Operation Ouroboros — the v8.6 template release (graph-lifecycle skills + doc-currency)"
owner: stanley
status: active
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
| P1 | Batch A authoring (5 skills + reopen clause + P-5 scaffold) + checklist fold + Batch G sweep | 3-4 | — | active |

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
| DP2 | P1 close | Accept/hold the 3 `proposed`-source items (name-leak sweep; 2 Hestia addenda) | pending — P2 gate |
| DP3 | P1 (authoring) | reopen-reconciliation: `§reopen` clause vs standalone skill | pending — default clause (idea's first option) |
| DP4 | P1 (Batch G) | `skill_iii_setup.md` census-table disposition (delete vs generic note); ship-at-all? | pending |
| DP5 | P2 | Ratify the authored batch (§7.7) + freeze the ship-set | pending — **OPERATOR** |
| DP6 | P3 | Fire the release (post dry-run) | pending — **OPERATOR** |

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

*Fill out when setting `status: completed`.*

### Deliverables
### Descoped
### Key Findings
### Scope Changes
### Follow-Up Campaigns

## Campaign AAR

*Mandatory before setting `status: completed`. See `how/templates/template_aar_lightweight.md`.*

- **Worked**:
- **Didn't**:
- **Finding**:
- **Change**:
- **Follow-up**:
