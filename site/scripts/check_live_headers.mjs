#!/usr/bin/env node
/* ============================================================================
 * check_live_headers.mjs — the drift watcher (P0.2 / ADR-050).
 *
 * Probes a deployed origin and FAILS unless every header configured in
 * site/vercel.json's "/(.*)"-source block is actually served. This is the
 * check that would have caught the 2026-08 drift (live served only HSTS while
 * vercel.json configured CSP/XFO/XCTO/Referrer-Policy — root cause: prebuilt
 * deploys ignore root vercel.json; see artifacts/p0_2/diagnosis.md).
 *
 * Usage:   node scripts/check_live_headers.mjs [origin]   (default: prod)
 * Options: --expect-fail-demo  inject a bogus expected header → MUST exit 1
 *          (the doctrine red-path: a green that cannot go red is not evidence)
 * Exit: 0 all configured headers served · 1 drift/failure · 2 network-unreachable
 * ==========================================================================*/
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2).filter(a => a !== '--expect-fail-demo');
const demo = process.argv.includes('--expect-fail-demo');
const origin = (args[0] || 'https://adna.network').replace(/\/$/, '');

const vercelJson = JSON.parse(readFileSync(join(here, '..', 'vercel.json'), 'utf8'));
const block = (vercelJson.headers || []).find(h => h.source === '/(.*)');
if (!block) { console.error('check_live_headers ABORT: no "/(.*)" headers block in vercel.json'); process.exit(1); }
const expected = block.headers.map(h => h.key);
if (demo) expected.push('X-Bogus-Header-That-Cannot-Exist');

let res;
try {
  res = await fetch(origin + '/', { method: 'GET', redirect: 'follow', headers: { 'cache-control': 'no-cache' } });
} catch (e) {
  console.error(`check_live_headers NETWORK: ${origin} unreachable (${e.message})`); process.exit(2);
}

const missing = expected.filter(k => !res.headers.has(k.toLowerCase()));
const served = expected.filter(k => res.headers.has(k.toLowerCase()));
console.log(`live-headers ${origin} → served ${served.length}/${expected.length}: ${served.join(', ') || '(none)'}`);
if (missing.length) {
  console.error(`live-headers DRIFT: missing ${missing.join(', ')} — deployed artifact does not match vercel.json`);
  process.exit(1);
}
console.log('live-headers OK — no drift');
