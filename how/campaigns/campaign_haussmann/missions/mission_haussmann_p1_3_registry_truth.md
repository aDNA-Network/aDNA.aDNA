---
plan_id: mission_haussmann_p1_3_registry_truth
type: plan
title: "P1.3 — Registry truth: fix the projection at the generator; the shop window stops contradicting the product"
campaign: campaign_haussmann
phase: P1
decade: 1
owner: stanley
status: completed   # 2026-08-16 P1-wave: ALL objectives O0–O4 in one session. Leak baseline RETIRED (86 rows→0, hard gate, red-proven); DP4 ruled minimal-card ×3 (ADR-052 §admission); regen operator-GO'd (counts hold 74/14); graph currency 68→74; Hestia memo staged (delivery at close GO). Commits c61a544 + df0b30b.
mission_class: build
executor_tier: opus
token_budget_estimated: "~200–300 kT across 2 sessions: projection-code fixes (leak classes, honest-absent, persona nulls, title bug) + graph data currency + Hestia data-ask memo + confidential-vault ruling prep (ADR-016)"
token_budget_actual: "≈90 kT / 1 session (fable) — under estimate: the baseline profile pinpointed loci fast, and the sanitizer-v2 + label-util pattern cleared whole classes at once. +1 unplanned find: the gate suite was silently testing a foreign port-4321 server (fixed fail-loud in-lane)."
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["H13 (58/74 leak; root cause tagline/card gap)", "H4", "claims #6/#8 rows", "visual_findings F4/F7/F8/F10/F15 (graph counts; leaks; blanks; malformed Astro.aDNA title)", "Hestia 08-06 memo (0/27 taglines; 46/74 no card)", "N8 (confidential-adjacent vaults public)"]
vitruvius_dimensions: [D6, D7, D2]
decade_theme: credibility
webforge_patterns: [P8]
patterns_to_author: []
depends_on: [mission_haussmann_p0_5_editorial_gate]
blocks: [mission_haussmann_p2_4_registry_redesign]
acceptance_criteria:
  - "Projection code renders zero H13-class leaks (editorial-gate leak lint green over all 74 pages): truncation fixed (no mid-parenthesis ledes), raw enums mapped to public labels (tbd_at_p0 → honest 'category to be decided at genesis' treatment), machine identifiers suppressed"
  - "Missing data renders honest-absent affordances (WebForge data-honesty law) — never blank cards, never fabricated copy"
  - "Persona nulls: public treatment decided + implemented (clears FALSE #6/#7 at the data layer); malformed 'Astro — — —' title fixed"
  - "/vaults/graph data currency: renders all 74; the 74/68/59/53 count collisions eliminated (single derived source); LCP measured against the class bar"
  - "Data-side asks (taglines/cards backfill; Videos repo URL) staged to Hestia — honor pt19, no local data edits"
  - "⛩ DP4: the confidential-adjacent-vault listing (aiLP-Dataroom, CakeHealth, PercySleep) gets an operator projection ruling, implemented (ADR-052 §admission seed)"
verification_method: "editorial-gate leak lint over 74 pages + graph re-capture + count-derivation test + gate-20/21 same-diff updates"
human_gate: true
tags: [plan, haussmann, p1, registry, projection]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> One generator fix clears 58 leaking pages and two FALSE claims; one operator ruling settles what
> belongs in public at all.

## Why this mission exists

The registry is 78 of 202 URLs and its copy is, by default, unedited internal prose `[D claims H13 annex]`: truncated ledes render on the homepage itself; `tbd_at_p0` renders raw; the Home card exposes the operator's machine; blank cards (zeta) ship. The graph page renders 68 of 74 with four conflicting counts `[D F4]`. Root cause is structural — the projection falls back to inventory `note` fields because 0/27 cards carry `tagline` and ~46/74 vaults lack cards `[R Hestia]` — so the fix is at `scripts/build_vaults_data.mjs` + the page templates, with the *data* backfill staged to Hestia (pt19).

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Map every leak class to its code locus (projection vs template vs data); write the fix design | design note | — |
| O1 | Projection/template fixes: lede derivation (no truncation-by-slice), enum→public-label map, identifier suppression, honest-absent affordances, persona-null treatment, title fix | code + leak lint green | — |
| O2 | Graph currency: single derived count source; 74 rendered; regenerate `vaults_graph.svg` via `sync:graph`; same-diff fixture updates | graph fixed | — |
| O3 | ⛩ DP4 prep + ruling: options for the confidential-adjacent listings (remove / listed-with-minimal-card / listed-with-disclosure); implement the ruling | ADR-052 §admission seed | ⛩ operator |
| O4 | Stage the Hestia data-ask memo (taglines, cards, Videos URL — joins the staged thread); verify + AAR | memo + AAR | — |

## Constraints

Honor pt19 absolutely (code yes, `vaults.json` data no — regen via the owner); same-diff law for every count-bearing fixture; honest-absent, never fabricate; the leak lint (P0.5) is the referee.

## Definition of done

All 74 pages pass the leak lint with honest-absent styling where data is missing; the graph tells one true number; the operator has ruled on the confidential listings; the data debt has a named owner.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + `evidence/claims/claim_register.md` H13 annex + `scripts/build_vaults_data.mjs`. Execute O0–O2, halt at O3 for the DP4 ruling, then O4. Constraint: no edits to vaults.json data — code + staged asks only.

## Progress

- **2026-08-16 (P1 wave, single session).** O0 `artifacts/p1_3/design_note.md` — baseline profiled (86
  rows / 563 occ / 57 files) and every class mapped to its locus; the marquee find: gate-27 scans raw
  HTML, so raw enums in *attributes* (`data-class`, ids, CSS hooks) were ~40% of raw_enum. O1
  `c61a544` — `publicNote()` v2 (sentence-granular, **fed by the same leak_patterns.json gate-27
  enforces** — projection can never emit what the gate forbids), persona placeholders → null (F15
  title fixed), shared `vaultLabels.ts` (label/slug/status/persona), honest-absent cards,
  RegistryCard word-boundary truncation. **Unplanned find:** the suite silently adopted a foreign
  port-4321 server (ScienceStanley dev) via `reuseExistingServer: true` — 304 bogus failures against
  a stranger's site; fixed fail-loud + `GATE_PORT` (convention-6 class, now structural). O3 ⛩ **DP4
  RULED** (operator): minimal card ×3, suppression at the generator (`listing: "minimal"`), ADR-052
  §admission seeded; **regen GO** granted in the same gate (pt19 exception, diff verified
  sanitization-only: 55 notes, 28→null, 7 personas, ZERO other fields). O2 regen + `sync:graph` —
  svg 68-era→74; counts consistent sitewide (74/14/59; no stale 68). O4 `df0b30b` — **baseline
  RETIRED**: 0 findings, empty-state promoted to a hard gate (red-proven by injection), 2 content
  stragglers fixed at source (pre-truncated frontmatter description; unresolvable F-CHM id in public
  copy); Hestia backfill memo staged (`coord_2026_08_16_rosetta_to_hestia_registry_data_backfill_ask`).
  Suite **404 green, 9 xf** (all P1.1 claim rows).

## AAR (SO#5)

- **Worked.** Feeding the *enforcement* patterns into the *generator* (single source of truth) turned
  "fix 58 pages" into one function: the projection now cannot emit what the gate lints. Sentence-level
  drop (never slice) killed the whole truncated-lede class in one move.
- **Didn't.** First full-suite run burned ~7 min against a foreign server before the og:image domain
  gave it away — the suite trusted port 4321 blindly; and 2 of the 86 baseline rows were content
  defects no projection fix could reach (source-copy edits, arguably P1.1's lane, taken here to
  retire the baseline whole).
- **Finding.** The honest cost of sanitization is sparseness: 29/74 vaults now have NO public
  description. Honest-absent is correct, but the registry's richness now depends on Hestia's tagline
  backfill — the data debt has a face.
- **Change.** `reuseExistingServer: false` + `GATE_PORT` makes port contention fail-loud forever;
  the empty leak baseline is now a ratchet that can't silently re-grow.
- **Follow-up.** Hestia memo delivery (close GO) · P1.1 clears the 9 claim xf rows · P2.4 builds the
  tier model on ADR-052 · WebForge upstream candidate: the "generator consumes the lint's own
  patterns" pattern + the foreign-server fail-loud config.
