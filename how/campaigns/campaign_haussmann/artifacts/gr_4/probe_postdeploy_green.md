---
type: artifact
created: 2026-09-03
updated: 2026-09-03
status: active
last_edited_by: agent_rosetta
campaign: campaign_haussmann
artifact_of: "⛩ deploy GO sitting (post-GR-4). Not a mission increment."
probe: how/campaigns/campaign_haussmann/artifacts/gr_4/deploy_probe_gr_4.mjs
probe_scope: live_alias_verified
deploy_record: "2026-09-03T21:37:31Z mode=prod tree=7cef6e0 url=https://adna-docs-e1ru2wwdg-science-stanleys-projects.vercel.app token=SS_VERCEL_TOKEN"
tags: [haussmann, gr_4, deploy, probe, green, r_124]
---

# GR-4 deploy probe — the GREEN run, against the alias

**`[D]` 2026-09-03 ~21:40 UTC · `https://adna.network` · alias serving `7cef6e0`.**

```
  38 PASS / 0 FAIL   (alias serving 7cef6e0)
```

**Five increments of public copy are live**: the doctrine layer on `/patterns/mission-decomposition`
and `/learn/tutorials/design-a-mission` · the name note on `/commons` · the local-models band on
`/network` · the *What's new* strip on `/` · `§regulated-data` on `/privacy`.

## The deploy itself

`deploy_record: 2026-09-03T21:37:31Z mode=prod tree=7cef6e0`. **No override flags.** The
alias-ancestry guard passed on its own terms — `a852423` is an ancestor of `7cef6e0` — and it was
pre-verified at the session open rather than discovered at the gate. Live headers **4/4 by name AND
value** on the alias (`check_live_headers.mjs`, which since convention 14's fix verifies
`adna.network` rather than a Deployment-Protection login page). The push preceded the deploy under
its own ⛩ GO, so `/.well-known/adna-build.json` names a commit a stranger can resolve.

## ⚠ THE SCRIPT WAS NOT UNMODIFIED BETWEEN THE RED AND THE GREEN, AND THAT COSTS SOMETHING

GR-1's green was worth what it was because *the same unmodified script* had read red four hours
earlier. **This one does not have that property, and the difference is recorded rather than
glossed.**

The first post-deploy run read **33 PASS / 4 FAIL** — all four inside the `AC-5` block, while
*"the strip section is present"* **passed**. The site was right and the probe was wrong: Astro
appends a scoped-style attribute, so the served tag is
`<section class="latest-strip" data-astro-cid-j7pv25f6>`, and an extraction pattern demanding an
immediate `>` returned the **empty string**. Four assertions then failed against nothing.
**A FALSE RED** — the campaign's second, after GR-3's — and the instrument was wrong before its
subject, which is this desk's standing streak.

⛔ **The cheap remedy was the wrong one, for the second time in this probe's short life.** Reverting
to the whole-page match would have gone green instantly and **restored precisely the vacuity the
scoping removed an hour earlier** (those assertions were matching the *footer*). Verified at the
object with `curl` before changing a character, then fixed at the extraction.

## ⚠ AND THE COST IS A RED-PROOF THAT CANNOT ATTRIBUTE — SAID PLAINLY

The four strip-content assertions failed **pre-deploy** and failed **post-deploy-before-the-fix**,
and *both times through the same empty-extraction path*. So:

> **Those four assertions have never been demonstrated to fail for the reason they assert.**
> Their red proves *"no strip"*, never *"strip present, content wrong"*.

That is **GR-3's `F-z` verbatim** — *a demonstration is only worth what it can attribute* — arriving
in a probe written eight hours after this desk quoted it, and it is exactly the class the pre-deploy
record congratulated itself for catching in the *other* two assertions. Catching a class once in a
sitting is not immunity from it.

**Remedy, and it is structural rather than vigilance:** a new assertion —
*"the strip section EXTRACTS (a scoped-attribute change would empty it)"* — now fails **first and
alone** when the extraction breaks, so the harness reports its own defect instead of four content
assertions reporting a fault that belongs to their predecessor. That is O3's `applied()` lesson
(*a case that cannot apply must fail ALONE*) applied to a fetch-and-extract probe.

⛔ **What is NOT claimed:** that the four content assertions are now red-proven. They are not. A
proper demonstration needs a fixture the probe can mutate, and authoring one at the tail of a deploy
sitting would be the seventh instrument this desk has written under exactly those conditions —
conventions 15/16/17 each ruled against it. **Stated as a limit, never implied as coverage.**

## What the controls did

**6/6 green on both sides**, which is what licenses reading the reds as facts about the site rather
than about the script: `/about/` · `/security/` · `/api/registry.v1.json` · GR-1's `<name>`
placeholder still intact in `/get-started.md` · the pre-existing disambiguation still on
`/learn/what-is-adna.md` · the build stamp readable.

⭐ The two `/privacy.md` **restoration guards** — *"moves no data anywhere"* absent, and the GDPR
term of art not used to deny a legal role — passed on both sides by design. They guard the AC-7
enumeration's cuts against a later editor helpfully restoring them, and they are labelled on the
probe's face so nobody counts them among what this deploy proved.

## ⚠ Convention 16, on this file's own face

**This green is a statement with a timestamp, not a standing property.** Every assertion above was
true of `adna.network` at ~21:40 UTC on 2026-09-03. Nothing re-runs it. The campaign found
`F-s` — ten production deploys from another checkout silently un-publishing this vault's work —
precisely because four honest live verifications were never asked again. The habit that catches the
next one is *re-probe the surfaces your phase shipped before trusting a `completed` status*, not
this file.
