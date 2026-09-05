---
type: artifact
title: "Speed Insights transport — DESIGNED, NOT BUILT, and the reason is measurable: it reds gate-42 and it outruns /privacy's own commitment"
campaign: campaign_haussmann
mission: mission_haussmann_gr_6_instrument_calibration
created: 2026-09-05
updated: 2026-09-05
status: proposed
last_edited_by: agent_rosetta
tags: [artifact, haussmann, gr_6, speed_insights, cwv, p75, privacy, gate_42]
---

# The Speed Insights transport, designed rather than shipped

> ⛩ **Ruling 2, 2026-09-05:** *"Operator enables Speed Insights now; this desk builds the transport."*
> The operator half is theirs and is proceeding. **This file is the desk half, and it stops short of
> the build on evidence** — three preconditions that the approved plan did not know about, each
> verified at the object here.

## §1 — The plan said "one additive change." That was wrong, and the artifacts said so first

The approved plan characterised this as *"add `@vercel/speed-insights` to `site/package.json` and mount
the component in the shared layout — one additive change, purely additive, zero-diff for non-opting
pages."*

⛔ **`src/scripts/vitals.ts:9-16` had already ruled otherwise, in its own header, at P4.4b B1:**

> *"Deliberately zero-network. **Three standing constraints rule out any transport from this module
> today** … When that lands, **the transport is added at its own gate** and `/privacy` is updated
> **BEFORE** it ships, per that page's own commitment."*

⇒ **The plan proposed as trivial a step the codebase had already scoped as its own gate.** ⭐ Note how
it survived: the plan was written from the *owed-item line* (*"⛩ Speed-Insights → transport → first
p75"*), which names the **sequence** and not the **conditions** — and the conditions live in the module
the sequence points at. ***A routing claim verified in the prose that routed it*** (`F-u`'s class,
seventh sighting), committed in a plan written to close an orphan of exactly that kind.

## §2 — The three preconditions, verified at the object `[D] 2026-09-05`

### P-1 · `/privacy` commits, in the site's own voice, to updating BEFORE the transport ships

`src/pages/privacy/index.astro:81-82`, rendered copy:

> *"…site performance — a change we may make — **we will update this page before that ships**, per the
> commitment below."*

and `:168` extends it to *"…and note it in the site changelog."* The same obligation is restated as a
source comment at `:15`.

⇒ **Shipping the transport first would falsify a live sentence on the trust page at the moment of
shipping** — convention 1, on the surface this campaign has now scoped **five** times (`R-64`
`/get-started` · `R-97` `/` · `R-161` `/network` · `R-167` `/privacy` · C1's key enumeration). ⭐ And it
would be the **first** of those five committed *by us, knowingly, in the same act that made it false* —
every prior instance was a sentence that went stale while nobody watched.

### P-2 · `gate-42` reds on every route, by construction

`gate-42-console.spec.ts:127` registers `requestfailed`; `:134` collects **same-origin** failures into
`assetFailures`; `:212` fails the suite with *"the site serves these itself, so a failure is ours."*
The gate drives **`astro preview` across every route × both themes**.

Speed Insights is a **first-party-script** integration: its script and its beacon are served from a
`/_vercel/…` path **by the Vercel platform, not by the app**. Under `astro preview` there is no
platform ⇒ **the request is same-origin and fails on every route.**

⚠ **Provenance, stated at its width:** that gate-42 fails on *any* same-origin request failure is `[D]`
(read at the lines above). That Speed Insights' endpoint is platform-served rather than emitted into
`dist/` is `[I]` from its documented first-party-script design — **not measured here, because measuring
it means installing and building, which is the build this file declines to perform.** ⭐ The design does
not depend on which: **any** transport whose endpoint the platform serves has this shape, and the
settling measurement is named in §4.

⭐ **This is the gate doing its job, not obstructing.** `gate-42` exists because a console/asset failure
is invisible to every other instrument; a transport that 404s in preview is exactly the class it
watches.

### P-3 · The CSP already permits it, so the CSP is *not* the blocker — and saying so matters

`vercel.json:8`: `default-src 'self'; script-src 'self' 'unsafe-inline'; … connect-src 'self'`.

A `/_vercel/…` script and beacon are **same-origin** ⇒ `'self'` covers both. ⛔ **No CSP widening is
required, and none should be proposed.** ⭐ Recorded because `vitals.ts:10-11` names the CSP first among
its three constraints, so the obvious reading is *"widen the CSP"* — which would **loosen the site's
strongest header for a reason that does not exist.** ***A constraint list is not a diagnosis***; two of
its three entries (CSP, static output) are satisfied by the first-party design, and the one that
actually binds is the third, gate-42's preview surface — the entry the list mentions last.

## §3 — The design

**One additive dependency, one mount, one gate, one page edit, in this order:**

| # | Step | Why it is where it is |
|---|---|---|
| 1 | **`/privacy` gains the transport disclosure** — what is sent, to whom, that it carries no cookie or identifier — and a changelog entry | **P-1.** The page's own commitment is *before it ships*, and the only way to honour that is to land it in an earlier commit or the same one |
| 2 | `@vercel/speed-insights` added to `dependencies`; component mounted **once** in `BaseLayout.astro` beside the existing `vitals` import | Purely additive; the existing emitter is untouched and stays the in-page half |
| 3 | **`gate-42` gains a named exclusion for the platform-served path**, asserted rather than assumed | **P-2.** The exclusion **is part of the claim** (`gate-48`'s ratified discipline): the path is enumerated, and a failure at *any other* same-origin path still reds |
| 4 | **A new gate asserting the transport is MOUNTED, not merely installed** | `V4`'s amended limb — *shipped is not wired* — the defect P4.4b B1 was built against. A dependency in `package.json` is not a transport |
| 5 | Red-proof, **one mutation per assertion**, each red at its **declared** assertion set | GR-3's `F-z` clause: *a demonstration is only worth what it can attribute* |

⛔ **Step 3 is the one to get wrong.** The cheap version excludes `/_vercel/**` wholesale and **blinds
gate-42 to an entire path prefix forever** — the over-masking shape that arrived at B0 *"disguised as a
flake remedy."* The exclusion is the **single** path, enumerated, with `G42`-style asserted arithmetic.

## §4 — What is owed, and by whom

| Owed | Owner | Settles |
|---|---|---|
| Dashboard enable for `adna-docs` | ⛩ **operator** (in progress) | the collector exists |
| The five steps above, at their own ⛩ gate | this desk | the transport ships |
| **The P-2 measurement**: install, build, run `gate-42`, record whether the failure is the predicted same-origin 404 | this desk, **at that gate, before step 3 is written** | turns P-2 from `[I]` to `[D]` and **sizes the exclusion** |
| A **deploy** carrying it | ⛩ operator | data begins accumulating |
| First **p75** reading | traffic + time | `P5.2`'s D12 field limb |

⚠⚠ **THE CLOCK IS THE POINT, AND IT DOES NOT START HERE.** `P5.2`'s criterion is *"both binary gates
green **WITH field data**"*, and Δ5 names Speed Insights as **the** field-p75 instrument (CrUX will not
publish at this traffic; keyless PSI is quota-dead). The chain is **enable → transport → deploy →
traffic → p75**, and only the first link moved today. **This remains the campaign's longest-lead item**,
and this file does not shorten it — it stops it from being shortened by shipping something that reds the
suite and falsifies the trust page.

⚠ **Interaction with `P5.1`, named so it is not discovered.** `AC-1` pins the panel stimulus to *the
live production hero at the recorded build stamp*. A deploy carrying this transport **during** the panel
window means panellists read a build that no longer serves. ⇒ **the transport deploy goes before
recruitment opens, or after the panel closes — never during.**
