#!/usr/bin/env node
/**
 * build_vaults_data.mjs — prebuild projection script
 *
 * Reads:
 *   - ../node.aDNA/what/inventory/inventory_vaults.yaml (canonical inventory)
 *   - ../node.aDNA/what/vault_cards/the_*.aDNA.md (vault_card frontmatter overlays)
 *
 * Writes:
 *   - site/src/data/vaults.json (projected data; committed)
 *   - site/src/data/vaults_graph.mmd (Mermaid DSL output; committed)
 *
 * CI/Vercel fallback: if ../node.aDNA/ absent, log warning + skip overwrite (uses last-committed).
 *
 * Idempotency: byte-identical output on same inputs.
 *
 * Per ADR-023 (Registry Data-Projection Contract).
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import yaml from 'yaml';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const NODE_VAULT = path.resolve(PROJECT_ROOT, '..', 'node.aDNA');
const INVENTORY_YAML = path.join(NODE_VAULT, 'what/inventory/inventory_vaults.yaml');
const VAULT_CARDS_DIR = path.join(NODE_VAULT, 'what/vault_cards');
const OUTPUT_JSON = path.join(PROJECT_ROOT, 'site/src/data/vaults.json');
const OUTPUT_GRAPH = path.join(PROJECT_ROOT, 'site/src/data/vaults_graph.mmd');

// CI/Vercel fallback per ADR-023 Clause A
if (!fs.existsSync(NODE_VAULT)) {
  console.warn(`[build_vaults_data] WARN: ${NODE_VAULT} not present; using last-committed vaults.json. (CI/Vercel fallback per ADR-023 Clause A.)`);
  process.exit(0);
}
if (!fs.existsSync(INVENTORY_YAML)) {
  console.warn(`[build_vaults_data] WARN: ${INVENTORY_YAML} not present; using last-committed vaults.json.`);
  process.exit(0);
}

// Parse canonical inventory
const inventoryRaw = fs.readFileSync(INVENTORY_YAML, 'utf-8');
const inventory = yaml.parse(inventoryRaw);
const inventoryVaults = inventory.vaults || [];

// Compute canonical SHA for drift detection (ADR-023 Clause C)
const inventorySha = crypto.createHash('sha256').update(inventoryRaw).digest('hex').slice(0, 16);

// Parse per-vault frontmatter overlays
function parseFrontmatter(content) {
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) return {};
  try {
    return yaml.parse(fmMatch[1]) || {};
  } catch (e) {
    console.warn(`[build_vaults_data] WARN: frontmatter parse failed: ${e.message}`);
    return {};
  }
}

const vaultCards = {};
if (fs.existsSync(VAULT_CARDS_DIR)) {
  for (const file of fs.readdirSync(VAULT_CARDS_DIR)) {
    if (!file.startsWith('the_') || !file.endsWith('.md')) continue;
    const slug = file.replace(/^the_/, '').replace(/\.md$/, '');
    const content = fs.readFileSync(path.join(VAULT_CARDS_DIR, file), 'utf-8');
    vaultCards[slug] = parseFrontmatter(content);
  }
}

function slugOf(name) {
  if (typeof name !== 'string') return null;
  return name.toLowerCase().replace(/\.adna$/, '').replace(/[^a-z0-9_-]/g, '_');
}

// Merge inventory + vault_card overlay → projected vault entry
function projectVault(invVault) {
  const slug = invVault.name; // canonical name e.g. "aDNA.aDNA"
  const card = vaultCards[slug] || {};
  return {
    // Identity (always from inventory; overlay from card if present)
    vault: slug,
    vault_slug: card.vault_slug || slugOf(slug),
    display_name: card.display_name || invVault.display_name || slug.replace(/\.aDNA$/, ''),
    full_name: card.full_name || null,
    tagline: card.tagline || null,

    // Class + persona (inventory primary; card overlay)
    class: card.class || invVault.class || 'unknown',
    subclass: card.subclass || null,
    persona: card.persona || invVault.persona || null,
    persona_archetype: card.persona_archetype || null,

    // Status + lifecycle
    status: card.status || invVault.health || 'unknown',
    lifecycle_stage: card.lifecycle_stage || null,
    current_phase: card.current_phase || null,

    // Headline state
    headline_mission: card.headline_mission || null,
    headline_mission_state: card.headline_mission_state || null,
    recent_closed: card.recent_closed || [],
    headline_adrs: card.headline_adrs || [],

    // Cross-vault relationships (5-edge taxonomy)
    umbrella_pillar: card.umbrella_pillar || null,
    companion_vaults: card.companion_vaults || [],
    federation_refs: card.federation_refs || [],
    supersedes: card.supersedes || null,
    superseded_by: card.superseded_by || null,
    default_partners: card.default_partners || [],

    // Navigation
    github_url: card.github_url || null,
    docs_site_url: card.docs_site_url || null,
    canonical_governance: card.canonical_governance || null,

    // Provenance
    last_synced: card.last_synced || null,
    note: invVault.note || null,

    // Schema metadata
    schema_version: card.schema_version || '0.1',
    card_present: !!vaultCards[slug],
  };
}

const projectedVaults = inventoryVaults.map(projectVault);
projectedVaults.sort((a, b) => a.class.localeCompare(b.class) || a.vault.localeCompare(b.vault));

// Build relationship edges (5-edge taxonomy per T10)
const edges = [];
for (const v of projectedVaults) {
  for (const c of v.companion_vaults || []) {
    edges.push({ source: v.vault_slug, target: slugOf(c), type: 'companion' });
  }
  for (const f of v.federation_refs || []) {
    edges.push({ source: v.vault_slug, target: slugOf(f), type: 'federation' });
  }
  for (const p of v.default_partners || []) {
    edges.push({ source: v.vault_slug, target: slugOf(p), type: 'partner' });
  }
  if (v.umbrella_pillar) {
    for (const child of [].concat(v.umbrella_pillar)) {
      edges.push({ source: v.vault_slug, target: slugOf(child), type: 'umbrella' });
    }
  }
  if (v.supersedes) {
    edges.push({ source: v.vault_slug, target: slugOf(v.supersedes), type: 'supersedes' });
  }
}

// Project final JSON
const projectionPayload = {
  schema_version: '0.2',
  source_inventory_sha: inventorySha,
  generated_at: new Date().toISOString().slice(0, 10), // date-only for byte-identical idempotency
  vault_count: projectedVaults.length,
  vaults: projectedVaults,
  edges: edges,
};

// Write JSON (sorted keys for idempotency)
function sortKeys(obj) {
  if (Array.isArray(obj)) return obj.map(sortKeys);
  if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).sort().reduce((acc, k) => ((acc[k] = sortKeys(obj[k])), acc), {});
  }
  return obj;
}

const jsonOutput = JSON.stringify(sortKeys(projectionPayload), null, 2) + '\n';
fs.mkdirSync(path.dirname(OUTPUT_JSON), { recursive: true });
fs.writeFileSync(OUTPUT_JSON, jsonOutput);
console.log(`[build_vaults_data] wrote ${OUTPUT_JSON} (${projectedVaults.length} vaults; ${edges.length} edges; sha ${inventorySha})`);

// Build Mermaid DSL output (vaults_graph.mmd)
const classColors = {
  forge: '#e07798',
  framework: '#16a766',
  framework_candidate: '#a0eac9',
  platform: '#4a86e8',
  org_vault: '#ffad47',
  standard_dev: '#fad165',
  org_graph: '#a479e2',
  network: '#fb4c2f',
  node_operational: '#43d692',
  coordination: '#0d3b44',
  document: '#cccccc',
  knowledge_graph: '#98d7e4',
  tooling: '#b694e8',
  workspace: '#efefef',
  superseded: '#666666',
};

const edgeStyles = {
  umbrella: '==>',       // thick solid (umbrella inheritance)
  companion: '-.->',     // dashed (sibling pair)
  federation: '-->',     // solid arrow (forge/framework consumer)
  partner: '--o',        // circle-end (platform default-partner)
  supersedes: '-.->|s|', // dashed labeled 's' (lifecycle)
};

const mmdLines = ['flowchart LR'];
for (const v of projectedVaults) {
  const label = v.persona ? `${v.vault}<br><sub>${v.persona}</sub>` : v.vault;
  mmdLines.push(`  ${v.vault_slug}["${label}"]:::class${v.class.replace(/_/g, '')}`);
}
mmdLines.push('');
for (const e of edges) {
  if (!e.source || !e.target) continue;
  const arrow = edgeStyles[e.type] || '-->';
  mmdLines.push(`  ${e.source} ${arrow} ${e.target}`);
}
mmdLines.push('');
for (const [cls, color] of Object.entries(classColors)) {
  mmdLines.push(`  classDef class${cls.replace(/_/g, '')} fill:${color},stroke:#333,color:#000`);
}

const mmdOutput = mmdLines.join('\n') + '\n';
fs.writeFileSync(OUTPUT_GRAPH, mmdOutput);
console.log(`[build_vaults_data] wrote ${OUTPUT_GRAPH} (${edges.length} edges)`);

// Exit 0 (success)
process.exit(0);
