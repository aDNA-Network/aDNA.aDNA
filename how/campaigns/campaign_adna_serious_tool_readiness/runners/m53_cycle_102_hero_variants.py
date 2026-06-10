#!/usr/bin/env python3
"""M5.3 D11 cycle 102 — Hero variants for section landing pages (4 images).

Per M5.3 mission spec — generates 4 hero images via Imagen 4 Ultra for the 4 highest-priority
section landing pages (learn / how / patterns / reference). Output dimensions ~1408x792 (16:9
Imagen native), saved at site/src/assets/heroes/. Layout wiring (DocumentationLayout
heroImage prop + per-section index.astro consumer) deferred to S2 cycle 106 per M5.0 §3 D11
per-cycle assignment table (cycle 5-6 = section icon integration; cycle 102 = asset generation).

Reuses per-section motif vocabulary from cycle 101 OG cards for visual consistency
(philosophy-before-feature minimalism per M5.1 D11 LIFT-1; no marketing-style per AVOID-2).
"""
from __future__ import annotations

import json
import os
import sys
import time
from datetime import datetime, timezone
from io import BytesIO
from pathlib import Path

from PIL import Image

# Reuse Keychain auth + restraint discipline from cycle 101 runner
sys.path.insert(0, str(Path("/Users/stanley/aDNA/aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/runners")))
from m53_cycle_101_og_cards_regen import load_api_key  # noqa: E402

VAULT_ROOT = Path("/Users/stanley/aDNA/aDNA.aDNA")
OUT_DIR = VAULT_ROOT / "site/src/assets/heroes"
LOG_PATH = VAULT_ROOT / "what/measurement/iii_results/2026-06/cycle_102_d11_hero_variants.image_gen_log.json"

MODEL = "imagen-4.0-ultra-generate-001"
ASPECT = "16:9"
COST_PER_CALL_USD = 0.04
HERO_WIDTH = 1408   # native Imagen 16:9 width
HERO_HEIGHT = 792

# Hero-specific tail — wider composition, motif fills full width (text overlay handled by Astro layout, not PIL)
RESTRAINT_TAIL = (
    "Minimalist geometric abstract composition. Deep dark teal palette gradient. "
    "Subtle line-art thin-stroke geometric forms. ABSOLUTELY NO TEXT, NO LETTERS, NO WORDS, "
    "NO TYPOGRAPHY, NO LOGOS, NO WATERMARKS, NO NUMBERS, NO SYMBOLS, NO CHARACTERS. "
    "NO human figures. NO photographic stock-photo aesthetic. NO marketing imagery. "
    "Pure 2D vector-feel geometric pattern. Restraint posture (Rust-website / Tauri-website "
    "aesthetic). Composition flows full-width as a horizontal hero band. Single accent color "
    "highlights in {accent_name}. Dark mood, low brightness, no bright highlights or glare."
)

HEROES = [
    {
        "slug": "learn",
        "accent_name": "cyan",
        "motif": (
            "Wide horizontal band of abstract layered geometric forms suggesting learning paths — "
            "overlapping rectangles, thin diagonal connectors, modular step-shapes flowing left to "
            "right across the composition. Abstract pedagogy through geometry."
        ),
    },
    {
        "slug": "how",
        "accent_name": "teal-green",
        "motif": (
            "Wide horizontal band of abstract workflow visualization — thin-stroke geometric arrows "
            "curving between rectangular nodes across the composition, suggesting process and "
            "transformation. Abstract methodology through linework."
        ),
    },
    {
        "slug": "patterns",
        "accent_name": "warm amber-gold",
        "motif": (
            "Wide horizontal band of tessellating hexagonal pattern, varying densities across the "
            "composition, suggesting composability and reusable modules. Abstract patterns through "
            "geometric repetition."
        ),
    },
    {
        "slug": "reference",
        "accent_name": "deep teal",
        "motif": (
            "Wide horizontal band of abstract technical schematic — thin-stroke blueprint forms, "
            "grid overlays, dimensional callout marks distributed across the composition. Abstract "
            "specification through drafting forms."
        ),
    },
]


def main() -> int:
    api_key = load_api_key()
    os.environ["GEMINI_API_KEY"] = api_key
    print(f"[auth] SS_GEMINI_API_KEY loaded (len={len(api_key)})", flush=True)
    from google import genai
    from google.genai import types
    client = genai.Client(api_key=api_key)

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    LOG_PATH.parent.mkdir(parents=True, exist_ok=True)

    log = {
        "cycle_id": "cycle_102_d11_hero_variants",
        "mission": "mission_adna_str_p5_m53_d11_visual_identity",
        "session": "session_stanley_20260527T002719Z_v8_m53_s1",
        "decadal": "D11",
        "step": "step_3_generate_images",
        "model": MODEL,
        "aspect_ratio": ASPECT,
        "output_target": f"{HERO_WIDTH}x{HERO_HEIGHT}",
        "started_at": datetime.now(timezone.utc).isoformat(),
        "calls": [],
        "total_cost_usd": 0.0,
    }

    for hero in HEROES:
        prompt = f"{hero['motif']} {RESTRAINT_TAIL}".format(accent_name=hero["accent_name"])
        out_path = OUT_DIR / f"hero_{hero['slug']}.png"
        record = {
            "slug": hero["slug"],
            "accent": hero["accent_name"],
            "out_path": str(out_path.relative_to(VAULT_ROOT)),
            "prompt_chars": len(prompt),
        }
        print(f"[gen] {hero['slug']} — {MODEL} @ {ASPECT}...", flush=True)
        t0 = time.time()
        try:
            response = client.models.generate_images(
                model=MODEL,
                prompt=prompt,
                config=types.GenerateImagesConfig(
                    number_of_images=1,
                    aspect_ratio=ASPECT,
                    person_generation="dont_allow",
                ),
            )
            if not response.generated_images:
                raise RuntimeError("no images returned")
            bg_bytes = response.generated_images[0].image.image_bytes
            # Optionally resize to target if Imagen returned different size
            img = Image.open(BytesIO(bg_bytes)).convert("RGB")
            if img.size != (HERO_WIDTH, HERO_HEIGHT):
                img = img.resize((HERO_WIDTH, HERO_HEIGHT), Image.LANCZOS)
            buf = BytesIO()
            img.save(buf, format="PNG", optimize=True)
            png_bytes = buf.getvalue()
            out_path.write_bytes(png_bytes)
            elapsed = time.time() - t0
            record.update({
                "status": "success",
                "bytes": len(png_bytes),
                "elapsed_sec": round(elapsed, 2),
                "cost_usd": COST_PER_CALL_USD,
            })
            log["total_cost_usd"] += COST_PER_CALL_USD
            print(f"[ok]  {hero['slug']} → {out_path.name} ({len(png_bytes)//1024} KB) in {elapsed:.1f}s", flush=True)
        except Exception as exc:  # noqa: BLE001
            record.update({"status": "fail", "error": str(exc), "elapsed_sec": round(time.time()-t0, 2)})
            print(f"[FAIL] {hero['slug']} — {exc}", flush=True)
        log["calls"].append(record)

    log["finished_at"] = datetime.now(timezone.utc).isoformat()
    LOG_PATH.write_text(json.dumps(log, indent=2))
    print(f"\n[log] {LOG_PATH.relative_to(VAULT_ROOT)}")
    print(f"[total] {len([c for c in log['calls'] if c['status']=='success'])} OK / {len(HEROES)} requested; ${log['total_cost_usd']:.2f}")
    return 0 if all(c["status"] == "success" for c in log["calls"]) else 1


if __name__ == "__main__":
    sys.exit(main())
