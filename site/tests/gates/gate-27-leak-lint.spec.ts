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

/**
 * HAUSSMANN P3.1 — DERIVED SURFACES INHERIT THE ALLOWANCES OF WHAT THEY DERIVE FROM.
 *
 * The site gained two kinds of surface that are not pages but carry page text verbatim:
 * `.md` twins (one per content URL) and `llms-full.txt` (all of them concatenated). This gate's
 * allowlist is surface-scoped AND token-scoped, so on their first run the twins arrived with no
 * allowances at all and the corpus reported 95 "new" leaks — every one of them text that already
 * passed this gate on the page it came from, under an entry like `learn/** · op_codename`.
 *
 * Baselining them was explicitly not an option (the baseline was retired at P1.3 and must stay
 * empty), and neither was exempting the surfaces — 221 unlinted public files is the hole, not the
 * fix. The right model is that a twin is not a new CLAIM, it is the same claim in another
 * encoding, so it should be judged by the same rule:
 *
 *   learn/concepts/triad.md  → judged as  learn/concepts/triad/index.html
 *   index.md                 → judged as  index.html
 *   llms-full.txt            → the UNION of every page's allowances
 *
 * The union is sound rather than permissive: the corpus contains only text that appears on some
 * page, so a token no page ever cleared is granted by no entry and still fires here — and fires
 * on its own page too, where it is attributable. What the union prevents is one aggregate surface
 * re-litigating 19 decisions already made page by page.
 *
 * `llms.txt` is NOT in this map. It is authored, not derived — its words are chosen by
 * `llms.txt.ts`, so it answers for them itself. `llms-full.txt` is BOTH: an authored header and a
 * derived body, split at the first section rule and judged separately (see scanFindings).
 *
 * THE GAP THIS MODEL HAD, AND HOW IT WAS FOUND. Red-testing the change caught it: a novel
 * `idea_upstream_totally_new_thing_nobody_allowed` injected into the corpus did NOT fire, because
 * the allowlist grants by prefix (`idea_upstream_`) and the union made every page's prefix grant
 * apply corpus-wide. For the corpus BODY that is tolerable — the body is a concatenation of twins,
 * so any leak in it also exists on a page, where it fires and is correctly attributed. But the
 * HEADER has no page behind it, so a union there would have exempted authored text from the lint
 * entirely. Hence the split: derived text inherits, authored text answers for itself.
 */
const CORPUS = 'llms-full.txt';

const allowanceSurface = (file: string): string => {
  if (file === CORPUS) return '**';
  if (!file.endsWith('.md')) return file;
  return file === 'index.md' ? 'index.html' : `${file.slice(0, -3)}/index.html`;
};

const isAllowed = (file: string, patternId: string, token: string) => {
  const surface = allowanceSurface(file);
  return allowlist.some(
    (e) =>
      e.pattern === patternId &&
      (surface === '**' ? true : surfaceMatches(e.surface, surface)) &&
      e.tokens.some((t) => token === t || token.startsWith(t)),
  );
};

function scanTargets(): string[] {
  const out: string[] = [];
  const walk = (dir: string) => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, e.name);
      if (e.isDirectory()) walk(p);
      // HAUSSMANN P3.1: `.md` twins are public surfaces too. Adding them here is the point of the
      // change — the twins arrived as 221 files this gate could not see, which is a bigger hole
      // than any single leak it was written to catch. Their allowances resolve through
      // allowanceSurface() above, so a twin is held to its page's standard, no looser.
      // ⛩ HAUSSMANN P4.4a A1 / F-i — `.json` ADDED. The P3.2 registry endpoints
      // (`/vaults.json`, `/api/registry.v1.json`) are 81 KB of published surface each and were
      // INVISIBLE to this gate, because the filter listed the two extensions that existed when it
      // was written. That is the IDENTICAL hole P3.1 found when 221 `.md` twins arrived unseen,
      // recurring one mission later in a new extension — the filter is an allowlist of encodings,
      // so every new encoding is unlinted by default and nothing announces it.
      //
      // MEASURED before widening, not assumed (all three files, gate's own patterns + allowances):
      //   vaults.json             18 hits — raw_enum only, 7 distinct tokens
      //   api/registry.v1.json    18 hits — raw_enum only, 7 distinct tokens (byte-identical file)
      //   community/proposals.json  0 hits — clean, needs no allowance at all
      // Every other pattern — internal paths, mission ids, codenames, truncated ledes — finds
      // NOTHING in these files and therefore applies to them in full, at zero cost. Scoping the
      // enums is the whole price of admission.
      else if (e.name.endsWith('.html') || e.name.endsWith('.md') || e.name.endsWith('.json')) out.push(p);
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
    const raw = readFileSync(abs, 'utf8');

    // The corpus is scanned as two surfaces. Its authored header is judged strictly, as itself;
    // its derived body inherits the union (see allowanceSurface). Splitting at the first section
    // rule keeps authored text inside the lint instead of behind the union's skirts.
    const units: { surfaceFile: string; text: string }[] =
      file === CORPUS
        ? (() => {
            const at = raw.search(/^## https:\/\/adna\.network/m);
            return at === -1
              ? [{ surfaceFile: `${CORPUS}#header`, text: raw }]
              : [
                  { surfaceFile: `${CORPUS}#header`, text: raw.slice(0, at) },
                  { surfaceFile: CORPUS, text: raw.slice(at) },
                ];
          })()
        : [{ surfaceFile: file, text: raw }];

    for (const unit of units) scanUnit(unit.surfaceFile, unit.text, findings);
  }
  return findings;
}

function scanUnit(file: string, text: string, findings: Finding[]): void {
  {
    for (const p of patterns) {
      const re = new RegExp(p.regex, p.flags.includes('g') ? p.flags : `${p.flags}g`);
      // HAUSSMANN P3.1: collapse internal whitespace in the matched token before judging it.
      // A leak is about content, not line wrapping — and the two encodings differ here. HTML
      // collapses whitespace when rendered, so `Operation Rosetta` broken across a source line
      // reaches this gate as one token from a page; the markdown twin preserves the break and
      // arrives as `"Operation\n    Rosetta"`, which no allowlist entry can match. Without this,
      // the same sentence is cleared on the page and reported as a new leak on its own twin.
      const hits = (text.match(re) || [])
        .map((h) => h.replace(/\s+/g, ' '))
        .filter((h) => !isAllowed(file, p.id, h));
      if (hits.length) findings.push({ file, pattern: p.id, count: hits.length, tokens: [...new Set(hits)].sort() });
    }
  }
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

  /* ⛩ HAUSSMANN P4.4a A1 / F-i — THE WIDENING DEFENDS ITSELF.
   *
   * Twice now this gate has been silently narrower than the site: 221 `.md` twins arrived unseen
   * (P3.1), then two 81 KB `.json` endpoints did (P3.2 → F-i). Both times the hole was invisible
   * because a filter that omits an encoding LOOKS EXACTLY LIKE a filter that has nothing to find.
   *
   * So the published machine surfaces are named here. Deleting `.json` from scanTargets() now
   * turns THIS test red instead of quietly re-opening the hole — the fix has to survive the next
   * person who does not know why it is there. Note this asserts REACH, not cleanliness: the leak
   * assertion below is what judges their contents.
   */
  const published = ['vaults.json', 'api/registry.v1.json'];
  const rel = targets.map((t) => relative(DIST, t));
  for (const f of published) {
    expect(
      rel.includes(f),
      `${f} is published (81 KB of machine surface) but is NOT in this gate's scan — ` +
        'the extension filter has narrowed. See the F-i note in scanTargets().',
    ).toBe(true);
  }
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

// ── The retired debt: the empty baseline is now a HARD gate ───────────────────
// P1.3 (2026-08-16) cleared the 2026-08-16 H13 debt (86 rows / 563 occurrences): the projection
// derives leak-free copy at the generator, the templates render public labels, and the two
// content stragglers were fixed at source. The former `test.fail()` expected-failure annotation
// is dropped per its own retirement instruction — from here, ANY leak on ANY public surface is
// a hard failure the moment it lands. Fix the copy or the generator; deliberate public copy
// goes in the token-scoped allowlist, never back into a baseline.

test('G-leak: the leak baseline stays empty (debt retired at P1.3, 2026-08-16)', () => {
  expect(
    baseline,
    'leak_baseline.json has grown findings again — the baseline was retired at P1.3 and must stay empty; a new leak is fixed (or allowlisted, if deliberate public copy), never re-baselined',
  ).toEqual([]);
  const live = scanFindings();
  const occurrences = live.reduce((n, f) => n + f.count, 0);
  const files = new Set(live.map((f) => f.file)).size;
  expect(
    live,
    `${occurrences} internal-language leak(s) across ${files} built file(s) — zero tolerated since the P1.3 retirement (2026-08-16).\n` +
      `Fix the copy or the generator. If the text is DELIBERATE public copy, add a dated, token-scoped\n` +
      `entry to tests/gates/fixtures/leak_allowlist.json with a rationale.`,
  ).toEqual([]);
});
