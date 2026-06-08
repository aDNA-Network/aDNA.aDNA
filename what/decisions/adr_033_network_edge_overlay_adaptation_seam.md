---
type: decision
adr_id: adr_033
adr_number: 033
title: "Network edge overlay / adaptation seam — network_edges.yaml as a curated, cited edge layer merged by the ADR-023 generator until it upstreams to Home.aDNA"
status: accepted
created: 2026-06-07
updated: 2026-06-07
ratified: 2026-06-07
last_edited_by: agent_rosetta
supersedes: none
superseded_by: none
revises: none
related:
  - what/decisions/adr_023_registry_generator.md
  - site/src/data/network_edges.yaml
  - scripts/build_vaults_data.mjs
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m511_e4_adnanetwork_design_spec.md
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m57_eseries_ecosystem_theme_set.md
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p5_m511_e4_adnanetwork.md
tags: [adr, decision, network, edge_overlay, adaptation_seam, federation_topology, home_adna, generator, e4, m5_11]
---

# ADR-033: Network edge overlay / adaptation seam (`network_edges.yaml`)

## Status

**accepted** — **ratified 2026-06-07** by operator authorization at the E4 cycle-159 decadal-close gate. This is a **mid-phase ratification by operator override** of Campaign SO #14 (new ADRs ratify at the *phase-exit* gate): the operator explicitly authorized ratifying ADR-033 at the E4 close (AskUserQuestion, 2026-06-07) rather than waiting for the Phase-5 exit, because the overlay is load-bearing for the now-deployed E4 surface and the decision is stable. Per Project SO #1 + Campaign SO #19, a ratification gate is a human gate — satisfied here by the operator override.

## Context

aDNA.network ships a **federation-topology graph** (`/vaults/graph`) and homepage/`/network` relationship diagrams. The site already carried the full **5-edge rendering machinery** (the typed taxonomy: umbrella / federation / partner / companion / supersedes; the Mermaid line-style legend; the directed-edge generator path). But at E4 open (cycle 150) the **canonical source carried almost no relationship data**: the ADR-023 registry generator (`scripts/build_vaults_data.mjs`) projects vault cards from `Home.aDNA` inventory, and those cards did not yet carry cross-vault relationship fields (only 1 of 40 vaults had any). The graph therefore rendered as **40 disconnected nodes** — machinery with no data.

The relationships *are* knowable today — they are asserted across the workspace `CLAUDE.md` router rows, per-vault `STATE.md` files, specs, and supersession banners. The blocker was purely that this knowledge had not been entered into the canonical `Home.aDNA` source. Waiting for the full `Home.aDNA` data-entry (Hestia's domain; cross-vault; local-by-default per Standing Rule 4) would have blocked the entire E4 build.

The M5.7 ecosystem theme-set (`m57_eseries_ecosystem_theme_set`) frames exactly this situation as a **"stable seed behind a thin adaptation layer"**: when the canonical source lags the surface need, curate a thin, cited overlay that the generator merges, and retire it once the canonical source catches up.

## Decision

Adopt **`site/src/data/network_edges.yaml`** as a **curated, cited edge overlay** — the adaptation seam between the site's edge machinery and the (lagging) `Home.aDNA` canonical source:

1. **Curated in `aDNA.aDNA`** (this vault) to unblock E4 now. ~22 edges (federation 10 / companion 7 / supersedes 3 / umbrella 1 / partner 1), keyed by canonical vault name, mirroring the vault-card fields the generator already consumes (`supersedes` / `superseded_by` / `umbrella_pillar` / `federation_refs` / `default_partners` / `companion_vaults`).
2. **Merged by the ADR-023 generator** (`build_vaults_data.mjs`): the overlay **fills empties** — card data wins; the overlay only supplies fields the card lacks. The merge resolves edge endpoints to each vault's real `vault_slug` (no dangling endpoints), de-dups mirrored edges, and emits Mermaid-safe (dot-free) node ids. Output stays **byte-idempotent** (ADR-023 contract) and loads on both the `Home`-present and `Home`-absent (CI/Vercel) paths.
3. **Authoritative for edges until upstreamed.** Until the relationships are entered into `Home.aDNA`, this overlay is the single source for the graph's edges.
4. **Honesty discipline (load-bearing).** Every edge maps to a governance statement (a router row, a vault `STATE`, a spec, a supersession banner), recorded as a source comment in the YAML. **No decorative or speculative edges.** Relationships whose *target vault is not in `vaults.json`* (e.g. ComicForge under `Archive.aDNA`; Odyssey Stories / Family Compass / Hackathon Forge under WilhelmAI) are **omitted** to avoid dangling edges and flagged for the `Home.aDNA` upstream. This is the same trust discipline that earned E1's standout reviewer trust score and is the direct remedy for E1 Gap #6 (the false peer-to-peer ring).

## Consequences

**Positive**
- Unblocks the entire E4 aDNANetwork build (the graph, `/network`, the vault-detail relationship blocks) without waiting on cross-vault `Home.aDNA` data-entry.
- The graph renders **real, directed, cited topology** — the honesty discipline is enforced at the data layer, not just asserted in copy.
- Byte-idempotent generation preserved; no new runtime; the overlay is plain data the existing generator consumes.

**Negative / risk**
- The overlay **duplicates data that canonically belongs in `Home.aDNA`** — a drift risk: if a vault's relationships change in `Home.aDNA` (or the router) before the overlay is updated, the graph can lag. Mitigation: the cited source comments make every edge auditable, and the overlay is small (~22 edges).
- `aDNA.aDNA` temporarily **owns edge data it does not govern** (the network's relationships are a `Home.aDNA` / Hestia concern). This is explicitly a *temporary* seam, not a permanent home.

**Neutral**
- The overlay is a single small YAML; removing it is a no-op once `Home.aDNA` carries the data (the generator simply finds nothing to fill).

## Upstream plan (the seam's retirement)

The overlay **upstreams to `Home.aDNA/what/inventory/inventory_vaults.yaml` + the per-vault cards** (Hestia coordination), **post-decadal**. The sequence:
1. Rosetta hands the cited edge set to Hestia (a separate coordinated pass; `Home.aDNA` is local-by-default per Standing Rule 4).
2. Hestia enters the relationships into the canonical `Home.aDNA` inventory / vault cards.
3. On the next generator run, the cards carry the relationships → the overlay's `fill-empties` merge finds nothing to add → **the overlay shrinks to nothing without a rebuild change** (byte-identical output from the now-canonical source).
4. `network_edges.yaml` is then emptied/removed; this ADR moves to a "seam retired" note.

Until step 4, ADR-033 governs: the overlay is authoritative for edges, curated here, cited, honest.

## Related

- [[adr_023_registry_generator]] — the generator this overlay merges into (the `Home.aDNA` → `vaults.json` projection).
- `site/src/data/network_edges.yaml` — the overlay this ADR governs (the file header restates this rationale).
- [[m511_e4_adnanetwork_design_spec]] §"ADR-033 (candidate)" — where the seam was proposed.
- [[m57_eseries_ecosystem_theme_set]] — the "stable seed behind a thin adaptation layer" framing.
- [[aar_decadal_e4_adnanetwork]] — the E4 close that ratified this.
