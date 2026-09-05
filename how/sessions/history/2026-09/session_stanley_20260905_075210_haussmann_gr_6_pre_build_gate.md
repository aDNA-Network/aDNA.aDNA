---
type: session
session_id: session_stanley_20260905_075210_haussmann_gr_6_pre_build_gate
created: 2026-09-05   # stamped `date -u` (07:52:10 UTC) — never local; the node runs PDT and a local stamp files a session sorting before ones that already happened (GR-4's open finding)
updated: 2026-09-05
status: completed   # closed 2026-09-05 at the GR-6 pre-build gate; filed to history in the same commit (GR-4 O1's finding: a finished session left in `active/` is a lease nobody is holding)
tier: 1
campaign: campaign_haussmann
mission: mission_haussmann_gr_6_instrument_calibration (NEW — authored this sitting, unsigned) · four operator rulings performed at their destinations
objective: "Open GR-6 — the two P5.2 preconditions nobody owns (instrument v1.1 anchor fix + the lost production crawler) — run its convention-13 pre-build pass COMPLETE, and halt at the ⛩ signature. Plus perform rulings 2/3/4 taken at this session's planning gate."
executor_tier: opus
last_edited_by: agent_rosetta
token_budget_estimated: "~90–140 kT for the pre-build sitting: recon + the anchor-defect DERIVATION (step 1, the one with real discovery in it) + the v1.1 authoring + the crawler re-author with its red-proof + the convention-13 pass + the mission file + three ruling performances. ⚠ ~40 kT of any HAUSSMANN sitting is the campaign CLAUDE.md, auto-loaded — inside this band, not beside it. ⛔ **This band covers a pre-build gate, NOT a build.** GR-6's own execution band is declared in its mission file and ratified at the ⛩ signature, per the campaign's standing law (SO#11/ADR-016)."
token_budget_actual: "≈95–130 kT — **RECORDED AT THE TIME**, not reconstructed (the P4.3-class defect this campaign has hit four times). Against a stated ~90–140 kT for the gate sitting ⇒ **inside the band**, no SO#11 retrospective. ⭐ It held for the reason GR-4 named: the scope was **ruled at the planning gate before the work started**, so nothing was costed against a scope nobody had chosen. ⚠ The one item that moved is `AC-2`: costed as build work, delivered as a **deferral with a written reason** — which cost less, and is recorded as a scope change rather than as an underrun."
tags: [session, haussmann, gr_6, instrument_v1_1, crawler, p5_1_ordering, speed_insights, vitruvius]
---

# GR-6 pre-build gate — the two preconditions P5.2 declares and nobody owns

## Derived at open — never carried (convention 19 + convention 16)

| Fact | Value | Command |
|---|---|---|
| HEAD | `834ef4c` | `git log --oneline -1` |
| `origin/main` | `834ef4c` — **0 unpushed** | `git ls-remote origin main` (at the remote, never a tracking ref) |
| Prod alias | **`1cc80ca`**, built `2026-09-05T04:50:44Z`, `mode=prod` | `curl /.well-known/adna-build.json` |
| Missions on disk | **32** | `ls missions/mission_haussmann_*.md \| wc -l` |
| Charter `mission_count` | **32** — agrees with disk | `grep '^mission_count:' campaign_haussmann.md` |
| ADR files | **55**, of which `adr_index.md` carries no `status:` ⇒ **54 ADRs** | `ls what/decisions/adr_*.md \| wc -l` |
| ADR tally | **53 `accepted` · 1 `amended` · 1 `inactive` · 0 `proposed`** | `grep -h '^status:' adr_*.md \| sed 's/#.*//' \| sort \| uniq -c` |
| Instrument version | **`Version 1.0 · Date 16 August 2026`** — unmoved in 20 days | `head -5 directives/OPERATION_VITRUVIUS_review_instrument.md` |
| `@vercel/speed-insights` | **absent** — not in `site/package.json`, no component imports it | `grep -n 'speed-insights' site/package.json` → 0 |

## Recon-at-execution — the convention-16 habit, run before trusting any `completed`

Nine surfaces re-probed against **the alias**, not the build (convention 17 — the surface must match
the claim's verb; "a reader encounters this" is a question about production):

| Surface | Code |
|---|---|
| `/` · `/api/registry.v1.json` · `/state-of-the-network` · `/community/proposals` · `/vaults.json` · `/llms.txt` | **200** ×6 |
| `/learn/course/` | **200** |
| `/learn/course/what-is-an-adna-graph` · `/learn/course/four-files-your-agent-reads-first` | **200** ×2 |

⇒ **9/9 green.** The 09-05 deploy holds; `P5.1`'s `AC-P` window is open.

### ⚠ A false red of my own, in the probe itself — recorded because it is the campaign's own class

The first probe run included `/learn/course/what-is-a-context-graph` and it returned **404**. That slug
**does not exist**; I typed a plausible lesson name instead of deriving one. The real slugs came from
`ls site/src/content/course/*.md` and both serve 200.

⭐ **KW-14 — *every count a page narrates must be derived, not typed* — applies to the probe as much
as to the page.** A typed slug produces a 404 that is indistinguishable, at the status-code layer, from
a genuine regression; had I reported it, it would have read as `F-s` recurring. **Caught in the same
sitting, at the cost of one `ls`,** and it is the fourth time this campaign has found that the honest
surface was the one that derived its own values.

## ⚠ TWO CORRECTIONS FOUND AT OPEN — both index-vs-artifact, one of them in my own approved plan

### Correction 1 — the campaign `CLAUDE.md` mission index is stale at 31; disk and charter both read 32

`CLAUDE.md`'s `## Mission index` opens *"`missions/` — **31** files, **derived not typed**"*. Measured
`[D]`: disk is **32**, and the charter's `mission_count` is **32**, amended at `GR-5`'s gate 2026-09-04.

⛔ **The approved plan for this session inherited the stale 31** and set GR-6's same-diff obligation as
`31 → 32`. The correct obligation is **`32 → 33`**. ⭐ **This is exactly the failure the index line was
written to prevent, committed by a reader of that line** — the sentence claims *"derived not typed"* and
was, at the moment it was written; nothing re-derived it when GR-5 landed. The plan's number was
*verified in the prose that routed it* rather than at the destination — `F-u`'s class, and the
campaign's own standing correction, arriving inside the plan to fix a different orphan.

⇒ Corrected in the same commit that adds GR-6's file (convention 7 / ADR-057), not as a follow-up.

### Correction 2 — the unnamed `inactive` ADR now has a name

`STATE.md` renders the ADR tally as *"53 accepted · 1 amended · 0 proposed"*, which sums to **54**
against **54 ADRs** — arithmetically fine, and **wrong**, because it silently drops the `inactive` row
and counts nothing in its place. The 2026-09-05 02:43 session flagged the sum and noted *"the
`inactive` one is unnamed"*. **It is `what/decisions/adr_008_airlock_template_stub.md`** `[D]`.

⭐ **Note which direction the drift ran.** The tally was not too high; it was *complete-looking*. A
line reading `53 · 1 · 0` invites no question, which is why it survived a session that had already
spotted the arithmetic. **Naming the row is the whole fix** — a status class with no instance is a
class nobody can check.

## ⛩ Four rulings taken at this session's planning gate (SO#1 — none taken here)

| # | Ruling | Destination — where it is *performed* |
|---|---|---|
| 1 | **Routing: open `GR-6`** | this session; mission file authored, unsigned |
| 2 | **Speed Insights: operator enables it now**; this desk builds the transport | `site/` + register + `P4.4b` AC2's owed list |
| 3 | **`P5.1` AC-2/AC-3 ordering: (a) RELEASED** | `mission_haussmann_p5_1_human_evidence.md` AMENDMENT 3 |
| 4 | **`/g/adna/`: approve BOTH doors + stage the Home tagline ask in the same memo** | reply memo, drafted; **send is its own ⛩ GO** |

⛔ **A ruling recorded and not performed at its destination is `GR-2`'s four-day defect** — its 28→29
`mission_count` ruling was logged as taken and sat unperformed while the index and the charter
disagreed. All four above are performed in this sitting or named as owed on their face.

## Why GR-6 exists — an orphan, not a new idea

`p2_replan.md:444` files the **v1.1 instrument anchor fix** and the **re-authored production crawler**
under *"Routed (non-blocking)"*. `P5.2`'s own `status:` field says the v1.1 fix **"MUST land BEFORE
this mission."**

⇒ **Required by a mission that cannot open until it lands, owned by nothing.** This is `R-64`'s lesson
verbatim (*a caveat in the register is a finding with a home and no gate*) and `F-v`'s (*a deferral
recorded only in narrative is a deferral with no gate*). The instrument header has read `Version 1.0`
for twenty days.

It is also the **right work for right now**, and that is a scheduling fact rather than a preference:
`P5.1` is the campaign's critical path and is **entirely the operator's** — five recruited cold
readers, a fresh macOS account, the operator as outsider. Nothing agent-side moves it. GR-6 sits
*behind* that gate and can be finished before the readers arrive.

⚠ **Stated so it is not inferred otherwise: this session does not advance `P5.1`.**

## Progress

| # | Item | Outcome |
|---|---|---|
| 1 | Anchor-defect **derivation** | ✅ `artifacts/gr_6/anchor_defect_derivation.md` — **the "five filed" list does not exist**; set derived AD-1…AD-5 |
| 2 | Instrument **v1.0 → v1.1** | ✅ changelog + §5.1 four rules + **rung 1 on all twelve**, verified 12/12 ladders |
| 3 | Convention-13 pass | ✅ **22/22**, coverage recorded — 18 clean · 3 defective · 1 constraint, all resolved in the criteria before the file hit disk |
| 4 | ⛩ Ruling 3 — P5.1 ordering | ✅ **RELEASED**, AMENDMENT 3 + the clause struck in `AC-3`'s own text |
| 5 | ⛩ Ruling 2 — Speed Insights | ◐ **DESIGNED, NOT BUILT** — three preconditions, measured |
| 6 | ⛩ Ruling 4 — `/g/adna/` | ✅ **APPROVED both doors**; reply + Hestia ask **staged** (⛩ send GO each) |
| 7 | `GR-6` mission file | ✅ authored, **`queued`**, halted at its ⛩ signature |
| 8 | Same-diff | ✅ campaign index **31 → 33** (disk), charter amendment **32 → 33** deferred to the signature by design |
| 9 | `gate-41` | ✅ **4/4** — MANIFEST/STATE drift **0** |

⛔ **Nothing deployed, nothing pushed, no site bytes changed.** Prod stays `1cc80ca`.

### The three findings worth carrying

**1 · The list that does not exist.** `p2_replan.md:444` says *"five filed anchor defects"*;
`reconciliation_p2_6.md:91` says *"already on the filed list."* Each points at the other and **neither
is one.** ⇒ GR-4's *three agreeing indexes are not a corroboration*, at **n=2**. ⭐ The derived set also
came out at five — and that is **called out as a coincidence in the artifact itself**, because with no
filed list to compare against, nothing can say these are *those* five.

**2 · AD-2 — all twelve anchor tables skip rung 1.** No scoresheet could have surfaced it; it took
deriving over the instrument. §5's composite admits **1** as a legal score with **no letter to bind
it**, in an instrument whose own reconciliation says the anchor-letter discipline *"is doing real
work."* And it bites exactly where this site sits: **5 of 12 dimensions at 2**, with both baseline
scorers writing *"above anchor 2's letter"* and nowhere to put it.

**3 · The plan under-scoped the Speed Insights transport, and the codebase had already said so.**
`vitals.ts:9-16` scoped it as *"its own gate"* at P4.4b B1. Measured here: `/privacy:81-82` commits **in
the site's own rendered voice** to updating before it ships, and `gate-42` reds on a platform-served
endpoint under `astro preview`. ⭐ **The CSP is NOT the blocker** — `connect-src 'self'` already covers a
same-origin beacon, so the obvious reading would have **loosened the site's strongest header for a
reason that does not exist**. ***A constraint list is not a diagnosis***, and the entry that binds is
the one it mentions last.

### ⚠⚠ Two defects of this session's own, both recorded rather than absorbed

**The stale index propagated into the approved plan.** The campaign `CLAUDE.md` mission index read
**31** while disk and charter both read **32** (GR-5 landed 09-04 and the index never heard). The plan
for this sitting set GR-6's same-diff obligation as `31 → 32`, **taking the figure from that line rather
than from disk** — `F-u`'s class, **eighth sighting**, committed by a plan whose whole purpose was to
close an orphan of that kind. ⚠ **GR-5's own block, written the day before, already recorded this
class** (*"a mission's OPEN is as index-coupled as its close"*). *A convention written down is not a
convention applied.*

**A typed slug in my own probe produced a 404 that looked like a regression.** Fixed by `ls`-ing the
content collection. **KW-14 applies to a probe as much as to a page** — and a typed slug's 404 is
indistinguishable, at the status-code layer, from `F-s` recurring.

### ⚠ The deviation, stated plainly

`AC-1` was **performed at the gate**, which inverts *pass first, no build until signed*. The crawler was
**deliberately not** built — conventions 15/16/17 decline to author an instrument at a sitting's tail,
convention 14's red-proof-with-controls is a sitting's work, and `CONSTRAINT-1` makes the crawler
`AC-3`'s instrument. ⇒ **the pass is post-hoc for `AC-1` and pre-build for `AC-2`–`AC-4`.** *A pass run
after the build is worth less than one run before it, and saying which you have is the whole of the
difference.*

## SITREP

**Completed** — the anchor-defect derivation · instrument **v1.1** · the convention-13 pass (22/22) ·
three operator rulings performed at their destinations · the `GR-6` mission file · the campaign-index
same-diff correction · `STATE.md` · `gate-41` 4/4.

**In progress** — `GR-6` at its ⛩ signature. `AC-2`/`AC-3`/`AC-4` do not begin until it fires.

**Next up** — ⛩ **the GR-6 signature** (4 criteria + 4 limbs · band ~140–210 kT / 2 sessions for O2–O4 ·
charter `mission_count` 32 → 33). Then O2 (crawler, red-proven) → O3 (packet scope) → O4 (close).
Separately and independently: ⛩ **P5.1 recruitment**, which is the campaign's real critical path.

**Blockers** — none agent-side for `GR-6`. `P5.1` is blocked on humans and always was. `#needs-human`:
the GR-6 signature · P5.1's five readers + fresh macOS account + operator-as-outsider · the Speed
Insights dashboard enable · two staged memos' send GOs · Hopper's 4.2.0 ack.

**Files touched** — `directives/OPERATION_VITRUVIUS_review_instrument.md` (v1.1) ·
`artifacts/gr_6/{anchor_defect_derivation,speed_insights_transport_design}.md` (new) ·
`missions/mission_haussmann_gr_6_instrument_calibration.md` (new) ·
`missions/mission_haussmann_p5_1_human_evidence.md` (AMENDMENT 3) · `campaign_haussmann/CLAUDE.md` ·
`who/coordination/coord_2026_09_05_rosetta_to_{vitruvius,hestia}_*.md` (new, staged) · `STATE.md` ·
this session file. ⛔ **`evidence/scoring/` untouched — V4 verified by diff.**

## Next Session Prompt

> Open `how/campaigns/campaign_haussmann/CLAUDE.md` and
> `missions/mission_haussmann_gr_6_instrument_calibration.md`. **GR-6 is authored and `queued`, halted
> at its ⛩ convention-13 pre-build gate** — its pass ran 22/22 with coverage recorded (3 defects + 1
> ordering constraint, all already applied to the criteria). `AC-1` is **done**: the VITRUVIUS
> instrument is **v1.1**, with the conjunctive-bundle split rule, the between-rungs tie-break, the
> `FAILS`/`UNEVIDENCED` table, the awardability table, and **rung 1 on all twelve** anchor tables
> (12/12 ladders verified). **Read the deviation note at the top of §Progress before reading the
> criteria** — `AC-1` was performed *at* the gate, so the pass is post-hoc for it and pre-build for the
> rest. If the operator signs: ratify the four criteria + four limbs, ratify **~140–210 kT / 2 sessions**
> for O2–O4 (explicitly excluding `AC-1`'s spent ≈95–130 kT), and perform the same-diff admin
> (`mission_count` **32 → 33**, both session bands re-derived, `phase_count` holds at 6) **in the commit
> that does it**, not later. Then **O2**: re-author `scripts/crawl_haussmann_b1.mjs` emitting
> `evidence/inventory/page_inventory.csv`'s **13 columns read from the committed file, never
> transcribed**, red-proven by mutation, asserting `res.ok` + same-origin — the packet is **202 rows
> against 228 live routes**, and its URLs are absolute, so a refresh reads **production**. **O2 precedes
> O3** (CONSTRAINT-1). Derive `main`'s CI status at open (convention 19) and re-probe the alias
> (convention 16); prod serves `1cc80ca`. ⛔ Nothing is pushed or deployed without its own ⛩ GO. The
> campaign's true critical path remains **P5.1** and it is entirely human.
