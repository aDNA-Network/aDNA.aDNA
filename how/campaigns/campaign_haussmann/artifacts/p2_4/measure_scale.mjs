#!/usr/bin/env node
/**
 * P2.4 O1 — the 10x scale test, as numbers rather than an impression.
 *
 * "The surface would still work at 740" is an acceptance criterion, and "it rendered"
 * does not answer it. This measures what actually degrades: page length (how far a
 * reader scrolls), DOM size (what the browser holds), and render time.
 *
 * Also captures a PNG per variant so the operator picks by looking, not by reading a
 * description of a picture. Run from the vault root.
 */
import { readFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const { chromium } = await import(
  pathToFileURL(join(process.cwd(), 'site/node_modules/playwright/index.mjs')).href
);

const SHOTS = join(HERE, 'captures');
mkdirSync(SHOTS, { recursive: true });
const registry = JSON.parse(readFileSync(join(process.cwd(), 'site/src/data/vaults.json'), 'utf8'));
const REAL = registry.vaults.length;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto(`file://${join(HERE, 'registry_comps.html')}`);

const rows = [];
for (const scale of ['real', 'x10']) {
  await page.click(`[data-s="${scale}"]`);
  for (const v of ['A', 'B', 'C']) {
    const t0 = Date.now();
    await page.click(`[data-v="${v}"]`);
    await page.waitForFunction(() => !document.querySelector('.pane:not([hidden])')?.hidden);
    const ms = Date.now() - t0;
    const m = await page.evaluate(() => {
      const p = document.querySelector('.pane:not([hidden])');
      return { height: Math.round(p.getBoundingClientRect().height), nodes: p.querySelectorAll('*').length };
    });
    rows.push({ variant: v, scale, rows: scale === 'real' ? REAL : REAL * 10, ...m, ms });
    if (scale === 'real') {
      await page.screenshot({ path: join(SHOTS, `variant_${v}__74.png`), fullPage: false });
    }
  }
}

await page.click('[data-s="x10"]'); await page.click('[data-v="C"]');
await page.screenshot({ path: join(SHOTS, 'variant_C__740_top.png'), fullPage: false });
await page.click('[data-v="A"]');
await page.screenshot({ path: join(SHOTS, 'variant_A__740_top.png'), fullPage: false });
await browser.close();

const px = (n) => n.toLocaleString();
console.log('\n=== 10× SCALE TEST — what actually degrades ===\n');
console.log('variant  scale   rows   page height     DOM nodes   switch');
console.log('-------  -----  -----   -------------   ---------   ------');
for (const r of rows) {
  console.log(`   ${r.variant}     ${r.scale.padEnd(5)}  ${String(r.rows).padStart(4)}   ` +
    `${px(r.height).padStart(9)} px   ${String(r.nodes).padStart(9)}   ${r.ms}ms`);
}
console.log('\n=== growth factor, 74 → 740 (10× the data) ===\n');
for (const v of ['A', 'B', 'C']) {
  const a = rows.find(r => r.variant === v && r.scale === 'real');
  const b = rows.find(r => r.variant === v && r.scale === 'x10');
  console.log(`   ${v}: height ×${(b.height / a.height).toFixed(1)}  ` +
    `nodes ×${(b.nodes / a.nodes).toFixed(1)}   ` +
    `(a reader scrolls ${px(b.height)} px to reach the end)`);
}
console.log(`\ncaptures → ${SHOTS}`);
