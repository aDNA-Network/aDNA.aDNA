---
plan_id: mission_haussmann_p4_4_ci_hardening
type: plan
title: "P4.4 — CI hardening: visual regression, live-header watch, field p75, the whole-site sweep"
campaign: campaign_haussmann
phase: P4
decade: 2
owner: stanley
status: in_progress   # ⚠ READ THE QUALIFIER: **P4.4a is CLOSED (2026-08-24, AAR filed per SO#5 — A0 · A0v · ruling 2 · A1 · A2 · A3 all ✅; criteria AC0 ✅ + V5 ✅)**, but the MISSION stays `in_progress` because **P4.4b has not started** and this is one file holding both halves (the P4.5a/P4.5b in-file precedent). A `completed` here would claim P4.4b. ⛔⛔ P4.4a is **BUILT, NOT DEPLOYED** — third consecutive mission behind the freeze. ⏭ A3 closed the last P4.4a objective: the Vitruvius ask is **AUTHORED + STAGED, not delivered**, and ⭐ **three of F-e's four claims measured FALSE** — the file exists, our pin is byte-current, nothing of ours reads it, and the mirror is contradicted by our own wrapper and by WebForge's own governance; ruling 3 honoured (ask ships, convention 4's RULE untouched, its evidence sentence corrected). Residual: our bars are **un-sourced**, which AC4 does not close by hashing a mirror. ⛩⛩ **P4.4b IS OPEN AT ITS PRE-BUILD GATE 2026-08-26 — nothing built, criteria NOT edited, budget NOT re-ratified.** Convention 13's pass ran **COMPLETE at 26/26 with coverage recorded**, both directions → `artifacts/p4_4/ac_amendment_proposal_p4_4b.md`, **`proposed`**: **20 clean · 6 defective**, plus 6 non-pair findings. ~~**P4.4b's next actor is outside the session** (Vitruvius's answer · lemur's push · the operator's dashboard).~~ ⭐⭐ **THAT SENTENCE IS FALSE FOR THREE OF THE FOUR CRITERIA, AND IT WAS CONTRADICTED BY AN AMENDMENT WRITTEN THE SAME DAY** (struck 2026-08-26, SO-6 — the reasoning is the reusable part). Measured `[D]`: **lemur's push** is discharged (freeze lifted 08-25; prod serves both writers' work). **The operator's dashboard never bound the build** — AC2 was *replaced in this very sitting* to be met **ON-BUILD** with the reading named as owed, so the blocker line and the criterion it describes disagree, 21 lines apart. **Only AC4 has a live external dependency**, and even it carries an interim clause, so the absence of a reply is a **branch, not a block**. ⇒ **the line that says P4.4b cannot start is contradicted by the criteria it summarises** — the campaign's *index-vs-artifact* class, inside the mission file's own status field. Prior state: P4.4a **OPEN AT A3**; A0 · A0v · ruling 2 · A1 · A2 all ✅. A2 shipped gate-42 (console, 224 routes × 2 themes) · gate-43 (off-site CTA, targets DERIVED from the build) · gate-44 (hub substance, reusing hub_depth_measure.mjs); all three are REGRESSION GUARDS (F20 tested false; R-122/R-123 and F19 already closed), so all three went green on their first run and each is red-proven 7/7 · 6/6 · 7/7. Suite 587/587 derived. ⛩ Budget re-raised to ~600–750 kT at A2's open (SO#11). A3 = the Vitruvius ask + AAR, an OUTWARD ACT needing its own GO. ⛔⛔ Freeze holds; A2 deployed nothing. Prior: ⛩ AC AMENDMENT OPERATOR-SIGNED 2026-08-24 (artifacts/p4_4/ac_amendment_proposal.md, `accepted`) — the pre-build gate found ZERO of five criteria executable as written; six criteria changes applied, mission SPLIT into P4.4a/P4.4b in-file (P4.5a/b precedent; mission_count HOLDS AT 27). P4.4b NOT started — ~~every one of its criteria waits on an actor outside the session~~ **FALSE for AC1/AC2/AC3, struck 2026-08-26; see the pre-build-gate entry above**. Prior status was `queued` under ⛩ DP6 2026-08-19; the RESCOPE-UP recorded there (three gate classes + ⊳ D-E) survives into P4.4a unchanged.
mission_class: build
increments: [P4.4a, P4.4b]        # in-file, NOT separate mission files — mission_count holds at 27
executor_tier: opus               # P4.4a. ⚠ SPLIT PER INCREMENT — P4.4b is `sonnet` (see increment table). P4.1's AAR: `executor_tier: fable` sat unremarked for four sessions while every session ran opus. A declared tier nobody honours is worse than none.
executor_tier_p4_4a: opus         # AC0 design + register adjudication are judgment-heavy
executor_tier_p4_4b: sonnet       # mechanical: snapshot project, sweep config, budget wiring
token_budget_estimated: "⛩ RE-RATIFIED A THIRD TIME 2026-08-26 (at P4.4b's pre-build gate, ruling §4(c)) → P4.4b ~~~250–400 kT / 2 sessions~~ → **~280–440 kT / 3 sessions**; mission total ~880–1190 kT across 6–7. Bands: B0 ~150–220 · B1 ~40–70 · B2a ~60–100 · B3 ~30–50. **B2b (~50–80 kT) LEAVES THE BAND ENTIRELY under (c)** — it is held, not costed. (The ~330–520 figure in the proposal's §7 applies only under option (b), which was NOT taken.) The raise is ≈1.3× and modest on purpose: NOTHING HERE ADDS A FEATURE — it is three red-test mutations, the mask discipline, the theme control, and the B2 split. Contrast P4.4a's 2.4× re-raise, which was real new work. ⛔ Named so it is not discovered as an overrun: if AC1's baselines need regenerating after a mask or theme correction, that is a RE-CAPTURE OF ALL 24 IMAGES, and it is inside B0's band ONCE, not repeatedly. The pass that produced this raise found the reason for it: P4.4b's prior band was ratified 08-24, and since then the freeze lifted, four missions closed, the suite moved 587 → 633, and AC4's gating memo was delivered — a budget costed against conditions that no longer hold, FOR THE SEVENTH TIME. SUPERSEDES: ⛩ RE-RAISED A SECOND TIME AND RATIFIED 2026-08-24 (at A2's open) → ~850–1150 kT across 5–6 sessions (P4.4a ~600–750 kT / 3–4 · P4.4b ~250–400 kT / 2). The P4.4a half is the part that moved: A0+A0v+A1 consumed ~310–380 kT of a ~280–420 kT band before A2 and A3 had started, so the band was already spent. SO#11/ADR-016 requires the re-raise be taken as an operator act rather than absorbed silently — that is the whole point of declaring a budget. SUPERSEDES: ~530–820 kT (P4.4a ~280–420 kT), itself a ratified re-raise from ~220–330 kT."
token_budget_actual: "✅ **P4.4a CLOSED at ≈555–635 kT against the ratified ~600–750 kT band — INSIDE the band, at or just under its floor; SO#11 triggers no retrospective** (it fires at >2×). Derivation: ≈310–380 kT through A0+A0v+A1 · A2 ≈165 kT (allocation ~180–250) · A3 ≈80–90 kT (allocation ~80–120, and it widened mid-objective — the finding turned a file-copy ask into a premise-withdrawal memo plus three operator-selected close items). ⭐ The band held across two objectives *after* the ⛩ re-raise, which is the argument that taking the re-raise as an operator act rather than absorbing it silently was the right call. `executor_tier: opus` declared per increment and **honoured** (P4.1 ran four sessions on opus under a `fable` declaration). **P4.4b's ~250–400 kT is unspent — it has not started.**"
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["toolkit A2 (container baselines solve the old deferral; Lost Pixel archived — avoid) / A3 (Unlighthouse) / A8 (Speed Insights as p75; CrUX null; keyless PSI dead)", "idea_visual_regression_gate (deferred for exactly the noise this solves)", "N12 (no field instrument)", "P0.2 header check (extend)", "webforge P3 (class-keyed bars, ratchet law)"]
vitruvius_dimensions: [D12, D5]
decade_theme: craft
webforge_patterns: [P3]
patterns_to_author: []
depends_on: [mission_haussmann_p0_2_deploy_hardening, mission_haussmann_p2_6_midscore]
blocks: []
acceptance_criteria:            # ⛩ AMENDED + SIGNED 2026-08-24. Zero of the five originals were executable as written; the superseded wording is preserved in `## Acceptance criteria — amended` below, struck not deleted.
  - "AC0 [P4.4a · NEW] — `deploy_adna.sh prod` REFUSES to publish any tree that does not contain the commit currently serving adna.network. The alias is made self-describing via /.well-known/adna-build.json. The refusal is red-proven against the 7-case matrix in artifacts/p4_4/f_u_alias_guard_design.md INCLUDING its two passing controls. The bootstrap exception is a single dated operator-signed act, NEVER a standing 'no stamp ⇒ allow' branch."
  - "AC1 [P4.4b · AMENDED ×2] — Visual-regression gate live: Playwright toHaveScreenshot on ~12 key templates × 2 themes, baselines GENERATED IN THE CI CONTAINER; reg-actions-style diff report on PRs; the old deferral formally closed. AMENDMENT (08-24): the red-test runs IN THE SAME CONTAINER that generated the baselines — a diff produced on a developer machine is not admissible evidence for this criterion. ⛩ AMENDMENT (08-26, SIGNED — FINDINGS 4/10/11): the mask set is ENUMERATED WITH A REASON PER MASK ON THE GATE'S FACE and the masked-area arithmetic is PINNED (the gate-48 / G48d exclusion discipline — 'the exclusions are part of the claim and are asserted, not assumed'), because V1 cannot see OVER-MASKING: a mask that swallows a real region leaves it green forever, and masks only ever grow. AND baseline capture carries a THEME CONTROL — each baseline's theme is asserted to match its filename BEFORE commit. A baseline is the one artifact in this suite where an instrument defect becomes PERMANENT (every other gate re-derives each run), and this campaign has produced that defect twice (P4.1's dark screenshot under a light filename; P4.2's 71 phantom nav failures from class-toggling) while P4.3 found addInitScript SILENTLY NOT APPLYING — the very API the correct pattern uses can fail open."
  - "AC2 [P4.4b · REPLACED, then AMENDED] — The field-p75 instrument is CHOSEN, WIRED INTO THE APP AND SHIPPED IN THE TREE, with the operator's dashboard action and the first reading NAMED AS OWED on this mission's face together with their unblock condition (~~deploy-freeze release +~~ traffic accumulation — the freeze half is DISCHARGED, lifted 2026-08-25). AC2 is met ON-BUILD; the reading is NOT claimed. (P3.3's publish-gated O3 and P4.1's AC5 are the precedents.) ⛩ AMENDMENT (08-26, SIGNED — FINDING 5): …and the instrument is demonstrated to EMIT at least one collected metric on a page load — SHIPPED IS NOT WIRED. AC2's own verb is 'WIRED INTO THE APP AND SHIPPED' and V4 tested only 'shipped', so an inert instrument sitting in the tree would have ticked it. The campaign has been bitten by exactly this twice: P4.2's font-weight 'migration announced in a comment', and the aria-live residue."
  - "AC3 [P4.4b · AMENDED ×2] — Unlighthouse whole-site sweep on a schedule, budget-failing; fixtures remain the per-route gate. AMENDMENT (08-24): it sweeps the CI-BUILT ARTIFACT (reproducible, matches HEAD, no freeze dependency), weekly, failing loudly into CI. Production sweeps are EXPLICITLY OUT OF SCOPE and belong with convention 16's deliberately-unbuilt monitor. ⚠ AC1×AC3 contention: both drive a browser over the whole site and MUST NOT co-run (convention 6). ⛩ AMENDMENT (08-26, SIGNED — FINDING 6 + its sibling): the co-run prohibition is ENFORCED, NOT STATED — a CI `concurrency:` group, the mechanism gates.yml ALREADY uses at line 32 (`group: gates-${{ github.ref }}`). Both criteria said the lanes 'MUST NOT co-run' and NOTHING enforced it, while the failure mode is FLAKY VISUAL DIFFS, which read as real regressions; this campaign named that class at P4.3's close — 'a deferral recorded only in narrative is a deferral with no gate'. AND 'fails loudly' is tested by nothing: ONE PASSING SWEEP RUN PROVES THE SWEEP EXECUTES, NOT THAT IT FAILS — V3 requires a run that actually goes red."
  - "AC4 [P4.4b · REPLACED, then AMENDED — ⛩ AND IT IS THE ONE CRITERION THAT DOES NOT CLOSE IN THIS INCREMENT] — CWV budgets adopt the WebForge class-keyed + ratchet discipline. PROVENANCE IS TESTED, NOT ASSERTED: the budget file records the source profile's hash and a gate fails when the two disagree. If ~~⊳ D-E's MIRROR has not landed~~ **VITRUVIUS HAS NOT ANSWERED** when this criterion is executed, the budget is transcribed AND NAMES THE SOURCE IT WAS TRANSCRIBED FROM AND THE DATE (convention 4's own interim clause), and that state is reported as a gap, NEVER as adoption. ⛩ AMENDMENT (08-26, SIGNED — RULING 3 / FINDING 2): the interim clause was RE-KEYED because it was keyed to an event that CAN NO LONGER OCCUR — the mirror was WITHDRAWN at A3 as contradicted from both ends (our own wrapper names gates among what is 'consumed by reference, never copied'; WebForge's CLAUDE.md says the bars are class-keyed data, 'read them there and never transcribe them'). The antecedent was therefore not 'not yet' but NEVER, so AC4 sat permanently in its fallback and nothing said so. ⭐ This is the 'criterion amended around a temporary condition' class INVERTED: in its four prior sightings the condition EXPIRED; here it was ABOLISHED BY A LATER AMENDMENT IN THE SAME DOCUMENT, and the criterion was not re-read against it. AN AMENDMENT CAN STRAND A CLAUSE ELSEWHERE IN THE FILE IT IS AMENDING. ⛩ AND THE HALT-VS-PROCEED CONFLICT IS RULED (FINDING 3, §4): the criterion said 'proceed under the interim clause'; AC4's own amendment row said 'do not build B2 before that answer'; both were signed, in the same document, and neither was subordinate on its face — so P4.4b could not be executed as written without choosing between two clauses of its own AC4. ⛩ OPERATOR RULED (c) 2026-08-26: B2 SPLITS (ruling 2) — build B2a now, HOLD B2b until Vitruvius answers. ⇒ AC4 CLOSES ONLY PARTIALLY IN THIS INCREMENT and is recorded ◐ PARTIAL / OWED, never ✅, as a REGISTER ROW rather than a sentence (P4.3's F-v precedent). ⚠ Residue AC4 does NOT close either way (§4's closing note): the gate-19 bars remain UN-SOURCED (F-e), and Perf ≥ 90 is LOOSER than WebForge's content_static 95 — the direction their ratchet_law reserves for an operator gate."
verification_method: "⛩ AMENDED + LABELLED 2026-08-26 (SIGNED). ~~V1–V4 unchanged in kind (red-tests: deliberate visual diff IN-CONTAINER; deliberate budget breach; one scheduled sweep run; field instrument shipped-in-tree).~~ ⭐⭐ THAT SENTENCE IS WHY THIS FIELD IS AMENDED, AND IT IS THE SHARPEST FINDING OF THE PASS (FINDING 1): AC4's provenance test was REPLACED on 08-24, and the limb that failed it was left UNCHANGED — 'V1–V4 unchanged in kind … deliberate budget breach' — so DEFECT-4 ('the distinguishing claim was tested by nothing: a breach test proves a budget fails when exceeded, and A TRANSCRIBED BUDGET BREACHES IDENTICALLY') SURVIVED INTACT INSIDE THE VERIFICATION METHOD WRITTEN TO CLOSE IT. ⭐ The asymmetry is visible in one sentence: AC1's amendment WAS mirrored into V1 — 'IN-CONTAINER' is right there in caps — and AC4's was not, same author, same field, same sitting. ⇒ A CRITERION AND ITS LIMB ARE TWO OBJECTS, AND AMENDING ONE IS NOT AMENDING THE OTHER. ⭐ AND THE STRUCTURAL FINDING IS UPSTREAM OF THAT (FINDING 7): THE LIMBS WERE UNLABELLED. P5.1's and P4.5b's carry [asserts AC-n]; P4.4b's did not, and they were listed in an order that does NOT track AC1–AC4 (the second limb belongs to AC4, the fourth to AC2). A PASS CANNOT ASK 'IS THIS CRITERION TESTED BY ANYTHING' AGAINST A FIELD THAT NEVER SAYS WHAT ANYTHING TESTS — all three mismatches became visible only once the mapping was written out. An unlabelled limb is how a partial pass reads as complete (convention 13's own amendment, one level down). Remedy: free, and applied here. ⇒ V1 [asserts AC1] — a deliberate visual diff goes red IN-CONTAINER, AND widening a mask past its pinned budget goes red (the over-masking mutation, FINDING 4). V2 [asserts AC3, AC4] — a deliberate budget breach goes red, AND A BAR EDITED BY HAND GOES RED (the PROVENANCE mutation — DEFECT-4's actual test, and the assertion is 'this bar was read from classes.<c> at pin <sha>, whose content hashes to <md5>'). V3 [asserts AC3] — one scheduled sweep run THAT FAILS (unchanged in substance, labelled; FINDING 6 — a passing run proves execution, not failure). V4 [asserts AC2] — field instrument shipped in tree AND EMITS at least one collected metric on a page load (FINDING 5 — V4 could not tell a WIRED instrument from an INERT one). ⛩ V5 ADDED 2026-08-24 [asserts AC0, P4.4a — CLOSED] — the 7-case red-test matrix in artifacts/p4_4/f_u_alias_guard_design.md INCLUDING ITS TWO PASSING CONTROLS. GAP-1 was that none of the four existing V-limbs touched AC0, so AC0 could have been ticked with no guard built — P4.1's structural gap inverted (there an objective had no criterion; here a criterion had no verification). A refusal instrument that refuses everything is as useless as one that refuses nothing."
human_gate: true
tags: [plan, haussmann, p4, ci, visual_regression, cwv]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The classes of defect this campaign found by hand become classes a machine finds forever.

## ⛩ READ FIRST — this mission was amended and split before it built anything (2026-08-24)

P4.4 was opened at a **pre-build gate**, per P4.1's SO#11 ruling that *convention 13 runs BEFORE a DP
ratifies a budget*. The gate produced four artifacts and halted for a signature. **The signature
landed 2026-08-24** ([[ac_amendment_proposal]], `accepted`).

**What the gate found, and why the mission you are reading is not the mission that was queued:**

- **Zero of five acceptance criteria were executable as written.** Not "could be tightened" — AC2
  required a production deploy under a freeze that lifts on **another machine**; AC4's method reads a
  file with **0 hits vault-wide**. The convention-13 pass ran **30/30 pairs with its coverage recorded**.
- **3 of 19 debt rows were already dead** (`F-b` · `F-h` · `F-q`) and **4 understate their own defect**.
  Scoping from the register as written would have funded three fixes for defects that no longer exist.
- **`F-u` asks for the wrong instrument.** A single-writer lease would **not** have prevented F-s —
  the two deploys never raced; they were sequential and still destructive. A mutex reasons about
  *time*; the defect is about *content*. ⇒ **an ancestry guard**, which would have caught F-s in
  **both** directions, including the restore that fired the hazard backwards under an operator GO.

### The increments — split on REACHABILITY, not on topic

⛩ Operator-ruled 2026-08-24. **In-file, on the P4.5a/P4.5b precedent — not two new mission files —
so `mission_count` holds at 27 and convention 11's ruled order is unchanged.**

| | **P4.4a** — *deploy safety + the debt* | **P4.4b** — *the three new systems* |
|---|---|---|
| **Criteria** | **AC0** (+**V5**) | AC1 · AC2 · AC3 · AC4 |
| **Register** | the 16 live rows discharged or re-routed | — |
| **Gate classes** | zero-console-error · off-site CTA-target *(regression guard — P3.5 closed R-122/R-123, so it no longer discovers)* · hub-substance floor (F19) · **the token census (ruling 2)** | — |
| **Derived-count gates** | F-c · F-m · F-n | — |
| **Gate fixes** | F-a · F-i · F-j · F-p | — |
| **Substrate** | **exists** — extends `deploy_adna.sh` + the 35 live gate specs | Playwright container **exists** (`gates.yml:38`, version-matched); Unlighthouse + Speed Insights **at zero** |
| **External dependency** | **none** | ⛩ operator dashboard action · freeze release (**lemur**) · ⊳ D-E (**Vitruvius**) |
| **`executor_tier`** | `opus` | `sonnet` |
| **Budget** | ~280–420 kT / 2–3 sessions | ~250–400 kT / 2 sessions |
| **Status** | **OPEN at AC0** (2026-08-24) | **not started** |

**Why this line and not another:** P4.4a is executable **today, on this tree, with no external
dependency**. Every P4.4b criterion waits on someone who is not in the session. Splitting on
*reachability* means P4.4a cannot be blocked, and P4.4b's blockers are **visible on its face** instead
of being discovered at execution — which is the sixth-instance failure this campaign keeps paying for.

⚠ **F-o is time-sensitive and belongs in P4.4a's FIRST objective.** Its `mcp` hit count went
**5 → 11 in three days**; the row predicts a future `grep -c` will misread the item as *moved*, and the
drift is accelerating.

### ⛩ The three carried rulings (taken at the same gate)

1. **Lock O1's 12px rendered-typeset floor → DEFERRED TO P4.3.** It is a **legibility judgement**, and
   P4.3 (*"Accessibility beyond automation: manual passes"*) is both the right instrument and the next
   mission in the ruled order — the same routing P4.2 gave its `aria-live` residue.
   ⚠ **O1 therefore stays `gap` through the whole of P4.4.** Recorded here so nobody reads P4.4a's
   green suite as having met a floor that `hero-graph-svg` misses **27/27 at every width**.
2. **`component_token_census.mjs` → BECOMES A GATE in P4.4a**, with a red-test and a **coverage floor**
   (`measured >= N`, never `> 0`). Its own finding is the argument: *the only token family with a gate
   was the only one that had not drifted.*
3. **⊳ D-E / F-e → DELIVER THE VITRUVIUS ASK; DO NOT AMEND CONVENTION 4.** Vitruvius has not declined,
   and convention 4 reserves amendment for that case. ⛩ **Delivery is a separate outward act needing
   its own GO**; the memo states the artifact's path **from Vitruvius's root** (convention 15).

### ⛔⛔ What the amendment does NOT do

**It does not lift the deploy freeze.** Release still requires **lemur pushing `30c8163` + `f4fa9c5`**
and **one** deploy from a tree holding both halves — re-verified absent at this session's open
(`git cat-file -t` fatal on both). **AC0 enforces that reconciliation; it cannot perform it.**
**P4.1 and P4.2 both remain built-not-deployed.**

## Why this mission exists

The S1 mobile defect shipped because nothing looks at pixels; headers drifted because nothing watches production; the review instrument demands field p75 that no current instrument provides `[D N3/N12]`. The vault deferred visual regression over cross-machine noise — container-generated baselines resolve exactly that objection `[toolkit A2]`.

## Objectives

⛩ **Re-numbered at the 2026-08-24 amendment.** The four originals are P4.4b's, unchanged in substance
apart from their criteria; **P4.4a's are new**, and A0 is the reason the split exists.

### P4.4a — deploy safety + the debt (`opus`, ~280–420 kT, OPEN)

| # | Objective | Output | Gate |
|---|---|---|---|
| **A0** | **The ancestry guard (AC0 / F-u).** `inject_build_stamp.mjs` → `/.well-known/adna-build.json`; the refusal in `deploy_adna.sh` after the clean-tree guard, prod only; `--force-rollback` loud + logged; bootstrap as a dated operator-signed single act | injector + guard | — |
| **A0v** | **V5 — red-prove it.** The 7-case matrix **including its two passing controls**; assert match counts so a stale mutation reports as a harness bug, not a pass | `alias_guard_redtest.sh` | — |
| **A1** | **The register.** Discharge or re-route the **16 live rows**, F-o first (its drift is accelerating). Includes the four gate fixes (F-a · F-i · F-j · F-p) and the three derived-count gates (F-c · F-m · F-n) | ✅ **DONE 2026-08-24** — 19 rows: **13 struck**, **6 live and ALL ROUTED** (F-d·F-j → A1b · F-e → A3 · F-k → template release · F-m·F-n fenced by gate-41, fix outstanding). Seven fixed + red-proven; four closed; F-a pulled forward on an ⛩ operator ruling after measurement | — |
| **A2** | **The three rescoped-in gate classes** (zero-console-error · off-site CTA-target · hub-substance floor) **+ the token census as a gate** (ruling 2) | ✅ **DONE 2026-08-24** — `gate-42` (console, 224 routes × 2 themes) · `gate-43` (off-site CTA, 6 governance doors + 1 clone destination, all **derived** from the build) · `gate-44` (hub substance, reusing `hub_depth_measure.mjs`). Census shipped earlier as `gate-40`. **All three went green on their first run** — all three originating defects were already closed — so each is red-proven: **7/7 · 6/6 · 7/7** (14 mutations + 6 controls) | — |
| **A3** | ⛩ **Deliver the Vitruvius ask** (ruling 3) + AAR | ✅ **DONE 2026-08-24** — ask **authored + STAGED**, not delivered (⛩ operator ruled: no delivery this session; all three Vitruvius memos stay staged). ⭐ **The re-read changed the ask**: three of F-e's four claims measured FALSE — the file exists, our pin is byte-current against it, nothing of ours reads it, and the mirror is contradicted by our own wrapper *and* by WebForge's own governance. Memo withdraws our premise, then asks the one question that is genuinely theirs (is `adna_site` a fleet surface, or do we derive against a named class). Ruling 3 honoured: ask ships, convention 4's **rule** untouched, only its evidence sentence corrected | ⛩ operator (outward act) |

### P4.4b — the three new systems (~~`sonnet`, ~250–400 kT, NOT STARTED~~ ⛩ **SIGNED 2026-08-26; ~280–440 kT / 3 sessions; B0 IN PROGRESS**)

> ⚠ **`executor_tier` — the declaration moves BEFORE the session, not after.** P4.4b is declared
> `sonnet`, but **B0's mask-and-theme judgement is not mechanical work**; the B0 session declares
> **`opus`** at its open. The proposal's §7 named this case in advance and it held. *(P4.1 ran four
> sessions on opus under a `fable` declaration — a declared tier nobody honours is worse than none.)*

| # | Objective | Output | Gate |
|---|---|---|---|
| B0 | Visual-regression lane (containerized baselines; **masks enumerated with a reason each + pinned arithmetic**; 12 templates × 2 themes, **theme-controlled**); red-test **in the baseline-generating container** (AC1's amendments) | gate + red-test | — |
| B1 | Field instrument **shipped in the tree AND EMITTING** (AC2 as replaced + amended); the dashboard action and the first reading **named as owed**, with their unblock condition — **not claimed** | wired instrument + owed-list | ⛩ operator (enable) |
| **B2a** | Unlighthouse scheduled sweep over the **CI-built artifact**; weekly, **failing loudly** into CI; **co-run prohibition enforced** by `gates.yml`'s `concurrency:` group, not stated | sweep + enforced lane | **— none.** ⭐ *This is the whole point of the split: B2a never had an external dependency and was blocked only by being bundled with B2b.* |
| **B2b** | Budget config; **provenance tested by hash**, not asserted (AC4 as replaced). ⚠ **Hash the bars' SOURCE, never a mirrored file's presence** — see AC4's amended row; the mirror is withdrawn (F-e) | budgets + hash gate | ⛔ **HELD — ⛩ ruled (c) 2026-08-26.** ⊳ D-E (Vitruvius): **DELIVERED 2026-08-27** (`44c4d79`, P4.5b O4; `ack_required: true`), **no reply yet** `[D]` — surface named: `who/coordination/` here **and** `WebForge.aDNA/who/coordination/`. B2b's *shape* depends on their answer (fleet surface = scope A · derived-against-a-named-class = scope B). **If a reply lands mid-increment, B2b re-enters at ITS OWN ⛩ gate — it does not silently absorb into B2a.** |
| B3 | Close `idea_visual_regression_gate` (resolved) + runbook updates + AAR | records + AAR | — |

⛩ **B2 SPLIT INTO B2a / B2b, SIGNED 2026-08-26 (ruling 2, FINDING 8).** ⭐⭐ **B2 fused two
reachability classes**: the *sweep* runs over the CI-built artifact with **no** external dependency;
the *budget provenance* is the half that waits — and B2 bundled them under a single ⊳ D-E gate, **so
the unblocked half was blocked by a question it does not depend on.** P4.4 was split into P4.4a/P4.4b
on exactly this principle, stated in this file: ***"the split line is REACHABILITY, not topic."***
**B2 fused on topic.** The remedy is this mission's own split, one level down.

⚠ **B0 × B2a must not co-run** — both drive a browser over the whole site (convention 6) — and as of
the 08-26 amendment **that is ENFORCED, not stated**: `gates.yml:32` already carries
`concurrency: group: gates-${{ github.ref }}`. The failure mode it prevents is *flaky visual diffs,
which read as real regressions*.

## Acceptance criteria — amended

The superseded wording, **struck rather than deleted**, so anyone citing the old text can see what
replaced it and why. Full reasoning + the 30/30 coverage table: [[ac_amendment_proposal]] ·
[[convention_13_pass]].

| AC | Was | Now | Defect that forced it |
|---|---|---|---|
| **AC0** | *(did not exist)* | the ancestry guard, red-proven 7/7 | **No criterion covered F-u** — the one row gating two missions of unshipped work |
| AC1 | ~~"…red-test with a deliberate visual diff"~~ | + *"…runs **in the same container that generated the baselines**"* | DEFECT-1: the red-test's location was unstated. On this Mac against container baselines **every screenshot diffs** on font rasterisation, and a true positive is indistinguishable from the exact noise the container exists to eliminate. ✅ **Favourable**: `gates.yml:38` already runs `mcr.microsoft.com/playwright:v1.59.1-noble` — P4.4b adds a snapshot project, **not a CI substrate** |
| AC2 | ~~"Field-p75 instrument decided + live … field data flowing"~~ | met **on-build**; reading **named as owed** | DEFECT-2: **unreachable by anything P4.4 does.** Needs the instrumented build in production (freeze, lifting on another machine) **and** calendar time + real traffic on a pre-launch site. ⚠ **Sixth instance** in this campaign of a criterion requiring an act whose prerequisite does not exist on the performing tree |
| AC3 | ~~"whole-site sweep on a schedule (weekly/pre-release)"~~ | sweeps the **CI-built artifact**; prod sweeps out of scope | DEFECT-3: **the sweep had no defined target, and both readings fail.** Against production under the freeze it grades a build that does not match HEAD — convention 16's shape, on a schedule. Against a CI preview, *"whole-site"* is bounded by what CI builds and *"pre-release"* needs a release event this repo does not emit |
| AC4 | ~~"read from profiles, never transcribed"~~, tested by a budget breach | **provenance tested by hash**; interim transcription **names its source + date** and is reported as a gap | DEFECT-4: **the distinguishing claim was tested by nothing** — a breach test proves a budget fails when exceeded, and **a transcribed budget breaches identically**. ~~Plus the method is impossible: `lighthouse_profiles.json` → **0 hits vault-wide**, re-verified 2026-08-24. ⭐ **P4.2's AC3 recurring exactly** — a criterion whose verb names a mechanism that does not exist~~ ⛔⛔ **AMENDED AT A3, 2026-08-24 — THE METHOD IS POSSIBLE, AND THE HASH TEST AS SCOPED WOULD PROVE NOTHING.** The file exists and our pin is byte-current against it (see F-e, corrected). **But a hash over a MIRRORED copy passes while our bars still come from the CWV band** — reproducing *"the distinguishing claim was tested by nothing"* one layer in, which is the very defect this criterion was amended to close. ⇒ **B2 must hash the bars' SOURCE, not a file's presence**: the assertion is *this bar was read from `classes.<c>` at pin `<sha>`, whose content hashes to `<md5>`*, and it must go **red when a bar is edited by hand** — red-prove that mutation specifically. ⚠ **Un-sourced bars are the live residue** (F-e). The Vitruvius answer picks which shape B2 builds — fleet surface (scope A) or derived-against-a-named-class (scope B) — so **do not build B2 before that answer**, or the provenance chain gets hashed to a class we were never assigned. |
| **V5** | *(did not exist)* | the 7-case matrix incl. both controls | GAP-1: **no V-limb touched AC0**, so AC0 could be ticked with no guard built |

## Inherited follow-ups — routed here by earlier missions, and owed

> **Read this section before scoping O0–O3.** These were routed to P4.4 by the P4.5a, P3.5, P3.1
> **and P3.2** AARs — plus **F-k, the first row here that is an ⛩ operator ruling rather than a
> mission's leftover** — and most of them existed **only inside those AARs** until 2026-08-20. A
> follow-up recorded in the artifact that produced it and nowhere else is a follow-up nobody will act
> on — the P4.5a AAR named this exact failure (*"the split was recorded in three places and
> implemented in none"*), and it recurred. Each row below cites its source so the reasoning can be
> re-read rather than re-derived.
>
> ⚠ **This section is growing faster than the mission that has to discharge it, and that is now worth
> saying out loud.** It has taken rows from every Decade-2 mission so far. Derive the count before
> quoting it — `grep -cE '^\| \*\*F-[a-z]\*\*'` — never type it; and when P4.4 is finally scoped,
> **re-read every row against the live tree first**, because three of these have already shrunk or
> changed purpose on a re-probe (R-122 narrowed, the CTA gate flipped from discovery to regression
> guard, F-b became allowlist evidence rather than a bug). The budget above predates F-i, F-j, F-k
> and F-l and has **not** been re-raised for them; that is a live under-estimate, flagged here rather
> than silently absorbed (ADR-016/SO#11). ✅ **Re-raised and ratified 2026-08-24** — see the frontmatter.

> ## ✅ RE-READ AT THE OBJECT, 2026-08-24 — read this before scoping anything below
>
> The ⚠ instruction above (*"re-read every row against the live tree first"*) was **run**, in full, as
> P4.4's pre-build gate. Record: [[register_reread_20260824]]. **It changed the scope.**
>
> | | Count | Rows |
> |---|---|---|
> | **Total rows** | **19** | a–u, less withdrawn `F-s`/`F-t` |
> | ✅ **DISCHARGED — do not build** | **3** | `F-b` · `F-h` · `F-q` (struck below, evidence in each note) |
> | ⚠ **WORSENED since filing** | **4** | `F-k` (`.adna` has **no** hook *and* this vault runs the **v1 no-op**) · `F-m` (12 → **13** ADRs behind) · `F-n` (45 → **49** days) · `F-o` (**5 → 11** hits in three days) |
> | **LIVE — P4.4a's scope** | **16** | the rest, one of which is documentation-only |
>
> **All four figures derived, never typed** (KW-14):
> `grep -cE '^\| (~~)?\*\*F-[a-z]\*\*'` = 19 · `grep -cE '^\| ~~\*\*F-[a-z]\*\*~~'` = 3 ·
> `grep -cE '^\| \*\*F-[a-z]\*\*'` = 16.
>
> ⛩ **AMENDMENT 2026-08-25 (P4.3 close) — the table above is a DATED SNAPSHOT of the 08-24 re-read and
> is left exactly as it read that day** (SO#6: struck or annotated, never rewritten — a count that
> silently updates cannot be cited). The register has since moved twice: A1 discharged ten more rows,
> and **P4.3's close adds `F-v`** (the unrun human screen-reader sitting, ⛩ deferred to a follow-up
> campaign). **Re-derived at this commit, not carried:** total **20** · struck **13** · live **7**.
> ⚠ The derivation is the same three greps, re-run — this register is the campaign's worked example of
> *an instrument whose output changes its own input*, and it has been wrong twice by being read rather
> than re-run.
>
> ⭐ **THE FINDING, AND IT IS THIS CAMPAIGN'S OWN LESSON RECURRING: three of nineteen rows were
> already fixed and nothing anywhere said so.** `.gitleaks.toml` landed at **P3.4**, closing `F-b` and
> `F-q` two days before this read; `F-h` asked for a re-read that had never been performed and passed
> **4/4 by value** when it was. **Scoping from the register as written would have funded three fixes
> for defects that no longer exist.** Same class as *"routed" is a claim about the destination, so
> verify it there* — ⇒ **re-read a debt row at the object before funding it.**
>
> ⚠ **`F-o` goes FIRST in P4.4a.** Its drift is accelerating (5 → 11 in three days) and the row's whole
> content is a prediction that a future `grep -c` will misread the item as *moved*.

| # | Item | Source | Note |
|---|---|---|---|
| ~~**F-a**~~ | ✅ **DISCHARGED 2026-08-24 — ⛩ operator-ruled after the cost was MEASURED, not estimated.** ~~**The gate suite is blind to everything axe classes `best-practice`.** `gate-4` filters `.withTags(['wcag2a','wcag2aa'])`, so a real `empty-table-header` on `/community/proposals/aep-1/` **passed a fully green 512-assertion suite** and was caught only by the T0 sweep (`scripts/visual_capture.mjs --axe`, which uses axe's default ruleset). P3.5 added the routes to gate-4 — that locks WCAG AA on them and **does not close this class**; the scope limit is stated in-file at `gate-4-a11y.spec.ts` | P3.5 AAR | Decide deliberately: widening `gate-4` to best-practice across all ~23 pages will surface pre-existing violations, so it is a scoping decision, not a one-line change |~~  — ⭐ **FIXED AT `gate-4-a11y.spec.ts:79`, red-proven 6/6.** The row calls this *'a scoping decision, not a one-line change'* because widening *'will surface pre-existing violations'*. **MEASURED FIRST: 23 pages × 2 themes = 46 runs, ZERO best-practice violations.** It was a one-line change, and **the row's own caution is what kept it unmade for four missions.** ⇒ *Measure the cost before paying the caution.* The row had been deferred to A1b on the strength of that estimate; the measurement discharged the deferral's stated reason, the changed premise was put back to the operator rather than acted on silently, and the ruling was **widen now**. ⚠ **THE ZERO IS CONTROLLED**, because a tag matching no rules yields the identical zero to a clean site: **(A)** 28 best-practice rules genuinely evaluated · **(B)** a planted `empty-table-header` **IS** caught under the widened set · **(C)** that same defect is **INVISIBLE** to `wcag2a`/`wcag2aa`, reproducing F-a's premise exactly. ⭐⭐ **AND CASE F IS THE REAL FINDING: gate-4 CANNOT DEFEND ITS OWN TAG SET.** Replace the tags with a string matching no rules and the gate stays **green** — a gate asserting *zero violations* is structurally unable to distinguish *nothing was wrong* from *nothing was checked*. Controls A/B are the only thing standing between this suite and a silently disarmed accessibility gate; `scripts/a11y_bestpractice_redtest.sh` exists to be re-run whenever the tags change.
| ~~**F-b**~~ | ✅ **DISCHARGED 2026-08-24 — DO NOT BUILD** (evidence in the note). ~~**`gitleaks` false positive**: `how/campaigns/campaign_haussmann/artifacts/webforge_pattern_register.md:23` trips `generic-api-key` on the phrase *"DTCG **token** pipeline"*. Public since 2026-08-16, not a secret. The pre-push hook scans **outgoing changes only** so it stays clean, but a full-history `gitleaks detect` always reports `leaks found: 1` | P3.5 AAR | Allowlist it. A scanner that always cries once is a scanner whose output stops being read — which is the failure mode that matters before any host move (Git-Ops §7)~~ — ⭐ **CLOSED BY `.gitleaks.toml`, which landed at P3.4 (2026-08-22), AFTER this row was filed, and nothing said so.** Verified **at the object**, not cited from another mission's record (convention 14 — a green someone else ran is still someone else's green): `gitleaks detect --source .` → **881 commits scanned, no leaks found**. The allowlist regex `^measured\+gating$` suppresses the **Secret gitleaks extracted**, not the readable phrase around it — and the config's own comment already carries P4.4's lesson: *a suppression that suppresses nothing looks identical to one that works until you count.* F-b's remaining intent — *a scanner that always cries once stops being read* — is **satisfied**: the baseline is **0**, a threshold that means something. Evidence: [[register_reread_20260824]] |
| ~~**F-c**~~ | ✅ **DISCHARGED 2026-08-24 — both halves, and the gate was RED when written.** ~~**Wire `artifacts/p3_5/derive_register_counts.py` into the suite.** It pins the claim register's looser, §8.6-comparable parse, but still has to be **run and pasted by hand**. A gate that fails when a published count disagrees with the derived one is the other half | P3.5 AAR (§9.5 opened it) | Closes the "undocumented derivation" item: two defensible parses of the same table differ by 2 rows |~~  — ⭐ **FIXED AT `gate-41-derived-counts.spec.ts` G41b, red-proven within 18/18.** The row asks for two halves: the script (landed P3.5) and *'a gate that fails when a published count disagrees with the derived one'*. The gate is the second half. ⭐ **It went red on its first run, correctly**: the register's last published tally read **147 rows / 132 ids** while the derivation read **160 / 145**, because §12–§14 were appended below a section ending *'Run it again if anything below this line changes.'* **Nobody was careless — the instruction was correct, in the right file, addressed to the right person, and enforced by nothing.** Re-derived and appended as the register's **§15.1**, in the register's own idiom. ⚠ The gate reads the **last** `Counts` table in document order, so any future count section is appended, never inserted above.
| **F-d** | **`gate-26` cannot express "a retired claim must stay gone"** for a row that was never `FALSE` | P4.5a AAR | The R-125 class — an `unsupported → cut` row has no regression guard today | ⛩ **DEFERRED to A1b 2026-08-24 — it needs DESIGN, not measurement, and that is a different kind of deferral.** `gate-26` iterates `rows.filter(r => r.class === 'verified')` and asserts PRESENCE; there is no vocabulary at all for *a retired claim must stay gone* on a row that was never `FALSE` (the R-125 class). Adding one means a new row class and a new assertion shape in the campaign's most load-bearing gate — **the one that, at P3.4, was found DEFENDING A STALE SENTENCE and would have gone red on the truth.** ⇒ **Not authored at the tail of a build session.** This campaign has shipped several wrong instruments, every one of them written late in a sitting that was already finishing something else, and `gate-26` is the last place to repeat that. ⚠ It also cannot be designed without convention 17 (landed this session, discharging F-r): an absence assertion that does not name its surface **cannot distinguish a live claim from the changelog entry retiring it** — which is precisely the assertion F-d is asking for. **F-d is downstream of F-r, and only now is that visible.**
| **F-e** | ~~**⊳ D-E — mirror `lighthouse_profiles.json`** into `how/federation/webforge/`, or amend campaign convention 4~~ **→ THE ASK IS AUTHORED AND STAGED; THE MIRROR IS WITHDRAWN AS THE WRONG MECHANISM** | ⛩ DP6 | ~~`find . -name lighthouse_profiles.json` → **0 hits** vault-wide, so every gate-19 bar is currently a transcription~~ **— three of this row's four load-bearing claims are FALSE, measured 2026-08-24** | ⛩ **ASK STAGED at A3, 2026-08-24; ROW STAYS LIVE** (staged ≠ delivered — live count holds at **6**). ⭐ **The row's premise did not survive the object.** (1) **The file exists** — `WebForge.aDNA/what/lib/gates/lighthouse_profiles.json`, 43,988 B. The `find` ran over **our** vault and its output said *"0 hits vault-wide"* without naming the surface it searched — breaching **convention 16** (*a negative result is only as wide as the command that produced it*) and **convention 17** (*every absence assertion names its surface*), both authored by this campaign. (2) **Our pin is byte-current against it**, hash-verified: md5 `134c9647c4c348034db3fa32d65d9db1` identical at pin `6096157`, at their HEAD `14838774`, and in their working tree; `git log 6096157..HEAD -- <path>` empty. (3) **Nothing of ours reads it** — `grep -rn lighthouse_profiles site/` → **0**. `gate-19`'s bars (LCP 2500 · CLS 0.1 · **Perf ≥ 90**) are the CWV *Good band* asserted over committed **slim desktop** fixtures (LH **13.4.0**, `configSettings` absent); their `content_static` is Perf **95** · a11y 95 · bp 95 · seo 100 · **tbt 200**, measured live under mobile emulation + simulated throttling, N=3, LH **13.4.1**, bound by `rebaseline_law` to a host **and browser** fingerprint we do not match. ⇒ the bars are **UN-SOURCED, not transcribed**, and a mirror would not have made them derived — while **Perf 90 is LOOSER than the class 95**, the direction their `ratchet_law` reserves for an operator gate. (4) **The mirror is contradicted from both ends**: our wrapper's line 24 names **gates** among what is *"consumed by reference, never copied"*, and their own `CLAUDE.md` says the bars *"are class-keyed data … **read them there and never transcribe them**"*. ⭐⭐ **AND THE RE-READ DISCIPLINE DID NOT CATCH IT AT A1 — IT RE-RAN THE SAME UNDER-SCOPED COMMAND AND CONFIRMED THE WRONG THING.** *(Struck above.)* **Re-reading a row at the object fails when you re-run the row's instrument instead of re-deriving its question** — the F-u class (a remedy fixed at the moment of diagnosis) meeting the convention-16 class (an instrument narrower than its conclusion). ⇒ **Ruling 3 stands and is honoured**: the ask ships and convention 4 is **not** amended by us — only its *evidence sentence* is corrected to name its surface. Memo: [[coord_2026_08_24_rosetta_to_vitruvius_profiles_are_read_not_mirrored]], `status: staged` — ⛩ delivery is a separate outward act. ⚠ **Residual, and it is the real debt**: our bars are still un-sourced, which **⛔ P4.4b's AC4 does not close by hashing a mirror** — see AC4's row.
| ~~**F-f**~~ | ✅ **DISCHARGED 2026-08-24 — using the constraint F-h's discharge produced for free.** ~~**`check_live_headers.mjs` compares header NAMES, not VALUES.** P3.1 hardened it to assert `res.ok` + same-origin (it had been reading `vercel.com`'s login page and printing `OK — no drift`), but a **correct-name / wrong-value** drift still passes on prod today. The fix is a field-by-field comparison against `vercel.json`'s `/(.*)`  block — a bigger change to a shared deploy tool than P3.1 should have made mid-mission | P3.1 AAR | The instrument now refuses when it cannot reach the target; it still cannot tell you the CSP it read is *yours*. Convention 14 is the general rule this row implements |~~  — ⭐ **FIXED AT `check_live_headers.mjs`, red-proven 10/10.** Values now compared field by field against `vercel.json`'s `/(.*)` block. **The comparison is `expected ⊆ served`, never set equality** — the alias serves **14 headers `vercel.json` does not name** `[D]`, so equality would go red on Vercel's own additions and be reverted within a week. That constraint was **not derived here**: it came free from **F-h's** discharge, which re-read P0.2's header evidence by hand. ⭐ **Exact string equality is EARNED, not assumed**: measured first, all four configured values match the alias **byte-for-byte, CSP included**, so a normalised compare would be tolerance nobody has paid for — and loose comparison is precisely how a CSP drifts one directive at a time. **Red-test case 3 proves the old predicate was blind**: the same `DENY → SAMEORIGIN` mutation, compared by presence only, is **GREEN**.
| ~~**F-g**~~ | ✅ **DISCHARGED 2026-08-24 — the fix was the sentence, and the row said so.** ~~**`stripHtmlComments()`'s second root is inert.** It walks both `dist` and `.vercel/output/static`, and its comment claims the dual walk means "the strip cannot be defeated by hook ordering." Measured at P3.1: **the adapter copies AFTER `astro:build:done`**, so at hook time that path holds either nothing or the *previous* build. The strip is safe — because the adapter copies the already-stripped `dist` afterwards, a different mechanism than the one documented | P3.1 AAR | Not broken; the comment misleads the next person who relies on it. Same ordering fact means **an Astro endpoint cannot read build output** — that is why the llms-full corpus is appended post-build |~~  — ⭐ **CORRECTED AT `astro.config.mjs:30`, AND THE PREMISE WAS RE-MEASURED RATHER THAN QUOTED.** With `dist/` at **16:17** the adapter copy stood at **15:30** `[D]` — two builds behind, which is the divergence the row predicts, observed rather than reasoned. The comment now states the real mechanism (*the adapter copies the ALREADY-STRIPPED `dist` downstream of this hook*) instead of the false one (*the dual walk defeats hook ordering*), and adds the consequence nobody had written down: **the `files`/`stripped` counters can include stale-tree numbers**, so they are a health signal and not a measurement of the build that just ran. The second root stays — it costs nothing and cleans a stale tree. ⭐ **Nothing was broken and nothing was fixed; a true sentence with a false reason was replaced.** That is worth a row precisely because it is the cheapest defect to leave alone and the most expensive to inherit: the next person reasoning *'the dual walk protects me'* would conclude a hook running BEFORE the adapter copy was covered, and it is not.
| ~~**F-h**~~ | ✅ **DISCHARGED 2026-08-24 — DO NOT BUILD** (evidence in the note). ~~**⚠ Re-read P0.2's header evidence against the alias.** P0.2 built header hardening *on preview deploys only* and verified it with the instrument in F-f — before either of its defects was known. Its header claims should be re-verified against `https://adna.network` before being relied on at launch | P3.1 AAR | Flagged, not acted on, at P3.1: P0.2 is not that mission's lane. This is an **evidence re-read**, not a rebuild — the headers may well be correct; what is missing is a verification that reached them~~ — ⭐ **DISCHARGED BY DOING IT.** The row asks for an **evidence re-read, not a rebuild**, so the re-read *is* the work. Performed read-only against `https://adna.network/` on 2026-08-24: **4/4 headers match `vercel.json`'s `/(.*)` block BY VALUE** — CSP, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`. **P0.2's header claims hold.** ⭐ **And doing it by hand produced a free design constraint for F-f's fix**: the alias serves headers `vercel.json` does not name, so the comparison must be `expected ⊆ served`, **never equality** — an equality check would go red on Vercel's own additions. Evidence: [[register_reread_20260824]] |
| ~~**F-i**~~ | ✅ **DISCHARGED 2026-08-24 — and the row typed a list it should have derived.** ~~**gate-27 leak-lint scans `.html` and `.md` only — `.json` is invisible to it.** `scanTargets()` (`gate-27-leak-lint.spec.ts:136`) filters on those two extensions, so the P3.2 registry endpoints (`/vaults.json`, `/api/registry.v1.json` — 81 KB of published surface, 74 rows of registry prose) are **unlinted**. This is the *identical* hole P3.1 found when 221 `.md` twins arrived unseen, recurring one mission later in a new extension. Fix: add `.json` to the scan, and **scope-allowlist the machine enums** (`org_graph`, `tbd_at_p0`, `genesis_stub`) to those routes and those keys — a JSON field named `class` whose value is `org_graph` is an API contract, not jargon in a sentence — so every *other* leak class (internal paths, mission ids, codenames) still applies in full | P3.2 AAR | The allowlist fixture already supports exactly this shape (`surface` glob + `pattern` + `tokens` + `rationale` + `date` + `reviewed_by`). **Do not skip the gate for JSON; scope it.** |~~  — ⭐ **FIXED AT `gate-27-leak-lint.spec.ts`, red-proven 11/11.** `.json` added to `scanTargets()`; the machine enums scope-allowlisted to the two endpoints. **MEASURED BEFORE WIDENING**: `vaults.json` and `api/registry.v1.json` **18 hits each, `raw_enum` only**; and a **third published surface the row never names** — `community/proposals.json` — is **clean**. Every other pattern (internal paths, mission ids, codenames, truncated ledes) reaches these files and finds **nothing**, so it applies to them in full at zero cost. ⭐ **The row named THREE enums; the derivation found SEVEN**, under two keys (`class` 6, `status` 1). Scoping to the three would have left four firing and the gate **red on a good tree** — **KW-14 applies to the exception list, not only to the reading.** Red-test **case 2 is the proof the defect was real**: same planted leak, old two-extension filter, gate **GREEN**. And the widening **defends itself** — deleting `.json` now turns the reach assertion red instead of re-opening the hole in silence, which is how this recurred from `.md` to `.json` in one mission.
| **F-j** | **`astro check` has a 26-error pre-existing baseline, so it cannot gate anything.** Measured at P3.2 `[D]`: 26 errors across 7 files — `src/pages/index.astro` (10), `src/pages/vaults/index.astro` (10, all in the client `<script>`), `vaults/graph.astro` (2), `HomeHero.astro`, `Header.astro`, and 2 gate specs. All are DOM typing in inline scripts (`Element.dataset`, `Element.hidden`, implicit `any`) — **none introduced by P3.2**, whose own files check clean. Consequence: P3.2 added `schema-dts` typing to every JSON-LD builder (red-tested — it catches `licence` for `license`), but that safety is **authoring-time only**; a new type error would land in a 26-error wash and CI cannot assert zero | P3.2 AAR | Cheap to fix (cast the query results, type the callbacks) and it converts an existing tool into a real gate. Until then, **do not cite `npm run check` as passing** — it does not | ⛩ **DEFERRED to A1b 2026-08-24 — with the baseline RE-MEASURED, which is the point of the deferral.** P3.2's figure was **26 errors**, taken before P3.4, P4.1 and P4.2 all touched the tree. Re-run at this session `[D]`: **`Result (165 files): 26 errors · 0 warnings · 70 hints`** — **the figure holds exactly.** ⇒ The row's premise is intact and it is deferred for **cost**, not for doubt: 26 DOM-typing errors across 7 files, inside inline `<script>` blocks, is a real editing session and not a gate fix. ⚠ **Until it lands, `npm run check` must not be cited as passing** — it does not, and it cannot gate anything at a 26-error baseline. ⭐ **Deferring it with a re-measured number is the whole lesson of this session's re-read**: three rows were funded against stale premises at the pre-build gate, and the fix is to re-measure at the moment of funding, not to fund faster.
| **F-k** | **⛩ RULED OURS: `.adna/` has no pre-push secret-scanning hook at all** — verdict `FAIL_NONE`, the worst state, on a tree carrying a live origin (`github.com/aDNA-Network/adna-legacy`). Grace Hopper found it and correctly refused to patch it: Standing Rule 1 makes `.adna/` do-not-modify, and the only sanctioned path is a `skill_template_release` fire **from this vault**. Operator ruled the gate **ours to carry**, `2026-08-21T23:51:27Z` (Decade-2 SITREP composite → `approve`). The fail-closed skeleton v2 (`a1288f73…`) is already row 9 of Git.aDNA's pending batch; §2 makes it ten | Hopper memo §2 (2026-08-20) + ⛩ operator composite | Ships in the **next `skill_template_release`** — an operator-opened gate, so no date is pinned here on purpose. ⚠ **Two constraints from Hopper that change what we ship, not just when**: (a) *shipping v2 into the template does not deploy it* — **one live installation fleet-wide**, so a release note saying "the standard now carries a fail-closed gate" would be read as "the fleet is covered" and would be **false**; the existing-vault sweep is a separate act with a separate owner. (b) any conformance check must resolve **what git actually runs**, not what `.git/hooks/pre-push` appears to contain — `ScienceStanley.aDNA` reads PASS while running the no-op, and `Archive.aDNA/lattice-labs` points `core.hooksPath` at a defunct path outside the workspace | ⛩ **ROUTED 2026-08-24 → the next `skill_template_release`** (operator-opened; no date pinned, deliberately). Re-verified at the object: `.adna/.git/hooks/pre-push` **absent** — `FAIL_NONE` confirmed — **and a second fact the row did not have**: there is **no hook template in `.adna/how/templates/` either**, so the release ships the fail-closed skeleton itself, not a pointer to one. Hopper's two constraints ride with it unchanged: (a) shipping v2 into the template **does not deploy it** — one live installation fleet-wide, so a release note reading *'the standard now carries a fail-closed gate'* would be **false**; (b) any conformance check must resolve **what git actually runs**, not what `.git/hooks/pre-push` appears to contain. **Not ours to close inside P4.4a** — Standing Rule 1 makes `.adna/` do-not-modify and the release is the only sanctioned path.
| ~~**F-l**~~ | ✅ **DISCHARGED 2026-08-24 — BUT NOT BY ANYONE FIXING IT. Read the note.** ~~**The redaction idiom this campaign uses in its own notes does not redact.** `${VAR:+SET}${VAR:-UNSET}` leaks the value whenever the var **is** set: `:+` emits `SET`, then `:-` emits **the value** (it falls back to `UNSET` only when *unset*), so the two concatenate to `SET<value>`. Run against `SS_VERCEL_TOKEN` at the P3.2-deploy session open, it printed the live token into the transcript. The credential is the known throwaway test-account token whose rotation the operator explicitly de-prioritized (E4 c159, 2026-06-07), so this is **not an incident** — but the idiom is recorded in campaign memory *as the redaction pattern*, and it leaks every time it is applied to a set variable | P3.2-deploy session `[D]` 2026-08-21 | Fix the recorded idiom: **`[ -n "$VAR" ] && echo SET \|\| echo UNSET`**, or `${VAR:+SET}` alone with nothing concatenated after it. ⚠ Same *outcome* as the 2026-06-04 incident (`session_stanley_20260604T160140Z_v8_m510_e1_reskin_deploy`, where the `vercel` CLI printed the same token) by a **different mechanism** — that one was a tool printing a secret, this one is our own probe. Worth a `doctrine_credential_handling` note: the ≤6-char-prefix rule (§428) governs how a leaked value is *referenced afterwards*; nothing governs the probes that produce one |~~  — ⭐ **RE-READ AT THE OBJECT: NO EXECUTABLE FILE IN THE VAULT CARRIES THE IDIOM.** Every surviving occurrence (`STATE.md` ×4, four history session files, this row) is **prose describing the defect**, and each already carries the correction beside it. The row's actual complaint — *the idiom is recorded in campaign memory AS THE REDACTION PATTERN* — is **no longer true**. ⚠ **But nobody edited anything to make it true.** It became true because the campaign wrote about the defect often enough that every instance acquired its own antidote in the same sentence. **That is discharge by documentation, and it is fragile in a way a code fix is not** — the next agent needing a redaction reaches for memory, not for a struck debt row. ⇒ **The residue is routed, not dropped**: `what/doctrine/doctrine_credential_handling.md` **§6.10** now carries it, because the §6 family governs what happens to a value AFTER it is seen (≤6-char prefixes, handoff notes, plaintext disposal) and **nothing governed the probe that puts it on screen**. The rule generalises past this idiom: *a probe reporting on a credential must be constructed so that no branch of it can expand the value — read it by asking what it prints when the variable IS set, which is the branch nobody checks.* ⛔ **No checker built, deliberately** (convention 15): a grep retires one spelling of a failure mode that has as many spellings as shell has operators.
| **F-m** | **`what/decisions/adr_index.md` is twelve ADRs behind, and nothing notices.** Measured at P3.3 O0 `[D]`: the index reads `updated: 2026-07-02`, tallies **41 ADRs**, and its highest row is **046** — while **047–058 exist as files on disk**, every one of them Haussmann-era (048 positioning, 049 IA, 050 deploy, 051 URL canonicalisation, 052 registry tiers, 055 proposal process, **056 the agentic-surface contract this mission's siblings keep amending**, 057 same-diff gate law, 058 installer). An index that is the documented way in to the decision record, silently missing the decisions the current campaign is making | P3.3 O0 `[D]` | Same family as **F-c**: a published tally that disagrees with the derived one should fail a gate rather than wait to be noticed by someone opening the file for another reason. Cheap derivation: count `adr_*.md` in `what/decisions/`, compare to the index's tally and to its highest row. ⚠ Note the numbering hole is legitimate — **015 and 018–021 were never assigned** (F-CHM-206) — so the check compares *presence*, not contiguity | ⛩ **FENCED 2026-08-24, NOT FIXED — `gate-41` G41c.** The check the row asks for exists: presence-compared (never contiguity — 015 and 018–021 were never assigned), with a **dated ratcheting baseline of 13** that may only go down, plus two assertions with no baseline to hide behind (an index row pointing at no file is always wrong; the `**Tally:**` line must at minimum describe the table it sits above). ⛔ **THE INDEX IS STILL 13 ADRs BEHIND — 047…059, every one Haussmann-era, including ADR-056.** A green G41c means *it has not got worse*, which is not the same claim, and `gate-39`'s P4.2 precedent is the reason that is acceptable rather than fake enforcement. ⇒ **THE ROW STAYS LIVE**: the backfill is the fix and it is unbuilt. ⭐ **Found while gating it: `adr_index.md` MATCHES ITS OWN GLOB**, so the index's own documented drift check (`ls what/decisions/adr_*.md | wc -l`) counts the index as an ADR and is **off by one, permanently** — 54 real ADRs, not 55. *The instrument prescribed by the document is wrong about the document.*
| **F-n** | **No check compares a vault's `MANIFEST.updated` against its `STATE.updated`** — and a peer measured the consequence across the fleet before we did. Ilmarinen (`coord_2026_08_21_ilmarinen_to_hestia_rosetta_manifest_pull_was_staler`) sampled 12 vaults: **8 are 34–52 days behind**, including **this one at 45 days**. Their own case is the sharp one — `Forgejo.aDNA`'s MANIFEST denied in prose ("*no deployment, no infra, no install*") a service that had been in production for two weeks and is now the fleet's container registry and git host. Root cause is structural, not sloppiness: the startup checklist reads `CLAUDE.md` → `STATE.md` → campaign → `what/context/`, and **`MANIFEST.md` is in none of them**, so nothing ever brings a reader back to it | Ilmarinen memo §1–§3 `[D]`, intaken at P3.3 O0 | A two-line gate (compare the two `updated:` fields, fail past a threshold) closes it for this vault. ⚠ **The fleet-wide half is not ours** — Ilmarinen offers it to Hestia as a *staleness floor* on any registry pull, and registry data is pt19/Hestia's lane. What P4.4 can own is the local check. Recorded here so a peer's measured finding is **dispositioned rather than merely mentioned** — Berthier's own §3 lesson from the same week | ⛩ **FENCED 2026-08-24, NOT FIXED — `gate-41` G41d.** Dated ratcheting baseline of **49 days**, plus a guard against the inverse reading (a MANIFEST dated AFTER STATE is a clock or a typo, not a spectacular pass). ⛔ **THE MANIFEST IS STILL 49 DAYS BEHIND.** ⚠⚠ **AND IT MUST NOT BE CLEARED BY BUMPING THE DATE** — `updated:` is a claim that the content was **reviewed** that day, so stamping today would convert a visible gap into an invisible lie, which is the exact class this campaign exists to retire. The gate says so in its own failure message, because the cheapest way to make it green is the dishonest one. ⇒ **THE ROW STAYS LIVE**: the fix is a MANIFEST **content review**. The fleet-wide half remains Hestia's (Ilmarinen's staleness-floor proposal), unchanged.
| **F-v** | **The human screen-reader sitting is UNRUN, and no gate can ever tell you so.** P4.3 AC2 has two halves: a headless AT engine (built at O0, `gate-45`, red-proven 9/9) and a ~30-minute guided VoiceOver session by a person. The engine half is done and gated. **The human half has never been run** — and unlike every other row in this register, *nothing in the suite can go red about it*, because a screen-reader ENGINE passing is exactly what an unrun human sitting looks like from CI. | P4.3 AC2 (⛩ operator ruling 2026-08-25) | ⛩ **DEFERRED TO A FOLLOW-UP CAMPAIGN BY OPERATOR RULING, NOT SKIPPED.** The operator ruled the priority is the site fully updated and reviewed; the sitting routes onward. **The instrument is ready and costs nothing to keep**: [[voiceover_session_script]] (`artifacts/p4_3/`, `status: ready_to_run`) — 18 items over 6 surfaces, authored AFTER the keyboard pass so its listening items are the ones that pass actually raised. ⭐ **This row exists because a deferral carried in PROSE is a deferral with no gate** — G-6 and G-7 are two sightings of exactly that, both of them obligations deferred *into P4.3 by name* that its five original criteria mentioned nowhere. Writing this one as a row rather than a sentence is the lesson applied to itself. ⚠ **Consequence, stated not buried:** D11 check 5 is **UNMET in its human half** and the mission re-scores against that, not around it; and `/accessibility` names the gap **on the page**, so the site does not let an automated pass imply a human one. ⛔ **No instrument is proposed** (convention 15): what is missing here is a person listening, and there is no version of that a checker can hold. |
| ~~**F-o**~~ | ✅ **DISCHARGED 2026-08-24 — and the obvious fix would have re-created the bug.** ~~**`machine_eye` item 11's text-search probe has gone NOISY, and a future re-run will misread it as moved.** The genesis probe had two halves — fetch the endpoints, and text-search the site for `mcp`. On 2026-08-16 the text half returned **0** hits outside one vault description. Re-measured live at P3.3 O3 `[D]`: **5** hits in `llms-full.txt`, and **not one is a capability claim** — Playwright MCP named as a tool in `/doctrine/visual-inspection` (×2), `.mcp.json` gitignore advice aimed at the reader (×2), and the original Warp.aDNA vault description. Nothing changed but the corpus: P3.1 grew `llms-full.txt` from 2 KB to 950 KB and swept the mentions in. ⇒ **A future `grep -c mcp` scores 5 and concludes item 11 moved. It has not.** Fix: the probe must separate *the site mentions MCP* from *the site offers an MCP server* — only the endpoint half can decide that, and the text half needs a negative filter or retirement. *(Convention 15's staleness class through a side door: the probe did not change and the site did not lie — the corpus underneath the probe changed, and the probe's meaning changed with it.)* |~~  — ⭐ **FIXED AT `artifacts/p4_4/machine_eye_item11_probe.mjs`, red-proven 12/12.** The row offered *'a negative filter or retirement'*. The obvious repair — count the tokens only a real MCP offering emits — **was measured and it fails**: `/.well-known/mcp.json`, the most specific token there is, returns **1 hit on a site with no MCP server**, because the changelog's *'What is not here'* section says the endpoint 404s. ⇒ **A CAPABILITY-TOKEN PROBE HAS THE IDENTICAL DEFECT ONE LEVEL UP.** This site's honesty stratum (convention 1) *guarantees* it names its own absent capabilities in prose, so every text probe finds the disclosure OF ABSENCE and scores it as PRESENCE — **the better the site's honesty, the more false the text limb**, and no filter repairs a probe whose signal and noise are the same string. **The text limb is RETIRED as a decision input, not filtered**; only the endpoint limb decides. Exit **2 UNREACHABLE** is split from **0 ABSENT** (`check_live_headers`' lesson) and redirects are refused rather than interpreted. Live reading `[D]`: endpoints **404/404** ⇒ ABSENT, advisory **mcp = 11** — *the divergence is the fix working.* Amendment recorded in `evidence/machine_eye/machine_eye.md`; the 2026-08-16 verdict stands unstruck.
| ~~**F-p**~~ | ✅ **DISCHARGED 2026-08-24 — and the row's diagnosis was one step off.** ~~**Gate-17 G15's skip guard tests for the wrong thing, so the documented workflow leaves it guaranteed-red.** G15 asserts one `Vary`-carrying negotiation route per twin against `.vercel/output/config.json`. Its guard is `test.skip(!existsSync(configPath), 'run npx astro build …')`. But that file exists as soon as **any** post-build inject step has run — so following convention 6's own out-of-deploy instruction (`node scripts/inject_redirects.mjs .`) creates the file **without** the routes G15 asserts on, leaving the gate **unskipped and certain to fail on a perfectly good tree** (observed at P3.3 O3 `[D]`; fixed by running `inject_negotiation.mjs`, **no code changed**). Two defects: the guard checks for the *file* rather than the *routes*, and its skip message names a remedy — a bare `astro build` — that **does not inject at all**, which is the exact thing convention 6 exists to warn about. Fix: guard on the presence of `x-adna-twin` routes, and correct the message to name `inject_negotiation.mjs`. |~~  — ⭐ **FIXED AT `gate-17-agentic.spec.ts`, red-proven 10/10.** Both G15 tests now guard on **the routes each one asserts on**, with skip messages naming the injector that produces them. ⚠ **The row says the file exists 'as soon as any post-build inject step has run'; measured, it is earlier than that** — the Astro Vercel adapter writes `config.json` **at build time**, and `inject_redirects.mjs` refuses to run without it (`inject_redirects.mjs:57`). So a bare `npx astro build` alone was enough to defeat the guard. ⭐ **Not a fail-open, and the reason is external to this gate**: `inject_negotiation.mjs` re-counts after injecting and `die()`s unless the total is exactly `twins × 2` (line 145), so *the injector ran and produced nothing* cannot exist — absent twin routes has exactly one reachable cause, **the injector did not run**. Recorded in-file so that if that fail-closed check is ever weakened, this guard is revisited with it. **Red-test case 5 mutates the guard away and proves the same fixture goes RED** — without it, *'the gate no longer fails'* and *'the gate no longer runs'* are indistinguishable.
| ~~**F-q**~~ | ✅ **DISCHARGED 2026-08-24 — DO NOT BUILD** (evidence in the note). ~~**The "expect exactly 1 known gitleaks FP" baseline is SELF-DEFEATING — documenting the false positive creates another one.** Observed live at P3.3 O3 `[D]`: the by-hand scan read **855 commits / 1 leak** before the session's commits and **857 / 2** after. The new finding was in **the session file that documented the first one**, because the record quoted the FP's matched text verbatim to identify it. Both findings share a single literal — `measured+gating`, prose about **design tokens** in `webforge_pattern_register.md:23` — so there is no secret and never was. ⚠ **But the campaign uses "expect exactly 1" as a go/no-go signal before every push, and that number now ratchets upward every time an agent honestly records why the scan was clean.** A baseline that rises when you document it cannot be used as a tripwire: within a few sessions a real leak would arrive as "3 instead of the expected 2" and read as more of the same. **Fix (pick one, P4.4's call):** a `.gitleaksignore` entry or an allowlist regex scoped to that exact literal, so the FP is counted **zero** times rather than N; **or** a rule that records the FP by *fingerprint/commit* and never by matched text. **Do NOT just raise the expected number** — that re-arms the same trap one notch higher. ⇒ **The general shape, and it is the third instrument-defect this session: an instrument whose OUTPUT changes its own INPUT cannot hold a baseline.** *(Related but distinct from **F-o**, where the corpus grew under a static probe; here the probe's own audit trail feeds it.)*~~ — ⭐ **CLOSED BY THE SAME `.gitleaks.toml` THAT CLOSED F-b**, and the fix chosen was the one this row recommended: **an allowlist scoped to the exact literal, so the FP counts ZERO times rather than N** — not the trap-re-arming *"raise the expected number."* The ratchet is gone at the root: the baseline is **0**, so a real leak arrives as **1 instead of 0** and is unmissable. Re-verified at the object 2026-08-24: **881 commits, no leaks found**. ⚠ **The general shape this row named still stands and is worth keeping legible** — *an instrument whose OUTPUT changes its own INPUT cannot hold a baseline* — it simply no longer has an instance here. Evidence: [[register_reread_20260824]] |

| ~~**F-r**~~ | ✅ **DISCHARGED 2026-08-24 as a CONVENTION, which is what it asked to be.** ~~**An absence assertion cannot distinguish a live claim from the changelog entry that retired it.** After P3.4 struck the stale R-95 sentence, a site-wide grep for the struck wording still returns hits — from the **changelog entry whose subject is the false sentence**. The claim is correctly gone from every page that asserted it, and the sweep that proves so reads as red. ⇒ **Every absence assertion must name its surface** (P3.4's live probe scopes each one deliberately; nothing enforces it) | P3.4 close (2026-08-22) | **Routed here in the campaign CLAUDE.md prose and never landed as a row until P4.1's close.** Remedy is a scoping convention plus, if a checker is ever built, an exclusion for `src/content/changelog/**` — but read convention 15's ruling first: the habit costs a sentence and cannot itself be wrong |~~  — ⭐ **LANDED AS CAMPAIGN CONVENTION 17**, not as an instrument. The row's remedy is *'a scoping convention plus, if a checker is ever built, an exclusion for `src/content/changelog/**`'* — and convention 15's ruling governs the second half: **the habit costs a sentence and cannot itself be wrong; the checker costs a sitting and can.** This session authored six instruments and **the first run of the very first one reported 5 of 12 cases failing because the HARNESS was broken, not the subject** — which is the argument for the habit, not against it. ⇒ **Every absence assertion names its surface.** P3.4's live probe already scopes each one deliberately; convention 17 makes that the rule rather than that mission's good manners.
| ~~**F-u**~~ | ✅ **DISCHARGED 2026-08-24 — BUILT, NOT DEFERRED.** ~~⭐ | **⛔ `deploy_adna.sh` has a clean-tree guard and NO ANCESTRY GUARD ON THE PRODUCTION ALIAS.** ⛩ **RE-WORDED 2026-08-24 — the row asked for the WRONG INSTRUMENT, and the correction changes what gets built. The lease framing below is STRUCK, NOT DELETED**, because the reasoning that a mutex does not address this failure is worth keeping legible: replay F-s with a perfect lease held throughout — lemur acquires, deploys, releases; this node acquires, deploys `922519c`, releases; **v0.4.3 and the Arch repo are un-published anyway.** **The two deploys never raced. They were sequential and still destructive.** A mutex reasons about *time*; the defect is about *content*. ⇒ **The invariant is: never publish a tree that does not contain the commit currently serving the alias** — checkable with no coordination at all, because git knows ancestry and Vercel knows what is live; the only missing piece is that **the alias cannot currently say which commit it is** (`.well-known/` does not exist, verified 2026-08-24). Design + 7-case red-test matrix: [[f_u_alias_guard_design]] (`accepted`). **Now AC0, a first-class criterion with its own verification limb V5.** ⚠ **It does NOT lift the freeze** — release still needs lemur's push and one reconciled deploy; the guard *enforces* that reconciliation instead of relying on two operators remembering it. ~~**NO SINGLE-WRITER LEASE FOR THE PRODUCTION ALIAS** — this is F-s's actual cause and the only part of it that is still open.** Two checkouts of `aDNA.aDNA` exist (this node and **lemur**, deploying through a deputy grant). Each holds commits the other lacks, and **each one's `--prod` deploy silently un-publishes the other's**: lemur's deploys rolled back six days of Haussmann surfaces, and the restore from here then un-published v0.4.3 + the Arch `[adna]` repo (3 × 404 `[D]`). **Neither checkout misbehaved.** Both passed the clean-tree guard; both assumed they were the only deployer. **The guard proves *your tree* is clean; nothing proves *the alias* is not about to be taken.** A standing deploy freeze is the current mitigation and it is a freeze, not a fix — it blocks P4.1 O2's shipped work from reaching production | P4.1 O1 (2026-08-24), cause relayed by Venus from the deputy lane; full record `artifacts/p4_1/finding_live_prod_regression_20260823.md` | **Design the lease before writing it.** The vault's own Governance Doctrine §Single-Writer Lease governs shared *files*; the production alias is a shared *external* resource with no `updated` field to check, so the file-lease pattern does not port directly. ⚠ Whatever is built must be demonstrated to fail (convention 14) — **five instruments have shipped wrong on their first live run in this campaign**, and a lease that reports "clear" when it cannot see the other checkout is worse than no lease, because the freeze at least fails closed~~ — ⭐ **the convention-14 warning was the one that paid off**: designing before writing is what found that the named instrument was wrong. **The guard would have caught F-s in BOTH directions** — lemur's deploy (live commit not an ancestor of lemur's HEAD → ABORT, naming the six days of surfaces about to be rolled back) **and the restore from here** (live commit `f4fa9c5` unknown to this repo → ABORT, the exact probe the freeze runs by hand today). **The second row is the one that matters**: the restore fired the same hazard backwards, under an operator GO, by an agent following every rule then in force. **No discipline available at the time could have caught it.** ⚠ **Stated, not buried — what it cannot do:** it only guards the sanctioned path (a raw `npx vercel deploy --prod` bypasses it entirely, and **ten of F-s's deploys came through the CLI**), it cannot distinguish an intentional rollback from an accident (hence `--force-rollback`, which must be loud, logged and operator-gated or the hatch becomes the habit), and **the first run aborts by construction** because the live alias carries no stamp — the bootstrap exception is a **single dated operator-signed act, never a standing `no stamp ⇒ allow` branch**, which is precisely the vacuity `check_live_headers.mjs` shipped with for four months |~~  — ⭐ **CLOSED BY AC0, THE INSTRUMENT THIS ROW'S OWN RE-WORDING ASKED FOR.** `inject_build_stamp.mjs` publishes `/.well-known/adna-build.json`; `check_alias_ancestry.mjs` refuses any tree not containing the live commit; both wired into `deploy_adna.sh`. **Red-proven 13/13** (`alias_guard_redtest.sh`), and demonstrated to FAIL: mutating the guard to fail-open turns 5 cases red, deleting the injector call turns case 9 red. Verified at the object 2026-08-24: the stamp is present in the adapter output at commit `4a9bc09`, and the live alias still 404s — **the documented pre-bootstrap state, not a fault.** ⛔⛔ **THE ROW CLOSES; THE FREEZE DOES NOT.** Release still needs **lemur** to push `30c8163` + `f4fa9c5` and ONE deploy from a tree holding both halves — re-verified absent at this session's open and close. **AC0 enforces that reconciliation; it cannot perform it.** Said here rather than left to be inferred from a struck row, because this row IS the freeze's release condition and a reader who sees it struck will otherwise conclude deploys may resume. ⚠ **What it still cannot do, unchanged from the design**: it guards only the sanctioned path (a raw `npx vercel deploy --prod` bypasses it, and **ten of F-s's deploys came through the CLI**), and it cannot tell an intentional rollback from an accident — hence `--force-rollback`, dated so it self-expires, because *a hatch that does not expire is the habit*.

> **⚠ F-t is WITHDRAWN as a duplicate — it is F-l, recorded twice.** The campaign CLAUDE.md's P4.1 O0
> block names the `SS_VERCEL_TOKEN` transcript leak as a new finding **F-t**. It is the same defect
> already registered as **F-l**: the `${VAR:+SET}${VAR:-UNSET}` idiom, the same variable, the same
> failure mechanism. Two occurrences (P3.2-deploy open, then P4.1 O0), one defect. **Per this
> register's own F-b precedent — *"recurrence is evidence for the allowlist, not a new row"* — F-t
> gets no row; F-l carries the recurrence.** ⭐ Worth keeping for its own sake: **the campaign
> assigned a fresh ID to a finding it had already registered, because the second sighting was
> written up from the session rather than checked against the register.** That is the
> index-vs-artifact class one level down — and the reason a debt register has to be *read* before it
> is *appended to*. *(Landed at P4.1's close, 2026-08-24.)*

**F-b recurred at P3.1** (2026-08-21). `gitleaks detect --source .` was run by hand at every push point
— because the pre-push hook is the retired v1 no-op (Hopper's census: **14 vaults**, not one) — and it
reported `leaks found: 1` on the same `measured+gating` phrase every time. Recurrence is evidence for
the allowlist, not a new row: a scanner that always cries once is a scanner whose output stops being
read, which is precisely the state it is in.

**⚠ One scope item in the frontmatter has changed meaning.** The **off-site CTA-target gate** was
rescoped in at DP6 to *discover* the R-122/R-123 defects. **P3.5 closed both** (2026-08-20, verified
live). The gate is therefore now a **regression guard**, not a discovery instrument — build it to fail if
`CONTRIBUTING.md` / `CODE_OF_CONDUCT.md` / `LICENSE` ever stop resolving in the repos the site's CTAs
point at. The reusable probe already exists: `artifacts/p3_5/deploy_probe_p3_5.mjs` ends with exactly
that check.

## Constraints

Baselines only ever regenerate deliberately (reviewed diff); no third-party SaaS beyond the Vercel platform already in use; budgets ratchet-only (WebForge law); scheduled jobs must fail loudly somewhere a human looks.

## Definition of done

A pixel regression, a header drift, a budget breach, or a field-CWV red each fail something visibly — without a human remembering to check.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + the toolkit table (plan §Inspection-toolkit) + `idea_visual_regression_gate.md`. Execute O0, O2; O1 needs the operator's dashboard action; then O3.

## Progress

### 2026-08-24 — ✅ P4.4a A3 COMPLETE · ✅ **P4.4a CLOSED.** The ask changed shape because the row was wrong about the peer's tree.

**Session** `session_stanley_20260824_181438_haussmann_p4_4a_a3_vitruvius_aar` (opened after a context
crash; A2's work was committed as `72fb15b` before the crash and nothing was lost).

⛩ **Three operator rulings taken at this session's open.** **(1)** Deliver the *real* question and
report that the mirror is the wrong mechanism, rather than sending F-e's ask as worded. **(2)** **No
delivery this session** — author + stage only; all three Vitruvius memos stay staged. **(3)** Close
scope: AAR + `completed`, push `72fb15b`, correct F-e + convention 4's evidence note, and flag
Berthier's memo-footer contradiction back rather than editing it (Rule 10).

#### ⭐ Three of F-e's four load-bearing claims measured FALSE

| Row's claim | Measured `[D]` 2026-08-24 |
|---|---|
| the file does not exist (*"0 hits vault-wide"*) | **It does** — `WebForge.aDNA/what/lib/gates/lighthouse_profiles.json`, 43,988 B. The `find` searched **our** vault and said *"vault-wide"* |
| our pin is stale against it | **Byte-current**, hash-verified: md5 `134c9647c4c348034db3fa32d65d9db1` identical at pin `6096157`, their HEAD `14838774`, and their working tree; `git log 6096157..HEAD -- <path>` **empty** |
| every gate-19 bar is a **transcription** | **`grep -rn lighthouse_profiles site/` → 0.** Our bars are the CWV *Good band* over slim **desktop** fixtures (LH 13.4.0, no `configSettings`); theirs are Perf **95** / tbt 200 / a11y 95 / bp 95 / seo 100, **live mobile** + simulated throttling, N=3, LH 13.4.1, fingerprint-bound. ⇒ **UN-SOURCED, not transcribed** — and **Perf 90 is LOOSER than 95** |
| mirroring is the remedy | **Contradicted from both ends** — our wrapper names **gates** among what is *"consumed by reference, never copied"* (`how/federation/webforge/CLAUDE.md:24`); their `CLAUDE.md` says *"read them there and never transcribe them"*. Our two live consumers both **resolve the pinned path** |

⭐⭐ **And A1's re-read pass had already run — it re-ran the row's own `find`, got 0, and confirmed the
wrong thing.** ⇒ **Re-reading a row at the object means re-deriving its question, never re-running its
command**; the row's command already encodes the row's assumptions. Second face: **F-e prescribed a
mirror at the moment of diagnosis exactly as F-u prescribed a lease** — both diagnoses sound, both
remedies wrong. **Two instances is a pattern.**

⛩ **Ruling 3 is honoured, not overturned.** The ask ships; convention 4's **rule** is untouched and no
amendment is owed; only its **evidence sentence** is corrected to name the surface it searched
(conventions 16 + 17, both authored by this campaign, both breached by that sentence).

| Output | State |
|---|---|
| [[coord_2026_08_24_rosetta_to_vitruvius_profiles_are_read_not_mirrored]] | **`status: staged`** — withdraws our premise, then asks **one** question in **two scopes** (A: `adna_site` enters their fleet, cost named on its face — it means adopting `run_lighthouse.mjs`, not a number; B: we derive against a named class, every divergence pinned). *"Neither yet"* pre-recorded as a real answer. ⚠ We raise their *"do not apply one class's bars to another"* against our own scope B rather than wait for them to |
| [[coord_2026_08_24_rosetta_to_berthier_your_licensing_memo_footer_contradicts_its_frontmatter]] | **`status: staged`** — their memo's frontmatter says `delivered` with all three fields stamped while its footer says *"Not delivered, all three fields null."* Flagged, **not edited** |
| `F-e` · convention 4 · AC4 · B2 | corrected; **live register count holds at 6** (staged ≠ delivered) |

**Verification `[D]`** — suite **587/587 unchanged**, which for an objective that touches **no `site/`
source** is the correct result and not a reassuring one (P4.1 O3's precedent). Freeze re-verified at
open **and** close: `git cat-file -t` fatal on both `30c8163` and `f4fa9c5`. **Nothing deployed;
nothing delivered.**

### 2026-08-24 — ✅ P4.4a A2 COMPLETE. Three gates, none of which discovers anything, all three red-proven.

**Session** `session_stanley_20260824_172016_haussmann_p4_4a_a2_gates`.

⛩ **Two operator rulings taken at this session's open.**
**(1) Budget re-raised to ~600–750 kT** for P4.4a — SUPERSEDES the ~280–420 kT ratified on
2026-08-24, which A0+A0v+A1 had already consumed ~310–380 kT of (SO#11 / ADR-016). Allocation:
A2 ~180–250 kT · A3 ~80–120 kT.
**(2) `gate-43` blocks CI, with the two failure modes separated** — a 404 is our defect and fails;
an unreachable or rate-limited host reports as a **precondition** failure in its own vocabulary.
This was a real conflict: `check_external_links.mjs` deliberately does **not** block, on the stated
grounds that *"gating on that would train everyone to ignore a red build."* The distinction that
resolves it is ownership — these are our own org's repos and the site's primary CTA.

#### ⭐ All three classes had already been closed. Every gate is a regression guard.

Re-verified at the object before building, per the lesson this campaign keeps paying for:

| Class | Origin | State |
|---|---|---|
| zero-console-error | **F20** | **FALSE** — P4.2 O3 measured errors 0/0 across 4 routes × both themes |
| off-site CTA-target | **R-122 / R-123** | **CLOSED** by P3.5, 2026-08-20 |
| hub-substance floor | **F19** | **CLOSED** by P4.2; spec hub re-measured **h2=4, bodyLen 2,630** (was `h2=0`, 1,504 B) |

⇒ **All three gates went green on their first run**, which is exactly the state in which a real
assertion and a no-op are indistinguishable. The red-tests are therefore the entire evidentiary
value of this objective, not a formality.

| Gate | What it fences | Red-test | Result |
|---|---|---|---|
| `gate-42` console clean | console.error · pageerror · same-origin request failure · non-200, over **224 routes × 2 themes** | `console_clean_redtest.sh` | **7/7** (5 mutations + 2 controls) |
| `gate-43` off-site CTA | 6 governance doors + 1 clone destination, **all derived from the build** | `offsite_cta_redtest.sh` | **6/6** (4 mutations + 2 controls) |
| `gate-44` hub substance | h2 + bodyLen budget per hub, **reusing `hub_depth_measure.mjs`** | `hub_substance_redtest.sh` | **7/7** (5 mutations + 2 controls) |

#### ⭐ The three findings worth carrying

1. **A false finding caught before it became a gate — the same shape as F20, one layer up.** The
   first design probed a fixed `CONTRIBUTING/CODE_OF_CONDUCT/LICENSE` triple against the four
   own-org repos the site links. `aDNA-Network/community-policies` returned **404 on all three**,
   which reads as a live R-122. It is not: that repo is a policy-document repo holding
   `code_of_conduct.md` (lowercase), `privacy.md`, `terms.md`, and **all three URLs the site actually
   links resolve 200**. The 404s were an artifact of the probe's assumed shape, not a defect.
   A gate shipped on that rule would have fired forever on a correct state — and `adna-legacy`
   (archived, correctly no CoC) would have been the second false positive. ⇒ **Derive the target set
   from what the site links, never from what a repo "should" contain.** F-c's class, reached from a
   new direction.
2. **The narrowing is stated, not silently applied.** The build publishes **128** unique own-org
   GitHub URLs; ~95 are per-page "edit this page" links. `gate-43` gates 7 of them and says so in its
   header. A bounded scope that goes unmentioned reads as full coverage — convention 14's family, and
   the reason P3.3's partial pass read as a clean bill of health.
3. **`gate-42` widened P4.2's F20 refutation by ~56×** — 4 routes × 2 themes became 224 × 2, still
   **0 console errors**. The refutation was already sound; it is now standing evidence rather than a
   one-off probe. This is the gate class earning its keep on the day it ships, without discovering
   anything: what it converts is a *measurement someone once took* into a *fact that stays true*.

**Verification `[D]`** — full suite **587/587, zero failures** (1.6 min), **derived from the run**:
578 + 9, three gates × three tests each; no other spec moved. Red-tests **7/7 · 6/6 · 7/7** =
14 planted mutations caught + 6 controls. Tree verified clean after every harness (each restores in
a trap and re-runs the gate green as its final control); the only files containing mutation strings
are the harnesses themselves. `astro check` unchanged at F-j's baseline. **Nothing deployed** —
⛔⛔ the freeze holds, re-verified at open (`git cat-file -t` fails on both `30c8163` and `f4fa9c5`).

⏭ **NEXT = A3** — ⛩ the Vitruvius ask (⊳ D-E, row F-e; gates P4.4b's AC4) + the mission AAR. A3 is
an **outward act** and needs its own operator GO.

### 2026-08-24 — ✅ P4.4a A1 COMPLETE. The register went 16 live → 6, all six routed.

**Session** `session_stanley_20260824_230056_haussmann_p4_4a_a1_register` (resumed after a context
crash; the predecessor's work was committed before the crash and nothing was lost).
**Commits** `3cc659f` · `ffcc0f3` · `0c97af3`.

| Row | Disposition | Evidence |
|---|---|---|
| `F-o` | ✅ fixed | `machine_eye_item11_probe.mjs`, red-proven **12/12** |
| `F-p` | ✅ fixed | `gate-17` guards on routes, red-proven **10/10** |
| `F-i` | ✅ fixed | `gate-27` scans `.json`, red-proven **11/11** |
| `F-f` | ✅ fixed | `check_live_headers` compares values, red-proven **10/10** |
| `F-c` | ✅ fixed | `gate-41` G41b + register §15.1 |
| `F-a` | ✅ fixed | `gate-4` + `best-practice`, red-proven **6/6** — ⛩ pulled forward |
| `F-u` · `F-g` · `F-l` · `F-r` | ✅ closed | AC0 · comment corrected · doctrine §6.10 · convention 17 |
| `F-m` · `F-n` | ⛩ **fenced, NOT fixed** | `gate-41` G41c/G41d, dated ratchets |
| `F-e` → A3 · `F-k` → template release · `F-d` · `F-j` → A1b | ⛩ routed | destinations named on each row |

> ⚠ **THE TABLE ABOVE SPELLS ITS ROW IDS IN BACKTICKS, NOT BOLD, AND THAT IS DELIBERATE — F-q's
> class, recurring inside the commit that closes the register.** Written first in the register's own
> `| **F-x** |` shape, this summary made the canonical derivation
> (`grep -cE '^\| \*\*F-[a-z]\*\*'`) read **26 total / 13 live** instead of **19 / 6**: the
> record of the counts had become part of what the count counts.
>
> ⭐ **That is precisely the shape F-q named** — *an instrument whose OUTPUT changes its own INPUT
> cannot hold a baseline* — and F-q was **struck as discharged four rows above**, in this same
> session, on the grounds that its instance was gone. **The instance was gone; the class was not.**
> Same session, one level up: the earlier one was a gitleaks baseline that rose each time an agent
> documented why the scan was clean; this one is a debt tally that rose because the debt was
> summarised in the debt register's own grammar.
>
> ⇒ **A derivation is only as specific as the grammar it keys on.** Keeping the `| **F-x** |` shape
> unique to the register costs one character per row and keeps every count in this campaign
> reproducible. **Do not restore bold here.**


**Verification `[D]`** — suite **578/578** (574 + gate-41's 4, derived; no other spec moved) ·
`alias_guard_redtest` **13/13** · `token_census_redtest` **10/10** · `astro check` **26 errors**
(F-j's baseline, re-measured, unchanged) · alias re-probe `/` `/vaults.json`
`/api/registry.v1.json` `/state-of-the-network/` all **200**, `/.well-known/adna-build.json` **404**
(the documented pre-bootstrap state) · ⛔ **freeze re-verified at open AND close** — `30c8163` and
`f4fa9c5` both `fatal`.

#### ⭐ The three findings worth carrying

1. **The obvious repair for F-o would have re-created F-o.** Counting capability tokens instead of
   the substring `mcp` fails, because `/.well-known/mcp.json` returns **1 hit on a site with no MCP
   server** — the changelog says the endpoint 404s. **This site's honesty stratum guarantees it
   names its own absent capabilities in prose**, so every text probe finds the disclosure of absence
   and scores it as presence. *The better the site's honesty, the more false the text limb.* No
   filter repairs a probe whose signal and noise are the same string ⇒ **retirement, not filtering**.

2. **Two rows had TYPED what they should have DERIVED, and both would have shipped red.** F-i named
   three enums; the derivation found **seven**. F-a estimated *"will surface pre-existing
   violations"*; the measurement found **zero**, and that estimate had deferred a one-line change
   for **four missions**. ⇒ **KW-14 applies to a row's own scope claim, not only to what a page
   narrates** — and *measure the cost before paying the caution*.

3. **Three instruments reported a PRECONDITION failure in the vocabulary of a SUBJECT failure.**
   The F-o harness read 5/12 with the probe correct throughout (**Docker held the port**; the
   readiness check accepted *"something answers"* as *"my server is up"*). `alias_guard_redtest`
   read **10/13** with the guard correct throughout (**deploy_adna.sh's clean-tree guard** firing on
   this session's own uncommitted file). A `-g` fragment containing regex parens matched no test and
   reported as a failure. **None of the three was a wrong instrument** — each was a correct
   instrument whose failure vocabulary could not distinguish *"I could not run"* from *"the thing is
   broken"*. Both harnesses now assert identity/preconditions up front.

⚠ **A1b's scope, named rather than discovered:** F-j (**26 errors**, re-measured; a real editing
session, not a gate fix) and F-d (**needs design**, and is **downstream of convention 17** — an
absence assertion that does not name its surface cannot express what F-d asks for). Plus **F-m's
index backfill** and **F-n's MANIFEST content review**, neither of which a green `gate-41` implies.

⏭ **NEXT = A2** — the three rescoped-in gate classes (zero-console-error · off-site CTA-target
*(regression guard, not discovery)* · hub-substance floor F19). Ruling 2's token census already
shipped as `gate-40`. Then **A3** — ⛩ the Vitruvius ask + AAR.


### 2026-08-24 — ⛩ AMENDMENT SIGNED · P4.4a A0 + A0v COMPLETE · ruling 2 shipped

Session `session_stanley_20260824_221214_haussmann_p4_4a_ac0`. Commits `9b429e1` (cascade) ·
`4a9bc09` (AC0 + V5) · `ff4ad51` (gate-40). ⛔ **Nothing deployed. The freeze holds.**

| Objective | State | Evidence |
|---|---|---|
| **A0** — the ancestry guard | ✅ | `inject_build_stamp.mjs` · `check_alias_ancestry.mjs` · the guard + `--dry-run` + two dated flags in `deploy_adna.sh` |
| **A0v / V5** — red-prove it | ✅ **13/13** | `alias_guard_redtest.sh` — 5 mutations · 2 named controls · 4 further controls · the enumeration limb · **case 9** |
| **Ruling 2** — gate the census | ✅ **10/10** | `gate-40-token-census.spec.ts` + `token_census_redtest.sh` |
| **A1** — the 16 live register rows | ⏭ next | `F-o` first (drift accelerating) |
| **A2** — the three gate classes | ⏭ | zero-console-error · off-site CTA-target · hub-substance floor |
| **A3** — ⛩ Vitruvius ask + AAR | ⏭ | outward act, needs its own GO |

**Suite 571 → 574**, derived: exactly gate-40's three tests, no other spec moved. gitleaks **884
commits, no leaks**. Freeze re-verified at open **and** close (`git fetch` then `cat-file -t` — both
still fatal).

⭐ **AC0's design pass changed the instrument, and the build then found the gap the design had not.**
The 7-case matrix covers the guard's *refusal* logic — but cases 1–8 all drive `--dry-run`, which
exits **before the injectors run**. Delete the `inject_build_stamp` line and all twelve still pass,
while the alias would never be stamped again, the guard would 404 forever, and every deploy would
demand a bootstrap flag until someone built the forbidden branch. **The guard and the writer are one
instrument**; a harness testing only the refusing half is convention 13's partial-pass shape.
⇒ **case 9**, red-proven by deleting the call.

⭐ **Three design calls worth re-reading before A1:**
1. **Exit codes 1 vs 2 are load-bearing.** 404 → exit 2, a real violation → exit 1, and
   `--bootstrap-stamp` can only forgive exit 2. That is how the bootstrap exception is *structurally*
   prevented from becoming the standing `no stamp ⇒ allow` branch — it cannot reach the ancestry
   branch at all (case 7c).
2. **The escape hatches are DATED, and that is the mechanism.** `--force-rollback=YYYY-MM-DD` must
   equal today UTC, so it self-expires and cannot be pasted into a runbook or aliased into the
   default. *An escape hatch that does not expire is the habit.*
3. **`--stamp-url` exists only under `--dry-run`, and that refusal is itself red-tested (case 8).**
   The red-test drives the **real** `deploy_adna.sh`, because a red-test of a copy is not a red-test
   of the thing — and the affordance enabling that is confined to a path that cannot publish.

⚠ **FIVE instruments of mine were wrong before the subject this session** (seventh consecutive
session), every one caught by a control rather than by vigilance:
- A meta-test of the red-test **reported a false pass**: the mutation never applied (shell quoting),
  so case 9 stayed green for the wrong reason. Caught by asserting the mutation applied — *the rule
  the harness enforces on its own cases and which I had not applied to my test of it.*
- A comment filter used `\s`, **unsupported in BSD grep's BRE**, working only by accident for
  column-0 comments. "Happens to work" is how the next person inherits a decorative assertion.
- The token red-test's **control declared gate-40 not-green while playwright printed `3 passed`** —
  `grep -q` under `set -o pipefail` SIGPIPEs the producer and the pipeline reports failure. **A green
  gate read as red.**
- The `shadow` family was **silently unproven**: the chosen victim carries a declared shadow
  exclusion, so a planted shadow is correctly swallowed and the case passes *by not running*. Fixed
  with a second victim **plus a guard asserting that victim is not itself in `EXCLUSIONS`**.
- An injector "happy path" test **failed against a tmpdir** and read as a defect; it was the guard
  working correctly (a non-repo surface dir has no commit to stamp). Re-tested with a git-backed
  fixture, then against the **real build**.

⚠ **`/.well-known/adna-build.json` is 404 on the live alias right now**, and that is the *documented*
pre-bootstrap state, not a fault — it is red-test case 5 confirmed against production. The first
prod deploy after the freeze lifts needs `--bootstrap-stamp=<that day>` **once**, with a GO.

⚠ **A one-word deviation from the ratified design, recorded rather than silent:** the stamp emits
**`built_at`**, not the design's `deployed_at`. The stamp is written post-build and **pre-upload**,
so at write time no deploy has happened and a field asserting one is a claim about the future — in a
campaign whose first convention is that claims move DOWN to verifiability. The guard contract is
unchanged (it reads `.commit` only).

### 2026-08-24 — ⛩ OPENED AT THE PRE-BUILD GATE, AND HALTED THERE. No build started.

Session `session_stanley_20260824_213413_haussmann_p4_4_ci_hardening`. Claimed from this file's own
`status: queued`, not from the campaign index line (stale four times). **Freeze re-verified at open:**
`git cat-file -t 30c8163` and `f4fa9c5` **both fail** — lemur has not pushed; **the freeze holds**, and
P4.1 + P4.2 remain built-not-deployed behind it. 8 commits unpushed.

Three passes ran **before** any scoping, per P4.1's SO#11 ruling that *convention 13 runs before a DP
ratifies a budget*. All three are artifacts, not prose in this file:

| Artifact | Result |
|---|---|
| `artifacts/p4_4/register_reread_20260824.md` | **19 rows re-probed at the object.** 3 **DISCHARGED** · 1 narrowed · 4 **worsened** · 11 unchanged |
| `artifacts/p4_4/f_u_alias_guard_design.md` | F-u's premise corrected — **a lease would not have prevented F-s**; the right primitive is an **ancestry guard** |
| `artifacts/p4_4/convention_13_pass.md` | **30/30 pairs, coverage recorded.** 4 defects · 1 structural gap. **Zero of five criteria executable as written** |
| `artifacts/p4_4/ac_amendment_proposal.md` | ⛩ **`status: proposed` — awaiting signature. NOT applied.** |

⭐ **THREE ROWS OF THIS REGISTER WERE ALREADY DEAD, AND NOTHING SAID SO.** `F-b` + `F-q` were closed by
a `.gitleaks.toml` allowlist landed at **P3.4, 2026-08-22** — verified at the object, not cited from
P4.2's green: `gitleaks detect --source .` → **881 commits scanned, no leaks found**. `F-h` discharged by
performing the re-read it asks for: all **4/4** `vercel.json` header **values** match what the alias
serves. ⇒ Scoping from the register as written would have funded three fixes for defects that no longer
exist. **The mission's own ⚠ instruction to re-read every row first is the only reason this was caught.**

⭐ **AND FOUR ROWS UNDERSTATE THEMSELVES.** `F-m` twelve → **thirteen** ADRs behind (index tallies 41,
highest row 046, `updated: 2026-07-02`; disk holds **54**, highest **059**). `F-n` 45 → **49** days.
`F-o` **5 → 11** hits in three days — *the row predicts its own drift and the drift is accelerating*.
`F-k` widens to change an owner: `.adna/` has no pre-push hook at all (`FAIL_NONE` confirmed), **and
this vault's own hook is md5 `216aaca…` — the proven v1 no-op**, so the vault that will fire
`skill_template_release` to ship the fail-closed v2 is not itself covered by it.

⭐⭐ **F-u ASKS FOR THE WRONG INSTRUMENT.** Replay F-s with a perfect single-writer lease held
throughout: lemur deploys and releases, this node deploys `922519c` and releases, **and v0.4.3 + the Arch
repo are un-published anyway.** The two deploys **never raced** — they were sequential and still
destructive. A mutex reasons about *time*; the defect is about *content*. The invariant is *never publish
a tree that does not contain the commit currently serving the alias*, which needs the alias to be
**self-describing** (`/.well-known/adna-build.json`) because `deploy_log.txt` is per-checkout — *a log on
the machine that deployed is not evidence available to the machine about to deploy*, which is exactly
why F-s was invisible. The guard fires correctly in **both** directions, including the restore that fired
the hazard backwards under an operator GO while following every rule then in force.

⭐ **A free design constraint fell out of discharging F-h, and it is recorded so F-f's implementer
inherits it rather than discovering it.** The alias also serves `strict-transport-security`, which is
**not in `vercel.json` at all** — Vercel injects it. ⇒ a field-by-field comparator must assert
`expected ⊆ served`, **never set-equality**, or it false-fails on a platform header on its first live
run. That is the shape of all five instruments this campaign has shipped wrong.

⚠ **AC2 is unreachable by anything this mission does**, and it is the **sixth** instance of a criterion
whose prerequisite does not exist on the performing tree: *"field data flowing"* needs the instrumented
build **in production**, which the freeze blocks until **lemur** — another machine — pushes, and then
needs traffic and calendar time for a p75 to exist. ⚠ **AC4's method is likewise impossible today**:
`lighthouse_profiles.json` is **0 hits vault-wide**, so *"read from profiles"* names a mechanism that
does not exist — **P4.2's AC3 recurring exactly**.

⛩ **HALTED for operator signature on the amendment.** Nothing builds against un-ratified criteria.

## AAR (SO#5)

> **Scope: P4.4a only** (A0 · A0v · ruling 2 · A1 · A2 · A3). **P4.4b has not started** and its AAR is
> B3's. Filed 2026-08-24 at A3, session
> `session_stanley_20260824_181438_haussmann_p4_4a_a3_vitruvius_aar`.
> **Criteria: AC0 ✅ (the ancestry guard) · V5 ✅ (the 7-case matrix incl. both controls).** Both of
> P4.4a's criteria are met. AC1–AC4 are P4.4b's and are untouched.

**Worked** — **red-proving every gate, on a mission where nothing a gate could catch was still
broken.** All four A2/ruling-2 gate classes went **green on their first run**, because F20 tested
false at P4.2 and R-122/R-123 and F19 were already closed. That is the exact state in which a real
assertion and a no-op are indistinguishable, and the only thing separating them is a mutation that
should turn the gate red. **14 planted mutations caught + 6 controls** (7/7 · 6/6 · 7/7) plus AC0's
7/7 — the red-tests were not a formality on this mission, they were the entire evidentiary value.

**Didn't** — **A1's re-read pass ran in force and still confirmed a false premise, because it re-ran
the row's own command instead of re-deriving the row's question.** F-e says *"`find . -name
lighthouse_profiles.json` → 0 hits vault-wide"*; A1 re-ran precisely that, got 0, and wrote *"still
impossible."* The file was there the whole time, in the peer vault the row names, at a pin we already
hold — and **three of the row's four load-bearing claims were false**, including the one that made it
an ask at all. The discipline that has repeatedly saved this campaign has a blind spot exactly the
width of the instrument it re-runs. **F-m/F-n also remain fenced by `gate-41` rather than fixed** — a
ratchet is not a discharge, and the register says so on its face.

**Finding** — **every defect this mission actually found was an instrument whose own premise had never
been measured, and the output looked clean in all four cases.** `F-a` deferred a one-line fix for four
missions on an estimate — *"widening will surface pre-existing violations"* — that measured **zero**
across 23 pages × 2 themes. `gate-43`'s first design probed a fixed `CONTRIBUTING/CODE_OF_CONDUCT/
LICENSE` triple and called a **correct** policy repo broken, because the probe's assumed shape was
never checked against what the site actually links. `gate-4` **cannot defend its own tag set** — swap
the tags for a string matching no rules and it stays green, so *nothing was wrong* and *nothing was
checked* are the same green. And F-e's `find` reported *"vault-wide"* over one vault. ⇒ **The
instrument's scope is the unmeasured variable, and a clean output is not evidence about it.** This is
convention 16's law (*a negative result is only as wide as the command that produced it*) generalised
from greps to gates, estimates and probes.

**Change** — **re-reading a row at the object means re-deriving its question, never re-running its
command.** The row's command already encodes the row's assumptions; re-running it can only reproduce
them. The corrected practice, adopted here: **ask what would have to be true for the row to be true,
and go measure that** — for F-e, *"does this file exist anywhere the ask could reach"* and *"what do
our bars actually read"*, neither of which the row's own `find` was capable of answering. Second, on
the same failure's other face: **diagnosis and prescription are separate acts** — F-e prescribed a
*mirror* at the moment of diagnosis, exactly as F-u prescribed a *lease*, and both remedies were wrong
while both diagnoses were sound. Two instances now; this is a pattern, not a coincidence.

**Follow-up** — **six register rows stay live and every one carries a destination.** `F-d` · `F-j` →
**A1b** (design work and a 26-error editing session respectively, deferred for cost with the baseline
**re-measured**, not assumed). `F-k` → the next `skill_template_release`. **`F-m` · `F-n` fenced by
`gate-41`, fix outstanding** — ⚠ **F-n must never be cleared by bumping a date**; `updated:` claims the
content was *reviewed*. `F-e` → the ask is **staged, not delivered**, and its **residual is the real
debt**: our gate-19 bars are **un-sourced**, which **P4.4b's AC4 does not close by hashing a mirrored
file** (AC4's row is amended to say so, and B2 must not be built before Vitruvius answers). Also owed
and named rather than assumed: **three memos to Vitruvius sit staged and undelivered**; ⛩ Hopper's
`ack_required`; Pygmalion; Mondrian #9; P3.3 O2 (`npm login`); P2.6 O0b.

⛔⛔ **BUILT, NOT DEPLOYED — and this is the THIRD consecutive mission accumulating unshipped work.**
The freeze holds: **lemur's `30c8163` + `f4fa9c5` re-verified absent** at this session's open and at
its close (`git cat-file -t` fatal on both). **P4.1 · P4.2 · P4.4a are all built-not-deployed.** Said
here rather than left to be inferred from a `completed` status that cannot express it. ⚠ The first
prod deploy after the freeze lifts needs `--bootstrap-stamp=<that day>` **once** —
`/.well-known/adna-build.json` is 404 live, which is the documented pre-bootstrap state and not a
defect.

### Token budget (SO#11 / ADR-016)

| | Figure |
|---|---|
| Ratified band (P4.4a) | **~600–750 kT**, ⛩ re-raised + operator-ratified 2026-08-24 at A2's open, superseding ~280–420 kT (itself a ratified re-raise from ~220–330 kT) |
| Actual, P4.4a total | **≈555–635 kT** — ≈475–545 kT through A2, plus A3 ≈80–90 kT |
| Delta | **Inside the band**, at or just under its floor. **No retrospective triggered** (SO#11 fires at > 2×) |

⭐ **The re-raise is what made this honest, and it is worth recording as a mechanism rather than a
number.** A0+A0v+A1 had consumed ~310–380 kT of a ~280–420 kT band **before A2 and A3 started** — the
band was already spent. SO#11 requires that be taken as an **operator act** rather than absorbed in
silence, which is the entire point of declaring a budget; taken that way, the re-raised band then held
across two further objectives without further movement. ⚠ **A3 landed at the top of its ~80–120 kT
allocation's lower half despite widening**: the finding turned a file-copy ask into a
premise-withdrawal memo plus three operator-selected close items. **`executor_tier: opus` was declared
per increment and honoured** — P4.1's AAR recorded four sessions running `opus` under a `fable`
declaration, and *a declared tier nobody honours is worse than none*.
