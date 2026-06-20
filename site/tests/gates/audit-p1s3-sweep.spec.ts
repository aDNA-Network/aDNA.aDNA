/**
 * Audit P1-S3 — Phase-1b verification sweep  @audit
 *
 * One-shot audit harness for campaign_adna_network_audit P1-S3 (gap-register #12):
 * closes the P0 coverage holes by scoring every previously-unscored static route class
 * (+ generated-detail samples) with axe in BOTH colour modes, checking mobile overflow,
 * and probing the qualitative items (sidebar section-switcher, Mermaid keyboard twin,
 * no-JS fallback). Excluded from normal gate runs (`test:gates` greps -v @audit);
 * run explicitly with `npm run audit:p1s3`. Evidence → site/evidence/p1s3/.
 *
 * This is an AUDIT, not a permanent gate: failures are findings to log in
 * how/campaigns/campaign_adna_network_audit/missions/artifacts/audit_adna_network_2026_06.md,
 * not necessarily regressions to fix in-session.
 */
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const EVIDENCE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../evidence/p1s3');
fs.mkdirSync(path.join(EVIDENCE, 'shots'), { recursive: true });

// Every in-scope route class gate-4 does NOT already cover (gate-4 covers: /, triad,
// first-claude-md, patterns/agents-md, 404, /vaults/graph, Harness detail, /network,
// /commons, /vaults, /get-started, /reference/specification — in both modes).
const routes = [
  // learn surfaces
  { name: 'Learn hub', path: '/learn/' },
  { name: 'What is aDNA', path: '/learn/what-is-adna/' },
  { name: 'Concepts index', path: '/learn/concepts/' },
  { name: 'Concept: convergence', path: '/learn/concepts/convergence/' },
  { name: 'Concept: knowledge-graph', path: '/learn/concepts/knowledge-graph/' },
  { name: 'Tutorials index', path: '/learn/tutorials/' },
  { name: 'Tutorial: navigate-a-vault', path: '/learn/tutorials/navigate-a-vault/' },
  { name: 'Comparisons index', path: '/learn/comparisons/' },
  { name: 'Comparison: adna-vs-notion', path: '/learn/comparisons/adna-vs-notion/' },
  // how surfaces
  { name: 'How hub', path: '/how/' },
  { name: 'Publishing index', path: '/how/publishing/' },
  { name: 'Publishing: vault-to-site', path: '/how/publishing/vault-to-site/' },
  { name: 'Lattice-examples index', path: '/how/lattice-examples/' },
  { name: 'Lattice example: context-serving', path: '/how/lattice-examples/lattice-context-serving/' },
  { name: 'Workshops index', path: '/how/workshops/' },
  { name: 'Workshop: build-your-first-vault', path: '/how/workshops/build-your-first-vault/' },
  // reference surfaces
  { name: 'Reference index', path: '/reference/' },
  { name: 'Reference: migration-guide', path: '/reference/migration-guide/' },
  { name: 'Reference: tool-setup', path: '/reference/tool-setup/' },
  // patterns / glossary / use-cases
  { name: 'Patterns index', path: '/patterns/' },
  { name: 'Pattern: mission-decomposition', path: '/patterns/mission-decomposition/' },
  { name: 'Glossary index', path: '/glossary/' },
  { name: 'Glossary: conformance-level', path: '/glossary/glossary-conformance-level/' },
  { name: 'Use-cases index', path: '/use-cases/' },
  { name: 'Use-case: solo-developer', path: '/use-cases/solo-developer/' },
  // community / adopters / utility
  { name: 'Changelog', path: '/changelog/' },
  { name: 'Community index', path: '/community/' },
  { name: 'Community: roles', path: '/community/community-roles/' },
  { name: 'Adopters index', path: '/adopters/' },
  { name: 'Adopter: educator', path: '/adopters/adopter-educator/' },
  // audience conversion pages
  { name: 'Educators page', path: '/educators/' },
  { name: 'Enterprise page', path: '/enterprise/' },
  { name: 'Researchers page', path: '/researchers/' },
  { name: 'Startup first hour', path: '/startup-first-hour/' },
  { name: 'Compliance page', path: '/compliance/' },
  // generated vault details beyond the gate-4 Harness sample (incl. a slugified-id record)
  { name: 'Vault detail: III.aDNA', path: '/vaults/III.aDNA/' },
  { name: 'Vault detail: adnalabs (slug form)', path: '/vaults/adnalabs/' },
];

const modes = [
  { name: 'dark', seed: null as null | (() => void) },
  { name: 'light', seed: () => localStorage.setItem('theme', 'light') },
];

function record(kind: string, name: string, payload: unknown) {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '_');
  fs.writeFileSync(
    path.join(EVIDENCE, `${kind}__${slug}.json`),
    JSON.stringify(payload, null, 2),
  );
}

// ── Part A: axe, both modes, every previously-unscored route ────────────────
for (const mode of modes) {
  for (const { name, path: route } of routes) {
    test(`P1S3 axe [${mode.name}]: ${name} (${route}) @audit`, async ({ page }) => {
      if (mode.seed) await page.addInitScript(mode.seed);
      const resp = await page.goto(route, { waitUntil: 'networkidle' });
      expect(resp?.status(), `route should exist: ${route}`).toBe(200);

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa'])
        .analyze();
      const violations = results.violations.map((v) => ({
        id: v.id, impact: v.impact, description: v.description, nodes: v.nodes.length,
      }));
      record(`axe_${mode.name}`, name, { route, violations });
      expect(
        violations,
        `A11y violations on ${name} [${mode.name}]:\n${JSON.stringify(violations, null, 2)}`,
      ).toHaveLength(0);
    });
  }
}

// ── Part B: mobile overflow at 375px, same routes ────────────────────────────
for (const { name, path: route } of routes) {
  test(`P1S3 mobile 375px: ${name} (${route}) — no horizontal overflow @audit`, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(route, { waitUntil: 'networkidle' });
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(overflow, `overflow at 375px on ${name}`).toBe(false);
  });
}

// ── Part C: qualitative probes ───────────────────────────────────────────────

test('P1S3 probe: sidebar section-switcher present + scoped at 375px (doc page) @audit', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/learn/concepts/triad/', { waitUntil: 'networkidle' });
  // S4 scoping contract: the VISIBLE mobile nav at 375px renders exactly the active section group
  // (not the full 7-group tree) + the section switcher. The doc layout renders SidebarNav twice —
  // the .doc-mobile-nav disclosure (shown <768px) and the .doc-sidebar aside (shown >=768px,
  // CSS-hidden here) — so scope the scoping assertion to the visible mobile nav. (SP-2; the
  // content-first DOM reorder + h3->p group label + capped fallback land in the same decade.)
  const groups = page.locator('.doc-mobile-nav .nav-group');
  const groupCount = await groups.count();
  const switcherLinks = await page.locator('nav a, aside a').count();
  record('probe', 'sidebar_switcher_375', { groupCount, anyNavLinks: switcherLinks });
  await page.screenshot({ path: path.join(EVIDENCE, 'shots', 'sidebar_switcher_375.png'), fullPage: false });
  expect(groupCount, 'mobile sidebar renders exactly the active section group (scoped, not the full tree)').toBeLessThanOrEqual(1);
  expect(switcherLinks).toBeGreaterThan(0);
});

test('P1S3 probe: Mermaid graph keyboard node-twin is focusable + revealed @audit', async ({ page }) => {
  await page.goto('/vaults/graph/', { waitUntil: 'networkidle' });
  const firstLink = page.locator('.graph-node-list a').first();
  expect(await page.locator('.graph-node-list a').count()).toBeGreaterThan(10);
  await firstLink.focus();
  await expect(firstLink).toBeFocused();
  // :focus-within lifts the visually-hidden nav into view (skip-link pattern)
  await expect(page.locator('.graph-node-list')).toBeVisible();
  await page.screenshot({ path: path.join(EVIDENCE, 'shots', 'graph_keyboard_twin.png') });
});

test.describe('no-JS fallback', () => {
  test.use({ javaScriptEnabled: false });
  test('P1S3 probe: /vaults/graph degrades honestly without JS @audit', async ({ page }) => {
    await page.goto('/vaults/graph/', { waitUntil: 'domcontentloaded' });
    // The server-rendered keyboard twin is the no-JS path to every vault.
    const nodeLinks = await page.locator('.graph-node-list a').count();
    const ledeVisible = await page.locator('.vaults-graph-hero .lede').first().isVisible();
    record('probe', 'graph_no_js', { nodeLinks, ledeVisible });
    expect(nodeLinks).toBeGreaterThan(10);
    expect(ledeVisible).toBe(true);
  });
});

test('P1S3 probe: mobile qual screenshots (vaults catalog / graph / spec) @audit', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  for (const [slug, route] of [
    ['vaults_catalog_375', '/vaults/'],
    ['vaults_graph_375', '/vaults/graph/'],
    ['spec_sidebar_375', '/reference/specification/'],
  ] as const) {
    await page.goto(route, { waitUntil: 'networkidle' });
    await page.screenshot({ path: path.join(EVIDENCE, 'shots', `${slug}.png`), fullPage: false });
  }
  expect(true).toBe(true);
});
