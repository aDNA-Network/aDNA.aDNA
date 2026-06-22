---
plan_id: mission_overlap_graphs_m03
type: plan
title: "Seed the Overlapping Graphs (seam-gated) — Forgejo + Nebula"
owner: stanley
status: completed
campaign_id: campaign_keystone
campaign_phase: 3
campaign_mission_number: 3
mission_class: implementation
token_budget_estimated: 40
token_budget_actual: 90
created: 2026-06-22
updated: 2026-06-22
last_edited_by: agent_stanley
tags: [plan, campaign, keystone, seed, deployment_graph, overlap, seam_gated]
---

# Mission: Seed the Overlapping Graphs (seam-gated)

**Campaign**: [[how/campaigns/campaign_keystone/campaign_keystone|campaign_keystone]]
**Phase**: 3 — Overlapping Graphs (seam-gated)
**Mission**: 3 of 5

> **Authored 2026-06-22 (turnkey, parked).** M2 proved `template_software_graph_stub` on 8 clean net-new graphs. This mission seeds the two **overlap** members — software already partly owned by another persona — and is **deliberately `blocked`**: no graph is forked until its owning persona ratifies the seam. The objectives are pre-scoped so seeding is mechanical the moment an ack lands.

## Blocked-on (operator-gated)

| Seam memo | To | Status | Unblocks |
|-----------|----|--------|----------|
| [[who/coordination/coord_2026_06_20_keystone_forgejo_to_hopper|forgejo_to_hopper]] | Git.aDNA / Grace Hopper (+ Lighthouse) | ✅ `ratified` 2026-06-22 | Objective 1 |
| [[who/coordination/coord_2026_06_20_keystone_nebula_to_venus|nebula_to_venus]] | Network.aDNA / Venus (+ Home.aDNA / Hestia) | ✅ `ratified` 2026-06-22 | Objective 2 |
| [[who/coordination/coord_2026_06_20_keystone_recipe_quarry_to_venus|recipe_quarry_to_venus]] | Network.aDNA / Venus | ✅ `ratified` 2026-06-22 | Objective 3 |

> **✅ All three seams RATIFIED 2026-06-22** (operator GO, as-asserted; ground-truth re-read before fork). Both overlap stubs seeded — see Objectives + Completion Summary.

**No silent writes.** A lapsed window does not self-authorize; ratification is an operator/owning-persona act (coord memo reply or operator GO). If a memo expires un-acked, re-stage or re-route — do not seed. *(Honored: seeds followed ratification, never preceded it.)*

## Goal

Seed `Forgejo.aDNA` and `Nebula.aDNA` as **scoped** genesis-planning stubs — each owning **only** the software install/config/operate surface — on the same discipline as M2 (lean `template_software_graph_stub`, four wrappers, deployment-gated SOs, local `git init` / no remote, router row STAGED `#needs-human`). The owning persona keeps everything else. Then annotate the adopted Network.aDNA recipes with their canonical graph home (quarry→home, ADR-037).

## Exit Gate

Each stub seeded **only after its seam is ratified** by the owning persona (operator-gated). Scope held to the atomic-software-graph surface (install/config/operate/update/interoperate) — never the owner's contract, topology, substrate, or data-plane placement. Genesis-planning stubs only — no install/deploy/service-start/infra.

## Objectives

### 1. Forgejo.aDNA (scoped — software install/config/operate only)
- **Status**: ✅ completed 2026-06-22 (seam ratified; `Forgejo.aDNA` seeded `c45046f`, persona Ilmarinen working-pin, data-bearing §8)
- **Scope (this graph owns)**: Forgejo software install, version-pin, service config, backup/restore runbooks, upgrade discipline. `git/` wrapper federates Git.aDNA.
- **Owners keep (do NOT author)**: **Git.aDNA / Hopper** = provider contract; **Lighthouse** = deployment topology; **Network.aDNA / Venus** = data-plane placement.
- **Data-bearing → ADR-016 §8**: Forgejo backs a Postgres DB (ledger §D — "planned Forgejo DB backend"; Lighthouse P0 commits Forgejo+Postgres) → data-plane placement co-designed with Venus.
- **Co-sequence**: the natural first instance of the self-hosted-forge north star in Git.aDNA's Operation Free Harbor P7 — co-sequence on ack.
- **Persona**: TBD, working-pin verified free at this graph's own P0.
- **On ack**: fork from `template_software_graph_stub`; ground-truth-before-fork (re-read `Git.aDNA/{CLAUDE,STATE}.md` + `Lighthouse.aDNA/STATE.md`); ledger §B row → ✅ SEEDED.

### 2. Nebula.aDNA (scoped — node-side daemon install/config only)
- **Status**: ✅ completed 2026-06-22 (seam ratified; `Nebula.aDNA` seeded `e457135`, persona Heimdall working-pin, control-plane; Tailscale folds in ADR-015)
- **Scope (this graph owns)**: Nebula daemon install, node-side config, service operation. Tailscale **folds in as a section** (bootstrap substrate nested under Nebula per ADR-015), not a separate graph (per §D + the Venus memo — Venus's call).
- **Owners keep (do NOT author)**: **Network.aDNA / Venus** = substrate, topology, membership, ledger events (`substrate_kind: nebula`; `SUBSTRATE_JOINED/LEFT/CERT_ISSUED/REVOKED`); **Home.aDNA / Hestia** = node-local cert/config.
- **Reconcile**: against the live `_nebula_pilot_10_43` (= `lattice_lab_pi`, 10.43.0.4) — the stub documents-not-disturbs the running pilot.
- **Persona**: TBD, working-pin verified free at this graph's own P0.
- **On ack**: fork from `template_software_graph_stub`; ground-truth-before-fork (re-read `Network.aDNA/STATE.md`); ledger §B row → ✅ SEEDED.

### 3. Recipe-quarry ledger annotation
- **Status**: ✅ completed 2026-06-22 (reframe ratified; annotated in ledger §B.1, our tree only; one-line README banner drafted for Venus to place)
- **Description**: On Venus's ack of the quarry→home reframe (ADR-037), annotate each adopted `Network.aDNA` deployment-recipe with its canonical graph home **in our ledger** (never in her tree): `recipe_*nebula*` → `Nebula.aDNA`; `recipe_l2_podman_*` → `Container.aDNA` + `Lab.aDNA` (Ray/Jupyter); `recipe_edge_wireguard_pi` → folds under the mesh (Nebula) graph. Add the quarry→home banner the memo proposes for `deployment_recipes/README.md` only if Venus invites the edit.

## Campaign Context

### Previous Mission Outputs
- M2 (`mission_seed_cohort_m02`) — the proven `template_software_graph_stub` + 8 seeded net-new stubs; ledger §A all-SEEDED.

### Next Mission Inputs
- M4 (`mission_*_m04`, cohort manifest + Lighthouse composition wire) consumes the full seeded set including these two overlap graphs once ratified.

## Notes

- **Ground truth before fork (P1 doctrine)**: re-read the owning vault's STATE/CLAUDE immediately before any fork — never rule from memory. The seam these graphs assert may have moved between staging (2026-06-20) and ack.
- **Federate, never duplicate**: each overlap graph federates the four wrappers; it re-authors nothing the owning persona governs. The seam memo *is* the conformance contract for the overlap.
- If both Forgejo and Nebula remain un-acked near the 2026-09-20 expiry, surface a re-stage/re-route decision to the operator rather than letting the memos lapse silently.

## Completion Summary

**Completed 2026-06-22.** Both §B overlap graphs were seeded **after** their seams were ratified (operator GO, as-asserted; ground-truth re-read of `Git.aDNA` / `Lighthouse.aDNA` / `Network.aDNA` substrate + `Home.aDNA/what/inventory/inventory_connectivity.md` confirmed each seam unchanged since staging):

- **Forgejo.aDNA** (`c45046f`) — persona Ilmarinen (working-pin); data-bearing (ADR-016 §8); lean 15-file `template_software_graph_stub` modeled on `Nextcloud.aDNA`. Seam: Git.aDNA=provider contract · Lighthouse=topology · Venus=data-plane placement · this graph=software brick. Co-sequences Git.aDNA Free Harbor P7b.
- **Nebula.aDNA** (`e457135`) — persona Heimdall (working-pin); control-plane (not data-bearing); lean 15-file stub modeled on `Container.aDNA`. Seam: Venus=substrate/CA/topology/membership/ledger · Hestia=node-local config (§9) · this graph=node-side daemon brick. Tailscale folds in as a section (ADR-015); documents-not-disturbs the live `_nebula_pilot_10_43`.
- **Obj 3 (recipe-quarry annotation)** — adopted recipes annotated quarry→home in the de-confliction ledger **§B.1** (our tree only); a one-line README banner is drafted for Venus to place at her discretion.

All three seam memos flipped `staged_ack_pending → ratified`. Ledger §B → ✅ SEEDED. **Cohort 8→10.** Both graphs: local `git init` / no remote; router rows STAGED `#needs-human` (PT freeze honored — root `~/aDNA/CLAUDE.md` untouched). Next: **P4 (M4)** cohort manifest + Lighthouse composition interlock.

## AAR

5-line AAR (SO#5); full scorecard → [[how/missions/artifacts/campaign_keystone_m03_aar|campaign_keystone_m03_aar]].

- **Worked**: turnkey authoring paid off — with seams pre-scoped, seeding was mechanical the moment the operator GO'd; the ground-truth re-read confirmed zero seam drift; both stubs hit 15-file lean parity first try.
- **Didn't**: nothing blocking. Minor: the campaign's content dates run a day ahead of the local clock (UTC convention); resolved by stamping **2026-06-22** (git-HEAD truth) for ordering consistency.
- **Finding**: the §B seam memo genuinely IS the conformance contract — encoding "what this graph does NOT author" as a first-class CLAUDE.md section makes an overlap stub as clean as a §A clean-net-new one.
- **Change**: model data-bearing overlaps on `Nextcloud.aDNA` and control-plane overlaps on `Container.aDNA` — the §8-vs-control-plane split maps cleanly onto the two lean exemplars.
- **Follow-up**: P4 (M4) reconciles the Caddy/Bitwarden fork-method divergence + registers all 10; open decision #5 (AWSBootstrap↔Lighthouse↔cohort ADR) still pending; §C enrichment wave gated on Lab M-L13.6.
