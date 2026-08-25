#!/usr/bin/env bash
# at_traversal_redtest.sh — red-prove gate-45 (HAUSSMANN P4.3 O0, convention 14).
#
# "A verification instrument is not believed until it has been demonstrated to fail."
#
# gate-45 went green 6/6 on its first successful run. That is exactly the state A2's three gates were
# in — and the state in which a real assertion and a no-op assertion are indistinguishable. Each of
# gate-45's claims therefore gets a planted mutation aimed at it, and each must turn THAT claim red.
#
# ⚠ WHY THE CONTROLS ARE NOT OPTIONAL HERE. gate-45's central claim is that a live region is
# ANNOUNCED, not merely populated. A gate could satisfy its text assertion while testing nothing
# about speech at all. Case 6 removes `aria-live` and leaves the text untouched: the region still
# says the right thing and must go SILENT. That single case is the difference between an AT
# instrument and a `textContent` check wearing one's clothes.
#
# ⚠ EVERY CASE ASSERTS ITS MUTATION ACTUALLY APPLIED before believing the red — a mutation that
# silently fails to match produces a green that reads exactly like "the gate did not catch it"
# (P4.1 O2 hit precisely this, and the harness correctly reported a HARNESS BUG rather than a pass).
#
# ⚠ A DISTINCT PORT PER CASE. `reuseExistingServer: false` means a preview server still releasing a
# port makes the next run fail to BIND, and a bind failure is not a red gate. craft_floor_redtest.sh
# learned this from a control that failed while the same gate passed on a fresh run.
#
# Usage:  bash scripts/at_traversal_redtest.sh     (from site/)
# Mutates BUILT output only (dist/); restores from backup in a trap. Never touches src/.

set -uo pipefail
cd "$(dirname "$0")/.." || exit 2

SPEC="tests/gates/gate-45-at-traversal.spec.ts"
HOME_HTML="dist/index.html"
VAULTS_HTML="dist/vaults/index.html"
BAK="$(mktemp -d)"
PASS=0; FAIL=0
PORT_BASE="${GATE_PORT_BASE:-4410}"
CASE_N=0

cleanup() {
  [ -f "$BAK/home.html" ]   && cp "$BAK/home.html"   "$HOME_HTML"
  [ -f "$BAK/vaults.html" ] && cp "$BAK/vaults.html" "$VAULTS_HTML"
  rm -rf "$BAK"
}
trap cleanup EXIT

cp "$HOME_HTML"   "$BAK/home.html"
cp "$VAULTS_HTML" "$BAK/vaults.html"

restore() { cp "$BAK/home.html" "$HOME_HTML"; cp "$BAK/vaults.html" "$VAULTS_HTML"; }

# run_case <name> <expect: red|green> <grep> <mutation-cmd> <applied-check-cmd>
run_case() {
  local name="$1" expect="$2" grep_pat="$3" mutate="$4" applied="$5"
  CASE_N=$((CASE_N + 1))
  local port=$((PORT_BASE + CASE_N))
  restore
  eval "$mutate"

  if ! eval "$applied"; then
    echo "  ✗ HARNESS BUG [$name] — the mutation did not apply; the run below would prove nothing"
    FAIL=$((FAIL + 1)); restore; return
  fi

  GATE_PORT="$port" npx playwright test "$SPEC" --grep "$grep_pat" >/tmp/at_rt_$CASE_N.log 2>&1
  local rc=$?
  local got; [ $rc -eq 0 ] && got=green || got=red

  if [ "$got" = "$expect" ]; then
    echo "  ✓ [$name] expected $expect, got $got"
    PASS=$((PASS + 1))
  else
    echo "  ✗ [$name] expected $expect, got $got   (log: /tmp/at_rt_$CASE_N.log)"
    tail -6 "/tmp/at_rt_$CASE_N.log" | sed 's/^/      /'
    FAIL=$((FAIL + 1))
  fi
  restore
}

echo "gate-45 red test — 7 mutations + 2 controls"
echo

# ── CONTROL 1 ────────────────────────────────────────────────────────────────────────────────────
# An unmutated tree must PASS. Without this, every red below could be a broken harness.
run_case "C1 control: clean tree passes" green "G45 AT" \
  "true" \
  "true"

# ── 1. ORDER: the skip link is announced first ───────────────────────────────────────────────────
run_case "M1 skip link removed (home)" red "G45 AT \[home\]" \
  "perl -0pi -e 's/<a[^>]*>Skip to main content<\/a>//s' $HOME_HTML" \
  "! grep -q 'Skip to main content' $HOME_HTML"

# ── 2. ORDER: it is the SKIP LINK specifically, not merely 'some first link' ──────────────────────
run_case "M2 skip link retitled (home)" red "G45 AT \[home\]" \
  "perl -0pi -e 's/Skip to main content/Jump ahead/s' $HOME_HTML" \
  "grep -q 'Jump ahead' $HOME_HTML"

# ── 3. PHRASING: the banner landmark is announced ────────────────────────────────────────────────
run_case "M3 banner landmark stripped (home)" red "G45 AT \[home\]" \
  "perl -0pi -e 's/<header class=\"header\"/<div class=\"header\"/s' $HOME_HTML" \
  "! grep -q '<header class=\"header\"' $HOME_HTML"

# ── 4. PHRASING: the navigation landmark is announced ────────────────────────────────────────────
run_case "M4 nav landmarks stripped (home)" red "G45 AT \[home\]" \
  "perl -0pi -e 's/<nav /<div /g' $HOME_HTML" \
  "! grep -q '<nav ' $HOME_HTML"

# ── 5. ANTI-VACUITY: the coverage floor fires when the AT reads (almost) nothing ──────────────────
# The floor is the only assertion that can tell a clean opening from an opening never read.
run_case "M5 body emptied — coverage floor must fire" red "G45 AT \[home\]" \
  "perl -0pi -e 's/<body([^>]*)>.*<\/body>/<body\$1><main><h1>x<\/h1><\/main><\/body>/s' $HOME_HTML" \
  "! grep -q 'Skip to main content' $HOME_HTML"

# ── 6. ⭐ THE ONE THAT MATTERS: text stays correct, SPEECH is removed ─────────────────────────────
# aria-live goes; role=status stays out too, so nothing else re-announces it. The region still
# renders the right words. If gate-45 stays green here, it is a textContent check, not an AT check.
run_case "M6 live region silenced, text intact (registry)" red "G45 AT \[registry\]: the result-count" \
  "perl -0pi -e 's/role=\"status\" aria-live=\"polite\"//s' $VAULTS_HTML" \
  "! grep -q 'aria-live=\"polite\"' $VAULTS_HTML"

# ── 7. AC7's other half: the region is present and announced but never POPULATED ──────────────────
run_case "M7 filter wiring broken — region stays empty (registry)" red "G45 AT \[registry\]: the result-count" \
  "perl -0pi -e 's/nothing matched/still here/s' $VAULTS_HTML" \
  "! grep -q 'nothing matched' $VAULTS_HTML"

# ── CONTROL 2 ────────────────────────────────────────────────────────────────────────────────────
# A change the gate SHOULD NOT care about must leave it green. Without this, a gate that failed on
# ANY edit would look identical to one that failed on the RIGHT edits.
run_case "C2 control: irrelevant copy edit stays green" green "G45 AT \[home\]" \
  "perl -0pi -e 's/<\/main>/<p>an irrelevant sentence<\/p><\/main>/s' $HOME_HTML" \
  "grep -q 'an irrelevant sentence' $HOME_HTML"

echo
echo "──────────────────────────────────────────────"
echo "gate-45 red test: $PASS passed, $FAIL failed  (of $CASE_N cases: 7 mutations + 2 controls)"
[ "$FAIL" -eq 0 ] || exit 1
