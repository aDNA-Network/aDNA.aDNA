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

**Status:** `planning` (SEED). Nothing is chartered yet.

## The one thing to do next

Run [[missions/mission_looking_glass_planning|mission_looking_glass_planning]] — it authors the full charter (objectives, phases, gates, the Part-1 III-scaffolding spec, the measurement model). Do this in a **fresh session** (the operator will `/clear` first). Until the operator ratifies that charter (Decision Point 1), **do not begin Part 1 execution.**

## Standing orders (this campaign)

1. **Phase gates are human gates** (Standing Order 1) — no auto-advance across Parts 1→2→3.
2. **Honor pt19 + the Websites carve** — never `sync:vaults` / hand-edit `vaults.json`; the site's derived data + consumer re-points are Hestia/Vitruvius's lane. Sequence site changes around `campaign_websites_genesis` (B→C→A). Coordinate by memo.
3. **No cross-vault writes** — III.aDNA and Websites.aDNA changes are staged as coord memos (workspace Rule 10), never written directly. The III.aDNA handoff happens at the **terminal AAR**, not mid-pilot.
4. **Instrument the pilot** — capture what scaffolding Part 1 needed, what was reusable vs bespoke, and where III's tactical primitives fell short at campaign scale. These feed the terminal AAR's III.aDNA charge.
5. **Standing Orders 5 + 11** — every mission gets an AAR + a declared `token_budget_estimated`.
