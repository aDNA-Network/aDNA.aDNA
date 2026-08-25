#!/usr/bin/env node
/**
 * P3.5 live probe — run against PRODUCTION, before and after the deploy.
 *
 * The pre-deploy run must be RED. A probe that is green before the change it is supposed to prove
 * is not an instrument, it is decoration (P4.5a's finding: the 12 that passed pre-deploy are what
 * made the 14 failures mean something).
 *
 * Usage: node deploy_probe_p3_5.mjs [base]   (default https://adna.network)
 */
const BASE = (process.argv[2] || 'https://adna.network').replace(/\/$/, '');

let pass = 0;
let fail = 0;

function check(label, ok) {
  console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${label}`);
  ok ? pass++ : fail++;
}

async function get(path) {
  try {
    const r = await fetch(BASE + path, { redirect: 'follow' });
    return { status: r.status, body: await r.text() };
  } catch (e) {
    return { status: 0, body: '' };
  }
}

console.log(`\nHAUSSMANN P3.5 live probe → ${BASE}`);
console.log('='.repeat(64));

// ── ADR-055 §7: the surface exists ────────────────────────────────────────
console.log('\nADR-055 §7 — the proposal surface is live');
const archive = await get('/community/proposals/');
check('/community/proposals/ responds 200', archive.status === 200);
check('archive renders the AEP-1 row', archive.body.includes('/community/proposals/aep-1/'));
check('archive renders the AEP-2 row', archive.body.includes('/community/proposals/aep-2/'));
check('archive shows the eight-state table', archive.body.includes('dormant'));

for (const n of [1, 2]) {
  const p = await get(`/community/proposals/aep-${n}/`);
  check(`/community/proposals/aep-${n}/ responds 200`, p.status === 200);
  check(`AEP-${n} renders its state history`, p.body.includes('State history'));
  check(`AEP-${n} discloses agent authorship`, p.body.includes('Drafted by an agent'));
}

// ── ADR-055 §7: the machine index ─────────────────────────────────────────
console.log('\nADR-055 §7 — the machine index, and it agrees with the pages');
const idx = await get('/community/proposals.json');
check('/community/proposals.json responds 200', idx.status === 200);
let json = null;
try {
  json = JSON.parse(idx.body);
} catch {}
check('index parses as JSON', json !== null);
check('index declares a schema version', !!json?.schema_version);
// Guarded on json existing: `json?.count === json?.proposals?.length` is `undefined === undefined`
// when the index is absent, which PASSES against a site that does not have the feature at all.
// Caught on this probe's own red run — a vacuous pass is the decoration this file's header warns of.
check(
  'index count equals the proposals it serves',
  Array.isArray(json?.proposals) && json.count === json.proposals.length,
);
check(
  'every proposal in the index has a page linked from the archive',
  !!json?.proposals?.every((p) => archive.body.includes(`/community/proposals/aep-${p.number}/`)),
);

// ── ADR-055 §4/§5: the claims the surface makes about itself ──────────────
console.log('\nADR-055 §4/§5 — final is enforced, ratification is human');
const aep1 = json?.proposals?.find((p) => p.number === 1);
check('AEP-1 is final', aep1?.status === 'final');
check('AEP-1 names a conformance check', !!aep1?.conformance_check);
check('AEP-1 names a human ratifier', !!aep1?.ratified_by);
const aep2 = json?.proposals?.find((p) => p.number === 2);
check('AEP-2 is in review', aep2?.status === 'review');
check('AEP-2 claims no ratifier', aep2?.ratified_by === null);
check('index states ratification is human only', json?.process?.ratification === 'human only');

// ── ADR-055 §8: honest youth ──────────────────────────────────────────────
console.log('\nADR-055 §8 — no metric is published that was never measured');
check('index publishes no median review time', json?.process?.median_review_days === null);
// Same guard: an absent page trivially contains no median. The claim is "the LIVE archive says so",
// which requires the archive to be there before the absence means anything.
check(
  'archive publishes no numeric median',
  archive.status === 200 && !/median review time (of|is) \d/i.test(archive.body),
);

// ── D9 (R-122/R-123): the funnel, on the site and off it ──────────────────
console.log('\nD9 — the funnel reaches the archive, and the advertised door works');
const community = await get('/community/');
check('/community links to the archive', community.body.includes('href="/community/proposals/"'));
check('/community explains how the standard changes', community.body.includes('How the standard changes'));
check('the footer carries Proposals site-wide', archive.body.includes('>Proposals<'));

for (const [repo, file] of [
  ['aDNA-Network/aDNA', 'CONTRIBUTING.md'],
  ['aDNA-Network/aDNA', 'CODE_OF_CONDUCT.md'],
  ['aDNA-Network/aDNA.aDNA', 'LICENSE'],
]) {
  const r = await fetch(`https://raw.githubusercontent.com/${repo}/main/${file}`);
  check(`${repo}/${file} is 200 (off-site CTA target)`, r.status === 200);
}

console.log('\n' + '='.repeat(64));
console.log(`${pass} PASS / ${fail} FAIL`);
process.exit(fail === 0 ? 0 : 1);
