/**
 * Gate 13: Nav surfacing (audit C3 + the homepage §5 hand-off — E5 c165)
 * Criterion: /commons and the audience landing pages are reachable from the global
 * chrome (header · footer · home §5); the home §5 "Join the network" band renders the
 * featured subnetworks VERBATIM from subnetworks.json (single-source — no hardcoded
 * names, same discipline as gate-12's install fixture); doc pages expose section
 * navigation on mobile via the native disclosure; the audience pages are scoped to
 * the "For you" sidebar group with a breadcrumb (orphan findings discharged).
 */
import { test, expect } from '@playwright/test';
import subnetworksData from '../../src/data/subnetworks.json' with { type: 'json' };
import { audiences } from '../../src/data/home';

// Keep in sync with Header.astro's inline-nav switch-on media query (1024px — see the c165
// measurement note there; it was set when the row carried 8 items, and HAUSSMANN P2.2 cut it
// to 7, so the row now has slack at this width rather than being fitted to it).
const NAV_SWITCH_ON = 1024;

// ADR-049 (⛩ DP5): the primary nav ceiling is 7 items with NO load-bearing overflow. Before
// P2.2 nothing asserted this — the row was fenced by fit and presence only, so it had drifted
// to 8 flat items plus a "More" disclosure holding Reference and Glossary. The ceiling is a
// ratified constraint, so it gets a real assertion.
const NAV_MAX_ITEMS = 7;

test('G13 Nav: header carries Commons in the desktop row (1440px)', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/', { waitUntil: 'networkidle' });
  const link = page.locator('.nav-desktop a[href="/commons"]');
  await expect(link).toBeVisible();
  await expect(link).toHaveText('Commons');
});

test(`G13 Nav: desktop row is ≤${NAV_MAX_ITEMS} items with no overflow disclosure (ADR-049)`, async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/', { waitUntil: 'networkidle' });
  const items = page.locator('.nav-desktop a');
  expect(
    await items.count(),
    `primary nav must stay within the ${NAV_MAX_ITEMS}-item ceiling ratified at ⛩ DP5`,
  ).toBeLessThanOrEqual(NAV_MAX_ITEMS);
  // "No load-bearing More" is the other half of the criterion: the disclosure that used to
  // hold Reference and Glossary is gone, not merely shortened.
  await expect(
    page.locator('details.nav-more'),
    'the More disclosure was dissolved at P2.2 — Reference+Glossary fold under Standard',
  ).toHaveCount(0);
});

test(`G13 Nav: desktop row fits at the ${NAV_SWITCH_ON}px switch-on (c158 lesson)`, async ({ page }) => {
  await page.setViewportSize({ width: NAV_SWITCH_ON, height: 700 });
  await page.goto('/', { waitUntil: 'networkidle' });
  await expect(page.locator('.nav-desktop')).toBeVisible();
  const lastItem = page.locator('.nav-desktop a').last();
  const box = await lastItem.boundingBox();
  expect(box, 'last nav item must render').not.toBeNull();
  expect(box!.x + box!.width, 'nav row must not spill past the viewport').toBeLessThanOrEqual(NAV_SWITCH_ON);
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(overflow, 'no horizontal overflow at the nav switch-on width').toBe(false);
});

test('G13 Nav: footer carries the top-level model including Commons', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  // HAUSSMANN P1.2 added the two disclosure surfaces. /canonical-properties being footer-linked on
  // every page is not cosmetic — it is the §7.1 clone-site defense's delivery mechanism: a reader
  // who lands anywhere must be one click from the list of legitimate properties.
  for (const href of [
    '/network', '/vaults', '/commons', '/community',
    '/state-of-the-network', '/canonical-properties',
  ]) {
    await expect(page.locator(`.footer-links a[href="${href}"]`)).toBeVisible();
  }
});

test('G13 §5: home "Join the network" hands off to the live /commons', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  const sec = page.locator('section.join-network');
  await expect(sec.locator('.section-title')).toHaveText('Join the network');
  await expect(sec.locator('.join-cta a[href="/commons/"]')).toBeVisible();
  await expect(sec.locator('.join-cta a[href="/community/"]')).toBeVisible();
});

test('G13 §5: featured subnetworks render verbatim from subnetworks.json (no hardcoding)', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  const sec = page.locator('section.join-network');
  for (const s of subnetworksData.subnetworks) {
    await expect(sec, `§5 must name "${s.display_name}" from the fixture`).toContainText(s.display_name);
    await expect(sec, `§5 must carry the "${s.id}" tagline from the fixture`).toContainText(s.tagline);
  }
});

test('G13 §5: audience pathways link every "aDNA for…" surface', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  for (const a of audiences) {
    await expect(
      page.locator(`section.join-network .audience-pathways a[href="${a.href}"]`),
      `§5 pathways must link ${a.href}`,
    ).toBeVisible();
  }
});

test('G13 Mobile disclosure: doc pages expose section nav below 768px', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/learn/concepts/triad/', { waitUntil: 'networkidle' });
  const details = page.locator('details.doc-mobile-nav');
  // Direct child only — SidebarNav's subgroups carry their own nested <summary>s.
  const summary = details.locator('> summary');
  await expect(summary).toBeVisible();
  await expect(page.locator('aside.doc-sidebar')).toBeHidden();
  await summary.click();
  await expect(details.locator('a.nav-item[href="/learn/what-is-adna"]')).toBeVisible();
});

test('G13 Mobile disclosure: hidden at tablet+ where the sidebar shows', async ({ page }) => {
  await page.setViewportSize({ width: 1024, height: 768 });
  await page.goto('/learn/concepts/triad/', { waitUntil: 'networkidle' });
  await expect(page.locator('details.doc-mobile-nav')).toBeHidden();
  await expect(page.locator('aside.doc-sidebar')).toBeVisible();
});

// HAUSSMANN P2.2 / ADR-049: this test used to assert that /researchers scoped to the "For you"
// sidebar group. That group was the third of four copies of the audience link set and is gone;
// four of its five landings retired into their /use-cases/ twin. The fifth, /compliance, became
// the topic page /provenance-audit and moved to Guides — and it is the one that matters here,
// because the charter's "Enterprise Architect routing gap" was precisely that it was reachable
// from NEITHER disclosure surface. This now fences the fix.
test('G13 Audience surfacing: /provenance-audit scopes to Guides with a breadcrumb', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  const resp = await page.goto('/provenance-audit/', { waitUntil: 'networkidle' });
  expect(resp?.status(), '/provenance-audit must resolve 200 (ADR-048 rename)').toBe(200);
  const sidebar = page.locator('aside.doc-sidebar');
  await expect(sidebar.locator('.nav-group .group-label')).toContainText('Guides');
  // .nav-item specifically: the section-switcher also links /provenance-audit (it is the
  // active section), so an unscoped href match resolves to two elements.
  await expect(sidebar.locator('a.nav-item[href="/provenance-audit"]')).toBeVisible();
  await expect(page.locator('nav[aria-label="Breadcrumb"]')).toContainText('Guides');
});

// NOTE: the 11 consolidation redirects are NOT asserted here. This suite runs against
// `npm run preview`, and per P2.1's doctrine §3.2 the preview server does not serve the
// adapter layer at all — a redirect assertion would fail locally in a way indistinguishable
// from a real bug. They are fenced in gate-30-url-canonical, which reads the emitted
// .vercel/output/config.json, and proven live by the probe matrix after the deploy gate.
