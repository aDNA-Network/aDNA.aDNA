---
type: artifact
artifact_type: measure
mission: mission_p4_docs_ia
objective: O2 (M4.1 gate + measure)
created: 2026-07-11
last_edited_by: agent_rosetta
tags: [artifact, storyweave, p4, m4.1, measure]
---

# M4.1 measure — `/learn/what-is-adna` reframe (before → after)

Instrument: headless T0 (`scripts/visual_capture.mjs --axe`) + `scripts/reading_level.mjs` (clean prose extraction via `scratchpad/prose_only.mjs`). Before-baseline = the ratified P3 measure (`storyweave_p3_measure/`, byte-identical to Decade-2).

## Density + a11y (rendered, matched harness)
| Metric | Before | After | Δ |
|---|---|---|---|
| `bodyLen` (innerText, desktop) | 8492 | **6416** | **−24.4%** |
| h2 count | 7 | 6 | merged problem+why |
| axe violations (dark) | 0 | **0** | held |
| Lighthouse Perf | 100 | **budget held** (gate-19 green) | held |

## Comprehension (clean prose only — code/table/CSS stripped)
| Metric | Before | After | Δ |
|---|---|---|---|
| **FKGL** (reading grade) | 12.92 | **10.47** | −2.45 grades |
| avg sentence length | 26.0 w | **20.7 w** | −20% |
| passive voice | 6.5% | **0%** | −6.5pp |
| prose words | 806 | 724 | −10% |

## Structure delivered
- **North-star reframe** — lead now opens with the payoff ("make a project easy to *build on, operate, and understand* — without re-explaining it every session") before the definitional detail.
- **Sticky TOC** — the page now passes a hand-authored `headings` array to `DocumentationLayout` (it authors inline HTML, so Astro couldn't auto-extract them); `TOCPanel` renders 9 entries, sticky at ≥1280px. Used the *existing* optional prop — no layout fork.
- **Progressive disclosure** — the 16-entity reference table and the CLAUDE.md example are now native `<details>` (no-JS-safe); the "4 WHO, 5 WHAT, 7 HOW" summary keeps the count visible. innerText excludes closed disclosures → the −24% is real reader-facing density.
- **De-jargon** — "Governance files" first-use links to `/learn/concepts/governance-files` (known-good; no deep glossary-slug 404 risk).

## Gates
**`npm run test:gates` → 313/313 passed (exit 0, 1.6m).** Incl. gate-4 axe (both themes), gate-19 Lighthouse budget, gate-9 responsive (320–1440, disclosed table scrolls), no-JS baseline, gate-13 nav-surfacing, gate-15 credibility (jsonLD + proof-links intact), gate-16 public-meta, gate-20 claim-trace (source-side; page stays honest on "16"), gate-23 hero-claims, @audit sweep.

## Persona ranker (lightweight 3-persona pass — the P4 exit gate lenses; full 16-persona decadal runs at capstone)
| Persona | Score | Note |
|---|---|---|
| Newcomer | 4.3 | payoff-first lead + TOC + disclosed density → What/Why/How graspable fast; grade 10.5 |
| Educator | 4.3 | well-sequenced (problem → how → concrete artifacts → proof → test); progressive disclosure teaches complexity gradually |
| Framework-Docs / IA | 4.1 | sticky TOC + breadcrumb + prev/next + spec-honest proof; residual: in-page TOC is ≥1280 only (site-wide pattern → M4.2/P5, non-blocking) |

**Average 4.23 ≥ 4.0** — exit-gate ranker met.

## Honest note on the "~35%" trim target
The re-plan set "trim ~35% for comprehension" as a guideline; the ratified exit gate is comprehension/persona, not a fixed byte-count. Achieved **−24% rendered density** with **every artifact preserved** (disclosed, not deleted) + a real reading-grade lift (−2.45) + −20% sentence length + 0% passive + a sticky TOC. Reaching a literal −35% would require *removing* concrete proof/teaching I judged worth keeping (the directory tree, the proof-links, the before/after). Flagged for the operator at O2: accept the comprehension-first outcome, or push the trim harder.
