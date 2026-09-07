#!/usr/bin/env node
/**
 * Production page-inventory crawler — HAUSSMANN GR-6 O2 (AC-2, V2).
 *
 * RE-AUTHORED. The genesis crawler was run from a scratchpad on 2026-08-16 and is gone
 * (p2_replan.md:444, "Routed (non-blocking)"); its two output artifacts survived and are
 * committed, so THEY are the contract this reimplements against — not a remembered design.
 *
 *   evidence/inventory/page_inventory.csv   13 columns, header PARSED AT RUN TIME
 *   evidence/inventory/link_graph.json      nodes / edges / inbound_counts / depth_from_home
 *
 * ── WHY THE HEADER IS PARSED AND NEVER TRANSCRIBED ────────────────────────────────────
 * Campaign convention 4 / KW-14: a column list typed into this file is a second source of
 * truth that drifts in silence. The committed CSV's header line IS the schema; if it moves,
 * this script fails loudly rather than emitting a differently-shaped file that still looks
 * like an inventory.
 *
 * ── WHAT THIS ASSERTS ABOUT ITS OWN REACH (convention 14, second clause) ───────────────
 * `check_live_headers.mjs` printed "OK — no drift" having read Vercel's SSO login page: it
 * followed redirects and never checked it had arrived. So every fetch here asserts:
 *   · the response is `res.ok`                    (a 404/500 is a datum, never a silent skip)
 *   · the FINAL url is same-origin with ORIGIN    (a redirect off-origin is a hard failure)
 * A run that cannot reach its subject exits non-zero and says so. It does not emit a file.
 *
 * ── SURFACES (convention 18: say what you ran against) ────────────────────────────────
 * `--origin` defaults to https://adna.network, the surface the committed packet describes
 * (its rows carry absolute production URLs). Point it at a local preview or a fixture server
 * to exercise the logic — which is how the mutation red-proof runs, since production cannot
 * have a route removed from it. The emitted JSON records the origin it actually used.
 *
 * Usage:
 *   node scripts/crawl_haussmann_b1.mjs [--origin URL] [--out DIR] [--json] [--limit N]
 *   node scripts/crawl_haussmann_b1.mjs --self-test        # schema + parser unit checks
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const VAULT = resolve(HERE, '..');
const PACKET = join(VAULT, 'how/campaigns/campaign_haussmann/evidence/inventory');
const CSV_CONTRACT = join(PACKET, 'page_inventory.csv');

const argv = process.argv.slice(2);
const flag = (name, dflt = null) => {
  const i = argv.indexOf(name);
  return i === -1 ? dflt : argv[i + 1];
};
const ORIGIN = (flag('--origin', 'https://adna.network')).replace(/\/$/, '');
const OUT_DIR = flag('--out', PACKET);
const LIMIT = Number(flag('--limit', '0')) || 0;
const AS_JSON = argv.includes('--json');

// ── The schema, read from the committed artifact ──────────────────────────────────────

/** Parse the 13-column contract from the committed CSV's header line. Never transcribed. */
export function readColumnContract(csvPath = CSV_CONTRACT) {
  if (!existsSync(csvPath)) {
    throw new Error(
      `column contract missing: ${csvPath}\n` +
      `This script derives its schema from the committed packet. Without it there is no\n` +
      `contract to honour, and inventing one is exactly what KW-14 forbids.`,
    );
  }
  const header = readFileSync(csvPath, 'utf8').split('\n')[0].trim();
  const cols = header.split(',').map((c) => c.trim()).filter(Boolean);
  if (cols.length < 2) throw new Error(`column contract unparseable: "${header}"`);
  return cols;
}

// ── Fetch, with the reach assertions ──────────────────────────────────────────────────

class ReachError extends Error {}

/**
 * Fetch a same-origin URL and assert we actually arrived.
 * Returns { status, html, lastModified }. Throws ReachError on an off-origin landing.
 * A non-ok status is DATA (recorded as http_status), not an exception — a 404 in the
 * sitemap is precisely the kind of finding this inventory exists to surface.
 */
async function fetchPage(url) {
  const res = await fetch(url, { redirect: 'follow', headers: { 'user-agent': 'haussmann-b1-crawler' } });
  const landed = new URL(res.url || url);
  const expected = new URL(ORIGIN);
  if (landed.origin !== expected.origin) {
    throw new ReachError(
      `off-origin landing: requested ${url} but arrived at ${res.url}\n` +
      `(this is the check_live_headers.mjs scar: an instrument that follows redirects and\n` +
      ` never verifies it reached its subject will happily describe a login page)`,
    );
  }
  const html = res.ok ? await res.text() : '';
  return { status: res.status, ok: res.ok, html, lastModified: res.headers.get('last-modified') || '' };
}

// ── Extraction (regex, matching house style — see emit_bespoke_twins.mjs:270) ──────────

const stripTags = (s) => s.replace(/<[^>]*>/g, ' ');
const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
   .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ')
   .replace(/&mdash;/g, '—').replace(/&ndash;/g, '–');
const clean = (s) => decode(stripTags(s)).replace(/\s+/g, ' ').trim();

export function extractTitle(html) {
  const m = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(html);
  return m ? clean(m[1]) : '';
}

export function extractMetaDescription(html) {
  const m = /<meta[^>]+name=["']description["'][^>]*>/i.exec(html);
  if (!m) return '';
  const c = /content=["']([\s\S]*?)["']/i.exec(m[0]);
  return c ? clean(c[1]) : '';
}

export function extractH1(html) {
  const m = /<h1[^>]*>([\s\S]*?)<\/h1>/i.exec(html);
  return m ? clean(m[1]) : '';
}

/** Word count over the <main> body if present, else the whole document, tags stripped. */
export function extractWordCount(html) {
  const main = /<main[^>]*>([\s\S]*?)<\/main>/i.exec(html);
  const body = main ? main[1] : html.replace(/<(script|style)[\s\S]*?<\/\1>/gi, '');
  const text = clean(body);
  return text ? text.split(/\s+/).length : 0;
}

/**
 * Same-origin, non-asset <a href> targets, normalized to trailing-slash pathnames,
 * deduped, self-loops removed — the genesis methodology string, honoured verbatim.
 */
export function extractLinks(html, fromPath, origin = ORIGIN) {
  const out = new Set();
  for (const m of html.matchAll(/<a\b[^>]*href=["']([^"'#]+)[^"']*["']/gi)) {
    let href = m[1].trim();
    if (!href || href.startsWith('mailto:') || href.startsWith('tel:')) continue;
    let u;
    try { u = new URL(href, origin + fromPath); } catch { continue; }
    if (u.origin !== new URL(origin).origin) continue;
    if (/\.(png|jpe?g|svg|webp|ico|css|js|json|xml|txt|md|pdf|zip|woff2?)$/i.test(u.pathname)) continue;
    let p = u.pathname;
    if (!p.endsWith('/')) p += '/';
    if (p !== fromPath) out.add(p);
  }
  return [...out].sort();
}

export function templateGuess(pathname) {
  const seg = pathname.split('/').filter(Boolean);
  if (seg.length === 0) return 'home';
  const top = seg[0];
  if (seg.length === 1) return `${top}-index`;
  return `${top}-detail`;
}

export function classify(pathname) {
  const seg = pathname.split('/').filter(Boolean);
  const top = seg[0] || '';
  if (!top) return 'marketing';
  if (['learn', 'how'].includes(top)) return seg.includes('tutorials') || seg.includes('workshops') ? 'tutorial' : 'concept';
  if (top === 'reference' || top === 'glossary') return 'reference';
  if (top === 'vaults' || top === 'network') return 'registry';
  if (top === 'community' || top === 'commons') return 'governance';
  if (['about', 'get-started', 'use-cases', 'patterns'].includes(top)) return 'marketing';
  return 'meta';
}

export const hasMixedCase = (pathname) => /[A-Z]/.test(pathname);

/** BFS depth from root over the edge set. Unreachable ⇒ null (an orphan). */
export function computeDepth(edges, root = '/') {
  const depth = { [root]: 0 };
  const queue = [root];
  while (queue.length) {
    const cur = queue.shift();
    for (const next of edges[cur] || []) {
      if (!(next in depth)) { depth[next] = depth[cur] + 1; queue.push(next); }
    }
  }
  return depth;
}

export function computeInbound(edges) {
  const counts = {};
  for (const targets of Object.values(edges)) {
    for (const t of targets) counts[t] = (counts[t] || 0) + 1;
  }
  return counts;
}

// ── CSV emission ──────────────────────────────────────────────────────────────────────

const csvCell = (v) => {
  const s = v === null || v === undefined ? '' : String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

export function toCsv(columns, rows) {
  return [columns.join(','), ...rows.map((r) => columns.map((c) => csvCell(r[c])).join(','))].join('\n') + '\n';
}

// ── Sitemap ───────────────────────────────────────────────────────────────────────────

async function readSitemap() {
  const idxUrl = `${ORIGIN}/sitemap-index.xml`;
  const idx = await fetchPage(idxUrl);
  let sitemapUrl = `${ORIGIN}/sitemap-0.xml`;
  if (idx.ok) {
    const m = /<loc>([^<]*sitemap[^<]*)<\/loc>/i.exec(idx.html);
    if (m) sitemapUrl = m[1];
  }
  const sm = await fetchPage(sitemapUrl);
  if (!sm.ok) throw new ReachError(`sitemap unreachable: ${sitemapUrl} → HTTP ${sm.status}`);
  const locs = [...sm.html.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (locs.length === 0) throw new ReachError(`sitemap parsed but contained 0 <loc> entries: ${sitemapUrl}`);
  return { sitemapUrl, urls: locs };
}

// ── Main ──────────────────────────────────────────────────────────────────────────────

async function crawl() {
  const columns = readColumnContract();
  const { sitemapUrl, urls } = await readSitemap();
  const all = urls.map((u) => new URL(u).pathname).map((p) => (p.endsWith('/') ? p : p + '/'));
  const paths = LIMIT ? all.slice(0, LIMIT) : all;

  if (!AS_JSON) console.log(`crawling ${paths.length} route(s) from ${sitemapUrl}\n`);

  const pages = {};
  const edges = {};
  for (const p of paths) {
    const { status, ok, html, lastModified } = await fetchPage(ORIGIN + p);
    pages[p] = {
      url: ORIGIN + p,
      http_status: status,
      title: ok ? extractTitle(html) : '',
      meta_description: ok ? extractMetaDescription(html) : '',
      h1: ok ? extractH1(html) : '',
      word_count: ok ? extractWordCount(html) : 0,
      template_guess: templateGuess(p),
      classification: classify(p),
      last_modified: lastModified,
      mixed_case_url: hasMixedCase(p),
    };
    edges[p] = ok ? extractLinks(html, p) : [];
    if (!AS_JSON) process.stdout.write(`  ${status} ${p}\n`);
  }

  const inbound = computeInbound(edges);
  const depth = computeDepth(edges);
  const rows = paths.map((p) => ({
    ...pages[p],
    depth_from_home: p in depth ? depth[p] : '',
    inbound_link_count: inbound[p] || 0,
    is_orphan: !(p in depth),
  }));

  const orphans = paths.filter((p) => !(p in depth));
  const seen = new Set(paths);
  const notInSitemap = [...new Set(Object.values(edges).flat())].filter((t) => !seen.has(t)).sort();

  const graph = {
    generated_at: new Date().toISOString(),
    origin: ORIGIN,
    sitemap_url: sitemapUrl,
    total_sitemap_urls: paths.length,
    root: '/',
    nodes: paths,
    edges,
    inbound_counts: inbound,
    depth_from_home: depth,
    orphans,
    discovered_links_not_in_sitemap: notInSitemap,
    methodology: {
      edge_definition:
        'Deduped, same-origin, non-asset <a href> targets extracted from each fetched page\'s HTML body, normalized to trailing-slash pathnames, self-loops removed.',
      inbound_count_definition:
        'Count of distinct sitemap pages whose internal_links_out includes this URL (persistent site-wide nav/footer links inflate inbound counts for top-level nav items by construction).',
      depth_definition:
        'BFS edge-count from / (home = depth 0) over the edge set above; null = unreachable from home via internal links (orphan).',
    },
  };

  return { columns, rows, graph };
}

// ── Self-test: the parsers and the schema, no network ──────────────────────────────────

function selfTest() {
  const cases = [];
  const t = (name, actual, expected) =>
    cases.push({ name, pass: JSON.stringify(actual) === JSON.stringify(expected), actual, expected });

  const cols = readColumnContract();
  t('schema: 13 columns parsed from the committed CSV', cols.length, 13);
  t('schema: first column is url', cols[0], 'url');
  t('schema: last column is mixed_case_url', cols[cols.length - 1], 'mixed_case_url');

  const html = `<html><head><title>A &amp; B — aDNA</title>
    <meta name="description" content="Desc, with comma"></head>
    <body><main><h1>Head <em>One</em></h1><p>one two three</p>
    <a href="/about/">x</a><a href="/about">dup</a><a href="/x.png">asset</a>
    <a href="https://example.com/">off</a><a href="/self/">self</a></main></body></html>`;

  t('title decoded + suffix kept', extractTitle(html), 'A & B — aDNA');
  t('meta description with a comma', extractMetaDescription(html), 'Desc, with comma');
  t('h1 with nested markup flattened', extractH1(html), 'Head One');
  // 10, not 6: "Head One one two three" (5) PLUS the five anchor texts ("x dup asset off
  // self"), which are visible body text and belong in the count. ⭐ The first run of this
  // self-test asserted 6 and the FAILURE WAS THE TEST'S, not the extractor's — the standing
  // streak of this desk's instruments being wrong before their subjects, caught here by the
  // control rather than by a reviewer. Recorded rather than quietly corrected, because a
  // test edited to match its subject is worthless unless you can say which one moved.
  t('word count over <main>, anchor text included', extractWordCount(html), 10);
  t('links: deduped, trailing-slashed, assets+off-origin+self dropped',
    extractLinks(html, '/self/'), ['/about/']);
  t('mixed case detected', hasMixedCase('/Foo/'), true);
  t('mixed case absent', hasMixedCase('/foo/'), false);
  t('template guess home', templateGuess('/'), 'home');
  t('template guess index', templateGuess('/vaults/'), 'vaults-index');
  t('template guess detail', templateGuess('/vaults/astro/'), 'vaults-detail');

  const edges = { '/': ['/a/'], '/a/': ['/b/'], '/b/': [], '/orphan/': [] };
  t('depth BFS', computeDepth(edges), { '/': 0, '/a/': 1, '/b/': 2 });
  t('orphan absent from depth map', '/orphan/' in computeDepth(edges), false);
  t('inbound counts', computeInbound(edges), { '/a/': 1, '/b/': 1 });

  t('csv quotes a comma cell',
    toCsv(['a', 'b'], [{ a: 'x,y', b: 1 }]).split('\n')[1], '"x,y",1');

  const pass = cases.filter((c) => c.pass).length;
  for (const c of cases) {
    if (!c.pass) console.log(`  FAIL  ${c.name}\n        expected ${JSON.stringify(c.expected)}\n        actual   ${JSON.stringify(c.actual)}`);
  }
  console.log(`\nself-test: ${pass}/${cases.length} passed`);
  return pass === cases.length;
}

// ── Entry ─────────────────────────────────────────────────────────────────────────────

if (argv.includes('--self-test')) {
  process.exit(selfTest() ? 0 : 1);
}

try {
  const { columns, rows, graph } = await crawl();
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });
  const csvPath = join(OUT_DIR, 'page_inventory.csv');
  const jsonPath = join(OUT_DIR, 'link_graph.json');
  writeFileSync(csvPath, toCsv(columns, rows));
  writeFileSync(jsonPath, JSON.stringify(graph, null, 2) + '\n');

  const summary = {
    origin: ORIGIN,
    routes: rows.length,
    non_200: rows.filter((r) => r.http_status !== 200).length,
    orphans: graph.orphans.length,
    discovered_not_in_sitemap: graph.discovered_links_not_in_sitemap.length,
    csv: csvPath,
    json: jsonPath,
  };
  if (AS_JSON) console.log(JSON.stringify(summary, null, 2));
  else {
    console.log(`\n${rows.length} routes · ${summary.non_200} non-200 · ${summary.orphans} orphan(s) · ` +
                `${summary.discovered_not_in_sitemap} linked-but-not-in-sitemap`);
    console.log(`wrote ${csvPath}\nwrote ${jsonPath}`);
  }
} catch (err) {
  if (err instanceof ReachError) {
    console.error(`\nREACH FAILURE — the crawler could not verify it reached its subject.\n${err.message}\n`);
    console.error('No inventory was written. An instrument that cannot assert its reach must not emit.');
  } else {
    console.error(`\ncrawl failed: ${err.message}`);
  }
  process.exit(1);
}
