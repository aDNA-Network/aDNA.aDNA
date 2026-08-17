/**
 * Gate 29 — Mobile reflow integrity  (HAUSSMANN P1.4, O3)
 *
 * Guards the S1/S2 mobile-rendering class that gate-9 (no horizontal overflow) and axe both
 * miss, because its failure mode is CONTENT SHRINKING or CLIPPING WITHIN the viewport:
 *
 *   F1 — the docs template's base grid lost its named areas, so `grid-area: content` resolved
 *        to implicit lines and the article rendered in a ~185–233px implicit column beside a
 *        dead gutter (computed "141px 0px 233px" at 375). Nothing overflowed; gate-9 stayed
 *        green while every docs page was unreadable on phones.
 *   F2 — /network's run-a-node body track (`auto 1fr`) inherited the unbreakable clone-URL
 *        min-content width and the band's overflow-x:hidden CLIPPED the steps mid-word.
 *   F3 — the network diagram scaled its 640-wide landscape SVG to ≤0.59× on phones (≈6.5px
 *        labels); the deliberate treatment is a portrait twin swapped in below 768px.
 *
 * Assertions are geometry-level (getBoundingClientRect / scrollWidth), viewport-parameterized
 * at the two phone widths the evidence was captured at (320, 375). WCAG 1.4.10 (Reflow) is the
 * normative anchor for F2's no-clip clause.
 *
 * Red-proven at authoring (2026-08-16): reverting the F1 grid-areas fix flips the docs
 * assertions red; restoring it flips them green.
 */
import { test, expect } from '@playwright/test';

const PHONE_WIDTHS = [320, 375];

// The docs template class, sampled across its consumers (the F1 evidence set).
const DOC_ROUTES = ['/get-started/', '/learn/what-is-adna/', '/community/'];

for (const width of PHONE_WIDTHS) {
  for (const route of DOC_ROUTES) {
    test(`G29 reflow: docs article fills the viewport at ${width} (${route})`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(route);
      const m = await page.evaluate(() => {
        const a = document.querySelector('article.doc-content');
        if (!a) return null;
        const r = a.getBoundingClientRect();
        return { x: r.x, w: r.width, vw: window.innerWidth };
      });
      expect(m, `${route}: article.doc-content missing — template changed; update this gate in the same diff`).not.toBeNull();
      // The article must own (nearly) the full single-column width — the F1 failure rendered
      // it at ~62% beside a dead gutter. 0.9 tolerates scrollbar/rounding, never the defect.
      expect(m!.w, `${route} at ${width}: article is ${Math.round(m!.w)}px of ${m!.vw}px — the F1 dead-column class`).toBeGreaterThanOrEqual(m!.vw * 0.9);
      expect(m!.x, `${route} at ${width}: article starts at x=${Math.round(m!.x)} — a reserved gutter is back`).toBeLessThanOrEqual(m!.vw * 0.05);
    });
  }

  test(`G29 reflow: /network run-a-node steps wrap, nothing clipped at ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/network/');
    const m = await page.evaluate(() => {
      const codes = [...document.querySelectorAll('.run-code')].map((el) => ({
        clipped: el.scrollWidth > el.clientWidth + 1,
        text: (el.textContent || '').trim().slice(0, 40),
      }));
      const steps = [...document.querySelectorAll('.run-step')].map((el) => {
        const r = el.getBoundingClientRect();
        return Math.round(r.right);
      });
      return { codes, maxRight: Math.max(...steps), vw: window.innerWidth };
    });
    for (const c of m.codes) {
      expect(c.clipped, `run-code block "${c.text}…" has hidden horizontal content at ${width} — the F2 clip class (WCAG 1.4.10)`).toBe(false);
    }
    expect(m.maxRight, `a run-step extends past the ${width} viewport — the F2 overflow class`).toBeLessThanOrEqual(m.vw + 1);
  });
}

test('G29 reflow: the network diagram serves its portrait variant on phones (F3)', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto('/network/');
  const phone = await page.evaluate(() => ({
    portrait: !!document.querySelector('.netdiagram-svg--portrait') &&
      getComputedStyle(document.querySelector('.netdiagram-svg--portrait')!).display !== 'none',
    landscapeHidden: getComputedStyle(document.querySelector('.netdiagram-svg:not(.netdiagram-svg--portrait)')!).display === 'none',
  }));
  expect(phone.portrait, 'portrait diagram variant not displayed at 375 — F3 regressed to the illegible scaled landscape').toBe(true);
  expect(phone.landscapeHidden, 'landscape diagram still displayed at 375 — two figures competing').toBe(true);

  await page.setViewportSize({ width: 1024, height: 800 });
  const desk = await page.evaluate(() => ({
    portraitHidden: getComputedStyle(document.querySelector('.netdiagram-svg--portrait')!).display === 'none',
    landscape: getComputedStyle(document.querySelector('.netdiagram-svg:not(.netdiagram-svg--portrait)')!).display !== 'none',
  }));
  expect(desk.portraitHidden, 'portrait variant leaking into desktop').toBe(true);
  expect(desk.landscape, 'landscape diagram missing at desktop').toBe(true);
});

test('G29 reflow: docs copy button overlays its code block (F12)', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/get-started/');
  // The wrapper is built by DocumentationLayout's runtime script — wait for it.
  await page.waitForSelector('.doc-content .code-block .copy-btn');
  const m = await page.evaluate(() => {
    const blocks = [...document.querySelectorAll('.doc-content .code-block')].map((block) => {
      const btn = block.querySelector('.copy-btn')!;
      const bp = getComputedStyle(btn).position;
      const br = btn.getBoundingClientRect();
      const kr = block.getBoundingClientRect();
      return { pos: bp, inside: br.top >= kr.top - 1 && br.bottom <= kr.bottom + 1 && br.right <= kr.right + 1 };
    });
    return blocks;
  });
  expect(m.length, 'no runtime-wrapped code blocks found on /get-started — script or template changed').toBeGreaterThan(0);
  for (const b of m) {
    expect(b.pos, 'copy button lost its absolute overlay — the F12 orphaned-button class (scoped styles cannot reach runtime-built nodes; the layout carries :global rules)').toBe('absolute');
    expect(b.inside, 'copy button renders outside its code block bounds — F12').toBe(true);
  }
});
