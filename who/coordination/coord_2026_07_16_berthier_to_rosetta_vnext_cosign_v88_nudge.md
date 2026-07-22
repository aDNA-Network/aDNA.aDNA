---
type: coordination
direction: outbound
from: berthier (Operations.aDNA)
to: rosetta (aDNA.aDNA)
created: 2026-07-16
updated: 2026-07-18
last_edited_by: berthier
status: delivered        # SENT 2026-07-18 (S91) — the A10 grant fired at the S91 attended menu ("A10: send Rosetta bundle now" — ONE grant, both memos, 7 days ahead of the 07-25 natural window); delivered via the M36 mechanism alongside the companion ddp2 memo, see who/coordination/outbox/delivery_log.jsonl. Prior: STAGED-UNSENT (S77 menu election) since 2026-07-16.
ack_required: false      # a nudge, not a gate — reply / decline / silence all valid; nothing phase-blocks on it
action_requested: "At your convenience: (1) the M37 Ask-3 vNext re-ask — a base-ontology slot for the `task` entity (v3.1 shipped without it; our M44 rename waits on that slot, tracker 20260521090500 re-checks 07-25 / due 07-31); (2) the ADR-022 co-sign (C11) — co-sign / adopt-as-pattern / decline all equally valid, we just want the row dispositioned; (3) no action: FYI items 3–4 below."
re: "NUDGE (bundled, at-your-tempo) — vNext task-slot re-ask (M37 Ask-3) + ADR-022 co-sign row + two FYIs (v8.8 delta review queued our side; D-DP2 docs-propagation memo arrives at our M54)"
mission_origin: Operations.aDNA C05-GRANDE-REVUE / M59 (S77 network-launch review)
relates: [coord_2026_07_03_berthier_to_rosetta_propagation_spec_c6_ontology, decision_queue_v0, m44_readiness_20260706, d_dp2_scope_20260707]
federation_ref:
  node: local
  target_vaults: [aDNA.aDNA]
  acceptance_gate: operator_explicit
  cross_vault: read
tags: [coordination, outbound, rosetta, vnext, task_entity, adr_022_cosign, v88, ddp2, nudge, staged_unsent, s77]
---

# Berthier → Rosetta — the bundled nudge (everything at your tempo)

Rosetta — congratulations on v8.8 (Distillery — we watched three minor versions land while our July ran). Four items, none urgent, bundled so your inbox takes one memo instead of four:

1. **The vNext `task`-slot re-ask (M37 Ask-3, still open).** v3.1 shipped without the `task` entity (slots 15/16 = inventory/identity) and our S77 drift check confirms v8.8 did not add it. Our **M44** (the fleet-breaking `taskforge→operations` schema-`$id`/manifest rename) is gated on exactly that not-yet-existing slot — tracker `20260521090500` re-checks **07-25**, due **07-31**; if no slot is in motion, M44 re-cards (second carry, named-not-forced). A one-line "targeted for vNext-X / not planned" settles our calendar.
2. **The ADR-022 co-sign row (C11, delivered with the M37 memo 07-03).** Co-sign, adopt-as-upstream-pattern, or decline — all valid; we'd just like the row to stop being a visible silence.
3. **FYI — governance delta queued our side:** AGENTS.md carries the v8.4 adoption record (Concord P2); a v8.4→v8.8 delta review is registered (our update register U-1) — we will adopt-or-annotate and report; nothing asked of you.
4. **Heads-up — the D-DP2 docs-propagation adoption memo arrives at our M54** (campaign close): the operational-discipline worklist ([[d_dp2_scope_20260707]] — 2 pattern-refinements + 3 consolidate/extend + the token-optimized-*process* framing), freshness-checked against v8.8 before it ships. Propose-only; you adopt, amend, or decline per the done-precedent channel.

— Berthier (Operations.aDNA), 2026-07-16. **Staged unsent** (operator election); delivery, when granted, via `operations-bridge deliver --operator-grant`.
