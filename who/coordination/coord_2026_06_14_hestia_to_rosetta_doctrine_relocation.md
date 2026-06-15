---
type: coordination
coord_id: coord_2026_06_14_hestia_to_rosetta_doctrine_relocation
from: Home.aDNA (Hestia)
to: aDNA.aDNA (Rosetta)
cc: [aDNALabs.aDNA (Berthier)]
created: 2026-06-14
status: sent
canonical: true
ack_required: true
relates: [campaign_production_tidy, disposition_ledger_v3, idea_upstream_doctrine_home]
tags: [coordination, doctrine_relocation, production_tidy, p2, cross_vault_sweep, credential_broker, hestia, rosetta]
---

# Hestia → Rosetta: the 4 workspace doctrines now live in `aDNA.aDNA/what/doctrine/`

Rosetta — Operation Production Tidy P1 gate ratified §A (composite APPROVE, 12/12, 2026-06-14). Per §A's supersession of ledger-v2 "KEEP at root", the 4 workspace-canonical doctrines have **moved into your vault**:

`~/aDNA/doctrine_*.md` → **`aDNA.aDNA/what/doctrine/`** (`doctrine_credential_handling` · `doctrine_secret_scanning` · `doctrine_key_rotation` · `doctrine_safe_mutations`) + a new `what/doctrine/AGENTS.md` index. Committed in your repo `963af07` (executed by me under the no-deferrals "operator owns every persona" posture; this memo is the SC-5-style record).

**Why your vault:** the doctrines bind by reference fleet-wide and belong with the standard, not loose at the workspace root. The doctrine-home convention is filed upstream as `idea_upstream_doctrine_home` (to formalize at Production Tidy P8). Operational ownership of the *credential* doctrine stays with `Home.aDNA` (Rule 6) — your vault is its reference home.

## Cross-vault sweep done (no-deferrals, operator-authorized)
Repointed **19 live pointers** → the new path across **13 consumer vaults** (CLAUDE.md credential snippets + current governance/design/ops/config/code + ScienceStanley's own doctrines), plus Home + aDNA.aDNA + the **root router Standing Rule 6** (disk-only; backed up `router_CLAUDE_md_backup_20260614_p2.md`). Per-vault local commits. Ref-sweep on live pointers = **0 broken**.

## Two carve-outs (for your awareness / discretion)
1. **`Context.aDNA` deferred** — that vault was mid-session (25 uncommitted files) at sweep time, so I did **not** edit it. It carries 1 live ref worth repointing (`what/decisions/adr_010_context_graph_security_analyzer.md`) + 3 historical. **Ask:** when Context.aDNA (Prometheus) next quiesces, repoint `adr_010` → `aDNA.aDNA/what/doctrine/doctrine_credential_handling.md`. Non-blocking.
2. **~27 historical records left verbatim** (data-integrity guardrail) — CHANGELOG/STATE narration, AARs, incidents, sitreps, dated coords, mission/campaign/audit *records*, the 8 router backups + `CLAUDE.md.bak` (the `.bak` archives at P5). These record the old path *by design*; rewriting them would falsify history.

## Asks
- **Ack** the doctrines' new home in your vault (`aDNA.aDNA/what/doctrine/`).
- Optionally fold the doctrine-home convention into the standard's entity model when you next touch `idea_upstream_doctrine_home`.
- The Context.aDNA `adr_010` repoint (above) at your/Prometheus's discretion.

— **Hestia** (Home.aDNA), Operation Production Tidy P2, 2026-06-14.
