---
type: artifact
artifact_type: ac_amendment_proposal
campaign_id: campaign_haussmann
mission_id: mission_haussmann_p4_4_ci_hardening
status: proposed          # ⛩ awaiting operator signature — NOT applied to the mission frontmatter
created: 2026-08-24
updated: 2026-08-24
last_edited_by: agent_rosetta
tags: [haussmann, p4_4, acceptance_criteria, amendment, convention_13, ci, deploy_lease]
---

# P4.4 acceptance-criteria amendment — proposed

> ⛩ **§7.7 — agents author, operators ratify.** This is the draft; it is **not applied**.
> **No build has started.** Supporting evidence, all produced before this proposal:
> [[register_reread_20260824]] · [[f_u_alias_guard_design]] · [[convention_13_pass]].

## Why this halt happens now rather than at O2

P4.1's SO#11 retrospective ruled the remedy for its ≈2.3× overrun explicitly: **not** *"estimate
higher"* but *"**convention 13 runs BEFORE a DP ratifies a budget**."* P4.2 then did exactly that and
found three of five criteria wrong at their premises. This is the third mission running that rule, and
it is the first time it has run **before the mission was claimed** rather than after.

Two independent passes were run first, and both changed what should be built:

- **The register re-read** — the mission's own ⚠ instruction. **3 of 19 rows are already dead**
  (`F-b`, `F-h`, `F-q`) and **4 more understate their own defect**. Scoping from the register as
  written would have funded three fixes for defects that no longer exist.
- **The convention-13 pass — 30/30 pairs, coverage recorded.** **Zero of five criteria are executable
  as written.**

---

## Part 1 — the criteria

### AC0 — **ADD** (new)

There is no criterion covering **F-u**, the deploy freeze's release condition, even though it is the one
row gating two missions of built-but-unshipped work (P4.1 and P4.2). ⛩ Operator ruled it a first-class
objective, 2026-08-24.

> **Proposed:** *"`deploy_adna.sh prod` refuses to publish any tree that does not contain the commit
> currently serving `adna.network`. The alias is made self-describing via
> `/.well-known/adna-build.json`. The refusal is red-proven against the 7-case matrix (including its
> two passing controls), and the bootstrap exception is a single dated operator-signed act, never a
> standing 'no stamp ⇒ allow' branch."*

⭐ **The design pass corrected F-u's own premise, and the correction changes the instrument.** F-u asks
for a **single-writer lease**. Replaying F-s with a perfect lease held throughout: lemur deploys and
releases; this node deploys `922519c` and releases; **v0.4.3 and the Arch repo are un-published anyway.**
**The two deploys never raced — they were sequential and still destructive.** A mutex reasons about
*time*; the defect is about *content*. ⇒ **an ancestry guard, not a lease** — and it would have caught
F-s in **both** directions, including the restore that fired the hazard backwards under an operator GO
while following every rule then in force.

### AC1 — **AMEND** (one clause)

> **Was:** *"…red-test with a deliberate visual diff"* (via `verification_method`)

**Defect (convention-13 DEFECT-1).** AC1's entire mechanism is **container-generated baselines** — the
fix for the dev-Mac-vs-CI noise that got `idea_visual_regression_gate` deferred. The red-test's location
is unstated. Run on this Mac against container baselines, **every screenshot diffs** on font
rasterisation, and a true positive is indistinguishable from the exact noise the container exists to
eliminate.

> **Proposed:** add — *"…the red-test runs **in the same container that generated the baselines**;
> a diff produced on a developer machine is not admissible evidence for this criterion."*

✅ **Favourable finding, and it should lower the budget rather than raise it:**
`.github/workflows/gates.yml` **already runs in `mcr.microsoft.com/playwright:v1.59.1-noble`**,
version-matched to `@playwright/test` 1.59.1. The container lane AC1 needs **exists today**. P4.4b adds
a snapshot project and a baseline path, **not a CI substrate**.

### AC2 — **REPLACE**

> **Was:** *"Field-p75 instrument decided + live … D12's field gate becomes measurable"*, tested by
> *"field data flowing"*

**Defect (DEFECT-2): unreachable by anything P4.4 does.** V4 needs the instrumented build **in
production** — blocked by the deploy freeze, which lifts only when **lemur pushes `30c8163` + `f4fa9c5`,
an act on another machine** — and then needs calendar time and real traffic on a pre-launch site for a
p75 to exist at all. ⚠ **Sixth instance in this campaign of a criterion requiring an act whose
prerequisite does not exist on the performing tree.**

> **Proposed:** *"The field-p75 instrument is **chosen, wired into the app, and shipped in the tree**,
> with the operator's dashboard action and the first reading **named as owed on the mission's face**
> together with their unblock condition (freeze release + traffic accumulation). AC2 is met
> **on-build**; the reading is **not** claimed."*

The honest shape this campaign already uses twice: P3.3's publish-gated O3 wording, and P4.1's AC5
recorded MET-on-build with deployment **named** as owed.

### AC3 — **AMEND** (name the target)

> **Was:** *"Unlighthouse whole-site sweep on a schedule (weekly/pre-release), budget-failing"*

**Defect (DEFECT-3): the sweep has no defined target, and both readings fail.** Against **production**,
under the freeze, it grades a build that does not match HEAD — convention 16's shape, on a schedule.
Against a **CI preview**, *"whole-site"* is bounded by what CI builds and *"pre-release"* needs a release
event this repo does not emit.

> **Proposed:** *"…sweeps the **CI-built artifact** (reproducible, matches HEAD, no freeze dependency),
> on a weekly schedule, failing loudly into CI. Production sweeps are **explicitly out of scope** and
> belong with convention 16's deliberately-unbuilt monitor."*

⚠ Also note AC1×AC3 contention: both drive a browser over the whole site and **must not co-run**
(convention 6's Lighthouse/preview-server rule).

### AC4 — **REPLACE**

> **Was:** *"CWV budgets adopt the WebForge class-keyed + ratchet discipline (**read from profiles,
> never transcribed**)"*, tested by *"a deliberate budget breach"*

**Two defects.**

**(a) The distinguishing claim is tested by nothing (DEFECT-4).** AC4's substance is *read, not
transcribed*. A breach test proves a budget **fails when exceeded** — and **a transcribed budget
breaches identically**. The one property AC4 is about is invisible to the only limb aimed at it.

**(b) The method is currently impossible.** `find . -name lighthouse_profiles.json` → **0 hits
vault-wide**, re-verified at the object 2026-08-24 (F-e). There is nothing to read from. The mirror is
⊳ D-E and requires **Vitruvius** — a peer vault, memo-gated (convention 10).

⭐ **This is P4.2's AC3 recurring exactly**: a criterion whose verb names a mechanism that does not
exist (*"regenerated"* of a page with no generator, then; *"read from profiles"* now).

> **Proposed:** *"CWV budgets adopt the WebForge class-keyed + ratchet discipline. **Provenance is
> tested, not asserted**: the budget file records the source profile's hash and a gate fails when the two
> disagree. **If ⊳ D-E's mirror has not landed when this criterion is executed, the budget is transcribed
> **and names the source it was transcribed from and the date** — per convention 4's own interim
> clause — and that state is reported as a gap, never as adoption."*

### V5 — **ADD** (verification limb)

**GAP-1: none of the four existing V-limbs touches AC0**, so AC0 could be ticked with no guard built.
**P4.1's structural gap inverted** — there an objective had no criterion; here a criterion has no
verification.

> **Proposed:** *"**V5** — the 7-case red-test matrix in `f_u_alias_guard_design.md`, **including its
> two passing controls**. A refusal instrument that refuses everything is as useless as one that refuses
> nothing."*

---

## Part 2 — the P4.4a / P4.4b split

⛩ Operator ruled the split 2026-08-24. Follows the **P4.5a/P4.5b precedent** — one mission, two
increments — so **`mission_count` holds at 27** and convention 11's ruled order is unchanged.

| | **P4.4a** — *deploy safety + the debt* | **P4.4b** — *the three new systems* |
|---|---|---|
| **Criteria** | **AC0** (+V5) | AC1 · AC2 · AC3 · AC4 |
| **Register** | 16 live rows discharged or re-routed | — |
| **Gate classes** | zero-console-error · off-site CTA-target **(regression guard — P3.5 closed R-122/R-123, so it no longer discovers)** · hub-substance floor (F19) | — |
| **Derived-count gates** | F-c · F-m · F-n | — |
| **Gate fixes** | F-a · F-i · F-j · F-p | — |
| **Substrate** | exists — extends `deploy_adna.sh` + the 35 live gate specs | Playwright container **exists**; Unlighthouse + Speed Insights are **at zero** |
| **External dependency** | none | ⛩ operator dashboard action · freeze release (**lemur**) · ⊳ D-E (**Vitruvius**) |

**Why this line and not another:** P4.4a is executable **today, on this tree, with no external
dependency**. Every P4.4b criterion waits on someone who is not in this session — the operator's
dashboard, lemur's push, or Vitruvius's mirror. Splitting on *reachability* rather than on topic means
P4.4a cannot be blocked, and P4.4b's blockers are visible on its face instead of being discovered at
execution.

⚠ **F-o is time-sensitive and belongs in P4.4a's first objective.** Its `mcp` hit count went **5 → 11
in three days** — the row predicts a future `grep -c` will misread the item as *moved*, and the drift
is accelerating.

---

## Part 3 — the budget, re-raised (ADR-016 / SO#11)

The ratified `~220–330 kT / 1–2 sessions` **predates F-i through F-u** and the mission says so on its
own face. It also predates the three rescoped-in gate classes and AC0.

| | Proposed estimate | Sessions | `executor_tier` |
|---|---|---|---|
| **P4.4a** | **~280–420 kT** | 2–3 | **opus** |
| **P4.4b** | **~250–400 kT** | 2 | **sonnet** |
| **Total** | **~530–820 kT** | 4–5 | — |

**Sanity check, stated rather than hidden:** that is **≈2.4×** the ratified figure — almost exactly
P4.1's measured overrun (≈2.36×). The agreement is the argument that this estimate is honest rather than
padded: the same class of mission, scoped the same way, cost the same multiple.

⚠ **`executor_tier` is proposed per-increment because the single declared tier has not been honoured.**
P4.1's AAR: *"unremarked for four sessions: `executor_tier: fable` while every session ran opus."* P4.4
currently declares `sonnet`; AC0's design and the register adjudication are judgment-heavy and will run
`opus` whatever the field says. **A declared tier nobody honours is worse than none** — so it is split
to match what will actually happen.

---

## Part 4 — three rulings carried in, needing your call

1. **Lock O1's 12px rendered-typeset floor is genuinely UNMET** (inherited from P4.2). `gate-39` ships a
   dated baseline that **ratchets**, and O1 stays `gap` deliberately — *a non-regression fence is not
   the rule*. `hero-graph-svg` paints **27/27** labels below floor at every width (3.5px at 320).
   **The remedy is design work on a campaign-protected surface**, not a gate. → **P4.4a, or defer to P4.3?**
2. **Does `component_token_census.mjs` become a gate** or stay advisory? Its finding was that the only
   token family *with* a gate was the only one that had not drifted. → **recommend: gate it in P4.4a.**
3. **⊳ D-E / F-e** — mirror `lighthouse_profiles.json` into `how/federation/webforge/`, **or** amend
   convention 4. Convention 4 says amend **only if Vitruvius declines**. A Vitruvius memo is already
   staged and undelivered. → **recommend: deliver the ask; do not amend yet.**

---

## What I will do on your signature

Apply the amended criteria to the mission frontmatter, split the mission into a/b increments in-file,
strike `F-b`/`F-h`/`F-q` with their evidence, re-word `F-u` to *ancestry guard* (**struck, not
deleted** — the lease reasoning stays legible), and open **P4.4a at AC0**.

**If you decline the split**, the fallback is one mission at `~530–820 kT` across 4–5 sessions with a
mid-mission external dependency; the criteria amendments stand either way, because five of five are
un-executable as written.
