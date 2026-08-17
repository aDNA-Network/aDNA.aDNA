/**
 * Gate 27 — Internal-language leak lint  (HAUSSMANN P0.5, editorial gate O2)
 *
 * Criterion: no internal operational language reaches a public surface. gate-16
 * sanitizes META only, by design ("body content is intentionally out of scope").
 * The B5 evidence showed that scoping is now too narrow: **58 of 74 vault pages
 * (78%) leak internal language in BODY copy** — release-train codes ("Production
 * Tidy pt08"), raw enum values ("Persona: tbd_at_p0"), internal code paths, the
 * operator's machine name, operation codenames, and ledes clipped mid-parenthetical
 * ("Web-stack cohort ("). This gate extends gate-16 past `<head>`, over every built
 * page plus the curated machine surfaces (llms.txt / llms-full.txt).
 *
 * The structural finding behind H13: public copy is GENERATED from internal
 * artifacts without an editorial gate. This is that gate.
 *
 * ── Three files, three different jobs ────────────────────────────────────────
 *   fixtures/leak_patterns.json   WHAT counts as a leak (+ per-pattern self-test)
 *   fixtures/leak_allowlist.json  PERMANENT reviewed exceptions, token-scoped + dated
 *   fixtures/leak_baseline.json   TODAY'S DEBT — dated, expires at P1.3
 *
 * BASELINE DISCIPLINE. The gate fails on any finding NOT in the baseline: a new leak
 * is blocked the moment it lands, while the 2026-08-16 backlog stays visible instead
 * of being silenced. Three ways to go red — a new (file, pattern) pair, a count above
 * the recorded ceiling, or a token never seen before on that surface. Counts falling
 * is progress and passes. One test asserts the baseline is EMPTY; it is annotated
 * `test.fail()` because it cannot pass today, so it reports as an expected failure —
 * and flips the suite RED as an unexpected pass the moment P1.3 clears the debt,
 * forcing the baseline's retirement rather than letting it calcify.
 *
 * Static scan of dist/ (assumes a fresh `npx astro build`) — same idiom as gate-14.
 * Regenerate the baseline: `node scripts/gen_leak_baseline.mjs` (`--check` for drift).
 * DETECTION ONLY: P0.5 does not touch copy; P1.1 (claims) + P1.3 (registry) fix it.
 */
import { test, expect } from '@playwright/test';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = join(process.cwd(), 'dist');
const FIX = join(process.cwd(), 'tests/gates/fixtures');

interface Pattern {
  id: string;
  regex: string;
  flags: string;
  why: string;
  example: string;
  counter_example: string;
}
interface AllowEntry {
  surface: string;
  pattern: string;
  tokens: string[];
  rationale: string;
  date: string;
  reviewed_by: string;
}
interface Finding {
  file: string;
  pattern: string;
  count: number;
  tokens: string[];
}

const patterns: Pattern[] = JSON.parse(readFileSync(join(FIX, 'leak_patterns.json'), 'utf8')).patterns;
const allowlist: AllowEntry[] = JSON.parse(readFileSync(join(FIX, 'leak_allowlist.json'), 'utf8')).entries;
const baselineDoc = JSON.parse(readFileSync(join(FIX, 'leak_baseline.json'), 'utf8'));
const baseline: Finding[] = baselineDoc.findings;

/** `**` suffix glob, or an exact path. Mirrors scripts/gen_leak_baseline.mjs. */
const surfaceMatches = (surface: string, file: string) =>
  surface === '**' ? true : surface.endsWith('/**') ? file.startsWith(surface.slice(0, -2)) : surface === file;

const isAllowed = (file: string, patternId: string, token: string) =>
  allowlist.some(
    (e) =>
      e.pattern === patternId &&
      surfaceMatches(e.surface, file) &&
      e.tokens.some((t) => token === t || token.startsWith(t)),
  );

function scanTargets(): string[] {
  const out: string[] = [];
  const walk = (dir: string) => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith('.html')) out.push(p);
    }
  };
  walk(DIST);
  for (const extra of ['llms.txt', 'llms-full.txt']) {
    const p = join(DIST, extra);
    if (existsSync(p)) out.push(p);
  }
  return out.sort();
}

function scanFindings(): Finding[] {
  const findings: Finding[] = [];
  for (const abs of scanTargets()) {
    const file = relative(DIST, abs);
    const text = readFileSync(abs, 'utf8');
    for (const p of patterns) {
      const re = new RegExp(p.regex, p.flags.includes('g') ? p.flags : `${p.flags}g`);
      const hits = (text.match(re) || []).filter((h) => !isAllowed(file, p.id, h));
      if (hits.length) findings.push({ file, pattern: p.id, count: hits.length, tokens: [...new Set(hits)].sort() });
    }
  }
  return findings;
}

// ── Instrument self-tests: a lint that cannot detect is not a gate ─────────────

test('G-leak: every pattern matches its example and spares its counter-example', () => {
  expect(patterns.length, 'leak_patterns.json defines no patterns').toBeGreaterThan(0);
  for (const p of patterns) {
    const re = new RegExp(p.regex, p.flags.replace('g', ''));
    expect(re.test(p.example), `pattern "${p.id}" no longer matches its own example — regex broken: ${p.regex}`).toBe(
      true,
    );
    expect(
      re.test(p.counter_example),
      `pattern "${p.id}" now matches its counter-example — it has loosened onto legitimate copy: ${p.counter_example}`,
    ).toBe(false);
  }
});

test('G-leak: the scan actually reaches the built surfaces', () => {
  expect(existsSync(DIST), 'dist/ missing — run `npx astro build` first').toBe(true);
  const targets = scanTargets();
  expect(targets.length, 'dist/ has almost no scannable output — stale or failed build').toBeGreaterThan(100);
  expect(
    targets.some((t) => t.endsWith('llms.txt')) && targets.some((t) => t.endsWith('llms-full.txt')),
    'the curated machine surfaces (llms.txt / llms-full.txt) are missing from dist/ — they are in scope for this gate',
  ).toBe(true);
});

test('G-leak: the allowlist stays a reviewed instrument (dated, token-scoped, justified)', () => {
  for (const e of allowlist) {
    expect(e.tokens?.length, `allowlist entry ${e.surface}/${e.pattern} has no tokens — blanket surface exemptions are forbidden`).toBeGreaterThan(0);
    expect(e.date, `allowlist entry ${e.surface}/${e.pattern} carries no date`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(
      (e.rationale || '').length,
      `allowlist entry ${e.surface}/${e.pattern} carries no rationale — an undocumented exception is a silent leak`,
    ).toBeGreaterThan(30);
    expect(
      patterns.some((p) => p.id === e.pattern),
      `allowlist entry names unknown pattern "${e.pattern}" — stale after a pattern rename`,
    ).toBe(true);
  }
});

test('G-leak: the baseline declares its expiry (it is debt, not permission)', () => {
  expect(baselineDoc.expires, 'leak_baseline.json must name the mission that retires it').toBeTruthy();
  expect(baselineDoc.generated, 'leak_baseline.json must be dated').toMatch(/^\d{4}-\d{2}-\d{2}$/);
  for (const f of baseline) {
    expect(
      patterns.some((p) => p.id === f.pattern),
      `baseline row ${f.file}/${f.pattern} names an unknown pattern — stale after a pattern rename`,
    ).toBe(true);
  }
});

// ── The ratchet: nothing new may leak ─────────────────────────────────────────

test('G-leak: no internal-language leak outside the dated baseline', () => {
  const key = (f: { file: string; pattern: string }) => `${f.file}::${f.pattern}`;
  const base = new Map(baseline.map((f) => [key(f), f]));
  const why = new Map(patterns.map((p) => [p.id, p.why]));
  const regressions: string[] = [];

  for (const f of scanFindings()) {
    const b = base.get(key(f));
    if (!b) {
      regressions.push(
        `NEW LEAK — ${f.file} [${f.pattern}] ×${f.count}: ${f.tokens.map((t) => JSON.stringify(t)).join(', ')}\n` +
          `    why this is a leak: ${why.get(f.pattern)}`,
      );
      continue;
    }
    if (f.count > b.count) {
      regressions.push(
        `LEAK GREW — ${f.file} [${f.pattern}]: ${b.count} recorded 2026-08-16, ${f.count} now (+${f.count - b.count})`,
      );
    }
    const novel = f.tokens.filter((t) => !b.tokens.includes(t));
    if (novel.length) {
      regressions.push(
        `NEW TOKEN — ${f.file} [${f.pattern}]: ${novel.map((t) => JSON.stringify(t)).join(', ')} not in the baseline for this surface`,
      );
    }
  }

  expect(
    regressions,
    `Internal language reached a public surface (H13 class).\n\n${regressions.join('\n')}\n\n` +
      `Fix the copy or the generator. If the text is DELIBERATE public copy, add a dated, token-scoped\n` +
      `entry to tests/gates/fixtures/leak_allowlist.json with a rationale — never to the baseline.`,
  ).toEqual([]);
});

// ── The tracked debt: expected failure until P1.3 ─────────────────────────────

test(`G-leak: the leak baseline is empty (expected failure until ${baselineDoc.expires})`, () => {
  test.fail(
    baseline.length > 0,
    `${baselineDoc.summary?.finding_rows ?? baseline.length} baseline rows recorded ${baselineDoc.generated}; retires at ${baselineDoc.expires}`,
  );
  const live = scanFindings();
  const occurrences = live.reduce((n, f) => n + f.count, 0);
  const files = new Set(live.map((f) => f.file)).size;
  expect(
    live,
    `${occurrences} internal-language leak(s) across ${files} built file(s) — the H13 debt recorded ${baselineDoc.generated}.\n` +
      `Retires at ${baselineDoc.expires} (${baselineDoc.expires_mission ?? 'see the campaign'}). When this test PASSES unexpectedly,\n` +
      `the debt is cleared: delete tests/gates/fixtures/leak_baseline.json's findings and drop the test.fail() annotation.`,
  ).toEqual([]);
});
