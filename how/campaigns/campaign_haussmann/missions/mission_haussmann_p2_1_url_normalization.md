---
plan_id: mission_haussmann_p2_1_url_normalization
type: plan
title: "P2.1 — URL normalization: one casing scheme, every URL ever published redirects"
campaign: campaign_haussmann
phase: P2
decade: 1
owner: stanley
status: completed   # 2026-08-18 — O0–O4 done; ADR-051 proposed; suite 444→450 zero xfail; NOT deployed (live cutover = separate ⛩)
mission_class: build
executor_tier: sonnet
token_budget_estimated: "~120–200 kT across 1–2 sessions: ADR-051 scheme + slug normalization + redirect map (incl. Wayback CDX historical sweep) + same-diff gate updates (ADR-016)"
token_budget_actual: "~135 kT (est. 120–200 kT). In band. The census + root-cause came cheap; the cost was the same-diff sweep, which found two silent-drop sites the mission did not anticipate."
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: [H6 (24/74 mixed-case; hard 404 no redirect), "machine_eye item 10", "inventory §6", "B3 broken links (stale snake_case scheme = prior migration left no redirects — the cautionary instance)"]
vitruvius_dimensions: [D2, D12, D10]
decade_theme: navigation
webforge_patterns: []
patterns_to_author: []
depends_on: []
blocks: [mission_haussmann_p3_1_md_twins]
acceptance_criteria:
  - "ADR-051 at proposed: lowercase-kebab slug law + the vault-slug derivation rule + redirect policy"
  - "All 74 vault URLs resolve at the canonical casing; every previously-published casing 301s (no hard 404s)"
  - "Redirect map covers: the 24 mixed-case slugs, the 2 named astro.config legacy redirects, the 11 stale snake_case/.md targets (B3), and every historical URL the Wayback CDX sweep surfaces"
  - "Sitemap/llms/canonical/OG all emit canonical URLs; gate/audit specs updated same-diff; wrong-casing probe added to the suite"
verification_method: "probe matrix (canonical 200 / variants 301 / no 404) + gates green + machine_eye §10 re-run"
human_gate: false
tags: [plan, haussmann, p2, urls, redirects]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The prior slug migration left 29 broken links because no redirects were laid — this one lays them all.

## Why this mission exists

Both URL shapes coexist in one registry; wrong casing is a hard 404 with no recovery (H6) — a permanent, compounding source of broken external links on a case-sensitive host `[D]`. The `/reference/*` link rot `[D B3]` is what the *last* un-redirected migration left behind; the instrument requires "a redirect map for every URL ever published" (D12.8).

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | ADR-051: the slug law (recommend lowercase + keep `.adna` suffix? or drop suffix — decide with evidence: collision census across 74) + redirect policy | ADR-051 proposed | — |
| O1 | Wayback CDX one-shot: every URL the Archive ever captured for adna.network (+ adna.dev) → historical redirect rows | cdx_map.json | — |
| O2 | Implement: slug derivation in the projection (coordinate with P1.3's touched code), vercel.json redirects (301s), config redirects consolidated | code + redirects | — |
| O3 | Same-diff: audit sweep routes, gate-20/21 fixtures, claim-trace manifest, sitemap/llms emissions; wrong-casing probe gate (red-tested) | gates green | — |
| O4 | Full probe matrix + machine_eye §10 re-run; AAR | evidence + AAR | — |

## Constraints

Redirects are additive infrastructure — never break a live URL without its 301 in the same deploy; same-diff law is the mission's spine; `vaults.json` data untouched (slug derivation is code).

## Definition of done

One casing scheme, zero hard-404 legacy URLs, a machine-predictable scheme documented in ADR-051, and a gate that keeps it true.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + `evidence/inventory/inventory_summary.md` §6 + `evidence/machine_eye/machine_eye.md` item 10. Execute O0–O4. Constraint: every URL change ships with its redirect + its gate update in the same commit.

## Progress

| O | State | Evidence |
|---|---|---|
| O0 | ✅ | ADR-051 completed (`what/decisions/adr_051_url_canonicalization_redirects.md`, **proposed**). Collision census across all 74: **both** candidate laws collision-free, so incumbency decided it — 50 of 74 already route drop-suffix. Root cause found: `card.vault_slug || slugOf(slug)` let a card beat the canonicalizer. |
| O1 | ✅ | Wayback CDX sweep, both hosts → `artifacts/p2_1/cdx_{adna.network,adna.dev}.json` + `cdx_paths.json`. **Zero project URLs**: all 47 captures belong to prior owners. Non-redirect ruling recorded in ADR-051 §3. |
| O2 | ✅ | `slugOf(card.vault_slug \|\| slug)` in the generator (×2 sites) + new read-side accessor `site/src/data/vaults.ts` (11 importers repointed). **`vaults.json` untouched** — a regen would have published 3 unregistered vaults, 2 of them local-only data-bearing. 31 redirect routes; `inject_redirects.mjs` wired into `deploy_adna.sh`. |
| O3 | ✅ | gate-30 (6 assertions, **red-proven ×3**). Same-diff: 4 gate specs + homepage slice + hero deep-links + NetworkDiagram lookups. Suite **444 → 450 green, zero xfail**. |
| O4 | ⚠ partial-by-nature | Probe matrix run; **canonical URLs 24/24 → 200**. Redirects are **not locally testable** — they exist only in `.vercel/output/config.json`, never in `dist/`; the control is that the pre-existing production redirect also 404s locally. Verified at config level + regex simulation. **Live probe owed at the deploy ⛩.** |

## AAR (SO#5)

**Worked.** Starting from the *data* rather than the finding. The evidence packet said "24 mixed-case
URLs"; five minutes in the generator said "a card override beats the canonicalizer," which is a
one-line fix rather than 24 data edits. Also: probing production before designing. The trailing-slash
404 was invisible from the source and would have shipped 24 redirects in the shape that does not fire.

**Didn't.** The same-diff sweep was under-scoped in the mission plan — it names gate specs and
fixtures, not *component-level slug lookups*. Two of those were silent-drop sites: a missed lookup was
`.filter(Boolean)`-ed away, so canonicalization would have removed 4 of 6 NetworkDiagram nodes and 6
of 8 homepage registry cards **with no error**. Only one had a gate. Also self-inflicted: a blanket
literal replace in HomeHero hit the display-label field as well as the slug field — caught by reading
the diff, not by a test.

**Finding.** *A silent-drop lookup is a same-diff hazard that no route grep will find.* The same-diff
law as written looks for hardcoded **routes**; these were hardcoded **keys**, which do not look like
URLs and do not appear in a `/vaults/` grep. The generalization: when an identifier scheme changes,
sweep the lookups keyed by that identifier, not just the strings that render it — and prefer a loud
throw over a filter for any curated list, because a curated list that silently shortens still renders.

**Change.** The homepage curated slice now throws on an unresolved name. `slot()` and the registry
slice both resolve through `canonicalVaultSlug` so they cannot desync from the routes again.

**Follow-up.** (1) The live probe matrix is owed at the deploy ⛩ — canonical 200 / legacy 301 / zero
404, run against the apex. (2) 6 B3 targets have no destination on this site → **P2.3** with the CI
link gate. (3) The 77-vs-74 registry drift is flagged to **P2.4** / Hestia's B7 pass — it is an
admission ruling, not a count bump. (4) `astro preview` not serving adapter redirects is worth a line
in the campaign's verification doctrine: config-level assertion is the only local instrument.
