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
