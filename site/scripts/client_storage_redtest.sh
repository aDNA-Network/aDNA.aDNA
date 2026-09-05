#!/usr/bin/env bash
# client_storage_redtest.sh — red-prove gate-55 (course-deploy increment, convention 14).
#
# gate-55 went GREEN on its first run, which is exactly the state in which a real assertion and a
# no-op are indistinguishable. Each of its four claims gets a mutation aimed at it, and each must
# turn it red VIA THAT CLAIM'S OWN ASSERTION (GR-3's F-z clause: a demonstration is only worth what
# it can attribute). A red via a different assertion is a HARNESS BUG, not a pass.
#
#   1  G55a  a bundled script writes a key /privacy does not name   -> undisclosed key
#   2  G55a  /privacy stops naming a key the site DOES write        -> the same assertion, other cause
#   3  G55b  /privacy names a key nothing writes                    -> the reassuring direction
#   4  G55c  the extraction regex matches nothing                   -> vacuity, the one that matters
#   5  G55d  an entry is slipped into the exclusion list            -> the cheapest way to fake green
#   6  control
#
# ⭐ CASES 1 AND 2 AIM AT THE SAME ASSERTION ON PURPOSE, and that is not redundancy. G55a is a claim
# about a SET RELATION, and it has two independent failure modes: the code side grows, or the page
# side shrinks. A single mutation would demonstrate the assertion is alive while leaving half of what
# it protects untested — the partial-instrument-reporting-as-complete shape.
#
# Mutations are applied to `dist/` (build output, regenerable) and to the spec; every case restores in
# a trap, and a FINAL CONTROL re-runs the gate clean to prove the tree was left as found.
#
# Usage:  bash scripts/client_storage_redtest.sh     (from site/, after a build)

set -uo pipefail
cd "$(dirname "$0")/.." || exit 2

SPEC="tests/gates/gate-55-client-storage-truth.spec.ts"
TWIN="dist/privacy.md"
VICTIM="dist/about/index.html"     # an ordinary page that already carries the inline theme writer
BAK="$(mktemp -d)"
PASS=0; FAIL=0

cleanup() {
  [ -f "$BAK/spec.ts" ] && cp "$BAK/spec.ts" "$SPEC"
  [ -f "$BAK/privacy.md" ] && cp "$BAK/privacy.md" "$TWIN"
  [ -f "$BAK/victim.html" ] && cp "$BAK/victim.html" "$VICTIM"
  rm -rf "$BAK"
}
trap cleanup EXIT

for f in "$SPEC" "$TWIN" "$VICTIM"; do
  [ -f "$f" ] || { echo "HARNESS BUG: $f not found — run \`npx astro build\` first" >&2; exit 2; }
done
cp "$SPEC" "$BAK/spec.ts"; cp "$TWIN" "$BAK/privacy.md"; cp "$VICTIM" "$BAK/victim.html"
restore_all() { cp "$BAK/spec.ts" "$SPEC"; cp "$BAK/privacy.md" "$TWIN"; cp "$BAK/victim.html" "$VICTIM"; }

run_gate() { npx playwright test "$SPEC" --project=chromium --grep "$1" --reporter=line 2>&1; }
# ⚠ NEVER pipe run_gate into `grep -q` under `set -o pipefail` — grep -q SIGPIPEs playwright and the
# pipeline reports failure, so a GREEN gate reads as red.

# Assertion signatures — distinctive substrings of each expect message. Matched, not derived: reword
# a message and the matching case fails LOUDLY here rather than degrading to "any red will do".
SIG_A="written by the shipped site but NOT named"
SIG_B="as stored, but nothing in dist/ writes it"
SIG_C_VACUOUS="expected at least"
SIG_C_UNRESOLVED="could not be resolved to a literal"
SIG_D="excludes exactly one code span"

LAST_WHY=""
gate_failed_via() {   # <grep> <expected sig> -> 0 red-as-aimed · 1 green · 2 red via the WRONG one
  local out; out="$(run_gate "$1")"; LAST_WHY=""
  case "$out" in *" failed"*) ;; *) return 1 ;; esac
  case "$out" in *"$2"*) return 0 ;; esac
  for sig in "$SIG_A" "$SIG_B" "$SIG_C_VACUOUS" "$SIG_C_UNRESOLVED" "$SIG_D"; do
    case "$out" in *"$sig"*) LAST_WHY="$sig" ;; esac
  done
  [ -n "$LAST_WHY" ] || LAST_WHY="(no known assertion signature matched — the spec's wording may have changed)"
  return 2
}

judge() {  # <label> <grep> <sig> <assertion> <message if green>
  gate_failed_via "$2" "$3"; local rc=$?
  if [ "$rc" -eq 0 ]; then
    echo "  ✓ $1 → red via $4"; PASS=$((PASS + 1))
  elif [ "$rc" -eq 2 ]; then
    echo "  ✗ $1: HARNESS BUG — red via \"$LAST_WHY\", NOT $4."
    echo "        A red that cannot be attributed proves nothing about the assertion under test."
    FAIL=$((FAIL + 1))
  else
    echo "  ✗ $1: $5"; FAIL=$((FAIL + 1))
  fi
}

# ⭐ EVERY CASE ASSERTS ITS MUTATION APPLIED, and a case that CANNOT apply fails ALONE (GR-4 O3):
# returning without restoring leaves the mutated tree in place and every later case then fails for
# its predecessor's reason.
applied() {  # <needle> <file> <label>
  if ! grep -qF "$1" "$2"; then
    echo "  ✗ $3: HARNESS BUG — the mutation did not apply (pattern absent from $2)."
    FAIL=$((FAIL + 1)); restore_all; return 1
  fi
  return 0
}
# ⚠ applied() can only assert PRESENCE, so a case that REMOVES something must name what the removal
# leaves behind (GR-4 O4's lesson) — case 2 uses `removed()` for exactly that reason.
removed() {  # <needle> <file> <label>
  if grep -qF "$1" "$2"; then
    echo "  ✗ $3: HARNESS BUG — the removal did not apply ('$1' still present in $2)."
    FAIL=$((FAIL + 1)); restore_all; return 1
  fi
  return 0
}

echo "gate-55 client-storage-truth red test"
echo

# ── 1 ── G55a: a shipped script writes a key /privacy does not name ─────────────────────────────
python3 - "$VICTIM" <<'PY'
import sys, pathlib
p = pathlib.Path(sys.argv[1]); s = p.read_text()
p.write_text(s.replace('</body>', '<script>localStorage.setItem("adna:fake:v1","x")</script></body>', 1))
PY
if applied 'adna:fake:v1' "$VICTIM" "1 undisclosed key"; then
  judge "1 undisclosed key" "G55a" "$SIG_A" "G55a" \
        "the gate stayed GREEN with an undisclosed localStorage key shipping — G55a is decorative"
  restore_all
fi

# ── 2 ── G55a, the other direction: /privacy stops naming a key that IS written ─────────────────
python3 - "$TWIN" <<'PY'
import sys, pathlib
p = pathlib.Path(sys.argv[1]); s = p.read_text()
p.write_text(s.replace('`adna:course:v1`', 'the course store', 1))
PY
if removed '`adna:course:v1`' "$TWIN" "2 page stops naming a live key"; then
  judge "2 page stops naming a live key" "G55a" "$SIG_A" "G55a" \
        "the gate stayed GREEN while /privacy omitted a key the site writes"
  restore_all
fi

# ── 3 ── G55b: /privacy names a key nothing writes ──────────────────────────────────────────────
python3 - "$TWIN" <<'PY'
import sys, pathlib
p = pathlib.Path(sys.argv[1]); s = p.read_text()
p.write_text(s.replace('`adna:course:v1`', '`adna:course:v1` and `adna:retired:v0`', 1))
PY
if applied 'adna:retired:v0' "$TWIN" "3 phantom key on the page"; then
  judge "3 phantom key on the page" "G55b" "$SIG_B" "G55b" \
        "the gate stayed GREEN while /privacy claimed a key nothing writes"
  restore_all
fi

# ── 4 ── G55c: the extraction matches nothing ───────────────────────────────────────────────────
# THE CASE THAT MATTERS — it is the only one distinguishing "no violations" from "the instrument saw
# nothing", and without it G55a and G55b both pass vacuously against an empty set.
python3 - "$SPEC" <<'PY'
import sys, pathlib
p = pathlib.Path(sys.argv[1]); s = p.read_text()
p.write_text(s.replace('localStorage\\.(?:get|set|remove)Item', 'localStorageZZZ\\.(?:get|set|remove)Item'))
PY
if applied 'localStorageZZZ' "$SPEC" "4 extraction broken"; then
  judge "4 extraction broken" "G55c" "$SIG_C_VACUOUS" "G55c non-vacuity" \
        "the gate stayed GREEN with the extraction matching nothing — every other assertion is vacuous"
  restore_all
fi

# ── 5 ── G55d: an entry slipped into the exclusion list ─────────────────────────────────────────
python3 - "$SPEC" <<'PY'
import sys, pathlib
p = pathlib.Path(sys.argv[1]); s = p.read_text()
p.write_text(s.replace("const NON_KEY_CODE_SPANS = ['localStorage'];",
                       "const NON_KEY_CODE_SPANS = ['localStorage', 'adna:course:v1'];", 1))
PY
if applied "'localStorage', 'adna:course:v1'" "$SPEC" "5 exclusion list widened"; then
  judge "5 exclusion list widened" "G55d" "$SIG_D" "G55d" \
        "the gate stayed GREEN after a real key was moved into the non-key exclusion list"
  restore_all
fi

# ── 6 ── control ────────────────────────────────────────────────────────────────────────────────
CTRL="$(run_gate "G55")"
case "$CTRL" in
  *" passed"*) echo "  ✓ 6 control → the unmutated gate passes (4 assertions)"; PASS=$((PASS + 1)) ;;
  *)           echo "  ✗ 6 control: the unmutated gate did NOT pass — the tree was not restored"; FAIL=$((FAIL + 1)) ;;
esac

echo
echo "  $PASS pass / $FAIL fail"
[ "$FAIL" -eq 0 ] || exit 1
