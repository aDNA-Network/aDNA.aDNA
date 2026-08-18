/**
 * canonical_properties.ts — typed accessor over the canonical property list.
 *
 * HAUSSMANN P1.2, the §7.1 clone-site defense. Both comparable projects in this category have
 * spawned SEO clone-site swarms — parallel domains reproducing project descriptions with fabricated
 * testimonials and invented attribution, several outranking the official properties. The
 * instrument's counter-measure is threefold: assert the canonical domain in structured data,
 * publish an official-properties page, and link it from the footer. This module feeds all three
 * from one list, so the human-readable page and the machine-readable `Organization.sameAs` cannot
 * drift apart.
 *
 * WHY THE DATA IS IN JSON AND NOT IN THIS FILE. A Playwright gate cannot import this module: it
 * transitively imports install_truth.json, and Node rejects a JSON import without an import
 * attribute (adding the attribute does not survive Playwright's transpile — tried). Keeping the
 * rows in canonical_properties.json lets gate-15's G6b assertions read the SAME source the page
 * renders from, with readFileSync, and check true set equality in both directions. A gate that
 * checks the page against a copy of the list would just be testing the copy.
 *
 * Probe discipline and the not-listed rule are documented in the JSON's own header.
 */
import raw from './canonical_properties.json';
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
export const PROPERTIES_PROBED_AT: string = raw.properties_probed_at;

export const CANONICAL_PROPERTIES: CanonicalProperty[] = raw.properties as CanonicalProperty[];

/**
 * Build-time consistency check — the reason writing these URLs literally in JSON is safe.
 *
 * The canonical and legacy repository URLs are generated into install_truth.json at build; the JSON
 * list repeats them so the gate can read the list without importing TypeScript. This assertion makes
 * that repetition non-drifting: if the generated install truth ever changes and the property list
 * does not, `astro build` throws here rather than shipping two disagreeing answers to "where does
 * aDNA live?" — which is precisely the question this page exists to answer.
 */
const declared = new Set(CANONICAL_PROPERTIES.map((p) => p.url));
for (const [name, url] of Object.entries({
  REPO_HTTPS,
  SITE_ORIGIN,
  legacy_repo_https: installTruth.legacy_repo_https,
})) {
  if (!declared.has(url)) {
    throw new Error(
      `canonical_properties.json is out of sync with the canonical source: ${name} = "${url}" is not ` +
        `a declared property. Update src/data/canonical_properties.json (and re-probe the URL) so the ` +
        `properties page and the install truth agree.`,
    );
  }
}

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
 *     the `aDNA-Network/aDNA.aDNA` literal into all ~205 pages, defeating gate-14's proof-link guard
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
