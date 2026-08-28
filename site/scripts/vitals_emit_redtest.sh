#!/usr/bin/env bash
# vitals_emit_redtest.sh — red-prove gate-50 (HAUSSMANN P4.4b B1, convention 14).
#
# gate-50 went GREEN on its first run — the state in which a real assertion and a no-op are
# indistinguishable. Each of its four claims gets a planted mutation aimed at it, and each must
# turn it red:
#   G50a  shipped/wired    — (M1) unwire: strip the vitals-carrying <script> tag from the pages;
#                            the bundle still sits in dist/_astro/ so this is exactly the
#                            "in the tree but not wired" state AC2's amendment names
#   G50b  emits            — (M2) mute: rename __adnaVitals inside the bundle so the collector
#                            runs and the buffer never appears (inert-but-shipped)
#   G50c  zero-network     — (M3) plant a POST beacon in the page; the gate must refuse it
#   G50d  event channel    — (M4) rename the adna:vital event inside the bundle
#
# ⚠ EVERY CASE ASSERTS ITS MUTATION ACTUALLY APPLIED before it believes the red. A mutation that
# silently fails to match produces a green run that reads exactly like "the gate did not catch it".
# ⚠ M2/M4 reds arrive as waitForFunction TIMEOUTS (~10 s each) — slow reds, real reds.
#
# Mutations are applied to `dist/` (build output, regenerable); every case restores in a trap and
# a FINAL CONTROL re-runs the whole gate clean to prove the tree was left as found.
#
# Usage:  bash scripts/vitals_emit_redtest.sh     (from site/, after a build)

set -uo pipefail
cd "$(dirname "$0")/.." || exit 2

SPEC="tests/gates/gate-50-vitals-emit.spec.ts"
PAGES=("dist/index.html" "dist/get-started/index.html" "dist/privacy/index.html")
BAK="$(mktemp -d)"
PASS=0; FAIL=0

[ -f "$SPEC" ] || { echo "HARNESS BUG: $SPEC not found" >&2; exit 2; }
for p in "${PAGES[@]}"; do
  [ -f "$p" ] || { echo "HARNESS BUG: $p not found — run \`npx astro build\` first" >&2; exit 2; }
done

# The vitals bundle is DERIVED from what the homepage references — a hardcoded hash goes stale on
# the next build and the mutation would then rewrite nothing and prove nothing.
BUNDLE=""
for src in $(grep -o '<script type="module" src="/_astro/[^"]*\.js"' dist/index.html | grep -o '/_astro/[^"]*\.js'); do
  if grep -q '__adnaVitals' "dist${src}" 2>/dev/null; then BUNDLE="dist${src}"; break; fi
done
[ -n "$BUNDLE" ] || { echo "HARNESS BUG: no referenced module in dist/index.html contains __adnaVitals" >&2; exit 2; }
BUNDLE_SRC="${BUNDLE#dist}"

i=0
for p in "${PAGES[@]}"; do cp "$p" "$BAK/page$i.html"; i=$((i+1)); done
cp "$BUNDLE" "$BAK/bundle.js"

restore_all() {
  local i=0
  for p in "${PAGES[@]}"; do cp "$BAK/page$i.html" "$p"; i=$((i+1)); done
  cp "$BAK/bundle.js" "$BUNDLE"
}
cleanup() { restore_all; rm -rf "$BAK"; }
trap cleanup EXIT

run_gate() { npx playwright test "$SPEC" --grep "$1" --reporter=line 2>&1; }
# ⚠ NEVER `run_gate ... | grep -q` UNDER pipefail — capture, then match (token_census precedent).
gate_passed() { local out; out="$(run_gate "$1")"; case "$out" in *" passed"*) return 0 ;; esac; return 1; }
gate_failed() { local out; out="$(run_gate "$1")"; case "$out" in *" failed"*) return 0 ;; esac; return 1; }

# -- control 1: the whole gate must be GREEN before anything is planted --------
echo "== control 1: gate-50 green on the unmutated tree =="
if gate_passed "G50"; then
  echo "  ✓ control 1 (gate-50 passes clean)"; PASS=$((PASS + 1))
else
  echo "  ✗ control 1 FAILED — gate-50 is not green before mutation; fix that first" >&2; FAIL=$((FAIL + 1))
fi

# -- M1: unwire — strip the vitals script tag from all sampled pages (aims G50a)
echo "== M1: script tag stripped from pages (shipped-but-not-wired) =="
for p in "${PAGES[@]}"; do
  python3 - "$p" "$BUNDLE_SRC" <<'PY'
import sys
p, src = sys.argv[1], sys.argv[2]
s = open(p).read()
tag = '<script type="module" src="%s"></script>' % src
assert tag in s, "MUTATION DID NOT MATCH in " + p
open(p, 'w').write(s.replace(tag, ''))
PY
  [ $? -eq 0 ] || { echo "  HARNESS BUG: M1 mutation failed to apply in $p" >&2; FAIL=$((FAIL + 1)); restore_all; }
done
if grep -q "$BUNDLE_SRC" dist/index.html; then
  echo "  HARNESS BUG: M1 did not apply (tag still present)" >&2; FAIL=$((FAIL + 1))
elif gate_failed "G50a"; then
  echo "  ✓ M1 red (unwired pages fail G50a)"; PASS=$((PASS + 1))
else
  echo "  ✗ M1 NOT RED — G50a passed with the instrument unwired" >&2; FAIL=$((FAIL + 1))
fi
restore_all

# -- M2: mute — rename the buffer inside the bundle (aims G50b) ----------------
echo "== M2: emitter runs but the buffer never appears (inert-but-shipped) =="
python3 - "$BUNDLE" <<'PY'
import sys
p = sys.argv[1]
s = open(p).read()
assert '__adnaVitals' in s, "MUTATION DID NOT MATCH"
open(p, 'w').write(s.replace('__adnaVitals', '__adnaVitalX'))
PY
if grep -q '__adnaVitals' "$BUNDLE"; then
  echo "  HARNESS BUG: M2 did not apply" >&2; FAIL=$((FAIL + 1))
elif gate_failed "G50b"; then
  echo "  ✓ M2 red (mute instrument fails G50b)"; PASS=$((PASS + 1))
else
  echo "  ✗ M2 NOT RED — G50b passed with an instrument that emits nothing" >&2; FAIL=$((FAIL + 1))
fi
restore_all

# -- M3: plant a POST beacon in the homepage (aims G50c) -----------------------
echo "== M3: planted POST on the emitting load =="
python3 - dist/index.html <<'PY'
import sys
p = sys.argv[1]
s = open(p).read()
i = s.rfind('</body>')
assert i != -1, "MUTATION DID NOT MATCH (no </body>)"
frag = '<script>fetch("/planted-beacon", {method: "POST", body: "x"}).catch(function(){});</script>'
open(p, 'w').write(s[:i] + frag + s[i:])
PY
if ! grep -q 'planted-beacon' dist/index.html; then
  echo "  HARNESS BUG: M3 did not apply" >&2; FAIL=$((FAIL + 1))
elif gate_failed "G50c"; then
  echo "  ✓ M3 red (a POST on the load fails G50c)"; PASS=$((PASS + 1))
else
  echo "  ✗ M3 NOT RED — G50c passed with a POST in flight" >&2; FAIL=$((FAIL + 1))
fi
restore_all

# -- M4: rename the CustomEvent inside the bundle (aims G50d) ------------------
echo "== M4: event channel renamed (adna:vital never fires) =="
python3 - "$BUNDLE" <<'PY'
import sys
p = sys.argv[1]
s = open(p).read()
assert 'adna:vital' in s, "MUTATION DID NOT MATCH"
open(p, 'w').write(s.replace('adna:vital', 'adna:vitalX'))
PY
if grep -q '"adna:vital"' "$BUNDLE"; then
  echo "  HARNESS BUG: M4 did not apply" >&2; FAIL=$((FAIL + 1))
elif gate_failed "G50d"; then
  echo "  ✓ M4 red (silent event channel fails G50d)"; PASS=$((PASS + 1))
else
  echo "  ✗ M4 NOT RED — G50d passed with the event channel renamed" >&2; FAIL=$((FAIL + 1))
fi
restore_all

# -- final control: the tree is restored and the whole gate is green again -----
echo "== final control: gate-50 green after restore =="
if gate_passed "G50"; then
  echo "  ✓ final control (tree left as found)"; PASS=$((PASS + 1))
else
  echo "  ✗ final control FAILED — the harness did not restore the tree" >&2; FAIL=$((FAIL + 1))
fi

echo
echo "vitals_emit_redtest: $PASS passed, $FAIL failed (target 6/6: 4 mutations red + 2 controls green)"
[ "$FAIL" -eq 0 ]
