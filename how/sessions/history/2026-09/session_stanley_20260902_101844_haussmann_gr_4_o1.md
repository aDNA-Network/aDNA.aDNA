---
type: session
session_id: session_stanley_20260902_101844_haussmann_gr_4_o1
created: 2026-09-02
updated: 2026-09-02
status: completed
tier: 1
last_edited_by: agent_rosetta
campaign: campaign_haussmann
mission: mission_haussmann_gr_4_story_coverage
increment: "GR-4 **O1** — D1 (model routing) + D2 (the SO-11/ADR-016 per-mission budget doctrine layer), the two clean agent-reachable adds, gated on the signature alone. First increment of Lane D and the first NEW PUBLIC COPY this campaign has authored since P4.5b. Ships the copy on its two named homes, `gate-54` with its ASSERTED vendored exclusions, the red-test at one mutation per assertion, and the claim-register rows enumerated FROM THE DIFF. ⛔ No deploy authorized or owed; a push is its own ⛩ GO."
executor_tier_declared: opus
executor_tier_actual: opus
token_budget_estimated: "~90–140 kT for O1 — the two agent-reachable adds inside the mission's ⛩ ratified ~255–400 kT / 2–3 sessions. Derived by shape, not by feel: copy on two existing pages (no new route ⇒ no ADR-057 route-coupling) ≈ 25–40 · `gate-54` + its measurement script ≈ 30–45 · the red-test at one mutation per assertion ≈ 20–35 · register rows + close-out ≈ 15–20. ⚠ ~40 kT of the campaign `CLAUDE.md` is auto-loaded and is NAMED, not absorbed (GR-3's precedent)."
token_budget_actual: "≈130–165 kT — **recorded at the close of the sitting, not reconstructed** (SO#11; the sitting that opened GR-4 left this empty and it had to be reconstructed at this session's open, the third P4.3-class instance). Against the declared ~90–140 kT that is **~1.1–1.2× at the top edge, inside the 2× threshold ⇒ no retrospective triggers.** ⚠ The overrun is attributable rather than diffuse and both causes are named: the measurement instrument was **re-cut once** after its own output falsified its two-axis premise, and **two defects in the authored copy** (the glossary tier-ordering contradiction, the gate-14 repo literal) were found and fixed — neither was in the estimate, because an estimate cannot cost the defects it has not found yet."
files_touched: [site/src/content/docs/mission-decomposition.mdx, site/src/content/guides/design-a-mission.mdx, site/scripts/doctrine_layer_measure.mjs, site/scripts/doctrine_layer_redtest.sh, site/tests/gates/gate-54-doctrine-layer.spec.ts, how/campaigns/campaign_haussmann/evidence/claims/claim_register.md, how/campaigns/campaign_haussmann/missions/mission_haussmann_gr_4_story_coverage.md, how/campaigns/campaign_haussmann/CLAUDE.md]
tags: [session, haussmann, gr_4, lane_d, o1, story_coverage, content, model_routing, token_budget]
---

# Session — GR-4 O1: the model-routing and token-budget doctrine layer

## Derived at open — never carried (convention 19 + "derive, don't quote")

Every fact below was produced by its own command **this sitting**.

| Fact | Derived value | Command | vs carried |
|---|---|---|---|
| `main` CI status | **green ×5**, newest `33586055067` `success` | `gh run list --workflow=gates.yml --branch main -L 5` | agrees |
| `origin/main` | `7210d5e` | `git ls-remote origin main` — **at the remote**, not a tracking ref | agrees |
| `HEAD` | `f17ff58` ⇒ **unpushed 2** | `git rev-parse HEAD` · `git rev-list --count origin/main..HEAD` | agrees |
| Production alias | `a852423` · built `2026-09-01T19:40:19.817Z` · `mode=prod` | `curl https://adna.network/.well-known/adna-build.json` | **agrees — re-probed, not assumed** |
| Mission files on disk | **31** = 27 `p{0..5}` + 4 `gr_*` | two `ls | wc -l`, each its own command | agrees (charter reads 31) |
| **D1 baseline** | **1** occurrence, `src/data/tour/standard-governance.txt` **only** | `grep -rli "model routing\|model-tiered\|executor_tier" site/src/` | agrees with the pass |
| **D2 baseline** | **0** occurrences | `grep -rli "ADR-016\|token_budget" site/src/` | agrees with the pass |

⭐ **Convention 19 fired for the fourth time and found `main` green.** Recorded as a result rather
than skipped: a habit only reported when it fires is a habit nobody can audit.

⭐ **Convention 16 honoured on the build stamp and it CONFIRMED for the third time** (`a852423`
before and after). Three confirmations against three contradictions; the habit costs one `curl`
either way, which is the whole argument for it.

## ⚠ Finding at the open, before any work: A CLOSED SESSION WAS STILL IN `active/`

`how/sessions/active/` held **`session_stanley_20260902_060732_haussmann_gr_4_gate.md`** with
`status: active`. Its SITREP is complete, its work is committed at `f17ff58`, and the mission it
opened is `in_progress` — **the sitting was over.** The status field was never moved and the file
was never filed to `history/2026-09/`. `[D]`

⇒ To a cold agent following the startup checklist, that file reads as a **live peer session**, which
is the one signal the protocol uses to decide whether it may co-write a file (the Single-Writer
Lease: *"a non-empty peer session means do not co-write its declared files"*). **A finished session
left in `active/` is a lease nobody is holding.**

⚠ **And its `token_budget_actual:` was empty**, so it had to be **reconstructed** (≈70–95 kT against
~55–85 kT — over the top edge by ~12%, **inside** SO#11's 2× threshold ⇒ no retrospective).
**Third P4.3-class instance.** ⭐ Note *why* the estimate was low and that it is not an estimating
error: the sitting's band was written before the operator's rulings existed, and the signature
cascade it then performed was **not in the estimate at all** — which is GR-4's own signed finding
(*a budget ratified before the OPERATOR'S RULINGS is costed against a scope nobody has chosen yet*)
recurring **in the session file of the sitting that wrote it.**

Both repaired at this open: status moved, actual reconstructed **and labelled as reconstructed**,
file `git mv`'d to history.

⚠ **The `git mv` staged the PRE-EDIT blob** — `git diff --cached --stat` read **0 insertions** on a
file carrying two edits, so a commit here would have filed the rename and silently dropped both.
Re-staged with an explicit `git add`. *The node quirk is known and written down; it earned itself
again, and it is only visible if you read the staged stat rather than trusting the command.*

## Why this sitting exists

`GR-4` was ⛩ **signed 2026-09-02** and is **building**. Its `⏭ NEXT` is **`O1`** — D1 + D2, the two
objectives gated on the signature alone (O2/O3 waited on rulings that have now been taken; O4/O5
follow). Lane D is the ratified Gate-1 order's **last lane**.

⛩ **One scope question was open in the signed criteria and was put to the operator at this open, not
taken here:** AC-1 names **no home page**, unlike AC-2 which names two. **Ruled: D1 lands on the same
two pages as D2** — `/patterns/mission-decomposition` and `/learn/tutorials/design-a-mission` — so
**no new route**, and ADR-057's route-coupling obligations (gate-4's hardcoded list, the `@audit`
P1S3 sweep, nav, the twin emitter) do not fire. ⭐ The reasoning is the reusable part:
`executor_tier` and `token_budget_estimated` are **two fields on the same mission card**, so a single
doctrine layer is the honest shape as well as the cheap one. *(The alternative — a
`/learn/concepts/model-tiered-execution` route — was costed at +40–70 kT beyond the band on P4.3's
measured finding that a 620-green suite knew nothing about a new route.)*

## What this sitting does

1. ✅ Session file (this), with the derived-at-open facts.
2. Copy for **D1 + D2** on the two named pages.
3. **`gate-54`** + `doctrine_layer_measure.mjs` — the V1 content probe, two surfaces named on the
   gate's face (convention 18), `src/data/tour/**` excluded **BY NAME and asserted**.
4. **`doctrine_layer_redtest.sh`** — one mutation per assertion, each naming the assertion it reds
   via; a red via the wrong one is a **HARNESS BUG**.
5. Claim-register rows, **enumerated from the diff**.
6. Suite, `html-validate`, close-out. **HALT** before O2.

## Out of scope, named rather than silently dropped

- ⛔ **No deploy and none owed** — GR-4 is met on-build, as every GR mission before it. A push is its
  own ⛩ GO and precedes any deploy.
- ⛔ **`src/data/tour/**` is not edited** (Standing Rule 1; `F-w`) — this is O1's load-bearing
  restraint, and `gate-54`'s exclusion assertion is what makes it checkable.
- **O2** (D4 → `/commons`) · **O3** (D3, branch (i)) · **O4** (D5 + the owed prose-corpus
  measurement) · **O5** (D6 + AC-8/R-124 + close cascade + AAR).
- ⛔ **P5.1** with the humans. ⚠ Owed elsewhere: B1's ⛩ Speed-Insights → transport → first p75 ·
  babbage's lease question · babbage's two upstream findings still `proposed`.

## SITREP

**Completed — `AC-1` ✅ `AC-2` ✅ `V1` ✅**

- **D1 + D2 published** on their two named homes. `/patterns/mission-decomposition` gains a
  `## Budgeting and Routing a Mission` doctrine section (the two budget fields · the content-load
  formula · the four decomposition bands · the 2× retrospective trigger · the three
  decision-property classes · the versioned binding · the six-element brief contract);
  `/learn/tutorials/design-a-mission` gains **Step 4b**, both fields in its template and validation
  checklist, and two `What You Learned` lines.
- **`gate-54`** (`G54a`–`G54h`, **8** assertions) + `scripts/doctrine_layer_measure.mjs`, which the
  gate asserts on rather than re-implements (gate-40's discipline). The vendored `src/data/tour/**`
  exclusion is **asserted, not assumed**, and `G54h` asserts it is still **load-bearing**.
- **`scripts/doctrine_layer_redtest.sh`** — 8 mutations + 2 controls, **one mutation per assertion**,
  each case **declaring the set it must red**; a red via an undeclared assertion reports as a
  **HARNESS BUG**.
- **Claim register §16** — `R-142`…`R-149` **enumerated from the diff** with the inclusion rule
  stated, §16.2 (the contradiction), §16.4 (the gate-14 finding), §16.5 Counts **re-derived by the
  register's own script**: **168 rows · 153 ids · 0 gaps**, reconciling exactly against §15
  (160 + 8 · 145 + 8). New debt row **`F-aa`**.
- **Two repairs at the open**: GR-4's gate session closed and filed to history; its unrecorded
  `token_budget_actual` reconstructed **and labelled as reconstructed**.

**Verification — 8/8, and two of them are the load-bearing ones**

| # | Check | Result |
|---|---|---|
| 1 | chromium lane | **667 passed · 0 failed · 1 skipped** |
| 2 | delta attributable — `--list` with vs without the spec | **668 / 660 ⇒ +8, removed nothing** |
| 3 | other lanes, each by its **own** command | all-projects **694** (686+8) · snapshot **26** |
| 4 | `html-validate dist/**/*.html` | **0** |
| 5 | `doctrine_layer_redtest.sh` | **10/10**, every case red at **exactly** its declared set |
| 6 | ⭐ red-test case 3 — D1 stripped, term LEFT in the vendored file | **RED** ⇒ the exclusion is real, not decorative |
| 7 | ⭐ `src/data/tour/` byte-identical to HEAD **after both red-test runs** | sha256 match `[D]` |
| 8 | `gate-41` (the register's published tally vs derived) | **4/4** |

⭐ **Check 6 is why this gate exists.** Before O1 shipped a word, the only model-routing occurrence
site-wide was in the byte-vendored tour file — so a criterion phrased the obvious way was **already
green against zero work**. Case 3 proves the gate is not that criterion.

⭐ **Check 7 is not hygiene.** The red-test mutates a file whose **sha256 is published on the trust
page with an invitation to diff it**. A residue there would be a trust defect on the one surface built
to be checked, so restoration is verified by hash rather than by the harness's own say-so.

**Findings** — three, and each is recorded where it can be acted on rather than only here:

1. ⭐⭐ **The measurement falsified the instrument before it graded anything** — the two-axis design was
   copied from `hub_depth_measure` without re-deriving whether its premise held, and the axes are
   **anti-correlated** here. *Two axes are right where a thin subject is thin on both; wrong where the
   axes trade off.*
2. ⭐⭐ **The vault's pattern and its glossary contradict each other on tier ordering**, the draft took
   the wrong one, and it was caught by verifying at the object. Measured: the contradiction was
   **never public** — all 3 `cheapest` hits in `dist/` were this increment's own copy. → **`F-aa`**.
3. ⭐ **`gate-14` named a real defect whose obvious remedy would have made the claim false.** Link
   removed, claim kept, `ALLOW` entry deliberately not taken.

**In progress** — nothing. O1 is complete; O2 is not started.

**Next up** — **`O2`** (D4 → `/commons`), then O3 → O5.

**Blockers** — none. ⛔ No deploy authorized or owed (Lane D is met on-build); **a push is its own
⛩ GO** and none was taken this sitting.

**Files touched** — created: this session file · `site/scripts/doctrine_layer_measure.mjs` ·
`site/scripts/doctrine_layer_redtest.sh` · `site/tests/gates/gate-54-doctrine-layer.spec.ts`.
Modified: `site/src/content/docs/mission-decomposition.mdx` ·
`site/src/content/guides/design-a-mission.mdx` · `evidence/claims/claim_register.md` ·
`missions/mission_haussmann_gr_4_story_coverage.md` · `campaign_haussmann/CLAUDE.md`.
Moved: GR-4's gate session → `how/sessions/history/2026-09/`.
⛔ **Not touched: `site/src/data/tour/**`** — verified byte-identical to HEAD by sha256.

## Next Session Prompt

You are Rosetta in `~/aDNA/aDNA.aDNA`. **`GR-4` (GRANDE REVUE Lane D — story coverage) is SIGNED and
BUILDING; `O1` is DONE and the next objective is `O2`** — D4, the ancient-DNA disambiguation, ⛩ ruled
onto **`/commons`** (chosen by measured headroom **3.39**, vs `/about` 0.57 and `/` 0.04, and named by
neither of the revue's disjuncts). **Read `missions/mission_haussmann_gr_4_story_coverage.md` first**
— its `acceptance_criteria` are the ⛩ signed set (8 ACs / 7 limbs) and **AC-4 is the one with a
remedy you must honour**: its presence half was tested by nothing, so presence is asserted on the
**`.md` TWIN** (the surface whose verb is *"a reader encounters"*), and its FKGL limb **moves in the
reassuring direction when the criterion is met**, because FKGL falls as prose gets shorter.
**HAZARD-1**: `reading_census.mjs` runs **from the repo root** and needs a build — `npx astro build`,
**never** `npm run build`; add `node scripts/inject_redirects.mjs .` if running the full suite outside
a deploy. **HAZARD-2**: the census measures the **local `dist/`**, so AC-4's before *and* after must be
taken on that same surface — a before from prod and an after from `dist/` would be two instruments
sharing one number. ⚠ The census's frame is **21 landing routes**; `/commons` **is** in it (prose
**8.61** / target 12) — unlike O1's two pages, which are not. **Derive at open, never carry**
(convention 19): `gh run list --workflow=gates.yml --branch main -L 5`, `git ls-remote origin main`,
and re-probe `/.well-known/adna-build.json` — this record says CI green ×5, `origin/main` `7210d5e`,
HEAD ahead by **3 unpushed**, prod `a852423`, chromium **668** / all-projects **694** / snapshot
**26**, and every one of those is a claim about the past. ⚠ **Session files are stamped UTC on this
node** (`date -u`); the shell's local `date` would file a session sorting before ones that already
happened. ⚠ **`git mv` stages the pre-edit blob** — read `git diff --cached --stat` and re-`git add`.
⛔ **No deploy is authorized or owed**; **a push is its own ⛩ GO**. ⛔ Held: **P5.1** with the humans.
⚠ Owed: B1's ⛩ Speed-Insights → transport → first p75 · babbage's lease question · babbage's two
upstream findings still `proposed` · **`F-aa`** (the glossary tier-ordering contradiction, routed to a
`what/` sitting of its own, deliberately not fixed inside a site-copy mission).
