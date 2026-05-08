---
type: campaign
campaign_id: campaign_adna_v2_infrastructure
title: "aDNA v2 Infrastructure — Repo Structure, Node Vault, Publish Fix, Context Engine"
status: planning
phase: 0
adna_version_target: "v7.0"
created: 2026-05-07
updated: 2026-05-07
last_edited_by: agent_stanley
tags: [campaign, adna, infrastructure, v2, node_vault, publish, context_engine, lattice_scope_adna, migration]
---

# Campaign — aDNA v2 Infrastructure

## Strategic Intent

Operation Rosetta (Phases 0-7) established the documentation site and content layer. This
campaign addresses the infrastructure beneath the standard: the repo structure, local node
governance, publish workflow, and observability tooling. The outputs ship as **aDNA v7.0** —
a version bump to the template itself — and propagate to all vaults in the ecosystem.

Every change in this campaign must answer two questions before landing:
1. Does this work for a brand-new operator setting up their first lattice?
2. Does this give existing operators a clear, low-friction migration path?

## Scope

| Topic | Trigger | Ecosystem Impact |
|---|---|---|
| Ecosystem compatibility matrix | Prerequisite for all other changes | Maps all ~17 vaults; prevents regressions |
| Repo structure simplification | `.adna -> adna/.adna` symlink is fragile; nested template | Breaking: workspace setup changes for all users |
| `node.aDNA/` local lattice node vault | No home for cross-project improvement work | Additive: new opt-in pattern |
| `skill_publish_lattice` git fix | Vault has no git remote; rsync workaround is unmaintainable | Breaking: all vaults using publish skill need migration |
| GitHub repo minimalism | `deploy_manifest.yaml` + `.github/` clutter template view; repo name `Agentic-DNA` is verbose | Breaking: clone URL changes if renamed |
| aDNA template version bump | Campaign produces structural changes; needs canonical version | Affects all template consumers |
| General repo review + simplify | Audit for clarity, naming, skill freshness, dead links | Additive: improvements only |
| Context/token optimization audit | No systematic measurement; convergence model unvalidated | Additive: measurement infrastructure |
| LatticeScope.aDNA | No open observability layer for distributed agentic systems | New project: `LatticeScope.aDNA/` vault + `latticescope/` code repo |
| Upgrade guide + communication | Existing users need a migration path before changes land | Prerequisite for publishing any of the above |
| Final review + next campaign seed | Close audit loop; plan what comes after | Closure |

## Phase structure

| Phase | Focus | Gate |
|---|---|---|
| P0 | Planning (M01) — produces this campaign's mission tree | Operator approves campaign doc + mission list |
| P1 | Ecosystem mapping + repo structure + node vault | Compatibility matrix done; ADRs accepted; `node.aDNA/` bootstrapped |
| P2 | Publish fix + GitHub minimalism + version bump | Pre-push hook working; remote configured; v7.0 tagged |
| P3 | General repo review + simplify + upgrade guide | Audit findings addressed; CHANGELOG + upgrade guide published |
| P4 | Context/token audit + LatticeScope.aDNA planning | Token baselines established; LatticeScope.aDNA campaign doc ready |
| P5 | Final review + next campaign seed | Next campaign planning doc ready |

## Mission tree (seeded by M01; calibrated after planning)

| Mission | Phase | Description | Status |
|---|---|---|---|
| M01: Planning | P0 | Produces this campaign's full mission tree | **planned** — entry point |
| M02: Ecosystem compatibility matrix | P1 | Inventory all vaults; map impact of each change | planned |
| M03: Repo structure simplification | P1 | Flatten `.adna`, update `skill_project_fork`, migration runbook | planned |
| M04: `node.aDNA/` design + bootstrap | P1 | Full vault design; persona (Hestia); workspace CLAUDE.md update | planned |
| M05: `skill_publish_lattice` rewrite | P2 | New skill + `skill_git_remote_setup` + pre-push hook | planned |
| M06: GitHub minimalism + version bump | P2 | Move `deploy_manifest`, assess repo rename, tag aDNA v7.0 | planned |
| M07: General repo review + simplify | P3 | `/simplify` pass; skill freshness audit; 10-dimension compliance | planned |
| M08: Upgrade guide + ecosystem propagation | P3 | CHANGELOG entry; upgrade guide; coordination memos to vault operators | planned |
| M09: Context/token audit | P4 | Token baselines; measurement protocol; optimization opportunities | planned |
| M10: LatticeScope.aDNA planning | P4 | Full campaign doc for `LatticeScope.aDNA/` ready to execute | planned |
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
- `skill_publish_lattice` rewrite → all vaults carrying publish skill need migration
- `node.aDNA/` → new pattern; no existing vault affected; additive
- Version bump → all vaults can adopt at their own pace; template CHANGELOG is the signal

## New projects seeded by this campaign

| Project | Category | Persona | Code Repo | Status |
|---|---|---|---|---|
| `node.aDNA/` | Org-Vault (local node) | Hestia | n/a (local) | Bootstrapped in M04 |
| `LatticeScope.aDNA/` | Platform.aDNA | Prometheus | `latticescope/` | Campaign planned in M10; bootstrapped post-campaign |

## Cross-vault references

- `Spacemacs.aDNA/how/backlog/idea_skill_publish_lattice_git_fix.md` — downstream trigger (M05)
- `Spacemacs.aDNA/how/backlog/idea_agentic_layout_system.md` — peer improvement (separate P4 mission)
- `adna/` repo remote: `github.com/LatticeProtocol/Agentic-DNA.git` (rename decision in M06)
- `aDNA.aDNA/` — Operation Rosetta Phase 7 complete; Phase 8 queued separately; this vault hosts the campaign
- `lattice-labs/STATE.md` — strategic coordination reference
