---
type: session
session_id: session_stanley_20260826_214627_haussmann_p4_4b_b0
tier: 1
campaign: campaign_haussmann
mission: mission_haussmann_p4_4_ci_hardening
objective: P4.4b — apply the signature, then B0 (visual-regression lane)
phase: P4
status: completed
executor_tier: opus          # ⚠ DECLARED AT THE OPEN, NOT DISCOVERED AT THE AAR. The mission
                             # declares P4.4b as `sonnet`; this session runs **opus**, and the
                             # amendment proposal's §7 named exactly this case in advance: "B0's
                             # mask-and-theme judgement is **not** mechanical work; if it runs
                             # `opus`, the declaration moves **before** the session, not after."
                             # It has. (P4.1 ran four sessions on opus under a `fable` declaration;
                             # a declared tier nobody honours is worse than none.)
created: 2026-08-26
updated: 2026-08-26
last_edited_by: agent_rosetta
token_budget_estimated: "~150–220 kT — B0's band from the ⛩ re-ratified ~280–440 kT / 3 sessions (signed this session, ruling (c)), plus ~15–25 kT for the 1a signature-application act, which is bookkeeping rather than build. ⛔ Named so it is not discovered as an overrun: if baselines need regenerating after a mask or theme correction, that is a re-capture of all 24 images, and it is inside B0's band ONCE, not repeatedly (§7)."
token_budget_actual: "≈210–250 kT (content-load units) against a ~165–245 kT allocation (B0 ~150–220 + ~15–25 for the 1a signature act) — AT OR JUST OVER the top of the band, well inside SO#11's >2× retrospective trigger. ⭐ The overrun has ONE named cause and it is not scope creep: THREE defects in the gate itself, each found by V1 and each requiring an investigation the estimate did not carry — the loose threshold, the two inert mutations, and `home`'s instability (which cost three wrong hypotheses, each rejected at the object: a decode wait, a hero-variant check, and a sharp-based row diff proving the picture was pixel-identical and only the PNG BYTE LENGTH moved). ⚠ Recorded at close rather than reconstructed later: two of three P4.3 sessions closed this field blank and the actual had to be inferred, and a band cannot be falsified by a prose sentence claiming it holds."
tags: [session, haussmann, p4_4b, b0, visual_regression, signature_applied]
---

# Session — P4.4b: the signature is applied, then B0

## Intent

Two acts, in order. **(1)** Apply the ⛩ operator signature taken at this session's open to
`ac_amendment_proposal_p4_4b.md` and to the mission file — criteria, V-limb labels, the B2 split,
the three stale-line corrections (same-diff, ruling 4), and the re-ratified budget. **(2)** Build
**B0**, the visual-regression lane. **No deploy is in scope** — P4.4b is met on-build.

## ⛩ The gate — signed at this session's open

The pre-build gate opened 2026-08-26 (`22a4fa6`) and halted. Convention 13's pass had run **complete
at 26/26 with coverage recorded**, both directions → **20 clean · 6 defective** + 6 non-pair findings.
`artifacts/p4_4/ac_amendment_proposal_p4_4b.md` was `proposed`, carrying **one question that was the
operator's** (§4). Put to the operator this session; **both answers taken**:

| # | Put | Ruled |
|---|---|---|
| §4 | AC4's criterion says *proceed under the interim clause*; AC4's own amendment row says *do not build B2 before Vitruvius answers*. Both signed, same document, condition live today. | ⛩ **(c) SPLIT** — build **B2a** (sweep, no external dependency), hold **B2b** (budget provenance, ⊳ D-E). |
| — | Rulings 2–5, the §5 criteria changes, the budget re-ratification. | ⛩ **Signed as proposed** — **~250–400 kT / 2 sessions → ~280–440 kT / 3** (B2b excluded under (c)). |

⭐ **Why (c) is the right shape and not a compromise**: B2 fused two **reachability** classes under one
⊳ D-E gate, so the half with no dependency was blocked by the half that has one. P4.4 was split into
P4.4a/P4.4b on exactly this principle — *"the split line is REACHABILITY, not topic"* — and B2 fused
on **topic**. The remedy is this mission's own split, one level down.

## Preconditions re-verified at the object at open `[D]`

| Check | Result |
|---|---|
| Live alias build stamp — **re-read, never quoted forward** | `/.well-known/adna-build.json` → `51af717`, `built_at 2026-08-27T01:31:19Z`, `mode prod` `[D]`. Matches P4.5b's `deploy_record` exactly. |
| Any `site/src/**` drift since the deployed commit? | **No.** `git log 51af717..HEAD --name-only` touches only campaign/session/coordination docs + `site/scripts/deploy_log.txt` `[D]`. |
| Unpushed | **0** `[D]` |
| Conflicting sessions | `how/sessions/active/` **empty** at open `[D]` |
| AC1's container substrate (FINDING 12's control) | ✅ `gates.yml` runs `mcr.microsoft.com/playwright:v1.59.1-noble` `[D]` — B0 adds a **snapshot project**, not a CI substrate. The 08-24 amendment predicted this and the prediction held. |
| AC3's co-run mechanism already in tree | ✅ `gates.yml:32` `concurrency: group: gates-${{ github.ref }}` `[D]` |
| Highest existing gate | `gate-48` (46 specs) `[D]` — B0's spec is **gate-49**. |

## B0 — the visual-regression lane

**Shipped**: `gate-49-visual-regression.spec.ts` (G49a frame · G49b mask liveness · G49c pinned mask
arithmetic · G49d theme control · 24 baselines), a `snapshot` Playwright project, 24 container-generated
baselines, `visual_regression_container.sh` (the in-container runner AC1 requires), and
`visual_regression_redtest.sh` (V1). Suite **633 → 659**, derived from `--list` on both lanes, not typed.

**V1: 7/7** — 5 mutations red, 2 controls green, all in-container. **Standing suite intact: 633**
(632 passed + 1 skipped).

### ⭐⭐ The red-test earned its place on its first run, and then twice more

**Three defects, all mine, all in the gate rather than the site — and the gate would have shipped green
with every one of them.** This is convention 14 doing exactly what it exists to do.

1. **⭐⭐ THE THRESHOLD WAS TOO LOOSE, AND ONLY A MUTATION COULD SHOW IT.** The first draft carried
   `maxDiffPixelRatio: 0.002`, written in a comment as *"deliberately TIGHT"*. Case 1 —
   `h1 { letter-spacing: 6px !important }` on `/about/` — **stayed green under it**: one heading's glyphs
   are a vanishing fraction of a 7,597 px full-page capture, so a plainly visible regression sat under
   0.2 %. Only `body{display:none}` could move it. ⭐ **The fix came from AC1 itself**: a tolerance exists
   to absorb non-determinism, and AC1's in-container requirement *removes the only source this lane has*
   — so the honest setting is **`maxDiffPixels: 0`**, now verified across two consecutive clean container
   runs. ⚠ **Both of this gate's tolerances were first drafted too loose by the same author in the same
   sitting** (the mask budget was 0.40 % against a 0.0716 % worst case — 5.6× headroom — before being
   measured and pinned to 0.15 %). *A number written by feel is a formality wearing a pin's clothing.*
2. **⭐ TWO CASES WERE INERT FOR ONE REASON, AND ONE OF THEM WAS A CONTROL THAT REPORTED SUCCESS.**
   Cases 1 and 6 injected bare `h1 {…}` / `.footer-year {…}` rules at specificity (0,0,1); Astro's scoped
   styles compile to `h1[data-astro-cid-…]` at (0,1,1) and silently won. The mutation was correctly
   written, correctly applied, **correctly served** (verified by curl against the preview server) — and
   never reached a pixel. ⭐ **A non-red is one of three things — a weak gate, a mutation aimed at the
   wrong assertion, or a mutation aimed correctly and INERT — and naming which is the whole point of the
   harness.** Case 1 announced itself by failing; **case 6 was a control, so it announced success**.
   *A control that passes for the wrong reason is worse than no control, because it certifies a mechanism
   it never exercised.* ⚠ And note the surface error underneath: `grep` proved *"the mutation is in the
   file"*, which is **not** the claim *"the mutation changes the render"* — convention 17's amendment, in
   my own harness.
3. **⭐⭐ THE HOMEPAGE WAS UNSTABLE, AND MY FIRST THREE EXPLANATIONS WERE ALL WRONG.** At zero tolerance
   `home` alone failed, both themes, repeatably. Rejected **at the object**, in order: a partially-decoded
   hero PNG (added an image-decode wait — no change); a randomly-picked hero variant (the `<img>` src is
   static in `dist`); an unstable *region* (**two full-page captures 600 ms apart are pixel-identical** by
   a sharp-based row diff, and every 800 px band is stable alone — only the PNG *byte length* moved).
   The cause is **the capture perturbing the page**: `fullPage` resizes the viewport → the hero's
   `ResizeObserver` (`HomeHero.astro:610`) redraws the canvas → the stability check can never converge.
   Only `home` carries that canvas.

### ⭐ The remedy that was rejected, and why it matters more than the one that was taken

Every one of those three had a **mask** available as a fix, and each mask would have gone **green**.
Masking the hero would have blanked *the one region the campaign explicitly protects* — **over-masking
arriving disguised as a flake remedy, which is exactly how masks grow** (FINDING 4's hazard, met in the
wild within an hour of authoring the gate against it). Taken instead:

- `reducedMotion: 'reduce'` — **the site's own mechanism**; `HomeHero.astro:593` starts the rAF loop only
  `if (!reduceMQ.matches)` and otherwise renders a deterministic static frame.
- The canvas overlay is **hidden, not masked**, so the **SSR SVG beneath it is asserted** — the
  component's own declared no-JS/a11y baseline (`HomeHero.astro:428`), build-time generated and
  deterministic. Hiding *reveals* a guarded layer where a mask would have removed one.
- ⚠ **Stated limitation, on the gate's face**: these baselines assert the **reduced-motion** rendering,
  and the animated constellation's own drawing is **not covered and not claimed**.

### Recorded as results, not assumptions

- **Masks: 2**, each with a reason — `.doc-provenance-updated` (git-derived freshness date, confirmed
  dynamic) and `.footer-year`. The year got a **new `<span>` in `Footer.astro`** so the mask could be
  tight: `.footer-copyright` would have swallowed **the MIT licence claim**, a truth claim the site makes.
- **Non-masks: 6, enumerated with reasons** — derived counts (load-bearing; a change *must* go red),
  `Math.random()` diagram ids (DOM `id` only, zero pixels), `BUILD_DAY` (reaches only `.txt`/`.json`/`.md`
  twins, never HTML), changelog/proposal dates (`timeZone: 'UTC'` pinned), the `/vaults/graph/` SVG
  (build-time, `?raw`, zero runtime JS — **the obvious mask candidate, and it would have blanked the exact
  subject that template guards**), and the hero canvas exclusion above.
- **FINDING 12's control passed**: `gates.yml` already runs `mcr.microsoft.com/playwright:v1.59.1-noble`,
  so AC1 added a snapshot **project**, not a CI substrate. The runner **asserts** the local pin equals CI's
  rather than trusting it.
- **`npm run test:gates` was `playwright test` with no `--project`** — it would have dragged the snapshot
  lane onto developer Macs and produced **24 red on a good tree**. Pinned to `--project=chromium`; the
  visual lane is its own script and its own CI step.
- **gate-30's 2 reds were convention 6's documented case**, not a regression: `astro build` does not inject
  redirects. Diagnosed by asking which step produces the thing it asserts — then `inject_redirects.mjs`,
  then 633 green.
- ⚠ **Named so it is not discovered later: the baselines are 15 MB across 24 files.** Full-page capture is
  what makes the coverage real; the payload is the price and it is stated rather than absorbed.

## Files touched

**Created** — `site/tests/gates/gate-49-visual-regression.spec.ts` · `site/tests/gates/__screenshots__/`
(24 baselines) · `site/scripts/visual_regression_container.sh` · `site/scripts/visual_regression_redtest.sh`
· this session file.
**Modified** — `site/playwright.config.ts` · `site/package.json` · `site/src/components/common/Footer.astro`
· `.github/workflows/gates.yml` · `campaign_haussmann/CLAUDE.md` ·
`missions/mission_haussmann_p4_4_ci_hardening.md` · `artifacts/p4_4/ac_amendment_proposal_p4_4b.md`.

## SITREP

**Completed** — ⛩ the P4.4b signature applied (proposal `accepted` + 4-field ratification block; AC1–AC4
and V1–V4 amended and **labelled `[asserts AC-n]`**; B2 split into B2a/B2b; ruling 4's same-diff index
correction; budget re-ratified) · **B0 shipped and verified**: `gate-49` (26 assertions), 24
container-generated baselines, the in-container runner, and V1's 7-case red-test at **7/7**.

**Verified `[D]`** — suite **633 → 659** (derived via `--list` on both lanes) · standing lane **633**
(632 passed + 1 skipped) · gate-49 **26/26 green on two consecutive container runs at ZERO pixel
tolerance** · V1 **7/7** in-container · gitleaks **946 commits, no leaks** · **no deploy** (P4.4b is met
on-build).

**In progress** — P4.4b: **B1** and **B2a** remain (session 2), **B3** + AAR (session 3).

**Next up** — **B1**: the field instrument, **wired AND emitting** — V4's amended limb tests *emits*, not
*shipped*, and the campaign has been bitten twice by the difference. Then **B2a**: the Unlighthouse sweep,
**failing loudly** — V3 requires a run that actually goes **red**, because one passing run proves the sweep
executes, not that it fails.

**Blockers** — none for B1/B2a. ⛔ **B2b is held by ⛩ operator ruling (c)** pending Vitruvius's ⊳ D-E reply
(delivered `44c4d79`, `ack_required: true`, no reply `[D]`). It re-enters at **its own ⛩ gate**; it does not
absorb into B2a.

**⛩ Owed to the operator** — a **push** (2 unpushed: `4d0fd87`, `1816993`). Not taken here: a push is an
outward act needing its own GO, and *"push precedes deploy, each with its own ⛩ GO"* (convention 16).
Nothing here needs a deploy.

**Files touched** — see above.

## Next Session Prompt

Continue HAUSSMANN **P4.4b** at **B1**, in `~/aDNA/aDNA.aDNA`. The mission is
`how/campaigns/campaign_haussmann/missions/mission_haussmann_p4_4_ci_hardening.md`; read
`how/campaigns/campaign_haussmann/CLAUDE.md` first (conventions 1–17), then this session file. **The gate
is signed** — `artifacts/p4_4/ac_amendment_proposal_p4_4b.md` is `accepted`, ⛩ **ruled (c)**: build **B2a**,
**hold B2b** until Vitruvius answers ⊳ D-E. Budget **~280–440 kT / 3 sessions**; ~200–250 kT spent on
session 1, so **B1 (~40–70) + B2a (~60–100)** is session 2. **B0 is done** (`1816993`, `gate-49`, suite
**659** derived, V1 7/7). **B1**: choose + wire the field-p75 instrument (`web-vitals` is not yet a
dependency), shipped in the tree, with the dashboard action and first reading **named as owed** and **not
claimed** — and **V4 must demonstrate it EMITS at least one collected metric on a page load**, because
*shipped is not wired* and this campaign has shipped the difference twice (P4.2's font-weight *"migration
announced in a comment"*, the `aria-live` residue). **B2a**: Unlighthouse over the **CI-built artifact**,
weekly, and **V3 needs a run that goes RED** — a passing run only proves the sweep executes. Its workflow
**joins** `gates.yml`'s existing `concurrency: group: gates-${{ github.ref }}` rather than declaring its
own (AC3's enforced co-run rule; B0's lane and the sweep must not co-run). **Re-read
`/.well-known/adna-build.json` at open, never quote a tree forward**; alias served `51af717` at this
session's open. **No deploy is in scope.** ⛩ **2 commits are unpushed and a push needs its own GO.**
⚠ Run visual work via `npm run test:visual:container` — **never bare on macOS**: the baselines are
container-generated and would produce 24 false reds here.
