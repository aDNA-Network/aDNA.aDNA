#!/usr/bin/env bash
# keyboard_redtest.sh — red-prove gate-47 (HAUSSMANN P4.3 O1, convention 14).
#
# "A verification instrument is not believed until it has been demonstrated to fail."
#
# gate-47 went 11/11 green after two of its own defects were fixed (a header-descendant false
# positive that reported 11 obscured elements per route, and a settle loop that read the skip link
# mid-transition and failed on `/` alone). Both of those were the GATE being wrong before the
# subject — which is precisely why a green run here proves nothing until each claim has been shown
# to go red on demand.
#
# ⚠ CASES 5 AND 6 ARE CONTROL MUTATIONS. gate-47's obscured-by-header claim is a NEGATIVE: "no
# focused element landed under the sticky header". That is the same green as "focus never scrolled
# far enough to be under anything". Case 5 removes the scrolling; the gate must fail on its COVERAGE
# assertion, not pass.
#
# ⚠ EVERY CASE ASSERTS ITS MUTATION ACTUALLY APPLIED before believing the red.
# ⚠ A DISTINCT PORT PER CASE (a bind failure is not a red gate).
#
# Usage:  bash scripts/keyboard_redtest.sh     (from site/)
# Mutates BUILT output only (dist/); restores from backup in a trap. Never touches src/.

set -uo pipefail
cd "$(dirname "$0")/.." || exit 2

SPEC="tests/gates/gate-47-keyboard.spec.ts"
CSS="$(grep -rl 'skip-link' dist/_astro/*.css 2>/dev/null | head -1)"
HOME_HTML="dist/index.html"
BAK="$(mktemp -d)"
PASS=0; FAIL=0
PORT_BASE="${GATE_PORT_BASE:-4470}"
CASE_N=0

if [ -z "$CSS" ] || [ ! -f "$HOME_HTML" ]; then
  echo "PRE-FLIGHT FAILED: css='$CSS' home='$HOME_HTML' — build first (npx astro build)"; exit 2
fi
echo "resolved CSS bundle: $CSS"

restore() { cp "$BAK/bundle.css" "$CSS"; cp "$BAK/home.html" "$HOME_HTML"; }
cleanup() { restore 2>/dev/null; rm -rf "$BAK"; }
trap cleanup EXIT

cp "$CSS" "$BAK/bundle.css"
cp "$HOME_HTML" "$BAK/home.html"

run_case() { # <label> <RED|GREEN> <grep-filter> <mutate-fn>
  local label="$1" want="$2" filter="$3" mutate="$4"
  CASE_N=$((CASE_N + 1))
  local port=$((PORT_BASE + CASE_N))
  restore
  if ! "$mutate"; then
    echo "✗ CASE $CASE_N [$label]: HARNESS BUG — the mutation did not apply. Not a pass, not a red."
    FAIL=$((FAIL + 1)); restore; return
  fi
  local out rc
  out="$(GATE_PORT=$port npx playwright test "$SPEC" --grep "$filter" 2>&1)"; rc=$?
  restore
  local got; [ $rc -eq 0 ] && got=GREEN || got=RED
  if [ "$got" = "$want" ]; then
    echo "✓ CASE $CASE_N [$label]: $got as expected"; PASS=$((PASS + 1))
  else
    echo "✗ CASE $CASE_N [$label]: expected $want, got $got"; echo "$out" | tail -12; FAIL=$((FAIL + 1))
  fi
}

# ── 1. Focus visible (2.4.7): kill the focus ring ─────────────────────────────────────────────
m_no_ring() {
  printf '\n:focus-visible,:focus,a:focus,button:focus{outline:0 none!important;box-shadow:none!important}\n' >> "$CSS"
  grep -q 'outline:0 none!important' "$CSS"
}
run_case "2.4.7 — focus ring removed site-wide" RED "G47 keyboard \[home\]: focus" m_no_ring

# ── 2. Logical order (2.4.3): a positive tabindex jumps the footer to the front ───────────────
m_positive_tabindex() {
  perl -0pi -e 's/<footer/<footer tabindex="1"/' "$HOME_HTML"
  grep -q '<footer tabindex="1"' "$HOME_HTML"
}
run_case "2.4.3 — positive tabindex breaks DOM order" RED "G47 keyboard \[home\]: focus" m_positive_tabindex

# ── 3. 2.4.11 — the sticky header eats focused content ────────────────────────────────────────
# ⭐ THE FIRST VERSION OF THIS CASE DID NOT GO RED, AND THE REASON IS A REAL PROPERTY WORTH
# WRITING DOWN RATHER THAN A NUMBER TO FUDGE. At `height:340px` the mutation APPLIED (measured:
# header rect 340px, bottom 340) and the gate still passed — because Chromium's focus scroll uses
# `ScrollRectToVisible` with NEAREST-EDGE alignment: tabbing DOWN parks each element near the
# BOTTOM of the viewport, not the top, so a moderately tall sticky header never covers it. The
# defect this assertion guards is therefore real but only reachable when the header's band spans
# most of the viewport. 820px of a 900px viewport does that.
# ⚠ Note what this means for the site's own green: it passes partly on browser scroll behaviour,
# not only on its own layout. Recorded in the O1 traversal record rather than claimed as a design
# property this site earned.
m_tall_header() {
  printf '\nheader{position:sticky;top:0;height:820px!important;z-index:400}\n' >> "$CSS"
  grep -q 'height:820px!important' "$CSS"
}
run_case "2.4.11 — focused elements land under the sticky header" RED "G47 keyboard \[home\]: focus" m_tall_header

# ── 4. Bypass: the skip link stops being the first stop ───────────────────────────────────────
m_skip_not_first() {
  perl -0pi -e 's/(<a[^>]*class="[^"]*skip-link[^"]*"[^>]*)>/$1 tabindex="-1">/' "$HOME_HTML"
  grep -q 'skip-link[^>]*tabindex="-1"' "$HOME_HTML"
}
run_case "2.4.1 — skip link removed from the tab order" RED "G47 keyboard \[home\]: the skip link" m_skip_not_first

# ── 5. Bypass: the skip link never slides into view when focused ──────────────────────────────
m_skip_stays_hidden() {
  printf '\n.skip-link:focus,.skip-link:focus-visible{transform:translate(-50%%,-120%%)!important}\n' >> "$CSS"
  grep -q 'translate(-50%,-120%)!important' "$CSS"
}
run_case "2.4.1 — focused skip link stays off-screen" RED "G47 keyboard \[home\]: the skip link" m_skip_stays_hidden

# ── 6. CONTROL: nothing scrolls, so "not obscured" is vacuous ─────────────────────────────────
# The page is pinned to one screen. Every focus stop is trivially unobscured — and the gate must
# fail its COVERAGE assertion rather than report a clean pass.
m_no_scroll() {
  printf '\nhtml,body{max-height:100vh!important;overflow:hidden!important}\n' >> "$CSS"
  grep -q 'max-height:100vh!important' "$CSS"
}
run_case "CONTROL — page cannot scroll (unobscured becomes vacuous)" RED "G47 keyboard \[home\]: focus" m_no_scroll

# ── 7. Reverse walk: a ONE-WAY trap, which is the only thing that test can catch ──────────────
# ⭐ THE FIRST VERSION OF THIS CASE ASSERTED THE WRONG PROPERTY. It hijacked tab order with
# `tabindex="3"` on the nav links and expected the reverse test to go red. It cannot: that test
# asserts Shift+Tab RETRACES the forward walk, and a reordered-but-consistent tab order retraces
# perfectly. Reordering is caught by case 2, on the traversal test, where the DOM-order claim
# actually lives. What the reverse test alone can catch is ASYMMETRY — focus that goes forward and
# will not come back. So the mutation is a real one-way trap: swallow Shift+Tab.
# ⇒ A mutation that fails to turn a gate red is sometimes aimed at the wrong assertion, not
#   evidence of a weak gate. Naming which is which is the point of running it.
m_one_way_trap() {
  perl -0pi -e 's#</body>#<script>document.addEventListener("keydown",function(e){if(e.key==="Tab"\&\&e.shiftKey){e.preventDefault();}},true);</script></body>#' "$HOME_HTML"
  grep -q 'e.shiftKey' "$HOME_HTML"
}
run_case "no one-way trap — Shift+Tab swallowed (focus cannot return)" RED "G47 keyboard: Shift" m_one_way_trap

# ── 8. + 9. Unmutated controls ────────────────────────────────────────────────────────────────
m_noop() { return 0; }
run_case "CONTROL — clean tree, traversal half" GREEN "G47 keyboard \[home\]: focus" m_noop
run_case "CONTROL — clean tree, skip-link + reverse" GREEN "G47 keyboard \[home\]: the skip link|G47 keyboard: Shift" m_noop

echo
echo "keyboard_redtest: $PASS passed, $FAIL failed (of $CASE_N cases)"
[ "$FAIL" -eq 0 ] || exit 1
