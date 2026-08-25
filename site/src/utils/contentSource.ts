/**
 * contentSource.ts — build-time provenance for doc pages (HAUSSMANN P2.3 O2).
 *
 * Two facts every documentation page should carry and this site carried on none of them
 * (VITRUVIUS D4): when it was last touched, and where to go to change it.
 *
 * WHY GIT AND NOT FRONTMATTER. Exactly 3 of 92 content files declare an `updated:` date. A
 * frontmatter-driven freshness layer would therefore be blank on 97% of the corpus, and
 * backfilling 89 dates by hand would mean inventing most of them. Git already knows, precisely,
 * and its answer is verifiable by anyone with the repo.
 *
 * WHY IT REFUSES TO GUESS. `actions/checkout` clones with `fetch-depth: 1` by default. In a
 * shallow clone every file's "last commit" is the single commit that exists, so every page would
 * confidently display the same wrong date. That is worse than no date at all — it is a false
 * claim rendered in the UI, which is the precise failure this campaign exists to end. So the
 * shallow case, and any file git has never seen, yield `undefined` and the layout omits the line.
 */
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';

const REPO_ROOT = resolve(process.cwd(), '..');

/** Public repo that serves both the vault and this site. */
export const REPO_URL = 'https://github.com/aDNA-Network/aDNA.aDNA';
/** The clone-and-run image, where the normative standard actually lives. */
export const STANDARD_REPO_URL = 'https://github.com/aDNA-Network/aDNA';

function git(args: string[]): string | null {
  try {
    return execFileSync('git', args, { cwd: REPO_ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return null;
  }
}

/** A shallow clone cannot answer "when did this file last change" — it can only appear to. */
const isShallow = git(['rev-parse', '--is-shallow-repository']) !== 'false';

let dates: Map<string, string> | null = null;

/**
 * One `git log` pass over the whole content tree, mapping repo-relative path -> last commit date.
 * Doing this per file would be ~90 process spawns per build.
 */
function loadDates(): Map<string, string> {
  const map = new Map<string, string>();
  if (isShallow) return map;
  // src/data is scanned alongside src/content because the zero-install tour renders committed
  // data files rather than collection entries (their bytes are vendored verbatim — see
  // scripts/build_tour_files.mjs for why they cannot be MDX). Adding a path only adds entries to
  // the map; every existing page resolves exactly as before.
  const log = git(['log', '--format=%cs', '--name-only', '--', 'site/src/content', 'site/src/data']);
  if (!log) return map;
  let currentDate = '';
  for (const line of log.split('\n')) {
    if (/^\d{4}-\d{2}-\d{2}$/.test(line)) currentDate = line;
    else if (line.trim() && currentDate && !map.has(line)) map.set(line, currentDate);
  }
  return map;
}

/** ISO date (YYYY-MM-DD) of the last commit touching this file, or undefined if unknowable. */
export function lastUpdated(repoRelPath: string): string | undefined {
  if (!dates) dates = loadDates();
  return dates.get(repoRelPath);
}

export interface PageSource {
  /** GitHub edit URL for the file that produces this page. */
  editUrl: string;
  /** YYYY-MM-DD, omitted when git cannot answer honestly. */
  updated?: string;
  /** Overrides the default "Edit this page" wording where the real source is elsewhere. */
  editLabel?: string;
}

/**
 * Provenance for a page rendered from a content-collection entry.
 *
 * Takes the path from the entry's own `filePath` rather than rebuilding it from collection + id.
 * The two agree today — no entry is nested — but a reconstruction silently produces a 404 edit
 * link the first time someone adds `docs/advanced/thing.mdx`, and nothing would fail until a
 * reader clicked it. Asking the entry cannot drift.
 */
export function sourceForEntry(entry: { filePath?: string }): PageSource {
  if (!entry.filePath) {
    throw new Error('content entry has no filePath — cannot build an honest edit link');
  }
  const repoRelPath = `site/${entry.filePath.replace(/^\.?\//, '')}`;
  return {
    editUrl: `${REPO_URL}/edit/main/${repoRelPath}`,
    updated: lastUpdated(repoRelPath),
  };
}

/**
 * Provenance for the specification pages.
 *
 * The section pages under src/content/spec are generated, and the file they are generated from is
 * itself a mirror of the standard. Pointing "edit this page" at either would send a contributor to
 * a file whose changes are overwritten by the next projection run. The normative document lives in
 * the standard repo, so that is where the link goes, and the label says so rather than implying
 * the page in front of the reader is the editable one.
 */
export function sourceForSpec(): PageSource {
  return {
    editUrl: `${STANDARD_REPO_URL}/blob/main/.adna/what/docs/adna_standard.md`,
    updated: lastUpdated('site/src/content/reference/specification.mdx'),
    editLabel: 'Edit the standard',
  };
}

/**
 * Provenance for the zero-install tour pages.
 *
 * Same reasoning as sourceForSpec: these pages are vendored copies, so "edit this page" must point
 * at the file that actually governs the bytes — in the standard repo, at the pinned commit rather
 * than at main. Pinning matters more here than anywhere else on the site: the page's entire claim
 * is "these are the bytes at that commit", and a link to a moving branch would quietly stop
 * agreeing with the text beneath it.
 *
 * `updated` tracks the vendored data, not the source repo's own history — the honest answer to
 * "when did this page last change" is when we last re-vendored, and git can answer that from this
 * repo, which is the same shallow-clone-safe guarantee every other page gets.
 */
export function sourceForTour(blobUrl: string): PageSource {
  return {
    editUrl: blobUrl,
    updated: lastUpdated('site/src/data/tour_manifest.json'),
    editLabel: 'View this file in the standard',
  };
}
