---
type: artifact
created: 2026-09-03
updated: 2026-09-03
status: active
last_edited_by: agent_rosetta
campaign: campaign_haussmann
artifact_of: "⛩ deploy GO sitting (post-GR-4). Not a mission increment."
probe: how/campaigns/campaign_haussmann/artifacts/gr_4/deploy_probe_gr_4.mjs
probe_scope: live_alias_predeploy
tags: [haussmann, gr_4, deploy, probe, red_proof, r_124]
---

# GR-4 deploy probe — the RED run, taken before the deploy

**`[D]` 2026-09-03 ~21:15 UTC · `https://adna.network` · alias serving `a852423`
(built 2026-09-01T19:40:19.817Z, re-read at the probe's own first request, never quoted forward).**

## Result

```
  15 PASS / 22 FAIL   (alias serving a852423)
```

**This red is the artifact.** It is not a problem discovered; it is the thing that makes tomorrow's
green worth reading. P4.5a's finding governs here — *a red run is the only moment an assertion's
vacuous branch is exercised* — and that mission's probe had **passed two checks against production
before the feature existed**. Every assertion below has now been shown capable of failing on this
exact surface.

## The split is what matters, not the totals

| Block | Result | Reading |
|---|---|---|
| AC-1 + AC-2 · the doctrine layer | **5 FAIL** / 2 PASS | the two passes are the routes' `200`s — the pages exist, the doctrine does not |
| AC-4 · `/commons` name note | **2 FAIL** / 1 PASS | ditto |
| AC-3 · `/network` local models | **4 FAIL** / 1 PASS | includes R-161's scoped sentence, absent |
| AC-5 · the homepage strip | **5 FAIL** / 0 PASS | see below — this block was wrong on the first run |
| AC-8 · `/privacy` R-124 | **5 FAIL** / 2 PASS+ | the 2 are restoration guards, labelled as such |
| The stamp | **1 FAIL** / 1 PASS | the alias has not moved off `a852423` — correct, pre-deploy |
| **CONTROLS** | **6 PASS / 0 FAIL** | ⭐ **this is the half that makes the red a proof** |

⭐ **A probe that fails at everything proves only that it can fail.** The controls — `/about/`,
`/security/`, `/api/registry.v1.json`, GR-1's `<name>` placeholder in `/get-started.md`, the
pre-existing disambiguation on `/learn/what-is-adna.md`, and the readability of the build stamp —
are all green, so the 22 reds are attributable to the five increments and not to a broken script or
an unreachable host.

## ⚠ TWO ASSERTIONS WERE GREEN PRE-DEPLOY, AND FIXING THEM IS THE ENTRY WORTH READING

The first run returned **17 PASS / 20 FAIL**. Two of those passes were `AC-5`'s:

> `PASS  it links the changelog`
> `PASS  it links the feed`

**Both were matching the FOOTER**, which has linked the changelog and the feed since long before
this campaign — P2-7 is the finding that they were reachable *only* from there, which is the entire
reason D5 exists. Asserted against the whole page, those two lines are green on a site with **no
strip at all**, and would have stayed green forever while attributing nothing.

⇒ **This file's own header quotes P4.5a about exactly this class, and the probe committed it three
paragraphs later.** Knowing a rule and applying it while writing a different block are separate
acts — P4.5b's lesson, recurring in the instrument written after it.

**Fixed before the deploy, not after:** the strip's own markup is extracted first
(`<section class="latest-strip">…</section>`) and all three link/heading assertions are made
*inside* it. Re-run: **15 PASS / 22 FAIL**, with all five AC-5 assertions red. That is GR-3's `F-z`
— *a demonstration is only worth what it can attribute* — spent at authoring time rather than
discovered in the probe's fourteenth day.

⭐ **And note what caught it: reading the red run line by line, not counting it.** A 20-FAIL total
looks like a thorough red-proof. The two passes sitting inside a block that should have been
entirely red are visible only to a reader, and they were the two assertions that could never have
gone red.

## Also labelled, not silently counted

`AC-8`'s two absence assertions — *"moves no data anywhere" is absent* and *the GDPR term of art is
not used to deny a legal role* — **pass on both sides of the deploy**, because those sentences were
cut by the AC-7 enumeration before anything was published. They are **restoration guards**, behaving
like controls, and the probe now says so on their face. Counting them among the deliverables this
deploy proves would overstate the red-proof by two.

## Surfaces, named per assertion (conventions 17 + 18)

- **`.md` twins** for every reader-facing claim (`/commons.md`, `/network.md`, `/privacy.md`, the two
  doctrine twins) — the verb is *"a reader encounters"*, and Astro splits phrases across source line
  breaks, so a literal HTML match can report a live sentence absent. **This campaign shipped exactly
  that false negative at P4.5b**, in the post-deploy probe for the increment that authored the rule.
- **HTML** for `/privacy/`'s `id="regulated-data"` (an anchor is a DOM fact — and R-124's diagnosis
  is that *the defect is ROUTING*, so a reader must be able to find it by heading) and for the whole
  of `AC-5` (a section class, an `href`, a `datetime` attribute — the twin flattens all three away).
- **Every absence is scoped to a named file**, never asserted site-wide: a site-wide grep for
  R-161's retired sentence would hit the changelog entry whose *subject* is its retirement.

## What the post-deploy run must read

**37/37 PASS, zero FAIL**, from the same unmodified script. Any control failing there means the probe
broke between runs, and is read before anything else.
