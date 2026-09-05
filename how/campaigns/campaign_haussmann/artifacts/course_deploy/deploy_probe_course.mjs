#!/usr/bin/env node
/**
 * Course-deploy live probe — the intro course + C1's /privacy rewrite, asserted against production.
 *
 * ⭐ THE RED RUN IS THE POINT. P4.5a's finding: *a red run is the only moment an assertion's VACUOUS
 * branch is exercised* — its probe "passed 2 checks against production before the feature existed"
 * (undefined === undefined; "no median" on a 404). So this runs BEFORE the deploy, where the healthy
 * result is MIXED: every course/C1 deliverable FAILS and every control PASSES. A run that fails at
 * everything is a broken probe; a run that passes at everything pre-deploy is a probe pointed at
 * nothing.
 *
 * ⚠ AND THIS PROBE'S OWN FAMILY HAS SHIPPED TWO FALSE REDS. GR-3's gate-42, and GR-4's deploy probe,
 * where a section-extraction regex demanding an immediate `>` returned the EMPTY STRING because Astro
 * appends `data-astro-cid-*` — four assertions then "failed" against nothing, and the cheap fix
 * (revert to a whole-page match) would have restored the vacuity the scoping had just removed.
 * ⇒ EVERY EXTRACTION HERE ASSERTS IT REACHED REAL TEXT, FIRST AND ALONE (see `extractSection`), so a
 * broken extraction reports as a broken extraction and never as a failing subject.
 *
 * ⚠ SURFACE MATCHED TO EACH CLAIM'S VERB (conventions 17 + 18). "A reader encounters this phrase" is
 * decided on the `.md` TWIN — Astro splits phrases across source line breaks and a literal HTML match
 * can report a LIVE sentence absent (P4.5b shipped exactly that false negative). A structural claim —
 * a route resolving, a key literal in a shipped bundle — is decided on HTML/JS, because the twin
 * flattens it away. Neither is a safe default; each assertion says which it uses.
 *
 *   node deploy_probe_course.mjs            # against https://adna.network
 *   node deploy_probe_course.mjs --base URL
 *
 * Exit 0 only when every assertion passes (the post-deploy expectation).
 */
const BASE = (() => {
  const i = process.argv.indexOf('--base');
  return (i > -1 ? process.argv[i + 1] : 'https://adna.network').replace(/\/$/, '');
})();

/** The build production served before this deploy. Recorded so the stamp check cannot be vacuous. */
const PRE_DEPLOY_COMMIT = '2a72efe';

let pass = 0, fail = 0;
const results = [];

async function get(path) {
  try {
    const res = await fetch(`${BASE}${path}`, { redirect: 'follow' });
    return { status: res.status, body: res.ok ? await res.text() : '' };
  } catch (e) {
    return { status: 0, body: '', error: String(e) };
  }
}

function check(label, ok, detail = '') {
  if (ok) { pass += 1; results.push(`  PASS  ${label}`); }
  else { fail += 1; results.push(`  FAIL  ${label}${detail ? ` — ${detail}` : ''}`); }
}

/**
 * Extract a heading-delimited section from a `.md` twin, and ASSERT THE EXTRACTION REACHED TEXT.
 * ⭐ The guard reds FIRST and ALONE when the extraction empties, so the cause reports ahead of the
 * symptom (GR-3) — otherwise N content assertions fail against an empty string and the reader is told
 * the site lost a section when in fact the probe lost its grip on the markup.
 */
function extractSection(md, headingRe, label) {
  const lines = md.split('\n');
  const start = lines.findIndex((l) => headingRe.test(l));
  if (start < 0) {
    check(`[extraction] ${label}: heading found`, false, `no line matching ${headingRe}`);
    return null;
  }
  let end = lines.length;
  for (let i = start + 1; i < lines.length; i++) if (/^##\s/.test(lines[i])) { end = i; break; }
  const section = lines.slice(start, end).join('\n');
  const ok = section.trim().length > 40;
  check(`[extraction] ${label}: section is non-empty (${section.trim().length} chars)`, ok,
        'the extraction returned nothing — this is a PROBE fault, not a site fault');
  return ok ? section : null;
}

const run = async () => {
  // ── build stamp ───────────────────────────────────────────────────────────────────────────────
  const stamp = await get('/.well-known/adna-build.json');
  let served = '(unreadable)';
  try { served = JSON.parse(stamp.body).commit ?? '(absent)'; } catch { /* pre-deploy 404 is fine */ }
  check('build stamp: production is NOT still serving the pre-deploy commit',
        stamp.status === 200 && !served.startsWith(PRE_DEPLOY_COMMIT),
        `serving ${served.slice(0, 7)} (pre-deploy was ${PRE_DEPLOY_COMMIT})`);

  // ── the course routes (STRUCTURAL ⇒ HTTP status) ──────────────────────────────────────────────
  for (const p of ['/learn/course/', '/learn/course/what-is-an-adna-graph/',
                   '/learn/course/four-files-your-agent-reads-first/']) {
    const r = await get(p);
    check(`course route ${p} resolves 200`, r.status === 200, `status ${r.status}`);
  }

  // ── the course twins (MACHINE SURFACE) ────────────────────────────────────────────────────────
  const twin = await get('/learn/course/what-is-an-adna-graph.md');
  check('course lesson emits a .md twin', twin.status === 200, `status ${twin.status}`);

  // ── C1: /privacy enumerates and never totals (READER-FACING ⇒ the TWIN) ───────────────────────
  const priv = await get('/privacy.md');
  check('/privacy.md is reachable', priv.status === 200, `status ${priv.status}`);
  if (priv.status === 200) {
    const sec = extractSection(priv.body, /^##\s+.*stored in your browser/i, '/privacy storage section');
    if (sec) {
      check('C1: the storage section names `theme`', sec.includes('`theme`'));
      check('C1: the storage section names `adna:course:v1`', sec.includes('`adna:course:v1`'));
      check('C1: the retired absolute "That is the only thing the site stores" is GONE from this section',
            !sec.includes('That is the only thing the site stores'));
      check('C1: the heading no longer counts ("The one thing stored" retired)',
            !/^##\s+The one thing stored in your browser/m.test(sec));
      // ⚠ Scoped to the SECTION, not the page: the anchor id `the-one-exception` is deliberately
      // KEPT (nothing links it; renaming churns a stable identifier), so a page-wide search for
      // "one" would red on a thing we chose not to change. Convention 17 — name the surface.
    }
  }

  // ── controls: things that must be TRUE BEFORE AND AFTER ───────────────────────────────────────
  // ⭐ Without these a pre-deploy run that fails at everything is indistinguishable from a probe
  // pointed at a dead host, and its red would prove nothing about the assertions above.
  for (const p of ['/', '/privacy/', '/network/', '/commons/']) {
    const r = await get(p);
    check(`[control] ${p} still 200`, r.status === 200, `status ${r.status}`);
  }
  const home = await get('/.md');
  const homeTwin = home.status === 200 ? home.body : (await get('/index.md')).body;
  check('[control] R-97 is still live on the homepage twin ("aDNA itself sends nothing")',
        homeTwin.includes('aDNA itself sends nothing'),
        'the NOT-line deployed on 2026-09-04 must survive this deploy');

  console.log(`\ncourse-deploy probe — ${BASE}`);
  console.log(`serving: ${served}\n`);
  for (const r of results) console.log(r);
  console.log(`\n  ${pass} PASS / ${fail} FAIL\n`);
  process.exit(fail === 0 ? 0 : 1);
};

run();
