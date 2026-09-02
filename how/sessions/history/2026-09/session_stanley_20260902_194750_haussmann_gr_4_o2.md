---
type: session
session_id: session_stanley_20260902_194750_haussmann_gr_4_o2
created: 2026-09-02
updated: 2026-09-02
status: completed
tier: 1
last_edited_by: agent_rosetta
campaign: campaign_haussmann
mission: mission_haussmann_gr_4_story_coverage
increment: "GR-4 **O2** — D4 (the ancient-DNA disambiguation) lands on `/commons`, the surface ⛩ RULING 3 selected on measured reading-level headroom rather than on the revue's guess. Ships the copy, the **presence** assertion DEFECT-1 found missing (on the `.md` twin, because AC-4's verb is *a reader encounters*), the census before/after on the SAME local surface, the red-test at one mutation per assertion, and the register rows enumerated FROM THE DIFF. ⛔ No deploy authorized or owed; a push is its own ⛩ GO."
executor_tier_declared: opus
executor_tier_actual: opus
token_budget_estimated: "~20–35 kT for O2 (proposal §7's per-objective row), inside the mission's ⛩ ratified ~255–400 kT / 2–3 sessions. The smallest objective in the lane: no new route, no new instrument (the presence limb extends an existing gate), one Callout of copy on one existing page."
token_budget_actual: "Session ≈110–140 kT, of which ≈55–65 kT is orientation (the campaign `CLAUDE.md` alone is ~40 kT, auto-loaded — NAMED, not absorbed, per GR-3's precedent) ⇒ per-objective work ≈**50–75 kT** against §7's **~20–35 kT** for O2 = **~1.9–2.1× at the top edge**. **Recorded at the close of the sitting, not reconstructed.** At SO#11's 2× threshold, so the retrospective is filed in the SITREP: the cause is a **costing gap, not scope drift** — §7 costed CRITERIA, and this objective's largest single piece of work (the mandatory in-container `gate-49` re-baseline) comes from a FIXTURE attached to the receiving route."
files_touched: [site/src/pages/commons.astro, site/tests/gates/gate-54-doctrine-layer.spec.ts, site/scripts/doctrine_layer_redtest.sh, site/tests/gates/__screenshots__/commons-dark.png, site/tests/gates/__screenshots__/commons-light.png, how/campaigns/campaign_haussmann/evidence/claims/claim_register.md, how/campaigns/campaign_haussmann/missions/mission_haussmann_gr_4_story_coverage.md, how/campaigns/campaign_haussmann/CLAUDE.md, how/campaigns/campaign_haussmann/artifacts/gr_4/o2_d4_record.md]
tags: [session, haussmann, gr_4, lane_d, o2, story_coverage, content, ancient_dna, d4]
---

# Session — GR-4 O2: the ancient-DNA disambiguation reaches `/commons`

## Derived at open — never carried (convention 19 + "derive, don't quote")

Every fact below was produced by its own command **this sitting**.

| Fact | Derived value | Command | vs carried |
|---|---|---|---|
| `main` CI status | **green ×5**, newest `33586055067` `success` | `gh run list --workflow=gates.yml --branch main -L 5` | agrees |
| `origin/main` | `7210d5e` | `git ls-remote origin main` — **at the remote**, not a tracking ref | agrees |
| `HEAD` | `1bb965d` ⇒ **unpushed 3** | `git rev-parse HEAD` · `git rev-list --count origin/main..HEAD` | agrees (O1 added one) |
| Production alias | `a852423` · built `2026-09-01T19:40:19.817Z` · `mode=prod` | `curl https://adna.network/.well-known/adna-build.json` | **agrees — re-probed, not assumed** |
| **D4 baseline, `/commons`** | **0** occurrences of *ancient DNA* | `grep -ci "ancient dna" site/dist/commons.md` | agrees with the pass |
| **D4 baseline, `/about` · `/`** | **0** each | same, per twin | agrees |
| Twins carrying it today | **6** | `grep -rli "ancient dna" site/dist --include="*.md" \| wc -l` | agrees ("four deep pages" + spec splits) |

⭐ **Convention 19 fired for the fifth time and found `main` green.** Recorded as a result rather than
skipped — a habit only reported when it fires is a habit nobody can audit. ⚠ Note its exact width:
green at `7210d5e`, the last **pushed** commit. GR-4's own three commits have **never been through
CI**, because a push is its own ⛩ GO and none has been granted. *The green is a statement about a
commit, not about the tree.*

⭐ **Convention 16 honoured on the build stamp and it CONFIRMED for the fourth time** (`a852423`
before and after). The habit costs one `curl`.

### ⚠ The negative result was CONTROL-CHECKED before it was believed

*"`/commons` carries zero mentions of ancient DNA"* is the premise this whole objective rests on, and
a zero from a bad path reads identically to a zero from an honest absence. Three controls `[D]`:

- `site/dist/commons.md` is **6,812 B** — the file exists and is not empty.
- It carries **13** occurrences of *"aDNA"* — the grep reaches real text.
- `site/dist/learn/what-is-adna.md` returns **1** for the same pattern — the pattern itself matches
  where the content is known to live.

⇒ the zero is **real, not vacuous** — the discipline P4.5b's `/` twin probe established.

### ⚠ A shell defect avoided rather than discovered: `grep -c` exits 1 on zero

The first probe was written `grep -ci … || echo 0` and printed **`0\n0`** — `grep -c` prints its zero
*and* exits 1, so the fallback fires on a successful count. **This campaign has already paid for this
exact idiom once** (GR-1's *"`grep -c` exiting 1 on zero so `|| echo 0` yielded `0\n0`"*). Caught here
by reading the output rather than by remembering the finding.

## Surface named for every claim in this session (convention 17 + its amendment)

| Claim's verb | Surface |
|---|---|
| *"a reader encounters the disambiguation"* | the **`.md` twin**, `site/dist/commons.md` |
| *"the page's prose reading level"* | `reading_census.mjs` over the **local** `site/dist/` |
| *"this repo authors it"* | `site/src/pages/commons.astro` |

⚠ **HAZARD-2 honoured**: the census measures the **local build**, never production. Before and after
are both local, on builds of the same tree ± this increment — a before from prod and an after from
`dist/` would be *two instruments sharing one number* (B2a's finding, already paid for once).

## BEFORE — measured on a fresh local build at `1bb965d`, before a word of copy was written

`npx astro build` (never `npm run build`, convention 6) → `node site/scripts/reading_census.mjs`
**from the repo root** (HAZARD-1).

| Route | prose FKGL | target | headroom |
|---|---|---|---|
| **`/commons`** | **8.61** | 12 | **3.39** |
| `/privacy` *(banked for O5's AC-8 while the same build was up)* | **9.43** | 12 | 2.57 |
| `/reference/specification` — the single route over target | 12.69 | 12 | **−0.69**, pre-existing and untouched |

⭐ **The mission carried 8.61 and the derivation agrees — which is worth a line precisely because it
usually does not.** Three consecutive sessions in this campaign found a carried count wrong and the
derived one right. This one confirms. *A habit that only ever contradicts is a habit people learn to
fear; one that sometimes confirms is one they learn to run.*

## AFTER — same command, same surface

| Route | before | after | Δ | target |
|---|---|---|---|---|
| **`/commons`** | 8.61 | **8.30** | **−0.31** | 12 |

`1 of 21 over target` before and after — unchanged, and that route
(`/reference/specification`, 12.69) is pre-existing and untouched.

## Work log

1. Session opened, four facts derived at open, the D4 zero control-checked three ways.
2. **BEFORE** census on a fresh build at `1bb965d` — recorded before a word of copy.
3. ⛩ **Operator ruling on the FORM** (the signature fixed the surface, not the shape): a **Callout
   under the hero**, not a titled band and not a woven clause.
4. Copy authored on `site/src/pages/commons.astro`, reusing the `Callout` the page already imports.
5. `gate-54` extended: **G54i** (twin measurable + probe reaches text) · **G54j** (both D4 terms).
6. Red-test extended: cases **9/10/11**, each verified to isolate its target before being wired in.
7. `gate-49` same-diff: red confirmed **first** (2 failed · 24 passed), then all 24 baselines
   regenerated in-container — **exactly 2 files changed**.
8. Register **§17** (R-150…R-152), claim set enumerated from the diff, counts derived last.
9. Records updated same-diff: mission file, campaign `CLAUDE.md`, evidence artifact.

## SITREP

**Completed** — `AC-4` ✅ · `AC-7` ✅ · `V3` ◐ partial (AC-4's half; AC-8's is O5's).
Chromium **670** · all-projects **696** · snapshot **26**, each by its own command; run
**669 passed · 1 skipped · 0 failed**; `html-validate` **0** (control-checked); red-test **13/13**.

**In progress** — none. O2 is closed.

**Next up** — **O3** (D3, branch (i): the local-models section routed to where the L0–L3 ladder
actually lives, **not** `/network`). Then O4 (D5 + the owed prose-corpus measurement) · O5 (D6 +
AC-8 + close cascade + AAR).

**Blockers** — none. ⛔ Held: **P5.1** with the humans.

**Files touched** — `site/src/pages/commons.astro` ·
`site/tests/gates/gate-54-doctrine-layer.spec.ts` · `site/scripts/doctrine_layer_redtest.sh` ·
`site/tests/gates/__screenshots__/commons-{dark,light}.png` ·
`how/campaigns/campaign_haussmann/evidence/claims/claim_register.md` ·
`how/campaigns/campaign_haussmann/missions/mission_haussmann_gr_4_story_coverage.md` ·
`how/campaigns/campaign_haussmann/CLAUDE.md` ·
`how/campaigns/campaign_haussmann/artifacts/gr_4/o2_d4_record.md`

### ⚠ SO#11 — the objective ran over its band, and the reason is structural rather than diffuse

Recorded **at the close of the sitting, not reconstructed.** Against §7's **~20–35 kT** for O2:
per-objective work landed at roughly **~50–75 kT**, i.e. **~1.9–2.1×** at the top edge — at the
threshold, so **a retrospective is warranted and this is it.**

⭐ **The overrun has one identifiable cause and it is a costing gap, not scope drift: §7's table
costed CRITERIA, and the largest single piece of work in this objective came from a FIXTURE.**
`/commons` is a `gate-49` visual-regression template at `maxDiffPixels: 0`, so any copy landing there
carries a mandatory in-container re-baseline — two full container runs plus a confirm-then-regenerate
control. Nothing in *"D4 + V3's amended presence limb"* names that, because ADR-057's same-diff
obligation attaches to the **route**, and the proposal was reading the **criteria**.

⇒ ***a per-objective estimate that reads only the criteria cannot see the obligations the target
surface carries.*** Cheap remedy for O3/O4/O5, and it costs one lookup: **check the receiving surface
against `gate-49`'s TEMPLATES list before costing an objective that touches it.** `/network` and
`/learn/*` — O3's candidate homes — include `doc-leaf` and `doc-hub` templates, so O3 very likely
carries the same obligation and should be costed with it rather than discovering it mid-build.

Secondary, smaller, and named rather than folded in: the red-test harness's `G54[a-h]` blindness and
the convention-6 `gate-30` diagnosis were each real work not in the estimate — but neither is a
costing *class*, and an estimate cannot cost the defects it has not found yet (O1's own note).
