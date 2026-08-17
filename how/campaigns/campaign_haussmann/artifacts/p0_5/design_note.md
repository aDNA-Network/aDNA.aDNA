---
type: artifact
artifact_class: design_note
campaign: campaign_haussmann
mission: mission_haussmann_p0_5_editorial_gate
phase: P0
created: 2026-08-16
updated: 2026-08-16
status: active
last_edited_by: agent_rosetta
tags: [haussmann, p0, editorial_gate, claims, h13, design_note]
---

# P0.5 O0 — Design note: what the editorial gate can check by machine, and what it cannot

> **The structural finding this mission answers (H13).** Public copy on adna.network is *generated from
> internal artifacts without an editorial gate*. 58 of 74 vault pages (78%) leak internal operational
> language; every one of 203 pages shipped internal rationale in HTML comments; 8 claims are FALSE.
> None of that is a copywriting failure — it is a **missing pipeline stage**. This mission builds the
> stage. It fixes no copy (P1.1 and P1.3 own that); it makes the copy's defects *fail a test*.

## 1 · The dividing line: mechanical vs review-only

The honest split is not "hard vs easy". It is **whether a false positive is cheap**. A lint that cries wolf
gets muted, and a muted lint is worse than none — it converts a real gap into a false sense of coverage.
So a check earns mechanization only when it can be stated as a pattern that matches defects and spares
legitimate copy, *demonstrably*, against this tree.

| Check | Verdict | Why |
|---|---|---|
| **FALSE claims present/absent** | **Mechanical** (gate-26) | A claim register row is an exact quoted sentence. String presence in built HTML is decidable; the only ambiguity is typography, which normalizes cleanly. |
| **Verified claims still present** | **Mechanical** (gate-26) | Same mechanism, opposite polarity — the currency direction. Guards the honesty strata against silent deletion in a redesign. |
| **Internal ids / release-train codes / raw enums / machine names** | **Mechanical** (gate-27) | Machine-shaped tokens: `campaign_*`, `pt08`, `tbd_at_p0`, `Mac/stanley`. Distinctive enough that a regex separates them from prose with zero false positives on the current tree (proven per pattern — §3). |
| **Truncated ledes** | **Mechanical** (gate-27) | Has a *structural* signature, not a semantic one: an open parenthesis clipped at a period before the text node ends. Tuned to catch all 29 real instances and spare the one legitimate parenthetical-with-markup that a looser draft mis-flagged. |
| **Dev comments in shipped HTML** | **Mechanical + structurally fixed** (astro.config.mjs + gate-28) | Binary and total: zero comments should ship. Better than a lint — an automatic strip, with the gate as postcondition. |
| **Aspirational present tense** | **REVIEW ONLY** (`tense_review_checklist.md`) | See §4 — this is the one class where mechanization would be theatre. |
| **Whether a claim is *true*** | **REVIEW ONLY** | Requires the world, not the repo. gate-20 checks a claim against its cited source; nothing checks whether the source is honest. Humans and the register do that. |
| **Tone / voice / jargon density** | **REVIEW ONLY** (P4.5's lane) | "Too much jargon" has no decidable threshold. Deferred deliberately; the memo sequencing puts jargon last. |

## 2 · Leak-class inventory (from the H13 annex)

Sweep of all 74 registry pages, `claims_raw.json` → `h13_leak_summary.class_counts`. The right-hand column
is this mission's disposition — which pattern in `leak_patterns.json` now covers it.

| H13 class | Count | Example from the live sweep | Covered by |
|---|---:|---|---|
| `truncation_unclosed_paren` | 27 | `Web-stack cohort (.` | `truncated_lede` |
| `raw_enum_spec` | 23 | `Class: org_graph`, `Persona: tbd_at_p0` | `raw_enum` |
| `governance_internal_path_rows` | 24 | vault-internal governance paths in spec rows | `internal_path` (partial — see §5) |
| `internal_ops_jargon` | 14 | `federation_ref`, `Data-bearing`, `operator` | **partial** — the id-shaped subset only (§5) |
| `codename_jargon` | 14 | `pt08`, `Operation Aegis`, `LIP-0006` | `production_tidy`, `op_codename` |
| `internal_path_lede` | 10 | `what/contextscope/`, `what/harness/` | `internal_path` |
| `raw_enum_lede_code_as_WHAT` | 7 | `code-as-WHAT` | `raw_enum` |
| `cut_mid_parenthetical` | 5 | `(Production Tidy pt08.` | `truncated_lede` |
| `rename_provenance` | 3 | `Renamed from TaskForge.aDNA` | **not linted** — a judgment call (§5) |
| `templated_placeholder_lede` | 1 | `A workspace vault — pending.` | **not linted** — semantic (§5) |
| *(new, found this mission)* **dev comments** | **5,748 across 203/203 pages** | `<!-- N-07 / F-CHM-210 (M4.2 rider): … -->` | astro.config.mjs strip + gate-28 |
| *(new, found this mission)* **operator machine identifiers** | 15 across 3 pages | `for Mac/stanley; the operator's daily-driver` | `machine_ident` |

Two classes were **not** in the H13 annex and surfaced during this build: the dev-comment class (the widest
blast radius of any — every page) and the operator-machine-identifier class (it names a private machine and
its role on the homepage).

## 3 · The expected-failure mechanism

The mission must do two contradictory-looking things at once: **prove the gate catches today's 8 FALSE
claims**, and **leave the suite green** so P1's work is not run against a permanently red board. Playwright's
`test.fail()` annotation resolves this exactly.

```
test.fail() + test currently fails   →  reported as an EXPECTED FAILURE, suite stays green
test.fail() + test starts passing    →  reported as an UNEXPECTED PASS,  suite goes RED
```

So each FALSE row is asserted in the *absence* direction and annotated `test.fail()`. Today the claim is on
the page, the assertion fails, and the run is green with the defect **visible and named** in the report.
The moment P1.1 removes the sentence, the test passes unexpectedly and the suite goes red until the row is
deleted from the fixture. **The gate cannot be quietly outlived** — it forces its own cleanup. Same device
carries the leak debt: one test asserts the baseline is empty, annotated `test.fail()`, expiring at P1.3.

Two guards keep this from being abused:

- **Schema rule** — a row with `class: FALSE` and no `expected_fail_until` fails the suite outright. Nobody
  can park a false claim behind a plain green test.
- **Baseline ≠ allowlist** — two separate files with different jobs. `leak_baseline.json` is *dated debt*
  that expires at P1.3; `leak_allowlist.json` is *permanent reviewed exception*, token-scoped with a
  rationale. Conflating them is how a lint dies: everything drifts into the "known issues" pile and the
  ratchet stops turning.

## 4 · Why mechanical tense-lint was rejected

The register's §3 tense audit is the strongest single finding in B5 — but it is also the clearest case for
*not* automating. The evidence:

- The verdicts are **not lexical**. "Nodes **connect** through real, directed relationships" is
  *verifiable at vault level and aspirational at node level* — the same verb, in the same sentence, is both.
  No regex reaches that.
- The register's own judgments include **four "Mixed"** rows. A binary lint must call those; whichever way
  it calls them it is wrong half the time.
- The distinguishing feature is **whether a reader can check it today**, which depends on the state of
  private repos, not on the words. The prose is identical whether the claim is true or false.
- A present-tense lint would fire on the site's *best* sentences. "aDNA **is built** by humans and agents
  together" is present-tense and fully verifiable — flagging it teaches authors to ignore the tool.

A lint here would produce mostly false positives on a class where **the honest and the aspirational sentences
sit side by side on the same page** (the register's own summary of the pattern). That is the definition of
false-positive theatre. So this class ships as a **review instrument** — `tense_review_checklist.md` — with
the specific tests a reviewer applies, and the mechanical work aimed where it is decidable: the *claims* the
tense wraps (gate-26) rather than the tense itself.

## 5 · Known limits (stated, not hidden)

1. **`internal_ops_jargon` is only partly covered.** Terms like `federation_ref`, `Data-bearing`,
   `Local-only` are ordinary English or plausible public vocabulary in some contexts. Only the id-shaped
   subset is linted. The rest is P4.5's voice lane.
2. **`rename_provenance` is deliberately not linted.** "Renamed from SiteForge.aDNA" may be *useful* to a
   reader following an old link. The defect in the marquee case was the truncation and the `pt08` code, both
   of which *are* caught. Whether rename notes belong on a public card is P1.3's editorial call.
3. **Allowlist entries are token-scoped, not surface-scoped**, so a *new* internal id on an allowlisted
   surface still goes red. The residual risk is narrow: an already-allowlisted token used in a *new, wrong*
   place on the same surface tree.
4. **The leak lint reads `dist/`, not `.vercel/output/static`.** They are byte-identical post-build; gate-28
   separately asserts the deployed artifact is stripped, which is where the two could diverge.
5. **Verified-row quotes are trimmed of counts** (campaign convention 8 / WebForge KW-8): this gate must
   never pin live registry data. Count currency stays gate-21's job, count provenance gate-20's.

## 6 · What lands

| Artefact | Role |
|---|---|
| `site/tests/gates/gate-26-claim-register.spec.ts` | Claim register as referee — 9 FALSE rows (absence) + 12 verified rows (currency) |
| `site/tests/gates/gate-27-leak-lint.spec.ts` | H13 leak classes over every built page + the llms surfaces, on a ratchet |
| `site/tests/gates/gate-28-no-dev-comments.spec.ts` | Postcondition for the comment strip, incl. the deployed artifact |
| `site/tests/gates/fixtures/claim_register.json` | The register slice, derived from B5 + verified against the build |
| `site/tests/gates/fixtures/leak_patterns.json` | Pattern set + per-pattern example/counter-example self-test |
| `site/tests/gates/fixtures/leak_allowlist.json` | Permanent reviewed exceptions — dated, token-scoped, justified |
| `site/tests/gates/fixtures/leak_baseline.json` | Today's debt — dated, expires P1.3 |
| `site/scripts/gen_leak_baseline.mjs` | Re-baseline tool for P1.3 (`--check` reports drift) |
| `site/astro.config.mjs` | `adna-strip-html-comments` integration (the only site change) |
| `tense_review_checklist.md` | The review instrument for the class that resists mechanization |

**Related**: [[campaign_haussmann]] · [[hypotheses_resolved]] (H13) · `evidence/claims/claim_register.md`
