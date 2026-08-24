#!/usr/bin/env bash
# =============================================================================
# leak_json_redtest.sh — demonstrate gate-27's `.json` widening FAILS
# (HAUSSMANN P4.4a A1 / F-i · campaign convention 14)
#
# F-i: scanTargets() filtered on `.html` and `.md`, so /vaults.json and
# /api/registry.v1.json — 81 KB of published surface each — were UNLINTED.
#
# ⭐ CASE 2 IS THE ONE THAT PROVES THE DEFECT WAS REAL. It plants a leak in a
# JSON file, reverts scanTargets() to the old two-extension filter, and asserts
# the gate goes GREEN — i.e. that the gate genuinely could not see it. Case 1 on
# its own would only show the widened gate works; it could not show the old one
# was broken, and "the fix was needed" is the claim being made.
#
# Case 5 guards the other direction: the enum allowance must be SCOPED to the
# two endpoints. A blanket grant would pass every case above while silently
# retiring raw_enum site-wide.
#
# Every mutation asserts its own match count. A mutation that no longer applies
# reports as a HARNESS BUG, never as a pass — P4.1's restructure made an older
# mutation stop matching, and that is the only reason it was caught.
# =============================================================================
set -u -o pipefail

cd "$(dirname "${BASH_SOURCE[0]}")/.." || exit 9
SPEC="tests/gates/gate-27-leak-lint.spec.ts"
JSONF="dist/vaults.json"
HTMLF="dist/index.html"

for f in "$SPEC" "$JSONF" "$HTMLF"; do
  [ -f "$f" ] || { echo "⛔ missing $f — run \`npx astro build\` first"; exit 9; }
done

ALLOWF="tests/gates/fixtures/leak_allowlist.json"
SPECBAK="$(mktemp)"; JSONBAK="$(mktemp)"; HTMLBAK="$(mktemp)"; ALLOWBAK="$(mktemp)"
cp "$SPEC" "$SPECBAK"; cp "$JSONF" "$JSONBAK"; cp "$HTMLF" "$HTMLBAK"; cp "$ALLOWF" "$ALLOWBAK"
# ⚠ The allowlist is backed up BY COPY, never restored with `git checkout --`:
# this session's own F-i entries are uncommitted, so a checkout would silently
# delete the work the red-test exists to prove.
restore() {
  cp "$SPECBAK" "$SPEC"; cp "$JSONBAK" "$JSONF"; cp "$HTMLBAK" "$HTMLF"; cp "$ALLOWBAK" "$ALLOWF"
  rm -f "$SPECBAK" "$JSONBAK" "$HTMLBAK" "$ALLOWBAK"
}
trap restore EXIT

pass=0; fail=0
check() { if [ "$2" = "$3" ]; then printf '  ✅ %-56s %s\n' "$1" "$3"; pass=$((pass+1));
          else printf '  ❌ %-56s expected %s, got %s\n' "$1" "$2" "$3"; fail=$((fail+1)); fi; }

leak() { # -> passed | failed
  local out
  out="$(npx playwright test "$SPEC" -g 'no internal-language leak' --reporter=line 2>&1)"
  if grep -qE '[0-9]+ failed' <<<"$out"; then echo failed
  elif grep -qE '[0-9]+ passed' <<<"$out"; then echo passed
  else echo UNKNOWN; printf '%s\n' "$out" | tail -5 >&2; fi
}
reach() { # the self-defence assertion
  local out
  out="$(npx playwright test "$SPEC" -g 'scan actually reaches' --reporter=line 2>&1)"
  if grep -qE '[0-9]+ failed' <<<"$out"; then echo failed
  elif grep -qE '[0-9]+ passed' <<<"$out"; then echo passed
  else echo UNKNOWN; fi
}

# Plant a token into a JSON string value so the file stays valid JSON.
plant_json() { # token
  python3 - "$1" <<'PYEOF'
import json,sys
tok=sys.argv[1]
d=json.load(open('dist/vaults.json'))
assert isinstance(d.get('caveat'),str), 'MUTATION PREMISE FALSE: no string `caveat` key — harness bug, not a pass'
d['caveat']=d['caveat']+' '+tok
json.dump(d,open('dist/vaults.json','w'))
back=json.load(open('dist/vaults.json'))
assert tok in back['caveat'], 'MUTATION DID NOT APPLY — harness bug, not a pass'
PYEOF
}

plant_html() { # token
  python3 - "$1" <<'PYEOF'
import sys
tok=sys.argv[1]
p='dist/index.html'
s=open(p,encoding='utf8').read()
anchor='</body>'
assert s.count(anchor)==1, f'MUTATION DID NOT APPLY (anchor matched {s.count(anchor)}, expected 1) — harness bug'
open(p,'w',encoding='utf8').write(s.replace(anchor,f'<p>{tok}</p>{anchor}',1))
PYEOF
}

narrow_scan() { # revert scanTargets to the pre-F-i two-extension filter
  python3 - <<'PYEOF'
p='tests/gates/gate-27-leak-lint.spec.ts'
s=open(p).read()
old="e.name.endsWith('.html') || e.name.endsWith('.md') || e.name.endsWith('.json')"
new="e.name.endsWith('.html') || e.name.endsWith('.md')"
assert s.count(old)==1, f'MUTATION DID NOT APPLY (matched {s.count(old)}, expected 1) — harness bug, not a pass'
open(p,'w').write(s.replace(old,new))
PYEOF
}

blanket_allow() { # widen the enum allowance from the two endpoints to everything
  python3 - <<'PYEOF'
import json
p='tests/gates/fixtures/leak_allowlist.json'
d=json.load(open(p))
n=0
for e in d['entries']:
    if e['pattern']=='raw_enum' and e['surface'] in ('vaults.json','api/registry.v1.json'):
        e['surface']='**'; n+=1
assert n==2, f'MUTATION DID NOT APPLY (matched {n}, expected 2) — harness bug, not a pass'
json.dump(d,open(p,'w'),indent=2,ensure_ascii=False)
PYEOF
}

echo
echo "gate-27 .json widening — red-test (F-i)"
echo "======================================================================"

echo "-- baseline --"
check "0. clean tree                                → passed" passed "$(leak)"

echo
echo "-- ⭐ THE DEFECT: a leak in JSON must be CAUGHT now, and was MISSED before --"
plant_json "how/campaigns/campaign_haussmann/artifacts"
check "1. internal path planted in vaults.json      → failed" failed "$(leak)"
narrow_scan
check "2. …same leak, pre-F-i .html|.md filter      → passed" passed "$(leak)"
cp "$SPECBAK" "$SPEC"
cp "$JSONBAK" "$JSONF"

echo
echo "-- every OTHER leak class reaches JSON in full, at zero cost --"
plant_json "mission_haussmann_p4_4_ci_hardening"
check "3. mission id planted in vaults.json         → failed" failed "$(leak)"
cp "$JSONBAK" "$JSONF"
plant_json "Operation Haussmann"
check "4. codename planted in vaults.json           → failed" failed "$(leak)"
cp "$JSONBAK" "$JSONF"

echo
echo "-- ⭐ THE ALLOWANCE IS SCOPED, not a site-wide retirement of raw_enum --"
plant_html "org_graph"
check "5. enum planted in index.html                → failed" failed "$(leak)"
blanket_allow
check "6. …same leak under a blanket '**' allowance → passed" passed "$(leak)"
cp "$ALLOWBAK" "$ALLOWF"
cp "$HTMLBAK" "$HTMLF"

echo
echo "-- the widening defends itself against a future narrowing --"
narrow_scan
check "7. scanTargets narrowed → reach test          → failed" failed "$(reach)"
cp "$SPECBAK" "$SPEC"

echo
echo "-- CONTROLS: the gate is strict, not merely noisy --"
check "8. control: restored tree                    → passed" passed "$(leak)"
check "9. control: reach test on restored tree      → passed" passed "$(reach)"
# The enums that DO belong on the endpoints must stay allowed — otherwise the
# "fix" is just a gate that fails on a good tree.
check "10. control: real enums on real endpoints    → passed" passed "$(leak)"

echo
echo "======================================================================"
echo "  $pass passed, $fail failed"
[ "$fail" -eq 0 ] || exit 1
