---
type: mission
mission_id: mission_adna_str_p5_m511_e4_adnanetwork
campaign: campaign_adna_serious_tool_readiness
phase: 5
mission_number: 5.11
decadal: E4
slug: e4_adnanetwork
created: 2026-06-04
updated: 2026-06-04
opens_at: 2026-06-04
opened_session: session_stanley_20260604T192658Z_v8_m511_e4_open
status: active
estimated_sessions: 3-4   # E4 decadal: design (Stages 0-4) + data foundation + build III cycles (150-~159) + AAR
actual_sessions: 0
persona: rosetta
last_edited_by: agent_stanley
spec_completeness: full
mission_class: implementation   # second ecosystem build mission; enters site/ code + the prebuild data layer
verification_surface: build   # Astro build + Lighthouse + Playwright + Network-Legibility self-assessment
token_budget_estimated: "open session (design + data foundation + cycle 150) ~120-180 kT; remaining build cycles ~120-200 kT across 2-3 sessions"
reviewer_lens_pass: false   # E4 is NOT an RLP decadal (RLP cadence = D17·E1·E3·E5·E6); quality-gated + Network-Legibility self-assessment
prerequisite_missions:
  - mission_adna_str_p5_m57_adnalabs_expansion_planning_stub   # ratified re-scope + E-series sequence (E4 = least-gated first mover)
  - mission_adna_str_p5_m510_e1_brand_positioning   # E1 closed; its RLP priority queue feeds E4
prerequisite_artifacts:
  - aDNA.aDNA/what/design/front_page_doctrine.md
  - aDNA.aDNA/what/design/narrative_ethos_public_good.md
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m57_eseries_ecosystem_theme_set.md
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_decadal_e1_brand_positioning.md   # RLP priority queue (gaps #1, #4, #6)
  - aDNA.aDNA/site/src/data/vaults.json   # the stable seed the topology builds against
tags: [mission, m5_11, e4, v8, p5, implementation, adnanetwork, federation_topology, node_onboarding, network_legibility, edge_overlay, ecosystem_site, max_iii]
---

# Mission M5.11 / E4 — aDNANetwork & Node Onboarding

> The **least-gated next ecosystem build mover** after E1 (per the [[m57_eseries_ecosystem_theme_set|M5.7 charter]]): vaults.json + federation_refs are seeded and Operation Homecoming Step 4 is unblocked, so E4 proceeds do-now without waiting on aDLabs marketplace/org data. E4's thesis is the new **Network Legibility** dimension — make "the network of aDNA computers," its federation topology, and how to *join* it understandable, not hand-wavy. Runs [[skill_site_design_pipeline]]: **Stages 0–4 design → operator sign-off → Stage 5 build III cycles (150–~159) → Stage 6 measure → Stage 8 iterate**. E4 is **not** an RLP decadal (the RLP cadence is D17·E1·E3·E5·E6); it is quality-gated (Lighthouse/Playwright) + a Network-Legibility self-assessment, with Node Operator / Enterprise Architect / IA / Diagram Reviewer as the owning lenses.

## The crux (why E4 is a data problem before it is a design problem)

The site already carries the full network-rendering machinery — the `vaults.json` **5-edge taxonomy** (umbrella · companion · federation · partner · supersedes), the Mermaid graph page (`/vaults/graph`), `NetworkDiagram.astro`, and `VaultRelationshipBlock.astro` — but **zero edge data**: only 1 of 40 vaults carries any relationship field, so the "network" renders as 40 disconnected nodes. The relationship data is *knowable* from workspace governance (the router's companion/umbrella/supersession/federation prose) but has never been captured into the data layer. **E4 ships its legibility by first populating the edges**, then data-driving the visualizations and building the join/onboarding surface over them.

## Objectives

1. **O1 — Stages 0–4 design spec** (this session; pre-build): the E4 surface design — the three surfaces (federation topology viz · "aDNA computers" concept · run-a-node onboarding), the IA decision (new `/network` page + upgrade `/vaults/graph`; registry `/vaults` unchanged), the edge-overlay adaptation seam, the Network-Legibility rubric, and the per-cycle plan (150–~159). Deliverable: [[m511_e4_adnanetwork_design_spec]]. **Gate:** operator ratifies the surface/IA plan. *(Operator pre-ratified the three top-level choices at session open — scope, local overlay, new `/network` + `/vaults/graph`.)*
2. **O2 — Data foundation** (this session; cycle 150 pt.1): author `site/src/data/network_edges.yaml` (~30–40 **cited** edges derived from the workspace router + per-vault STATE/specs), merge it in `scripts/build_vaults_data.mjs` (overlay fallback in `projectVault()` + reconcile the edge-target slug to the node-id form), regenerate `vaults.json` + `vaults_graph.mmd`. **Honest-topology constraint:** every edge maps to a governance statement; no decorative/fabricated edges.
3. **O3 — Stage 5 build**: **cycle 150** (this session) — data-drive `/vaults/graph` (real edges + legend + AA-contrast in dark) + fix E1 **Gap #6** on the homepage `NetworkDiagram.astro` (edge opacity 0.32→~0.5 + halo; demote/drop the false peer-to-peer ring). **Cycles 151+** (later sessions) — the new `/network` page ("aDNA computers" concept + what-stays-local-vs-shared), the run-a-node onboarding flow + the **participation CTA** (RLP Gap #1), the **governance trust-anchor** nav link (RLP Gap #4), and `VaultRelationshipBlock` population on `/vaults/[slug]`.
4. **O4 — Stage 6 measure**: Lighthouse (Perf 100 / a11y ≥ 99 / reduced-motion honored) + the FULL Playwright gate suite, both light + dark (E1 lesson). Network-Legibility self-assessment against the rubric (does the topology read as a real, directed, honest network?).
5. **O5 — E4 decadal AAR** + STATE/STR close cascade; candidate **ADR-033** (network edge overlay / adaptation seam) routed to the phase-exit gate per campaign SO #14.

## Hard constraints

- **Honest topology (load-bearing):** every edge in `network_edges.yaml` is traceable to a governance statement (router row, STATE, spec, ADR). No decorative or speculative edges — this is the discipline that earned E1's standout trust score (4.63 adopter / 4.93 reviewer) and the direct remedy for Gap #6's false-peer-to-peer-ring finding.
- **Local overlay = adaptation seam, not a fork:** the overlay is the theme-set's "stable seeds behind a thin adaptation layer." It is curated in aDNA.aDNA to unblock E4 now and **upstreams to `Home.aDNA/what/inventory/inventory_vaults.yaml` + vault cards later** (post-decadal Hestia coord) — when it does, the overlay shrinks to nothing without a rebuild.
- **Build idempotency preserved:** sorted-key output; byte-stable on re-run (ADR-023 contract); overlay loads on both the Home-present and Home-absent (CI/Vercel fallback) paths.
- **Doctrine compliance:** Tokyo-Night dark-first; `/network` is an *internal* surface so may run denser than the homepage 5±1 budget, but still ≤2 fighting colors, motion entrance/scroll-reveal only + `prefers-reduced-motion`, no marketing adjectives (writing-guidelines AVOID).
- **Ethos subtle, front of mind** — the network framed as a commons you join "for the good of humanity," shown not preached (Movement-Skeptic guard); node onboarding makes the *local-by-default / opt-in-federation* boundary explicit (the Network-Operator pain).
- Engine files (`skill_iii_cycle`, `skill_site_design_pipeline`, `skill_decadal_aar`) unedited; archive-never-delete; rename nothing (S8 KEEP).

## E1 RLP priority-queue items E4 consumes

| RLP # | Item | E4 disposition |
|---|---|---|
| 1 | One honest **participation CTA** above the fold | `/network` run-a-node onboarding + CTA (cycles 151+) |
| 4 | **Governance/security/RFC** surface + nav link | governance trust-anchor link (cycles 151+; full org surface is E3) |
| 6 | **NetworkDiagram** contrast + topology honesty | **cycle 150** (this session) |
| — | Network-Operator "what stays local vs shared" | `/network` "aDNA computers" concept (cycles 151+) |

## Lightweight/decadal AAR (filled at decadal close)

- **Worked**: _(tbd)_
- **Didn't**: _(tbd)_
- **Finding**: _(tbd)_
- **Change**: _(tbd)_
- **Follow-up**: _(tbd)_

## See also

- [[m511_e4_adnanetwork_design_spec]] — the Stages 0–4 design spec
- [[m57_eseries_ecosystem_theme_set]] — E-series sequence + Network-Legibility dimension
- [[aar_decadal_e1_brand_positioning]] · [[rlp_e1_30persona_results]] — the RLP priority queue feeding E4
- [[front_page_doctrine]] · [[narrative_ethos_public_good]] — the design references
