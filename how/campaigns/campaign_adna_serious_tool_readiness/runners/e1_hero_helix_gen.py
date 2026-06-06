#!/usr/bin/env python3
"""E4 cycle 157 — homepage DNA-helix hero candidates (operator-directed brand return).

Cloned from e1_hero_adna_network_gen.py. The operator prefers the ORIGINAL aDNA banner
aesthetic — "three glowing DNA helices (the who/what/how triad) rising up out of a workspace
of computer monitors and instruments" (old ref still on disk: what/assets/banner.jpg, 1408x768) —
over the current SS-Ghibli isometric-network homepage hero (hero_adna_network.png).

This runner renders that helix-from-computers concept in the CURRENT Tokyo-Night + SS-Ghibli
register (so it harmonizes with the deployed reskin, NOT a regression to the old flat banner).
It reuses the proven GHIBLI_TAIL style tail + the strict NO-TEXT clause (the "The aDNA Network"
title is composited LIVE in HomeHero.astro, never baked here) + Ultra-with-fast-fallback + the
cost-log JSON shape.

Auth: SS_GEMINI_API_KEY from macOS Keychain (reuses load_api_key from the cycle-101 runner).

Usage:
  cd /Users/stanley/lattice/aDNA.aDNA
  # smoke (1 image, default direction H1):
  /opt/homebrew/bin/python3 how/campaigns/campaign_adna_serious_tool_readiness/runners/e1_hero_helix_gen.py --round smoke --direction H1 --variants 1
  # R1 fan-out (all 3 directions, 2 variants each = 6):
  /opt/homebrew/bin/python3 how/.../e1_hero_helix_gen.py --round r1 --direction all --variants 2
  # if Ultra 429s:  ... --model imagen-4.0-fast-generate-001

Outputs:
  - site/src/assets/heroes/candidates/helix_{round}_{direction}_v{k}.png
  - what/measurement/iii_results/2026-06/cycle_157_e1_hero_helix.{round}.image_gen_log.json
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

# Reuse Keychain auth + the SS-Ghibli style tail from the E1 hero runner (same dir).
sys.path.insert(0, str(Path("/Users/stanley/lattice/aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/runners")))
from m53_cycle_101_og_cards_regen import load_api_key  # noqa: E402
from e1_hero_adna_network_gen import GHIBLI_TAIL  # noqa: E402

VAULT_ROOT = Path("/Users/stanley/lattice/aDNA.aDNA")
OUT_DIR = VAULT_ROOT / "site/src/assets/heroes/candidates"
LOG_DIR = VAULT_ROOT / "what/measurement/iii_results/2026-06"

MODEL = "imagen-4.0-ultra-generate-001"
ASPECT = "16:9"
COST_PER_CALL_USD = 0.04
HERO_WIDTH = 1408   # native Imagen 16:9 width
HERO_HEIGHT = 792

# Helix direction set H1-H3 — the old-banner concept (three triad helices rising from a
# workspace of computers) in the current Tokyo-Night register. GHIBLI_TAIL appends the style.
DIRECTIONS = {
    # H1 — the closest return to the old banner: three helices rising OUT OF the computers.
    "H1": (
        "Three tall glowing DNA double-helices rising straight upward out of a warm, lived-in "
        "workspace of computer monitors, keyboards, and small lab instruments along the bottom. "
        "The three helices stand together as a triad (who / what / how), their twisting strands "
        "emitting bright cyan and purple light against a deep Tokyo-Night sky. Warm amber task-light "
        "glows on the desks below; cool screen-glow lights the monitors. Hopeful, upward, aspirational."
    ),
    # H2 — the helix-resolves-into-network bridge (seeded by the old runner's D3).
    "H2": (
        "A glowing DNA double-helix at the center rising from a row of pixel-art computers, its rungs "
        "resolving at the top into a small bird's-eye graph of connected node-sprites — shared "
        "inheritance (the helix) branching outward into the network. Cyan and purple emission on a "
        "dark Tokyo-Night ground, warm amber rim-light on the machines below. Calm, expansive."
    ),
    # H3 — wide cinematic helix band: a forest of helices over a horizon of node-computers.
    "H3": (
        "A wide cinematic horizontal band: several luminous DNA double-helices of varying height rising "
        "like glowing trees from a low horizon of small cozy pixel-art computer-workstations spread "
        "across a dark Tokyo-Night ground. Bright cyan and purple bioluminescent strands, faint circuit "
        "texture in the sky, warm amber window-light at the base. Lived-in, hopeful, intellectually curious."
    ),
}


def main() -> int:
    ap = argparse.ArgumentParser(description="Generate homepage DNA-helix hero candidates (Tokyo-Night SS-Ghibli).")
    ap.add_argument("--round", default="r1", help="round label for filenames + log (smoke|r1|r2|...)")
    ap.add_argument("--direction", default="all", help="H1|H2|H3|all")
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
    log_path = LOG_DIR / f"cycle_157_e1_hero_helix.{args.round}.image_gen_log.json"

    log = {
        "cycle_id": "cycle_157_e1_hero_helix",
        "mission": "mission_adna_str_p5_m511_e4_adnanetwork",
        "session": "session_stanley_20260606T172438Z_v8_m511_e4_c157_iterate_helix_hero",
        "decadal": "E4",
        "round": args.round,
        "step": "step_b_generate_homepage_helix_hero",
        "model": model,
        "aspect_ratio": ASPECT,
        "output_target": f"{HERO_WIDTH}x{HERO_HEIGHT}",
        "register": "ss_ghibli_pixel / tokyo_night",
        "concept": "old aDNA banner — three who/what/how triad DNA helices rising from a workspace of computers",
        "started_at": datetime.now(timezone.utc).isoformat(),
        "calls": [],
        "total_cost_usd": 0.0,
    }

    for d in dirs:
        scene = args.prompt if args.prompt else DIRECTIONS[d]
        prompt = f"{scene} {GHIBLI_TAIL}"
        for k in range(1, args.variants + 1):
            out_path = OUT_DIR / f"helix_{args.round}_{d}_v{k}.png"
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
