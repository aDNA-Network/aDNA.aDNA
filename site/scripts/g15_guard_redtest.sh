#!/usr/bin/env bash
# =============================================================================
# g15_guard_redtest.sh — demonstrate G15's skip guards FAIL
# (HAUSSMANN P4.4a A1 / F-p · campaign convention 14)
#
# F-p: both G15 tests guarded on `!existsSync(configPath)`. The Astro Vercel
# adapter writes config.json AT BUILD TIME, so after a bare `npx astro build`
# — or after `inject_redirects.mjs` alone, which is convention 6's own
# out-of-deploy instruction — the FILE exists while the ROUTES do not. The
# guard never fired and the tests were guaranteed-red on a good tree.
#
# ⭐ THE CASE THAT MATTERS IS 5. Skipping when a precondition is missing is one
# character away from disabling a gate, so the guard has to be shown to be
# LOAD-BEARING, not merely quiet: case 5 mutates the guard back to the old
# `existsSync`-only form against the same fixture and asserts the gate goes RED.
# Without it, "the gate no longer fails" and "the gate no longer runs" are
# indistinguishable — which is the exact vacuity this campaign keeps finding.
#
# Cases 6 and 7 are the other half: with routes present, real defects must
# still FAIL. A guard that skipped everything would pass 1–5 and fail these.
# =============================================================================
set -u -o pipefail

cd "$(dirname "${BASH_SOURCE[0]}")/.." || exit 9
CFG=".vercel/output/config.json"
SPEC="tests/gates/gate-17-agentic.spec.ts"
BAK="$(mktemp)"
SPECBAK="$(mktemp)"

if [ ! -f "$CFG" ]; then
  echo "⛔ $CFG missing — run: npx astro build && node scripts/inject_redirects.mjs . && node scripts/inject_negotiation.mjs ."
  exit 9
fi

cp "$CFG" "$BAK"
cp "$SPEC" "$SPECBAK"
restore() { cp "$BAK" "$CFG"; cp "$SPECBAK" "$SPEC"; rm -f "$BAK" "$SPECBAK"; }
trap restore EXIT

pass=0; fail=0
check() { # name expected actual
  if [ "$2" = "$3" ]; then printf '  ✅ %-56s %s\n' "$1" "$3"; pass=$((pass+1))
  else printf '  ❌ %-56s expected %s, got %s\n' "$1" "$2" "$3"; fail=$((fail+1)); fi
}

# Run G15 and classify the outcome as passed | skipped | failed.
g15() { # grep-pattern
  local out
  out="$(npx playwright test "$SPEC" -g "$1" --reporter=line 2>&1)"
  if grep -qE '[0-9]+ failed' <<<"$out"; then echo failed
  elif grep -qE '[0-9]+ skipped' <<<"$out"; then echo skipped
  elif grep -qE '[0-9]+ passed' <<<"$out"; then echo passed
  else echo "UNKNOWN"; printf '%s\n' "$out" | tail -5 >&2; fi
}

# Fixture writers, all derived from the real config so nothing is invented.
strip_twins()     { python3 -c "
import json,sys
c=json.load(open('$BAK'))
c['routes']=[r for r in c['routes'] if not (isinstance(r,dict) and (r.get('headers') or {}).get('x-adna-twin'))]
json.dump(c,open('$CFG','w'))"; }
strip_redirects() { python3 -c "
import json,sys
c=json.load(open('$BAK'))
c['routes']=[r for r in c['routes'] if not (isinstance(r,dict) and r.get('status') in (301,302,307,308) and (r.get('headers') or {}).get('Location'))]
json.dump(c,open('$CFG','w'))"; }
break_vary()      { python3 -c "
import json
c=json.load(open('$BAK'))
n=0
for r in c['routes']:
    if isinstance(r,dict) and (r.get('headers') or {}).get('x-adna-twin') and r['headers'].get('Vary')=='Accept':
        del r['headers']['Vary']; n+=1; break
assert n==1, f'MUTATION DID NOT APPLY (matched {n}, expected 1) — harness bug, not a pass'
json.dump(c,open('$CFG','w'))"; }
strand_redirect() { python3 -c "
import json
c=json.load(open('$BAK'))
rs=c['routes']
h=next(i for i,r in enumerate(rs) if isinstance(r,dict) and r.get('handle'))
i=next(i for i,r in enumerate(rs) if isinstance(r,dict) and r.get('status') in (301,302,307,308) and (r.get('headers') or {}).get('Location'))
assert i<h, 'MUTATION PREMISE FALSE: no redirect before the boundary — harness bug, not a pass'
rs.append(rs.pop(i))
json.dump(c,open('$CFG','w'))"; }

echo
echo "G15 skip-guard — red-test (F-p)"
echo "======================================================================"

echo "-- baseline: both injectors run, gates must RUN and PASS --"
cp "$BAK" "$CFG"
check "0a. negotiation test, full config            → passed" passed "$(g15 'one Vary-carrying negotiation route')"
check "0b. redirect test, full config               → passed" passed "$(g15 'did not displace the redirects')"

echo
echo "-- ⭐ F-p's DEFECT: the post-bare-build state must SKIP, not fail --"
strip_twins
check "1. no x-adna-twin routes → negotiation test  → skipped" skipped "$(g15 'one Vary-carrying negotiation route')"
strip_redirects
check "2. no redirect routes → redirect test        → skipped" skipped "$(g15 'did not displace the redirects')"
rm -f "$CFG"
check "3. config.json absent → negotiation test     → skipped" skipped "$(g15 'one Vary-carrying negotiation route')"
check "4. config.json absent → redirect test        → skipped" skipped "$(g15 'did not displace the redirects')"

echo
echo "-- ⭐ THE GUARD IS LOAD-BEARING: revert it and the same fixture goes RED --"
strip_twins
# Mutate the new guard back to the old existsSync-only form. If this does not
# turn case 1's fixture red, the guard was never what was skipping.
python3 - <<'PYEOF'
import re,sys
p='tests/gates/gate-17-agentic.spec.ts'
s=open(p).read()
old="    test.skip(twinRoutesOf(cfg).length === 0, NO_NEGOTIATION);\n"
assert s.count(old)==1, f'MUTATION DID NOT APPLY (matched {s.count(old)}, expected 1) — harness bug, not a pass'
open(p,'w').write(s.replace(old,""))
PYEOF
check "5. guard removed, same fixture               → failed"  failed  "$(g15 'one Vary-carrying negotiation route')"
cp "$SPECBAK" "$SPEC"

echo
echo "-- CONTROLS: with routes present, real defects must still FAIL --"
break_vary
check "6. a twin route loses Vary: Accept           → failed"  failed  "$(g15 'one Vary-carrying negotiation route')"
strand_redirect
check "7. a redirect pushed past the boundary       → failed"  failed  "$(g15 'did not displace the redirects')"

echo
echo "-- restore control: the tree is good again --"
cp "$BAK" "$CFG"
check "8. control: restored config                  → passed" passed "$(g15 'one Vary-carrying negotiation route')"

echo
echo "======================================================================"
echo "  $pass passed, $fail failed"
[ "$fail" -eq 0 ] || exit 1
