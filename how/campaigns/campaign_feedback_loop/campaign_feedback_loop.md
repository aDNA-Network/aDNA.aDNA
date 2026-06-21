---
campaign_id: campaign_feedback_loop
type: campaign
title: "Operation Feedback Loop — Software-Graph Telemetry & AAR-Feedback Pattern"
owner: stanley
status: active
phase_count: 5
mission_count: 5
estimated_sessions: "5-8"
calibrated_sessions: "5-8"
estimation_class: governance-broad
priority: high
created: 2026-06-20
updated: 2026-06-20
last_edited_by: agent_stanley
strategic_compass: who/governance/VISION.md
tags: [campaign, feedback_loop, telemetry, federation, pattern]
---

# Campaign: Operation Feedback Loop

## Goal

Define the opt-in, operator-controlled telemetry + AAR-feedback pattern by which operators of a `<Software>.aDNA` Platform graph contribute deployment signal back to the graph — so install / operate / configure patterns improve over time — authored as an aDNA pattern + spec, federated via a `feedback/` consumer wrapper, modeled on III's `iii/` contract. When complete, any deployment-graph in the fleet can opt into a privacy-preserving loop that turns one operator's deploy experience into better defaults for the next operator, **without any vault ever taking custody of another's data**.

## Context

The aDNA strategic compass ([[who/governance/VISION.md|VISION]]) already describes a feedback loop — *"make the agents themselves the sensing network"* — but limits it to **standard-level** improvement (a missing template field, an awkward naming convention) surfaced via `skill_upstream_contribution`. The new `<Software>.aDNA` deployment-graph paradigm (see the sibling campaign [[how/campaigns/campaign_keystone/campaign_keystone|Operation Keystone]]) creates a second, richer signal surface: **deployment** experience — what broke on install, what config drifted, which AAR a real operator wrote after standing the software up. This campaign federates that signal channel.

The compass is explicit that aDNA has *"no telemetry... no vendor lock-in... it never takes custody."* This campaign does not contradict that principle; it **operationalizes the compass's own opt-in sensing-network**. The distinction is load-bearing and is recorded in [[what/decisions/adr_036_software_graph_feedback_boundary|ADR-036]]: the channel is **default-OFF, operator-granted, revocable, local-first, names-only, secrets-never**, and mesh-aware but never mesh-mandatory.

Triggered by Operation Feedback Loop (rev. 3) under the network-stack-tier expansion. Per-mission AARs already capture deploy learnings **locally** (Standing Order #5); this campaign is the opt-in channel to contribute that existing practice **outward** — federation of a practice, not a new practice.

## Scope

### In Scope

- The `pattern_software_graph_telemetry_feedback` aDNA pattern (dual-audience, self-referential).
- The normative `spec_telemetry_feedback_ecosystem` with the consumer `federation_ref` contract and the first-class **§AAR-Contribution Sub-Pattern**.
- [[what/decisions/adr_036_software_graph_feedback_boundary|ADR-036]] — the Context.aDNA consume-by-reference boundary, the Rule-6 privacy constraints, opt-in-default-off, wrapper-name choice (`feedback/`), and wrapper-federation over base-template baking.
- The `skill_telemetry_wrapper_integration` integration skill (in the image of `skill_iii_setup`).
- Cross-vault mission **structuring** (not execution): the clean first consumers (Bitwarden.aDNA + the Keystone cohort) wired natively at genesis; Warp/Lighthouse/all-other-Platforms staged via coord memo or one rollout backlog.

### Out of Scope

- Any **transport implementation** or backend service — Context.aDNA (Prometheus) owns telemetry transport + economics; this campaign owns signal **semantics** and consumes transport by reference.
- Collection of any secret value, credential, PII, or node-identifying path (doctrine, not preference — Standing Rule 6).
- Executing any consumer wrapper into a live or mid-genesis vault without an operator-cleared coord memo (Warp at P3b; Lighthouse at its gate).

### Subsumes

| Plan/Mission | Status at Subsumption | Tasks Absorbed By |
|-------------|----------------------|-------------------|
| — (net-new campaign) | — | — |

## Phases & Missions

### Phase 0: Charter, Naming & Boundary

| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| 0 | Charter, Naming & Boundary (+ ADR-036 accepted) | 1 | — | completed |

**Phase exit gate**: Operator ratifies wrapper name (`feedback/` vs `telemetry/`), the four signal classes, and the Context.aDNA boundary recorded in ADR-036. **Human gate — Standing Order #1.**

### Phase 1: Pattern + Spec + Contract

| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| 1 | Pattern + Spec + `federation_ref` contract + AAR sub-pattern | 1-2 | M0 | completed |

**Phase exit gate**: `pattern_*` and `spec_*` exist, pass dual-audience ([[how/skills/skill_dual_audience_review|review]]) + self-reference checks, cite the standard, carry ≥2 wikilinks. These are the artifacts WS-B / WS-D consume.

### Phase 2: Integration Skill + Self-Demonstration

| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| 2 | `skill_telemetry_wrapper_integration` + self-demo on aDNA.aDNA (or documented exemption) | 1 | M1 | planned |

**Phase exit gate**: skill exists in the image of `skill_iii_setup`; Standing Order #8 self-demonstration satisfied or exemption recorded.

### Phase 3: Cross-Vault Integration Missions (Structure; do not execute)

| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| 3 | Structure consumer missions: Warp staged-draft · Bitwarden + Keystone native · Lighthouse · rollout backlog | 1 | M1 | planned |

**Phase exit gate**: every cross-vault touch is a staged coord memo or one enumerated backlog (`idea_telemetry_wrapper_rollout`); zero writes into other vaults' trees. Ack-pending, non-blocking.

### Phase 4: Campaign Close

| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| 4 | Completion summary → 5-line AAR → `skill_context_graduation` → STATE.md update | 1 | M2, M3 | planned |

**Phase exit gate**: `skill_context_graduation` run **before** `status: completed`; framework gaps filed as `idea_upstream_*`.

## Decision Points

| # | When | Decision | Status |
|---|------|----------|--------|
| 1 | End of M0 (P0→P1 gate) | Wrapper name `feedback/` vs `telemetry/`; four signal classes; Context.aDNA boundary | **resolved 2026-06-20** — `feedback/`, four classes + boundary ratified as written |
| 2 | During M3 | Warp coord-memo placement (Warp mid-genesis P3b — operator clears the staged draft first) | pending |
| 3 | M1 | Redaction-profile name + field set (`software_graph_default`) | **resolved 2026-06-20** — `software_graph_default` field set defined in the spec §AAR sanitization pass |

## Risk Register

| Risk | Severity | Mitigation |
|------|----------|------------|
| Pattern read as contradicting VISION's "no telemetry" compass | High | ADR-036 records the operationalization-not-contradiction framing; wrapper named `feedback/`; default-OFF + names-only + secrets-never spine front-and-center |
| Signal channel leaks a secret or node identity | Critical | Names-only, redaction-before-transmission, sanitization pass specified in the spec's §AAR sub-pattern; Standing Rule 6 binding; no value ever transits |
| Boundary creep into Context.aDNA's transport/economics turf | Medium | Consume-by-reference recorded in ADR-036; Prometheus coord memo staged; this vault owns semantics only |
| Premature execution into a live/mid-genesis vault | High | P3 structures missions only; Warp/Lighthouse writes are operator-cleared staged memos (Standing Rule 10) |

## Verification Strategy

### Per-Mission

| Check | Method | Gate? |
|-------|--------|-------|
| SITREP filed | Session closure protocol | Yes |
| AAR produced | 5-step scorecard AAR → `how/missions/artifacts/` | Yes |
| Deliverables validated | AAR scorecard (validated/total) | Yes |
| Dual-audience + self-reference | `skill_dual_audience_review` + `skill_self_reference_check` | Yes (Rosetta SO#7/#8) |
| Files committed | local git status clean | Yes |

### Per-Phase

| Check | Method | Gate? |
|-------|--------|-------|
| Phase exit criteria met | Campaign doc phase exit gate | Yes — operator approval |
| Scope changes documented | Campaign doc scope section | Yes |

### Campaign Validation

| Check | Method |
|-------|--------|
| Cross-file coherence | New files referenced from parent AGENTS.md / spec index |
| Context graduation run | `skill_context_graduation` on campaign deliverables before close |
| STATE.md updated | `aDNA.aDNA/STATE.md` reflects campaign status |

## Timeline

| Phase | Missions | Sessions |
|-------|----------|----------|
| Phase 0 | M0 | 1 |
| Phase 1 | M1 | 1-2 |
| Phase 2 | M2 | 1 |
| Phase 3 | M3 | 1 |
| Phase 4 | M4 | 1 |
| **Total** | **5 missions** | **5-8 sessions** |

## Notes

- Dependency interlock with sibling campaigns: **WS-A P1 → Bitwarden.aDNA wrapper wiring + the Keystone cohort**; **WS-A P3 → Lighthouse mission stubs**. The `feedback/` wrapper is modeled structurally on the `iii/` wrapper ([[what/decisions/adr_036_software_graph_feedback_boundary|ADR-036]]; III's [[../../../III.aDNA/what/decisions/adr_002_consumer_federation_contract|ADR-002]]).
- The richest signal class is `shared_aar` — operators returning their scorecard AARs is the mechanism by which deploy patterns actually improve.

## Completion Summary

*Fill out when setting `status: completed`.*

## Campaign AAR

*Mandatory before setting `status: completed`. See `how/templates/template_aar_lightweight.md`.*
