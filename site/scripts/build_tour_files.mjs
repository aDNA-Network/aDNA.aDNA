#!/usr/bin/env node
/**
 * build_tour_files.mjs — HAUSSMANN P2.5 O1.
 *
 * Vendors the files a fresh clone's agent actually reads, verbatim, so an evaluator can audit the
 * prompt-ware BEFORE running it. The refusing cold-read wrote the requirement himself: "read
 * CLAUDE.md and .adna/ raw in the browser." Raw is the operative word — this script ships bytes,
 * not a rendering of them.
 *
 * WHY VERBATIM AND NOT A CONTENT COLLECTION.
 * The obvious shape — emit .mdx into src/content/tour and let the doc pipeline render it — cannot
 * work here and fails in the worst possible way. The vendor set carries 39 brace constructs
 * ({project_name}, {{VARS}}) and 28 angle constructs (<name>.aDNA). MDX evaluates the first as JS
 * expressions and parses the second as JSX tags, so the build either dies or SILENTLY MANGLES the
 * exact bytes this page exists to display. A tour that quietly alters the file it claims to show is
 * a worse defect than the invented transcript it replaces (R-118). So: plain .txt on disk, rendered
 * into a <pre>. Byte-exact, reviewable in a git diff, and immune to every markup pipeline.
 *
 * WHY IT DERIVES ITS OWN PIN AND WILL NOT BORROW install_truth's.
 * install_truth.json carries `template_sha`, which looks like the pin this page needs. It is not.
 * That field is frozen by its own generator's idempotency guard (build_install_truth.mjs:136 keeps
 * the committed byte form when only `generated`+`template_sha` would churn), and .adna's origin was
 * repointed to adna-legacy, so the recorded value `fd32fc7` is not a resolvable object in the
 * checkout it purports to describe. Harmless there — nothing renders it. Fatal here: this page's
 * whole claim is "these bytes came from that commit," and an unresolvable commit id printed on the
 * one page built to answer "can I trust this?" would be self-refuting. So we resolve HEAD ourselves
 * and VERIFY it, and we refuse to emit rather than print a pin we cannot stand behind.
 *
 * WHY IT VENDORS THE IMAGE'S ROUTER, NOT THE NODE'S.
 * "The workspace CLAUDE.md router" is ambiguous and one reading is a data leak. ~/aDNA/CLAUDE.md is
 * THIS node's live router; it names five vaults it explicitly marks local-only, NO remote (GOTFN,
 * Bearly, CakeHealth, aiLP-Dataroom, RareGraph). The router a clone actually ships is
 * .adna/how/templates/template_workspace_claude.md. That is both the safe source and the honest one
 * — the tour promises the files a NEW workspace contains, not the files this operator's machine has.
 * SOURCES ARE CONSTRAINED TO .adna/ BELOW AND THE GATE RE-ASSERTS IT.
 *
 * Reads:   ../../.adna/  (READ-ONLY — Workspace Standing Rule 1; this script only reads and stats)
 * Writes:  src/data/tour/<slug>.txt        verbatim bytes, committed
 *          src/data/tour_manifest.json     provenance + per-file metadata, committed
 *
 * Annotations are NOT written here. They are hand-authored editorial in src/data/tour_annotations.ts
 * and this script never touches them — generated and authored content stay separable, so a re-run
 * cannot silently eat prose someone wrote.
 *
 * CI/Vercel fallback: if ../../.adna/ is absent, warn + skip overwrite (uses last-committed) — the
 * same Clause-A semantics as build_install_truth.mjs and build_vaults_data.mjs.
 *
 * Usage:  node scripts/build_tour_files.mjs           (from site/)
 *         node scripts/build_tour_files.mjs --check    (verify, write nothing; used by gate-36)
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';

const SITE = process.cwd();
const CHECK = process.argv.includes('--check');

/** The workspace-level standard checkout: site/ -> vault root -> workspace root -> .adna */
const TEMPLATE_ROOT = resolve(SITE, '..', '..', '.adna');
/** This vault, for the self-reference triad listing (SO#8). */
const VAULT_ROOT = resolve(SITE, '..');

const OUT_DIR = join(SITE, 'src/data/tour');
const OUT_MANIFEST = join(SITE, 'src/data/tour_manifest.json');

const STANDARD_REPO = 'https://github.com/aDNA-Network/aDNA';

/**
 * The vendor set, in reading order — the order the agent itself encounters them.
 *
 * `skill_project_fork.md` is in this list because it is the skill that ACTUALLY runs on a fresh
 * clone, and `skill_onboarding.md` is in it because conflating the two is precisely what produced
 * the invented transcript (R-118): the page dramatised an onboarding interview that does not fire
 * on a fresh workspace. Showing both, named correctly, is the fix for the confusion and not just
 * for the fabrication.
 */
const FILES = [
  { slug: 'workspace-router', path: 'how/templates/template_workspace_claude.md' },
  { slug: 'standard-governance', path: 'CLAUDE.md' },
  { slug: 'skill-project-fork', path: 'how/skills/skill_project_fork.md' },
  { slug: 'skill-onboarding', path: 'how/skills/skill_onboarding.md' },
];

// ── CI/Vercel fallback (Clause-A semantics) ──────────────────────────────────────────────────
if (!existsSync(TEMPLATE_ROOT)) {
  if (CHECK) {
    console.warn(`[build_tour_files] WARN: ${TEMPLATE_ROOT} absent; cannot verify. Skipping (CI fallback).`);
    process.exit(0);
  }
  console.warn(`[build_tour_files] WARN: ${TEMPLATE_ROOT} not present; keeping last-committed tour files. (CI/Vercel fallback per ADR-023 Clause A semantics.)`);
  process.exit(0);
}

// ── The pin, resolved and verified ───────────────────────────────────────────────────────────
function git(args) {
  return execFileSync('git', args, { cwd: TEMPLATE_ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
}

let sourceSha;
let sourceShaFull;
let sourceCommitDate;
try {
  sourceShaFull = git(['rev-parse', 'HEAD']);
  sourceSha = git(['rev-parse', '--short', 'HEAD']);
  sourceCommitDate = git(['log', '-1', '--format=%cs']);
} catch {
  console.error('[build_tour_files] REFUSING: cannot read a commit from the standard checkout.');
  console.error('  The tour\'s claim is "these bytes came from that commit". Without a resolvable');
  console.error('  commit there is no honest pin to print, and an unpinned tour is just a copy.');
  process.exit(1);
}

// Verify the pin actually resolves to an object. HEAD always will; a hand-pinned value may not,
// and that is the exact failure mode install_truth.json is sitting in today (fd32fc7 -> not a
// valid object name). Assert it here so the class cannot recur silently in this file.
try {
  const type = git(['cat-file', '-t', sourceShaFull]);
  if (type !== 'commit') throw new Error(`pin resolves to a ${type}, not a commit`);
} catch (err) {
  console.error(`[build_tour_files] REFUSING: pin ${sourceSha} does not resolve to a commit in ${TEMPLATE_ROOT}.`);
  console.error(`  ${err.message}`);
  process.exit(1);
}

// A dirty standard checkout means the bytes on disk are NOT the bytes at the pinned commit, so the
// page's provenance line would be false the moment it rendered. Refuse rather than quietly ship a
// mismatch — the whole point of this file is that the pin can be trusted.
let dirty = '';
try {
  dirty = git(['status', '--porcelain', '--', ...FILES.map((f) => f.path)]);
} catch {
  /* status is advisory; a failure here is not worth blocking on */
}
if (dirty) {
  console.error('[build_tour_files] REFUSING: the standard checkout has uncommitted changes to vendored files:');
  console.error(dirty.split('\n').map((l) => `    ${l}`).join('\n'));
  console.error(`  Vendoring now would print pin ${sourceSha} above bytes that are not at ${sourceSha}.`);
  process.exit(1);
}

// ── Read the vendor set ──────────────────────────────────────────────────────────────────────
const sha256 = (buf) => createHash('sha256').update(buf).digest('hex');

const files = FILES.map(({ slug, path: relPath }) => {
  // Containment assertion. The leak this guards against is not hypothetical: the obvious reading of
  // "the workspace router" points at ~/aDNA/CLAUDE.md, which names five local-only vaults. Anything
  // outside .adna/ is refused here rather than reviewed later.
  const abs = resolve(TEMPLATE_ROOT, relPath);
  if (!abs.startsWith(TEMPLATE_ROOT + '/')) {
    console.error(`[build_tour_files] REFUSING: ${relPath} resolves outside the standard checkout.`);
    process.exit(1);
  }
  if (!existsSync(abs)) {
    console.error(`[build_tour_files] REFUSING: ${relPath} is missing from the standard checkout.`);
    console.error('  A tour that silently drops a file shows a smaller standard than the one you get.');
    process.exit(1);
  }
  const raw = readFileSync(abs, 'utf8');
  return {
    slug,
    source_path: relPath,
    bytes: Buffer.byteLength(raw, 'utf8'),
    lines: raw.split('\n').length,
    sha256: sha256(raw),
    blob_url: `${STANDARD_REPO}/blob/${sourceShaFull}/.adna/${relPath}`,
    _content: raw,
  };
});

/**
 * The self-reference close (SO#8): this vault's own triad, derived rather than illustrated.
 * The tour's last word is "and here is a real one" — pointing at the vault that publishes the tour.
 */
const triad = ['what', 'how', 'who'].map((leg) => ({
  leg,
  entries: readdirSync(join(VAULT_ROOT, leg), { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('.'))
    .map((d) => d.name)
    .sort(),
}));

const manifest = {
  schema_version: '1.0',
  generated: sourceCommitDate,
  source_repo: STANDARD_REPO,
  source_sha: sourceSha,
  source_sha_full: sourceShaFull,
  source_commit_date: sourceCommitDate,
  files: files.map(({ _content, ...meta }) => meta),
  vault_triad: triad,
};

const nextManifest = JSON.stringify(manifest, null, 2) + '\n';

// ── --check: verify committed output still equals the source ─────────────────────────────────
if (CHECK) {
  const problems = [];
  if (!existsSync(OUT_MANIFEST)) {
    problems.push('MISSING: src/data/tour_manifest.json (run the generator)');
  } else {
    const prev = JSON.parse(readFileSync(OUT_MANIFEST, 'utf8'));
    const prevBySlug = new Map((prev.files ?? []).map((f) => [f.slug, f]));
    for (const f of files) {
      const p = prevBySlug.get(f.slug);
      if (!p) problems.push(`MISSING: ${f.slug} absent from the manifest`);
      else if (p.sha256 !== f.sha256) problems.push(`STALE: ${f.source_path} changed in the standard (manifest ${p.sha256.slice(0, 12)} != source ${f.sha256.slice(0, 12)})`);
      prevBySlug.delete(f.slug);
    }
    for (const orphan of prevBySlug.keys()) problems.push(`ORPHAN: ${orphan} in the manifest but not in the vendor set`);
    if (prev.source_sha !== sourceSha) problems.push(`STALE: manifest pins ${prev.source_sha}; the standard checkout is at ${sourceSha}`);
  }
  for (const f of files) {
    const txt = join(OUT_DIR, `${f.slug}.txt`);
    if (!existsSync(txt)) problems.push(`MISSING: src/data/tour/${f.slug}.txt`);
    else if (readFileSync(txt, 'utf8') !== f._content) problems.push(`STALE: src/data/tour/${f.slug}.txt does not match the standard`);
  }
  if (problems.length) {
    console.error('[build_tour_files] drift detected:\n' + problems.map((p) => `    ${p}`).join('\n'));
    console.error('  Re-run: node scripts/build_tour_files.mjs');
    process.exit(1);
  }
  console.log(`[build_tour_files] OK — ${files.length} files current with ${sourceSha}`);
  process.exit(0);
}

// ── Emit ─────────────────────────────────────────────────────────────────────────────────────
mkdirSync(OUT_DIR, { recursive: true });

// Clear stale slugs so a removed vendor entry cannot linger as an orphan page.
for (const name of existsSync(OUT_DIR) ? readdirSync(OUT_DIR) : []) {
  if (name.endsWith('.txt') && !files.some((f) => `${f.slug}.txt` === name)) {
    rmSync(join(OUT_DIR, name));
    console.log(`[build_tour_files] removed orphan ${name}`);
  }
}

for (const f of files) writeFileSync(join(OUT_DIR, `${f.slug}.txt`), f._content);
writeFileSync(OUT_MANIFEST, nextManifest);

const totalKb = (files.reduce((n, f) => n + f.bytes, 0) / 1024).toFixed(1);
console.log(`[build_tour_files] wrote ${files.length} files (${totalKb} KB) pinned at ${sourceSha} (${sourceCommitDate})`);
