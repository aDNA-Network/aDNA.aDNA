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

/**
 * ⛩ BARS ADOPTED FROM WebForge's `classes.content_static` 2026-09-02 (operator-ruled). Provenance is
 * PER BAR and machine-checked — see `bar_provenance.json` + `gate-53`. Do not edit a number here
 * without editing its provenance entry in the same commit: gate-53 G53b asserts the two agree.
 *
 * ⚠ SCALE: `content_static` stores category bars as integers 0-100 (a11y 95, bp 95, seo 100);
 * Lighthouse category scores are FRACTIONS 0-1. The bars below are the fraction form. Comparing 0.95
 * to 95 is the mistake this comment exists to prevent.
 *
 * ⚠ `perfMin` is NOT from content_static and is deliberately unchanged at 0.9 — their performance 95
 * is a MOBILE-EMULATION bar and these fixtures are DESKTOP (their desktop pass is unwired). See
 * bar_provenance.json bars.perfMin.why_no_counterpart.
 *
 * ⚠ `tbtMaxMs` IS ADOPTED BUT INERT ON THIS SURFACE, and that is stated rather than hidden: all four
 * fixtures measure TBT = 0 ms against a 200 ms ceiling (2026-09-02). It is a FLOOR against future
 * regression, NOT evidence of interactivity health today — a bar that cannot currently fail proves
 * nothing (convention 14). It was not silently tightened to a desktop-derived number: inventing a bar
 * is exactly what `ratchet_law` reserves for an operator gate.
 *
 * ⚠ `seoMin` has ZERO headroom — the class bar is 100 and all four fixtures measure exactly 1.0, so
 * any SEO regression at all turns this red. That is the class's own choice (`seo_mode: category`),
 * carried faithfully, not a tolerance we picked.
 */
const BUDGET = { lcpMaxMs: 2500, clsMax: 0.1, perfMin: 0.9, a11yMin: 0.95, bestPracticesMin: 0.95, seoMin: 1.0, tbtMaxMs: 200 };
const FIXTURES_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'fixtures');

// Each guarded route + its committed desktop budget fixture.
const GUARDED: { route: string; fixture: string }[] = [
  { route: '/vaults/graph', fixture: 'lighthouse_d4c5_graph.json' },                   // H-11 (D4 C5)
  { route: '/learn/concepts/knowledge-graph', fixture: 'lighthouse_d4c6_concept.json' }, // M-7 (D4 C6)
  { route: '/get-started', fixture: 'lighthouse_get_started.json' },                   // Storyweave P5 M5.3 O3 — the onboarding entry surface
  { route: '/learn/what-is-adna', fixture: 'lighthouse_what_is_adna.json' },           // Storyweave P5 M5.3 O3 — the flagship learn surface
];

for (const { route, fixture } of GUARDED) {
  test(`G1 Lighthouse budget: ${route} fixture meets LCP/CLS/Perf/A11y/BP/SEO/TBT budget`, () => {
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

    // --- Bars adopted from classes.content_static, 2026-09-02 (⛩ operator-ruled) ------------------
    const a11y = lh.categories?.accessibility?.score;
    const bp = lh.categories?.['best-practices']?.score;
    const seo = lh.categories?.seo?.score;
    const tbt = lh.audits?.['total-blocking-time']?.numericValue;

    // Presence is asserted separately from the bar. A fixture missing a category would otherwise make
    // `undefined >= 0.95` fail with a message about a SCORE, when the real fault is a stale fixture
    // that predates the re-baseline — a red naming the wrong cause (GR-3's attribution clause).
    expect(typeof a11y, `categories.accessibility missing in ${fixture} — regenerate with scripts/gen_lighthouse_fixtures.mjs`).toBe('number');
    expect(typeof bp, `categories['best-practices'] missing in ${fixture} — regenerate with scripts/gen_lighthouse_fixtures.mjs`).toBe('number');
    expect(typeof seo, `categories.seo missing in ${fixture} — regenerate with scripts/gen_lighthouse_fixtures.mjs`).toBe('number');
    expect(typeof tbt, `audits['total-blocking-time'] missing in ${fixture} — regenerate with scripts/gen_lighthouse_fixtures.mjs`).toBe('number');

    expect(a11y, `A11y score ${Math.round(a11y * 100)} must be >= ${BUDGET.a11yMin * 100} — content_static bar (fixture ${fixture}). NOTE: gate-4's axe pass at ZERO violations is the stricter instrument; this is deliberate redundancy, not the a11y coverage.`).toBeGreaterThanOrEqual(BUDGET.a11yMin);
    expect(bp, `Best-practices score ${Math.round(bp * 100)} must be >= ${BUDGET.bestPracticesMin * 100} — content_static bar (fixture ${fixture})`).toBeGreaterThanOrEqual(BUDGET.bestPracticesMin);
    expect(seo, `SEO score ${Math.round(seo * 100)} must be >= ${BUDGET.seoMin * 100} — content_static bar, ZERO headroom by the class's own choice (fixture ${fixture})`).toBeGreaterThanOrEqual(BUDGET.seoMin);
    expect(tbt, `TBT ${Math.round(tbt)}ms must be <= ${BUDGET.tbtMaxMs}ms — content_static bar (fixture ${fixture}). ⚠ INERT on desktop today (measured 0ms); a regression floor, not evidence of interactivity health.`).toBeLessThanOrEqual(BUDGET.tbtMaxMs);
  });
}
