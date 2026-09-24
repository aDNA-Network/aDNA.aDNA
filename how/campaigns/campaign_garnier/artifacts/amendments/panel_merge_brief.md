---
type: decisions
artifact_class: decision_brief
campaign_id: campaign_garnier
title: "Decision brief: one joint endgame panel, after the rewrite"
created: 2026-09-16
updated: 2026-09-24
status: accepted
last_edited_by: agent_rosetta
tags: [garnier, haussmann, p5_1, panel, ordering, ratified]
---

# Decision brief — merge the two endgame panels and order them after GARNIER

## The two rulings requested (one signature covers both)

1. **Ordering:** HAUSSMANN P5.1's cold-reader panel (AC-1) runs **after** GARNIER's craft
   waves (through P4) and GR-7's integration of the GARNIER diff — not before. AC-2 (recruited
   non-builder TTFS) and AC-3 (operator-as-outsider contribution run) are released from this
   ordering and may run whenever convenient; neither cold-reads the homepage copy the rewrite
   touches.
2. **Merge:** that panel and GARNIER P5.1's panel are **one recruitment event** — a single
   cohort of ≥5 new humans per decisive class (engineer / funder / scientist; a superset of
   HAUSSMANN's 5-across-3-profiles), one live-production stimulus at a stamp re-derived from
   `/.well-known/adna-build.json` before the first panellist, both campaigns' sealed keys
   applied by both scorer pairs to the same session records, each campaign's bar reported
   against its own key. A verdict disagreement between the keys on one record is a recorded
   finding, never resolved away.

## Why this is the right shape

[I] **Cold readers are a consumable.** Both reader protocols forbid pooling participants
across site versions, and both require fresh cohorts on a failed-and-revised surface. A panel
run now measures a homepage the ratified GARNIER campaign is actively replacing (three
candidate increments already exist) — a guaranteed re-recruitment. Two separate panels also
means recruiting ~20 humans instead of ~15, engaging the deploy hold twice, and asking the
scorers to seal and calibrate twice.

[I] **The deploy-hold hazard shrinks.** The hold engages when `evidence/p5_1/` goes non-empty
and lasts until the panel closes. Under the merge it engages once, at a moment when GARNIER
has stopped changing the measured surfaces — instead of freezing deploys mid-rewrite.

[I] **GR-7's discipline is preserved.** Integration ("re-derive everything; the handback is a
hypothesis") completes *before* measurement, so the panel measures the integrated site — the
order the instrument doctrine wants.

## Costs and risks, stated

- **The HAUSSMANN measurement moves later.** If you want an evidence point on today's site
  from cold humans, this ruling forgoes it. (The synthetic prescreens and the register remain
  the interim evidence, labelled as such.)
- **A GARNIER failure cascades.** If the joint panel fails a class, both campaigns repeat with
  fresh cohorts. This risk exists in any ordering; the merge just makes it shared.
- **P5.2 (HAUSSMANN rescore) waits with it** — as it already does; nothing agent-side moves
  P5.1 today either. G2 (Speed Insights) remains P5.2's independent second blocker and is
  worth a dashboard look regardless.

## Alternatives considered

- **Panel now, panel again after GARNIER:** honest but pays for two recruitments and yields a
  first measurement of a surface already ruled superseded.
- **Panel now, skip GARNIER P5.1:** breaches GARNIER's DP7 bar (≥5 per class on the finished
  site) — not available without amending a ratified charter downward.
- **Keep them separate but both after GARNIER:** viable, strictly worse than the merge (same
  timing, double recruitment), unless you want the two panels' cohorts fully independent as a
  methodological control. If that independence matters to you, sign ruling 1 only.

## Ratification (§7.7)

- **Decision:** rulings 1 + 2 above, both taken.
- **Ratified-by:** Stanley Bishop, Founding Architect.
- **Date:** 2026-09-17.
- **Status:** accepted.
- **Gate / session reference:** operator chat approval “All recs approved.” (2026-09-17) + the two-question G4/G5 follow-up gate; [[session_stanley_20260917_052304_garnier_ratification_batch]].
- **Effect if accepted:** HAUSSMANN P5.1 AMENDMENT 5 and GARNIER P5.1's joint-panel note come
  into force; recruitment remains operator-only; deploy-hold semantics unchanged; DP7 and
  HAUSSMANN's close gates remain human.

Related: [[mission_haussmann_p5_1_human_evidence]] · [[mission_garnier_p5_1_human_panel]] ·
[[reader_protocol]] · [[formative_stimulus_repin_20260916]].

[D] **Executed at both destinations 2026-09-24**: HAUSSMANN `mission_haussmann_p5_1_human_evidence.md` §AMENDMENT 5 → `accepted`/in force; GARNIER `mission_garnier_p5_1_human_panel.md` mirror → in force. (The 09-17 batch session recorded the activation and did not perform it; performed by `session_stanley_20260924_083249_garnier_reorientation`.)
