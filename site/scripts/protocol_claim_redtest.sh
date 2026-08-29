#!/usr/bin/env bash
# ⛩ HAUSSMANN GR-1 O2 / AC-2 · V6 — RED-TEST FOR gate-17's G19 (no present-tense protocol claim on
# any machine surface).
#
# Convention 14. ⭐ THE LOAD-BEARING PAIR HERE IS M2 vs C2, not M1. G19 carries an EXCLUSION — the
# changelog entry that retired the claim quotes it, and must. An exclusion is the cheapest possible
# way to fake a gate green, so the harness must prove it is SCOPED: the same sentence must go RED
# outside the changelog and stay GREEN inside it. Without that pair, "excluded the changelog" is
# indistinguishable from "stopped looking".
set -uo pipefail
cd "$(dirname "$0")/.."

LLMS="src/pages/llms.txt.ts"
VICTIM="src/content/reference/writing-guidelines.mdx"
B1="$(mktemp)"; B2="$(mktemp)"
PASS=0; FAIL=0

cleanup() {
  cp "$B1" "$LLMS"; cp "$B2" "$VICTIM"; rm -f "$B1" "$B2"
  echo "--- restoring sources and rebuilding ---"
  npx astro build >/dev/null 2>&1 || echo "WARNING: restore build failed — REBUILD BEFORE TRUSTING ANY GATE"
}
trap cleanup EXIT
cp "$LLMS" "$B1"; cp "$VICTIM" "$B2"

run_gate() {
  npx playwright test --project=chromium tests/gates/gate-17-agentic.spec.ts \
    --grep "G19" --reporter=line >/tmp/g19_out.txt 2>&1
}
check() {
  local name="$1" expected="$2" got
  if run_gate; then got=GREEN; else got=RED; fi
  if [ "$got" = "$expected" ]; then echo "  ✅ $name — $got (expected $expected)"; PASS=$((PASS+1))
  else echo "  ❌ $name — got $got, expected $expected"; FAIL=$((FAIL+1)); sed -n '1,18p' /tmp/g19_out.txt | sed 's/^/     | /'; fi
}

echo "=== CONTROL 0 — the real tree (changelog still quotes the retired claim). Must be GREEN. ==="
npx astro build >/dev/null 2>&1 || { echo "HARNESS BUG: baseline build failed"; exit 2; }
CL=$(grep -c "the Lattice Protocol" dist/changelog.md 2>/dev/null; true)
echo "    changelog.md mentions of the phrase = $CL (the exclusion must have something to exclude)"
if [ "$CL" -lt 1 ] 2>/dev/null; then
  echo "  ⚠ HARNESS BUG: nothing in the changelog to exclude, so C2 below proves nothing."; exit 2
fi
check "C0 real tree" GREEN

echo
echo "=== MUTATION 1 — THE HISTORICAL DEFECT: restore the claim in llms.txt. ==="
python3 - <<'PY'
import io
p='src/pages/llms.txt.ts'; s=io.open(p,encoding='utf-8').read()
o='${vaultCount} vaults and ${edgeCount} cited relationships, each declared by the vault it belongs to.'
assert s.count(o)==1, 'HARNESS BUG: M1 anchor not found — the gate was never exercised'
io.open(p,'w',encoding='utf-8').write(s.replace(o,'${vaultCount} vaults, ${edgeCount} cited relationships, federating on the Lattice Protocol.',1))
PY
[ $? -eq 0 ] || { echo "HARNESS BUG: M1 failed to apply"; exit 2; }
npx astro build >/dev/null 2>&1
N=$(grep -c "federating on the Lattice Protocol" dist/llms.txt 2>/dev/null; true)
echo "    applied: dist/llms.txt now carries the claim = $N"
if [ "$N" -lt 1 ] 2>/dev/null; then echo "  ⚠ HARNESS BUG (case c — INERT): the claim never reached the built surface."; FAIL=$((FAIL+1)); fi
check "M1 llms.txt asserts the network runs on the protocol" RED
cp "$B1" "$LLMS"

echo
echo "=== MUTATION 2 — THE SCOPE TEST: the same sentence on a NON-changelog page. ==="
echo "    If the exclusion were a blanket amnesty rather than a scoped one, this would pass."
python3 - <<'PY'
import io
p='src/content/reference/writing-guidelines.mdx'; s=io.open(p,encoding='utf-8').read()
assert 'built on the Lattice Protocol' not in s, 'HARNESS BUG: victim page already carries the claim'
io.open(p,'w',encoding='utf-8').write(s.rstrip() + '\n\nThe network is built on the Lattice Protocol.\n')
PY
[ $? -eq 0 ] || { echo "HARNESS BUG: M2 failed to apply"; exit 2; }
npx astro build >/dev/null 2>&1
N2=$(grep -rl "built on the Lattice Protocol" dist/reference/ 2>/dev/null | wc -l | tr -d ' ')
echo "    applied: non-changelog built surfaces carrying the claim = $N2"
if [ "$N2" -lt 1 ] 2>/dev/null; then echo "  ⚠ HARNESS BUG (case c — INERT): the claim never reached a built twin."; FAIL=$((FAIL+1)); fi
check "M2 the claim on a non-changelog page" RED
cp "$B2" "$VICTIM"

echo
echo "=== restore + CONTROL 1 ==="
npx astro build >/dev/null 2>&1
check "C1 restored" GREEN

echo
echo "=== CONTROL 2 — THE EXCLUSION IS SCOPED, NOT A BLANKET. Must stay GREEN. ==="
echo "    C0 and C1 are already green WITH the changelog quoting the retired claim — that is this"
echo "    control, and M2 is its counterpart: same sentence, different surface, RED. The pair is"
echo "    what separates 'excluded the changelog' from 'stopped looking'."
echo "  ✅ C2 established by C0/C1 (green with the quote present) paired against M2 (red elsewhere)"
PASS=$((PASS+1))

echo
echo "==================================================="
echo "  G19 RED-TEST: $PASS passed / $FAIL failed  (2 mutations + 3 controls)"
echo "==================================================="
[ "$FAIL" -eq 0 ] || exit 1
