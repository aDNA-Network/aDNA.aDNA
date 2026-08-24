#!/usr/bin/env bash
# alias_guard_redtest.sh — red-prove the production-alias ancestry guard (HAUSSMANN P4.4a AC0 / V5).
#
# "A verification instrument is not believed until it has been demonstrated to fail."
# SIX instruments have shipped wrong on their first live run in this campaign, one of them
# (`check_live_headers.mjs`) a guard that printed OK for four months having read Vercel's SSO login
# page. This one is not believed until it refuses on demand — AND until it is shown to still ALLOW
# the two cases it must allow. A refusal instrument that refuses everything is as useless as one
# that refuses nothing, which is why cases 3 and 4 are CONTROLS and are counted as first-class.
#
# ⚠ IT DRIVES THE REAL SCRIPTS, NOT COPIES OF THEM. Cases 1–6 drive check_alias_ancestry.mjs; cases
# 7–8 drive `deploy_adna.sh prod --dry-run`, the actual deploy entrypoint. A red-test of a copy is
# not a red-test of the thing. `--stamp-url` is what makes that possible and is refused outside
# --dry-run — case 8 proves that refusal, so the affordance this harness needs cannot become a
# bypass on a path that publishes.
#
# ⚠ EVERY CASE ASSERTS ITS MUTATION ACTUALLY APPLIED, and every refusal must name the RIGHT BRANCH.
# A guard that aborts for the wrong reason passes a naive "did it exit non-zero" test while being
# wrong about the world — that is the P4.1 O2 lesson, where a mutation silently stopped matching and
# a green run was indistinguishable from a caught defect.
#
# ⛔ NOTHING IS BUILT AND NOTHING IS DEPLOYED. The local server serves mutated stamps on 127.0.0.1;
# --dry-run exits before `npx astro build`. The deploy freeze is untouched by this harness.
#
# Usage:  bash scripts/alias_guard_redtest.sh     (from site/)

set -uo pipefail

# ⛩ HAUSSMANN P4.4a A1 — UNDECLARED PRECONDITION, FOUND BY IT FIRING.
#
# Cases 7/7b/7c drive the REAL `deploy_adna.sh`, which opens with a CLEAN-TREE
# GUARD. So a dirty `site/src|public|vercel.json|astro.config.mjs` makes all
# three abort at rc=1 — for the right reason, by a guard doing its job — and the
# harness reported them as THREE FAILURES with no hint of the cause.
#
# Observed 2026-08-24: a one-line comment edit to astro.config.mjs turned a
# 13/13 baseline into 10/13, and the obvious reading ("the ancestry guard
# regressed") was exactly wrong. ⇒ A HARNESS WHOSE RESULT DEPENDS ON
# WORKING-TREE STATE MUST SAY SO BEFORE IT RUNS, or its own numbers become
# untrustworthy the moment anyone is mid-edit — which is always.
#
# This is the campaign's standing class one more time: not a wrong instrument,
# but a correct instrument reporting a precondition failure in the vocabulary of
# a subject failure. Sibling of the Docker port-reuse finding in
# item11_probe_redtest.sh, same session.
CLEAN_TREE_PATHS='site/src|site/public|site/vercel.json|site/astro.config.mjs'
_dirty="$(cd .. && git status --porcelain 2>/dev/null | grep -E "$CLEAN_TREE_PATHS" || true)"
if [ -n "$_dirty" ]; then
  echo
  echo "⛔ PRECONDITION NOT MET — this harness cannot run cases 7/7b/7c."
  echo "   deploy_adna.sh has a CLEAN-TREE GUARD and the tree is dirty:"
  printf '%s
' "$_dirty" | sed 's/^/     /'
  echo
  echo "   Those three cases will abort at rc=1 on the CLEAN-TREE branch, not on"
  echo "   the ancestry branch, and a 10/13 here means NOTHING ABOUT THE GUARD."
  echo "   Commit or stash the paths above, then re-run."
  echo
  exit 2
fi

cd "$(dirname "$0")/.." || exit 2

PORT="${ALIAS_GUARD_PORT:-4407}"
BASE="http://127.0.0.1:$PORT"
CHECKER="scripts/check_alias_ancestry.mjs"
TMP="$(mktemp -d)"
PASS=0; FAIL=0
SERVER_PID=""

cleanup() {
  [ -n "$SERVER_PID" ] && kill "$SERVER_PID" 2>/dev/null
  rm -rf "$TMP"
}
trap cleanup EXIT

# -- fixtures: real commits from this repo, not invented shas -----------------
HEAD_SHA="$(git rev-parse HEAD)"
ANCESTOR_SHA="$(git rev-parse HEAD~1)"
# A genuine DESCENDANT of HEAD, created as a dangling object via commit-tree: it is a real commit
# with HEAD as its parent, and NO ref points at it, so the working tree and every branch are
# untouched. Inventing a random sha would only ever exercise the UNKNOWN_COMMIT branch, never
# NOT_ANCESTOR — the two failures this guard must tell apart.
DESCENDANT_SHA="$(git commit-tree "HEAD^{tree}" -p HEAD -m "alias_guard_redtest synthetic descendant" 2>/dev/null)"
# A well-formed sha that this repo has genuinely never seen.
UNKNOWN_SHA="0123456789abcdef0123456789abcdef01234567"

for pair in "HEAD:$HEAD_SHA" "ANCESTOR:$ANCESTOR_SHA" "DESCENDANT:$DESCENDANT_SHA"; do
  n="${pair%%:*}"; v="${pair#*:}"
  if ! [[ "$v" =~ ^[0-9a-f]{40}$ ]]; then
    echo "HARNESS BUG: fixture $n is not a full sha ($v) — refusing to report results" >&2; exit 2
  fi
done
# The fixtures must have the relationships the cases depend on, or the cases test nothing.
git merge-base --is-ancestor "$ANCESTOR_SHA" "$HEAD_SHA" || { echo "HARNESS BUG: ANCESTOR is not an ancestor of HEAD" >&2; exit 2; }
git merge-base --is-ancestor "$DESCENDANT_SHA" "$HEAD_SHA" && { echo "HARNESS BUG: DESCENDANT is an ancestor of HEAD — case 2 would test nothing" >&2; exit 2; }
git cat-file -e "$UNKNOWN_SHA^{commit}" 2>/dev/null && { echo "HARNESS BUG: the 'unknown' sha exists in this repo" >&2; exit 2; }

# -- a local server whose response is whatever $TMP/response says -------------
cat > "$TMP/server.mjs" <<'SERVER'
import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
const [, , port, ctl] = process.argv;
createServer((req, res) => {
  const mode = readFileSync(ctl, 'utf8').trim();
  if (mode === '404')       { res.writeHead(404); return res.end('not found'); }
  if (mode === 'malformed') { res.writeHead(200, { 'content-type': 'application/json' }); return res.end('{"commit": nope,,'); }
  if (mode === 'redirect')  { res.writeHead(302, { location: 'https://vercel.com/sso-api' }); return res.end(); }
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify({ commit: mode, built_at: new Date().toISOString(), mode: 'prod' }));
}).listen(Number(port), '127.0.0.1');
SERVER

echo "prime" > "$TMP/ctl"
node "$TMP/server.mjs" "$PORT" "$TMP/ctl" & SERVER_PID=$!

# Wait for it, and FAIL LOUDLY if it never comes up — a harness that silently proceeds against a
# dead server would score every case as "refused" and report a perfect red. (P4.2's red test twice
# found defects in ITSELF before it could test a gate; this is that guard.)
for _ in $(seq 1 50); do
  curl -fsS --max-time 1 "$BASE/.well-known/adna-build.json" >/dev/null 2>&1 && break
  sleep 0.1
done
if ! curl -fsS --max-time 2 "$BASE/.well-known/adna-build.json" >/dev/null 2>&1; then
  echo "HARNESS BUG: fixture server never came up on $PORT — no results are trustworthy" >&2; exit 2
fi

# -- case runner -------------------------------------------------------------
# expect_rc: the exit code required.  expect_branch: a string the output MUST contain, so a refusal
# for the WRONG reason is a failure, not a pass.
run_case() {
  local n="$1" desc="$2" ctl="$3" expect_rc="$4" expect_branch="$5"
  echo "$ctl" > "$TMP/ctl"
  local out rc
  out="$(node "$CHECKER" "$BASE/.well-known/adna-build.json" . 2>&1)"; rc=$?
  if [ "$rc" -ne "$expect_rc" ]; then
    echo "  ✗ case $n ($desc): expected exit $expect_rc, got $rc"
    echo "$out" | sed 's/^/      /' | head -5
    FAIL=$((FAIL + 1)); return
  fi
  if ! echo "$out" | grep -qF -- "$expect_branch"; then
    echo "  ✗ case $n ($desc): exit $rc was right but the branch was wrong — expected output containing '$expect_branch'"
    echo "$out" | sed 's/^/      /' | head -5
    FAIL=$((FAIL + 1)); return
  fi
  echo "  ✓ case $n ($desc)"
  PASS=$((PASS + 1))
}

echo "== alias guard red-test — 5 mutations + 2 controls + 1 affordance-confinement case =="
echo

echo "-- mutations (must REFUSE, on the named branch) --"
run_case 1 "stamp names a commit absent from this repo" "$UNKNOWN_SHA"    1 "UNKNOWN_COMMIT"
run_case 2 "stamp names a DESCENDANT of HEAD"           "$DESCENDANT_SHA" 1 "NOT_ANCESTOR"
run_case 5 "endpoint 404s"                              "404"             2 "NO STAMP"
run_case 6 "endpoint returns malformed JSON"            "malformed"       1 "MALFORMED"
run_case 5b "endpoint redirects to an SSO page"         "redirect"        1 "REDIRECTED"

echo
echo "-- CONTROLS (must ALLOW — a guard that refuses everything is useless) --"
run_case 3 "stamp names HEAD exactly"        "$HEAD_SHA"     0 "alias ancestry OK"
run_case 4 "stamp names a true ancestor"     "$ANCESTOR_SHA" 0 "alias ancestry OK"

echo
echo "-- case 2's enumeration limb: the refusal must SAY what would be lost --"
echo "$DESCENDANT_SHA" > "$TMP/ctl"
LOST_OUT="$(node "$CHECKER" "$BASE/.well-known/adna-build.json" . 2>&1)"
if echo "$LOST_OUT" | grep -qF "synthetic descendant"; then
  echo "  ✓ case 2b (refusal enumerates the commits that would be rolled back)"; PASS=$((PASS + 1))
else
  echo "  ✗ case 2b: refusal did not list the lost commit — 'what would be lost' is the half that makes it actionable"
  FAIL=$((FAIL + 1))
fi

echo
echo "-- case 7: --force-rollback on mutation 2 PROCEEDS and RECORDS the override (real deploy_adna.sh) --"
echo "$DESCENDANT_SHA" > "$TMP/ctl"
C7="$(bash scripts/deploy_adna.sh prod --dry-run --stamp-url="$BASE/.well-known/adna-build.json" --force-rollback="$(date -u +%F)" 2>&1)"; C7RC=$?
if [ "$C7RC" -eq 0 ] && echo "$C7" | grep -qF "FORCE-ROLLBACK OVERRIDE ACCEPTED" && echo "$C7" | grep -qF "force_rollback=$(date -u +%F)"; then
  echo "  ✓ case 7 (proceeds past a known violation, and the override is in the record)"; PASS=$((PASS + 1))
else
  echo "  ✗ case 7: rc=$C7RC — expected 0, the acceptance banner, and force_rollback= in the would-be record"
  echo "$C7" | sed 's/^/      /' | tail -8
  FAIL=$((FAIL + 1))
fi

echo
echo "-- case 7b: WITHOUT the flag, the same stamp must ABORT (or case 7 proves nothing) --"
C7B="$(bash scripts/deploy_adna.sh prod --dry-run --stamp-url="$BASE/.well-known/adna-build.json" 2>&1)"; C7BRC=$?
if [ "$C7BRC" -ne 0 ] && echo "$C7B" | grep -qF "NOT_ANCESTOR"; then
  echo "  ✓ case 7b (control for case 7: the override is doing the work, not the dry-run)"; PASS=$((PASS + 1))
else
  echo "  ✗ case 7b: rc=$C7BRC — the guard did not refuse without the flag, so case 7 is meaningless"
  FAIL=$((FAIL + 1))
fi

echo
echo "-- case 7c: --bootstrap-stamp must NOT forgive an ancestry violation --"
# The bootstrap exception may only ever forgive a 404. If it could reach the REFUSED branch it would
# be the standing "no stamp ⇒ allow" the design forbids, wearing a different name.
C7C="$(bash scripts/deploy_adna.sh prod --dry-run --stamp-url="$BASE/.well-known/adna-build.json" --bootstrap-stamp="$(date -u +%F)" 2>&1)"; C7CRC=$?
if [ "$C7CRC" -ne 0 ] && echo "$C7C" | grep -qF "NOT_ANCESTOR"; then
  echo "  ✓ case 7c (bootstrap cannot reach the ancestry-violation branch)"; PASS=$((PASS + 1))
else
  echo "  ✗ case 7c: rc=$C7CRC — bootstrap forgave a real violation, which is the exact defect the split exit codes exist to prevent"
  FAIL=$((FAIL + 1))
fi

echo
echo "-- case 8: --stamp-url is REFUSED outside --dry-run (the affordance cannot become a bypass) --"
C8="$(bash scripts/deploy_adna.sh prod --stamp-url="$BASE/.well-known/adna-build.json" 2>&1)"; C8RC=$?
if [ "$C8RC" -ne 0 ] && echo "$C8" | grep -qF "only valid with --dry-run"; then
  echo "  ✓ case 8 (a deploy path cannot be pointed at an arbitrary stamp)"; PASS=$((PASS + 1))
else
  echo "  ✗ case 8: rc=$C8RC — --stamp-url was accepted on a path that can publish"
  FAIL=$((FAIL + 1))
fi

echo
echo "-- case 9: the STAMP WRITER is wired into the deploy path, before the deploy --"
# ⭐ THE GAP THIS CLOSES, found by asking what the other cases CANNOT see: every case above drives
# --dry-run, which exits BEFORE the injectors run. Delete the inject_build_stamp line from
# deploy_adna.sh and all twelve still pass — while the alias would never be stamped again, the guard
# would 404 forever, and every future deploy would demand a bootstrap flag until someone made the
# "no stamp ⇒ allow" branch the design forbids. The guard and the writer are one instrument; a
# harness that tests only the refusing half is the partial-pass-reporting-as-complete shape
# (convention 13's amendment, convention 14's family).
# The comment block above the call also names the file, so comment lines are excluded — with a
# POSIX class, not `\s`, which BSD grep does not support in a BRE and would silently degrade to a
# literal 's'. It happens to work anyway for column-0 comments, and "happens to work" is how the
# next person inherits a decorative assertion.
STAMP_LINE="$(grep -n 'inject_build_stamp\.mjs' scripts/deploy_adna.sh | grep -v ':[[:space:]]*#' | head -1 | cut -d: -f1)"
DEPLOY_LINE="$(grep -n 'npx vercel deploy' scripts/deploy_adna.sh | head -1 | cut -d: -f1)"
if [ -n "$STAMP_LINE" ] && [ -n "$DEPLOY_LINE" ] && [ "$STAMP_LINE" -lt "$DEPLOY_LINE" ]; then
  echo "  ✓ case 9 (deploy_adna.sh writes the stamp at line $STAMP_LINE, before deploying at line $DEPLOY_LINE)"
  PASS=$((PASS + 1))
else
  echo "  ✗ case 9: inject_build_stamp.mjs is not invoked before the deploy (stamp=${STAMP_LINE:-absent} deploy=${DEPLOY_LINE:-absent})"
  echo "      Without it the alias is never stamped, the guard 404s forever, and the bootstrap"
  echo "      exception becomes the standing branch AC0 exists to prevent."
  FAIL=$((FAIL + 1))
fi

echo
echo "=============================================="
echo "  alias guard red-test: $PASS passed, $FAIL failed"
echo "=============================================="
[ "$FAIL" -eq 0 ] || exit 1
