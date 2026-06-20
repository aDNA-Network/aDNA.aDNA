/**
 * Gate 19 — Lighthouse Core-Web-Vitals budget  (WEBSITE TOOLING-PROMOTION gate **G1**)
 *
 * Criterion: the `/vaults/graph` flagship route must hold the CWV "Good band" as NUMBERS, not a composite
 * score — **LCP < 2.5s · CLS < 0.1 · Performance ≥ 90**. This is the standing guard for finding **H-11**
 * (D4 C5): the graph renders Mermaid CLIENT-side (a ~45KB code-split dynamic import, below the fold), and
 * the measured perf is excellent (LCP ~0.45s, CLS ~0.0001, Perf 100) — so H-11's prescribed SSR-prerender
 * was unnecessary (the goal was already met). This gate LOCKS that in: if a future change regresses the
 * graph's perf, the build fails here instead of shipping silently.
 *
 * PATTERN: a pure FIXTURE read (no live server) — it asserts against a COMMITTED slim budget fixture at
 * `tests/gates/fixtures/lighthouse_d4c5_graph.json` (the install-truth fixture-gate convention, gate-12).
 * The full raw Lighthouse run is archived LOCAL-ONLY at `site/evidence/lighthouse_d4c5_graph.json`
 * (`evidence/` is gitignored); the slim fixture carries the asserted numbers + provenance so the gate stays
 * green on a fresh checkout. The Lighthouse RUN is a manual/CI step (`npm run preview` → lighthouse desktop
 * on /vaults/graph → regenerate both files); re-run when the graph page changes.
 *
 * Required (NOT @audit): a perf budget is a standing invariant, so it runs under both `test:gates` and
 * `test:gates:fast`. Complements gate-10 (which checks structural perf invariants — image formats, no
 * render-blocking scripts), not a duplicate.
 *
 * Read the fixture with fs + fileURLToPath (consistent with the audit-sweep evidence reads).
 */
import { test, expect } from '@playwright/test';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const LH_FIXTURE = 'lighthouse_d4c5_graph.json';
const FIXTURE_PATH = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'fixtures', LH_FIXTURE);
const EXPECT_ROUTE = '/vaults/graph';
const BUDGET = { lcpMaxMs: 2500, clsMax: 0.1, perfMin: 0.9 };

test('G1 Lighthouse budget: /vaults/graph fixture meets LCP/CLS/Perf budget', () => {
  expect(
    fs.existsSync(FIXTURE_PATH),
    `Missing LH fixture ${LH_FIXTURE} — run Lighthouse (desktop) on ${EXPECT_ROUTE} and archive to site/evidence/`,
  ).toBe(true);

  const lh = JSON.parse(fs.readFileSync(FIXTURE_PATH, 'utf8'));

  const url = lh.finalUrl ?? lh.requestedUrl ?? lh.finalDisplayedUrl ?? '';
  expect(url, `LH fixture must be for ${EXPECT_ROUTE} (got "${url}")`).toContain(EXPECT_ROUTE);

  const lcp = lh.audits?.['largest-contentful-paint']?.numericValue;
  const cls = lh.audits?.['cumulative-layout-shift']?.numericValue;
  const perf = lh.categories?.performance?.score;
  expect(typeof lcp, 'LCP numericValue missing/!number in LH JSON').toBe('number');
  expect(typeof cls, 'CLS numericValue missing/!number in LH JSON').toBe('number');
  expect(typeof perf, 'categories.performance.score missing/!number in LH JSON').toBe('number');

  expect(lcp, `LCP ${Math.round(lcp)}ms must be < ${BUDGET.lcpMaxMs}ms (fixture ${LH_FIXTURE})`).toBeLessThan(BUDGET.lcpMaxMs);
  expect(cls, `CLS ${cls.toFixed(4)} must be < ${BUDGET.clsMax} (fixture ${LH_FIXTURE})`).toBeLessThan(BUDGET.clsMax);
  expect(perf, `Perf score ${Math.round(perf * 100)} must be >= ${BUDGET.perfMin * 100} (fixture ${LH_FIXTURE})`).toBeGreaterThanOrEqual(BUDGET.perfMin);
});
