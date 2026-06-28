/**
 * Gate 21 — Currency (Operation Looking Glass representation-coherence gate)
 *
 * Criterion (charter A2, currency / no drift): vault-state claims the site renders
 * (counts · version · entity-type count) match the CURRENT single source of truth, and
 * no swept-stale value has crept back. This is the machine floor under A2 — the persona
 * (Standard Archivist) owns the mechanical repo/brand/name currency; this gate owns the
 * rendered vault-state numbers.
 *
 * READ-ONLY by construction: it READS the committed data files (pt19 output `vaults.json`
 * + the single-source `standard.ts`) and the built `dist/`. It NEVER runs `npm run
 * sync:vaults` / `sync:install` and never writes — pt19/Hestia owns regeneration; a drift
 * found here in pt19-owned data (Ring A) is FLAGGED, not hand-fixed (site_backing_slice.md).
 *
 * Static scan of dist/ (assumes a fresh `npx astro build`). Pairs with gate-20 (claim-trace)
 * + builds on gate-14 (single-source repo literals). NOT @audit-tagged — fast, runs every gate pass.
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

// --- Ground truth (read-only) ---------------------------------------------
const vaultsJson = JSON.parse(readFileSync(join(process.cwd(), 'src/data/vaults.json'), 'utf8'));
const VAULT_COUNT: number = vaultsJson.vault_count ?? vaultsJson.vaults.length;
const EDGE_COUNT: number = vaultsJson.edges.length;

const standardTs = readFileSync(join(process.cwd(), 'src/data/standard.ts'), 'utf8');
const tsConst = (name: string) =>
  standardTs.match(new RegExp(`export\\s+const\\s+${name}\\s*=\\s*['"]?([^'";\\n]+)['"]?`))?.[1].trim();
const STANDARD_VERSION = tsConst('STANDARD_VERSION');
const ENTITY_TYPE_COUNT = tsConst('ENTITY_TYPE_COUNT');

test('G-currency: dist/ exists (run `npx astro build` first)', () => {
  expect(htmlFiles(DIST).length, 'dist/ has no HTML — run `npx astro build` first').toBeGreaterThan(100);
});

test('G-currency: current vault count is the single source and reaches the output', () => {
  // Internal single-source: site renders the count from vaults.json, not a hardcoded literal.
  const onCount = htmlFiles(DIST).filter((f) => readFileSync(f, 'utf8').includes(String(VAULT_COUNT)));
  expect(onCount.length, `no built page renders the current vault count (${VAULT_COUNT})`).toBeGreaterThan(0);
});

test('G-currency: current standard version + entity-type count reach the output', () => {
  const all = htmlFiles(DIST).map((f) => readFileSync(f, 'utf8')).join('\n');
  expect(STANDARD_VERSION, 'STANDARD_VERSION not found in standard.ts').toBeTruthy();
  expect(all.includes(STANDARD_VERSION!), `current standard version ${STANDARD_VERSION} absent from output`).toBe(true);
  expect(all.includes(ENTITY_TYPE_COUNT!), `current entity-type count ${ENTITY_TYPE_COUNT} absent from output`).toBe(true);
});

test('G-currency: no swept-stale base entity-type count ("14 entity types") regressed', () => {
  // The base went 14→16 (ADR-035). "14 entity types" as a base claim is stale-only — distinct
  // from the legit current "base 16" and "10 entity types" (the Rosetta extensions). Prose,
  // so adjacency holds. (Standard-version staleness is owned by the Standard Archivist persona,
  // not a blanket literal ban — "v2.2" appears legitimately in governance-model version examples.)
  const offenders = htmlFiles(DIST).filter((f) => /\b14\s+entity\s+types?\b/i.test(readFileSync(f, 'utf8')));
  expect(offenders.map((f) => f.slice(DIST.length + 1)), 'stale "14 entity types" base-count claim in output').toEqual([]);
});

test('G-currency: the network relationship count matches the edge source on its page', () => {
  const netFiles = htmlFiles(DIST).filter((f) => /(^|\/)(network|graph)/.test(f.slice(DIST.length + 1)));
  expect(netFiles.length, 'no network/graph page in dist/').toBeGreaterThan(0);
  expect(
    netFiles.some((f) => readFileSync(f, 'utf8').includes(String(EDGE_COUNT))),
    `no network/graph page renders the current edge count (${EDGE_COUNT})`,
  ).toBe(true);
});
