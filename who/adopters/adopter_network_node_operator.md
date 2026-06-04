---
type: adopter
created: 2026-06-03
updated: 2026-06-03
status: active
persona_type: individual
technical_level: advanced
domain: "aDNA node / federation operation"
deployment_form: federated
last_edited_by: agent_stanley
tags: [adopter, network, node, operator, ecosystem, federation]
---

# Network / Node Operator

> The operator running an "aDNA computer" — a node on the network — who needs onboarding, federation, sync, and compliance to be clear enough to do confidently.

## Background

A technically-capable operator (the Hestia-style steward of a `Home.aDNA` node + agents) who runs or wants to run a node on the aDNA network. They join nodes to the federation, sync shared context, and need the compliance/safety posture to be legible. They are the embodiment of "members = nodes + operators" in the aDNANetwork model. They want to understand *what joining means* — what's shared, what stays local, how trust and governance work — before they connect.

## Goals

- Onboard a node to the network with a clear, confident path
- Understand exactly what context is shared vs. kept local (the local-by-default boundary)
- See the network topology — who's connected, how, and what flows
- Operate within a legible compliance/safety posture

## Pain Points

- Hand-wavy "join the network" with no concrete onboarding steps
- Unclear data boundaries — what leaves the node when it federates?
- Topology presented as a buzzword, not an understandable map
- No legible compliance/governance model for an operator to trust

## How They Use aDNA

The aDNANetwork surface (Track D) over `vaults.json` + federation_refs:

- **Node onboarding** — a concrete path from a local `Home.aDNA` to a connected node
- **Topology / "aDNA computers" surface** — an understandable map of the network (federation/sync legibility)
- **Compliance posture** — what's shared, what's local-by-default, how trust works

## Ranker emphasis

Primary **actionability** (can I actually onboard a node?) + secondary **trust** (do I understand and trust the boundaries?). Owns the new **Network Legibility** dimension with the Diagram Reviewer + IA.

## Self-reference

The `/vaults` registry + `federation_refs` are the seed of the network surface; `Home.aDNA`'s local-by-default doctrine (Rule 4) is exactly the boundary this operator needs rendered legibly.

## Related

- [[../../what/exemplars/sites/site_ethereum|ethereum.org]] — protocol+network onboarding/role-pathways exemplar
- [[adopter_lab_org_steward|Lab/Org Steward]] — the org-scale counterpart
- [[adopter_community_lead|Community Lead]] — the self-governance counterpart for the network the nodes form
- [[../reviewers/reviewer_diagram_reviewer|Diagram Reviewer]] — owns topology/federation diagram legibility
- [[../../what/design/narrative_ethos_public_good|public-good ethos]] — the agentic-context social network the nodes form
- [[../../what/design/front_page_doctrine|front-page doctrine]] — the Network Legibility dimension this operator co-owns
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m57_eseries_ecosystem_theme_set|E4 aDNANetwork decadal]] — the surface built for this operator
