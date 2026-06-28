---
type: artifact
artifact_class: subject_boundary
campaign_id: campaign_looking_glass
title: "Operation Looking Glass — the site-backing slice (Subject-B boundary)"
created: 2026-06-27
updated: 2026-06-27
last_edited_by: agent_stanley
status: active
tags: [campaign, looking_glass, subject_b, site_backing_slice, claim_trace, currency]
---

# The Site-Backing Slice — Subject-B Boundary

> **What this is.** The precise, defensible set of source-of-truth the live aDNA website (`aDNA.aDNA/site/`, adna.network) surfaces or makes factual claims about. It bounds **Subject B** of [[how/campaigns/campaign_looking_glass/campaign_looking_glass|Operation Looking Glass]]: the campaign's claim-trace + currency checks verify fidelity *within this slice only* — not a full `what/` audit (operator scoping, M0). Built in M1 (Obj 5) from a read-only survey of `site/src/data/`, `site/src/pages/`, `site/src/content/`, and the generator scripts.

The site draws on **three concentric rings** of backing data, plus the authored content collection and the `what/` ground-truth they ultimately answer to. The ring a claim lives in determines **who may fix a drift** — the campaign's load-bearing pt19/Websites-carve discipline.

## Ring A — pt19-derived data (READ-ONLY; Hestia/Home.aDNA owns)

Regenerated from Home.aDNA inventory by `site/scripts/*.mjs` via `npm run sync:vaults` / `sync:install`. **The campaign never runs these and never hand-edits these files** (Standing Order 2). A drift here is **`pt19-owned`**: flag it, route it to Hestia, never fix it in-campaign.

| File | What it claims | Upstream source / generator | Disposition |
|------|----------------|-----------------------------|-------------|
| `site/src/data/vaults.json` | The canonical registry: **54 vaults** × class · persona · status · relationships; **14 edges**; per-vault cards (display name, tagline, GitHub URL, governance path) | `Home.aDNA/what/inventory/inventory_vaults.yaml` + `Home.aDNA/what/vault_cards/the_*.aDNA.md`, projected by `scripts/build_vaults_data.mjs` (ADR-023) — **public-note sanitizer** strips internal/campaign/client notes before publish | **READ-ONLY** — currency-gate checks it, never writes it |
| `site/src/data/vaults_graph.mmd` | Mermaid topology: 54 nodes by class, 14 directed edges (federation/umbrella/companion/supersedes/partner) | same build step as vaults.json | **READ-ONLY** |
| `site/src/data/install_truth.json` | Single source for clone-and-run install commands; build-time existence-check of `.adna/` template paths; template git SHA | `.adna/` (workspace template, READ-ONLY per ADR-034), via `scripts/build_install_truth.mjs` | **READ-ONLY** |

> **Currency-gate scope (A2).** The Tier-1 currency gate reads Ring A as *ground-truth* and asserts that vault-state claims rendered elsewhere on the site (counts, names, statuses) match it — a read-only diff. It must never invoke `sync:vaults`; it reads pt19 output, never regenerates it.

## Ring B — site-curated overlays (website-owned; manually upstreamed later)

Hand-authored at `site/src/data/`; each carries an explicit `cite:` to an upstream `who/` source. Drift here is **`website-owned`** — fixable in-campaign (at M4), but coordinate via the Websites carve since some upstream to Home.aDNA.

| File | What it claims | Cited source | Fidelity stakes |
|------|----------------|--------------|-----------------|
| `site/src/data/subnetworks.json` (+ `.yaml` mirror) | 4 public-good subnetworks (World Genome Academy · Context Commons · Wilhelm AI for the Undiagnosed · Rare Archive) — taglines, ethos, stewards, governance paths, license, attribution, public URL | `who/coordination/coord_*.md` in Home.aDNA (per-subnetwork) | **HIGH** — names real orgs, stewards, licenses; Wilhelm pair under ADR-010 publication discipline (operator-cleared 2026-06-07) |
| `site/src/data/network_edges.yaml` | 5-edge taxonomy overlay (umbrella/federation/partner/companion/supersedes); 95 lines incl. honesty-discipline notes + `OMITTED` documentation | stable seed → upstreams to `Home.aDNA` inventory + vault_cards (ADR-023/033) | **MED-HIGH** — every edge is a governance statement; "no decorative edges" discipline |
| `site/src/data/community.json` | Participation ladder (4 levels: User→Contributor→Quest Runner→Steward); 5 governance facts; honest-horizon line | `who/community/community_roles.md` | **HIGH** — claims one-line summaries are "faithful condensations"; "only real practices, no fabricated counts" |

## Ring C — single-sourced constants (gate-protected)

TypeScript modules that pin volatile facts to one place to prevent drift; already guarded by existing gates (single-source lint / link-check / public-meta sanitizer).

| File | What it claims | Fidelity stakes |
|------|----------------|-----------------|
| `site/src/data/standard.ts` | `STANDARD_VERSION='v2.3'` · `ENTITY_TYPE_COUNT=16` · `CONFORMANCE_LEVELS=3` · `STANDARD_LICENSE='MIT'` | **CRITICAL** — every public stat imports from here; must match `what/docs/adna_standard.md` |
| `site/src/data/canonical.ts` | `REPO_HTTPS` (github.com/aDNA-Network/aDNA) · `PUBLISHER='aDNA Network'` | **CRITICAL** — JSON-LD/publisher; guards C-1/C-3 stale-org drift |
| `site/src/data/home.ts` | Home hero stats, 3-step demos, 5 audience pathways (imports from `standard.ts`) | **MED** — stats single-sourced; demos are illustrative |

## The `what/` ground-truth the slice answers to

Where the site makes claims about the standard, concepts, or the vault, these `what/` (and `who/`) files are the source of truth the claim-trace audit resolves against:

| Ground-truth | Site surface | Claim verified |
|--------------|--------------|----------------|
| `what/docs/adna_standard.md` | home hero · `/learn/what-is-adna` (16-type table) · spec tags · `/llms.txt` | version **v2.3**, **16** entity types, **3** conformance levels, triad, governance model |
| `what/inventory/inventory_vaults.yaml` *(via Ring A)* | `/vaults`, `/vaults/graph`, `/network`, home | 54-vault registry; classes; relationships |
| `what/vault_cards/the_*.aDNA.md` *(via Ring A)* | `/vaults`, `/vaults/[slug]` | per-vault display name, tagline, persona, status, governance path |
| `what/concepts/` | `/learn/concepts/*` | concept pages exist + reflect standard terminology |
| `what/glossary/` | `/glossary/*`, tooltips | term definitions current |
| `what/patterns/` | `/patterns/*`, `/get-started` | pattern docs codify standard practice |
| `what/comparisons/` | `/learn/comparisons/*` | honest positioning vs Johnny.Decimal / Notion / PARA / Zettelkasten / plain-Markdown |
| `who/community/community_roles.md` | `/community` (via `community.json`) | participation ladder faithful |
| `who/coordination/coord_*.md` (4) | `/commons`, subnetwork cards (via `subnetworks.json`) | steward / license / governance claims |
| `who/governance/` | `/reference/governance-model`, `/network` | governance model reflects practice |

> **Content collection note.** `site/src/content/docs/*.mdx` (~76 authored pages: glossary, comparisons, concepts, patterns, adopters, community) is **site-local** — it *parallels* `what/` topics but does not `include` the `what/` markdown at build. So the claim-trace audit checks these MDX pages for fidelity **against** the `what/` ground-truth above (do the site's concept/comparison/glossary pages say what the vault says?), treating site-local authorship as a drift surface, not a mirror.

## High-signal claim classes (what M2 will actually trace)

Per the charter's gap-refinement, M2 bounds the claim-trace audit to **high-signal claim classes**, not every sentence:

1. **Quantitative / counts** — "54 vaults", "14 relationships", "16 entity types", "3 conformance levels", "~76 pages", "6 proof links" → trace to Ring A / `standard.ts` / `what/docs`.
2. **Status / currency** — version "v2.3", vault statuses, "MIT", canonical repo URL, subnetwork publication status → currency gate + Standard Archivist.
3. **Structural / relational** — vault classes, the 5-edge taxonomy, the triad shape, the participation ladder → Information Architect + claim-trace.
4. **Source-fidelity** — subnetwork steward/license/governance claims, comparison claims, "clone-and-run image ships with X" proof-links → Claim-Tracer (does the cited source say this, qualifiers intact?).

## Owner-class summary (the fix-routing rule)

| Ring | Owner | On drift |
|------|-------|----------|
| A (vaults/graph/install_truth) | Hestia / pt19 | **flag only** — `pt19-owned`; route to Home.aDNA, never hand-fix |
| B (subnetworks/edges/community) | website (this campaign) | fixable at M4; coordinate w/ Websites carve where it upstreams |
| C (constants) | website (this campaign) | fix in-campaign; single-source so one edit propagates |
| `what/` ground-truth | the standard (aDNA.aDNA) | fix is a **Subject-B** finding (correct the vault, or correct the site that mirrors it — the choice is itself a finding) |

*Total claim surface bounded by this slice: 54 vaults · 14 relationships · 4 subnetworks · ~76 MDX pages · 6 proof-links · 16 entity types · 1 canonical URL · v2.3 / 3-levels / MIT.*
