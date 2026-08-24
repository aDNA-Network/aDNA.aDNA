#!/usr/bin/env bash
# gate38_redtest.sh — red-prove gate-38 (HAUSSMANN P4.2 O2, campaign convention 14).
#
# "A verification instrument is not believed until it has been demonstrated to fail."
# gate-38 went green on its first run because the site already conformed — J1 was clean 226/226
# and the A5/B4 fix had just landed. A green first run is exactly the state in which a no-op
# assertion and a real one are indistinguishable, so each of gate-38's four claims gets a planted
# mutation aimed at it, and each must turn that claim red.
#
# ⚠ EVERY CASE ASSERTS ITS MUTATION ACTUALLY APPLIED before it believes the red. A mutation that
# silently fails to match produces a green run that reads exactly like "the gate did not catch it"
# — P4.1 O2 hit precisely this, where a restructure made an older mutation stop matching and the
# harness correctly reported a HARNESS BUG rather than a pass. That check is why this is trustworthy.
#
# Usage:  bash scripts/gate38_redtest.sh          (from site/)
# Leaves the tree exactly as it found it: every case restores from a backup in a trap.

set -uo pipefail
cd "$(dirname "$0")/.." || exit 2

PORT="${GATE_PORT:-4403}"
GLOBAL_CSS="src/styles/global.css"
TOKENS_CSS="src/styles/tokens.css"
SPEC="tests/gates/gate-38-layout-invariants.spec.ts"
BAK="$(mktemp -d)"
PASS=0; FAIL=0

cleanup() {
  [ -f "$BAK/global.css" ] && cp "$BAK/global.css" "$GLOBAL_CSS"
  [ -f "$BAK/tokens.css" ] && cp "$BAK/tokens.css" "$TOKENS_CSS"
  [ -f "$BAK/page.html" ] && [ -n "${MUTATED_PAGE:-}" ] && cp "$BAK/page.html" "$MUTATED_PAGE"
  rm -rf "$BAK"
}
trap cleanup EXIT

cp "$GLOBAL_CSS" "$BAK/global.css"
cp "$TOKENS_CSS" "$BAK/tokens.css"

# The J1 cases mutate a BUILT page, so pick one from the build rather than naming a route: a
# hardcoded path is a literal pin on live data (convention 8) and rots the first time a route moves.
MUTATED_PAGE="$(find dist -name 'index.html' | head -1)"
cp "$MUTATED_PAGE" "$BAK/page.html"

# ⚠ A DISTINCT PORT PER RUN. The first version of this harness reused one port for all five runs
# and the CONTROL failed while a fresh run of the same gate on the same tree passed 5/5 — Playwright
# is configured `reuseExistingServer: false`, so a preview server still releasing the port makes the
# next run fail to bind, and a bind failure is not a red gate. The control caught it, which is the
# argument for having a control at all; it produced no diagnostics, which is why it now prints them.
next_port() { PORT=$((PORT + 1)); }

run_case() {
  local name="$1" grep_for="$2"
  local out
  next_port
  out="$(GATE_PORT=$PORT npx playwright test "$SPEC" 2>&1)"
  if echo "$out" | grep -q "$grep_for"; then
    echo "  ✓ RED as expected — $name"
    PASS=$((PASS + 1))
  else
    echo "  ✗ STAYED GREEN — $name"
    echo "$out" | tail -6 | sed 's/^/      /'
    FAIL=$((FAIL + 1))
  fi
}

echo "gate-38 red test — 4 mutations + 1 control"
echo

# ── Case 1 — A5: the offset rule itself is removed ────────────────────────────────────────────
echo "[1] remove scroll-padding-top from global.css"
python3 - <<'PY'
import re, pathlib, sys
p = pathlib.Path('src/styles/global.css'); t = p.read_text()
n = t.replace('  scroll-padding-top: calc(var(--header-height) + var(--space-4));\n', '')
if n == t:
    sys.exit("MUTATION DID NOT APPLY — the scroll-padding-top declaration is not where this "
             "harness expects it. Fix the harness before trusting any result from it.")
p.write_text(n)
PY
[ $? -ne 0 ] && { echo "  ✗ HARNESS BUG (case 1) — aborting"; exit 3; }
npx astro build >/dev/null 2>&1
run_case "A5: offset rule removed" "scroll-padding-top is 'auto'"
cp "$BAK/global.css" "$GLOBAL_CSS"

# ── Case 2 — B4: the offset exists but is smaller than the sticky chrome ──────────────────────
echo "[2] shrink --header-height to 1rem (offset < rendered header)"
python3 - <<'PY'
import pathlib, sys
p = pathlib.Path('src/styles/tokens.css'); t = p.read_text()
n = t.replace('  --header-height: 4.3125rem;', '  --header-height: 1rem;')
if n == t:
    sys.exit("MUTATION DID NOT APPLY — --header-height is not declared as expected.")
p.write_text(n)
PY
[ $? -ne 0 ] && { echo "  ✗ HARNESS BUG (case 2) — aborting"; exit 3; }
npx astro build >/dev/null 2>&1
run_case "B4: offset smaller than the header" "under the header"
cp "$BAK/tokens.css" "$TOKENS_CSS"
npx astro build >/dev/null 2>&1

# ── Case 3 — J1: a second <h1> ────────────────────────────────────────────────────────────────
echo "[3] inject a second <h1> into $MUTATED_PAGE"
python3 - "$MUTATED_PAGE" <<'PY'
import pathlib, sys, re
p = pathlib.Path(sys.argv[1]); t = p.read_text()
m = re.search(r'</h1>', t)
if not m:
    sys.exit(f"MUTATION DID NOT APPLY — no </h1> in {p}.")
p.write_text(t[:m.end()] + '<h1>planted second heading</h1>' + t[m.end():])
PY
[ $? -ne 0 ] && { echo "  ✗ HARNESS BUG (case 3) — aborting"; exit 3; }
run_case "J1: two h1s on one page" "more than one <h1>"
cp "$BAK/page.html" "$MUTATED_PAGE"

# ── Case 4 — J1: an <h2> ahead of the <h1> ────────────────────────────────────────────────────
echo "[4] move an <h2> above the <h1> in $MUTATED_PAGE"
python3 - "$MUTATED_PAGE" <<'PY'
import pathlib, sys, re
p = pathlib.Path(sys.argv[1]); t = p.read_text()
m = re.search(r'<h1[\s>]', t)
if not m:
    sys.exit(f"MUTATION DID NOT APPLY — no <h1> in {p}.")
p.write_text(t[:m.start()] + '<h2>planted early section heading</h2>' + t[m.start():])
PY
[ $? -ne 0 ] && { echo "  ✗ HARNESS BUG (case 4) — aborting"; exit 3; }
run_case "J1: h2 before h1" "before their <h1>"
cp "$BAK/page.html" "$MUTATED_PAGE"

# ── Control — unmutated tree must be GREEN ────────────────────────────────────────────────────
# Without this, four reds prove only that the gate can fail, not that it discriminates. A gate
# that is red on everything is as useless as one green on everything.
echo "[C] control — restored tree"
next_port
CONTROL_OUT="$(GATE_PORT=$PORT npx playwright test "$SPEC" 2>&1)"
if echo "$CONTROL_OUT" | grep -q "5 passed"; then
  echo "  ✓ GREEN as expected — control"
  PASS=$((PASS + 1))
else
  echo "  ✗ CONTROL FAILED — the restore did not restore, the gate is red for another reason,"
  echo "    or the run never started (port bind). Read the tail before concluding which:"
  echo "$CONTROL_OUT" | tail -12 | sed 's/^/      /'
  FAIL=$((FAIL + 1))
fi

echo
echo "gate-38 red test: $PASS passed, $FAIL failed (4 mutations + 1 control)"
[ "$FAIL" -eq 0 ] || exit 1
