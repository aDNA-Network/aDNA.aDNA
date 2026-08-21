---
type: adr
adr_number: "056"
title: "The agentic-surface contract: twins, llms artifacts, registry JSON, MCP server — versioned and self-conformant"
status: proposed
created: 2026-08-16
updated: 2026-08-20
last_edited_by: agent_rosetta
campaign_id: campaign_haussmann
supersedes: ""
superseded_by: ""
tags: [adr, haussmann, agentic, machine_legibility, d10]
---

# ADR-056 — Agentic-surface contract

## Status

**Proposed** — contract shape fixed at genesis; **clauses 1, 2 and 7 built and evidenced at P3.1
(2026-08-20)**; clauses 3–6 land at P3.2–P3.3. Ratification is the operator's at the **P3 exit**,
not the builder's (§7.7) — a clause being implemented is not a clause being accepted, and this ADR
stays `proposed` until it is signed even though most of the machinery below is now live.

## Context

The machine layer is present-but-incomplete (H8 reframed): llms.txt curated but **never linked from any page**; llms-full.txt a 2 KB index wearing a corpus name; `.md` twins 404 while 29 legacy links expect them; no registry JSON (4 paths 404); no content negotiation (byte-identical ETag); JSON-LD shallow (0 Organization site-wide); no MCP server; self-conformance narrated on one deep page, not structural `[D machine_eye]`. D10 = 3/5; the thesis-critical anchor-5 items are all absent. Verified patterns: MCP's twins + pointer block; Mastra's npx docs-server; PEPs' advertised JSON; Vercel's first-party negotiation.

## Decision (proposed contract)

1. **Twins**: every content URL resolves `.md`, generated from the same single source as HTML (zero drift channel), each front-loading the llms.txt pointer block. `Accept: text/markdown` negotiation on prerendered pages.
2. **llms artifacts**: llms.txt = the curated index, linked from site chrome + robots comment; llms-full.txt = a true full corpus (or renamed honestly).
3. **Registry data**: a versioned JSON endpoint serving the ADR-052 public projection; documented + advertised; consumers can pin the version.
4. **Structured data**: Organization+sameAs sitewide; Dataset on registry; TechArticle on docs; schema-dts-typed at build.
5. **MCP server**: npx-runnable over docs+registry (official TS SDK), published under the org scope; the homepage names the canonical agent entry point.
6. **Self-conformance is demonstrated *and stated***: a published machine-legibility conformance report (the 13-item checklist) + the homepage sentence — worded register-verifiably.
7. **Versioning law**: machine surfaces are contracts — breaking changes get versioned URLs + deprecation windows, never silent swaps.

## As built at P3.1 — clauses 1, 2, 7

*Recorded here because a contract that only ever states intentions is not a contract. Each row is
what shipped, not what was planned; `[D]` throughout, measured on the build of 2026-08-20.*

### Clause 1 — twins + negotiation

**221 twins, three derivation tiers.** The genesis wording said "generated from the same single
source as HTML," which quietly assumed every page *has* a markdown source. It does not — and all
ten of the machine-eye probes that scored this clause target bespoke `.astro` pages. The clause
holds; the derivation has three tiers rather than one:

| Tier | Set | Count | Derivation |
|---|---|---|---|
| A | the 6 content collections | 114 | `entry.body` — the source the HTML renders from |
| B | registry (74 vaults + index) | 75 | the same `vaults.json` projection the page reads |
| C | bespoke `.astro` prose pages | 32 | post-build extraction from the rendered HTML |

**Zero drift channel, by construction rather than by promise** — tier A *is* the source; tiers B
and C derive from the same projection / the built artifact. An authored sidecar was rejected for
being exactly the drift channel the clause forbids.

**Negotiation** is one exact Vercel route per twin, keyed on `Accept: text/markdown`, each carrying
`Vary: Accept`, spliced before `handle: filesystem`. Not a blanket rewrite: that would 404 every
path without a twin, turning working HTML into an error for the clients this clause exists to
serve. The ETag differs because the twin is a different object — the finding was one cached object
served for two requests, so serving a different object is the whole fix.

**Three routes have no twin, by decision**: `/404`, `/design-system` (its content *is* its
rendering), `/vaults/graph` (SVG geometry; its keyboard twin is `/vaults`). They do not advertise
one either — a pointer to a 404 is worse than no pointer.

### Clause 2 — llms artifacts

`llms-full.txt` is a true corpus: **~920 KB, 221 sections**, up from 2,476 B. The route list, vault
taxonomy and edge legend it used to be are retained as its table of contents, so the rewrite
dropped nothing. The name stays and is now accurate. *(Both branches the mission offered required a
real corpus regardless — the corpus was always mandatory; only the name was ever in question.)*

`llms.txt` is linked from the footer, named in `robots.txt`, and declared per-page via
`<link rel="alternate" type="text/markdown">`. The measure that scored this — the literal string
`llms` appearing **zero** times in page HTML — now reads 2 per page.

### Clause 7 — versioning law

The law is stated and, at P3.1, **not yet exercised**: no machine surface has had a breaking change
to version. Recorded plainly rather than claimed as satisfied. What P3.1 does add is the mechanism
the law needs — `twin_manifest.json`, emitted and never typed, is the single lock every consumer
(negotiation routes, corpus, gates) reads, so a future URL change has exactly one place to change
and a gate that notices.

**Adopted from WebForge FR-N / N2**: every machine surface carries a dated build-time-snapshot
line (`State is a build-time snapshot generated YYYY-MM-DD (UTC); nothing here is live.`). The
timezone is named because the first build stamped `2026-08-21` at 22:18 local on the 20th, and an
unzoned date on an honesty line invites the reader to catch it disagreeing with the changelog.

### What P3.1 does not settle

Clause 3 (registry JSON), 4 (structured data — note `Organization`+`sameAs` already shipped
unremarked at P1.2, so this clause is half-done by accident), 5 (MCP server), and 6 (published
conformance report + homepage sentence) are P3.2/P3.3 work.

## Consequences

D10 climbs the anchor ladder legitimately; the strongest proof of the product thesis stops going unclaimed; every artifact has a drift-proof derivation.

**Anchor-4 status after P3.1.** Three of anchor 4's four bullets were hard failures; twins,
machine-readable registry, and an advertised `llms.txt` were the named gaps. Twins and advertising
are now closed. The registry JSON endpoint is P3.2's, so **the anchor is not claimed here** — the
re-score belongs to P5.2 with fresh isolated scorers, not to the mission that did the building.
Claims move down to verifiability, never up to ambition.

## Ratification

- **Decision:** _contract above; details land P3.1–P3.3_ · **Ratified-by:** _pending — Stanley (operator)_ · **Gate:** P3 exit · **Date:** _pending_ · **Status:** **proposed**.
