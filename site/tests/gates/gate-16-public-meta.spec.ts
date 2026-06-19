/**
 * Gate 16 — Public-meta sanitizer  (WEBSITE TOOLING-PROMOTION gate **G7**)
 *
 * Criterion: no internal campaign/phase/codename jargon leaks into crawler- and
 * agent-visible metadata — <title>, meta[name=description], OG tags, and JSON-LD.
 * This is the documented failure mode for a young standard (network-audit: "private
 * state in public meta"). D1 surfaces real artifacts in *body* copy (e.g. the
 * mission_wadna_p3_iterate demo) deliberately — this gate scopes to META only, so
 * visible demonstrations are fine while leaked metadata is caught.
 *
 * ESCAPE HATCH: if a token below is ever legitimate public vocabulary, narrow the
 * regex (don't broaden the page set). Body content is intentionally out of scope.
 */
import { test, expect } from '@playwright/test';

// Unambiguous internal tokens (case-insensitive). Persona names / bare phase codes
// are deliberately excluded to avoid false positives on legitimate copy.
const CODENAMES: { re: RegExp; label: string }[] = [
  { re: /campaign_/i, label: 'campaign_* id' },
  { re: /mission_/i, label: 'mission_* id' },
  { re: /\bpt19\b/i, label: 'Production-Tidy pt19' },
  { re: /\bhearthstone\b/i, label: 'Hearthstone codename' },
  { re: /\bdecadal\b/i, label: 'decadal (internal cadence)' },
  { re: /\bdecision\s+\d/i, label: 'Decision N gate' },
  { re: /\bSP-\d/, label: 'systemic-fix id' },
  { re: /\bwadna\b/i, label: 'WEBSITE campaign abbrev' },
];

const pages = [
  '/', '/learn/what-is-adna', '/network', '/vaults', '/commons',
  '/get-started', '/community', '/vaults/Harness.aDNA', '/learn/concepts/triad',
];

for (const path of pages) {
  test(`G7 public-meta: ${path} carries no internal codenames`, async ({ page }) => {
    await page.goto(path, { waitUntil: 'domcontentloaded' });

    const parts: string[] = [await page.title()];
    parts.push((await page.locator('meta[name="description"]').getAttribute('content')) || '');
    const og = await page.locator('meta[property^="og:"]').evaluateAll(
      (els) => els.map((e) => e.getAttribute('content') || '')
    );
    parts.push(...og);
    const jsonld = await page.locator('script[type="application/ld+json"]').allTextContents();
    parts.push(...jsonld);

    const haystack = parts.join('  ');
    for (const { re, label } of CODENAMES) {
      const m = haystack.match(re);
      expect(m, `${path}: internal codename leaked into public meta — ${label} ("${m?.[0]}")`).toBeNull();
    }
  });
}
