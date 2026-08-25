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
/* F-f: carry the configured VALUE alongside the key, so the compare below can
 * ask the question this script was named for. Keyed by the configured spelling;
 * lookups against the response lowercase separately (HTTP header names are
 * case-insensitive, Map keys are not). */
const expectedValues = new Map(block.headers.map(h => [h.key, h.value]));
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
 * ⛩ NOW CLOSED — HAUSSMANN P4.4a A1 / F-f. Values are compared field by field below.
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

/* ⛩ HAUSSMANN P4.4a A1 / F-f — VALUES, NOT JUST NAMES.
 *
 * Until now this compared header NAMES only (`res.headers.has(k)`), so a
 * correct-name / wrong-value drift passed on production. That is a real gap and
 * not a hypothetical one: the whole reason the origin/ok assertions above exist
 * is that Vercel's SSO login page sets all four of the same header NAMES with
 * entirely different values, and this script called that "no drift" for four
 * months.
 *
 * ⚠ THE COMPARISON IS `expected ⊆ served`, NEVER SET EQUALITY. That constraint
 * came free from F-h's discharge, which re-read P0.2's header evidence against
 * the alias by hand: the alias serves 14 headers vercel.json does not name
 * (`strict-transport-security`, `x-vercel-*`, the usual transport set), so an
 * equality check would go red on Vercel's own additions and be reverted within
 * a week. We assert about the headers WE configure, and say nothing about the
 * rest.
 *
 * WHY EXACT STRING EQUALITY AND NOT A NORMALISED COMPARE: measured before
 * choosing (2026-08-24, live alias) — all four configured values match
 * BYTE-FOR-BYTE, CSP included. Normalisation would therefore be tolerance we
 * have not earned, and a loose compare is how a value drifts one directive at a
 * time without anything going red. If a legitimate divergence ever appears, the
 * honest response is to fix the config or record the divergence with its
 * reason — not to quietly widen this predicate.
 */
const norm = (s) => (s ?? '').trim();
const report = expected.map((k) => {
  const got = res.headers.get(k.toLowerCase());
  if (got === null) return { key: k, state: 'MISSING' };
  const want = expectedValues.get(k);
  // A demo-injected key has no configured value; presence alone settles it.
  if (want === undefined) return { key: k, state: 'OK' };
  return norm(got) === norm(want) ? { key: k, state: 'OK' } : { key: k, state: 'MISMATCH', want, got };
});

const missing = report.filter((r) => r.state === 'MISSING');
const mismatched = report.filter((r) => r.state === 'MISMATCH');
const ok = report.filter((r) => r.state === 'OK');

console.log(
  `live-headers ${origin} → ${ok.length}/${expected.length} match by value: ${ok.map((r) => r.key).join(', ') || '(none)'}`,
);

if (missing.length) {
  console.error(`live-headers DRIFT: missing ${missing.map((r) => r.key).join(', ')} — deployed artifact does not match vercel.json`);
}
for (const r of mismatched) {
  console.error(
    `live-headers DRIFT: ${r.key} is SERVED BUT WRONG — this is the class a presence check cannot see.\n` +
      `  vercel.json: ${r.want}\n` +
      `  served:      ${r.got}`,
  );
}
if (missing.length || mismatched.length) process.exit(1);

console.log('live-headers OK — no drift (names and values)');
