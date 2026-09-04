/**
 * Gate 23 — Hero claims (Operation Meridian M9, DP1 items 11–12; re-anchored HAUSSMANN P1.1)
 *
 * Criterion: the homepage fold carries the two load-bearing framing claims verbatim, and the
 * "demo-as-proof" NetworkDiagram is a real inline, no-JS-safe SVG — not a runtime-JS island.
 *   (a) A-11 functional-definition hero phrase: aDNA is "an open standard for organizing a
 *       project's files …" (the ADR-048 definition-as-hero lead, ratified at DP2 — HomeHero.astro
 *       `lead` default). P1.1 replaced the Meridian-era "project knowledge" phrasing; the old
 *       A-12 "open coordination protocol" gloss was claim-register row R-14 (FALSE — the protocol
 *       repos are private, counsel-gated) and is deliberately GONE.
 *   (b) Protocol positioning — INVERTED at HAUSSMANN P4.5a (⊳ D-C / claim register R-125).
 *       This clause used to require the trust-link's "opening progressively" phrasing as the
 *       fold's one embargo-safe Lattice Protocol mention. D-C ruled the TERM cut: it is named in
 *       the 30-second zone and defined nowhere, and the counsel embargo forbids defining it, so
 *       it cannot be repaired by explanation. The gate now asserts the term is ABSENT from all
 *       four routes that render HomeHero, and that the term-free replacement link is PRESENT so
 *       the cut cannot degrade into an empty trust row. The R-14 FALSE-gloss regression guard is
 *       kept as its own test — inverting (b) must not take that guard down with it, which is what
 *       deleting this clause would have done.
 *   (b2) R-120: the hero reframe must not tell a reader their context is both local and published.
 *   (c) The homepage NetworkDiagram renders as an inline SVG with real, selectable <text> node
 *       labels (>= 6) and is fully present with JavaScript DISABLED (the animation is JS-armed;
 *       the composed diagram is the no-JS default — the marquee "real relationships" proof).
 *
 * A regression that reworks the hero copy away from these phrases, or that reverts the marquee to
 * client-only rendering (invisible without JS), goes red here — before it reaches a first-time reader.
 *
 * Runtime gate — navigates the preview server. Source of truth for the copy:
 * src/components/sections/HomeHero.astro (lead/title defaults, not overridden by src/pages/index.astro)
 * + src/components/sections/NetworkDiagram.astro (figure.netdiagram / .netdiagram-svg, no-JS safe).
 * Auto-discovered by the playwright.config testDir glob; pairs with gate-11 (hero imagery) +
 * gate-22 (graph SSR). NOT @audit-tagged — fast, runs every gate pass.
 */
import { test, expect } from '@playwright/test';

// A distinctive, stable span of the A-11 functional definition (HomeHero.astro `lead`, ADR-048).
const A11_PHRASE = "open standard for organizing a project's files";
// The retired FALSE gloss (claim register R-14) — must never return to the page.
const PROTOCOL_FALSE_GLOSS = 'the open coordination protocol';

// ── HAUSSMANN P4.5a (⊳ D-C / R-125): the embargoed term, and what replaced it ──
// This gate used to REQUIRE the trust-link phrase "opening progressively". D-C cut the term it
// carried, so that assertion is INVERTED here rather than deleted — deleting the test would have
// silently taken the R-14 regression guard below with it.
const EMBARGOED_TERM = 'Lattice Protocol';
// The term-free replacement. Asserted PRESENT so the cut cannot degrade into an empty trust row:
// a deletion that also removes the hero's path to the spec is a different change than the one ruled.
const TRUST_LINK_REPLACEMENT = 'the standard, versioned and public';
// Every route that renders HomeHero. The term was hardcoded in BOTH arms of its `graphLed` branch,
// so a cut to one arm leaves it live on the other three — and /vaults is where the homepage's own
// primary CTA lands. Measured, not assumed: x1 on each of these four, 0 elsewhere.
const HOMEHERO_ROUTES = ['/', '/network/', '/commons/', '/vaults/'];

// ── HAUSSMANN P4.5a (R-120): the homepage 30-second-zone contradiction ──
// The reframe clause used to end "and shared in the open", whose grammatical subject is "Your
// context" — promising, two sentences after the NOT-line's local-storage reassurance, that the
// reader's notes are published. Openness now attaches to the standard instead.
// ⚠ Re-quoted at R-97 (2026-09-04, same-diff per ADR-057): this comment quoted the NOT-line as
// "nothing leaves your machine", which the ⛩ amendment retired as an unscoped absolute. ⭐ Worth
// knowing WHY both lines needed work: R-120 scoped the reframe correctly and nothing routed it to
// its sibling nine lines up, so the page carried the scoped claim and the absolute together for
// two weeks. The NOT-line is now pinned in gate-26's fixture (it was asserted by nothing at all).
const R120_RETIRED = 'and shared in the open';
// HAUSSMANN P4.5b O1 (2026-08-26) — re-pinned in the same commit as the copy change
// (same-diff, ADR-057). The reframe was rewritten for reading level; the R-120 REPAIR is
// untouched — openness still attaches to the standard and not to the reader's files, which
// is the whole point of the assertion. Only the phrasing moved:
//   was: "The standard that shapes it is open; your files stay on your machine."
//   now: "The standard that gives it that shape is open. Your files stay on your machine."
const R120_REPLACEMENT = 'The standard that gives it that shape is open';

// The homepage NetworkDiagram: an inline abstract-geometric SVG (NetworkDiagram.astro).
const NETDIAGRAM_SVG = 'figure.netdiagram svg.netdiagram-svg';

test('G-hero-claims: the homepage renders the A-11 functional-definition hero phrase', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.locator('.hero-lead'),
    'the A-11 functional-definition phrase (ADR-048 definition-as-hero) is absent from the hero lead',
  ).toContainText(A11_PHRASE);
});

test('G-hero-claims: the retired FALSE gloss stays gone (claim register R-14)', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.locator('body'),
    'the retired FALSE gloss "the open coordination protocol" (claim register R-14) has returned to the homepage',
  ).not.toContainText(PROTOCOL_FALSE_GLOSS);
});

// ── R-125 (⊳ D-C): the embargoed term is absent from every surface that renders the hero ──

for (const route of HOMEHERO_ROUTES) {
  test(`G-hero-claims: "${EMBARGOED_TERM}" is absent from the hero on ${route} (R-125, counsel embargo)`, async ({ page }) => {
    await page.goto(route);
    await expect(
      page.locator('body'),
      `claim register R-125 [S2] — "${EMBARGOED_TERM}" is on ${route} again.\n` +
        `  It is named in the 30-second zone and defined NOWHERE: /glossary/ returns 0 for "lattice",\n` +
        `  and all four /glossary/lattice* forms 404. Campaign constraint 9 (the counsel embargo)\n` +
        `  forbids defining or linking protocol material until D-8 rules, so it cannot be repaired by\n` +
        `  adding a definition — which is why ⊳ D-C ruled it CUT rather than explained.\n` +
        `  If counsel HAS ruled at D-8, this gate is the thing to change: restore the sentence in BOTH\n` +
        `  arms of HomeHero's graphLed branch and flip this assertion back to a presence check.`,
    ).not.toContainText(EMBARGOED_TERM);

    await expect(
      page.locator('.hero-trust-links'),
      `the hero trust-links on ${route} no longer carry the term-free replacement "${TRUST_LINK_REPLACEMENT}".\n` +
        `  R-125 removed a TERM, not the hero's path to the spec. An empty third trust slot is a\n` +
        `  different change than the one ruled — restore the link, or amend the ruling.`,
    ).toContainText(TRUST_LINK_REPLACEMENT);
  });
}

// ── R-120: the homepage 30-second zone says one thing about where files live ──

test('G-hero-claims: the fold does not promise the reader\'s context is both local and published (R-120)', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.locator('.hero-reframe'),
    'claim register R-120 [S2] — "and shared in the open" is back in the hero reframe. Its grammatical\n' +
      '  subject is "Your context", so the fold reads as promising that the reader\'s notes stay on their\n' +
      '  machine AND are published, two sentences apart. A clinician cold-reader called the pair\n' +
      '  disqualifying on its own. Attach openness to the standard, not to the reader\'s files.',
  ).not.toContainText(R120_RETIRED);
  await expect(
    page.locator('.hero-reframe'),
    'the R-120 repair is gone: the reframe no longer attaches openness to the standard. If the copy\n' +
      '  changed deliberately, update this constant in the SAME commit (same-diff law, ADR-057).',
  ).toContainText(R120_REPLACEMENT);
});

test('G-hero-claims: the NetworkDiagram is an inline SVG with real <text> labels, visible with JS DISABLED', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  try {
    const page = await context.newPage();
    await page.goto('/');

    // HAUSSMANN P1.4 (F3): the figure now ships a landscape + portrait twin-pair of the SAME
    // diagram, media-query-swapped at 768px so phone labels stay legible. Exactly two inline
    // SVGs — and exactly ONE displayed per viewport (the hidden twin is display:none, out of
    // the accessibility tree).
    const svg = page.locator(NETDIAGRAM_SVG);
    await expect(svg, 'expected the landscape + portrait NetworkDiagram twin-pair inline with JS disabled').toHaveCount(2);
    await expect(
      page.locator(`${NETDIAGRAM_SVG}:visible`),
      'exactly one NetworkDiagram variant should be displayed at desktop width',
    ).toHaveCount(1);
    await page.setViewportSize({ width: 375, height: 800 });
    await expect(
      page.locator(`figure.netdiagram svg.netdiagram-svg--portrait:visible`),
      'the portrait NetworkDiagram variant should be the one displayed at phone width (F3)',
    ).toHaveCount(1);

    // Real, selectable <text> node/hub labels — not <foreignObject> HTML, not runtime-injected.
    // Each twin carries its own full label set (>= 6 satellites + hub text).
    const labels = await page.locator(`${NETDIAGRAM_SVG} text`).count();
    expect(
      labels,
      `expected >= 12 real <text> labels across the NetworkDiagram twin-pair with JS disabled, got ${labels}`,
    ).toBeGreaterThanOrEqual(12);
    await expect(
      page.locator(`${NETDIAGRAM_SVG} foreignObject`),
      'NetworkDiagram uses <foreignObject> HTML labels, not real selectable <text>',
    ).toHaveCount(0);
  } finally {
    await context.close();
  }
});
