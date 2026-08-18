/**
 * Canonical vault-registry accessor — the single boundary where `vaults.json`
 * enters the site, and the one place vault route slugs are made canonical.
 *
 * HAUSSMANN P2.1 (ADR-051). Two URL shapes coexisted in one registry: 50 of 74
 * vaults routed at a clean lowercase slug (`git`, `react`, `regenesis`) while 24
 * routed at the raw vault name (`/vaults/Operations.aDNA/`). The split is not a
 * data-entry mistake — it is `build_vaults_data.mjs`'s `card.vault_slug ||
 * slugOf(slug)`: a vault_card that declares its own `vault_slug` wins, and 24
 * cards declare the raw name. On a case-sensitive host the wrong casing is a
 * hard 404 with no recovery (H6), so every mixed-case URL is a permanent,
 * compounding source of dead external links.
 *
 * WHY THE FIX LIVES HERE AND NOT IN THE GENERATOR'S OUTPUT
 * -------------------------------------------------------
 * The generator is also fixed (same commit) so future regens emit canonical
 * slugs. But the *data* file is deliberately NOT regenerated to land this
 * change, because a `sync:vaults` run today would do something nobody
 * authorized: `Home.aDNA`'s inventory now carries **77** vaults to the
 * committed registry's **74**, so a regen would silently publish
 * `Bearly.aDNA`, `RareGraph.aDNA`, and `StrongerWithScience.aDNA` — two of them
 * marked *data-bearing, git local-only, NO remote* — onto a public page. That
 * is a DP4-class admission ruling (ADR-052 §admission), owned by the operator
 * and by Hestia's B7 data pass, not a side effect of a URL-casing fix. So:
 * registry data untouched (pt19 honored absolutely, `vaults.json` stays
 * byte-identical, count stays a true 74), normalization applied at the
 * consumption boundary.
 *
 * The arrangement has a second, durable benefit: because normalization happens
 * on read, a future card that re-declares a mixed-case `vault_slug` **cannot**
 * reintroduce a mixed-case URL. The law is enforced where routes are built, not
 * where data is written.
 *
 * Every consumer imports from here rather than from `vaults.json` directly;
 * gate-30 asserts no site source imports the raw JSON and that every emitted
 * vault route is canonical.
 */
// The `with { type: 'json' }` attribute is required by the Node ESM loader the gate suite runs
// under (Vite is more forgiving, so the astro build passes without it and only the gates fail —
// which is exactly why it is stated here rather than left to whichever loader gets there first).
import raw from './vaults.json' with { type: 'json' };

/**
 * The canonical route slug for a vault: lowercase, `.aDNA` suffix dropped,
 * anything outside `[a-z0-9_-]` folded to `_`.
 *
 * Mirrors `slugOf()` in `scripts/build_vaults_data.mjs` exactly — the two are
 * asserted identical by gate-30, so they cannot drift. Idempotent by
 * construction: an already-canonical slug is returned unchanged, which is what
 * makes it safe to apply to a `vault_slug` field that may already be correct.
 */
export function canonicalVaultSlug(value: string): string {
  return String(value)
    .toLowerCase()
    .replace(/\.adna$/, '')
    .replace(/[^a-z0-9_-]/g, '_');
}

type RawRegistry = {
  vaults: any[];
  edges: { source: string; target: string; type: string }[];
  vault_count: number;
  generated_at: string;
  schema_version: string;
  source_inventory_sha: string;
};

const rawRegistry = raw as unknown as RawRegistry;

/**
 * Registry with every route-bearing slug canonicalized. Edge endpoints are
 * vault slugs too (`build_vaults_data.mjs` pushes `v.vault_slug` as the node id),
 * so they are normalized with the same function — otherwise the graph's edges
 * would reference node ids that no longer exist and every mixed-case vault would
 * render as an orphan.
 *
 * Nothing else is touched: counts, dates, notes, and the inventory sha pass
 * through unchanged, so this stays a projection of the registry, not an edit of it.
 */
export const vaultsData = {
  ...rawRegistry,
  vaults: rawRegistry.vaults.map((v) => ({
    ...v,
    vault_slug: canonicalVaultSlug(v.vault_slug),
  })),
  edges: rawRegistry.edges.map((e) => ({
    ...e,
    source: canonicalVaultSlug(e.source),
    target: canonicalVaultSlug(e.target),
  })),
};

/** The vault list alone — the most common import shape. */
export const vaults = vaultsData.vaults;

/** Legacy-slug → canonical-slug pairs, for the redirect map + its gate. Only
 *  entries that actually change are listed; a vault already canonical yields none. */
export const slugRedirectPairs: { from: string; to: string }[] = rawRegistry.vaults
  .map((v) => ({ from: String(v.vault_slug), to: canonicalVaultSlug(v.vault_slug) }))
  .filter((p) => p.from !== p.to);

export default vaultsData;
