/**
 * Gate 39 — Figure typeset floor  (HAUSSMANN P4.2 O3)
 *
 * Craft-floor lock **O1**, implemented against the lock's own words rather than a paraphrase:
 *
 *   "every rendered TYPESET element in a committed FIGURE — the element set is `text, tspan` and it
 *    is NAMED here deliberately: a gate that enumerates a SUBSET of its rule's domain is a fake
 *    enforcement even when its code is real, and this lock read `enforced` through a whole round
 *    while 48 of 48 badge `tspan`s sat below the floor at every gated width — clears a 12 CSS px
 *    rendered floor at 320/390/1024/1440/1920 in both appearances, with zero label-label overlaps,
 *    zero label-edge intersections, zero element-box clipping, and no running text past ±30° from
 *    horizontal — measured in a browser via sqrt(|det(CTM)|), never from getComputedStyle"
 *
 * ⚠ WHY THE CTM AND NOT `getComputedStyle`. An SVG `<text font-size="14">` inside
 * `viewBox="0 0 640 384"` is 14 USER UNITS, not 14 CSS px. `getComputedStyle` reports the authored
 * value and is blind to the viewBox scale, so a figure squeezed to 40% on a phone reports "14px"
 * while rendering at 5.6 — which is exactly how this lock passed upstream for a whole round with 48
 * of 48 labels under the floor. `sqrt(|det(CTM)|)` is the uniform scale factor actually applied at
 * paint, so `font-size × that` is what a reader's eye receives.
 *
 * ⚠ WHY `text, tspan` AND NOT `text`. The lock names both, and says why: a gate that covers a subset
 * of its rule's domain is a fake enforcement. The upstream failure was in `tspan`s specifically.
 *
 * ⚠ THE 30° CLAUSE IS SCOPED TO RUNNING TEXT. A short axis label rotated 90° is a normal chart
 * idiom; a sentence at 45° is not. Enforced on strings of 12+ characters, which is where rotation
 * stops being a label convention and starts being unreadable prose.
 *
 * Both appearances: this site's theme is a `.dark` class on <html> seeded from localStorage before
 * paint, NOT a `prefers-color-scheme` query — driving it with Playwright's `colorScheme` alone
 * produces a light-named screenshot of a dark page (the P4.1 O2 capture defect).
 */
import { test, expect } from '@playwright/test';

const WIDTHS = [320, 390, 1024, 1440, 1920];
const FLOOR_PX = 12;
const MAX_TILT_DEG = 30;
const RUNNING_TEXT_MIN_CHARS = 12;

/* ⛔ THE FLOOR IS NOT MET TODAY, AND THIS GATE DOES NOT PRETEND IT IS.
 *
 * First run, 2026-08-24: all three committed figures fail, and one fails completely.
 *
 *   hero-graph-svg (/)            27/27 labels below the floor at EVERY width; 3.5px at 320,
 *                                 never better than 7.1px even at 1920
 *   netdiagram-svg (/, /network/)  7/8 at 320 (min 8.0); 7/8 at desktop on /network/ (min 10.1)
 *   convergence-funnel            8/8 at 320 (min 8.5); 4/8 above that (min 10.0)
 *
 * That is the lock's own recorded failure mode reproduced here — it read `enforced` upstream for a
 * whole round while 48 of 48 badge tspans sat under the floor, because nothing measured the RENDERED
 * size. Now something does, and the answer is no.
 *
 * ⚠ The remedy is design work, not a font-size bump, and saying so is the point. These are SVGs
 * authored in a viewBox and scaled down: at 320px the funnel paints at 0.85× and the hero graph at
 * 0.28×, so clearing 12 CSS px means either authoring at ~4× (which wrecks the composition at
 * desktop) or not scaling the text with the figure at all — a portrait twin, a min-width with
 * scroll, or a redrawn mobile treatment. NetworkDiagram already has a portrait twin and is the
 * closest to right, which is why it is the least bad of the three. The homepage hero graph is also
 * a surface this campaign explicitly protects, so it is not something to reflow at the tail of an
 * objective.
 *
 * ⇒ BASELINE, gate-25's dated-allowlist idiom. Each figure is pinned at the worst rendered size it
 * currently produces. The gate fails on ANY figure not listed, and on ANY listed figure that gets
 * WORSE. It cannot be satisfied by adding a new bad figure, and it ratchets: fix one and tighten its
 * number. Lock O1 therefore stays `gap` in lock_coverage_adna.yaml, NOT `enforced` — a
 * non-regression fence is not the rule, and calling it the rule would be the fake-enforcement the
 * lock's own text names.
 */
const BASELINE: Record<string, { worstPx: number; why: string }> = {
  'hero-graph-svg': {
    worstPx: 3.4,
    why: 'Committed asset, 27 labels, 0.28× at 320px. Needs a redraw or a mobile treatment, not a bump — and it is on the protected homepage hero.',
  },
  'netdiagram-svg': {
    worstPx: 7.9,
    why: 'Has a portrait twin already; the twin still paints its secondary labels at 8px on a 320 viewport. Closest of the three to a real fix.',
  },
  'convergence-funnel': {
    worstPx: 8.4,
    why: 'The `funnel-details` layer (authored 10) at 0.85×. Raising it to clear the floor collapses the size hierarchy against the 14-unit labels; needs a considered scale, not a nudge.',
  },
};

/** Which baseline row a figure belongs to — matched on the class the component gives its <svg>. */
function baselineKey(svgClass: string): string | null {
  for (const k of Object.keys(BASELINE)) if (svgClass.includes(k)) return k;
  return null;
}

// Routes carrying a committed figure, from the components that draw one: NetworkDiagram (/network),
// ConvergenceFunnel + TriadDiagram (home, and the docs pages that embed them).
const FIGURE_ROUTES = ['/', '/network/', '/patterns/mission-decomposition/'];

type Finding = { route: string; width: number; theme: string; kind: string; detail: string };

/* ── AC6: the construction rules are checked by an assertion, not by the word "published" ──────
   P4.2's AC4 required diagram construction rules; AC6 required a verification method that can
   actually move. "Published" is not one — a spec that lives only in a campaign artifact directory is
   a spec nobody outside the campaign will find, and a spec asserted only by its author having
   written it is one nobody notices the deletion of. This asserts BOTH halves: the rules exist AND
   they are reachable from /design-system's own navigation. */
test('G39e diagram-rules: the construction rules are present and reachable from /design-system', async ({ page }) => {
  await page.goto('/design-system/');

  /* ⚠ NOT `#diagram` — that id is on the <h2>, so reading its textContent yields the four words of
     the heading and every content check below fails on a section that is perfectly present. Caught
     by this gate's own first run against a correct page. The section is bound to the heading by
     `aria-labelledby`, which is the durable handle. */
  const heading = page.locator('h2#diagram');
  await expect(heading, 'the #diagram heading is gone from /design-system — AC4 is unmet').toHaveCount(1);
  const section = page.locator('section[aria-labelledby="diagram"]');
  await expect(section, 'the diagram-rules section lost its aria-labelledby binding to the heading').toHaveCount(1);

  // Reachable, not merely present: the in-page TOC must offer it. A section only findable by
  // scrolling a 5,500px page is the Findability defect this same objective was fixing.
  const tocLink = page.locator('.toc-link[href="#diagram"]');
  await expect(tocLink, 'the diagram rules are on the page but absent from its table of contents').toHaveCount(1);

  // The five things AC4 names, each checked by a phrase the rules cannot lose without changing what
  // they say. Checked as CONTENT rather than as headings so a restructure does not need a gate edit,
  // but a deletion does.
  const text = ((await section.textContent()) || '').toLowerCase();
  for (const [topic, needle] of [
    ['stroke weight', 'stroke'],
    ['palette source', 'currentcolor'],
    ['grid', 'viewbox'],
    ['dual-theme behaviour', 'theme'],
    ['accessible equivalent', 'aria-labelledby'],
  ] as const) {
    expect(text.includes(needle), `the diagram rules no longer say anything about ${topic} (looked for "${needle}")`).toBe(true);
  }
});

test.describe('Gate 39 — figure typeset floor (lock O1)', () => {
  for (const dark of [true, false]) {
    const theme = dark ? 'dark' : 'light';

    test(`G39 figure-typeset: rendered text clears the ${FLOOR_PX}px floor, unclipped and level (${theme})`, async ({ browser }) => {
      const ctx = await browser.newContext();
      await ctx.addInitScript((d) => {
        try {
          localStorage.setItem('theme', d ? 'dark' : 'light');
        } catch {
          /* private mode — the class-based default still applies */
        }
      }, dark);
      const page = await ctx.newPage();

      const findings: Finding[] = [];
      let measured = 0;

      for (const route of FIGURE_ROUTES) {
        for (const width of WIDTHS) {
          await page.setViewportSize({ width, height: 900 });
          await page.goto(route);
          await page.evaluate(() => document.fonts.ready);

          const r = await page.evaluate(
            ({ floor, maxTilt, minChars }) => {
              const out: { kind: string; detail: string }[] = [];
              const belowFloor: { svgClass: string; rendered: number; detail: string }[] = [];
              let seen = 0;

              /* WHAT COUNTS AS A "COMMITTED FIGURE" — defined on a principled rule, not on what is
                 convenient to exclude. The lock warns that enumerating a subset of its domain is
                 fake enforcement, so the boundary has to be defensible:

                   IN  — an <svg> that presents information: role="img" WITH an accessible name, or
                         one wrapped in a <figure>. Both are declarations by the author that this is
                         content a reader is meant to read.
                   OUT — `aria-hidden="true"` decorative icons. Not a judgment call about size: the
                         markup itself says they are not exposed to a reader at all, so they have no
                         typeset layer to hold to a legibility floor.
                   OUT — anything with no painted <text>/<tspan>, which is most UI iconography. */
              const svgs = [...document.querySelectorAll('svg')].filter((s) => {
                const b = s.getBoundingClientRect();
                if (b.width === 0 || b.height === 0) return false; // a display:none twin is not painted
                if (s.getAttribute('aria-hidden') === 'true') return false;
                const named = s.getAttribute('role') === 'img' && (s.hasAttribute('aria-labelledby') || s.hasAttribute('aria-label'));
                return named || !!s.closest('figure');
              });

              for (const svg of svgs) {
                const svgBox = svg.getBoundingClientRect();
                /* ⚠ THE IDENTIFYING CLASS IS OFTEN ON THE <figure>, NOT ON THE <svg>. Reading it off
                   the <svg> alone reported ConvergenceFunnel as an UNLISTED figure across 6
                   route×width×theme combinations — the gate failing to recognise a figure it had a
                   baseline row for. Found by the gate's own output naming an svg class of "". */
                const svgClass = [
                  svg.getAttribute('class') || '',
                  svg.getAttribute('id') || '',
                  (svg.closest('figure')?.className || '').toString(),
                  (svg.parentElement?.className || '').toString(),
                ].join(' ');
                const boxes: { rect: DOMRect; text: string }[] = [];

                for (const el of [...svg.querySelectorAll('text, tspan')]) {
                  const text = (el.textContent || '').trim();
                  if (!text) continue;
                  const rect = el.getBoundingClientRect();
                  if (rect.width === 0 && rect.height === 0) continue; // not painted
                  seen++;

                  const ctm = (el as SVGGraphicsElement).getScreenCTM?.();
                  if (!ctm) continue;
                  // Uniform scale actually applied at paint. getComputedStyle reports the AUTHORED
                  // value and cannot see the viewBox scale — the whole point of the lock's wording.
                  const scale = Math.sqrt(Math.abs(ctm.a * ctm.d - ctm.b * ctm.c));
                  const authored = Number.parseFloat(getComputedStyle(el).fontSize) || 0;
                  const rendered = authored * scale;

                  if (rendered > 0 && rendered < floor) {
                    belowFloor.push({
                      svgClass,
                      rendered,
                      detail: `"${text.slice(0, 24)}" renders at ${rendered.toFixed(1)}px (authored ${authored}, viewBox scale ${scale.toFixed(3)})`,
                    });
                  }

                  // Tilt from the CTM's x-basis vector.
                  if (text.length >= minChars) {
                    const deg = Math.abs((Math.atan2(ctm.b, ctm.a) * 180) / Math.PI);
                    const tilt = Math.min(deg, Math.abs(180 - deg));
                    if (tilt > maxTilt) {
                      out.push({ kind: 'tilted', detail: `"${text.slice(0, 24)}" runs at ${tilt.toFixed(1)}° from horizontal` });
                    }
                  }

                  // Clipped by, or escaping, its own figure box.
                  if (rect.left < svgBox.left - 1 || rect.right > svgBox.right + 1 || rect.top < svgBox.top - 1 || rect.bottom > svgBox.bottom + 1) {
                    out.push({ kind: 'escapes-figure', detail: `"${text.slice(0, 24)}" extends outside its own <svg> box` });
                  }

                  boxes.push({ rect, text });
                }

                // Label-label overlap, within one figure only.
                for (let i = 0; i < boxes.length; i++) {
                  for (let j = i + 1; j < boxes.length; j++) {
                    const a = boxes[i].rect;
                    const b = boxes[j].rect;
                    // A <tspan> lives inside its <text>, so their boxes legitimately overlap.
                    const overlapW = Math.min(a.right, b.right) - Math.max(a.left, b.left);
                    const overlapH = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
                    if (overlapW > 1 && overlapH > 1) {
                      const contained =
                        (a.left <= b.left && a.right >= b.right && a.top <= b.top && a.bottom >= b.bottom) ||
                        (b.left <= a.left && b.right >= a.right && b.top <= a.top && b.bottom >= a.bottom);
                      if (!contained) {
                        out.push({ kind: 'overlap', detail: `"${boxes[i].text.slice(0, 18)}" overlaps "${boxes[j].text.slice(0, 18)}" by ${overlapW.toFixed(0)}×${overlapH.toFixed(0)}px` });
                      }
                    }
                  }
                }
              }
              return { out, belowFloor, seen, isDark: document.documentElement.classList.contains('dark') };
            },
            { floor: FLOOR_PX, maxTilt: MAX_TILT_DEG, minChars: RUNNING_TEXT_MIN_CHARS },
          );

          // The gate must reach the theme it says it is testing (the P4.1 O2 capture defect).
          expect(r.isDark, `${route} at ${width}: asked for ${theme} but the document is ${r.isDark ? 'dark' : 'light'}`).toBe(dark);

          measured += r.seen;
          for (const f of r.out) findings.push({ route, width, theme, ...f });

          /* Below-floor hits are graded against the BASELINE rather than reported flat.
             An unlisted figure is a hard finding; a listed one is a finding only if it got worse
             than its pinned number. This is what makes the gate a ratchet instead of a wall of
             known noise nobody reads. */
          for (const f of r.belowFloor) {
            const key = baselineKey(f.svgClass);
            if (key === null) {
              findings.push({
                route,
                width,
                theme,
                kind: 'below-floor (unlisted figure)',
                detail: `${f.detail} — svg class "${f.svgClass.slice(0, 40)}" is not in gate-39's BASELINE. A NEW figure must clear the ${FLOOR_PX}px floor; it does not inherit the known-bad exemption.`,
              });
            } else if (f.rendered < BASELINE[key].worstPx) {
              findings.push({
                route,
                width,
                theme,
                kind: 'below-floor (regression)',
                detail: `${f.detail} — worse than "${key}"'s pinned baseline of ${BASELINE[key].worstPx}px. Tighten the baseline when you improve a figure; never loosen it.`,
              });
            }
          }
        }
      }

      await ctx.close();

      // Assert the gate measured something. A selector change that finds zero <text> elements would
      // otherwise produce a perfect green — the exact shape of the upstream failure this lock records.
      /* ⚠ NOT `> 0`. The first version of this assertion was, and it was too weak to be worth
         having: after the figure-domain filter landed, this gate went green in 0.4s where it had
         taken 30s, and `measured > 0` would have passed just as happily on 8 elements as on 255.
         A floor that silently stops looking at most of its domain is the fake enforcement this
         lock's own text warns about. The number below is the observed count with all three figures
         present across every route × width; it drops loudly if a figure stops being recognised. */
      const MIN_MEASURED = 200;
      expect(
        measured,
        `only ${measured} <text>/<tspan> element(s) measured across ${FIGURE_ROUTES.length} routes × ${WIDTHS.length} widths — expected at least ${MIN_MEASURED}. A figure stopped being recognised (check the role=img / <figure> predicate) or stopped rendering; either way this gate is no longer covering its domain.`,
      ).toBeGreaterThanOrEqual(MIN_MEASURED);

      expect(
        findings.slice(0, 15).map((f) => `${f.route} @${f.width} ${f.theme} [${f.kind}] ${f.detail}`),
        `${findings.length} figure-typeset finding(s) across ${measured} measured elements`,
      ).toEqual([]);
    });
  }
});
