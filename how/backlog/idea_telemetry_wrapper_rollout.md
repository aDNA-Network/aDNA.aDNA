---
type: backlog
idea_type: rollout
created: 2026-06-21
updated: 2026-07-02
status: deferred
campaign_id: campaign_feedback_loop
last_edited_by: agent_rosetta
tags: [backlog, feedback_loop, rollout, federation, keystone]
deferred_owner: "per-vault personas + Keystone"
deferred_trigger: "per-graph genesis/enrich missions (prove on Lab first); campaign_feedback_loop is CLOSED"
---

# idea: `feedback/` wrapper rollout across the deployment-graph cohort

## Summary

The single enumerated rollout plan for adopting the `feedback/` consumer wrapper
([[what/specs/spec_telemetry_feedback_ecosystem|spec]] · [[how/skills/skill_telemetry_wrapper_integration|skill]])
across the `<Software>.aDNA` deployment-graph cohort. **Complementary to — not a duplicate of —
[[how/backlog/idea_keystone_existing_graph_retrofit|Keystone's four-wrapper retrofit backlog]]:** Keystone owns the
broad four-wrapper retrofit; this enumerates the `feedback/`-specific sequencing + consent posture.

## Delivery mechanism

`feedback/` is one of the four wrappers in Keystone's `template_software_graph_stub`, so:
- **SEED graphs** (net-new) get `feedback/` **at genesis via the template** — no separate rollout action needed.
- **ENRICH graphs** (existing) retrofit it via [[how/skills/skill_telemetry_wrapper_integration|the integration skill]].

## Rollout roster (from the [[how/campaigns/campaign_keystone/artifacts/keystone_deconfliction_ledger|Keystone de-confliction ledger]])

| Graph(s) | Class | `feedback/` adoption | Sequence |
|----------|-------|----------------------|----------|
| Nextcloud · Nginx · Store · Groupware · Container · Inference | SEED | via template at genesis | with each graph's P0 |
| Bitwarden.aDNA (WS-B, Cerberus) | SEED (in flight) | via template; secret-access AAR loop | WS-B genesis |
| Lab.aDNA (reference impl) | ENRICH | retrofit (skill) — **prove here first** | after M-L13.5/13.6 merge |
| Harness.aDNA | ENRICH | retrofit — clinical AAR loop is a natural fit | per Keystone ENRICH |
| ComfyUI.aDNA | ENRICH | inject during M03 re-genesis (before it hardens) | during M03 |
| Obsidian.aDNA · Terminal.aDNA | ENRICH | retrofit | per Keystone ENRICH |
| Warp.aDNA (Escoffier) | ENRICH | [[who/coordination/coord_2026_06_20_feedback_loop_to_escoffier|staged memo]] — operator-cleared | Warp P3b+ |
| AWSBootstrap.aDNA | ENRICH | gated on the AWSBootstrap↔Lighthouse↔cohort ADR | after that ADR |

## Sequencing

Prove `feedback/` on **Lab.aDNA** (the most-mature reference implementation) first, then the clinical fit (Harness),
then the rest of the ENRICH set. SEED graphs carry it automatically. Every adoption ships **default-OFF** — turning
it on is a per-operator, per-graph consent decision ([[what/decisions/adr_036_software_graph_feedback_boundary|ADR-036]]).

## Non-goals

No transport/backend (owned by Context.aDNA). No always-on collection. No write into any other vault from this backlog
— each adoption happens inside that graph's own genesis/enrich mission.


## Champollion G0 disposition — X (M1.1, 2026-07-02)

**DEFER.** Owner: per-vault personas + Keystone. Trigger: per-graph genesis/enrich missions (prove on Lab first); campaign_feedback_loop is CLOSED. Ratified at Champollion G0 (D2).

## Disposition — Refit M5 vNext triage (2026-07-24) · **CONFIRM-DEFERRED**

Reviewed in the light sweep; **stays `deferred`** — `feedback/` wrapper rollout across the deployment-graph cohort; trigger: cohort adopts via the Keystone template (Feedback Loop follow-on). Owner: deployment-graph cohort. See [[vnext_roadmap]] §Deferred-with-trigger.
