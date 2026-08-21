#!/usr/bin/env node
/* ============================================================================
 * inject_negotiation.mjs — serve the markdown twin to clients that ask for it.
 *
 * HAUSSMANN P3.1 / ADR-056 clauses 1 + 7.
 *
 * THE FINDING THIS EXISTS FOR (machine_eye item 4, re-probed live 2026-08-19):
 *
 *     curl -H "Accept: text/markdown" /learn/what-is-adna  -> text/html
 *     curl -H "Accept: text/markdown" /get-started         -> text/html
 *                                                             and the LITERAL
 *                                                             SAME ETag as the
 *                                                             default request
 *
 * Vercel was serving one cached static object regardless of `Accept`. No `Vary`,
 * no `Link: rel=alternate`. Claude Code and 2 of 6 other agents negotiate
 * `Accept: text/markdown` today, so the twins from P3.1 O1 are only half the
 * answer — this is the other half.
 *
 * ONE EXACT ROUTE PER TWIN, GENERATED FROM THE MANIFEST — deliberately not one
 * blanket `^/(.*?)/?$ -> /$1.md` rewrite. A blanket rule matches paths that have
 * no twin, and the filesystem handler would then hand a negotiating agent a 404
 * where it previously got working HTML: strictly worse than not negotiating at
 * all. That failure has a precedent in this very campaign — P2.1 found both
 * shipped redirects firing in exactly the one URL shape the site never emits.
 * Exactness over cleverness.
 *
 * ETag differs for free: the twin is a different static object. Item 4's finding
 * was one object served for two requests, so serving a genuinely different object
 * IS the fix — nothing here manipulates an ETag.
 *
 * `/?$` covers both slash forms in one route, matching inject_redirects.mjs.
 *
 * PLACEMENT: negotiation routes must precede `handle: filesystem`, or the HTML is
 * resolved before the `Accept` check ever runs. Asserted on the way out rather
 * than trusted — the discipline the sibling injectors already encode.
 *
 * COMPANION TO inject_headers.mjs / inject_installer_headers.mjs /
 * inject_redirects.mjs, and separate from all three for the reason they are
 * separate from each other: a tool with one job aborts loudly instead of silently
 * half-applying.
 *
 * Usage: node inject_negotiation.mjs <surface-dir>
 * Exit: 0 injected|already-injected · 1 abort (any guard)
 * ==========================================================================*/

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const die = (m) => { console.error(`inject_negotiation ABORT: ${m}`); process.exit(1); };

const surfaceDir = process.argv[2];
if (!surfaceDir) die('usage: node inject_negotiation.mjs <surface-dir>');

const configPath = join(surfaceDir, '.vercel', 'output', 'config.json');
if (!existsSync(configPath)) die(`${configPath} not found — run the build first`);

const manifestPath = join(surfaceDir, 'src', 'data', 'twin_manifest.json');
if (!existsSync(manifestPath)) die(`${manifestPath} not found — run the build first (emit_bespoke_twins writes it)`);

let cfg;
try { cfg = JSON.parse(readFileSync(configPath, 'utf8')); } catch (e) { die(`${configPath}: ${e.message}`); }
if (!Array.isArray(cfg.routes)) die('config.json has no routes array');

let twins;
try { twins = JSON.parse(readFileSync(manifestPath, 'utf8')).twins; } catch (e) { die(`${manifestPath}: ${e.message}`); }
if (!Array.isArray(twins) || twins.length === 0) {
  die('twin manifest is empty — a silent zero here would ship the byte-identical-ETag finding again');
}

const MARKER = 'x-adna-twin';
const escape = (p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** The static surface must actually carry the twin this route would point at. */
const staticRoot = join(surfaceDir, '.vercel', 'output', 'static');
const missing = twins.filter((p) => !existsSync(join(staticRoot, `${p === '/' ? '/index' : p}.md`)));
if (missing.length) {
  die(
    `${missing.length} manifest twin(s) absent from the deploy surface — the adapter copy did not ` +
      `carry them, so these routes would negotiate into a 404: ${missing.slice(0, 5).join(', ')}` +
      `${missing.length > 5 ? ', …' : ''}`,
  );
}

const already = cfg.routes.filter((r) => r?.headers?.[MARKER]).length;
if (already) {
  if (already !== twins.length) {
    die(`partially injected: ${already} negotiation route(s) present but the manifest lists ${twins.length}. Rebuild rather than layering a second pass onto a stale set.`);
  }
  console.log(`inject_negotiation: already injected (${already} negotiation routes)`);
  process.exit(0);
}

const handleIdx = cfg.routes.findIndex((r) => r && r.handle);
if (handleIdx === -1) die('no `handle` route found — cannot establish the filesystem boundary to insert before');

const negotiationRoutes = twins.map((p) => ({
  src: `^${escape(p === '/' ? '' : p)}/?$`,
  has: [{ type: 'header', key: 'accept', value: '(.*text/markdown.*)' }],
  dest: `${p === '/' ? '/index' : p}.md`,
  headers: {
    // Caches must key on Accept, or one client's markdown is served to the next client's browser.
    Vary: 'Accept',
    // Marks these routes as ours so a re-run is idempotent without re-deriving them.
    [MARKER]: '1',
  },
}));

cfg.routes.splice(handleIdx, 0, ...negotiationRoutes);

/* ── re-assert rather than trust ───────────────────────────────────────────── */

const newHandleIdx = cfg.routes.findIndex((r) => r && r.handle);
const late = cfg.routes
  .map((r, i) => [r, i])
  .filter(([r, i]) => r?.headers?.[MARKER] && i > newHandleIdx);
if (late.length) die(`placement invariant violated: ${late.length} negotiation route(s) after the first handle route`);

const injected = cfg.routes.filter((r) => r?.headers?.[MARKER]);
if (injected.length !== twins.length) die(`expected ${twins.length} negotiation routes, found ${injected.length}`);
const noVary = injected.filter((r) => r.headers.Vary !== 'Accept');
if (noVary.length) die(`${noVary.length} negotiation route(s) missing Vary: Accept — a shared cache would cross-serve variants`);

// The redirects inject_redirects.mjs widened must still precede the filesystem boundary; this
// tool spliced into the same array, so it verifies it did not displace them rather than assuming.
const REDIRECT_STATUSES = new Set([301, 302, 307, 308]);
const strandedRedirects = cfg.routes
  .map((r, i) => [r, i])
  .filter(([r, i]) => REDIRECT_STATUSES.has(r?.status) && r?.headers?.Location && i > newHandleIdx);
if (strandedRedirects.length) die(`${strandedRedirects.length} redirect route(s) pushed after the filesystem boundary by this splice`);

// Tab-indented, byte-matching @astrojs/vercel's writeJson and the sibling tools (DCRIT F-DC-22).
writeFileSync(configPath, JSON.stringify(cfg, null, '\t'));
console.log(`inject_negotiation: injected ${injected.length} negotiation route(s) before the filesystem boundary`);
