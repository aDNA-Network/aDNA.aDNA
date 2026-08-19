---
plan_id: mission_haussmann_p2_4_registry_redesign
type: plan
title: "P2.4 — Registry redesign: admission standard, lifecycle tiers, facets — honest at 74, ready at 10×"
campaign: campaign_haussmann
phase: P2
decade: 1
owner: stanley
status: completed   # O0–O3 ✅ 2026-08-19. ⛩ ruled variant A + 740 deferred; built, gated 472/472, AAR below. `scales at 10×` recorded UNMET by ruling (ADR-052 §tiers.7)
mission_class: design_excellence
executor_tier: fable
token_budget_estimated: "~250–350 kT across 2 sessions: ADR-052 completion + registry-surface spike + build + fixtures (ADR-016)"
token_budget_actual: "~155 kT (O2+O3 this session; O0+O1 ran prior)"
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["H4 confirmed", "anti-pattern 7.4 (quantity ≠ health; admission standard needed)", "P1.3 outputs (clean projection)", "dossier registry patterns (HF facets/lifecycle badges; crates dual-clock; PEPs machine index)", "webforge P8 (marketplace archetype — reference tenant 'aDNA Registry')"]
vitruvius_dimensions: [D2, D7]
decade_theme: navigation
webforge_patterns: [P8]
patterns_to_author: ["static Tier-A registry variant of the marketplace patterns (owed back)"]
depends_on: [mission_haussmann_p1_3_registry_truth]
blocks: []
acceptance_criteria:
  - "ADR-052 completed at proposed: admission standard (what earns a public listing) + lifecycle tier model (visible distinction: mature / active / genesis / pending — honest labels, not inflation) + the DP4 confidential ruling folded in"
  - "Registry index: facets (class/status/tier), sort, honest dual-clock signals where derivable; scales-at-10× check (the browse experience at 740 synthetic rows)"
  - "Per-card quality floor: no card ships below the honest-absent minimum; lifecycle badge on every card + detail page"
  - "Design spike + ranker ≥4.0 before build; '74 vaults' framing everywhere reconciled to the tiered truth (with '15 connected' contextualized)"
verification_method: "ranker + 10× synthetic-scale render test + T0 captures + claim-register rows for all new copy"
human_gate: true
tags: [plan, haussmann, p2, registry, tiers]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> "Quantity of entries is not evidence of network health; it is evidence of a low bar for entry" —
> the registry becomes an honest instrument with a visible quality model.

## Why this mission exists

74 entries in mixed lifecycle states render undifferentiated (genesis 56 / pending 10 / active 7) `[D H4]`; the browse surface was designed for a dozen. P1.3 made the *copy* honest; this mission makes the *model* honest: an admission standard, visible tiers, facets that survive 10×, and the dossier's proven registry patterns (HF lifecycle badges, crates.io dual-clock, PEPs' machine index groundwork for P3.2).

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | ADR-052 completion: admission standard + tier model + tier-assignment derivation (from existing status/card data — honest, no hand-tiering) | ADR-052 proposed | — |
| O1 | Spike: registry index + card + detail comps (marketplace-archetype patterns, static variant); 10×-scale render test; ranker | comps + ranker ≥4.0 | ⛩ operator pick |
| O2 | Build: facets/sort/tiers/badges + card floor + framing reconciliation ('74' contextualized) | registry live in tree | — |
| O3 | Fixtures same-diff (snapshot-derived, KW-8) + captures + register rows; stage the owed-back pattern note to Vitruvius; AAR | evidence + AAR | — |

## Constraints

Tier assignment derives from data — never narrated (KW-14); honest-absent floor from P1.3 holds; pt19 (data via Hestia); the tier *vocabulary* must survive a hostile read (no "mature" that isn't).

## Definition of done

A stranger browsing 74 entries understands in one glance which are load-bearing and which are seeds — and the surface would still work at 740.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + ADR-052 seed + `evidence/dossier/haussmann_reference_dossier_draft.md` (registry patterns). Execute O0, spike at O1, halt for the pick, then O2–O3.

## Progress

### O0 ✅ — ADR-052 §tiers completed at `proposed` (2026-08-19)

Two of the four decision-space items did not survive contact with the data, and §tiers records that
rather than rescoping quietly.

- **`card_present` disqualified as a tier input** (§tiers.1). All 7 `active` vaults have a card, so
  the planned active-with-card / active split yields an empty bucket; where it discriminates is
  inside `genesis` (7/49). It measures documentation, not lifecycle. Tiering on it would give a
  badge that claims maturity and measures paperwork — the narrated-vs-derived error inverted, and
  harder to catch because the number really is derived, just from the wrong field.
- **Every status here is self-declared and nothing corroborates it** (§tiers.2) — `github_url` 1/74,
  `docs_site_url` 0/74, `last_synced` 24/74 with 18 frozen at one date. So the vocabulary describes
  **declared stage**, never assessed maturity: **in use (7) · chartered (10) · planned (57)**. No
  `flagship`, no `mature`. "Self-declared" ships plainly on the index.
- **Dual clock: NOT DERIVABLE**, recorded unmet with coverage numbers as the reason (§tiers.4).
- **77-vs-74 stated, not decided** (§tiers.6) — a DP4-class admission ruling; memo to Hestia staged.

### O1 ✅ — spike + 10× test (2026-08-19) — ⛩ HALTED

Full record: `artifacts/p2_4/spike_record.md`. Three variants over all 74 real rows plus a 740-row
synthetic mode; **headless-verified 23/0**.

**The finding that changes the question: none of the three scales.** A/B/C converge on ~19,000 px
and ~5,900 DOM nodes at 740; C, designed to be the scalable one, beats A by **5%**. Density cuts
cost per row and does nothing about row count. **The `scales at 10×` criterion is recorded UNMET** —
the mechanism that would meet it (pagination / default-collapsed planned tier / virtualization) is
orthogonal to the grouping choice, so **the pick is two decisions, not one**.

Synthetic pre-screen is `[D-syn]`, **not** a ranker result — the builder scored its own comps
(conflict declared, convention 4). No variant clears 4.0; A and C tie.

### ⛩ RULED — operator, 2026-08-19

Both halves of the split pick were answered, plus two items carried alongside it.

| Decision | Ruling |
|---|---|
| **1 — grouping** | **Variant A, tier-first.** The pre-screen tied A and C and cleared neither, so the call was judgment: A's three groups are visually equal and only the labels differ, so nothing in its layout claims more than the self-declared data supports. C's density gradient reads as a ranking by a status nobody corroborated (§tiers.2). |
| **2 — the 740 mechanism** | **Explicitly defer.** `scales at 10×` recorded **UNMET**; the three candidate mechanisms are named in **ADR-052 §tiers.7** with trade-offs and a revisit trigger (~150 rows or P3.2). |
| *(carried)* **DP-16** | **Shape A, conditioned** — recorded in the Keystone manifest §DP-16 + its split section. |
| *(carried)* **outward acts** | **GO** on the 4-commit push and the 4-memo delivery. |

**ADR-052 ratified `accepted`** at the same gate. **§tiers.6 (77-vs-74) was deliberately not put** —
it needs Hestia's B7 data pass, and stays *stated, not decided*; the memo asking for it went out
under the same delivery GO. `pt19` holds: the registry count stays a true, unregenerated **74**.

### O2 ✅ — variant A built (2026-08-19)

**The grouping moved from class to tier.** `/vaults` renders three sections — in use (7) · chartered
(10) · planned (57) — each with its count and the one-line meaning from §tiers.3. Tier is derived by
a single shared `tierOf()` in `site/src/utils/vaultLabels.ts`; nothing is hand-tiered.

**All three tiers render the same card, deliberately.** That is the design constraint the ⛩ ruling
turned on, not a style default: a denser treatment for the 57 scans better and reads as a *ranking*
by a field nothing corroborates.

- **Badges on every card and the detail page.** `VaultCard` and the vault detail page carry the tier;
  **`RegistryCard` did too, and had to** — the homepage was rendering `vault.status` **raw**,
  bypassing even `statusLabel()`, so `genesis`/`pending` reached a public surface and the two
  surfaces would have described one vault with two different words.
- **Card floor (§tiers.5)** — name · class · tier badge · persona-or-absent · purpose-or-absent ·
  documented-or-absent. **The class label moved onto the card**: with class no longer the section
  heading, a card without it would have silently lost that fact for all 74 vaults.
- **"These stages are self-declared" ships as body text** on the index, not a tooltip.
- **The `74` framing is reconciled** — the hero states the split, and the stat strip shows 7/10/57
  instead of a bare 74.
- **No-JS anchors retargeted, which was mandatory not cosmetic.** The jump-chips pointed at
  `#class-*` sections that no longer exist; a dangling jump-link fails silently and only for the
  no-JS reader. `VaultClassFacet` was **renamed `VaultFacetChip` and its hidden `#class-` prefix
  removed** — it built its own href, so a caller could pass a correct tier slug and still emit a
  dead anchor. Class survives as a JS filter dimension, where it now composes with tier instead of
  fragmenting it. Verified: 3/3 anchors resolve, 0 dangling.

**🔴 THE UNPLANNED FINDING — a live silent drop, found while fixing what was reported as a cosmetic
one.** The carry-over was logged as *13 mixed-case vault links that 301 correctly, so they work*.
They did not work. `commons.astro` joined the subnetworks overlay to the registry with **raw** ids
while P2.1 had canonicalized both the registry **and its edge endpoints** behind the accessor, so
the join missed silently. **Verified on production before touching anything**: WilhelmAI rendered
**0 of its 3** declared relationships, RareArchive **0 of 1**, and the freshness line read
**"member records last synced ."** — an empty list and a dangling full stop — one sentence before
the page promises *"honest activity, today, is exactly this: the dates above and the relationships
each vault declares."* It hid because **every dropped field had an honest-absent path**, so a lookup
failure rendered identically to a fact about the data. Repaired at the join; relationships and dates
are back, confirmed in the build.

**Non-canonical vault links: 13 → 0** of 442 emitted. The last 11 were the hero graph's
keyboard/AT nav, parsing raw `data-slug` out of the generated SVG — so the accessible path paid a
redirect the mouse path did not.

### O3 ✅ — evidence (2026-08-19)

- **Suite 460 → 472 green, zero xfail.** 12 new assertions across **gate-30** (2) and the new
  **gate-35** (10). Every one red-proven by mutation.
- **Two of this mission's own instruments were wrong first**, both caught before being believed:
  gate-30's link check parsed the query string after the trailing slash and reported the graph
  page's `?focus=` deep-links as broken vault routes; gate-35's overclaiming check scanned the whole
  page and failed on **"flagship"** inside `Harness.aDNA`'s own tagline — pt19 data, a vault
  describing itself, not this site awarding a rank. **A third was vacuous**: the tier-badge regex
  assumed `class="…">` and matched nothing through Astro's scoped-style attributes — caught only by
  the floor assertion, which is the entire reason floor assertions exist here.
- **And one gate was satisfiable by a comment.** The overlay-join guard asserted
  `/canonicalVaultSlug/` against the *source* of `commons.astro`; the mutation test passed with the
  canonicalization fully removed, because the docblock above the join names the function. Rewritten
  to assert the built output — dates and relationship counts derived from the registry — where a
  comment has no vote. **A gate a comment can make pass is not a gate.**
- **axe 0** across 4 surfaces × 3 viewports × **both themes** (24 captures,
  `evidence/captures_p2_4/`), parsed on `axeViolations` with a missing-key guard — P2.3's
  clean-zero-over-a-real-violation incident.
- **Claim register + fixture**: rows **R-114…R-117** (§7.7). R-117 is the claim the page *stopped*
  making — *"most tended by a named agent"*, numerically defensible at 61/74 personas and still
  wrong across a 57/74-planned set — **guarded against return**, because in this campaign the
  R-28/R-62 family recurred twice when the fix went to a component instead of the claim.
- **`scales at 10×` reported UNMET** in ADR-052 §tiers.7, here, and in the AAR. Nothing was built
  for it; the three candidate mechanisms and a revisit trigger are recorded.

## AAR (SO#5)

**Worked.** Recording the ⛩ ruling *before* building on it — the ADR, charter, manifest, and spike
record were updated first, so every subsequent edit had a citable authority instead of a memory of a
conversation. Red-proving by mutation caught four defective assertions in one session, three of them
in gates I had just written to catch other people's mistakes.

**Didn't.** The mission framed its own carry-over as cosmetic ("they 301, so they work"), and I
nearly implemented that framing — a slug-canonicalization one-liner would have turned the links
lowercase and left the commons ledger still silently dropping every date and relationship. What
broke the framing was probing production before editing, not reasoning about the code.

**Finding.** *An honest-absent affordance makes a lookup failure indistinguishable from a fact.*
P1.3's honest-absent rule is right and stays — but every honest-absent path is now also a place a
silent drop can hide, and it hides better there than anywhere else, because the page looks
considerate rather than broken. The P2.1 lesson generalizes one layer out: **when a boundary is
normalized, every consumer that joins across it is a suspect** — the fix was correct, and it broke
two consumers that no route grep would have found.

**Change.** gate-30 now asserts the **output** (every emitted `/vaults/` link, whatever data file
produced it) rather than the input path (who imports `vaults.json`). Policing one data file was
always the wrong question: `subnetworks.json` and the generated `vaults_graph.svg` both carry route
slugs and neither is an import of `vaults.json`, which is exactly how 13 bad links sailed past a
green gate.

**Follow-up.** (1) `scripts/build_graph_svg.mjs` still writes raw ids into `data-slug`; normalized on
read, generator unfixed — belongs with the known `vaults_graph.svg` currency pass. (2) The **77-vs-74**
admission ruling stays open with Hestia (memo delivered). (3) The **740 mechanism** is deferred with
its option set recorded, revisit at ~150 rows or P3.2.

**Token**: ~155 kT actual vs 250–350 kT estimated (O0/O1 ran in the prior session).
