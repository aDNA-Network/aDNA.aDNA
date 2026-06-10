#!/usr/bin/env python3
"""E1 cycle 147 — section-hero regeneration (learn / how / patterns / reference) in the
SS Ghibli-pixel / Tokyo Night register (ADR-032 reskin).

The four section landing heroes were generated in the OLD teal "Rust/Tauri" abstract register
(m53 D11, cycles 101-110) and clash with the ratified Tokyo Night pivot. This regenerates them
as cozy bio-digital retro-futurism scenes — one themed motif per section — reusing the proven
GHIBLI_TAIL style + Keychain auth from e1_hero_adna_network_gen.py (cycle 146). Same 1408x792
16:9 frame as the existing assets. No baked text (section titles are live text in the layout).

Interpreter: python3.13 (google.genai lives in the 3.13 user site, NOT homebrew 3.14).

Usage:
  cd /Users/stanley/aDNA/aDNA.aDNA
  python3.13 how/campaigns/campaign_adna_serious_tool_readiness/runners/e1_section_heroes_gen.py \
      --round r1 --section all --variants 2
  # winner pick is manual (view candidates, copy to hero_<section>.png)

Outputs:
  - site/src/assets/heroes/candidates/sec_{section}_{round}_v{k}.png
  - what/measurement/iii_results/2026-06/cycle_147_e1_section_heroes.{round}.image_gen_log.json
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

RUNNERS = "/Users/stanley/aDNA/aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/runners"
sys.path.insert(0, RUNNERS)
from e1_hero_adna_network_gen import GHIBLI_TAIL, load_api_key  # noqa: E402

VAULT_ROOT = Path("/Users/stanley/aDNA/aDNA.aDNA")
OUT_DIR = VAULT_ROOT / "site/src/assets/heroes/candidates"
LOG_DIR = VAULT_ROOT / "what/measurement/iii_results/2026-06"

MODEL = "imagen-4.0-ultra-generate-001"
ASPECT = "16:9"
HERO_WIDTH = 1408
HERO_HEIGHT = 792

# One themed scene per section. Each is the motif; GHIBLI_TAIL appends the SS-Ghibli style +
# Tokyo Night palette + strict no-text. Bird's-eye / scene-level, hopeful, no human faces.
SECTIONS = {
    "learn": (
        "A cozy bird's-eye study nook for learning: a warm wooden desk with open books and an "
        "open notebook, a softly glowing holographic DNA-helix concept diagram rising from the "
        "page, a steaming ceramic mug, small potted plants, and a warm desk lamp. Cyan knowledge "
        "motes drift upward as glow-pixels. Inviting and contemplative — the feeling of "
        "understanding dawning."
    ),
    "how": (
        "A bird's-eye view of a glowing modular pipeline laid out on a dark desk surface: small "
        "pixel-art module-boxes connected left-to-right by luminous cyan and purple conduits like "
        "a circuit of light, tiny gears and dials between them, a warm amber desk lamp at the "
        "edge, and small potted plants in the corners. Operational, orderly, capable. "
        "An empty workspace, no people, no figures."
    ),
    "patterns": (
        "An isometric bird's-eye arrangement of modular pixel-art building blocks snapping "
        "together into reusable structures — tiles, small connected vault-blocks, and lattice "
        "frames forming repeatable architectural patterns, linked by glowing cyan and purple "
        "seams. A few blocks lift slightly to reveal how they compose. Orderly, elegant, "
        "satisfying."
    ),
    "reference": (
        "A cozy bird's-eye archive library for the canonical reference: warm wooden shelves of "
        "softly glowing indexed tomes, an open atlas on a reading table, a card-catalog with "
        "luminous cyan index tabs, a brass reading lamp, and plants. The definitive, well-kept "
        "canon. Calm, authoritative, warm."
    ),
}


def main() -> int:
    ap = argparse.ArgumentParser(description="Regenerate section heroes (SS Ghibli-pixel / Tokyo Night).")
    ap.add_argument("--round", default="r1")
    ap.add_argument("--section", default="all", help="learn|how|patterns|reference|all|comma-list")
    ap.add_argument("--variants", type=int, default=2)
    ap.add_argument("--model", default=MODEL,
                    help=f"Imagen model (default {MODEL}; use imagen-4.0-fast-generate-001 if Ultra is out of capacity)")
    args = ap.parse_args()
    model = args.model
    cost = 0.02 if "fast" in model else 0.04

    if args.section == "all":
        secs = list(SECTIONS.keys())
    else:
        secs = [s.strip().lower() for s in args.section.split(",")]
        for s in secs:
            if s not in SECTIONS:
                print(f"[err] unknown section {s}; choose from {list(SECTIONS)} or 'all'", file=sys.stderr)
                return 2

    api_key = load_api_key()
    os.environ["GEMINI_API_KEY"] = api_key
    print(f"[auth] SS_GEMINI_API_KEY loaded (len={len(api_key)})", flush=True)
    from google import genai
    from google.genai import types
    client = genai.Client(api_key=api_key)

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    LOG_DIR.mkdir(parents=True, exist_ok=True)
    log_path = LOG_DIR / f"cycle_147_e1_section_heroes.{args.round}.image_gen_log.json"

    log = {
        "cycle_id": "cycle_147_e1_section_heroes",
        "mission": "mission_adna_str_p5_m510_e1_brand_positioning",
        "session": "session_stanley_20260604T160140Z_v8_m510_e1_reskin_deploy",
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

    for s in secs:
        prompt = f"{SECTIONS[s]} {GHIBLI_TAIL}"
        for k in range(1, args.variants + 1):
            out_path = OUT_DIR / f"sec_{s}_{args.round}_v{k}.png"
            record = {
                "section": s,
                "round": args.round,
                "variant": k,
                "out_path": str(out_path.relative_to(VAULT_ROOT)),
                "prompt_chars": len(prompt),
            }
            print(f"[gen] {s} {args.round} v{k} — {model} @ {ASPECT}...", flush=True)
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
                            backoff = 10 * (2 ** (attempt - 1))
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
                record.update({"status": "success", "bytes": len(png_bytes),
                               "elapsed_sec": round(elapsed, 2), "cost_usd": cost})
                log["total_cost_usd"] += cost
                print(f"[ok]  {out_path.name} ({len(png_bytes)//1024} KB) in {elapsed:.1f}s", flush=True)
            except Exception as exc:  # noqa: BLE001
                record.update({"status": "fail", "error": str(exc), "elapsed_sec": round(time.time() - t0, 2)})
                print(f"[FAIL] {s} {args.round} v{k} — {exc}", flush=True)
            log["calls"].append(record)

    log["finished_at"] = datetime.now(timezone.utc).isoformat()
    log_path.write_text(json.dumps(log, indent=2))
    ok = len([c for c in log["calls"] if c["status"] == "success"])
    print(f"\n[log] {log_path.relative_to(VAULT_ROOT)}")
    print(f"[total] {ok}/{len(log['calls'])} OK; ${log['total_cost_usd']:.2f}", flush=True)
    return 0 if ok == len(log["calls"]) else 1


if __name__ == "__main__":
    sys.exit(main())
