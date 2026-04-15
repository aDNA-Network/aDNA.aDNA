/**
 * Gate 8: Brand Evidence Capture
 * Method: Screenshot at 3 breakpoints for human review.
 * This gate is MANUAL — screenshots are evidence, not assertions.
 */
import { test } from '@playwright/test';

const breakpoints = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
];

const pages = [
  { name: 'homepage', path: '/' },
  { name: 'concept', path: '/learn/concepts/triad' },
  { name: 'tutorial', path: '/learn/tutorials/first-claude-md' },
];

for (const bp of breakpoints) {
  for (const pg of pages) {
    test(`G8 Brand: capture ${pg.name} at ${bp.name} (${bp.width}px)`, async ({ page }) => {
      await page.setViewportSize({ width: bp.width, height: bp.height });
      await page.goto(pg.path, { waitUntil: 'networkidle' });

      await page.screenshot({
        path: `evidence/brand/brand_${bp.name}_${pg.name}.png`,
        fullPage: true,
      });
    });
  }
}
