---
type: adr
adr_number: "049"
title: "IA model: one audience architecture, nav within doctrine"
status: proposed
created: 2026-08-16
updated: 2026-08-16
last_edited_by: agent_rosetta
campaign_id: campaign_haussmann
supersedes: ""
superseded_by: ""
tags: [adr, haussmann, ia, navigation, d2]
---

# ADR-049 — IA model + audience-branch disposition (stub)

## Status

**Proposed** — decision space fixed at genesis; content produced by mission P2.2 (after ADR-048), ratified at **DP5**.

## Context

The same ~5 audiences are served by up to three URL branches each — `/researchers`-style top-level (3 pages) + `/adopters/adopter-*` (5) + `/use-cases/*` (6), with 4 duplicate `<title>` pairs `[D inventory §7]` — audience-segment IA as a substitute for positioning (anti-pattern 7.7). Primary nav sits at the 8-item doctrine ceiling with a dual hero CTA `[R Berthier]`. Meanwhile reachability is genuinely excellent (zero orphans; 10/10 high-value ≤2 clicks) — the skeleton is sound; the audience layer is the debt.

## Decision space

1. **Canonical audience surface**: consolidate to `/use-cases/*` (narrative, already richest) vs `/adopters/*` (persona-profile shape) vs fold into positioned sections — the losers 301.
2. **Segment pages** (`/researchers` etc.): retire-with-redirects vs retain as campaign landers *demoted from primary nav* (7.7's legitimate use, post-positioning).
3. **Nav set** (≤7): which of the current 8+More survive; where Community/Commons sit.
4. **CTA law**: 1 primary + 1 secondary per front_page_doctrine.
5. **Startups slug**: `/startup-first-hour/` label/slug mismatch resolved.

## Recommendation

Consolidate to one narrative audience surface; demote segments to unlisted landers; nav to ~6 (per the dossier median 5, range 3–7); decided by comps + ranker at P2.2 O1.

## Consequences

~8–14 URLs 301 (P2.1's map absorbs them); duplicate titles disappear; the audience story is told once, well.

## Ratification

- **Decision:** _pending P2.2_ · **Ratified-by:** _pending — Stanley (operator)_ · **Gate:** DP5 · **Date:** _pending_ · **Status:** **proposed**.
