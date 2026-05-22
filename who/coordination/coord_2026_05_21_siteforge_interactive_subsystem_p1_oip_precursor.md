---
type: coordination
subtype: outbound_p1_architecture_lock
from: SiteForge.aDNA / campaign_siteforge_interactive_subsystem ("Operation Loom")
to: OIP Unification Campaign Owner (TBD — filed in aDNA.aDNA for future pickup)
status: sent
fired_at: 2026-05-21
subject: "Operation Loom P1.3 coord — architecture locked; absorption-contract inventory concrete for Concord arch_02 + pilot_02"
tags: [coordination, outbound, operation_loom, oip_unification_precursor, operation_concord, b_adna_2026_05_20_oip, p1_architecture_lock, absorption_contract]
related_campaign: campaign_siteforge_interactive_subsystem
related_campaign_parent: idea_campaign_operator_interaction_patterns_unification   # B-aDNA-2026-05-20-OIP "Operation Concord"
related_coord_family: operation_loom_p1_3_arch_lock
supersedes_predecessor: aDNA.aDNA/who/coordination/coord_2026_05_21_siteforge_interactive_subsystem_genesis_oip_precursor.md
follow_up_at: P7.3 (final handoff coord at campaign close)
---

# Coord — Operation Loom P1.3 Architecture-Lock Notice to OIP Unification Owner

> **P1.3 substantive update.** Supersedes the P0 forward-declaration to OIP Unification (filed same day, 2026-05-21). Phase 1 architecture is now locked — AD-1..AD-10 ratified — so this memo updates the absorption contract with concrete artifact inventory, replacing the P0 anticipated-only structure.

## Summary

Operation Loom (`campaign_siteforge_interactive_subsystem`) closed Phase 1 missions P1.0/P1.1/P1.2 on 2026-05-21 with all 10 architecture decisions (AD-1..AD-10) ratified. The absorption contract previously declared as "anticipated" in the P0 memo can now be made concrete: this memo lists exactly what artifacts Operation Concord will absorb at its `arch_02` web-substrate + `pilot_02` reference-deployment phases.

Operation Concord remains not-yet-opened (~30-60 days estimated). This memo is filed in `aDNA.aDNA/who/coordination/` for pickup whenever Concord opens; Loom does not block on it.

## Architecture Lock — what changes for Concord

Concord's web-substrate component (`arch_02`) is now structurally defined. Concord does NOT need to redesign:

| Concern | Resolved at | Concord absorbs (no redesign) |
|---|---|---|
| Where surface artifacts land | AD-1, AD-3, AD-6 | Archetype-extension + shared library + canonical `<vault>/how/gates/` paths |
| How agent generates HTML | AD-2 | Pure HTML/CSS/JS templates + string-substitution generator (sub-second; no build) |
| How operator submits back | AD-5, AD-8 | 4-tier inner round-trip + 3-tier outer fallback (web → AskUserQuestion → copy-paste) |
| Persona-per-vault aesthetics | AD-4, AD-9 | Single-persona inline + 3-mode font loading (online/offline/system) |
| RLHF signal alignment | AD-7 | JSON output schema v1.0; adr_005-compatible; ACCUMULATE adapter at P5.5 owns the transform |
| Quality measurement | AD-10 | 3 orthogonal rankers (6-axis III + 5-persona × 6-dim + 7th-axis agent-ergonomics) |

What Concord MUST decide for its broader scope (Canvas + LatticeTerminal + LatticeAgent + osascript): how the web-substrate slots alongside non-web substrates, naming harmonization, cross-substrate operator-handoff patterns. None of those decisions invalidate Loom's web-substrate work — they sit at a higher unification layer.

## Absorption-Ready Inventory (concrete)

### `arch_02` (web substrate) — to be absorbed at Concord arch phase

1. **Canonical skill** — `aDNA.aDNA/how/skills/skill_create_interactive_surface.md`
   - Lifted from prototype (P2.1) at P5.1; MOVE not copy (eliminates fork risk).
   - Args: `--type`, `--persona`, `--font-mode`, `--force-tier`, `--force-roundtrip-tier`, `--no-web`, `--no-receiver`.
   - Auto-detect + graceful fallback baked in.

2. **2 canonical ADRs** at `aDNA.aDNA/what/decisions/` (numbers assigned at P5.2 promotion-time):
   - **ADR #1** — `adr_NNN_interactive_surface_architecture.md` (AD-1..AD-10 + fallback chain + RLHF schema v1.0; promotes P1.2 draft).
   - **ADR #2** — `adr_NNN_interactive_surface_standard_touch.md` (skill path + workspace CLAUDE.md slot + propagation + LIP linkage).

3. **Workspace `~/lattice/CLAUDE.md` T1 Standing Rule** — added at P5.3; ≤ 200 chars per Campaign SO #2 budget; declares skill discovery path + activation criteria.

4. **P5.5 cross-vault context integration protocols** — discovery contract + context-passing schema + output-routing rules + ≤ 30-min consumer onboarding doc. (Detail TBD at P5.5; one of two co-equal load-bearing campaign threads per Campaign SO #10.)

5. **Shared component library** at `SiteForge.aDNA/what/lib/interactive_surface/` — PRIM-1..15 + persona-token files + runtime JS + tests. Lives at SiteForge (the forge); Concord references it from there; does not move.

### `pilot_02` (reference deployment) — to be absorbed at Concord pilot phase

1. **3 pilot AARs** (from Phase 6):
   - MoleculeForge P4-gate refresh AAR — `gate_decision_p3.html` → v2 with persona-token + ≤ 2 min generation.
   - RareHarness clinician-MBP gate AAR — clinician-facing review surface (Asclepius persona).
   - WilhelmAI charter ratification gate AAR — partner-facing charter approval (Hygieia persona).
   - Each with operator-self-report score ≥ 4.0/5.

2. **Worked examples** (from P2.5) — first-build target authored at P2.5 (D10 ratified at P2 entry; tentative target: v8 P3→P4 phase gate or another in-flight ADR).

3. **P7.1 exemplar walkthrough** — full + cross-vault walkthrough at `aDNA.aDNA/what/exemplars/`.

### LIP

**LIP-NNN** at `lattice-labs/` — reserved via Memo 4 of this P1.3 family (`coord_2026_05_21_siteforge_interactive_subsystem_p1_berthier_lip_reservation.md`); ratified at Operation Loom P7.2. Concord references the LIP at its own ratification phase.

## Operational Independence (reaffirmed)

Operation Loom proceeds on its own 7-phase timeline regardless of Concord's open date. Concord's broader scope (Canvas substrate, LatticeTerminal sidebar, LatticeAgent provider-contract, osascript GUI dialog pattern from `skill_agentic_sudo.md`) does NOT block Loom's web-substrate work.

If Concord opens BEFORE Loom finishes:
- Loom fires a handoff coord at its current phase (P7.3 if Loom is still pre-close).
- Loom continues to its own Phase 7 ratification on Loom's timeline.
- Concord absorbs whatever Loom has at the handoff moment + tracks Loom's remaining deliverables.

If Concord opens AFTER Loom closes:
- Loom hands off the complete absorption inventory at P7.3.
- Concord picks up the LIP + ADRs + skill + exemplars + 3 pilot AARs as a fait-accompli web-substrate.

## Open Items for Concord at its Genesis

When Concord's owner picks up this thread, please consider:

1. **Naming harmonization** — should `skill_create_interactive_surface` rename to align with Concord's unified terminology (e.g., `skill_create_operator_surface`)? Loom does not pre-commit; defers to Concord's arch phase.
2. **Cross-substrate operator-handoff** — how does an operator-decision-gate handed off from a web surface (Loom) to a Canvas substrate (Concord arch_01) work? Out of scope for Loom.
3. **Provider-contract integration** — LatticeAgent's PROVIDER-CONTRACT for the web-substrate consumer side. Not a Loom blocker.

## Ask

No action required at this fire — Concord is not yet opened. When it opens, the owner will find this memo + Memo 1 (Rosetta) + Memo 3 (Argus) + Memo 4 (Berthier) as the architecture-lock coord family for Operation Loom.

If Concord owner wants earlier coordination (e.g., advance review of architecture before Concord opens): no objection; reply memo to Operation Loom welcome.

## Final Handoff

A final handoff coord memo (P7.3) will fire when Loom closes Phase 7. That memo will:
- Repeat the artifact inventory with final paths (replacing `adr_NNN` with assigned numbers, `LIP-NNN` with assigned number).
- Include the final III decadal AAR ranker scores (gate Phase 4 entry; gate Phase 7 close).
- Be filed at `aDNA.aDNA/who/coordination/` in the same coord family lineage.

---
*Filed by agent at SiteForge.aDNA P1.3 (Phase 1 close), 2026-05-21. OIP Unification parent idea at `aDNA.aDNA/how/backlog/idea_campaign_operator_interaction_patterns_unification.md` (B-aDNA-2026-05-20-OIP "Operation Concord"). Seed session: `session_stanley_20260521T023403Z_v8_m31_s1`. Predecessor memo: `coord_2026_05_21_siteforge_interactive_subsystem_genesis_oip_precursor.md`.*
