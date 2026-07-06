/**
 * Glossary index page data — surfaced via site/src/pages/glossary/index.astro.
 *
 * Extracted at M5.4 D12 cycle 118 (page-scope category config + helper module
 * following cycle 113 home.ts / 114 compliance.ts / 115 enterprise.ts / 116 startup-first-hour.ts / 117 educators.ts + researchers.ts precedent).
 *
 * Entry data lives in src/content/docs/glossary-*.mdx (content collection); this module
 * holds only the page-render configuration (category grouping + preview-truncation helper).
 *
 * Edit category labels / order-range bins here; glossary/index.astro is the layout.
 */

export interface GlossaryCategoryConfig {
  label: string;
  orderMin: number;
  orderMax: number;
}

export const categoryConfig: GlossaryCategoryConfig[] = [
  { label: 'Core Architecture', orderMin: 1, orderMax: 10 },
  { label: 'Governance & Metadata', orderMin: 11, orderMax: 16 },
  { label: 'Operations', orderMin: 17, orderMax: 22 },
  { label: 'Knowledge & Coordination', orderMin: 23, orderMax: 25 },
];

/** Truncate the description to its first sentence for the summary preview. */
export function firstSentence(text: string): string {
  // First sentence: up to a . ! or ? that isn't part of an ellipsis ("..." / "…"),
  // so a "…"-truncated meta description doesn't resolve to a mid-word fragment.
  const match = text.match(/^[^.!?…]+[.!?](?!\.)/);
  if (match) return match[0];
  // No clean sentence terminator — cut at the last word boundary before the cap
  // so the preview never ends mid-word.
  const capped = text.slice(0, 80);
  const lastSpace = capped.lastIndexOf(' ');
  const clean = lastSpace > 0 ? capped.slice(0, lastSpace) : capped;
  return clean.replace(/[\s.…—–-]+$/, '') + '…';
}
