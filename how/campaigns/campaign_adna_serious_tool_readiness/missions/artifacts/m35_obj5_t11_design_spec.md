---
type: design_spec
artifact_type: design_spec
spec_class: proposed_patch
mission_id: mission_adna_str_p3_m35_home_polish_and_per_vault_info_pages
campaign: campaign_adna_serious_tool_readiness
phase: 3
mission_number: 3.5
obj: 5
track: T11
finding_id: [F-S2-6-11]
status: proposed   # design at P3; data-projection contract ratifies as ADR-023 (draft S2 → accepted S3); cross-vault partner-site template upstream-promotion at v8 P6; local apply lands at M3.5 Obj 9 populate-apply pass
upstream_target: ".adna/ (LatticeProtocol/aDNA@27e6395; v7.0 frozen) — data-projection contract upstream-promotion via cross-vault partner-site template pattern at v8 P6. Local landing at M3.5 Obj 9: aDNA.aDNA/scripts/build_vaults_data.mjs + aDNA.aDNA/site/src/data/{vaults.json, vaults.schema.json, vaults_graph.mmd} + aDNA.aDNA/site/src/pages/vaults/{index, [slug], graph}.astro + 3 NEW components."
upstream_state_at_authoring: "v7.0 frozen at 27e6395"
created: 2026-05-24
updated: 2026-05-24
last_edited_by: agent_stanley
tags: [design_spec, proposed_patch, m3_5, obj_5, t11, astro_vaults_registry_surface, faceted_index, per_vault_detail, mermaid_relationship_graph, five_edge_types, nine_class_colored_node_styles, build_time_projection_script, build_vaults_data_mjs, vaults_json, vaults_schema_json, vaults_graph_mmd, ci_vercel_fallback, package_json_prebuild_wire, adr_023_consumer, six_section_structure_10th_canonical_instance, t8_forward_reference_stub_post_graduation_3rd_consumer, v8_p6_propagation_queue_cross_vault_partner_site, rosetta, batteries_included]
---

# T11 Design Spec — Astro `/vaults/` registry surface (faceted index + per-vault detail + Mermaid graph)

> **What this is**: a proposed-patch artifact specifying the **Astro `/vaults/` registry surface** at `aDNA.aDNA/site/src/pages/vaults/` (3 routes: faceted index + per-vault detail via `getStaticPaths()` + Mermaid relationship graph) + 3 supporting section components + 1 build-time projection script + 1 committed JSON data file + 1 JSON Schema + 1 Mermaid DSL output + `package.json` prebuild wire. Data-projection contract ratifies as ADR-023 (M3.5 Obj 9; draft S2 → accepted S3 per Campaign SO #14 in-phase exception clause).
>
> **Design-at-P3, propagation-at-P6 — 4th survival test continued**. Cross-vault propagation candidate: partner-site templates absorb the projection script + Astro routes pattern at v8 P6 for SiteForge.aDNA Day-1 + LatticeLabs.aDNA + LatticeNetwork.aDNA + RareHarness.aDNA + WilhelmAI.aDNA + CakeHealth.aDNA + SuperLeague.aDNA cross-vault adoption.
>
> **First consumer of T8 forward-reference-stub discipline POST-GRADUATION (3rd consumer at M3.5)**: T9 + T10 were 1st + 2nd; T11 is 3rd. Reinforces M3.4 graduation.
>
> **Standing Order #8 self-reference**: T11 projection script reads `node.aDNA/what/vault_cards/the_*.aDNA.md` frontmatter — the very cards T10 schema defines + the very rendering pattern T9 Bases gallery uses. T9 + T10 + T11 are co-equal consumers of the same data; the Astro registry is the cross-vault projection while the Bases gallery is the Obsidian-native projection.

## 1. Finding statement (F-S2-6-11)

`aDNA.aDNA/site/` (the public docs site at `adna-docs.vercel.app`, Astro 6.1.3) has 117 pages spanning `learn/`, `patterns/`, `glossary/`, `adopters/`, `researchers/`, `enterprise/`, `educators/`, `compliance/`, `use-cases/`, `reference/`, `community/`, `how/`, `changelog`, `get-started` — but ZERO `/vaults/` or `/registry/` route. The 31-vault lattice is invisible to adopters arriving at the docs site; the only public-facing visibility into the lattice is the workspace CLAUDE.md table on github (not the docs site).

> **F-S2-6-11 (lattice invisible to docs-site audience; no /vaults/ route; cross-vault data sourcing precedent missing; load-bearing for north-star UX goal)**: an adopter arriving at adna-docs.vercel.app has no way to discover the 31-vault lattice + persona relationships + cross-vault graph. The canonical inventory at `node.aDNA/what/inventory/inventory_vaults.yaml` is local-only (node.aDNA is local-by-default per workspace SR #4). The vault_cards directory at node.aDNA is the rich data source — but vault_cards are markdown, not JSON; not consumable by Astro static site generation directly. No precedent existed for the Astro site reading data from a sibling vault directory (`node.aDNA/`) at build time. The Astro site MUST self-contain at build time (Vercel CI build environment may not have the sibling `node.aDNA/` directory available; project-root scripts that read sibling paths must handle this case gracefully).
>
> — [[../mission_adna_str_p3_m35_home_polish_and_per_vault_info_pages.md|M3.5 mission spec]] §Current State + Operator AskUserQuestion Q3 = Full registry surface

**Why this is the right scope for T11**: T11 is the projection primitive — answers *"how does cross-vault data reach a static-site build that may not have the source vault present?"* The projection runs at build-time (prebuild hook), reads canonical YAML + vault_card frontmatter overlays, writes a committed JSON data file that Astro `getStaticPaths()` consumes. CI/Vercel fallback uses the last-committed JSON if the source vault is absent. The contract is ADR-023 (M3.5 Obj 9; draft at S2; accepted at S3). T11 ships the script + the routes + the components; ADR-023 ratifies the contract.

## 2. Root cause

Three layered causes explain why the registry surface doesn't exist today:

1. **No precedent for cross-vault data sourcing in Astro static-site builds**. The aDNA.aDNA site at `aDNA.aDNA/site/` is structurally self-contained (`src/content/` for content-collections, `src/pages/` for routes). No existing pattern for reading from a sibling vault directory. Inventing the pattern is M3.5's scope.

2. **Vault inventory + vault_cards live in node.aDNA (local-by-default)**. The canonical source-of-truth (`node.aDNA/what/inventory/inventory_vaults.yaml` + `node.aDNA/what/vault_cards/the_*.aDNA.md`) is in a different vault. Vercel CI may not have node.aDNA cloned. The projection script MUST run locally before commit; committed JSON IS the registry source-of-truth for Astro builds. CI failure-mode: if node.aDNA absent, script reports warning + Astro uses last-committed JSON.

3. **5-edge cross-vault relationship taxonomy is new (T10 scope)**. The relationship graph at `/vaults/graph` consumes the 5-edge taxonomy from T10's `umbrella_pillar` / `companion_vaults` / `federation_refs` / `default_partners` / `supersedes` fields. Until T10 names the taxonomy, the graph has no edge data. T11 + T10 are tightly coupled; T11 depends on T10 schema being landed at this same S2 session.

The compounding produces today's state: the lattice has no public-facing registry; cross-vault data has no projection pattern; relationship taxonomy is new. T11 closes this by (a) the projection script with CI fallback, (b) 3 Astro routes consuming the projected JSON, (c) 3 section components rendering the cards + facets + relationship-block, (d) ADR-023 ratifying the data-projection contract.

## 3. Option matrix

| # | Option | Diff surface | Operator surface | Behavior change | Failure modes / Trade-offs |
|---|---|---|---|---|---|
| 1 | **Build-time projection script reading both YAML + vault_card frontmatter overlays + writing committed JSON** (RECOMMENDED). `aDNA.aDNA/scripts/build_vaults_data.mjs` reads `../node.aDNA/what/inventory/inventory_vaults.yaml` + iterates `../node.aDNA/what/vault_cards/the_*.aDNA.md` for frontmatter overlay; writes `aDNA.aDNA/site/src/data/vaults.json` + `vaults_graph.mmd`; idempotent (byte-identical output on same inputs). CI/Vercel fallback: if `../node.aDNA/` absent, log warning + skip overwrite (Astro uses last-committed `vaults.json`). Wire via `package.json` `prebuild` script. | NEW: 1 script + 3 data files + 3 Astro routes + 3 components + 1 package.json edit | Operator runs `npm run sync:vaults` locally OR `npm run build` triggers prebuild automatically; commits the regenerated JSON; Vercel deploy uses committed JSON | **Trade-offs**: requires committing generated JSON (slight redundancy with canonical YAML; mitigated by single-source-of-truth pointer in JSON frontmatter). Vercel build behavior: prebuild script attempts read; absent siblings cause warning not failure. **Acceptable**. |
| 2 | **Symlink `node.aDNA/what/` into `aDNA.aDNA/site/src/`** (rejected). Filesystem symlink; Astro reads directly from sibling. | Symlink in src/ | None at operator-side | Astro reads node.aDNA directly | **Rejected**: `src/` must be self-contained for Vercel CI + external contributors cloning aDNA.aDNA without node.aDNA. Symlinks don't survive CI checkouts; symlinks complicate git history. Breaks the self-contained-build property. |
| 3 | **Git submodule for node.aDNA** (rejected). Add node.aDNA as submodule under aDNA.aDNA. | submodule entry + `.gitmodules` | Operator manages submodule state | Astro reads submodule path | **Rejected**: overkill for in-workspace cross-vault sourcing. node.aDNA is local-by-default per workspace SR #4 (not pushed to remote without operator opt-in); making it a submodule of aDNA.aDNA breaks the local-by-default property + creates remote dependency where none should exist. |
| 4 | **Hand-authored mirror at `aDNA.aDNA/what/registry/vaults.json` + separate sync skill** (rejected). Manual JSON mirror; sync skill updates from node.aDNA on demand. | Mirror JSON file + skill | Operator runs sync skill explicitly | Astro reads mirror | **Rejected**: double-source-of-truth (canonical YAML at node.aDNA vs mirror JSON at aDNA.aDNA). Drift risk. Sync skill IS the projection script in disguise; cleaner to formalize as prebuild script with idempotency contract (Option 1). |
| 5 | **Runtime fetch from a federation endpoint** (rejected). Astro client-side fetches vault list from a server; no build-time projection. | NEW endpoint + client-side fetch | Server hosting | Cards render dynamically client-side | **Rejected**: violates static-site discipline; Vercel deploy is static; adopters with JS disabled see nothing. No server today. Future federation surface may add runtime endpoint as opt-in for live data; M3.5 stays build-time. |

## 4. Recommendation

**Option 1 — Build-time projection script + committed JSON + 3 Astro routes + 3 components + CI/Vercel fallback** — recommended. Ratified by ADR-023 (M3.5 Obj 9).

### Rationale

- **Single-source-of-truth preserved**: `node.aDNA/what/inventory/inventory_vaults.yaml` is the canonical inventory; `node.aDNA/what/vault_cards/the_*.aDNA.md` are canonical per-vault frontmatter. JSON is a projection — never edited by hand; regenerated by script.
- **Self-contained Astro build**: `aDNA.aDNA/site/src/data/vaults.json` is committed (build-data not content-collection per Astro convention). Vercel build does NOT need node.aDNA present; it uses the committed JSON.
- **Idempotency contract**: script produces byte-identical output on same inputs. Drift detection: running `npm run sync:vaults` against unchanged sources produces a clean `git diff` (empty); changes produce explicit diff for operator review.
- **CI/Vercel fallback**: if `../node.aDNA/` absent, script logs warning + skips overwrite + exits 0. Vercel build proceeds with last-committed JSON. Local dev always has node.aDNA available; CI has the committed JSON.
- **3 routes split by concern**: `/vaults/` (index — faceted overview with hero + class chips); `/vaults/[slug]/` (per-vault detail via `getStaticPaths()` over `vaults.json`); `/vaults/graph/` (full Mermaid relationship graph using existing `MermaidDiagram.astro` island). Each route is a single concern; each is independently linkable.
- **3 section components**: `VaultCard.astro` (card render reused across index + detail), `VaultClassFacet.astro` (filter chip), `VaultRelationshipBlock.astro` (inline mini-Mermaid for per-vault detail). Composable; reusable across future cross-vault registry consumers.
- **5-edge taxonomy reads from T10**: graph.astro reads `vaults_graph.mmd` which the projection script generates from T10 vault_card `umbrella_pillar` / `companion_vaults` / `federation_refs` / `default_partners` / `supersedes` fields. 5 distinct line styles (dashed / dotted / solid / thick-solid / cross-hatched) + 9 class-colored node fills.
- **Cross-vault propagation candidate**: the projection pattern + Astro routes + components are the v8 P6 propagation candidate for SiteForge.aDNA partner-site templates (Day-1 consumer at v8 P6) + LatticeLabs.aDNA / LatticeNetwork.aDNA / etc. ADR-023 codifies the contract.

### Acceptance smoke test

1. **`cd aDNA.aDNA/site && npm run build` exits 0** — Astro build succeeds; `dist/vaults/index.html` + `dist/vaults/<slug>/index.html` for each vault + `dist/vaults/graph/index.html` all generated.
2. **`node aDNA.aDNA/scripts/build_vaults_data.mjs` is idempotent** — second run produces byte-identical `vaults.json` + `vaults_graph.mmd` (verified via `git diff` clean).
3. **`getStaticPaths()` returns ≥ 30 entries** — confirmed via build output (one per vault).
4. **Operator browses `/vaults/`** at `npm run preview` — faceted index renders; class chips filter; cards link to detail pages.
5. **Operator browses `/vaults/<sample>/`** — per-vault detail renders hero + persona blurb + relationships block (inline Mermaid mini-graph) + headline ADRs + recent missions + quick links.
6. **Operator browses `/vaults/graph/`** — full Mermaid relationship graph renders ≥ 30 nodes + ≥ 30 edges within ~2s headless Chromium.
7. **CI fallback**: temporarily `mv ../node.aDNA /tmp/node.aDNA-test`; run `npm run build`; confirm warning logged + build succeeds with last-committed `vaults.json`; restore directory.

## 5. Literal patch text

### Patch A — `aDNA.aDNA/scripts/build_vaults_data.mjs` (NEW projection script)

```javascript
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

// Merge inventory + vault_card overlay → projected vault entry
function projectVault(invVault) {
  const slug = invVault.name; // canonical name e.g. "aDNA.aDNA"
  const card = vaultCards[slug] || {};
  return {
    // Identity (always from inventory; overlay from card if present)
    vault: slug,
    vault_slug: card.vault_slug || slug.toLowerCase().replace(/\.adna$/, ''),
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

function slugOf(name) {
  if (typeof name !== 'string') return null;
  return name.toLowerCase().replace(/\.adna$/, '').replace(/[^a-z0-9_-]/g, '_');
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
  const color = classColors[v.class] || '#cccccc';
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
```

### Patch B — `aDNA.aDNA/site/src/data/vaults.schema.json` (NEW JSON Schema)

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "vaults.json — registry data projection",
  "description": "Generated by aDNA.aDNA/scripts/build_vaults_data.mjs. Canonical contract per ADR-023.",
  "type": "object",
  "required": ["schema_version", "vault_count", "vaults", "edges"],
  "properties": {
    "schema_version": { "type": "string", "const": "0.2" },
    "source_inventory_sha": { "type": "string", "pattern": "^[a-f0-9]{16}$" },
    "generated_at": { "type": "string", "format": "date" },
    "vault_count": { "type": "integer", "minimum": 0 },
    "vaults": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["vault", "vault_slug", "display_name", "class", "status"],
        "properties": {
          "vault": { "type": "string" },
          "vault_slug": { "type": "string", "pattern": "^[a-z0-9_-]+$" },
          "display_name": { "type": "string" },
          "full_name": { "type": ["string", "null"] },
          "tagline": { "type": ["string", "null"] },
          "class": { "type": "string", "enum": ["forge", "framework", "framework_candidate", "platform", "org_vault", "standard_dev", "org_graph", "network", "node_operational", "coordination", "document", "knowledge_graph", "tooling", "workspace", "superseded", "unknown"] },
          "subclass": { "type": ["string", "null"] },
          "persona": { "type": ["string", "null"] },
          "persona_archetype": { "type": ["string", "null"] },
          "status": { "type": "string" },
          "lifecycle_stage": { "type": ["string", "null"] },
          "current_phase": { "type": ["string", "null"] },
          "headline_mission": { "type": ["string", "null"] },
          "headline_mission_state": { "type": ["string", "null"] },
          "recent_closed": { "type": "array", "items": { "type": "string" } },
          "headline_adrs": { "type": "array", "items": { "type": "string" } },
          "umbrella_pillar": { "type": ["array", "string", "null"] },
          "companion_vaults": { "type": "array", "items": { "type": "string" } },
          "federation_refs": { "type": "array", "items": { "type": "string" } },
          "supersedes": { "type": ["string", "null"] },
          "superseded_by": { "type": ["string", "null"] },
          "default_partners": { "type": "array", "items": { "type": "string" } },
          "github_url": { "type": ["string", "null"] },
          "docs_site_url": { "type": ["string", "null"] },
          "canonical_governance": { "type": ["string", "null"] },
          "last_synced": { "type": ["string", "null"] },
          "note": { "type": ["string", "null"] },
          "schema_version": { "type": "string" },
          "card_present": { "type": "boolean" }
        }
      }
    },
    "edges": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["source", "target", "type"],
        "properties": {
          "source": { "type": ["string", "null"] },
          "target": { "type": ["string", "null"] },
          "type": { "type": "string", "enum": ["umbrella", "companion", "federation", "partner", "supersedes"] }
        }
      }
    }
  }
}
```

### Patch C — `aDNA.aDNA/site/src/pages/vaults/index.astro` (NEW faceted index)

```astro
---
import Layout from '../../layouts/Layout.astro';
import VaultCard from '../../components/sections/VaultCard.astro';
import VaultClassFacet from '../../components/sections/VaultClassFacet.astro';
import vaultsData from '../../data/vaults.json';

const { vaults, vault_count, edges } = vaultsData;

// Group by class for facet display
const classGroups = vaults.reduce((acc, v) => {
  (acc[v.class] = acc[v.class] || []).push(v);
  return acc;
}, {});

const classOrder = ['standard_dev', 'framework', 'forge', 'platform', 'org_vault', 'org_graph', 'network', 'node_operational', 'coordination', 'document', 'knowledge_graph', 'tooling', 'workspace', 'superseded'];
const orderedClasses = classOrder.filter(c => c in classGroups);
---

<Layout title="The Lattice — vault registry" description={`Browse the ${vault_count}-vault aDNA lattice — personae, classes, cross-vault relationships`}>
  <main class="vaults-index">
    <section class="vaults-hero">
      <h1>The Lattice</h1>
      <p class="vaults-tagline">
        {vault_count} vaults across {orderedClasses.length} classes — each with its own persona, governance, and place in the cross-vault graph.
      </p>
      <p class="vaults-cta">
        <a href="/vaults/graph">View the relationship graph &rarr;</a>
      </p>
    </section>

    <section class="vaults-facets">
      <h2>Browse by class</h2>
      <div class="facet-chips">
        {orderedClasses.map(cls => (
          <VaultClassFacet vaultClass={cls} count={classGroups[cls].length} />
        ))}
      </div>
    </section>

    {orderedClasses.map(cls => (
      <section class="vaults-class-section" id={`class-${cls}`}>
        <h2>{cls.replace(/_/g, ' ')} <span class="class-count">({classGroups[cls].length})</span></h2>
        <div class="vaults-grid">
          {classGroups[cls].map(v => (
            <VaultCard vault={v} />
          ))}
        </div>
      </section>
    ))}
  </main>
</Layout>

<style>
  .vaults-hero { padding: 2rem 0; text-align: center; }
  .vaults-tagline { font-size: 1.2rem; max-width: 60ch; margin: 1rem auto; }
  .vaults-facets { padding: 2rem 0; }
  .facet-chips { display: flex; flex-wrap: wrap; gap: 0.5rem; }
  .vaults-class-section { margin: 2rem 0; }
  .vaults-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; }
  .class-count { font-size: 0.85em; color: #666; }
</style>
```

### Patch D — `aDNA.aDNA/site/src/pages/vaults/[slug].astro` (NEW per-vault detail via getStaticPaths)

```astro
---
import Layout from '../../layouts/Layout.astro';
import VaultRelationshipBlock from '../../components/sections/VaultRelationshipBlock.astro';
import vaultsData from '../../data/vaults.json';

export function getStaticPaths() {
  return vaultsData.vaults.map(v => ({
    params: { slug: v.vault_slug },
    props: { vault: v, allVaults: vaultsData.vaults, allEdges: vaultsData.edges },
  }));
}

const { vault, allVaults, allEdges } = Astro.props;
---

<Layout
  title={`${vault.display_name} — ${vault.persona || vault.class}`}
  description={vault.tagline || vault.note || `aDNA vault: ${vault.display_name}`}
>
  <main class="vault-detail">
    <section class="vault-hero">
      <p class="vault-breadcrumb"><a href="/vaults/">&larr; The Lattice</a></p>
      <h1>{vault.display_name}</h1>
      {vault.tagline && <p class="vault-tagline">{vault.tagline}</p>}
      <p class="vault-meta">
        <strong>Persona</strong> {vault.persona || '—'} ·
        <strong>Class</strong> {vault.class} ·
        <strong>Status</strong> {vault.status}
        {vault.current_phase && <> · <strong>Phase</strong> {vault.current_phase}</>}
      </p>
    </section>

    {vault.persona_archetype && (
      <section class="vault-persona">
        <h2>Persona</h2>
        <p>{vault.persona_archetype}</p>
      </section>
    )}

    {vault.headline_mission && (
      <section class="vault-focus">
        <h2>Current focus</h2>
        <p>{vault.headline_mission} <span class={`mission-state state-${vault.headline_mission_state}`}>{vault.headline_mission_state}</span></p>
      </section>
    )}

    <VaultRelationshipBlock vault={vault} allEdges={allEdges} allVaults={allVaults} />

    {vault.headline_adrs && vault.headline_adrs.length > 0 && (
      <section class="vault-adrs">
        <h2>Headline ADRs</h2>
        <ul>
          {vault.headline_adrs.map(adr => <li><code>{adr}</code></li>)}
        </ul>
      </section>
    )}

    {vault.recent_closed && vault.recent_closed.length > 0 && (
      <section class="vault-missions">
        <h2>Recent missions</h2>
        <ul>
          {vault.recent_closed.map(m => <li>{m}</li>)}
        </ul>
      </section>
    )}

    <section class="vault-links">
      <h2>Quick links</h2>
      <ul>
        {vault.github_url && <li><a href={vault.github_url}>GitHub &rarr;</a></li>}
        {vault.docs_site_url && <li><a href={vault.docs_site_url}>Docs site &rarr;</a></li>}
        {vault.canonical_governance && <li>Governance: <code>{vault.canonical_governance}</code></li>}
      </ul>
    </section>

    {vault.note && (
      <section class="vault-note">
        <h2>On the lattice</h2>
        <p>{vault.note}</p>
      </section>
    )}
  </main>
</Layout>

<style>
  .vault-detail { max-width: 80ch; margin: 0 auto; padding: 2rem 1rem; }
  .vault-breadcrumb { color: #666; }
  .vault-tagline { font-size: 1.2rem; font-style: italic; color: #444; }
  .vault-meta { padding: 0.5rem 0; color: #555; }
  .mission-state { padding: 0.1rem 0.5rem; border-radius: 0.25rem; font-size: 0.85em; }
  .state-in_progress { background: #fef1d1; }
  .state-completed { background: #b9e4d0; }
  .state-planned { background: #e7e7e7; }
</style>
```

### Patch E — `aDNA.aDNA/site/src/pages/vaults/graph.astro` (NEW Mermaid relationship graph)

```astro
---
import Layout from '../../layouts/Layout.astro';
import MermaidDiagram from '../../components/islands/MermaidDiagram.astro';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const graphPath = path.resolve(__dirname, '../../data/vaults_graph.mmd');
const chart = fs.existsSync(graphPath) ? fs.readFileSync(graphPath, 'utf-8') : 'flowchart LR\n  empty["(no data)"]';
---

<Layout title="The Lattice — relationship graph" description="Cross-vault relationships across the 31-vault aDNA lattice — umbrella, companion, federation, partner, supersedes edges.">
  <main class="vaults-graph">
    <section class="vaults-graph-hero">
      <p class="vault-breadcrumb"><a href="/vaults/">&larr; The Lattice</a></p>
      <h1>Relationship graph</h1>
      <p>
        Edges: <strong>umbrella</strong> (org_vault → org_graph children) ·
        <strong>companion</strong> (sibling persona-pair) ·
        <strong>federation</strong> (forge/framework consumer wrapper) ·
        <strong>partner</strong> (platform default-partner) ·
        <strong>supersedes</strong> (lifecycle).
      </p>
    </section>

    <MermaidDiagram chart={chart} caption="aDNA cross-vault relationship graph" />
  </main>
</Layout>

<style>
  .vaults-graph { max-width: 100%; padding: 2rem 1rem; }
  .vaults-graph-hero { max-width: 80ch; margin: 0 auto 2rem; }
</style>
```

### Patch F — Section components (3 NEW)

**`aDNA.aDNA/site/src/components/sections/VaultCard.astro`**:

```astro
---
interface Props { vault: any; }
const { vault } = Astro.props;
---

<article class={`vault-card class-${vault.class}`}>
  <h3>
    <a href={`/vaults/${vault.vault_slug}/`}>{vault.display_name}</a>
  </h3>
  {vault.persona && <p class="vault-card-persona">{vault.persona}</p>}
  {vault.tagline && <p class="vault-card-tagline">{vault.tagline}</p>}
  <p class="vault-card-meta">
    <span class={`vault-status status-${vault.status}`}>{vault.status}</span>
    {vault.current_phase && <span class="vault-phase">{vault.current_phase}</span>}
  </p>
</article>

<style>
  .vault-card { padding: 1rem; border: 1px solid #ddd; border-radius: 0.5rem; transition: border-color 0.15s; }
  .vault-card:hover { border-color: #4a86e8; }
  .vault-card h3 a { text-decoration: none; color: inherit; }
  .vault-card-persona { color: #555; font-size: 0.9em; margin: 0.25rem 0; }
  .vault-card-tagline { font-style: italic; color: #444; margin: 0.5rem 0; }
  .vault-card-meta { font-size: 0.8em; margin-top: 0.5rem; }
  .vault-status { padding: 0.1rem 0.4rem; border-radius: 0.2rem; }
  .status-active { background: #b9e4d0; }
  .status-genesis { background: #fef1d1; }
  .status-pending { background: #e7e7e7; }
  .status-superseded { background: #cccccc; }
</style>
```

**`aDNA.aDNA/site/src/components/sections/VaultClassFacet.astro`**:

```astro
---
interface Props { vaultClass: string; count: number; }
const { vaultClass, count } = Astro.props;
---

<a href={`#class-${vaultClass}`} class={`facet-chip facet-${vaultClass}`}>
  {vaultClass.replace(/_/g, ' ')} <span class="facet-count">{count}</span>
</a>

<style>
  .facet-chip { display: inline-block; padding: 0.4rem 0.8rem; border-radius: 1rem; background: #f0f0f0; text-decoration: none; color: #333; font-size: 0.9em; }
  .facet-chip:hover { background: #4a86e8; color: white; }
  .facet-count { opacity: 0.7; margin-left: 0.25rem; }
</style>
```

**`aDNA.aDNA/site/src/components/sections/VaultRelationshipBlock.astro`**:

```astro
---
interface Props { vault: any; allEdges: any[]; allVaults: any[]; }
const { vault, allEdges, allVaults } = Astro.props;

const outgoing = allEdges.filter(e => e.source === vault.vault_slug);
const incoming = allEdges.filter(e => e.target === vault.vault_slug);

const allRelated = new Set([
  ...outgoing.map(e => e.target),
  ...incoming.map(e => e.source),
  vault.vault_slug,
]);

// Build mini-graph mermaid DSL
const lines = ['flowchart LR'];
for (const slug of allRelated) {
  const v = allVaults.find(x => x.vault_slug === slug);
  if (!v) continue;
  lines.push(`  ${slug}["${v.display_name}"]`);
}
for (const e of outgoing) lines.push(`  ${e.source} -->|${e.type}| ${e.target}`);
for (const e of incoming) lines.push(`  ${e.source} -->|${e.type}| ${e.target}`);

const miniChart = lines.join('\n');
const hasEdges = outgoing.length + incoming.length > 0;
---

<section class="vault-relationships">
  <h2>Cross-vault relationships</h2>
  {hasEdges ? (
    <>
      <p>{outgoing.length} outgoing · {incoming.length} incoming</p>
      <pre class="mermaid-inline"><code>{miniChart}</code></pre>
      <ul>
        {outgoing.map(e => <li><strong>{e.type}</strong> &rarr; <a href={`/vaults/${e.target}/`}>{e.target}</a></li>)}
        {incoming.map(e => <li><a href={`/vaults/${e.source}/`}>{e.source}</a> <strong>&larr; {e.type}</strong></li>)}
      </ul>
    </>
  ) : (
    <p>No cross-vault edges declared yet.</p>
  )}
  <p><a href="/vaults/graph">View full relationship graph &rarr;</a></p>
</section>
```

### Patch G — `aDNA.aDNA/site/package.json` (EDIT — add prebuild + sync:vaults scripts)

```diff
@@ -7,8 +7,11 @@
   "scripts": {
     "dev": "astro dev",
+    "prebuild": "node ../scripts/build_vaults_data.mjs",
     "build": "astro build",
     "preview": "astro preview",
     "check": "astro check",
+    "sync:vaults": "node ../scripts/build_vaults_data.mjs",
     "test:gates": "playwright test"
   },
```

Astro 6's `npm run build` runs `prebuild` automatically (npm convention). `sync:vaults` is an explicit one-shot for operator-invoked regeneration.

### Patch H — `package.json` yaml dependency (EDIT — add yaml to site deps)

If `yaml` is not already in `site/package.json` dependencies (the projection script needs it), add:

```diff
@@ -16,6 +16,7 @@
     "@fontsource/space-grotesk": "^5.1.0",
     "@resvg/resvg-js": "^2.6.2",
     "astro": "^6.1.3",
+    "yaml": "^2.6.0",
     "mermaid": "^11.14.0"
   },
```

Then run `npm install` in `aDNA.aDNA/site/` before first `npm run build`.

(Note: the projection script is at `aDNA.aDNA/scripts/`, not `aDNA.aDNA/site/scripts/`. The `prebuild` invocation `node ../scripts/build_vaults_data.mjs` runs from the site directory and resolves relative-path `../scripts/`. The yaml package needs to be in site's node_modules for the script's `import yaml from 'yaml'` to resolve.)

## 6. v8 P6 propagation contract

| Stage | Action | Authority | Verification |
|---|---|---|---|
| **P6 entry gate** | Operator ratifies P5 → P6 phase transition. v8 P6 queue includes T11's **data-projection contract upstream-promotion** — partner-site templates for SiteForge.aDNA (Day-1 consumer), LatticeLabs.aDNA, LatticeNetwork.aDNA, RareHarness.aDNA, WilhelmAI.aDNA, CakeHealth.aDNA, SuperLeague.aDNA. Each partner vault adopts the projection-script + Astro-routes pattern with `<partner_node_vault>` as source. ADR-023 codifies the contract. | Operator + Rosetta | Plan ratification |
| **P6 commit decision** | Bundle vs. separate: **partner-vault adoptions are operator-discretionary per partner** (not single-commit upstream). The pattern is documented; each partner vault adopts at its own pace. | Operator at P6 entry per partner | Per-partner adoption commits in their own vaults |
| **P6 commit** | Cross-vault propagation = ADR-023 reference in partner-vault project README + partner-vault Astro site adoption (when applicable). | Operator + partner persona | Partner-vault README cites ADR-023; partner Astro site `/vaults/` route exists |
| **P6 post-commit smoke** | Per partner: confirm partner Astro site `/vaults/` renders with partner's own node-vault data; projection script handles partner's local layout. | Partner persona (Berthier / Hermes / Spock / Asclepius / Hygieia / etc.) | Partner site preview |

**P6 verification expectation**: aDNA.aDNA Astro site stays canonical; partner vaults adopt opportunistically; ADR-023 contract is the doctrine reference.

## Forward integration with M3.7

DEFERRED STUB — operationalizes at M3.7 (modular III for Obsidian).

M3.7 runs III cycles against the Astro registry surface. T12 names 5 ranker dimensions; M3.7 measures `persona_growth_v0` (persona blurb drift over time), `research_context_generation_v0` (registry's query-to-bundle quality for adopter scenarios), `cross-vault-relationship-fidelity` (Mermaid edges align with actual dependencies), `vault-card-completeness` (frontmatter populated), `registry-freshness` (sync drift). T11 routes are the rendered output; III cycles consume the rendered HTML/SVG for measurement OR re-read the underlying `vaults.json` for structural measurement. M3.7 design spec cites T11 + T10 + T9 + ADR-023. Defers WHEN+HOW+WHY to M3.7.

## Cross-references

- [[../mission_adna_str_p3_m35_home_polish_and_per_vault_info_pages.md|M3.5 mission spec]] — parent
- [[m35_obj3_t9_design_spec.md|T9 design spec]] — sibling (Obsidian rendering primitive; same data different surface)
- [[m35_obj4_t10_design_spec.md|T10 design spec]] — sibling (schema; T11 projection script consumes T10 frontmatter)
- [[m35_obj6_t12_design_spec.md|T12 design spec]] — sibling (III-dimensions; future measurement targets)
- [[../../../../what/decisions/adr_023_registry_data_projection_contract.md|ADR-023]] — data-projection contract (drafted M3.5 Obj 9; ratifies S3 close)
- [[../../../../what/decisions/adr_014_verification_handoff_topology.md|ADR-014]] — Clause C verification surface
- [[../../../../site/src/components/islands/MermaidDiagram.astro|MermaidDiagram.astro]] — reused for `/vaults/graph`
- `/Users/stanley/lattice/aDNA.aDNA/site/` — Astro 6.1.3 root
- `/Users/stanley/lattice/aDNA.aDNA/scripts/` — project-root scripts directory (NEW for build_vaults_data.mjs)
- `/Users/stanley/lattice/node.aDNA/what/inventory/inventory_vaults.yaml` — canonical source
- `/Users/stanley/lattice/node.aDNA/what/vault_cards/` — frontmatter overlay source

## Notes

- **Data-projection contract = ADR-023** (drafted at M3.5 Obj 9; accepted at S3 close per Campaign SO #14 in-phase exception clause). ADR-023 codifies: A data-projection-contract definition (build-time JSON projection from canonical YAML + vault_card frontmatter overlays); B consumer-mission obligations (partner vaults citing ADR-023 reuse the contract); C cross-vault freshness semantics (`last_synced` + `source_inventory_sha` for drift detection; idempotency).
- **Idempotency**: `generated_at` truncated to date-only (not ISO-timestamp) so script produces byte-identical output on same-day runs at same inputs. Real-time changes (e.g., updating inventory YAML) produce explicit diffs for operator review.
- **CI/Vercel fallback per ADR-023 Clause A**: if `../node.aDNA/` not present at build time, script logs warning + skips overwrite + exits 0; Vercel uses last-committed JSON. This is the contract that makes aDNA.aDNA Astro site portable (Vercel deploys don't need node.aDNA cloned).
- **5-edge taxonomy reads from T10 schema fields**: `umbrella_pillar` / `companion_vaults` / `federation_refs` / `default_partners` / `supersedes`. Edges projected per vault; each edge type renders with distinct Mermaid arrow style + each vault rendered with class-colored node fill.
- **9 class-colored node styles** (consolidated from inventory's 15+ raw classes via T10's 9-variant taxonomy + 6 additional classes treated as variants). Color palette per IA Plan agent design (accessible per Operation Rosetta D10 contrast precedent).
- **T8 forward-reference-stub discipline 3rd consumer post-graduation** at T11 (T9 + T10 were 1st + 2nd). Reinforces graduation; pattern at 4 of 4 across M3.5's 4 design specs (T9 + T10 + T11 + T12) once T12 lands.
- **6-section structure 10th canonical instance** at this T11 spec. `skill_design_spec_authoring.md` graduation advances 10 → 11 of 3+ use instances.
- **Standing Order #8 self-reference**: T9 Bases gallery + T11 Astro registry are co-equal projections of the same T10 vault_card schema data. Bases tier renders in Obsidian for the operator; Astro renders in browser for the adopter. T11's projection script reads the same `the_*.aDNA.md` files Bases reads as Obsidian Bases properties. Cross-surface self-reference.
- **Cross-vault propagation**: SiteForge.aDNA partner-site templates absorb the projection pattern at v8 P6 as Day-1 consumer; LL.aDNA / LN.aDNA / partner-vault registries follow opportunistically. ADR-023 is the reference; each partner adopts at its own pace.
- **Dual-audience note**: a newcomer reads §1 finding statement (no /vaults/ route; lattice invisible to docs site) + §4 rationale (build-time projection; CI fallback; 3 routes + 3 components) + visual graph at `/vaults/graph`. A developer reads §5 literal patch text — the projection script's full logic + JSON Schema + 3 Astro routes + 3 components + package.json wire + ADR-023 contract.

## Completion Summary

T11 design spec landed at M3.5 S2; projection script + 3 Astro routes + 3 components + JSON Schema + Mermaid DSL output + package.json wire all land at M3.5 Obj 9 populate-apply pass. ADR-023 drafts alongside at Obj 9; ratifies at S3. Cross-vault partner-site template adoption deferred to v8 P6.
