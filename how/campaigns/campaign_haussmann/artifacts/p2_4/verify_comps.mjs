#!/usr/bin/env node
/**
 * P2.4 O1 — headless verification of registry_comps.html.
 *
 * A comp the operator is asked to choose between must actually render what it claims.
 * P2.2's precedent: "each pane renders exactly the count it claims, zero console errors."
 * Run from `site/`: node ../how/campaigns/campaign_haussmann/artifacts/p2_4/verify_comps.mjs
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));

// Playwright is installed under `site/`, and this script lives in the campaign dir — Node
// resolves bare specifiers from the SCRIPT's directory, not from cwd, so a plain
// `import 'playwright'` fails here no matter where it is invoked from. Resolve explicitly.
const { chromium } = await import(
  pathToFileURL(join(process.cwd(), 'site/node_modules/playwright/index.mjs')).href
);
const FILE = join(HERE, 'registry_comps.html');
const registry = JSON.parse(readFileSync(join(process.cwd(), 'site/src/data/vaults.json'), 'utf8'));
const REAL = registry.vaults.length;
const X10 = REAL * 10;

let pass = 0; const fail = [];
const ok = (c, label, detail = '') => c ? pass++ : fail.push(`${label}${detail ? ` — ${detail}` : ''}`);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
const consoleErrors = [];
page.on('console', m => m.type() === 'error' && consoleErrors.push(m.text()));
page.on('pageerror', e => consoleErrors.push(String(e)));
await page.goto(`file://${FILE}`);

for (const scale of ['real', 'x10']) {
  const expected = scale === 'real' ? REAL : X10;
  await page.click(`[data-s="${scale}"]`);
  for (const v of ['A', 'B', 'C']) {
    await page.click(`[data-v="${v}"]`);
    const visible = await page.locator('.pane:not([hidden])').count();
    ok(visible === 1, `${v}/${scale}: exactly one pane visible`, `${visible} visible`);

    // Every vault appears exactly once, whichever rendering it uses.
    const links = await page.locator('.pane:not([hidden]) a[href^="/vaults/"]').count();
    ok(links === expected, `${v}/${scale}: renders all ${expected} vaults`, `counted ${links}`);

    // Tier badges must be present on every row in every variant — the whole point.
    const badges = await page.locator('.pane:not([hidden]) .tier').count();
    ok(badges === expected, `${v}/${scale}: a tier badge on every row`, `counted ${badges}`);
  }
}

// C's density claim: the planned tier renders as a table, not as cards.
await page.click('[data-s="real"]'); await page.click('[data-v="C"]');
const cRows = await page.locator('.pane:not([hidden]) table.dense tbody tr').count();
const planned = registry.vaults.filter(v => ['genesis', 'genesis_stub'].includes(v.status)).length;
ok(cRows === planned, `C: planned tier renders ${planned} dense rows`, `counted ${cRows}`);

// The stated tier counts must match the registry, not a typed number.
await page.click('[data-v="A"]');
for (const [label, statuses] of [['in use', ['active']], ['chartered', ['pending']],
                                 ['planned', ['genesis', 'genesis_stub']]]) {
  const n = registry.vaults.filter(v => statuses.includes(v.status)).length;
  const shown = await page.locator(`.pane:not([hidden]) .grp`, { hasText: label }).first()
    .locator('.n').first().textContent();
  ok(Number(shown) === n, `A: "${label}" header states ${n}`, `states ${shown}`);
}

ok(consoleErrors.length === 0, 'zero console errors', consoleErrors.join(' | '));
await browser.close();

console.log(`\nASSERTIONS PASSED: ${pass}\nFAILURES:          ${fail.length}`);
if (fail.length) { console.log('\nFailures:'); fail.forEach(f => console.log(`  ✗ ${f}`)); }
process.exit(fail.length ? 1 : 0);
