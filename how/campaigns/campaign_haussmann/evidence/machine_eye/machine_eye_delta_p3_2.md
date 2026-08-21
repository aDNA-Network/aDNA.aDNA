---
type: evidence
packet: machine_eye_delta
campaign: campaign_haussmann
mission: mission_haussmann_p3_2_registry_json
objective: O3
title: "Machine-eye delta — LOCAL BUILD, 2026-08-21 (items 8/9 after P3.2)"
created: 2026-08-21
updated: 2026-08-21
status: active
last_edited_by: agent_rosetta
probe_target: http://localhost:4321
probe_scope: local_preview_only
deploy_tree: undeployed
tags: [evidence, haussmann, p3_2, machine_eye, d10]
---

# Machine-eye delta — items 8 / 9 after P3.2

> **⚠ READ THE PROBE TARGET FIRST. This packet was measured against the LOCAL PREVIEW BUILD
> (`astro preview`, `http://localhost:4321`), not production.** P3.2 halts before deploy under the
> operator's ship-scope ruling (build → gates → ⛩ GO), so at the time of writing **nothing below
> has been confirmed on `adna.network`**. The live re-probe is **owed at the deploy GO** and this
> packet must be re-run and re-stamped then.
>
> This banner is not boilerplate. Campaign convention 14 exists because `check_live_headers.mjs`
> printed `OK — no drift` for months while reading Vercel's login page — an instrument that had
> never reached the thing it claimed to check. A delta packet whose target is unstated invites
> exactly that reading. **Local-green is evidence about the build; it is not evidence about the
> site.**

All rows `[D]`. Baseline: the genesis packet `machine_eye.md` (2026-08-16, pinned `d58ea13`).

## Result

| Item | Baseline (2026-08-16) | Now (local build, 2026-08-21) | Δ |
|---|---|---|---|
| **8** Registry as JSON/API | **ABSENT — 4/4 → 404**; *"an agent's only path to the vault list is scraping `/vaults/` HTML or parsing slugs out of `sitemap-0.xml`"* | **`/vaults.json` → 200**, `application/json`, 80,997 B, 74 vaults + 14 edges; **`/api/registry.v1.json` → 200**, byte-identical | ▲ **moved** |
| **9** JSON-LD | *"Present but shallow — one block per page, no `Dataset`, no `sameAs`"*; **0 Organization** | **`Dataset` on `/vaults`** with a `DataDownload` pointing at the endpoint; **Organization + `sameAs` on 226/226 pages**; **0 Astro-rendered pages without JSON-LD** (was 3) | ▲ **moved, one half open** |

## Item 8 — one of the four probed paths serves, and that is the decision

The original probe tried four URLs. One now serves:

| Probed path | Then | Now |
|---|---|---|
| `/vaults.json` | 404 | **200** |
| `/api/vaults` | 404 | 404 |
| `/vaults/index.json` | 404 | 404 |
| `/data/vaults.json` | 404 | 404 |

**The other three are deliberately not aliased.** The operator ruled a two-URL contract this
session — `/vaults.json` canonical, `/api/registry.v1.json` pinnable — and every additional alias
is another URL that would need its own deprecation story under clause 7. Four synonyms for one
resource is not four times the discoverability; it is four times the surface to keep honest.

Discovery is handled by advertising rather than by guessing: `llms.txt` names both endpoints in a
`## Reading the registry as data` section, `/vaults` links them in the page body, and
`/reference/registry-api` documents the schema. **An agent that reads the site's own machine index
finds the endpoint on the first try; only an agent guessing blindly hits the three 404s.**

Recorded plainly because a fresh scorer at P5.2 may weigh it differently, and they should have the
reasoning rather than a bare 1/4.

## Item 9 — the Organization finding was a measurement artifact

The baseline read **"0 Organization blocks found"** and **"no `sameAs`"**. Both were true of what
the census measured and false of the site: `jsonld_census` counted **top-level `@type` only**, and
this site's Organization is nested as `publisher` inside every block, carrying `sameAs` since
**P1.2** — `seo.ts:11` says so in its own comment. Re-probed on the live-shaped build:
**226 pages, 226 Organization occurrences, 0 without `sameAs`.**

⊳ **D-I** ruled the nested `WebSite.publisher` form satisfies the requirement, so the correct entry
is *verified*, not *built*. Stated here so the P5.2 re-score does not credit P3.2 with work P1.2
did — the counterpart to not claiming the anchor.

**A parser that walks `@graph` and nested nodes is the fix for the instrument.** The naive
top-level count also mis-reads this site's 121 `BreadcrumbList` / 113 `TechArticle` blocks as
untyped. Any future census must flatten before counting.

## Item 9's open half — vault entity pages are still generic `WebPage`

The baseline's exact wording: *"`/vaults/III.aDNA` (a vault-entity page) → generic `WebPage`, not
`Dataset` or `SoftwareSourceCode` despite vaults being structured, typed, governed entities."*

Re-probed: `/vaults/iii/` → still a single `WebPage` block `[D]`. **P3.2 does not close this.** The
mission's acceptance criterion says *"`Dataset` JSON-LD on the registry"* — the registry, singular —
and the registry index now carries it. Per-entity typing across 74 vault pages was never chartered,
and typing them would be a claim about what a vault *is* that deserves its own ruling (a vault is
not obviously a `Dataset`, and `SoftwareSourceCode` is wrong for the 73 with no public repo).

**Item 9 is therefore "moved, one half open"** rather than closed. Routed as a follow-up rather than
quietly satisfied — the AC is met; the item's full finding is not.

## Full-site census (local build, `@graph`-aware)

```
pages scanned          : 226
pages WITHOUT JSON-LD  : 2  → 404.html, install.html   (both excluded by decision, ADR-056 cl.4)
@type census:
   BreadcrumbList  121      WebPage         84      HowTo      10
   TechArticle     113      CollectionPage  16      WebSite     1
   Dataset           1
Organization occurrences: 226   ·   Organization without sameAs: 0
```

Against the 2026-08-16 baseline of 202 pages / 3 without JSON-LD: the three named gaps
(`design-system`, `privacy`, `security`) are **closed**. The two remaining are `404.html` (describing
a page that does not exist is a claim, not metadata) and `install.html` (a static `public/` asset
owned by the installer lane — covering it would be a cross-lane edit, not a fix).

## What this packet does not evidence

- **Anything about `adna.network`.** Undeployed at time of writing; see the banner.
- **The D10 re-score.** Claims move down to verifiability, and the re-score belongs to P5.2 with
  fresh isolated scorers, never to the mission that did the building (the same discipline P3.1
  applied to anchor 4).
- **Clause 7 in anger.** A versioned URL and a 90-day window now exist; no breaking change has yet
  tested either.
