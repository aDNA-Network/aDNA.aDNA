#!/usr/bin/env node
/**
 * doctrine_layer_measure.mjs — the D1/D2 doctrine-layer measurement (HAUSSMANN GR-4 O1, AC-1 + AC-2).
 *
 * GR-4 Lane D publishes two stories that had no home on the site: **model routing** (D1) and the
 * **per-mission token-budget doctrine** (D2). This file measures whether they are there, and whether
 * D2 is a doctrine layer rather than a passing mention.
 *
 * ⛩ TWO SURFACES, AND THEY ARE TWO DIFFERENT CLAIMS (convention 18 — state what an instrument runs
 * against, and whether that is the surface the claim is about):
 *
 *   SURFACE A — AUTHORED SOURCE (`src/**`, `src/data/tour/**` EXCLUDED BY NAME)
 *     AC-1's verb is "is published in AUTHORED site content". That is a claim about what this repo
 *     authors, so it is measured on source.
 *
 *     ⚠ THE EXCLUSION IS THE CRITERION, NOT A DETAIL. Measured 2026-09-02, before any of this
 *     shipped, the ONLY model-routing occurrence site-wide was a skills-table row inside
 *     `src/data/tour/standard-governance.txt` — the BYTE-VENDORED `.adna/CLAUDE.md`, published at
 *     /get-started/what-your-agent-reads/ with its sha256 and an explicit invitation to diff it. So
 *     a naive site-wide grep for "model routing" WAS ALREADY GREEN, against zero work, and would
 *     have been satisfied by building nothing. The file must not be edited either (Standing Rule 1
 *     forbids modifying `.adna/`, and editing the published copy would trade a copy defect for a
 *     trust defect on the one surface built to be checked).
 *
 *     ⇒ the exclusion is ASSERTED, not assumed — gate-48's ratified discipline, "the exclusions are
 *     part of the claim", with the arithmetic pinned the way G48d pins its own. `excludedMatching`
 *     is the load-bearing number: it proves the exclusion is still DOING something. If it ever
 *     reaches 0 the vendored file stopped carrying the term, and the exclusion has quietly become
 *     decorative — which the gate reports rather than silently passing.
 *
 *   SURFACE B — THE RENDERED `.md` TWINS (`dist/**.md`)
 *     AC-2's verb is "meets a substance floor derived from the existing doctrine sections on those
 *     same pages". That is a claim about what a READER ENCOUNTERS, and it is a COMPARISON — the new
 *     section against its own siblings. Both halves are therefore measured by ONE instrument on ONE
 *     surface. A floor taken from source and a reading taken from the twins would be two instruments
 *     sharing one number, which is the defect B2a already paid for once.
 *
 * ⚠ THE PARSER IS FENCE-AWARE, AND THAT IS LOAD-BEARING RATHER THAN TIDY. The tutorial page teaches
 * mission-file authoring by SHOWING a mission file, so its fenced examples contain real `##` and
 * `###` lines — `## Context Dependencies`, `# Mission M04 — Pattern Library`, `## Quality Gates`.
 * Those survive into the twin verbatim. A naive line-anchored heading split would open a bogus
 * section inside Step 4's example, truncate Step 4's body at the fence, and hand the floor a set of
 * comparators that do not correspond to any section a reader sees. Verified at the object before
 * this parser was written, not after it produced a confusing number.
 *
 * THE FLOOR IS DERIVED, NEVER TYPED (B0: a number written by feel is a formality wearing a pin's
 * clothing). The comparator sections are re-measured on every run and the budget is the floor of
 * that conformant set, so if the exemplars change the budget moves with them instead of going stale.
 * `derivationHolds` is false when the exemplars have thinned below the pinned budget — the same
 * condition gate-44's G44c asserts, for the same reason.
 *
 * Usage:  node scripts/doctrine_layer_measure.mjs [--json]
 *         (from site/, after `npx astro build` — never `npm run build`, convention 6)
 */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const ROOT = process.cwd();
const SRC = join(ROOT, 'src');
const DIST = join(ROOT, 'dist');

/* ── SURFACE A ─────────────────────────────────────────────────────────────────────────────── */

/** Excluded BY NAME, repo-relative. Asserted by the gate, never assumed. */
export const EXCLUDED_DIRS = ['src/data/tour'];

/** Extensions that can carry authored copy. A frame, so the walk is auditable. */
const SRC_EXTS = ['.astro', '.mdx', '.md', '.ts', '.tsx', '.js', '.mjs', '.json', '.txt'];

/** The two stories, as data so a red-test can mutate one without touching the other. */
export const TERMS = {
  d1: {
    label: 'model routing',
    re: /executor_tier|model[-\s]tier(?:ed|s)?|model routing/i,
  },
  d2: {
    label: 'per-mission token budget',
    re: /token_budget/i,
  },
};

/** AC-2 names D2's homes. Named here so "published on its named homes" is checkable. */
export const D2_HOMES = [
  'src/content/docs/mission-decomposition.mdx',
  'src/content/guides/design-a-mission.mdx',
];

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const abs = join(dir, name);
    if (statSync(abs).isDirectory()) walk(abs, out);
    else if (SRC_EXTS.some((e) => name.endsWith(e))) out.push(abs);
  }
  return out;
}

function scanSource() {
  if (!existsSync(SRC)) return { error: 'no src/ — wrong cwd' };
  const all = walk(SRC).map((f) => relative(ROOT, f).split(sep).join('/'));
  const isExcluded = (rel) => EXCLUDED_DIRS.some((d) => rel === d || rel.startsWith(`${d}/`));
  const excluded = all.filter(isExcluded);
  const kept = all.filter((f) => !isExcluded(f));

  const hit = (files, re) => files.filter((f) => re.test(readFileSync(join(ROOT, f), 'utf8')));

  const out = { excludedDirs: [...EXCLUDED_DIRS], scanned: all.length, kept: kept.length, excluded: excluded.length, terms: {} };
  for (const [key, t] of Object.entries(TERMS)) {
    out.terms[key] = {
      label: t.label,
      authored: hit(kept, t.re),
      /* The number that proves the exclusion is load-bearing rather than decorative. */
      excludedMatching: hit(excluded, t.re),
    };
  }
  out.d2Homes = D2_HOMES.map((h) => ({ file: h, present: kept.includes(h) && TERMS.d2.re.test(readFileSync(join(ROOT, h), 'utf8')) }));
  return out;
}

/* ── SURFACE B ─────────────────────────────────────────────────────────────────────────────── */

/**
 * The graded section and its comparators, per page. `level` is the heading depth the page's own
 * doctrine sections sit at: the pattern page uses `##`; the tutorial's steps are `###` under one
 * `## Steps`, so grading at `##` there would compare a step against the whole tutorial.
 */
export const PAGES = [
  {
    twin: 'dist/patterns/mission-decomposition.md',
    route: '/patterns/mission-decomposition',
    level: 2,
    graded: 'Budgeting and Routing a Mission',
    /* Every other `##` on the page EXCEPT `Related`, which is a link list rather than a doctrine
     * section — declared here with its reason, so the exclusion is part of the claim. */
    excludeFromComparators: ['Related'],
  },
  {
    twin: 'dist/learn/tutorials/design-a-mission.md',
    route: '/learn/tutorials/design-a-mission',
    level: 3,
    graded: 'Step 4b: Declare the Model Tier',
    excludeFromComparators: [],
  },
  /* O3 · D3 — the local-models story. The page's own bands are `##`, so `level: 2` compares a band
   * against its sibling bands. NOTHING is excluded from the comparator set here: unlike the pattern
   * page, `/network` has no link-list `##` masquerading as a section, and an empty exclusion list
   * asserted is worth more than one assumed (G54b's discipline, one level down). */
  {
    twin: 'dist/network.md',
    route: '/network',
    level: 2,
    graded: 'Running a model on your own machine',
    excludeFromComparators: [],
  },
];

/** Fence-aware split into `{ heading, body }` at exactly `level`. See the header note. */
function sections(md, level) {
  const marker = '#'.repeat(level) + ' ';
  const out = [];
  let cur = null;
  let inFence = false;
  for (const line of md.split('\n')) {
    if (/^\s*```/.test(line)) inFence = !inFence;
    if (!inFence && line.startsWith(marker)) {
      if (cur) out.push(cur);
      cur = { heading: line.slice(marker.length).trim(), lines: [] };
      continue;
    }
    /* A heading ABOVE this level closes the current section; one below is part of its body. */
    if (!inFence && cur && /^#{1,6} /.test(line) && (line.match(/^#+/)[0].length < level)) {
      out.push(cur);
      cur = null;
      continue;
    }
    if (cur) cur.lines.push(line);
  }
  if (cur) out.push(cur);
  return out;
}

/**
 * ONE GATED AXIS — `bodyLen` — plus two reported ones. This is not the first draft, and the reason
 * it changed is worth more than the number.
 *
 * ⭐ THE FIRST DRAFT GATED ON `proseLen` AND `elements` TOGETHER, AND THE MEASUREMENT FALSIFIED IT
 * BEFORE IT GRADED ANYTHING. Across the comparator set the two axes are ANTI-CORRELATED: a section
 * that argues in prose carries almost no structure (`Anti-Pattern` 726/0, `Problem` 320/0, `Step 1`
 * 358/0) and a section that is mostly structure carries almost no prose (`Step 5` 41/1 — one large
 * fenced template; `Step 6` 190/8; `Step 2` 177/5). A conjunction over axes that legitimately trade
 * off would have failed genuinely conformant siblings, and the independent floor of each axis
 * (proseLen 41, elements 0) grades nothing at all. ⇒ two axes are correct for `hub_depth_measure`,
 * where a thin hub is thin on BOTH; they are wrong here.
 *
 * What AC-2 actually defends against is D2 being satisfied by **a passing mention** — one sentence
 * in a changelog or a glossary stub. A mention is short on TOTAL SUBSTANCE however it chooses to
 * express itself. So the gated axis is the whole section body, tables and fenced blocks included:
 * it does not care whether a doctrine section argues or tabulates, and it separates both from a
 * mention. `proseLen` and `elements` are still measured and reported, because they are what makes
 * the anti-correlation visible to whoever reads this next.
 */
function measureSection(sec) {
  const body = sec.lines.join('\n');
  const fences = (body.match(/^\s*```/gm) || []).length / 2;
  const noFences = body.replace(/```[\s\S]*?```/g, '');
  const bodyLen = body
    .replace(/`{1,3}/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_>#|]/g, ' ')
    .replace(/^\s*[-:]{3,}\s*$/gm, ' ')
    .replace(/\s+/g, ' ')
    .trim().length;
  const tableRows = (noFences.match(/^\s*\|.*\|\s*$/gm) || []).filter((r) => !/^\s*\|[\s:|-]+\|\s*$/.test(r)).length;
  const listItems = (noFences.match(/^\s*(?:[-*]|\d+\.)\s+/gm) || []).length;
  const subHeads = (noFences.match(/^#{1,6} /gm) || []).length;
  const prose = noFences
    .replace(/^\s*\|.*\|\s*$/gm, '')
    .replace(/`[^`]*`/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_>#]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  /* `prose` is CARRIED, not just counted. O3's framing limbs (G54l/G54m) probe the graded section's
   * words, and re-splitting the twin inside the gate to get them would be a SECOND splitter reading
   * the same file — two instruments sharing one number, the defect this file's own header refuses at
   * the surface level. One split, one section, both the length and the words it was measured from. */
  return { heading: sec.heading, bodyLen, proseLen: prose.length, elements: tableRows + listItems + subHeads + fences, prose };
}

function measurePage(cfg) {
  const file = join(ROOT, cfg.twin);
  if (!existsSync(file)) return { route: cfg.route, error: 'twin not built' };
  const all = sections(readFileSync(file, 'utf8'), cfg.level).map(measureSection);
  const graded = all.find((s) => s.heading === cfg.graded);
  if (!graded) return { route: cfg.route, error: `graded section "${cfg.graded}" not found in the twin` };
  /* Comparators are used for their LENGTHS only, so their prose is dropped here rather than shipped
   * to every consumer. The graded section keeps its words, because that is what the framing limbs read. */
  const comparators = all
    .filter((s) => s.heading !== cfg.graded && !cfg.excludeFromComparators.includes(s.heading))
    .map(({ prose: _drop, ...rest }) => rest);
  return { route: cfg.route, graded, comparators, excludedFromComparators: cfg.excludeFromComparators };
}

/* THE PINNED BUDGET — MEASURED FIRST, THEN PINNED, and re-derived on every run so a drift in either
 * direction is visible rather than silent. Measured on the 2026-09-02 build:
 *
 *   /patterns/mission-decomposition          /learn/tutorials/design-a-mission
 *     When to Use            217  ← floor      Step 1: Define the Task      358
 *     Problem                320               Step 3: Map Dependencies     434
 *     Anti-Pattern           762               Step 2: Identify Deliv.      454
 *     Example: This Vault    950               Step 6: Validate the Design  651
 *     Solution              1510               Step 5: Write the Mission    796
 *                                              Step 4: Estimate Budget      826
 *     ────────────────────────────────────────────────────────────────────────
 *     GRADED  Budgeting and Routing  3876      GRADED  Step 4b               658
 *
 * The pin is the LOWER of the two page floors, so one budget grades both pages and no section is
 * ever graded against a floor its own page's siblings do not support.
 *
 * ⚠ SAY WHAT THIS FLOOR IS AND IS NOT. It is the floor of the conformant set, which is what AC-2
 * asks for and all it asks for: it separates a doctrine section from **a passing mention** — the
 * threat AC-2 names, a single sentence in a changelog or a glossary stub taking the count from 0 to
 * 1 while the layer stays unwritten. It does NOT grade quality, and it is not a claim that 217
 * characters is enough to teach anything. A floor derived from the thinnest conformant sibling is
 * exactly as strong as that sibling, and no stronger. */
export const BUDGET = { bodyLen: 217 };
/** Below 3 exemplars, "the floor of the conformant set" stops being a floor. gate-44's constant. */
export const COMPARATOR_FLOOR = 3;
/** Coverage floor on the source walk — a walk that collapses must fail loudly, not read as clean. */
export const SCAN_FLOOR = 200;

function main() {
  const source = scanSource();
  const pages = PAGES.map(measurePage);
  const ok = pages.filter((p) => !p.error);
  const derived = ok.length
    ? { bodyLen: Math.min(...ok.map((p) => Math.min(...p.comparators.map((c) => c.bodyLen)))) }
    : null;
  const result = {
    source,
    pages,
    budget: BUDGET,
    derived,
    /* False when the exemplars have thinned below the pinned budget: the budget would then be
     * stricter than the evidence for it, and every grade it hands down unfounded. */
    derivationHolds: !!derived && derived.bodyLen >= BUDGET.bodyLen,
  };

  if (process.argv.includes('--json')) {
    console.log(JSON.stringify(result, null, 2));
    return;
  }

  console.log(`\nSURFACE A — authored source (${source.scanned} files: ${source.kept} kept, ${source.excluded} excluded)`);
  console.log(`  excluded by name: ${source.excludedDirs.join(', ')}`);
  for (const [k, t] of Object.entries(source.terms)) {
    console.log(`  ${k} (${t.label}): ${t.authored.length} authored · ${t.excludedMatching.length} in the excluded tree`);
    t.authored.forEach((f) => console.log(`      ${f}`));
  }
  console.log(`\nSURFACE B — rendered .md twins   budget bodyLen>=${BUDGET.bodyLen}`);
  for (const p of pages) {
    if (p.error) {
      console.log(`  ${p.route}: ERROR ${p.error}`);
      continue;
    }
    const meets = p.graded.bodyLen >= BUDGET.bodyLen;
    console.log(`  ${p.route}`);
    console.log(`      graded "${p.graded.heading}": bodyLen ${p.graded.bodyLen} (prose ${p.graded.proseLen} · elements ${p.graded.elements})  ${meets ? 'MEETS' : 'BELOW'}`);
    console.log(`      ${p.comparators.length} comparators, bodyLen floor: ${Math.min(...p.comparators.map((c) => c.bodyLen))}`);
  }
  console.log(`\nderived floor: ${JSON.stringify(result.derived)}   derivationHolds: ${result.derivationHolds}\n`);
}

main();
