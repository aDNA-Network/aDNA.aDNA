---
type: mission
mission_id: mission_adna_str_p5_m57_adnalabs_expansion_planning_stub
campaign: campaign_adna_serious_tool_readiness
phase: 5
mission_number: 5.7
slug: adnalabs_expansion_planning_stub
created: 2026-05-30
updated: 2026-05-31   # reconciled to the now-live refactor (real vaults + gate); see Reconciliation note below
status: planned   # STUB — seeded at M5.6-close wind-down; opens once the refactor is substantially complete
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
resume_gate: "Substantive planning (O2+) HOLDS until the brand refactor/migration is SUBSTANTIALLY COMPLETE (operator-confirmed 2026-05-31): the Rosetta Stone rebrand brief (S8) delivered + structural renames + content migration landed via aDNALabs.aDNA's Operation Homecoming Phases 2-5 — NOT the far-off Venus P6 cutover. Objective 1 (self-expansion) + provisional scoping MAY proceed now and firm up at the brief-S8 names-lock checkpoint. Tracked via the inbound-tracking note + Operation Homecoming."
resume_gate_ref: aDNA.aDNA/who/coordination/coord_2026_05_30_inbound_await_brand_refactor_adnalabs.md   # inbound-tracking note; upstream tracker = aDNALabs.aDNA/how/campaigns/campaign_adnalabs_genesis (Operation Homecoming) + the Rosetta Stone rebrand brief (LatticeLabs.aDNA/campaign_rosetta_stone_rebrand)
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
  - aDNA.aDNA/site/src/data/vaults.json   # aDNANetwork seed (the /vaults registry)
  - aDNA.aDNA/what/lattices/examples/   # marketplace seed
  - aDNALabs.aDNA/how/campaigns/campaign_adnalabs_genesis/   # READ-ONLY — Operation Homecoming (upstream migration/rebrand HQ; the gate tracker)
  - aDNALabs.aDNA/what/rebrand/rebrand_integration.md   # READ-ONLY — Rosetta Stone rebrand brief stages S1-S8 (names-lock)
  - LatticeLabs.aDNA/   # READ-ONLY — operated-over predecessor; hosts campaign_rosetta_stone_rebrand
tags: [mission, m5_7, v8, p5, planning_stub, self_expanding, brand_pivot, adnalabs, adna_network, marketplace, registry, community, labs, network, domain_cutover, full_rescope_m50_scale, gated_on_refactor_substantially_complete, refactor_underway_2026_05_31]
---

# Mission M5.7 (STUB) — aDNALabs Site Expansion Planning

> **This is a STUB — a self-expanding seed, not a finished spec.** It is seeded at the M5.6-close wind-down so the next session has a clear, evidence-grounded starting point. **Objective 1 is to expand this stub into the full planning mission spec** (objectives, deliverables, acceptance criteria, token budget, session shape) by consuming the seed brief (and the brand-refactor coord memo, if dropped). Keep the stub lean; do the elaboration in O1.

## Mission Identity

**Class**: planning (governance + design artifacts only; **no executable site code**). **Number**: M5.7 (next mission; supersedes the previously-prompted "M5.7/D16" — D16 is now under re-scope). **Trigger**: operator strategic pivot at M5.6 close (2026-05-30). **Re-scope scale**: **M5.0-scale full re-scope** (operator-confirmed).

**Why a stub (operator instruction):** the next session should *begin by more comprehensively expanding/reviewing itself* — turning this seed into the real plan — rather than executing a pre-baked plan. This keeps the re-scope honest to the evidence the planning session gathers, and lets the gate (below) govern the substantive work.

## Reconciliation (2026-05-31) — the refactor is now live

This stub was seeded 2026-05-30 assuming the brand refactor was hypothetical and awaited a coord memo the operator would locate. It is now **concretely underway**, coordinated from **`aDNALabs.aDNA`** (Berthier; fresh genesis 2026-05-30) via **Operation Homecoming** (`campaign_adnalabs_genesis`) — a workspace-wide migration/rebrand. Brand doctrine is **LOCKED**: *"the aDNA network runs on the Lattice Protocol"* — aDNA = brand/network/community/lab; Lattice Protocol = preserved named substrate (forks later to `LatticeProtocol.aDNA`). `aDNANetwork.aDNA` is **already renamed** from `LatticeNetwork.aDNA` (Venus; display "Alpha Lattice"; back-compat symlink). `Lab.aDNA` and `LatticeProtocol.aDNA` are **planned post-brief forks** (not yet live; fork-must-follow-rebrand). `LatticeLabs.aDNA` remains the operated-over predecessor and hosts the Rosetta Stone rebrand recon. aDNALabs filed a courtesy memo to this vault (no ask) + a broadcast ("nothing renames before the brief").

## Gate (read before opening)

- **Objective 1 (self-expansion) + provisional scoping** may proceed at open — they only need the seed brief + a re-read of the current campaign/site state + the Operation Homecoming status.
- **Objectives O2+ (substantive planning)** **HOLD until the refactor is substantially complete** (operator-confirmed 2026-05-31): the **Rosetta Stone rebrand brief (S8)** delivered (locks all naming + the master sequence) **and** structural renames + content migration landed (Operation Homecoming Phases 2-5) — NOT the far-off Venus P6 cutover. The brief-S8 names-lock is the checkpoint at which provisional scoping firms up. Track via the inbound-tracking note (`resume_gate_ref`) + Operation Homecoming.
- **Honor the broadcast**: do not rename anything in `aDNA.aDNA` (content/site/standard) until the brief locks names; this mission is planning/governance only.

## Strategic context (one-paragraph; full detail in the seed brief)

aDNA becomes the forward-facing network/community/lab brand; the **Lattice Protocol** remains the underlying protocol/standard (distributed/federated/DLT compute orchestration, memorialization, compliance, validation) that aDNA builds context on — per the locked doctrine *"the aDNA network runs on the Lattice Protocol"* (coordinated from `aDNALabs.aDNA` via Operation Homecoming). This vault's website expands from "the aDNA docs site" into **the forward face of aDNALabs** — the people's frontier lab and steward of the Lattice Protocol + aDNA standard — spanning standard/docs + a context-graph **marketplace/registry** + **community/labs/org** + the **aDNANetwork** of aDNA computers, at the new URL **aDNA.network**. Grounding + gap analysis: [[m57_adnalabs_expansion_seed_brief]].

## Seed objectives (to be expanded + given AC/budget by Objective 1)

1. **O1 — Self-expand.** Comprehensively review + expand this stub into the full planning mission spec: objectives, deliverables, acceptance criteria, token budget, session shape, standing-order discharges. Consume the seed brief + the current Operation Homecoming state / Rosetta Stone rebrand brief. Re-verify all figures against current state (re-stamp; seed-brief baseline was as-of 2026-05-31).
2. **O2 — Brand-pivot application audit.** Where aDNA-forward vs Lattice-as-protocol naming applies across the site + this vault's governance; what changes here vs. what is owned upstream (aDNALabs/aDNANetwork rename authority).
3. **O3 — Expanded-site IA + scope design.** Standard/docs + marketplace/registry (reuse `what/lattices/examples/` + `skill_lattice_publish`) + community/labs/org + aDNANetwork (reuse `/vaults` registry + federation_refs) + about/vision/blog + aDNALabs positioning.
4. **O4 — Full campaign re-scope.** Review/resequence/expand/defer D16-D20; define the new tracks; propose an **amended Phase-5 exit gate** (or a successor phase/campaign) — operator-ratified.
5. **O5 — Persona-bench expansion design.** Gap analysis + new personas (marketplace publisher/consumer, lab/org steward, network/node operator, community lead) vs. refinements of existing.
6. **O6 — Domain-cutover sub-plan.** aDNA.network via `skill_vercel_squarespace_domain_cutover` (Squarespace `sarosal@gmail.com`; pin inputs; operator OAuth + go-signal gates; email-MX delta guard).
7. **O7 — Execution roadmap.** Sequence the actual site-refactor execution missions, **gated to begin after the refactor is substantially complete**; define cross-vault co-execution with `aDNALabs.aDNA` (HQ / Operation Homecoming) + `aDNANetwork.aDNA` + the future `Lab.aDNA` / `LatticeProtocol.aDNA` forks, and how this vault consumes the rebrand brief's naming + master sequence.
8. **O8 — Governance bundle.** Campaign master amendments; revised theme set; STATE refresh; ratification gate.

## Hard constraints

1. **Planning/governance only** — no `site/` code, no content/asset generation, no image-gen.
2. **No cross-vault substantive writes** — coordination memos OK (filed per SO #13); no edits inside other vaults' content.
3. **No ADR authoring mid-phase** (Campaign SO #14) — surface ADR candidates; ratify at phase/decadal gate.
4. **Phase gates are human gates** (Project SO #1 / Campaign SO #19) — the re-scope + amended exit gate are operator-ratified, not auto-adopted.
5. **Archive-never-delete** — D11-D20 history + the existing theme set are preserved; re-scope annotates, never removes.
6. **Respect the gate + the broadcast** — O2+ hold until the refactor is substantially complete; do not invent the upstream rename decisions (owned by aDNALabs.aDNA / the Rosetta Stone rebrand brief), and rename nothing in `aDNA.aDNA` (content/site/standard) until the brief locks names.

## Lightweight AAR (per Project SO #5)

*(Filled at close — 5-line; non-RLP planning mission.)*

- **Worked**:
- **Didn't**:
- **Finding**:
- **Change**:
- **Follow-up**:
