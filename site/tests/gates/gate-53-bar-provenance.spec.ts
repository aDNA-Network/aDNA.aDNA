/**
 * gate-53 — BAR PROVENANCE (HAUSSMANN P4.4b B2b; AC4 as replaced+amended; closes register row F-e).
 *
 * WHAT THIS GATE CLAIMS: every bar gate-19 enforces has a RECORDED SOURCE, the recorded value is
 * the value actually in force, and the recorded source content is self-consistent with its hash.
 *
 * ⚠ CONVENTION 18 — THE SURFACE EACH LIMB RUNS AGAINST, stated because a green here is otherwise
 * evidence for something it never touched:
 *   G53a–G53e read ONLY files inside this repo (bar_provenance.json + gate-19's source). They run
 *   EVERYWHERE, including CI, and they are the limbs that carry the claim.
 *   G53f reads the PEER VAULT (WebForge.aDNA), which does not exist in CI. It reports NOT VERIFIED
 *   explicitly rather than skipping quietly — because gate-36's original pin limb resolved its pin
 *   in the same checkout the pin came from AND test.skip'ed itself out of CI, so it COULD ONLY EVER
 *   PASS. This gate does not repeat that.
 *
 * ⚠ WHY A SUBTREE HASH AND NOT A FILE HASH — measured, not argued (2026-09-02): between our
 * federation pin 6096157 and WebForge HEAD b7c6d653 the profiles FILE moved 43988 -> 52879 bytes
 * across 5 commits, while classes.content_static did NOT move (sha256 identical at both refs). A
 * file hash would have gone red across all five for reasons unrelated to our bars.
 *
 * ⚠ WHAT THIS GATE DOES NOT CLAIM: it does not claim our fixtures were measured on desktop.
 * They carry configSettings ABSENT, so that is [I], not [D] — recorded in
 * bar_provenance.json un_adopted.notes.fixture_attribution and deliberately NOT asserted here.
 */
import { test, expect } from '@playwright/test';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const GATES_DIR = path.dirname(fileURLToPath(import.meta.url));
const PROV_PATH = path.join(GATES_DIR, 'bar_provenance.json');
const GATE19_PATH = path.join(GATES_DIR, 'gate-19-lighthouse-budget.spec.ts');

const prov = JSON.parse(fs.readFileSync(PROV_PATH, 'utf8'));
const gate19Src = fs.readFileSync(GATE19_PATH, 'utf8');

/** Parse gate-19's BUDGET literal — the values actually in force. */
function budgetInForce(): Record<string, number> {
  const block = gate19Src.match(/const\s+BUDGET\s*=\s*\{([^}]*)\}/)?.[1];
  expect(block, 'gate-19 must carry a `const BUDGET = { ... }` literal — gate-53 reads it to prove the recorded value is the value in force').toBeTruthy();
  const out: Record<string, number> = {};
  for (const m of block!.matchAll(/(\w+)\s*:\s*([\d.]+)/g)) out[m[1]] = Number(m[2]);
  return out;
}

/** Leaf JSON pointers of an object, e.g. "/metrics/cls". */
function leafPointers(obj: unknown, prefix = ''): string[] {
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) return [prefix];
  return Object.entries(obj as Record<string, unknown>).flatMap(([k, v]) => leafPointers(v, `${prefix}/${k}`));
}

function atPointer(obj: unknown, pointer: string): unknown {
  return pointer.split('/').filter(Boolean).reduce<unknown>((acc, key) => (acc as Record<string, unknown>)?.[key], obj);
}

/**
 * Canonical JSON — keys sorted RECURSIVELY, no whitespace. Must reproduce Python's
 * `json.dumps(o, sort_keys=True, separators=(',', ':'))`, which is what recorded the hash.
 * ⚠ `JSON.stringify(o, keyArray)` does NOT do this: the array replacer filters keys but does not
 * reorder them, and it does not recurse into ordering. Getting this wrong would make the hash
 * irreproducible while looking correct — so it is written out rather than improvised.
 */
function canonicalise(value: unknown): string {
  if (value === null || typeof value !== 'object') return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(canonicalise).join(',')}]`;
  const entries = Object.entries(value as Record<string, unknown>).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0));
  return `{${entries.map(([k, v]) => `${JSON.stringify(k)}:${canonicalise(v)}`).join(',')}}`;
}

// ---------------------------------------------------------------------------
// G53a — the recorded source content is self-consistent with its recorded hash.
// Catches a hand-edited hash AND hand-edited source values. Runs everywhere.
// ---------------------------------------------------------------------------
test('G53a Bar provenance: each external source ref hashes to its recorded sha256', () => {
  const refs = Object.entries(prov.source_refs as Record<string, any>).filter(([, r]) => r.kind === 'external_peer_vault');
  expect(refs.length, 'at least one external source ref must be recorded, or this gate is vacuous').toBeGreaterThanOrEqual(1);

  for (const [name, ref] of refs) {
    expect(typeof ref.canonical, `${name}.canonical must be the recorded canonical JSON string`).toBe('string');
    const actual = createHash('sha256').update(ref.canonical).digest('hex');
    expect(
      actual,
      `${name}: recorded sha256 does not match a hash of the recorded canonical content. ` +
        `Either the canonical string or the sha256 was edited by hand. recorded=${ref.sha256} actual=${actual}`,
    ).toBe(ref.sha256);

    // The recorded string must be GENUINELY canonical — equal to the canonicalisation of its own
    // parse. Without this, a hash could be self-consistent with a non-canonical string that nobody
    // else could reproduce, and the provenance would be unverifiable by the peer who owns it.
    expect(
      canonicalise(JSON.parse(ref.canonical)),
      `${name}.canonical is not in canonical form (recursively sorted keys, no whitespace), so its ` +
        `hash is not reproducible from the source by anyone else — including the vault that owns it`,
    ).toBe(ref.canonical);
  }
});

// ---------------------------------------------------------------------------
// G53b — THREE-WAY IDENTITY, leg 1+2: every enforced bar is recorded, and the
// recorded value IS the value in force. This is DEFECT-C's remedy: without it a
// provenance block could cite a source while gate-19 ran any number at all.
// ---------------------------------------------------------------------------
test('G53b Bar provenance: every gate-19 bar is recorded, and recorded value === value in force', () => {
  const inForce = budgetInForce();
  const recorded = prov.bars as Record<string, any>;

  const enforcedNames = Object.keys(inForce).sort();
  const recordedNames = Object.keys(recorded).sort();
  expect(
    recordedNames,
    `bar_provenance.json must record EXACTLY the bars gate-19 enforces — no unsourced bar, and no ` +
      `provenance entry for a bar that does not exist. enforced=[${enforcedNames}] recorded=[${recordedNames}]`,
  ).toEqual(enforcedNames);

  for (const name of enforcedNames) {
    expect(
      recorded[name].value_in_force,
      `bar "${name}": recorded value_in_force (${recorded[name].value_in_force}) must equal the value ` +
        `actually in force at gate-19 (${inForce[name]}). A provenance record that disagrees with the ` +
        `bar it describes is worse than none.`,
    ).toBe(inForce[name]);
    expect(recorded[name].source, `bar "${name}" must name a source key`).toBeTruthy();
    expect(
      prov.source_refs[recorded[name].source],
      `bar "${name}" names source "${recorded[name].source}", which is not defined in source_refs`,
    ).toBeTruthy();
  }
});

// ---------------------------------------------------------------------------
// G53c — THREE-WAY IDENTITY, leg 3: where a bar claims an external counterpart,
// the recorded counterpart value must match the value at that pointer INSIDE the
// hashed canonical content. Ties the bar to the hash, not merely to a file name.
// ---------------------------------------------------------------------------
test('G53c Bar provenance: external counterparts resolve inside the hashed source content', () => {
  let checked = 0;
  for (const [name, bar] of Object.entries(prov.bars as Record<string, any>)) {
    const cp = bar.external_counterpart;
    if (!cp) continue;
    const ref = prov.source_refs[cp.ref];
    expect(ref, `bar "${name}" counterpart names source_ref "${cp.ref}", which is not defined`).toBeTruthy();
    const value = atPointer(JSON.parse(ref.canonical), cp.pointer);
    expect(
      value,
      `bar "${name}": counterpart pointer ${cp.pointer} resolves to ${JSON.stringify(value)} inside the ` +
        `HASHED source content, but the record claims ${JSON.stringify(cp.value)}.`,
    ).toBe(cp.value);
    checked++;
  }
  // Coverage floor — never `> 0`, and never loose (P4.2's `measured >= 200, never > 0` discipline).
  // ⚠ RAISED 2 -> 6 ON 2026-09-02, AND THE RED-TEST IS WHY. When the four content_static bars were
  // adopted the counterpart count went 2 -> 6, and a floor of 2 meant FOUR counterparts could vanish
  // with G53c still green. The `a bar dropped from the record` case caught it by reporting a HARNESS
  // BUG — its declared red-set no longer matched — rather than quietly passing.
  // ⇒ A COVERAGE FLOOR IS A NUMBER THAT GOES STALE THE MOMENT ITS SUBJECT GROWS. Raise it in the same
  // commit that adds a counterpart-bearing bar, or this limb decays into a formality.
  expect(
    checked,
    `only ${checked} bars claim an external counterpart; 6 are expected as of the 2026-09-02 adoption ` +
      `(lcpMaxMs · clsMax · a11yMin · bestPracticesMin · seoMin · tbtMaxMs). If you deliberately removed ` +
      `one, lower this floor in the SAME commit and say why — do not let G53c thin out silently.`,
  ).toBeGreaterThanOrEqual(6);
});

// ---------------------------------------------------------------------------
// G53d — the NO-COUNTERPART claim is asserted, not merely narrated. perfMin's
// whole disposition rests on "no desktop counterpart exists"; if that is only
// prose, nothing stops a later edit quietly attaching one.
// ---------------------------------------------------------------------------
test('G53d Bar provenance: a bar with no external counterpart states the relationship and the reason', () => {
  let declined = 0;
  for (const [name, bar] of Object.entries(prov.bars as Record<string, any>)) {
    if (bar.external_counterpart !== null) continue;
    expect(
      bar.relationship,
      `bar "${name}" has no external counterpart, so it must state relationship: "no_counterpart_exists"`,
    ).toBe('no_counterpart_exists');
    expect(
      typeof bar.why_no_counterpart === 'string' && bar.why_no_counterpart.length > 80,
      `bar "${name}" must carry a substantive why_no_counterpart — a bare null is an unexplained gap`,
    ).toBe(true);
    declined++;
  }
  expect(declined, 'exactly one bar (perfMin) is expected to have no counterpart today').toBe(1);
});

// ---------------------------------------------------------------------------
// G53e — THE EXCLUSIONS ARE PART OF THE CLAIM AND ARE ASSERTED, NOT ASSUMED
// (gate-48's ratified discipline). Every leaf of the source class is either
// mapped by a bar or listed in un_adopted with a reason. If WebForge ADDS a
// metric to content_static, this goes RED until it is consciously dispositioned.
// ---------------------------------------------------------------------------
test('G53e Bar provenance: the un-adopted enumeration is COMPLETE against the source class', () => {
  const ref = prov.source_refs.webforge_content_static;
  const leaves = leafPointers(JSON.parse(ref.canonical)).sort();

  const mapped = Object.values(prov.bars as Record<string, any>)
    .map((b) => b.external_counterpart?.pointer)
    .filter(Boolean) as string[];
  const unAdopted = Object.keys(prov.un_adopted).filter((k) => k.startsWith('/'));

  const accounted = new Set([...mapped, ...unAdopted]);
  const orphans = leaves.filter((l) => !accounted.has(l));
  expect(
    orphans,
    `every leaf of classes.content_static must be either MAPPED by a bar or LISTED in un_adopted ` +
      `with a reason. Unaccounted: [${orphans}]. If WebForge added a metric, disposition it — ` +
      `adopt it or decline it in writing. Silence is not a disposition.`,
  ).toEqual([]);

  // ...and nothing is claimed twice, which would let a leaf read as both adopted and declined.
  const dupes = mapped.filter((m) => unAdopted.includes(m));
  expect(dupes, `a leaf cannot be both mapped and un-adopted: [${dupes}]`).toEqual([]);

  for (const key of unAdopted) {
    const entry = prov.un_adopted[key];
    expect(
      typeof entry.reason === 'string' && entry.reason.length > 40,
      `un_adopted["${key}"] must carry a substantive reason — an unexplained exclusion is how a mask grows`,
    ).toBe(true);
    expect(entry.status, `un_adopted["${key}"] must carry a status`).toBeTruthy();
  }

  expect(leaves.length, 'the source class must expose at least 6 leaves, or the canonical content is truncated').toBeGreaterThanOrEqual(6);
});

// ---------------------------------------------------------------------------
// G53f — LIVE re-verification against the peer vault. Runs ONLY where the peer
// checkout exists. Reports NOT VERIFIED explicitly when it does not: an absent
// check must not read as a passing one.
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// G53g — THE COMMITTED FIXTURE ASSERTS ITS OWN INSTRUMENT. Runs everywhere.
//
// This is the limb that closes the residual a 2026-09-02 correction narrowed. The fixtures always
// DID record their instrument — in a prose `_provenance` string, and in the raw runs' configSettings
// — but PROSE IS NOT ASSERTABLE, so nothing re-checked it and a future re-baseline could silently
// switch to mobile emulation with every bar still green and every number meaningless.
//
// The bars in gate-19 are form-factor-dependent (perfMin and tbtMaxMs especially — see
// bar_provenance.json). A fixture measured on a different form factor does not merely shift a score;
// it makes the comparison a category error, which is the exact defect F-e turned out to be.
// ---------------------------------------------------------------------------
test('G53g Bar provenance: every gate-19 fixture records the instrument it was measured with', () => {
  const gate19 = fs.readFileSync(GATE19_PATH, 'utf8');
  const fixtures = [...gate19.matchAll(/fixture:\s*'([^']+)'/g)].map((m) => m[1]);
  expect(fixtures.length, 'gate-19 must declare fixtures — G53g reads them from its GUARDED table').toBeGreaterThanOrEqual(4);

  const pin = prov._meta?.instrument_pin ?? '';
  const pinnedVersion = pin.match(/lighthouse@([\d.]+)/)?.[1];
  expect(pinnedVersion, 'bar_provenance._meta.instrument_pin must name the exact pinned lighthouse version').toBeTruthy();

  for (const name of fixtures) {
    const p = path.join(GATES_DIR, 'fixtures', name);
    expect(fs.existsSync(p), `fixture ${name} missing`).toBe(true);
    const lh = JSON.parse(fs.readFileSync(p, 'utf8'));
    const cs = lh.configSettings;

    expect(
      cs,
      `${name} carries no configSettings. The committed fixture must record its own instrument — ` +
        `a _provenance PROSE string is a real record but no gate can assert it. Regenerate with ` +
        `scripts/gen_lighthouse_fixtures.mjs.`,
    ).toBeTruthy();
    expect(
      cs.formFactor,
      `${name}: formFactor is "${cs?.formFactor}", not "desktop". gate-19's bars are desktop-derived ` +
        `and content_static's are mobile-derived — measuring on the wrong form factor does not shift a ` +
        `score, it makes the comparison a category error.`,
    ).toBe('desktop');
    expect(cs.screenEmulation?.mobile, `${name}: screenEmulation.mobile must be false for a desktop run`).toBe(false);
    expect(
      lh.lighthouseVersion,
      `${name} was measured with lighthouse ${lh.lighthouseVersion} but the declared pin is ` +
        `${pinnedVersion}. An instrument change must be a deliberate re-baseline of ALL routes together, ` +
        `recorded as such — never a drift under an unrelated edit.`,
    ).toBe(pinnedVersion);
  }
});

test('G53f Bar provenance: recorded source hash still matches the live peer vault (host-only)', () => {
  const ref = prov.source_refs.webforge_content_static;
  const peer = path.resolve(GATES_DIR, '../../../..', ref.vault, ref.path);

  if (!fs.existsSync(peer)) {
    console.log(
      `G53f NOT VERIFIED — peer vault absent at ${peer}. This limb asserts NOTHING in this ` +
        `environment (expected in CI). The claim it would carry — "the recorded hash still matches ` +
        `the live source" — is UNCHECKED here, not satisfied. G53a-G53e carry the gate's claim and ` +
        `all ran.`,
    );
    test.info().annotations.push({ type: 'not-verified', description: 'G53f: peer vault absent; staleness unchecked' });
    return;
  }

  const live = JSON.parse(fs.readFileSync(peer, 'utf8'));
  const subtree = atPointer(live, ref.json_pointer);
  expect(subtree, `${ref.json_pointer} must exist in the live peer file`).toBeTruthy();
  const actual = createHash('sha256').update(canonicalise(subtree)).digest('hex');

  expect(
    actual,
    `The live ${ref.vault} ${ref.json_pointer} no longer hashes to the recorded value. This is a ` +
      `STALENESS signal, not corruption: re-read the class, re-derive any bar that cites it, and ` +
      `re-record. recorded=${ref.sha256} live=${actual}. (Changes elsewhere in the file do NOT ` +
      `reach this assertion by design — see _meta.why_not_a_whole_file_hash.)`,
  ).toBe(ref.sha256);
});
