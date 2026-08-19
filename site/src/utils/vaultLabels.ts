/**
 * vaultLabels.ts — public-label + attribute-slug treatment for registry enums (HAUSSMANN P1.3).
 *
 * Raw machine enums (`org_graph`, `tbd_at_p0`, `genesis_stub`) are internal vocabulary; gate-27
 * lints them off every public surface — including HTML attributes, ids, and CSS hooks, which the
 * lint scans as raw text. Rule: visible text goes through classLabel/personaLabel/statusLabel;
 * ids, dataset values, and class hooks go through classSlug. One util so the registry index,
 * detail pages, cards, and machine surfaces can never disagree.
 */

/** Public display labels for vault-class enums (lowercase register — chips, facets, spec sheets). */
export const CLASS_LABELS: Record<string, string> = {
  standard_dev: 'standard',
  framework: 'framework',
  framework_candidate: 'framework (candidate)',
  forge: 'forge',
  platform: 'platform',
  org_vault: 'org vault',
  org_graph: 'org graph',
  network: 'network',
  node_operational: 'node (operational)',
  coordination: 'coordination',
  document: 'document',
  knowledge_graph: 'knowledge graph',
  tooling: 'tooling',
  workspace: 'workspace',
  tbd_at_p0: 'genesis-planning',
  superseded: 'superseded',
};

/** Plain-language glosses for labels a newcomer can't parse (title-attribute / aside copy). */
export const CLASS_GLOSS: Record<string, string> = {
  tbd_at_p0: 'category to be decided at the vault’s genesis',
};

export function classLabel(cls: string | null | undefined): string {
  const c = String(cls || 'vault');
  return CLASS_LABELS[c] || c.replace(/_/g, ' ');
}

/** Attribute/id/CSS-hook form — hyphenated, so machine enums never appear in built HTML.
 *  Also accepts display labels (spaces/parens collapse to hyphens — always a valid CSS token). */
export function classSlug(cls: string | null | undefined): string {
  return String(cls || 'vault')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Status display label. `genesis_stub` is the inventory's "stub created, not yet begun" —
 *  publicly it reads as the genesis stage (the existing gloss covers it). */
export function statusLabel(status: string | null | undefined): string {
  const s = String(status || 'unknown');
  return s === 'genesis_stub' ? 'genesis' : s.replace(/_/g, ' ');
}

/* ── Lifecycle tiers (HAUSSMANN P2.4 · ADR-052 §tiers, accepted 2026-08-19) ──────────────────
 *
 * The registry's three lifecycle tiers, derived from `status` ALONE. Nothing here is hand-tiered:
 * a vault's tier is a pure function of the one field it already declares, so the badge cannot
 * drift from the data and no editorial judgment enters the surface (KW-14).
 *
 * WHAT THESE WORDS DO AND DO NOT CLAIM
 * ------------------------------------
 * No tier claims quality. Not `flagship`, not `mature`, not `production`. Nothing in this registry
 * supports those words: `github_url` is present on 1 of 74 rows, `docs_site_url` on 0, and
 * `last_synced` on 24 with 18 of those frozen at a single date. Every status here is SELF-DECLARED
 * and nothing corroborates it (ADR-052 §tiers.2), so the vocabulary describes a declared *stage*
 * and never an assessed maturity. A badge that overclaims is worse than no badge, because it turns
 * a thin registry into a misleading one.
 *
 * `card_present` is deliberately NOT an input (§tiers.1). All 7 `active` vaults have a card, so
 * splitting on it yields an empty bucket; where it discriminates is inside `genesis` (7 of 49).
 * It measures documentation, not lifecycle — tiering on it would ship a badge that claims maturity
 * and measures paperwork. It surfaces separately as a *documented* completeness signal, not a rank.
 */

/** Tier ids, in the order they render. */
export const TIER_ORDER = ['in_use', 'chartered', 'planned'] as const;
export type VaultTier = (typeof TIER_ORDER)[number];

/** Public label + the one line that ships beside the badge (ADR-052 §tiers.3). */
export const TIER_LABELS: Record<VaultTier, string> = {
  in_use: 'in use',
  chartered: 'chartered',
  planned: 'planned',
};

export const TIER_MEANING: Record<VaultTier, string> = {
  in_use: 'Being worked in today.',
  chartered: 'Scoped and opened; substantive work has not begun.',
  planned: 'A named place in the network with a governance skeleton and little else.',
};

/**
 * The tier for a vault status. `genesis_stub` folds into `genesis` exactly as `statusLabel()`
 * above already does, so the public figure stays consistent with `network_state.ts`.
 *
 * Anything unrecognised falls to `planned` — the most conservative of the three. An unknown
 * status is not evidence that a vault is in use, and a derivation that guesses upward would be
 * the one failure mode this whole model exists to prevent.
 */
export function tierOf(status: string | null | undefined): VaultTier {
  switch (String(status || '')) {
    case 'active':
      return 'in_use';
    case 'pending':
      return 'chartered';
    default:
      return 'planned';
  }
}

export function tierLabel(tier: VaultTier): string {
  return TIER_LABELS[tier];
}

/** Attribute/id/CSS-hook form for a tier — hyphenated, same contract as `classSlug`. */
export function tierSlug(tier: VaultTier): string {
  return tier.replace(/_/g, '-');
}

/** Persona display. Placeholders ('—', tbd_at_p0) are data-currency artifacts, not personae —
 *  they render as absent (the persona row/line is simply omitted). `_provisional` reads as a
 *  qualifier, not part of the name. */
export function personaLabel(persona: string | null | undefined): string | null {
  if (persona == null) return null;
  const s = String(persona).trim();
  if (!s || s === '—' || s === '-' || /^tbd(_at_p0)?$/i.test(s)) return null;
  const provisional = /_provisional$/i.test(s);
  const base = s.replace(/_provisional$/i, '').replace(/_/g, ' ');
  const cased = base.replace(/\b\p{L}/gu, (ch) => ch.toUpperCase());
  return provisional ? `${cased} (provisional)` : cased;
}
