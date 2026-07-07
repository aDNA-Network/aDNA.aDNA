---
type: skill
skill_type: process
created: 2026-06-03
updated: 2026-06-03
status: active
category: design
trigger: "Designing or rebuilding a site surface (homepage, marketplace, community, network, brand). Wraps the front of the funnel that the III cycle assumes already exists; its back half IS the III cycle + decadal AAR."
last_edited_by: agent_stanley
tags: [skill, design, pipeline, site_design, iii, decadal_aar, m5_8, ecosystem_site]

requirements:
  tools: [webfetch, astro, lighthouse, playwright]
  context: ["front_page_doctrine", "visual-identity-v2.mdx", "writing-guidelines.mdx", "who/reviewers/*", "who/adopters/*", "skill_iii_cycle", "skill_decadal_aar"]
  permissions: ["read files", "write files", "run commands"]
---

# Skill: Site-Design Pipeline — vision → ship (an 8-stage loop)

## Overview

The repeatable wrapper that gets a site surface from idea to shipped-and-perfected. **Stages 5–8 ARE the existing `skill_iii_cycle` + `skill_decadal_aar` loop** — this skill adds the front of the funnel (vision, reference-grounded doctrine, IA, wireframe, hi-fi) that the III loop assumes already exists, then hands off to the engine. It does **not** fork the III cycle or the decadal AAR.

**Cadence:** Stages 0–4 run **once per major surface** (homepage, marketplace, community, network, brand). Stages 5–8 run **continuously** as the standing III cadence — and become steady-state stewardship so the site doesn't rot (the every-10-cycle AAR is the maintenance loop; fitting the "Agentic Context Democracy" thesis — the site governs its own quality the way the network governs itself).

## The 8 stages

| Stage | Inputs | Activities | Output | Personas / tools / forges | Gate to advance |
|-------|--------|-----------|--------|---------------------------|-----------------|
| **0 Vision** | operator brief; VISION.md | lock the positioning + audiences for the surface | `vision_brief` | Content Strategist; operator | operator ratifies positioning + audience list |
| **1 Reference / Design-DNA** | vision brief | run [[skill_reference_inspection]]; synthesize | `site_*` artifacts + [[front_page_doctrine]] update | WebFetch + headless capture (`visual_capture.mjs`, [[doctrine_visual_inspection]]); Design Critic / Anti-Bloat / IA lenses; **VisualDNA** (capture clusters as a bundle) | doctrine emitted with provenance for every rule |
| **2 IA / Content Architecture** | doctrine; current sitemap | define surfaces + nav model + section sequence; **data-contract specs** for registry/community/network | `ia_map` + `content_inventory` | Information Architect, Content Strategist, Newcomer; **SiteForge** archetype select | per-click scent test passes; section budget ≤ doctrine |
| **3 Wireframe / lo-fi** | IA map; density bands | zero-fidelity block-out; above-fold + section order | annotated lo-fi (Astro stub pages OK) | Newcomer Stress-Tester (60-sec What/Why/How), IA; **CanvasForge** flow diagrams | above-fold law satisfied (one focus); Newcomer states What/Why/How in 60s |
| **4 Visual / hi-fi** | wireframe; `visual-identity-v2` tokens | apply tokens/type/palette; design registry-card + activity components; generate abstract imagery | hi-fi comps / styled components | Design Critic, Visual Designer, Infographic Specialist; **ComfyForge/Imagen 4** (abstract-only guardrails); **VisualDNA** bundle | Design Critic "made on purpose?"; palette ≤ doctrine; imagery passes guardrails |
| **5 Build (Astro)** | hi-fi; archetypes | implement in Astro 6; data-drive registry/community via content collections | merged change; built `dist/` | **SiteForge** archetypes + quality gates; existing `site/src/components/` | `npm run build` zero errors (Gate-1 schema + Gate-2 MDX); page count stable-or-up |
| **6 Measure** | built site | Lighthouse on representative pages incl. new surfaces; Playwright gates | metrics in cycle tracker; `site/evidence/` | Lighthouse, Playwright, **III** | = `skill_iii_cycle` Steps 1/5/6: no category −>1; gates pass |
| **7 Multi-persona review** | built surfaces | Reviewer Lens Pass + adopter ranker | persona ranker matrix + reviewer scorecard | full bench (reviewers + adopters) | = `skill_decadal_aar` Step 4/4b; per-track ranker is the hard gate |
| **8 Iterate / ship** | review findings | feed priority queue back to Stage 6 cycles; ship when gates hold | priority queue; deploy | III cycle tracker; deploy skill | decadal exit gate (per-track ≥4.95); operator ship ratification |

## Multi-persona review protocol (Stage 7, ecosystem surfaces)

Keeps the 10-dimension ranker + the decadal-AAR preservation clause (adopter ranker = hard gate; reviewer scorecard = parallel). **Track→persona routing:** Marketplace → Marketplace Publisher + Consumer + Conversion/Growth + Framework Docs Expert; Community → Community Lead + Lab/Org Steward + Brand Strategist; Network → Node Operator + Enterprise Architect + IA + Diagram Reviewer; Brand/Positioning → Brand Strategist + Motion Designer + Design Critic + Visual Designer + Newcomer. **Disagreement ladder:** reviewer-vs-adopter → adopter wins the gate, reviewer flag enters next priority queue; reviewer-vs-reviewer → the doctrine (e.g., motion budget) is the tie-breaker; if the doctrine is silent → escalate to operator and *the resolution becomes a new doctrine rule*.

## Design-tools inventory (where each plugs in)

WebFetch + headless capture (`visual_capture.mjs`, [[doctrine_visual_inspection]]) (1) · SiteForge archetypes + quality gates (2,5) · VisualDNA bundles (1,4) · CanvasForge diagrams (2,3,4) · ComfyForge/Imagen 4 abstract-only imagery (4) · existing component library (4,5) · Astro content collections (5) · Lighthouse/Playwright (6) · persona bench (7) · III cycle tracker (6,8).

## Related

- [[skill_iii_cycle]] · [[skill_decadal_aar]] — Stages 5–8 ARE these (extended, not forked)
- [[skill_reference_inspection]] — Stage 1
- [[front_page_doctrine]] — the ruleset Stages 2–4 conform to
- [[doctrine_visual_inspection]] — the visual-inspection tier ladder (Tier-0 headless harness = the default for Stages 1/4/6/7)
- `site/src/content/reference/visual-identity-v2.mdx` · `writing-guidelines.mdx` — companion references
