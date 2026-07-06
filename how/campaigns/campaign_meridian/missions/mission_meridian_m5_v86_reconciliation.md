---
type: mission
mission_id: mission_meridian_m5_v86_reconciliation
campaign: campaign_meridian
status: active
executor_tier: opus
token_budget_estimated: 110
created: 2026-07-06
updated: 2026-07-06
last_edited_by: agent_rosetta
tags: [mission, meridian, p1, v86, release_queue, backlog]
---

# M5 — v8.6 queue reconciliation + RC doc

The Champollion handoff packet ([[../../campaign_champollion/artifacts/handoff_packet_v8_4|§3]]) enumerated
the post-v8.4 queue (batches A–G) as "the v8.5 queue." **v8.5 shipped 2026-07-03 as the release-cut-hygiene
slice** ([[../../../missions/mission_v8_5_release_cut_hygiene|ship record]]) — most batch items did NOT
ship. This mission reconciles the queue and produces the curated **v8.6 release-candidate document**.
DP1-independent (scope pre-known). **Document only** — `skill_template_release` stays operator-fired
post-campaign.

## Objectives

1. Census (python, not grep): every handoff-§3 item → dispositioned **shipped-in-v8.5 / queued-v8.6 /
   dropped (justified)**, cross-checked against the v8.5 ship record + backlog idea statuses.
2. Groom: sweep `how/backlog/` accepted/proposed items for v8.6 candidates missed by the packet
   (idea_upstream_* accepted set); flag stale statuses (ideas marked queued that already shipped).
3. Output: `how/campaigns/campaign_meridian/artifacts/v8_6_release_candidate.md` — batched, effort-tagged,
   with a recommended cut-line for the next `skill_template_release` firing.

## AAR

*(fill at close)*
