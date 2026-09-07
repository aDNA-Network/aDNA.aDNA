#!/usr/bin/env node
/**
 * Deploy probe for the field-CWV transport increment — 2026-09-07.
 *
 * Run it TWICE: once against production BEFORE the deploy (it must go RED) and once AFTER (it must
 * go GREEN). A probe that is green before the deploy proves nothing about the deploy — the
 * course-deploy precedent (8 PASS / 8 FAIL pre, 16/0 post) is the shape this follows.
 *
 * ⚠ EXTRACTION HAZARD, AND IT HAS BITTEN THIS CAMPAIGN ALREADY. Astro stamps `data-astro-cid-*`
 * INSIDE every tag, so a section regex demanding an immediate `>` returns the EMPTY STRING and its
 * assertions then fail against nothing — the campaign's second false red. Two defences here:
 *   1. every content assertion runs on FLATTENED TEXT, not markup;
 *   2. an EXTRACTION-REACHED assertion runs FIRST and ALONE, so an empty extraction reds as
 *      "extraction failed" rather than as "content missing" (O3's rule: a case that cannot apply
 *      must fail alone).
 *
 * Usage:  node probe_transport.mjs [--origin https://adna.network]
 */

const argv = process.argv.slice(2);
const i = argv.indexOf('--origin');
const ORIGIN = (i === -1 ? 'https://adna.network' : argv[i + 1]).replace(/\/$/, '');

const flatten = (html) =>
  html.replace(/<[^>]*>/g, ' ')
      .replace(/&amp;/g, '&').replace(/&#8212;|&mdash;/g, '—').replace(/&#39;/g, "'")
      .replace(/\s+/g, ' ');

const results = [];
const check = (name, pass, detail) => {
  results.push({ name, pass });
  console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}\n        ${detail}`);
};

async function get(path) {
  const res = await fetch(ORIGIN + path, { redirect: 'follow' });
  const landed = new URL(res.url || ORIGIN + path);
  if (landed.origin !== new URL(ORIGIN).origin) {
    throw new Error(`off-origin landing for ${path} → ${res.url}`);
  }
  return { status: res.status, body: res.ok ? await res.text() : '' };
}

async function run() {
  console.log(`transport deploy probe — origin ${ORIGIN}\n`);

  const build = await get('/.well-known/adna-build.json');
  const stamp = build.status === 200 ? JSON.parse(build.body) : {};
  console.log(`  serving commit: ${(stamp.commit || '?').slice(0, 7)}  built ${stamp.built_at || '?'}\n`);

  const home = await get('/');
  const privacy = await get('/privacy/');
  const changelog = await get('/changelog/');

  // ── 1. Extraction reached its subject. FIRST and ALONE. ──────────────────────────────────────
  const privacyText = flatten(privacy.body);
  check(
    'EXTRACTION: /privacy fetched 200 and flattened to real text',
    privacy.status === 200 && privacyText.length > 2000,
    `status ${privacy.status}, ${privacyText.length} chars of flattened text ` +
      `(a short/empty extraction would make every assertion below fail against NOTHING)`,
  );

  // ── 2. The transport is mounted on the live pages ────────────────────────────────────────────
  check(
    'MOUNT: the live homepage renders <vercel-speed-insights>',
    home.body.includes('vercel-speed-insights'),
    `status ${home.status}; marker ${home.body.includes('vercel-speed-insights') ? 'present' : 'ABSENT'}`,
  );
  check(
    'MOUNT: the live /privacy renders <vercel-speed-insights>',
    privacy.body.includes('vercel-speed-insights'),
    `marker ${privacy.body.includes('vercel-speed-insights') ? 'present' : 'ABSENT'}`,
  );

  // ── 3. The platform actually serves the injected script (production only) ────────────────────
  const script = await get('/_vercel/speed-insights/script.js');
  check(
    'PLATFORM: /_vercel/speed-insights/script.js is served (200), not 404',
    script.status === 200,
    `status ${script.status} — this is the path the component injects. Under astro preview it 404s ` +
      `by construction; in PRODUCTION the Vercel platform must serve it or nothing is collected.`,
  );

  // ── 4. The disclosure shipped, and shipped in the right direction ────────────────────────────
  check(
    'DISCLOSURE: /privacy carries the transport sentence',
    privacyText.includes('Those numbers are now sent to Vercel'),
    `"Those numbers are now sent to Vercel" ${privacyText.includes('Those numbers are now sent to Vercel') ? 'present' : 'ABSENT'}`,
  );
  check(
    'DISCLOSURE: the pre-transport claim "not sent anywhere" is GONE',
    !privacyText.includes('not sent anywhere'),
    `"not sent anywhere" ${privacyText.includes('not sent anywhere') ? 'STILL PRESENT — the page contradicts itself' : 'absent'}`,
  );
  check(
    'DISCLOSURE: /privacy still distinguishes the second, in-page measurement',
    privacyText.includes('stays entirely on your device'),
    `the in-page emitter is unchanged and the page must still say so`,
  );

  // ── 5. The changelog entry is live ───────────────────────────────────────────────────────────
  const changelogText = flatten(changelog.body);
  // ⛔⛔ THIS ASSERTION WAS WRONG ON ITS FIRST WRITING AND IT NEVER DISCRIMINATED.
  // It asserted the frontmatter TITLE ("Page-speed numbers now leave your browser") appears on
  // /changelog/. That page renders the VERSION, the DATE and the BODY — never the title — so the
  // assertion was red BEFORE the deploy and red AFTER, for the same reason both times, and its red
  // carried no information about whether anything shipped. GR-3's F-z exactly: *a demonstration is
  // only worth what it can attribute.* Corrected to assert what the page actually renders.
  // ⚠ THE COST IS STATED RATHER THAN ERASED: the replacement below has NOT been demonstrated red
  // against the pre-deploy build, because production had already moved by the time the defect was
  // found. That the old build lacked "2026-09-07" is an INFERENCE (the entry did not exist), not a
  // measurement. Recorded as a limit, on the GR-4 precedent for its four strip assertions.
  check(
    'CHANGELOG: the 2026-09-07 entry is live',
    changelogText.includes('2026-09-07') && changelogText.includes('What is different now'),
    `version marker ${changelogText.includes('2026-09-07') ? 'present' : 'ABSENT'}; ` +
      `body heading ${changelogText.includes('What is different now') ? 'present' : 'ABSENT'} ` +
      `(this page renders version + date + body, NOT the frontmatter title)`,
  );
  check(
    'CHANGELOG: the homepage latest-strip leads with it',
    flatten(home.body).includes('Page-speed numbers now leave your browser'),
    `the strip is derived from the collection, so this also proves the derivation ran`,
  );

  const pass = results.filter((r) => r.pass).length;
  const fail = results.length - pass;
  console.log(`\n${pass} PASS / ${fail} FAIL  (${results.length} assertions)`);
  console.log(fail > 0
    ? '⇒ RED. Run before the deploy this is the REQUIRED result — it is what makes the post-deploy green mean something.'
    : '⇒ GREEN.');
  return fail === 0;
}

run().then((ok) => process.exit(ok ? 0 : 1)).catch((e) => {
  console.error(`\nprobe could not reach its subject: ${e.message}`);
  process.exit(2);
});
