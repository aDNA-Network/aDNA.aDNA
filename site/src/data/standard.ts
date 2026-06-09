/**
 * Single source of truth for aDNA standard facts surfaced on the site.
 *
 * Prevents version / entity-count drift (network-audit finding H1b — the spec
 * version was cited as v2.0 / v2.1 / v2.2 across pages before the P1-S1 sweep).
 * Every consumer (home stats, home "The Standard" meta-tags, …) imports from
 * here so a single edit propagates and the surfaces can't re-diverge.
 */
export const STANDARD_VERSION = 'v2.2';
export const ENTITY_TYPE_COUNT = 14;
export const CONFORMANCE_LEVELS = 3;
export const STANDARD_LICENSE = 'MIT';
