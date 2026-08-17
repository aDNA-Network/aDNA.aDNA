#!/usr/bin/env node
/* ============================================================================
 * inject_installer_headers.mjs — per-file routes for the installer downloads.
 *
 * COMPANION TO inject_headers.mjs, NOT A REPLACEMENT. That tool is a
 * byte-identical copy of WebForge's canonical injector (md5-pinned) and
 * deliberately ABORTS on any `source` other than "/(.*)", so that a scoped
 * header can never be silently dropped. Editing it would break the pin;
 * putting scoped rules in vercel.json aborts the whole deploy (verified, not
 * assumed). So the scoped rules live in installer_routes.json and are injected
 * here, after it, under the same discipline.
 *
 * WHY ANY OF THIS IS NEEDED: `/install.ps1` must be served as text/plain.
 * Windows PowerShell 5.1 returns Invoke-WebRequest `.Content` as a byte[] for
 * application/octet-stream, so the canonical `irm … | iex` receives a list of
 * character codes and dies. Observed on a real Windows 11 box.
 *
 * PLACEMENT INVARIANT (inherited, DCRIT F-DC-12): injected routes must sit
 * before the first {"handle": …} route. These are all static files under
 * public/, so a route after the filesystem phase never fires for them.
 *
 * DIALECT GUARD (inherited, DCRIT F-DC-11): vercel.json `source` is
 * path-to-regexp; config.json `src` is regex. This tool handles ONLY literal
 * paths, where escaping every regex metacharacter is provably exact. Anything
 * containing path-to-regexp syntax (:param, *, +, ?, (…) ) ABORTS loudly
 * rather than risk a silently wrong route.
 *
 * SERIALIZATION (inherited, DCRIT F-DC-22): tab-indented, no trailing newline,
 * byte-matching @astrojs/vercel's writeJson and the sibling tool. A no-op does
 * not rewrite the file.
 *
 * Usage: node inject_installer_headers.mjs <surface-dir>
 * Exit: 0 injected|already-injected · 1 abort (any guard)
 * ==========================================================================*/

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const die = (m) => { console.error(`inject_installer_headers ABORT: ${m}`); process.exit(1); };

const surfaceDir = process.argv[2];
if (!surfaceDir) die('usage: node inject_installer_headers.mjs <surface-dir>');

const routesPath = join(surfaceDir, 'installer_routes.json');
const configPath = join(surfaceDir, '.vercel', 'output', 'config.json');
if (!existsSync(routesPath)) { console.log('inject_installer_headers: no installer_routes.json — nothing to do'); process.exit(0); }
if (!existsSync(configPath)) die(`${configPath} not found — run the build first`);

let spec, cfg;
try { spec = JSON.parse(readFileSync(routesPath, 'utf8')); } catch (e) { die(`${routesPath}: ${e.message}`); }
try { cfg = JSON.parse(readFileSync(configPath, 'utf8')); } catch (e) { die(`${configPath}: ${e.message}`); }
if (!Array.isArray(cfg.routes)) die('config.json has no routes array');

// Literal path → regex. Refuses anything that is not a plain literal.
const PATH_TO_REGEXP_SYNTAX = /[:*+?()\[\]{}]/;
const toSrc = (source) => {
  if (typeof source !== 'string' || !source.startsWith('/')) die(`source must be an absolute path: ${JSON.stringify(source)}`);
  if (PATH_TO_REGEXP_SYNTAX.test(source)) {
    die(`source "${source}" contains path-to-regexp syntax. This tool handles literal paths only — ` +
        `converting patterns is the failure class the dialect guard exists to prevent.`);
  }
  return '^' + source.replace(/[.\\^$|]/g, (c) => '\\' + c) + '$';
};

const firstHandle = cfg.routes.findIndex((r) => r && r.handle);
let insertAt = firstHandle === -1 ? cfg.routes.length : firstHandle;
let added = 0;

for (const rw of spec.rewrites ?? []) {
  const src = toSrc(rw.source);
  if (cfg.routes.some((r) => r.src === src && 'dest' in r)) continue;
  cfg.routes.splice(insertAt++, 0, { src, dest: rw.destination });
  added++;
}
for (const h of spec.headers ?? []) {
  const src = toSrc(h.source);
  if (cfg.routes.some((r) => r.src === src && r.headers)) continue;
  if (!Array.isArray(h.headers) || !h.headers.length) die(`header block for "${h.source}" has no headers`);
  const headers = Object.fromEntries(h.headers.map((x) => [x.key, x.value]));
  cfg.routes.splice(insertAt++, 0, { src, headers, continue: true });
  added++;
}

// Re-assert the invariant on the result rather than trusting the arithmetic above.
const handleIdx = cfg.routes.findIndex((r) => r && r.handle);
if (handleIdx !== -1) {
  const wanted = new Set([...(spec.headers ?? []), ...(spec.rewrites ?? [])].map((x) => toSrc(x.source)));
  const late = cfg.routes.map((r, i) => [r, i]).filter(([r, i]) => wanted.has(r.src) && i > handleIdx);
  if (late.length) die(`placement invariant violated: ${late.length} injected route(s) after the first handle route`);
}

if (added === 0) { console.log(`inject_installer_headers: already injected (${cfg.routes.length} routes)`); process.exit(0); }

writeFileSync(configPath, JSON.stringify(cfg, null, '\t'));
console.log(`inject_installer_headers: injected ${added} route(s) before handle index ${handleIdx} (${cfg.routes.length} total)`);
