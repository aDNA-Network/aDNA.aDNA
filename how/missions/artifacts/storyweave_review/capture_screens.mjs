// Operation Storyweave O1/O3 — reproducible screenshot + content-capture harness.
// Renders every KEY SURFACE of live adna.network across 3 viewports x 2 themes and
// writes full-page PNGs + a capture_report.json (title/desc/h1/body-len/height/console-errors).
// Run from site/:  cd site && node ../how/missions/artifacts/storyweave_review/capture_screens.mjs
// Chrome MCP was unavailable this run; Playwright is the mission's sanctioned 2nd screenshot instrument.
// Target = LIVE (== committed HEAD: git log d687f4a..HEAD -- site/ is empty).
import { chromium } from '@playwright/test';
import fs from 'node:fs';

const BASE = 'https://adna.network';
const OUT = '/Users/stanley/aDNA/aDNA.aDNA/how/missions/artifacts/storyweave_review/screens';
fs.mkdirSync(OUT, { recursive: true });

const surfaces = [
  ['home', '/'],
  ['what-is-adna', '/learn/what-is-adna'],
  ['get-started', '/get-started'],
  ['learn', '/learn'],
  ['vaults', '/vaults'],
  ['vaults-graph', '/vaults/graph'],
  ['network', '/network'],
  ['commons', '/commons'],
  ['community', '/community'],
  ['use-cases', '/use-cases'],
  ['reference', '/reference'],
];
const viewports = [['desktop', 1440, 900], ['tablet', 834, 1112], ['mobile', 375, 812]];
const themes = ['dark', 'light'];

const report = [];
const browser = await chromium.launch();
for (const [sName, path] of surfaces) {
  for (const theme of themes) {
    const ctx = await browser.newContext({ colorScheme: theme, viewport: { width: 1440, height: 900 } });
    await ctx.addInitScript((t) => { try { localStorage.setItem('theme', t); } catch (e) {} }, theme);
    const page = await ctx.newPage();
    const errors = [];
    page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 240)); });
    let status = 0;
    const t0 = Date.now();
    try {
      const resp = await page.goto(BASE + path, { waitUntil: 'networkidle', timeout: 45000 });
      status = resp ? resp.status() : 0;
    } catch (e) { errors.push('GOTO:' + e.message.slice(0, 160)); }
    await page.evaluate((t) => document.documentElement.classList.toggle('dark', t === 'dark'), theme);
    const loadMs = Date.now() - t0;
    for (const [vName, w, h] of viewports) {
      await page.setViewportSize({ width: w, height: h });
      await page.waitForTimeout(sName === 'vaults-graph' ? 1600 : 700);
      try {
        await page.screenshot({ path: `${OUT}/${sName}__${vName}__${theme}.png`, fullPage: true });
      } catch (e) { errors.push(`SHOT ${vName}:` + e.message.slice(0, 120)); }
    }
    if (theme === 'dark') {
      const meta = await page.evaluate(() => ({
        title: document.title,
        desc: document.querySelector('meta[name=description]')?.content || '',
        ogTitle: document.querySelector('meta[property="og:title"]')?.content || '',
        h1: (document.querySelector('h1')?.innerText || '').slice(0, 240),
        h2count: document.querySelectorAll('h2').length,
        bodyLen: document.body.innerText.length,
        fullH: document.documentElement.scrollHeight,
      }));
      report.push({ surface: sName, path, status, loadMs, ...meta, consoleErrors: errors.slice(0, 6) });
    }
    await ctx.close();
  }
  console.log('captured', sName);
}
await browser.close();
fs.writeFileSync(`${OUT}/../capture_report.json`, JSON.stringify(report, null, 2));
console.log('DONE', report.length, 'surfaces ->', OUT);
