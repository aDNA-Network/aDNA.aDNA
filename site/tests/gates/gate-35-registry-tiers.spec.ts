/**
 * gate-35 — registry lifecycle tiers (HAUSSMANN P2.4 / ADR-052 §tiers, accepted 2026-08-19).
 *
 * The registry groups 74 entries by declared lifecycle stage so a stranger can tell load-bearing
 * from seed. Three things can quietly break that and none of them throws:
 *
 *   1. A tier group silently loses rows, and the page renders a smaller, healthier-looking
 *      registry. This is P2.1's silent-drop class, which has now recurred twice in this campaign —
 *      once in the fix, once in a consumer of the fix.
 *   2. The tier vocabulary starts claiming more than the data supports. Every status in this
 *      registry is SELF-DECLARED with nothing to corroborate it (§tiers.2: `github_url` on 1 of 74
 *      rows, `docs_site_url` on 0), so words like "mature", "production", or "verified" would
 *      convert a thin registry into a misleading one.
 *   3. Two surfaces describe the same vault with two different words — the homepage saying
 *      `genesis` while /vaults says `planned`.
 *
 * Every expectation is derived from the registry and the build snapshot; nothing is a typed list
 * (WebForge KW-8/FR-K), so a 75th vault does not falsify this gate.
 */
import { test, expect } from '@playwright/test';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const SITE_ROOT = process.cwd();
const DIST = join(SITE_ROOT, 'dist');

const registry = JSON.parse(readFileSync(join(SITE_ROOT, 'src/data/vaults.json'), 'utf8'));

/** The tier law, restated here so the gate is not merely agreeing with the code it tests. */
const tierOf = (status: string): 'in_use' | 'chartered' | 'planned' =>
  status === 'active' ? 'in_use' : status === 'pending' ? 'chartered' : 'planned';

const LABEL = { in_use: 'in use', chartered: 'chartered', planned: 'planned' } as const;

const expected = { in_use: 0, chartered: 0, planned: 0 };
for (const v of registry.vaults) expected[tierOf(String(v.status))]++;

const readIndex = () => readFileSync(join(DIST, 'vaults/index.html'), 'utf8');

test.describe('gate-35 registry lifecycle tiers', () => {
  test('the registry is grouped into exactly the three tiers, and no vault is lost', () => {
    test.skip(!existsSync(DIST), 'no dist/ — site not built');
    const html = readIndex();

    // Sections exist and are the anchors the no-JS jump-chips point at.
    for (const tier of ['in-use', 'chartered', 'planned']) {
      expect(html.includes(`id="tier-${tier}"`), `missing tier section #tier-${tier}`).toBe(true);
    }

    // Every vault renders exactly once. Counted from the emitted cards, compared with the
    // registry — the assertion that a dropped row cannot survive.
    const cards = [...html.matchAll(/data-tier="([a-z-]+)"/g)].map((m) => m[1]);
    expect(cards.length, 'expected a card per vault on the registry index').toBe(registry.vaults.length);

    const rendered = { in_use: 0, chartered: 0, planned: 0 };
    for (const c of cards) rendered[c.replace(/-/g, '_') as keyof typeof rendered]++;
    expect(rendered, 'tier counts in the built page must match the registry exactly').toEqual(expected);
  });

  test('every tier count the page states is the count it renders', () => {
    test.skip(!existsSync(DIST), 'no dist/ — site not built');
    const html = readIndex();
    // Narrated counts are the recurring defect class here (WebForge KW-14): the stat strip claimed
    // 68 while the grid showed 64 once already. Each heading states its own count; assert the
    // stated number against the derived one.
    for (const [tier, n] of Object.entries(expected)) {
      const label = LABEL[tier as keyof typeof LABEL];
      const re = new RegExp(`${label}\\s*<span[^>]*>\\(${n}\\)`, 'i');
      expect(re.test(html), `the "${label}" heading does not state its derived count (${n})`).toBe(true);
    }
  });

  test('the self-declared caveat ships on the index, in the page text', () => {
    test.skip(!existsSync(DIST), 'no dist/ — site not built');
    const html = readIndex();
    // §tiers.2 calls this the single most important caveat on the surface. It must be readable
    // text, not a title attribute or an aria-label — a caveat you have to hover to find is a
    // caveat the page is hiding.
    const body = html.replace(/<[^>]+>/g, ' ');
    expect(/self-declared/i.test(body), 'the "self-declared" caveat is not in the page text').toBe(true);
  });

  test('no tier word claims more than the data supports', () => {
    test.skip(!existsSync(DIST), 'no dist/ — site not built');
    const html = readIndex();

    // SCOPE MATTERS HERE, and the first draft of this assertion got it wrong: it scanned the whole
    // page body and failed on "flagship" — a word inside Harness.aDNA's own tagline ("RareHarness =
    // flagship Wilhelm clinical vertical"), which is registry data Hestia owns (pt19) and a vault
    // describing itself, not this site awarding it a rank. §tiers.3 forbids these words as TIER
    // VOCABULARY; it has no view on what a vault writes about itself. So the check reads the badges
    // and the tier headings, which is the surface the rule is actually about.
    // Astro appends scoped-style attributes (`data-astro-cid-…`) after the class attribute, so
    // these patterns must tolerate anything between the class value and the closing `>`. The
    // first draft assumed `class="…">` and matched nothing — caught only by the floor assertion
    // below, which is why it is there.
    const badges = [...html.matchAll(/<span class="vault-tier[^"]*"[^>]*>([^<]*)<\/span>/g)].map((m) => m[1].trim());
    const headings = [...html.matchAll(/<h2[^>]*>([^<]*?)\s*<span class="tier-count"/g)].map((m) => m[1].trim());
    const vocabulary = [...new Set([...badges, ...headings])].filter(Boolean);

    expect(badges.length, 'found no tier badges — this asserted nothing').toBe(registry.vaults.length);
    expect(headings.length, 'found no tier headings — this asserted nothing').toBe(3);

    const forbidden = ['flagship', 'mature', 'production', 'battle-tested', 'verified', 'official'];
    const offenders = vocabulary.filter((w) => forbidden.some((f) => new RegExp(`\\b${f}\\b`, 'i').test(w)));
    expect(
      offenders,
      `tier vocabulary claiming more than self-declared data supports: ${offenders.join(', ')}`,
    ).toEqual([]);

    // And the vocabulary is exactly the three ratified words — a fourth tier appearing without an
    // ADR amendment is the drift this locks out.
    expect(new Set(vocabulary)).toEqual(new Set(Object.values(LABEL)));
  });

  test('house status vocabulary does not reach the public registry surfaces', () => {
    test.skip(!existsSync(DIST), 'no dist/ — site not built');
    // `pending` answers no question a stranger is asking ("pending what?") and `genesis` is house
    // jargon; `genesis_stub` is a raw machine enum. The tier words replaced them — on BOTH the
    // registry index and the homepage, which previously disagreed.
    for (const page of ['vaults/index.html', 'index.html']) {
      const p = join(DIST, page);
      if (!existsSync(p)) continue;
      const body = readFileSync(p, 'utf8').replace(/<[^>]+>/g, ' ');
      for (const word of ['genesis_stub', 'genesis stub']) {
        expect(body.includes(word), `${page} renders the raw enum "${word}"`).toBe(false);
      }
    }
  });

  /* R-117 — the claim the registry STOPPED making, guarded against its return.
   *
   * The retired lead said the vaults were "most tended by a named agent". Numerically defensible
   * (61 of 74 rows carry a persona) and still wrong: it reads as present continuous activity across
   * a set that is 57/74 planned, where a persona pin records who *will* tend a vault, not who is.
   * Aspirational present tense over a self-declared field is anti-pattern 7.5.
   *
   * Guarded rather than merely corrected, on this campaign's own evidence: the R-28/R-62 family
   * recurred twice because the fix was applied to a component instead of to the claim. */
  test('the retired "tended by" framing has not returned', () => {
    test.skip(!existsSync(DIST), 'no dist/ — site not built');
    const body = readIndex().replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
    for (const phrasing of [/most tended by/i, /all tended by/i, /each tended by a named agent/i]) {
      expect(
        phrasing.test(body),
        `the registry index is asserting continuous stewardship again (${phrasing}) — see claim-register R-117`,
      ).toBe(false);
    }
  });

  test('the tier derivation lives in one place, and both card components use it', () => {
    // Two surfaces describing one vault with two words is the failure this prevents. Asserted on
    // the import rather than the rendered string so it holds even when the labels change.
    for (const f of ['src/components/sections/VaultCard.astro', 'src/components/sections/RegistryCard.astro']) {
      const src = readFileSync(join(SITE_ROOT, f), 'utf8');
      expect(/tierOf/.test(src), `${f} does not derive its badge from the shared tierOf()`).toBe(true);
      expect(
        /\{vault\.status\}/.test(src),
        `${f} renders vault.status raw — house vocabulary reaching a public card`,
      ).toBe(false);
    }
  });

  test('card_present is not a tier input', () => {
    // §tiers.1: all 7 `active` vaults carry a card, so tiering on it yields an empty bucket and
    // measures documentation rather than lifecycle. Proven from the data, not asserted from the
    // ADR — if the registry ever changes such that the split WOULD discriminate, this fails and
    // the finding gets re-examined rather than silently inherited.
    const active = registry.vaults.filter((v: any) => v.status === 'active');
    const withCard = active.filter((v: any) => v.card_present === true).length;
    expect(
      withCard === active.length || withCard === 0,
      `card_present now splits the in-use tier (${withCard}/${active.length}) — ADR-052 §tiers.1 assumed it does not, and should be revisited`,
    ).toBe(true);
  });
});
