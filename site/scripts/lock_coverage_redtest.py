#!/usr/bin/env python3
"""lock_coverage_redtest.py — prove `lock_coverage_check.py` can FAIL before believing it passes.

HAUSSMANN P4.2 O0 · campaign convention 14: "a verification instrument is not believed until it has
been demonstrated to fail, and it must assert it reached the thing it claims to check."

This campaign has shipped SIX instruments that were wrong on their first live run in three weeks —
`check_live_headers.mjs` (read Vercel's SSO page and printed OK), `token_aa_check.py` (4 findings,
all 4 fabricated pairs), the usage scan that confirmed two of them, a `--validate-entry` exit code
swallowed by `| head`, a capture labelled `light` that was dark, and a `git check-ignore` loop that
printed five green ticks while `git` was not on PATH. The lock census is instrument number seven, so
it does not get to be trusted on a green.

Each mutation is applied to a COPY. The live matrix is never edited — a red test that requires
vandalising the real file is one nobody re-runs, which is how it stops being a test.

Each case asserts BOTH that the checker fails AND that it fails for the stated reason. A mutation
that stops matching must report a HARNESS BUG, never a pass: P4.1 O2 learned this the hard way when
a restructure silently un-matched an older mutation.

Usage:
    python3 site/scripts/lock_coverage_redtest.py
"""
import copy
import subprocess
import sys
import tempfile
from pathlib import Path

import yaml

HERE = Path(__file__).resolve().parent
CHECKER = HERE / "lock_coverage_check.py"
MATRIX = HERE / "lock_coverage_adna.yaml"
VAULT = HERE.parent.parent


def cell(matrix, lock_id):
    for lk in matrix["locks"]:
        if lk["id"] == lock_id:
            return lk["coverage"]["adna_site"]
    raise KeyError(f"HARNESS BUG: lock {lock_id} not in the matrix")


def run(matrix_obj):
    """Write the mutated matrix to a temp file and run the checker against it."""
    with tempfile.NamedTemporaryFile("w", suffix=".yaml", delete=False, encoding="utf-8") as fh:
        yaml.safe_dump(matrix_obj, fh, allow_unicode=True, sort_keys=False)
        tmp = fh.name
    try:
        p = subprocess.run(
            [sys.executable, str(CHECKER), "--matrix", tmp],
            capture_output=True, text=True, cwd=str(VAULT),
        )
        return p.returncode, p.stdout + p.stderr
    finally:
        Path(tmp).unlink(missing_ok=True)


def main():
    base = yaml.safe_load(MATRIX.read_text(encoding="utf-8"))
    results = []

    # ── CONTROL ────────────────────────────────────────────────────────────────────────────────
    # Without this the whole suite is unfalsifiable: if the checker failed on EVERYTHING, all four
    # mutations below would "pass" and prove nothing. The control is what makes the reds mean
    # something — the lesson from the /vaults light-capture false alarm.
    rc, out = run(copy.deepcopy(base))
    results.append(("CONTROL: unmutated copy passes", rc == 0,
                    f"exit {rc}" + ("" if rc == 0 else f"\n{out}")))

    # ── 1. fabricated `by:` ────────────────────────────────────────────────────────────────────
    m = copy.deepcopy(base)
    cell(m, "G3")["by"] = "site/tests/gates/gate-99-does-not-exist.spec.ts"
    rc, out = run(m)
    results.append(("1. fabricated `by:` path is caught", rc != 0 and "path missing" in out,
                    f"exit {rc}"))

    # ── 2. anchor that resolves ONLY inside a comment (rung 3) ─────────────────────────────────
    # The declared-enforced-but-enforcing-nothing shape. The anchor below is real text that lives
    # only in a `//` comment in gate-35, so `.exists()` and a naive grep would both say yes.
    m = copy.deepcopy(base)
    c = cell(m, "G3")
    c["by"] = "site/tests/gates/gate-35-registry-tiers.spec.ts"
    c["anchor"] = "the assertion that a dropped row cannot survive"
    rc, out = run(m)
    results.append(("2. comment-only anchor is caught (rung 3)",
                    rc != 0 and "ONLY inside a comment" in out, f"exit {rc}"))

    # ── 3. anchor bound only to a `describe()` container (rung 1b) ─────────────────────────────
    m = copy.deepcopy(base)
    c = cell(m, "G3")
    c["by"] = "site/tests/gates/gate-30-url-canonical.spec.ts"
    c["anchor"] = "gate-30 URL canonicalization"
    rc, out = run(m)
    results.append(("3. describe()-only anchor is caught (rung 1b)",
                    rc != 0 and "container is not a test" in out, f"exit {rc}"))

    # ── 4. THE CONSUMER LEG — a matrix short of the floor ──────────────────────────────────────
    # This is P4.2's own AC1 defect, reproduced deliberately. The mission was written to declare
    # "all 57 locks"; the floor is 60. Every one of 57 cells can be impeccable and the declaration
    # still be silently three locks short, so no amount of per-cell validation can see it. Only a
    # count DERIVED from upstream can, which is why `check_lockset()` exists.
    m = copy.deepcopy(base)
    m["locks"] = [lk for lk in m["locks"] if lk["id"] not in ("O1", "O2", "Q1")]
    rc, out = run(m)
    results.append(("4. a 57-lock matrix is caught as SHORT of the 60-lock floor",
                    rc != 0 and "SHORT of the floor" in out and "'O1', 'O2', 'Q1'" in out,
                    f"exit {rc}"))

    # ── 5. an invented lock the floor does not define ──────────────────────────────────────────
    m = copy.deepcopy(base)
    m["locks"] = copy.deepcopy(base["locks"]) + [
        {"id": "Z9", "coverage": {"adna_site": {"status": "na", "reason": "by_design"}}}
    ]
    rc, out = run(m)
    results.append(("5. an invented lock id is caught", rc != 0 and "INVENTS locks" in out,
                    f"exit {rc}"))

    # ── report ─────────────────────────────────────────────────────────────────────────────────
    print("lock_coverage_check.py — red test\n")
    ok = True
    for name, passed, detail in results:
        print(f"  {'PASS' if passed else 'FAIL'}  {name}   ({detail})")
        ok = ok and passed
    print()
    if ok:
        print(f"red test PASS — {len(results)}/{len(results)}: the checker fails when it should, "
              "and passes when it should.")
        return 0
    print("red test FAILED — a mutation did not produce its stated failure. Treat this as a "
          "HARNESS BUG, not as a passing checker.")
    return 1


if __name__ == "__main__":
    sys.exit(main())
