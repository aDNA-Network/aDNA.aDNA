/**
 * Gate 26 — Claim register as a living fixture  (HAUSSMANN P0.5, editorial gate O1)
 *
 * Criterion: no claim outruns its evidence. The B5 register adjudicated 93 site
 * claims and found **8 FALSE** (S1, launch-blocking) — a protocol described as
 * "open" while its repos are private, vaults advertised as "all public" when 73/74
 * expose nothing, a contribution funnel pointing at a Discussions tab that does not
 * exist, and a **false control claim on the compliance page** ("every commit is
 * signed"). This gate turns that register from a document into a referee.
 *
 * Two directions, because a claim register has two failure modes:
 *   FALSE rows    → the quoted text must be ABSENT from the rendered page.
 *   verified rows → the quoted text must be PRESENT (currency). The honesty strata
 *                   ("stewarded today by one person", "not real named adopters",
 *                   "not a certified…") are exactly the sentences a growth-minded
 *                   rewrite deletes first; this gate makes their removal loud.
 *
 * EXPECTED FAILURE, DELIBERATELY. Every FALSE row carries `expected_fail_until:
 * "P1.1"` and is annotated `test.fail()`. P0.5 is detection-only — the copy fixes
 * are P1.1's lane — so today these tests fail, and Playwright reports them as
 * *expected failures*: the suite proves the gate catches the live defects without
 * going red on known debt. The moment P1.1 fixes the copy, each flips to an
 * **unexpected pass** and turns the suite RED until its row is cleaned out of the
 * fixture. The gate cannot be quietly outlived.
 *
 * A schema test enforces the pairing: `class: FALSE` without `expected_fail_until`
 * fails the suite outright — nobody can park a false claim behind a plain green test.
 *
 * Static scan of dist/ (assumes a fresh `npx astro build`) — same idiom as gate-14.
 * Complements gate-20, which traces claims to their SOURCE FILES; this one asserts
 * the RENDERED PAGE. Fixture: fixtures/claim_register.json (source of record:
 * how/campaigns/campaign_haussmann/evidence/claims/claim_register.md).
 */
import { test, expect } from '@playwright/test';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = join(process.cwd(), 'dist');
const FIXTURE = join(process.cwd(), 'tests/gates/fixtures/claim_register.json');

interface Row {
  id: string;
  url: string;
  quote: string;
  class: 'verified' | 'verifiable' | 'unsupported' | 'FALSE';
  expected_fail_until?: string;
  match_in?: 'text' | 'html';
  why: string;
  severity?: string;
}

const rows: Row[] = JSON.parse(readFileSync(FIXTURE, 'utf8')).rows;

/**
 * Typography-only normalization: curly quotes -> straight, em/en dash -> hyphen,
 * NBSP -> space, whitespace collapsed. A smart-quote swap must not fake a pass on a
 * FALSE row nor a failure on a verified one — the assertion is about the CLAIM, not
 * the punctuation that carries it.
 */
const norm = (s: string) =>
  s
    .replace(/[‘’‛]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[—–‑]/g, '-')
    .replace(/ /g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const distFileFor = (url: string) =>
  url === '/' ? join(DIST, 'index.html') : join(DIST, url.replace(/^\/|\/$/g, ''), 'index.html');

/**
 * Named entities this site emits, plus the near neighbours an editor is likely to
 * reach for next. Decoding is a SINGLE pass so `&amp;lt;` cannot double-decode.
 *
 * This map exists because a partial decoder is worse than none here: the first draft
 * of this gate handled `&quot;`/`&amp;` but not `&ldquo;`/`&mdash;`, and row R-61's
 * FALSE claim silently reported as ABSENT — a false pass on a launch blocker. The
 * companion test below fails if dist ever emits an entity this map does not know,
 * so the bug class cannot come back quietly.
 */
const ENTITIES: Record<string, string> = {
  quot: '"', apos: "'", amp: '&', lt: '<', gt: '>', nbsp: ' ', thinsp: ' ', ensp: ' ', emsp: ' ',
  copy: '(c)', reg: '(r)', trade: '(tm)', deg: 'deg', middot: '·', bull: '•', hellip: '…',
  mdash: '—', ndash: '–', minus: '-', lsquo: '‘', rsquo: '’', sbquo: '‚', ldquo: '“', rdquo: '”', bdquo: '„',
  laquo: '«', raquo: '»', prime: '′', Prime: '″', dagger: '†', Dagger: '‡', sect: '§', para: '¶', permil: '‰',
  rarr: '->', larr: '<-', uarr: '^', darr: 'v', harr: '<->', nearr: '↗', nwarr: '↖', searr: '↘', swarr: '↙',
  times: '×', divide: '÷', ne: '≠', le: '≤', ge: '≥', plusmn: '±', frac12: '½', frac14: '¼',
  euro: '€', pound: '£', yen: '¥', cent: '¢', shy: '', zwj: '', zwnj: '',
};

const decodeEntities = (s: string) =>
  s.replace(/&(#\d+|#[xX][0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]*);/g, (whole, body: string) => {
    if (body.startsWith('#x') || body.startsWith('#X')) return String.fromCodePoint(parseInt(body.slice(2), 16));
    if (body.startsWith('#')) return String.fromCodePoint(Number(body.slice(1)));
    return body in ENTITIES ? ENTITIES[body] : whole;
  });

/**
 * Markup stripped to bare text, entities still encoded. Scripts and styles go first —
 * minified JS is full of `&&m;`-shaped sequences that are not entities at all.
 */
const stripMarkup = (html: string) =>
  html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ');

/** Visible page text: scripts, styles and comments removed, tags flattened, entities decoded. */
const visibleText = (html: string) => norm(decodeEntities(stripMarkup(html)));

function haystack(row: Row): string {
  const f = distFileFor(row.url);
  if (!existsSync(f)) throw new Error(`claim row ${row.id} points at ${row.url}, which built no page at ${f}`);
  const raw = readFileSync(f, 'utf8');
  return row.match_in === 'html' ? norm(raw) : visibleText(raw);
}

// ── Schema rules: the fixture must stay honest about its own debt ──────────────

test('G-claim-register: the fixture covers the FALSE set and pairs every FALSE row with an expiry', () => {
  expect(existsSync(DIST), 'dist/ missing — run `npx astro build` first').toBe(true);
  expect(rows.length, 'claim_register.json has no rows').toBeGreaterThan(0);

  const falses = rows.filter((r) => r.class === 'FALSE');
  expect(
    falses.length,
    'the B5 register adjudicated 8 FALSE claims (R-14, R-20, R-23, R-46, R-47, R-61, R-84, R-90) — the fixture must carry them all',
  ).toBeGreaterThanOrEqual(8);

  for (const r of falses) {
    expect(
      r.expected_fail_until,
      `row ${r.id} is class FALSE but declares no expected_fail_until — a false claim may not sit behind a plain green test. ` +
        `Either annotate it with the mission that fixes it, or remove the row because the claim is gone.`,
    ).toBeTruthy();
  }
  for (const r of rows) {
    expect(r.why?.length, `row ${r.id} carries no rationale`).toBeGreaterThan(20);
    expect(['verified', 'verifiable', 'unsupported', 'FALSE']).toContain(r.class);
  }
  expect(
    rows.filter((r) => r.class === 'verified').length,
    'the fixture needs a representative verified set — otherwise it only ever proves the site is wrong, never that it is still right',
  ).toBeGreaterThanOrEqual(10);
});

test('G-claim-register: the entity decoder covers everything the build emits', () => {
  // Tripwire for the false-pass bug class: an unknown entity survives decoding as raw
  // `&foo;`, so a quote containing it can never match — and an absence assertion on a
  // FALSE claim would report a clean pass while the claim is still on the page.
  const unknown = new Set<string>();
  for (const r of rows) {
    const raw = existsSync(distFileFor(r.url)) ? readFileSync(distFileFor(r.url), 'utf8') : '';
    // Same surface the decoder sees — scripts/styles excluded, or minified JS (`u=h&&m;`)
    // reads as a mystery entity and the tripwire cries wolf.
    for (const m of stripMarkup(raw).matchAll(/&([a-zA-Z][a-zA-Z0-9]*);/g)) if (!(m[1] in ENTITIES)) unknown.add(m[1]);
  }
  expect(
    [...unknown],
    `pages under test emit named entities the decoder does not know: ${[...unknown].join(', ')}. ` +
      `Add them to ENTITIES — until then any claim quote containing one silently cannot match.`,
  ).toEqual([]);
});

test('G-claim-register: every row points at a page that actually built', () => {
  const missing = rows
    .filter((r) => !existsSync(distFileFor(r.url)))
    .map((r) => `${r.id} -> ${r.url} (expected ${distFileFor(r.url)})`);
  expect(missing, `claim rows point at routes with no built page (route renamed? same-diff law, ADR-057):\n${missing.join('\n')}`).toEqual(
    [],
  );
});

// ── FALSE rows: the claim must be gone ────────────────────────────────────────

for (const row of rows.filter((r) => r.class === 'FALSE')) {
  test(`G-claim-register: ${row.id} — FALSE claim absent from ${row.url}${row.expected_fail_until ? ` (expected failure until ${row.expected_fail_until})` : ''}`, () => {
    test.fail(Boolean(row.expected_fail_until), `register row ${row.id} is fixed at ${row.expected_fail_until}`);
    const found = haystack(row).includes(norm(row.quote));
    expect(
      found,
      `register row ${row.id} [${row.severity ?? 'S1'}] — FALSE claim still rendered on ${row.url}:\n` +
        `    "${row.quote}"\n` +
        `  why it is false: ${row.why}\n` +
        `  fix the copy, then delete row ${row.id} from tests/gates/fixtures/claim_register.json.`,
    ).toBe(false);
  });
}

// ── Verified rows: the claim must still be there ──────────────────────────────

for (const row of rows.filter((r) => r.class === 'verified')) {
  test(`G-claim-register: ${row.id} — verified claim still present on ${row.url}`, () => {
    const found = haystack(row).includes(norm(row.quote));
    expect(
      found,
      `register row ${row.id} — a VERIFIED claim vanished from ${row.url}:\n` +
        `    "${row.quote}"\n` +
        `  why it is load-bearing: ${row.why}\n` +
        `  if the copy changed deliberately, update the quote in the fixture in the SAME commit (same-diff law, ADR-057).`,
    ).toBe(true);
  });
}
