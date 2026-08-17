---
plan_id: mission_haussmann_p0_4_flux_state_recon
type: plan
title: "P0.4 — Fluxer reconciliation: the community property gets a true record and named prerequisites"
campaign: campaign_haussmann
phase: P0
decade: 1
owner: stanley
status: active     # P0 wave opened 2026-08-16 (session haussmann_p0_wave; operator-ordered)
mission_class: reconnaissance
executor_tier: opus
token_budget_estimated: "~80–140 kT in 1 session: memo delivery + answer intake + prerequisite register + ADR-054 skeleton (ADR-016)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["flux/flux_assessment_draft.md (verdict + 10 questions)", "H14 reframed", "aDNALabs ADR-025 (human-only)", "Fluxer SO#8", "dependency_map (STATE stale-wrong)"]
vitruvius_dimensions: [D8]
decade_theme: agentic
webforge_patterns: []
patterns_to_author: []
depends_on: []
blocks: [mission_haussmann_p3_4_flux_integration]
acceptance_criteria:
  - "The Aspasia memo is delivered (not just staged) and acknowledged, or the delivery gap is escalated to the operator (the 'dispatched ≠ delivered' class)"
  - "Fluxer.aDNA STATE reconciled by its owner (or an operator-confirmed interim truth note exists)"
  - "The 10 outside-only questions have answers or owners (aliveness, host identity, registration/captcha intent, policy-floor ownership, D-1/D-2/D-3 deltas)"
  - "ADR-054 skeleton records the integration prerequisites: policy floor (ToS/privacy/CoC) + minimal aDNA branding + inside aliveness confirmation + ADR-025 compliance framing"
verification_method: "answered-question register + Aspasia ack (or operator interim ruling)"
human_gate: true
tags: [plan, haussmann, p0, flux, community]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> No public community copy is written anywhere until this record is true.

## Why this mission exists

community.adna.network is live on a third party's metal, but Fluxer.aDNA's own STATE says "nothing is deployed" (5+ weeks stale) `[D/R]`; the instance is policy-naked, un-branded, approval-gated with captcha OFF (deploy-config drift vs the vault's own plan) `[D flux draft]`; and linking today would be net-negative. The site meanwhile advertises channels that 404 (P1.1's lane). Integration (P3.4) is contingent on prerequisites only Aspasia/the operator can land — this mission names them, delivers the ask, and closes the record gap.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Finalize + **deliver** the Aspasia memo (the staged `coord_2026_08_16_rosetta_to_aspasia_*` file): STATE contradiction, the 10 questions, the prerequisite ask, ADR-025/SO#8 framing | delivered memo | ⛩ operator (delivery = outward act) |
| O1 | Intake answers; build the prerequisite register with owners + status | register | — |
| O2 | ADR-054 skeleton (integration model + prerequisites + honest-state link pattern + GO/NO-GO criteria for DP7) | ADR-054 proposed | — |
| O3 | If delivery stalls (the inbox-delivery ambiguity class), escalate to operator with options | escalation note | ⛩ operator |
| O4 | AAR | AAR | — |

## Constraints

Never operate or configure the Fluxer instance (Aspasia's lane; SO#7 propose-only); no account creation; ADR-025 human-only framing is non-negotiable in every draft; the campaign's fallback (no link + honest state) is already acceptable — do not pressure prerequisites into existence.

## Definition of done

A true record exists somewhere authoritative; the prerequisites are named with owners; P3.4 can open with a checklist instead of a mystery.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + `evidence/flux/flux_assessment_draft.md`. Execute O0 (operator confirms delivery), then O1–O2. Halt condition: any answer implies the instance hosts data whose governance is unresolved — surface to operator immediately.

## Progress

*(at execution)*

## AAR (SO#5)

*(before completed)*
