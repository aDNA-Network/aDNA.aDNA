---
type: adr
adr_number: "054"
title: "Community integration model: prerequisites, the honest-state link, and the human-only line"
status: proposed
created: 2026-08-16
updated: 2026-08-16
last_edited_by: agent_rosetta
campaign_id: campaign_haussmann
supersedes: ""
superseded_by: ""
tags: [adr, haussmann, community, flux, d8]
---

# ADR-054 — Community integration model (stub)

## Status

**Proposed** — prerequisites named at genesis (P0.4 refines with Aspasia); the link GO/NO-GO is **DP7** (mission P3.4).

## Context

community.adna.network is live (Fluxer on third-party metal) but: zero aDNA branding (`<title>` "Fluxer"), **policy-naked** (no ToS/privacy/CoC — `legal.*` nulls verified two ways), approval-gated registration with captcha OFF (both drift from the vault's own plan), aliveness unverifiable from outside, and **no link in either direction** today `[D flux draft]`. Binding constraints: aDNALabs **ADR-025** (human-only surface until federation GA; agent-exchange framing fires ADR-009 T1) `[R]`; Fluxer **SO#8** (no LLM syndication of conversations; agents always visibly disclosed) `[R]`. Fluxer.aDNA's STATE is stale-wrong (P0.4 reconciles).

## Decision (proposed model)

1. **Prerequisites before any link** (all three, verified live): policy floor on the instance (ToS/privacy/CoC) + minimal aDNA branding + inside-aliveness confirmation by operator/Aspasia.
2. **Integration ladder**: NO-GO state = `/community` carries an honest "being prepared, not open yet" note (itself acceptable, indefinitely) → GO state = link **from `/community` only**, in the site's honest-state pattern (what it is, its early state, its rules), question-path routing stated → full first-class integration (shared design system, bidirectional nav, ladder-mapped surfaces) **only at federation GA** per ADR-025.
3. **Copy law**: every community sentence register-verifiable; no activity implied that isn't; agent participation, if any, disclosed per the pinned-notice doctrine.

## Consequences

The site can never be caught linking a ghost town or implying an agent-exchange surface; Aspasia's lane owns the instance work at its own pace; the fallback is honest rather than embarrassing.

## Ratification

- **Decision:** _model above; GO/NO-GO pending DP7 (P3.4)_ · **Ratified-by:** _pending — Stanley (operator; Aspasia co-sign on instance-side facts)_ · **Date:** _pending_ · **Status:** **proposed**.
