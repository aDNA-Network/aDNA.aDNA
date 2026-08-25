#!/usr/bin/env node
/**
 * check_external_links.mjs — HAUSSMANN P2.3 O0, the NON-BLOCKING half of the link regime.
 *
 * Internal links are a gate (gate-31, blocking): they are entirely within our control, so a
 * broken one is always our defect. External links are not. A third-party host can 503, rate-limit,
 * block CI egress, or sit behind Cloudflare and return 403 to anything without a browser — none
 * of which means the link is wrong. Gating on that would train everyone to ignore a red build,
 * which is worse than not checking. So this reports and never blocks.
 *
 * Derives its target list from dist/ (WebForge KW-8/FR-K) and throws on an empty derivation
 * rather than reporting a clean bill of health for a crawl that found nothing.
 *
 * Usage:  node scripts/check_external_links.mjs           (from site/, after a build)
 *         node scripts/check_external_links.mjs --strict  (exit 1 on hard failures — local use)
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = join(process.cwd(), 'dist');
const STRICT = process.argv.includes('--strict');
const TIMEOUT_MS = 15_000;
const CONCURRENCY = 6;

if (!existsSync(DIST)) throw new Error(`no build output at ${DIST} — run \`npx astro build\` first`);

const files = [];
(function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html')) files.push(p);
  }
})(DIST);
if (files.length === 0) throw new Error('walked dist/ and found no HTML — refusing to report green');

/** url -> pages that link to it */
const targets = new Map();
for (const f of files) {
  const route = '/' + f.slice(DIST.length + 1).replace(/index\.html$/, '');
  for (const m of readFileSync(f, 'utf8').matchAll(/<a\b[^>]*\shref="(https?:\/\/[^"]+)"/gi)) {
    const url = m[1].replace(/&amp;/g, '&');
    targets.set(url, [...(targets.get(url) ?? []), route]);
  }
}
if (targets.size === 0) throw new Error('extracted zero external links from the build — the extractor is broken');

console.log(`checking ${targets.size} unique external link(s) from ${files.length} built page(s)\n`);

async function probe(url) {
  const ctl = AbortSignal.timeout(TIMEOUT_MS);
  const opts = {
    signal: ctl,
    redirect: 'follow',
    // Some hosts 403 anything without a UA. We are a link checker, and we say so.
    headers: { 'user-agent': 'adna-network-link-check/1.0 (+https://adna.network)' },
  };
  try {
    let res = await fetch(url, { ...opts, method: 'HEAD' });
    // HEAD is optional in HTTP; plenty of hosts answer 403/405/501 to it and 200 to GET.
    if ([403, 405, 501, 404].includes(res.status)) res = await fetch(url, { ...opts, method: 'GET' });
    return { url, status: res.status };
  } catch (e) {
    return { url, status: 0, error: e.name === 'TimeoutError' ? 'timeout' : e.message };
  }
}

const queue = [...targets.keys()];
const results = [];
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const url = queue.shift();
      results.push(await probe(url));
    }
  }),
);

const ok = results.filter((r) => r.status >= 200 && r.status < 400);
// 401/403/429 are access posture, not link rot — reported separately so they never read as breakage.
const posture = results.filter((r) => [401, 403, 429].includes(r.status));
const broken = results.filter((r) => !ok.includes(r) && !posture.includes(r));

console.log(`  reachable        ${ok.length}`);
console.log(`  access-gated     ${posture.length}   (401/403/429 — posture, not rot)`);
console.log(`  needs a look     ${broken.length}`);

if (posture.length) {
  console.log('\n--- access-gated (informational) ---');
  for (const r of posture.sort((a, b) => a.url.localeCompare(b.url))) {
    console.log(`  ${r.status}  ${r.url}`);
  }
}
if (broken.length) {
  console.log('\n--- needs a look ---');
  for (const r of broken.sort((a, b) => a.url.localeCompare(b.url))) {
    console.log(`  ${r.status || r.error}  ${r.url}`);
    console.log(`        linked from: ${[...new Set(targets.get(r.url))].slice(0, 3).join(', ')}`);
  }
}

console.log(
  `\n${broken.length === 0 ? 'no external link needs attention' : `${broken.length} external link(s) need attention`}` +
    `${STRICT ? '' : ' — non-blocking by design'}`,
);
process.exit(STRICT && broken.length ? 1 : 0);
