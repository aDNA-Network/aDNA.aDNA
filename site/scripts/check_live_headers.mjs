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

/* ── the response must actually be OUR site (HAUSSMANN P3.1) ────────────────
 *
 * This check reported `OK — no drift` against a preview deployment it never reached. Vercel
 * Deployment Protection answers every preview request with `302 → vercel.com/sso-api`; with
 * `redirect: 'follow'` the fetch lands on Vercel's own login page, which sets all four of the
 * header NAMES this script looks for — so `headers.has()` was satisfied by
 * `default-src 'self' vercel.com *.stripe.com twitter.com …`, a CSP with nothing to do with ours.
 *
 * A presence-only check that follows redirects will pass for ANY deployment, including one whose
 * headers are entirely missing. It is not a weak check; on a gated preview it is a vacuous one.
 * Found when a P3.1 preview deploy printed 4/4 OK and then served `Redirecting...` for every probe.
 *
 * Two assertions close it: the final response must be OK, and it must still be on the origin we
 * asked for. Both are cheap, and both turn a false green into an honest "cannot verify from here".
 *
 * NOT closed here: this still checks header NAMES, not VALUES, so a correct-name/wrong-value drift
 * would pass on prod too. Fixing that needs vercel.json's expected values compared field by field
 * — a bigger change than this mission should make to a shared deploy tool. Handed to P4.4, which
 * owns CI hardening.
 */
const finalOrigin = (() => { try { return new URL(res.url).origin; } catch { return null; } })();
if (!res.ok) {
  console.error(
    `live-headers CANNOT VERIFY: ${origin}/ answered ${res.status} (final URL ${res.url}). ` +
      'Deployment Protection on a preview redirects to vercel.com/sso-api, whose login page sets ' +
      'the same header NAMES — so a presence check there passes without ever reaching the site.',
  );
  process.exit(1);
}
if (finalOrigin && finalOrigin !== origin) {
  console.error(
    `live-headers CANNOT VERIFY: ${origin}/ redirected off-origin to ${finalOrigin}. ` +
      'Headers read there belong to that host, not to this deployment.',
  );
  process.exit(1);
}

const missing = expected.filter(k => !res.headers.has(k.toLowerCase()));
const served = expected.filter(k => res.headers.has(k.toLowerCase()));
console.log(`live-headers ${origin} → served ${served.length}/${expected.length}: ${served.join(', ') || '(none)'}`);
if (missing.length) {
  console.error(`live-headers DRIFT: missing ${missing.join(', ')} — deployed artifact does not match vercel.json`);
  process.exit(1);
}
console.log('live-headers OK — no drift');
