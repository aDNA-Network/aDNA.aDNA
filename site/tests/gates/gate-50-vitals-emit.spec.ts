/**
 * Gate 50: Field CWV instrument — shipped AND emitting (HAUSSMANN P4.4b B1, AC2/V4).
 *
 * AC2 (as replaced + amended, signed 2026-08-26): the field-p75 instrument is chosen,
 * WIRED INTO THE APP AND SHIPPED IN THE TREE, and "demonstrated to EMIT at least one
 * collected metric on a page load — SHIPPED IS NOT WIRED" (FINDING 5). V4 [asserts AC2].
 *
 * Four assertions, each aimed at a distinct way the instrument can silently die:
 *   G50a — the built HTML ships a same-origin module that contains the emitter
 *          (an import removed from BaseLayout leaves the file in src/ and nothing in dist).
 *   G50b — a real page load EMITS ≥ 1 metric into window.__adnaVitals with a numeric
 *          value (an inert instrument ships and emits nothing — the campaign's
 *          "migration announced in a comment" class).
 *   G50c — the instrument is zero-network: no POST and no off-origin request on the
 *          load that emitted (the /privacy §performance claim, asserted not narrated).
 *   G50d — the adna:vital CustomEvent channel fires (the second emission surface).
 *
 * Red-tested by scripts/vitals_emit_redtest.sh — convention 14: not believed until
 * demonstrated to fail.
 */
import { test, expect } from '@playwright/test';
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'dist');
// Three routes across layout families — BaseLayout wires every page, so a sample
// proves the wiring point, not per-page behavior.
const SAMPLE_ROUTES = ['index.html', 'get-started/index.html', 'privacy/index.html'];
const METRIC_NAMES = ['TTFB', 'FCP', 'LCP', 'CLS', 'INP'];

test('G50a Vitals: built pages ship a same-origin module containing the emitter', () => {
  for (const route of SAMPLE_ROUTES) {
    const htmlPath = join(DIST, route);
    expect(existsSync(htmlPath), `${route} must exist in dist/ (build first)`).toBe(true);
    const html = readFileSync(htmlPath, 'utf-8');

    // Find the BaseLayout head module(s) and require one of them to carry the emitter.
    const srcs = [...html.matchAll(/<script type="module" src="(\/_astro\/[^"]+\.js)"/g)].map(
      (m) => m[1],
    );
    expect(srcs.length, `${route}: head must reference at least one bundled module`).toBeGreaterThan(0);

    const carriesEmitter = srcs.some((src) => {
      const bundle = join(DIST, src);
      return existsSync(bundle) && readFileSync(bundle, 'utf-8').includes('__adnaVitals');
    });
    expect(
      carriesEmitter,
      `${route}: no referenced module contains the vitals emitter (__adnaVitals) — the instrument is not WIRED`,
    ).toBe(true);
  }
});

test('G50b Vitals: a page load EMITS at least one collected metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'load' });
  await page.waitForFunction(() => (window as any).__adnaVitals?.length >= 1, null, {
    timeout: 10_000,
  });
  const vitals: Array<{ name: string; value: unknown; rating: string }> = await page.evaluate(
    () => (window as any).__adnaVitals,
  );
  expect(vitals.length, 'at least one metric must be emitted on a page load').toBeGreaterThanOrEqual(1);
  for (const v of vitals) {
    expect(METRIC_NAMES, `unexpected metric name ${v.name}`).toContain(v.name);
    expect(typeof v.value, `${v.name} must carry a numeric value`).toBe('number');
    expect(Number.isFinite(v.value as number), `${v.name} value must be finite`).toBe(true);
  }
});

test('G50c Vitals: the emitting load makes no POST and no off-origin request', async ({
  page,
  baseURL,
}) => {
  const requests: Array<{ url: string; method: string }> = [];
  page.on('request', (req) => requests.push({ url: req.url(), method: req.method() }));

  await page.goto('/', { waitUntil: 'load' });
  await page.waitForFunction(() => (window as any).__adnaVitals?.length >= 1, null, {
    timeout: 10_000,
  });

  // Coverage floor: a page that loaded nothing proves nothing.
  expect(requests.length, 'the load must have produced observable requests').toBeGreaterThan(3);

  const origin = new URL(baseURL!).origin;
  const posts = requests.filter((r) => r.method === 'POST');
  const offOrigin = requests.filter(
    (r) => !r.url.startsWith(origin) && !r.url.startsWith('data:'),
  );
  expect(posts, 'the instrument must transmit nothing (no POST/beacon)').toEqual([]);
  expect(offOrigin, 'no request may leave the origin (/privacy claim, CSP connect-src self)').toEqual([]);
});

test('G50d Vitals: the adna:vital CustomEvent channel fires', async ({ page }) => {
  await page.addInitScript(() => {
    (window as any).__adnaVitalEvents = [];
    window.addEventListener('adna:vital', (e) =>
      (window as any).__adnaVitalEvents.push((e as CustomEvent).detail?.name),
    );
  });
  await page.goto('/', { waitUntil: 'load' });

  // Guard: addInitScript can silently not apply (P4.3, observed). If the capture
  // array is absent the HARNESS failed, which must read differently from "no events".
  const harnessApplied = await page.evaluate(() => Array.isArray((window as any).__adnaVitalEvents));
  expect(harnessApplied, 'HARNESS BUG: addInitScript capture did not apply').toBe(true);

  await page.waitForFunction(() => (window as any).__adnaVitalEvents.length >= 1, null, {
    timeout: 10_000,
  });
  const names: string[] = await page.evaluate(() => (window as any).__adnaVitalEvents);
  expect(names.length, 'at least one adna:vital event must fire on a page load').toBeGreaterThanOrEqual(1);
  for (const n of names) expect(METRIC_NAMES).toContain(n);
});
