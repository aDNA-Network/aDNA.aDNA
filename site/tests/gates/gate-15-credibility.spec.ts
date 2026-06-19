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

const CANONICAL_REPO = 'https://github.com/aDNA-Network/aDNA';
const DEAD_PATTERNS = ['aDNA-Network/aDNA.aDNA', 'github.com/LatticeProtocol', 'LatticeProtocol/Agentic-DNA'];

// Pages whose JSON-LD must carry a canonical publisher (sample across archetypes).
const jsonLdPages = ['/', '/learn/what-is-adna', '/network', '/get-started', '/reference/specification'];

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
