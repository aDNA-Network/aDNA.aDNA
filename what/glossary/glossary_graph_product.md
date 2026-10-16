---
type: glossary_entry
created: 2026-10-16
updated: 2026-10-16
status: active
term: "Graph Product"
spec_section: ""          # not in the standard's text (v2.5); the minimum is spec_graph_exchange §3–§4 (accepted 2026-10-16); the framing is aDNA.aDNA ADR-065 §4 (proposed)
see_also: [lattice, federation, FAIR, access point, commercial home]
last_edited_by: agent_rosetta
campaign_id: campaign_arcade
tags: [glossary, exchange, graph_product, federation, arcade]
---

# Graph Product

## Plain-Language Definition

A graph product is a context graph that has been made **offerable to others**: packaged as one artifact, published through an exchange, and carrying the four things a stranger needs before trusting it — *who made it and which version*, *what they may do with it*, *where it came from*, and *how far to trust it*. Nothing about "product" implies a price. Most graph products are free; the word says the graph has crossed from "mine" to "findable and fetchable by you".

## Technical Definition

A graph built to the aDNA standard, packaged as a deterministic artifact (for `context-graph`, a flat `tar.gz` of the vault's git-tracked tree), and offered through an exchange conforming to [[what/specs/spec_graph_exchange|spec_graph_exchange]] with the **publishable-graph minimum** of §3 — **identity · license · provenance · trust posture**, each bound to a field the exchange's manifest already has (the standard mints nothing) — under the §4 **honesty clause**: advisory postures are rendered advisory and never as enforced, and conformance is *reported* (L0–L3), never certified. A graph product MAY additionally declare a **profile** of the standard with a release-integrity hash manifest riding inside the body (forward: aDNA.aDNA ADR-066). Where a market exists around graph products, its terms are **recorded, not enforced**, and the commerce belongs to the market and its [[what/glossary/glossary_commercial_home|commercial home]], never to the standard — the standard carries no prices, settlement, PHI or hosted service ([[what/decisions/adr_065_standard_position_two_estates|aDNA.aDNA ADR-065]] §4, §7). See [[what/patterns/pattern_federation_readiness|Federation Readiness]] for the checklist that gets a lattice to this threshold and [[what/patterns/pattern_fair_envelope|FAIR Envelope]] for the metadata the provenance row rests on.

## Usage Examples

- "Three real graphs are published on L1 as graph products; no fleet vault has fetched one yet" — the tense matters: *published* is `PASS`, *consumed* is still `HORIZON`.
- A dataset graph declares `license.duo` beside `license.spdx` — the license row is machine-checkable before import, which is the whole point of the row.

## Self-reference

This vault's own `what/lattices/examples/*.lattice.yaml` carry the `fair` block (license · creators · keywords · provenance) that the provenance and license rows bind to — the minimum predates the exchange, and the exchange reuses it rather than inventing a new one. That is the standard's discipline in miniature: *cite, don't rebuild*.
