/**
 * Gate 25 — Token discipline  (Storyweave P5 M5.2 / B11)
 *
 * Criterion: no NEW hardcoded hex color may appear in a CSS `<style>` block (or a
 * non-token stylesheet) without being consciously tokenized or added to the dated
 * allowlist below. Colors rendered via CSS flow from `tokens.css` `--color-*`; JS
 * consumers that need literal hex at runtime (the Mermaid renderer) flow from
 * `src/styles/palette.ts`. This gate inventories every remaining hardcoded hex and
 * LOCKS it — the M5.2 finding was that the residual hex is all *deliberate* (terminal
 * chrome, macOS traffic-light dots, AA-tuned status/button colors, the always-dark
 * hero scrim, the B1 orphan), so the durable win is a non-regression fence, not a
 * blanket ban.
 *
 * SCOPE: `src/**` — every `.css` file except the token-definition files
 * (`tokens.css`, `branding.css`) and every `.astro` `<style>` block. Comments are
 * stripped before scanning. `.ts`/`.js` and `<script>`/frontmatter are NOT scanned
 * (palette.ts legitimately holds the JS-side hex mirror).
 *
 * TO ADD A COLOR: prefer a `--color-*` token (CSS) or `palette.ts` (JS). If a literal
 * is genuinely deliberate (a brand/OS constant, an AA-tuned one-off, a scrim that must
 * not theme-flip), add `{ hex, why }` under its file below with a dated rationale.
 */
import { test, expect } from '@playwright/test';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const SRC = join(process.cwd(), 'src');
const TOKEN_FILES = new Set(['styles/tokens.css', 'styles/branding.css']); // rel to src/

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}
const stripComments = (s: string) =>
  s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/<!--[\s\S]*?-->/g, '');
const HEX = /#[0-9a-fA-F]{3,8}\b/g;

// Allowlist — every deliberate hardcoded hex, keyed by src-relative path (lowercased
// hex). Each set of literals carries a one-line rationale. Storyweave P5 M5.2 / B11.
const ALLOW: Record<string, string[]> = {
  // The home "How it Works" demo-terminal chrome. #ff5f57/#febc2e/#28c840 are the
  // literal macOS traffic-light colors (iconic, not theme colors); the rest is
  // deliberate always-dark terminal chrome. Home-perf-sensitive — do not touch.
  'pages/index.astro': ['#13131f', '#1c1c2e', '#ff5f57', '#febc2e', '#28c840', '#aaa', '#c9c9df'],
  // Hero scrim + title glow: a deliberately always-dark scrim over the hero image
  // (must NOT theme-flip) + a fallback title color + cyan glow. The "scrim" target;
  // single-sourcing the canvas/scrim palette is a documented M5.2 residual.
  'components/sections/HomeHero.astro': ['#1a1b26', '#f7f7fb', '#7dcfff'],
  // Deliberate white SVG node fill.
  'components/sections/NetworkDiagram.astro': ['#ffffff'],
  // Dark-mode stability status colors (green/blue/orange/red), AA-tuned per badge bg.
  // Shares values with tutorial-meta difficulty colors but is semantically distinct;
  // dedup-to-token deferred (M5.2 residual).
  'pages/reference/[...slug].astro': ['#34c06e', '#5cb8e8', '#e89545', '#e87070'],
  // Dark-mode difficulty status colors (AA-tuned per badge bg).
  'styles/tutorial-meta.css': ['#34c06e', '#5cb8e8', '#e89545'],
  // btn-primary hover — deep purple, AA-tuned (mirrors the global .btn-primary fix;
  // --brand-primary is too light for white text in dark mode).
  'pages/404.astro': ['#7c5cc4'],
  // color-mix box-shadow fallback for --brand-primary.
  'pages/vaults/graph.astro': ['#7aa2f7'],
  // Shiki github-dark syntax-theme override (#6a737d comment color fails AA → #8b949e)
  // + AA-tuned btn hover + white. Tied to the specific highlight theme.
  'styles/global.css': ['#6a737d', '#8b949e', '#7c5cc4', '#ffffff'],
  // (org-context-graphs.astro allowlist retired with the page — Refit M3 / DP4, 2026-07-23.)
};

test('G25 token-discipline: no undocumented hardcoded hex in CSS', () => {
  const violations: string[] = [];
  for (const f of walk(SRC)) {
    const rel = f.slice(SRC.length + 1);
    if (TOKEN_FILES.has(rel)) continue;
    const raw = readFileSync(f, 'utf8');
    let css = '';
    if (f.endsWith('.css')) css = raw;
    else if (f.endsWith('.astro')) {
      css = [...raw.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((m) => m[1]).join('\n');
    } else continue;
    css = stripComments(css);
    const allowed = new Set((ALLOW[rel] ?? []).map((h) => h.toLowerCase()));
    for (const hit of new Set(css.match(HEX) ?? [])) {
      if (!allowed.has(hit.toLowerCase())) {
        violations.push(`${rel}: ${hit} — tokenize (--color-* / palette.ts) or allowlist with a rationale`);
      }
    }
  }
  expect(violations, `Undocumented hardcoded hex:\n${violations.join('\n')}`).toEqual([]);
});
