/**
 * Gate 9: Responsive Layout
 * Criterion: No horizontal overflow at 320px, 375px, 768px, 900px, 1024px, 1440px.
 * Tests homepage, concept, tutorial, and glossary pages at all breakpoints.
 * Updated D5 (cycle 46): added 375px viewport; expanded page coverage.
 * Updated E5 c165: added the 900px nav switch-on viewport (8-item header row).
 */
import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'mobile_small', width: 320, height: 568 },
  { name: 'mobile_standard', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  // E5 c165: mid hamburger-window guard (768–1023px shows the hamburger since the 8-item
  // nav moved its switch-on to 1024) — covers the previously un-tested tablet/desktop gap.
  { name: 'tablet_wide', width: 900, height: 700 },
  { name: 'desktop_small', width: 1024, height: 768 },
  { name: 'desktop_large', width: 1440, height: 900 },
];

const pages = [
  { name: 'Homepage', path: '/' },
  { name: 'Concept page', path: '/learn/concepts/triad' },
  { name: 'Tutorial page', path: '/learn/tutorials/first-claude-md' },
  { name: 'Glossary page', path: '/glossary/glossary-adna' },
  { name: 'Network page', path: '/network' },
  // E4 c157 — the two remaining E4 surfaces. /vaults/graph is the highest mobile risk
  // (the 40-node + orphan-shelf Mermaid SVG must scale inside its container, not overflow
  // the viewport); the vault detail carries the typed relationship block.
  { name: 'Graph page', path: '/vaults/graph' },
  { name: 'Vault detail', path: '/vaults/Harness.aDNA' },
  // E5 Public-Good Commons (cycle 160): the subnetwork showcase (2-col grid → 1-col at ≤760px)
  { name: 'Commons page', path: '/commons' },
  // E5 c162 (context-graph experience): the registry gained an image-led HomeHero + stats
  // strip; /get-started gained a doc-hero + the fixture-driven command blocks (E6-O2).
  { name: 'Vaults index', path: '/vaults' },
  { name: 'Get Started', path: '/get-started' },
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
