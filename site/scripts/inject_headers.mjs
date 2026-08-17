#!/usr/bin/env node
/* ============================================================================
 * inject_headers.mjs — the D-13 fix, executable.
 *
 * `vercel deploy --prebuilt` reads `.vercel/output/config.json` and IGNORES the
 * root `vercel.json` headers (skill_deployment_validation Addendum #4, field-
 * verified B3.5). This tool injects the surface's `vercel.json` headers into
 * `config.json` as a route emitted with EXACTLY the key set
 * {"src": "^/(.*)$", "headers": {…}, "continue": true} — no extra keys (the
 * CLI's tolerance for unknown config.json route keys is not established).
 *
 * PLACEMENT INVARIANT (DCRIT F-DC-12): the injected route index must be < the
 * index of the first {"handle": …} route. Adapter-emitted configs open with
 * {"handle":"filesystem"}; a route placed after it never fires for static
 * assets (_astro/*, favicon, robots.txt, llms.txt) — the injected route is the
 * ONLY header carrier for statics under --prebuilt.
 *
 * DIALECT GUARD (DCRIT F-DC-11): vercel.json `source` is path-to-regexp;
 * config.json `src` is regex. Verbatim copy is only safe for "/(.*)" — any
 * other source ABORTS loudly (silent drop of a scoped security header is the
 * failure class this tool exists to kill).
 *
 * SERIALIZATION (DCRIT F-DC-22): tab-indented, no trailing newline — byte-
 * matching @astrojs/vercel's own writeJson output so diffs stay minimal and
 * re-runs are byte-identical. A no-op recognition does not rewrite the file.
 *
 * Usage: node inject_headers.mjs <surface-dir>
 * Exit: 0 injected|replaced|already-injected · 1 abort (any guard)
 * ==========================================================================*/

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const die = (msg) => { console.error(`inject_headers ABORT: ${msg}`); process.exit(1); };

const surfaceDir = process.argv[2];
if (!surfaceDir) die('usage: node inject_headers.mjs <surface-dir>');

const vercelJsonPath = join(surfaceDir, 'vercel.json');
const configPath = join(surfaceDir, '.vercel', 'output', 'config.json');

if (!existsSync(vercelJsonPath)) die(`${vercelJsonPath} not found — the header source of truth is required`);
if (!existsSync(configPath)) die(`${configPath} not found — run the build first (npm run build under DEPLOY_TARGET=vercel)`);

let vercelJson;
try { vercelJson = JSON.parse(readFileSync(vercelJsonPath, 'utf8')); }
catch (e) { die(`vercel.json unparseable: ${e.message}`); }

const blocks = vercelJson.headers;
if (!Array.isArray(blocks) || blocks.length === 0) die('vercel.json has no headers[] blocks');

// Flatten — global blocks only; abort on scoped sources or conflicting duplicates.
const headerMap = {};
for (const block of blocks) {
  if (block.source !== '/(.*)') {
    die(`scoped header block source ${JSON.stringify(block.source)} — only "/(.*)" is supported ` +
        `(path-to-regexp vs regex dialect; a scoped block would be silently dropped, which is forbidden)`);
  }
  if (!Array.isArray(block.headers)) die('header block has no headers[] array (Momus M-6: off-contract shapes must ABORT, never stack-trace)');
  for (const entry of block.headers) {
    const { key, value } = entry ?? {};
    // Momus M-6: an unvalidated destructure turns a typo'd entry into
    // headerMap[undefined]=undefined — it passes the emptiness guard and
    // JSON.stringify silently DROPS it: a security header lost with exit 0.
    if (typeof key !== 'string' || !key || typeof value !== 'string') {
      die(`malformed header entry ${JSON.stringify(entry)} — every entry needs string "key" + string "value"`);
    }
    if (key in headerMap && headerMap[key] !== value) {
      die(`conflicting duplicate header key "${key}" across vercel.json blocks`);
    }
    headerMap[key] = value;
  }
}
if (Object.keys(headerMap).length === 0) die('flatten produced an empty header map');

let config;
try { config = JSON.parse(readFileSync(configPath, 'utf8')); }
catch (e) { die(`config.json unparseable: ${e.message}`); }
if (!Array.isArray(config.routes)) die('config.json has no routes[]');

const isInjectedShape = (r) =>
  r && r.src === '^/(.*)$' && r.continue === true && !('handle' in r) &&
  r.headers && typeof r.headers === 'object' && !('dest' in r);

const firstHandleIdx = config.routes.findIndex((r) => r && 'handle' in r);
// Momus M-9: a stale duplicate injected-shape route (e.g. post-handle, still live
// for function routes via continue:true) must never survive a first-match blessing.
const allInjectedIdx = config.routes.map((r, i) => (isInjectedShape(r) ? i : -1)).filter((i) => i !== -1);
if (allInjectedIdx.length > 1) {
  die(`${allInjectedIdx.length} injected-shape routes found (indices ${allInjectedIdx.join(', ')}) — refusing to bless an ambiguous config; remove the stale duplicate(s)`);
}
const existingIdx = allInjectedIdx.length === 1 ? allInjectedIdx[0] : -1;

const sameHeaders = (a, b) => {
  const ka = Object.keys(a).sort(), kb = Object.keys(b).sort();
  return ka.length === kb.length && ka.every((k, i) => k === kb[i] && a[k] === b[k]);
};

const injected = { src: '^/(.*)$', headers: headerMap, continue: true };

if (existingIdx !== -1) {
  if (firstHandleIdx !== -1 && existingIdx > firstHandleIdx) {
    die(`existing injected-shape route at index ${existingIdx} sits AFTER the first handle route ` +
        `(index ${firstHandleIdx}) — it never fires for static assets; refusing to bless it`);
  }
  if (sameHeaders(config.routes[existingIdx].headers, headerMap)) {
    console.log(`inject_headers: already-injected (route ${existingIdx}, ${Object.keys(headerMap).length} headers) — no-op`);
    process.exit(0);
  }
  config.routes[existingIdx] = injected;   // re-pin: vercel.json changed
  console.log(`inject_headers: replaced route ${existingIdx} (re-pin, ${Object.keys(headerMap).length} headers)`);
} else {
  config.routes.unshift(injected);
  console.log(`inject_headers: injected at route 0 (${Object.keys(headerMap).length} headers)`);
}

// Post-write invariant check on the in-memory object we are about to persist.
const outHandleIdx = config.routes.findIndex((r) => r && 'handle' in r);
const outInjectedIdx = config.routes.findIndex(isInjectedShape);
if (outInjectedIdx === -1) die('post-condition: injected route missing');
if (outHandleIdx !== -1 && outInjectedIdx > outHandleIdx) die('post-condition: injected route not before the first handle route');
// Momus M-6 post-condition: every flattened header must survive serialization.
if (Object.keys(config.routes[outInjectedIdx].headers).length !== Object.keys(headerMap).length) {
  die('post-condition: emitted header count differs from the flattened map — a header was dropped');
}

writeFileSync(configPath, JSON.stringify(config, null, '\t'));   // tab-indent, no trailing \n — adapter-identical
