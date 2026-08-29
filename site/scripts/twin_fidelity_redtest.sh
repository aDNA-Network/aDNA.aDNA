#!/usr/bin/env bash
# ⛩ HAUSSMANN GR-1 O3 / AC-3 · V6 — RED-TEST FOR gate-17's G18 (twin fidelity).
#
# Convention 14: an instrument is not believed until it has been demonstrated to fail. G18 went
# green on its first run, which is precisely the state in which a real assertion and a no-op are
# indistinguishable — and this gate exists BECAUSE seven G12 assertions were green over a corrupted
# twin for weeks.
#
# ⚠ A NON-RED IS ONE OF THREE THINGS (P4.3 + P4.4b B0's case 6): a weak gate · a mutation aimed at
# the wrong assertion · a mutation applied correctly but INERT. Each mutation below asserts its own
# application against the BUILT OUTPUT — not against the source — so case (c) reports as a HARNESS
# BUG. (Grepping the source only ever proves "the mutation is in the file", which is not the claim
# "the mutation changes the render" — convention 17's amendment, breached inside the harness that
# enforced it at P4.4b B0.)
set -uo pipefail
cd "$(dirname "$0")/.."

EMITTER="scripts/emit_bespoke_twins.mjs"
BACKUP="$(mktemp)"
PASS=0; FAIL=0

cleanup() {
  cp "$BACKUP" "$EMITTER"; rm -f "$BACKUP"
  echo "--- restoring the real emitter and rebuilding ---"
  npx astro build >/dev/null 2>&1 || echo "WARNING: restore build failed — REBUILD BEFORE TRUSTING ANY GATE"
}
trap cleanup EXIT
cp "$EMITTER" "$BACKUP"

run_gate() {
  npx playwright test --project=chromium tests/gates/gate-17-agentic.spec.ts \
    --grep "G18" --reporter=line >/tmp/g18_out.txt 2>&1
}

check() { # name expected(RED|GREEN)
  local name="$1" expected="$2" got
  if run_gate; then got=GREEN; else got=RED; fi
  if [ "$got" = "$expected" ]; then
    echo "  ✅ $name — $got (expected $expected)"; PASS=$((PASS+1))
  else
    echo "  ❌ $name — got $got, expected $expected"; FAIL=$((FAIL+1))
    sed -n '1,20p' /tmp/g18_out.txt | sed 's/^/     | /'
  fi
}

# The placeholder the whole finding is about, as it appears in a correct twin.
# ⚠ NO `|| echo 0`. `grep -c` PRINTS "0" and EXITS 1 when it matches nothing, so `|| echo 0`
# appends a SECOND zero and the guard compares "0\n0" against "0" — reporting a HARNESS BUG on a
# mutation that was in fact correctly inert-checked. That false alarm fired on this script's first
# run. The idiom is `; true`, never `|| echo`.
placeholders_in_twin() { grep -c '<name>' dist/get-started.md 2>/dev/null; true; }

echo "=== CONTROL 0 — the real tree. Must be GREEN, with placeholders actually present. ==="
npx astro build >/dev/null 2>&1 || { echo "HARNESS BUG: baseline build failed"; exit 2; }
N=$(placeholders_in_twin)
HEADINGS_BEFORE=$(grep -cE '^#{1,6} ' dist/get-started.md 2>/dev/null; true)
echo "    <name> occurrences in dist/get-started.md = $N · headings = $HEADINGS_BEFORE"
[ "$N" -lt 2 ] && { echo "  ⚠ HARNESS BUG: the baseline twin has no placeholders to lose,"; echo "    so every mutation below would be INERT and every green meaningless."; exit 2; }
check "C0 real tree" GREEN

echo
echo "=== MUTATION 1 — revert the fix: drop restoreProtected(), leaving the sentinels unresolved. ==="
python3 - <<'PY'
import io
p='scripts/emit_bespoke_twins.mjs'; s=io.open(p,encoding='utf-8').read()
o='return restoreProtected(tidy(clean(s)));'
assert s.count(o)==1, 'HARNESS BUG: M1 anchor not found — the gate was never exercised'
io.open(p,'w',encoding='utf-8').write(s.replace(o,'return tidy(clean(s));',1))
PY
[ $? -eq 0 ] || { echo "HARNESS BUG: M1 failed to apply"; exit 2; }
npx astro build >/dev/null 2>&1
M1N=$(placeholders_in_twin)
echo "    applied: <name> in twin = $M1N (expect 0 — the content is stranded in the store)"
if [ "$M1N" -ne 0 ] 2>/dev/null; then
  echo "  ⚠ HARNESS BUG (case c — INERT): the mutation applied but the twin still carries the placeholder."
  FAIL=$((FAIL+1))
fi
check "M1 restoreProtected removed" RED
cp "$BACKUP" "$EMITTER"

echo
echo "=== MUTATION 2 — the ORIGINAL BUG, exactly: unprotect the inline-<code> branch. ==="
echo "    This is P1-4's own mechanism — decode() output handed back to a later blind stripInline."
python3 - <<'PY'
import io
p='scripts/emit_bespoke_twins.mjs'; s=io.open(p,encoding='utf-8').read()
o='`\\`${protect(decode(stripInline(c)).trim())}\\``'
assert s.count(o)==1, 'HARNESS BUG: M2 anchor not found — the gate was never exercised'
io.open(p,'w',encoding='utf-8').write(s.replace(o,'`\\`${decode(stripInline(c)).trim()}\\``',1))
PY
[ $? -eq 0 ] || { echo "HARNESS BUG: M2 failed to apply"; exit 2; }
npx astro build >/dev/null 2>&1
echo "    applied: 'Replace \`\`' (the empty code span) present = $(grep -c 'Replace ``' dist/get-started.md 2>/dev/null || echo 0)"
check "M2 original bug restored on the inline-code path" RED
cp "$BACKUP" "$EMITTER"

echo
echo "=== restore + CONTROL 1 ==="
npx astro build >/dev/null 2>&1
check "C1 fix restored" GREEN

echo
echo "=== CONTROL 2 — ROUGHNESS IS NOT INFIDELITY. Must stay GREEN. ==="
echo "    A tier-C twin is DELIBERATELY rougher than its page (the emitter's declared trade)."
echo "    Flattening a heading changes the twin a lot and loses no placeholder — a gate that fires"
echo "    here would be a prose-equivalence check wearing a fidelity check's clothes, and would"
echo "    make the emitter's own documented trade-off un-shippable."
python3 - <<'PY'
import io
p='scripts/emit_bespoke_twins.mjs'; s=io.open(p,encoding='utf-8').read()
o="      (_m, inner) => `\\n\\n${'#'.repeat(level)} ${clean(inner)}\\n\\n`);"
assert s.count(o)==1, 'HARNESS BUG: C2 anchor not found'
io.open(p,'w',encoding='utf-8').write(s.replace(o,"      (_m, inner) => `\\n\\n${clean(inner)}\\n\\n`);",1))
PY
npx astro build >/dev/null 2>&1
# ⚠ ASSERT THE DELTA, NOT AN ABSOLUTE ZERO. The twin legitimately keeps one `# ` line that the
# h1-h6 loop does not produce, so "expect 0" measured a property this mutation never governed —
# a guard narrower than its conclusion, in the harness written to catch exactly that.
HEADINGS_AFTER=$(grep -cE '^#{1,6} ' dist/get-started.md 2>/dev/null; true)
echo "    applied: headings before=$HEADINGS_BEFORE after=$HEADINGS_AFTER (the mutation must REMOVE some)"
if [ "$HEADINGS_AFTER" -ge "$HEADINGS_BEFORE" ] 2>/dev/null; then
  echo "  ⚠ HARNESS BUG (case c — INERT): flattening removed no heading, so this control proves nothing."
  FAIL=$((FAIL+1))
fi
check "C2 a rougher twin that loses no placeholder stays GREEN" GREEN

echo
echo "==================================================="
echo "  G18 RED-TEST: $PASS passed / $FAIL failed  (2 mutations + 3 controls)"
echo "==================================================="
[ "$FAIL" -eq 0 ] || exit 1
