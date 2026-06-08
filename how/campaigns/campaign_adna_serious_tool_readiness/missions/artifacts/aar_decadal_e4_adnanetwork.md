---
type: artifact
artifact_type: aar
artifact_subtype: decadal_aar
mission_id: mission_adna_str_p5_m511_e4_adnanetwork
campaign_id: campaign_adna_serious_tool_readiness
decadal: E4
decadal_title: "aDNANetwork & Node Onboarding"
phase: 5
created: 2026-06-07
updated: 2026-06-07
last_edited_by: agent_stanley
persona: rosetta
session_count: 10
cycle_count: 10
cycle_range: "150-159"
mission_class: implementation
status: completed
reviewer_lens_pass: false
network_legibility_assessment: true
network_legibility_bench: 4
tags: [aar, decadal_aar, e4, adnanetwork, network_legibility, edge_overlay, adr_033, phase_5, m5_11]
---

# AAR: E4 Decadal — aDNANetwork & Node Onboarding (M5.11 close)

> The E4 decadal close. E4 is **not** an RLP decadal — it closes on the **Network-Legibility** self-assessment (4 owning lenses: Diagram-Reviewer · Node-Operator · Information-Architect · Newcomer), run as independent multi-agent Workflows, plus the quality gates (Lighthouse / Playwright / axe). §11 carries that 4-lens confirmation in place of a 30-persona RLP.

## §1 Mission Identity

- **Mission:** `mission_adna_str_p5_m511_e4_adnanetwork` (Epic E4 of the M5.7 E-series; the least-gated ecosystem build mover, sequenced first after E1).
- **Thesis (Network Legibility):** a visitor leaves understanding (1) the aDNA network is a graph of **aDNA computers** (nodes), each a `Home.aDNA`-governed vault-of-vaults; (2) nodes connect through **real, directed, typed** relationships — not a vague mesh; (3) you can **run a node and join**, with the local-by-default / opt-in-federation boundary explicit.
- **Span:** 10 cycles (150–159), 10 sessions. Commit-only throughout; the whole surface **deployed live at this close**.
- **The crux:** E4 was a **data problem before a design problem** — the site carried the full 5-edge rendering machinery but the canonical `Home.aDNA` source carried ~0 relationship data, so the graph rendered as 40 disconnected nodes. The fix was a cited edge **overlay** (ADR-033), not new design.

## §2 Scorecard

### Cycle-level (10 cycles)

| Cycle | Theme | Headline |
|---|---|---|
| 150 | Data foundation + topology | `network_edges.yaml` overlay (22 cited edges) + ADR-023 generator merge; data-drove `/vaults/graph` (typed legend, AA edges, subordinated superseded); homepage `NetworkDiagram` **E1 Gap #6** fix (false ring → honest hub-and-spoke) |
| 151 | `/network` bands 1–3 | SS-Ghibli image-led hero + "A network of real relationships" (diagram-as-proof) + "What is an aDNA computer?" (local/shared boundary) + topology-at-a-glance; `Network` nav link |
| 152 | Run-a-node band | onboarding steps + participation CTA (**RLP Gap #1**); local-vs-shared made concrete |
| 153 | Govern & trust band | governance trust-anchor + ethos close (**RLP Gap #4** partial); `/network` bands 1–5 COMPLETE |
| 154 | `/vaults/[slug]` + round-trip | relationship blocks + vault↔graph round-trip (**Navigability** addressed) + 3 latent Mermaid-render bugs fixed (the graph had been rendering blank since c150) |
| 155 | Network-Legibility MEASURE+ITERATE | **first 4-lens Workflow** → edge_honesty 3.5 + join_scent 3.0 below floor; both lifted (honest-sparseness note, per-type counts, transmission-unit copy, focus glow); both-modes axe → gate-4 |
| 156 | DATA/generator | orphan-cluster subgraph → **edge_honesty → 5**; `aDNANetwork.aDNA → Network.aDNA` rename at the `Home.aDNA` registry source; distinct supersedes stroke; keyboard node-twin |
| 157 | measure/iterate + hero | responsive/mobile (gate-9 guards graph + vault detail) + copy tightening + orphan-shelf subordination + join-scent lift; **operator-added homepage DNA-helix hero** |
| 158 | CONFIRMING-LENS Workflow | 2nd 4-lens pass broke the self-scores: **navigability 4.75→3.0** + **node_clarity 4.75→3.5**; lifted with "The Lattice" nav entry + ← Network crumbs + data-driven node-color legend + band-1 IO fallback |
| 159 | **DECADAL CLOSE** | re-confirm Workflow (found node_clarity 3.5 still, on the vault-detail surface) → cheap fix (node bridge + gloss + breadcrumb disambiguation) → Newcomer re-check **GREEN** → AAR + **ADR-033 ratified** + **deploy** |

### Quality gates (at close)

| Gate | Result |
|---|---|
| `astro build` | **162 pages, 0 errors** |
| Playwright gates | **83/83** (a11y both-modes 16 · meta 9 · interaction 5 · brand 9 · responsive 35 · perf 5 · hero-banner 4) |
| axe WCAG-AA (both modes) | **0 violations** |
| Lighthouse (desktop) | `/` 100/96/100/100 · `/network` 100 · `/vaults/graph` 100 · vault detail 100 · concept 100 · tutorial 100 (home A11y 96 = pre-existing mobile target-size, not a regression) |
| Data layer | `vaults.json` / `.mmd` byte-identical across all close cycles (generator untouched at the close) |

### Network-Legibility rubric (4-lens, owning-lens authoritative)

| Item (owning lens) | c155 measure | c158 confirm | c159 re-confirm | **c159 final (post-fix)** |
|---|---|---|---|---|
| node_clarity (Newcomer) | 4.0 | **3.5 ▼** | **3.5 ▼** | **4.4** |
| edge_honesty (Diagram-Rev) | 3.5 ▼→4 | 4.5 | 5.0 | **5.0** |
| local_shared (Node-Op) | 4.5→5 | 5.0 | 4.5 | **4.5** |
| navigability (IA) | 4.0→4.5 | **3.0 ▼** | 4.0 | **4.0** |
| join_scent (Node-Op) | 3.0 ▼→4 | 4.0 | 4.0 | **4.0** |
| **mean** | — | — | 4.2 | **4.38 — GREEN (no item < 4)** |

E4 closes **GREEN**: no item below the floor of 4; mean 4.38 ≥ the E-series decadal baseline (E1 full-30 = 4.29).

## §3 Gap Register (carried follow-ups)

| # | Gap | Owning lens | Effort | Disposition |
|---|---|---|---|---|
| 1 | **Mobile `/vaults/graph` illegibility** (40-node LR Mermaid → sub-pixel thumbnail at 375px) | IA / Node-Op / Diagram-Rev (major, all 3) | medium | **Headline post-close fix.** Surface the keyboard node-twin as the visible mobile default, or `flowchart TB` + scroll cue at ≤480px. Backstopped today by the node-twin + index. |
| 2 | `/vaults/graph` desktop layout (connected component crammed right-third; long cross-width edges) | IA / Diagram-Rev | heavy | generator/Mermaid; carried |
| 3 | Orphan-cluster visual hierarchy (the 19-node row paints above + outweighs the 22-edge connected subgraph) | IA | heavy | generator/.mmd emission order; carried |
| 4 | get-started **node-onboarding seam** (`/network` step-1 promises a `Home.aDNA` node interview; `/get-started` covers only project onboarding) | Node-Op (join_scent) | medium | **operator-directed: its own content cycle** |
| 5 | Edge-type gloss on vault-detail is **hover-gated** (`title` tooltips — invisible to touch/keyboard) | Newcomer | cheap-med | accessible gloss (inline or a shared meanings module); `/vaults/graph` legend is the current fallback |
| 6 | Nav-label overlap "Network" vs "The Lattice" | IA | cheap | judgment/brand call (deferred — "The Lattice" matches the index H1; navigability already at floor) |
| 7 | Distinct supersedes stroke vs the dashed companion family | Diagram-Rev | cheap-med | generator/.mmd; carried (legend mitigates with 's' + thicker dash) |
| 8 | Deep-surface boundary/join cues (graph + vault detail carry no local/shared or participate scent) | Node-Op | cheap | carried |

## §4 Technical Debt

- **`network_edges.yaml` is a temporary seam** (ADR-033): edge data canonically belongs in `Home.aDNA`. Drift risk until upstreamed (Hestia coord, post-decadal). Cited source comments keep it auditable.
- **`Home.aDNA` credential/membership sweep** for the `Network.aDNA` rename (c156) remains Rosetta's separate Hestia-coordinated pass (local-by-default, Rule 4).
- The c154 shared-island Mermaid render fix means **12+ previously-blank concept/docs diagrams** now render — verify on the live deploy (this ship is the first time they go live).

## §5 Readiness Assessment

E4 ships a **complete, honest, navigable network surface**: a data-driven 40-node/22-edge cited topology, a 5-band `/network` narrative with a real run-a-node onboarding + participation CTA, vault↔graph round-trips, and a global "The Lattice" nav entry. The rubric is GREEN on independent lenses. The one real weak spot is **mobile-graph legibility** (Gap #1) — a known, backstopped, post-close fix, not a blocker. Ready to close and deploy.

## §6 Recommendation

**Close E4. Deploy. Next mover = the next E-series epic** (per `m57_eseries_ecosystem_theme_set`: E2 Marketplace · E3 Governance/Org · E5 Public-Good · E6 Site+Repo exit) — **operator-directed; do not auto-advance the phase** (Project SO #1 / Campaign SO #19). Feed the next epic the Gap Register above (mobile-graph #1 is the cheapest high-value carry).

## §7 Lessons Learned

1. **Independence beats self-scoring — three times over.** c155, c158, AND c159 each had independent lenses break the self-scores. The c159 re-confirm caught that the c158 self-rescore of node_clarity (4.5) was wrong (real 3.5): the c158 bridge fix landed on `/network` + `/vaults/graph` but **missed the vault-detail surface**. Self-scoring kept over-rating the exact dimension independence kept correcting. The operator's choice to **re-confirm before closing** directly prevented shipping a non-GREEN close.
2. **The recurring failure mode is SEAM defects, not within-surface defects.** Every below-floor find was a *between-surface* gap (no nav entry; one-way cul-de-sacs; the node concept not carried onto deep pages; the marquee diagram stranded by an observer). Self-assessment judges each surface in isolation and is structurally blind to seams; cross-surface lenses (IA, Newcomer) catch them. **Score the seams, not just the surfaces.**
3. **Data before design.** The crux of E4 was that the machinery existed but the data didn't (0 edges). The adaptation-seam overlay (ADR-033) was the unlock — curate the cited data thinly, merge it, retire it upstream later.
4. **Verify dark-first via computed style, not the screenshot.** The c159 re-confirm flagged the vault-detail as "light mode" — a Playwright **fullPage capture artifact** (white backdrop). `getComputedStyle(body)` and a viewport capture both showed `#1a1b26` (dark). A phantom bug avoided by checking ground truth, not the picture.
5. **Gates are the iterate safety net.** gate-9 caught the c158 self-introduced 768px nav overflow (76/83) the moment the 7th nav item was added. Adding a global-nav item is a load-bearing responsive constraint, not just styling.

## §8 Token-budget two-metric (per ADR-016 Clause C)

- **Content-load:** E4 ran 10 cycles across 10 sessions; per-cycle build/iterate sessions ~80–180 kT each (within the implementation-class band). The three lens Workflows were the largest single spends: c155 ~430k, c158 ~501k, c159 re-confirm ~504k subagent tokens (each a parallel 4-agent fan-out, ~2–4 min wall-clock) + a ~112k single-agent re-check at c159.
- **Image-gen:** minimal — the c151 `/network` hero ($0.16) + the c157 homepage helix hero ($0.20). No image-gen at the close.
- No drift > 2× → no retrospective triggered.

## §9 Standing Order discharges

**Project-level (SO 1–10):** phase gate held (no auto-advance, §6); destructive-action confirmations (operator AskUserQuestion gates at c158 + c159); local-context-first; every mission gets an AAR (this); archive-never-delete; **self-reference** (the network surface demonstrates the vault's own federation topology); cross-link discipline (ADR-033 ↔ design spec ↔ this AAR); **upstream spec** untouched.

**Campaign-level (SO 11–19):** per-decadal assessment run (the 4-lens Network-Legibility, §11); per-mission context budget (§8); **ADR ratification** — ADR-033 ratified at the close by **operator override of the SO #14 phase-exit default** (explicitly authorized); dispatch-where-possible (the lens Workflows); **phase-exit gate is a human gate** (E4 is a decadal close *within* Phase 5, not a phase exit — the phase stays open for E2/E3/E5/E6).

## §10 Pattern disposition (final state at E4 close)

### Graduations / reinforcements (this decadal)
- **`confirming-lens-Workflow-before-close`** — the independent multi-agent lens re-score (vs self-assessment) proved load-bearing across c155/c158/c159; 3 canonical instances; the close itself adds the **re-confirm-then-cheap-fix-then-targeted-re-check** sub-shape (the operator-chosen close path).
- **`edge-overlay adaptation seam`** (ADR-033) — the "stable seed behind a thin adaptation layer" realized end-to-end (curate → cited merge → upstream-and-retire plan).
- **`both-modes axe gate`** (promoted c155) reinforced through the close (caught nothing new at c159 — clean).

### New seed candidates
- `score-the-seams-not-the-surfaces` (the §7.2 finding — a review heuristic for multi-surface sets).
- `verify-dark-first-via-computed-style` (the §7.4 screenshot-artifact lesson; pair with the screenshot harness).
- `re-confirm-then-targeted-owning-lens-recheck` (proportionate close-verification: full fan-out to find, single owning-lens agent to confirm the fix).

### Invariant violations
- **None.** Generator/`vaults.json`/`.mmd` byte-identical at the close; engine files untouched; no `Home.aDNA`/cross-vault/`.adna` writes; the `agent_hestia` WIP backlog file left untouched via explicit-path adds.

## §11 Network-Legibility Confirmation (4-lens, in lieu of a 30-persona RLP)

E4's gate is the 4-lens Network-Legibility assessment, run as **independent multi-agent Workflows** (blind: each agent given neutral facts + source paths + screenshots, NOT primed with the self-scores; the owning lens's score is authoritative per item).

### Final lens scorecard (c159 re-confirm + post-fix Newcomer re-check)

| Lens | Owns | node_clarity | edge_honesty | local/shared | navigability | join_scent | Verdict |
|---|---|---|---|---|---|---|---|
| Diagram-Reviewer | edge_honesty | 4.5 | **5.0** | 4.5 | 4.0 | 4.5 | confirm, not block |
| Node-Operator | local/shared + join_scent | 4.5 | 5.0 | **4.5** | 4.0 | **4.0** | confirm; mobile-graph the top must-do |
| Information-Architect | navigability | 5.0 | 5.0 | 5.0 | **4.0** | 5.0 | confirm; nav-label + mobile = lift-to-5 items |
| Newcomer (re-check, post-fix) | node_clarity | **4.4** | 4.8 | 4.7 | 4.5 | 4.5 | "owned failure genuinely fixed, not papered over" |
| **Owning-lens authoritative** | — | **4.4** | **5.0** | **4.5** | **4.0** | **4.0** | **GREEN (mean 4.38)** |

### Cross-cutting themes
- **Edge honesty is the standout** (5.0) — all 4 lenses independently audited 22/22 edges against `vaults.json` + the `.mmd`: every edge real, directed, typed; the supersedes `linkStyle` targets exactly the 3 indices; the 19 unlinked vaults named as honest-sparse; the homepage hub-and-spoke disavows the false ring. This is the trust discipline E1 earned, applied to the graph.
- **The local/shared boundary** (4.5–5.0) is "the clearest articulation on the whole site" (Node-Op): "a curated slice of your `Home.aDNA` registry … never their contents."
- **The one held-at-floor cluster is navigability (4.0)** — the c159 breadcrumb disambiguation closed one of three IA frictions; the **mobile-graph (Gap #1)** and the **nav-label overlap (Gap #6)** remain the lift-to-5 path.

### Priority queue (feeds the next E-series epic)
1. **Mobile `/vaults/graph` legibility** (Gap #1) — cited by 3 lenses; cheapest high-value carry.
2. Accessible edge-type gloss on vault-detail (Gap #5).
3. Deep-surface boundary/join cues (Gap #8).
4. Nav-label disambiguation (Gap #6) + breadcrumb-as-parallel-parents (shipped at c159).
5. `Home.aDNA` upstream of `network_edges.yaml` (ADR-033) — retires the seam.

## §12 Lightweight 5-line AAR

- **Worked:** the operator-chosen **re-confirm-before-close** caught a real below-floor gap (node_clarity 3.5 on the vault-detail surface) that the c158 self-rescore had hidden — independence earned its keep a third time; the cheap bridge+gloss fix + a targeted owning-lens re-check closed it to GREEN.
- **Didn't:** the c158 self-rescore over-rated node_clarity (4.5 vs real 3.5) by fixing the bridge on two surfaces but missing the third — self-scoring is structurally blind to seams.
- **Finding:** E4's whole arc says **score the seams, not the surfaces** — every below-floor find was a between-surface gap, and an independent cross-surface lens is the only reliable detector.
- **Change:** for multi-surface decadals, run the independent lens pass on **all** landing surfaces (including the deep, search-landable ones), and verify dark-first via computed style not the screenshot.
- **Follow-up:** Gap Register §3 (mobile-graph #1 headline) → next E-series epic; ADR-033 upstream → Hestia; get-started node-onboarding → its own content cycle.

## See also

- [[mission_adna_str_p5_m511_e4_adnanetwork]] · [[m511_e4_adnanetwork_design_spec]] · [[adr_033_network_edge_overlay_adaptation_seam]]
- [[aar_decadal_e1_brand_positioning]] — the prior E-series decadal (RLP shape) this adapts from
- `what/measurement/iii_results/2026-06/{cycle_159_E4_decadal_close.json, e4_c159_reconfirm_lens_results.json, e4_c158_lens_results.json}`
- [[m57_eseries_ecosystem_theme_set]] — the E-series sequence + the Network-Legibility dimension
