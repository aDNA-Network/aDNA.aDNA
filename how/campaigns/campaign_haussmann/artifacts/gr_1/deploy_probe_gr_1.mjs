#!/usr/bin/env node
/**
 * GR-1 live deploy probe — the trust-path repairs, asserted against production.
 *
 * ⭐ THE RED RUN IS THE POINT. P3.5's finding: *a red run is the only moment an assertion's vacuous
 * branch is exercised* — its probe "passed 2 checks against a site without the feature". A probe
 * that has only ever been green may be asserting nothing. So this is run BEFORE the deploy, where a
 * healthy result is MIXED: the GR-1 deliverables FAIL and the surrounding controls PASS. A run that
 * fails at everything is a broken probe; a run that passes at everything pre-deploy is a probe
 * pointed at nothing.
 *
 * ⚠ SURFACE MATCHED TO EACH CLAIM'S VERB (convention 17's 2026-08-26 amendment). A reader-facing
 * claim is decided on the `.md` twin — Astro splits phrases across source line breaks, so a literal
 * HTML match can report a live sentence ABSENT (this campaign shipped exactly that error at P4.5b).
 * A DOM/label claim is decided on HTML. Each assertion below states which and why.
 *
 *   node deploy_probe_gr_1.mjs            # against https://adna.network
 *   node deploy_probe_gr_1.mjs --base URL
 *
 * Exit 0 only when every assertion passes (the post-deploy expectation).
 */
const BASE = (() => {
  const i = process.argv.indexOf('--base');
  return (i > -1 ? process.argv[i + 1] : 'https://adna.network').replace(/\/$/, '');
})();

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

console.log(`\nHAUSSMANN GR-1 live probe → ${BASE}`);
console.log('='.repeat(64));

// ── The build stamp, re-read rather than quoted forward (convention 16) ──────────────────────
const stamp = await get('/.well-known/adna-build.json');
let stampCommit = '(unreadable)';
try { stampCommit = JSON.parse(stamp.body).commit?.slice(0, 7) ?? '(absent)'; } catch {}
console.log(`\nalias is serving: ${stampCommit}\n`);

// ── AC-1 · the CSP no longer blocks the site's own font ──────────────────────────────────────
// SURFACE: the served stylesheet. The claim is about a BYTE IN THE CSS, so the CSS is the surface —
// not the console, which needs a browser, and not the source, which is not what production serves.
console.log("AC-1 — no font ships as a data: URI (the production CSP would refuse it)");
{
  const home = await get('/');
  check('/ responds 200', home.status === 200, `got ${home.status}`);
  const href = /href="(\/_astro\/[^"]+\.css)"/.exec(home.body)?.[1];
  check('the BaseLayout stylesheet is linked from /', Boolean(href));
  if (href) {
    const css = await get(href);
    const inlined = (css.body.match(/url\(\s*["']?data:(?:font|application\/(?:font|x-font))/gi) ?? []).length;
    check(`served stylesheet carries no inlined font — found ${inlined}`, inlined === 0);
  }
}

// ── AC-4 · the provenance pin resolves PUBLICLY, in the repo the page names ──────────────────
// SURFACE: HTML for the rendered label, then GitHub itself for reachability. The whole defect was a
// pin that resolved locally and nowhere else, so a local check would reproduce the original error.
console.log("\nAC-4 — the trust page cites a release that actually resolves");
{
  const tour = await get('/get-started/what-your-agent-reads/');
  check('/get-started/what-your-agent-reads/ responds 200', tour.status === 200, `got ${tour.status}`);
  check('cites release v8.9, not a bare commit sha', /v8\.9/.test(tour.body));
  check('no 40-hex commit sha in a source link',
    !/\/(?:blob|tree)\/[0-9a-f]{40}\//.test(tour.body));

  const links = [...tour.body.matchAll(/href="(https:\/\/github\.com\/aDNA-Network\/aDNA\/(?:tree|blob)\/[^"]+)"/g)]
    .map((m) => m[1]);
  check(`the page publishes its source links — found ${links.length}`, links.length >= 1);
  for (const url of [...new Set(links)].slice(0, 5)) {
    const r = await fetch(url, { method: 'HEAD', redirect: 'follow' });
    check(`source link resolves publicly (${r.status}) — ${url.replace('https://github.com/aDNA-Network/aDNA', '…')}`,
      r.status === 200, `HTTP ${r.status}`);
  }
}

// ── AC-3 · the twin serves the placeholders it exists to carry ───────────────────────────────
// SURFACE: the .md twin. It IS the artifact under test — this is not a proxy for anything.
console.log("\nAC-3 — the machine copy of the quickstart is not corrupted");
{
  const twin = await get('/get-started.md');
  check('/get-started.md responds 200', twin.status === 200, `got ${twin.status}`);
  check('the twin carries the <name> placeholder', twin.body.includes('<name>'));
  check('the check command is intact, not collapsed to ~/aDNA/.aDNA',
    !twin.body.includes('~/aDNA/.aDNA/what'));
  check('the explanatory sentence is not an empty code span',
    !/Replace\s+``\s+with/.test(twin.body));
}

// ── AC-5 · three copy claims ─────────────────────────────────────────────────────────────────
// SURFACE: the TWIN for reader-facing sentences (Astro line-breaks defeat literal HTML matching —
// P4.5b shipped exactly that false negative); HTML for the /reference card label, which is a DOM node.
console.log("\nAC-5 — the copy says what is true");
{
  const twin = await get('/get-started.md');
  check('the unscoped "Nothing is sent anywhere" is gone',
    !twin.body.includes('Nothing is sent anywhere'));
  check('the agent step is disclosed (Anthropic named)', /Anthropic/.test(twin.body));
  check('the command count is corrected to three', /the last three/.test(twin.body));
  check('the wrong count "except the last two" is gone',
    !twin.body.includes('except the last two'));

  const ref = await get('/reference/');
  check('/reference/ responds 200', ref.status === 200, `got ${ref.status}`);
  check('the card reads "Visual Identity v2"', ref.body.includes('Visual Identity v2'));
  check('the mislabelled "Visual Identity v3" is gone', !ref.body.includes('Visual Identity v3'));
}

// ── AC-2 · the agent-facing surface carries no present-tense protocol claim ──────────────────
// SURFACE: llms.txt itself — a machine surface, decided on the emitted bytes.
console.log("\nAC-2 — llms.txt makes no runs-on-the-protocol claim");
{
  const llms = await get('/llms.txt');
  check('/llms.txt responds 200', llms.status === 200, `got ${llms.status}`);
  check('the present-tense protocol claim is absent',
    !/(federating on|federates on|built on|runs on|powered by)\s+the\s+Lattice\s+Protocol/i.test(llms.body));
  check('the derived counts survived the rewrite', /\d+\s+vaults/.test(llms.body));
}

// ── Controls: things GR-1 did NOT change and which must be true either way ───────────────────
// ⭐ These are what make a pre-deploy run a RED-PROOF rather than a script that fails at everything.
console.log("\nCONTROLS — untouched by GR-1; PASS before and after");
{
  const priv = await get('/privacy/');
  check('/privacy/ responds 200', priv.status === 200, `got ${priv.status}`);
  const acc = await get('/accessibility/');
  check('/accessibility/ responds 200', acc.status === 200, `got ${acc.status}`);
  const reg = await get('/api/registry.v1.json');
  check('/api/registry.v1.json responds 200', reg.status === 200, `got ${reg.status}`);
  check('the build stamp is readable', stampCommit !== '(unreadable)' && stampCommit !== '(absent)');
}

console.log('\n' + results.join('\n'));
console.log('\n' + '='.repeat(64));
console.log(`  ${pass} PASS / ${fail} FAIL   (alias serving ${stampCommit})`);
console.log('='.repeat(64));
console.log(fail
  ? '\n⇒ RED. Pre-deploy this is the EXPECTED result and is the probe\'s red-proof:\n'
    + '  the GR-1 deliverables fail, the controls pass. Post-deploy every line must read PASS.\n'
  : '\n✅ GREEN across every assertion.\n');
process.exit(fail ? 1 : 0);
