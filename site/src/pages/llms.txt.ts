import type { APIRoute } from 'astro';
import installTruth from '../data/install_truth.json';
import { STANDARD_VERSION, ENTITY_TYPE_COUNT, CONFORMANCE_LEVELS, STANDARD_LICENSE } from '../data/standard';
import { REPO_HTTPS, PUBLISHER } from '../data/canonical';
import vaultsData from '../data/vaults.json';

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
- [Full index](${base('/llms-full.txt')}): every route, the vault taxonomy, and the edge legend

## The network

${vaultCount} vaults, ${edgeCount} cited relationships, federating on the Lattice Protocol. Every node is local-first; federation is opt-in and reviewable.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
