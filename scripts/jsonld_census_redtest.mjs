#!/usr/bin/env node
/**
 * Red-proof for `jsonld_census.mjs` — HAUSSMANN convention 14.
 *
 * "A verification instrument is not believed until it has been demonstrated to fail."
 * The `--self-test` in the census covers parsers and guards on synthetic input. THIS runs
 * the whole census against a MUTATED COPY OF THE REAL BUILD, one mutation per assertion.
 *
 * ⚠ ATTRIBUTION IS THE POINT. A red arriving through a different assertion than the one
 * mutated is a HARNESS BUG, not a pass — so every case below states which field must move,
 * AND asserts the fields that must NOT move. A mutation that reddens everything proves
 * nothing about the assertion it was aimed at.
 *
 * Usage:  node scripts/jsonld_census_redtest.mjs [--dist DIR]
 */

import { cpSync, mkdtempSync, readFileSync, writeFileSync, rmSync, mkdirSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { census, HarnessError, walkHtml, fileToRoute, classifyTemplate } from './jsonld_census.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const VAULT = resolve(HERE, '..');
const argv = process.argv.slice(2);
const flagOf = (n, d) => { const i = argv.indexOf(n); return i === -1 ? d : argv[i + 1]; };
const DIST = resolve(flagOf('--dist', join(VAULT, 'site/dist')));

const results = [];
const check = (name, pass, detail) => { results.push({ name, pass, detail }); };

/** A throwaway copy of the build, so no mutation can touch the real tree. */
function freshCopy() {
  const dir = mkdtempSync(join(tmpdir(), 'jsonld-redtest-'));
  const dest = join(dir, 'dist');
  cpSync(DIST, dest, { recursive: true });
  return { dir, dest };
}

const BASE = census(DIST);
console.log(
  `baseline: ${BASE.pages_scanned} pages · ${BASE.pages_with_jsonld} with · ` +
  `${BASE.total_blocks} blocks · ${BASE.parse_failures} parse failures · ` +
  `${BASE.organizations_found} Organization\n`,
);
if (BASE.pages_with_jsonld === 0) {
  console.error('REFUSING TO RUN: the baseline already has 0 pages with JSON-LD, so R1 could');
  console.error('not distinguish a working detector from a broken one. Build first.');
  process.exit(1);
}

// ── R1 · strip every ld+json block ────────────────────────────────────────────────────
{
  const { dir, dest } = freshCopy();
  let touched = 0;
  for (const f of walkHtml(dest)) {
    const html = readFileSync(f, 'utf8');
    const stripped = html.replace(
      /<script\b[^>]*type\s*=\s*["']application\/ld\+json[^"']*["'][^>]*>[\s\S]*?<\/script\s*>/gi,
      '',
    );
    if (stripped !== html) { writeFileSync(f, stripped); touched++; }
  }
  const c = census(dest);
  check(
    'R1 · stripping every ld+json block drives coverage to 0 and is NOT a harness error',
    c.pages_with_jsonld === 0 && c.total_blocks === 0 && c.pages_scanned === BASE.pages_scanned,
    `mutated ${touched} file(s) → with=${c.pages_with_jsonld} blocks=${c.total_blocks} scanned=${c.pages_scanned} (baseline scanned ${BASE.pages_scanned})`,
  );
  check(
    'R1 · attribution — page COUNT must not move, only coverage',
    c.pages_scanned === BASE.pages_scanned && c.parse_failures === 0,
    `scanned=${c.pages_scanned} parse_failures=${c.parse_failures}`,
  );
  rmSync(dir, { recursive: true, force: true });
}

// ── R2 · corrupt exactly one block ────────────────────────────────────────────────────
{
  const { dir, dest } = freshCopy();
  let victim = null;
  for (const f of walkHtml(dest)) {
    const html = readFileSync(f, 'utf8');
    const m = /(<script\b[^>]*type\s*=\s*["']application\/ld\+json[^"']*["'][^>]*>)([\s\S]*?)(<\/script\s*>)/i.exec(html);
    if (!m) continue;
    writeFileSync(f, html.replace(m[0], `${m[1]}{ this is not json ,,, ${m[3]}`));
    victim = fileToRoute(dest, f);
    break;
  }
  const c = census(dest);
  check(
    'R2 · one corrupt block reads as exactly 1 parse failure',
    c.parse_failures === 1 && c.parse_failure_routes.length === 1,
    `victim=${victim} parse_failures=${c.parse_failures} routes=${JSON.stringify(c.parse_failure_routes)}`,
  );
  check(
    'R2 · attribution — the corrupt page is NOT silently counted as covered by that block',
    c.type_counts && Object.values(c.type_counts).reduce((a, b) => a + b, 0) <
      Object.values(BASE.type_counts).reduce((a, b) => a + b, 0),
    `types total ${Object.values(c.type_counts).reduce((a, b) => a + b, 0)} vs baseline ${Object.values(BASE.type_counts).reduce((a, b) => a + b, 0)}`,
  );
  check(
    'R2 · attribution — page count and org count must NOT move',
    c.pages_scanned === BASE.pages_scanned && c.organizations_found === BASE.organizations_found,
    `scanned=${c.pages_scanned} orgs=${c.organizations_found}`,
  );
  rmSync(dir, { recursive: true, force: true });
}

// ── R3 · an empty tree is a HARNESS ERROR, never a clean census ───────────────────────
{
  const dir = mkdtempSync(join(tmpdir(), 'jsonld-redtest-empty-'));
  const dest = join(dir, 'dist');
  mkdirSync(dest, { recursive: true });
  let err = null;
  try { census(dest); } catch (e) { err = e; }
  check(
    'R3 · an empty dist raises the EMPTY guard by name, not a 0-page clean report',
    err instanceof HarnessError && /0 pages scanned/.test(err.message),
    err ? String(err.message).split('\n')[0] : 'no throw — the census reported a clean zero',
  );

  // and the floor guard, attributable separately from the empty guard
  mkdirSync(join(dest, 'solo'), { recursive: true });
  writeFileSync(join(dest, 'solo', 'index.html'), '<html><body>x</body></html>');
  let err2 = null;
  try { census(dest); } catch (e) { err2 = e; }
  check(
    'R3b · a 1-page tree raises the FLOOR guard, distinct from the empty guard',
    err2 instanceof HarnessError && /floor is/.test(err2.message),
    err2 ? String(err2.message).split('\n')[0] : 'no throw',
  );
  rmSync(dir, { recursive: true, force: true });
}

// ── R4 · an Organization block with no sameAs ────────────────────────────────────────
{
  const { dir, dest } = freshCopy();
  const target = join(dest, 'index.html');
  const html = readFileSync(target, 'utf8');
  writeFileSync(
    target,
    html.replace('</head>', '<script type="application/ld+json">{"@type":"Organization","name":"aDNA"}</script></head>'),
  );
  const c = census(dest);
  check(
    'R4 · an Organization without sameAs is found AND flagged missing',
    c.organizations_found === BASE.organizations_found + 1 &&
      c.organizations_missing_sameas === BASE.organizations_missing_sameas + 1,
    `found=${c.organizations_found} (base ${BASE.organizations_found}) missing=${c.organizations_missing_sameas} (base ${BASE.organizations_missing_sameas})`,
  );
  check(
    'R4 · attribution — parse failures must NOT move (the injected block is valid JSON)',
    c.parse_failures === BASE.parse_failures,
    `parse_failures=${c.parse_failures}`,
  );
  rmSync(dir, { recursive: true, force: true });
}

// ── R5 · conservation: a page lost between the walk and the table ────────────────────
// ⚠ This is the guard whose FIRST version was vacuous (sum(classCounts) vs rows.length is
// arithmetically forced). Both live limbs are proven here.
{
  let err = null;
  try {
    census(DIST, { classify: (route) => (route === '/' ? undefined : classifyTemplate(route)) });
  } catch (e) { err = e; }
  check(
    'R5 · a classifier returning nothing raises the UNCLASSED guard, not an "undefined" class row',
    err instanceof HarnessError && /no template class/.test(err.message),
    err ? String(err.message).split('\n')[0] : 'no throw — pages tallied under "undefined"',
  );

  // The walk/row limb: a copy whose files the walker sees but the loop would drop is not
  // reachable without editing the census, so it is proven by construction instead — the
  // skip counter must account for the 404 exactly.
  const withOut = census(DIST, { include404: false });
  const withIn = census(DIST, { include404: true });
  check(
    'R5b · the 404 exclusion is a COUNTED skip — including it moves the total by exactly 1',
    withIn.pages_scanned === withOut.pages_scanned + 1,
    `excluded=${withOut.pages_scanned} included=${withIn.pages_scanned}`,
  );
}

// ── Report ────────────────────────────────────────────────────────────────────────────
console.log('');
for (const r of results) {
  console.log(`  ${r.pass ? 'PASS' : 'FAIL'}  ${r.name}`);
  console.log(`        ${r.detail}`);
}
const passed = results.filter((r) => r.pass).length;
console.log(`\nred-proof: ${passed}/${results.length} assertions reddened through their own limb`);
process.exit(passed === results.length ? 0 : 1);
