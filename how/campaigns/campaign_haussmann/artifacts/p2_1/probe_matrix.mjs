#!/usr/bin/env node
// P2.1 deploy-gate live probe matrix — the test astro preview could not run.
// Every URL is derived from the build snapshot (.vercel/output/config.json + dist/vaults/);
// no typed list, per campaign law (WebForge KW-8/FR-K).
// Empty derivations THROW — a silent-drop lookup is the P2.1 hazard class.
import { readFileSync, readdirSync } from 'node:fs';

const BASE = process.argv[2] || 'https://adna.network';
const cfg = JSON.parse(readFileSync('.vercel/output/config.json', 'utf8'));

// --- derive legacy redirect sources from the built adapter config ----------
const redirects = cfg.routes.filter(r => r.status === 301 || r.status === 308);
if (!redirects.length) throw new Error('no redirect routes in adapter config — derivation broken');
const litFrom = (src) =>
  src.replace(/^\^/, '').replace(/\/\?\$$/, '').replace(/\$$/, '').replace(/\\/g, '');
const legacy = redirects.map(r => litFrom(r.src)).filter(p => p.startsWith('/'));
if (legacy.length !== redirects.length)
  throw new Error(`redirect source recovery dropped ${redirects.length - legacy.length} route(s)`);

// --- derive canonical vault URLs from the BUILT output (gate-30's source) --
const canon = readdirSync('dist/vaults', { withFileTypes: true })
  .filter(d => d.isDirectory() && d.name !== 'graph')
  .map(d => d.name);
if (canon.length < 50) throw new Error(`only ${canon.length} vault dirs in dist/vaults — derivation broken`);

// --- canonicalization law check (ADR-051): every built slug is lowercase ---
const nonCanon = canon.filter(s => s !== s.toLowerCase() || s.endsWith('.adna'));
if (nonCanon.length) throw new Error(`built slugs violate the slug law: ${nonCanon.join(', ')}`);

const results = { pass: [], fail: [] };
const seen = new Set();

async function probe(path, expect, label) {
  const key = path + '|' + expect;
  if (seen.has(key)) return;
  seen.add(key);
  try {
    const r = await fetch(BASE + path, { redirect: 'manual' });
    const loc = r.headers.get('location') || '';
    const ok = expect === 'redirect'
      ? (r.status === 301 || r.status === 308)
      : r.status === 200;
    (ok ? results.pass : results.fail).push(
      `${ok ? 'PASS' : 'FAIL'} [${label}] ${path} → ${r.status}${loc ? ' → ' + loc : ''}`);
  } catch (e) {
    results.fail.push(`FAIL [${label}] ${path} → ERROR ${e.message}`);
  }
}

const chunk = async (items, fn, n = 8) => {
  for (let i = 0; i < items.length; i += n) await Promise.all(items.slice(i, i + n).map(fn));
};

console.log(`== probe matrix vs ${BASE} ==`);
console.log(`   ${legacy.length} redirect routes · ${canon.length} canonical vault slugs (from dist/)\n`);

// 1 · every legacy redirect source, in BOTH slash forms (the P2.1 fix)
await chunk(legacy, p => probe(p, 'redirect', 'legacy-noslash'));
await chunk(legacy, p => probe(p + '/', 'redirect', 'legacy-slash'));

// 2 · every canonical vault URL still resolves 200 (zero 404)
await chunk(canon, s => probe(`/vaults/${s}/`, '200', 'canonical-vault'));

// 3 · legacy routes end-to-end, following the redirect to a real page
for (const p of ['/org-context-graphs', '/org-context-graphs/']) {
  const r = await fetch(BASE + p);
  const ok = r.status === 200;
  (ok ? results.pass : results.fail).push(
    `${ok ? 'PASS' : 'FAIL'} [legacy-e2e] ${p} → final ${r.status} ${r.url}`);
}

// 4 · a redirect must land on a live page, not another 404 (spot-check the vault set)
const vaultRedirects = legacy.filter(p => p.startsWith('/vaults/'));
if (!vaultRedirects.length) throw new Error('no vault redirects recovered — expected 24');
await chunk(vaultRedirects.slice(0, 24), async p => {
  const r = await fetch(BASE + p);
  const ok = r.status === 200;
  (ok ? results.pass : results.fail).push(
    `${ok ? 'PASS' : 'FAIL'} [vault-e2e] ${p} → final ${r.status} ${r.url}`);
});

console.log(results.fail.length ? results.fail.join('\n') : '(no failures)');
console.log(`\n== ${results.pass.length} PASS · ${results.fail.length} FAIL ==`);
console.log(`   coverage: ${legacy.length} legacy ×2 slash forms · ${canon.length} canonical · ${vaultRedirects.length} vault e2e · 2 legacy e2e`);
if (results.fail.length) process.exitCode = 1;
