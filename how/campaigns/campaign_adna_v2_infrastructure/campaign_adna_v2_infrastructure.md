---
type: campaign
campaign_id: campaign_adna_v2_infrastructure
title: "aDNA v2 Infrastructure — Repo Structure, Node Vault, Publish Fix, Context Engine, Airlock + Naming Convention"
status: planning
phase: 0
adna_version_target: "governance_v7.0"
adna_version_track: "governance_only"
created: 2026-05-07
updated: 2026-05-08
last_edited_by: agent_stanley
amendments:
  - 2026-05-08: "Stage 2 Session 2.5 (Campaign Amendment Session) — folded airlock template integration (ADR-008 slot in M03) + naming/repo convention codification (ADR-009 slot in M07) into existing mission scope; seeded campaign_adna_v3_ecosystem_compliance/ as planned successor stub. See missions/artifacts/m01_amendment_log.md."
tags: [campaign, adna, infrastructure, v2, node_vault, publish, context_engine, lattice_scope_adna, migration, airlock, naming_convention]
---

# Campaign — aDNA v2 Infrastructure

## Strategic Intent

Operation Rosetta (Phases 0-7) established the documentation site and content layer. This
campaign addresses the infrastructure beneath the standard: the repo structure, local node
governance, publish workflow, and observability tooling. The outputs ship as **aDNA v7.0** —
a version bump to the template itself — and propagate to all vaults in the ecosystem.

**Amended scope (2026-05-08, Stage 2 Session 2.5):** v7.0 also surfaces the **airlock
pattern** at template level (a vault-agnostic cross-vault coordination surface that already
exists in `III.aDNA/`, `VideoForge.aDNA/`, and is exercised by `CanvasForge.aDNA/`) and
codifies the **`<name>.aDNA/` directory ↔ `<name>.aDNA.git` GitHub repo naming
convention**. Both are template-level only this campaign — a small `/.adna/how/airlock/`
stub with `skill_project_fork.md` integration (M03 / ADR-008) and a naming-convention ADR
(M07 / ADR-009) that documents the convention going forward without forcing per-vault
renames. Per-vault adoption (per-vault airlock installation, repo renames, full v7.0
compliance pass across all 19 active ecosystem vaults) is the scope of the **successor
campaign** `campaign_adna_v3_ecosystem_compliance`, seeded in this amendment as a
`status: planned` stub and opening at this campaign's P3 phase gate.

Every change in this campaign must answer two questions before landing:
1. Does this work for a brand-new operator setting up their first lattice?
2. Does this give existing operators a clear, low-friction migration path?

## Scope

| Topic | Trigger | Ecosystem Impact |
|---|---|---|
| Ecosystem compatibility matrix | Prerequisite for all other changes | Maps all ~17 vaults; prevents regressions |
| Repo structure simplification | `.adna -> adna/.adna` symlink is fragile; nested template | Breaking: workspace setup changes for all users |
| `node.aDNA/` local lattice node vault | No home for cross-project improvement work | Additive: new opt-in pattern |
| `skill_lattice_publish` git fix | Vault has no git remote; rsync workaround is unmaintainable | Breaking: all vaults using publish skill need migration |
| GitHub repo minimalism | `deploy_manifest.yaml` + `.github/` clutter template view; repo name `Agentic-DNA` is verbose | Breaking: clone URL changes if renamed |
| aDNA template version bump (Governance only) | Campaign produces structural changes; needs canonical version | Affects all template consumers; Standard track unchanged |
| General repo review + simplify | Audit for clarity, naming, skill freshness, dead links | Additive: improvements only |
| Context/token optimization audit | No systematic measurement; convergence model unvalidated | Additive: measurement infrastructure |
| LatticeScope.aDNA | No open observability layer for distributed agentic systems | New project: `LatticeScope.aDNA/` vault + `latticescope/` code repo |
| Upgrade guide + communication | Existing users need a migration path before changes land | Prerequisite for publishing any of the above |
| Airlock template stub (NEW — amendment 2026-05-08) | III + VideoForge + CanvasForge airlock pattern matures; vault-agnostic; cheap to land at template level when M03 is touching the template anyway | Additive opt-in; no breaking change to vaults that ignore it |
| Repo naming convention codification (NEW — amendment 2026-05-08) | Obj 0 surfaced 4 non-uniform repo names (`science-stanley-adna`, `wga-adna`, `context-commons-adna`, `LAStartupLattice`) + 7 vaults with no remote; v7.0 is the natural inflection to codify `<name>.aDNA/` ↔ `<name>.aDNA.git` | Codifies-only, doesn't force renames; per-vault application is successor-campaign scope |
| Final review + next campaign seed | Close audit loop; plan what comes after | Closure |

## Phase structure

| Phase | Focus | Gate |
|---|---|---|
| P0 | Planning (M01) — produces this campaign's mission tree | Operator approves campaign doc + mission list (each M02–M11 has named file, ≥3 objectives, 1-page abstract) |
| P1 | Ecosystem mapping + **upgrade guide ships first** + repo flatten + node vault | Compatibility matrix done; **upgrade guide live and reviewed (M08a)**; ADRs accepted; `node.aDNA/` bootstrapped |
| P2 | Publish fix + GitHub minimalism + Governance v7.0 tag | Pre-push hook working; remote configured; Governance `v7.0` tagged (Standard track unchanged) |
| P3 | General repo review + simplify + ecosystem propagation receipts | Audit findings addressed; M08b propagation memos delivered; ~17 vault operators acknowledged |
| P4 | Context/token audit + checkpoint + LatticeScope.aDNA planning | Token baselines established; LatticeScope.aDNA campaign doc ready |
| P5 | Final review + next campaign seed | Next campaign planning doc ready |

## Mission tree (seeded by M01; calibrated after planning)

Mission ordering reflects the locked sequencing decision (Stage 1, 2026-05-07): the upgrade
guide and coordination memos (M08a) ship **before** the breaking repo flatten (M03) so
existing operators have a migration path in hand before their `.adna/` structure changes.

| Mission | Phase | Description | Status |
|---|---|---|---|
| M01: Planning | P0 | Produces this campaign's full mission tree | **planned** — entry point |
| M02: Ecosystem compatibility matrix | P1 | Inventory all vaults; map impact of each change | planned |
| **M08a: Upgrade guide + coordination memos (pre-flatten)** | P1 | CHANGELOG draft entry; v6→v7 upgrade guide; per-vault coordination memos; published BEFORE M03 lands | planned |
| M03: Repo structure simplification | P1 | Flatten `.adna`, update `skill_project_fork` + `skill_workspace_upgrade`, migration runbook | planned |
| M04: `node.aDNA/` design + bootstrap | P1 | Full vault design; persona (Hestia); workspace CLAUDE.md update | planned |
| M05: `skill_lattice_publish` rewrite | P2 | Rewritten skill + `skill_git_remote_setup` (NEW) + `skill_deploy` (NEW; pre-push hook installer) | planned |
| M06: GitHub minimalism + Governance v7.0 tag | P2 | Move `deploy_manifest`, assess repo rename, tag Governance `v7.0` (Standard track unchanged) | planned |
| M07: General repo review + simplify | P3 | `/simplify` pass; skill freshness audit; 10-dimension compliance | planned |
| **M08b: Post-flatten ecosystem propagation receipts** | P3 | Confirm ~17 vault operators acknowledged; collect migration receipts; resolve any breakage | planned |
| M09: Context/token audit | P4 | Token baselines; measurement protocol; optimization opportunities | planned |
| **Checkpoint: Obj 9 → Obj 10** | P4 | Validate that token-audit findings align with LatticeScope.aDNA design before M10 starts | gate |
| M10: LatticeScope.aDNA planning | P4 | Full campaign doc for `LatticeScope.aDNA/` ready to execute (vault design + Prometheus persona + sub-campaign doc) | planned |
| M11: Final review + next campaign seed | P5 | AAR aggregation; open items; `campaign_adna_v3` stub | planned |

## Ecosystem snapshot (at campaign open)

Vaults consuming aDNA template skills (approximate — M02 produces the authoritative list):

**`.aDNA` vaults (forked from template):**
science_stanley.aDNA, SiteForge.aDNA, zeta.aDNA, la_startup.aDNA, wga.aDNA,
context_commons.aDNA, aDNA.aDNA, ComfyForge.aDNA, VAASLattice.aDNA, LPWhitepaper.aDNA,
CanvasForge.aDNA, RareHarness.aDNA, RareArchive.aDNA, WilhelmAI.aDNA, VideoForge.aDNA,
Spacemacs.aDNA (~17 active)

**Per-change impact:**
- Repo structure flatten → workspace root only (one location; all vaults unaffected in place)
- `skill_lattice_publish` rewrite → all vaults carrying publish skill need migration
- `node.aDNA/` → new pattern; no existing vault affected; additive
- Version bump → all vaults can adopt at their own pace; template CHANGELOG is the signal

## New projects seeded by this campaign

| Project | Category | Persona | Code Repo | Status |
|---|---|---|---|---|
| `node.aDNA/` | Org-Vault (local node) | Hestia | n/a (local) | Bootstrapped in M04 |
| `LatticeScope.aDNA/` | Platform.aDNA | Prometheus | `latticescope/` | Campaign planned in M10; bootstrapped post-campaign |
| `campaign_adna_v3_ecosystem_compliance/` | Campaign (successor; added by amendment 2026-05-08) | Rosetta (continues) | n/a (governance-only campaign) | Stub seeded 2026-05-08; status `planned`; opens at v2 P3 phase gate; M11 finalizes mission tree |

## Cross-vault references

- `Spacemacs.aDNA/how/backlog/idea_skill_publish_lattice_git_fix.md` — downstream trigger (M05)
- `Spacemacs.aDNA/how/backlog/idea_agentic_layout_system.md` — peer improvement (separate P4 mission)
- `adna/` repo remote: `github.com/LatticeProtocol/Agentic-DNA.git` (rename decision in M06 / ADR-006)
- `aDNA.aDNA/` — Operation Rosetta Phase 7 complete; Phase 8 queued separately; this vault hosts the campaign per ADR-004
- `lattice-labs/STATE.md` — strategic coordination reference

**Airlock pattern references (M03 / ADR-008 source material — added by amendment 2026-05-08):**
- `III.aDNA/how/airlock/AIRLOCK.md` — canonical airlock spec (v0.1; 5 entry paths: A-Text, B-Web/Visual, C-Code, D-Video, E-Vault Maintenance). The template stub M03 produces mirrors this structure.
- `VideoForge.aDNA/how/airlock/AIRLOCK.md` — Forge.aDNA reference implementation (v0.1; 4 entry paths: consumer wrapper, cross-forge request, RLHF tuner, vault maintenance). Exemplar for cross-forge request pattern.
- `CanvasForge.aDNA/who/coordination/coord_2026_05_08_videoforge_requests_carly_herb_deck.md` — worked example of airlock-shaped cross-vault request (VideoForge → CanvasForge deck-build)
- `III.aDNA/who/coordination/coord_2026_05_08_airlock_v0_2_videoforge_findings.md` — 5-gap analysis filed as input to III.aDNA Campaign C (v0.2 standardization)

**Successor campaign (added by amendment 2026-05-08):**
- `aDNA.aDNA/how/campaigns/campaign_adna_v3_ecosystem_compliance/campaign_adna_v3_ecosystem_compliance.md` — applies v7.0 changes (flatten + publish-skill rewrite + node.aDNA + airlock + naming convention) per-vault to the 19 active ecosystem vaults. Status: `planned`. Opens at this campaign's P3 phase gate. M11 finalizes its mission tree.

## ADRs

**Accepted (Stage 1 of M01, 2026-05-07; promoted to accepted at Stage 2 Session 1, 2026-05-08):**
- `aDNA.aDNA/what/decisions/adr_004_campaign_home_stays_in_adna_adna.md` — campaign home stays here, does not migrate to `node.aDNA/`
- `aDNA.aDNA/what/decisions/adr_005_three_way_vault_boundary.md` — canonical scope distinction for `node.aDNA/` / `aDNA.aDNA/` / `lattice-labs/`

**Drafted as proposed (Stage 2 Session 2 of M01, 2026-05-08; await operator ratification at M03 phase gate):**
- `aDNA.aDNA/what/decisions/adr_006_github_repo_rename_to_adna.md` — GitHub repo rename `Agentic-DNA` → `adna` (URL-slug only)
- `aDNA.aDNA/what/decisions/adr_007_outer_adna_claude_md_disposition.md` — outer `adna/CLAUDE.md` becomes `template_workspace_claude.md` (NEW)

**Drafted in remaining M01 objectives (Stage 2 Sessions 3-6):**
- ADR-008 (Obj 2 / M03 — Airlock template stub): integration of `/.adna/how/airlock/AIRLOCK.md` reference stub + `skill_project_fork.md` airlock-dir-generation update. Mirrors III.aDNA canonical (5 entry paths). Ratified at M03 phase gate alongside ADR-006/007. *(Slot added by amendment 2026-05-08.)*
- Semver discipline ADR (Obj 6 / M06) — Major.Minor only, two-track Governance + Standard
- ADR-009 (Obj 7 / M07 — Naming/repo convention): codifies `<name>.aDNA/` directory ↔ `<name>.aDNA.git` GitHub repo. Documents existing exceptions (the 4 hyphen-flat names + 7 no-remote + 1 non-standard local-path) as grandfathered; rename application is operator-discretionary, not forced. Per-vault application is successor-campaign scope. *(Slot added by amendment 2026-05-08.)*
- LatticeScope.aDNA ADR-000 (project identity, Obj 10) + ADR-001 (language choice)
