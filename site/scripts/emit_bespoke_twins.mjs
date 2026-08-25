#!/usr/bin/env node
/* ============================================================================
 * emit_bespoke_twins.mjs — markdown twins for the pages that have no markdown.
 *
 * HAUSSMANN P3.1 / ADR-056 clause 1, TIER C.
 *
 * WHY THIS TOOL EXISTS AT ALL — the finding that reshaped the mission:
 *
 *   The acceptance criterion required machine-eye item 3 (`.md` twins, 10/10 404)
 *   to re-run PASS, and named the method as generation "from the content
 *   collections". All six of item 3's probe targets are bespoke `.astro` pages
 *   with no markdown source:
 *
 *     /learn/what-is-adna · /reference/specification · /get-started
 *     /vaults · /network · /glossary
 *
 *   Collections-only generation emits 120 twins, reports done, and leaves 10/10
 *   probes still 404. The method clause could not satisfy the test clause.
 *
 * WHY EXTRACTION AND NOT AUTHORED SIDECARS: the mission's constraint is that
 * twins derive from the same single source as the HTML — no drift channel. A
 * hand-written twin per bespoke page is exactly a drift channel: correct the day
 * it is written, silently rotten after. This campaign has a live instance of that
 * failure (P2.5 — a fabricated transcript cut from one page while the identical
 * false mechanism stayed asserted twice in the surrounding prose). Deriving from
 * the built artifact means the twin cannot claim what the page does not.
 *
 * WHAT IT COSTS, STATED PLAINLY: an extracted twin is rougher than canonical
 * markdown. Chrome is excluded by structure, not by taste, and component-heavy
 * layouts flatten. That is the price of the guarantee, and it is the right trade —
 * a rough-but-true twin serves an agent better than a polished one that stopped
 * matching its page.
 *
 * PLACEMENT: runs as `astro:build:done` via astro.config.mjs, over `dist` ONLY.
 *
 *   This started out walking BOTH `dist` and `.vercel/output/static`, copying
 *   stripHtmlComments()'s shape. Its own root-divergence guard then fired on the
 *   first run — `dist` got 32 twins, `.vercel/output/static` got 0 — and the
 *   reason is worth recording, because the sibling tool's comment asserts the
 *   opposite: **the adapter copies AFTER `astro:build:done`, not before.** Verified
 *   in the build log ("dev-comment strip: …" then "[@astrojs/vercel] Copying static
 *   files to .vercel/output/static"), and by inspection — the directory is empty at
 *   hook time. So at hook time that path holds either nothing or the PREVIOUS
 *   build's output, and writing a twin there would derive it from stale HTML.
 *
 *   Consequence for the sibling: stripHtmlComments()'s second root is inert. Its
 *   comment claims the dual walk means "the strip cannot be defeated by hook
 *   ordering"; in fact the strip is safe because the adapter copies the already-
 *   stripped `dist` afterwards — a correct outcome reached by a different mechanism
 *   than the one documented. Left alone here (out of scope, and it is not broken);
 *   filed for P4.4, which owns CI hardening.
 *
 * `dist` is the source of truth; the deploy surface inherits by copy. That the copy
 * really did carry the twins is asserted downstream by gate-17 against the built
 * output, not assumed here — this tool cannot see post-copy state.
 *
 * Also writes `src/data/twin_manifest.json` — the single lock every downstream
 * consumer reads (negotiation routes, the llms-full corpus, gate-17 fixtures), so
 * no consumer carries a hand-typed route list (KW-8/FR-K, KW-14).
 * ==========================================================================*/

import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const die = (m) => { console.error(`emit_bespoke_twins ABORT: ${m}`); process.exit(1); };

/* ── Pages a twin would misrepresent rather than serve ──────────────────────
 * Excluded on purpose, and each for a stated reason — never "it looked hard".
 * A twin of a 404 page or a live design-system swatch grid is noise in a corpus
 * an agent is told is the site. Absence here is declared, not hidden: these
 * routes simply have no twin, and llms.txt does not claim they do.            */
const EXCLUDE = new Set([
  '/404',              // an error page is not content
  '/design-system',    // a live swatch/token grid; its meaning IS the rendering
  '/vaults/graph',     // the topology is SVG geometry; its keyboard twin is /vaults
]);

/* Tier A/B routes already have twins from `[...path].md.ts`. Skipping them here
 * is not an optimisation — a second emitter writing the same path would silently
 * overwrite the canonical-markdown twin with a rougher extracted one. */

/**
 * In-`<main>` chrome. `<main>` is the right extraction boundary for page content, but it is not
 * a content-only boundary — this site puts the section sidebar, its mobile `<details>` twin, and
 * the breadcrumb inside it. Extracted verbatim, `/get-started.md` opened with "In this section"
 * and a seven-link nav before reaching a sentence.
 *
 * Navigation is precisely what a twin does not need: an agent arriving here already has
 * llms.txt, the corpus, and the pointer block. Dropping it is removing duplication, not content.
 */
const CHROME = [
  /<nav\b[\s\S]*?<\/nav>/gi,
  /<details\b[^>]*class="[^"]*(?:mobile-nav|doc-nav)[^"]*"[\s\S]*?<\/details>/gi,
  /<aside\b[^>]*class="[^"]*(?:sidebar|toc)[^"]*"[\s\S]*?<\/aside>/gi,
  /<[^>]*class="[^"]*breadcrumb[^"]*"[^>]*>[\s\S]*?<\/[a-z]+>/gi,
];

const stripTags = (html) => {
  let s = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '');
  for (const re of CHROME) s = s.replace(re, '');
  return s;
};

/** Minimal, deliberate HTML → markdown over the structures this site actually emits. */
function htmlToMarkdown(html) {
  let s = stripTags(html);

  // Block structures, before inline ones.
  s = s.replace(/<pre[^>]*>[\s\S]*?<code[^>]*>([\s\S]*?)<\/code>[\s\S]*?<\/pre>/gi,
    (_m, code) => `\n\`\`\`\n${decode(code).trim()}\n\`\`\`\n`);
  s = s.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, (_m, code) => `\n\`\`\`\n${decode(stripInline(code)).trim()}\n\`\`\`\n`);

  for (let level = 1; level <= 6; level += 1) {
    s = s.replace(new RegExp(`<h${level}[^>]*>([\\s\\S]*?)</h${level}>`, 'gi'),
      (_m, inner) => `\n\n${'#'.repeat(level)} ${clean(inner)}\n\n`);
  }

  s = s.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_m, inner) => `\n- ${clean(inner)}`);
  s = s.replace(/<\/(ul|ol)>/gi, '\n\n');
  s = s.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_m, inner) => `\n\n> ${clean(inner)}\n\n`);
  s = s.replace(/<(p|div|section|header|footer|article|tr)[^>]*>/gi, '\n');
  s = s.replace(/<br\s*\/?>/gi, '\n');
  s = s.replace(/<\/(p|div|section|header|footer|article|tr|dl|dt|dd|table)>/gi, '\n');

  return tidy(clean(s));
}

const stripInline = (h) => h.replace(/<[^>]+>/g, '');

function decode(s) {
  return s
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'").replace(/&#x27;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/&rarr;/g, '→').replace(/&mdash;/g, '—').replace(/&ndash;/g, '–')
    .replace(/&amp;/g, '&');
}

/** Inline formatting worth keeping, then everything else dropped. */
function clean(fragment) {
  let s = fragment;
  s = s.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, (_m, c) => `\`${decode(stripInline(c)).trim()}\``);
  s = s.replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi, (_m, _t, c) => `**${stripInline(c).trim()}**`);
  s = s.replace(/<(em|i)[^>]*>([\s\S]*?)<\/\1>/gi, (_m, _t, c) => `*${stripInline(c).trim()}*`);
  s = s.replace(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (_m, href, text) => {
    const label = stripInline(text).replace(/\s+/g, ' ').trim();
    if (!label) return '';
    return href.startsWith('#') ? label : `[${label}](${href})`;
  });
  s = s.replace(/<img\b[^>]*alt="([^"]*)"[^>]*>/gi, (_m, alt) => (alt ? `*[image: ${alt}]*` : ''));
  return decode(stripInline(s)).replace(/[ \t]+/g, ' ').trim();
}

/**
 * Trim each line's leading and trailing whitespace — but never inside a fenced block, where
 * indentation is the content. Source HTML is pretty-printed, so without this every wrapped
 * sentence inherits a stray leading space and markdown starts reading it as significant.
 */
function tidy(s) {
  let fenced = false;
  const lines = s.split('\n').map((line) => {
    if (/^\s*```/.test(line)) { fenced = !fenced; return line.trim(); }
    return fenced ? line.replace(/\s+$/, '') : line.trim();
  });
  return lines.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

/* ── main ─────────────────────────────────────────────────────────────────── */

const cwd = process.cwd();
const root = join(cwd, 'dist');
if (!existsSync(root)) die('dist/ does not exist — run the build first');

const walk = (dir) => {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else if (entry.name === 'index.html') out.push(p);
  }
  return out;
};

/** `dist/get-started/index.html` → `/get-started` */
const routeOf = (root, file) => {
  const rel = relative(root, file).split(sep).slice(0, -1).join('/');
  return rel ? `/${rel}` : '/';
};

const written = [];
const skipped = [];

for (const file of walk(root)) {
  const route = routeOf(root, file);
  const twinPath = route === '/' ? join(root, 'index.md') : join(root, `${route.slice(1)}.md`);

  if (EXCLUDE.has(route)) { skipped.push(`${route} (excluded)`); continue; }
  // Tier A/B already emitted a canonical twin at this exact path — never overwrite it.
  if (existsSync(twinPath)) { skipped.push(`${route} (tier A/B)`); continue; }

  const html = readFileSync(file, 'utf8');
  const main = /<main\b[^>]*>([\s\S]*?)<\/main>/i.exec(html);
  if (!main) {
    // Loud, not silent: every page on this site renders through BaseLayout's <main>. A page
    // without one is a layout change this tool must be told about, not a page to quietly skip.
    die(`${file} has no <main> element — every page routes through BaseLayout, so this is a layout change that needs a decision, not a silent skip`);
  }

  const titleMatch = /<title>([\s\S]*?)<\/title>/i.exec(html);
  const title = titleMatch ? decode(titleMatch[1]).replace(/\s+—\s+aDNA$/, '').trim() : route;

  const body = htmlToMarkdown(main[1]);
  if (body.length < 200) { skipped.push(`${route} (thin: ${body.length}B)`); continue; }

  // ONE contiguous quote block, not two. The tier-C note started as a separate paragraph and
  // that made the pointer block structurally different from tier A/B's — every consumer that
  // strips "the leading quote block" (the corpus builder, gate-17) then left a stray line behind
  // on exactly the 32 pages tier C owns. A twin's envelope should not vary by how it was derived.
  const pointer = [
    `> Markdown twin of https://adna.network${route === '/' ? '' : route}/`,
    '> Index: https://adna.network/llms.txt · Full corpus: https://adna.network/llms-full.txt',
    `> State is a build-time snapshot generated ${new Date().toISOString().slice(0, 10)} (UTC); nothing here is live.`,
    '> Derived from the rendered page — this route has no markdown source.',
    '',
  ].join('\n');

  // The page's own <h1> is inside <main>, so prepending the <title> would give every twin two
  // titles — and they differ (the <title> carries the " — aDNA" suffix), so a reader would see
  // two competing names for one page. Prepend only when the body genuinely has no h1.
  const hasH1 = /^#\s+\S/m.test(body.split('\n').slice(0, 8).join('\n'));
  writeFileSync(twinPath, `${pointer}\n${hasH1 ? '' : `# ${title}\n\n`}${body}\n`);
  written.push(route);
}

/* ── advertise each twin from the page it twins (machine_eye item 12) ──────
 *
 * Item 12's sharpest finding was not that twins were missing — it was that the string "llms"
 * appeared ZERO times across every page HTML probed, so the one genuinely good artifact the site
 * shipped was undiscoverable unless the agent already knew the convention.
 *
 * WHY THE LINK IS INJECTED HERE rather than emitted from SEOHead.astro: SEOHead would have to
 * guess whether a twin exists. Tier-C membership is only decided post-build (it depends on the
 * rendered page), so a component-side `rel=alternate` would be advertising a twin the build had
 * not yet decided to write — and for the three excluded routes it would advertise one that never
 * gets written at all. A pointer to a 404 is worse than no pointer. Injected from the tool that
 * just wrote the file, the link exists if and only if its twin does.
 *
 * Idempotent: re-running over an already-injected tree is a no-op, not a duplicate tag.
 */
const advertise = (htmlFile, twinHref) => {
  const html = readFileSync(htmlFile, 'utf8');
  if (html.includes(`href="${twinHref}"`)) return false;
  const tag = `<link rel="alternate" type="text/markdown" href="${twinHref}">`;
  if (!html.includes('</head>')) die(`${htmlFile} has no </head> — cannot advertise its twin`);
  writeFileSync(htmlFile, html.replace('</head>', `${tag}</head>`));
  return true;
};

let advertised = 0;
for (const file of walk(root)) {
  const route = routeOf(root, file);
  const twinFile = route === '/' ? join(root, 'index.md') : join(root, `${route.slice(1)}.md`);
  if (!existsSync(twinFile)) continue;
  if (advertise(file, route === '/' ? '/index.md' : `${route}.md`)) advertised += 1;
}

/* ── the manifest: every twin path on the site, emitted never typed ───────── */
const allTwins = [];
const collect = (dir) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) collect(p);
    else if (entry.name.endsWith('.md')) {
      const rel = relative(root, p).replace(/\.md$/, '');
      allTwins.push(rel === 'index' ? '/' : `/${rel}`);
    }
  }
};
collect(root);
allTwins.sort();

if (!allTwins.length) die('zero twins found — a silent zero here would ship the 404s again');

/* ── append the corpus to /llms-full.txt (machine_eye item 2) ──────────────
 *
 * Item 2, verbatim: "CONFIRMED: index, not full-corpus — and the name overclaims. 2,018 B …
 * zero page prose is inlined … a '-full' name promises deep-ingestion content it doesn't
 * deliver." The endpoint owns the typed header; this owns the body, because only a post-build
 * step can see the finished twins. See llms-full.txt.ts for why the split is forced.
 */
const CORPUS_MARKER =
  '<!-- corpus pending: the page bodies are appended after the build; if you are reading this line, that step did not run -->';

const corpusFile = join(root, 'llms-full.txt');
if (!existsSync(corpusFile)) die('dist/llms-full.txt not found — the endpoint did not render');

const header = readFileSync(corpusFile, 'utf8');
if (!header.includes(CORPUS_MARKER)) {
  die(
    'dist/llms-full.txt has no corpus marker. Either the endpoint changed it or this tool\'s copy ' +
      'drifted from src/utils/twin.ts CORPUS_MARKER — a mismatch would leave the corpus permanently ' +
      'unappended while both halves looked correct on their own.',
  );
}

const corpusSections = [];
for (const p of allTwins) {
  const file = join(root, `${p === '/' ? '/index' : p}.md`);
  if (!existsSync(file)) die(`manifest lists ${p} but ${file} is absent`);
  // Drop each twin's own pointer block — the same three lines repeated 221 times, pointing at
  // the very document they would be sitting inside.
  const twinBody = readFileSync(file, 'utf8').replace(/^(?:>.*(?:\n|$))+\s*/, '').trim();
  if (!twinBody) die(`twin ${p} is empty after removing its pointer block`);
  corpusSections.push(`\n\n---\n\n## https://adna.network${p === '/' ? '/' : `${p}/`}\n\n${twinBody}`);
}

writeFileSync(corpusFile, header.replace(CORPUS_MARKER, corpusSections.join('').trim()));
const corpusBytes = statSync(corpusFile).size;
if (corpusBytes < 100_000) {
  // The defect being fixed was a 2 KB file wearing a "-full" name. Shipping a small one again
  // would be the same claim failing the same way, so refuse rather than warn.
  die(`corpus is only ${corpusBytes} B — that is the size class of the index this replaced, not a corpus`);
}

const manifestFile = join(cwd, 'src', 'data', 'twin_manifest.json');
// Paths only — no date, no counts narrated. A date here would churn the committed tree every
// day the build runs (the `build_vaults_data.mjs` lesson: "restore, don't commit").
const next = `${JSON.stringify({ twins: allTwins }, null, 2)}\n`;
const prev = existsSync(manifestFile) ? readFileSync(manifestFile, 'utf8') : '';
if (prev !== next) writeFileSync(manifestFile, next);

console.log(
  `emit_bespoke_twins: wrote ${written.length} tier-C twin(s); advertised ${advertised} via rel=alternate; ` +
    `corpus ${(corpusBytes / 1024).toFixed(0)} KB from ${corpusSections.length} page(s); ` +
    `manifest lists ${allTwins.length} total` +
    (skipped.length ? `; skipped ${skipped.length} (${skipped.slice(0, 6).join(', ')}${skipped.length > 6 ? ', …' : ''})` : ''),
);
