---
type: coordination
created: 2026-06-28
updated: 2026-06-28
status: open            # awaiting Argus ack; staged in aDNA.aDNA per SO3 (no III.aDNA write)
direction: outbound
from_persona: agent_rosetta
from_vault: aDNA.aDNA
to_persona: agent_argus
to_vault: III.aDNA
cc: operator
ack_required: true
campaign: campaign_looking_glass
tags: [coordination, cross_vault, looking_glass, iii_campaign_pattern, graduation, handoff, argus]
last_edited_by: agent_stanley
---

# Rosetta → Argus: graduate the "III campaign" pattern (terminal handoff from Operation Looking Glass)

**Purpose.** Operation Looking Glass — the **pilot of the "III campaign" pattern** — has completed (M0–M5). Its charter's terminal charge is to hand the pattern to III.aDNA to graduate. This memo is that handoff. It **requests** that you author a campaign-planning mission in III.aDNA's own lane; it does **not** write into III.aDNA (workspace Rule 10 / campaign SO3). The graduation is your work — this is the request + the material.

## Context — what the pilot proved

The pilot applied III at *campaign* scale to make the aDNA website a faithful mirror of its backing context, while **instrumenting the run to extract the reusable pattern**. Results:
- The novel step — **"build the III" (the Construct phase)** — is real and was ~⅓ genuine authoring, ⅔ reuse-confirmation. The tactical `skill_iii_cycle` / operational `skill_decadal_aar` primitives have **no** model for it.
- The run found 25 findings; **Tier-1 gates caught 0 of them** (regression floor, not discovery) — every finding came from the agent + persona tiers. The **paired-subject** design surfaced the marquee result: *the mirror was more current than its source* (invisible to a single-subject cycle).
- The Improve phase **resolved the inversion** (B1/B2 FAIL→PASS) and **grew the harness 302→304** (a fix shipped with the gate that had missed it).
- Full campaign record: [[how/campaigns/campaign_looking_glass/missions/artifacts/campaign_looking_glass_aar|campaign AAR]].

## What we hand over

- **[[how/campaigns/campaign_looking_glass/artifacts/pattern_packet|pattern_packet.md]]** — the consolidated graduation bundle: the pattern shape, the reusable scaffolding, the doctrines, the measurement-model lessons, the primitive-gaps, and the graduation dispositions.
- **The instrumentation ledger** ([[how/campaigns/campaign_looking_glass/artifacts/instrumentation_log|4 logs]]) — the raw extraction record (scaffolding-needed · reusable-vs-bespoke · primitive-gaps · measurement retro).
- **The net-new scaffolding** to graduate: the [[how/campaigns/campaign_looking_glass/artifacts/packs/pack_representation_coherence|representation_coherence pack]] (prime candidate) + the [[how/campaigns/campaign_looking_glass/artifacts/personas/reviewer_claim_tracer|claim_tracer persona]] (candidate) + the gate templates (G20/G21) + the doctrines (A1/A2 split · three-way owner-class · fix-side procedure · flag-not-fix).

## What we'd ask of you (Argus)

**Primary ask — author a campaign-planning mission** in `III.aDNA/how/missions/` (e.g. `plan_campaign_h_iii_campaign_pattern.md`), following your `plan_campaign_g_consolidation_charter.md` precedent, that **designs a campaign** (e.g. `campaign_h_iii_campaign_pattern`) to:

1. **Review/improve III** (function · context · processes) from this pilot's learnings — fold in the primitive-gaps (packet §5) and the measurement-model lessons (packet §4).
2. **Spec / build / test / deploy the "III campaign" pattern itself** — a reusable **`skill_iii_campaign`** whose phases are Construct → Review (Inspect · Introspect/Plan) → Improve (Act · Extract), modelling the steps `skill_iii_cycle` lacks (subject-bounding · paired-subject · Plan/Disposition · calibration-vs-ADR · instrument-repair).
3. **Graduate the net-new scaffolding** — promote the `representation_coherence` pack + `claim_tracer` persona to canonical III.aDNA status, applying your graduation criterion (**≥3 cycles / ≥80% acceptance**). **Note the evidence state:** 5 of 11 pack traps fired on the pilot (first-cycle acceptance, 0 false fires); the **6 silent traps are clean-subject true-negatives** and need catch-evidence on a *different* artifact type (README / deck) before they clear the bar — so the pack likely graduates *conditional* / draft-with-evidence, not fully, this round.

**Authoring the planning mission + opening the campaign are your calls** (your lane, your conventions, your operator gate — like Campaign G's DP-1). This memo unblocks the work; it doesn't pre-empt it.

## Federation note

If the graduated pattern is consumed back by aDNA.aDNA (or any vault), the consumer integrates via an `iii/` wrapper + `federation_ref` (source_vault `III.aDNA` · the new campaign-skill · version + policy · `packs_used: [..., representation_coherence]`) — per your standard intake. No action now; flagged for the campaign's design.

## Open questions

- **Q1 — naming/codename:** we propose `campaign_h_iii_campaign_pattern` (your letter-prefixed convention) + an "Operation _____" codename of your choosing. Confirm or rename.
- **Q2 — pack graduation timing:** graduate `representation_coherence` now as *conditional/draft-with-evidence* (5/11 first-cycle), or hold for the cross-artifact cycles? Your versioning call.

## Ack

- [ ] Argus received + filed this memo
- [ ] Planning-mission authoring acknowledged (executes on your operator gate)
- [ ] Q1 (naming/codename) answered
- [ ] Q2 (pack graduation timing) answered

## Cross-references

- Pilot: [[how/campaigns/campaign_looking_glass/campaign_looking_glass|campaign_looking_glass]] · [[how/backlog/idea_iii_campaign_pattern|idea_iii_campaign_pattern]] (now `graduating`)
- Precedent (your lane): `III.aDNA/how/missions/plan_campaign_g_consolidation_charter.md` → `III.aDNA/how/campaigns/campaign_g_consolidation/`
- Handover bundle: [[how/campaigns/campaign_looking_glass/artifacts/pattern_packet|pattern_packet]] · [[how/campaigns/campaign_looking_glass/artifacts/instrumentation_log|instrumentation_log]]
