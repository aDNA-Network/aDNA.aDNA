---
type: adr
adr_number: "056"
title: "The agentic-surface contract: twins, llms artifacts, registry JSON, MCP server — versioned and self-conformant"
status: accepted
created: 2026-08-16
updated: 2026-09-04
last_edited_by: agent_rosetta
campaign_id: campaign_haussmann
supersedes: ""
superseded_by: ""
tags: [adr, haussmann, agentic, machine_legibility, d10]
---

# ADR-056 — Agentic-surface contract

## Status

⛩ **RATIFIED — Stanley (operator), 2026-09-04**, at a batched planning gate rather than at the P3
exit it was written for. **It sat `proposed` for 14 days past its own gate** and was the last
`proposed` ADR in the vault. The ratification carries a **debt rider** (see §Ratification) naming
exactly what is signed-but-unbuilt, so that a signature is never mistaken for a completion.

⭐ **What the signature is over, stated so it cannot be over-read:** the *contract* — the seven
clauses as a decision about how this site addresses machines. It is **not** a statement that all
seven are live. Clauses 1–4 and 7 are live and were **re-probed at ratification** (2026-09-04
20:37 UTC, `[D]`, table in §Ratification); clause 5 is built and **not** live; clause 6 is unbuilt.

*Original status paragraph, preserved not replaced (SO-6):*

> **Proposed** — contract shape fixed at genesis; **clauses 1, 2 and 7 built and evidenced at P3.1
(2026-08-20)**; **clauses 3 and 4 at P3.2 (2026-08-21)**; **clause 5 designed at P3.3 O0 and built
at O1 (2026-08-21), its publish held at ⛩ O2**; clause 6 lands at P3.3 O3. Ratification is
the operator's at the **P3 exit**, not the builder's (§7.7) — a clause being implemented is not a
clause being accepted, and this ADR stays `proposed` until it is signed even though most of the
machinery below is now live.

⚠ **Clause 5 grew a limb at O0.** The design pass found that an npx-installed stdio server does not
move `machine_eye` item 11, whose probes are a URL and a text search — so clause 5 now carries a
**discoverability limb** (`/.well-known/mcp.json` + an `llms.txt` section), landing at O3 and
conditional on the O2 publish. See §5f.

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

## As designed at P3.3 O0 — clause 5

*Recorded before a line was written, because O0's deliverable is the design and building first
would invert the gate. `[D]` throughout, measured 2026-08-21. The **as-built** record follows this
section once O1 lands; a design that is never checked against what shipped is a wish.*

### The premise, re-measured rather than inherited

`adna.network/.well-known/mcp.json` → **404**; `/mcp` → **404** `[D]`. Unchanged since genesis
(`machine_eye` item 11, `machine_eye_delta_p2_6`). This is the last item blocking D10 anchor 5 and
the only anchor-5 bullet with no partial credit anywhere on the site.

### Clause 5a — which SDK, and why this needed deciding at all

Clause 5 says "official TS SDK". **That phrase stopped being unambiguous on 2026-07-27**, when the
TypeScript SDK split into scoped v2 packages. Both lines ship from
`modelcontextprotocol/typescript-sdk`, **neither is deprecated**, and they differ on the one axis
the clause actually cares about `[D]`:

| | `@modelcontextprotocol/sdk` **1.30.0** | `@modelcontextprotocol/server` **2.0.0** |
|---|---|---|
| Published | 2026-07-27T17:56Z | 2026-07-27T23:55Z |
| Spec targeted | README says `specification/`**`draft`** | **the 2026-07-28 revision** |
| Node | `>=18` | `>=20` |
| Import | `@modelcontextprotocol/sdk/server/mcp.js` | `@modelcontextprotocol/server`, `…/stdio` |
| Schemas | Zod, v3-compat shim | Standard Schema (Zod v4 / Valibot / ArkType) |
| Dependency surface | monolithic — express, cors, hono, jose, ajv | `zod` + `@modelcontextprotocol/core` |

⇒ **Ruled: `@modelcontextprotocol/server` 2.0.0**, with `@modelcontextprotocol/client` 2.0.0 as a
dev dependency for the smoke harness. It is the line pinned to the revision the mission names, and
it keeps an HTTP stack out of a process that speaks stdio. Node on the build node is **v24.3.0**
`[D]`, so the raised floor costs nothing here — but it *is* a raised floor, and consumers on Node 18
or 19 cannot run this server. That is the price of the current spec, stated rather than discovered.

**The table is recorded, not just the verdict.** Six weeks from now "use the official SDK" will read
as settled advice again, and the next reader would otherwise re-derive which of two undeprecated
packages that means.

### Clause 5b — transport: stdio, and the hosted surface named as absent

**stdio only.** One command, no origin to operate, nothing to keep up. A hosted Streamable-HTTP
endpoint is **deferred, and is written down as deferred** — not implied by silence, and not hinted
at in any tool description. The install line is the whole install:

```
claude mcp add adna -- npx -y adna-mcp-server
```

### Clause 5c — runtime fetch, not a bundled snapshot

The mission left this open at O0. **Ruled: fetch at call time, cache for the process lifetime.**

A bundled corpus would be faster and would work offline, and it would be **wrong within a day**: the
package would keep answering "74 vaults" long after a redeploy changed that, wearing the authority
of the standard's own server. The site is the source of truth; a snapshot inside a tarball is a
second self-description that nothing refreshes — the exact defect Ilmarinen measured across the
fleet the same week (`coord_2026_08_21_ilmarinen_to_hestia_rosetta_manifest_pull_was_staler`: 8 of
12 sampled vaults 34–52 days behind, **this vault among them at 45**). Convention 1 is not satisfied
by a claim that was true at publish time.

Cost accepted: one ~950 KB fetch of `/llms-full.txt` on first search `[D]`.

### Clause 5d — the tool surface

Four tools, exactly the four the acceptance criterion names. No fifth — an enumeration tool was
considered and cut, because the corpus fetch already yields the page list and a tool that exists
only because it was easy is surface without a claim behind it.

| Tool | Source | Contract |
|---|---|---|
| `search_docs` | `GET /llms-full.txt` | Split on the `## https://adna.network/<path>/` headers → per-page records, cached; rank by term hits; return path + title + snippet |
| `fetch_page` | `GET /<path>.md` | The P3.1 twin, verbatim |
| `query_registry` | `GET /api/registry.v1.json` | Filter/lookup over `vaults[]` + `edges[]` |
| `lookup_spec_glossary` | `/glossary/*` + `/reference/*` twins | Exact term first, then fuzzy |

`query_registry` pins the **versioned** URL rather than canonical `/vaults.json`. Both serve
byte-identical bytes today, but clause 7's promise attaches to the versioned twin — a machine
consumer should hold the URL whose shape is under contract, which is the entire reason P3.2 shipped
two.

### Clause 5e — two rules the code carries, both inherited from this campaign's own scars

**Every fetch asserts it reached the thing it claims to check.** `res.ok` **and** a `content-type`
match — `text/markdown` for twins, `application/json` for the registry. This is convention 14 stated
as code: `check_live_headers.mjs` printed `live-headers OK — no drift` having read Vercel's SSO
login page, because it followed redirects and checked header *names* only (**F-f**, **F-h**). A twin
fetch that silently returns a 404 HTML body must **fail**, not hand an agent a login page as
documentation.

**Provenance passes through verbatim.** `built_at`, `snapshot_note`, `caveat` and per-row
`last_synced` are returned as given, never summarized away. A build-time snapshot must not reach an
agent wearing the appearance of live state. Ilmarinen's condition 1 — *"every pulled row carries its
source `updated:`, and the registry renders it; a public row dated seven weeks ago is self-limiting,
an undated one is not"* — is the same rule reached independently by a peer, and is cited here
because independent arrival is stronger evidence than our own restatement.

Counts in tool output are **derived from the payload, never typed** (KW-14).

### ⛔ Clause 5f — the third coherence defect: an npx server cannot move item 11

The mission's convention-13 pass checked AC2 and AC3 against each other and cleared AC4's *count*
(13 boxes). It did not check **AC1 against AC4**, and that pair fails.

`machine_eye` item 11 is probed two ways, and an npx-installed **stdio** server is invisible to
both `[D]`:

- **URL probe** — `machine_eye_delta_p2_6.md`: `| MCP descriptor (/.well-known/mcp.json) | 404 | 404 |`
- **Text probe** — `machine_eye.md` item 11: *"Zero hits for `mcp` (case-insensitive) in `llms.txt`,
  `llms-full.txt`, `/reference/specification`, `/reference/tool-setup`, `/community`."*

Built exactly as AC1 words it and published, **item 11 still reads ABSENT at AC4's re-run.** The
mission would report done against a checklist item that had not moved. The cohort corroborates the
mechanism rather than the wording: MCP's own D10 = 5 came from a **live `/mcp` endpoint**; the
Mastra npx-docs-server pattern this mission cites as its model scored **4 and 3** from the two
scorers — the split is precisely about whether an npx server counts as an exposed surface.

⇒ **Resolution, adopted at O0 in the same shape the mission used for DEFECT 2** — clause 5 grows a
**discoverability limb**: a static `/.well-known/mcp.json` descriptor plus an `llms.txt` section
naming the server and its install line. Both are *site* changes, so both land at **O3**, and both
**inherit AC2's conditionality**: if the publish is deferred, neither ships, because a descriptor
pointing at an unpublished package is a false claim on a machine surface — the S1 class this
campaign exists to prevent, made worse by being machine-readable.

**This is the third defect of one shape found in this mission, and the shape is now named:** a
criterion that states a *method* and a criterion that states a *test* can each be impeccable and
still not meet. Convention 13 catches contradictions between criteria; it does not yet ask whether
each stated method reaches the surface its test probes.

### Clause 5g — the tool descriptions are claims, and no gate can see them

`claim_register.md` §13.1 already records that gate-27's leak-lint *"scans `.html` and `.md` only"*
(**F-i** → P4.4). An MCP server's tool descriptions and its `package.json` are a **third surface
class**: asserted capability, published outward under this project's name, invisible to every gate
the campaign runs and unreachable by the register's page-oriented rows. Registration is O3's
(highest existing id is **R-132**; these start at R-133). The constraint that binds O0 and O1 is
narrower and absolute: **no tool description may assert a capability the server does not have** —
no hosted endpoint, no freshness the fetch does not guarantee, no coverage the corpus does not hold.

### As built at P3.3 O1 — clause 5, and where the build disagreed with the design

*The design above promised this check. A design never compared to what shipped is a wish.*

Built at `mcp/`, package **`adna-mcp-server`**, `@modelcontextprotocol/server` 2.0.0 over stdio,
four tools, runtime fetch with a per-process cache — **as designed, with no tool cut or added.**
Typecheck clean; packed artifact **8 files, 11.8 kB** `[D]`. Verified from a **separate process** by
the official MCP client: **26 smoke assertions green**, **24 red-test mutations every one caught**,
and the smoke suite re-run against a decoy origin goes red on **18 of 26** and exits non-zero `[D]`.

Three things the design did not anticipate, recorded because the delta is the useful part:

1. **The smoke suite had a vacuous assertion, and the red-test is what found it.** *"fetch_page
   returned markdown, not HTML"* passed on an error string — which contains no HTML either. Fixed by
   conjoining every content assertion with the call having succeeded. The red count moved **17 → 18**,
   which also corrected the estimate: **one** assertion was vacuous, not the three suspected. Design
   §5e said "assert you reached the thing"; it did not say "and assert you *got* something", and that
   is the sharper half.
2. **`dist/` is gitignored with `prepublishOnly` rebuilding it** — a build-time decision, not a
   design one. It makes it structurally impossible for the published tarball to carry a stale build.
   The installer lane's owed publish, blocked the same week because its artifact *existed nowhere*,
   is the argument: the same failure mode is closed here by construction rather than by discipline.
3. **The mission's own follow-up table was a broken markdown table** — a blank line split it, so two
   rows had been rendering as a header rather than as rows. Repaired while routing new debt into it.
   An index nobody renders is an index nobody reads.

**Nothing is live.** `/.well-known/mcp.json` re-probed after the build → **404** `[D]`, correctly:
O1 produces a package, not a surface. The publish is ⛩ O2's and the discoverability limb is O3's.

### What P3.3 O0 does not settle

Clause 6 entirely — the published conformance report and the homepage sentence are O3's, and the
homepage wording remains conditional on AC2's outcome per the resolution already in the mission
file. Clause 5's own **publish** is ⛩ operator's at O2; the package is named `adna-mcp-server`
(unscoped) by operator ruling so that O0/O1 are not held hostage to the `@adna` scope question,
which is **UNKNOWN, not ours-and-ready** (`npm whoami` → `ENEEDAUTH`; scope exists, package list
`{}`) `[D]`. That ruling is an explicit **AC2 amendment**, recorded rather than substituted
silently. And the anchor is **not claimed here** — the re-score belongs to P5.2 with fresh isolated
scorers, on the same principle stated for anchor 4 below.

## Consequences

D10 climbs the anchor ladder legitimately; the strongest proof of the product thesis stops going unclaimed; every artifact has a drift-proof derivation.

**Anchor-4 status after P3.1.** Three of anchor 4's four bullets were hard failures; twins,
machine-readable registry, and an advertised `llms.txt` were the named gaps. Twins and advertising
are now closed. The registry JSON endpoint is P3.2's, so **the anchor is not claimed here** — the
re-score belongs to P5.2 with fresh isolated scorers, not to the mission that did the building.
Claims move down to verifiability, never up to ambition.

## Ratification

- **Decision:** adopt the seven-clause agentic-surface contract as written · **Ratified-by:** **Stanley (operator)** · **Gate:** P3 exit *(taken late, at the 2026-09-04 batched planning gate)* · **Date:** **2026-09-04** · **Status:** **accepted**.

### ⛩ Debt rider — what this signature does NOT assert

Attached at the operator's instruction, so the ADR cannot be read as a completion certificate.
**Liveness re-probed at ratification, not inherited** — `curl` against `https://adna.network`,
2026-09-04 20:37 UTC, production `tree=2a72efe` `[D]`:

| Clause | Live? | Probe |
|---|---|---|
| 1 — twins + `Accept: text/markdown` | ✅ | `/learn/concepts/triad.md` → **200**; `Accept: text/markdown` on the bare URL → **200 `text/markdown; charset=utf-8`** |
| 2 — `llms.txt` + a true `llms-full.txt` | ✅ | both → **200** |
| 3 — versioned registry JSON | ✅ | `/vaults.json` → **200**, `/api/registry.v1.json` → **200** |
| 4 — JSON-LD | ✅ | `/` → `Organization` + `WebSite`; `/vaults` → `Dataset` + `DataDownload` + `CollectionPage` |
| 5 — MCP server | ⛔ **NO** | `/.well-known/mcp.json` → **404**; `npm whoami` → **ENEEDAUTH** |
| 6 — conformance report + homepage sentence | ⛔ **unbuilt** | O3, never started |
| 7 — versioning law | ✅ governing | the versioned URLs above are its instances |

⇒ **Open debt, carried forward and owned:**

1. **Clause 5 ⛩ O2** — the npm publish of `adna-mcp-server` remains its **own operator gate**, and
   O3's discoverability limb (`/.well-known/mcp.json` + the `llms.txt` section) is **conditional on
   it**. Blocked on `npm login`, which is *waiting on the world, not on a decision*.
2. **Clause 6** — unbuilt in full.
3. **The `@adna` npm scope is UNKNOWN, not ours-and-ready** — unchanged since P3.3 O0 `[D]`.

⚠ **The anchor-4 / D10 re-score is still NOT claimed by this ratification**, on the ADR's own
principle: the re-score belongs to **P5.2** with fresh isolated scorers. *Signing a contract is not
scoring against it* — and a ratification that quietly moved the anchor would be exactly the
"claims move up to ambition" failure this ADR forbids one paragraph above.
