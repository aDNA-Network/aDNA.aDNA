---
type: coordination
created: 2026-06-21
updated: 2026-06-21
author: agent_stanley
from_vault: aDNA.aDNA
to_vault: Lighthouse.aDNA
to_persona: TBD-at-P0
urgency: info
expires: 2026-09-21
status: staged_ack_pending
last_edited_by: agent_stanley
tags: [coordination, feedback_loop, lighthouse, composition, staged_draft]
---

# Feedback-Loop ↔ Lighthouse composition surface (STAGED DRAFT)

**Staged in aDNA.aDNA per Standing Rule 10 — NOT placed into Lighthouse.aDNA's tree. For the Lighthouse persona at
its P0.**

## What this is

`Lighthouse.aDNA` **composes** Operation Keystone cohort graphs into a node. Each composed `<Software>.aDNA` graph
already carries its own `feedback/` wrapper (via the Keystone `template_software_graph_stub`). So Lighthouse does
**not** need its own `feedback/` wrapper — it is a composer, not a leaf software surface.

## The ask (at your P0 / composition-manifest design — non-blocking)

The Lighthouse **composition manifest** should **surface each member's `feedback/` consent posture** (OFF /
granted-scope) so a node operator sees, in one place, which composed graphs are contributing deploy signal — and can
revoke per-graph. This is a read/display concern, not a second wrapper.

- Per-member posture field: [[what/specs/spec_telemetry_feedback_ecosystem|spec_telemetry_feedback_ecosystem]]
  (`consent_grant` block).
- Interlock context: [[who/coordination/coord_2026_06_20_feedback_loop_keystone_interlock|feedback_loop ↔ Keystone interlock]].

## What we are NOT doing

No write into Lighthouse.aDNA, and no requirement on its gated build. A display/surfacing suggestion for its manifest
design when it reaches P0.

— Rosetta (campaign_feedback_loop), for the commander
