/**
 * Gate 15 — Credibility surfaces: JSON-LD publisher + proof-link integrity
 *   - G4 (WEBSITE TOOLING-PROMOTION): every JSON-LD block parses, and any publisher
 *     Organization is the canonical entity ("aDNA Network") — guards C-3.
 *   - G6 (WEBSITE TOOLING-PROMOTION): on the credibility surfaces, every external
 *     GitHub link uses the canonical repo base and none carries a dead/legacy
 *     pattern — guards C-1's repoint-to-public-image (Decision 4).
 *
 * G6 here is a *structural* link-integrity check (canonical base, no dead patterns)
 * so it never flakes on external network/rate-limits. The live 200-unauthenticated
 * check on the proof targets is the ship-gate step in the D1 mission (run manually /
 * pre-deploy); this gate keeps the PATTERN from regressing on every run.
 */
import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// HAUSSMANN P1.2 — the G6b assertions below check the rendered page against the SAME single source
// the page renders from, so the gate cannot drift away from the content it guards. Read as JSON
// rather than imported from the .ts wrapper: that wrapper transitively imports install_truth.json,
// and Node rejects a JSON import without an import attribute (the attribute does not survive
// Playwright's transpile). Reading the data file directly is both simpler and stricter — a gate
// checking the page against its own copy of the list would only be testing the copy.
interface CanonicalProperty {
  url: string;
  kind: string;
  label: string;
  resolves: boolean;
}
const CANONICAL_PROPERTIES: CanonicalProperty[] = JSON.parse(
  readFileSync(join(process.cwd(), 'src/data/canonical_properties.json'), 'utf8'),
).properties;

const CANONICAL_REPO = 'https://github.com/aDNA-Network/aDNA';
const DEAD_PATTERNS = ['aDNA-Network/aDNA.aDNA', 'github.com/LatticeProtocol', 'LatticeProtocol/Agentic-DNA'];

// Pages whose JSON-LD must carry a canonical publisher (sample across archetypes).
const jsonLdPages = [
  '/', '/learn/what-is-adna', '/network', '/get-started', '/reference/specification', '/vaults/graph',
  // HAUSSMANN P1.2 — the canonical-properties page is where the site asserts its own identity, so
  // its structured data is the one place a publisher-name regression would do the most damage.
  '/canonical-properties',
];

// The credibility surfaces that stake the "real, inspectable vault" claim.
const proofPages = ['/', '/learn/what-is-adna', '/network'];

function collectPublisherNames(node: unknown, acc: string[] = []): string[] {
  if (Array.isArray(node)) {
    for (const n of node) collectPublisherNames(n, acc);
  } else if (node && typeof node === 'object') {
    const obj = node as Record<string, unknown>;
    if (obj.publisher && typeof obj.publisher === 'object') {
      const name = (obj.publisher as Record<string, unknown>).name;
      if (typeof name === 'string') acc.push(name);
    }
    for (const v of Object.values(obj)) collectPublisherNames(v, acc);
  }
  return acc;
}

for (const path of jsonLdPages) {
  test(`G4 JSON-LD: ${path} parses and any publisher is canonical`, async ({ page }) => {
    await page.goto(path, { waitUntil: 'domcontentloaded' });
    const blocks = page.locator('script[type="application/ld+json"]');
    const count = await blocks.count();
    expect(count, `${path}: missing JSON-LD`).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const raw = await blocks.nth(i).textContent();
      let parsed: unknown;
      expect(() => { parsed = JSON.parse(raw!); }, `${path}: JSON-LD block ${i} does not parse`).not.toThrow();
      for (const name of collectPublisherNames(parsed)) {
        expect(name, `${path}: non-canonical JSON-LD publisher "${name}"`).toBe('aDNA Network');
      }
    }
  });
}

for (const path of proofPages) {
  test(`G6 link integrity: ${path} GitHub links are canonical, no dead patterns`, async ({ page }) => {
    await page.goto(path, { waitUntil: 'domcontentloaded' });
    const hrefs = await page.locator('a[href*="github.com"]').evaluateAll(
      (els) => els.map((e) => (e as HTMLAnchorElement).getAttribute('href') || '')
    );
    // The credibility surfaces must carry at least one real GitHub proof link.
    expect(hrefs.length, `${path}: expected GitHub proof links`).toBeGreaterThan(0);
    for (const href of hrefs) {
      for (const dead of DEAD_PATTERNS) {
        expect(href.includes(dead), `${path}: dead/legacy GitHub link "${href}" (${dead})`).toBe(false);
      }
      expect(href.startsWith(CANONICAL_REPO), `${path}: non-canonical GitHub link "${href}"`).toBe(true);
    }
  });
}

/* ---------------------------------------------------------------------------------------------
 * G6b — /canonical-properties (HAUSSMANN P1.2, the §7.1 clone-site defense)
 *
 * This page is deliberately NOT a `proofPages` member, and `proofPages` was deliberately NOT
 * relaxed to admit it. That loop shares one assertion body across every listed surface, so any
 * allowlist wide enough to permit this page's links would simultaneously weaken the guard on `/`,
 * `/learn/what-is-adna` and `/network` — the exact C-1 regression the gate exists to prevent.
 * (Precedent: /about has linked the Wilhelm Foundation's rare-archive since Storyweave and has
 * never been in `proofPages` either.)
 *
 * The page legitimately links outside the canonical repo — the Foundation's own repository, the
 * archived legacy repository, the public dev vault — because listing them IS its function. So it
 * gets its own assertion, scoped to it and STRICTER than the one it opts out of: set equality in
 * both directions against the single source. Nothing can appear here that is not a declared
 * property, and no declared repository can silently vanish from the page.
 * ------------------------------------------------------------------------------------------- */
const PROPERTIES_PATH = '/canonical-properties';

test('G6b canonical-properties: every GitHub link on the page is a declared property', async ({ page }) => {
  await page.goto(PROPERTIES_PATH, { waitUntil: 'domcontentloaded' });
  const hrefs = await page.locator('a[href*="github.com"]').evaluateAll(
    (els) => els.map((e) => (e as HTMLAnchorElement).getAttribute('href') || '')
  );
  expect(hrefs.length, 'expected the properties page to carry GitHub links').toBeGreaterThan(0);

  const declared = new Set(CANONICAL_PROPERTIES.map((p) => p.url));
  for (const href of hrefs) {
    expect(
      declared.has(href.replace(/\/$/, '')),
      `undeclared GitHub link "${href}" — every link here must come from canonical_properties.ts`,
    ).toBe(true);
  }
});

test('G6b canonical-properties: every resolving repository property is rendered', async ({ page }) => {
  await page.goto(PROPERTIES_PATH, { waitUntil: 'domcontentloaded' });
  const hrefs = new Set(
    await page.locator('a[href]').evaluateAll(
      (els) => els.map((e) => (e as HTMLAnchorElement).getAttribute('href')?.replace(/\/$/, '') || '')
    ),
  );
  for (const p of CANONICAL_PROPERTIES.filter((x) => x.resolves && (x.kind === 'repo' || x.kind === 'org'))) {
    expect(hrefs.has(p.url), `declared property "${p.url}" is missing from the properties page`).toBe(true);
  }
});

test('G6b canonical-properties: retired properties are named but never linked', async ({ page }) => {
  await page.goto(PROPERTIES_PATH, { waitUntil: 'domcontentloaded' });
  const hrefs = await page.locator('a[href]').evaluateAll(
    (els) => els.map((e) => (e as HTMLAnchorElement).getAttribute('href') || '')
  );
  for (const p of CANONICAL_PROPERTIES.filter((x) => x.kind === 'retired')) {
    // Named in the copy, so a reader can recognise it...
    await expect(page.locator('body')).toContainText(p.label);
    // ...but never a live link: a retired domain may be re-registered by anyone, so linking it
    // would hand our own readers to whoever picks it up next.
    expect(hrefs.some((h) => h.includes(p.url)), `retired property "${p.label}" must not be linked`).toBe(false);
  }
});
