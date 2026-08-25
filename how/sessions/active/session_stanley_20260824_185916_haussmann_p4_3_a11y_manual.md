---
type: session
session_id: session_stanley_20260824_185916_haussmann_p4_3_a11y_manual
user: stanley
started: 2026-08-25T01:59:16Z
status: active
tier: 1
machine: L1 (Stanley's Mac, Darwin 25.6.0)
intent: "Operation HAUSSMANN P4.3 S1 — the pre-build gate ONLY. Re-verify the freeze + every grounded_in entry at the object (convention 12), then run the convention-13 AC-coherence pass COMPLETE with its coverage recorded, and author the AC amendment proposal for operator signature. Builds nothing: no gate, no dependency, no page. The operator routing call that opened P4.3 (and held all three Vitruvius memos staged) was taken at session open."
scope:
  directories:
    - how/campaigns/campaign_haussmann/missions/     # P4.3 mission file — coverage matrix into the body
    - how/campaigns/campaign_haussmann/artifacts/p4_3/   # NEW — coherence pass record + amendment proposal
    - how/sessions/active/                           # this file
  files:
    - how/campaigns/campaign_haussmann/missions/mission_haussmann_p4_3_a11y_manual.md
    - site/tests/gates/                              # ⛩ S2 ONLY — unlocked by the AC signature, see the scope note
    - site/scripts/                                  # ⛩ S2 ONLY — the red-test harness
  excluded:
    - site/src/data/vaults.json                      # pt19 — Hestia-owned, NEVER
    - who/coordination/                              # operator ruled all three Vitruvius memos stay STAGED
    - site/src/pages/**                              # no page ships this session; AC5's statement is S3
  scope_note: >-
    This file opened declaring `site/**` EXCLUDED, on the correct ground that **S1 builds nothing**, and
    S1 did not. The exclusion was lifted by a **specific event, not by convenience**: the operator signed
    `ac_amendment_proposal.md` (`accepted`, 2026-08-24), which is the gate whose entire purpose is to
    authorize the build. Recording the amendment rather than silently widening the scope — a scope
    declaration that quietly grows is indistinguishable from one that was never honoured.
executor_tier: opus   # AC adjudication is judgment-heavy; declared per the P4.4 precedent and honoured
token_budget_estimated: "~40–70 kT for S1 (pre-build gate only). The mission's own ~150–250 kT band covers O0–O3 and is NOT ratified until the amendment is signed — convention 13 runs BEFORE the budget (P4.1's SO#11 remedy)."
token_budget_actual:
files_modified: []
files_created:
  - how/sessions/active/session_stanley_20260824_185916_haussmann_p4_3_a11y_manual.md
completed:
heartbeat: 2026-08-25T01:59:16Z
tags: [session, haussmann, p4, p4_3, a11y, wcag, pre_build_gate]
---

# Session — HAUSSMANN P4.3 S1 (pre-build gate)

> Plan of record: `~/.claude/plans/please-read-the-claude-md-validated-peacock.md` (operator-approved).
> Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`. Persona **Rosetta**.

## Session open — state re-verified at the object

| Check | Result |
|---|---|
| Conflicting sessions | **none** — `how/sessions/active/` was empty |
| `origin/main` vs `HEAD` | ~~**`0 0`** at `32069f3`~~ — see the correction below. **`origin/main` IS at `32069f3` `[D]`**, so the substantive half holds: ⭐ **the 2 commits memory carried as "unpushed, awaiting GO" are PUSHED.** |

> ⚠ **CORRECTION, made at 19:35 against the reflog — my session-open probe was wrong by one commit.**
> It reported `ahead/behind 0 0`, and I reported that. The reflog says `2fe9093` *("two ISS findings
> filed from Home")* moved HEAD at **18:45:35**, **14 minutes BEFORE this session opened**, so the
> count at open was **1**, not 0. The two readings in that probe (`git log` top-of-list and
> `rev-list --count`) **agreed with each other and were both wrong**, which is why nothing looked
> off — and it is the strongest argument for the campaign's own rule that a count is **derived at the
> moment it is used**, never carried forward from an earlier reading.
> ⭐ **`2fe9093` IS NOT THIS SESSION'S WORK** — it is an operator commit from a **Home.aDNA lane**
> filing two ISS findings (`F-GATE-06`, `F-GATE-07`) into this vault's `how/backlog/`. It is benign
> and on-topic, and it is **in the unpushed set**: any push GO must name it deliberately rather than
> sweep it along as *"my"* commits. Recorded because a foreign commit riding out on someone else's
> push is the shared-tree hazard this node has already been bitten by.
| ⛔⛔ Deploy freeze | **HOLDS** — `git cat-file -t` fails on **both** `30c8163` and `f4fa9c5` `[D]` |
| Vitruvius memos | **3 staged, undelivered** in `who/coordination/` — operator re-ruled STAGED at session open |
| `@guidepup/virtual-screen-reader` | **NOT installed** (`site/node_modules/@guidepup` absent) — O0 adds a dependency |

## Routing call (⛩ operator, taken at session open)

Campaign governance left the next mission as an operator call and declined to take it (SO#1). Put to the
operator with P4.4b's blockers named: **open P4.3**; **all three Vitruvius memos stay staged**. P4.4b is
therefore untouched and stays blocked on actors outside the session.

## `grounded_in:` re-verification (convention 12 — recon-at-execution)

| # | Entry | Verdict |
|---|---|---|
| 1 | scoring D11 divergence + gate condition (F2 reflow candidate) | ✅ **verified** — `evidence/scoring/reconciliation.md:33` (A=2, B=3 → **2**), `:43` (the divergence), `:47` (**CONDITIONAL PASS**, condition = adjudicate/fix F2 **+ a real manual pass**) |
| 2 | toolkit A13 (@guidepup/virtual-screen-reader adopt; VoiceOver local trial) | ⚠ **substance real, POINTER WRONG** — see finding G-1 |
| 3 | instrument D11 checks 2/5/7/11/13/14 (the manual third) | ✅ **verified verbatim** — `directives/OPERATION_VITRUVIUS_review_instrument.md:459–472`; the six map cleanly (2 keyboard · 5 screen-reader · 7 complex graphics · 11 zoom · 13 target size · 14 statement) |
| 4 | graph keyboard-twin partial-equivalence (machine_eye 14) | ✅ **verified verbatim** — `evidence/machine_eye/machine_eye.md:39` |

### G-1 — `toolkit A13` cites a label that does not exist in the cited document

The toolkit is **`what/context/context_web_quality_toolkit.md`** — *vault-root-relative, not
campaign-relative*, which is why a campaign-scoped search finds nothing. Its substance is real and
directly on point (`## 1 · Accessibility` → `### The manual complement — non-negotiable`, lines 74–104):
the manual battery *"is part of the conformance claim, not an optional extra,"* and complex graphics need
a twin *"verified equivalent, not a partial listing."*

But the document **has no A-numbering at all** — `grep -E '\bA[0-9]+\b'` returns **0 hits** `[D]`. It is
organised by numbered sections and named subheadings. So `A13` resolves to nothing in the document it
cites. **P4.4 cites `toolkit A2` the same way** `[D]`, so this is a campaign-wide citation scheme that the
cited artifact never carried — not a P4.3 typo.

⚠ **My own first probe was narrower than its conclusion.** It searched the campaign directory and
returned *"A13 appears only in the mission file"* — true of that directory, and it would have supported a
much wider and wronger claim (*"the toolkit does not exist"*). Widening the scope found the toolkit
immediately. **Convention 16's law recurring inside the session that cites it**, which is the third
sighting this campaign has logged and the reason the rule is a habit rather than a checker.

**Disposition:** evidence stands; **the citation is repointed** to section + line range, not amended away.

## Progress

| Increment | State | Commit |
|---|---|---|
| S1 — pre-build gate (convention 13, 30/30, coverage recorded) | ✅ | `ce5b628` |
| ⛩ Amendment signed + freeze sweep | ✅ | `b63641d` |
| S2 / O0 — AT lane (AC1 + AC7), red-proven 9/9 | ✅ | `f200686` |
| S3 / O1a — the three instruments (AC2 keyboard · AC3 entire), red-proven 9/9 + 9/9 + 3 new controls | ✅ | `465566d` |
| S3 / O1b — traversal record · F2 closure · AC6 adjudication · O2 script | ✅ | *this commit* |
| O2 ⛩ operator VoiceOver (⛩ deferred — script only this session) · O3 twin + statement + AAR | pending | — |

**Baselines**: suite **587 → 593 → 617** (derived from the runner) · `at_traversal_redtest.sh` **9/9** ·
`zoom_resize_redtest.sh` **9/9** (7 mutations + 2 controls) · `keyboard_redtest.sh` **9/9** (7 + 2) ·
`a11y_bestpractice_redtest.sh` **9/9** (A–I, three new for `wcag22aa`) · dist restored + verified after
every mutation · freeze **HOLDING**, nothing deployed.

## S3 / O1a — the crash resume, and a real defect the suite could not see

⛩ **Operator routing at resume**: run **all of O1 in one session**; **O2's VoiceOver sitting deferred**
(script only, authored after the keyboard findings so it is fed by them). The prior session crashed
after O0's commit; the tree was **clean** and nothing was half-built — S1, the amendment, the freeze
sweep and O0 were all committed.

**State re-derived at the object, not carried:** freeze **HOLDS** (`git cat-file -t` fails on both
`30c8163` + `f4fa9c5` `[D]`) · `origin/main` = `32069f3`, HEAD = `33de102`, **6 unpushed** (including
`2fe9093`, the foreign Home.aDNA commit — any push GO must name it) · suite baseline **593**, read from
`playwright test --list`, not from the mission file.

### ⭐ AC3 — the finding: 229px of horizontal scrolling at 200% text, on every page

**WCAG 1.4.4 (Resize text).** With the browser's text size at 200% — a user preference, **not** page
zoom, so the viewport stays 1280 — the header ran to **x=1509 in a 1280px viewport** and **every page
scrolled horizontally by 229px**; at 1024 the overflow was **460px**. The offender is
`.header-actions` (CTA + GitHub + theme toggle), pushed off-screen by `margin-left: auto` against a
nav that had also doubled.

⭐ **Nothing in 593 assertions could see it, and the reason is precise:** `gate-9` and `gate-29`
parameterize the **viewport width**, and narrowing a viewport is a *different transform* from
enlarging the text inside it. AC3's amended wording said both halves "REQUIRE NEW INSTRUMENT WORK and
may not be ticked against the existing suite" — measured `[D]`: `deviceScaleFactor|zoom` = **0 hits**
in `tests/`. That was right.

**Fix: `flex-wrap: wrap` on `.header-inner`** — one line, **inert at normal text size** (the row only
wraps when it cannot fit, which it always can today; gate-13 still asserts the flat-row fit at 1024).
Measured after: **overflow 0** at both 1280 and 1024 on every route probed.

### AC3 — the WCAG 2.2 delta, and the honest coverage statement

`gate-4` now runs `wcag22aa`. **Measured before deciding** (the F-a discipline, one mission on):
16 routes × 2 themes = **32 runs, 0 violations, `target-size` in `passes` on all 32** — evaluated, not
inapplicable. ⚠ **The tag buys exactly ONE rule**: axe-core 4.11.3 ships `target-size` (2.5.8) and
nothing else for 2.2 `[D]`. 2.4.11 · 2.5.7 · 3.2.6 · 3.3.7 · 3.3.8 are **not machine-checkable here**
and are named on the gate's face — four of the five because the interaction does not exist on this
site, which is true **today** and stops being true the moment one is added. **2.4.11 is swept by
gate-47**, not by axe.

### AC3 — reduced motion swept, not recorded out of scope

13 implementations exist in `src/` `[D]` and **none had ever been verified**. gate-46 asserts the
`--transition-*` tokens zero under the preference **and** that NetworkDiagram refuses to arm its
compose animation — each with the control that proves the un-emulated state differs.

### AC2 — the keyboard pass is CLEAN, and the controls are what make that worth saying

Five surfaces × 60 Tab presses: **0 focus stops without a ring · 0 consecutive repeats (no trap) ·
0 DOM-order breaks · 0 positive tabindex · 0 elements obscured by the sticky header**, and Shift+Tab
retraces the forward walk exactly. The negative claims carry coverage floors — the walk asserts it
**scrolled** (72 of 87 steps on `/`, max scrollY 6574) because *"nothing was obscured"* and *"nothing
ever scrolled far enough to be obscured"* are the same green.

⚠ **One honest qualifier, found by red-proving:** a `340px` sticky header did **not** turn the
obscured assertion red — Chromium's focus scroll aligns to the **nearest edge**, parking each element
near the *bottom* of the viewport when tabbing down. It goes red at 820px. ⇒ **the site's green here
rests partly on browser scroll behaviour, not only on its own layout**, and the record says so rather
than claiming a design property this site did not earn.

### ⚠⚠ SIX INSTRUMENT DEFECTS, ALL MINE, ALL BEFORE THE SUBJECT — the campaign's standing class

1. **`addInitScript` never applied the root font-size.** An entire probe run reported *"no overflow"*
   for 15 routes it had **never actually resized** (body text stayed 14.4px). That green is
   indistinguishable from a conformant site. ⇒ gate-46 asserts the transform happened **first**, and
   `zoom_resize_redtest.sh` case 2 pins the type scale to px to prove that control fires.
2. **A clip predicate that flagged deliberate `text-overflow: ellipsis`** — all 39 of `/vaults`'s
   "clips" were a design truncation.
3. **The same predicate flagged the sr-only keyboard twins** (`nav.hero-graph-nodelist`,
   `nav.graph-node-list`) as clipping containers. They are the **machine_eye 14 twins** — the thing
   AC4 is about — reported as a defect by the instrument built to protect them.
4. **gate-46's own duration control asserted `/\d+ms/`** and went red against a correct token set:
   authored `150ms`, **minified to `.15s`**. The gate was wrong before the subject was.
5. **The obscured predicate counted the header's OWN CHILDREN** — 11 per route, on every route.
6. **The skip-link check read the rect mid-transition** (`top=-56`) and failed on `/` alone while
   passing on four surfaces. Measured settle: `-56.5 → -9.1 → **8** from t+200ms`. Its *first* fix
   was also wrong — it broke on two equal frames during a slow homepage paint. Now: three equal
   samples **and** a 250ms floor above the 150ms transition.

⭐ **And one mutation that failed to go red was aimed at the wrong assertion, not at a weak gate.**
`keyboard_redtest.sh` case 7 originally hijacked tab order with `tabindex="3"` and expected the
**reverse-walk** test to fail. It cannot: that test asserts Shift+Tab *retraces* the forward walk, and
a reordered-but-consistent order retraces perfectly. Reordering is case 2's, on the traversal test
where the DOM-order claim lives. The reverse test can only catch **asymmetry**, so the mutation is now
a real one-way trap (Shift+Tab swallowed). ⇒ **naming which of the two a non-red is, is the point of
running the harness at all.**

## S3 / O1b — the records, and two findings the flows raised

Four artifacts in `artifacts/p4_3/`: [[keyboard_traversal_record]] · [[f2_closure]] ·
[[ac6_typeset_floor_adjudication]] · [[voiceover_session_script]]. Plus
`site/scripts/keyboard_flow_probe.mjs` — committed rather than run-and-discarded, because a record
whose evidence cannot be re-derived is a record nobody can check.

**Six primary flows, keyboard only — 16 steps · 14 PASS · 1 NOTE · 0 FAIL.** Bypass (skip link →
`#main-content`) · theme toggle (flips, and **keeps focus**) · registry (search → `"0 of 74 vaults —
nothing matched"` → chip → `"7 of 74 vaults"`) · install copy button · graph twin (node → `/vaults/harness/`).

⚠ **NOTE — the copy confirmation is fragile, and the honest reading is narrow.** The only feedback is
an `aria-label` swap to *"Copied!"* on the **focused** element, which screen readers announce
inconsistently; there is no live region. And it fires only **after** `clipboard.writeText` resolves, so
a rejected promise leaves **no feedback at all**. **Deliberately not called a 4.1.3 failure** — that
criterion governs status messages that *are* provided. It is **item 5** of the O2 script, because
whether an announcement is *useful* rather than merely *present* is the AC7 question and it needs an ear.

⚠ **ROUTED, NOT FIXED — the header's "More" disclosure does not render at all.** `Header.astro:38`
builds it only when a `topNav` entry has `children`; `navigation.ts:76-84` has **seven flat entries,
none with children** `[D]`, so `grep -c nav-more dist/index.html` → **0**. ~60 lines of dead CSS ship,
and `Header.astro:211` describes the row as *"7 links + a compact More disclosure"* — **a comment
describing a control the build does not ship**. ⭐ **Nothing is stranded**: `/glossary` and `/how` are
in the footer of every page `[D]`, `/reference` is in the header as *"Standard"*. ⇒ a **claim-truth**
defect, not an accessibility one, and a nav change at the tail of an a11y objective would be the
unforced widening the freeze sweep just finished cleaning up.

**AC6 adjudicated NOT MET** at the object (3.5 / 8.0 / 8.5 px, matching P4.2 **exactly** — the
reproducibility control — plus a first-time corpus aggregate of **398 / 510** text nodes below floor).
`lock_coverage_adna.yaml`'s `sequenced:` field named **P4.4**, a mission the ⛩ P4.4 gate had already
superseded by deferring the judgement here; corrected in the same commit. `lock_coverage_check.py`
re-run: **PASS, 60/60 cells, gap still 24.**

## SITREP

**Completed**
- **O1 in full** (⛩ operator ruled one session): AC2's keyboard half · AC3 entire (zoom · WCAG 2.2 ·
  reduced motion · F2) · AC6.
- **Three instruments, each red-proven with controls**: `gate-46` (13 assertions, `zoom_resize_redtest.sh`
  9/9) · `gate-47` (11 assertions, `keyboard_redtest.sh` 9/9) · `gate-4`'s `wcag22aa` widening
  (`a11y_bestpractice_redtest.sh` 9/9, three new cases).
- **One real defect found and fixed**: 229 px of horizontal scrolling at 200 % text on every page
  (460 px at 1024) — `flex-wrap: wrap` on `.header-inner`, one line, inert at normal text size.
- **Four evidence artifacts** + a committed, re-runnable flow probe.
- **Suite 593 → 617**, derived from the runner · **gitleaks 902 commits, no leaks** · `lock_coverage`
  PASS.

**In progress** — none. O1 is closed; nothing is half-built.

**Next up**
1. ⛩ **O2 — the operator VoiceOver session** (~30 min). [[voiceover_session_script]] is ready; its
   **item 13 decides AC4's disjunct** (upgrade the graph twin to enumerate edges, or state the
   limitation on the page) and **item 5** settles the copy-confirmation NOTE.
2. **O3** — twin equivalence, the accessibility statement (AC5: known limitations must be **TRUE**,
   read from register rows — [[ac6_typeset_floor_adjudication]] and this record are two of them), the
   **D11 re-score against the stated ceiling of 4** (G-8), and the AAR (SO#5).

**Blockers**
- ⛔⛔ **The deploy freeze HOLDS** — `30c8163` + `f4fa9c5` re-verified absent at open and close.
  **P4.3 is the FOURTH mission built-not-deployed** (after P4.1, P4.2, P4.4a). Release still needs
  lemur to push both commits and **one** deploy from a tree holding both halves. `#needs-human`
- ⛩ **O2 needs operator time.** Nothing headless substitutes for it, and AC4 waits on its item 13.
- ⛩ **A push is an outward act needing its own GO.** **8 commits unpushed**, and one of them —
  `2fe9093` — is a **foreign Home.aDNA commit** filing two ISS findings into this vault. Any GO must
  name it deliberately rather than sweep it along.

**Files touched** — created: `site/tests/gates/gate-46-zoom-resize.spec.ts` ·
`site/tests/gates/gate-47-keyboard.spec.ts` · `site/scripts/zoom_resize_redtest.sh` ·
`site/scripts/keyboard_redtest.sh` · `site/scripts/keyboard_flow_probe.mjs` ·
`artifacts/p4_3/{keyboard_traversal_record,f2_closure,ac6_typeset_floor_adjudication,voiceover_session_script}.md`.
Modified: `site/src/components/common/Header.astro` · `site/tests/gates/gate-4-a11y.spec.ts` ·
`site/scripts/a11y_bestpractice_redtest.sh` · `site/scripts/lock_coverage_adna.yaml` ·
`missions/mission_haussmann_p4_3_a11y_manual.md` · `campaign_haussmann/CLAUDE.md` · this file.

**Token budget** — `token_budget_actual` for the mission is recorded at O3's close, not here; this
session ran S1 + O0 (prior context) and O1a + O1b, comfortably inside the ratified ~220–320 kT band.

## Next Session Prompt

> Operation HAUSSMANN, mission **P4.3** (`missions/mission_haussmann_p4_3_a11y_manual.md`), persona
> **Rosetta**, campaign governance `how/campaigns/campaign_haussmann/CLAUDE.md`. **O0 and O1 are
> COMPLETE** (`f200686`, `465566d`, + the O1b commit); the mission's amended **7 ACs are
> operator-signed** and **AC1 · AC2-keyboard · AC3 · AC6 · AC7 are met**. **Open at ⛩ O2**: the
> operator VoiceOver session, ~30 minutes, script ready at
> `artifacts/p4_3/voiceover_session_script.md` — run it **against a LOCAL PREVIEW** (the freeze means
> production is a pre-P4.1 build; evidence about the wrong build is G-11) and record answers into its
> `## Findings` table. **Item 13 decides AC4's disjunct** and **item 5** settles whether the copy
> confirmation needs a live region. Then **O3**: graph-twin equivalence (gate-22 asserts the roster
> only), the accessibility statement in-tree with **publication named as owed, never claimed** (G-5 —
> nothing this mission does can make anything live), **D11 re-scored against a stated ceiling of 4**
> with check 5 recorded **PARTIAL by design** (NVDA is Windows-only), and the AAR (SO#5) with
> `token_budget_actual`. **Re-verify at the object first** (convention 12): the freeze
> (`git cat-file -t 30c8163 f4fa9c5` must fail), the unpushed count **derived not carried**, and the
> suite baseline from the runner (**617** at this close). ⛩ **A push needs its own GO and must name
> `2fe9093`, a foreign Home.aDNA commit riding in the unpushed set.** ⛔⛔ Deploy nothing.
