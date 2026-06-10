/**
 * Gate 11: Hero Imagery
 * Criterion: every image-led hero surface renders its asset correctly.
 * Added 2026-05-22 at M3.2 S3 close (banner-propagation Deliverable 7).
 * Updated E1 c147 (2026-06-04): banner → image-led hero (.hero-stage-img, 16:9) per ADR-032 / c146.
 * Updated E5 c162 (2026-06-10): parameterized — band heroes (`img.hero-stage-img`, <Picture>,
 * AVIF+WebP) on every HomeHero/stage surface incl. the new /vaults + /vaults/graph; NEW doc-hero
 * clause (`img.doc-hero`, DocumentationLayout heroImage) closes the previously-untested
 * section-index hero hole.
 */
import { test, expect } from '@playwright/test';
import { mkdirSync } from 'node:fs';

mkdirSync('evidence/hero_banner', { recursive: true });

// Band heroes — full <Picture> treatment (AVIF+WebP sources, 16:9 source assets).
const BAND_SURFACES = [
  { name: 'Homepage', path: '/' },
  { name: 'Network', path: '/network/' },
  { name: 'Commons', path: '/commons/' },
  { name: 'Vaults index', path: '/vaults/' },          // E5 c162
  { name: 'Vaults graph', path: '/vaults/graph/' },     // E5 c162 (hand-placed Picture band)
];

for (const { name, path } of BAND_SURFACES) {
  test(`G11 Band hero: ${name} (${path}) renders, 16:9, AVIF+WebP, pixel-art alt`, async ({ page }) => {
    await page.goto(path, { waitUntil: 'networkidle' });

    const banner = page.locator('img.hero-stage-img');
    await expect(banner, `hero img missing on ${name}`).toHaveCount(1);
    await expect(banner, `hero not visible on ${name}`).toBeVisible();

    const dims = await banner.evaluate((img: HTMLImageElement) => ({
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      complete: img.complete,
    }));
    expect(dims.complete, `hero did not finish loading on ${name}`).toBe(true);
    expect(dims.naturalWidth, `zero natural width on ${name}`).toBeGreaterThan(0);

    // Source heroes are 1408×792 (16:9 ≈ 1.778); ±10% slack for responsive picks.
    const aspect = dims.naturalWidth / dims.naturalHeight;
    expect(aspect, `aspect ${aspect} out of ~1.78 ±10% on ${name}`).toBeGreaterThan(1.6);
    expect(aspect, `aspect ${aspect} out of ~1.78 ±10% on ${name}`).toBeLessThan(1.96);

    const alt = await banner.getAttribute('alt');
    expect(alt, `alt missing on ${name}`).toBeTruthy();
    expect(alt!.toLowerCase(), `alt should describe the pixel-art asset on ${name}`).toMatch(/pixel-art|pixel art|wordmark/);

    const picture = page.locator('picture:has(img.hero-stage-img)');
    await expect(picture, `Picture wrapper missing on ${name}`).toHaveCount(1);
    const types = await picture.locator('source').evaluateAll((els) => els.map((el) => el.getAttribute('type')));
    expect(types, `AVIF source missing on ${name}`).toContain('image/avif');
    expect(types, `WebP source missing on ${name}`).toContain('image/webp');
  });
}

// Doc heroes — DocumentationLayout heroImage (<Image>, single rendition set).
const DOC_SURFACES = [
  { name: 'Learn hub', path: '/learn/' },
  { name: 'How hub', path: '/how/' },
  { name: 'Patterns hub', path: '/patterns/' },
  { name: 'Reference hub', path: '/reference/' },
  { name: 'Get Started', path: '/get-started/' },       // E5 c162 / E6-O2 pre-stage
];

for (const { name, path } of DOC_SURFACES) {
  test(`G11 Doc hero: ${name} (${path}) renders, 16:9, modern format, alt present`, async ({ page }) => {
    await page.goto(path, { waitUntil: 'networkidle' });

    const hero = page.locator('img.doc-hero');
    await expect(hero, `doc-hero missing on ${name}`).toHaveCount(1);
    await expect(hero, `doc-hero not visible on ${name}`).toBeVisible();

    const dims = await hero.evaluate((img: HTMLImageElement) => ({
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      complete: img.complete,
      currentSrc: img.currentSrc,
    }));
    expect(dims.complete, `doc-hero did not finish loading on ${name}`).toBe(true);
    expect(dims.naturalWidth, `zero natural width on ${name}`).toBeGreaterThan(0);
    const aspect = dims.naturalWidth / dims.naturalHeight;
    expect(aspect, `aspect ${aspect} out of ~1.78 ±10% on ${name}`).toBeGreaterThan(1.6);
    expect(aspect, `aspect ${aspect} out of ~1.78 ±10% on ${name}`).toBeLessThan(1.96);
    expect(dims.currentSrc, `doc-hero should serve a modern format, not bare JPEG, on ${name}`).not.toMatch(/\.jpe?g($|\?)/);

    const alt = await hero.getAttribute('alt');
    expect(alt, `alt missing on ${name}`).toBeTruthy();
  });
}

test('G11 Hero: capture homepage banner screenshot for evidence', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  const banner = page.locator('img.hero-stage-img');
  await banner.screenshot({ path: 'evidence/hero_banner/hero_banner.png' });
});
