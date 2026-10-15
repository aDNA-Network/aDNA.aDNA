---
type: adr
adr_number: "064"
title: "The graph-exchange contract is a standard-side ecosystem spec (spec_graph_exchange.md) that cites Exchange.aDNA's owned objects and rules L2 rule-set custody — placement ratified 2026-08-25, text seated here"
status: proposed        # ⛩ drafted 2026-10-15 at ARCADE A1.1; the PLACEMENT was ratified as drafted 2026-08-25 (operator, aDNALabs S250); the spec TEXT + §5 custody ruling await the operator's §7.7 at G1
created: 2026-10-15
updated: 2026-10-15
last_edited_by: agent_rosetta
campaign_id: campaign_arcade
mission_id: mission_arcade_a1_1_spec_graph_exchange
supersedes: ""
superseded_by: ""
probe_date: 2026-10-15
tags: [adr, arcade, exchange, spec_placement, graph_exchange, l2_custody, adr_045, proposed]
---

# ADR-064 — Placement of the graph-exchange contract in the standard

> ⚠ **Number collision, stated once:** Exchange.aDNA has its own ADR-064 (the optional `display` block in `adna-manifest/v0`). Every ADR cited below is qualified by vault.

## Status

**Proposed** — drafted 2026-10-15. Two things are being recorded, with two different standings:

1. **The placement** (where the contract lives, what it cites, the four-field minimum, the ownership split) was **ratified by the operator on 2026-08-25** as drafted on 2026-07-11 — `coord_2026_08_25_berthier_to_rosetta_adr020_placement_RATIFIED.md`, in reply to `coord_2026_07_11_rosetta_to_berthier_exchange_graph_spec_placement.md`. That ratification is on aDNALabs' record (S250) and is **not re-asked** here; this ADR is the auditable "why here" the 07-11 draft said the placement would get.
2. **The spec text** (`what/specs/spec_graph_exchange.md` v0.1) and its **§5 L2 rule-set custody ruling** — the one ask of Exchange's 2026-07-11 memo the ratification did not cover — are **proposed** and await the operator's §7.7 at ARCADE G1.

## Context

- Terminal (2026-07-11, `vb_graph_exchange`) and the Exchange triad (2026-07-11, Themis/Mnemosyne, `ack_required: true`) each asked where the publishable-graph contract should live so that terminal, web face and substrate cite **one** standard-side name. This desk drafted the answer the same day and parked it; the park note's resume trigger (Refit M5) expired within 48 hours (aDNALabs F-S249-03). A courtesy ETA ask on 2026-08-03 went unanswered. The ratification arrived 2026-08-25/26. **Nothing was authored for seven more weeks**; meanwhile Terminal built two campaigns around the gate and the Exchange shipped its L2 runner with `RULE_SET_VERSION = "v0-proposed" — pending Rosetta`.
- At the 2026-10-15 situation review ([[situation_review_20261015]] A1.5–A1.7) the standard, its four ecosystem specs and 28 patterns were found to **never mention the Exchange**, while the operator named Exchange + Terminal the primary access points for builders.

## Decision

1. **`what/specs/spec_graph_exchange.md` is the ONE standard-side contract** for publish → discover → resolve → fetch of an aDNA graph as an artifact — a peer of the four ecosystem specs, seated beside them, consumed through `how/federation/exchange/` + `federation_ref` pinned `exchange-access/v1` (aDNA.aDNA ADR-045 placement; Exchange ADR-018/020).
2. **It cites, it does not rebuild**: `adna-manifest/v0` and `exchange-access/v1` (Exchange-owned), the L0–L3 ladder (Exchange ADR-020), and the M-S6 publish-path spec — **promoted to a cited transport annex** with a stable pin (`fd04532e`), per ruling ①.
3. **The publishable-graph minimum is four declarations**, each bound to an existing manifest field (identity · license · provenance · trust posture), with the **advisory-stays-advisory honesty clause** — per ruling ②; the standard mints no field.
4. **The ownership split** per ruling ③: Exchange = substrate; aDNA.aDNA = contract shape; Terminal = operator seat (verb shims, no publish verb); WebForge = web face.
5. **L2 rule-set custody** (new, proposed): **content is the standard's** (spec §5.1, versioned `l2_rule_set: v<N>`), **execution is the Exchange's** (`conformance.py`, non-blocking by law). v1 = what the runner already checks + the `license:` row (v8.12 fork step 1.5) + an advisory `adna_conformance:` row.

## Consequences

### Positive
- Terminal's `library clone → graph fetch` upgrade (Esplanade §2.4 trigger ②) and the alpha's ⌗ Exchange door can cite a real document; the Exchange can bump `RULE_SET_VERSION` off "proposed" on one signature.
- The standard gains its first written account of how a graph becomes an artifact others can trust — the seam ARCADE's later ADRs (065 estate position · 066 profiles) attach to.

### Negative
- A fifth ecosystem spec to keep in step with two ratified Exchange specs that move faster than the standard; mitigated by the pin table and the amendment rule in spec §2.
- The L2 v1 floor is deliberately thin; a reader may expect more. The honest floor is stated in the spec.

### Neutral
- The 2026-08-25 ratification's addendum ask (adopt a reciprocal drop-box) was **already answered by this vault's `who/coordination/inbox/`** (created 2026-09-10); recorded here so the ask is not re-answered.
- `WebForge.aDNA` is named as a citing face and "does not know it" (Berthier, 08-25); the A1.1 reply memo asks Berthier to carry one line, or this desk sends one at A1.4.

## Ratification

| Field | Value |
|---|---|
| **Decision** | Seat `spec_graph_exchange.md` v0.1 as drafted (clauses 1–4 = the 2026-08-25 ratified placement, recorded; clause 5 = the L2 custody split) |
| **Ratified-by** | *(pending — operator; an agent/persona is author/steward, never ratifier)* |
| **Date** | *(pending)* |
| **Status** | **proposed** |
| **Gate / session reference** | ARCADE G1 — `campaign_arcade.md` §5 |
| **Scope of authority** | this ADR + the spec's v0.1 text; Exchange's `RULE_SET_VERSION` bump is theirs on notice |
| **Pending co-signs** | none required; Exchange (Themis) may co-sign §5 by memo |
