/**
 * Gate 56 — THE FIELD-CWV TRANSPORT IS MOUNTED, NOT MERELY INSTALLED  (2026-09-07)
 *
 * Criterion: `@vercel/speed-insights` is a dependency AND its component actually renders into every
 * Astro-built page AND `/privacy` describes the transport — in both directions.
 *
 * ⭐ WHY "MOUNTED" IS THE CRITERION AND "INSTALLED" IS NOT. P4.4b B1's V4 was amended for exactly
 * this: *"shipped is not wired"*. A dependency listed in `package.json` transports nothing. This
 * site has been bitten by the adjacent shape twice — P4.2 found a font-weight migration "announced
 * in a comment" that had reached 2 of 15 files, and the `aria-live` residue was present-but-unwired.
 * An `npm install` with no mount would pass every other gate in this suite.
 *
 * ⭐⭐ AND THE TRUST-PAGE LIMB IS THE ONE THAT MATTERS MOST, because it fences a PROMISE.
 * `/privacy` committed, in the site's own rendered voice: *"we will update this page before that
 * ships"*. The transport and the page rewrite shipped in one commit — but nothing stopped a later
 * change from removing the transport and leaving the page claiming it, or vice versa. G56d and G56e
 * bind them in BOTH directions, which is `gate-55`'s discipline for `localStorage` keys applied to
 * the network surface: a page describing a transport that no longer exists is a false claim in the
 * reassuring direction, and it is still a false claim.
 *
 * ⚠ COVERAGE FLOOR, NOT `> 0` (P4.2's lesson). "Every page carries it" is also what you measure on a
 * build that produced nothing. The frame is DERIVED from `dist/` and asserted against a floor.
 *
 * ⚠ THE ONE EXCLUSION, ENUMERATED AND REASONED (gate-48's ratified discipline).
 * `dist/install.html` is a HAND-AUTHORED STATIC FILE in `public/` — it never passes through Astro
 * and has no layout, so it cannot carry a component. Measured `[D] 2026-09-07`: `public/install.html`
 * exists and is copied verbatim. It is excluded BY NAME and the exclusion is asserted (G56c), so if
 * the set of uncovered pages ever grows, this gate reds instead of the exclusion silently absorbing
 * it. ⛔ The exclusion is one filename, never a directory glob.
 *
 * RELATIONSHIP TO gate-42. That gate carries a PLATFORM STUB for
 * `/_vercel/speed-insights/script.js`, the path this component injects. G56f binds the two: if the
 * package changes the path, gate-42's stub stops firing AND this assertion reds, so the coupling is
 * visible rather than discovered when one of them silently stops covering anything.
 *
 * RELATIONSHIP TO gate-50. That gate asserts the IN-PAGE emitter (`src/scripts/vitals.ts`) is
 * shipped and emitting, and it is zero-network by construction. This gate asserts the SEPARATE
 * transport. Neither subsumes the other and both must hold: `/privacy` now describes two
 * measurements and would be wrong if either disappeared.
 *
 * Red-proven by `scripts/transport_mounted_redtest.sh` — required, because this gate went green on
 * its first run, which is precisely the state in which a real assertion and a no-op are
 * indistinguishable.
 */
import { test, expect } from '@playwright/test';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const SITE = process.cwd();
const DIST = join(SITE, 'dist');

/** The custom element the Astro component renders. Read from the package, not remembered:
 *  `node_modules/@vercel/speed-insights/dist/astro/index.astro` renders <vercel-speed-insights>. */
const MOUNT_MARKER = 'vercel-speed-insights';

/** The first-party path the injected script fetches. gate-42 stubs exactly this. */
const INJECTED_PATH = '/_vercel/speed-insights/script.js';

/** Hand-authored static page in `public/`, never processed by Astro ⇒ cannot carry a component.
 *  Enumerated, not globbed; asserted in G56c. */
const UNCOVERED_BY_CONSTRUCTION = ['install.html'];

/** 229 Astro-built pages today. The floor catches a COLLAPSED walk, not a page deletion. */
const PAGE_FLOOR = 180;

function builtHtml(): string[] {
  if (!existsSync(DIST)) throw new Error(`no build output at ${DIST} — run \`npx astro build\` first`);
  const out: string[] = [];
  (function walk(dir: string) {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith('.html')) out.push(p);
    }
  })(DIST);
  if (out.length === 0) throw new Error('walked dist/ and found no .html — refusing to report green');
  return out.sort();
}

const rel = (p: string) => p.slice(DIST.length + 1);

/** Flatten built HTML to reader-visible text.
 *  ⚠ REQUIRED, not tidiness. Astro stamps `data-astro-cid-*` INSIDE every tag, so
 *  `<strong data-astro-cid-b5p7l5k3>sent to Vercel</strong>` defeats any assertion written against
 *  the markup — the same shape that produced this campaign's second false red. And convention 17's
 *  amendment binds here: the claim these limbs make is "a reader encounters this sentence", which is
 *  a question about RENDERED TEXT, so the surface must be flattened text and not HTML. */
const flatten = (html: string) =>
  html.replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&').replace(/&#8212;|&mdash;/g, '—')
      .replace(/\s+/g, ' ');

test.describe('gate-56 — the field-CWV transport is mounted, not merely installed', () => {
  test('G56a: the dependency is declared (necessary, and on its own worth nothing)', () => {
    const pkg = JSON.parse(readFileSync(join(SITE, 'package.json'), 'utf8'));
    expect(
      pkg.dependencies?.['@vercel/speed-insights'],
      'the transport package is not a dependency. Every assertion below is about what it renders, ' +
        'so this is the precondition — but note it is ONLY the precondition: a declared dependency ' +
        'that is never mounted transports nothing, which is what G56b exists to catch.',
    ).toBeTruthy();
  });

  test('G56b: every Astro-built page actually RENDERS the transport element', () => {
    const files = builtHtml();
    expect(
      files.length,
      `walked ${files.length} .html file(s) from dist/, below the floor of ${PAGE_FLOOR}. A ` +
        `collapsed walk reports "every page carries it" about almost no pages.`,
    ).toBeGreaterThanOrEqual(PAGE_FLOOR);

    const missing = files
      .filter((f) => !readFileSync(f, 'utf8').includes(MOUNT_MARKER))
      .map(rel)
      .filter((r) => !UNCOVERED_BY_CONSTRUCTION.includes(r));

    expect(
      missing.slice(0, 20),
      `${missing.length} built page(s) do not render <${MOUNT_MARKER}>. The package is installed ` +
        `(G56a) but the component is not reaching these pages — "shipped is not wired". Check the ` +
        `mount in src/layouts/BaseLayout.astro.`,
    ).toEqual([]);
  });

  test('G56c: the exclusion set is EXACTLY what it claims — no silent growth', () => {
    const files = builtHtml();
    const uncovered = files
      .filter((f) => !readFileSync(f, 'utf8').includes(MOUNT_MARKER))
      .map(rel)
      .sort();

    expect(
      uncovered,
      `the set of pages NOT carrying the transport has changed. It is enumerated on this gate's ` +
        `face as ${JSON.stringify(UNCOVERED_BY_CONSTRUCTION)} — hand-authored static files in ` +
        `public/ that never pass through Astro. If a page has joined this list it is a REGRESSION ` +
        `wearing an exclusion's clothes; if one has left, update the list. The exclusions are part ` +
        `of the claim and are asserted, not assumed.`,
    ).toEqual([...UNCOVERED_BY_CONSTRUCTION].sort());
  });

  test('G56d: /privacy states that the numbers ARE sent, and names the recipient', () => {
    // ⛔⛔ THIS LIMB WAS WEAK ON ITS FIRST WRITING AND THE RED-PROOF CAUGHT IT. It asserted
    // `includes('sent to') && includes('Vercel')` — and BOTH substrings occur elsewhere on this
    // page in unrelated copy ("sent to us or to anyone else" in the storage section; "Vercel" 8×,
    // mostly in the hosting section). Measured: with the entire disclosure sentence mutated away,
    // the limb still passed. ⇒ a gate that went green on its first run and LOOKED right.
    // It now asserts the disclosure SENTENCE, on flattened text.
    const text = flatten(readFileSync(join(DIST, 'privacy/index.html'), 'utf8'));
    expect(
      text,
      'the transport is mounted (G56b) and /privacy does not carry the disclosure sentence. That ' +
        'page promised, in its own voice, to be updated BEFORE this shipped. A transport without ' +
        'its disclosure is the exact defect this increment\'s ordering was designed to prevent, ' +
        'arriving later by a different route.',
    ).toContain('Those numbers are now sent to Vercel');
  });

  test('G56e: /privacy does NOT still claim the numbers stay on the device', () => {
    const text = flatten(readFileSync(join(DIST, 'privacy/index.html'), 'utf8'));
    // The pre-transport wording. Its survival would mean the page contradicts itself: the section
    // now describes a transport AND an in-page measurement, and only the second stays put.
    expect(
      text.includes('not sent anywhere'),
      'the pre-transport sentence "not sent anywhere" is still live on /privacy while the transport ' +
        'is mounted. The page would be making both claims at once — a contradiction in the ' +
        'reassuring direction, which is the hardest kind to notice.',
    ).toBe(false);
  });

  test('G56f: the injected path is the one gate-42 stubs (the coupling is asserted, not assumed)', () => {
    const pkgDir = join(SITE, 'node_modules/@vercel/speed-insights/dist');
    if (!existsSync(pkgDir)) test.skip(true, 'package not installed — G56a covers that case');

    const found: string[] = [];
    (function walk(dir: string) {
      for (const e of readdirSync(dir, { withFileTypes: true })) {
        const p = join(dir, e.name);
        if (e.isDirectory()) walk(p);
        else if (/\.(mjs|js|cjs|astro)$/.test(e.name)) {
          const src = readFileSync(p, 'utf8');
          for (const m of src.matchAll(/\/_vercel\/[a-z0-9/_.-]*/g)) found.push(m[0]);
        }
      }
    })(pkgDir);

    expect(
      [...new Set(found)],
      `the first-party path(s) this package injects have changed. gate-42 carries a PLATFORM STUB ` +
        `for ${INJECTED_PATH} because astro preview has no Vercel platform to serve it; if the path ` +
        `moves, that stub silently stops covering anything and gate-42's console assertions go ` +
        `vacuously green. Update both in the same commit (ADR-057, same-diff).`,
    ).toContain(INJECTED_PATH);
  });
});
