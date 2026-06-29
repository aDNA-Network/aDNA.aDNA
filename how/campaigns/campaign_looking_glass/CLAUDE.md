---
type: campaign_governance
campaign_id: campaign_looking_glass
created: 2026-06-27
updated: 2026-06-28
last_edited_by: agent_stanley
tags: [campaign, governance, iii_campaign_pilot]
---

# Campaign Standing Orders — Operation Looking Glass

**What this is:** the pilot of the **"III campaign"** pattern — a strategic, instrumented application of III to make the aDNA website a faithful mirror of the aDNA context, while building (and capturing) the context/processes/personas that drive the III. Master: [[campaign_looking_glass]].

**Status:** `active` — **Phase 3 (Improve)**. DP1 + DP2 + **DP3 ratified**; M1–M4 ✅. **M4 Improve+re-measure ✅ (2026-06-28)** executed the bounded set on both subjects — **marquee A/B inversion resolved** (B1/B2 FAIL→PASS; site + slice both v2.3 / `aDNA-Network`), re-measure **304/304** (zero regression, +2 coverage), deploy **staged-held** (Vitruvius Q1/Q2 gate). **Next = M5 closeout.** Committed to `main`.

## The one thing to do next

**M4 is complete — run [[missions/mission_closeout_handoff_m05|mission_closeout_handoff_m05]] (M5, Phase 3) to close the campaign.** M5: file the **campaign AAR** (verify A1–A4 / B1–B3 vs. baseline — now PASS for the chartered scope; B1/B2 flipped at M4), finalize the **pattern packet** (the `representation_coherence` pack + claim-tracer persona + process + measurement model + the [[artifacts/instrumentation_log|instrumentation ledger]]), and **author the III.aDNA campaign-planning handoff as a coord memo** (Standing Order 3 — no III.aDNA write; the pattern graduates there). M4 results: bounded set landed both subjects, **marquee A/B inversion resolved**, re-measure **304/304** → [[artifacts/remeasure_snapshot|remeasure_snapshot]] + AAR [[missions/artifacts/aar_m04_improve_remeasure|aar_m04_improve_remeasure]] (GO). **Gated follow-up (not M5-blocking):** deploy go-live needs the **Vitruvius Q1/Q2** answers + an explicit operator go → then the carried live-verify. **Queued follow-ons:** [[how/backlog/idea_vaults_graph_ssr|A-06 graph SSR]] + [[how/backlog/idea_vault_wide_currency_sweep|vault-wide currency sweep]]; the [[who/coordination/coord_2026_06_28_rosetta_to_hestia_install_sha|Rosetta→Hestia memo]] (A-04 + A-01 regen, `ack_required`) awaits pickup. Honor pt19 + the Websites carve; no cross-vault writes.

## Standing orders (this campaign)

1. **Phase gates are human gates** (Standing Order 1) — no auto-advance across Parts 1→2→3.
2. **Honor pt19 + the Websites carve** — never `sync:vaults` / hand-edit `vaults.json`; the site's derived data + consumer re-points are Hestia/Vitruvius's lane. Sequence site changes around `campaign_websites_genesis` (B→C→A). Coordinate by memo.
3. **No cross-vault writes** — III.aDNA and Websites.aDNA changes are staged as coord memos (workspace Rule 10), never written directly. The III.aDNA handoff happens at the **terminal AAR**, not mid-pilot.
4. **Instrument the pilot** — capture what scaffolding Part 1 needed, what was reusable vs bespoke, and where III's tactical primitives fell short at campaign scale. These feed the terminal AAR's III.aDNA charge.
5. **Standing Orders 5 + 11** — every mission gets an AAR + a declared `token_budget_estimated`.
