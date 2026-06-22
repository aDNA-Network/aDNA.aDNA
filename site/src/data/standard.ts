/**
 * Single source of truth for aDNA standard facts surfaced on the site.
 *
 * Prevents version / entity-count drift (network-audit finding H1b — the spec
 * version was cited as v2.0 / v2.1 / v2.2 across pages before the P1-S1 sweep).
 * Every consumer (home stats, home "The Standard" meta-tags, llms.txt / llms-full.txt)
 * imports from here so a single edit propagates and the surfaces can't re-diverge.
 *
 * 2026-06-22 (keystone C-1 stage-2): v2.2→v2.3 and 14→16 — `inventory` (WHAT) and
 * `identity` (WHO) were promoted to base entity types per ADR-035, shipped in the
 * public aDNA-Network/aDNA image at Hearthstone v8.0. The hardcoded "v2.2" strings in the
 * MDX prose + the normative spec mirror (/reference/specification) were ported to v2.3 in
 * the Tier-2 standard-currency sweep (2026-06-22), which also brought the dev standard doc
 * (what/docs/adna_standard.md) to v2.3 + authored its §5.1 inventory / §5.2 identity rows;
 * the public image's spec body closes at the next gated template release.
 */
export const STANDARD_VERSION = 'v2.3';
export const ENTITY_TYPE_COUNT = 16;
export const CONFORMANCE_LEVELS = 3;
export const STANDARD_LICENSE = 'MIT';
