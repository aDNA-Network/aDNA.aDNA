---
plan_id: mission_haussmann_p2_6_midscore
type: plan
title: "P2.6 — Mid-campaign re-score + Decade-2 recalibration"
campaign: campaign_haussmann
phase: P2
decade: 1
owner: stanley
status: in_progress   # opened 2026-08-19. Session 1: O0 · O0c-a · O1 · O2 · O3a · O3b closed. Session 2: ⛩ DP6 RATIFIED — p2_replan.md accepted, nine ⊳ stamped, cascade executed, Decade 2 OPEN. REMAINING: ⛩ O0b (operator-gated TTFS run) → O0c-b · R-34/R-63 verdict · D3 + the 12-dimension composite · III 167 · AAR. Stays in_progress until the AAR lands (SO#5). ⛩ **2026-09-04: O0b's runner RESOLVED** — folded into P5.1's cold-reader recruitment (one non-builder runs it, artifact labelled for both). O0b's non-builder condition is MET rather than waived, so D3 will not be CoI-limited; the cost is that **P2.6 now closes behind P5.1's recruitment**, which is a human gate. This is the campaign's longest-standing ⛩ and it is resolved, not merely re-scheduled.
mission_class: verification
executor_tier: fable
token_budget_estimated: "~300–450 kT across 2 sessions: 2-scorer re-score + reconciliation + Decade-2 re-plan artifact + gate re-baseline, PLUS the carried P2.5 O0b/O0c (clean-machine TTFS run + cold-read re-test + variant-B transcript). Raised from ~200–300 kT / 1 session when the two objectives were re-homed, 2026-08-19 (ADR-016/SO#11 — a budget that no longer matches its scope is a drifted number)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["scoring/reconciliation.md (baseline 51.6 + method)", "campaign decade framing", "Storyweave replan precedent (p5_replan.md shape)"]
vitruvius_dimensions: [D1, D2, D3, D4, D5, D6, D7, D8, D9, D10, D11, D12]
decade_theme: credibility
webforge_patterns: []
patterns_to_author: []
depends_on: [mission_haussmann_p1_1_claim_purge, mission_haussmann_p1_2_state_of_network, mission_haussmann_p1_3_registry_truth, mission_haussmann_p1_4_mobile_integrity, mission_haussmann_p2_1_url_normalization, mission_haussmann_p2_2_ia_consolidation, mission_haussmann_p2_3_docs_freshness, mission_haussmann_p2_4_registry_redesign, mission_haussmann_p2_5_onboarding_paths]
blocks: [mission_haussmann_p3_1_md_twins, mission_haussmann_p3_2_registry_json, mission_haussmann_p3_3_mcp_server, mission_haussmann_p3_4_flux_integration, mission_haussmann_p3_5_proposal_process]
acceptance_criteria:
  - "TTFS measured on a clean machine and recorded with its conditions attached (carried from P2.5 criterion 4); R-34/R-63 discharged by that measurement or revised down — never by copy"
  - "Fresh two-scorer VITRUVIUS pass (same isolation protocol as baseline; new evidence captures) + reconciliation vs the 51.6 baseline, per-dimension deltas explained"
  - "Decade-2 re-plan artifact (p2_replan.md): P3–P5 mission scopes/budgets/order recalibrated on the deltas; provisional flags lifted only by operator ratification"
  - "Gate/audit route re-baseline complete (post-IA-change fixture truth)"
verification_method: "reconciled scorecard + operator ratification of the re-plan (Decade-2 activation gate)"
human_gate: true
tags: [plan, haussmann, p2, rescore, replan]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The measure-before-re-plan gate: Decade 2 opens on evidence, not momentum.

## Why this mission exists

The decade framing commits P0–P2 and holds P3–P5 provisional. This is the pivot: re-measure everything (the credibility stratum should have moved most — D6/D7/D8/D9 were the 2-band), re-derive what P3–P5 should be, and put the re-plan under operator ratification (Storyweave's proven pattern).

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Fresh evidence refresh (T0 captures of changed surfaces; claim-register re-verify; machine-eye delta) | evidence | — |
| **O0b** | **TTFS instrument + clean-machine run** *(carried from P2.5)* — execute `artifacts/p2_5/ttfs_runbook_fresh_account.md` on a fresh user account; produce the measured TTFS **and** the real session transcript as its by-product. ⛩ **AMENDED 2026-09-04 — the runner is now supplied by `P5.1`'s recruitment**: O0b's *unassisted non-builder* condition and `P5.1 AC-2`'s operator-run condition were **the same act with conflicting runners**; the operator ruled that **one recruited cold reader** (a non-builder by definition) performs it once and the artifact is **labelled for both consumers**. ⇒ O0b's original condition is **MET, not relaxed** — and `D3` therefore carries a number that is **not** CoI-limited. ⛔ O0b is now **sequenced behind P5.1's recruitment**, which is a *later* but *stronger* discharge; see `mission_haussmann_p5_1_human_evidence.md` §AMENDMENT 2 for the ordering consequence it created there. | run record + transcript | ⛩ operator (recruitment) → cold reader (run) |
| **O0c** | **Synthetic cold-read re-test of the new funnel + D3 re-score** *(carried from P2.5)*; fold the O0b transcript into `/get-started/` as the labelled gap's replacement (variant B) | evidence + page change | — |
| O1 | Two fresh-context scorers + reconciliation vs baseline | scorecard + deltas | — |
| O2 | Decade-2 re-plan (`p2_replan.md`): keep/rescope/merge/drop per P3–P5 mission, with budgets | re-plan | ⛩ operator (DP6) |
| O3 | Gate re-baseline + III cycle-series entry; AAR | records + AAR | — |

## Constraints

Scorer isolation identical to baseline (fresh contexts, evidence-pack-only, sheets committed pre-reconciliation); deltas must cite the mission that moved them (attribution, not vibes).

## Definition of done

The operator ratifies a Decade-2 plan grounded in measured deltas; the provisional flags resolve.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + `evidence/scoring/reconciliation.md`. Execute O0–O1, author O2, halt at DP6 for ratification.

## Carried in from P2.5 (2026-08-19)

P2.5 closed at O1 with **3 of 4** acceptance criteria met. Its criterion 4 — the TTFS instrument plus
one recorded clean-machine run — was never measured, and lands here as **O0b/O0c**.

**Why here and not a new mission.** The charter's `mission_count: 27` sits inside the ratified §7.7
statement; amending ratified text is the operator's act, not an agent's. P2.6 is also the better home
on the merits: it is the mission that *scores* D3, whose baseline 3 is explicitly provisional *"no
TTFS run"*. Folding the measurement into the measuring mission means D3 stops being provisional by
construction instead of being re-scored provisionally a second time.

**What is waiting for it**: `artifacts/p2_5/ttfs_instrument_kit.md` (the reusable protocol, authored
but **never exercised** — it is proven when O0b runs it) and
`artifacts/p2_5/ttfs_runbook_fresh_account.md` (this node's concrete instantiation). Account creation
is an operator action; O0b is machine-gated exactly as P2.5's O2 was.

**Standing constraint**: R-34 (`/network`) and R-63 (`/get-started`) both claim "about five minutes"
and are registered `[A]`/S4 with no recorded run. They are discharged by O0b's measurement **or
revised down then** — never by copy, and never by a runbook.

## Progress

### Session 1 — 2026-08-19 (`session_stanley_20260819_165937`), commits `3b8e90d`..`5b4f56e`

**Operator rulings taken before work began**: (1) proceed to DP6 with **D3 withheld** rather than stall on
the operator-gated TTFS run; (2) score on **instrument v1.0**, unchanged, so the deltas mean something.

| Obj | State | Output |
|---|---|---|
| **O0** | ✅ | 156 T0 captures, axe **0 both themes**; claim register re-verified + **R-111 written** (S2); machine-eye delta; pack pinned `c9e8300` |
| **O0b** | ⛩ **outstanding** | Operator: fresh macOS account + an unassisted non-builder runner. Runbook ready at `artifacts/p2_5/ttfs_runbook_fresh_account.md` |
| **O0c-a** | ✅ | Three fresh cold reads + synthesis; **R-120…R-124** registered |
| **O0c-b** | ⏸ blocked on O0b | The transcript fold (variant B) |
| **O1** | ✅ | Isolation protocol authored (it existed nowhere); two `fable` scorers; **55.6 of 88 → 63.2/100**, baseline same-11 **50.5**, Δ **+11.2 / +12.7** |
| **O2** | ✅ authored, ⛩ **DP6 pending** | `artifacts/p2_6/p2_replan.md` at `status: proposed` |
| **O3a** | ✅ | **487 passed**; fixtures re-verified; charter corrected; ADR-057 staged |
| **O3b** | ✅ | III **cycle 166** — first of the campaign, first in ~10 weeks |

**Headline**: D6/D7/D8 each moved **2 → 3** — the credibility stratum the charter named as the binding
constraint. **D9 did not move at all** and now fails for a *different* reason than at baseline.
Calibration cleared at variance ≤1 on **11 of 11**, with both reviewers independently quoting the
identical binding anchor on **eight** dimensions.

**The four things worth reading the record for:**

1. **R-111** — adjudicated at P1.2, assigned an id, **never given a row**, fix never shipped. Survived
   three missions because it is an *absence* and not an identifier.
2. **487 gates green, 8 claim rows open, zero overlap.** The suite is structurally blind to prose
   contradictions, absences, and off-site state.
3. **~0.8 of the delta is the instrument, not the site** — both scorers re-read D2's conjunctive anchor
   the opposite way from the baseline, on a feature (`registry search`) that shipped in a *previous
   campaign*. Annotated, not banked. The v1.1 fix must precede P5.2.
4. **Three derived figures published wrong before being caught** (register §8.3, §8.6, re-plan §4). The
   rule became mechanical: **count last**.

**Constraint honored**: `git diff --name-only 3b8e90d~1..HEAD -- site/` → **0 files**. This mission wrote
no site changes.

### Session 2 — 2026-08-19 (`session_stanley_20260819_190213`), commits `38874cc`..

**⛩ DP6 RATIFIED. Decade 2 is open.** Operator rulings taken at planning: DP6 fires **in-chat** (not as
an ISS surface) · **cascade then halt**, P3.5 not authored here · **O0b stays outstanding** · **push at
session close**.

| Obj | State | Output |
|---|---|---|
| **O0b** | ⛩ **still outstanding** | Unchanged by this gate. Runbook remains `ready_for_operator` |
| **O0c-b** | ⏸ blocked on O0b | The transcript fold (variant B) |
| **O2** | ✅ **RATIFIED** | `p2_replan.md` → `accepted`; **nine** ⊳ stamped; cascade executed across 16 files |

**The gate itself.** Nine sub-decisions, not the eight the session announced — **D-I sat unlettered
inside §2's P3.2 prose** and would have ridden the master signature silently. Found by grepping the
document for `⊳` instead of trusting §3's heading; it is §1.8's own finding recurring one level up (*the
index believed over the artifact*). All nine ruled; eight as recommended; **D-A took its recommendation
and then went further than it**.

**D-A is the one that mattered.** The drafted recommendation read *"P4.5 takes the copy rows early as a
first increment"* — while §4's order left P4.5 at **position 10 of 12**. Read literally that is option
(iii) wearing option (ii)'s label: an **S2 self-contradiction in the homepage's 30-second zone**, live
through eleven missions. Put to the operator as a separate question; ruled to the **front of the whole
decade**. P4.5 splits into **P4.5a** (four copy rows + the ⊳ D-C hero cut, runs first) and **P4.5b** (the
voice rewrite, still last). `mission_count` holds at **27** — a split increment is not a new mission.

**Three defects fixed in passing, all of the same family — a stale number outliving its derivation:**

1. **`calibrated_sessions` moved twice.** Drafted `35-40`; the O0b ruling made P2.6 three sessions, not
   two → `36-41`; then the round-3 D-A split added a session → **`37-42`**, which is what is stamped.
   Both halves counted, not carried: `grep -c haussmann` on the session history → 17, minus the one that
   *is* P2.6 s1 → **16** Decade-1 `[D]`. The operator's quoted value was `36-41`, derived one ruling
   earlier; the ruling selected the *principle* (**"stamp the number that survives being counted
   today"**), and the deviation is flagged in-field for one-line reversal.
2. **The Decade-2 total is now machine-derived** — `~2,380–3,650 kT` summed **from the twelve mission
   files by script**, not typed. It matches re-plan §4 exactly because §4 was re-summed the same way.
3. **P3.1's budget string carried a mojibake CJK character** (`llms-full真corpus`), and **P4.5's split
   field led with the superseded `250–400`** — the first `~N–N kT` a grep finds must be the operative
   figure, not the one it replaced.

**Two rules were found to be unfollowable and marked as such rather than left standing.** Campaign
convention 4 (*"read gate bars from `lighthouse_profiles.json`, never transcribe"*) — the file is **0
hits vault-wide**, so every gate-19 bar is a transcription; mirror owed at P4.4 (⊳ D-E). And convention
11's *"claim next open mission in phase order"* — since D-A, **phase order is not claim order**.

**ADR-057 held three statements about itself, one contradicting the other two.** Frontmatter `proposed`;
its own Status section *"ratified with the charter at Gate C"*; the signed §7.7 *"adopted with the
charter."* ⊳ D-B ruled Gate C covered it. Ratification **Date is 2026-08-16** (the act), annotated with
the 08-19 correction.

**Constraint honored**: zero `site/` files. The ⊳ D-C hero cut is *ruled* here and **implemented at
P4.5a** — a copy edit needs a gate anchor and a probe, which is not a ratification session's work.

**Owed before P4.5a**: the D-C finding was *held back* at O0c-a pending this ruling and **has no
claim-register row**. P4.5a would otherwise inherit four registered rows and one unregistered one —
exactly how R-111 went missing for three missions.

### Session 3 — pending

⛩ **O0b** (operator: fresh macOS account + an unassisted non-builder runner) · O0b write-up ·
**R-34/R-63 verdict** (three branches planned, including "did not complete") · O0c-b fold + the
same-diff probe update · **D3 final score + the first publishable 12-dimension composite** · III cycle
167 · **AAR** → then and only then does P2.6 reach `completed` (SO#5).

## AAR (SO#5)

*(before completed)*
