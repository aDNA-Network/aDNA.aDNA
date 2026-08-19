#!/usr/bin/env node
/**
 * HAUSSMANN P2.2 O3 — local page-inventory re-crawl.
 *
 * WHY THIS EXISTS AS A FILE. The P0 evidence packet B1 was produced by
 * `scripts/crawl_haussmann_b1.mjs`, run from a session scratchpad — and the scratchpad is
 * session-scoped, so the instrument evaporated. The inventory it produced is cited by four
 * missions and could not be regenerated. This one lives in the campaign artifacts.
 *
 * WHY IT READS dist/ RATHER THAN THE LIVE SITE. B1 crawled production over HTTP. P2.2's
 * changes are not deployed (deploy is a separate ⛩), so a live crawl would measure the OLD
 * IA and report a clean bill of health for a site that no longer exists in the repo. This
 * walks the build output instead: `dist/**\/index.html` IS the built route set, with no
 * sitemap dependency and no server needed.
 *
 * NO SILENT DROPS. Every derivation that could come out empty throws instead. That failure
 * mode has bitten this campaign twice — P2.1's `card.vault_slug` silent drop, then P2.1's own
 * probe guessing a field name, reporting "64 PASS, 0 FAIL", and testing nothing in its
 * canonical third. An inventory that finds zero pages must be an error, never a clean report.
 *
 * Usage:  node how/campaigns/campaign_haussmann/artifacts/p2_2/crawl_local_inventory.mjs
 *         (from the vault root, after `cd site && npx astro build`)
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const VAULT_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../../../../..');
const DIST = join(VAULT_ROOT, 'site/dist');

if (!existsSync(DIST)) {
  throw new Error(`no build output at ${DIST} — run \`cd site && npx astro build\` first`);
}

/** Walk dist/ for every built page. */
function findPages(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) findPages(p, out);
    else if (entry.name === 'index.html') out.push(p);
  }
  return out;
}

const files = findPages(DIST);
if (files.length === 0) {
  throw new Error(`walked ${DIST} and found no index.html — refusing to report an empty inventory`);
}

const routeOf = (f) => {
  const rel = relative(DIST, f).replace(/index\.html$/, '');
  return '/' + rel.replace(/\/$/, '') + (rel === '' ? '' : '/');
};

const pages = new Map();
for (const f of files) {
  const html = readFileSync(f, 'utf8');
  const route = routeOf(f) === '//' ? '/' : routeOf(f);
  const title = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? '').trim();
  const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? '')
    .replace(/<[^>]+>/g, '')
    .trim();
  const links = [...html.matchAll(/href="(\/[^"#?]*)"/g)]
    .map((m) => m[1])
    .map((h) => (h.endsWith('/') || /\.[a-z0-9]+$/i.test(h) ? h : h + '/'))
    .filter((h) => !/\.(png|jpe?g|webp|svg|ico|xml|txt|json|css|js|avif|woff2?)$/i.test(h));
  pages.set(route, { title, h1, links: [...new Set(links)] });
}

// --- BFS from home for depth + orphans ---
const depth = new Map([['/', 0]]);
let frontier = ['/'];
while (frontier.length) {
  const next = [];
  for (const cur of frontier) {
    for (const l of pages.get(cur)?.links ?? []) {
      if (pages.has(l) && !depth.has(l)) {
        depth.set(l, depth.get(cur) + 1);
        next.push(l);
      }
    }
  }
  frontier = next;
}

const orphans = [...pages.keys()].filter((r) => !depth.has(r)).sort();

// --- duplicate titles / h1s ---
const byTitle = new Map();
const byH1 = new Map();
for (const [route, p] of pages) {
  if (p.title) byTitle.set(p.title, [...(byTitle.get(p.title) ?? []), route]);
  if (p.h1) byH1.set(p.h1, [...(byH1.get(p.h1) ?? []), route]);
}
const dupTitles = [...byTitle.entries()].filter(([, rs]) => rs.length > 1);
const dupH1s = [...byH1.entries()].filter(([, rs]) => rs.length > 1);

// --- high-value reachability (the B1 §5 set, verbatim) ---
const HIGH_VALUE = [
  '/get-started/', '/learn/what-is-adna/', '/reference/specification/', '/vaults/',
  '/vaults/graph/', '/community/', '/glossary/', '/changelog/', '/network/', '/commons/',
];
const reach = HIGH_VALUE.map((r) => ({ route: r, built: pages.has(r), depth: depth.get(r) ?? null }));

// --- internal links pointing at nothing built ---
const dangling = new Map();
for (const [route, p] of pages) {
  for (const l of p.links) {
    if (!pages.has(l) && !l.startsWith('/_astro/')) {
      dangling.set(l, [...(dangling.get(l) ?? []), route]);
    }
  }
}

const out = [];
const say = (s = '') => out.push(s);

say(`# P2.2 O3 — local page inventory (post-consolidation)`);
say('');
say(`Source: \`site/dist\` (local build, NOT production — P2.2 is undeployed). Instrument:`);
say(`\`how/campaigns/campaign_haussmann/artifacts/p2_2/crawl_local_inventory.mjs\`. All [D].`);
say('');
say(`## 0. Scope`);
say('');
say(`- Built pages: **${pages.size}**`);
say(`- Reachable from \`/\` by internal-link BFS: **${depth.size}**`);
say(`- Max depth: **${Math.max(...depth.values())}**`);
say('');
say(`## 1. Orphans (built but unreachable from home)`);
say('');
say(orphans.length ? orphans.map((o) => `- \`${o}\``).join('\n') : 'None.');
say('');
say(`## 2. Duplicate \`<title>\``);
say('');
say(
  dupTitles.length
    ? dupTitles.map(([t, rs]) => `- "${t}" — ${rs.map((r) => `\`${r}\``).join(', ')}`).join('\n')
    : 'None.',
);
say('');
say(`## 3. Duplicate \`<h1>\``);
say('');
say(
  dupH1s.length
    ? dupH1s.map(([t, rs]) => `- "${t}" — ${rs.map((r) => `\`${r}\``).join(', ')}`).join('\n')
    : 'None.',
);
say('');
say(`## 4. High-value reachability (≤2 clicks from home)`);
say('');
say('| page | built | depth | ≤2 clicks |');
say('|---|:---:|:---:|:---:|');
for (const r of reach) {
  const ok = r.built && r.depth !== null && r.depth <= 2;
  say(`| \`${r.route}\` | ${r.built ? 'yes' : '**NO**'} | ${r.depth ?? '—'} | ${ok ? 'YES' : '**NO**'} |`);
}
const okCount = reach.filter((r) => r.built && r.depth !== null && r.depth <= 2).length;
say('');
say(`**${okCount}/${HIGH_VALUE.length}** high-value pages reachable in ≤2 clicks.`);
say('');
say(`## 5. Internal links with no built target`);
say('');
say(
  dangling.size
    ? [...dangling.entries()]
        .sort()
        .map(([t, srcs]) => `- \`${t}\` ← ${srcs.length} page(s), e.g. \`${srcs[0]}\``)
        .join('\n')
    : 'None.',
);
say('');

console.log(out.join('\n'));
