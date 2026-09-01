/**
 * gate-33 — page freshness & provenance (HAUSSMANN P2.3 O2).
 *
 * D4's scoring called out that no page on this site carried a date or a way to change it. This
 * locks the fix in: every page rendered from a content entry ships a last-updated date and an
 * edit link, and both are true rather than decorative.
 *
 * The interesting assertion is the last one. The dates are derived from git at build time, and a
 * shallow clone (actions/checkout's default) makes git answer with one commit for every file —
 * so a careless setup produces a page full of confident, identical, wrong dates. contentSource.ts
 * omits rather than guesses, which converts that into "no dates anywhere". Both failure shapes are
 * silent in a browser, so the gate checks for both: dates must exist, and they must not all be
 * the same day.
 */
import { test, expect } from '@playwright/test';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = join(process.cwd(), 'dist');

function builtPages(): { route: string; html: string }[] {
  const out: { route: string; html: string }[] = [];
  (function walk(dir: string) {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name === 'index.html') {
        out.push({ route: '/' + p.slice(DIST.length + 1).replace(/index\.html$/, ''), html: readFileSync(p, 'utf8') });
      }
    }
  })(DIST);
  return out;
}

const pages = builtPages();
const withProvenance = pages.filter((p) => p.html.includes('doc-provenance'));

test.describe('gate-33 page freshness & provenance', () => {
  test.beforeAll(() => {
    if (!existsSync(DIST)) throw new Error('no dist/ — run `npx astro build`');
    if (pages.length === 0) throw new Error('walked dist/ and found no pages — refusing to report green');
  });

  test('content pages carry a provenance footer', () => {
    // Entry-rendered pages get it; hand-built index/landing pages have no single source file and
    // legitimately do not. The floor guards against the prop quietly stopping being passed.
    expect(
      withProvenance.length,
      'expected the provenance footer on the content corpus — is `source` still passed by the doc routes?',
    ).toBeGreaterThan(90);
  });

  test('every provenance footer carries a working edit link', () => {
    const bad: string[] = [];
    for (const p of withProvenance) {
      const href = /class="doc-provenance-edit"[^>]*href="([^"]+)"/.exec(p.html)?.[1]
        ?? /href="([^"]+)"[^>]*class="doc-provenance-edit"/.exec(p.html)?.[1];
      if (!href) { bad.push(`${p.route} — no edit link`); continue; }
      if (!/^https:\/\/github\.com\/aDNA-Network\//.test(href)) bad.push(`${p.route} — ${href}`);
    }
    expect(bad, `provenance footers with a missing or off-repo edit link:\n  ${bad.join('\n  ')}`).toEqual([]);
  });

  test('spec pages point at the standard, not at a generated file', () => {
    // src/content/spec/* is generated and specification.mdx is a mirror; an edit to either is
    // overwritten by the next projection run. Sending a contributor there would be a trap.
    const specPages = withProvenance.filter((p) => p.route.startsWith('/reference/specification/'));
    expect(specPages.length, 'expected the spec section pages to be built').toBeGreaterThan(19);
    const misdirected = specPages
      .filter((p) => !p.html.includes('/aDNA-Network/aDNA/blob/main/.adna/what/docs/adna_standard.md'))
      .map((p) => p.route);
    expect(
      misdirected,
      `spec pages whose edit link does not point at the normative standard: ${misdirected.join(', ')}`,
    ).toEqual([]);
  });

  test('dates are real: present, well-formed, and not all the same day', () => {
    const dates = withProvenance
      .map((p) => /<time datetime="([^"]+)"/.exec(p.html)?.[1])
      .filter((d): d is string => Boolean(d));

    // ⛩ HAUSSMANN GR-2 (F-x, debt (b)). This message used to read "a shallow git clone makes
    // contentSource.ts omit them; set fetch-depth: 0" — and it printed that for SEVEN consecutive
    // red runs on main while gates.yml:51 HAD ALREADY BEEN fetch-depth: 0 the entire time. The gate
    // was converting a symptom into a confident wrong diagnosis, which is worse than a bare failure.
    // (The count read "six" until O3 derived it at the object; the seventh red came from a DIFFERENT
    // machine, which is how we know nothing about one checkout was implicated. A carried count was
    // wrong again, and again in the direction of understatement.)
    //
    // It cannot know why git could not answer; the BUILD knows, and now says so. So the gate stops
    // guessing and points at the build's own diagnostic instead of prescribing a cure. Proven at
    // artifacts/gr_2/o1_redproof_record.md: a failing git that is provably NOT a shallow clone
    // reproduces this exact failure, message and all — and named at the object in CI at
    // artifacts/gr_2/o3_ci_reason_record.md: `fatal: detected dubious ownership`. The remedy is one
    // step in gates.yml (GR-2 O4), scoped to $GITHUB_WORKSPACE and never `*`.
    expect(
      dates.length,
      'no last-updated dates were rendered. contentSource.ts omits them rather than guessing, in ' +
        'THREE different situations — a shallow clone, a git that could not answer, and a git log ' +
        'that failed. They need different fixes and only one of them is fetch-depth. Read the ' +
        'build log: the build prints a "freshness:" line naming which one it hit and what git said.',
    ).toBeGreaterThan(90);

    const malformed = dates.filter((d) => !/^\d{4}-\d{2}-\d{2}$/.test(d));
    expect(malformed, `malformed dates: ${malformed.join(', ')}`).toEqual([]);

    // The shallow-clone tell. If git only knows one commit, every page reports it.
    expect(
      new Set(dates).size,
      'every page reports the same last-updated date — that is the shallow-clone signature, not the truth',
    ).toBeGreaterThan(1);
  });
});
