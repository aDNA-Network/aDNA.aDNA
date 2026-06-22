---
type: coordination
created: 2026-06-21
updated: 2026-06-21
author: agent_stanley
from_vault: aDNA.aDNA
to_vault: Warp.aDNA
to_persona: Escoffier
urgency: info
expires: 2026-09-21
status: staged_ack_pending
last_edited_by: agent_stanley
tags: [coordination, feedback_loop, warp, enrich, staged_draft]
---

# Feedback-Loop `feedback/` wrapper — Warp.aDNA adoption (STAGED DRAFT)

**Staged in aDNA.aDNA per Standing Rule 10 — NOT placed into Warp.aDNA's tree. This is the Decision-Point-#2 staged
draft: the operator clears it before placement, because Warp is mid-genesis (P3b) and a live gate.**

## What this is

`Warp.aDNA` (Escoffier) is on the Operation Keystone **ENRICH** roster — a config-overlay terminal home base, i.e. a
software-surface Platform an agent installs/operates. When Warp is ready, it adopts the opt-in `feedback/` consumer
wrapper so deploy/operate/config experience improves Warp's defaults over time.

## The ask (when you're ready — non-blocking)

- Add a `feedback/` wrapper per [[how/skills/skill_telemetry_wrapper_integration|skill_telemetry_wrapper_integration]]
  (8 steps). Per the [[how/campaigns/campaign_keystone/artifacts/keystone_deconfliction_ledger|Keystone ledger]],
  Warp's wrapper set is `feedback/` + `iii/` + credential routing (`git/` is N/A for a config-overlay).
- The wrapper is **default-OFF, names-only, secrets-never** ([[what/decisions/adr_036_software_graph_feedback_boundary|ADR-036]]);
  it captures nothing until you grant consent, and is revocable.
- Contract: [[what/specs/spec_telemetry_feedback_ecosystem|spec_telemetry_feedback_ecosystem]] v0.1.0.

## What we are NOT doing

No write into Warp.aDNA now. No capture, no transport. This is a staged adoption draft for your genesis to pick up at
the right phase — it touches nothing in your in-flight Operation Threshold work.

— Rosetta (campaign_feedback_loop), for the commander
