---
type: artifact
artifact_class: sweep_record
campaign: campaign_haussmann
title: "The docs-corpus claim sweep — what was read, what was not, and the six false positives"
created: 2026-09-12
updated: 2026-09-12
status: active
last_edited_by: agent_rosetta
executor_tier: opus
derived_by_session: session_stanley_20260912_050048_haussmann_docs_sweep
grounded_in:
  - "claim_register.md §26.4 — 'the docs corpus was NOT swept … 229 pages have not been read against this register'"
  - "226 rendered `.md` twins at dist/, built from HEAD d6ae1b6 + this sitting's repairs"
  - "72 source files under site/src/content/docs/ + the bespoke .astro docs routes"
tags: [artifact, haussmann, claim_register, docs_corpus, sweep, coverage]
---

# The docs-corpus claim sweep — coverage stated at its true width

> **This record exists so the sweep cannot be read as more complete than it is.** Convention 13's
> amendment: *a correct instrument applied partially, reporting like a complete one* is the defect.
> §27 carries the findings; this carries the **coverage**.

## 1 · Surface and predicate

| | |
|---|---|
| **Surface swept** | `site/dist/**/*.md` — the **226 rendered twins**, excluding `./changelog.md` |
| **Why twins, not HTML** | Convention 17's amendment: the surface must match the claim's own verb. Every claim here is *"a reader encounters X"* ⇒ rendered flattened text. MDX comments (where SO-6 strike-throughs live) do not render, which is what makes a zero-survivor control meaningful at all |
| **Build** | `npx astro build` (never `npm run build` — `prebuild` re-runs `scripts/build_vaults_data.mjs`, which re-stamps `generated_at` from the clock). **229 pages built**, the figure `R-175` pinned |
| **Corpus** | 72 source files: glossary 25 · concepts 13 · patterns 8 · use-cases 6 · comparisons 5 · workshops 4 · lattice-examples 4 · community 4 · publishing 3 |

## 2 · What was actually run — four classes, corpus-wide

| Class | Pattern basis | Defects |
|---|---|---|
| **1 · Self-negating route claims** | `R-171` — "not yet published", "no site pathway", "coming soon", "does not yet exist" | **0** |
| **2 · Derived counts stated as literals** | `R-172`/`R-173`/`R-175` — count + countable-noun, each verified against disk | **7** (all of §27) |
| **3 · Host identity** | `R-174` — `adna-docs*.vercel.app`, `adna.dev`, `lattice-protocol.com` | **0** |
| **4 · Dangling internal pointers** | `R-176` — "see X for the planned…", retired audience-segment routes | **0** |

⇒ **Classes 1, 3 and 4 are clean, and that is a real result**: the `R-171`…`R-177` repairs of 2026-09-11
held, and nothing of their shape survives elsewhere in the corpus.

## 3 · ⛔ What was NOT done

- **All 229 pages were NOT read page-by-page.** Four patterns were run corpus-wide. **A claim can be
  false without matching any of them** — every defect found is class 2, which is evidence the patterns
  work *and* evidence that a class-5 nobody has thought of would be invisible.
- **The `what/` and `who/` vault sources were not swept**, except where a repaired page had a
  counterpart (§4). `who/community/community_context_commons.md`'s *"55+ content files (… 22 patterns …)"*
  is named as a candidate — `CLAUDE.md` narrates **24** patterns — and deliberately not chased.
- **No gate was authored** (the rule, ruled five times). The count class *is* gate-able in principle since
  every figure is disk-derivable; an instrument at a sitting's tail is what conventions 15/16/17 forbid.
  Each repair instead carries its **predicate in a source comment**, so the next editor cannot
  "correct" it back without reading how it was derived.

## 4 · ⭐⭐ The structural finding: 29 pages have no propagation path

`site/scripts/transform-content.mjs` holds **8 mapping tables** (concepts · patterns · comparisons ·
use-cases · tutorials · reference · publishing · workshops). **`glossary` and `community` are not among
them.**

Those two sections are **29 published pages** that have a vault counterpart (`what/glossary/`,
`who/community/`) and **no generator between them**. Measured: four of the seven defects were **already
correct in the vault** — `glossary_ontology_extension.md` read 11, `glossary_template.md` 45,
`glossary_skill.md` 57, and `community_roles.md` literally read ***"10 (now 11)"*** — while the site
published 10, 41 and 50 for months.

⇒ ***§26.3 asked which of two trees to trust. This asks the prior question — whether anything connects
them — and for 29 pages the answer is nothing.*** The 8 mapped sections self-heal on a transform run;
these drift permanently in whichever direction someone last edited.

⛔ **Not remedied here.** Adding a mapping would regenerate 29 published pages from vault sources whose
prose was never written for publication — a content change far outside a sweep's scope. Named as a
successor item.

## 5 · ⚠ Six false positives of my own — a finding about the method, not about the pages

| # | Hit | Why it was wrong |
|---|---|---|
| 1–2 | `/adopters/` on `learn/concepts/ontology`, `patterns/base-extension` | Matched **`who/adopters/`**, the vault directory in an ontology table — not a route |
| 3 | `/compliance/` ×3 on the tour page | Matched **`what/compliance/`** in a suggested-ontology table inside a **byte-vendored** file |
| 4 | `adna.dev` on `/canonical-properties` | A deliberate *"Retired, and not us"* row with a dated check. **Second** time that page has nearly been filed |
| 5 | templates "48" | Naive directory count: `AGENTS.md` + two bundle dirs. `template_*.md` = **45**, and MANIFEST was right |
| 6 | Rosetta "9 phases" | Heading sweep counted `Phase 4.5` and a one-off *"Phase 8 seeding"* mention. `phase_count: 7` is the machine-checked field and was correct |

⇒ ***A route-shaped grep cannot tell a route from a vault path, and the docs corpus is the one surface
where nearly every such string IS a path*** — its subject matter is the directory ontology. O3's homonym
finding as a property of a **corpus** rather than of a term.

⇒ **§26.1 recorded that the register's SCOPE did not transfer to the docs corpus. This records that its
INSTRUMENTS do not either** — and the second is the more dangerous, because a pattern that worked
elsewhere carries borrowed credibility.

## 6 · Controls

| Control | Result |
|---|---|
| Zero-survivor, surface = `dist/**/*.md` minus `./changelog.md` | **0** for all 8 retired strings |
| **Positive control** (the repairs render) | `11 ontology extensions` 3 · `45 templates` 1 · `57 skills` 1 · `35 missions (M01-M35)` 1 · `reviewer` 6 |
| Source-surface control | **1 survivor each** — the SO-6 quotations inside MDX comments. Expected, and the reason the twin is the load-bearing surface |
| Gate suite | **698 passed / 1 skipped / 0 failed** — the standing baseline, no regression, no new assertions |
| `check:markup` | **0**, control-checked against a deliberately invalid file that exits 1 on `no-dup-id` |

⚠ **The positive control is not decoration.** A zero on the negative grep can mean *"the command
failed"* — this campaign has recorded that four times. The positive arm is what makes the zeros mean
*absent*.
