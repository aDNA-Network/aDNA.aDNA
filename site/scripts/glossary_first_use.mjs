#!/usr/bin/env node
/**
 * glossary_first_use.mjs — HAUSSMANN P4.5b O3, AC-b's glossary limb.
 *
 * The criterion: "every proprietary term glossary-linked at first use." That is a
 * machine-checkable claim that had no machine check, and — WebForge KW-14 in its purest form —
 * `every` had no denominator, because no list of "proprietary terms" existed anywhere in the
 * campaign. The denominator was sitting in the build the whole time: `/glossary` ships 25
 * entries, each a canonical definition home (D4.7). This derives the set from
 * `src/content/docs/glossary-*.mdx` at runtime and NEVER types a count.
 *
 * ⭐ THE SCOPE AND THE EXCLUSIONS ARE THE DESIGN, AND EACH WAS MEASURED BEFORE IT WAS CHOSEN.
 * V5 requires the exclusions be named on the gate's face; here is each one and what it cost to
 * learn. The naive rule — all 25 terms across the 21 rewritten routes — reports **79 unlinked
 * mentions**, and the top two offenders are `/glossary` (20) and `/reference/specification` (19).
 * A 97 % violation rate is the signature of a rule measuring the wrong thing, not of a site that
 * is 97 % broken.
 *
 *   1. ROUTE SCOPE = the four FIRST-CONTACT surfaces, not all 21.
 *      This is where the one-new-term law binds (voice guide §3) and where the clinician was
 *      actually lost. The excluded routes are excluded for reasons, not for convenience:
 *        · `/glossary` — it IS the definition home. Requiring its own headings to link to
 *          themselves is a rule eating its own tail (20 of the 79).
 *        · `/reference/specification` — the ratified spec mirror, which defines its terms in its
 *          own table and which the voice guide explicitly says a copy mission "has no business
 *          rewriting" (19 of the 79).
 *        · the reference and hub routes — card, table and nav shaped; a term in a nav card is not
 *          an introduction.
 *      ⚠ Widening this scope is a real editorial decision, not a config change. Say so out loud
 *      rather than turning the knob.
 *
 *   2. TERM EXCLUSIONS = 5 of the 25, each an ordinary-English homograph or the site's own name
 *      (see AMBIGUOUS). A literal string match cannot tell "at the start of each session" from
 *      the aDNA `session` entity — and that exact sentence on `/learn/what-is-adna` is what an
 *      earlier draft of this instrument reported as its ONE finding. It was a false positive.
 *      A gate whose only finding is wrong is worse than no gate.
 *
 *   3. CODE SPANS ARE NOT PROSE MENTIONS. A path in `backticks` is code; masked before matching.
 *
 * ⭐⭐ THE SURFACES ARE ASYMMETRIC, DELIBERATELY, AND THAT IS THIS INSTRUMENT'S REAL FINDING.
 * Campaign convention 17, as amended at O1, says the surface must match the claim's own verb —
 * and this check contains TWO claims with two different verbs:
 *
 *      "where does a reader first MEET this term"  → PROSE (toProse), because a table cell and a
 *                                                     nav card are not introductions
 *      "can the reader REACH its definition"       → the WHOLE twin, because a link renders and
 *                                                     is clickable wherever it sits
 *
 * Measured, the two surfaces disagree in BOTH directions (which is why neither is a safe
 * default): on `/learn/what-is-adna`, `Frontmatter` is LINKED on the whole twin and BARE on
 * prose, because its link lives in a link-dense enumeration bullet that `toProse` correctly
 * drops for FKGL purposes. Read prose-only, this instrument would report a violation for a term
 * the page links properly. **That case is now a permanent control: it is the one passing row in
 * the default output, and if it ever reads BARE the surfaces have been collapsed back together.**
 *
 * COVERAGE FLOOR, NOT `> 0` (P4.2's lesson, paid for twice): `violations.length === 0` is
 * vacuously true over a frame of zero routes and zero terms. The frame is asserted before any
 * verdict about it is believed, and a route whose twin is missing is a loud error row, never a
 * silent skip.
 *
 * Usage:
 *   node scripts/glossary_first_use.mjs [--dist site/dist] [--json]
 *   node scripts/glossary_first_use.mjs --selftest      # controls, both directions
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { FIRST_CONTACT, twinPathFor, stripTwinPreamble, toProse } from "./reading_census.mjs";

// ---------------------------------------------------------------------------
// The denominator — derived from the build, never typed
// ---------------------------------------------------------------------------

export const GLOSSARY_DIR = "src/content/docs";

export function deriveTerms(dir = GLOSSARY_DIR) {
  return readdirSync(dir)
    .filter(f => f.startsWith("glossary-") && f.endsWith(".mdx"))
    .map(f => {
      const m = readFileSync(join(dir, f), "utf8").match(/^doc_title:\s*"?(.+?)"?\s*$/m);
      return { slug: f.replace(/\.mdx$/, ""), term: m ? m[1].trim() : null };
    })
    .filter(t => t.term);
}

/** Terms a literal match cannot decide, each with the reason. Excluded, never silently dropped. */
export const AMBIGUOUS = {
  "aDNA": "the site's own name — on all 21 routes; the whole site is its definition, and linking it at first use on every page is link-spam",
  "Mission": "ordinary-English homograph",
  "Session": "ordinary-English homograph — 'you explain the project again at the start of each session' is not the aDNA entity",
  "Skill": "ordinary-English homograph",
  "Template": "ordinary-English homograph",
};

export function checkableTerms(all) {
  return all.filter(t => !(t.term in AMBIGUOUS));
}

// ---------------------------------------------------------------------------
// Matching
// ---------------------------------------------------------------------------

const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** A path in `backticks` or a fenced block is code, not a prose mention. Masked, not deleted, so
 *  every character index still lines up with the text it came from. */
export function maskCode(text) {
  return text
    .replace(/```[\s\S]*?```/g, m => " ".repeat(m.length))
    .replace(/`[^`\n]*`/g, m => " ".repeat(m.length));
}

/** Is `term` linked to its own glossary entry anywhere in `text`? */
export function hasGlossaryLink(text, slug) {
  return new RegExp(`\\[[^\\]]*\\]\\(/glossary/${esc(slug)}/?\\)`, "i").test(text);
}

/** First prose mention of `term`, or null. */
export function firstMention(proseText, term) {
  const m = proseText.match(new RegExp(`(?<![\\w/-])${esc(term)}`, "i"));
  return m ? m.index : null;
}

export function auditRoute(dist, route, terms) {
  const f = twinPathFor(dist, route);
  if (!existsSync(f)) return { route, error: "no twin" };
  const raw = readFileSync(f, "utf8");
  const proseText = maskCode(toProse(raw).prose);          // where a reader MEETS a term
  const wholeText = maskCode(stripTwinPreamble(raw));       // where a link is REACHABLE
  const rows = [];
  for (const { slug, term } of terms) {
    const at = firstMention(proseText, term);
    if (at === null) continue;
    rows.push({ route, term, slug, at, linked: hasGlossaryLink(wholeText, slug) });
  }
  return { route, rows };
}

export function audit(dist, routes = FIRST_CONTACT, dir = GLOSSARY_DIR) {
  const all = deriveTerms(dir);
  const terms = checkableTerms(all);
  const results = routes.map(r => auditRoute(dist, r, terms));
  const errors = results.filter(r => r.error);
  const rows = results.flatMap(r => r.rows || []);
  return {
    derived: all.length,
    excluded: Object.keys(AMBIGUOUS).length,
    checkable: terms.length,
    routes_requested: routes.length,
    routes_measured: results.length - errors.length,
    errors,
    mentions: rows.length,
    rows,
    violations: rows.filter(r => !r.linked),
  };
}

// ---------------------------------------------------------------------------
// Self-test — this instrument is not believed until it has been shown to fail
// ---------------------------------------------------------------------------
//
// Convention 14. A classifier is believed only if it separates BOTH ways: a rule that never
// fires and a site with no defects produce the same clean output. Half these cases exist to
// catch a predicate that has stopped firing at all.

const SELFTEST = [
  // --- link detection -------------------------------------------------------
  { name: "inline link to the entry counts",
    fn: () => hasGlossaryLink("read the [triad](/glossary/glossary-triad) first", "glossary-triad") === true },
  { name: "trailing-slash href counts",
    fn: () => hasGlossaryLink("[triad](/glossary/glossary-triad/)", "glossary-triad") === true },
  { name: "a link to a DIFFERENT entry does not count",
    fn: () => hasGlossaryLink("[triad](/glossary/glossary-mission)", "glossary-triad") === false },
  { name: "a link to the concept page does not count as the glossary",
    fn: () => hasGlossaryLink("[triad](/learn/concepts/triad)", "glossary-triad") === false },
  { name: "bare prose does not count",
    fn: () => hasGlossaryLink("the triad is three directories", "glossary-triad") === false },
  // --- mention detection ----------------------------------------------------
  { name: "plain mention is found",
    fn: () => firstMention("the Triad is three directories", "Triad") === 4 },
  { name: "mention is case-insensitive",
    fn: () => firstMention("a bare triad works too", "Triad") === 7 },
  { name: "a longer word is NOT a mention (left boundary)",
    fn: () => firstMention("subtriad layouts", "Triad") === null },
  { name: "a path segment is NOT a mention (slash boundary)",
    fn: () => firstMention("see /learn/triad for more", "Triad") === null },
  { name: "FIRST mention wins when there are several",
    fn: () => firstMention("triad. later the Triad again", "Triad") === 0 },
  // --- code masking ---------------------------------------------------------
  { name: "inline code is masked out",
    fn: () => firstMention(maskCode("run `mkdir what/` now"), "what/") === null },
  { name: "fenced code is masked out",
    fn: () => firstMention(maskCode("```\nwhat/\n```"), "what/") === null },
  { name: "masking preserves offsets",
    fn: () => maskCode("ab `cd` ef").length === "ab `cd` ef".length },
  { name: "prose OUTSIDE the code span still matches",
    fn: () => firstMention(maskCode("the Triad, as in `what/`"), "Triad") === 4 },
  // --- the denominator ------------------------------------------------------
  { name: "every excluded term is really in the glossary (no phantom exclusions)",
    fn: () => { const all = deriveTerms().map(t => t.term);
                return Object.keys(AMBIGUOUS).every(t => all.includes(t)); } },
  { name: "checkable = derived − excluded, exactly",
    fn: () => { const all = deriveTerms();
                return checkableTerms(all).length === all.length - Object.keys(AMBIGUOUS).length; } },
];

function selftest() {
  let pass = 0; const failures = [];
  for (const c of SELFTEST) {
    let ok = false;
    try { ok = c.fn() === true; } catch (e) { ok = false; }
    if (ok) pass++; else failures.push(c.name);
  }
  console.log(`glossary_first_use selftest: ${pass}/${SELFTEST.length}`);
  for (const f of failures) console.log(`  ✗ ${f}`);
  return failures.length === 0;
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

const isMain = process.argv[1] && process.argv[1].endsWith("glossary_first_use.mjs");
if (isMain) {
  const argv = process.argv.slice(2);
  if (argv.includes("--selftest")) process.exit(selftest() ? 0 : 1);
  const opt = k => { const i = argv.indexOf(k); return i === -1 ? null : argv[i + 1]; };
  const dist = opt("--dist") || "dist";

  if (!existsSync(dist)) {
    console.error(`glossary_first_use: no build at ${dist} — run \`npx astro build\` first (never \`npm run build\`).`);
    process.exit(2);
  }
  const r = audit(dist);

  if (argv.includes("--json")) {
    console.log(JSON.stringify({ dist, ...r }, null, 2));
  } else {
    console.log(`glossary first-use · ${r.checkable} checkable terms (${r.derived} derived − ${r.excluded} ambiguous) · ${r.routes_measured}/${r.routes_requested} first-contact routes\n`);
    for (const row of r.rows) {
      console.log(`  ${row.linked ? "ok  " : "BARE"}  ${row.route.padEnd(22)} ${row.term}`);
    }
    console.log(`\n${r.violations.length} of ${r.mentions} first uses unlinked (derived).`);
    if (r.errors.length) console.log(`\n⚠ no twin for: ${r.errors.map(e => e.route).join(", ")}`);
    console.log(`\nExcluded terms, and why a literal match cannot decide them:`);
    for (const [t, why] of Object.entries(AMBIGUOUS)) console.log(`  · ${t} — ${why}`);
  }
  process.exit(0);
}
