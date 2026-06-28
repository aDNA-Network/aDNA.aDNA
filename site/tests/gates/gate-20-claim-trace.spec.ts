/**
 * Gate 20 — Claim-trace (Operation Looking Glass representation-coherence gate)
 *
 * Criterion (charter A1, correctness / no fabrication): every flagged high-signal
 * site claim carries a `source_ref` that RESOLVES, and — where a machine accessor is
 * given — the source YIELDS the value the site claims. This is the machine floor under
 * the Claim-Tracer persona + the `representation_coherence` pack: a claim whose source
 * vanished (rename/merge/delete) or whose source no longer says what the site says goes
 * red here, before it reaches a diligence reader.
 *
 * Manifest: tests/gates/fixtures/claim_trace_manifest.json — a SEED set (M1 Construct);
 * M2 (Inspect) extends it with the full enumerated high-signal claim set. Source-of-truth
 * + owner-class (pt19 / website / standard): artifacts/site_backing_slice.md.
 *
 * READ-ONLY: reads committed data + the vault spec; never runs `sync:vaults`, never writes.
 * Pairs with gate-21 (currency) + builds on gate-14 (single-source) + gate-15 (credibility).
 */
import { test, expect } from '@playwright/test';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

type Check =
  | { kind: 'json_field'; accessor: string }
  | { kind: 'json_len'; accessor: string }
  | { kind: 'ts_const'; accessor: string }
  | { kind: 'exists' };

interface Claim {
  id: string;
  class: 'quantitative' | 'status' | 'structural' | 'source_fidelity';
  claim: string;
  rendered_on: string[];
  source_ref: string;
  owner: 'pt19' | 'website' | 'standard';
  check: Check;
  expected: string | null;
}

const MANIFEST = join(process.cwd(), 'tests/gates/fixtures/claim_trace_manifest.json');
const claims: Claim[] = JSON.parse(readFileSync(MANIFEST, 'utf8')).claims;

/** Resolve a source_ref (relative to site/) to an absolute path; vault files use ../ */
const resolveRef = (ref: string) => join(process.cwd(), ref);

/** Read a machine-checkable value from a source file. Returns a string, or null for `exists`. */
function readValue(c: Claim): string | null {
  const abs = resolveRef(c.source_ref);
  switch (c.check.kind) {
    case 'json_field': {
      const data = JSON.parse(readFileSync(abs, 'utf8'));
      const v = c.check.accessor.split('.').reduce<any>((o, k) => (o == null ? o : o[k]), data);
      return String(v);
    }
    case 'json_len': {
      const data = JSON.parse(readFileSync(abs, 'utf8'));
      const arr = c.check.accessor.split('.').reduce<any>((o, k) => (o == null ? o : o[k]), data);
      return String(Array.isArray(arr) ? arr.length : NaN);
    }
    case 'ts_const': {
      const text = readFileSync(abs, 'utf8');
      const m = text.match(new RegExp(`export\\s+const\\s+${c.check.accessor}\\s*=\\s*['"]?([^'";\\n]+)['"]?`));
      return m ? m[1].trim() : null;
    }
    case 'exists':
      return null;
  }
}

test('G-claim-trace: the seed manifest is populated and covers every high-signal class', () => {
  expect(claims.length, 'claim_trace_manifest.json has no claims').toBeGreaterThan(0);
  for (const cls of ['quantitative', 'status', 'structural', 'source_fidelity']) {
    expect(
      claims.some((c) => c.class === cls),
      `no seed claim covers the "${cls}" high-signal class`,
    ).toBe(true);
  }
});

for (const c of claims) {
  test(`G-claim-trace: ${c.id} — source_ref resolves`, () => {
    expect(
      existsSync(resolveRef(c.source_ref)),
      `claim "${c.id}" cites ${c.source_ref}, which does not resolve (renamed/moved/deleted?)`,
    ).toBe(true);
  });
}

for (const c of claims.filter((c) => c.check.kind !== 'exists')) {
  test(`G-claim-trace: ${c.id} — source matches the claim (${c.expected})`, () => {
    expect(
      readValue(c),
      `claim "${c.id}" expects "${c.expected}" from ${c.source_ref} (${c.check.kind}), source disagrees`,
    ).toBe(c.expected);
  });
}
