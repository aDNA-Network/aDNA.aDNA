/**
 * Gate 47 — Keyboard-only traversal  (HAUSSMANN P4.3 O1, AC2)
 *
 * AC2's keyboard half: "focus visible, no traps, logical order" on the five surfaces, plus the one
 * WCAG 2.2 criterion this site can actually exercise and axe cannot — **2.4.11 Focus not obscured
 * (minimum)**, which matters here specifically because the header is `position: sticky` and P4.2's
 * component census already found that nothing in `src/` sets `scroll-padding-top`, so an
 * anchor-navigated target lands underneath it. Keyboard focus is the same hazard by a different
 * mechanism: the browser scrolls the focused element into view, and "into view" can mean "just
 * under the sticky header".
 *
 * ─── WHAT gate-45 ALREADY DOES, AND WHY THIS IS NOT A DUPLICATE ───────────────────────────────
 * gate-45 asserts what a screen reader ANNOUNCES and in what order. This gate asserts where FOCUS
 * goes and what it looks like when it gets there. A skip link can be announced first and still be
 * the eleventh tab stop; a focused control can be perfectly announced and painted under a header.
 *
 * ─── THE PROBE DEFECTS THIS GATE WAS BUILT AROUND (both mine, both before the subject) ────────
 * 1. A first pass reported "11 elements obscured by the sticky header" on every route. All 11 were
 *    the header's OWN CHILDREN — inside its rect because they ARE it. The predicate excludes
 *    header descendants; the site was right.
 * 2. A second pass reported the skip link at `top: -56` WHILE FOCUSED — apparently a skip link
 *    that never appears. It is a 150ms `transform` transition (`global.css` `.skip-link:focus`),
 *    and the probe measured mid-flight. This gate SETTLES the rect before reading it. The site was
 *    right the second time too.
 *
 * ─── WHY THE CONTROLS ARE LOAD-BEARING ────────────────────────────────────────────────────────
 * "Nothing was obscured" is the same green as "nothing ever scrolled far enough to be obscured".
 * The walk therefore asserts it SCROLLED (measured: 72 of 87 steps on `/`, max scrollY 6574) and
 * that it visited a floor of distinct stops, before any conclusion is drawn from a clean read.
 *
 * Red-test: `scripts/keyboard_redtest.sh` (mutations AND passing controls).
 */
import { test, expect } from '@playwright/test';

const SURFACES = [
  { name: 'home', path: '/' },
  { name: 'get-started', path: '/get-started' },
  { name: 'reference', path: '/reference/specification' },
  { name: 'registry', path: '/vaults' },
  { name: 'graph', path: '/vaults/graph/' },
];

const MAX_STEPS = 60;
/** Below this the walk did not really traverse the page. */
const MIN_DISTINCT_STOPS = 25;
/** Below this the walk never left the first screen, and "not obscured" would be vacuous. */
const MIN_SCROLLED_STEPS = 5;

type Stop = {
  key: string;
  tag: string;
  text: string;
  ring: boolean;
  domIndex: number;
  obscured: boolean;
  scrollY: number;
  inHeader: boolean;
};

/** Read the focused element. Returns null when focus has left the document (walk complete). */
const readFocus = () =>
  ((): Stop | null => {
    const el = document.activeElement as HTMLElement | null;
    if (!el || el === document.body || el === document.documentElement) return null;
    const hdr = document.querySelector('header');
    const hr = hdr?.getBoundingClientRect();
    const sticky = hdr ? ['sticky', 'fixed'].includes(getComputedStyle(hdr).position) : false;
    const inHeader = hdr ? hdr.contains(el) : false;
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    const all = [...document.querySelectorAll('*')];
    return {
      // domIndex disambiguates repeats of the same tag+class — a trap looks like a repeated KEY,
      // and two different links that happen to share a class must not read as one.
      key: `${el.tagName.toLowerCase()}.${String(el.className || '').split(' ')[0]}#${all.indexOf(el)}`,
      tag: el.tagName.toLowerCase(),
      text: (el.textContent || '').trim().slice(0, 30),
      // The site's ring is an `outline` (global.css :focus-visible); box-shadow is accepted because
      // a component is free to use one, and asserting the mechanism would over-constrain the design.
      ring: (parseFloat(cs.outlineWidth) || 0) > 0 || cs.boxShadow !== 'none',
      domIndex: all.indexOf(el),
      obscured: !inHeader && sticky && !!hr && r.top < hr.bottom - 1 && r.bottom > hr.top,
      scrollY: Math.round(window.scrollY),
      inHeader,
    };
  })();

for (const { name, path } of SURFACES) {
  test(`G47 keyboard [${name}]: focus is visible, ordered, untrapped and unobscured (${path})`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto(path, { waitUntil: 'networkidle' });
    await page.evaluate(() => (document.activeElement as HTMLElement | null)?.blur());

    const stops: Stop[] = [];
    for (let i = 0; i < MAX_STEPS; i++) {
      await page.keyboard.press('Tab');
      const s = await page.evaluate(readFocus);
      if (!s) break; // focus left the document — the walk wrapped, which is the no-trap outcome
      stops.push(s);
    }

    // ── CONTROLS FIRST. Every claim below is about the CONTENT of a walk that must have happened.
    const distinct = new Set(stops.map((s) => s.key)).size;
    expect(
      distinct,
      `${path}: only ${distinct} distinct tab stops in ${stops.length} presses — the walk did not traverse the page, so nothing below means anything`,
    ).toBeGreaterThanOrEqual(MIN_DISTINCT_STOPS);
    const scrolledSteps = stops.filter((s) => s.scrollY > 0).length;
    expect(
      scrolledSteps,
      `${path}: focus never scrolled the page (${scrolledSteps} steps with scrollY>0) — "nothing was obscured by the sticky header" would be vacuous`,
    ).toBeGreaterThanOrEqual(MIN_SCROLLED_STEPS);

    // ── NO TRAP. A trap is the same element holding focus across consecutive presses.
    const repeats = stops.filter((s, i) => i > 0 && stops[i - 1].key === s.key);
    expect(
      repeats.map((s) => `${s.key} "${s.text}"`),
      `${path}: focus did not advance — these stops repeated consecutively (a keyboard trap)`,
    ).toEqual([]);

    // ── FOCUS VISIBLE (2.4.7).
    const ringless = stops.filter((s) => !s.ring);
    expect(
      ringless.map((s) => `${s.key} "${s.text}"`),
      `${path}: these focused elements paint no focus indicator (no outline, no box-shadow)`,
    ).toEqual([]);

    // ── LOGICAL ORDER (2.4.3): tab order follows DOM order.
    const breaks = stops.filter((s, i) => i > 0 && s.domIndex < stops[i - 1].domIndex);
    expect(
      breaks.map((s, i) => `${s.key} "${s.text}" came after a later element`),
      `${path}: tab order diverges from DOM order — the usual cause is a positive tabindex`,
    ).toEqual([]);

    // ── FOCUS NOT OBSCURED (2.4.11, WCAG 2.2 — axe 4.11.3 has no rule for this).
    const hidden = stops.filter((s) => s.obscured);
    expect(
      hidden.map((s) => `${s.key} "${s.text}" (scrollY=${s.scrollY})`),
      `${path}: these focused elements were painted UNDER the sticky header. Remedy is scroll-margin-top on the focusable, or scroll-padding-top on the scroll container — the same gap P4.2's census found for in-page anchors.`,
    ).toEqual([]);
  });

  test(`G47 keyboard [${name}]: the skip link is the FIRST stop and becomes visible (${path})`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto(path, { waitUntil: 'networkidle' });
    await page.evaluate(() => (document.activeElement as HTMLElement | null)?.blur());
    await page.keyboard.press('Tab');

    // ⚠ SETTLE BEFORE READING, AND SETTLE PROPERLY. `.skip-link` slides in on a 150ms transform
    // transition (`global.css`). Reading immediately measures top=-56 — a working skip link written
    // up as a defect. The FIRST fix here was also wrong: it broke as soon as two consecutive reads
    // agreed, which on the homepage happens during a slow frame BEFORE the transition starts, and
    // it failed on `/` alone while passing on four other surfaces. Measured settle: top=-56.5 at
    // t+0, -9.1 at t+100, **8 from t+200 onward** on both `/` and `/vaults`.
    // ⇒ require THREE equal samples AND a floor of elapsed time above the transition duration.
    const settled = await page.evaluate(async () => {
      const el = document.activeElement as HTMLElement | null;
      if (!el) return null;
      const SETTLE_FLOOR_MS = 250; // > the 150ms transition
      const started = performance.now();
      const recent: number[] = [];
      for (let i = 0; i < 30; i++) {
        recent.push(Math.round(el.getBoundingClientRect().top * 10) / 10);
        if (recent.length > 3) recent.shift();
        const stable = recent.length === 3 && recent[0] === recent[1] && recent[1] === recent[2];
        if (stable && performance.now() - started >= SETTLE_FLOOR_MS) break;
        await new Promise((r) => setTimeout(r, 50));
      }
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      return {
        cls: String(el.className || ''),
        href: el.getAttribute('href'),
        top: r.top,
        bottom: r.bottom,
        height: r.height,
        ring: (parseFloat(cs.outlineWidth) || 0) > 0 || cs.boxShadow !== 'none',
        text: (el.textContent || '').trim(),
      };
    });

    expect(settled, `${path}: nothing took focus on the first Tab`).not.toBeNull();
    expect(
      settled!.cls,
      `${path}: the first tab stop is "${settled!.text}" (class "${settled!.cls}") — a bypass mechanism that is not first is a bypass mechanism a keyboard user tabs past`,
    ).toContain('skip-link');
    expect(settled!.href, `${path}: the skip link points at ${settled!.href}`).toMatch(/#/);
    // It must actually be ON SCREEN once focused — an off-screen "visible" skip link is the
    // failure this assertion exists for.
    expect(
      settled!.top,
      `${path}: the focused skip link settled at top=${settled!.top} — it never entered the viewport`,
    ).toBeGreaterThanOrEqual(0);
    expect(settled!.height, `${path}: the focused skip link has zero height`).toBeGreaterThan(0);
    expect(settled!.ring, `${path}: the focused skip link paints no focus indicator`).toBe(true);
  });
}

test('G47 keyboard: Shift+Tab walks back through the same order (no one-way trap)', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('/', { waitUntil: 'networkidle' });
  await page.evaluate(() => (document.activeElement as HTMLElement | null)?.blur());

  const forward: string[] = [];
  for (let i = 0; i < 12; i++) {
    await page.keyboard.press('Tab');
    const s = await page.evaluate(readFocus);
    if (!s) break;
    forward.push(s.key);
  }
  expect(forward.length, 'the forward walk did not produce enough stops to reverse').toBeGreaterThanOrEqual(8);

  const backward: string[] = [];
  for (let i = 0; i < forward.length - 1; i++) {
    await page.keyboard.press('Shift+Tab');
    const s = await page.evaluate(readFocus);
    if (!s) break;
    backward.push(s.key);
  }

  // Reversing from the last forward stop must retrace the forward path exactly.
  const expected = forward.slice(0, -1).reverse();
  expect(
    backward,
    `Shift+Tab did not retrace the forward order.\nforward: ${forward.join(' → ')}\nreverse: ${backward.join(' → ')}`,
  ).toEqual(expected);
});
