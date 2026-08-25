#!/usr/bin/env node
/**
 * HAUSSMANN P2.4 O1 — registry comps generator.
 *
 * Emits `registry_comps.html`: three browse-surface variants over the REAL registry,
 * plus a 10x synthetic-scale mode (740 rows).
 *
 * Run from the vault root:
 *   node how/campaigns/campaign_haussmann/artifacts/p2_4/build_registry_comps.mjs
 *
 * WHY GENERATED RATHER THAN HAND-WRITTEN
 * --------------------------------------
 * Every count in these comps is derived from `site/src/data/vaults.json` at build time.
 * A comp with typed numbers is a comp that can lie about the thing it is asking the
 * operator to judge — and "every count a page narrates must be derived" (KW-14) applies
 * to the surface used to CHOOSE the page, not only to the page.
 *
 * READ-ONLY on the registry. pt19 absolute: nothing here writes vaults.json, and the
 * synthetic 10x rows exist only in memory to answer "does this still work at 740".
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '../../../../..', 'aDNA.aDNA');
const REGISTRY = join(process.cwd(), 'site/src/data/vaults.json');

const raw = JSON.parse(readFileSync(REGISTRY, 'utf8'));
const vaults = raw.vaults;
if (!Array.isArray(vaults) || vaults.length === 0) {
  throw new Error('DERIVATION EMPTY: vaults.json produced no rows. Refusing to build comps ' +
    'against nothing — an empty registry renders three identical empty surfaces and looks fine.');
}

// ---- ADR-052 §tiers.3: tier derives from `status` ALONE ---------------------
// card_present is NOT an input (§tiers.1 — it splits active 7/0, i.e. not at all).
const TIERS = [
  { key: 'in-use',    label: 'in use',    statuses: ['active'],
    meaning: 'Being worked in today. Self-declared.' },
  { key: 'chartered', label: 'chartered', statuses: ['pending'],
    meaning: 'Scoped and opened; substantive work has not begun.' },
  { key: 'planned',   label: 'planned',   statuses: ['genesis', 'genesis_stub'],
    meaning: 'A named place in the network with a governance skeleton and little else.' },
];
const tierOf = (v) => TIERS.find(t => t.statuses.includes(v.status))?.key || 'planned';

// Mirrors site/src/utils/vaultLabels.ts CLASS_LABELS (the shipped public vocabulary).
const CLASS_LABELS = {
  standard_dev: 'standard', framework: 'framework', framework_candidate: 'framework (candidate)',
  forge: 'forge', platform: 'platform', org_vault: 'org vault', org_graph: 'org graph',
  network: 'network', node_operational: 'node (operational)', coordination: 'coordination',
  document: 'document', knowledge_graph: 'knowledge graph', tooling: 'tooling',
  workspace: 'workspace', tbd_at_p0: 'genesis-planning', superseded: 'superseded',
};
const classLabel = (c) => CLASS_LABELS[c] || String(c || 'vault').replace(/_/g, ' ');
const slugOf = (s) => String(s).toLowerCase().replace(/\.adna$/i, '').replace(/[^a-z0-9_-]/g, '_');
const routeOf = (v) => `/vaults/${slugOf(v.vault_slug || v.vault)}/`;
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// ---- Derived facts (never typed) -------------------------------------------
const byTier = Object.fromEntries(TIERS.map(t => [t.key, vaults.filter(v => tierOf(v) === t.key)]));
const classes = [...new Set(vaults.map(v => v.class))].sort();
const documented = vaults.filter(v => v.card_present).length;
const minimal = vaults.filter(v => v.listing === 'minimal').length;
const withSync = vaults.filter(v => v.last_synced).length;
const syncDates = vaults.filter(v => v.last_synced).map(v => v.last_synced);
const modalSync = Object.entries(syncDates.reduce((a, d) => (a[d] = (a[d] || 0) + 1, a), {}))
  .sort((a, b) => b[1] - a[1])[0];
const FACTS = {
  total: vaults.length, classes: classes.length, documented, minimal, withSync,
  modalSyncDate: modalSync?.[0], modalSyncCount: modalSync?.[1],
  tiers: TIERS.map(t => ({ ...t, n: byTier[t.key].length })),
};

// ---- 10x synthetic scale: same tier PROPORTIONS, obviously-fake names -------
const synth = [];
for (let i = 0; i < FACTS.total * 9; i++) {
  const src = vaults[i % vaults.length];
  synth.push({ ...src, vault: `Synthetic${i + 1}.aDNA`, display_name: `Synthetic ${i + 1}`,
    vault_slug: `synthetic${i + 1}`, __synthetic: true });
}
const scaled = [...vaults, ...synth];

// ---- Row/card renderers -----------------------------------------------------
const badge = (tk) => {
  const t = TIERS.find(x => x.key === tk);
  return `<span class="tier tier-${tk}" title="${esc(t.meaning)}">${esc(t.label)}</span>`;
};

function fullCard(v) {
  const p = v.persona && !/^tbd/i.test(v.persona) && v.persona !== '—' ? v.persona : null;
  return `<article class="card card-full">
    <h4><a href="${routeOf(v)}">${esc(v.display_name || v.vault)}</a></h4>
    <div class="meta">${badge(tierOf(v))}<span class="cls">${esc(classLabel(v.class))}</span></div>
    ${p ? `<p class="persona">${esc(p)}</p>` : `<p class="absent">no persona recorded</p>`}
    ${v.card_present ? '<p class="doc">documented</p>' : '<p class="absent">no card written yet</p>'}
  </article>`;
}
function medCard(v) {
  return `<article class="card card-med">
    <h4><a href="${routeOf(v)}">${esc(v.display_name || v.vault)}</a></h4>
    <div class="meta">${badge(tierOf(v))}<span class="cls">${esc(classLabel(v.class))}</span></div>
  </article>`;
}
const denseRow = (v) => `<tr><td><a href="${routeOf(v)}">${esc(v.display_name || v.vault)}</a></td>
  <td class="c">${esc(classLabel(v.class))}</td><td>${badge(tierOf(v))}</td>
  <td class="d">${v.card_present ? '●' : '<span class="absent">—</span>'}</td></tr>`;

// ---- The three variants -----------------------------------------------------
function variantA(rows) {                        // tier-first grouping
  return TIERS.map(t => {
    const g = rows.filter(v => tierOf(v) === t.key);
    if (!g.length) return '';
    return `<section class="grp"><h3>${esc(t.label)} <span class="n">${g.length}</span></h3>
      <p class="mean">${esc(t.meaning)}</p>
      <div class="grid">${g.map(fullCard).join('')}</div></section>`;
  }).join('');
}
function variantB(rows) {                        // class-first + tier badges (evolution of today)
  return classes.map(c => {
    const g = rows.filter(v => v.class === c);
    if (!g.length) return '';
    return `<section class="grp"><h3>${esc(classLabel(c))} <span class="n">${g.length}</span></h3>
      <div class="grid">${g.map(fullCard).join('')}</div></section>`;
  }).join('');
}
function variantC(rows) {                        // density tracks tier
  const inUse = rows.filter(v => tierOf(v) === 'in-use');
  const chart = rows.filter(v => tierOf(v) === 'chartered');
  const plan  = rows.filter(v => tierOf(v) === 'planned');
  return `<section class="grp"><h3>in use <span class="n">${inUse.length}</span></h3>
      <p class="mean">${esc(TIERS[0].meaning)}</p>
      <div class="grid">${inUse.map(fullCard).join('')}</div></section>
    <section class="grp"><h3>chartered <span class="n">${chart.length}</span></h3>
      <p class="mean">${esc(TIERS[1].meaning)}</p>
      <div class="grid grid-med">${chart.map(medCard).join('')}</div></section>
    <section class="grp"><h3>planned <span class="n">${plan.length}</span></h3>
      <p class="mean">${esc(TIERS[2].meaning)}</p>
      <table class="dense"><thead><tr><th>Vault</th><th>Class</th><th>Stage</th><th title="a card has been written">Doc</th></tr></thead>
      <tbody>${plan.map(denseRow).join('')}</tbody></table></section>`;
}

const VARIANTS = { A: variantA, B: variantB, C: variantC };
const panes = [];
for (const scale of ['real', 'x10']) {
  const rows = scale === 'real' ? vaults : scaled;
  for (const key of Object.keys(VARIANTS)) {
    panes.push(`<div class="pane" data-variant="${key}" data-scale="${scale}" hidden>
      <div class="panehead"><b>Variant ${key}</b> · ${rows.length} rows ·
        <span class="faint">${scale === 'real' ? 'real registry' : '10× synthetic scale'}</span></div>
      ${VARIANTS[key](rows)}</div>`);
  }
}

const html = `<meta charset="utf-8">
<title>aDNA registry comps — P2.4 / tier model</title>
<style>
  :root{--bg:#0e0e15;--panel:#13131c;--line:#242a40;--ink:#c8d0f0;--head:#f7f7fb;
    --muted:#8b93b8;--faint:#565f89;--cyan:#7dcfff;--purple:#bb9af7;--green:#9ece6a;--amber:#e0af68;
    --mono:ui-monospace,"SF Mono",Menlo,monospace;
    font-family:ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
  body{margin:0;background:var(--bg);color:var(--ink);line-height:1.5}
  a{color:var(--cyan)} h3{color:var(--head);margin:0 0 .2rem;font-size:1rem;text-transform:lowercase}
  .bar{display:flex;flex-wrap:wrap;gap:.6rem 1rem;align-items:center;padding:.7rem 1rem;
    background:#08080c;border-bottom:1px solid var(--line);position:sticky;top:0;z-index:9}
  .bar b{color:var(--head)} .faint{color:var(--faint)}
  .seg{display:inline-flex;gap:2px;background:var(--panel);border:1px solid var(--line);border-radius:9px;padding:2px}
  .seg button{background:none;border:0;color:var(--muted);font:inherit;font-weight:600;font-size:.78rem;
    padding:.3rem .7rem;border-radius:7px;cursor:pointer}
  .seg button[aria-pressed=true]{background:color-mix(in srgb,var(--cyan) 22%,transparent);color:var(--head)}
  .wrap{padding:1rem;max-width:1200px;margin:0 auto}
  .panehead{font-family:var(--mono);font-size:.72rem;color:var(--muted);padding:.5rem 0 1rem;border-bottom:1px solid var(--line);margin-bottom:1rem}
  .grp{margin:0 0 2rem} .n{font-family:var(--mono);font-size:.78rem;color:var(--faint)}
  .mean{margin:.1rem 0 .8rem;color:var(--muted);font-size:.82rem}
  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(215px,1fr));gap:.7rem}
  .grid-med{grid-template-columns:repeat(auto-fill,minmax(165px,1fr))}
  .card{background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:.7rem .8rem}
  .card h4{margin:0 0 .35rem;font-size:.9rem} .card h4 a{text-decoration:none}
  .meta{display:flex;flex-wrap:wrap;gap:.4rem;align-items:center;margin-bottom:.35rem}
  .cls{font-size:.7rem;color:var(--muted)}
  .tier{font-family:var(--mono);font-size:.6rem;letter-spacing:.07em;text-transform:uppercase;
    padding:.1rem .4rem;border-radius:4px;border:1px solid}
  .tier-in-use{color:var(--green);border-color:color-mix(in srgb,var(--green) 45%,transparent)}
  .tier-chartered{color:var(--amber);border-color:color-mix(in srgb,var(--amber) 45%,transparent)}
  .tier-planned{color:var(--faint);border-color:var(--line)}
  .persona,.doc{margin:0;font-size:.74rem;color:var(--muted)}
  .absent{margin:0;font-size:.74rem;color:var(--faint);font-style:italic}
  table.dense{width:100%;border-collapse:collapse;font-size:.8rem}
  table.dense th{text-align:left;color:var(--faint);font-weight:600;font-size:.68rem;
    text-transform:uppercase;letter-spacing:.06em;border-bottom:1px solid var(--line);padding:.35rem .5rem}
  table.dense td{padding:.28rem .5rem;border-bottom:1px solid color-mix(in srgb,var(--line) 45%,transparent)}
  table.dense td.c{color:var(--muted)} table.dense td.d{color:var(--green);text-align:center}
  table.dense a{text-decoration:none}
  .note{background:var(--panel);border:1px solid var(--line);border-left:3px solid var(--amber);
    border-radius:8px;padding:.7rem .9rem;margin:0 0 1.2rem;font-size:.83rem;color:var(--muted)}
</style>
<div class="bar">
  <b>aDNA registry comps</b> <span class="faint">P2.4 · tier model per ADR-052 §tiers</span>
  <div class="seg" role="group" aria-label="Variant">
    <button data-v="A" aria-pressed="true">A · tier-first</button>
    <button data-v="B" aria-pressed="false">B · class-first</button>
    <button data-v="C" aria-pressed="false">C · density</button>
  </div>
  <div class="seg" role="group" aria-label="Scale">
    <button data-s="real" aria-pressed="true">${FACTS.total} real</button>
    <button data-s="x10" aria-pressed="false">${scaled.length} (10×)</button>
  </div>
</div>
<div class="wrap">
  <p class="note"><b>Every number on this page is derived from <code>vaults.json</code> at build time.</b>
    Registry: <b>${FACTS.total}</b> vaults across <b>${FACTS.classes}</b> classes ·
    ${FACTS.tiers.map(t => `<b>${t.n}</b> ${esc(t.label)}`).join(' · ')} ·
    <b>${FACTS.documented}</b> documented · <b>${FACTS.minimal}</b> minimal-card (DP4).
    <b>No dual clock:</b> only <b>${FACTS.withSync}</b> of ${FACTS.total} rows carry
    <code>last_synced</code> and <b>${FACTS.modalSyncCount}</b> of those share
    <code>${esc(FACTS.modalSyncDate)}</code> — a fact about one bulk sync, not about the vaults
    (ADR-052 §tiers.4). The 10× rows are <b>synthetic and named so</b>; they exist to answer
    "does this still work at ${scaled.length}", nothing else.</p>
  ${panes.join('\n')}
</div>
<script>
  const panes = [...document.querySelectorAll('.pane')];
  let v = 'A', s = 'real';
  function show(){
    panes.forEach(p => p.hidden = !(p.dataset.variant === v && p.dataset.scale === s));
    document.querySelectorAll('[data-v]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.v === v)));
    document.querySelectorAll('[data-s]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.s === s)));
  }
  document.querySelectorAll('[data-v]').forEach(b => b.onclick = () => { v = b.dataset.v; show(); });
  document.querySelectorAll('[data-s]').forEach(b => b.onclick = () => { s = b.dataset.s; show(); });
  show();
</script>`;

mkdirSync(HERE, { recursive: true });
writeFileSync(join(HERE, 'registry_comps.html'), html);
console.log(`registry_comps.html written`);
console.log(`  real: ${FACTS.total} rows · 10x: ${scaled.length} rows · ${panes.length} panes`);
console.log(`  tiers: ${FACTS.tiers.map(t => `${t.label}=${t.n}`).join(' · ')}`);
console.log(`  documented ${FACTS.documented}/${FACTS.total} · minimal ${FACTS.minimal} · last_synced ${FACTS.withSync}/${FACTS.total} (${FACTS.modalSyncCount} share ${FACTS.modalSyncDate})`);
