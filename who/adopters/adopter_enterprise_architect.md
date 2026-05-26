---
type: adopter
created: 2026-05-26
updated: 2026-05-26
status: active
last_edited_by: agent_stanley
category: p5_planned
primary_lens: "trust + cognitive_load"
secondary_lens: "relevance"
sample_questions:
  - "Is there a published governance model — RFCs, decision logs, named accountable parties?"
  - "How does this integrate with our compliance frameworks (SOC2, ISO 27001, HIPAA)?"
  - "What's the disclosure timeline for security vulnerabilities, and who is the contact?"
  - "Is there a clear separation between the OSS surface and any commercial offering?"
  - "How does multi-team coordination work — can different teams adopt at different paces?"
  - "What's the risk profile of adoption — fork-friendly license, viable maintainer succession, recovery plan?"
  - "Are SLAs / support tiers available, and at what cost / for what scope?"
backgrounds:
  - "Enterprise architect with 15+ years at Fortune 500 + mid-market enterprises"
  - "Responsible for multi-team coordination, governance framework integration, compliance integration, risk management"
  - "Has approved or rejected adoption of OSS + vendor tools at scale"
  - "Trained eye for total-cost-of-ownership beyond the sticker price"
priorities:
  - "Published governance model with accountable parties"
  - "Compliance framework integration (SOC2, ISO 27001, HIPAA as applicable)"
  - "Named security contact + reasonable disclosure timeline"
  - "Clear OSS/commercial separation"
  - "Multi-team adoption support (different teams at different paces)"
  - "Risk profile transparency — license, maintainer succession, recovery plan"
  - "DE-prioritizes: hype cycles, single-vendor lock-in without exit plan, governance theater"
red_flags:
  - "Governance described as 'we decide together' without a documented mechanism"
  - "No compliance documentation or 'we'll get there' commitments"
  - "Security contact is an alias without named human"
  - "OSS / commercial line blurred (which features are which?)"
  - "Multi-team adoption requires all teams to upgrade simultaneously"
  - "Single-vendor lock-in with no documented exit"
  - "Cost structure that's hard to model at scale"
tags: [adopter, p5_planned, enterprise_architect, trust, cognitive_load, governance, compliance, risk_management, m5_1_linear_vercel_enterprise_substrate]
---

# Enterprise Architect

> The enterprise architect approving or rejecting adoption at scale, asking: what's the total-cost-of-ownership beyond the sticker price?

## Background

An enterprise architect with 15+ years at Fortune 500 + mid-market enterprises. Responsible for multi-team coordination, governance framework integration, compliance integration, risk management. Has approved or rejected adoption of OSS + vendor tools at scale. Trained eye for total-cost-of-ownership beyond the sticker price — the governance overhead, the compliance integration cost, the multi-team coordination tax, the exit cost if adoption fails.

The Enterprise Architect's lens is **published governance + compliance integration + named security + OSS/commercial separation + multi-team support + risk transparency**. They notice when governance is informal. They notice when compliance is a "we'll get there" commitment. They notice when the OSS/commercial line is blurred. They notice when multi-team adoption requires synchronous coordination at scale.

**Empirical load-bearing**: M5.1 §1 documented Linear + Vercel as exemplary in enterprise positioning (compliance docs + risk transparency + multi-tenant architecture). M5.0 §3 allocates Enterprise Architect to D15 primary (Persona Page Consolidation) + D20 (2 decadals; D20 full bench). M5.1 §4 confirmed D20-only-acceptable allocation as accurate (Enterprise Architect is an integration point, not a primary first-contact persona).

## Goals

- Adopt aDNA only if its governance + risk profile clear adoption-committee bars
- Confirm compliance integration paths exist or are achievable
- Confirm multi-team coordination doesn't require synchronous upgrades
- Confirm exit cost is bounded if adoption fails

## Pain Points

- Adopting tools whose total cost emerges only at scale
- Governance described as culture rather than process
- Single-vendor lock-in without documented exit
- Multi-team adoption requiring synchronous coordination
- OSS/commercial lines that shift unpredictably

## How They Use aDNA

The Enterprise Architect adopts aDNA as a governance + risk-management primitive at multi-team scale:

- **`who/governance/`** documents the decision-making process, named accountable parties, escalation paths — the enterprise governance interface
- **`what/decisions/`** carries ADRs — the decision audit trail that compliance reviewers require
- **federation primitives** allow per-team aDNA vaults to operate independently while sharing canonical decisions upstream — multi-team adoption without synchronous coupling
- **`who/adopters/`** lets the architect see which adoption profiles align with which org structures
- **`what/specs/`** carries spec-level commitments — the artifact that compliance + procurement can review
- **CLAUDE.md hierarchy** (project + per-directory) provides the cognitive-load management that scales — agents and humans both load only the local context

Self-reference: this vault's 6-month accumulation of 26 ADRs + multi-phase campaign tracking + cross-vault federation references demonstrates the pattern — aDNA at scale is itself an enterprise-architecture artifact, and the structure is the lesson.

## Sample Questions (decadal Q&A)

1. "Is there a published governance model — RFCs, decision logs, named accountable parties?"
2. "How does this integrate with our compliance frameworks?"
3. "What's the disclosure timeline for security vulnerabilities, and who is the contact?"
4. "Is there a clear separation between the OSS surface and any commercial offering?"
5. "How does multi-team coordination work?"
6. "What's the risk profile of adoption?"
7. "Are SLAs / support tiers available?"

## Scoring Considerations

Per [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion §2]]:

- **trust** (primary, 6-dim) — anchor 4.50 if governance + compliance + security all clear bars; deductions for informal governance, missing compliance docs, alias-only security contacts.
- **cognitive_load** (primary, new secondary) — anchor 4.50 if multi-team coordination + adoption decisions are clearly modeled; deductions for synchronous-coupling requirements, opaque OSS/commercial lines.
- **relevance** (secondary, 6-dim) — anchor 4.50 if aDNA's governance primitives map to enterprise adoption process; deductions for missing enterprise-fit signals.

## Decadal Engagement

Per [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion §3]]:

- **D15** (Persona Page Consolidation) — primary Q&A (4 personas; enterprise architect is a load-bearing persona for the consolidated bench)
- **D20** (Performance + Hardening + Adversarial Capstone) — full 21-persona bench (Phase 5 exit gate readiness)

## Related

- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion §3]] — decadal allocation table
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m51_cross_target_synthesis|m51_cross_target_synthesis §4]] — empirical 4/8 D5 binding evidence; Linear + Vercel enterprise substrate
- [[adopter_oss_maintainer|adopter_oss_maintainer]] — counterpart adopter; enterprise architect is the demand side, OSS maintainer is the supply side (NEW M5.2)
- [[adopter_enterprise_team|adopter_enterprise_team]] — overlapping persona; team-level is operational, architect-level is governance
- [[../governance/governance_philosophy|governance_philosophy]] — aDNA governance primitives consumed by this persona
