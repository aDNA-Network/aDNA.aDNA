#!/usr/bin/env node
/**
 * component_token_census.mjs — HAUSSMANN P4.2 O2, AC3 + AC6.
 *
 * AC3 asked for "20 sampled components". AC6 required the sample frame be DECLARED AND DERIVED
 * before sampling, because a frame chosen after the fact lets the sample be drawn from components
 * already known to conform — self-certification by selection, the exact thing the census mechanic
 * exists to retire (finding F-8).
 *
 * ⛩ Operator ruled CENSUS, NOT SAMPLE (2026-08-24). The derived population is 30 — 28 components
 * plus 2 layouts — so a sample of 20 would have covered 67% of a frame small enough to audit whole.
 * Auditing all 30 costs marginally more and removes the selection question entirely rather than
 * answering it. This EXCEEDS AC3's wording; it is recorded as an over-delivery, not as a redefinition.
 *
 * WHAT IS MEASURED. The P4.1 token families, each checked only where a token genuinely exists as an
 * alternative to the literal:
 *   colour       → --color-*        (raw hex; gate-25's rule and allowlist, consumed not re-invented)
 *   type size    → --text-*         (raw font-size lengths)
 *   radius       → --radius-*       (raw border-radius lengths)
 *   shadow       → --shadow-*       (raw box-shadow values)
 *   font weight  → --font-weight-*  (raw numeric weights)
 *   spacing      → --space-*        (raw padding/margin/gap lengths at or above the 0.25rem scale floor)
 *
 * WHAT IS DELIBERATELY NOT COUNTED, and why — a census that cries wolf gets ignored, which is worse
 * than no census:
 *   - `0`, `auto`, `%`, `fr`, `ch`, `em`, `vw/vh`, and `calc()`/`clamp()`/`min()`/`max()` expressions
 *   - hairlines: any px value ≤ 2 (a 1px border is not a spacing decision)
 *   - anything inside a comment (stripped first, gate-25's idiom)
 *   - `<script>` blocks and frontmatter (palette.ts legitimately mirrors hex for the JS side)
 *   - shorthand `font:` and `border:` — the length inside them is not independently tokenizable here
 *
 * Findings are ADVISORY, not a gate. A literal surfaced here may be perfectly deliberate; the census
 * says "this is a decision someone made", not "this is wrong". Gate-25 is the fence that actually
 * fails a build, and it fences colour only.
 *
 * Usage:  node scripts/component_token_census.mjs [--json]
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const SITE = process.cwd();
const SRC = join(SITE, 'src');

/* ── The frame, DERIVED ────────────────────────────────────────────────────────────────────────
   Every `.astro` file under components/ and layouts/, walked from disk at run time. Nothing is
   listed by hand, so a component added tomorrow is in the frame tomorrow. */
function walkAstro(dir) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...walkAstro(p));
    else if (e.name.endsWith('.astro')) out.push(p);
  }
  return out;
}
const FRAME = [...walkAstro(join(SRC, 'components')), ...walkAstro(join(SRC, 'layouts'))].sort();

/* ── gate-25's allowlist, consumed rather than duplicated ──────────────────────────────────────
   Parsed out of the gate itself so the census cannot drift from the fence. If the parse ever fails
   it throws instead of silently treating the allowlist as empty and reporting phantom findings —
   an empty allowlist would make every deliberate literal look like a defect. */
function gate25Allowlist() {
  const spec = readFileSync(join(SITE, 'tests/gates/gate-25-token-discipline.spec.ts'), 'utf8');
  const block = spec.match(/const ALLOW: Record<string, string\[\]> = \{([\s\S]*?)\n\};/);
  if (!block) throw new Error('gate-25 ALLOW block not found — census aborted rather than run blind');
  const allow = {};
  for (const m of block[1].matchAll(/^\s*'([^']+)':\s*\[([^\]]*)\]/gm)) {
    allow[m[1]] = [...m[2].matchAll(/'([^']+)'/g)].map((x) => x[1].toLowerCase());
  }
  if (Object.keys(allow).length === 0) throw new Error('gate-25 ALLOW parsed empty — census aborted');
  return allow;
}
const ALLOW = gate25Allowlist();

/* ── Census exclusions — DECLARED, not silently dropped ────────────────────────────────────────
   A literal that a token could not have supplied is not a finding, but deleting it from the output
   would make the census unfalsifiable: a reader could not tell an exclusion from an oversight. Each
   entry states its reason and is reported in its own bucket, gate-25's allowlist idiom applied to
   the families gate-25 does not cover.

   ⚠ This map exists because the census's FIRST RUN reported one. It flagged six raw `font-size`
   declarations in NetworkDiagram as type-token drift; they are inside `<svg viewBox="0 0 640 384">`
   and `viewBox="0 0 340 440"`, styling `<text>` nodes in SVG USER UNITS. A rem token there would
   scale with the root font size while the coordinate space did not, breaking the diagram's internal
   proportions at the first browser-zoom change. A control that fires is a question, not a verdict. */
const EXCLUSIONS = {
  'components/sections/NetworkDiagram.astro': {
    type: 'SVG user units inside viewBox coordinate spaces (640×384 landscape, 340×440 portrait), not layout px. A rem-based --text-* token would scale independently of the coordinate space and break the diagram proportions.',
  },
  'components/sections/GlossaryTooltip.astro': {
    shadow:
      'A floating tooltip needs more separation from the page than any card does, and no --shadow-* token matches: the literal is `0 6px 16px / 0.18`, while md is `0 4px 6px / 0.07` and lg is `0 10px 15px / 0.1`. Substituting lg would be a VISIBLE elevation change made to satisfy a lint — the O1 `role="list"` ruling, same shape: the question is whether anything is lost, and here rendering would be. If a --shadow-overlay token is ever added, this becomes a finding again.',
  },
};

/* ── Extraction ────────────────────────────────────────────────────────────────────────────────*/
const stripComments = (s) => s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/<!--[\s\S]*?-->/g, '');

function styleBlocks(src) {
  return [...src.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((m) => m[1]).join('\n');
}

/** A length literal that a spacing / type / radius token could have supplied. */
function isTokenizableLength(v) {
  const t = v.trim();
  if (!t || t === '0' || t === 'auto' || t === 'inherit' || t === 'initial') return false;
  if (/var\(|calc\(|clamp\(|min\(|max\(|env\(/.test(t)) return false;
  if (/%|fr\b|ch\b|em\b|vw\b|vh\b|vmin\b|vmax\b/.test(t)) return false;
  const px = t.match(/^-?([\d.]+)px$/);
  if (px) return Number.parseFloat(px[1]) > 2; // hairlines are not spacing decisions
  return /^-?[\d.]+rem$/.test(t);
}

const SPACING_PROPS = /^(padding|margin|gap|row-gap|column-gap)(-(top|right|bottom|left|inline|block))?$/;

function auditFile(path) {
  const rel = relative(SRC, path);
  const css = stripComments(styleBlocks(readFileSync(path, 'utf8')));
  const findings = [];

  // colour — gate-25's rule, minus gate-25's allowlist for this file
  const allowed = new Set(ALLOW[rel] || []);
  for (const m of css.matchAll(/#[0-9a-fA-F]{3,8}\b/g)) {
    if (!allowed.has(m[0].toLowerCase())) findings.push({ family: 'colour', value: m[0] });
  }

  // declarations
  for (const m of css.matchAll(/([a-z-]+)\s*:\s*([^;{}]+)[;}]/g)) {
    const prop = m[1].trim();
    const val = m[2].trim();
    if (/var\(/.test(val)) continue;

    if (prop === 'font-size' && isTokenizableLength(val)) findings.push({ family: 'type', value: `${prop}: ${val}` });
    else if (prop === 'border-radius' && isTokenizableLength(val)) findings.push({ family: 'radius', value: `${prop}: ${val}` });
    else if (prop === 'box-shadow' && val !== 'none') findings.push({ family: 'shadow', value: `${prop}: ${val.slice(0, 40)}` });
    else if (prop === 'font-weight' && /^\d{3}$/.test(val)) findings.push({ family: 'weight', value: `${prop}: ${val}` });
    else if (SPACING_PROPS.test(prop)) {
      for (const part of val.split(/\s+/)) {
        if (isTokenizableLength(part)) findings.push({ family: 'spacing', value: `${prop}: ${part}` });
      }
    }
  }
  const excluded = EXCLUSIONS[rel] || {};
  return {
    file: rel,
    hasStyle: css.trim().length > 0,
    findings: findings.filter((f) => !excluded[f.family]),
    excluded: findings
      .filter((f) => excluded[f.family])
      .map((f) => ({ ...f, reason: excluded[f.family] })),
  };
}

/* ── Run ───────────────────────────────────────────────────────────────────────────────────────*/
const results = FRAME.map(auditFile);
const totals = {};
for (const r of results) for (const f of r.findings) totals[f.family] = (totals[f.family] || 0) + 1;

if (process.argv.includes('--json')) {
  console.log(JSON.stringify({ frameSize: FRAME.length, results, totals }, null, 1));
} else {
  console.log(`component token census — frame ${FRAME.length} (derived: src/components/**/*.astro + src/layouts/**/*.astro)\n`);
  const clean = results.filter((r) => r.findings.length === 0);
  const dirty = results.filter((r) => r.findings.length > 0);
  for (const r of dirty.sort((a, b) => b.findings.length - a.findings.length)) {
    const byFam = {};
    for (const f of r.findings) (byFam[f.family] ||= []).push(f.value);
    console.log(`  ${String(r.findings.length).padStart(3)}  ${r.file}`);
    for (const [fam, vals] of Object.entries(byFam)) {
      const uniq = [...new Set(vals)];
      console.log(`         ${fam}: ${uniq.slice(0, 6).join(' · ')}${uniq.length > 6 ? ` · +${uniq.length - 6} more` : ''}`);
    }
  }
  const withExcl = results.filter((r) => r.excluded.length > 0);
  if (withExcl.length) {
    console.log('\n  declared exclusions (reported, not counted — see EXCLUSIONS in this file):');
    for (const r of withExcl) {
      const fams = [...new Set(r.excluded.map((e) => e.family))];
      console.log(`    ${r.excluded.length}  ${r.file}  [${fams.join(', ')}]`);
      console.log(`         ${r.excluded[0].reason}`);
    }
  }
  console.log(`\n  conformant (no literal where a token exists): ${clean.length}/${FRAME.length}`);
  console.log(`  no <style> block at all: ${results.filter((r) => !r.hasStyle).length}`);
  console.log(`  totals by family: ${Object.entries(totals).map(([k, v]) => `${k} ${v}`).join(' · ') || 'none'}`);
}
