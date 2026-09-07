#!/usr/bin/env bash
# Red-proof for gate-56 (and gate-42's platform stub) — 2026-09-07 Speed Insights transport.
#
# Convention 14: an instrument is not believed until it has been DEMONSTRATED TO FAIL.
# GR-3's amendment (F-z): a demonstration is only worth what it can ATTRIBUTE — so every case
# declares the assertion it targets, and a red arriving through a DIFFERENT one is reported as a
# HARNESS BUG rather than counted as a pass.
#
# ⚠ EVERY CASE REQUIRES A REBUILD, because gate-56 reads `dist/`. That is slow and it is the point:
# a mutation to source that is never built is a mutation that never reached the subject — the
# `grep proves the mutation is in the file` error B0 caught, which is NOT the claim being made.
#
# Usage:  bash scripts/transport_mounted_redtest.sh
set -uo pipefail
cd "$(dirname "$0")/.."

LAYOUT="src/layouts/BaseLayout.astro"
PRIVACY="src/pages/privacy/index.astro"
GATE56="tests/gates/gate-56-transport-mounted.spec.ts"
BACKUP_DIR="$(mktemp -d)"
PASS=0; FAIL=0; BUG=0

cleanup() {
  for f in "$LAYOUT" "$PRIVACY"; do
    [[ -f "$BACKUP_DIR/$(basename "$f")" ]] && cp "$BACKUP_DIR/$(basename "$f")" "$f"
  done
  rm -rf "$BACKUP_DIR"
}
trap cleanup EXIT
for f in "$LAYOUT" "$PRIVACY"; do cp "$f" "$BACKUP_DIR/$(basename "$f")"; done

restore_all() { for f in "$LAYOUT" "$PRIVACY"; do cp "$BACKUP_DIR/$(basename "$f")" "$f"; done; }

# Run a gate and return the set of failing assertion ids (G56a..G56f), space-separated.
# ⚠ The pattern is `G56[a-z]`, deliberately wide: a range that stops at the last case that exists
# today goes stale the moment a case is added, and then reports NO RED on a genuine red — the
# G53[a-f]/G54[a-h] defect, caught twice in this suite already.
failing_set() {
  # ⛔⛔ THE FIRST VERSION OF THIS FUNCTION GREPPED THE LINE REPORTER FOR `G56[a-z]` AND WAS BLIND
  # IN THE OPPOSITE DIRECTION FROM THE USUAL DEFECT: the line reporter prints EVERY test's NAME,
  # and the names contain the ids — so it reported all six assertions red on a GREEN baseline.
  # A harness that reports everything as failing is as useless as one that reports nothing, and it
  # is more dangerous, because "the control is red" reads like a broken tree rather than a broken
  # instrument. Fixed by asking the reporter for STATUS rather than pattern-matching its prose.
  npx playwright test "$1" --project=chromium --reporter=json 2>/dev/null \
    | python3 -c '
import json,sys
try: d=json.load(sys.stdin)
except Exception: sys.exit(0)
out=[]
def walk(s):
    for spec in s.get("specs",[]):
        if not spec.get("ok",True):
            t=spec.get("title","")
            out.append(t.split(":")[0].strip())
    for sub in s.get("suites",[]): walk(sub)
for suite in d.get("suites",[]): walk(suite)
print(" ".join(sorted(set(out))))
'
}

build_quiet() { npx astro build >/dev/null 2>&1; }

check_case() {
  local name="$1" targets="$2" got="$3"
  local ok=1
  for t in $targets; do [[ " $got " == *" $t "* ]] || ok=0; done
  if [[ -z "${got// /}" ]]; then
    echo "  FAIL  [$targets] $name"
    echo "        NO RED — the gate did not catch the mutation (or the harness is blind to it)"
    FAIL=$((FAIL+1))
  elif [[ $ok -eq 1 ]]; then
    echo "  PASS  [$targets] $name"
    echo "        red at: $got"
    PASS=$((PASS+1))
  else
    echo "  BUG   [$targets] $name"
    echo "        HARNESS BUG: it went red, but through $got — not the assertion under test."
    BUG=$((BUG+1))
  fi
}

echo "gate-56 red-proof — every case rebuilds, because the gate reads dist/"
echo

# CONTROL 0 — unmutated tree is green. Without this, every red below is unattributable.
restore_all; build_quiet
got="$(failing_set "$GATE56")"
if [[ -z "${got// /}" ]]; then
  echo "  PASS  [control] baseline: gate-56 is green on an unmutated build"; PASS=$((PASS+1))
else
  echo "  FAIL  [control] baseline is NOT green — red at: $got"; FAIL=$((FAIL+1))
fi

# CASE 1 — installed but NOT mounted. The whole point of the gate.
restore_all
perl -0pi -e 's{^\s*<SpeedInsights />\n}{}m' "$LAYOUT"
grep -q '<SpeedInsights />' "$LAYOUT" && { echo "  BUG   [G56b] mutation did not apply"; BUG=$((BUG+1)); } || {
  build_quiet
  check_case "the component is unmounted while the dependency stays installed" "G56b G56c" "$(failing_set "$GATE56")"
}

# CASE 2 — /privacy stops saying the numbers are sent, while the transport stays mounted.
# The promise-breaking direction: a live transport with no disclosure.
restore_all
perl -0pi -e 's/now <strong>sent to Vercel<\/strong>/kept entirely in memory/' "$PRIVACY"
build_quiet
check_case "the transport ships and /privacy no longer discloses it" "G56d" "$(failing_set "$GATE56")"

# CASE 3 — the pre-transport sentence comes back while the transport is live.
# The reassuring direction: the page claims MORE privacy than the site provides.
restore_all
perl -0pi -e 's/A second measurement still stays entirely on your device/Those numbers are not sent anywhere/' "$PRIVACY"
build_quiet
check_case "/privacy re-asserts 'not sent anywhere' while the transport is mounted" "G56e" "$(failing_set "$GATE56")"

# CASE 4 — gate-42's platform stub. Remove the mount and the stub stops firing, so gate-42's
# stub assertion must red. ⚠ This is the coupling G56f documents, exercised rather than asserted.
restore_all
perl -0pi -e 's{^\s*<SpeedInsights />\n}{}m' "$LAYOUT"
build_quiet
echo "  ---   [gate-42] running the console gate with the transport unmounted (stub must not fire)"
check_case "gate-42's platform stub reds when nothing requests the stubbed path" "G42b" "$(failing_set 'tests/gates/gate-42-console-clean.spec.ts')"

# CONTROL 5 — restore and rebuild: everything green again. Proves the reds above were the
# mutations and not a tree this harness broke on its way through.
restore_all; build_quiet
got="$(failing_set "$GATE56")"
if [[ -z "${got// /}" ]]; then
  echo "  PASS  [control] restored: gate-56 is green again"; PASS=$((PASS+1))
else
  echo "  FAIL  [control] restore left the tree red — red at: $got"; FAIL=$((FAIL+1))
fi

echo
echo "red-proof: $PASS pass / $FAIL fail / $BUG harness bug"
echo "surface: local build (dist/) + astro preview. Production reach is a separate live probe."
[[ $FAIL -eq 0 && $BUG -eq 0 ]]
