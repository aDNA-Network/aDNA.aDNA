"""Runner: M3.5.5 D7d — 31 vault_card regen via Gemini Imagen 4 Ultra.

Single-shot bulk regen of the 31 vault_card hero images at
``node.aDNA/who/assets/vault_cards/{vault_slug}.jpg``. Consumes the
CanvasForge substrate end-to-end (latlab.mcp.image.server.GeminiImageClient
adapter wired to the Imagen 4 Ultra model per ADR-003) and converts the
PNG output to JPG via PIL. Pre-validates the production Gemini pipeline
that D11-D20 cycles will consume per m50_visual_inspection_methodology.md §3
Step 3 BEFORE D11 (Visual Identity v2) commits at cycle 101.

Visual anchor: Hestia's Lattice-Hearth aesthetic per
``m35_d7d_image_regen_followup.md`` §"Prompt template" — 16:9 pixel-art cozy
scene with DNA-helix decorative band, orange-yellow + cyan-purple electric
palette, per-vault persona/visual anchor.

Invocation (from anywhere; uses absolute paths):
    GEMINI_API_KEY=$(security find-generic-password -a "$USER" -s SS_GEMINI_API_KEY -w) \\
        python /Users/stanley/lattice/aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/runners/m355_d7d_vault_card_regen.py

Requirements:
    GEMINI_API_KEY in env (Keychain via SS_GEMINI_API_KEY entry)
    google-genai >= 1.x installed
    latlab importable from /Users/stanley/lattice/latlab/
    PIL (Pillow) installed for PNG → JPG conversion

Cost: 31 calls x $0.04 = $1.24 (2.5% of $50 v8 P5 budget).
Wall time: ~15s/call x 31 = ~7-8 min sequential.

Outputs:
    node.aDNA/who/assets/vault_cards/{vault_slug}.jpg (31 files; overwrites in-place)
    aDNA.aDNA/what/measurement/iii_results/2026-05/m355_d7d_regen.jsonl
        (one row per attempt with: vault_slug, prompt_hash, success, model,
         png_size, jpg_size, elapsed_s, started_at, error)

Hard constraints honored:
    - No .adna/ touches
    - No LatticeTerminal.aDNA writes
    - No III.aDNA touches
    - No forge-vault wrapper writes
    - No lattice-labs writes
    - No ADR authoring
    - No aDNA.aDNA/site/ touches
    - node.aDNA writes IN SCOPE (image artifacts only)
"""

from __future__ import annotations

import hashlib
import json
import os
import sys
import time
from dataclasses import asdict, dataclass
from datetime import datetime, timezone
from pathlib import Path

sys.path.insert(0, "/Users/stanley/lattice/latlab")

from latlab.mcp.image.server import GeminiImageClient
from PIL import Image


VAULT_CARDS_DIR = Path("/Users/stanley/lattice/Home.aDNA/who/assets/vault_cards")
LEDGER_PATH = Path(
    "/Users/stanley/lattice/aDNA.aDNA/what/measurement/iii_results/2026-05/m355_d7d_regen.jsonl"
)

PROMPT_TEMPLATE = (
    "16:9 pixel-art cozy scene representing {vault_display_name}, themed around "
    "{persona_archetype}'s domain: {visual_anchor}. "
    "Lattice aesthetic: DNA-helix decorative band at top edge "
    "(cyan-purple-magenta neon glow), warm ambient palette "
    "(orange-yellow lamp/hearth light + electric blue-purple-cyan UI panels), "
    "single coherent scene, pixel-art illustration style, "
    "detailed glowing UI panel at lower-right showing the text \"{vault_slug}\" as label, "
    "1-2 small mood objects (e.g., sleeping cat, lantern, scroll, terminal). "
    "No additional text or logos. No watermark."
)


@dataclass
class VaultCard:
    slug: str  # filename slug, e.g. "aDNA.aDNA"
    display_name: str  # human-readable, e.g. "aDNA.aDNA"
    persona_archetype: str  # e.g. "Rosetta (decoder, multi-script teacher)"
    visual_anchor: str  # scene description


# 31-row table per m35_d7d_image_regen_followup.md §"Per-persona visual anchor table"
# (ComicForge SKIP excluded; LiteratureForge added 2026-05-25 — new vault since spec written;
# persona Thoth per workspace CLAUDE.md)
VAULT_CARDS: list[VaultCard] = [
    VaultCard(
        "aDNA.aDNA",
        "aDNA.aDNA",
        "Rosetta (decoder, multi-script teacher)",
        "A scholar's study with the Rosetta Stone, scrolls in three scripts "
        "(hieroglyphic, demotic, Greek), a quill on parchment",
    ),
    VaultCard(
        "III.aDNA",
        "III.aDNA",
        "Argus (many-eyed observer)",
        "A watcher's room with many monitoring screens, cosmic observatory, "
        "all-seeing-eye motif faintly glowing",
    ),
    VaultCard(
        "node.aDNA",
        "node.aDNA",
        "Hestia (hearth-keeper)",
        "A cozy hearth with crackling fire, sleeping cat, terminal showing inventory",
    ),
    VaultCard(
        "LatticeNetwork.aDNA",
        "LatticeNetwork.aDNA (Alpha Lattice)",
        "Venus (sky-cartographer)",
        "A celestial cartographer's observatory with a network constellation map "
        "projected on the wall, node-graph in the sky",
    ),
    VaultCard(
        "LatticeLabs.aDNA",
        "LatticeLabs.aDNA",
        "Berthier (chief of staff)",
        "A campaign-staff war-room with maps + dispatch tables + a plumed marshal's hat on a stand",
    ),
    VaultCard(
        "LatticeAgent.aDNA",
        "LatticeAgent.aDNA",
        "Stanley (systems-design agent)",
        "A systems-design lab with multi-monitor harness diagrams + a comfortable thinking chair",
    ),
    VaultCard(
        "LatticeTerminal.aDNA",
        "LatticeTerminal.aDNA",
        "Spock (logical terminal)",
        "A starship-bridge terminal with logical workstations, mission-control panels, "
        "single-pointed-ear silhouette ornament",
    ),
    VaultCard(
        "CanvasForge.aDNA",
        "CanvasForge.aDNA",
        "Hermes (messenger)",
        "A messenger's workshop with canvases + wax tablets + winged-sandal motif + "
        "dual-script slide presentations",
    ),
    VaultCard(
        "SiteForge.aDNA",
        "SiteForge.aDNA",
        "(no persona; site-builder)",
        "A web-architect's studio with Astro-flag banner + component-tree diagrams",
    ),
    VaultCard(
        "VideoForge.aDNA",
        "VideoForge.aDNA",
        "Iris (rainbow messenger)",
        "A film studio with multi-platform video monitors + rainbow color-grading panels",
    ),
    VaultCard(
        "MoleculeForge.aDNA",
        "MoleculeForge.aDNA",
        "Franklin (Rosalind Franklin)",
        "A molecular biology lab with X-ray diffraction Photo 51 framed on the wall + "
        "microscope + DNA helix model",
    ),
    VaultCard(
        "RareHarness.aDNA",
        "RareHarness.aDNA",
        "Asclepius (divine healer)",
        "A clinician's room with rod of Asclepius + medical scrolls + gentle healing atmosphere",
    ),
    VaultCard(
        "WilhelmAI.aDNA",
        "WilhelmAI.aDNA (AI4U)",
        "Hygieia (health goddess)",
        "A healing-arts sanctum with snake-and-bowl + medicinal plants + four-pillar shrine",
    ),
    VaultCard(
        "LAVentureGraph.aDNA",
        "LAVentureGraph.aDNA",
        "Cartographer",
        "A venture-cartographer's studio with LA map on wall + venture sticky-notes + "
        "node-graph of ecosystems",
    ),
    VaultCard(
        "ContextCompass.aDNA",
        "ContextCompass.aDNA",
        "Ariadne (thread-keeper of labyrinth)",
        "A labyrinth-mapper's chamber with thread of glowing yarn winding through corridors + "
        "compass rose",
    ),
    VaultCard(
        "Spacemacs.aDNA",
        "Spacemacs.aDNA",
        "Daedalus (master craftsman)",
        "A craftsman's workshop with labyrinth blueprints + wings of feather-and-wax + "
        "Spacemacs editor on screen",
    ),
    VaultCard(
        "TappInterface.aDNA",
        "TappInterface.aDNA",
        "Mentor (Odysseus's advisor)",
        "An advisor's hall with Odysseus-era throne + scrolls of strategy + dispatched-courier altar",
    ),
    VaultCard(
        "RemoteControl.aDNA",
        "RemoteControl.aDNA",
        "Talos (bronze automaton)",
        "An automaton's forge with bronze-metallic robot + glowing ichor vein + control-panel pedestal",
    ),
    VaultCard(
        "SpeechForge.aDNA",
        "SpeechForge.aDNA",
        "Robert Kennedy (Greene-method)",
        "A speech-writer's desk with podium + notepad of speeches + accordion of ideas + microphone",
    ),
    VaultCard(
        "ComfyForge.aDNA",
        "ComfyForge.aDNA",
        "(no persona)",
        "A visual-generation studio with ComfyUI node-graph on screen + paint-brush + LoRA training dials",
    ),
    VaultCard(
        "TaskForge.aDNA",
        "TaskForge.aDNA",
        "Berthier (logistics)",
        "A coordination war-room with claim-lease ledger + task-board kanban",
    ),
    VaultCard(
        "VAASLattice.aDNA",
        "VAASLattice.aDNA",
        "(no persona)",
        "A verification chamber with cross-checking mirrors + truth-table panels",
    ),
    VaultCard(
        "ContextCommons.aDNA",
        "ContextCommons.aDNA",
        "(no persona)",
        "A community plaza with shared notebooks + literacy-circle seating",
    ),
    VaultCard(
        "RareArchive.aDNA",
        "RareArchive.aDNA",
        "Mnemosyne (memory)",
        "A memory archive with stacks of glowing scrolls + river of recollection",
    ),
    VaultCard(
        "ScienceStanley.aDNA",
        "ScienceStanley.aDNA",
        "Science Stanley",
        "A brand-content studio with podcast mic + lab coat + science-stanley signage",
    ),
    VaultCard(
        "wga.aDNA",
        "wga.aDNA (World Genome Academy)",
        "(no persona; WGA)",
        "A genomics academy with double-helix banner + classroom-symphony seating",
    ),
    VaultCard(
        "CakeHealth.aDNA",
        "CakeHealth.aDNA",
        "Berthier (Operation CAKE)",
        "A clinical-data war-room with patient-cohort dashboards + cake icon",
    ),
    VaultCard(
        "SuperLeague.aDNA",
        "SuperLeague.aDNA",
        "(no persona)",
        "A sports-league command center with team-roster panels + trophy",
    ),
    VaultCard(
        "LPWhitepaper.aDNA",
        "LPWhitepaper.aDNA",
        "(no persona)",
        "A scholar's desk with LaTeX document on screen + III review marginalia",
    ),
    VaultCard(
        "zeta.aDNA",
        "zeta.aDNA",
        "(no persona)",
        "A research workspace with abstract zeta-symbol motif",
    ),
    VaultCard(
        "LiteratureForge.aDNA",
        "LiteratureForge.aDNA",
        "Thoth (scribe who composes and judges)",
        "A scribe's atrium with ibis-headed Thoth statue at altar + scales of Ma'at + reed pen "
        "+ scrolls of multiple genres (paper, blog, book, grant) + glowing brazier of consideration",
    ),
]


def render_prompt(card: VaultCard) -> str:
    return PROMPT_TEMPLATE.format(
        vault_display_name=card.display_name,
        persona_archetype=card.persona_archetype,
        visual_anchor=card.visual_anchor,
        vault_slug=card.slug,
    )


def regen_one(client: GeminiImageClient, card: VaultCard, retry: int = 1) -> dict:
    """Generate one vault_card image; retry once on transient failure."""
    prompt = render_prompt(card)
    prompt_hash = hashlib.sha256(prompt.encode()).hexdigest()[:12]
    png_path = VAULT_CARDS_DIR / f"{card.slug}.png"
    jpg_path = VAULT_CARDS_DIR / f"{card.slug}.jpg"
    started_at = datetime.now(timezone.utc).isoformat()
    t0 = time.time()
    attempt = 0
    last_err = None
    while attempt <= retry:
        attempt += 1
        try:
            result = client.generate_image(
                prompt=prompt,
                output_path=str(png_path),
                aspect_ratio="16:9",
                model="ultra",
            )
            if not result.get("success"):
                last_err = result.get("error", "unknown")
                if attempt > retry:
                    break
                time.sleep(2.0)  # transient backoff
                continue
            png_size = result.get("size_bytes", 0)
            # Convert PNG → JPG (quality=88) and remove the intermediate PNG
            img = Image.open(png_path).convert("RGB")
            img.save(jpg_path, "JPEG", quality=88, optimize=True)
            png_path.unlink(missing_ok=True)
            jpg_size = jpg_path.stat().st_size
            elapsed = time.time() - t0
            return {
                "vault_slug": card.slug,
                "prompt_hash": prompt_hash,
                "success": True,
                "model": "imagen-4.0-ultra-generate-001",
                "aspect_ratio": "16:9",
                "png_size": png_size,
                "jpg_size": jpg_size,
                "elapsed_s": round(elapsed, 1),
                "attempts": attempt,
                "started_at": started_at,
                "error": None,
            }
        except Exception as e:  # noqa: BLE001 — runner; want full surface
            last_err = repr(e)
            if attempt > retry:
                break
            time.sleep(2.0)
    elapsed = time.time() - t0
    return {
        "vault_slug": card.slug,
        "prompt_hash": prompt_hash,
        "success": False,
        "model": "imagen-4.0-ultra-generate-001",
        "aspect_ratio": "16:9",
        "png_size": 0,
        "jpg_size": 0,
        "elapsed_s": round(elapsed, 1),
        "attempts": attempt,
        "started_at": started_at,
        "error": last_err,
    }


def main() -> int:
    if not os.getenv("GEMINI_API_KEY"):
        sys.stderr.write(
            "ERROR: GEMINI_API_KEY not set. Try:\n"
            "  GEMINI_API_KEY=$(security find-generic-password -a \"$USER\" -s SS_GEMINI_API_KEY -w) \\\n"
            "    python " + __file__ + "\n"
        )
        return 2

    VAULT_CARDS_DIR.mkdir(parents=True, exist_ok=True)
    LEDGER_PATH.parent.mkdir(parents=True, exist_ok=True)

    client = GeminiImageClient()
    total = len(VAULT_CARDS)
    sys.stdout.write(f"M3.5.5 D7d — regenerating {total} vault_cards\n")
    sys.stdout.flush()

    ok = 0
    fail = 0
    with LEDGER_PATH.open("a") as ledger:
        for i, card in enumerate(VAULT_CARDS, 1):
            sys.stdout.write(f"[{i:2d}/{total}] {card.slug} ... ")
            sys.stdout.flush()
            row = regen_one(client, card)
            ledger.write(json.dumps(row) + "\n")
            ledger.flush()
            if row["success"]:
                ok += 1
                sys.stdout.write(
                    f"OK ({row['jpg_size']:,}B, {row['elapsed_s']}s, "
                    f"{row['attempts']} attempt(s))\n"
                )
            else:
                fail += 1
                sys.stdout.write(f"FAIL ({row['error']})\n")
            sys.stdout.flush()

    sys.stdout.write(f"\nDone. ok={ok} fail={fail} total={total}\n")
    sys.stdout.write(f"Estimated cost: ${ok * 0.04:.2f} (Imagen 4 Ultra at $0.04/call)\n")
    sys.stdout.write(f"Ledger: {LEDGER_PATH}\n")
    return 0 if fail == 0 else 1


if __name__ == "__main__":
    raise SystemExit(main())
