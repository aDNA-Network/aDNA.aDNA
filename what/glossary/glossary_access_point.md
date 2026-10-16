---
type: glossary_entry
created: 2026-10-16
updated: 2026-10-16
status: active
term: "Access Point"
spec_section: ""          # not in the standard's text (v2.5); defined by spec_platform_ecosystem v0.4 §Access points (accepted 2026-10-16) and aDNA.aDNA ADR-065 §2 (proposed)
see_also: [platform, federation, graph product, commercial home]
last_edited_by: agent_rosetta
campaign_id: campaign_arcade
tags: [glossary, ecosystem, platform, access_points, arcade]
---

# Access Point

## Plain-Language Definition

An access point is a *door*. The aDNA standard is a way of organising knowledge, not a product you can open; the places a new builder or operator actually *arrives* are a handful of products built on it. The network names two: a **console** to work in, and an **exchange** to publish, find and fetch graphs. Naming them is an onboarding kindness — "start here" — not a rule: you can walk in through any door that keeps the same contract.

## Technical Definition

A **Platform.aDNA** graph that the network names as a primary way *in* to graphs built to the standard ([[what/specs/spec_platform_ecosystem|spec_platform_ecosystem]] v0.4 §Access points). Each access point carries exactly **one spec on the ecosystem shelf** that it cites — the console cites [[what/specs/spec_terminal_harness_contract|spec_terminal_harness_contract]], the exchange cites [[what/specs/spec_graph_exchange|spec_graph_exchange]] (placed by [[what/decisions/adr_064_graph_exchange_spec_placement|aDNA.aDNA ADR-064]]) — and a **tense label** from the ratified `exchange-adoption-path` vocabulary (`PASS` · `TAUGHT-AS-DESIGN` · `HORIZON`) that the spec, not the glossary, keeps current. Two rules bind the term: an access point is **recommended, never required** (a node running another conforming console or harness is fully conformant), and naming one is **never a conformance requirement** of the standard. The relation of the access points to the standard's estate position is recorded in [[what/decisions/adr_065_standard_position_two_estates|aDNA.aDNA ADR-065]] §2.

## Usage Examples

- "The exchange is an access point at Tier-0 `PASS`, launch `TAUGHT-AS-DESIGN`" — a claim with its tense, read from the spec's table on the day it is made.
- A new node's bootstrap *recommends* the default console and harness; a node that runs its own stays conformant — the recommendation is a kindness, not a coupling.

## Self-reference

This vault is not an access point — it is the standard's own dev graph — but it is where the two access points' *one spec each* lives: `what/specs/spec_terminal_harness_contract.md` and `what/specs/spec_graph_exchange.md`, both on the same shelf as the four category specs. The structure is the lesson: the door is a product; the hinge it swings on is a spec in the standard.
