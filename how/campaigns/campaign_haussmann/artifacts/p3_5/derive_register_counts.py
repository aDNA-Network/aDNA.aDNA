#!/usr/bin/env python3
"""
derive_register_counts.py — the claim register's row/id counts, as a script rather than a phrase.

WHY THIS EXISTS. §9.5 of the register found that the parse behind every published count was
described only as "the same parse" and never written down, and that two defensible readings of the
same table differ by 2 rows. An undocumented derivation is a number nobody can reproduce. This
pins the LOOSER, §8.6-comparable parse so that successive counts stay comparable to the ones
before them.

The looser parse: a table row whose FIRST cell contains an id, allowing bold, annotations, and
compound cells. The two row shapes a stricter parse silently drops are `| R-23 / R-23b |` and
`| **R-18** *(rewritten)* |`. Both are real rows.

Usage (from the campaign directory):
    python3 artifacts/p3_5/derive_register_counts.py

Filed at P3.5 against the P4.4 gate-hardening follow-up. It does not close that follow-up: the
count still has to be RUN and pasted. Wiring it into the gate suite so a stale figure fails the
build is the remaining half.
"""
import re
import sys
from pathlib import Path

DEFAULT = Path(__file__).resolve().parents[2] / "evidence" / "claims" / "claim_register.md"


def derive(path: Path):
    rows, ids = [], []
    for line in path.read_text().splitlines():
        if not line.startswith("|") or line.count("|") < 2:
            continue
        first_cell = line.split("|")[1]
        found = re.findall(r"\b([RG]-\d+)\b", first_cell)
        if found:
            rows.append(line)
            ids.extend(found)

    uniq = sorted(set(ids), key=lambda s: (s[0], int(s.split("-")[1])))
    r_ids = [i for i in uniq if i.startswith("R-")]
    g_ids = [i for i in uniq if i.startswith("G-")]
    nums = sorted(int(i.split("-")[1]) for i in r_ids)
    gaps = [n for n in range(nums[0], nums[-1] + 1) if n not in nums]
    return rows, uniq, g_ids, r_ids, nums, gaps


if __name__ == "__main__":
    target = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT
    rows, uniq, g_ids, r_ids, nums, gaps = derive(target)
    print(f"physical table rows: {len(rows)}")
    print(f"unique ids: {len(uniq)} ({len(g_ids)} G-* + {len(r_ids)} R-*, R-{nums[0]}...R-{nums[-1]})")
    print(f"gaps in the R-* sequence: {gaps if gaps else 0}")
