import { defineConfig } from '@playwright/test';

// HAUSSMANN P1.3: port 4321 is contended on this node (WebForge's archetype suite and sibling
// vault dev servers claim it — campaign convention 6). With the old `reuseExistingServer: true`
// the suite silently ADOPTED whatever was listening and tested a stranger's site (observed live:
// 304 bogus failures against a ScienceStanley dev server squatting 4321). Fail-loud instead:
// never reuse a server this run didn't start, and dodge a contended port via GATE_PORT.
const PORT = Number(process.env.GATE_PORT || 4321);

export default defineConfig({
  testDir: './tests/gates',
  fullyParallel: false,
  retries: 0,
  reporter: 'list',
  use: {
    baseURL: `http://localhost:${PORT}`,
  },
  /* ⛩ HAUSSMANN P4.4b B0 / AC1 — baselines live beside the suite, and THE THEME IS IN THE FILENAME.
   * That is not cosmetic: gate-49's theme control asserts the rendered theme matches the token in
   * this path before any comparison is believed. P4.1 shipped "a dark screenshot under a light
   * filename" and P4.2 shipped 71 phantom nav failures from class-toggling; a baseline is the ONE
   * artifact in this suite where an instrument defect becomes PERMANENT, because every other gate
   * re-derives each run and a baseline is captured once and compared against forever. */
  snapshotPathTemplate: '{testDir}/__screenshots__/{arg}{ext}',
  projects: [
    {
      /* The 46 standing gates. gate-49 is EXCLUDED here rather than merely absent: it needs
       * committed baselines and a pinned platform, so running it in the general lane would report
       * a missing-baseline "pass" on first run, which is the one outcome a visual gate must not
       * have. */
      name: 'chromium',
      testIgnore: /gate-49-/,
      use: { browserName: 'chromium' },
    },
    {
      /* The visual-regression lane (AC1). Separate project so it can be run — and CI-scheduled —
       * without dragging the other 46 gates along, and so `--update-snapshots` can never touch
       * anything but this lane. */
      name: 'snapshot',
      testMatch: /gate-49-/,
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 800 },
        /* Pinned: a screenshot taken at a different DPR is a different picture, and the diff would
         * be indistinguishable from a real regression. */
        deviceScaleFactor: 1,
        /* ⛩ THE HOMEPAGE HERO IS A LIVE `requestAnimationFrame` CONSTELLATION, and this is the
         * mechanism the SITE ALREADY SHIPS for freezing it — HomeHero.astro:593 starts the loop only
         * `if (!reduceMQ.matches)`, falling back to a deterministic static render otherwise.
         *
         * Found by V1: at zero tolerance `home` failed on both themes, twice, with a sparse scatter
         * of differing pixels across the constellation and NOWHERE else on a 7,597 px page. The first
         * two theories were wrong — it is not a partially-decoded PNG (the decode wait did not fix
         * it) and not a randomly-chosen hero variant (the `<img>` src is static in dist).
         * ⭐ Reaching for the site's own reduced-motion path rather than a mask keeps the hero — the
         * one region the campaign explicitly protects — INSIDE the guarded area. A mask would also
         * have gone green.
         * ⚠ STATED LIMITATION, so nobody reads more into a green than it carries: these baselines
         * assert the REDUCED-MOTION rendering. The animated frames are not covered by this gate and
         * are not claimed to be. */
        reducedMotion: 'reduce',
      },
      expect: {
        toHaveScreenshot: {
          animations: 'disabled',
          caret: 'hide',
          scale: 'css',
          /* ZERO TOLERANCE, AND AC1 IS WHY IT IS AVAILABLE.
           *
           * A tolerance exists to absorb non-determinism. AC1's 08-24 amendment removes the only
           * source this lane has — font rasterisation between a developer Mac and the container —
           * by requiring baselines to be generated AND compared inside the same image. With that
           * settled, every remaining differing pixel is a real change, and any nonzero tolerance is
           * unjustified headroom that a real regression can hide inside.
           *
           * ⚠ NOT A THEORETICAL POINT — V1 CAUGHT IT. The first draft carried
           * `maxDiffPixelRatio: 0.002`, written as "deliberately tight". Red-test case 1 —
           * `h1 { letter-spacing: 6px !important }` on /about/ — stayed GREEN under it: one heading's
           * glyphs are a vanishing fraction of a long full-page capture, so a plainly visible
           * regression sat under 0.2 %. Only a catastrophic mutation (`body{display:none}`) could
           * move it. ⭐ The lesson is the mask budget's, one field over: a threshold written by feel
           * rather than measured against a real mutation is a formality wearing a pin's clothing —
           * and BOTH of this gate's tolerances were first drafted too loose, by the same author, in
           * the same sitting. */
          maxDiffPixels: 0,
        },
      },
    },
  ],
  webServer: {
    command: `npm run preview -- --port ${PORT}`,
    port: PORT,
    reuseExistingServer: false,
    timeout: 30_000,
  },
});
