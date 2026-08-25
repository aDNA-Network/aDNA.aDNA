---
type: adr
adr_number: "052"
title: "Registry admission standard, lifecycle tiers, and the public-projection policy"
status: accepted
created: 2026-08-16
updated: 2026-08-19   # ACCEPTED at the P2.4 ⛩ (operator): §tiers ratified (3 tiers from status alone) + §tiers.7 added (10× criterion deferred, recorded UNMET). §tiers.6 (77-vs-74) stays stated-not-decided — Hestia's B7 lane
last_edited_by: agent_rosetta
campaign_id: campaign_haussmann
supersedes: ""
superseded_by: ""
tags: [adr, haussmann, registry, tiers, d2, d7]
---

# ADR-052 — Registry admission + tiers + projection policy (stub)

## Status

**Accepted** — ratified at the **P2.4 ⛩ operator pick, 2026-08-19**. §admission was ruled earlier at
**DP4** (below, operator 2026-08-16); **§tiers** and **§tiers.7** ratify here. See §Ratification for
what each signature covers.

**One item inside this ADR is deliberately still open**: **§tiers.6 — the 77-vs-74 registry
admission question**. It is *stated, not decided*, because it is a DP4-class admission ruling that
needs Hestia's B7 data pass, not a consequence of a tier redesign. An accepted ADR carrying a named
open question is the honest shape here; burying it to make the document look finished is not.

## §admission — DP4 ruling (operator, 2026-08-16, P1-wave session)

**Minimal card, all three.** The confidential-adjacent vaults (**aiLP-Dataroom.aDNA** · **CakeHealth.aDNA** ·
**PercySleep.aDNA**) **stay listed** — the registry count stays true — but the projection emits a **minimal
card**: identity + class + status + persona only. Notes, taglines, links, phase, headline state, and
relationship detail are suppressed **at the generator** (`MINIMAL_CARD_VAULTS` + `listing: "minimal"` in
`scripts/build_vaults_data.mjs`), so no downstream surface — pages, cards, graph, llms, search blobs — can
leak engagement detail. Templates render the honest reason: *"Listed with a minimal card — private
engagement."* Escalation path: if even a NAME becomes sensitive, the row moves to removal by operator
ruling (per-row, recorded here). Ruled via `AskUserQuestion` at the P1.3 O3 gate; implementation commit
rides the same mission.

## Context

74 entries in mixed lifecycle states render undifferentiated (genesis 56 / pending 10 / active 7 / genesis_stub 1, shown raw) `[D H4]`; "quantity of entries is not evidence of network health; it is evidence of a low bar for entry" (anti-pattern 7.4). 58/74 pages leak internal language via the projection's `note`-field fallback `[D H13]`. **Confidential-adjacent vaults are listed publicly** (aiLP-Dataroom two-party MAX-TRUST; CakeHealth private clinical; PercySleep org-graph) `[D F7]` — no admission policy exists.

## Decision space

1. **§admission (DP4, early)**: what earns a public listing at all — options per sensitive row: remove from projection · list with minimal non-descriptive card ("private engagement — details not public") · list with disclosure. Default recommendation: **the middle path is honest and safe**; removal where even the name is sensitive (operator per-row).
2. **Tier model**: derived-not-narrated tiers from existing data (e.g. `flagship/active` [live repo or site + current sync] · `building` [active status] · `seed` [genesis] · `pending`), each with a visible badge + one-line meaning; "74 vaults" always contextualized by the tier split.
3. **Card floor**: minimum honest card (name, class, tier, one register-safe line, honest-absent for the rest); below-floor entries render the floor, never blanks.
4. **Projection contract**: extends ADR-023 — public fields enumerated; leak classes excluded structurally; the JSON endpoint (P3.2) serves exactly this projection.

## Recommendation

Middle-path admission default + derived 4-tier model + the floor; hand-tiering prohibited (KW-14).

---

# §tiers — completed at P2.4 (2026-08-19)

> **The decision space above was written at genesis, before P1.3 ran. Two of its four items no
> longer survive contact with the data, and this section says so rather than quietly rescoping.**
> Operator ruling taken at the P2.4 planning gate: *derive from what exists; make the sparseness
> visible.* That ruling is followed here — including where following it means reporting that the
> mechanism the ruling sketched does not work.

## §tiers.0 — What the registry actually contains

Measured on `site/src/data/vaults.json`, 74 rows, 2026-08-19 `[D]`:

| Field | Populated | | Field | Populated |
|---|---|---|---|---|
| `display_name` | 74 / 74 | | `current_phase` | **0 / 74** |
| `status` | 74 / 74 | | `lifecycle_stage` | **0 / 74** |
| `class` | 74 / 74 | | `tagline` | **0 / 74** |
| `persona` | 61 / 74 | | `headline_mission` | **0 / 74** |
| `note` | 44 / 74 | | `recent_closed` | **0 / 74** |
| `card_present` | 24 true / 50 false | | `headline_adrs` | **0 / 74** |
| `last_synced` | 24 / 74 — **18 of them all `2026-05-24`** | | `github_url` · `docs_site_url` | **1 / 74** · **0 / 74** |

**This is not a defect to route around; it is P1.3 working.** The projection sanitizer nulled
descriptive fields that were leaking internal language, and the honest cost of sanitization is
sparseness. Hestia's backfill memo (29 vaults awaiting taglines) is outstanding. **The registry is
thin, and a tier model that pretends otherwise would be inventing the signal it claims to derive.**

## §tiers.1 — FINDING: `card_present` is a documentation signal, not a lifecycle signal

The genesis sketch proposed tiering on *"live repo or site + current sync"* and the P2.4 planning
gate sketched `status` + `card_present` (active-with-card → load-bearing, active → active, …).
**Neither works, and the cross-tab is why** `[D]`:

| `status` | `card_present` | rows |
|---|---|---|
| genesis | false | **49** |
| pending | true | 9 |
| active | **true** | **7** |
| genesis | true | 7 |
| pending | false | 1 |
| genesis_stub | true | 1 |

**All 7 `active` vaults have a card.** So "active + card" and "active" are the same set, and the
proposed split produces an empty bucket. Where `card_present` *does* discriminate is inside
`genesis` (7 / 49) and `pending` (9 / 1) — which is the tell: it is not tracking lifecycle at all.

`card_present` means **a `vault_card` file exists** — someone wrote a public-facing card. That is
*documentation completeness*, and it is orthogonal to maturity: a genesis stub whose owner wrote a
card is still a genesis stub. **Deriving a lifecycle tier from it would produce a badge that claims
maturity and measures paperwork** — the KW-14 narrated-vs-derived error inverted, and harder to
catch, because the number really is derived; it is just derived from the wrong thing.

**Decision: `card_present` is not a tier input.** It becomes a separate, honestly-named
completeness signal — what it measures.

## §tiers.2 — FINDING: every status in this registry is self-declared, and nothing corroborates it

The genesis sketch wanted a `flagship/active` tier gated on *"live repo or site + current sync."*
None of those three signals exists at usable coverage: `github_url` 1/74, `docs_site_url` 0/74,
`last_synced` 24/74 with 18 of those frozen at a single date three months old.

So the only lifecycle input is `status`, and `status` is **the vault's own declaration in the node
inventory** — not an external measurement. **The registry cannot currently distinguish a vault that
is active from a vault that says it is.**

**That fact belongs on the surface, not in this ADR.** The tier vocabulary must therefore describe
*declared stage*, never *assessed maturity* — because a hostile reader who asks "active by whose
measure?" is entitled to the true answer, which is "by its own." A tier named `flagship` or
`mature` would not survive that question for a second, which is exactly the test the mission set.

## §tiers.3 — The model

**Three tiers, from `status` alone**, folding `genesis_stub` → genesis as the shipped
`statusLabel()` already does (`site/src/utils/vaultLabels.ts:52`) so the public figure stays
consistent with `network_state.ts`:

| Tier | Derived from | Rows | Public label | One-line meaning (ships beside the badge) |
|---|---|---|---|---|
| **In use** | `status: active` | 7 | *in use* | The vault is being worked in today. Self-declared. |
| **Chartered** | `status: pending` | 10 | *chartered* | Scoped and opened; substantive work has not begun. |
| **Planned** | `status: genesis` + `genesis_stub` | 57 | *planned* | A named place in the network with a governance skeleton and little else. |

Vocabulary notes, each answering a hostile read rather than dodging it:

- **`pending` and `genesis` ship raw today.** `statusLabel()` gives `class` real public labels but
  passes statuses through underscore-replaced, so the registry currently tells a stranger a vault is
  *"pending"* — pending **what**? — and *"genesis"*, which is house jargon. **chartered** and
  **planned** say the same thing in words a newcomer already owns.
- **No tier claims quality.** Not `flagship`, not `mature`, not `production`. Nothing in this data
  supports those words, and a badge that overclaims is worse than no badge, because it converts a
  thin registry into a *misleading* one.
- **"Self-declared" is stated once, plainly, on the index** — not buried in a tooltip. It is the
  single most important caveat on the whole surface.

**Separate from the tier**, and named for what it is:

- **Documented** — `card_present`. 24 of 74. Rendered as a card-completeness signal, not a rank.
- **Registry currency** — `last_synced` where present. **Displayed with its date, never as
  "recently updated"**; 18 rows share `2026-05-24` and reading that as freshness would be false.

## §tiers.4 — The dual clock: NOT DERIVABLE. Recorded, not dropped.

The mission's acceptance criteria ask for *"honest dual-clock signals where derivable"* (the
crates.io pattern: last release **and** last commit, so a reader sees both liveness and staleness).

**It is not derivable here, and the criterion is recorded unmet rather than quietly satisfied with
a weaker number.** A dual clock needs two independent time signals per row. This registry has at
most one, present on 24 of 74 rows, with 18 of those identical and three months old. Rendering
`last_synced` as a clock would tell a reader that 18 vaults changed on the same day, which is an
artifact of one bulk sync — a fact about the *sync*, not about the vaults.

**Blocked on data, not on design.** It becomes derivable when rows carry a repo or site URL with a
real timestamp — Hestia's lane. Re-opened at **P3.2** (registry JSON endpoint) or whenever the
backfill lands, whichever is first.

## §tiers.5 — Card floor

No card ships below the floor: **display name · class label · tier badge · one register-safe line ·
honest-absent for everything else.** "Honest-absent" means the field is *omitted or named as
absent*, never rendered blank and never filled with a placeholder — P1.3's `— —` titles are the
cautionary instance. The DP4 minimal-card rows (§admission) are a *narrower* floor by ruling and are
unaffected by this one.

## §tiers.6 — The 77-vs-74 question is STATED here, not decided

`Home.aDNA`'s inventory carries **77** vaults against this registry's committed **74**. A
`sync:vaults` run today would publish three currently-unlisted vaults — **`Bearly.aDNA`,
`RareGraph.aDNA`, `StrongerWithScience.aDNA`** — two of which the workspace router marks
*data-bearing, git local-only, NO remote*.

**That is a DP4-class admission ruling, and it is the operator's with Hestia's B7 data pass — not a
side effect of a tier redesign.** This ADR does not decide it, and P2.4 does not run `sync:vaults`
(pt19, absolute). Staged as a memo ask; the registry count stays a true, unregenerated **74**
until ruled.

## §tiers.7 — The 10× criterion is UNMET, and the mechanism that would meet it is named

P2.4 O1 built three grouping variants over the real registry and measured all three at a synthetic
740 rows. **All three converge on ~19,000 px and ~5,900 DOM nodes**; variant C, designed to be the
one that scales, came in **5% under A** — noise, not an architecture.

| Variant | 74 rows | 740 rows |
|---|---|---|
| A tier-first | 2,279 px · 610 nodes | **18,896 px** · 5,938 |
| B class-first | 3,697 px · 651 nodes | **19,327 px** · 5,979 |
| C density | 2,172 px · 589 nodes | **17,974 px** · 5,665 |

The reason is arithmetic and it applies to every grouping: at 10× the planned tier holds ~570 rows,
and 570 dense table rows at ~30 px is ~17,000 px on its own. **Density reduces the cost per row; it
does nothing about the number of rows.** No choice among A/B/C meets the criterion, so choosing
differently was never the answer.

**⛩ Operator ruling (2026-08-19): explicitly defer.** The criterion *"the browse experience at 740
synthetic rows"* is recorded **UNMET**, not quietly satisfied because the page rendered without
falling over. The grounds for deferring: **74 is the real number**, and at 74 all three variants sit
between 2.2k and 3.7k px, which is a normal page. 740 is a stress test that found a real limit but
not a present problem — and unmet-and-known beats met-on-paper.

**The mechanisms that would meet it**, recorded here so a later mission inherits the option set
rather than rediscovering it. Each is orthogonal to the grouping choice, which is precisely why this
was a second decision and not a property of A/B/C:

1. **Pagination** of the planned tier — simplest, and the only one that also bounds DOM node count.
2. **Default-collapsed planned tier** — cheapest, and helps at 74 as well as 740; the cost is that
   57 of 74 rows sit one click away, so the group header must state the count for it to read as
   disclosure rather than concealment.
3. **Virtualization** — highest ceiling, highest complexity, and it puts a JS dependency under a
   surface whose no-JS fallback is currently load-bearing.

**Revisit trigger**: whichever comes first — the registry passing ~150 rows, or **P3.2** (the
registry JSON endpoint), which changes the consumption model anyway.

## Consequences

The registry becomes an honest instrument that scales; H4/H13/N8 close structurally. **Two
acceptance criteria change shape and both are recorded, not silently rescoped:** the four-tier
model becomes three (`card_present` disqualified as a lifecycle input), and the dual clock is
reported **not derivable** with the coverage numbers as the reason. The surface gains a caveat it
did not have — that these stages are self-declared — which makes the registry *less* impressive and
more true. Hestia's data lane gets a sharpened ask: taglines, plus **any external timestamp at all**,
which is what unblocks the dual clock.

## Ratification

- **§admission** · **Decision:** minimal-card ×3, suppression at the generator · **Ratified-by:**
  Stanley (operator) · **Date:** 2026-08-16 (DP4, P1.3 O3 gate) · **Status:** **ruled**.
- **§tiers** · **Decision:** three tiers from `status` alone — **in use (7) · chartered (10) ·
  planned (57)**; `card_present` disqualified as a lifecycle input and rendered as a separate
  *documented* completeness signal; the dual clock recorded **not derivable**; "self-declared"
  ships plainly on the index · **Ratified-by:** Stanley (operator) · **Date:** 2026-08-19 (the P2.4
  ⛩ pick, in-chat) · **Status:** **accepted**.
- **§tiers.7** · **Decision:** the 10× criterion is **deferred** and recorded **UNMET**; the three
  candidate mechanisms are named, none is built · **Ratified-by:** Stanley (operator) ·
  **Date:** 2026-08-19 (the same ⛩) · **Status:** **accepted**.

> **What the signature covers.** The operator was asked two questions at this gate and answered
> both: the grouping (**variant A — tier-first**) and the 740 mechanism (**defer**). Choosing A
> adopts the three-tier vocabulary this section defines, because A *is* that vocabulary rendered —
> which is what the pre-ruling text above anticipated when it said §tiers "ratifies at the P2.4 ⛩
> operator pick alongside the O1 spike." **§tiers.6 (77-vs-74) was deliberately not put to the
> gate** and remains *stated, not decided*: it needs Hestia's B7 data pass, and the memo asking for
> it went out under the same session's delivery GO.
