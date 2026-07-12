#!/usr/bin/env node
// Storyweave P3 measure — T1 interactive pass (headless Playwright, doctrine_visual_inspection T1).
// Drives the P3-shipped client features a static capture (T0) cannot exercise, and spot-checks
// light-theme axe (T0 captures dark only) so "axe-0 both themes" is fully verified.
// Zero Chrome extension, zero login. Read-only GETs of the operator's own public site.
//
//   node scripts/p3_interactions.mjs --base https://adna.network
//
// Prints PASS/FAIL/INFO per check + a SUMMARY line; exits 1 if any HARD check fails.
import { createRequire } from 'node:module';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
function resolvePkgDir(pkg) {
  const cands = [
    process.env.PW_PKG_DIR && path.join(process.env.PW_PKG_DIR, pkg),
    process.env.PW_DIR && path.join(process.env.PW_DIR, 'node_modules', pkg),
    path.resolve(__dirname, '../site/node_modules', pkg),
    path.resolve(__dirname, '../node_modules', pkg),
    path.resolve(process.cwd(), 'node_modules', pkg),
    path.resolve(process.cwd(), 'site/node_modules', pkg),
  ].filter(Boolean);
  for (const p of cands) if (existsSync(p)) return p;
  return pkg;
}
const { chromium } = require(resolvePkgDir('@playwright/test'));
let AxeBuilder = null;
try { ({ default: AxeBuilder } = require(resolvePkgDir('@axe-core/playwright'))); } catch { /* axe optional */ }

const { values: a } = parseArgs({ options: { base: { type: 'string', default: 'https://adna.network' } } });
const BASE = a.base.replace(/\/$/, '');

let hardFail = 0, softFail = 0, pass = 0;
const check = (ok, hard, msg) => { if (ok) { pass++; console.log('PASS ' + msg); } else { if (hard) hardFail++; else softFail++; console.log((hard ? 'FAIL ' : 'WARN ') + msg); } };
const info = (msg) => console.log('INFO ' + msg);

const browser = await chromium.launch();

async function newPage(theme = 'dark') {
  const ctx = await browser.newContext({ colorScheme: theme });
  await ctx.addInitScript((t) => { try { localStorage.setItem('theme', t); } catch {} }, theme);
  const page = await ctx.newPage();
  return { ctx, page };
}

// ---------- Registry: /vaults ----------
try {
  const { ctx, page } = await newPage('dark');
  await page.goto(BASE + '/vaults', { waitUntil: 'networkidle', timeout: 45000 });

  // R1 — progressive enhancement swap
  const pe = await page.evaluate(() => {
    const filter = document.querySelector('[data-vaults-filter]');
    const nojs = document.querySelector('[data-nojs-facets]');
    return { filterVisible: filter && !filter.hidden, nojsHidden: nojs ? nojs.hidden : null };
  });
  check(pe.filterVisible === true && pe.nojsHidden === true, true,
    `R1 progressive-enhancement: filter toolbar revealed (${pe.filterVisible}) + no-JS facets retired (${pe.nojsHidden})`);

  // R2 — rendered vs declared (card count === All-chip vault_count === 68)
  const counts = await page.evaluate(() => {
    const cards = document.querySelectorAll('[data-vault-card]').length;
    const allChip = document.querySelector('[data-filter-class="all"] .filter-count');
    const declared = allChip ? parseInt(allChip.textContent.trim(), 10) : null;
    const chips = document.querySelectorAll('.filter-chip').length;
    return { cards, declared, chips };
  });
  info(`R2 registry: ${counts.cards} cards rendered · All-chip declares ${counts.declared} · ${counts.chips} filter chips (All + classes)`);
  check(counts.cards === counts.declared, true, `R2 rendered-vs-declared: ${counts.cards} rendered === ${counts.declared} declared (no silent drop)`);
  check(counts.cards === 68, true, `R2 completeness: 68 vaults present (64→68 fix holds)`);

  // R3 — purpose line per card (headline_mission || note; expect 67/68 populated)
  const purpose = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll('[data-vault-card]'));
    const missing = [];
    let withPurpose = 0;
    for (const c of cards) {
      const p = c.querySelector('.vault-card-purpose');
      if (p && p.textContent.trim()) withPurpose++;
      else missing.push(c.querySelector('h3 a')?.getAttribute('href') || '?');
    }
    return { withPurpose, total: cards.length, missing };
  });
  info(`R3 purpose lines: ${purpose.withPurpose}/${purpose.total}${purpose.missing.length ? ' — missing on: ' + purpose.missing.join(', ') : ''}`);
  check(purpose.withPurpose >= 67, true, `R3 purpose line renders on ≥67/68 cards (note fallback; headline_mission still 0/68 → Hestia)`);

  // R5 — search narrows the set + updates the live count
  const search = page.locator('#vault-search');
  await search.fill('molecul');
  await page.waitForTimeout(250);
  const afterSearch = await page.evaluate(() => ({
    visible: document.querySelectorAll('[data-vault-card]:not([hidden])').length,
    count: (document.querySelector('.vaults-result-count')?.textContent || '').trim(),
  }));
  check(afterSearch.visible > 0 && afterSearch.visible < 68 && /of\s+68|of\s+\d+/.test(afterSearch.count), true,
    `R5 search "molecul" → ${afterSearch.visible} visible, status="${afterSearch.count}"`);
  await search.fill('');
  await page.waitForTimeout(200);
  const cleared = await page.evaluate(() => document.querySelectorAll('[data-vault-card]:not([hidden])').length);
  check(cleared === 68, true, `R5 clear search → back to ${cleared}/68`);

  // R6 — class filter chip narrows to that class + sets aria-pressed
  const platformCount = await page.evaluate(() => document.querySelectorAll('[data-vault-card][data-class="platform"]').length);
  await page.locator('.filter-chip[data-filter-class="platform"]').click();
  await page.waitForTimeout(200);
  const afterFilter = await page.evaluate(() => ({
    visible: document.querySelectorAll('[data-vault-card]:not([hidden])').length,
    pressed: document.querySelector('.filter-chip[data-filter-class="platform"]')?.getAttribute('aria-pressed'),
  }));
  check(afterFilter.visible === platformCount && afterFilter.pressed === 'true', true,
    `R6 filter platform → ${afterFilter.visible} visible === ${platformCount} platform cards · aria-pressed=${afterFilter.pressed}`);
  await page.locator('.filter-chip[data-filter-class="all"]').click();
  await page.waitForTimeout(150);

  // R7 — adopt/publish rail links resolve
  const rail = await page.evaluate(() => Array.from(document.querySelectorAll('.vaults-rail a')).map(a => a.getAttribute('href')));
  info(`R7 rail links: ${rail.join(' , ')}`);
  const wantRail = ['/get-started/', '/how/publishing/'];
  for (const href of wantRail) {
    const present = rail.includes(href);
    let ok = present;
    if (present) { try { const r = await page.request.get(BASE + href); ok = r.ok(); info(`R7 GET ${href} → ${r.status()}`); } catch (e) { ok = false; info(`R7 GET ${href} → error ${e.message.slice(0,80)}`); } }
    check(ok, true, `R7 rail → ${href} present + resolves 200`);
  }
  await ctx.close();
} catch (e) { check(false, true, `Registry block threw: ${e.message.slice(0, 160)}`); }

// ---------- Both-theme axe spot-check (T0 = dark; confirm light) ----------
if (AxeBuilder) {
  for (const route of ['/vaults', '/vaults/Operations.aDNA']) {
    try {
      const { ctx, page } = await newPage('light');
      await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 45000 });
      await page.evaluate(() => document.documentElement.classList.remove('dark'));
      const r = await new AxeBuilder({ page }).analyze();
      check(r.violations.length === 0, true, `A(light) ${route} axe-0 (light theme) — ${r.violations.length} violations${r.violations.length ? ': ' + r.violations.map(v => v.id).join(',') : ''}`);
      await ctx.close();
    } catch (e) { check(false, true, `Axe(light) ${route} threw: ${e.message.slice(0, 120)}`); }
  }
} else { info('axe: @axe-core/playwright not resolved — skipped light-theme spot-check'); }

// ---------- Hero (/) deep-link twin ----------
try {
  const { ctx, page } = await newPage('dark');
  await page.goto(BASE + '/', { waitUntil: 'networkidle', timeout: 45000 });
  const hero = await page.evaluate(() => {
    const nav = document.querySelector('nav.hero-graph-nodelist');
    const links = nav ? Array.from(nav.querySelectorAll('li a')).map(a => a.getAttribute('href')) : [];
    return { present: !!nav, links };
  });
  info(`H1 hero node-list twin: present=${hero.present}, ${hero.links.length} deep-links`);
  check(hero.present && hero.links.length > 0 && hero.links.every(h => /^\/vaults\/.+\/$/.test(h)), true,
    `H1 hero a11y deep-link twin present with ${hero.links.length} /vaults/<slug>/ links`);
  if (hero.links.length) {
    const r = await page.request.get(BASE + hero.links[0]);
    check(r.ok(), true, `H1 first hero deep-link ${hero.links[0]} → ${r.status()}`);
  }
  await ctx.close();
} catch (e) { check(false, true, `Hero block threw: ${e.message.slice(0, 160)}`); }

// ---------- Graph (/vaults/graph) deep-link twin ----------
try {
  const { ctx, page } = await newPage('dark');
  await page.goto(BASE + '/vaults/graph', { waitUntil: 'networkidle', timeout: 45000 });
  const g = await page.evaluate(() => {
    const nav = document.querySelector('nav.graph-node-list');
    const links = nav ? Array.from(nav.querySelectorAll('li a')).map(a => a.getAttribute('href')) : [];
    return { present: !!nav, links };
  });
  info(`G1 graph node-list twin: present=${g.present}, ${g.links.length} deep-links`);
  check(g.present && g.links.length > 0, true, `G1 graph a11y deep-link twin present with ${g.links.length} node links`);
  if (g.links.length) { const r = await page.request.get(BASE + g.links[0]); check(r.ok(), true, `G1 first graph deep-link ${g.links[0]} → ${r.status()}`); }
  await ctx.close();
} catch (e) { check(false, true, `Graph block threw: ${e.message.slice(0, 160)}`); }

// ---------- Illustrative labels + on-ramps (copy-dependent → soft) ----------
async function bodyText(route) {
  const { ctx, page } = await newPage('dark');
  await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 45000 });
  const data = await page.evaluate(() => ({
    text: document.body.innerText,
    links: Array.from(document.querySelectorAll('a')).map(a => a.getAttribute('href') || ''),
  }));
  await ctx.close();
  return data;
}
try {
  const uc = await bodyText('/use-cases');
  check(/illustrative/i.test(uc.text), false, `L1 /use-cases carries an "illustrative" label (ruling-A honesty)`);
  check(uc.links.some(h => h && h.includes('/commons')), false, `L1 /use-cases points to /commons for real proof`);
  check(uc.links.some(h => h && (h.includes('/get-started') || h.includes('/commons'))), false, `O1 /use-cases has a real on-ramp (not browse-only)`);

  const ad = await bodyText('/adopters');
  check(/illustrative/i.test(ad.text) || ad.links.some(h => h && h.includes('/commons')), false, `L2 /adopters labelled illustrative or points to /commons`);

  const co = await bodyText('/community');
  check(co.links.some(h => h && (h.includes('/get-started') || h.includes('/how/publishing') || h.includes('github.com'))), false, `O2 /community ladder rungs wired to actions`);

  const home = await bodyText('/');
  const pillars = ['Federated', 'Co-owned', 'Open', 'agents'].filter(w => new RegExp(w, 'i').test(home.text));
  info(`O3 home §1 pillar words found: ${pillars.join(', ') || '(none)'}`);
  check(pillars.length >= 3, false, `O3 home §1 4-pillar payoff present (${pillars.length}/4 pillar words)`);
} catch (e) { check(false, false, `Labels/on-ramps block threw: ${e.message.slice(0, 160)}`); }

await browser.close();
console.log(`\nSUMMARY: ${pass} passed, ${hardFail} hard-failed, ${softFail} soft-warned`);
process.exit(hardFail > 0 ? 1 : 0);
