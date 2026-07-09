---
type: design_guidance
created: 2026-07-08
updated: 2026-07-08
status: active
last_edited_by: agent_rosetta
campaign: campaign_storyweave
mission: mission_p1_6_hero_visual_excellence
objective: O1
tags: [reference, hero, graph, design-guidance, provenance, storyweave]
---

# O1 synthesis — hero design guidance (diagram → living network)

Ten rules for the P1.6 hero comps, each with provenance (exemplar in `_reference_set.md` + principle).
The through-line: **the current `hero_graph.svg` reads as a *diagram* (labeled chips + straight lines);
best-in-class network heroes read as *living portraits* (glowing bodies + flowing relationships +
depth + honest aliveness).** These rules move us across that gap without breaking the register.

- **R1 — Bodies, not boxes.** Nodes are luminous **orbs** (halo + core + rim), not labeled rectangles. A vault should feel like a *place with light in it*. *(north star; Nomic Atlas density-depth; Obsidian.)*
- **R2 — Relationships flow.** Edges are **curved, gradient-lit arcs** (cyan→purple) with optional traveling light, not straight grey segments. Line character still encodes relationship type (federation/umbrella/companion) so the graph *means* something. *(Neo4j edge-typing; north star flowing arcs.)*
- **R3 — Depth = premium.** Layer a ground glow, a core aura, a faint starfield, and dashed orbit rings behind the graph. Depth is what separates "premium" from "clip-art." *(Linear/Stripe gradient depth; three.js particle fields.)*
- **R4 — One breathing center.** The **aDNA core** is the brightest body with a slow breathing pulse + concentric pulse-rings — the standard everything orbits. Restraint: it's the *only* thing that pulses strongly. *(Linear "motion that breathes"; north star core pulse.)*
- **R5 — Honest aliveness.** Show growth via **forming seed-nodes** at the edges ("+53 forming · your vault?") — dim, drifting points that imply the 53 unlinked vaults + an invitation. **No fake live counters, no invented activity.** The "live network" badge must be true or dropped. *(ethereum.org "built by everyone"; register guardrail; north star forming seeds.)*
- **R6 — Two accents, hard stop.** Cyan (`#7dcfff`) + purple (`#9d7cd8`) only, over Tokyo-Night ink. Everything else is neutral light. Color restraint reads intentional (gate-18 ≤2 hues). *(Linear one-accent; gate-18.)*
- **R7 — Legible hierarchy.** Label the **hubs by default** (aDNA core + III + Astro), reveal the rest on interaction/opt-in. A wall of 15 labels is a diagram; 3 labels + 12 glowing bodies is a portrait. *(Obsidian hairball-avoidance; north star Hubs/All toggle.)*
- **R8 — Ambient by default, doorway on hover.** Non-interactive beauty first; on hover a node **brightens + names itself + dims the rest**, click → its vault page. The middle path serves "explore the network" without a11y/perf cost when idle. *(Sigma/force-graph hover-highlight; mission Axis 2 middle path.)*
- **R9 — The still frame must be complete.** Under `prefers-reduced-motion` / no-JS, the frozen composition is itself beautiful and legible — motion is enhancement, never load-bearing. The SSR SVG is the honest floor. *(mission constraints; Linear restraint; gate-22/reduced-motion.)*
- **R10 — Cohesion across surfaces.** The hero's "graph language" (orb + arc + cyan-core) should rhyme with `/vaults/graph` + `/network` + the home `NetworkDiagram` — a shared brand asset, not an orphan showpiece. *(mission Axis 4; brand-cohesion principle.)*

## What this means for the three tiers (feeds O2/O3)
- **T1 (SVG):** achieve R1–R4/R6/R7/R9 with gradients, `feGaussianBlur` glow, curved paths, CSS breathing — no canvas. Ceiling: "beautiful still portrait that gently breathes." Honest floor is trivial (it *is* SSR SVG).
- **T2 (Canvas-2D):** the north star — R1–R9 with real-time glow, flowing particles, forming seeds, hover-doorway (R8). Sweet spot: best-in-class *and* in perf budget.
- **T3 (WebGL):** R1–R9 **plus** additive GPU bloom, true depth/parallax, a denser living particle field (all 68 implied). Ceiling: "you're flying at the edge of a galaxy of vaults." Risk: bundle/perf/tech-demo — measured at O6.

All three keep the SSR SVG (R9) as the no-JS + a11y twin; T2/T3 are progressive enhancement over it.
