---
type: coordination
created: 2026-05-30
updated: 2026-05-30
author: agent_stanley
from_persona: Rosetta
from_vault: aDNA.aDNA
to_persona: Berthier
to_vault: LatticeLabs.aDNA
direction: inbound_await   # aDNA.aDNA is AWAITING a memo FROM the brand-refactor effort; this is the placeholder/inbox
urgency: action_requested
delivery_active: 2026-05-30
delivery_held_until: "the upstream aDNA/Lattice brand-refactor coordination memo drops (operator will help locate it)"
expires: 2026-08-30   # 3-month soft expiry; renew if the brand refactor has not landed
last_edited_by: agent_stanley
related_mission: aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p5_m57_adnalabs_expansion_planning_stub.md
related_brief: aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m57_adnalabs_expansion_seed_brief.md
related_skill: aDNA.aDNA/how/skills/skill_vercel_squarespace_domain_cutover.md
ack_required: true
ack_target_window: "when the brand-refactor coord memo is authored at LatticeLabs.aDNA (or wherever the operator directs) — link it back here"
tags: [coordination, v8, p5, m5_7, brand_pivot, adnalabs, adna_network, inbound_await, awaiting_brand_refactor_memo, rosetta_berthier]
---

# Coord Memo (INBOUND-AWAIT): aDNA.network site refactor awaits the aDNA/Lattice brand-refactor memo

**From / awaiting**: Rosetta (`aDNA.aDNA/`) ← Berthier (`LatticeLabs.aDNA/`) + operator
**Date**: 2026-05-30
**Status**: filed as an **inbound-await placeholder** — this is the inbox the M5.7 planning mission watches; the *actual* brand-refactor coordination memo will be authored elsewhere (launched from `LatticeLabs.aDNA`) and the **operator will help locate it**.
**Re**: pausing the aDNA.aDNA docs-polish mainline and re-scoping this vault's website into the forward face of **aDNALabs** at **aDNA.network** — gated on the upstream brand refactoring.

## §1 Purpose

Record, on the aDNA.aDNA side, the dependency that gates the M5.7 planning mission's substantive work: an **upstream brand-refactor coordination memo** that authorizes and scopes the aDNA-forward rename (aDNA = forward-facing network/community/lab; Lattice = underlying protocol; `LatticeLabs`→aDNALabs, `LatticeNetwork`→aDNANetwork). The M5.7 planning mission (`related_mission`) self-expands first (Objective 1), then **assumes this memo has dropped** before doing the substantive site re-scope (O2+).

## §2 Context

M5.6 (D15) closed 2026-05-30; the campaign `campaign_adna_serious_tool_readiness` is **paused-but-resumable** at the D16-D20 docs-polish boundary pending re-scope. The operator's strategic pivot makes aDNA the forward-facing brand and this vault's site the main forward face of aDNALabs — spanning standard/docs + a context-graph marketplace/registry + community/labs/org + the aDNANetwork — with the URL moving to aDNA.network (Squarespace `sarosal@gmail.com` → Vercel). This refactor **launches from `LatticeLabs.aDNA`** with extensive cross-graph co-execution; the brand rename is owned upstream, not here.

## §3 What aDNA.aDNA has done / will do

- Seeded the **M5.7 self-expanding planning stub** + this seed brief at the M5.6-close wind-down.
- Paused the D16-D20 mainline (campaign master + STATE Op-3); repointed the Next Session Prompt to open the M5.7 stub.
- **Will**, at M5.7: self-expand the stub → full planning spec; then (gated on this memo) design the expanded site IA, re-scope D16-D20, expand the persona bench, draft the aDNA.network domain-cutover sub-plan, and produce an execution roadmap gated to begin **after** the brand rename lands.
- **Will not** rename anything or build site code until the upstream memo + operator go-signal arrive.

## §4 What LatticeLabs.aDNA / the operator is expected to provide

When the brand-refactor coordination memo drops, it (or the operator) should give the M5.7 execution agent:
1. **Rename scope + authority** — canonical names (aDNALabs / aDNANetwork), which surfaces rename here vs. upstream, and who owns each decision.
2. **Brand/asset decisions** — logo/wordmark, color/identity for aDNA-forward vs Lattice-as-protocol, any aDNALabs visual system.
3. **Marketplace/registry + network intent** — how the context-graph marketplace and the "network of aDNA computers" should be framed/scoped on aDNA.network.
4. **Cross-graph co-execution plan** — which graphs co-execute, sequencing, and the coordination cadence.
5. **Domain go-signal** — confirmation to run the aDNA.network cutover (Squarespace `sarosal@gmail.com` OAuth window; per `skill_vercel_squarespace_domain_cutover`).
6. **A link back to this note** — so the inbound-await closes.

## §5 Cross-vault impact summary

| Scope | Detail |
|---|---|
| Inbound (blocking) | The brand-refactor memo gates M5.7 O2+. |
| Local | aDNA.aDNA campaign paused; M5.7 stub seeded; no renames/site code yet. |
| Outbound | None yet — outbound coordination is part of M5.7's execution roadmap (O7). |

## §6 Open questions for Berthier / operator

| # | Question | Status |
|---|---|---|
| 1 | Where will the canonical brand-refactor memo live (LatticeLabs.aDNA path)? | open — operator to direct |
| 2 | Is aDNALabs/aDNANetwork the final naming, or provisional pending the refactor? | open |
| 3 | Does the marketplace/registry surface live on aDNA.network, or federate from another graph? | open — M5.7 O3 to propose |
| 4 | Timing: does M5.7 substantive planning wait for the memo, or proceed on a provisional brief with later reconciliation? | open — default per stub gate: O1 now, O2+ on memo |

## §7 Acknowledgment protocol

- The brand-refactor coord memo (authored upstream) should **link back to this note** and set its `delivery_held_until` resolved.
- On arrival, the M5.7 planning agent records the memo path in the mission spec's `resume_gate_ref` resolution and lifts the gate.
- Preserve this note per Campaign SO #13 (archive on resolution; never delete).

## §8 Cross-references

- M5.7 stub: [[mission_adna_str_p5_m57_adnalabs_expansion_planning_stub]]
- Seed brief: [[m57_adnalabs_expansion_seed_brief]]
- Domain cutover skill: `aDNA.aDNA/how/skills/skill_vercel_squarespace_domain_cutover.md`
- Pause precedent: `who/coordination/coord_2026_05_25_v8_p4_pause_p5_pivot.md`

## Notes for Stanley (operator)

You said you'd help the next agent find the brand-refactor coordination memo. This note is the inbox it will check. When the upstream memo exists (launched from `LatticeLabs.aDNA`/Berthier), drop its path into §6-Q1 here (or tell the agent at session open) and the M5.7 gate lifts for O2+. Until then, the M5.7 agent will self-expand the stub (O1) and hold.
