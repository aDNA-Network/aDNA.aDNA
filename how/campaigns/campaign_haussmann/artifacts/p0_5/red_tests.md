---
type: artifact
artifact_class: verification_evidence
campaign: campaign_haussmann
mission: mission_haussmann_p0_5_editorial_gate
phase: P0
created: 2026-08-16
updated: 2026-08-16
status: active
last_edited_by: agent_rosetta
tags: [haussmann, p0, editorial_gate, red_test, verification]
---

# P0.5 O4 — Red-test evidence

> **A green that cannot go red is not evidence.** Each new check was deliberately broken, observed to fail
> with an actionable message, and restored. Run 2026-08-16 against a fresh `npx astro build` (203 pages).
> Provenance `[D]` — directly observed output, quoted verbatim below.

---

## (a) gate-26 — a verified claim that vanished

**Break**: flip register row `R-58`'s quote to a sentence the page does not contain (simulating the honesty
stratum being edited away — the failure this direction exists to catch).

```
python3 -c "…R-58 quote → 'aDNA is stewarded today by a distributed core team'…"
npx playwright test gate-26
```

```
✘ 18 › G-claim-register: R-58 — verified claim still present on /about
  1) Error: register row R-58 — a VERIFIED claim vanished from /about:
  1 failed
  23 passed
```

**Result: PROVEN FAIL.** Failure names the register row id and the surface. Fixture restored from backup;
re-run green.

---

## (b) gate-26 — the unexpected-pass ratchet (the forcing function)

**Break**: simulate P1.1 fixing the copy — rewrite the R-46 sentence in `dist/community/index.html`
("questions and ideas start in Discussions" → "…on the mailing list"), so the absence assertion now *passes*.

```
python3 -c "…patch dist/community/index.html…"
npx playwright test gate-26 --grep "R-46"
```

```
1) › G-claim-register: R-46 — FALSE claim absent from /community (expected failure until P1.1)
   Expected to fail, but passed.
1 failed
```

**Result: PROVEN FAIL.** This is the mechanism the mission depends on: once the copy is fixed, the suite goes
**red** until the row is removed from the fixture. The gate forces its own cleanup and cannot be quietly
outlived. `dist/` restored by rebuild.

---

## (c) gate-27 — a new leak outside the baseline

**Break**: inject `campaign_test_leak` into a page carrying no baseline entry
(`dist/get-started/index.html`).

```
python3 -c "…inject '<p>see campaign_test_leak for detail</p>'…"
npx playwright test gate-27 --grep "outside the dated baseline"
```

```
NEW LEAK — get-started/index.html [internal_id] ×1: "campaign_test_leak"
    why this is a leak: Internal campaign/mission artifact ids (campaign_rosetta,
    mission_wadna_p3_iterate). Case-sensitive by design — ids are lower_snake_case.

Fix the copy or the generator. If the text is DELIBERATE public copy, add a dated, token-scoped
entry to tests/gates/fixtures/leak_allowlist.json with a rationale — never to the baseline.
1 failed
```

**Result: PROVEN FAIL.** The message names the file, the class, the count, the offending token, *why* it is a
leak, and the two legitimate remedies — while explicitly refusing the illegitimate one (adding to the
baseline). `dist/` restored by rebuild.

---

## (d) gate-28 — a dev comment in shipped HTML

**Break**: inject an HTML comment into `dist/adopters/index.html`.

```
python3 -c "…inject '<!-- TODO(mission_x): revisit this layout rationale before ship -->'…"
npx playwright test gate-28
```

```
✘ 1 › G-no-dev-comments: shipped HTML in dist/ carries no development comments
  Error: 1 development comment(s) reached the shipped HTML across 1 file(s).
  adopters/index.html: <!-- TODO(mission_x): revisit this layout rationale before ship -->
1 failed
2 passed
```

**Result: PROVEN FAIL.** `dist/` restored by rebuild.

---

## Bonus — two bugs the mechanism caught in its own author

Recorded because both were **false-pass** bugs: the gate would have reported a launch-blocking claim as
clean. They are the strongest argument for the expected-failure design, which surfaced them immediately.

1. **Named-entity blind spot.** The first draft decoded `&quot;`/`&amp;` but not `&ldquo;`/`&rdquo;`/`&mdash;`.
   Row R-61's FALSE claim on `/about` (`Every vault is &ldquo;tended by&rdquo; a named agent &mdash; …`)
   silently reported **ABSENT** — a clean pass on an S1 defect. Caught because `test.fail()` turned the false
   pass into a loud *"Expected to fail, but passed"*. Fixed with a single-pass decoder over a bounded entity
   map **plus a tripwire test** that fails if the build ever emits an entity the map does not know — so the
   bug class cannot return silently.
2. **Tripwire over-reach.** That tripwire initially scanned raw HTML and flagged `m` as an unknown entity —
   from minified inline JS (`u=h&&m;`). Fixed by scanning the same surface the decoder actually sees
   (scripts/styles stripped first).

**Lesson for the campaign**: a detection gate needs its *own* detection test. Both `leak_patterns.json`
(example + counter-example per pattern) and gate-26's entity tripwire exist because of this session.

---

## Full-suite run (post-restore)

```
npx astro build            # 203 pages; strip removed 5,748 comments from 203 files
node scripts/gen_leak_baseline.mjs --check   # new rows: 0 · cleared rows: 0
npm run test:gates
```

```
404 passed (1.6m)          EXIT=0
  394 ✓ passed
   10 ✘ expected failures  (9 × gate-26 FALSE rows → P1.1; 1 × gate-27 baseline-empty → P1.3)
    0   real failures
```

**Baseline before this mission**: 371 gates. **Now**: 404 (+33 from gates 26/27/28). The only non-green
entries are the annotated expected failures — i.e. the suite is proving it catches today's defects while
staying green for P1's work.

**Related**: [[design_note]] · [[tense_review_checklist]] · [[campaign_haussmann]]
