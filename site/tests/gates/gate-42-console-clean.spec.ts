/**
 * Gate 42 — ZERO CONSOLE ERROR  (HAUSSMANN P4.4a A2, row F20's class)
 *
 * Criterion: no built page, in either theme, logs a `console.error`, throws an uncaught exception,
 * or fails to fetch one of its own same-origin assets.
 *
 * ⭐ THE DEFECT THAT SCOPED THIS GATE WAS FALSE, AND THE GATE IS STILL RIGHT. F20 claimed
 * `JetBrains Mono Variable` reported `document.fonts` state `error` on every page. P4.2 O3 probed it
 * across 4 routes × both themes: **errors 0/0 every time**. The observable that read as the claim was
 * `unloaded: 5` — the CORRECT state for five subsets whose `unicode-range` matches no glyph — and
 * Inter and Space Grotesk showed the identical shape. The control was sitting in the same
 * `FontFaceSet` the whole time.
 *
 * What survived the refutation is the reason this file exists: **a false claim about the console
 * stood for five days because nothing watched the console.** `grep -rn "page.on('console'"
 * tests/gates/` returned nothing. An unwatched surface cannot contradict a wrong story about itself,
 * and P2.6's re-baseline found F20 shipping behind 487 green assertions.
 *
 * RELATIONSHIP TO gate-38. G38d watches `document.fonts` for the error state; G38c watches font
 * delivery. Those are the NARROW font instruments, authored in the same week and for the same
 * scare. This gate is the BROAD console surface, and neither subsumes the other: G38d would not see
 * a mermaid chunk throwing, and this gate would not see a font quietly served from an external host.
 * F20's five-day life is the argument for having both.
 *
 * ⚠ COVERAGE FLOOR, NOT `> 0` (P4.2's lesson, paid for twice). "Zero console errors" is the reading
 * you get from a browser that never loaded a page. So the route frame is DERIVED from `dist/` — never
 * typed, which is how `audit-p1s3-sweep.spec.ts` does it and how its list goes stale — asserted
 * against a floor, and every navigation's HTTP status is checked. A route that 404s is removed from
 * the evidence AND fails the gate, because a 404 page is reliably quiet.
 *
 * ⚠ WHY FULL COVERAGE RATHER THAN A SAMPLE. The class this fences is a WHOLE-SITE defect that ships
 * uniformly — F20's claim was "on every page". A sample would have caught it. But the real risk is
 * the opposite shape: one lazily-loaded chunk (there are 59 in `_astro/`, several of them mermaid
 * renderers) throwing on the handful of pages that use it. That is exactly what a declared sample
 * misses, so the frame is every built route.
 *
 * Red-proven by `scripts/console_clean_redtest.sh` — required, because this gate went green on its
 * first run, which is precisely the state in which a real assertion and a no-op are
 * indistinguishable.
 */
import { test, expect } from '@playwright/test';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = join(process.cwd(), 'dist');
/** 224 routes are built today. The floor catches a COLLAPSED walk (moved dir, changed extension,
 *  wrong cwd), not an ordinary page deletion — a broken walk reports every page as quiet. */
const ROUTE_FLOOR = 180;

/** Derive the frame from the build, the same walk `check_external_links.mjs` uses. Throws rather
 *  than returning [] — an empty derivation must never read as a clean bill of health. */
function builtRoutes(): string[] {
  if (!existsSync(DIST)) throw new Error(`no build output at ${DIST} — run \`npx astro build\` first`);
  const files: string[] = [];
  (function walk(dir: string) {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name === 'index.html') files.push(p);
    }
  })(DIST);
  if (files.length === 0) throw new Error('walked dist/ and found no index.html — refusing to report green');
  return files.map((f) => '/' + f.slice(DIST.length + 1).replace(/index\.html$/, '')).sort();
}

/* Dark is the default render; light is reached by seeding the preference before load.
 * Identical to gate-4 and the audit sweep — one theme convention, stated in one shape. */
const MODES = [
  { name: 'dark', seed: null as null | (() => void) },
  { name: 'light', seed: () => localStorage.setItem('theme', 'light') },
];

type Hit = { route: string; mode: string; kind: string; detail: string };

test.describe('gate-42 — zero console error', () => {
  // 224 routes × 2 themes. Generous, because the failure mode of a tight timeout here is a
  // truncated sweep reporting the clean prefix it managed to reach.
  test.setTimeout(15 * 60 * 1000);

  test('G42a: the route frame was actually derived (coverage floor, not > 0)', () => {
    const routes = builtRoutes();
    expect(
      routes.length,
      `derived ${routes.length} route(s) from dist/, below the floor of ${ROUTE_FLOOR}. This is ` +
        `almost certainly a broken walk, not a genuinely small site — and a browser that never ` +
        `loads a page reports zero console errors.`,
    ).toBeGreaterThanOrEqual(ROUTE_FLOOR);
    expect(routes).toContain('/');
  });

  for (const mode of MODES) {
    test(`G42b: no console error or uncaught exception in ${mode.name} mode`, async ({ page, baseURL }) => {
      const routes = builtRoutes();
      const hits: Hit[] = [];
      const badStatus: string[] = [];
      const assetFailures: Hit[] = [];

      if (mode.seed) await page.addInitScript(mode.seed);

      let current = '(none)';
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          hits.push({ route: current, mode: mode.name, kind: 'console.error', detail: msg.text().slice(0, 300) });
        }
      });
      page.on('pageerror', (err) => {
        hits.push({ route: current, mode: mode.name, kind: 'pageerror', detail: String(err.message).slice(0, 300) });
      });
      page.on('requestfailed', (req) => {
        // Same-origin only. A third-party 503 is not this site's defect and gating on it would
        // train everyone to ignore a red build — the same reasoning check_external_links.mjs
        // records for external links. Everything this site serves, it owns.
        const url = req.url();
        if (baseURL && url.startsWith(baseURL)) {
          assetFailures.push({ route: current, mode: mode.name, kind: 'requestfailed', detail: `${url} — ${req.failure()?.errorText ?? '?'}` });
        }
      });

      for (const route of routes) {
        current = route;
        const res = await page.goto(route, { waitUntil: 'load' });
        const status = res?.status() ?? 0;
        // A 404 is quiet. Counting it as "no console errors" is the vacuity this gate is fenced
        // against, so a bad status is recorded as its own failure rather than silently sampled.
        if (status !== 200) badStatus.push(`${route} → HTTP ${status}`);
        // Async work (mermaid chunks, view transitions) throws after `load`. Without a settle the
        // sweep races past exactly the errors it exists to catch.
        await page.waitForTimeout(120);
      }

      expect(
        badStatus.slice(0, 20),
        `${badStatus.length} built route(s) did not return 200. A non-200 page is reliably quiet, ` +
          `so these routes contributed no evidence — the sweep is narrower than it appears.`,
      ).toEqual([]);

      expect(
        hits.slice(0, 25).map((h) => `${h.route} [${h.kind}] ${h.detail}`),
        `${hits.length} console error(s)/uncaught exception(s) across ${routes.length} route(s) in ` +
          `${mode.name} mode. This is the class F20 was wrongly accused of and that nothing was ` +
          `watching for. Fix the page, or — if a message is genuinely third-party and unfixable — ` +
          `add a NARROW, DATED, REASONED allowlist entry here rather than widening the predicate.`,
      ).toEqual([]);

      // Reported on the same run so a broken same-origin asset cannot hide behind a quiet console.
      expect(
        assetFailures.slice(0, 20).map((h) => `${h.route} ${h.detail}`),
        `${assetFailures.length} same-origin request(s) failed. The site serves these itself, so a ` +
          `failure is ours — unlike an external host, where gating would be training people to ` +
          `ignore a red build.`,
      ).toEqual([]);
    });
  }

  /**
   * ⛩ HAUSSMANN GR-1 O1 / AC-1 — G42e: NO FONT SHIPS AS A `data:` URI.
   *
   * ⭐⭐ THIS ASSERTION EXISTS BECAUSE THIS GATE WAS STRUCTURALLY BLIND TO A LIVE DEFECT, AND THE
   * BLINDNESS IS THE FINDING (campaign convention 18, ratified at this mission's signature).
   * Every test above drives `astro preview`, which serves NO `vercel.json` headers — so no CSP is
   * ever applied, and a CSP violation cannot produce a console error for this gate to catch. The
   * production CSP carries `font-src 'self'`; Vite's default 4096-byte `assetsInlineLimit` emitted
   * the JetBrains Mono `cyrillic-ext` subset as `url(data:font/woff2;base64,…)`; the browser
   * refused to load the site's own font on production and this 180-route sweep stayed green.
   * `grep -rn "font-src" tests/ scripts/` returned **0** before this landed.
   *
   * WHY STATIC RATHER THAN A HEADERS-APPLIED PROBE — AND WHY THE ORIGINAL REASON WAS WRONG.
   * Convention 13's pass argued a dynamic probe could not be the sole limb because `cyrillic-ext` is
   * not preloaded (`BaseLayout.astro:52-54` is latin-only) and matches no glyph an English page
   * paints, so the face might never load. ⭐⭐ **MEASURED AT O1, THAT IS FALSE**: V1 reports **50 of
   * 50** page×theme loads refusing the font pre-fix. `unicode-range` defers a NETWORK FETCH, and a
   * `data:` face has none — the engine constructs it immediately and CSP fires at construction.
   *
   * ⇒ The dynamic probe WOULD have worked as a limb. This assertion is still the right one to gate
   * on, for the reason that survived: a `data:` URI in built CSS is **present or absent**, so it
   * cannot be vacuous, and it does not depend on a browser's font-loading behaviour remaining what
   * it is today. **A correct remedy reached from a wrong premise is still worth re-deriving**, which
   * is why the premise is corrected here rather than quietly dropped.
   *
   * WHAT IT DOES NOT CLAIM (convention 18 applied to itself): it reads the BUILT CSS, so it proves
   * a property of the artifact, not of the served response. It would not catch a font referenced
   * from an external host (that is gate-38's G38c) nor a CSP that stops matching `vercel.json`
   * (that is `check_live_headers.mjs`). It closes exactly one hole: an inlined font.
   */
  test('G42e: no font ships as a data: URI — the production CSP would refuse it', () => {
    const cssDir = join(DIST, '_astro');
    if (!existsSync(cssDir)) throw new Error(`no ${cssDir} — run \`npx astro build\` first`);
    const sheets = readdirSync(cssDir).filter((f) => f.endsWith('.css'));

    // Floor, not `> 0` — a collapsed walk reports every stylesheet as clean (P4.2's lesson).
    expect(
      sheets.length,
      `only ${sheets.length} stylesheet(s) found in _astro — the walk collapsed, and a collapsed ` +
        `walk reports a clean result for a site it never read.`,
    ).toBeGreaterThanOrEqual(1);

    const offenders: string[] = [];
    for (const f of sheets) {
      const css = readFileSync(join(cssDir, f), 'utf8');
      // Matches `data:font/woff2;base64,…` and `data:application/font-woff…` alike.
      const m = css.match(/url\(\s*["']?data:(?:font|application\/(?:font|x-font))[^)]*\)/gi);
      if (m) offenders.push(`${f}: ${m.length} inlined font(s), first starts ${m[0].slice(0, 48)}…`);
    }

    expect(
      offenders,
      `${offenders.length} stylesheet(s) inline a font as a data: URI. The production CSP is ` +
        `\`font-src 'self'\` (site/vercel.json), which REFUSES a data: font — so this ships a page ` +
        `that cannot load its own typeface. ⛔ Do NOT fix this by adding \`data:\` to font-src: ` +
        `that is a claim moving DOWN in security to make a test pass (campaign convention 1). ` +
        `Fix it in \`astro.config.mjs\`'s \`build.assetsInlineLimit\`, which returns false for ` +
        `font extensions so fonts are always emitted as files.`,
    ).toEqual([]);
  });
});
