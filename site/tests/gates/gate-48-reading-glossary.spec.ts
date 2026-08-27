/**
 * Gate 48 — READING TREND + GLOSSARY FIRST USE  (HAUSSMANN P4.5b O3; AC-b glossary limb, AC-d, V5)
 *
 * Two claims from AC-b/AC-d, and they are gated DIFFERENTLY on purpose:
 *
 *   · the reading-level report is "wired as a NON-BLOCKING CI report (trend visible)" — so this
 *     gate never fails a build because a page reads a grade too high. It prints the table.
 *   · "every proprietary term glossary-linked at first use" is a hard assertion, because unlike a
 *     grade it has a right answer.
 *
 * ⭐ WHAT A NON-BLOCKING LIMB MUST STILL BLOCK ON, OR IT IS NOT A GATE. A report that fails at
 * nothing is indistinguishable from a report that is not running. So the trend limb asserts the
 * INSTRUMENT, not the grades: the self-tests pass, the frame is the size it should be, and every
 * requested route actually produced a reading. A missing twin is a loud failure here — silently
 * dropping it would shrink the corpus and improve the average, which is the one direction a
 * reading-level number must never be allowed to move by accident.
 *
 * RELATIONSHIP TO THE MEASUREMENT: this gate does NOT re-implement either measurement. It runs
 * `scripts/reading_census.mjs --json` and `scripts/glossary_first_use.mjs --json` and asserts on
 * their output, so the fence and the report can never disagree — gate-40's discipline, gate-44's
 * reason.
 *
 * ⚠ COVERAGE FLOOR, NOT `> 0` (P4.2's lesson, paid for twice). `violations.length === 0` is
 * VACUOUSLY TRUE over a frame of zero routes or zero terms — and both are one broken glob away.
 * G48a asserts the frame before G48c is believed at all.
 *
 * ⚠ THE EXCLUSIONS ARE PART OF THE CLAIM AND ARE ASSERTED, NOT ASSUMED (V5: "with its exclusions
 * named on its face"). The glossary check runs over 20 of the site's 25 glossary terms; the other
 * five are ordinary-English homographs or the site's own name, listed with reasons in
 * `glossary_first_use.mjs`. G48d pins that arithmetic, so the excluded set cannot quietly grow to
 * make a failure go away — the cheapest possible way to fake this gate green.
 *
 * Red-proven by `scripts/reading_glossary_redtest.sh` — required, because the glossary limb went
 * green on its first run after O3's fixes, which is precisely the state in which a real assertion
 * and a no-op are indistinguishable.
 */
import { test, expect } from '@playwright/test';
import { execFileSync } from 'node:child_process';

/** The 21 rewritten routes (top-20 by inbound links ∪ AC-b's four named first-contact surfaces).
 *  Enumerated in `reading_census.mjs`, so a shrink is a deliberate edit and should be seen. */
const CENSUS_FLOOR = 21;
/** The four first-contact surfaces the glossary rule is scoped to. */
const GLOSSARY_ROUTE_FLOOR = 4;
/** 25 glossary entries minus the 5 declared-ambiguous terms. Both halves are asserted in G48d. */
const GLOSSARY_TERM_FLOOR = 20;

type CensusRow = {
  route: string; target: number; prose_fkgl: number; whole_fkgl: number;
  delta: number; passive_pct: number; sentences: number; words: number;
  avg_wps: number; dropped_lines: number; low_confidence: boolean;
};
type Census = { dist: string; measured: number; missing: string[]; rows: CensusRow[] };

type GlossRow = { route: string; term: string; slug: string; at: number; linked: boolean };
type Gloss = {
  derived: number; excluded: number; checkable: number;
  routes_requested: number; routes_measured: number;
  errors: { route: string; error: string }[];
  mentions: number; rows: GlossRow[]; violations: GlossRow[];
};

/** `dist` is passed EXPLICITLY rather than left to each script's default. The two scripts have
 *  different defaults on purpose — `reading_census.mjs` is normally run from the vault root and
 *  defaults to `site/dist`, `glossary_first_use.mjs` from `site/` — and a gate that inherits a
 *  default is a gate that reports on whichever tree the default happens to name. */
const DIST = 'dist';

function run<T>(script: string): T {
  let raw: string;
  try {
    raw = execFileSync('node', [`scripts/${script}`, '--dist', DIST, '--json'], {
      cwd: process.cwd(), encoding: 'utf8', maxBuffer: 32 * 1024 * 1024,
    });
  } catch (e: any) {
    // A broken instrument is a gate failure, never "zero problems found".
    throw new Error(`${script} failed — refusing to report a green: ${e.message}`);
  }
  return JSON.parse(raw) as T;
}

function selftestPasses(script: string): { ok: boolean; out: string } {
  try {
    const out = execFileSync('node', [`scripts/${script}`, '--selftest'], {
      cwd: process.cwd(), encoding: 'utf8',
    });
    return { ok: true, out: out.trim() };
  } catch (e: any) {
    return { ok: false, out: `${e.stdout ?? ''}${e.stderr ?? ''}`.trim() || e.message };
  }
}

test.describe('gate-48 — reading trend + glossary first use', () => {
  test('G48a: both instruments pass their own controls before any number is believed', () => {
    // Convention 14: an instrument is not believed until it has been demonstrated to fail. Both
    // scripts carry two-directional self-tests; a classifier that has stopped separating produces
    // exactly the same clean output as a clean site.
    for (const script of ['reading_census.mjs', 'glossary_first_use.mjs']) {
      const { ok, out } = selftestPasses(script);
      expect(ok, `${script} --selftest FAILED. Every reading below it is unsafe to act on.\n${out}`).toBe(true);
    }
  });

  test('G48b: the census measured its whole frame (coverage floor, not > 0)', () => {
    const c = run<Census>('reading_census.mjs');

    expect(
      c.missing,
      `${c.missing.length} route(s) in the graded set have no .md twin, so they contributed ` +
        `nothing to the reading census. A route that silently drops out SHRINKS THE CORPUS AND ` +
        `IMPROVES THE AVERAGE — the one direction this number must never move by accident. ` +
        `Rebuild dist/ (npx astro build, never npm run build).`,
    ).toEqual([]);

    expect(
      c.rows.length,
      `census frame is ${c.rows.length}, below the floor of ${CENSUS_FLOOR}. A shrunken frame ` +
        `grades fewer pages while still reporting a trend.`,
    ).toBeGreaterThanOrEqual(CENSUS_FLOOR);
  });

  test('G48c: NON-BLOCKING — the reading trend is reported, never enforced', () => {
    const c = run<Census>('reading_census.mjs');
    const graded = c.rows.filter((r) => !r.low_confidence);
    const over = graded.filter((r) => r.prose_fkgl > r.target);

    // AC-d says non-blocking, so this limb prints and does not fail on grade. The report is the
    // deliverable; the assertion below is only that a report was actually produced.
    const lines = c.rows.map(
      (r) =>
        `  ${String(r.prose_fkgl).padStart(6)}  (whole ${String(r.whole_fkgl).padStart(6)})  ` +
        `target ${r.target}  ${r.route}${r.prose_fkgl > r.target ? '  OVER' : ''}` +
        `${r.low_confidence ? '  [low-confidence: thin prose — excluded from the count]' : ''}`,
    );
    console.log(
      `\ngate-48 reading trend (prose-only is canonical; whole-twin shown for contrast)\n` +
        `${lines.join('\n')}\n` +
        `  ⇒ ${over.length} of ${graded.length} graded routes over target ` +
        `(${c.rows.length - graded.length} excluded as thin prose, reported not dropped).\n`,
    );

    expect(graded.length, 'every route was excluded as thin prose — that is a broken corpus, not a clean one')
      .toBeGreaterThan(0);
  });

  test('G48d: the glossary frame and its exclusions are what they claim to be', () => {
    const g = run<Gloss>('glossary_first_use.mjs');

    expect(
      g.errors.map((e) => `${e.route}: ${e.error}`),
      `${g.errors.length} first-contact route(s) could not be read. An unmeasured route and a ` +
        `clean one are indistinguishable to a check that skips errors.`,
    ).toEqual([]);

    expect(
      g.routes_measured,
      `only ${g.routes_measured} of ${g.routes_requested} first-contact routes measured.`,
    ).toBeGreaterThanOrEqual(GLOSSARY_ROUTE_FLOOR);

    // The exclusion arithmetic. Loosening this — quietly moving a failing term into AMBIGUOUS —
    // is the cheapest way to fake this gate green, so it is pinned rather than trusted.
    expect(
      g.checkable,
      `checkable term set is ${g.checkable} (${g.derived} derived − ${g.excluded} excluded), below ` +
        `the floor of ${GLOSSARY_TERM_FLOOR}. Either the glossary shrank or the exclusion list grew; ` +
        `both change what "every proprietary term" means and neither may happen silently.`,
    ).toBeGreaterThanOrEqual(GLOSSARY_TERM_FLOOR);

    expect(
      g.checkable,
      'checkable must be exactly derived − excluded; anything else means terms are being lost',
    ).toBe(g.derived - g.excluded);
  });

  test('G48e: every checkable term is glossary-linked at its first use', () => {
    const g = run<Gloss>('glossary_first_use.mjs');

    // The frame this verdict rests on — asserted here too, because G48d passing in a different
    // worker is not evidence available to this one.
    expect(g.mentions, 'zero checkable term mentions across the first-contact surfaces — the ' +
      'matcher has stopped firing, which reads exactly like a fully-linked site')
      .toBeGreaterThan(0);

    const bare = g.violations.map((v) => `${v.route} · ${v.term} (first prose use at char ${v.at})`);
    expect(
      bare,
      `${bare.length} term(s) meet a reader on a first-contact surface with no route to their ` +
        `definition (voice guide §3, the one-new-term law). Link the FIRST prose use to ` +
        `/glossary/<slug>/, or — if the mention is ordinary English rather than the aDNA entity — ` +
        `add the term to AMBIGUOUS in glossary_first_use.mjs WITH ITS REASON, which G48d will ` +
        `then hold you to.`,
    ).toEqual([]);
  });
});
