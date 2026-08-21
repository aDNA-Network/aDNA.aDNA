---
type: adr
adr_number: "056"
title: "The agentic-surface contract: twins, llms artifacts, registry JSON, MCP server — versioned and self-conformant"
status: proposed
created: 2026-08-16
updated: 2026-08-21
last_edited_by: agent_rosetta
campaign_id: campaign_haussmann
supersedes: ""
superseded_by: ""
tags: [adr, haussmann, agentic, machine_legibility, d10]
---

# ADR-056 — Agentic-surface contract

## Status

**Proposed** — contract shape fixed at genesis; **clauses 1, 2 and 7 built and evidenced at P3.1
(2026-08-20)**; **clauses 3 and 4 at P3.2 (2026-08-21)**; clauses 5–6 land at P3.3. Ratification is
the operator's at the **P3 exit**, not the builder's (§7.7) — a clause being implemented is not a
clause being accepted, and this ADR stays `proposed` until it is signed even though most of the
machinery below is now live.

## Context

The machine layer is present-but-incomplete (H8 reframed): llms.txt curated but **never linked from any page**; llms-full.txt a 2 KB index wearing a corpus name; `.md` twins 404 while 29 legacy links expect them; no registry JSON (4 paths 404); no content negotiation (byte-identical ETag); JSON-LD shallow (0 Organization site-wide); no MCP server; self-conformance narrated on one deep page, not structural `[D machine_eye]`. D10 = 3/5; the thesis-critical anchor-5 items are all absent. Verified patterns: MCP's twins + pointer block; Mastra's npx docs-server; PEPs' advertised JSON; Vercel's first-party negotiation.

## Decision (proposed contract)

1. **Twins**: every content URL resolves `.md`, generated from the same single source as HTML (zero drift channel), each front-loading the llms.txt pointer block. `Accept: text/markdown` negotiation on prerendered pages.
2. **llms artifacts**: llms.txt = the curated index, linked from site chrome + robots comment; llms-full.txt = a true full corpus (or renamed honestly).
3. **Registry data**: a versioned JSON endpoint serving the ADR-052 public projection; documented + advertised; consumers can pin the version.
4. **Structured data**: Organization+sameAs sitewide; Dataset on registry; TechArticle on docs; schema-dts-typed at build.
5. **MCP server**: npx-runnable over docs+registry (official TS SDK), published under the org scope; the homepage names the canonical agent entry point.
6. **Self-conformance is demonstrated *and stated***: a published machine-legibility conformance report (the 13-item checklist) + the homepage sentence — worded register-verifiably.
7. **Versioning law**: machine surfaces are contracts — breaking changes get versioned URLs + deprecation windows, never silent swaps.

## As built at P3.1 — clauses 1, 2, 7

*Recorded here because a contract that only ever states intentions is not a contract. Each row is
what shipped, not what was planned; `[D]` throughout, measured on the build of 2026-08-20.*

### Clause 1 — twins + negotiation

**221 twins, three derivation tiers.** The genesis wording said "generated from the same single
source as HTML," which quietly assumed every page *has* a markdown source. It does not — and all
ten of the machine-eye probes that scored this clause target bespoke `.astro` pages. The clause
holds; the derivation has three tiers rather than one:

| Tier | Set | Count | Derivation |
|---|---|---|---|
| A | the 6 content collections | 114 | `entry.body` — the source the HTML renders from |
| B | registry (74 vaults + index) | 75 | the same `vaults.json` projection the page reads |
| C | bespoke `.astro` prose pages | 32 | post-build extraction from the rendered HTML |

**Zero drift channel, by construction rather than by promise** — tier A *is* the source; tiers B
and C derive from the same projection / the built artifact. An authored sidecar was rejected for
being exactly the drift channel the clause forbids.

**Negotiation** is one exact Vercel route per twin, keyed on `Accept: text/markdown`, each carrying
`Vary: Accept`, spliced before `handle: filesystem`. Not a blanket rewrite: that would 404 every
path without a twin, turning working HTML into an error for the clients this clause exists to
serve. The ETag differs because the twin is a different object — the finding was one cached object
served for two requests, so serving a different object is the whole fix.

**Three routes have no twin, by decision**: `/404`, `/design-system` (its content *is* its
rendering), `/vaults/graph` (SVG geometry; its keyboard twin is `/vaults`). They do not advertise
one either — a pointer to a 404 is worse than no pointer.

### Clause 2 — llms artifacts

`llms-full.txt` is a true corpus: **~920 KB, 221 sections**, up from 2,476 B. The route list, vault
taxonomy and edge legend it used to be are retained as its table of contents, so the rewrite
dropped nothing. The name stays and is now accurate. *(Both branches the mission offered required a
real corpus regardless — the corpus was always mandatory; only the name was ever in question.)*

`llms.txt` is linked from the footer, named in `robots.txt`, and declared per-page via
`<link rel="alternate" type="text/markdown">`. The measure that scored this — the literal string
`llms` appearing **zero** times in page HTML — now reads 2 per page.

### Clause 7 — versioning law

The law is stated and, at P3.1, **not yet exercised**: no machine surface has had a breaking change
to version. Recorded plainly rather than claimed as satisfied. What P3.1 does add is the mechanism
the law needs — `twin_manifest.json`, emitted and never typed, is the single lock every consumer
(negotiation routes, corpus, gates) reads, so a future URL change has exactly one place to change
and a gate that notices.

**Adopted from WebForge FR-N / N2**: every machine surface carries a dated build-time-snapshot
line (`State is a build-time snapshot generated YYYY-MM-DD (UTC); nothing here is live.`). The
timezone is named because the first build stamped `2026-08-21` at 22:18 local on the 20th, and an
unzoned date on an honesty line invites the reader to catch it disagreeing with the changelog.

### What P3.1 does not settle

Clause 3 (registry JSON), 4 (structured data — note `Organization`+`sameAs` already shipped
unremarked at P1.2, so this clause is half-done by accident), 5 (MCP server), and 6 (published
conformance report + homepage sentence) are P3.2/P3.3 work.

## As built at P3.2 — clauses 3, 4

*Same discipline as the P3.1 record above: each row is what shipped, not what was planned. `[D]`
throughout, measured on the build of 2026-08-21.*

### Clause 3 — registry JSON

**Two routes, one producer.** `/vaults.json` is canonical and advertised; `/api/registry.v1.json`
is the pinnable twin. Both call `renderRegistryJson()` in `site/src/utils/registryJson.ts` and are
asserted **byte-identical** — 81 KB, 74 vaults, 14 edges.

The two-URL shape was an **operator ruling** (2026-08-21), taken because the mission's acceptance
criterion ("a versioned public registry endpoint") and this ADR's own clause 7 ("breaking changes
get versioned URLs") point different ways, and the in-vault precedent shipped three days earlier at
P3.5 (`/community/proposals.json`) puts the version in the *body* at an unversioned path. Serving
both satisfies each reading without forcing a consumer to choose: `/vaults.json` is the URL an
agent constructs unprompted — it is the first path `machine_eye` item 8 probed — and the versioned
URL exists *before* the first breaking change rather than after it, which is the only moment
creating one is useful.

**Deprecation window, stated while nothing depends on it**: a breaking change lands at a new
versioned URL; the previous version keeps serving for **at least 90 days**; `/vaults.json` follows
the new version only after that window closes. Additive fields are not breaking. The policy ships
inside the payload (`about.versioning`), not only in prose a consumer will not fetch.

**The public field set is derived, not chosen.** `PUBLIC_VAULT_FIELDS` is the union of what the
registry's own public surfaces already render: the 18 fields `/vaults/[slug]` shows plus
`card_present`, which the card shows. Nineteen fields. The remaining eleven of the registry's
thirty are excluded **because no page publishes them** — including some that are non-empty
(`persona_archetype` 16/74, `federation_refs` 6/74, `companion_vaults` 3/74, `umbrella_pillar`
1/74). Relationships reach consumers through `edges[]`, which the graph page does publish, so the
per-vault duplicates would have been a second representation of one fact. **A field that no surface
displays is not made public by being convenient to serialize.**

**The registry is thin, and the endpoint measures its own thinness.** Six of the nineteen public
fields are populated **0/74** — `tagline`, `current_phase`, `docs_site_url`, `headline_mission`,
`headline_mission_state`, `headline_adrs`, `recent_closed` `[D]`. That is P1.3's sanitizer working
(ADR-052 §tiers.0), and publishing ~450 silent nulls would let a consumer read absence as *unknown
for this vault* when the truth is *not collected at all*. So absent scalars are `null` and never
omitted (the `proposals.json` rule — an omitted key and a genuinely-unknown value are different
facts), **and** the envelope carries a derived `field_coverage` block giving populated-count/74 per
field. Thinness becomes a measurement instead of an inference. Every count is computed at build
time; none is typed (KW-14).

**Two clocks, deliberately not collapsed.** `generated_at` is when the registry *data* was last
regenerated (operator-gated, pt19 — currently `2026-08-17`); `built_at` is when the file was
serialized. One field would let a stale registry look as fresh as the last deploy.

**The DP4 suppression is machine-readable.** The three minimal-card vaults carry
`listing: "minimal"` plus a `listing_note` stating the reason, verified `[D]` to expose only
identity / class / status / persona and their derived labels. **A suppressed row and an empty row
are indistinguishable from the outside unless the surface says which it is** — and the policy
sentence now has one home (`MINIMAL_CARD_NOTE`), consumed by both the detail page and the endpoint.

**Advertised**, because an endpoint nobody can find fails item 8's intent while returning 200: a
`## Reading the registry as data` section in `llms.txt`, a note on `/vaults` itself, and a full
schema reference at `/reference/registry-api`.

### Clause 4 — structured data

| Item | State after P3.2 `[D]` |
|---|---|
| `Dataset` on the registry | **1** — on `/vaults`, with a `DataDownload` distribution pointing at `/vaults.json`, so page and endpoint reference each other |
| `Organization` + `sameAs` | **226 occurrences, 0 without `sameAs`** — already shipped at P1.2; verified, not rebuilt |
| Pages with no JSON-LD | **3 → 0** of the Astro-rendered set (`design-system`, `privacy`, `security` now covered) |
| schema-dts in the build | Added; every builder in `utils/seo.ts` constructs a typed `WithContext<T>` |

**The "0 Organization blocks" finding was a measurement artifact, and saying so is the point.**
`jsonld_census` counted **top-level** `@type` only; the Organization is nested as `publisher` on
every block, and has carried `sameAs` since P1.2. ⊳ D-I ruled the nested form sufficient, so this
clause was **half-satisfied before the mission that was chartered to satisfy it began**. Recorded
because an ADR that lets a corrected premise disappear is how the next re-score double-counts the
same work.

**schema-dts types the authoring surface, not the consumer contract.** `schema-dts` models
schema.org with interfaces, which are not assignable to the `Record<string, unknown>` the layouts'
`jsonLD` prop takes; rather than loosen every consumer, the checking happens at the construction
site through a single `jsonLD<T>()` seam. **Red-tested** (convention 14): changing `license` to
`licence` in the Dataset builder produces
`ts(2561): 'licence' does not exist in type 'DatasetLeaf…'. Did you mean to write 'license'?`.

**Two pages carry no JSON-LD, by decision** — the same shape as clause 1's three twin-less routes.
`404.html`: describing a page that does not exist is a claim, not metadata. `install.html`: a
static `public/` asset owned by the installer lane, outside the layout system entirely; adding
structured data to it would be a cross-lane edit, not a fix.

**What P3.2 does not settle**: clause 5 (MCP server) and clause 6 (published conformance report +
homepage sentence) remain P3.3's. Clause 7's law is now **exercised in shape but still not in
anger** — a versioned URL exists and a deprecation window is stated; no breaking change has yet
tested either.

## Consequences

D10 climbs the anchor ladder legitimately; the strongest proof of the product thesis stops going unclaimed; every artifact has a drift-proof derivation.

**Anchor-4 status after P3.1.** Three of anchor 4's four bullets were hard failures; twins,
machine-readable registry, and an advertised `llms.txt` were the named gaps. Twins and advertising
are now closed. The registry JSON endpoint is P3.2's, so **the anchor is not claimed here** — the
re-score belongs to P5.2 with fresh isolated scorers, not to the mission that did the building.
Claims move down to verifiability, never up to ambition.

## Ratification

- **Decision:** _contract above; details land P3.1–P3.3_ · **Ratified-by:** _pending — Stanley (operator)_ · **Gate:** P3 exit · **Date:** _pending_ · **Status:** **proposed**.
