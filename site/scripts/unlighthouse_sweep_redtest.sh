#!/usr/bin/env bash
# unlighthouse_sweep_redtest.sh — red-prove gate-51 (HAUSSMANN P4.4b B2a, convention 14).
#
# gate-51 went GREEN on its first run — the state in which a real assertion and a no-op are
# indistinguishable. Each contract clause gets a planted mutation aimed at it:
#   G51b  joined group      — (M1) the sweep declares its OWN concurrency group (the exact
#                             defect gates.yml's comment forbids — external-links.yml does this)
#   G51a  weekly schedule   — (M2) the cron's day-of-week widens to '*' (daily is not the
#                             signed cadence; a deleted schedule is the same class)
#   G51c  fails loudly      — (M3) continue-on-error: true on the sweep step (a red budget
#                             becomes a green run — the external-links posture, forbidden here)
#   G51c  transcription     — (M4) the config's bar drifts 90 → 85 (a transcribed number
#                             moving away from its source, silently)
#   G51d  build discipline  — (M5) npx astro build → npm run build (regenerates committed
#                             data from vaults absent in CI — convention 6)
#
# ⚠ EVERY CASE ASSERTS ITS MUTATION ACTUALLY APPLIED before it believes the red. A mutation
# that silently fails to match produces a green run that reads exactly like "the gate did not
# catch it".
#
# The V3 budget-path red-proof (a sweep RUN that goes red) is NOT here — it is the live
# unlighthouse-ci invocation with UNLIGHTHOUSE_BUDGET_PERF=100, recorded in the session log
# (2026-08-28: EXIT=1 at bar 100, EXIT=0 at the standing 90, calibrated instrument).
# This harness proves the CONTRACT gate; that run proves the FAILURE PATH.
#
# Usage:  bash scripts/unlighthouse_sweep_redtest.sh     (from site/)

set -uo pipefail
cd "$(dirname "$0")/.." || exit 2

SPEC="tests/gates/gate-51-sweep-contract.spec.ts"
WF="../.github/workflows/unlighthouse-sweep.yml"
CFG="unlighthouse.config.ts"
BAK="$(mktemp -d)"
PASS=0; FAIL=0

[ -f "$SPEC" ] || { echo "HARNESS BUG: $SPEC not found" >&2; exit 2; }
[ -f "$WF" ]   || { echo "HARNESS BUG: $WF not found" >&2; exit 2; }
[ -f "$CFG" ]  || { echo "HARNESS BUG: $CFG not found" >&2; exit 2; }

cp "$WF" "$BAK/wf.yml"
cp "$CFG" "$BAK/cfg.ts"

restore_all() { cp "$BAK/wf.yml" "$WF"; cp "$BAK/cfg.ts" "$CFG"; }
cleanup() { restore_all; rm -rf "$BAK"; }
trap cleanup EXIT

run_gate() { npx playwright test "$SPEC" --grep "$1" --reporter=line 2>&1; }
# ⚠ NEVER `run_gate ... | grep -q` UNDER pipefail — capture, then match (token_census precedent).
gate_passed() { local out; out="$(run_gate "$1")"; case "$out" in *" passed"*) return 0 ;; esac; return 1; }
gate_failed() { local out; out="$(run_gate "$1")"; case "$out" in *" failed"*) return 0 ;; esac; return 1; }

mutate() {  # $1 = file, $2 = literal from, $3 = literal to
  python3 - "$1" "$2" "$3" <<'PY'
import sys
p, a, b = sys.argv[1], sys.argv[2], sys.argv[3]
s = open(p).read()
assert a in s, "MUTATION DID NOT MATCH: " + a
open(p, 'w').write(s.replace(a, b, 1))
PY
}

applied() {  # $1 = file, $2 = literal that must now be present
  grep -qF "$2" "$1"
}

# -- control 1 -----------------------------------------------------------------
echo "== control 1: gate-51 green on the unmutated tree =="
if gate_passed "G51"; then
  echo "  ✓ control 1 (gate-51 passes clean)"; PASS=$((PASS + 1))
else
  echo "  ✗ control 1 FAILED — gate-51 is not green before mutation" >&2; FAIL=$((FAIL + 1))
fi

# -- M1: the sweep declares its own concurrency group (aims G51b) --------------
echo "== M1: sweep declares its own concurrency group =="
mutate "$WF" 'group: gates-${{ github.ref }}' 'group: unlighthouse-sweep'
if ! applied "$WF" 'group: unlighthouse-sweep'; then
  echo "  HARNESS BUG: M1 did not apply" >&2; FAIL=$((FAIL + 1))
elif gate_failed "G51b"; then
  echo "  ✓ M1 red (own group fails G51b — the shared string IS the enforcement)"; PASS=$((PASS + 1))
else
  echo "  ✗ M1 NOT RED — G51b passed with the co-run prohibition unenforced" >&2; FAIL=$((FAIL + 1))
fi
restore_all

# -- M2: the weekly cadence widens to daily (aims G51a) ------------------------
echo "== M2: cron day-of-week widened to '*' =="
mutate "$WF" "cron: '43 7 * * 2'" "cron: '43 7 * * *'"
if ! applied "$WF" "cron: '43 7 * * *'"; then
  echo "  HARNESS BUG: M2 did not apply" >&2; FAIL=$((FAIL + 1))
elif gate_failed "G51a"; then
  echo "  ✓ M2 red (unpinned day-of-week fails G51a)"; PASS=$((PASS + 1))
else
  echo "  ✗ M2 NOT RED — G51a passed without a weekly schedule" >&2; FAIL=$((FAIL + 1))
fi
restore_all

# -- M3: continue-on-error on the sweep step (aims G51c) -----------------------
echo "== M3: continue-on-error planted on the sweep step =="
mutate "$WF" '- name: Unlighthouse sweep (budget-failing — a breach reds this run)' '- name: Unlighthouse sweep (budget-failing — a breach reds this run)
        continue-on-error: true'
if ! applied "$WF" 'continue-on-error: true'; then
  echo "  HARNESS BUG: M3 did not apply" >&2; FAIL=$((FAIL + 1))
elif gate_failed "G51c"; then
  echo "  ✓ M3 red (continue-on-error fails G51c — a muted red is not loud)"; PASS=$((PASS + 1))
else
  echo "  ✗ M3 NOT RED — G51c passed with the failure path muted" >&2; FAIL=$((FAIL + 1))
fi
restore_all

# -- M4: the transcribed bar drifts from its source (aims G51c) ----------------
echo "== M4: config bar drifts 90 → 85 =="
mutate "$CFG" 'UNLIGHTHOUSE_BUDGET_PERF ?? 90' 'UNLIGHTHOUSE_BUDGET_PERF ?? 85'
if ! applied "$CFG" 'UNLIGHTHOUSE_BUDGET_PERF ?? 85'; then
  echo "  HARNESS BUG: M4 did not apply" >&2; FAIL=$((FAIL + 1))
elif gate_failed "G51c"; then
  echo "  ✓ M4 red (a drifted transcription fails G51c)"; PASS=$((PASS + 1))
else
  echo "  ✗ M4 NOT RED — G51c passed with the bar drifted from gate-19" >&2; FAIL=$((FAIL + 1))
fi
restore_all

# -- M5: the build step regenerates data (aims G51d) ---------------------------
echo "== M5: npx astro build → npm run build =="
mutate "$WF" 'run: npx astro build' 'run: npm run build'
if ! applied "$WF" 'run: npm run build'; then
  echo "  HARNESS BUG: M5 did not apply" >&2; FAIL=$((FAIL + 1))
elif gate_failed "G51d"; then
  echo "  ✓ M5 red (npm run build fails G51d)"; PASS=$((PASS + 1))
else
  echo "  ✗ M5 NOT RED — G51d passed with the prebuild-regen hazard live" >&2; FAIL=$((FAIL + 1))
fi
restore_all

# -- final control -------------------------------------------------------------
echo "== final control: gate-51 green after restore =="
if gate_passed "G51"; then
  echo "  ✓ final control (tree left as found)"; PASS=$((PASS + 1))
else
  echo "  ✗ final control FAILED — the harness did not restore the tree" >&2; FAIL=$((FAIL + 1))
fi

echo
echo "unlighthouse_sweep_redtest: $PASS passed, $FAIL failed (target 7/7: 5 mutations red + 2 controls green)"
[ "$FAIL" -eq 0 ]
