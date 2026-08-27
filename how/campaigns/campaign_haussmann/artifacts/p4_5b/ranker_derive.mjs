#!/usr/bin/env node
/**
 * ranker_derive.mjs — P4.5b O3, V4.
 *
 * The cells are judgements and are typed by hand; every MEAN below is computed here and pasted
 * from this script's output, never typed. WebForge KW-14 — and P4.1's ranker made the same rule
 * pay: an average of 4.17 across three surfaces would have let a 4.03 surface hide behind a 4.37
 * one, so surfaces are scored SEPARATELY and never averaged together.
 *
 * Usage: node how/campaigns/campaign_haussmann/artifacts/p4_5b/ranker_derive.mjs
 */
const PERSONAS = ['Solo Dev', 'Educator', 'Enterprise', 'Researcher', 'Startup'];
const DIMS = ['Findability', 'Comprehension', 'Actionability', 'Trust', 'Relevance', 'Delight'];

// surface -> dimension -> [Solo Dev, Educator, Enterprise, Researcher, Startup]
const SCORES = {
  '/': {
    Findability:    [4, 4, 4, 4, 4],
    Comprehension:  [5, 5, 4, 4, 5],
    Actionability:  [5, 3, 4, 3, 5],
    Trust:          [5, 5, 5, 5, 5],
    Relevance:      [4, 4, 4, 3, 4],
    Delight:        [4, 4, 3, 3, 4],
  },
  '/learn/what-is-adna': {
    Findability:    [4, 4, 4, 4, 4],
    Comprehension:  [5, 5, 5, 5, 5],
    Actionability:  [4, 4, 4, 4, 4],
    Trust:          [5, 5, 4, 5, 4],
    Relevance:      [4, 5, 4, 4, 4],
    Delight:        [4, 4, 3, 3, 4],
  },
  '/community': {
    Findability:    [4, 4, 4, 4, 4],
    Comprehension:  [4, 5, 4, 4, 4],
    Actionability:  [4, 4, 4, 4, 4],
    Trust:          [5, 5, 5, 5, 5],
    Relevance:      [3, 4, 4, 4, 3],
    Delight:        [4, 4, 3, 3, 4],
  },
  '/commons': {
    Findability:    [4, 4, 4, 4, 4],
    Comprehension:  [4, 4, 4, 4, 4],
    Actionability:  [3, 3, 3, 3, 3],
    Trust:          [5, 5, 4, 5, 4],
    Relevance:      [3, 4, 3, 4, 3],
    Delight:        [4, 4, 3, 3, 4],
  },
  '/get-started': {
    Findability:    [5, 4, 4, 4, 5],
    Comprehension:  [5, 5, 4, 5, 5],
    Actionability:  [5, 5, 4, 4, 5],
    Trust:          [5, 5, 4, 5, 4],
    Relevance:      [5, 4, 4, 4, 5],
    Delight:        [4, 4, 3, 3, 4],
  },
};

const GATE = 4.0;
const mean = a => a.reduce((x, y) => x + y, 0) / a.length;
const r2 = n => Number(n.toFixed(2));
const r1 = n => Number(n.toFixed(1));

let allPass = true;
for (const [surface, dims] of Object.entries(SCORES)) {
  const dimMeans = DIMS.map(d => {
    const cells = dims[d];
    if (!cells || cells.length !== PERSONAS.length) {
      throw new Error(`${surface} · ${d}: expected ${PERSONAS.length} cells, got ${cells?.length}`);
    }
    if (cells.some(c => !Number.isInteger(c) || c < 1 || c > 5)) {
      throw new Error(`${surface} · ${d}: cells must be integers 1–5`);
    }
    return { d, m: r1(mean(cells)) };
  });
  const score = r2(mean(dimMeans.map(x => x.m)));
  const pass = score >= GATE;
  allPass = allPass && pass;
  console.log(`\n${surface}`);
  for (const { d, m } of dimMeans) console.log(`  ${d.padEnd(15)} ${m.toFixed(1)}`);
  console.log(`  ${'SURFACE'.padEnd(15)} ${score.toFixed(2)}  ${pass ? 'PASS' : 'FAIL'} (gate ${GATE.toFixed(1)})`);
}

// Deliberately NOT reported as a single figure — see the header. Printed only to show the spread,
// which is the thing an average would hide.
const scores = Object.entries(SCORES).map(([s, dims]) =>
  r2(mean(DIMS.map(d => r1(mean(dims[d]))))));
console.log(`\nspread: min ${Math.min(...scores).toFixed(2)} · max ${Math.max(...scores).toFixed(2)} ` +
  `· ${scores.filter(s => s >= GATE).length}/${scores.length} surfaces at or above ${GATE.toFixed(1)}`);
console.log(`verdict: ${allPass ? 'ALL SURFACES PASS' : 'AT LEAST ONE SURFACE BELOW GATE'}`);
process.exit(allPass ? 0 : 1);
