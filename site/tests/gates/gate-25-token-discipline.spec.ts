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

/**
 * G25b — Colour-function literals  (HAUSSMANN P4.1 O1 · ADR-059 (c) limb (i))
 *
 * G25 above matches `#rrggbb` only, so the `hsl()` form of a colour is invisible to it. That is not
 * hypothetical: `styles/tutorial-meta.css` carries three AA-tuned difficulty-badge colours whose
 * DARK-mode hex twins are allowlisted in G25 above, while their LIGHT-mode `hsl()` originals sat in
 * the same file unseen by any gate.
 *
 * This is the scoped adoption of WebForge's `conformance.py --strict-leak` (its KW-10 colour-function
 * rule), and the scoping is the ruling. Measured against this site, the full lint fires ~400 times:
 * 308 SVG `fill`/`stroke` attrs — mostly `fill="none"`, the rest illustration assets that ADR-053
 * just made a normative part of the visual voice — plus 64 `color-mix()` forms that are token-based
 * and which WebForge's own regex is deliberately anchored to skip. Adopting it wholesale would buy
 * ~400 allowlist rows to surface three real items. So:
 *
 *   ADOPTED     colour-function literals (`rgb()/rgba()/hsl()/hsla()` with a LITERAL first argument)
 *               in the same surfaces G25 already scans.
 *   NOT ADOPTED SVG markup attrs, inline `style=` attrs, named colours, primitive-ramp refs (we have
 *               no primitive ramps), and the byte-identity half of conformance.py — which is
 *               inapplicable by ruling, because ADR-059 (c) pins the EMISSION divergence and this
 *               site is deliberately not compiled from WebForge's DTCG source.
 *
 * The `[\d.+-]` anchor after the paren is what separates a literal from `hsl(var(--x) …)`; token-based
 * forms must keep passing, which the red-test proves in both directions.
 */
const COLORFN = /\b(?:rgba?|hsla?)\(\s*[\d.+-]/gi;

// Allowlist — colour-function literals kept on purpose, keyed by src-relative path with a rationale.
// Same contract as ALLOW above: prefer a token; allowlist only what is genuinely deliberate.
const ALLOW_COLORFN: Record<string, string[]> = {
  // ── Class 1: light-mode AA-tuned twins of hex already allowlisted in G25 above ──
  // The finding this gate was built for, and it turned out to be TWO files, not one. In both, the
  // DARK-mode value is hex and fenced by G25, while the LIGHT-mode value is the hsl() original and
  // was fenced by nothing. Half-guarded pairs: the gate that could see one half could not see the
  // other, so a light-mode regression here would have been silent.
  //
  // Three difficulty badges, darkened for AA on their tinted color-mix backgrounds.
  // (dark twins in G25: #34c06e / #5cb8e8 / #e89545)
  'styles/tutorial-meta.css': ['hsl(142 72% 24%)', 'hsl(217 91% 35%)', 'hsl(25 95% 35%)'],
  // Four reference-stability labels, same shape — found by this gate, not predicted before writing it.
  // (dark twins at L125-128, in G25: #34c06e / #5cb8e8 / #e89545 / #e87070)
  'pages/reference/[...slug].astro': [
    'hsl(142 72% 24%)', 'hsl(199 89% 32%)', 'hsl(38 92% 32%)', 'hsl(0 72% 35%)',
  ],

  // ── Class 2: translucent black/white veils — shadows, scrims, hairlines ──
  // Not brand colour and not tokenizable without encoding alpha per use-site. G25's own header
  // already names this class ("the always-dark hero scrim") as deliberate. Listed rather than
  // pattern-excluded so a NEW veil still fires and gets dispositioned.
  'components/sections/GlossaryTooltip.astro': ['rgba(0, 0, 0, 0.18)'],   // tooltip box-shadow
  'components/sections/HomeHero.astro': ['rgba(0, 0, 0, 0.55)', 'rgba(0, 0, 0, 0.5)'], // hero title shadow stack
  'components/sections/NetworkDiagram.astro': ['rgba(255, 255, 255, 0.82)'], // diagram label fill
  'pages/index.astro': ['rgba(255, 255, 255, 0.07)'],                     // hairline divider
  // NOTE on scope, verified at authoring: HomeHero's canvas palette (L458-539) holds ~18 further
  // rgba() literals and correctly does NOT fire — they live in <script>, and this gate scans only
  // <style> blocks and .css, exactly as G25 does. That is a deliberate scope, not an oversight:
  // the canvas palette is imperative drawing code, not a stylesheet.
};

test('G25b token-discipline: no undocumented colour-function literals in CSS', () => {
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
    const allowed = new Set((ALLOW_COLORFN[rel] ?? []).map((v) => v.toLowerCase().replace(/\s+/g, ' ')));
    // Re-read each match in full (the regex anchors on the opening paren; the value is what a
    // reader must disposition, and what an allowlist entry authorises).
    for (const m of css.matchAll(COLORFN)) {
      const start = m.index!;
      const close = css.indexOf(')', start);
      if (close === -1) continue;
      const value = css.slice(start, close + 1).replace(/\s+/g, ' ').trim();
      if (!allowed.has(value.toLowerCase())) {
        violations.push(`${rel}: ${value} — tokenize (--color-* / palette.ts) or allowlist with a rationale`);
      }
    }
  }
  expect(violations, `Undocumented colour-function literals:\n${violations.join('\n')}`).toEqual([]);
});
