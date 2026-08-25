/**
 * JSON-LD structured data builders for SEO.
 * Documentation archetype: TechArticle, WebSite, WebPage, CollectionPage, Dataset.
 *
 * TYPE-CHECKED AGAINST SCHEMA.ORG (HAUSSMANN P3.2, ADR-056 clause 4). Every builder constructs
 * its payload as a `schema-dts` type, so a misspelled property (`sameas`, `contentUrl` on a type
 * that has no such property) is a build error rather than a block that parses as JSON, validates
 * as nothing, and silently means less than it appears to.
 *
 * WHY THE RETURN TYPE STAYS `Record<string, unknown>`. `schema-dts` models schema.org with
 * interfaces, and a TS interface is not assignable to `Record<string, unknown>` (no implicit index
 * signature). Rather than loosen every layout's `jsonLD` prop — a change every consumer would
 * absorb for no benefit — the checking happens at the construction site via `jsonLD<T>()` and the
 * value widens on the way out. Consumers see a zero-diff interface; the authoring surface gets the
 * types. Red-tested: introducing a bogus property here fails `astro check`.
 */
import type { WithContext, Thing, WebPage, WebSite, TechArticle, BreadcrumbList, HowTo, CollectionPage, Dataset } from 'schema-dts';
import { PUBLISHER, PUBLISHER_URL } from '../data/canonical';
import { PUBLISHER_SAME_AS } from '../data/canonical_properties';

/**
 * Type-check as schema.org, hand back the shape the layouts already accept.
 * The double assertion is the whole point of the seam and is confined to this one function.
 */
function jsonLD<T extends Thing>(value: WithContext<T>): Record<string, unknown> {
  return value as unknown as Record<string, unknown>;
}

/**
 * Canonical publisher organization for every JSON-LD builder (SP-1 single-source; gate G5/G4).
 *
 * HAUSSMANN P1.2 added `sameAs` — the machine-readable half of the §7.1 clone-site defense. It is
 * derived from the same property list the canonical-properties page renders, so the page a human
 * reads and the graph a machine reads cannot disagree. `sameAs` carries only properties that ARE this
 * organization (see canonical_properties.ts for why partner properties are deliberately excluded).
 *
 * P3.2 note: the machine_eye census reported "0 Organization blocks" site-wide, which read as an
 * absence and was not one — the census counted top-level `@type` only, and this Organization is
 * nested as `publisher` on every block. ⊳ D-I ruled the nested form satisfies the requirement, so
 * this is verified and left alone rather than rebuilt at top level.
 */
const PUBLISHER_ORG = {
  '@type': 'Organization' as const,
  name: PUBLISHER,
  url: PUBLISHER_URL,
  sameAs: PUBLISHER_SAME_AS,
};

interface WebPageParams {
  title: string;
  description: string;
  url: string;
}

interface TechArticleParams extends WebPageParams {
  datePublished?: string;
  dateModified?: string;
  author?: string;
}

export function buildWebPageJsonLD({ title, description, url }: WebPageParams): Record<string, unknown> {
  return jsonLD<WebPage>({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    publisher: PUBLISHER_ORG,
  });
}

export function buildTechArticleJsonLD({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author,
}: TechArticleParams): Record<string, unknown> {
  return jsonLD<TechArticle>({
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description,
    url,
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    ...(author && { author: { '@type': 'Person', name: author } }),
    publisher: PUBLISHER_ORG,
  });
}

export function buildWebSiteJsonLD(siteUrl: string): Record<string, unknown> {
  return jsonLD<WebSite>({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'aDNA — Agentic DNA Knowledge Architecture',
    url: siteUrl,
    description: 'Give your project a knowledge architecture that both humans and AI agents can navigate.',
    publisher: PUBLISHER_ORG,
  });
}

interface BreadcrumbItem {
  name: string;
  url?: string;
}

export function buildBreadcrumbListJsonLD(items: BreadcrumbItem[]): Record<string, unknown> {
  return jsonLD<BreadcrumbList>({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem' as const,
      position: i + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  });
}

interface HowToParams extends WebPageParams {
  totalTime?: string; // ISO 8601 duration, e.g. "PT15M"
}

export function buildHowToJsonLD({ title, description, url, totalTime }: HowToParams): Record<string, unknown> {
  return jsonLD<HowTo>({
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    url,
    ...(totalTime && { totalTime }),
    publisher: PUBLISHER_ORG,
  });
}

export function buildCollectionPageJsonLD({ title, description, url }: WebPageParams): Record<string, unknown> {
  return jsonLD<CollectionPage>({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: 'aDNA — Agentic DNA Knowledge Architecture',
      url: new URL('/', url).href,
    },
    publisher: PUBLISHER_ORG,
  });
}

interface DatasetParams extends WebPageParams {
  /** Absolute URL of the JSON distribution — the endpoint this Dataset describes. */
  contentUrl: string;
  /** Date the underlying data was generated (YYYY-MM-DD). */
  dateModified?: string;
  keywords?: string[];
}

/**
 * `Dataset` for the registry (HAUSSMANN P3.2, ADR-056 clause 4).
 *
 * The registry is a structured, typed, governed collection — `machine_eye` item 9 flagged that it
 * announced itself as a generic `CollectionPage` and nothing more, with no `Dataset` anywhere on
 * the site. The `distribution` block is the load-bearing half: it points a consumer at
 * `/vaults.json`, so the human page and the machine endpoint reference each other instead of
 * existing as two unconnected surfaces.
 *
 * `license` and `creator` are stated because a dataset without provenance is exactly the kind of
 * unattributed artifact this vault's FAIR discipline exists to prevent.
 */
export function buildDatasetJsonLD({
  title,
  description,
  url,
  contentUrl,
  dateModified,
  keywords,
}: DatasetParams): Record<string, unknown> {
  return jsonLD<Dataset>({
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: title,
    description,
    url,
    ...(dateModified && { dateModified }),
    ...(keywords?.length && { keywords }),
    license: 'https://opensource.org/licenses/MIT',
    isAccessibleForFree: true,
    creator: PUBLISHER_ORG,
    publisher: PUBLISHER_ORG,
    distribution: {
      '@type': 'DataDownload',
      encodingFormat: 'application/json',
      contentUrl,
    },
  });
}
