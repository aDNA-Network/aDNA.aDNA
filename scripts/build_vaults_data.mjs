#!/usr/bin/env node
/**
 * build_vaults_data.mjs — prebuild projection script
 *
 * Reads:
 *   - ../Home.aDNA/what/inventory/inventory_vaults.yaml (canonical inventory)
 *   - ../Home.aDNA/what/vault_cards/the_*.aDNA.md (vault_card frontmatter overlays)
 *
 * Writes:
 *   - site/src/data/vaults.json (projected data; committed)
 *   - site/src/data/vaults_graph.mmd (Mermaid DSL output; committed)
 *
 * CI/Vercel fallback: if ../Home.aDNA/ absent, log warning + skip overwrite (uses last-committed).
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
// Reads Home.aDNA directly. Was the node.aDNA symlink (→ Home.aDNA), archived in the Home shift
// completion cascade — ADR-023 contract unchanged. (coord_2026_06_02_rosetta_generator_repoint.md)
const HOME_VAULT = path.resolve(PROJECT_ROOT, '..', 'Home.aDNA');
const INVENTORY_YAML = path.join(HOME_VAULT, 'what/inventory/inventory_vaults.yaml');
const VAULT_CARDS_DIR = path.join(HOME_VAULT, 'what/vault_cards');
const OUTPUT_JSON = path.join(PROJECT_ROOT, 'site/src/data/vaults.json');
const OUTPUT_GRAPH = path.join(PROJECT_ROOT, 'site/src/data/vaults_graph.mmd');

// CI/Vercel fallback per ADR-023 Clause A
if (!fs.existsSync(HOME_VAULT)) {
  console.warn(`[build_vaults_data] WARN: ${HOME_VAULT} not present; using last-committed vaults.json. (CI/Vercel fallback per ADR-023 Clause A.)`);
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

// ── Curated edge overlay (E4 aDNANetwork adaptation seam; candidate ADR-033) ────────────────
// Loaded from PROJECT_ROOT (not Home.aDNA) so edges survive the Home-absent CI/Vercel fallback.
// Card data wins; the overlay fills empty relationship fields. Upstreams to Home.aDNA later,
// after which network_edges.yaml shrinks to nothing without a rebuild. See network_edges.yaml.
const OVERLAY_PATH = path.join(PROJECT_ROOT, 'site/src/data/network_edges.yaml');
let edgeOverlay = {};
if (fs.existsSync(OVERLAY_PATH)) {
  try {
    edgeOverlay = yaml.parse(fs.readFileSync(OVERLAY_PATH, 'utf-8')) || {};
  } catch (e) {
    console.warn(`[build_vaults_data] WARN: network_edges.yaml parse failed: ${e.message}`);
  }
}
const ARRAY_RELATIONS = ['umbrella_pillar', 'companion_vaults', 'federation_refs', 'default_partners'];
for (const v of projectedVaults) {
  const ov = edgeOverlay[v.vault] || edgeOverlay[v.vault_slug] || {};
  for (const f of ARRAY_RELATIONS) {
    const cur = v[f];
    const empty = cur == null || (Array.isArray(cur) && cur.length === 0);
    if (empty && ov[f] != null) v[f] = ov[f];
  }
  if (!v.supersedes && ov.supersedes) v.supersedes = ov.supersedes;
  if (!v.superseded_by && ov.superseded_by) v.superseded_by = ov.superseded_by;
}

// Resolve a referenced vault name → that vault's vault_slug, so edge endpoints match the node ids
// emitted in vaults_graph.mmd / consumed by VaultRelationshipBlock. Returns null when the target
// is not in the registry (edge dropped — no dangling endpoints).
const slugByName = new Map();
for (const v of projectedVaults) {
  slugByName.set(v.vault.toLowerCase(), v.vault_slug);
  slugByName.set(v.vault.toLowerCase().replace(/\.adna$/, ''), v.vault_slug);
  slugByName.set(String(v.vault_slug).toLowerCase(), v.vault_slug);
}
function resolveSlug(name) {
  if (typeof name !== 'string') return null;
  const k = name.toLowerCase();
  return slugByName.get(k) || slugByName.get(k.replace(/\.adna$/, '')) || null;
}

// Build relationship edges (5-edge taxonomy per T10). Targets resolved to real vault_slugs;
// supersedes derived from BOTH supersedes and superseded_by (successor → predecessor); deduped.
const rawEdges = [];
function pushEdge(source, target, type) {
  if (!source || !target || source === target) return;
  rawEdges.push({ source, target, type });
}
for (const v of projectedVaults) {
  for (const c of v.companion_vaults || []) pushEdge(v.vault_slug, resolveSlug(c), 'companion');
  for (const f of v.federation_refs || []) pushEdge(v.vault_slug, resolveSlug(f), 'federation');
  for (const p of v.default_partners || []) pushEdge(v.vault_slug, resolveSlug(p), 'partner');
  if (v.umbrella_pillar) {
    for (const child of [].concat(v.umbrella_pillar)) pushEdge(v.vault_slug, resolveSlug(child), 'umbrella');
  }
  if (v.supersedes) pushEdge(v.vault_slug, resolveSlug(v.supersedes), 'supersedes');
  if (v.superseded_by) pushEdge(resolveSlug(v.superseded_by), v.vault_slug, 'supersedes');
}
// De-duplicate on source|target|type, preserving first-seen order for byte-identical idempotency.
const edges = [];
const seenEdge = new Set();
for (const e of rawEdges) {
  const key = `${e.source}|${e.target}|${e.type}`;
  if (seenEdge.has(key)) continue;
  seenEdge.add(key);
  edges.push(e);
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

// Mermaid node ids must be free of dots/dashes; labels keep the real vault name. Edges are new
// in E4, so the previously-untested dotted ids are normalized here for node defs AND endpoints.
const mmId = (s) => String(s).replace(/[^a-zA-Z0-9_]/g, '_');
const nodeLine = (v, indent) => {
  const label = v.persona ? `${v.vault}<br><sub>${v.persona}</sub>` : v.vault;
  return `${indent}${mmId(v.vault_slug)}["${label}"]:::class${v.class.replace(/_/g, '')}`;
};

// Partition nodes by whether they carry any cited edge. Connected nodes render at top level; the
// unconnected set is grouped into a labelled subgraph so the honest-sparse topology reads as an
// intentional holding area ("not yet linked") rather than a broken render — the deeper edge-honesty
// fix the c155 measure cycle deferred here. (E4 c156.)
const connectedSlugs = new Set();
for (const e of edges) { if (e.source) connectedSlugs.add(e.source); if (e.target) connectedSlugs.add(e.target); }
const connectedVaults = projectedVaults.filter((v) => connectedSlugs.has(v.vault_slug));
const orphanVaults = projectedVaults.filter((v) => !connectedSlugs.has(v.vault_slug));

const mmdLines = ['flowchart LR'];
for (const v of connectedVaults) mmdLines.push(nodeLine(v, '  '));
if (orphanVaults.length) {
  mmdLines.push('');
  mmdLines.push(`  subgraph orphans["Not yet linked: ${orphanVaults.length} vaults with no cited relationship"]`);
  mmdLines.push('    direction TB');
  for (const v of orphanVaults) mmdLines.push(nodeLine(v, '    '));
  mmdLines.push('  end');
}
mmdLines.push('');

// Edges (between connected nodes). Track the LINK index of each supersedes edge (emitted-link
// counter, not array index — robust to any skipped edge) so it can be given a distinct stroke below.
let linkIdx = 0;
const supersedesIdx = [];
for (const e of edges) {
  if (!e.source || !e.target) continue;
  const arrow = edgeStyles[e.type] || '-->';
  mmdLines.push(`  ${mmId(e.source)} ${arrow} ${mmId(e.target)}`);
  if (e.type === 'supersedes') supersedesIdx.push(linkIdx);
  linkIdx++;
}
// Distinct supersedes stroke: long-dash + thicker, deliberately NOT a colour override — this keeps
// the island's theme-aware lineColor (AA on both the dark and light canvases; a fixed colour can't
// clear 3:1 graphical contrast on both) while reading clearly apart from companion's fine dash. (E4 c156.)
if (supersedesIdx.length) {
  mmdLines.push(`  linkStyle ${supersedesIdx.join(',')} stroke-width:2.5px,stroke-dasharray:10 6`);
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
