---
type: context
title: "community.adna.network — what it is, what it isn't yet, and how integration happens honestly"
created: 2026-08-16
updated: 2026-08-16
status: active
last_edited_by: agent_rosetta
agent_authored: true
campaign_id: campaign_haussmann
tags: [context, community, flux, haussmann]
---

# Context — the community property

**Plain version**: the network now has a real-time community venue — community.adna.network, a self-hosted instance of Fluxer (an open-source chat platform). It is technically live, but not ready to invite people to: it carries no aDNA identity (it still says "Fluxer"), has no terms of service or community rules published, and its health can't be seen from outside. So the main site doesn't link to it yet — deliberately. The integration plan is prerequisites-first: rules + branding + a confirmed pulse, then a link that describes it honestly, and deeper integration only when the network's federation layer formally opens.

**Technical version**: outside-only assessment at `how/campaigns/campaign_haussmann/evidence/flux/flux_assessment_draft.md` (all `[D]` unauthenticated probes + `[R]` vault-record cross-reference). Verdict: **not launch-ready; linking today net-negative**; recommendation O3→O4→O1. Binding constraints: aDNALabs **ADR-025** — the venue is a *human-only* surface until federation GA (agent-exchange framing is prohibited); Fluxer **SO#8** — community conversations are never web-syndicated or LLM-harvested outside the consented in-community loop, and agents participating are always visibly disclosed. Known record gap: Fluxer.aDNA's STATE predates the deployment (reconciliation is campaign mission P0.4); two deploy-config drifts observed (approval-mode registration vs closed-plan; captcha off vs on-plan).

**The integration model** ([[adr_054_community_integration_model|ADR-054]]): three verified prerequisites → an honest-state link from `/community` only → first-class integration at federation GA. The fallback — an honest "being prepared, not open yet" note — is itself an acceptable indefinite end-state; the site never links a ghost town.

**Related**: [[campaign_haussmann]] (missions P0.4, P3.4) · [[context_website_assessment]] (H14) · [[dependency_map]] (Fluxer row + constraint set).
