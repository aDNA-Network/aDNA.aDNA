/**
 * Gate 14 — Single-source / no-drift lint  (WEBSITE TOOLING-PROMOTION gate **G5**)
 *
 * Criterion: the built output carries NO drifted repo/publisher literals — the
 * exact class that produced D1's C-1 (dead `aDNA-Network/aDNA.aDNA` proof-links)
 * and C-3 (`github.com/LatticeProtocol` JSON-LD publisher). Every repo URL and the
 * publisher entity must flow from the canonical source (`src/data/canonical.ts`),
 * so these literals can never reappear without this gate going red.
 *
 * Static scan of dist/ (assumes a fresh `npx astro build`). Pairs with G4
 * (gate-15, JSON-LD publisher canonical) + G6 (gate-15, proof-link integrity).
 *
 * ESCAPE HATCH: a genuinely new legacy reference (e.g. a "renamed from X" note)
 * that must show a forbidden token belongs in body prose, not a URL/publisher —
 * if one is ever legitimate, add it to ALLOW with a dated rationale below.
 */
import { test, expect } from '@playwright/test';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const DIST = join(process.cwd(), 'dist');

function htmlFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...htmlFiles(p));
    else if (entry.name.endsWith('.html')) out.push(p);
  }
  return out;
}

// Forbidden drift literals — the regression guards for C-1 + C-3.
const FORBIDDEN: { pattern: string; why: string }[] = [
  { pattern: 'aDNA-Network/aDNA.aDNA', why: 'C-1 — dead dev-vault repo (404); proofs must point at the public image aDNA-Network/aDNA' },
  { pattern: 'github.com/LatticeProtocol', why: 'C-3 — stale legacy-org publisher/repo; route through canonical.ts' },
  { pattern: 'LatticeProtocol/Agentic-DNA', why: 'C-3 — legacy branding.json github drift' },
];

// Dated allowlist (empty by design). Add `{ file, pattern, rationale, date }` only
// for a deliberate, reviewed exception.
const ALLOW: { file: string; pattern: string }[] = [];

test('G5 single-source: no drifted repo/publisher literals in built output', () => {
  const files = htmlFiles(DIST);
  expect(files.length, 'dist/ has no HTML — run `npx astro build` first').toBeGreaterThan(100);

  const hits: string[] = [];
  for (const f of files) {
    const content = readFileSync(f, 'utf8');
    const rel = f.slice(DIST.length + 1);
    for (const { pattern, why } of FORBIDDEN) {
      if (content.includes(pattern) && !ALLOW.some((a) => a.file === rel && a.pattern === pattern)) {
        hits.push(`${rel}: "${pattern}" — ${why}`);
      }
    }
  }
  expect(hits, `Drifted literals in built output (single-source violated):\n${hits.join('\n')}`).toEqual([]);
});

// Positive assertion: the canonical publisher actually reached the output (so the
// gate can't pass merely because JSON-LD vanished).
test('G5 single-source: canonical publisher "aDNA Network" present in output', () => {
  const files = htmlFiles(DIST);
  const withPublisher = files.filter((f) => readFileSync(f, 'utf8').includes('"name":"aDNA Network"'));
  expect(withPublisher.length, 'no page emitted the canonical publisher in JSON-LD').toBeGreaterThan(0);
});
