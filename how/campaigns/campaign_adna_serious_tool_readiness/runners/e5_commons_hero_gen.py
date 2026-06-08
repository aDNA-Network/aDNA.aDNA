#!/usr/bin/env python3
"""E5 cycle 161 — `/commons` page hero generation (SS Ghibli-pixel / Tokyo Night).

The Public-Good Commons page needs its OWN painterly hero — distinct from the homepage
`hero_adna_network.png` (E1 c146, "isometric connected vaults around the aDNA core"), the
`/network` `hero_network.png` (E4 c151, "settlements map of independent computers"), and the
DNA-helix hero. Where those say "there is a network" and "a node is a computer," the COMMONS
hero must say: **"a commons, not a catalog"** — many distinct, independently-stewarded
subnetworks each CONTRIBUTING to and DRAWING FROM one shared, luminous, cultivated common pool.
The feeling is shared abundance held in trust (the public-good ethos), not a logo wall.

Research-fed (cycle_161_reference_synthesis.md): illustration over stock; the hero carries the
warmth so the cards can stay text+token; calm darker upper band so the live H1 composites with
AA over the scrim (HomeHero.astro handles the scrim, but a calm top helps).

Reuses the proven GHIBLI_TAIL style + Keychain auth + retry/backoff from e1_hero_adna_network_gen.py.
Same 1408x792 16:9 frame as the other heroes. No baked text (the H1 is live text in HomeHero.astro).

Interpreter: python3.13 (google.genai lives in the 3.13 user site, NOT homebrew 3.14).

Usage:
  cd /Users/stanley/lattice/aDNA.aDNA
  python3.13 how/campaigns/campaign_adna_serious_tool_readiness/runners/e5_commons_hero_gen.py \
      --round r1 --direction all --variants 2
  # Ultra is the default; pass --model imagen-4.0-fast-generate-001 if Ultra 429s.
  # Winner pick is manual: view candidates, copy the chosen one to hero_commons.png.

Outputs:
  - site/src/assets/heroes/candidates/sec_commons_{round}_{dir}_v{k}.png   (per direction)
  - what/measurement/iii_results/2026-06/cycle_161_e5_commons_hero.{round}.image_gen_log.json
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

RUNNERS = "/Users/stanley/lattice/aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/runners"
sys.path.insert(0, RUNNERS)
from e1_hero_adna_network_gen import GHIBLI_TAIL, load_api_key  # noqa: E402

VAULT_ROOT = Path("/Users/stanley/lattice/aDNA.aDNA")
OUT_DIR = VAULT_ROOT / "site/src/assets/heroes/candidates"
LOG_DIR = VAULT_ROOT / "what/measurement/iii_results/2026-06"

MODEL = "imagen-4.0-ultra-generate-001"
ASPECT = "16:9"
HERO_WIDTH = 1408
HERO_HEIGHT = 792

# Three seed directions for the /commons hero. Each is the scene motif; GHIBLI_TAIL appends the
# SS-Ghibli style + Tokyo Night palette + strict no-text. All three say "shared common pool fed by
# many distinct stewarded contributors" — the commons, not a catalog — and keep the upper band calm
# for the composited title.
DIRECTIONS = {
    # C1 — the shared pool: many small contributors threading light into one luminous commons (lead).
    "C1": (
        "Bird's-eye view of a deep Tokyo-Night navy basin holding one large, calm, luminous shared "
        "pool of cyan-and-purple light at the center. Ringing the pool, many small distinct cozy "
        "vault-buildings on their own little plots, each sending a single gentle strand of light DOWN "
        "into the shared pool and drawing a soft glow back UP — contributing to and drawing from a "
        "common reservoir. The pool is the brightest thing; the contributors are individual and "
        "clearly separate, never a blob. Calm darker sky in the upper third. Warm amber window-light, "
        "faint circuit texture, plants and lived-in detail. Hopeful, generous, no people, no figures."
    ),
    # C2 — the cultivated commons-garden: distinct plots feeding one shared canopy of light.
    "C2": (
        "Isometric bird's-eye view of a terraced communal garden of light on deep Tokyo-Night ground. "
        "Several distinct cultivated plots — each a small glowing grove tended on its own terrace — "
        "send vines of cyan and purple light up into one large shared luminous canopy / orchard that "
        "arches over them all, and the canopy rains soft light back down on every plot. Each plot is "
        "clearly its own place; the shared canopy belongs to all of them. Warm amber lanterns, painterly "
        "32-bit foliage, DNA-helix tendrils woven into the vines. Calm sky above. Tranquil, abundant, no people."
    ),
    # C2R — round-2 refinement of the unanimous winner C2 (great-tree garden commons), folding the
    # blind panel's convergent notes: (1) calm/dark open upper third for clean title compositing;
    # (2) plots visibly DIFFERENT from each other = many distinct stewards, not one owner; (3) drop
    # ALL energy beams/ribbons/cores — connective tissue is NATURAL (roots/branches/vines), light is
    # organic bioluminescence not data-conduits (anti-crypto-cliché, Movement Skeptic); (4) pull back
    # the twee — amber = grounded hearth-light, fewer floating sparkles; (5) DNA structural in the
    # branch/root geometry, not a floating helix symbol.
    "C2R": (
        "Isometric bird's-eye view of a communal garden commons on deep Tokyo-Night navy ground at "
        "night. ONE great ancient tree with a wide spreading canopy and visible spreading roots is the "
        "shared living structure at the heart of the scene; around and beneath it sit SEVERAL clearly "
        "DISTINCT, individually-tended garden plots — each different from the next (one a neat vegetable "
        "bed, one a flowering terrace, one a small orchard, one a glassed planting-house), each warmed by "
        "its own amber hearth-lantern. The plots are joined to the great tree by NATURAL roots, branches, "
        "and climbing vines — NOT by glowing beams, energy ribbons, or data conduits. Soft cyan and "
        "purple bioluminescence glows gently from WITHIN the leaves, sap, and mushrooms (organic light, "
        "never a laser or a central energy core). The upper third of the image is calm, open, darker "
        "night sky and quiet high canopy, uncluttered. Grounded, warm, lived-in, hopeful; a faint DNA "
        "double-helix woven structurally into the tree's branching and root geometry, not floating as a "
        "separate symbol. No people, no figures."
    ),
    # C2R2 — round-3: round-2 nailed the individuated plots + natural connective tissue, but Imagen
    # kept inserting a LITERAL floating DNA helix + neon wireframe glyphs at the edges (the exact
    # decorative-sticker / crypto-glow artifact the Movement Skeptic flagged). This round forbids all
    # hovering symbols outright and keeps the warm grounded garden + calm empty sky for the title.
    "C2R2": (
        "Isometric bird's-eye view of a cozy communal garden commons on deep Tokyo-Night navy ground at "
        "night. ONE great ancient tree with a wide spreading canopy and thick spreading roots is the "
        "shared living structure at the heart of the scene. Around and beneath it sit SEVERAL clearly "
        "DISTINCT, individually-tended garden plots, each different from the next — one a neat rowed "
        "vegetable bed, one a flowering terrace, one a small fruit orchard, one a glassed planting-house — "
        "each warmed by its own amber hearth-lantern. The plots are joined to the great tree ONLY by "
        "natural roots, branches, and climbing vines. Soft cyan and purple bioluminescence glows gently "
        "from WITHIN the leaves, sap, and small mushrooms — organic light only. "
        "ABSOLUTELY NO floating DNA helix, NO glowing symbols, glyphs, runes, holograms, circuit-mazes, "
        "or neon wireframe shapes hovering in the air or along the edges of the picture. Any sense of DNA "
        "is only faintly suggested by two natural vines gently spiralling around each other on the trunk, "
        "never a separate glowing helix. The upper third of the picture is calm, empty, dark night sky "
        "with at most a few faint stars — nothing hovering in it. Grounded, warm hearth-light, lived-in, "
        "hopeful, painterly 32-bit. No people, no figures."
    ),
    # C3 — the commons hall: one shared archive built from many contributed glowing tiles.
    "C3": (
        "A wide painterly view of a great open shared commons-hall on deep Tokyo-Night ground, its "
        "walls and floor assembled from many individual glowing tiles — each tile contributed by a "
        "different hand, slightly distinct — pooling their cyan-and-purple light toward a calm bright "
        "open hearth of shared context-light at the center. The hall is roofless and open to a quiet "
        "dark sky (the upper third stays calm). The sense is of a library/commons held in common and "
        "kept warm by many. Faint DNA and circuit motifs in the tilework, warm amber glow, no people, no figures."
    ),
}


def main() -> int:
    ap = argparse.ArgumentParser(description="Generate the /commons page hero (SS Ghibli-pixel / Tokyo Night).")
    ap.add_argument("--round", default="r1")
    ap.add_argument("--direction", default="all", help="C1|C2|C3|all|comma-list")
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
    log_path = LOG_DIR / f"cycle_161_e5_commons_hero.{args.round}.image_gen_log.json"

    log = {
        "cycle_id": "cycle_161_e5_commons_hero",
        "mission": "mission_adna_str_p5_m512_e5_public_good_commons",
        "decadal": "E5",
        "round": args.round,
        "step": "step_3_generate_images",
        "model": model,
        "aspect_ratio": ASPECT,
        "output_target": f"{HERO_WIDTH}x{HERO_HEIGHT}",
        "register": "ss_ghibli_pixel / tokyo_night",
        "thesis": "a commons, not a catalog — many distinct stewards contributing to / drawing from one shared common pool",
        "started_at": datetime.now(timezone.utc).isoformat(),
        "calls": [],
        "total_cost_usd": 0.0,
    }

    for d in dirs:
        prompt = f"{DIRECTIONS[d]} {GHIBLI_TAIL}"
        for k in range(1, args.variants + 1):
            out_path = OUT_DIR / f"sec_commons_{args.round}_{d}_v{k}.png"
            record = {
                "direction": d,
                "round": args.round,
                "variant": k,
                "out_path": str(out_path.relative_to(VAULT_ROOT)),
                "prompt_chars": len(prompt),
            }
            print(f"[gen] commons {d} {args.round} v{k} — {model} @ {ASPECT}...", flush=True)
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
                print(f"[FAIL] commons {d} {args.round} v{k} — {exc}", flush=True)
            log["calls"].append(record)

    log["finished_at"] = datetime.now(timezone.utc).isoformat()
    log_path.write_text(json.dumps(log, indent=2))
    ok = len([c for c in log["calls"] if c["status"] == "success"])
    print(f"\n[log] {log_path.relative_to(VAULT_ROOT)}")
    print(f"[total] {ok}/{len(log['calls'])} OK; ${log['total_cost_usd']:.2f}", flush=True)
    return 0 if ok == len(log["calls"]) else 1


if __name__ == "__main__":
    sys.exit(main())
