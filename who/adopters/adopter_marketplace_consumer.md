---
type: adopter
created: 2026-06-03
updated: 2026-06-03
status: active
persona_type: individual
technical_level: intermediate
domain: "context-graph discovery & composition"
deployment_form: bare
last_edited_by: agent_stanley
tags: [adopter, marketplace, consumer, ecosystem, findability]
---

# Marketplace Consumer

> The builder who needs a context graph *now* — and has to find the right one, trust it, and compose it into their own work in a few clicks.

## Background

A developer or researcher who would rather reuse a well-made context graph than build one from scratch. They arrive with a need ("I need a rare-disease ontology" / "a federation-ready pipeline") and want to discover candidates, judge quality fast, and compose the chosen one into their vault. They are skeptical by default — they need quality signals (provenance, usage, freshness) before they'll depend on someone else's graph.

## Goals

- Find a relevant context graph by intent, not by guessing exact names
- Judge quality at a glance — who made it, how current, how used, what it depends on
- Pull and compose it into their own work with minimal friction
- Avoid graphs that are stale, unlicensed, or opaque about provenance

## Pain Points

- Search that requires knowing the exact title (no intent-based discovery)
- Listings with no quality signal — can't tell a maintained graph from an abandoned one
- Composition that breaks because dependencies/types aren't declared
- No way to preview a graph before committing to pull it

## How They Use aDNA

The marketplace/registry browse + detail + compose flow (Track B):

- **Browse by intent** (capability/domain/keyword), not exact name — the Stripe-docs "use-case-first" lesson
- **Quality signals on each card** — provenance, FAIR license, last-updated, federation/usage — the Val Town "who-not-how-many" + Replicate "run counts" treatment
- **Compose** (`latlab lattice compose`) pulls and wires the graph into their vault; declared I/O types make the seam safe

## Ranker emphasis

Primary **findability** (intent-based discovery, scent) + secondary **relevance** (does the result match the need?). Co-owns **Trust/Provenance** (can I trust this enough to depend on it?).

## Self-reference

This vault's `/vaults` registry already demonstrates discovery-by-metadata (class/persona/status/federation_refs over `vaults.json`); the marketplace extends that pattern from vaults to context graphs.

## Related

- [[adopter_marketplace_publisher|Marketplace Publisher]] — the maker on the other side
- [[../../what/exemplars/sites/site_huggingface|Hugging Face]] + [[../../what/exemplars/sites/site_replicate|Replicate]] — registry-discovery exemplars
- [[../../how/skills/skill_lattice_publish|skill_lattice_publish]] — publish/pull/compose
- [[../reviewers/reviewer_information_architect|Information Architect]] — owns the discovery scent this persona depends on
