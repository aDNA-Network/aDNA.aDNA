import type { APIRoute } from 'astro';
import { renderRegistryJson } from '../utils/registryJson';

/**
 * `/vaults.json` — the canonical registry endpoint (HAUSSMANN P3.2, ADR-056 clause 3).
 *
 * This path is not arbitrary: it is the first of the four `machine_eye` item 8 probed and found
 * `404`, and it is the one an agent constructs from `/vaults` without being told. Serving the
 * guessable URL is the whole finding P3.1 closed on its own probe.
 *
 * Coexists with the `vaults/` page directory — Astro routes `vaults.json.ts` → `/vaults.json` and
 * `vaults/index.astro` → `/vaults/` with no collision, the same way `rss.xml.ts` and
 * `community/proposals.json.ts` already work here.
 *
 * The body is built by `utils/registryJson.ts` and shared byte-for-byte with
 * `/api/registry.v1.json`; gate-17 asserts the two are identical.
 */
export const GET: APIRoute = ({ site }) => {
  return new Response(renderRegistryJson(site?.toString()), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
