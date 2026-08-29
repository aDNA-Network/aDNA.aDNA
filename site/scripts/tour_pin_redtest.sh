#!/usr/bin/env bash
# ⛩ HAUSSMANN GR-1 O4 / AC-4 · V6 — RED-TEST FOR gate-36's replaced pin limb.
#
# Convention 14. This one matters more than most: THE ASSERTION IT REPLACES WAS A TAUTOLOGY that
# passed for months while the defect it named was live. A replacement that is merely a different
# tautology would be indistinguishable from a fix, so each mutation below reproduces the ACTUAL
# historical defect rather than a synthetic one.
#
# ⚠ A non-red is one of three things — weak gate · mutation aimed at the wrong assertion · mutation
# applied but INERT. Every mutation asserts its own application before the gate is consulted.
set -uo pipefail
cd "$(dirname "$0")/.."

MANIFEST="src/data/tour_manifest.json"
BACKUP="$(mktemp)"
PASS=0; FAIL=0
# The real local-only SHA from the defect: it exists in no remote, which is why every URL 404'd.
LOCAL_SHA="0364d85cba4253e1234178a61abba0e551dd79e2"

cleanup() { cp "$BACKUP" "$MANIFEST"; rm -f "$BACKUP"; echo "--- manifest restored ---"; }
trap cleanup EXIT
cp "$MANIFEST" "$BACKUP"

run_gate() {
  npx playwright test --project=chromium tests/gates/gate-36-tour-provenance.spec.ts \
    --grep "release ref" --reporter=line >/tmp/g36_out.txt 2>&1
}
check() {
  local name="$1" expected="$2" got
  if run_gate; then got=GREEN; else got=RED; fi
  if [ "$got" = "$expected" ]; then echo "  ✅ $name — $got (expected $expected)"; PASS=$((PASS+1))
  else echo "  ❌ $name — got $got, expected $expected"; FAIL=$((FAIL+1)); sed -n '1,18p' /tmp/g36_out.txt | sed 's/^/     | /'; fi
}

echo "=== CONTROL 0 — the real manifest. Must be GREEN. ==="
check "C0 real manifest (release ref v8.9)" GREEN

echo
echo "=== MUTATION 1 — THE HISTORICAL DEFECT: rebuild blob_urls from the local-only SHA. ==="
python3 - "$LOCAL_SHA" <<'PY'
import json, sys
sha = sys.argv[1]
p = 'src/data/tour_manifest.json'
d = json.load(open(p))
n = 0
for f in d['files']:
    before = f['blob_url']
    f['blob_url'] = before.replace('/blob/' + d['source_ref'] + '/', '/blob/' + sha + '/')
    if f['blob_url'] != before:
        n += 1
assert n >= 4, f'HARNESS BUG: rewrote only {n} blob_url(s) — the gate was never exercised'
json.dump(d, open(p, 'w'), indent=2)
print(f'    applied: {n} blob_url(s) now built from the local-only SHA')
PY
[ $? -eq 0 ] || { echo "HARNESS BUG: M1 failed to apply"; exit 2; }
check "M1 URLs built from a local-only commit SHA" RED
cp "$BACKUP" "$MANIFEST"

echo
echo "=== MUTATION 2 — a mutable ref instead of an immutable release tag. ==="
echo "    'main' resolves publicly TODAY and silently stops describing these bytes tomorrow —"
echo "    convention 15's pin-supersession face. A gate that only checked 'does it 404' would"
echo "    pass this, which is why the assertion is on the REF FORM, not on reachability."
python3 - <<'PY'
import json
p = 'src/data/tour_manifest.json'
d = json.load(open(p))
assert d['source_ref'] != 'main', 'HARNESS BUG: already main'
d['source_ref'] = 'main'
json.dump(d, open(p, 'w'), indent=2)
print('    applied: source_ref = main')
PY
check "M2 mutable ref (main) instead of an immutable tag" RED
cp "$BACKUP" "$MANIFEST"

echo
echo "=== CONTROL 1 — restored. Must be GREEN. ==="
check "C1 restored" GREEN

echo
echo "=== CONTROL 2 — a DIFFERENT valid release tag must stay GREEN. ==="
echo "    The gate asserts the pin's FORM and provenance, not one particular version — otherwise"
echo "    the next template release turns it red for being correct."
python3 - <<'PY'
import json
p = 'src/data/tour_manifest.json'
d = json.load(open(p))
old = d['source_ref']
d['source_ref'] = 'v9.1'
for f in d['files']:
    f['blob_url'] = f['blob_url'].replace('/blob/' + old + '/', '/blob/v9.1/')
json.dump(d, open(p, 'w'), indent=2)
print('    applied: source_ref = v9.1 (a hypothetical future release)')
PY
check "C2 a different valid release tag stays GREEN" GREEN

echo
echo "==================================================="
echo "  gate-36 PIN RED-TEST: $PASS passed / $FAIL failed  (2 mutations + 3 controls)"
echo "==================================================="
[ "$FAIL" -eq 0 ] || exit 1
