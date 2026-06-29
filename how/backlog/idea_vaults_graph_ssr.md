---
type: backlog
idea_class: follow_on
title: "SSR-prerender /vaults/graph to static SVG (A-06)"
created: 2026-06-28
updated: 2026-06-28
last_edited_by: agent_stanley
status: open
source: campaign_looking_glass (M2 finding A-06; DP3-deferred 2026-06-28)
tags: [backlog, follow_on, website, craft, performance, a11y, looking_glass, a-06]
---

# Follow-on: SSR-prerender `/vaults/graph` to static SVG (A-06)

**Origin.** Operation Looking Glass M2 finding **A-06** (High severity / craft). **DP3-deferred** by the operator 2026-06-28 (the L-effort "swing" item — out of the lean M4 bounded set; queued here as the #1 craft follow-on).

## The finding

`/vaults/graph` renders its federation topology **client-side** via Mermaid (mermaid.core ~600 KB + cytoscape ~442 KB + katex ~259 KB). It is simultaneously:
- the **Performance laggard** (Perf ~83 / LCP ~4.06s live — the site's worst page),
- an **a11y no-JS gap** (empty container without JS; topology lives in a `data-chart` attr — agent-reachable, but not rendered for no-JS humans), and
- the **least-crafted visual** versus the bespoke SSR homepage `NetworkDiagram`.

## The fix

**SSR-prerender the graph to a static SVG at build** (data-independent — the homepage `NetworkDiagram` already proves the team can SSR a diagram). One change lifts three axes at once: Performance (drop the client JS payload), a11y (real rendered SVG for no-JS), and Design (bespoke craft to match the homepage).

## Why deferred (not dropped)

- **L-effort** — the single biggest lift in the M4 candidate set; by the lean metric (fidelity-impact ÷ effort) it scored lowest (1.7). The campaign's telos is *fidelity*; A-06 is *craft/perf*.
- The operator ruled **defer** at DP3 to keep M4 lean/single-session and fidelity-first.

## Disposition

A dedicated craft cycle (or route via STR / a `Websites.aDNA` build pass). Self-contained, well-isolated SSR work. Pairs naturally with the deferred concept-route CLS item (A-07) as a "graph + concept craft" cycle. Honor pt19 + the Websites carve; coordinate deploy by memo.
