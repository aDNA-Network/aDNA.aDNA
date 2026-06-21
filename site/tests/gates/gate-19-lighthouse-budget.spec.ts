/**
 * Gate 19 — Lighthouse Core-Web-Vitals budget  (WEBSITE TOOLING-PROMOTION gate **G1**)
 *
 * Criterion: each guarded flagship route must hold the CWV "Good band" as NUMBERS, not a composite
 * score — **LCP < 2.5s · CLS < 0.1 · Performance ≥ 90**. G1's spec guards two D4 findings:
 *   - **H-11** (D4 C5) — `/vaults/graph`: Mermaid renders CLIENT-side (a ~45KB code-split dynamic import,
 *     below the fold); measured perf is excellent (LCP ~0.45s, CLS ~0.0001, Perf 100) so H-11's prescribed
 *     SSR-prerender was unnecessary (the goal was already met).
 *   - **M-7** (D4 C6) — `/learn/concepts/*`: the P1-audit "concept-template CLS 0.156" finding does NOT
 *     reproduce — BaseLayout's Space-Grotesk preload (BaseLayout.astro:48-51) already collapsed the
 *     heading-FOUT shift to ~0.03 (desktop) / ~0.031-0.036 (mobile), well inside the Good band, so no
 *     template rebuild was warranted (restraint). This gate LOCKS both: if a future change regresses either
 *     route's perf, the build fails here instead of shipping silently.
 *
 * PATTERN: a pure FIXTURE read (no live server) — it asserts against COMMITTED slim budget fixtures in
 * `tests/gates/fixtures/` (the install-truth fixture-gate convention, gate-12). Each full raw Lighthouse run
 * is archived LOCAL-ONLY under `site/evidence/` (`evidence/` is gitignored); the slim fixtures carry the
 * asserted numbers + provenance so the gate stays green on a fresh checkout. The Lighthouse RUN is a
 * manual/CI step (`npm run preview` → lighthouse desktop on the route → regenerate the fixture + evidence);
 * re-run when the guarded page changes.
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

const BUDGET = { lcpMaxMs: 2500, clsMax: 0.1, perfMin: 0.9 };
const FIXTURES_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'fixtures');

// Each guarded route + its committed desktop budget fixture.
const GUARDED: { route: string; fixture: string }[] = [
  { route: '/vaults/graph', fixture: 'lighthouse_d4c5_graph.json' },                   // H-11 (D4 C5)
  { route: '/learn/concepts/knowledge-graph', fixture: 'lighthouse_d4c6_concept.json' }, // M-7 (D4 C6)
];

for (const { route, fixture } of GUARDED) {
  test(`G1 Lighthouse budget: ${route} fixture meets LCP/CLS/Perf budget`, () => {
    const fixturePath = path.join(FIXTURES_DIR, fixture);
    expect(
      fs.existsSync(fixturePath),
      `Missing LH fixture ${fixture} — run Lighthouse (desktop) on ${route} and archive to site/evidence/`,
    ).toBe(true);

    const lh = JSON.parse(fs.readFileSync(fixturePath, 'utf8'));

    const url = lh.finalUrl ?? lh.requestedUrl ?? lh.finalDisplayedUrl ?? '';
    expect(url, `LH fixture must be for ${route} (got "${url}")`).toContain(route);

    const lcp = lh.audits?.['largest-contentful-paint']?.numericValue;
    const cls = lh.audits?.['cumulative-layout-shift']?.numericValue;
    const perf = lh.categories?.performance?.score;
    expect(typeof lcp, `LCP numericValue missing/!number in ${fixture}`).toBe('number');
    expect(typeof cls, `CLS numericValue missing/!number in ${fixture}`).toBe('number');
    expect(typeof perf, `categories.performance.score missing/!number in ${fixture}`).toBe('number');

    expect(lcp, `LCP ${Math.round(lcp)}ms must be < ${BUDGET.lcpMaxMs}ms (fixture ${fixture})`).toBeLessThan(BUDGET.lcpMaxMs);
    expect(cls, `CLS ${cls.toFixed(4)} must be < ${BUDGET.clsMax} (fixture ${fixture})`).toBeLessThan(BUDGET.clsMax);
    expect(perf, `Perf score ${Math.round(perf * 100)} must be >= ${BUDGET.perfMin * 100} (fixture ${fixture})`).toBeGreaterThanOrEqual(BUDGET.perfMin);
  });
}
