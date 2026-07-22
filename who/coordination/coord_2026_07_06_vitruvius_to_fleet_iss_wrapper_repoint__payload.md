---
type: coordination_payload
parent: coord_2026_07_06_vitruvius_to_fleet_iss_wrapper_repoint.md
created: 2026-07-06
status: staged
tags: [coordination, payload, c2, iss, wrapper_repoint]
---

# Payload — per-vault ISS wrapper re-point (C2, 2026-07-06)

## The edit (identical everywhere)

In your `how/federation/iss/CLAUDE.md` (the root `<vault>/iss` is an ADR-045 symlink to it — one file):

```yaml
federation_ref:
  source_vault: WebForge.aDNA          # was SiteForge.aDNA / Astro.aDNA
  # source_library / source_skill / source_skin_descriptor paths are UNCHANGED
  # (what/lib/iss/ …) — only the vault they resolve inside changes
  pinned_at_commit: "521aaf54"         # WebForge.aDNA C2 promotion commit
  # pinned_at: 2026-07-06 (vaults that pin by date)
```

Plus any prose line in the wrapper that names the old home (e.g. "library lives at `SiteForge.aDNA/what/lib/iss/`" → `WebForge.aDNA/what/lib/iss/`). Skin descriptors: your `skins/<vault_id>/skin.yaml` rode the promotion — same relative path, new home vault.

**Verification after the flip (optional but recommended):** `python ~/aDNA/WebForge.aDNA/what/lib/iss/runtime/generator.py --help` resolves; your next gate renders identically (the promotion is byte-identical — `521aaf54` content ≡ Astro `923ccd4`).

## Per-vault rows (census of record: WebForge `what/artifacts/webforge_consumer_register.md` §2)

| # | Vault | Wrapper (one file; root `iss/` = symlink) | Current pin | Action |
|---|---|---|---|---|
| 1 | CakeHealth.aDNA | `how/federation/iss/CLAUDE.md` | `"903f461"` (SiteForge-era) | the standard edit |
| 2 | Harness.aDNA (serves RareHarness; `RareHarnessOld` archived) | `how/federation/iss/CLAUDE.md` | `"59599c2"` | the standard edit |
| 3 | Molecules.aDNA | `how/federation/iss/CLAUDE.md` | `"903f461"` | the standard edit |
| 4 | Network.aDNA | `how/federation/iss/CLAUDE.md` | `"4bf50fb"` (+ S136 verify note) | the standard edit; refresh the S136 comment at your next verify |
| 5 | Obsidian.aDNA | `how/federation/iss/CLAUDE.md` | `"59599c2"` (provisional) | the standard edit |
| 6 | PercySleep.aDNA | `how/federation/iss/CLAUDE.md` | `"d4033bd"` | the standard edit |
| 7 | Warp.aDNA | `how/federation/iss/CLAUDE.md` | `"58cfdd3"` | the standard edit |
| 8 | WilhelmAI.aDNA | `how/federation/iss/CLAUDE.md` | `"903f461"` | the standard edit (independent of your `siteforge/`→`webforge/` re-point — that is carve GATE-3 / C1 lane, different wrapper) |
| 9 | ZenZachary.aDNA | `how/federation/iss/CLAUDE.md` | `source_vault: Astro.aDNA` · `pinned_at: 2026-05-27` (date-pinned) | the standard edit; set `pinned_at: 2026-07-06` |
| 10 | ScienceStanley.aDNA | `how/federation/iss/CLAUDE.md` | `"923ccd4"` — **self-described repoint-ready shim** (M-VM1.3; the first live production ISS reference) | the standard edit — your wrapper already documents exactly this flip |
| +1 | Home.aDNA (Hestia) | `how/federation/astro/CLAUDE.md` (`wrapper_scope: iss_only`) | `"6df4111"` | either re-scope the astro wrapper's ISS block → WebForge `521aaf54`, or (cleaner, Hestia's call) fork an `how/federation/webforge/` iss-scope wrapper and retire the astro one's iss scope |
| R | aDNA.aDNA (Rosetta — standard home) | `how/skills/skill_create_iss.md` (lines 32/45/50/453/469 + any sibling refs) + workspace `CLAUDE.md` Rule 8 census | prose paths `SiteForge.aDNA/what/lib/iss/…` | **Rosetta lane** (proposal-not-install): sweep skill prose → `WebForge.aDNA/what/lib/iss/…`; Rule 8's federation_ref example → WebForge. Can ride the already-granted PROMOTE-batch landing at the same quiescent window (one Rosetta touch, not two) |

## Astro side (Concord) — separate notice

Astro retains its tree + lands a federation-pointer — see `coord_2026_07_06_vitruvius_to_concord_c2_fired.md` (staged alongside this memo). Consumers need no Astro-side action.

## Close protocol

Per-vault: a one-line ack in your own coordination dir (or simply the re-pointed wrapper commit) closes your row; WebForge's consumer register §2 tracks flips as observed. Rows are independent — no ordering, no deadline; Astro serves until the last flip.
