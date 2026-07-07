#!/usr/bin/env node
// aDNA canonical visual-inspection harness (Tier-0, headless Playwright).
// Doctrine: what/doctrine/doctrine_visual_inspection.md. Zero Chrome extension, zero login.
//
// Usage (run from any web vault; resolves Playwright from site/node_modules automatically):
//   node scripts/visual_capture.mjs --base https://adna.network --routes /,/vaults/graph
//   node scripts/visual_capture.mjs --base http://localhost:4321 --routes / --viewports mobile-lg,tablet,desktop --themes dark,light --axe --out ./out
//
// Output: <out>/<surface>__<viewport>__<theme>.png  +  <out>/capture_report.json
//   (report row: surface, path, status, loadMs, title, desc, ogTitle, h1, h2count, bodyLen, fullH, [axeViolations], consoleErrors)
//
// Args: --base <url>  --routes </a,/b,...>  --viewports <names|all>  --themes <dark,light>
//       --out <dir>  --report <path>  --axe  --timeout <ms>
import { createRequire } from 'node:module';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

// --- portable Playwright resolver: never assume a specific install location -----------------
function resolvePkgDir(pkg) {
  const cands = [
    process.env.PW_PKG_DIR && path.join(process.env.PW_PKG_DIR, pkg),
    process.env.PW_DIR && path.join(process.env.PW_DIR, 'node_modules', pkg),
    path.resolve(__dirname, '../site/node_modules', pkg),   // typical web vault layout
    path.resolve(__dirname, '../node_modules', pkg),
    path.resolve(process.cwd(), 'node_modules', pkg),
    path.resolve(process.cwd(), 'site/node_modules', pkg),
  ].filter(Boolean);
  for (const p of cands) if (existsSync(p)) return p;
  return pkg; // last resort: bare resolution from cwd
}
let chromium;
try {
  ({ chromium } = require(resolvePkgDir('@playwright/test')));
} catch (e) {
  console.error('FATAL: could not resolve @playwright/test. Install it (e.g. in site/) or set PW_DIR/PW_PKG_DIR.\n' + e.message);
  process.exit(2);
}

const { values: a } = parseArgs({ options: {
  base:      { type: 'string', default: 'http://localhost:4321' },
  routes:    { type: 'string', default: '/' },
  viewports: { type: 'string', default: 'mobile-lg,tablet,desktop' },
  themes:    { type: 'string', default: 'dark,light' },
  out:       { type: 'string', default: './visual_capture_out' },
  report:    { type: 'string' },
  axe:       { type: 'boolean', default: false },
  timeout:   { type: 'string', default: '45000' },
} });

const VIEWPORTS = JSON.parse(readFileSync(path.resolve(__dirname, 'viewports.json'), 'utf8'));
const base = a.base.replace(/\/$/, '');
const routes = a.routes.split(',').map(s => s.trim()).filter(Boolean);
const vpNames = a.viewports === 'all' ? Object.keys(VIEWPORTS).filter(k => !k.startsWith('_')) : a.viewports.split(',').map(s => s.trim());
const themes = a.themes.split(',').map(s => s.trim());
const out = path.resolve(a.out);
const timeout = Number(a.timeout);
mkdirSync(out, { recursive: true });

const surfaceName = (p) => (p === '/' ? 'home' : p.replace(/^\//, '').replace(/\/+$/, '').replace(/[\/]/g, '-') || 'home');

let AxeBuilder = null;
if (a.axe) { try { ({ default: AxeBuilder } = require(resolvePkgDir('@axe-core/playwright'))); } catch { console.warn('WARN: --axe requested but @axe-core/playwright not found; skipping a11y.'); } }

const report = [];
const browser = await chromium.launch();
for (const route of routes) {
  const sName = surfaceName(route);
  for (const theme of themes) {
    const ctx = await browser.newContext({ colorScheme: theme, viewport: { width: 1440, height: 900 } });
    await ctx.addInitScript((t) => { try { localStorage.setItem('theme', t); } catch (e) {} }, theme);
    const page = await ctx.newPage();
    const errors = [];
    page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 240)); });
    let status = 0; const t0 = Date.now();
    try { const r = await page.goto(base + route, { waitUntil: 'networkidle', timeout }); status = r ? r.status() : 0; }
    catch (e) { errors.push('GOTO:' + e.message.slice(0, 160)); }
    await page.evaluate((t) => document.documentElement.classList.toggle('dark', t === 'dark'), theme);
    const loadMs = Date.now() - t0;
    for (const vp of vpNames) {
      const v = VIEWPORTS[vp]; if (!v) { console.warn('unknown viewport', vp); continue; }
      await page.setViewportSize({ width: v.width, height: v.height });
      await page.waitForTimeout(sName.includes('graph') ? 1600 : 600);
      try { await page.screenshot({ path: `${out}/${sName}__${vp}__${theme}.png`, fullPage: true }); }
      catch (e) { errors.push(`SHOT ${vp}:` + e.message.slice(0, 120)); }
    }
    if (theme === themes[0]) {
      const meta = await page.evaluate(() => ({
        title: document.title,
        desc: document.querySelector('meta[name=description]')?.content || '',
        ogTitle: document.querySelector('meta[property="og:title"]')?.content || '',
        h1: (document.querySelector('h1')?.innerText || '').slice(0, 240),
        h2count: document.querySelectorAll('h2').length,
        bodyLen: document.body.innerText.length,
        fullH: document.documentElement.scrollHeight,
      }));
      let axeViolations;
      if (AxeBuilder) { try { const r = await new AxeBuilder({ page }).analyze(); axeViolations = r.violations.length; } catch {} }
      report.push({ surface: sName, path: route, status, loadMs, ...meta, ...(axeViolations !== undefined ? { axeViolations } : {}), consoleErrors: errors.slice(0, 6) });
    }
    await ctx.close();
  }
  console.log('captured', sName);
}
await browser.close();
const reportPath = a.report ? path.resolve(a.report) : path.join(out, 'capture_report.json');
writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log(`DONE ${report.length} surfaces × ${vpNames.length} viewports × ${themes.length} themes → ${out}`);
