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

// LINE predicates — markup shape that is recognizable one line at a time.
export const CLUSTER_PREDICATES = [
  // ⚠ AMENDED P4.5b O3 — this predicate was `links >= 2`, full stop, and it was dropping
  // PROSE. Measured site-wide before the change: 90 lines carry two or more links, and **30 of
  // them are punctuated paragraphs** — most of the glossary's definition sentences ("A
  // [deployment form](…) where `what/`, `how/`, and `who/` exist as top-level directories."),
  // and `/get-started`'s closing paragraph. Two inline links in a fifty-word sentence is
  // ordinary writing, not a nav cluster.
  //
  // ⭐ THE PERVERSE PART, AND WHY IT HAD TO BE FIXED HERE RATHER THAN NOTED: the drop is
  // triggered by LINKING, so the corpus shrank every time the copy got MORE reachable. O3's
  // own emitter fix — which recovered two glossary links the twins had been losing — pushed a
  // fifty-word prose bullet on `/learn/what-is-adna` over this threshold and out of the
  // measurement. **An instrument that degrades as its subject improves is measuring against
  // the wrong axis**, and it would have quietly rewarded leaving terms unlinked.
  //
  // The repair is not a new idea: it is the SAME invariant the block guard below already runs
  // on — *prose is punctuated* — applied to the line predicate, which predates it. A line with
  // links but no sentence ending is a cluster; a line with links that terminates more sentences
  // than it carries links is prose. Both directions are in `--selftest`.
  { name: "multi-link", test: l => {
      const links = (l.match(/\]\(/g) || []).length;
      if (links < 2) return false;
      const stops = (l.match(/[.!?]["')\]]?(\s|$)/g) || []).length;
      const words = (l.match(/\b[A-Za-z][A-Za-z'-]*\b/g) || []).length;
      if (stops === 0) return true;          // links and no sentence ends → cluster
      if (words < 12) return true;           // too short to be a paragraph carrying links
      return links > stops;                  // more links than sentences → cluster
    } },
  { name: "card-affordance", test: l => /Open vault\s*(→|&rarr;)/.test(l) },
  { name: "image-alt", test: l => /^\s*\*\[image:/.test(l) },
  { name: "shell-transcript", test: l => /^\s*\$\s/.test(l) },
  { name: "heading", test: l => /^\s*#{1,6}\s/.test(l) },
  { name: "table-row", test: l => /^\s*\|/.test(l) },
];

// BLOCK predicates — and these are the ones that matter, because the failures that
// survived a line-only pass were all block-shaped [D, P4.5b O1]:
//
//   /learn/what-is-adna, after the line pass, still had its three worst "sentences" be
//   the proof-link list (FKGL 63.9 over 153 words), the flattened 16-entity table (48.3
//   over 100), and the "Explore further" list (23.9 over 60). None was catchable per line
//   — each link sat on its own line, so `multi-link` never fired, and the twin renders the
//   table with no pipes, so `table-row` never fired either.
//
// ⭐ The invariant that does catch them: PROSE IS PUNCTUATED. A paragraph ends its
// sentences; a link list, a table flattened into text, and a nav cluster do not. The
// sentence splitter needs [.!?] + whitespace + capital, so an unpunctuated block does not
// merely measure badly — it collapses into ONE pseudo-sentence and drags words/sentences
// up for the whole page.
//
// This is deliberately the THIRD formulation of this guard, and the last: `avg wps > 40`
// (page-level, missed mixed pages) → line predicates (missed block shapes) → this. Each
// earlier one was a patch written at the moment of diagnosis. Convention 15's ruling is
// that an instrument gets built with its controls in one sitting, so `--selftest` below
// exercises every predicate against fixtures in both directions.
// ⚠ These are measured on the block AS A WHOLE, never per line. The first version of this
// guard counted "lines ending in a full stop" and dropped a third of the real prose on the
// site — a wrapped four-line paragraph has one terminator and three bare line-ends, so it
// scored the same as a link list. `/vaults` and `/privacy` came back at FKGL -15.2 (i.e.
// nothing left to measure) and `/commons` fell 8.5 grades, which is what caught it.
//
// ⭐ The self-test passed 11/11 while that was true, because every fixture in it put one
// sentence on one line. **The controls covered the predicate and not the data.** Wrapped
// fixtures are now in the set, and that is the actual repair — the ratio below would have
// been arrived at eventually, but a control that cannot see the failure is the real defect.
export const BLOCK_PREDICATES = [
  {
    name: "unpunctuated-block",
    // Prose is punctuated. A link list, a flattened table, a nav cluster and a stat row
    // are not — they have no sentence terminators at all, which is what makes the sentence
    // splitter collapse them into one 150-word pseudo-sentence.
    // Wrapping-invariant: judged on words-per-terminator across the whole block, so it does
    // not matter where the line breaks fall.
    test: lines => {
      const text = lines.join(" ");
      const words = (text.match(/\b[A-Za-z][A-Za-z'-]*\b/g) || []).length;
      const stops = (text.match(/[.!?]["')\]]?(\s|$)/g) || []).length;
      // No sentence ends anywhere in the block → not prose, at ANY length. The length
      // escape below has to sit *after* this: a stat row ("74 Vaults / 16 Entity Types /
      // 3 Conformance Levels") is only 8 alphabetic words, so a short-block exemption
      // placed first waves it straight through. Genuine short prose still terminates.
      if (stops === 0) return true;
      if (words < 12) return false;              // too short for the ratio to mean anything
      return words / stops > 45;                 // one "sentence" per 45+ words is a list, not a paragraph
    },
  },
  {
    name: "link-dense-block",
    // More links than sentences: a navigation cluster wearing prose punctuation.
    test: lines => {
      const text = lines.join(" ");
      const links = (text.match(/\]\(/g) || []).length;
      const stops = (text.match(/[.!?]["')\]]?(\s|$)/g) || []).length;
      return links >= 3 && links > stops;
    },
  },
];

export function toProse(text) {
  const kept = [];
  const dropped = [];

  for (const rawBlock of stripTwinPreamble(text).split(/\n\s*\n/)) {
    // Line pass first, so a block is judged on what survives it.
    const lines = [];
    for (const line of rawBlock.split("\n")) {
      if (!line.trim()) continue;
      const hit = CLUSTER_PREDICATES.find(p => p.test(line));
      if (hit) dropped.push({ line, reason: hit.name });
      else lines.push(line);
    }
    if (!lines.length) continue;

    const blockHit = BLOCK_PREDICATES.find(p => p.test(lines));
    if (blockHit) {
      for (const l of lines) dropped.push({ line: l, reason: blockHit.name });
    } else {
      kept.push(lines.join("\n"));
    }
  }

  return { prose: kept.join("\n\n"), dropped };
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
// Self-test — the controls this instrument does not get believed without
// ---------------------------------------------------------------------------
//
// Convention 14: a verification instrument is not believed until it has been demonstrated
// to fail. A classifier is believed only if it separates BOTH ways — dropping markup is
// worthless if it also drops prose, and this one silently lowers every number it touches,
// so a false drop looks like a successful rewrite. Half these cases exist to catch that.

const SELFTEST = [
  // --- must be KEPT (prose) ---------------------------------------------------
  { keep: true, name: "plain paragraph",
    text: "AI agents have the same trouble people do: finding the right file. With no shape to follow, an agent reads the wrong thing." },
  { keep: true, name: "bulleted prose (punctuated)",
    text: "- The Triad — three directories, in every project.\n- Governance files orient an agent at each level." },
  { keep: true, name: "prose containing ONE link",
    text: "The public image at [github](https://example.com) is a real aDNA workspace. One command gives you the standard." },
  { keep: true, name: "prose with a trailing quote/paren",
    text: 'She called it "the most honest project page I have read in years." That is the register this guide takes.' },
  { keep: true, name: "prose ending in a colon lead-in then a sentence",
    text: "aDNA gives a project three things. Each one is described below." },
  // ⚠ The wrapped cases. Their absence is what let the first block guard ship: every
  // fixture above puts one sentence on one line, so a rule counting line-ends passed all
  // of them and still ate a third of the site's real prose.
  { keep: true, name: "WRAPPED paragraph — one terminator, four bare line-ends",
    text: "The problem is the filing, not the agent. The agent is able; it has\nnowhere to look. Most teams patch the gap with long READMEs and custom\nprompts, and none of that carries to the next session, the next agent,\nor the next teammate." },
  { keep: true, name: "WRAPPED single long sentence — no interior line ends a sentence",
    text: "A well-built aDNA project lets any agent answer three questions at\nonce, without asking anyone and without reading more than three files\nin the repository root." },
  // ⚠ The multi-link cases. Their absence is what let `links >= 2` drop 30 real prose lines
  // site-wide — every fixture above carried at most ONE link, so a predicate keying on two
  // passed the whole set while eating the glossary's definition paragraphs.
  { keep: true, name: "MULTI-LINK punctuated prose (the glossary definition shape)",
    text: "A [deployment form](/glossary/glossary-deployment-form) where the triad is nested inside `.agentic/` at the repository root. It suits projects that already own their top level." },
  { keep: true, name: "MULTI-LINK prose, links equal to sentences",
    text: "The [triad](/a) is three directories. Every [governance file](/b) sits at a fixed path, so an agent always knows where to look first." },
  { keep: false, name: "two links, no sentence ending (a nav pair)",
    text: "[Get Started](/get-started) · [Read the spec](/reference/specification)" },
  { keep: false, name: "two links in a short labelled row",
    text: "Docs: [guide](/a), [reference](/b)" },
  { keep: true, name: "WRAPPED prose carrying one inline link",
    text: "The public image at [github.com/aDNA-Network/aDNA](https://example.com)\nis a real aDNA workspace, and one command gives you the standard, the\nskills and the templates." },

  // --- must be DROPPED (markup) -----------------------------------------------
  { keep: false, name: "link list, one per line (the proof-links case)",
    text: "[CLAUDE.md](https://e.com/a) — the operating protocol an agent loads first\n[.adna/](https://e.com/b) — the standard, embedded\n[skill_onboarding.md](https://e.com/c) — the first-run recipe" },
  { keep: false, name: "twin-flattened table (no pipes, no stops)",
    text: "TriadEntityPurpose\nWHORoles, policies, decision authority\nWHOWho works on the project\nWHATCurated knowledge files" },
  { keep: false, name: "nav cluster (Explore further)",
    text: "[The Triad](/a) — the structure underneath it all\n[Governance Files](/b) — CLAUDE.md and what each is for\n[Get Started](/c) — set up your first project" },
  { keep: false, name: "stat row",
    text: "74 Vaults\n16 Entity Types\n3 Conformance Levels\nMIT Licensed" },
  { keep: false, name: "vault card strip",
    text: "[the standard in use ### aDNA tended by Rosetta Open vault →](/vaults/adna/)[framework in use ### III tended by Argus Open vault →](/vaults/iii/)" },
  { keep: false, name: "heading alone",
    text: "## How aDNA works" },
];

function selftest() {
  let pass = 0;
  const failures = [];
  for (const c of SELFTEST) {
    const { prose } = toProse(c.text);
    const kept = prose.trim().length > 0;
    if (kept === c.keep) pass++;
    else failures.push(`${c.keep ? "should KEEP" : "should DROP"}: ${c.name}`);
  }
  const keeps = SELFTEST.filter(c => c.keep).length;
  console.log(`reading_census selftest: ${pass}/${SELFTEST.length} (${keeps} keep-cases, ${SELFTEST.length - keeps} drop-cases)`);
  for (const f of failures) console.log(`  ✗ ${f}`);
  return failures.length === 0;
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

const isMain = process.argv[1] && process.argv[1].endsWith("reading_census.mjs");
if (isMain) {
  const argv = process.argv.slice(2);
  if (argv.includes("--selftest")) process.exit(selftest() ? 0 : 1);
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
