/**
 * Gate 38 — Layout invariants  (HAUSSMANN P4.2 O2 + O3)
 *
 * Craft-floor locks that the 560-assertion suite structurally could not see, because nothing had
 * ever declared coverage against the floor. All were surfaced by the P4.2 O0 census, not by a
 * failing test — which is the point of the census.
 *
 * ⚠ Note what the census got WRONG as well as right, since this file is where a reader arrives:
 * of the four locks below, one (A2) was reported as a live defect and is not one. The census is an
 * instrument like any other, and convention 14 applies to it too.
 *
 *   G38a — locks A5 + B4 (anchor offset under sticky chrome).
 *          `.header` is `position: sticky; top: 0`, and `scroll-padding-top` appeared NOWHERE in
 *          `src/`, so every in-page anchor jump landed its target underneath the header. `gate-31`
 *          passed the whole time because it asserts anchors RESOLVE — a different, true claim.
 *          B4's rule is that the offset must equal or exceed the sum of the sticky chrome, so this
 *          gate RE-MEASURES the rendered header rather than trusting `--header-height`. A measured
 *          constant still drifts the moment someone adds a nav item; what makes it safe is that
 *          the drift is loud.
 *
 *   G38b — lock J1 (heading primacy).
 *          Nothing asserted that each route has exactly one <h1>, first in the DOM. axe enforces
 *          heading ORDER and P2.6's method counts h2s; neither enforces primacy — and this is the
 *          outline lock the thin-hub work (AC5) is graded by, so it lands before that work uses it.
 *          ⚠ The site ALREADY conformed 226/226 when this was written. That is not a reason to
 *          skip the gate: the rule held by habit, and a rule held by habit is one refactor from
 *          being false with nothing to say so.
 *
 * G38b is a static scan of dist/ (the gate-14 / gate-28 idiom) rather than a browser sample, so it
 * covers every built page instead of a chosen few — convention 8: derive from the build snapshot,
 * never pin a literal route list.
 *
 * Red-proven at authoring (2026-08-24), planted mutations, each reverted after:
 *   - `scroll-padding-top` removed from global.css      → G38a red at all 4 viewports
 *   - `--header-height` set to 1rem                     → G38a red (offset < rendered header)
 *   - a second <h1> injected into one built page         → G38b red, naming that page
 *   - an <h2> moved above the <h1> on one built page     → G38b red, naming that page
 */
import { test, expect } from '@playwright/test';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const SITE = process.cwd();
const DIST = join(SITE, 'dist');

/* ── G38a — locks A5 + B4 ─────────────────────────────────────────────────────────────────── */

// The header row height did not vary across these widths when it was measured; they are here so a
// future change that makes it vary (a wrapping nav, a mobile banner) is caught rather than assumed
// away by sampling one width.
const VIEWPORTS = [375, 768, 1024, 1440];

// One route per layout family — BaseLayout, DocumentationLayout, and a registry page — because the
// header is shared but the surrounding scroll container is not.
const OFFSET_ROUTES = ['/', '/learn/what-is-adna/', '/vaults/'];

for (const width of VIEWPORTS) {
  test(`G38a anchor-offset: scroll-padding clears the sticky header at ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });

    for (const route of OFFSET_ROUTES) {
      await page.goto(route);
      const m = await page.evaluate(() => {
        const h = document.querySelector('.header');
        if (!h) return null;
        return {
          headerHeight: h.getBoundingClientRect().height,
          headerPosition: getComputedStyle(h).position,
          scrollPaddingTop: getComputedStyle(document.documentElement).scrollPaddingTop,
        };
      });

      // Assert the gate reached the thing it claims to check (convention 14). A missing header or a
      // header that stopped being sticky both make this gate's premise false, and a gate whose
      // premise quietly evaporated is worse than no gate.
      expect(m, `${route} at ${width}: .header not found — the selector this gate measures is gone`).not.toBeNull();
      expect(
        m!.headerPosition,
        `${route} at ${width}: .header is '${m!.headerPosition}', not sticky. If the sticky header was ` +
          `deliberately retired, this gate and locks A5/B4 in lock_coverage_adna.yaml both need re-ruling ` +
          `in the same diff — do not just delete the assertion.`,
      ).toBe('sticky');

      const pad = Number.parseFloat(m!.scrollPaddingTop);
      expect(
        Number.isFinite(pad),
        `${route} at ${width}: html scroll-padding-top is '${m!.scrollPaddingTop}'. 'auto' is the ` +
          `pre-P4.2 state — every in-page anchor lands under the header. Restore the rule in global.css.`,
      ).toBe(true);

      expect(
        pad,
        `${route} at ${width}: scroll-padding-top ${pad}px < rendered header ${m!.headerHeight.toFixed(1)}px. ` +
          `An anchor jump lands ${(m!.headerHeight - pad).toFixed(1)}px under the header. Re-measure the ` +
          `header and update --header-height in tokens.css (lock B4: the offset must equal or exceed the ` +
          `sticky chrome).`,
      ).toBeGreaterThanOrEqual(m!.headerHeight);
    }
  });
}

/* ── G38e — lock I3 ───────────────────────────────────────────────────────────────────────── */

test('G38e outline-purity: documentation chrome contributes no headings to the page outline', () => {
  expect(existsSync(DIST), 'dist/ missing — run `npx astro build` first').toBe(true);

  // The chrome regions a documentation page wraps its article in. Each is matched by its opening tag
  // through to the matching close — approximate for nesting, exact enough for "does this block
  // contain an <hN>", which is all the lock asks.
  const REGIONS: [string, RegExp][] = [
    ['sidebar-nav', /<nav class="sidebar-nav"[\s\S]*?<\/nav>/g],
    ['doc-toc', /<aside class="doc-toc"[\s\S]*?<\/aside>/g],
    ['doc-mobile-nav', /<details class="doc-mobile-nav"[\s\S]*?<\/details>/g],
    ['breadcrumb', /<nav aria-label="Breadcrumb"[\s\S]*?<\/nav>/g],
  ];

  const offenders: string[] = [];
  const regionHits: Record<string, number> = {};

  for (const f of htmlFiles(DIST)) {
    const html = readFileSync(f, 'utf8');
    const rel = relative(DIST, f);
    for (const [name, rx] of REGIONS) {
      for (const m of html.matchAll(rx)) {
        regionHits[name] = (regionHits[name] || 0) + 1;
        const hs = [...m[0].matchAll(/<h([1-6])[\s>]/g)].map((x) => `h${x[1]}`);
        if (hs.length) offenders.push(`${rel}: ${name} emits ${hs.join(', ')}`);
      }
    }
  }

  // The gate must have found the chrome it claims to police. A class rename would otherwise turn
  // this into a permanent, silent pass — the shape this whole gate file exists to stop.
  expect(
    Object.keys(regionHits).length,
    `none of the documentation chrome regions [${REGIONS.map((r) => r[0]).join(', ')}] were found in any built page — the selectors are stale and this gate checked nothing`,
  ).toBeGreaterThan(0);

  expect(
    offenders.slice(0, 15),
    `${offenders.length} documentation-chrome region(s) put a heading in the page outline. Nav and TOC ` +
      `captions are labels, not sections: a screen-reader user navigating by heading would land on ` +
      `"Documentation sections" as though it were page content. Use a <p> or a <summary> (both are ` +
      `already the house pattern in SidebarNav and TOCPanel).`,
  ).toEqual([]);
});

/* ── G38c/G38d — lock A2 ──────────────────────────────────────────────────────────────────── */

// The brand faces, derived from what BaseLayout actually preloads rather than named here, so a
// fourth preload added tomorrow is covered tomorrow.
const FONT_HOSTS = /fonts\.googleapis\.com|fonts\.gstatic\.com|use\.typekit\.net|fonts\.bunny\.net/;

test('G38c font-delivery: every as=font preload resolves to a bundled woff2, no external host', () => {
  expect(existsSync(DIST), 'dist/ missing — run `npx astro build` first').toBe(true);
  const files = htmlFiles(DIST);
  expect(files.length, 'dist/ has almost no HTML — stale or failed build').toBeGreaterThan(100);

  const unresolved: string[] = [];
  const wrongType: string[] = [];
  const external: string[] = [];
  let preloadCount = 0;

  for (const f of files) {
    const html = readFileSync(f, 'utf8');
    const rel = relative(DIST, f);

    if (FONT_HOSTS.test(html)) external.push(rel);

    for (const m of html.matchAll(/<link[^>]*\bas=["']?font["']?[^>]*>/gi)) {
      preloadCount++;
      const tag = m[0];
      const href = tag.match(/href=["']([^"']+)["']/)?.[1] ?? '';
      if (!/type=["']font\/woff2["']/.test(tag)) wrongType.push(`${rel}: ${tag.slice(0, 90)}`);
      // Self-hosted and actually present in the build: a preload for a file that 404s costs a
      // round-trip and delivers nothing, and it is invisible to every other gate we run.
      if (/^https?:\/\//i.test(href)) external.push(`${rel}: ${href}`);
      else if (!existsSync(join(DIST, href.replace(/^\//, '').split('?')[0]))) unresolved.push(`${rel}: ${href}`);
    }
  }

  // The lock's premise: if nothing preloads a font, this gate is passing vacuously and should say so
  // rather than report a clean bill of health for a check it never performed.
  expect(preloadCount, 'no as=font preload found in any built page — A2 has nothing to enforce here, so either BaseLayout stopped preloading or this gate stopped finding them').toBeGreaterThan(0);
  expect(unresolved.slice(0, 10), `${unresolved.length} as=font preload(s) point at a file absent from dist/`).toEqual([]);
  expect(wrongType.slice(0, 10), `${wrongType.length} as=font preload(s) are not declared type="font/woff2"`).toEqual([]);
  expect(external.slice(0, 10), `${external.length} page(s) or preload(s) reach an external font host — brand fonts must be bundled`).toEqual([]);
});

test('G38d font-loading: no brand @font-face lands in the error state', async ({ page }) => {
  // ⚠ THIS TEST EXISTS BECAUSE THE CLAIM IT CHECKS TURNED OUT TO BE FALSE. F20 held since 2026-08-19
  // that `JetBrains Mono Variable` reported `document.fonts` state `error` on every page, blamed on
  // the non-standard `format('woff2-variations')` keyword, and it was never tested — A2's cell said
  // outright that "no gate watches font loading OR the console". Probed at P4.2 O3 across 4 routes ×
  // both themes: errors 0/0, every time. The observable that can be misread as the claim is
  // `unloaded: 5` — the correct state for five subsets whose unicode-range matches no glyph on the
  // page; Inter and Space Grotesk show the identical unloaded/loaded shape, which is the control.
  // The claim is struck; this assertion is what makes the next one like it checkable instead of
  // arguable.
  for (const route of ['/', '/learn/tutorials/build-a-lattice/']) {
    await page.goto(route);
    await page.evaluate(() => document.fonts.ready);
    const r = await page.evaluate(() => {
      const faces = [...document.fonts];
      return {
        total: faces.length,
        errored: faces.filter((f) => f.status === 'error').map((f) => `${f.family} ${f.weight}`),
        families: [...new Set(faces.map((f) => f.family))],
      };
    });
    expect(r.total, `${route}: FontFaceSet is empty — the page loaded no @font-face at all, so this gate checked nothing`).toBeGreaterThan(0);
    expect(r.errored, `${route}: ${r.errored.length} font face(s) failed to load. Check the @font-face src and its format() keyword in tokens.css.`).toEqual([]);
  }
});

/* ── G38b — lock J1 ───────────────────────────────────────────────────────────────────────── */

function htmlFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...htmlFiles(p));
    else if (entry.name.endsWith('.html')) out.push(p);
  }
  return out;
}

test('G38b heading-primacy: every built page has exactly one h1, before any h2', () => {
  expect(existsSync(DIST), 'dist/ missing — run `npx astro build` first').toBe(true);
  const files = htmlFiles(DIST);
  // Same guard as gate-14/gate-28: a truncated or failed build must fail loudly rather than pass
  // vacuously over three files.
  expect(files.length, 'dist/ has almost no HTML — stale or failed build').toBeGreaterThan(100);

  const missing: string[] = [];
  const duplicated: string[] = [];
  const outOfOrder: string[] = [];

  for (const f of files) {
    const html = readFileSync(f, 'utf8');
    const rel = relative(DIST, f);
    const h1s = [...html.matchAll(/<h1[\s>]/gi)].map((m) => m.index!);
    const h2s = [...html.matchAll(/<h2[\s>]/gi)].map((m) => m.index!);

    if (h1s.length === 0) missing.push(rel);
    else if (h1s.length > 1) duplicated.push(`${rel} (${h1s.length})`);
    else if (h2s.length > 0 && h2s[0] < h1s[0]) outOfOrder.push(rel);
  }

  expect(
    missing.slice(0, 20),
    `${missing.length} page(s) have no <h1>. Every route needs exactly one — it is the document's ` +
      `accessible name in the heading outline, and the thin-hub measurement (AC5) reads that outline.`,
  ).toEqual([]);

  expect(
    duplicated.slice(0, 20),
    `${duplicated.length} page(s) have more than one <h1>. Two h1s means the outline has two roots, ` +
      `so assistive technology cannot tell which one names the page.`,
  ).toEqual([]);

  expect(
    outOfOrder.slice(0, 20),
    `${outOfOrder.length} page(s) emit an <h2> before their <h1>. The h1 must come FIRST in the DOM, ` +
      `not merely exist — a section heading that precedes the page heading inverts the outline.`,
  ).toEqual([]);
});
