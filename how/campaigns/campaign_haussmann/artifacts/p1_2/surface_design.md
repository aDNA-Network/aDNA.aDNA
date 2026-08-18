---
type: artifact
title: "P1.2 O0 — surface design: state-of-the-network + canonical-properties"
campaign: campaign_haussmann
mission: mission_haussmann_p1_2_state_of_network
objective: O0
created: 2026-08-18
updated: 2026-08-18
status: active
last_edited_by: agent_rosetta
tags: [haussmann, p1, design, disclosure, d7, d1]
---

# P1.2 O0 — Surface design

Copy lives in the sibling [[copy_draft]]. Consent basis in [[consent_record]]. This file is structure,
data bindings, and the placement decisions with their reasons.

## 1 · The design problem in one paragraph

The registry shows 74 vaults, 14 relationships, and 4 public-good subnetworks. All of it runs on one
computer operated by one person. A skeptical reader can determine that unaided — Phase B recorded a
synthetic engineer doing exactly that and concluding *"one org's monorepo cosplaying as an ecosystem"*
(**H5**, the trust stratum's only S1). Instrument **§7.3**: *"The distinction must be made on the page, in
the reader's line of sight, not in a footnote. A hostile reader will check, and finding it themselves costs
you the account."* **§8.3** names the fix as the campaign's highest-leverage move: propagate the
`/community` honesty pattern to every surface, because *verifiable modesty is the scarcest available
signal* in a category full of clone sites and inflated metrics.

The design goal is therefore not to *disclose defensively*. It is to make the disclosure the most
confident-sounding thing on the site.

## 2 · Placement: a page **and** a fold sentence

| Option | Verdict |
|---|---|
| Home band only | **No.** The four strata compress to nothing and there's no durable URL to cite. |
| Page, linked from home | **No.** A band that only *links* the disclosure is a footnote with better manners — the thing §7.3 explicitly rules out. |
| **Page + the disclosure sentence itself in the fold** | **Chosen.** The fold states the fact; the page carries the evidence. |

The fold half is delivered by rewriting the home hero's proof block — which is *also* the Berthier
proof-of-life item (*"the hero shows insider stats rather than the compelling number"*). **One edit, two
acceptance criteria.**

### Route: `/state-of-the-network/`

`site/src/pages/state-of-the-network/index.astro` (directory-index form, matching `privacy/`, `security/`,
`compliance/`).

- `/status` reads as uptime (statuspage.io connotation) — the page is not about uptime.
- `/network/state` would sit beside the flat `network.astro` and muddy the route model.
- `/state-of-the-network` is the instrument's and the mission's own phrase, and is search-legible for the
  exact hostile query.

**Not in the header.** `gate-13` measures the 8-item desktop nav row's right edge against the 1024px
switch-on; a 9th flat entry breaks it. Footer + in-body links only. Inbound from: home hero-proof (primary
link), home registry band, `/about` band 4, footer.

### Route: `/canonical-properties/`

`site/src/pages/canonical-properties/index.astro`, same policy-page pattern. Footer-linked (criterion 4
requires it, and gate-13 will assert it). Optional named redirect `/official-properties` →
`/canonical-properties` — "official properties" is the instrument's phrase and the likely search term.

### Page scaffold for both

`BaseLayout` + hand-rolled `<article class="policy">`, following **`site/src/pages/privacy/index.astro`**.
Not `DocumentationLayout` — these aren't collection-backed and don't want a sidebar/TOC/prev-next.

Reused components: `Callout.astro` (`variant="info"`) for the horizon block — the established honesty idiom
on `/commons` and `/community`. Fact rows reuse `/commons`'s `today-facts` shape (`<dl>` + `display:
contents` + `grid-template-columns: max-content 1fr`, collapsing to one column at ≤760px). **Not a
`<table>`** — tables are the 320px overflow risk under gate-9, and gate-29's reflow guard exists because of
exactly that class of defect.

## 3 · Data bindings — every number derived, never typed

New shared module **`site/src/data/network_state.ts`**. Home, `/about`, and `/state-of-the-network/` all
import it, so the three surfaces *cannot* disagree — the KW-14 discipline ("every count a page narrates
must be derived") applied structurally rather than by review.

| Export | Derivation | Value at 2026-08-18 |
|---|---|---|
| `vaultCount` | `vaults.json` `vault_count` | 74 |
| `edgeCount` | `vaults.json` `edges.length` | 14 |
| `connectedCount` | `new Set(edges.flatMap(e => [e.source, e.target])).size` | 15 |
| `unconnectedCount` | `vaultCount - connectedCount` | 59 |
| `statusCounts` | group by `statusLabel(v.status)` | genesis 57 · pending 10 · active 7 |
| `recordedRepoCount` | `vaults.filter(v => v.github_url).length` | 1 |
| `verifiedUrlCount` | `verified_links.json` `verified_urls.length` | 0 |
| `subnetworkCount` | `subnetworks.json` `subnetworks.length` | 4 |
| `subnetworksWithPublicUrl` | `subnetworks.filter(s => s.public_url).length` | 2 |
| `registryGeneratedAt` | `vaults.json` `generated_at` | 2026-08-17 |
| `subnetworksGeneratedAt` | `subnetworks.json` `generated_at` | 2026-07-06 |

**`statusCounts` must route through `statusLabel()`** (`site/src/utils/vaultLabels.ts`). The raw
`genesis_stub` token is an instant gate-27 red — the util already folds it into `genesis`, which is why the
public figure is 57 and the raw data says 56 + 1.

**`connectedCount` = 15, not 16.** Verified on disk: the 14 edges touch exactly 15 distinct vaults. This
matches the hero's existing `heroGraphCaption` and `/vaults/graph`'s "59 unconnected" — consistency is
already load-bearing sitewide.

## 4 · The dating mechanism

Three dates, none typed by hand, none rot-prone.

| Date shown | Source | Governs |
|---|---|---|
| registry regenerated | `vaults.json` `generated_at` | the counts in stratum 2 |
| subnetwork records synced | `subnetworks.json` `generated_at` | the subnetwork rows |
| properties last probed | `PROPERTIES_PROBED_AT` + per-row `probed` in `canonical_properties.ts` | strata 1 and 3 |

**Rejected:** `new Date()` — claims a freshness the underlying facts don't have, and makes every build a
content diff. **Rejected:** the privacy page's single `const updated` — rots silently the moment anything
below it changes.

**Why the chosen mechanism cannot rot.** The date sits beside the fact *as a statement about a past check*,
never as a claim about the present. *"Opened from outside, logged out, on 2026-08-18"* is true forever. Its
value decays into obvious staleness rather than into quiet falsehood — which is the whole point. This is
OWID's per-artifact provenance move, and it is the same idiom P1.1 already ratified for
`verified_links.json`.

**`subnetworks.json` is six weeks behind the registry (2026-07-06 vs 2026-08-17). Show it, don't fix it.**
The copy says so explicitly. Regenerating it to look fresher would be a site-fixture edit dressed as a data
refresh — and the gap is itself an honest signal about the pace of the thing being described.

## 5 · `/state-of-the-network/` — section structure

| # | Section | Contains | Bindings |
|---|---|---|---|
| 0 | Lead | Why the page exists: the honest answer is smaller than the registry looks | `vaultCount` |
| 1 | **What runs** | Only URLs openable logged-out, each with its probe date | `CANONICAL_PROPERTIES.filter(p => p.resolves)` |
| 2 | **What is operator-operated** | The §7.3 inversion + honest topology + stage breakdown + the repo/verified-URL facts | `vaultCount` `connectedCount` `edgeCount` `unconnectedCount` `statusCounts` `recordedRepoCount` `verifiedUrlCount` `registryGeneratedAt` `subnetworkCount` `subnetworksWithPublicUrl` `subnetworksGeneratedAt` |
| 3 | **What is not ours** | Wilhelm Foundation (institution) · `rare-archive` in its own org · the hosts | `probed` dates |
| 4 | **What is planned** | `Callout variant="info" title="The horizon"` — second node, verified properties, profiles/feeds, the protocol | `verifiedUrlCount` |
| 5 | **How to check this page** | The three data files by name + "no number typed by hand" + an issue link | `registryGeneratedAt` `subnetworksGeneratedAt` `REPO_HTTPS` |

Section 3 carries the mission's highest-value sentence — the `rare-archive` sole-contributor disclosure.
That one clause *is* §8.3 executed: the most damaging fact a hostile reader could surface, surfaced first,
with a date.

Section 2 deliberately re-uses `/vaults/graph`'s protected phrase **"honest topology, not missing data"**
(register **R-92**) — register continuity across surfaces, and it is already fixture-guarded on its own
page so the re-use costs nothing.

## 6 · `/canonical-properties/` — section structure

| # | Section | Notes |
|---|---|---|
| 0 | Lead | "Everything legitimate is on this list. If you found aDNA somewhere that is not here, it is not us." |
| 1 | Domains | rendered from the fixture |
| 2 | Repositories | rendered from the fixture; includes the Foundation's own org, labelled *not ours* |
| 3 | Machine surfaces | `/llms.txt`, `/llms-full.txt`, `/rss.xml`, `/sitemap-index.xml` |
| 4 | **Social accounts** | *"aDNA runs none."* — see below |
| 5 | Retired and not ours | `adna.dev`, with the date it was checked and found not to resolve |
| 6 | How to verify you're on a real property | the machine-checkable recipe: footer backlink, `og:site_name`, `Organization.sameAs` |
| 7 | What we will never do | no testimonials, never a request for a key/token/payment (§7.1's last bullet) |

**§4 is the strongest available move and it is free.** `SocialLinks.astro` is imported nowhere `[D]` — the
site ships zero social handles. So the honest statement is *"aDNA runs none. There is no aDNA account on
any social platform. Any account using the name is not us."* That is a **stronger** clone-site defense than
any handle list, because a handle list only tells you what's real; this tells you that everything is fake.
It is also the only section that will need revisiting the day an account is opened — flag it in the AAR.

### The property fixture

**`site/src/data/canonical_properties.ts`** — a typed module, not JSON, so it composes from `REPO_HTTPS`
and `installTruth.legacy_repo_https` and each URL literal exists exactly once.

```ts
export interface CanonicalProperty {
  url: string;
  kind: 'domain' | 'repo' | 'org' | 'machine-surface' | 'retired';
  label: string;
  what: string;      // one sentence
  resolves: boolean;
  probed: string;    // YYYY-MM-DD — the day it was opened, logged out
  evidence?: string; // e.g. 'HTTP 200, logged out'
}
export const PROPERTIES_PROBED_AT = '2026-08-18';
```

Contents from live probes, 2026-08-18, logged out `[D]`:

| Property | Kind | Resolves |
|---|---|---|
| `https://adna.network` | domain | ✓ 200 |
| `https://community.adna.network` | domain | ✓ 200 |
| `https://worldgeno.me` | domain | ✓ 200 |
| `github.com/aDNA-Network` | org | ✓ 200 |
| `github.com/aDNA-Network/aDNA` | repo | ✓ 200 |
| `github.com/aDNA-Network/aDNA.aDNA` | repo | ✓ 200 |
| `github.com/aDNA-Network/adna-legacy` | repo | ✓ 200 (archived) |
| `github.com/Wilhelm-Foundation/rare-archive` | repo | ✓ 200 (**not ours**) |
| `/llms.txt` · `/llms-full.txt` · `/rss.xml` · `/sitemap-index.xml` | machine-surface | ✓ |
| `https://adna.dev` | **retired** | ✗ does not resolve |

**Judgment call, recorded:** `aDNA-Network/Videos.aDNA` is **not listed**. It sits under the canonical org
but returns 404 publicly. This page lists properties a reader can trust *and reach*; the 404 is disclosed on
the state page as a plain-text count (`recordedRepoCount`), never as an anchor — so R-90's defect (shipping
an outbound proof-link a reader can't follow) is not re-created here.

**`adna.dev` is listed deliberately, as retired.** Naming an abandoned domain and saying *"it is not us, and
if it ever resolves again it is not us then either"* is a stronger defense than silence — silence leaves a
lapsed domain free to be re-registered against us.

## 7 · Canonical-identity coherence (criterion 4's second half)

The clone-site defense is only as good as the machine-readable assertions behind it. Today `sameAs` appears
**nowhere** in `site/src`, there is **no top-level `Organization`**, and the *abandoned* domain is the
canonical fallback in 13 places.

| File | Change | Why |
|---|---|---|
| `data/canonical.ts` | add `SITE_ORIGIN = 'https://adna.network'`; fix `PUBLISHER_URL` (currently `= REPO_HTTPS`) | the Organization's `url` should be the site, not a GitHub repo |
| `components/common/SEOHead.astro` | `?? 'https://adna.dev'` → `?? SITE_ORIGIN` (L37); `og:site_name` `"aDNA"` → `{PUBLISHER}` (L62) | the meta name and the JSON-LD/footer name must agree |
| 12 × `pages/**/[...slug].astro` | same fallback → `SITE_ORIGIN` | thirteen occurrences of a dead domain to zero |
| `utils/seo.ts` | `PUBLISHER_ORG` gains `sameAs`; attach `publisher` to `buildWebPageJsonLD` **and** `buildCollectionPageJsonLD` | `/about`, `/network`, `/commons`, `/privacy` emit **no** Organization today |
| `components/common/Footer.astro` | two new `<a>` in `.footer-links` | criterion 4 + gate-13 |

`sameAs` derives from `CANONICAL_PROPERTIES.filter(p => p.resolves && p.kind !== 'machine-surface')` — so
the structured data and the human-readable page are the same list by construction, and neither can drift.

**Import-cycle note:** `canonical_properties.ts` imports `REPO_HTTPS` from `canonical.ts`, so
`PUBLISHER_SAME_AS` lives in `canonical_properties.ts` and `seo.ts` imports it from there.

## 8 · Home + `/about` edits

**Home hero (`index.astro` + `HomeHero.astro`).** Move `.hero-proof` **above** `.trust-strip` in both
variants. Replace the R-18 borrowed-trust lead with the disclosure sentence; primary link becomes
`/state-of-the-network/`, and a new **additive-optional** secondary link preserves the one-click path to
`/about` (criterion 3). Both `HomeHero` changes are additive-optional so `/network` and `/commons` stay
zero-diff — the established pattern in that component, and the reason it can be touched safely at all.

**Movement band.** The `reframe` prop already lands Berthier's "you already do X" beat in the hero and
should not be rewritten. What's missing is the *manifesto* beat: one **sibling** paragraph under the lyric,
concrete where the lyric is abstract. **The lyric itself is register row R-94 and is byte-protected** — a
sibling `<p>`, never a reflow or merge.

**`/about` band 1.** Name → Stanley Bishop; role line gains the three affiliations and one outbound link.
**R-58's sentence must survive byte-intact** — its own fixture `why` says a growth-minded rewrite would
delete it first, and this mission *is* a rewrite of that card.

**`/about` band 4.** R-62's surface. Derived subtitle, and a per-row **check-state line**: an "Open it ↗"
link where `public_url` exists, else *"No public property yet — the vault record is at pending."* This is
the OWID per-artifact provenance move applied to the subnetwork list, and it converts a list of names into
a list of checkable claims.

## 9 · What this design refuses to do

Recorded so a later reader sees these as decisions, not oversights:

- **No apology register.** The disclosure is stated as a fact and a discipline, never as a confession.
  "Verifiable modesty is the scarcest available signal" is the thesis — the page should read like the
  strongest thing on the site, because it is.
- **No vanity metrics, in either direction** (directive §8). No contributor counts, no stars, no "only N"
  self-deprecation dressed as candor. Count the shelf, not the applause.
- **No roadmap dates.** The horizon section says plainly that nothing there carries a date *because we don't
  have one*. A date we can't keep is the same defect as a claim we can't check.
- **No new hero image, no client JS, no `<table>`** on either page — keeps gate-10/19 (perf) and gate-9/29
  (reflow) structurally out of reach.
