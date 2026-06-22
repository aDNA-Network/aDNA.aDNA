---
type: coordination
created: 2026-06-21
updated: 2026-06-21
author: agent_stanley
from_vault: aDNA.aDNA
to_vault: aDNA.aDNA
to_persona: Rosetta (campaign_keystone)
urgency: info
expires: 2026-12-21
status: interlock_active
last_edited_by: agent_stanley
tags: [coordination, feedback_loop, keystone, interlock, federation]
---

# Feedback-Loop ↔ Operation Keystone interlock (the `feedback/` wrapper seam)

**Intra-vault interlock between two Rosetta campaigns — `campaign_feedback_loop` (WS-A) and
[[how/campaigns/campaign_keystone/campaign_keystone|`campaign_keystone`]] (WS-D). Recorded here so each campaign's
agents share one truth about the seam.**

## The seam

- **Operation Feedback Loop owns** the `feedback/` consumer-wrapper contract —
  [[what/specs/spec_telemetry_feedback_ecosystem|spec_telemetry_feedback_ecosystem]] (the `federation_ref` schema,
  four signal classes, §AAR sub-pattern, `software_graph_default` redaction) +
  [[how/skills/skill_telemetry_wrapper_integration|the integration skill]] +
  [[what/decisions/adr_036_software_graph_feedback_boundary|ADR-036]] (default-OFF, names-only, Context.aDNA-by-reference).
- **Operation Keystone owns** the `<Software>.aDNA` deployment-graph tier — and its `template_software_graph_stub`
  carries **`feedback/` as one of four standard wrappers** (`git/` · `feedback/` · `iii/` · Home.aDNA credential routing).
- **Therefore the Keystone cohort adopts `feedback/` NATIVELY** — SEED graphs get it via the template at genesis; the
  ENRICH set (Lab, Harness, ComfyUI, Obsidian, Terminal, Warp, AWSBootstrap) retrofits it via
  [[how/backlog/idea_keystone_existing_graph_retrofit|Keystone's four-wrapper retrofit backlog]]. **feedback_loop
  authors no per-graph wiring.**

## Conformance ask (non-blocking)

When Keystone seeds a graph, its `feedback/CLAUDE.md` SHOULD instantiate the spec's `federation_ref` block verbatim
(`consent_state: opt_in_default_off`, `redaction_profile: software_graph_default`, `transport_ref.binding: by_reference`).
The integration skill is the canonical procedure — the template should **reference** it, not re-author the schema
(the same consume-by-reference discipline ADR-036 §3 applies to Context.aDNA).

## Status

Interlock active; nothing blocks either campaign. feedback_loop's `feedback/`-specific rollout sequencing is
enumerated in [[how/backlog/idea_telemetry_wrapper_rollout|idea_telemetry_wrapper_rollout]] (complementary to
Keystone's broad four-wrapper retrofit).

— Rosetta (campaign_feedback_loop), for the commander
