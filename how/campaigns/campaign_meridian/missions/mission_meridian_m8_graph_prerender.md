---
type: mission
mission_id: mission_meridian_m8_graph_prerender
campaign: campaign_meridian
status: completed
executor_tier: opus
token_budget_estimated: 70
token_budget_actual: 78
created: 2026-07-06
updated: 2026-07-06
last_edited_by: agent_rosetta
tags: [mission, meridian, p3, site, a06]
---

# M8 — A-06 `/vaults/graph` pre-render spike

**Looking Glass A-06** (deferred L-effort, re-scoped M): convert the `/vaults/graph` topology from a
**client-rendered Mermaid island** (runtime JS; invisible without JS; a perf + a11y + design cost) to an
**authoring-time pre-rendered static SVG committed to the repo** — same pattern as the sibling data
scripts (ADR-023 Clause A: regen at authoring time via an npm script; CI/Vercel builds consume the
committed artifact). **NO new build-pipeline steps, NO new dependencies.** HARD-BOXED + SEVERABLE;
site/-only (+ `scripts/` + this mission file).

## Objectives

1. **Render offline** — `scripts/build_graph_svg.mjs`: loads the local `mermaid.min.js` inside a
   Playwright-chromium page (fully offline, no CDN, `securityLevel:'strict'` → CSP-safe output),
   renders `site/src/data/vaults_graph.mmd` → SVG. Both mermaid + `@playwright/test` were already in
   `site/` (zero new deps). ✅
2. **Post-process for the site** — real selectable `<text>` (`htmlLabels:false`; strip the `.mmd`'s
   `<sub>` persona tags in-memory, keep `<br>`); strip fixed width/height → `viewBox` + `max-width:100%`;
   `role="img"` + `<title>`/`<desc>` (accessible name); **theme adaptation** — edges/arrowheads/orphan
   cluster inherit `currentColor` (reads on BOTH the dark default + light), node chips keep their
   self-grounding `.mmd` classDef fills + black text. ✅
3. **Commit the artifact** — `site/src/assets/vaults_graph.svg` (93 KB, 83 `<text>`), inlined in the page
   via a Vite `?raw` import (the site's established static-SVG convention; zero runtime JS). ✅
4. **Convert the page** — `site/src/pages/vaults/graph.astro`: drop the `<MermaidDiagram>` island usage +
   its import, inline the SVG in a `.mermaid-figure`/`.mermaid-container` box (island CSS brought inline),
   keep the round-trip click-nav `<script>` (pointer enhancement — the pre-rendered `g.node` groups exist
   for it) + the keyboard/AT node-list twin. The island is **untouched** (still serves 13 docs pages). ✅
5. **npm script** — `"sync:graph": "node ../scripts/build_graph_svg.mjs"` (mirrors `sync:vaults`). ✅
6. **Gate** — `site/tests/gates/gate-22-graph-ssr.spec.ts` (auto-discovered by the testDir glob): inline
   `svg[role="img"]` + `<title>` + `aria-labelledby`, no `data-chart` client hook, ≥ 30 real `<text>` +
   no `<foreignObject>`, and **renders with `javaScriptEnabled:false`**. ✅
7. **Verify** — `npm run sync:graph` (93 KB, < 500 KB budget; deterministic + idempotent across re-runs);
   both-theme render inspected via headless screenshots under the real tokens; `npx astro check`. ✅

## Outcome — **SHIPPED**

- **SVG**: 93 KB · 83 `<text>` labels · 68 vaults / 14 edges · `role="img"` + `<title id=…>`/`<desc>` +
  `aria-labelledby` · `viewBox` + `max-width:100%` (no fixed w/h) · theme-adaptive (`currentColor` edges/
  cluster; self-grounding chips) · CSP-safe (no `<script>`/`on*=`/external refs; only the SVG namespace URI).
- **No-JS story**: **before** — a JS-disabled visitor saw no graph (the island rendered mermaid client-side;
  the `<noscript>` showed only the `.mmd` source text). **after** — the full topology renders as inline SVG
  with selectable node text, no runtime JS. Verified in a `javaScriptEnabled:false` context.
- **Idempotency**: deterministic (fixed svg id `vaultsGraph`, deterministic dagre); the script writes only
  when the render changes — 2nd/3rd runs report "no change".
- **`astro check`**: 3 errors, **all pre-existing** (`Header.astro:88`; `graph.astro:222` node-twin `map((v))`
  implicit-any + `:278` `container` possibly-null in the round-trip script — both verbatim-unchanged by M8).
  My additions (`?raw` svg import, `set:html`, `<figure>`, CSS) introduced **0** new errors. (astro-check
  errors don't block `astro build`; the site built clean before.)

## AAR

- **Worked**: The offline render is robust — the esbuild IIFE `mermaid.min.js` exposes the API at
  `window.__esbuild_esm_mermaid_nm.mermaid.default`; a fixed svg id makes the whole render byte-idempotent.
  Post-processing by **appending id-scoped `!important` rules** (mermaid's own colour rules are id-scoped &
  non-important) beat fragile per-element regex. `?raw` + `set:html` is the site's own icon convention.
- **Didn't**: Couldn't improve the extreme graph aspect ratio — the 53 unlinked vaults land in **one dagre
  rank** (~14 000 px wide → scales to a thin band under `max-width:100%`). ELK would grid them, but it's a
  **new dependency** (forbidden) → left as-is. This is **pre-existing** (identical to today's client render),
  faithfully reproduced — not a regression, and out of this spike's box.
- **Finding (marquee)**: `htmlLabels:false` is required for real/selectable `<text>` (and the gate), but
  mermaid's text renderer honours `<br>` yet prints `<sub>…</sub>` **literally**. Fix = strip `<sub>`
  wrappers from the in-memory chart only (persona drops to its own `<br>` line); the committed `.mmd` is
  untouched. Base-theme defaults (near-white cluster fill, near-black cluster text) would be **broken on the
  dark default** — the `currentColor` post-process is load-bearing, not cosmetic.
- **Change**: A-06 was scoped as "convert to static SVG"; the real work was **80 % post-processing** (theme
  currentColor, `<sub>` strip, a11y injection, width strip) and **20 % render plumbing**. The mission's
  approach note held up end-to-end; the only deviation was the `<sub>`-strip discovered at render time.
- **Follow-up**: (1) Orphan-row aspect ratio — candidate future lift in **`build_vaults_data.mjs`** (`.mmd`
  generation: chunk the unlinked set into rows) or an ELK layout if a dep is ever sanctioned; note-worthy to
  `idea_vaults_graph_ssr`. (2) The round-trip click-nav is preserved as a **pointer** enhancement; the
  keyboard/AT path stays the node-list twin. (3) Regenerate the SVG with `npm run sync:graph` whenever the
  `.mmd` changes (e.g. after `sync:vaults`) — an authoring-time step, never CI.

**Delivered 2026-07-06** — SHIPPED. No git ops (orchestrator stages + commits the file set below).

### File set (orchestrator stages exactly these)
- **created**: `scripts/build_graph_svg.mjs` · `site/src/assets/vaults_graph.svg` ·
  `site/tests/gates/gate-22-graph-ssr.spec.ts` · this mission file
- **modified**: `site/package.json` (+`sync:graph`) · `site/src/pages/vaults/graph.astro`
