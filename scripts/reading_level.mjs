#!/usr/bin/env node
// Reading-level + passive-voice measurement for aDNA content files.
//
// Usage:
//   node scripts/reading_level.mjs <file-or-glob> [<file> ...]
//
// Computes Flesch-Kincaid Grade Level (FKGL) and a rough passive-voice
// ratio on the body text of a markdown file (frontmatter, code blocks,
// tables, and wikilink targets are stripped).
//
// Intended as a cycle-12+ measurement tool for the D2 content-clarity
// sprint — not a replacement for Hemingway App, just a repeatable
// automated number to guide rewrites.

import { readFileSync } from "node:fs";
import { globSync } from "node:fs";

// Exported for `site/scripts/reading_census.mjs` (HAUSSMANN P4.5b), which adds a
// prose-only normalization on top of these primitives rather than reimplementing
// the FKGL math. Purely additive: running this file directly is unchanged.
export function stripMarkdown(text) {
  // frontmatter
  text = text.replace(/^---\n[\s\S]*?\n---\n/, "");
  // fenced code
  text = text.replace(/```[\s\S]*?```/g, "");
  // inline code
  text = text.replace(/`[^`]*`/g, "");
  // headings (drop the leading #s, keep the text)
  text = text.replace(/^#{1,6}\s+/gm, "");
  // tables (lines starting with |)
  text = text.replace(/^\|.*$/gm, "");
  // html tags
  text = text.replace(/<[^>]+>/g, "");
  // wikilinks [[target|display]] → display, [[target]] → target
  text = text.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2");
  text = text.replace(/\[\[([^\]]+)\]\]/g, "$1");
  // markdown links [text](url) → text
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  // images
  text = text.replace(/!\[[^\]]*\]\([^)]+\)/g, "");
  // bold/italic markers
  text = text.replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, "$1");
  // horizontal rules
  text = text.replace(/^---+$/gm, "");
  // list markers
  text = text.replace(/^\s*[-*+]\s+/gm, "");
  text = text.replace(/^\s*\d+\.\s+/gm, "");
  return text.trim();
}

function countSyllables(word) {
  word = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!word) return 0;
  if (word.length <= 3) return 1;
  // silent -e
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "");
  word = word.replace(/^y/, "");
  const groups = word.match(/[aeiouy]{1,2}/g);
  return groups ? groups.length : 1;
}

const PASSIVE_BE = /\b(is|are|was|were|be|been|being|am)\s+(\w+ed|done|made|given|taken|seen|gone|shown|known|written|built|run|held|kept|told|brought)\b/gi;

export function analyze(body) {
  const sentences = body
    .split(/(?<=[.!?])\s+(?=[A-Z])/)
    .map(s => s.trim())
    .filter(s => s.length > 0);
  const words = body.match(/\b[A-Za-z][A-Za-z'-]*\b/g) || [];
  const syllables = words.reduce((acc, w) => acc + countSyllables(w), 0);
  const sentenceCount = Math.max(sentences.length, 1);
  const wordCount = Math.max(words.length, 1);
  const fkgl = 0.39 * (wordCount / sentenceCount) + 11.8 * (syllables / wordCount) - 15.59;
  const passiveMatches = body.match(PASSIVE_BE) || [];
  const passiveRatio = passiveMatches.length / sentenceCount;
  return {
    sentences: sentenceCount,
    words: wordCount,
    syllables,
    avgWordsPerSentence: wordCount / sentenceCount,
    avgSyllablesPerWord: syllables / wordCount,
    fkgl: Number(fkgl.toFixed(2)),
    passiveRatio: Number((passiveRatio * 100).toFixed(1)),
    passiveCount: passiveMatches.length,
  };
}

function report(file) {
  const raw = readFileSync(file, "utf8");
  const body = stripMarkdown(raw);
  const r = analyze(body);
  const flag = r.fkgl > 10 ? " ⚠ > Grade 10" : "";
  const pflag = r.passiveRatio > 15 ? " ⚠ passive" : "";
  return `${file}\n  FKGL: ${r.fkgl}${flag}  passive: ${r.passiveRatio}% (${r.passiveCount} hits)${pflag}\n  sentences: ${r.sentences}  words: ${r.words}  avg wps: ${r.avgWordsPerSentence.toFixed(1)}  spw: ${r.avgSyllablesPerWord.toFixed(2)}\n`;
}

// Run the CLI only when invoked directly. Without this guard, importing the file for its
// exported primitives also runs this block against the IMPORTER's argv — which is exactly
// what happened on `reading_census.mjs`'s first run (it tried to open "--dist" as a file).
// Caught by running it; noted because a module with import-time side effects fails in a way
// that looks like a bug in the caller.
if (process.argv[1] && process.argv[1].endsWith("reading_level.mjs")) {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error("Usage: node scripts/reading_level.mjs <file> [<file> ...]");
    process.exit(1);
  }

  const files = args.flatMap(a => (a.includes("*") ? globSync(a) : [a]));
  for (const f of files) {
    process.stdout.write(report(f));
  }
}
