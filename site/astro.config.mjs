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

    // --- HAUSSMANN P2.1 / ADR-051: the two redirects above were HALF-BROKEN in production ---
    // Probed live 2026-08-18: `/org-context-graphs` and `/patterns/dual-audience` each 301 as
    // intended, but `/org-context-graphs/` and `/patterns/dual-audience/` both returned **404**.
    // Astro emits `^/org-context-graphs$` — an exact match the trailing-slash form misses, and
    // trailing-slash is the shape every canonical URL on this site uses. The F-CHM-207 "no silent
    // redirects" fix laid a redirect in the one shape its own site does not emit. Astro's config
    // cannot express the slash form (it strips it), so the repair is inject_redirects.mjs.

    // --- HAUSSMANN P2.1 / ADR-051: vault-slug canonicalization (24 legacy mixed-case slugs) ---
    // Sources are listed WITHOUT the trailing slash because Astro normalises the key — a
    // '/path/' entry collapses to the identical '^/path$' route, so writing both just emits a
    // duplicate. The trailing-slash form is covered instead by scripts/inject_redirects.mjs,
    // which widens every emitted redirect's `$` to `/?$` at deploy time. Generated from
    // vaults.json, not typed.
    '/vaults/Astro.aDNA': '/vaults/astro/',
    '/vaults/CakeHealth.aDNA': '/vaults/cakehealth/',
    '/vaults/ComfyUI.aDNA': '/vaults/comfyui/',
    '/vaults/ContextCommons.aDNA': '/vaults/contextcommons/',
    '/vaults/Harness.aDNA': '/vaults/harness/',
    '/vaults/Home.aDNA': '/vaults/home/',
    '/vaults/III.aDNA': '/vaults/iii/',
    '/vaults/LAVentureGraph.aDNA': '/vaults/laventuregraph/',
    '/vaults/Molecules.aDNA': '/vaults/molecules/',
    '/vaults/Network.aDNA': '/vaults/network/',
    '/vaults/Obsidian.aDNA': '/vaults/obsidian/',
    '/vaults/Operations.aDNA': '/vaults/operations/',
    '/vaults/Oration.aDNA': '/vaults/oration/',
    '/vaults/RareArchive.aDNA': '/vaults/rarearchive/',
    '/vaults/RemoteControl.aDNA': '/vaults/remotecontrol/',
    '/vaults/Spacemacs.aDNA': '/vaults/spacemacs/',
    '/vaults/SuperLeague.aDNA': '/vaults/superleague/',
    '/vaults/TappProtocol.aDNA': '/vaults/tappprotocol/',
    '/vaults/VAAS.aDNA': '/vaults/vaas/',
    '/vaults/Videos.aDNA': '/vaults/videos/',
    '/vaults/WilhelmAI.aDNA': '/vaults/wilhelmai/',
    '/vaults/aDNA.aDNA': '/vaults/adna/',
    '/vaults/wga.aDNA': '/vaults/wga/',
    '/vaults/zeta.aDNA': '/vaults/zeta/',

    // --- HAUSSMANN P2.1: B3 stale `.md` reference targets that HAVE a real destination ---
    // The /reference/* pages were ported from a standalone `.md` document set and kept its
    // relative cross-links, so `[aDNA Standard](adna_standard.md)` resolves to
    // `/reference/adna_standard.md` and 404s (29 broken link instances, 11 unique targets).
    // Redirected here because these are plausibly copied externally and a 301 is free.
    // The remaining 6 targets — projects_folder_pattern.md, adna_bridge_patterns.md,
    // template_bare/, /patterns/content-as-code, how/skills/AGENTS.md, /README.md — have NO
    // destination on this site, so no honest redirect exists for them. Inventing one would
    // point a reader at a page that does not answer their link. They are content fixes, and
    // they belong to P2.3 (docs freshness: the 29 broken links + the CI link gate).
    '/reference/adna_standard.md': '/reference/specification/',
    '/reference/01_adna_standard.md': '/reference/specification/',
    '/reference/adna_design.md': '/reference/design-rationale/',
    '/reference/migration_guide.md': '/reference/migration-guide/',
    '/reference/agent_first_guide.md': '/reference/agent-first-guide/',

    // --- HAUSSMANN P2.2 / ADR-049 Option A: IA consolidation (11 redirects, ⛩ DP5) ---
    // The same 6 audiences were served by up to 3 URL branches each — 16 pages where 7
    // belong, with 4 byte-identical <title> pairs. /use-cases/ wins as the single audience
    // surface: it is the richer prose and the larger set, so this is a redirect, not a
    // rewrite. Sources are listed WITHOUT the trailing slash (Astro normalises the key —
    // see the note above); inject_redirects.mjs widens each to /?$ at deploy.
    //
    // Nothing was dropped on the way. Each retiring page's distinct content folded into its
    // destination FIRST: the four landings' curated reading paths, and all five adopter docs'
    // "Typical Ontology Extensions" tables — 13 entity-type rows the /use-cases/ twins did
    // not carry. ADR-049 called this leg "redirect-only, zero content rewritten"; the guard
    // diff at O2 found that was wrong on the facts, and the fold is the correction.
    '/adopters': '/use-cases/',
    '/adopters/adopter-researcher': '/use-cases/research-lab/',
    '/adopters/adopter-educator': '/use-cases/educator/',
    '/adopters/adopter-enterprise-team': '/use-cases/enterprise-team/',
    '/adopters/adopter-startup': '/use-cases/startup/',
    '/adopters/adopter-solo-developer': '/use-cases/solo-developer/',
    '/researchers': '/use-cases/research-lab/',
    '/educators': '/use-cases/educator/',
    '/enterprise': '/use-cases/enterprise-team/',
    '/startup-first-hour': '/use-cases/startup/',
    // ADR-048's owed rename (ratified at DP2, independent of DP5): this is a topic page about
    // provenance and audit, not a compliance certification claim. The page itself moved.
    '/compliance': '/provenance-audit/',
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
