---
mission_id: mission_wadna_p1_critique
type: mission
title: "P1 — Research-Grounded Critique: Rubric Dossiers + Persona Sweep + FINDINGS"
campaign_id: campaign_website_adna
phase: 1
mission_number: 1
slug: critique
status: planned
created: 2026-06-17
updated: 2026-06-17
last_edited_by: agent_stanley
owner: stanley
persona: rosetta             # resident executor; campaign planned by Berthier
mission_class: planning      # read-only; ZERO site changes
spec_completeness: stub      # finalized at P0 close
estimated_sessions: "1-2"
token_budget_estimated: "TBD at P0 close (~150-250 kT; persona fan-out over the SITEMAP unit set)"
hard_dependency_satisfied: "no — depends on P0 (SITEMAP + RECONCILIATION + frozen baseline + benchmark set)"
unblocks_missions: [mission_wadna_p2_design]
deliverables_count: 4
tags: [mission, campaign_website_adna, phase1, planning, critique]
---

# P1 — Research-Grounded Critique

> **Stub spec.** Finalized at the P0 → P1 gate once `SITEMAP.aDNA.md` fixes the unit set. Still no changes — this phase generates the context that informs every later decision.

## Goal
Score the baseline and produce the master defect-and-opportunity register. For each A–K axis, define what "frontier-grade" means for a federated rare-disease research platform specifically; then run the adversarial persona sweep across every unit and aggregate into a prioritized `FINDINGS.aDNA.md`.

## Objectives
1. **Rubric dossiers (A–K).** One short dossier per axis: what frontier-grade means here, with concrete positive/negative examples drawn from the benchmark set. This is the standard every persona scores against. For the new axis **K (Community & Collaboration Legibility)** and axis **E**, ground the dossier in the cited exemplar grammar (`RESEARCH-IMPROVEMENT-PLAN.aDNA.md` §3.2): spec **maturity ladder** (W3C), **power-disclaimer** (Ethereum), browsable governance (Rust), **shipped/early-access/planned phase ladder** (Bluesky), attribution-as-edge (Hugging Face), audit-trail-as-trust (Wikipedia). Author the **K-axis dossier** with the 1–5 anchors from §3.3.
2. **Reconcile the prompt's seven personas against the existing 14-reviewer + 16-adopter benches; author only the uncovered lenses.** Standard Archivist (axis J) and Performance Engineer (axis F) are genuinely new; Skeptical Frontier Engineer and Funder/Program Officer extend existing trust lenses (Movement Skeptic, Brand Strategist) + adopters — sharpen, do not duplicate. Coverage already present: Design Purist ← Design Critic / Visual Designer; Accessibility & Agent Advocate ← Accessibility Auditor (+ agentic-browsing extension); microcopy ← Content Strategist / UX Writer / Anti-Bloat Editor; IA ← Information Architect; Rare-Disease Clinician ← Newcomer Stress-Tester + a clinician/researcher adopter.
3. **Baseline persona sweep.** Every unit reviewed by ≥3 personas; each writes findings independently, then a synthesis pass reconciles. Every finding tagged: dimension (A–K) × severity (Critical/High/Medium/Low) × unit. Standard Fidelity findings flow from `RECONCILIATION.aDNA.md`.
4. **Aggregate `FINDINGS.aDNA.md`** sorted by **severity × reach** (a Critical on the landing hero outranks a High on a deep page), and extract the **systemic-pattern list** — recurring patterns (spacing-scale violation, accent sprawl, claimed-not-shown reflex, stale-terminology class) that get fixed once at the system level.

## Exit Gate (P1 → P2) — human
- [ ] Rubric dossier per A–K axis.
- [ ] Prompt's 7 personas reconciled against the 14-reviewer + 16-adopter benches; only uncovered lenses authored (Standard Archivist, Performance Engineer + any genuine extensions).
- [ ] Every unit scored by ≥3 personas; findings synthesized.
- [ ] `FINDINGS.aDNA.md` complete, sorted by severity × reach; credibility/naming/standard-fidelity issues flagged Critical regardless of technical severity.
- [ ] Systemic-pattern list produced.
- [ ] **Zero changes.** Operator approves FINDINGS prioritization + the four personas (Decision 3).

## Campaign Context
- **Inputs:** P0 `SITEMAP.aDNA.md`, `RECONCILIATION.aDNA.md`, frozen baseline, benchmark set.
- **Outputs → P2:** `FINDINGS.aDNA.md` + systemic-pattern list drive the improvement specs.

## AAR
*5-line AAR mandatory at close.* — *(pending)*
