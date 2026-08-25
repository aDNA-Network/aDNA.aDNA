/**
 * gate-34 — glossary preview integrity (HAUSSMANN P2.3 O4, finding F11).
 *
 * The glossary index rendered "AGENTS.md — AGENTS." and "README.md — README.": the preview helper
 * ended the sentence at the first `.`, and the dot in a filename qualified. A third entry cut at
 * the backtick in "a hidden `.agentic/`". Each read as a broken placeholder on a page that is
 * otherwise finished, which is worse than a missing preview — it looks like nobody is maintaining
 * the site.
 *
 * The shape of the bug is what makes it worth a gate: it only appears when a description happens
 * to begin with a token containing a dot. Add one glossary term called "package.json" and it comes
 * straight back, with nothing failing. So the assertion is not "these two entries are fixed" — it
 * is that no preview is degenerate, and that no preview is a prefix of its own term.
 */
import { test, expect } from '@playwright/test';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const INDEX = join(process.cwd(), 'dist/glossary/index.html');

const strip = (s: string) => s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

interface Entry { term: string; preview: string }

function entries(): Entry[] {
  const html = readFileSync(INDEX, 'utf8');
  const out: Entry[] = [];
  for (const m of html.matchAll(/<summary[^>]*>([\s\S]*?)<\/summary>/g)) {
    const block = m[1];
    const term = strip(/<span class="glossary-term"[^>]*>([\s\S]*?)<\/span>/.exec(block)?.[1] ?? '');
    const preview = strip(/<span class="glossary-preview"[^>]*>([\s\S]*?)<\/span>/.exec(block)?.[1] ?? '');
    if (term) out.push({ term, preview });
  }
  return out;
}

test.describe('gate-34 glossary preview integrity', () => {
  test.beforeAll(() => {
    if (!existsSync(INDEX)) throw new Error('no dist/glossary/index.html — run `npx astro build`');
  });

  test('every term has a preview of real length', () => {
    const rows = entries();
    expect(rows.length, 'no glossary entries parsed — refusing to report green').toBeGreaterThan(20);

    // 25 chars is comfortably above the degenerate cases ("AGENTS.", "README.") and comfortably
    // below the shortest legitimate preview in the corpus.
    const stunted = rows.filter((r) => r.preview.length < 25).map((r) => `${r.term} — "${r.preview}"`);
    expect(
      stunted,
      `glossary previews that collapsed to a fragment:\n  ${stunted.join('\n  ')}`,
    ).toEqual([]);
  });

  test('no preview is merely a restatement of its own term', () => {
    // "AGENTS.md — AGENTS." is this shape: the preview says nothing the term did not already say.
    const echoes = entries()
      .filter((r) => {
        const t = r.term.toLowerCase().replace(/[^a-z0-9]/g, '');
        const p = r.preview.toLowerCase().replace(/[^a-z0-9]/g, '');
        return p.length > 0 && (p === t || (t.startsWith(p) && p.length < t.length + 4));
      })
      .map((r) => `${r.term} — "${r.preview}"`);
    expect(
      echoes,
      `previews that only echo their term:\n  ${echoes.join('\n  ')}`,
    ).toEqual([]);
  });

  test('no preview is cut inside a code span or bracket', () => {
    // The embedded-triad entry read: "...inside a hidden `." — the splitter cut between the
    // backtick and "agentic/". An unbalanced backtick or bracket is the durable signature of a
    // cut landing inside a token, and it does not depend on knowing which entries are affected.
    const unbalanced = entries()
      .filter((r) => {
        const ticks = (r.preview.match(/`/g) ?? []).length;
        const opens = (r.preview.match(/[([]/g) ?? []).length;
        const closes = (r.preview.match(/[)\]]/g) ?? []).length;
        return ticks % 2 !== 0 || opens !== closes;
      })
      .map((r) => `${r.term} — "${r.preview}"`);
    expect(
      unbalanced,
      `previews with an unclosed code span or bracket — the cut landed inside a token:\n  ${unbalanced.join('\n  ')}`,
    ).toEqual([]);
  });
});
