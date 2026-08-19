#!/usr/bin/env node
/**
 * HAUSSMANN P2.5 — live deploy probe.
 *
 * Asserts against PRODUCTION that the P2.5 deploy actually landed. Run from `site/`:
 *   node ../how/campaigns/campaign_haussmann/artifacts/p2_5/deploy_probe_p2_5.mjs
 * Override the target with PROBE_BASE (e.g. a preview URL, or http://localhost:4399).
 *
 * WHAT IT IS PROVING
 * ------------------
 * Two different things, and they fail in different ways:
 *
 *   1. The tour is real. /get-started/what-your-agent-reads/ claims "these are the standard's
 *      bytes, at this commit, and here is the SHA-256 — go check your own clone." That claim is
 *      only worth anything if the bytes the SERVER sends still hash to the published number. So
 *      this probe fetches each page, extracts the verbatim block, un-escapes it, and re-hashes
 *      it over the wire. A build-time gate cannot prove this; only a live fetch can.
 *
 *   2. The invention is gone. Production has been serving a hand-written terminal transcript on
 *      /get-started/ — output the software does not print, three inches above the one sentence
 *      the refusing cold-read reader said he trusted. Its absence is asserted by name.
 *
 * WHY EVERY EXPECTATION IS DERIVED
 * --------------------------------
 * P2.1's probe reported a green "64 PASS, 0 FAIL" while testing nothing in its canonical third:
 * it guessed a field name, got an empty array, and iterated it happily. So nothing here is a
 * typed expectation — file slugs, hashes, line counts and the pinned commit all come from
 * `src/data/tour_manifest.json`, the install commands from `src/data/install_truth.json`, and
 * every derivation throws rather than yielding an empty set that would pass vacuously.
 *
 * The one deliberate exception is INVENTED_STRINGS: those are typed, because they are strings
 * that must exist nowhere. Deriving them from the artifact would defeat the point — there is no
 * artifact left to derive them from, which is exactly the state being asserted.
 */
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const BASE = (process.env.PROBE_BASE || 'https://adna.network').replace(/\/$/, '');

let pass = 0;
const failures = [];

function ok(cond, label, detail = '') {
  if (cond) { pass++; return true; }
  failures.push(`${label}${detail ? ` — ${detail}` : ''}`);
  return false;
}

/** Derive an expectation from committed data. Throws if empty — never assert against nothing. */
function derive(label, fn) {
  const out = fn();
  const empty = out == null
    || (Array.isArray(out) && out.length === 0)
    || (typeof out === 'string' && out.trim() === '')
    || (typeof out === 'number' && out === 0);
  if (empty) {
    throw new Error(`DERIVATION EMPTY: ${label} produced ${JSON.stringify(out) ?? 'nothing'}. ` +
      `Refusing to run — an empty expectation passes vacuously and reports green.`);
  }
  const size = Array.isArray(out) ? out.length : String(out).slice(0, 60);
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
  .replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ').replace(/&thinsp;/g, ' ')
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/\s+/g, ' ').trim();

/**
 * Reverse the renderer's escaping on a verbatim block. `&amp;` LAST or it double-decodes
 * (`&amp;lt;` would become `<` instead of `&lt;`) and every hash would be wrong for a reason
 * that looks like drift.
 */
const unescapeVerbatim = (s) => s
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
  .replace(/&amp;/g, '&');

const sha256 = (s) => createHash('sha256').update(s).digest('hex');

console.log(`\n=== HAUSSMANN P2.5 live deploy probe → ${BASE} ===\n`);
console.log('Deriving expectations from committed data (each throws on empty):');

const manifest = JSON.parse(readFileSync('src/data/tour_manifest.json', 'utf8'));
const installTruth = JSON.parse(readFileSync('src/data/install_truth.json', 'utf8'));

const tourFiles = derive('vendored tour files', () => manifest.files ?? []);
const pinnedSha = derive('pinned source commit', () => manifest.source_sha);
const oneLiner = derive('install one-liner', () => installTruth.one_liner);
const workspaceRoot = derive('workspace root', () => installTruth.workspace_root);

/** Strings that must exist NOWHERE. Typed on purpose — see the header. */
const INVENTED_STRINGS = ['Loaded CLAUDE.md', 'what problem does it solve'];

const TOUR_BASE = '/get-started/what-your-agent-reads';

// ─── 1 · The tour hub ────────────────────────────────────────────────────────
console.log('\n-- tour hub');
const hub = await get(`${BASE}${TOUR_BASE}/`);
ok(hub.status === 200, 'tour hub resolves', `got ${hub.status}`);
const hubText = text(hub.body);

ok(hubText.includes(pinnedSha), `hub shows the pinned commit ${pinnedSha}`);
for (const f of tourFiles) {
  ok(hub.body.includes(`${TOUR_BASE}/${f.slug}/`), `hub links ${f.slug}`);
  ok(hubText.includes(f.source_path), `hub names ${f.source_path}`);
}

// The self-reference close (SO#8) — the triad is derived at build time, so its absence means
// the generator's vault_triad went empty and nobody noticed.
for (const leg of (manifest.vault_triad ?? [])) {
  ok(hubText.includes(`${leg.leg}/`), `hub shows the real ${leg.leg}/ leg`);
}

// ─── 2 · Each detail page, re-hashed over the wire ───────────────────────────
console.log('\n-- vendored files (re-hashed from the served HTML)');
for (const f of tourFiles) {
  const page = await get(`${BASE}${TOUR_BASE}/${f.slug}/`);
  if (!ok(page.status === 200, `${f.slug} resolves`, `got ${page.status}`)) continue;

  ok(page.body.includes(f.sha256), `${f.slug} publishes its SHA-256`);

  const m = /<pre class="tour-file"[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/.exec(page.body);
  if (!ok(m, `${f.slug} serves a verbatim block`)) continue;

  const served = unescapeVerbatim(m[1]);
  const servedHash = sha256(served);
  ok(servedHash === f.sha256, `${f.slug} served bytes hash to the published value`,
    `served ${servedHash.slice(0, 12)} vs published ${f.sha256.slice(0, 12)}`);
  ok(served.length > 0 && served.split('\n').length === f.lines,
    `${f.slug} served ${f.lines} lines`, `got ${served.split('\n').length}`);
}

// ─── 3 · /get-started/ — the cost statement ──────────────────────────────────
console.log('\n-- /get-started/ cost statement');
const gs = await get(`${BASE}/get-started/`);
ok(gs.status === 200, '/get-started/ resolves', `got ${gs.status}`);
const gsText = text(gs.body);

ok(gsText.includes(oneLiner), 'the one-liner renders from install-truth');
ok(gs.body.includes(`${TOUR_BASE}/`), '/get-started/ links the tour');
ok(gsText.includes(`rm -rf ${workspaceRoot}`), 'uninstall command stated');
ok(/prompt-ware/i.test(gsText), 'the trust objection is answered in place (prompt-ware named)');
ok(/Claude Code convention/i.test(gsText), 'the Claude-Code-convention caveat is stated');
ok(/no telemetry|Nothing is sent anywhere/i.test(gsText), 'the nothing-is-sent claim is present');

// ─── 4 · First success, troubleshooting, uninstall ───────────────────────────
console.log('\n-- first success / troubleshooting / uninstall');
ok(gsText.includes(`test -f ${workspaceRoot}/CLAUDE.md`), 'first-success assertion 1 published');
ok(gsText.includes(`test -d ${workspaceRoot}/.adna`), 'first-success assertion 2 published');
ok(gsText.includes(`ls -d ${workspaceRoot}/*.aDNA`), 'first-success assertion 3 published');
ok(gsText.includes(`git -C ${workspaceRoot}/`), 'first-success assertion 5 (own git history) published');
ok(/greets you already holding|already know where it is/i.test(gsText),
  'the behavioural half of first success is published');
ok(/If something goes wrong/i.test(gsText), 'troubleshooting section present');
ok(/Removing it/i.test(gsText), 'uninstall section present');

// ─── 5 · The invention is gone ───────────────────────────────────────────────
console.log('\n-- R-118 / R-119: the fabricated transcript and its prose twin');
for (const s of INVENTED_STRINGS) {
  ok(!gs.body.includes(s), `/get-started/ no longer serves "${s}"`);
}
// R-119: the mechanism was asserted twice in prose beyond the code block. It is legitimate on the
// tour pages (the standard's own words, shown verbatim) — so this assertion is scoped to
// /get-started/, where it was a claim the page was making in its own voice.
ok(!/onboarding interview/i.test(gsText) || /offers to run an onboarding interview/i.test(gsText),
  '/get-started/ no longer credits the interview with scaffolding the project');
ok(/project-fork skill|fork skill/i.test(gsText),
  '/get-started/ names the skill that actually runs on a fresh clone');
ok(/not yet recorded|not recorded/i.test(gsText),
  'the gap where the transcript was is LABELLED, not silent');

// ─────────────────────────────────────────────────────────────────────────────
console.log(`\n─────────────────────────────────────────────`);
console.log(`  ${pass} PASS   ${failures.length} FAIL   (${tourFiles.length} vendored files re-hashed over the wire)`);
if (failures.length) {
  console.log(`\nFAILURES:`);
  for (const f of failures) console.log(`  ✗ ${f}`);
  process.exit(1);
}
console.log(`\n  P2.5 is live and proven on ${BASE}.\n`);
