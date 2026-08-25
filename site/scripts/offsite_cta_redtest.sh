#!/usr/bin/env bash
# offsite_cta_redtest.sh — red-prove gate-43 (HAUSSMANN P4.4a A2, convention 14).
#
# gate-43 went GREEN on its first run, because P3.5 closed R-122 and R-123 in August and they have
# stayed closed. A regression guard that has never seen a regression is indistinguishable from a
# no-op until something is planted in front of it.
#
# ⭐ THIS HARNESS ASSERTS ON THE FAILURE MESSAGE, NOT MERELY ON RED. Two of gate-43's cases are
# about CLASSIFICATION — a missing file and an unreachable host must fail in DIFFERENT vocabularies
# (⛩ operator ruling, 2026-08-24). A harness that only checked "did it go red" would pass happily
# while the gate blamed the repos for a DNS outage, which is the exact defect this campaign has
# already committed three times (a held Docker port, a clean-tree guard, a regex matching no test).
# So cases 1 and 4 each require the RIGHT message and require the OTHER message to be ABSENT.
#
#   G43a  derivation floor  — (3) break the extractor; zero targets must not read as "all resolve"
#   G43b  doors open        — (1) repoint a governance URL at a repo that 404s
#                             (4) make the host unreachable; must report PRECONDITION, not "404"
#   G43c  clone is licensed — (2) repoint the clone command at a real, unlicensed own-org repo
#
# ⚠ EVERY CASE ASSERTS ITS MUTATION ACTUALLY APPLIED before it believes the red.
#
# ⚠ CASE 2 USES A REAL UNLICENSED REPO (aDNA-Network/community-policies — a policy-document repo
# that genuinely carries no LICENSE, measured 2026-08-24), not an invented name. An invented repo
# 404s at the repo level and would prove only that the probe dislikes nonexistent repos, which is
# case 1's job. The claim under test is "exists but is unlicensed".
#
# Requires network egress to github.com. If the host is unreachable this harness cannot run —
# and says so rather than reporting a pass.
#
# Usage:  bash scripts/offsite_cta_redtest.sh     (from site/, after a build)

set -uo pipefail
cd "$(dirname "$0")/.." || exit 2

SPEC="tests/gates/gate-43-offsite-cta.spec.ts"
GOV_PAGE="dist/community/proposals/index.html"     # carries the CONTRIBUTING governance URL
BAK="$(mktemp -d)"
PASS=0; FAIL=0
CLONE_FILES=()

# Markers, quoted from the spec so a reworded message is caught as a harness drift rather than
# silently weakening these assertions.
MARK_PRECOND="PRECONDITION FAILURE"
MARK_DOOR="advertised governance door"
MARK_LICENCE="carry no LICENSE"

[ -f "$SPEC" ] || { echo "HARNESS BUG: $SPEC not found" >&2; exit 2; }
[ -f "$GOV_PAGE" ] || { echo "HARNESS BUG: $GOV_PAGE not found — run \`npx astro build\` first" >&2; exit 2; }

while IFS= read -r f; do CLONE_FILES+=("$f"); done < <(grep -rl 'git clone https://github.com/aDNA-Network/aDNA.git' dist --include='*.html')
[ "${#CLONE_FILES[@]}" -gt 0 ] || { echo "HARNESS BUG: no built page carries the clone command — case 2 would prove nothing" >&2; exit 2; }

mkdir -p "$BAK/clone"
cp "$SPEC" "$BAK/spec.ts"
cp "$GOV_PAGE" "$BAK/gov.html"
i=0; for f in "${CLONE_FILES[@]}"; do cp "$f" "$BAK/clone/$i.html"; i=$((i + 1)); done

cleanup() {
  [ -f "$BAK/spec.ts" ] && cp "$BAK/spec.ts" "$SPEC"
  [ -f "$BAK/gov.html" ] && cp "$BAK/gov.html" "$GOV_PAGE"
  local j=0; for g in "${CLONE_FILES[@]}"; do [ -f "$BAK/clone/$j.html" ] && cp "$BAK/clone/$j.html" "$g"; j=$((j + 1)); done
  rm -rf "$BAK"
}
trap cleanup EXIT

restore_all() {
  cp "$BAK/spec.ts" "$SPEC"; cp "$BAK/gov.html" "$GOV_PAGE"
  local j=0; for g in "${CLONE_FILES[@]}"; do cp "$BAK/clone/$j.html" "$g"; j=$((j + 1)); done
}

run_gate() { npx playwright test "$SPEC" --grep "$1" --reporter=line 2>&1; }
# ⚠ NEVER pipe run_gate into `grep -q` under `set -o pipefail` — grep exits early, SIGPIPEs
# playwright, and a green gate then reads as red. Capture, then match.
gate_passed() { local out; out="$(run_gate "$1")"; case "$out" in *" passed"*) return 0 ;; esac; return 1; }

# -- control 1: green, and the network is actually reachable -------------------
echo "== control 1: gate-43 green on the unmutated tree =="
if gate_passed "G43"; then
  echo "  ✓ control 1 (gate-43 passes clean; github.com reachable)"; PASS=$((PASS + 1))
else
  echo "  ✗ control 1: gate-43 is NOT green before mutation. If this is a PRECONDITION failure the"
  echo "    network is down and this harness cannot run at all — that is not a result about the gate."
  run_gate "G43" | tail -20
  echo "  off-site CTA red-test: aborted"; exit 2
fi

# -- case 1: a governance door that 404s -> "missing", NOT "precondition" ------
echo
echo "== G43b: a 404 governance door must fail AS A MISSING DOOR =="
restore_all
sed -i '' 's#aDNA-Network/aDNA/blob/main/CONTRIBUTING.md#aDNA-Network/aDNA-redtest-nonesuch/blob/main/CONTRIBUTING.md#g' "$GOV_PAGE"
if ! grep -q 'aDNA-redtest-nonesuch' "$GOV_PAGE"; then
  echo "  ✗ HARNESS BUG: the URL repoint did not apply"; FAIL=$((FAIL + 1))
else
  OUT="$(run_gate "G43b")"
  if [ "${OUT#*" failed"}" = "$OUT" ]; then
    echo "  ✗ case 1: a governance door 404s and G43b stayed GREEN"; FAIL=$((FAIL + 1))
  elif [ "${OUT#*"$MARK_DOOR"}" = "$OUT" ]; then
    echo "  ✗ case 1: G43b went red but NOT with the missing-door message — check the classification"
    FAIL=$((FAIL + 1))
  elif [ "${OUT#*"$MARK_PRECOND"}" != "$OUT" ]; then
    echo "  ✗ case 1: a plain 404 was reported as a PRECONDITION failure. This is the exact"
    echo "           misclassification the ruling forbids — our defect blamed on the network."
    FAIL=$((FAIL + 1))
  else
    echo "  ✓ case 1 (404 door → red, as a missing door, not as a precondition)"; PASS=$((PASS + 1))
  fi
fi
restore_all

# -- case 2: an existing but unlicensed clone destination ----------------------
echo
echo "== G43c: an unlicensed clone destination must fail =="
for f in "${CLONE_FILES[@]}"; do
  sed -i '' 's#git clone https://github.com/aDNA-Network/aDNA.git#git clone https://github.com/aDNA-Network/community-policies.git#g' "$f"
done
if ! grep -q 'community-policies.git' "${CLONE_FILES[0]}"; then
  echo "  ✗ HARNESS BUG: the clone repoint did not apply"; FAIL=$((FAIL + 1))
else
  OUT="$(run_gate "G43c")"
  if [ "${OUT#*" failed"}" = "$OUT" ]; then
    echo "  ✗ case 2: the site advertised an unlicensed repo and G43c stayed GREEN"; FAIL=$((FAIL + 1))
  elif [ "${OUT#*"$MARK_LICENCE"}" = "$OUT" ]; then
    echo "  ✗ case 2: G43c went red but not with the unlicensed-repo message"; FAIL=$((FAIL + 1))
  else
    echo "  ✓ case 2 (clone target exists but is unlicensed → G43c red)"; PASS=$((PASS + 1))
  fi
fi
restore_all

# -- case 3: a collapsed derivation --------------------------------------------
echo
echo "== G43a: a derivation that finds nothing must fail the floor =="
python3 - "$SPEC" <<'PY'
import sys
p = sys.argv[1]
s = open(p).read()
old = "const GOVERNANCE_DOC ="
i = s.index(old); j = s.index('\n', i)
s2 = s[:i] + "const GOVERNANCE_DOC = /\\/__redtest_matches_nothing__$/;" + s[j:]
assert s2 != s
open(p, 'w').write(s2)
PY
if ! grep -q '__redtest_matches_nothing__' "$SPEC"; then
  echo "  ✗ HARNESS BUG: the extractor mutation did not apply"; FAIL=$((FAIL + 1))
else
  OUT="$(run_gate "G43a")"
  if [ "${OUT#*" failed"}" = "$OUT" ]; then
    echo "  ✗ case 3: the derivation found ZERO doors and G43a stayed GREEN — zero targets"
    echo "           trivially all resolve, which is the vacuity the floor exists to prevent"
    FAIL=$((FAIL + 1))
  else
    echo "  ✓ case 3 (extractor matches nothing → G43a red)"; PASS=$((PASS + 1))
  fi
fi
restore_all

# -- case 4: an unreachable host -> "precondition", NOT "missing" --------------
# ⭐ THE SHARPEST CASE. Without it, a DNS outage or a rate-limit would be reported as "the repos
# lost their governance files" and someone would go looking for a defect that does not exist.
echo
echo "== G43b: an unreachable host must report as a PRECONDITION, never as a missing door =="
python3 - "$SPEC" <<'PY'
import sys
p = sys.argv[1]
s = open(p).read()
old = "const res = await fetch(url, {"
new = "const res = await fetch(url.replace('github.com', 'github.invalid.redtest'), {"
assert old in s, "fetch call not found"
open(p, 'w').write(s.replace(old, new, 1))
PY
if ! grep -q 'github.invalid.redtest' "$SPEC"; then
  echo "  ✗ HARNESS BUG: the unreachable-host mutation did not apply"; FAIL=$((FAIL + 1))
else
  OUT="$(run_gate "G43b")"
  if [ "${OUT#*" failed"}" = "$OUT" ]; then
    echo "  ✗ case 4: every target was unreachable and G43b stayed GREEN — an unanswered probe"
    echo "           was silently treated as a pass"
    FAIL=$((FAIL + 1))
  elif [ "${OUT#*"$MARK_PRECOND"}" = "$OUT" ]; then
    echo "  ✗ case 4: G43b went red WITHOUT the precondition message. An unreachable host is being"
    echo "           reported in the vocabulary of a site defect — campaign lesson 4, again."
    FAIL=$((FAIL + 1))
  elif [ "${OUT#*"$MARK_DOOR"}" != "$OUT" ]; then
    echo "  ✗ case 4: a network failure was ALSO reported as a missing governance door — the two"
    echo "           failure modes are conflated, which is what the ruling forbids"
    FAIL=$((FAIL + 1))
  else
    echo "  ✓ case 4 (host unreachable → red as PRECONDITION, and NOT as a missing door)"; PASS=$((PASS + 1))
  fi
fi
restore_all

# -- control 2: the tree is genuinely restored ---------------------------------
echo
echo "== control 2: gate-43 green again after every restore =="
if gate_passed "G43"; then
  echo "  ✓ control 2 (tree restored, gate-43 green)"; PASS=$((PASS + 1))
else
  echo "  ✗ control 2: gate-43 is NOT green after restore — this harness LEAKED a mutation"
  run_gate "G43" | tail -20
  FAIL=$((FAIL + 1))
fi

echo
echo "================================================================"
echo "off-site CTA red-test: $PASS pass / $FAIL fail  (4 mutations + 2 controls)"
[ "$FAIL" -eq 0 ] || exit 1
