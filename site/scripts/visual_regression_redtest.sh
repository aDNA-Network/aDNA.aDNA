#!/usr/bin/env bash
# visual_regression_redtest.sh — red-prove gate-49 (HAUSSMANN P4.4b B0, convention 14 · V1).
#
# ⛩ AC1 (08-24 amendment): THIS MUST RUN IN THE CONTAINER THAT GENERATED THE BASELINES.
# On a developer Mac, container-generated baselines diff on font rasterisation for EVERY page, so a
# planted mutation and the ambient noise are indistinguishable — the run would "go red" for reasons
# that have nothing to do with the mutation, which is a false red, and a false red proves as little
# as a false green. Invoke via `scripts/visual_regression_container.sh redtest`, never bare on macOS.
#
# gate-49 went GREEN on its first run (the baselines were generated from the same tree it then
# compared). That is precisely the state in which a real assertion and a no-op are indistinguishable
# — the state gate-44 was in, and the state gate-38 was in when P4.2 red-proved it and found two of
# its own predicates were decorative.
#
# Each of gate-49's claims gets a planted mutation aimed at it, and each must turn THAT claim red:
#   G49a  template frame     — (5) shrink the frame below its floor
#   G49b  mask liveness      — (4) point a mask at a selector that matches nothing; a dead mask is a
#                                  silent no-op that reads exactly like diligence
#   G49c  mask arithmetic    — (2) widen a mask from the year span to the whole footer. THE CASE
#                                  THAT MATTERS MOST: over-masking is the cheapest way to fake a
#                                  visual gate green, and unlike a missed diff it is PERMANENT —
#                                  a swallowed region stays green forever and masks only ever grow
#   G49d  theme control      — (3) neutralise the light seed, so light renders dark; this is P4.3's
#                                  `addInitScript` silently-not-applying failure, planted on purpose
#   screenshot              — (1) a genuine visible diff on one template
#
# And TWO PASSING CONTROLS, because a harness that only ever produces red proves nothing about what
# it does when there is nothing to find (the alias-guard matrix's lesson, V5):
#   (6) recolour the MASKED year — a pure pixel change with zero layout effect, entirely inside a
#       mask — and the gate must stay GREEN. This is the only case that proves the masks actually
#       cover the pixels they claim to. Its failure mode is the mirror of case 2: case 2 catches a
#       mask that is too WIDE, case 6 catches one that is not there at all.
#   (7) a final clean run, proving the tree was left exactly as found.
#
# ⚠ EVERY CASE ASSERTS ITS MUTATION ACTUALLY APPLIED before it believes the red. A mutation that
# silently fails to match produces a green run that reads exactly like "the gate did not catch it"
# — the alias-guard harness hit exactly that and reported a false pass.
#
# ⚠ AXIS ISOLATION IS DELIBERATE. Case 2 breaks ONLY the arithmetic and leaves every template and
# every baseline intact; case 5 breaks ONLY the frame. A mutation that trips several limbs at once
# proves the gate reacts to devastation, not that it measures what it claims to measure.
#
# Mutations are applied to `dist/` (build output, regenerable) and to the spec; every case restores
# from a backup in a trap.
#
# Usage:  bash scripts/visual_regression_redtest.sh      (from site/, IN-CONTAINER, after baselines)

set -uo pipefail
cd "$(dirname "$0")/.." || exit 2

SPEC="tests/gates/gate-49-visual-regression.spec.ts"
ABOUT="dist/about/index.html"
LEAF="dist/learn/concepts/agentic-literacy/index.html"
PORT="${GATE_PORT:-4399}"
BAK="$(mktemp -d)"
PASS=0; FAIL=0

cp "$SPEC" "$BAK/spec" || exit 2
cp "$ABOUT" "$BAK/about" || exit 2
cp "$LEAF" "$BAK/leaf" || exit 2

restore() { cp "$BAK/spec" "$SPEC"; cp "$BAK/about" "$ABOUT"; cp "$BAK/leaf" "$LEAF"; }
cleanup() { restore; rm -rf "$BAK"; }
trap cleanup EXIT INT TERM

# Run gate-49 (optionally filtered). Echoes nothing; caller reads the exit code.
run_gate() {
  GATE_PORT="$PORT" npx playwright test --project=snapshot ${1:+-g "$1"} >/tmp/g49.out 2>&1
}

# assert_red <case-no> <label> <grep-proof-that-mutation-applied> <file> [test-filter]
# Believes a red ONLY after proving the mutation is actually in the file.
assert_red() {
  local n="$1" label="$2" proof="$3" file="$4" filter="${5:-}"
  if ! grep -qF -- "$proof" "$file"; then
    echo "  ✗ CASE $n [$label] — MUTATION DID NOT APPLY (proof string absent from $file)."
    echo "    A red here would be meaningless and a green would be a FALSE PASS. Not scored as either."
    FAIL=$((FAIL + 1)); return
  fi
  if run_gate "$filter"; then
    echo "  ✗ CASE $n [$label] — gate stayed GREEN through a mutation aimed at it. THE LIMB IS DECORATIVE."
    FAIL=$((FAIL + 1))
  else
    echo "  ✓ CASE $n [$label] — red, as it must be."
    PASS=$((PASS + 1))
  fi
  restore
}

# assert_green <case-no> <label> <proof> <file> [filter] — a PASSING control.
assert_green() {
  local n="$1" label="$2" proof="$3" file="$4" filter="${5:-}"
  if [ -n "$proof" ] && ! grep -qF -- "$proof" "$file"; then
    echo "  ✗ CONTROL $n [$label] — mutation did not apply; the green below would prove nothing."
    FAIL=$((FAIL + 1)); return
  fi
  if run_gate "$filter"; then
    echo "  ✓ CONTROL $n [$label] — green, as it must be."
    PASS=$((PASS + 1))
  else
    echo "  ✗ CONTROL $n [$label] — went RED with nothing real to find. Tail:"
    tail -25 /tmp/g49.out | sed 's/^/      /'
    FAIL=$((FAIL + 1))
  fi
  restore
}

echo "gate-49 red-test — 5 mutations + 2 controls (V1)"
echo "host: $(uname -s) $(uname -m)  ⛩ AC1 requires this to be the baseline-generating container"
echo

# ── CASE 1 — a genuine visible diff ──────────────────────────────────────────
# Letter-spacing on h1: unmistakably visible, confined to one template, no layout cascade
# beyond that page. Aimed at the screenshot comparison itself.
#
# ⚠ `!important` IS LOAD-BEARING, AND ITS ABSENCE COST THIS HARNESS A FALSE RESULT ON ITS FIRST RUN.
# Without it the rule is `h1 {…}` at specificity (0,0,1), and Astro's scoped styles compile to
# `h1[data-astro-cid-…] {…}` at (0,1,1) — so the mutation was correctly written, correctly applied,
# CORRECTLY SERVED (verified by curl against the preview server), and silently overridden before it
# ever reached a pixel. The gate reported green and the harness read that as "THE LIMB IS
# DECORATIVE", which was a libel on a working gate.
# ⭐ This is the campaign's P4.3 lesson with a third face: a non-red is either a weak gate, a
# mutation aimed at the wrong assertion, or — here — a mutation aimed correctly and INERT. Naming
# which of the three you have is the entire point of running the harness, and "the mutation is in
# the file" (which grep confirmed) is NOT the same claim as "the mutation changes the render".
# Convention 17's amendment exactly: the surface must match the claim's own verb.
sed -i'' -e 's#</head>#<style>h1{letter-spacing:6px !important}</style></head>#' "$ABOUT"
assert_red 1 "visible diff on /about/" "letter-spacing:6px !important" "$ABOUT" "about"

# ── CASE 2 — OVER-MASKING (the case that matters most) ───────────────────────
# Widen the year mask to the entire footer. The footer is ~2-4% of a page — far past the pinned
# 0.15% budget — so G49c must go red. Without this pin, a flaky region could be silenced by one
# character, permanently, and no test anywhere would object.
sed -i'' -e "s#selector: '.footer-year',#selector: 'footer.footer',#" "$SPEC"
assert_red 2 "over-mask: .footer-year → footer.footer" "selector: 'footer.footer'," "$SPEC" "G49c/d"

# ── CASE 3 — the theme control ───────────────────────────────────────────────
# Neutralise the light seed so the "light" captures render dark. This is exactly P4.3's finding
# (`addInitScript` silently not applying, 15 routes "passing" a transform that never happened),
# planted deliberately. G49d must refuse before any comparison is believed.
sed -i'' -e "s#if (theme === 'light') {#if (false) {#" "$SPEC"
assert_red 3 "theme seed neutralised" "if (false) {" "$SPEC" "G49c/d"

# ── CASE 4 — a dead mask ─────────────────────────────────────────────────────
sed -i'' -e "s#selector: '.doc-provenance-updated',#selector: '.no-such-region-xyz',#" "$SPEC"
assert_red 4 "dead mask selector" "selector: '.no-such-region-xyz'," "$SPEC" "G49b"

# ── CASE 5 — frame shrink ────────────────────────────────────────────────────
# "Every screenshot matched" is vacuously true over an empty frame.
sed -i'' -e "s#^const TEMPLATE_FLOOR = 12;#const TEMPLATE_FLOOR = 12;\nTEMPLATES.length = 3;#" "$SPEC"
assert_red 5 "frame shrunk below floor" "TEMPLATES.length = 3;" "$SPEC" "G49a"

# ── CONTROL 6 — a pure pixel change INSIDE a mask must NOT go red ────────────
# Recolour the masked year. Zero layout effect, entirely within the mask box. If this goes red the
# masks are not covering what they claim to, which case 2 cannot detect (case 2 only catches a mask
# that is too wide; this catches one that is not working at all).
# `magenta`, not `#ff00ff` — the hex would collide with sed's `#` delimiter and silently mangle the
# expression. Caught before the first run only because every case asserts its mutation applied.
#
# ⚠ `!important` FOR THE SAME REASON AS CASE 1, AND IT MATTERS MORE HERE. This is a CONTROL: its job
# is to go green for the RIGHT reason — "the recolour happened and the mask covered it" — and without
# `!important` it went green for the WRONG one: the recolour never rendered, so the mask was never
# tested at all. ⭐ A control that passes for the wrong reason is worse than no control, because it
# certifies a mechanism it has not exercised. Both inert cases had the identical cause and only ONE
# of them announced itself (case 1 failed loudly); this one reported success.
sed -i'' -e 's#</head>#<style>.footer-year{color:magenta !important}</style></head>#' "$LEAF"
assert_green 6 "recolour inside the mask" "footer-year{color:magenta !important}" "$LEAF" "doc-leaf"

# ── CONTROL 7 — the tree was left as found ───────────────────────────────────
assert_green 7 "clean re-run, tree restored" "" "$SPEC" ""

echo
echo "──────────────────────────────────────────────"
echo "gate-49 red-test: $PASS passed, $FAIL failed (7 cases: 5 red + 2 controls)"
[ "$FAIL" -eq 0 ] || exit 1
