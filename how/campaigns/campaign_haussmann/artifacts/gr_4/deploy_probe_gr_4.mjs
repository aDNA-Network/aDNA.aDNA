#!/usr/bin/env node
/**
 * GR-4 live deploy probe — the five increments of Lane D copy, asserted against production.
 *
 * ⭐ THE RED RUN IS THE POINT, and this probe exists because a green one would otherwise be worth
 * nothing. P4.5a's finding: *a red run is the only moment an assertion's VACUOUS branch is
 * exercised* — its probe "passed 2 checks against production before the feature existed"
 * (undefined === undefined; "no median" on a 404). So this is run BEFORE the deploy, where the
 * healthy result is MIXED: every GR-4 deliverable FAILS and every control PASSES. A run that fails
 * at everything is a broken probe. A run that passes at everything pre-deploy is a probe pointed at
 * nothing.
 *
 * ⚠ SURFACE MATCHED TO EACH CLAIM'S VERB (convention 17's 2026-08-26 amendment, and convention 18).
 * A reader-facing claim — "a reader encounters this sentence" — is decided on the `.md` TWIN,
 * because Astro splits phrases across source line breaks and a literal HTML match can report a live
 * sentence ABSENT. This campaign shipped exactly that false negative at P4.5b, in the post-deploy
 * probe for the very increment that authored the amendment. A DOM/structure claim — an anchor id, a
 * section class, a `datetime` attribute — is decided on HTML, because the twin flattens it away.
 * Neither surface is a safe default; each assertion below states which it uses and why.
 *
 * ⚠ EVERY ABSENCE ASSERTION NAMES ITS SURFACE (convention 17). "Absent from `/network.md`" is
 * checkable; "absent" is not, and would be falsified by the changelog entry that documents the
 * retirement.
 *
 *   node deploy_probe_gr_4.mjs            # against https://adna.network
 *   node deploy_probe_gr_4.mjs --base URL
 *
 * Exit 0 only when every assertion passes (the post-deploy expectation).
 */
const BASE = (() => {
  const i = process.argv.indexOf('--base');
  return (i > -1 ? process.argv[i + 1] : 'https://adna.network').replace(/\/$/, '');
})();

/** The build production served before this deploy. Recorded so the stamp check cannot be vacuous. */
const PRE_DEPLOY_COMMIT = 'a852423';

let pass = 0, fail = 0;
const results = [];

async function get(path) {
  const res = await fetch(`${BASE}${path}`, { redirect: 'follow' });
  return { status: res.status, body: res.ok ? await res.text() : '' };
}

function check(label, ok, detail = '') {
  if (ok) { pass += 1; results.push(`  PASS  ${label}`); }
  else { fail += 1; results.push(`  FAIL  ${label}${detail ? ` — ${detail}` : ''}`); }
}

console.log(`\nHAUSSMANN GR-4 live probe → ${BASE}`);
console.log('='.repeat(72));

// ── The build stamp, re-read rather than quoted forward (convention 16) ──────────────────────────
const stamp = await get('/.well-known/adna-build.json');
let stampCommit = '(unreadable)';
try { stampCommit = JSON.parse(stamp.body).commit?.slice(0, 7) ?? '(absent)'; } catch {}
console.log(`\nalias is serving: ${stampCommit}\n`);

// ── AC-1 + AC-2 · D1 (model routing) and D2 (the per-mission token budget), as DOCTRINE ──────────
// SURFACE: the `.md` twins. AC-2's own floor is a claim about what a READER meets, and the twin is
// the rendered, flattened text. Asserting presence only — the substance floor is gate-54's job and
// re-implementing it here would be a second instrument disagreeing with the first.
console.log('AC-1 + AC-2 — the doctrine layer is published, on both pages');
{
  const md = await get('/patterns/mission-decomposition.md');
  check('/patterns/mission-decomposition.md responds 200', md.status === 200, `got ${md.status}`);
  check('carries the budgeting-and-routing section', /Budgeting and Routing a Mission/i.test(md.body));
  check('names the budget field `token_budget_estimated`', md.body.includes('token_budget_estimated'));
  check('names the routing field `executor_tier`', md.body.includes('executor_tier'));

  const tut = await get('/learn/tutorials/design-a-mission.md');
  check('/learn/tutorials/design-a-mission.md responds 200', tut.status === 200, `got ${tut.status}`);
  check('the tutorial carries the model-tier step', /Declare the Model Tier/i.test(tut.body));
  check('the tutorial names `executor_tier`', tut.body.includes('executor_tier'));
}

// ── AC-4 · D4, the ancient-DNA disambiguation on /commons ────────────────────────────────────────
// SURFACE: the `.md` twin — AC-4's verb is "a reader encounters".
// ⭐ BOTH TERMS ARE ASSERTED, and that is G54j's reasoning, not belt-and-braces: "ancient DNA"
// alone is a MENTION. A page can name the collision and leave the reader no better off; only the
// pair actually disambiguates.
console.log('\nAC-4 — /commons answers the name collision');
{
  const md = await get('/commons.md');
  check('/commons.md responds 200', md.status === 200, `got ${md.status}`);
  check('names the collision term ("ancient DNA")', /ancient DNA/i.test(md.body));
  check('names what aDNA means HERE ("Agentic DNA")', /Agentic DNA/i.test(md.body));
}

// ── AC-3 · D3, the local-models story on /network ────────────────────────────────────────────────
// SURFACE: the twin for prose. ⛩ Re-ruled onto /network at O3 after the signed destination turned
// out not to exist: `L0–L3` is a HOMONYM (a human-literacy ladder on agentic-literacy.mdx), and the
// compute ladder's only site-wide home is the byte-vendored workspace-router.txt, which Standing
// Rule 1 forbids editing.
console.log('\nAC-3 — /network carries the local-models section, framed as PLANNED');
{
  const md = await get('/network.md');
  check('/network.md responds 200', md.status === 200, `got ${md.status}`);
  check('carries the local-models section', /Running a model on your own machine/i.test(md.body));
  check('frames it as planned, not shipped', /planned work, not shipped work/i.test(md.body));

  // R-161: the pre-existing absolute was put into DIRECT contradiction by the new band and scoped
  // DOWN (convention 1). Absence asserted over `/network.md` ONLY — the surface is named because a
  // site-wide grep would hit the changelog entry whose subject IS the retired sentence.
  check('R-161: the claim is scoped to vault files',
    /your vault files never leave until you choose/i.test(md.body));
  check('R-161: the unscoped absolute is gone from /network.md',
    !/Local-first\s*[—-]\s*nothing leaves until you choose/i.test(md.body));
}

// ── AC-5 · D5, the returning-member entry point on / ─────────────────────────────────────────────
// SURFACE: HTML. Every assertion here is about a DOM node — a section class, an href, a `datetime`
// attribute — and the twin flattens all three away.
// ⭐ THE DERIVATION IS THE LOAD-BEARING ASSERTION. D5's only substantive claim is "these are the
// newest things that happened", which a HARDCODED strip would make falsely while rendering
// identically (R-162). The `datetime` check below is what separates the two, and it is why this
// probe asserts a date rather than a heading.
console.log("\nAC-5 — the homepage strip exists AND is derived");
{
  const home = await get('/');
  check('/ responds 200', home.status === 200, `got ${home.status}`);
  check('the strip section is present', /class="latest-strip"/.test(home.body));

  // ⚠ SCOPED TO THE STRIP'S OWN MARKUP, and the reason is a defect this probe committed on its
  // first run. Asserted against the whole page, "it links the changelog" and "it links the feed"
  // were GREEN PRE-DEPLOY — they were matching the FOOTER, which has linked both since P2-7. Two
  // assertions that pass on a site with no strip at all attribute nothing, which is precisely the
  // vacuity this file's own header quotes P4.5a about. Extracting the section first is what makes
  // a red attributable to the strip (GR-3's F-z: a demonstration is only worth what it can
  // attribute). Found by reading the red run rather than counting it.
  // ⚠ `[^>]*` IS LOAD-BEARING, AND THE FIRST DRAFT OMITTED IT. Astro appends a scoped-style
  // attribute, so the served tag is `<section class="latest-strip" data-astro-cid-j7pv25f6>` — a
  // pattern demanding an immediate `>` extracts the EMPTY STRING and every assertion below fails
  // against nothing. That produced a 4-FAIL post-deploy run on a site where all four facts were
  // live, i.e. a FALSE RED, and the tempting fix was to revert to the whole-page match — which is
  // the vacuity this block was scoped to remove an hour earlier. ⭐ The cheap remedy was the wrong
  // one for the second time in this probe's life; verified at the object (curl) before changing a
  // character, per the campaign's own rule.
  const strip = /<section class="latest-strip"[^>]*>([\s\S]*?)<\/section>/.exec(home.body)?.[1] ?? '';
  check('the strip section EXTRACTS (a scoped-attribute change would empty it)', strip.length > 0,
    'extraction returned empty — the assertions below would fail against nothing, not against the site');
  check('it is headed "What\'s new"', /What(?:&#39;|&apos;|')s new/.test(strip));
  check('the STRIP links the changelog (not merely the footer)', /href="\/changelog"/.test(strip));
  check('the STRIP links the feed (not merely the footer)', /rss\.xml|\/feed/i.test(strip));
  check('the newest entry rendered IS the newest entry that exists (2026-09-03)',
    /datetime="2026-09-03/.test(strip),
    'a hardcoded strip would still be showing 2026-08-28');
}

// ── AC-8 · R-124's minimal disclaiming posture on /privacy ───────────────────────────────────────
// SURFACE: HTML for the anchor — R-124's diagnosis is that "the defect is ROUTING, not policy", so
// a reader scanning HEADINGS must be able to find it, and an `id` is a DOM fact. The twin for the
// sentences, which are reader-facing prose.
console.log('\nAC-8 — /privacy answers the regulated-data question, and claims nothing');
{
  const html = await get('/privacy/');
  check('/privacy/ responds 200', html.status === 200, `got ${html.status}`);
  check('the section has its own anchor (a reader can find it by heading)',
    /id="regulated-data"/.test(html.body));

  const md = await get('/privacy.md');
  check('/privacy.md responds 200', md.status === 200, `got ${md.status}`);
  check('the heading is present', /If you work with regulated data/i.test(md.body));
  check('it states what aDNA is (a file-layout convention)', /file-layout convention/i.test(md.body));
  check('it disclaims rather than reassures ("no regulatory claim")',
    /no regulatory claim/i.test(md.body));
  check('it routes the obligations to the operator (HIPAA/GDPR/IRB named)',
    /HIPAA/.test(md.body) && /GDPR/.test(md.body) && /IRB/.test(md.body));

  // ⛔ THE FOUR CUTS MUST STAY CUT. The AC-7 enumeration removed these before publishing; each is a
  // sentence a later editor could "helpfully" restore. Absence asserted over `/privacy.md` only.
  // ⚠ THESE TWO ARE RESTORATION GUARDS, NOT DELIVERABLES: they pass on BOTH sides of the deploy,
  // because the cut sentences were never published. Labelled so a reader of the red run does not
  // count them among the assertions this deploy is proving — they behave like controls and are
  // read like controls.
  check('the unscoped absolute "moves no data anywhere" is absent from /privacy.md',
    !/moves no data anywhere/i.test(md.body));
  check('the GDPR term of art "processor" is not used to deny a legal role',
    !/not a platform, a processor/i.test(md.body));
}

// ── The deploy itself: production is serving a build that CONTAINS this work ─────────────────────
// ⭐ This is P5.1's AC-P check in miniature — the criterion that a recorded stamp must not merely be
// an ancestor of HEAD but must CONTAIN the closed missions' work. Pre-deploy it fails by design.
console.log('\nTHE STAMP — production is serving this work, not merely a valid build');
{
  check('the build stamp is readable',
    stampCommit !== '(unreadable)' && stampCommit !== '(absent)');
  check(`the alias has moved off the pre-deploy build (${PRE_DEPLOY_COMMIT})`,
    stampCommit !== PRE_DEPLOY_COMMIT, `still serving ${stampCommit}`);
}

// ── CONTROLS: untouched by GR-4, and they must PASS BEFORE AND AFTER ─────────────────────────────
// ⭐ These are what make the pre-deploy run a RED-PROOF rather than a script that fails at
// everything. A probe whose every line reds proves only that it can red.
console.log('\nCONTROLS — untouched by this deploy; PASS on both sides');
{
  const about = await get('/about/');
  check('/about/ responds 200', about.status === 200, `got ${about.status}`);
  const sec = await get('/security/');
  check('/security/ responds 200', sec.status === 200, `got ${sec.status}`);
  const reg = await get('/api/registry.v1.json');
  check('/api/registry.v1.json responds 200', reg.status === 200, `got ${reg.status}`);
  const gs = await get('/get-started.md');
  check('/get-started.md still carries the <name> placeholder (GR-1 AC-3 holds)',
    gs.status === 200 && gs.body.includes('<name>'), `got ${gs.status}`);
  const learn = await get('/learn/what-is-adna.md');
  check('the pre-existing disambiguation on /learn/what-is-adna.md is untouched',
    learn.status === 200 && /ancient DNA/i.test(learn.body), `got ${learn.status}`);
}

console.log('\n' + results.join('\n'));
console.log('\n' + '='.repeat(72));
console.log(`  ${pass} PASS / ${fail} FAIL   (alias serving ${stampCommit})`);
console.log('='.repeat(72));
console.log(fail
  ? '\n⇒ RED. Pre-deploy this is the EXPECTED result and IS the probe\'s red-proof:\n'
    + '  every GR-4 deliverable fails, every control passes. Post-deploy every line must read PASS.\n'
    + '  ⚠ If a CONTROL is among the failures, the probe is broken — fix it before reading anything.\n'
  : '\n✅ GREEN across every assertion.\n'
    + '  ⚠ This green is a statement WITH A TIMESTAMP, not a standing property (convention 16).\n');
process.exit(fail ? 1 : 0);
