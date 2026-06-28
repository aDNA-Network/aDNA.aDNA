---
type: context_guide
topic: iii_domain_packs
subtopic: representation_coherence
created: 2026-06-27
updated: 2026-06-27
token_estimate: 2900
last_edited_by: agent_stanley
status: draft
campaign: campaign_looking_glass
graduation_target: III.aDNA (core_domain_packs) — prime candidate; graduate at terminal AAR (M5)
tags: [context_guide, iii-review, traps, representation_coherence, claim_trace, currency, does_justice, looking_glass, draft]
icon: scan-eye
fair:
  keywords: [iii-review, representation-fidelity, claim-tracing, source-fidelity, currency, structural-fidelity, does-justice]
  license: Apache-2.0
---

# III Domain Pack: Representation Coherence (DRAFT)

The site⇄context fidelity domain: **how you check that a representation is faithful to its source.** Where `web_design` audits *is this well-made?* and `vault_maintenance` audits *is the vault consistent?*, this pack audits the seam between them — **does the artifact (the website) tell the truth about the vault, completely, and currently?** It is the conceptual core of [[how/campaigns/campaign_looking_glass/campaign_looking_glass|Operation Looking Glass]] and the **prime graduation candidate** (it generalizes to any "is this artifact faithful to its vault?" review — docs site, README, deck, whitepaper, generated summary).

**Status: draft, campaign-scoped.** Graduation to canonical III.aDNA status requires the III criterion (fires across ≥3 cycles with ≥80% acceptance) — tracked in [[how/campaigns/campaign_looking_glass/artifacts/instrumentation_log|the instrumentation ledger]], graduated at the terminal AAR.

## When to Load

Load alongside `core` (Five Traps) when reviewing **any artifact that represents a vault to an audience**:
- a documentation/marketing site built from a vault (the Looking Glass case: `aDNA.aDNA/site/`)
- a README, deck, one-pager, whitepaper, or generated summary that makes factual claims about a vault's state, structure, or substance
- any surface where **drift between what-is and what-is-shown** is silent and crawler-visible

Pair with the **Claim-Tracer persona** ([[how/campaigns/campaign_looking_glass/artifacts/personas/reviewer_claim_tracer|reviewer_claim_tracer]]) — this pack is the knowledge; the persona is the reviewer who wields it.

## Canonical Reference (the source is ground truth)

The **vault is ground truth; the artifact answers to it.** For Looking Glass the bounded ground-truth set is [[how/campaigns/campaign_looking_glass/artifacts/site_backing_slice|the site-backing slice]] (`what/docs/adna_standard.md`, the `what/` content surfaces, and the three data rings). Two standing rules:

- **Ring A (pt19-owned) is READ-ONLY.** Drift in vault-state data (counts · names · statuses) is **flagged, never hand-fixed** — routed to Hestia. Confusing `website-owned` with `pt19-owned` is itself a finding (the [[../../../../who/reviewers/reviewer_standard_archivist|Standard Archivist]]'s two-class split).
- **A drift is fixable on *either* side.** When the site faithfully mirrors a vault error, correcting the **source** (the vault) can be the right fix, not the site. *Which side to fix is itself a finding.*

---

## Dimension 1: Claim-Source Traceability (A1 — correctness / no fabrication)

### Trap RC-TRACE-01: Untraceable Claim

| Field | Value |
|-------|-------|
| **Description** | A factual or quantitative claim on the artifact has **no resolvable source** in the ground-truth slice — it cannot be traced to any true statement in the vault. |
| **Example** | The site says "trusted by 200+ teams" or "reduces token cost 40%" with no vault artifact, dataset, or coordination memo that establishes the number. |
| **Where It Hides** | Hero stats, social proof, marketing superlatives, "impact" numbers, round figures that *feel* authoritative. Claims authored directly into site copy (`home.ts`, MDX) that never had a vault source. |
| **Severity Default** | **Critical** |

**Detection method**: Enumerate high-signal claims (quantitative · status · structural · source-fidelity classes). For each, attempt to resolve to a specific vault file + line. A claim that resolves to *nothing* is untraceable → Critical. (Bound to high-signal classes per the charter — not every sentence.)

**Why it happens**: Site copy is authored for persuasion; the discipline of "every number has a vault source" is easy to skip when a figure is illustrative or aspirational.

---

### Trap RC-TRACE-02: Source Mismatch

| Field | Value |
|-------|-------|
| **Description** | A claim **cites or derives from** a real source, but the source does not say what the artifact claims — the number, name, status, or relationship differs. |
| **Example** | The site renders "54 vaults" but the current `inventory_vaults.yaml` (via `vaults.json`) has a different count; or a vault card states a persona/status that the vault's own `STATE.md` contradicts. |
| **Where It Hides** | Derived data that went stale between regens; hand-authored overlays (`subnetworks.json`, `community.json`) whose `cite:` target moved; numbers transcribed once and never re-synced. |
| **Severity Default** | **High** (Critical if the mismatch is credibility-load-bearing, e.g. a headline count) |

**Detection method**: For each claim with a `cite:`/derivation, open the cited source and diff the asserted value against the actual. For Ring-A-derived values, diff against the **current** pt19 output (read-only) — this is the **currency gate**'s job mechanically; the persona catches the ones a string-diff misses.

**Why it happens**: Sources move faster than the surfaces that quote them. Rename/merge/recount cascades don't always reach every derived consumer (cf. the 2026-06-23 `network_edges.yaml` rename-cascade fix).

---

### Trap RC-FAB-01: Fabricated Specificity

| Field | Value |
|-------|-------|
| **Description** | A **specific** name, number, quote, or relationship presented with false precision — it appears *nowhere* in the vault, but its specificity makes it read as sourced. |
| **Example** | A named "case study" org that isn't in any vault; a precise edge ("X federates Y") the graph doesn't carry; a quoted spec section number that doesn't exist. |
| **Where It Hides** | Auto-generated prose, "examples" invented to illustrate, confident paraphrase that hardens into a specific claim, LLM-authored copy that pattern-matched a plausible number. |
| **Severity Default** | **Critical** |

**Detection method**: For each specific entity/number/quote, grep the vault for it verbatim. Specificity with zero vault hits = fabrication. (The most dangerous class — specificity is what a diligence reader trusts.)

**Why it happens**: The C-018 family (summary-confidence-inflation) plus generative authoring: a model will supply a plausible specific where the vault only supports a general.

---

## Dimension 2: Currency vs. Source (A2 — currency / no drift)

### Trap RC-CURR-01: Stale Vault-State Claim

| Field | Value |
|-------|-------|
| **Description** | A claim derived from **vault state** (count · name · status · version) was true once but the state moved and the artifact stayed still. |
| **Example** | "v2.2" after the standard reached v2.3; a pre-migration vault name (`SiteForge`, `TaskForge`) rendering as current; an edge count that no longer matches the graph. |
| **Where It Hides** | Hardcoded constants (`standard.ts`), cached counts, names baked into prose, diagrams frozen at an old taxonomy. |
| **Severity Default** | **High** |

**Detection method**: The **Tier-1 currency gate** owns the mechanical floor (read-only diff of site vault-state claims vs current ground-truth; **never `sync:vaults`**). Owner-class each hit: `website-owned` (fix in-campaign) vs `pt19-owned` (flag + route to Hestia).

**Why it happens**: A young standard re-versions/renames faster than a site updates; the gap is silent and crawler-visible.

---

### Trap RC-CURR-02: Superseded Source

| Field | Value |
|-------|-------|
| **Description** | The artifact cites a resource (repo, spec version, vault, ADR, tool) that still *renders* but has been **renamed, archived, or superseded** — semantic currency, not a broken link. |
| **Example** | A proof-link to `github.com/LatticeProtocol/...` after the canonical home became `aDNA-Network/aDNA`; citing an ADR that a later ADR supersedes without noting it. |
| **Where It Hides** | JSON-LD / `og:` metadata (human-invisible, crawler-visible), branding tokens, "learn more" links, citations to internal artifacts that got archived. |
| **Severity Default** | **High** |

**Detection method**: For each cited resource, resolve it *and* check it is the **current** form (not a fork/legacy/superseded edition). Distinct from the Standard Archivist's mechanical URL-mapping — this owns *"does the cited thing still exist as the thing cited?"* (Complement, not duplicate; cross-linked.)

**Why it happens**: Supersession is a vault event; citations are scattered and rarely swept when a resource is retired.

---

## Dimension 3: Structural Fidelity (A3 — does the shape represent the real shape)

### Trap RC-STRUCT-01: Misrepresented Shape

| Field | Value |
|-------|-------|
| **Description** | The artifact's information architecture implies a **structure the vault doesn't have** — a false hierarchy, an invented grouping, a decorative relationship. |
| **Example** | A site graph drawing a peer-to-peer mesh where the vault is hub-and-spoke; grouping vaults under a category the standard doesn't define; a "ring" of edges that don't exist (the E4 false-ring finding). |
| **Where It Hides** | Nav taxonomies, network/graph visualizations, "ecosystem" diagrams, category labels chosen for visual balance over fidelity. |
| **Severity Default** | **High** |

**Detection method**: Map the artifact's implied structure (nav tree · graph edges · groupings) against the vault's real shape (`inventory_vaults.yaml`, the standard's category set, `network_edges.yaml` honesty discipline — no decorative edges). Flag every structural element with no ground-truth basis.

**Why it happens**: Visual design rewards symmetry and completeness; the vault's real shape is lumpy. The pressure is to tidy it into a prettier lie.

---

### Trap RC-STRUCT-02: Dangling Reference

| Field | Value |
|-------|-------|
| **Description** | The artifact references a file, page, section, or anchor that **doesn't exist or is mislocated** in the ground truth. |
| **Example** | A link to `/learn/concepts/triad` where no such concept doc exists; a "see §11 Coordination Protocol" where the spec has no §11; a vault-detail link to a slug not in the registry. |
| **Where It Hides** | Cross-links authored ahead of the target; anchors that drifted when a doc was restructured; slugs that don't match post-rename. |
| **Severity Default** | **Medium** (High if user-facing 404 or a broken proof-link) |

**Detection method**: Extract every internal reference (route, wikilink target, spec §, slug); assert each resolves to a real target. (Overlaps the existing link-check gate for HTTP 404s; this adds *semantic* targets — does the cited **section** exist, not just the page.)

**Why it happens**: References are cheap to write and expensive to verify; restructures break them silently.

---

### Trap RC-STRUCT-03: Framing Drift

| Field | Value |
|-------|-------|
| **Description** | A citation **resolves**, but its **framing overstates or misquotes** the referenced content — says the spec *mandates* what it *recommends*, or attributes a property to the wrong owner. |
| **Example** | "The aDNA standard requires X" when `adna_standard.md` lists X as optional; "governed by a council" where governance docs describe operator-stewardship. |
| **Where It Hides** | Paraphrase that hardens a hedge into a rule; summaries that promote a SHOULD to a MUST; attribution that simplifies a nuanced ownership. |
| **Severity Default** | **High** |

**Detection method**: For each citation, read the cited content and compare its **modality** (mandate vs. recommendation vs. example) and **attribution** to the artifact's framing. Flag any strengthening or mis-attribution. (Standing Order 9: never contradict the spec.)

**Why it happens**: Persuasive copy wants crisp rules; sources are carefully hedged. Compression strips the modality.

---

## Dimension 4: "Does Justice" (A1/B2 — honest, complete representation)

> The hardest fidelity failure: every individual claim is *technically* present in the source, yet the representation is **substantively false by omission**. The quote is there; the qualifier, the trade-off, or the limitation the source honestly carries is not.

### Trap RC-JUST-01: Qualifier Stripping

| Field | Value |
|-------|-------|
| **Description** | The artifact drops a **qualifier or limitation** the source preserves, strengthening the claim by omission. |
| **Example** | Source: "near-real-time coordination, <100ms in WAN / <10ms LAN." Site: "real-time coordination." The number's gone and the scope is gone. |
| **Where It Hides** | Hero copy, feature bullets, "how it works" summaries — anywhere a hedge reads as friction. |
| **Severity Default** | **High** |

**Detection method**: For each consequential claim, fetch the source's *full* statement and check that every load-bearing qualifier (scope, condition, magnitude, "preliminary") survives in the artifact. A dropped qualifier that changes the claim's truth-value = High.

---

### Trap RC-JUST-02: One-Sided Representation

| Field | Value |
|-------|-------|
| **Description** | The artifact presents only the upside; it omits a **cost, trade-off, or limitation the vault honestly documents** (e.g. in an ADR's "consequences" or a comparison's "when not to use"). |
| **Example** | A comparison page that lists aDNA's advantages over PARA but drops the trade-offs the `what/comparisons/` doc itself acknowledges. |
| **Where It Hides** | Comparison pages, "why aDNA" sections, audience landing pages — surfaces built to convince. |
| **Severity Default** | **Medium** (High on a comparison/positioning surface where honesty *is* the credibility) |

**Detection method**: Where the vault source pairs a benefit with a documented trade-off, verify the artifact carries (or at least doesn't contradict) the trade-off. The dual-audience + honest-positioning standing orders (SO7) are the bar.

---

### Trap RC-JUST-03: Confidence / Hype Drift

| Field | Value |
|-------|-------|
| **Description** | Strength or confidence inflation: absolute language ("first", "only", "the standard for") where the vault **hedges** ("to our knowledge", "one approach", "aims to"). |
| **Example** | "The standard for agentic context" where the vault frames aDNA as *a* standard, openly positioned among alternatives. |
| **Where It Hides** | Taglines, meta descriptions, conclusion CTAs, anywhere superlatives compress a hedged claim. |
| **Severity Default** | **High** |

**Detection method**: Grep absolute markers (`first` · `only` · `unique` · `the standard` · `guarantees`). For each, check the vault hedges; flag unhedged inflation (C-018 pattern).

---

## The "Does Justice" Rubric (0–5)

Score the representation as a whole — *does it do justice to what the vault is?*

| Score | Anchor |
|-------|--------|
| **5** | Every high-signal claim traces to a real, current source; qualifiers, trade-offs, and hedges preserved; structure mirrors the real shape; zero fabrication. The vault would recognize itself. |
| **4** | Fully traceable + current; minor justice gaps (a dropped qualifier or two, no inflation that changes truth-value). |
| **3** | Traceable, but ≥1 systematic omission (one-sided on a positioning surface, or a stripped qualifier that strengthens a headline claim). |
| **2** | A source mismatch or framing drift on a credibility-load-bearing claim, or a misrepresented structure. |
| **1** | An untraceable headline claim or fabricated specificity present. |
| **0** | Fabrication on a load-bearing surface, or stale-state claims a diligence crawler would catch. |

> Currency and fidelity are floors, not averages: a single **Critical** (untraceable/fabricated/stale-headline) caps the score at ≤1 regardless of craft. *Currency is credibility for a young standard.*

## Cross-Trap Escalation Rules

| Combination | Escalation |
|-------------|------------|
| RC-TRACE-02 + RC-CURR-01 | → Critical (claim is both mis-sourced **and** stale — the source moved and the quote is wrong) |
| RC-FAB-01 + RC-STRUCT-01 | → Critical (a fabricated entity inside a misrepresented structure compounds) |
| RC-JUST-01 + RC-JUST-03 | → Critical (qualifier stripped **and** inflated — the claim is now affirmatively false) |
| RC-CURR-02 + RC-STRUCT-02 | → High (superseded source behind a dangling reference) |
| any RC-* mis-classed `pt19-owned` ↔ `website-owned` | → the mis-classification is its own finding (wrong-owner fix risks colliding with pt19 regen) |

## Relationship to Other Checks

- **Standard Archivist (currency)** — owns mechanical standard/repo/brand/name currency + the two-class owner split. This pack is the **fidelity** complement (does the claim represent its source?) and adds *semantic* source-currency (RC-CURR-02). Cross-linked.
- **Content Strategist (evidence-pairing)** — owns "is there an example near the claim?"; this pack owns "does the claim trace to a *true* source?" — verification, not pairing.
- **Information Architect (structure)** — owns structural coherence *of the artifact*; Dimension 3 here owns structural *fidelity to the vault*.
- **The gates (Tier 1)** — the claim-trace gate + currency gate are the machine floor under Dimensions 1–2; the persona catches what a string-diff misses (Dimensions 3–4).
- **Standing Order 9** — never contradict the spec; RC-STRUCT-03 + RC-JUST-* enforce it at representation level.

## Trap Graduation

This pack starts **draft** with 11 traps across 4 dimensions. Graduation (per III criteria): each trap fires in ≥3 cycles with ≥80% acceptance; the pack surfaces issues `core` + the reuse packs miss; detection reproduces across artifact types (site → README → deck). Graduating traps + the pack itself become reusable for any vault-faithfulness review → III.aDNA at the terminal AAR (M5).

## Learning Store Integration

Every approved fix from this pack's findings is written to the campaign learning store (`how/campaigns/campaign_looking_glass/artifacts/looking_glass_corrections.jsonl`, standard III learning-store format) and mirrored into the [[how/campaigns/campaign_looking_glass/artifacts/instrumentation_log|instrumentation ledger]] Log 2 (reusable-vs-bespoke). Entries with `accepted: true` and frequency ≥3 are graduation candidates.
