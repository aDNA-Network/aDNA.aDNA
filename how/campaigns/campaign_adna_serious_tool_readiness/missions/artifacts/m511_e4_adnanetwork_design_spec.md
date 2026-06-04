---
type: artifact
artifact_class: design_spec
created: 2026-06-04
updated: 2026-06-04
mission: mission_adna_str_p5_m511_e4_adnanetwork
campaign: campaign_adna_serious_tool_readiness
phase: 5
decadal: E4
persona: rosetta
status: draft   # Stage-0 gate: operator pre-ratified the 3 top-level choices (scope · local overlay · /network + /vaults/graph) at session open; surface detail refines here
last_edited_by: agent_stanley
grounded_by:
  - what/design/front_page_doctrine.md
  - what/design/narrative_ethos_public_good.md
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m57_eseries_ecosystem_theme_set.md
  - site/src/content/reference/visual-identity-v2.mdx
  - site/src/content/reference/writing-guidelines.mdx
companions:
  - site/src/data/network_edges.yaml   # the curated edge overlay this spec governs
  - scripts/build_vaults_data.mjs   # the generator the overlay merges into (ADR-023)
tags: [design_spec, e4, adnanetwork, federation_topology, node_onboarding, network_legibility, edge_overlay, stages_0_4, max_iii]
---

# E4 aDNANetwork Design Spec — Stages 0–4

> The Stages 0–4 design for the **aDNANetwork** surface (the least-gated E-series build mover). Governs the whole E4 decadal (cycles 150–~159). Built to [[front_page_doctrine]] + [[narrative_ethos_public_good]] + visual-identity-v2 + writing-guidelines, against the **stable seed** `vaults.json` behind the edge-overlay adaptation seam. E4 is **not** an RLP decadal — it is quality-gated (Lighthouse/Playwright) + a **Network-Legibility** self-assessment (Node Operator · Enterprise Architect · IA · Diagram Reviewer lenses).

## Stage 0 — Vision & audiences

**Thesis (Network Legibility):** a visitor should leave understanding three things — *(1)* the aDNA network is a graph of **aDNA computers** (nodes), each a `Home.aDNA`-governed vault-of-vaults; *(2)* those nodes connect through **real, directed relationships** (a forge feeds its consumers; an org-vault umbrellas its children; a successor supersedes its predecessor) — not a vague mesh; *(3)* you can **run a node and join**, and the boundary between *what stays local* and *what you opt to federate* is explicit.

**Audiences / owning lenses** (per [[m57_persona_bench_expansion_v2]]):
- **Node Operator** — "what do I run, what stays on my machine, what gets shared?" (the local-by-default / opt-in-federation boundary — Standing Rule 4).
- **Enterprise Architect** — "is the topology real and governed, or marketing?" (provenance + directionality).
- **Information Architect** — "can I navigate from a vault to its relationships and back?"
- **Diagram Reviewer** — "does the graph read honestly — legible edges, true directions, no decorative ring?" (the direct Gap-#6 owner).

**Anti-goals:** a 40-node hairball; a decorative peer-to-peer ring implying a topology the system doesn't have; "blazingly fast federation" marketing; a join flow that hides the local-vs-shared boundary.

## Stage 1 — Design-DNA

- **Register:** Tokyo-Night dark-first; the topology is the hero of `/vaults/graph` (registry-as-hero doctrine mode — real structure, ~0 marketing words). `/network` opens sparse-manifesto then steps to medium/dense.
- **Edge visual language** (already in the generator; this spec ratifies it): 5 types with distinct affordances —
  | Type | Meaning | Mermaid arrow | Read as |
  |---|---|---|---|
  | umbrella | org-vault → its org-graph/pillar children | `==>` thick | "contains / governs" |
  | federation | consumer wrapper → the forge/framework it consumes | `-->` solid | "depends on / built from" |
  | partner | platform → its default partner | `--o` circle | "ships with" |
  | companion | sibling persona-pair | `-.->` dashed | "twinned with" |
  | supersedes | successor → predecessor (lifecycle) | `-.->|s|` dashed-labeled | "replaced" |
- **Honest-topology DNA:** every edge cites a governance source; directionality is meaningful (consumer→forge, not forge→consumer); superseded nodes render subordinate (greyed `superseded` class `#666`). This is the trust-discipline that scored 4.63/4.93 at E1, applied to the graph.
- **Reference inspection (Stage-1 feed):** ecosystem-topology exemplars — Hugging Face "models/spaces" relational density, Ethereum ecosystem-map role-pathways, npm/dependency-graph directed-edge legibility. Lesson cluster: **direction + a typed legend + subordinated dead nodes** make a 40-node graph legible; an untyped ring does not.

## Stage 2 — IA / surfaces

**Three surfaces, two pages (+ the data layer):**

1. **`/vaults/graph` (UPGRADE — deep topology)** — the full data-driven federation graph. Real edges from the overlay; a **typed legend**; AA-contrast edges in dark; superseded nodes subordinated. The "show the real thing" deep view. *(cycle 150)*
2. **`/network` (NEW — narrative + onboarding)** — internal surface; denser than the homepage 5±1, banded Sparse→Medium→Dense→Sparse:
   - **Sparse hero** — "The network of aDNA computers" (manifesto line; one diagram-as-proof: a small, honest hub-or-cluster, *not* the false ring).
   - **Medium — "What is an aDNA computer?"** — a node = a `Home.aDNA`-governed machine carrying many vaults; the **local-by-default / opt-in-federation** boundary made explicit (Network-Operator pain; ethos: a commons you join, not a silo).
   - **Medium — the topology at a glance** — an inline data-driven mini-graph + "see the full graph" → `/vaults/graph`.
   - **Dense — run a node** — the onboarding steps (bootstrap `Home.aDNA`, what stays local, how to opt into federation) reusing the `get-started` register; the **participation CTA** (RLP Gap #1).
   - **Sparse — govern & trust** — the governance/standard trust-anchor link (RLP Gap #4 partial; full org surface is E3) + the ethos close.
   *(cycles 151+)*
3. **`/vaults/[slug]` relationship blocks (POPULATE)** — `VaultRelationshipBlock.astro` auto-fills once edges exist (IA "navigate vault↔relationships"). *(auto at cycle 150; polish 151+)*

**Nav:** add `/network` to the header nav (placement TBD at build — adjacent to `/vaults`). Registry `/vaults` index unchanged.

**The data layer (adaptation seam):** `site/src/data/network_edges.yaml` (curated here) → merged in `build_vaults_data.mjs` → `vaults.json edges[]` + `vaults_graph.mmd`. Upstreams to `Home.aDNA` later; until then the overlay is the single source for edges.

## Stage 3 — Wireframe (block-out)

```
/vaults/graph (UPGRADE)                 /network (NEW, cycles 151+)
┌────────────────────────────┐          ┌────────────────────────────┐
│ ← The Lattice  breadcrumb  │          │  HERO  "The network of      │ Sparse
│ H1 Relationship graph      │          │  aDNA computers"  + 1 demo  │
│ ┌── typed legend ───────┐  │          ├────────────────────────────┤
│ │ ▆▆▶umbrella ─▶fed …   │  │          │  What is an aDNA computer?  │ Medium
│ └───────────────────────┘  │          │  node = Home.aDNA + vaults  │
│ ┌── data-driven graph ──┐  │          │  local-by-default ┊ opt-in  │
│ │  directed, AA edges,  │  │          ├────────────────────────────┤
│ │  superseded greyed    │  │          │  Topology at a glance  →full│ Medium
│ └───────────────────────┘  │          ├────────────────────────────┤
└────────────────────────────┘          │  Run a node  (steps + CTA)  │ Dense
homepage NetworkDiagram (Gap#6):         ├────────────────────────────┤
 edges 0.32→~0.5 +halo; ring demoted/    │  Govern & trust  (anchor)   │ Sparse
 dropped → honest hub-and-spoke          └────────────────────────────┘
```

## Stage 4 — Hi-fi deltas

- **Edge contrast (dark):** raise `MermaidDiagram` line/`themeVariables.lineColor` and the homepage `.nd-edge` stroke to meet AA against `--color-bg #1a1b26`; halo on the homepage edges. Target the cyan `--brand-link #7dcfff` / purple `--brand-primary #9d7cd8` signal pair — **no new accent colors** (≤2 fighting colors).
- **Legend:** a small typed key on `/vaults/graph` (5 edge types). Static, no motion.
- **Superseded subordination:** `superseded` class greyed; supersedes edges dashed+labeled so dead lineage reads as history, not active structure.
- **Motion:** none added on `/vaults/graph` (Mermaid static). Homepage NetworkDiagram keeps its existing no-JS-safe / reduced-motion compose entrance.

## Edge overlay — the cited derivation (network_edges.yaml)

Authored from the workspace CLAUDE.md router + per-vault STATE/specs. Conservative + cited; ~30–40 edges. Representative set (final list authored in the YAML, each with a source comment):

| Type | Edges (source → target) | Cited from |
|---|---|---|
| **supersedes** | Harness→LatticeAgent · Harness→RareHarnessOld · CanvasForge→ComicForge · aDNALabs→LatticeLabs · LatticeLabs→lattice-labs(n/a if absent) | router supersession banners |
| **umbrella** | WilhelmAI→RareArchive · (aDNALabs HQ → conservative, only cited children) | WilhelmAI AI4U umbrella; org-pattern spec |
| **federation** | Harness→III · MoleculeForge→III · WilhelmAI→III · LatticeLabs→ContextCompass · MoleculeForge→SiteForge · WilhelmAI→SiteForge · ScienceStanley→SpeechForge · {ComfyForge,CanvasForge,VideoForge}→VisualDNA | III "6 consumer wrappers"; ContextCompass "1 wrapper=LatticeLabs"; ISS 3 live wrappers; VisualDNA "6 wrappers"; SpeechForge SS wrapper |
| **partner** | LatticeTerminal→Harness (default harness provider; was LatticeAgent, now superseded) | LatticeTerminal "default harness provider" |
| **companion** | ScienceStanley↔ZenZachary · LatticeTerminal↔RemoteControl · MoleculeForge↔VAASLattice↔TappInterface (thematic family) | router "sibling to"; triad notes; "thematic family" |

> Authoring discipline: if a relationship is asserted in prose but the *target vault is not in `vaults.json`* (e.g. Odyssey Stories, Family Compass), the edge is **omitted** (no dangling targets) and noted for the Home.aDNA upstream. Slug endpoints resolved to each vault's `vault_slug` so graph node-ids and edge-ids match.

## Per-cycle plan — E4 decadal (cycles 150–~159)

| Cycle | E4 # | Theme | Session |
|---|---|---|---|
| 150 | 1 | **Data foundation + topology** — `network_edges.yaml` + generator merge + regen; data-drive `/vaults/graph` (legend, AA, subordination); homepage NetworkDiagram **Gap #6** fix | **this** |
| 151 | 2 | `/network` page scaffold — hero + "what is an aDNA computer" + topology-at-a-glance | later |
| 152 | 3 | **Run-a-node** onboarding + participation CTA (RLP Gap #1); local-vs-shared boundary | later |
| 153 | 4 | Govern & trust anchor (RLP Gap #4 partial) + nav `/network` link | later |
| 154 | 5 | `/vaults/[slug]` relationship-block polish + cross-links | later |
| 155–158 | 6–9 | Measure/iterate — Network-Legibility rubric passes; Diagram-Reviewer + Node-Operator + IA lenses; responsive/mobile; copy tightening | later |
| 159 | 10 | **E4 decadal close** — AAR + Lighthouse + STATE/STR cascade; ADR-033 → phase gate | later |

## Network-Legibility rubric (E4's self-assessment, in lieu of an RLP)

Scored 0–5 each at measure cycles; E4 closes GREEN when no item < 4 and the mean ≥ the E-series decadal baseline:
1. **Node clarity** — "an aDNA computer is a node = Home.aDNA + its vaults" lands in < 60s (Newcomer + Node Operator).
2. **Edge honesty** — every visible edge is real + directed + typed; no decorative ring (Diagram Reviewer).
3. **Local/shared boundary** — what stays local vs federates is explicit (Node Operator; Standing Rule 4).
4. **Navigability** — vault ↔ its relationships ↔ the full graph is reachable both ways (IA).
5. **Join scent** — "how do I run a node / participate" answerable from the surface (Conversion/Community; RLP Gap #1).

## ADR-033 (candidate) — network edge overlay / adaptation seam

The local `network_edges.yaml` overlay merged by the ADR-023 generator is the theme-set's "stable seed behind a thin adaptation layer." Proposed as **ADR-033**, ratified at the **phase-exit gate** (campaign SO #14 — not mid-phase). Records: the overlay is curated in aDNA.aDNA to unblock E4, is authoritative for edges until upstreamed, and **upstreams to `Home.aDNA` inventory + vault cards** (Hestia coord) post-decadal, after which it shrinks to nothing without a rebuild.

## Related

- [[mission_adna_str_p5_m511_e4_adnanetwork|M5.11 / E4 mission]]
- [[m57_eseries_ecosystem_theme_set]] — E-series sequence + Network-Legibility dimension
- [[aar_decadal_e1_brand_positioning]] · [[rlp_e1_30persona_results]] — the RLP priority queue E4 consumes
- [[front_page_doctrine]] · [[narrative_ethos_public_good]] — design references
- `site/src/data/network_edges.yaml` · `scripts/build_vaults_data.mjs` — the data layer this governs
