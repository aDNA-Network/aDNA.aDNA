/**
 * Gate 4: Accessibility (A11y)
 * Criterion: Zero WCAG 2.1 AA violations via axe-core — in BOTH colour modes.
 * Audits a representative sample of pages.
 *
 * Both-modes coverage (E4 cycle 155): the site is HARD dark-first (the `.dark` class is the default;
 * light is opt-in via `localStorage.theme = 'light'`). Auditing only the default mode left light-mode
 * AA regressions uncaught — exactly the class that bit cycle 154 (a dark edge-label contrast miss was
 * found by an ad-hoc probe, not the gate). This loop runs every page in dark AND light so both palettes
 * are permanently gated.
 */
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = [
  { name: 'Homepage', path: '/' },
  { name: 'Concept page', path: '/learn/concepts/triad' },
  { name: 'Tutorial page', path: '/learn/tutorials/first-claude-md' },
  { name: 'Pattern page', path: '/patterns/agents-md' },
  { name: '404 page', path: '/404.html' },
  // E4 aDNANetwork surfaces (cycle 150): the federation topology + a vault detail with relationships
  { name: 'Network graph', path: '/vaults/graph/' },
  { name: 'Vault detail (with relationships)', path: '/vaults/Harness.aDNA/' },
  // E4 aDNANetwork (cycle 151): the /network narrative + node-onboarding surface
  { name: 'Network page', path: '/network' },
  // E5 Public-Good Commons (cycle 160): the subnetwork showcase surface
  { name: 'Commons page', path: '/commons' },
  // Audit P1 (campaign_adna_network_audit DS5): close the gate-coverage holes that let the
  // /vaults-index 78-node color-contrast failure ship — the index, the conversion page, the spec.
  { name: 'Vaults index', path: '/vaults' },
  { name: 'Get Started', path: '/get-started' },
  { name: 'Specification', path: '/reference/specification' },
];

// Dark is the default render; light is reached by seeding the theme preference before the page loads.
const modes = [
  { name: 'dark', seed: null as null | (() => void) },
  { name: 'light', seed: () => localStorage.setItem('theme', 'light') },
];

for (const mode of modes) {
  for (const { name, path } of pages) {
    test(`G4 A11y [${mode.name}]: ${name} (${path}) has zero WCAG AA violations`, async ({ page }) => {
      if (mode.seed) await page.addInitScript(mode.seed);
      await page.goto(path, { waitUntil: 'networkidle' });

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa'])
        .analyze();

      const violations = results.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        description: v.description,
        nodes: v.nodes.length,
      }));

      expect(
        violations,
        `A11y violations on ${name} [${mode.name}]:\n${JSON.stringify(violations, null, 2)}`,
      ).toHaveLength(0);
    });
  }
}
