/**
 * Gate 23 — Hero claims (Operation Meridian M9, DP1 items 11–12)
 *
 * Criterion: the homepage fold carries the two load-bearing framing claims verbatim, and the
 * "demo-as-proof" NetworkDiagram is a real inline, no-JS-safe SVG — not a runtime-JS island.
 *   (a) A-11 functional-definition hero phrase: aDNA is "an open standard for organizing project
 *       knowledge …" (the anti-jargon, what-it-actually-is line — HomeHero.astro `lead` default).
 *   (b) A-12 gloss: the Lattice Protocol is "the open coordination protocol underneath" (the
 *       plain-language positioning of the substrate the network is built on).
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

// A distinctive, stable span of the A-11 functional definition (HomeHero.astro `lead`).
const A11_PHRASE = 'open standard for organizing project knowledge';
// The A-12 gloss for the Lattice Protocol (HomeHero.astro `lead`, verbatim).
const A12_GLOSS = 'the open coordination protocol underneath';

// The homepage NetworkDiagram: an inline abstract-geometric SVG (NetworkDiagram.astro).
const NETDIAGRAM_SVG = 'figure.netdiagram svg.netdiagram-svg';

test('G-hero-claims: the homepage renders the A-11 functional-definition hero phrase', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.locator('.hero-lead'),
    'the A-11 functional-definition phrase is absent from the hero lead',
  ).toContainText(A11_PHRASE);
});

test('G-hero-claims: the homepage renders the A-12 Lattice Protocol gloss', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.locator('.hero-lead'),
    'the A-12 "open coordination protocol underneath" gloss is absent from the hero lead',
  ).toContainText(A12_GLOSS);
});

test('G-hero-claims: the NetworkDiagram is an inline SVG with real <text> labels, visible with JS DISABLED', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  try {
    const page = await context.newPage();
    await page.goto('/');

    const svg = page.locator(NETDIAGRAM_SVG);
    await expect(svg, 'no inline NetworkDiagram SVG on the homepage with JS disabled').toHaveCount(1);

    // Real, selectable <text> node/hub labels — not <foreignObject> HTML, not runtime-injected.
    const labels = await page.locator(`${NETDIAGRAM_SVG} text`).count();
    expect(
      labels,
      `expected >= 6 real <text> labels in the NetworkDiagram with JS disabled, got ${labels}`,
    ).toBeGreaterThanOrEqual(6);
    await expect(
      page.locator(`${NETDIAGRAM_SVG} foreignObject`),
      'NetworkDiagram uses <foreignObject> HTML labels, not real selectable <text>',
    ).toHaveCount(0);
  } finally {
    await context.close();
  }
});
