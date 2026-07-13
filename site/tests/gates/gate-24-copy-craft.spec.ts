/**
 * Gate 24 — Copy-craft lint  (Storyweave P5 M5.2 / B9)
 *
 * Criterion: no card excerpt on a `CardGrid` index page renders a raw-truncation or
 * raw-markdown artifact — an ASCII "..." (the mid-word cut that `excerpt()` replaces
 * with a word-safe Unicode "…"), or a literal "**" (unrendered Markdown bold). This
 * is the regression guard for the B9 excerpt/craft sweep: frontmatter `description`
 * fields were hard-cut to ~140 chars + "..." and shown verbatim on cards.
 *
 * Scope: rendered card text (`.card-title` / `.card-description`) on the CardGrid
 * index pages. It deliberately does NOT assert on `<meta name="description">` — the
 * 51-file frontmatter description regen (which would clean the detail-page meta too)
 * is a tracked B9 residual, not part of this increment. `excerpt()` fixes the visible
 * cards; this gate keeps them fixed.
 *
 * Note: the Unicode ellipsis "…" is the CORRECT output and must pass; only the ASCII
 * three-dot form is the defect. A single hyphen in prose is fine — only "**" and
 * "..." are asserted here (a legit em-dash "—" is untouched).
 */
import { test, expect } from '@playwright/test';

// Every CardGrid-backed collection index (the surfaces that map doc.data.description → cards).
const INDEX_PAGES = [
  '/use-cases/',
  '/reference/',
  '/patterns/',
  '/community/',
  '/adopters/',
  '/learn/comparisons/',
  '/learn/concepts/',
  '/learn/tutorials/',
  '/how/publishing/',
  '/how/workshops/',
  '/how/lattice-examples/',
];

for (const path of INDEX_PAGES) {
  test(`G24 copy-craft: cards on ${path} carry no "..." / "**" artifact`, async ({ page }) => {
    await page.goto(path, { waitUntil: 'networkidle' });
    const texts = await page.$$eval('.card-title, .card-description', (els) =>
      els.map((e) => e.textContent ?? ''),
    );
    expect(texts.length, `no CardGrid cards found on ${path} — did the selector or page change?`).toBeGreaterThan(0);

    const bad = texts.filter((t) => t.includes('...') || t.includes('**'));
    expect(
      bad,
      `Card text with an ASCII "..." (use the word-safe excerpt()/Unicode "…") or a literal "**" on ${path}:\n${bad.join('\n')}`,
    ).toEqual([]);
  });
}
