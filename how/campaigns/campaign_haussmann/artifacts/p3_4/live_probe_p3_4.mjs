#!/usr/bin/env node
// HAUSSMANN P3.4 — live probe for the /community integration + the two collateral surfaces.
// Run against production BEFORE the deploy (must be RED on the deliverables, GREEN on the
// controls — a uniformly red probe proves nothing) and AFTER (must be 0 FAIL).
//   node live_probe_p3_4.mjs [base]        default base: https://adna.network
const BASE = process.argv[2] || 'https://adna.network';
const UA = { 'User-Agent': 'aDNA-rosetta-p3.4-live-probe/1.0' };

const norm = (s) => s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"')
  .replace(/[—–]/g, '-').replace(/&mdash;/g, '-').replace(/&#8212;/g, '-')
  .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
  .replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

const results = [];
const rec = (kind, label, ok, detail = '') => results.push({ kind, label, ok, detail });

async function get(path) {
  const res = await fetch(BASE + path, { headers: UA, redirect: 'follow' });
  return { status: res.status, body: await res.text() };
}

const pages = {};
for (const p of ['/community/', '/canonical-properties/', '/state-of-the-network/', '/changelog/']) {
  try { pages[p] = await get(p); } catch (e) { pages[p] = { status: 0, body: '' }; }
}

const has = (p, phrase) => norm(pages[p].body).includes(norm(phrase));
const hasRaw = (p, s) => pages[p].body.includes(s);

// ---- CONTROLS: unchanged by this mission. Must be GREEN before AND after. ----------------
rec('control', '/community/ serves 200', pages['/community/'].status === 200, `status=${pages['/community/'].status}`);
rec('control', '/community/ still carries the participation ladder', has('/community/', 'The participation ladder'));
rec('control', '/community/ still carries the proposal section', has('/community/', 'aDNA Enhancement Proposals'));
rec('control', '/community/ still links the venue', hasRaw('/community/', 'https://community.adna.network'));
rec('control', '/community/ keeps the no-vanity-metrics band', has('/community/', "What you won't find here: member counts"));
rec('control', '/canonical-properties/ serves 200', pages['/canonical-properties/'].status === 200);
rec('control', '/state-of-the-network/ serves 200', pages['/state-of-the-network/'].status === 200);

// ---- DELIVERABLES: must be RED before the deploy, GREEN after. ---------------------------
rec('deliverable', 'R-95 new text present', has('/community/', 'registration is approval-gated, so joining is a request an operator reviews, not a click'));
rec('deliverable', 'R-95 stale text ABSENT', !has('/community/', 'still being stood up'));
rec('deliverable', 'stale probe date 2026-08-17 ABSENT', !has('/community/', 'as of 2026-08-17'));
rec('deliverable', 'current probe date 2026-08-22 present', has('/community/', 'as of 2026-08-22'));
rec('deliverable', 'falsified "not in chat" ABSENT', !has('/community/', 'not in chat'));
rec('deliverable', 'terms of service linked', hasRaw('/community/', 'community-policies/blob/main/terms.md'));
rec('deliverable', 'privacy notice linked', hasRaw('/community/', 'community-policies/blob/main/privacy.md'));
rec('deliverable', 'code of conduct linked', hasRaw('/community/', 'community-policies/blob/main/code_of_conduct.md'));
rec('deliverable', 'CoC link is venue-scoped ("space\'s own")', has('/community/', "the space's own"));
rec('deliverable', 'R-140 both commitments present', has('/community/', 'your content is not used to train or evaluate AI models, and every agent in the space is labeled as an agent'));
rec('deliverable', 'R-141 question-path routing present', has('/community/', 'Anything that should leave a durable record'));
rec('deliverable', 'Discussions NOT named as the counterpart', !has('/community/', 'start in Discussions'));
rec('deliverable', '/canonical-properties/ "human-to-human" ABSENT', !has('/canonical-properties/', 'human-to-human'));
rec('deliverable', '/state-of-the-network/ "human-to-human" ABSENT', !has('/state-of-the-network/', 'human-to-human'));
rec('deliverable', '/canonical-properties/ carries the corrected description', has('/canonical-properties/', 'self-hosted, approval-gated, and early'));
// ⚠ The changelog INDEX renders entry BODIES, not frontmatter titles — no entry's title appears
// there (2026-08-21's scores 0 too). The first version of this assertion looked for the title and
// reported FAIL against a page that was serving the entry correctly: the instrument, not the
// subject. Assert on the H2, which actually renders.
rec('deliverable', '/changelog/ carries today\'s entry', has('/changelog/', 'A sentence that stopped being true'));
// ⚠ AND NOTE: that entry QUOTES the stale sentence, because the entry is about it. So
// "still being stood up" IS live on /changelog/ — as a marked former claim inside a blockquote,
// immediately followed by the sentence saying it went false. That is the strike-not-delete
// pattern, not a regression. Every absence assertion above is scoped to /community/ ON PURPOSE;
// a site-wide grep for the old phrase will hit the changelog and must not be read as a relapse.
rec('deliverable', 'the changelog quotes the old claim AS a former claim', has('/changelog/', 'from that moment the sentence was false'));

// ---- report -----------------------------------------------------------------------------
const w = (b) => (b ? 'PASS' : 'FAIL');
let pass = 0, fail = 0;
for (const kind of ['control', 'deliverable']) {
  console.log(`\n── ${kind.toUpperCase()}S ──`);
  for (const r of results.filter((x) => x.kind === kind)) {
    r.ok ? pass++ : fail++;
    console.log(`  ${w(r.ok).padEnd(4)}  ${r.label}${r.detail ? '  [' + r.detail + ']' : ''}`);
  }
}
const cFail = results.filter((r) => r.kind === 'control' && !r.ok).length;
console.log(`\nbase=${BASE}  ${pass} PASS / ${fail} FAIL   (controls failing: ${cFail} — must be 0 in every run)`);
process.exit(fail === 0 ? 0 : 1);
