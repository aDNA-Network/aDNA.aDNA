---
type: backlog
idea_id: idea_diagram_missions_herb
status: deferred
priority: high
created: 2026-04-24
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [backlog, visual, diagrams, herb, canvasforge, dual-method]
target_phase: Phase 7 D8 (Interaction Depth, cycles 71-80) + Phase 8 seed
deferred_owner: "Rosetta + Canvas.aDNA (Mondrian)"
deferred_trigger: "post-launch visual-layer push (reroute Herb/CanvasForge refs; concept pages already work with prose+mermaid)"
---

# Idea: Herb-Commissioned Diagram Missions for aDNA Key Concepts

## Problem

aDNA's core ideas — the triad ontology, the convergence funnel, context engineering integrated with operational hierarchy, file structure as knowledge map — are abstract. Every concept and tutorial page currently explains them in prose and mermaid code blocks. No finished figures, no infographics, no architectural diagrams that a newcomer can scan and immediately understand before reading a word.

The result: Delight is capped (D4 close: 4.50) and Comprehension for non-technical visitors depends entirely on whether they can follow the prose. Diagrams would unlock a third explanation layer between "read the hero copy" and "read the concept page."

## The Dual Method

A novel image-generation workflow proposed for aDNA diagram production:

```
Text prompt  ─┐
               ├──► Image model ──► Final figure
Mermaid diag ─┘
```

**Text prompt**: Describes the *visual register* — metaphor, mood, aesthetic (e.g., "three glowing DNA helices in a dark workspace, warm amber light"). Provides the evocative layer.

**Mermaid diagram**: Provides the *structural ground truth* — nodes, edges, positions, and labels that must appear in the image. Serves as a second validation pass: the image must spatially honor the graph defined in mermaid.

**Combined instruction to image model**: "Use the mermaid diagram as a compositional layout anchor. Every node in the diagram must appear as a distinct visual element in the image, positioned according to the graph structure. The text prompt drives aesthetic — the mermaid diagram drives composition."

This is analogous to ControlNet (structural conditioning) but using semantic graph notation instead of a reference image. The mermaid diagram enforces layout correctness; the text prompt prevents it from looking like a diagram printout.

### Validation protocol

For each generated figure:
1. Mermaid render: confirm the diagram itself is valid and informative (standalone artifact)
2. Image review (VR1-VR5): does the figure visually honor the mermaid structure?
3. Dual-audience check: does a non-technical reader understand the concept from image alone? Does a developer find it technically accurate?
4. Site integration: does it slot into the concept page without breaking the prose flow?

## Priority Concepts to Visualize

Ranked by: (conceptual complexity × newcomer confusion × site traffic).

| # | Concept | Mermaid type | Key insight to convey | Target page |
|---|---------|-------------|----------------------|------------|
| 1 | **The Triad** (WHO/WHAT/HOW) | Graph (3 nodes, labeled edges) | Three interlocking legs of a knowledge architecture — not a hierarchy, a triad | `/learn/what-is-adna` |
| 2 | **Convergence Funnel** | Flowchart (narrowing) | Vault → Campaign → Mission → Objective narrows context from 75K → 5K tokens | `/learn/concepts/convergence` |
| 3 | **Context Engineering** | Sequence diagram | Agent loads typed context files before working — not a full vault dump | `/learn/concepts/context-optimization` |
| 4 | **Operational Hierarchy** | Hierarchy diagram (Campaign→Mission→Objective) with OODA loops | Every level runs an Observe-Orient-Decide-Act loop; anomalies propagate up | `/learn/concepts/governance-files` |
| 5 | **Lattice Composition** | DAG (modules as nodes, edges as data flow) | Modules compose into pipelines; the lattice IS the workflow | `/learn/concepts/lattice-composition` |
| 6 | **File Structure as Knowledge Map** | Directory tree rendered as spatial zones | who/ what/ how/ as three knowledge territories; CLAUDE.md as the routing layer | `/learn/what-is-adna` |
| 7 | **Federation Graph** | Multi-graph (two vaults sharing a lattice node) | Vaults share validated pipelines; federation is opt-in with explicit version policy | `/learn/concepts/federation` |

## Who Does What

**Herb** (CanvasForge.aDNA / Canvas Visual Command pipeline):
- Produces mermaid diagram per concept (structural ground truth)
- Writes dual text prompt (aesthetic layer)
- Runs image model (Imagen 4 Ultra via CanvasForge)
- Applies VR1-VR5 scoring gate
- Delivers: `<concept>_figure_v1.png` + mermaid source + text prompt artifact

**Rosetta** (aDNA.aDNA):
- Specifies concept brief per figure (what the figure must convey, dual-audience test)
- Reviews dual-audience legibility
- Integrates figure into concept/tutorial pages
- Updates ALT text (accessibility requirement) and caption

## Where This Fits in the Campaign

### Option A — D8 sub-mission (recommended)
D8 theme is "Interaction Depth" (cycles 71-80): replace MediaPlaceholder boxes, add demo content. This is the natural home. Cycles 71-73 could be dedicated to diagram integration:
- Herb delivers figures as external input before D8 opens
- D8 cycles consume them: integrate into pages, verify accessibility, confirm dual-audience

**Requirement**: Herb needs the concept briefs ~2 decadals in advance (before D6 opens). Briefs should be filed in `how/missions/` or handed directly to CanvasForge.aDNA as a cross-project mission brief.

### Option B — Phase 8 seed (fallback)
If Herb's pipeline isn't ready by D8, scope as Phase 8 of Operation Rosetta: "Visual Layer" — dedicated to diagrams, demo content, and infographic integration across all key concept pages.

### Option C — Standalone mission M36+ (parallel)
Create a mission M36 that runs in parallel with D5-D7, with Herb as the external executor. Rosetta writes the 7 concept briefs; Herb produces the figures; Rosetta integrates them when ready.

## Immediate Next Step (this session)

1. Decide: D8 sub-mission, Phase 8, or standalone parallel mission?
2. If proceeding: write 7 concept briefs (one per concept above) as a mission brief document
3. Route the brief to Herb via CanvasForge.aDNA or lattice-labs campaign dispatch

## Dependencies

- Herb's CanvasForge pipeline: image generation from Imagen 4 Ultra via CanvasForge.aDNA (ADR 003)
- Mermaid diagram validation: existing `what/lattices/tools/` or Astro's MermaidDiagram component
- Site integration: `site/src/components/sections/MediaPlaceholder.astro` → replace with `<Image>` after delivery
- ALT text: mandatory for every figure (WCAG 2.1 AA — the Accessibility Auditor will check)

## Related

- [[../../what/concepts/concept_convergence|concept_convergence]] — prime candidate for Concept 2 figure
- [[../../how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d4|aar_phase7_d4]] — D4 AAR notes media placeholders as biggest remaining Delight gap
- [[../../how/skills/skill_dual_audience_review|skill_dual_audience_review]] — review gate for every delivered figure


## Champollion G0 disposition — X (M1.1, 2026-07-02)

**DEFER.** Owner: Rosetta + Canvas.aDNA (Mondrian). Trigger: post-launch visual-layer push (reroute Herb/CanvasForge refs; concept pages already work with prose+mermaid). Ratified at Champollion G0 (D2).

## Disposition — Refit M5 vNext triage (2026-07-24) · **CONFIRM-DEFERRED**

Reviewed in the light sweep; **stays `deferred`** — trigger: Herb (external contributor) commissions the diagram missions. Owner: Herb + Rosetta. See [[vnext_roadmap]] §Deferred-with-trigger.
