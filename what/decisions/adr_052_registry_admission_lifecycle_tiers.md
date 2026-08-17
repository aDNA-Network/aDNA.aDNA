---
type: adr
adr_number: "052"
title: "Registry admission standard, lifecycle tiers, and the public-projection policy"
status: proposed
created: 2026-08-16
updated: 2026-08-16
last_edited_by: agent_rosetta
campaign_id: campaign_haussmann
supersedes: ""
superseded_by: ""
tags: [adr, haussmann, registry, tiers, d2, d7]
---

# ADR-052 — Registry admission + tiers + projection policy (stub)

## Status

**Proposed** — space fixed at genesis; **§admission RULED at DP4** (below, operator 2026-08-16); the tier
model completes at P2.4, where the full ADR ratifies.

## §admission — DP4 ruling (operator, 2026-08-16, P1-wave session)

**Minimal card, all three.** The confidential-adjacent vaults (**aiLP-Dataroom.aDNA** · **CakeHealth.aDNA** ·
**PercySleep.aDNA**) **stay listed** — the registry count stays true — but the projection emits a **minimal
card**: identity + class + status + persona only. Notes, taglines, links, phase, headline state, and
relationship detail are suppressed **at the generator** (`MINIMAL_CARD_VAULTS` + `listing: "minimal"` in
`scripts/build_vaults_data.mjs`), so no downstream surface — pages, cards, graph, llms, search blobs — can
leak engagement detail. Templates render the honest reason: *"Listed with a minimal card — private
engagement."* Escalation path: if even a NAME becomes sensitive, the row moves to removal by operator
ruling (per-row, recorded here). Ruled via `AskUserQuestion` at the P1.3 O3 gate; implementation commit
rides the same mission.

## Context

74 entries in mixed lifecycle states render undifferentiated (genesis 56 / pending 10 / active 7 / genesis_stub 1, shown raw) `[D H4]`; "quantity of entries is not evidence of network health; it is evidence of a low bar for entry" (anti-pattern 7.4). 58/74 pages leak internal language via the projection's `note`-field fallback `[D H13]`. **Confidential-adjacent vaults are listed publicly** (aiLP-Dataroom two-party MAX-TRUST; CakeHealth private clinical; PercySleep org-graph) `[D F7]` — no admission policy exists.

## Decision space

1. **§admission (DP4, early)**: what earns a public listing at all — options per sensitive row: remove from projection · list with minimal non-descriptive card ("private engagement — details not public") · list with disclosure. Default recommendation: **the middle path is honest and safe**; removal where even the name is sensitive (operator per-row).
2. **Tier model**: derived-not-narrated tiers from existing data (e.g. `flagship/active` [live repo or site + current sync] · `building` [active status] · `seed` [genesis] · `pending`), each with a visible badge + one-line meaning; "74 vaults" always contextualized by the tier split.
3. **Card floor**: minimum honest card (name, class, tier, one register-safe line, honest-absent for the rest); below-floor entries render the floor, never blanks.
4. **Projection contract**: extends ADR-023 — public fields enumerated; leak classes excluded structurally; the JSON endpoint (P3.2) serves exactly this projection.

## Recommendation

Middle-path admission default + derived 4-tier model + the floor; hand-tiering prohibited (KW-14).

## Consequences

The registry becomes an honest instrument that scales; H4/H13/N8 close structurally; Hestia's data lane gets a clear ask (taglines/cards).

## Ratification

- **Decision:** _§admission pending DP4 (P1.3); tiers pending P2.4_ · **Ratified-by:** _pending — Stanley (operator)_ · **Date:** _pending_ · **Status:** **proposed**.
