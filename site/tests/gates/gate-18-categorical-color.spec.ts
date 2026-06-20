/**
 * Gate 18 — Categorical-colour count lint  (WEBSITE TOOLING-PROMOTION gate **G9**)
 *
 * Criterion: the /vaults/graph data-viz uses ≤ 2 accent HUES — it must never regress to the
 * "undecoded rainbow" (15 categorical class-fills) that SP-5/H-5 (D4 C3) collapsed under the
 * restraint doctrine (campaign doctrine #2: one disciplined accent). Class is now encoded as the
 * node LABEL + the on-page census, never as a wall of hue; the lines carry the relationships.
 *
 * Static lint of the Mermaid source (src/data/vaults_graph.mmd) — the palette source of truth that
 * graph.astro imports `?raw` and renders. No build / browser needed (Mermaid renders client-side, so
 * the .mmd source — not dist/ — is where the fills live authoritatively).
 *
 * METHOD: extract every `classDef … fill:#hex`, convert to HSL, treat near-grey/white/black
 * (saturation < SAT_MIN) as NEUTRAL (not a hue), bucket the remaining saturated fills into 15° hue
 * buckets, and assert the count of DISTINCT accent-hue buckets is ≤ MAX_ACCENT_HUES.
 *
 * Note: the campaign gate-number ("G9") ≠ this file's sequence number (18) — the existing
 * gate-9-responsive spec is unrelated. See TOOLING-PROMOTION.aDNA.md for the G-number ↔ file map.
 *
 * ESCAPE HATCH: if a third accent hue is ever deliberately introduced, raise MAX_ACCENT_HUES with a
 * dated rationale here AND in campaign doctrine — restraint is a constraint, not a default.
 */
import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const MMD = join(process.cwd(), 'src/data/vaults_graph.mmd');
const SAT_MIN = 0.18;        // below this saturation a fill is neutral (grey/white/black), not a hue
const HUE_BUCKET = 15;       // degrees per bucket — fills within one bucket are "the same hue"
const MAX_ACCENT_HUES = 2;   // doctrine #2 — one disciplined accent (+1 headroom)

function hexToHsl(hex: string): { h: number; s: number; l: number } {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map((x) => x + x).join('');
  const r = parseInt(c.slice(0, 2), 16) / 255;
  const g = parseInt(c.slice(2, 4), 16) / 255;
  const b = parseInt(c.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;
  let h = 0;
  let s = 0;
  if (d !== 0) {
    s = d / (1 - Math.abs(2 * l - 1));
    switch (max) {
      case r: h = ((g - b) / d) % 6; break;
      case g: h = (b - r) / d + 2; break;
      default: h = (r - g) / d + 4; break;
    }
    h *= 60;
    if (h < 0) h += 360;
  }
  return { h, s, l };
}

test('G9 categorical-colour: /vaults/graph uses ≤2 accent hues (no rainbow)', () => {
  const mmd = readFileSync(MMD, 'utf8');
  const fills = [...mmd.matchAll(/classDef\s+\w+\s+fill:(#[0-9a-fA-F]{3,6})/g)].map((m) => m[1]);
  expect(fills.length, 'no classDef fills found in vaults_graph.mmd — did the file move?').toBeGreaterThan(0);

  const accentBuckets = new Set<number>();
  const accents: string[] = [];
  for (const hex of fills) {
    const { h, s } = hexToHsl(hex);
    if (s >= SAT_MIN) {
      accentBuckets.add(Math.floor(h / HUE_BUCKET));
      accents.push(`${hex} (h=${Math.round(h)}° s=${s.toFixed(2)})`);
    }
  }
  expect(
    accentBuckets.size,
    `/vaults/graph uses ${accentBuckets.size} accent hue(s) (budget ${MAX_ACCENT_HUES}) — categorical rainbow regressed. Saturated fills:\n${accents.join('\n')}`,
  ).toBeLessThanOrEqual(MAX_ACCENT_HUES);
});
