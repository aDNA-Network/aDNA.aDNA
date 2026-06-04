/**
 * Gate 9: Responsive Layout
 * Criterion: No horizontal overflow at 320px, 375px, 768px, 1024px, 1440px.
 * Tests homepage, concept, tutorial, and glossary pages at all breakpoints.
 * Updated D5 (cycle 46): added 375px viewport; expanded page coverage.
 */
import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'mobile_small', width: 320, height: 568 },
  { name: 'mobile_standard', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop_small', width: 1024, height: 768 },
  { name: 'desktop_large', width: 1440, height: 900 },
];

const pages = [
  { name: 'Homepage', path: '/' },
  { name: 'Concept page', path: '/learn/concepts/triad' },
  { name: 'Tutorial page', path: '/learn/tutorials/first-claude-md' },
  { name: 'Glossary page', path: '/glossary/glossary-adna' },
  { name: 'Network page', path: '/network' },
];

for (const vp of viewports) {
  for (const pg of pages) {
    test(`G9 Responsive: ${pg.name} at ${vp.name} (${vp.width}px) — no horizontal overflow`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto(pg.path, { waitUntil: 'networkidle' });

      const overflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });

      expect(overflow, `Horizontal overflow at ${vp.width}px on ${pg.name}`).toBe(false);
    });
  }
}
