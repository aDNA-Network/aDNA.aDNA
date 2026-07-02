---
type: backlog_idea
status: accepted
priority: high
created: 2026-06-10
updated: 2026-07-02
last_edited_by: agent_rosetta
filed_from: Home.aDNA/how/campaigns/campaign_workspace_houseclean/disposition_ledger_v2.md (§H; Operation Spring Clean SC-8)
filing_authorization: skill_upstream_contribution
upstream_target: LatticeProtocol/aDNA
tags: [backlog, upstream, skill_project_archive, archive, supersession, shim, registry_drop, so7, workspace]
fold_batch: champollion_m6_1_rc
---

# Idea: `skill_project_archive` — a canonical archive flow for superseded/wound-down vaults

## Problem

The standard has `skill_project_fork` for vault birth but **nothing for vault death**. SO-6/7 says
archive-never-delete, yet no skill defines *how* to archive: where the vault goes, what banner it
carries, what happens to its router row, registry entries, render artifacts, symlinks, and inbound
references. Every archive event re-derives the flow. The workspace router on this node already calls
the local result a "Candidate canonical archive convention (no `skill_project_archive` in the standard yet)".

## Evidence — five archive events evolved a stable convention (2026-06 cohort)

ComicForge (2026-06-02) · LatticeAgent + LatticeTerminal (2026-06-07, aDNALabs WS-3) · LiteratureForge
(2026-06-08, wind-down) · RareHarnessOld (2026-06-10, salvage-subsume, Spring Clean SC-6a). All five
converged on the same 8 steps, now also load-bearing for `skill_second_genesis` P1 (archive-old-first).

## Proposed flow (as practiced)

1. **Holder vault**: `Archive.aDNA/` at workspace root — not itself a vault (no governance files);
   houses archived vaults intact as `Archive.aDNA/<Name>.aDNA/`.
2. **Banner**: archived vault's `CLAUDE.md` + `STATE.md` get a supersession/wind-down banner
   (date · reason · successor/quarry pointers · "archived, immutable") + frontmatter `status: archived`.
3. **Move**: `git mv`-equivalent move under the holder; in-vault git history intact; commit in the
   archived vault's own repo where one exists.
4. **Back-compat symlink**: `~/<root>/<Name>.aDNA → Archive.aDNA/<Name>.aDNA`, **registered at creation**
   in the node shim ledger with class/window/retire-condition/owner (see sibling filing
   `idea_upstream_shim_window_discipline.md`).
5. **Router-row move**: the project row moves to archived form (or an Archive holder row) — routing
   identity only, with the archive date + successor pointer.
6. **Registry-drop**: node inventory row removed (dated drop-comment in place), derived render artifacts
   (curation cards, canvas node, HOME index entries) regenerate without it; `vault_count` recomputes.
   Render-asset images may be retained (assets, not registry pointers).
7. **Quarry pointers**: salvage/consumption happens via an explicit quarry index in the consumer
   (e.g. `Harness.aDNA/what/intake/rareharness_salvage_20260610/quarry_index.md`), never by re-editing
   the archive.
8. **Fleet-delta**: one coordinated inventory/curation/canvas regen batches the drop (don't regen per-event).

## Why upstream

Any multi-vault workspace accumulates superseded vaults; without a canonical flow each node invents one.
The five-event convergence on this node suggests the pattern is stable enough to template. Natural home:
`how/skills/skill_project_archive.md` in the template, cross-referenced from `skill_project_fork`
(birth ↔ death symmetry) and from `skill_second_genesis` P1.


## Champollion G0 disposition — F (M1.1, 2026-07-02)

**ACCEPT → template-fold.** Marked `fold_batch: champollion_m6_1_rc` — M6.1 assembles the release candidate from this marker (nothing ships to `.adna/` here). Ratified at Champollion G0 (D2).
