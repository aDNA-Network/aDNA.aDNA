---
plan_id: mission_haussmann_p3_5_proposal_process
type: plan
title: "P3.5 — The numbered proposal process: states, archive, machine index — and proposal #1 filed"
campaign: campaign_haussmann
phase: P3
decade: 2
owner: stanley
status: queued-provisional
mission_class: build
executor_tier: fable   # governance design; the surface build is mechanical
token_budget_estimated: "~200–300 kT across 1–2 sessions: ADR-055 process design + site surface + machine index + first proposal authored + filed (ADR-016)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["H15 confirmed", "MCP D8=5 evidence (8-state SEP + conformance gates)", "dossier proposal-anatomy (PEPs immutable numbering + JSON index; TC39 stage tables + champions; EIPs status machine + per-category counts)", "existing vault machinery (ADR corpus + upstream-contribution skill as the internal analogue)"]
vitruvius_dimensions: [D8, D10]
decade_theme: agentic
webforge_patterns: []
patterns_to_author: ["A4: proposal-process surface pattern (owed to WebForge)"]
depends_on: [mission_haussmann_p2_6_midscore]
blocks: []
acceptance_criteria:
  - "ADR-055 at proposed: the process (name, numbering law [immutable], states incl. terminal ones, venues, who can file, how agents participate [disclosed], conformance/acceptance criteria, relationship to the internal ADR system)"
  - "The site surface: process constitution page + numbered archive (tables-first, status machine visible, author/champion credit) + machine-readable index (JSON)"
  - "Proposal #1 authored and filed through the process itself (a real one — candidates: the URL-casing law, the registry admission standard, or the agentic-surface contract — eating the dogfood)"
  - "The contribution funnel routes to it (how a stranger files; template; where discussion happens)"
verification_method: "process self-test (proposal #1 traverses draft→review states) + editorial gate + machine index validates"
human_gate: true
tags: [plan, haussmann, p3, proposals, governance]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The largest governance gap vs the reference model — closed by shipping the smallest real version.

## Why this mission exists

No numbered proposal process exists (H15); MCP's SEP process is why it scored D8=5 `[D cohort]`; the dossier extracted the proven anatomy (PEPs/TC39/EIPs). The vault already runs a rigorous *internal* decision system (ADRs + ratification) — the process is its public, community-facing sibling, not a new invention. A young standard's process can be honest about its youth (states exist; most numbers unassigned; that's fine — 7.2's correction).

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | ADR-055 design (with the honest-youth posture: real states, real numbering, no fabricated activity) | ADR-055 proposed | ⛩ operator |
| O1 | Build: constitution page + archive surface + JSON index + filing template/route | surface | — |
| O2 | Author + file proposal #1 through the process (operator co-signs as ratifier where the process requires) | proposal #1 live | ⛩ operator |
| O3 | Funnel wiring + editorial gate + captures; AAR; stage A4 upstream | evidence + AAR | — |

## Constraints

Numbers are immutable once assigned; agent participation disclosed per the vault's own doctrine; no "community" implied where there isn't one (the process page states current occupancy honestly).

## Definition of done

A stranger can read the constitution, see proposal #1 with a real state history, and file #2.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + `evidence/dossier/haussmann_reference_dossier_draft.md` (proposal anatomy) + the cohort MCP scoresheets. Execute O0 (halt for ratification), then O1–O3.

## Progress

*(at execution)*

## AAR (SO#5)

*(before completed)*
