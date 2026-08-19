/**
 * Gate 14 — Single-source / no-drift lint  (WEBSITE TOOLING-PROMOTION gate **G5**)
 *
 * Criterion: the built output carries NO drifted repo/publisher literals — the
 * exact class that produced D1's C-1 (dead `aDNA-Network/aDNA.aDNA` proof-links)
 * and C-3 (`github.com/LatticeProtocol` JSON-LD publisher). Every repo URL and the
 * publisher entity must flow from the canonical source (`src/data/canonical.ts`),
 * so these literals can never reappear without this gate going red.
 *
 * Static scan of dist/ (assumes a fresh `npx astro build`). Pairs with G4
 * (gate-15, JSON-LD publisher canonical) + G6 (gate-15, proof-link integrity).
 *
 * ESCAPE HATCH: a genuinely new legacy reference (e.g. a "renamed from X" note)
 * that must show a forbidden token belongs in body prose, not a URL/publisher —
 * if one is ever legitimate, add it to ALLOW with a dated rationale below.
 */
import { test, expect } from '@playwright/test';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const DIST = join(process.cwd(), 'dist');

function htmlFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...htmlFiles(p));
    else if (entry.name.endsWith('.html')) out.push(p);
  }
  return out;
}

// Forbidden drift literals — the regression guards for C-1 + C-3.
const FORBIDDEN: { pattern: string; why: string }[] = [
  // HAUSSMANN P1.2, 2026-08-18 — rationale corrected, rule KEPT. This entry used to read "dead
  // dev-vault repo (404)". That premise is now false: the dev vault was made public and returns 200
  // (probed logged-out 2026-08-18). The rule survives on its other, still-valid ground — a reader
  // following a proof-link wants the clone-and-run image, not the docs vault this site is built
  // from. Left uncorrected, the stale "(404)" would have invited someone to delete a guard that is
  // still doing real work.
  { pattern: 'aDNA-Network/aDNA.aDNA', why: 'C-1 — proof-links must point at the public image aDNA-Network/aDNA, not the dev vault (the dev vault is public but is not the install target)' },
  { pattern: 'github.com/LatticeProtocol', why: 'C-3 — stale legacy-org publisher/repo; route through canonical.ts' },
  { pattern: 'LatticeProtocol/Agentic-DNA', why: 'C-3 — legacy branding.json github drift' },
];

// Dated allowlist. Add `{ file, pattern, rationale, date }` only for a deliberate,
// reviewed exception — the type now carries the rationale the comment always promised,
// so an exception cannot be added without saying why, in the file, next to the entry.
const ALLOW: { file: string; pattern: string; rationale: string; date: string }[] = [
  // HAUSSMANN P1.2 — the §7.1 clone-site defense needs to NAME the dev vault, because a reader
  // asking "is this repository really aDNA's?" is exactly who these two pages serve. The rule
  // above is about proof-link SEMANTICS (a proof-link should send you to the clone-and-run image,
  // not the docs vault), and that still holds on every other page. Here the repository is the
  // subject matter, not a proof-link. Probed logged-out 2026-08-18: HTTP 200, public.
  {
    file: 'canonical-properties/index.html',
    pattern: 'aDNA-Network/aDNA.aDNA',
    rationale:
      'The canonical-properties page lists every legitimate aDNA property so a reader can tell a real one from a clone. The public dev vault is one of them; omitting it would make the page\'s completeness claim false.',
    date: '2026-08-18',
  },
  {
    file: 'state-of-the-network/index.html',
    pattern: 'aDNA-Network/aDNA.aDNA',
    rationale:
      'The state-of-the-network "what runs" section lists the same probe-verified properties, each with the date it was last opened from outside.',
    date: '2026-08-18',
  },
];

/**
 * Scope refinement, not an exception (HAUSSMANN P2.3 O2).
 *
 * The C-1 rule is about proof-link SEMANTICS: a link offered as evidence must send the reader to
 * the clone-and-run image, because that is the install target. The provenance footer's "edit this
 * page" link is a different class of link — it is a contribution target, and the file it points at
 * exists ONLY in the dev vault. `site/src/content/docs/triad.mdx` is not in `aDNA-Network/aDNA`,
 * so pointing the edit link there to satisfy the literal scan would ship a link that 404s: the
 * gate would be green and the site would be lying, which is the exact trade this campaign refuses.
 *
 * Allowlisting instead would mean 113 file entries and would hollow the rule out. Removing the one
 * structurally-identified element from the scanned text leaves C-1 in full force on prose, proof
 * links, and JSON-LD across every page — including on the pages that carry a footer.
 */
const PROVENANCE_EDIT_LINK = /<a[^>]*class="[^"]*doc-provenance-edit[^"]*"[^>]*>[\s\S]*?<\/a>/g;
const scannable = (html: string) => html.replace(PROVENANCE_EDIT_LINK, '');

test('G5 single-source: no drifted repo/publisher literals in built output', () => {
  const files = htmlFiles(DIST);
  expect(files.length, 'dist/ has no HTML — run `npx astro build` first').toBeGreaterThan(100);

  const hits: string[] = [];
  for (const f of files) {
    const content = scannable(readFileSync(f, 'utf8'));
    const rel = f.slice(DIST.length + 1);
    for (const { pattern, why } of FORBIDDEN) {
      if (content.includes(pattern) && !ALLOW.some((a) => a.file === rel && a.pattern === pattern)) {
        hits.push(`${rel}: "${pattern}" — ${why}`);
      }
    }
  }
  expect(hits, `Drifted literals in built output (single-source violated):\n${hits.join('\n')}`).toEqual([]);
});

// Positive assertion: the canonical publisher actually reached the output (so the
// gate can't pass merely because JSON-LD vanished).
test('G5 single-source: canonical publisher "aDNA Network" present in output', () => {
  const files = htmlFiles(DIST);
  const withPublisher = files.filter((f) => readFileSync(f, 'utf8').includes('"name":"aDNA Network"'));
  expect(withPublisher.length, 'no page emitted the canonical publisher in JSON-LD').toBeGreaterThan(0);
});
