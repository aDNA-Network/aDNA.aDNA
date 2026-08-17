---
type: adr
adr_number: "051"
title: "URL canonicalization: one slug law + a redirect map for every URL ever published"
status: proposed
created: 2026-08-16
updated: 2026-08-16
last_edited_by: agent_rosetta
campaign_id: campaign_haussmann
supersedes: ""
superseded_by: ""
tags: [adr, haussmann, urls, redirects, d2, d12]
---

# ADR-051 — URL canonicalization + redirect policy (stub)

## Status

**Proposed** — space fixed at genesis; completed by mission P2.1.

## Context

24/74 vault URLs are mixed-case (`/vaults/III.aDNA/`) beside 50 lowercase (`/vaults/terminal/`); wrong casing is a **hard 404 with no redirect** on the case-sensitive host `[D H6]`. The registry emits `vault_slug` verbatim. A previous slug migration left 29 broken internal links because no redirects were laid `[D B3]` — the cautionary precedent. The instrument requires a redirect map covering every URL ever published (D12.8).

## Decision space

1. **Slug law**: all-lowercase-kebab. Sub-question: keep the `.adna` suffix (`/vaults/adna.adna/`) vs drop it (`/vaults/adna/`) — decided by collision census across the 74 (display names keep their true casing in content; only URLs normalize).
2. **Redirect policy**: 301s permanent + additive-forever (a published URL never dies); map sources = the 24 casings + legacy snake_case/.md targets + astro.config legacy pairs + the Wayback CDX historical sweep (+ adna.dev where mappable).
3. **Enforcement**: wrong-casing probe gate; machine-predictability documented for D10 (agents can construct URLs from names by rule).

## Recommendation

Lowercase, suffix decided by census (drop it if collision-free — shorter, cleaner; keep if any collision), slugs derived in projection code (data untouched, pt19).

## Consequences

Zero-404 legacy surface; the D2/D10 "machine-predictable scheme" anchors unlock; external links stop rotting.

## Ratification

- **Decision:** _pending P2.1_ · **Ratified-by:** _pending — Stanley (operator)_ · **Gate:** P2 exit review · **Date:** _pending_ · **Status:** **proposed**.
