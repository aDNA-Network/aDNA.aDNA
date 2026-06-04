---
type: adopter
created: 2026-06-03
updated: 2026-06-03
status: active
persona_type: organization
technical_level: expert
domain: "org-scale aDNA governance & showcase"
deployment_form: embedded
last_edited_by: agent_stanley
tags: [adopter, lab, org, steward, ecosystem, governance]
---

# Lab / Org Steward

> The person responsible for an organization that runs aDNA at scale — and wants the network to *show* their lab's work and govern it well, not just store it.

## Background

A research-lab lead, OSS-org maintainer, or institute coordinator whose organization operates multiple aDNA vaults and wants a coherent public presence on the network. Distinct from the [[adopter_enterprise_architect|Enterprise Architect]] (who evaluates infrastructure adoption): the Steward's concern is **organizational identity + governance + showcase** — how the lab's vaults, people, and mission appear, how contributions are governed, and how the lab connects to the broader public-good community.

## Goals

- Present the org's vaults/people/mission as a coherent lab on the network (not scattered entries)
- Govern contribution and membership clearly (who can publish under the org, how)
- Showcase the org's public-good work to attract aligned collaborators
- Connect the org's vaults into the federation without losing org identity

## Pain Points

- Org work that appears as disconnected vault entries with no unifying identity
- No clear governance model for who contributes under the org's name
- Showcase that reads as a directory dump, not a story of mission and impact
- Federation that flattens org boundaries

## How They Use aDNA

The community/labs/org surface (Track C) + the public-good commons (Track G):

- **Org directory + showcase** over the `org_vault` / `org_graph` classes in `vaults.json` — the org's vaults gathered under one identity
- **Contribution funnel + governance** — clear paths for members to publish under the org
- **Public-good showcase** — the org's mission-aligned work featured (e.g., a real lab like the Wilhelm AI initiative)

## Ranker emphasis

Primary **trust** (governance + org identity credibility) + secondary **cognitive_load** (an org's complexity must stay legible). Owns org-scale legibility on Track C.

## Self-reference

The `/vaults` registry already carries `org_vault`/`org_graph` classes (e.g., `WilhelmAI.aDNA`, `RareArchive.aDNA`) — the Steward surface gathers those into a governed org identity rather than leaving them as flat rows.

## Related

- [[../../what/design/narrative_ethos_public_good|public-good ethos]] — featured aligned subnetworks (WGA · Context Commons · WilhelmAI · Rare Archive)
- [[adopter_community_lead|Community Lead]] — the governance-of-the-democracy counterpart
- [[adopter_enterprise_architect|Enterprise Architect]] — the infrastructure-adoption counterpart (distinct concern)
- [[../reviewers/reviewer_brand_strategist|Brand Strategist]] — reviews org identity coherence
