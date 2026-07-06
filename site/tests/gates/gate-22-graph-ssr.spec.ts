/**
 * Gate 22 — Graph SSR (A-06 / Operation Meridian M8, Looking Glass pre-render lift)
 *
 * Criterion: /vaults/graph serves the network topology as an INLINE, pre-rendered static SVG —
 * not a client-rendered Mermaid diagram. The graph must be present, accessibly labelled, carry
 * real selectable <text>, and — the load-bearing assertion — render with JavaScript DISABLED.
 * A regression to client-only rendering (invisible without JS; a perf + a11y cost) goes red here.
 *
 * The committed artifact is authored by scripts/build_graph_svg.mjs (`npm run sync:graph`); the
 * page inlines it via a Vite `?raw` import. Runtime gate — navigates the preview server, so it
 * pairs with gate-4 (which axe-sweeps /vaults/graph in both colour modes). Auto-discovered by the
 * playwright.config testDir glob; no registration needed.
 */
import { test, expect } from '@playwright/test';

const GRAPH = '/vaults/graph/';
const SVG = '.mermaid-container svg[role="img"]';

test('G-graph-ssr: an inline role="img" SVG with an accessible <title> is served', async ({ page }) => {
  await page.goto(GRAPH);
  const svg = page.locator(SVG);
  await expect(svg, 'no inline <svg role="img"> in the graph container').toHaveCount(1);

  const title = page.locator(`${SVG} title`);
  await expect(title, 'the graph SVG has no <title>').toHaveCount(1);
  expect((await title.textContent())?.trim().length ?? 0, 'the graph SVG <title> is empty').toBeGreaterThan(0);

  // The <title>/<desc> are wired as the accessible name.
  expect(await svg.getAttribute('aria-labelledby'), 'the graph SVG has no aria-labelledby').toBeTruthy();

  // The former client-render trigger (the island's data-chart hook) must be gone.
  await expect(
    page.locator('.mermaid-container[data-chart]'),
    'a client-side mermaid render hook (data-chart) is still present — the route was not converted',
  ).toHaveCount(0);
});

test('G-graph-ssr: the SVG carries real, selectable <text> node labels (>= 30)', async ({ page }) => {
  await page.goto(GRAPH);
  const n = await page.locator(`${SVG} text`).count();
  expect(n, `expected >= 30 real <text> labels (68-vault graph), got ${n}`).toBeGreaterThanOrEqual(30);

  // No <foreignObject> — that would mean HTML labels leaked back in (unselectable, not real <text>).
  await expect(page.locator(`${SVG} foreignObject`), 'graph uses <foreignObject> labels, not real <text>').toHaveCount(0);
});

test('G-graph-ssr: the topology renders with JavaScript DISABLED', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  try {
    const page = await context.newPage();
    await page.goto(GRAPH);
    await expect(
      page.locator(SVG),
      'the graph SVG is absent with JS disabled — it is still being client-rendered',
    ).toHaveCount(1);
    const n = await page.locator(`${SVG} text`).count();
    expect(n, `no <text> labels with JS disabled (got ${n}) — the graph depends on runtime JS`).toBeGreaterThanOrEqual(30);
  } finally {
    await context.close();
  }
});
