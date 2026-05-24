---
type: coordination
subtype: outbound_genesis_notice
from: SiteForge.aDNA / campaign_siteforge_interactive_subsystem ("Operation Loom")
to: III.aDNA / Argus Panoptes
status: sent
fired_at: 2026-05-21
subject: "Operation Loom P0 genesis notice — new III domain pack extension + ADR reservation request (SiteForge interactive surface subsystem)"
tags: [coordination, outbound, operation_loom, iii_adna, argus_panoptes, new_domain_pack, adr_reservation, interactive_surfaces_pack]
related_campaign: campaign_siteforge_interactive_subsystem
related_iii_campaign: campaign_d_federation_adaptive_loop   # III Campaign D is current; domain pack extension is a III upstream contribution
related_coord_family: operation_loom_genesis_p0
follow_up_at: P1.3 (architecture-level III coord; ADR reservation confirmation) + P3.1 (domain pack authoring)
---

# Coord — Operation Loom Genesis Notice to III.aDNA (Argus Panoptes)

> **Genesis notice.** P0 genesis-planning session has opened and closed for `campaign_siteforge_interactive_subsystem` ("Operation Loom"). This memo informs Argus Panoptes (III.aDNA) of the campaign's intent to extend the SiteForge III consumer wrapper with a new interactive-surface domain pack, and requests an ADR slot reservation.

## Summary

Operation Loom (SiteForge interactive surface subsystem) will use III.aDNA's quality improvement framework as the primary design-refinement engine for Phase 3: 100 III cycles across 10 themed decadal arcs. This is the same precedent as Operation Rosetta (Phase 7 — 100 cycles in 10 decadal arcs; persona ranker 5.00 ratified).

Loom extends the III framework with a **new domain pack specific to agent-authored decision surfaces** — the first pack to address agent-to-human interaction surfaces rather than static content quality.

## Domain Pack Announcement

**Pack name**: `context_iii_domain_packs_interactive_surfaces.md`  
**Authors at**: Phase 3 P3.1 (SiteForge.aDNA, with potential upstream contribution to III.aDNA)  
**Location**: `SiteForge.aDNA/iii/what/context/context_iii_domain_packs_interactive_surfaces.md` (local first; upstream contribution at Phase 7 area)

**6-axis ranker** (supplements standard `web_design` pack):
| Dimension | Code | Description |
|---|---|---|
| Decision Clarity | DC | Single clear decision with concrete options |
| Agent Context Transparency | ACT | 3-5 key factors + expandable full chain |
| Signal Quality | SQ | Structured choice + confidence + open comment |
| Trust Calibration | TC | Confidence bracket visible; uncertainty acknowledged |
| Cognitive Load | CL | ≤ 5 options; scannable in ≤ 30 seconds |
| Recovery/Undo | RU | Full review step; edit-before-submit; cancel path |

**7th dimension (agent-ergonomics)**: ≤ 2 min from agent invocation → operator-readable HTML. This dimension is specific to this campaign's agent-ergonomics metric (I5) — not proposed as upstream III standard, but tracked internally per decadal AAR.

**3 optional overlay personas** (activation at specific decadals):
- RLHF-Quality reviewer (D2 + D3)
- Agent-Steward reviewer (D2)
- Operator-Safety reviewer (D3 + D7)

## ADR Reservation Request

Please reserve an ADR slot at `III.aDNA/what/decisions/` for a future contribution:

**ADR title**: `adr_NNN_interactive_surface_iii_domain_pack.md`  
**Contents**: Ratification of the `context_iii_domain_packs_interactive_surfaces.md` domain pack as an upstream III extension. Covers 6-axis ranker + scoring rubric + 3 overlay personas + agent-ergonomics dimension definition.  
**Authors at**: After Phase 3 validation (tentatively Phase 7 area or post-campaign Campaign D+ window).

No rush on the reservation — this is an advance notice so the III ADR numbering doctrine honors forward-only slot assignment (per M2.4 forward-only slot-reassignment doctrine).

## III Version Pin

Loom is currently pinned at `III.aDNA v0.2.0` (stable). D4 (III version pin) decision: **v0.2.0 confirmed at P0** since v0.3.0 is pending III Campaign D DG-D close. If v0.3.0 (with MD-B2 adaptive improvement loop) lands before Loom Phase 3 opens, Loom will review D4 at Phase 3 entry (upgrade v0.2.0 → v0.3.0 is low-risk per additive disposition).

## Asking

1. ADR slot reservation acknowledgment (informal; for planning purposes)
2. Any III Campaign D work that would affect the interactive-surface domain pack scope (e.g., if MD-B2 adaptive-improvement loop spec changes how domain packs work with RLHF signals)

---
*Fired by agent at SiteForge.aDNA P0 genesis close, 2026-05-21. III.aDNA current state: Campaign D active (MD-B1 ✅ closed 2026-05-20; MD-B2 or MD-A1 next per III STATE.md). Seed session: `session_stanley_20260521T023403Z_v8_m31_s1`.*

---

> Campaign renamed 2026-05-22 → `campaign_siteforge_sis`; pack renamed → `context_iii_domain_packs_sis.md`. Filename preserved as historical anchor per parent-plan locked decision (operator-approved at `~/.claude/plans/please-read-the-claude-md-floating-forest.md`).

---

> **2026-05-23 P3p.6r ISS rename**: campaign `campaign_siteforge_sis` → `campaign_siteforge_iss`; SIS (site-interaction-surface) → ISS (Interaction Surface Site). Historical content preserved verbatim.
