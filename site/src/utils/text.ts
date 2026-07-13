/**
 * Shared text helpers for card previews + collection index summaries.
 *
 * `excerpt()` closes the excerpt-truncation defect (Storyweave P5 M5.2 / B9):
 * frontmatter `description` fields were hard-cut to ~140 chars + an ASCII "..."
 * and shown verbatim on `CardGrid` cards. It is WORD-BOUNDARY-ONLY and idempotent
 * on already-clean text — a clean, in-budget description is returned unchanged
 * (so cards that render fine today are byte-identical), and only a genuinely
 * over-length or ASCII-"..."-truncated source is cleaned: trailing "..." is
 * stripped, the text is cut at the last word boundary under `maxLen`, and a real
 * Unicode ellipsis (…) is appended — NEVER mid-word, NEVER an ASCII "...".
 *
 * It deliberately does NOT split on the first sentence terminator (the glossary
 * `firstSentence()` approach), because collection descriptions contain internal
 * dots — "AGENTS.md", "e.g.", "v2.5", "Python 3.8+" — that a sentence splitter
 * would wrongly cut at. `firstSentence()` in glossary.ts stays as-is (glossary
 * index only); consolidating the two is a tracked follow-up.
 */
export function excerpt(text: string | null | undefined, maxLen = 160): string {
  const raw = (text ?? '').trim();
  if (!raw) return '';
  const wasTruncated = /\.{3,}$/.test(raw); // source hard-cut with an ASCII "..."
  const s = raw.replace(/\.{3,}$/, '').trim();
  // Clean + in-budget → already fine, return unchanged (zero rendered diff).
  if (s.length <= maxLen && !wasTruncated) return s;
  // Otherwise cut at the last word boundary under the cap, trim trailing
  // punctuation/whitespace, and append a real ellipsis.
  const capped = s.slice(0, maxLen);
  const lastSpace = capped.lastIndexOf(' ');
  const clean = (lastSpace > 0 ? capped.slice(0, lastSpace) : capped).replace(/[\s.,;:—–-]+$/, '');
  return clean + '…';
}
