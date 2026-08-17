---
plan_id: mission_haussmann_p2_1_url_normalization
type: plan
title: "P2.1 — URL normalization: one casing scheme, every URL ever published redirects"
campaign: campaign_haussmann
phase: P2
decade: 1
owner: stanley
status: queued
mission_class: build
executor_tier: sonnet
token_budget_estimated: "~120–200 kT across 1–2 sessions: ADR-051 scheme + slug normalization + redirect map (incl. Wayback CDX historical sweep) + same-diff gate updates (ADR-016)"
token_budget_actual:
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

*(at execution)*

## AAR (SO#5)

*(before completed)*
