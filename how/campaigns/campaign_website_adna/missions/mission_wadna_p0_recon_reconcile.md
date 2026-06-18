---
mission_id: mission_wadna_p0_recon_reconcile
type: mission
title: "P0 — Reconnaissance & Ground Truth: RECONCILIATION + SITEMAP + Frozen Baseline + Benchmark Set"
campaign_id: campaign_website_adna
phase: 0
mission_number: 0
slug: recon_reconcile
status: planned
created: 2026-06-17
updated: 2026-06-17
last_edited_by: agent_stanley
owner: stanley
persona: rosetta             # resident executor; campaign planned by Berthier; P0 led by Standard Archivist + Performance Engineer lenses
mission_class: planning      # read-only; produces governance artifacts; ZERO site changes
spec_completeness: complete
estimated_sessions: "1-2"
token_budget_estimated: "S1 ~150-250 kT (recon read-walk + Step-A capture fan-out); S2 (if split) ~80-150 kT (RECONCILIATION + SITEMAP synthesis)"
hard_dependency_satisfied: "yes — pre-seeded by reconnaissance 2026-06-17 (see §Pre-Seeded Findings)"
target_adr: "none (planning-class; may RECOMMEND ADRs for operator ratification)"
unblocks_missions: [mission_wadna_p1_critique]
deliverables_count: 5
tags: [mission, campaign_website_adna, phase0, planning, reconnaissance, reconciliation]
---

# P0 — Reconnaissance & Ground Truth

## Goal

Establish **what exists and what is true** before any judgment or change. Produce the current-state model of the standard, the diff between that model and what the site currently says (`RECONCILIATION.aDNA.md`), the complete scored-unit inventory (`SITEMAP.aDNA.md`), a frozen "before" baseline (Lighthouse + axe + screenshot matrix, every page), and the benchmark reference set this campaign measures against. **This mission produces governance artifacts only — zero code or content changes** (planning-class, project SO #17). Read-only.

## Objectives

1. **Scaffold + ground-truth model.** Confirm campaign dir; create the session file; reset the baseline ranker per Rosetta M35. Walk `aDNA.aDNA/` and build the current-state model of the standard: naming conventions, the WHO/WHAT/HOW triad, architecture (L0–L3; the real subsystems — **not** Dispatch/Store; note **`TaskForge.aDNA` is a real vault** and the standard's **Cmux ships as display-name "Terminal"**), governance/licensing posture, the honest partner roster, FAIR posture, the open/closed boundary, and every fact the site might assert. Seed from §Pre-Seeded Findings; verify, do not assume.
2. **Inventory every live campaign.** For each sibling campaign directory, extract: what it changed, what it superseded, what terminology it introduced or retired, and any in-flight standard change. Confirm STR E5/E6 current state.
3. **Author `RECONCILIATION.aDNA.md`.** The diff between *what the standard now is* and *what the site currently says* — every row: location (file/URL + element), the stale claim, the canonical truth, the disposition, **and an owner tag `website-owned` | `pt19-owned`** per §Coordination — pt19 data-layer. Start from §Pre-Seeded Findings (f) and extend to completeness.
4. **Crawl + inventory the site → `SITEMAP.aDNA.md`.** Every page, every image, every distinct component — the complete unit list, each unit getting its own A–K scorecard row (baseline empty, to be filled in P1).
5. **Capture the frozen baseline + assemble the benchmark set.** Per page, on **local current-HEAD AND live `adna.network`**: Lighthouse (all categories incl. **Agentic Browsing**), axe (both modes), full-page + viewport screenshot matrix; capture LCP/INP(TBT)/CLS/FCP/TTFB as numbers. Freeze as the "before" set in `site/evidence/`. Assemble the benchmark reference set with notes on what each does well and which axis it pressures.

## Method

- **Step A — automated measurement & capture (Bash / Playwright).** `npm run build` + preview local HEAD; reuse the existing `@audit` sweep harness and `capture.mjs`. Per in-scope route, local AND live: Lighthouse (perf/a11y/best-practices/SEO/**agentic**), axe WCAG-2.2-AA both modes, full-page + viewport screenshots across the matrix, DOM/headings/links/meta/OG/img-attrs, link-check (resolve all internal + external; log 404s/redirects). Bundle → `site/evidence/wadna_baseline_2026_06/` (gitignored).
- **Step B — graph walk (Standard Archivist lead).** Read-walk `aDNA.aDNA/` + every sibling campaign dir; build the ground-truth model; author `RECONCILIATION.aDNA.md`.
- **Step C — unit inventory.** From `src/pages` + `src/components` + `src/assets` + the build output, enumerate every unit → `SITEMAP.aDNA.md`. Flag the flagship units.
- **Step D — benchmark set.** Name the specific frontier + open-science references; one line each on strength + the aDNA axis it pressures.

## Pre-Seeded Findings *(reconnaissance 2026-06-17 — verify, then extend)*

**Site state:** ~41 routes, Astro SSG, deploys **directly** to `adna.network` from `aDNA.aDNA/site/` (no separate mirror). Design system fully tokenized (Tokyo Night, dark-first, ADR-032); fonts Space Grotesk / Inter / JetBrains Mono. Component split: `common/` · `sections/` · `islands/` · `diagrams/`. **Strong audit apparatus already present:** 10 Playwright gates (G4 dual-mode axe … G13), the `@audit` 37-route sweep, 377 evidence artifacts incl. ~50 Lighthouse runs. **Two tooling gaps to note for P2:** Lighthouse is archive-only (no gate — perf/SEO can regress silently); the `@audit` sweep is findings-only (not a regression gate).

**Flagship units:** `index` (landing) · `network` · `learn/what-is-adna` · `get-started` · `vaults` (+ `vaults/graph`) · `community` *(fourth-axis flagship, added 2026-06-17)*.

**Standard-currency hits already located** (full table → `RECONCILIATION.aDNA.md`):

| Hit | Location | Canonical truth / disposition |
|-----|----------|------------------------------|
| Stale org URL in JSON-LD | `site/src/utils/seo.ts` (~L48, L100) | `github.com/LatticeProtocol` → `aDNA-Network/aDNA` (crawler-visible) |
| Stale `social.github` | `site/branding.json` | `LatticeProtocol/Agentic-DNA` → `aDNA-Network/aDNA` |
| Retired "The Lattice" registry label | `Header.astro`, `vaults.json` title/H1 | → "Vaults" / "the registry" |
| Version drift v2.0/v2.1 | footers, comparison docs, specification.mdx | → unify to **v2.2** from one constant |
| Fabricated "federation §11" citation | open-standard.mdx, federation pages | spec §11 = "Coordination Protocol"; keep `lattice://` as convention, drop §11 attribution |
| Unsupported partners | any "trusted by" surface | **remove** Dell/NVIDIA/Mayo/Stanford/CZI (zero graph evidence); real affiliations = WGA, ContextCommons, WilhelmAI, RareArchive |
| Vault-count drift ("40") | trust strip | single-source from `vaults.json` |
| Internal codenames in vault meta (~37 pages) | `vaults/[slug]` `og:description` | add `public_summary`; scrub phase jargon |

**Canonical facts (must match):** aDNA = network/brand; Lattice Protocol = protocol substrate (keep `lattice://`; never "aDNA Protocol"). Repo = `aDNA-Network/aDNA`. Standard **v2.2** / governance v6.0 (two tracks). Triad what/how/who; 14 entity types. Tiers L0–L3. Honesty doctrine load-bearing (ADR-033). Local-first, opt-in P2P federation; SPDX FAIR blocks.

## Coordination — pt19 data-layer (Operation Production Tidy)

**Deconfliction posture (operator-selected at activation 2026-06-18): Honor pt19, sequence.** Operation Production Tidy (Home.aDNA, Hestia) is renaming/merging/archiving vaults toward an only-active-`<Name>.aDNA` root. It keeps `Home.aDNA/what/inventory/inventory_vaults.yaml` current as it goes (reflects merges/renames through pt11), but **explicitly defers every derived projection** — vault cards, curation, asset_registry, and (because `scripts/build_vaults_data.mjs` reads those cards) the site's `vaults.json` / `vaults_graph.mmd` / `network_edges.yaml` overlays — to a **single coordinated regen at pt19 (Tidy P7)**. Every inventory entry stamps *"Derived … → pt19."* The committed `site/src/data/vaults.json` is therefore **stale by design** right now.

**Therefore, in this campaign:**
1. **Two disposition classes in `RECONCILIATION.aDNA.md` (Objective 3).** Class **(i) website-owned** = currency the site authors and fixes in-campaign (`seo.ts`/`branding.json` repo URL, version → v2.2, fabricated §11 citation, partner-honesty removals, "The Lattice" label, `og:description` codename scrub, ADR-010 embargo recheck). Class **(ii) pt19-owned** = vault rename/merge/count/edge currency (SiteForge→Astro, TaskForge→Operations, the CanvasForge/LPWhitepaper/LatticeLabs merges, 40→keeper-set count, network edges, the hardcoded vault labels in `NetworkDiagram.astro`). **Flag class (ii); never hand-fix it; run no `sync:vaults`** — a partial sync now would mix current inventory names with still-stale card overlays, the exact split-state Tidy batches pt19 to avoid.
2. **Sequencing (Phase 3).** Data-coupled units — `/vaults`, `/network`, the *vault-name correctness* of `/vaults/graph` (its SSR-prerender / agentic-readability fix is data-independent and proceeds), the home `NetworkDiagram` — plus **axis-J vault-name verification** are sequenced to **after pt19 lands**. Everything else (nav fix, axis-K demonstration density, fabricated homepage code, canonical/www, `llms.txt`, brand/version currency) proceeds normally.
3. **Coordination, not entanglement.** A one-line note registers the site as a pt19 consumer (`who/coordination/coord_2026_06_18_wadna_pt19_dependency.md`); pt19 closeout pings the site refresh. The site *renders* the network; it does not author the rename (Standing Order 7).

## Benchmark Reference Set *(seed — finalize in Step D)*
Anthropic (research-citation-forward restraint → A, E, I) · Stripe (editorial type + density discipline → C, B) · Linear (motion-proves-speed → A, C) · Vercel (demonstrate-don't-claim hero → A, D) · NVIDIA (technical gravity → A, E) · a strong open-science site (e.g., a FAIR/data-commons portal → E, J).

## Exit Gate (P0 → P1)
- [ ] Step-A coverage complete: every in-scope route, **local AND live**, Lighthouse (all cats incl. Agentic Browsing) + axe (both modes) + screenshot matrix + link-check log. Coverage is Step-A, not a follow-up.
- [ ] Ground-truth model authored; verified against `adna_standard.md` (v2.2) + recent ADRs (032/033/034) + CHANGELOG.
- [ ] `RECONCILIATION.aDNA.md` authored — every row cites location + stale claim + canonical truth + disposition + owner tag (`website-owned` | `pt19-owned`); partner-honesty and embargo checks complete; no `vaults.json` edits / no `sync:vaults` run (pt19-owned currency flagged, not fixed).
- [ ] `SITEMAP.aDNA.md` authored — every page/image/component a scorecard row; flagships flagged.
- [ ] Frozen baseline bundled in `site/evidence/wadna_baseline_2026_06/`; benchmark set named.
- [ ] **Zero code/content changes** (planning-class).
- [ ] Operator reviews `RECONCILIATION.aDNA.md` dispositions + `SITEMAP.aDNA.md` unit list and approves (Decision 2). **(human gate)**

## Campaign Context
- **Previous mission outputs:** none (campaign opens here). Resolved baseline = `campaign_adna_network_audit/missions/artifacts/audit_adna_network_2026_06.md` (load; do not redo).
- **Next mission inputs:** P1 (`mission_wadna_p1_critique`) consumes `SITEMAP.aDNA.md` (units to score) + `RECONCILIATION.aDNA.md` (axis-J findings) + the frozen baseline + benchmark set.

## Completion Summary
*Fill out at mission close.*
- **Deliverables:** *(pending)* ground-truth model · `RECONCILIATION.aDNA.md` · `SITEMAP.aDNA.md` · frozen baseline bundle · benchmark set.
- **Descoped / Key Findings / Scope Changes:** *(pending)*

## AAR
*5-line AAR mandatory at mission close (`template_aar_lightweight.md`).*
- **Worked / Didn't / Finding / Change / Follow-up:** *(pending)*
