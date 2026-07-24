---
type: backlog_idea
status: deferred
priority: medium-high
finding_id: OBS-UP-5   # Obsidian.aDNA P1 synthesis §5 #5 · ADR-004 Tier-0 build
source_vault: Obsidian.aDNA (Seshat)
source_session: session_stanley_20260610_m06_s1_foundations
routes_to: aDNA.aDNA scripts/build_vaults_data.mjs (ADR-023 generator)
created: 2026-06-10
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [backlog, idea_upstream, obsidian, cross_vault_graph, canvas, mermaid, adr_004, adr_023, adr_033, m06]
related_backlog:
  - aDNA.aDNA/how/backlog/idea_upstream_vault_card_edge_population.md   # the durable edge source (ADR-033 retirement path)
deferred_owner: "Hestia / Home.aDNA"
deferred_trigger: "reconcile against the v8.0 topology-canvas (Hearthstone lane; may be partly superseded)"
---

# idea_upstream — add an **Obsidian-artifact emit** (graph note + `.canvas`) to the ADR-023 generator, opt-in flag

**Filed by Obsidian.aDNA** (P1 synthesis §5 #5; the script-side half of ratified **ADR-004** — cross-vault-graph architecture, Option A: generated artifact now, Tier-1 plugin gated).

## 2026-06-10 refresh — the ask has NARROWED (half already exists)

The P1-era ask was "add Mermaid/Canvas emit behind an opt-in flag." Since then the generator grew the **site-side** emit: `build_vaults_data.mjs` already writes `site/src/data/vaults.json` (**41 vaults, 18 edges** via the ADR-033 overlay) and `site/src/data/vaults_graph.mmd` (Mermaid DSL, typed-edge legend). **What's missing is the Obsidian-native artifact** ADR-004 ratified: a generated **graph note and/or `.canvas`** emitted **into a home vault**, so the fleet topology is a first-class Obsidian landing (not only a website page).

## The proposal

Behind an opt-in flag (e.g. `--emit-obsidian <vault_path>`), have the generator additionally write:

1. a **`.canvas`** of the vault graph (nodes = vaults, colored by the 8-category palette; edges = the 5-edge taxonomy), and/or
2. a **markdown graph note** (Mermaid block + a Dataview-able vault table),

into the target vault (default `Home.aDNA`). Same projection, third renderer. Properties: idempotent · read-only-source · CI-fallback-safe (skip when the flag is absent — zero behavior change for the site build).

## Why the generator (and not a new tool)

ADR-004 Option B (symlinked meta-vault) was **rejected**; Option A reuses the proven ADR-023 projection — single source, no second graph pipeline to drift. Edge data exists **today** (overlay-fed per ADR-033), so this emit is buildable now; it gets *better* automatically as edges migrate to the vault cards.

## Consumer stake

Obsidian.aDNA M06 exit-gate 2 ("cross-vault-graph homepage") consumes this artifact as the fleet-level Obsidian landing. Obsidian.aDNA is glad to co-author (canvas JSON schema + palette + NN/graph-view conventions live there: `what/obsidian/seed/graph-colorgroups.json`, `what/context/obsidian_color_palette.md`).

## Trace

- Obsidian.aDNA `what/decisions/adr_004_cross_vault_graph_architecture.md` (ratified Option A+C) · `what/context/obsidian_graph_aggregation.md` §4.2/§5.2 (p1_05)
- aDNA.aDNA: `adr_023_registry_generator.md` · `adr_033_network_edge_overlay_adaptation_seam.md` · `scripts/build_vaults_data.mjs`

> **Triage 2026-06-23 (Cornerstone v8.1):** DEFERRED → Hestia/Hearthstone lane (v8.0 topology-canvas + ontology likely moved this). ([[coord_2026_06_22_seshat_to_rosetta_cornerstone_v81_landing]] reconciliation; [[adr_038_combined_v81_release]]).


## Champollion G0 disposition — X (M1.1, 2026-07-02)

**DEFER.** Owner: Hestia / Home.aDNA. Trigger: reconcile against the v8.0 topology-canvas (Hearthstone lane; may be partly superseded). Ratified at Champollion G0 (D2).

## Disposition — Refit M5 vNext triage (2026-07-24) · **CONFIRM-DEFERRED**

Reviewed in the light sweep; **stays `deferred`** — opt-in Obsidian-artifact emit on the ADR-023 registry generator; trigger: an Obsidian-integration pass on the generator. Owner: Rosetta + Seshat. See [[vnext_roadmap]] §Deferred-with-trigger.
