---
plan_id: mission_haussmann_p4_3_a11y_manual
type: plan
title: "P4.3 — Accessibility beyond automation: manual passes, the reflow adjudication, a published statement"
campaign: campaign_haussmann
phase: P4
decade: 2
owner: stanley
status: in_progress   # ⚠ READ THE QUALIFIER: **OPEN AT THE PRE-BUILD GATE AND NOTHING IS BUILT.** S1 ran 2026-08-24 (⛩ operator routing call opened P4.3 over holding for P4.4b; all three Vitruvius memos ruled STAGED). Convention 13's pass ran **COMPLETE at 30/30 with coverage recorded** and found **3 of 5 criteria not satisfiable as written · 2 inherited obligations (O1's 12px floor, P4.2's aria-live residue) under NO criterion · 1 ceiling overclaim (anchor 5 is unreachable; this mission's honest ceiling is D11 = 4)**. ⛩ `artifacts/p4_3/ac_amendment_proposal.md` is `proposed` — **NO BUILD AND NO RATIFIED BUDGET until it is signed**; the proposed set is 7 ACs at ~220–320 kT. ⛔⛔ Freeze re-verified HOLDING (`30c8163` + `f4fa9c5` both absent); P4.3 will be the FOURTH mission built-not-deployed. Prior status was `queued` under ⛩ DP6 2026-08-19 — activated. KEPT, condition HALF-discharged: the baseline's D11 CONDITIONAL PASS required "adjudicate/fix F2 + run a real manual pass". F2 is FIXED (P1.4, computed-geometry proofs + gate-29) and D11 moved 2 → 3. The manual half has NEVER been run — no AT traversal, no keyboard pass, no VoiceOver session — so D11's PASS is automated-scope-only until this mission runs. Scope unchanged; the qualifier is now explicit.
mission_class: verification
executor_tier: opus
token_budget_estimated: "~150–250 kT in 1 session (+ operator VoiceOver time): virtual-screen-reader lane + keyboard traversal + F2 adjudication + WCAG 2.2 delta + statement page (ADR-016)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["scoring D11 divergence + gate condition (F2 reflow candidate)", "toolkit A13 (@guidepup/virtual-screen-reader adopt; VoiceOver local trial)", "instrument D11 checks 2/5/7/11/13/14 (the manual third)", "graph keyboard-twin partial-equivalence finding (machine_eye 14)"]
vitruvius_dimensions: [D11]
decade_theme: craft
webforge_patterns: []
patterns_to_author: []
depends_on: [mission_haussmann_p1_4_mobile_integrity, mission_haussmann_p2_6_midscore]
blocks: []
acceptance_criteria:
  - "Headless AT-traversal assertions (@guidepup/virtual-screen-reader) on home, get-started, one reference page, the registry, the graph — in CI"
  - "Keyboard-only traversal pass of every primary flow recorded (focus visible, no traps, logical order); operator VoiceOver spot-session on the same five surfaces"
  - "F2 formally adjudicated closed (1.4.10) + zoom 200%/400% checks + target-size (2.2) delta swept"
  - "Graph keyboard-twin upgraded to genuine equivalence (edges enumerated, not just the roster) or its limitation stated on the page"
  - "Accessibility statement published (known limitations + contact path) — the D11 anchor-5 item"
verification_method: "CI AT-assertions green (red-tested) + traversal records + statement live + D11 re-score with the binary gate clean"
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
| O0 | Wire virtual-screen-reader assertions (5 surfaces; traversal order + phrasing) into CI; red-test | CI lane | — |
| O1 | Keyboard traversal protocol + full pass; zoom + target-size sweep; F2 closure evidence | records | — |
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

## Constraints

Assertions test semantics, not pixel positions (stability); the statement's "known limitations" must be true (register rows); nothing regresses the axe-0 record.

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

## AAR (SO#5)

*(before completed)*
