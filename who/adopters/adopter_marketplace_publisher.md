---
type: adopter
created: 2026-06-03
updated: 2026-06-03
status: active
persona_type: individual
technical_level: intermediate
domain: "context-graph / lattice publishing"
deployment_form: bare
last_edited_by: agent_stanley
tags: [adopter, marketplace, publisher, ecosystem, trust]
---

# Marketplace Publisher

> The maker who has built a useful context graph and wants to share it with the network — and needs to trust that attribution, licensing, and provenance will be honored.

## Background

A practitioner who has assembled a genuinely useful lattice / context-graph — a domain ontology, a reusable pipeline, a curated context set — and wants to publish it to the aDNA marketplace so others can pull and compose it. They care about credit and clarity: who made this, under what license, derived from what, and how others may reuse it. They are not a marketing person; they want the publish flow to be honest and low-ceremony, and they want the listing to represent their work faithfully.

## Goals

- Publish a context graph with correct FAIR metadata (license, creators, provenance, keywords) without fighting the tooling
- Have attribution and lineage shown clearly on the listing — credit is the currency
- Understand exactly what reuse the license permits before publishing
- Reach the people who would actually compose this into their own work

## Pain Points

- Publish flows that bury or mangle provenance/licensing — the maker can't trust the listing
- No clear preview of how the listing will appear before it goes live
- Attribution that disappears when a graph is composed/forked downstream
- Ceremony and gatekeeping that make a first publish feel risky

## How They Use aDNA

The marketplace/registry surface (Track B) over the lattice schema + FAIR + `skill_lattice_publish`:

- **`what/lattices/lattice_yaml_schema.json` + the `fair` block** capture license/creators/provenance — the trust substrate the listing renders
- **The publish flow** (`latlab lattice publish`) registers the graph; the listing shows attribution + lineage as first-class, not fine print
- **Live affordances** on the listing (Replicate-style "pull / compose / view-graph") let others actually use the work, with the maker credited

## Ranker emphasis

Primary **trust** (provenance/licensing/attribution credibility) + secondary **actionability** (is the publish path clear and low-ceremony?). Owns the new **Trust/Provenance** dimension alongside the Consumer + Enterprise personas.

## Self-reference

This vault's own `what/lattices/examples/*.lattice.yaml` carry `fair` blocks — the publisher's listing renders exactly that metadata. The marketplace is a commons the publisher *contributes to*, per the [[../../what/design/narrative_ethos_public_good|public-good ethos]], not a store they list on.

## Related

- [[../../what/design/front_page_doctrine|front-page doctrine]] — the registry-as-living-content treatment (see [[../../what/exemplars/sites/site_replicate|Replicate]])
- [[adopter_marketplace_consumer|Marketplace Consumer]] — the other half of the marketplace journey
- [[../../how/skills/skill_lattice_publish|skill_lattice_publish]] — the publish recipe
- [[../reviewers/reviewer_conversion_growth_specialist|Conversion/Growth Specialist]] — reviews the publish funnel for friction without dark patterns
