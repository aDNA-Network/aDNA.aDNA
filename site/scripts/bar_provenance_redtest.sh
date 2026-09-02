#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# bar_provenance_redtest.sh — V2's PROVENANCE limb for HAUSSMANN P4.4b B2b.
#
# V2 [asserts AC3, AC4]: "a deliberate budget breach goes red, AND A BAR EDITED BY HAND GOES RED".
# The breach half is gate-19's own business and is long-proven; THIS harness proves the half
# DEFECT-4 said was "tested by nothing" — that hand-editing a bar, or its provenance, goes red.
#
# ⚠ CONVENTION 14, SECOND CLAUSE (GR-3, 2026-09-01): A DEMONSTRATION IS ONLY WORTH WHAT IT CAN
# ATTRIBUTE. console_clean_redtest.sh reported 5/5 for gate-42's entire life while being wrong about
# which assertion one case exercised — so every case here DECLARES the exact set of assertions it
# expects to turn red, and a red via any other set is reported as a HARNESS BUG, never as a pass.
#
# ⚠ Several mutations legitimately red MORE THAN ONE limb, because the limbs share one recorded
# object. That is not a defect; it is why the expected set is declared per case rather than assumed
# to be a singleton.
#
# Usage:  bash scripts/bar_provenance_redtest.sh
# Run from site/. Restores every mutated file on exit, including on interrupt.
# ---------------------------------------------------------------------------
set -uo pipefail
cd "$(dirname "$0")/.." || exit 2

PROV="tests/gates/bar_provenance.json"
GATE19="tests/gates/gate-19-lighthouse-budget.spec.ts"
SPEC="tests/gates/gate-53-bar-provenance.spec.ts"
WORK="$(mktemp -d)"

cleanup() { cp "$WORK/prov.bak" "$PROV" 2>/dev/null; cp "$WORK/gate19.bak" "$GATE19" 2>/dev/null; rm -rf "$WORK"; }
trap cleanup EXIT INT TERM
cp "$PROV" "$WORK/prov.bak"
cp "$GATE19" "$WORK/gate19.bak"

PASS=0; FAIL=0

# Run gate-53 and print the sorted set of failing assertion ids (G53a..G53f), space separated.
failing_set() {
  npx playwright test --project=chromium "$SPEC" --reporter=json 2>/dev/null \
    | python3 -c '
import json,sys,re
try: d=json.load(sys.stdin)
except Exception: print("PARSE_ERROR"); sys.exit()
out=set()
def walk(s):
    for spec in s.get("specs",[]):
        if not spec.get("ok",True):
            m=re.match(r"(G53[a-f])",spec.get("title",""))
            if m: out.add(m.group(1))
    for sub in s.get("suites",[]): walk(sub)
for su in d.get("suites",[]): walk(su)
print(" ".join(sorted(out)))'
}

# case <name> <expected-set> <mutation-shell>
case_run() {
  local name="$1" expected="$2" mutate="$3"
  cp "$WORK/prov.bak" "$PROV"; cp "$WORK/gate19.bak" "$GATE19"
  eval "$mutate"
  local actual; actual="$(failing_set)"
  if [ "$actual" = "$expected" ]; then
    PASS=$((PASS+1)); printf '  ✅ %-42s red exactly at: %s\n' "$name" "${actual:-<none>}"
  else
    FAIL=$((FAIL+1))
    if [ -z "$actual" ] && [ -n "$expected" ]; then
      printf '  ❌ %-42s NO RED. Gate did not react. expected: %s\n' "$name" "$expected"
    else
      printf '  🐛 %-42s HARNESS BUG — red via the WRONG assertion(s).\n     expected: [%s]\n     actual:   [%s]\n' \
        "$name" "$expected" "${actual:-<none>}"
    fi
  fi
  cp "$WORK/prov.bak" "$PROV"; cp "$WORK/gate19.bak" "$GATE19"
}

# Small JSON edit helper — operates on the provenance record.
jedit() { python3 -c "
import json,sys
p='$PROV'
d=json.load(open(p))
$1
json.dump(d,open(p,'w'),indent=2)
"; }

echo "gate-53 bar-provenance red-test — 7 mutations + 2 controls"
echo

# --- MUTATIONS ------------------------------------------------------------
# ⭐ THE CASE DEFECT-C EXISTS FOR: the bar in force moves, the provenance record does not.
# Without G53b a provenance block could cite a source while gate-19 ran any number at all.
case_run "bar in force moved, record stale" "G53b" \
  "sed -i '' 's/perfMin: 0.9/perfMin: 0.95/' '$GATE19'"

case_run "recorded value_in_force hand-edited" "G53b" \
  "jedit \"d['bars']['perfMin']['value_in_force']=0.95\""

case_run "a bar dropped from the record" "G53b G53c G53e" \
  "jedit \"del d['bars']['clsMax']\""

case_run "counterpart value hand-edited" "G53c" \
  "jedit \"d['bars']['lcpMaxMs']['external_counterpart']['value']=3000\""

# Reds G53a (self-consistency) AND G53f (live source disagrees) — declared, not assumed.
case_run "source sha256 hand-edited" "G53a G53f" \
  "jedit \"d['source_refs']['webforge_content_static']['sha256']='0'+d['source_refs']['webforge_content_static']['sha256'][1:]\""

# A new leaf appears in the class and nobody dispositions it. Hash updated so G53a stays green;
# G53f reds because the LIVE class has no such leaf — which is the honest signal here.
case_run "undispositioned new leaf in the class" "G53e G53f" \
  "python3 -c \"
import json,hashlib
p='$PROV'; d=json.load(open(p)); r=d['source_refs']['webforge_content_static']
c=json.loads(r['canonical']); c['metrics']['fcp_ms']=1800
can=json.dumps(c,sort_keys=True,separators=(',',':'))
r['canonical']=can; r['sha256']=hashlib.sha256(can.encode()).hexdigest()
json.dump(d,open(p,'w'),indent=2)\""

case_run "no-counterpart bar loses its reason" "G53d" \
  "jedit \"d['bars']['perfMin']['why_no_counterpart']='too short'\""

# --- CONTROLS -------------------------------------------------------------
# A control that passes for the WRONG reason is worse than no control (P4.4b B0's finding), so
# control 2 mutates a REAL field the gate should be indifferent to — proving the gate reacts to
# the claim and not merely to the file's mtime or byte length.
case_run "CONTROL unmutated tree" "" "true"
case_run "CONTROL irrelevant field changed" "" \
  "jedit \"d['_meta']['recorded_by']='agent_control_probe'\""

echo
echo "  $PASS pass / $FAIL fail  (9 cases: 7 mutations + 2 controls)"
[ "$FAIL" -eq 0 ] || exit 1
