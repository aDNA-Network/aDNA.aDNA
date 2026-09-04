---
type: session
session_id: session_stanley_20260904_014553_haussmann_r97_scope
created: 2026-09-04
updated: 2026-09-04
status: active
tier: 1
last_edited_by: agent_rosetta
campaign: campaign_haussmann
mission: null   # ⛩ OPERATOR-RULED ROUTING SITTING. The Grande Revue's ratified Gate-1 order is COMPLETE (B → P4.4b B1+B2a → GR-1 → Lane D) and nothing agent-reachable is queued in the backbone; `P5.1` and `P5.2` are human-gated. The operator ruled the line of advance at this sitting's open: **R-97 first, then GR-5**, and **fix → deploy → panel** for P5.1's stimulus ordering. This sitting opens no mission and closes none — it authors an ADR-048 amendment and HALTS at its ⛩ signature.
increment: "⛩ R-97 — scope the homepage NOT-line, the LAST of four surfaces still carrying the over-promise the campaign has already scoped on three others (`R-64` `/get-started` · `R-161` `/network` · `R-167` `/privacy`). It is ratified ADR-048 copy, so it needs its own gate. Sitting deliverable: the measured amendment, put to the operator. NO copy edit before the signature."
executor_tier_declared: opus
executor_tier_actual: opus
token_budget_estimated: "~70–120 kT / 1 session for the gate half. Costed AFTER reading `gate-49`'s TEMPLATES list (SO#11's O2 retrospective, applied at costing time for the fifth consecutive sitting): ⚠ `/` **IS** a template (`gate-49:50`) ⇒ a `home` re-baseline **WILL** fire, but only in the BUILD half, which is post-signature and NOT in this band. Bands: session open + derivations ~10 · baseline FKGL measurement on `/` (build + census, both ends same instrument) ~15–25 · the four-surface lineage re-verified at each object ~10–20 · the ADR-048 amendment authored with its measured wording options ~20–35 · gate-coverage finding + register note ~10–20 · halt + handoff ~5–10. ⛔ The build half (copy + fixture + red-test + re-baseline + changelog + deploy) is a SEPARATE band, costed at the signature — this campaign's own repeated finding is that a budget ratified before the operator's rulings is costed against a scope nobody has chosen yet."
token_budget_actual: "≈150–200 kT — RECORDED AT THE TIME, not reconstructed. Against the ~70–120 kT gate-half band PLUS the ~80–140 kT build-half band quoted at the signature (~150–260 kT combined): inside it. ⚠ The named overrun driver inside the gate half is the ATTRIBUTION work on `F-ab` — two rebuilt trees × 5 runs each to establish that `gate-47`'s flake rate is comparable with and without this change. That was not in the estimate and it is not scope drift: it is the cost of refusing to ship on an unverified attribution, and it produced the sitting's second-sharpest finding (*a control is a rate, not a run*)."
tags: [session, haussmann, r_97, adr_048, claim_register, pre_build_gate, routing]
---

# Session — R-97: the last unscoped surface, and it is the one the panel reads

## Derived at the open (convention 12 — recon-at-execution; nothing below is carried)

| Fact | Value | Command |
|---|---|---|
| **Clock** | **2026-09-04 01:45 UTC** (local reads `2026-09-03 18:45 PDT` — a local stamp would file this session sorting *before* three sessions that already happened) | `date -u` |
| `main` CI (**convention 19**) | ✅ **green** — run `33815445689`, `success`, 7m28s, 2026-09-03T22:57:34Z | `gh run list --workflow=gates.yml --branch main -L 5` |
| …**its width** | ⭐ green **at `bc8a2d3`, which IS `origin/main`'s tip AND this checkout's HEAD**. **No width gap at all** — the first sitting in this campaign to open that way. The last five runs on `main` are all `success`. | `git ls-remote origin main` |
| …**and it settles `F-ab`(a)'s rerun** | The `bc8a2d3` run that went red on `gate-39` and passed on rerun is **still green**; the flake did not recur on the scheduled/subsequent runs | same |
| `origin/main` | `bc8a2d3` — derived **at the remote**, never at a tracking ref | `git ls-remote origin main` |
| Unpushed | **0** | `git rev-list --count @{u}..HEAD` |
| Production | **`7cef6e0`**, built `2026-09-03T21:37:13.470Z`, `mode=prod` | `curl /.well-known/adna-build.json` |
| Ancestry guard | `7cef6e0` **is** an ancestor of HEAD ⇒ a future ship passes on its own terms; **no override flag needed** | `git merge-base --is-ancestor 7cef6e0 HEAD` |
| Active sessions | **none** — this file is the first | `ls how/sessions/active/` |

## Why R-97, and why before the panel — the reasoning, not the wish

`R-97` is the homepage NOT-line, `site/src/pages/index.astro:137`:

> *"Not a product or service — no server, no signup, **nothing leaves your machine**."*

It is **ADR-048 verbatim** (`adr_048_positioning_statement_embargo_language.md:71`) and the register
classes it `verified (ADR-048 verbatim)` — with the caveat **already written into its own row**:
*"inherits R-64's narrow-scope caveat class (the required agent tool sends prompts to its
provider)."*

⭐ **The over-promise class is now scoped on three surfaces and unscoped on one.** `R-64` was
diagnosed at **P0.5** with its remedy attached (*"scope it to 'aDNA itself sends nothing'"*); GR-1
discharged it on `/get-started` **only**; `R-161` scoped `/network` at GR-4 O3; `R-167` scoped
`/privacy` at GR-4 O5. **The homepage is the one left**, and GR-4 O3 named it explicitly —
*"NAMED AND NOT TOUCHED — ratified copy needs its own gate."* This sitting is that gate.

⛩ **Operator-ruled ordering (taken at this sitting's open, SO#1):** fix → deploy → panel. `P5.1`'s
panellists cold-read this exact hero and score it **against ADR-048**, and the senior-engineer
profile is precisely the reader who notices that *"nothing leaves your machine"* is false for the
agent tool they are reading it with. A panel run against the unscoped line buys a transcript about
copy we already know is over-scoped.

## ⭐ FINDING 1 — the same component already carries the scoped version, one prop away

Not inferred from the register; read at the object (`index.astro:125-150`) `[D]`:

| Prop | Copy | State |
|---|---|---|
| `notLine` (`:137`) | *"…no server, no signup, **nothing leaves your machine**."* | **unscoped absolute** |
| `reframe` (`:146`) | *"…The standard that gives it that shape is open. **Your files stay on your machine**."* | **correctly scoped** — P4.5a's `R-120` fix |

⇒ **The homepage asserts the scoped claim and the unscoped one within nine lines of each other**,
and P4.5a's own fix commit is what put them into visible tension — the `R-161` shape exactly (*a
pre-existing sentence repaired because a neighbouring change made it a contradiction a reader meets
without looking for it*). ⭐ **The wording therefore has an in-page precedent** and does not need
inventing: the fix is to make `notLine` agree with the line `R-120` already ratified nine lines
below it.

⚠ Stated at its width: this is **not** a claim that `R-120` was wrong. `R-120` scoped the sentence
it was aimed at, correctly, and named its own subject. Nothing routed it to its sibling — which is
`R-64`'s standing lesson (*a caveat in the register is a finding with a home and no gate*), arriving
for the fourth time on the fourth surface.

## ⭐ FINDING 2 — R-97 is classed `verified` and is asserted by NOTHING

Measured at the objects `[D]`, this sitting:

| Surface | Result | Command |
|---|---|---|
| `gate-26` fixture `claim_register.json` | **28 rows, `R-97` absent**; no row quotes *"nothing leaves"* or *"signup"* | `python3` over the fixture |
| `claim_trace_manifest.json` (gate-20) | `nothing leaves` **0** · `signup` **0** · `notLine` **0** · `R-97` **0** | same |
| `gate-23-hero-claims.spec.ts` | the phrase appears **only in a source comment** (`:56`), in **no assertion** | `grep -n` |

`gate-26`'s contract, in its own words, is *"verified rows → the quoted text must be PRESENT
(currency)."* ⇒ **the register's strongest class has a hole at the site's most-read sentence.**

⭐ **Two consequences, and they point opposite ways, so both are stated:**
1. **It makes the fix cheap** — zero same-diff churn (ADR-057), exactly as `R-161`'s was, because
   nothing pins the string.
2. **It is a defect in its own right, and the cheap fix does not close it.** A `verified` row nobody
   asserts is **convention 18's family**: `gate-26` runs correctly, passes honestly, and its green is
   a true statement about a set that **excludes this claim**. ⇒ the remedy ships the scoped quote
   **into the fixture**, so the hole closes in the commit that would otherwise have widened it.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Session open + derivations + the two findings above | this file | — |
| O1 | Baseline FKGL on `/`, **both ends on the same instrument** (HAZARD-2) | measurement | — |
| O2 | Author the ADR-048 amendment with measured wording options | `what/decisions/adr_048_…` | ⛩ **HALT** |
| O3+ | *(post-signature, separate band)* copy · fixture · red-test · re-baseline · changelog · ⛩ push · ⛩ deploy | — | ⛩⛩ |

## Constraints honoured

- **Convention 1** — the change moves a claim **DOWN**. That is the permitted direction, and it is
  the reason this is a scoping and not a rewrite.
- **§7.7** — agents author, operators ratify. The amendment is authored `proposed`; **no copy edit
  before the signature**, on the P4.2/P4.3/P4.4a/P4.4b/P4.5b/P5.1/GR-1/GR-2/GR-3/GR-4 precedent.
- **SO-6** — strike-not-delete in ADR-048; the ratified DP2 wording survives on its face.
- **HAZARD-2** — the FKGL before and after are taken on the **same local build**, never a prod
  before against a `dist/` after (*two instruments sharing one number*, B2a's finding).
- ⚠ **`F-ab` is live** — `gate-39`, `gate-42 G42b` and three `gate-47` assertions are **load**-
  sensitive. A red on those in this sitting is a **question, not a verdict**: rerun before
  diagnosing, and record the wall-clock, because *a count is only comparable to a count produced by
  the same command on a comparably loaded machine.*

## Log

- **01:45 UTC** — session opened; all facts above derived, none carried.
- **01:52 UTC** — ⚠ **First build attempt ran from the repo root and silently did nothing.** `pwd` is
  `~/aDNA/aDNA.aDNA`, and `npx astro build` must run from `site/`. It exited **0** with no output and
  left a `dist/` **with no `.md` twins**, so `reading_census` reported `measured: 0, missing: ["/"]`
  rather than an error. ⇒ *a build that exits 0 in the wrong directory is indistinguishable from a
  build that ran*, and the census's `missing` field is what caught it — **the campaign's own
  suppressed-build-error class** (P4.2's `> /dev/null 2>&1` stale `dist/`), arriving through a wrong
  cwd instead of a redirect. Re-run from `site/`: 226 pages, 48.35s, twins emitted.
- **01:58 UTC** — ⚠⚠ **SECOND harness defect of mine, same sitting, same root cause inverted — and
  `2>/dev/null` hid it.** The census resolves its `--dist` default (`site/dist`) **from the repo
  root**, so the measurement loop — which I had `cd site`'d for — found nothing, and my stderr
  redirect turned a legible error into four identical JSON parse tracebacks. **The build wants
  `site/`; the census wants the root.** ⇒ *two instruments in one pipeline with opposite cwd
  contracts, and suppressing stderr is what made the second one unreadable.* ⭐ **The restore control
  passed anyway** (`cmp` byte-identical), so the tree was never at risk — *the control that fires on
  a run that failed for an unrelated reason is the one worth having.* **Standing streak: two
  instruments wrong before the subject, both caught by their own output.**
- **02:05 UTC** — ✅ **O1 DONE.** Baseline `/` **prose 9.96 · whole 13.16 · 766 words · 47 sentences**;
  headroom **0.04**. ⭐ **The NOT-line IS in the prose corpus** — built twin line 14, punctuated,
  merged with the audience sub — so the constraint genuinely binds. **Checked, not presumed**: GR-4
  O4's strip lines turned out to be *excluded*, and assuming this one was too would have been the
  same error in the other direction.
- **02:12 UTC** — ✅ **O2 DONE — four candidates measured by twin substitution, `site/src` untouched.**
  Baseline **re-derived at exactly 9.96** after the loop (the control that makes the deltas legible),
  twin restored byte-identical.
  ⭐⭐ **THE MEASUREMENT CHANGED THE ANSWER, AND IT DISQUALIFIED THE CHEAP OPTION.** Candidate 4
  (*"nothing **of yours** leaves your machine"*) is the smallest diff, costs **0.00** FKGL — and
  **does not repair the defect**: the falsifying case is the reader's own context reaching their
  agent provider, which is exactly *"yours"*, so it narrows on **the wrong axis** while keeping the
  absolute. Candidate 2 has the **best** number (**9.84**, −0.12) and **re-imports the over-promise
  `R-161` already had to qualify** — it drops *"until you choose"*, and a vault pushed to a remote
  does move data (`R-167`). ⇒ **two of four candidates are wrong, and they are the cheapest one and
  the best-scoring one.** *The cheap remedy was the wrong one* — GR-4 O1's class, arriving at wording
  rather than at an instrument.
  ⇒ Recommended **candidate 1**, *"…no server, no signup; **aDNA itself sends nothing**"* — which is
  **`R-64`'s P0.5 prescription verbatim**, so this is one ruling's own words rather than a new
  phrasing to be judged. Costs **0.02**, leaving **0.02**, and that price is stated rather than
  absorbed.
- **02:20 UTC** — ⛩⛩ **SIGNED: candidate 1, scope HELD.** Both offered widenings (a `gate-23`
  hero-claims assertion set; a `/get-started` re-verification) were **declined** at the gate.
- **02:35 UTC** — ⛔⛔ **A FALSE PROVENANCE CLAIM OF MINE WAS CAUGHT MID-BUILD, ON FIVE SURFACES, AND
  IT IS THE SITTING'S SHARPEST FINDING.** Every draft above said candidate 1 was *"already shipped on
  `/get-started` by GR-1."* **False.** GR-1 discharged `R-64` with a **different string** —
  *"…makes no network calls of its own"* — and `"itself sends nothing"` measured **0 occurrences
  across the built site** `[D]`. ⇒ **R-97 is the FIRST surface to ship the prescribed string**, which
  is a sharper fact than the one it replaces: *the register held an exact remedy wording for nineteen
  days and nothing ever used it.*
  ⭐ **Where it came from:** `R-64`'s own register row calls the prescription *"the exact remedy GR-1
  shipped"* — meaning the **substance**, reading as the **string**. Inherited without opening
  `/get-started`. ***A claim about a destination, verified in the prose that routed it*** — `F-u`'s
  class, propagated to **this session file, the proposal, the ADR amendment, the `index.astro`
  comment and the fixture `why`** before anything caught it.
  ⭐⭐ **What caught it was not vigilance — it was the fixture.** Adding `R-97` meant reading the
  neighbouring rows, and **`R-64`'s row sits four entries above with its ACTUAL shipped string in the
  `quote` field.** *The instrument being extended is what exposed the claim the extension was
  justified by.*
  ⚠ **The correction runs BOTH ways:** *"fourth surface"* holds; ***"and last"* does not** — `R-33`
  (*"never leave the computer unless you send them"*) was **already correctly scoped pre-campaign**,
  and the ⛩ ruling declined a sweep, so *"the last"* is a claim wider than the command that produced
  it (convention 16). **All five surfaces corrected in the build commit.**
  ⚠ **One surface cannot be corrected: commit `8f97773`'s message**, which carries the false sentence
  permanently. Corrected here and at every live surface instead (SO-6, strike-not-delete).
- **02:15 UTC** — ⛩ **HALT AT THE SIGNATURE.** `artifacts/r97/adr_048_not_line_amendment.md` is
  `proposed`. **Four controls confirm nothing was performed** `[D]`: `site/src` **0** changed ·
  ADR-048 **0** · `claim_register.md` **0** · `site/tests` **0**. The only new files are this session
  record and the proposal.
- **02:40–03:35 UTC** — **BUILD HALF.** ADR-048 amended (strike-not-delete + §Amendment + 4-field
  block) · `index.astro:137` ruled wording · two stale comments re-quoted same-diff
  (`HomeHero.astro`, `gate-23`) · `gate-26` fixture gains `R-97` · register **§22** · close cascade
  (campaign `CLAUDE.md`, `STATE.md`, `MANIFEST.md` genuinely re-derived).
- **03:05 UTC** — ✅ **Real build reproduced the gate's estimate EXACTLY: prose FKGL 9.98**, against
  the twin-substitution prediction of 9.98. ⭐ *That agreement is what makes the estimation method
  reusable at a future gate rather than a lucky guess.* Headroom **0.02** remains, as priced.
- **03:10 UTC** — ✅ **`gate-49` re-baseline PREDICTED, then confirmed RED FIRST** (in-container:
  **2 failed / 24 passed**, both `home`), then **exactly 2 of 24** regenerated. The **22 untouched
  independently prove nothing leaked**. ⛔ No mask, no tolerance raised.
- **03:20 UTC** — ✅ **`R-97` red-proven with controls**: 32/32 green → a mutation reverting only the
  NOT-line reds **exactly `R-97`** (1 failed / 31 passed) → restore 32/32, `dist` byte-identical.
  *The demonstration attributes to the assertion under test* (`F-z`).
- **03:25 UTC** — ⚠ **`gate-30`'s two reds were convention 6's documented case.** The in-container
  `gate-49` run rebuilt `dist/` and overwrote `.vercel/output/config.json` **without the
  redirect-widening step**. Diagnosed by asking *which step produces the thing the gate asserts*
  before touching anything; `inject_redirects` → green.
- **03:30 UTC** — ⛔ **A FIFTH instrument defect, in PROSE.** §22.4's comparison table first read
  *"(R-97 reverted…)"* in its **first cell**, and `derive_register_counts.py`'s predicate is *"a table
  row whose FIRST cell contains an id"* — so it published **190** against a real **189**.
  ⇒ ***writing an id into the first cell of a non-claim table mints a phantom claim row.*** Fixed in
  the **prose, never the script** (a predicate loosened for my table would stop catching the compound
  rows it was loosened for). ⭐ Caught **only** by re-deriving *after* writing the section — the
  discipline §21.3 exists to enforce, and GR-4 O5 learned the hard way.
- **03:40 UTC** — ✅ **FINAL SUITE, re-run AFTER the record edits** (P5.1's finding: *a close cascade
  that edits a governance file is a change the suite can see*). **680 passed · 4 failed · 1 skipped =
  685**, and 685 = the carried 684 **+1**, the single new `gate-26` assertion — derived, not assumed.
  ⚠ **All four failures are `F-ab`'s named family** (`gate-39` + exactly the three `gate-47` keyboard
  assertions its row names). **Discriminator applied, not assumed: 14/14 pass in isolation in 17.4 s**
  against the loaded run's **3.6 m**. Combined with the measured control-vs-changed rates, **none is a
  regression from this change.** `gate-41` **4/4** after the cascade; counts **189/174/0** re-derived.

- **05:10 UTC** — ⛔⛔ **CI WENT RED ON THE PUSHED COMMIT, AND IT WAS REAL — NOT `F-ab`, AND MINE.**
  Run `33839129621` on `7475318`: **`html-validate` failed — `Duplicate ID "what-we-did-not-do"` on
  `/changelog`.** ⚠ **The cause is a verification I listed and did not run**: the plan's own
  verification section names `check:markup`, and this sitting never executed it before pushing.
  *A verification step that is written down and skipped is indistinguishable from one that passed —
  until a runner nobody controls runs it.* ⭐ **This is exactly what the ⛩ push-before-deploy ruling
  bought**: had the deploy gone first, this would have shipped.
  ⭐⭐ **The defect is a real coupling nobody had written down: `/changelog` concatenates EVERY entry
  onto ONE page, so a changelog heading's slug must be unique across the ENTIRE changelog history,
  not within its own entry.** My `## What we did not do` collided with `2026-08-22.md`'s. Measured
  `[D]`: it is the **only** heading collision in the whole changelog, so nothing pre-existing is
  implicated and the entry that introduced it is this one. Renamed to `## The rewrites we rejected`.
  ✅ `check:markup` **0**, and **control-checked** — a deliberately invalid two-`id` file makes it
  report `Duplicate ID "x"` and exit non-zero, so the zero is not vacuous. `gate-49` re-checked
  in-container: **26/26, no re-baseline owed** (the strip renders titles and dates, not headings).

- **05:45 UTC** — ✅ **CI GREEN ON `2a72efe` AFTER A RERUN ON IDENTICAL BYTES.** Attempt 1 failed at
  **exactly one assertion** — `gate-39` figure-typeset (dark), **681 passed / 1 failed** — which is
  **`F-ab`(a) verbatim**. `gh run rerun --failed` on the *same commit*: **success**. Non-determinism
  **demonstrated, not argued** (GR-3's method), and this is the campaign's **fourth** sighting of
  `gate-39`'s CI flake. ⛔ Nothing was loosened and no pin was touched.
- **05:50 UTC** — ⛔⛔ **DEPLOY HALTED. THE TREE CHANGED UNDER ME: A SECOND WRITER LANDED
  `b2e943b` — *"Intro course (TypeScript.aDNA C3b Slice A)"*, 13 files, 1157 insertions — WHILE THIS
  SITTING WAS RUNNING.** It sits on top of my work and is **unpushed**. Derived `[D]`:
  `origin/main` = **`2a72efe`** (mine, CI-green) · HEAD = **`b2e943b`** (theirs, **never through
  CI**) · prod = **`7cef6e0`**. The working tree additionally carries **uncommitted modifications to
  generated data** — `vaults.json`, `twin_manifest.json`, `subnetworks.json`, `vaults_graph.mmd` —
  the signature of a `npm run build` (whose prebuild regenerates committed data) rather than the
  sanctioned `npx astro build`, and **`vaults.json` is Hestia-owned pt19 territory this campaign may
  not hand-edit** (convention 5).
  ⇒ **Three independently sufficient reasons not to deploy**, none of which existed when the ⛩ GO was
  given: (1) deploying HEAD would **publish another writer's 1157-line feature that no CI has ever
  seen**, and it is not this sitting's to ship; (2) `b2e943b` is **unpushed**, so
  `inject_build_stamp.mjs:83` would stamp a commit **no stranger can resolve** — the P1-3 defect the
  push-before-deploy ordering exists to prevent, and the exact reason the operator sequenced the two
  GOs; (3) the tree is **dirty with registry data**, which `deploy_adna.sh`'s clean-tree guard would
  refuse anyway.
  ⭐ **This is `F-s`'s family caught BEFORE the act rather than after** — the campaign's standing
  finding is that *two checkouts each silently un-publish the other's work*, and here the two writers
  are in **one checkout**. The alias-ancestry guard would **not** have saved this: `7cef6e0` is an
  ancestor of `b2e943b`, so the guard **passes** while the deploy still publishes un-CI'd work.
  ***An ancestry guard reasons about lineage; this defect is about REVIEW STATE.***
  ⛩ **Returned to the operator. The deploy GO was given for the R-97 tree and the tree is no longer
  that tree** — the campaign's own law that a ratification costed against conditions that have since
  moved is not a ratification of what is in front of you now.

## SITREP

**Completed** — `R-97` scoped and built: ADR-048 amended and operator-ratified; the homepage NOT-line
ships R-64's P0.5 prescription; `gate-26` pins it (red-proven); register §22; `gate-49` re-baselined
2/24; changelog entry; full close cascade.

**In progress** — nothing. The increment is **built and complete on-build**.

**Next up** — ⛩ **a push GO, then ⛩ a deploy GO**, in that order (`inject_build_stamp.mjs:83` stamps
HEAD and nothing checks HEAD is public). Then **`GR-5`** on `F-ab` at its own ⛩ convention-13
pre-build gate, carrying the **pin ruling**. Then **`P5.1`** with the humans — its `AC-P` re-stamps
against whatever tree this ships, which is why ⛩ *fix → deploy → panel* was ruled.

**Blockers** — none agent-side. `P5.1`/`P5.2` remain human-gated.

**Files touched** — `site/src/pages/index.astro` · `site/src/components/sections/HomeHero.astro` ·
`site/tests/gates/gate-23-hero-claims.spec.ts` · `site/tests/gates/fixtures/claim_register.json` ·
`site/src/content/changelog/2026-09-04.md` (new) · `site/tests/gates/__screenshots__/home-{dark,light}.png` ·
`what/decisions/adr_048_positioning_statement_embargo_language.md` ·
`how/campaigns/campaign_haussmann/evidence/claims/claim_register.md` ·
`how/campaigns/campaign_haussmann/CLAUDE.md` ·
`how/campaigns/campaign_haussmann/artifacts/r97/adr_048_not_line_amendment.md` (new) ·
`STATE.md` · `MANIFEST.md` · this session file.

**Next Session Prompt** — *Operation HAUSSMANN, aDNA.aDNA (Rosetta). `R-97` is built and committed but
**NOT deployed**: the homepage NOT-line now reads "Not a product or service — no server, no signup;
aDNA itself sends nothing", ADR-048 carries an operator-ratified §Amendment, and `gate-26` pins the
new string. Two ⛩ GOs are owed in order — **push, then deploy** — and the deploy must precede `P5.1`'s
panel by operator ruling (fix → deploy → panel), because the panel cold-reads this hero and scores it
against ADR-048. Derive at your open: `date -u`, `gh run list --workflow=gates.yml --branch main -L 5`,
`git ls-remote origin main`, and production's stamp from `/.well-known/adna-build.json`. ⚠ Expect
`gate-39` and three `gate-47` keyboard assertions to fail under load — that is **`F-ab`**, measured
this sitting at comparable rates on an unmodified control tree; **14/14 pass in isolation**, so rerun
before diagnosing, and never loosen a pin to make them green. After the deploy, the ratified next lane
is **`GR-5`** on `F-ab` at its own convention-13 pre-build gate, carrying the ⛩ pin ruling for
`gate-39` (recommended: re-derive the pin in CI's own environment, or record the gate advisory with
the reason on its face — not 7.9 → 7.4).*
