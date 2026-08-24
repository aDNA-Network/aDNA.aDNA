/**
 * Gate 4: Accessibility (A11y)
 * Criterion: Zero WCAG 2.1 AA violations via axe-core — in BOTH colour modes.
 * Audits a representative sample of pages.
 *
 * Both-modes coverage (E4 cycle 155): the site is HARD dark-first (the `.dark` class is the default;
 * light is opt-in via `localStorage.theme = 'light'`). Auditing only the default mode left light-mode
 * AA regressions uncaught — exactly the class that bit cycle 154 (a dark edge-label contrast miss was
 * found by an ad-hoc probe, not the gate). This loop runs every page in dark AND light so both palettes
 * are permanently gated.
 */
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = [
  { name: 'Homepage', path: '/' },
  { name: 'Concept page', path: '/learn/concepts/triad' },
  { name: 'Tutorial page', path: '/learn/tutorials/first-claude-md' },
  { name: 'Pattern page', path: '/patterns/agents-md' },
  { name: '404 page', path: '/404.html' },
  // E4 aDNANetwork surfaces (cycle 150): the federation topology + a vault detail with relationships
  { name: 'Network graph', path: '/vaults/graph/' },
  { name: 'Vault detail (with relationships)', path: '/vaults/harness/' },
  // E4 aDNANetwork (cycle 151): the /network narrative + node-onboarding surface
  { name: 'Network page', path: '/network' },
  // E5 Public-Good Commons (cycle 160): the subnetwork showcase surface
  { name: 'Commons page', path: '/commons' },
  // Audit P1 (campaign_adna_network_audit DS5): close the gate-coverage holes that let the
  // /vaults-index 78-node color-contrast failure ship — the index, the conversion page, the spec.
  { name: 'Vaults index', path: '/vaults' },
  { name: 'Get Started', path: '/get-started' },
  { name: 'Specification', path: '/reference/specification' },
  // Storyweave P5 M5.2 / B11: the new design-system reference page (token-driven; gated
  // in both registers since every swatch/sample re-themes).
  { name: 'Design system', path: '/design-system' },
  // Storyweave P5 M5.3 / O5: the new privacy notice (a required outward legal page — lock axe both modes).
  { name: 'Privacy', path: '/privacy' },
  // Storyweave P5 M5.3 / O6: representative index/landing archetypes — durably lock the long-tail
  // both-mode axe that the one-off T0 sweep confirmed. CardGrid index pages were the M5.2 latent
  // badge-AA locus; /about is a prose marketing page. (T0 confirmed all four axe-0 both themes.)
  { name: 'Use-cases index', path: '/use-cases' },
  { name: 'Guides index', path: '/how' },
  { name: 'Glossary index', path: '/glossary' },
  { name: 'About', path: '/about' },
  // HAUSSMANN P1.2 — the two disclosure surfaces (ADR-057 same-diff). Both are link- and
  // definition-list-dense, which is exactly where AA regressions hide; the axe-0 record is
  // campaign-protected, so a new public page that is not gated here is a page that is not protected.
  { name: 'State of the network', path: '/state-of-the-network' },
  { name: 'Canonical properties', path: '/canonical-properties' },
  // HAUSSMANN P3.5 — the proposal surfaces. A new public page that is not gated here is a page that
  // is not protected, and both templates are table-dense.
  //
  // ⚠ SCOPE NOTE, so this addition is not credited with more than it does. The defect that prompted
  // it — an empty table header on /community/proposals/aep-1/ — was found by the T0 sweep
  // (`scripts/visual_capture.mjs --axe`, which runs axe with its DEFAULT ruleset) and is
  // `empty-table-header`, a **best-practice** rule. This gate filters to `wcag2a`/`wcag2aa`, so it
  // passed on the unfixed page and would pass again if the defect returned. Adding these routes locks
  // WCAG AA on them, which is worth doing; it does NOT close the class that was actually caught.
  // The instrument gap — the gate suite is blind to everything axe classes as best-practice — is
  // filed for P4.4, which owns gate hardening.
  { name: 'Proposal archive', path: '/community/proposals/' },
  { name: 'Proposal (constitution)', path: '/community/proposals/aep-1/' },
  { name: 'Proposal (draft)', path: '/community/proposals/aep-2/' },
];

// Dark is the default render; light is reached by seeding the theme preference before the page loads.
const modes = [
  { name: 'dark', seed: null as null | (() => void) },
  { name: 'light', seed: () => localStorage.setItem('theme', 'light') },
];

for (const mode of modes) {
  for (const { name, path } of pages) {
    test(`G4 A11y [${mode.name}]: ${name} (${path}) has zero WCAG AA violations`, async ({ page }) => {
      if (mode.seed) await page.addInitScript(mode.seed);
      await page.goto(path, { waitUntil: 'networkidle' });

      /* ⛩ HAUSSMANN P4.4a A1 / F-a — `best-practice` ADDED, and the row's cost estimate was wrong.
       *
       * This gate filtered to wcag2a/wcag2aa, so it was BLIND to everything axe classes as
       * best-practice. A real `empty-table-header` on /community/proposals/aep-1/ passed a fully
       * green 512-assertion suite and was caught only by the T0 sweep, which runs axe's DEFAULT
       * ruleset. P3.5 added those routes here — locking WCAG AA on them, and NOT closing the class.
       *
       * F-a predicted widening "will surface pre-existing violations, so it is a scoping decision,
       * not a one-line change." MEASURED 2026-08-24 before deciding: 23 pages × 2 themes = 46 runs,
       * **ZERO best-practice violations**. It was a one-line change, and the row's own caution is
       * what had kept it unmade for four missions. ⇒ Measure the cost before paying the caution.
       *
       * ⚠ THE ZERO IS CONTROLLED, because a tag that matches no rules produces the same zero as a
       * clean site — the exact vacuity this campaign keeps finding:
       *   A. 28 best-practice rules genuinely evaluated on / (16 passes, 12 inapplicable)
       *   B. a planted empty-table-header IS caught under this tag set
       *   C. that same planted defect is INVISIBLE to wcag2a/wcag2aa — F-a's premise, reproduced
       * Controls A–C are re-runnable from scripts/a11y_bestpractice_redtest.sh.
       */
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'best-practice'])
        .analyze();

      const violations = results.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        description: v.description,
        nodes: v.nodes.length,
      }));

      expect(
        violations,
        `A11y violations on ${name} [${mode.name}]:\n${JSON.stringify(violations, null, 2)}`,
      ).toHaveLength(0);
    });
  }
}
