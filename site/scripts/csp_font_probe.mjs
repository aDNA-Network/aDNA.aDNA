/**
 * ⛩ HAUSSMANN GR-1 O1 — V1: THE HEADERS-APPLIED CSP PROBE.
 *
 * ⭐⭐ WHY THIS EXISTS AS A SCRIPT AND NOT AS A GATE. Campaign convention 18, ratified at this
 * mission's signature: *state the surface an instrument runs against, and whether it is the surface
 * the claim is about.* Every gate in this suite drives `astro preview`, which serves NO `vercel.json`
 * headers — so the whole 180-route `gate-42` sweep is structurally incapable of seeing a CSP
 * violation, and P1-1 shipped to production behind it. This probe closes that hole for ONE run, at
 * the moment of the fix, rather than becoming a sixth standing instrument authored at a sitting's
 * tail (conventions 15/16/17 all ruled against that, and the standing count of this desk's
 * instruments later found defective is the argument).
 *
 * ⚠ WHAT IT IS FOR, PRECISELY. It is NOT AC-1's limb — `gate-42`'s G42e is, because a `data:` URI in
 * built CSS is present or absent and therefore cannot be vacuous. Convention 13's pass (FAIL-1)
 * found that a dynamic probe CANNOT be the sole limb: the inlined subset is `cyrillic-ext`, which
 * `BaseLayout.astro:52-54` does not preload and which matches no glyph an English page paints — so a
 * browser may never load the face, leaving this probe GREEN ON THE UNFIXED TREE and its own "red
 * before the fix" clause unsatisfiable.
 *
 * ⇒ Its job is to SETTLE A DISPUTED MEASUREMENT. The Grande Revue recorded the violation firing "on
 * every page, both themes" — a TYPED figure (KW-14), not a derived one. Run against a pre-fix build,
 * this reports the real number. Either answer is publishable; the fix does not depend on it.
 *
 *   node scripts/csp_font_probe.mjs [--routes N]
 *
 * Exits 1 if any font is refused. Serves `dist/` on port 4331 — NEVER 4321, which the campaign's
 * port register assigns to the site preview and to WebForge's archetype suite (convention 6).
 */
import { createServer } from 'node:http';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, extname } from 'node:path';
import { chromium } from '@playwright/test';

const SITE = process.cwd();
const DIST = join(SITE, 'dist');
const PORT = 4331;
const ROUTE_CAP = Number(process.argv[process.argv.indexOf('--routes') + 1]) || 40;

if (!existsSync(DIST)) {
  console.error(`no build output at ${DIST} — run \`npx astro build\` first`);
  process.exit(2);
}

/** The CSP is READ FROM `vercel.json`, never transcribed — WebForge KW-14, and the whole point is
 *  to exercise the header production actually serves. A transcribed copy would test a fiction. */
const vercelJson = JSON.parse(readFileSync(join(SITE, 'vercel.json'), 'utf8'));
const cspHeader = (vercelJson.headers ?? [])
  .flatMap((h) => h.headers ?? [])
  .find((h) => h.key.toLowerCase() === 'content-security-policy');
if (!cspHeader) {
  console.error('HARNESS BUG: no Content-Security-Policy found in vercel.json — nothing to apply, '
    + 'so a clean result here would mean nothing.');
  process.exit(2);
}
const CSP = cspHeader.value;
if (!/font-src/.test(CSP)) {
  console.error('HARNESS BUG: the CSP carries no font-src directive — this probe cannot fail, '
    + 'and a green would certify a mechanism it never exercised.');
  process.exit(2);
}

const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml', '.avif': 'image/avif',
};

const server = createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  let file = join(DIST, p);
  if (existsSync(file) && readdirSync(DIST) && p.endsWith('/')) file = join(file, 'index.html');
  else if (!extname(file)) file = join(file, 'index.html');
  if (!existsSync(file)) { res.writeHead(404, { 'Content-Security-Policy': CSP }); return res.end('404'); }
  res.writeHead(200, { 'Content-Type': MIME[extname(file)] ?? 'application/octet-stream',
                       'Content-Security-Policy': CSP });
  res.end(readFileSync(file));
});

/** Frame DERIVED from the build, never typed — and reported, so a narrow run cannot read as a wide one. */
function builtRoutes() {
  const out = [];
  (function walk(dir) {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const fp = join(dir, e.name);
      if (e.isDirectory()) walk(fp);
      else if (e.name === 'index.html') out.push('/' + fp.slice(DIST.length + 1).replace(/index\.html$/, ''));
    }
  })(DIST);
  return out.sort();
}

const FONT_REFUSAL = /(refused to load the font|loading the font).*(content security policy|violates)|violates the following content security policy directive: "?font-src/i;

await new Promise((r) => server.listen(PORT, r));
const all = builtRoutes();
const routes = all.slice(0, ROUTE_CAP);
console.log(`CSP applied from vercel.json: font-src ${/font-src ([^;]*)/.exec(CSP)[1].trim()}`);
console.log(`probing ${routes.length} of ${all.length} built routes, both themes\n`);

const browser = await chromium.launch();
const hits = [];
for (const theme of ['dark', 'light']) {
  const ctx = await browser.newContext();
  // Dark is the default render (ADR-032); light is reached by seeding localStorage before load —
  // NOT by Playwright's colorScheme, which this site does not read. P4.1 shipped a dark screenshot
  // under a light filename by getting exactly this wrong.
  await ctx.addInitScript((t) => { try { localStorage.setItem('theme', t); } catch {} }, theme);
  const page = await ctx.newPage();
  page.on('console', (m) => {
    if (FONT_REFUSAL.test(m.text())) hits.push({ theme, route: page.url(), text: m.text().slice(0, 160) });
  });
  for (const r of routes) {
    const resp = await page.goto(`http://localhost:${PORT}${r}`, { waitUntil: 'networkidle' });
    if (!resp?.ok()) console.warn(`  ⚠ ${r} returned ${resp?.status()} — contributed no evidence`);
  }
  await ctx.close();
}
await browser.close();
server.close();

const pagesHit = new Set(hits.map((h) => `${h.theme} ${h.route}`)).size;
console.log(`\n=== RESULT ===`);
console.log(`font-refusal console messages: ${hits.length}`);
console.log(`distinct page×theme loads affected: ${pagesHit} of ${routes.length * 2}`);
if (hits.length) {
  console.log(`\nfirst 3:`);
  for (const h of hits.slice(0, 3)) console.log(`  [${h.theme}] ${h.route}\n    ${h.text}`);
  console.log(`\n⇒ THE SCOPE QUESTION IS SETTLED BY THIS NUMBER, not by the revue's typed "every page".`);
  process.exit(1);
}
console.log(`\n✅ zero fonts refused under the production CSP across ${routes.length} routes × 2 themes.`);
