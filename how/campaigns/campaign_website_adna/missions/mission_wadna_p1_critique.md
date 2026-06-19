---
mission_id: mission_wadna_p1_critique
type: mission
title: "P1 — Research-Grounded Critique: Rubric Dossiers + Persona Sweep + FINDINGS"
campaign_id: campaign_website_adna
phase: 1
mission_number: 1
slug: critique
status: in_progress
opened_session: session_stanley_20260619T004400Z_wadna_p0close_p1
created: 2026-06-17
updated: 2026-06-18
last_edited_by: agent_stanley
owner: stanley
persona: rosetta             # resident executor; campaign planned by Berthier
mission_class: planning      # read-only; ZERO site changes
spec_completeness: full      # finalized at P0 close 2026-06-18
estimated_sessions: "1-2"
token_budget_estimated: "~180-300 kT — A–K dossiers + 2 new persona files (authored) + baseline persona sweep via parallel Agent dispatch over the SITEMAP unit set (flagships deep, groups sampled) + FINDINGS synthesis"
hard_dependency_satisfied: "yes — P0 closed 2026-06-18 (SITEMAP + RECONCILIATION + frozen baseline local+live + benchmark set all filed)"
unblocks_missions: [mission_wadna_p2_design]
deliverables_count: 4
tags: [mission, campaign_website_adna, phase1, planning, critique]
---

# P1 — Research-Grounded Critique

> **Stub spec.** Finalized at the P0 → P1 gate once `SITEMAP.aDNA.md` fixes the unit set. Still no changes — this phase generates the context that informs every later decision.

## Finalization (P0 close, 2026-06-18)

**Unit set (from `SITEMAP.aDNA.md`):** **7 flagships scored deep** (`/`, `/network`, `/learn/what-is-adna`, `/get-started`, `/vaults`, `/vaults/graph`, `/community`) + **17 group-representatives sampled** (one per route-group) + the flagship-critical components (HomeHero, NetworkDiagram, MermaidDiagram, SidebarNav, Header/Footer, VaultCard/RegistryCard/SubnetworkCard, CodeBlock).

**Axis-J and axis-F are pre-supplied** — J findings flow from `RECONCILIATION.aDNA.md` (6 website-owned + 5 pt19-owned, the latter recorded **flagged-pending-pt19**, never scored as in-campaign-fixable); F findings flow from the frozen baseline (`/vaults/graph` Perf 83 local; `/learn/concepts/*` CLS 0.156; live BP 92 deploy-layer; the deploy gap). The sweep focuses the fresh manual lenses on A/B/C/D/E/G/H/I/K.

**Reconciled persona roster (author only uncovered — Objective 2):** new = **Standard Archivist** (J), **Performance Engineer** (F); extensions = **Skeptical Frontier Engineer** (← Movement Skeptic + Brand Strategist; final verdict; A/D/E), **Funder/Program Officer** (← Movement Skeptic + adopter; E/K). Covered (reused as-is): Design Purist ← Design Critic/Visual Designer (C/H), Accessibility & Agent Advocate ← Accessibility Auditor (G), Content Strategist/UX Writer/Anti-Bloat (I), Information Architect (B/IA), Rare-Disease Clinician ← Newcomer Stress-Tester + adopter (B), Movement Skeptic + Brand Strategist + Conversion/Growth + Motion Designer (K/A/C).

**Sweep method:** parallel **`Agent`** dispatch (NOT the Workflow tool — the full 30-persona MAX-III RLP-via-Workflow is the P3 decadal-close instrument). Lens-grouped agents each score the flagships (+ sampled groups) against the A–K dossiers, writing findings independently; a synthesis pass reconciles into `FINDINGS.aDNA.md`. Each flagship sees ≥3 lenses (the grouped manual lenses + the pre-supplied J/F). **Credibility / naming / standard-fidelity = auto-Critical.**

## Goal
Score the baseline and produce the master defect-and-opportunity register. For each A–K axis, define what "frontier-grade" means for a federated rare-disease research platform specifically; then run the adversarial persona sweep across every unit and aggregate into a prioritized `FINDINGS.aDNA.md`.

## Objectives
1. **Rubric dossiers (A–K).** One short dossier per axis: what frontier-grade means here, with concrete positive/negative examples drawn from the benchmark set. This is the standard every persona scores against. For the new axis **K (Community & Collaboration Legibility)** and axis **E**, ground the dossier in the cited exemplar grammar (`RESEARCH-IMPROVEMENT-PLAN.aDNA.md` §3.2): spec **maturity ladder** (W3C), **power-disclaimer** (Ethereum), browsable governance (Rust), **shipped/early-access/planned phase ladder** (Bluesky), attribution-as-edge (Hugging Face), audit-trail-as-trust (Wikipedia). Author the **K-axis dossier** with the 1–5 anchors from §3.3.
2. **Reconcile the prompt's seven personas against the existing 14-reviewer + 16-adopter benches; author only the uncovered lenses.** Standard Archivist (axis J) and Performance Engineer (axis F) are genuinely new; Skeptical Frontier Engineer and Funder/Program Officer extend existing trust lenses (Movement Skeptic, Brand Strategist) + adopters — sharpen, do not duplicate. Coverage already present: Design Purist ← Design Critic / Visual Designer; Accessibility & Agent Advocate ← Accessibility Auditor (+ agentic-browsing extension); microcopy ← Content Strategist / UX Writer / Anti-Bloat Editor; IA ← Information Architect; Rare-Disease Clinician ← Newcomer Stress-Tester + a clinician/researcher adopter.
3. **Baseline persona sweep.** Every unit reviewed by ≥3 personas; each writes findings independently, then a synthesis pass reconciles. Every finding tagged: dimension (A–K) × severity (Critical/High/Medium/Low) × unit. Standard Fidelity findings flow from `RECONCILIATION.aDNA.md`.
4. **Aggregate `FINDINGS.aDNA.md`** sorted by **severity × reach** (a Critical on the landing hero outranks a High on a deep page), and extract the **systemic-pattern list** — recurring patterns (spacing-scale violation, accent sprawl, claimed-not-shown reflex, stale-terminology class) that get fixed once at the system level.

## Exit Gate (P1 → P2) — human
- [x] Rubric dossier per A–K axis — [[rubrics_a_k]] (11 dossiers; K anchors from §3.3, E grounded in FAIR/governance).
- [x] Personas reconciled; only uncovered lenses authored — **Standard Archivist** (J) + **Performance Engineer** (F) as bench files; **Skeptical Frontier Engineer** + **Funder/Program Officer** as sharpened briefs (not duplicated). `who/reviewers/AGENTS.md` index updated (14→16).
- [x] Flagships scored by ≥3 lenses (4 sweep cells + pre-supplied J/F); findings synthesized. *(17 group-reps sampled; full per-group scoring rolls into P3 unit work.)*
- [x] `FINDINGS.aDNA.md` complete, sorted by severity × reach; credibility/naming = auto-Critical (4 Criticals).
- [x] Systemic-pattern list produced (10 patterns; credibility-integrity = the headline).
- [x] **Zero changes** (planning-class; `git status` clean except gitignored evidence). — [ ] **Operator approves FINDINGS prioritization + the new personas (Decision 3).** *(human gate — pending)*

> **Mission status: in_progress — deliverables complete, awaiting Decision 3** (2026-06-18). On approval → `status: completed` + P2 opens. AAR below (filed now; substantive work done).

## Campaign Context
- **Inputs:** P0 `SITEMAP.aDNA.md`, `RECONCILIATION.aDNA.md`, frozen baseline, benchmark set.
- **Outputs → P2:** `FINDINGS.aDNA.md` + systemic-pattern list drive the improvement specs.

## AAR
*5-line AAR (`template_aar_lightweight.md`) — filed at deliverables-complete; mission flips to `completed` at Decision 3.*
- **Worked:** The **4-lens parallel-Agent sweep** (trust/credibility/demo/community · visual/responsive · a11y/agentic/narrative-microcopy) over the 7 flagships produced a dense, file:line-cited register fast; **pre-supplying J** (`RECONCILIATION`) **+ F** (frozen baseline) let the sweep focus the fresh manual lenses; dossiers + persona files authored in parallel with the sweep (one round-trip).
- **Didn't:** Didn't deep-score the 17 group-representatives (flagship-focused; groups sampled → full per-group scoring rolls into P3 unit work); didn't run the 30-persona Workflow RLP (correctly reserved for P3 decadal closes, a separate opt-in).
- **Finding:** **The gap to frontier-grade is credibility-integrity, not aesthetics.** 4 auto-Criticals (dead `aDNA-Network/aDNA.aDNA` proof-links · fabricated homepage code · JSON-LD publisher drift · false "data-driven" diagram) + the nav-serialization class + no `llms.txt`; design/IA/motion already floor at ~4. **Refuted** the research-plan "graph invisible to agents" pre-seed (real node-twin + `<noscript>` ship). Located the open W6 §11-citation item.
- **Change:** P2 must sequence **credibility-integrity first** (systemic pattern 1: link/citation/JSON-LD gates), then the one **nav-serialization structural fix** (clears H-1/H-2 + the @audit 375px fail), *before* any visual polish — credibility before craft (the standing network-audit finding).
- **Follow-up:** P2 = improvement specs per Critical/High + the 10 systemic patterns + the tooling-promotion (llms.txt/banned-vocab/link/single-source/categorical-color gates; manual axis-G agentic since LH 13.4.0 has no Agentic category). pt19-owned (H-10) waits for pt19; W4/W5 brand-entity name decided at P2.
