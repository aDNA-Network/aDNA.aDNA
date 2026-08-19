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

import { excerpt } from '../utils/text';
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

/**
 * First sentence of a description, for the glossary summary preview.
 *
 * Fixes F11 — the glossary showed "AGENTS.md — AGENTS." and "README.md — README.", which read as
 * broken placeholders on an otherwise finished page. The previous rule ended the sentence at any
 * `.` that was not part of an ellipsis, and the dot in "AGENTS.md" qualifies. A third case was
 * quietly worse: the embedded-triad entry cut at the backtick in "a hidden `.agentic/`".
 *
 * The rule now matches how sentences actually end: a terminator followed by whitespace or the end
 * of the string. A dot glued to the next character is part of a token — a filename, a version, a
 * path — not a sentence boundary.
 *
 * The result is then passed through `excerpt()` rather than returned raw. Four entries previously
 * had no matchable sentence at all and fell through to a hard 80-character cut; they now resolve
 * to full sentences, some of them long enough to break a one-line preview. Composing the two
 * helpers is the consolidation `excerpt()`'s own docblock filed as a follow-up.
 */
export function firstSentence(text: string): string {
  const match = text.match(/^[\s\S]*?[.!?](?=\s|$)/);
  return excerpt(match ? match[0] : text, 160);
}
