/**
 * Gate 6: Meta Tags
 * Criterion: Every page has title, description, canonical URL, OG tags, and JSON-LD.
 * Tests a representative sample of page types.
 */
import { test, expect } from '@playwright/test';

const pages = [
  { name: 'Homepage', path: '/' },
  { name: 'Concept page', path: '/learn/concepts/triad' },
  { name: 'Tutorial page', path: '/learn/tutorials/first-claude-md' },
  { name: 'Pattern page', path: '/patterns/agents-md' },
  { name: 'Reference page', path: '/reference/specification' },
  { name: 'Use case page', path: '/use-cases/solo-developer' },
  { name: 'Get started', path: '/get-started' },
  { name: 'Network page', path: '/network' },
  { name: 'Commons page', path: '/commons' },
];

for (const { name, path } of pages) {
  test(`G6 Meta: ${name} (${path}) has required meta tags`, async ({ page }) => {
    await page.goto(path, { waitUntil: 'networkidle' });

    // <title> must exist and be non-empty
    const title = await page.title();
    expect(title, `${name}: missing or empty <title>`).toBeTruthy();

    // meta description
    const description = page.locator('meta[name="description"]');
    await expect(description, `${name}: missing meta description`).toHaveCount(1);
    const descContent = await description.getAttribute('content');
    expect(descContent, `${name}: empty meta description`).toBeTruthy();

    // canonical URL
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical, `${name}: missing canonical link`).toHaveCount(1);

    // OG title
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle, `${name}: missing og:title`).toHaveCount(1);

    // OG description
    const ogDesc = page.locator('meta[property="og:description"]');
    await expect(ogDesc, `${name}: missing og:description`).toHaveCount(1);

    // OG image + card dimensions + alt (Storyweave P5 M5.3 O4 — share-card + a11y lock).
    // og:image is an absolute URL to a 1200×630 card; og:image:alt gives AT a description.
    const ogImage = page.locator('meta[property="og:image"]');
    await expect(ogImage, `${name}: missing og:image`).toHaveCount(1);
    const ogImageContent = await ogImage.getAttribute('content');
    expect(ogImageContent, `${name}: og:image must be an absolute URL`).toMatch(/^https?:\/\/.+\.png$/);
    await expect(page.locator('meta[property="og:image:width"]'), `${name}: missing og:image:width`).toHaveCount(1);
    await expect(page.locator('meta[property="og:image:height"]'), `${name}: missing og:image:height`).toHaveCount(1);
    const ogImageAlt = page.locator('meta[property="og:image:alt"]');
    await expect(ogImageAlt, `${name}: missing og:image:alt`).toHaveCount(1);
    expect(await ogImageAlt.getAttribute('content'), `${name}: empty og:image:alt`).toBeTruthy();
    await expect(page.locator('meta[name="twitter:image"]'), `${name}: missing twitter:image`).toHaveCount(1);

    // JSON-LD structured data — may be single schema or @graph bundle
    const jsonLd = page.locator('script[type="application/ld+json"]');
    await expect(jsonLd, `${name}: missing JSON-LD`).toHaveCount(1);

    const jsonLdContent = await jsonLd.textContent();
    const parsed = JSON.parse(jsonLdContent!);
    expect(parsed['@context'], `${name}: JSON-LD missing @context`).toBe('https://schema.org');
    // Accept either a single typed schema or a @graph bundle
    const hasType = Boolean(parsed['@type']);
    const hasGraph = Array.isArray(parsed['@graph']) && parsed['@graph'].length > 0;
    expect(hasType || hasGraph, `${name}: JSON-LD missing @type or @graph`).toBe(true);
  });
}

// 404 page should have noindex
test('G6 Meta: 404 page has noindex', async ({ page }) => {
  await page.goto('/404.html', { waitUntil: 'networkidle' });

  const robots = page.locator('meta[name="robots"]');
  await expect(robots).toHaveCount(1);
  const content = await robots.getAttribute('content');
  expect(content).toContain('noindex');
});
