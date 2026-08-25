#!/usr/bin/env bash
# graph_twin_redtest.sh — red-prove gate-22's edge-equivalence assertions (HAUSSMANN P4.3 AC4,
# convention 14).
#
# "A verification instrument is not believed until it has been demonstrated to fail."
#
# The three new G-graph-twin-edges assertions went green 6/6 on their first run. That is the state
# every A2 gate was in, and the state in which a real assertion and a no-op assertion look identical.
# Each claim gets a mutation aimed AT THAT CLAIM, and each must turn it red.
#
# ⚠ THE ONE THAT MATTERS IS M4. The twin's whole purpose is that it conveys DIRECTION — "contains"
# at one end, "contained by" at the other. A twin that enumerates every edge and says the same word
# at both ends passes every count assertion, renders the correct number of links to the correct
# vaults, and has silently lost the topology. M4 flattens the phrasing and leaves everything else
# untouched. If gate-22 stays green there, it is a link census wearing an equivalence check's
# clothes, and machine_eye 14's finding would be unfixed while reading as fixed.
#
# ⚠ M3 IS THE ANTI-VACUITY CASE. Every content assertion iterates the twin's rows; over zero rows
# they are all green. The coverage floor is the only thing that can tell a correct twin from a twin
# that rendered nothing at all.
#
# ⚠ EVERY CASE ASSERTS ITS MUTATION ACTUALLY APPLIED before believing the red — a mutation that
# silently fails to match produces a green indistinguishable from "the gate did not catch it".
# P4.1 O2 hit exactly this and the harness correctly reported a HARNESS BUG rather than a pass.
#
# ⚠ A DISTINCT PORT PER CASE. `reuseExistingServer: false` means a preview server still releasing a
# port makes the next run fail to BIND — and a bind failure is not a red gate (craft_floor_redtest.sh
# learned this from a control that failed while the gate passed on a fresh run).
#
# Usage:  bash scripts/graph_twin_redtest.sh     (from site/)
# Mutates BUILT output only (dist/); restores from backup in a trap. Never touches src/.

set -uo pipefail
cd "$(dirname "$0")/.." || exit 2

SPEC="tests/gates/gate-22-graph-ssr.spec.ts"
GRAPH_HTML="dist/vaults/graph/index.html"
BAK="$(mktemp -d)"
PASS=0; FAIL=0
PORT_BASE="${GATE_PORT_BASE:-4460}"
CASE_N=0

cleanup() {
  [ -f "$BAK/graph.html" ] && cp "$BAK/graph.html" "$GRAPH_HTML"
  rm -rf "$BAK"
}
trap cleanup EXIT

cp "$GRAPH_HTML" "$BAK/graph.html"
restore() { cp "$BAK/graph.html" "$GRAPH_HTML"; }

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

  GATE_PORT="$port" npx playwright test "$SPEC" --grep "$grep_pat" >/tmp/graph_twin_rt_$CASE_N.log 2>&1
  local rc=$?
  local got; [ $rc -eq 0 ] && got=green || got=red

  if [ "$got" = "$expect" ]; then
    echo "  ✓ [$name] expected $expect, got $got"
    PASS=$((PASS + 1))
  else
    echo "  ✗ [$name] expected $expect, got $got   (log: /tmp/graph_twin_rt_$CASE_N.log)"
    tail -8 "/tmp/graph_twin_rt_$CASE_N.log" | sed 's/^/      /'
    FAIL=$((FAIL + 1))
  fi
  restore
}

echo "gate-22 twin-edge red test — 5 mutations + 2 controls"
echo

# ── CONTROL 1 ────────────────────────────────────────────────────────────────────────────────────
# An unmutated tree must PASS every twin assertion. Without this, every red below could be a broken
# harness rather than a working gate.
run_case "C1 control: clean tree passes" green "G-graph-twin-edges" \
  "true" \
  "true"

# ── 1. EQUIVALENCE: an edge dropped from ONE end only ────────────────────────────────────────────
# The subtlest real regression: the twin still lists both vaults, still renders relationships, and
# the edge is readable one-way. A roster-only gate cannot see this at all.
run_case "M1 one relationship span deleted — one-way edge" red "G-graph-twin-edges: every registry edge" \
  "perl -0pi -e 's/<span class=\"rel\"[^>]*>.*?<\/span>//s' $GRAPH_HTML" \
  "[ \$(grep -o 'class=\"rel\"' $GRAPH_HTML | wc -l) -lt 28 ]"

# ── 2. EQUIVALENCE: relationships present but pointing at the WRONG vault ────────────────────────
# Counts stay correct; the topology is a lie. Only the per-edge href assertion catches it.
run_case "M2 a relationship href repointed" red "G-graph-twin-edges: every registry edge" \
  "perl -0pi -e 's{<span class=\"rel\"([^>]*)>(.*?)<a href=\"/vaults/[a-z0-9_-]+/\"}{<span class=\"rel\"\$1>\$2<a href=\"/vaults/nonexistent/\"}s' $GRAPH_HTML" \
  "grep -q '/vaults/nonexistent/' $GRAPH_HTML"

# ── 3. ANTI-VACUITY: the whole relationship layer removed ────────────────────────────────────────
# Every content assertion iterates rows; over zero rows they are all vacuously green. The coverage
# floor is the only assertion that can tell "correct" from "never rendered".
run_case "M3 all relationship rows stripped — coverage floor must fire" red "G-graph-twin-edges: every registry edge" \
  "perl -0pi -e 's/ class=\"has-rels\"//g; s/<span class=\"nodelist-rels\".*?<\/span>\s*<\/li>/<\/li>/gs' $GRAPH_HTML" \
  "! grep -q 'has-rels' $GRAPH_HTML"

# ── 4. ⭐ THE ONE THAT MATTERS: every edge present, DIRECTION flattened ──────────────────────────
# "contained by" → "contains" everywhere. Every count assertion still passes, every link still
# points at the right vault, and an umbrella edge now reads identically at both ends. If gate-22
# stays green here it has enumerated the edges and lost the topology — which is precisely the
# partial-equivalence state machine_eye 14 measured and AC4 exists to close.
run_case "M4 direction flattened — same phrase at both ends" red "G-graph-twin-edges: an asymmetric edge" \
  "perl -0pi -e 's/contained by/contains/g; s/federated by/federates/g' $GRAPH_HTML" \
  "! grep -q 'contained by' $GRAPH_HTML"

# ── 5. ROUND-TRIP: a relationship link carrying data-slug ────────────────────────────────────────
# querySelector returns the FIRST match, so this pre-empts the node row the ?focus= arrival should
# highlight. The failure is a subtly wrong highlight, never an error — invisible without the gate.
run_case "M5 data-slug added to a relationship link" red "G-graph-twin-edges: relationship links do not carry" \
  "perl -0pi -e 's{<span class=\"rel\"([^>]*)>(.*?)<a href=\"(/vaults/[a-z0-9_-]+/)\"}{<span class=\"rel\"\$1>\$2<a data-slug=\"x\" href=\"\$3\"}s' $GRAPH_HTML" \
  "grep -q '<a data-slug=\"x\"' $GRAPH_HTML"

# ── CONTROL 2 ────────────────────────────────────────────────────────────────────────────────────
# A change the gate SHOULD NOT care about must leave it green. Without this, a gate that went red on
# ANY edit to the page would look identical to one that goes red on the RIGHT edits.
run_case "C2 control: irrelevant copy edit stays green" green "G-graph-twin-edges" \
  "perl -0pi -e 's/<\/main>/<p>an irrelevant sentence<\/p><\/main>/s' $GRAPH_HTML" \
  "grep -q 'an irrelevant sentence' $GRAPH_HTML"

echo
echo "──────────────────────────────────────────────"
echo "gate-22 twin-edge red test: $PASS passed, $FAIL failed  (of $CASE_N cases: 5 mutations + 2 controls)"
[ "$FAIL" -eq 0 ] || exit 1
