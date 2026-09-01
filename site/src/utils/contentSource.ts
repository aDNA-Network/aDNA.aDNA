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
 * WHY IT REFUSES TO GUESS. The date is derived from git history, and there is more than one way
 * for git to be unable to answer. In a shallow clone (`actions/checkout`'s default) every file's
 * "last commit" is the single commit that exists, so every page would confidently display the
 * same wrong date. If git refuses to run at all, there is no date to display. Both cases yield
 * `undefined` and the layout omits the line, because a false date rendered in the UI is worse
 * than no date — it is the precise failure this campaign exists to end.
 *
 * ⛩ WHY IT ALSO SAYS *WHICH* (HAUSSMANN GR-2 · `F-x` · AC-2). Omitting was always right. Saying
 * nothing about *why* was not. This module used to compute
 *
 *     const isShallow = git(['rev-parse', '--is-shallow-repository']) !== 'false'
 *
 * over a `git()` that swallowed every error into `null` with **stderr discarded** — so a shallow
 * clone and a git that simply refused produced the identical value, and were unrecoverably the
 * same fact downstream. `gate-33-freshness` was red on `main` for six consecutive runs printing
 * "set fetch-depth: 0", a remedy `gates.yml` had already applied, for a condition that had nothing
 * to do with fetch depth. **The line that made the cause unknowable was the same line that had to
 * change to make it knowable.**
 *
 * So: three states, not a boolean; `git()` captures stderr instead of discarding it; and every
 * build prints exactly one `freshness:` line naming the state it hit and quoting git's own words.
 * It WARNS, it does not throw — surfacing the reason is the goal, and adding a hard build failure
 * to a lane whose whole problem was going unread is not (ratified at the GR-2 signature).
 *
 * The state computation is a pure function over a probe result (`freshnessStateFrom`) so the
 * discrimination is testable without a real shallow clone and without a real refused repository —
 * `gate-52-freshness-state.spec.ts`, which names that surface on its own face. The integration
 * evidence, in CI's own container image, is artifacts/gr_2/.
 */
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';

const REPO_ROOT = resolve(process.cwd(), '..');

/** Public repo that serves both the vault and this site. */
export const REPO_URL = 'https://github.com/aDNA-Network/aDNA.aDNA';
/** The clone-and-run image, where the normative standard actually lives. */
export const STANDARD_REPO_URL = 'https://github.com/aDNA-Network/aDNA';

/** What git said, or why it could not say anything. The `reason` is the half that used to be thrown away. */
export type GitResult = { ok: true; stdout: string } | { ok: false; reason: string };

function git(args: string[]): GitResult {
  try {
    // stderr is PIPED, not ignored. Discarding it is what made six red CI runs undiagnosable.
    const stdout = execFileSync('git', args, { cwd: REPO_ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    return { ok: true, stdout: stdout.trim() };
  } catch (thrown) {
    const captured = (thrown as { stderr?: string | Buffer } | null)?.stderr;
    const stderr = (typeof captured === 'string' ? captured : (captured?.toString() ?? '')).trim();
    // Never return an empty reason: a blank explanation reads as "no problem" to whoever is
    // debugging at 2am, which is the failure mode this whole change exists to remove.
    return { ok: false, reason: stderr || (thrown as Error)?.message || 'git failed and said nothing' };
  }
}

/**
 * The three states the freshness layer can be in. `shallow` and `git-unavailable` both omit dates —
 * that part never differed — but they need DIFFERENT fixes, and only one of them is fetch-depth.
 */
export type FreshnessState =
  | { kind: 'healthy' }
  | { kind: 'shallow' }
  | { kind: 'git-unavailable'; reason: string };

/**
 * Pure: probe result in, state out. No I/O, so the discrimination can be exercised directly.
 *
 * ⚠ A git that fails is NOT a shallow clone. That conflation is `F-x` itself, and it lived in the
 * `!== 'false'` this function replaces: a failing git returns no stdout at all, `'' !== 'false'`,
 * and the old boolean read `true` — i.e. "shallow" — for a repository that was nothing of the sort.
 */
export function freshnessStateFrom(probe: GitResult): FreshnessState {
  if (!probe.ok) return { kind: 'git-unavailable', reason: probe.reason };
  return probe.stdout === 'false' ? { kind: 'healthy' } : { kind: 'shallow' };
}

/**
 * The one line the build prints. Each state names what happened and, where a remedy is actually
 * knowable, names that too.
 *
 * ⭐ The shallow line KEEPS `fetch-depth: 0`, deliberately. `F-x`(b) is not "the string fetch-depth
 * appeared"; it is "a remedy was prescribed for a cause it cannot fix". Where fetch-depth IS the
 * cure, saying so is the correct behaviour, and gate-52 carries a control asserting exactly that so
 * this does not get over-corrected into silence.
 */
export function describeFreshnessState(state: FreshnessState): string {
  switch (state.kind) {
    case 'healthy':
      return 'freshness: git answered — last-updated dates derived from history.';
    case 'shallow':
      return 'freshness: SHALLOW CLONE — git knows one commit, so every date would be the same wrong date. Dates omitted. If this is CI, the fix is fetch-depth: 0.';
    case 'git-unavailable':
      return `freshness: GIT COULD NOT ANSWER — dates omitted. This is NOT a shallow clone and fetch-depth will not fix it. git said: ${state.reason}`;
  }
}

let dates: Map<string, string> | null = null;

/**
 * One `git log` pass over the whole content tree, mapping repo-relative path -> last commit date.
 * Doing this per file would be ~90 process spawns per build.
 *
 * The probe lives HERE rather than at module scope on purpose: at module scope it ran git as an
 * import side effect (so merely importing this file to test it executed git), and it could not see
 * a `git log` that failed after a healthy probe — which is a third way to end up dateless and
 * deserves the same named diagnosis rather than silence.
 */
function loadDates(): Map<string, string> {
  const map = new Map<string, string>();
  let state = freshnessStateFrom(git(['rev-parse', '--is-shallow-repository']));

  if (state.kind === 'healthy') {
    // src/data is scanned alongside src/content because the zero-install tour renders committed
    // data files rather than collection entries (their bytes are vendored verbatim — see
    // scripts/build_tour_files.mjs for why they cannot be MDX). Adding a path only adds entries to
    // the map; every existing page resolves exactly as before.
    const log = git(['log', '--format=%cs', '--name-only', '--', 'site/src/content', 'site/src/data']);
    if (log.ok) {
      let currentDate = '';
      for (const line of log.stdout.split('\n')) {
        if (/^\d{4}-\d{2}-\d{2}$/.test(line)) currentDate = line;
        else if (line.trim() && currentDate && !map.has(line)) map.set(line, currentDate);
      }
    } else {
      // The probe succeeded and the log did not. Same outcome for the reader, different cause, and
      // the cause is what six unread red runs were missing.
      state = { kind: 'git-unavailable', reason: log.reason };
      map.clear();
    }
  }

  // Exactly one line per build (loadDates is memoised by its caller). It is a warning rather than a
  // log because the two failure states need to survive a quiet CI log, and it prints in the healthy
  // state too — a diagnostic that only appears when something is wrong cannot be checked for.
  //
  // ⚠ THE LEADING NEWLINE IS LOAD-BEARING AND WAS ADDED AFTER MEASURING, NOT BEFORE. This fires
  // during page rendering, and Astro emits its per-route progress without a trailing newline, so
  // the first version of this line rendered as
  //   ├─ /community/proposals/aep-1/index.htmlfreshness: git answered — ...
  // — findable by grep, and invisible to a human scrolling a CI log. A diagnostic written to be
  // read in a CI log that cannot be read in a CI log is this mission's own defect class, one turn
  // after fixing it. It is NOT part of describeFreshnessState's return value: that string is
  // asserted verbatim by gate-52 and pinned by the red-test, and presentation does not belong in it.
  console.warn(`\n${describeFreshnessState(state)}`);
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
