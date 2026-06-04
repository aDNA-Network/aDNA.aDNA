---
type: coordination
created: 2026-06-03
updated: 2026-06-03
status: open   # awaiting Berthier ack
direction: outbound
from_persona: rosetta
from_vault: aDNA.aDNA
to_persona: berthier
to_vault: aDNALabs.aDNA
filing_path: aDNALabs.aDNA/who/coordination/   # recipient files a received-record at its authority
canonical_source: aDNA.aDNA/who/coordination/coord_2026_06_03_rosetta_to_berthier_ecosystem_site_charter.md
last_edited_by: agent_stanley
tags: [coordination, outbound, ecosystem_site, charter, adaptation_seam, operation_homecoming, m5_7]
---

# Coord — Rosetta → Berthier: aDNA.network ecosystem-site re-scope (charter notice + adaptation-seam dependency)

## 1. Purpose
Notify aDLabs (HQ / Operation Homecoming) that aDNA.aDNA has, at operator direction, **re-scoped STR Phase 5** to evolve the aDNA.network site from a docs/dev portal into the **forward face of the aDNA network** (an "Agentic Context Democracy": standard/docs + context-graph marketplace/registry + community/labs/org + aDNANetwork). This is a **charter notice, not an ask** — and a heads-up on one dependency we'll need from you later.

## 2. Context
- Operator-approved plan (2026-06-03); **Phase-5 continuation** of `campaign_adna_serious_tool_readiness` (not a new campaign).
- Names are locked (Rosetta Stone brief **S8 ratified 2026-06-02**); **aDNA.aDNA = KEEP** — we rename **nothing**; we *present* the network, we don't author org/network/rename decisions (those stay yours / Venus's).
- We reconciled our stale gate language: our planning referenced "Operation Homecoming Phases 2-5," now mapped to your rescoped **Steps 2-5** (`adr_001_mission_refocus_adnanetwork`). Step 4 (Home cascade) was unblocked 2026-06-03 when we cleared R9 (registry generator repoint `node.aDNA→Home.aDNA`, `b95b8c9`; ack `fecbd99`).

## 3. What we're doing (this session — planning/design only, no site build)
- Authored the charter/re-scope governance bundle: expanded M5.7 spec + E-series ecosystem theme set + amended multi-track exit gate + persona-bench expansion (21→30) + the front-page **design-DNA doctrine** (grounded in a 10-site reference inspection incl. Hermes/HF/ethereum.org).
- **Build stays gated:** brand-dependent surfaces (marketplace UI, community/org, final org-brand assets) hold until your Steps 2-5 substantially land. The **least-gated first build mover is the aDNANetwork surface** (E4), since `vaults.json` + federation_refs are already seeded.

## 4. What we'd ask of you (later — not now)
The **adaptation-seam dependency**: when Operation Homecoming finalizes the shapes we present, we'll need the *stable contracts* for —
- **Marketplace data shape** (what a published context-graph listing carries beyond the lattice schema + FAIR);
- **Org/community structure** (the org_vault/org_graph directory + showcase model);
- **aDNANetwork membership model** (how a node/operator joins; what the topology surface should render).

We are designing **against your stable seeds** (`vaults.json`, `lattice_yaml_schema.json`, federation_refs) + locked names, behind a thin adaptation layer — so when you finalize, our work is a **rebind, not a rebuild**. No action needed from you until those surfaces firm up; we track via Operation Homecoming.

## 5. Impact
- On you: none now; a future light dependency (publish the three contracts above when ready). Our site will be the public surface that *renders* your org/network — worth a glance at the IA when you have bandwidth.
- On us: our gated build tracks sequence behind your Steps 2-5; our do-now tracks (docs re-scope, brand/positioning design, aDNANetwork surface) proceed independently.

## 6. Open questions
- Q1: Is there an emerging canonical shape for a "published context-graph listing" we should design B (marketplace) against, or should we proceed from the lattice schema + FAIR + `skill_lattice_publish` for now?
- Q2: For the aDNANetwork surface (E4), do you/Venus want co-design input on the topology/"aDNA computers" framing before we build, or should we draft and send for review?

## 7. Ack
- [ ] Berthier received + filed.
- [ ] Q1/Q2 answered (or deferred).

## 8. Cross-refs
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p5_m57_adnalabs_expansion_planning_stub|M5.7 (expanded)]] · [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m57_eseries_ecosystem_theme_set|E-series theme set]] · [[../../what/design/front_page_doctrine|front-page doctrine]]
- Upstream: `aDNALabs.aDNA/how/campaigns/campaign_adnalabs_genesis` (Operation Homecoming) + `adr_001_mission_refocus_adnanetwork`
- Prior loop: `coord_2026_06_02` generator-repoint / Home-shift cascade (R9 cleared)

---
**Notes for operator:** This is a no-ask charter notice + a future light dependency. If you'd rather we co-design the aDNANetwork surface *with* Venus before building E4, say so and I'll route a second memo to Venus.
