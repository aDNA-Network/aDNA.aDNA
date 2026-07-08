---
type: review_findings
artifact_class: graph_feasibility
created: 2026-07-08
campaign: campaign_storyweave
mission: mission_p0_5_graph_spike
phase: P0.5
persona: agent_rosetta
status: draft   # awaits the P0.5 operator gate (pick a direction)
tags: [storyweave, p0_5, graph, feasibility, a06, adr_032, spike]
---

# P0.5 — Graph feasibility + design-comp spike → recommendation

> **De-risks the flagship (A-06) before the P2 build.** The current `/vaults/graph` is a Mermaid `flowchart LR` that lays out **all 68 nodes** in one horizontal row, so the **53 unconnected** vaults crush the real **15-node / 14-edge** connected story into an illegible strip. This spike proves a legible layout and asks the operator to pick a direction.

## The interactive comp (one lab, three directions)
**▶ https://claude.ai/code/artifact/24faa360-f618-422f-a36c-1efc11b232ba** (source: `p0_5_graph_lab.html`). Real data (14 edges / 15 connected / 53 unlinked), on-brand (Tokyo-Night + family colors), pan/zoom/hover/click, AA-contrast, responsive, **0 console errors** (headless-verified via the T0 harness). Two live toggles:
- **Layout: Force ⇄ Radial** — the two legibility directions.
- **ADR-032: Graph ⇄ Composed** — the flat legible graph vs. a warm SS-Ghibli "ground" (glow + ambient islands) composited behind it (the *composed focal unit* the doctrine §1 recommends; the illustration is *evoked* here, not the real hero PNG).

## What the spike proves (feasibility = GREEN)
1. **The root-cause fix works:** splitting the **connected component** (gets the whole canvas, legible labels, relationship line-styles) from the **53 not-yet-linked** vaults (a calm honest grid) turns the illegible strip into a readable network. This alone resolves A-06.
2. **The data tells a real story:** **III** and **Astro** are the shared-infrastructure hubs that consumers (WilhelmAI, RareHarness, Molecules) *federate against* — the "federated + collaborative context-graph" thesis made concrete + visible.
3. **Legibility + interactivity + brand can coexist** (family color = one organizing principle; line-style = relationship type; hover isolates a node's edges).

## Recommendation (operator picks at the gate)
- **Layout → Radial** as the production default (aDNA/standard-adjacent core, relationship-typed placement, **deterministic** so it SSR-renders cleanly + is stable across builds); keep **Force** as the *enhanced interactive* mode when JS is present. *(Force is more "alive" but non-deterministic — worse for a static SSR SVG.)*
- **ADR-032 → Composed focal unit, restrained** — a subtle warm ground behind a clearly-primary legible graph (compose, don't compete). Default the graph primary; the ground is atmosphere, not the message.
- **Interactivity → progressive enhancement** (see below).

## The no-JS production path (keeps the A-06 gate)
The site's constraint is **zero-runtime-JS / no-JS-visible** (`build_graph_svg.mjs` → committed SSR SVG). The comp is JS-interactive to *explore layout*; production must reconcile:
- **Build-time:** replace the Mermaid-LR generator with a **deterministic split-layout SVG** (connected subgraph laid out [radial or a *precomputed/settled* force] + the 53 as a grid) — emitted as a committed static SVG that is **legible + AA with JS disabled** (satisfies gate-22 SSR + the no-JS render).
- **Runtime (optional):** a small **progressive-enhancement** island layers pan/zoom/hover/click *on top* when JS is available — never required for legibility.
This is the one real engineering decision for P2; the spike confirms it's straightforward.

## Per-direction notes (for the gate)
| Direction | Legibility | SSR-friendly | Brand/warmth | Note |
|---|:-:|:-:|:-:|---|
| Force + Graph | good (some label crowding in the dense cluster) | ✗ (non-deterministic) | medium | best as the *interactive* mode |
| **Radial + Graph** | **best** | **✓** | medium | recommended production base |
| Radial/Force + **Composed** | good | ✓ (ground is CSS/canvas) | **high** | ADR-032 reconciliation; keep restrained |

**Also surfaced (fold into P2/P3):** mobile shows the graph small — production should ship a mobile-tuned view (larger nodes or a simpler default); a couple of force-mode labels overlap in the WilhelmAI/Astro/Molecules cluster (radial fixes it).

## Gate ask
Operator: **(1)** pick a layout (recommend **Radial** base + Force as the interactive mode); **(2)** confirm **ADR-032 = composed focal unit, restrained** (or override to graph-only); **(3)** confirm the **no-JS SSR + progressive-JS** production approach. → then P2 builds the chosen direction into the Astro pipeline; P1 (storytelling) runs in parallel.
