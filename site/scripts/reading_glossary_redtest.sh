#!/usr/bin/env bash
# reading_glossary_redtest.sh — red-prove gate-48 (HAUSSMANN P4.5b O3, convention 14 · V5).
#
# gate-48's glossary limb went GREEN on its first run, because O3 fixed the five findings before
# gating them. That is precisely the state in which a real assertion and a no-op are
# indistinguishable — the state gate-44 was in, and the state gate-38 was in when P4.2 red-proved
# it and found two of its own predicates were decorative.
#
# So each of gate-48's claims gets a planted mutation aimed at it, and each must turn THAT claim
# red:
#   G48a  instrument controls  — (1) break a self-test case; a classifier that has stopped
#                                    separating must not read as a clean site
#   G48b  census coverage      — (2) hide a twin; a route that drops out of the corpus IMPROVES
#                                    the average, so it must be loud
#                                (3) shrink the graded frame below its floor
#   G48d  exclusion arithmetic — (4) grow the AMBIGUOUS list; this is the cheapest possible way to
#                                    fake the gate green, so it is the case that matters most
#   G48e  first-use linking    — (5) strip one glossary link from one first-contact twin
#
# ⚠ EVERY CASE ASSERTS ITS MUTATION ACTUALLY APPLIED before it believes the red. A mutation that
# silently fails to match produces a green run that reads exactly like "the gate did not catch it"
# — the alias-guard harness hit exactly that and reported a false pass.
#
# ⚠ AXIS ISOLATION IS DELIBERATE. Case 5 breaks ONLY the linking claim and leaves the frame, the
# term set and the self-tests intact; case 4 breaks ONLY the arithmetic and leaves every link in
# place. A mutation that trips several limbs at once proves the gate reacts to devastation, not
# that it measures what it claims to measure.
#
# Mutations are applied to `dist/` (build output, regenerable) and to the two measurement scripts;
# every case restores from a backup in a trap, and a FINAL CONTROL re-runs the gate clean to prove
# the tree was actually left as found.
#
# Usage:  bash scripts/reading_glossary_redtest.sh      (from site/, after a build)

set -uo pipefail
cd "$(dirname "$0")/.." || exit 2

SPEC="tests/gates/gate-48-reading-glossary.spec.ts"
CENSUS="scripts/reading_census.mjs"
GLOSS="scripts/glossary_first_use.mjs"
TWIN="dist/get-started.md"          # a first-contact twin carrying exactly one checkable link
BAK="$(mktemp -d)"
PASS=0; FAIL=0

cleanup() {
  [ -f "$BAK/census.mjs" ] && cp "$BAK/census.mjs" "$CENSUS"
  [ -f "$BAK/gloss.mjs" ] && cp "$BAK/gloss.mjs" "$GLOSS"
  [ -f "$BAK/twin.md" ] && cp "$BAK/twin.md" "$TWIN"
  [ -f "$TWIN.hidden" ] && mv "$TWIN.hidden" "$TWIN"
  rm -rf "$BAK"
}
trap cleanup EXIT

[ -f "$SPEC" ]   || { echo "HARNESS BUG: $SPEC not found" >&2; exit 2; }
[ -f "$CENSUS" ] || { echo "HARNESS BUG: $CENSUS not found" >&2; exit 2; }
[ -f "$GLOSS" ]  || { echo "HARNESS BUG: $GLOSS not found" >&2; exit 2; }
[ -f "$TWIN" ]   || { echo "HARNESS BUG: $TWIN not found — run \`npx astro build\` first" >&2; exit 2; }

cp "$CENSUS" "$BAK/census.mjs"
cp "$GLOSS"  "$BAK/gloss.mjs"
cp "$TWIN"   "$BAK/twin.md"

# The victim twin must actually carry the link case 5 strips, or case 5 proves nothing.
grep -q "(/glossary/glossary-triad" "$TWIN" || {
  echo "HARNESS BUG: $TWIN carries no glossary-triad link — case 5 would be vacuous" >&2; exit 2; }

run_gate() { npx playwright test "$SPEC" --grep "$1" --reporter=line 2>&1; }
# ⚠ NEVER `run_gate ... | grep -q` UNDER `set -o pipefail`. grep -q exits on the first match and
# SIGPIPEs playwright, so pipefail reports the PIPELINE as failed and a green gate reads as red.
# Capture, then match. (token_census_redtest.sh's control caught exactly this.)
gate_passed() { local out; out="$(run_gate "$1")"; case "$out" in *" passed"*) return 0 ;; esac; return 1; }
gate_failed() { local out; out="$(run_gate "$1")"; case "$out" in *" failed"*) return 0 ;; esac; return 1; }

restore_all() {
  cp "$BAK/census.mjs" "$CENSUS"; cp "$BAK/gloss.mjs" "$GLOSS"; cp "$BAK/twin.md" "$TWIN"
  [ -f "$TWIN.hidden" ] && mv "$TWIN.hidden" "$TWIN"
  return 0
}

# -- control 1: the gate must be GREEN before anything is planted --------------
# Without this, every red below could be a pre-existing failure rather than a caught mutation.
echo "== control 1: gate-48 green on the unmutated tree =="
if gate_passed "G48"; then
  echo "  ✓ control 1 (gate-48 passes clean)"; PASS=$((PASS + 1))
else
  echo "  ✗ control 1: gate-48 is NOT green before mutation — every result below is meaningless"
  run_gate "G48" | tail -20
  echo "  reading/glossary red-test: aborted"; exit 2
fi

# -- case 1: G48a — a self-test that has stopped separating must fail ----------
echo
echo "== G48a: a broken instrument control must fail the gate, not pass it =="
restore_all
python3 - "$GLOSS" <<'PY'
import sys
p = sys.argv[1]; s = open(p).read()
# Break link detection: make hasGlossaryLink always report "linked". Every violation vanishes —
# which is exactly what a silently-dead classifier looks like from the outside.
old = 'return new RegExp(`\\\\[[^\\\\]]*\\\\]\\\\(/glossary/${esc(slug)}/?\\\\)`, "i").test(text);'
assert old in s, "hasGlossaryLink body did not match"
open(p, "w").write(s.replace(old, "return true; // MUTATION", 1))
PY
if ! grep -q "return true; // MUTATION" "$GLOSS"; then
  echo "  ✗ HARNESS BUG: mutation did not apply to $GLOSS"; FAIL=$((FAIL + 1))
else
  # Prove the instrument itself now fails its own controls, before asking the gate.
  if node "$GLOSS" --selftest >/dev/null 2>&1; then
    echo "  ✗ HARNESS BUG: selftest still passes with link detection stubbed — the CONTROLS are the defect"
    FAIL=$((FAIL + 1))
  elif gate_failed "G48a"; then
    echo "  ✓ case 1 (self-test broken → G48a red)"; PASS=$((PASS + 1))
  else
    echo "  ✗ case 1: instrument controls failed and G48a stayed GREEN — the gate trusts a dead classifier"
    FAIL=$((FAIL + 1))
  fi
fi

# -- case 2: G48b — a twin that drops out must be loud, not silently averaged --
echo
echo "== G48b: a route with no twin must fail the corpus floor =="
restore_all
mv "$TWIN" "$TWIN.hidden"
if [ -f "$TWIN" ]; then
  echo "  ✗ HARNESS BUG: $TWIN still present after mv — mutation did not apply"; FAIL=$((FAIL + 1))
else
  MEASURED="$(node "$CENSUS" --dist dist --json)"
  case "$MEASURED" in *'"missing"'*'get-started'*) : ;; *)
    echo "  ✗ HARNESS BUG: census does not report the route as missing — the script, not the gate, is the defect"
    FAIL=$((FAIL + 1)); MEASURED="" ;;
  esac
  if [ -n "$MEASURED" ]; then
    if gate_failed "G48b"; then
      echo "  ✓ case 2 (twin missing → G48b red)"; PASS=$((PASS + 1))
    else
      echo "  ✗ case 2: a route left the corpus and G48b stayed GREEN — the average silently improved"
      FAIL=$((FAIL + 1))
    fi
  fi
fi
restore_all

# -- case 3: G48b — a shrunken graded frame must not still report a trend ------
echo
echo "== G48b: a graded frame below its floor must fail =="
restore_all
python3 - "$CENSUS" <<'PY'
import sys, re
p = sys.argv[1]; s = open(p).read()
s2 = re.sub(r"export const SCOPE_21 = \[[^\]]*\]",
            'export const SCOPE_21 = ["/", "/get-started"] // MUTATION', s, count=1)
assert s2 != s, "SCOPE_21 did not match"
open(p, "w").write(s2)
PY
if ! grep -q "// MUTATION" "$CENSUS"; then
  echo "  ✗ HARNESS BUG: mutation did not apply to $CENSUS"; FAIL=$((FAIL + 1))
else
  if gate_failed "G48b"; then
    echo "  ✓ case 3 (frame 21 → 2 → G48b red)"; PASS=$((PASS + 1))
  else
    echo "  ✗ case 3: the frame shrank by 19 routes and G48b stayed GREEN — the floor is decorative"
    FAIL=$((FAIL + 1))
  fi
fi
restore_all

# -- case 4: G48d — growing the exclusion list must not buy a green -----------
# THE CASE THAT MATTERS MOST. Moving an inconvenient term into AMBIGUOUS is the cheapest way to
# make G48e go green without touching a single sentence of copy.
echo
echo "== G48d: quietly growing the AMBIGUOUS list must fail the arithmetic =="
restore_all
python3 - "$GLOSS" <<'PY'
import sys
p = sys.argv[1]; s = open(p).read()
old = '  "Template": "ordinary-English homograph",'
assert old in s, "AMBIGUOUS list did not match"
open(p, "w").write(s.replace(old, old + '\n  "Triad": "MUTATION — an inconvenient term hidden",', 1))
PY
if ! grep -q "MUTATION — an inconvenient term hidden" "$GLOSS"; then
  echo "  ✗ HARNESS BUG: mutation did not apply to $GLOSS"; FAIL=$((FAIL + 1))
else
  CHECKABLE="$(node "$GLOSS" --dist dist --json | python3 -c 'import json,sys; print(json.load(sys.stdin)["checkable"])')"
  if [ "$CHECKABLE" != "19" ]; then
    echo "  ✗ HARNESS BUG: checkable is $CHECKABLE, expected 19 — the mutation did not reach the set"
    FAIL=$((FAIL + 1))
  elif gate_failed "G48d"; then
    echo "  ✓ case 4 (checkable 20 → 19 → G48d red)"; PASS=$((PASS + 1))
  else
    echo "  ✗ case 4: the exclusion list grew and G48d stayed GREEN — the gate can be faked in one line"
    FAIL=$((FAIL + 1))
  fi
fi
restore_all

# -- case 5: G48e — a stripped first-use link must go red ---------------------
echo
echo "== G48e: a term meeting a reader with no route to its definition must fail =="
restore_all
python3 - "$TWIN" <<'PY'
import sys, re
p = sys.argv[1]; s = open(p).read()
# Unwrap the link, KEEPING the word — so the term is still mentioned and only its reachability
# is removed. Deleting the word instead would prove nothing: no mention, no violation.
s2 = re.sub(r"\[([^\]]*)\]\(/glossary/glossary-triad/?\)", r"\1", s, count=1)
assert s2 != s, "no glossary-triad link to unwrap"
open(p, "w").write(s2)
PY
if grep -q "(/glossary/glossary-triad" "$TWIN"; then
  echo "  ✗ HARNESS BUG: link still present after unwrap — mutation did not apply"; FAIL=$((FAIL + 1))
elif ! grep -qi "triad" "$TWIN"; then
  echo "  ✗ HARNESS BUG: the WORD went too — a page with no mention has no violation to catch"; FAIL=$((FAIL + 1))
else
  if gate_failed "G48e"; then
    echo "  ✓ case 5 (first-use link stripped → G48e red)"; PASS=$((PASS + 1))
  else
    echo "  ✗ case 5: a bare first use survived and G48e stayed GREEN — the linking claim is unenforced"
    FAIL=$((FAIL + 1))
  fi
fi
restore_all

# -- control 2: the tree was left exactly as found ----------------------------
# Not a formality. Case 2 moves a file and case 5 rewrites one; a restore that silently failed
# would leave every later run of the suite reporting on a mutated tree.
echo
echo "== control 2: gate-48 green again after every restore =="
if gate_passed "G48"; then
  echo "  ✓ control 2 (tree restored, gate-48 green)"; PASS=$((PASS + 1))
else
  echo "  ✗ control 2: gate-48 is NOT green after restore — THE TREE IS DIRTY"
  run_gate "G48" | tail -20
  FAIL=$((FAIL + 1))
fi

echo
echo "reading/glossary red-test: $PASS passed, $FAIL failed (5 mutations + 2 controls)"
[ "$FAIL" -eq 0 ] || exit 1
