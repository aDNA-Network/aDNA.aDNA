---
type: mission
mission_id: mission_adna_str_p5_m57_adnalabs_expansion_planning_stub
campaign: campaign_adna_serious_tool_readiness
phase: 5
mission_number: 5.7
slug: adnalabs_expansion_planning_stub
created: 2026-05-30
updated: 2026-05-30
status: planned   # STUB — seeded at M5.6-close wind-down; opens next session
opens_at:
opened_session:
closed_at:
closed_session:
estimated_sessions:   # SET BY OBJECTIVE 1 (self-expansion); stub does not pre-commit a session shape
actual_sessions:
persona: rosetta
last_edited_by: agent_stanley
spec_completeness: stub   # INTENTIONAL — this is a self-expanding seed; O1 expands it into the full planning spec
mission_class: planning   # governance + design artifacts only; no executable site code
verification_surface: agent   # parse/section/cross-reference checks; no build artifact
is_stub: true
self_expanding: true   # Objective 1 expands this stub into the full planning mission spec
resume_gate: "Substantive planning (O2+) ASSUMES the brand-refactor coordination memo has dropped (launched from LatticeLabs.aDNA / Berthier; operator will help locate it — see coord-await note). Objective 1 (self-expansion) MAY proceed at open without it."
resume_gate_ref: aDNA.aDNA/who/coordination/coord_2026_05_30_inbound_await_brand_refactor_adnalabs.md
rescope_scale: "M5.0-scale full re-scope (operator-confirmed 2026-05-30): docs polish (D16-D20) becomes one track among marketplace/registry + community/labs/org + aDNANetwork + brand-application + domain-cutover; Phase-5 exit gate to be amended (operator-ratified)."
token_budget_estimated: "STUB declares none; Objective 1 sets the budget when it expands the spec. Rough placeholder for the expansion itself: ~100-150 kT (research-reading + IA design + re-scope + roadmap)."
prerequisite_missions:
  - mission_adna_str_p5_m56_d15_persona_page_consolidation   # M5.6 closed 2026-05-30; immediate predecessor
  - mission_adna_str_p5_m50_p5_entry_planning   # planning-class precedent (isomorphic shape)
prerequisite_artifacts:
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m57_adnalabs_expansion_seed_brief.md   # grounding (O1 consumes this)
  - aDNA.aDNA/who/coordination/coord_2026_05_30_inbound_await_brand_refactor_adnalabs.md   # the gate dependency
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_decadal_theme_set.md   # D11-D20 baseline (D16-D20 under re-scope)
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion.md   # 21-persona baseline
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p5_m50_p5_entry_planning.md   # planning-class template
  - aDNA.aDNA/how/skills/skill_vercel_squarespace_domain_cutover.md   # domain cutover playbook (aDNA.network)
  - aDNA.aDNA/site/src/data/vaults.json   # aDNANetwork seed
  - aDNA.aDNA/what/lattices/examples/   # marketplace seed
tags: [mission, m5_7, v8, p5, planning_stub, self_expanding, brand_pivot, adnalabs, adna_network, marketplace, registry, community, labs, network, domain_cutover, full_rescope_m50_scale, gated_on_brand_refactor_coord_memo]
---

# Mission M5.7 (STUB) — aDNALabs Site Expansion Planning

> **This is a STUB — a self-expanding seed, not a finished spec.** It is seeded at the M5.6-close wind-down so the next session has a clear, evidence-grounded starting point. **Objective 1 is to expand this stub into the full planning mission spec** (objectives, deliverables, acceptance criteria, token budget, session shape) by consuming the seed brief (and the brand-refactor coord memo, if dropped). Keep the stub lean; do the elaboration in O1.

## Mission Identity

**Class**: planning (governance + design artifacts only; **no executable site code**). **Number**: M5.7 (next mission; supersedes the previously-prompted "M5.7/D16" — D16 is now under re-scope). **Trigger**: operator strategic pivot at M5.6 close (2026-05-30). **Re-scope scale**: **M5.0-scale full re-scope** (operator-confirmed).

**Why a stub (operator instruction):** the next session should *begin by more comprehensively expanding/reviewing itself* — turning this seed into the real plan — rather than executing a pre-baked plan. This keeps the re-scope honest to the evidence the planning session gathers, and lets the gate (below) govern the substantive work.

## Gate (read before opening)

- **Objective 1 (self-expansion)** may proceed at open — it only needs the seed brief + a re-read of the current campaign/site state.
- **Objectives O2+ (substantive planning)** **assume the brand-refactor coordination memo has dropped** — the upstream rename (Lattice→aDNA forward face; `LatticeLabs`→aDNALabs; `LatticeNetwork`→aDNANetwork), launched from `LatticeLabs.aDNA` (Berthier). The operator will help locate that memo. See the coord-await note (`resume_gate_ref`). If the memo has not dropped, O1 may still complete and the mission holds at the gate until it has.

## Strategic context (one-paragraph; full detail in the seed brief)

aDNA becomes the forward-facing network/community/lab brand; Lattice becomes the underlying protocol/standard (distributed/federated/DLT compute orchestration, memorialization, compliance, validation) that aDNA builds context on. This vault's website expands from "the aDNA docs site" into **the forward face of aDNALabs** — the people's frontier lab and steward of the Lattice Protocol + aDNA standard — spanning standard/docs + a context-graph **marketplace/registry** + **community/labs/org** + the **aDNANetwork** of aDNA computers, at the new URL **aDNA.network**. Grounding + gap analysis: [[m57_adnalabs_expansion_seed_brief]].

## Seed objectives (to be expanded + given AC/budget by Objective 1)

1. **O1 — Self-expand.** Comprehensively review + expand this stub into the full planning mission spec: objectives, deliverables, acceptance criteria, token budget, session shape, standing-order discharges. Consume the seed brief + (if dropped) the brand-refactor coord memo. Re-verify all as-of-2026-05-30 figures against current state.
2. **O2 — Brand-pivot application audit.** Where aDNA-forward vs Lattice-as-protocol naming applies across the site + this vault's governance; what changes here vs. what is owned upstream (aDNALabs/aDNANetwork rename authority).
3. **O3 — Expanded-site IA + scope design.** Standard/docs + marketplace/registry (reuse `what/lattices/examples/` + `skill_lattice_publish`) + community/labs/org + aDNANetwork (reuse `/vaults` registry + federation_refs) + about/vision/blog + aDNALabs positioning.
4. **O4 — Full campaign re-scope.** Review/resequence/expand/defer D16-D20; define the new tracks; propose an **amended Phase-5 exit gate** (or a successor phase/campaign) — operator-ratified.
5. **O5 — Persona-bench expansion design.** Gap analysis + new personas (marketplace publisher/consumer, lab/org steward, network/node operator, community lead) vs. refinements of existing.
6. **O6 — Domain-cutover sub-plan.** aDNA.network via `skill_vercel_squarespace_domain_cutover` (Squarespace `sarosal@gmail.com`; pin inputs; operator OAuth + go-signal gates; email-MX delta guard).
7. **O7 — Execution roadmap.** Sequence the actual site-refactor execution missions, **gated to begin after the brand rename + coord memo**; define coord-memo consumption + cross-vault co-execution with `LatticeLabs.aDNA`.
8. **O8 — Governance bundle.** Campaign master amendments; revised theme set; STATE refresh; ratification gate.

## Hard constraints

1. **Planning/governance only** — no `site/` code, no content/asset generation, no image-gen.
2. **No cross-vault substantive writes** — coordination memos OK (filed per SO #13); no edits inside other vaults' content.
3. **No ADR authoring mid-phase** (Campaign SO #14) — surface ADR candidates; ratify at phase/decadal gate.
4. **Phase gates are human gates** (Project SO #1 / Campaign SO #19) — the re-scope + amended exit gate are operator-ratified, not auto-adopted.
5. **Archive-never-delete** — D11-D20 history + the existing theme set are preserved; re-scope annotates, never removes.
6. **Respect the gate** — O2+ assume the brand-refactor coord memo; do not invent the upstream rename decisions.

## Lightweight AAR (per Project SO #5)

*(Filled at close — 5-line; non-RLP planning mission.)*

- **Worked**:
- **Didn't**:
- **Finding**:
- **Change**:
- **Follow-up**:
