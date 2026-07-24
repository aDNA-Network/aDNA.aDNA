---
type: directory_index
created: 2026-06-14
updated: 2026-07-24
last_edited_by: agent_rosetta
tags: [directory_index, doctrine]
---

# AGENTS.md — what/doctrine/

**Workspace-canonical doctrines.** These four operational doctrines bind **by reference** across every `.aDNA` vault on the node (consumer vaults cite them, they carry no copy). Relocated here from the workspace root on 2026-06-14 (Operation Production Tidy P2, ledger §A — clean-root: no loose governance files at `~/aDNA/`).

| Doctrine | Scope |
|---|---|
| `doctrine_credential_handling.md` | credential broker discipline (NAMES-ONLY; Keychain+1P / age backends) — broker = `Home.aDNA` (Hestia) |
| `doctrine_secret_scanning.md` | pre-commit gitleaks + allow-list discipline |
| `doctrine_key_rotation.md` | rotation triggers + procedure (post-leak / doctrine-trigger) |
| `doctrine_safe_mutations.md` | safe destructive-op discipline (ratified `aDNALabs.aDNA/who/governance/adr_011_safe_mutations.md`) |

**Authoring / rendering conventions** (also home here — non-safety authoring doctrines; bind by reference the same way):

| Doctrine | Scope |
|---|---|
| `doctrine_visual_inspection.md` | headless-first visual-inspection tier ladder (T0 `visual_capture.mjs` → T1 `@playwright/mcp` → T2 Chrome MCP) |
| `doctrine_state_conventions.md` | STATE.md posture keys (`mission:` + the `phase:`/`campaigns:` siblings) + the `P<n>[/<count>]` phase-display grammar + the `+adna-normalize-phase` render convention (v8.9) |

**Canonical path:** `aDNA.aDNA/what/doctrine/doctrine_*.md` (cite workspace-root-relative, or `~/aDNA/aDNA.aDNA/what/doctrine/...`). **Standard-touch:** the doctrine-home convention is filed upstream as `idea_upstream_doctrine_home` (Production Tidy §H, P8). The operational owner of the credential doctrine remains `Home.aDNA` (Rule 6); these files are the standard's reference home.
