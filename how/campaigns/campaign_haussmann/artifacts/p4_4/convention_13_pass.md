---
type: artifact
artifact_type: convention_13_pass
campaign_id: campaign_haussmann
mission_id: mission_haussmann_p4_4_ci_hardening
status: complete
created: 2026-08-24
updated: 2026-08-24
last_edited_by: agent_rosetta
coverage: "30/30 pairs — 20 (AC × V) + 10 (AC × AC). Complete; no pair skipped."
findings: "4 defects · 1 structural gap · 2 blocked-by-external"
tags: [haussmann, p4_4, convention_13, acceptance_criteria, coherence]
---

# P4.4 — convention-13 coherence pass, complete, with coverage recorded

> **The question, once per pair:** *can the stated method satisfy the stated test?*
> Convention 13's amendment adds two obligations: run it against **every** (method × test) pair, not the
> pairs that look suspicious; and **state which pairs were checked**, so an incomplete pass is legible as
> incomplete. P3.3's pass checked two pairs, recorded no coverage, and read as a clean bill of health.
>
> **Run BEFORE any budget is ratified** — P4.1's SO#11 retrospective ruled that the remedy for its 2.3×
> overrun was not "estimate higher" but *"convention 13 runs before a DP ratifies a budget."*

## The criteria under test

| Id | Acceptance criterion (as written, plus the proposed AC0) |
|---|---|
| **AC0** | *(proposed this session)* `deploy_adna.sh prod` refuses to publish a tree not containing the live commit — the F-u ancestry guard |
| **AC1** | Visual-regression gate live: `toHaveScreenshot` on ~12 templates × 2 themes, **baselines generated in the CI container**; diff report on PRs; the old deferral formally closed |
| **AC2** | Field-p75 instrument decided + live (Speed Insights; operator enables in dashboard) — D12's field gate becomes measurable |
| **AC3** | Unlighthouse whole-site sweep on a schedule, **budget-failing**; fixtures remain the per-route gate |
| **AC4** | CWV budgets adopt the WebForge class-keyed + ratchet discipline (**read from profiles, never transcribed**) |

**Verification limbs**, decomposed from `verification_method:` — *"red-tests (deliberate visual diff;
deliberate budget breach) + one scheduled sweep run + field data flowing"*:

| Id | Limb |
|---|---|
| **V1** | red-test: a deliberate visual diff |
| **V2** | red-test: a deliberate budget breach |
| **V3** | one scheduled sweep run |
| **V4** | field data flowing |

## Coverage — all 20 (AC × V) pairs

| | V1 visual diff | V2 budget breach | V3 sweep run | V4 field data |
|---|---|---|---|---|
| **AC0** | ✅ n/a | ✅ n/a | ✅ n/a | ✅ n/a — **⚠ GAP-1: no limb tests AC0 at all** |
| **AC1** | ⚠ **DEFECT-1** | ✅ n/a | ✅ n/a | ✅ n/a |
| **AC2** | ✅ n/a | ✅ n/a | ✅ n/a | ⛔ **DEFECT-2** |
| **AC3** | ✅ n/a | ◐ partial | ⚠ **DEFECT-3** | ✅ n/a |
| **AC4** | ✅ n/a | ⛔ **DEFECT-4** | ✅ n/a | ✅ n/a |

*(`n/a` = checked and correctly unrelated; recorded so the pass is legible as complete rather than
selective. This is the obligation P3.3's pass failed.)*

## Coverage — all 10 (AC × AC) pairs

| Pair | Verdict |
|---|---|
| AC0×AC1 | compatible — both touch CI/deploy, no contention |
| AC0×AC2 | ⛔ **dependency**: AC2 needs a production deploy; AC0 guards deploys; **the freeze blocks both** |
| AC0×AC3 | compatible |
| AC0×AC4 | compatible |
| AC1×AC2 | compatible |
| AC1×AC3 | ⚠ **contention**: both drive a browser over the whole site; must not co-run (convention 6's Lighthouse/preview-server rule) |
| AC1×AC4 | compatible |
| AC2×AC3 | compatible |
| AC2×AC4 | ◐ AC2's field p75 is the *input* a ratcheting field budget would need; sequencing only |
| AC3×AC4 | ⛔ **hard dependency**: AC3 is *"budget-failing"*, so it cannot be demonstrated before AC4's budgets exist |

---

## DEFECT-1 (AC1 × V1) — the red-test runs where the baselines do not

AC1's whole point is **container-generated baselines**: that is the fix for the dev-Mac-vs-CI noise
which caused `idea_visual_regression_gate` to be deferred in the first place. V1 says *red-test with a
deliberate visual diff* and **does not say where it runs**.

Run on this Mac against container baselines, **every screenshot diffs** — different font rasterisation,
different subpixel geometry. The red-test goes red, reports success, and proves nothing: a true positive
and the exact noise the container was adopted to eliminate are indistinguishable.

⇒ **V1 must be amended to state that the red-test runs in the same container that generated the
baseline.** Otherwise the mission's headline mechanism is verified by an instrument that cannot see it.
*(Convention 14's family: a green — or here, a red — that did not reach its subject.)*

## DEFECT-2 (AC2 × V4) — "field data flowing" is not reachable in this mission

Four things must hold for V4: the Speed Insights package is in the app · the operator enables it in the
dashboard · **the instrumented build reaches production** · **enough real traffic accumulates for a p75
to exist**.

Limb three is **blocked by the deploy freeze**, which lifts only when lemur pushes `30c8163` + `f4fa9c5`
— *an act on another machine, outside this vault's control*. Limb four then needs calendar time and
traffic on a pre-launch site.

⇒ **AC2 as written cannot be met by anything P4.4 does.** This is the **sixth** instance in this
campaign of a criterion requiring an act whose prerequisite does not exist on the performing tree —
the class P3.3 wrote down at O0 and then hit anyway.

**Amend to what is actually achievable**: *the instrument is chosen, wired, and shipped; the reading is
named as owed with its unblock condition on its face* — the honest shape P3.3's O3 used for the
publish-gated wording, and P4.1's AC5 used for MET-on-build.

## DEFECT-3 (AC3 × V3) — the sweep has no defined target

*"Whole-site sweep on a schedule"* does not say **what it sweeps**, and both readings fail:

- **Production** — under the freeze, prod serves a build that does not match HEAD. A scheduled sweep
  would grade a stale artifact and its results would drift from the repo with no event marking it.
  Convention 16's exact shape.
- **A CI-built preview** — coherent, but then *"whole-site"* is bounded by what CI builds, and
  *"pre-release"* scheduling needs a release event this repo does not currently emit.

⇒ **The target is an operator/scope ruling, not an implementation detail.** Recommend: sweep the
CI-built artifact (reproducible, matches HEAD, no freeze dependency), and treat production sweeps as a
separate concern belonging with convention 16's un-built monitor.

## DEFECT-4 (AC4 × V2) — the distinguishing claim is tested by nothing

AC4's substance is not *"budgets exist"* — it is *"**read from profiles, never transcribed**"* (KW-14).
V2, a deliberate budget breach, tests that a budget **fails when exceeded**. **A transcribed budget
breaches identically.** The one property AC4 is about is invisible to the only limb aimed at it.

⚠ **And AC4's method is currently impossible.** F-e, re-verified at the object this session:
`find . -name lighthouse_profiles.json` → **0 hits vault-wide**. There is nothing to read from. The
mirror is ⊳ D-E, which requires **Vitruvius** — a peer vault, memo-gated, convention 10.

⇒ This is **P4.2's AC3 recurring exactly**: a criterion whose verb (*"regenerated"* there, *"read from
profiles"* here) names a mechanism that does not exist. AC4 needs either the mirror landed first, or an
amendment that makes the transcription-with-named-source explicit and adds a limb that actually checks
provenance (e.g. the budget file carries the profile's hash and a gate compares it).

## GAP-1 (AC0 × all V) — the new criterion is verified by nothing

The four V-limbs predate AC0 and none of them touches it. Left as is, AC0 could be ticked with no guard
built. **This is P4.1's structural gap inverted** — there, an objective was covered by no criterion;
here, a criterion is covered by no verification.

⇒ **Add V5**: the 7-case red-test matrix in `f_u_alias_guard_design.md`, **including its two passing
controls** — a refusal instrument that refuses everything is as useless as one that refuses nothing.

---

## What this pass concludes

**Of five criteria: one is unreachable (AC2), one has an impossible method (AC4), one is
under-specified in a way that changes what gets built (AC3), one is verified by an instrument that
cannot see it (AC1), and the newest is verified by nothing (AC0). Zero of five are executable as
written.**

That is not an argument against the mission — every defect above is cheap to fix **now** and expensive
to discover at O2. It is the argument for running this pass before the budget, which is what P4.1's
retrospective ruled and what P4.2 then demonstrated.

⇒ **All five go to the operator in the amendment. No build starts against un-ratified criteria.**
