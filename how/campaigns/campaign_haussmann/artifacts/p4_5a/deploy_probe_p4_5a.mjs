#!/usr/bin/env node
/**
 * HAUSSMANN P4.5a — live deploy probe for the copy increment.
 *
 * Run it TWICE: once against production BEFORE the deploy (it must be RED, and red in a
 * discriminating way — some assertions already hold), and once after (it must be GREEN).
 * A probe that has only ever been seen green has not been shown to test anything.
 *
 *   node deploy_probe_p4_5a.mjs                      # https://adna.network
 *   node deploy_probe_p4_5a.mjs http://localhost:4400
 *
 * Rows covered: R-120 (S2) · R-125 / ⊳ D-C (S2) · R-111 (S2, narrowed to /canonical-properties
 * per register §9.7) · R-121 (S3). R-124 is NOT covered — it was deferred out of the mission
 * (§9.3), and a probe asserting a fix nobody made would be the self-certifying-gate class.
 *
 * Probe idiom is the register's (claim_register.md:668): occurrence counting with context
 * extraction over served HTML. `grep -c` counts LINES and served HTML is one line.
 */

const BASE = (process.argv[2] || 'https://adna.network').replace(/\/$/, '');

// The routes that render HomeHero. DERIVED from the live site, not typed: any page whose markup
// carries `hero-trust-links`. Typing this list is how the cut misses a surface — the term was
// hardcoded in BOTH arms of the graphLed branch, so three of these four render the OTHER arm.
const CANDIDATE_ROUTES = ['/', '/network/', '/commons/', '/vaults/', '/about/', '/get-started/', '/community/'];

const EMBARGOED_TERM = 'Lattice Protocol';
const TRUST_REPLACEMENT = 'the standard, versioned and public';
const R120_RETIRED = 'and shared in the open';
const R120_REPAIR = 'The standard that shapes it is open';
const R14_FALSE_GLOSS = 'the open coordination protocol';
const R111_DISCLOSURE = 'also holds a role at the Foundation';
const R121_INVENTED = ['200 files', 'three days'];
const R121_LABEL = 'not a case study, and no measured project is being described';

let pass = 0;
const failures = [];
const known = [];

const ok = (name, cond, detail = '') => {
  if (cond) { pass++; console.log(`  PASS  ${name}`); }
  else { failures.push(`${name}${detail ? ` — ${detail}` : ''}`); console.log(`  FAIL  ${name}${detail ? ` — ${detail}` : ''}`); }
};

const strip = (html) =>
  html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&')
    .replace(/&mdash;/g, '—').replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ');

const count = (hay, needle) => {
  let n = 0, i = 0;
  const h = hay.toLowerCase(), t = needle.toLowerCase();
  while ((i = h.indexOf(t, i)) !== -1) { n++; i += t.length; }
  return n;
};

async function get(path) {
  const res = await fetch(BASE + path, { headers: { 'User-Agent': 'haussmann-p4.5a-probe' }, redirect: 'follow' });
  const body = res.ok ? await res.text() : '';
  return { status: res.status, raw: body, text: strip(body) };
}

(async () => {
  console.log(`\nHAUSSMANN P4.5a live probe → ${BASE}\n${'='.repeat(64)}\n`);

  // ── Derive the HomeHero route set ────────────────────────────────────────────
  const pages = new Map();
  for (const r of CANDIDATE_ROUTES) pages.set(r, await get(r));

  const heroRoutes = CANDIDATE_ROUTES.filter((r) => pages.get(r).raw.includes('hero-trust-links'));

  // EMPTY-DERIVATION GUARD. P2.1's probe reported a green "64 PASS, 0 FAIL" while testing nothing
  // in its canonical third: it guessed a field name, got an empty array, and iterated it happily.
  // An instrument that cannot find its subject must THROW, never print green.
  if (heroRoutes.length === 0) {
    throw new Error('EMPTY DERIVATION: no route carried `hero-trust-links`. The probe found no subject — refusing to report.');
  }
  if (heroRoutes.length < 4) {
    throw new Error(`EMPTY-ISH DERIVATION: only ${heroRoutes.length} HomeHero route(s) found (${heroRoutes.join(', ')}); expected 4. Either the component moved or the probe is looking at the wrong thing — refusing to report a partial sweep as a clean one.`);
  }
  console.log(`Derived ${heroRoutes.length} HomeHero routes: ${heroRoutes.join(', ')}\n`);

  console.log('R-125 / ⊳ D-C — the embargoed term is cut from every hero, replacement present');
  for (const r of heroRoutes) {
    const p = pages.get(r);
    ok(`${r} responds 200`, p.status === 200, `got ${p.status}`);
    ok(`${r} — "${EMBARGOED_TERM}" absent`, count(p.text, EMBARGOED_TERM) === 0, `found ×${count(p.text, EMBARGOED_TERM)}`);
    ok(`${r} — term-free replacement present`, count(p.text, TRUST_REPLACEMENT) === 1, `found ×${count(p.text, TRUST_REPLACEMENT)}`);
  }

  console.log('\nR-120 — the homepage 30-second zone says ONE thing about where files live');
  {
    const home = pages.get('/');
    ok('/ — "and shared in the open" absent', count(home.text, R120_RETIRED) === 0, `found ×${count(home.text, R120_RETIRED)}`);
    ok('/ — openness attached to the standard', count(home.text, R120_REPAIR) === 1, `found ×${count(home.text, R120_REPAIR)}`);
    ok('/ — the local promise still stands', count(home.text, 'nothing leaves your machine') === 1);
    // Already true before the deploy — this is what makes the run DISCRIMINATING rather than
    // uniformly red. A probe where everything fails cannot tell you which fix landed.
    ok('/ — retired FALSE gloss R-14 still gone', count(home.text, R14_FALSE_GLOSS) === 0);
  }

  console.log('\nR-111 — related-party disclosure, on all THREE surfaces that need it');
  for (const r of ['/canonical-properties/', '/about/', '/state-of-the-network/']) {
    const p = await get(r);
    ok(`${r} responds 200`, p.status === 200, `got ${p.status}`);
    ok(`${r} — discloses the operator's Foundation role`, count(p.text, R111_DISCLOSURE) >= 1, 'absent');
  }

  console.log('\nR-121 — no invented specifics presented as observation');
  {
    const p = await get('/learn/what-is-adna/');
    ok('/learn/what-is-adna/ responds 200', p.status === 200, `got ${p.status}`);
    for (const s of R121_INVENTED) ok(`  "${s}" absent`, count(p.text, s) === 0, `found ×${count(p.text, s)}`);
    ok('  the hypothetical is labelled as such', count(p.text, R121_LABEL) === 1, 'label absent');
  }

  console.log('\nKNOWN-OPEN — stated, not silently passed');
  known.push('R-124 (S3) — DEFERRED out of P4.5a (register §9.3): routing it requires authoring a clinical posture, which is a positioning decision nobody has taken. Not probed here on purpose.');
  known.push('R-122 / R-123 (S2) — belong to P3.5, the next mission in the ruled order. Not probed here.');
  known.push(`"${EMBARGOED_TERM}" survives on 2 deep pages by design (register §9.1 boundary): /learn/tutorials/exchange-adoption-path/ (TAUGHT-AS-DESIGN, self-explaining) and /get-started/what-your-agent-reads/skill-onboarding/ (byte-exact vendored .adna file — editing it would falsify the page and red gate-36).`);
  for (const k of known) console.log(`  OPEN  ${k}`);

  console.log(`\n${'='.repeat(64)}`);
  console.log(`${pass} PASS / ${failures.length} FAIL   (${known.length} known-open, printed above)\n`);
  if (failures.length) { console.log('FAILURES:'); failures.forEach((f) => console.log(`  - ${f}`)); console.log(); }
  process.exit(failures.length ? 1 : 0);
})();
