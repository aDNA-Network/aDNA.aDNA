/**
 * Gate 54 — THE D1/D2 DOCTRINE LAYER  (HAUSSMANN GR-4 O1, AC-1 + AC-2, verification limb V1)
 *
 * Criterion: the model-routing story (D1) and the per-mission token-budget doctrine (D2) are
 * published in AUTHORED site content, and D2 is a doctrine LAYER rather than a passing mention.
 *
 * ⛩ WHAT THIS GATE RUNS AGAINST, AND WHETHER THAT IS THE SURFACE THE CLAIM IS ABOUT (convention 18,
 * stated here rather than left to be inferred from a green tick) — it runs against TWO surfaces,
 * because AC-1 and AC-2 make two different kinds of claim:
 *
 *   G54a–G54d  AUTHORED SOURCE (`src/**` minus `src/data/tour/**`). AC-1's verb is "is published in
 *              AUTHORED site content" — a claim about what this repo authors.
 *   G54e–G54g  THE RENDERED `.md` TWINS. AC-2's substance floor is a claim about what a READER
 *              ENCOUNTERS, and it is a COMPARISON against the same pages' own sibling sections, so
 *              both halves are measured by one instrument on one surface.
 *
 * ⚠⚠ THE EXCLUSION IS THE CRITERION HERE, NOT HOUSEKEEPING — AND WITHOUT IT THIS GATE WOULD HAVE
 * BEEN GREEN AGAINST ZERO WORK. Measured 2026-09-02, before GR-4 O1 shipped a word, the only
 * model-routing occurrence anywhere in `src/` was one skills-table row inside
 * `src/data/tour/standard-governance.txt` — the byte-vendored `.adna/CLAUDE.md`, published on the
 * trust page with its sha256 and an invitation to diff it. A gate phrased the obvious way ("model
 * routing appears on the site") would have passed on the day the story was ABSENT. That file also
 * cannot be edited: Standing Rule 1 forbids modifying `.adna/`, and editing the published copy would
 * trade a copy defect for a trust defect on the one surface built to be checked.
 *
 * ⇒ G54b ASSERTS THE EXCLUSION rather than assuming it, on gate-48's ratified discipline — THE
 * EXCLUSIONS ARE PART OF THE CLAIM — and pins the arithmetic the way G48d pins its own, so the
 * excluded set cannot quietly grow to swallow an inconvenient result. G54c asserts the exclusion is
 * still LOAD-BEARING: if the vendored file ever stops carrying the term, the exclusion has become
 * decorative, and this gate says so instead of passing for a reason that no longer holds.
 *
 * RELATIONSHIP TO THE MEASUREMENT: this gate does NOT re-implement it. It runs
 * `scripts/doctrine_layer_measure.mjs --json` and asserts on the output, so fence and report can
 * never disagree — gate-40's discipline, for gate-40's reason. The measurement also carries the
 * thing worth protecting: THE SUBSTANCE FLOOR IS DERIVED FROM THE PAGES' OWN CONFORMANT SECTIONS,
 * NOT CHOSEN. Its header records that the first draft gated two axes that the data then showed to be
 * ANTI-CORRELATED, which would have failed genuinely conformant siblings.
 *
 * ⚠ G54g IS THE ONE THAT AGES, and it is gate-44's G44c by another name. The budget is only honest
 * while its derivation still supports it. If the exemplar sections thin out, the pinned floor
 * silently becomes stricter than the evidence for it and every grade it hands down is unfounded.
 *
 * ⚠ COVERAGE FLOORS, NOT `> 0` (P4.2's lesson, paid for twice; and the adoption addendum's — A
 * COVERAGE FLOOR GOES STALE THE MOMENT ITS SUBJECT GROWS). A collapsed source walk or an unbuilt
 * twin must fail loudly: `pages.every(p => meets)` is VACUOUSLY TRUE over rows that carry an
 * `error` field and no verdict at all.
 *
 * Red-proven by `scripts/doctrine_layer_redtest.sh` — ONE MUTATION PER ASSERTION, each case naming
 * the assertion it reds via, because a demonstration is only worth what it can attribute (GR-3's
 * `F-z`, spent forward at authoring time rather than discovered in this harness's fourteenth day).
 */
import { test, expect } from '@playwright/test';
import { execFileSync } from 'node:child_process';

type Section = { heading: string; bodyLen: number; proseLen: number; elements: number };
type Page =
  | { route: string; graded: Section; comparators: Section[]; excludedFromComparators: string[]; error?: undefined }
  | { route: string; error: string };
type Term = { label: string; authored: string[]; excludedMatching: string[] };
type Measure = {
  source: {
    error?: string;
    excludedDirs: string[];
    scanned: number;
    kept: number;
    excluded: number;
    terms: Record<string, Term>;
    d2Homes: { file: string; present: boolean }[];
  };
  pages: Page[];
  budget: { bodyLen: number };
  derived: { bodyLen: number } | null;
  derivationHolds: boolean;
};

/** Declared here as well as in the script: a gate that reads its own frame from the thing it grades
 *  can be moved by moving that thing. These are the numbers the criterion was ratified against. */
const EXPECTED_EXCLUDED_DIRS = ['src/data/tour'];
const SCAN_FLOOR = 200;
const COMPARATOR_FLOOR = 3;
const D2_HOME_COUNT = 2;

function run(): Measure {
  let raw: string;
  try {
    raw = execFileSync('node', ['scripts/doctrine_layer_measure.mjs', '--json'], {
      encoding: 'utf8',
      maxBuffer: 32 * 1024 * 1024,
    });
  } catch (e: any) {
    throw new Error(`doctrine_layer_measure.mjs did not run — the gate cannot grade anything: ${e?.message}`);
  }
  return JSON.parse(raw) as Measure;
}

test.describe('gate-54: the D1/D2 doctrine layer', () => {
  let m: Measure;
  test.beforeAll(() => {
    m = run();
  });

  test('G54a: the source walk covered its frame (coverage floor, not > 0)', () => {
    expect(m.source.error, 'the source scan errored — no verdict below it means anything').toBeUndefined();
    expect(
      m.source.scanned,
      `the walk found only ${m.source.scanned} source files; below ${SCAN_FLOOR} the scan has collapsed ` +
        `and every "absent" verdict it produces is an artefact of the walk, not a fact about the site`,
    ).toBeGreaterThanOrEqual(SCAN_FLOOR);
    expect(m.source.kept + m.source.excluded, 'kept + excluded must account for every file walked').toBe(m.source.scanned);
  });

  test('G54b: the exclusion set is what it claims to be, and its arithmetic is pinned', () => {
    expect(
      m.source.excludedDirs,
      'the excluded set changed. THE EXCLUSIONS ARE PART OF THE CLAIM: growing this list is the ' +
        'cheapest possible way to make this gate green without publishing anything.',
    ).toEqual(EXPECTED_EXCLUDED_DIRS);
    expect(m.source.excluded, 'the excluded tree is empty — the exclusion is not selecting the vendored files').toBeGreaterThan(0);
  });

  test('G54c: D1 is published in AUTHORED content', () => {
    expect(
      m.source.terms.d1.authored.length,
      'the model-routing story is absent from authored source. It cannot be satisfied by the ' +
        'vendored tour file, which is excluded by name — see this gate\'s header.',
    ).toBeGreaterThan(0);
  });

  /* Logically G54c's sibling; it carries its own id because ONE MUTATION PER ASSERTION is what makes
   * a red attributable, and an assertion sharing a test with another can only ever be demonstrated
   * to fail alongside it. */
  test('G54h: the vendored exclusion is still load-bearing', () => {
    expect(
      m.source.terms.d1.excludedMatching.length,
      'the vendored tree no longer carries the term, so the exclusion is no longer excluding ' +
        'anything. That is not a failure of the site — it means this gate would now pass with the ' +
        'exclusion removed, and the criterion it was written for has quietly stopped being tested.',
    ).toBeGreaterThan(0);
  });

  test('G54d: D2 is published on BOTH of its named home pages', () => {
    expect(m.source.d2Homes.length, 'the named-home set changed size').toBe(D2_HOME_COUNT);
    const missing = m.source.d2Homes.filter((h) => !h.present).map((h) => h.file);
    expect(
      missing,
      `AC-2 names these pages as D2's homes; the doctrine is absent from: ${missing.join(', ')}`,
    ).toEqual([]);
  });

  test('G54e: every graded page was actually measured (coverage floor)', () => {
    const errored = m.pages.filter((p) => 'error' in p && p.error).map((p) => `${p.route}: ${(p as any).error}`);
    expect(
      errored,
      `a page could not be measured, so "every graded section meets the floor" would be vacuously ` +
        `true over rows that carry no verdict at all: ${errored.join(' · ')}`,
    ).toEqual([]);
    for (const p of m.pages as Extract<Page, { graded: Section }>[]) {
      expect(
        p.comparators.length,
        `${p.route} has ${p.comparators.length} comparators; below ${COMPARATOR_FLOOR} the "floor of ` +
          `the conformant set" stops being a floor`,
      ).toBeGreaterThanOrEqual(COMPARATOR_FLOOR);
    }
  });

  /* Error rows are skipped here ON PURPOSE and G54e is what makes that safe: it fails loudly on any
   * error row, so this limb never grades a shrunken frame. Iterating them instead would throw on a
   * missing `graded` field and report a CRASH under this test's name — a red that names the wrong
   * cause, which is the attribution defect this suite was built to stop reproducing. */
  test('G54f: each new doctrine section meets the derived substance floor', () => {
    for (const p of (m.pages as Extract<Page, { graded: Section }>[]).filter((p) => !('error' in p && p.error))) {
      expect(
        p.graded.bodyLen,
        `${p.route} — "${p.graded.heading}" measures ${p.graded.bodyLen} against a floor of ` +
          `${m.budget.bodyLen} derived from that page's own sibling sections. A criterion satisfied ` +
          `by a passing mention is what this floor exists to refuse.`,
      ).toBeGreaterThanOrEqual(m.budget.bodyLen);
    }
  });

  test('G54g: the derivation still supports the pinned budget', () => {
    expect(m.derived, 'nothing was derived — the comparator sets are empty').not.toBeNull();
    expect(
      m.derivationHolds,
      `the pinned budget is ${m.budget.bodyLen} but the conformant sections now floor at ` +
        `${m.derived?.bodyLen}. The budget is stricter than the evidence for it, so every grade it ` +
        `hands down is unfounded — re-derive the pin or restore the exemplars.`,
    ).toBe(true);
  });
});
