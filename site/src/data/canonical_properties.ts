/**
 * canonical_properties.ts — the single source of truth for every legitimate aDNA property
 * (domains, repositories, organizations, machine surfaces), and the retired ones.
 *
 * HAUSSMANN P1.2, the §7.1 clone-site defense. Both comparable projects in this category have
 * spawned SEO clone-site swarms — parallel domains reproducing project descriptions with fabricated
 * testimonials and invented attribution, several outranking the official properties. The instrument's
 * counter-measure is threefold: assert the canonical domain in structured data, publish an official
 * properties page, and link it from the footer. This module feeds all three from one list, so the
 * human-readable page and the machine-readable `Organization.sameAs` cannot drift apart.
 *
 * PROBE DISCIPLINE — the thing that makes this file trustworthy:
 *   Every row's `resolves` + `probed` records a real HTTP check, run from outside and logged out,
 *   on the date shown. `probed` is a statement about a past check, never a claim about the present —
 *   which is why it cannot rot into a falsehood, only into obvious staleness. Same idiom as
 *   `verified_links.json` (P1.1 / claim register R-90).
 *   To add a row: probe it logged out, record the result and the date, then list it. Never the reverse.
 *
 * A property that 404s or is private does NOT belong here even if we own it — this page lists what a
 * reader can trust AND reach. (`aDNA-Network/Videos.aDNA` is the live instance: under the canonical
 * org, but 404 publicly. It is disclosed as a count on /state-of-the-network, never as a link, so
 * R-90's defect — shipping an outbound proof-link a reader cannot follow — is not re-created.)
 */
import { REPO_HTTPS, SITE_ORIGIN } from './canonical';
import installTruth from './install_truth.json';

export interface CanonicalProperty {
  /** Absolute URL for domains/repos/orgs; a site-relative path for machine surfaces. */
  url: string;
  kind: 'domain' | 'repo' | 'org' | 'machine-surface' | 'retired';
  /** Display label — the human-readable name of the property. */
  label: string;
  /** One sentence: what this is, and whose it is. */
  what: string;
  /** True only if it returned a success status, publicly, logged out, on `probed`. */
  resolves: boolean;
  /** YYYY-MM-DD — the day it was last opened from outside. */
  probed: string;
  /** How it was checked, in the reader's terms. */
  evidence?: string;
  /** Set where the property is legitimately connected to aDNA but NOT controlled by it. */
  notOurs?: boolean;
}

/** The day the full property sweep was last run end-to-end. */
export const PROPERTIES_PROBED_AT = '2026-08-18';

export const CANONICAL_PROPERTIES: CanonicalProperty[] = [
  {
    url: SITE_ORIGIN,
    kind: 'domain',
    label: 'adna.network',
    what: 'The canonical site — this one. Everything official starts here.',
    resolves: true,
    probed: '2026-08-18',
    evidence: 'HTTP 200, logged out',
  },
  {
    url: 'https://community.adna.network',
    kind: 'domain',
    label: 'community.adna.network',
    what: 'The community space: self-hosted, human-to-human, and early. Its honest current state is described on the community page.',
    resolves: true,
    probed: '2026-08-18',
    evidence: 'HTTP 200, logged out',
  },
  {
    url: 'https://worldgeno.me',
    kind: 'domain',
    label: 'worldgeno.me',
    what: 'The World Genome Academy — a subnetwork’s own public site, run by that subnetwork.',
    resolves: true,
    probed: '2026-08-18',
    evidence: 'HTTP 200, logged out',
    notOurs: true,
  },
  {
    url: 'https://github.com/aDNA-Network',
    kind: 'org',
    label: 'github.com/aDNA-Network',
    what: 'The only GitHub organization aDNA publishes under. Code claiming to be aDNA from any other organization is not ours.',
    resolves: true,
    probed: '2026-08-18',
    evidence: 'HTTP 200, logged out',
  },
  {
    url: REPO_HTTPS,
    kind: 'repo',
    label: 'aDNA-Network/aDNA',
    what: 'The clone-and-run workspace, MIT-licensed. This is what the install instructions point at.',
    resolves: true,
    probed: '2026-08-18',
    evidence: 'HTTP 200, logged out',
  },
  {
    url: 'https://github.com/aDNA-Network/aDNA.aDNA',
    kind: 'repo',
    label: 'aDNA-Network/aDNA.aDNA',
    what: 'The workspace this website is built from — the standard, applied to itself, in public.',
    resolves: true,
    probed: '2026-08-18',
    evidence: 'HTTP 200, logged out',
  },
  {
    url: installTruth.legacy_repo_https,
    kind: 'repo',
    label: 'aDNA-Network/adna-legacy',
    what: 'Frozen history from before the current repository layout. Archived and read-only — kept for the record, not for use.',
    resolves: true,
    probed: '2026-08-18',
    evidence: 'HTTP 200, logged out; archived',
  },
  {
    url: 'https://github.com/Wilhelm-Foundation/rare-archive',
    kind: 'repo',
    label: 'Wilhelm-Foundation/rare-archive',
    what: 'The Rare Archive, in the Wilhelm Foundation’s own GitHub organization under Apache-2.0. Legitimately connected to aDNA, and not controlled by it.',
    resolves: true,
    probed: '2026-08-18',
    evidence: 'HTTP 200, logged out',
    notOurs: true,
  },
  {
    url: '/llms.txt',
    kind: 'machine-surface',
    label: '/llms.txt',
    what: 'The curated index this site offers to AI agents.',
    resolves: true,
    probed: '2026-08-18',
  },
  {
    url: '/llms-full.txt',
    kind: 'machine-surface',
    label: '/llms-full.txt',
    what: 'The expanded agent index.',
    resolves: true,
    probed: '2026-08-18',
  },
  {
    url: '/rss.xml',
    kind: 'machine-surface',
    label: '/rss.xml',
    what: 'The feed of changes to this site.',
    resolves: true,
    probed: '2026-08-18',
  },
  {
    url: '/sitemap-index.xml',
    kind: 'machine-surface',
    label: '/sitemap-index.xml',
    what: 'Every page on this site, listed for search engines.',
    resolves: true,
    probed: '2026-08-18',
  },
  {
    url: 'https://adna.dev',
    kind: 'retired',
    label: 'adna.dev',
    what: 'An early domain for this project, abandoned before launch. It does not resolve. If it ever resolves again, it is not us then either.',
    resolves: false,
    probed: '2026-08-18',
    evidence: 'no DNS response',
  },
];

/** Rows rendered under "what runs" and in `Organization.sameAs`. */
export const RESOLVING_PROPERTIES = CANONICAL_PROPERTIES.filter((p) => p.resolves);

/**
 * `Organization.sameAs` — the machine-readable half of the §7.1 defense.
 *
 * `sameAs` asserts IDENTITY: each URL is another web presence *of this same organization*. It is
 * emitted on every page, so it is deliberately much narrower than the page's own list:
 *
 *   - `notOurs` rows are excluded. worldgeno.me belongs to a subnetwork; rare-archive belongs to the
 *     Wilhelm Foundation. Claiming either as an aDNA Network identity would be exactly the
 *     borrowed-trust move this campaign exists to remove — and a false identity claim in structured
 *     data is worse than one in prose, because machines act on it without reading the caveat.
 *   - **individual repositories are excluded.** `github.com/aDNA-Network` is in the list, and every
 *     repository we publish lives under it — so the org-level identity already covers them
 *     transitively. Asserting each repo separately adds nothing a verifier can use, and it would put
 *     the `aDNA-Network/aDNA.aDNA` literal into all ~203 pages, defeating gate-14's proof-link guard
 *     site-wide to gain no verification value. The per-repository detail belongs on the
 *     canonical-properties page, where a human is reading, not in every page's head.
 *   - machine surfaces are this site's own paths, not separate identities.
 *   - retired properties must never be asserted as ours.
 *   - the canonical site itself is carried by `PUBLISHER_URL`, so it is not repeated here.
 */
export const PUBLISHER_SAME_AS: string[] = CANONICAL_PROPERTIES.filter(
  (p) =>
    p.resolves &&
    !p.notOurs &&
    p.kind !== 'repo' &&
    p.kind !== 'machine-surface' &&
    p.kind !== 'retired' &&
    p.url !== SITE_ORIGIN,
).map((p) => p.url);
