#!/usr/bin/env python3
"""E4 cycle 151 — `/network` page hero generation (SS Ghibli-pixel / Tokyo Night).

The new `/network` narrative surface needs its OWN painterly hero, distinct from the
homepage `hero_adna_network.png` (E1 c146, "isometric connected vaults around the aDNA
core"). Where the homepage hero says "there is a network," the /network hero must say
"a node is an aDNA *computer* — a machine carrying many vaults — and you choose what
stays local vs what federates." So the motifs foreground NODES-as-computers and the
local-vs-shared boundary (Standing Rule 4), the exact thesis the page's bands explain.

Reuses the proven GHIBLI_TAIL style + Keychain auth + retry/backoff from
e1_hero_adna_network_gen.py (cycle 146). Same 1408x792 16:9 frame as the other heroes.
No baked text (the H1 is live text in HomeHero.astro).

Interpreter: python3.13 (google.genai lives in the 3.13 user site, NOT homebrew 3.14).

Usage:
  cd /Users/stanley/aDNA/aDNA.aDNA
  python3.13 how/campaigns/campaign_adna_serious_tool_readiness/runners/e4_network_hero_gen.py \
      --round r1 --direction all --variants 2
  # Ultra is the default; pass --model imagen-4.0-fast-generate-001 if Ultra 429s.
  # Winner pick is manual: view candidates, copy the chosen one to hero_network.png.

Outputs:
  - site/src/assets/heroes/candidates/sec_network_{round}_v{k}.png   (per direction)
  - what/measurement/iii_results/2026-06/cycle_151_e4_network_hero.{round}.image_gen_log.json
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

# Two seed directions for the /network hero. Each is the scene motif; GHIBLI_TAIL appends
# the SS-Ghibli style + Tokyo Night palette + strict no-text. Bird's-eye, hopeful, peopleless.
# Both foreground "a node = an aDNA computer carrying vaults" + the local/shared boundary —
# the thing that makes /network distinct from the homepage hero.
DIRECTIONS = {
    # N1 — node-as-computer + the local/shared boundary made literal (recommended).
    "N1": (
        "Isometric bird's-eye map of several distinct 'aDNA computer' nodes, each a cozy small "
        "machine-house holding a visible stack of glowing vault-tiles on its own little plot. "
        "Most glowing conduits stay WITHIN each node's own cluster of vaults (local, kept close); "
        "only a few brighter conduits reach outward to a single luminous shared commons-hub at the "
        "center of the map (federated, opt-in). The contrast between the many short local links and "
        "the few long shared links is clearly readable. Warm lit windows, plants, and lab clutter at "
        "building scale on a deep Tokyo-Night navy ground. Lived-in, hopeful, no people, no figures."
    ),
    # N2 — the network OF computers: many lit node-settlements across a dark map.
    "N2": (
        "A wide bird's-eye view of many separate 'aDNA computer' node-settlements spread across a "
        "dark Tokyo-Night map like small lit hill-towns, each a cluster of cozy vault-buildings "
        "glowing on its own ground. Sparse bright cyan and purple conduits arc between a few of the "
        "settlements, leaving each its own distinct place — a network OF independent computers, not "
        "one blob. Faint circuit texture in the ground, warm amber window-light, calm and expansive. "
        "No people, no figures."
    ),
}


def main() -> int:
    ap = argparse.ArgumentParser(description="Generate the /network page hero (SS Ghibli-pixel / Tokyo Night).")
    ap.add_argument("--round", default="r1")
    ap.add_argument("--direction", default="all", help="N1|N2|all|comma-list")
    ap.add_argument("--variants", type=int, default=2)
    ap.add_argument("--model", default=MODEL,
                    help=f"Imagen model (default {MODEL}; use imagen-4.0-fast-generate-001 if Ultra is out of capacity)")
    args = ap.parse_args()
    model = args.model
    cost = 0.02 if "fast" in model else 0.04

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
    log_path = LOG_DIR / f"cycle_151_e4_network_hero.{args.round}.image_gen_log.json"

    log = {
        "cycle_id": "cycle_151_e4_network_hero",
        "mission": "mission_adna_str_p5_m511_e4_adnanetwork",
        "decadal": "E4",
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
        prompt = f"{DIRECTIONS[d]} {GHIBLI_TAIL}"
        for k in range(1, args.variants + 1):
            out_path = OUT_DIR / f"sec_network_{args.round}_{d}_v{k}.png"
            record = {
                "direction": d,
                "round": args.round,
                "variant": k,
                "out_path": str(out_path.relative_to(VAULT_ROOT)),
                "prompt_chars": len(prompt),
            }
            print(f"[gen] network {d} {args.round} v{k} — {model} @ {ASPECT}...", flush=True)
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
                print(f"[FAIL] network {d} {args.round} v{k} — {exc}", flush=True)
            log["calls"].append(record)

    log["finished_at"] = datetime.now(timezone.utc).isoformat()
    log_path.write_text(json.dumps(log, indent=2))
    ok = len([c for c in log["calls"] if c["status"] == "success"])
    print(f"\n[log] {log_path.relative_to(VAULT_ROOT)}")
    print(f"[total] {ok}/{len(log['calls'])} OK; ${log['total_cost_usd']:.2f}", flush=True)
    return 0 if ok == len(log["calls"]) else 1


if __name__ == "__main__":
    sys.exit(main())
