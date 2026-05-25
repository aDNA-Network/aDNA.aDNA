---
type: artifact
artifact_class: cross_vault_synthesis
created: 2026-05-25
updated: 2026-05-25
mission: mission_adna_str_p4_m41_latticeterminal_sync
campaign: campaign_adna_serious_tool_readiness
phase: 4
mission_number: 4.1
session: session_stanley_20260525T173553Z_v8_m41_s1
persona: rosetta
last_edited_by: agent_stanley
read_target_vault: LatticeTerminal.aDNA
read_target_persona: Spock
read_target_state_size: ~193 lines / dense (single-file router still pre-split)
status: complete
tags: [synthesis, paired_read, latticeterminal, spock, m41, p4_entry, installer_scaffold_discovery, mc_launch_complete, skill_install_in_situ, m1_1_install_skill, backend_matrix_adr_016, adr_019_macos_first, ghostty_1_3_1_pinned, claude_code_v1_default, harness_contract, provider_contract, single_repo_platform_adna]
---

# M4.1 D5 — LatticeTerminal.aDNA STATE paired-read synthesis

> Substrate for the Phase-4 contract draft (D3) + cross-vault coord memo (D2). Paired-read of `LatticeTerminal.aDNA/STATE.md` + `CLAUDE.md` + `what/latticeterminal/install/README.md` + reconnaissance from Explore subagent dispatched at session entry. Read-only per M4.1 hard constraint #2 (zero LatticeTerminal.aDNA writes).

## §1 Headline finding

**LatticeTerminal already has a working installer scaffold.** The campaign master P4 mission table (line 185-189) treated installer authoring as net-new v8 work; the paired read reveals that Spock has shipped **M1.1 `skill_install`** at `what/latticeterminal/.claude/skills/skill_install/SKILL.md` with operator-confirmable, telemetry-emitting, BACKEND-MATRIX-pinned macOS-first installer **already running end-to-end**. This shifts the M4.x mission shape from *"author installer from scratch"* to *"federate the existing LatticeTerminal installer + extend it to bootstrap the aDNA workspace (`~/lattice/` + `.adna/` + workspace router + node.aDNA)"*. **D10 (repo strategy) now has a strong natural fit** — option 2 (LatticeTerminal hosts; aDNA consumes) aligns with existing reality.

## §2 LatticeTerminal current state (read 2026-05-25T17:35Z)

| Field | Value |
|---|---|
| **Phase** | Phase 3 OPEN — "splash orchestration" sub-campaign; Phase 1 + Phase 1.5 + Phase 2 all closed |
| **Current mission** | M08 panel-topology-bottom-bar-pivot (micro-charter scaffolded 2026-05-25; charter elevation is the next-session target; 5 clusters A-E; 8 open questions to resolve) |
| **Most recent close** | M3.18 Session 2 closed 2026-05-25 (M3.18-5 + M3.18-6 completed; Phase 2 exit ceremony triggered; commit `f91641f`) |
| **Single-session-close streak** | 24 consecutive (zero new Go code at M3.18 = streak resets 4→0 at M03 by design; zero new deps streak 19 preserved) |
| **Persona** | Spock (Vulcan discipline; logic-first; "Fascinating" beats "wow") |
| **Vault category** | Platform.aDNA with single-repo layout (post-VideoForge Amendment 1) |
| **Code-as-WHAT-object** | `what/latticeterminal/` (ADR-005, standalone-deployable, symmetric with `LatticeAgent.aDNA/what/latticeagent/`) |
| **Default harness provider** | `LatticeAgent.aDNA` (Claude Code v1-default + OpenCode co-providers of provider-generic PROVIDER-CONTRACT) |
| **Push discipline** | **Local-only commits; no push per M0.5/M1.1/M1.2/M2.1 precedent** — this matters for cross-vault synchrony; M4.x decisions can't assume git-fetch-from-LatticeTerminal-origin |

## §3 Installer-related artifacts already in place at LatticeTerminal

Discovered via direct read of `what/latticeterminal/install/README.md`:

### M1.1 `skill_install` — Spacemacs-style bash inline in markdown

**Canonical location**: `what/latticeterminal/.claude/skills/skill_install/SKILL.md` (single source of truth per M1.1 Stanley judgment-call 2026-05-18; mirrors `Spacemacs.aDNA/how/standard/skills/skill_install.md` pattern)

**Operator entrypoint**: `what/latticeterminal/cmd/install`

**Agent entrypoint**: Read SKILL.md + execute steps

**Scope (M1.1)**:
- **O1** `os_detect` → Darwin gate (macOS-first per ADR-019)
- **O2** Ghostty 1.3.1 install — BOTH paths per ADR-019: Homebrew (`brew install --cask ghostty`) AND Homebrew-absent (DMG → `/Applications`)
- **O3** tmux ≥3.6a (tmux-primary LOCKED — D-Mux confirmed at M0.5)
- **O4** Claude Code ≥v2.1.32 (`npm i -g @anthropic-ai/claude-code`) — v1-default harness; install+enable only; composes-with-never-inverts HARNESS-CONTRACT
- **O5** `verify_all` versions vs BACKEND-MATRIX macOS SHIP cell (ADR-016)
- **O6** emit telemetry per `adna.telemetry.v1`

**Empirical M0.5 finding** (BUILD-ORDER §3.1): Ghostty's binary is in-bundle at `/Applications/Ghostty.app/Contents/MacOS/ghostty`, **NOT on `$PATH`** — `which ghostty` fails by design. The skill resolves the binary via bundle path; optional `--with-path-link` flag installs `/usr/local/bin/ghostty` symlink (operator-confirmable; off by default).

**Out of scope (deferred)**:
- **Phase 2 M2.x** `skill_deploy`: XDG/AppSupport config writes, theme installs, shell-integration writes, `~/.claude/settings.json` hook patches, MCP wire
- **DG-C-chartered deferred workstream** (per ADR-019): Linux/Windows/WSL2 bootstrappers, cross-OS distribution path, `winghostty`/`liamsmith86` Windows forks (ADR-017)

### MC-LAUNCH end-to-end complete

Per workspace `~/lattice/CLAUDE.md` LatticeTerminal row + recon report:
- M3.15 launcher (`what/latticeterminal/launcher/`; 3-stage Bubbletea Go binary)
- M3.16 Claude Code v1-default adapter
- M3.17 LOI surface (Letter of Intent surface for vault selection)
- HARNESS-CONTRACT finalized (§4 registry currently STUB for Claude Code v1-default; OpenCode stubbed; LatticeAgent Phase-6 deferred)
- PROVIDER-CONTRACT finalized + locked

**Implication**: a curl-bash on macOS today *could* install Ghostty + tmux + Claude Code + LatticeTerminal launcher + drop the operator into a working terminal. What's missing from v8.0's perspective: **the workspace bootstrap layer** (`~/lattice/` directory creation + `.adna/` template clone + workspace router CLAUDE.md + node.aDNA fork + first-run skill triggering).

## §4 Relevant ADRs already ratified at LatticeTerminal

| ADR | Topic | Implication for M4.x |
|---|---|---|
| ADR-005 | Code-as-WHAT-object (standalone-deployable) | Installer scaffold is part of the deployable; consumer vaults can pull installer artifacts from `what/latticeterminal/install/state/` |
| ADR-016 | BACKEND-MATRIX structured scope | Cross-platform support matrix already authored; M4.x SHOULD consume this, not re-author |
| ADR-017 | Windows fork — winghostty default, liamsmith86 fallback | Windows path is decided; v8 P4 inherits |
| ADR-019 | macOS-first; defer cross-OS until self-hosting | DG-C gates Linux/Windows; v8 P4 cannot ship Linux/Windows installer at v8.0 unless DG-C accelerates |
| ADR-020 | Pane width discipline | Operational concern; not load-bearing for M4.x |
| ADR-021 | TUI rendering ladder | Operational concern; not load-bearing for M4.x |
| ADR-022 | Panel topology bottom-bar pivot (proposed) | Operational concern; not load-bearing for M4.x |
| HARNESS-CONTRACT | Composes-with-never-inverts; v1 = Claude Code default | M4.x must respect this; aDNA installer cannot replace the harness contract |
| PROVIDER-CONTRACT | Provider-generic; Claude Code + OpenCode co-providers | M4.x installer must be provider-aware OR provider-neutral with explicit pin |

## §5 Cross-vault coordination posture

**Existing predecessor**: `aDNA.aDNA/who/coordination/coord_2026_05_17_v8_campaign_open_latticeterminal.md` — advance-signal memo from Rosetta to Spock filed 2026-05-17, `delivery_held_until: operator-acknowledgment`, `expires: 2026-08-17` (3-month soft expiry). M4.1 extends this with the active handshake; the predecessor is preserved per Campaign SO #13.

**Open questions from predecessor** (4 questions) — now partially answered by this synthesis:

| # | Question | Answer state |
|---|---|---|
| 1 | Repo strategy preference (D10) | **Synthesis recommends option 2** — LatticeTerminal hosts; aDNA consumes. Existing `skill_install` is at `what/latticeterminal/.claude/skills/skill_install/SKILL.md`. Operator confirms at G2 mid-checkpoint. |
| 2 | Provider stance at v8.0 ship | LatticeTerminal already runs Claude Code v1-default; OpenCode stubbed. **v8.0 ship → Claude Code only at v8.0; OpenCode co-provider at v8.x successor.** |
| 3 | PROVIDER-CONTRACT version pin | LatticeTerminal's HARNESS-CONTRACT is "composes-with-never-inverts" + provider-generic PROVIDER-CONTRACT; **v8.0 should pin to whatever is current at M4.2 ADR-015 ratification** + bake the pin into the installer manifest |
| 4 | Pre-existing constraints | (a) Ghostty bundle path quirk (not on $PATH by design); (b) tmux-primary locked; (c) macOS notarization required; (d) Homebrew tap a future candidate (operator-side ergonomic); (e) ADR-019 gates Linux/Windows |

**Spock-side acknowledgment**: predecessor coord memo has `delivery_held_until: operator-acknowledgment` — operator (Stanley) will surface this to Spock at the next LatticeTerminal session via standard `who/coordination/` scan. M4.1's new coord memo (D2) will be filed alongside the predecessor, NOT replacing it.

## §6 Blockers / risks for M4.x

| # | Item | Severity | Mitigation |
|---|---|---|---|
| 1 | LatticeTerminal M08 charter elevation in-flight; bottom-bar topology pivot ADR-022 still `proposed` | Low | M4.1 runs parallel to M08; no sequential dependency. M4.x interface point is M4.3 co-design (months out) |
| 2 | LatticeTerminal push discipline = local-only; no origin/main fetch | Medium | M4.x must coordinate via coord memos + operator-confirmed reads; not via `git fetch LatticeTerminal/main` |
| 3 | ADR-019 gates Linux/Windows installer | High at v8.0 ship | v8.0 ships macOS-first installer; Linux/Windows tracked in v8.x successor; D10 + ADR-015 must spec this clearly |
| 4 | HARNESS-CONTRACT §4 registry STUB for Claude Code v1-default | Low | M4.x freezes at "Claude Code v1-default only at v8.0"; OpenCode is post-v8.0 |
| 5 | Existing `skill_install` is M1.1-scoped (Ghostty + tmux + Claude Code only); does NOT include `~/lattice/` workspace bootstrap | Medium | M4.x extends with a workspace-bootstrap layer (`skill_install_workspace` or similar at aDNA.aDNA side); LatticeTerminal owns base installer + aDNA owns workspace-layer is the natural seam |
| 6 | macOS code-signing + notarization required | Medium | M4.4 (CI/CD) owns this; ADR-015 (M4.2) must specify which entity ships the signed binary (LatticeProtocol org) |

## §7 Recommended Phase-4 contract clause skeleton (input to D3)

Based on this synthesis, the 8-clause Phase-4 contract should specify:

- **A. Installer repo location** = LatticeTerminal.aDNA hosts the base installer skill (existing `what/latticeterminal/.claude/skills/skill_install/SKILL.md`); aDNA.aDNA hosts the workspace-bootstrap extension at `aDNA.aDNA/how/skills/skill_install_workspace.md` (or similar; M4.3 names canonical location). Both repos cross-reference. *[Pending D10 ratification at G2]*
- **B. Agent harness ownership** = LatticeAgent.aDNA owns the HARNESS-CONTRACT + PROVIDER-CONTRACT; v8.0 pins Claude Code v1-default only; OpenCode co-provider deferred to v8.x.
- **C. Workspace router sync** = aDNA installer skill produces `~/lattice/CLAUDE.md` (router) + `.adna/` template clone + invokes LatticeTerminal `cmd/install` for the base layer; node.aDNA bootstrap fires per existing `.adna/how/skills/skill_node_bootstrap_interview.md`.
- **D. CI/CD platform strategy** = GitHub Actions (matches both vault patterns); release artifacts pushed to `LatticeProtocol/lattice-install` (new lightweight repo) OR to LatticeTerminal releases (TBD at M4.4).
- **E. Binary distribution channels** = `curl install.lattice.dev | sh` (macOS Intel + Apple Silicon at v8.0); `.ps1` + Linux package candidates deferred per ADR-019.
- **F. Cross-platform support matrix** = inherit from LatticeTerminal ADR-016 BACKEND-MATRIX; macOS SHIP at v8.0; Linux/Windows DG-C-gated.
- **G. LatticeTerminal signoff gate** = Spock validates via coord-memo ack at M4.2 ADR-015 ratification + M4.3 co-design close.
- **H. Code-signing + notarization** = macOS notarization required for v8.0 ship (signed by LatticeProtocol org Apple Developer account); Windows signing tracked in v8.x.

## §8 Self-reference (Standing Order #8 — 25th tactical invocation in v8)

This synthesis fires the 25th tactical invocation of Project Standing Order #8 self-reference: the synthesis cites the cross-vault read pattern as its own substrate, mirroring M3.6's Explore-subagent-fold-into-deliverable pattern (2nd canonical instance of cross-vault paired-read synthesis after M3.6's airlock-ecosystem AAR substrate).

---

**Output disposition**: substrate for D3 (Phase-4 contract draft) + D2 (coord memo body). Permanent artifact at `missions/artifacts/`.
