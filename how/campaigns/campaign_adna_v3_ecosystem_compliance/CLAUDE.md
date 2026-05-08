---
type: governance
subtype: campaign_claude
created: 2026-05-08
updated: 2026-05-08
last_edited_by: agent_stanley
tags: [governance, campaign, planned, adna, v3, ecosystem_compliance, per_vault]
---

# CLAUDE.md — Campaign: aDNA v3 Ecosystem Compliance

> **Status: planned. This campaign is queued.** It opens at the P3 phase gate of the
> predecessor campaign `campaign_adna_v2_infrastructure` (post-M03 flatten + M08a/M08b
> shipped). Do **not** open M01-EC until that gate is met.

## Campaign Identity

| Field | Value |
|-------|-------|
| Campaign | `campaign_adna_v3_ecosystem_compliance` |
| Owner | stanley |
| Status | **planned** (stub seeded 2026-05-08; opens post-v2 P3) |
| Current Phase | not yet open — awaits v2 P3 phase gate |
| Predecessor | `campaign_adna_v2_infrastructure` |
| Persona | Rosetta (continues from v2; per-vault sessions adopt the host vault's persona) |

## Quick Start (for the agent that opens M01-EC)

1. Confirm v2 P3 phase gate met:
   - `git -C ~/lattice/.adna log --oneline -1` shows the M03 flatten commit
   - `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/` contains M03 + M08a + M08b AARs
   - `aDNA.aDNA/STATE.md` says `campaign_adna_v2_infrastructure` is at P3 close or beyond
2. Read this CLAUDE.md (auto-loaded), then read `campaign_adna_v3_ecosystem_compliance.md`
3. Read v2's `m01_obj0_ecosystem_matrix.md` + `m01_obj1_current_state.md` (the
   compliance-gap baseline)
4. Read v2's M03/M05/M06 AARs (what actually shipped + what surprises emerged)
5. Open M01-EC: per-vault audit. M01-EC's first session calibrates the rest of the
   mission tree from preliminary stub form into executable specs.

## Key Files

| File | Purpose |
|------|---------|
| `campaign_adna_v3_ecosystem_compliance.md` | Master campaign document (this directory) |
| `missions/mission_eco_compliance_<NN>_<slug>.md` | Individual mission files (seeded by M01-EC) |
| `missions/artifacts/` | Per-vault audit scorecards, AARs, coord memo archives |

## Standing Orders (campaign-specific)

These augment the project-level standing orders in `aDNA.aDNA/CLAUDE.md`:

1. **Per-vault patience.** Every per-vault touch begins with: (a) `git pull` in that
   vault, (b) read its CLAUDE.md, (c) read its STATE.md, (d) check `who/coordination/`
   for fresh memos. Do not start any change until the host vault's state is freshly
   loaded. Other operators may have committed since the last time this campaign touched
   the vault.
2. **Non-forced renames.** ADR-009 codifies the naming convention; it does **not** force
   per-vault renames. Each per-vault rename is an operator decision with explicit
   approval. External-org-owned vaults (Wilhelm Foundation, TAPP, Super League) retain
   veto.
3. **Co-sign cross-graph memos.** Any change touching `Spacemacs.aDNA/`, `WilhelmAI.aDNA/`,
   `RareArchive.aDNA/`, `strategic_interface_protocol.aDNA/`, or `SuperLeague.aDNA/`
   produces a coord memo co-signed by Rosetta (this vault's persona) AND the host
   persona before the change ships.
4. **Document exceptions, don't suppress them.** A vault that opts out of any v7.0
   pattern (renames, airlock, full skill set) gets an explicit exception entry in the
   M07-EC scorecard with rationale. No silent skips.
5. **Bulk operations stage atomically per vault.** When propagating skills to multiple
   vaults, commit each vault's changes in a single per-vault commit — never bulk-commit
   across vaults. This preserves per-vault audit trails.
6. **Carry forward v2 issue list.** Issues I-1, I-3, I-4, I-5, I-7, I-11 from v2's
   `m01_obj1_current_state.md` §5 are this campaign's input backlog. Each issue closes
   with a specific mission's AAR that names it.

## Context Loading

Load these resources for campaign work:

| Subtopic / file | When |
|----------|------|
| `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj0_ecosystem_matrix.md` | Always — the 19-vault inventory baseline |
| `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj1_current_state.md` | Always — the issue list this campaign closes |
| `aDNA.aDNA/what/decisions/adr_004_*` through `adr_009_*` | Always — the v7.0 ADRs that govern this work |
| `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj2_migration_runbook.md` | M03-EC + M04-EC — operator-facing migration patterns |
| `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj3_node_adna_design.md` | M05-EC — airlock + node patterns |
| `III.aDNA/how/airlock/AIRLOCK.md` | M05-EC — canonical airlock spec |
| `lattice/CLAUDE.md` Project Discovery + Workspace Layout | M06-EC — workspace router resync target |

## Delegation Notes

This campaign was **stubbed by Rosetta on 2026-05-08** during the Campaign Amendment
Session of `campaign_adna_v2_infrastructure` (M01 S2 S2.5). The stub captures the goal,
the predecessor dependency, and the preliminary 7-mission outline. **The stub does not
finalize the mission tree** — that finalization happens in M11 of the v2 campaign, after
v2 execution generates the on-the-ground evidence that calibrates the per-vault scope.

If you are an agent opening this campaign for the first time:
- The mission tree below is **preliminary**. Treat it as a sketch.
- M11 of the predecessor campaign should have produced an **updated** version of this
  campaign's master file before you arrived. If `campaign_adna_v3_ecosystem_compliance.md`
  still has frontmatter `phase: -1`, M11 has not yet finalized it — escalate to operator
  before proceeding.
- The seeding artifact is at
  `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_amendment_log.md`
  — it explains why this campaign was seeded early and what M11 is responsible for
  finalizing.
