/**
 * Gate 11: Hero Banner
 * Criterion: Homepage hero banner image renders with the current aDNABanner asset.
 * Added 2026-05-22 at M3.2 S3 close (banner-propagation Deliverable 7).
 */
import { test, expect } from '@playwright/test';
import { mkdirSync } from 'node:fs';

mkdirSync('evidence/hero_banner', { recursive: true });

test('G11 Hero: banner img renders on homepage', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const banner = page.locator('img.hero-banner-img');
  await expect(banner, 'hero banner img element missing').toHaveCount(1);
  await expect(banner, 'hero banner not visible').toBeVisible();

  const dimensions = await banner.evaluate((img: HTMLImageElement) => ({
    naturalWidth: img.naturalWidth,
    naturalHeight: img.naturalHeight,
    complete: img.complete,
    currentSrc: img.currentSrc,
  }));
  expect(dimensions.complete, 'hero banner did not finish loading').toBe(true);
  expect(dimensions.naturalWidth, 'hero banner has zero natural width').toBeGreaterThan(0);
  expect(dimensions.naturalHeight, 'hero banner has zero natural height').toBeGreaterThan(0);

  // Source banner is 1288×512 (~2.515 aspect). Picture component picks a width
  // from {480,768,964} based on viewport; aspect is preserved. ±10% slack.
  const aspect = dimensions.naturalWidth / dimensions.naturalHeight;
  expect(aspect, `aspect ratio ${aspect} out of expected ~2.51 ±10%`).toBeGreaterThan(2.26);
  expect(aspect, `aspect ratio ${aspect} out of expected ~2.51 ±10%`).toBeLessThan(2.77);
});

test('G11 Hero: alt text reflects new banner content', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  const banner = page.locator('img.hero-banner-img');
  const alt = await banner.getAttribute('alt');
  expect(alt, 'banner alt text missing').toBeTruthy();
  expect(
    alt!.toLowerCase(),
    'alt text should mention pixel-art wordmark for the current banner'
  ).toMatch(/pixel-art|wordmark/);
});

test('G11 Hero: Picture element emits AVIF + WebP sources', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  const picture = page.locator('picture:has(img.hero-banner-img)');
  await expect(picture).toHaveCount(1);

  const sources = picture.locator('source');
  const sourceCount = await sources.count();
  expect(
    sourceCount,
    'Picture should generate AVIF + WebP source elements'
  ).toBeGreaterThanOrEqual(2);

  const types = await sources.evaluateAll((els) =>
    els.map((el) => el.getAttribute('type'))
  );
  expect(types).toContain('image/avif');
  expect(types).toContain('image/webp');
});

test('G11 Hero: capture banner screenshot for evidence', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  const banner = page.locator('img.hero-banner-img');
  await banner.screenshot({ path: 'evidence/hero_banner/hero_banner.png' });
});
