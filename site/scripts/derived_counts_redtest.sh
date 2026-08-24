#!/usr/bin/env bash
# =============================================================================
# derived_counts_redtest.sh — demonstrate gate-41 FAILS
# (HAUSSMANN P4.4a A1 / F-c · F-m · F-n · campaign convention 14)
#
# A gate whose three assertions all compare a published number to a derived one
# has a specific way of being useless: the PARSE silently stops matching, both
# sides read zero, and two zeros look exactly like agreement. So the mutations
# below are of two kinds —
#
#   VALUE mutations   the published figure is wrong  → must go RED
#   FORMAT mutations  the published figure is GONE   → must ALSO go RED,
#                     never quietly green
#
# The second kind is the one that matters. G41b's coverage floor and the
# "publishes no parseable figure" assertions exist for exactly this, and cases
# 3, 6 and 9 are what prove they work.
#
# ⚠ MUTATES vault records outside site/ (claim_register.md, adr_index.md,
# MANIFEST.md). All restored in a trap, with the restore VERIFIED before exit.
# =============================================================================
set -u -o pipefail

cd "$(dirname "${BASH_SOURCE[0]}")/.." || exit 9
VAULT=".."
SPEC="tests/gates/gate-41-derived-counts.spec.ts"
REG="$VAULT/how/campaigns/campaign_haussmann/evidence/claims/claim_register.md"
IDX="$VAULT/what/decisions/adr_index.md"
MAN="$VAULT/MANIFEST.md"

for f in "$SPEC" "$REG" "$IDX" "$MAN"; do
  [ -f "$f" ] || { echo "⛔ missing $f"; exit 9; }
done

REGBAK="$(mktemp)"; IDXBAK="$(mktemp)"; MANBAK="$(mktemp)"
cp "$REG" "$REGBAK"; cp "$IDX" "$IDXBAK"; cp "$MAN" "$MANBAK"
restore() {
  cp "$REGBAK" "$REG"; cp "$IDXBAK" "$IDX"; cp "$MANBAK" "$MAN"
  local bad=0
  cmp -s "$REGBAK" "$REG" || bad=1
  cmp -s "$IDXBAK" "$IDX" || bad=1
  cmp -s "$MANBAK" "$MAN" || bad=1
  [ "$bad" -eq 0 ] || echo "⛔⛔ RESTORE FAILED — vault records are MUTATED. Restore from git before committing."
  rm -f "$REGBAK" "$IDXBAK" "$MANBAK"
}
trap restore EXIT

pass=0; fail=0
check() { if [ "$2" = "$3" ]; then printf '  ✅ %-56s %s\n' "$1" "$3"; pass=$((pass+1));
          else printf '  ❌ %-56s expected %s, got %s\n' "$1" "$2" "$3"; fail=$((fail+1)); fi; }

g41() { # test-name-fragment -> passed | failed
  local out
  out="$(npx playwright test "$SPEC" -g "$1" --reporter=line 2>&1)"
  if grep -qE '[0-9]+ failed' <<<"$out"; then echo failed
  elif grep -qE '[0-9]+ passed' <<<"$out"; then echo passed
  else echo UNKNOWN; printf '%s\n' "$out" | tail -4 >&2; fi
}

py() { python3 - "$@"; }

echo
echo "gate-41 derived counts — red-test (F-c · F-m · F-n)"
echo "======================================================================"

echo "-- baseline: all four green on a good tree --"
check "0a. G41a reach                               → passed" passed "$(g41 'looking at the vault')"
check "0b. G41b register                            → passed" passed "$(g41 'F-c')"
check "0c. G41c ADR index                           → passed" passed "$(g41 'F-m')"
check "0d. G41d MANIFEST drift                      → passed" passed "$(g41 'F-n')"

echo
echo "-- F-c: a stale published tally must go RED --"
py <<PYEOF
import re
p="$REG"; s=open(p).read()
old="| Physical table rows | **160** |"
assert s.count(old)==1, f'MUTATION DID NOT APPLY (matched {s.count(old)}, expected 1) — harness bug, not a pass'
open(p,'w').write(s.replace(old,"| Physical table rows | **147** |"))
PYEOF
check "1. published row count stale (160→147)      → failed" failed "$(g41 'F-c')"
cp "$REGBAK" "$REG"

py <<PYEOF
p="$REG"; s=open(p).read()
old="| **Unique ids** | **145**"
assert s.count(old)==1, f'MUTATION DID NOT APPLY (matched {s.count(old)}, expected 1) — harness bug, not a pass'
open(p,'w').write(s.replace(old,"| **Unique ids** | **132**"))
PYEOF
check "2. published id count stale (145→132)       → failed" failed "$(g41 'F-c')"
cp "$REGBAK" "$REG"

echo
echo "-- ⭐ FORMAT mutations: a figure that VANISHES must not read as agreement --"
py <<PYEOF
p="$REG"; s=open(p).read()
old="| Physical table rows | **160** |"
assert s.count(old)==1, 'MUTATION DID NOT APPLY — harness bug, not a pass'
open(p,'w').write(s.replace(old,"| Physical table rows | (see above) |"))
PYEOF
check "3. row figure unparseable, not wrong         → failed" failed "$(g41 'F-c')"
cp "$REGBAK" "$REG"

echo
echo "-- F-m: the index falling further behind must go RED --"
py <<PYEOF
import re
p="$IDX"; s=open(p).read()
rows=re.findall(r'^\| \[(\d{3})\].*$', s, re.M)
assert len(rows)>=40, f'MUTATION PREMISE FALSE: only {len(rows)} rows — harness bug'
line=re.search(r'^\| \[046\].*$', s, re.M)
assert line, 'MUTATION DID NOT APPLY: no 046 row — harness bug, not a pass'
s=s.replace(line.group(0)+'\n','',1)
s=s.replace('**Tally:** 41 ADRs','**Tally:** 40 ADRs',1)
open(p,'w').write(s)
PYEOF
check "4. one more ADR unindexed (13→14)            → failed" failed "$(g41 'F-m')"
cp "$IDXBAK" "$IDX"

py <<PYEOF
p="$IDX"; s=open(p).read()
old="| [046]"
assert s.count(old)==1, f'MUTATION DID NOT APPLY (matched {s.count(old)}, expected 1) — harness bug'
open(p,'w').write(s.replace(old,"| [099](adr_099_does_not_exist.md)"))
PYEOF
check "5. index row with no file on disk            → failed" failed "$(g41 'F-m')"
cp "$IDXBAK" "$IDX"

py <<PYEOF
p="$IDX"; s=open(p).read()
old="**Tally:** 41 ADRs"
assert s.count(old)==1, 'MUTATION DID NOT APPLY — harness bug, not a pass'
open(p,'w').write(s.replace(old,"**Tally:** 55 ADRs"))
PYEOF
check "6. tally disagrees with its own table        → failed" failed "$(g41 'F-m')"
cp "$IDXBAK" "$IDX"

echo
echo "-- F-n: MANIFEST drifting further must go RED --"
py <<PYEOF
p="$MAN"; s=open(p).read()
old="updated: 2026-07-06"
assert s.count(old)>=1, f'MUTATION PREMISE FALSE: MANIFEST updated is not 2026-07-06 — harness bug'
open(p,'w').write(s.replace(old,"updated: 2026-06-01",1))
PYEOF
check "7. MANIFEST 49→84 days behind                → failed" failed "$(g41 'F-n')"
cp "$MANBAK" "$MAN"

py <<PYEOF
p="$MAN"; s=open(p).read()
old="updated: 2026-07-06"
assert s.count(old)>=1, 'MUTATION PREMISE FALSE — harness bug'
open(p,'w').write(s.replace(old,"updated: 2026-12-01",1))
PYEOF
check "8. MANIFEST dated AFTER STATE (not a pass)   → failed" failed "$(g41 'F-n')"
cp "$MANBAK" "$MAN"

py <<PYEOF
p="$MAN"; s=open(p).read()
old="updated: 2026-07-06"
assert s.count(old)>=1, 'MUTATION PREMISE FALSE — harness bug'
open(p,'w').write(s.replace(old,"updated: not-a-date",1))
PYEOF
check "9. MANIFEST date unparseable, not stale      → failed" failed "$(g41 'F-n')"
cp "$MANBAK" "$MAN"

echo
echo "-- ⭐ THE RATCHET LETS THINGS IMPROVE, or it is just a wall --"
# Index one of the missing ADRs. 13 -> 12 must stay GREEN: a baseline that
# failed on improvement would be reverted the first time anyone fixed anything.
py <<PYEOF
import re
p="$IDX"; s=open(p).read()
anchor=re.search(r'^\| \[046\].*$', s, re.M)
assert anchor, 'MUTATION DID NOT APPLY: no 046 row — harness bug'
row="| [047](adr_047_placeholder.md) | Backfilled by the red-test | accepted | 2026-08-01 | 2026-08-01 | redtest |"
s=s.replace(anchor.group(0), anchor.group(0)+"\n"+row, 1)
s=s.replace('**Tally:** 41 ADRs','**Tally:** 42 ADRs',1)
open(p,'w').write(s)
PYEOF
check "10. one ADR backfilled (13→12)               → passed" passed "$(g41 'F-m')"
cp "$IDXBAK" "$IDX"

echo
echo "-- CONTROLS: restored tree is green again --"
check "11. control: G41b restored                   → passed" passed "$(g41 'F-c')"
check "12. control: G41c restored                   → passed" passed "$(g41 'F-m')"
check "13. control: G41d restored                   → passed" passed "$(g41 'F-n')"

echo
echo "-- restore verified byte-for-byte --"
ok=1
cmp -s "$REGBAK" "$REG" || ok=0
cmp -s "$IDXBAK" "$IDX" || ok=0
cmp -s "$MANBAK" "$MAN" || ok=0
if [ "$ok" -eq 1 ]; then printf '  ✅ %-56s clean\n' "14. all three vault records byte-identical"; pass=$((pass+1))
else printf '  ❌ %-56s MUTATED\n' "14. all three vault records byte-identical"; fail=$((fail+1)); fi

echo
echo "======================================================================"
echo "  $pass passed, $fail failed"
[ "$fail" -eq 0 ] || exit 1
