#!/usr/bin/env bash
# zoom_resize_redtest.sh — red-prove gate-46 (HAUSSMANN P4.3 O1, convention 14).
#
# "A verification instrument is not believed until it has been demonstrated to fail."
#
# gate-46 went 13/13 green on its second run (the first run's single red was the GATE's own
# duration-parsing bug — authored `150ms`, minified to `.15s` — not the site's). A gate that has
# only ever been green is indistinguishable from a gate that asserts nothing, so each claim gets a
# planted mutation aimed at it.
#
# ⚠ THE CONTROL MUTATIONS MATTER MORE THAN THE CLAIM MUTATIONS HERE. gate-46's 1.4.4 half applies a
# transform and then measures; if the transform silently fails to apply, the page LOOKS conformant.
# That is not hypothetical — the first probe of this class used `addInitScript`, which is a NO-OP
# for the root font-size, and reported "no overflow" for 15 routes it had never actually resized.
# Cases 2, 5 and 7 mutate so that a CONTROL must fire; if the gate stays green there, its controls
# are decoration.
#
# ⚠ EVERY CASE ASSERTS ITS MUTATION ACTUALLY APPLIED before believing the red — a mutation that
# silently fails to match produces a green that reads exactly like "the gate did not catch it".
#
# ⚠ A DISTINCT PORT PER CASE. `reuseExistingServer: false` means a preview server still releasing a
# port makes the next run fail to BIND, and a bind failure is not a red gate.
#
# Usage:  bash scripts/zoom_resize_redtest.sh     (from site/)
# Mutates BUILT output only (dist/); restores from backup in a trap. Never touches src/.

set -uo pipefail
cd "$(dirname "$0")/.." || exit 2

SPEC="tests/gates/gate-46-zoom-resize.spec.ts"
# Hash-named per build — RESOLVED, never hardcoded (a stale hash would "apply" zero mutations and
# every case would report a false red).
CSS="$(grep -rl 'header-inner' dist/_astro/*.css 2>/dev/null | head -1)"
NET_HTML="dist/network/index.html"
BAK="$(mktemp -d)"
PASS=0; FAIL=0
PORT_BASE="${GATE_PORT_BASE:-4460}"
CASE_N=0

if [ -z "$CSS" ] || [ ! -f "$NET_HTML" ]; then
  echo "PRE-FLIGHT FAILED: css='$CSS' net='$NET_HTML' — build first (npx astro build)"; exit 2
fi
echo "resolved CSS bundle: $CSS"

cleanup() {
  [ -f "$BAK/bundle.css" ] && cp "$BAK/bundle.css" "$CSS"
  [ -f "$BAK/network.html" ] && cp "$BAK/network.html" "$NET_HTML"
  rm -rf "$BAK"
}
trap cleanup EXIT

cp "$CSS" "$BAK/bundle.css"
cp "$NET_HTML" "$BAK/network.html"

# run_case <label> <expect: RED|GREEN> <grep-filter> <mutation-fn>
run_case() {
  local label="$1" want="$2" filter="$3" mutate="$4"
  CASE_N=$((CASE_N + 1))
  local port=$((PORT_BASE + CASE_N))
  cleanup_files() { cp "$BAK/bundle.css" "$CSS"; cp "$BAK/network.html" "$NET_HTML"; }
  cleanup_files

  if ! "$mutate"; then
    echo "✗ CASE $CASE_N [$label]: HARNESS BUG — the mutation did not apply. Not a pass, not a red."
    FAIL=$((FAIL + 1)); cleanup_files; return
  fi

  local out rc
  out="$(GATE_PORT=$port npx playwright test "$SPEC" --grep "$filter" 2>&1)"; rc=$?
  cleanup_files

  local got; [ $rc -eq 0 ] && got=GREEN || got=RED
  if [ "$got" = "$want" ]; then
    echo "✓ CASE $CASE_N [$label]: $got as expected"
    PASS=$((PASS + 1))
  else
    echo "✗ CASE $CASE_N [$label]: expected $want, got $got"
    echo "$out" | tail -12
    FAIL=$((FAIL + 1))
  fi
}

applied() { # applied <file> <pattern-that-must-now-be-absent-or-present> <mode:gone|here>
  local f="$1" p="$2" mode="$3"
  if [ "$mode" = gone ]; then grep -q -- "$p" "$f" && return 1 || return 0
  else grep -q -- "$p" "$f" && return 0 || return 1; fi
}

# ── 1. The real defect, restored: strip the header's flex-wrap ────────────────────────────────
m_unwrap() {
  perl -0pi -e 's/(\.header-inner\[[^\]]*\]\{[^}]*?);?flex-wrap:wrap\}/$1}/g' "$CSS"
  applied "$CSS" 'header-inner\[[^]]*\]{display:flex;align-items:center;gap:var(--space-4);max-width:var(--content-width);margin:0 auto;padding:var(--space-3) var(--space-6);flex-wrap:wrap}' gone
}
run_case "1.4.4 — header flex-wrap removed (the measured 229px defect)" RED "G46 resize" m_unwrap

# ── 2. CONTROL: the type scale stops responding to the root ───────────────────────────────────
# Pin every --text-* token to a px value. Text then does NOT grow with the root font-size, so the
# page cannot overflow — the SAME green a conformant page produces. The control must catch it.
m_pin_px() {
  perl -0pi -e 's/--text-([a-z0-9]+):clamp\([^)]*\)/--text-$1:14px/g; s/--text-([a-z0-9]+):[0-9.]+rem/--text-$1:14px/g' "$CSS"
  applied "$CSS" -- '--text-base:14px' here
}
run_case "CONTROL — type scale pinned to px (transform becomes a no-op)" RED "G46 resize" m_pin_px

# ── 3. 1.4.10: plant a wide fixed element so 320px must overflow ──────────────────────────────
m_wide() {
  printf '\n.doc-content,main{min-width:900px}\n' >> "$CSS"
  applied "$CSS" 'min-width:900px' here
}
run_case "1.4.10 — 900px min-width planted (reflow broken at 320)" RED "G46 reflow" m_wide

# ── 4. Motion: remove the reduced-motion token override ───────────────────────────────────────
m_motion_tokens() {
  perl -0pi -e 's/--transition-fast:0s;--transition-base:0s;--transition-slow:0s/--transition-fast:.15s ease;--transition-base:.25s ease;--transition-slow:.4s ease/g' "$CSS"
  applied "$CSS" -- '--transition-fast:0s' gone
}
run_case "2.3.3 — reduced-motion token override removed" RED "G46 motion: the --transition" m_motion_tokens

# ── 5. CONTROL: the tokens are zero for EVERYONE ──────────────────────────────────────────────
# If the base tokens are already 0, "zero under reduced motion" is true and meaningless. The
# gate's control must fire rather than reporting a pass.
m_motion_always_zero() {
  perl -0pi -e 's/--transition-fast:\.15s ease;--transition-base:\.25s ease;--transition-slow:\.4s ease/--transition-fast:0s;--transition-base:0s;--transition-slow:0s/' "$CSS"
  applied "$CSS" -- '--transition-fast:.15s ease' gone
}
run_case "CONTROL — transitions zero WITHOUT the preference (vacuous claim)" RED "G46 motion: the --transition" m_motion_always_zero

# ── 6. Motion: the diagram arms regardless of the preference ──────────────────────────────────
m_diagram_arms() {
  perl -0pi -e 's/matchMedia\("\(prefers-reduced-motion: reduce\)"\)\.matches/false/g' "$NET_HTML"
  applied "$NET_HTML" 'prefers-reduced-motion: reduce' gone
}
run_case "2.3.3 — diagram ignores the motion preference" RED "G46 motion: the network diagram" m_diagram_arms

# ── 7. CONTROL: the component is gone entirely ────────────────────────────────────────────────
# "0 armed" is equally consistent with the diagram having been deleted. The control must say so.
m_diagram_absent() {
  perl -0pi -e 's/data-netdiagram/data-netdiagram-REMOVED/g' "$NET_HTML"
  applied "$NET_HTML" 'data-netdiagram"' gone
}
run_case "CONTROL — [data-netdiagram] absent (asserting about nothing)" RED "G46 motion: the network diagram" m_diagram_absent

# ── 8. + 9. Unmutated controls: the gate must be GREEN on a clean tree ────────────────────────
m_noop() { return 0; }
run_case "CONTROL — clean tree, resize half" GREEN "G46 resize" m_noop
run_case "CONTROL — clean tree, motion half" GREEN "G46 motion" m_noop

echo
echo "zoom_resize_redtest: $PASS passed, $FAIL failed (of $CASE_N cases)"
[ "$FAIL" -eq 0 ] || exit 1
