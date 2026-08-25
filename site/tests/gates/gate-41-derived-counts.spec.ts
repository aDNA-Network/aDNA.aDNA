/**
 * Gate 41 — DERIVED COUNTS (HAUSSMANN P4.4a A1 · rows F-c · F-m · F-n)
 *
 * ONE SHAPE, THREE INSTANCES: **a published figure that disagrees with the derived one fails
 * here, instead of waiting to be noticed by someone who opened the file for another reason.**
 *
 * All three rows were filed separately, by three different missions, and all three are the same
 * defect: a number is written down, the thing it counts moves, and NOTHING connects them. The
 * campaign's own KW-14 — *every count a page narrates must be derived, not typed* — was written
 * about the SITE. These are the same law turned on the vault's own records.
 *
 *   F-c  the claim register's published tally vs `derive_register_counts.py`
 *        Measured at authorship: the register read 147 rows / 132 ids while the derivation read
 *        160 / 145, because §12–§14 were appended below a section that ends "Run it again if
 *        anything below this line changes." The instruction was right and unenforced.
 *
 *   F-m  `what/decisions/adr_index.md` vs the ADR files on disk
 *        13 ADRs behind (047–059), every one of them Haussmann-era, including ADR-056 — the
 *        agentic-surface contract this campaign's own missions keep amending.
 *
 *   F-n  this vault's `MANIFEST.updated` vs `STATE.updated`
 *        49 days apart. Root cause is structural, not sloppiness: the startup checklist reads
 *        CLAUDE.md → STATE.md → campaign → context, and MANIFEST.md is in NONE of them, so
 *        nothing ever brings a reader back to it. Measured across the fleet by Ilmarinen first —
 *        8 of 12 vaults, 34–52 days — which is a peer finding DISPOSITIONED rather than merely
 *        mentioned.
 *
 * ⛔ TWO OF THE THREE SHIP AS DATED RATCHETING BASELINES, AND A GREEN HERE DOES NOT MEAN THEY ARE
 * FIXED. F-m's index is still 13 behind and F-n's MANIFEST is still stale; this gate fences them
 * so they cannot WORSEN unnoticed. That is `gate-39`'s precedent from P4.2 — where the 12px
 * typeset floor shipped with a ratcheting baseline and the lock stayed `gap` — and the reason for
 * saying it here in as many words is that a non-regression fence is not the rule, and calling it
 * one is fake enforcement. Backfilling the index and reviewing the MANIFEST are named follow-ups.
 *
 * ⚠ F-n IS NOT FIXED BY BUMPING A DATE. `updated:` is a claim that the content was reviewed on
 * that day. Stamping today's date to clear this gate would be precisely the dishonesty the whole
 * campaign exists to retire — it would convert a visible gap into an invisible lie. The remedy is
 * a MANIFEST content review.
 */
import { test, expect } from '@playwright/test';
import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

/* The vault root, one level up from `site/`. Asserted rather than assumed — a gate that silently
 * passes because it is looking at the wrong directory is the vacuity convention 14 is about. */
const VAULT = join(process.cwd(), '..');
const CAMPAIGN = join(VAULT, 'how', 'campaigns', 'campaign_haussmann');

/** Dated ratchet baselines. These may only ever go DOWN. See the header. */
const RATCHET = {
  measured: '2026-08-25',
  adrsMissingFromIndex: 13,
  // 49 → 0: the MANIFEST was genuinely REVIEWED on 2026-08-25, not date-bumped. What the review
  // found is why the ratchet exists at all — three stale claims, each of which had been read and
  // believed for weeks: `campaign_rosetta active` (closed 2026-04-26, two campaigns ago), the
  // context library at "27 subtopics" (32), and ⭐ **"56 skills" when the directory held 57**.
  // That last one is the sharp one: CLAUDE.md's own inventory says the count is "auditable by
  // counting rows", and `skill_web_quality_sweep` had been active and UN-TABLED since 2026-08-17 —
  // authored during this very campaign, missing from the list that promises to be countable.
  // Found by DERIVING the number rather than reading it (KW-14), which is the whole discipline.
  manifestStateDriftDays: 0,
} as const;

const readFm = (file: string, key: string): string | null => {
  const m = readFileSync(file, 'utf8').match(new RegExp(`^${key}:\\s*(\\S+)`, 'm'));
  return m ? m[1] : null;
};

test('G41a: the gate is looking at the vault, not at wherever it was run from', () => {
  // Every assertion below reads paths outside `site/`. If this resolution is ever wrong, the
  // three tests would read nothing and pass — so the reach is asserted first, once.
  for (const p of [
    join(VAULT, 'MANIFEST.md'),
    join(VAULT, 'STATE.md'),
    join(VAULT, 'what', 'decisions', 'adr_index.md'),
    join(CAMPAIGN, 'evidence', 'claims', 'claim_register.md'),
    join(CAMPAIGN, 'artifacts', 'p3_5', 'derive_register_counts.py'),
  ]) {
    expect(existsSync(p), `gate-41 cannot reach ${p} — VAULT resolved to ${VAULT}`).toBe(true);
  }
});

test('G41b (F-c): the claim register\'s published tally matches the derived one', () => {
  const script = join(CAMPAIGN, 'artifacts', 'p3_5', 'derive_register_counts.py');
  const register = join(CAMPAIGN, 'evidence', 'claims', 'claim_register.md');

  let out: string;
  try {
    out = execFileSync('python3', [script, register], { encoding: 'utf8' });
  } catch (e: any) {
    // Refuse to report a green when the derivation itself failed — gate-40's rule.
    throw new Error(`derive_register_counts.py failed — refusing to report a green: ${e.message}`);
  }

  const derivedRows = Number(out.match(/physical table rows: (\d+)/)?.[1]);
  const derivedIds = Number(out.match(/unique ids: (\d+)/)?.[1]);
  expect(Number.isFinite(derivedRows) && Number.isFinite(derivedIds), `derivation output unparseable:\n${out}`).toBe(true);
  // A coverage floor, never `> 0`: a parse that silently matched nothing would otherwise agree
  // with a register that also read zero, and two zeros look exactly like agreement.
  expect(derivedRows, 'the derivation matched almost no rows — the register moved or the parse broke').toBeGreaterThanOrEqual(100);

  /* The LAST `Counts` table in document order is the one claiming currency by position. Earlier
   * sections are historical readings and are correct AS OF their own section — comparing against
   * them would fail on a healthy file. */
  const text = readFileSync(register, 'utf8');
  const blocks = [...text.matchAll(/###[^\n]*Counts[^\n]*\n([\s\S]*?)(?=\n###|\n##|$)/g)];
  expect(blocks.length, 'the claim register publishes no `### … Counts` section at all').toBeGreaterThan(0);
  const last = blocks[blocks.length - 1][1];

  const publishedRows = Number(last.match(/Physical table rows\s*\|\s*\*\*(\d+)\*\*/)?.[1]);
  const publishedIds = Number(last.match(/Unique ids\*\*\s*\|\s*\*\*(\d+)\*\*/)?.[1]);

  expect(
    publishedRows,
    'the register\'s last Counts section does not publish a parseable row figure — ' +
      'the format changed and this gate went blind rather than red',
  ).toBeGreaterThan(0);

  expect(publishedRows, `claim_register published ${publishedRows} rows; derivation says ${derivedRows}. Re-run artifacts/p3_5/derive_register_counts.py and append a new Counts section.`).toBe(derivedRows);
  expect(publishedIds, `claim_register published ${publishedIds} unique ids; derivation says ${derivedIds}.`).toBe(derivedIds);
});

test('G41c (F-m): the ADR index does not fall further behind the ADRs on disk', () => {
  const dir = join(VAULT, 'what', 'decisions');
  const indexPath = join(dir, 'adr_index.md');

  /* ⭐ `adr_index.md` MATCHES ITS OWN GLOB. The index's documented drift check is
   *   `ls what/decisions/adr_*.md | wc -l`
   * which counts the index as an ADR and is therefore off by one, forever. Excluded here by
   * requiring the numbered form — and the check compares PRESENCE, not contiguity, because
   * 015 and 018–021 were never assigned (F-CHM-206) and closing those gaps is forbidden. */
  const onDisk = readdirSync(dir)
    .map((f) => f.match(/^adr_(\d{3})_.*\.md$/))
    .filter(Boolean)
    .map((m) => Number(m![1]));
  const indexed = [...readFileSync(indexPath, 'utf8').matchAll(/^\| \[(\d{3})\]/gm)].map((m) => Number(m[1]));

  expect(onDisk.length, 'no numbered ADR files found — the glob or the directory moved').toBeGreaterThanOrEqual(50);
  expect(indexed.length, 'the ADR index publishes no rows — its table format changed').toBeGreaterThanOrEqual(40);

  const missing = onDisk.filter((n) => !indexed.includes(n)).sort((a, b) => a - b);
  const phantom = indexed.filter((n) => !onDisk.includes(n)).sort((a, b) => a - b);

  // A row pointing at a file that does not exist is always wrong, with no baseline to hide behind.
  expect(phantom, `adr_index.md lists ADRs with no file on disk: ${phantom.join(', ')}`).toEqual([]);

  expect(
    missing.length,
    `adr_index.md is now ${missing.length} ADRs behind (${missing.map((n) => String(n).padStart(3, '0')).join(', ')}), ` +
      `worse than the ${RATCHET.adrsMissingFromIndex} measured ${RATCHET.measured}. This baseline RATCHETS DOWN ONLY: ` +
      'add an ADR and index it IN THE SAME COMMIT (ADR-057, the same-diff law). ' +
      'To lower the baseline, backfill the index and lower this number in the same commit.',
  ).toBeLessThanOrEqual(RATCHET.adrsMissingFromIndex);

  /* The published tally is a separate claim from the row count and can be wrong on its own. */
  const tally = Number(readFileSync(indexPath, 'utf8').match(/\*\*Tally:\*\*\s*(\d+)\s*ADRs/)?.[1]);
  expect(tally, 'adr_index.md publishes no parseable **Tally:** line').toBeGreaterThan(0);
  expect(
    tally,
    `adr_index.md's Tally says ${tally} but the index carries ${indexed.length} rows — ` +
      'the tally must at minimum describe the table it sits above.',
  ).toBe(indexed.length);
});

test('G41d (F-n): MANIFEST.md does not drift further behind STATE.md', () => {
  const manifest = readFm(join(VAULT, 'MANIFEST.md'), 'updated');
  const state = readFm(join(VAULT, 'STATE.md'), 'updated');
  expect(manifest, 'MANIFEST.md has no `updated:` field').toMatch(/^\d{4}-\d{2}-\d{2}$/);
  expect(state, 'STATE.md has no `updated:` field').toMatch(/^\d{4}-\d{2}-\d{2}$/);

  const days = Math.round((Date.parse(state!) - Date.parse(manifest!)) / 86_400_000);

  expect(
    days,
    `MANIFEST.md (${manifest}) is ${days} days behind STATE.md (${state}), worse than the ` +
      `${RATCHET.manifestStateDriftDays} measured ${RATCHET.measured}. This baseline RATCHETS DOWN ONLY. ` +
      '⚠ DO NOT CLEAR THIS BY BUMPING THE DATE — `updated:` claims the content was reviewed that day. ' +
      'Review the MANIFEST against what the vault now is, then lower this number in the same commit.',
  ).toBeLessThanOrEqual(RATCHET.manifestStateDriftDays);

  // A MANIFEST dated AFTER the STATE is not "very fresh", it is a clock or a typo. Negative drift
  // is a different defect and must not read as a spectacular pass.
  expect(days, `MANIFEST.md (${manifest}) is dated AFTER STATE.md (${state}) — check the date, not the gate`).toBeGreaterThanOrEqual(0);
});
