#!/usr/bin/env node
/* ============================================================================
 * inject_redirects.mjs — make every emitted redirect match its trailing-slash
 * form as well as its bare form.
 *
 * THE BUG THIS EXISTS FOR (HAUSSMANN P2.1, probed live on adna.network
 * 2026-08-18, not inferred):
 *
 *     /org-context-graphs      -> 301  ✓
 *     /org-context-graphs/     -> 404  ✗
 *     /patterns/dual-audience  -> 301  ✓
 *     /patterns/dual-audience/ -> 404  ✗
 *
 * Both of the site's shipped redirects worked in exactly one shape and 404'd in
 * the other — and the shape that 404'd is the one this site's own canonical URLs
 * use everywhere (Astro builds `directory` format, so every real page is
 * `/path/`). A redirect that misses the shape its own site emits is a redirect
 * that mostly does not fire.
 *
 * WHY A TOOL RATHER THAN CONFIG: Astro's `redirects:` map normalises its keys.
 * Writing both '/path' and '/path/' emits the *same* `^/path$` route twice, so
 * the trailing-slash form is not expressible there at all (verified against the
 * built config, not assumed). Vercel does not normalise the slash before route
 * matching either — the `handle: filesystem` phase that would runs *after* the
 * redirect routes, which is precisely why the live 404s happen.
 *
 * WHAT IT DOES: rewrites each redirect route's `…$` anchor to `…/?$`. One route
 * then answers both shapes. It carries no redirect list of its own on purpose —
 * it widens whatever Astro emitted, so a redirect added to astro.config.mjs
 * tomorrow is covered with no second place to remember.
 *
 * COMPANION TO inject_headers.mjs (the md5-pinned byte-identical WebForge copy)
 * and inject_installer_headers.mjs, and deliberately separate from both for the
 * same reason they are separate from each other: a tool with one job aborts
 * loudly instead of silently half-applying.
 *
 * PLACEMENT: untouched. This only edits the `src` of routes already in place, so
 * the inherited placement invariant (DCRIT F-DC-12) cannot be disturbed — it is
 * re-asserted at the end anyway rather than trusted.
 *
 * SERIALIZATION (inherited, DCRIT F-DC-22): tab-indented, byte-matching
 * @astrojs/vercel's writeJson and the sibling tools. A no-op does not rewrite.
 *
 * Usage: node inject_redirects.mjs <surface-dir>
 * Exit: 0 widened|already-widened · 1 abort (any guard)
 * ==========================================================================*/

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const die = (m) => { console.error(`inject_redirects ABORT: ${m}`); process.exit(1); };

const surfaceDir = process.argv[2];
if (!surfaceDir) die('usage: node inject_redirects.mjs <surface-dir>');

const configPath = join(surfaceDir, '.vercel', 'output', 'config.json');
if (!existsSync(configPath)) die(`${configPath} not found — run the build first`);

let cfg;
try { cfg = JSON.parse(readFileSync(configPath, 'utf8')); } catch (e) { die(`${configPath}: ${e.message}`); }
if (!Array.isArray(cfg.routes)) die('config.json has no routes array');

const REDIRECT_STATUSES = new Set([301, 302, 307, 308]);
const isRedirect = (r) => r && REDIRECT_STATUSES.has(r.status) && typeof r.src === 'string' && r.headers?.Location;

const redirects = cfg.routes.filter(isRedirect);
if (redirects.length === 0) die('no redirect routes found — expected at least the astro.config.mjs set; a silent zero here would ship the trailing-slash 404s again');

let widened = 0;
for (const r of redirects) {
  if (r.src.endsWith('/?$')) continue;            // already widened — idempotent
  if (!r.src.endsWith('$')) die(`redirect src is not anchored, refusing to rewrite: ${r.src}`);
  if (r.src.endsWith('/$')) continue;             // a source that genuinely ends in a slash: leave alone
  r.src = r.src.slice(0, -1) + '/?$';
  widened++;
}

// Re-assert rather than trust: every redirect must now answer both shapes.
const unwidened = cfg.routes.filter(isRedirect).filter((r) => !r.src.endsWith('/?$') && !r.src.endsWith('/$'));
if (unwidened.length) die(`${unwidened.length} redirect route(s) still match only one slash form: ${unwidened.map((r) => r.src).join(', ')}`);

// The placement invariant is inherited, not established here — but a tool that edits routes
// verifies it on the way out rather than assuming its own edit was harmless.
const handleIdx = cfg.routes.findIndex((r) => r && r.handle);
if (handleIdx !== -1) {
  const late = cfg.routes.map((r, i) => [r, i]).filter(([r, i]) => isRedirect(r) && i > handleIdx);
  if (late.length) die(`placement invariant violated: ${late.length} redirect route(s) after the first handle route`);
}

if (widened === 0) { console.log(`inject_redirects: already widened (${redirects.length} redirect routes)`); process.exit(0); }

writeFileSync(configPath, JSON.stringify(cfg, null, '\t'));
console.log(`inject_redirects: widened ${widened} of ${redirects.length} redirect route(s) to match both slash forms`);
