#!/usr/bin/env bash
# doctrine_layer_redtest.sh — red-prove gate-54 (HAUSSMANN GR-4 O1, convention 14 + GR-3's F-z).
#
# gate-54 went GREEN on its first run, 7/7. That is precisely the state in which a real assertion and
# a no-op are indistinguishable — the state gate-40 was in, and the state gate-38 was in when P4.2
# red-proved it and found two of its own predicates were decorative.
#
# ⭐ ONE MUTATION PER ASSERTION, AND EVERY CASE DECLARES THE SET IT MUST RED. GR-3 minted the clause
# this harness is built on: convention 14 says an instrument is not believed until it has been
# demonstrated to fail, and its missing second half is that A DEMONSTRATION IS ONLY WORTH WHAT IT CAN
# ATTRIBUTE. `console_clean_redtest.sh` reported 5/5 for the whole life of gate-42 while being wrong
# about which assertion one of its cases exercised — the assertion it believed it was proving had
# NEVER been demonstrated to fail, and its first firing in its existence was a false positive.
# So: a red via an assertion the case did not declare is a HARNESS BUG, not a pass.
#
# ⚠ EVERY CASE ASSERTS ITS MUTATION ACTUALLY APPLIED before it believes the red. A mutation that
# silently fails to match produces a green run that reads exactly like "the gate did not catch it" —
# the alias-guard harness hit precisely that and reported a false pass.
#
# ⭐⭐ CASE 3 IS THE LOAD-BEARING ONE AND IT IS WHY THIS GATE EXISTS. It strips the model-routing copy
# from authored source WHILE LEAVING THE TERM IN THE VENDORED `src/data/tour/` FILE. The gate MUST
# still go red. A green there would mean the exclusion is decorative and AC-1 is being satisfied by a
# file this mission must not edit — which is the exact state the site was in on 2026-09-02, before
# any of this shipped, and the state a naively-phrased criterion would have called PASS.
#
# Mutations touch the measurement script, two authored source files, and two built twins; every case
# restores from a backup in a trap, and a FINAL CONTROL re-runs the gate clean to prove the tree was
# actually left as found.
#
# Usage:  bash scripts/doctrine_layer_redtest.sh     (from site/, after a build)

set -uo pipefail
cd "$(dirname "$0")/.." || exit 2

SPEC="tests/gates/gate-54-doctrine-layer.spec.ts"
MEASURE="scripts/doctrine_layer_measure.mjs"
SRC_PATTERN="src/content/docs/mission-decomposition.mdx"
SRC_TUTORIAL="src/content/guides/design-a-mission.mdx"
TWIN_PATTERN="dist/patterns/mission-decomposition.md"
TWIN_TUTORIAL="dist/learn/tutorials/design-a-mission.md"
TOUR="src/data/tour/standard-governance.txt"
TWIN_COMMONS="dist/commons.md"          # GR-4 O2 · D4 — AC-4's presence half (G54i/G54j)

BAK="$(mktemp -d)"
PASS=0; FAIL=0

cleanup() {
  [ -f "$BAK/measure" ]       && cp "$BAK/measure"       "$MEASURE"
  [ -f "$BAK/src_pattern" ]   && cp "$BAK/src_pattern"   "$SRC_PATTERN"
  [ -f "$BAK/src_tutorial" ]  && cp "$BAK/src_tutorial"  "$SRC_TUTORIAL"
  [ -f "$BAK/twin_pattern" ]  && cp "$BAK/twin_pattern"  "$TWIN_PATTERN"
  [ -f "$BAK/twin_tutorial" ] && cp "$BAK/twin_tutorial" "$TWIN_TUTORIAL"
  [ -f "$BAK/tour" ]          && cp "$BAK/tour"          "$TOUR"
  [ -f "$BAK/twin_commons" ]  && cp "$BAK/twin_commons"  "$TWIN_COMMONS"
  rm -rf "$BAK"
}
trap cleanup EXIT

for f in "$SPEC" "$MEASURE" "$SRC_PATTERN" "$SRC_TUTORIAL" "$TWIN_PATTERN" "$TWIN_TUTORIAL" "$TOUR" "$TWIN_COMMONS"; do
  [ -f "$f" ] || { echo "HARNESS BUG: $f not found (build first? wrong cwd?)" >&2; exit 2; }
done
cp "$MEASURE" "$BAK/measure"
cp "$SRC_PATTERN" "$BAK/src_pattern"
cp "$SRC_TUTORIAL" "$BAK/src_tutorial"
cp "$TWIN_PATTERN" "$BAK/twin_pattern"
cp "$TWIN_TUTORIAL" "$BAK/twin_tutorial"
cp "$TOUR" "$BAK/tour"
cp "$TWIN_COMMONS" "$BAK/twin_commons"

# Prints the sorted set of failing assertion ids, e.g. "G54c G54h".
#
# ⛔⛔ THE RANGE IS `a-z` AND THAT IS NOT COSMETIC — IT WAS `a-h` AND O2 WALKED STRAIGHT INTO THE
# DEFECT THE ADOPTION ADDENDUM HAD FOUND EIGHT HOURS EARLIER IN gate-53's HARNESS (`G53[a-f]` could
# not see `G53g`, so every new case would have reported NO RED). With `a-h`, G54i and G54j would have
# been INVISIBLE to this harness: their mutations would produce a genuine red, `failing_set` would
# return the empty string, and `check_case` would report "NO RED — the gate did not catch the
# mutation" — an instrument silently blind to the assertion it was extended to prove, reporting the
# subject as broken. ⇒ A COVERAGE FLOOR GOES STALE THE MOMENT ITS SUBJECT GROWS; raise it in the
# commit that grows it. Widened to the whole alphabet so the next extension cannot re-earn this.
failing_set() {
  npx playwright test --project=chromium "$SPEC" --reporter=list 2>&1 \
    | grep -oE '✘.*(G54[a-z])' | grep -oE 'G54[a-z]' | sort -u | tr '\n' ' ' | sed 's/ $//'
}

restore_all() { cp "$BAK/measure" "$MEASURE"; cp "$BAK/src_pattern" "$SRC_PATTERN";
  cp "$BAK/src_tutorial" "$SRC_TUTORIAL"; cp "$BAK/twin_pattern" "$TWIN_PATTERN";
  cp "$BAK/twin_tutorial" "$TWIN_TUTORIAL"; cp "$BAK/tour" "$TOUR";
  cp "$BAK/twin_commons" "$TWIN_COMMONS"; }

# case <n> <label> <declared-red-set> <mutation-verifier-cmd>
check_case() {
  local n="$1" label="$2" declared="$3"
  local got; got="$(failing_set)"
  if [ "$got" = "$declared" ]; then
    echo "  ✓ case $n ($label): red at exactly [$declared]"
    PASS=$((PASS+1))
  elif [ -z "$got" ]; then
    echo "  ✗ case $n ($label): NO RED — the gate did not catch the mutation. Expected [$declared]." >&2
    FAIL=$((FAIL+1))
  else
    echo "  ✗ case $n ($label): HARNESS BUG — red at [$got] but the case declares [$declared]." >&2
    echo "      A red via an undeclared assertion proves the gate is alive, not that the declared" >&2
    echo "      assertion is. Fix the case or the gate; do not count this as a pass." >&2
    FAIL=$((FAIL+1))
  fi
  restore_all
}

applied() { # applied <file> <grep-pattern> <case-label>
  grep -q "$2" "$1" || { echo "  ✗ HARNESS BUG: mutation for $3 did not apply to $1" >&2; FAIL=$((FAIL+1)); return 1; }
}

echo
echo "=== gate-54 red-test — one mutation per assertion, each declaring its red set ==="
echo

# ── CONTROL 0 — clean tree must be green before any mutation is believed ──────────────────────────
echo "control 0: clean tree"
if [ -z "$(failing_set)" ]; then
  echo "  ✓ control 0: gate green on an unmutated tree"
  PASS=$((PASS+1))
else
  echo "  ✗ control 0: gate is ALREADY RED before any mutation — every result below is meaningless" >&2
  FAIL=$((FAIL+1))
fi

# ── CASE 1 → G54a — the source walk collapses ────────────────────────────────────────────────────
# Under-report `scanned` alone: the floor AND the kept+excluded arithmetic both live in G54a, and
# nothing else in the measurement moves, so this is surgical rather than devastating.
perl -0pi -e 's/scanned: all\.length/scanned: 5/' "$MEASURE"
applied "$MEASURE" 'scanned: 5' "case 1" && check_case 1 "walk collapses" "G54a"

# ── CASE 2 → G54b — the exclusion list GROWS ─────────────────────────────────────────────────────
# The over-masking shape in its purest form: the list grows, nothing else moves. Masks only ever
# grow, and this is the cheapest way to make a content gate green without publishing anything.
perl -0pi -e "s|const EXCLUDED_DIRS = \['src/data/tour'\]|const EXCLUDED_DIRS = ['src/data/tour', 'src/content/docs']|" "$MEASURE"
applied "$MEASURE" "src/content/docs'\]" "case 2" && check_case 2 "exclusion list grows" "G54b G54d"

# ── CASE 3 → G54c — ⭐ THE LOAD-BEARING CASE ─────────────────────────────────────────────────────
# Strip the model-routing copy from BOTH authored files, leaving the vendored tour file untouched.
# The gate must STILL be red. A green here means the vendored file is satisfying AC-1.
perl -0pi -e 's/executor_tier/EXECUTOR__TIER__REMOVED/g; s/model tier/mmm ttt/gi; s/model routing/mmm rrr/gi; s/model-tier/mmm-ttt/gi' "$SRC_PATTERN" "$SRC_TUTORIAL"
if applied "$SRC_PATTERN" 'EXECUTOR__TIER__REMOVED' "case 3"; then
  grep -qi 'model routing\|executor_tier' "$TOUR" \
    && check_case 3 "D1 stripped from authored source, LEFT in the vendored tour file" "G54c" \
    || { echo "  ✗ HARNESS BUG: the vendored file no longer carries the term, so case 3 cannot test what it claims" >&2; FAIL=$((FAIL+1)); restore_all; }
fi

# ── CASE 4 → G54h — the vendored exclusion stops being load-bearing ──────────────────────────────
perl -0pi -e 's/model routing/mmm rrr/gi; s/executor_tier/EXEC__REMOVED/g; s/model-tier/mmm-ttt/gi; s/model tier/mmm ttt/gi' "$TOUR"
applied "$TOUR" 'mmm rrr\|EXEC__REMOVED\|mmm ttt' "case 4" && check_case 4 "vendored term gone ⇒ exclusion decorative" "G54h"

# ── CASE 5 → G54d — D2 absent from ONE of its two named homes ────────────────────────────────────
perl -0pi -e 's/token_budget/context_budget/g' "$SRC_TUTORIAL"
applied "$SRC_TUTORIAL" 'context_budget' "case 5" && check_case 5 "D2 missing from one named home" "G54d"

# ── CASE 6 → G54e — a graded twin is unmeasurable ────────────────────────────────────────────────
mv "$TWIN_TUTORIAL" "$TWIN_TUTORIAL.moved"
if [ ! -f "$TWIN_TUTORIAL" ]; then
  check_case 6 "a graded twin cannot be measured" "G54e"
  # check_case's restore_all already recreated the twin from the backup; drop the moved copy.
  rm -f "$TWIN_TUTORIAL.moved"
else
  echo "  ✗ HARNESS BUG: could not remove $TWIN_TUTORIAL" >&2; FAIL=$((FAIL+1))
fi

# ── CASE 7 → G54f — the graded section is gutted to a mention ────────────────────────────────────
# The threat AC-2 names: the layer replaced by a single passing sentence.
python3 - "$TWIN_PATTERN" <<'PY'
import re, sys
p = sys.argv[1]
s = open(p).read()
s = re.sub(r'(## Budgeting and Routing a Mission\n)[\s\S]*?(?=\n## When to Use)',
           r'\1\nMissions declare a token_budget_estimated.\n', s)
open(p, 'w').write(s)
PY
applied "$TWIN_PATTERN" 'Missions declare a token_budget_estimated\.' "case 7" && check_case 7 "graded section gutted to a mention" "G54f"

# ── CASE 8 → G54g — an EXEMPLAR thins so the derivation stops supporting the pin ─────────────────
# Not the graded section: the evidence UNDER the floor. gate-44's G44c, for gate-44's reason.
python3 - "$TWIN_TUTORIAL" <<'PY'
import re, sys
p = sys.argv[1]
s = open(p).read()
s = re.sub(r'(### Step 3: Map Dependencies\n)[\s\S]*?(?=\n### Step 4:)', r'\1\nThin.\n', s)
open(p, 'w').write(s)
PY
applied "$TWIN_TUTORIAL" '^Thin\.$' "case 8" && check_case 8 "an exemplar thins ⇒ derivation no longer supports the pin" "G54g"

# ── CASE 9 → G54i — the /commons probe stops reaching real text ──────────────────────────────────
# Targets the REACH CONTROL, not the content. The twin keeps its length and keeps both D4 terms;
# only the site's own name goes. If G54i were decorative, a zero from a broken probe would read
# exactly like an honest absence — which is the whole reason a control sits under G54j at all.
perl -0pi -e 's/aDNA/zQNA/g' "$TWIN_COMMONS"
applied "$TWIN_COMMONS" 'zQNA' "case 9" && check_case 9 "the /commons probe no longer reaches text" "G54i"

# ── CASE 10 → G54j — ⭐ THE LOAD-BEARING CASE FOR D4 ─────────────────────────────────────────────
# The mission ships NOTHING. The page is otherwise untouched — same length, same name, same bands —
# and the disambiguation is simply not there. This is the exact state /commons was in on 2026-09-02
# before O2, and the state in which the reading census (V3's other limb) passes happily, because
# FKGL is trivially unchanged when no copy lands. A green here would mean AC-4 is tested by nothing.
perl -0pi -e 's/ancient DNA/palaeo genomics/gi; s/Agentic DNA/the standard/gi' "$TWIN_COMMONS"
applied "$TWIN_COMMONS" 'palaeo genomics' "case 10" && check_case 10 "D4 absent from /commons entirely" "G54j"

# ── CASE 11 → G54j — the disambiguation degrades to a MENTION ────────────────────────────────────
# ⭐ The subtler half, and the one most likely to be decorative: the COLLISION term stays, the
# RESOLUTION goes. The page still says "ancient DNA" — a naive presence check is GREEN — while a
# reader is told only what aDNA is not. DEFECT-3's lesson (a criterion satisfiable by a passing
# mention) applied to the sibling criterion that did not carry it.
perl -0pi -e 's/Agentic DNA/the standard/gi' "$TWIN_COMMONS"
if applied "$TWIN_COMMONS" 'the standard' "case 11"; then
  grep -qi 'ancient DNA' "$TWIN_COMMONS" \
    && check_case 11 "collision term kept, resolution stripped ⇒ a mention, not an answer" "G54j" \
    || { echo "  ✗ HARNESS BUG: the collision term is gone too, so case 11 cannot test what it claims" >&2; FAIL=$((FAIL+1)); restore_all; }
fi

# ── FINAL CONTROL — the tree was left as found ───────────────────────────────────────────────────
echo "control 12: tree restored"
if [ -z "$(failing_set)" ]; then
  echo "  ✓ control 12: gate green again ⇒ every mutation was reverted"
  PASS=$((PASS+1))
else
  echo "  ✗ control 12: gate STILL RED after restore — the harness has left the tree mutated" >&2
  FAIL=$((FAIL+1))
fi

echo
echo "=== gate-54 red-test: $PASS pass / $FAIL fail ==="
[ "$FAIL" -eq 0 ] || exit 1
