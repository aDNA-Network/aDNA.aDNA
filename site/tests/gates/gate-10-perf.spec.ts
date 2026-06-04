/**
 * Gate 10: Performance Invariants
 * Criterion: No JPEG hero images, hero img has sizes attribute, no render-blocking
 * external scripts in <head>, no font-display:block in loaded stylesheets.
 * Established pre-D6 (2026-04-24) per D5 AAR finding: expand gates before implementing.
 */
import { test, expect } from '@playwright/test';

test('G10 Perf: hero image uses modern format (WebP/AVIF, not bare JPEG)', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  // When using <picture>, modern formats are in <source> elements; <img> is the legacy fallback.
  // Check either: a <source> in the hero uses avif/webp, or the img src itself is not a JPEG.
  const hasPictureSource = await page.evaluate(() => {
    const picture = document.querySelector('.hero-stage picture');
    if (picture) {
      const sources = Array.from(picture.querySelectorAll('source'));
      return sources.some(s => {
        const type = s.getAttribute('type') ?? '';
        return type === 'image/avif' || type === 'image/webp';
      });
    }
    return false;
  });

  if (!hasPictureSource) {
    // Fallback: plain <img> must not be a JPEG
    const heroImg = page.locator('.hero-stage-img').first();
    const src = await heroImg.getAttribute('src');
    expect(src, 'Hero image must use WebP or AVIF — not a bare JPEG').not.toMatch(/\.jpe?g(\?|$)/i);
  } else {
    expect(hasPictureSource, 'Hero banner <picture> should offer at least one modern format source (AVIF or WebP)').toBe(true);
  }
});

test('G10 Perf: hero image has sizes attribute for responsive loading', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const heroImg = page.locator('.hero-stage-img').first();
  const sizes = await heroImg.getAttribute('sizes');
  expect(sizes, 'Hero image must have a sizes attribute for correct responsive loading').toBeTruthy();
});

test('G10 Perf: hero image has srcset for multiple breakpoints', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const heroImg = page.locator('.hero-stage-img').first();
  const srcset = await heroImg.getAttribute('srcset');
  expect(srcset, 'Hero image must have srcset for responsive width variants').toBeTruthy();
  // Expect at least 2 width descriptors
  const widthDescriptors = (srcset ?? '').match(/\d+w/g) ?? [];
  expect(widthDescriptors.length, 'srcset should include at least 2 width variants').toBeGreaterThanOrEqual(2);
});

test('G10 Perf: no render-blocking external scripts in <head>', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  // External scripts with src= that lack async/defer are render-blocking
  const blockingScripts = await page.evaluate(() => {
    const scripts = Array.from(document.head.querySelectorAll('script[src]'));
    return scripts.filter(s => !s.hasAttribute('async') && !s.hasAttribute('defer') && !s.hasAttribute('type')).map(s => s.getAttribute('src'));
  });

  expect(blockingScripts, 'No render-blocking external scripts should exist in <head>').toHaveLength(0);
});

test('G10 Perf: no font-display:block in page styles (FOIT prevention)', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const hasFontDisplayBlock = await page.evaluate(() => {
    for (const sheet of Array.from(document.styleSheets)) {
      try {
        for (const rule of Array.from(sheet.cssRules ?? [])) {
          if (rule instanceof CSSFontFaceRule) {
            const fd = rule.style.getPropertyValue('font-display');
            if (fd === 'block') return true;
          }
        }
      } catch {
        // Cross-origin stylesheets throw — skip
      }
    }
    return false;
  });

  expect(hasFontDisplayBlock, 'No @font-face rule should use font-display:block (causes invisible text on slow connections)').toBe(false);
});
