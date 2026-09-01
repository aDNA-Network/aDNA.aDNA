#!/usr/bin/env bash
# console_clean_redtest.sh — red-prove gate-42 (HAUSSMANN P4.4a A2, convention 14).
#
# gate-42 went GREEN on its first run: 224 routes × 2 themes, zero console errors. That is exactly
# the state in which a real assertion and a no-op are indistinguishable — and it is a sharper case
# than usual, because the finding that scoped this gate (F20) turned out to be FALSE. A gate built
# for a defect that does not exist, going green, proves nothing whatsoever about itself.
#
# Each of gate-42's five claims gets a planted mutation aimed at it, and each must turn it red
# VIA THAT CLAIM'S OWN ASSERTION (see "assertion identity" below — this harness did not always check
# which assertion fired, and was wrong about one of them for two weeks):
#   G42a  frame derivation — (5) break the walk; an empty derivation must THROW, never report clean
#   G42b  console/pageerror — (1) a planted console.error
#                             (2) a planted uncaught exception
#                             (3) delete an asset the pages request → a 404 the CONSOLE reports
#   G42b  status guard      — (4) a route that stops returning 200 (a 404/500 page is reliably quiet)
#   G42b  same-origin asset — (6) a request the page CANCELS — the only thing that produces a
#                                 network-level failure on a healthy server. Added at GR-3, when
#                                 this assertion was found never to have been red-proven at all.
#   G42b  settle guard      — (—) NOT red-proven, deliberately, and said plainly rather than implied:
#                                 a RACE has no deterministic mutation. Its evidence is the mechanism
#                                 identified at the object, a CI rerun that passed on byte-identical
#                                 input, and the fact that its expiry is now an asserted condition
#                                 instead of a swallowed timeout. Authoring a sixth standing
#                                 instrument to chase it is what conventions 15/16 forbid.
#
# ⚠ EVERY CASE ASSERTS ITS MUTATION ACTUALLY APPLIED before it believes the red. A mutation that
# silently fails to match produces a green run that reads exactly like "the gate did not catch it".
# The sibling alias-guard harness hit precisely that and reported a false pass.
#
# ⚠ MUTATION CASES RUN THE DARK SWEEP ONLY (`--grep "dark mode"`). Each planted defect is
# theme-independent — an injected script throws in both palettes — so running both doubles the wall
# clock and proves nothing extra. The CONTROLS run the whole gate, both themes, which is where the
# both-theme claim is actually exercised. Stated because a narrowed run that goes unmentioned is the
# partial-pass-reporting-as-complete shape this campaign keeps finding.
#
# Mutations are applied to `dist/` (build output, regenerable) and to the spec's walk; every case
# restores in a trap, and a FINAL CONTROL re-runs the gate clean to prove the tree was left as found.
#
# Usage:  bash scripts/console_clean_redtest.sh     (from site/, after a build)

set -uo pipefail
cd "$(dirname "$0")/.." || exit 2

SPEC="tests/gates/gate-42-console-clean.spec.ts"
VICTIM="dist/about/index.html"          # an ordinary content page, in the derived frame
BAK="$(mktemp -d)"
PASS=0; FAIL=0
ASSET=""                                 # resolved below, from what the homepage actually requests

cleanup() {
  [ -f "$BAK/spec.ts" ] && cp "$BAK/spec.ts" "$SPEC"
  if [ -f "$BAK/victim.html" ]; then chmod u+w "$VICTIM" 2>/dev/null; cp "$BAK/victim.html" "$VICTIM"; chmod 644 "$VICTIM"; fi
  [ -n "$ASSET" ] && [ -f "$BAK/asset.bin" ] && cp "$BAK/asset.bin" "$ASSET"
  rm -rf "$BAK"
}
trap cleanup EXIT

[ -f "$SPEC" ] || { echo "HARNESS BUG: $SPEC not found" >&2; exit 2; }
[ -f "$VICTIM" ] || { echo "HARNESS BUG: $VICTIM not found — run \`npx astro build\` first" >&2; exit 2; }

# The asset is DERIVED from the built homepage, not named here — a hardcoded hash goes stale on the
# next build and the case would then delete nothing and prove nothing.
ASSET_REL="$(grep -o '/_astro/[A-Za-z0-9_.-]*\.css' dist/index.html | head -1)"
[ -n "$ASSET_REL" ] || { echo "HARNESS BUG: no /_astro/*.css reference found in dist/index.html" >&2; exit 2; }
ASSET="dist${ASSET_REL}"
[ -f "$ASSET" ] || { echo "HARNESS BUG: $ASSET referenced by the homepage but absent from dist/" >&2; exit 2; }

cp "$SPEC" "$BAK/spec.ts"
cp "$VICTIM" "$BAK/victim.html"
cp "$ASSET" "$BAK/asset.bin"

run_gate() { npx playwright test "$SPEC" --grep "$1" --reporter=line 2>&1; }
# ⚠ NEVER `run_gate ... | grep -q` UNDER `set -o pipefail`. grep -q exits on the first match and
# SIGPIPEs playwright, so pipefail reports the PIPELINE as failed — and a green gate then reads as
# red. Capture, then match. (token_census_redtest.sh's control caught exactly this.)
gate_passed() { local out; out="$(run_gate "$1")"; case "$out" in *" passed"*) return 0 ;; esac; return 1; }

# ⭐⭐ ASSERTION IDENTITY (GR-3, F-z). `gate_failed` used to ask only "did the gate go red?" — and a
# red is not a proof unless you know WHICH assertion produced it. This harness reported 5/5 for two
# weeks while case 3, LABELLED as the same-origin-asset case, was reddening the CONSOLE assertion:
# deleting a file yields a 404 RESPONSE, not a network failure, Chromium logs that as a console
# error, `hits` is asserted first, and a non-soft `expect` throws immediately — so `assetFailures`
# was never once evaluated. Its first firing in its entire life was a FALSE POSITIVE on `main`.
#
# Convention 14 says an instrument is not believed until it has been demonstrated to fail. This is
# the clause that was missing: **a demonstration is only worth what it can attribute.** Every case
# below now names the assertion it aims at, and a case that reds via a DIFFERENT one is a HARNESS
# BUG — reported as such rather than counted as a pass.
#
# The signatures are distinctive substrings of each `expect` message in the spec. They are matched,
# not derived, and that is a real (small) coupling: reword a message in the spec and the matching
# case fails LOUDLY here rather than silently degrading to the old "any red will do".
SIG_STATUS="did not return 200"                          # badStatus
SIG_CONSOLE="console error(s)/uncaught exception(s)"     # hits
SIG_UNSETTLED="still requesting after"                   # unsettled (GR-3)
SIG_ASSET="same-origin request(s) failed"                # assetFailures
SIG_FRAME="refusing to report green"                     # builtRoutes() throw

# gate_failed_via <grep-pattern> <expected-assertion-signature>
#   0 = red via the EXPECTED assertion · 1 = green (the assertion is decorative)
#   2 = red via the WRONG assertion — a harness bug, and the exact defect this replaced
LAST_WHY=""
gate_failed_via() {
  local out; out="$(run_gate "$1")"; LAST_WHY=""
  case "$out" in *" failed"*) ;; *) return 1 ;; esac
  case "$out" in *"$2"*) return 0 ;; esac
  # Red, but not where we aimed. Name what actually fired so the bug is legible at a glance.
  for sig in "$SIG_STATUS" "$SIG_CONSOLE" "$SIG_UNSETTLED" "$SIG_ASSET" "$SIG_FRAME"; do
    case "$out" in *"$sig"*) LAST_WHY="$sig" ;; esac
  done
  [ -n "$LAST_WHY" ] || LAST_WHY="(no known assertion signature matched — the spec's wording may have changed)"
  return 2
}

# judge <case label> <grep> <signature> <assertion name> <message if the gate stayed green>
judge() {
  gate_failed_via "$2" "$3"; local rc=$?
  if [ "$rc" -eq 0 ]; then
    echo "  ✓ $1 → red via the $4 assertion"; PASS=$((PASS + 1))
  elif [ "$rc" -eq 2 ]; then
    echo "  ✗ $1: HARNESS BUG — red via \"$LAST_WHY\", NOT the $4 assertion this case aims at."
    echo "        A red that cannot be attributed proves nothing about the assertion under test."
    FAIL=$((FAIL + 1))
  else
    echo "  ✗ $1: $5"; FAIL=$((FAIL + 1))
  fi
}

restore_all() {
  cp "$BAK/spec.ts" "$SPEC"
  chmod u+w "$VICTIM" 2>/dev/null; cp "$BAK/victim.html" "$VICTIM"; chmod 644 "$VICTIM"
  cp "$BAK/asset.bin" "$ASSET"
}

inject_into_victim() {  # $1 = raw HTML to insert before </body>
  python3 - "$VICTIM" "$1" <<'PY'
import sys
p, frag = sys.argv[1], sys.argv[2]
s = open(p).read()
i = s.rfind('</body>')
assert i != -1, "no </body> in the victim page"
open(p, 'w').write(s[:i] + frag + s[i:])
PY
}

# -- control 1: the gate must be GREEN before anything is planted --------------
echo "== control 1: gate-42 green on the unmutated tree (both themes) =="
if gate_passed "G42"; then
  echo "  ✓ control 1 (gate-42 passes clean)"; PASS=$((PASS + 1))
else
  echo "  ✗ control 1: gate-42 is NOT green before mutation — every result below is meaningless"
  run_gate "G42" | tail -20
  echo "  console clean red-test: aborted"; exit 2
fi

# -- case 1: a planted console.error -------------------------------------------
echo
echo "== G42b: a planted console.error must turn the gate red =="
restore_all
inject_into_victim '<script>console.error("redtest-planted-console-error");</script>'
if ! grep -q "redtest-planted-console-error" "$VICTIM"; then
  echo "  ✗ HARNESS BUG: the console.error injection did not apply"; FAIL=$((FAIL + 1))
else
  judge "case 1 (console.error on /about/)" "dark mode" "$SIG_CONSOLE" "console" \
    "a console.error was planted and gate-42 stayed GREEN — page.on('console') is decorative"
fi
restore_all

# -- case 2: a planted uncaught exception --------------------------------------
echo
echo "== G42b: an uncaught exception must turn the gate red =="
inject_into_victim '<script>throw new Error("redtest-planted-pageerror");</script>'
if ! grep -q "redtest-planted-pageerror" "$VICTIM"; then
  echo "  ✗ HARNESS BUG: the throw injection did not apply"; FAIL=$((FAIL + 1))
else
  # Same signature as case 1: `pageerror` and `console.error` both land in `hits`, which is one
  # assertion with two feeds. Named here so the shared signature reads as understood, not sloppy.
  judge "case 2 (uncaught throw on /about/)" "dark mode" "$SIG_CONSOLE" "console/pageerror" \
    "an uncaught exception was planted and gate-42 stayed GREEN — page.on('pageerror') is decorative"
fi
restore_all

# -- case 3: a DELETED same-origin asset — caught by the CONSOLE, not the asset check -------------
# ⭐ RE-AIMED AND RE-LABELLED (GR-3). This case used to be titled "a missing same-origin asset must
# turn the gate red" and was counted as the red-proof of the `assetFailures` assertion. It is not,
# and never was: a deleted file yields a 404 RESPONSE, so no `requestfailed` fires at all; Chromium
# logs the 404 as a console error; `hits` throws first and `assetFailures` is never reached. Probed
# directly on 2026-09-01 — the red reads "225 console error(s)", and the same-origin message does not
# appear anywhere in the output.
#
# The case is KEPT, because a deleted asset genuinely must turn the gate red and this proves it does.
# What changed is the CLAIM: it red-proves the console assertion's reach, not the asset assertion.
# Case 6 now covers `assetFailures`, which had never been demonstrated to fail even once.
echo
echo "== G42b: a deleted same-origin asset must turn the gate red (via the console's 404) =="
rm -f "$ASSET"
if [ -f "$ASSET" ]; then
  echo "  ✗ HARNESS BUG: $ASSET still present after rm"; FAIL=$((FAIL + 1))
else
  judge "case 3 (deleted $ASSET_REL)" "dark mode" "$SIG_CONSOLE" "console" \
    "a requested same-origin asset was deleted and gate-42 stayed GREEN"
fi
restore_all

# -- case 4: a route that stops returning 200 ------------------------------------
# The sharpest of the five: a 404/500 page is RELIABLY QUIET, so without this guard a site could
# break every route and the console sweep would report a perfect green.
echo
echo "== G42b: a non-200 route must fail rather than read as quiet =="
chmod 000 "$VICTIM"
if [ -r "$VICTIM" ]; then
  echo "  ✗ HARNESS BUG: $VICTIM is still readable after chmod 000 (running as root?) — case proves nothing"
  FAIL=$((FAIL + 1))
else
  judge "case 4 (/about/ unreadable → non-200)" "dark mode" "$SIG_STATUS" "status-guard" \
    "a route stopped serving and gate-42 stayed GREEN — the status guard is decorative"
fi
chmod u+w "$VICTIM" 2>/dev/null; restore_all

# -- case 5: the frame derivation itself -----------------------------------------
echo
echo "== G42a: a broken walk must throw, never report a clean sweep =="
python3 - "$SPEC" <<'PY'
import sys
p = sys.argv[1]
s = open(p).read()
# Match a filename nothing is called: the walk finds zero pages.
s2 = s.replace("e.name === 'index.html'", "e.name === 'index.html.nonesuch'", 1)
assert s2 != s, "walk predicate not found"
open(p, 'w').write(s2)
PY
if ! grep -q "index.html.nonesuch" "$SPEC"; then
  echo "  ✗ HARNESS BUG: the walk mutation did not apply"; FAIL=$((FAIL + 1))
else
  judge "case 5 (walk finds 0 pages)" "G42" "$SIG_FRAME" "frame-derivation throw" \
    "the walk derived ZERO routes and gate-42 stayed GREEN — this is the vacuity the coverage floor exists to prevent, and it is not working"
fi
restore_all

# -- case 6: the same-origin ASSET assertion, red-proved for the first time ever ------------------
# ⭐⭐ THE ASSERTION THIS CASE AIMS AT HAD NEVER ONCE BEEN DEMONSTRATED TO FAIL (GR-3, F-z). Case 3
# was believed to cover it and does not (see there). Its first firing in its entire life was a FALSE
# POSITIVE on `main` — six mermaid chunks that gate-42 had cancelled by navigating away mid-import,
# reported as the site's own broken assets.
#
# A 404 cannot red it: a 404 is a RESPONSE, and `requestfailed` fires only on a network-level
# failure. The one thing that reliably produces a same-origin `requestfailed` on a healthy server is
# a request the PAGE ITSELF cancels — which is also exactly the class the traversal fix must NOT
# suppress. So this case is the fix's control as well as the assertion's red-proof: it must be red
# BEFORE the settle fix and red AFTER it. If the fix ever silences it, the fix removed the
# assertion's teeth rather than the sweep's own race, and this case says so.
#
# The URL is DERIVED (largest built JS, cache-busted so it is a real round trip), never hardcoded —
# a pinned hash goes stale on the next build and the case would abort a request for nothing.
echo
echo "== G42b: a same-origin request the page cancels must red the ASSET assertion =="
BIG_REL="$(cd dist/_astro && ls -S *.js 2>/dev/null | head -1)"
if [ -z "$BIG_REL" ]; then
  echo "  ✗ HARNESS BUG: no .js found under dist/_astro to abort"; FAIL=$((FAIL + 1))
else
  inject_into_victim "<script>const c=new AbortController();fetch('/_astro/${BIG_REL}?gr3-abort=1',{signal:c.signal}).catch(()=>{});c.abort();</script>"
  if ! grep -q "gr3-abort=1" "$VICTIM"; then
    echo "  ✗ HARNESS BUG: the abort injection did not apply"; FAIL=$((FAIL + 1))
  else
    judge "case 6 (page aborts its own request for /_astro/$BIG_REL)" "dark mode" "$SIG_ASSET" "same-origin asset" \
      "a same-origin request was cancelled and gate-42 stayed GREEN — the assetFailures assertion is decorative, which is the state it was in from the day it was written until this case was added"
  fi
fi
restore_all

# -- control 2: the tree is genuinely restored -------------------------------------
# Not ceremony. Case 3 deletes a build asset and case 4 chmods a page; if either leaked, every red
# above is unattributable and the next suite run would inherit a broken dist/.
echo
echo "== control 2: gate-42 green again after every restore (both themes) =="
if gate_passed "G42"; then
  echo "  ✓ control 2 (tree restored, gate-42 green)"; PASS=$((PASS + 1))
else
  echo "  ✗ control 2: gate-42 is NOT green after restore — this harness LEAKED a mutation"
  run_gate "G42" | tail -20
  FAIL=$((FAIL + 1))
fi

echo
echo "================================================================"
echo "console clean red-test: $PASS pass / $FAIL fail  (6 mutations + 2 controls)"
[ "$FAIL" -eq 0 ] || exit 1
