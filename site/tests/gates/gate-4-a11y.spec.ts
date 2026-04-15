/**
 * Gate 4: Accessibility (A11y)
 * Criterion: Zero WCAG 2.1 AA violations via axe-core.
 * Audits a representative sample of pages.
 */
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = [
  { name: 'Homepage', path: '/' },
  { name: 'Concept page', path: '/learn/concepts/triad' },
  { name: 'Tutorial page', path: '/learn/tutorials/first-claude-md' },
  { name: 'Pattern page', path: '/patterns/agents-md' },
  { name: '404 page', path: '/404.html' },
];

for (const { name, path } of pages) {
  test(`G4 A11y: ${name} (${path}) has zero WCAG AA violations`, async ({ page }) => {
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

    expect(violations, `A11y violations on ${name}:\n${JSON.stringify(violations, null, 2)}`).toHaveLength(0);
  });
}
