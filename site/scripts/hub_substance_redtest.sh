#!/usr/bin/env bash
# hub_substance_redtest.sh — red-prove gate-44 (HAUSSMANN P4.4a A2, convention 14).
#
# gate-44 went GREEN on its first run: 4/4 hubs meet the budget, because P4.2 already fixed F19.
# That is precisely the state in which a real assertion and a no-op are indistinguishable — the same
# state gate-40 was in, and the same state gate-38 was in when P4.2 red-proved it and found two of
# its own predicates were decorative.
#
# So each of gate-44's three claims gets a planted mutation aimed at it, and each must turn that
# claim red:
#   G44a  coverage floor   — (1) make a hub unmeasurable; an error row must NOT read as "clean"
#                            (2) shrink the frame; grading fewer pages must not still report green
#   G44b  substance budget — (3) strip a hub's <h2>s   (the h2 axis, in isolation)
#                            (4) gut a hub's body text (the bodyLen axis, in isolation)
#   G44c  derivation holds — (5) thin an EXEMPLAR so the derived floor stops supporting the budget
#
# ⚠ EVERY CASE ASSERTS ITS MUTATION ACTUALLY APPLIED before it believes the red. A mutation that
# silently fails to match produces a green run that reads exactly like "the gate did not catch it".
# The sibling alias-guard harness hit precisely that and reported a false pass.
#
# ⚠ AXIS ISOLATION IS DELIBERATE. Cases 3 and 4 each trip ONE of the budget's two axes while
# leaving the other conformant. A mutation that trips both proves only that the gate reacts to
# devastation, not that it measures what it claims to measure.
#
# Mutations are applied to `dist/` (build output, regenerable) and to the measurement script; every
# case restores from a backup in a trap, and a FINAL CONTROL re-runs the gate clean to prove the
# tree was actually left as found.
#
# Usage:  bash scripts/hub_substance_redtest.sh     (from site/, after a build)

set -uo pipefail
cd "$(dirname "$0")/.." || exit 2

SPEC="tests/gates/gate-44-hub-substance.spec.ts"
MEASURE="scripts/hub_depth_measure.mjs"
HUB="dist/how/index.html"                 # a graded hub (h2=4, bodyLen=2015)
EXEMPLAR="dist/glossary/index.html"       # a budget exemplar, NOT a graded hub
BAK="$(mktemp -d)"
PASS=0; FAIL=0

cleanup() {
  [ -f "$BAK/measure.mjs" ] && cp "$BAK/measure.mjs" "$MEASURE"
  [ -f "$BAK/hub.html" ] && cp "$BAK/hub.html" "$HUB"
  [ -f "$BAK/exemplar.html" ] && cp "$BAK/exemplar.html" "$EXEMPLAR"
  rm -rf "$BAK"
}
trap cleanup EXIT

[ -f "$SPEC" ] || { echo "HARNESS BUG: $SPEC not found" >&2; exit 2; }
[ -f "$MEASURE" ] || { echo "HARNESS BUG: $MEASURE not found" >&2; exit 2; }
[ -f "$HUB" ] || { echo "HARNESS BUG: $HUB not found — run \`npx astro build\` first" >&2; exit 2; }
[ -f "$EXEMPLAR" ] || { echo "HARNESS BUG: $EXEMPLAR not found — run \`npx astro build\` first" >&2; exit 2; }

cp "$MEASURE" "$BAK/measure.mjs"
cp "$HUB" "$BAK/hub.html"
cp "$EXEMPLAR" "$BAK/exemplar.html"

# The victim must be a GRADED hub and the exemplar must NOT be, or cases 3–5 prove nothing about
# the claim they target. Assert the roles rather than trusting the filenames.
grep -q "'how'" "$MEASURE" || { echo "HARNESS BUG: /how is not in the HUBS list — pick another victim" >&2; exit 2; }
grep -q "'glossary'" "$MEASURE" || { echo "HARNESS BUG: /glossary is not a COMPARATOR — case 5 would prove nothing" >&2; exit 2; }

run_gate() { npx playwright test "$SPEC" --grep "$1" --reporter=line 2>&1; }
# ⚠ NEVER `run_gate ... | grep -q` UNDER `set -o pipefail`. grep -q exits on the first match and
# SIGPIPEs playwright, so pipefail reports the PIPELINE as failed — and a green gate then reads as
# red. Capture, then match. (token_census_redtest.sh's control caught exactly this.)
gate_passed() { local out; out="$(run_gate "$1")"; case "$out" in *" passed"*) return 0 ;; esac; return 1; }
gate_failed() { local out; out="$(run_gate "$1")"; case "$out" in *" failed"*) return 0 ;; esac; return 1; }

restore_all() { cp "$BAK/measure.mjs" "$MEASURE"; cp "$BAK/hub.html" "$HUB"; cp "$BAK/exemplar.html" "$EXEMPLAR"; }

# -- control 1: the gate must be GREEN before anything is planted --------------
# Without this, every red below could be a pre-existing failure rather than a caught mutation.
echo "== control 1: gate-44 green on the unmutated tree =="
if gate_passed "G44"; then
  echo "  ✓ control 1 (gate-44 passes clean)"; PASS=$((PASS + 1))
else
  echo "  ✗ control 1: gate-44 is NOT green before mutation — every result below is meaningless"
  run_gate "G44" | tail -20
  echo "  hub substance red-test: aborted"; exit 2
fi

# -- case 1: G44a — an unmeasurable hub must not read as a clean one ----------
echo
echo "== G44a: a hub that cannot be measured must fail, not be skipped =="
restore_all
mv "$HUB" "$HUB.hidden"
if [ -f "$HUB" ]; then
  echo "  ✗ HARNESS BUG: $HUB still present after mv — mutation did not apply"; FAIL=$((FAIL + 1))
else
  MEASURED="$(node "$MEASURE" --json)"
  case "$MEASURED" in *'"error"'*) : ;; *)
    echo "  ✗ HARNESS BUG: measurement reports no error for a missing hub — the script, not the gate, is the defect"
    FAIL=$((FAIL + 1)); MEASURED="" ;;
  esac
  if [ -n "$MEASURED" ]; then
    if gate_failed "G44a"; then
      echo "  ✓ case 1 (hub unmeasurable → G44a red)"; PASS=$((PASS + 1))
    else
      echo "  ✗ case 1: hub was unmeasurable and G44a stayed GREEN — the vacuity guard is decorative"
      FAIL=$((FAIL + 1))
    fi
  fi
fi
mv "$HUB.hidden" "$HUB" 2>/dev/null

# -- case 2: G44a — a shrunken frame must not still report green ---------------
echo
echo "== G44a: a shrunken hub frame must fail the coverage floor =="
restore_all
python3 - "$MEASURE" <<'PY'
import sys, re
p = sys.argv[1]
s = open(p).read()
# Drop the last hub from the HUBS array — the frame goes 4 -> 3, below the floor.
s2 = re.sub(r"const HUBS = \[[^\]]*\]", "const HUBS = ['how', 'patterns', 'use-cases']", s, count=1)
assert s2 != s, "HUBS array did not match"
open(p, 'w').write(s2)
PY
if ! grep -q "const HUBS = \['how', 'patterns', 'use-cases'\]" "$MEASURE"; then
  echo "  ✗ HARNESS BUG: the HUBS shrink did not apply — a green here would be a false pass"; FAIL=$((FAIL + 1))
elif gate_failed "G44a"; then
  echo "  ✓ case 2 (frame 4 → 3 → G44a red)"; PASS=$((PASS + 1))
else
  echo "  ✗ case 2: frame shrank below the floor and G44a stayed GREEN"; FAIL=$((FAIL + 1))
fi
restore_all

# -- case 3: G44b — the h2 axis, in isolation ---------------------------------
echo
echo "== G44b: a hub stripped of its <h2>s must fail (h2 axis alone) =="
python3 - "$HUB" <<'PY'
import sys
p = sys.argv[1]
s = open(p).read()
# Rename the tag so the counter's /<h2[\s>]/ stops matching, WITHOUT removing any text —
# bodyLen must stay conformant so this case tests the h2 axis and nothing else.
s2 = s.replace('<h2', '<hh2').replace('</h2>', '</hh2>')
assert s2 != s, "no <h2> found to strip"
open(p, 'w').write(s2)
PY
H2_LEFT="$(node -e "
const s=require('fs').readFileSync('$HUB','utf8');
const m=s.match(/<article[^>]*class=\"[^\"]*doc-content[^\"]*\"[^>]*>([\s\S]*?)<\/article>/)||s.match(/<main[^>]*>([\s\S]*?)<\/main>/);
console.log(((m?m[1]:'').match(/<h2[\s>]/g)||[]).length);
")"
if [ "$H2_LEFT" != "0" ]; then
  echo "  ✗ HARNESS BUG: $H2_LEFT <h2> still counted after the strip — mutation did not apply"; FAIL=$((FAIL + 1))
elif gate_failed "G44b"; then
  echo "  ✓ case 3 (h2 → 0, body intact → G44b red)"; PASS=$((PASS + 1))
else
  echo "  ✗ case 3: hub h2 went to 0 and G44b stayed GREEN"; FAIL=$((FAIL + 1))
fi
restore_all

# -- case 4: G44b — the bodyLen axis, in isolation -----------------------------
echo
echo "== G44b: a gutted hub body must fail (bodyLen axis alone) =="
python3 - "$HUB" <<'PY'
import sys, re
p = sys.argv[1]
s = open(p).read()
# Keep FOUR <h2>s so the h2 axis stays conformant and only bodyLen trips.
thin = '<h2>One</h2><h2>Two</h2><h2>Three</h2><h2>Four</h2><p>Thin.</p>'
m = re.search(r'(<article[^>]*class="[^"]*doc-content[^"]*"[^>]*>)([\s\S]*?)(</article>)', s)
if not m:
    m = re.search(r'(<main[^>]*>)([\s\S]*?)(</main>)', s)
assert m, "no doc-content/main container found"
open(p, 'w').write(s[:m.start()] + m.group(1) + thin + m.group(3) + s[m.end():])
PY
MEAS4="$(node "$MEASURE" --json)"
if ! printf '%s' "$MEAS4" | python3 -c "
import json,sys
d=json.load(sys.stdin)
r=[x for x in d['rows'] if x['route']=='how'][0]
sys.exit(0 if r.get('h2')==4 and r.get('bodyLen',9999) < d['budget']['bodyLen'] else 1)
"; then
  echo "  ✗ HARNESS BUG: the gutted hub is not (h2=4, bodyLen<budget) — the axes are not isolated"; FAIL=$((FAIL + 1))
elif gate_failed "G44b"; then
  echo "  ✓ case 4 (bodyLen below budget, h2 conformant → G44b red)"; PASS=$((PASS + 1))
else
  echo "  ✗ case 4: hub body was gutted and G44b stayed GREEN"; FAIL=$((FAIL + 1))
fi
restore_all

# -- case 5: G44c — the derivation must stop supporting the budget -------------
echo
echo "== G44c: an exemplar thinning below the budget must fail the derivation check =="
python3 - "$EXEMPLAR" <<'PY'
import sys
p = sys.argv[1]
s = open(p).read()
s2 = s.replace('<h2', '<hh2').replace('</h2>', '</hh2>')
assert s2 != s, "no <h2> found in the exemplar"
open(p, 'w').write(s2)
PY
MEAS5="$(node "$MEASURE" --json)"
if ! printf '%s' "$MEAS5" | python3 -c "
import json,sys
d=json.load(sys.stdin)
sys.exit(0 if d['derived'] and d['derived']['h2'] < d['budget']['h2'] else 1)
"; then
  echo "  ✗ HARNESS BUG: derived h2 did not fall below the budget — case 5 targets nothing"; FAIL=$((FAIL + 1))
elif gate_failed "G44c"; then
  echo "  ✓ case 5 (exemplar thinned → derived floor below budget → G44c red)"; PASS=$((PASS + 1))
else
  echo "  ✗ case 5: the budget outran its own derivation and G44c stayed GREEN"; FAIL=$((FAIL + 1))
fi
restore_all

# -- control 2: the tree is genuinely restored ---------------------------------
# Not ceremony. If a mutation leaked, every red above is unattributable and the next run of the
# suite would inherit a broken dist/ that nobody would connect to this harness.
echo
echo "== control 2: gate-44 green again after every restore =="
if gate_passed "G44"; then
  echo "  ✓ control 2 (tree restored, gate-44 green)"; PASS=$((PASS + 1))
else
  echo "  ✗ control 2: gate-44 is NOT green after restore — this harness LEAKED a mutation"
  run_gate "G44" | tail -20
  FAIL=$((FAIL + 1))
fi

echo
echo "================================================================"
echo "hub substance red-test: $PASS pass / $FAIL fail  (5 mutations + 2 controls)"
[ "$FAIL" -eq 0 ] || exit 1
