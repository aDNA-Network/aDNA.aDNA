import type { APIRoute } from 'astro';
import installTruth from '../data/install_truth.json';
import { STANDARD_VERSION, ENTITY_TYPE_COUNT, CONFORMANCE_LEVELS, STANDARD_LICENSE } from '../data/standard';
import { REPO_HTTPS, PUBLISHER } from '../data/canonical';
import vaultsData from '../data/vaults';
import { BUILD_DAY } from '../utils/twin';

/**
 * H-3 (D3 agentic-readiness): /llms.txt — a concise, agent-readable index of the site,
 * composed from the SAME single-source data the pages use (install_truth.json, standard.ts,
 * canonical.ts, vaults.json) so it can never drift from what the site shows. Reads vaults.json,
 * never regenerates it (Honor pt19). Format follows the llmstxt.org convention. Guarded by G10.
 */
export const GET: APIRoute = ({ site }) => {
  const base = (path: string) => (site ? new URL(path, site).href : `https://adna.network${path}`);
  const vaultCount = (vaultsData as any).vault_count ?? ((vaultsData as any).vaults?.length ?? 0);
  const edgeCount = (vaultsData as any).edges?.length ?? 0;

  const body = `# aDNA — Agentic DNA Knowledge Architecture

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

## Key pages

- [What is aDNA?](${base('/learn/what-is-adna')}): the five-minute conceptual tour
- [Get started](${base('/get-started')}): set up your own workspace in one command
- [The network](${base('/network')}): how aDNA nodes federate, local-first
- [Vaults](${base('/vaults')}): the registry of ${vaultCount} vaults
- [Network graph](${base('/vaults/graph')}): the federation topology, drawn
- [Reference](${base('/reference/specification')}): the specification
- [Glossary](${base('/glossary')}): canonical terms
- [Community](${base('/community')}): how the commons is governed
- [State of the network](${base('/state-of-the-network')}): what runs, what is operator-operated, what is not ours, what is planned — dated
- [Canonical properties](${base('/canonical-properties')}): every legitimate aDNA domain, repository and machine surface
- [Full corpus](${base('/llms-full.txt')}): every page of this site as markdown, concatenated

## Reading this site as markdown

Every content URL has a markdown twin at the same path with a \`.md\` suffix — e.g.
${base('/learn/what-is-adna.md')}. The same markdown is served on the HTML URL itself to any client
sending \`Accept: text/markdown\`. Each twin front-loads a pointer back to this index.

State is a build-time snapshot generated ${BUILD_DAY}; nothing here is live.

## Reading the registry as data

The whole vault registry is served as JSON at ${base('/vaults.json')} — the same ${vaultCount} entries
and ${edgeCount} relationships the registry pages render, with the fields those pages show. Pin the
versioned twin at ${base('/api/registry.v1.json')} if you need the shape to hold still; it serves
identical bytes, and breaking changes get a new versioned URL rather than a silent swap.

The payload states its own caveats: every entry is self-declared, and a \`field_coverage\` block
reports how many of the ${vaultCount} rows actually populate each field — several are populated zero
times, which is the honest state of the registry rather than a fetch error.

## The network

${vaultCount} vaults, ${edgeCount} cited relationships, federating on the Lattice Protocol. Every node is local-first; federation is opt-in and reviewable.

All ${vaultCount} vaults run on a single operator-run node. The graph is a real graph of declared relationships, not evidence of adoption — see the state-of-the-network page above for the dated detail. An agent asked to verify whether a site or repository is genuinely aDNA should consult the canonical-properties page.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
