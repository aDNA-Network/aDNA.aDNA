---
plan_id: mission_haussmann_p4_3_a11y_manual
type: plan
title: "P4.3 — Accessibility beyond automation: manual passes, the reflow adjudication, a published statement"
campaign: campaign_haussmann
phase: P4
decade: 2
owner: stanley
status: completed   # ✅ CLOSED 2026-08-25 with AAR (SO#5). **AC1 ✅ AC2 ◐ AC3 ✅ AC4 ✅ AC5 ✅ AC6 ✅ AC7 ✅** · V1 ✅ V2 ✅ V3 ✅ V4 ✅ V5 ✅. ⚠ **READ AC2's QUALIFIER: it is ◐ PARTIAL, not ✅.** Its keyboard half is MET; its human-VoiceOver half is **UNRUN and ⛩ DEFERRED TO A FOLLOW-UP CAMPAIGN by operator ruling 2026-08-25** (priority is the site fully updated/reviewed). The deferral is a REGISTER ROW (**F-v**), not prose — G-6/G-7's lesson applied to this mission's own close — and it is named ON THE PUBLIC PAGE, so no automated pass implies a human one. D11 re-scored **2 → 4**, binary gate CONDITIONAL PASS → **PASS**; ceiling 4 declared before the work, anchor 5 unreachable (needs AT-USER testing). ⛩ **THE DEPLOY FREEZE WAS LIFTED at this session's open** on a measurement (the ancestry guard is built, red-proven 13/13 and already on origin/main at 4a9bc09, so lemur gets it on pull) — P4.3 is therefore NOT the fourth built-not-deployed mission; it ships with P4.1 + P4.2 + P4.4a in ONE deploy. Suite **628/628** derived.
mission_class: verification
executor_tier: opus
token_budget_estimated: "⛩ RE-SET AND RATIFIED 2026-08-24 at the pre-build gate → ~220–320 kT across 2–3 sessions (+ ~30 min operator VoiceOver time at AC2). SUPERSEDES ~150–250 kT in 1 session, which was costed against FIVE criteria of which two were unreachable and two obligations were invisible — so it was never an estimate of this mission's actual scope. The delta buys two instrument builds the original assumed already existed (a zoom transform; gate-4's tag set extended to wcag22aa) plus AC6 + AC7. Convention 13 ran BEFORE this figure was ratified, which is P4.1's SO#11 remedy — there the pass ran after the budget and forced an operator-signed amendment mid-mission. (ADR-016/SO#11)"
token_budget_actual: "≈300–380 kT across 3 sessions against the ratified ~220–320 kT band — at or slightly over the top of it, and reported as a RANGE because the figure is reconstructed, not measured. ⚠ THE REAL SO#11 FINDING IS THAT IT HAD TO BE: S1 and the O0/O1 session both closed with `token_budget_actual:` EMPTY, recording only 'comfortably inside the band' in prose. A band cannot be falsified by a sentence that assumes it. No retrospective is triggered (nowhere near 2x), but the instrument that would detect a 2x overrun on this mission did not exist, and that is worth more than the number. The overage that did occur is attributable and small: AC4 was built to its FIRST disjunct (genuine edge equivalence + a new gate + a 7-case red test) where the criterion also permitted the cheaper 'state the limitation' branch. ADR-016/SO#11."
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["scoring D11 divergence + gate condition (F2 reflow candidate)", "toolkit A13 (@guidepup/virtual-screen-reader adopt; VoiceOver local trial)", "instrument D11 checks 2/5/7/11/13/14 (the manual third)", "graph keyboard-twin partial-equivalence finding (machine_eye 14)"]
vitruvius_dimensions: [D11]
decade_theme: craft
webforge_patterns: []
patterns_to_author: []
depends_on: [mission_haussmann_p1_4_mobile_integrity, mission_haussmann_p2_6_midscore]
blocks: []
acceptance_criteria:            # ⛩ AMENDED + OPERATOR-SIGNED 2026-08-24 (artifacts/p4_3/ac_amendment_proposal.md, `accepted`). The convention-13 pass ran COMPLETE at 30/30 with coverage recorded and found 3 of 5 originals not satisfiable as written, 2 inherited obligations under NO criterion, and 1 ceiling overclaim. The superseded wording is preserved below in `## Acceptance criteria — superseded`, struck not deleted (SO#6).
  - "AC1 [unchanged in kind] — Headless AT-traversal assertions (@guidepup/virtual-screen-reader) on home, get-started, one reference page, the registry, the graph — in CI. RED-PROVEN WITH CONTROLS, and each assertion asserts it REACHED its surface (convention 14): a gate reporting zero violations cannot otherwise detect that it evaluated zero rules."
  - "AC2 [AMENDED · G-2] — Keyboard-only traversal of every primary flow recorded (focus visible, no traps, logical order) + operator VoiceOver session on the same five surfaces. NVDA IS OUT OF SCOPE AND THE REASON IS NAMED: D11 check 5 asks for VoiceOver + NVDA, NVDA is Windows-only, and this is an L1 macOS node. Check 5 is therefore recorded PARTIALLY MET BY DESIGN, never silently passed. AC1's engine-agnostic lane covers the semantics both readers consume — claimed as exactly that much and no more."
  - "AC3 [AMENDED · G-3 + G-9] — F2 formally adjudicated closed (1.4.10). The zoom 200%/400% and WCAG 2.2 halves EACH REQUIRE NEW INSTRUMENT WORK and may not be ticked against the existing suite: measured [D], `wcag22|2.5.8|target-size` = 0 hits in site/tests/ (gate-4 asserts wcag2a/wcag2aa/best-practice only) and `deviceScaleFactor|zoom` = 0 hits (gate-29 is viewport-WIDTH parameterized, never zoom). Extend gate-4's tag set to wcag22aa; add a zoom transform. Both ship red-proven. `prefers-reduced-motion` (D11 check 10) + focus-order review: swept, or explicitly recorded out-of-scope — silence is not an option."
  - "AC4 [AMENDED · G-4] — Graph keyboard-twin upgraded to genuine equivalence (EDGES ENUMERATED — which vault points to which, with direction and type — not just the roster + legend that machine_eye 14 measured) or its limitation stated on the page. MET ON-BUILD; publication named as owed. gate-22 today asserts the roster only and cannot see edge equivalence."
  - "AC5 [AMENDED · G-5 + G-8] — Accessibility statement IN THE TREE (known limitations + contact path), verified against a local preview. PUBLICATION IS NAMED AS OWED WITH ITS UNBLOCK CONDITION (freeze release), NEVER CLAIMED — nothing P4.3 does can make anything live. Known limitations must be TRUE, read from register rows. The ceiling is stated as D11 = 4, not 5: anchor 5 also requires testing with assistive-tech USERS, which an operator VoiceOver session is not."
  - "AC6 [NEW · G-6] — Lock O1's 12px rendered-typeset floor ADJUDICATED: met, or its limitation stated with the ratchet held and `gap` retained honestly. Deferred to this mission BY NAME at the P4.4 gate and covered by no original criterion. [D] gate-39 FLOOR_PX=12; hero-graph-svg 27/27 labels below floor at every width (3.5px @320); netdiagram-svg 7/8; convergence-funnel 8/8 @320. A non-regression fence is not the rule — calling it one is the fake-enforcement lock O1's own text warns about."
  - "AC7 [NEW · G-7] — The registry live region ASSERTED WIRED, and its announcement judged USEFUL rather than merely PRESENT, by the AT instrument. Deferred to this mission BY NAME at P4.2's close and covered by no original criterion. [D] src/pages/vaults/index.astro:226 carries role=status aria-live=polite, empty in source, populated by countEl.textContent in apply(); nothing asserts it stays wired, and the empty-state mark sits outside the region."
verification_method: "V1 CI AT-assertions green (red-tested, with controls) · V2 traversal records · V3 ⛩ AMENDED — statement IN TREE + verified on a LOCAL PREVIEW, never 'live' (G-5: the freeze lifts on another machine, so a 'live' limb is unreachable by anything this mission does; MET-on-build per the P3.3 O3 / P4.1 AC5 / P4.4 AC2 precedent) · V4 ⛩ AMENDED — D11 re-score against a STATED CEILING OF 4, with check 5 recorded PARTIAL (G-2) and anchor 5's AT-user conjunct named as owed (G-8) · V5 ⛩ NEW — AC6 and AC7 each carry their own limb, because G-6/G-7's whole lesson is that an obligation with no criterion has no gate."
human_gate: true
tags: [plan, haussmann, p4, a11y, wcag]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> Automation catches a third of real issues; for a public-good property serving patient communities the
> manual third is a mission obligation, not a checkbox.

## Why this mission exists

The a11y record is automation-only (axe 0×32, LH 100×10) with one evidenced manual candidate (F2) and a partially-equivalent graph twin `[D scoring/machine_eye]` — exactly the D11 anchor-2 state. The virtual-screen-reader lane makes AT semantics headlessly assertable; the operator's VoiceOver session covers what only a human can hear.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Wire virtual-screen-reader assertions (5 surfaces; traversal order + phrasing) into CI; red-test | CI lane ✅ | — |
| O1 | Keyboard traversal protocol + full pass; zoom + target-size sweep; F2 closure evidence | records ✅ | — |
| O2 | Operator VoiceOver session (guided script, ~30 min) | session notes | ⛩ operator |
| O3 | Graph-twin equivalence upgrade (or honest limitation note); statement page; AAR | pages + AAR | — |

## ⛩ Convention-13 pre-build gate — COMPLETE, 30/30 pairs, coverage recorded (2026-08-24)

> Ran **before** budget ratification (P4.1's SO#11 remedy). Findings + proposed amendments:
> [[ac_amendment_proposal]] (`artifacts/p4_3/`, `status: proposed`). **Nothing builds until it is signed.**
> The coverage is stated here because convention 13's amendment requires an incomplete pass to be legible
> as incomplete — P3.3 ran this pass, cleared the pairs it looked at, recorded no coverage, and shipped
> DEFECT 3 anyway.

**AC × V-limb — 20 pairs.** V1 = CI AT-assertions green (red-tested) · V2 = traversal records ·
V3 = statement live · V4 = D11 re-score, binary gate clean.

| | V1 | V2 | V3 | V4 |
|---|---|---|---|---|
| **AC1** vsr lane | ✅ reaches | ○ n/a (V2 is AC2's) | ○ n/a | ✅ feeds check 5 |
| **AC2** keyboard + VoiceOver | ○ n/a (not CI) | ✅ reaches | ○ n/a | ⚠ **G-2** check 5 needs NVDA — unreachable node |
| **AC3** F2 + zoom + 2.2 | ⛔ **G-3** no instrument exists | ◐ partial | ○ n/a | ✅ feeds checks 11 + 13 |
| **AC4** graph twin | ◐ needs a gate built (gate-22 = roster only) | ○ n/a | ⚠ **G-4** disjunct needs deploy | ✅ feeds check 7 |
| **AC5** statement | ○ n/a | ○ n/a | ⛔ **G-5** unreachable under freeze | ✅ feeds check 14 |

**AC × AC — 10 pairs.**

| Pair | Verdict |
|---|---|
| AC1×AC2 | ✅ complementary (check 5 from both sides) — but neither reaches NVDA (**G-2**) |
| AC1×AC3 | ✅ independent |
| AC1×AC4 | ⚠ **coupled** — AC1's fifth surface *is* the graph AC4 changes ⇒ **AC4 sequences before AC1's graph assertions**, and those assertions **derive** from the twin (KW-8/FR-K: no literal-pinned live data) |
| AC1×AC5 | ✅ independent |
| AC2×AC3 | ✅ complementary (F2 geometric; keyboard behavioural) |
| AC2×AC4 | ⚠ **coupled** — same graph surface, same sequencing note |
| AC2×AC5 | ✅ AC2's findings **feed** AC5's "known limitations must be true" |
| AC3×AC4 | ✅ independent |
| AC3×AC5 | ✅ AC3's residues feed AC5's limitations |
| AC4×AC5 | ✅ strongly coupled — if AC4 resolves to *"limitation stated"*, AC5's statement is where it belongs; ⚠ both then sit behind the freeze (**G-4** = **G-5**) |

**Structural question — which obligations are covered by NO criterion?** *(P4.1's gap; the pass's best
yield here)*

- ⛔ **G-6** — lock **O1's 12px floor**, ⛩ deferred *to this mission by name*, is in **no AC**.
  `[D]` `gate-39` `FLOOR_PX = 12`; `hero-graph-svg` **27/27 below floor at every width** (3.5px @320);
  lock O1 `gap`, not `enforced`.
- ⛔ **G-7** — P4.2's **`aria-live` residue (B3/E4)**, deferred *to this mission by name*, is in **no AC**.
  `[D]` `src/pages/vaults/index.astro:226` — present, wired via `apply()`, **empty in source**; nothing
  asserts it stays wired.
- ⇒ **All five ACs could pass with neither touched.** Both deferrals were carried in *prose*, not in a
  criterion — a deferral recorded only in narrative is a deferral with no gate.

**Ceiling** — ⭐ **G-8**: AC5 calls the statement *"the D11 anchor-5 item"*, but anchor 5 has **three**
conjuncts and *"tested with assistive-tech **users**"* is **not reachable** (an operator VoiceOver session
is a sighted operator driving a screen reader — a real instrument, and not an AT-user study).
**This mission's honest ceiling is D11 = 4.**

**Result: 3 of 5 criteria not satisfiable as written · 2 obligations under no criterion · 1 ceiling
overclaim.** Proposed set: **7 ACs**, V3/V4 amended, **V5 added** so AC6/AC7 each carry a limb.

## Acceptance criteria — superseded (struck, not deleted — SO#6)

The five originals, as written 2026-08-16, for anyone citing the old wording:

1. ~~"Headless AT-traversal assertions (@guidepup/virtual-screen-reader) on home, get-started, one reference page, the registry, the graph — in CI"~~ → **AC1**, unchanged in kind; red-test + reached-its-surface obligations made explicit.
2. ~~"Keyboard-only traversal pass of every primary flow recorded …; operator VoiceOver spot-session on the same five surfaces"~~ → **AC2** (**G-2**: silent on NVDA, which its own grounding check requires and this node cannot run).
3. ~~"F2 formally adjudicated closed (1.4.10) + zoom 200%/400% checks + target-size (2.2) delta swept"~~ → **AC3** (**G-3**: *swept* by what? Both halves measured **0 instrument coverage**).
4. ~~"Graph keyboard-twin upgraded to genuine equivalence … or its limitation stated on the page"~~ → **AC4** (**G-4**: the second disjunct is a public-surface claim behind the freeze).
5. ~~"Accessibility statement **published** (known limitations + contact path) — the D11 **anchor-5** item"~~ → **AC5** (**G-5** unreachable under the freeze; **G-8** anchor 5 also requires AT-**user** testing).
6. *(nothing)* → **AC6** — lock O1's 12px floor, deferred here **by name**, gated by nothing (**G-6**).
7. *(nothing)* → **AC7** — P4.2's `aria-live` residue, deferred here **by name**, gated by nothing (**G-7**).

## Constraints

Assertions test semantics, not pixel positions (stability); the statement's "known limitations" must be true (register rows); nothing regresses the axe-0 record.

⛩ **Sequencing constraint from the AC×AC pass:** **AC4 lands before AC1's and AC2's graph assertions** — the graph is a surface in all three, and AC4 changes its twin. Those assertions **derive** from the twin rather than pinning its contents (WebForge KW-8/FR-K: no literal-pinned live data in tests).

## Definition of done

The manual third is evidenced, the gate condition is closed, and the site says what it knows about its own accessibility.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + `evidence/scoring/reconciliation.md` (D11) + toolkit notes. Execute O0–O1, schedule O2 with the operator, then O3.

## Progress

**2026-08-24 — S1, the pre-build gate. Builds nothing.** ⛩ Opened by an **operator routing call**
(P4.4b's every criterion waits on an actor outside the session; all three Vitruvius memos ruled **staged**).
Session `session_stanley_20260824_185916_haussmann_p4_3_a11y_manual`.

- ⛔⛔ **Freeze re-verified HOLDING** at open — `git cat-file -t` fails on both `30c8163` + `f4fa9c5` `[D]`.
  ⭐ **The 2 commits carried in the session-memory as "unpushed, awaiting GO" are PUSHED** —
  `origin/main == HEAD` at `32069f3`, ahead/behind `0 0` `[D]`. Memory corrected.
- ✅ **`grounded_in:` re-verified at the object** (convention 12) — 3 of 4 clean; **G-1** on the fourth:
  *"toolkit A13"* cites a label that **does not exist**. The toolkit is
  `what/context/context_web_quality_toolkit.md` (**vault-root-relative**, which is why a campaign-scoped
  search misses it); its substance is real at `## 1 · Accessibility → The manual complement` (74–104),
  but `\bA[0-9]+\b` returns **0 hits** in it `[D]`. **P4.4 cites `toolkit A2` identically** ⇒ a
  campaign-wide scheme the cited artifact never carried. Citation **repointed**, evidence stands.
  ⚠ **My own first probe was narrower than its conclusion** (campaign-scoped, phrased as absolute) —
  convention 16's law recurring inside the session citing it.
- ✅ **Convention-13 pass COMPLETE at 30/30 with coverage recorded** (matrix above) — **3 of 5 criteria
  not satisfiable as written**, **2 inherited obligations under no criterion**, **1 ceiling overclaim**.
- ⛩ **[[ac_amendment_proposal]] authored, `status: proposed` — awaiting operator signature. NOTHING
  BUILDS UNTIL IT IS SIGNED**, and the budget is not ratified until then either (convention 13 runs
  *before* the budget — P4.1's SO#11 remedy).

⭐ **The finding worth carrying: G-5 is the THIRD consecutive mission** (P4.2 AC3 · P4.4 AC2 · P4.3 AC5)
to carry a criterion requiring a prod deploy under a freeze that lifts on **another machine**. All three
were authored **before the freeze existed** and none was re-read against it when it landed.
**Three instances is a mission-authoring habit, not three accidents.**

**⛩ AMENDMENT SIGNED 2026-08-24, and the freeze sweep ran at the same gate** ([[freeze_sweep]]).
7 ACs accepted; **P4.4b measured already-clean** (the sweep's control passed — the remedy was already
written and applied there); **P4.5b** carries G-5 #4; **P5.2** gains a *predecessors-DEPLOYED* precondition;
and ⛔⛔ **P5.1 carries G-11**, a **different class** — its human-evidence criteria are *satisfiable* under
the freeze and would produce evidence **about the wrong build**. Every P5.1 criterion now records the
commit the participant saw, via the `/.well-known/adna-build.json` mechanism **AC0 shipped at P4.4a**.

### ✅ O0 COMPLETE 2026-08-24 — the AT lane (AC1 + AC7), built and red-proven

**`gate-45-at-traversal.spec.ts`** — 6 assertions, **suite 587 → 593 (derived)**, and
**`scripts/at_traversal_redtest.sh` 9/9 (7 mutations + 2 controls)**.

⭐ **The gate deliberately does NOT re-test what `gate-4` already covers.** axe runs `wcag2a` +
`wcag2aa` + `best-practice` over 23 pages × 2 themes, so link-name, landmark rules,
`page-has-heading-one` and `bypass` are already gated; duplicating them would add assertions and no
coverage. gate-45's delta is the part axe **structurally cannot reach** — and it is exactly D11's
manual third: **ORDER** (`bypass` proves a skip mechanism *exists*; a skip link announced *last*
passes it), **PHRASING** (what is actually said), and **LIVE SPEECH** (axe is a static-snapshot
instrument and cannot test an announcement at all).

⭐⭐ **AC7 is answered, and the red test is what makes the answer worth anything.** Mutation **M6**
strips `aria-live` while leaving the region's text **correct** — the words are still right and the
region goes **silent** — and gate-45 goes **red**. *That single case is the difference between an AT
instrument and a `textContent` check wearing one's clothes.* P4.2 deferred this here by name because
*"no grep was ever going to answer it"*; the answer is that the region **is** wired and **does**
announce (`"polite: 0 of 74 vaults — nothing matched"` `[D]`), and there is now an assertion that
fails if it ever stops.

⚠ **THE BOUND IS STATED ON THE INSTRUMENT'S FACE.** The reader costs **~11 ms/step** (measured: 300
steps = 3,273 ms), so a full walk of the homepage exceeds a 30 s timeout. gate-45 walks a **bounded
opening** of 60 phrases and asserts **only about the opening** — it is *not* a whole-document AT audit
and must never be cited as one. ⚠ The obvious fast path, `page.accessibility.snapshot()`, was
**REMOVED in Playwright 1.59** (`TypeError: Cannot read properties of undefined`) — measured before the
design was chosen, so the bound is a consequence, not a preference. A **coverage floor**
(`≥ 25 phrases`, never `> 0`) is asserted first, because every other assertion is about the *content*
of the opening and none of them can tell a clean opening from **an opening that was never read**.

⚠⚠ **THREE INSTRUMENT DEFECTS, ALL MINE, ALL BEFORE THE SUBJECT — the campaign's standing class, and
the third is the sharpest it has produced.**
1. The order assertion pinned `log[0]`, but `spokenPhraseLog()[0]` is **`"document"`** — the reader
   announces the container root on `start()`. Failed on **all five surfaces**; the site was right.
2. A fixed **600 ms** sleep before reading the live log produced an empty capture **indistinguishable
   from a silent region** — a timing flake wearing the costume of a real defect. Now polls.
3. ⭐⭐ **`spokenPhraseLog()` returns a LIVE REFERENCE to the reader's internal array, not a copy.**
   Held by reference, `before` and `after` are the **same object**, so `after.length > before.length`
   is never true and `after.slice(before.length)` is always `[]`. **The gate reported "the live region
   was never announced" against a region that was announcing correctly the whole time** — a verifier
   comparing a value **to itself**, which can only ever report *no change*. Fixed with a spread.
   ⇒ **A green is not the only way an instrument lies; this one lied in red**, and it would have
   written up a perfectly good live region as a defect.

### ✅ O1 COMPLETE 2026-08-24 — the manual pass (AC2 keyboard · AC3 entire · AC6), and a defect 593 assertions could not see

Resumed after a crash. The tree was **clean** — S1, the amendment, the freeze sweep and O0 all
committed, nothing half-built. ⛩ **Operator routing at resume: run all of O1 in one session; O2's
VoiceOver sitting deferred (script only).** State re-derived, not carried: freeze **HOLDS** `[D]`,
`origin/main` `32069f3` vs HEAD, **6 unpushed** (incl. `2fe9093`, the foreign Home.aDNA commit), suite
baseline **593** read from the runner.

**Suite 593 → 617** (derived). `gate-46` **13** · `gate-47` **11**. Red-proven: `zoom_resize_redtest.sh`
**9/9** · `keyboard_redtest.sh` **9/9** (7 mutations + 2 controls each) · `a11y_bestpractice_redtest.sh`
**9/9** with **three new `wcag22aa` controls** (G/H/I).

⭐⭐ **AC3's zoom half found a real defect, and AC3's amended wording is why it was looked for at all.**
At **200 % TEXT** — a browser preference, **not** page zoom, so the viewport stays 1280 — the header ran
to **x=1509 in a 1280 px viewport** and **every page scrolled horizontally by 229 px**; **460 px at
1024**. Offender: `.header-actions` pushed off-screen by `margin-left: auto` against a doubled nav.
**Nothing in 593 assertions could see it, and the reason is exact**: `gate-9`/`gate-29` parameterize the
**viewport width**, and narrowing a viewport is a *different transform* from enlarging the text inside
it. The amended AC3 said both halves "REQUIRE NEW INSTRUMENT WORK and may not be ticked against the
existing suite" — measured `[D]`, `deviceScaleFactor|zoom` = **0 hits**. **The pre-build gate paid for
itself a second time.** Fix: **`flex-wrap: wrap` on `.header-inner`**, one line, **inert at normal text
size**; measured after, overflow **0** at 1280 and 1024 on every route probed.

**AC3's 2.2 half — the coverage statement is the deliverable, not the tag.** `gate-4` gains `wcag22aa`;
measured before deciding (F-a's discipline, one mission on): **32 runs, 0 violations, `target-size` in
`passes` on all 32** — evaluated, not inapplicable. ⚠ **The tag buys exactly ONE rule** — axe 4.11.3
ships `target-size` (2.5.8) and nothing else for 2.2 `[D]`. **2.4.11 · 2.5.7 · 3.2.6 · 3.3.7 · 3.3.8 are
named on the gate's face as uncheckable here**, four of them because the interaction does not exist on
this site — true **today**, false the moment one is added. **2.4.11 is swept by `gate-47`, not by axe.**
`prefers-reduced-motion`: 13 implementations in `src/`, **none ever verified**; now asserted *with*
controls (tokens zero under the preference; NetworkDiagram refuses to arm).

**AC2 keyboard half — MET.** [[keyboard_traversal_record]]: five surfaces × 60 stops — **0 ringless ·
0 traps · 0 order breaks · 0 positive tabindex · 0 obscured**, `Shift+Tab` retraces exactly; and six
primary flows driven keyboard-only, **16 steps / 14 PASS / 1 NOTE / 0 FAIL**. ⚠ **Honest qualifier
found by red-proving:** a **340 px** sticky header does **not** turn the obscured assertion red —
Chromium parks focus at the **nearest edge** (the bottom, tabbing down); it goes red at **820 px**. ⇒
**the clean 2.4.11 result rests partly on browser behaviour, not only on this site's layout**, said
rather than claimed as earned.

**AC3's F2 half — CLOSED.** [[f2_closure]]: `/network/` at 320 + 375, both themes — **0** doc overflow,
**0/3** clipped steps, the clone block unclipped **and** `overflow-x: auto`, and ⭐ **both sentences the
finding quotes mid-truncation render whole**. That last is the load-bearing evidence: a zero overflow is
also what a page with the text **deleted** would report.

**AC6 — lock O1's 12 px floor: NOT MET, and that is the criterion being met.** [[ac6_typeset_floor_adjudication]]:
re-measured independently across 3 routes × 5 widths × 2 themes — `hero-graph-svg` **3.5 px, 27/27** ·
`netdiagram-svg` **8.0 px, 7/8** · `convergence-funnel` **8.5 px, 8/8**, per-figure worst cases matching
P4.2's **exactly** (the reproducibility control), plus a corpus aggregate derived for the first time:
**398 of 510 painted text nodes below the floor.** Remedy is design work on a **campaign-protected**
homepage hero, so the ratchet holds and **lock O1 stays `gap`**. ⚠ Its `sequenced:` field still read
*"P4.4 (the fixes)"* — a routing field naming a mission the ⛩ P4.4 gate had already superseded;
corrected in the same commit. **The deferral chain (P4.2 → P4.4 → P4.3) stops here.**

⚠ **Found by the keyboard pass, routed not fixed:** the header's **"More" disclosure does not render at
all** — `Header.astro:38` builds it only when a `topNav` entry has `children`, and `navigation.ts:76-84`
has **seven flat entries, none with children** `[D]`; `grep -c nav-more dist/index.html` → **0**. So
~60 lines of dead CSS ship, and `Header.astro:211` describes the row as *"7 links + a compact More
disclosure"* — **a comment describing a control the build does not ship.** ⭐ **Not an accessibility
finding: nothing is stranded** — `/glossary` and `/how` are in the footer of every page `[D]`. It is a
claim-truth defect, and a nav change at the tail of an a11y objective would be the unforced widening
the freeze sweep just finished cleaning up.

⚠ **NOTE for O2's ear:** the copy button's only confirmation is an `aria-label` swap to *"Copied!"* on
the focused element — announced **inconsistently** by screen readers, with **no live region** — and it
fires only **after** `clipboard.writeText` resolves, so a rejected promise leaves **no feedback at
all**. Deliberately **not** asserted as a 4.1.3 failure (that criterion governs status messages that
*are* provided). It is item 5 of [[voiceover_session_script]], authored **after** the keyboard pass so
its listening items are the ones this pass actually raised.

⚠⚠ **SIX INSTRUMENT DEFECTS, ALL MINE, ALL BEFORE THE SUBJECT** — the campaign's standing class, and
every one caught by its own output: `addInitScript` never applied the 200 % root font-size (**15 routes
"passed" a transform that never happened**) · a clip predicate flagging deliberate `text-overflow:
ellipsis` · ⭐ **the same predicate flagging the sr-only keyboard TWINS** (`machine_eye` 14's subject)
**as clipping containers — the instrument built to protect them reporting them as the defect** · a
duration control asserting `/\d+ms/` against CSS **minified to `.15s`** · an obscured predicate counting
the header's **own children** · a skip-link rect read **mid-transition**, whose *first* fix was also
wrong. ⭐ **And one mutation that failed to go red was aimed at the WRONG ASSERTION, not at a weak
gate**: reordering `tabindex` cannot fail a test that asserts `Shift+Tab` **retraces**, because a
reordered-but-consistent order retraces perfectly. **Naming which of the two a non-red is, is the point
of running the harness.**

~~⛔⛔ **BUILT, NOT DEPLOYED.** Freeze re-verified HOLDING at resume and at close. **P4.3 is the fourth
mission accumulating unshipped work**, said here rather than left to be inferred.~~

~~⏭ **NEXT: O2** ⛩ (operator VoiceOver, ~30 min, script ready) **then O3** — graph-twin equivalence
(item 13 of the script decides AC4's disjunct), the accessibility statement, D11 re-score against the
stated ceiling of **4**, AAR.~~

> ⛩ **BOTH PARAGRAPHS SUPERSEDED 2026-08-25, struck not deleted (SO#6) — they were true at O1's close
> and both went false at this session's open.** The **freeze was LIFTED** on a measurement, so P4.3 is
> **not** a fourth built-not-deployed mission; it ships with P4.1 + P4.2 + P4.4a in one deploy. And
> **O2 was ⛩ deferred to a follow-up campaign**, so the sequence ran **O3 without it**.
> ⚠ Note what that costs, because the struck line names it: *"item 13 of the script decides AC4's
> disjunct."* With no sitting, **item 13 never ran** — AC4's disjunct was chosen instead from the
> operator's stated priority (improve the site) and from measurement, landing on the *stronger* branch
> (genuine equivalence) than the one a listening session might have licensed. **The decision was made
> on different evidence than planned, and that is recorded rather than papered over.**

### ◐ O2 — the human VoiceOver sitting: ⛩ DEFERRED, NOT SKIPPED (2026-08-25)

⛩ **Operator ruling, 2026-08-25**, in the operator's own framing: the priority is *the adna website
fully updated / reviewed / improved*, and the VoiceOver work routes to a **follow-up campaign**. The
ruling was taken with the cost stated — that deferring it leaves D11 check 5 unmet in its human half
and puts the anchor-4 reading on an interpretive step (below).

**What that leaves standing, and what it does not:**

| | Status |
|---|---|
| AC2 keyboard half | ✅ **MET** at O1 — 5 surfaces × 60 stops, 6 flows, 14 PASS / 1 NOTE / 0 FAIL |
| AC2 VoiceOver half | ◐ **UNRUN** — [[voiceover_session_script]] stays `ready_to_run` (18 items, 6 surfaces) |
| NVDA | ⛔ **out of scope by design** (Windows-only; L1 macOS node) — G-2, recorded at the pre-build gate |
| The AT *engine* lane | ✅ `gate-45`, 5 surfaces, red-proven 9/9 — unaffected by the deferral |

⭐ **The deferral is a REGISTER ROW, not a sentence — and that is this mission's own lesson applied to
its own close.** P4.3 exists partly because **G-6** and **G-7** found two obligations deferred *into
it by name*, in prose, that none of its five original criteria mentioned; all five could have passed
with both untouched. A deferral recorded only in narrative is a deferral with no gate. So the unrun
sitting is **F-v** in the campaign register, with its destination, its ready instrument, and its
consequence named. Register re-derived at the commit: total **20** · struck **13** · live **7**.

⚠ **And it is named ON THE PUBLIC PAGE.** `/accessibility` states that the automated checks use a
screen-reader *engine*, that an engine can prove information is exposed but not that what a person
hears is useful, and that **no human sitting has been run**. The site does not let an automated pass
imply a human one — which is the whole reason AC5 requires the limitations to be true.

⛔ **No instrument is proposed for F-v** (convention 15). What is missing is a person listening; there
is no version of that a checker can hold, and this campaign has shipped enough wrong instruments
authored at the tail of a session that finishes something else.

### ✅ O3 COMPLETE 2026-08-25 — AC4, AC5, the re-score, and a green suite that knew nothing

**AC4 — graph twin equivalence: MET at the FIRST disjunct.** The criterion permitted either genuine
equivalence *or* a stated limitation; the operator's stated priority (improve the site) selects the
first. The twin now enumerates all **14** edges from **both ends** with direction and type —
*"WilhelmAI — contains RareArchive"* against *"RareArchive — contained by WilhelmAI"* — derived from
the same `edges` array the SVG is built from (KW-8/FR-K), 15 rows, **28** relationship links, exactly
2× the edge count. `gate-22` **3 → 6** assertions, red-proven **7/7** (`graph_twin_redtest.sh`).

⭐ **M4 is the case that earns the gate.** It flattens `contained by` → `contains` and changes nothing
else: every count assertion still passes, every link still points at the right vault, and the
topology is gone. A gate that stayed green there would be a **link census wearing an equivalence
check's clothes** — `machine_eye` 14's exact finding, unfixed while reading as fixed. M3 is the
anti-vacuity case: every content assertion iterates rows, and over zero rows all of them are green.

⭐⭐ **THE RESOLVER WAS BUILT AGAINST THE WRONG OBJECT, AND ONLY THE RENDERED OUTPUT SAID SO.** Endpoint
resolution was measured against `vaults.json`, which shows a genuine mix of identifier forms (11
endpoints matching `vault`, 4 matching only `vault_slug`; `vault !== vault_slug` for 50 of 74), so
the first resolver keyed on both. Then the built page emitted `/vaults/astro/` where that reading
predicts `/vaults/Astro.aDNA/`. **The page does not import the JSON** — it imports `data/vaults.ts`,
the ADR-051 consumption boundary, which canonicalizes every slug *and* both ends of every edge, so in
that object a single key is not merely sufficient but the only correct one. ⇒ **`vaults.json` and
`data/vaults` are two different objects with one name**, and a measurement is only as good as the
object it was taken against — the campaign's standing law, in a new costume. The second key was dead
weight sitting one collision away from resolving to the wrong vault.

⚠ **The twin said "federatesAstro".** Written as `{e.phrase} <a>`, Astro collapses the gap between an
expression and the following tag: correct to the eye at a glance, **one word to a screen reader**, on
the one surface whose entire purpose is being read aloud. Fixed with an explicit `{' '}`, measured in
`dist/` before and after. **Found by reading the built output, not the source** — and it would have
survived every assertion in the suite, because nothing asserts on spacing.

**AC5 — the accessibility statement: MET on build, publication owed and now discharged.** In the tree
at `/accessibility`, on the `.policy` pattern its siblings `/security` and `/privacy` use, linked from
the footer of **every** page — a statement reachable only from a page you already knew about is not
reachable, and its readers are the people who arrived somewhere unexpected. Verified against a **local
preview** (V3 as amended), T0 captures at mobile-lg + desktop × dark + light, axe **0** both modes.

⭐ **The limitations are the page, and each traces to a dated measurement named in a source comment**:
the 12px floor unmet at **398/510** rendered labels (3.5px worst case) · WCAG 2.2 automated coverage
is **exactly one rule**, the other four criteria uncheckable *only because the interactions do not
exist here — true today, false the moment one is added* · NVDA out of scope · the AT gate reads a
**bounded opening**, never a whole document · no human sitting · no AT-**user** testing · and the one
least comfortable to write: **a clean 2.4.11 result rests partly on Chromium parking focus at the
nearest edge**, not solely on this site's layout. A statement listing only comfortable limitations is
worse than none — it converts an unknown gap into an implied clearance, on the one page whose subject
is its own trustworthiness.

⭐⭐ **AND A 620-GREEN SUITE KNEW NOTHING ABOUT THE NEW PAGE.** `gate-4`'s page list and the P1S3 sweep
are both **hardcoded**, so adding a route adds **zero** coverage of it: a full green run that has
evaluated no rule about the thing under test — convention 14's family at the level of the *suite*
rather than the gate. ADR-057's same-diff law exists for this and was honoured in the same commit.
⚠ **The first attempt at honouring it was itself wrong**, and re-reading the sweep's own contract
caught it: the P1S3 sweep is `@audit` (**excluded from normal gate runs**) and its stated scope is
*"every route class `gate-4` does NOT already cover"*, so listing the statement there would have
**duplicated axe twice while leaving the overflow check outside CI entirely**. Corrected to the
permanent gates: **`gate-4` +2** (axe, both modes) · **`gate-9` +6** (overflow, six viewports).
⇒ *Same-diff is not "add the route everywhere" — it is "add it where the assertion belongs", and that
needs each gate's contract read rather than assumed.*

**V4 — D11 re-scored 2 → 4; binary gate CONDITIONAL PASS → PASS.** Record appended (dated, never
rewritten) to [[reconciliation]]. The baseline's own condition — *"adjudicate/fix F2 + a real manual
pass"* — is discharged in both halves (F2 closed at AC3; the keyboard pass is a real manual pass).
Anchor 3's binding clause was *"complex graphics **partially** covered"*, which **AC4 closed
precisely**. ⚠ **The 4 rests on one interpretive step, and it is named in the record so it can be
challenged**: *"screen-reader tested"* read as satisfied by a screen-reader **engine** rather than a
human. Anchor 5 stays unreachable — it requires AT-**user** testing (G-8), and the mission declared
its ceiling of 4 **before the work started** rather than discovering it at the re-score.
⚠ Composite holds at **51.6**: D11's weight is 2, so 2 → 4 is 4 weighted points. **D11's value was
never its weight** — it is one of two dimensions carrying a *binary gate*, and the gate is what
blocked sign-off from claiming AA. The composite re-score is **P5.2's**, against a deployed build.

**V5 — AC6 and AC7 each carry their own limb, as designed.** AC6: ✅ met as a criterion (floor
adjudicated NOT MET, ratchet held, lock O1 stays `gap`). AC7: ✅ met and gated (`gate-45` M6 — strip
`aria-live`, leave the text correct, the region goes silent, the gate goes red).

⛩ **THE DEPLOY FREEZE WAS LIFTED AT THIS SESSION'S OPEN**, on a measurement rather than a lapse: the
ancestry guard is built, red-proven 13/13, and **already on `origin/main` at `4a9bc09`**, so lemur
receives it on pull; the alias serves `922519c` and HEAD contains it. ⇒ P4.3 is **not** the fourth
built-not-deployed mission — it ships with P4.1 + P4.2 + P4.4a in **one** deploy. ⚠ What the lift does
not change: v0.4.3 and the Arch `[adna]` repo stay un-published and still need lemur; live
`install.sh` stays at `0.3.1`.

## AAR (SO#5)

**Worked.** The pre-build gate, for the fourth consecutive mission — AC4 and AC5 were both amended at
it, and the amended AC4 is why edge equivalence was *built* rather than waved through by its cheaper
disjunct. Red-proving before believing: **7/7** on a gate that had gone **6/6 green on its first run**,
and M4 was the one that mattered. Reading the **built output** rather than the source — it caught both
"federatesAstro" and the wrong-object resolver, neither of which any assertion in a 628-test suite
would have flagged.

**Didn't.** Two of three sessions closed with `token_budget_actual:` **empty**, so the mission's actual
had to be reconstructed rather than summed — *a band cannot be falsified by a prose sentence claiming
it holds*. The first same-diff fix was wrong (route added to an `@audit` sweep whose contract excludes
it) and was caught only by re-reading that spec's header. And the resolver was measured against
`vaults.json` when the page reads `data/vaults.ts` — the campaign's own law, breached inside the
mission that cites it, for the *n*th time.

**Finding.** ⭐⭐ **A suite's route coverage is a hardcoded list, so a green suite says nothing about a
route you just added — and "add it everywhere" is the wrong repair.** Three gates could have taken
`/accessibility`; only two should, because one is `@audit`-excluded and scoped to what `gate-4`
*doesn't* cover. **Same-diff (ADR-057) is a claim about where an assertion belongs, and discharging it
requires reading each gate's contract.** The second finding is older and cheaper: **`vaults.json` and
`data/vaults` are two objects with one name**, and every future measurement of registry data must say
which one it read.

**Change.** F-v carries the unrun sitting with its destination and its ready instrument. The D11
re-score names the single interpretive step holding it at 4, so a reviewer can strike one sentence
rather than re-derive the score. `/accessibility` states the human-AT gap publicly, so the deferral
cannot be silently forgotten by anyone — including us.

**Follow-up.** ⛩ The VoiceOver sitting → follow-up campaign (**F-v**, script `ready_to_run`). The
header's dead "More" disclosure stays **routed not fixed** (a claim-truth defect, not an a11y one —
nothing is stranded, `/glossary` and `/how` are in every footer). Lock O1's 12px floor stays `gap`;
its remedy is design work on the campaign-protected hero. **P5.1 unblocks on this session's deploy** —
its human-evidence criteria were satisfiable under the freeze and would have produced evidence about
the wrong build (**G-11**).
