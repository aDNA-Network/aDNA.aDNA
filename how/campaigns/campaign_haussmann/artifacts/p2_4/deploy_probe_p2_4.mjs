#!/usr/bin/env node
/**
 * HAUSSMANN P2.4 — live deploy probe.
 *
 * Asserts against PRODUCTION that the P2.4 deploy actually landed. Run from `site/`:
 *   node ../how/campaigns/campaign_haussmann/artifacts/p2_4/deploy_probe_p2_4.mjs
 * Override the target with PROBE_BASE (e.g. a preview URL, or http://localhost:4399).
 *
 * WHY THIS LIVES IN THE CAMPAIGN DIR AND NOT A SCRATCHPAD
 * ------------------------------------------------------
 * P2.2's crawl instrument was written in a session scratchpad and evaporated, so an
 * inventory four missions cite could not be regenerated. Instruments that produce
 * cited evidence live in `artifacts/`. (Same reasoning as P2.3's probe; same home.)
 *
 * WHY EVERY EXPECTATION IS DERIVED AND EVERY DERIVATION THROWS
 * -----------------------------------------------------------
 * P2.1's probe reported a green "64 PASS, 0 FAIL" while testing nothing in its canonical
 * third: it guessed a field name, got an empty array, and iterated it happily. And P2.4's
 * own overlay-join gate was, at first, satisfiable by a COMMENT — it grepped source for
 * `canonicalVaultSlug`, which the docblock above the join mentions, so the mutation test
 * passed with the fix fully removed. A gate a comment can make pass is not a gate.
 *
 * So: nothing here is a typed expectation. Counts come from `src/data/*.json` run through
 * the same canonicalization the site applies, and every assertion reads RENDERED OUTPUT
 * fetched over the wire — never source text.
 *
 * WHAT IT IS PROVING
 * ------------------
 * At session open, production (tree=97561c0) served `/commons/` reading
 *   "member records last synced ."
 * — an empty date and a stray full stop — with WilhelmAI showing 0 of its 3 declared
 * relationships and RareArchive 0 of 1. Every dropped field had an honest-absent path, so
 * the failure rendered as consideration rather than as breakage. These assertions exist to
 * make that specific silence loud if it ever returns.
 */
import { readFileSync } from 'node:fs';

const BASE = (process.env.PROBE_BASE || 'https://adna.network').replace(/\/$/, '');

let pass = 0;
const failures = [];

function ok(cond, label, detail = '') {
  if (cond) { pass++; return true; }
  failures.push(`${label}${detail ? ` — ${detail}` : ''}`);
  return false;
}

/** Derive an expectation from the registry. Throws if empty — never assert against nothing. */
function derive(label, fn) {
  const out = fn();
  const empty = out == null
    || (Array.isArray(out) && out.length === 0)
    || (out instanceof Map && out.size === 0)
    || (typeof out === 'number' && out === 0);
  if (empty) {
    throw new Error(`DERIVATION EMPTY: ${label} produced ${JSON.stringify(out) ?? 'nothing'}. ` +
      `Refusing to run — an empty expectation passes vacuously and reports green.`);
  }
  const size = Array.isArray(out) ? out.length
    : out instanceof Map ? out.size
    : typeof out === 'object' ? Object.entries(out).map(([k, v]) => `${k}=${v}`).join(' ')
    : out;
  console.log(`  derived ${String(size).padStart(4)} × ${label}`);
  return out;
}

async function get(url) {
  try {
    const r = await fetch(url, { redirect: 'follow' });
    return { status: r.status, body: await r.text(), url: r.url };
  } catch (e) { return { status: 0, body: '', error: String(e) }; }
}

/** Strip tags so an assertion tests what a reader sees, not what the markup contains. */
const text = (html) => html.replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]*>/g, ' ')
  .replace(/&middot;/g, '·').replace(/&amp;/g, '&').replace(/&#39;/g, "'")
  .replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ')
  .replace(/\s+/g, ' ').trim();

// ── Canonicalization: byte-identical to src/data/vaults.ts, which gate-30 already
//    asserts identical to scripts/build_vaults_data.mjs. Three copies, one rule.
const canonicalVaultSlug = (v) => String(v).toLowerCase().replace(/\.adna$/, '').replace(/[^a-z0-9_-]/g, '_');

// ── tierOf: mirrors src/utils/vaultLabels.ts. Unknown status falls to `planned` — the
//    conservative direction. A derivation that guessed upward is the exact failure this model exists to prevent.
const tierOf = (s) => ({ active: 'in_use', pending: 'chartered' })[String(s || '')] ?? 'planned';

console.log(`\n=== HAUSSMANN P2.4 live deploy probe → ${BASE} ===\n`);
console.log('Deriving expectations from the registry (each throws on empty):');

const registry = JSON.parse(readFileSync('src/data/vaults.json', 'utf8'));
const subnetworks = JSON.parse(readFileSync('src/data/subnetworks.json', 'utf8'));
const subnetRows = Array.isArray(subnetworks) ? subnetworks : (subnetworks.subnetworks ?? []);

const allVaults = derive('registry vaults', () => registry.vaults ?? []);
const canonEdges = derive('registry edges (canonicalized)', () =>
  (registry.edges ?? []).map(e => ({ ...e, source: canonicalVaultSlug(e.source), target: canonicalVaultSlug(e.target) })));

const tierCounts = derive('tier counts', () => {
  const c = { in_use: 0, chartered: 0, planned: 0 };
  for (const v of allVaults) c[tierOf(v.status)]++;
  const total = c.in_use + c.chartered + c.planned;
  if (total !== allVaults.length) throw new Error(`tier grouping dropped rows: ${total} vs ${allVaults.length}`);
  return c;
});

/** The four subnetwork members, with what /commons/ owes each of them. */
const members = derive('subnetwork members (with expected relationships + sync date)', () =>
  subnetRows.map((s) => {
    const m = (s.members ?? [])[0] ?? {};
    const slug = m.vault_slug ? canonicalVaultSlug(m.vault_slug) : null;
    const vault = allVaults.find(v => canonicalVaultSlug(v.vault_slug) === slug);
    return {
      name: s.name ?? s.title ?? slug,
      slug,
      relationships: slug ? canonEdges.filter(e => e.source === slug || e.target === slug).length : 0,
      lastSynced: vault?.last_synced ?? null,
    };
  }));

const expectedSyncDates = derive('distinct member sync dates', () =>
  [...new Set(members.map(m => m.lastSynced).filter(Boolean))].sort());

const canonicalSlugs = derive('canonical vault slugs', () =>
  allVaults.map(v => canonicalVaultSlug(v.vault_slug)));

console.log('\nFetching production surfaces:\n');

// ─────────────────────────────────────────────────────────────────────────────
// 1. /commons/ — the silent drop
// ─────────────────────────────────────────────────────────────────────────────
const commons = await get(`${BASE}/commons/`);
ok(commons.status === 200, '/commons/ returns 200', `got ${commons.status}`);
const commonsText = text(commons.body);

// The exact live symptom: an empty date list leaving a dangling full stop.
ok(!/last synced\s*\./.test(commonsText),
  '/commons/ freshness line is not the empty-date form ("last synced .")',
  'the P2.4 silent drop is back');

for (const d of expectedSyncDates) {
  ok(commonsText.includes(d), `/commons/ renders member sync date ${d}`);
}

// Relationships: a member the registry gives edges to must render that many.
// Counting the rendered separator would couple this to phrasing, so it asserts the
// member's own name is present AND that "Declared relationships" appears as often as
// there are members owed one. Zero-edge members render nothing, by design.
const membersOwedRels = members.filter(m => m.relationships > 0);
ok(membersOwedRels.length > 0, 'at least one member is owed relationships (else this test is vacuous)');
const renderedRelBlocks = (commonsText.match(/Declared relationships/g) ?? []).length;
ok(renderedRelBlocks === membersOwedRels.length,
  `/commons/ renders ${membersOwedRels.length} "Declared relationships" blocks`,
  `rendered ${renderedRelBlocks}`);

for (const m of membersOwedRels) {
  // Each owed member must name at least one counterpart vault it declares an edge with.
  const partners = canonEdges
    .filter(e => e.source === m.slug || e.target === m.slug)
    .map(e => (e.source === m.slug ? e.target : e.source));
  const partnerNames = partners.map(p => allVaults.find(v => canonicalVaultSlug(v.vault_slug) === p)?.display_name).filter(Boolean);
  ok(partnerNames.some(n => commonsText.includes(n)),
    `/commons/ names a declared counterpart for ${m.name} (${m.relationships} edge(s))`,
    `expected one of: ${partnerNames.join(', ') || '(none resolvable)'}`);
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. /vaults/ — tier-first registry
// ─────────────────────────────────────────────────────────────────────────────
const vaultsPage = await get(`${BASE}/vaults/`);
ok(vaultsPage.status === 200, '/vaults/ returns 200', `got ${vaultsPage.status}`);
const vaultsText = text(vaultsPage.body);

ok(vaultsText.includes(`${tierCounts.in_use} are being worked in today`),
  `/vaults/ narrates ${tierCounts.in_use} in use`);
ok(vaultsText.includes(`${tierCounts.chartered} are chartered`),
  `/vaults/ narrates ${tierCounts.chartered} chartered`);
ok(new RegExp(`${tierCounts.planned}\\s+are named places`).test(vaultsText),
  `/vaults/ narrates ${tierCounts.planned} planned`);
ok(vaultsText.includes(`${allVaults.length} context graphs — which is not ${allVaults.length} live projects`),
  `/vaults/ reconciles the ${allVaults.length} framing against the tier split`);

// The caveat ships as body text, not a tooltip (ADR-052 §tiers.2).
ok(/self-declared/i.test(vaultsText), '/vaults/ states that the stages are self-declared, in body text');

// Every tier section is present and anchored (no-JS jump-chip targets).
for (const t of ['in-use', 'chartered', 'planned']) {
  ok(vaultsPage.body.includes(`id="tier-${t}"`), `/vaults/ carries anchor #tier-${t}`);
}
// Jump-chips must point at ids that exist — the P2.4 defect was a component building its
// own href, so a correct tier slug could still emit a dead anchor.
const chipHrefs = [...vaultsPage.body.matchAll(/href="#(tier-[a-z-]+)"/g)].map(m => m[1]);
ok(chipHrefs.length === 3, 'three tier jump-chips are emitted', `found ${chipHrefs.length}`);
for (const h of chipHrefs) {
  ok(vaultsPage.body.includes(`id="${h}"`), `jump-chip #${h} resolves to a real anchor`);
}

// Raw internal status must not reach a public surface (the RegistryCard defect).
for (const raw of ['genesis_stub', 'tbd_at_p0']) {
  ok(!vaultsText.includes(raw), `/vaults/ does not leak raw status "${raw}"`);
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. Homepage — RegistryCard renders a tier label, not a raw status
// ─────────────────────────────────────────────────────────────────────────────
const home = await get(`${BASE}/`);
ok(home.status === 200, '/ returns 200', `got ${home.status}`);
const homeText = text(home.body);
for (const raw of ['genesis_stub', 'tbd_at_p0']) {
  ok(!homeText.includes(raw), `homepage does not leak raw status "${raw}"`);
}
ok(/in use|chartered|planned/i.test(homeText),
  'homepage registry cards carry tier vocabulary (same words as /vaults/)');

// ─────────────────────────────────────────────────────────────────────────────
// 4. Tier badge on a detail page — sampled across all three tiers, so a badge that
//    only renders for `in_use` cannot pass.
// ─────────────────────────────────────────────────────────────────────────────
const sample = derive('detail-page samples (one per tier)', () =>
  ['in_use', 'chartered', 'planned']
    .map(t => allVaults.find(v => tierOf(v.status) === t))
    .filter(Boolean)
    .map(v => ({ tier: tierOf(v.status), slug: canonicalVaultSlug(v.vault_slug) })));

for (const s of sample) {
  const r = await get(`${BASE}/vaults/${s.slug}/`);
  ok(r.status === 200, `/vaults/${s.slug}/ returns 200`, `got ${r.status}`);
  const label = { in_use: 'in use', chartered: 'chartered', planned: 'planned' }[s.tier];
  ok(new RegExp(label, 'i').test(text(r.body)),
    `/vaults/${s.slug}/ shows its tier badge ("${label}")`);
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. Non-canonical vault links — 13 → 0. Every /vaults/<slug> href on the surfaces
//    that emit them must already be canonical, so the accessible path never pays a
//    redirect the mouse path avoids.
// ─────────────────────────────────────────────────────────────────────────────
const linkSurfaces = ['/', '/vaults/', '/commons/', '/network/'];
let linksChecked = 0;
const nonCanonical = [];
for (const path of linkSurfaces) {
  const r = await get(`${BASE}${path}`);
  if (r.status !== 200) { failures.push(`${path} unreachable for link scan — ${r.status}`); continue; }
  for (const m of r.body.matchAll(/href="\/vaults\/([^"/#?]+)/g)) {
    linksChecked++;
    if (m[1] !== canonicalVaultSlug(m[1])) nonCanonical.push(`${path} → /vaults/${m[1]}`);
  }
  // The hero graph's keyboard/AT path read raw data-slug; assert the emitted values too.
  for (const m of r.body.matchAll(/data-slug="([^"]+)"/g)) {
    linksChecked++;
    if (m[1] !== canonicalVaultSlug(m[1])) nonCanonical.push(`${path} → data-slug=${m[1]}`);
  }
}
ok(linksChecked > 0, 'vault links were actually found to check (else this test is vacuous)', `${linksChecked} scanned`);
ok(nonCanonical.length === 0, `0 non-canonical vault links across ${linkSurfaces.length} surfaces`,
  `${nonCanonical.length}: ${nonCanonical.slice(0, 6).join(' · ')}`);

// Spot-check that the canonical targets actually resolve (a canonical link to nowhere
// is not an improvement on a mixed-case link that redirects).
for (const slug of canonicalSlugs.slice(0, 3)) {
  const r = await get(`${BASE}/vaults/${slug}/`);
  ok(r.status === 200, `canonical target /vaults/${slug}/ resolves`, `got ${r.status}`);
}

// ─────────────────────────────────────────────────────────────────────────────
console.log(`\n─────────────────────────────────────────────`);
console.log(`  ${pass} PASS   ${failures.length} FAIL   (scanned ${linksChecked} vault links)`);
if (failures.length) {
  console.log(`\nFAILURES:`);
  for (const f of failures) console.log(`  ✗ ${f}`);
  process.exit(1);
}
console.log(`\n  P2.4 is live and proven on ${BASE}.\n`);
