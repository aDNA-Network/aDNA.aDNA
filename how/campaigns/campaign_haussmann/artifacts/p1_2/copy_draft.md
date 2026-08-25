---
type: artifact
title: "P1.2 O0 — copy draft with claim-register rows"
campaign: campaign_haussmann
mission: mission_haussmann_p1_2_state_of_network
objective: O0
created: 2026-08-18
updated: 2026-08-18
status: active
last_edited_by: agent_rosetta
tags: [haussmann, p1, copy, claims, d7]
---

# P1.2 O0 — Copy draft

Structure and bindings in [[surface_design]]. Consent basis in [[consent_record]].

**Reading contract.** `{name}` = a template expression reading [[surface_design]] §3 — **never a literal in
the shipped file**. Every block carries a proposed register row: class (`verified` / `verifiable` /
`unsupported`), the ground truth, and provenance `[D]`/`[I]`/`[R]`. Rows R-98…R-101 are the four proposed
for the gate-26 fixture; the rest land in `claim_register.md` §7 at O3.

**Copy law observed throughout** (campaign convention 1 + gate-27's zero baseline): no raw registry enums,
no internal vocabulary, no unclosed parenthetical immediately before a tag, no aspirational present tense,
no count typed by hand.

---

## A · `/state-of-the-network/`

### A0 · Title + lead

> # The state of the network
>
> This page exists because the honest answer to "how big is aDNA?" is smaller than the registry looks.
> `{vaultCount}` vaults sound like `{vaultCount}` teams. They are not. Here is what actually runs, who
> operates it, what is genuinely not ours, and what is only planned — each with the date it was last
> checked.

| Row | Class | Ground truth | Prov |
|---|---|---|---|
| P1.2-a | verified | `vault_count` = 74 `[D]`; the "not 74 teams" claim is the §7.3 disclosure this whole page evidences | `[D]` |

*Note: the lead's job is to disarm the hostile read in its own words before the reader gets there. "Smaller
than the registry looks" is the sentence a skeptic would otherwise write about us.*

### A1 · What runs

> ## What runs
>
> Everything in this section is a URL you can open, logged out, on a machine that has never heard of us.
> The date beside each one is the day it was last opened from outside.
>
> *(rows from `CANONICAL_PROPERTIES.filter(p => p.resolves)` — url · what it is · `probed`)*
>
> That is the whole list. If something is not on it, it is not yet a thing you can check.

| Row | Class | Ground truth | Prov |
|---|---|---|---|
| P1.2-b | verified | Every listed URL probed 200 logged-out 2026-08-18; the closing sentence is a completeness claim the fixture enforces by construction | `[D]` |

### A2 · What is operator-operated — **the §7.3 inversion**

> ## What is operator-operated
>
> The registry holds `{vaultCount}` vaults. **All of them run on one computer, operated by one person** —
> the Founding Architect named on [Who's behind aDNA](/about/). The graph on the home page is a real graph
> of real, declared relationships. It is not evidence of adoption, and this site will not present it as any.
>
> What the registry records about itself, as regenerated on `{registryGeneratedAt}`:
>
> - `{connectedCount}` vaults are joined by `{edgeCount}` declared relationships. `{unconnectedCount}`
>   declare none — that is honest topology, not missing data.
> - By stage: `{genesis}` at genesis, `{pending}` pending, `{active}` active.
> - `{recordedRepoCount}` records a code repository at all, and that one does not resolve publicly — so this
>   site does not link it.
> - None of them carries an externally verified public URL. The site is built so a URL cannot appear on a
>   vault page until someone has opened it from outside, logged out, and recorded the date.
> - Most vaults are tended by a named agent. Those are AI personas, not people; [/about](/about/) says so
>   plainly and explains why.
>
> Of the `{subnetworkCount}` subnetworks on [the commons](/commons/), `{subnetworksWithPublicUrl}` have a
> public property you can open today. Their records were last synced on `{subnetworksGeneratedAt}` — older
> than the registry above, and shown rather than hidden.

| Row | Class | Ground truth | Prov |
|---|---|---|---|
| **R-98** | **verified** | *"All of them run on one computer, operated by one person"* — 74/74 vaults on the operator's node; `Home.aDNA`/`Network.aDNA` private by design; no second node publicly evidenced. **Resolves H5 (S1) and inverts anti-pattern 7.3.** Gate-26 fixture row. | `[D]` |
| P1.2-c | verified | 15 / 14 / 59 computed from `edges` `[D]`; *"honest topology, not missing data"* re-uses R-92's protected phrasing from `/vaults/graph` | `[D]` |
| P1.2-d | verified | 57 / 10 / 7 via `statusLabel()` — `genesis_stub` folds into genesis, which is why the public figure is 57 and not 56 | `[D]` |
| P1.2-e | verified | Exactly 1 vault carries `github_url`; probed 404 logged-out 2026-08-18. The "does not link it" clause is enforced by P1.1's `verified_links` projection gate | `[D]` |
| P1.2-f | verified | `verified_urls` = `[]`. Wording is fixed prose, not a rendered zero — see §D2 | `[D]` |
| P1.2-g | verified | Restates R-61's already-shipped persona disclosure; does not dilute it | `[D]` |
| P1.2-h | verified | 4 subnetworks, 2 with `public_url` (worldgeno.me; the Foundation's `rare-archive`) `[D]`; both dates read from their files | `[D]` |

*Note: the sentence "It is not evidence of adoption, and this site will not present it as any" is the
load-bearing one. It commits the site prospectively, which is what converts a disclosure into a discipline.*

### A3 · What is not ours

> ## What is not ours
>
> Three things here belong to someone else, and naming them is the point.
>
> **The Wilhelm Foundation** — an independent rare- and undiagnosed-disease foundation, and aDNA's anchor
> partner. It is not part of this network's operation; it anchors two of the subnetworks on the commons.
>
> **`Wilhelm-Foundation/rare-archive`** — hosted in the Foundation's own GitHub organization under
> Apache-2.0. Not ours to move, and the only public code any subnetwork here can show you. As of the last
> check on `{probed}`, every commit in it came from the same person who operates this network. We would
> rather tell you that than let you find it.
>
> **The hosts** — this site is static files on Vercel, the code is on GitHub, and the fonts are served from
> this domain. None of them vouches for us. [What this site collects: nothing.](/privacy/)

| Row | Class | Ground truth | Prov |
|---|---|---|---|
| P1.2-i | verified | Foundation is real and independent; relationship stated at true strength per R-59 — **no public statement from the Foundation about aDNA exists**, so no endorsement is implied. Named founders are not repeated here | `[R]` |
| P1.2-j | verified | Repo public, Apache-2.0, in the Foundation's org `[D]`; sole contributor is the operator `[D]`; probe date carried inline | `[D]` |
| P1.2-k | verified | Vercel + GitHub per deploy path; self-hosted fonts per the privacy page; "vouches for nothing" is a true negative | `[D]` |

*Note: A3's second block is the highest-value paragraph in the mission — §8.3 executed in one clause. The
most damaging fact a hostile reader could surface about the network's flagship public artifact, surfaced
first, with a date, and framed as a choice.*

### A4 · What is planned — `Callout variant="info" title="The horizon"`

> None of this exists yet. It is here so you can tell the difference between what we have and what we
> intend.
>
> - **A second independent node.** Everything in the registry is on one machine. The federation the standard
>   describes is real, working code — it has not yet been exercised between two operators.
> - **Verified external properties.** The gate is built and running; no URL passes it today. What is missing
>   is vaults with public homes, not machinery.
> - **Profiles, follows, and feeds.** Named as unbuilt on [the commons](/commons/#today) — still unbuilt.
> - **The coordination layer, opening progressively.** [The specification](/reference/specification/) is the
>   public part today.
>
> Nothing above carries a date, because we do not have one. When one becomes true it moves up this page, and
> the date moves with it.

| Row | Class | Ground truth | Prov |
|---|---|---|---|
| P1.2-l | verified | Extends the `/commons` + `/community` horizon idiom `[D]`; each bullet names an unbuilt thing plainly | `[D]` |
| P1.2-m | verified | **"opening progressively"** is R-15, the only sanctioned protocol phrasing under the counsel embargo. *"the open coordination protocol"* must never appear — gate-23 guards its return | `[D]` |

### A5 · How to check this page

> ## How to check this page
>
> Every count above is read at build time from a file in this site's own public repository —
> `src/data/vaults.json` (regenerated `{registryGeneratedAt}`), `src/data/subnetworks.json`
> (`{subnetworksGeneratedAt}`), and `src/data/verified_links.json`. **No number on this page is typed by
> hand.** Every property under "what runs" was opened from outside, logged out, on the date shown beside it.
> If you check one and find it wrong, [open an issue]({REPO_HTTPS}/issues) — that is a bug in this page, not
> a difference of opinion.

| Row | Class | Ground truth | Prov |
|---|---|---|---|
| **R-99** | **verified** | *"No number on this page is typed by hand."* — structurally true via `network_state.ts`; **gate-20's manifest rows make it machine-checkable**, which is what upgrades it from a promise to a guarantee. Gate-26 fixture row | `[D]` |
| P1.2-n | verified | The three filenames are real and public; the issues link resolves (P1.1 shipped the templates) | `[D]` |

---

## B · `/canonical-properties/`

### B0 · Lead

> # Canonical properties
>
> This page exists so you can tell a real aDNA property from a copy of one. Everything legitimate is on this
> list. If you found aDNA somewhere that is not here, it is not us.

| Row | Class | Ground truth | Prov |
|---|---|---|---|
| **R-100** | **verified** | *"If you found aDNA somewhere that is not here, it is not us."* — completeness claim enforced by the fixture and by the proposed gate-15 set-equality block. **The §7.1 clone-site defense.** Gate-26 fixture row | `[D]` |

### B1–B3 · Domains · Repositories · Machine surfaces

Rendered from `CANONICAL_PROPERTIES`. Per row: URL, one-sentence description, probe date. Repositories
carry an explicit ownership note where ownership is not ours.

> **`Wilhelm-Foundation/rare-archive`** — the Rare Archive, in the Wilhelm Foundation's own GitHub
> organization. Apache-2.0. Not ours, and listed here so you can tell that it is legitimately connected to
> aDNA without being controlled by it.

| Row | Class | Ground truth | Prov |
|---|---|---|---|
| P1.2-o | verified | All rows probed logged-out 2026-08-18 with the result recorded per row | `[D]` |
| P1.2-p | verified | Ownership distinction is the R-59 relationship stated at true strength | `[D][R]` |

### B4 · Social accounts

> ## Social accounts
>
> aDNA runs none. There is no aDNA account on any social platform. Any account using the name is not us.
>
> If that changes, it will be listed here first, and this sentence will be the thing that changed.

| Row | Class | Ground truth | Prov |
|---|---|---|---|
| **R-101** | **verified** | *"aDNA runs none. There is no aDNA account on any social platform."* — `SocialLinks.astro` is imported nowhere and no handle exists in `site/src` `[D]`. **A stronger §7.1 defense than a handle list**: a list says what is real, this says everything is fake. Gate-26 fixture row | `[D]` |

*Note: this is the one section with a known expiry — it must be revisited the day an account is opened. The
second sentence pre-commits the update path. Flag in the AAR.*

### B5 · Retired and not ours

> ## Retired, and not us
>
> **`adna.dev`** — an early domain for this project, abandoned before launch. Checked on
> `{PROPERTIES_PROBED_AT}`: it does not resolve. If it ever resolves again, it is not us then either.

| Row | Class | Ground truth | Prov |
|---|---|---|---|
| P1.2-q | verified | Probed 2026-08-18: does not resolve `[D]`. STATE records adna.dev abandoned in favour of adna.network at the 2026-05-31 cutover `[D]` | `[D]` |

*Note: naming a lapsed domain is stronger than silence — silence leaves it free to be re-registered against
us, and a reader who finds it has no way to know.*

### B6 · How to verify you're on a real property

> Three checks, none of which require trusting this page:
>
> - Every page on this site links back here from its footer.
> - The site name in the page's own metadata reads **aDNA Network** — the same name in the structured data
>   and the copyright line.
> - The structured data on this site declares this domain and every property above as the same organization.
>   A copy can reproduce the words on a page; it cannot make its own domain appear in ours.

| Row | Class | Ground truth | Prov |
|---|---|---|---|
| P1.2-r | verified | True only after the O2a identity fixes land — `og:site_name` corrected to the publisher name, `Organization.sameAs` emitted from this same fixture. **Copy and code must ship together or this row is false** | `[D]` |

### B7 · What we will never do

> ## What we will never do
>
> We publish no testimonials — attributed or otherwise. We will never contact you asking for a key, a token,
> or a payment. Fabricated quotes are the clone-site signature; a project that uses them has adopted the
> visual signature of fraud.

| Row | Class | Ground truth | Prov |
|---|---|---|---|
| P1.2-s | verified | Zero testimonials on the site `[D]`; instrument §7.1's final bullet rendered in our own register | `[D]` |

---

## C · Home + `/about`

### C1 · Home hero proof block — replaces R-18

> `{vaultCount}` vaults — every one of them on a single computer, ours. `{connectedCount}` are joined by
> `{edgeCount}` declared relationships; the rest stand alone.
>
> [The state of the network, dated →](/state-of-the-network/) · [Who's behind aDNA →](/about/)

| Row | Class | Ground truth | Prov |
|---|---|---|---|
| **R-18** (rewrite) | verified | Replaces *"Four public-good subnetworks are taking shape here —"*. **This is the §7.3 "line of sight" requirement**: the fold now states the operator-federation fact instead of borrowing trust from four subnetworks whose vaults are all pending | `[D]` |

**Gate-23 safety:** `.hero-lead` and `.hero-trust-links` are untouched; the forbidden gloss is not
introduced. All three assertions hold.

### C2 · Movement band — the manifesto reframe (Berthier)

Added as a **sibling paragraph** under the lyric. **The lyric is R-94 and must not be touched** — no reflow,
no merge, no punctuation change.

> You already do the first half of this. The README that explains the project. The decision someone wrote
> down so nobody re-litigates it. The note on why the schema is shaped the way it is. That is context — aDNA
> gives it a shape your agents can read and a place to be shared.

| Row | Class | Ground truth | Prov |
|---|---|---|---|
| P1.2-t | verified | Design claim about the standard, not a network-behavior claim — no tense exposure. Lands Berthier's *"you already do X"* item at the manifesto, where the memo placed it; the hero's `reframe` prop already carries the hero-level beat and is **not** rewritten | `[D]` |

### C3 · Home registry band — one added sentence

Directly under the band's count, because §7.3 wants the distinction made where the number is made.

> All of them on one computer — [the state of the network](/state-of-the-network/) says whose, and what that
> means.

| Row | Class | Ground truth | Prov |
|---|---|---|---|
| P1.2-u | verified | Same fact as R-98, at its second point of exposure | `[D]` |

### C4 · `/about` band 1 — named human (criterion 3)

> ### Stanley Bishop
> Founding Architect, aDNA · Head of AI, Wilhelm Foundation · AI-Scientist in Residence, UCLA Anderson
> School of Management
> [stanley.science ↗](https://www.stanley.science)

| Row | Class | Ground truth | Prov |
|---|---|---|---|
| P1.2-v | verified | Name public on stanley.science `[D]`. UCLA role public `[D]`. Wilhelm title ratified in the private vault and **shipped under the recorded §1.1 ruling with an alignment memo staged** `[R]` | `[D][R]` |
| **R-58** | verified | ⚠ **UNCHANGED, BYTE-INTACT.** *"aDNA is stewarded today by one person"* — edit around it | `[D]` |

### C5 · `/about` band 4 — R-62's rebuild (criterion 2)

> ## The public-good work, and what you can check
>
> `{subnetworkCount}` subnetworks are declared on this network. `{subnetworksWithPublicUrl}` have something
> you can open today; the rest do not yet. Each row says which.

Per row, a check-state line under the existing name/serves/attribution:

> - where `public_url` exists → **[Open it ↗]({public_url})**
> - otherwise → *"No public property yet — the vault record is at `{statusLabel(status)}`."*

| Row | Class | Ground truth | Prov |
|---|---|---|---|
| **R-62** (rebuild) | verified | Retires *"The proof"* framing permanently. Was: the site's strongest framing on its least-verifiable claim family. Now: a list of checkable claims, each labelled with what you can and cannot check. **This is the mission's criterion 2** | `[D]` |
| P1.2-w | verified | 4 / 2 derived; per-row state derived from `public_url` + `statusLabel()` — never typed | `[D]` |

---

## D · Copy-law compliance notes

### D1 · Gate-27 (zero baseline — one hit turns the suite red)

Checked across every block above: no raw enum (`genesis_stub`, `tbd_at_p0`, `org_vault`, `org_graph`,
`node_operational`, `framework_candidate`, `knowledge_graph`); no `pt` + digits; no "Operation" + capital;
no vault-internal file prefixes; no weakness IDs; no local filesystem paths. Stage names reach the page
**only** through `statusLabel()`. The three `src/data/*.json` filenames in A5 are deliberate and safe —
they are public repository paths, which is the point of naming them.

Parenthetical check: no block ends a parenthetical with a period immediately before a tag (the
`truncated_lede` pattern).

### D2 · The zero-count sentence

A4 and A2 state the zero-verified-URL fact as **fixed prose** — *"None of them carries…"* / *"no URL passes
it today"* — rather than rendering `{verifiedUrlCount}`. Reason: the grammar has to change when the count
becomes 1, so a rendered number would produce *"0 carry"* today and *"1 carry"* later. Gate-20's manifest row
pins the underlying value at 0 and **turns red the moment it changes**, forcing a same-diff copy update.
That coupling is deliberate — annotate the fixture row so a later reader doesn't "fix" the red by deleting
the row.

### D3 · Tense audit (anti-pattern 7.5)

Every present-tense claim above describes either (a) a file's contents, (b) a probe result with its date, or
(c) a design property of the code. **No sentence asserts network behavior that a reader cannot verify
today.** The one future-tense cluster is quarantined in A4 under an explicit "none of this exists yet".

### D4 · Vanity metrics (directive §8)

No contributor counts, no stars, no followers, no activity. The shelf is counted, never the applause. And
no inverse-vanity either — no "only N" self-deprecation dressed as candor. The numbers are stated flat.
