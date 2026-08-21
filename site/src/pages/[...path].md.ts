import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { renderTwin, mdxBodyToMarkdown } from '../utils/twin';
import { vaults } from '../data/vaults';
import { classLabel, statusLabel, personaLabel, tierOf, tierLabel } from '../utils/vaultLabels';
import { SITE_ORIGIN } from '../data/canonical';

/**
 * HAUSSMANN P3.1 / ADR-056 clause 1 — markdown twins, tiers A and B.
 *
 * `[...path].md.ts` emits `/{path}.md` for every content and registry URL. The extension-in-
 * filename mechanism is the one this site already uses for `rss.xml.ts` and
 * `community/proposals.json.ts`; the rest param just makes it dynamic.
 *
 * TIER A — the 6 content collections, rendered from `entry.body`. The twin IS the source the
 * HTML renders from, so there is no drift channel to guard.
 *
 * TIER B — the 74 vault pages plus the registry index, rendered from the same `vaults.json`
 * projection the page component reads, through the SAME label helpers. Using the helpers is not
 * stylistic: gate-27 lints raw enums (`org_graph`, `tbd_at_p0`) and persona placeholders off
 * public surfaces, and a twin is a public surface. Importing from `../data/vaults` rather than
 * the raw JSON is likewise load-bearing — gate-30 asserts no site source imports `vaults.json`
 * directly, because slug canonicalization happens at that boundary (ADR-051).
 *
 * TIER C (bespoke .astro prose pages) cannot be rendered here — it has no markdown source — and
 * is emitted post-build by `scripts/emit_bespoke_twins.mjs`.
 *
 * The route map below is DERIVED from the same collection filters the page routes use. Where a
 * page route filters `section === 'glossary' && !data.draft`, so does this. If the two ever
 * disagree, a twin points at a page that does not exist — which is why gate-17 asserts twin
 * paths against the built sitemap rather than against this file's own beliefs.
 *
 * Honor pt19: `vaults.json` is read, never written, never regenerated.
 */

type TwinSpec = { path: string; title: string; body: string };

/** Tier A: (collection, filter, route prefix, slug fn) — mirrors each page route's getStaticPaths. */
const COLLECTION_ROUTES: {
  collection: 'docs' | 'guides' | 'reference' | 'spec' | 'proposals';
  section?: string;
  prefix: string;
  slugOf?: (entry: any) => string;
}[] = [
  { collection: 'docs', section: 'concepts', prefix: '/learn/concepts' },
  { collection: 'docs', section: 'comparisons', prefix: '/learn/comparisons' },
  { collection: 'docs', section: 'glossary', prefix: '/glossary' },
  { collection: 'docs', section: 'patterns', prefix: '/patterns' },
  { collection: 'docs', section: 'use-cases', prefix: '/use-cases' },
  { collection: 'docs', section: 'community', prefix: '/community' },
  { collection: 'docs', section: 'publishing', prefix: '/how/publishing' },
  { collection: 'docs', section: 'workshops', prefix: '/how/workshops' },
  { collection: 'docs', section: 'lattice-examples', prefix: '/how/lattice-examples' },
  { collection: 'guides', prefix: '/learn/tutorials' },
  { collection: 'reference', prefix: '/reference' },
  { collection: 'spec', prefix: '/reference/specification', slugOf: (e) => e.data.slug_id },
  { collection: 'proposals', prefix: '/community/proposals', slugOf: (e) => `aep-${e.data.number}` },
];

async function tierA(): Promise<TwinSpec[]> {
  const out: TwinSpec[] = [];
  for (const route of COLLECTION_ROUTES) {
    const entries = await getCollection(route.collection as any, ({ data }: any) => {
      if (route.section && data.section !== route.section) return false;
      return !data.draft;
    });
    for (const entry of entries as any[]) {
      const slug = route.slugOf ? route.slugOf(entry) : entry.id;
      const path = `${route.prefix}/${slug}`;
      out.push({
        path,
        title: entry.data.title ?? slug,
        body: mdxBodyToMarkdown(entry.body ?? '', `${route.collection}/${entry.id}`),
      });
    }
  }
  return out;
}

/**
 * Tier B — the registry, rendered through the page's own label treatment.
 *
 * Every field here is read from the projection; nothing is narrated. KW-14's failure mode is
 * already live on this site (the graph page's hero says 74 while its own SVG renders 68), and a
 * twin that retyped a count would reproduce it in the machine layer where it is harder to spot.
 */
function vaultTwin(v: any): TwinSpec {
  const personaPub = personaLabel(v.persona);
  const classPub = classLabel(v.class);
  const tierPub = tierLabel(tierOf(v.status));

  const rows: string[] = [
    `| Class | ${classPub} |`,
    `| Stage | ${tierPub} (self-declared) |`,
  ];
  if (personaPub) rows.push(`| Persona | ${personaPub} |`);
  if (v.current_phase) rows.push(`| Phase | ${v.current_phase} |`);
  if (v.canonical_governance) rows.push(`| Governance | \`${v.canonical_governance}\` |`);
  // Shown as a date, never as "recently updated" (ADR-052 §tiers.3): 18 of the 24 rows carrying
  // this field share one date, which records a bulk registry sync, not vault activity.
  if (v.last_synced) rows.push(`| Last synced | ${v.last_synced} (registry sync, not vault activity) |`);

  const sections: string[] = [
    v.tagline ? `*${v.tagline}*\n` : '',
    v.note ? `${v.note}\n` : '',
    '| Field | Value |',
    '| --- | --- |',
    ...rows,
  ];

  if (v.headline_mission) {
    sections.push(
      '',
      '## Current focus',
      '',
      v.headline_mission + (v.headline_mission_state ? ` — *${v.headline_mission_state}*` : ''),
    );
  }
  if (v.headline_adrs?.length) {
    sections.push('', '## Headline ADRs', '', ...v.headline_adrs.map((a: string) => `- \`${a}\``));
  }
  if (v.recent_closed?.length) {
    sections.push('', '## Recent missions', '', ...v.recent_closed.map((m: string) => `- ${m}`));
  }

  return {
    // `vaults` is the canonicalizing boundary — every `vault_slug` it yields is already
    // canonical (ADR-051), so re-canonicalizing here would be a second place the law lives.
    path: `/vaults/${v.vault_slug}`,
    title: `${v.display_name} — ${personaPub || classPub}`,
    body: sections.filter((s) => s !== '').join('\n'),
  };
}

function registryIndexTwin(all: TwinSpec[]): TwinSpec {
  const census = vaults.reduce((m: Record<string, number>, v: any) => {
    m[v.class] = (m[v.class] ?? 0) + 1;
    return m;
  }, {});
  const classLines = Object.keys(census)
    .sort((a, b) => census[b] - census[a] || a.localeCompare(b))
    .map((c) => `- ${classLabel(c)} (${census[c]})`);

  return {
    path: '/vaults',
    title: 'Vault registry',
    body: [
      `The registry lists ${vaults.length} vaults. Every entry is self-declared by its vault and`,
      'reflects a single operator-run node — the graph is a graph of declared relationships, not',
      'evidence of adoption.',
      '',
      '## By class',
      '',
      ...classLines,
      '',
      '## Every vault',
      '',
      ...all.map((t) => `- [${t.title}](${t.path}.md)`),
    ].join('\n'),
  };
}

async function allTwins(): Promise<TwinSpec[]> {
  const a = await tierA();
  const vaultTwins = vaults.map(vaultTwin);
  return [...a, ...vaultTwins, registryIndexTwin(vaultTwins)];
}

export const getStaticPaths: GetStaticPaths = async () => {
  const twins = await allTwins();

  // A curated set must never lose a member silently (convention 7's own lesson — P2.1 lost a
  // registry lookup to a `.filter(Boolean)`). Duplicate paths would have one twin overwrite the
  // other with no warning at all, so collide loudly instead.
  const seen = new Set<string>();
  for (const t of twins) {
    if (seen.has(t.path)) throw new Error(`twin: duplicate twin path ${t.path}`);
    seen.add(t.path);
  }

  return twins.map((twin) => ({
    params: { path: twin.path.replace(/^\//, '') },
    props: { twin },
  }));
};

export const GET: APIRoute = ({ props, site }) => {
  const twin = (props as { twin: TwinSpec }).twin;
  const origin = site?.toString().replace(/\/$/, '') ?? SITE_ORIGIN;
  return new Response(
    renderTwin({ canonicalPath: `${twin.path}/`, title: twin.title, body: twin.body, origin }),
    { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } },
  );
};
