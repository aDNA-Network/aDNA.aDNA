---
plan_id: mission_p0_5_graph_spike
type: plan
title: "P0.5 — graph feasibility + design-comp spike"
campaign: campaign_storyweave
phase: P0.5
owner: stanley
status: in_progress   # deliverables complete; awaiting the operator direction-pick at the P0.5 gate
mission_class: design_spike
executor_tier: opus
token_budget_estimated: "~40–70 kT (1–2 sessions): data extract + one interactive lab Artifact (Force/Radial/Composed) + headless verify + feasibility recommendation. Single-build (a toggle-lab, not 3 files) kept it lean."
created: 2026-07-08
updated: 2026-07-08
last_edited_by: agent_rosetta
tags: [plan, storyweave, p0_5, graph, spike, a06, adr_032]
---

# Mission: P0.5 — graph feasibility + design-comp spike

**Goal.** De-risk the flagship graph rebuild (A-06 — the `/vaults/graph` SVG is the site's weakest visual) *before* the P2 build: prove a legible layout, get the operator to pick a direction, confirm ADR-032 fit + the no-JS production path. **Throwaway prototypes, NOT `site/` edits.**

## What A-06 actually is
`scripts/build_graph_svg.mjs` renders a Mermaid `flowchart LR` of **all 68 nodes** → the **53 unconnected** vaults lay out as one wide row that crushes the real **15-node / 14-edge** connected story into an illegible strip (sub-AA in light, abandoned on mobile). Root cause = layout, not styling.

## Objectives
| # | Objective | Output | Status |
|---|-----------|--------|--------|
| O1 | Extract the real graph data (14 edges · 15 connected · 53 unlinked · classes/colors) | embeddable JSON | ✅ done |
| O2 | Build an interactive **direction lab** (Force ⇄ Radial layout · Graph ⇄ Composed ground) with the real data, on-brand, AA, responsive, pan/zoom/hover/click | Artifact (published) | ✅ done — [lab](https://claude.ai/code/artifact/24faa360-f618-422f-a36c-1efc11b232ba); source `artifacts/p0_5_graph_lab.html` |
| O3 | Headless-verify (T0 harness) — render + console + responsive | 0 errors, desktop+mobile shots | ✅ done |
| O4 | Feasibility + recommendation (layout · ADR-032 · no-JS SSR + progressive-JS) | [[p0_5_graph_feasibility]] | ✅ done |
| O5 | **Operator gate** — present the lab + recommendation; operator picks a direction | ratified direction | ⛩ pending (operator) |

## Deliverables
- **Interactive lab Artifact** (the comp) + its source (`artifacts/p0_5_graph_lab.html`, preserved SO#6).
- **[[p0_5_graph_feasibility]]** — the recommendation: **Radial base + Force interactive mode · ADR-032 = composed focal unit (restrained) · no-JS SSR + progressive-JS enhancement**.

## Key finding
Feasibility = **GREEN**. Splitting the connected component from the 53 not-yet-linked resolves A-06; the data tells a real story (**III + Astro = the shared-infra hubs** consumers federate against). The one P2 engineering decision: a **deterministic split-layout SSR SVG** (keeps the zero-JS gate) + an optional pan/zoom/hover **progressive-enhancement** island.

## Gate (mission exit)
Operator picks: layout (rec Radial base) · ADR-032 (rec composed-restrained) · the no-JS+progressive approach. → P2 builds it into the Astro pipeline; P1 (storytelling) runs in parallel. On the pick: mission → `completed` + a 5-line AAR (SO#5).

## Standing-order compliance
- Planning/spike only — **no `site/` edits**. Artifact + repo docs LOCAL; push operator-gated.
- Instrument = headless T0 harness ([[doctrine_visual_inspection]]) — the comp was render-verified Chrome-free.
- AAR at gate-close (SO#5); token budget above (SO#11).
