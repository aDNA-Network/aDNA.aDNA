import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

/**
 * HAUSSMANN P0.5 — dev-comment strip (editorial gate, O3).
 *
 * The B5 sweep found every shipped page carrying 2–50 HTML comments of *internal
 * rationale prose* — backlog ids (`idea_site_rss_feed`), campaign/finding ids
 * (`Champollion M4.2`, `F-CHM-210`), and build-script paths. These are invisible to
 * a reader and free to any "View Source" skeptic: the H13 leak class with the widest
 * blast radius (203/203 pages). Public HTML is a public surface; internal reasoning
 * belongs in the vault, not the artifact.
 *
 * KEEP rules (checked against the real tree 2026-08-16: 0 conditional, 0 license-
 * bearing — the exemptions are defensive, not currently exercised):
 *   - conditional / downlevel-revealed comments (`<!--[if …]>`, `<![endif]-->`)
 *   - license-bearing comments (`@license`, `SPDX`, `Copyright`, `(c) YYYY`)
 *
 * SAFETY: measured on the real tree — 0 comments inside <script>/<style>/<pre>, and
 * every `<!--` has a matching `-->`, so the non-greedy strip cannot run away. Stray
 * `-->` in the tree are mermaid arrows inside `data-chart="…"` attributes; they are
 * never preceded by an unclosed `<!--`. gate-28 asserts the postcondition; the O4
 * red-test proves it can fail. Escaped `&lt;!--` (documented example markup) is
 * untouched by construction.
 *
 * Runs over BOTH the Astro output dir and `.vercel/output/static` (the adapter copy
 * that `vercel --prebuilt --prod` actually deploys), so the strip cannot be defeated
 * by hook ordering.
 */
function stripHtmlComments() {
  const KEEP = /^\s*\[if\s|<!\[endif\]|@license|SPDX|Copyright|\(c\)\s*\d{4}/i;
  const walk = (dir) => {
    const out = [];
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, entry.name);
      if (entry.isDirectory()) out.push(...walk(p));
      else if (entry.name.endsWith('.html')) out.push(p);
    }
    return out;
  };
  return {
    name: 'adna-strip-html-comments',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const roots = [];
        try {
          if (dir) roots.push(new URL('.', dir).pathname);
        } catch {
          /* non-URL dir — fall through to the literal roots below */
        }
        for (const r of ['dist', '.vercel/output/static']) {
          const abs = join(process.cwd(), r);
          if (existsSync(abs) && !roots.includes(abs) && !roots.includes(`${abs}/`)) roots.push(abs);
        }
        let files = 0;
        let stripped = 0;
        let kept = 0;
        for (const root of roots) {
          if (!existsSync(root)) continue;
          for (const f of walk(root)) {
            const src = readFileSync(f, 'utf8');
            if (!src.includes('<!--')) continue;
            const next = src.replace(/<!--([\s\S]*?)-->/g, (whole, body) => {
              if (KEEP.test(body)) {
                kept += 1;
                return whole;
              }
              stripped += 1;
              return '';
            });
            if (next !== src) {
              writeFileSync(f, next);
              files += 1;
            }
          }
        }
        logger.info(
          `dev-comment strip: removed ${stripped} comment(s) from ${files} file(s)` +
            (kept ? `; kept ${kept} licence/conditional comment(s)` : ''),
        );
      },
    },
  };
}

export default defineConfig({
  site: process.env.SITE_URL || 'https://adna.network',
  output: 'static',
  adapter: vercel(),
  // Deliberate rename redirect (Champollion M4.4): the pattern page moved to free the
  // concept's natural slug. Named here per the F-CHM-207 no-silent-redirects lesson.
  redirects: {
    '/patterns/dual-audience': '/patterns/dual-audience-writing',
    // Refit M3 / DP4 (2026-07-23): /org-context-graphs was a true orphan (0 inbound links,
    // "front end waiting to be built") — retired; its content lives on across the /vaults registry.
    '/org-context-graphs': '/vaults',
  },
  integrations: [mdx(), sitemap(), stripHtmlComments()],
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
