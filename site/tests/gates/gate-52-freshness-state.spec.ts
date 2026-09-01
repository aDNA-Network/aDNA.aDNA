/**
 * gate-52 — the freshness layer tells its failure states apart (HAUSSMANN GR-2 · AC-2).
 *
 * WHY THIS GATE EXISTS. `gate-33-freshness` was red on main for six consecutive runs and the cause
 * was recorded as "unknown", because `contentSource.ts` computed
 *
 *     const isShallow = git(['rev-parse', '--is-shallow-repository']) !== 'false'
 *
 * over a `git()` that swallowed every error into `null` with stderr discarded. A shallow clone and
 * a git that simply failed produced the identical value, so the gate downstream prescribed
 * `fetch-depth: 0` — a remedy that had been applied in gates.yml since before the gate went red.
 *
 * THE ASSERTION IS THE DISCRIMINATION, NOT THE OMISSION. Omitting dates is correct in all three
 * states and is not what GR-2 changed; a page must never print a date it cannot stand behind. What
 * is tested here is that the build can SAY WHICH state it is in, because that is the difference
 * between a debuggable failure and six unread red runs.
 *
 * ⚠ SURFACE (campaign convention 18 — state what the instrument runs against, and whether it is the
 * surface the claim is about). These cases drive `freshnessStateFrom` with SYNTHESISED probe
 * results. That is the real discrimination logic and the real strings, but it is NOT a real shallow
 * clone and NOT a real refused repository. The integration evidence — a genuinely failing git in
 * CI's own container image reproducing gate-33's exact signature — is
 * artifacts/gr_2/o1_redproof_record.md §3, and CI's own cause is read at O3. This file makes the
 * narrower claim on purpose rather than letting a green tick read wider than it is.
 *
 * ⛔ NO SELF-GREP. An earlier draft also asserted that gate-33's spec no longer contains the string
 * `fetch-depth` — a test that searches its own source for a literal it must itself contain, which
 * is P1-6's self-matching-glob class (the adr_index drift check that matched its own filename).
 * It was DELETED at the ⛩ signature rather than engineered around (amendment §6, Change 1): the
 * runtime cases below are the protection, and a cleverly-written self-grep is one more instrument
 * that can be wrong.
 */
import { test, expect } from '@playwright/test';
import { freshnessStateFrom, describeFreshnessState } from '../../src/utils/contentSource';

const DUBIOUS = "fatal: detected dubious ownership in repository at '/__w/aDNA.aDNA/aDNA.aDNA'";

test.describe('gate-52 freshness state discrimination', () => {
  test('a git that answered "false" is healthy', () => {
    expect(freshnessStateFrom({ ok: true, stdout: 'false' })).toEqual({ kind: 'healthy' });
  });

  test('a git that answered "true" is shallow — and is NOT reported as unavailable', () => {
    const state = freshnessStateFrom({ ok: true, stdout: 'true' });
    expect(state.kind, 'a shallow clone must not be reported as a git failure').toBe('shallow');
  });

  test('a git that FAILED is not shallow — the conflation that caused F-x', () => {
    // The exact shape observed in-container: exit 128, empty stdout, ownership refusal on stderr.
    // Under the old boolean this was indistinguishable from `stdout === 'true'`.
    const state = freshnessStateFrom({ ok: false, reason: DUBIOUS });
    expect(state.kind, 'a failed git must never be reported as a shallow clone').toBe('git-unavailable');
  });

  test('the failure carries git\'s own words, so the cause is never guessed', () => {
    const state = freshnessStateFrom({ ok: false, reason: DUBIOUS });
    expect(state.kind === 'git-unavailable' && state.reason).toBe(DUBIOUS);
  });

  test('an empty answer is a state, not a crash', () => {
    // `git()` returns ok:true with an empty string if git prints nothing at all. That is not
    // 'false', so it must land somewhere deliberate rather than falling through as healthy.
    expect(freshnessStateFrom({ ok: true, stdout: '' }).kind).toBe('shallow');
  });

  test('the build line for a failed git refuses to prescribe fetch-depth', () => {
    // F-x's second debt, asserted on the real string the build prints. The shallow line MAY name
    // fetch-depth — there it is the correct remedy. The unavailable line must not.
    const said = describeFreshnessState({ kind: 'git-unavailable', reason: DUBIOUS });
    expect(said, 'must not tell the reader to set fetch-depth for a cause fetch-depth cannot fix')
      .not.toMatch(/set fetch-depth/i);
    expect(said, 'the reason git gave must reach the reader').toContain(DUBIOUS);
    expect(said, 'and it must say plainly that fetch-depth is the wrong lever here').toMatch(
      /not a shallow clone and fetch-depth will not fix it/i,
    );
  });

  test('the build line for a genuine shallow clone DOES name the right remedy', () => {
    // The control for the case above: this gate must not simply forbid the string everywhere, or it
    // would suppress the one message where fetch-depth is the correct advice.
    expect(describeFreshnessState({ kind: 'shallow' })).toMatch(/fetch-depth: 0/);
  });

  test('a healthy build says something quiet and true', () => {
    expect(describeFreshnessState({ kind: 'healthy' })).toMatch(/git answered/);
  });
});
