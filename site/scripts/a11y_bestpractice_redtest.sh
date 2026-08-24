#!/usr/bin/env bash
# =============================================================================
# a11y_bestpractice_redtest.sh — demonstrate gate-4's best-practice widening
# (HAUSSMANN P4.4a A1 / F-a · campaign convention 14)
#
# ⭐ THE CLAIM BEING TESTED IS A ZERO, AND A ZERO IS THE HARDEST THING TO
# BELIEVE. `withTags(['best-practice'])` matching NO rules produces exactly the
# same "0 violations" as a clean site. So this harness does not ask "are there
# violations" — it asks the three questions that make a zero mean something:
#
#   A. did best-practice rules actually RUN?          (else every zero is vacuous)
#   B. does the widened tag set CATCH a planted defect?
#   C. was that same defect INVISIBLE to the old tag set?
#
# C is what proves F-a described a real hole rather than a theoretical one. A
# and B are what stop this file from being a green that cannot go red.
# =============================================================================
set -u -o pipefail

cd "$(dirname "${BASH_SOURCE[0]}")/.." || exit 9
SPEC="tests/gates/zz-fa-redtest.spec.ts"
GATE="tests/gates/gate-4-a11y.spec.ts"
GATEBAK="$(mktemp)"
cp "$GATE" "$GATEBAK"
cleanup() { rm -f "$SPEC"; cp "$GATEBAK" "$GATE"; rm -f "$GATEBAK"; }
trap cleanup EXIT

cat > "$SPEC" <<'EOF'
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const plant = async (page: any) => {
  await page.evaluate(() => {
    const t = document.createElement('table');
    t.innerHTML = '<tr><th></th><th>x</th></tr><tr><td>a</td><td>b</td></tr>';
    document.body.appendChild(t);
  });
};

test('A: best-practice rules are actually evaluated', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  const r = await new AxeBuilder({ page }).withTags(['best-practice']).analyze();
  const evaluated = r.passes.length + r.violations.length + r.incomplete.length + r.inapplicable.length;
  expect(evaluated, `best-practice matched only ${evaluated} rules — a no-op tag makes every zero vacuous`).toBeGreaterThan(5);
});

test('B: the widened tag set CATCHES a planted best-practice defect', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  await plant(page);
  const r = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'best-practice']).analyze();
  expect(r.violations.map((v) => v.id)).toContain('empty-table-header');
});

test('C: the OLD tag set was blind to it — F-a s premise, reproduced', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  await plant(page);
  const r = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
  expect(r.violations.map((v) => v.id)).not.toContain('empty-table-header');
});

test('D: the live site is clean under the widened set — the zero being claimed', async ({ page }) => {
  await page.goto('/community/proposals/aep-1/', { waitUntil: 'networkidle' });
  const r = await new AxeBuilder({ page }).withTags(['best-practice']).analyze();
  expect(r.violations.map((v) => `${v.id}×${v.nodes.length}`), 'the page F-a s defect was found on').toEqual([]);
});
EOF

pass=0; fail=0
check() { if [ "$2" = "$3" ]; then printf '  ✅ %-56s %s\n' "$1" "$3"; pass=$((pass+1));
          else printf '  ❌ %-56s expected %s, got %s\n' "$1" "$2" "$3"; fail=$((fail+1)); fi; }
# ⚠ The -g argument is a REGEX, not a literal. An earlier version of this file
# passed "Proposal (constitution)" and playwright read the parentheses as a
# capture group that matched no test — reported as UNKNOWN, not as a pass, which
# is the only reason it was caught. Fragments here must be regex-safe.
run() { # -g fragment (REGEX)
  local out; out="$(npx playwright test "$1" -g "$2" --reporter=line 2>&1)"
  if grep -qE '[0-9]+ failed' <<<"$out"; then echo failed
  elif grep -qE '[0-9]+ passed' <<<"$out"; then echo passed
  else echo UNKNOWN; printf '%s\n' "$out" | tail -4 >&2; fi
}

echo
echo "gate-4 best-practice widening — red-test (F-a)"
echo "======================================================================"
echo "-- the three questions that make a zero mean something --"
check "A. best-practice rules actually run          → passed" passed "$(run "$SPEC" 'A: best-practice')"
check "B. widened set CATCHES a planted defect      → passed" passed "$(run "$SPEC" 'B: the widened')"
check "C. old set was BLIND to the same defect      → passed" passed "$(run "$SPEC" 'C: the OLD')"
check "D. the claimed zero holds on the real page   → passed" passed "$(run "$SPEC" 'D: the live site')"

echo
echo "-- the gate itself: widened runs clean, and the widening is load-bearing --"
check "E. gate-4 green with best-practice           → passed" passed "$(run "$GATE" 'Proposal archive')"

python3 - <<'PYEOF'
p='tests/gates/gate-4-a11y.spec.ts'
s=open(p).read()
old=".withTags(['wcag2a', 'wcag2aa', 'best-practice'])"
assert s.count(old)==1, f'MUTATION DID NOT APPLY (matched {s.count(old)}, expected 1) — harness bug, not a pass'
open(p,'w').write(s.replace(old,".withTags(['best-practice-typo-that-matches-nothing'])"))
PYEOF
check "F. a tag matching NO rules → gate still green" passed "$(run "$GATE" 'Proposal archive')"
cp "$GATEBAK" "$GATE"

echo
echo "  ⚠ CASE F IS NOT A FAILURE — IT IS THE FINDING, AND IT IS WHY A–D EXIST."
echo "    A gate asserting 'zero violations' CANNOT detect that it evaluated zero"
echo "    rules: both states are green. gate-4 is structurally unable to defend its"
echo "    own tag set, so cases A and B are the only thing standing between this"
echo "    suite and a silently disarmed accessibility gate. Run them when the tags"
echo "    change; a green gate-4 alone will never tell you."

echo
echo "======================================================================"
echo "  $pass passed, $fail failed"
[ "$fail" -eq 0 ] || exit 1
