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
TWIN_NETWORK="dist/network.md"          # GR-4 O3 · D3 — AC-3's framing half (G54k/G54l/G54m/G54n)
TWIN_HOME="dist/index.md"               # GR-4 O4 · D5 — AC-5's entry point (G54p/G54q/G54r/G54s)
NAV="src/utils/navigation.ts"           # GR-4 O4 · D5 — ADR-049's nav cap (G54o)

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
  [ -f "$BAK/twin_network" ]  && cp "$BAK/twin_network"  "$TWIN_NETWORK"
  [ -f "$BAK/twin_home" ]     && cp "$BAK/twin_home"     "$TWIN_HOME"
  [ -f "$BAK/nav" ]           && cp "$BAK/nav"           "$NAV"
  rm -rf "$BAK"
}
trap cleanup EXIT

for f in "$SPEC" "$MEASURE" "$SRC_PATTERN" "$SRC_TUTORIAL" "$TWIN_PATTERN" "$TWIN_TUTORIAL" "$TOUR" "$TWIN_COMMONS" "$TWIN_NETWORK" "$TWIN_HOME" "$NAV"; do
  [ -f "$f" ] || { echo "HARNESS BUG: $f not found (build first? wrong cwd?)" >&2; exit 2; }
done
cp "$MEASURE" "$BAK/measure"
cp "$SRC_PATTERN" "$BAK/src_pattern"
cp "$SRC_TUTORIAL" "$BAK/src_tutorial"
cp "$TWIN_PATTERN" "$BAK/twin_pattern"
cp "$TWIN_TUTORIAL" "$BAK/twin_tutorial"
cp "$TOUR" "$BAK/tour"
cp "$TWIN_COMMONS" "$BAK/twin_commons"
cp "$TWIN_NETWORK" "$BAK/twin_network"
cp "$TWIN_HOME" "$BAK/twin_home"
cp "$NAV" "$BAK/nav"

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
  cp "$BAK/twin_commons" "$TWIN_COMMONS"; cp "$BAK/twin_network" "$TWIN_NETWORK";
  cp "$BAK/twin_home" "$TWIN_HOME"; cp "$BAK/nav" "$NAV"; }

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
  grep -q "$2" "$1" && return 0
  echo "  ✗ HARNESS BUG: mutation for $3 did not apply to $1" >&2
  FAIL=$((FAIL+1))
  # ⛔ RESTORE BEFORE RETURNING. Without this the `&& check_case` chain short-circuits past the only
  # `restore_all` in the case, the mutated tree survives into every case after it, and each one fails
  # for a reason belonging to its predecessor. Observed 2026-09-02: one stale grep pattern produced
  # FOUR false HARNESS BUGs and a red final control. A case that cannot apply must fail ALONE.
  restore_all
  return 1
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
# ⚠ DECLARES BOTH FLOORS, and the second was added by the commit that added G54k (same-diff, ADR-057).
# A section gutted to one sentence is below the shared pin AND below its own page's siblings, so it
# legitimately reds both. The harness caught this declaration going stale the moment G54k landed —
# which is the coverage-floor-goes-stale-as-its-subject-grows lesson arriving in a CASE rather than
# in `failing_set`. Case 12 is the one that isolates G54k alone.
applied "$TWIN_PATTERN" 'Missions declare a token_budget_estimated\.' "case 7" && check_case 7 "graded section gutted to a mention" "G54f G54k"

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

# ── CASE 12 → G54k — the D3 section clears the SHARED pin and is thinner than its own siblings ────
# ⭐ THE CASE THAT JUSTIFIES G54k EXISTING, and it had to be MEASURED rather than eyeballed. The
# replacement must land strictly BETWEEN the shared pin (217) and /network's own thinnest band (547):
# above 217 so G54f STAYS GREEN and reports the layer as conformant, below 547 so G54k alone reds.
# ⚠ The first draft was written by feel at ~205 and reds BOTH floors — isolating nothing and proving
# nothing. The harness caught it and said so. A mutation aimed between two thresholds is a MEASUREMENT,
# not a sentence, which is B0's rule arriving in a red-test case.
python3 - <<'PYCASE'
import re
p = "dist/network.md"
s = open(p).read()
s = re.sub(r'(## Running a model on your own machine\n)[\s\S]*?(?=\n## Governed)',
           r'\1\nLocal models are planned work, not shipped work, and nothing here runs yet. It is not '
           r'built. Two vaults hold the plan, and the registry marks both of them genesis, with no code '
           r'behind it yet. No date is set, and none is promised. When there is something to run, it '
           r'will ship as a step in Get started, and this section will say so at that point.\n', s)
open(p, "w").write(s)
PYCASE
applied "$TWIN_NETWORK" 'will say so at that point' "case 12" \
  && check_case 12 "D3 thinner than its own page's bands, above the shared pin" "G54k"

# ── CASE 13 → G54l — the D3 probe stops reaching real text ───────────────────────────────────────
# Targets the REACH CONTROL only, and ⚠ mutates the BODY, never the heading: the heading is how the
# graded section is FOUND, so changing it would red G54e/G54f/G54k and report the wrong cause. Same
# discipline as case 9 on /commons — a control that a broken probe would satisfy is not a control.
perl -0pi -e 's/a local model to a node/a local widget to a node/; s/the model files it would serve/the widget files it would serve/; s/Running the model on the same machine/Running the engine on the same machine/' "$TWIN_NETWORK"
applied "$TWIN_NETWORK" 'a local widget to a node' "case 13" \
  && check_case 13 "the D3 probe no longer reaches its own subject" "G54l"

# ── CASE 14 → G54m — the planned framing is stripped, the content stays ──────────────────────────
# Every fact survives; only the markers that make the copy TESTABLY forward-looking go. The section
# keeps its length (G54f/G54k green) and makes no availability claim (G54n green) — it has simply
# stopped saying that none of this exists. This is how planned framing dies in practice: not deleted,
# smoothed away by an editor tidying hedges out of the prose.
perl -0pi -e 's/\*\*planned work, not shipped work\*\* — nothing here runs yet/\*\*a natural next step\*\* — the shape of it is clear enough/; s/It is not built\./That is the direction\./; s/both of them as \*\*planned\*\*/both of them as \*\*early\*\*/; s/and no code behind it yet/and a scope they are growing into/; s/No date is set, and none is promised\./The sequencing follows the roadmap./' "$TWIN_NETWORK"
applied "$TWIN_NETWORK" 'a natural next step' "case 14" \
  && check_case 14 "planned markers smoothed away, facts intact" "G54m"

# ── CASE 15 → G54n — ⭐ THE LOAD-BEARING CASE FOR D3 ─────────────────────────────────────────────
# Nothing is removed. One sentence is ADDED, and it is the single sentence this whole section exists
# to not say. The hedges all remain, so G54m is GREEN and the copy still LOOKS careful — which is
# precisely the failure mode: planned framing does not fail by going missing, it fails by acquiring
# a promise beside it. V7's lesson, borrowed one criterion sideways.
perl -0pi -e 's/(No date is set, and none is promised\.)/You can run a local model today. $1/' "$TWIN_NETWORK"
applied "$TWIN_NETWORK" 'You can run a local model today' "case 15" \
  && check_case 15 "an availability claim added beside intact hedges" "G54n"

# ── CASE 16 → G54o — the nav cap is breached ─────────────────────────────────────────────────────
# ⭐ THE MUTATION THE PRE-BUILD PASS REJECTED AS *THE ONLY ONE*. V4 as ratified red-proved AC-5 with
# this single case — and because it reds via the nav COUNT, the entry-point assertions below would
# never once have been demonstrated to fail. It is a good case; it was never a sufficient one.
# DEFECT-4's remedy is that it now proves G54o AND NOTHING ELSE, with cases 17-20 proving the rest.
perl -0pi -e "s/(  \{ label: 'Community', href: '\/community' \},\n)/\$1  { label: 'Changelog', href: '\/changelog' },\n/" "$NAV"
applied "$NAV" "label: 'Changelog'" "case 16" \
  && check_case 16 "an 8th flat nav entry breaches ADR-049's cap" "G54o"

# ── CASE 17 → G54p — the home twin collapses to its pointer block ────────────────────────────────
# ⚠ DECLARES FOUR IDS AND THAT IS CORRECT, NOT SLOPPY. G54p is a COVERAGE control: when the twin is
# a stub, the three assertions it guards genuinely have nothing to read, and the honest report is
# that all four are red rather than that three passed over a file with no page in it. That is the
# whole reason a coverage limb sits above them. Cases 18-20 isolate each of the three alone.
head -6 "$BAK/twin_home" > "$TWIN_HOME"
applied "$TWIN_HOME" 'Markdown twin of' "case 17" \
  && check_case 17 "home twin collapsed to a stub ⇒ every reader-facing D5 assertion is unread" \
     "G54p G54q G54r G54s"

# ── CASE 18 → G54q — the entry point names ONE destination ───────────────────────────────────────
# ⭐ The subtle half, and the direct sibling of case 11. The strip stays, the dates stay, the
# changelog link stays — only the FEED goes. A naive "is there a what's-new entry point" check is
# GREEN, and the returning member who wanted to subscribe rather than revisit is not served.
# P2-7 is a finding about BOTH surfaces; naming one is a mention.
# ⚠ The verifier greps for the POST-mutation shape — an unlinked "RSS feed" following the separator.
# `applied` can only assert PRESENCE, so a case that removes something must name what the removal
# leaves behind. The first draft of this line grepped for a word that is in neither state and
# reported a HARNESS BUG — correctly, and ALONE, which is O3's `applied` restore fix earning itself.
perl -0pi -e 's/\[RSS feed\]\(\/rss\.xml\)/RSS feed/' "$TWIN_HOME"
applied "$TWIN_HOME" '· RSS feed' "case 18" \
  && check_case 18 "the feed link is dropped ⇒ one destination, not both" "G54q"

# ── CASE 19 → G54r — the strip goes STALE while still looking correct ────────────────────────────
# ⭐⭐ THE CASE THAT JUSTIFIES G54r EXISTING. Nothing is missing and nothing is malformed: three
# dated entries with plausible headlines, exactly as a hardcoded strip would read on the day someone
# typed it. Only the DERIVATION is gone. This is convention 15's "a stale row and a broken row look
# identical from the outside" arriving on our own front page — and it is the one D5 failure a reader
# cannot detect, because the homepage would be confidently telling them the wrong thing is newest.
perl -0pi -e 's/Aug 28, 2026/Aug 14, 2026/' "$TWIN_HOME"
applied "$TWIN_HOME" 'Aug 14, 2026' "case 19" \
  && check_case 19 "the strip no longer shows the collection's newest entry" "G54r"

# ── CASE 20 → G54s — ⭐ THE LOAD-BEARING CASE FOR D5 ─────────────────────────────────────────────
# NOTHING IS REMOVED. One lead sentence is added — the single most natural edit anyone would make to
# this section, and the one the ⛩ form ruling exists to refuse. Every other assertion stays GREEN:
# the entry point is present (G54q), both destinations are named, the dates still derive (G54r), and
# the section reads BETTER than before. And `/`'s prose corpus has silently acquired a paragraph
# against 0.04 of headroom. ⇒ the exact shape of G54n one criterion across: the failure mode is not
# that the section goes missing, it is that it quietly stops having the property it was built with.
perl -0pi -e "s/(## What's new\n)/\$1\nThe site changes in the open, and every release is dated and readable.\n/" "$TWIN_HOME"
applied "$TWIN_HOME" 'The site changes in the open' "case 20" \
  && check_case 20 "a punctuated lead sentence puts the strip into the prose corpus" "G54s"

# ── FINAL CONTROL — the tree was left as found ───────────────────────────────────────────────────
echo "control 21: tree restored"
if [ -z "$(failing_set)" ]; then
  echo "  ✓ control 21: gate green again ⇒ every mutation was reverted"
  PASS=$((PASS+1))
else
  echo "  ✗ control 21: gate STILL RED after restore — the harness has left the tree mutated" >&2
  FAIL=$((FAIL+1))
fi

echo
echo "=== gate-54 red-test: $PASS pass / $FAIL fail ==="
[ "$FAIL" -eq 0 ] || exit 1
