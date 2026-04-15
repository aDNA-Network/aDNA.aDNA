/**
 * JSON-LD structured data builders for SEO.
 * Documentation archetype: TechArticle, WebSite, WebPage.
 */

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
    publisher: {
      '@type': 'Organization',
      name: 'Lattice Protocol',
      url: 'https://github.com/LatticeProtocol',
    },
  };
}

export function buildWebSiteJsonLD(siteUrl: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'aDNA — Agentic DNA Knowledge Architecture',
    url: siteUrl,
    description: 'Give your project a knowledge architecture that both humans and AI agents can navigate.',
    publisher: {
      '@type': 'Organization',
      name: 'Lattice Protocol',
    },
  };
}
