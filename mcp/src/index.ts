#!/usr/bin/env node
/**
 * adna-mcp-server — an MCP server over the aDNA standard's own documentation
 * corpus and vault registry at adna.network.
 *
 * Design of record: ADR-056 §mcp (clause 5), authored at HAUSSMANN P3.3 O0.
 *
 * Two standing constraints on this file:
 *   - No tool description may assert a capability this server does not have.
 *     There is no hosted endpoint, no freshness the fetch does not guarantee,
 *     and no coverage the published corpus does not hold.
 *   - Counts are derived from the payload at call time, never typed into a
 *     description (WebForge KW-14).
 */

import { createRequire } from 'node:module';
import { McpServer } from '@modelcontextprotocol/server';
import { StdioServerTransport } from '@modelcontextprotocol/server/stdio';
import * as z from 'zod';

import {
  ORIGIN,
  SourceError,
  fetchTwin,
  getCorpus,
  getRegistry,
  normalisePath,
  provenanceBlock,
  type Page,
} from './sources.js';

const require = createRequire(import.meta.url);
const pkg = require('../package.json') as { name: string; version: string };

type ToolResult = {
  content: Array<{ type: 'text'; text: string }>;
  isError?: boolean;
};

const ok = (text: string): ToolResult => ({ content: [{ type: 'text', text }] });

/**
 * Surface the failure rather than an empty success. A SourceError means an
 * assertion caught something — the agent should see which one.
 */
const fail = (err: unknown): ToolResult => ({
  content: [
    {
      type: 'text',
      text:
        err instanceof SourceError
          ? `Source assertion failed — no content returned.\n${err.message}`
          : `Unexpected error: ${(err as Error)?.message ?? String(err)}`,
    },
  ],
  isError: true,
});

/* ------------------------------------------------------------------ scoring */

function scorePage(page: Page, terms: string[]): number {
  const haystack = page.body.toLowerCase();
  const title = page.title.toLowerCase();
  let score = 0;
  for (const term of terms) {
    const inBody = haystack.split(term).length - 1;
    const inTitle = title.split(term).length - 1;
    if (inBody === 0 && inTitle === 0) return 0; // require every term
    score += inBody + inTitle * 10;
  }
  return score;
}

function snippetFor(page: Page, terms: string[]): string {
  const body = page.body;
  const lower = body.toLowerCase();
  let at = -1;
  for (const term of terms) {
    const i = lower.indexOf(term);
    if (i !== -1 && (at === -1 || i < at)) at = i;
  }
  if (at === -1) at = 0;
  const start = Math.max(0, at - 120);
  const end = Math.min(body.length, at + 280);
  return `${start > 0 ? '…' : ''}${body.slice(start, end).replace(/\s+/g, ' ').trim()}${end < body.length ? '…' : ''}`;
}

/* ------------------------------------------------------------------- server */

const server = new McpServer({ name: pkg.name, version: pkg.version });

server.registerTool(
  'search_docs',
  {
    title: 'Search the aDNA documentation corpus',
    description:
      'Full-text search across the published adna.network corpus (every page the site emits as markdown, ' +
      'fetched from /llms-full.txt). Returns matching page paths with a title and a snippet; use fetch_page ' +
      'to read a full page. Results reflect the site\'s most recent build, not live vault state — the ' +
      'provenance block on every response gives the build date.',
    inputSchema: z.object({
      query: z.string().min(1).describe('Search terms. All terms must appear in a page for it to match.'),
      limit: z.number().int().min(1).max(50).default(10).describe('Maximum results to return.'),
    }),
  },
  async ({ query, limit }): Promise<ToolResult> => {
    try {
      const pages = await getCorpus();
      const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
      const hits = pages
        .map((page) => ({ page, score: scorePage(page, terms) }))
        .filter((h) => h.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit);

      if (hits.length === 0) {
        return ok(
          `No pages matched ${JSON.stringify(query)} (searched ${pages.length} pages).\n\n${await provenanceBlock()}`,
        );
      }

      const body = hits
        .map((h) => `## ${h.page.title}\npath: ${h.page.path}\nurl:  ${h.page.url}\n\n${snippetFor(h.page, terms)}`)
        .join('\n\n---\n\n');

      return ok(
        `${hits.length} of ${pages.length} pages matched ${JSON.stringify(query)}.\n\n${body}\n\n${await provenanceBlock()}`,
      );
    } catch (err) {
      return fail(err);
    }
  },
);

server.registerTool(
  'fetch_page',
  {
    title: 'Fetch one documentation page as markdown',
    description:
      'Fetch a single adna.network page as markdown, via its .md twin. Accepts a site path such as ' +
      '"/learn/what-is-adna", with or without a leading slash, trailing slash, or .md suffix. Returns the ' +
      'page verbatim. If the path has no twin the call fails rather than returning a 404 page as content.',
    inputSchema: z.object({
      path: z.string().min(1).describe('Site path, e.g. "/reference/specification" or "glossary".'),
    }),
  },
  async ({ path }): Promise<ToolResult> => {
    try {
      const twin = await fetchTwin(path);
      return ok(`# ${twin.path}\nsource: ${twin.url}\n\n${twin.markdown}`);
    } catch (err) {
      return fail(err);
    }
  },
);

server.registerTool(
  'query_registry',
  {
    title: 'Query the aDNA vault registry',
    description:
      'Query the vault registry served at /api/registry.v1.json — the versioned endpoint whose shape is under ' +
      'a stated deprecation contract. Filter vaults by slug, class, status or tier, and optionally include the ' +
      'declared relationships between them. Every row is self-declared by its vault and reflects a single ' +
      'operator-run node; the registry is a build-time snapshot, and each row carries its own last_synced date.',
    inputSchema: z.object({
      vault: z.string().optional().describe('Match one vault by slug or name, e.g. "operations".'),
      vault_class: z.string().optional().describe('Filter by class, e.g. "platform", "coordination".'),
      status: z.string().optional().describe('Filter by status, e.g. "active", "genesis".'),
      tier: z.string().optional().describe('Filter by tier, e.g. "in_use".'),
      include_edges: z.boolean().default(false).describe('Also return declared relationships between vaults.'),
      limit: z.number().int().min(1).max(200).default(25).describe('Maximum vaults to return.'),
    }),
  },
  async ({ vault, vault_class, status, tier, include_edges, limit }): Promise<ToolResult> => {
    try {
      const registry = await getRegistry();
      const needle = vault?.toLowerCase();

      const matched = registry.vaults.filter((v) => {
        if (needle && !(v.vault_slug.toLowerCase() === needle || v.vault.toLowerCase().includes(needle))) return false;
        if (vault_class && v.class !== vault_class) return false;
        if (status && v.status !== status) return false;
        if (tier && v.tier !== tier) return false;
        return true;
      });

      const shown = matched.slice(0, limit);
      const lines = shown.map((v) =>
        [
          `### ${v.display_name} (${v.vault_slug})`,
          `vault:        ${v.vault}`,
          `class:        ${v.class ?? '(null — not collected)'}`,
          `status:       ${v.status ?? '(null — not collected)'}`,
          `tier:         ${v.tier_label ?? v.tier ?? '(null — not collected)'}`,
          `persona:      ${v.persona ?? '(null — not collected)'}`,
          `last_synced:  ${v.last_synced ?? '(null — not collected)'}`,
          `page:         ${v.url}`,
          `markdown:     ${v.markdown_url}`,
        ].join('\n'),
      );

      let out =
        `${matched.length} of ${registry.vaults.length} vaults matched` +
        (shown.length < matched.length ? ` (showing ${shown.length})` : '') +
        `.\n\n${lines.join('\n\n')}`;

      if (include_edges) {
        const slugs = new Set(shown.map((v) => v.vault_slug));
        const edges =
          matched.length === registry.vaults.length
            ? registry.edges
            : registry.edges.filter((e) => slugs.has(e.source) || slugs.has(e.target));
        out +=
          `\n\n## Relationships (${edges.length} of ${registry.edges.length})\n\n` +
          (edges.length === 0
            ? '(none touching the matched vaults)'
            : edges.map((e) => `${e.source} --${e.type}--> ${e.target}`).join('\n'));
      }

      return ok(`${out}\n\n${await provenanceBlock()}`);
    } catch (err) {
      return fail(err);
    }
  },
);

server.registerTool(
  'lookup_spec_glossary',
  {
    title: 'Look up an aDNA term or specification section',
    description:
      'Look up a canonical term in the aDNA glossary, or a section of the specification and reference material. ' +
      'Tries an exact slug match against /glossary/* and /reference/* first, then falls back to ranking those ' +
      'pages by relevance. Returns the full page when one clearly matches, otherwise a list of candidates.',
    inputSchema: z.object({
      term: z.string().min(1).describe('The term or section to look up, e.g. "lattice", "conformance levels".'),
    }),
  },
  async ({ term }): Promise<ToolResult> => {
    try {
      const pages = await getCorpus();
      const scoped = pages.filter((p) => p.path.startsWith('/glossary') || p.path.startsWith('/reference'));

      const slug = term.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      const exact = scoped.find((p) => {
        const last = p.path.split('/').filter(Boolean).pop() ?? '';
        return last === slug;
      });

      if (exact) {
        const twin = await fetchTwin(exact.path);
        return ok(
          `Exact match in ${exact.path.startsWith('/glossary') ? 'the glossary' : 'the reference'}: ${exact.title}\n` +
            `source: ${twin.url}\n\n${twin.markdown}\n\n${await provenanceBlock()}`,
        );
      }

      const terms = term.toLowerCase().split(/\s+/).filter(Boolean);
      const hits = scoped
        .map((page) => ({ page, score: scorePage(page, terms) }))
        .filter((h) => h.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);

      if (hits.length === 0) {
        return ok(
          `No glossary or reference page matched ${JSON.stringify(term)} ` +
            `(searched ${scoped.length} of ${pages.length} pages).\n\n${await provenanceBlock()}`,
        );
      }

      const body = hits
        .map((h) => `## ${h.page.title}\npath: ${h.page.path}\nurl:  ${h.page.url}\n\n${snippetFor(h.page, terms)}`)
        .join('\n\n---\n\n');

      return ok(
        `No exact slug match for ${JSON.stringify(term)}; ${hits.length} candidate(s) from ` +
          `${scoped.length} glossary and reference pages. Use fetch_page to read one in full.\n\n${body}\n\n` +
          `${await provenanceBlock()}`,
      );
    } catch (err) {
      return fail(err);
    }
  },
);

/* -------------------------------------------------------------------- start */

async function main(): Promise<void> {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  // stdout is the protocol channel; anything human-facing goes to stderr.
  process.stderr.write(`${pkg.name} ${pkg.version} — serving ${ORIGIN} over stdio\n`);
}

main().catch((err: unknown) => {
  process.stderr.write(`fatal: ${(err as Error)?.stack ?? String(err)}\n`);
  process.exit(1);
});

export { normalisePath };
