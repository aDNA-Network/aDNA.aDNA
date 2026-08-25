/**
 * Canonical identity constants — the single source of truth for the repo URL and
 * the publisher/brand entity surfaced anywhere on the site (JSON-LD, footer,
 * header, meta). Prevents the C-1/C-3 drift class (dead dev-vault proof-links
 * and stale legacy-org publisher URLs in structured data). The repo URL is
 * re-exported from install_truth.json (generated + path-verified at build); the
 * brand entity is fixed here. Every component imports from here so a single edit
 * propagates and the surfaces can't re-diverge.
 *
 * WEBSITE.aDNA P3 / Decade 1 / SP-1 (canonical-source). Guarded by the
 * single-source lint (gate G5) + the link-check (G6) + the public-meta
 * sanitizer (G7).
 *
 * NB — "Lattice Protocol" remains correct PROSE for the protocol substrate the
 * aDNA network runs on (canonical fact #1: aDNA = the network/brand; Lattice
 * Protocol = the underlying protocol). This module names the *publisher
 * organization*, which is the **aDNA Network** — never collapse the two.
 */
import installTruth from './install_truth.json';

/** Canonical clone-and-run repo (https). From install_truth.json (generated, path-verified at build). */
export const REPO_HTTPS: string = installTruth.canonical_repo_https;

/**
 * The canonical origin of this site. The one place the production origin is written.
 *
 * HAUSSMANN P1.2 (§7.1 clone-site defense): this replaces thirteen hardcoded `?? 'https://adna.dev'`
 * fallbacks — SEOHead plus twelve dynamic route files. `adna.dev` was abandoned at the 2026-05-31
 * cutover to adna.network and no longer resolves at all, so the fallback identity of a site whose
 * entire argument is "assert your canonical domain" was a domain that is not ours and does not exist.
 * The fallback never fired in practice (astro.config.mjs always sets `site`), which is exactly why it
 * survived this long: nothing exercises a fallback until it is the only thing left.
 */
export const SITE_ORIGIN = 'https://adna.network';

/** Publisher / brand organization — JSON-LD publisher, footer copyright, meta. (Decision 4, 2026-06-19.) */
export const PUBLISHER = 'aDNA Network';

/**
 * Canonical URL for the publisher organization.
 *
 * HAUSSMANN P1.2: was `REPO_HTTPS`, which told every structured-data consumer that the aDNA Network
 * organization's home is a GitHub repository. The organization's home is the site; the repository is
 * one of its properties, and is carried in `sameAs` (canonical_properties.ts) along with the rest.
 */
export const PUBLISHER_URL: string = SITE_ORIGIN;
