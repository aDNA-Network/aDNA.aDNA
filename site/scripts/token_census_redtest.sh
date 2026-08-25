#!/usr/bin/env bash
# token_census_redtest.sh — red-prove gate-40 (HAUSSMANN P4.4a, ⛩ ruling 2, convention 14).
#
# gate-40 went GREEN on its first run: the census reports 30/30 conformant, 0 findings. That is
# precisely the state in which a real assertion and a no-op are indistinguishable — the same state
# gate-38 was in when P4.2 red-proved it and found two of its own predicates were decorative.
#
# So each of gate-40's three claims gets a planted mutation aimed at it, and each must turn that
# claim red:
#   G40a  coverage floor        — break the frame walk; a zero frame must NOT read as "all clean"
#   G40b  findings must be zero — plant one literal per family in a real component
#   G40c  families still measured — delete a family from the census; zero findings must not pass
#
# ⚠ EVERY CASE ASSERTS ITS MUTATION ACTUALLY APPLIED before it believes the red. A mutation that
# silently fails to match produces a green run that reads exactly like "the gate did not catch it".
# This harness's own first meta-test of the sibling alias guard hit precisely that and reported a
# false pass, which is why the check is here rather than assumed.
#
# Leaves the tree exactly as it found it: every case restores from a backup in a trap.
#
# Usage:  bash scripts/token_census_redtest.sh     (from site/)

set -uo pipefail
cd "$(dirname "$0")/.." || exit 2

SPEC="tests/gates/gate-40-token-census.spec.ts"
CENSUS="scripts/component_token_census.mjs"
# A real component with a <style> block, chosen from the frame rather than invented.
VICTIM="src/components/sections/GlossaryTooltip.astro"
# A SECOND victim, because the first carries a declared `shadow` exclusion — planting a shadow there
# would be correctly swallowed and the family would go unproven. A red-test that silently skips the
# one family it cannot reach in its chosen fixture is the partial-pass-reporting-as-complete shape.
VICTIM2="src/components/sections/Callout.astro"
BAK="$(mktemp -d)"
PASS=0; FAIL=0

cleanup() {
  [ -f "$BAK/census.mjs" ] && cp "$BAK/census.mjs" "$CENSUS"
  [ -f "$BAK/victim.astro" ] && cp "$BAK/victim.astro" "$VICTIM"
  [ -f "$BAK/victim2.astro" ] && cp "$BAK/victim2.astro" "$VICTIM2"
  rm -rf "$BAK"
}
trap cleanup EXIT

cp "$CENSUS" "$BAK/census.mjs"
cp "$VICTIM" "$BAK/victim.astro"
cp "$VICTIM2" "$BAK/victim2.astro"

[ -f "$SPEC" ] || { echo "HARNESS BUG: $SPEC not found" >&2; exit 2; }
grep -q '<style' "$VICTIM" || { echo "HARNESS BUG: $VICTIM has no <style> block — mutations would not be scanned" >&2; exit 2; }
grep -q '<style' "$VICTIM2" || { echo "HARNESS BUG: $VICTIM2 has no <style> block — mutations would not be scanned" >&2; exit 2; }
# The second victim must NOT carry an exclusion, or the shadow case proves nothing.
grep -q "$(basename "$VICTIM2")" "$CENSUS" && { echo "HARNESS BUG: $VICTIM2 appears in the census EXCLUSIONS — pick another" >&2; exit 2; }

run_gate() {  # $1 = grep pattern for the test title
  npx playwright test "$SPEC" --grep "$1" --reporter=line 2>&1
}

# ⚠ NEVER `run_gate ... | grep -q` UNDER `set -o pipefail`. grep -q exits on the first match and
# SIGPIPEs playwright, so pipefail reports the PIPELINE as failed — and a green gate then reads as
# red. This harness's control caught exactly that on its first run: gate-40 printed "3 passed" while
# the control declared it not green. Capture, then match. (Sixth-instance class: the instrument was
# wrong before the subject was.)
gate_passed() { local out; out="$(run_gate "$1")"; case "$out" in *" passed"*) return 0 ;; esac; return 1; }
gate_failed() { local out; out="$(run_gate "$1")"; case "$out" in *" failed"*) return 0 ;; esac; return 1; }

# -- control: the gate must be GREEN before anything is planted ---------------
# Without this, every red below could be a pre-existing failure rather than a caught mutation.
echo "== control: gate-40 green on the unmutated tree =="
if gate_passed "G40"; then
  echo "  ✓ control (gate-40 passes clean)"; PASS=$((PASS + 1))
else
  echo "  ✗ control: gate-40 is NOT green before mutation — every result below is meaningless"
  run_gate "G40" | tail -15
  echo "  alias token census red-test: aborted"; exit 2
fi

# -- case 1: G40b catches a planted literal, one per family -------------------
echo
echo "== G40b: a planted literal must turn the gate red, in EVERY family =="
for fam_decl in \
  "colour:color: #ab12cd;" \
  "type:font-size: 13px;" \
  "radius:border-radius: 7px;" \
  "weight:font-weight: 650;" \
  "spacing:padding: 13px;" ; do
  fam="${fam_decl%%:*}"; decl="${fam_decl#*:}"
  cp "$BAK/victim.astro" "$VICTIM"
  # Plant inside the first <style> block, on its own selector so it cannot collide.
  python3 - "$VICTIM" "$decl" <<'PY'
import sys
p, decl = sys.argv[1], sys.argv[2]
s = open(p).read()
i = s.index('<style')
j = s.index('>', i) + 1
open(p, 'w').write(s[:j] + f"\n.redtest-planted {{ {decl} }}\n" + s[j:])
PY
  if ! grep -q "redtest-planted" "$VICTIM"; then
    echo "  ✗ HARNESS BUG ($fam): the mutation did not apply — a green here would be a false pass"
    FAIL=$((FAIL + 1)); continue
  fi
  # And the census must actually SEE it, or the gate is being asked the wrong question.
  CENSUS_JSON="$(node "$CENSUS" --json)"
  case "$CENSUS_JSON" in *'"family"'*) : ;; *)
    echo "  ✗ HARNESS BUG ($fam): census reports no findings for a planted $fam literal — the census, not the gate, is the defect"
    FAIL=$((FAIL + 1)); continue ;;
  esac
  if gate_failed "G40b"; then
    echo "  ✓ case $fam (planted $decl → gate red)"; PASS=$((PASS + 1))
  else
    echo "  ✗ case $fam: planted \`$decl\` and gate-40 stayed GREEN"
    FAIL=$((FAIL + 1))
  fi
done
cp "$BAK/victim.astro" "$VICTIM"

# shadow, in the second victim (the first has a declared shadow exclusion)
cp "$BAK/victim2.astro" "$VICTIM2"
python3 - "$VICTIM2" "box-shadow: 0 7px 19px rgba(0,0,0,0.31);" <<'PY2'
import sys
p, decl = sys.argv[1], sys.argv[2]
s = open(p).read()
i = s.index('<style'); j = s.index('>', i) + 1
open(p, 'w').write(s[:j] + f"\n.redtest-planted {{ {decl} }}\n" + s[j:])
PY2
if ! grep -q "redtest-planted" "$VICTIM2"; then
  echo "  ✗ HARNESS BUG (shadow): the mutation did not apply to $VICTIM2"
  FAIL=$((FAIL + 1))
elif gate_failed "G40b"; then
  echo "  ✓ case shadow (planted box-shadow in $VICTIM2 → gate red)"; PASS=$((PASS + 1))
else
  echo "  ✗ case shadow: planted a box-shadow and gate-40 stayed GREEN"
  FAIL=$((FAIL + 1))
fi
cp "$BAK/victim2.astro" "$VICTIM2"

# -- case 2: G40a catches a collapsed frame ----------------------------------
# ⭐ The most important case. A broken walk returns zero files, every file is vacuously
# conformant, and `findings === 0` passes. Only the coverage floor can tell "clean" from
# "measured nothing" — this proves the floor is load-bearing and not decoration.
echo
echo "== G40a: a collapsed frame must FAIL, not read as 'all clean' =="
cp "$BAK/census.mjs" "$CENSUS"
python3 - "$CENSUS" <<'PY'
import sys
p = sys.argv[1]
s = open(p).read()
old = "const FRAME = [...walkAstro(join(SRC, 'components')), ...walkAstro(join(SRC, 'layouts'))].sort();"
assert old in s, "anchor not found"
s = s.replace(old, "const FRAME = [];  // REDTEST: simulated broken walk")
open(p, 'w').write(s)
PY
if grep -q "REDTEST: simulated broken walk" "$CENSUS"; then
  G40A_OUT="$(run_gate "G40a")"
  G40B_OUT="$(run_gate "G40b")"
  if case "$G40A_OUT" in *" failed"*) true ;; *) false ;; esac; then
    echo "  ✓ case frame-collapse (G40a fails on a zero frame)"; PASS=$((PASS + 1))
  else
    echo "  ✗ case frame-collapse: G40a passed with a ZERO frame — the coverage floor is decorative"
    FAIL=$((FAIL + 1))
  fi
  # The point of the floor, stated as its own assertion: G40b is EXPECTED to pass here,
  # because zero files genuinely produce zero findings. If G40b were the only check, this
  # tree would ship a green suite while measuring nothing.
  if case "$G40B_OUT" in *" passed"*) true ;; *) false ;; esac; then
    echo "  ✓ case frame-collapse-b (G40b passes vacuously on a zero frame — which is WHY G40a exists)"; PASS=$((PASS + 1))
  else
    echo "  ⚠ case frame-collapse-b: G40b did not pass vacuously; the floor's rationale needs re-checking"
    FAIL=$((FAIL + 1))
  fi
else
  echo "  ✗ HARNESS BUG: frame-collapse mutation did not apply"
  FAIL=$((FAIL + 1))
fi

# -- case 3: G40c catches a family that stopped being measured ---------------
echo
echo "== G40c: dropping a family must FAIL (zero findings != no drift) =="
cp "$BAK/census.mjs" "$CENSUS"
python3 - "$CENSUS" <<'PY'
import sys
p = sys.argv[1]
s = open(p).read()
old = "findings.push({ family: 'weight'"
assert old in s, "anchor not found"
s = s.replace(old, "findings.push({ family: 'REDTEST_REMOVED'")
open(p, 'w').write(s)
PY
if grep -q "REDTEST_REMOVED" "$CENSUS"; then
  if gate_failed "G40c"; then
    echo "  ✓ case family-dropped (G40c fails when 'weight' stops being emitted)"; PASS=$((PASS + 1))
  else
    echo "  ✗ case family-dropped: G40c passed while a family was no longer measured"
    FAIL=$((FAIL + 1))
  fi
else
  echo "  ✗ HARNESS BUG: family-drop mutation did not apply"
  FAIL=$((FAIL + 1))
fi
cp "$BAK/census.mjs" "$CENSUS"

echo
echo "=============================================="
echo "  token census red-test: $PASS passed, $FAIL failed"
echo "=============================================="
[ "$FAIL" -eq 0 ] || exit 1
