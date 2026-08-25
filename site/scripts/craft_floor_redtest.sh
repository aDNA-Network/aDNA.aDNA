#!/usr/bin/env bash
# craft_floor_redtest.sh — red-prove the craft-floor gates (HAUSSMANN P4.2 O2+O3, convention 14).
#
# Covers gate-38 (locks A5 · B4 · J1 · A2) and gate-39 (lock O1). Renamed from `gate38_redtest.sh`
# at O3 when it grew the gate-39 cases: a filename that names one of the two things it does is the
# stale-pointer class this campaign keeps striking, and it costs nothing to not commit it.
#
# "A verification instrument is not believed until it has been demonstrated to fail."
# gate-38 went green on its first run because the site already conformed — J1 was clean 226/226,
# the A5/B4 fix had just landed, and A2 had never actually been broken. A green first run is exactly
# the state in which a no-op assertion and a real one are indistinguishable, so each of gate-38's
# six claims gets a planted mutation aimed at it, and each must turn that claim red.
#
# ⚠ Case 6 matters most, and for a reason worth stating: it plants the failure F20 CLAIMED was
# already happening. Probing found no font in an error state on any route in either theme, so the
# only way to know G38d can see that failure is to cause one.
#
# ⚠ EVERY CASE ASSERTS ITS MUTATION ACTUALLY APPLIED before it believes the red. A mutation that
# silently fails to match produces a green run that reads exactly like "the gate did not catch it"
# — P4.1 O2 hit precisely this, where a restructure made an older mutation stop matching and the
# harness correctly reported a HARNESS BUG rather than a pass. That check is why this is trustworthy.
#
# Usage:  bash scripts/craft_floor_redtest.sh     (from site/)
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
  [ -f "$BAK/preload.html" ] && [ -n "${PRELOAD_PAGE:-}" ] && cp "$BAK/preload.html" "$PRELOAD_PAGE"
  [ -f "$BAK/font.css" ] && [ -n "${FONT_CSS:-}" ] && cp "$BAK/font.css" "$FONT_CSS"
  [ -f "$BAK/fig.html" ] && [ -n "${FIG_PAGE:-}" ] && cp "$BAK/fig.html" "$FIG_PAGE"
  [ -f "$BAK/nav.html" ] && [ -n "${NAV_PAGE:-}" ] && cp "$BAK/nav.html" "$NAV_PAGE"
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

echo "craft-floor red test — 9 mutations + 2 controls (gate-38 + gate-39)"
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

# ── Case 5 — A2/G38c: a preload pointing at a file that is not in the build ───────────────────
# Mutates BUILT output, not source: the defect this guards against (a preload href that 404s) is a
# property of what shipped, and it is exactly the shape no other gate can see.
echo "[5] repoint an as=font preload at a missing file"
PRELOAD_PAGE="dist/index.html"
cp "$PRELOAD_PAGE" "$BAK/preload.html"
python3 - "$PRELOAD_PAGE" <<'PY'
import pathlib, sys, re
p = pathlib.Path(sys.argv[1]); t = p.read_text()
n, count = re.subn(r'(<link[^>]*as="font"[^>]*href=")[^"]+(")', r'\1/_astro/planted-missing-font.woff2\2', t, count=1)
if count == 0:
    n, count = re.subn(r'(<link[^>]*href=")[^"]+("[^>]*as="font")', r'\1/_astro/planted-missing-font.woff2\2', t, count=1)
if count == 0:
    sys.exit(f"MUTATION DID NOT APPLY — no as=font preload matched in {p}.")
p.write_text(n)
PY
[ $? -ne 0 ] && { echo "  ✗ HARNESS BUG (case 5) — aborting"; exit 3; }
run_case "A2: preload points at a file absent from dist/" "absent from dist"
cp "$BAK/preload.html" "$PRELOAD_PAGE"

# ── Case 6 — A2/G38d: a @font-face whose src cannot load ──────────────────────────────────────
# This is the mutation that reproduces what F20 CLAIMED was happening. It turns the claim into
# something the suite can distinguish from the healthy state — which was the whole problem: the
# healthy state (5 subsets `unloaded`) and the claimed broken state were never told apart.
echo "[6] break a JetBrains @font-face src in the built CSS"
FONT_CSS="$(grep -l 'JetBrains Mono Variable' dist/_astro/*.css 2>/dev/null | head -1)"
if [ -z "$FONT_CSS" ]; then
  echo "  ✗ HARNESS BUG (case 6) — no built CSS declares the family; aborting"; exit 3
fi
cp "$FONT_CSS" "$BAK/font.css"
python3 - "$FONT_CSS" <<'PY'
import pathlib, sys, re
p = pathlib.Path(sys.argv[1]); t = p.read_text()
n, count = re.subn(r'url\(/_astro/jetbrains-mono-latin-wght-normal\.[^)]+\)',
                   'url(/_astro/planted-broken-font.woff2)', t)
if count == 0:
    sys.exit(f"MUTATION DID NOT APPLY — no latin JetBrains src url matched in {p}.")
p.write_text(n)
PY
[ $? -ne 0 ] && { echo "  ✗ HARNESS BUG (case 6) — aborting"; exit 3; }
run_case "A2: a brand font face fails to load" "font face(s) failed to load"
cp "$BAK/font.css" "$FONT_CSS"

# ── Case 9 — I3/G38e: a nav caption promoted into the heading outline ──────────────────
echo "[9] promote a sidebar caption to an <h3>"
# ⚠ Select on the ELEMENT the mutation edits, not on the region containing it. The first version
# picked any page with a .sidebar-nav and drew dist/learn/index.html — which has no EXPANDED group,
# because SidebarNav's SP-2 fallback shows only the switcher for a page outside every nav group. The
# harness aborted with "MUTATION DID NOT APPLY", correctly, and that is the check earning its place.
NAV_PAGE="$(grep -rl 'class="group-label"' dist --include=index.html 2>/dev/null | head -1)"
if [ -z "$NAV_PAGE" ]; then
  echo "  ✗ HARNESS BUG (case 9) — no built page carries a .group-label caption; aborting"; exit 3
fi
cp "$NAV_PAGE" "$BAK/nav.html"
python3 - "$NAV_PAGE" <<'PY'
import pathlib, sys, re
p = pathlib.Path(sys.argv[1]); t = p.read_text()
n, c = re.subn(r'<p class="group-label"([^>]*)>', r'<h3 class="group-label"\1>', t, count=1)
if c == 0:
    n, c = re.subn(r'<summary class="subgroup-label"([^>]*)>', r'<h3 class="subgroup-label"\1>', t, count=1)
if c == 0:
    sys.exit('MUTATION DID NOT APPLY — no sidebar caption element matched in %s.' % p)
p.write_text(n)
PY
[ $? -ne 0 ] && { echo "  ✗ HARNESS BUG (case 9) — aborting"; exit 3; }
# ⚠ The grep string must be a substring of the ASSERTION MESSAGE, not a paraphrase of it. The
# first version looked for "into the page outline" while the gate says "put a heading in the
# page outline", so the harness reported STAYED GREEN for a gate that had gone red — a false
# negative in the checker of checkers. Copy the phrase from the gate; do not retype it.
run_case "I3: a nav caption entered the heading outline" "put a heading in the page outline"
cp "$BAK/nav.html" "$NAV_PAGE"

# ── Cases 7 + 8 — gate-39 (lock O1, figure typeset floor) ─────────────────────────────────────
# gate-39 ships with a BASELINE rather than a clean bill of health, so its two real claims are
# "a listed figure got worse" and "a new figure arrived under the floor". Those are the two mutations.
SPEC39="tests/gates/gate-39-figure-typeset.spec.ts"
FIG_PAGE="dist/patterns/mission-decomposition/index.html"
cp "$FIG_PAGE" "$BAK/fig.html"

run_case39() {
  local name="$1" grep_for="$2"
  local out
  next_port
  out="$(GATE_PORT=$PORT npx playwright test "$SPEC39" 2>&1)"
  if echo "$out" | grep -q "$grep_for"; then
    echo "  ✓ RED as expected — $name"; PASS=$((PASS + 1))
  else
    echo "  ✗ STAYED GREEN — $name"; echo "$out" | tail -6 | sed 's/^/      /'; FAIL=$((FAIL + 1))
  fi
}

echo "[7] shrink a label inside a BASELINED figure below its pinned worst case"
python3 - "$FIG_PAGE" <<'PY'
import pathlib, sys, re
p = pathlib.Path(sys.argv[1]); t = p.read_text()
n, c = re.subn(r'(<text[^>]*?)font-size="14"', r'\1font-size="2"', t, count=1)
if c == 0:
    sys.exit(f"MUTATION DID NOT APPLY — no <text font-size=\"14\"> in {p}.")
p.write_text(n)
PY
[ $? -ne 0 ] && { echo "  ✗ HARNESS BUG (case 7) — aborting"; exit 3; }
run_case39 "O1: a baselined figure regressed" "pinned baseline"
cp "$BAK/fig.html" "$FIG_PAGE"

echo "[8] add a NEW figure whose text is under the floor"
python3 - "$FIG_PAGE" <<'PY'
import pathlib, sys, re
p = pathlib.Path(sys.argv[1]); t = p.read_text()
planted = ('<figure class="planted-figure"><svg viewBox="0 0 400 100" role="img" aria-label="planted" '
           'style="width:100px"><text x="10" y="50" font-size="12">planted tiny label</text></svg></figure>')
m = re.search(r'</article>', t)
if not m:
    sys.exit(f"MUTATION DID NOT APPLY — no </article> in {p}.")
p.write_text(t[:m.start()] + planted + t[m.start():])
PY
[ $? -ne 0 ] && { echo "  ✗ HARNESS BUG (case 8) — aborting"; exit 3; }
run_case39 "O1: a new figure arrives under the floor" "not in gate-39's BASELINE"
cp "$BAK/fig.html" "$FIG_PAGE"

# ── Control — unmutated tree must be GREEN ────────────────────────────────────────────────────
# Without this, four reds prove only that the gate can fail, not that it discriminates. A gate
# that is red on everything is as useless as one green on everything.
echo "[C] control — restored tree"
next_port
CONTROL_OUT="$(GATE_PORT=$PORT npx playwright test "$SPEC" 2>&1)"
if echo "$CONTROL_OUT" | grep -q "8 passed"; then
  echo "  ✓ GREEN as expected — control"
  PASS=$((PASS + 1))
else
  echo "  ✗ CONTROL FAILED — the restore did not restore, the gate is red for another reason,"
  echo "    or the run never started (port bind). Read the tail before concluding which:"
  echo "$CONTROL_OUT" | tail -12 | sed 's/^/      /'
  FAIL=$((FAIL + 1))
fi

echo "[C2] control — gate-39 on the restored tree"
next_port
CONTROL39_OUT="$(GATE_PORT=$PORT npx playwright test "$SPEC39" 2>&1)"
if echo "$CONTROL39_OUT" | grep -q "3 passed"; then
  echo "  ✓ GREEN as expected — gate-39 control"
  PASS=$((PASS + 1))
else
  echo "  ✗ CONTROL FAILED — gate-39 did not return to green:"
  echo "$CONTROL39_OUT" | tail -12 | sed 's/^/      /'
  FAIL=$((FAIL + 1))
fi

echo
echo "craft-floor red test: $PASS passed, $FAIL failed (9 mutations + 2 controls)"
[ "$FAIL" -eq 0 ] || exit 1
