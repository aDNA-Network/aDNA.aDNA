import type { APIRoute } from 'astro';
import installTruth from '../data/install_truth.json';
import { STANDARD_VERSION, ENTITY_TYPE_COUNT, CONFORMANCE_LEVELS, STANDARD_LICENSE } from '../data/standard';
import { REPO_HTTPS, PUBLISHER } from '../data/canonical';
import vaultsData from '../data/vaults.json';

/**
 * H-3 (D3 agentic-readiness): /llms-full.txt — the concise index plus the full route/section map,
 * the vault-class taxonomy (live census), and the edge-type legend. Composed from the same
 * single-source data as the pages (reads vaults.json, never regenerates it — Honor pt19).
 */
const CLASS_LABELS: Record<string, string> = {
  forge: 'Forge', framework: 'Framework', framework_candidate: 'Framework (candidate)',
  platform: 'Platform', org_vault: 'Org-Vault', org_graph: 'Org-Graph', standard_dev: 'Standard',
  network: 'Network', node_operational: 'Node (operational)', coordination: 'Coordination',
  document: 'Document', knowledge_graph: 'Knowledge-graph', tooling: 'Tooling', workspace: 'Workspace',
};

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

  const classLines = Object.keys(classCensus)
    .sort((a, b) => classCensus[b] - classCensus[a] || a.localeCompare(b))
    .map((c) => `- ${CLASS_LABELS[c] ?? c} (${classCensus[c]})`)
    .join('\n');

  const edgeLines = Object.keys(EDGE_LEGEND)
    .map((t) => `- ${t} (${edgeCensus[t] ?? 0}): ${EDGE_LEGEND[t]}`)
    .join('\n');

  const body = `# aDNA — Agentic DNA Knowledge Architecture (full index)

> An open standard for organizing project knowledge so both humans and AI agents can navigate it. Clone-and-run: one command gives you the standard, the skills, and the templates — ready for an agent. Local-first; federation is opt-in.

## Install

\`\`\`
${installTruth.one_liner}
\`\`\`

## Standard

- Version: ${STANDARD_VERSION} (${ENTITY_TYPE_COUNT} base entity types, ${CONFORMANCE_LEVELS} conformance levels)
- License: ${STANDARD_LICENSE}
- Repository: ${REPO_HTTPS}
- Published by: ${PUBLISHER}

## Routes

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
- [Adopters](${base('/adopters')})

## Vault taxonomy (${vaultCount} vaults)

${classLines}

## Edge types (${edgeCount} cited relationships)

${edgeLines}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
