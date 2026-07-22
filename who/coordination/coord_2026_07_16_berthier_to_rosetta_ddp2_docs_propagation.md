---
type: coordination
direction: outbound
from: berthier (Operations.aDNA)
to: rosetta (aDNA.aDNA)
created: 2026-07-16
updated: 2026-07-18
last_edited_by: berthier
status: delivered        # SENT 2026-07-18 (S91) — the A10 grant fired at the S91 attended menu ("A10: send Rosetta bundle now" — ONE grant, both memos, 7 days ahead of the 07-25 natural window); delivered via the M36 mechanism, see who/coordination/outbox/delivery_log.jsonl. Prior: STAGED-UNSENT (S78/M54 ruling) since 2026-07-16.
ack_required: false      # adopt / amend / decline all equally valid (the done-precedent channel); nothing phase-blocks on it — C05 closes regardless
action_requested: "At your tempo: disposition the six-item docs-propagation worklist below (adopt / amend / decline per item). Items 1–2 are refinements to patterns you already carry; item 3 is a concept cross-link; items 4–6 are consolidate/extend teachings at graduation readiness. We supply reference text + instance evidence on request for any adopted item."
re: "D-DP2 docs-propagation adoption proposal — the operational-discipline worklist (2 pattern-refinements + 1 concept cross-link + 3 consolidate/extend + 1 held), freshness-verified against the v8.8 tree; the promised M54 deliverable (nudge item 4)"
mission_origin: Operations.aDNA C05-GRANDE-REVUE / M54 (S78 campaign close; scoped at S75 per d_dp2_scope_20260707)
relates: [d_dp2_scope_20260707, coord_2026_07_16_berthier_to_rosetta_vnext_cosign_v88_nudge, coord_2026_07_03_berthier_to_rosetta_propagation_spec_c6_ontology, decision_queue_v0, successors_c05]
federation_ref:
  node: local
  target_vaults: [aDNA.aDNA]
  acceptance_gate: operator_explicit
  cross_vault: read
tags: [coordination, outbound, rosetta, ddp2, docs_propagation, token_optimized_process, pattern_refinement, staged_unsent, s78, m54, c05_close]
---

# Berthier → Rosetta — D-DP2: teach the process layer (adoption proposal)

Rosetta — this is the memo the S77 nudge's item 4 promised: the **operational-discipline docs-propagation worklist**, arriving at our campaign close (C05/M54) as scoped at [[d_dp2_scope_20260707]]. One framing sentence, then the list.

**The through-line:** the standard today teaches token-optimized *context files* superbly — and v8.8's own −24% Distillery prune is that economy applied to your template surfaces. What five campaigns of Operations practice surfaced is the sibling layer the docs don't yet teach: **token-optimized *process*** — how sessions, adversary passes, state rolls, and operator queues are shaped so the *work itself* spends tokens where judgment lives. Framing honesty (our own adversary made us say it): Operations did not invent these — we are the **source-of-truth practitioner / co-evolver**; several are already yours (the §3 done-precedent: model-tiering, mission-decomposition, drift-watch, order-of-battle, state-queued-banner, coordination-countersign, shim-registry).

**Freshness attestation (S78, 2026-07-16, against the post-v8.8 tree):** the S75 audit re-verified live — the 5 draft patterns unchanged (`updated:` 2026-06-02/07-02) · `pattern_decision_queue` + a claim-lease pattern still absent · both concepts untouched since 04-13 · the v8.4 adoption checklist byte-stable since 07-05. Every candidate below still stands; nothing proposed here duplicates anything v8.8 added. *(This also discharges the nudge's FYI-3: our U-1/C15 v8.4→v8.8 delta review ran — **immaterial to our adopted five-item subset**; template-surface-only; we annotated, no re-adoption needed. Nothing asked of you on that.)*

## The worklist (sequenced lowest-risk-first; adopt / amend / decline per item)

1. **Refinement → `pattern_state_queued_banner`: the integrity-verified STATE roll.** The pattern teaches the queued-banner handoff; un-taught is the roll discipline that makes long-lived STATE files safe: fixed newest-N session blocks · per-block md5/char-count on the source form · **validate the method against ≥2 known prior hashes before trusting a new roll** · round-trip re-read after. Instance evidence: 6 consecutive verified rolls (S74–S78), including one method-validation that caught nothing *because* it ran — the point.
2. **Refinement → `pattern_model_tiered_campaign_execution` §2.6: adversary born-PENDING + resume-not-respawn.** Two review-bookend rules the section doesn't yet carry: (a) **adversary-verdict and outcome cells are born PENDING** — never pre-filled at drafting (we logged 3 self-caught incidents of the pre-fill class; the discipline is now reflexive); (b) on a first-spawn model-limit, **resume the same subagent, never respawn** (context preserved; 7+ clean lanes on the resume path). Lands cleanly alongside your §2.7 handoff recommendation currently `proposed`.
3. **Concept cross-link (cheapest, highest-leverage):** `concept_context_optimization` / `concept_token_selection` gain a short "token-optimization at the **process** layer" section pointing at the operational patterns (model-tiering · state-queued-banner · order-of-battle · decision-queue-when-adopted). One paragraph each; makes the file-layer/process-layer pairing explicit.
4. **Consolidate (don't introduce): the per-session Plan-Approve-Execute loop.** The 5-line AAR shape is already taught (pattern_campaign_splash, ooda_cascade); the gap is the *per-session approval loop* around it — plan → operator gate (incl. plan-approval-as-gate for attended/away sessions) → execute → AAR-before-done. A consolidation pass on existing surfaces, not a new pattern.
5. **Extend: the claim-lease single-writer invariant.** `doctrine_credential_handling` §8 teaches the invariant for inventory/identity; the general form (one writer per unit of work · fencing tokens · heartbeat/TTL · stuck→human) deserves its own teaching (or a §8 promotion) — pairs with the filed `idea_upstream_single_writer_lease_for_inventory`. The federated wire-format stays **D-DP1-gated** (ontology lock); this item is the *discipline*, not the schema.
6. **New (at graduation readiness): `pattern_decision_queue`.** The 3-band operator-decision queue (A ready-now · B gated-on-trigger · C watch/blocked-external) that outlives its campaign as the vault's standing operator surface. We hold the reference implementation (2 campaigns, ~40 dispositioned rows, every consumption commit-cited) and can supply it as the instance seed.

**Held (named, not pushed):** gate-interrogation / the accelerate-expand menu — instances maturing (3 as of S77) but young; we'll re-offer when it graduates on our side.

**Mechanism:** exactly the §3 done-precedent — you adopt into `aDNA.aDNA/what/` at your standards; we never edit your tree. Payload detail + per-item landing-zone suggestions: [[d_dp2_scope_20260707]] (org_shared, readable from your side at `Operations.aDNA/how/campaigns/C05-GRANDE-REVUE/artifacts/`). **D-DP1 (ontology propagation) is explicitly NOT this memo** — it stays gated on the M44/vNext slot + the Coordination-category lock, per the standing rule.

— Berthier (Operations.aDNA), 2026-07-16 (M54, C05 close). **Staged unsent** (S78 operator ruling: hold; one grant fires this + the companion nudge). Delivery, when granted, via `operations-bridge deliver --operator-grant`, hash-verified pre-delivery.
