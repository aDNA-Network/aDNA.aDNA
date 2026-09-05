#!/usr/bin/env bash
# typeset_emission_redtest.sh — red-prove gate-39's GR-5 O3 measurement emission (convention 14).
#
# WHAT IS UNDER TEST, AND WHAT IS NOT.
# O3 added an EMISSION to gate-39, not an assertion about the site: every run now writes the worst
# rendered size it measured per pinned figure, so `n` runs in CI's own environment produce a
# DISTRIBUTION instead of the single anecdote F-ab(b) rests on. The emission moves no pin — which is
# what keeps GR-5's AC-5 ("no gate is loosened in the dark") satisfiable alongside AC-3.
#
# One new assertion came with it — G39f, "the emission is non-vacuous" — because an accumulator that
# silently records nothing produces an empty file that reads exactly like a clean measurement. That is
# B0's `control that passed for the wrong reason` and O1's self-test W8 (`a grep matching zero tests is
# a HARNESS ERROR, never a pass`), and it is the single cheapest way this objective could hand the
# operator a confident wrong pin.
#
# ⭐ ONE MUTATION PER CLAIM, AND EACH NAMES THE ASSERTION IT AIMS AT (GR-3's F-z clause: a
# demonstration is only worth what it can attribute). A red via a different assertion is a HARNESS
# BUG, reported as such rather than counted as a pass.
#
#   1  G39f              disable the accumulator          → G39f reds; nothing else does
#   2  write-on-red      raise a pin above the measurement → the FINDINGS assertion reds, AND the
#                                                            measurement file is still written
#   3  min-not-last      flip the comparison to `>`        → the emitted value is no longer the MIN,
#                                                            and THE GATE STAYS GREEN (see below)
#   4  control           unmutated                         → green, file present, values correct
#
# ⚠ CASE 3 IS THE ONE THAT CANNOT BE JUDGED BY PASS/FAIL, AND SAYING SO IS THE POINT. "The emission
# records the minimum" is a claim about FILE CONTENT; no assertion in the gate depends on it, so a
# mutation cannot turn the gate red and a harness that only asked "did it go red?" would score this
# claim as untested while reporting 4/4. It is judged by reading the artifact instead — which is
# convention 18 applied to a red-test: say what the instrument checks and whether that is the surface
# the claim is about.
#
# Usage:  bash scripts/typeset_emission_redtest.sh     (from site/, after a build)

set -uo pipefail
cd "$(dirname "$0")/.." || exit 2

SPEC="tests/gates/gate-39-figure-typeset.spec.ts"
EMIT_DIR="evidence/gate39_typeset"
EMIT_DARK="$EMIT_DIR/measurement-dark.json"
BAK="$(mktemp -d)"
PASS=0; FAIL=0

cleanup() { [ -f "$BAK/spec.ts" ] && cp "$BAK/spec.ts" "$SPEC"; rm -rf "$BAK"; }
trap cleanup EXIT

[ -f "$SPEC" ] || { echo "HARNESS BUG: $SPEC not found" >&2; exit 2; }
[ -d dist ] || { echo "HARNESS BUG: dist/ absent — run \`npx astro build\` first" >&2; exit 2; }
cp "$SPEC" "$BAK/spec.ts"
restore_all() { cp "$BAK/spec.ts" "$SPEC"; }

GREP_DARK="G39 figure-typeset.*dark"
run_gate() { npx playwright test "$SPEC" --grep "$1" --reporter=line 2>&1; }
# ⚠ NEVER pipe run_gate into `grep -q` under `set -o pipefail` — grep -q SIGPIPEs playwright and the
# pipeline reports failure, so a GREEN gate reads as red. Capture, then match.

# Assertion signatures — distinctive substrings of each `expect` message in the spec. Matched, not
# derived: reword a message and the matching case fails LOUDLY here rather than degrading to
# "any red will do".
SIG_EMIT="pinned figures to yield at least one below-floor sample"   # G39f
SIG_FINDINGS="figure-typeset finding(s) across"                      # the findings assertion
SIG_MEASURED="element(s) measured across"                            # MIN_MEASURED
SIG_THEME="but the document is"                                      # the theme guard

LAST_WHY=""
# gate_failed_via <grep> <expected-signature> → 0 red-as-aimed · 1 green · 2 red via the WRONG one
gate_failed_via() {
  local out; out="$(run_gate "$1")"; LAST_WHY=""
  case "$out" in *" failed"*) ;; *) return 1 ;; esac
  case "$out" in *"$2"*) return 0 ;; esac
  for sig in "$SIG_EMIT" "$SIG_FINDINGS" "$SIG_MEASURED" "$SIG_THEME"; do
    case "$out" in *"$sig"*) LAST_WHY="$sig" ;; esac
  done
  [ -n "$LAST_WHY" ] || LAST_WHY="(no known assertion signature matched — the spec's wording may have changed)"
  return 2
}

judge() {  # <label> <grep> <signature> <assertion name> <message if it stayed green>
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

# ⚠ EVERY CASE ASSERTS ITS MUTATION ACTUALLY APPLIED. A mutation that silently fails to match
# produces a green run that reads exactly like "the gate did not catch it" — the sibling alias-guard
# harness reported a false pass on precisely that.
# ⭐ AND A CASE THAT CANNOT APPLY MUST FAIL ALONE (GR-4 O3): applied() returning without restoring
# leaves the mutated tree in place and every later case fails for its predecessor's reason.
applied() {  # <needle> <label>
  if ! grep -qF "$1" "$SPEC"; then
    echo "  ✗ $2: HARNESS BUG — the mutation did not apply (pattern not found in $SPEC)."
    FAIL=$((FAIL + 1)); restore_all; return 1
  fi
  return 0
}

echo "gate-39 typeset-emission red test — GR-5 O3"
echo

# ── 1 ── G39f: the emission is non-vacuous ──────────────────────────────────────────────────────
# Disable the accumulator without touching the grading branch, so ONLY the emission goes empty.
python3 - "$SPEC" <<'PY'
import sys, pathlib
p = pathlib.Path(sys.argv[1]); s = p.read_text()
s = s.replace("            if (key !== null) {\n", "            if (false /*MUT1*/ && key !== null) {\n", 1)
p.write_text(s)
PY
if applied "false /*MUT1*/" "1 accumulator disabled"; then
  judge "1 accumulator disabled" "$GREP_DARK" "$SIG_EMIT" "G39f non-vacuity" \
        "the gate stayed GREEN with the emission recording nothing — G39f is decorative"
  restore_all
fi

# ── 2 ── the measurement is written on a FAILING run ────────────────────────────────────────────
# The design's central claim: a failing run is the most informative sample there is (it is the only
# kind that has ever shown CI's 7.4), so emitting after the expects would discard exactly the runs
# F-ab is about. Raise a pin ABOVE the host's measured 8.0 to force the findings assertion red.
rm -rf "$EMIT_DIR"
python3 - "$SPEC" <<'PY'
import sys, pathlib
p = pathlib.Path(sys.argv[1]); s = p.read_text()
s = s.replace("worstPx: 7.9,", "worstPx: 9.0, /*MUT2*/", 1)
p.write_text(s)
PY
if applied "worstPx: 9.0, /*MUT2*/" "2 write-on-red"; then
  judge "2 write-on-red (gate goes red)" "$GREP_DARK" "$SIG_FINDINGS" "findings" \
        "raising netdiagram-svg's pin to 9.0 did not red the gate — the ratchet is not grading"
  if [ -f "$EMIT_DARK" ]; then
    echo "  ✓ 2b write-on-red → the measurement file EXISTS after a failing run"; PASS=$((PASS + 1))
  else
    echo "  ✗ 2b write-on-red: no $EMIT_DARK after a failing run — the emission is being discarded"
    echo "        precisely on the runs the re-derivation most needs."; FAIL=$((FAIL + 1))
  fi
  restore_all
fi

# ── 3 ── the emitted value is the MINIMUM, not an arbitrary sample ──────────────────────────────
# Judged by READING THE ARTIFACT, not by pass/fail: no assertion depends on this, so no mutation can
# turn the gate red, and a harness that only asked "did it go red?" would leave this claim untested
# while reporting a clean score.
rm -rf "$EMIT_DIR"; run_gate "$GREP_DARK" >/dev/null 2>&1
TRUE_MIN="$(python3 -c "
import json,sys
try: print(json.load(open('$EMIT_DARK'))['figures']['netdiagram-svg']['minRendered'])
except Exception: print('ERR')
" 2>/dev/null)"
python3 - "$SPEC" <<'PY'
import sys, pathlib
p = pathlib.Path(sys.argv[1]); s = p.read_text()
s = s.replace("if (!prev || f.rendered < prev.minRendered) {", "if (!prev || f.rendered > prev.minRendered) { /*MUT3*/", 1)
p.write_text(s)
PY
if applied "/*MUT3*/" "3 min-not-last"; then
  rm -rf "$EMIT_DIR"; run_gate "$GREP_DARK" >/dev/null 2>&1
  MUT_MIN="$(python3 -c "
import json
try: print(json.load(open('$EMIT_DARK'))['figures']['netdiagram-svg']['minRendered'])
except Exception: print('ERR')
" 2>/dev/null)"
  if [ "$TRUE_MIN" = "ERR" ] || [ "$MUT_MIN" = "ERR" ]; then
    echo "  ✗ 3 min-not-last: HARNESS BUG — could not read netdiagram-svg from the emission"
    echo "        (true=$TRUE_MIN mutated=$MUT_MIN). The case proves nothing about the claim."
    FAIL=$((FAIL + 1))
  elif [ "$TRUE_MIN" = "$MUT_MIN" ]; then
    echo "  ✗ 3 min-not-last: the emitted value did not change when the comparison was flipped"
    echo "        ($TRUE_MIN both ways) — the accumulator is not selecting on the comparison at all."
    FAIL=$((FAIL + 1))
  else
    echo "  ✓ 3 min-not-last → flipping \`<\` to \`>\` moved the emitted value $TRUE_MIN → $MUT_MIN"
    echo "        (the gate stays GREEN, which is why this case reads the artifact and not the exit code)"
    PASS=$((PASS + 1))
  fi
  restore_all
fi

# ── 4 ── control: the tree was left as found, and the values are the real ones ──────────────────
rm -rf "$EMIT_DIR"
CTRL_OUT="$(run_gate "G39 figure-typeset")"
case "$CTRL_OUT" in
  *" passed"*) echo "  ✓ 4 control → the unmutated gate passes (both themes)"; PASS=$((PASS + 1)) ;;
  *)           echo "  ✗ 4 control: the unmutated gate did NOT pass — the tree was not restored"; FAIL=$((FAIL + 1)) ;;
esac

# Read the restored values as STRINGS and compare in bash — never interpolate $TRUE_MIN into python,
# which turns a harness error ("ERR") into a SyntaxError and reports a code fault as a subject fault.
CTRL_SHAPE="$(python3 -c "
import json
try:
    d = json.load(open('$EMIT_DARK'))
    print('%s|%d|%s' % (','.join(d['figuresAbsent']) or '-', len(d['figures']), d['figures']['netdiagram-svg']['minRendered']))
except Exception as e: print('ERR|0|%s' % e)
" 2>/dev/null)"
CTRL_ABSENT="${CTRL_SHAPE%%|*}"; CTRL_REST="${CTRL_SHAPE#*|}"
CTRL_KEYS="${CTRL_REST%%|*}";    CTRL_MIN="${CTRL_REST#*|}"
if [ "$CTRL_ABSENT" = "-" ] && [ "$CTRL_KEYS" = "3" ] && [ "$CTRL_MIN" = "$TRUE_MIN" ]; then
  echo "  ✓ 4b control → all 3 pinned figures emitted, none absent, min restored to $TRUE_MIN"
  PASS=$((PASS + 1))
else
  echo "  ✗ 4b control: emission not restored — absent=$CTRL_ABSENT keys=$CTRL_KEYS min=$CTRL_MIN (expected -/3/$TRUE_MIN)"
  FAIL=$((FAIL + 1))
fi

echo
echo "  $PASS pass / $FAIL fail"
[ "$FAIL" -eq 0 ] || exit 1
