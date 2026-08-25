/**
 * Source layer for adna-mcp-server.
 *
 * Two rules govern everything here, both inherited from campaign_haussmann scars
 * (ADR-056 §5e):
 *
 *  1. Every fetch asserts it reached the thing it claims to have reached — `res.ok`
 *     AND a content-type match. `check_live_headers.mjs` once printed
 *     "live-headers OK — no drift" having read a login page, because it followed
 *     redirects and checked header *names* only. A twin fetch that quietly returns
 *     a 404 HTML body must fail, not hand an agent a 404 page as documentation.
 *
 *  2. Provenance passes through verbatim. adna.network serves a build-time
 *     snapshot; nothing here may let that reach a consumer wearing the appearance
 *     of live state.
 */

export const ORIGIN = process.env.ADNA_ORIGIN ?? 'https://adna.network';

/** Thrown when a fetch did not reach what it claimed to reach. */
export class SourceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'SourceError';
  }
}

/**
 * Fetch `path` and refuse to return the body unless the response is OK *and*
 * its content-type matches. This is the assertion, not a convenience wrapper.
 */
async function fetchAsserted(path: string, expectedType: string): Promise<string> {
  const url = `${ORIGIN}${path}`;
  let res: Response;
  try {
    res = await fetch(url, { headers: { 'user-agent': 'adna-mcp-server' } });
  } catch (cause) {
    throw new SourceError(`${url} — network failure: ${(cause as Error).message}`);
  }

  if (!res.ok) {
    throw new SourceError(`${url} — HTTP ${res.status} ${res.statusText}`);
  }

  const contentType = (res.headers.get('content-type') ?? '').toLowerCase();
  if (!contentType.startsWith(expectedType)) {
    throw new SourceError(
      `${url} — HTTP 200 but content-type is "${contentType || '(absent)'}", ` +
        `expected "${expectedType}". Refusing to return this body: a 200 carrying ` +
        `the wrong type is how a 404 page gets served as content.`,
    );
  }

  return await res.text();
}

/* ------------------------------------------------------------------ corpus */

export interface Page {
  /** Site path, no trailing slash. `/` for the root. */
  path: string;
  url: string;
  title: string;
  body: string;
}

let corpusCache: Page[] | null = null;

/** Matches the per-page headers `llms-full.txt` uses to delimit the corpus. */
const PAGE_HEADER = /^## (https:\/\/adna\.network(\/\S*?)\/?)\s*$/;

function parseCorpus(raw: string): Page[] {
  const lines = raw.split('\n');
  const starts: Array<{ line: number; url: string; path: string }> = [];

  lines.forEach((line, i) => {
    const m = PAGE_HEADER.exec(line);
    if (m) {
      const url = m[1] ?? '';
      const path = m[2] === undefined || m[2] === '' ? '/' : m[2];
      starts.push({ line: i, url, path });
    }
  });

  return starts.map((start, i) => {
    const next = starts[i + 1];
    const end = next ? next.line : lines.length;
    const bodyLines = lines.slice(start.line + 1, end);

    // Drop the `---` rule that separates pages, and surrounding blank lines.
    while (bodyLines.length > 0 && (bodyLines[bodyLines.length - 1] ?? '').trim() === '') bodyLines.pop();
    if ((bodyLines[bodyLines.length - 1] ?? '').trim() === '---') bodyLines.pop();
    while (bodyLines.length > 0 && (bodyLines[bodyLines.length - 1] ?? '').trim() === '') bodyLines.pop();
    while (bodyLines.length > 0 && (bodyLines[0] ?? '').trim() === '') bodyLines.shift();

    const body = bodyLines.join('\n');
    const heading = bodyLines.find((l) => l.startsWith('# '));
    const title = heading ? heading.slice(2).trim() : start.path;

    return { path: start.path, url: start.url, title, body };
  });
}

/** The full corpus, fetched once per process. ~950 KB on first call. */
export async function getCorpus(): Promise<Page[]> {
  if (corpusCache) return corpusCache;
  const raw = await fetchAsserted('/llms-full.txt', 'text/plain');
  const pages = parseCorpus(raw);
  if (pages.length === 0) {
    throw new SourceError(
      '/llms-full.txt — fetched and type-checked, but zero page headers parsed. ' +
        'The corpus format changed; refusing to report an empty corpus as a search result.',
    );
  }
  corpusCache = pages;
  return pages;
}

/* ---------------------------------------------------------------- registry */

export interface RegistryVault {
  vault: string;
  vault_slug: string;
  display_name: string;
  class: string | null;
  status: string | null;
  persona: string | null;
  tier: string | null;
  tier_label: string | null;
  last_synced: string | null;
  url: string;
  markdown_url: string;
  [key: string]: unknown;
}

export interface RegistryEdge {
  source: string;
  target: string;
  type: string;
}

export interface Registry {
  schema_version: string;
  registry_schema_version: string;
  generated_at: string;
  built_at: string;
  snapshot_note: string;
  caveat: string;
  vault_count: number;
  edge_count: number;
  vaults: RegistryVault[];
  edges: RegistryEdge[];
  [key: string]: unknown;
}

let registryCache: Registry | null = null;

/**
 * The registry, from the **versioned** endpoint. `/vaults.json` serves identical
 * bytes today, but ADR-056 clause 7's shape promise attaches to the versioned
 * twin — a machine consumer should hold the URL that is under contract.
 */
export async function getRegistry(): Promise<Registry> {
  if (registryCache) return registryCache;
  const raw = await fetchAsserted('/api/registry.v1.json', 'application/json');
  let parsed: Registry;
  try {
    parsed = JSON.parse(raw) as Registry;
  } catch (cause) {
    throw new SourceError(`/api/registry.v1.json — not parseable JSON: ${(cause as Error).message}`);
  }
  if (!Array.isArray(parsed.vaults)) {
    throw new SourceError('/api/registry.v1.json — parsed, but has no `vaults` array. Shape changed.');
  }
  registryCache = parsed;
  return parsed;
}

/* -------------------------------------------------------------------- twins */

/** `/learn/x/`, `/learn/x`, `/learn/x.md` and `learn/x` all normalise alike. */
export function normalisePath(input: string): string {
  let p = input.trim();
  if (p.startsWith(ORIGIN)) p = p.slice(ORIGIN.length);
  if (!p.startsWith('/')) p = `/${p}`;
  if (p.endsWith('.md')) p = p.slice(0, -3);
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
  return p === '' ? '/' : p;
}

/** Fetch the P3.1 markdown twin for a site path. */
export async function fetchTwin(path: string): Promise<{ path: string; url: string; markdown: string }> {
  const p = normalisePath(path);
  const twinPath = p === '/' ? '/index.md' : `${p}.md`;
  const markdown = await fetchAsserted(twinPath, 'text/markdown');
  return { path: p, url: `${ORIGIN}${twinPath}`, markdown };
}

/* --------------------------------------------------------------- provenance */

/**
 * The provenance block, passed through verbatim from the registry envelope.
 * Every tool that returns site-derived content carries this.
 */
export async function provenanceBlock(): Promise<string> {
  const r = await getRegistry();
  return [
    '--- provenance (verbatim from the source, not summarised) ---',
    `registry generated_at: ${r.generated_at}`,
    `site built_at:         ${r.built_at}`,
    `snapshot_note:         ${r.snapshot_note}`,
    `caveat:                ${r.caveat}`,
  ].join('\n');
}
