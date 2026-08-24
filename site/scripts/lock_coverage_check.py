#!/usr/bin/env python3
"""lock_coverage_check.py — the craft-floor lock census for THIS SITE's surface.

HAUSSMANN P4.2 O0 · AC1. Consumer-side ADAPTER, not a fork — the sibling of
`token_aa_check.py` (P4.1 O1, ADR-059 (c)) and built on the same seam.

WHY THIS EXISTS
    WebForge's craft floor is 60 locks, and its `check_lock_coverage.py` is the anti-
    self-certification mechanic that makes a coverage claim checkable: an `enforced` cell must
    name a real file AND an anchor that resolves to real test code, so a fabricated cell FAILS.
    We want that mechanic pointed at this site.

    We cannot simply run theirs. Three facts, all verified 2026-08-24:

      1. Their `site` surface row is THEIR OWN self-site — 60/60 cells, 28 enforced / 32 na,
         with `by:` anchors pointing into their repo (`tests/a11y.spec.ts`, `vercel.json`).
         `check_lock_coverage.py --surface site` returns `Gate 4f PASS [site]`. P0.3 staged the
         "whose `site` is this row" clarification to Vitruvius; it is still pending their side.
      2. Writing into their vault is forbidden regardless — workspace Rule 10, campaign
         convention 4 (consume, never fork).
      3. Their checker binds to their tree by construction: `YAML_PATH = HERE/"lock_coverage.yaml"`,
         `VAULT = HERE.parents[2]`, `surface_dir()` resolving into WebForge, and a CLI of
         `--surface/--all/--log` with no way to point at a consumer matrix.

    So the LOCK SET and every scrap of CELL SEMANTICS are consumed BY REFERENCE — `validate_cell`,
    `resolve_rung`, the rung ladder, `NA_REASONS`, `CELL_STATUSES`, `run_surface`, all imported and
    never re-implemented. Only the RESOLVER SEAM is ours: two module globals repointed at this
    vault. That is the whole divergence, and it is pinned in `how/federation/webforge/CLAUDE.md`.

THE LEG THAT IS OURS ALONE
    `--check-lockset` compares our declared lock ids against THEIRS, derived from their live
    `lock_coverage.yaml` at run time. This is not decoration: P4.2's AC1 was written saying
    "all 57 locks" and the floor is 60 (they added O1/O2/Q1). A declaration that is silently three
    locks short of the floor it claims to declare is exactly the KW-14 class, and it is the one
    defect no amount of per-cell validation can see — every one of 57 cells can be impeccable.
    The count is DERIVED from their file on every run. It is never typed here.

WHAT IT DOES NOT DO
    It does not write to WebForge, does not vendor their matrix, and does not assert anything about
    their surfaces. It validates one column: `adna_site`.

Usage:
    python3 site/scripts/lock_coverage_check.py                 # census + lockset check
    python3 site/scripts/lock_coverage_check.py --matrix X.yaml # red-test against a mutated copy
    python3 site/scripts/lock_coverage_check.py --json
"""
import argparse
import json
import os
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent          # site/scripts/
SITE = HERE.parent                              # site/
VAULT = SITE.parent                             # aDNA.aDNA/
SURFACE = "adna_site"

# Overridable so the RED-TEST runs against a mutated copy instead of vandalising the live matrix.
# Convention 14: an instrument is not believed until it has been demonstrated to fail, and a
# demonstration that requires editing the real file is one nobody re-runs.
DEFAULT_MATRIX = HERE / "lock_coverage_adna.yaml"


# ---------------------------------------------------------------------------------------------
# Consume WebForge BY REFERENCE (wrapper standing order 1: never copy the implementation).
# ---------------------------------------------------------------------------------------------
def _webforge_gates_dir() -> Path:
    """Resolve WebForge's gate lib. Env override first, then the workspace-relative path.

    The federation pin lives in how/federation/webforge/CLAUDE.md; this is the execution-context
    resolution of it, so an absolute-ish path is correct here (path doctrine: scripts, not prose).
    """
    env = os.environ.get("WEBFORGE_GATES_DIR")
    if env:
        return Path(env)
    return VAULT.parent / "WebForge.aDNA" / "what" / "lib" / "gates"


def _import_check_lock_coverage():
    """Import their module, then repoint EXACTLY TWO globals at this vault.

    `resolve_by()` reads `surface_dir` and `VAULT` out of its own module namespace at call time,
    so rebinding them here reaches every downstream caller — `validate_cell`, `run_surface`,
    `by_universe` — without touching a line of their logic. That is the entire adapter.
    """
    gates = _webforge_gates_dir()
    if not (gates / "check_lock_coverage.py").is_file():
        sys.exit(
            f"error: WebForge gate lib not found at {gates}\n"
            "       set WEBFORGE_GATES_DIR, or check the federation pin in "
            "how/federation/webforge/CLAUDE.md"
        )
    sys.path.insert(0, str(gates))
    try:
        import check_lock_coverage as wf  # noqa: E402
    except Exception as e:                # pragma: no cover — surfaced, never swallowed
        sys.exit(f"error: could not import WebForge check_lock_coverage: {e}")

    # ---- the resolver seam, and nothing else -------------------------------------------------
    wf.VAULT = VAULT
    wf.surface_dir = lambda surface: VAULT
    return wf


def webforge_lockset(wf) -> list:
    """THEIR lock ids, in THEIR order, read from THEIR live matrix. Derived, never typed."""
    return [lk["id"] for lk in wf.load_matrix()["locks"]]


def check_lockset(declared: list, upstream: list) -> list:
    """The consumer invariant. Returns [problems]."""
    probs = []
    d, u = set(declared), set(upstream)
    if len(declared) != len(d):
        dups = sorted({i for i in declared if declared.count(i) > 1})
        probs.append(f"duplicate lock id(s) in the consumer matrix: {dups}")
    missing, extra = sorted(u - d), sorted(d - u)
    if missing:
        probs.append(
            f"lockset SHORT of the floor: {len(missing)} lock(s) in WebForge's matrix have no "
            f"`{SURFACE}` row — {missing}"
        )
    if extra:
        probs.append(
            f"lockset INVENTS locks the floor does not define: {extra} — a consumer declares "
            "coverage of the floor, it does not extend it"
        )
    return probs


def main(argv):
    ap = argparse.ArgumentParser()
    ap.add_argument("--matrix", default=str(DEFAULT_MATRIX),
                    help="consumer coverage matrix (override for mutation tests)")
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args(argv)

    wf = _import_check_lock_coverage()

    matrix_path = Path(args.matrix)
    if not matrix_path.is_file():
        sys.exit(f"error: consumer matrix not found: {matrix_path}")
    import yaml
    matrix = yaml.safe_load(matrix_path.read_text(encoding="utf-8"))

    declared = [lk["id"] for lk in matrix.get("locks", [])]
    upstream = webforge_lockset(wf)
    lockset_probs = check_lockset(declared, upstream)

    # The census itself — their code, our column.
    wf.reset_rung_tally()
    n_probs, buckets = wf.run_surface(SURFACE, matrix)

    total = n_probs + len(lockset_probs)
    for p in lockset_probs:
        print(f"    {p}")

    if args.json:
        print(json.dumps({
            "surface": SURFACE,
            "declared_locks": len(declared),
            "upstream_locks": len(upstream),
            "buckets": buckets,
            "cell_findings": n_probs,
            "lockset_findings": len(lockset_probs),
            "pass": total == 0,
        }, indent=2))
    else:
        print()
        verdict = "PASS" if total == 0 else "FAIL"
        print(f"lock-coverage {verdict} [{SURFACE}]: {total} finding(s). "
              f"cells — {wf._bucket_str(buckets)}.")
        print(f"  lockset — {len(declared)} declared / {len(upstream)} on the floor "
              f"(derived from WebForge at run time).")
        ladder = wf.rung_tally_str()
        if ladder:
            print(f"  ladder — {ladder}.")

    return 1 if total else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
