/**
 * Gate 45 — Assistive-technology traversal  (HAUSSMANN P4.3 O0, AC1 + AC7)
 *
 * Criterion: what a screen reader ANNOUNCES, and IN WHAT ORDER, on the five AC1 surfaces —
 * plus whether the registry's live region actually speaks when the result set changes (AC7).
 *
 * ─── WHAT THIS GATE DOES *NOT* DO ────────────────────────────────────────────────────────────
 * It does not re-test anything `gate-4` already gates. gate-4 runs axe (`wcag2a`, `wcag2aa`,
 * `best-practice`) over 23 pages × 2 themes and therefore already covers link-name, button-name,
 * landmark rules, `page-has-heading-one`, and `bypass`. Duplicating those here would add assertions
 * and no coverage.
 *
 * The delta this gate adds is the one axe structurally cannot reach, and it is exactly the "manual
 * third" D11 is scored on:
 *   1. ORDER      — axe's `bypass` proves a skip mechanism EXISTS; it says nothing about it being
 *                   announced FIRST. A skip link that is last in the reading order passes `bypass`.
 *   2. PHRASING   — what the AT actually says (role prefixes, accessible names, heading levels),
 *                   not merely whether the underlying attributes are present.
 *   3. LIVE SPEECH— whether a dynamic announcement is SPOKEN. axe is a static-snapshot instrument
 *                   and cannot test this at all. This is AC7's whole question, and the residue
 *                   P4.2 deferred here BY NAME because "no grep was ever going to answer it".
 *
 * ─── BOUNDS, STATED ON THE INSTRUMENT'S FACE (convention: a gate must say what it did not read) ──
 * The virtual screen reader costs ~11 ms per traversal step, MEASURED on this node (300 steps =
 * 3,273 ms) — so a full walk of the homepage's tree exceeds a 30 s test timeout. This gate therefore
 * walks a BOUNDED OPENING of `OPENING_STEPS` phrases per surface and asserts only about the opening.
 * It is NOT a whole-document AT audit and must never be cited as one. Whole-document structural
 * coverage is gate-4's; the opening is where order defects live, and it is what a real user hits first.
 *
 * ⚠ `page.accessibility.snapshot()` — the obvious fast path to a whole-document tree — was REMOVED in
 * Playwright 1.59 (`TypeError: Cannot read properties of undefined (reading 'snapshot')`, measured
 * here before this design was chosen). The bound is a consequence of that removal, not a preference.
 *
 * Red-test: `scripts/at_traversal_redtest.sh` (mutations AND passing controls). A gate asserting
 * "the right things were announced" cannot, by itself, detect that it announced NOTHING — which is
 * why COVERAGE FLOORS are asserted here rather than `> 0`.
 */
import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const require_ = createRequire(import.meta.url);
const VSR_SRC = readFileSync(
  require_.resolve('@guidepup/virtual-screen-reader/browser.js'),
  'utf8',
);

/** Bounded opening walk. ~11 ms/step measured ⇒ ~0.7 s per surface. */
const OPENING_STEPS = 60;
/** A real opening must produce at least this many distinct phrases, or the instrument read nothing. */
const MIN_OPENING_PHRASES = 25;

const SURFACES = [
  { name: 'home', path: '/' },
  { name: 'get-started', path: '/get-started' },
  { name: 'reference', path: '/reference/specification' },
  { name: 'registry', path: '/vaults' },
  { name: 'graph', path: '/vaults/graph/' },
];

/** Inject the virtual screen reader same-origin and expose it. */
async function installVsr(page: import('@playwright/test').Page) {
  await page.route('**/__vsr.js', (route) =>
    route.fulfill({ contentType: 'application/javascript', body: VSR_SRC }),
  );
  await page.addInitScript(() => {
    (window as any).__vsrReady = false;
  });
}

async function bootVsr(page: import('@playwright/test').Page) {
  await page.addScriptTag({
    type: 'module',
    content: `import { virtual } from '/__vsr.js'; window.__virtual = virtual; window.__vsrReady = true;`,
  });
  await page.waitForFunction(() => (window as any).__vsrReady === true, null, { timeout: 20_000 });
}

/** Walk a bounded opening and return every phrase spoken. */
async function speakOpening(page: import('@playwright/test').Page, steps: number) {
  return page.evaluate(async (n) => {
    const v = (window as any).__virtual;
    await v.start({ container: document.body });
    for (let i = 0; i < n; i++) await v.next();
    const log: string[] = await v.spokenPhraseLog();
    await v.stop();
    return log;
  }, steps);
}

for (const { name, path } of SURFACES) {
  test(`G45 AT [${name}]: the document OPENS correctly for a screen reader (${path})`, async ({
    page,
  }) => {
    test.setTimeout(90_000);
    await installVsr(page);
    await page.goto(path, { waitUntil: 'networkidle' });
    await bootVsr(page);

    const log = await speakOpening(page, OPENING_STEPS);

    // COVERAGE FLOOR FIRST. Every assertion below is about the CONTENT of the opening; none of them
    // can tell a clean opening from an opening that was never read. This one can.
    expect(
      log.length,
      `the AT read only ${log.length} phrases on ${path} — below the floor of ${MIN_OPENING_PHRASES}, ` +
        `so every assertion after this one would be vacuous`,
    ).toBeGreaterThanOrEqual(MIN_OPENING_PHRASES);

    // 1. ORDER — the skip link is the FIRST thing announced. axe's `bypass` cannot see this.
    //
    // ⚠ `spokenPhraseLog()[0]` is "document" — the virtual reader announces the container root on
    // start(), before any next(). MEASURED here, after this assertion was first written against
    // index 0 and failed on all five surfaces. The site was right; the instrument was wrong. So the
    // claim is made against the first CONTENT phrase, which is also what the assertion always meant.
    const contentLog = log.filter((p) => p !== 'document');
    expect(
      contentLog[0],
      `the first phrase a screen-reader user hears on ${path} was "${contentLog[0]}", not the skip link`,
    ).toMatch(/^link, Skip to main content$/i);

    // 2. PHRASING — the page's landmarks are announced, by role, in the opening.
    const opening = log.join('\n');
    expect(opening, `no "banner" landmark announced in the opening of ${path}`).toMatch(/^banner\b/m);
    expect(opening, `no "navigation" landmark announced in the opening of ${path}`).toMatch(
      /^navigation\b/m,
    );
  });
}

test('G45 AT [registry]: the result-count live region is SPOKEN when filtering changes the set (AC7)', async ({
  page,
}) => {
  test.setTimeout(90_000);
  await installVsr(page);
  await page.goto('/vaults', { waitUntil: 'networkidle' });
  await bootVsr(page);

  // The region exists and is a live status region — the half P4.2 already established [D].
  const region = page.locator('.vaults-result-count');
  await expect(region).toHaveAttribute('role', 'status');
  await expect(region).toHaveAttribute('aria-live', 'polite');

  // ⭐ AC7's ACTUAL question, and the one no grep answers: is the announcement USEFUL, or merely
  // PRESENT? Drive a query that matches nothing and require that the AT SPEAKS a zero-result message.
  const spoken = await page.evaluate(async () => {
    const v = (window as any).__virtual;
    await v.start({ container: document.body });

    // Step the reader before driving the change. This mirrors a real user (who arrives, moves, then
    // filters) and it is also load-bearing: driving the input in the same microtask burst as start()
    // produced an EMPTY capture — indistinguishable from a silent region — because the reader's
    // observer had not settled. MEASURED, by isolating this single variable against a probe that worked.
    for (let i = 0; i < 4; i++) await v.next();

    // ⭐⭐ SNAPSHOT WITH A SPREAD — `spokenPhraseLog()` returns a LIVE REFERENCE to the reader's
    // internal array, not a copy. Held by reference, `before` and `after` are the SAME OBJECT, so
    // `after.length > before.length` is never true and `after.slice(before.length)` is always `[]`.
    // This gate reported "the live region was never announced" against a region that was announcing
    // correctly the whole time — a verifier comparing a value to ITSELF, which can only ever report
    // "no change". The site was right; the instrument was wrong. (Sixth sighting of that class in
    // this campaign, and the first where the defect was a JavaScript aliasing bug rather than a
    // scope or tag-set mistake.)
    const before: string[] = [...(await v.spokenPhraseLog())];

    const input = document.querySelector('#vault-search') as HTMLInputElement;
    input.value = 'zzzznomatchzzzz';
    input.dispatchEvent(new Event('input', { bubbles: true }));

    // POLL for the announcement rather than sleeping a fixed interval. A fixed 600 ms was the
    // first draft and it produced an empty capture that looked exactly like "the region is silent"
    // — a timing flake wearing the costume of a real defect. Polling makes a genuine silence take
    // the full budget and a working region return immediately.
    let after: string[] = before;
    for (let i = 0; i < 40; i++) {
      await new Promise((r) => setTimeout(r, 100));
      after = [...(await v.spokenPhraseLog())]; // snapshot — see the aliasing note above
      if (after.length > before.length) break;
    }
    const text = (document.querySelector('.vaults-result-count') as HTMLElement)?.textContent ?? '';
    await v.stop();
    return { added: after.slice(before.length), regionText: text };
  });

  // The region must actually carry a zero-result message — "present but empty" is the failure P4.2
  // could see; "present, populated, and silent" is the one only an AT instrument can.
  expect(
    spoken.regionText,
    'filtering to a no-match query left the live region empty — the result set changed in silence',
  ).toMatch(/nothing matched/i);

  expect(
    spoken.added.join('\n'),
    `the live region's update was never announced. Spoken after the filter: ${JSON.stringify(spoken.added)}`,
  ).toMatch(/nothing matched/i);
});
