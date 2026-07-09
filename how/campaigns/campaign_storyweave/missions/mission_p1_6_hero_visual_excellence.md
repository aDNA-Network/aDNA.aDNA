---
plan_id: mission_p1_6_hero_visual_excellence
type: plan
title: "P1.6 — hero network visual: best-in-class"
campaign: campaign_storyweave
phase: P1.6
owner: stanley
status: in_progress   # authored 2026-07-08; Session 1 (O0→O4) begun 2026-07-08 by agent_rosetta
mission_class: design_excellence
executor_tier: opus
token_budget_estimated: "~250–450 kT across 2–3 sessions: reference-gather + options-eval + 2–3 interactive comps (incl. one WebGL) + operator pick + SSR/enhancement build + perf-fixture + gates + ship. Multi-session by design — gate at each phase."
created: 2026-07-08
updated: 2026-07-08
last_edited_by: agent_rosetta
tags: [plan, storyweave, hero, graph, visual, webgl, canvas, brand, p1_6]
---

# Mission: P1.6 — the hero network visual, best-in-class

> **Read this cold.** This mission is authored to be executed by a fresh agent after a context clear. Everything you need is here or linked. Persona: **Rosetta**. Campaign governance: `how/campaigns/campaign_storyweave/CLAUDE.md`. Start at **O0**.

## Why this mission exists
The home hero's **network graph is the brand / story / ethos centerpiece** — "the network as the hero," the feeling of a *living, growing network you want to belong to.* The operator's directive: make this visual element **as high-quality and visually compelling as possible**, and they are **explicitly open to JS-rich solutions (Canvas / WebGL) if they raise the ceiling** — this is the one place on the site where extra production value is warranted. This is a deliberate, multi-session excellence pass (the operator's standing "plan-carefully-before-a-big-effort" preference); do **not** rush a v1 into prod.

## Where we are (state at authoring, 2026-07-08)
- **Direction A (graph-as-hero) is built + gate-green (313) + committed (`4af07c2`) but NOT deployed.** Prod still shows the earlier **image-led** hero (coherent — keep it live as the interim). Do not deploy the current dense v1; **this mission's output is what deploys.**
- **The aesthetic north star** is the constellation exploration: **`https://claude.ai/code/artifact/816d2b30-ce26-47cc-8093-078798c1818f`** (source preserved at `../artifacts/hero_constellation.html`) — glowing vault-orbs around the cyan aDNA core, cyan↔purple relationship arcs with flowing light, a breathing core pulse, forming seed-nodes at the edges ("+53 forming · your vault?"). Toggle Motion→Lively to feel it. **This proves the *feeling* we want; it is Canvas-2D and is the T2 reference.**
- Prior direction spikes (context): the hero-direction lab `https://claude.ai/code/artifact/8cdc28a9-25a0-415d-a3d5-9fa5d951787c`; the graph-layout lab `https://claude.ai/code/artifact/24faa360-f618-422f-a36c-1efc11b232ba`.
- **Current site implementation (the v1 to surpass):**
  - `scripts/build_graph_svg.mjs` — emits `site/src/assets/vaults_graph.svg` (full 68-node `/vaults/graph`) AND a **hero-mode** compact connected-only `site/src/assets/hero_graph.svg` (15 vaults · dense labeled chips — the thing that reads "diagram, not living network").
  - `site/src/components/sections/HomeHero.astro` — the **home-only** graph-led variant (opt-in `heroGraph` prop; `/network` + `/commons` stay image-led, zero-diff), the pixel-art demoted to a dimmed full-bleed **ground**, a small drift enhancement script.
  - `site/src/pages/index.astro` — passes `heroGraph`.
  - Graph data source: `site/src/data/vaults.json` (`.vaults` + `.edges`; 15 connected / 53 unlinked / 68 total).

## The core decisions this mission must make (via comps → operator pick)

### Axis 1 — rendering tier (the JS door is open)
| Tier | What | Ceiling | Cost / risk |
|---|---|---|---|
| **T1** | SSR SVG + progressive CSS/JS motion | good | tiny · no-JS-beautiful · a11y-native · fast |
| **T2** | **Canvas-2D** enhancement over an SSR baseline (the north-star exploration) | high | moderate · hand-rolled (no lib) · needs a11y twin + no-JS baseline |
| **T3** | **WebGL / Three.js** (or `cosmograph` / `react-force-graph` / `sigma.js`) | highest (bloom · depth/3D · GPU particles · physics) | heavy bundle · perf risk · a11y/no-JS fallback · "tech-demo" risk |

**Strongly recommend the answer is a *hybrid*, whatever the tier:** ship an **SSR static baseline** (no-JS / first-paint / a11y / SEO) and **upgrade to the rich JS visual when JS is present.** The question the comps answer is *which tier the enhancement lives at.* Working hypothesis: **T2 (Canvas) is the sweet spot** — the exploration already looks best-in-class, needs no heavy dependency, and stays in perf budget; build **one T3 (WebGL) comp anyway** to see the true ceiling before deciding.

### Axis 2 — ambient portrait vs. interactive doorway
Is the hero a **living portrait** (beautiful, ambient, non-interactive) or the **actual doorway into the network** (hover a node → highlight + vault name; click → the vault page; drag to explore; the hero == a live mini-map of `/vaults/graph`)? Interactivity strongly serves the *belonging / "explore the network"* ethos, but adds a11y + perf + complexity. Decide deliberately; a middle path (ambient by default, gently interactive on hover) is viable.

### Axis 3 — the "growing network" narrative (the heart of the ask)
How do we *show* "alive and growing, and you could be part of it"? Options to weigh: forming seed-nodes at the edges (in the exploration) · nodes/edges appearing over time · a "your vault?" affordance wired to Get-Started · the +53-forming → 68-total story · a subtle "live" signal. **Guardrail:** honest — no fake live-ness or inflated numbers (the Movement-Skeptic gates the vibe; register = warm / calm / honest, not hype).

### Axis 4 — cross-surface cohesion
Decide the relationship between the hero visual and the other three graph surfaces: `/vaults/graph` (the P2 radial SSR SVG), `/network`, and the home §1 `NetworkDiagram.astro`. One shared "graph language" across surfaces, or a distinct signature hero portrait + simpler diagrams elsewhere? (Cohesion is a brand asset; don't let the hero become an orphan.)

## Constraints & gates (honor; flag any you'd renegotiate — get operator sign-off, don't self-approve)
- **gate-4 (a11y / axe, dark + light):** 0 violations on `/`. Canvas/WebGL are not accessible on their own → ship an **a11y text-twin** (a visually-adjacent or visually-hidden real node list, or keep the SSR SVG's `role="img"` + `<title>`/`<desc>` behind the enhancement — mirror how `/vaults/graph` does its node-list twin).
- **gate-9 (responsive 320–1440):** no horizontal overflow; a real mobile treatment (the graph likely simplifies or scales on small screens).
- **gate-11 (hero imagery):** the home hero currently keeps a *visible* `<Picture class="hero-stage-img">` (16:9 source, pixel-art alt, AVIF+WebP) as the dimmed ground — this passes gate-11. Keep it (also adds warmth), **or** renegotiate gate-11 with the operator if the new visual wants the frame to itself. `site/tests/gates/gate-11-hero-banner.spec.ts`.
- **gate-10 + gate-19 (perf / Core-Web-Vitals):** **LCP < 2.5s · CLS < 0.1 · Performance ≥ 90**, asserted against **committed fixtures** (`site/tests/gates/fixtures/lighthouse_*`). Current home has huge headroom (LCP ~0.45s, Perf 100). A WebGL bundle (~100–500 KB) or heavy canvas init **can** blow this — **measure with a real Lighthouse run, keep the enhancement lazy / below-the-LCP-critical-path / `client:idle`-style, and regenerate the fixtures** (never just relax the budget without operator sign-off). This is the main risk for T3.
- **`prefers-reduced-motion`:** all motion off; the still frame must be beautiful and complete.
- **no-JS baseline:** the page is never blank/broken without JS — the SSR baseline renders a legible, on-brand static graph.
- **Register:** warm · calm · honest (~55/45). The Movement-Skeptic gates every vibe change — the goal is *evocative + credible*, not a flashy tech demo.

## Objectives (phased — gate with the operator between phases)
| # | Objective | Output | Gate |
|---|-----------|--------|------|
| **O0** | Re-orient: open the 3 artifacts, read this + `HomeHero.astro` + `build_graph_svg.mjs` + the gate specs; confirm scope with the operator | shared understanding | — |
| **O1** | **Reference-gather** best-in-class network/graph heroes (`aDNA.aDNA/how/skills/skill_reference_inspection.md`) — see starter list below; extract what makes each compelling + on-brand-adaptable | a reference set + a design-guidance synthesis | — |
| **O2** | **Options eval** — tier (T1/T2/T3) × axes 2–4 × cost × perf × a11y × brand-fit → a recommendation | options memo | — |
| **O3** | **Build 2–3 high-fidelity interactive comps** (Artifacts): a polished **T1**, the refined **T2** constellation (evolve `hero_constellation.html`), and **one T3 WebGL** — real copy, real data, on-brand, responsive, reduced-motion-safe; headless-verify each (T0 harness) | comps + a recommendation note | — |
| **O4** | **Operator picks** the direction (quality vs. cost vs. perf) + resolves axes 2–4 + the gate-11 posture | ratified direction | ⛩ operator |
| **O5** | **Build into the site** — the SSR baseline + the chosen JS enhancement + the a11y twin; regenerate `hero_graph.svg`; wire perf-lazy loading; keep `/network`+`/commons` zero-diff | the real hero | — |
| **O6** | **Gate + perf** — `sync:graph` → `astro build` → full `npm run test:gates` green; **run a real Lighthouse pass on `/` and regenerate the gate-10/19 fixtures** (must stay in budget); headless before/after (desktop+mobile, both themes) | gate + perf green | — |
| **O7** | **Ship** — present before/after + gate/perf status at the operator **ship-gate**; deploy `npx astro build` → `VERCEL_TOKEN=$SS_VERCEL_TOKEN vercel --prebuilt --prod` (redact) | live | ⛩ operator |

## Starter reference exemplars (O1 — study, don't copy)
Network/graph/constellation heroes worth dissecting: **Linear** (calm gradient + subtle motion), **Vercel / Pinecone** (technical-but-warm hero motion), **Neo4j Bloom** + **Obsidian graph view** (graph-as-identity), **Cosmograph** + **`react-force-graph`** + **`sigma.js`** galleries (GPU graph rendering at scale), **three.js** example gallery + shader-art constellation sites (bloom / particle fields / depth). For each: what makes it *feel* alive + premium, and what's adaptable to the Tokyo-Night + SS-Ghibli + warm/honest register (not a cold tech aesthetic).

## Standing-order compliance
- **Instrument = headless T0 harness** (`scripts/visual_capture.mjs` + `--axe`; run it **from the repo root**, not `site/` — a known resolver quirk) per `[[doctrine_visual_inspection]]`. Every visual claim cites a screenshot; motion claims cite the interactive Artifact.
- **Planning→build boundary:** `site/` edits only inside O5+ (after the O4 pick). Comps (O3) are throwaway Artifacts, not `site/` edits.
- **Git:** local-first, explicit-path staging, `pgrep -x git` guard, gitleaks pre-push, push operator-gated (aDNA.aDNA authorized-clean).
- **AAR at mission close** (SO#5); per-phase operator gates (SO#1); token budget above (SO#11).
- **Ship-per-phase + operator ship-gate** each deployable increment (campaign convention 4).

## Definition of done
The live home hero carries a **best-in-class living-network visual** that reads as *the brand* — evocative, premium, and honestly "a growing network you can join" — with an **honest no-JS baseline**, **full `test:gates` green**, **perf/CWV in budget (gate-10/19)**, a11y-complete, `/network`+`/commons` still zero-diff, and the operator's sign-off at O4 + O7.
