#!/usr/bin/env node
/**
 * gen_lighthouse_fixtures.mjs — regenerate gate-19's committed Lighthouse fixtures.
 *
 * HAUSSMANN P4.4b follow-on (2026-09-02): the four `content_static` leaves TBT / a11y / best-practices
 * / seo were ⛩ ruled ADOPTED, and the committed fixtures carried none of them — 1 category, 2 audits.
 * Adoption is therefore a RE-BASELINE, and this is the script that never existed: every fixture's
 * `_provenance` said "regenerate ..." while nothing in the repo could do it.
 *
 * ⚠ THE INSTRUMENT IS DECLARED HERE AND PINNED EXACT (LH_PIN). It is deliberately NOT a
 * devDependency: `gate-19` asserts against COMMITTED fixtures and never runs Lighthouse, so adding
 * ~large install weight to every CI `npm ci` would buy nothing. The pin is declared instead, recorded
 * into each fixture, and ASSERTED by gate-53's G53g — which is stronger than an unpinned devDep and
 * cheaper than a pinned one.
 *
 * ⚠ WHY configSettings IS CARRIED INTO THE SLIM FIXTURE (the whole point of this rewrite): the old
 * fixtures recorded their instrument only in a PROSE `_provenance` string. That was a real record —
 * a 2026-09-02 correction had to strike a claim that it was not — but **a gate cannot assert prose**,
 * so nothing re-checked the form factor and a future re-baseline could have silently switched to
 * mobile emulation with no gate noticing. configSettings makes it machine-checkable.
 *
 * Usage:
 *   node scripts/gen_lighthouse_fixtures.mjs            # build must already exist in dist/
 *   LH_PORT=4465 node scripts/gen_lighthouse_fixtures.mjs
 *
 * ⛔ Port note: 4321 is the gate preview server and WebForge's archetype also claims it. This script
 * uses its own port (default 4465) and NEVER co-runs with the gate suite — Lighthouse timings are
 * invalidated by contention (campaign convention 6).
 */
import { execFileSync, spawn } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FIXTURES = path.join(SITE, 'tests', 'gates', 'fixtures');
const EVIDENCE = path.join(SITE, 'evidence');
const PORT = Number(process.env.LH_PORT || 4465);

/** ⛩ THE PINNED INSTRUMENT. Changing this is an instrument change — re-baseline ALL routes together
 *  and record the move; never let it drift under an unrelated edit. Matches WebForge's exact pin,
 *  the vault whose content_static class our category bars derive from. */
const LH_PIN = '13.4.1';

/** gate-19's guarded routes. Keep in step with GUARDED in gate-19-lighthouse-budget.spec.ts. */
const ROUTES = [
  { route: '/vaults/graph',                       fixture: 'lighthouse_d4c5_graph.json',      raw: 'lighthouse_d4c5_graph.json',  note: 'H-11 (D4 C5) — the graph page' },
  { route: '/learn/concepts/knowledge-graph',     fixture: 'lighthouse_d4c6_concept.json',    raw: 'lighthouse_d4c6_concept_knowledge-graph.json', note: 'M-7 (D4 C6) — the most code-fence-dense concept page' },
  { route: '/get-started',                        fixture: 'lighthouse_get_started.json',     raw: 'lighthouse_get-started.json', note: 'Storyweave P5 M5.3 O3 — the onboarding entry surface' },
  { route: '/learn/what-is-adna',                 fixture: 'lighthouse_what_is_adna.json',    raw: 'lighthouse_what-is-adna.json', note: 'Storyweave P5 M5.3 O3 — the flagship learn surface' },
];

const TODAY = process.env.LH_DATE || new Date().toISOString().slice(0, 10);

function startPreview() {
  const p = spawn('npx', ['astro', 'preview', '--port', String(PORT)], { cwd: SITE, stdio: ['ignore', 'pipe', 'pipe'] });
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error(`preview did not start on :${PORT} in 30s`)), 30_000);
    p.stdout.on('data', (d) => { if (/localhost:\d+/.test(String(d))) { clearTimeout(t); resolve(p); } });
    p.on('exit', (c) => { clearTimeout(t); reject(new Error(`preview exited early (${c}) — is dist/ built?`)); });
  });
}

function runLighthouse(url, rawOut) {
  execFileSync('npx', [
    '--yes', `lighthouse@${LH_PIN}`, url,
    '--preset=desktop',
    '--only-categories=performance,accessibility,best-practices,seo',
    '--output=json', `--output-path=${rawOut}`,
    '--quiet', '--chrome-flags=--headless=new --no-sandbox',
  ], { cwd: SITE, stdio: ['ignore', 'ignore', 'inherit'], timeout: 180_000 });
  return JSON.parse(fs.readFileSync(rawOut, 'utf8'));
}

/** The committed fixture is deliberately SLIM — the full LHR is ~1 MB and the repo carries four of
 *  them. Slim to exactly what gate-19 asserts + what gate-53's G53g needs to check the instrument. */
function slim(lhr, { route, note }) {
  const a = lhr.audits ?? {};
  const c = lhr.categories ?? {};
  return {
    _provenance:
      `Lighthouse ${lhr.lighthouseVersion} desktop on ${route} — ${note}. ` +
      `Regenerated ${TODAY} by scripts/gen_lighthouse_fixtures.mjs (HAUSSMANN P4.4b follow-on: the ⛩ adoption of ` +
      `content_static's TBT + a11y/best-practices/seo bars required categories the prior fixtures did not carry). ` +
      `Command: lighthouse --preset=desktop --only-categories=performance,accessibility,best-practices,seo. ` +
      `The full raw run is archived local-only at site/evidence/ (gitignored); this slim fixture is what gate-19 ` +
      `asserts and what gate-53 G53g checks the instrument of. ` +
      `⚠ configSettings is carried DELIBERATELY: a gate cannot assert prose, and without it nothing re-checks the ` +
      `form factor.`,
    finalUrl: lhr.finalUrl ?? lhr.finalDisplayedUrl ?? lhr.requestedUrl,
    lighthouseVersion: lhr.lighthouseVersion,
    configSettings: {
      formFactor: lhr.configSettings?.formFactor,
      screenEmulation: lhr.configSettings?.screenEmulation,
      throttling: lhr.configSettings?.throttling,
      throttlingMethod: lhr.configSettings?.throttlingMethod,
    },
    categories: Object.fromEntries(
      ['performance', 'accessibility', 'best-practices', 'seo']
        .filter((k) => c[k])
        .map((k) => [k, { score: c[k].score }]),
    ),
    audits: Object.fromEntries(
      ['largest-contentful-paint', 'cumulative-layout-shift', 'total-blocking-time']
        .filter((k) => a[k])
        .map((k) => [k, { numericValue: a[k].numericValue }]),
    ),
  };
}

const server = await startPreview();
const measured = [];
try {
  fs.mkdirSync(EVIDENCE, { recursive: true });
  for (const r of ROUTES) {
    const url = `http://localhost:${PORT}${r.route}`;
    const rawOut = path.join(EVIDENCE, r.raw);
    process.stderr.write(`  measuring ${r.route} ...\n`);
    const lhr = runLighthouse(url, rawOut);
    const s = slim(lhr, r);
    fs.writeFileSync(path.join(FIXTURES, r.fixture), `${JSON.stringify(s, null, 2)}\n`);
    measured.push({ route: r.route, ...Object.fromEntries(Object.entries(s.categories).map(([k, v]) => [k, v.score])), tbt: s.audits['total-blocking-time']?.numericValue, form: s.configSettings.formFactor });
  }
} finally {
  server.kill();
}

// MEASURE FIRST, THEN PIN (B0's rule: a number written by feel is a formality wearing a pin's
// clothing). This table is the evidence a bar decision is taken against — it is printed, not assumed.
process.stderr.write('\n  MEASURED (decide bars against THIS, never against expectation):\n');
for (const m of measured) {
  process.stderr.write(
    `    ${m.route.padEnd(34)} perf ${m.performance} | a11y ${m.accessibility} | bp ${m['best-practices']} | seo ${m.seo} | tbt ${Math.round(m.tbt)}ms | ${m.form}\n`,
  );
}
process.stderr.write(`\n  instrument: lighthouse@${LH_PIN} --preset=desktop · ${measured.length} routes · ${TODAY}\n`);
