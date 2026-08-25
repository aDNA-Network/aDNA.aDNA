/**
 * Gate 44 — HUB SUBSTANCE FLOOR  (HAUSSMANN P4.4a A2, row F19)
 *
 * Criterion: no section-index hub ships below the substance budget — `h2 >= 4` sections and
 * `bodyLen >= 1900` characters of content, chrome excluded.
 *
 * ⭐ THIS GATE DISCOVERS NOTHING, AND THAT IS ITS ENTIRE POINT. F19 — the spec hub shipping at
 * `h2=0` and 1,504 bytes — was CLOSED by P4.2 ("thin hubs, 4/4 brought to budget"). All four hubs
 * pass today. The gate exists because the campaign's premise is that the classes it found by hand
 * become classes a machine finds forever: P2.3 CREATED the fourth thin hub while closing other
 * work, and nothing noticed until three fresh readers were pointed at the site. A hub thins by
 * accident, in the course of a split or a merge, and it thins invisibly.
 *
 * RELATIONSHIP TO THE MEASUREMENT: this gate does NOT re-implement the measurement. It runs
 * `scripts/hub_depth_measure.mjs --json` and asserts on its output, so the fence and the report can
 * never disagree — gate-40's discipline, for gate-40's reason. That script also carries the thing
 * worth protecting: **the budget is DERIVED from the site's own conformant hubs, not chosen.** Its
 * own header records that its first draft invented `h2 >= 2, bodyLen >= 1200` and graded against
 * it, which is circular — pick a number, then declare four pages fail it. The exemplar set is the
 * budget instead.
 *
 * ⚠ COVERAGE FLOOR, NOT `> 0` (P4.2's lesson, paid for twice). `measure()` returns
 * `{ error: 'not built' }` for a hub it cannot find. A broken `dist/`, a renamed route, or a
 * changed template returns four error rows — and `rows.every(r => r.meetsBudget)` is VACUOUSLY
 * TRUE over rows that have no `meetsBudget` field at all. So an error row fails this gate loudly,
 * and the frame size is asserted before any verdict about substance is believed. A negative result
 * is only as wide as the command that produced it.
 *
 * ⚠ G44c IS THE ONE THAT AGES. The budget is only honest while its derivation still supports it.
 * If the exemplar hubs themselves thin out, the hardcoded budget silently becomes stricter than the
 * evidence for it and every grade it hands down is unfounded. The measurement script already
 * detects this and PRINTS A WARNING; a printed warning in a script nobody runs by hand is not a
 * control. G44c mirrors that exact condition as an assertion.
 *
 * Red-proven by `scripts/hub_substance_redtest.sh` — required, because this gate went green on its
 * first run, which is precisely the state in which a real assertion and a no-op are
 * indistinguishable.
 */
import { test, expect } from '@playwright/test';
import { execFileSync } from 'node:child_process';

/** The hub set is 4 today (`how`, `patterns`, `use-cases`, `reference/specification`). The floor is
 *  the whole set: unlike a component census, this frame is enumerated in the script rather than
 *  walked, so a shrink is a deliberate edit and should be seen. */
const HUB_FLOOR = 4;
/** 5 exemplars derive the budget. Below 3 the "floor of the conformant set" stops being a floor. */
const COMPARATOR_FLOOR = 3;

type Row =
  | { route: string; h2: number; bodyLen: number; meetsBudget: boolean; error?: undefined }
  | { route: string; error: string };
type Depth = {
  budget: { h2: number; bodyLen: number };
  derived: { h2: number; bodyLen: number } | null;
  comparators: Extract<Row, { h2: number }>[];
  rows: Row[];
};

function runDepth(): Depth {
  let raw: string;
  try {
    raw = execFileSync('node', ['scripts/hub_depth_measure.mjs', '--json'], {
      cwd: process.cwd(),
      encoding: 'utf8',
      maxBuffer: 32 * 1024 * 1024,
    });
  } catch (e: any) {
    // Surface a broken instrument as a gate failure, never as zero thin hubs.
    throw new Error(`hub_depth_measure.mjs failed — refusing to report a green: ${e.message}`);
  }
  return JSON.parse(raw) as Depth;
}

test.describe('gate-44 — hub substance floor', () => {
  test('G44a: the measurement actually measured a frame (coverage floor, not > 0)', () => {
    const d = runDepth();

    expect(
      d.rows.length,
      `hub frame is ${d.rows.length}, below the floor of ${HUB_FLOOR}. A shrunken frame grades ` +
        `fewer pages while still reporting "no thin hubs".`,
    ).toBeGreaterThanOrEqual(HUB_FLOOR);

    // The vacuity case that matters: rows present, but every one an error. `meetsBudget` is
    // undefined on an error row, so a naive `every(r => r.meetsBudget)` would be false — but a
    // naive `every(r => r.error || r.meetsBudget)` would be TRUE. Say which we mean, out loud.
    const errored = d.rows.filter((r) => 'error' in r && r.error);
    expect(
      errored.map((r) => `/${r.route}: ${(r as { error: string }).error}`),
      `${errored.length} hub(s) could not be measured. This is a BROKEN MEASUREMENT, not a clean ` +
        `site — an unbuilt route and a substantial one are indistinguishable to a check that skips ` +
        `errors. Rebuild dist/ (npx astro build) or fix the route list in hub_depth_measure.mjs.`,
    ).toEqual([]);

    expect(
      d.comparators.length,
      `only ${d.comparators.length} exemplar hub(s) measured, below ${COMPARATOR_FLOOR}. The budget ` +
        `is derived from these; too few and it is an invention again.`,
    ).toBeGreaterThanOrEqual(COMPARATOR_FLOOR);
  });

  test('G44b: every hub meets the substance budget', () => {
    const d = runDepth();
    const thin = d.rows
      .filter((r): r is Extract<Row, { h2: number }> => !('error' in r && r.error))
      .filter((r) => !r.meetsBudget)
      .map((r) => `/${r.route} h2=${r.h2} bodyLen=${r.bodyLen}`);

    expect(
      thin,
      `${thin.length} thin hub(s) against the budget h2 >= ${d.budget.h2}, bodyLen >= ` +
        `${d.budget.bodyLen} (chrome excluded). F19 was exactly this defect: a hub shipping as a ` +
        `heading, a paragraph and a grid of links, with no sections of its own. The remedy is ` +
        `sections a reader needs — not padding, and not lowering the budget.`,
    ).toEqual([]);
  });

  test('G44c: the budget is still supported by its own derivation', () => {
    const d = runDepth();

    expect(
      d.derived,
      `the exemplar hubs produced no derivation, so the budget is currently ungrounded — it would ` +
        `be a chosen number again, which is the circularity hub_depth_measure.mjs was written to avoid.`,
    ).not.toBeNull();

    const derived = d.derived!;
    // Mirrors the script's own drift condition EXACTLY (including its 100-char tolerance for
    // ordinary content churn) rather than inventing a second threshold — two instruments
    // disagreeing about the same drift is worse than neither watching it.
    const h2Drifted = derived.h2 < d.budget.h2;
    const lenDrifted = derived.bodyLen + 100 < d.budget.bodyLen;

    expect(
      { h2Drifted, lenDrifted, derived, budget: d.budget },
      `the budget is now STRICTER than the exemplars it was derived from (derived h2=${derived.h2}, ` +
        `bodyLen=${derived.bodyLen} vs budget h2=${d.budget.h2}, bodyLen=${d.budget.bodyLen}). The ` +
        `conformant hubs have thinned, so every grade this gate hands down rests on evidence that no ` +
        `longer exists. Fix the exemplars, or re-derive the budget and say in the script that you did.`,
    ).toMatchObject({ h2Drifted: false, lenDrifted: false });
  });
});
