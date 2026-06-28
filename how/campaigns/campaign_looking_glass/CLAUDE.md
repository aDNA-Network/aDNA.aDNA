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

**Status:** `active` — Phase 2 (Review) unblocked. **DP1 + DP2 both ratified (operator GO, 2026-06-27)**; M1 Construct ✅ — scaffolding built + baselines captured + committed to `main`.

## The one thing to do next

**DP2 is ratified — run [[missions/mission_inspect_m02|mission_inspect_m02]] (M2, Phase 2 — Review) in a fresh session.** The scaffolding is built: [[missions/mission_construct_scaffolding_m01|M1]] · [[artifacts/baseline_snapshot|baseline_snapshot]] · [[artifacts/packs/pack_representation_coherence|representation_coherence pack]] · [[artifacts/personas/reviewer_claim_tracer|claim-tracer persona]] · the 2 new gates (302 green) · [[artifacts/site_backing_slice|site-backing slice]]. M2 runs the III across Subject A + B → scored findings register (the first agent/persona baseline) → M3 Introspect+plan → DP3. Honor pt19 + the Websites carve; no cross-vault writes; keep appending [[artifacts/instrumentation_log|the instrumentation ledger]].

## Standing orders (this campaign)

1. **Phase gates are human gates** (Standing Order 1) — no auto-advance across Parts 1→2→3.
2. **Honor pt19 + the Websites carve** — never `sync:vaults` / hand-edit `vaults.json`; the site's derived data + consumer re-points are Hestia/Vitruvius's lane. Sequence site changes around `campaign_websites_genesis` (B→C→A). Coordinate by memo.
3. **No cross-vault writes** — III.aDNA and Websites.aDNA changes are staged as coord memos (workspace Rule 10), never written directly. The III.aDNA handoff happens at the **terminal AAR**, not mid-pilot.
4. **Instrument the pilot** — capture what scaffolding Part 1 needed, what was reusable vs bespoke, and where III's tactical primitives fell short at campaign scale. These feed the terminal AAR's III.aDNA charge.
5. **Standing Orders 5 + 11** — every mission gets an AAR + a declared `token_budget_estimated`.
