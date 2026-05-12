---
type: governance
subtype: campaign_claude
created: 2026-05-12
updated: 2026-05-12
last_edited_by: agent_stanley
tags: [governance, campaign, planned, adna, workspace_ux, dynamic_bootstrap, obsidian_vault, mini_campaign]
---

# CLAUDE.md — Campaign: Lattice Workspace UX (mini-campaign)

> **Status: planned (mission tree finalized 2026-05-12 by v2 M04b S1).** Mission tree
> + 3 stub files (M-LWX-01 / M-LWX-02 / M-LWX-03) live in `missions/`. Campaign
> remains `phase: -1` (not yet open). Do **not** open M-LWX-01 until v2 M04b is
> formally closed AND the operator has authorized the mini-campaign open per
> Standing Order #1.

## Campaign Identity

| Field | Value |
|-------|-------|
| Campaign | `campaign_lattice_workspace_ux` |
| Owner | stanley |
| Status | **planned** (stub seeded 2026-05-12 by v2 Campaign Amendment Session; mission tree finalized 2026-05-12 by v2 M04b S1 Obj 4) |
| Current Phase | not yet open — awaits operator authorization post v2 M04b close |
| Predecessor | `campaign_adna_v2_infrastructure` (specifically v2 M04b mission) |
| Persona | Rosetta (continues from v2; per-vault interactions adopt host persona — Hestia for node.aDNA invocations, project persona inside `.aDNA/` projects) |

## Quick Start (for the agent that opens M-LWX-01)

1. Confirm v2 M04b close:
   - `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/mission_adna_infra_p1_04b_workspace_ux_planning.md` has `status: completed`
   - `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/aar_m04b_workspace_ux_planning.md` exists
   - This campaign's `campaign_lattice_workspace_ux.md` has mission tree finalized (3 rows: M-LWX-01 + M-LWX-02 + M-LWX-03 with non-TBD content); `phase: -1` flips to `phase: 1` at mini-campaign open (operator-gated, not at M04b close)
   - `aDNA.aDNA/STATE.md` Next Session Prompt names M-LWX-01 as next-to-open
2. Read this CLAUDE.md (auto-loaded), then read `campaign_lattice_workspace_ux.md`
3. Read M04b's outputs (the design inputs):
   - `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m04b_obj1_dynamic_ux_gap_analysis.md`
   - `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m04b_obj2_skill_node_bootstrap_interview_spec.md` (M-LWX-01's primary input)
   - `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m04b_obj3_lattice_obsidian_vault_spec.md` (M-LWX-02's primary input)
4. Read M04 outputs as ground-truth baseline:
   - `node.aDNA/` (bootstrapped vault at git HEAD `411660e`)
   - `~/lattice/CLAUDE.md` workspace router (4 M04 additions)
5. Open M-LWX-01 (interview implementation). First session adopts D1-D5 resolutions
   from M04b S1 (defaults or operator-overridden) without re-asking.

## Key Files

| File | Purpose |
|------|---------|
| `campaign_lattice_workspace_ux.md` | Master campaign document (this directory) |
| `missions/mission_lwx_<NN>_<slug>.md` | Individual mission files (M-LWX-01, M-LWX-02, M-LWX-03; stubs seeded by v2 M04b Obj 4) |
| `missions/artifacts/` | Mission deliverables + AARs + integration-test results |

## Standing Orders (campaign-specific)

These augment the project-level standing orders in `aDNA.aDNA/CLAUDE.md`:

1. **Read M04 + M04b outputs before touching anything**. M04 is the audit baseline;
   M04b is the design spec. Do not invent design choices already resolved in M04b's
   gap analysis + interview spec + Obsidian vault spec.
2. **D5 resolution must be explicit per artifact**. When implementing a skill or
   config file in this mini-campaign, the implementing session declares "this lands
   at `.adna/how/skills/...` (upstream)" or "this lands at `~/lattice/...` (local
   only)" before the edit. No silent upstream/local choices.
3. **Vault-in-vault discipline**. When the agent edits anywhere under `~/lattice/`,
   it does NOT touch any `*.aDNA/` subfolder unless the mission explicitly scopes
   that vault. The outer workspace and inner project vaults are separate scopes.
   `.obsidianignore` enforces this at the indexer level.
4. **Interview-skill discipline**. The interview asks only operator-specific
   questions — never re-asks what `skill_inventory_refresh.md` already
   auto-detected. If a value is auto-detectable, it's not in the interview.
5. **Integration test before AAR**. M-LWX-03 cannot close with "looks good in code
   review"; the test must actually re-run the bootstrap + Obsidian setup on a clean
   slate (snapshot/restore OR test machine) and produce a results artifact.
6. **Cross-graph findings → v2 amendment**. Any insight from this mini-campaign
   that should change v2 main campaign content (e.g., update to M01 Obj 3 design,
   amendment to ADR-009, new skill in `.adna/`) gets captured as a v2 amendment
   memo at M-LWX-03 close. v2 M07 (review/simplify) absorbs them.
7. **No M05 opening from this campaign**. v2 M05 (publish-skill rewrite) is v2's
   responsibility, not this mini-campaign's. After M-LWX-03 close, the operator
   authorizes M05 opening from v2's mission tree.

## Context Loading

Load these resources for mini-campaign work:

| Subtopic / file | When |
|----------|------|
| `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/mission_adna_infra_p1_04_node_adna_bootstrap.md` | Always — M04 mission spec (baseline reference) |
| `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/aar_m04_node_adna_bootstrap.md` | Always — M04 AAR + items deferred |
| `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m04_obj7_ten_dim_audit.md` | Always — 10-dim audit evidence |
| `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj3_node_adna_design.md` | Always — authoritative design source for node.aDNA |
| `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/mission_adna_infra_p1_04b_workspace_ux_planning.md` | Always — this mini-campaign's parent planning mission |
| `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m04b_obj1_dynamic_ux_gap_analysis.md` | Always (when M04b closes) — gap analysis source |
| `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m04b_obj2_skill_node_bootstrap_interview_spec.md` | M-LWX-01 — interview skill spec |
| `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m04b_obj3_lattice_obsidian_vault_spec.md` | M-LWX-02 — Obsidian vault setup spec |
| `node.aDNA/` (whole vault) | M-LWX-01 — bootstrap target vault |
| `node.aDNA/what/inventory/inventory_vaults.yaml` | M-LWX-02 — home-page gallery data source |
| `node.aDNA/.obsidianignore` | M-LWX-02 — vault-in-vault exclusion pattern precedent |
| `~/lattice/CLAUDE.md` (workspace router) | M-LWX-01 — Step 0.3 invocation point for interview skill |

## Delegation Notes

This campaign was **stubbed by Rosetta on 2026-05-12** during the Campaign Amendment
Session of `campaign_adna_v2_infrastructure`
(`session_stanley_20260512_185037_adna_v2_m04b_amendment`). The **mission tree was
finalized 2026-05-12 by v2 M04b S1 Obj 4** (`session_stanley_20260512_200414_adna_v2_m04b_s1`)
based on the Obj 1 gap analysis + Obj 2 interview spec + Obj 3 Obsidian vault spec —
all three M04b design artifacts live at `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/`.

If you are an agent opening this campaign for the first time:
- The mission tree is **finalized**, not preliminary. Stubs for M-LWX-01 / M-LWX-02 /
  M-LWX-03 live in `missions/`; full Read/Produce blocks land at each mission's
  first-execution-session per the M02 / M04 / M04b first-execution-session pattern.
- `campaign_lattice_workspace_ux.md` `phase: -1` is intentional — the mini-campaign
  has a finalized tree but is **not yet open**. Phase flips to `1` at operator
  authorization. Do not assume open simply because the tree is finalized.
- The seeding artifact is at
  `aDNA.aDNA/how/sessions/history/2026-05/session_stanley_20260512_185037_adna_v2_m04b_amendment.md`;
  the finalization session is at
  `aDNA.aDNA/how/sessions/history/2026-05/session_stanley_20260512_200414_adna_v2_m04b_s1.md`
  (or `active/` if the session is still in flight when you arrive).

## Vault-in-vault disclaimer

`~/lattice/` will become an Obsidian vault when M-LWX-02 ships. The
`*.aDNA/` subfolders (e.g., `aDNA.aDNA/`, `node.aDNA/`, `SiteForge.aDNA/`) remain
their own Obsidian vaults. Operators open the outer `~/lattice/` vault for "control
plane" work (browsing the lattice catalog, jumping to specific vaults) and open
inner `.aDNA/` vaults separately for project work. The `.obsidianignore` at
`~/lattice/.obsidianignore` enforces non-overlap so the outer vault's indexer never
sees inner-vault content as its own.
