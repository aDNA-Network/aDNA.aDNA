#!/usr/bin/env python3
"""E1 cycle 146 — "The aDNA Network" homepage hero generation (SS Ghibli-pixel pivot).

Cloned from m53_cycle_102_hero_variants.py. Generates candidate hero images for the new
image-led homepage hero under the Science Stanley "Ghibli-pixel" warm register (Tokyo Night
palette), per the operator brief `what/design/hero_image_brief_adna_network.md`.

KEY DIFFERENCE vs the cycle-102 template: the old RESTRAINT_TAIL (minimalist "Rust/Tauri"
abstract-geometric, no-imagery) is REPLACED with the SS Ghibli-pixel style tail. The strict
"NO TEXT / NO LETTERS / NO TYPOGRAPHY" clause is KEPT — the "The aDNA Network" title is
composited as LIVE SVG/CSS text in HomeHero.astro, never baked into the gen (Imagen garbles
text + live text is responsive + a11y).

Auth: SS_GEMINI_API_KEY from macOS Keychain (reuses load_api_key from the cycle-101 runner).

Usage:
  cd /Users/stanley/aDNA/aDNA.aDNA
  # smoke (1 image, default direction D2):
  /opt/homebrew/bin/python3 how/campaigns/campaign_adna_serious_tool_readiness/runners/e1_hero_adna_network_gen.py --round smoke --direction D2 --variants 1
  # R1 fan-out (all 4 directions, 2 variants each = 8):
  /opt/homebrew/bin/python3 how/.../e1_hero_adna_network_gen.py --round r1 --direction all --variants 2
  # R2 refined winner (e.g. D4, 3 variants), with an override prompt:
  /opt/homebrew/bin/python3 how/.../e1_hero_adna_network_gen.py --round r2 --direction D4 --variants 3 --prompt "<refined prompt>"

Outputs:
  - site/src/assets/heroes/candidates/{round}_{direction}_v{k}.png
  - what/measurement/iii_results/2026-06/cycle_146_e1_hero_adna_network.{round}.image_gen_log.json
"""
from __future__ import annotations

import argparse
import json
import os
import sys
import time
from datetime import datetime, timezone
from io import BytesIO
from pathlib import Path

from PIL import Image

# Reuse Keychain auth from cycle 101 runner (non-TTY-safe security lookup)
sys.path.insert(0, str(Path("/Users/stanley/aDNA/aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/runners")))
from m53_cycle_101_og_cards_regen import load_api_key  # noqa: E402

VAULT_ROOT = Path("/Users/stanley/aDNA/aDNA.aDNA")
OUT_DIR = VAULT_ROOT / "site/src/assets/heroes/candidates"
LOG_DIR = VAULT_ROOT / "what/measurement/iii_results/2026-06"

MODEL = "imagen-4.0-ultra-generate-001"
ASPECT = "16:9"
COST_PER_CALL_USD = 0.04
HERO_WIDTH = 1408   # native Imagen 16:9 width
HERO_HEIGHT = 792

# SS Ghibli-pixel style tail (hero brief §2). Replaces the old minimalist RESTRAINT_TAIL.
# Tokyo Night palette + dual-resolution rule + hopeful (NOT dystopian) + strict no-text
# (title is composited live in Astro, never baked here).
GHIBLI_TAIL = (
    "Detailed 32-bit pixel art, cozy studio-ghibli aesthetic quantized to a crisp pixel grid. "
    "Soft dithered pixel shading, warm task lighting mixed with cool monitor glow, cinematic "
    "composition. Emissive neon cyan DNA helices and purple circuit patterns glowing in the scene. "
    "Dual-resolution: human and physical elements rendered as high-fidelity 32-bit painterly pixel; "
    "AI and digital constructs as chunky blocky 16-bit sprites; DNA and active-science motifs as "
    "sharp glow-emission vector pixels. "
    "Tokyo Night color palette: deep navy base #1a1b26 and #24283b, purple accent #9d7cd8, "
    "cyan data-glow #7dcfff, warm amber lighting #e0a84c (lighting only). "
    "Hopeful and intellectually curious mood, NOT dark dystopia. Wide 16:9 cinematic horizontal hero band. "
    "ABSOLUTELY NO TEXT, NO LETTERS, NO WORDS, NO TYPOGRAPHY, NO LOGOS, NO WATERMARKS, NO NUMBERS, "
    "NO SYMBOLS. No human faces. "
    "Anti-patterns to avoid: no flat vector UI, no sterile empty sci-fi, no uniform pixel scaling, "
    "no dystopian mood, no photographic stock-photo aesthetic, no marketing imagery."
)

# Seed directions D1-D4 (hero brief §4). Each is the scene motif; GHIBLI_TAIL appends the style.
DIRECTIONS = {
    "D1": (
        "Bird's-eye view of a warm research-lab desk where a glowing holographic map of connected "
        "nodes hovers above it. Cyan and purple conduits link node-sprites that pulse with context "
        "and DNA data. A ceramic mug, an open notebook, and small potted plants sit at the edges. "
        "Amber task-light mixes with cool screen glow."
    ),
    "D2": (
        "A constellation of glowing nodes connected by cyan and purple edges forming one "
        "interconnected aDNA network, set on a deep Tokyo-Night navy field with faint circuit "
        "texture. Bioluminescent glow-vector links, blocky 16-bit node sprites, minimal foreground, "
        "wide cinematic framing. Calm and expansive."
    ),
    "D3": (
        "A glowing DNA double-helix whose rungs resolve into a graph of connected nodes — the helix "
        "backbone branching outward into a bird's-eye network map of node-sprites. Cyan and purple "
        "emission on a dark Tokyo-Night ground, warm amber rim-light. Ties shared inheritance (DNA) "
        "to the network."
    ),
    "D4": (
        "Isometric bird's-eye map where each node is a small cozy pixel-art building or vault, linked "
        "by glowing cyan and purple context-conduits like roads of light between them. Warm lit "
        "windows, plants, and lab clutter at building scale. Octopath-Traveler-grade pixel detail, "
        "hopeful and lived-in."
    ),
}


def main() -> int:
    ap = argparse.ArgumentParser(description="Generate 'The aDNA Network' hero candidates (SS Ghibli-pixel).")
    ap.add_argument("--round", default="r1", help="round label for filenames + log (smoke|r1|r2|...)")
    ap.add_argument("--direction", default="all", help="D1|D2|D3|D4|all")
    ap.add_argument("--variants", type=int, default=2, help="variants per direction")
    ap.add_argument("--prompt", default=None, help="override scene prompt (R2 refined); applied to the chosen single direction")
    ap.add_argument("--model", default=MODEL,
                    help=f"Imagen model (default {MODEL}; use imagen-4.0-fast-generate-001 when Ultra is out of capacity)")
    args = ap.parse_args()
    model = args.model
    cost = 0.02 if "fast" in model else COST_PER_CALL_USD

    if args.direction == "all":
        dirs = list(DIRECTIONS.keys())
    else:
        dirs = [d.strip().upper() for d in args.direction.split(",")]
        for d in dirs:
            if d not in DIRECTIONS:
                print(f"[err] unknown direction {d}; choose from {list(DIRECTIONS)} or 'all'", file=sys.stderr)
                return 2

    api_key = load_api_key()
    os.environ["GEMINI_API_KEY"] = api_key
    print(f"[auth] SS_GEMINI_API_KEY loaded (len={len(api_key)})", flush=True)
    from google import genai
    from google.genai import types
    client = genai.Client(api_key=api_key)

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    LOG_DIR.mkdir(parents=True, exist_ok=True)
    log_path = LOG_DIR / f"cycle_146_e1_hero_adna_network.{args.round}.image_gen_log.json"

    log = {
        "cycle_id": "cycle_146_e1_hero_adna_network",
        "mission": "mission_adna_str_p5_m510_e1_brand_positioning",
        "session": "session_stanley_20260604T065020Z_v8_m510_e1_hero_gen",
        "decadal": "E1",
        "round": args.round,
        "step": "step_3_generate_images",
        "model": model,
        "aspect_ratio": ASPECT,
        "output_target": f"{HERO_WIDTH}x{HERO_HEIGHT}",
        "register": "ss_ghibli_pixel / tokyo_night",
        "started_at": datetime.now(timezone.utc).isoformat(),
        "calls": [],
        "total_cost_usd": 0.0,
    }

    for d in dirs:
        scene = args.prompt if args.prompt else DIRECTIONS[d]
        prompt = f"{scene} {GHIBLI_TAIL}"
        for k in range(1, args.variants + 1):
            out_path = OUT_DIR / f"{args.round}_{d}_v{k}.png"
            record = {
                "round": args.round,
                "direction": d,
                "variant": k,
                "out_path": str(out_path.relative_to(VAULT_ROOT)),
                "prompt_chars": len(prompt),
                "prompt_overridden": bool(args.prompt),
            }
            print(f"[gen] {args.round} {d} v{k} — {model} @ {ASPECT}...", flush=True)
            t0 = time.time()
            try:
                # Imagen throws transient 429 RESOURCE_EXHAUSTED ("temporarily out of capacity")
                # independent of quota — retry with exponential backoff before giving up.
                response = None
                last_exc = None
                for attempt in range(1, 6):
                    try:
                        response = client.models.generate_images(
                            model=model,
                            prompt=prompt,
                            config=types.GenerateImagesConfig(
                                number_of_images=1,
                                aspect_ratio=ASPECT,
                                person_generation="dont_allow",
                            ),
                        )
                        if not response.generated_images:
                            raise RuntimeError("no images returned")
                        break
                    except Exception as e:  # noqa: BLE001
                        msg = str(e)
                        transient = ("RESOURCE_EXHAUSTED" in msg or "429" in msg
                                     or "503" in msg or "UNAVAILABLE" in msg or "out of capacity" in msg)
                        last_exc = e
                        if attempt < 5 and transient:
                            backoff = 10 * (2 ** (attempt - 1))  # 10,20,40,80s
                            print(f"[retry] attempt {attempt} transient ({msg[:80]}...); sleeping {backoff}s", flush=True)
                            time.sleep(backoff)
                            continue
                        raise
                if response is None:
                    raise last_exc if last_exc else RuntimeError("no response")
                raw = response.generated_images[0].image.image_bytes
                img = Image.open(BytesIO(raw)).convert("RGB")
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
                    "cost_usd": cost,
                })
                log["total_cost_usd"] += cost
                print(f"[ok]  {out_path.name} ({len(png_bytes)//1024} KB) in {elapsed:.1f}s", flush=True)
            except Exception as exc:  # noqa: BLE001
                record.update({"status": "fail", "error": str(exc), "elapsed_sec": round(time.time() - t0, 2)})
                print(f"[FAIL] {args.round} {d} v{k} — {exc}", flush=True)
            log["calls"].append(record)

    log["finished_at"] = datetime.now(timezone.utc).isoformat()
    log_path.write_text(json.dumps(log, indent=2))
    ok = len([c for c in log["calls"] if c["status"] == "success"])
    print(f"\n[log] {log_path.relative_to(VAULT_ROOT)}")
    print(f"[total] {ok}/{len(log['calls'])} OK; ${log['total_cost_usd']:.2f}")
    return 0 if ok == len(log["calls"]) else 1


if __name__ == "__main__":
    sys.exit(main())
