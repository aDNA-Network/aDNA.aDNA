---
plan_id: mission_seed_cohort_m02
type: plan
title: "Seed the Software-Deployment-Graph Cohort (net-new, proving instances)"
owner: stanley
status: in_progress
campaign_id: campaign_keystone
campaign_phase: 2
campaign_mission_number: 2
mission_class: implementation
token_budget_estimated: 80
token_budget_actual:
created: 2026-06-21
updated: 2026-06-21
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
- **Description**: `Store.aDNA` (persona-pin **Plutus**) — object storage (MinIO/AIStor), Lattice Storage Federation. Ledger §A VERIFIED-ABSENT → SEED; **data-bearing** (ADR-016 §8, Venus placement). Genesis-planning stub, four wrappers, local `git init`, router row staged.
- **Files**: `~/aDNA/Store.aDNA/` (local-only)

### 4. Second wave — Groupware.aDNA (unified messaging)
- **Status**: completed (2026-06-21)
- **Description**: `Groupware.aDNA` (persona-pin **Pheme**) — unified groupware (Stalwart JMAP: mail/calendar/contacts). Ledger §A VERIFIED-ABSENT → SEED; **data-bearing** (ADR-016 §8, Venus placement). Genesis-planning stub, four wrappers, local `git init`, router row staged.
- **Files**: `~/aDNA/Groupware.aDNA/` (local-only)

### 5. Remaining net-new (decision-gated)
- **Status**: pending (later M2 session)
- **Description**: `Container.aDNA` (decision #4: Podman-default vs Docker), `Inference.aDNA` (consolidate llama.cpp+MLX+vLLM+Ollama — recommend one graph), FastAPI (decision #1: rule defer-to-library / future `Python.aDNA` parent vs seed). Each gates on an explicit operator decision before forking.

### 6. Enrich Lab.aDNA as reference implementation
- **Status**: pending (gated)
- **Description**: Retrofit `Lab.aDNA` (Galileo) with `git/` + `feedback/` + `iii/` (it already has Home.aDNA credential routing → ¾ conformant). Sequence **after** Lab's in-flight M-L13.5/13.6 merge.

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

*Fill out when setting `status: completed` (after the remaining waves + Lab enrichment, or when the operator scopes M2 closed).*

## AAR

*Mandatory before `status: completed` (SO#5). Not yet — mission remains `in_progress` (objectives 5–6 pending).*
