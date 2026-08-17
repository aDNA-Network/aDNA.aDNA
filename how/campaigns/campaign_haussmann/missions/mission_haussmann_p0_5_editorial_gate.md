---
plan_id: mission_haussmann_p0_5_editorial_gate
type: plan
title: "P0.5 — The editorial gate: no internal artifact reaches public copy unreviewed, and no claim outruns its evidence"
campaign: campaign_haussmann
phase: P0
decade: 1
owner: stanley
status: active     # P0 wave opened 2026-08-16 (session haussmann_p0_wave; operator-ordered)
mission_class: build
executor_tier: opus
token_budget_estimated: "~150–250 kT across 1–2 sessions: gate-16 extension design + claim-register-as-fixture wiring + tense/leak lint + red-tests (ADR-016)"
token_budget_actual: "~135 kT, single session (2026-08-16) — inside the estimated band; no ADR-016 retrospective triggered"
created: 2026-08-16
updated: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["claims/claim_register.md (8 FALSE, 19 unsupported, H13 annex 58/74)", "gate-16 public-meta sanitizer (proto)", "gate-20 claim-trace (proto)", "dev-comments-in-HTML finding"]
vitruvius_dimensions: [D6, D7]
decade_theme: credibility
webforge_patterns: [P2]
patterns_to_author: []
depends_on: []
blocks: [mission_haussmann_p1_1_claim_purge, mission_haussmann_p1_3_registry_truth]
acceptance_criteria:
  - "The claim register is a living CI fixture: every register row with class FALSE fails the suite; new high-signal claims require a register row (extends gate-20)"
  - "A leak lint covers the H13 classes (codenames, campaign/mission ids, truncated ledes, raw enums, operator-machine identifiers) across rendered output INCLUDING the registry pages + llms surfaces (extends gate-16 beyond meta)"
  - "An aspirational-tense checklist exists for review use (mechanical lint only where reliable; no false-positive theater)"
  - "Dev comments stripped from shipped HTML (or an explicit keep-decision recorded)"
  - "Every new check red-tested (a green that cannot go red is not evidence)"
verification_method: "red-tests per check + full suite green on current tree EXCEPT the known-FALSE rows (which must fail until P1.1 fixes them — prove the gate catches today's defects)"
human_gate: false
tags: [plan, haussmann, p0, editorial_gate, claims]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The structural fix behind H13: public surfaces are generated from internal artifacts without a gate.

## Why this mission exists

78% of registry pages leak internal operational language; 8 FALSE claims shipped; the compliance page carries a false control claim `[D claims]`. The proto-machinery exists (gate-16 sanitizes meta only; gate-20 traces a hand-picked claim set) — this mission generalizes both into an **editorial gate** so P1's purge cannot regress. Order matters: the gate lands *before* the purge so the purge is verified by it.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Design note: which checks are mechanical (lint-able) vs review-checklist; inventory the leak classes from the H13 annex | design note | — |
| O1 | Claim-register fixture: machine-readable register (from `claims_raw.json`) + gate asserting zero-FALSE + coverage rule for new claims | gate + fixture | — |
| O2 | Leak lint over rendered `dist/` (+ llms endpoints): codename/id/enum/truncation/machine-identifier classes; allowlist discipline w/ dated entries | gate | — |
| O3 | Dev-comment strip (Astro compress/config or post-build) + tense checklist doc | change + doc | — |
| O4 | Red-test everything; run against current tree — the FALSE rows must FAIL (that's the proof); mark them xfail-until-P1.1 with expiry | red-test evidence + AAR | — |

## Constraints

Same-diff law (route-coupled fixtures); no literal-pinned live data (derive from build snapshot); the gate's failure messages must name the register row (actionability); do not fix the copy here (P1.1's lane) — only detect.

## Definition of done

The suite catches today's 8 FALSE claims and the H13 leak classes on its own, red-tests prove each check can fail, and P1.1 has a machine referee.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + `evidence/claims/claim_register.md` + `site/tests/gates/gate-16*.ts`/`gate-20*.ts`. Execute O0–O4. Constraint: detection only — no copy fixes; every check red-tested.

## Progress

**2026-08-16 — O0–O4 executed (single session, `executor_tier: opus`).** Charter ratification re-verified on
disk before execution (charter `status: active`, §7.7 block `accepted`, Gate C 2026-08-16) per the campaign
CLAUDE.md activation gate.

- **O0 — design note** → `artifacts/p0_5/design_note.md`. Mechanical-vs-review split stated with the
  criterion made explicit (*a check earns mechanization only when a false positive is cheap*), the full H13
  leak-class inventory mapped class-by-class to the pattern that now covers it, the expected-failure
  mechanism specified, and five known limits recorded rather than hidden.
- **O1 — claim register as CI fixture** → `fixtures/claim_register.json` + `gate-26-claim-register.spec.ts`.
  **21 rows: 9 FALSE** (the 8 register rows + `R-23b`, the `/vaults` twin of R-23 — the two surfaces carry
  different wording and are edited independently) **+ 12 verified**. FALSE rows assert ABSENCE and carry
  `expected_fail_until: P1.1` with `test.fail()`; verified rows assert PRESENCE (currency). Schema rule
  enforced: `class: FALSE` without `expected_fail_until` fails the suite. Every quote verified against the
  build snapshot; verified quotes trimmed of counts (convention 8 — no live-data pinning). No overlap with
  gate-20: that traces claims to *source files*, this asserts the *rendered page*.
- **O2 — leak lint** → `gate-27-leak-lint.spec.ts` + three fixtures + `scripts/gen_leak_baseline.mjs`.
  8 pattern classes over all 203 built pages + `llms.txt`/`llms-full.txt`. **Baseline: 86 rows / 563
  occurrences / 57 files**, dated, `expires: P1.3`. Ratchet fails on a new (file,pattern) pair, a count above
  the recorded ceiling, **or a token never seen on that surface**. Baseline and allowlist deliberately kept
  as *separate files with different jobs* — debt that expires vs. permanent reviewed exception.
- **O3 — dev-comment strip** → `adna-strip-html-comments` integration in `site/astro.config.mjs` +
  `gate-28-no-dev-comments.spec.ts`; plus `artifacts/p0_5/tense_review_checklist.md`.
  **5,748 comments removed from 203/203 pages** every build. Safety proved before adoption: 203/203 pages'
  visible-text hashes **unchanged**, all 12 mermaid `data-chart` attributes intact, 0 comments inside
  script/style/pre. Strip covers `.vercel/output/static` too — the artifact `vercel --prebuilt --prod`
  actually deploys.
- **O4 — red-tests + full run** → `artifacts/p0_5/red_tests.md`. **Four proven fails** (verified-row
  vanish · unexpected-pass ratchet · new leak · injected comment), each with verbatim output; all injections
  restored and residue re-verified zero. **Full suite: 404 passed, exit 0** — 394 ✓, **10 expected failures**
  (9 gate-26 FALSE → P1.1; 1 gate-27 baseline-empty → P1.3), **0 real failures**. Gate count 371 → 404.

**Scope discipline**: detection only. No page copy touched, `vaults.json` untouched (pt19 honored), the only
site change is the `astro.config.mjs` integration. Not committed — left staged for the orchestrator.

**Handoff to P1.1**: the 9 FALSE rows are the work list; fixing each flips its test to an unexpected pass and
turns the suite red until the row is deleted from `fixtures/claim_register.json`. **Handoff to P1.3**: run
`node scripts/gen_leak_baseline.mjs --check` to watch the 86 rows fall; 64 of them are `vaults/**` registry
projection, fixable at the generator rather than page-by-page.

## AAR (SO#5) — DRAFT (orchestrator closes)

**Worked.** The expected-failure mechanism (`test.fail()`) resolved the mission's central tension exactly:
the suite simultaneously *proves* it catches today's 8 FALSE claims and *stays green* so P1 is not run
against a permanently red board — and it cannot be outlived, because fixing the copy turns the suite red
until the fixture row is removed. Separating **baseline (dated debt, expires P1.3)** from **allowlist
(permanent reviewed exception, token-scoped)** kept the "baseline is empty" goal actually achievable; had the
legitimate self-reference pedagogy been baselined instead of allowlisted, P1.3 could never have emptied it
and the ratchet would have seized. Implementing the comment strip *before* generating the leak baseline meant
the baseline measures what actually ships, not comment noise.

**Didn't.** Two false-pass bugs in my own gate — the worst possible failure mode, a launch-blocking claim
reported clean. (1) The entity decoder handled `&quot;`/`&amp;` but not `&ldquo;`/`&mdash;`, so R-61's FALSE
claim on `/about` read as ABSENT. (2) The tripwire added to prevent recurrence then over-reached, flagging
`m` from minified JS (`u=h&&m;`). Both were caught only because `test.fail()` converts a false pass into a
loud failure. The first truncation regex also missed the `(.`-shaped class entirely (`\(\w` requires a word
character the real defect does not have) — found only by diffing candidate regexes against the real tree
rather than trusting the drafted one.

**Finding.** The H13 leak set is cleanly **bimodal**, and that split is the actionable result: **64 of 86
baseline rows are `vaults/**`** — generated registry projection, fixable once at the generator — while every
`internal_id` hit on hand-authored `/learn`, `/patterns`, `/glossary` surfaces turned out to be *legitimate
Standing-Order-8 self-reference* (teaching the triad by citing `campaign_rosetta`) or published lattice node
ids. A gate that had not made that distinction would have been muted within a week. Also newly surfaced, not
in the H13 annex: **5,748 dev comments across 203/203 pages** (the widest-blast-radius class of all) and
operator-machine identifiers (`Mac/stanley`, `daily-driver`) on the homepage.

**Change.** A detection gate needs its own detection test. Both instruments now self-test: each leak pattern
carries an `example` (must match) and a `counter_example` (must not match) — every counter_example is a real
string an earlier draft mis-flagged, so the tuning decisions are executable rather than remembered — and
gate-26 carries an entity tripwire that fails if the build emits an entity the decoder does not know. Propose
generalizing to the campaign: **any new detection gate ships with a matching negative fixture.**

**Follow-up.** (1) P1.1 owns the 9 FALSE rows. (2) P1.3 owns the 86-row baseline, generator-first.
(3) `internal_ops_jargon` (`federation_ref`, `Data-bearing`) and `rename_provenance` are deliberately
un-linted judgment classes → P4.5 voice lane. (4) The tense checklist is review-only by design and wants a
reviewer pass at P1.1 and P2.6. (5) Candidate upstream contribution: the baseline-vs-allowlist split with a
`test.fail()` expiry is a reusable pattern for any vault gating generated public surfaces — worth a
`patterns_to_author:` entry back to WebForge (P2) rather than staying local.

**Token budget**: estimated ~150–250 kT across 1–2 sessions; **actual ≈ 135 kT, single session** — inside
the band, no ADR-016 retrospective triggered (drift < 2×).
