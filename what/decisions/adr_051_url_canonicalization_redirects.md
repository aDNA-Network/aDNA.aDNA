---
type: adr
adr_number: "051"
title: "URL canonicalization: one slug law + a redirect map for every URL ever published"
status: proposed
created: 2026-08-16
updated: 2026-08-18
last_edited_by: agent_rosetta
campaign_id: campaign_haussmann
mission_id: mission_haussmann_p2_1_url_normalization
supersedes: ""
superseded_by: ""
tags: [adr, haussmann, urls, redirects, d2, d12]
---

# ADR-051 — URL canonicalization + redirect policy

## Status

**Proposed** — completed by mission P2.1 (2026-08-18); awaits operator ratification (§7.7).
Agents author decisions; operators ratify them. Implemented in-session under the mission's
`human_gate: false`, but **nothing is deployed** — the live cutover is a separate ⛩.

## Context

24 of 74 vault URLs were mixed-case (`/vaults/III.aDNA/`) beside 50 lowercase (`/vaults/terminal/`).
On a case-sensitive host the wrong casing is a **hard 404 with no recovery** `[D H6]`, so every one
was a permanent, compounding source of dead external links. A previous slug migration left 29 broken
internal links because no redirects were laid `[D B3]` — the cautionary precedent this decision
exists not to repeat.

**Root cause, established at P2.1 O0** `[D]`: this was never a data-entry problem. The generator
resolved a route as `card.vault_slug || slugOf(slug)` — a vault_card that declares its own
`vault_slug` **wins over** the canonicalizing function — and 24 cards declare the raw vault name.
`slugOf()` was already correct; it was simply being bypassed.

## Decision

### 1 · The slug law

**The canonical vault route slug is `lowercase(name)`, `.aDNA` suffix dropped, anything outside
`[a-z0-9_-]` folded to `_`.** So `Operations.aDNA` → `/vaults/operations/`.

Decided on a **collision census across all 74** `[D]`, as the mission required, rather than on taste:

| Candidate law | Distinct slugs | Collisions | URLs it would break |
|---|---|---|---|
| lowercase, **drop** `.adna` (adopted) | 74/74 | **0** | 24 (already broken by inconsistency) |
| lowercase, **keep** `.adna` | 74/74 | **0** | **50** |

Both laws are collision-free, so collisions did not decide it — **incumbency** did. 50 of 74 vaults
already route at the drop-suffix form (`git`, `react`, `regenesis`). Keeping the suffix would break
50 URLs to fix 24, and `.adna` in a URL is redundant on a site where every registry entry is a
vault. Display names keep their true casing in content; only URLs normalize.

### 2 · Where the law is enforced

**Both in the generator and at the consumption boundary, deliberately.**

- `scripts/build_vaults_data.mjs` — now `slugOf(card.vault_slug || slug)`, so a card can no longer
  override the route slug and future regens emit canonical data.
- `site/src/data/vaults.ts` (new) — the single accessor through which `vaults.json` enters the site,
  normalizing `vault_slug` and both edge endpoints on read. Every consumer imports from here;
  gate-30 fails if any source imports the raw JSON again.

**Why the data file was NOT regenerated to land this** — the load-bearing part of this decision.
A `sync:vaults` run today would do something nobody authorized: `Home.aDNA`'s inventory now carries
**77** vaults against the committed registry's **74**, so a regen would silently publish
`Bearly.aDNA`, `RareGraph.aDNA`, and `StrongerWithScience.aDNA` onto a public page — and the first
two are marked *data-bearing, git local-only, NO remote*. That is a **DP4-class admission ruling**
(ADR-052 §admission), owned by the operator and by Hestia's B7 data pass. A URL-casing fix must not
be the thing that publishes them. So: `vaults.json` untouched, pt19 honored absolutely, the count
stays a true 74, and normalization happens on read.

A durable second benefit: because the law is applied where routes are built rather than where data
is written, a future card that re-declares a mixed-case slug **cannot** reintroduce a mixed-case URL.

### 3 · Redirect policy

**301 permanent, additive forever — a published URL never dies.** Sources laid:

| Set | Count | Note |
|---|---|---|
| Mixed-case vault slugs | 24 | generated from `vaults.json`, never typed |
| Pre-existing `astro.config` pairs | 2 | **repaired** — see below |
| B3 stale `.md` reference targets | 5 | only those with a real destination |
| Wayback CDX historical URLs | **0** | see the finding below |

**Finding — the two shipped redirects were half-broken** `[D, probed live 2026-08-18]`.
`/org-context-graphs` and `/patterns/dual-audience` each 301'd, but `/org-context-graphs/` and
`/patterns/dual-audience/` both returned **404** — and the trailing-slash form is the shape every
canonical URL on this site uses (Astro builds `directory` format). The F-CHM-207 "no silent
redirects" fix laid a redirect in the one shape its own site does not emit.

Astro's `redirects:` map **cannot** express the slash form: it normalises keys, so `'/x/'` and
`'/x'` emit the identical `^/x$` route (verified against the built config, not assumed). Vercel does
not normalise before matching either — its `handle: filesystem` phase runs *after* the redirect
routes, which is exactly why the live 404s occur. The repair is `site/scripts/inject_redirects.mjs`,
which widens every emitted redirect's `…$` anchor to `…/?$` so one route answers both shapes. It
carries no redirect list of its own by design — it widens whatever Astro emitted, so there is no
second list to drift.

**Finding — the Wayback CDX sweep returns zero project URLs** `[D]`. Both hosts were swept
(`adna.network`: 20 captures 2018–2024; `adna.dev`: 27 captures 2021–2025). **Every archived URL
belongs to a prior owner** — an evolution-biology group on adna.network (`/the-team`, `/seminars`,
`/blog/*`) and a bootstrap portfolio template on adna.dev (`/assets/vendor/*`). The archive predates
this project's tenure on both domains, so no historical aDNA URL exists to redirect.

**Ruling: prior-owner URLs are NOT redirected.** Pointing `/the-team` or `/blog/article-4` at aDNA
content would claim another organization's URL space and mislead anyone following an old link into
thinking they had found that group's successor. A 404 is the honest answer. Recorded because it is a
judgment, not an omission.

**Not redirected, and why** — 6 of the 11 B3 targets (`projects_folder_pattern.md`,
`adna_bridge_patterns.md`, `template_bare/`, `/patterns/content-as-code`, `how/skills/AGENTS.md`,
`/README.md`) have **no destination on this site**. Inventing one would point a reader at a page
that does not answer their link. They are content fixes and belong to **P2.3** (docs freshness: the
29 broken links + the CI link gate).

### 4 · Enforcement

**gate-30** (`site/tests/gates/gate-30-url-canonical.spec.ts`, 6 assertions, red-proven): every
built vault route directory is canonical · the accessor law and the generator law are the same law ·
the generator cannot let a card override the slug · no site source imports `vaults.json` directly ·
every legacy slug has a redirect declared · every redirect route answers both slash forms and none
catches a canonical URL (loop guard). All assertions derive from the build snapshot and the registry
— never a typed list (WebForge KW-8/FR-K), so a 75th vault does not falsify the gate.

## Consequences

- Zero hard-404 legacy vault URLs once deployed; external links stop rotting.
- The D2/D10 "machine-predictable scheme" anchor becomes satisfiable: an agent can construct a vault
  URL from its name by rule (`lowercase, drop .aDNA`) with no lookup table.
- 24 URLs change. Every one ships with its 301 **in the same deploy** — the additive law is the
  whole point, and B3's un-redirected migration is the counter-example.
- A same-diff cost, paid (ADR-057): gate specs, the homepage curated slice, the hero-graph
  deep-links, and the NetworkDiagram slot lookups all hardcoded slugs and all needed updating. Two
  of those were **silent-drop** sites — a missed lookup was filtered away rather than raised — so
  the curated homepage slice now throws on a miss instead of quietly shrinking.
- **Verification is honest about its limit**: `astro preview` cannot test redirects at all — they
  live only in `.vercel/output/config.json`, never in `dist/`. The control proves it: the
  pre-existing redirect that 301s in production also 404s locally. Redirect behavior is therefore
  verified at the config level plus regex simulation; **the live probe is owed at the deploy ⛩**.

## Ratification

| Field | Value |
|---|---|
| **Decision** | Adopt the slug law (§1), dual enforcement without a registry regen (§2), the 301 policy incl. the prior-owner non-redirect ruling (§3), and gate-30 (§4). |
| **Ratified by** | *(pending — Stanley, operator)* |
| **Gate** | P2 exit review, or earlier at the deploy ⛩ |
| **Date** | *(pending)* |
| **Status** | **proposed** |
