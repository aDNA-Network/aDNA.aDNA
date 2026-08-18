/**
 * JSON-LD structured data builders for SEO.
 * Documentation archetype: TechArticle, WebSite, WebPage, CollectionPage.
 */
import { PUBLISHER, PUBLISHER_URL } from '../data/canonical';
import { PUBLISHER_SAME_AS } from '../data/canonical_properties';

/**
 * Canonical publisher organization for every JSON-LD builder (SP-1 single-source; gate G5/G4).
 *
 * HAUSSMANN P1.2 added `sameAs` — the machine-readable half of the §7.1 clone-site defense. It is
 * derived from the same property list the canonical-properties page renders, so the page a human
 * reads and the graph a machine reads cannot disagree. `sameAs` carries only properties that ARE this
 * organization (see canonical_properties.ts for why partner properties are deliberately excluded).
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
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    publisher: PUBLISHER_ORG,
  };
}

export function buildTechArticleJsonLD({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author,
}: TechArticleParams): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description,
    url,
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    ...(author && { author: { '@type': 'Person', name: author } }),
    publisher: PUBLISHER_ORG,
  };
}

export function buildWebSiteJsonLD(siteUrl: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'aDNA — Agentic DNA Knowledge Architecture',
    url: siteUrl,
    description: 'Give your project a knowledge architecture that both humans and AI agents can navigate.',
    publisher: PUBLISHER_ORG,
  };
}

interface BreadcrumbItem {
  name: string;
  url?: string;
}

export function buildBreadcrumbListJsonLD(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
}

interface HowToParams extends WebPageParams {
  totalTime?: string; // ISO 8601 duration, e.g. "PT15M"
}

export function buildHowToJsonLD({ title, description, url, totalTime }: HowToParams): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    url,
    ...(totalTime && { totalTime }),
    publisher: PUBLISHER_ORG,
  };
}

export function buildCollectionPageJsonLD({ title, description, url }: WebPageParams): Record<string, unknown> {
  return {
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
  };
}
