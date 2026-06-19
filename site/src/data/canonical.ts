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

/** Publisher / brand organization — JSON-LD publisher, footer copyright, meta. (Decision 4, 2026-06-19.) */
export const PUBLISHER = 'aDNA Network';

/** Canonical URL for the publisher organization (the network's public repo/home). */
export const PUBLISHER_URL: string = REPO_HTTPS;
