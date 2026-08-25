---
type: design_note
campaign: campaign_haussmann
mission: mission_haussmann_p3_1_md_twins
objective: O0
title: "Twin derivation — three tiers, one emitter, one manifest"
created: 2026-08-20
updated: 2026-08-20
status: active
last_edited_by: agent_rosetta
tags: [design, haussmann, p3_1, md_twins, d10, agentic]
---

# Twin derivation — three tiers, one emitter, one manifest

O0's question, as the mission posed it: *what has a canonical markdown source vs needs rendering-to-md.*
The answer is three tiers, because the site has three genuinely different kinds of page — and the
mission's stated method covered only the first (see the mission's "O0 correction").

## The inventory `[D]`, counted this session

| Tier | Set | Count | Has markdown source? |
|---|---|---|---|
| **A** | `docs` (72) · `spec` (21) · `guides` (10) · `reference` (10) · `changelog` (5) · `proposals` (2) | **120** | yes — `entry.body` |
| **B** | `/vaults/<slug>` ×74 + `/vaults` index | **75** | no — but a single structured source (`vaults.json`) |
| **C** | bespoke `.astro` prose pages | **~34** | no — prose lives in the component |
| | | **~229** | |

Note the collection count: the mission said "the 4 content collections." There are **6** — `proposals`
landed at P3.5 on 2026-08-20, four days after this mission was written. Recon-at-execution catching its
own campaign's freshest work.

## Tier A — from `entry.body`

Highest fidelity: the twin *is* the source the HTML renders from, so there is no drift channel to guard.

MDX hazard, measured rather than assumed: **15 of 113** files carry components, and every one is a
diagram or image embed —

```
<MermaidDiagram   ×12
<TriadDiagram     ×2
<ConvergenceFunnel ×2
<Image            ×2
<DiagramName      ×1   (prose reference, inside a code sample)
```

Handling: `MermaidDiagram` unwraps to a fenced ` ```mermaid ` block — which is *better* markdown than the
rendered HTML, since the diagram source survives as diagram source. The remaining four component kinds
degrade to a labelled line naming what stood there. **State absence, never invent it** — the same rule
`emit_llms.mjs` applies to its own missing graph rows.

## Tier B — from the same projection the page renders

The vault pages are data, not prose. The twin reads the identical `vaults.json` projection the page
component reads, so the two cannot disagree.

**Honor pt19** — read only. Never `sync:vaults`, never hand-edit the data. Registry *data* is Hestia's
lane; this campaign fixes projection *code*.

**KW-14** — every count in a twin is derived from the data, never typed. The failure mode this avoids is
the one already live on the graph page, where hero copy narrating `74` sits beside an SVG rendering `68`.

## Tier C — from the rendered HTML

No markdown source exists, so the only zero-drift derivation is the artifact itself. Extraction runs as an
`astro:build:done` step over the built `<main>`, modelled on the existing `stripHtmlComments()` integration
in `astro.config.mjs` — which already walks **both** `dist` and `.vercel/output/static`, so the work cannot
be defeated by hook ordering. That `walk()` shape is reused rather than re-written.

**Why not authored sidecars.** A hand-written twin per bespoke page is a second place the page's prose
lives, and the campaign's constraint is explicit: *twins derive from the same single-source content as
HTML (no drift channel)*. A sidecar is exactly a drift channel — it would pass on the day it was written
and rot silently, and the campaign has a live instance of precisely that failure (a fabricated transcript
cut from one page while the same false mechanism stayed asserted twice in the surrounding prose).

**What extraction costs, stated honestly.** Rendered-HTML extraction gives a slightly rougher twin than
canonical markdown — nav chrome must be excluded, and component-heavy layouts flatten. That is the price
of the no-drift guarantee, and it is the right trade: an agent reading a rough-but-true twin is better
served than one reading a polished twin that stopped matching the page.

## The manifest is the single lock

`site/src/data/twin_manifest.json` is **emitted, never typed**. Every downstream consumer reads it:

```
twin_manifest.json ──┬──> inject_negotiation.mjs   (one exact route per twin path)
                     ├──> llms-full.txt.ts         (the corpus concatenation order)
                     └──> gate-17-agentic.spec.ts  (fixtures, not literals)
```

This satisfies **KW-8 / FR-K** (no literal-pinned live data in tests — derive fixtures from the build
snapshot) and gives the **same-diff law** (ADR-057) a single place to stay coupled. It is also what makes
this one emission *lock* rather than three ad-hoc paths, which is the form pattern **A1** is owed to
WebForge in.

## The pointer block

Front-loads every twin. Visible text, not an HTML comment — nothing about a machine surface should be
hidden from the human who opens it:

```
> Markdown twin of https://adna.network/learn/concepts/triad
> Index: https://adna.network/llms.txt · Full corpus: https://adna.network/llms-full.txt
> State is a build-time snapshot generated 2026-08-20; nothing here is live.
```

Line 3 is WebForge **P12 / FR-N / N2**'s snapshot-honesty line, adopted verbatim in shape from
`WebForge.aDNA/what/lib/gates/emit_llms.mjs`. The pattern register flags its absence from this site's
`llms.txt` as a live parallel-implementation gap; adopting it here closes that half without forking the
tool. It also matters on its own terms: `llms.txt` narrates a live-sounding vault count, and a reader has
no way to know how old it is.

**Convention 4 does not bar this.** That convention's `lighthouse_profiles.json` clause is marked
unfollowable (0 hits vault-wide). `emit_llms.mjs` **is** present and readable, checked this session — an
unfollowable clause next door is not evidence that this one is unfollowable.

## Negotiation — exact routes, not a blanket rewrite

Verified against the built tree: Build Output API **v3**, 45 routes, `handle: filesystem` at index **42**.

One route per twin path, generated from the manifest:

```json
{ "src": "^/learn/concepts/triad/?$",
  "has": [{ "type": "header", "key": "accept", "value": "(.*text/markdown.*)" }],
  "dest": "/learn/concepts/triad.md",
  "headers": { "Vary": "Accept" } }
```

**Why not one blanket `^/(.*?)/?$ → /$1.md`.** It would match paths that have no twin, and Vercel's
filesystem handler would then hand a negotiating agent a **404 where it previously got working HTML** —
strictly worse than not negotiating at all. A negotiation route that breaks the non-negotiated case is
the twin-side echo of P2.1's redirect bug, where a redirect fired in exactly the one URL shape the site
never emits.

`/?$` covers both slash forms in one route, matching what `inject_redirects.mjs` already does. Routes are
injected **before** index 42, and the placement invariant is **re-asserted on the way out rather than
trusted** — the discipline the sibling injectors already encode.

ETag differs for free: the twin is a different static object. Item 4's finding was that Vercel served one
cached object regardless of `Accept`, with the literal same ETag; serving a genuinely different object is
the fix, not an ETag manipulation.

## Corpus

`llms-full.txt` concatenates every twin in manifest order, keeping its current route list, vault taxonomy
and edge legend as the corpus header/TOC — **nothing is lost**, the index becomes the table of contents.
The name stays and becomes honest.

Worth noting so no one re-litigates it later: **both** AC branches ("a true full-corpus artifact" *or*
"renamed honestly + a full-corpus artifact added") require a real corpus. The corpus was always
mandatory; only the name was ever in question, and once the corpus exists the name is accurate.

## Discoverability (machine-eye item 12)

Item 12's sharpest finding: the string `llms` appears **zero times** across all 8 saved HTML pages.

| Surface | Change | Why there |
|---|---|---|
| `Footer.astro` | add `llms.txt` beside the existing `/rss.xml` link | already the site's machine-artifact shelf. ADR-049 caps *primary nav* at 7 and it is at 7 — the footer is not primary nav, so no cap pressure |
| `SEOHead.astro` | `<link rel="alternate" type="text/markdown" href="{twin}">` per page | makes the pointer **per-page and machine-readable**, not one footer link an agent must crawl to. This is the half that actually answers item 12 |
| `public/robots.txt` | comment naming both artifacts | where a crawler already looks |

## What this does not do

Registry JSON + `Dataset`/schema-dts → **P3.2** (whose scope already shrank: `Organization` + `sameAs`
shipped unremarked at P1.2). MCP server + `/.well-known/mcp.json` → **P3.3**, which this unblocks.
Copy/voice → **P4.5b**. ADR-056 ratification → the operator, at the P3 exit.
