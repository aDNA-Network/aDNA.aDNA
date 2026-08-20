---
type: evidence
packet: visual_p2_6
campaign: campaign_haussmann
mission: mission_haussmann_p2_6_midscore
objective: O0
title: "Visual + surface findings — P2.6 evidence refresh (production, 2026-08-19)"
created: 2026-08-19
updated: 2026-08-19
status: active
last_edited_by: agent_rosetta
instrument: "scripts/visual_capture.mjs (T0 headless Playwright), viewports.json 6-viewport set, dark+light"
probe_target: https://adna.network
supersedes_scope_of: none
tags: [evidence, haussmann, p2_6, visual, d5, d11, d12]
---

# Visual + surface findings — P2.6 refresh

**Sweep**: 13 surfaces × 6 viewports × 2 themes = **156 captures**, all HTTP 200, in
`evidence/captures_p2_6/` with `capture_report.json`. This is an **addendum** to
`evidence/captures_curated/visual_findings.md` (F1–F18, genesis) — it does not supersede it. F-ids
continue from F18.

## What held (do-not-regress list, campaign CLAUDE.md)

- **axe = 0 in BOTH themes**, all 13 surfaces. `--axe` covers `themes[0]` only, so this is two runs:
  dark (the 156-capture sweep) and light (a second desktop pass). `[D]`
- All 13 surfaces HTTP 200; zero non-200; zero broken captures. `[D]`
- Dark/light parity holds across the full viewport ladder. `[D]`

## F19 — the spec split traded a 74,067 px page for a fourth thin hub (S3, D2/D4)

P2.3 paginated `/reference/specification` from a single ~74,067 px default-URL page into a hub plus
20 sections. That is a **large, real win**: the hub now measures **fullH 2,104 px** `[D]`.

But the hub it produced is **thinner than two of the three hubs F13 already flagged**:

| Hub | h2 | bodyLen (2026-08-19) | F13 baseline (2026-08-16) | Δ |
|---|---|---|---|---|
| `/reference/specification` | **0** | **1,504** | *(did not exist as a hub)* | **new** |
| `/how` | 0 | 1,149 | 1,120 | +29 |
| `/patterns` | 0 | 2,007 | 1,978 | +29 |
| `/use-cases` | 1 | 2,030 | 2,018 | +12 |

**F13 is unresolved, and its instance count went 3 → 4.** The +29 / +29 / +12 deltas are consistent
with P2.3's date-and-edit-link addition (113 pages received it), not with added content — so P2.2's
IA consolidation did **not** thicken `/use-cases`, which was one of its own surfaces. `[D]` `[I]` on
the attribution of the +29.

A hub with **zero h2** is also a machine-legibility item, not only a craft one: there is no
sub-structure for an outline extractor to find. Counter-example on the same site: `/reference` (h2=5,
2,889) and `/glossary` (h2=4, 3,671) do the same job with structure. `[D]`

**Routing**: F13 is already scoped to P4.2 (*"thin hubs (F13) brought to budget or merged"*). The
re-plan should carry the corrected instance count and note that one instance was **created by
Decade-1 work**, which is the kind of thing a mid-campaign measure exists to catch.

## F20 — a font face fails to load on every page, and no gate can see it (S3, D5/D12)

`document.fonts` reports **`JetBrains Mono Variable: error`** on production, with a matching console
**`error`** (not a warning) on **all 13 surfaces** `[D]`. Two other JetBrains Mono faces report
`loaded`, and the family is declared `font-display: optional` (`site/src/styles/tokens.css:120–126`),
so the visible impact is a silent fallback rather than a FOUT or reflow — **no visual regression is
claimed here, and none was observed in 156 captures**.

What is claimed is narrower and checkable: one declared `@font-face` never loads, and it emits a
console error on every page view.

- Declaration: `tokens.css:120–126`, `src: url('@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2') format('woff2-variations')` `[D]`
- **Hypothesis, not conclusion**: `format('woff2-variations')` is the legacy format token; current
  Chromium expects `format('woff2')` (or `format('woff2' supports variations)`) and may reject the
  face on that string. **`[I]` — untested.** Confirming it needs a build + deploy, which this
  planning mission does not do. Recorded as a hypothesis so the next mission tests rather than
  assumes it.

**The finding underneath the finding**: a console error has shipped on every page of this site
through Gate B, P1, and P2.1–P2.5 — **487 gate assertions across 33 spec files, and none of them
watches the console.** `grep -rn "page.on('console'" site/tests/gates/` returns nothing `[D]`. That
is a gate-coverage gap, not a one-off bug, and it is the more valuable half of F20.

**Routing**: the fix to P4.2 (craft floor); the **zero-console-error gate** to P4.4 (CI hardening),
where it belongs with the other whole-site watches.

## Metrics table — the 13 refreshed surfaces

| Surface | h2 | bodyLen | fullH (desktop) | axe (dark) | axe (light) |
|---|---|---|---|---|---|
| `/` | 5 | 7,443 | 6,823 | 0 | 0 |
| `/get-started/` | 7 | 8,723 | 6,141 | 0 | 0 |
| `/get-started/what-your-agent-reads/` | 3 | 5,770 | 4,608 | 0 | 0 |
| `/network/` | 5 | 4,613 | 5,545 | 0 | 0 |
| `/community/` | 5 | 4,158 | 3,309 | 0 | 0 |
| `/commons/` | 4 | 5,856 | 5,184 | 0 | 0 |
| `/about/` | 5 | 4,598 | 4,375 | 0 | 0 |
| `/learn/what-is-adna/` | 6 | 6,422 | 4,390 | 0 | 0 |
| `/vaults/` | 4 | 12,770 | 7,268 | 0 | 0 |
| `/use-cases/` | 1 | 2,030 | 1,638 | 0 | 0 |
| `/reference/specification/` | **0** | **1,504** | 2,104 | 0 | 0 |
| `/changelog/` | 16 | 8,202 | 6,167 | 0 | 0 |
| `/state-of-the-network/` | 6 | 7,470 | 4,813 | 0 | 0 |

Raw: `capture_report.json` in this directory. All rows `[D]`.
