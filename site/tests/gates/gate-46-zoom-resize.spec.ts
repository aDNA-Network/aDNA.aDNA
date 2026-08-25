/**
 * Gate 46 — Zoom, text resize, and motion preference  (HAUSSMANN P4.3 O1, AC3)
 *
 * Three WCAG criteria that the 593-assertion suite had **zero instrument coverage** for, measured
 * before this gate was designed:
 *   · `deviceScaleFactor|zoom`      in tests/ → **0 hits** `[D]`
 *   · `prefers-reduced-motion`      in tests/ → **0 hits** `[D]` (13 implementations in src/)
 *
 * ─── 1.4.4 RESIZE TEXT (200%) — the half that found a real defect ────────────────────────────
 * Text-size zoom is NOT viewport narrowing, and that distinction is the whole reason this half
 * exists. A user who sets their browser's font size to 200% keeps a 1280px viewport and gets
 * doubled text inside it; `gate-9` and `gate-29` parameterize the VIEWPORT WIDTH and can never
 * produce that state. Measured on the unfixed tree: **every page scrolled horizontally by 229px
 * at 1280 and 460px at 1024**, because `.header-actions` (CTA + GitHub + theme toggle) was pushed
 * to x=1509 by `margin-left: auto` against a nav that had also doubled. Fix: `flex-wrap: wrap` on
 * `.header-inner` (Header.astro), inert at normal text size. This gate is what keeps it fixed.
 *
 * ⚠ THE TRANSFORM MUST BE APPLIED AFTER LOAD. `page.addInitScript` setting the root font-size is
 * a NO-OP here — measured: body text stayed at 14.4px, so an entire probe run reported "no
 * overflow" for a transform that never happened. That green was indistinguishable from a clean
 * site, which is why the CONTROL below is asserted before anything else: root must have doubled
 * AND rendered body text must have grown ≥1.8×. Without it every assertion in this half is vacuous.
 *
 * ─── 1.4.10 REFLOW (400% page zoom) ──────────────────────────────────────────────────────────
 * 1280 CSS px at 400% zoom ≡ a 320 CSS px viewport — that is the equivalence WCAG's own
 * technique uses, and it means `gate-29` (320/375) ALREADY covers this criterion on the three
 * docs routes and /network it walks. This gate therefore claims only the delta: the DESKTOP-shaped
 * routes gate-29 never walks. Said plainly so the count is not read as new coverage it is not.
 *
 * ─── 2.3.3 / motion preference ───────────────────────────────────────────────────────────────
 * Two mechanisms exist and neither had ever been verified: `tokens.css` zeroes the
 * `--transition-*` tokens under the media query, and `NetworkDiagram.astro` refuses to arm its
 * compose animation. Both are asserted WITH their control — the un-emulated run must show the
 * non-zero/armed state, or "it was zero under reduced motion" says nothing.
 *
 * Red-test: `scripts/zoom_resize_redtest.sh` (mutations AND passing controls).
 */
import { test, expect } from '@playwright/test';

/** 1.4.4 — text-size zoom. Includes routes gate-29 walks: the transform is different. */
const RESIZE_ROUTES = ['/', '/about', '/vaults', '/get-started', '/design-system', '/network/'];

/** 1.4.10 — the DESKTOP-shaped routes gate-29 (320/375, docs + /network) never walks. */
const REFLOW_ROUTES = ['/', '/vaults', '/design-system', '/state-of-the-network', '/about'];

/** Below this, the page was not really measured and a clean read means nothing. */
const MIN_MEASURED_ELEMENTS = 40;
/** Rounding only. A real overflow in this class was 228–460px. */
const OVERFLOW_TOLERANCE_PX = 1;

/** Runs in the page. Returns the document-level overflow plus its own coverage evidence. */
const measureOverflow = () => {
  const de = document.documentElement;
  const vw = de.clientWidth;
  const TEXTY = 'p, li, h1, h2, h3, h4, td, th, dd, dt, figcaption, .btn, button, a, code, pre';
  let measured = 0;
  for (const el of document.querySelectorAll(TEXTY)) {
    if (!(el.textContent || '').trim()) continue;
    const r = el.getBoundingClientRect();
    if (r.width > 0 && r.height > 0) measured++;
  }
  // Name the widest thing that escapes the viewport, so a failure is actionable rather than a number.
  let worst: { sel: string; right: number } | null = null;
  for (const el of document.querySelectorAll('*')) {
    const r = el.getBoundingClientRect();
    if ((r.width || r.height) && r.right > vw + 1) {
      if (!worst || r.right > worst.right) {
        const cls = typeof el.className === 'string' ? el.className.split(' ')[0] : '';
        worst = { sel: `${el.tagName.toLowerCase()}${cls ? '.' + cls : ''}`, right: Math.round(r.right) };
      }
    }
  }
  const p = document.querySelector('p');
  return {
    measured,
    overflow: de.scrollWidth - de.clientWidth,
    vw,
    worst,
    rootPx: parseFloat(getComputedStyle(de).fontSize),
    bodyPx: p ? parseFloat(getComputedStyle(p).fontSize) : null,
  };
};

for (const route of RESIZE_ROUTES) {
  test(`G46 resize [1.4.4]: text at 200% forces no horizontal scrolling (${route})`, async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto(route, { waitUntil: 'networkidle' });

    const before = await page.evaluate(measureOverflow);

    // ⚠ AFTER load, never addInitScript — see the header comment. This is the user's browser
    // font-size preference, which scales every rem-based token in tokens.css.
    await page.evaluate(() =>
      document.documentElement.style.setProperty('font-size', '200%', 'important'),
    );
    await page.waitForTimeout(150);
    const after = await page.evaluate(measureOverflow);

    // CONTROL 1 — the transform actually happened. Asserted FIRST: everything below is vacuous
    // without it, and a no-op transform produces exactly the same green as a conformant page.
    expect(
      after.rootPx,
      `${route}: root font-size is ${after.rootPx}px after the 200% transform (was ${before.rootPx}px) — THE TRANSFORM DID NOT APPLY, so this test measured nothing`,
    ).toBeGreaterThanOrEqual(before.rootPx * 1.9);
    expect(
      after.bodyPx! / before.bodyPx!,
      `${route}: rendered body text went ${before.bodyPx}px → ${after.bodyPx}px — the tokens did not scale with the root, so no conclusion about resize can be drawn`,
    ).toBeGreaterThanOrEqual(1.8);

    // CONTROL 2 — the page was actually walked.
    expect(
      after.measured,
      `${route}: only ${after.measured} text elements measured — the page did not render`,
    ).toBeGreaterThanOrEqual(MIN_MEASURED_ELEMENTS);

    // THE CLAIM.
    expect(
      after.overflow,
      `${route}: ${after.overflow}px of horizontal scrolling at 200% text (viewport ${after.vw}). Widest escapee: ${after.worst ? `${after.worst.sel} → x=${after.worst.right}` : 'none identified'}. This is the .header-inner flex-wrap class (P4.3 O1) unless the selector says otherwise.`,
    ).toBeLessThanOrEqual(OVERFLOW_TOLERANCE_PX);
  });
}

for (const route of REFLOW_ROUTES) {
  test(`G46 reflow [1.4.10]: 400% zoom equivalent (320 CSS px) forces no horizontal scrolling (${route})`, async ({
    page,
  }) => {
    // 1280 CSS px at 400% zoom ≡ a 320 CSS px viewport (WCAG's own equivalence).
    await page.setViewportSize({ width: 320, height: 900 });
    await page.goto(route, { waitUntil: 'networkidle' });
    const m = await page.evaluate(measureOverflow);

    expect(
      m.measured,
      `${route} at 320: only ${m.measured} text elements measured — the page did not render`,
    ).toBeGreaterThanOrEqual(MIN_MEASURED_ELEMENTS);
    expect(
      m.overflow,
      `${route} at 320 (400% zoom equivalent): ${m.overflow}px of horizontal scrolling. Widest escapee: ${m.worst ? `${m.worst.sel} → x=${m.worst.right}` : 'none identified'}`,
    ).toBeLessThanOrEqual(OVERFLOW_TOLERANCE_PX);
  });
}

test('G46 motion: the --transition-* tokens zero under prefers-reduced-motion (with control)', async ({
  browser,
}) => {
  const read = async (reduced: boolean) => {
    const ctx = await browser.newContext({ reducedMotion: reduced ? 'reduce' : 'no-preference' });
    const page = await ctx.newPage();
    await page.goto('/', { waitUntil: 'networkidle' });
    const v = await page.evaluate(() => {
      const cs = getComputedStyle(document.documentElement);
      return {
        fast: cs.getPropertyValue('--transition-fast').trim(),
        base: cs.getPropertyValue('--transition-base').trim(),
        slow: cs.getPropertyValue('--transition-slow').trim(),
      };
    });
    await ctx.close();
    return v;
  };

  // ⚠ PARSE THE UNIT, DO NOT PATTERN-MATCH THE TEXT. Authored as `150ms`, these tokens are
  // MINIFIED to `.15s` in the built CSS — a first draft of this control asserted /\d+ms/ and went
  // red against a perfectly correct token set. The gate was wrong before the subject was.
  const ms = (v: string) => {
    const n = parseFloat(v);
    return Number.isNaN(n) ? NaN : /\dms/.test(v) || v.trim().endsWith('ms') ? n : n * 1000;
  };

  // CONTROL — without the preference the tokens carry real durations. If this is already zero the
  // reduced-motion assertion below proves nothing at all.
  const normal = await read(false);
  for (const [name, value] of Object.entries(normal)) {
    expect(
      ms(value),
      `CONTROL FAILED: --transition-${name} is "${value}" (${ms(value)}ms) WITHOUT prefers-reduced-motion — already zero, so the reduced-motion assertion is vacuous`,
    ).toBeGreaterThan(0);
  }

  const reduced = await read(true);
  for (const [name, value] of Object.entries(reduced)) {
    expect(
      ms(value),
      `--transition-${name} is "${value}" under prefers-reduced-motion (tokens.css:129-131 should zero it)`,
    ).toBe(0);
  }
});

test('G46 motion: the network diagram does not arm its compose animation under reduced motion (with control)', async ({
  browser,
}) => {
  const armed = async (reduced: boolean) => {
    const ctx = await browser.newContext({ reducedMotion: reduced ? 'reduce' : 'no-preference' });
    const page = await ctx.newPage();
    await page.goto('/network/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(200);
    const n = await page.evaluate(() => ({
      present: document.querySelectorAll('[data-netdiagram]').length,
      armed: document.querySelectorAll('[data-netdiagram][data-armed]').length,
    }));
    await ctx.close();
    return n;
  };

  // CONTROL — the diagram exists and DOES arm when motion is allowed. Without this, "0 armed"
  // is equally consistent with the component having been removed from the page.
  const normal = await armed(false);
  expect(normal.present, 'CONTROL FAILED: no [data-netdiagram] on /network/ — the gate is asserting about an absent component').toBeGreaterThan(0);
  expect(normal.armed, 'CONTROL FAILED: the diagram does not arm even WITHOUT reduced motion, so the reduced-motion assertion is vacuous').toBeGreaterThan(0);

  const reduced = await armed(true);
  expect(
    reduced.armed,
    `${reduced.armed} of ${reduced.present} diagrams armed their compose animation under prefers-reduced-motion (NetworkDiagram.astro returns early on the preference)`,
  ).toBe(0);
});
