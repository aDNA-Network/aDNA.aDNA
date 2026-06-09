---
mission_id: mission_ana_p2_closeout_realign
type: mission
title: "P2 — Wind-down / AAR + realign main campaign → resume E5"
campaign_id: campaign_adna_network_audit
phase: 2
mission_number: 2.1
slug: closeout_realign
status: planning
created: 2026-06-08
updated: 2026-06-08
last_edited_by: agent_stanley
owner: stanley
persona: rosetta
mission_class: closeout
spec_completeness: complete
estimated_sessions: "1"
token_budget_estimated: "~60-100 kT (final AAR + realignment edits)"
prerequisite_missions: [mission_ana_p1_m1_decisive_strokes]
prerequisite_artifacts:
  - how/campaigns/campaign_adna_network_audit/missions/artifacts/audit_adna_network_2026_06.md
  - how/campaigns/campaign_adna_network_audit/missions/artifacts/aar_audit_p0_p1s1.md
tags: [mission, campaign_adna_network_audit, phase2, closeout, realign]
---

# P2 — Wind-down / AAR + realign main campaign

> Runs after P1 (S2/S3/S4). Closes the side campaign and hands control back to `campaign_adna_serious_tool_readiness` at E5. The mid-campaign AAR (`aar_audit_p0_p1s1.md`) already holds the gap register; P2 extends it to a **final** AAR (covering P1-S2/S3/S4) and executes the realign.

## Goal
Final campaign AAR + **realign the main campaign** so its remaining E5 work absorbs the audit's campaign-tier findings — then resume E5 at c162.

## Objectives
1. **Final campaign AAR** — extend `aar_audit_p0_p1s1.md` (or a closing AAR) to cover P1-S2/S3/S4; append the 5-line AAR to the campaign master; set campaign `status: completed`.
2. **Realign into E5 — the concrete C1–C5 → cycle map** (fold the campaign-tier redesign items into the remaining E5 cycles; edit `m512_e5_public_good_commons_design_spec.md` per-cycle objectives + the E5 mission):
   - **C4** closing-CTA partials + the deferred **Connect affordance** → **E5 c162** (already the connect-affordance cycle).
   - **C3** nav/orphan surfacing — `/commons` nav entry + audience pages + unify secondary nav + mobile SidebarNav disclosure → **E5 c164** (homepage §5 hand-off + nav entry).
   - **C1** home-hero **concrete-then-ethos** + How-it-Works promotion (surface the existing `/learn/what-is-adna`) → an **E5 homepage cycle** (slot in 164–168).
   - **C2** **terminology/object-model spine** (node/aDNA-computer/vault/network) → **E5 165–168** MAX-III copy pass.
   - **C5** ADR-010 Wilhelm co-sign clear → **coordinated HEAD deploy** of `/commons` + the accumulated fixes → **E5-close deploy (c169)**.
3. **Doctrine + process** — add a "credibility hygiene" note to `front_page_doctrine.md` if warranted (no internal/private state in public surfaces; canonical-link discipline); resolve the two backlog ideas (`idea_deploy_cadence` → establish a cadence; `idea_upstream_public_projection_sanitizer` → file upstream per `skill_upstream_contribution`).
4. **STATE + memory + resume handoff** — update the main vault `STATE.md` (record audit outcome + **lift the E5 pause**; heavy file — offset/limit edits), update memory ([[project_site_redesign_ss_ghibli]] + [[project_adna_network_audit]]), and confirm E5 is unpaused at **c162** with the carry-ins tracked in the design spec.

## Exit Gate (campaign close)
- [ ] AAR filed; campaign master Completion Summary + AAR filled; `status: completed`.
- [ ] Main campaign STATE/spec/memory updated; E5 pause lifted; resume point unambiguous.
- [ ] Any unshipped roadmap items tracked (backlog or main-campaign cycle).

## Completion Summary
*Fill at close.*

## AAR
*Fill at close.*
