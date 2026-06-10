---
type: coordination
subtype: outbound_p1_architecture_lock
from: SiteForge.aDNA / campaign_siteforge_interactive_subsystem ("Operation Loom")
to: III.aDNA / Argus Panoptes
status: sent
fired_at: 2026-05-21
subject: "Operation Loom P1.3 coord — architecture locked; III domain pack scope confirmed; ADR slot reservation request; v0.2.0 pin confirmed"
tags: [coordination, outbound, operation_loom, iii_adna, argus_panoptes, p1_architecture_lock, interactive_surfaces_pack, adr_reservation, rlhf_schema_alignment, decadal_cadence]
related_campaign: campaign_siteforge_interactive_subsystem
related_iii_campaign: campaign_d_federation_adaptive_loop   # III Campaign D current; MD-B2 closed 2026-05-21
related_coord_family: operation_loom_p1_3_arch_lock
supersedes_predecessor: aDNA.aDNA/who/coordination/coord_2026_05_21_siteforge_interactive_subsystem_genesis_iii_argus.md
follow_up_at: P3.1 (domain pack authoring) + P3 decadal AARs + post-Phase-3 upstream contribution review
---

# Coord — Operation Loom P1.3 Architecture-Lock Notice to III.aDNA (Argus Panoptes)

> **P1.3 substantive update.** Supersedes the P0 forward-declaration to Argus (filed same day, 2026-05-21). Phase 1 architecture is now locked — AD-1..AD-10 ratified — with AD-7 confirming JSON output schema v1.0 is adr_005-compatible and AD-10 confirming the III decadal cadence is structurally pinned (6-axis pack + 5-persona ranker + 7th-axis agent-ergonomics).

## Summary

Operation Loom closed Phase 1 missions P1.0/P1.1/P1.2 on 2026-05-21 with all 10 architecture decisions ratified. Two architecture decisions are directly load-bearing for the III consumer wrapper extension:

- **AD-7** — JSON output schema v1.0 explicitly designed for adr_005 RLHF-signal-channel compatibility (DELTA-1/2/3 resolved at P1.2 §7).
- **AD-10** — III decadal cadence locked: 100 cycles across 10 decadal arcs (Rosetta precedent) + 6-axis pack at P3.1 + 7th-axis agent-ergonomics; all three orthogonal rankers feed P3 priority queue.

This memo confirms the III plan with concrete schema details, requests an ADR slot reservation, and locks the D4 (III version pin) decision at **v0.2.0** with explicit forward-looking provisions for v0.3.0 review.

## AD-7 Confirmed — RLHF Schema v1.0 alignment with adr_005

JSON output schema v1.0 (operator-readable `<gate_id>.output.json`):

```json
{
  "schema_version": "1.0",
  "gate_id": ..., "surface_type": "decision_gate", "interaction_mode": ...,
  "persona": ..., "vault": ...,
  "created_at": ..., "completed_at": ..., "operator": ...,
  "decisions": [...], "operator_comment_overall": ...,
  "rlhf_signal": { "signal_shape": ..., "value": ... },   # campaign-axis (renamed from signal_type)
  "rlhf_signal_type": ...,                                 # adr_005-axis disposition
  "rlhf_session_id": ..., "rlhf_captured_at": ...,
  "rlhf_modification_delta": ..., "rlhf_reviewer_persona": ...,
  "rlhf_severity_calibration": ..., "rlhf_cross_session_link": ...,
  "metadata": {}
}
```

**Three DELTAs resolved at P1.2** (specifics for III review):

- **DELTA-1 (axis collision)**: `rlhf_signal_type` (adr_005 disposition axis: accept/reject/defer/accept_with_modification) and `rlhf_signal.signal_shape` (campaign shape axis: binary/pairwise/scalar/correction/structured) are kept side-by-side as orthogonal fields. The campaign-axis was renamed to `signal_shape` to avoid name collision with adr_005's `signal_type`.

- **DELTA-2 (gate output ≠ learning-store entry)**: gate output stays operator-readable shape; the **ACCUMULATE adapter** at P5.5 transforms gate output → adr_005-compliant learning-store entry (lifts `rlhf_*` keys, drops gate-specific fields like UI state, derives `accepted` bool from `rlhf_signal_type`, respects D11 opt-in at consumer T2 wrapper). The adapter is the ADR-002 conformance boundary.

- **DELTA-3 (modification delta source)**: `rlhf_modification_delta` populated from `operator_comment_overall` (free-text IM-A/B/C) or per-field structured patch (IM-D ST2 form-input, deferred to Phase 4). v1.0 covers free-text only; v1.1 adds structured patch when ST2 lands.

**Md5-invariance preserved** — writes target SiteForge local learning store at `~/aDNA/SiteForge.aDNA/iii/what/context/siteforge_iii_learning_store.jsonl` (never canonical upstream). Canonical jsonl rotation policy (post MD-B2 first-rotation precedent) honored — Loom does not propose direct upstream writes; graduation via ADR-003 ceremony only.

## AD-10 Confirmed — III Decadal Cadence + Domain Pack Scope

### 6-axis III pack — locked at P3.1

**Pack name**: `context_iii_domain_packs_interactive_surfaces.md`

**Location**: `SiteForge.aDNA/iii/what/context/context_iii_domain_packs_interactive_surfaces.md` (local-first per ADR-002; canonical upstream consideration deferred to post-Phase-3 review).

**6 axes** (1-5 each, applied every cycle):

| Dimension | Code | Description |
|---|---|---|
| Decision Clarity | DC | Single clear decision with concrete options; no ambiguity. |
| Agent Context Transparency | ACT | 3-5 key factors visible + expandable full reasoning chain. |
| Signal Quality | SQ | Structured choice + confidence bracket + open comment field. |
| Trust Calibration | TC | Confidence bracket visible; uncertainty acknowledged; no false certainty. |
| Cognitive Load | CL | ≤ 5 options; scannable in ≤ 30 seconds; progressive disclosure. |
| Recovery/Undo | RU | Full review step before submit; edit-before-submit; explicit cancel path. |

**3 optional overlay personas** (activation at specific decadals — non-blocking):
- **RLHF-Quality reviewer** — D2 + D3 (signal-quality + trust calibration arcs).
- **Agent-Steward reviewer** — D2 (signal-quality arc).
- **Operator-Safety reviewer** — D3 + D7 (trust calibration + production deployment arcs).

### 7th-axis agent-ergonomics

Continuous seconds metric (Campaign SO #8 hard constraint): ≤ 2 min agent-invocation → operator-readable HTML at canonical path (cached templates) / ≤ 5 min cold-start. This dimension is **campaign-internal**, NOT proposed as upstream III standard (it measures skill ergonomics, not surface UX; orthogonal to the 6 surface-UX axes).

Tracked per decadal AAR; gates Phase 4 entry alongside 6-axis ≥ 4.0 avg + 5-persona × 6-dim ≥ 4.0 avg.

### 5-persona × 6-dim decadal ranker

Per existing `aDNA.aDNA/how/skills/skill_decadal_aar.md` — F/C/A/T/R/D × 5 personas; 1-5 each; cross-persona adopter experience. Orthogonal to the 6-axis III pack; both run at every decadal AAR.

## ADR Slot Reservation Request (formal)

**ADR title**: `adr_NNN_interactive_surface_iii_domain_pack.md`

**Location**: `III.aDNA/what/decisions/`

**Scope**: Ratification of the `context_iii_domain_packs_interactive_surfaces.md` domain pack as an upstream III extension. Covers:
- 6-axis ranker dimensions + scoring rubric (DC/ACT/SQ/TC/CL/RU).
- 3 overlay personas + decadal-activation policy.
- 7th-axis agent-ergonomics dimension definition (campaign-internal-but-documented).
- Federation policy: how consumer vaults extending the pack interact with the canonical pack (per ADR-002 wrapper pattern).
- RLHF schema linkage to adr_005 (cross-ADR coherence note).

**Authoring timing**: Tentative Phase 7 area or post-campaign Campaign D+ window. Authored after Phase 3 100-cycle validation produces sufficient evidence base.

**Number**: per III's M2.4 forward-only slot-assignment doctrine, number assigned at authoring-time. No pre-reservation request.

**Acknowledgment**: informal heads-up only — Argus may track this in the III forward-looking ADR queue.

## D4 Version Pin Locked — III.aDNA v0.2.0

**Pin**: `III.aDNA ~0.2.0` confirmed at consumer wrapper level (`SiteForge.aDNA/iii/CLAUDE.md`). 

**Provision for v0.3.0 review**:
- D4 ratified at P0 against the v0.2.0 baseline (production-stable; 6 consumer wrappers).
- III Campaign D is in flight: DG-D 2/11 closed as of 2026-05-21 (MD-B1 + MD-B2 just landed today; canonical md5 rotated `dde2cbd...` → `5adb0dfa...` at MD-B2 first-rotation-since-founding).
- Operation Loom Phase 3 opens after Phase 2 (~5-7 sessions out).
- **Review trigger**: at Phase 3 entry, agent confirms current III state. If v0.3.0 has tagged by then with MD-B2's adaptive-improvement-loop + ADR-005 RLHF signal channel finalized, Loom upgrades v0.2.0 → v0.3.0 (low-risk per III additive disposition).

## Cross-Coord Family Pointers

Three sibling coord memos fire today as part of the P1.3 architecture-lock coord family:

- **Memo 1 — Rosetta** (`coord_2026_05_21_siteforge_interactive_subsystem_p1_rosetta_standard_touch.md`) — aDNA.aDNA standard-touch alignment + 2 ADR slot requests.
- **Memo 2 — OIP Unification** (`coord_2026_05_21_siteforge_interactive_subsystem_p1_oip_precursor.md`) — concrete absorption-contract inventory.
- **Memo 4 — Berthier (lattice-labs)** (`coord_2026_05_21_siteforge_interactive_subsystem_p1_berthier_lip_reservation.md`) — LIP slot reservation request.

(This memo is Memo 3.)

## Ask

1. **ADR slot acknowledgment** — informal tracking in III's forward-looking ADR queue (no number reservation needed; M2.4 forward-only).
2. **MD-B2 ripple effects** — any aspects of the just-landed adaptive-improvement-loop spec (v0.3.0 candidate) that affect how custom domain packs interact with the RLHF signal channel? Argus's MD-B2 closure today is the highest-relevance III change for Loom's Phase 3 design.
3. **Heads-up on Campaign D forward path** — if MD-A1 federation-aware airlock v0.3 or other DG-D missions land in the next 5-7 sessions (Loom's Phase 2 window), Loom would benefit from review of any consumer-wrapper-impacting changes before Loom Phase 3 opens.

No urgency on any of the above — Loom's Phase 3 is multiple decadal arcs out; Loom's Phase 2 is its next active phase.

---
*Fired by agent at SiteForge.aDNA P1.3 (Phase 1 close), 2026-05-21. III.aDNA current state: Campaign D active; DG-D 2/11 (MD-B1 ✅ 2026-05-20 + MD-B2 ✅ 2026-05-21; canonical md5 rotated). Seed session: aDNA.aDNA `session_stanley_20260521T023403Z_v8_m31_s1`. Predecessor memo: `coord_2026_05_21_siteforge_interactive_subsystem_genesis_iii_argus.md`.*

---

> Campaign renamed 2026-05-22 → `campaign_siteforge_sis`; pack renamed → `context_iii_domain_packs_sis.md`. Filename preserved as historical anchor per parent-plan locked decision (operator-approved at `~/.claude/plans/please-read-the-claude-md-floating-forest.md`).
