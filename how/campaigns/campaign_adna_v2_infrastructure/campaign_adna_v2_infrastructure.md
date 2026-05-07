---
type: campaign
campaign_id: campaign_adna_v2_infrastructure
title: "aDNA v2 Infrastructure — Repo Structure, Node Vault, Publish Fix, Context Engine"
status: planning
phase: 0
created: 2026-05-07
updated: 2026-05-07
last_edited_by: agent_stanley
tags: [campaign, adna, infrastructure, v2, node_vault, publish, context_engine, lattice_scope]
---

# Campaign — aDNA v2 Infrastructure

## Strategic Intent

Operation Rosetta (Phases 0-7) established the documentation site and content layer. This
campaign addresses the infrastructure beneath the standard: the repo structure, local node
governance, publish workflow, and observability tooling. The outputs are improvements to the
`adna` public repo AND the pattern-standard for all lattice operators.

## Scope

| Topic | Trigger |
|---|---|
| Repo structure simplification | `.adna -> adna/.adna` symlink is fragile; template content nested inside the repo |
| `node.aDNA/` local lattice node vault | No home for cross-project global improvement work; no local node state tracking |
| `skill_publish_lattice` git fix | Vault has no git remote; rsync workaround is unmaintainable |
| GitHub repo minimalism | `deploy_manifest.yaml` + `.github/` at repo root clutters the template view |
| General repo review | Audit for clarity, naming consistency, skill freshness, dead links |
| Context/token optimization | No systematic token measurement; convergence model unvalidated empirically |
| LatticeScope open-source engine | No open observability layer for distributed agentic systems |
| Final review + next campaign seed | Close audit loop; plan what comes after |

## Phase structure

| Phase | Focus | Gate |
|---|---|---|
| P0 | Planning (this campaign's mission tree) | Operator approves campaign doc + mission list |
| P1 | Repo structure + node vault | ADRs accepted; `node.aDNA/` bootstrapped |
| P2 | Publish fix + GitHub minimalism | Pre-push hook working; remote configured |
| P3 | General repo review + simplify | All audit findings addressed |
| P4 | Context/token audit + LatticeScope design | Planning mission for LatticeScope produced |
| P5 | Final review + next campaign seed | Next campaign planning doc ready |

## Mission tree (seeded by M01 planning mission)

| Mission | Phase | Status |
|---|---|---|
| M01: Planning | P0 | **planned** (this campaign's entry point) |
| M02: Repo structure simplification | P1 | planned |
| M03: `node.aDNA/` design + bootstrapping | P1 | planned |
| M04: `skill_publish_lattice` rewrite + git remote | P2 | planned |
| M05: GitHub minimalism + deploy_manifest | P2 | planned |
| M06: General repo review + simplify | P3 | planned |
| M07: Context/token audit | P4 | planned |
| M08: LatticeScope campaign planning mission | P4 | planned |
| M09: Final review + next campaign seed | P5 | planned |

## Cross-vault references

- `SpaceLattice.aDNA/how/backlog/idea_skill_publish_lattice_git_fix.md` — downstream trigger
- `SpaceLattice.aDNA/how/backlog/idea_agentic_layout_system.md` — peer improvement (context graph pattern)
- `adna/` repo remote: `github.com/LatticeProtocol/Agentic-DNA.git`
- `aDNA.aDNA/` — Operation Rosetta (Phase 7 complete; Phase 8 queued separately)
