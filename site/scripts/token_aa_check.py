#!/usr/bin/env python3
"""token_aa_check.py — WCAG 2.2 AA contrast audit on THIS SITE's resolved token layer.

HAUSSMANN P4.1 O1 · ADR-059 (c) limb (i). Consumer-side ADAPTER, not a fork.

WHY THIS EXISTS
    ADR-059 ruled (c): adopt WebForge's VALIDATORS over the existing hand-authored CSS, and pin the
    EMISSION divergence. WebForge's `check_aa.py` audits resolved token values per ceiling x appearance
    — but it resolves them from WebForge's DTCG source via `compile_css.resolved_role_map`, and this
    site is not compiled from that source. So the pair table and the contrast math are consumed BY
    REFERENCE (imported, never copied — wrapper standing order 1) and only the RESOLVER is ours.

    It complements gate-4 (axe), it does not duplicate it: axe proves the RENDERED PAGE, this proves
    the PALETTE. A token pair can fail here while every page that happens to use it passes axe, because
    no page currently renders that combination — which is the shift-left.

    It is also the instrument the mission previously lacked. `verification_method` named
    "gate-25/4d-class token checks"; gate-25 EXCLUDES tokens.css and branding.css from its scan by
    construction, and Gate 4d compares WebForge's emitted CSS to WebForge's source. Neither can see a
    change to this site's token layer. This can.

WHAT IT DOES NOT DO
    It does not derive, regenerate, or emit a single token value. ADR-059 (c) forbids that.

Usage:
    python3 site/scripts/token_aa_check.py              # audit both appearances
    python3 site/scripts/token_aa_check.py --appearance dark
    python3 site/scripts/token_aa_check.py --json       # machine-readable, for the gate
"""
import argparse
import json
import os
import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent          # site/scripts/
SITE = HERE.parent                              # site/
# Overridable so the RED-TEST can run against a mutated copy instead of editing the live stylesheets.
# Convention 14: an instrument is not believed until it has been demonstrated to fail, and a
# demonstration that requires vandalising src/ is one nobody re-runs.
STYLES = SITE / "src" / "styles"


# ---------------------------------------------------------------------------------------------
# Consume WebForge BY REFERENCE (contract §11 anti-pattern #1: never copy the implementation).
# ---------------------------------------------------------------------------------------------
def _webforge_tokens_dir() -> Path:
    """Resolve WebForge's token lib. Env override first, then the workspace-relative path.

    The federation pin lives in how/federation/webforge/CLAUDE.md; this is the execution-context
    resolution of it, so an absolute-ish path is correct here (path doctrine: scripts, not prose).
    """
    env = os.environ.get("WEBFORGE_TOKENS_DIR")
    if env:
        return Path(env)
    return SITE.parent.parent / "WebForge.aDNA" / "what" / "lib" / "tokens"


def _import_check_aa():
    d = _webforge_tokens_dir()
    if not (d / "check_aa.py").exists():
        sys.stderr.write(
            f"ABORT: WebForge token lib not found at {d}\n"
            f"       Set WEBFORGE_TOKENS_DIR, or check the federation pin in\n"
            f"       how/federation/webforge/CLAUDE.md.\n"
            f"       This adapter deliberately does NOT vendor a fallback copy of the pair table:\n"
            f"       a stale local copy that silently diverges from WebForge is precisely the drift\n"
            f"       the DTCG pipeline exists to kill.\n"
        )
        sys.exit(2)
    sys.path.insert(0, str(d))
    import check_aa  # noqa: E402  (deliberate late import — path must be set first)
    return check_aa


# ---------------------------------------------------------------------------------------------
# Colour parsing — our token layer is mixed hex + hsl(); WebForge's luminance() wants hex.
# ---------------------------------------------------------------------------------------------
NAMED = {"white": "#ffffff", "black": "#000000"}
_HSL = re.compile(r"^hsl\(\s*([\d.]+)\s+([\d.]+)%\s+([\d.]+)%\s*(?:/.*)?\)$", re.I)


def _hsl_to_hex(h, s, lightness):
    h, s, lightness = float(h) % 360, float(s) / 100.0, float(lightness) / 100.0
    c = (1 - abs(2 * lightness - 1)) * s
    x = c * (1 - abs((h / 60.0) % 2 - 1))
    m = lightness - c / 2
    r, g, b = [
        (c, x, 0), (x, c, 0), (0, c, x), (0, x, c), (x, 0, c), (c, 0, x)
    ][int(h // 60) % 6]
    return "#%02x%02x%02x" % tuple(round((v + m) * 255) for v in (r, g, b))


def to_hex(value):
    """Normalise a CSS colour to #rrggbb, or return None if it is not a flat colour."""
    if not value:
        return None
    v = value.strip().lower()
    if v in NAMED:
        return NAMED[v]
    if v.startswith("#"):
        h = v[1:]
        if len(h) == 3:
            return "#" + "".join(ch * 2 for ch in h)
        if len(h) in (6, 8):
            return "#" + h[:6]
        return None
    m = _HSL.match(v)
    if m:
        return _hsl_to_hex(*m.groups())
    return None  # gradients, color-mix(), transparent, etc. — honest-absent, never guessed


# ---------------------------------------------------------------------------------------------
# Resolve THIS site's token layer, per appearance.
#   light = the :root cascade;  dark = the :root cascade with the .dark block overlaid.
# ---------------------------------------------------------------------------------------------
_COMMENT = re.compile(r"/\*.*?\*/", re.S)
_DECL = re.compile(r"(--[\w-]+)\s*:\s*([^;]+);")


def _blocks(css, selector):
    """Every declaration body for `selector` at the top level, in source order."""
    out = []
    for m in re.finditer(re.escape(selector) + r"\s*\{", css):
        depth, i = 1, m.end()
        while i < len(css) and depth:
            if css[i] == "{":
                depth += 1
            elif css[i] == "}":
                depth -= 1
            i += 1
        out.append(css[m.end():i - 1])
    return out


def load_layer(appearance):
    """Return {var_name: raw_value} for the given appearance, later files winning."""
    raw = {}
    for name in ("tokens.css", "branding.css"):
        css = _COMMENT.sub("", (STYLES / name).read_text(encoding="utf-8"))
        selectors = [":root"] + ([".dark"] if appearance == "dark" else [])
        for sel in selectors:
            for body in _blocks(css, sel):
                for var, val in _DECL.findall(body):
                    raw[var] = val.strip()
    return raw


_VAR = re.compile(r"var\(\s*(--[\w-]+)\s*(?:,\s*([^)]+))?\)")


def resolve(raw, value, _seen=None):
    """Follow var() chains to a literal. Cycle-safe; returns None if it cannot land on a colour."""
    _seen = _seen or set()
    for _ in range(12):
        m = _VAR.fullmatch(value.strip())
        if not m:
            return value.strip()
        name, fallback = m.group(1), m.group(2)
        if name in _seen:
            return None
        _seen.add(name)
        if name in raw:
            value = raw[name]
        elif fallback:
            value = fallback
        else:
            return None
    return None


# ---------------------------------------------------------------------------------------------
# THE ROLE MAP — the load-bearing judgement in this file, so every row carries its reason.
#
# ⚠ A wrong mapping produces a validator that certifies the wrong pairs and reports green. Each row
# below is grounded in where the value is ACTUALLY consumed in the rendered CSS, not in name
# similarity. Two rows are appearance-dependent and would be wrong if flattened:
#
#   primary       — the fill that carries white text. `.btn-primary` uses var(--color-primary) in
#                   light, but `.dark .btn-primary` OVERRIDES to var(--brand-primary-dark)
#                   (global.css:197). Both resolve to the same value, so the row is stable — but it
#                   is NOT `--color-primary`, which in dark is the LIGHTER #9d7cd8 that branding.css
#                   explicitly records as 3.3:1 against white and unfit for white body text.
#   primary-hover — light uses var(--color-primary-hover); dark is a LITERAL #7c5cc4 in
#                   global.css:202, outside the token layer entirely.
#
# `ring` is --color-primary because that IS the focus outline (global.css:155,166) — the one place
# the lighter purple is correct, since a focus ring is non-text and floors at 3:1.
# ---------------------------------------------------------------------------------------------
def role_map(raw, appearance):
    def r(var):
        return to_hex(resolve(raw, raw.get(var, "")))

    roles = {
        "background":       r("--color-bg"),
        "surface":          r("--color-surface"),
        "surface-elevated": r("--color-bg-alt"),
        "foreground":       r("--color-text"),
        "muted-foreground": r("--color-text-muted"),
        "heading":          r("--color-text-heading"),
        # accent-used-as-text: our link colour is the accent in that role.
        "primary-text":     r("--color-link"),
        # the white-text-bearing fill — see the note above; identical in both appearances.
        "primary":          r("--brand-primary-dark"),
        "on-primary":       "#ffffff",   # global.css:186 `.btn-primary { color: white }`
        "ring":             r("--color-primary"),
    }
    roles["primary-hover"] = (
        "#7c5cc4" if appearance == "dark" else r("--color-primary-hover")
    )
    return {k: v for k, v in roles.items() if v}


# Consumer-specific pairs WebForge's table cannot name, because these roles do not exist upstream.
# Deliberately NOT force-fitted onto WebForge's status-chip role names: our badges are a
# mode-independent pale-pill vocabulary with one pinned dark ink, which is a different design, and
# mapping them onto `status-healthy-*` would make the audit assert a correspondence that is not real.
#
# ⭐ EVERY PAIR HERE IS GROUNDED IN A COUNTED USAGE. The first draft of this list was not, and all
# FOUR failures it reported were fabricated by the list itself — see the exclusions below. A contrast
# pair asserts "this colour is rendered on that colour"; if no rule in the codebase does that, the
# pair tests nothing and its verdict is noise. Counts from a scan of site/src for
# `color:` NOT preceded by a hyphen (the first scan used `\bcolor\s*:`, which also matches
# `border-color:` — that single regex bug is what manufactured two of the four false failures).
EXTRA_PAIRS = [
    # badge ink on the three pill fills — the pills are literal tokens, ink is pinned dark.
    ("--color-badge-text", "--color-badge-in-progress", 4.5, "badge ink on in-progress pill"),
    ("--color-badge-text", "--color-badge-completed",   4.5, "badge ink on completed pill"),
    ("--color-badge-text", "--color-badge-planned",     4.5, "badge ink on planned pill"),
    # --color-link as text: 54 counted usages. The most load-bearing text pair on the property.
    ("--color-link",       "--color-bg",                4.5, "link on app bg"),
    ("--color-link",       "--color-surface",           4.5, "link on surface"),
    ("--color-link-hover", "--color-bg",                4.5, "hovered link on app bg"),
    # --color-success as text: 2 counted usages. --color-error as text: 1 (changelog.astro).
    ("--color-success",    "--color-bg",                4.5, "success text on app bg"),
    ("--color-error",      "--color-bg",                4.5, "error text on app bg"),
    # ⭐ muted text on the ELEVATED surface — added at HAUSSMANN P4.1 O2, and it is a PRE-EXISTING
    # GAP this mission surfaced rather than a pair this mission created. The list above tested
    # `--color-text-muted` on `--color-bg` and on `--color-surface` but never on `--color-bg-alt`,
    # while 23 files pair a `--color-bg-alt` container with `--color-text-muted` text and there are
    # 40 such container rules site-wide (counted with `(?<![-\w])background(?:-color)?:` and
    # `(?<![-\w])color:` — the hyphen guard is O1's regex lesson, without which `border-color:` is
    # miscounted as a text usage and manufactures the very pair it appears to confirm).
    # The concrete instance this mission adds, and the one that grounds the pair beyond
    # co-occurrence: `.vaults-empty { background: var(--color-bg-alt) }` with
    # `.vaults-empty p { color: var(--color-text-muted) }` — the `empty_state` slot's zero-result
    # block, whose contrast ADR-053 requires verified in BOTH themes.
    ("--color-text-muted", "--color-bg-alt",            4.5, "muted text on elevated surface"),
]

# ⛔ DELIBERATE EXCLUSIONS — recorded so a future reader does not "restore the missing pairs".
#
#   --color-warning / --color-info  vs bg as TEXT — EXCLUDED: **0 counted text usages each**. Both
#       are border-and-background accents only (`.callout-warning { border-color: … }`; the
#       `badge-deprecated`/`badge-updated` chips render a `color-mix(… 55%, …)` DERIVATIVE, not the
#       raw token). Testing the raw token as body text reported 2.13:1 and 2.86:1 against white —
#       two red rows for a rendering that does not exist anywhere on the site.
#
#   --color-border vs bg at a 3.0 non-text floor — EXCLUDED: **wrong rule, not a wrong value**.
#       WCAG 1.4.11 governs UI-component boundaries required to identify the component and
#       meaningful graphics; it does not govern decorative separators. 103 of 105 usages are
#       `border*` dividers between cards and sections, and the 4 text usages are all `.sep`
#       punctuation glyphs between links. A subtle divider is a design decision, not a defect —
#       and a 1.3:1 "failure" here would push someone to darken every border on the property.
#
#   If a future change starts rendering warning/info as text, or gives --color-border a
#   component-identifying job, add the pair back WITH its usage count. That is the standard of
#   evidence this list is held to.


def audit(appearance, check_aa):
    raw = load_layer(appearance)
    roles = role_map(raw, appearance)
    rows, fails = [], []

    def add(fg_label, fgv, bg_label, bgv, floor, label):
        if not (fgv and bgv):
            rows.append((None, f"  SKIP  {label}  [unresolved: {fg_label} / {bg_label}]"))
            return
        ratio = check_aa.ratio(fgv, bgv)
        ok = ratio >= floor
        rows.append((ok, f"{ratio:5.2f}:1  (>= {floor})  {label}  [{fg_label} {fgv} / {bg_label} {bgv}]"))
        if not ok:
            fails.append({"appearance": appearance, "fg": fg_label, "bg": bg_label,
                          "ratio": round(ratio, 2), "floor": floor, "label": label})

    # 1 — WebForge's own pair table, consumed by reference.
    for fg, bg, floor, label in check_aa.PAIRS:
        if fg in roles and bg in roles:
            add(fg, roles[fg], bg, roles[bg], floor, label)

    # 2 — consumer-specific pairs.
    for fg, bg, floor, label in EXTRA_PAIRS:
        add(fg, to_hex(resolve(raw, raw.get(fg, ""))),
            bg, to_hex(resolve(raw, raw.get(bg, ""))), floor, label)

    return rows, fails


def main(argv):
    global STYLES
    ap = argparse.ArgumentParser()
    ap.add_argument("--appearance", choices=["light", "dark"])
    ap.add_argument("--json", action="store_true")
    ap.add_argument("--styles-dir", help="override src/styles (red-test harness only)")
    args = ap.parse_args(argv)

    if args.styles_dir:
        STYLES = Path(args.styles_dir)

    check_aa = _import_check_aa()
    appearances = [args.appearance] if args.appearance else ["light", "dark"]

    all_fails, report = [], {}
    for appearance in appearances:
        rows, fails = audit(appearance, check_aa)
        all_fails += fails
        report[appearance] = [line for _, line in rows]
        if not args.json:
            print(f"\n=== adna.network token layer / {appearance} "
                  f"(pairs from WebForge {_webforge_tokens_dir().name}/check_aa.py) ===")
            for ok, line in rows:
                print(f"  {'SKIP' if ok is None else ('PASS' if ok else 'FAIL')}  {line}"
                      if ok is not None else f"{line}")

    if args.json:
        print(json.dumps({"fails": all_fails, "rows": report}, indent=2))
    else:
        print(f"\n{'AA FAIL' if all_fails else 'AA PASS'}: {len(all_fails)} pair(s) below floor.")
        for f in all_fails:
            print(f"  ✗ [{f['appearance']}] {f['label']}: {f['ratio']}:1 < {f['floor']}")
    return 1 if all_fails else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
