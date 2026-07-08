#!/usr/bin/env node
/**
 * build_graph_svg.mjs — authoring-time graph pre-render script (A-06 radial rebuild, Storyweave P2)
 *
 * Reads:
 *   - site/src/data/vaults.json       (.vaults + .edges — the layout source of truth)
 *   - site/src/data/vaults_graph.mmd  (OPTIONAL — parsed only for the classDef fill palette so the
 *                                      SVG node colours stay identical to the legend swatches
 *                                      graph.astro derives from the same file; gate-18 also lints it)
 *
 * Writes:
 *   - site/src/assets/vaults_graph.svg (pre-rendered static SVG; committed)
 *
 * WHY THIS REWRITE (finding A-06): the previous generator rendered a Mermaid `flowchart LR` of all
 * 68 vaults through a headless Playwright/Chromium + mermaid bundle. Mermaid laid the 53 edgeless
 * vaults in ONE ~12,000px-wide row, crushing the real 15-node / 14-edge story into an illegible
 * strip. This script drops Playwright + mermaid entirely and computes a deterministic layout in pure
 * Node, emitting the SVG string directly:
 *
 *   1. SPLIT the graph — the CONNECTED set (vaults that appear in `.edges`, currently 15) is drawn as
 *      a RADIAL burst; the UNCONNECTED set (currently 53 "not yet linked" vaults) is a labelled,
 *      class-grouped grid below, in the same committed SVG.
 *   2. RADIAL layout — the connected set decomposes into connected components. The largest is centred
 *      on its two highest-in-degree hubs (III + Astro — the vaults everything federates), with the
 *      standard (aDNA) and the other consumers on rings around them; smaller components (the brand
 *      cluster, the terminal pair) become their own compact stars in a row beneath. Edge LINE STYLE
 *      encodes the relationship type (federation solid · umbrella thick · companion dashed · …).
 *   3. COLOUR restraint (≤2 accent hues — gate-18): every vault chip shares ONE neutral fill; only the
 *      standard (aDNA) carries the single cyan accent, and a retired vault (none today) a muted grey.
 *      Class is encoded by GROUPING + the label, never by a wall of hue. Edges, arrowheads and section
 *      labels inherit `currentColor` so the graph reads on BOTH the dark (default) and light canvases;
 *      the light chips keep their self-grounding fill + near-black text, legible on either canvas.
 *
 * ACCESSIBILITY / SSR CONTRACT (gate-22): the emitted SVG carries role="img" + a single <title>/<desc>
 * wired via aria-labelledby, real selectable <text> for every vault (no <foreignObject>), no
 * `data-chart` hook, and — being a static committed artifact inlined via a Vite `?raw` import — renders
 * fully with JavaScript disabled. The /vaults/graph node-list <nav> is the keyboard/AT twin; the page's
 * round-trip <script> wires pointer clicks by matching each `<g class="node">`'s text to a vault slug.
 *
 * Idempotency: fully deterministic (fixed svg id, no randomness, coordinates rounded to 2dp) — the same
 * vaults.json produces byte-identical output. Writes only when the render actually changed. No runtime
 * dependency and no build step: the page consumes the last-committed artifact (mirrors ADR-023 Clause A).
 *
 * Usage (from site/):  npm run sync:graph
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const SITE = path.join(PROJECT_ROOT, 'site');
const VAULTS_JSON = path.join(SITE, 'src/data/vaults.json');
const MMD = path.join(SITE, 'src/data/vaults_graph.mmd');
const OUTPUT_SVG = path.join(SITE, 'src/assets/vaults_graph.svg');
// Storyweave direction A: a second, compact output — ONLY the connected component(s), for the home hero.
const OUTPUT_HERO_SVG = path.join(SITE, 'src/assets/hero_graph.svg');

// Stable svg id — the element id + the theme-<style> scope. MUST be fixed for byte-identical output.
const SVG_ID = 'vaultsGraph';
// The hero output uses a DIFFERENT id so its scoped <style> never collides with the full graph's.
const HERO_SVG_ID = 'heroGraph';

// --- Authoring-time guard: no data → keep the committed artifact (mirrors the sibling scripts) ------
if (!fs.existsSync(VAULTS_JSON)) {
  console.warn(`[build_graph_svg] WARN: ${VAULTS_JSON} not present; keeping last-committed vaults_graph.svg.`);
  process.exit(0);
}

const data = JSON.parse(fs.readFileSync(VAULTS_JSON, 'utf-8'));
const vaults = Array.isArray(data.vaults) ? data.vaults : [];
const edgesRaw = Array.isArray(data.edges) ? data.edges : [];
const vaultCount = data.vault_count ?? vaults.length;
const edgeCount = edgesRaw.length;

// --- Palette: parse the classDef fills from the .mmd so the SVG matches the legend swatches ----------
// (graph.astro derives its legend swatches from the same classDefs; gate-18 lints this same file.)
const classDefColors = {};
if (fs.existsSync(MMD)) {
  const mmd = fs.readFileSync(MMD, 'utf-8');
  for (const m of mmd.matchAll(/classDef\s+(\w+)\s+fill:(#[0-9a-fA-F]{3,6})/g)) classDefColors[m[1]] = m[2];
}
const NEUTRAL = classDefColors.classplatform || '#d3d5db'; // every vault shares this fill
const CYAN = classDefColors.classstandarddev || '#7dcfff'; // the ONE accent — the standard (aDNA)
const MUTED = classDefColors.classsuperseded || '#9ea3ad'; // a retired vault (none today)
const CHIP_STROKE = '#33384d';   // neutral slate border, reads on the light chip on either canvas
const NAME_INK = '#12131c';      // near-black chip label — self-grounding on the light fills
const SUB_INK = '#464c66';       // muted persona sub-label, still AA on the light chip

// --- Node index: resolve edge endpoints (a mix of `vault` and `vault_slug`) → canonical vault --------
const byKey = new Map();
for (const v of vaults) {
  const node = {
    vault: v.vault,
    slug: v.vault_slug,
    persona: cleanPersona(v.persona),
    cls: v.class,
    isStandard: v.class === 'standard_dev',
    isRetired: v.class === 'superseded' || v.status === 'superseded',
  };
  byKey.set(v.vault, node);
  if (v.vault_slug) byKey.set(v.vault_slug, node);
}
function cleanPersona(p) {
  if (!p) return null;
  const s = String(p).trim();
  if (!s || s === '—' || s === '-' || /^tbd/i.test(s) || s.length > 20) return null;
  return s;
}

// Resolve edges to node objects; drop any that don't resolve (defensive).
const edges = [];
for (const e of edgesRaw) {
  const s = byKey.get(e.source);
  const t = byKey.get(e.target);
  if (s && t) edges.push({ s, t, type: e.type || 'federation' });
}

// Linked = any node touched by an edge; unlinked = the rest.
const linkedSet = new Set();
for (const e of edges) { linkedSet.add(e.s); linkedSet.add(e.t); }
const linked = vaults.map((v) => byKey.get(v.vault)).filter((n) => linkedSet.has(n));
const unlinked = vaults.map((v) => byKey.get(v.vault)).filter((n) => !linkedSet.has(n));

// Degree / in-degree over the linked set (hubs = highest total degree, tie → in-degree, tie → name).
const deg = new Map();
const indeg = new Map();
for (const n of linked) { deg.set(n, 0); indeg.set(n, 0); }
const adj = new Map();
for (const n of linked) adj.set(n, new Set());
for (const e of edges) {
  deg.set(e.s, deg.get(e.s) + 1);
  deg.set(e.t, deg.get(e.t) + 1);
  indeg.set(e.t, indeg.get(e.t) + 1);
  adj.get(e.s).add(e.t);
  adj.get(e.t).add(e.s);
}

// Connected components of the linked set (deterministic: seed + traverse in name order).
const compSeen = new Set();
let components = [];
for (const n of [...linked].sort((a, b) => a.vault.localeCompare(b.vault))) {
  if (compSeen.has(n)) continue;
  const stack = [n];
  const comp = [];
  compSeen.add(n);
  while (stack.length) {
    const x = stack.pop();
    comp.push(x);
    for (const y of [...adj.get(x)].sort((a, b) => a.vault.localeCompare(b.vault))) {
      if (!compSeen.has(y)) { compSeen.add(y); stack.push(y); }
    }
  }
  components.push(comp);
}
// Largest first (tie → smallest member name) so the main cluster is deterministic + central.
components.sort((a, b) => b.length - a.length || a.map((n) => n.vault).sort()[0].localeCompare(b.map((n) => n.vault).sort()[0]));

// ---------------------------------------------------------------------------------------------------
// Geometry helpers
// ---------------------------------------------------------------------------------------------------
const r2 = (v) => Math.round(v * 100) / 100;
const cosd = (a) => Math.cos((a * Math.PI) / 180);
const sind = (a) => Math.sin((a * Math.PI) / 180);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

const NAME_FS = 16.5;      // vault-name font size (px, in viewBox units)
const HUB_NAME_FS = 20;    // the two prominent hubs render larger
const SUB_FS = 12.5;       // persona sub-label
const GRID_FS = 14.5;      // unlinked-grid chip label
const CHAR_W = 0.60;       // rough Space-Grotesk advance ≈ 0.6em/char (label width estimate)
const PADX = 15;           // chip horizontal padding

function chipSize(label, persona, { fs = NAME_FS, subfs = SUB_FS, minW = 96, maxW = 264 } = {}) {
  const nameW = label.length * fs * CHAR_W;
  const persW = persona ? persona.length * subfs * CHAR_W : 0;
  const w = clamp(Math.max(nameW, persW) + PADX * 2, minW, maxW);
  const h = persona ? Math.round(fs + subfs + 22) : Math.round(fs + 18);
  return { w: r2(w), h };
}

// Where the segment toward (tx,ty) crosses this node's chip border (so edges meet the chip edge).
function borderPoint(node, tx, ty) {
  const dx = tx - node.x;
  const dy = ty - node.y;
  if (dx === 0 && dy === 0) return { x: node.x, y: node.y };
  const sx = dx !== 0 ? node.w / 2 / Math.abs(dx) : Infinity;
  const sy = dy !== 0 ? node.h / 2 / Math.abs(dy) : Infinity;
  const t = Math.min(sx, sy);
  return { x: node.x + dx * t, y: node.y + dy * t };
}

// ---------------------------------------------------------------------------------------------------
// Radial cluster layout — a component laid out as concentric rings from its hub core.
//   coreCount = 2 for a large component (twin hubs side by side), else 1 (single centre).
//   Ring 1 is evenly distributed (a clean burst avoiding the hub axis); deeper rings anchor each
//   node near its BFS parent's angle so second-order dependents read as radial arms.
// Nodes are placed around (0,0); the caller translates the whole cluster into its canvas band.
// ---------------------------------------------------------------------------------------------------
function layoutCluster(comp, { coreGap, radii, ring1Start, prominent }) {
  const size = comp.length;
  const coreCount = size >= 7 ? 2 : 1;
  const ranked = [...comp].sort(
    (a, b) => deg.get(b) - deg.get(a) || indeg.get(b) - indeg.get(a) || a.vault.localeCompare(b.vault),
  );
  const core = ranked.slice(0, coreCount);
  const coreSet = new Set(core);

  // Multi-source BFS: depth + parent (discovery order is name-sorted → deterministic).
  const depth = new Map();
  const parent = new Map();
  const queue = [];
  core.forEach((n) => { depth.set(n, 0); parent.set(n, null); queue.push(n); });
  let qi = 0;
  while (qi < queue.length) {
    const x = queue[qi++];
    for (const y of [...adj.get(x)].sort((a, b) => a.vault.localeCompare(b.vault))) {
      if (!depth.has(y)) { depth.set(y, depth.get(x) + 1); parent.set(y, x); queue.push(y); }
    }
  }

  const angle = new Map();
  // --- Core placement ---
  if (coreCount === 2) {
    const [left, right] = [...core].sort((a, b) => a.vault.localeCompare(b.vault));
    place(left, -coreGap, 0, 180, prominent);
    place(right, coreGap, 0, 0, prominent);
  } else {
    place(core[0], 0, 0, -90, prominent);
  }

  // --- Ring 1 (even burst) ---
  const ring1 = comp.filter((n) => depth.get(n) === 1).sort((a, b) => a.vault.localeCompare(b.vault));
  ring1.forEach((n, i) => {
    const a = ring1Start + (i * 360) / Math.max(ring1.length, 1);
    place(n, radii[0] * cosd(a), radii[0] * sind(a), a, false);
  });

  // --- Deeper rings (parent-anchored arms) ---
  let d = 2;
  while (true) {
    const ring = comp.filter((n) => depth.get(n) === d);
    if (ring.length === 0) break;
    const R = radii[Math.min(d - 1, radii.length - 1)] + (d - radii.length) * 130 * (d > radii.length ? 1 : 0);
    // group by parent so siblings fan around the parent's angle
    const byParent = new Map();
    for (const n of ring.sort((a, b) => a.vault.localeCompare(b.vault))) {
      const p = parent.get(n);
      if (!byParent.has(p)) byParent.set(p, []);
      byParent.get(p).push(n);
    }
    for (const [p, kids] of byParent) {
      const base = angle.get(p) ?? -90;
      const spread = 26;
      kids.forEach((n, i) => {
        const a = base + (i - (kids.length - 1) / 2) * spread;
        place(n, R * cosd(a), R * sind(a), a, false);
      });
    }
    d++;
  }

  function place(n, x, y, a, big) {
    n.x = r2(x);
    n.y = r2(y);
    n.prominent = !!big;
    const { w, h } = chipSize(n.vault, n.persona, big ? { fs: HUB_NAME_FS, minW: 120 } : {});
    n.w = w;
    n.h = h;
    angle.set(n, a);
    n.isCore = coreSet.has(n);
  }

  // Local bbox of this cluster (chip extents).
  const box = bboxOf(comp);
  return { nodes: comp, box };
}

function bboxOf(nodes) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const n of nodes) {
    minX = Math.min(minX, n.x - n.w / 2);
    maxX = Math.max(maxX, n.x + n.w / 2);
    minY = Math.min(minY, n.y - n.h / 2);
    maxY = Math.max(maxY, n.y + n.h / 2);
  }
  return { minX, minY, maxX, maxY };
}
function translate(nodes, dx, dy) {
  for (const n of nodes) { n.x = r2(n.x + dx); n.y = r2(n.y + dy); }
}

// ---------------------------------------------------------------------------------------------------
// Compose the canvas: connected region (radial clusters) then the unlinked grid.
// Everything is laid out relative to the centre line x = 0; the viewBox is derived from the final bbox
// (negative origins are valid), so no global translation pass is needed.
// ---------------------------------------------------------------------------------------------------
const bounds = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
function grow(x, y) {
  if (x < bounds.minX) bounds.minX = x;
  if (x > bounds.maxX) bounds.maxX = x;
  if (y < bounds.minY) bounds.minY = y;
  if (y > bounds.maxY) bounds.maxY = y;
}
function growNode(n) { grow(n.x - n.w / 2, n.y - n.h / 2); grow(n.x + n.w / 2, n.y + n.h / 2); }

let cursorY = 0;
const CENTER_X = 0;
const labels = []; // section / group labels: {x,y,text,kind}

// -- Connected header --
const connH = `The connected network — ${linked.length} vaults, ${edgeCount} relationships`;
labels.push({ x: CENTER_X, y: cursorY, text: connH, kind: 'section' });
grow(CENTER_X - 360, cursorY - 24);
grow(CENTER_X + 360, cursorY + 8);
cursorY += 46;

// -- Main component: radial, centred --
const main = components[0] || [];
if (main.length) {
  layoutCluster(main, { coreGap: 95, radii: [230, 380, 520], ring1Start: 45, prominent: true });
  const b = bboxOf(main);
  translate(main, CENTER_X - (b.minX + b.maxX) / 2, cursorY + 34 - b.minY);
  main.forEach(growNode);
  cursorY = bboxOf(main).maxY;
}

// -- Satellite components: a row of compact stars beneath the main cluster --
const satellites = components.slice(1);
if (satellites.length) {
  cursorY += 64;
  const laid = satellites.map((c) => {
    layoutCluster(c, { coreGap: 70, radii: [140, 232], ring1Start: -90, prominent: false });
    return { comp: c, box: bboxOf(c) };
  });
  const widths = laid.map((l) => l.box.maxX - l.box.minX);
  const totalW = widths.reduce((s, w) => s + w, 0);
  const innerW = Math.max(bounds.maxX - bounds.minX, 1120);
  const gaps = laid.length + 1;
  const gap = Math.max((innerW - totalW) / gaps, 90);
  let x = CENTER_X - innerW / 2 + gap;
  let rowMaxY = -Infinity;
  for (let i = 0; i < laid.length; i++) {
    const { comp, box } = laid[i];
    const cx = x + widths[i] / 2;
    translate(comp, cx - (box.minX + box.maxX) / 2, cursorY - box.minY);
    comp.forEach(growNode);
    rowMaxY = Math.max(rowMaxY, bboxOf(comp).maxY);
    x += widths[i] + gap;
  }
  cursorY = rowMaxY;
}

// -- Divider + unlinked header --
cursorY += 52;
const dividerY = cursorY;
cursorY += 40;
const unH = `Not yet linked — ${unlinked.length} vaults with no cited relationship yet`;
labels.push({ x: CENTER_X, y: cursorY, text: unH, kind: 'section' });
grow(CENTER_X - 380, cursorY - 22);
grow(CENTER_X + 380, cursorY + 8);
cursorY += 40;

// -- Unlinked grid: class-grouped flow (class = grouping + a sub-label, never a fill colour) --
const CLASS_LABELS = {
  platform: 'Platform', forge: 'Forge', framework: 'Framework', framework_candidate: 'Framework (candidate)',
  org_vault: 'Org-Vault', org_graph: 'Org-Graph', tbd_at_p0: 'Genesis stub', coordination: 'Coordination',
  knowledge_graph: 'Knowledge-graph', network: 'Network', node_operational: 'Node (operational)',
  tooling: 'Tooling', workspace: 'Workspace', standard_dev: 'Standard', superseded: 'Superseded',
};
const unlinkedByClass = new Map();
for (const n of unlinked) {
  if (!unlinkedByClass.has(n.cls)) unlinkedByClass.set(n.cls, []);
  unlinkedByClass.get(n.cls).push(n);
}
const gridInnerW = Math.max(bounds.maxX - bounds.minX, 1120);
const gridLeft = CENTER_X - gridInnerW / 2;
const GRID_GAP_X = 14;
const GRID_ROW_H = 42;
const GROUP_GAP = 20;
const orderedClasses = [...unlinkedByClass.keys()].sort(
  (a, b) => unlinkedByClass.get(b).length - unlinkedByClass.get(a).length ||
    (CLASS_LABELS[a] || a).localeCompare(CLASS_LABELS[b] || b),
);
for (const cls of orderedClasses) {
  const members = unlinkedByClass.get(cls).sort((a, b) => a.vault.localeCompare(b.vault));
  labels.push({ x: gridLeft, y: cursorY, text: `${CLASS_LABELS[cls] || cls} · ${members.length}`, kind: 'group' });
  grow(gridLeft, cursorY - 16);
  cursorY += 26;
  let x = gridLeft;
  let rowTop = cursorY;
  for (const n of members) {
    const { w, h } = chipSize(n.vault, null, { fs: GRID_FS, minW: 92, maxW: 240 });
    if (x + w > gridLeft + gridInnerW + 0.5) { x = gridLeft; rowTop += GRID_ROW_H; }
    n.x = r2(x + w / 2);
    n.y = r2(rowTop + h / 2);
    n.w = w;
    n.h = h;
    n.grid = true;
    growNode(n);
    x += w + GRID_GAP_X;
  }
  cursorY = rowTop + GRID_ROW_H + GROUP_GAP;
}

// ---------------------------------------------------------------------------------------------------
// Emit
// ---------------------------------------------------------------------------------------------------
function xmlEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Edge line-style taxonomy (STROKE currentColor via CSS; width + dash inline, self-contained).
const EDGE_STYLE = {
  federation: { w: 1.6, dash: '' },
  umbrella: { w: 3.4, dash: '' },
  companion: { w: 1.6, dash: '7 5' },
  partner: { w: 1.6, dash: '1.5 6' },
  supersedes: { w: 2.6, dash: '11 6' },
};

function arrowHead(px, py, fromx, fromy, size) {
  const ang = Math.atan2(py - fromy, px - fromx);
  const a1 = ang + Math.PI - 0.42;
  const a2 = ang + Math.PI + 0.42;
  return `<path class="edge-arrow" d="M${r2(px)},${r2(py)} L${r2(px + size * Math.cos(a1))},${r2(py + size * Math.sin(a1))} L${r2(px + size * Math.cos(a2))},${r2(py + size * Math.sin(a2))} Z"/>`;
}

function renderEdges(edgeList = edges) {
  const out = [];
  for (const e of edgeList) {
    const st = EDGE_STYLE[e.type] || EDGE_STYLE.federation;
    const a = borderPoint(e.s, e.t.x, e.t.y);
    const b = borderPoint(e.t, e.s.x, e.s.y);
    const dashAttr = st.dash ? ` stroke-dasharray="${st.dash}"` : '';
    out.push(
      `<line class="edge" x1="${r2(a.x)}" y1="${r2(a.y)}" x2="${r2(b.x)}" y2="${r2(b.y)}" ` +
      `stroke-width="${st.w}"${dashAttr}/>` +
      arrowHead(b.x, b.y, a.x, a.y, 7 + st.w),
    );
  }
  return `<g class="edges">${out.join('')}</g>`;
}

function renderNode(n) {
  const fill = n.isStandard ? CYAN : n.isRetired ? MUTED : NEUTRAL;
  const x = r2(n.x - n.w / 2);
  const y = r2(n.y - n.h / 2);
  const fs = n.prominent ? HUB_NAME_FS : n.grid ? GRID_FS : NAME_FS;
  const sw = n.prominent ? 2 : 1.2;
  const rx = 9;
  let text;
  if (n.persona && !n.grid) {
    const ny = r2(n.y - 4);
    const py = r2(n.y + fs * 0.72 + 3);
    text =
      `<text x="${n.x}" y="${ny}" text-anchor="middle" font-size="${fs}" font-weight="600" fill="${NAME_INK}">${xmlEscape(n.vault)}</text>` +
      `<text x="${n.x}" y="${py}" text-anchor="middle" font-size="${SUB_FS}" fill="${SUB_INK}">${xmlEscape(n.persona)}</text>`;
  } else {
    text = `<text x="${n.x}" y="${r2(n.y + fs * 0.35)}" text-anchor="middle" font-size="${fs}" font-weight="600" fill="${NAME_INK}">${xmlEscape(n.vault)}</text>`;
  }
  return (
    `<g class="node" data-slug="${xmlEscape(n.slug)}">` +
    `<rect x="${x}" y="${y}" width="${n.w}" height="${n.h}" rx="${rx}" fill="${fill}" stroke="${CHIP_STROKE}" stroke-width="${sw}"/>` +
    text +
    `</g>`
  );
}

function renderLabels(labelList = labels) {
  const out = [];
  for (const l of labelList) {
    if (l.kind === 'section') {
      out.push(`<text class="section-label" x="${r2(l.x)}" y="${r2(l.y)}" text-anchor="middle" font-size="21" font-weight="700">${xmlEscape(l.text)}</text>`);
    } else {
      out.push(`<text class="group-label" x="${r2(l.x)}" y="${r2(l.y)}" font-size="13" font-weight="600" letter-spacing="0.04em">${xmlEscape(l.text)}</text>`);
    }
  }
  return out.join('');
}

// viewBox from the final content bbox + padding.
const PAD = 42;
const vbX = r2(bounds.minX - PAD);
const vbY = r2(bounds.minY - PAD);
const vbW = r2(bounds.maxX - bounds.minX + PAD * 2);
const vbH = r2(bounds.maxY - bounds.minY + PAD * 2);

const titleId = `${SVG_ID}-title`;
const descId = `${SVG_ID}-desc`;
const titleText = `aDNA vault network topology — ${vaultCount} vaults, ${edgeCount} edges`;
const descText =
  `A directed radial graph of the aDNA network: ${linked.length} of ${vaultCount} vaults are joined by ` +
  `${edgeCount} cited relationships (umbrella, federation, partner, companion, supersedes) and are drawn as ` +
  `a radial burst around the most-federated hubs; the remaining ${unlinked.length} vaults carry no cited ` +
  `relationship yet and sit in the labelled "not yet linked" grid below, grouped by class. Each box names a ` +
  `vault and its persona; the accompanying vault list is the keyboard-navigable twin.`;

const themeStyle = `<style>
/* Theme adaptation (build_graph_svg.mjs): edges, arrowheads and section labels follow the page text
   colour so the graph reads on both the dark (default, Tokyo Night) and light canvases. The vault
   chips keep their self-grounding light fill + near-black text (set inline), legible on either canvas. */
#${SVG_ID}{color:var(--color-text,#c0caf5);}
#${SVG_ID} text{font-family:'Space Grotesk',system-ui,sans-serif;}
#${SVG_ID} .edge{stroke:currentColor;fill:none;stroke-opacity:0.72;}
#${SVG_ID} .edge-arrow{fill:currentColor;stroke:none;fill-opacity:0.82;}
#${SVG_ID} .section-label{fill:currentColor;}
#${SVG_ID} .group-label{fill:currentColor;fill-opacity:0.66;text-transform:uppercase;}
#${SVG_ID} .divider{stroke:currentColor;stroke-opacity:0.22;}
</style>`;

const openTag =
  `<svg id="${SVG_ID}" xmlns="http://www.w3.org/2000/svg" class="vaults-graph-svg" ` +
  `viewBox="${vbX} ${vbY} ${vbW} ${vbH}" role="img" aria-labelledby="${titleId} ${descId}" ` +
  `style="max-width:100%;height:auto">`;
const titleDesc =
  `<title id="${titleId}">${xmlEscape(titleText)}</title>` +
  `<desc id="${descId}">${xmlEscape(descText)}</desc>`;
const divider = `<line class="divider" x1="${r2(CENTER_X - (bounds.maxX - bounds.minX) / 2 + 20)}" y1="${r2(dividerY)}" x2="${r2(CENTER_X + (bounds.maxX - bounds.minX) / 2 - 20)}" y2="${r2(dividerY)}" stroke-width="1"/>`;

const allNodes = [...linked, ...unlinked];
const svg =
  openTag +
  titleDesc +
  themeStyle +
  renderEdges() +
  divider +
  renderLabels() +
  `<g class="nodes">${allNodes.map(renderNode).join('')}</g>` +
  `</svg>`;

const header = `<!-- GENERATED by scripts/build_graph_svg.mjs from site/src/data/vaults.json — do not edit by hand; run \`npm run sync:graph\`. ${vaultCount} vaults, ${edgeCount} edges; ${linked.length} connected (radial) + ${unlinked.length} not-yet-linked (grid). -->\n`;
const output = header + svg + '\n';

// --- Idempotency guard: write only when the render actually changed (shared by both outputs) --------
function writeIfChanged(target, contents, tag) {
  const kb = Math.round(Buffer.byteLength(contents, 'utf-8') / 1024);
  const tc = (contents.match(/<text\b/g) || []).length;
  const prevContents = fs.existsSync(target) ? fs.readFileSync(target, 'utf-8') : null;
  if (prevContents === contents) {
    console.log(`[build_graph_svg] no change — ${tag} already current (${kb} KB, ${tc} <text> labels).`);
  } else {
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, contents);
    console.log(`[build_graph_svg] wrote ${target} (${kb} KB, ${tc} <text> labels).`);
  }
  if (kb > 500) console.warn(`[build_graph_svg] WARN: ${tag} is ${kb} KB (> 500 KB budget).`);
}

// The full graph. `svg` already captured every node's full-graph coordinates as a string, so the hero
// composition below is free to re-run the layout on the SAME node objects without perturbing this output.
writeIfChanged(OUTPUT_SVG, output, 'vaults_graph.svg');

// ===================================================================================================
// HERO GRAPH (Storyweave direction A) — ONLY the connected component(s), laid out as a compact radial
// for the home-hero right panel. NO 53-grid, NO "not yet linked" section, NO big section header.
// Reuses layoutCluster / bboxOf / translate / renderEdges / renderNode / chipSize + the palette; a
// DIFFERENT svg id (heroGraph) scopes its own <style>. Same SSR/a11y contract + idempotency as above.
// The viewBox is tuned (tighter radii/gaps) so the 15-node cluster reads COMPACT, not tall — a near-
// square-to-landscape panel (~1.0–1.4 w/h on today's data) that pairs with the tall copy column and
// scales via its own viewBox. Aspect floats with the data (component sizes); the goal is "compact +
// no overlaps", not a fixed ratio.
// ===================================================================================================
function composeHeroGraph() {
  const hb = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
  const growH = (x, y) => {
    if (x < hb.minX) hb.minX = x;
    if (x > hb.maxX) hb.maxX = x;
    if (y < hb.minY) hb.minY = y;
    if (y > hb.maxY) hb.maxY = y;
  };
  const growHNode = (n) => { growH(n.x - n.w / 2, n.y - n.h / 2); growH(n.x + n.w / 2, n.y + n.h / 2); };

  // -- Main component: radial, centred on its twin hubs (III + Astro). Compact radii so the 9-node
  //    burst reads tight beside the copy; no collisions at these settings. --
  const heroMain = components[0] || [];
  if (heroMain.length) {
    layoutCluster(heroMain, { coreGap: 118, radii: [206, 338, 456], ring1Start: 34, prominent: true });
    const b = bboxOf(heroMain);
    translate(heroMain, -(b.minX + b.maxX) / 2, -(b.minY + b.maxY) / 2); // centre the main cluster on origin
    heroMain.forEach(growHNode);
  }
  const mainBox = heroMain.length ? bboxOf(heroMain) : { minX: 0, maxX: 0, minY: 0, maxY: 0 };
  const mainW = mainBox.maxX - mainBox.minX;

  // -- Satellite components (the 4-node brand star + the 2-node terminal pair): sit them in the panel's
  //    lower band, biggest at lower-LEFT, next at lower-RIGHT — each dropped just below the burst's
  //    lowest chips so they never collide, and pulled ~32% toward the axis so the panel stays compact
  //    (not wide, not tall). No grid, no section header. --
  const heroSats = components.slice(1);
  if (heroSats.length) {
    const laid = heroSats.map((c) => {
      layoutCluster(c, { coreGap: 86, radii: [126, 200], ring1Start: -90, prominent: false });
      return { comp: c, box: bboxOf(c) };
    });
    laid.forEach((l, i) => {
      const { comp, box } = l;
      const w = box.maxX - box.minX;
      const h = box.maxY - box.minY;
      const side = i % 2; // 0 → lower-left, 1 → lower-right
      const tier = Math.floor(i / 2); // extra pairs (only if the data grows) stack downward
      // Horizontal centre: hug the panel edge but pull ~32% of the cluster inward so it tucks under the
      // burst arc rather than pushing the panel wide.
      const cx = side === 0 ? mainBox.minX + w * 0.32 : mainBox.maxX - w * 0.32;
      // Vertical centre: just below the burst's bottom edge so no chip overlaps; extra tiers step down.
      const cy = mainBox.maxY + 22 + h / 2 + tier * (h + 52);
      translate(comp, cx - (box.minX + box.maxX) / 2, cy - (box.minY + box.maxY) / 2);
      comp.forEach(growHNode);
    });
  }

  // viewBox from the connected content bbox + a snug pad (no section headers to leave room for).
  const HPAD = 34;
  const hvbX = r2(hb.minX - HPAD);
  const hvbY = r2(hb.minY - HPAD);
  const hvbW = r2(hb.maxX - hb.minX + HPAD * 2);
  const hvbH = r2(hb.maxY - hb.minY + HPAD * 2);

  const hTitleId = `${HERO_SVG_ID}-title`;
  const hDescId = `${HERO_SVG_ID}-desc`;
  const hTitleText = `The connected aDNA network — ${linked.length} vaults joined by ${edgeCount} relationships`;
  const hDescText =
    `A compact radial map of the live aDNA network: ${linked.length} vaults are joined by ${edgeCount} cited ` +
    `relationships (umbrella, federation, partner, companion) and drawn as a burst around the most-federated ` +
    `hubs (III and Astro), with the standard, aDNA, at the core. Each box names a vault and its persona; ` +
    `the full vault list at /vaults/graph is the keyboard-navigable twin.`;

  // Same theme contract as the full graph, scoped to the hero id (no collision).
  const hThemeStyle = `<style>
/* Hero graph (build_graph_svg.mjs, Storyweave A): edges + arrowheads follow the page text colour so the
   graph reads on the dark (default) and light canvases; the vault chips keep their self-grounding light
   fill + near-black text (set inline). Scoped to #${HERO_SVG_ID} — never collides with #${SVG_ID}. */
#${HERO_SVG_ID}{color:var(--color-text,#c0caf5);}
#${HERO_SVG_ID} text{font-family:'Space Grotesk',system-ui,sans-serif;}
#${HERO_SVG_ID} .edge{stroke:currentColor;fill:none;stroke-opacity:0.72;}
#${HERO_SVG_ID} .edge-arrow{fill:currentColor;stroke:none;fill-opacity:0.82;}
</style>`;

  const hOpenTag =
    `<svg id="${HERO_SVG_ID}" xmlns="http://www.w3.org/2000/svg" class="hero-graph-svg" ` +
    `viewBox="${hvbX} ${hvbY} ${hvbW} ${hvbH}" role="img" aria-labelledby="${hTitleId} ${hDescId}" ` +
    `style="max-width:100%;height:auto">`;
  const hTitleDesc =
    `<title id="${hTitleId}">${xmlEscape(hTitleText)}</title>` +
    `<desc id="${hDescId}">${xmlEscape(hDescText)}</desc>`;

  // Only the connected nodes; only the (all-connected) edges. No divider, no labels, no grid.
  const heroNodes = [...heroMain, ...heroSats.flat()];
  const heroSvg =
    hOpenTag +
    hTitleDesc +
    hThemeStyle +
    renderEdges(edges) +
    `<g class="nodes">${heroNodes.map(renderNode).join('')}</g>` +
    `</svg>`;

  const heroHeader = `<!-- GENERATED by scripts/build_graph_svg.mjs from site/src/data/vaults.json — do not edit by hand; run \`npm run sync:graph\`. HERO variant: ${linked.length} connected vaults, ${edgeCount} relationships (compact radial; no grid). -->\n`;
  return heroHeader + heroSvg + '\n';
}

writeIfChanged(OUTPUT_HERO_SVG, composeHeroGraph(), 'hero_graph.svg');

process.exit(0);
