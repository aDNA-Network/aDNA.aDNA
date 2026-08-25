/**
 * gate-31 — internal link integrity (HAUSSMANN P2.3 O0).
 *
 * The defect this locks out: 11 unique link targets, rendered across 15 pages, pointed at a
 * pre-migration naming scheme that 404s — `adna_standard.md`, `migration_guide.md`,
 * `template_bare/`, `/patterns/content-as-code`. They were *relative* markdown targets, so
 * `[aDNA Standard](adna_standard.md)` on `/reference/reading-guide/` resolved to
 * `/reference/reading-guide/adna_standard.md`. Concentrated in `/reference/*` — the most-read
 * class on the site, and the one whose whole job is to be citable.
 *
 * WHY THIS IS PURPOSE-BUILT RATHER THAN `lychee`/`linkinator`.
 * The sweep's toolkit verdict was "adopt lychee". Deviating, with the reason on the record:
 * this site's URL correctness lives in *three* places, and a generic checker sees only one.
 *   - `dist/`                      — the built pages
 *   - `.vercel/output/config.json` — 42 redirect routes, injected at deploy time
 *   - neither is served by `astro preview` (P2.1 doctrine §3.2)
 * A generic crawl of `dist/` or the preview server reports the 13 mixed-case vault links as
 * broken; they are not — they 301 through the adapter. A generic crawl of production is a
 * post-deploy check, not a gate. So the gate reads the build snapshot AND the adapter config,
 * which is also what lets it tell a true 404 apart from a redirect hop.
 *
 * Everything is derived from the build (WebForge KW-8/FR-K) and every derivation that could
 * come out empty throws instead of reporting green — the silent-drop class that has bitten this
 * campaign three times now (P2.1's `card.vault_slug`, P2.1's own probe, P2.2's deploy probe).
 */
import { test, expect } from '@playwright/test';
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, posix } from 'node:path';

const SITE_ROOT = process.cwd();
const DIST = join(SITE_ROOT, 'dist');
const CFG = join(SITE_ROOT, '.vercel/output/config.json');

const ASSET = /\.(png|jpe?g|webp|svg|ico|gif|avif|css|js|mjs|json|xml|txt|woff2?|ttf|zip|tar|gz|pdf|sh)$/i;

type Page = { route: string; html: string; ids: Set<string>; hrefs: string[] };

/** Walk dist/ for every built HTML file; index by the URL it is served at. */
function loadPages(): Map<string, Page> {
  const files: string[] = [];
  (function walk(dir: string) {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith('.html')) files.push(p);
    }
  })(DIST);

  const pages = new Map<string, Page>();
  for (const f of files) {
    const rel = f.slice(DIST.length + 1);
    // foo/index.html -> /foo/ ;  install.html -> /install.html ;  index.html -> /
    const route = rel.endsWith('index.html')
      ? '/' + rel.slice(0, -'index.html'.length)
      : '/' + rel;
    const html = readFileSync(f, 'utf8');
    pages.set(route, {
      route,
      html,
      ids: new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])),
      hrefs: [...html.matchAll(/<a\b[^>]*\shref="([^"]*)"/gi)].map((m) => m[1]),
    });
  }
  return pages;
}

const pages = loadPages();

/** Redirect sources from the adapter output — the third place URL correctness lives. */
function redirectMatchers(): RegExp[] {
  if (!existsSync(CFG)) return [];
  const cfg = JSON.parse(readFileSync(CFG, 'utf8'));
  return (cfg.routes ?? [])
    .filter((r: any) => r.src && [301, 302, 307, 308].includes(r.status))
    .map((r: any) => new RegExp(r.src));
}

/** Resolve an href against the page it appears on. Returns null for things we do not check. */
function resolveInternal(href: string, from: string): { path: string; hash: string } | null {
  const h = href.trim();
  if (!h) return null;
  if (/^(https?:|mailto:|tel:|data:|javascript:|#)/i.test(h)) return null;
  const [beforeHash, hash = ''] = h.split('#');
  // Query strings are not part of the route. `/vaults/graph/?focus=network` is `/vaults/graph/`
  // — the graph page reads `focus` at runtime. Without this split the gate reports one 404 per
  // vault for a page that is built and works.
  const rawPath = beforeHash.split('?')[0];
  if (!rawPath) return null;
  const path = rawPath.startsWith('/')
    ? rawPath
    : posix.resolve(posix.dirname(from.endsWith('/') ? from + 'index' : from), rawPath);
  if (ASSET.test(path)) return null;
  return { path, hash };
}

/**
 * A link is satisfied if a page was built for it, or a static file was emitted at it.
 *
 * The file check is deliberately a filesystem probe rather than an extension allowlist: the
 * installer ships `/adna-install-mac.command` and `/adna-install-linux.sh` out of `public/`,
 * and the next static asset will have an extension nobody thought to add to a list. Asking the
 * build what it emitted cannot go stale; a list can.
 */
function isBuilt(path: string): boolean {
  if (pages.has(path) || pages.has(path.endsWith('/') ? path : path + '/')) return true;
  const asFile = join(DIST, path.replace(/^\//, ''));
  return path !== '/' && existsSync(asFile) && statSync(asFile).isFile();
}

test.describe('gate-31 internal link integrity', () => {
  test.beforeAll(() => {
    if (!existsSync(DIST)) throw new Error(`no build output at ${DIST} — run \`npx astro build\``);
    if (pages.size === 0) throw new Error('walked dist/ and found no HTML — refusing to report green');
    const totalHrefs = [...pages.values()].reduce((n, p) => n + p.hrefs.length, 0);
    if (totalHrefs === 0) throw new Error('extracted zero <a href> from the build — the extractor is broken');
  });

  test('no internal link 404s', () => {
    const redirects = redirectMatchers();
    const broken: string[] = [];
    const hops: string[] = [];

    for (const page of pages.values()) {
      for (const href of page.hrefs) {
        const r = resolveInternal(href, page.route);
        if (!r) continue;
        if (isBuilt(r.path)) continue;
        if (redirects.some((re) => re.test(r.path) || re.test(r.path.replace(/\/$/, '')))) {
          hops.push(`${r.path} (from ${page.route})`);
          continue;
        }
        broken.push(`${href}  →  ${r.path}   [on ${page.route}]`);
      }
    }

    // Redirect-only links are not 404s, but every click is a wasted hop and a non-canonical
    // emission. Owned by P2.4 (the 13 mixed-case vault links from subnetworks.json). Printed
    // so the gate is never quietly complicit in them growing.
    if (hops.length) {
      console.log(`gate-31: ${hops.length} internal link(s) resolve only via a redirect (P2.4's lane):`);
      for (const h of [...new Set(hops)].sort()) console.log(`   ${h}`);
    }

    expect(
      [...new Set(broken)].sort(),
      `internal links pointing at nothing built and nothing redirected:\n  ${[...new Set(broken)].sort().join('\n  ')}`,
    ).toEqual([]);
  });

  test('no relative link targets escape their page', () => {
    // The exact shape of the original defect: a markdown target with no leading slash resolves
    // against the current URL, so `](adna_standard.md)` becomes `/reference/reading-guide/adna_standard.md`.
    const offenders: string[] = [];
    for (const page of pages.values()) {
      for (const href of page.hrefs) {
        const h = href.trim();
        if (!h || /^(https?:|mailto:|tel:|data:|javascript:|#|\/)/i.test(h)) continue;
        if (ASSET.test(h.split('#')[0])) continue;
        offenders.push(`${h}   [on ${page.route}]`);
      }
    }
    expect(
      [...new Set(offenders)].sort(),
      `relative <a href> targets — these resolve against the page URL, not the site root:\n  ${[...new Set(offenders)].sort().join('\n  ')}`,
    ).toEqual([]);
  });

  test('every in-page anchor resolves to a real id', () => {
    const dangling: string[] = [];
    for (const page of pages.values()) {
      for (const href of page.hrefs) {
        const r = resolveInternal(href, page.route);
        if (!r || !r.hash) continue;
        const target =
          pages.get(r.path) ?? pages.get(r.path.endsWith('/') ? r.path : r.path + '/');
        if (!target) continue; // covered by the 404 test above
        if (!target.ids.has(r.hash)) {
          dangling.push(`${r.path}#${r.hash}   [linked from ${page.route}]`);
        }
      }
    }
    expect(
      [...new Set(dangling)].sort(),
      `anchor links whose target id does not exist on the destination page:\n  ${[...new Set(dangling)].sort().join('\n  ')}`,
    ).toEqual([]);
  });
});
