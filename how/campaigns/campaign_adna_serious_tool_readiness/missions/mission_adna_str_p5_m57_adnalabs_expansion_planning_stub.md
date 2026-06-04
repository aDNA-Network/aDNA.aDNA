---
type: mission
mission_id: mission_adna_str_p5_m57_adnalabs_expansion_planning_stub
campaign: campaign_adna_serious_tool_readiness
phase: 5
mission_number: 5.7
slug: adnalabs_expansion_planning_stub
created: 2026-05-30
updated: 2026-06-03   # SELF-EXPANDED (O1) from stub → full planning spec; foundation session
status: in_progress   # planning objectives O1-O8 authored; CLOSES at the operator ratification gate; BUILD execution is downstream (gated)
opens_at: 2026-06-03
opened_session: session_stanley_20260604T002544Z_v8_m57_m58_foundation
closed_at:
closed_session:
estimated_sessions: 2   # SET BY O1: foundation (this session) + ratification-gate close (next)
actual_sessions: 1   # so far
persona: rosetta
last_edited_by: agent_stanley
spec_completeness: full   # was: stub — expanded by O1 this session
mission_class: planning   # governance + design artifacts only; no executable site code
verification_surface: agent
is_stub: false   # was: true — self-expansion complete
self_expanding: true   # O1 expanded this in place (original stub preserved in git history)
structure_decision: phase_5_continuation_of_STR   # operator 2026-06-03 (NOT a new successor campaign)
immediate_scope: charter_plus_design_foundation   # operator 2026-06-03 — charter + reference/doctrine; stop at ratification gate; no site build
resume_gate: "BUILD execution (downstream E-decadal missions, esp. gated tracks B/C/E) HOLDS until Operation Homecoming Steps 2-5 substantially land (NOT Venus P6). PLANNING (O1-O8, this mission) + DESIGN/RESEARCH (M5.8) + the operator ratification gate proceed now. Track D (E4 aDNANetwork) is the least-gated first build mover (R9 cleared / Step 4 unblocked 2026-06-03)."
resume_gate_ref: aDNA.aDNA/who/coordination/coord_2026_06_03_rosetta_to_berthier_ecosystem_site_charter.md   # outbound charter-notice + adaptation-seam dependency to aDLabs
sibling_mission: mission_adna_str_p5_m58_reference_design_dna   # research foundation that feeds O3 (IA) + O4 (exit gate)
token_budget_estimated: "100-150 kT (research-reading + IA design + re-scope + roadmap)"
token_budget_actual: "~130-170 kT across the foundation session (M5.7 + M5.8 combined; upper-band, near estimate)"
prerequisite_artifacts:
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m57_adnalabs_expansion_seed_brief.md
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_decadal_theme_set.md
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion.md
produced_artifacts:
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m57_eseries_ecosystem_theme_set.md   # O4
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m57_persona_bench_expansion_v2.md   # O5
  - aDNA.aDNA/what/design/front_page_doctrine.md   # via M5.8; consumed by O3
  - aDNA.aDNA/what/exemplars/sites/   # via M5.8
tags: [mission, m5_7, v8, p5, planning, brand_pivot, adnalabs, adna_network, agentic_context_democracy, marketplace, registry, community, network, rescope, phase5_continuation, charter, expanded]
---

# Mission M5.7 — Phase-5 Ecosystem Re-Scope & Charter

> **Self-expanded from the original stub (O1) in the foundation session** (operator-approved plan `please-read-the-claude-md-iterative-pebble.md`). The original 98-line stub is preserved in git history; this is the full planning spec. **Structure decision (operator 2026-06-03): Phase-5 *continuation* of STR** — D16–D20 re-sequenced in place, the amended exit gate now gates STR's v8.0/Phase-6 (NOT a successor campaign). **Scope (operator 2026-06-03): "charter + design foundation"** — author the charter/re-scope governance bundle (this mission) + the reference-inspection/doctrine ([[mission_adna_str_p5_m58_reference_design_dna|M5.8]]), then **stop at an operator ratification gate**. No `site/` edits this push.

## Strategic context

aDNA becomes the forward-facing network/community/lab brand; the **Lattice Protocol** remains the underlying protocol/standard — doctrine *"the aDNA network runs on the Lattice Protocol."* This vault's website expands from "the aDNA docs site" into **the forward face of the aDNA network** — an **Agentic Context Democracy**: a self-governed network of partners building/sharing context-graph-driven agentic systems *for the good of humanity and the creation of abundance* — spanning standard/docs + a context-graph **marketplace/registry** + **community/labs/org** + the **aDNANetwork** of "aDNA computers", at **aDNA.network** (already LIVE). Grounding: [[m57_adnalabs_expansion_seed_brief]].

## Gate (current reality, reconciled)

- **Names locked:** Rosetta Stone rebrand brief **S8 ratified 2026-06-02**; **`aDNA.aDNA` = KEEP** (OQ-6, renames nothing). The names-lock checkpoint has **passed** → planning firms up.
- **Currency reconciliation (this mission):** the seed brief framed the build gate as "Operation Homecoming **Phases 2-5**." aDLabs **rescoped that campaign 2026-06-01** (`adr_001_mission_refocus_adnanetwork`) into a P0/P1 context-fragment structure executed as **Steps 2-7** in a migration sequence. The build gate maps to **Steps 2-5 substantially landing** (brief landing · code-quality · Lab tier · Home cascade [Step 4 unblocked 2026-06-03] · Terminal consolidation) — **NOT** the far-off Venus P6 (~Q3 2026).
- **Do-now:** all of O1–O8 (planning/design/governance) + M5.8 (research/doctrine) + the brand-independent + Track-D (E4) build design. **Gated:** build of brand-dependent surfaces (E2 marketplace, E3 community/org, E1 final brand assets).
- **Honor:** rename nothing in aDNA.aDNA (S8 locked KEEP); design gated surfaces against stable seeds + a thin adaptation seam, don't invent upstream decisions.

## Objectives (expanded with AC)

### O1 — Self-expand ✅
Expanded this stub into the full planning spec (this file); confirmed Phase-5-continuation structure; reconciled the stale "Phases 2-5" gate language (above). **AC:** spec_completeness=full; structure + scope decisions recorded in frontmatter. ✅

### O2 — Brand-pivot application audit ✅ (deliverable inline below)
**Brand-application map** — where aDNA-forward vs Lattice-as-protocol applies, and what aDNA.aDNA owns vs what's owned upstream:

| Surface | aDNA-forward (brand/network/community/lab) | Lattice Protocol (named substrate) | Owner |
|---|---|---|---|
| Homepage hero / positioning | "Agentic Context Democracy"; aDNA network; the people's frontier lab | "runs on the Lattice Protocol" (credibility anchor, §4 of homepage) | aDNA.aDNA (this vault) |
| Docs / Standard | aDNA standard, entity types, triad | Lattice composition, federation, DLT orchestration = *protocol* concepts | aDNA.aDNA |
| Marketplace / registry | aDNA context-graph marketplace | lattices published *over the Lattice Protocol* | aDNA.aDNA (UI) + schema |
| Community / labs / org | aDNALabs; the network of partners | — | **aDLabs.aDNA** (org identity) — we *present*, they *own* |
| aDNANetwork | "aDNA computers"; the Alpha Lattice network | federation/sync = protocol layer | **aDNANetwork.aDNA (Venus)** — we present, they own |
| Org renames (LatticeLabs→aDNALabs, LatticeNetwork→aDNANetwork, future Lab/LatticeProtocol forks) | — | — | **aDLabs.aDNA** (rename authority) — aDNA.aDNA renames NOTHING |

**Rule:** aDNA.aDNA owns the *standard + the site's presentation of all surfaces*; it does **not** own org/network/rename decisions (aDLabs/Venus). The site **reflects** the locked doctrine; it does not author brand decisions. **AC:** every surface mapped to forward-vs-substrate + owner; zero renames proposed in aDNA.aDNA. ✅

### O3 — Expanded-site IA & scope design ✅ (deliverable inline below)
Consumes [[front_page_doctrine]] (M5.8). The 6 surfaces (A docs · B marketplace · C community/labs/org · D aDNANetwork · E positioning · F domain=done).

- **Nav model:** shift from docs-sidebar-primary to **breadth-first top nav** (Hugging Face / ethereum.org pattern) surfacing the 6 tracks: `Standard · Marketplace · Network · Community · Labs · Docs`, with role-based "get started" pathways (build a vault / publish a graph / run a node / join). Docs retains its sidebar *within* the Standard/Docs section.
- **Homepage section sequence:** the [[front_page_doctrine]] §8 worked example (manifesto hero + 5 sections: democracy+diagram / living registry / how partners build & share / the standard underneath / join the network) at the ~55/45 dial.
- **Per-surface architecture:** A extends D16/D17/D19; B = browse/detail/publish over `lattice_yaml_schema.json` + FAIR + `skill_lattice_publish`; C = org directory (org_vault/org_graph classes) + showcase + contribution funnel; D = federation/topology + "aDNA computers" + node onboarding over `vaults.json`; E = homepage re-frame + about/vision/blog.
- **Data-contract specs (gated):** marketplace listing shape, org structure, membership model are designed against the **stable seeds** (`vaults.json`, lattice schema, federation_refs) + locked names, behind a thin **adaptation seam** so aDLabs finalization = rebind not rebuild. **AC:** all 6 surfaces have an IA + nav placement; gated data-shapes flagged with the adaptation-seam note. ✅

### O4 — Phase-5 re-scope + amended exit gate ✅
→ [[m57_eseries_ecosystem_theme_set]] (D16–D20 re-sequenced + E1–E5 ecosystem decadals; do-now/gated sequencing; amended multi-track ≥4.95 exit gate + 3 new dimensions). **AC:** D11–D20 preserved; new decadals defined; amended gate proposed for ratification. ✅

### O5 — Persona-bench expansion design ✅
→ [[m57_persona_bench_expansion_v2]] (21→30: +5 adopters, +4 reviewers; track routing; disagreement ladder; authoring deferred to a post-ratification mission). **AC:** gap analysis + new personas + lenses + slotting. ✅

### O6 — Domain ✅ (DONE — reclassified)
The seed brief's "domain cutover sub-plan" is **moot**: **aDNA.network is LIVE** (Cloudflare DNS → Vercel, ADR-031, since 2026-05-31; `adna.dev` abandoned). O6 collapses from a cutover plan to a **launch-verify step in E5** (confirm canonical/redirects, `astro.config` SITE_URL, sitemap, JSON-LD). **AC:** domain status confirmed live; cutover obligation discharged. ✅

### O7 — Execution roadmap ✅ (do-now vs gated)
The do-now / gated-build sequencing + reconciliation seam is specified in [[m57_eseries_ecosystem_theme_set]] §"Do-now vs gated-build." First build mover after ratification: **E4 aDNANetwork** (least-gated) + brand-independent shell + D16/E1 design. Cross-vault co-execution: aDLabs (HQ; gate tracker), aDNANetwork (Venus; network surface co-design), future Lab/LatticeProtocol forks; forge seams (SiteForge/VisualDNA/CanvasForge/ComfyForge). **AC:** roadmap sequences build missions with explicit gates. ✅

### O8 — Governance bundle (in progress this session)
- STR campaign master amendments (M5.8 row; D16–D20 re-scope note; amended exit gate pointer; M5.7 status). 
- Coord memo to aDLabs/Berthier (charter notice + adaptation-seam dependency). [+ Venus/forge-seam notes as follow-ups]
- STATE.md refresh.
- **Ratification gate** presented to operator. **AC:** master + STATE updated; ≥1 coord memo filed; gate presented; nothing auto-adopted. *(closes at gate)*

## Hard constraints (honored this session)

1. Planning/governance + design/research only — **no `site/` code**, no image-gen.
2. No cross-vault substantive writes — coord memos only (SO #13).
3. No ADR authoring mid-phase (SO #14) — ADR candidates surfaced (e.g., "ecosystem-site IA standard," "design-DNA doctrine as a standard primitive") ratify at the gate/phase exit.
4. Phase gates = human gates (SO #19 / Project SO #1) — re-scope + amended exit gate + dial value are operator-ratified.
5. Archive-never-delete — D11–D20 + m50 theme set preserved; re-scope annotates.
6. Respect the broadcast — rename nothing (S8 locked KEEP); gated surfaces designed against seeds, not invented upstream decisions.

## Lightweight AAR (per Project SO #5; non-RLP planning; filled at the ratification-gate close)

- **Worked**: the existing quality machine (III cycle + decadal AAR + 21-persona bench + locked visual identity + forge seams) re-points cleanly — the re-scope is amplification, not rebuild; M5.8 reference-grounding made the IA/dial decisions evidence-based rather than asserted.
- **Didn't**: *(at close)*
- **Finding**: the operator's "Hermes" instinct + the HF/Val Town analogs converged on a clear synthesis (manifesto hero + curated living registry, ~55/45) — and the young-network scale finding (Val Town who-not-how-many) is the load-bearing constraint.
- **Change**: *(at close)*
- **Follow-up**: post-ratification — persona-file authoring mission (M5.2-style); then E4 (aDNANetwork) as first build mover; port doctrine into `site/src/content/reference/`.
