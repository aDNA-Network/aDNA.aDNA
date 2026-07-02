import type { APIRoute } from 'astro';
import { getSortedChangelog } from '../utils/collections';

// RSS 2.0 feed for adna.network (idea_site_rss_feed / Champollion Ring-1 M4.2).
// Hand-rolled (no @astrojs/rss dependency) so it stays pure site source with zero
// deps-layer risk: it reads the existing `changelog` content collection and emits a
// valid RSS 2.0 document. The feed makes release cadence visible — a cheap
// "actively maintained" signal and the standard watch-mechanism for tool-evaluators.
// Discovery: <link rel="alternate" type="application/rss+xml"> in BaseLayout + a footer link.

const SITE_TITLE = 'aDNA — the open standard & network for shared context';
const SITE_DESC =
  'Release notes and changelog for the aDNA standard and adna.network. ' +
  'The open standard and network to build, share, and govern the context that powers AI.';

// Minimal XML entity escaping for text nodes (CDATA covers body HTML separately).
const escapeXml = (s: string): string =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export const GET: APIRoute = async (context) => {
  // Astro.site is configured (astro.config.mjs: https://adna.network). Fall back defensively.
  const siteUrl = (context.site?.toString() ?? 'https://adna.network/').replace(/\/$/, '');
  const entries = await getSortedChangelog();

  const items = entries
    .map((entry) => {
      const { version, date, title, description } = entry.data as {
        version: string;
        date: Date;
        title: string;
        description?: string;
      };
      // Each changelog entry renders on the /changelog page (single-page anchor by version).
      const link = `${siteUrl}/changelog/#${escapeXml(String(version))}`;
      const pubDate = new Date(date).toUTCString();
      const desc = description ?? `aDNA ${version} release notes.`;
      return [
        '    <item>',
        `      <title>${escapeXml(title)}</title>`,
        `      <link>${link}</link>`,
        `      <guid isPermaLink="false">adna-changelog-${escapeXml(String(version))}</guid>`,
        `      <pubDate>${pubDate}</pubDate>`,
        `      <description>${escapeXml(desc)}</description>`,
        '    </item>',
      ].join('\n');
    })
    .join('\n');

  const lastBuild = entries.length
    ? new Date((entries[0].data as { date: Date }).date).toUTCString()
    : new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${siteUrl}/</link>
    <description>${escapeXml(SITE_DESC)}</description>
    <language>en</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};
