#!/usr/bin/env node
// Reading-level census over the built .md twins — HAUSSMANN P4.5b (AC-b, AC-d, gate-48).
//
// Usage:
//   node site/scripts/reading_census.mjs [--dist <dir>] [--routes <r1,r2,...>] [--json] [--all]
//
// WHY THIS EXISTS, AND WHY IT IS NOT `scripts/reading_level.mjs`
// -------------------------------------------------------------
// `reading_level.mjs` measures a markdown file. That is the right primitive and this
// script imports its `stripMarkdown` + `analyze` rather than reimplementing the FKGL
// math. What it does NOT do is decide *which text on a page is prose*, and on this site
// that decision changes the number by up to ~2 grade levels.
//
// Measured at P4.5b O1 pre-flight [D]:
//   /        whole-twin 13.90  ·  prose-only 11.84   (delta 2.06)
//   /vaults  whole-twin 40.96  ·  3 detected sentences over 228 words
//
// The cause is page SHAPE, not writing. A vault-card strip or a link cluster has no
// terminal punctuation, so `stripMarkdown` removes the list markers and the sentence
// splitter — which needs [.!?] + whitespace + capital — merges the whole grid into one
// pseudo-sentence of 90-190 words. words/sentences explodes and FKGL follows.
//
// ⭐ The trap that matters: a per-page AVERAGE HIDES A MIXED PAGE. `/vaults` is almost
// entirely cards (avg wps 76) and is obvious. `/` mixes real prose with a card strip and
// lands at avg wps 25.8 — under any plausible "is this a list page" threshold — while
// still carrying 2.06 grades of markup artifact. Mixed pages are the common case, so a
// shape guard keyed to the page average is aimed at the rare one. This script therefore
// EXCLUDES THE ARTIFACT LINES rather than excluding whole pages.
//
// Operator ruling 2026-08-26: PROSE-ONLY is the canonical metric for AC-b and gate-48.
// Whole-twin is still reported, as context and so the delta stays visible.
//
// Never rewrite to move a number (doctrine_site_voice §7). This measures; it does not judge.

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { stripMarkdown, analyze } from "../../scripts/reading_level.mjs";

// ---------------------------------------------------------------------------
// Normalization
// ---------------------------------------------------------------------------

// Every twin opens with a blockquote block of machine-facing boilerplate
// ("> Markdown twin of ..." x4). It is ~48 words of grade-13 prose that no human reads
// as page content, and `stripMarkdown` does not strip blockquotes.
// Measured bias if left in: +0.05 to +0.28 FKGL, one-directional [D].
// Strip the LEADING block only — a blanket /^> / would also eat body pull-quotes.
export function stripTwinPreamble(text) {
  const lines = text.split("\n");
  let i = 0;
  if (lines[0]?.startsWith("> ")) {
    while (i < lines.length && lines[i].startsWith("> ")) i++;
  }
  return lines.slice(i).join("\n");
}

// A line is a card/link cluster — markup shape, not prose — if it carries two or more
// markdown links, or is a card affordance, an image alt, or a shell transcript.
// Each predicate is named so a future reader can disagree with a specific one.
export const CLUSTER_PREDICATES = [
  { name: "multi-link", test: l => (l.match(/\]\(/g) || []).length >= 2 },
  { name: "card-affordance", test: l => /Open vault\s*(→|&rarr;)/.test(l) },
  { name: "image-alt", test: l => /^\s*\*\[image:/.test(l) },
  { name: "shell-transcript", test: l => /^\s*\$\s/.test(l) },
];

export function toProse(text) {
  const kept = [];
  const dropped = [];
  for (const line of stripTwinPreamble(text).split("\n")) {
    const hit = CLUSTER_PREDICATES.find(p => p.test(line));
    if (hit) dropped.push({ line, reason: hit.name });
    else kept.push(line);
  }
  return { prose: kept.join("\n"), dropped };
}

// ---------------------------------------------------------------------------
// Measurement
// ---------------------------------------------------------------------------

export function measureTwin(file) {
  const raw = readFileSync(file, "utf8");
  const whole = analyze(stripMarkdown(stripTwinPreamble(raw)));
  const { prose, dropped } = toProse(raw);
  const proseStats = analyze(stripMarkdown(prose));
  return {
    prose_fkgl: proseStats.fkgl,
    whole_fkgl: whole.fkgl,
    delta: Number((whole.fkgl - proseStats.fkgl).toFixed(2)),
    passive_pct: proseStats.passiveRatio,
    sentences: proseStats.sentences,
    words: proseStats.words,
    avg_wps: Number(proseStats.avgWordsPerSentence.toFixed(1)),
    dropped_lines: dropped.length,
    // A page whose prose is too thin to grade. FKGL over a handful of sentences is
    // noise, and so is a passive ratio whose denominator is the sentence count.
    // Reported, never silently omitted.
    low_confidence: proseStats.sentences < 8 || proseStats.words < 120,
  };
}

// ---------------------------------------------------------------------------
// Route resolution
// ---------------------------------------------------------------------------

export function twinPathFor(dist, route) {
  return route === "/" ? join(dist, "index.md") : join(dist, `${route.replace(/^\//, "")}.md`);
}

function allTwins(dist) {
  const out = [];
  (function walk(d) {
    for (const e of readdirSync(d)) {
      const p = join(d, e);
      if (statSync(p).isDirectory()) walk(p);
      else if (e.endsWith(".md")) out.push(p);
    }
  })(dist);
  return out.map(p => {
    const r = "/" + relative(dist, p).split(sep).join("/").replace(/\.md$/, "");
    return r === "/index" ? "/" : r;
  });
}

// The 21 routes P4.5b is graded over: the derived top-20 (every route linked from all
// 226 built pages — a cliff from 226 inbound to 141) UNION AC-b's four named
// first-contact surfaces. `/learn/what-is-adna` is rank 21 and is in the set only
// because AC-b names it; that discrepancy is recorded, not resolved silently.
// ⚠ Nav or footer changes move the top-20 — re-derive, never quote this forward
// (same-diff, ADR-057).
export const SCOPE_21 = [
  "/", "/reference", "/learn", "/vaults", "/network", "/commons", "/use-cases",
  "/community", "/get-started", "/community/proposals", "/about", "/state-of-the-network",
  "/canonical-properties", "/security", "/privacy", "/accessibility",
  "/reference/specification", "/glossary", "/how", "/changelog",
  "/learn/what-is-adna",
];

export const FIRST_CONTACT = ["/", "/get-started", "/learn/what-is-adna", "/community"];
export const TARGET_FIRST_CONTACT = 10;
export const TARGET_REFERENCE = 12;

export function census(dist, routes) {
  const rows = [];
  const missing = [];
  for (const route of routes) {
    const f = twinPathFor(dist, route);
    if (!existsSync(f)) { missing.push(route); continue; }
    rows.push({ route, target: FIRST_CONTACT.includes(route) ? TARGET_FIRST_CONTACT : TARGET_REFERENCE, ...measureTwin(f) });
  }
  return { rows, missing };
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

const isMain = process.argv[1] && process.argv[1].endsWith("reading_census.mjs");
if (isMain) {
  const argv = process.argv.slice(2);
  const opt = k => { const i = argv.indexOf(k); return i === -1 ? null : argv[i + 1]; };
  const dist = opt("--dist") || "site/dist";
  const routes = opt("--routes") ? opt("--routes").split(",") : (argv.includes("--all") ? allTwins(dist) : SCOPE_21);

  if (!existsSync(dist)) {
    console.error(`reading_census: no build at ${dist} — run \`npx astro build\` first (never \`npm run build\`).`);
    process.exit(2);
  }

  const { rows, missing } = census(dist, routes);
  rows.sort((a, b) => b.prose_fkgl - a.prose_fkgl);

  if (argv.includes("--json")) {
    console.log(JSON.stringify({ dist, measured: rows.length, missing, rows }, null, 2));
  } else {
    console.log(`reading census · ${rows.length} routes · prose-only is canonical (whole-twin shown for contrast)\n`);
    console.log("prose  whole  Δ      pass%  route");
    for (const r of rows) {
      const over = r.prose_fkgl > r.target ? " ⚠" : "  ";
      const conf = r.low_confidence ? "  (low-confidence: thin prose)" : "";
      console.log(
        `${String(r.prose_fkgl).padEnd(6)} ${String(r.whole_fkgl).padEnd(6)} ${String(r.delta).padEnd(6)} ` +
        `${String(r.passive_pct).padEnd(6)} ${r.route}${over}${conf}`
      );
    }
    const over = rows.filter(r => !r.low_confidence && r.prose_fkgl > r.target);
    console.log(`\n${over.length} of ${rows.length} over target (derived). Targets: ${TARGET_FIRST_CONTACT} first-contact, ${TARGET_REFERENCE} elsewhere.`);
    if (missing.length) console.log(`\n⚠ no twin for: ${missing.join(", ")}`);
  }
}
