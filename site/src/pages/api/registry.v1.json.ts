import type { APIRoute } from 'astro';
import { renderRegistryJson } from '../../utils/registryJson';

/**
 * `/api/registry.v1.json` — the pinnable twin of `/vaults.json` (HAUSSMANN P3.2, ADR-056 clauses
 * 3 + 7).
 *
 * Same bytes, different promise. `/vaults.json` promises *the current registry*; this URL promises
 * *the v1 shape*. A consumer that cannot tolerate a field changing meaning pins here; one that
 * wants whatever is current uses the canonical path. Clause 7's versioning law is only real if
 * there is a URL to pin before the first breaking change, not after it.
 *
 * Deliberately NOT a second producer: it calls the same `renderRegistryJson()`. A versioned URL
 * that drifted from the canonical one would be worse than not having it, because a pin that
 * silently diverges is indistinguishable from a pin that works.
 *
 * When v2 arrives it lands at `/api/registry.v2.json`, and this route keeps serving v1 for the
 * stated deprecation window (see the `about.versioning` field in the payload itself).
 */
export const GET: APIRoute = ({ site }) => {
  return new Response(renderRegistryJson(site?.toString()), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
