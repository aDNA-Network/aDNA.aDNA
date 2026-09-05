/**
 * gate-55 — CLIENT STORAGE TRUTH: the keys the site writes are the keys /privacy names.
 *
 * WHY IT EXISTS. /privacy carried "That is the only thing the site stores" — an unscoped absolute
 * about a COUNT — and the intro course shipped a second `localStorage` key, making it false. That is
 * the R-64 / R-97 / R-161 / R-167 over-promise class on a fifth surface, and on the trust page.
 *
 * ⭐ THE COPY WAS REWRITTEN TO ENUMERATE AND NEVER TOTAL, and this gate is what makes that mean
 * something. "The one thing" did not fail because its number was wrong; it failed because A COUNT IN
 * PROSE HAS NO MECHANISM KEEPING IT TRUE (KW-14). "Two things" would be the identical defect with a
 * different integer. So the page lists the keys, and this gate binds that list to what the built
 * bundles actually write — IN BOTH DIRECTIONS, because a page naming a retired key is also a false
 * claim, just a differently-shaped one.
 *
 * ⚠ SURFACE, NAMED (convention 18), and it differs per direction ON PURPOSE:
 *   - the CODE side reads `dist/` — the SHIPPED output, never `src/`. A key defined in `src/` and
 *     never bundled is not a key the site writes (gate-50's G50a records the same distinction:
 *     "an import removed from BaseLayout leaves the file in src/ and nothing in dist").
 *   - the PAGE side reads the `.md` TWIN, not the HTML. The claim's verb is "a reader encounters
 *     this key name" (convention 17's 2026-08-26 amendment: the surface must match the claim's verb).
 *
 * ⛔ THE EXTRACTION WAS DESIGNED AGAINST THE REAL BUNDLES, NOT ASSUMED — and the first design was
 * FALSIFIED BY THE MEASUREMENT. A `localStorage.setItem("<literal>")` pattern finds `theme` (an
 * inline script in all 229 pages) and MISSES `adna:course:v1` entirely: the bundler hoists it to
 * `const i={completed:[]},c="adna:course:v1"` and calls `localStorage.getItem(c)`. A gate shipped on
 * the literal-only pattern would have gone green while blind to the very key that motivated it —
 * B0's `control that passed for the wrong reason`. Hence the two-form resolver below, and hence
 * `unresolved` is an ASSERTED zero rather than a silent skip.
 */
import { test, expect } from '@playwright/test';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const TWIN = 'dist/privacy.md';

/* ⛔ EXCLUSIONS ARE PART OF THE CLAIM AND ARE ASSERTED, NOT ASSUMED (gate-48's ratified discipline).
   `localStorage` is a code span in this section and is the API's NAME, not a key it stores under.
   Anything added here narrows what G55b checks, so it is enumerated on the gate's face and pinned by
   G55d — moving an inconvenient span into this list is the cheapest possible way to fake this green. */
const NON_KEY_CODE_SPANS = ['localStorage'];

/* A floor, not a count. Without it a broken extractor writes an empty set and every assertion below
   passes vacuously — O1's self-test W8 ("a grep matching zero tests is a HARNESS ERROR, never a
   pass"). 2 = theme + the course key, the two that exist today; it RISES in the commit that adds a
   third, because a coverage floor goes stale the moment its subject grows (G53c's lesson). */
const MIN_KEYS = 2;

function walk(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, out);
    else if (p.endsWith('.html') || p.endsWith('.js')) out.push(p);
  }
  return out;
}

type Extraction = { keys: Set<string>; unresolved: string[]; filesScanned: number; filesWithStorage: number };

/** Extract the `localStorage` keys a shipped file writes or reads, in BOTH observed forms. */
function extractKeys(): Extraction {
  const keys = new Set<string>();
  const unresolved: string[] = [];
  const files = walk(DIST);
  let filesWithStorage = 0;

  for (const f of files) {
    const src = readFileSync(f, 'utf8');
    if (!src.includes('localStorage')) continue;
    filesWithStorage += 1;

    // Both forms in one pass: the argument is either a quoted literal or a bare identifier.
    const calls = src.matchAll(/localStorage\.(?:get|set|remove)Item\(\s*(['"`])([^'"`]*)\1|localStorage\.(?:get|set|remove)Item\(\s*([A-Za-z_$][\w$]*)/g);
    for (const m of calls) {
      if (m[2] !== undefined) {
        keys.add(m[2]); // form 1 — direct literal (the inline theme writer)
        continue;
      }
      // form 2 — hoisted identifier. Resolve it to a string literal WITHIN THE SAME FILE.
      // ⚠ Deliberately NOT requiring `const` adjacency: the real bundle declares it as the second
      // declarator of a multi-declarator const (`const i={...},c="adna:course:v1"`), so a
      // `const\s+c\s*=` pattern finds nothing and the key vanishes silently.
      const ident = m[3];
      const assigns = new Set<string>();
      for (const a of src.matchAll(new RegExp(`[,;{(\\s]${ident}\\s*=\\s*(['"\`])([^'"\`]*)\\1`, 'g'))) {
        assigns.add(a[2]);
      }
      // Exactly one string assignment ⇒ resolved. Zero or many ⇒ UNRESOLVED, recorded as its own
      // state. Guessing between candidates would put a key in the set that the code may not use, and
      // silently dropping it would hide a key the page must disclose. Both are worse than saying so.
      if (assigns.size === 1) keys.add([...assigns][0]);
      else unresolved.push(`${f}: localStorage…Item(${ident}) — ${assigns.size} string assignment(s) to "${ident}"`);
    }
  }
  return { keys, unresolved, filesScanned: files.length, filesWithStorage };
}

/** The storage section of /privacy's twin, and the code spans a reader meets inside it. */
function twinStorageSection(): { section: string; spans: string[] } {
  const md = readFileSync(TWIN, 'utf8');
  const lines = md.split('\n');
  const start = lines.findIndex((l) => /^##\s+.*stored in your browser/i.test(l));
  expect(start, `no "…stored in your browser" heading in ${TWIN} — the section this gate is about was renamed or removed, and a renamed section must move this gate in the same commit (ADR-057).`).toBeGreaterThanOrEqual(0);
  let end = lines.length;
  for (let i = start + 1; i < lines.length; i++) if (/^##\s/.test(lines[i])) { end = i; break; }
  const section = lines.slice(start, end).join('\n');
  const spans = [...section.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  return { section, spans };
}

test('G55a: every localStorage key the shipped site writes is named on /privacy', () => {
  const { keys, filesWithStorage } = extractKeys();
  const { section } = twinStorageSection();
  const undisclosed = [...keys].filter((k) => !section.includes(`\`${k}\``));
  expect(
    undisclosed,
    `${undisclosed.length} localStorage key(s) written by the shipped site but NOT named on /privacy's storage section: ${JSON.stringify(undisclosed)}. Extracted ${keys.size} key(s) from ${filesWithStorage} shipped file(s). /privacy tells readers what this site keeps on their machine; a key absent from that list makes the page false, which is the defect this gate exists for.`,
  ).toEqual([]);
});

test('G55b: every key /privacy names is actually written by the shipped site', () => {
  const { keys } = extractKeys();
  const { spans } = twinStorageSection();
  const claimed = spans.filter((s) => !NON_KEY_CODE_SPANS.includes(s));
  const phantom = claimed.filter((c) => !keys.has(c));
  expect(
    phantom,
    `/privacy names ${JSON.stringify(phantom)} as stored, but nothing in dist/ writes it. A page naming a RETIRED key is also a false claim — it just fails in the reassuring direction, so nothing else would ever catch it. (Excluded as non-keys: ${JSON.stringify(NON_KEY_CODE_SPANS)}.)`,
  ).toEqual([]);
});

test('G55c: the extraction is non-vacuous and fully resolved', () => {
  const { keys, unresolved, filesScanned, filesWithStorage } = extractKeys();

  // ⭐ THE CASE THAT MATTERS. Without this, a broken regex yields an empty set and G55a/G55b both
  // pass against nothing — "no violations" and "the instrument saw nothing" are different readings
  // and this is what separates them.
  expect(
    keys.size,
    `gate-55 extracted only ${keys.size} localStorage key(s) from ${filesWithStorage} shipped file(s) of ${filesScanned} scanned — expected at least ${MIN_KEYS}. Either the extraction broke, or a key stopped shipping. Both are real and they are different repairs; do not lower this floor to make it green.`,
  ).toBeGreaterThanOrEqual(MIN_KEYS);

  expect(
    unresolved,
    `${unresolved.length} localStorage call(s) whose key could not be resolved to a literal. An unresolved key is INVISIBLE to G55a, so it could be written and never disclosed while this gate stays green: ${JSON.stringify(unresolved, null, 2)}`,
  ).toEqual([]);
});

test('G55d: the non-key exclusion list is exactly what the gate declares', () => {
  // Pins the arithmetic of G55b's exclusion. Moving an inconvenient code span into NON_KEY_CODE_SPANS
  // is the cheapest way to fake G55b green, so the list is asserted rather than trusted — the
  // discipline gate-48's G48d established and gate-53's G53e reused.
  expect(
    NON_KEY_CODE_SPANS,
    'gate-55 excludes exactly one code span from G55b — `localStorage`, which is the browser API\'s name and not a key stored under it. Adding an entry here NARROWS what G55b checks, so it changes the claim and must be argued in the same commit.',
  ).toEqual(['localStorage']);
});
