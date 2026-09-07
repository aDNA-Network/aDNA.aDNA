#!/usr/bin/env node
/**
 * Red-proof for crawl_haussmann_b1.mjs — HAUSSMANN GR-6 O2 (V2).
 *
 * Convention 14: an instrument is not believed until it has been DEMONSTRATED TO FAIL.
 * GR-3's amendment (F-z): a demonstration is only worth what it can ATTRIBUTE — so every
 * case declares which assertion it targets, and a red arriving through a different one is
 * reported as a HARNESS BUG rather than counted as a pass.
 *
 * ── THE SURFACE, NAMED (convention 18) ────────────────────────────────────────────────
 * These cases run against a LOCAL FIXTURE SERVER, not production. That is not a
 * convenience: AC-2's mutation is "remove a route and the inventory shrinks", and
 * production cannot have a route removed from it. The fixture exercises the crawler's
 * LOGIC (enumeration, shrink detection, reach assertions, non-200 handling). Its REACH
 * against the real origin is exercised separately by a live run, recorded in the O2 record.
 * Neither surface substitutes for the other and both are stated.
 *
 * Usage: node scripts/crawl_haussmann_b1_redtest.mjs
 */

import { createServer } from 'node:http';
import { spawn } from 'node:child_process';
import { mkdtempSync, readFileSync, existsSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT = fileURLToPath(new URL('./crawl_haussmann_b1.mjs', import.meta.url));

// ── Fixture site ──────────────────────────────────────────────────────────────────────

const page = (title, h1, body) =>
  `<html><head><title>${title}</title><meta name="description" content="fixture"></head>` +
  `<body><main><h1>${h1}</h1>${body}</main></body></html>`;

const baselineRoutes = () => new Map([
  ['/',      page('Home', 'Home', '<a href="/a/">A</a><a href="/b/">B</a><a href="/gone/">G</a>')],
  ['/a/',    page('A', 'A', '<a href="/b/">B</a>')],
  ['/b/',    page('B', 'B', 'leaf')],
  ['/gone/', page('Gone', 'Gone', 'the mutation target')],
]);

/**
 * Start a fixture server. `sitemapExtra` lists paths advertised in the sitemap but NOT
 * served — the shape that makes a 404 a datum. The base URL is resolved at request time
 * from the live address, so the port is never guessed.
 */
function startFixture(routes, opts = {}) {
  let base = '';
  const server = createServer((req, res) => {
    const url = new URL(req.url, 'http://127.0.0.1');
    let p = url.pathname;

    if (opts.offOriginRedirect && p === '/a/') {
      res.writeHead(302, { location: 'https://example.com/elsewhere/' });
      return res.end();
    }
    if (p === '/sitemap-index.xml') {
      res.writeHead(200, { 'content-type': 'application/xml' });
      return res.end(`<?xml version="1.0"?><sitemapindex><sitemap><loc>${base}/sitemap-0.xml</loc></sitemap></sitemapindex>`);
    }
    if (p === '/sitemap-0.xml') {
      const paths = opts.emptySitemap ? [] : [...routes.keys(), ...(opts.sitemapExtra || [])];
      const locs = paths.map((r) => `<url><loc>${base}${r}</loc></url>`).join('');
      res.writeHead(200, { 'content-type': 'application/xml' });
      return res.end(`<?xml version="1.0"?><urlset>${locs}</urlset>`);
    }
    if (!p.endsWith('/')) p += '/';
    if (routes.has(p)) {
      res.writeHead(200, { 'content-type': 'text/html', 'last-modified': 'Mon, 01 Sep 2026 00:00:00 GMT' });
      return res.end(routes.get(p));
    }
    res.writeHead(404, { 'content-type': 'text/html' });
    res.end('<html><head><title>404</title></head><body>not found</body></html>');
  });
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => {
      base = `http://127.0.0.1:${server.address().port}`;
      resolve({ server, base, close: () => new Promise((r) => server.close(r)) });
    });
  });
}

// ── Runner ────────────────────────────────────────────────────────────────────────────

const runCrawler = (origin, outDir) => new Promise((resolve) => {
  const child = spawn(process.execPath, [SCRIPT, '--origin', origin, '--out', outDir, '--json'],
    { stdio: ['ignore', 'pipe', 'pipe'] });
  let out = '', err = '';
  child.stdout.on('data', (d) => (out += d));
  child.stderr.on('data', (d) => (err += d));
  child.on('close', (code) => resolve({ code, out, err }));
});

const csvPath = (dir) => join(dir, 'page_inventory.csv');
const rowCount = (dir) => existsSync(csvPath(dir))
  ? readFileSync(csvPath(dir), 'utf8').trim().split('\n').length - 1
  : null;

// ── Cases ─────────────────────────────────────────────────────────────────────────────

const results = [];
const record = (name, targets, pass, detail, harnessBug = false) => {
  results.push({ name, targets, pass, harnessBug });
  console.log(`${harnessBug ? '  BUG ' : pass ? '  PASS' : '  FAIL'}  [${targets}] ${name}`);
  console.log(`        ${detail}`);
};

/** One case: bring a fixture up, crawl it, tear it down. Never leaks a listener. */
async function caseRun(tmp, label, routes, opts = {}) {
  const fx = await startFixture(routes, opts);
  const out = join(tmp, label);
  try {
    const r = await runCrawler(fx.base, out);
    return { ...r, out };
  } finally {
    await fx.close();
  }
}

async function run() {
  const tmp = mkdtempSync(join(tmpdir(), 'b1-redtest-'));
  console.log('crawl_haussmann_b1 red-proof — LOCAL FIXTURE SERVER (surface named: NOT production)\n');
  try {
    // CONTROL 0 — the baseline crawls clean at 4 rows. Without this, every shrink below
    // is unattributable: a 3 could mean "the mutation worked" or "it was always 3".
    {
      const r = await caseRun(tmp, 'c0', baselineRoutes());
      const n = rowCount(r.out);
      record('CONTROL: baseline fixture crawls clean at 4 rows', 'emission',
        r.code === 0 && n === 4, `exit=${r.code} rows=${n} — expected exit=0 rows=4`);
    }

    // CASE 1 — the AC-2 mutation: a route gone from the build shrinks the inventory.
    {
      const routes = baselineRoutes(); routes.delete('/gone/');
      const r = await caseRun(tmp, 'c1', routes);
      const n = rowCount(r.out);
      record('MUTATION: a route removed from the build shrinks the inventory', 'enumeration',
        r.code === 0 && n === 3, `exit=${r.code} rows=${n} — expected exit=0 rows=3 (was 4)`);
    }

    // CASE 2 — restore. Proves case 1 measured the ROUTE and not a coincidental failure.
    {
      const r = await caseRun(tmp, 'c2', baselineRoutes());
      const n = rowCount(r.out);
      record('RESTORE: putting the route back returns the inventory to 4', 'enumeration',
        r.code === 0 && n === 4, `exit=${r.code} rows=${n} — expected exit=0 rows=4`);
    }

    // CASE 3 — the check_live_headers scar: an off-origin landing must fail, and must
    // emit NOTHING. A partial inventory would be worse than none.
    {
      const r = await caseRun(tmp, 'c3', baselineRoutes(), { offOriginRedirect: true });
      const isReach = /REACH FAILURE/.test(r.err);
      const wroteNothing = rowCount(r.out) === null;
      const pass = r.code === 1 && isReach && wroteNothing;
      const bug = r.code === 1 && !isReach;
      record('REACH: an off-origin redirect fails loudly and emits NOTHING', 'reach:same-origin',
        pass, `exit=${r.code} reachError=${isReach} wroteNothing=${wroteNothing} — expected 1/true/true` +
        (bug ? '\n        ⛔ HARNESS BUG: it failed, but NOT through the same-origin assertion.' : ''), bug);
    }

    // CASE 4 — a 0-entry sitemap must fail rather than emit a 0-row inventory. GR-2's
    // "a canonical-hash run that produced a 0-line file and compared cleanly against
    // nothing" — the cheapest possible false green.
    {
      const r = await caseRun(tmp, 'c4', baselineRoutes(), { emptySitemap: true });
      const isReach = /REACH FAILURE/.test(r.err);
      record('REACH: a 0-entry sitemap fails rather than emitting an empty inventory',
        'reach:sitemap-nonempty', r.code === 1 && isReach && rowCount(r.out) === null,
        `exit=${r.code} reachError=${isReach} rows=${rowCount(r.out)} — expected 1/true/null`);
    }

    // CASE 5 — a 404 on a sitemap-listed route is DATA. Skipping it would let the
    // inventory silently under-report exactly the defect it exists to find.
    {
      const r = await caseRun(tmp, 'c5', baselineRoutes(), { sitemapExtra: ['/ghost/'] });
      const csv = existsSync(csvPath(r.out)) ? readFileSync(csvPath(r.out), 'utf8') : '';
      const ghost = csv.split('\n').find((l) => l.startsWith('http') && l.includes('/ghost/'));
      const is404 = !!ghost && ghost.includes(',404,');
      record('A 404 in the sitemap is RECORDED as data, never silently skipped', 'non-200-is-data',
        r.code === 0 && is404 && rowCount(r.out) === 5,
        `exit=${r.code} ghostRowIs404=${is404} rows=${rowCount(r.out)} — expected 0/true/5`);
    }
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }

  const pass = results.filter((r) => r.pass).length;
  const bugs = results.filter((r) => r.harnessBug).length;
  console.log(`\nred-proof: ${pass} pass / ${results.length - pass} fail / ${bugs} harness bug (${results.length} cases)`);
  console.log('surface: local fixture server. Reach against the real origin is a separate live run.');
  return pass === results.length && bugs === 0;
}

run().then((ok) => process.exit(ok ? 0 : 1));
