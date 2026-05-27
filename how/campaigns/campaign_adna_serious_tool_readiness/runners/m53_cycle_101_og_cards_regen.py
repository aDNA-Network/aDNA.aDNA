#!/usr/bin/env python3
"""M5.3 D11 cycle 101 — OG cards regen (6 cards via imagen-4.0-ultra-generate-001).

Per M5.3 mission spec (`missions/mission_adna_str_p5_m53_d11_visual_identity.md`):
- Step 3 of M5.0 per-cycle 7-step structure
- 6 OG cards at site/public/images/og-{default,learn,how,patterns,reference,community}.png
- Imagen 4 Ultra generates background-only (Risk #3 mitigation: text rendered deterministically via PIL)
- Prompts honor M5.1 D11 LIFT-1 (philosophy-before-feature minimalism) and avoid M5.1 D11 AVOID-2 (marketing-style hero imagery)
- Output dimensions: 1200x630 (OG card standard; crop from Imagen's 16:9 1408x792)
- Text overlay matches existing SVG template typography (aDNA wordmark + title + subtitle + accent bar + URL)

Auth: SS_GEMINI_API_KEY from macOS Keychain via
  security find-generic-password -a "$USER" -s SS_GEMINI_API_KEY -w

Usage:
  cd /Users/stanley/lattice/aDNA.aDNA
  /opt/homebrew/bin/python3 how/campaigns/campaign_adna_serious_tool_readiness/runners/m53_cycle_101_og_cards_regen.py

Outputs:
  - site/public/images/og-{default,learn,how,patterns,reference,community}.png (6 cards)
  - what/measurement/iii_results/2026-06/cycle_101_d11_og_cards_regen.image_gen_log.json
"""
from __future__ import annotations

import json
import os
import subprocess
import sys
import time
from datetime import datetime, timezone
from io import BytesIO
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------

VAULT_ROOT = Path("/Users/stanley/lattice/aDNA.aDNA")
OUT_DIR = VAULT_ROOT / "site/public/images"
LOG_PATH = (
    VAULT_ROOT
    / "what/measurement/iii_results/2026-06/cycle_101_d11_og_cards_regen.image_gen_log.json"
)

MODEL = "imagen-4.0-ultra-generate-001"
ASPECT = "16:9"  # Imagen native; closest to OG 1200x630 (1.905:1); we crop top/bottom
COST_PER_CALL_USD = 0.04
OG_WIDTH = 1200
OG_HEIGHT = 630

# Sigil — restraint posture: every prompt enforces minimalism + no marketing
SHARED_RESTRAINT_TAIL = (
    "Minimalist geometric abstract composition. Dark teal palette (#0A4F52 to #071E1F "
    "deep background). Subtle line-art / thin-stroke geometric forms. NO TEXT, NO LETTERS, "
    "NO WORDS, NO TYPOGRAPHY, NO LOGOS, NO WATERMARKS. NO human figures. NO photographic "
    "stock-photo aesthetic. NO aspirational marketing imagery. NO product mockups. NO UI "
    "screenshots. NOT illustrative cartoon style. NOT 3D rendering. Pure 2D vector-feel "
    "geometric pattern. Restraint posture (Rust-language-website / Tauri-website aesthetic). "
    "Composition leaves the left 50% relatively quiet — text overlay will be composited on "
    "the left side externally. Background detail concentrates in the right 50% as decorative "
    "accent. Color grading: dark teal #071E1F → #0A4F52 with single accent color highlights "
    "in {accent_color}. High-contrast geometry but low overall brightness."
)

# Per-card prompts: per-section motif + accent color
# Color choices match the existing SVG template (preserves continuity across sections)
PROMPTS = [
    {
        "slug": "default",
        "title": "Agentic DNA",
        "subtitle": "Give your project a knowledge architecture",
        "accent_hex": "#0D7377",
        "accent_name": "muted teal-cyan #0D7377",
        "motif": (
            "Abstract double-helix as two intertwining thin-stroke geometric ribbons sweeping "
            "from upper-left to lower-right, decorative dotted nodes at intersections. "
            "Suggests genetic code without literal DNA molecule rendering."
        ),
    },
    {
        "slug": "learn",
        "title": "Learn aDNA",
        "subtitle": "Concepts, tutorials, and comparisons",
        "accent_hex": "#14919B",
        "accent_name": "brighter cyan #14919B",
        "motif": (
            "Abstract layered geometric forms suggesting paths or steps — overlapping "
            "rectangles and thin diagonal connector lines forming a sense of progression. "
            "Suggests learning journey without literal stairs or arrows."
        ),
    },
    {
        "slug": "patterns",
        "title": "aDNA Patterns",
        "subtitle": "Reusable architectural patterns for knowledge projects",
        "accent_hex": "#D4A017",
        "accent_name": "warm amber-gold #D4A017",
        "motif": (
            "Tessellating geometric pattern of interlocking hexagons or repeating modular "
            "shapes, fading from dense in upper-right to sparse toward center. Suggests "
            "composability and reusable patterns without literal puzzle pieces."
        ),
    },
    {
        "slug": "reference",
        "title": "aDNA Reference",
        "subtitle": "Specification, glossary, and technical reference",
        "accent_hex": "#0A4F52",
        "accent_name": "deep teal #0A4F52",
        "motif": (
            "Abstract technical-schematic line art — thin-stroke geometric blueprints, "
            "grid overlays, dimensional callout marks. Suggests precision and specification "
            "without literal engineering drawings or floor plans."
        ),
    },
    {
        "slug": "community",
        "title": "aDNA Community",
        "subtitle": "Roles, contributions, and adopter personas",
        "accent_hex": "#14919B",
        "accent_name": "brighter cyan #14919B",
        "motif": (
            "Abstract network of interlocking thin-stroke circles connected by curved lines, "
            "varying circle sizes suggesting a graph of nodes. Decorative but sparse — not a "
            "dense crowded graph. Suggests community/contribution network without literal "
            "social-media iconography."
        ),
    },
    {
        "slug": "how",
        "title": "aDNA How",
        "subtitle": "Publishing, workshops, and lattice examples",
        "accent_hex": "#2A9D8F",
        "accent_name": "muted teal-green #2A9D8F",
        "motif": (
            "Abstract workflow visualization — thin-stroke geometric arrows curving between "
            "rectangular nodes, suggesting process or transformation. Composition flows "
            "left-to-right. Suggests methodology without literal flowchart symbols."
        ),
    },
]


# ---------------------------------------------------------------------------
# Auth + client
# ---------------------------------------------------------------------------


def load_api_key() -> str:
    """Read SS_GEMINI_API_KEY from macOS Keychain via security command (non-TTY-safe)."""
    if os.environ.get("SS_GEMINI_API_KEY"):
        return os.environ["SS_GEMINI_API_KEY"]
    result = subprocess.run(
        [
            "/usr/bin/security",
            "find-generic-password",
            "-a",
            os.environ.get("USER", "stanley"),
            "-s",
            "SS_GEMINI_API_KEY",
            "-w",
        ],
        capture_output=True,
        text=True,
        check=True,
    )
    key = result.stdout.strip()
    if len(key) != 39:
        raise RuntimeError(f"SS_GEMINI_API_KEY unexpected length {len(key)} (expected 39)")
    return key


# ---------------------------------------------------------------------------
# Image generation
# ---------------------------------------------------------------------------


def generate_background(client, prompt_full: str, slug: str) -> bytes:
    """Generate a single 16:9 background image via Imagen 4 Ultra."""
    from google.genai import types

    print(f"[gen] {slug} — calling {MODEL} @ {ASPECT}...", flush=True)
    t0 = time.time()
    response = client.models.generate_images(
        model=MODEL,
        prompt=prompt_full,
        config=types.GenerateImagesConfig(
            number_of_images=1,
            aspect_ratio=ASPECT,
            person_generation="dont_allow",  # no human figures per restraint
        ),
    )
    elapsed = time.time() - t0
    if not response.generated_images:
        raise RuntimeError(f"{slug}: no images returned by API")
    img_bytes = response.generated_images[0].image.image_bytes
    print(f"[gen] {slug} — {len(img_bytes) // 1024} KB in {elapsed:.1f}s", flush=True)
    return img_bytes


# ---------------------------------------------------------------------------
# Text overlay (matches existing SVG template typography)
# ---------------------------------------------------------------------------

FONT_PATH_BOLD = "/System/Library/Fonts/HelveticaNeue.ttc"  # font collection
FONT_PATH_REGULAR = "/System/Library/Fonts/HelveticaNeue.ttc"


def composite_text_overlay(bg_bytes: bytes, card: dict) -> bytes:
    """Crop Imagen background to 1200x630 and composite text overlay."""
    bg = Image.open(BytesIO(bg_bytes)).convert("RGB")
    # Imagen 4 Ultra at 16:9 typically outputs ~1408x792; resize to width 1200 keeping aspect
    w, h = bg.size
    new_w = OG_WIDTH
    new_h = int(h * (new_w / w))
    bg = bg.resize((new_w, new_h), Image.LANCZOS)
    # Crop centered vertically to 630 high
    top = max(0, (new_h - OG_HEIGHT) // 2)
    bg = bg.crop((0, top, OG_WIDTH, top + OG_HEIGHT))

    # Darken the left 50% slightly for text legibility (subtle gradient via alpha blend)
    overlay = Image.new("RGBA", (OG_WIDTH, OG_HEIGHT), (0, 0, 0, 0))
    odraw = ImageDraw.Draw(overlay)
    # Solid darkening: rect over left 60% with low-alpha black
    odraw.rectangle([0, 0, int(OG_WIDTH * 0.62), OG_HEIGHT], fill=(7, 30, 31, 90))
    bg = Image.alpha_composite(bg.convert("RGBA"), overlay).convert("RGB")

    # Now draw text overlay
    draw = ImageDraw.Draw(bg)
    accent = card["accent_hex"]
    accent_rgb = tuple(int(accent[i : i + 2], 16) for i in (1, 3, 5))

    # Fonts (HelveticaNeue.ttc — try index 0 = Regular; for bold try other indices)
    # ttc is a collection; PIL can use it by passing an index
    font_wordmark = ImageFont.truetype(FONT_PATH_BOLD, 42, index=2)  # Bold ~ index 2
    font_title = ImageFont.truetype(FONT_PATH_BOLD, 56, index=2)
    font_subtitle = ImageFont.truetype(FONT_PATH_REGULAR, 26, index=0)
    font_url = ImageFont.truetype(FONT_PATH_REGULAR, 16, index=0)

    # Top-left wordmark "aDNA" — accent "a" + white "DNA"
    draw.text((80, 70), "a", fill=accent, font=font_wordmark)
    a_bbox = draw.textbbox((80, 70), "a", font=font_wordmark)
    draw.text((a_bbox[2], 70), "DNA", fill=(224, 224, 224), font=font_wordmark)

    # Title
    draw.text((80, 270), card["title"], fill=(255, 255, 255), font=font_title)

    # Subtitle (limit to safe width to avoid wrapping)
    draw.text((80, 350), card["subtitle"], fill=(160, 176, 176), font=font_subtitle)

    # Accent bar
    draw.rounded_rectangle([80, 530, 140, 534], radius=2, fill=accent)

    # URL
    draw.text((160, 524), "adna.dev", fill=(96, 112, 112), font=font_url)

    out = BytesIO()
    bg.save(out, format="PNG", optimize=True)
    return out.getvalue()


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------


def main(dry_run: bool = False) -> int:
    api_key = load_api_key()
    os.environ["GEMINI_API_KEY"] = api_key
    print(f"[auth] SS_GEMINI_API_KEY loaded (len={len(api_key)}, prefix={api_key[:6]})", flush=True)

    from google import genai

    client = genai.Client(api_key=api_key)

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    LOG_PATH.parent.mkdir(parents=True, exist_ok=True)

    log = {
        "cycle_id": "cycle_101_d11_og_cards_regen",
        "mission": "mission_adna_str_p5_m53_d11_visual_identity",
        "session": "session_stanley_20260527T002719Z_v8_m53_s1",
        "decadal": "D11",
        "step": "step_3_generate_images",
        "model": MODEL,
        "aspect_ratio": ASPECT,
        "output_target": f"{OG_WIDTH}x{OG_HEIGHT}",
        "started_at": datetime.now(timezone.utc).isoformat(),
        "calls": [],
        "total_cost_usd": 0.0,
        "dry_run": dry_run,
    }

    for card in PROMPTS:
        prompt_full = f"{card['motif']} {SHARED_RESTRAINT_TAIL}".format(
            accent_color=card["accent_name"]
        )
        out_path = OUT_DIR / f"og-{card['slug']}.png"
        call_record = {
            "slug": card["slug"],
            "title": card["title"],
            "accent": card["accent_hex"],
            "out_path": str(out_path.relative_to(VAULT_ROOT)),
            "prompt_chars": len(prompt_full),
        }

        if dry_run:
            print(f"[dry] {card['slug']} — would call API (prompt {len(prompt_full)} chars)")
            call_record["status"] = "dry_run"
            log["calls"].append(call_record)
            continue

        t0 = time.time()
        try:
            bg_bytes = generate_background(client, prompt_full, card["slug"])
            png_bytes = composite_text_overlay(bg_bytes, card)
            out_path.write_bytes(png_bytes)
            call_record["status"] = "success"
            call_record["bytes"] = len(png_bytes)
            call_record["elapsed_sec"] = round(time.time() - t0, 2)
            call_record["cost_usd"] = COST_PER_CALL_USD
            log["total_cost_usd"] += COST_PER_CALL_USD
            print(
                f"[ok]  {card['slug']} → {out_path.name} ({len(png_bytes) // 1024} KB)",
                flush=True,
            )
        except Exception as exc:  # noqa: BLE001 — log all failures
            call_record["status"] = "fail"
            call_record["error"] = str(exc)
            call_record["elapsed_sec"] = round(time.time() - t0, 2)
            print(f"[FAIL] {card['slug']} — {exc}", flush=True)

        log["calls"].append(call_record)

    log["finished_at"] = datetime.now(timezone.utc).isoformat()
    LOG_PATH.write_text(json.dumps(log, indent=2))
    print(f"\n[log] {LOG_PATH.relative_to(VAULT_ROOT)}")
    print(f"[total] {len([c for c in log['calls'] if c['status'] == 'success'])} OK / {len(PROMPTS)} requested; ${log['total_cost_usd']:.2f}")
    return 0 if all(c["status"] in {"success", "dry_run"} for c in log["calls"]) else 1


if __name__ == "__main__":
    sys.exit(main(dry_run="--dry" in sys.argv))
