---
type: campaign_governance
campaign_id: campaign_looking_glass
created: 2026-06-27
updated: 2026-06-27
last_edited_by: agent_stanley
tags: [campaign, governance, iii_campaign_pilot]
---

# Campaign Standing Orders — Operation Looking Glass

**What this is:** the pilot of the **"III campaign"** pattern — a strategic, instrumented application of III to make the aDNA website a faithful mirror of the aDNA context, while building (and capturing) the context/processes/personas that drive the III. Master: [[campaign_looking_glass]].

**Status:** `active` — Phase 2 (Review) mid-flight. **DP1 + DP2 ratified (operator GO, 2026-06-27)**; M1 Construct ✅ + **M2 Inspect ✅** — scaffolding built, baselines captured, the III run across both subjects → scored findings register. Committed to `main`.

## The one thing to do next

**M2 is complete — run [[missions/mission_introspect_plan_m03|mission_introspect_plan_m03]] (M3, Phase 2 — Review) in a fresh session.** The [[artifacts/findings_register|findings register]] is filed (25 findings · 0 Crit / 6 High / 11 Med / 8 Low; marquee = **Subject B staler than Subject A** — site at v2.3/`aDNA-Network`, vault prose still v2.1–v2.2/`LatticeProtocol`). M3 **introspects** (calibrate real-vs-trade-off — chiefly the home-hero ethos dial A-11/A-12, deliberate by ADR; confirm the A2 machine/persona split held) and **ranks** the register into the evidence-backed improvement plan → **DP3**. The bounded M4 set is already legible: Subject-B v2.3 sweep (highest ROI) · A-15 security contact · A-01 proof-links + G20 manifest · A-06 `/vaults/graph` SSR. Honor pt19 + the Websites carve; no cross-vault writes; A-04 install-SHA → Hestia; keep appending [[artifacts/instrumentation_log|the instrumentation ledger]]. **Resolve the Vitruvius Q1/Q2 asks before any M4 deploy.**

## Standing orders (this campaign)

1. **Phase gates are human gates** (Standing Order 1) — no auto-advance across Parts 1→2→3.
2. **Honor pt19 + the Websites carve** — never `sync:vaults` / hand-edit `vaults.json`; the site's derived data + consumer re-points are Hestia/Vitruvius's lane. Sequence site changes around `campaign_websites_genesis` (B→C→A). Coordinate by memo.
3. **No cross-vault writes** — III.aDNA and Websites.aDNA changes are staged as coord memos (workspace Rule 10), never written directly. The III.aDNA handoff happens at the **terminal AAR**, not mid-pilot.
4. **Instrument the pilot** — capture what scaffolding Part 1 needed, what was reusable vs bespoke, and where III's tactical primitives fell short at campaign scale. These feed the terminal AAR's III.aDNA charge.
5. **Standing Orders 5 + 11** — every mission gets an AAR + a declared `token_budget_estimated`.
