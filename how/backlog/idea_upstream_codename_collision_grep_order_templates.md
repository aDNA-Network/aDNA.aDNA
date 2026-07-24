---
type: backlog_idea
status: proposed
priority: low
created: 2026-07-22
updated: 2026-07-22
last_edited_by: agent_rosetta
triage_target: refit_m5_vnext
tags: [backlog, idea, upstream, order_template, codename, collision, naming_discipline, refit_m1, rareanthropic_origin]
---

# Idea — Upstream: "grep the codename before setting it" in order / campaign templates

## Problem / Opportunity

Surfaced by Hygeia (RareAnthropic.aDNA) as a non-ask observation in [[coord_2026_07_22_rareanthropic_to_rosetta_org_graph_registration|the 2026-07-22 org-graph registration memo]], folded into [[campaign_refit|Operation Refit]] M1:

> A genesis order's codename collided with a **closed Canvas campaign** — "Operation Cartography" (**74 fleet refs**). This is the **second occurrence of the codename-collision class** (the Fluxer AAR was the first). If order/campaign templates ever graduate upstream, a **"grep the codename before setting it"** line would close the class.

The failure mode: a new campaign/order/operation picks a codename that a **prior (often closed) campaign already owns**, producing ambiguous cross-fleet references — a grep for the operation name returns two unrelated campaigns, and cold-start agents can route to the wrong one. It is cheap to prevent (one grep at naming time) and annoying to unwind after fleet refs accumulate (74, in the Cartography case).

## Proposed change (for M5 disposition)

Add a one-line **naming-discipline guardrail** to the campaign/order-authoring surface — wherever a codename is first set (charter template, `skill_project_fork`, an order template if/when one graduates):

> **Before setting a codename, grep the fleet for it** (`grep -ril "Operation <Name>" ~/aDNA`); if it resolves to any existing/closed campaign, pick another. A codename is a fleet-unique key.

Scope question for M5: is the natural home a **campaign charter template**, the **order-template** track (if it graduates — it is not yet a standard surface), or a workspace **standing rule**? Two instances (Fluxer, RareAnthropic/Cartography) is enough to name the class; whether it warrants a template touch vs. a lighter convention note is the triage call.

## Provenance / status

- **Origin**: RareAnthropic.aDNA (Hygeia), Operation Portolan genesis, 2026-07-22.
- **Class evidence**: n=2 (Fluxer AAR · RareAnthropic "Operation Cartography" ↔ closed Canvas campaign, 74 refs).
- **Status**: `proposed` — **queued for Refit M5 vNext triage** (the phase that dispositions the ~30-idea upstream pool into the v8.9 / v2.6 roadmap). No build here; M5 decides adopt / amend / decline + landing surface.
- Sibling naming-discipline idea already in the pool: [[idea_upstream_phase_display_grammar]] (phase-slot grammar) — both are cheap authoring-time guardrails against ambiguous fleet-wide references.

## Disposition — Refit M5 vNext triage (2026-07-24) · **ADOPT → v8.9 governance** *(proposed; ratifies at G2/DP9)*

ADOPT into the v8.9 batch — small template touch. Add a "grep the codename before setting it" authoring note to the
order/campaign templates (routed here by M1). Low-risk, no schema change, no count bump. Roadmap: [[vnext_roadmap]] §v8.9.
