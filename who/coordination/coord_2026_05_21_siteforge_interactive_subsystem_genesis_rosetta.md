---
type: coordination
subtype: outbound_genesis_notice
from: SiteForge.aDNA / campaign_siteforge_interactive_subsystem ("Operation Loom")
to: aDNA.aDNA / Rosetta
status: sent
fired_at: 2026-05-21
subject: "Operation Loom P0 genesis notice — standard-touch coord alignment (SiteForge interactive surface subsystem)"
tags: [coordination, outbound, siteforge, operation_loom, rosetta, standard_touch, adna_standard, oip_web_substrate]
related_campaign: campaign_siteforge_interactive_subsystem
related_coord_family: operation_loom_genesis_p0
follow_up_at: P1.3 (architecture-level coord memo after P1.2 architecture spec locked)
---

# Coord — Operation Loom Genesis Notice to Rosetta (aDNA.aDNA)

> **Genesis notice.** P0 genesis-planning session has opened and closed for `campaign_siteforge_interactive_subsystem` ("Operation Loom"). This memo informs Rosetta (aDNA.aDNA standard-touch coordinator) of the campaign scope and its intended standard-touch plan. A more substantive P1.3 coord memo will follow after architecture is locked.

## Summary

`campaign_siteforge_interactive_subsystem` ("Operation Loom") has been chartered and Phase 1 is now open. This 7-phase / 35-mission campaign builds a **production-grade interactive-surface subsystem** inside SiteForge — agent-authored HTML operator decision gates with on-demand rapid creation + 100-cycle III iterative refinement + cross-vault context integration.

**Two intertwined deliverable threads**:
- **(a) On-demand rapid creation**: `skill_create_interactive_surface(type, options)` → polished HTML in ≤ 2 min
- **(b) Cross-vault context integration**: discovery contract + context-passing + output-routing + ≤ 30-min consumer onboarding

The campaign was motivated by operator validation of the MoleculeForge Phase 3→4 gate (`gate_decision_p3.html`) as a superior UX pattern vs `AskUserQuestion`.

## Standard-Touch Plan (anticipated at Phase 5)

Rosetta is the standard-touch coordinator for the following aDNA.aDNA artifacts this campaign will author:

| Phase | Artifact | Location in aDNA.aDNA | Notes |
|---|---|---|---|
| P2.1 (prototype) | `skill_create_interactive_surface.md` | `how/skills/` | Prototype; promoted to canonical at P5.1 |
| P5.1 | Canonical skill promotion | `how/skills/` | Prototype → canonical |
| P5.2 | 2 ADRs | `what/decisions/` | Architecture + standard-touch ADRs |
| P5.3 | Workspace CLAUDE.md addition | `~/lattice/CLAUDE.md` | T1 discovery entry; ≤ 200 chars |
| P7.1 | Exemplar walkthrough | `what/exemplars/` | Full walkthrough + cross-vault walkthrough |

## ADR Slot Request

This campaign will need 2 ADR slots at `aDNA.aDNA/what/decisions/` (to be confirmed at P1.3 coord after ADR numbering audit):
- Architecture + fallback chain ADR (P1.2 draft → P5.2 canonical)
- Standard-touch ADR (P5.2)

Please note these upcoming additions. No ADRs authored at P0 per Campaign SO #14.

## LIP Slot Request

This campaign will need a LIP slot at `lattice-labs/` for Phase 7 P7.2 (LIP ratification of the interactive surface pattern as workspace-canonical). Please relay to Berthier for LIP number reservation when convenient. No timing urgency at P0 — needed by Phase 7.

## Campaign Code Name + Coupling

**Operation Loom** — weaving interactive surfaces into the context graph.

**OIP Unification coupling**: This campaign is the **precursor** to `B-aDNA-2026-05-20-OIP` ("Operation Concord" — OIP unification). Operation Loom lands the web-substrate first; OIP unification absorbs Loom's outputs at its `arch_02` + `pilot_02` phases when it opens (~30-60 days out). Separate coord memo to OIP owner is firing simultaneously.

## Follow-Up

A substantive P1.3 coord memo will follow after Phase 1 P1.2 architecture spec locks (anticipated 2-4 sessions out). That memo will provide: confirmed architecture decisions, ADR slot confirmation (with numbers), LIP slot confirmation, and absorption contract structure.

---
*Fired by agent at SiteForge.aDNA P0 genesis close, 2026-05-21. Campaign seed session: aDNA.aDNA `session_stanley_20260521T023403Z_v8_m31_s1`.*

---

> Campaign renamed 2026-05-22 → `campaign_siteforge_sis`; pack renamed → `context_iii_domain_packs_sis.md`. Filename preserved as historical anchor per parent-plan locked decision (operator-approved at `~/.claude/plans/please-read-the-claude-md-floating-forest.md`).

---

> **2026-05-23 P3p.6r ISS rename**: campaign `campaign_siteforge_sis` → `campaign_siteforge_iss`; SIS (site-interaction-surface) → ISS (Interaction Surface Site). Historical content preserved verbatim.
