---
type: pattern
created: 2026-07-22
updated: 2026-07-22
status: draft
pattern_category: operational
applies_to: [coordination, campaigns, sessions, all_categories]
campaign_id: campaign_refit
instances:
  - "aDNA.aDNA (this vault) — the Operation Refit B-row docket (B1–B6, banded in the P0 SITREP) as a decision-queue-in-embryo + the self-caught 2026-07-22 RareAnthropic quiescent-window fold (Refit M1)"
graduation: "n=1 (this vault, embryonic). Operations.aDNA's reference implementation (2 campaigns / ~40 commit-cited rows) is the requested instance seed; a second vault-level adoption moves toward the 3-adoption graduation, ratified at a future operator gate per the instance-counting rule. Template fold deferred to a successor release campaign (skill_template_release)."
last_edited_by: agent_rosetta
tags: [pattern, decision_queue, operator_decision, quiescent_window, three_band, coordination, standing_surface, refit]
---

# pattern_decision_queue

> **Plain-language version first**: decisions arrive whether or not you're ready for them — a memo lands, a deadline appears, an outside dependency shifts. While a campaign is running, that campaign's to-do list (its *docket*) catches them. But between campaigns — the quiet windows — inbound keeps arriving and *nothing owns it*. It piles up in a coordination folder until someone stumbles across it, often past its deadline. A **decision queue** is a single standing surface that catches every pending operator decision and sorts it into three honest bands: **A) I can decide this now**, **B) this is waiting on a specific trigger**, **C) I'm blocked on someone else and just watching**. The key word is *standing*: the queue outlives any one campaign — it's the vault's always-on inbox for decisions, not a to-do list that vanishes when the campaign closes. One glance tells the operator what's actually actionable today, and every closed item names the commit that resolved it, so it's an audit trail, not a sticky-note pile.

## 1. Problem

Campaigns come with dockets; the **gaps between campaigns do not**. Coordination memos, deadlines, external-dependency changes, and upstream drift keep flowing when no campaign is open — and every one of them is a *pending operator decision* with no home. This is the **quiescent-window failure mode**: inbound outlives the campaign that would have caught it, so items sit unsorted in `who/coordination/`, deadlines slip silently (the ADR-022-silence class — a decision nobody was watching), and the next campaign has to re-discover the entire backlog before it can even start.

Two failures compound:

1. **No standing owner.** Between the memo landing and a campaign picking it up, nothing is accountable for the item. "It's in the coordination folder" is not ownership.
2. **No honest tri-state.** "Ready to decide," "waiting on a named trigger," and "can't act, just watching" get conflated into one undifferentiated pile — so the operator cannot see, at a glance, what is *actually actionable now* versus what is correctly parked. Everything looks equally urgent, which means nothing does.

## 2. The mechanism

A **single standing surface** — one table, one row per pending decision — at a fixed path that **outlives campaigns** (a `who/coordination/decision_queue.md`, or a pinned `STATE.md` section). A campaign *draws from* it and *feeds* it; the queue itself persists in the quiet windows and is the thing a stray inbound lands in. Each row is banded:

| Band | Meaning | Operator action | Promotes when |
|------|---------|-----------------|---------------|
| **A — ready-now** | all inputs present; a decision can be made this sitting | **decide** (in-chat · [[pattern_iss_operator_gate]] surface · AskUserQuestion) | — |
| **B — gated-on-trigger** | well-formed, but waits on a *named internal* trigger — a gate, a deadline, a prior decision, a dependency landing | none yet | the named trigger fires → A |
| **C — watch / blocked-external** | blocked on something outside the vault's control — another vault's ruling, an external party, upstream | **watch**; re-check on the named signal | the external signal arrives → A or B |

Each **row carries**: a stable id · a one-line decision statement · its band · the **named trigger/owner** (mandatory for B and C — a parked item with no named release condition is a lost item) · an **evidence pointer** (the memo or commit that raised it) · and, on close, a **disposition stamped with the commit that executed it**. That last rule is what makes the queue an *audit spine* rather than a note pile: every consumption is commit-cited, so the queue reads as a ledger of decisions made and where they landed.

The bands are only worth having if **B and C honestly hold what is *not* actionable now.** A queue where everything is filed "A" has re-created the undifferentiated pile it was meant to replace.

*Provenance*: Operations.aDNA runs the **reference implementation** — 2 campaigns, ~40 dispositioned rows, every consumption commit-cited — offered as the instance seed for this pattern ([[../../who/coordination/coord_2026_07_16_berthier_to_rosetta_ddp2_docs_propagation|the D-DP2 proposal, item 6]]).

## 3. Live instances (the structure IS the lesson)

**This vault, right now (self-reference — you can look at it):**
- Operation Refit's **B-row docket** (B1–B6, banded in [[../../how/campaigns/campaign_refit/artifacts/sitrep_2026_07_21_state_of_the_estate|the P0 state-of-the-estate SITREP]]) is a decision-queue *in embryo*: a set of pending operator decisions already banded — the deadline-bearing B1 was band-**A** (decide-now), the held Exchange + Vitruvius memos are band-**C** (watch, owner-and-trigger named). The SITREP §quiescent-window paragraph names the failure mode outright and prescribes this pattern as the structural answer.
- **The load-bearing example — this mission caught the failure live.** Refit M1 folded a fresh inbound, the [[../../who/coordination/coord_2026_07_22_rareanthropic_to_rosetta_org_graph_registration|2026-07-22 RareAnthropic org-graph registration]], that arrived *after* the charter's docket was fixed. It was a clean band-**A** item — all inputs present, the spec's own diagnostic test passing — yet it had **no standing home**: it landed in `who/coordination/` and had to be hand-caught by a mid-campaign operator scope ruling ("fold it into M1"). That is *exactly* the quiescent-window failure this queue exists to prevent — had a standing decision queue existed, the memo would have self-filed as a band-A row awaiting the next sitting, instead of needing a bespoke fold decision. The pattern was authored, in part, *because this mission tripped over its absence.*

**The reference implementation is not yet in this vault (honest gap):** Operations.aDNA holds the mature instance (2 campaigns / ~40 rows); it is the requested seed, not a local adoption. This file is `status: draft` at n=1 accordingly.

## 4. Adoption (copy, don't re-derive)

1. **Stand up one queue at a fixed path** — `who/coordination/decision_queue.md` or a pinned `STATE.md` section. It is a **standing** surface, explicitly *not* a campaign artifact that closes with the campaign.
2. **One row per pending operator decision**; band it A/B/C; for B and C **name the release trigger and owner** (no un-named parks); carry an evidence pointer to the raising memo/commit.
3. **On resolution, stamp the disposition + the commit that executed it** — commit-cited consumption is the audit spine.
4. **Wire campaigns to it**: a campaign *draws* its docket from the queue's band-A/ripe-B rows and *feeds* newly-raised decisions back; the queue persists through the quiet window between campaigns and catches quiescent-window inbound.
5. **Request Operations.aDNA's reference implementation as the seed** (2 campaigns / ~40 commit-cited rows) rather than re-deriving the row schema.

## 5. When NOT to use / anti-pattern

- **A vault with continuous campaign coverage and no quiet windows** may not need a standing queue — its back-to-back dockets already catch inbound. Adopt when inbound demonstrably outlives the campaign that would catch it (the quiescent window is real, not hypothetical).
- **Anti-pattern — the queue as a second STATE.** It holds *pending decisions*, not operational state; don't duplicate `STATE.md`'s phase/blocker/next-step tracking into it. The queue points at STATE; it doesn't mirror it.
- **Anti-pattern — band inflation.** Filing everything "A — ready-now" defeats the instrument; the bands earn their keep only when B and C honestly carry what is *not* actionable this sitting.
- **Anti-pattern — un-cited close.** A disposition with no commit reference is a sticky-note removal, not a ledgered decision — the audit spine is the whole point.
- **Anti-pattern — the vanishing per-campaign table.** Building the decision surface *inside* a campaign so it dies at close re-creates the quiescent-window gap the pattern exists to close. The queue must outlive the campaign.

## Forward integration (fold stub)

**`fold_batch: refit_successor_rc`** — WHO: Rosetta (aDNA.aDNA), for ratification at a future release gate, shipped via `skill_template_release`; WHAT: a `decision_queue` scaffold (the 3-band table + row schema) plus a fixed home (a `who/coordination/decision_queue.md` stub or a `STATE.md` §Decision Queue section) folded into the `.adna/` fork-base, so a fresh vault inherits a standing decision surface instead of discovering the quiescent-window gap the hard way. Ties to Operations.aDNA's reference implementation (the requested instance seed). WHEN/HOW defer to that release candidate. Do NOT touch any template file or `.adna/` here (Refit ships no normative surface — standard v2.5 / governance 8.8 hold).

## Provenance & graduation

Authored at **Operation Refit M1** (2026-07-22, Rosetta / this vault) per the ratified **D-DP2 / DP6** ruling (item 6), from Berthier's Operations.aDNA proposal ([[../../who/coordination/coord_2026_07_16_berthier_to_rosetta_ddp2_docs_propagation|coord 2026-07-16]]). **Instances: 1** — this vault's embryonic Refit B-row docket plus the self-caught RareAnthropic quiescent-window fold; Operations.aDNA's reference implementation (2 campaigns / ~40 commit-cited rows) is the **requested seed** (asked for in the D-DP2 disposition reply), and when it lands as a second vault-level adoption the count moves toward the 3-adoption graduation, ratified at a future operator gate per the [[pattern_iss_operator_gate|instance-counting rule]]. Stays `status: draft` until then. Related: [[pattern_iss_operator_gate]] (the *surface* a band-A decision is rendered on when it is the operator's to make — the queue decides *whether/when*, the ISS decides *how*), [[pattern_order_of_battle]] (a campaign's *in-campaign* obligation surface — the decision queue is its *between-campaign* complement), [[pattern_state_queued_banner]] (STATE's cold-start handoff — the standing decision inbox is what that handoff points at when it says "here's what's pending").
