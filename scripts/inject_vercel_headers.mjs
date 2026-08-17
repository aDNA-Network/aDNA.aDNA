#!/usr/bin/env node
/**
 * inject_vercel_headers.mjs — merge site/vercel.json headers+rewrites into the Build Output config.
 *
 * WHY THIS EXISTS
 * This project deploys with `vercel deploy --prebuilt`, which means Vercel reads
 * `.vercel/output/config.json` (Build Output API v3). The Astro Vercel adapter generates that file
 * from `astro.config.mjs` — it does NOT merge `site/vercel.json`. So header rules written in
 * vercel.json are silently absent from a prebuilt deploy.
 *
 * That is not a cosmetic gap. `/install.ps1` must be served as `text/plain`, because Windows
 * PowerShell 5.1 returns `Invoke-WebRequest .Content` as a byte[] for `application/octet-stream`,
 * and the canonical `irm … | iex` one-liner then receives a list of character codes and fails.
 * Verified on a real Windows 11 machine. Without this script the published site would carry
 * exactly that bug while vercel.json looked correct.
 *
 * Header routes are inserted in the same position and shape the adapter already uses for its
 * `_astro` cache-control rule — after `handle: filesystem`, with `continue: true` — because that
 * placement is demonstrably working in the generated output. Rewrites go before `handle:
 * filesystem`, since they must resolve to a path the filesystem phase can then serve.
 *
 * Idempotent: re-running will not duplicate routes.
 *
 * Runs automatically as site/package.json `postbuild`. Run by hand after a bare `astro build`.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.resolve(__dirname, '..', 'site');
const VERCEL_JSON = path.join(SITE, 'vercel.json');
const OUT_CONFIG = path.join(SITE, '.vercel/output/config.json');

if (!fs.existsSync(OUT_CONFIG)) {
  console.error(`[inject_vercel_headers] ${OUT_CONFIG} not found — run the build first.`);
  process.exit(1);
}
if (!fs.existsSync(VERCEL_JSON)) {
  console.log('[inject_vercel_headers] no vercel.json; nothing to merge.');
  process.exit(0);
}

const vj = JSON.parse(fs.readFileSync(VERCEL_JSON, 'utf8'));
const cfg = JSON.parse(fs.readFileSync(OUT_CONFIG, 'utf8'));
cfg.routes ||= [];

// Escape a Vercel `source` (path or simple glob) into the regex `src` the Build Output API wants.
const toSrc = (source) =>
  '^' + source.replace(/[.*+?^${}()|[\]\\]/g, (m) => (m === '*' ? '.*' : '\\' + m)) + '$';

const already = (src, kind) =>
  cfg.routes.some((r) => r.src === src && (kind === 'rewrite' ? 'dest' in r : 'headers' in r));

// --- rewrites: must precede the filesystem phase ------------------------------------------
let added = 0;
const fsIdx = () => cfg.routes.findIndex((r) => r.handle === 'filesystem');
for (const rw of vj.rewrites ?? []) {
  const src = toSrc(rw.source);
  if (already(src, 'rewrite')) continue;
  const at = fsIdx();
  cfg.routes.splice(at < 0 ? 0 : at, 0, { src, dest: rw.destination });
  added++;
}

// --- headers: same slot the adapter uses for its own _astro rule --------------------------
// Skip the catch-all `/(.*)` security-header block: Vercel applies vercel.json's global headers
// on top of a prebuilt deploy is NOT guaranteed, but duplicating a CSP here risks conflicting
// with the platform's own handling. Only per-file Content-Type rules are injected, which are the
// ones proven to be missing and load-bearing.
for (const h of vj.headers ?? []) {
  if (h.source === '/(.*)') continue;
  const src = toSrc(h.source);
  if (already(src, 'headers')) continue;
  const headers = Object.fromEntries(h.headers.map((x) => [x.key.toLowerCase(), x.value]));
  const at = cfg.routes.findIndex((r) => r.src === '^/.*$' && r.status === 404);
  cfg.routes.splice(at < 0 ? cfg.routes.length : at, 0, { src, headers, continue: true });
  added++;
}

fs.writeFileSync(OUT_CONFIG, JSON.stringify(cfg, null, 2) + '\n');
console.log(`[inject_vercel_headers] OK: ${added} route(s) injected; ${cfg.routes.length} total.`);
