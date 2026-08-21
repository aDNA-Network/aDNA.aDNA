import type { APIRoute } from 'astro';
import installTruth from '../data/install_truth.json';
import { STANDARD_VERSION, ENTITY_TYPE_COUNT, CONFORMANCE_LEVELS, STANDARD_LICENSE } from '../data/standard';
import { REPO_HTTPS, PUBLISHER } from '../data/canonical';
import vaultsData from '../data/vaults';
import { classLabel } from '../utils/vaultLabels';
import { BUILD_DAY, CORPUS_MARKER } from '../utils/twin';

/**
 * /llms-full.txt — the FULL CORPUS. Every page of this site as markdown, concatenated.
 *
 * WHAT THIS USED TO BE, AND WHY IT CHANGED (machine_eye item 2, `[D]`):
 *
 *   "CONFIRMED: index, not full-corpus — and the name overclaims. 2,018 B. Content = route
 *    list + vault-taxonomy table + edge-type legend. Zero page prose is inlined. Well under
 *    the ~100 KB+ a real full-corpus artifact would run; a '-full' name promises deep-
 *    ingestion content it doesn't deliver."
 *
 * A 2 KB index wearing a corpus name is a claim that does not survive being checked, which is
 * the one thing this campaign's honesty law does not allow. Both branches the mission offered
 * ("a true full-corpus artifact" OR "renamed honestly + a full-corpus artifact added") required
 * a real corpus regardless — the corpus was always mandatory, only the name was in question.
 * With the corpus here, the name is accurate, so it stays.
 *
 * NOTHING WAS LOST IN THE CHANGE: the old route list, vault taxonomy and edge legend are all
 * still here, now serving as the corpus's table of contents rather than standing in for it.
 *
 * Composed from `twin_manifest.json` — the same lock the negotiation routes and gate-17 read, so
 * the corpus cannot list a page the twins do not have (KW-8/FR-K: derive from the build snapshot,
 * never pin literals). Reads vaults.json, never regenerates it (Honor pt19).
 */

const EDGE_LEGEND: Record<string, string> = {
  umbrella: 'an org-vault contains its org-graph / pillar children',
  federation: 'a consumer wrapper depends on the forge / framework it consumes',
  partner: 'a platform ships with its default partner',
  companion: 'a sibling persona-pair or thematic family',
  supersedes: 'a successor replaced its predecessor (lifecycle)',
};

export const GET: APIRoute = ({ site }) => {
  const base = (path: string) => (site ? new URL(path, site).href : `https://adna.network${path}`);
  const vaults = (vaultsData as any).vaults ?? [];
  const edges = (vaultsData as any).edges ?? [];
  const vaultCount = (vaultsData as any).vault_count ?? vaults.length;
  const edgeCount = edges.length;

  const classCensus: Record<string, number> = vaults.reduce(
    (m: Record<string, number>, v: any) => { m[v.class] = (m[v.class] ?? 0) + 1; return m; }, {},
  );
  const edgeCensus: Record<string, number> = edges.reduce(
    (m: Record<string, number>, e: any) => { m[e.type] = (m[e.type] ?? 0) + 1; return m; }, {},
  );

  // HAUSSMANN P3.1: this file used to carry its OWN CLASS_LABELS map, title-cased, while
  // `vaultLabels.ts` carried a lowercase one — two label maps for one taxonomy, and a reader
  // comparing /vaults to /llms-full.txt saw "platform" in one and "Platform" in the other.
  // Reconciled onto the shared helper, which is the one the pages render through.
  const classLines = Object.keys(classCensus)
    .sort((a, b) => classCensus[b] - classCensus[a] || a.localeCompare(b))
    .map((c) => `- ${classLabel(c)} (${classCensus[c]})`)
    .join('\n');

  const edgeLines = Object.keys(EDGE_LEGEND)
    .map((t) => `- ${t} (${edgeCensus[t] ?? 0}): ${EDGE_LEGEND[t]}`)
    .join('\n');

  /* ── where the corpus body comes from ────────────────────────────────────
   *
   * THIS ENDPOINT OWNS THE HEADER ONLY. The corpus body is appended post-build by
   * `scripts/emit_bespoke_twins.mjs`, at the `CORPUS_MARKER` line below.
   *
   * The split is forced by build ordering, discovered by building it the obvious way first and
   * watching it come out empty: an Astro endpoint renders DURING the build, when `dist` holds no
   * twins at all — tier A/B are still being written, and tier C does not exist until
   * `astro:build:done`. So the endpoint cannot read the twins it would concatenate.
   *
   * Splitting by what each side can actually see is better than forcing one of them to do both.
   * The header needs the typed single sources (`standard.ts`, `canonical.ts`, `install_truth`,
   * the vault projection) that only a TS module can import; the body needs the finished twins
   * that only a post-build step can see. One producer each, one marker between them.
   *
   * If the marker is never replaced, the file says so in plain words rather than shipping a 2 KB
   * index wearing a corpus name — which is the exact defect this rewrite exists to fix. The
   * emitter dies loudly if the marker is missing, and gate-17 asserts the corpus is substantial,
   * so a stuck header cannot ship quietly. */
  const body = `# aDNA — Agentic DNA Knowledge Architecture (full corpus)

> An open standard for organizing project knowledge so both humans and AI agents can navigate it. Clone-and-run: one command gives you the standard, the skills, and the templates — ready for an agent. Local-first; federation is opt-in.

State is a build-time snapshot generated ${BUILD_DAY}; nothing here is live.

Every page of this site follows, in path order, as markdown. Each page is also available on its
own at the same URL with a \`.md\` suffix, or by sending \`Accept: text/markdown\` to the HTML URL.
The curated short index is at ${base('/llms.txt')}.

## Install

\`\`\`
${installTruth.one_liner}
\`\`\`

## Standard

- Version: ${STANDARD_VERSION} (${ENTITY_TYPE_COUNT} base entity types, ${CONFORMANCE_LEVELS} conformance levels)
- License: ${STANDARD_LICENSE}
- Repository: ${REPO_HTTPS}
- Published by: ${PUBLISHER}

## Key routes

- [Home](${base('/')})
- [Get started](${base('/get-started')})
- [Learn: What is aDNA?](${base('/learn/what-is-adna')}) — and the Learn hub (concepts, tutorials, comparisons)
- [How-to guides](${base('/how')}) — publishing, workshops, lattice examples
- [Patterns](${base('/patterns')})
- [Use cases](${base('/use-cases')})
- [Reference / specification](${base('/reference/specification')})
- [Glossary](${base('/glossary')})
- [The network](${base('/network')})
- [Vaults registry](${base('/vaults')})
- [Network graph](${base('/vaults/graph')})
- [Commons](${base('/commons')})
- [Community](${base('/community')})
- [Provenance & audit](${base('/provenance-audit')}) — how session records and governance files answer the five questions an audit reviewer asks
- [State of the network](${base('/state-of-the-network')}) — dated disclosure: what runs, what is operator-operated, what is not ours, what is planned
- [Canonical properties](${base('/canonical-properties')}) — every legitimate aDNA domain, repository, organization and machine surface

## Vault taxonomy (${vaultCount} vaults)

${classLines}

## Edge types (${edgeCount} cited relationships)

${edgeLines}

${CORPUS_MARKER}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
