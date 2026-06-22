---
plan_id: mission_seed_cohort_m02
type: plan
title: "Seed the Software-Deployment-Graph Cohort (net-new, proving instances)"
owner: stanley
status: completed
campaign_id: campaign_keystone
campaign_phase: 2
campaign_mission_number: 2
mission_class: implementation
token_budget_estimated: 80
token_budget_actual: 38
created: 2026-06-21
updated: 2026-06-22
last_edited_by: agent_stanley
tags: [plan, campaign, keystone, seed, deployment_graph, cohort]
---

# Mission: Seed the Software-Deployment-Graph Cohort

**Campaign**: [[how/campaigns/campaign_keystone/campaign_keystone|campaign_keystone]]
**Phase**: 2 — Seed Net-New + Enrich Existing (proving instances)
**Mission**: 2 of 5

> **Formalized retroactively 2026-06-21.** The first seeding wave (2026-06-20) was executed under the P0+P1 gate authorization before this mission file existed; this file closes that governance gap (SO#5 / SO#11) and tracks the remaining waves.

## Goal

Prove the `template_software_graph_stub` on **clean net-new** members FIRST (no owning-persona overlap), forking each as a genesis-planning stub — four wrappers, deployment-gated standing orders, local `git init` only, router row STAGED `#needs-human`. No install, no deploy, no infra. The overlapping graphs (Forgejo/Nebula) are M3; enrichment of existing vaults trails the clean proofs.

## Exit Gate

Clean net-new stubs prove the template (four wrappers present + federating, never re-authoring; deployment-gated SOs; data-bearing carry ADR-016 §8) before any overlapping graph (M3) and before enriching Store/Groupware peers. Every fork: local `git init`, no remote, router row staged — root `CLAUDE.md` untouched (Production Tidy freeze).

## Objectives

### 1. Commit the P1-close bundle
- **Status**: completed (2026-06-21)
- **Description**: Commit the uncommitted P1 polish — ledger ratification note (`status_note` + "Ratified at the P1 gate 2026-06-20"), `last_edited_by` finalization on the 3 seam memos (Forgejo→Hopper, Nebula→Venus, recipe-quarry→Venus), and the `idea_cross_vault_coord_stewardship` instance-#2 update (Home.aDNA/Venus 10-day ack-debt).
- **Files**: `artifacts/keystone_deconfliction_ledger.md`, `who/coordination/coord_2026_06_20_keystone_*.md` (×3), `how/backlog/idea_cross_vault_coord_stewardship.md`

### 2. First wave — clean net-new (proving instances)
- **Status**: completed (2026-06-20)
- **Description**: Seeded as genesis-planning stubs (local git, no remote): `Nextcloud.aDNA` (Atlas, file-sync/collab, data-bearing) `142c113`; `Caddy.aDNA` (Portunus, default reverse-proxy — settles decision #5 Caddy-fleet-default) `04817c5`; `Bitwarden.aDNA` (Cerberus, secret-ACCESS engine federating Home.aDNA — WS-B/Operation Keyring) `09ca97c`.
- **Files**: `~/aDNA/{Nextcloud,Caddy,Bitwarden}.aDNA/` (local-only)

### 3. Second wave — Store.aDNA (object storage)
- **Status**: completed (2026-06-21)
- **Description**: `Store.aDNA` (persona-pin **Plutus**) — object storage (MinIO/AIStor), Lattice Storage Federation. Ledger §A VERIFIED-ABSENT → SEED; **data-bearing** (ADR-016 §8, Venus placement). Genesis-planning stub, four wrappers, local `git init`, router row staged. 15 files, structure verified vs Nextcloud reference.
- **Files**: `~/aDNA/Store.aDNA/` (local-only, commit `77d2e88`, no remote)

### 4. Second wave — Groupware.aDNA (unified messaging)
- **Status**: completed (2026-06-21)
- **Description**: `Groupware.aDNA` (persona-pin **Pheme**) — unified groupware (Stalwart JMAP: mail/calendar/contacts). Ledger §A VERIFIED-ABSENT → SEED; **data-bearing** (ADR-016 §8, Venus placement; may back blobs against Store.aDNA). Genesis-planning stub, four wrappers, local `git init`, router row staged. 15 files, structure verified vs Nextcloud reference.
- **Files**: `~/aDNA/Groupware.aDNA/` (local-only, commit `85b4531`, no remote)

### 5. Remaining net-new (decision-gated)
- **Status**: completed (2026-06-21, third wave)
- **Description**: Operator resolved all three decision gates (GO) and the graphs were seeded as genesis-planning stubs (local git, no remote, router rows staged `#needs-human`, four wrappers verified, 15 files each, structure verified vs Store/Nextcloud reference): `Container.aDNA` (persona **Pandora**, `5b248db`) — OCI container runtime, control-plane/foundational; **settles decision #4 → rootless Podman fleet-default** (Docker documented-compat; OCI envelope); workload-storage seam → Store.aDNA. `Inference.aDNA` (persona **Pythia**, `fcf747d`) — local LLM inference serving, control-plane/compute; **consolidation ruling → one graph**, backends llama.cpp/MLX/vLLM/Ollama (selectable; `llama.cpp` consumed-not-vendored); model-weight storage flagged → Store.aDNA (P0 seam). `FastAPI.aDNA` (persona **Atalanta**, `79bb176`) — FastAPI Python API-service surface, control-plane; **settles decision #1 → seed FastAPI directly**; framework-vs-platform category provisional (first-class P0 decision); future `Python.aDNA` parent noted-not-seeded. Ledger §A updated (3 rows → ✅ SEEDED; open decisions #1/#2/#4 marked resolved).
- **Files**: `~/aDNA/{Container,Inference,FastAPI}.aDNA/` (local-only, no remote); `artifacts/keystone_deconfliction_ledger.md`

### 6. Enrich Lab.aDNA as reference implementation
- **Status**: deferred — **scoped out of M2** per operator 2026-06-22 (checkpoint decision).
- **Description**: Retrofit `Lab.aDNA` (Galileo) with `git/` + `feedback/` + `iii/` (it already has Home.aDNA credential routing → ¾ conformant). **Status 2026-06-21: M-L13.5 round-3 QA-CLOSED, but M-L13.6 (live merge+deploy) is still operator-gated** — Lab's v1 code is pushed-but-unmerged; the live node still runs `main@e5ca5b5`. This is a retrofit of an existing mature vault (touches the Lab tree), gated indefinitely on a *different* campaign's operator gate — so holding M2 open for it is poor hygiene.
- **Re-homed (SO#6 archive-never-delete — re-homed, not dropped)**: this objective is the toe-in-the-water of the separate four-wrapper **enrichment wave**. It now lives in the §C enrichment roster (ledger) + backlog [[how/backlog/idea_keystone_existing_graph_retrofit|idea_keystone_existing_graph_retrofit]], where **Lab.aDNA is the reference-implementation (first) item**. When Lab **M-L13.6** fires, spin up a dedicated mission for it (do not fold into a seed session).

## Campaign Context

### Previous Mission Outputs
- M0 (`mission_paradigm_authoring_m00`) — the ratified `template_software_graph_stub`, `pattern_software_deployment_graph`, ADR-037, and the de-confliction ledger.
- M1 — the ledger ratified at the P1 gate (Store/Groupware VERIFIED ABSENT → seed).

### Next Mission Inputs
- M3 (overlapping graphs) consumes the proven template + the staged seam memos (Forgejo→Hopper, Nebula→Venus) once the owning personas ratify.
- M4 (cohort manifest + Lighthouse composition wire) consumes the full seeded set.

## Notes

- Persona pins **Plutus** (Store) + **Pheme** (Groupware) are working-pins, ratified at each graph's own P0 against the fleet registry (both checked absent from the current roster).
- The first wave's M00 AAR lesson is applied: `rsync -a --exclude='.git'` from `.adna/`, not `cp -r` (the FUSE mount wedges on the template `.git`).

## Completion Summary

**Closed 2026-06-22 — operator scoped M2 to its net-new-seeding result (Objective 6 deferred → re-homed).** M2 delivered the **§A SEED-net-new cohort: 8 software-deployment-graph stubs**, proving `template_software_graph_stub` end-to-end:

| Graph | Persona | Class | Commit | Decision settled |
|-------|---------|-------|--------|------------------|
| Nextcloud.aDNA | Atlas | data-bearing | `142c113` | — (first proof) |
| Caddy.aDNA | Portunus | data-bearing | `04817c5` | #3 reverse-proxy → Caddy-default |
| Bitwarden.aDNA | Cerberus | secret store | `09ca97c` | — (WS-B/Operation Keyring) |
| Store.aDNA | Plutus | data-bearing | `77d2e88` | — (verified-absent → seed) |
| Groupware.aDNA | Pheme | data-bearing | `85b4531` | — (verified-absent → seed) |
| Container.aDNA | Pandora | control-plane | `5b248db` | #2 runtime → rootless Podman |
| Inference.aDNA | Pythia | control-plane | `fcf747d` | #4 inference → one consolidated graph |
| FastAPI.aDNA | Atalanta | control-plane | `79bb176` | #1 FastAPI → seed directly |

Every graph: genesis-planning stub, four wrappers (`git/`·`feedback/`·`iii/`+credential-routing), deployment-gated SOs, **local `git init` / no remote**, router row STAGED `#needs-human` (PT freeze), `data_bearing` carrying ADR-016 §8 where applicable. Ledger §A all-SEEDED; open decisions #1–#4 resolved (#5 AWSBootstrap open). **Objective 6 (Lab enrichment) deferred** → §C enrichment wave / `idea_keystone_existing_graph_retrofit`, gated on Lab M-L13.6. Net of the deferral, **5/5 net-new-seeding objectives complete**.

**Cohort-conformance note**: 6 of 8 are lean 15-file stubs; **Caddy + Bitwarden were forked via the full `skill_project_fork` scaffold** (Caddy carries a `campaign_adna_workspace_upgrade`; Bitwarden was built out under WS-B), not the lean `template_software_graph_stub`. First flagged at M00 (AAR Technical Debt #2) and now confirmed cohort-wide — **document & reconcile at P4 cohort manifest; not rework** (both are legitimately further along / a different work-stream). Recorded in the ledger §A.

## AAR

- **Worked**: `template_software_graph_stub` proved clean and uniform across 6 lean net-new stubs; the decision-gated trio (Container/Inference/FastAPI) cleared in a single operator GO, keeping the cohort a fleet not a set of bespoke forks.
- **Didn't**: M2's "enrich Lab" leg (Obj 6) was never actionable — gated on a *different* campaign's operator gate (Lab M-L13.6) — and held the mission artificially open; resolved by scoping it out to the enrichment wave.
- **Finding**: cohort fork-method divergence — Caddy (346 files) + Bitwarden (358) were full-`skill_project_fork`ed vs the lean-6's `template_software_graph_stub` (confirms M00 AAR TD#2); benign, reconcile at P4.
- **Change**: scope a cross-campaign-gated objective OUT of a mission rather than holding the mission open; enrichment of existing vaults is its own wave (backlog `idea_keystone_existing_graph_retrofit`), not a tail objective on a seeding mission.
- **Follow-up**: M3 (`mission_overlap_graphs_m03`) authored this session (Forgejo/Nebula, seam-gated); Lab-enrichment → `idea_keystone_existing_graph_retrofit` (gated M-L13.6); P4 cohort manifest reconciles the fork-method divergence. Full artifact: [[how/missions/artifacts/campaign_keystone_m02_aar|campaign_keystone_m02_aar]].
