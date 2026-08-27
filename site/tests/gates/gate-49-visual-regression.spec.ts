/**
 * gate-49 — VISUAL REGRESSION (HAUSSMANN P4.4b B0 · AC1 · V1)
 *
 * 12 key templates × 2 themes = 24 baselines, generated in and compared inside the Playwright CI
 * container. Closes `idea_visual_regression_gate`, deferred since the WEBSITE.aDNA campaign.
 *
 * ⚠ THIS GATE ONLY RUNS IN THE `snapshot` PROJECT (playwright.config.ts). It is `testIgnore`d out
 * of the standing `chromium` lane on purpose: a visual gate with no committed baseline does not
 * fail, it WRITES ONE AND PASSES, and that is the single outcome this gate must never have.
 *
 * ⛩ AC1's 08-24 amendment — THE RED-TEST RUNS IN THE SAME CONTAINER THAT GENERATED THE BASELINES.
 * On this Mac against container baselines EVERY screenshot diffs on font rasterisation, so a true
 * positive is indistinguishable from the exact noise the container exists to eliminate. A diff
 * produced on a developer machine is not admissible evidence for this criterion. Runner:
 * `scripts/visual_regression_redtest.sh` (V1).
 *
 * ⚠ THE EXCLUSIONS ARE PART OF THE CLAIM AND ARE ASSERTED, NOT ASSUMED — gate-48's discipline
 * (G48d), applied here because a visual gate's real failure mode is not a missed diff, it is
 * OVER-MASKING (AC1's 08-26 amendment, FINDING 4). A mask that swallows a real region leaves that
 * region green FOREVER, and masks only ever grow: every future flake has a one-line fix that widens
 * one. So the mask set is enumerated with a reason each (G49b), the masked-area arithmetic is pinned
 * against a budget (G49c), and V1 red-proves that widening a mask past the budget goes red.
 *
 * ⚠ COVERAGE FLOOR, NOT `> 0` (P4.2's lesson, paid for twice; gate-48's G48a). "Every screenshot
 * matched" is VACUOUSLY TRUE over a frame of zero templates, and the frame is one bad glob away
 * from zero. G49a asserts the frame before any comparison is believed at all.
 *
 * ⚠ A BASELINE IS THE ONE ARTIFACT IN THIS SUITE WHERE AN INSTRUMENT DEFECT BECOMES PERMANENT.
 * Every other gate re-derives each run; a baseline is captured once and everything after is compared
 * to it. This campaign has produced that defect twice — P4.1's "dark screenshot under a light
 * filename", P4.2's 71 phantom nav failures from class-toggling — and P4.3 found `addInitScript`
 * SILENTLY NOT APPLYING, i.e. the very API the correct theme pattern uses can fail open. Hence the
 * theme control in G49d: the RENDERED theme is asserted against the token in the baseline's filename
 * before the comparison is believed.
 */
import { test, expect, type Page, type Locator } from '@playwright/test';

/* ─────────────────────────────────────────────────────────────────────────────
 * THE FRAME — 12 templates, enumerated with a reason each.
 *
 * Enumerated rather than crawled, on gate-48's precedent ("a shrink is a deliberate edit and should
 * be seen"). Derived from the layout census: this site has exactly two layouts (`BaseLayout`,
 * `DocumentationLayout`) and 50 page modules, so "template" here means a DISTINCT RENDERED SHAPE,
 * not a distinct route — one representative per shape, chosen to cover both layouts and every
 * surface the campaign lists under "what this campaign protects".
 * ──────────────────────────────────────────────────────────────────────────── */
type Template = { id: string; path: string; why: string };

const TEMPLATES: Template[] = [
  { id: 'home',            path: '/',                                  why: 'BaseLayout, bespoke hero — HERO VISUAL QUALITY is campaign-protected' },
  { id: 'about',           path: '/about/',                            why: 'the honesty strata, campaign-protected' },
  { id: 'commons',         path: '/commons/',                          why: 'P4.5b V4 scored this 3.77 against a 4.0 gate — the one ranked surface below bar' },
  { id: 'vaults-index',    path: '/vaults/',                           why: 'registry index, the P2.4 redesign; zero-count displays are campaign-protected' },
  { id: 'vault-card',      path: '/vaults/adna/',                      why: 'per-vault card — a distinct shape from its index' },
  { id: 'vaults-graph',    path: '/vaults/graph/',                     why: 'the graph + keyboard-twin pattern, campaign-protected' },
  { id: 'state-network',   path: '/state-of-the-network/',             why: 'true load-bearing numbers, campaign-protected' },
  { id: 'policy',          path: '/security/',                         why: 'the `.policy` template, shared by /privacy and /accessibility' },
  { id: 'doc-hub',         path: '/learn/',                            why: 'DocumentationLayout hub shape' },
  { id: 'doc-leaf',        path: '/learn/concepts/agentic-literacy/',  why: 'DocumentationLayout article shape — and the only shape carrying the freshness date' },
  { id: 'design-system',   path: '/design-system/',                    why: 'the token surface (P4.1) and the published voice guide (P4.5b)' },
  { id: 'community',       path: '/community/',                        why: 'empty-state candor, campaign-protected' },
];

/** Pinned. A silently-shrinking frame is how this gate would report green over nothing. */
const TEMPLATE_FLOOR = 12;

const THEMES = ['dark', 'light'] as const;
type Theme = (typeof THEMES)[number];

/* ─────────────────────────────────────────────────────────────────────────────
 * THE MASK SET — enumerated with a reason per mask, and PINNED by area (AC1, 08-26).
 * ──────────────────────────────────────────────────────────────────────────── */
type Mask = { selector: string; why: string };

const MASKS: Mask[] = [
  {
    selector: '.doc-provenance-updated',
    why:
      'Git-derived per-page last-updated date (utils/contentSource.ts:63 `lastUpdated()` → ' +
      'DocumentationLayout:118-120), rendered across five route families. CONFIRMED dynamic, not ' +
      'hypothetical: it moves whenever a content commit lands, with no visual regression.',
  },
  {
    selector: '.footer-year',
    why:
      'Footer copyright year — `new Date().getFullYear()` (Footer.astro:3), evaluated at BUILD time ' +
      'and baked into every page, so it turns all 24 baselines red on 1 January for a non-regression. ' +
      'Masked at a SPAN added for the purpose rather than at `.footer-copyright`, which would have ' +
      'swallowed the MIT licence claim — a truth claim this site makes.',
  },
];

/**
 * Pinned masked-area budget, as a fraction of the full-page area.
 *
 * MEASURED FIRST, THEN PINNED TO THE MEASUREMENT — not guessed, and not left generous.
 * All 24 captures, 2026-08-26 `[D]`: max **0.0716 %** (`doc-leaf`, the only shape carrying the
 * freshness date), then 0.0356 % (`vault-card`), 0.0200 % (`policy`), and a long tail down to
 * 0.0031 % (`design-system`). Pinned at **0.15 %** ≈ **2.1× the worst case**.
 *
 * ⚠ The first draft of this line was 0.40 % — 5.6× headroom, which is a budget a mask could grow
 * FIVE-FOLD inside and never go red. That is not a pin, it is a formality wearing a pin's clothing,
 * and it would have shipped had the figures not been measured before the constant was written.
 *
 * The headroom that remains is for the DENOMINATOR, not the masks: both masked elements are
 * fixed-size text (a date line, four digits), so the fraction moves when a page gets SHORTER. 2.1×
 * tolerates a page halving in length. Any real over-mask is orders of magnitude past it — masking
 * one paragraph is ≈13×, a hero ≈300× — so this stays loud for the thing it is guarding.
 *
 * Widening a mask past this goes red: that is V1's over-masking mutation, and it is the only thing
 * standing between this gate and the cheapest possible way to fake it green.
 */
const MASK_AREA_BUDGET = 0.0015;

/** Selectors that were CONSIDERED and deliberately NOT masked. Exclusions are a claim; so are
 *  non-exclusions, and this is the half that usually goes unrecorded. Asserted in G49b. */
const NOT_MASKED: { what: string; why: string }[] = [
  {
    what: 'Derived counts (/vaults/, /state-of-the-network/, registry totals)',
    why:
      'LOAD-BEARING and campaign-protected ("true load-bearing numbers"). A count change MUST go ' +
      'red — that is the gate working, not flaking. Masking these is precisely FINDING 4.',
  },
  {
    what: 'Random ids in ConvergenceFunnel / TriadDiagram / MermaidDiagram (`Math.random()`)',
    why: 'DOM `id` attributes only (aria-labelledby wiring). Zero pixel effect — measured, not assumed.',
  },
  {
    what: 'BUILD_DAY (utils/twin.ts:41, `new Date()`)',
    why:
      'Reaches only llms.txt / llms-full.txt / registry JSON / the .md twins — NEVER an HTML page, ' +
      'so it cannot appear in a screenshot. Checked rather than presumed harmless.',
  },
  {
    what: 'changelog + proposal dates (`toLocaleDateString`)',
    why: 'Content-frontmatter derived with `timeZone: "UTC"` pinned — deterministic across runs and hosts.',
  },
  {
    what: 'The homepage hero canvas overlay (`canvas.hero-graph-canvas`) — HIDDEN, not masked',
    why:
      'The one declared exclusion on this gate. An aria-hidden decorative canvas whose ResizeObserver ' +
      'redraws during `fullPage` capture, so every capture perturbs the next and the stability check ' +
      'never converges. Hidden rather than masked so the SSR SVG beneath it — the component\'s own ' +
      'no-JS/a11y baseline, build-time generated and deterministic — IS asserted. ⚠ What this gate ' +
      'therefore does NOT cover: the animated constellation\'s own rendering. Stated so a green here ' +
      'is not read as covering it.',
  },
  {
    what: 'The /vaults/graph/ SVG',
    why:
      'Built at BUILD time by scripts/build_graph_svg.mjs and inlined via `?raw` with zero runtime ' +
      'JS — no force simulation, no layout randomness. The obvious mask candidate, and it would have ' +
      'blanked the exact subject the graph template exists to guard.',
  },
];

/* ────────────────────────────────────────────────────────────────────────── */

/** Everything that must be true before a pixel comparison means anything. */
async function settle(page: Page, path: string, theme: Theme) {
  if (theme === 'light') {
    // Dark is the default render (BaseLayout.astro:70-79, ADR-032); light is reached by seeding
    // the preference before load. Same seed gate-4-a11y.spec.ts:73-80 uses — reused, not re-invented.
    await page.addInitScript(() => localStorage.setItem('theme', 'light'));
  }
  const res = await page.goto(path, { waitUntil: 'networkidle' });

  // A 404 or a redirect renders perfectly well and would be baselined as if it were the template.
  expect(res?.status(), `${path} did not return 200 — a screenshot of an error page is still a screenshot`)
    .toBe(200);
  expect(new URL(page.url()).pathname, `${path} redirected; the baseline would be named for a route it is not`)
    .toBe(path);

  // Webfonts land after networkidle and shift text by a pixel or two — the classic baseline flake.
  await page.evaluate(() => document.fonts.ready);

  /* ⚠ AND IMAGES MUST BE DECODED, NOT MERELY FETCHED — found by V1, not predicted.
   * `networkidle` says the BYTES arrived; it says nothing about the decode being finished and
   * painted. At zero tolerance the homepage hero (a large pixel-art PNG) failed on both themes,
   * twice, in exactly the same place: a sparse scatter of differing pixels across the constellation
   * and NOWHERE else on a 7,597 px page. That is the signature of a partially-painted image, not of
   * a moving graphic.
   * ⭐ The tempting fix was to mask the hero. It would have worked, it would have gone green, and it
   * would have blanked the one region the campaign explicitly protects ("hero visual quality") on the
   * one template that exists to guard it — over-masking (FINDING 4) arriving disguised as a flake
   * remedy, which is exactly how masks grow. Waiting for the decode fixes the cause instead. */
  await page.evaluate(async () => {
    await Promise.all(
      Array.from(document.images).map((img) => img.decode().catch(() => undefined)),
    );
  });

  /* ⛩ THE HERO CANVAS OVERLAY IS HIDDEN FOR CAPTURE — an EXCLUSION, declared here and accounted for
   * in NOT_MASKED below, not a quiet workaround.
   *
   * WHY IT IS NEEDED, established by measurement rather than by theory (three wrong theories first):
   * `home` — and only `home` — could not produce two consecutive stable screenshots. It is not a
   * partially-decoded PNG, not a randomly-picked hero variant, and not an unstable REGION: two
   * full-page captures 600 ms apart are PIXEL-IDENTICAL (verified with a sharp-based row diff, and
   * every 800 px band is stable on its own). The differing thing was the PNG byte length, not the
   * picture. The cause is the capture itself — `fullPage` resizes the viewport, the hero's
   * `ResizeObserver` (HomeHero.astro:610) fires and REDRAWS the canvas, so each capture perturbs the
   * next and the stability check can never converge. Only `home` carries that canvas.
   *
   * WHY HIDE RATHER THAN MASK: the canvas is `aria-hidden="true"` decoration drawn OVER an SSR SVG
   * that the component itself keeps as "the no-JS + a11y baseline" (HomeHero.astro:428). Hiding the
   * overlay does not blank the region — it REVEALS the deterministic, build-time SVG underneath, so
   * the hero graphic is still asserted, in the form the site ships to a no-JS reader. A mask would
   * have gone green too, and would have left the campaign's explicitly-protected hero unguarded. */
  await page.addStyleTag({ content: 'canvas.hero-graph-canvas { visibility: hidden !important; }' });
}

function masksFor(page: Page): Locator[] {
  return MASKS.map((m) => page.locator(m.selector));
}

/** Total area covered by every mask box on the current page, as a fraction of the full page. */
async function maskedFraction(page: Page): Promise<number> {
  return page.evaluate((selectors) => {
    const doc = document.documentElement;
    const pageArea = Math.max(doc.scrollWidth, 1) * Math.max(doc.scrollHeight, 1);
    let masked = 0;
    for (const sel of selectors) {
      for (const el of Array.from(document.querySelectorAll(sel))) {
        const r = (el as HTMLElement).getBoundingClientRect();
        masked += Math.max(r.width, 0) * Math.max(r.height, 0);
      }
    }
    return masked / pageArea;
  }, MASKS.map((m) => m.selector));
}

test.describe('gate-49 — visual regression', () => {
  test('G49a: the template frame is what it claims to be', async () => {
    expect(
      TEMPLATES.length,
      `template frame is ${TEMPLATES.length}, below the floor of ${TEMPLATE_FLOOR}. ` +
        `"Every screenshot matched" is vacuously true over an empty frame.`,
    ).toBeGreaterThanOrEqual(TEMPLATE_FLOOR);

    const ids = TEMPLATES.map((t) => t.id);
    expect(new Set(ids).size, 'duplicate template id — two templates would share one baseline file').toBe(ids.length);

    const paths = TEMPLATES.map((t) => t.path);
    expect(new Set(paths).size, 'duplicate template path — the same shape baselined twice reads as coverage').toBe(paths.length);

    // A reason is not decoration: it is what makes the frame reviewable rather than inherited.
    expect(TEMPLATES.filter((t) => !t.why.trim()).map((t) => t.id), 'template(s) with no stated reason').toEqual([]);
    expect(TEMPLATES.filter((t) => !t.path.startsWith('/') || !t.path.endsWith('/')).map((t) => t.id).filter((id) => id !== 'home'), 'template path(s) not in canonical trailing-slash form').toEqual([]);
  });

  test('G49b: the mask set and the non-mask set are both asserted, not assumed', async ({ page }) => {
    expect(MASKS.filter((m) => !m.why.trim()).map((m) => m.selector), 'mask(s) with no stated reason').toEqual([]);
    expect(NOT_MASKED.filter((n) => !n.why.trim()).map((n) => n.what), 'declared non-mask(s) with no stated reason').toEqual([]);

    // A mask whose selector matches nothing anywhere is a silent no-op that reads exactly like
    // diligence. Each one must be shown to bite on at least one of the 12 templates.
    const hits = new Map<string, number>(MASKS.map((m) => [m.selector, 0]));
    for (const t of TEMPLATES) {
      await settle(page, t.path, 'dark');
      for (const m of MASKS) {
        hits.set(m.selector, (hits.get(m.selector) ?? 0) + (await page.locator(m.selector).count()));
      }
    }
    const dead = [...hits.entries()].filter(([, n]) => n === 0).map(([sel]) => sel);
    expect(
      dead,
      `mask selector(s) matched nothing across all ${TEMPLATES.length} templates. A mask that hits ` +
        `nothing is not protecting anything — either the selector rotted or the region is gone; ` +
        `both mean this list is lying about what it excludes.`,
    ).toEqual([]);
  });

  for (const theme of THEMES) {
    for (const t of TEMPLATES) {
      test(`G49c/d [${theme}]: ${t.id} (${t.path}) matches its baseline`, async ({ page }) => {
        await settle(page, t.path, theme);

        /* G49d — THE THEME CONTROL. Asserted BEFORE the comparison, because the failure it catches
         * is silent: `addInitScript` not applying (P4.3 measured exactly this — 15 routes "passed" a
         * 200% transform that never happened) bakes a dark baseline under a light filename, and every
         * future light diff is then measured against the wrong picture, forever. */
        const isDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
        expect(
          isDark,
          `theme control FAILED: ${t.path} rendered ${isDark ? 'dark' : 'light'} while capturing the ` +
            `"${theme}" baseline. The seed did not take. Do NOT re-baseline past this — the picture ` +
            `would be permanently wrong under a filename that says otherwise.`,
        ).toBe(theme === 'dark');

        /* G49c — THE PINNED MASK ARITHMETIC. Widening a mask past the budget goes red here (V1's
         * over-masking mutation). Printed either way so the headroom is auditable. */
        const frac = await maskedFraction(page);
        // eslint-disable-next-line no-console
        console.log(`      masked ${(frac * 100).toFixed(4)}% of ${t.id} [${theme}] (budget ${(MASK_AREA_BUDGET * 100).toFixed(2)}%)`);
        expect(
          frac,
          `masks cover ${(frac * 100).toFixed(4)}% of ${t.path} [${theme}], over the pinned budget of ` +
            `${(MASK_AREA_BUDGET * 100).toFixed(2)}%. Widening a mask is the cheapest way to make a real ` +
            `regression disappear, so it is pinned rather than trusted. If the growth is legitimate, ` +
            `raise MASK_AREA_BUDGET in the same commit that widens the mask, WITH ITS REASON.`,
        ).toBeLessThanOrEqual(MASK_AREA_BUDGET);

        await expect(page).toHaveScreenshot(`${t.id}-${theme}.png`, {
          fullPage: true,
          mask: masksFor(page),
        });
      });
    }
  }
});
