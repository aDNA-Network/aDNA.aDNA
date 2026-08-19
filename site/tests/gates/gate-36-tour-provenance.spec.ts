/**
 * gate-36 — zero-install tour provenance (HAUSSMANN P2.5 O1).
 *
 * /get-started/what-your-agent-reads/ publishes the standard's own files verbatim so a sceptical
 * evaluator can audit the prompt-ware before running it. That page makes three claims a reader
 * cannot check from the browser alone, and each one is a way for the page to become a lie quietly:
 *
 *   1. "these bytes are the standard's bytes"        -> drift, if someone edits the vendored copy
 *   2. "they are the bytes at commit <sha>"          -> a pin that does not resolve
 *   3. "this is what a NEW workspace contains"       -> a source outside .adna/, i.e. this node
 *
 * None of the three fails the build on its own. So they are asserted here, against the real
 * checkout, every suite run.
 *
 * (3) is not hypothetical. The obvious reading of "the workspace CLAUDE.md router" points at
 * ~/aDNA/CLAUDE.md — this operator's live router, which names five vaults it explicitly marks
 * local-only, NO remote. Vendoring it would publish the private fleet inventory. The generator
 * constrains sources to .adna/; this gate re-asserts it on the committed output and separately
 * scans dist for the vault names themselves, so the guard holds even if the generator is rewritten.
 *
 * (2) has a live cautionary instance in this repo: install_truth.json records
 * `template_sha: fd32fc7`, which is not a resolvable object in the checkout it describes (the
 * generator's idempotency guard froze it, and .adna's origin was later repointed). Harmless there,
 * because nothing renders it. Fatal here. Hence an explicit resolvability assertion rather than a
 * presence check.
 */
import { test, expect } from '@playwright/test';
import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, resolve, isAbsolute } from 'node:path';
import { createHash } from 'node:crypto';

const SITE_ROOT = process.cwd();
const DIST = join(SITE_ROOT, 'dist');
const TOUR_DIR = join(SITE_ROOT, 'src/data/tour');
const MANIFEST = join(SITE_ROOT, 'src/data/tour_manifest.json');
const TEMPLATE_ROOT = resolve(SITE_ROOT, '..', '..', '.adna');
const TOUR_BASE = 'get-started/what-your-agent-reads';

const manifest = JSON.parse(readFileSync(MANIFEST, 'utf8'));

/** Vaults the workspace router marks local-only / NO remote. None may reach a public surface. */
const PRIVATE_VAULTS = ['GOTFN', 'Bearly', 'CakeHealth', 'aiLP-Dataroom', 'RareGraph'];

/**
 * The fabricated strings cut at P2.5 O1 (R-118). Regression guard: these were authored, not
 * emitted — searched .adna/ in full at the time, zero hits — so any reappearance means someone
 * re-invented a transcript rather than recording one.
 */
const INVENTED_STRINGS = ['Loaded CLAUDE.md', 'what problem does it solve'];

function htmlFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...htmlFiles(p));
    else if (entry.name.endsWith('.html')) out.push(p);
  }
  return out;
}

test.describe('gate-36 zero-install tour provenance', () => {
  test('the vendored files are still the standard\'s files', () => {
    test.skip(!existsSync(TEMPLATE_ROOT), 'standard checkout absent (CI) — nothing to compare against');
    // Throws (non-zero exit) listing MISSING / STALE / ORPHAN if anything drifted.
    const out = execFileSync('node', ['scripts/build_tour_files.mjs', '--check'], {
      cwd: SITE_ROOT,
      encoding: 'utf8',
    });
    expect(out).toContain('OK');
  });

  test('the pinned commit resolves to a commit in the standard checkout', () => {
    test.skip(!existsSync(TEMPLATE_ROOT), 'standard checkout absent (CI)');
    expect(manifest.source_sha_full, 'manifest carries no pin').toBeTruthy();
    // The install_truth `fd32fc7` class: a recorded sha that no longer names an object. A page
    // that prints an unresolvable commit above the bytes it describes is asserting something
    // nobody — including us — can verify.
    const type = execFileSync('git', ['cat-file', '-t', manifest.source_sha_full], {
      cwd: TEMPLATE_ROOT,
      encoding: 'utf8',
    }).trim();
    expect(type, `pin ${manifest.source_sha} does not resolve to a commit`).toBe('commit');
  });

  test('every vendored file is sourced from inside the standard tree', () => {
    for (const f of manifest.files) {
      expect(isAbsolute(f.source_path), `${f.slug}: source_path must be relative`).toBe(false);
      expect(f.source_path.split('/'), `${f.slug}: source_path must not escape upward`).not.toContain('..');
      const abs = resolve(TEMPLATE_ROOT, f.source_path);
      expect(abs.startsWith(TEMPLATE_ROOT + '/'), `${f.slug}: resolves outside .adna/`).toBe(true);
    }
  });

  test('the committed bytes match the hashes the pages publish', () => {
    for (const f of manifest.files) {
      const txt = join(TOUR_DIR, `${f.slug}.txt`);
      expect(existsSync(txt), `missing src/data/tour/${f.slug}.txt`).toBe(true);
      const raw = readFileSync(txt, 'utf8');
      const sha = createHash('sha256').update(raw).digest('hex');
      // The detail page prints this hash and tells the reader to `shasum -a 256` their own clone.
      expect(sha, `${f.slug}: manifest hash does not describe the committed bytes`).toBe(f.sha256);
      expect(Buffer.byteLength(raw, 'utf8'), `${f.slug}: byte count drifted`).toBe(f.bytes);
    }
  });

  test('every vendored file has an annotation and every annotation has a file', async () => {
    // A card with no "what to look for" is bare generated copy on the one page that exists to be
    // read sceptically; an annotation with no file is a page that silently vanished.
    const { TOUR_ANNOTATIONS } = await import('../../src/data/tour_annotations');
    const slugs = manifest.files.map((f: { slug: string }) => f.slug).sort();
    expect(Object.keys(TOUR_ANNOTATIONS).sort()).toEqual(slugs);
    for (const [slug, note] of Object.entries(TOUR_ANNOTATIONS)) {
      for (const field of ['title', 'what', 'why', 'lookFor'] as const) {
        expect((note as Record<string, string>)[field]?.trim(), `${slug}.${field} is empty`).toBeTruthy();
      }
    }
  });

  test('each rendered page carries its file byte-exact', () => {
    for (const f of manifest.files) {
      const page = join(DIST, TOUR_BASE, f.slug, 'index.html');
      expect(existsSync(page), `missing built page for ${f.slug} — run npx astro build`).toBe(true);
      const html = readFileSync(page, 'utf8');
      const m = /<pre class="tour-file"[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/.exec(html);
      expect(m, `${f.slug}: no verbatim block in the rendered page`).not.toBeNull();
      // Reverse the escaping the renderer applies. `&amp;` must go last or it double-decodes.
      const rendered = m![1]
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, '&');
      const source = readFileSync(join(TOUR_DIR, `${f.slug}.txt`), 'utf8');
      expect(rendered, `${f.slug}: the page does not show the file verbatim`).toBe(source);
    }
  });

  test('the tour does not name a local-only vault', () => {
    // SCOPED TO THE TOUR, DELIBERATELY. The first draft of this assertion swept all of dist and
    // failed on nine legitimate pages: these vaults have public registry records by design, and
    // /vaults/<slug>/ pages are the operator-gated publication that pt19 governs. Their NAMES are
    // not the secret. What would be a leak is the tour sourcing from this node's live router
    // instead of the standard — so the name check belongs here, where a wrong source would show up.
    const offenders: string[] = [];
    for (const file of htmlFiles(join(DIST, TOUR_BASE))) {
      const html = readFileSync(file, 'utf8');
      for (const vault of PRIVATE_VAULTS) {
        if (html.includes(vault)) offenders.push(`${file.replace(DIST + '/', '')}: ${vault}`);
      }
    }
    expect(offenders, 'the tour must vendor the image\'s router, never this node\'s').toEqual([]);
  });

  test('no page carries the node router\'s private markers', () => {
    // The site-wide half of the same guard, using text that could only come from an operator's
    // live workspace router — not from the standard, and not from the registry. This is what
    // distinguishes a wrong-source vendor from ordinary published vault metadata, so it can stay
    // site-wide without generating the false positives a bare name match produced.
    const ROUTER_MARKERS = ['local-only NO remote', 'Node Vault Detection', 'Operations Detection'];
    const offenders: string[] = [];
    for (const file of htmlFiles(DIST)) {
      const html = readFileSync(file, 'utf8');
      for (const marker of ROUTER_MARKERS) {
        if (html.includes(marker)) offenders.push(`${file.replace(DIST + '/', '')}: "${marker}"`);
      }
    }
    expect(offenders, 'workspace-router text must never be vendored to a public page').toEqual([]);
  });

  test('the fabricated transcript has not come back (R-118)', () => {
    const offenders: string[] = [];
    for (const file of htmlFiles(DIST)) {
      const html = readFileSync(file, 'utf8');
      for (const s of INVENTED_STRINGS) {
        if (html.includes(s)) offenders.push(`${file.replace(DIST + '/', '')}: "${s}"`);
      }
    }
    expect(offenders, 'invented terminal output was cut at P2.5 O1; record a real run instead').toEqual([]);
  });
});
