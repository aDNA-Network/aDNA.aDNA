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

// Keep in sync with Header.astro's inline-nav switch-on media query (1024px since the
// 8th item — see the c165 measurement note there).
const NAV_SWITCH_ON = 1024;

test('G13 Nav: header carries Commons in the desktop row (1440px)', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/', { waitUntil: 'networkidle' });
  const link = page.locator('.nav-desktop a[href="/commons"]');
  await expect(link).toBeVisible();
  await expect(link).toHaveText('Commons');
});

test(`G13 Nav: 8-item desktop row fits at the ${NAV_SWITCH_ON}px switch-on (c158 lesson)`, async ({ page }) => {
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
  for (const href of ['/network', '/vaults', '/commons', '/community']) {
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

test('G13 Audience surfacing: /researchers scopes to the For-you group with a breadcrumb', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('/researchers/', { waitUntil: 'networkidle' });
  const sidebar = page.locator('aside.doc-sidebar');
  await expect(sidebar.locator('.nav-group .group-label')).toContainText('For you');
  await expect(sidebar.locator('a[href="/educators"]')).toBeVisible();
  await expect(page.locator('nav[aria-label="Breadcrumb"]')).toContainText('For you');
});
