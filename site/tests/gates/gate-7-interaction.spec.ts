/**
 * Gate 7: Interaction Depth (D8)
 * Established cycle 71 (2026-04-24) as regression fence before implementing D8 features.
 * Tighten constants each cycle as placeholders are removed and diagrams/CTAs are added.
 *
 * Constants to update per cycle:
 *   MAX_MEDIA_PLACEHOLDERS   — decrease as placeholders are replaced (target: 0 by cycle 73)
 *   MIN_CONCEPT_DIAGRAM_PAGES — increase as diagrams are added (target: 12 by cycle 75)
 *   MIN_TUTORIAL_COPY_BLOCKS  — increase after cycle 74 when copy buttons are wired to all pre elements
 *   MIN_TRY_CTA_PAGES         — increase after cycle 76 when TryInClaudeCode CTAs are added
 */
import { test, expect } from '@playwright/test';

// --- Cycle 74 baselines (copy buttons on all tutorial pre elements via DocumentationLayout script) ---
const MAX_MEDIA_PLACEHOLDERS = 0;      // all placeholders replaced with live step-demo terminals
const MIN_CONCEPT_DIAGRAM_PAGES = 0;   // no diagrams yet — will increase at cycle 75
const MIN_TUTORIAL_COPY_BLOCKS = 6;    // cycle 74: DocumentationLayout script wraps all pre elements — all 8 tutorials have code blocks
const MIN_TRY_CTA_PAGES = 0;          // no CTAs yet — will increase at cycle 76

const CONCEPT_PAGES = [
  '/learn/concepts/triad',
  '/learn/concepts/ontology',
  '/learn/concepts/governance-files',
  '/learn/concepts/token-selection',
  '/learn/concepts/convergence',
  '/learn/concepts/context-optimization',
  '/learn/concepts/lattice-composition',
  '/learn/concepts/fair-metadata',
  '/learn/concepts/open-standard',
  '/learn/concepts/agentic-literacy',
  '/learn/concepts/context-commons',
  '/learn/concepts/knowledge-graph',
];

const TUTORIAL_PAGES = [
  '/learn/tutorials/first-claude-md',
  '/learn/tutorials/navigate-a-vault',
  '/learn/tutorials/write-a-context-file',
  '/learn/tutorials/design-a-mission',
  '/learn/tutorials/run-a-campaign',
  '/learn/tutorials/build-a-lattice',
  '/learn/tutorials/extend-the-ontology',
  '/learn/tutorials/federate-a-vault',
];

// --- Media placeholder regression fence ---
test('G7 Interaction: homepage has ≤ MAX_MEDIA_PLACEHOLDERS placeholder elements', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const count = await page.evaluate(() =>
    document.querySelectorAll('[data-media]').length
  );

  expect(
    count,
    `Found ${count} media placeholder(s) — must be ≤ ${MAX_MEDIA_PLACEHOLDERS}. ` +
    `Remove placeholders before pushing. Update MAX_MEDIA_PLACEHOLDERS after each cycle.`
  ).toBeLessThanOrEqual(MAX_MEDIA_PLACEHOLDERS);
});

test('G7 Interaction: site-wide placeholder count ≤ MAX_MEDIA_PLACEHOLDERS', async ({ page }) => {
  // Check a representative set of content pages for stray placeholders
  const contentPages = [
    '/',
    '/learn/concepts/triad',
    '/learn/tutorials/first-claude-md',
    '/use-cases/solo-developer',
    '/adopters/solo-developer',
  ];

  let total = 0;
  for (const path of contentPages) {
    await page.goto(path, { waitUntil: 'networkidle' });
    const count = await page.evaluate(() =>
      document.querySelectorAll('[data-media], .media-placeholder').length
    );
    total += count;
  }

  expect(
    total,
    `Total media placeholders across sampled pages: ${total}. Must be ≤ ${MAX_MEDIA_PLACEHOLDERS}. ` +
    `Lower this gate as placeholders are replaced each cycle.`
  ).toBeLessThanOrEqual(MAX_MEDIA_PLACEHOLDERS);
});

// --- Concept diagram lower-bound (tighten at cycle 75) ---
test(`G7 Interaction: ≥ ${MIN_CONCEPT_DIAGRAM_PAGES} concept pages have a Mermaid diagram`, async ({ page }) => {
  let pagesWithDiagram = 0;

  for (const path of CONCEPT_PAGES) {
    await page.goto(path, { waitUntil: 'networkidle' });
    const hasDiagram = await page.evaluate(() => {
      // MermaidDiagram renders with .mermaid-container; after render the SVG replaces data-chart
      return (
        document.querySelector('.mermaid-container') !== null ||
        document.querySelector('.mermaid-figure') !== null
      );
    });
    if (hasDiagram) pagesWithDiagram++;
  }

  expect(
    pagesWithDiagram,
    `Only ${pagesWithDiagram} of ${CONCEPT_PAGES.length} concept pages have a diagram. ` +
    `Must be ≥ ${MIN_CONCEPT_DIAGRAM_PAGES}. Raise MIN_CONCEPT_DIAGRAM_PAGES after cycle 75.`
  ).toBeGreaterThanOrEqual(MIN_CONCEPT_DIAGRAM_PAGES);
});

// --- Tutorial copy-button lower-bound (tighten at cycle 74) ---
test(`G7 Interaction: ≥ ${MIN_TUTORIAL_COPY_BLOCKS} tutorial pages have copy buttons on code blocks`, async ({ page }) => {
  let pagesWithCopy = 0;

  for (const path of TUTORIAL_PAGES) {
    await page.goto(path, { waitUntil: 'networkidle' });
    const hasCopy = await page.evaluate(() => {
      // After cycle 74, all pre elements in .doc-content get a copy button via DocumentationLayout script
      const preTags = document.querySelectorAll('.doc-content pre');
      if (preTags.length === 0) return false; // page has no code blocks — skip
      return (
        document.querySelector('.doc-content .copy-btn') !== null ||
        document.querySelector('.doc-content [data-copy]') !== null ||
        document.querySelector('.doc-content .code-block') !== null
      );
    });
    if (hasCopy) pagesWithCopy++;
  }

  expect(
    pagesWithCopy,
    `${pagesWithCopy} tutorial pages have copy buttons. ` +
    `Must be ≥ ${MIN_TUTORIAL_COPY_BLOCKS}. Raise MIN_TUTORIAL_COPY_BLOCKS after cycle 74.`
  ).toBeGreaterThanOrEqual(MIN_TUTORIAL_COPY_BLOCKS);
});

// --- "Try this in Claude Code" CTA lower-bound (tighten at cycle 76) ---
test(`G7 Interaction: ≥ ${MIN_TRY_CTA_PAGES} tutorial pages have a "Try in Claude Code" CTA`, async ({ page }) => {
  let pagesWithCTA = 0;

  for (const path of TUTORIAL_PAGES) {
    await page.goto(path, { waitUntil: 'networkidle' });
    const hasCTA = await page.evaluate(() => {
      return (
        document.querySelector('.try-claude-cta') !== null ||
        document.querySelector('[data-cta="try-claude"]') !== null ||
        document.querySelector('.try-in-claude') !== null
      );
    });
    if (hasCTA) pagesWithCTA++;
  }

  expect(
    pagesWithCTA,
    `${pagesWithCTA} tutorial pages have a Try-in-Claude-Code CTA. ` +
    `Must be ≥ ${MIN_TRY_CTA_PAGES}. Raise MIN_TRY_CTA_PAGES after cycle 76.`
  ).toBeGreaterThanOrEqual(MIN_TRY_CTA_PAGES);
});
