#!/usr/bin/env node
/**
 * HAUSSMANN P2.3 — live deploy probe.
 *
 * Asserts against PRODUCTION that the P2.3 deploy actually landed, and reports a
 * failure count. Run from `site/`:  node ../how/campaigns/campaign_haussmann/artifacts/p2_3/deploy_probe_p2_3.mjs
 *
 * WHY THIS LIVES IN THE CAMPAIGN DIR AND NOT A SCRATCHPAD
 * ------------------------------------------------------
 * P2.2's crawl instrument was written in a session scratchpad and evaporated, so an
 * inventory four missions cite could not be regenerated. Instruments that produce
 * cited evidence live in `artifacts/`.
 *
 * WHY EVERY LIST IS DERIVED AND EVERY DERIVATION THROWS
 * ----------------------------------------------------
 * P2.1's probe reported a green "64 PASS, 0 FAIL" while testing nothing at all in its
 * canonical third: it guessed a field name, got an empty array, and iterated it happily.
 * That is the same silent-drop class P2.1 was itself fixing, reproduced inside the
 * verification instrument within a day. So: nothing here is a typed list, and
 * `derive()` throws on a zero-length result rather than passing vacuously.
 */
import { readdirSync, existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BASE = process.env.PROBE_BASE || 'https://adna.network';
const DIST = 'dist';
const CONFIG = '.vercel/output/config.json';

let pass = 0;
const failures = [];

function ok(cond, label, detail = '') {
  if (cond) { pass++; return true; }
  failures.push(`${label}${detail ? ` — ${detail}` : ''}`);
  return false;
}

/** Derive a list from the build snapshot. Throws if empty — never iterate nothing. */
function derive(label, fn) {
  const out = fn();
  if (!Array.isArray(out) || out.length === 0) {
    throw new Error(`DERIVATION EMPTY: ${label} produced ${Array.isArray(out) ? 0 : typeof out}. ` +
      `Refusing to run — an empty list passes vacuously and reports green.`);
  }
  console.log(`  derived ${String(out.length).padStart(3)} × ${label}`);
  return out;
}

async function head(url) {
  try {
    const r = await fetch(url, { redirect: 'manual' });
    return { status: r.status, location: r.headers.get('location'), headers: r.headers };
  } catch (e) { return { status: 0, error: String(e) }; }
}

async function get(url) {
  try {
    const r = await fetch(url, { redirect: 'follow' });
    return { status: r.status, body: await r.text(), headers: r.headers };
  } catch (e) { return { status: 0, body: '', error: String(e) }; }
}

console.log(`\n=== HAUSSMANN P2.3 live deploy probe → ${BASE} ===\n`);
console.log('Deriving inputs from the build snapshot:');

// ---- Derivations (each throws on empty) ----------------------------------
const specSections = derive('spec section pages (dist/reference/specification/*/)', () =>
  readdirSync(join(DIST, 'reference/specification'), { withFileTypes: true })
    .filter(d => d.isDirectory() && /^\d+-/.test(d.name))
    .map(d => `/reference/specification/${d.name}/`)
);

const redirectRoutes = derive('redirect routes (adapter config)', () =>
  JSON.parse(readFileSync(CONFIG, 'utf8')).routes
    .filter(r => [301, 302, 307, 308].includes(r.status) && r.src)
    .map(r => ({ src: r.src, to: r.headers?.Location }))
);

// Pages that should carry a date + edit link.
//
// P2.3's contract is "113 content pages carry a date", NOT "every page does" — the
// freshness layer is an OPTIONAL additive Props field (`source?:`) on
// DocumentationLayout, so a page opts in. Index/hub pages deliberately do not: a
// "last updated" on a generated listing changes whenever any child does, which is
// noise dressed as provenance.
//
// The first draft of this probe asserted "all sampled pages" and reported 8/12 as a
// FAILURE — an instrument failing against a contract nobody wrote. Corrected to test
// the real contract, and to report the genuine gap it stumbled into (below) as a
// named finding rather than as a spurious red.
const datedSample = derive('dated-page sample (content-collection pages)', () => {
  const out = [];
  for (const root of ['glossary', 'patterns', 'concepts']) {
    const dir = join(DIST, root);
    if (!existsSync(dir)) continue;
    for (const d of readdirSync(dir, { withFileTypes: true })) {
      if (!d.isDirectory()) continue;
      const idx = join(dir, d.name, 'index.html');
      if (existsSync(idx) && statSync(idx).isFile()) out.push(`/${root}/${d.name}/`);
      if (out.length >= 12) break;
    }
    if (out.length >= 12) break;
  }
  return out;
});

// FINDING (P2.3 deploy probe, 2026-08-19): four SUBSTANTIVE prose pages render through
// DocumentationLayout without opting into the freshness layer — they are not listings.
// `/provenance-audit/` is the sharpest: it is the page that tells a reader how to check
// the site's claims, and it carries no date of its own. Reported, not asserted — the fix
// is a P2.3 follow-up, not a precondition for calling this deploy landed.
const PROSE_GAP = ['/learn/what-is-adna/', '/get-started/', '/community/', '/provenance-audit/'];

// ---- 1. Spec pagination — the headline P2.3 change -----------------------
console.log('\n[1] Spec pagination (hub + 20 sections + full)');
{
  const hub = await get(`${BASE}/reference/specification/`);
  ok(hub.status === 200, 'spec hub 200', `got ${hub.status}`);
  // The hub was 163,169 bytes as one monolith before this deploy.
  ok(hub.body.length < 60000, 'spec hub is a contents page, not the monolith',
    `${hub.body.length} bytes (was 163,169 before deploy)`);

  const full = await get(`${BASE}/reference/specification/full/`);
  ok(full.status === 200, '/reference/specification/full/ 200 (was 404 before deploy)', `got ${full.status}`);
  ok(full.body.length > 100000, 'full text still carries the whole document', `${full.body.length} bytes`);

  let sectionFails = 0;
  for (const s of specSections) {
    const r = await get(`${BASE}${s}`);
    if (r.status !== 200) { sectionFails++; failures.push(`spec section ${s} → ${r.status}`); }
    else pass++;
  }
  ok(sectionFails === 0, `all ${specSections.length} spec sections 200`, `${sectionFails} failed`);

  // prev/next navigation between sections
  const mid = await get(`${BASE}${specSections[Math.floor(specSections.length / 2)]}`);
  ok(/rel="prev"|class="[^"]*prev|›|Previous|Next/i.test(mid.body),
    'section pages carry prev/next navigation');
}

// ---- 2. Freshness layer: date + edit link -------------------------------
console.log('\n[2] Freshness layer (last-updated + edit link)');
{
  let dated = 0, edited = 0;
  for (const u of datedSample) {
    const r = await get(`${BASE}${u}`);
    if (/last updated/i.test(r.body)) dated++;
    if (/edit this page|edit the standard/i.test(r.body)) edited++;
  }
  ok(dated === datedSample.length, `all ${datedSample.length} sampled content pages carry a date`,
    `${dated}/${datedSample.length} (was 0/3 before deploy)`);
  ok(edited === datedSample.length, `all ${datedSample.length} sampled content pages carry an edit link`,
    `${edited}/${datedSample.length} (was 0/3 before deploy)`);

  // The contract is a count, so assert the count — sitewide, from the build snapshot.
  const totalDated = readdirSync(DIST, { recursive: true })
    .filter(p => typeof p === 'string' && p.endsWith('index.html'))
    .filter(p => /last updated/i.test(readFileSync(join(DIST, p), 'utf8'))).length;
  ok(totalDated >= 113, 'sitewide date coverage meets P2.3\'s stated 113', `${totalDated} pages`);

  // Report the prose gap. Not an assertion — a finding, printed where it cannot be missed.
  const stillMissing = [];
  for (const u of PROSE_GAP) {
    const r = await get(`${BASE}${u}`);
    if (!/last updated/i.test(r.body)) stillMissing.push(u);
  }
  if (stillMissing.length) {
    console.log(`  ⚠ FINDING — ${stillMissing.length} substantive prose page(s) carry no freshness signal:`);
    for (const u of stillMissing) console.log(`      ${u}`);
    console.log('      (listing/hub pages are excluded by design; these are not listings)');
  }

  // The helper refuses to guess: no page should print a placeholder date.
  const r0 = await get(`${BASE}${datedSample[0]}`);
  ok(!/last updated[^<]*\b(undefined|null|NaN|Invalid)\b/i.test(r0.body),
    'no placeholder/garbage date rendered');
}

// ---- 3. Changelog + RSS -------------------------------------------------
console.log('\n[3] Changelog + RSS');
{
  const cl = await get(`${BASE}/changelog/`);
  ok(cl.status === 200, 'changelog 200', `got ${cl.status}`);
  const entries = (cl.body.match(/<article/g) || []).length;
  ok(entries >= 4, 'changelog carries ≥4 entries', `${entries} (was 2 before deploy)`);

  const rss = await get(`${BASE}/rss.xml`);
  ok(rss.status === 200, 'rss.xml 200', `got ${rss.status}`);
  const items = (rss.body.match(/<item>/g) || []).length;
  ok(items >= 4, 'RSS carries ≥4 items', `${items} (was 1 before deploy)`);
  ok(/^<\?xml/.test(rss.body.trim()) && /<\/rss>\s*$/.test(rss.body.trim()),
    'RSS is well-formed XML (declaration + closing tag)');
}

// ---- 4. P2.2's guarantee must survive P2.3 ------------------------------
console.log('\n[4] P2.2 redirects still intact (both slash forms)');
{
  let redirFails = 0;
  for (const { src, to } of redirectRoutes) {
    // `src` is a REGEX, not a path: `^/vaults/aDNA\.aDNA/?$`. Stripping the anchors is
    // not enough — the backslashes are regex escapes and must come out too, or the probe
    // fetches the literal string `/vaults/aDNA\.aDNA`, gets a 404, and reports the SITE
    // as broken when the instrument is. (Observed: 58 bogus failures on first run.)
    const path = src
      .replace(/^\^/, '')
      .replace(/\/\?\$$/, '')
      .replace(/\$$/, '')
      .replace(/\\(.)/g, '$1');   // unescape regex metachars → the real URL path
    for (const form of [path, `${path}/`]) {
      const r = await head(`${BASE}${form}`);
      if (![301, 302, 307, 308].includes(r.status)) {
        redirFails++; failures.push(`redirect ${form} → ${r.status} (expected 3xx → ${to})`);
      } else pass++;
    }
  }
  ok(redirFails === 0, `all ${redirectRoutes.length} redirects 3xx in BOTH slash forms`,
    `${redirFails} failed of ${redirectRoutes.length * 2} probes`);
}

// ---- 5. Collision classes that must not regress ------------------------
console.log('\n[5] Non-regression (the 08-16 collision class + P2.2 move)');
{
  for (const [u, label] of [
    ['/install.html', 'installer still 200 (08-16 collision class)'],
    ['/provenance-audit/', 'P2.2 page move still 200'],
    ['/', 'homepage 200'],
  ]) {
    const r = await get(`${BASE}${u}`);
    ok(r.status === 200, label, `${u} → ${r.status}`);
  }

  const r = await head(`${BASE}/`);
  const wanted = ['content-security-policy', 'x-frame-options', 'x-content-type-options', 'referrer-policy'];
  const served = wanted.filter(h => r.headers?.get(h));
  ok(served.length === 4, 'all 4 security headers served', `${served.length}/4`);
}

// ---- Report -------------------------------------------------------------
console.log(`\n${'='.repeat(64)}`);
console.log(`ASSERTIONS PASSED: ${pass}`);
console.log(`FAILURES:          ${failures.length}`);
if (failures.length) {
  console.log('\nFailures:');
  for (const f of failures) console.log(`  ✗ ${f}`);
}
console.log('='.repeat(64));
process.exit(failures.length ? 1 : 0);
