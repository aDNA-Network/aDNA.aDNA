#!/usr/bin/env bash
# =============================================================================
# freshness_state_redtest.sh — demonstrate gate-52 FAILS
# (HAUSSMANN GR-2 · AC-2 · V2 · campaign convention 14)
#
# gate-52 asserts that contentSource.ts can tell its three freshness states
# apart. Every one of its eight cases went green on first run, which is exactly
# the situation convention 14 exists for: a discrimination gate that has never
# been shown to fail is indistinguishable from a gate that cannot fail.
#
# THE MUTATIONS ARE THE OLD BUGS, PUT BACK. Case 1 restores the precise
# conflation that produced F-x — `!probe.ok` treated as shallow. If gate-52
# cannot go red on that, it does not guard the thing it was written for.
#
# ⚠ THE CONTROLS ARE LOAD-BEARING, and case 7 is the important one. A gate that
# simply forbade the string "fetch-depth" everywhere would pass cases 1-5 while
# suppressing the ONE message where fetch-depth is the correct advice. Case 6
# proves the gate is not merely string-brittle; case 7 proves it has not
# over-corrected.
#
# ⚠ MUTATES site/src/utils/contentSource.ts — SHIPPED CODE. Restored in a trap,
# with the restore VERIFIED before exit.
# =============================================================================
set -u -o pipefail

cd "$(dirname "${BASH_SOURCE[0]}")/.." || exit 9
SPEC="tests/gates/gate-52-freshness-state.spec.ts"
SRC="src/utils/contentSource.ts"

for f in "$SPEC" "$SRC" ; do
  [ -f "$f" ] || { echo "⛔ missing $f"; exit 9; }
done

SRCBAK="$(mktemp)"
cp "$SRC" "$SRCBAK"
restore() {
  cp "$SRCBAK" "$SRC"
  if cmp -s "$SRCBAK" "$SRC"; then :; else
    echo "⛔⛔ RESTORE FAILED — SHIPPED CODE IS MUTATED. Restore from git before committing."
  fi
  rm -f "$SRCBAK"
}
trap restore EXIT

pass=0; fail=0
check() { if [ "$2" = "$3" ]; then printf '  ✅ %-58s %s\n' "$1" "$3"; pass=$((pass+1));
          else printf '  ❌ %-58s expected %s, got %s\n' "$1" "$2" "$3"; fail=$((fail+1)); fi; }

g52() { # -> passed | failed
  local out
  out="$(npx playwright test "$SPEC" --project=chromium --reporter=line 2>&1)"
  if grep -qE '[0-9]+ failed' <<<"$out"; then echo failed
  elif grep -qE '[0-9]+ passed' <<<"$out"; then echo passed
  else echo UNKNOWN; printf '%s\n' "$out" | tail -4 >&2; fi
}

# Every mutation asserts it actually applied. A sed that silently matches
# nothing is a green run that proves the opposite of what it claims — the
# failure mode this campaign has hit repeatedly (F-e's find, convention 16's
# grep, and O1's own `set -e` probe three hours ago).
mutate() { python3 - "$1" "$2" <<'PYEOF'
import sys
path, old, new = "src/utils/contentSource.ts", sys.argv[1], sys.argv[2]
s = open(path).read()
n = s.count(old)
assert n == 1, f'MUTATION DID NOT APPLY (matched {n}, expected 1) — harness bug, not a pass'
open(path, 'w').write(s.replace(old, new))
PYEOF
}

echo
echo "gate-52 freshness-state discrimination — red-test (GR-2 · F-x)"
echo "======================================================================"

echo "-- baseline: green on an unmutated tree --"
check "0. unmutated                                        → passed" passed "$(g52)"

echo
echo "-- the conflation that CAUSED F-x, put back --"
mutate "  if (!probe.ok) return { kind: 'git-unavailable', reason: probe.reason };" \
       "  if (!probe.ok) return { kind: 'shallow' };"
check "1. a failed git reported as shallow (F-x itself)    → failed" failed "$(g52)"
cp "$SRCBAK" "$SRC"

echo
echo "-- the message defects --"
mutate "return \`freshness: GIT COULD NOT ANSWER — dates omitted. This is NOT a shallow clone and fetch-depth will not fix it. git said: \${state.reason}\`;" \
       "return \`freshness: dates omitted — set fetch-depth: 0.\`;"
check "2. failure line prescribes fetch-depth again        → failed" failed "$(g52)"
cp "$SRCBAK" "$SRC"

mutate "return \`freshness: GIT COULD NOT ANSWER — dates omitted. This is NOT a shallow clone and fetch-depth will not fix it. git said: \${state.reason}\`;" \
       "return 'freshness: GIT COULD NOT ANSWER — dates omitted. This is NOT a shallow clone and fetch-depth will not fix it.';"
check "3. failure line drops git's own words               → failed" failed "$(g52)"
cp "$SRCBAK" "$SRC"

echo
echo "-- the silent-degradation mutations --"
mutate "  return probe.stdout === 'false' ? { kind: 'healthy' } : { kind: 'shallow' };" \
       "  return probe.stdout === 'true' ? { kind: 'shallow' } : { kind: 'healthy' };"
check "4. an empty git answer treated as healthy           → failed" failed "$(g52)"
cp "$SRCBAK" "$SRC"

mutate "      return 'freshness: SHALLOW CLONE — git knows one commit, so every date would be the same wrong date. Dates omitted. If this is CI, the fix is fetch-depth: 0.';" \
       "      return 'freshness: SHALLOW CLONE — dates omitted.';"
check "5. shallow line stops naming the RIGHT remedy       → failed" failed "$(g52)"
cp "$SRCBAK" "$SRC"

echo
echo "-- CONTROLS: the gate must NOT be merely string-brittle --"
mutate "      return 'freshness: git answered — last-updated dates derived from history.';" \
       "      return 'freshness: git answered normally; dates derived from commit history.';"
check "6. healthy line reworded, meaning intact            → passed" passed "$(g52)"
cp "$SRCBAK" "$SRC"

mutate "type GitResult = { ok: true; stdout: string } | { ok: false; reason: string };" \
       "type GitResult = { ok: true; stdout: string } | { ok: false; reason: string }; // renamed nothing"
check "7. a comment-only edit                              → passed" passed "$(g52)"
cp "$SRCBAK" "$SRC"

echo
echo "======================================================================"
printf '  %d/%d cases behaved as specified\n' "$pass" "$((pass+fail))"
[ "$fail" -eq 0 ] || { echo "  ⛔ gate-52 is NOT believed — $fail case(s) misbehaved."; exit 1; }
echo "  ✅ gate-52 red-proven: 5 mutations red, 3 controls green."
