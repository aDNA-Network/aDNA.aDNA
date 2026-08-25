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
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const GRAPH = '/vaults/graph/';
const SVG = '.mermaid-container svg[role="img"]';

/* ── P4.3 AC4 — TWIN EDGE EQUIVALENCE ──────────────────────────────────────────────────────────
 * Until P4.3 this gate asserted the twin's ROSTER only: that the node list existed and named the
 * vaults. `machine_eye` 14 measured the consequence — a sighted reader saw the topology, an AT
 * reader got an alphabetised index — and D11 check 7 asks for a twin that is "genuinely equivalent,
 * not a partial listing". Equivalence means every edge the SVG draws is readable in the twin FROM
 * BOTH ENDS, with its direction distinguishable.
 *
 * The expected set is DERIVED from the registry, never literal-pinned (WebForge KW-8/FR-K): pin the
 * pairs and the gate passes forever against a twin that stopped updating. Slug canonicalization
 * mirrors `canonicalVaultSlug()` in src/data/vaults.ts — gate-30 asserts that function's shape, so
 * the two cannot drift silently.
 */
const SITE_ROOT = join(import.meta.dirname, '../..');
const canonical = (v: string) =>
  String(v).toLowerCase().replace(/\.adna$/, '').replace(/[^a-z0-9_-]/g, '_');
const registryEdges: { source: string; target: string; type: string }[] = JSON.parse(
  readFileSync(join(SITE_ROOT, 'src/data/vaults.json'), 'utf8'),
).edges.map((e: any) => ({ source: canonical(e.source), target: canonical(e.target), type: e.type }));

/** Edge types whose two ends mean different things — the ones a twin must not render symmetrically.
 *  `companion` is excluded because it IS symmetric by definition (a sibling persona-pair). */
const ASYMMETRIC = new Set(['umbrella', 'federation', 'partner', 'supersedes']);

/** Read the twin's relationship rows out of the DOM: slug → [{ phrase, href }]. */
async function readTwinRows(page: import('@playwright/test').Page) {
  return page.locator('.graph-node-list li.has-rels').evaluateAll((lis) =>
    lis.map((li) => ({
      slug: li.querySelector('a[data-slug]')?.getAttribute('data-slug') ?? '',
      rels: Array.from(li.querySelectorAll('.nodelist-rels .rel')).map((r) => ({
        // The connective words, with the linked vault name stripped off.
        phrase: (r.textContent ?? '').replace(r.querySelector('a')?.textContent ?? '', '')
          .replace(/^[\s—,]+/, '').trim(),
        href: r.querySelector('a')?.getAttribute('href') ?? '',
        hasDataSlug: r.querySelector('a')?.hasAttribute('data-slug') ?? false,
      })),
    })),
  );
}

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

test('G-graph-twin-edges: every registry edge is readable in the twin from BOTH ends', async ({ page }) => {
  await page.goto(GRAPH);
  const rows = await readTwinRows(page);
  const bySlug = new Map(rows.map((r) => [r.slug, r]));

  // ⚠ COVERAGE FLOOR FIRST. Every assertion below is about the CONTENT of the twin's relationship
  // rows, and not one of them can tell a correct twin from a twin that rendered no rows at all —
  // a `for` loop over an empty expected set is green. Convention 14: a gate reporting zero
  // violations cannot otherwise detect that it evaluated zero rules.
  expect(registryEdges.length, 'registry carries no edges — nothing to assert equivalence about').toBeGreaterThan(0);
  expect(rows.length, 'the twin rendered NO relationship rows — the gate would have passed vacuously').toBeGreaterThan(0);

  for (const e of registryEdges) {
    const src = bySlug.get(e.source);
    const tgt = bySlug.get(e.target);
    expect(src, `edge ${e.source} -${e.type}-> ${e.target}: no twin row for the source vault`).toBeTruthy();
    expect(tgt, `edge ${e.source} -${e.type}-> ${e.target}: no twin row for the target vault`).toBeTruthy();

    expect(
      src!.rels.map((r) => r.href),
      `edge ${e.source} -${e.type}-> ${e.target} is not readable from the SOURCE end`,
    ).toContain(`/vaults/${e.target}/`);
    expect(
      tgt!.rels.map((r) => r.href),
      `edge ${e.source} -${e.type}-> ${e.target} is not readable from the TARGET end (the twin lists it one-way)`,
    ).toContain(`/vaults/${e.source}/`);
  }

  // Exactly two renderings per edge — one at each end. Catches a twin that drops or doubles rows.
  const totalRels = rows.reduce((n, r) => n + r.rels.length, 0);
  expect(totalRels, 'relationship count is not 2x the edge count — the twin is not a faithful mirror')
    .toBe(registryEdges.length * 2);
});

test('G-graph-twin-edges: an asymmetric edge does NOT read the same at both ends', async ({ page }) => {
  await page.goto(GRAPH);
  const rows = await readTwinRows(page);
  const bySlug = new Map(rows.map((r) => [r.slug, r]));

  // This is the assertion that separates "equivalent" from "a list of neighbours". An umbrella edge
  // means `contains` at one end and `contained by` at the other; a twin that says "related to" in
  // both directions has enumerated the edges and LOST the topology.
  const asymmetric = registryEdges.filter((e) => ASYMMETRIC.has(e.type));
  expect(asymmetric.length, 'no asymmetric edges in the registry — this assertion evaluated nothing').toBeGreaterThan(0);

  for (const e of asymmetric) {
    const out = bySlug.get(e.source)!.rels.find((r) => r.href === `/vaults/${e.target}/`)!;
    const inc = bySlug.get(e.target)!.rels.find((r) => r.href === `/vaults/${e.source}/`)!;
    expect(out.phrase.length, `edge ${e.source} -${e.type}-> ${e.target}: source end has no connective phrase`).toBeGreaterThan(0);
    expect(inc.phrase.length, `edge ${e.source} -${e.type}-> ${e.target}: target end has no connective phrase`).toBeGreaterThan(0);
    expect(
      out.phrase,
      `edge ${e.source} -${e.type}-> ${e.target} reads "${out.phrase}" at BOTH ends — direction is not conveyed`,
    ).not.toBe(inc.phrase);
  }
});

test('G-graph-twin-edges: relationship links do not carry data-slug (round-trip pre-emption)', async ({ page }) => {
  await page.goto(GRAPH);
  const rows = await readTwinRows(page);
  // The `?focus=` round-trip resolves with querySelector, which returns the FIRST match. A
  // relationship link bearing data-slug could pre-empt the node row it points at, and the failure
  // would be a subtly wrong highlight rather than an error — invisible without this assertion.
  const offenders = rows.flatMap((r) => r.rels.filter((x) => x.hasDataSlug).map((x) => `${r.slug} -> ${x.href}`));
  expect(rows.reduce((n, r) => n + r.rels.length, 0), 'no relationship links found to check').toBeGreaterThan(0);
  expect(offenders, 'relationship links carry data-slug and can pre-empt the ?focus= round-trip').toEqual([]);
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
