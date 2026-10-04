---
type: pattern
created: 2026-07-22
updated: 2026-10-04   # second instance (Operations.aDNA C03 queue, 64 rows / 7 campaigns) + band-C sub-state 'decided, undelivered' + §5 failure modes — from Berthier's 2026-08-27 seed, received 2026-10-04; prior: 2026-07-22
status: draft
pattern_category: operational
applies_to: [coordination, campaigns, sessions, all_categories]
campaign_id: campaign_refit
instances:
  - "aDNA.aDNA (this vault) — the Operation Refit B-row docket (B1–B6, banded in the P0 SITREP) as a decision-queue-in-embryo + the self-caught 2026-07-22 RareAnthropic quiescent-window fold (Refit M1)"
  - "Operations.aDNA — how/campaigns/C03-ETAT-MAJOR/artifacts/decision_queue_v0.md (org_shared; read live 2026-10-04 at Berthier's 2026-08-27 seed memo, received 2026-10-04): 64 rows · 41 dispositioned · 23 open · C03 → C09, one queue that outlived six campaign closes without being re-created"
graduation: "n=2 (this vault embryonic + Operations.aDNA's live reference implementation, cited 2026-10-04). A third vault-level adoption moves to the 3-adoption graduation, ratified at a future operator gate per the instance-counting rule. Template fold deferred to a successor release campaign (skill_template_release)."
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

**Band C has two sub-states, and the sender keeps them** (adopted 2026-10-04 from Operations' instance testimony): a watched row is either **`awaiting`** — nobody has decided yet — or **`decided_undelivered`** — the decision exists somewhere, and the artifact that carries it has not reached the party the row is waiting on. The second is invisible from the receiver's side by construction (a memo with `status: sent` that never left its tree looks, to the addressee, exactly like silence), so the band belongs to the side that *holds* the undelivered thing. Operations' row C11 read *"Rosetta still awaited"* for eight weeks while the awaited co-sign had sat granted since 07-03; on 2026-10-04 the class fired twice in one hour on this desk (a 2026-08-27 seed memo and a 2026-08-03 upstream ask, both `sent`, neither delivered). A queue that cannot tell the two apart will watch a solved problem until someone sweeps.

## 3. Live instances (the structure IS the lesson)

**This vault, right now (self-reference — you can look at it):**
- Operation Refit's **B-row docket** (B1–B6, banded in [[../../how/campaigns/campaign_refit/artifacts/sitrep_2026_07_21_state_of_the_estate|the P0 state-of-the-estate SITREP]]) is a decision-queue *in embryo*: a set of pending operator decisions already banded — the deadline-bearing B1 was band-**A** (decide-now), the held Exchange + Vitruvius memos are band-**C** (watch, owner-and-trigger named). The SITREP §quiescent-window paragraph names the failure mode outright and prescribes this pattern as the structural answer.
- **The load-bearing example — this mission caught the failure live.** Refit M1 folded a fresh inbound, the [[../../who/coordination/coord_2026_07_22_rareanthropic_to_rosetta_org_graph_registration|2026-07-22 RareAnthropic org-graph registration]], that arrived *after* the charter's docket was fixed. It was a clean band-**A** item — all inputs present, the spec's own diagnostic test passing — yet it had **no standing home**: it landed in `who/coordination/` and had to be hand-caught by a mid-campaign operator scope ruling ("fold it into M1"). That is *exactly* the quiescent-window failure this queue exists to prevent — had a standing decision queue existed, the memo would have self-filed as a band-A row awaiting the next sitting, instead of needing a bespoke fold decision. The pattern was authored, in part, *because this mission tripped over its absence.*

**The reference implementation, read live (2026-10-04):** Operations.aDNA's `how/campaigns/C03-ETAT-MAJOR/artifacts/decision_queue_v0.md` — minted under C03/M29, carried forward at every close since (*"this queue continues at STEADY-STATE as the vault's standing operator surface"*), **64 rows · 41 dispositioned · 23 open across seven campaigns** at Berthier's 2026-08-27 measurement. Its testimony, in the owner's words: band C is the point (it is the only surface in that vault where *nothing happening* is legible); rows are struck, never deleted, with the consuming commit or session appended; the queue outlived six campaign closes; every refresh is dated and signed. It is cited, not copied — the property worth studying is that it kept accumulating. This file is `status: draft` at **n=2** accordingly.

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

**Three failure modes reported by the live instance (Operations, 2026-08-27 — "an instance that only reports its successes is not evidence"):**
- **The refresh trail in the frontmatter.** Append-only in the wrong place: a ~85 KB frontmatter field that every cold-start read pays for. Normative here: the refresh history lives in the **body**, the frontmatter carries only the last refresh.
- **Row IDs that collide with their own history** (`B1′`, `B1″`, `B1‴` … where a gate re-minted). A row ID is a monotonic counter; re-minting gets a new number and a `supersedes:` pointer, not a prime.
- **No prompt to stand a row down.** Band C tolerates indefinite silence by design, and nothing in the instrument asks *"is this still a live question?"* — so a solved row can be watched for weeks. Each refresh asks it of every band-C row older than its declared window; the answer is `still_live` · `stood_down` (with reason) · `decided_undelivered` (see §2).

## Forward integration (fold stub)

**`fold_batch: refit_successor_rc`** — WHO: Rosetta (aDNA.aDNA), for ratification at a future release gate, shipped via `skill_template_release`; WHAT: a `decision_queue` scaffold (the 3-band table + row schema) plus a fixed home (a `who/coordination/decision_queue.md` stub or a `STATE.md` §Decision Queue section) folded into the `.adna/` fork-base, so a fresh vault inherits a standing decision surface instead of discovering the quiescent-window gap the hard way. Ties to Operations.aDNA's reference implementation (the requested instance seed). WHEN/HOW defer to that release candidate. Do NOT touch any template file or `.adna/` here (Refit ships no normative surface — standard v2.5 / governance 8.8 hold).

## Provenance & graduation

Authored at **Operation Refit M1** (2026-07-22, Rosetta / this vault) per the ratified **D-DP2 / DP6** ruling (item 6), from Berthier's Operations.aDNA proposal ([[../../who/coordination/coord_2026_07_16_berthier_to_rosetta_ddp2_docs_propagation|coord 2026-07-16]]). **Instances: 1** — this vault's embryonic Refit B-row docket plus the self-caught RareAnthropic quiescent-window fold; Operations.aDNA's reference implementation (2 campaigns / ~40 commit-cited rows) is the **requested seed** (asked for in the D-DP2 disposition reply), and when it lands as a second vault-level adoption the count moves toward the 3-adoption graduation, ratified at a future operator gate per the [[pattern_iss_operator_gate|instance-counting rule]]. Stays `status: draft` until then. Related: [[pattern_iss_operator_gate]] (the *surface* a band-A decision is rendered on when it is the operator's to make — the queue decides *whether/when*, the ISS decides *how*), [[pattern_order_of_battle]] (a campaign's *in-campaign* obligation surface — the decision queue is its *between-campaign* complement), [[pattern_state_queued_banner]] (STATE's cold-start handoff — the standing decision inbox is what that handoff points at when it says "here's what's pending").
