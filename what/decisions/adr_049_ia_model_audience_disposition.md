---
type: adr
adr_number: "049"
title: "IA model: one audience architecture, nav within doctrine"
status: accepted
created: 2026-08-16
updated: 2026-08-18
last_edited_by: agent_rosetta
campaign_id: campaign_haussmann
mission_id: mission_haussmann_p2_2_ia_consolidation
supersedes: ""
superseded_by: ""
tags: [adr, haussmann, ia, navigation, d2]
---

# ADR-049 — IA model + audience-branch disposition

## Status

**Accepted** — **Option A**, ratified by Stanley (operator) at ⛩ **DP5**, 2026-08-18, after both
comps cleared ranker ≥4.0. Options authored by mission P2.2 O0; comps and ranker at O1.

**Implemented 2026-08-18** at mission P2.2 O2/O3 — nav to 7, 11 redirects, four link-set copies
collapsed to one, zero duplicate titles, 446/446 gates. Built and gated; **deployment is a separate
⛩** and had not been taken at time of writing.

> **Implementation note — a premise in this ADR was wrong, and the record says so rather than
> quietly diverging.** §Context below calls the `/adopters/*` prose "near-paraphrase" and Option A
> "redirect-only … zero content rewritten". The guard diff at O2 measured otherwise: each adopter
> doc carries a **`## Typical Ontology Extensions` table — 13 unique entity-type rows** across four
> docs, plus a self-reference block and unique glossary links, none of it present in the
> `/use-cases/` twin. The four segment landings are likewise **curated reading-path decks**
> (~1,690w: a 3-week course structure, a procurement checklist, a 60-minute quickstart), not
> narratives. Under SO-6, which this ADR itself restates, all of it **folded into the destination
> before the source retired** — nine folds. The redirect count, the nav decision, and the audience
> surface are exactly as ratified; only the cost line changes, from *zero content rewritten* to
> **zero content discarded; seven destinations gained folded sections**.
>
> The decision DP5 took — *which branch survives* — was a judgment call and it held. The premise it
> rested on was a measurable fact, and ratification does not make a wrong fact right.

## Context

The same audiences are served by up to three URL branches each. Measured on disk `[D]`, not
estimated:

| Audience | Persona landing | `/adopters/` | `/use-cases/` | pages |
|---|---|---|---|---|
| Researcher / lab | `/researchers/` | `adopter-researcher` | `research-lab` | 3 |
| Educator | `/educators/` | `adopter-educator` | `educator` | 3 |
| Enterprise | `/enterprise/` + `/compliance/` | `adopter-enterprise-team` | `enterprise-team` | 4 |
| Startup | `/startup-first-hour/` | `adopter-startup` | `startup` | 3 |
| Solo developer | — | `adopter-solo-developer` | `solo-developer` | 2 |
| Open source project | — | — | `open-source-project` | 1 |

**16 pages serving 6 audiences**, plus 2 hub indexes = 18 URLs. Both dynamic routes render
`doc_title`, so **four `<title>` strings are byte-identical across two URLs each** — `Solo
Developer`, `Enterprise Team`, `Educator`, `Startup` — with `Researcher`/`Research Lab` a fifth
near-pair. The prose is near-paraphrase: the `/use-cases/` variants open on a named persona
("Meet Dr. Maya Chen"), the `/adopters/` variants strip the name and keep the same scenario.

This is audience-segment IA standing in for positioning — **anti-pattern 7.7**, whose own rule is
that segment pages are legitimate *only after* the proposition is narrowed. ADR-048 narrowed it at
DP2, which is why this decision is now unblocked rather than premature.

**The skeleton underneath is sound** and must not be regressed: zero orphans in the audit,
10/10 high-value destinations within ≤2 clicks. The audience layer is the debt, not the structure.

### What the positioning says the site is

ADR-048's accepted lead sentence names three things, in this order: *"This site is **the standard**,
**its docs**, and **the registry** of workspaces — 'vaults' — that run it."* Any IA that does not
make those three legible at the top level is arguing with the positioning it just ratified.

### The duplication is not only in the pages

The audience link set exists in **three independent copies** plus a fourth partial `[D]`:

| Copy | Location |
|---|---|
| "For you" nav group | `site/src/utils/navigation.ts:280-287` |
| `audiences` array (trailing slashes) | `site/src/data/home.ts:139-146` |
| `pathCards` hand-written hub cards | `site/src/pages/adopters/index.astro:16-36` |
| `terminalRoutes` breadcrumb labels | `site/src/components/common/Breadcrumb.astro:41-47` |

The five personas are additionally nav-listed **twice** (`navigation.ts:179-188` under Community
*and* `:280-287` under "For you"). **Any option that does not collapse these to one source merely
moves the duplication** — this is an acceptance condition, not a nicety.

### Nav today

**8 top-level items** = 7 flat links (Network · Vaults · Commons · Learn · Patterns · Use Cases ·
Community) + a `More` disclosure holding **Reference · Glossary · Guides · For you** = 11
destinations, plus a persistent header CTA to `/get-started`. Hero CTA is already compliant at
1 primary + 1 secondary.

**The ceiling is ≤7 with no load-bearing `More`** (operator ruling, 2026-08-18; the mission's
acceptance criterion and this ADR's original decision space both said ≤7 — only the charter's
summary row said ≤8, and it is corrected to match). `More` currently holds Reference and Glossary,
which are load-bearing by any reading, so **the current nav fails the criterion on both counts**.

## Decision space

1. **Canonical audience surface** — `/use-cases/*` vs `/adopters/*` vs fold into positioned
   sections. Losers 301.
2. **Segment pages** (`/researchers` etc.) — retire-with-redirects vs retain as campaign landers
   demoted from primary nav (7.7's legitimate use).
3. **Nav set (≤7)** — which survive; where Commons and Community sit.
4. **CTA law** — 1 primary + 1 secondary (already met; must not regress).
5. **Startup slug** — `/startup-first-hour/` label/slug mismatch.

### Inherited obligations (not open questions)

- **`/compliance/` → "Provenance & audit"** — assigned to P2.2 by **ADR-048** §Dispositions,
  already ratified at DP2. The rename is owed regardless of which option wins. Note this makes
  `/compliance/` a **topic** page, not an audience page — it leaves the audience set either way.
- **Enterprise Architect routing gap** — `/compliance` and `/enterprise` are unreachable from
  either disclosure surface (charter, carried into P2.2).
- **Content is re-homed, never deleted** (SO-6 applies to prose). Everything that moves 301s under
  ADR-051's law, which is now accepted and live.

## The three options

Redirect counts below are exact, derived from the route inventory `[D]`.

### Option A — Consolidate to `/use-cases/*`

The narrative surface wins: it is the richer prose, the more conventional public label, and the
larger set (7 pages vs 6).

| Move | URLs 301'd |
|---|---|
| `/adopters/` hub + 5 persona docs → their `/use-cases/` twin | 6 |
| 4 persona landings → matching use-case (`/researchers`→`research-lab`, etc.) | 4 |
| `/compliance/` → `/provenance-audit/` (ADR-048 rename) | 1 |
| **Total** | **11** |

`open-source-project` and `solo-developer` already have exactly one home. Surviving audience
surface: `/use-cases/` + 6 = 7 pages, one per audience, zero duplicate titles.

**Nav (7):** Standard · Learn · Vaults · Network · Commons · Use Cases · Community.
Reference+Glossary fold under **Standard**; Patterns+Guides fold under **Learn**; "For you"
dissolves into Use Cases.

**Against it:** "Use cases" is a marketing register on a site whose positioning is deliberately
anti-marketing; it describes *scenarios* where the reader wants *instructions*.

### Option B — Consolidate to `/adopters/*`

The persona-profile shape wins; `/use-cases/*` retires into it.

| Move | URLs 301'd |
|---|---|
| `/use-cases/` hub + 6 docs → `/adopters/` equivalents | 7 |
| 4 persona landings → matching adopter page | 4 |
| `/compliance/` → `/provenance-audit/` | 1 |
| **Total** | **12** |

**Against it, and this is close to disqualifying:** it retires the *richer* content into the
thinner shells, so the migration is a real rewrite rather than a redirect. It also has no home for
`open-source-project` (no adopter twin exists), and "adopters" is insider vocabulary — a stranger
does not self-identify as an adopter. Carried because the mission named three options and a real
comparison needs the losing case stated honestly, not strawmanned.

### Option C — Retire into positioned sections (task taxonomy)

**Both** branches retire. The site stops sorting readers by *who they are* and sorts work by *what
they are trying to do* — which is what the positioning actually promises ("always know where things
live").

| Move | URLs 301'd |
|---|---|
| `/adopters/` hub + 5 docs | 6 |
| `/use-cases/` hub + 6 docs | 7 |
| 4 persona landings | 4 |
| `/compliance/` → `/provenance-audit/` | 1 |
| **Total** | **18** |

Audience prose folds into `/get-started/` as **task paths** — *start a vault · adopt it across a
team · teach with it · evaluate it for provenance & audit* — and the scenario narratives survive as
**evidence**, not as segments: worked examples attached to the task they illustrate.

**Nav (6):** Standard · Learn · Vaults · Network · Commons · Community — with `/get-started` staying
the header CTA, which is where a task taxonomy belongs.

**Against it:** the largest single move (18 URLs), and it deletes the browsable "is this for me?"
surface that a first-time visitor uses to self-select. It is also the hardest to reverse.

## Comparison

| | A — use-cases | B — adopters | C — task sections |
|---|---|---|---|
| URLs 301'd | 11 | 12 | 18 |
| Content rewrite required | none (redirect-only) | **substantial** | moderate (re-frame) |
| Duplicate titles eliminated | 4 | 4 | 4 |
| Nav items | 7 | 7 | 6 |
| Collapses the 3 link-set copies | yes | yes | yes |
| Matches ADR-048's three-part self-description | partial | partial | **yes** |
| Keeps a self-select surface | **yes** | yes | no |
| Reversibility | high | low | low |

## Recommendation (agent — not a decision)

**A or C, decided by the comps.** B is dominated: it costs more redirects *and* a rewrite to land
the weaker vocabulary on the thinner content.

A and C differ on a genuine question the ranker should answer rather than the author: **does a
first-time visitor need a self-select surface, or does one sort readers into segments the
positioning just spent a phase collapsing?** A keeps the acquisition asset; C is the more honest
expression of what the site says it is. That is a design judgment with real evidence on both
sides — which is exactly the shape of decision DP5 exists to take.

## Consequences

- 11–18 URLs 301 under ADR-051's now-live law; the redirect map absorbs them at one edit each.
- Four duplicate `<title>` pairs disappear; each audience gets exactly one canonical URL.
- The four copies of the audience link set collapse to one; the persona double-listing ends, which
  also dissolves the `navigation.ts:10-13` ordering constraint ("For you" must follow Community, or
  `SidebarNav` scopes to the wrong group).
- **Same-diff cost (ADR-057), to be paid in the implementing commit**: `gate-13-nav-surfacing`
  (its test name hardcodes "8-item desktop row"; asserts `.nav-desktop a[href="/commons"]` visible
  with exact text; a 1024px fit; the exact footer href set; and a triple-coupling of the "For you"
  group label, the `/educators` href, and the breadcrumb), `gate-24-copy-craft` (11 hardcoded
  CardGrid index routes — any branch merge fails it immediately), `gate-26-claim-register`,
  `audit-p1s3-sweep` (44 routes), `gate-4-a11y` (20), `gate-9-responsive` (17), `gate-30-url-canonical`.
- `Footer.astro:12-33` is **not** derived from `navigation.ts` — it is a hand-maintained 18-link
  list and needs its own edit.

## Ratification

| Field | Value |
|---|---|
| **Decision** | **Option A — consolidate to `/use-cases/`.** The 5 `/adopters/adopter-*` docs and the `/adopters/` hub fold into their `/use-cases/` twin; the 4 remaining segment landings retire with 301s; `/compliance/` becomes the topic page `/provenance-audit/` per ADR-048. Nav to **7**: Standard · Learn · Vaults · Network · Commons · Use Cases · Community — Reference+Glossary absorbed by Standard, Patterns+Guides by Learn, "For you" dissolved. CTA stays 1+1. **11 redirects, zero content rewritten.** |
| **Ratified by** | **Stanley (operator)** — in-chat `AskUserQuestion` at ⛩ DP5 |
| **Gate** | **DP5**, at mission P2.2 O1, after both comps cleared ranker ≥4.0 |
| **Date** | 2026-08-18 |
| **Status** | **accepted** |

### Why A, on the record

The ranker cleared both and **deliberately declined to separate them** (A 4.03 · C 4.17; 0.14 from a
single synthetic rater is one persona moving one cell). The decision was therefore taken on judgment,
which is what DP5 exists for.

**The reasoning that carried it:** A is the reversible move and generates behavioural evidence
cheaply, and **P2.6 is already a mid-campaign re-score and Decade-2 recalibration** — the natural
place to reconsider a task taxonomy with real data. C commits to a large, hard-to-reverse re-frame
of 13 pages on zero behavioural evidence, and concentrates weight on `/get-started/`, a page not yet
built to carry four task paths (unscored risk, named in the ranker record).

**The cost is accepted, not hidden.** A keeps an identity taxonomy — deduplicated, not retired — so
7.7 is answered only partly. And if C is later adopted, the same content moves twice, producing a
second redirect generation. ADR-051's additive law makes that survivable; it is still churn, and it
was weighed rather than discovered.

**C is not rejected — it is deferred with a named revisit point:** P2.6, on evidence.
