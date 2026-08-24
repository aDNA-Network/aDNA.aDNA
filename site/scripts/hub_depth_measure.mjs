#!/usr/bin/env node
/**
 * hub_depth_measure.mjs — the thin-hub measurement (HAUSSMANN P4.2 O3, AC5 + AC6).
 *
 * F13/F19: several section-index pages are "thin hubs" — a heading, a paragraph, and a grid of
 * links, with no sections of their own. AC6 requires AC5's treatment be verified by "the P2.6
 * measurement (h2 count + bodyLen per hub), re-run after the fix".
 *
 * ⚠ P2.6 RECORDED ITS FIGURES BUT NOT ITS METHOD. There is no committed instrument and no stated
 * definition of `bodyLen` anywhere in the campaign — exactly the defect O1 found in the 2026-08-19
 * html-validate artifact, whose count could not be re-derived because neither command nor config was
 * recorded. So this file DEFINES the measurement rather than pretending to recover it:
 *
 *   h2      = count of <h2> elements inside the page's <article class="doc-content"> (or <main>)
 *   bodyLen = length of that element's visible text, tags stripped, whitespace collapsed
 *
 * Chrome is excluded on purpose: header, sidebar nav, TOC and footer are identical on every hub, so
 * counting them would measure the template, not the page. That is also why these numbers are
 * COMPARABLE TO EACH OTHER AND TO FUTURE RUNS, but only approximately to P2.6's — its figures
 * (1,504 / 1,149 / 2,007 / 2,030) came from an unknown scope. Stated so nobody reads a delta against
 * them as precise.
 *
 * Usage:  node scripts/hub_depth_measure.mjs [--json]
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const DIST = join(process.cwd(), 'dist');

// The hub set, from F13/F19.
const HUBS = ['how', 'patterns', 'use-cases', 'reference/specification'];

/* THE BUDGET IS DERIVED FROM THE SITE'S OWN CONFORMANT HUBS, NOT CHOSEN.
 *
 * ⚠ The first draft of this file invented `h2 >= 2, bodyLen >= 1200` and graded against it, which is
 * circular: pick a number, then declare four pages fail it. F13 never stated a threshold — it named a
 * COUNTER-EXAMPLE, "`/learn` hub does the same job with a numbered path and a well-fitted banner."
 * So the exemplar set is the budget. Measured on the same build, same method:
 *
 *     /learn      h2=5  bodyLen= 1932     ← the floor of the conformant set
 *     /reference  h2=5  bodyLen= 2278
 *     /community  h2=6  bodyLen= 5234
 *     /glossary   h2=4  bodyLen= 6308
 *     /vaults     h2=5  bodyLen=12825
 *     ─────────────────────────────────
 *     /how        h2=0  bodyLen=  659     ← the thin set, cleanly separated
 *     /patterns   h2=0  bodyLen= 1507
 *     /use-cases  h2=1  bodyLen= 1530
 *     /reference/specification  h2=0  bodyLen=927
 *
 * The two groups do not overlap on either axis, so the floor of the conformant set is a real
 * boundary rather than a line drawn through a continuum. `COMPARATORS` is re-measured on every run,
 * so if the exemplars change the budget moves with them instead of going stale.
 */
const COMPARATORS = ['learn', 'reference', 'community', 'glossary', 'vaults'];
const BUDGET = { h2: 4, bodyLen: 1900 };

function extractContent(html) {
  const m =
    html.match(/<article[^>]*class="[^"]*doc-content[^"]*"[^>]*>([\s\S]*?)<\/article>/) ||
    html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
  return m ? m[1] : '';
}

function measure(route) {
  const file = join(DIST, route, 'index.html');
  if (!existsSync(file)) return { route, error: 'not built' };
  const content = extractContent(readFileSync(file, 'utf8'));
  if (!content) return { route, error: 'no doc-content/main container found — the template changed' };
  const text = content
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;|&#\d+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const h2 = (content.match(/<h2[\s>]/g) || []).length;
  return {
    route,
    h2,
    bodyLen: text.length,
    meetsBudget: h2 >= BUDGET.h2 && text.length >= BUDGET.bodyLen,
  };
}

const rows = HUBS.map(measure);
const comparators = COMPARATORS.map(measure).filter((r) => !r.error);

// Re-derive the floor from the exemplars every run, and say so when the hardcoded budget has drifted
// away from them — a budget that silently stops matching its own derivation is the stale-figure class
// this campaign keeps finding.
const derived = comparators.length
  ? { h2: Math.min(...comparators.map((c) => c.h2)), bodyLen: Math.min(...comparators.map((c) => c.bodyLen)) }
  : null;

if (process.argv.includes('--json')) {
  console.log(JSON.stringify({ budget: BUDGET, derived, comparators, rows }, null, 1));
} else {
  console.log(`thin-hub depth — budget: h2 >= ${BUDGET.h2}, bodyLen >= ${BUDGET.bodyLen} (content only, chrome excluded)`);
  if (derived) {
    console.log(`  derived from the conformant hubs (${COMPARATORS.map((c) => '/' + c).join(' ')}): h2 floor ${derived.h2}, bodyLen floor ${derived.bodyLen}`);
    if (derived.h2 < BUDGET.h2 || derived.bodyLen + 100 < BUDGET.bodyLen) {
      console.log(`  ⚠ the budget above is now STRICTER than its own derivation — re-read it before grading anything`);
    }
  }
  console.log();
  for (const r of rows) {
    if (r.error) {
      console.log(`  ERR   /${r.route.padEnd(26)} ${r.error}`);
      continue;
    }
    console.log(`  ${r.meetsBudget ? 'PASS' : 'THIN'}  /${r.route.padEnd(26)} h2=${String(r.h2).padStart(2)}  bodyLen=${String(r.bodyLen).padStart(5)}`);
  }
  const thin = rows.filter((r) => r.error || !r.meetsBudget);
  console.log(`\n  ${rows.length - thin.length}/${rows.length} hubs meet the section budget.`);
}
