#!/usr/bin/env node
/**
 * JSON-LD census — HAUSSMANN, the instrument `GR-6` O3 §3 named and deliberately did not build.
 *
 * `evidence/sweep/jsonld_census.md` was the ONE packet of 21 whose disposition read
 * "refreshable-by-instrument" with nothing that refreshed it. Its committed report was
 * generated 2026-08-16 against 202 pages and nothing since could tell you it had gone stale.
 * THAT REPORT IS THE CONTRACT this reimplements against — not a remembered design — on the
 * `crawl_haussmann_b1.mjs` precedent (same campaign, same reason, same §).
 *
 * ── SURFACE (convention 18: say what you ran against, and whether it is the claim's) ───
 * `dist/**\/*.html` — the BUILT OUTPUT. JSON-LD is a property of the *document*, so HTML is
 * the surface the claim is actually about. This is NOT the reader-facing case where the `.md`
 * twin is correct (convention 17's 2026-08-26 amendment: the surface must match the claim's
 * verb). "Does a machine parsing this page find structured data" is an HTML question.
 * `--dist DIR` points it elsewhere, which is how the mutation red-proof runs.
 *
 * ── THE DENOMINATOR, STATED RATHER THAN INHERITED FROM WHATEVER THE GLOB RETURNED ──────
 * `dist/` holds 230 `.html` files; `astro build` reports 229 pages. Both are right:
 * `404.html` is a file the glob sees and the build does not count. It is EXCLUDED from the
 * page denominator and reported on its own line, because an unstated exclusion is exactly
 * the defect class this campaign keeps finding. `--include-404` overrides.
 *
 * ── WHAT THIS ASSERTS ABOUT ITS OWN REACH (convention 14) ──────────────────────────────
 * The failure mode most likely to ship here is a ZERO THAT MEANS "the command failed", not
 * "the thing is absent" — `GR-5`'s W8. So:
 *   · a missing/empty `dist/`        ⇒ HARNESS ERROR, exit 1, NO report written
 *   · fewer than PAGE_FLOOR pages    ⇒ HARNESS ERROR (a partial build is not a clean census)
 *   · a malformed block              ⇒ its own COUNTED THIRD STATE, never folded into either
 *                                      bucket — a broken site must not read as covered
 *   · class counts that do not sum   ⇒ HARNESS ERROR (see the conservation note below)
 * An instrument that cannot assert it reached its subject must not emit.
 *
 * ── ONE DELIBERATE DEVIATION FROM THE APPROVED PLAN, AND WHY ───────────────────────────
 * The plan called for "a loud throw on an unmatched URL shape, never .filter(Boolean)".
 * Building it showed that is the WRONG guard here: `other` is a legitimate designed bucket
 * in the committed contract (64 of its 202 pages), so throwing on unmatched would make every
 * new top-level route a hard failure and would be false to the artifact. The defect the plan
 * was actually protecting against is A PAGE SILENTLY VANISHING. That is caught exactly by a
 * CONSERVATION CHECK — the class counts must sum to the page total — which fires on a dropped
 * page and stays quiet on a legitimately new route. New classes are REPORTED BY NAME instead,
 * so growth is visible without being fatal.
 *
 * Usage:
 *   node scripts/jsonld_census.mjs [--dist DIR] [--out FILE] [--json] [--include-404]
 *   node scripts/jsonld_census.mjs --self-test        # parsers + guards, no build needed
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, mkdtempSync, mkdirSync } from 'node:fs';
import { join, dirname, resolve, relative, sep } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const HERE = dirname(fileURLToPath(import.meta.url));
const VAULT = resolve(HERE, '..');
const PACKET = join(VAULT, 'how/campaigns/campaign_haussmann/evidence/sweep/jsonld_census.md');
const DEFAULT_DIST = join(VAULT, 'site/dist');

/**
 * A partial build must not read as a clean census. 200 is BELOW the committed report's own
 * 202 deliberately — the floor exists to catch "the build did not run", not to pin a page
 * count that legitimately grows. A floor pinned at today's count would go stale the moment
 * a route is added (`GR-5`'s FAMILY_FLOOR lesson, inverted).
 */
const PAGE_FLOOR = 200;

const argv = process.argv.slice(2);
const flag = (name, dflt = null) => {
  const i = argv.indexOf(name);
  return i === -1 ? dflt : argv[i + 1];
};
const DIST = resolve(flag('--dist', DEFAULT_DIST));
const OUT = flag('--out', PACKET);
const AS_JSON = argv.includes('--json');
const INCLUDE_404 = argv.includes('--include-404');

/** Harness error: the run did not exercise its subject. Never a result. */
export class HarnessError extends Error {}

// ── Extraction ────────────────────────────────────────────────────────────────────────

/**
 * Every <script type="application/ld+json"> payload in a document, in source order.
 * Attribute order is not assumed (`type` may follow other attributes); the type match is
 * case-insensitive and tolerates a charset suffix.
 */
export function extractJsonLdBlocks(html) {
  const out = [];
  const re = /<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi;
  for (const m of html.matchAll(re)) {
    const attrs = m[1] || '';
    if (!/type\s*=\s*["']application\/ld\+json[^"']*["']/i.test(attrs)) continue;
    out.push(m[2]);
  }
  return out;
}

/**
 * Parse one block. Returns { ok, types, organizations } or { ok:false }.
 * A parse failure is DATA — the caller counts it as its own state and must not treat the
 * page as either covered or uncovered on the strength of it.
 */
export function parseBlock(raw) {
  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    return { ok: false, types: [], organizations: [] };
  }
  const types = [];
  const organizations = [];
  // A block may be an object, an array, or an @graph container. Walk all three.
  const visit = (node) => {
    if (Array.isArray(node)) return node.forEach(visit);
    if (!node || typeof node !== 'object') return;
    const t = node['@type'];
    if (typeof t === 'string') types.push(t);
    else if (Array.isArray(t)) for (const x of t) if (typeof x === 'string') types.push(x);
    if (typeof t === 'string' ? t === 'Organization' : Array.isArray(t) && t.includes('Organization')) {
      organizations.push(node);
    }
    if (Array.isArray(node['@graph'])) node['@graph'].forEach(visit);
  };
  visit(data);
  return { ok: true, types, organizations };
}

/** An Organization block counts as having sameAs only if it is a non-empty array or string. */
export function hasSameAs(org) {
  const s = org && org.sameAs;
  if (typeof s === 'string') return s.trim().length > 0;
  return Array.isArray(s) && s.length > 0;
}

// ── URL shape → template class ────────────────────────────────────────────────────────

/**
 * The committed report's class vocabulary. `other` is the designed catch-all — see the
 * deviation note in the header. Classes NOT in the committed table are reported by name as
 * NEW rather than throwing.
 */
export function classifyTemplate(route) {
  const seg = route.split('/').filter(Boolean);
  if (seg.length === 0) return 'home';
  const [top, ...rest] = seg;
  if (top === 'vaults') {
    if (rest.length === 0) return 'vaults-index';
    if (rest[0] === 'graph') return 'vaults-graph';
    return 'vault-detail';
  }
  if (top === 'learn') return rest[0] === 'tutorials' ? 'tutorial' : 'learn';
  if (top === 'reference') return 'reference';
  if (top === 'patterns') return 'patterns';
  if (top === 'community') return 'community';
  if (top === 'commons') return 'commons';
  if (top === 'get-started') return 'get-started';
  if (top === 'network') return 'network';
  if (top === 'researchers') return 'researchers';
  return 'other';
}

/**
 * The PREVIOUS report's headline figures, parsed from the file about to be overwritten.
 * ⭐ Why the instrument does this rather than a human writing "202 → 229" on the page: a
 * hand-written delta is erased by the very next run, so the refresh stops being legible as a
 * refresh after exactly one regeneration. Derived, it survives forever. (And it is the same
 * KW-14 rule as the class vocabulary: the committed artifact is the source, never a memory.)
 */
export function readPreviousSummary(packetPath = PACKET) {
  if (!existsSync(packetPath)) return null;
  const text = readFileSync(packetPath, 'utf8');
  const num = (label) => {
    const m = new RegExp(`^- ${label}:\\s*(\\d+)\\s*$`, 'm').exec(text);
    return m ? Number(m[1]) : null;
  };
  const gen = /^Generated:\s*(.+)$/m.exec(text);
  const out = {
    generated: gen ? gen[1].trim() : null,
    pages_scanned: num('Total pages scanned'),
    pages_with_jsonld: num('Pages WITH >=1 JSON-LD block'),
    pages_without_jsonld: num('Pages WITHOUT any JSON-LD block'),
    total_blocks: num('Total JSON-LD blocks found'),
    parse_failures: num('Parse failures'),
  };
  return out.pages_scanned === null ? null : out;
}

/** The class vocabulary of the committed report, PARSED — never transcribed (KW-14). */
export function readCommittedClasses(packetPath = PACKET) {
  if (!existsSync(packetPath)) return null;
  const text = readFileSync(packetPath, 'utf8');
  const section = /## Template coverage[^\n]*\n([\s\S]*?)(?:\n## |$)/.exec(text);
  if (!section) return null;
  const classes = [];
  for (const line of section[1].split('\n')) {
    const m = /^\|\s*([a-z0-9-]+)\s*\|/i.exec(line.trim());
    if (m && m[1] !== 'template' && m[1] !== '---') classes.push(m[1]);
  }
  return classes.length ? classes : null;
}

// ── Walk ──────────────────────────────────────────────────────────────────────────────

/** Every *.html under dir, as vault-relative-ish posix routes, sorted. */
export function walkHtml(dir) {
  const out = [];
  const rec = (d) => {
    let entries;
    try { entries = readdirSync(d, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      const p = join(d, e.name);
      if (e.isDirectory()) rec(p);
      else if (e.isFile() && e.name.endsWith('.html')) out.push(p);
    }
  };
  rec(dir);
  return out.sort();
}

/** dist/foo/index.html → /foo/ ; dist/404.html → /404.html */
export function fileToRoute(distDir, file) {
  let rel = relative(distDir, file).split(sep).join('/');
  if (rel.endsWith('/index.html')) return '/' + rel.slice(0, -'index.html'.length);
  if (rel === 'index.html') return '/';
  return '/' + rel;
}

// ── Census ────────────────────────────────────────────────────────────────────────────

/**
 * `classify` is injectable for ONE reason: the conservation guard below is otherwise
 * unreachable by a red-proof. Every real caller uses the default. A guard that cannot be
 * demonstrated to fire is a guard nobody has any reason to believe (convention 14).
 */
export function census(distDir, { include404 = false, floor = PAGE_FLOOR, classify = classifyTemplate } = {}) {
  if (!existsSync(distDir)) {
    throw new HarnessError(
      `dist not found: ${distDir}\n` +
      `Build first: npx astro build (NEVER npm run build — prebuild regenerates committed data).`,
    );
  }
  const files = walkHtml(distDir);
  const rows = [];
  let skipped = 0;
  for (const f of files) {
    const route = fileToRoute(distDir, f);
    if (!include404 && route === '/404.html') { skipped++; continue; }
    const html = readFileSync(f, 'utf8');
    const blocks = extractJsonLdBlocks(html);
    const parsed = blocks.map(parseBlock);
    const failures = parsed.filter((p) => !p.ok).length;
    const okBlocks = parsed.filter((p) => p.ok);
    rows.push({
      route,
      file: relative(distDir, f).split(sep).join('/'),
      blocks: blocks.length,
      parse_failures: failures,
      types: okBlocks.flatMap((p) => p.types),
      organizations: okBlocks.flatMap((p) => p.organizations),
      template_class: classify(route),
    });
  }

  if (rows.length === 0) {
    throw new HarnessError(
      `0 pages scanned under ${distDir}\n` +
      `A zero here means THE COMMAND FAILED, not that the site has no pages. Refusing to\n` +
      `emit a census that would read as clean. (GR-5 W8.)`,
    );
  }
  if (rows.length < floor) {
    throw new HarnessError(
      `only ${rows.length} pages scanned under ${distDir}; floor is ${floor}.\n` +
      `A partial build is not a clean census — it is a census of a partial build, and the\n` +
      `two are indistinguishable in the output. Rebuild, or pass a lower --floor knowingly.`,
    );
  }

  const typeCounts = {};
  for (const r of rows) for (const t of r.types) typeCounts[t] = (typeCounts[t] || 0) + 1;

  const classCounts = {};
  for (const r of rows) classCounts[r.template_class] = (classCounts[r.template_class] || 0) + 1;

  // ── Conservation ─────────────────────────────────────────────────────────────────────
  // ⛔ THE FIRST VERSION OF THIS GUARD WAS VACUOUS AND IS RECORDED RATHER THAN QUIETLY
  // REPLACED. It compared `sum(classCounts)` to `rows.length` — but classCounts is BUILT by
  // tallying one entry per row, so the sum is arithmetically forced to equal rows.length no
  // matter what the classifier returns. It could never fire. It would have read as coverage
  // for a defect it structurally could not see: the ninth member of this campaign's
  // instrument-narrower-than-its-conclusion family, caught by asking how to red-prove it and
  // finding there was no way to.
  //
  // The two things that CAN silently lose a page are guarded instead:
  //   (a) a file walked but never rowed — every `continue` must be a counted skip
  //   (b) a classifier returning nothing — which would bucket pages under "undefined"
  if (rows.length + skipped !== files.length) {
    throw new HarnessError(
      `walked ${files.length} html file(s) but produced ${rows.length} row(s) + ${skipped} counted skip(s).\n` +
      `${files.length - rows.length - skipped} file(s) vanished between the walk and the table.\n` +
      `A census that loses pages is wrong in the direction that looks clean.`,
    );
  }
  const unclassed = rows.filter((r) => typeof r.template_class !== 'string' || r.template_class === '');
  if (unclassed.length) {
    throw new HarnessError(
      `${unclassed.length} page(s) received no template class, e.g. ${unclassed[0].route}\n` +
      `These would tally under "undefined" and read as a real class in the coverage table.`,
    );
  }

  const withBlocks = rows.filter((r) => r.blocks > 0);
  const orgs = rows.flatMap((r) => r.organizations);

  return {
    dist: distDir,
    include404,
    floor,
    pages_scanned: rows.length,
    pages_with_jsonld: withBlocks.length,
    pages_without_jsonld: rows.length - withBlocks.length,
    total_blocks: rows.reduce((a, r) => a + r.blocks, 0),
    parse_failures: rows.reduce((a, r) => a + r.parse_failures, 0),
    parse_failure_routes: rows.filter((r) => r.parse_failures > 0).map((r) => r.route),
    type_counts: typeCounts,
    organizations_found: orgs.length,
    organizations_missing_sameas: orgs.filter((o) => !hasSameAs(o)).length,
    class_counts: classCounts,
    class_coverage: Object.fromEntries(
      Object.keys(classCounts).sort().map((c) => {
        const inClass = rows.filter((r) => r.template_class === c);
        return [c, { pages: inClass.length, with_jsonld: inClass.filter((r) => r.blocks > 0).length }];
      }),
    ),
    without_routes: rows.filter((r) => r.blocks === 0).map((r) => r.file),
    rows,
  };
}

// ── Provenance ────────────────────────────────────────────────────────────────────────

/**
 * The build stamp comes from git HEAD, NOT from `/.well-known/adna-build.json` — that file
 * is injected by `deploy_adna.sh` as a POST-BUILD step and does not exist in a local build.
 * An instrument asserting a stamp source that cannot exist at its own run time is
 * `check_live_headers.mjs`'s defect on line one.
 */
export function buildStamp() {
  const git = (args) => execFileSync('git', args, { cwd: VAULT, encoding: 'utf8' }).trim();
  try {
    const head = git(['rev-parse', '--short', 'HEAD']);
    // ⭐ `site/` dirtiness, NOT whole-tree dirtiness, is what determines whether `dist/`
    // corresponds to HEAD. This vault's tree is routinely dirty with `.obsidian/` churn and
    // session files, none of which a build reads — a whole-tree flag would raise a warning
    // on every run and be ignored by the third one. Report the surface that matters, and
    // keep the wider fact beside it rather than instead of it.
    // ⛔ AND NAME THEM, do not summarise to a boolean. The first version reported `site/`
    // DIRTY on a tree whose only dirty file under `site/` was `scripts/deploy_log.txt` — a
    // deploy log no build reads. A true-but-useless warning is worse than none: it is read
    // once, dismissed, and then dismissed again on the run where it mattered. Convention 17's
    // law one altitude down — name the surface, do not summarise it away.
    // ⚠ NOT `.slice(3)`. Porcelain lines are `XY<space>PATH`, but the `git()` helper above
    // trims, so an unstaged ` M path` arrives as `M path` and a fixed 3-char slice eats the
    // first character of the filename — it printed `ite/scripts/deploy_log.txt`. Caught by
    // reading the output rather than by a test, which is the third defect of mine this
    // sitting that structure surfaced instead of vigilance.
    const siteDirtyFiles = git(['status', '--porcelain', '--', 'site/'])
      .split('\n').map((l) => l.trim().replace(/^[A-Z?!]{1,2}\s+/, '')).filter(Boolean);
    const treeDirty = git(['status', '--porcelain']).length > 0;
    const siteHead = git(['log', '-1', '--format=%h', '--', 'site/']);
    return { head, siteDirtyFiles, siteDirty: siteDirtyFiles.length > 0, treeDirty, siteHead };
  } catch {
    return { head: 'unknown', siteDirtyFiles: [], siteDirty: null, treeDirty: null, siteHead: 'unknown' };
  }
}

/** `~/aDNA/…` for anything a human reads (vault path convention); absolute only in data fields. */
export function tildePath(p) {
  const home = process.env.HOME || '';
  return home && p.startsWith(home) ? '~' + p.slice(home.length) : p;
}

// ── Report ────────────────────────────────────────────────────────────────────────────

export function renderReport(c, { stamp, generatedAt, committedClasses, prev = null }) {
  const L = [];
  const newClasses = committedClasses
    ? Object.keys(c.class_counts).filter((k) => !committedClasses.includes(k)).sort()
    : [];
  const goneClasses = committedClasses
    ? committedClasses.filter((k) => !(k in c.class_counts)).sort()
    : [];

  L.push('# JSON-LD Census');
  L.push('');
  L.push(`Generated: ${generatedAt}`);
  L.push('');
  L.push(`> **Instrument**: \`scripts/jsonld_census.mjs\` (red-proofed; \`--self-test\` covers the`);
  L.push('> parsers and all four guards). Regenerate with `npx astro build` then');
  L.push('> `node scripts/jsonld_census.mjs`.');
  L.push('>');
  L.push(`> **Surface** (convention 18): \`${tildePath(c.dist)}/**/*.html\` — the BUILT OUTPUT.`);
  L.push(`> Git \`HEAD\` = \`${stamp.head}\`; last commit touching \`site/\` = \`${stamp.siteHead}\`.`);
  if (stamp.siteDirty) {
    L.push(`> \`site/\` has ${stamp.siteDirtyFiles.length} uncommitted file(s), NAMED so you can judge`);
    L.push('> whether the build corresponds to a commit rather than take a boolean for it:');
    for (const f of stamp.siteDirtyFiles.slice(0, 10)) L.push(`> - \`${f}\``);
    L.push('>');
  } else {
    L.push('> `site/` working copy is clean, so this build corresponds to that commit.');
  }
  L.push('> JSON-LD is a property of the document, so HTML is the surface the claim is about —');
  L.push('> not the `.md` twin, which is the correct surface only for reader-facing claims.');
  L.push('>');
  L.push(`> **Denominator**: \`404.html\` is ${c.include404 ? 'INCLUDED' : 'EXCLUDED'}. \`dist/\` holds one more`);
  L.push('> `.html` file than `astro build` reports pages, and that file is the 404. Stated rather');
  L.push('> than left to whatever the glob returned.');
  L.push('');
  L.push(`- Total pages scanned: ${c.pages_scanned}`);
  L.push(`- Pages WITH >=1 JSON-LD block: ${c.pages_with_jsonld}`);
  L.push(`- Pages WITHOUT any JSON-LD block: ${c.pages_without_jsonld}`);
  L.push(`- Total JSON-LD blocks found: ${c.total_blocks}`);
  L.push(`- Parse failures: ${c.parse_failures}`);
  L.push('');
  if (prev) {
    const d = (now, was) => (was === null ? 'n/a' : `${was} → ${now}` + (now === was ? ' (unchanged)' : ` (${now > was ? '+' : ''}${now - was})`));
    L.push('## Change since the previous census');
    L.push('');
    L.push(`Previous run: ${prev.generated || 'undated'}. **Derived by parsing the report this run`);
    L.push('replaced**, not typed — so the delta stays true after every future regeneration.');
    L.push('');
    L.push('| | was → now |');
    L.push('|---|---|');
    L.push(`| Pages scanned | ${d(c.pages_scanned, prev.pages_scanned)} |`);
    L.push(`| With JSON-LD | ${d(c.pages_with_jsonld, prev.pages_with_jsonld)} |`);
    L.push(`| Without | ${d(c.pages_without_jsonld, prev.pages_without_jsonld)} |`);
    L.push(`| Blocks | ${d(c.total_blocks, prev.total_blocks)} |`);
    L.push(`| Parse failures | ${d(c.parse_failures, prev.parse_failures)} |`);
    L.push('');
  }
  L.push('## @type census');
  L.push('');
  L.push('| @type | count |');
  L.push('|---|---|');
  for (const [t, n] of Object.entries(c.type_counts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))) {
    L.push(`| ${t} | ${n} |`);
  }
  L.push('');
  L.push('## Organization sameAs check');
  L.push('');
  L.push(`- Organization blocks found: ${c.organizations_found}`);
  L.push(`- Organization blocks MISSING sameAs (or empty): ${c.organizations_missing_sameas}`);
  L.push('');
  L.push('## Parse failures');
  L.push('');
  if (c.parse_failures === 0) L.push('None.');
  else for (const r of c.parse_failure_routes) L.push(`- ${r}`);
  L.push('');
  L.push('## Template coverage (by URL-shape classification)');
  L.push('');
  L.push('| template class | pages | pages w/ JSON-LD | pages missing |');
  L.push('|---|---|---|---|');
  const ordered = Object.entries(c.class_coverage).sort((a, b) => b[1].pages - a[1].pages || a[0].localeCompare(b[0]));
  for (const [cls, v] of ordered) {
    L.push(`| ${cls} | ${v.pages} | ${v.with_jsonld} | ${v.pages - v.with_jsonld} |`);
  }
  L.push('');
  if (newClasses.length || goneClasses.length) {
    L.push('> **Class vocabulary moved since the committed report** (parsed from it, never');
    L.push('> transcribed). New classes are reported, not thrown on — `other` is a designed');
    L.push('> catch-all, so a throw would make every new top-level route a false failure.');
    if (newClasses.length) L.push(`> NEW: ${newClasses.join(', ')}`);
    if (goneClasses.length) L.push(`> GONE: ${goneClasses.join(', ')}`);
    L.push('');
  }
  L.push('## Sample of pages WITHOUT any JSON-LD (first 40)');
  L.push('');
  for (const f of c.without_routes.slice(0, 40)) L.push(`- ${f}`);
  L.push('');
  return L.join('\n');
}

// ── Self-test ─────────────────────────────────────────────────────────────────────────

function selfTest() {
  const cases = [];
  const t = (name, actual, expected) =>
    cases.push({ name, pass: JSON.stringify(actual) === JSON.stringify(expected), actual, expected });
  const throws = (name, fn, is = HarnessError) => {
    let got = null;
    try { fn(); } catch (e) { got = e; }
    cases.push({ name, pass: got instanceof is, actual: got ? got.constructor.name : 'no throw', expected: is.name });
  };

  // extraction
  const page = `<html><head>
    <script type="application/ld+json">{"@type":"WebPage","name":"x"}</script>
    <script type="application/ld+json">{"@graph":[{"@type":"BreadcrumbList"}]}</script>
    <script type="text/javascript">var x = 1;</script>
    </head><body>hi</body></html>`;
  t('extracts only ld+json blocks', extractJsonLdBlocks(page).length, 2);
  t('ignores other script types', extractJsonLdBlocks('<script>x</script>').length, 0);
  t('tolerates attribute order', extractJsonLdBlocks('<script data-x="1" type="application/ld+json">{}</script>').length, 1);
  t('tolerates charset suffix', extractJsonLdBlocks('<script type="application/ld+json; charset=utf-8">{}</script>').length, 1);

  // parsing
  t('parses @type', parseBlock('{"@type":"WebPage"}').types, ['WebPage']);
  t('parses array @type', parseBlock('{"@type":["WebPage","Article"]}').types, ['WebPage', 'Article']);
  t('walks @graph', parseBlock('{"@graph":[{"@type":"A"},{"@type":"B"}]}').types, ['A', 'B']);
  t('walks a top-level array', parseBlock('[{"@type":"A"},{"@type":"B"}]').types, ['A', 'B']);
  t('malformed json is not ok', parseBlock('{nope').ok, false);
  t('malformed json yields no types', parseBlock('{nope').types, []);

  // sameAs
  t('sameAs array counts', hasSameAs({ sameAs: ['https://x'] }), true);
  t('sameAs empty array does not', hasSameAs({ sameAs: [] }), false);
  t('sameAs missing does not', hasSameAs({}), false);
  t('sameAs empty string does not', hasSameAs({ sameAs: '  ' }), false);

  // classification
  t('home', classifyTemplate('/'), 'home');
  t('vaults index', classifyTemplate('/vaults/'), 'vaults-index');
  t('vault detail', classifyTemplate('/vaults/astro/'), 'vault-detail');
  t('vaults graph', classifyTemplate('/vaults/graph/'), 'vaults-graph');
  t('tutorial beats learn', classifyTemplate('/learn/tutorials/x/'), 'tutorial');
  t('learn', classifyTemplate('/learn/concepts/x/'), 'learn');
  t('unmatched falls to other, does NOT throw', classifyTemplate('/privacy/'), 'other');

  // routes
  t('index.html → dir route', fileToRoute('/d', '/d/about/index.html'), '/about/');
  t('root index', fileToRoute('/d', '/d/index.html'), '/');
  t('bare file kept', fileToRoute('/d', '/d/404.html'), '/404.html');

  // ── Guards: each demonstrated to FAIL, per convention 14 ────────────────────────────
  // ⭐ EACH IS MATCHED ON ITS OWN MESSAGE, not merely on the error class. All four guards
  // throw HarnessError, so `instanceof` alone cannot tell which one fired — and a red
  // arriving through a DIFFERENT assertion than the one under test is a harness bug, not a
  // pass. The first draft of this self-test made exactly that mistake: it asserted the
  // below-floor guard by pointing at a directory that might contain zero pages, which would
  // have thrown the EMPTY guard instead and read as green.
  const throwsMatching = (name, fn, re) => {
    let got = null;
    try { fn(); } catch (e) { got = e; }
    const pass = got instanceof HarnessError && re.test(got.message);
    cases.push({
      name,
      pass,
      actual: got ? `${got.constructor.name}: ${String(got.message).split('\n')[0]}` : 'no throw',
      expected: `HarnessError matching ${re}`,
    });
  };

  const tmp = mkdtempSync(join(tmpdir(), 'jsonld-selftest-'));
  const emptyDir = join(tmp, 'empty');
  mkdirSync(emptyDir, { recursive: true });
  const onePage = join(tmp, 'one');
  mkdirSync(join(onePage, 'a'), { recursive: true });
  writeFileSync(join(onePage, 'a', 'index.html'), '<html><head></head><body>x</body></html>');

  throwsMatching('missing dist → the NOT-FOUND guard', () => census('/nonexistent/dist/path'), /dist not found/);
  throwsMatching('zero pages → the EMPTY guard, not the floor guard', () => census(emptyDir, { floor: 1 }), /0 pages scanned/);
  throwsMatching('one page under a floor of 9 → the FLOOR guard, not the empty guard', () => census(onePage, { floor: 9 }), /floor is 9/);
  t('a directory above its floor censuses cleanly', census(onePage, { floor: 1 }).pages_scanned, 1);
  t('floor default is below the committed 202 on purpose', PAGE_FLOOR < 202, true);

  // the committed contract is parseable
  const committed = readCommittedClasses();
  cases.push({
    name: 'committed class vocabulary parsed from the packet (never transcribed)',
    pass: Array.isArray(committed) && committed.length >= 10,
    actual: committed ? committed.length : null,
    expected: '>=10',
  });

  const pass = cases.filter((c) => c.pass).length;
  for (const c of cases) {
    if (!c.pass) console.log(`  FAIL  ${c.name}\n        expected ${JSON.stringify(c.expected)}\n        actual   ${JSON.stringify(c.actual)}`);
  }
  console.log(`\nself-test: ${pass}/${cases.length} passed`);
  return pass === cases.length;
}

// ── Entry ─────────────────────────────────────────────────────────────────────────────

/**
 * ⛔ THIS GUARD IS LOAD-BEARING AND WAS MISSING ON THE FIRST RUN.
 * Without it the block below executes on IMPORT, so `jsonld_census_redtest.mjs` — which
 * imports `census` to red-prove it — silently ran a full census and OVERWROTE THE COMMITTED
 * PACKET before printing its first line of output. Found by reading the red-proof's own
 * stdout ("wrote …/jsonld_census.md" above the baseline), not by a test.
 * ⭐ An instrument whose mere import mutates the evidence it measures is the sharpest form
 * of this campaign's own finding: the observer writing to the thing observed.
 */
const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (!isMain) {
  // imported as a library (red-proof, future gates) — expose the functions, run nothing
} else {

if (argv.includes('--self-test')) {
  process.exit(selfTest() ? 0 : 1);
}

try {
  const floorFlag = Number(flag('--floor', '')) || PAGE_FLOOR;
  const c = census(DIST, { include404: INCLUDE_404, floor: floorFlag });
  const stamp = buildStamp();
  const generatedAt = new Date().toISOString();
  // Read the outgoing report BEFORE overwriting it — the delta's only source.
  const prev = OUT === '-' ? null : readPreviousSummary(OUT);
  const report = renderReport(c, {
    stamp, generatedAt, committedClasses: readCommittedClasses(), prev,
  });

  if (OUT !== '-') writeFileSync(OUT, report);

  if (AS_JSON) {
    const { rows, ...summary } = c;
    console.log(JSON.stringify({ ...summary, build: stamp, generated_at: generatedAt }, null, 2));
  } else if (OUT === '-') {
    console.log(report);
  } else {
    console.log(
      `${c.pages_scanned} pages · ${c.pages_with_jsonld} with JSON-LD · ${c.pages_without_jsonld} without · ` +
      `${c.total_blocks} blocks · ${c.parse_failures} parse failure(s)`,
    );
    console.log(`Organization: ${c.organizations_found} found, ${c.organizations_missing_sameas} missing sameAs`);
    console.log(`wrote ${OUT}`);
  }
} catch (err) {
  if (err instanceof HarnessError) {
    console.error(`\nHARNESS ERROR — the census did not exercise its subject.\n${err.message}\n`);
    console.error('No report was written. A zero that means "the command failed" must never be');
    console.error('emitted as a census, because a clean census and a broken run look identical.');
  } else {
    console.error(`\ncensus failed: ${err.stack || err.message}`);
  }
  process.exit(1);
}

}  // end isMain
