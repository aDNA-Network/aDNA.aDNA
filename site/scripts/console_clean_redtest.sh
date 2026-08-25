#!/usr/bin/env bash
# console_clean_redtest.sh — red-prove gate-42 (HAUSSMANN P4.4a A2, convention 14).
#
# gate-42 went GREEN on its first run: 224 routes × 2 themes, zero console errors. That is exactly
# the state in which a real assertion and a no-op are indistinguishable — and it is a sharper case
# than usual, because the finding that scoped this gate (F20) turned out to be FALSE. A gate built
# for a defect that does not exist, going green, proves nothing whatsoever about itself.
#
# Each of gate-42's four claims gets a planted mutation aimed at it, and each must turn it red:
#   G42a  frame derivation — (5) break the walk; an empty derivation must THROW, never report clean
#   G42b  console/pageerror — (1) a planted console.error
#                             (2) a planted uncaught exception
#   G42b  status guard      — (4) a route that stops returning 200 (a 404/500 page is reliably quiet)
#   G42b  same-origin asset — (3) delete an asset the pages actually request
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
gate_failed() { local out; out="$(run_gate "$1")"; case "$out" in *" failed"*) return 0 ;; esac; return 1; }

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
elif gate_failed "dark mode"; then
  echo "  ✓ case 1 (console.error on /about/ → gate red)"; PASS=$((PASS + 1))
else
  echo "  ✗ case 1: a console.error was planted and gate-42 stayed GREEN — page.on('console') is decorative"
  FAIL=$((FAIL + 1))
fi
restore_all

# -- case 2: a planted uncaught exception --------------------------------------
echo
echo "== G42b: an uncaught exception must turn the gate red =="
inject_into_victim '<script>throw new Error("redtest-planted-pageerror");</script>'
if ! grep -q "redtest-planted-pageerror" "$VICTIM"; then
  echo "  ✗ HARNESS BUG: the throw injection did not apply"; FAIL=$((FAIL + 1))
elif gate_failed "dark mode"; then
  echo "  ✓ case 2 (uncaught throw on /about/ → gate red)"; PASS=$((PASS + 1))
else
  echo "  ✗ case 2: an uncaught exception was planted and gate-42 stayed GREEN — page.on('pageerror') is decorative"
  FAIL=$((FAIL + 1))
fi
restore_all

# -- case 3: a same-origin asset the pages actually request -----------------------
echo
echo "== G42b: a missing same-origin asset must turn the gate red =="
rm -f "$ASSET"
if [ -f "$ASSET" ]; then
  echo "  ✗ HARNESS BUG: $ASSET still present after rm"; FAIL=$((FAIL + 1))
elif gate_failed "dark mode"; then
  echo "  ✓ case 3 (deleted $ASSET_REL → gate red)"; PASS=$((PASS + 1))
else
  echo "  ✗ case 3: a requested same-origin asset was deleted and gate-42 stayed GREEN"
  FAIL=$((FAIL + 1))
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
elif gate_failed "dark mode"; then
  echo "  ✓ case 4 (/about/ unreadable → non-200 → gate red)"; PASS=$((PASS + 1))
else
  echo "  ✗ case 4: a route stopped serving and gate-42 stayed GREEN — the status guard is decorative"
  FAIL=$((FAIL + 1))
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
elif gate_failed "G42"; then
  echo "  ✓ case 5 (walk finds 0 pages → gate red, not green-on-nothing)"; PASS=$((PASS + 1))
else
  echo "  ✗ case 5: the walk derived ZERO routes and gate-42 stayed GREEN — this is the vacuity"
  echo "           the coverage floor exists to prevent, and it is not working"
  FAIL=$((FAIL + 1))
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
echo "console clean red-test: $PASS pass / $FAIL fail  (5 mutations + 2 controls)"
[ "$FAIL" -eq 0 ] || exit 1
