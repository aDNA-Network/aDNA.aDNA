#!/usr/bin/env node
/* ============================================================================
 * check_alias_ancestry.mjs — refuse to publish a tree that does not contain the
 * commit currently serving the alias.
 *
 * THE INVARIANT (HAUSSMANN AC0 / F-u):
 *
 *   Never publish a tree that does not contain the commit currently serving the
 *   production alias.
 *
 * WHY NOT A LEASE, which is what F-u originally asked for: replay F-s with a
 * perfect single-writer lease held throughout — lemur acquires, deploys,
 * releases; this node acquires, deploys 922519c, releases; v0.4.3 and the Arch
 * [adna] repo are un-published ANYWAY. THE TWO DEPLOYS NEVER RACED. They were
 * sequential and still destructive. A mutex reasons about TIME; the defect is
 * about CONTENT. Design + reasoning: artifacts/p4_4/f_u_alias_guard_design.md.
 *
 * WHY A SEPARATE FILE FROM deploy_adna.sh: so the red-test can drive it against
 * a local server with mutated stamps. The alternative — an env var that
 * repoints the guard's URL — would be a bypass sitting in the deploy path
 * forever, which is the shape of defect this whole criterion exists to retire.
 * deploy_adna.sh passes the hardcoded production alias and nothing else can.
 *
 * ⚠ IT ASSERTS IT REACHED THE THING IT CHECKS (convention 14). Redirects are
 * NOT followed. check_live_headers.mjs printed "OK — no drift" for four months
 * having read Vercel's SSO login page, because it followed redirects and checked
 * header names only. A guard that parses a login page as "no stamp" would fail
 * open on every protected deployment.
 *
 * EXIT CODES — the distinction is load-bearing, not cosmetic:
 *   0  OK           the live commit is an ancestor of HEAD (or is HEAD)
 *   1  REFUSED      a real violation. NOT overridable by --bootstrap-stamp.
 *   2  NO_STAMP     404: the alias carries no stamp yet. Bootstrap-overridable.
 *
 * Splitting 2 from 1 is what keeps the bootstrap exception from becoming the
 * standing "no stamp ⇒ allow" branch the design forbids: the bootstrap flag can
 * only ever forgive a 404, never an ancestry violation.
 *
 * Usage: node check_alias_ancestry.mjs <stamp-url> [repo-dir]
 * ==========================================================================*/

import { execFileSync } from 'node:child_process';

const OK = 0, REFUSED = 1, NO_STAMP = 2;

const stampUrl = process.argv[2];
const repoDir = process.argv[3] || process.cwd();
if (!stampUrl) { console.error('usage: node check_alias_ancestry.mjs <stamp-url> [repo-dir]'); process.exit(REFUSED); }

const refuse = (branch, msg) => {
  console.error(`\n⛔ DEPLOY REFUSED — ${branch}\n${msg}\n`);
  process.exit(REFUSED);
};

const git = (args) => execFileSync('git', args, { cwd: repoDir, encoding: 'utf8' }).trim();

// -- 1. read the stamp, asserting we reached it ------------------------------
let res;
try {
  res = await fetch(stampUrl, { redirect: 'manual', signal: AbortSignal.timeout(15000) });
} catch (e) {
  refuse('UNREACHABLE', `Could not read ${stampUrl}: ${e.message}\n` +
    `Failing closed. If the alias is genuinely down, that is a reason to stop deploying, not to proceed blind.`);
}

if (res.status >= 300 && res.status < 400) {
  refuse('REDIRECTED', `${stampUrl} answered ${res.status} → ${res.headers.get('location')}\n` +
    `Redirects are not followed on purpose: a login or SSO page parses as "no stamp" and would fail OPEN.\n` +
    `This is exactly how check_live_headers.mjs read Vercel's SSO page and reported OK for four months.`);
}

if (res.status === 404) {
  console.error(`\n⚠ NO STAMP — ${stampUrl} returns 404.\n` +
    `The live build predates the ancestry guard, so it cannot say which commit it is.\n` +
    `This is the expected state on the FIRST run only. It is forgiven by a single dated,\n` +
    `operator-signed --bootstrap-stamp=YYYY-MM-DD, never by a standing branch in this script.\n`);
  process.exit(NO_STAMP);
}

if (!res.ok) {
  refuse('UNREACHABLE', `${stampUrl} answered HTTP ${res.status}. Failing closed.`);
}

// -- 2. parse it strictly ----------------------------------------------------
// A malformed stamp must never become a null that compares equal to nothing.
let stamp;
try { stamp = JSON.parse(await res.text()); } catch (e) {
  refuse('MALFORMED', `${stampUrl} is not valid JSON: ${e.message}\nRefusing rather than treating an unparseable stamp as absent.`);
}
const live = stamp?.commit;
if (typeof live !== 'string' || !/^[0-9a-f]{40}$/.test(live)) {
  refuse('MALFORMED', `${stampUrl} has no usable .commit (got ${JSON.stringify(live)}).\n` +
    `Expected a full 40-char sha. Refusing rather than guessing.`);
}

// -- 3. do we even know this commit? -----------------------------------------
let head;
try { head = git(['rev-parse', 'HEAD']); } catch (e) { refuse('NO_HEAD', `git rev-parse HEAD failed in ${repoDir}: ${e.message}`); }

let known = true;
try { git(['cat-file', '-e', `${live}^{commit}`]); } catch { known = false; }

if (!known) {
  refuse('UNKNOWN_COMMIT',
    `The live build was made from commit ${live.slice(0, 7)}, which THIS CHECKOUT HAS NEVER SEEN.\n` +
    `Another checkout is deploying. Reconcile before publishing — deploying now would un-publish\n` +
    `whatever that commit contains, which is precisely what happened to v0.4.3 and the Arch [adna]\n` +
    `repo on 2026-08-23.\n\n` +
    `  Likely fix: have the other checkout push, then \`git fetch\` and rebuild from a tree holding both halves.`);
}

// -- 4. ancestry -------------------------------------------------------------
let isAncestor = true;
try { git(['merge-base', '--is-ancestor', live, head]); } catch { isAncestor = false; }

if (!isAncestor) {
  let lost = '';
  try { lost = git(['log', '--oneline', `${head}..${live}`]); } catch { /* best effort */ }
  refuse('NOT_ANCESTOR',
    `The live build (${live.slice(0, 7)}) is NOT an ancestor of HEAD (${head.slice(0, 7)}).\n` +
    `Publishing this tree would ROLL BACK work that is currently live.\n\n` +
    `What would be lost:\n${lost ? lost.split('\n').map((l) => `    ${l}`).join('\n') : '    (could not enumerate — the commit is known but not reachable from HEAD)'}\n\n` +
    `  If this IS an intentional rollback, it must be explicit and recorded:\n` +
    `      ./scripts/deploy_adna.sh prod --force-rollback=$(date -u +%F)\n` +
    `  which requires an operator GO and writes the override into deploy_log.txt.`);
}

console.log(`alias ancestry OK: live ${live.slice(0, 7)} is an ancestor of HEAD ${head.slice(0, 7)}` +
  (live === head ? ' (identical — re-deploying the same tree)' : ''));
process.exit(OK);
