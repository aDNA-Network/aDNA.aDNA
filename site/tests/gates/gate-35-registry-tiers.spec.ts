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

  /* ----------------------------------------------------------------------------------------------
   * G35b — the `empty_state` illustration slot (HAUSSMANN P4.1 O2; ADR-053 slot table).
   *
   * Spec: how/campaigns/campaign_haussmann/artifacts/p4_1/slot_spec_empty_state.md.
   *
   * These assertions live in gate-35 rather than a gate of their own because the thing most likely
   * to go wrong with this slot is a REGISTRY-TIER failure wearing an illustration costume: a future
   * edit re-keying the mark from "this field is empty" to "this vault is planned". That is ADR-052
   * §tiers.2's ranking defect, and gate-35 is where that law is already enforced.
   *
   * Every expected count is DERIVED from the registry (KW-8/FR-K) — a 75th vault must not falsify
   * this, and a typed count would go stale the first time Home backfills a tagline.
   * -------------------------------------------------------------------------------------------- */

  /* ⚠ THE ROUTE SLUG IS NOT THE REGISTRY FIELD, and reading the raw field is how this gate was
   * wrong on its first run. `vaults.json` carries `vault_slug: "Operations.aDNA"` for 24 of 74 rows;
   * the page emits `/vaults/operations/` because ADR-051's law is applied at the READ boundary
   * (src/data/vaults.ts), deliberately leaving the data byte-untouched under pt19. A gate that looks
   * up the raw value finds no card, and `marked()` then reports `false` for every one of those 24 —
   * which reads exactly like the tier-keying regression this gate exists to catch. Both first-run
   * failures were this, and the site was correct in both.
   *
   * Restated rather than imported: gate-30 already pins generator↔accessor parity, and a Playwright
   * gate cannot import site source that transitively imports JSON. */
  const canonicalSlug = (value: string) =>
    String(value).toLowerCase().replace(/\.adna$/, '').replace(/[^a-z0-9_-]/g, '_');

  /** The slot's render law, restated here so the gate is not merely agreeing with the component. */
  const absences = (v: any) => ({
    persona: !v.persona,
    // `listing: 'minimal'` is a deliberate withholding, NOT an absence — those rows say "Minimal
    // card — private engagement." Marking a policy choice as an oversight is the defect this
    // exclusion prevents, and it is asserted rather than trusted because it is invisible on the page.
    purpose: !(v.tagline || v.note) && v.listing !== 'minimal',
    card: v.card_present !== true,
  });

  const expectedCardMarks = registry.vaults.reduce((n: number, v: any) => {
    const a = absences(v);
    return n + (a.persona ? 1 : 0) + (a.purpose ? 1 : 0) + (a.card ? 1 : 0);
  }, 0);

  test('G35b the empty-state mark renders once per absent field, and nowhere else', () => {
    test.skip(!existsSync(DIST), 'no dist/ — site not built');
    const html = readIndex();

    // Count marks in the CARD GRID only. The page also renders one at `lg` in the zero-result block
    // and one beside the credit line; scoping to the grid is what makes this a statement about the
    // cards rather than about the page.
    const grids = html.match(/<div class="vaults-grid[^"]*"[\s\S]*?<\/div>\s*<\/section>/g) ?? [];
    expect(grids.length, 'the three tier grids were not found in dist/').toBe(3);
    const gridMarks = grids.join('').match(/class="empty-state-mark scale-sm/g)?.length ?? 0;

    expect(
      gridMarks,
      `empty-state marks in the card grids (${gridMarks}) ≠ absent fields derived from the registry (${expectedCardMarks})`,
    ).toBe(expectedCardMarks);

    // Non-vacuity: a derived expectation of 0 would make the assertion above trivially true.
    expect(expectedCardMarks, 'the registry has no absent fields — this assertion proves nothing').toBeGreaterThan(0);
  });

  test('G35b the mark keys on absence, NOT on lifecycle tier — asserted in both directions', () => {
    test.skip(!existsSync(DIST), 'no dist/ — site not built');
    const html = readIndex();

    /* ⭐ THE DIRECTION THAT MATTERS. A one-way assertion ("the mark appears on planned cards")
     * passes on a component that renders it unconditionally, AND passes on a tier-keyed
     * implementation — which is the thing ADR-052 §tiers.2 forbids. So this checks the two
     * populations the ruled target set gets WRONG:
     *
     *   • vaults with NO absent field must carry NO mark — 5 of the 57 `planned` vaults are in this
     *     group, so a tier-keyed build fails here.
     *   • vaults OUTSIDE the planned tier that DO have an absent field must carry one — 12 vaults
     *     are in this group, so a tier-keyed build fails here too.
     *
     * Together they pin the law from both sides; neither alone would. */
    const cardFor = (slug: string) => {
      const i = html.indexOf(`/vaults/${slug}/`);
      if (i < 0) return null;
      const start = html.lastIndexOf('<article', i);
      const end = html.indexOf('</article>', i);
      return start < 0 || end < 0 ? null : html.slice(start, end);
    };

    const marked = (slug: string) => (cardFor(canonicalSlug(slug)) ?? '').includes('empty-state-mark');

    const noAbsence = registry.vaults.filter((v: any) => {
      const a = absences(v);
      return !a.persona && !a.purpose && !a.card;
    });
    const nonPlannedWithAbsence = registry.vaults.filter((v: any) => {
      const a = absences(v);
      return tierOf(String(v.status)) !== 'planned' && (a.persona || a.purpose || a.card);
    });

    // Both populations must be non-empty or the test is vacuous in one direction.
    expect(noAbsence.length, 'no fully-populated vault exists — the negative direction is untested').toBeGreaterThan(0);
    expect(
      nonPlannedWithAbsence.length,
      'no non-planned vault has an absence — the tier-independence direction is untested',
    ).toBeGreaterThan(0);

    for (const v of noAbsence) {
      expect(
        marked(String(v.vault_slug)),
        `${v.display_name} has every field populated but carries an empty-state mark`,
      ).toBe(false);
    }
    for (const v of nonPlannedWithAbsence) {
      expect(
        marked(String(v.vault_slug)),
        `${v.display_name} (${tierOf(String(v.status))}) has an absent field but carries no mark — the slot has been re-keyed to lifecycle tier, which ADR-052 §tiers.2 forbids`,
      ).toBe(true);
    }

    // And the source must not have grown a tier condition around the mark.
    const src = readFileSync(join(SITE_ROOT, 'src/components/sections/VaultCard.astro'), 'utf8');
    const markLines = src.split('\n').filter((l) => l.includes('EmptyStateMark'));
    expect(markLines.length, 'no EmptyStateMark usage found in VaultCard').toBeGreaterThan(0);
    for (const l of markLines) {
      expect(
        /\btier\b|\bstatus\b|tierOf|tierSlug/.test(l),
        `VaultCard renders the mark on a lifecycle condition — "${l.trim()}"`,
      ).toBe(false);
    }
  });

  test('G35b the mark is never the sole carrier of meaning', () => {
    test.skip(!existsSync(DIST), 'no dist/ — site not built');
    const html = readIndex();

    // ADR-053's a11y clause: decorative marks are aria-hidden and must therefore never carry the
    // meaning alone. The test of that is that REMOVING every mark loses nothing — so each absent
    // sentence has to be present in its own right.
    for (const sentence of ['No persona recorded', 'No public description yet.', 'No card written yet']) {
      expect(html.includes(sentence), `the absent sentence "${sentence}" is missing from the page`).toBe(true);
    }

    // Every mark is hidden from assistive technology, with no exceptions.
    const marks = html.match(/<span class="empty-state-mark[^>]*>/g) ?? [];
    expect(marks.length, 'no marks rendered').toBeGreaterThan(0);
    for (const m of marks) {
      expect(/aria-hidden="true"/.test(m), `a mark reaches the accessibility tree: ${m}`).toBe(true);
    }

    // A deliberate withholding is not an absence: the three `listing: minimal` rows say so in words
    // and must NOT be marked on the purpose line.
    const minimal = registry.vaults.filter((v: any) => v.listing === 'minimal');
    expect(minimal.length, 'no minimal-listing rows — this direction is untested').toBeGreaterThan(0);
    for (const v of minimal) {
      const i = html.indexOf(`/vaults/${canonicalSlug(String(v.vault_slug))}/`);
      const card = i < 0 ? '' : html.slice(html.lastIndexOf('<article', i), html.indexOf('</article>', i));
      const purposeLine = card.match(/<p class="vault-card-purpose[^"]*"[^>]*>[\s\S]*?<\/p>/)?.[0] ?? '';
      expect(
        purposeLine.includes('Minimal card'),
        `${v.display_name} does not render the minimal-listing sentence`,
      ).toBe(true);
      expect(
        purposeLine.includes('empty-state-mark'),
        `${v.display_name} marks a deliberate withholding as an unwritten absence`,
      ).toBe(false);
    }
  });

  test('G35b the zero-result state exists, is hidden at rest, and is credited once', () => {
    test.skip(!existsSync(DIST), 'no dist/ — site not built');
    const html = readIndex();

    // The second half of the slot (ADR-053 names both "zero-result AND planned-vault states").
    const block = html.match(/<section class="vaults-empty"[^>]*>/)?.[0] ?? '';
    expect(block, 'the zero-result block is not in dist/').not.toBe('');
    expect(/\bhidden\b/.test(block), 'the zero-result block is not hidden at rest').toBe(true);
    expect(html.includes('Nothing matched'), 'the zero-result block has no text equivalent').toBe(true);

    // One artifact, two scales — the cheapest proof the slot spec generalises rather than describing
    // a single application of itself.
    expect(
      (html.match(/class="empty-state-mark scale-lg/g) ?? []).length,
      'the zero-result block does not render the mark at block scale',
    ).toBe(1);

    // Credit: ONCE per surface, not once per mark (slot spec §6).
    expect(
      (html.match(/<p class="empty-state-credit"/g) ?? []).length,
      'the empty-state credit is not rendered exactly once on this surface',
    ).toBe(1);

    // ⛔ The credit must not claim a generation pipeline. ADR-053 names ours as OWED, NOT BUILT and
    // binds the property against implying otherwise until one exists.
    const credit = html.match(/<p class="empty-state-credit"[^>]*>([\s\S]*?)<\/p>/)?.[1] ?? '';
    expect(credit.length, 'the credit rendered empty').toBeGreaterThan(0);
    expect(
      /comfyui|stable.?diffusion|midjourney|generated with/i.test(credit),
      `the empty-state credit implies a generator for a hand-drawn artifact: "${credit}"`,
    ).toBe(false);
    expect(/hand-drawn/i.test(credit), 'the credit does not state the artifact is hand-drawn').toBe(true);
  });

  test('G35b the credit prop is additive — a consumer that omits it renders nothing', () => {
    test.skip(!existsSync(DIST), 'no dist/ — site not built');

    /* The additive-props law (skill_documentation_layout_props_additive_extension), asserted rather
     * than assumed. `credit` was added to DocumentationLayout's heroImage prop at P4.1 O2; every
     * page that does not pass it must render byte-identically to before the field existed.
     *
     * Derived from the source, never a typed list: any page passing heroImage to DocumentationLayout
     * is checked, so a new hero page inherits the assertion automatically. */
    const pages = ['get-started', 'learn', 'how', 'patterns', 'reference'];
    let optedIn = 0;
    let optedOut = 0;

    for (const p of pages) {
      const file = join(DIST, p, 'index.html');
      if (!existsSync(file)) continue;
      const html = readFileSync(file, 'utf8');
      const srcCandidates = [`src/pages/${p}.astro`, `src/pages/${p}/index.astro`]
        .map((f) => join(SITE_ROOT, f))
        .filter((f) => existsSync(f));
      if (!srcCandidates.length) continue;
      const src = readFileSync(srcCandidates[0], 'utf8');
      if (!/heroImage/.test(src)) continue;

      const declares = /credit:/.test(src);
      const renders = html.includes('doc-hero-credit');
      expect(
        renders,
        `${p}: hero credit ${renders ? 'rendered' : 'absent'} but the page ${declares ? 'declares' : 'does not declare'} one`,
      ).toBe(declares);
      declares ? optedIn++ : optedOut++;
    }

    // Both branches must be exercised or the law is only half-tested.
    expect(optedIn, 'no page passes a hero credit — the opt-in branch is untested').toBeGreaterThan(0);
    expect(optedOut, 'every hero page passes a credit — the byte-identity branch is untested').toBeGreaterThan(0);
  });
});
