---
plan_id: mission_haussmann_p2_3_docs_freshness
type: plan
title: "P2.3 — Docs freshness & integrity: dated pages, paginated spec, zero broken links, a live changelog"
campaign: campaign_haussmann
phase: P2
decade: 1
owner: stanley
status: completed
mission_class: build
executor_tier: sonnet
token_budget_estimated: "~180–280 kT across 2 sessions: link fixes + link gate + spec pagination + freshness layer + changelog/RSS revival + glossary previews (ADR-016)"
token_budget_actual: "~250 kT (est. 180–280 kT across 2 sessions). All five objectives landed in ONE session; the estimate held because the two expensive unknowns — the spec split design and the CI failure — were resolved by measurement rather than by iteration."
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["B3 #1 (29 broken links)", "N4 (changelog/RSS dead since April)", "F6 (spec 124K px mobile)", "F11 (glossary degenerate previews)", "D4 scoring (freshness layer absent; no edit-this-page)", "toolkit verdicts (lychee adopt)"]
vitruvius_dimensions: [D4, D12, D2]
decade_theme: navigation
webforge_patterns: [P7]
patterns_to_author: []
depends_on: []
blocks: []
acceptance_criteria:
  - "Zero internal 404s, enforced: all 29 broken links fixed + an internal link gate in CI (blocking) + scheduled external check (non-blocking)"
  - "/reference/specification paginated into navigable sections (prev/next; anchor-stable; redirects for old fragments where feasible)"
  - "Per-page freshness: last-updated visible on doc pages; 'edit this page' path on every doc page"
  - "Changelog revived with a real cadence (entries for the shipped waves; RSS carries them) — dated, reverse-chron, its own URL"
  - "Glossary preview derivation fixed (no 'AGENTS.md — AGENTS.' degenerates)"
verification_method: "link gate green (red-tested) + T0 spec captures + RSS validity + D4 anchor re-check"
human_gate: false
tags: [plan, haussmann, p2, docs, freshness, links]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> "Undated pages" is the instrument's named documentation failure — and the changelog contradicts the
> living site.

## Why this mission exists

29 internal links 404 (stale pre-migration scheme, concentrated in the reference corpus — the most-read class) `[D B3]`; the changelog's single April entry + stale RSS read as project abandonment to the exact contributor audience the site courts `[D-syn]`; the spec is one 124K-px mobile page `[D F6]`; no page carries a date or an edit path `[D D4 scoring]`.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Fix the 29 targets (redirect or re-link per P2.1's map); add the internal link gate (lychee or linkinator, blocking; red-tested) + scheduled external pass | links green + gate | — |
| O1 | Spec pagination: section splits + prev/next + stable anchors (+ fragment redirects) | paginated spec | — |
| O2 | Freshness layer: last-updated (from content collection/git data) + edit-this-page on doc templates | layer live | — |
| O3 | Changelog/RSS revival: backfill entries for shipped work (true dates only — the register governs); wire a cadence rule into the campaign's deploy runbook | changelog live | — |
| O4 | Glossary preview fix; T0 re-captures; AAR | evidence + AAR | — |

## Constraints

Backfilled changelog entries must be register-true (no retroactive embellishment); same-diff for route-coupled specs; pagination preserves deep-link equity (redirects).

## Definition of done

D4's anchor-4 blockers (freshness, edit-path, link rot) are cleared; the reference corpus is navigable on a phone; the project visibly breathes.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + `evidence/sweep/sweep_summary.md` (#5) + P2.1's redirect map. Execute O0–O4. Constraint: changelog backfill uses only register-verifiable dates/facts.

## Progress

**Single session — 2026-08-18** (`session_stanley_20260818_212246_haussmann_p2_2_deploy_p2_3_docs`).
All five objectives complete. Preceded in the same session by the P2.2 deploy ⛩.

| Obj | State | Evidence |
|---|---|---|
| O0 | ✅ | 26 stale link targets rewritten across 5 files; **gate-31** (3 assertions, red-proven); `scripts/check_external_links.mjs` + `.github/workflows/external-links.yml` (scheduled, non-blocking) |
| O1 | ✅ | Hub + 20 section pages + full text; `scripts/split_specification.mjs`; **gate-32** (4 assertions, red-proven); default URL 74,067 → **2,244 px** at 375px |
| O2 | ✅ | `src/utils/contentSource.ts`; one additive optional layout prop; **113 pages** carry a date + edit link; **gate-33** (4 assertions, red-proven) |
| O3 | ✅ | 3 register-true changelog entries, RSS 1 → **4 items**, valid XML; cadence rule in `deploy_adna.sh` |
| O4 | ✅ | F11 fixed (0 degenerate previews); **gate-34** (3 assertions, red-proven); 36 T0 captures; axe **0** across 8 surfaces × 2 themes |

**Acceptance criteria — all five met.** Zero internal 404s enforced by a blocking gate · spec
paginated with prev/next and anchor forwarding · per-page last-updated + edit path · changelog
revived with a cadence rule · glossary previews fixed. Suite **446 → 460**, zero xfail.

### The finding that was not in the mission spec

**CI had been red for three consecutive runs and nobody had noticed.** `gate-30` asserts the
redirect widening, but the widening is performed by `inject_redirects.mjs`, which runs **only
inside `deploy_adna.sh`**. CI ran `astro build` → `test:gates` with no injection step, so gate-30
failed on `b9d510a`, `356b33b` and `301daef` — every run from P2.1's redirect work onward — while
the same suite passed locally, because local sessions had deployed first and left an injected
`config.json` on disk. `gates.yml` now assembles the real deploy artifact before testing; proven by
reproducing the CI sequence from a clean tree.

This is the standing-watch the WEBSITE campaign established, and it was measuring nothing for two
days. It was found only because O0's work happened to require a full-suite run and a look at run
history — not because anything reported it.

### A regression this mission introduced, and how it was caught

The section pages render the section title as `<h1>` while the body's first heading was `<h3>` —
all 20 skipped a level (axe `heading-order`, moderate, both themes). Fixed by promoting body
headings one level in the splitter, **skipping fenced blocks** so §8's SITREP template is not
silently rewritten.

It was nearly missed. The first read of the capture report looked for a `violations` key, found
none, summed nothing, and printed `axe violations: 0`. The key is `axeViolations`.

## AAR (SO#5)

**Worked** — Red-proving every new assertion, without exception. Fourteen new assertions across
four gates, every one made to fail before being trusted. Two of them caught real defects within
minutes of being written: gate-31 caught the O0 anchor fix pointing at a page that no longer had
that id, and gate-32 caught a stale spec split during recovery from a mistake. A gate that has
never been observed failing is a decoration.

**Didn't** — Running `node -e "import('./transform-content.mjs')"` to check the file parsed.
Importing a script *executes* it: it regenerated 37 content files from the vault, overwriting
committed work mid-mission. Recovered fully (`git checkout HEAD --`, one intentional change
re-applied, verified by diff), but it cost a full rebuild-and-verify cycle. The syntax check for an
ESM file is `node --check`, never an import.

**Finding** — *The verification instrument is as likely to be wrong as the thing it verifies, and a
red result deserves the same scrutiny as a green one.* Four instances this session: the deploy
probe reported 58 failures that were all its own regex-escape bug; the O0 source scan flagged two
`[label](url)` strings that were code-span prose; the freshness measurement counted a
`updated: YYYY-MM-DD` template line inside the spec's own §7 as real frontmatter; and the axe
parser read a key that did not exist and printed a clean zero over a real violation. Only the last
would have shipped a defect. The campaign already knew this class from P2.1 and P2.2 — it recurs
because every new instrument is written in a hurry, at the end, when the work feels done.

**Change** — Two structural, both landed: CI now builds the artifact it tests rather than a
lookalike, and every derivation that could come out empty throws instead of reporting green
(`split_specification.mjs`, `check_external_links.mjs`, `gate-31`, `gate-33`, the deploy probe).

**Follow-up** — (1) **13 mixed-case vault links are still emitted** from `commons.astro:196` via
`subnetworks.json`; gate-31 classifies them as redirect hops and prints them rather than failing —
P2.4's lane, and the 77-vs-74 registry admission ruling belongs with it. (2) The doc-collection
files under `src/content/docs/` have **drifted from `transform-content.mjs`** — running it produces
a large diff, which means the transform is no longer authoritative for content that was hand-edited
after projection. Worth an explicit ruling: either the transform is retired for those collections,
or the drift is reconciled. Discovered the hard way. (3) Anchor forwarding on the spec hub is
JS-only by necessity (fragments never reach the server); the no-JS path lands on a complete table
of contents, which is honest but worth a look at P2.6.
