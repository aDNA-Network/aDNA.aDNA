---
type: backlog_idea
status: deferred
priority: high   # the load-bearing D10 prerequisite — and the ratified ADR-033 retirement path
finding_id: OBS-UP-6   # Obsidian.aDNA P1 synthesis §5 #6 · drift D10
source_vault: Obsidian.aDNA (Seshat)
source_session: session_stanley_20260610_m06_s1_foundations
routes_to: Home.aDNA vault cards (Hestia executes; schema/process owned upstream) + aDNA.aDNA network_edges.yaml retirement
created: 2026-06-10
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [backlog, idea_upstream, vault_cards, edge_population, d10, adr_004, adr_033, federation_topology, m06]
related_backlog:
  - aDNA.aDNA/how/backlog/idea_upstream_build_vaults_data_obsidian_emit.md   # the consumer that wants durable edges
related_coordination:
  - Home.aDNA/who/coordination/coord_2026_06_10_obsidian_to_hestia_d10_edge_population.md   # the Seshat→Hestia ask (filed same day)
  - aDNA.aDNA/who/coordination/coord_2026_06_10_rosetta_to_hestia_vault_card_public_fields.md  # sibling card-field ask (display/taglines) — same edit surface, batchable
deferred_owner: "Hestia / Home.aDNA + Rosetta"
deferred_trigger: "Hearthstone lane (execute ADR-033 retirement path; overlay renders 18 edges today)"
---

# idea_upstream — populate the vault-card **relationship fields** (D10) and retire the `network_edges.yaml` overlay

**Filed by Obsidian.aDNA** (P1 synthesis §5 #6, drift **D10** — "the load-bearing prerequisite; without it every graph is edge-less"). Routed per ADR-007, operator-gated at M06.

## 2026-06-10 refresh — D10's character has CHANGED (from "no edges" to "edges in an interim seam")

At P1 (2026-05-29) the generator emitted `edges:[]` because **no card declared relationships**. Since then aDNA.aDNA ratified **ADR-033** (2026-06-07): a curated, **cited** edge overlay (`site/src/data/network_edges.yaml`, honesty-disciplined — every edge maps to a governance statement) now feeds the generator → **18 edges across 41 vaults render today**. ADR-033's own decision text names its end-state: the overlay **upstreams to `Home.aDNA` vault cards, then shrinks to nothing**.

**This proposal = execute that retirement path.** It is no longer "create edge data" — it is "move the curated edges to their durable home."

## The ask

1. **Migrate** the `network_edges.yaml` relationship declarations into the **5 relationship fields** on `Home.aDNA/what/vault_cards/the_*.aDNA.md` overlays: `companion_vaults` · `federation_refs` · `default_partners` · `umbrella_pillar` · `supersedes` (taxonomy per p1_05 §1.3 / the generator's T10 5-edge machinery).
2. **Cover the omitted edges** the overlay flags (relationships whose target isn't yet in `vaults.json` — e.g. archived/sub-pillar vaults) at the canonical layer, where they belong.
3. **Shrink the overlay** as cards take over (generator precedence already implements "card data wins; overlay fills empties" — zero code change needed).
4. Keep the **honesty discipline**: every field value cites a governance statement (router row / STATE / spec / supersession banner). No decorative edges.

## Who does what

- **Hestia (Home.aDNA)** owns the card edits (Rule 4 local-by-default) — coordination memo filed 2026-06-10 (see frontmatter).
- **Rosetta (aDNA.aDNA)** owns the generator + overlay retirement + any card-schema documentation.
- **Seshat (Obsidian.aDNA)** is the downstream consumer: ratified **ADR-004** gates its cross-vault-graph Obsidian homepage (M06 exit-gate 2) on durable edge data; will verify the emitted graph against the fleet.

## Trace

- Obsidian.aDNA `what/context/obsidian_graph_aggregation.md` §1.3/§5.3 (p1_05) · `adr_004_cross_vault_graph_architecture.md` (D10 gate) · synthesis §1 D10 + §5 #6
- aDNA.aDNA `adr_033_network_edge_overlay_adaptation_seam.md` · `site/src/data/network_edges.yaml` (header: the upstream plan) · `scripts/build_vaults_data.mjs` (merge precedence)

> **Triage 2026-06-23 (Cornerstone v8.1):** DEFERRED → Hestia/Hearthstone lane. ([[coord_2026_06_22_seshat_to_rosetta_cornerstone_v81_landing]] reconciliation; [[adr_038_combined_v81_release]]).


## Champollion G0 disposition — X (M1.1, 2026-07-02)

**DEFER.** Owner: Hestia / Home.aDNA + Rosetta. Trigger: Hearthstone lane (execute ADR-033 retirement path; overlay renders 18 edges today). Ratified at Champollion G0 (D2).

## Disposition — Refit M5 vNext triage (2026-07-24) · **CONFIRM-DEFERRED**

Reviewed in the light sweep; **stays `deferred`** — **feeds Refit M6 E2** (vault-graph edge enrichment from `federation_ref`); trigger: M6 E2 stretch objective. Owner: Rosetta + Hestia. See [[vnext_roadmap]] §Deferred-with-trigger.

## Refit M6 update — E2 evaluated + routed HERE (2026-07-24)

**Refit M6's E2 stretch objective was "enrich the vault graph from `federation_ref` blocks."** At M6 it was
**evaluated and CUT** (operator ruling, per DP8 "stretch, first cut on overrun"), and routed to **this idea** as
the clean home. Reasoning (audit: `how/campaigns/campaign_refit/artifacts/dev_readiness_audit.md` §E2):

- The M6 candidate mechanism — a **fleet-walk** of `../*/how/federation/**/CLAUDE.md` inside
  `scripts/build_vaults_data.mjs` — would derive **~150+ edges** (federation_ref target frequency: Git.aDNA 47 ·
  III.aDNA 30 · WebForge 23 · Canvas/aDNA.aDNA 13 · Astro 11 · …), a **~10× density jump** from today's 14. That
  produces a mechanical hairball, **bypasses the deliberate honesty-curated `network_edges.yaml` overlay** (every
  edge maps to a governance statement — ADR-033), and **amplifies the existing slug-normalization inconsistency**
  (`Molecules.aDNA` vs `sciencestanley` endpoints already coexist in `vaults.json`). It also **cannot run in
  CI/Vercel** (the sibling vaults + Home are absent there — the build already exits-0-and-reuses-committed).
- **This idea is the correct path**: move the curated relationships into their **durable home** (Home.aDNA
  vault-card relationship fields), let the generator derive edges from real card data (card-wins precedence
  already implemented), and **shrink the overlay to nothing** (ADR-033's stated end-state). Honesty discipline
  preserved; no fleet-walk hack; the federation_ref corpus becomes the *evidence base* Hestia mines when
  populating cards, not a parallel mechanism.

**No status change** — stays `deferred`, owner Hestia/Home + Rosetta, trigger = the Hearthstone lane (execute the
ADR-033 retirement). Refit M6 confirms the routing and records the fleet-walk-vs-curated-cards trade-off so the
denser-graph option is a **documented, deliberate non-choice**, not an oversight.
