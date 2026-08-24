#!/usr/bin/env node
/* ============================================================================
 * inject_build_stamp.mjs — make the production alias say which commit it is.
 *
 * THE INCIDENT THIS EXISTS FOR (HAUSSMANN F-s, 2026-08-23):
 *
 *   Two checkouts of aDNA.aDNA exist — this node and `lemur`. Each held commits
 *   the other lacked. lemur's --prod deploy rolled back six days of Haussmann
 *   surfaces; the restore from here then un-published v0.4.3 and the Arch [adna]
 *   repo (3 × 404, observed). NEITHER CHECKOUT MISBEHAVED. Both passed the
 *   clean-tree guard; both assumed they were the only deployer.
 *
 * WHY THE DEPLOY LOG COULD NOT HAVE CAUGHT IT: `deploy_adna.sh` already stamps
 * `tree=$(git rev-parse --short HEAD)` — into scripts/deploy_log.txt, which is
 * PER-CHECKOUT. This node's log ended correctly at the P3.4 record while ten
 * deploys it knew nothing about had landed. A LOG ON THE MACHINE THAT DEPLOYED
 * IS NOT EVIDENCE AVAILABLE TO THE MACHINE ABOUT TO DEPLOY. So the same stamp is
 * published onto the ARTIFACT, where any checkout can read it:
 *
 *   /.well-known/adna-build.json  ->  { commit, built_at, mode }
 *
 * That file is the input to the ancestry guard in deploy_adna.sh, which refuses
 * to publish a tree not containing the commit currently serving the alias. This
 * tool only PUBLISHES the fact; it enforces nothing.
 *
 * ⚠ WHY THE `.vercel/output/static` CHECK IS A HARD ABORT AND NOT A mkdir (F-g):
 * the Vercel adapter copies dist -> .vercel/output/static AFTER `astro:build:done`.
 * F-g exists because a comment in the tree described a mechanism that was not the
 * one actually protecting the output — it walked a path that, at hook time, held
 * either nothing or the PREVIOUS build. Creating the directory here would produce
 * a stamp in a tree the adapter is about to overwrite or never copy: a stamp that
 * looks perfect locally and is absent in production. So: assert, never assume.
 * This runs AFTER `npx astro build` has fully returned, exactly like its siblings.
 *
 * ⚠ FIELD NAME, DEVIATING BY ONE WORD FROM THE RATIFIED DESIGN, DELIBERATELY:
 * artifacts/p4_4/f_u_alias_guard_design.md specifies `deployed_at`. This emits
 * `built_at`, because the stamp is written post-build and PRE-UPLOAD — at write
 * time no deploy has happened, and a field asserting one would be a claim about
 * the future in a campaign whose first convention is that claims move DOWN to
 * verifiability. The guard contract is unchanged: it reads `.commit` only.
 *
 * COMPANION TO inject_headers.mjs / inject_installer_headers.mjs /
 * inject_redirects.mjs / inject_negotiation.mjs, and separate from all of them
 * for the reason they are separate from each other: a tool with one job aborts
 * loudly instead of silently half-applying.
 *
 * Usage: node inject_build_stamp.mjs <surface-dir> <prod|preview>
 * Exit: 0 stamped · 1 abort (any guard)
 * ==========================================================================*/

import { readFileSync, writeFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';

const die = (m) => { console.error(`inject_build_stamp ABORT: ${m}`); process.exit(1); };

const surfaceDir = process.argv[2];
const mode = process.argv[3];
if (!surfaceDir) die('usage: node inject_build_stamp.mjs <surface-dir> <prod|preview>');
if (mode !== 'prod' && mode !== 'preview') die(`mode must be "prod" or "preview", got ${JSON.stringify(mode)}`);

// -- guard: the adapter must ALREADY have copied. Never mkdir this one (F-g). --
const staticDir = join(surfaceDir, '.vercel', 'output', 'static');
if (!existsSync(staticDir)) {
  die(`${staticDir} not found — the Vercel adapter copies dist here AFTER astro:build:done, so this ` +
      `tool must run after a completed \`npx astro build\`. Creating it would publish a stamp into a ` +
      `tree production never sees (F-g's exact failure). Run the build first.`);
}
if (!statSync(staticDir).isDirectory()) die(`${staticDir} exists but is not a directory`);

// A stamp beside an empty output directory would be a lie with a timestamp on it.
const indexPath = join(staticDir, 'index.html');
if (!existsSync(indexPath)) {
  die(`${staticDir} exists but holds no index.html — refusing to stamp an output tree that has no ` +
      `site in it. This is the "assert you reached the thing you claim to check" rule (convention 14).`);
}

// -- the commit, resolved from git rather than passed in ----------------------
// Taking it as an argv would let a caller stamp any string; the whole value of the
// stamp is that it is the commit this artifact was actually built from.
let commit;
try {
  commit = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: surfaceDir, encoding: 'utf8' }).trim();
} catch (e) {
  die(`git rev-parse HEAD failed in ${surfaceDir}: ${e.message}`);
}
if (!/^[0-9a-f]{40}$/.test(commit)) die(`git rev-parse HEAD returned something that is not a full sha: ${JSON.stringify(commit)}`);

const stamp = { commit, built_at: new Date().toISOString(), mode };

const wellKnown = join(staticDir, '.well-known');
mkdirSync(wellKnown, { recursive: true });          // safe: INSIDE an asserted output tree
const stampPath = join(wellKnown, 'adna-build.json');
writeFileSync(stampPath, JSON.stringify(stamp, null, 2) + '\n');

// -- re-assert rather than trust: read back what will actually be served ------
// The sibling tools all verify their own edit on the way out. An unreadable or
// wrong stamp is worse than none: the guard's "no stamp" branch fails CLOSED,
// but a malformed one is the shape that invites a silent-allow fallback later.
let readBack;
try { readBack = JSON.parse(readFileSync(stampPath, 'utf8')); } catch (e) { die(`stamp written but unreadable: ${e.message}`); }
if (readBack.commit !== commit) die(`stamp read-back mismatch: wrote ${commit}, read ${readBack.commit}`);
if (readBack.mode !== mode) die(`stamp read-back mismatch on mode: wrote ${mode}, read ${readBack.mode}`);

console.log(`inject_build_stamp: /.well-known/adna-build.json -> ${commit.slice(0, 7)} (${mode})`);
