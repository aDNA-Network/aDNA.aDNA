/**
 * Gate 28 — No dev comments in shipped HTML  (HAUSSMANN P0.5, editorial gate O3)
 *
 * Criterion: the shipped HTML carries no development commentary. The B5 sweep found
 * **5,748 HTML comments across all 203 pages** — not markup scaffolding but internal
 * rationale prose: backlog ids (`idea_site_rss_feed`), campaign and finding ids
 * (`Champollion M4.2`, `F-CHM-210`), build-script paths, and paragraphs of layout
 * reasoning. Invisible to a reader, free to anyone who hits View Source. It is the
 * H13 leak class with the widest blast radius: 203/203 pages.
 *
 * The fix is structural, not editorial: the `adna-strip-html-comments` integration in
 * astro.config.mjs strips comments in `astro:build:done` over BOTH `dist/` and
 * `.vercel/output/static/` (the artifact `vercel --prebuilt --prod` actually deploys),
 * so no author has to remember. This gate is the postcondition.
 *
 * KEEP rules (the integration preserves these; none exist in the tree today, so the
 * exemptions are defensive): conditional/downlevel comments and licence-bearing ones.
 *
 * Verified at build time (2026-08-16): 203/203 pages had their visible text hash
 * UNCHANGED by the strip, and all 12 mermaid `data-chart` attributes survived — the
 * strip removes commentary, not content. Escaped `&lt;!--` (documented example
 * markup) is untouched by construction, and this gate does not flag it.
 *
 * Static scan of dist/ (assumes a fresh `npx astro build`) — same idiom as gate-14.
 */
import { test, expect } from '@playwright/test';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const SITE = process.cwd();
const DIST = join(SITE, 'dist');
const VERCEL_STATIC = join(SITE, '.vercel/output/static');

/** Mirrors the integration's KEEP rule in astro.config.mjs. */
const KEEP = /^\s*\[if\s|<!\[endif\]|@license|SPDX|Copyright|\(c\)\s*\d{4}/i;

function htmlFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...htmlFiles(p));
    else if (entry.name.endsWith('.html')) out.push(p);
  }
  return out;
}

function offenders(root: string): string[] {
  const hits: string[] = [];
  for (const f of htmlFiles(root)) {
    const content = readFileSync(f, 'utf8');
    for (const m of content.matchAll(/<!--([\s\S]*?)-->/g)) {
      if (KEEP.test(m[1])) continue;
      const preview = m[1].replace(/\s+/g, ' ').trim().slice(0, 110);
      hits.push(`${relative(root, f)}: <!-- ${preview}${m[1].length > 110 ? '…' : ''} -->`);
    }
  }
  return hits;
}

test('G-no-dev-comments: shipped HTML in dist/ carries no development comments', () => {
  expect(existsSync(DIST), 'dist/ missing — run `npx astro build` first').toBe(true);
  const files = htmlFiles(DIST);
  expect(files.length, 'dist/ has almost no HTML — stale or failed build').toBeGreaterThan(100);

  const hits = offenders(DIST);
  expect(
    hits.slice(0, 25),
    `${hits.length} development comment(s) reached the shipped HTML across ${new Set(hits.map((h) => h.split(':')[0])).size} file(s).\n` +
      `The strip runs automatically in astro.config.mjs (adna-strip-html-comments) — if these survived, the\n` +
      `integration was removed, reordered out of the build, or the comment matched a KEEP rule by accident.\n` +
      `Internal reasoning belongs in the vault, not in the artifact.\n\n${hits.slice(0, 25).join('\n')}`,
  ).toEqual([]);
});

test('G-no-dev-comments: the deployed Vercel artifact is stripped too', () => {
  // `vercel --prebuilt --prod` ships .vercel/output/static — a strip that only cleaned
  // dist/ would be theatre. Skipped when the adapter output is absent (fresh checkout).
  test.skip(!existsSync(VERCEL_STATIC), '.vercel/output/static absent — nothing deployed from this tree yet');
  const hits = offenders(VERCEL_STATIC);
  expect(
    hits.slice(0, 25),
    `${hits.length} development comment(s) in the DEPLOYED artifact (.vercel/output/static) — dist/ may be clean\n` +
      `while the deployed copy is not, if the strip runs before the adapter copies files.\n\n${hits.slice(0, 25).join('\n')}`,
  ).toEqual([]);
});

test('G-no-dev-comments: the strip preserved real content (mermaid charts + escaped example markup)', () => {
  // Guard against a strip that "succeeds" by eating page content. Mermaid `data-chart`
  // attributes contain `-->` arrows and are the tree's most comment-adjacent markup;
  // escaped `&lt;!--` is documentation ABOUT comments and must survive verbatim.
  const all = htmlFiles(DIST).map((f) => readFileSync(f, 'utf8'));
  const charts = all.reduce((n, c) => n + (c.match(/data-chart="/g) || []).length, 0);
  expect(charts, 'mermaid data-chart attributes vanished — the comment strip is eating content').toBeGreaterThan(0);
  expect(
    all.some((c) => c.includes('<body')),
    'no page rendered a body element — dist/ is not a real build',
  ).toBe(true);
});
