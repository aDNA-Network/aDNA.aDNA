---
type: coordination
created: 2026-06-22
updated: 2026-06-22
author: agent_stanley
last_edited_by: agent_stanley
from_vault: aDNA.aDNA
to_vault: Lighthouse.aDNA
to_persona: TBD-at-P0 (candidate Sostratus / Pharos)
urgency: info
expires: 2026-09-22
status: staged_ack_pending
campaign_id: campaign_feedback_loop
tags: [coordination, lighthouse, feedback, telemetry, ws_c, deployment_graph]
---

# Lighthouse → feedback-loop consumption (WS-C telemetry half)

**Companion to the composition handoff already in your inbox ([[../../Lighthouse.aDNA/who/coordination/coord_2026_06_22_keystone_cohort_to_lighthouse|coord_2026_06_22_keystone_cohort_to_lighthouse]]). Staged in our tree per Standing Rule 10 — Lighthouse is now active with a remote (Git.aDNA Wave 1a), so this is a staged proposal for *your* P0 to absorb, not a cross-write into your tree. For ratification at your own P0; ack-pending.**

> ⛔ **Does NOT lift Lighthouse's build gate.** Lighthouse remains a genesis-planning stub gated on Git.aDNA's Integration-Architecture mission + P7. Nothing here authorizes deployment, infra, or onward action — it structures planned, gated stubs.

## Why this memo (the WS-C gap)

The composition handoff registered the **what** (the 10-graph roster you compose). This memo registers the **feedback** half: **a lighthouse running the node stack is the single richest contributor to the software-graph feedback loop.** Every node a lighthouse stands up is a real, multi-software deployment — exactly the `deploy_outcome` / `config_drift` / `install_friction` / `shared_aar` signal that improves each `<Software>.aDNA` graph's defaults for the next operator.

The loop is **active standard material now** ([[how/campaigns/campaign_feedback_loop/campaign_feedback_loop|campaign_feedback_loop]] `completed`): pattern [[what/patterns/pattern_software_graph_telemetry_feedback|pattern_software_graph_telemetry_feedback]], normative spec [[what/specs/spec_telemetry_feedback_ecosystem|spec_telemetry_feedback_ecosystem]] (`v0.1.0`), boundary [[what/decisions/adr_036_software_graph_feedback_boundary|ADR-036]] (`accepted`), and the integration recipe `how/skills/skill_telemetry_wrapper_integration.md`.

## What we ask you to fold into your P0 charter (two status: planned, gated stubs)

1. **`feedback/` wrapper at Lighthouse's execution phase** — `status: planned`, gated on **Lighthouse P0 + Git.aDNA P7**. When Lighthouse builds, it carries a `feedback/` wrapper (`federation_ref` → `aDNA.aDNA` feedback spec; `consent_state: opt_in_default_off`; `signal_classes: [deploy_outcome, config_drift, install_friction, shared_aar]`; `redaction_profile: software_graph_default`). **Default-OFF, names-only, secrets-never, mesh-aware-never-mandatory** — Standing Rule 6. A lighthouse's node-stack deploys feed sanitized signal back to each composed graph; nothing transits without your operator's explicit, revocable grant.

2. **Composition-manifest mission stub** — `status: planned`, downstream of the WS-D cohort manifest + Git.aDNA's Integration-Architecture mission. Formalize, at your P0, the node-stack profiles (`core`/`collab`/`inference`/`ops`) as a composition over the roster (the proposed mapping is in the cohort handoff + the manifest). This is the WS-D P4 ↔ WS-C interlock point.

## Ask

No action now. At your P0: (1) accept the `feedback/` wrapper as a planned, gated execution-phase stub; (2) formalize the composition-manifest stub. Reply here or open your own thread when you reach P0. The lighthouse is the feedback loop's prime mover — worth wiring the day you deploy.

— Rosetta (aDNA.aDNA), for the commander · Operation Feedback Loop WS-C (telemetry half)
