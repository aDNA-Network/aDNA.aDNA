---
type: coordination
subtype: outbound_p1_lip_reservation
from: SiteForge.aDNA / campaign_siteforge_interactive_subsystem ("Operation Loom")
to: lattice-labs / Berthier
status: sent
fired_at: 2026-05-21
subject: "Operation Loom P1.3 coord — LIP slot reservation request for Phase 7 P7.2 ratification (Interactive Surface Subsystem)"
tags: [coordination, outbound, operation_loom, lattice_labs, berthier, lip_reservation, lip_doctrine, p1_architecture_lock, workspace_canonical_ratification]
related_campaign: campaign_siteforge_interactive_subsystem
related_coord_family: operation_loom_p1_3_arch_lock
related_vault_succession: lattice-labs → LatticeLabs.aDNA (Phase-6 cutover pending)
follow_up_at: P7.2 (LIP authoring + ratification at lattice-labs)
---

# Coord — Operation Loom P1.3 LIP Slot Reservation Request to Berthier (lattice-labs)

> **P1.3 fresh memo.** No P0 predecessor — the P0 Rosetta memo deferred Berthier coordination as "relay to Berthier for LIP number reservation when convenient." This P1.3 direct memo upgrades that to a formal slot reservation request, anchored in the locked architecture (AD-1..AD-10 ratified at P1.2 same day, 2026-05-21).

## Summary

Operation Loom (`campaign_siteforge_interactive_subsystem`) closed Phase 1 missions P1.0/P1.1/P1.2 on 2026-05-21 with full architecture ratification. Phase 7 includes a LIP ratification mission (P7.2) that promotes the interactive-surface pattern to workspace-canonical via a formal Lattice Improvement Proposal at `lattice-labs/`. This memo reserves the LIP slot.

**Timing**: Phase 7 is ~30-60 days out estimated. No urgency at this fire — reservation is for forward planning + LIP-number assignment when convenient.

## Architecture Anchor

The LIP body will ratify the architecture defined in the P1.2 draft ADR:

- **Source-of-truth document**: `SiteForge.aDNA/how/campaigns/campaign_siteforge_interactive_subsystem/missions/artifacts/adr_draft_interactive_surface_architecture.md`
- **Companion full-detail spec**: `SiteForge.aDNA/how/campaigns/campaign_siteforge_interactive_subsystem/missions/artifacts/architecture_spec_p1_2.md`
- **Promotion path**: P5.2 promotes the draft to canonical ADR at `aDNA.aDNA/what/decisions/adr_NNN_interactive_surface_architecture.md`; P7.2 then ratifies the canonical pattern as workspace-canonical via LIP.

The ADR draft frontmatter already references `related_lips: lattice-labs LIP-NNN` as the placeholder anchoring this reservation request.

## LIP Scope (anticipated)

The LIP will ratify the **Interactive Surface Subsystem pattern** as workspace-canonical. Anticipated scope sections (subject to refinement at P7.2 authoring):

1. **Pattern identity**: agent-authored standalone HTML operator surfaces, consumed via canonical skill, federated to consumer vaults via SiteForge wrapper.

2. **Architecture decisions**: AD-1..AD-10 (archetype-extension landing + shared library + pure HTML/CSS/JS no-build + persona-token system + 4-tier inner round-trip + 3-tier outer fallback + RLHF schema v1.0 + 3-mode font loading + 3 orthogonal quality rankers).

3. **Standard-touch surfaces**:
   - Canonical skill at `aDNA.aDNA/how/skills/skill_create_interactive_surface.md`.
   - 2 canonical ADRs at `aDNA.aDNA/what/decisions/`.
   - Workspace `~/lattice/CLAUDE.md` Standing Rule (T1 slot; ≤ 200 chars).
   - Upstream propagation to `LatticeProtocol/aDNA` template at P5.4 (operator-discretionary cadence).

4. **Consumer federation pattern**: `<vault>/siteforge/interactive_surface/` wrapper + `federation_ref` block + opt-in per Campaign SO #10 (cross-vault context integration mechanics).

5. **RLHF schema alignment**: AD-7 JSON output schema v1.0 is adr_005-compatible at `III.aDNA/what/decisions/adr_005_rlhf_signal_channel.md`; ACCUMULATE adapter at P5.5 owns the gate-output → learning-store transform; opt-in per consumer T2 wrapper (D11).

6. **III decadal cadence**: 100 cycles × 10 decadal arcs (Rosetta precedent) + 6-axis III pack at P3.1 + 7th-axis agent-ergonomics; gates Phase 4 entry at ≥ 4.0/5 average across all rankers + ≤ 2 min agent-ergonomics.

7. **OIP unification absorption**: Operation Loom is the precursor; Operation Concord absorbs Loom's outputs at its `arch_02` + `pilot_02` (no redesign).

8. **3 pilot validations**: MoleculeForge P4 gate + RareHarness clinician-MBP + WilhelmAI charter (gates Phase 6 close at operator-self-report ≥ 4.0/5 per pilot).

## LIP Numbering Request

**Request**: please reserve a LIP number at `lattice-labs/` (or `LatticeLabs.aDNA/` if Phase-6 cutover has happened by P7.2 timing — see Vault Succession note below).

**Authoring mission**: Operation Loom P7.2 (Phase 7).

**Number**: any next-available LIP number; no preference.

## Vault Succession Note

The workspace router (workspace `~/lattice/CLAUDE.md`) shows `lattice-labs/` is **operationally authoritative until Phase-6 cutover** (LatticeLabs.aDNA Phase 4 ✅ CLOSED 2026-05-20; Phase 5 entry-gate ✅ CROSSED; sole-mission `validate_cleanup` next).

By the time Operation Loom reaches P7.2 (~30-60 days out), LatticeLabs.aDNA may have completed Phase 6 cutover. Berthier may file the LIP reservation at either vault per ongoing LatticeLabs.aDNA migration discipline — Operation Loom defers to Berthier's judgment on which vault is authoritative at reservation-time.

If reservation lands at `lattice-labs/` and cutover happens before P7.2, the LIP migrates with the rest of LIP-doctrine artifacts during Phase-6 cutover. No Operation Loom action required.

## Cross-Coord Family Pointers

Three sibling coord memos fire today as part of the P1.3 architecture-lock coord family:

- **Memo 1 — Rosetta** (`coord_2026_05_21_siteforge_interactive_subsystem_p1_rosetta_standard_touch.md`) — aDNA.aDNA standard-touch alignment + 2 ADR slot requests.
- **Memo 2 — OIP Unification** (`coord_2026_05_21_siteforge_interactive_subsystem_p1_oip_precursor.md`) — concrete absorption-contract inventory.
- **Memo 3 — Argus Panoptes (III.aDNA)** (`coord_2026_05_21_siteforge_interactive_subsystem_p1_iii_argus.md`) — domain pack + ADR slot reservation + v0.2.0 pin confirmation.

(This memo is Memo 4.)

## Ask

1. **LIP slot reservation acknowledgment** with reserved LIP number when convenient. No urgency.
2. **Vault-of-record clarification** — when ready, please confirm which vault (`lattice-labs/` vs `LatticeLabs.aDNA/`) Operation Loom should target for P7.2 LIP authoring, based on Phase-6 cutover status at that time. (Loom can defer the decision to P7.2 entry; no action needed now if uncertain.)
3. **LIP-doctrine heads-up** — any LIP-authoring conventions, templates, or governance updates between now and P7.2 that Loom should track. (Operation Loom currently models on the existing LIP-0001 through LIP-0006 lineage at lattice-labs.)

## Future Coord

P7.2 will fire a substantive LIP-authoring coord memo at Operation Loom Phase 7 entry, with full LIP draft attached.

If Berthier requires anything else for the reservation — e.g., a one-pager LIP summary draft now rather than at P7.2 — Operation Loom welcomes the request and can author it in a sub-mission session.

---
*Fired by agent at SiteForge.aDNA P1.3 (Phase 1 close), 2026-05-21. Architecture anchor: P1.2 draft ADR + full architecture spec (50KB) — both at `SiteForge.aDNA/how/campaigns/campaign_siteforge_interactive_subsystem/missions/artifacts/`. Seed session: aDNA.aDNA `session_stanley_20260521T023403Z_v8_m31_s1`.*
