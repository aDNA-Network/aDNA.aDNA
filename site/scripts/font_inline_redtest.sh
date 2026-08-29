#!/usr/bin/env bash
# ⛩ HAUSSMANN GR-1 O1 / AC-1 · V6 — RED-TEST FOR gate-42's G42e (no font ships as a data: URI).
#
# Convention 14: a verification instrument is not believed until it has been demonstrated to fail.
# G42e went GREEN on its first run — which is precisely the state in which a real assertion and a
# no-op are indistinguishable. This harness makes it go red on the defect it was written for, and
# proves it stays green on a case it must NOT flag.
#
# ⭐ WHY THE CONTROLS ARE NOT DECORATION. The predicate could trivially have been written as
# `/data:/` over the stylesheet, which would go red for the right reason on M1 and ALSO condemn every
# legitimate inlined SVG on the site — a gate that fires on correct code teaches people to disable it.
# C1 is the case that separates "catches inlined fonts" from "catches data: URIs".
#
# ⚠ A NON-RED IS ONE OF THREE THINGS and this script names which (P4.3 + P4.4b B0's case 6):
#   (a) a weak gate, (b) a mutation aimed at the wrong assertion, (c) a mutation applied correctly
#   but INERT. Every mutation below asserts its own application first, so (c) reports as a HARNESS
#   BUG rather than as a pass.
set -uo pipefail
cd "$(dirname "$0")/.."

CONFIG="astro.config.mjs"
BACKUP="$(mktemp)"
EXTRA_CSS="src/styles/_redtest_control.css"
PASS=0; FAIL=0

cleanup() {
  cp "$BACKUP" "$CONFIG"
  rm -f "$BACKUP" "$EXTRA_CSS"
  echo "--- restoring the real tree and rebuilding ---"
  npx astro build >/dev/null 2>&1 || echo "WARNING: restore build failed — REBUILD BEFORE TRUSTING ANY GATE"
}
trap cleanup EXIT
cp "$CONFIG" "$BACKUP"

run_gate() { # -> 0 green, 1 red
  npx playwright test --project=chromium tests/gates/gate-42-console-clean.spec.ts \
    --grep "G42e" --reporter=line >/tmp/g42e_out.txt 2>&1
}

check() { # name expected(RED|GREEN)
  local name="$1" expected="$2" got
  if run_gate; then got=GREEN; else got=RED; fi
  if [ "$got" = "$expected" ]; then
    echo "  ✅ $name — $got (expected $expected)"; PASS=$((PASS+1))
  else
    echo "  ❌ $name — got $got, expected $expected"; FAIL=$((FAIL+1))
    sed -n '1,25p' /tmp/g42e_out.txt | sed 's/^/     | /'
  fi
}

echo "=== CONTROL 0 — the real tree, unmutated. Must be GREEN. ==="
npx astro build >/dev/null 2>&1 || { echo "HARNESS BUG: baseline build failed"; exit 2; }
check "C0 unmutated tree" GREEN

echo
echo "=== MUTATION 1 — remove the assetsInlineLimit override (restore Vite's 4096 default). ==="
echo "    This is THE DEFECT ITSELF: cyrillic-ext (~2028 B) falls under the threshold and inlines."
python3 - <<'PY'
import io
p = 'astro.config.mjs'
lines = io.open(p, encoding='utf-8').read().split('\n')
# Line-based, not regex: find the CODE line (has a colon, is not a `*` comment line), then drop it
# together with its continuation lines up to the one ending in a comma.
idx = [i for i, l in enumerate(lines)
       if 'assetsInlineLimit:' in l and not l.strip().startswith('*')]
assert len(idx) == 1, (
    'HARNESS BUG: expected exactly 1 assetsInlineLimit CODE line, found %d — '
    'the mutation did not apply and the gate was never exercised' % len(idx))
i = idx[0]
end = i
while end < len(lines) and not lines[end].rstrip().endswith(','):
    end += 1
del lines[i:end + 1]
io.open(p, 'w', encoding='utf-8').write('\n'.join(lines))
print('    M1 applied: removed config lines %d-%d' % (i + 1, end + 1))
PY
[ $? -eq 0 ] || { echo "HARNESS BUG: M1 failed to apply — this is NOT a passing gate"; exit 2; }
# ⚠ GUARD ON THE CODE LINE, NEVER ON THE BARE WORD. `assetsInlineLimit` also appears in this
# option's own doc comment, so a word-level grep condemns a CORRECTLY applied mutation. That false
# alarm fired on this harness's first run — the instrument wrong before the subject, again, and
# caught only because the mutation asserts its own application separately from the guard.
grep -nE '^[^*]*assetsInlineLimit:' "$CONFIG" >/dev/null && {
  echo "HARNESS BUG: the assetsInlineLimit CODE line survived M1"; exit 2; }
npx astro build >/dev/null 2>&1
INLINED=$(grep -l "data:font" dist/_astro/*.css 2>/dev/null | wc -l | tr -d ' ')
echo "    applied: assetsInlineLimit removed; stylesheets carrying an inlined font = $INLINED"
[ "$INLINED" = "0" ] && { echo "  ⚠ HARNESS BUG (case c — INERT): the mutation applied but produced no inlined font,"; echo "    so a non-red here would say nothing about the gate."; FAIL=$((FAIL+1)); }
check "M1 default inline threshold restored" RED

echo
echo "=== restore the fix ==="
cp "$BACKUP" "$CONFIG"
npx astro build >/dev/null 2>&1
check "C1 fix restored" GREEN

echo
echo "=== CONTROL 2 — a LEGITIMATE inlined SVG. Must stay GREEN. ==="
echo "    Separates 'catches inlined FONTS' from 'catches any data: URI'. A gate that fires here"
echo "    would condemn correct code, which is how a suite teaches people to run it with --grep-invert."
cat > "$EXTRA_CSS" <<'CSS'
.redtest-control-icon {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4=");
}
CSS
python3 - <<'PY'
import io
p='src/styles/global.css'; s=io.open(p,encoding='utf-8').read()
line='@import "./_redtest_control.css";\n'
assert line not in s
io.open(p,'w',encoding='utf-8').write(line+s)
PY
npx astro build >/dev/null 2>&1
SVG=$(grep -l "data:image/svg" dist/_astro/*.css 2>/dev/null | wc -l | tr -d ' ')
echo "    applied: stylesheets carrying an inlined SVG = $SVG"
[ "$SVG" = "0" ] && { echo "  ⚠ HARNESS BUG (case c — INERT): the control SVG never reached the built CSS,"; echo "    so its green says nothing about the predicate's specificity."; FAIL=$((FAIL+1)); }
check "C2 legitimate inlined SVG does NOT trip the font predicate" GREEN
python3 - <<'PY'
import io
p='src/styles/global.css'; s=io.open(p,encoding='utf-8').read()
io.open(p,'w',encoding='utf-8').write(s.replace('@import "./_redtest_control.css";\n','',1))
PY

echo
echo "==================================================="
echo "  G42e RED-TEST: $PASS passed / $FAIL failed  (1 mutation + 3 controls)"
echo "==================================================="
[ "$FAIL" -eq 0 ] || exit 1
