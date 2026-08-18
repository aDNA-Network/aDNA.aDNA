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
 *   (b) Embargo-safe protocol positioning: the fold's only Lattice Protocol mention is the
 *       trust-link's "opening progressively" phrasing (the honest pair from ADR-048) — never
 *       "open protocol". This test also guards the REGRESSION direction: the FALSE gloss must
 *       not return anywhere on the page.
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
// The embargo-safe protocol positioning (hero trust-link, ADR-048 pre-lift family).
const PROTOCOL_HONEST = 'opening progressively';
// The retired FALSE gloss (claim register R-14) — must never return to the page.
const PROTOCOL_FALSE_GLOSS = 'the open coordination protocol';

// The homepage NetworkDiagram: an inline abstract-geometric SVG (NetworkDiagram.astro).
const NETDIAGRAM_SVG = 'figure.netdiagram svg.netdiagram-svg';

test('G-hero-claims: the homepage renders the A-11 functional-definition hero phrase', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.locator('.hero-lead'),
    'the A-11 functional-definition phrase (ADR-048 definition-as-hero) is absent from the hero lead',
  ).toContainText(A11_PHRASE);
});

test('G-hero-claims: the fold carries the embargo-safe protocol positioning, and the FALSE gloss stays gone', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.locator('.hero-trust-links'),
    'the embargo-safe "opening progressively" protocol positioning is absent from the hero trust-links',
  ).toContainText(PROTOCOL_HONEST);
  await expect(
    page.locator('body'),
    'the retired FALSE gloss "the open coordination protocol" (claim register R-14) has returned to the homepage',
  ).not.toContainText(PROTOCOL_FALSE_GLOSS);
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
