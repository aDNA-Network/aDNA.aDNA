---
type: adr
adr_number: "056"
title: "The agentic-surface contract: twins, llms artifacts, registry JSON, MCP server — versioned and self-conformant"
status: proposed
created: 2026-08-16
updated: 2026-08-16
last_edited_by: agent_rosetta
campaign_id: campaign_haussmann
supersedes: ""
superseded_by: ""
tags: [adr, haussmann, agentic, machine_legibility, d10]
---

# ADR-056 — Agentic-surface contract (stub)

## Status

**Proposed** — contract shape fixed at genesis; completed across missions P3.1–P3.3.

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

## Consequences

D10 climbs the anchor ladder legitimately; the strongest proof of the product thesis stops going unclaimed; every artifact has a drift-proof derivation.

## Ratification

- **Decision:** _contract above; details land P3.1–P3.3_ · **Ratified-by:** _pending — Stanley (operator)_ · **Gate:** P3 exit · **Date:** _pending_ · **Status:** **proposed**.
