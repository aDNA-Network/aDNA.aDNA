/**
 * Gate 40 — Component token census  (HAUSSMANN P4.4a, ⛩ operator ruling 2, 2026-08-24)
 *
 * Criterion: no component or layout introduces a raw literal where a design token exists
 * as an alternative — across ALL SIX P4.1 token families, not just colour.
 *
 * ⭐ WHY THIS GATE EXISTS, IN THE CENSUS'S OWN WORDS: the census that produced this ruling
 * found that **the only token family WITH a gate (colour, gate-25) was the only one that
 * had not drifted.** Font-weight tokens — whose own comment in tokens.css says they
 * "replace the scattered literal 400/500/600/700 across components" — had reached 2 of 15
 * files. A migration announced in a comment is not a migration, and the difference is
 * unobservable without an instrument. Gate-25 fences colour; this fences the other five.
 *
 * RELATIONSHIP TO THE CENSUS SCRIPT: this gate does not re-implement the rules. It runs
 * `scripts/component_token_census.mjs --json` and asserts on its output, so the fence and
 * the report can never disagree — the same reason the census itself parses gate-25's
 * allowlist instead of copying it. Exclusions are declared IN the census with dated
 * rationales and are reported, never silently dropped.
 *
 * ⚠ COVERAGE FLOOR, NOT `> 0` (P4.2's lesson, paid for twice). The census walks the frame
 * from disk. If that walk breaks — a moved directory, a changed extension, a bad cwd — it
 * returns ZERO files, every file is vacuously conformant, and the gate goes GREEN while
 * checking nothing. `expect(findings).toBe(0)` cannot tell "clean" from "measured nothing".
 * So the frame size is asserted against a floor first, and the floor is the thing that
 * makes the zero meaningful. A negative result is only as wide as the command that
 * produced it.
 *
 * ⚠ THIS GATE WENT GREEN ON ITS FIRST RUN (census: 30/30 conformant, 0 findings), which is
 * exactly the state in which a real assertion and a no-op are indistinguishable. It is
 * red-proven by `scripts/token_census_redtest.sh`, which plants a literal of each family
 * in a real component and requires the gate to catch it.
 */
import { test, expect } from '@playwright/test';
import { execFileSync } from 'node:child_process';

// The frame is 30 today (28 components + 2 layouts). The floor is set below that on
// purpose: it must catch a COLLAPSE (a broken walk), not fail the moment someone
// legitimately deletes a component. Raise it if the frame grows durably.
const FRAME_FLOOR = 25;

type Finding = { family: string; value: string };
type Result = { file: string; hasStyle: boolean; findings: Finding[]; excluded: unknown[] };
type Census = { frameSize: number; results: Result[]; totals: Record<string, number> };

function runCensus(): Census {
  let raw: string;
  try {
    raw = execFileSync('node', ['scripts/component_token_census.mjs', '--json'], {
      cwd: process.cwd(),
      encoding: 'utf8',
      maxBuffer: 32 * 1024 * 1024,
    });
  } catch (e: any) {
    // The census throws rather than running blind (e.g. if gate-25's ALLOW block stops
    // parsing). Surface that as a gate failure, never as zero findings.
    throw new Error(`component_token_census.mjs failed — refusing to report a green: ${e.message}`);
  }
  return JSON.parse(raw) as Census;
}

test.describe('gate-40 — component token census', () => {
  test('G40a: the census actually measured a frame (coverage floor, not > 0)', () => {
    const census = runCensus();
    expect(
      census.frameSize,
      `census frame is ${census.frameSize}, below the floor of ${FRAME_FLOOR}. This is almost ` +
        `certainly a broken walk (moved directory, changed extension, wrong cwd), not a genuinely ` +
        `tiny site — and a broken walk reports every family as clean.`,
    ).toBeGreaterThanOrEqual(FRAME_FLOOR);
    expect(census.results.length).toBe(census.frameSize);
  });

  test('G40b: no untokenized literal in any component or layout', () => {
    const census = runCensus();
    const dirty = census.results.filter((r) => r.findings.length > 0);
    const detail = dirty
      .map((r) => {
        const byFam: Record<string, string[]> = {};
        for (const f of r.findings) (byFam[f.family] ||= []).push(f.value);
        const fams = Object.entries(byFam)
          .map(([fam, vals]) => `      ${fam}: ${[...new Set(vals)].join(' · ')}`)
          .join('\n');
        return `  ${r.file} (${r.findings.length})\n${fams}`;
      })
      .join('\n');
    expect(
      dirty.length,
      `${dirty.length} file(s) carry a literal where a token exists:\n${detail}\n\n` +
        `Fix by using the token. If the literal is genuinely correct — an SVG user unit, an ` +
        `elevation no --shadow-* token matches — add it to EXCLUSIONS in ` +
        `scripts/component_token_census.mjs WITH ITS REASON. Exclusions are declared and ` +
        `reported, so a reader can tell an exclusion from an oversight.`,
    ).toBe(0);
  });

  test('G40c: the six token families are all still being checked', () => {
    // ⭐ The defect this catches is the one that MOTIVATED the gate, turned on the gate
    // itself: a family silently stopping being measured looks identical to a family with
    // no drift. Both report zero. G40b alone cannot tell them apart — so the families the
    // census knows about are asserted by name, and dropping one is a gate failure.
    const census = runCensus();
    const EXPECTED = ['colour', 'type', 'radius', 'shadow', 'weight', 'spacing'];
    const source = execFileSync('node', ['-e', "process.stdout.write(require('fs').readFileSync('scripts/component_token_census.mjs','utf8'))"], {
      cwd: process.cwd(),
      encoding: 'utf8',
    });
    const missing = EXPECTED.filter((fam) => !source.includes(`family: '${fam}'`));
    expect(
      missing,
      `the census no longer emits ${missing.join(', ')} — a family that stops being measured ` +
        `reports zero findings, which is indistinguishable from a family that has not drifted. ` +
        `That confusion is the exact thing this gate was created to end.`,
    ).toEqual([]);
  });
});
