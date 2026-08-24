#!/usr/bin/env bash
# =============================================================================
# live_headers_redtest.sh — demonstrate check_live_headers.mjs FAILS
# (HAUSSMANN P4.4a A1 / F-f · campaign convention 14)
#
# ⭐ CASE 2 IS THE WHOLE POINT. It mutates a configured header VALUE while
# leaving the NAME correct, and asserts the check goes red. That is the exact
# drift class the presence-only version could not see, and case 3 proves it
# could not: the same mutation against a name-only comparison is GREEN.
#
# ⚠ THIS SCRIPT MUTATES vercel.json — the file the deploy reads. It restores in
# a trap AND verifies the restore before exiting. It NEVER deploys, and the
# probe it drives is a read-only GET. Run it on a clean vercel.json.
#
# Every mutation asserts its own match count: a mutation that no longer applies
# reports as a HARNESS BUG, never as a pass.
# =============================================================================
set -u -o pipefail

cd "$(dirname "${BASH_SOURCE[0]}")/.." || exit 9
VJ="vercel.json"
SCRIPT="scripts/check_live_headers.mjs"
ORIGIN="${1:-https://adna.network}"

[ -f "$VJ" ] || { echo "⛔ $VJ missing"; exit 9; }
VJBAK="$(mktemp)"; cp "$VJ" "$VJBAK"
restore() {
  cp "$VJBAK" "$VJ"
  # Verify the restore actually happened — a trap that silently fails to restore
  # leaves a mutated deploy config on disk, which is worse than any test failure.
  if ! cmp -s "$VJBAK" "$VJ"; then
    echo "⛔⛔ RESTORE FAILED — $VJ is MUTATED. Restore it by hand from git before deploying."
  fi
  rm -f "$VJBAK"
}
trap restore EXIT

pass=0; fail=0
check() { if [ "$2" = "$3" ]; then printf '  ✅ %-56s exit %s\n' "$1" "$3"; pass=$((pass+1));
          else printf '  ❌ %-56s expected %s, got %s\n' "$1" "$2" "$3"; fail=$((fail+1)); fi; }

probe() { node "$SCRIPT" "$ORIGIN" >/dev/null 2>&1; echo $?; }

mutate_value() { # change a configured VALUE, leave the NAME correct
  python3 - <<'PYEOF'
import json
d=json.load(open('vercel.json'))
b=next(h for h in d['headers'] if h['source']=='/(.*)')
n=0
for h in b['headers']:
    if h['key']=='X-Frame-Options':
        assert h['value']=='DENY', f"MUTATION PREMISE FALSE: X-Frame-Options is {h['value']!r}, expected 'DENY' — harness bug, not a pass"
        h['value']='SAMEORIGIN'; n+=1
assert n==1, f'MUTATION DID NOT APPLY (matched {n}, expected 1) — harness bug, not a pass'
json.dump(d,open('vercel.json','w'),indent=2)
PYEOF
}

mutate_csp() { # a single-directive CSP drift — the quiet kind
  python3 - <<'PYEOF'
import json
d=json.load(open('vercel.json'))
b=next(h for h in d['headers'] if h['source']=='/(.*)')
n=0
for h in b['headers']:
    if h['key']=='Content-Security-Policy':
        assert "default-src" in h['value'], 'MUTATION PREMISE FALSE: no default-src in CSP — harness bug'
        h['value']=h['value']+"; frame-ancestors 'none'"; n+=1
assert n==1, f'MUTATION DID NOT APPLY (matched {n}, expected 1) — harness bug, not a pass'
json.dump(d,open('vercel.json','w'),indent=2)
PYEOF
}

add_unserved() { # a header vercel.json names that the alias does not serve
  python3 - <<'PYEOF'
import json
d=json.load(open('vercel.json'))
b=next(h for h in d['headers'] if h['source']=='/(.*)')
before=len(b['headers'])
b['headers'].append({'key':'X-Adna-Redtest-Absent','value':'1'})
assert len(b['headers'])==before+1, 'MUTATION DID NOT APPLY — harness bug, not a pass'
json.dump(d,open('vercel.json','w'),indent=2)
PYEOF
}

echo
echo "check_live_headers value compare — red-test (F-f)"
echo "target: $ORIGIN"
echo "======================================================================"

echo "-- baseline: the live alias matches vercel.json --"
check "1. clean config, live alias                  → OK"      0 "$(probe)"

echo
echo "-- ⭐ F-f's DEFECT: correct NAME, wrong VALUE must go RED --"
mutate_value
check "2. X-Frame-Options DENY → SAMEORIGIN         → DRIFT"   1 "$(probe)"

# Prove the OLD predicate could not see it. Presence-only is exactly
# `res.headers.has(k)`, so simulate it against the same mutated config.
old_verdict="$(node -e "
const {readFileSync}=require('node:fs');
const vj=JSON.parse(readFileSync('vercel.json','utf8'));
const b=vj.headers.find(h=>h.source==='/(.*)');
(async()=>{
  const res=await fetch('$ORIGIN/',{redirect:'follow'});
  const missing=b.headers.map(h=>h.key).filter(k=>!res.headers.has(k.toLowerCase()));
  process.exit(missing.length?1:0);
})();" >/dev/null 2>&1; echo $?)"
check "3. …same mutation, PRESENCE-ONLY compare     → GREEN"   0 "$old_verdict"
cp "$VJBAK" "$VJ"

echo
echo "-- the quiet kind: one extra CSP directive --"
mutate_csp
check "4. CSP gains a directive it is not served    → DRIFT"   1 "$(probe)"
cp "$VJBAK" "$VJ"

echo
echo "-- the missing-name class still works (it always did) --"
add_unserved
check "5. a configured header the alias never sends → DRIFT"   1 "$(probe)"
cp "$VJBAK" "$VJ"

echo
echo "-- reachability: unknown must not read as clean (convention 14) --"
check "6. unreachable origin                        → NETWORK" 2 "$(node "$SCRIPT" https://adna-redtest-nonexistent.invalid >/dev/null 2>&1; echo $?)"
# A gated preview redirects to vercel.com/sso-api, whose login page sets all
# four header NAMES. This must refuse, not congratulate itself.
check "7. off-origin redirect target                → REFUSE"  1 "$(node "$SCRIPT" https://vercel.com >/dev/null 2>&1; echo $?)"

echo
echo "-- CONTROLS: the check is strict, not merely noisy --"
check "8. control: restored config                  → OK"      0 "$(probe)"
check "9. control: built-in demo red path           → DRIFT"   1 "$(node "$SCRIPT" "$ORIGIN" --expect-fail-demo >/dev/null 2>&1; echo $?)"

echo
echo "-- restore verified --"
if cmp -s "$VJBAK" "$VJ"; then printf '  ✅ %-56s clean\n' "10. vercel.json byte-identical to backup"; pass=$((pass+1))
else printf '  ❌ %-56s MUTATED\n' "10. vercel.json byte-identical to backup"; fail=$((fail+1)); fi

echo
echo "======================================================================"
echo "  $pass passed, $fail failed"
[ "$fail" -eq 0 ] || exit 1
