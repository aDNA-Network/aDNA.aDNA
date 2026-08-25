/**
 * registryJson.ts — the registry as data (HAUSSMANN P3.2, ADR-056 clause 3).
 *
 * WHY THIS EXISTS. `machine_eye` item 8 probed the four obvious JSON paths — `/vaults.json`,
 * `/api/vaults`, `/vaults/index.json`, `/data/vaults.json` — and got 4/4 `404`. An agent's only
 * route to the vault list was scraping `/vaults/` HTML or pulling bare slugs out of
 * `sitemap-0.xml`. For a site whose thesis is agent-navigable context, a registry that exists
 * only as HTML reads as evidence against the claim.
 *
 * ONE PRODUCER, TWO ROUTES. `/vaults.json` is the canonical, advertised path — the one
 * `machine_eye` actually probed and the one an agent builds unprompted (P3.1's live probe scored
 * 7/10 on exactly this point: the URL we had not served was the URL a reader guessed).
 * `/api/registry.v1.json` is the pinnable twin. Both routes call `buildRegistryJson()` and are
 * asserted byte-identical, so "two URLs" never becomes "two payloads" — clause 7's versioning law
 * needs a version a consumer can pin *without* forking the thing being versioned.
 *
 * WHICH FIELDS ARE PUBLIC — DERIVED, NOT CHOSEN
 * ---------------------------------------------
 * `PUBLIC_VAULT_FIELDS` is the union of what the registry's own public surfaces already render:
 * the 18 fields `/vaults/[slug]` shows, plus `card_present`, which the card shows. Nothing else.
 * A field that no page displays is not made public by being convenient to serialize — the
 * endpoint is a projection of the published registry, not a second, richer one. The excluded
 * fields are real and non-empty in places (`persona_archetype` 16/74, `federation_refs` 6/74,
 * `companion_vaults` 3/74, `umbrella_pillar` 1/74); they are excluded because no surface
 * publishes them, and relationships reach consumers through `edges[]`, which the graph does
 * publish. Gate-17 asserts this set against the rendered set so the two cannot drift apart.
 *
 * THE REGISTRY IS THIN, AND THE ENDPOINT SAYS SO
 * ----------------------------------------------
 * 13 of the 30 registry fields are populated 0/74 (`tagline`, `headline_mission`, `current_phase`,
 * `docs_site_url`, …). That is P1.3's sanitizer working as designed — it nulled descriptive fields
 * that were leaking internal language, and sparseness is the honest cost of sanitization
 * (ADR-052 §tiers.0). Publishing ~960 silent nulls would let a consumer read absence as either
 * "unknown for this vault" or "not collected at all," which are different facts. So absent scalars
 * are `null` (never omitted — the `proposals.json` rule) AND the envelope carries a derived
 * `field_coverage` block stating populated-count/74 per field. The thinness becomes a measurement
 * instead of an inference. Every number here is counted at build time, never typed (KW-14).
 *
 * MACHINE KEYS AND HUMAN LABELS ARE BOTH SHIPPED
 * ----------------------------------------------
 * `class`/`status` carry the raw enum a consumer keys on; `class_label`/`status_label`/`tier_label`
 * carry the public wording. gate-27 lints raw enums (`org_graph`, `tbd_at_p0`, `genesis_stub`) off
 * public *prose* surfaces because they are house jargon in a sentence — but a JSON field named
 * `class` whose value is `org_graph` is an API contract, not jargon leaking into copy. The gate is
 * extended to scan `.json` with those tokens scope-allowlisted to these routes and these keys, so
 * every OTHER leak class (internal paths, mission ids, codenames) still applies here in full.
 *
 * Honor pt19: `vaults.json` is read, never written, never regenerated.
 */
import { vaultsData } from '../data/vaults';
import {
  classLabel,
  statusLabel,
  personaLabel,
  tierOf,
  tierLabel,
  TIER_MEANING,
  MINIMAL_CARD_NOTE,
} from './vaultLabels';
import { BUILD_DAY } from './twin';
import { SITE_ORIGIN } from '../data/canonical';

/** This endpoint's contract version — distinct from the underlying registry's own schema. */
export const ENDPOINT_SCHEMA_VERSION = '1.0';

export const CANONICAL_PATH = '/vaults.json';
export const VERSIONED_PATH = '/api/registry.v1.json';

/**
 * The public field set: exactly what `/vaults/[slug]` renders, plus the card's `card_present`.
 * Order is the serialization order. `vault_slug` and `display_name` lead because they are the
 * identity a consumer joins on.
 */
export const PUBLIC_VAULT_FIELDS = [
  'vault',
  'vault_slug',
  'display_name',
  'class',
  'status',
  'persona',
  'note',
  'tagline',
  'current_phase',
  'canonical_governance',
  'last_synced',
  'card_present',
  'listing',
  'github_url',
  'docs_site_url',
  'headline_mission',
  'headline_mission_state',
  'headline_adrs',
  'recent_closed',
] as const;

/** Fields whose absent form is `[]` rather than `null` — an empty list is a real answer. */
const LIST_FIELDS = new Set(['headline_adrs', 'recent_closed']);

/** Absent-but-present: `''`/`undefined` become `null`, so a consumer never has to guess. */
function scalar(value: unknown): string | boolean | null {
  if (typeof value === 'boolean') return value;
  if (value == null) return null;
  const s = String(value).trim();
  return s === '' ? null : s;
}

function list(value: unknown): string[] {
  return Array.isArray(value) ? value.map(String) : [];
}

/**
 * Populated-count per public field, counted over the live projection.
 *
 * `false` counts as populated: `card_present: false` is an answer, not a gap. Empty strings and
 * empty arrays do not — they are the sanitizer's null, wearing a different type.
 */
function fieldCoverage(rows: any[]): Record<string, { populated: number; of: number }> {
  const out: Record<string, { populated: number; of: number }> = {};
  for (const field of PUBLIC_VAULT_FIELDS) {
    const populated = rows.filter((v) => {
      const raw = v[field];
      if (typeof raw === 'boolean') return true;
      if (raw == null) return false;
      if (Array.isArray(raw)) return raw.length > 0;
      return String(raw).trim() !== '';
    }).length;
    out[field] = { populated, of: rows.length };
  }
  return out;
}

function vaultRow(v: any, base: (path: string) => string): Record<string, unknown> {
  const tier = tierOf(v.status);
  const row: Record<string, unknown> = {};

  for (const field of PUBLIC_VAULT_FIELDS) {
    row[field] = LIST_FIELDS.has(field) ? list(v[field]) : scalar(v[field]);
  }

  // Derived, additive, and named as derived. `tier` is a pure function of `status` (ADR-052
  // §tiers.3) — shipped so a consumer does not have to reimplement the mapping and get it wrong.
  row.tier = tier;
  row.tier_label = tierLabel(tier);
  row.tier_meaning = TIER_MEANING[tier];
  row.class_label = classLabel(v.class);
  row.status_label = statusLabel(v.status);
  row.persona_label = personaLabel(v.persona);

  // A suppressed row and an empty row are indistinguishable from the outside unless the surface
  // says which one it is. This is the DP4 ruling (ADR-052 §admission) made machine-readable.
  row.listing_note = v.listing === 'minimal' ? MINIMAL_CARD_NOTE : null;

  row.url = base(`/vaults/${v.vault_slug}/`);
  row.markdown_url = base(`/vaults/${v.vault_slug}.md`);

  return row;
}

/**
 * The whole payload. `origin` is threaded in from the Astro route (`site`) rather than hardcoded,
 * so a preview build emits preview URLs.
 */
export function buildRegistryJson(origin: string = SITE_ORIGIN): Record<string, unknown> {
  const root = origin.replace(/\/$/, '');
  const base = (path: string) => `${root}${path}`;
  const rows = vaultsData.vaults;

  return {
    schema_version: ENDPOINT_SCHEMA_VERSION,

    // What this is, said once, in the payload — an agent that fetched only this file should not
    // have to find the docs to learn what it is holding.
    about: {
      name: 'The aDNA vault registry',
      description:
        'Every context graph listed in the aDNA registry, with the same fields the registry pages render.',
      documentation: base('/vaults/'),
      canonical_url: base(CANONICAL_PATH),
      versioned_url: base(VERSIONED_PATH),
      // Clause 7 in one sentence a consumer can act on, stated before anything depends on it.
      versioning:
        'Breaking changes get a NEW versioned URL (…/registry.v2.json). The canonical /vaults.json ' +
        'follows the newest version only after that version has been served at its versioned URL ' +
        'for at least 90 days. Additive fields are not breaking and may appear at any time.',
      license: 'MIT',
    },

    // Two clocks, deliberately distinguished. `generated_at` is when the registry DATA was last
    // regenerated (an operator-gated act — pt19); `built_at` is when this file was serialized.
    // Collapsing them would let a stale registry look as fresh as the last deploy.
    generated_at: scalar(vaultsData.generated_at),
    built_at: BUILD_DAY,
    snapshot_note: `State is a build-time snapshot generated ${BUILD_DAY}; nothing here is live.`,
    registry_schema_version: scalar(vaultsData.schema_version),
    source_inventory_sha: scalar(vaultsData.source_inventory_sha),

    // The single most important caveat on the whole surface (ADR-052 §tiers.2), shipped in the
    // payload rather than left on the HTML page a machine consumer never reads.
    caveat:
      'Every entry is self-declared by its vault and reflects a single operator-run node. The graph ' +
      'is a graph of declared relationships, not evidence of adoption. No field here is corroborated ' +
      'by an external signal, and no tier claims quality.',

    vault_count: rows.length,
    edge_count: vaultsData.edges.length,

    // Derived thinness. See the header: 13 public fields are populated 0/74, and a consumer that
    // cannot see that will read absence as per-vault unknown.
    field_coverage: fieldCoverage(rows),

    vaults: rows.map((v: any) => vaultRow(v, base)),

    // Relationships ship here rather than per-vault: the graph page publishes edges, and one
    // representation avoids the two-sources-of-truth problem a per-vault duplicate would create.
    edges: vaultsData.edges.map((e: any) => ({
      source: e.source,
      target: e.target,
      type: e.type,
    })),
  };
}

/** Serialized exactly once, so the two routes cannot differ by whitespace. */
export function renderRegistryJson(origin: string = SITE_ORIGIN): string {
  return JSON.stringify(buildRegistryJson(origin), null, 2);
}
