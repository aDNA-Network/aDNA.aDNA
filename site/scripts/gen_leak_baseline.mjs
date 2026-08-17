#!/usr/bin/env node
/**
 * HAUSSMANN P0.5 (editorial gate, O2) — leak-baseline generator.
 *
 * Regenerates `tests/gates/fixtures/leak_baseline.json` from the CURRENT build
 * snapshot (campaign convention 8: derive fixtures from the build, never pin
 * literals by hand). Run after `npx astro build`.
 *
 *   node scripts/gen_leak_baseline.mjs            # rewrite the baseline
 *   node scripts/gen_leak_baseline.mjs --check    # report drift, write nothing
 *
 * P1.3 workflow: fix the registry projection -> rebuild -> `--check` to see the
 * findings fall -> regenerate -> the baseline shrinks toward the empty state that
 * gate-27's expected-failure test is waiting on.
 *
 * The baseline is DEBT, not permission. Deliberate public copy that matches a
 * pattern belongs in leak_allowlist.json (token-scoped, dated, reviewed) instead.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(SITE, 'dist');
const FIX = join(SITE, 'tests/gates/fixtures');

const patterns = JSON.parse(readFileSync(join(FIX, 'leak_patterns.json'), 'utf8')).patterns;
const allowlist = JSON.parse(readFileSync(join(FIX, 'leak_allowlist.json'), 'utf8')).entries;

/** Surfaces scanned: every built HTML page + the curated machine surfaces. */
export function scanTargets(dist) {
  const out = [];
  const walk = (dir) => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith('.html')) out.push(p);
    }
  };
  walk(dist);
  for (const extra of ['llms.txt', 'llms-full.txt']) {
    const p = join(dist, extra);
    if (existsSync(p)) out.push(p);
  }
  return out.sort();
}

/** `**` suffix glob, or an exact path. */
export function surfaceMatches(surface, file) {
  if (surface.endsWith('/**')) return file.startsWith(surface.slice(0, -2));
  if (surface === '**') return true;
  return surface === file;
}

/** Is this exact token excused on this exact surface, for this pattern? */
export function isAllowed(file, patternId, token, entries = allowlist) {
  return entries.some(
    (e) =>
      e.pattern === patternId &&
      surfaceMatches(e.surface, file) &&
      e.tokens.some((t) => token === t || token.startsWith(t)),
  );
}

/** Scan the build snapshot -> sorted findings [{file, pattern, count, tokens}]. */
export function scanFindings(dist = DIST, entries = allowlist) {
  const findings = [];
  for (const abs of scanTargets(dist)) {
    const file = relative(dist, abs);
    const text = readFileSync(abs, 'utf8');
    for (const p of patterns) {
      const re = new RegExp(p.regex, p.flags.includes('g') ? p.flags : `${p.flags}g`);
      const hits = (text.match(re) || []).filter((h) => !isAllowed(file, p.id, h, entries));
      if (!hits.length) continue;
      findings.push({
        file,
        pattern: p.id,
        count: hits.length,
        tokens: [...new Set(hits)].sort(),
      });
    }
  }
  return findings.sort((a, b) => a.file.localeCompare(b.file) || a.pattern.localeCompare(b.pattern));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  if (!existsSync(DIST)) {
    console.error('dist/ missing — run `npx astro build` first.');
    process.exit(1);
  }
  const findings = scanFindings();
  const occurrences = findings.reduce((n, f) => n + f.count, 0);
  const files = new Set(findings.map((f) => f.file)).size;

  if (process.argv.includes('--check')) {
    const prev = existsSync(join(FIX, 'leak_baseline.json'))
      ? JSON.parse(readFileSync(join(FIX, 'leak_baseline.json'), 'utf8')).findings
      : [];
    const key = (f) => `${f.file}::${f.pattern}`;
    const prevMap = new Map(prev.map((f) => [key(f), f]));
    const nowMap = new Map(findings.map((f) => [key(f), f]));
    const added = [...nowMap.keys()].filter((k) => !prevMap.has(k));
    const cleared = [...prevMap.keys()].filter((k) => !nowMap.has(k));
    console.log(`baseline check: ${findings.length} finding rows / ${occurrences} occurrences / ${files} files`);
    console.log(`  new rows: ${added.length}${added.length ? `\n    ${added.join('\n    ')}` : ''}`);
    console.log(`  cleared rows: ${cleared.length}${cleared.length ? `\n    ${cleared.join('\n    ')}` : ''}`);
    process.exit(0);
  }

  writeFileSync(
    join(FIX, 'leak_baseline.json'),
    `${JSON.stringify(
      {
        _doc:
          'HAUSSMANN P0.5 (editorial gate, O2) — leak-lint BASELINE: the internal-language leaks present in the build on the generated date. This is tracked DEBT, not permission. gate-27 fails on any finding NOT recorded here (new leaks are blocked immediately) and carries one expected-failure test asserting this list is EMPTY — that test flips to an unexpected pass when P1.3 clears the debt, forcing this file to be retired.',
        _regenerate: 'npx astro build && node scripts/gen_leak_baseline.mjs',
        _not_an_allowlist:
          'Deliberate public copy that matches a pattern belongs in leak_allowlist.json (token-scoped, dated, reviewed) — never here.',
        generated: new Date().toISOString().slice(0, 10),
        expires: 'P1.3',
        expires_mission: 'mission_haussmann_p1_3_registry_truth',
        summary: { finding_rows: findings.length, occurrences, files },
        findings,
      },
      null,
      2,
    )}\n`,
  );
  console.log(`leak_baseline.json written: ${findings.length} rows / ${occurrences} occurrences / ${files} files`);
}
