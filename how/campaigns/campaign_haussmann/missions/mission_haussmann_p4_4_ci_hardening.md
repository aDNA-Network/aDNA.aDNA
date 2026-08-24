---
plan_id: mission_haussmann_p4_4_ci_hardening
type: plan
title: "P4.4 — CI hardening: visual regression, live-header watch, field p75, the whole-site sweep"
campaign: campaign_haussmann
phase: P4
decade: 2
owner: stanley
status: in_progress   # ⛩ AC AMENDMENT OPERATOR-SIGNED 2026-08-24 (artifacts/p4_4/ac_amendment_proposal.md, `accepted`) — the pre-build gate found ZERO of five criteria executable as written; six criteria changes applied, mission SPLIT into P4.4a/P4.4b in-file (P4.5a/b precedent; mission_count HOLDS AT 27). P4.4a OPEN AT AC0 (the ancestry guard = F-u, the deploy freeze's release condition). P4.4b NOT started — every one of its criteria waits on an actor outside the session. Prior status was `queued` under ⛩ DP6 2026-08-19; the RESCOPE-UP recorded there (three gate classes + ⊳ D-E) survives into P4.4a unchanged.
mission_class: build
increments: [P4.4a, P4.4b]        # in-file, NOT separate mission files — mission_count holds at 27
executor_tier: opus               # P4.4a. ⚠ SPLIT PER INCREMENT — P4.4b is `sonnet` (see increment table). P4.1's AAR: `executor_tier: fable` sat unremarked for four sessions while every session ran opus. A declared tier nobody honours is worse than none.
executor_tier_p4_4a: opus         # AC0 design + register adjudication are judgment-heavy
executor_tier_p4_4b: sonnet       # mechanical: snapshot project, sweep config, budget wiring
token_budget_estimated: "⛩ RE-RAISED AND RATIFIED 2026-08-24 → ~530–820 kT across 4–5 sessions (P4.4a ~280–420 kT / 2–3 · P4.4b ~250–400 kT / 2). That is ≈2.4× the prior figure, stated rather than hidden — and almost exactly P4.1's MEASURED overrun (≈2.36×), which is the argument the estimate is honest rather than padded. SUPERSEDES: ~220–330 kT across 1–2 sessions, which predated F-i…F-u, the three rescoped-in gate classes and AC0, and which this file already flagged as a live under-estimate."
token_budget_actual:
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
  - "AC1 [P4.4b · AMENDED] — Visual-regression gate live: Playwright toHaveScreenshot on ~12 key templates × 2 themes, baselines GENERATED IN THE CI CONTAINER; reg-actions-style diff report on PRs; the old deferral formally closed. AMENDMENT: the red-test runs IN THE SAME CONTAINER that generated the baselines — a diff produced on a developer machine is not admissible evidence for this criterion."
  - "AC2 [P4.4b · REPLACED] — The field-p75 instrument is CHOSEN, WIRED INTO THE APP AND SHIPPED IN THE TREE, with the operator's dashboard action and the first reading NAMED AS OWED on this mission's face together with their unblock condition (deploy-freeze release + traffic accumulation). AC2 is met ON-BUILD; the reading is NOT claimed. (P3.3's publish-gated O3 and P4.1's AC5 are the precedents.)"
  - "AC3 [P4.4b · AMENDED] — Unlighthouse whole-site sweep on a schedule, budget-failing; fixtures remain the per-route gate. AMENDMENT: it sweeps the CI-BUILT ARTIFACT (reproducible, matches HEAD, no freeze dependency), weekly, failing loudly into CI. Production sweeps are EXPLICITLY OUT OF SCOPE and belong with convention 16's deliberately-unbuilt monitor. ⚠ AC1×AC3 contention: both drive a browser over the whole site and MUST NOT co-run (convention 6)."
  - "AC4 [P4.4b · REPLACED] — CWV budgets adopt the WebForge class-keyed + ratchet discipline. PROVENANCE IS TESTED, NOT ASSERTED: the budget file records the source profile's hash and a gate fails when the two disagree. If ⊳ D-E's mirror has not landed when this criterion is executed, the budget is transcribed AND NAMES THE SOURCE IT WAS TRANSCRIBED FROM AND THE DATE (convention 4's own interim clause), and that state is reported as a gap, NEVER as adoption."
verification_method: "V1–V4 unchanged in kind (red-tests: deliberate visual diff IN-CONTAINER; deliberate budget breach; one scheduled sweep run; field instrument shipped-in-tree). ⛩ V5 ADDED 2026-08-24 — the 7-case red-test matrix in artifacts/p4_4/f_u_alias_guard_design.md INCLUDING ITS TWO PASSING CONTROLS. GAP-1 was that none of the four existing V-limbs touched AC0, so AC0 could have been ticked with no guard built — P4.1's structural gap inverted (there an objective had no criterion; here a criterion had no verification). A refusal instrument that refuses everything is as useless as one that refuses nothing."
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
| **A1** | **The register.** Discharge or re-route the **16 live rows**, F-o first (its drift is accelerating). Includes the four gate fixes (F-a · F-i · F-j · F-p) and the three derived-count gates (F-c · F-m · F-n) | register at zero-or-routed | — |
| **A2** | **The three rescoped-in gate classes** (zero-console-error · off-site CTA-target · hub-substance floor) **+ the token census as a gate** (ruling 2) | gates + red-tests | — |
| **A3** | ⛩ **Deliver the Vitruvius ask** (ruling 3) + AAR | memo + AAR | ⛩ operator (outward act) |

### P4.4b — the three new systems (`sonnet`, ~250–400 kT, NOT STARTED)

| # | Objective | Output | Gate |
|---|---|---|---|
| B0 | Visual-regression lane (containerized baselines; masked dynamic regions; 12 templates × 2 themes); red-test **in the baseline-generating container** (AC1's amendment) | gate + red-test | — |
| B1 | Field instrument **shipped in the tree** (AC2 as replaced); the dashboard action and the first reading **named as owed**, with their unblock condition — **not claimed** | wired instrument + owed-list | ⛩ operator (enable) |
| B2 | Unlighthouse scheduled sweep over the **CI-built artifact** + budget config; **provenance tested by hash**, not asserted (AC4 as replaced) | sweep + budgets | ⊳ D-E (Vitruvius) |
| B3 | Close `idea_visual_regression_gate` (resolved) + runbook updates + AAR | records + AAR | — |

⚠ **B0 × B2 must not co-run** — both drive a browser over the whole site (convention 6).

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
| AC4 | ~~"read from profiles, never transcribed"~~, tested by a budget breach | **provenance tested by hash**; interim transcription **names its source + date** and is reported as a gap | DEFECT-4: **the distinguishing claim was tested by nothing** — a breach test proves a budget fails when exceeded, and **a transcribed budget breaches identically**. Plus the method is impossible: `lighthouse_profiles.json` → **0 hits vault-wide**, re-verified 2026-08-24. ⭐ **P4.2's AC3 recurring exactly** — a criterion whose verb names a mechanism that does not exist |
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
| **F-a** | **The gate suite is blind to everything axe classes `best-practice`.** `gate-4` filters `.withTags(['wcag2a','wcag2aa'])`, so a real `empty-table-header` on `/community/proposals/aep-1/` **passed a fully green 512-assertion suite** and was caught only by the T0 sweep (`scripts/visual_capture.mjs --axe`, which uses axe's default ruleset). P3.5 added the routes to gate-4 — that locks WCAG AA on them and **does not close this class**; the scope limit is stated in-file at `gate-4-a11y.spec.ts` | P3.5 AAR | Decide deliberately: widening `gate-4` to best-practice across all ~23 pages will surface pre-existing violations, so it is a scoping decision, not a one-line change |
| ~~**F-b**~~ | ✅ **DISCHARGED 2026-08-24 — DO NOT BUILD** (evidence in the note). ~~**`gitleaks` false positive**: `how/campaigns/campaign_haussmann/artifacts/webforge_pattern_register.md:23` trips `generic-api-key` on the phrase *"DTCG **token** pipeline"*. Public since 2026-08-16, not a secret. The pre-push hook scans **outgoing changes only** so it stays clean, but a full-history `gitleaks detect` always reports `leaks found: 1` | P3.5 AAR | Allowlist it. A scanner that always cries once is a scanner whose output stops being read — which is the failure mode that matters before any host move (Git-Ops §7)~~ — ⭐ **CLOSED BY `.gitleaks.toml`, which landed at P3.4 (2026-08-22), AFTER this row was filed, and nothing said so.** Verified **at the object**, not cited from another mission's record (convention 14 — a green someone else ran is still someone else's green): `gitleaks detect --source .` → **881 commits scanned, no leaks found**. The allowlist regex `^measured\+gating$` suppresses the **Secret gitleaks extracted**, not the readable phrase around it — and the config's own comment already carries P4.4's lesson: *a suppression that suppresses nothing looks identical to one that works until you count.* F-b's remaining intent — *a scanner that always cries once stops being read* — is **satisfied**: the baseline is **0**, a threshold that means something. Evidence: [[register_reread_20260824]] |
| **F-c** | **Wire `artifacts/p3_5/derive_register_counts.py` into the suite.** It pins the claim register's looser, §8.6-comparable parse, but still has to be **run and pasted by hand**. A gate that fails when a published count disagrees with the derived one is the other half | P3.5 AAR (§9.5 opened it) | Closes the "undocumented derivation" item: two defensible parses of the same table differ by 2 rows |
| **F-d** | **`gate-26` cannot express "a retired claim must stay gone"** for a row that was never `FALSE` | P4.5a AAR | The R-125 class — an `unsupported → cut` row has no regression guard today |
| **F-e** | **⊳ D-E — mirror `lighthouse_profiles.json`** into `how/federation/webforge/`, or amend campaign convention 4. Already in this mission's frontmatter; repeated here so it is visible where the work is scoped | ⛩ DP6 | `find . -name lighthouse_profiles.json` → **0 hits** vault-wide, so every gate-19 bar is currently a transcription |
| **F-f** | **`check_live_headers.mjs` compares header NAMES, not VALUES.** P3.1 hardened it to assert `res.ok` + same-origin (it had been reading `vercel.com`'s login page and printing `OK — no drift`), but a **correct-name / wrong-value** drift still passes on prod today. The fix is a field-by-field comparison against `vercel.json`'s `/(.*)`  block — a bigger change to a shared deploy tool than P3.1 should have made mid-mission | P3.1 AAR | The instrument now refuses when it cannot reach the target; it still cannot tell you the CSP it read is *yours*. Convention 14 is the general rule this row implements |
| **F-g** | **`stripHtmlComments()`'s second root is inert.** It walks both `dist` and `.vercel/output/static`, and its comment claims the dual walk means "the strip cannot be defeated by hook ordering." Measured at P3.1: **the adapter copies AFTER `astro:build:done`**, so at hook time that path holds either nothing or the *previous* build. The strip is safe — because the adapter copies the already-stripped `dist` afterwards, a different mechanism than the one documented | P3.1 AAR | Not broken; the comment misleads the next person who relies on it. Same ordering fact means **an Astro endpoint cannot read build output** — that is why the llms-full corpus is appended post-build |
| ~~**F-h**~~ | ✅ **DISCHARGED 2026-08-24 — DO NOT BUILD** (evidence in the note). ~~**⚠ Re-read P0.2's header evidence against the alias.** P0.2 built header hardening *on preview deploys only* and verified it with the instrument in F-f — before either of its defects was known. Its header claims should be re-verified against `https://adna.network` before being relied on at launch | P3.1 AAR | Flagged, not acted on, at P3.1: P0.2 is not that mission's lane. This is an **evidence re-read**, not a rebuild — the headers may well be correct; what is missing is a verification that reached them~~ — ⭐ **DISCHARGED BY DOING IT.** The row asks for an **evidence re-read, not a rebuild**, so the re-read *is* the work. Performed read-only against `https://adna.network/` on 2026-08-24: **4/4 headers match `vercel.json`'s `/(.*)` block BY VALUE** — CSP, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`. **P0.2's header claims hold.** ⭐ **And doing it by hand produced a free design constraint for F-f's fix**: the alias serves headers `vercel.json` does not name, so the comparison must be `expected ⊆ served`, **never equality** — an equality check would go red on Vercel's own additions. Evidence: [[register_reread_20260824]] |
| **F-i** | **gate-27 leak-lint scans `.html` and `.md` only — `.json` is invisible to it.** `scanTargets()` (`gate-27-leak-lint.spec.ts:136`) filters on those two extensions, so the P3.2 registry endpoints (`/vaults.json`, `/api/registry.v1.json` — 81 KB of published surface, 74 rows of registry prose) are **unlinted**. This is the *identical* hole P3.1 found when 221 `.md` twins arrived unseen, recurring one mission later in a new extension. Fix: add `.json` to the scan, and **scope-allowlist the machine enums** (`org_graph`, `tbd_at_p0`, `genesis_stub`) to those routes and those keys — a JSON field named `class` whose value is `org_graph` is an API contract, not jargon in a sentence — so every *other* leak class (internal paths, mission ids, codenames) still applies in full | P3.2 AAR | The allowlist fixture already supports exactly this shape (`surface` glob + `pattern` + `tokens` + `rationale` + `date` + `reviewed_by`). **Do not skip the gate for JSON; scope it.** |
| **F-j** | **`astro check` has a 26-error pre-existing baseline, so it cannot gate anything.** Measured at P3.2 `[D]`: 26 errors across 7 files — `src/pages/index.astro` (10), `src/pages/vaults/index.astro` (10, all in the client `<script>`), `vaults/graph.astro` (2), `HomeHero.astro`, `Header.astro`, and 2 gate specs. All are DOM typing in inline scripts (`Element.dataset`, `Element.hidden`, implicit `any`) — **none introduced by P3.2**, whose own files check clean. Consequence: P3.2 added `schema-dts` typing to every JSON-LD builder (red-tested — it catches `licence` for `license`), but that safety is **authoring-time only**; a new type error would land in a 26-error wash and CI cannot assert zero | P3.2 AAR | Cheap to fix (cast the query results, type the callbacks) and it converts an existing tool into a real gate. Until then, **do not cite `npm run check` as passing** — it does not |
| **F-k** | **⛩ RULED OURS: `.adna/` has no pre-push secret-scanning hook at all** — verdict `FAIL_NONE`, the worst state, on a tree carrying a live origin (`github.com/aDNA-Network/adna-legacy`). Grace Hopper found it and correctly refused to patch it: Standing Rule 1 makes `.adna/` do-not-modify, and the only sanctioned path is a `skill_template_release` fire **from this vault**. Operator ruled the gate **ours to carry**, `2026-08-21T23:51:27Z` (Decade-2 SITREP composite → `approve`). The fail-closed skeleton v2 (`a1288f73…`) is already row 9 of Git.aDNA's pending batch; §2 makes it ten | Hopper memo §2 (2026-08-20) + ⛩ operator composite | Ships in the **next `skill_template_release`** — an operator-opened gate, so no date is pinned here on purpose. ⚠ **Two constraints from Hopper that change what we ship, not just when**: (a) *shipping v2 into the template does not deploy it* — **one live installation fleet-wide**, so a release note saying "the standard now carries a fail-closed gate" would be read as "the fleet is covered" and would be **false**; the existing-vault sweep is a separate act with a separate owner. (b) any conformance check must resolve **what git actually runs**, not what `.git/hooks/pre-push` appears to contain — `ScienceStanley.aDNA` reads PASS while running the no-op, and `Archive.aDNA/lattice-labs` points `core.hooksPath` at a defunct path outside the workspace |
| **F-l** | **The redaction idiom this campaign uses in its own notes does not redact.** `${VAR:+SET}${VAR:-UNSET}` leaks the value whenever the var **is** set: `:+` emits `SET`, then `:-` emits **the value** (it falls back to `UNSET` only when *unset*), so the two concatenate to `SET<value>`. Run against `SS_VERCEL_TOKEN` at the P3.2-deploy session open, it printed the live token into the transcript. The credential is the known throwaway test-account token whose rotation the operator explicitly de-prioritized (E4 c159, 2026-06-07), so this is **not an incident** — but the idiom is recorded in campaign memory *as the redaction pattern*, and it leaks every time it is applied to a set variable | P3.2-deploy session `[D]` 2026-08-21 | Fix the recorded idiom: **`[ -n "$VAR" ] && echo SET \|\| echo UNSET`**, or `${VAR:+SET}` alone with nothing concatenated after it. ⚠ Same *outcome* as the 2026-06-04 incident (`session_stanley_20260604T160140Z_v8_m510_e1_reskin_deploy`, where the `vercel` CLI printed the same token) by a **different mechanism** — that one was a tool printing a secret, this one is our own probe. Worth a `doctrine_credential_handling` note: the ≤6-char-prefix rule (§428) governs how a leaked value is *referenced afterwards*; nothing governs the probes that produce one |
| **F-m** | **`what/decisions/adr_index.md` is twelve ADRs behind, and nothing notices.** Measured at P3.3 O0 `[D]`: the index reads `updated: 2026-07-02`, tallies **41 ADRs**, and its highest row is **046** — while **047–058 exist as files on disk**, every one of them Haussmann-era (048 positioning, 049 IA, 050 deploy, 051 URL canonicalisation, 052 registry tiers, 055 proposal process, **056 the agentic-surface contract this mission's siblings keep amending**, 057 same-diff gate law, 058 installer). An index that is the documented way in to the decision record, silently missing the decisions the current campaign is making | P3.3 O0 `[D]` | Same family as **F-c**: a published tally that disagrees with the derived one should fail a gate rather than wait to be noticed by someone opening the file for another reason. Cheap derivation: count `adr_*.md` in `what/decisions/`, compare to the index's tally and to its highest row. ⚠ Note the numbering hole is legitimate — **015 and 018–021 were never assigned** (F-CHM-206) — so the check compares *presence*, not contiguity |
| **F-n** | **No check compares a vault's `MANIFEST.updated` against its `STATE.updated`** — and a peer measured the consequence across the fleet before we did. Ilmarinen (`coord_2026_08_21_ilmarinen_to_hestia_rosetta_manifest_pull_was_staler`) sampled 12 vaults: **8 are 34–52 days behind**, including **this one at 45 days**. Their own case is the sharp one — `Forgejo.aDNA`'s MANIFEST denied in prose ("*no deployment, no infra, no install*") a service that had been in production for two weeks and is now the fleet's container registry and git host. Root cause is structural, not sloppiness: the startup checklist reads `CLAUDE.md` → `STATE.md` → campaign → `what/context/`, and **`MANIFEST.md` is in none of them**, so nothing ever brings a reader back to it | Ilmarinen memo §1–§3 `[D]`, intaken at P3.3 O0 | A two-line gate (compare the two `updated:` fields, fail past a threshold) closes it for this vault. ⚠ **The fleet-wide half is not ours** — Ilmarinen offers it to Hestia as a *staleness floor* on any registry pull, and registry data is pt19/Hestia's lane. What P4.4 can own is the local check. Recorded here so a peer's measured finding is **dispositioned rather than merely mentioned** — Berthier's own §3 lesson from the same week |
| **F-o** | **`machine_eye` item 11's text-search probe has gone NOISY, and a future re-run will misread it as moved.** The genesis probe had two halves — fetch the endpoints, and text-search the site for `mcp`. On 2026-08-16 the text half returned **0** hits outside one vault description. Re-measured live at P3.3 O3 `[D]`: **5** hits in `llms-full.txt`, and **not one is a capability claim** — Playwright MCP named as a tool in `/doctrine/visual-inspection` (×2), `.mcp.json` gitignore advice aimed at the reader (×2), and the original Warp.aDNA vault description. Nothing changed but the corpus: P3.1 grew `llms-full.txt` from 2 KB to 950 KB and swept the mentions in. ⇒ **A future `grep -c mcp` scores 5 and concludes item 11 moved. It has not.** Fix: the probe must separate *the site mentions MCP* from *the site offers an MCP server* — only the endpoint half can decide that, and the text half needs a negative filter or retirement. *(Convention 15's staleness class through a side door: the probe did not change and the site did not lie — the corpus underneath the probe changed, and the probe's meaning changed with it.)* |
| **F-p** | **Gate-17 G15's skip guard tests for the wrong thing, so the documented workflow leaves it guaranteed-red.** G15 asserts one `Vary`-carrying negotiation route per twin against `.vercel/output/config.json`. Its guard is `test.skip(!existsSync(configPath), 'run npx astro build …')`. But that file exists as soon as **any** post-build inject step has run — so following convention 6's own out-of-deploy instruction (`node scripts/inject_redirects.mjs .`) creates the file **without** the routes G15 asserts on, leaving the gate **unskipped and certain to fail on a perfectly good tree** (observed at P3.3 O3 `[D]`; fixed by running `inject_negotiation.mjs`, **no code changed**). Two defects: the guard checks for the *file* rather than the *routes*, and its skip message names a remedy — a bare `astro build` — that **does not inject at all**, which is the exact thing convention 6 exists to warn about. Fix: guard on the presence of `x-adna-twin` routes, and correct the message to name `inject_negotiation.mjs`. |
| ~~**F-q**~~ | ✅ **DISCHARGED 2026-08-24 — DO NOT BUILD** (evidence in the note). ~~**The "expect exactly 1 known gitleaks FP" baseline is SELF-DEFEATING — documenting the false positive creates another one.** Observed live at P3.3 O3 `[D]`: the by-hand scan read **855 commits / 1 leak** before the session's commits and **857 / 2** after. The new finding was in **the session file that documented the first one**, because the record quoted the FP's matched text verbatim to identify it. Both findings share a single literal — `measured+gating`, prose about **design tokens** in `webforge_pattern_register.md:23` — so there is no secret and never was. ⚠ **But the campaign uses "expect exactly 1" as a go/no-go signal before every push, and that number now ratchets upward every time an agent honestly records why the scan was clean.** A baseline that rises when you document it cannot be used as a tripwire: within a few sessions a real leak would arrive as "3 instead of the expected 2" and read as more of the same. **Fix (pick one, P4.4's call):** a `.gitleaksignore` entry or an allowlist regex scoped to that exact literal, so the FP is counted **zero** times rather than N; **or** a rule that records the FP by *fingerprint/commit* and never by matched text. **Do NOT just raise the expected number** — that re-arms the same trap one notch higher. ⇒ **The general shape, and it is the third instrument-defect this session: an instrument whose OUTPUT changes its own INPUT cannot hold a baseline.** *(Related but distinct from **F-o**, where the corpus grew under a static probe; here the probe's own audit trail feeds it.)*~~ — ⭐ **CLOSED BY THE SAME `.gitleaks.toml` THAT CLOSED F-b**, and the fix chosen was the one this row recommended: **an allowlist scoped to the exact literal, so the FP counts ZERO times rather than N** — not the trap-re-arming *"raise the expected number."* The ratchet is gone at the root: the baseline is **0**, so a real leak arrives as **1 instead of 0** and is unmissable. Re-verified at the object 2026-08-24: **881 commits, no leaks found**. ⚠ **The general shape this row named still stands and is worth keeping legible** — *an instrument whose OUTPUT changes its own INPUT cannot hold a baseline* — it simply no longer has an instance here. Evidence: [[register_reread_20260824]] |

| **F-r** | **An absence assertion cannot distinguish a live claim from the changelog entry that retired it.** After P3.4 struck the stale R-95 sentence, a site-wide grep for the struck wording still returns hits — from the **changelog entry whose subject is the false sentence**. The claim is correctly gone from every page that asserted it, and the sweep that proves so reads as red. ⇒ **Every absence assertion must name its surface** (P3.4's live probe scopes each one deliberately; nothing enforces it) | P3.4 close (2026-08-22) | **Routed here in the campaign CLAUDE.md prose and never landed as a row until P4.1's close.** Remedy is a scoping convention plus, if a checker is ever built, an exclusion for `src/content/changelog/**` — but read convention 15's ruling first: the habit costs a sentence and cannot itself be wrong |
| **F-u** ⭐ | **⛔ `deploy_adna.sh` has a clean-tree guard and NO ANCESTRY GUARD ON THE PRODUCTION ALIAS.** ⛩ **RE-WORDED 2026-08-24 — the row asked for the WRONG INSTRUMENT, and the correction changes what gets built. The lease framing below is STRUCK, NOT DELETED**, because the reasoning that a mutex does not address this failure is worth keeping legible: replay F-s with a perfect lease held throughout — lemur acquires, deploys, releases; this node acquires, deploys `922519c`, releases; **v0.4.3 and the Arch repo are un-published anyway.** **The two deploys never raced. They were sequential and still destructive.** A mutex reasons about *time*; the defect is about *content*. ⇒ **The invariant is: never publish a tree that does not contain the commit currently serving the alias** — checkable with no coordination at all, because git knows ancestry and Vercel knows what is live; the only missing piece is that **the alias cannot currently say which commit it is** (`.well-known/` does not exist, verified 2026-08-24). Design + 7-case red-test matrix: [[f_u_alias_guard_design]] (`accepted`). **Now AC0, a first-class criterion with its own verification limb V5.** ⚠ **It does NOT lift the freeze** — release still needs lemur's push and one reconciled deploy; the guard *enforces* that reconciliation instead of relying on two operators remembering it. ~~**NO SINGLE-WRITER LEASE FOR THE PRODUCTION ALIAS** — this is F-s's actual cause and the only part of it that is still open.** Two checkouts of `aDNA.aDNA` exist (this node and **lemur**, deploying through a deputy grant). Each holds commits the other lacks, and **each one's `--prod` deploy silently un-publishes the other's**: lemur's deploys rolled back six days of Haussmann surfaces, and the restore from here then un-published v0.4.3 + the Arch `[adna]` repo (3 × 404 `[D]`). **Neither checkout misbehaved.** Both passed the clean-tree guard; both assumed they were the only deployer. **The guard proves *your tree* is clean; nothing proves *the alias* is not about to be taken.** A standing deploy freeze is the current mitigation and it is a freeze, not a fix — it blocks P4.1 O2's shipped work from reaching production | P4.1 O1 (2026-08-24), cause relayed by Venus from the deputy lane; full record `artifacts/p4_1/finding_live_prod_regression_20260823.md` | **Design the lease before writing it.** The vault's own Governance Doctrine §Single-Writer Lease governs shared *files*; the production alias is a shared *external* resource with no `updated` field to check, so the file-lease pattern does not port directly. ⚠ Whatever is built must be demonstrated to fail (convention 14) — **five instruments have shipped wrong on their first live run in this campaign**, and a lease that reports "clear" when it cannot see the other checkout is worse than no lease, because the freeze at least fails closed~~ — ⭐ **the convention-14 warning was the one that paid off**: designing before writing is what found that the named instrument was wrong. **The guard would have caught F-s in BOTH directions** — lemur's deploy (live commit not an ancestor of lemur's HEAD → ABORT, naming the six days of surfaces about to be rolled back) **and the restore from here** (live commit `f4fa9c5` unknown to this repo → ABORT, the exact probe the freeze runs by hand today). **The second row is the one that matters**: the restore fired the same hazard backwards, under an operator GO, by an agent following every rule then in force. **No discipline available at the time could have caught it.** ⚠ **Stated, not buried — what it cannot do:** it only guards the sanctioned path (a raw `npx vercel deploy --prod` bypasses it entirely, and **ten of F-s's deploys came through the CLI**), it cannot distinguish an intentional rollback from an accident (hence `--force-rollback`, which must be loud, logged and operator-gated or the hatch becomes the habit), and **the first run aborts by construction** because the live alias carries no stamp — the bootstrap exception is a **single dated operator-signed act, never a standing `no stamp ⇒ allow` branch**, which is precisely the vacuity `check_live_headers.mjs` shipped with for four months |

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

*(before completed)*
